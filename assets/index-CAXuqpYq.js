(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();/**
* @vue/shared v3.5.10
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function dl(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const ht={},Ls=[],Kn=()=>{},xp=()=>!1,Xo=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),fl=n=>n.startsWith("onUpdate:"),Xt=Object.assign,pl=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},yp=Object.prototype.hasOwnProperty,rt=(n,e)=>yp.call(n,e),Ke=Array.isArray,ur=n=>qo(n)==="[object Map]",Mp=n=>qo(n)==="[object Set]",je=n=>typeof n=="function",Ht=n=>typeof n=="string",Ys=n=>typeof n=="symbol",Ct=n=>n!==null&&typeof n=="object",id=n=>(Ct(n)||je(n))&&je(n.then)&&je(n.catch),Sp=Object.prototype.toString,qo=n=>Sp.call(n),wp=n=>qo(n).slice(8,-1),Ep=n=>qo(n)==="[object Object]",ml=n=>Ht(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,hr=dl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Yo=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},bp=/-(\w)/g,Cn=Yo(n=>n.replace(bp,(e,t)=>t?t.toUpperCase():"")),Tp=/\B([A-Z])/g,os=Yo(n=>n.replace(Tp,"-$1").toLowerCase()),jo=Yo(n=>n.charAt(0).toUpperCase()+n.slice(1)),fa=Yo(n=>n?`on${jo(n)}`:""),Ui=(n,e)=>!Object.is(n,e),pa=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},sd=(n,e,t,i=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:i,value:t})},Ap=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let su;const rd=()=>su||(su=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function gl(n){if(Ke(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],s=Ht(i)?Lp(i):gl(i);if(s)for(const r in s)e[r]=s[r]}return e}else if(Ht(n)||Ct(n))return n}const Rp=/;(?![^(]*\))/g,Pp=/:([^]+)/,Cp=/\/\*[^]*?\*\//g;function Lp(n){const e={};return n.replace(Cp,"").split(Rp).forEach(t=>{if(t){const i=t.split(Pp);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function yn(n){let e="";if(Ht(n))e=n;else if(Ke(n))for(let t=0;t<n.length;t++){const i=yn(n[t]);i&&(e+=i+" ")}else if(Ct(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const Ip="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Dp=dl(Ip);function od(n){return!!n||n===""}/**
* @vue/reactivity v3.5.10
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let _n;class Up{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=_n,!e&&_n&&(this.index=(_n.scopes||(_n.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=_n;try{return _n=this,e()}finally{_n=t}}}on(){_n=this}off(){_n=this.parent}stop(e){if(this._active){let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.scopes)for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function Np(){return _n}let ft;const ma=new WeakSet;class ad{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,_n&&_n.active&&_n.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,ma.has(this)&&(ma.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||ld(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,ru(this),ud(this);const e=ft,t=Gn;ft=this,Gn=!0;try{return this.fn()}finally{hd(this),ft=e,Gn=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)xl(e);this.deps=this.depsTail=void 0,ru(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?ma.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){lc(this)&&this.run()}get dirty(){return lc(this)}}let cd=0,Rs;function ld(n){n.flags|=8,n.next=Rs,Rs=n}function _l(){cd++}function vl(){if(--cd>0)return;let n;for(;Rs;){let e=Rs,t;for(;e;)e.flags&1||(e.flags&=-9),e=e.next;for(e=Rs,Rs=void 0;e;){if(t=e.next,e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){n||(n=i)}e=t}}if(n)throw n}function ud(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function hd(n){let e,t=n.depsTail,i=t;for(;i;){const s=i.prevDep;i.version===-1?(i===t&&(t=s),xl(i),Fp(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=s}n.deps=e,n.depsTail=t}function lc(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(dd(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function dd(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===Sr))return;n.globalVersion=Sr;const e=n.dep;if(n.flags|=2,e.version>0&&!n.isSSR&&n.deps&&!lc(n)){n.flags&=-3;return}const t=ft,i=Gn;ft=n,Gn=!0;try{ud(n);const s=n.fn(n._value);(e.version===0||Ui(s,n._value))&&(n._value=s,e.version++)}catch(s){throw e.version++,s}finally{ft=t,Gn=i,hd(n),n.flags&=-3}}function xl(n,e=!1){const{dep:t,prevSub:i,nextSub:s}=n;if(i&&(i.nextSub=s,n.prevSub=void 0),s&&(s.prevSub=i,n.nextSub=void 0),t.subs===n&&(t.subs=i),!t.subs&&t.computed){t.computed.flags&=-5;for(let r=t.computed.deps;r;r=r.nextDep)xl(r,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function Fp(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let Gn=!0;const fd=[];function Fi(){fd.push(Gn),Gn=!1}function Oi(){const n=fd.pop();Gn=n===void 0?!0:n}function ru(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=ft;ft=void 0;try{e()}finally{ft=t}}}let Sr=0;class Op{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class yl{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.target=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!ft||!Gn||ft===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==ft)t=this.activeLink=new Op(ft,this),ft.deps?(t.prevDep=ft.depsTail,ft.depsTail.nextDep=t,ft.depsTail=t):ft.deps=ft.depsTail=t,pd(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const i=t.nextDep;i.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=i),t.prevDep=ft.depsTail,t.nextDep=void 0,ft.depsTail.nextDep=t,ft.depsTail=t,ft.deps===t&&(ft.deps=i)}return t}trigger(e){this.version++,Sr++,this.notify(e)}notify(e){_l();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{vl()}}}function pd(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)pd(i)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const uc=new WeakMap,es=Symbol(""),hc=Symbol(""),wr=Symbol("");function Qt(n,e,t){if(Gn&&ft){let i=uc.get(n);i||uc.set(n,i=new Map);let s=i.get(t);s||(i.set(t,s=new yl),s.target=n,s.map=i,s.key=t),s.track()}}function pi(n,e,t,i,s,r){const o=uc.get(n);if(!o){Sr++;return}const a=c=>{c&&c.trigger()};if(_l(),e==="clear")o.forEach(a);else{const c=Ke(n),l=c&&ml(t);if(c&&t==="length"){const h=Number(i);o.forEach((u,d)=>{(d==="length"||d===wr||!Ys(d)&&d>=h)&&a(u)})}else switch(t!==void 0&&a(o.get(t)),l&&a(o.get(wr)),e){case"add":c?l&&a(o.get("length")):(a(o.get(es)),ur(n)&&a(o.get(hc)));break;case"delete":c||(a(o.get(es)),ur(n)&&a(o.get(hc)));break;case"set":ur(n)&&a(o.get(es));break}}vl()}function us(n){const e=at(n);return e===n?e:(Qt(e,"iterate",wr),Hn(n)?e:e.map(on))}function Ml(n){return Qt(n=at(n),"iterate",wr),n}const Bp={__proto__:null,[Symbol.iterator](){return ga(this,Symbol.iterator,on)},concat(...n){return us(this).concat(...n.map(e=>Ke(e)?us(e):e))},entries(){return ga(this,"entries",n=>(n[1]=on(n[1]),n))},every(n,e){return ti(this,"every",n,e,void 0,arguments)},filter(n,e){return ti(this,"filter",n,e,t=>t.map(on),arguments)},find(n,e){return ti(this,"find",n,e,on,arguments)},findIndex(n,e){return ti(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return ti(this,"findLast",n,e,on,arguments)},findLastIndex(n,e){return ti(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return ti(this,"forEach",n,e,void 0,arguments)},includes(...n){return _a(this,"includes",n)},indexOf(...n){return _a(this,"indexOf",n)},join(n){return us(this).join(n)},lastIndexOf(...n){return _a(this,"lastIndexOf",n)},map(n,e){return ti(this,"map",n,e,void 0,arguments)},pop(){return Js(this,"pop")},push(...n){return Js(this,"push",n)},reduce(n,...e){return ou(this,"reduce",n,e)},reduceRight(n,...e){return ou(this,"reduceRight",n,e)},shift(){return Js(this,"shift")},some(n,e){return ti(this,"some",n,e,void 0,arguments)},splice(...n){return Js(this,"splice",n)},toReversed(){return us(this).toReversed()},toSorted(n){return us(this).toSorted(n)},toSpliced(...n){return us(this).toSpliced(...n)},unshift(...n){return Js(this,"unshift",n)},values(){return ga(this,"values",on)}};function ga(n,e,t){const i=Ml(n),s=i[e]();return i!==n&&!Hn(n)&&(s._next=s.next,s.next=()=>{const r=s._next();return r.value&&(r.value=t(r.value)),r}),s}const zp=Array.prototype;function ti(n,e,t,i,s,r){const o=Ml(n),a=o!==n&&!Hn(n),c=o[e];if(c!==zp[e]){const u=c.apply(n,r);return a?on(u):u}let l=t;o!==n&&(a?l=function(u,d){return t.call(this,on(u),d,n)}:t.length>2&&(l=function(u,d){return t.call(this,u,d,n)}));const h=c.call(o,l,i);return a&&s?s(h):h}function ou(n,e,t,i){const s=Ml(n);let r=t;return s!==n&&(Hn(n)?t.length>3&&(r=function(o,a,c){return t.call(this,o,a,c,n)}):r=function(o,a,c){return t.call(this,o,on(a),c,n)}),s[e](r,...i)}function _a(n,e,t){const i=at(n);Qt(i,"iterate",wr);const s=i[e](...t);return(s===-1||s===!1)&&bl(t[0])?(t[0]=at(t[0]),i[e](...t)):s}function Js(n,e,t=[]){Fi(),_l();const i=at(n)[e].apply(n,t);return vl(),Oi(),i}const Gp=dl("__proto__,__v_isRef,__isVue"),md=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(Ys));function Hp(n){Ys(n)||(n=String(n));const e=at(this);return Qt(e,"has",n),e.hasOwnProperty(n)}class gd{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,i){const s=this._isReadonly,r=this._isShallow;if(t==="__v_isReactive")return!s;if(t==="__v_isReadonly")return s;if(t==="__v_isShallow")return r;if(t==="__v_raw")return i===(s?r?em:yd:r?xd:vd).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=Ke(e);if(!s){let c;if(o&&(c=Bp[t]))return c;if(t==="hasOwnProperty")return Hp}const a=Reflect.get(e,t,Zt(e)?e:i);return(Ys(t)?md.has(t):Gp(t))||(s||Qt(e,"get",t),r)?a:Zt(a)?o&&ml(t)?a:a.value:Ct(a)?s?Sd(a):Ko(a):a}}class _d extends gd{constructor(e=!1){super(!1,e)}set(e,t,i,s){let r=e[t];if(!this._isShallow){const c=ts(r);if(!Hn(i)&&!ts(i)&&(r=at(r),i=at(i)),!Ke(e)&&Zt(r)&&!Zt(i))return c?!1:(r.value=i,!0)}const o=Ke(e)&&ml(t)?Number(t)<e.length:rt(e,t),a=Reflect.set(e,t,i,Zt(e)?e:s);return e===at(s)&&(o?Ui(i,r)&&pi(e,"set",t,i):pi(e,"add",t,i)),a}deleteProperty(e,t){const i=rt(e,t);e[t];const s=Reflect.deleteProperty(e,t);return s&&i&&pi(e,"delete",t,void 0),s}has(e,t){const i=Reflect.has(e,t);return(!Ys(t)||!md.has(t))&&Qt(e,"has",t),i}ownKeys(e){return Qt(e,"iterate",Ke(e)?"length":es),Reflect.ownKeys(e)}}class kp extends gd{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const Vp=new _d,Wp=new kp,Xp=new _d(!0);const Sl=n=>n,$o=n=>Reflect.getPrototypeOf(n);function Xr(n,e,t=!1,i=!1){n=n.__v_raw;const s=at(n),r=at(e);t||(Ui(e,r)&&Qt(s,"get",e),Qt(s,"get",r));const{has:o}=$o(s),a=i?Sl:t?Tl:on;if(o.call(s,e))return a(n.get(e));if(o.call(s,r))return a(n.get(r));n!==s&&n.get(e)}function qr(n,e=!1){const t=this.__v_raw,i=at(t),s=at(n);return e||(Ui(n,s)&&Qt(i,"has",n),Qt(i,"has",s)),n===s?t.has(n):t.has(n)||t.has(s)}function Yr(n,e=!1){return n=n.__v_raw,!e&&Qt(at(n),"iterate",es),Reflect.get(n,"size",n)}function au(n,e=!1){!e&&!Hn(n)&&!ts(n)&&(n=at(n));const t=at(this);return $o(t).has.call(t,n)||(t.add(n),pi(t,"add",n,n)),this}function cu(n,e,t=!1){!t&&!Hn(e)&&!ts(e)&&(e=at(e));const i=at(this),{has:s,get:r}=$o(i);let o=s.call(i,n);o||(n=at(n),o=s.call(i,n));const a=r.call(i,n);return i.set(n,e),o?Ui(e,a)&&pi(i,"set",n,e):pi(i,"add",n,e),this}function lu(n){const e=at(this),{has:t,get:i}=$o(e);let s=t.call(e,n);s||(n=at(n),s=t.call(e,n)),i&&i.call(e,n);const r=e.delete(n);return s&&pi(e,"delete",n,void 0),r}function uu(){const n=at(this),e=n.size!==0,t=n.clear();return e&&pi(n,"clear",void 0,void 0),t}function jr(n,e){return function(i,s){const r=this,o=r.__v_raw,a=at(o),c=e?Sl:n?Tl:on;return!n&&Qt(a,"iterate",es),o.forEach((l,h)=>i.call(s,c(l),c(h),r))}}function $r(n,e,t){return function(...i){const s=this.__v_raw,r=at(s),o=ur(r),a=n==="entries"||n===Symbol.iterator&&o,c=n==="keys"&&o,l=s[n](...i),h=t?Sl:e?Tl:on;return!e&&Qt(r,"iterate",c?hc:es),{next(){const{value:u,done:d}=l.next();return d?{value:u,done:d}:{value:a?[h(u[0]),h(u[1])]:h(u),done:d}},[Symbol.iterator](){return this}}}}function xi(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function qp(){const n={get(r){return Xr(this,r)},get size(){return Yr(this)},has:qr,add:au,set:cu,delete:lu,clear:uu,forEach:jr(!1,!1)},e={get(r){return Xr(this,r,!1,!0)},get size(){return Yr(this)},has:qr,add(r){return au.call(this,r,!0)},set(r,o){return cu.call(this,r,o,!0)},delete:lu,clear:uu,forEach:jr(!1,!0)},t={get(r){return Xr(this,r,!0)},get size(){return Yr(this,!0)},has(r){return qr.call(this,r,!0)},add:xi("add"),set:xi("set"),delete:xi("delete"),clear:xi("clear"),forEach:jr(!0,!1)},i={get(r){return Xr(this,r,!0,!0)},get size(){return Yr(this,!0)},has(r){return qr.call(this,r,!0)},add:xi("add"),set:xi("set"),delete:xi("delete"),clear:xi("clear"),forEach:jr(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{n[r]=$r(r,!1,!1),t[r]=$r(r,!0,!1),e[r]=$r(r,!1,!0),i[r]=$r(r,!0,!0)}),[n,t,e,i]}const[Yp,jp,$p,Kp]=qp();function wl(n,e){const t=e?n?Kp:$p:n?jp:Yp;return(i,s,r)=>s==="__v_isReactive"?!n:s==="__v_isReadonly"?n:s==="__v_raw"?i:Reflect.get(rt(t,s)&&s in i?t:i,s,r)}const Zp={get:wl(!1,!1)},Jp={get:wl(!1,!0)},Qp={get:wl(!0,!1)};const vd=new WeakMap,xd=new WeakMap,yd=new WeakMap,em=new WeakMap;function tm(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function nm(n){return n.__v_skip||!Object.isExtensible(n)?0:tm(wp(n))}function Ko(n){return ts(n)?n:El(n,!1,Vp,Zp,vd)}function Md(n){return El(n,!1,Xp,Jp,xd)}function Sd(n){return El(n,!0,Wp,Qp,yd)}function El(n,e,t,i,s){if(!Ct(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const r=s.get(n);if(r)return r;const o=nm(n);if(o===0)return n;const a=new Proxy(n,o===2?i:t);return s.set(n,a),a}function dr(n){return ts(n)?dr(n.__v_raw):!!(n&&n.__v_isReactive)}function ts(n){return!!(n&&n.__v_isReadonly)}function Hn(n){return!!(n&&n.__v_isShallow)}function bl(n){return n?!!n.__v_raw:!1}function at(n){const e=n&&n.__v_raw;return e?at(e):n}function im(n){return!rt(n,"__v_skip")&&Object.isExtensible(n)&&sd(n,"__v_skip",!0),n}const on=n=>Ct(n)?Ko(n):n,Tl=n=>Ct(n)?Sd(n):n;function Zt(n){return n?n.__v_isRef===!0:!1}function et(n){return wd(n,!1)}function sm(n){return wd(n,!0)}function wd(n,e){return Zt(n)?n:new rm(n,e)}class rm{constructor(e,t){this.dep=new yl,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:at(e),this._value=t?e:on(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,i=this.__v_isShallow||Hn(e)||ts(e);e=i?e:at(e),Ui(e,t)&&(this._rawValue=e,this._value=i?e:on(e),this.dep.trigger())}}function An(n){return Zt(n)?n.value:n}const om={get:(n,e,t)=>e==="__v_raw"?n:An(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const s=n[e];return Zt(s)&&!Zt(t)?(s.value=t,!0):Reflect.set(n,e,t,i)}};function Ed(n){return dr(n)?n:new Proxy(n,om)}class am{constructor(e,t,i){this.fn=e,this.setter=t,this._value=void 0,this.dep=new yl(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Sr-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&ft!==this)return ld(this),!0}get value(){const e=this.dep.track();return dd(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function cm(n,e,t=!1){let i,s;return je(n)?i=n:(i=n.get,s=n.set),new am(i,s,t)}const Kr={},Uo=new WeakMap;let ji;function lm(n,e=!1,t=ji){if(t){let i=Uo.get(t);i||Uo.set(t,i=[]),i.push(n)}}function um(n,e,t=ht){const{immediate:i,deep:s,once:r,scheduler:o,augmentJob:a,call:c}=t,l=S=>s?S:Hn(S)||s===!1||s===0?hi(S,1):hi(S);let h,u,d,f,_=!1,M=!1;if(Zt(n)?(u=()=>n.value,_=Hn(n)):dr(n)?(u=()=>l(n),_=!0):Ke(n)?(M=!0,_=n.some(S=>dr(S)||Hn(S)),u=()=>n.map(S=>{if(Zt(S))return S.value;if(dr(S))return l(S);if(je(S))return c?c(S,2):S()})):je(n)?e?u=c?()=>c(n,2):n:u=()=>{if(d){Fi();try{d()}finally{Oi()}}const S=ji;ji=h;try{return c?c(n,3,[f]):n(f)}finally{ji=S}}:u=Kn,e&&s){const S=u,D=s===!0?1/0:s;u=()=>hi(S(),D)}const p=Np(),m=()=>{h.stop(),p&&pl(p.effects,h)};if(r&&e){const S=e;e=(...D)=>{S(...D),m()}}let E=M?new Array(n.length).fill(Kr):Kr;const y=S=>{if(!(!(h.flags&1)||!h.dirty&&!S))if(e){const D=h.run();if(s||_||(M?D.some((C,A)=>Ui(C,E[A])):Ui(D,E))){d&&d();const C=ji;ji=h;try{const A=[D,E===Kr?void 0:M&&E[0]===Kr?[]:E,f];c?c(e,3,A):e(...A),E=D}finally{ji=C}}}else h.run()};return a&&a(y),h=new ad(u),h.scheduler=o?()=>o(y,!1):y,f=S=>lm(S,!1,h),d=h.onStop=()=>{const S=Uo.get(h);if(S){if(c)c(S,4);else for(const D of S)D();Uo.delete(h)}},e?i?y(!0):E=h.run():o?o(y.bind(null,!0),!0):h.run(),m.pause=h.pause.bind(h),m.resume=h.resume.bind(h),m.stop=m,m}function hi(n,e=1/0,t){if(e<=0||!Ct(n)||n.__v_skip||(t=t||new Set,t.has(n)))return n;if(t.add(n),e--,Zt(n))hi(n.value,e,t);else if(Ke(n))for(let i=0;i<n.length;i++)hi(n[i],e,t);else if(Mp(n)||ur(n))n.forEach(i=>{hi(i,e,t)});else if(Ep(n)){for(const i in n)hi(n[i],e,t);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&hi(n[i],e,t)}return n}/**
* @vue/runtime-core v3.5.10
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Fr(n,e,t,i){try{return i?n(...i):n()}catch(s){Zo(s,e,t)}}function Jn(n,e,t,i){if(je(n)){const s=Fr(n,e,t,i);return s&&id(s)&&s.catch(r=>{Zo(r,e,t)}),s}if(Ke(n)){const s=[];for(let r=0;r<n.length;r++)s.push(Jn(n[r],e,t,i));return s}}function Zo(n,e,t,i=!0){const s=e?e.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||ht;if(e){let a=e.parent;const c=e.proxy,l=`https://vuejs.org/error-reference/#runtime-${t}`;for(;a;){const h=a.ec;if(h){for(let u=0;u<h.length;u++)if(h[u](n,c,l)===!1)return}a=a.parent}if(r){Fi(),Fr(r,null,10,[n,c,l]),Oi();return}}hm(n,t,s,i,o)}function hm(n,e,t,i=!0,s=!1){if(s)throw n;console.error(n)}let Er=!1,dc=!1;const an=[];let Yn=0;const Is=[];let Ai=null,bs=0;const bd=Promise.resolve();let Al=null;function Td(n){const e=Al||bd;return n?e.then(this?n.bind(this):n):e}function dm(n){let e=Er?Yn+1:0,t=an.length;for(;e<t;){const i=e+t>>>1,s=an[i],r=br(s);r<n||r===n&&s.flags&2?e=i+1:t=i}return e}function Rl(n){if(!(n.flags&1)){const e=br(n),t=an[an.length-1];!t||!(n.flags&2)&&e>=br(t)?an.push(n):an.splice(dm(e),0,n),n.flags|=1,Ad()}}function Ad(){!Er&&!dc&&(dc=!0,Al=bd.then(Pd))}function fm(n){Ke(n)?Is.push(...n):Ai&&n.id===-1?Ai.splice(bs+1,0,n):n.flags&1||(Is.push(n),n.flags|=1),Ad()}function hu(n,e,t=Er?Yn+1:0){for(;t<an.length;t++){const i=an[t];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;an.splice(t,1),t--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function Rd(n){if(Is.length){const e=[...new Set(Is)].sort((t,i)=>br(t)-br(i));if(Is.length=0,Ai){Ai.push(...e);return}for(Ai=e,bs=0;bs<Ai.length;bs++){const t=Ai[bs];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}Ai=null,bs=0}}const br=n=>n.id==null?n.flags&2?-1:1/0:n.id;function Pd(n){dc=!1,Er=!0;try{for(Yn=0;Yn<an.length;Yn++){const e=an[Yn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Fr(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Yn<an.length;Yn++){const e=an[Yn];e&&(e.flags&=-2)}Yn=0,an.length=0,Rd(),Er=!1,Al=null,(an.length||Is.length)&&Pd()}}let vn=null,Cd=null;function No(n){const e=vn;return vn=n,Cd=n&&n.type.__scopeId||null,e}function So(n,e=vn,t){if(!e||n._n)return n;const i=(...s)=>{i._d&&Mu(-1);const r=No(e);let o;try{o=n(...s)}finally{No(r),i._d&&Mu(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function pm(n,e){if(vn===null)return n;const t=ia(vn),i=n.dirs||(n.dirs=[]);for(let s=0;s<e.length;s++){let[r,o,a,c=ht]=e[s];r&&(je(r)&&(r={mounted:r,updated:r}),r.deep&&hi(o),i.push({dir:r,instance:t,value:o,oldValue:void 0,arg:a,modifiers:c}))}return n}function Gi(n,e,t,i){const s=n.dirs,r=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];r&&(a.oldValue=r[o].value);let c=a.dir[i];c&&(Fi(),Jn(c,t,8,[n.el,a,n,e]),Oi())}}const mm=Symbol("_vte"),gm=n=>n.__isTeleport;function Pl(n,e){n.shapeFlag&6&&n.component?(n.transition=e,Pl(n.component.subTree,e)):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}/*! #__NO_SIDE_EFFECTS__ */function kt(n,e){return je(n)?Xt({name:n.name},e,{setup:n}):n}function Ld(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function fc(n,e,t,i,s=!1){if(Ke(n)){n.forEach((_,M)=>fc(_,e&&(Ke(e)?e[M]:e),t,i,s));return}if(fr(i)&&!s)return;const r=i.shapeFlag&4?ia(i.component):i.el,o=s?null:r,{i:a,r:c}=n,l=e&&e.r,h=a.refs===ht?a.refs={}:a.refs,u=a.setupState,d=at(u),f=u===ht?()=>!1:_=>rt(d,_);if(l!=null&&l!==c&&(Ht(l)?(h[l]=null,f(l)&&(u[l]=null)):Zt(l)&&(l.value=null)),je(c))Fr(c,a,12,[o,h]);else{const _=Ht(c),M=Zt(c);if(_||M){const p=()=>{if(n.f){const m=_?f(c)?u[c]:h[c]:c.value;s?Ke(m)&&pl(m,r):Ke(m)?m.includes(r)||m.push(r):_?(h[c]=[r],f(c)&&(u[c]=h[c])):(c.value=[r],n.k&&(h[n.k]=c.value))}else _?(h[c]=o,f(c)&&(u[c]=o)):M&&(c.value=o,n.k&&(h[n.k]=o))};o?(p.id=-1,gn(p,t)):p()}}}const fr=n=>!!n.type.__asyncLoader,Id=n=>n.type.__isKeepAlive;function _m(n,e){Dd(n,"a",e)}function vm(n,e){Dd(n,"da",e)}function Dd(n,e,t=Kt){const i=n.__wdc||(n.__wdc=()=>{let s=t;for(;s;){if(s.isDeactivated)return;s=s.parent}return n()});if(Jo(e,i,t),t){let s=t.parent;for(;s&&s.parent;)Id(s.parent.vnode)&&xm(i,e,t,s),s=s.parent}}function xm(n,e,t,i){const s=Jo(e,n,i,!0);Qo(()=>{pl(i[e],s)},t)}function Jo(n,e,t=Kt,i=!1){if(t){const s=t[n]||(t[n]=[]),r=e.__weh||(e.__weh=(...o)=>{Fi();const a=Or(t),c=Jn(e,t,n,o);return a(),Oi(),c});return i?s.unshift(r):s.push(r),r}}const _i=n=>(e,t=Kt)=>{(!na||n==="sp")&&Jo(n,(...i)=>e(...i),t)},ym=_i("bm"),qt=_i("m"),Mm=_i("bu"),Sm=_i("u"),wm=_i("bum"),Qo=_i("um"),Em=_i("sp"),bm=_i("rtg"),Tm=_i("rtc");function Am(n,e=Kt){Jo("ec",n,e)}const Rm="components";function du(n,e){return Cm(Rm,n,!0,e)||n}const Pm=Symbol.for("v-ndc");function Cm(n,e,t=!0,i=!1){const s=vn||Kt;if(s){const r=s.type;{const a=v0(r,!1);if(a&&(a===e||a===Cn(e)||a===jo(Cn(e))))return r}const o=fu(s[n]||r[n],e)||fu(s.appContext[n],e);return!o&&i?r:o}}function fu(n,e){return n&&(n[e]||n[Cn(e)]||n[jo(Cn(e))])}const pc=n=>n?Qd(n)?ia(n):pc(n.parent):null,pr=Xt(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>pc(n.parent),$root:n=>pc(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>Cl(n),$forceUpdate:n=>n.f||(n.f=()=>{Rl(n.update)}),$nextTick:n=>n.n||(n.n=Td.bind(n.proxy)),$watch:n=>Zm.bind(n)}),va=(n,e)=>n!==ht&&!n.__isScriptSetup&&rt(n,e),Lm={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:i,data:s,props:r,accessCache:o,type:a,appContext:c}=n;let l;if(e[0]!=="$"){const f=o[e];if(f!==void 0)switch(f){case 1:return i[e];case 2:return s[e];case 4:return t[e];case 3:return r[e]}else{if(va(i,e))return o[e]=1,i[e];if(s!==ht&&rt(s,e))return o[e]=2,s[e];if((l=n.propsOptions[0])&&rt(l,e))return o[e]=3,r[e];if(t!==ht&&rt(t,e))return o[e]=4,t[e];mc&&(o[e]=0)}}const h=pr[e];let u,d;if(h)return e==="$attrs"&&Qt(n.attrs,"get",""),h(n);if((u=a.__cssModules)&&(u=u[e]))return u;if(t!==ht&&rt(t,e))return o[e]=4,t[e];if(d=c.config.globalProperties,rt(d,e))return d[e]},set({_:n},e,t){const{data:i,setupState:s,ctx:r}=n;return va(s,e)?(s[e]=t,!0):i!==ht&&rt(i,e)?(i[e]=t,!0):rt(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(r[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:s,propsOptions:r}},o){let a;return!!t[o]||n!==ht&&rt(n,o)||va(e,o)||(a=r[0])&&rt(a,o)||rt(i,o)||rt(pr,o)||rt(s.config.globalProperties,o)},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:rt(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function pu(n){return Ke(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let mc=!0;function Im(n){const e=Cl(n),t=n.proxy,i=n.ctx;mc=!1,e.beforeCreate&&mu(e.beforeCreate,n,"bc");const{data:s,computed:r,methods:o,watch:a,provide:c,inject:l,created:h,beforeMount:u,mounted:d,beforeUpdate:f,updated:_,activated:M,deactivated:p,beforeDestroy:m,beforeUnmount:E,destroyed:y,unmounted:S,render:D,renderTracked:C,renderTriggered:A,errorCaptured:N,serverPrefetch:te,expose:x,inheritAttrs:b,components:X,directives:H,filters:J}=e;if(l&&Dm(l,i,null),o)for(const K in o){const z=o[K];je(z)&&(i[K]=z.bind(t))}if(s){const K=s.call(t,t);Ct(K)&&(n.data=Ko(K))}if(mc=!0,r)for(const K in r){const z=r[K],pe=je(z)?z.bind(t,t):je(z.get)?z.get.bind(t,t):Kn,me=!je(z)&&je(z.set)?z.set.bind(t):Kn,_e=Wt({get:pe,set:me});Object.defineProperty(i,K,{enumerable:!0,configurable:!0,get:()=>_e.value,set:Me=>_e.value=Me})}if(a)for(const K in a)Ud(a[K],i,t,K);if(c){const K=je(c)?c.call(t):c;Reflect.ownKeys(K).forEach(z=>{wo(z,K[z])})}h&&mu(h,n,"c");function G(K,z){Ke(z)?z.forEach(pe=>K(pe.bind(t))):z&&K(z.bind(t))}if(G(ym,u),G(qt,d),G(Mm,f),G(Sm,_),G(_m,M),G(vm,p),G(Am,N),G(Tm,C),G(bm,A),G(wm,E),G(Qo,S),G(Em,te),Ke(x))if(x.length){const K=n.exposed||(n.exposed={});x.forEach(z=>{Object.defineProperty(K,z,{get:()=>t[z],set:pe=>t[z]=pe})})}else n.exposed||(n.exposed={});D&&n.render===Kn&&(n.render=D),b!=null&&(n.inheritAttrs=b),X&&(n.components=X),H&&(n.directives=H),te&&Ld(n)}function Dm(n,e,t=Kn){Ke(n)&&(n=gc(n));for(const i in n){const s=n[i];let r;Ct(s)?"default"in s?r=mi(s.from||i,s.default,!0):r=mi(s.from||i):r=mi(s),Zt(r)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[i]=r}}function mu(n,e,t){Jn(Ke(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function Ud(n,e,t,i){let s=i.includes(".")?jd(t,i):()=>t[i];if(Ht(n)){const r=e[n];je(r)&&yt(s,r)}else if(je(n))yt(s,n.bind(t));else if(Ct(n))if(Ke(n))n.forEach(r=>Ud(r,e,t,i));else{const r=je(n.handler)?n.handler.bind(t):e[n.handler];je(r)&&yt(s,r,n)}}function Cl(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=n.appContext,a=r.get(e);let c;return a?c=a:!s.length&&!t&&!i?c=e:(c={},s.length&&s.forEach(l=>Fo(c,l,o,!0)),Fo(c,e,o)),Ct(e)&&r.set(e,c),c}function Fo(n,e,t,i=!1){const{mixins:s,extends:r}=e;r&&Fo(n,r,t,!0),s&&s.forEach(o=>Fo(n,o,t,!0));for(const o in e)if(!(i&&o==="expose")){const a=Um[o]||t&&t[o];n[o]=a?a(n[o],e[o]):e[o]}return n}const Um={data:gu,props:_u,emits:_u,methods:cr,computed:cr,beforeCreate:nn,created:nn,beforeMount:nn,mounted:nn,beforeUpdate:nn,updated:nn,beforeDestroy:nn,beforeUnmount:nn,destroyed:nn,unmounted:nn,activated:nn,deactivated:nn,errorCaptured:nn,serverPrefetch:nn,components:cr,directives:cr,watch:Fm,provide:gu,inject:Nm};function gu(n,e){return e?n?function(){return Xt(je(n)?n.call(this,this):n,je(e)?e.call(this,this):e)}:e:n}function Nm(n,e){return cr(gc(n),gc(e))}function gc(n){if(Ke(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function nn(n,e){return n?[...new Set([].concat(n,e))]:e}function cr(n,e){return n?Xt(Object.create(null),n,e):e}function _u(n,e){return n?Ke(n)&&Ke(e)?[...new Set([...n,...e])]:Xt(Object.create(null),pu(n),pu(e??{})):e}function Fm(n,e){if(!n)return e;if(!e)return n;const t=Xt(Object.create(null),n);for(const i in e)t[i]=nn(n[i],e[i]);return t}function Nd(){return{app:null,config:{isNativeTag:xp,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Om=0;function Bm(n,e){return function(i,s=null){je(i)||(i=Xt({},i)),s!=null&&!Ct(s)&&(s=null);const r=Nd(),o=new WeakSet,a=[];let c=!1;const l=r.app={_uid:Om++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:y0,get config(){return r.config},set config(h){},use(h,...u){return o.has(h)||(h&&je(h.install)?(o.add(h),h.install(l,...u)):je(h)&&(o.add(h),h(l,...u))),l},mixin(h){return r.mixins.includes(h)||r.mixins.push(h),l},component(h,u){return u?(r.components[h]=u,l):r.components[h]},directive(h,u){return u?(r.directives[h]=u,l):r.directives[h]},mount(h,u,d){if(!c){const f=l._ceVNode||At(i,s);return f.appContext=r,d===!0?d="svg":d===!1&&(d=void 0),u&&e?e(f,h):n(f,h,d),c=!0,l._container=h,h.__vue_app__=l,ia(f.component)}},onUnmount(h){a.push(h)},unmount(){c&&(Jn(a,l._instance,16),n(null,l._container),delete l._container.__vue_app__)},provide(h,u){return r.provides[h]=u,l},runWithContext(h){const u=Ds;Ds=l;try{return h()}finally{Ds=u}}};return l}}let Ds=null;function wo(n,e){if(Kt){let t=Kt.provides;const i=Kt.parent&&Kt.parent.provides;i===t&&(t=Kt.provides=Object.create(i)),t[n]=e}}function mi(n,e,t=!1){const i=Kt||vn;if(i||Ds){const s=Ds?Ds._context.provides:i?i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(s&&n in s)return s[n];if(arguments.length>1)return t&&je(e)?e.call(i&&i.proxy):e}}const Fd={},Od=()=>Object.create(Fd),Bd=n=>Object.getPrototypeOf(n)===Fd;function zm(n,e,t,i=!1){const s={},r=Od();n.propsDefaults=Object.create(null),zd(n,e,s,r);for(const o in n.propsOptions[0])o in s||(s[o]=void 0);t?n.props=i?s:Md(s):n.type.props?n.props=s:n.props=r,n.attrs=r}function Gm(n,e,t,i){const{props:s,attrs:r,vnode:{patchFlag:o}}=n,a=at(s),[c]=n.propsOptions;let l=!1;if((i||o>0)&&!(o&16)){if(o&8){const h=n.vnode.dynamicProps;for(let u=0;u<h.length;u++){let d=h[u];if(ea(n.emitsOptions,d))continue;const f=e[d];if(c)if(rt(r,d))f!==r[d]&&(r[d]=f,l=!0);else{const _=Cn(d);s[_]=_c(c,a,_,f,n,!1)}else f!==r[d]&&(r[d]=f,l=!0)}}}else{zd(n,e,s,r)&&(l=!0);let h;for(const u in a)(!e||!rt(e,u)&&((h=os(u))===u||!rt(e,h)))&&(c?t&&(t[u]!==void 0||t[h]!==void 0)&&(s[u]=_c(c,a,u,void 0,n,!0)):delete s[u]);if(r!==a)for(const u in r)(!e||!rt(e,u))&&(delete r[u],l=!0)}l&&pi(n.attrs,"set","")}function zd(n,e,t,i){const[s,r]=n.propsOptions;let o=!1,a;if(e)for(let c in e){if(hr(c))continue;const l=e[c];let h;s&&rt(s,h=Cn(c))?!r||!r.includes(h)?t[h]=l:(a||(a={}))[h]=l:ea(n.emitsOptions,c)||(!(c in i)||l!==i[c])&&(i[c]=l,o=!0)}if(r){const c=at(t),l=a||ht;for(let h=0;h<r.length;h++){const u=r[h];t[u]=_c(s,c,u,l[u],n,!rt(l,u))}}return o}function _c(n,e,t,i,s,r){const o=n[t];if(o!=null){const a=rt(o,"default");if(a&&i===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&je(c)){const{propsDefaults:l}=s;if(t in l)i=l[t];else{const h=Or(s);i=l[t]=c.call(null,e),h()}}else i=c;s.ce&&s.ce._setProp(t,i)}o[0]&&(r&&!a?i=!1:o[1]&&(i===""||i===os(t))&&(i=!0))}return i}const Hm=new WeakMap;function Gd(n,e,t=!1){const i=t?Hm:e.propsCache,s=i.get(n);if(s)return s;const r=n.props,o={},a=[];let c=!1;if(!je(n)){const h=u=>{c=!0;const[d,f]=Gd(u,e,!0);Xt(o,d),f&&a.push(...f)};!t&&e.mixins.length&&e.mixins.forEach(h),n.extends&&h(n.extends),n.mixins&&n.mixins.forEach(h)}if(!r&&!c)return Ct(n)&&i.set(n,Ls),Ls;if(Ke(r))for(let h=0;h<r.length;h++){const u=Cn(r[h]);vu(u)&&(o[u]=ht)}else if(r)for(const h in r){const u=Cn(h);if(vu(u)){const d=r[h],f=o[u]=Ke(d)||je(d)?{type:d}:Xt({},d),_=f.type;let M=!1,p=!0;if(Ke(_))for(let m=0;m<_.length;++m){const E=_[m],y=je(E)&&E.name;if(y==="Boolean"){M=!0;break}else y==="String"&&(p=!1)}else M=je(_)&&_.name==="Boolean";f[0]=M,f[1]=p,(M||rt(f,"default"))&&a.push(u)}}const l=[o,a];return Ct(n)&&i.set(n,l),l}function vu(n){return n[0]!=="$"&&!hr(n)}const Hd=n=>n[0]==="_"||n==="$stable",Ll=n=>Ke(n)?n.map(jn):[jn(n)],km=(n,e,t)=>{if(e._n)return e;const i=So((...s)=>Ll(e(...s)),t);return i._c=!1,i},kd=(n,e,t)=>{const i=n._ctx;for(const s in n){if(Hd(s))continue;const r=n[s];if(je(r))e[s]=km(s,r,i);else if(r!=null){const o=Ll(r);e[s]=()=>o}}},Vd=(n,e)=>{const t=Ll(e);n.slots.default=()=>t},Wd=(n,e,t)=>{for(const i in e)(t||i!=="_")&&(n[i]=e[i])},Vm=(n,e,t)=>{const i=n.slots=Od();if(n.vnode.shapeFlag&32){const s=e._;s?(Wd(i,e,t),t&&sd(i,"_",s,!0)):kd(e,i)}else e&&Vd(n,e)},Wm=(n,e,t)=>{const{vnode:i,slots:s}=n;let r=!0,o=ht;if(i.shapeFlag&32){const a=e._;a?t&&a===1?r=!1:Wd(s,e,t):(r=!e.$stable,kd(e,s)),o=e}else e&&(Vd(n,e),o={default:1});if(r)for(const a in s)!Hd(a)&&o[a]==null&&delete s[a]},gn=s0;function Xm(n){return qm(n)}function qm(n,e){const t=rd();t.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:o,createText:a,createComment:c,setText:l,setElementText:h,parentNode:u,nextSibling:d,setScopeId:f=Kn,insertStaticContent:_}=n,M=(g,T,I,U=null,O=null,j=null,ee=void 0,w=null,v=!!T.dynamicChildren)=>{if(g===T)return;g&&!Qs(g,T)&&(U=F(g),Me(g,O,j,!0),g=null),T.patchFlag===-2&&(v=!1,T.dynamicChildren=null);const{type:L,ref:V,shapeFlag:k}=T;switch(L){case ta:p(g,T,I,U);break;case ns:m(g,T,I,U);break;case Ma:g==null&&E(T,I,U,ee);break;case On:X(g,T,I,U,O,j,ee,w,v);break;default:k&1?D(g,T,I,U,O,j,ee,w,v):k&6?H(g,T,I,U,O,j,ee,w,v):(k&64||k&128)&&L.process(g,T,I,U,O,j,ee,w,v,le)}V!=null&&O&&fc(V,g&&g.ref,j,T||g,!T)},p=(g,T,I,U)=>{if(g==null)i(T.el=a(T.children),I,U);else{const O=T.el=g.el;T.children!==g.children&&l(O,T.children)}},m=(g,T,I,U)=>{g==null?i(T.el=c(T.children||""),I,U):T.el=g.el},E=(g,T,I,U)=>{[g.el,g.anchor]=_(g.children,T,I,U,g.el,g.anchor)},y=({el:g,anchor:T},I,U)=>{let O;for(;g&&g!==T;)O=d(g),i(g,I,U),g=O;i(T,I,U)},S=({el:g,anchor:T})=>{let I;for(;g&&g!==T;)I=d(g),s(g),g=I;s(T)},D=(g,T,I,U,O,j,ee,w,v)=>{T.type==="svg"?ee="svg":T.type==="math"&&(ee="mathml"),g==null?C(T,I,U,O,j,ee,w,v):te(g,T,O,j,ee,w,v)},C=(g,T,I,U,O,j,ee,w)=>{let v,L;const{props:V,shapeFlag:k,transition:W,dirs:de}=g;if(v=g.el=o(g.type,j,V&&V.is,V),k&8?h(v,g.children):k&16&&N(g.children,v,null,U,O,xa(g,j),ee,w),de&&Gi(g,null,U,"created"),A(v,g,g.scopeId,ee,U),V){for(const ve in V)ve!=="value"&&!hr(ve)&&r(v,ve,null,V[ve],j,U);"value"in V&&r(v,"value",null,V.value,j),(L=V.onVnodeBeforeMount)&&qn(L,U,g)}de&&Gi(g,null,U,"beforeMount");const he=Ym(O,W);he&&W.beforeEnter(v),i(v,T,I),((L=V&&V.onVnodeMounted)||he||de)&&gn(()=>{L&&qn(L,U,g),he&&W.enter(v),de&&Gi(g,null,U,"mounted")},O)},A=(g,T,I,U,O)=>{if(I&&f(g,I),U)for(let j=0;j<U.length;j++)f(g,U[j]);if(O){let j=O.subTree;if(T===j||Kd(j.type)&&(j.ssContent===T||j.ssFallback===T)){const ee=O.vnode;A(g,ee,ee.scopeId,ee.slotScopeIds,O.parent)}}},N=(g,T,I,U,O,j,ee,w,v=0)=>{for(let L=v;L<g.length;L++){const V=g[L]=w?Ri(g[L]):jn(g[L]);M(null,V,T,I,U,O,j,ee,w)}},te=(g,T,I,U,O,j,ee)=>{const w=T.el=g.el;let{patchFlag:v,dynamicChildren:L,dirs:V}=T;v|=g.patchFlag&16;const k=g.props||ht,W=T.props||ht;let de;if(I&&Hi(I,!1),(de=W.onVnodeBeforeUpdate)&&qn(de,I,T,g),V&&Gi(T,g,I,"beforeUpdate"),I&&Hi(I,!0),(k.innerHTML&&W.innerHTML==null||k.textContent&&W.textContent==null)&&h(w,""),L?x(g.dynamicChildren,L,w,I,U,xa(T,O),j):ee||z(g,T,w,null,I,U,xa(T,O),j,!1),v>0){if(v&16)b(w,k,W,I,O);else if(v&2&&k.class!==W.class&&r(w,"class",null,W.class,O),v&4&&r(w,"style",k.style,W.style,O),v&8){const he=T.dynamicProps;for(let ve=0;ve<he.length;ve++){const Ae=he[ve],ge=k[Ae],Se=W[Ae];(Se!==ge||Ae==="value")&&r(w,Ae,ge,Se,O,I)}}v&1&&g.children!==T.children&&h(w,T.children)}else!ee&&L==null&&b(w,k,W,I,O);((de=W.onVnodeUpdated)||V)&&gn(()=>{de&&qn(de,I,T,g),V&&Gi(T,g,I,"updated")},U)},x=(g,T,I,U,O,j,ee)=>{for(let w=0;w<T.length;w++){const v=g[w],L=T[w],V=v.el&&(v.type===On||!Qs(v,L)||v.shapeFlag&70)?u(v.el):I;M(v,L,V,null,U,O,j,ee,!0)}},b=(g,T,I,U,O)=>{if(T!==I){if(T!==ht)for(const j in T)!hr(j)&&!(j in I)&&r(g,j,T[j],null,O,U);for(const j in I){if(hr(j))continue;const ee=I[j],w=T[j];ee!==w&&j!=="value"&&r(g,j,w,ee,O,U)}"value"in I&&r(g,"value",T.value,I.value,O)}},X=(g,T,I,U,O,j,ee,w,v)=>{const L=T.el=g?g.el:a(""),V=T.anchor=g?g.anchor:a("");let{patchFlag:k,dynamicChildren:W,slotScopeIds:de}=T;de&&(w=w?w.concat(de):de),g==null?(i(L,I,U),i(V,I,U),N(T.children||[],I,V,O,j,ee,w,v)):k>0&&k&64&&W&&g.dynamicChildren?(x(g.dynamicChildren,W,I,O,j,ee,w),(T.key!=null||O&&T===O.subTree)&&Xd(g,T,!0)):z(g,T,I,V,O,j,ee,w,v)},H=(g,T,I,U,O,j,ee,w,v)=>{T.slotScopeIds=w,g==null?T.shapeFlag&512?O.ctx.activate(T,I,U,ee,v):J(T,I,U,O,j,ee,v):ie(g,T,v)},J=(g,T,I,U,O,j,ee)=>{const w=g.component=f0(g,U,O);if(Id(g)&&(w.ctx.renderer=le),p0(w,!1,ee),w.asyncDep){if(O&&O.registerDep(w,G,ee),!g.el){const v=w.subTree=At(ns);m(null,v,T,I)}}else G(w,g,T,I,O,j,ee)},ie=(g,T,I)=>{const U=T.component=g.component;if(n0(g,T,I))if(U.asyncDep&&!U.asyncResolved){K(U,T,I);return}else U.next=T,U.update();else T.el=g.el,U.vnode=T},G=(g,T,I,U,O,j,ee)=>{const w=()=>{if(g.isMounted){let{next:k,bu:W,u:de,parent:he,vnode:ve}=g;{const Ue=qd(g);if(Ue){k&&(k.el=ve.el,K(g,k,ee)),Ue.asyncDep.then(()=>{g.isUnmounted||w()});return}}let Ae=k,ge;Hi(g,!1),k?(k.el=ve.el,K(g,k,ee)):k=ve,W&&pa(W),(ge=k.props&&k.props.onVnodeBeforeUpdate)&&qn(ge,he,k,ve),Hi(g,!0);const Se=ya(g),Ce=g.subTree;g.subTree=Se,M(Ce,Se,u(Ce.el),F(Ce),g,O,j),k.el=Se.el,Ae===null&&i0(g,Se.el),de&&gn(de,O),(ge=k.props&&k.props.onVnodeUpdated)&&gn(()=>qn(ge,he,k,ve),O)}else{let k;const{el:W,props:de}=T,{bm:he,m:ve,parent:Ae,root:ge,type:Se}=g,Ce=fr(T);if(Hi(g,!1),he&&pa(he),!Ce&&(k=de&&de.onVnodeBeforeMount)&&qn(k,Ae,T),Hi(g,!0),W&&Q){const Ue=()=>{g.subTree=ya(g),Q(W,g.subTree,g,O,null)};Ce&&Se.__asyncHydrate?Se.__asyncHydrate(W,g,Ue):Ue()}else{ge.ce&&ge.ce._injectChildStyle(Se);const Ue=g.subTree=ya(g);M(null,Ue,I,U,g,O,j),T.el=Ue.el}if(ve&&gn(ve,O),!Ce&&(k=de&&de.onVnodeMounted)){const Ue=T;gn(()=>qn(k,Ae,Ue),O)}(T.shapeFlag&256||Ae&&fr(Ae.vnode)&&Ae.vnode.shapeFlag&256)&&g.a&&gn(g.a,O),g.isMounted=!0,T=I=U=null}};g.scope.on();const v=g.effect=new ad(w);g.scope.off();const L=g.update=v.run.bind(v),V=g.job=v.runIfDirty.bind(v);V.i=g,V.id=g.uid,v.scheduler=()=>Rl(V),Hi(g,!0),L()},K=(g,T,I)=>{T.component=g;const U=g.vnode.props;g.vnode=T,g.next=null,Gm(g,T.props,U,I),Wm(g,T.children,I),Fi(),hu(g),Oi()},z=(g,T,I,U,O,j,ee,w,v=!1)=>{const L=g&&g.children,V=g?g.shapeFlag:0,k=T.children,{patchFlag:W,shapeFlag:de}=T;if(W>0){if(W&128){me(L,k,I,U,O,j,ee,w,v);return}else if(W&256){pe(L,k,I,U,O,j,ee,w,v);return}}de&8?(V&16&&fe(L,O,j),k!==L&&h(I,k)):V&16?de&16?me(L,k,I,U,O,j,ee,w,v):fe(L,O,j,!0):(V&8&&h(I,""),de&16&&N(k,I,U,O,j,ee,w,v))},pe=(g,T,I,U,O,j,ee,w,v)=>{g=g||Ls,T=T||Ls;const L=g.length,V=T.length,k=Math.min(L,V);let W;for(W=0;W<k;W++){const de=T[W]=v?Ri(T[W]):jn(T[W]);M(g[W],de,I,null,O,j,ee,w,v)}L>V?fe(g,O,j,!0,!1,k):N(T,I,U,O,j,ee,w,v,k)},me=(g,T,I,U,O,j,ee,w,v)=>{let L=0;const V=T.length;let k=g.length-1,W=V-1;for(;L<=k&&L<=W;){const de=g[L],he=T[L]=v?Ri(T[L]):jn(T[L]);if(Qs(de,he))M(de,he,I,null,O,j,ee,w,v);else break;L++}for(;L<=k&&L<=W;){const de=g[k],he=T[W]=v?Ri(T[W]):jn(T[W]);if(Qs(de,he))M(de,he,I,null,O,j,ee,w,v);else break;k--,W--}if(L>k){if(L<=W){const de=W+1,he=de<V?T[de].el:U;for(;L<=W;)M(null,T[L]=v?Ri(T[L]):jn(T[L]),I,he,O,j,ee,w,v),L++}}else if(L>W)for(;L<=k;)Me(g[L],O,j,!0),L++;else{const de=L,he=L,ve=new Map;for(L=he;L<=W;L++){const Ne=T[L]=v?Ri(T[L]):jn(T[L]);Ne.key!=null&&ve.set(Ne.key,L)}let Ae,ge=0;const Se=W-he+1;let Ce=!1,Ue=0;const Te=new Array(Se);for(L=0;L<Se;L++)Te[L]=0;for(L=de;L<=k;L++){const Ne=g[L];if(ge>=Se){Me(Ne,O,j,!0);continue}let Oe;if(Ne.key!=null)Oe=ve.get(Ne.key);else for(Ae=he;Ae<=W;Ae++)if(Te[Ae-he]===0&&Qs(Ne,T[Ae])){Oe=Ae;break}Oe===void 0?Me(Ne,O,j,!0):(Te[Oe-he]=L+1,Oe>=Ue?Ue=Oe:Ce=!0,M(Ne,T[Oe],I,null,O,j,ee,w,v),ge++)}const He=Ce?jm(Te):Ls;for(Ae=He.length-1,L=Se-1;L>=0;L--){const Ne=he+L,Oe=T[Ne],B=Ne+1<V?T[Ne+1].el:U;Te[L]===0?M(null,Oe,I,B,O,j,ee,w,v):Ce&&(Ae<0||L!==He[Ae]?_e(Oe,I,B,2):Ae--)}}},_e=(g,T,I,U,O=null)=>{const{el:j,type:ee,transition:w,children:v,shapeFlag:L}=g;if(L&6){_e(g.component.subTree,T,I,U);return}if(L&128){g.suspense.move(T,I,U);return}if(L&64){ee.move(g,T,I,le);return}if(ee===On){i(j,T,I);for(let k=0;k<v.length;k++)_e(v[k],T,I,U);i(g.anchor,T,I);return}if(ee===Ma){y(g,T,I);return}if(U!==2&&L&1&&w)if(U===0)w.beforeEnter(j),i(j,T,I),gn(()=>w.enter(j),O);else{const{leave:k,delayLeave:W,afterLeave:de}=w,he=()=>i(j,T,I),ve=()=>{k(j,()=>{he(),de&&de()})};W?W(j,he,ve):ve()}else i(j,T,I)},Me=(g,T,I,U=!1,O=!1)=>{const{type:j,props:ee,ref:w,children:v,dynamicChildren:L,shapeFlag:V,patchFlag:k,dirs:W,cacheIndex:de}=g;if(k===-2&&(O=!1),w!=null&&fc(w,null,I,g,!0),de!=null&&(T.renderCache[de]=void 0),V&256){T.ctx.deactivate(g);return}const he=V&1&&W,ve=!fr(g);let Ae;if(ve&&(Ae=ee&&ee.onVnodeBeforeUnmount)&&qn(Ae,T,g),V&6)ue(g.component,I,U);else{if(V&128){g.suspense.unmount(I,U);return}he&&Gi(g,null,T,"beforeUnmount"),V&64?g.type.remove(g,T,I,le,U):L&&!L.hasOnce&&(j!==On||k>0&&k&64)?fe(L,T,I,!1,!0):(j===On&&k&384||!O&&V&16)&&fe(v,T,I),U&&Pe(g)}(ve&&(Ae=ee&&ee.onVnodeUnmounted)||he)&&gn(()=>{Ae&&qn(Ae,T,g),he&&Gi(g,null,T,"unmounted")},I)},Pe=g=>{const{type:T,el:I,anchor:U,transition:O}=g;if(T===On){ne(I,U);return}if(T===Ma){S(g);return}const j=()=>{s(I),O&&!O.persisted&&O.afterLeave&&O.afterLeave()};if(g.shapeFlag&1&&O&&!O.persisted){const{leave:ee,delayLeave:w}=O,v=()=>ee(I,j);w?w(g.el,j,v):v()}else j()},ne=(g,T)=>{let I;for(;g!==T;)I=d(g),s(g),g=I;s(T)},ue=(g,T,I)=>{const{bum:U,scope:O,job:j,subTree:ee,um:w,m:v,a:L}=g;xu(v),xu(L),U&&pa(U),O.stop(),j&&(j.flags|=8,Me(ee,g,T,I)),w&&gn(w,T),gn(()=>{g.isUnmounted=!0},T),T&&T.pendingBranch&&!T.isUnmounted&&g.asyncDep&&!g.asyncResolved&&g.suspenseId===T.pendingId&&(T.deps--,T.deps===0&&T.resolve())},fe=(g,T,I,U=!1,O=!1,j=0)=>{for(let ee=j;ee<g.length;ee++)Me(g[ee],T,I,U,O)},F=g=>{if(g.shapeFlag&6)return F(g.component.subTree);if(g.shapeFlag&128)return g.suspense.next();const T=d(g.anchor||g.el),I=T&&T[mm];return I?d(I):T};let re=!1;const Y=(g,T,I)=>{g==null?T._vnode&&Me(T._vnode,null,null,!0):M(T._vnode||null,g,T,null,null,null,I),T._vnode=g,re||(re=!0,hu(),Rd(),re=!1)},le={p:M,um:Me,m:_e,r:Pe,mt:J,mc:N,pc:z,pbc:x,n:F,o:n};let ye,Q;return{render:Y,hydrate:ye,createApp:Bm(Y,ye)}}function xa({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function Hi({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function Ym(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function Xd(n,e,t=!1){const i=n.children,s=e.children;if(Ke(i)&&Ke(s))for(let r=0;r<i.length;r++){const o=i[r];let a=s[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[r]=Ri(s[r]),a.el=o.el),!t&&a.patchFlag!==-2&&Xd(o,a)),a.type===ta&&(a.el=o.el)}}function jm(n){const e=n.slice(),t=[0];let i,s,r,o,a;const c=n.length;for(i=0;i<c;i++){const l=n[i];if(l!==0){if(s=t[t.length-1],n[s]<l){e[i]=s,t.push(i);continue}for(r=0,o=t.length-1;r<o;)a=r+o>>1,n[t[a]]<l?r=a+1:o=a;l<n[t[r]]&&(r>0&&(e[i]=t[r-1]),t[r]=i)}}for(r=t.length,o=t[r-1];r-- >0;)t[r]=o,o=e[o];return t}function qd(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:qd(e)}function xu(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}const $m=Symbol.for("v-scx"),Km=()=>mi($m);function yt(n,e,t){return Yd(n,e,t)}function Yd(n,e,t=ht){const{immediate:i,deep:s,flush:r,once:o}=t,a=Xt({},t);let c;if(na)if(r==="sync"){const d=Km();c=d.__watcherHandles||(d.__watcherHandles=[])}else if(!e||i)a.once=!0;else{const d=()=>{};return d.stop=Kn,d.resume=Kn,d.pause=Kn,d}const l=Kt;a.call=(d,f,_)=>Jn(d,l,f,_);let h=!1;r==="post"?a.scheduler=d=>{gn(d,l&&l.suspense)}:r!=="sync"&&(h=!0,a.scheduler=(d,f)=>{f?d():Rl(d)}),a.augmentJob=d=>{e&&(d.flags|=4),h&&(d.flags|=2,l&&(d.id=l.uid,d.i=l))};const u=um(n,e,a);return c&&c.push(u),u}function Zm(n,e,t){const i=this.proxy,s=Ht(n)?n.includes(".")?jd(i,n):()=>i[n]:n.bind(i,i);let r;je(e)?r=e:(r=e.handler,t=e);const o=Or(this),a=Yd(s,r.bind(i),t);return o(),a}function jd(n,e){const t=e.split(".");return()=>{let i=n;for(let s=0;s<t.length&&i;s++)i=i[t[s]];return i}}const Jm=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${Cn(e)}Modifiers`]||n[`${os(e)}Modifiers`];function Qm(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||ht;let s=t;const r=e.startsWith("update:"),o=r&&Jm(i,e.slice(7));o&&(o.trim&&(s=t.map(h=>Ht(h)?h.trim():h)),o.number&&(s=t.map(Ap)));let a,c=i[a=fa(e)]||i[a=fa(Cn(e))];!c&&r&&(c=i[a=fa(os(e))]),c&&Jn(c,n,6,s);const l=i[a+"Once"];if(l){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,Jn(l,n,6,s)}}function $d(n,e,t=!1){const i=e.emitsCache,s=i.get(n);if(s!==void 0)return s;const r=n.emits;let o={},a=!1;if(!je(n)){const c=l=>{const h=$d(l,e,!0);h&&(a=!0,Xt(o,h))};!t&&e.mixins.length&&e.mixins.forEach(c),n.extends&&c(n.extends),n.mixins&&n.mixins.forEach(c)}return!r&&!a?(Ct(n)&&i.set(n,null),null):(Ke(r)?r.forEach(c=>o[c]=null):Xt(o,r),Ct(n)&&i.set(n,o),o)}function ea(n,e){return!n||!Xo(e)?!1:(e=e.slice(2).replace(/Once$/,""),rt(n,e[0].toLowerCase()+e.slice(1))||rt(n,os(e))||rt(n,e))}function ya(n){const{type:e,vnode:t,proxy:i,withProxy:s,propsOptions:[r],slots:o,attrs:a,emit:c,render:l,renderCache:h,props:u,data:d,setupState:f,ctx:_,inheritAttrs:M}=n,p=No(n);let m,E;try{if(t.shapeFlag&4){const S=s||i,D=S;m=jn(l.call(D,S,h,u,f,d,_)),E=a}else{const S=e;m=jn(S.length>1?S(u,{attrs:a,slots:o,emit:c}):S(u,null)),E=e.props?a:e0(a)}}catch(S){mr.length=0,Zo(S,n,1),m=At(ns)}let y=m;if(E&&M!==!1){const S=Object.keys(E),{shapeFlag:D}=y;S.length&&D&7&&(r&&S.some(fl)&&(E=t0(E,r)),y=Bs(y,E,!1,!0))}return t.dirs&&(y=Bs(y,null,!1,!0),y.dirs=y.dirs?y.dirs.concat(t.dirs):t.dirs),t.transition&&Pl(y,t.transition),m=y,No(p),m}const e0=n=>{let e;for(const t in n)(t==="class"||t==="style"||Xo(t))&&((e||(e={}))[t]=n[t]);return e},t0=(n,e)=>{const t={};for(const i in n)(!fl(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function n0(n,e,t){const{props:i,children:s,component:r}=n,{props:o,children:a,patchFlag:c}=e,l=r.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&c>=0){if(c&1024)return!0;if(c&16)return i?yu(i,o,l):!!o;if(c&8){const h=e.dynamicProps;for(let u=0;u<h.length;u++){const d=h[u];if(o[d]!==i[d]&&!ea(l,d))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?yu(i,o,l):!0:!!o;return!1}function yu(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(e[r]!==n[r]&&!ea(t,r))return!0}return!1}function i0({vnode:n,parent:e},t){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===n&&(i.el=n.el),i===n)(n=e.vnode).el=t,e=e.parent;else break}}const Kd=n=>n.__isSuspense;function s0(n,e){e&&e.pendingBranch?Ke(n)?e.effects.push(...n):e.effects.push(n):fm(n)}const On=Symbol.for("v-fgt"),ta=Symbol.for("v-txt"),ns=Symbol.for("v-cmt"),Ma=Symbol.for("v-stc"),mr=[];let xn=null;function Yt(n=!1){mr.push(xn=n?null:[])}function r0(){mr.pop(),xn=mr[mr.length-1]||null}let Tr=1;function Mu(n){Tr+=n,n<0&&xn&&(xn.hasOnce=!0)}function Zd(n){return n.dynamicChildren=Tr>0?xn||Ls:null,r0(),Tr>0&&xn&&xn.push(n),n}function en(n,e,t,i,s,r){return Zd(Ut(n,e,t,i,s,r,!0))}function o0(n,e,t,i,s){return Zd(At(n,e,t,i,s,!0))}function Oo(n){return n?n.__v_isVNode===!0:!1}function Qs(n,e){return n.type===e.type&&n.key===e.key}const Jd=({key:n})=>n??null,Eo=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?Ht(n)||Zt(n)||je(n)?{i:vn,r:n,k:e,f:!!t}:n:null);function Ut(n,e=null,t=null,i=0,s=null,r=n===On?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&Jd(e),ref:e&&Eo(e),scopeId:Cd,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:vn};return a?(Il(c,t),r&128&&n.normalize(c)):t&&(c.shapeFlag|=Ht(t)?8:16),Tr>0&&!o&&xn&&(c.patchFlag>0||r&6)&&c.patchFlag!==32&&xn.push(c),c}const At=a0;function a0(n,e=null,t=null,i=0,s=null,r=!1){if((!n||n===Pm)&&(n=ns),Oo(n)){const a=Bs(n,e,!0);return t&&Il(a,t),Tr>0&&!r&&xn&&(a.shapeFlag&6?xn[xn.indexOf(n)]=a:xn.push(a)),a.patchFlag=-2,a}if(x0(n)&&(n=n.__vccOpts),e){e=c0(e);let{class:a,style:c}=e;a&&!Ht(a)&&(e.class=yn(a)),Ct(c)&&(bl(c)&&!Ke(c)&&(c=Xt({},c)),e.style=gl(c))}const o=Ht(n)?1:Kd(n)?128:gm(n)?64:Ct(n)?4:je(n)?2:0;return Ut(n,e,t,i,s,o,r,!0)}function c0(n){return n?bl(n)||Bd(n)?Xt({},n):n:null}function Bs(n,e,t=!1,i=!1){const{props:s,ref:r,patchFlag:o,children:a,transition:c}=n,l=e?u0(s||{},e):s,h={__v_isVNode:!0,__v_skip:!0,type:n.type,props:l,key:l&&Jd(l),ref:e&&e.ref?t&&r?Ke(r)?r.concat(Eo(e)):[r,Eo(e)]:Eo(e):r,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==On?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:c,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&Bs(n.ssContent),ssFallback:n.ssFallback&&Bs(n.ssFallback),el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return c&&i&&Pl(h,c.clone(h)),h}function bo(n=" ",e=0){return At(ta,null,n,e)}function l0(n="",e=!1){return e?(Yt(),o0(ns,null,n)):At(ns,null,n)}function jn(n){return n==null||typeof n=="boolean"?At(ns):Ke(n)?At(On,null,n.slice()):Oo(n)?Ri(n):At(ta,null,String(n))}function Ri(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:Bs(n)}function Il(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(Ke(e))t=16;else if(typeof e=="object")if(i&65){const s=e.default;s&&(s._c&&(s._d=!1),Il(n,s()),s._c&&(s._d=!0));return}else{t=32;const s=e._;!s&&!Bd(e)?e._ctx=vn:s===3&&vn&&(vn.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else je(e)?(e={default:e,_ctx:vn},t=32):(e=String(e),i&64?(t=16,e=[bo(e)]):t=8);n.children=e,n.shapeFlag|=t}function u0(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const s in i)if(s==="class")e.class!==i.class&&(e.class=yn([e.class,i.class]));else if(s==="style")e.style=gl([e.style,i.style]);else if(Xo(s)){const r=e[s],o=i[s];o&&r!==o&&!(Ke(r)&&r.includes(o))&&(e[s]=r?[].concat(r,o):o)}else s!==""&&(e[s]=i[s])}return e}function qn(n,e,t,i=null){Jn(n,e,7,[t,i])}const h0=Nd();let d0=0;function f0(n,e,t){const i=n.type,s=(e?e.appContext:n.appContext)||h0,r={uid:d0++,vnode:n,type:i,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Up(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Gd(i,s),emitsOptions:$d(i,s),emit:null,emitted:null,propsDefaults:ht,inheritAttrs:i.inheritAttrs,ctx:ht,data:ht,props:ht,attrs:ht,slots:ht,refs:ht,setupState:ht,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=Qm.bind(null,r),n.ce&&n.ce(r),r}let Kt=null,Bo,vc;{const n=rd(),e=(t,i)=>{let s;return(s=n[t])||(s=n[t]=[]),s.push(i),r=>{s.length>1?s.forEach(o=>o(r)):s[0](r)}};Bo=e("__VUE_INSTANCE_SETTERS__",t=>Kt=t),vc=e("__VUE_SSR_SETTERS__",t=>na=t)}const Or=n=>{const e=Kt;return Bo(n),n.scope.on(),()=>{n.scope.off(),Bo(e)}},Su=()=>{Kt&&Kt.scope.off(),Bo(null)};function Qd(n){return n.vnode.shapeFlag&4}let na=!1;function p0(n,e=!1,t=!1){e&&vc(e);const{props:i,children:s}=n.vnode,r=Qd(n);zm(n,i,r,e),Vm(n,s,t);const o=r?m0(n,e):void 0;return e&&vc(!1),o}function m0(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,Lm);const{setup:i}=t;if(i){const s=n.setupContext=i.length>1?_0(n):null,r=Or(n);Fi();const o=Fr(i,n,0,[n.props,s]);if(Oi(),r(),id(o)){if(fr(n)||Ld(n),o.then(Su,Su),e)return o.then(a=>{wu(n,a,e)}).catch(a=>{Zo(a,n,0)});n.asyncDep=o}else wu(n,o,e)}else ef(n,e)}function wu(n,e,t){je(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:Ct(e)&&(n.setupState=Ed(e)),ef(n,t)}let Eu;function ef(n,e,t){const i=n.type;if(!n.render){if(!e&&Eu&&!i.render){const s=i.template||Cl(n).template;if(s){const{isCustomElement:r,compilerOptions:o}=n.appContext.config,{delimiters:a,compilerOptions:c}=i,l=Xt(Xt({isCustomElement:r,delimiters:a},o),c);i.render=Eu(s,l)}}n.render=i.render||Kn}{const s=Or(n);Fi();try{Im(n)}finally{Oi(),s()}}}const g0={get(n,e){return Qt(n,"get",""),n[e]}};function _0(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,g0),slots:n.slots,emit:n.emit,expose:e}}function ia(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(Ed(im(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in pr)return pr[t](n)},has(e,t){return t in e||t in pr}})):n.proxy}function v0(n,e=!0){return je(n)?n.displayName||n.name:n.name||e&&n.__name}function x0(n){return je(n)&&"__vccOpts"in n}const Wt=(n,e)=>cm(n,e,na);function tf(n,e,t){const i=arguments.length;return i===2?Ct(e)&&!Ke(e)?Oo(e)?At(n,null,[e]):At(n,e):At(n,null,e):(i>3?t=Array.prototype.slice.call(arguments,2):i===3&&Oo(t)&&(t=[t]),At(n,e,t))}const y0="3.5.10";/**
* @vue/runtime-dom v3.5.10
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let xc;const bu=typeof window<"u"&&window.trustedTypes;if(bu)try{xc=bu.createPolicy("vue",{createHTML:n=>n})}catch{}const nf=xc?n=>xc.createHTML(n):n=>n,M0="http://www.w3.org/2000/svg",S0="http://www.w3.org/1998/Math/MathML",ui=typeof document<"u"?document:null,Tu=ui&&ui.createElement("template"),w0={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const s=e==="svg"?ui.createElementNS(M0,n):e==="mathml"?ui.createElementNS(S0,n):t?ui.createElement(n,{is:t}):ui.createElement(n);return n==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:n=>ui.createTextNode(n),createComment:n=>ui.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>ui.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,s,r){const o=t?t.previousSibling:e.lastChild;if(s&&(s===r||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),t),!(s===r||!(s=s.nextSibling)););else{Tu.innerHTML=nf(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const a=Tu.content;if(i==="svg"||i==="mathml"){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},E0=Symbol("_vtc");function b0(n,e,t){const i=n[E0];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const zo=Symbol("_vod"),sf=Symbol("_vsh"),T0={beforeMount(n,{value:e},{transition:t}){n[zo]=n.style.display==="none"?"":n.style.display,t&&e?t.beforeEnter(n):er(n,e)},mounted(n,{value:e},{transition:t}){t&&e&&t.enter(n)},updated(n,{value:e,oldValue:t},{transition:i}){!e!=!t&&(i?e?(i.beforeEnter(n),er(n,!0),i.enter(n)):i.leave(n,()=>{er(n,!1)}):er(n,e))},beforeUnmount(n,{value:e}){er(n,e)}};function er(n,e){n.style.display=e?n[zo]:"none",n[sf]=!e}const A0=Symbol(""),R0=/(^|;)\s*display\s*:/;function P0(n,e,t){const i=n.style,s=Ht(t);let r=!1;if(t&&!s){if(e)if(Ht(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();t[a]==null&&To(i,a,"")}else for(const o in e)t[o]==null&&To(i,o,"");for(const o in t)o==="display"&&(r=!0),To(i,o,t[o])}else if(s){if(e!==t){const o=i[A0];o&&(t+=";"+o),i.cssText=t,r=R0.test(t)}}else e&&n.removeAttribute("style");zo in n&&(n[zo]=r?i.display:"",n[sf]&&(i.display="none"))}const Au=/\s*!important$/;function To(n,e,t){if(Ke(t))t.forEach(i=>To(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=C0(n,e);Au.test(t)?n.setProperty(os(i),t.replace(Au,""),"important"):n[i]=t}}const Ru=["Webkit","Moz","ms"],Sa={};function C0(n,e){const t=Sa[e];if(t)return t;let i=Cn(e);if(i!=="filter"&&i in n)return Sa[e]=i;i=jo(i);for(let s=0;s<Ru.length;s++){const r=Ru[s]+i;if(r in n)return Sa[e]=r}return e}const Pu="http://www.w3.org/1999/xlink";function Cu(n,e,t,i,s,r=Dp(e)){i&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(Pu,e.slice(6,e.length)):n.setAttributeNS(Pu,e,t):t==null||r&&!od(t)?n.removeAttribute(e):n.setAttribute(e,r?"":Ys(t)?String(t):t)}function Lu(n,e,t,i){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?nf(t):t);return}const s=n.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){const o=s==="OPTION"?n.getAttribute("value")||"":n.value,a=t==null?n.type==="checkbox"?"on":"":String(t);(o!==a||!("_value"in n))&&(n.value=a),t==null&&n.removeAttribute(e),n._value=t;return}let r=!1;if(t===""||t==null){const o=typeof n[e];o==="boolean"?t=od(t):t==null&&o==="string"?(t="",r=!0):o==="number"&&(t=0,r=!0)}try{n[e]=t}catch{}r&&n.removeAttribute(e)}function L0(n,e,t,i){n.addEventListener(e,t,i)}function I0(n,e,t,i){n.removeEventListener(e,t,i)}const Iu=Symbol("_vei");function D0(n,e,t,i,s=null){const r=n[Iu]||(n[Iu]={}),o=r[e];if(i&&o)o.value=i;else{const[a,c]=U0(e);if(i){const l=r[e]=O0(i,s);L0(n,a,l,c)}else o&&(I0(n,a,o,c),r[e]=void 0)}}const Du=/(?:Once|Passive|Capture)$/;function U0(n){let e;if(Du.test(n)){e={};let i;for(;i=n.match(Du);)n=n.slice(0,n.length-i[0].length),e[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):os(n.slice(2)),e]}let wa=0;const N0=Promise.resolve(),F0=()=>wa||(N0.then(()=>wa=0),wa=Date.now());function O0(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;Jn(B0(i,t.value),e,5,[i])};return t.value=n,t.attached=F0(),t}function B0(n,e){if(Ke(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>s=>!s._stopped&&i&&i(s))}else return e}const Uu=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,z0=(n,e,t,i,s,r)=>{const o=s==="svg";e==="class"?b0(n,i,o):e==="style"?P0(n,t,i):Xo(e)?fl(e)||D0(n,e,t,i,r):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):G0(n,e,i,o))?(Lu(n,e,i),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Cu(n,e,i,o,r,e!=="value")):n._isVueCE&&(/[A-Z]/.test(e)||!Ht(i))?Lu(n,Cn(e),i):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),Cu(n,e,i,o))};function G0(n,e,t,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in n&&Uu(e)&&je(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=n.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Uu(e)&&Ht(t)?!1:e in n}const H0=Xt({patchProp:z0},w0);let Nu;function k0(){return Nu||(Nu=Xm(H0))}const V0=(...n)=>{const e=k0().createApp(...n),{mount:t}=e;return e.mount=i=>{const s=X0(i);if(!s)return;const r=e._component;!je(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=t(s,!1,W0(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function W0(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function X0(n){return Ht(n)?document.querySelector(n):n}const q0={id:"app"},Y0=kt({__name:"App",setup(n){const e=et(!1);function t(i){i.clientY<50?e.value=!0:e.value=!1}return qt(()=>{window.addEventListener("mousemove",t)}),Qo(()=>{window.removeEventListener("mousemove",t)}),(i,s)=>{const r=du("router-link"),o=du("router-view");return Yt(),en("div",q0,[pm(Ut("nav",null,[At(r,{to:"/3d-bear-arts/pop-art"},{default:So(()=>s[0]||(s[0]=[bo("Pop")])),_:1}),At(r,{to:"/3d-bear-arts/pop-art-bear"},{default:So(()=>s[1]||(s[1]=[bo("Pop-Bear")])),_:1}),At(r,{to:"/3d-bear-arts/pop-art-bear-3"},{default:So(()=>s[2]||(s[2]=[bo("Pop-Bear-3")])),_:1})],512),[[T0,e.value]]),At(o)])}}}),tn=(n,e)=>{const t=n.__vccOpts||n;for(const[i,s]of e)t[i]=s;return t},j0=tn(Y0,[["__scopeId","data-v-6945e91d"]]);/*!
  * vue-router v4.4.5
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const Ts=typeof document<"u";function rf(n){return typeof n=="object"||"displayName"in n||"props"in n||"__vccOpts"in n}function $0(n){return n.__esModule||n[Symbol.toStringTag]==="Module"||n.default&&rf(n.default)}const lt=Object.assign;function Ea(n,e){const t={};for(const i in e){const s=e[i];t[i]=kn(s)?s.map(n):n(s)}return t}const gr=()=>{},kn=Array.isArray,of=/#/g,K0=/&/g,Z0=/\//g,J0=/=/g,Q0=/\?/g,af=/\+/g,eg=/%5B/g,tg=/%5D/g,cf=/%5E/g,ng=/%60/g,lf=/%7B/g,ig=/%7C/g,uf=/%7D/g,sg=/%20/g;function Dl(n){return encodeURI(""+n).replace(ig,"|").replace(eg,"[").replace(tg,"]")}function rg(n){return Dl(n).replace(lf,"{").replace(uf,"}").replace(cf,"^")}function yc(n){return Dl(n).replace(af,"%2B").replace(sg,"+").replace(of,"%23").replace(K0,"%26").replace(ng,"`").replace(lf,"{").replace(uf,"}").replace(cf,"^")}function og(n){return yc(n).replace(J0,"%3D")}function ag(n){return Dl(n).replace(of,"%23").replace(Q0,"%3F")}function cg(n){return n==null?"":ag(n).replace(Z0,"%2F")}function Ar(n){try{return decodeURIComponent(""+n)}catch{}return""+n}const lg=/\/$/,ug=n=>n.replace(lg,"");function ba(n,e,t="/"){let i,s={},r="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(i=e.slice(0,c),r=e.slice(c+1,a>-1?a:e.length),s=n(r)),a>-1&&(i=i||e.slice(0,a),o=e.slice(a,e.length)),i=pg(i??e,t),{fullPath:i+(r&&"?")+r+o,path:i,query:s,hash:Ar(o)}}function hg(n,e){const t=e.query?n(e.query):"";return e.path+(t&&"?")+t+(e.hash||"")}function Fu(n,e){return!e||!n.toLowerCase().startsWith(e.toLowerCase())?n:n.slice(e.length)||"/"}function dg(n,e,t){const i=e.matched.length-1,s=t.matched.length-1;return i>-1&&i===s&&zs(e.matched[i],t.matched[s])&&hf(e.params,t.params)&&n(e.query)===n(t.query)&&e.hash===t.hash}function zs(n,e){return(n.aliasOf||n)===(e.aliasOf||e)}function hf(n,e){if(Object.keys(n).length!==Object.keys(e).length)return!1;for(const t in n)if(!fg(n[t],e[t]))return!1;return!0}function fg(n,e){return kn(n)?Ou(n,e):kn(e)?Ou(e,n):n===e}function Ou(n,e){return kn(e)?n.length===e.length&&n.every((t,i)=>t===e[i]):n.length===1&&n[0]===e}function pg(n,e){if(n.startsWith("/"))return n;if(!n)return e;const t=e.split("/"),i=n.split("/"),s=i[i.length-1];(s===".."||s===".")&&i.push("");let r=t.length-1,o,a;for(o=0;o<i.length;o++)if(a=i[o],a!==".")if(a==="..")r>1&&r--;else break;return t.slice(0,r).join("/")+"/"+i.slice(o).join("/")}const yi={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var Rr;(function(n){n.pop="pop",n.push="push"})(Rr||(Rr={}));var _r;(function(n){n.back="back",n.forward="forward",n.unknown=""})(_r||(_r={}));function mg(n){if(!n)if(Ts){const e=document.querySelector("base");n=e&&e.getAttribute("href")||"/",n=n.replace(/^\w+:\/\/[^\/]+/,"")}else n="/";return n[0]!=="/"&&n[0]!=="#"&&(n="/"+n),ug(n)}const gg=/^[^#]+#/;function _g(n,e){return n.replace(gg,"#")+e}function vg(n,e){const t=document.documentElement.getBoundingClientRect(),i=n.getBoundingClientRect();return{behavior:e.behavior,left:i.left-t.left-(e.left||0),top:i.top-t.top-(e.top||0)}}const sa=()=>({left:window.scrollX,top:window.scrollY});function xg(n){let e;if("el"in n){const t=n.el,i=typeof t=="string"&&t.startsWith("#"),s=typeof t=="string"?i?document.getElementById(t.slice(1)):document.querySelector(t):t;if(!s)return;e=vg(s,n)}else e=n;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function Bu(n,e){return(history.state?history.state.position-e:-1)+n}const Mc=new Map;function yg(n,e){Mc.set(n,e)}function Mg(n){const e=Mc.get(n);return Mc.delete(n),e}let Sg=()=>location.protocol+"//"+location.host;function df(n,e){const{pathname:t,search:i,hash:s}=e,r=n.indexOf("#");if(r>-1){let a=s.includes(n.slice(r))?n.slice(r).length:1,c=s.slice(a);return c[0]!=="/"&&(c="/"+c),Fu(c,"")}return Fu(t,n)+i+s}function wg(n,e,t,i){let s=[],r=[],o=null;const a=({state:d})=>{const f=df(n,location),_=t.value,M=e.value;let p=0;if(d){if(t.value=f,e.value=d,o&&o===_){o=null;return}p=M?d.position-M.position:0}else i(f);s.forEach(m=>{m(t.value,_,{delta:p,type:Rr.pop,direction:p?p>0?_r.forward:_r.back:_r.unknown})})};function c(){o=t.value}function l(d){s.push(d);const f=()=>{const _=s.indexOf(d);_>-1&&s.splice(_,1)};return r.push(f),f}function h(){const{history:d}=window;d.state&&d.replaceState(lt({},d.state,{scroll:sa()}),"")}function u(){for(const d of r)d();r=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",h)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",h,{passive:!0}),{pauseListeners:c,listen:l,destroy:u}}function zu(n,e,t,i=!1,s=!1){return{back:n,current:e,forward:t,replaced:i,position:window.history.length,scroll:s?sa():null}}function Eg(n){const{history:e,location:t}=window,i={value:df(n,t)},s={value:e.state};s.value||r(i.value,{back:null,current:i.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function r(c,l,h){const u=n.indexOf("#"),d=u>-1?(t.host&&document.querySelector("base")?n:n.slice(u))+c:Sg()+n+c;try{e[h?"replaceState":"pushState"](l,"",d),s.value=l}catch(f){console.error(f),t[h?"replace":"assign"](d)}}function o(c,l){const h=lt({},e.state,zu(s.value.back,c,s.value.forward,!0),l,{position:s.value.position});r(c,h,!0),i.value=c}function a(c,l){const h=lt({},s.value,e.state,{forward:c,scroll:sa()});r(h.current,h,!0);const u=lt({},zu(i.value,c,null),{position:h.position+1},l);r(c,u,!1),i.value=c}return{location:i,state:s,push:a,replace:o}}function bg(n){n=mg(n);const e=Eg(n),t=wg(n,e.state,e.location,e.replace);function i(r,o=!0){o||t.pauseListeners(),history.go(r)}const s=lt({location:"",base:n,go:i,createHref:_g.bind(null,n)},e,t);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function Tg(n){return typeof n=="string"||n&&typeof n=="object"}function ff(n){return typeof n=="string"||typeof n=="symbol"}const pf=Symbol("");var Gu;(function(n){n[n.aborted=4]="aborted",n[n.cancelled=8]="cancelled",n[n.duplicated=16]="duplicated"})(Gu||(Gu={}));function Gs(n,e){return lt(new Error,{type:n,[pf]:!0},e)}function ni(n,e){return n instanceof Error&&pf in n&&(e==null||!!(n.type&e))}const Hu="[^/]+?",Ag={sensitive:!1,strict:!1,start:!0,end:!0},Rg=/[.+*?^${}()[\]/\\]/g;function Pg(n,e){const t=lt({},Ag,e),i=[];let s=t.start?"^":"";const r=[];for(const l of n){const h=l.length?[]:[90];t.strict&&!l.length&&(s+="/");for(let u=0;u<l.length;u++){const d=l[u];let f=40+(t.sensitive?.25:0);if(d.type===0)u||(s+="/"),s+=d.value.replace(Rg,"\\$&"),f+=40;else if(d.type===1){const{value:_,repeatable:M,optional:p,regexp:m}=d;r.push({name:_,repeatable:M,optional:p});const E=m||Hu;if(E!==Hu){f+=10;try{new RegExp(`(${E})`)}catch(S){throw new Error(`Invalid custom RegExp for param "${_}" (${E}): `+S.message)}}let y=M?`((?:${E})(?:/(?:${E}))*)`:`(${E})`;u||(y=p&&l.length<2?`(?:/${y})`:"/"+y),p&&(y+="?"),s+=y,f+=20,p&&(f+=-8),M&&(f+=-20),E===".*"&&(f+=-50)}h.push(f)}i.push(h)}if(t.strict&&t.end){const l=i.length-1;i[l][i[l].length-1]+=.7000000000000001}t.strict||(s+="/?"),t.end?s+="$":t.strict&&(s+="(?:/|$)");const o=new RegExp(s,t.sensitive?"":"i");function a(l){const h=l.match(o),u={};if(!h)return null;for(let d=1;d<h.length;d++){const f=h[d]||"",_=r[d-1];u[_.name]=f&&_.repeatable?f.split("/"):f}return u}function c(l){let h="",u=!1;for(const d of n){(!u||!h.endsWith("/"))&&(h+="/"),u=!1;for(const f of d)if(f.type===0)h+=f.value;else if(f.type===1){const{value:_,repeatable:M,optional:p}=f,m=_ in l?l[_]:"";if(kn(m)&&!M)throw new Error(`Provided param "${_}" is an array but it is not repeatable (* or + modifiers)`);const E=kn(m)?m.join("/"):m;if(!E)if(p)d.length<2&&(h.endsWith("/")?h=h.slice(0,-1):u=!0);else throw new Error(`Missing required param "${_}"`);h+=E}}return h||"/"}return{re:o,score:i,keys:r,parse:a,stringify:c}}function Cg(n,e){let t=0;for(;t<n.length&&t<e.length;){const i=e[t]-n[t];if(i)return i;t++}return n.length<e.length?n.length===1&&n[0]===80?-1:1:n.length>e.length?e.length===1&&e[0]===80?1:-1:0}function mf(n,e){let t=0;const i=n.score,s=e.score;for(;t<i.length&&t<s.length;){const r=Cg(i[t],s[t]);if(r)return r;t++}if(Math.abs(s.length-i.length)===1){if(ku(i))return 1;if(ku(s))return-1}return s.length-i.length}function ku(n){const e=n[n.length-1];return n.length>0&&e[e.length-1]<0}const Lg={type:0,value:""},Ig=/[a-zA-Z0-9_]/;function Dg(n){if(!n)return[[]];if(n==="/")return[[Lg]];if(!n.startsWith("/"))throw new Error(`Invalid path "${n}"`);function e(f){throw new Error(`ERR (${t})/"${l}": ${f}`)}let t=0,i=t;const s=[];let r;function o(){r&&s.push(r),r=[]}let a=0,c,l="",h="";function u(){l&&(t===0?r.push({type:0,value:l}):t===1||t===2||t===3?(r.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:l,regexp:h,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),l="")}function d(){l+=c}for(;a<n.length;){if(c=n[a++],c==="\\"&&t!==2){i=t,t=4;continue}switch(t){case 0:c==="/"?(l&&u(),o()):c===":"?(u(),t=1):d();break;case 4:d(),t=i;break;case 1:c==="("?t=2:Ig.test(c)?d():(u(),t=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?h[h.length-1]=="\\"?h=h.slice(0,-1)+c:t=3:h+=c;break;case 3:u(),t=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,h="";break;default:e("Unknown state");break}}return t===2&&e(`Unfinished custom RegExp for param "${l}"`),u(),o(),s}function Ug(n,e,t){const i=Pg(Dg(n.path),t),s=lt(i,{record:n,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function Ng(n,e){const t=[],i=new Map;e=qu({strict:!1,end:!0,sensitive:!1},e);function s(u){return i.get(u)}function r(u,d,f){const _=!f,M=Wu(u);M.aliasOf=f&&f.record;const p=qu(e,u),m=[M];if("alias"in u){const S=typeof u.alias=="string"?[u.alias]:u.alias;for(const D of S)m.push(Wu(lt({},M,{components:f?f.record.components:M.components,path:D,aliasOf:f?f.record:M})))}let E,y;for(const S of m){const{path:D}=S;if(d&&D[0]!=="/"){const C=d.record.path,A=C[C.length-1]==="/"?"":"/";S.path=d.record.path+(D&&A+D)}if(E=Ug(S,d,p),f?f.alias.push(E):(y=y||E,y!==E&&y.alias.push(E),_&&u.name&&!Xu(E)&&o(u.name)),gf(E)&&c(E),M.children){const C=M.children;for(let A=0;A<C.length;A++)r(C[A],E,f&&f.children[A])}f=f||E}return y?()=>{o(y)}:gr}function o(u){if(ff(u)){const d=i.get(u);d&&(i.delete(u),t.splice(t.indexOf(d),1),d.children.forEach(o),d.alias.forEach(o))}else{const d=t.indexOf(u);d>-1&&(t.splice(d,1),u.record.name&&i.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return t}function c(u){const d=Bg(u,t);t.splice(d,0,u),u.record.name&&!Xu(u)&&i.set(u.record.name,u)}function l(u,d){let f,_={},M,p;if("name"in u&&u.name){if(f=i.get(u.name),!f)throw Gs(1,{location:u});p=f.record.name,_=lt(Vu(d.params,f.keys.filter(y=>!y.optional).concat(f.parent?f.parent.keys.filter(y=>y.optional):[]).map(y=>y.name)),u.params&&Vu(u.params,f.keys.map(y=>y.name))),M=f.stringify(_)}else if(u.path!=null)M=u.path,f=t.find(y=>y.re.test(M)),f&&(_=f.parse(M),p=f.record.name);else{if(f=d.name?i.get(d.name):t.find(y=>y.re.test(d.path)),!f)throw Gs(1,{location:u,currentLocation:d});p=f.record.name,_=lt({},d.params,u.params),M=f.stringify(_)}const m=[];let E=f;for(;E;)m.unshift(E.record),E=E.parent;return{name:p,path:M,params:_,matched:m,meta:Og(m)}}n.forEach(u=>r(u));function h(){t.length=0,i.clear()}return{addRoute:r,resolve:l,removeRoute:o,clearRoutes:h,getRoutes:a,getRecordMatcher:s}}function Vu(n,e){const t={};for(const i of e)i in n&&(t[i]=n[i]);return t}function Wu(n){const e={path:n.path,redirect:n.redirect,name:n.name,meta:n.meta||{},aliasOf:n.aliasOf,beforeEnter:n.beforeEnter,props:Fg(n),children:n.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in n?n.components||null:n.component&&{default:n.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function Fg(n){const e={},t=n.props||!1;if("component"in n)e.default=t;else for(const i in n.components)e[i]=typeof t=="object"?t[i]:t;return e}function Xu(n){for(;n;){if(n.record.aliasOf)return!0;n=n.parent}return!1}function Og(n){return n.reduce((e,t)=>lt(e,t.meta),{})}function qu(n,e){const t={};for(const i in n)t[i]=i in e?e[i]:n[i];return t}function Bg(n,e){let t=0,i=e.length;for(;t!==i;){const r=t+i>>1;mf(n,e[r])<0?i=r:t=r+1}const s=zg(n);return s&&(i=e.lastIndexOf(s,i-1)),i}function zg(n){let e=n;for(;e=e.parent;)if(gf(e)&&mf(n,e)===0)return e}function gf({record:n}){return!!(n.name||n.components&&Object.keys(n.components).length||n.redirect)}function Gg(n){const e={};if(n===""||n==="?")return e;const i=(n[0]==="?"?n.slice(1):n).split("&");for(let s=0;s<i.length;++s){const r=i[s].replace(af," "),o=r.indexOf("="),a=Ar(o<0?r:r.slice(0,o)),c=o<0?null:Ar(r.slice(o+1));if(a in e){let l=e[a];kn(l)||(l=e[a]=[l]),l.push(c)}else e[a]=c}return e}function Yu(n){let e="";for(let t in n){const i=n[t];if(t=og(t),i==null){i!==void 0&&(e+=(e.length?"&":"")+t);continue}(kn(i)?i.map(r=>r&&yc(r)):[i&&yc(i)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+t,r!=null&&(e+="="+r))})}return e}function Hg(n){const e={};for(const t in n){const i=n[t];i!==void 0&&(e[t]=kn(i)?i.map(s=>s==null?null:""+s):i==null?i:""+i)}return e}const kg=Symbol(""),ju=Symbol(""),Ul=Symbol(""),_f=Symbol(""),Sc=Symbol("");function tr(){let n=[];function e(i){return n.push(i),()=>{const s=n.indexOf(i);s>-1&&n.splice(s,1)}}function t(){n=[]}return{add:e,list:()=>n.slice(),reset:t}}function Pi(n,e,t,i,s,r=o=>o()){const o=i&&(i.enterCallbacks[s]=i.enterCallbacks[s]||[]);return()=>new Promise((a,c)=>{const l=d=>{d===!1?c(Gs(4,{from:t,to:e})):d instanceof Error?c(d):Tg(d)?c(Gs(2,{from:e,to:d})):(o&&i.enterCallbacks[s]===o&&typeof d=="function"&&o.push(d),a())},h=r(()=>n.call(i&&i.instances[s],e,t,l));let u=Promise.resolve(h);n.length<3&&(u=u.then(l)),u.catch(d=>c(d))})}function Ta(n,e,t,i,s=r=>r()){const r=[];for(const o of n)for(const a in o.components){let c=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if(rf(c)){const h=(c.__vccOpts||c)[e];h&&r.push(Pi(h,t,i,o,a,s))}else{let l=c();r.push(()=>l.then(h=>{if(!h)throw new Error(`Couldn't resolve component "${a}" at "${o.path}"`);const u=$0(h)?h.default:h;o.mods[a]=h,o.components[a]=u;const f=(u.__vccOpts||u)[e];return f&&Pi(f,t,i,o,a,s)()}))}}return r}function $u(n){const e=mi(Ul),t=mi(_f),i=Wt(()=>{const c=An(n.to);return e.resolve(c)}),s=Wt(()=>{const{matched:c}=i.value,{length:l}=c,h=c[l-1],u=t.matched;if(!h||!u.length)return-1;const d=u.findIndex(zs.bind(null,h));if(d>-1)return d;const f=Ku(c[l-2]);return l>1&&Ku(h)===f&&u[u.length-1].path!==f?u.findIndex(zs.bind(null,c[l-2])):d}),r=Wt(()=>s.value>-1&&qg(t.params,i.value.params)),o=Wt(()=>s.value>-1&&s.value===t.matched.length-1&&hf(t.params,i.value.params));function a(c={}){return Xg(c)?e[An(n.replace)?"replace":"push"](An(n.to)).catch(gr):Promise.resolve()}return{route:i,href:Wt(()=>i.value.href),isActive:r,isExactActive:o,navigate:a}}const Vg=kt({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:$u,setup(n,{slots:e}){const t=Ko($u(n)),{options:i}=mi(Ul),s=Wt(()=>({[Zu(n.activeClass,i.linkActiveClass,"router-link-active")]:t.isActive,[Zu(n.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:t.isExactActive}));return()=>{const r=e.default&&e.default(t);return n.custom?r:tf("a",{"aria-current":t.isExactActive?n.ariaCurrentValue:null,href:t.href,onClick:t.navigate,class:s.value},r)}}}),Wg=Vg;function Xg(n){if(!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)&&!n.defaultPrevented&&!(n.button!==void 0&&n.button!==0)){if(n.currentTarget&&n.currentTarget.getAttribute){const e=n.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return n.preventDefault&&n.preventDefault(),!0}}function qg(n,e){for(const t in e){const i=e[t],s=n[t];if(typeof i=="string"){if(i!==s)return!1}else if(!kn(s)||s.length!==i.length||i.some((r,o)=>r!==s[o]))return!1}return!0}function Ku(n){return n?n.aliasOf?n.aliasOf.path:n.path:""}const Zu=(n,e,t)=>n??e??t,Yg=kt({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(n,{attrs:e,slots:t}){const i=mi(Sc),s=Wt(()=>n.route||i.value),r=mi(ju,0),o=Wt(()=>{let l=An(r);const{matched:h}=s.value;let u;for(;(u=h[l])&&!u.components;)l++;return l}),a=Wt(()=>s.value.matched[o.value]);wo(ju,Wt(()=>o.value+1)),wo(kg,a),wo(Sc,s);const c=et();return yt(()=>[c.value,a.value,n.name],([l,h,u],[d,f,_])=>{h&&(h.instances[u]=l,f&&f!==h&&l&&l===d&&(h.leaveGuards.size||(h.leaveGuards=f.leaveGuards),h.updateGuards.size||(h.updateGuards=f.updateGuards))),l&&h&&(!f||!zs(h,f)||!d)&&(h.enterCallbacks[u]||[]).forEach(M=>M(l))},{flush:"post"}),()=>{const l=s.value,h=n.name,u=a.value,d=u&&u.components[h];if(!d)return Ju(t.default,{Component:d,route:l});const f=u.props[h],_=f?f===!0?l.params:typeof f=="function"?f(l):f:null,p=tf(d,lt({},_,e,{onVnodeUnmounted:m=>{m.component.isUnmounted&&(u.instances[h]=null)},ref:c}));return Ju(t.default,{Component:p,route:l})||p}}});function Ju(n,e){if(!n)return null;const t=n(e);return t.length===1?t[0]:t}const jg=Yg;function $g(n){const e=Ng(n.routes,n),t=n.parseQuery||Gg,i=n.stringifyQuery||Yu,s=n.history,r=tr(),o=tr(),a=tr(),c=sm(yi);let l=yi;Ts&&n.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const h=Ea.bind(null,F=>""+F),u=Ea.bind(null,cg),d=Ea.bind(null,Ar);function f(F,re){let Y,le;return ff(F)?(Y=e.getRecordMatcher(F),le=re):le=F,e.addRoute(le,Y)}function _(F){const re=e.getRecordMatcher(F);re&&e.removeRoute(re)}function M(){return e.getRoutes().map(F=>F.record)}function p(F){return!!e.getRecordMatcher(F)}function m(F,re){if(re=lt({},re||c.value),typeof F=="string"){const T=ba(t,F,re.path),I=e.resolve({path:T.path},re),U=s.createHref(T.fullPath);return lt(T,I,{params:d(I.params),hash:Ar(T.hash),redirectedFrom:void 0,href:U})}let Y;if(F.path!=null)Y=lt({},F,{path:ba(t,F.path,re.path).path});else{const T=lt({},F.params);for(const I in T)T[I]==null&&delete T[I];Y=lt({},F,{params:u(T)}),re.params=u(re.params)}const le=e.resolve(Y,re),ye=F.hash||"";le.params=h(d(le.params));const Q=hg(i,lt({},F,{hash:rg(ye),path:le.path})),g=s.createHref(Q);return lt({fullPath:Q,hash:ye,query:i===Yu?Hg(F.query):F.query||{}},le,{redirectedFrom:void 0,href:g})}function E(F){return typeof F=="string"?ba(t,F,c.value.path):lt({},F)}function y(F,re){if(l!==F)return Gs(8,{from:re,to:F})}function S(F){return A(F)}function D(F){return S(lt(E(F),{replace:!0}))}function C(F){const re=F.matched[F.matched.length-1];if(re&&re.redirect){const{redirect:Y}=re;let le=typeof Y=="function"?Y(F):Y;return typeof le=="string"&&(le=le.includes("?")||le.includes("#")?le=E(le):{path:le},le.params={}),lt({query:F.query,hash:F.hash,params:le.path!=null?{}:F.params},le)}}function A(F,re){const Y=l=m(F),le=c.value,ye=F.state,Q=F.force,g=F.replace===!0,T=C(Y);if(T)return A(lt(E(T),{state:typeof T=="object"?lt({},ye,T.state):ye,force:Q,replace:g}),re||Y);const I=Y;I.redirectedFrom=re;let U;return!Q&&dg(i,le,Y)&&(U=Gs(16,{to:I,from:le}),_e(le,le,!0,!1)),(U?Promise.resolve(U):x(I,le)).catch(O=>ni(O)?ni(O,2)?O:me(O):z(O,I,le)).then(O=>{if(O){if(ni(O,2))return A(lt({replace:g},E(O.to),{state:typeof O.to=="object"?lt({},ye,O.to.state):ye,force:Q}),re||I)}else O=X(I,le,!0,g,ye);return b(I,le,O),O})}function N(F,re){const Y=y(F,re);return Y?Promise.reject(Y):Promise.resolve()}function te(F){const re=ne.values().next().value;return re&&typeof re.runWithContext=="function"?re.runWithContext(F):F()}function x(F,re){let Y;const[le,ye,Q]=Kg(F,re);Y=Ta(le.reverse(),"beforeRouteLeave",F,re);for(const T of le)T.leaveGuards.forEach(I=>{Y.push(Pi(I,F,re))});const g=N.bind(null,F,re);return Y.push(g),fe(Y).then(()=>{Y=[];for(const T of r.list())Y.push(Pi(T,F,re));return Y.push(g),fe(Y)}).then(()=>{Y=Ta(ye,"beforeRouteUpdate",F,re);for(const T of ye)T.updateGuards.forEach(I=>{Y.push(Pi(I,F,re))});return Y.push(g),fe(Y)}).then(()=>{Y=[];for(const T of Q)if(T.beforeEnter)if(kn(T.beforeEnter))for(const I of T.beforeEnter)Y.push(Pi(I,F,re));else Y.push(Pi(T.beforeEnter,F,re));return Y.push(g),fe(Y)}).then(()=>(F.matched.forEach(T=>T.enterCallbacks={}),Y=Ta(Q,"beforeRouteEnter",F,re,te),Y.push(g),fe(Y))).then(()=>{Y=[];for(const T of o.list())Y.push(Pi(T,F,re));return Y.push(g),fe(Y)}).catch(T=>ni(T,8)?T:Promise.reject(T))}function b(F,re,Y){a.list().forEach(le=>te(()=>le(F,re,Y)))}function X(F,re,Y,le,ye){const Q=y(F,re);if(Q)return Q;const g=re===yi,T=Ts?history.state:{};Y&&(le||g?s.replace(F.fullPath,lt({scroll:g&&T&&T.scroll},ye)):s.push(F.fullPath,ye)),c.value=F,_e(F,re,Y,g),me()}let H;function J(){H||(H=s.listen((F,re,Y)=>{if(!ue.listening)return;const le=m(F),ye=C(le);if(ye){A(lt(ye,{replace:!0}),le).catch(gr);return}l=le;const Q=c.value;Ts&&yg(Bu(Q.fullPath,Y.delta),sa()),x(le,Q).catch(g=>ni(g,12)?g:ni(g,2)?(A(g.to,le).then(T=>{ni(T,20)&&!Y.delta&&Y.type===Rr.pop&&s.go(-1,!1)}).catch(gr),Promise.reject()):(Y.delta&&s.go(-Y.delta,!1),z(g,le,Q))).then(g=>{g=g||X(le,Q,!1),g&&(Y.delta&&!ni(g,8)?s.go(-Y.delta,!1):Y.type===Rr.pop&&ni(g,20)&&s.go(-1,!1)),b(le,Q,g)}).catch(gr)}))}let ie=tr(),G=tr(),K;function z(F,re,Y){me(F);const le=G.list();return le.length?le.forEach(ye=>ye(F,re,Y)):console.error(F),Promise.reject(F)}function pe(){return K&&c.value!==yi?Promise.resolve():new Promise((F,re)=>{ie.add([F,re])})}function me(F){return K||(K=!F,J(),ie.list().forEach(([re,Y])=>F?Y(F):re()),ie.reset()),F}function _e(F,re,Y,le){const{scrollBehavior:ye}=n;if(!Ts||!ye)return Promise.resolve();const Q=!Y&&Mg(Bu(F.fullPath,0))||(le||!Y)&&history.state&&history.state.scroll||null;return Td().then(()=>ye(F,re,Q)).then(g=>g&&xg(g)).catch(g=>z(g,F,re))}const Me=F=>s.go(F);let Pe;const ne=new Set,ue={currentRoute:c,listening:!0,addRoute:f,removeRoute:_,clearRoutes:e.clearRoutes,hasRoute:p,getRoutes:M,resolve:m,options:n,push:S,replace:D,go:Me,back:()=>Me(-1),forward:()=>Me(1),beforeEach:r.add,beforeResolve:o.add,afterEach:a.add,onError:G.add,isReady:pe,install(F){const re=this;F.component("RouterLink",Wg),F.component("RouterView",jg),F.config.globalProperties.$router=re,Object.defineProperty(F.config.globalProperties,"$route",{enumerable:!0,get:()=>An(c)}),Ts&&!Pe&&c.value===yi&&(Pe=!0,S(s.location).catch(ye=>{}));const Y={};for(const ye in yi)Object.defineProperty(Y,ye,{get:()=>c.value[ye],enumerable:!0});F.provide(Ul,re),F.provide(_f,Md(Y)),F.provide(Sc,c);const le=F.unmount;ne.add(F),F.unmount=function(){ne.delete(F),ne.size<1&&(l=yi,H&&H(),H=null,c.value=yi,Pe=!1,K=!1),le()}}};function fe(F){return F.reduce((re,Y)=>re.then(()=>te(Y)),Promise.resolve())}return ue}function Kg(n,e){const t=[],i=[],s=[],r=Math.max(e.matched.length,n.matched.length);for(let o=0;o<r;o++){const a=e.matched[o];a&&(n.matched.find(l=>zs(l,a))?i.push(a):t.push(a));const c=n.matched[o];c&&(e.matched.find(l=>zs(l,c))||s.push(c))}return[t,i,s]}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Nl="169",Zg=0,Qu=1,Jg=2,vf=1,Qg=2,li=3,Ni=0,hn=1,bt=2,Ii=0,Us=1,eh=2,th=3,nh=4,e_=5,Zi=100,t_=101,n_=102,i_=103,s_=104,r_=200,o_=201,a_=202,c_=203,wc=204,Ec=205,l_=206,u_=207,h_=208,d_=209,f_=210,p_=211,m_=212,g_=213,__=214,bc=0,Tc=1,Ac=2,Hs=3,Rc=4,Pc=5,Cc=6,Lc=7,xf=0,v_=1,x_=2,Di=0,y_=1,M_=2,S_=3,as=4,w_=5,E_=6,b_=7,yf=300,ks=301,Vs=302,Ic=303,Dc=304,ra=306,Vn=1e3,Qi=1001,Uc=1002,Rn=1003,T_=1004,Zr=1005,Bn=1006,Aa=1007,Li=1008,gi=1009,Mf=1010,Sf=1011,Pr=1012,Fl=1013,is=1014,di=1015,Br=1016,Ol=1017,Bl=1018,Ws=1020,wf=35902,Ef=1021,bf=1022,Pn=1023,Tf=1024,Af=1025,Ns=1026,Xs=1027,Rf=1028,zl=1029,Pf=1030,Gl=1031,Hl=1033,Ao=33776,Ro=33777,Po=33778,Co=33779,Nc=35840,Fc=35841,Oc=35842,Bc=35843,zc=36196,Gc=37492,Hc=37496,kc=37808,Vc=37809,Wc=37810,Xc=37811,qc=37812,Yc=37813,jc=37814,$c=37815,Kc=37816,Zc=37817,Jc=37818,Qc=37819,el=37820,tl=37821,Lo=36492,nl=36494,il=36495,Cf=36283,sl=36284,rl=36285,ol=36286,A_=3200,R_=3201,Lf=0,P_=1,Ci="",Fn="srgb",Bi="srgb-linear",kl="display-p3",oa="display-p3-linear",Go="linear",_t="srgb",Ho="rec709",ko="p3",hs=7680,ih=519,C_=512,L_=513,I_=514,If=515,D_=516,U_=517,N_=518,F_=519,sh=35044,rh="300 es",fi=2e3,Vo=2001;class js{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const jt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let oh=1234567;const vr=Math.PI/180,Cr=180/Math.PI;function cs(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(jt[n&255]+jt[n>>8&255]+jt[n>>16&255]+jt[n>>24&255]+"-"+jt[e&255]+jt[e>>8&255]+"-"+jt[e>>16&15|64]+jt[e>>24&255]+"-"+jt[t&63|128]+jt[t>>8&255]+"-"+jt[t>>16&255]+jt[t>>24&255]+jt[i&255]+jt[i>>8&255]+jt[i>>16&255]+jt[i>>24&255]).toLowerCase()}function zt(n,e,t){return Math.max(e,Math.min(t,n))}function Vl(n,e){return(n%e+e)%e}function O_(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function B_(n,e,t){return n!==e?(t-n)/(e-n):0}function xr(n,e,t){return(1-t)*n+t*e}function z_(n,e,t,i){return xr(n,e,1-Math.exp(-t*i))}function G_(n,e=1){return e-Math.abs(Vl(n,e*2)-e)}function H_(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function k_(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function V_(n,e){return n+Math.floor(Math.random()*(e-n+1))}function W_(n,e){return n+Math.random()*(e-n)}function X_(n){return n*(.5-Math.random())}function q_(n){n!==void 0&&(oh=n);let e=oh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Y_(n){return n*vr}function j_(n){return n*Cr}function $_(n){return(n&n-1)===0&&n!==0}function K_(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Z_(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function J_(n,e,t,i,s){const r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),l=r((e+i)/2),h=o((e+i)/2),u=r((e-i)/2),d=o((e-i)/2),f=r((i-e)/2),_=o((i-e)/2);switch(s){case"XYX":n.set(a*h,c*u,c*d,a*l);break;case"YZY":n.set(c*d,a*h,c*u,a*l);break;case"ZXZ":n.set(c*u,c*d,a*h,a*l);break;case"XZX":n.set(a*h,c*_,c*f,a*l);break;case"YXY":n.set(c*f,a*h,c*_,a*l);break;case"ZYZ":n.set(c*_,c*f,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function As(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function sn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Ye={DEG2RAD:vr,RAD2DEG:Cr,generateUUID:cs,clamp:zt,euclideanModulo:Vl,mapLinear:O_,inverseLerp:B_,lerp:xr,damp:z_,pingpong:G_,smoothstep:H_,smootherstep:k_,randInt:V_,randFloat:W_,randFloatSpread:X_,seededRandom:q_,degToRad:Y_,radToDeg:j_,isPowerOfTwo:$_,ceilPowerOfTwo:K_,floorPowerOfTwo:Z_,setQuaternionFromProperEuler:J_,normalize:sn,denormalize:As};class De{constructor(e=0,t=0){De.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(zt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Qe{constructor(e,t,i,s,r,o,a,c,l){Qe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,c,l)}set(e,t,i,s,r,o,a,c,l){const h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=c,h[6]=i,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],h=i[4],u=i[7],d=i[2],f=i[5],_=i[8],M=s[0],p=s[3],m=s[6],E=s[1],y=s[4],S=s[7],D=s[2],C=s[5],A=s[8];return r[0]=o*M+a*E+c*D,r[3]=o*p+a*y+c*C,r[6]=o*m+a*S+c*A,r[1]=l*M+h*E+u*D,r[4]=l*p+h*y+u*C,r[7]=l*m+h*S+u*A,r[2]=d*M+f*E+_*D,r[5]=d*p+f*y+_*C,r[8]=d*m+f*S+_*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8];return t*o*h-t*a*l-i*r*h+i*a*c+s*r*l-s*o*c}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=h*o-a*l,d=a*c-h*r,f=l*r-o*c,_=t*u+i*d+s*f;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/_;return e[0]=u*M,e[1]=(s*l-h*i)*M,e[2]=(a*i-s*o)*M,e[3]=d*M,e[4]=(h*t-s*c)*M,e[5]=(s*r-a*t)*M,e[6]=f*M,e[7]=(i*c-l*t)*M,e[8]=(o*t-i*r)*M,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(i*c,i*l,-i*(c*o+l*a)+o+e,-s*l,s*c,-s*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Ra.makeScale(e,t)),this}rotate(e){return this.premultiply(Ra.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ra.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ra=new Qe;function Df(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Lr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Q_(){const n=Lr("canvas");return n.style.display="block",n}const ah={};function Io(n){n in ah||(ah[n]=!0,console.warn(n))}function ev(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}function tv(n){const e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function nv(n){const e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const ch=new Qe().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),lh=new Qe().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),nr={[Bi]:{transfer:Go,primaries:Ho,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n,fromReference:n=>n},[Fn]:{transfer:_t,primaries:Ho,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[oa]:{transfer:Go,primaries:ko,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.applyMatrix3(lh),fromReference:n=>n.applyMatrix3(ch)},[kl]:{transfer:_t,primaries:ko,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.convertSRGBToLinear().applyMatrix3(lh),fromReference:n=>n.applyMatrix3(ch).convertLinearToSRGB()}},iv=new Set([Bi,oa]),ot={enabled:!0,_workingColorSpace:Bi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!iv.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=nr[e].toReference,s=nr[t].fromReference;return s(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return nr[n].primaries},getTransfer:function(n){return n===Ci?Go:nr[n].transfer},getLuminanceCoefficients:function(n,e=this._workingColorSpace){return n.fromArray(nr[e].luminanceCoefficients)}};function Fs(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Pa(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let ds;class sv{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ds===void 0&&(ds=Lr("canvas")),ds.width=e.width,ds.height=e.height;const i=ds.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=ds}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Lr("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Fs(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Fs(t[i]/255)*255):t[i]=Fs(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let rv=0;class Uf{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:rv++}),this.uuid=cs(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Ca(s[o].image)):r.push(Ca(s[o]))}else r=Ca(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function Ca(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?sv.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let ov=0;class cn extends js{constructor(e=cn.DEFAULT_IMAGE,t=cn.DEFAULT_MAPPING,i=Qi,s=Qi,r=Bn,o=Li,a=Pn,c=gi,l=cn.DEFAULT_ANISOTROPY,h=Ci){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ov++}),this.uuid=cs(),this.name="",this.source=new Uf(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new De(0,0),this.repeat=new De(1,1),this.center=new De(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==yf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Vn:e.x=e.x-Math.floor(e.x);break;case Qi:e.x=e.x<0?0:1;break;case Uc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Vn:e.y=e.y-Math.floor(e.y);break;case Qi:e.y=e.y<0?0:1;break;case Uc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}cn.DEFAULT_IMAGE=null;cn.DEFAULT_MAPPING=yf;cn.DEFAULT_ANISOTROPY=1;class ut{constructor(e=0,t=0,i=0,s=1){ut.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const c=e.elements,l=c[0],h=c[4],u=c[8],d=c[1],f=c[5],_=c[9],M=c[2],p=c[6],m=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-M)<.01&&Math.abs(_-p)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+M)<.1&&Math.abs(_+p)<.1&&Math.abs(l+f+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(l+1)/2,S=(f+1)/2,D=(m+1)/2,C=(h+d)/4,A=(u+M)/4,N=(_+p)/4;return y>S&&y>D?y<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(y),s=C/i,r=A/i):S>D?S<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(S),i=C/s,r=N/s):D<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(D),i=A/r,s=N/r),this.set(i,s,r,t),this}let E=Math.sqrt((p-_)*(p-_)+(u-M)*(u-M)+(d-h)*(d-h));return Math.abs(E)<.001&&(E=1),this.x=(p-_)/E,this.y=(u-M)/E,this.z=(d-h)/E,this.w=Math.acos((l+f+m-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class av extends js{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new ut(0,0,e,t),this.scissorTest=!1,this.viewport=new ut(0,0,e,t);const s={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Bn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const r=new cn(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Uf(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ss extends av{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Nf extends cn{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Rn,this.minFilter=Rn,this.wrapR=Qi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class cv extends cn{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Rn,this.minFilter=Rn,this.wrapR=Qi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class zr{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let c=i[s+0],l=i[s+1],h=i[s+2],u=i[s+3];const d=r[o+0],f=r[o+1],_=r[o+2],M=r[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=_,e[t+3]=M;return}if(u!==M||c!==d||l!==f||h!==_){let p=1-a;const m=c*d+l*f+h*_+u*M,E=m>=0?1:-1,y=1-m*m;if(y>Number.EPSILON){const D=Math.sqrt(y),C=Math.atan2(D,m*E);p=Math.sin(p*C)/D,a=Math.sin(a*C)/D}const S=a*E;if(c=c*p+d*S,l=l*p+f*S,h=h*p+_*S,u=u*p+M*S,p===1-a){const D=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=D,l*=D,h*=D,u*=D}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,s,r,o){const a=i[s],c=i[s+1],l=i[s+2],h=i[s+3],u=r[o],d=r[o+1],f=r[o+2],_=r[o+3];return e[t]=a*_+h*u+c*f-l*d,e[t+1]=c*_+h*d+l*u-a*f,e[t+2]=l*_+h*f+a*d-c*u,e[t+3]=h*_-a*u-c*d-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(i/2),h=a(s/2),u=a(r/2),d=c(i/2),f=c(s/2),_=c(r/2);switch(o){case"XYZ":this._x=d*h*u+l*f*_,this._y=l*f*u-d*h*_,this._z=l*h*_+d*f*u,this._w=l*h*u-d*f*_;break;case"YXZ":this._x=d*h*u+l*f*_,this._y=l*f*u-d*h*_,this._z=l*h*_-d*f*u,this._w=l*h*u+d*f*_;break;case"ZXY":this._x=d*h*u-l*f*_,this._y=l*f*u+d*h*_,this._z=l*h*_+d*f*u,this._w=l*h*u-d*f*_;break;case"ZYX":this._x=d*h*u-l*f*_,this._y=l*f*u+d*h*_,this._z=l*h*_-d*f*u,this._w=l*h*u+d*f*_;break;case"YZX":this._x=d*h*u+l*f*_,this._y=l*f*u+d*h*_,this._z=l*h*_-d*f*u,this._w=l*h*u-d*f*_;break;case"XZY":this._x=d*h*u-l*f*_,this._y=l*f*u-d*h*_,this._z=l*h*_+d*f*u,this._w=l*h*u+d*f*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],h=t[6],u=t[10],d=i+a+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(o-s)*f}else if(i>a&&i>u){const f=2*Math.sqrt(1+i-a-u);this._w=(h-c)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+l)/f}else if(a>u){const f=2*Math.sqrt(1+a-i-u);this._w=(r-l)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(c+h)/f}else{const f=2*Math.sqrt(1+u-i-a);this._w=(o-s)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(zt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,h=t._w;return this._x=i*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-i*l,this._z=r*h+o*l+i*c-s*a,this._w=o*h-i*a-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+i*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const f=1-t;return this._w=f*o+t*this._w,this._x=f*i+t*this._x,this._y=f*s+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-t)*h)/l,d=Math.sin(t*h)/l;return this._w=o*u+this._w*d,this._x=i*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class q{constructor(e=0,t=0,i=0){q.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(uh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(uh.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*s-a*i),h=2*(a*t-r*s),u=2*(r*i-o*t);return this.x=t+c*l+o*u-a*h,this.y=i+c*h+a*l-r*u,this.z=s+c*u+r*h-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=s*c-r*a,this.y=r*o-i*c,this.z=i*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return La.copy(this).projectOnVector(e),this.sub(La)}reflect(e){return this.sub(La.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(zt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const La=new q,uh=new zr;class Gr{constructor(e=new q(1/0,1/0,1/0),t=new q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Dn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Dn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Dn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Dn):Dn.fromBufferAttribute(r,o),Dn.applyMatrix4(e.matrixWorld),this.expandByPoint(Dn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Jr.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Jr.copy(i.boundingBox)),Jr.applyMatrix4(e.matrixWorld),this.union(Jr)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Dn),Dn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ir),Qr.subVectors(this.max,ir),fs.subVectors(e.a,ir),ps.subVectors(e.b,ir),ms.subVectors(e.c,ir),Mi.subVectors(ps,fs),Si.subVectors(ms,ps),ki.subVectors(fs,ms);let t=[0,-Mi.z,Mi.y,0,-Si.z,Si.y,0,-ki.z,ki.y,Mi.z,0,-Mi.x,Si.z,0,-Si.x,ki.z,0,-ki.x,-Mi.y,Mi.x,0,-Si.y,Si.x,0,-ki.y,ki.x,0];return!Ia(t,fs,ps,ms,Qr)||(t=[1,0,0,0,1,0,0,0,1],!Ia(t,fs,ps,ms,Qr))?!1:(eo.crossVectors(Mi,Si),t=[eo.x,eo.y,eo.z],Ia(t,fs,ps,ms,Qr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Dn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Dn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ii[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ii[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ii[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ii[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ii[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ii[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ii[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ii[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ii),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ii=[new q,new q,new q,new q,new q,new q,new q,new q],Dn=new q,Jr=new Gr,fs=new q,ps=new q,ms=new q,Mi=new q,Si=new q,ki=new q,ir=new q,Qr=new q,eo=new q,Vi=new q;function Ia(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Vi.fromArray(n,r);const a=s.x*Math.abs(Vi.x)+s.y*Math.abs(Vi.y)+s.z*Math.abs(Vi.z),c=e.dot(Vi),l=t.dot(Vi),h=i.dot(Vi);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const lv=new Gr,sr=new q,Da=new q;class Wl{constructor(e=new q,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):lv.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;sr.subVectors(e,this.center);const t=sr.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(sr,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Da.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(sr.copy(e.center).add(Da)),this.expandByPoint(sr.copy(e.center).sub(Da))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const si=new q,Ua=new q,to=new q,wi=new q,Na=new q,no=new q,Fa=new q;class uv{constructor(e=new q,t=new q(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,si)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=si.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(si.copy(this.origin).addScaledVector(this.direction,t),si.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Ua.copy(e).add(t).multiplyScalar(.5),to.copy(t).sub(e).normalize(),wi.copy(this.origin).sub(Ua);const r=e.distanceTo(t)*.5,o=-this.direction.dot(to),a=wi.dot(this.direction),c=-wi.dot(to),l=wi.lengthSq(),h=Math.abs(1-o*o);let u,d,f,_;if(h>0)if(u=o*c-a,d=o*a-c,_=r*h,u>=0)if(d>=-_)if(d<=_){const M=1/h;u*=M,d*=M,f=u*(u+o*d+2*a)+d*(o*u+d+2*c)+l}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d<=-_?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l):d<=_?(u=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Ua).addScaledVector(to,d),f}intersectSphere(e,t){si.subVectors(e.center,this.origin);const i=si.dot(this.direction),s=si.dot(si)-i*i,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(i=(e.min.x-d.x)*l,s=(e.max.x-d.x)*l):(i=(e.max.x-d.x)*l,s=(e.min.x-d.x)*l),h>=0?(r=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(e.min.z-d.z)*u,c=(e.max.z-d.z)*u):(a=(e.max.z-d.z)*u,c=(e.min.z-d.z)*u),i>c||a>s)||((a>i||i!==i)&&(i=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,si)!==null}intersectTriangle(e,t,i,s,r){Na.subVectors(t,e),no.subVectors(i,e),Fa.crossVectors(Na,no);let o=this.direction.dot(Fa),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;wi.subVectors(this.origin,e);const c=a*this.direction.dot(no.crossVectors(wi,no));if(c<0)return null;const l=a*this.direction.dot(Na.cross(wi));if(l<0||c+l>o)return null;const h=-a*wi.dot(Fa);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Mt{constructor(e,t,i,s,r,o,a,c,l,h,u,d,f,_,M,p){Mt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,c,l,h,u,d,f,_,M,p)}set(e,t,i,s,r,o,a,c,l,h,u,d,f,_,M,p){const m=this.elements;return m[0]=e,m[4]=t,m[8]=i,m[12]=s,m[1]=r,m[5]=o,m[9]=a,m[13]=c,m[2]=l,m[6]=h,m[10]=u,m[14]=d,m[3]=f,m[7]=_,m[11]=M,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Mt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,s=1/gs.setFromMatrixColumn(e,0).length(),r=1/gs.setFromMatrixColumn(e,1).length(),o=1/gs.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const d=o*h,f=o*u,_=a*h,M=a*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=f+_*l,t[5]=d-M*l,t[9]=-a*c,t[2]=M-d*l,t[6]=_+f*l,t[10]=o*c}else if(e.order==="YXZ"){const d=c*h,f=c*u,_=l*h,M=l*u;t[0]=d+M*a,t[4]=_*a-f,t[8]=o*l,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=f*a-_,t[6]=M+d*a,t[10]=o*c}else if(e.order==="ZXY"){const d=c*h,f=c*u,_=l*h,M=l*u;t[0]=d-M*a,t[4]=-o*u,t[8]=_+f*a,t[1]=f+_*a,t[5]=o*h,t[9]=M-d*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const d=o*h,f=o*u,_=a*h,M=a*u;t[0]=c*h,t[4]=_*l-f,t[8]=d*l+M,t[1]=c*u,t[5]=M*l+d,t[9]=f*l-_,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const d=o*c,f=o*l,_=a*c,M=a*l;t[0]=c*h,t[4]=M-d*u,t[8]=_*u+f,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-l*h,t[6]=f*u+_,t[10]=d-M*u}else if(e.order==="XZY"){const d=o*c,f=o*l,_=a*c,M=a*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=d*u+M,t[5]=o*h,t[9]=f*u-_,t[2]=_*u-f,t[6]=a*h,t[10]=M*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(hv,e,dv)}lookAt(e,t,i){const s=this.elements;return pn.subVectors(e,t),pn.lengthSq()===0&&(pn.z=1),pn.normalize(),Ei.crossVectors(i,pn),Ei.lengthSq()===0&&(Math.abs(i.z)===1?pn.x+=1e-4:pn.z+=1e-4,pn.normalize(),Ei.crossVectors(i,pn)),Ei.normalize(),io.crossVectors(pn,Ei),s[0]=Ei.x,s[4]=io.x,s[8]=pn.x,s[1]=Ei.y,s[5]=io.y,s[9]=pn.y,s[2]=Ei.z,s[6]=io.z,s[10]=pn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],h=i[1],u=i[5],d=i[9],f=i[13],_=i[2],M=i[6],p=i[10],m=i[14],E=i[3],y=i[7],S=i[11],D=i[15],C=s[0],A=s[4],N=s[8],te=s[12],x=s[1],b=s[5],X=s[9],H=s[13],J=s[2],ie=s[6],G=s[10],K=s[14],z=s[3],pe=s[7],me=s[11],_e=s[15];return r[0]=o*C+a*x+c*J+l*z,r[4]=o*A+a*b+c*ie+l*pe,r[8]=o*N+a*X+c*G+l*me,r[12]=o*te+a*H+c*K+l*_e,r[1]=h*C+u*x+d*J+f*z,r[5]=h*A+u*b+d*ie+f*pe,r[9]=h*N+u*X+d*G+f*me,r[13]=h*te+u*H+d*K+f*_e,r[2]=_*C+M*x+p*J+m*z,r[6]=_*A+M*b+p*ie+m*pe,r[10]=_*N+M*X+p*G+m*me,r[14]=_*te+M*H+p*K+m*_e,r[3]=E*C+y*x+S*J+D*z,r[7]=E*A+y*b+S*ie+D*pe,r[11]=E*N+y*X+S*G+D*me,r[15]=E*te+y*H+S*K+D*_e,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],h=e[2],u=e[6],d=e[10],f=e[14],_=e[3],M=e[7],p=e[11],m=e[15];return _*(+r*c*u-s*l*u-r*a*d+i*l*d+s*a*f-i*c*f)+M*(+t*c*f-t*l*d+r*o*d-s*o*f+s*l*h-r*c*h)+p*(+t*l*u-t*a*f-r*o*u+i*o*f+r*a*h-i*l*h)+m*(-s*a*h-t*c*u+t*a*d+s*o*u-i*o*d+i*c*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=e[9],d=e[10],f=e[11],_=e[12],M=e[13],p=e[14],m=e[15],E=u*p*l-M*d*l+M*c*f-a*p*f-u*c*m+a*d*m,y=_*d*l-h*p*l-_*c*f+o*p*f+h*c*m-o*d*m,S=h*M*l-_*u*l+_*a*f-o*M*f-h*a*m+o*u*m,D=_*u*c-h*M*c-_*a*d+o*M*d+h*a*p-o*u*p,C=t*E+i*y+s*S+r*D;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/C;return e[0]=E*A,e[1]=(M*d*r-u*p*r-M*s*f+i*p*f+u*s*m-i*d*m)*A,e[2]=(a*p*r-M*c*r+M*s*l-i*p*l-a*s*m+i*c*m)*A,e[3]=(u*c*r-a*d*r-u*s*l+i*d*l+a*s*f-i*c*f)*A,e[4]=y*A,e[5]=(h*p*r-_*d*r+_*s*f-t*p*f-h*s*m+t*d*m)*A,e[6]=(_*c*r-o*p*r-_*s*l+t*p*l+o*s*m-t*c*m)*A,e[7]=(o*d*r-h*c*r+h*s*l-t*d*l-o*s*f+t*c*f)*A,e[8]=S*A,e[9]=(_*u*r-h*M*r-_*i*f+t*M*f+h*i*m-t*u*m)*A,e[10]=(o*M*r-_*a*r+_*i*l-t*M*l-o*i*m+t*a*m)*A,e[11]=(h*a*r-o*u*r-h*i*l+t*u*l+o*i*f-t*a*f)*A,e[12]=D*A,e[13]=(h*M*s-_*u*s+_*i*d-t*M*d-h*i*p+t*u*p)*A,e[14]=(_*a*s-o*M*s-_*i*c+t*M*c+o*i*p-t*a*p)*A,e[15]=(o*u*s-h*a*s+h*i*c-t*u*c-o*i*d+t*a*d)*A,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,c=e.z,l=r*o,h=r*a;return this.set(l*o+i,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+i,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,h=o+o,u=a+a,d=r*l,f=r*h,_=r*u,M=o*h,p=o*u,m=a*u,E=c*l,y=c*h,S=c*u,D=i.x,C=i.y,A=i.z;return s[0]=(1-(M+m))*D,s[1]=(f+S)*D,s[2]=(_-y)*D,s[3]=0,s[4]=(f-S)*C,s[5]=(1-(d+m))*C,s[6]=(p+E)*C,s[7]=0,s[8]=(_+y)*A,s[9]=(p-E)*A,s[10]=(1-(d+M))*A,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;let r=gs.set(s[0],s[1],s[2]).length();const o=gs.set(s[4],s[5],s[6]).length(),a=gs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Un.copy(this);const l=1/r,h=1/o,u=1/a;return Un.elements[0]*=l,Un.elements[1]*=l,Un.elements[2]*=l,Un.elements[4]*=h,Un.elements[5]*=h,Un.elements[6]*=h,Un.elements[8]*=u,Un.elements[9]*=u,Un.elements[10]*=u,t.setFromRotationMatrix(Un),i.x=r,i.y=o,i.z=a,this}makePerspective(e,t,i,s,r,o,a=fi){const c=this.elements,l=2*r/(t-e),h=2*r/(i-s),u=(t+e)/(t-e),d=(i+s)/(i-s);let f,_;if(a===fi)f=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===Vo)f=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=fi){const c=this.elements,l=1/(t-e),h=1/(i-s),u=1/(o-r),d=(t+e)*l,f=(i+s)*h;let _,M;if(a===fi)_=(o+r)*u,M=-2*u;else if(a===Vo)_=r*u,M=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=M,c[14]=-_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const gs=new q,Un=new Mt,hv=new q(0,0,0),dv=new q(1,1,1),Ei=new q,io=new q,pn=new q,hh=new Mt,dh=new zr;class Qn{constructor(e=0,t=0,i=0,s=Qn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(zt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-zt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(zt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-zt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(zt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-zt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return hh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(hh,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return dh.setFromEuler(this),this.setFromQuaternion(dh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Qn.DEFAULT_ORDER="XYZ";class Ff{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let fv=0;const fh=new q,_s=new zr,ri=new Mt,so=new q,rr=new q,pv=new q,mv=new zr,ph=new q(1,0,0),mh=new q(0,1,0),gh=new q(0,0,1),_h={type:"added"},gv={type:"removed"},vs={type:"childadded",child:null},Oa={type:"childremoved",child:null};class Jt extends js{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:fv++}),this.uuid=cs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Jt.DEFAULT_UP.clone();const e=new q,t=new Qn,i=new zr,s=new q(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Mt},normalMatrix:{value:new Qe}}),this.matrix=new Mt,this.matrixWorld=new Mt,this.matrixAutoUpdate=Jt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Jt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ff,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return _s.setFromAxisAngle(e,t),this.quaternion.multiply(_s),this}rotateOnWorldAxis(e,t){return _s.setFromAxisAngle(e,t),this.quaternion.premultiply(_s),this}rotateX(e){return this.rotateOnAxis(ph,e)}rotateY(e){return this.rotateOnAxis(mh,e)}rotateZ(e){return this.rotateOnAxis(gh,e)}translateOnAxis(e,t){return fh.copy(e).applyQuaternion(this.quaternion),this.position.add(fh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ph,e)}translateY(e){return this.translateOnAxis(mh,e)}translateZ(e){return this.translateOnAxis(gh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ri.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?so.copy(e):so.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),rr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ri.lookAt(rr,so,this.up):ri.lookAt(so,rr,this.up),this.quaternion.setFromRotationMatrix(ri),s&&(ri.extractRotation(s.matrixWorld),_s.setFromRotationMatrix(ri),this.quaternion.premultiply(_s.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(_h),vs.child=e,this.dispatchEvent(vs),vs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(gv),Oa.child=e,this.dispatchEvent(Oa),Oa.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ri.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ri.multiply(e.parent.matrixWorld)),e.applyMatrix4(ri),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(_h),vs.child=e,this.dispatchEvent(vs),vs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(rr,e,pv),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(rr,mv,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];r(e.shapes,u)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(r(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),h=o(e.images),u=o(e.shapes),d=o(e.skeletons),f=o(e.animations),_=o(e.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),_.length>0&&(i.nodes=_)}return i.object=s,i;function o(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}Jt.DEFAULT_UP=new q(0,1,0);Jt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Jt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Nn=new q,oi=new q,Ba=new q,ai=new q,xs=new q,ys=new q,vh=new q,za=new q,Ga=new q,Ha=new q,ka=new ut,Va=new ut,Wa=new ut;class zn{constructor(e=new q,t=new q,i=new q){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Nn.subVectors(e,t),s.cross(Nn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){Nn.subVectors(s,t),oi.subVectors(i,t),Ba.subVectors(e,t);const o=Nn.dot(Nn),a=Nn.dot(oi),c=Nn.dot(Ba),l=oi.dot(oi),h=oi.dot(Ba),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;const d=1/u,f=(l*c-a*h)*d,_=(o*h-a*c)*d;return r.set(1-f-_,_,f)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,ai)===null?!1:ai.x>=0&&ai.y>=0&&ai.x+ai.y<=1}static getInterpolation(e,t,i,s,r,o,a,c){return this.getBarycoord(e,t,i,s,ai)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,ai.x),c.addScaledVector(o,ai.y),c.addScaledVector(a,ai.z),c)}static getInterpolatedAttribute(e,t,i,s,r,o){return ka.setScalar(0),Va.setScalar(0),Wa.setScalar(0),ka.fromBufferAttribute(e,t),Va.fromBufferAttribute(e,i),Wa.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(ka,r.x),o.addScaledVector(Va,r.y),o.addScaledVector(Wa,r.z),o}static isFrontFacing(e,t,i,s){return Nn.subVectors(i,t),oi.subVectors(e,t),Nn.cross(oi).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Nn.subVectors(this.c,this.b),oi.subVectors(this.a,this.b),Nn.cross(oi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return zn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return zn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return zn.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return zn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return zn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let o,a;xs.subVectors(s,i),ys.subVectors(r,i),za.subVectors(e,i);const c=xs.dot(za),l=ys.dot(za);if(c<=0&&l<=0)return t.copy(i);Ga.subVectors(e,s);const h=xs.dot(Ga),u=ys.dot(Ga);if(h>=0&&u<=h)return t.copy(s);const d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return o=c/(c-h),t.copy(i).addScaledVector(xs,o);Ha.subVectors(e,r);const f=xs.dot(Ha),_=ys.dot(Ha);if(_>=0&&f<=_)return t.copy(r);const M=f*l-c*_;if(M<=0&&l>=0&&_<=0)return a=l/(l-_),t.copy(i).addScaledVector(ys,a);const p=h*_-f*u;if(p<=0&&u-h>=0&&f-_>=0)return vh.subVectors(r,s),a=(u-h)/(u-h+(f-_)),t.copy(s).addScaledVector(vh,a);const m=1/(p+M+d);return o=M*m,a=d*m,t.copy(i).addScaledVector(xs,o).addScaledVector(ys,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Of={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},bi={h:0,s:0,l:0},ro={h:0,s:0,l:0};function Xa(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Xe{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Fn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ot.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=ot.workingColorSpace){return this.r=e,this.g=t,this.b=i,ot.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=ot.workingColorSpace){if(e=Vl(e,1),t=zt(t,0,1),i=zt(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=Xa(o,r,e+1/3),this.g=Xa(o,r,e),this.b=Xa(o,r,e-1/3)}return ot.toWorkingColorSpace(this,s),this}setStyle(e,t=Fn){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Fn){const i=Of[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Fs(e.r),this.g=Fs(e.g),this.b=Fs(e.b),this}copyLinearToSRGB(e){return this.r=Pa(e.r),this.g=Pa(e.g),this.b=Pa(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Fn){return ot.fromWorkingColorSpace($t.copy(this),e),Math.round(zt($t.r*255,0,255))*65536+Math.round(zt($t.g*255,0,255))*256+Math.round(zt($t.b*255,0,255))}getHexString(e=Fn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ot.workingColorSpace){ot.fromWorkingColorSpace($t.copy(this),t);const i=$t.r,s=$t.g,r=$t.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let c,l;const h=(a+o)/2;if(a===o)c=0,l=0;else{const u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case i:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-i)/u+2;break;case r:c=(i-s)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=ot.workingColorSpace){return ot.fromWorkingColorSpace($t.copy(this),t),e.r=$t.r,e.g=$t.g,e.b=$t.b,e}getStyle(e=Fn){ot.fromWorkingColorSpace($t.copy(this),e);const t=$t.r,i=$t.g,s=$t.b;return e!==Fn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(bi),this.setHSL(bi.h+e,bi.s+t,bi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(bi),e.getHSL(ro);const i=xr(bi.h,ro.h,t),s=xr(bi.s,ro.s,t),r=xr(bi.l,ro.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const $t=new Xe;Xe.NAMES=Of;let _v=0;class Hr extends js{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:_v++}),this.uuid=cs(),this.name="",this.type="Material",this.blending=Us,this.side=Ni,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=wc,this.blendDst=Ec,this.blendEquation=Zi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Xe(0,0,0),this.blendAlpha=0,this.depthFunc=Hs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ih,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=hs,this.stencilZFail=hs,this.stencilZPass=hs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Us&&(i.blending=this.blending),this.side!==Ni&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==wc&&(i.blendSrc=this.blendSrc),this.blendDst!==Ec&&(i.blendDst=this.blendDst),this.blendEquation!==Zi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Hs&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ih&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==hs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==hs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==hs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class dt extends Hr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qn,this.combine=xf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const It=new q,oo=new De;class Zn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=sh,this.updateRanges=[],this.gpuType=di,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)oo.fromBufferAttribute(this,t),oo.applyMatrix3(e),this.setXY(t,oo.x,oo.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)It.fromBufferAttribute(this,t),It.applyMatrix3(e),this.setXYZ(t,It.x,It.y,It.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)It.fromBufferAttribute(this,t),It.applyMatrix4(e),this.setXYZ(t,It.x,It.y,It.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)It.fromBufferAttribute(this,t),It.applyNormalMatrix(e),this.setXYZ(t,It.x,It.y,It.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)It.fromBufferAttribute(this,t),It.transformDirection(e),this.setXYZ(t,It.x,It.y,It.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=As(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=sn(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=As(t,this.array)),t}setX(e,t){return this.normalized&&(t=sn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=As(t,this.array)),t}setY(e,t){return this.normalized&&(t=sn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=As(t,this.array)),t}setZ(e,t){return this.normalized&&(t=sn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=As(t,this.array)),t}setW(e,t){return this.normalized&&(t=sn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=sn(t,this.array),i=sn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=sn(t,this.array),i=sn(i,this.array),s=sn(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=sn(t,this.array),i=sn(i,this.array),s=sn(s,this.array),r=sn(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==sh&&(e.usage=this.usage),e}}class Bf extends Zn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class zf extends Zn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Rt extends Zn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let vv=0;const Tn=new Mt,qa=new Jt,Ms=new q,mn=new Gr,or=new Gr,Bt=new q;class Ln extends js{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:vv++}),this.uuid=cs(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Df(e)?zf:Bf)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Qe().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Tn.makeRotationFromQuaternion(e),this.applyMatrix4(Tn),this}rotateX(e){return Tn.makeRotationX(e),this.applyMatrix4(Tn),this}rotateY(e){return Tn.makeRotationY(e),this.applyMatrix4(Tn),this}rotateZ(e){return Tn.makeRotationZ(e),this.applyMatrix4(Tn),this}translate(e,t,i){return Tn.makeTranslation(e,t,i),this.applyMatrix4(Tn),this}scale(e,t,i){return Tn.makeScale(e,t,i),this.applyMatrix4(Tn),this}lookAt(e){return qa.lookAt(e),qa.updateMatrix(),this.applyMatrix4(qa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ms).negate(),this.translate(Ms.x,Ms.y,Ms.z),this}setFromPoints(e){const t=[];for(let i=0,s=e.length;i<s;i++){const r=e[i];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Rt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Gr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new q(-1/0,-1/0,-1/0),new q(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];mn.setFromBufferAttribute(r),this.morphTargetsRelative?(Bt.addVectors(this.boundingBox.min,mn.min),this.boundingBox.expandByPoint(Bt),Bt.addVectors(this.boundingBox.max,mn.max),this.boundingBox.expandByPoint(Bt)):(this.boundingBox.expandByPoint(mn.min),this.boundingBox.expandByPoint(mn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Wl);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new q,1/0);return}if(e){const i=this.boundingSphere.center;if(mn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];or.setFromBufferAttribute(a),this.morphTargetsRelative?(Bt.addVectors(mn.min,or.min),mn.expandByPoint(Bt),Bt.addVectors(mn.max,or.max),mn.expandByPoint(Bt)):(mn.expandByPoint(or.min),mn.expandByPoint(or.max))}mn.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)Bt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Bt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Bt.fromBufferAttribute(a,l),c&&(Ms.fromBufferAttribute(e,l),Bt.add(Ms)),s=Math.max(s,i.distanceToSquared(Bt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Zn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let N=0;N<i.count;N++)a[N]=new q,c[N]=new q;const l=new q,h=new q,u=new q,d=new De,f=new De,_=new De,M=new q,p=new q;function m(N,te,x){l.fromBufferAttribute(i,N),h.fromBufferAttribute(i,te),u.fromBufferAttribute(i,x),d.fromBufferAttribute(r,N),f.fromBufferAttribute(r,te),_.fromBufferAttribute(r,x),h.sub(l),u.sub(l),f.sub(d),_.sub(d);const b=1/(f.x*_.y-_.x*f.y);isFinite(b)&&(M.copy(h).multiplyScalar(_.y).addScaledVector(u,-f.y).multiplyScalar(b),p.copy(u).multiplyScalar(f.x).addScaledVector(h,-_.x).multiplyScalar(b),a[N].add(M),a[te].add(M),a[x].add(M),c[N].add(p),c[te].add(p),c[x].add(p))}let E=this.groups;E.length===0&&(E=[{start:0,count:e.count}]);for(let N=0,te=E.length;N<te;++N){const x=E[N],b=x.start,X=x.count;for(let H=b,J=b+X;H<J;H+=3)m(e.getX(H+0),e.getX(H+1),e.getX(H+2))}const y=new q,S=new q,D=new q,C=new q;function A(N){D.fromBufferAttribute(s,N),C.copy(D);const te=a[N];y.copy(te),y.sub(D.multiplyScalar(D.dot(te))).normalize(),S.crossVectors(C,te);const b=S.dot(c[N])<0?-1:1;o.setXYZW(N,y.x,y.y,y.z,b)}for(let N=0,te=E.length;N<te;++N){const x=E[N],b=x.start,X=x.count;for(let H=b,J=b+X;H<J;H+=3)A(e.getX(H+0)),A(e.getX(H+1)),A(e.getX(H+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Zn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);const s=new q,r=new q,o=new q,a=new q,c=new q,l=new q,h=new q,u=new q;if(e)for(let d=0,f=e.count;d<f;d+=3){const _=e.getX(d+0),M=e.getX(d+1),p=e.getX(d+2);s.fromBufferAttribute(t,_),r.fromBufferAttribute(t,M),o.fromBufferAttribute(t,p),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(i,_),c.fromBufferAttribute(i,M),l.fromBufferAttribute(i,p),a.add(h),c.add(h),l.add(h),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(M,c.x,c.y,c.z),i.setXYZ(p,l.x,l.y,l.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Bt.fromBufferAttribute(e,t),Bt.normalize(),e.setXYZ(t,Bt.x,Bt.y,Bt.z)}toNonIndexed(){function e(a,c){const l=a.array,h=a.itemSize,u=a.normalized,d=new l.constructor(c.length*h);let f=0,_=0;for(let M=0,p=c.length;M<p;M++){a.isInterleavedBufferAttribute?f=c[M]*a.data.stride+a.offset:f=c[M]*h;for(let m=0;m<h;m++)d[_++]=l[f++]}return new Zn(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ln,i=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=e(c,i);t.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){const d=l[h],f=e(d,i);c.push(f)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const c in i){const l=i[c];e.data.attributes[c]=l.toJSON(e.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){const f=l[u];h.push(f.toJSON(e.data))}h.length>0&&(s[c]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const s=e.attributes;for(const l in s){const h=s[l];this.setAttribute(l,h.clone(t))}const r=e.morphAttributes;for(const l in r){const h=[],u=r[l];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,h=o.length;l<h;l++){const u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const xh=new Mt,Wi=new uv,ao=new Wl,yh=new q,co=new q,lo=new q,uo=new q,Ya=new q,ho=new q,Mh=new q,fo=new q;class P extends Jt{constructor(e=new Ln,t=new dt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){ho.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=a[c],u=r[c];h!==0&&(Ya.fromBufferAttribute(u,e),o?ho.addScaledVector(Ya,h):ho.addScaledVector(Ya.sub(t),h))}t.add(ho)}return t}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ao.copy(i.boundingSphere),ao.applyMatrix4(r),Wi.copy(e.ray).recast(e.near),!(ao.containsPoint(Wi.origin)===!1&&(Wi.intersectSphere(ao,yh)===null||Wi.origin.distanceToSquared(yh)>(e.far-e.near)**2))&&(xh.copy(r).invert(),Wi.copy(e.ray).applyMatrix4(xh),!(i.boundingBox!==null&&Wi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Wi)))}_computeIntersections(e,t,i){let s;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,M=d.length;_<M;_++){const p=d[_],m=o[p.materialIndex],E=Math.max(p.start,f.start),y=Math.min(a.count,Math.min(p.start+p.count,f.start+f.count));for(let S=E,D=y;S<D;S+=3){const C=a.getX(S),A=a.getX(S+1),N=a.getX(S+2);s=po(this,m,e,i,l,h,u,C,A,N),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{const _=Math.max(0,f.start),M=Math.min(a.count,f.start+f.count);for(let p=_,m=M;p<m;p+=3){const E=a.getX(p),y=a.getX(p+1),S=a.getX(p+2);s=po(this,o,e,i,l,h,u,E,y,S),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let _=0,M=d.length;_<M;_++){const p=d[_],m=o[p.materialIndex],E=Math.max(p.start,f.start),y=Math.min(c.count,Math.min(p.start+p.count,f.start+f.count));for(let S=E,D=y;S<D;S+=3){const C=S,A=S+1,N=S+2;s=po(this,m,e,i,l,h,u,C,A,N),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{const _=Math.max(0,f.start),M=Math.min(c.count,f.start+f.count);for(let p=_,m=M;p<m;p+=3){const E=p,y=p+1,S=p+2;s=po(this,o,e,i,l,h,u,E,y,S),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}}}function xv(n,e,t,i,s,r,o,a){let c;if(e.side===hn?c=i.intersectTriangle(o,r,s,!0,a):c=i.intersectTriangle(s,r,o,e.side===Ni,a),c===null)return null;fo.copy(a),fo.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(fo);return l<t.near||l>t.far?null:{distance:l,point:fo.clone(),object:n}}function po(n,e,t,i,s,r,o,a,c,l){n.getVertexPosition(a,co),n.getVertexPosition(c,lo),n.getVertexPosition(l,uo);const h=xv(n,e,t,i,co,lo,uo,Mh);if(h){const u=new q;zn.getBarycoord(Mh,co,lo,uo,u),s&&(h.uv=zn.getInterpolatedAttribute(s,a,c,l,u,new De)),r&&(h.uv1=zn.getInterpolatedAttribute(r,a,c,l,u,new De)),o&&(h.normal=zn.getInterpolatedAttribute(o,a,c,l,u,new q),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:c,c:l,normal:new q,materialIndex:0};zn.getNormal(co,lo,uo,d.normal),h.face=d,h.barycoord=u}return h}class $s extends Ln{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],h=[],u=[];let d=0,f=0;_("z","y","x",-1,-1,i,t,e,o,r,0),_("z","y","x",1,-1,i,t,-e,o,r,1),_("x","z","y",1,1,e,i,t,s,o,2),_("x","z","y",1,-1,e,i,-t,s,o,3),_("x","y","z",1,-1,e,t,i,s,r,4),_("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(c),this.setAttribute("position",new Rt(l,3)),this.setAttribute("normal",new Rt(h,3)),this.setAttribute("uv",new Rt(u,2));function _(M,p,m,E,y,S,D,C,A,N,te){const x=S/A,b=D/N,X=S/2,H=D/2,J=C/2,ie=A+1,G=N+1;let K=0,z=0;const pe=new q;for(let me=0;me<G;me++){const _e=me*b-H;for(let Me=0;Me<ie;Me++){const Pe=Me*x-X;pe[M]=Pe*E,pe[p]=_e*y,pe[m]=J,l.push(pe.x,pe.y,pe.z),pe[M]=0,pe[p]=0,pe[m]=C>0?1:-1,h.push(pe.x,pe.y,pe.z),u.push(Me/A),u.push(1-me/N),K+=1}}for(let me=0;me<N;me++)for(let _e=0;_e<A;_e++){const Me=d+_e+ie*me,Pe=d+_e+ie*(me+1),ne=d+(_e+1)+ie*(me+1),ue=d+(_e+1)+ie*me;c.push(Me,Pe,ue),c.push(Pe,ne,ue),z+=6}a.addGroup(f,z,te),f+=z,d+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $s(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function qs(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function rn(n){const e={};for(let t=0;t<n.length;t++){const i=qs(n[t]);for(const s in i)e[s]=i[s]}return e}function yv(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Gf(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ot.workingColorSpace}const Mv={clone:qs,merge:rn};var Sv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,wv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Pt extends Hr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Sv,this.fragmentShader=wv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=qs(e.uniforms),this.uniformsGroups=yv(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Hf extends Jt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Mt,this.projectionMatrix=new Mt,this.projectionMatrixInverse=new Mt,this.coordinateSystem=fi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ti=new q,Sh=new De,wh=new De;class vt extends Hf{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Cr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(vr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Cr*2*Math.atan(Math.tan(vr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Ti.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ti.x,Ti.y).multiplyScalar(-e/Ti.z),Ti.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ti.x,Ti.y).multiplyScalar(-e/Ti.z)}getViewSize(e,t){return this.getViewBounds(e,Sh,wh),t.subVectors(wh,Sh)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(vr*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,t-=o.offsetY*i/l,s*=o.width/c,i*=o.height/l}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ss=-90,ws=1;class kf extends Jt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new vt(Ss,ws,e,t);s.layers=this.layers,this.add(s);const r=new vt(Ss,ws,e,t);r.layers=this.layers,this.add(r);const o=new vt(Ss,ws,e,t);o.layers=this.layers,this.add(o);const a=new vt(Ss,ws,e,t);a.layers=this.layers,this.add(a);const c=new vt(Ss,ws,e,t);c.layers=this.layers,this.add(c);const l=new vt(Ss,ws,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,c]=t;for(const l of t)this.remove(l);if(e===fi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Vo)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const M=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,o),e.setRenderTarget(i,2,s),e.render(t,a),e.setRenderTarget(i,3,s),e.render(t,c),e.setRenderTarget(i,4,s),e.render(t,l),i.texture.generateMipmaps=M,e.setRenderTarget(i,5,s),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class Xl extends cn{constructor(e,t,i,s,r,o,a,c,l,h){e=e!==void 0?e:[],t=t!==void 0?t:ks,super(e,t,i,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Vf extends ss{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new Xl(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Bn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new $s(5,5,5),r=new Pt({name:"CubemapFromEquirect",uniforms:qs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:hn,blending:Ii});r.uniforms.tEquirect.value=t;const o=new P(s,r),a=t.minFilter;return t.minFilter===Li&&(t.minFilter=Bn),new kf(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,s){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}}const ja=new q,Ev=new q,bv=new Qe;class $i{constructor(e=new q(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=ja.subVectors(i,t).cross(Ev.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(ja),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||bv.getNormalMatrix(e),s=this.coplanarPoint(ja).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Xi=new Wl,mo=new q;class ql{constructor(e=new $i,t=new $i,i=new $i,s=new $i,r=new $i,o=new $i){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=fi){const i=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],h=s[5],u=s[6],d=s[7],f=s[8],_=s[9],M=s[10],p=s[11],m=s[12],E=s[13],y=s[14],S=s[15];if(i[0].setComponents(c-r,d-l,p-f,S-m).normalize(),i[1].setComponents(c+r,d+l,p+f,S+m).normalize(),i[2].setComponents(c+o,d+h,p+_,S+E).normalize(),i[3].setComponents(c-o,d-h,p-_,S-E).normalize(),i[4].setComponents(c-a,d-u,p-M,S-y).normalize(),t===fi)i[5].setComponents(c+a,d+u,p+M,S+y).normalize();else if(t===Vo)i[5].setComponents(a,u,M,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Xi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Xi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Xi)}intersectsSprite(e){return Xi.center.set(0,0,0),Xi.radius=.7071067811865476,Xi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Xi)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(mo.x=s.normal.x>0?e.max.x:e.min.x,mo.y=s.normal.y>0?e.max.y:e.min.y,mo.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(mo)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Wf(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function Tv(n){const e=new WeakMap;function t(a,c){const l=a.array,h=a.usage,u=l.byteLength,d=n.createBuffer();n.bindBuffer(c,d),n.bufferData(c,l,h),a.onUploadCallback();let f;if(l instanceof Float32Array)f=n.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=n.SHORT;else if(l instanceof Uint32Array)f=n.UNSIGNED_INT;else if(l instanceof Int32Array)f=n.INT;else if(l instanceof Int8Array)f=n.BYTE;else if(l instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function i(a,c,l){const h=c.array,u=c.updateRanges;if(n.bindBuffer(l,a),u.length===0)n.bufferSubData(l,0,h);else{u.sort((f,_)=>f.start-_.start);let d=0;for(let f=1;f<u.length;f++){const _=u[d],M=u[f];M.start<=_.start+_.count+1?_.count=Math.max(_.count,M.start+M.count-_.start):(++d,u[d]=M)}u.length=d+1;for(let f=0,_=u.length;f<_;f++){const M=u[f];n.bufferSubData(l,M.start*h.BYTES_PER_ELEMENT,h,M.start,M.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);c&&(n.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}class aa extends Ln{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(i),c=Math.floor(s),l=a+1,h=c+1,u=e/a,d=t/c,f=[],_=[],M=[],p=[];for(let m=0;m<h;m++){const E=m*d-o;for(let y=0;y<l;y++){const S=y*u-r;_.push(S,-E,0),M.push(0,0,1),p.push(y/a),p.push(1-m/c)}}for(let m=0;m<c;m++)for(let E=0;E<a;E++){const y=E+l*m,S=E+l*(m+1),D=E+1+l*(m+1),C=E+1+l*m;f.push(y,S,C),f.push(S,D,C)}this.setIndex(f),this.setAttribute("position",new Rt(_,3)),this.setAttribute("normal",new Rt(M,3)),this.setAttribute("uv",new Rt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new aa(e.width,e.height,e.widthSegments,e.heightSegments)}}var Av=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Rv=`#ifdef USE_ALPHAHASH
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
#endif`,Pv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Cv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Lv=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Iv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Dv=`#ifdef USE_AOMAP
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
#endif`,Uv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Nv=`#ifdef USE_BATCHING
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
#endif`,Fv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ov=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Bv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,zv=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Gv=`#ifdef USE_IRIDESCENCE
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
#endif`,Hv=`#ifdef USE_BUMPMAP
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
#endif`,kv=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Vv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Wv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Xv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,qv=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Yv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,jv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,$v=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Kv=`#define PI 3.141592653589793
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
} // validated`,Zv=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Jv=`vec3 transformedNormal = objectNormal;
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
#endif`,Qv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ex=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,tx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,nx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ix="gl_FragColor = linearToOutputTexel( gl_FragColor );",sx=`
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
}`,rx=`#ifdef USE_ENVMAP
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
#endif`,ox=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ax=`#ifdef USE_ENVMAP
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
#endif`,cx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,lx=`#ifdef USE_ENVMAP
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
#endif`,ux=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,hx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,dx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,px=`#ifdef USE_GRADIENTMAP
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
}`,mx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,gx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,_x=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,vx=`uniform bool receiveShadow;
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
#endif`,xx=`#ifdef USE_ENVMAP
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
#endif`,yx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Mx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Sx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,wx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ex=`PhysicalMaterial material;
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
#endif`,bx=`struct PhysicalMaterial {
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
}`,Tx=`
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
#endif`,Ax=`#if defined( RE_IndirectDiffuse )
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
#endif`,Rx=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Px=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Cx=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Lx=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ix=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Dx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ux=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Nx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Fx=`#if defined( USE_POINTS_UV )
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
#endif`,Ox=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Bx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,zx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Gx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Hx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,kx=`#ifdef USE_MORPHTARGETS
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
#endif`,Vx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Wx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Xx=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,qx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Yx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,$x=`#ifdef USE_NORMALMAP
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
#endif`,Kx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Zx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Jx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Qx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ey=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ty=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,ny=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,iy=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,sy=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ry=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,oy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ay=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,cy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ly=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,uy=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,hy=`float getShadowMask() {
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
}`,dy=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,fy=`#ifdef USE_SKINNING
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
#endif`,py=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,my=`#ifdef USE_SKINNING
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
#endif`,gy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,_y=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,vy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,xy=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,yy=`#ifdef USE_TRANSMISSION
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
#endif`,My=`#ifdef USE_TRANSMISSION
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
#endif`,Sy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,wy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ey=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,by=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Ty=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ay=`uniform sampler2D t2D;
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
}`,Ry=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Py=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Cy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ly=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Iy=`#include <common>
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
}`,Dy=`#if DEPTH_PACKING == 3200
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
}`,Uy=`#define DISTANCE
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
}`,Ny=`#define DISTANCE
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
}`,Fy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Oy=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,By=`uniform float scale;
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
}`,zy=`uniform vec3 diffuse;
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
}`,Gy=`#include <common>
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
}`,Hy=`uniform vec3 diffuse;
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
}`,ky=`#define LAMBERT
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
}`,Vy=`#define LAMBERT
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
}`,Wy=`#define MATCAP
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
}`,Xy=`#define MATCAP
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
}`,qy=`#define NORMAL
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
}`,Yy=`#define NORMAL
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
}`,jy=`#define PHONG
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
}`,$y=`#define PHONG
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
}`,Ky=`#define STANDARD
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
}`,Zy=`#define STANDARD
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
}`,Jy=`#define TOON
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
}`,Qy=`#define TOON
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
}`,eM=`uniform float size;
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
}`,tM=`uniform vec3 diffuse;
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
}`,nM=`#include <common>
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
}`,iM=`uniform vec3 color;
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
}`,sM=`uniform float rotation;
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
}`,rM=`uniform vec3 diffuse;
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
}`,Je={alphahash_fragment:Av,alphahash_pars_fragment:Rv,alphamap_fragment:Pv,alphamap_pars_fragment:Cv,alphatest_fragment:Lv,alphatest_pars_fragment:Iv,aomap_fragment:Dv,aomap_pars_fragment:Uv,batching_pars_vertex:Nv,batching_vertex:Fv,begin_vertex:Ov,beginnormal_vertex:Bv,bsdfs:zv,iridescence_fragment:Gv,bumpmap_pars_fragment:Hv,clipping_planes_fragment:kv,clipping_planes_pars_fragment:Vv,clipping_planes_pars_vertex:Wv,clipping_planes_vertex:Xv,color_fragment:qv,color_pars_fragment:Yv,color_pars_vertex:jv,color_vertex:$v,common:Kv,cube_uv_reflection_fragment:Zv,defaultnormal_vertex:Jv,displacementmap_pars_vertex:Qv,displacementmap_vertex:ex,emissivemap_fragment:tx,emissivemap_pars_fragment:nx,colorspace_fragment:ix,colorspace_pars_fragment:sx,envmap_fragment:rx,envmap_common_pars_fragment:ox,envmap_pars_fragment:ax,envmap_pars_vertex:cx,envmap_physical_pars_fragment:xx,envmap_vertex:lx,fog_vertex:ux,fog_pars_vertex:hx,fog_fragment:dx,fog_pars_fragment:fx,gradientmap_pars_fragment:px,lightmap_pars_fragment:mx,lights_lambert_fragment:gx,lights_lambert_pars_fragment:_x,lights_pars_begin:vx,lights_toon_fragment:yx,lights_toon_pars_fragment:Mx,lights_phong_fragment:Sx,lights_phong_pars_fragment:wx,lights_physical_fragment:Ex,lights_physical_pars_fragment:bx,lights_fragment_begin:Tx,lights_fragment_maps:Ax,lights_fragment_end:Rx,logdepthbuf_fragment:Px,logdepthbuf_pars_fragment:Cx,logdepthbuf_pars_vertex:Lx,logdepthbuf_vertex:Ix,map_fragment:Dx,map_pars_fragment:Ux,map_particle_fragment:Nx,map_particle_pars_fragment:Fx,metalnessmap_fragment:Ox,metalnessmap_pars_fragment:Bx,morphinstance_vertex:zx,morphcolor_vertex:Gx,morphnormal_vertex:Hx,morphtarget_pars_vertex:kx,morphtarget_vertex:Vx,normal_fragment_begin:Wx,normal_fragment_maps:Xx,normal_pars_fragment:qx,normal_pars_vertex:Yx,normal_vertex:jx,normalmap_pars_fragment:$x,clearcoat_normal_fragment_begin:Kx,clearcoat_normal_fragment_maps:Zx,clearcoat_pars_fragment:Jx,iridescence_pars_fragment:Qx,opaque_fragment:ey,packing:ty,premultiplied_alpha_fragment:ny,project_vertex:iy,dithering_fragment:sy,dithering_pars_fragment:ry,roughnessmap_fragment:oy,roughnessmap_pars_fragment:ay,shadowmap_pars_fragment:cy,shadowmap_pars_vertex:ly,shadowmap_vertex:uy,shadowmask_pars_fragment:hy,skinbase_vertex:dy,skinning_pars_vertex:fy,skinning_vertex:py,skinnormal_vertex:my,specularmap_fragment:gy,specularmap_pars_fragment:_y,tonemapping_fragment:vy,tonemapping_pars_fragment:xy,transmission_fragment:yy,transmission_pars_fragment:My,uv_pars_fragment:Sy,uv_pars_vertex:wy,uv_vertex:Ey,worldpos_vertex:by,background_vert:Ty,background_frag:Ay,backgroundCube_vert:Ry,backgroundCube_frag:Py,cube_vert:Cy,cube_frag:Ly,depth_vert:Iy,depth_frag:Dy,distanceRGBA_vert:Uy,distanceRGBA_frag:Ny,equirect_vert:Fy,equirect_frag:Oy,linedashed_vert:By,linedashed_frag:zy,meshbasic_vert:Gy,meshbasic_frag:Hy,meshlambert_vert:ky,meshlambert_frag:Vy,meshmatcap_vert:Wy,meshmatcap_frag:Xy,meshnormal_vert:qy,meshnormal_frag:Yy,meshphong_vert:jy,meshphong_frag:$y,meshphysical_vert:Ky,meshphysical_frag:Zy,meshtoon_vert:Jy,meshtoon_frag:Qy,points_vert:eM,points_frag:tM,shadow_vert:nM,shadow_frag:iM,sprite_vert:sM,sprite_frag:rM},Ie={common:{diffuse:{value:new Xe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Qe},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Qe}},envmap:{envMap:{value:null},envMapRotation:{value:new Qe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Qe},normalScale:{value:new De(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Xe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Xe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0},uvTransform:{value:new Qe}},sprite:{diffuse:{value:new Xe(16777215)},opacity:{value:1},center:{value:new De(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Qe},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0}}},$n={basic:{uniforms:rn([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.fog]),vertexShader:Je.meshbasic_vert,fragmentShader:Je.meshbasic_frag},lambert:{uniforms:rn([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,Ie.lights,{emissive:{value:new Xe(0)}}]),vertexShader:Je.meshlambert_vert,fragmentShader:Je.meshlambert_frag},phong:{uniforms:rn([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,Ie.lights,{emissive:{value:new Xe(0)},specular:{value:new Xe(1118481)},shininess:{value:30}}]),vertexShader:Je.meshphong_vert,fragmentShader:Je.meshphong_frag},standard:{uniforms:rn([Ie.common,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.roughnessmap,Ie.metalnessmap,Ie.fog,Ie.lights,{emissive:{value:new Xe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag},toon:{uniforms:rn([Ie.common,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.gradientmap,Ie.fog,Ie.lights,{emissive:{value:new Xe(0)}}]),vertexShader:Je.meshtoon_vert,fragmentShader:Je.meshtoon_frag},matcap:{uniforms:rn([Ie.common,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,{matcap:{value:null}}]),vertexShader:Je.meshmatcap_vert,fragmentShader:Je.meshmatcap_frag},points:{uniforms:rn([Ie.points,Ie.fog]),vertexShader:Je.points_vert,fragmentShader:Je.points_frag},dashed:{uniforms:rn([Ie.common,Ie.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Je.linedashed_vert,fragmentShader:Je.linedashed_frag},depth:{uniforms:rn([Ie.common,Ie.displacementmap]),vertexShader:Je.depth_vert,fragmentShader:Je.depth_frag},normal:{uniforms:rn([Ie.common,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,{opacity:{value:1}}]),vertexShader:Je.meshnormal_vert,fragmentShader:Je.meshnormal_frag},sprite:{uniforms:rn([Ie.sprite,Ie.fog]),vertexShader:Je.sprite_vert,fragmentShader:Je.sprite_frag},background:{uniforms:{uvTransform:{value:new Qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Je.background_vert,fragmentShader:Je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Qe}},vertexShader:Je.backgroundCube_vert,fragmentShader:Je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Je.cube_vert,fragmentShader:Je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Je.equirect_vert,fragmentShader:Je.equirect_frag},distanceRGBA:{uniforms:rn([Ie.common,Ie.displacementmap,{referencePosition:{value:new q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Je.distanceRGBA_vert,fragmentShader:Je.distanceRGBA_frag},shadow:{uniforms:rn([Ie.lights,Ie.fog,{color:{value:new Xe(0)},opacity:{value:1}}]),vertexShader:Je.shadow_vert,fragmentShader:Je.shadow_frag}};$n.physical={uniforms:rn([$n.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Qe},clearcoatNormalScale:{value:new De(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Qe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Qe},sheen:{value:0},sheenColor:{value:new Xe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Qe},transmissionSamplerSize:{value:new De},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Qe},attenuationDistance:{value:0},attenuationColor:{value:new Xe(0)},specularColor:{value:new Xe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Qe},anisotropyVector:{value:new De},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Qe}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag};const go={r:0,b:0,g:0},qi=new Qn,oM=new Mt;function aM(n,e,t,i,s,r,o){const a=new Xe(0);let c=r===!0?0:1,l,h,u=null,d=0,f=null;function _(E){let y=E.isScene===!0?E.background:null;return y&&y.isTexture&&(y=(E.backgroundBlurriness>0?t:e).get(y)),y}function M(E){let y=!1;const S=_(E);S===null?m(a,c):S&&S.isColor&&(m(S,1),y=!0);const D=n.xr.getEnvironmentBlendMode();D==="additive"?i.buffers.color.setClear(0,0,0,1,o):D==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||y)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function p(E,y){const S=_(y);S&&(S.isCubeTexture||S.mapping===ra)?(h===void 0&&(h=new P(new $s(1,1,1),new Pt({name:"BackgroundCubeMaterial",uniforms:qs($n.backgroundCube.uniforms),vertexShader:$n.backgroundCube.vertexShader,fragmentShader:$n.backgroundCube.fragmentShader,side:hn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(D,C,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),qi.copy(y.backgroundRotation),qi.x*=-1,qi.y*=-1,qi.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(qi.y*=-1,qi.z*=-1),h.material.uniforms.envMap.value=S,h.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(oM.makeRotationFromEuler(qi)),h.material.toneMapped=ot.getTransfer(S.colorSpace)!==_t,(u!==S||d!==S.version||f!==n.toneMapping)&&(h.material.needsUpdate=!0,u=S,d=S.version,f=n.toneMapping),h.layers.enableAll(),E.unshift(h,h.geometry,h.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new P(new aa(2,2),new Pt({name:"BackgroundMaterial",uniforms:qs($n.background.uniforms),vertexShader:$n.background.vertexShader,fragmentShader:$n.background.fragmentShader,side:Ni,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=ot.getTransfer(S.colorSpace)!==_t,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(u!==S||d!==S.version||f!==n.toneMapping)&&(l.material.needsUpdate=!0,u=S,d=S.version,f=n.toneMapping),l.layers.enableAll(),E.unshift(l,l.geometry,l.material,0,0,null))}function m(E,y){E.getRGB(go,Gf(n)),i.buffers.color.setClear(go.r,go.g,go.b,y,o)}return{getClearColor:function(){return a},setClearColor:function(E,y=1){a.set(E),c=y,m(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(E){c=E,m(a,c)},render:M,addToRenderList:p}}function cM(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=d(null);let r=s,o=!1;function a(x,b,X,H,J){let ie=!1;const G=u(H,X,b);r!==G&&(r=G,l(r.object)),ie=f(x,H,X,J),ie&&_(x,H,X,J),J!==null&&e.update(J,n.ELEMENT_ARRAY_BUFFER),(ie||o)&&(o=!1,S(x,b,X,H),J!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(J).buffer))}function c(){return n.createVertexArray()}function l(x){return n.bindVertexArray(x)}function h(x){return n.deleteVertexArray(x)}function u(x,b,X){const H=X.wireframe===!0;let J=i[x.id];J===void 0&&(J={},i[x.id]=J);let ie=J[b.id];ie===void 0&&(ie={},J[b.id]=ie);let G=ie[H];return G===void 0&&(G=d(c()),ie[H]=G),G}function d(x){const b=[],X=[],H=[];for(let J=0;J<t;J++)b[J]=0,X[J]=0,H[J]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:b,enabledAttributes:X,attributeDivisors:H,object:x,attributes:{},index:null}}function f(x,b,X,H){const J=r.attributes,ie=b.attributes;let G=0;const K=X.getAttributes();for(const z in K)if(K[z].location>=0){const me=J[z];let _e=ie[z];if(_e===void 0&&(z==="instanceMatrix"&&x.instanceMatrix&&(_e=x.instanceMatrix),z==="instanceColor"&&x.instanceColor&&(_e=x.instanceColor)),me===void 0||me.attribute!==_e||_e&&me.data!==_e.data)return!0;G++}return r.attributesNum!==G||r.index!==H}function _(x,b,X,H){const J={},ie=b.attributes;let G=0;const K=X.getAttributes();for(const z in K)if(K[z].location>=0){let me=ie[z];me===void 0&&(z==="instanceMatrix"&&x.instanceMatrix&&(me=x.instanceMatrix),z==="instanceColor"&&x.instanceColor&&(me=x.instanceColor));const _e={};_e.attribute=me,me&&me.data&&(_e.data=me.data),J[z]=_e,G++}r.attributes=J,r.attributesNum=G,r.index=H}function M(){const x=r.newAttributes;for(let b=0,X=x.length;b<X;b++)x[b]=0}function p(x){m(x,0)}function m(x,b){const X=r.newAttributes,H=r.enabledAttributes,J=r.attributeDivisors;X[x]=1,H[x]===0&&(n.enableVertexAttribArray(x),H[x]=1),J[x]!==b&&(n.vertexAttribDivisor(x,b),J[x]=b)}function E(){const x=r.newAttributes,b=r.enabledAttributes;for(let X=0,H=b.length;X<H;X++)b[X]!==x[X]&&(n.disableVertexAttribArray(X),b[X]=0)}function y(x,b,X,H,J,ie,G){G===!0?n.vertexAttribIPointer(x,b,X,J,ie):n.vertexAttribPointer(x,b,X,H,J,ie)}function S(x,b,X,H){M();const J=H.attributes,ie=X.getAttributes(),G=b.defaultAttributeValues;for(const K in ie){const z=ie[K];if(z.location>=0){let pe=J[K];if(pe===void 0&&(K==="instanceMatrix"&&x.instanceMatrix&&(pe=x.instanceMatrix),K==="instanceColor"&&x.instanceColor&&(pe=x.instanceColor)),pe!==void 0){const me=pe.normalized,_e=pe.itemSize,Me=e.get(pe);if(Me===void 0)continue;const Pe=Me.buffer,ne=Me.type,ue=Me.bytesPerElement,fe=ne===n.INT||ne===n.UNSIGNED_INT||pe.gpuType===Fl;if(pe.isInterleavedBufferAttribute){const F=pe.data,re=F.stride,Y=pe.offset;if(F.isInstancedInterleavedBuffer){for(let le=0;le<z.locationSize;le++)m(z.location+le,F.meshPerAttribute);x.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=F.meshPerAttribute*F.count)}else for(let le=0;le<z.locationSize;le++)p(z.location+le);n.bindBuffer(n.ARRAY_BUFFER,Pe);for(let le=0;le<z.locationSize;le++)y(z.location+le,_e/z.locationSize,ne,me,re*ue,(Y+_e/z.locationSize*le)*ue,fe)}else{if(pe.isInstancedBufferAttribute){for(let F=0;F<z.locationSize;F++)m(z.location+F,pe.meshPerAttribute);x.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let F=0;F<z.locationSize;F++)p(z.location+F);n.bindBuffer(n.ARRAY_BUFFER,Pe);for(let F=0;F<z.locationSize;F++)y(z.location+F,_e/z.locationSize,ne,me,_e*ue,_e/z.locationSize*F*ue,fe)}}else if(G!==void 0){const me=G[K];if(me!==void 0)switch(me.length){case 2:n.vertexAttrib2fv(z.location,me);break;case 3:n.vertexAttrib3fv(z.location,me);break;case 4:n.vertexAttrib4fv(z.location,me);break;default:n.vertexAttrib1fv(z.location,me)}}}}E()}function D(){N();for(const x in i){const b=i[x];for(const X in b){const H=b[X];for(const J in H)h(H[J].object),delete H[J];delete b[X]}delete i[x]}}function C(x){if(i[x.id]===void 0)return;const b=i[x.id];for(const X in b){const H=b[X];for(const J in H)h(H[J].object),delete H[J];delete b[X]}delete i[x.id]}function A(x){for(const b in i){const X=i[b];if(X[x.id]===void 0)continue;const H=X[x.id];for(const J in H)h(H[J].object),delete H[J];delete X[x.id]}}function N(){te(),o=!0,r!==s&&(r=s,l(r.object))}function te(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:N,resetDefaultState:te,dispose:D,releaseStatesOfGeometry:C,releaseStatesOfProgram:A,initAttributes:M,enableAttribute:p,disableUnusedAttributes:E}}function lM(n,e,t){let i;function s(l){i=l}function r(l,h){n.drawArrays(i,l,h),t.update(h,i,1)}function o(l,h,u){u!==0&&(n.drawArraysInstanced(i,l,h,u),t.update(h,i,u))}function a(l,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,h,0,u);let f=0;for(let _=0;_<u;_++)f+=h[_];t.update(f,i,1)}function c(l,h,u,d){if(u===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let _=0;_<l.length;_++)o(l[_],h[_],d[_]);else{f.multiDrawArraysInstancedWEBGL(i,l,0,h,0,d,0,u);let _=0;for(let M=0;M<u;M++)_+=h[M];for(let M=0;M<d.length;M++)t.update(_,i,d[M])}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function uM(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(A){return!(A!==Pn&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){const N=A===Br&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==gi&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==di&&!N)}function c(A){if(A==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const u=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(d===!0){const A=e.get("EXT_clip_control");A.clipControlEXT(A.LOWER_LEFT_EXT,A.ZERO_TO_ONE_EXT)}const f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=n.getParameter(n.MAX_TEXTURE_SIZE),p=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),E=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),y=n.getParameter(n.MAX_VARYING_VECTORS),S=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),D=_>0,C=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:_,maxTextureSize:M,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:E,maxVaryings:y,maxFragmentUniforms:S,vertexTextures:D,maxSamples:C}}function hM(n){const e=this;let t=null,i=0,s=!1,r=!1;const o=new $i,a=new Qe,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||i!==0||s;return s=d,i=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){const _=u.clippingPlanes,M=u.clipIntersection,p=u.clipShadows,m=n.get(u);if(!s||_===null||_.length===0||r&&!p)r?h(null):l();else{const E=r?0:i,y=E*4;let S=m.clippingState||null;c.value=S,S=h(_,d,y,f);for(let D=0;D!==y;++D)S[D]=t[D];m.clippingState=S,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=E}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(u,d,f,_){const M=u!==null?u.length:0;let p=null;if(M!==0){if(p=c.value,_!==!0||p===null){const m=f+M*4,E=d.matrixWorldInverse;a.getNormalMatrix(E),(p===null||p.length<m)&&(p=new Float32Array(m));for(let y=0,S=f;y!==M;++y,S+=4)o.copy(u[y]).applyMatrix4(E,a),o.normal.toArray(p,S),p[S+3]=o.constant}c.value=p,c.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,p}}function dM(n){let e=new WeakMap;function t(o,a){return a===Ic?o.mapping=ks:a===Dc&&(o.mapping=Vs),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Ic||a===Dc)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new Vf(c.height);return l.fromEquirectangularTexture(n,o),e.set(o,l),o.addEventListener("dispose",s),t(l.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}class Xf extends Hf{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,o=i+e,a=s+t,c=s-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Ps=4,Eh=[.125,.215,.35,.446,.526,.582],Ji=20,$a=new Xf,bh=new Xe;let Ka=null,Za=0,Ja=0,Qa=!1;const Ki=(1+Math.sqrt(5))/2,Es=1/Ki,Th=[new q(-Ki,Es,0),new q(Ki,Es,0),new q(-Es,0,Ki),new q(Es,0,Ki),new q(0,Ki,-Es),new q(0,Ki,Es),new q(-1,1,-1),new q(1,1,-1),new q(-1,1,1),new q(1,1,1)];class Ah{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){Ka=this._renderer.getRenderTarget(),Za=this._renderer.getActiveCubeFace(),Ja=this._renderer.getActiveMipmapLevel(),Qa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ch(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ph(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ka,Za,Ja),this._renderer.xr.enabled=Qa,e.scissorTest=!1,_o(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ks||e.mapping===Vs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ka=this._renderer.getRenderTarget(),Za=this._renderer.getActiveCubeFace(),Ja=this._renderer.getActiveMipmapLevel(),Qa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Bn,minFilter:Bn,generateMipmaps:!1,type:Br,format:Pn,colorSpace:Bi,depthBuffer:!1},s=Rh(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Rh(e,t,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=fM(r)),this._blurMaterial=pM(r,e,t)}return s}_compileMaterial(e){const t=new P(this._lodPlanes[0],e);this._renderer.compile(t,$a)}_sceneToCubeUV(e,t,i,s){const a=new vt(90,1,t,i),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(bh),h.toneMapping=Di,h.autoClear=!1;const f=new dt({name:"PMREM.Background",side:hn,depthWrite:!1,depthTest:!1}),_=new P(new $s,f);let M=!1;const p=e.background;p?p.isColor&&(f.color.copy(p),e.background=null,M=!0):(f.color.copy(bh),M=!0);for(let m=0;m<6;m++){const E=m%3;E===0?(a.up.set(0,c[m],0),a.lookAt(l[m],0,0)):E===1?(a.up.set(0,0,c[m]),a.lookAt(0,l[m],0)):(a.up.set(0,c[m],0),a.lookAt(0,0,l[m]));const y=this._cubeSize;_o(s,E*y,m>2?y:0,y,y),h.setRenderTarget(s),M&&h.render(_,a),h.render(e,a)}_.geometry.dispose(),_.material.dispose(),h.toneMapping=d,h.autoClear=u,e.background=p}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===ks||e.mapping===Vs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ch()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ph());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new P(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const c=this._cubeSize;_o(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(o,$a)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Th[(s-r-1)%Th.length];this._blur(e,r-1,r,o,a)}t.autoClear=i}_blur(e,t,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new P(this._lodPlanes[s],l),d=l.uniforms,f=this._sizeLods[i]-1,_=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Ji-1),M=r/_,p=isFinite(r)?1+Math.floor(h*M):Ji;p>Ji&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Ji}`);const m=[];let E=0;for(let A=0;A<Ji;++A){const N=A/M,te=Math.exp(-N*N/2);m.push(te),A===0?E+=te:A<p&&(E+=2*te)}for(let A=0;A<m.length;A++)m[A]=m[A]/E;d.envMap.value=e.texture,d.samples.value=p,d.weights.value=m,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:y}=this;d.dTheta.value=_,d.mipInt.value=y-i;const S=this._sizeLods[s],D=3*S*(s>y-Ps?s-y+Ps:0),C=4*(this._cubeSize-S);_o(t,D,C,3*S,2*S),c.setRenderTarget(t),c.render(u,$a)}}function fM(n){const e=[],t=[],i=[];let s=n;const r=n-Ps+1+Eh.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let c=1/a;o>n-Ps?c=Eh[o-n+Ps-1]:o===0&&(c=0),i.push(c);const l=1/(a-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,_=6,M=3,p=2,m=1,E=new Float32Array(M*_*f),y=new Float32Array(p*_*f),S=new Float32Array(m*_*f);for(let C=0;C<f;C++){const A=C%3*2/3-1,N=C>2?0:-1,te=[A,N,0,A+2/3,N,0,A+2/3,N+1,0,A,N,0,A+2/3,N+1,0,A,N+1,0];E.set(te,M*_*C),y.set(d,p*_*C);const x=[C,C,C,C,C,C];S.set(x,m*_*C)}const D=new Ln;D.setAttribute("position",new Zn(E,M)),D.setAttribute("uv",new Zn(y,p)),D.setAttribute("faceIndex",new Zn(S,m)),e.push(D),s>Ps&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Rh(n,e,t){const i=new ss(n,e,t);return i.texture.mapping=ra,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function _o(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function pM(n,e,t){const i=new Float32Array(Ji),s=new q(0,1,0);return new Pt({name:"SphericalGaussianBlur",defines:{n:Ji,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Yl(),fragmentShader:`

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
		`,blending:Ii,depthTest:!1,depthWrite:!1})}function Ph(){return new Pt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Yl(),fragmentShader:`

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
		`,blending:Ii,depthTest:!1,depthWrite:!1})}function Ch(){return new Pt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Yl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ii,depthTest:!1,depthWrite:!1})}function Yl(){return`

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
	`}function mM(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const c=a.mapping,l=c===Ic||c===Dc,h=c===ks||c===Vs;if(l||h){let u=e.get(a);const d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new Ah(n)),u=l?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{const f=a.image;return l&&f&&f.height>0||h&&f&&s(f)?(t===null&&(t=new Ah(n)),u=l?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let c=0;const l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function gM(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&Io("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function _M(n,e,t,i){const s={},r=new WeakMap;function o(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const _ in d.attributes)e.remove(d.attributes[_]);for(const _ in d.morphAttributes){const M=d.morphAttributes[_];for(let p=0,m=M.length;p<m;p++)e.remove(M[p])}d.removeEventListener("dispose",o),delete s[d.id];const f=r.get(d);f&&(e.remove(f),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,t.memory.geometries++),d}function c(u){const d=u.attributes;for(const _ in d)e.update(d[_],n.ARRAY_BUFFER);const f=u.morphAttributes;for(const _ in f){const M=f[_];for(let p=0,m=M.length;p<m;p++)e.update(M[p],n.ARRAY_BUFFER)}}function l(u){const d=[],f=u.index,_=u.attributes.position;let M=0;if(f!==null){const E=f.array;M=f.version;for(let y=0,S=E.length;y<S;y+=3){const D=E[y+0],C=E[y+1],A=E[y+2];d.push(D,C,C,A,A,D)}}else if(_!==void 0){const E=_.array;M=_.version;for(let y=0,S=E.length/3-1;y<S;y+=3){const D=y+0,C=y+1,A=y+2;d.push(D,C,C,A,A,D)}}else return;const p=new(Df(d)?zf:Bf)(d,1);p.version=M;const m=r.get(u);m&&e.remove(m),r.set(u,p)}function h(u){const d=r.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function vM(n,e,t){let i;function s(d){i=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function c(d,f){n.drawElements(i,f,r,d*o),t.update(f,i,1)}function l(d,f,_){_!==0&&(n.drawElementsInstanced(i,f,r,d*o,_),t.update(f,i,_))}function h(d,f,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,r,d,0,_);let p=0;for(let m=0;m<_;m++)p+=f[m];t.update(p,i,1)}function u(d,f,_,M){if(_===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<d.length;m++)l(d[m]/o,f[m],M[m]);else{p.multiDrawElementsInstancedWEBGL(i,f,0,r,d,0,M,0,_);let m=0;for(let E=0;E<_;E++)m+=f[E];for(let E=0;E<M.length;E++)t.update(m,i,M[E])}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function xM(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function yM(n,e,t){const i=new WeakMap,s=new ut;function r(o,a,c){const l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let d=i.get(a);if(d===void 0||d.count!==u){let x=function(){N.dispose(),i.delete(a),a.removeEventListener("dispose",x)};var f=x;d!==void 0&&d.texture.dispose();const _=a.morphAttributes.position!==void 0,M=a.morphAttributes.normal!==void 0,p=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],E=a.morphAttributes.normal||[],y=a.morphAttributes.color||[];let S=0;_===!0&&(S=1),M===!0&&(S=2),p===!0&&(S=3);let D=a.attributes.position.count*S,C=1;D>e.maxTextureSize&&(C=Math.ceil(D/e.maxTextureSize),D=e.maxTextureSize);const A=new Float32Array(D*C*4*u),N=new Nf(A,D,C,u);N.type=di,N.needsUpdate=!0;const te=S*4;for(let b=0;b<u;b++){const X=m[b],H=E[b],J=y[b],ie=D*C*4*b;for(let G=0;G<X.count;G++){const K=G*te;_===!0&&(s.fromBufferAttribute(X,G),A[ie+K+0]=s.x,A[ie+K+1]=s.y,A[ie+K+2]=s.z,A[ie+K+3]=0),M===!0&&(s.fromBufferAttribute(H,G),A[ie+K+4]=s.x,A[ie+K+5]=s.y,A[ie+K+6]=s.z,A[ie+K+7]=0),p===!0&&(s.fromBufferAttribute(J,G),A[ie+K+8]=s.x,A[ie+K+9]=s.y,A[ie+K+10]=s.z,A[ie+K+11]=J.itemSize===4?s.w:1)}}d={count:u,texture:N,size:new De(D,C)},i.set(a,d),a.addEventListener("dispose",x)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let _=0;for(let p=0;p<l.length;p++)_+=l[p];const M=a.morphTargetsRelative?1:1-_;c.getUniforms().setValue(n,"morphTargetBaseInfluence",M),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:r}}function MM(n,e,t,i){let s=new WeakMap;function r(c){const l=i.render.frame,h=c.geometry,u=e.get(c,h);if(s.get(u)!==l&&(e.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return u}function o(){s=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:o}}class qf extends cn{constructor(e,t,i,s,r,o,a,c,l,h=Ns){if(h!==Ns&&h!==Xs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===Ns&&(i=is),i===void 0&&h===Xs&&(i=Ws),super(null,s,r,o,a,c,h,i,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Rn,this.minFilter=c!==void 0?c:Rn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Yf=new cn,Lh=new qf(1,1),jf=new Nf,$f=new cv,Kf=new Xl,Ih=[],Dh=[],Uh=new Float32Array(16),Nh=new Float32Array(9),Fh=new Float32Array(4);function Ks(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=Ih[s];if(r===void 0&&(r=new Float32Array(s),Ih[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function Ft(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Ot(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function ca(n,e){let t=Dh[e];t===void 0&&(t=new Int32Array(e),Dh[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function SM(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function wM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ft(t,e))return;n.uniform2fv(this.addr,e),Ot(t,e)}}function EM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ft(t,e))return;n.uniform3fv(this.addr,e),Ot(t,e)}}function bM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ft(t,e))return;n.uniform4fv(this.addr,e),Ot(t,e)}}function TM(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ft(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Ot(t,e)}else{if(Ft(t,i))return;Fh.set(i),n.uniformMatrix2fv(this.addr,!1,Fh),Ot(t,i)}}function AM(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ft(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Ot(t,e)}else{if(Ft(t,i))return;Nh.set(i),n.uniformMatrix3fv(this.addr,!1,Nh),Ot(t,i)}}function RM(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ft(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Ot(t,e)}else{if(Ft(t,i))return;Uh.set(i),n.uniformMatrix4fv(this.addr,!1,Uh),Ot(t,i)}}function PM(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function CM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ft(t,e))return;n.uniform2iv(this.addr,e),Ot(t,e)}}function LM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ft(t,e))return;n.uniform3iv(this.addr,e),Ot(t,e)}}function IM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ft(t,e))return;n.uniform4iv(this.addr,e),Ot(t,e)}}function DM(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function UM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ft(t,e))return;n.uniform2uiv(this.addr,e),Ot(t,e)}}function NM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ft(t,e))return;n.uniform3uiv(this.addr,e),Ot(t,e)}}function FM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ft(t,e))return;n.uniform4uiv(this.addr,e),Ot(t,e)}}function OM(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Lh.compareFunction=If,r=Lh):r=Yf,t.setTexture2D(e||r,s)}function BM(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||$f,s)}function zM(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||Kf,s)}function GM(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||jf,s)}function HM(n){switch(n){case 5126:return SM;case 35664:return wM;case 35665:return EM;case 35666:return bM;case 35674:return TM;case 35675:return AM;case 35676:return RM;case 5124:case 35670:return PM;case 35667:case 35671:return CM;case 35668:case 35672:return LM;case 35669:case 35673:return IM;case 5125:return DM;case 36294:return UM;case 36295:return NM;case 36296:return FM;case 35678:case 36198:case 36298:case 36306:case 35682:return OM;case 35679:case 36299:case 36307:return BM;case 35680:case 36300:case 36308:case 36293:return zM;case 36289:case 36303:case 36311:case 36292:return GM}}function kM(n,e){n.uniform1fv(this.addr,e)}function VM(n,e){const t=Ks(e,this.size,2);n.uniform2fv(this.addr,t)}function WM(n,e){const t=Ks(e,this.size,3);n.uniform3fv(this.addr,t)}function XM(n,e){const t=Ks(e,this.size,4);n.uniform4fv(this.addr,t)}function qM(n,e){const t=Ks(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function YM(n,e){const t=Ks(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function jM(n,e){const t=Ks(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function $M(n,e){n.uniform1iv(this.addr,e)}function KM(n,e){n.uniform2iv(this.addr,e)}function ZM(n,e){n.uniform3iv(this.addr,e)}function JM(n,e){n.uniform4iv(this.addr,e)}function QM(n,e){n.uniform1uiv(this.addr,e)}function eS(n,e){n.uniform2uiv(this.addr,e)}function tS(n,e){n.uniform3uiv(this.addr,e)}function nS(n,e){n.uniform4uiv(this.addr,e)}function iS(n,e,t){const i=this.cache,s=e.length,r=ca(t,s);Ft(i,r)||(n.uniform1iv(this.addr,r),Ot(i,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||Yf,r[o])}function sS(n,e,t){const i=this.cache,s=e.length,r=ca(t,s);Ft(i,r)||(n.uniform1iv(this.addr,r),Ot(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||$f,r[o])}function rS(n,e,t){const i=this.cache,s=e.length,r=ca(t,s);Ft(i,r)||(n.uniform1iv(this.addr,r),Ot(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Kf,r[o])}function oS(n,e,t){const i=this.cache,s=e.length,r=ca(t,s);Ft(i,r)||(n.uniform1iv(this.addr,r),Ot(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||jf,r[o])}function aS(n){switch(n){case 5126:return kM;case 35664:return VM;case 35665:return WM;case 35666:return XM;case 35674:return qM;case 35675:return YM;case 35676:return jM;case 5124:case 35670:return $M;case 35667:case 35671:return KM;case 35668:case 35672:return ZM;case 35669:case 35673:return JM;case 5125:return QM;case 36294:return eS;case 36295:return tS;case 36296:return nS;case 35678:case 36198:case 36298:case 36306:case 35682:return iS;case 35679:case 36299:case 36307:return sS;case 35680:case 36300:case 36308:case 36293:return rS;case 36289:case 36303:case 36311:case 36292:return oS}}class cS{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=HM(t.type)}}class lS{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=aS(t.type)}}class uS{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],i)}}}const ec=/(\w+)(\])?(\[|\.)?/g;function Oh(n,e){n.seq.push(e),n.map[e.id]=e}function hS(n,e,t){const i=n.name,s=i.length;for(ec.lastIndex=0;;){const r=ec.exec(i),o=ec.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){Oh(t,l===void 0?new cS(a,n,e):new lS(a,n,e));break}else{let u=t.map[a];u===void 0&&(u=new uS(a),Oh(t,u)),t=u}}}class Do{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);hS(r,o,this)}}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],c=i[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&i.push(o)}return i}}function Bh(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const dS=37297;let fS=0;function pS(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function mS(n){const e=ot.getPrimaries(ot.workingColorSpace),t=ot.getPrimaries(n);let i;switch(e===t?i="":e===ko&&t===Ho?i="LinearDisplayP3ToLinearSRGB":e===Ho&&t===ko&&(i="LinearSRGBToLinearDisplayP3"),n){case Bi:case oa:return[i,"LinearTransferOETF"];case Fn:case kl:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function zh(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=n.getShaderInfoLog(e).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+pS(n.getShaderSource(e),o)}else return s}function gS(n,e){const t=mS(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function _S(n,e){let t;switch(e){case y_:t="Linear";break;case M_:t="Reinhard";break;case S_:t="Cineon";break;case as:t="ACESFilmic";break;case E_:t="AgX";break;case b_:t="Neutral";break;case w_:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const vo=new q;function vS(){ot.getLuminanceCoefficients(vo);const n=vo.x.toFixed(4),e=vo.y.toFixed(4),t=vo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function xS(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(lr).join(`
`)}function yS(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function MS(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function lr(n){return n!==""}function Gh(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Hh(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const SS=/^[ \t]*#include +<([\w\d./]+)>/gm;function al(n){return n.replace(SS,ES)}const wS=new Map;function ES(n,e){let t=Je[e];if(t===void 0){const i=wS.get(e);if(i!==void 0)t=Je[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return al(t)}const bS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function kh(n){return n.replace(bS,TS)}function TS(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Vh(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function AS(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===vf?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Qg?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===li&&(e="SHADOWMAP_TYPE_VSM"),e}function RS(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case ks:case Vs:e="ENVMAP_TYPE_CUBE";break;case ra:e="ENVMAP_TYPE_CUBE_UV";break}return e}function PS(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Vs:e="ENVMAP_MODE_REFRACTION";break}return e}function CS(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case xf:e="ENVMAP_BLENDING_MULTIPLY";break;case v_:e="ENVMAP_BLENDING_MIX";break;case x_:e="ENVMAP_BLENDING_ADD";break}return e}function LS(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function IS(n,e,t,i){const s=n.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=AS(t),l=RS(t),h=PS(t),u=CS(t),d=LS(t),f=xS(t),_=yS(r),M=s.createProgram();let p,m,E=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(lr).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(lr).join(`
`),m.length>0&&(m+=`
`)):(p=[Vh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(lr).join(`
`),m=[Vh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Di?"#define TONE_MAPPING":"",t.toneMapping!==Di?Je.tonemapping_pars_fragment:"",t.toneMapping!==Di?_S("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Je.colorspace_pars_fragment,gS("linearToOutputTexel",t.outputColorSpace),vS(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(lr).join(`
`)),o=al(o),o=Gh(o,t),o=Hh(o,t),a=al(a),a=Gh(a,t),a=Hh(a,t),o=kh(o),a=kh(a),t.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,p=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",t.glslVersion===rh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===rh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const y=E+p+o,S=E+m+a,D=Bh(s,s.VERTEX_SHADER,y),C=Bh(s,s.FRAGMENT_SHADER,S);s.attachShader(M,D),s.attachShader(M,C),t.index0AttributeName!==void 0?s.bindAttribLocation(M,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(M,0,"position"),s.linkProgram(M);function A(b){if(n.debug.checkShaderErrors){const X=s.getProgramInfoLog(M).trim(),H=s.getShaderInfoLog(D).trim(),J=s.getShaderInfoLog(C).trim();let ie=!0,G=!0;if(s.getProgramParameter(M,s.LINK_STATUS)===!1)if(ie=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,M,D,C);else{const K=zh(s,D,"vertex"),z=zh(s,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(M,s.VALIDATE_STATUS)+`

Material Name: `+b.name+`
Material Type: `+b.type+`

Program Info Log: `+X+`
`+K+`
`+z)}else X!==""?console.warn("THREE.WebGLProgram: Program Info Log:",X):(H===""||J==="")&&(G=!1);G&&(b.diagnostics={runnable:ie,programLog:X,vertexShader:{log:H,prefix:p},fragmentShader:{log:J,prefix:m}})}s.deleteShader(D),s.deleteShader(C),N=new Do(s,M),te=MS(s,M)}let N;this.getUniforms=function(){return N===void 0&&A(this),N};let te;this.getAttributes=function(){return te===void 0&&A(this),te};let x=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=s.getProgramParameter(M,dS)),x},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(M),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=fS++,this.cacheKey=e,this.usedTimes=1,this.program=M,this.vertexShader=D,this.fragmentShader=C,this}let DS=0;class US{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new NS(e),t.set(e,i)),i}}class NS{constructor(e){this.id=DS++,this.code=e,this.usedTimes=0}}function FS(n,e,t,i,s,r,o){const a=new Ff,c=new US,l=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.reverseDepthBuffer,f=s.vertexTextures;let _=s.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(x){return l.add(x),x===0?"uv":`uv${x}`}function m(x,b,X,H,J){const ie=H.fog,G=J.geometry,K=x.isMeshStandardMaterial?H.environment:null,z=(x.isMeshStandardMaterial?t:e).get(x.envMap||K),pe=z&&z.mapping===ra?z.image.height:null,me=M[x.type];x.precision!==null&&(_=s.getMaxPrecision(x.precision),_!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",_,"instead."));const _e=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,Me=_e!==void 0?_e.length:0;let Pe=0;G.morphAttributes.position!==void 0&&(Pe=1),G.morphAttributes.normal!==void 0&&(Pe=2),G.morphAttributes.color!==void 0&&(Pe=3);let ne,ue,fe,F;if(me){const nt=$n[me];ne=nt.vertexShader,ue=nt.fragmentShader}else ne=x.vertexShader,ue=x.fragmentShader,c.update(x),fe=c.getVertexShaderID(x),F=c.getFragmentShaderID(x);const re=n.getRenderTarget(),Y=J.isInstancedMesh===!0,le=J.isBatchedMesh===!0,ye=!!x.map,Q=!!x.matcap,g=!!z,T=!!x.aoMap,I=!!x.lightMap,U=!!x.bumpMap,O=!!x.normalMap,j=!!x.displacementMap,ee=!!x.emissiveMap,w=!!x.metalnessMap,v=!!x.roughnessMap,L=x.anisotropy>0,V=x.clearcoat>0,k=x.dispersion>0,W=x.iridescence>0,de=x.sheen>0,he=x.transmission>0,ve=L&&!!x.anisotropyMap,Ae=V&&!!x.clearcoatMap,ge=V&&!!x.clearcoatNormalMap,Se=V&&!!x.clearcoatRoughnessMap,Ce=W&&!!x.iridescenceMap,Ue=W&&!!x.iridescenceThicknessMap,Te=de&&!!x.sheenColorMap,He=de&&!!x.sheenRoughnessMap,Ne=!!x.specularMap,Oe=!!x.specularColorMap,B=!!x.specularIntensityMap,we=he&&!!x.transmissionMap,se=he&&!!x.thicknessMap,oe=!!x.gradientMap,Ee=!!x.alphaMap,be=x.alphaTest>0,Ve=!!x.alphaHash,tt=!!x.extensions;let pt=Di;x.toneMapped&&(re===null||re.isXRRenderTarget===!0)&&(pt=n.toneMapping);const Ze={shaderID:me,shaderType:x.type,shaderName:x.name,vertexShader:ne,fragmentShader:ue,defines:x.defines,customVertexShaderID:fe,customFragmentShaderID:F,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:_,batching:le,batchingColor:le&&J._colorsTexture!==null,instancing:Y,instancingColor:Y&&J.instanceColor!==null,instancingMorph:Y&&J.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:re===null?n.outputColorSpace:re.isXRRenderTarget===!0?re.texture.colorSpace:Bi,alphaToCoverage:!!x.alphaToCoverage,map:ye,matcap:Q,envMap:g,envMapMode:g&&z.mapping,envMapCubeUVHeight:pe,aoMap:T,lightMap:I,bumpMap:U,normalMap:O,displacementMap:f&&j,emissiveMap:ee,normalMapObjectSpace:O&&x.normalMapType===P_,normalMapTangentSpace:O&&x.normalMapType===Lf,metalnessMap:w,roughnessMap:v,anisotropy:L,anisotropyMap:ve,clearcoat:V,clearcoatMap:Ae,clearcoatNormalMap:ge,clearcoatRoughnessMap:Se,dispersion:k,iridescence:W,iridescenceMap:Ce,iridescenceThicknessMap:Ue,sheen:de,sheenColorMap:Te,sheenRoughnessMap:He,specularMap:Ne,specularColorMap:Oe,specularIntensityMap:B,transmission:he,transmissionMap:we,thicknessMap:se,gradientMap:oe,opaque:x.transparent===!1&&x.blending===Us&&x.alphaToCoverage===!1,alphaMap:Ee,alphaTest:be,alphaHash:Ve,combine:x.combine,mapUv:ye&&p(x.map.channel),aoMapUv:T&&p(x.aoMap.channel),lightMapUv:I&&p(x.lightMap.channel),bumpMapUv:U&&p(x.bumpMap.channel),normalMapUv:O&&p(x.normalMap.channel),displacementMapUv:j&&p(x.displacementMap.channel),emissiveMapUv:ee&&p(x.emissiveMap.channel),metalnessMapUv:w&&p(x.metalnessMap.channel),roughnessMapUv:v&&p(x.roughnessMap.channel),anisotropyMapUv:ve&&p(x.anisotropyMap.channel),clearcoatMapUv:Ae&&p(x.clearcoatMap.channel),clearcoatNormalMapUv:ge&&p(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Se&&p(x.clearcoatRoughnessMap.channel),iridescenceMapUv:Ce&&p(x.iridescenceMap.channel),iridescenceThicknessMapUv:Ue&&p(x.iridescenceThicknessMap.channel),sheenColorMapUv:Te&&p(x.sheenColorMap.channel),sheenRoughnessMapUv:He&&p(x.sheenRoughnessMap.channel),specularMapUv:Ne&&p(x.specularMap.channel),specularColorMapUv:Oe&&p(x.specularColorMap.channel),specularIntensityMapUv:B&&p(x.specularIntensityMap.channel),transmissionMapUv:we&&p(x.transmissionMap.channel),thicknessMapUv:se&&p(x.thicknessMap.channel),alphaMapUv:Ee&&p(x.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(O||L),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:J.isPoints===!0&&!!G.attributes.uv&&(ye||Ee),fog:!!ie,useFog:x.fog===!0,fogExp2:!!ie&&ie.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:d,skinning:J.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:Me,morphTextureStride:Pe,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:x.dithering,shadowMapEnabled:n.shadowMap.enabled&&X.length>0,shadowMapType:n.shadowMap.type,toneMapping:pt,decodeVideoTexture:ye&&x.map.isVideoTexture===!0&&ot.getTransfer(x.map.colorSpace)===_t,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===bt,flipSided:x.side===hn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:tt&&x.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(tt&&x.extensions.multiDraw===!0||le)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Ze.vertexUv1s=l.has(1),Ze.vertexUv2s=l.has(2),Ze.vertexUv3s=l.has(3),l.clear(),Ze}function E(x){const b=[];if(x.shaderID?b.push(x.shaderID):(b.push(x.customVertexShaderID),b.push(x.customFragmentShaderID)),x.defines!==void 0)for(const X in x.defines)b.push(X),b.push(x.defines[X]);return x.isRawShaderMaterial===!1&&(y(b,x),S(b,x),b.push(n.outputColorSpace)),b.push(x.customProgramCacheKey),b.join()}function y(x,b){x.push(b.precision),x.push(b.outputColorSpace),x.push(b.envMapMode),x.push(b.envMapCubeUVHeight),x.push(b.mapUv),x.push(b.alphaMapUv),x.push(b.lightMapUv),x.push(b.aoMapUv),x.push(b.bumpMapUv),x.push(b.normalMapUv),x.push(b.displacementMapUv),x.push(b.emissiveMapUv),x.push(b.metalnessMapUv),x.push(b.roughnessMapUv),x.push(b.anisotropyMapUv),x.push(b.clearcoatMapUv),x.push(b.clearcoatNormalMapUv),x.push(b.clearcoatRoughnessMapUv),x.push(b.iridescenceMapUv),x.push(b.iridescenceThicknessMapUv),x.push(b.sheenColorMapUv),x.push(b.sheenRoughnessMapUv),x.push(b.specularMapUv),x.push(b.specularColorMapUv),x.push(b.specularIntensityMapUv),x.push(b.transmissionMapUv),x.push(b.thicknessMapUv),x.push(b.combine),x.push(b.fogExp2),x.push(b.sizeAttenuation),x.push(b.morphTargetsCount),x.push(b.morphAttributeCount),x.push(b.numDirLights),x.push(b.numPointLights),x.push(b.numSpotLights),x.push(b.numSpotLightMaps),x.push(b.numHemiLights),x.push(b.numRectAreaLights),x.push(b.numDirLightShadows),x.push(b.numPointLightShadows),x.push(b.numSpotLightShadows),x.push(b.numSpotLightShadowsWithMaps),x.push(b.numLightProbes),x.push(b.shadowMapType),x.push(b.toneMapping),x.push(b.numClippingPlanes),x.push(b.numClipIntersection),x.push(b.depthPacking)}function S(x,b){a.disableAll(),b.supportsVertexTextures&&a.enable(0),b.instancing&&a.enable(1),b.instancingColor&&a.enable(2),b.instancingMorph&&a.enable(3),b.matcap&&a.enable(4),b.envMap&&a.enable(5),b.normalMapObjectSpace&&a.enable(6),b.normalMapTangentSpace&&a.enable(7),b.clearcoat&&a.enable(8),b.iridescence&&a.enable(9),b.alphaTest&&a.enable(10),b.vertexColors&&a.enable(11),b.vertexAlphas&&a.enable(12),b.vertexUv1s&&a.enable(13),b.vertexUv2s&&a.enable(14),b.vertexUv3s&&a.enable(15),b.vertexTangents&&a.enable(16),b.anisotropy&&a.enable(17),b.alphaHash&&a.enable(18),b.batching&&a.enable(19),b.dispersion&&a.enable(20),b.batchingColor&&a.enable(21),x.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reverseDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.alphaToCoverage&&a.enable(20),x.push(a.mask)}function D(x){const b=M[x.type];let X;if(b){const H=$n[b];X=Mv.clone(H.uniforms)}else X=x.uniforms;return X}function C(x,b){let X;for(let H=0,J=h.length;H<J;H++){const ie=h[H];if(ie.cacheKey===b){X=ie,++X.usedTimes;break}}return X===void 0&&(X=new IS(n,b,x,r),h.push(X)),X}function A(x){if(--x.usedTimes===0){const b=h.indexOf(x);h[b]=h[h.length-1],h.pop(),x.destroy()}}function N(x){c.remove(x)}function te(){c.dispose()}return{getParameters:m,getProgramCacheKey:E,getUniforms:D,acquireProgram:C,releaseProgram:A,releaseShaderCache:N,programs:h,dispose:te}}function OS(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,c){n.get(o)[a]=c}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function BS(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Wh(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Xh(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(u,d,f,_,M,p){let m=n[e];return m===void 0?(m={id:u.id,object:u,geometry:d,material:f,groupOrder:_,renderOrder:u.renderOrder,z:M,group:p},n[e]=m):(m.id=u.id,m.object=u,m.geometry=d,m.material=f,m.groupOrder=_,m.renderOrder=u.renderOrder,m.z=M,m.group=p),e++,m}function a(u,d,f,_,M,p){const m=o(u,d,f,_,M,p);f.transmission>0?i.push(m):f.transparent===!0?s.push(m):t.push(m)}function c(u,d,f,_,M,p){const m=o(u,d,f,_,M,p);f.transmission>0?i.unshift(m):f.transparent===!0?s.unshift(m):t.unshift(m)}function l(u,d){t.length>1&&t.sort(u||BS),i.length>1&&i.sort(d||Wh),s.length>1&&s.sort(d||Wh)}function h(){for(let u=e,d=n.length;u<d;u++){const f=n[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:a,unshift:c,finish:h,sort:l}}function zS(){let n=new WeakMap;function e(i,s){const r=n.get(i);let o;return r===void 0?(o=new Xh,n.set(i,[o])):s>=r.length?(o=new Xh,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function GS(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new q,color:new Xe};break;case"SpotLight":t={position:new q,direction:new q,color:new Xe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new q,color:new Xe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new q,skyColor:new Xe,groundColor:new Xe};break;case"RectAreaLight":t={color:new Xe,position:new q,halfWidth:new q,halfHeight:new q};break}return n[e.id]=t,t}}}function HS(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let kS=0;function VS(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function WS(n){const e=new GS,t=HS(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new q);const s=new q,r=new Mt,o=new Mt;function a(l){let h=0,u=0,d=0;for(let te=0;te<9;te++)i.probe[te].set(0,0,0);let f=0,_=0,M=0,p=0,m=0,E=0,y=0,S=0,D=0,C=0,A=0;l.sort(VS);for(let te=0,x=l.length;te<x;te++){const b=l[te],X=b.color,H=b.intensity,J=b.distance,ie=b.shadow&&b.shadow.map?b.shadow.map.texture:null;if(b.isAmbientLight)h+=X.r*H,u+=X.g*H,d+=X.b*H;else if(b.isLightProbe){for(let G=0;G<9;G++)i.probe[G].addScaledVector(b.sh.coefficients[G],H);A++}else if(b.isDirectionalLight){const G=e.get(b);if(G.color.copy(b.color).multiplyScalar(b.intensity),b.castShadow){const K=b.shadow,z=t.get(b);z.shadowIntensity=K.intensity,z.shadowBias=K.bias,z.shadowNormalBias=K.normalBias,z.shadowRadius=K.radius,z.shadowMapSize=K.mapSize,i.directionalShadow[f]=z,i.directionalShadowMap[f]=ie,i.directionalShadowMatrix[f]=b.shadow.matrix,E++}i.directional[f]=G,f++}else if(b.isSpotLight){const G=e.get(b);G.position.setFromMatrixPosition(b.matrixWorld),G.color.copy(X).multiplyScalar(H),G.distance=J,G.coneCos=Math.cos(b.angle),G.penumbraCos=Math.cos(b.angle*(1-b.penumbra)),G.decay=b.decay,i.spot[M]=G;const K=b.shadow;if(b.map&&(i.spotLightMap[D]=b.map,D++,K.updateMatrices(b),b.castShadow&&C++),i.spotLightMatrix[M]=K.matrix,b.castShadow){const z=t.get(b);z.shadowIntensity=K.intensity,z.shadowBias=K.bias,z.shadowNormalBias=K.normalBias,z.shadowRadius=K.radius,z.shadowMapSize=K.mapSize,i.spotShadow[M]=z,i.spotShadowMap[M]=ie,S++}M++}else if(b.isRectAreaLight){const G=e.get(b);G.color.copy(X).multiplyScalar(H),G.halfWidth.set(b.width*.5,0,0),G.halfHeight.set(0,b.height*.5,0),i.rectArea[p]=G,p++}else if(b.isPointLight){const G=e.get(b);if(G.color.copy(b.color).multiplyScalar(b.intensity),G.distance=b.distance,G.decay=b.decay,b.castShadow){const K=b.shadow,z=t.get(b);z.shadowIntensity=K.intensity,z.shadowBias=K.bias,z.shadowNormalBias=K.normalBias,z.shadowRadius=K.radius,z.shadowMapSize=K.mapSize,z.shadowCameraNear=K.camera.near,z.shadowCameraFar=K.camera.far,i.pointShadow[_]=z,i.pointShadowMap[_]=ie,i.pointShadowMatrix[_]=b.shadow.matrix,y++}i.point[_]=G,_++}else if(b.isHemisphereLight){const G=e.get(b);G.skyColor.copy(b.color).multiplyScalar(H),G.groundColor.copy(b.groundColor).multiplyScalar(H),i.hemi[m]=G,m++}}p>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ie.LTC_FLOAT_1,i.rectAreaLTC2=Ie.LTC_FLOAT_2):(i.rectAreaLTC1=Ie.LTC_HALF_1,i.rectAreaLTC2=Ie.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=d;const N=i.hash;(N.directionalLength!==f||N.pointLength!==_||N.spotLength!==M||N.rectAreaLength!==p||N.hemiLength!==m||N.numDirectionalShadows!==E||N.numPointShadows!==y||N.numSpotShadows!==S||N.numSpotMaps!==D||N.numLightProbes!==A)&&(i.directional.length=f,i.spot.length=M,i.rectArea.length=p,i.point.length=_,i.hemi.length=m,i.directionalShadow.length=E,i.directionalShadowMap.length=E,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=E,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=S+D-C,i.spotLightMap.length=D,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=A,N.directionalLength=f,N.pointLength=_,N.spotLength=M,N.rectAreaLength=p,N.hemiLength=m,N.numDirectionalShadows=E,N.numPointShadows=y,N.numSpotShadows=S,N.numSpotMaps=D,N.numLightProbes=A,i.version=kS++)}function c(l,h){let u=0,d=0,f=0,_=0,M=0;const p=h.matrixWorldInverse;for(let m=0,E=l.length;m<E;m++){const y=l[m];if(y.isDirectionalLight){const S=i.directional[u];S.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(p),u++}else if(y.isSpotLight){const S=i.spot[f];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(p),S.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(p),f++}else if(y.isRectAreaLight){const S=i.rectArea[_];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(p),o.identity(),r.copy(y.matrixWorld),r.premultiply(p),o.extractRotation(r),S.halfWidth.set(y.width*.5,0,0),S.halfHeight.set(0,y.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),_++}else if(y.isPointLight){const S=i.point[d];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(p),d++}else if(y.isHemisphereLight){const S=i.hemi[M];S.direction.setFromMatrixPosition(y.matrixWorld),S.direction.transformDirection(p),M++}}}return{setup:a,setupView:c,state:i}}function qh(n){const e=new WS(n),t=[],i=[];function s(h){l.camera=h,t.length=0,i.length=0}function r(h){t.push(h)}function o(h){i.push(h)}function a(){e.setup(t)}function c(h){e.setupView(t,h)}const l={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function XS(n){let e=new WeakMap;function t(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new qh(n),e.set(s,[a])):r>=o.length?(a=new qh(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}class qS extends Hr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=A_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class YS extends Hr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const jS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,$S=`uniform sampler2D shadow_pass;
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
}`;function KS(n,e,t){let i=new ql;const s=new De,r=new De,o=new ut,a=new qS({depthPacking:R_}),c=new YS,l={},h=t.maxTextureSize,u={[Ni]:hn,[hn]:Ni,[bt]:bt},d=new Pt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new De},radius:{value:4}},vertexShader:jS,fragmentShader:$S}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const _=new Ln;_.setAttribute("position",new Zn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new P(_,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=vf;let m=this.type;this.render=function(C,A,N){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||C.length===0)return;const te=n.getRenderTarget(),x=n.getActiveCubeFace(),b=n.getActiveMipmapLevel(),X=n.state;X.setBlending(Ii),X.buffers.color.setClear(1,1,1,1),X.buffers.depth.setTest(!0),X.setScissorTest(!1);const H=m!==li&&this.type===li,J=m===li&&this.type!==li;for(let ie=0,G=C.length;ie<G;ie++){const K=C[ie],z=K.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;s.copy(z.mapSize);const pe=z.getFrameExtents();if(s.multiply(pe),r.copy(z.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/pe.x),s.x=r.x*pe.x,z.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/pe.y),s.y=r.y*pe.y,z.mapSize.y=r.y)),z.map===null||H===!0||J===!0){const _e=this.type!==li?{minFilter:Rn,magFilter:Rn}:{};z.map!==null&&z.map.dispose(),z.map=new ss(s.x,s.y,_e),z.map.texture.name=K.name+".shadowMap",z.camera.updateProjectionMatrix()}n.setRenderTarget(z.map),n.clear();const me=z.getViewportCount();for(let _e=0;_e<me;_e++){const Me=z.getViewport(_e);o.set(r.x*Me.x,r.y*Me.y,r.x*Me.z,r.y*Me.w),X.viewport(o),z.updateMatrices(K,_e),i=z.getFrustum(),S(A,N,z.camera,K,this.type)}z.isPointLightShadow!==!0&&this.type===li&&E(z,N),z.needsUpdate=!1}m=this.type,p.needsUpdate=!1,n.setRenderTarget(te,x,b)};function E(C,A){const N=e.update(M);d.defines.VSM_SAMPLES!==C.blurSamples&&(d.defines.VSM_SAMPLES=C.blurSamples,f.defines.VSM_SAMPLES=C.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new ss(s.x,s.y)),d.uniforms.shadow_pass.value=C.map.texture,d.uniforms.resolution.value=C.mapSize,d.uniforms.radius.value=C.radius,n.setRenderTarget(C.mapPass),n.clear(),n.renderBufferDirect(A,null,N,d,M,null),f.uniforms.shadow_pass.value=C.mapPass.texture,f.uniforms.resolution.value=C.mapSize,f.uniforms.radius.value=C.radius,n.setRenderTarget(C.map),n.clear(),n.renderBufferDirect(A,null,N,f,M,null)}function y(C,A,N,te){let x=null;const b=N.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(b!==void 0)x=b;else if(x=N.isPointLight===!0?c:a,n.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const X=x.uuid,H=A.uuid;let J=l[X];J===void 0&&(J={},l[X]=J);let ie=J[H];ie===void 0&&(ie=x.clone(),J[H]=ie,A.addEventListener("dispose",D)),x=ie}if(x.visible=A.visible,x.wireframe=A.wireframe,te===li?x.side=A.shadowSide!==null?A.shadowSide:A.side:x.side=A.shadowSide!==null?A.shadowSide:u[A.side],x.alphaMap=A.alphaMap,x.alphaTest=A.alphaTest,x.map=A.map,x.clipShadows=A.clipShadows,x.clippingPlanes=A.clippingPlanes,x.clipIntersection=A.clipIntersection,x.displacementMap=A.displacementMap,x.displacementScale=A.displacementScale,x.displacementBias=A.displacementBias,x.wireframeLinewidth=A.wireframeLinewidth,x.linewidth=A.linewidth,N.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const X=n.properties.get(x);X.light=N}return x}function S(C,A,N,te,x){if(C.visible===!1)return;if(C.layers.test(A.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&x===li)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,C.matrixWorld);const H=e.update(C),J=C.material;if(Array.isArray(J)){const ie=H.groups;for(let G=0,K=ie.length;G<K;G++){const z=ie[G],pe=J[z.materialIndex];if(pe&&pe.visible){const me=y(C,pe,te,x);C.onBeforeShadow(n,C,A,N,H,me,z),n.renderBufferDirect(N,null,H,me,C,z),C.onAfterShadow(n,C,A,N,H,me,z)}}}else if(J.visible){const ie=y(C,J,te,x);C.onBeforeShadow(n,C,A,N,H,ie,null),n.renderBufferDirect(N,null,H,ie,C,null),C.onAfterShadow(n,C,A,N,H,ie,null)}}const X=C.children;for(let H=0,J=X.length;H<J;H++)S(X[H],A,N,te,x)}function D(C){C.target.removeEventListener("dispose",D);for(const N in l){const te=l[N],x=C.target.uuid;x in te&&(te[x].dispose(),delete te[x])}}}const ZS={[bc]:Tc,[Ac]:Cc,[Rc]:Lc,[Hs]:Pc,[Tc]:bc,[Cc]:Ac,[Lc]:Rc,[Pc]:Hs};function JS(n){function e(){let B=!1;const we=new ut;let se=null;const oe=new ut(0,0,0,0);return{setMask:function(Ee){se!==Ee&&!B&&(n.colorMask(Ee,Ee,Ee,Ee),se=Ee)},setLocked:function(Ee){B=Ee},setClear:function(Ee,be,Ve,tt,pt){pt===!0&&(Ee*=tt,be*=tt,Ve*=tt),we.set(Ee,be,Ve,tt),oe.equals(we)===!1&&(n.clearColor(Ee,be,Ve,tt),oe.copy(we))},reset:function(){B=!1,se=null,oe.set(-1,0,0,0)}}}function t(){let B=!1,we=!1,se=null,oe=null,Ee=null;return{setReversed:function(be){we=be},setTest:function(be){be?fe(n.DEPTH_TEST):F(n.DEPTH_TEST)},setMask:function(be){se!==be&&!B&&(n.depthMask(be),se=be)},setFunc:function(be){if(we&&(be=ZS[be]),oe!==be){switch(be){case bc:n.depthFunc(n.NEVER);break;case Tc:n.depthFunc(n.ALWAYS);break;case Ac:n.depthFunc(n.LESS);break;case Hs:n.depthFunc(n.LEQUAL);break;case Rc:n.depthFunc(n.EQUAL);break;case Pc:n.depthFunc(n.GEQUAL);break;case Cc:n.depthFunc(n.GREATER);break;case Lc:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}oe=be}},setLocked:function(be){B=be},setClear:function(be){Ee!==be&&(n.clearDepth(be),Ee=be)},reset:function(){B=!1,se=null,oe=null,Ee=null}}}function i(){let B=!1,we=null,se=null,oe=null,Ee=null,be=null,Ve=null,tt=null,pt=null;return{setTest:function(Ze){B||(Ze?fe(n.STENCIL_TEST):F(n.STENCIL_TEST))},setMask:function(Ze){we!==Ze&&!B&&(n.stencilMask(Ze),we=Ze)},setFunc:function(Ze,nt,mt){(se!==Ze||oe!==nt||Ee!==mt)&&(n.stencilFunc(Ze,nt,mt),se=Ze,oe=nt,Ee=mt)},setOp:function(Ze,nt,mt){(be!==Ze||Ve!==nt||tt!==mt)&&(n.stencilOp(Ze,nt,mt),be=Ze,Ve=nt,tt=mt)},setLocked:function(Ze){B=Ze},setClear:function(Ze){pt!==Ze&&(n.clearStencil(Ze),pt=Ze)},reset:function(){B=!1,we=null,se=null,oe=null,Ee=null,be=null,Ve=null,tt=null,pt=null}}}const s=new e,r=new t,o=new i,a=new WeakMap,c=new WeakMap;let l={},h={},u=new WeakMap,d=[],f=null,_=!1,M=null,p=null,m=null,E=null,y=null,S=null,D=null,C=new Xe(0,0,0),A=0,N=!1,te=null,x=null,b=null,X=null,H=null;const J=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ie=!1,G=0;const K=n.getParameter(n.VERSION);K.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(K)[1]),ie=G>=1):K.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),ie=G>=2);let z=null,pe={};const me=n.getParameter(n.SCISSOR_BOX),_e=n.getParameter(n.VIEWPORT),Me=new ut().fromArray(me),Pe=new ut().fromArray(_e);function ne(B,we,se,oe){const Ee=new Uint8Array(4),be=n.createTexture();n.bindTexture(B,be),n.texParameteri(B,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(B,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ve=0;Ve<se;Ve++)B===n.TEXTURE_3D||B===n.TEXTURE_2D_ARRAY?n.texImage3D(we,0,n.RGBA,1,1,oe,0,n.RGBA,n.UNSIGNED_BYTE,Ee):n.texImage2D(we+Ve,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Ee);return be}const ue={};ue[n.TEXTURE_2D]=ne(n.TEXTURE_2D,n.TEXTURE_2D,1),ue[n.TEXTURE_CUBE_MAP]=ne(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),ue[n.TEXTURE_2D_ARRAY]=ne(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ue[n.TEXTURE_3D]=ne(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),o.setClear(0),fe(n.DEPTH_TEST),r.setFunc(Hs),I(!1),U(Qu),fe(n.CULL_FACE),g(Ii);function fe(B){l[B]!==!0&&(n.enable(B),l[B]=!0)}function F(B){l[B]!==!1&&(n.disable(B),l[B]=!1)}function re(B,we){return h[B]!==we?(n.bindFramebuffer(B,we),h[B]=we,B===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=we),B===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=we),!0):!1}function Y(B,we){let se=d,oe=!1;if(B){se=u.get(we),se===void 0&&(se=[],u.set(we,se));const Ee=B.textures;if(se.length!==Ee.length||se[0]!==n.COLOR_ATTACHMENT0){for(let be=0,Ve=Ee.length;be<Ve;be++)se[be]=n.COLOR_ATTACHMENT0+be;se.length=Ee.length,oe=!0}}else se[0]!==n.BACK&&(se[0]=n.BACK,oe=!0);oe&&n.drawBuffers(se)}function le(B){return f!==B?(n.useProgram(B),f=B,!0):!1}const ye={[Zi]:n.FUNC_ADD,[t_]:n.FUNC_SUBTRACT,[n_]:n.FUNC_REVERSE_SUBTRACT};ye[i_]=n.MIN,ye[s_]=n.MAX;const Q={[r_]:n.ZERO,[o_]:n.ONE,[a_]:n.SRC_COLOR,[wc]:n.SRC_ALPHA,[f_]:n.SRC_ALPHA_SATURATE,[h_]:n.DST_COLOR,[l_]:n.DST_ALPHA,[c_]:n.ONE_MINUS_SRC_COLOR,[Ec]:n.ONE_MINUS_SRC_ALPHA,[d_]:n.ONE_MINUS_DST_COLOR,[u_]:n.ONE_MINUS_DST_ALPHA,[p_]:n.CONSTANT_COLOR,[m_]:n.ONE_MINUS_CONSTANT_COLOR,[g_]:n.CONSTANT_ALPHA,[__]:n.ONE_MINUS_CONSTANT_ALPHA};function g(B,we,se,oe,Ee,be,Ve,tt,pt,Ze){if(B===Ii){_===!0&&(F(n.BLEND),_=!1);return}if(_===!1&&(fe(n.BLEND),_=!0),B!==e_){if(B!==M||Ze!==N){if((p!==Zi||y!==Zi)&&(n.blendEquation(n.FUNC_ADD),p=Zi,y=Zi),Ze)switch(B){case Us:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case eh:n.blendFunc(n.ONE,n.ONE);break;case th:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case nh:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}else switch(B){case Us:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case eh:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case th:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case nh:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}m=null,E=null,S=null,D=null,C.set(0,0,0),A=0,M=B,N=Ze}return}Ee=Ee||we,be=be||se,Ve=Ve||oe,(we!==p||Ee!==y)&&(n.blendEquationSeparate(ye[we],ye[Ee]),p=we,y=Ee),(se!==m||oe!==E||be!==S||Ve!==D)&&(n.blendFuncSeparate(Q[se],Q[oe],Q[be],Q[Ve]),m=se,E=oe,S=be,D=Ve),(tt.equals(C)===!1||pt!==A)&&(n.blendColor(tt.r,tt.g,tt.b,pt),C.copy(tt),A=pt),M=B,N=!1}function T(B,we){B.side===bt?F(n.CULL_FACE):fe(n.CULL_FACE);let se=B.side===hn;we&&(se=!se),I(se),B.blending===Us&&B.transparent===!1?g(Ii):g(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),r.setFunc(B.depthFunc),r.setTest(B.depthTest),r.setMask(B.depthWrite),s.setMask(B.colorWrite);const oe=B.stencilWrite;o.setTest(oe),oe&&(o.setMask(B.stencilWriteMask),o.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),o.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),j(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?fe(n.SAMPLE_ALPHA_TO_COVERAGE):F(n.SAMPLE_ALPHA_TO_COVERAGE)}function I(B){te!==B&&(B?n.frontFace(n.CW):n.frontFace(n.CCW),te=B)}function U(B){B!==Zg?(fe(n.CULL_FACE),B!==x&&(B===Qu?n.cullFace(n.BACK):B===Jg?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):F(n.CULL_FACE),x=B}function O(B){B!==b&&(ie&&n.lineWidth(B),b=B)}function j(B,we,se){B?(fe(n.POLYGON_OFFSET_FILL),(X!==we||H!==se)&&(n.polygonOffset(we,se),X=we,H=se)):F(n.POLYGON_OFFSET_FILL)}function ee(B){B?fe(n.SCISSOR_TEST):F(n.SCISSOR_TEST)}function w(B){B===void 0&&(B=n.TEXTURE0+J-1),z!==B&&(n.activeTexture(B),z=B)}function v(B,we,se){se===void 0&&(z===null?se=n.TEXTURE0+J-1:se=z);let oe=pe[se];oe===void 0&&(oe={type:void 0,texture:void 0},pe[se]=oe),(oe.type!==B||oe.texture!==we)&&(z!==se&&(n.activeTexture(se),z=se),n.bindTexture(B,we||ue[B]),oe.type=B,oe.texture=we)}function L(){const B=pe[z];B!==void 0&&B.type!==void 0&&(n.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function V(){try{n.compressedTexImage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function k(){try{n.compressedTexImage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function W(){try{n.texSubImage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function de(){try{n.texSubImage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function he(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ve(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ae(){try{n.texStorage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ge(){try{n.texStorage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Se(){try{n.texImage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ce(){try{n.texImage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ue(B){Me.equals(B)===!1&&(n.scissor(B.x,B.y,B.z,B.w),Me.copy(B))}function Te(B){Pe.equals(B)===!1&&(n.viewport(B.x,B.y,B.z,B.w),Pe.copy(B))}function He(B,we){let se=c.get(we);se===void 0&&(se=new WeakMap,c.set(we,se));let oe=se.get(B);oe===void 0&&(oe=n.getUniformBlockIndex(we,B.name),se.set(B,oe))}function Ne(B,we){const oe=c.get(we).get(B);a.get(we)!==oe&&(n.uniformBlockBinding(we,oe,B.__bindingPointIndex),a.set(we,oe))}function Oe(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),l={},z=null,pe={},h={},u=new WeakMap,d=[],f=null,_=!1,M=null,p=null,m=null,E=null,y=null,S=null,D=null,C=new Xe(0,0,0),A=0,N=!1,te=null,x=null,b=null,X=null,H=null,Me.set(0,0,n.canvas.width,n.canvas.height),Pe.set(0,0,n.canvas.width,n.canvas.height),s.reset(),r.reset(),o.reset()}return{buffers:{color:s,depth:r,stencil:o},enable:fe,disable:F,bindFramebuffer:re,drawBuffers:Y,useProgram:le,setBlending:g,setMaterial:T,setFlipSided:I,setCullFace:U,setLineWidth:O,setPolygonOffset:j,setScissorTest:ee,activeTexture:w,bindTexture:v,unbindTexture:L,compressedTexImage2D:V,compressedTexImage3D:k,texImage2D:Se,texImage3D:Ce,updateUBOMapping:He,uniformBlockBinding:Ne,texStorage2D:Ae,texStorage3D:ge,texSubImage2D:W,texSubImage3D:de,compressedTexSubImage2D:he,compressedTexSubImage3D:ve,scissor:Ue,viewport:Te,reset:Oe}}function Yh(n,e,t,i){const s=QS(i);switch(t){case Ef:return n*e;case Tf:return n*e;case Af:return n*e*2;case Rf:return n*e/s.components*s.byteLength;case zl:return n*e/s.components*s.byteLength;case Pf:return n*e*2/s.components*s.byteLength;case Gl:return n*e*2/s.components*s.byteLength;case bf:return n*e*3/s.components*s.byteLength;case Pn:return n*e*4/s.components*s.byteLength;case Hl:return n*e*4/s.components*s.byteLength;case Ao:case Ro:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Po:case Co:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Fc:case Bc:return Math.max(n,16)*Math.max(e,8)/4;case Nc:case Oc:return Math.max(n,8)*Math.max(e,8)/2;case zc:case Gc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Hc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case kc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Vc:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Wc:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Xc:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case qc:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Yc:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case jc:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case $c:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Kc:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Zc:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Jc:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Qc:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case el:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case tl:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Lo:case nl:case il:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Cf:case sl:return Math.ceil(n/4)*Math.ceil(e/4)*8;case rl:case ol:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function QS(n){switch(n){case gi:case Mf:return{byteLength:1,components:1};case Pr:case Sf:case Br:return{byteLength:2,components:1};case Ol:case Bl:return{byteLength:2,components:4};case is:case Fl:case di:return{byteLength:4,components:1};case wf:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function ew(n,e,t,i,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new De,h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(w,v){return f?new OffscreenCanvas(w,v):Lr("canvas")}function M(w,v,L){let V=1;const k=ee(w);if((k.width>L||k.height>L)&&(V=L/Math.max(k.width,k.height)),V<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const W=Math.floor(V*k.width),de=Math.floor(V*k.height);u===void 0&&(u=_(W,de));const he=v?_(W,de):u;return he.width=W,he.height=de,he.getContext("2d").drawImage(w,0,0,W,de),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+k.width+"x"+k.height+") to ("+W+"x"+de+")."),he}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+k.width+"x"+k.height+")."),w;return w}function p(w){return w.generateMipmaps&&w.minFilter!==Rn&&w.minFilter!==Bn}function m(w){n.generateMipmap(w)}function E(w,v,L,V,k=!1){if(w!==null){if(n[w]!==void 0)return n[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let W=v;if(v===n.RED&&(L===n.FLOAT&&(W=n.R32F),L===n.HALF_FLOAT&&(W=n.R16F),L===n.UNSIGNED_BYTE&&(W=n.R8)),v===n.RED_INTEGER&&(L===n.UNSIGNED_BYTE&&(W=n.R8UI),L===n.UNSIGNED_SHORT&&(W=n.R16UI),L===n.UNSIGNED_INT&&(W=n.R32UI),L===n.BYTE&&(W=n.R8I),L===n.SHORT&&(W=n.R16I),L===n.INT&&(W=n.R32I)),v===n.RG&&(L===n.FLOAT&&(W=n.RG32F),L===n.HALF_FLOAT&&(W=n.RG16F),L===n.UNSIGNED_BYTE&&(W=n.RG8)),v===n.RG_INTEGER&&(L===n.UNSIGNED_BYTE&&(W=n.RG8UI),L===n.UNSIGNED_SHORT&&(W=n.RG16UI),L===n.UNSIGNED_INT&&(W=n.RG32UI),L===n.BYTE&&(W=n.RG8I),L===n.SHORT&&(W=n.RG16I),L===n.INT&&(W=n.RG32I)),v===n.RGB_INTEGER&&(L===n.UNSIGNED_BYTE&&(W=n.RGB8UI),L===n.UNSIGNED_SHORT&&(W=n.RGB16UI),L===n.UNSIGNED_INT&&(W=n.RGB32UI),L===n.BYTE&&(W=n.RGB8I),L===n.SHORT&&(W=n.RGB16I),L===n.INT&&(W=n.RGB32I)),v===n.RGBA_INTEGER&&(L===n.UNSIGNED_BYTE&&(W=n.RGBA8UI),L===n.UNSIGNED_SHORT&&(W=n.RGBA16UI),L===n.UNSIGNED_INT&&(W=n.RGBA32UI),L===n.BYTE&&(W=n.RGBA8I),L===n.SHORT&&(W=n.RGBA16I),L===n.INT&&(W=n.RGBA32I)),v===n.RGB&&L===n.UNSIGNED_INT_5_9_9_9_REV&&(W=n.RGB9_E5),v===n.RGBA){const de=k?Go:ot.getTransfer(V);L===n.FLOAT&&(W=n.RGBA32F),L===n.HALF_FLOAT&&(W=n.RGBA16F),L===n.UNSIGNED_BYTE&&(W=de===_t?n.SRGB8_ALPHA8:n.RGBA8),L===n.UNSIGNED_SHORT_4_4_4_4&&(W=n.RGBA4),L===n.UNSIGNED_SHORT_5_5_5_1&&(W=n.RGB5_A1)}return(W===n.R16F||W===n.R32F||W===n.RG16F||W===n.RG32F||W===n.RGBA16F||W===n.RGBA32F)&&e.get("EXT_color_buffer_float"),W}function y(w,v){let L;return w?v===null||v===is||v===Ws?L=n.DEPTH24_STENCIL8:v===di?L=n.DEPTH32F_STENCIL8:v===Pr&&(L=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===is||v===Ws?L=n.DEPTH_COMPONENT24:v===di?L=n.DEPTH_COMPONENT32F:v===Pr&&(L=n.DEPTH_COMPONENT16),L}function S(w,v){return p(w)===!0||w.isFramebufferTexture&&w.minFilter!==Rn&&w.minFilter!==Bn?Math.log2(Math.max(v.width,v.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?v.mipmaps.length:1}function D(w){const v=w.target;v.removeEventListener("dispose",D),A(v),v.isVideoTexture&&h.delete(v)}function C(w){const v=w.target;v.removeEventListener("dispose",C),te(v)}function A(w){const v=i.get(w);if(v.__webglInit===void 0)return;const L=w.source,V=d.get(L);if(V){const k=V[v.__cacheKey];k.usedTimes--,k.usedTimes===0&&N(w),Object.keys(V).length===0&&d.delete(L)}i.remove(w)}function N(w){const v=i.get(w);n.deleteTexture(v.__webglTexture);const L=w.source,V=d.get(L);delete V[v.__cacheKey],o.memory.textures--}function te(w){const v=i.get(w);if(w.depthTexture&&w.depthTexture.dispose(),w.isWebGLCubeRenderTarget)for(let V=0;V<6;V++){if(Array.isArray(v.__webglFramebuffer[V]))for(let k=0;k<v.__webglFramebuffer[V].length;k++)n.deleteFramebuffer(v.__webglFramebuffer[V][k]);else n.deleteFramebuffer(v.__webglFramebuffer[V]);v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer[V])}else{if(Array.isArray(v.__webglFramebuffer))for(let V=0;V<v.__webglFramebuffer.length;V++)n.deleteFramebuffer(v.__webglFramebuffer[V]);else n.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&n.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let V=0;V<v.__webglColorRenderbuffer.length;V++)v.__webglColorRenderbuffer[V]&&n.deleteRenderbuffer(v.__webglColorRenderbuffer[V]);v.__webglDepthRenderbuffer&&n.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const L=w.textures;for(let V=0,k=L.length;V<k;V++){const W=i.get(L[V]);W.__webglTexture&&(n.deleteTexture(W.__webglTexture),o.memory.textures--),i.remove(L[V])}i.remove(w)}let x=0;function b(){x=0}function X(){const w=x;return w>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+s.maxTextures),x+=1,w}function H(w){const v=[];return v.push(w.wrapS),v.push(w.wrapT),v.push(w.wrapR||0),v.push(w.magFilter),v.push(w.minFilter),v.push(w.anisotropy),v.push(w.internalFormat),v.push(w.format),v.push(w.type),v.push(w.generateMipmaps),v.push(w.premultiplyAlpha),v.push(w.flipY),v.push(w.unpackAlignment),v.push(w.colorSpace),v.join()}function J(w,v){const L=i.get(w);if(w.isVideoTexture&&O(w),w.isRenderTargetTexture===!1&&w.version>0&&L.__version!==w.version){const V=w.image;if(V===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(V.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Pe(L,w,v);return}}t.bindTexture(n.TEXTURE_2D,L.__webglTexture,n.TEXTURE0+v)}function ie(w,v){const L=i.get(w);if(w.version>0&&L.__version!==w.version){Pe(L,w,v);return}t.bindTexture(n.TEXTURE_2D_ARRAY,L.__webglTexture,n.TEXTURE0+v)}function G(w,v){const L=i.get(w);if(w.version>0&&L.__version!==w.version){Pe(L,w,v);return}t.bindTexture(n.TEXTURE_3D,L.__webglTexture,n.TEXTURE0+v)}function K(w,v){const L=i.get(w);if(w.version>0&&L.__version!==w.version){ne(L,w,v);return}t.bindTexture(n.TEXTURE_CUBE_MAP,L.__webglTexture,n.TEXTURE0+v)}const z={[Vn]:n.REPEAT,[Qi]:n.CLAMP_TO_EDGE,[Uc]:n.MIRRORED_REPEAT},pe={[Rn]:n.NEAREST,[T_]:n.NEAREST_MIPMAP_NEAREST,[Zr]:n.NEAREST_MIPMAP_LINEAR,[Bn]:n.LINEAR,[Aa]:n.LINEAR_MIPMAP_NEAREST,[Li]:n.LINEAR_MIPMAP_LINEAR},me={[C_]:n.NEVER,[F_]:n.ALWAYS,[L_]:n.LESS,[If]:n.LEQUAL,[I_]:n.EQUAL,[N_]:n.GEQUAL,[D_]:n.GREATER,[U_]:n.NOTEQUAL};function _e(w,v){if(v.type===di&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===Bn||v.magFilter===Aa||v.magFilter===Zr||v.magFilter===Li||v.minFilter===Bn||v.minFilter===Aa||v.minFilter===Zr||v.minFilter===Li)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(w,n.TEXTURE_WRAP_S,z[v.wrapS]),n.texParameteri(w,n.TEXTURE_WRAP_T,z[v.wrapT]),(w===n.TEXTURE_3D||w===n.TEXTURE_2D_ARRAY)&&n.texParameteri(w,n.TEXTURE_WRAP_R,z[v.wrapR]),n.texParameteri(w,n.TEXTURE_MAG_FILTER,pe[v.magFilter]),n.texParameteri(w,n.TEXTURE_MIN_FILTER,pe[v.minFilter]),v.compareFunction&&(n.texParameteri(w,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(w,n.TEXTURE_COMPARE_FUNC,me[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Rn||v.minFilter!==Zr&&v.minFilter!==Li||v.type===di&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||i.get(v).__currentAnisotropy){const L=e.get("EXT_texture_filter_anisotropic");n.texParameterf(w,L.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy}}}function Me(w,v){let L=!1;w.__webglInit===void 0&&(w.__webglInit=!0,v.addEventListener("dispose",D));const V=v.source;let k=d.get(V);k===void 0&&(k={},d.set(V,k));const W=H(v);if(W!==w.__cacheKey){k[W]===void 0&&(k[W]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,L=!0),k[W].usedTimes++;const de=k[w.__cacheKey];de!==void 0&&(k[w.__cacheKey].usedTimes--,de.usedTimes===0&&N(v)),w.__cacheKey=W,w.__webglTexture=k[W].texture}return L}function Pe(w,v,L){let V=n.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(V=n.TEXTURE_2D_ARRAY),v.isData3DTexture&&(V=n.TEXTURE_3D);const k=Me(w,v),W=v.source;t.bindTexture(V,w.__webglTexture,n.TEXTURE0+L);const de=i.get(W);if(W.version!==de.__version||k===!0){t.activeTexture(n.TEXTURE0+L);const he=ot.getPrimaries(ot.workingColorSpace),ve=v.colorSpace===Ci?null:ot.getPrimaries(v.colorSpace),Ae=v.colorSpace===Ci||he===ve?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ae);let ge=M(v.image,!1,s.maxTextureSize);ge=j(v,ge);const Se=r.convert(v.format,v.colorSpace),Ce=r.convert(v.type);let Ue=E(v.internalFormat,Se,Ce,v.colorSpace,v.isVideoTexture);_e(V,v);let Te;const He=v.mipmaps,Ne=v.isVideoTexture!==!0,Oe=de.__version===void 0||k===!0,B=W.dataReady,we=S(v,ge);if(v.isDepthTexture)Ue=y(v.format===Xs,v.type),Oe&&(Ne?t.texStorage2D(n.TEXTURE_2D,1,Ue,ge.width,ge.height):t.texImage2D(n.TEXTURE_2D,0,Ue,ge.width,ge.height,0,Se,Ce,null));else if(v.isDataTexture)if(He.length>0){Ne&&Oe&&t.texStorage2D(n.TEXTURE_2D,we,Ue,He[0].width,He[0].height);for(let se=0,oe=He.length;se<oe;se++)Te=He[se],Ne?B&&t.texSubImage2D(n.TEXTURE_2D,se,0,0,Te.width,Te.height,Se,Ce,Te.data):t.texImage2D(n.TEXTURE_2D,se,Ue,Te.width,Te.height,0,Se,Ce,Te.data);v.generateMipmaps=!1}else Ne?(Oe&&t.texStorage2D(n.TEXTURE_2D,we,Ue,ge.width,ge.height),B&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ge.width,ge.height,Se,Ce,ge.data)):t.texImage2D(n.TEXTURE_2D,0,Ue,ge.width,ge.height,0,Se,Ce,ge.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Ne&&Oe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,we,Ue,He[0].width,He[0].height,ge.depth);for(let se=0,oe=He.length;se<oe;se++)if(Te=He[se],v.format!==Pn)if(Se!==null)if(Ne){if(B)if(v.layerUpdates.size>0){const Ee=Yh(Te.width,Te.height,v.format,v.type);for(const be of v.layerUpdates){const Ve=Te.data.subarray(be*Ee/Te.data.BYTES_PER_ELEMENT,(be+1)*Ee/Te.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,se,0,0,be,Te.width,Te.height,1,Se,Ve,0,0)}v.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,se,0,0,0,Te.width,Te.height,ge.depth,Se,Te.data,0,0)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,se,Ue,Te.width,Te.height,ge.depth,0,Te.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ne?B&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,se,0,0,0,Te.width,Te.height,ge.depth,Se,Ce,Te.data):t.texImage3D(n.TEXTURE_2D_ARRAY,se,Ue,Te.width,Te.height,ge.depth,0,Se,Ce,Te.data)}else{Ne&&Oe&&t.texStorage2D(n.TEXTURE_2D,we,Ue,He[0].width,He[0].height);for(let se=0,oe=He.length;se<oe;se++)Te=He[se],v.format!==Pn?Se!==null?Ne?B&&t.compressedTexSubImage2D(n.TEXTURE_2D,se,0,0,Te.width,Te.height,Se,Te.data):t.compressedTexImage2D(n.TEXTURE_2D,se,Ue,Te.width,Te.height,0,Te.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ne?B&&t.texSubImage2D(n.TEXTURE_2D,se,0,0,Te.width,Te.height,Se,Ce,Te.data):t.texImage2D(n.TEXTURE_2D,se,Ue,Te.width,Te.height,0,Se,Ce,Te.data)}else if(v.isDataArrayTexture)if(Ne){if(Oe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,we,Ue,ge.width,ge.height,ge.depth),B)if(v.layerUpdates.size>0){const se=Yh(ge.width,ge.height,v.format,v.type);for(const oe of v.layerUpdates){const Ee=ge.data.subarray(oe*se/ge.data.BYTES_PER_ELEMENT,(oe+1)*se/ge.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,oe,ge.width,ge.height,1,Se,Ce,Ee)}v.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ge.width,ge.height,ge.depth,Se,Ce,ge.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ue,ge.width,ge.height,ge.depth,0,Se,Ce,ge.data);else if(v.isData3DTexture)Ne?(Oe&&t.texStorage3D(n.TEXTURE_3D,we,Ue,ge.width,ge.height,ge.depth),B&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ge.width,ge.height,ge.depth,Se,Ce,ge.data)):t.texImage3D(n.TEXTURE_3D,0,Ue,ge.width,ge.height,ge.depth,0,Se,Ce,ge.data);else if(v.isFramebufferTexture){if(Oe)if(Ne)t.texStorage2D(n.TEXTURE_2D,we,Ue,ge.width,ge.height);else{let se=ge.width,oe=ge.height;for(let Ee=0;Ee<we;Ee++)t.texImage2D(n.TEXTURE_2D,Ee,Ue,se,oe,0,Se,Ce,null),se>>=1,oe>>=1}}else if(He.length>0){if(Ne&&Oe){const se=ee(He[0]);t.texStorage2D(n.TEXTURE_2D,we,Ue,se.width,se.height)}for(let se=0,oe=He.length;se<oe;se++)Te=He[se],Ne?B&&t.texSubImage2D(n.TEXTURE_2D,se,0,0,Se,Ce,Te):t.texImage2D(n.TEXTURE_2D,se,Ue,Se,Ce,Te);v.generateMipmaps=!1}else if(Ne){if(Oe){const se=ee(ge);t.texStorage2D(n.TEXTURE_2D,we,Ue,se.width,se.height)}B&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Se,Ce,ge)}else t.texImage2D(n.TEXTURE_2D,0,Ue,Se,Ce,ge);p(v)&&m(V),de.__version=W.version,v.onUpdate&&v.onUpdate(v)}w.__version=v.version}function ne(w,v,L){if(v.image.length!==6)return;const V=Me(w,v),k=v.source;t.bindTexture(n.TEXTURE_CUBE_MAP,w.__webglTexture,n.TEXTURE0+L);const W=i.get(k);if(k.version!==W.__version||V===!0){t.activeTexture(n.TEXTURE0+L);const de=ot.getPrimaries(ot.workingColorSpace),he=v.colorSpace===Ci?null:ot.getPrimaries(v.colorSpace),ve=v.colorSpace===Ci||de===he?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve);const Ae=v.isCompressedTexture||v.image[0].isCompressedTexture,ge=v.image[0]&&v.image[0].isDataTexture,Se=[];for(let oe=0;oe<6;oe++)!Ae&&!ge?Se[oe]=M(v.image[oe],!0,s.maxCubemapSize):Se[oe]=ge?v.image[oe].image:v.image[oe],Se[oe]=j(v,Se[oe]);const Ce=Se[0],Ue=r.convert(v.format,v.colorSpace),Te=r.convert(v.type),He=E(v.internalFormat,Ue,Te,v.colorSpace),Ne=v.isVideoTexture!==!0,Oe=W.__version===void 0||V===!0,B=k.dataReady;let we=S(v,Ce);_e(n.TEXTURE_CUBE_MAP,v);let se;if(Ae){Ne&&Oe&&t.texStorage2D(n.TEXTURE_CUBE_MAP,we,He,Ce.width,Ce.height);for(let oe=0;oe<6;oe++){se=Se[oe].mipmaps;for(let Ee=0;Ee<se.length;Ee++){const be=se[Ee];v.format!==Pn?Ue!==null?Ne?B&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ee,0,0,be.width,be.height,Ue,be.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ee,He,be.width,be.height,0,be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ne?B&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ee,0,0,be.width,be.height,Ue,Te,be.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ee,He,be.width,be.height,0,Ue,Te,be.data)}}}else{if(se=v.mipmaps,Ne&&Oe){se.length>0&&we++;const oe=ee(Se[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,we,He,oe.width,oe.height)}for(let oe=0;oe<6;oe++)if(ge){Ne?B&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,Se[oe].width,Se[oe].height,Ue,Te,Se[oe].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,He,Se[oe].width,Se[oe].height,0,Ue,Te,Se[oe].data);for(let Ee=0;Ee<se.length;Ee++){const Ve=se[Ee].image[oe].image;Ne?B&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ee+1,0,0,Ve.width,Ve.height,Ue,Te,Ve.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ee+1,He,Ve.width,Ve.height,0,Ue,Te,Ve.data)}}else{Ne?B&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,Ue,Te,Se[oe]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,He,Ue,Te,Se[oe]);for(let Ee=0;Ee<se.length;Ee++){const be=se[Ee];Ne?B&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ee+1,0,0,Ue,Te,be.image[oe]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ee+1,He,Ue,Te,be.image[oe])}}}p(v)&&m(n.TEXTURE_CUBE_MAP),W.__version=k.version,v.onUpdate&&v.onUpdate(v)}w.__version=v.version}function ue(w,v,L,V,k,W){const de=r.convert(L.format,L.colorSpace),he=r.convert(L.type),ve=E(L.internalFormat,de,he,L.colorSpace);if(!i.get(v).__hasExternalTextures){const ge=Math.max(1,v.width>>W),Se=Math.max(1,v.height>>W);k===n.TEXTURE_3D||k===n.TEXTURE_2D_ARRAY?t.texImage3D(k,W,ve,ge,Se,v.depth,0,de,he,null):t.texImage2D(k,W,ve,ge,Se,0,de,he,null)}t.bindFramebuffer(n.FRAMEBUFFER,w),U(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,V,k,i.get(L).__webglTexture,0,I(v)):(k===n.TEXTURE_2D||k>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&k<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,V,k,i.get(L).__webglTexture,W),t.bindFramebuffer(n.FRAMEBUFFER,null)}function fe(w,v,L){if(n.bindRenderbuffer(n.RENDERBUFFER,w),v.depthBuffer){const V=v.depthTexture,k=V&&V.isDepthTexture?V.type:null,W=y(v.stencilBuffer,k),de=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,he=I(v);U(v)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,he,W,v.width,v.height):L?n.renderbufferStorageMultisample(n.RENDERBUFFER,he,W,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,W,v.width,v.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,de,n.RENDERBUFFER,w)}else{const V=v.textures;for(let k=0;k<V.length;k++){const W=V[k],de=r.convert(W.format,W.colorSpace),he=r.convert(W.type),ve=E(W.internalFormat,de,he,W.colorSpace),Ae=I(v);L&&U(v)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ae,ve,v.width,v.height):U(v)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ae,ve,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,ve,v.width,v.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function F(w,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,w),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(v.depthTexture).__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),J(v.depthTexture,0);const V=i.get(v.depthTexture).__webglTexture,k=I(v);if(v.depthTexture.format===Ns)U(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,V,0,k):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,V,0);else if(v.depthTexture.format===Xs)U(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,V,0,k):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,V,0);else throw new Error("Unknown depthTexture format")}function re(w){const v=i.get(w),L=w.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==w.depthTexture){const V=w.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),V){const k=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,V.removeEventListener("dispose",k)};V.addEventListener("dispose",k),v.__depthDisposeCallback=k}v.__boundDepthTexture=V}if(w.depthTexture&&!v.__autoAllocateDepthBuffer){if(L)throw new Error("target.depthTexture not supported in Cube render targets");F(v.__webglFramebuffer,w)}else if(L){v.__webglDepthbuffer=[];for(let V=0;V<6;V++)if(t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[V]),v.__webglDepthbuffer[V]===void 0)v.__webglDepthbuffer[V]=n.createRenderbuffer(),fe(v.__webglDepthbuffer[V],w,!1);else{const k=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,W=v.__webglDepthbuffer[V];n.bindRenderbuffer(n.RENDERBUFFER,W),n.framebufferRenderbuffer(n.FRAMEBUFFER,k,n.RENDERBUFFER,W)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=n.createRenderbuffer(),fe(v.__webglDepthbuffer,w,!1);else{const V=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,k=v.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,k),n.framebufferRenderbuffer(n.FRAMEBUFFER,V,n.RENDERBUFFER,k)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Y(w,v,L){const V=i.get(w);v!==void 0&&ue(V.__webglFramebuffer,w,w.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),L!==void 0&&re(w)}function le(w){const v=w.texture,L=i.get(w),V=i.get(v);w.addEventListener("dispose",C);const k=w.textures,W=w.isWebGLCubeRenderTarget===!0,de=k.length>1;if(de||(V.__webglTexture===void 0&&(V.__webglTexture=n.createTexture()),V.__version=v.version,o.memory.textures++),W){L.__webglFramebuffer=[];for(let he=0;he<6;he++)if(v.mipmaps&&v.mipmaps.length>0){L.__webglFramebuffer[he]=[];for(let ve=0;ve<v.mipmaps.length;ve++)L.__webglFramebuffer[he][ve]=n.createFramebuffer()}else L.__webglFramebuffer[he]=n.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){L.__webglFramebuffer=[];for(let he=0;he<v.mipmaps.length;he++)L.__webglFramebuffer[he]=n.createFramebuffer()}else L.__webglFramebuffer=n.createFramebuffer();if(de)for(let he=0,ve=k.length;he<ve;he++){const Ae=i.get(k[he]);Ae.__webglTexture===void 0&&(Ae.__webglTexture=n.createTexture(),o.memory.textures++)}if(w.samples>0&&U(w)===!1){L.__webglMultisampledFramebuffer=n.createFramebuffer(),L.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,L.__webglMultisampledFramebuffer);for(let he=0;he<k.length;he++){const ve=k[he];L.__webglColorRenderbuffer[he]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,L.__webglColorRenderbuffer[he]);const Ae=r.convert(ve.format,ve.colorSpace),ge=r.convert(ve.type),Se=E(ve.internalFormat,Ae,ge,ve.colorSpace,w.isXRRenderTarget===!0),Ce=I(w);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ce,Se,w.width,w.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+he,n.RENDERBUFFER,L.__webglColorRenderbuffer[he])}n.bindRenderbuffer(n.RENDERBUFFER,null),w.depthBuffer&&(L.__webglDepthRenderbuffer=n.createRenderbuffer(),fe(L.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(W){t.bindTexture(n.TEXTURE_CUBE_MAP,V.__webglTexture),_e(n.TEXTURE_CUBE_MAP,v);for(let he=0;he<6;he++)if(v.mipmaps&&v.mipmaps.length>0)for(let ve=0;ve<v.mipmaps.length;ve++)ue(L.__webglFramebuffer[he][ve],w,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+he,ve);else ue(L.__webglFramebuffer[he],w,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+he,0);p(v)&&m(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(de){for(let he=0,ve=k.length;he<ve;he++){const Ae=k[he],ge=i.get(Ae);t.bindTexture(n.TEXTURE_2D,ge.__webglTexture),_e(n.TEXTURE_2D,Ae),ue(L.__webglFramebuffer,w,Ae,n.COLOR_ATTACHMENT0+he,n.TEXTURE_2D,0),p(Ae)&&m(n.TEXTURE_2D)}t.unbindTexture()}else{let he=n.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(he=w.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(he,V.__webglTexture),_e(he,v),v.mipmaps&&v.mipmaps.length>0)for(let ve=0;ve<v.mipmaps.length;ve++)ue(L.__webglFramebuffer[ve],w,v,n.COLOR_ATTACHMENT0,he,ve);else ue(L.__webglFramebuffer,w,v,n.COLOR_ATTACHMENT0,he,0);p(v)&&m(he),t.unbindTexture()}w.depthBuffer&&re(w)}function ye(w){const v=w.textures;for(let L=0,V=v.length;L<V;L++){const k=v[L];if(p(k)){const W=w.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,de=i.get(k).__webglTexture;t.bindTexture(W,de),m(W),t.unbindTexture()}}}const Q=[],g=[];function T(w){if(w.samples>0){if(U(w)===!1){const v=w.textures,L=w.width,V=w.height;let k=n.COLOR_BUFFER_BIT;const W=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,de=i.get(w),he=v.length>1;if(he)for(let ve=0;ve<v.length;ve++)t.bindFramebuffer(n.FRAMEBUFFER,de.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ve,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,de.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ve,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,de.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,de.__webglFramebuffer);for(let ve=0;ve<v.length;ve++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(k|=n.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(k|=n.STENCIL_BUFFER_BIT)),he){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,de.__webglColorRenderbuffer[ve]);const Ae=i.get(v[ve]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Ae,0)}n.blitFramebuffer(0,0,L,V,0,0,L,V,k,n.NEAREST),c===!0&&(Q.length=0,g.length=0,Q.push(n.COLOR_ATTACHMENT0+ve),w.depthBuffer&&w.resolveDepthBuffer===!1&&(Q.push(W),g.push(W),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,g)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Q))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),he)for(let ve=0;ve<v.length;ve++){t.bindFramebuffer(n.FRAMEBUFFER,de.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ve,n.RENDERBUFFER,de.__webglColorRenderbuffer[ve]);const Ae=i.get(v[ve]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,de.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ve,n.TEXTURE_2D,Ae,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,de.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&c){const v=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[v])}}}function I(w){return Math.min(s.maxSamples,w.samples)}function U(w){const v=i.get(w);return w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function O(w){const v=o.render.frame;h.get(w)!==v&&(h.set(w,v),w.update())}function j(w,v){const L=w.colorSpace,V=w.format,k=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||L!==Bi&&L!==Ci&&(ot.getTransfer(L)===_t?(V!==Pn||k!==gi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",L)),v}function ee(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(l.width=w.naturalWidth||w.width,l.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(l.width=w.displayWidth,l.height=w.displayHeight):(l.width=w.width,l.height=w.height),l}this.allocateTextureUnit=X,this.resetTextureUnits=b,this.setTexture2D=J,this.setTexture2DArray=ie,this.setTexture3D=G,this.setTextureCube=K,this.rebindTextures=Y,this.setupRenderTarget=le,this.updateRenderTargetMipmap=ye,this.updateMultisampleRenderTarget=T,this.setupDepthRenderbuffer=re,this.setupFrameBufferTexture=ue,this.useMultisampledRTT=U}function tw(n,e){function t(i,s=Ci){let r;const o=ot.getTransfer(s);if(i===gi)return n.UNSIGNED_BYTE;if(i===Ol)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Bl)return n.UNSIGNED_SHORT_5_5_5_1;if(i===wf)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Mf)return n.BYTE;if(i===Sf)return n.SHORT;if(i===Pr)return n.UNSIGNED_SHORT;if(i===Fl)return n.INT;if(i===is)return n.UNSIGNED_INT;if(i===di)return n.FLOAT;if(i===Br)return n.HALF_FLOAT;if(i===Ef)return n.ALPHA;if(i===bf)return n.RGB;if(i===Pn)return n.RGBA;if(i===Tf)return n.LUMINANCE;if(i===Af)return n.LUMINANCE_ALPHA;if(i===Ns)return n.DEPTH_COMPONENT;if(i===Xs)return n.DEPTH_STENCIL;if(i===Rf)return n.RED;if(i===zl)return n.RED_INTEGER;if(i===Pf)return n.RG;if(i===Gl)return n.RG_INTEGER;if(i===Hl)return n.RGBA_INTEGER;if(i===Ao||i===Ro||i===Po||i===Co)if(o===_t)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Ao)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ro)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Po)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Co)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Ao)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ro)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Po)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Co)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Nc||i===Fc||i===Oc||i===Bc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Nc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Fc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Oc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Bc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===zc||i===Gc||i===Hc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===zc||i===Gc)return o===_t?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Hc)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===kc||i===Vc||i===Wc||i===Xc||i===qc||i===Yc||i===jc||i===$c||i===Kc||i===Zc||i===Jc||i===Qc||i===el||i===tl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===kc)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Vc)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Wc)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Xc)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===qc)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Yc)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===jc)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===$c)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Kc)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Zc)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Jc)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Qc)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===el)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===tl)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Lo||i===nl||i===il)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Lo)return o===_t?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===nl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===il)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Cf||i===sl||i===rl||i===ol)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Lo)return r.COMPRESSED_RED_RGTC1_EXT;if(i===sl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===rl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===ol)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ws?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}class nw extends vt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class $e extends Jt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const iw={type:"move"};class tc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new $e,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new $e,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new $e,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new q),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const M of e.hand.values()){const p=t.getJointPose(M,i),m=this._getHandJoint(l,M);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,_=.005;l.inputState.pinching&&d>f+_?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=f-_&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(iw)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new $e;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const sw=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,rw=`
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

}`;class ow{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const s=new cn,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Pt({vertexShader:sw,fragmentShader:rw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new P(new aa(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class aw extends js{constructor(e,t){super();const i=this;let s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,d=null,f=null,_=null;const M=new ow,p=t.getContextAttributes();let m=null,E=null;const y=[],S=[],D=new De;let C=null;const A=new vt;A.layers.enable(1),A.viewport=new ut;const N=new vt;N.layers.enable(2),N.viewport=new ut;const te=[A,N],x=new nw;x.layers.enable(1),x.layers.enable(2);let b=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ne){let ue=y[ne];return ue===void 0&&(ue=new tc,y[ne]=ue),ue.getTargetRaySpace()},this.getControllerGrip=function(ne){let ue=y[ne];return ue===void 0&&(ue=new tc,y[ne]=ue),ue.getGripSpace()},this.getHand=function(ne){let ue=y[ne];return ue===void 0&&(ue=new tc,y[ne]=ue),ue.getHandSpace()};function H(ne){const ue=S.indexOf(ne.inputSource);if(ue===-1)return;const fe=y[ue];fe!==void 0&&(fe.update(ne.inputSource,ne.frame,l||o),fe.dispatchEvent({type:ne.type,data:ne.inputSource}))}function J(){s.removeEventListener("select",H),s.removeEventListener("selectstart",H),s.removeEventListener("selectend",H),s.removeEventListener("squeeze",H),s.removeEventListener("squeezestart",H),s.removeEventListener("squeezeend",H),s.removeEventListener("end",J),s.removeEventListener("inputsourceschange",ie);for(let ne=0;ne<y.length;ne++){const ue=S[ne];ue!==null&&(S[ne]=null,y[ne].disconnect(ue))}b=null,X=null,M.reset(),e.setRenderTarget(m),f=null,d=null,u=null,s=null,E=null,Pe.stop(),i.isPresenting=!1,e.setPixelRatio(C),e.setSize(D.width,D.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ne){r=ne,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ne){a=ne,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(ne){l=ne},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(ne){if(s=ne,s!==null){if(m=e.getRenderTarget(),s.addEventListener("select",H),s.addEventListener("selectstart",H),s.addEventListener("selectend",H),s.addEventListener("squeeze",H),s.addEventListener("squeezestart",H),s.addEventListener("squeezeend",H),s.addEventListener("end",J),s.addEventListener("inputsourceschange",ie),p.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(D),s.renderState.layers===void 0){const ue={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,ue),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),E=new ss(f.framebufferWidth,f.framebufferHeight,{format:Pn,type:gi,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let ue=null,fe=null,F=null;p.depth&&(F=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ue=p.stencil?Xs:Ns,fe=p.stencil?Ws:is);const re={colorFormat:t.RGBA8,depthFormat:F,scaleFactor:r};u=new XRWebGLBinding(s,t),d=u.createProjectionLayer(re),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),E=new ss(d.textureWidth,d.textureHeight,{format:Pn,type:gi,depthTexture:new qf(d.textureWidth,d.textureHeight,fe,void 0,void 0,void 0,void 0,void 0,void 0,ue),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),Pe.setContext(s),Pe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function ie(ne){for(let ue=0;ue<ne.removed.length;ue++){const fe=ne.removed[ue],F=S.indexOf(fe);F>=0&&(S[F]=null,y[F].disconnect(fe))}for(let ue=0;ue<ne.added.length;ue++){const fe=ne.added[ue];let F=S.indexOf(fe);if(F===-1){for(let Y=0;Y<y.length;Y++)if(Y>=S.length){S.push(fe),F=Y;break}else if(S[Y]===null){S[Y]=fe,F=Y;break}if(F===-1)break}const re=y[F];re&&re.connect(fe)}}const G=new q,K=new q;function z(ne,ue,fe){G.setFromMatrixPosition(ue.matrixWorld),K.setFromMatrixPosition(fe.matrixWorld);const F=G.distanceTo(K),re=ue.projectionMatrix.elements,Y=fe.projectionMatrix.elements,le=re[14]/(re[10]-1),ye=re[14]/(re[10]+1),Q=(re[9]+1)/re[5],g=(re[9]-1)/re[5],T=(re[8]-1)/re[0],I=(Y[8]+1)/Y[0],U=le*T,O=le*I,j=F/(-T+I),ee=j*-T;if(ue.matrixWorld.decompose(ne.position,ne.quaternion,ne.scale),ne.translateX(ee),ne.translateZ(j),ne.matrixWorld.compose(ne.position,ne.quaternion,ne.scale),ne.matrixWorldInverse.copy(ne.matrixWorld).invert(),re[10]===-1)ne.projectionMatrix.copy(ue.projectionMatrix),ne.projectionMatrixInverse.copy(ue.projectionMatrixInverse);else{const w=le+j,v=ye+j,L=U-ee,V=O+(F-ee),k=Q*ye/v*w,W=g*ye/v*w;ne.projectionMatrix.makePerspective(L,V,k,W,w,v),ne.projectionMatrixInverse.copy(ne.projectionMatrix).invert()}}function pe(ne,ue){ue===null?ne.matrixWorld.copy(ne.matrix):ne.matrixWorld.multiplyMatrices(ue.matrixWorld,ne.matrix),ne.matrixWorldInverse.copy(ne.matrixWorld).invert()}this.updateCamera=function(ne){if(s===null)return;let ue=ne.near,fe=ne.far;M.texture!==null&&(M.depthNear>0&&(ue=M.depthNear),M.depthFar>0&&(fe=M.depthFar)),x.near=N.near=A.near=ue,x.far=N.far=A.far=fe,(b!==x.near||X!==x.far)&&(s.updateRenderState({depthNear:x.near,depthFar:x.far}),b=x.near,X=x.far);const F=ne.parent,re=x.cameras;pe(x,F);for(let Y=0;Y<re.length;Y++)pe(re[Y],F);re.length===2?z(x,A,N):x.projectionMatrix.copy(A.projectionMatrix),me(ne,x,F)};function me(ne,ue,fe){fe===null?ne.matrix.copy(ue.matrixWorld):(ne.matrix.copy(fe.matrixWorld),ne.matrix.invert(),ne.matrix.multiply(ue.matrixWorld)),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale),ne.updateMatrixWorld(!0),ne.projectionMatrix.copy(ue.projectionMatrix),ne.projectionMatrixInverse.copy(ue.projectionMatrixInverse),ne.isPerspectiveCamera&&(ne.fov=Cr*2*Math.atan(1/ne.projectionMatrix.elements[5]),ne.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(ne){c=ne,d!==null&&(d.fixedFoveation=ne),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=ne)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(x)};let _e=null;function Me(ne,ue){if(h=ue.getViewerPose(l||o),_=ue,h!==null){const fe=h.views;f!==null&&(e.setRenderTargetFramebuffer(E,f.framebuffer),e.setRenderTarget(E));let F=!1;fe.length!==x.cameras.length&&(x.cameras.length=0,F=!0);for(let Y=0;Y<fe.length;Y++){const le=fe[Y];let ye=null;if(f!==null)ye=f.getViewport(le);else{const g=u.getViewSubImage(d,le);ye=g.viewport,Y===0&&(e.setRenderTargetTextures(E,g.colorTexture,d.ignoreDepthValues?void 0:g.depthStencilTexture),e.setRenderTarget(E))}let Q=te[Y];Q===void 0&&(Q=new vt,Q.layers.enable(Y),Q.viewport=new ut,te[Y]=Q),Q.matrix.fromArray(le.transform.matrix),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.projectionMatrix.fromArray(le.projectionMatrix),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert(),Q.viewport.set(ye.x,ye.y,ye.width,ye.height),Y===0&&(x.matrix.copy(Q.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),F===!0&&x.cameras.push(Q)}const re=s.enabledFeatures;if(re&&re.includes("depth-sensing")){const Y=u.getDepthInformation(fe[0]);Y&&Y.isValid&&Y.texture&&M.init(e,Y,s.renderState)}}for(let fe=0;fe<y.length;fe++){const F=S[fe],re=y[fe];F!==null&&re!==void 0&&re.update(F,ue,l||o)}_e&&_e(ne,ue),ue.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ue}),_=null}const Pe=new Wf;Pe.setAnimationLoop(Me),this.setAnimationLoop=function(ne){_e=ne},this.dispose=function(){}}}const Yi=new Qn,cw=new Mt;function lw(n,e){function t(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function i(p,m){m.color.getRGB(p.fogColor.value,Gf(n)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function s(p,m,E,y,S){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(p,m):m.isMeshToonMaterial?(r(p,m),u(p,m)):m.isMeshPhongMaterial?(r(p,m),h(p,m)):m.isMeshStandardMaterial?(r(p,m),d(p,m),m.isMeshPhysicalMaterial&&f(p,m,S)):m.isMeshMatcapMaterial?(r(p,m),_(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),M(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(o(p,m),m.isLineDashedMaterial&&a(p,m)):m.isPointsMaterial?c(p,m,E,y):m.isSpriteMaterial?l(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,t(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===hn&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,t(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===hn&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,t(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,t(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const E=e.get(m),y=E.envMap,S=E.envMapRotation;y&&(p.envMap.value=y,Yi.copy(S),Yi.x*=-1,Yi.y*=-1,Yi.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Yi.y*=-1,Yi.z*=-1),p.envMapRotation.value.setFromMatrix4(cw.makeRotationFromEuler(Yi)),p.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,p.aoMapTransform))}function o(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform))}function a(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function c(p,m,E,y){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*E,p.scale.value=y*.5,m.map&&(p.map.value=m.map,t(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function l(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function h(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function u(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function d(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function f(p,m,E){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===hn&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=E.texture,p.transmissionSamplerSize.value.set(E.width,E.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,p.specularIntensityMapTransform))}function _(p,m){m.matcap&&(p.matcap.value=m.matcap)}function M(p,m){const E=e.get(m).light;p.referencePosition.value.setFromMatrixPosition(E.matrixWorld),p.nearDistance.value=E.shadow.camera.near,p.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function uw(n,e,t,i){let s={},r={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(E,y){const S=y.program;i.uniformBlockBinding(E,S)}function l(E,y){let S=s[E.id];S===void 0&&(_(E),S=h(E),s[E.id]=S,E.addEventListener("dispose",p));const D=y.program;i.updateUBOMapping(E,D);const C=e.render.frame;r[E.id]!==C&&(d(E),r[E.id]=C)}function h(E){const y=u();E.__bindingPointIndex=y;const S=n.createBuffer(),D=E.__size,C=E.usage;return n.bindBuffer(n.UNIFORM_BUFFER,S),n.bufferData(n.UNIFORM_BUFFER,D,C),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,y,S),S}function u(){for(let E=0;E<a;E++)if(o.indexOf(E)===-1)return o.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(E){const y=s[E.id],S=E.uniforms,D=E.__cache;n.bindBuffer(n.UNIFORM_BUFFER,y);for(let C=0,A=S.length;C<A;C++){const N=Array.isArray(S[C])?S[C]:[S[C]];for(let te=0,x=N.length;te<x;te++){const b=N[te];if(f(b,C,te,D)===!0){const X=b.__offset,H=Array.isArray(b.value)?b.value:[b.value];let J=0;for(let ie=0;ie<H.length;ie++){const G=H[ie],K=M(G);typeof G=="number"||typeof G=="boolean"?(b.__data[0]=G,n.bufferSubData(n.UNIFORM_BUFFER,X+J,b.__data)):G.isMatrix3?(b.__data[0]=G.elements[0],b.__data[1]=G.elements[1],b.__data[2]=G.elements[2],b.__data[3]=0,b.__data[4]=G.elements[3],b.__data[5]=G.elements[4],b.__data[6]=G.elements[5],b.__data[7]=0,b.__data[8]=G.elements[6],b.__data[9]=G.elements[7],b.__data[10]=G.elements[8],b.__data[11]=0):(G.toArray(b.__data,J),J+=K.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,X,b.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(E,y,S,D){const C=E.value,A=y+"_"+S;if(D[A]===void 0)return typeof C=="number"||typeof C=="boolean"?D[A]=C:D[A]=C.clone(),!0;{const N=D[A];if(typeof C=="number"||typeof C=="boolean"){if(N!==C)return D[A]=C,!0}else if(N.equals(C)===!1)return N.copy(C),!0}return!1}function _(E){const y=E.uniforms;let S=0;const D=16;for(let A=0,N=y.length;A<N;A++){const te=Array.isArray(y[A])?y[A]:[y[A]];for(let x=0,b=te.length;x<b;x++){const X=te[x],H=Array.isArray(X.value)?X.value:[X.value];for(let J=0,ie=H.length;J<ie;J++){const G=H[J],K=M(G),z=S%D,pe=z%K.boundary,me=z+pe;S+=pe,me!==0&&D-me<K.storage&&(S+=D-me),X.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),X.__offset=S,S+=K.storage}}}const C=S%D;return C>0&&(S+=D-C),E.__size=S,E.__cache={},this}function M(E){const y={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(y.boundary=4,y.storage=4):E.isVector2?(y.boundary=8,y.storage=8):E.isVector3||E.isColor?(y.boundary=16,y.storage=12):E.isVector4?(y.boundary=16,y.storage=16):E.isMatrix3?(y.boundary=48,y.storage=48):E.isMatrix4?(y.boundary=64,y.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),y}function p(E){const y=E.target;y.removeEventListener("dispose",p);const S=o.indexOf(y.__bindingPointIndex);o.splice(S,1),n.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function m(){for(const E in s)n.deleteBuffer(s[E]);o=[],s={},r={}}return{bind:c,update:l,dispose:m}}class Mn{constructor(e={}){const{canvas:t=Q_(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=o;const f=new Uint32Array(4),_=new Int32Array(4);let M=null,p=null;const m=[],E=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Fn,this.toneMapping=Di,this.toneMappingExposure=1;const y=this;let S=!1,D=0,C=0,A=null,N=-1,te=null;const x=new ut,b=new ut;let X=null;const H=new Xe(0);let J=0,ie=t.width,G=t.height,K=1,z=null,pe=null;const me=new ut(0,0,ie,G),_e=new ut(0,0,ie,G);let Me=!1;const Pe=new ql;let ne=!1,ue=!1;const fe=new Mt,F=new Mt,re=new q,Y=new ut,le={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ye=!1;function Q(){return A===null?K:1}let g=i;function T(R,$){return t.getContext(R,$)}try{const R={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Nl}`),t.addEventListener("webglcontextlost",oe,!1),t.addEventListener("webglcontextrestored",Ee,!1),t.addEventListener("webglcontextcreationerror",be,!1),g===null){const $="webgl2";if(g=T($,R),g===null)throw T($)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let I,U,O,j,ee,w,v,L,V,k,W,de,he,ve,Ae,ge,Se,Ce,Ue,Te,He,Ne,Oe,B;function we(){I=new gM(g),I.init(),Ne=new tw(g,I),U=new uM(g,I,e,Ne),O=new JS(g),U.reverseDepthBuffer&&O.buffers.depth.setReversed(!0),j=new xM(g),ee=new OS,w=new ew(g,I,O,ee,U,Ne,j),v=new dM(y),L=new mM(y),V=new Tv(g),Oe=new cM(g,V),k=new _M(g,V,j,Oe),W=new MM(g,k,V,j),Ue=new yM(g,U,w),ge=new hM(ee),de=new FS(y,v,L,I,U,Oe,ge),he=new lw(y,ee),ve=new zS,Ae=new XS(I),Ce=new aM(y,v,L,O,W,d,c),Se=new KS(y,W,U),B=new uw(g,j,U,O),Te=new lM(g,I,j),He=new vM(g,I,j),j.programs=de.programs,y.capabilities=U,y.extensions=I,y.properties=ee,y.renderLists=ve,y.shadowMap=Se,y.state=O,y.info=j}we();const se=new aw(y,g);this.xr=se,this.getContext=function(){return g},this.getContextAttributes=function(){return g.getContextAttributes()},this.forceContextLoss=function(){const R=I.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=I.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return K},this.setPixelRatio=function(R){R!==void 0&&(K=R,this.setSize(ie,G,!1))},this.getSize=function(R){return R.set(ie,G)},this.setSize=function(R,$,ae=!0){if(se.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ie=R,G=$,t.width=Math.floor(R*K),t.height=Math.floor($*K),ae===!0&&(t.style.width=R+"px",t.style.height=$+"px"),this.setViewport(0,0,R,$)},this.getDrawingBufferSize=function(R){return R.set(ie*K,G*K).floor()},this.setDrawingBufferSize=function(R,$,ae){ie=R,G=$,K=ae,t.width=Math.floor(R*ae),t.height=Math.floor($*ae),this.setViewport(0,0,R,$)},this.getCurrentViewport=function(R){return R.copy(x)},this.getViewport=function(R){return R.copy(me)},this.setViewport=function(R,$,ae,ce){R.isVector4?me.set(R.x,R.y,R.z,R.w):me.set(R,$,ae,ce),O.viewport(x.copy(me).multiplyScalar(K).round())},this.getScissor=function(R){return R.copy(_e)},this.setScissor=function(R,$,ae,ce){R.isVector4?_e.set(R.x,R.y,R.z,R.w):_e.set(R,$,ae,ce),O.scissor(b.copy(_e).multiplyScalar(K).round())},this.getScissorTest=function(){return Me},this.setScissorTest=function(R){O.setScissorTest(Me=R)},this.setOpaqueSort=function(R){z=R},this.setTransparentSort=function(R){pe=R},this.getClearColor=function(R){return R.copy(Ce.getClearColor())},this.setClearColor=function(){Ce.setClearColor.apply(Ce,arguments)},this.getClearAlpha=function(){return Ce.getClearAlpha()},this.setClearAlpha=function(){Ce.setClearAlpha.apply(Ce,arguments)},this.clear=function(R=!0,$=!0,ae=!0){let ce=0;if(R){let Z=!1;if(A!==null){const Re=A.texture.format;Z=Re===Hl||Re===Gl||Re===zl}if(Z){const Re=A.texture.type,Fe=Re===gi||Re===is||Re===Pr||Re===Ws||Re===Ol||Re===Bl,Be=Ce.getClearColor(),ze=Ce.getClearAlpha(),We=Be.r,qe=Be.g,Ge=Be.b;Fe?(f[0]=We,f[1]=qe,f[2]=Ge,f[3]=ze,g.clearBufferuiv(g.COLOR,0,f)):(_[0]=We,_[1]=qe,_[2]=Ge,_[3]=ze,g.clearBufferiv(g.COLOR,0,_))}else ce|=g.COLOR_BUFFER_BIT}$&&(ce|=g.DEPTH_BUFFER_BIT,g.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),ae&&(ce|=g.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),g.clear(ce)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",oe,!1),t.removeEventListener("webglcontextrestored",Ee,!1),t.removeEventListener("webglcontextcreationerror",be,!1),ve.dispose(),Ae.dispose(),ee.dispose(),v.dispose(),L.dispose(),W.dispose(),Oe.dispose(),B.dispose(),de.dispose(),se.dispose(),se.removeEventListener("sessionstart",Lt),se.removeEventListener("sessionend",un),Dt.stop()};function oe(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function Ee(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const R=j.autoReset,$=Se.enabled,ae=Se.autoUpdate,ce=Se.needsUpdate,Z=Se.type;we(),j.autoReset=R,Se.enabled=$,Se.autoUpdate=ae,Se.needsUpdate=ce,Se.type=Z}function be(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function Ve(R){const $=R.target;$.removeEventListener("dispose",Ve),tt($)}function tt(R){pt(R),ee.remove(R)}function pt(R){const $=ee.get(R).programs;$!==void 0&&($.forEach(function(ae){de.releaseProgram(ae)}),R.isShaderMaterial&&de.releaseShaderCache(R))}this.renderBufferDirect=function(R,$,ae,ce,Z,Re){$===null&&($=le);const Fe=Z.isMesh&&Z.matrixWorld.determinant()<0,Be=mp(R,$,ae,ce,Z);O.setMaterial(ce,Fe);let ze=ae.index,We=1;if(ce.wireframe===!0){if(ze=k.getWireframeAttribute(ae),ze===void 0)return;We=2}const qe=ae.drawRange,Ge=ae.attributes.position;let ct=qe.start*We,gt=(qe.start+qe.count)*We;Re!==null&&(ct=Math.max(ct,Re.start*We),gt=Math.min(gt,(Re.start+Re.count)*We)),ze!==null?(ct=Math.max(ct,0),gt=Math.min(gt,ze.count)):Ge!=null&&(ct=Math.max(ct,0),gt=Math.min(gt,Ge.count));const Et=gt-ct;if(Et<0||Et===1/0)return;Oe.setup(Z,ce,Be,ae,ze);let dn,it=Te;if(ze!==null&&(dn=V.get(ze),it=He,it.setIndex(dn)),Z.isMesh)ce.wireframe===!0?(O.setLineWidth(ce.wireframeLinewidth*Q()),it.setMode(g.LINES)):it.setMode(g.TRIANGLES);else if(Z.isLine){let ke=ce.linewidth;ke===void 0&&(ke=1),O.setLineWidth(ke*Q()),Z.isLineSegments?it.setMode(g.LINES):Z.isLineLoop?it.setMode(g.LINE_LOOP):it.setMode(g.LINE_STRIP)}else Z.isPoints?it.setMode(g.POINTS):Z.isSprite&&it.setMode(g.TRIANGLES);if(Z.isBatchedMesh)if(Z._multiDrawInstances!==null)it.renderMultiDrawInstances(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount,Z._multiDrawInstances);else if(I.get("WEBGL_multi_draw"))it.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else{const ke=Z._multiDrawStarts,Vt=Z._multiDrawCounts,st=Z._multiDrawCount,In=ze?V.get(ze).bytesPerElement:1,ls=ee.get(ce).currentProgram.getUniforms();for(let fn=0;fn<st;fn++)ls.setValue(g,"_gl_DrawID",fn),it.render(ke[fn]/In,Vt[fn])}else if(Z.isInstancedMesh)it.renderInstances(ct,Et,Z.count);else if(ae.isInstancedBufferGeometry){const ke=ae._maxInstanceCount!==void 0?ae._maxInstanceCount:1/0,Vt=Math.min(ae.instanceCount,ke);it.renderInstances(ct,Et,Vt)}else it.render(ct,Et)};function Ze(R,$,ae){R.transparent===!0&&R.side===bt&&R.forceSinglePass===!1?(R.side=hn,R.needsUpdate=!0,Wr(R,$,ae),R.side=Ni,R.needsUpdate=!0,Wr(R,$,ae),R.side=bt):Wr(R,$,ae)}this.compile=function(R,$,ae=null){ae===null&&(ae=R),p=Ae.get(ae),p.init($),E.push(p),ae.traverseVisible(function(Z){Z.isLight&&Z.layers.test($.layers)&&(p.pushLight(Z),Z.castShadow&&p.pushShadow(Z))}),R!==ae&&R.traverseVisible(function(Z){Z.isLight&&Z.layers.test($.layers)&&(p.pushLight(Z),Z.castShadow&&p.pushShadow(Z))}),p.setupLights();const ce=new Set;return R.traverse(function(Z){if(!(Z.isMesh||Z.isPoints||Z.isLine||Z.isSprite))return;const Re=Z.material;if(Re)if(Array.isArray(Re))for(let Fe=0;Fe<Re.length;Fe++){const Be=Re[Fe];Ze(Be,ae,Z),ce.add(Be)}else Ze(Re,ae,Z),ce.add(Re)}),E.pop(),p=null,ce},this.compileAsync=function(R,$,ae=null){const ce=this.compile(R,$,ae);return new Promise(Z=>{function Re(){if(ce.forEach(function(Fe){ee.get(Fe).currentProgram.isReady()&&ce.delete(Fe)}),ce.size===0){Z(R);return}setTimeout(Re,10)}I.get("KHR_parallel_shader_compile")!==null?Re():setTimeout(Re,10)})};let nt=null;function mt(R){nt&&nt(R)}function Lt(){Dt.stop()}function un(){Dt.start()}const Dt=new Wf;Dt.setAnimationLoop(mt),typeof self<"u"&&Dt.setContext(self),this.setAnimationLoop=function(R){nt=R,se.setAnimationLoop(R),R===null?Dt.stop():Dt.start()},se.addEventListener("sessionstart",Lt),se.addEventListener("sessionend",un),this.render=function(R,$){if($!==void 0&&$.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),$.parent===null&&$.matrixWorldAutoUpdate===!0&&$.updateMatrixWorld(),se.enabled===!0&&se.isPresenting===!0&&(se.cameraAutoUpdate===!0&&se.updateCamera($),$=se.getCamera()),R.isScene===!0&&R.onBeforeRender(y,R,$,A),p=Ae.get(R,E.length),p.init($),E.push(p),F.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),Pe.setFromProjectionMatrix(F),ue=this.localClippingEnabled,ne=ge.init(this.clippingPlanes,ue),M=ve.get(R,m.length),M.init(),m.push(M),se.enabled===!0&&se.isPresenting===!0){const Re=y.xr.getDepthSensingMesh();Re!==null&&zi(Re,$,-1/0,y.sortObjects)}zi(R,$,0,y.sortObjects),M.finish(),y.sortObjects===!0&&M.sort(z,pe),ye=se.enabled===!1||se.isPresenting===!1||se.hasDepthSensing()===!1,ye&&Ce.addToRenderList(M,R),this.info.render.frame++,ne===!0&&ge.beginShadows();const ae=p.state.shadowsArray;Se.render(ae,R,$),ne===!0&&ge.endShadows(),this.info.autoReset===!0&&this.info.reset();const ce=M.opaque,Z=M.transmissive;if(p.setupLights(),$.isArrayCamera){const Re=$.cameras;if(Z.length>0)for(let Fe=0,Be=Re.length;Fe<Be;Fe++){const ze=Re[Fe];Ql(ce,Z,R,ze)}ye&&Ce.render(R);for(let Fe=0,Be=Re.length;Fe<Be;Fe++){const ze=Re[Fe];Jl(M,R,ze,ze.viewport)}}else Z.length>0&&Ql(ce,Z,R,$),ye&&Ce.render(R),Jl(M,R,$);A!==null&&(w.updateMultisampleRenderTarget(A),w.updateRenderTargetMipmap(A)),R.isScene===!0&&R.onAfterRender(y,R,$),Oe.resetDefaultState(),N=-1,te=null,E.pop(),E.length>0?(p=E[E.length-1],ne===!0&&ge.setGlobalState(y.clippingPlanes,p.state.camera)):p=null,m.pop(),m.length>0?M=m[m.length-1]:M=null};function zi(R,$,ae,ce){if(R.visible===!1)return;if(R.layers.test($.layers)){if(R.isGroup)ae=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update($);else if(R.isLight)p.pushLight(R),R.castShadow&&p.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||Pe.intersectsSprite(R)){ce&&Y.setFromMatrixPosition(R.matrixWorld).applyMatrix4(F);const Fe=W.update(R),Be=R.material;Be.visible&&M.push(R,Fe,Be,ae,Y.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||Pe.intersectsObject(R))){const Fe=W.update(R),Be=R.material;if(ce&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Y.copy(R.boundingSphere.center)):(Fe.boundingSphere===null&&Fe.computeBoundingSphere(),Y.copy(Fe.boundingSphere.center)),Y.applyMatrix4(R.matrixWorld).applyMatrix4(F)),Array.isArray(Be)){const ze=Fe.groups;for(let We=0,qe=ze.length;We<qe;We++){const Ge=ze[We],ct=Be[Ge.materialIndex];ct&&ct.visible&&M.push(R,Fe,ct,ae,Y.z,Ge)}}else Be.visible&&M.push(R,Fe,Be,ae,Y.z,null)}}const Re=R.children;for(let Fe=0,Be=Re.length;Fe<Be;Fe++)zi(Re[Fe],$,ae,ce)}function Jl(R,$,ae,ce){const Z=R.opaque,Re=R.transmissive,Fe=R.transparent;p.setupLightsView(ae),ne===!0&&ge.setGlobalState(y.clippingPlanes,ae),ce&&O.viewport(x.copy(ce)),Z.length>0&&Vr(Z,$,ae),Re.length>0&&Vr(Re,$,ae),Fe.length>0&&Vr(Fe,$,ae),O.buffers.depth.setTest(!0),O.buffers.depth.setMask(!0),O.buffers.color.setMask(!0),O.setPolygonOffset(!1)}function Ql(R,$,ae,ce){if((ae.isScene===!0?ae.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[ce.id]===void 0&&(p.state.transmissionRenderTarget[ce.id]=new ss(1,1,{generateMipmaps:!0,type:I.has("EXT_color_buffer_half_float")||I.has("EXT_color_buffer_float")?Br:gi,minFilter:Li,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ot.workingColorSpace}));const Re=p.state.transmissionRenderTarget[ce.id],Fe=ce.viewport||x;Re.setSize(Fe.z,Fe.w);const Be=y.getRenderTarget();y.setRenderTarget(Re),y.getClearColor(H),J=y.getClearAlpha(),J<1&&y.setClearColor(16777215,.5),y.clear(),ye&&Ce.render(ae);const ze=y.toneMapping;y.toneMapping=Di;const We=ce.viewport;if(ce.viewport!==void 0&&(ce.viewport=void 0),p.setupLightsView(ce),ne===!0&&ge.setGlobalState(y.clippingPlanes,ce),Vr(R,ae,ce),w.updateMultisampleRenderTarget(Re),w.updateRenderTargetMipmap(Re),I.has("WEBGL_multisampled_render_to_texture")===!1){let qe=!1;for(let Ge=0,ct=$.length;Ge<ct;Ge++){const gt=$[Ge],Et=gt.object,dn=gt.geometry,it=gt.material,ke=gt.group;if(it.side===bt&&Et.layers.test(ce.layers)){const Vt=it.side;it.side=hn,it.needsUpdate=!0,eu(Et,ae,ce,dn,it,ke),it.side=Vt,it.needsUpdate=!0,qe=!0}}qe===!0&&(w.updateMultisampleRenderTarget(Re),w.updateRenderTargetMipmap(Re))}y.setRenderTarget(Be),y.setClearColor(H,J),We!==void 0&&(ce.viewport=We),y.toneMapping=ze}function Vr(R,$,ae){const ce=$.isScene===!0?$.overrideMaterial:null;for(let Z=0,Re=R.length;Z<Re;Z++){const Fe=R[Z],Be=Fe.object,ze=Fe.geometry,We=ce===null?Fe.material:ce,qe=Fe.group;Be.layers.test(ae.layers)&&eu(Be,$,ae,ze,We,qe)}}function eu(R,$,ae,ce,Z,Re){R.onBeforeRender(y,$,ae,ce,Z,Re),R.modelViewMatrix.multiplyMatrices(ae.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),Z.onBeforeRender(y,$,ae,ce,R,Re),Z.transparent===!0&&Z.side===bt&&Z.forceSinglePass===!1?(Z.side=hn,Z.needsUpdate=!0,y.renderBufferDirect(ae,$,ce,Z,R,Re),Z.side=Ni,Z.needsUpdate=!0,y.renderBufferDirect(ae,$,ce,Z,R,Re),Z.side=bt):y.renderBufferDirect(ae,$,ce,Z,R,Re),R.onAfterRender(y,$,ae,ce,Z,Re)}function Wr(R,$,ae){$.isScene!==!0&&($=le);const ce=ee.get(R),Z=p.state.lights,Re=p.state.shadowsArray,Fe=Z.state.version,Be=de.getParameters(R,Z.state,Re,$,ae),ze=de.getProgramCacheKey(Be);let We=ce.programs;ce.environment=R.isMeshStandardMaterial?$.environment:null,ce.fog=$.fog,ce.envMap=(R.isMeshStandardMaterial?L:v).get(R.envMap||ce.environment),ce.envMapRotation=ce.environment!==null&&R.envMap===null?$.environmentRotation:R.envMapRotation,We===void 0&&(R.addEventListener("dispose",Ve),We=new Map,ce.programs=We);let qe=We.get(ze);if(qe!==void 0){if(ce.currentProgram===qe&&ce.lightsStateVersion===Fe)return nu(R,Be),qe}else Be.uniforms=de.getUniforms(R),R.onBeforeCompile(Be,y),qe=de.acquireProgram(Be,ze),We.set(ze,qe),ce.uniforms=Be.uniforms;const Ge=ce.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Ge.clippingPlanes=ge.uniform),nu(R,Be),ce.needsLights=_p(R),ce.lightsStateVersion=Fe,ce.needsLights&&(Ge.ambientLightColor.value=Z.state.ambient,Ge.lightProbe.value=Z.state.probe,Ge.directionalLights.value=Z.state.directional,Ge.directionalLightShadows.value=Z.state.directionalShadow,Ge.spotLights.value=Z.state.spot,Ge.spotLightShadows.value=Z.state.spotShadow,Ge.rectAreaLights.value=Z.state.rectArea,Ge.ltc_1.value=Z.state.rectAreaLTC1,Ge.ltc_2.value=Z.state.rectAreaLTC2,Ge.pointLights.value=Z.state.point,Ge.pointLightShadows.value=Z.state.pointShadow,Ge.hemisphereLights.value=Z.state.hemi,Ge.directionalShadowMap.value=Z.state.directionalShadowMap,Ge.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,Ge.spotShadowMap.value=Z.state.spotShadowMap,Ge.spotLightMatrix.value=Z.state.spotLightMatrix,Ge.spotLightMap.value=Z.state.spotLightMap,Ge.pointShadowMap.value=Z.state.pointShadowMap,Ge.pointShadowMatrix.value=Z.state.pointShadowMatrix),ce.currentProgram=qe,ce.uniformsList=null,qe}function tu(R){if(R.uniformsList===null){const $=R.currentProgram.getUniforms();R.uniformsList=Do.seqWithValue($.seq,R.uniforms)}return R.uniformsList}function nu(R,$){const ae=ee.get(R);ae.outputColorSpace=$.outputColorSpace,ae.batching=$.batching,ae.batchingColor=$.batchingColor,ae.instancing=$.instancing,ae.instancingColor=$.instancingColor,ae.instancingMorph=$.instancingMorph,ae.skinning=$.skinning,ae.morphTargets=$.morphTargets,ae.morphNormals=$.morphNormals,ae.morphColors=$.morphColors,ae.morphTargetsCount=$.morphTargetsCount,ae.numClippingPlanes=$.numClippingPlanes,ae.numIntersection=$.numClipIntersection,ae.vertexAlphas=$.vertexAlphas,ae.vertexTangents=$.vertexTangents,ae.toneMapping=$.toneMapping}function mp(R,$,ae,ce,Z){$.isScene!==!0&&($=le),w.resetTextureUnits();const Re=$.fog,Fe=ce.isMeshStandardMaterial?$.environment:null,Be=A===null?y.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Bi,ze=(ce.isMeshStandardMaterial?L:v).get(ce.envMap||Fe),We=ce.vertexColors===!0&&!!ae.attributes.color&&ae.attributes.color.itemSize===4,qe=!!ae.attributes.tangent&&(!!ce.normalMap||ce.anisotropy>0),Ge=!!ae.morphAttributes.position,ct=!!ae.morphAttributes.normal,gt=!!ae.morphAttributes.color;let Et=Di;ce.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(Et=y.toneMapping);const dn=ae.morphAttributes.position||ae.morphAttributes.normal||ae.morphAttributes.color,it=dn!==void 0?dn.length:0,ke=ee.get(ce),Vt=p.state.lights;if(ne===!0&&(ue===!0||R!==te)){const bn=R===te&&ce.id===N;ge.setState(ce,R,bn)}let st=!1;ce.version===ke.__version?(ke.needsLights&&ke.lightsStateVersion!==Vt.state.version||ke.outputColorSpace!==Be||Z.isBatchedMesh&&ke.batching===!1||!Z.isBatchedMesh&&ke.batching===!0||Z.isBatchedMesh&&ke.batchingColor===!0&&Z.colorTexture===null||Z.isBatchedMesh&&ke.batchingColor===!1&&Z.colorTexture!==null||Z.isInstancedMesh&&ke.instancing===!1||!Z.isInstancedMesh&&ke.instancing===!0||Z.isSkinnedMesh&&ke.skinning===!1||!Z.isSkinnedMesh&&ke.skinning===!0||Z.isInstancedMesh&&ke.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&ke.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&ke.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&ke.instancingMorph===!1&&Z.morphTexture!==null||ke.envMap!==ze||ce.fog===!0&&ke.fog!==Re||ke.numClippingPlanes!==void 0&&(ke.numClippingPlanes!==ge.numPlanes||ke.numIntersection!==ge.numIntersection)||ke.vertexAlphas!==We||ke.vertexTangents!==qe||ke.morphTargets!==Ge||ke.morphNormals!==ct||ke.morphColors!==gt||ke.toneMapping!==Et||ke.morphTargetsCount!==it)&&(st=!0):(st=!0,ke.__version=ce.version);let In=ke.currentProgram;st===!0&&(In=Wr(ce,$,Z));let ls=!1,fn=!1,ua=!1;const Tt=In.getUniforms(),vi=ke.uniforms;if(O.useProgram(In.program)&&(ls=!0,fn=!0,ua=!0),ce.id!==N&&(N=ce.id,fn=!0),ls||te!==R){U.reverseDepthBuffer?(fe.copy(R.projectionMatrix),tv(fe),nv(fe),Tt.setValue(g,"projectionMatrix",fe)):Tt.setValue(g,"projectionMatrix",R.projectionMatrix),Tt.setValue(g,"viewMatrix",R.matrixWorldInverse);const bn=Tt.map.cameraPosition;bn!==void 0&&bn.setValue(g,re.setFromMatrixPosition(R.matrixWorld)),U.logarithmicDepthBuffer&&Tt.setValue(g,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(ce.isMeshPhongMaterial||ce.isMeshToonMaterial||ce.isMeshLambertMaterial||ce.isMeshBasicMaterial||ce.isMeshStandardMaterial||ce.isShaderMaterial)&&Tt.setValue(g,"isOrthographic",R.isOrthographicCamera===!0),te!==R&&(te=R,fn=!0,ua=!0)}if(Z.isSkinnedMesh){Tt.setOptional(g,Z,"bindMatrix"),Tt.setOptional(g,Z,"bindMatrixInverse");const bn=Z.skeleton;bn&&(bn.boneTexture===null&&bn.computeBoneTexture(),Tt.setValue(g,"boneTexture",bn.boneTexture,w))}Z.isBatchedMesh&&(Tt.setOptional(g,Z,"batchingTexture"),Tt.setValue(g,"batchingTexture",Z._matricesTexture,w),Tt.setOptional(g,Z,"batchingIdTexture"),Tt.setValue(g,"batchingIdTexture",Z._indirectTexture,w),Tt.setOptional(g,Z,"batchingColorTexture"),Z._colorsTexture!==null&&Tt.setValue(g,"batchingColorTexture",Z._colorsTexture,w));const ha=ae.morphAttributes;if((ha.position!==void 0||ha.normal!==void 0||ha.color!==void 0)&&Ue.update(Z,ae,In),(fn||ke.receiveShadow!==Z.receiveShadow)&&(ke.receiveShadow=Z.receiveShadow,Tt.setValue(g,"receiveShadow",Z.receiveShadow)),ce.isMeshGouraudMaterial&&ce.envMap!==null&&(vi.envMap.value=ze,vi.flipEnvMap.value=ze.isCubeTexture&&ze.isRenderTargetTexture===!1?-1:1),ce.isMeshStandardMaterial&&ce.envMap===null&&$.environment!==null&&(vi.envMapIntensity.value=$.environmentIntensity),fn&&(Tt.setValue(g,"toneMappingExposure",y.toneMappingExposure),ke.needsLights&&gp(vi,ua),Re&&ce.fog===!0&&he.refreshFogUniforms(vi,Re),he.refreshMaterialUniforms(vi,ce,K,G,p.state.transmissionRenderTarget[R.id]),Do.upload(g,tu(ke),vi,w)),ce.isShaderMaterial&&ce.uniformsNeedUpdate===!0&&(Do.upload(g,tu(ke),vi,w),ce.uniformsNeedUpdate=!1),ce.isSpriteMaterial&&Tt.setValue(g,"center",Z.center),Tt.setValue(g,"modelViewMatrix",Z.modelViewMatrix),Tt.setValue(g,"normalMatrix",Z.normalMatrix),Tt.setValue(g,"modelMatrix",Z.matrixWorld),ce.isShaderMaterial||ce.isRawShaderMaterial){const bn=ce.uniformsGroups;for(let da=0,vp=bn.length;da<vp;da++){const iu=bn[da];B.update(iu,In),B.bind(iu,In)}}return In}function gp(R,$){R.ambientLightColor.needsUpdate=$,R.lightProbe.needsUpdate=$,R.directionalLights.needsUpdate=$,R.directionalLightShadows.needsUpdate=$,R.pointLights.needsUpdate=$,R.pointLightShadows.needsUpdate=$,R.spotLights.needsUpdate=$,R.spotLightShadows.needsUpdate=$,R.rectAreaLights.needsUpdate=$,R.hemisphereLights.needsUpdate=$}function _p(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(R,$,ae){ee.get(R.texture).__webglTexture=$,ee.get(R.depthTexture).__webglTexture=ae;const ce=ee.get(R);ce.__hasExternalTextures=!0,ce.__autoAllocateDepthBuffer=ae===void 0,ce.__autoAllocateDepthBuffer||I.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ce.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(R,$){const ae=ee.get(R);ae.__webglFramebuffer=$,ae.__useDefaultFramebuffer=$===void 0},this.setRenderTarget=function(R,$=0,ae=0){A=R,D=$,C=ae;let ce=!0,Z=null,Re=!1,Fe=!1;if(R){const ze=ee.get(R);if(ze.__useDefaultFramebuffer!==void 0)O.bindFramebuffer(g.FRAMEBUFFER,null),ce=!1;else if(ze.__webglFramebuffer===void 0)w.setupRenderTarget(R);else if(ze.__hasExternalTextures)w.rebindTextures(R,ee.get(R.texture).__webglTexture,ee.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const Ge=R.depthTexture;if(ze.__boundDepthTexture!==Ge){if(Ge!==null&&ee.has(Ge)&&(R.width!==Ge.image.width||R.height!==Ge.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");w.setupDepthRenderbuffer(R)}}const We=R.texture;(We.isData3DTexture||We.isDataArrayTexture||We.isCompressedArrayTexture)&&(Fe=!0);const qe=ee.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(qe[$])?Z=qe[$][ae]:Z=qe[$],Re=!0):R.samples>0&&w.useMultisampledRTT(R)===!1?Z=ee.get(R).__webglMultisampledFramebuffer:Array.isArray(qe)?Z=qe[ae]:Z=qe,x.copy(R.viewport),b.copy(R.scissor),X=R.scissorTest}else x.copy(me).multiplyScalar(K).floor(),b.copy(_e).multiplyScalar(K).floor(),X=Me;if(O.bindFramebuffer(g.FRAMEBUFFER,Z)&&ce&&O.drawBuffers(R,Z),O.viewport(x),O.scissor(b),O.setScissorTest(X),Re){const ze=ee.get(R.texture);g.framebufferTexture2D(g.FRAMEBUFFER,g.COLOR_ATTACHMENT0,g.TEXTURE_CUBE_MAP_POSITIVE_X+$,ze.__webglTexture,ae)}else if(Fe){const ze=ee.get(R.texture),We=$||0;g.framebufferTextureLayer(g.FRAMEBUFFER,g.COLOR_ATTACHMENT0,ze.__webglTexture,ae||0,We)}N=-1},this.readRenderTargetPixels=function(R,$,ae,ce,Z,Re,Fe){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Be=ee.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Fe!==void 0&&(Be=Be[Fe]),Be){O.bindFramebuffer(g.FRAMEBUFFER,Be);try{const ze=R.texture,We=ze.format,qe=ze.type;if(!U.textureFormatReadable(We)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!U.textureTypeReadable(qe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}$>=0&&$<=R.width-ce&&ae>=0&&ae<=R.height-Z&&g.readPixels($,ae,ce,Z,Ne.convert(We),Ne.convert(qe),Re)}finally{const ze=A!==null?ee.get(A).__webglFramebuffer:null;O.bindFramebuffer(g.FRAMEBUFFER,ze)}}},this.readRenderTargetPixelsAsync=async function(R,$,ae,ce,Z,Re,Fe){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Be=ee.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Fe!==void 0&&(Be=Be[Fe]),Be){const ze=R.texture,We=ze.format,qe=ze.type;if(!U.textureFormatReadable(We))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!U.textureTypeReadable(qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if($>=0&&$<=R.width-ce&&ae>=0&&ae<=R.height-Z){O.bindFramebuffer(g.FRAMEBUFFER,Be);const Ge=g.createBuffer();g.bindBuffer(g.PIXEL_PACK_BUFFER,Ge),g.bufferData(g.PIXEL_PACK_BUFFER,Re.byteLength,g.STREAM_READ),g.readPixels($,ae,ce,Z,Ne.convert(We),Ne.convert(qe),0);const ct=A!==null?ee.get(A).__webglFramebuffer:null;O.bindFramebuffer(g.FRAMEBUFFER,ct);const gt=g.fenceSync(g.SYNC_GPU_COMMANDS_COMPLETE,0);return g.flush(),await ev(g,gt,4),g.bindBuffer(g.PIXEL_PACK_BUFFER,Ge),g.getBufferSubData(g.PIXEL_PACK_BUFFER,0,Re),g.deleteBuffer(Ge),g.deleteSync(gt),Re}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(R,$=null,ae=0){R.isTexture!==!0&&(Io("WebGLRenderer: copyFramebufferToTexture function signature has changed."),$=arguments[0]||null,R=arguments[1]);const ce=Math.pow(2,-ae),Z=Math.floor(R.image.width*ce),Re=Math.floor(R.image.height*ce),Fe=$!==null?$.x:0,Be=$!==null?$.y:0;w.setTexture2D(R,0),g.copyTexSubImage2D(g.TEXTURE_2D,ae,0,0,Fe,Be,Z,Re),O.unbindTexture()},this.copyTextureToTexture=function(R,$,ae=null,ce=null,Z=0){R.isTexture!==!0&&(Io("WebGLRenderer: copyTextureToTexture function signature has changed."),ce=arguments[0]||null,R=arguments[1],$=arguments[2],Z=arguments[3]||0,ae=null);let Re,Fe,Be,ze,We,qe;ae!==null?(Re=ae.max.x-ae.min.x,Fe=ae.max.y-ae.min.y,Be=ae.min.x,ze=ae.min.y):(Re=R.image.width,Fe=R.image.height,Be=0,ze=0),ce!==null?(We=ce.x,qe=ce.y):(We=0,qe=0);const Ge=Ne.convert($.format),ct=Ne.convert($.type);w.setTexture2D($,0),g.pixelStorei(g.UNPACK_FLIP_Y_WEBGL,$.flipY),g.pixelStorei(g.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),g.pixelStorei(g.UNPACK_ALIGNMENT,$.unpackAlignment);const gt=g.getParameter(g.UNPACK_ROW_LENGTH),Et=g.getParameter(g.UNPACK_IMAGE_HEIGHT),dn=g.getParameter(g.UNPACK_SKIP_PIXELS),it=g.getParameter(g.UNPACK_SKIP_ROWS),ke=g.getParameter(g.UNPACK_SKIP_IMAGES),Vt=R.isCompressedTexture?R.mipmaps[Z]:R.image;g.pixelStorei(g.UNPACK_ROW_LENGTH,Vt.width),g.pixelStorei(g.UNPACK_IMAGE_HEIGHT,Vt.height),g.pixelStorei(g.UNPACK_SKIP_PIXELS,Be),g.pixelStorei(g.UNPACK_SKIP_ROWS,ze),R.isDataTexture?g.texSubImage2D(g.TEXTURE_2D,Z,We,qe,Re,Fe,Ge,ct,Vt.data):R.isCompressedTexture?g.compressedTexSubImage2D(g.TEXTURE_2D,Z,We,qe,Vt.width,Vt.height,Ge,Vt.data):g.texSubImage2D(g.TEXTURE_2D,Z,We,qe,Re,Fe,Ge,ct,Vt),g.pixelStorei(g.UNPACK_ROW_LENGTH,gt),g.pixelStorei(g.UNPACK_IMAGE_HEIGHT,Et),g.pixelStorei(g.UNPACK_SKIP_PIXELS,dn),g.pixelStorei(g.UNPACK_SKIP_ROWS,it),g.pixelStorei(g.UNPACK_SKIP_IMAGES,ke),Z===0&&$.generateMipmaps&&g.generateMipmap(g.TEXTURE_2D),O.unbindTexture()},this.copyTextureToTexture3D=function(R,$,ae=null,ce=null,Z=0){R.isTexture!==!0&&(Io("WebGLRenderer: copyTextureToTexture3D function signature has changed."),ae=arguments[0]||null,ce=arguments[1]||null,R=arguments[2],$=arguments[3],Z=arguments[4]||0);let Re,Fe,Be,ze,We,qe,Ge,ct,gt;const Et=R.isCompressedTexture?R.mipmaps[Z]:R.image;ae!==null?(Re=ae.max.x-ae.min.x,Fe=ae.max.y-ae.min.y,Be=ae.max.z-ae.min.z,ze=ae.min.x,We=ae.min.y,qe=ae.min.z):(Re=Et.width,Fe=Et.height,Be=Et.depth,ze=0,We=0,qe=0),ce!==null?(Ge=ce.x,ct=ce.y,gt=ce.z):(Ge=0,ct=0,gt=0);const dn=Ne.convert($.format),it=Ne.convert($.type);let ke;if($.isData3DTexture)w.setTexture3D($,0),ke=g.TEXTURE_3D;else if($.isDataArrayTexture||$.isCompressedArrayTexture)w.setTexture2DArray($,0),ke=g.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}g.pixelStorei(g.UNPACK_FLIP_Y_WEBGL,$.flipY),g.pixelStorei(g.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),g.pixelStorei(g.UNPACK_ALIGNMENT,$.unpackAlignment);const Vt=g.getParameter(g.UNPACK_ROW_LENGTH),st=g.getParameter(g.UNPACK_IMAGE_HEIGHT),In=g.getParameter(g.UNPACK_SKIP_PIXELS),ls=g.getParameter(g.UNPACK_SKIP_ROWS),fn=g.getParameter(g.UNPACK_SKIP_IMAGES);g.pixelStorei(g.UNPACK_ROW_LENGTH,Et.width),g.pixelStorei(g.UNPACK_IMAGE_HEIGHT,Et.height),g.pixelStorei(g.UNPACK_SKIP_PIXELS,ze),g.pixelStorei(g.UNPACK_SKIP_ROWS,We),g.pixelStorei(g.UNPACK_SKIP_IMAGES,qe),R.isDataTexture||R.isData3DTexture?g.texSubImage3D(ke,Z,Ge,ct,gt,Re,Fe,Be,dn,it,Et.data):$.isCompressedArrayTexture?g.compressedTexSubImage3D(ke,Z,Ge,ct,gt,Re,Fe,Be,dn,Et.data):g.texSubImage3D(ke,Z,Ge,ct,gt,Re,Fe,Be,dn,it,Et),g.pixelStorei(g.UNPACK_ROW_LENGTH,Vt),g.pixelStorei(g.UNPACK_IMAGE_HEIGHT,st),g.pixelStorei(g.UNPACK_SKIP_PIXELS,In),g.pixelStorei(g.UNPACK_SKIP_ROWS,ls),g.pixelStorei(g.UNPACK_SKIP_IMAGES,fn),Z===0&&$.generateMipmaps&&g.generateMipmap(ke),O.unbindTexture()},this.initRenderTarget=function(R){ee.get(R).__webglFramebuffer===void 0&&w.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?w.setTextureCube(R,0):R.isData3DTexture?w.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?w.setTexture2DArray(R,0):w.setTexture2D(R,0),O.unbindTexture()},this.resetState=function(){D=0,C=0,A=null,O.reset(),Oe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return fi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===kl?"display-p3":"srgb",t.unpackColorSpace=ot.workingColorSpace===oa?"display-p3":"srgb"}}class Sn extends Jt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Qn,this.environmentIntensity=1,this.environmentRotation=new Qn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class ei{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const i=this.getLengths();let s=0;const r=i.length;let o;t?o=t:o=e*i[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=i[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,i[s]===o)return s/(r-1);const h=i[s],d=i[s+1]-h,f=(o-h)/d;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),c=t||(o.isVector2?new De:new q);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){const i=new q,s=[],r=[],o=[],a=new q,c=new Mt;for(let f=0;f<=e;f++){const _=f/e;s[f]=this.getTangentAt(_,new q)}r[0]=new q,o[0]=new q;let l=Number.MAX_VALUE;const h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=l&&(l=h,i.set(1,0,0)),u<=l&&(l=u,i.set(0,1,0)),d<=l&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();const _=Math.acos(zt(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(a,_))}o[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(zt(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(f=-f);for(let _=1;_<=e;_++)r[_].applyMatrix4(c.makeRotationAxis(s[_],f*_)),o[_].crossVectors(s[_],r[_])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class jl extends ei{constructor(e=0,t=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(e,t=new De){const i=t,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+e*r;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=c-this.aX,f=l-this.aY;c=d*h-f*u+this.aX,l=d*u+f*h+this.aY}return i.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class hw extends jl{constructor(e,t,i,s,r,o){super(e,t,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function $l(){let n=0,e=0,t=0,i=0;function s(r,o,a,c){n=r,e=a,t=-3*r+3*o-2*a-c,i=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,u){let d=(o-r)/l-(a-r)/(l+h)+(a-o)/h,f=(a-o)/h-(c-o)/(h+u)+(c-a)/u;d*=h,f*=h,s(o,a,d,f)},calc:function(r){const o=r*r,a=o*r;return n+e*r+t*o+i*a}}}const xo=new q,nc=new $l,ic=new $l,sc=new $l;class dw extends ei{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new q){const i=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=s[(a-1)%r]:(xo.subVectors(s[0],s[1]).add(s[0]),l=xo);const u=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(xo.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=xo),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let _=Math.pow(l.distanceToSquared(u),f),M=Math.pow(u.distanceToSquared(d),f),p=Math.pow(d.distanceToSquared(h),f);M<1e-4&&(M=1),_<1e-4&&(_=M),p<1e-4&&(p=M),nc.initNonuniformCatmullRom(l.x,u.x,d.x,h.x,_,M,p),ic.initNonuniformCatmullRom(l.y,u.y,d.y,h.y,_,M,p),sc.initNonuniformCatmullRom(l.z,u.z,d.z,h.z,_,M,p)}else this.curveType==="catmullrom"&&(nc.initCatmullRom(l.x,u.x,d.x,h.x,this.tension),ic.initCatmullRom(l.y,u.y,d.y,h.y,this.tension),sc.initCatmullRom(l.z,u.z,d.z,h.z,this.tension));return i.set(nc.calc(c),ic.calc(c),sc.calc(c)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(new q().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function jh(n,e,t,i,s){const r=(i-e)*.5,o=(s-t)*.5,a=n*n,c=n*a;return(2*t-2*i+r+o)*c+(-3*t+3*i-2*r-o)*a+r*n+t}function fw(n,e){const t=1-n;return t*t*e}function pw(n,e){return 2*(1-n)*n*e}function mw(n,e){return n*n*e}function yr(n,e,t,i){return fw(n,e)+pw(n,t)+mw(n,i)}function gw(n,e){const t=1-n;return t*t*t*e}function _w(n,e){const t=1-n;return 3*t*t*n*e}function vw(n,e){return 3*(1-n)*n*n*e}function xw(n,e){return n*n*n*e}function Mr(n,e,t,i,s){return gw(n,e)+_w(n,t)+vw(n,i)+xw(n,s)}class Zf extends ei{constructor(e=new De,t=new De,i=new De,s=new De){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new De){const i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Mr(e,s.x,r.x,o.x,a.x),Mr(e,s.y,r.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class yw extends ei{constructor(e=new q,t=new q,i=new q,s=new q){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new q){const i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Mr(e,s.x,r.x,o.x,a.x),Mr(e,s.y,r.y,o.y,a.y),Mr(e,s.z,r.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Jf extends ei{constructor(e=new De,t=new De){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new De){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new De){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Mw extends ei{constructor(e=new q,t=new q){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new q){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new q){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Qf extends ei{constructor(e=new De,t=new De,i=new De){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new De){const i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(yr(e,s.x,r.x,o.x),yr(e,s.y,r.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Sw extends ei{constructor(e=new q,t=new q,i=new q){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new q){const i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(yr(e,s.x,r.x,o.x),yr(e,s.y,r.y,o.y),yr(e,s.z,r.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class ep extends ei{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new De){const i=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return i.set(jh(a,c.x,l.x,h.x,u.x),jh(a,c.y,l.y,h.y,u.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(new De().fromArray(s))}return this}}var cl=Object.freeze({__proto__:null,ArcCurve:hw,CatmullRomCurve3:dw,CubicBezierCurve:Zf,CubicBezierCurve3:yw,EllipseCurve:jl,LineCurve:Jf,LineCurve3:Mw,QuadraticBezierCurve:Qf,QuadraticBezierCurve3:Sw,SplineCurve:ep});class ww extends ei{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new cl[i](t,e))}return this}getPoint(e,t){const i=e*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=i){const o=s[r]-i,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let i=0,s=this.curves.length;i<s;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let i;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,c=o.getPoints(a);for(let l=0;l<c.length;l++){const h=c[l];i&&i.equals(h)||(t.push(h),i=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){const s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const s=e.curves[t];this.curves.push(new cl[s.type]().fromJSON(s))}return this}}class ll extends ww{constructor(e){super(),this.type="Path",this.currentPoint=new De,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const i=new Jf(this.currentPoint.clone(),new De(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,s){const r=new Qf(this.currentPoint.clone(),new De(e,t),new De(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(e,t,i,s,r,o){const a=new Zf(this.currentPoint.clone(),new De(e,t),new De(i,s),new De(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),i=new ep(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,s,r,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+a,t+c,i,s,r,o),this}absarc(e,t,i,s,r,o){return this.absellipse(e,t,i,i,s,r,o),this}ellipse(e,t,i,s,r,o,a,c){const l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+l,t+h,i,s,r,o,a,c),this}absellipse(e,t,i,s,r,o,a,c){const l=new jl(e,t,i,s,r,o,a,c);if(this.curves.length>0){const u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);const h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class wt extends Ln{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);const r=[],o=[],a=[],c=[],l=new q,h=new De;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){const f=i+u/t*s;l.x=e*Math.cos(f),l.y=e*Math.sin(f),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[d]/e+1)/2,h.y=(o[d+1]/e+1)/2,c.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Rt(o,3)),this.setAttribute("normal",new Rt(a,3)),this.setAttribute("uv",new Rt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wt(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class ln extends Ln{constructor(e=1,t=1,i=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],d=[],f=[];let _=0;const M=[],p=i/2;let m=0;E(),o===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new Rt(u,3)),this.setAttribute("normal",new Rt(d,3)),this.setAttribute("uv",new Rt(f,2));function E(){const S=new q,D=new q;let C=0;const A=(t-e)/i;for(let N=0;N<=r;N++){const te=[],x=N/r,b=x*(t-e)+e;for(let X=0;X<=s;X++){const H=X/s,J=H*c+a,ie=Math.sin(J),G=Math.cos(J);D.x=b*ie,D.y=-x*i+p,D.z=b*G,u.push(D.x,D.y,D.z),S.set(ie,A,G).normalize(),d.push(S.x,S.y,S.z),f.push(H,1-x),te.push(_++)}M.push(te)}for(let N=0;N<s;N++)for(let te=0;te<r;te++){const x=M[te][N],b=M[te+1][N],X=M[te+1][N+1],H=M[te][N+1];e>0&&(h.push(x,b,H),C+=3),t>0&&(h.push(b,X,H),C+=3)}l.addGroup(m,C,0),m+=C}function y(S){const D=_,C=new De,A=new q;let N=0;const te=S===!0?e:t,x=S===!0?1:-1;for(let X=1;X<=s;X++)u.push(0,p*x,0),d.push(0,x,0),f.push(.5,.5),_++;const b=_;for(let X=0;X<=s;X++){const J=X/s*c+a,ie=Math.cos(J),G=Math.sin(J);A.x=te*G,A.y=p*x,A.z=te*ie,u.push(A.x,A.y,A.z),d.push(0,x,0),C.x=ie*.5+.5,C.y=G*.5*x+.5,f.push(C.x,C.y),_++}for(let X=0;X<s;X++){const H=D+X,J=b+X;S===!0?h.push(J,J+1,H):h.push(J+1,J,H),N+=3}l.addGroup(m,N,S===!0?1:2),m+=N}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ln(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Nt extends ll{constructor(e){super(e),this.uuid=cs(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let i=0,s=this.holes.length;i<s;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){const s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const s=e.holes[t];this.holes.push(new ll().fromJSON(s))}return this}}const Ew={triangulate:function(n,e,t=2){const i=e&&e.length,s=i?e[0]*t:n.length;let r=tp(n,0,s,t,!0);const o=[];if(!r||r.next===r.prev)return o;let a,c,l,h,u,d,f;if(i&&(r=Pw(n,e,r,t)),n.length>80*t){a=l=n[0],c=h=n[1];for(let _=t;_<s;_+=t)u=n[_],d=n[_+1],u<a&&(a=u),d<c&&(c=d),u>l&&(l=u),d>h&&(h=d);f=Math.max(l-a,h-c),f=f!==0?32767/f:0}return Ir(r,o,t,a,c,f,0),o}};function tp(n,e,t,i,s){let r,o;if(s===Gw(n,e,t,i)>0)for(r=e;r<t;r+=i)o=$h(r,n[r],n[r+1],o);else for(r=t-i;r>=e;r-=i)o=$h(r,n[r],n[r+1],o);return o&&la(o,o.next)&&(Ur(o),o=o.next),o}function rs(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(la(t,t.next)||St(t.prev,t,t.next)===0)){if(Ur(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function Ir(n,e,t,i,s,r,o){if(!n)return;!o&&r&&Uw(n,i,s,r);let a=n,c,l;for(;n.prev!==n.next;){if(c=n.prev,l=n.next,r?Tw(n,i,s,r):bw(n)){e.push(c.i/t|0),e.push(n.i/t|0),e.push(l.i/t|0),Ur(n),n=l.next,a=l.next;continue}if(n=l,n===a){o?o===1?(n=Aw(rs(n),e,t),Ir(n,e,t,i,s,r,2)):o===2&&Rw(n,e,t,i,s,r):Ir(rs(n),e,t,i,s,r,1);break}}}function bw(n){const e=n.prev,t=n,i=n.next;if(St(e,t,i)>=0)return!1;const s=e.x,r=t.x,o=i.x,a=e.y,c=t.y,l=i.y,h=s<r?s<o?s:o:r<o?r:o,u=a<c?a<l?a:l:c<l?c:l,d=s>r?s>o?s:o:r>o?r:o,f=a>c?a>l?a:l:c>l?c:l;let _=i.next;for(;_!==e;){if(_.x>=h&&_.x<=d&&_.y>=u&&_.y<=f&&Cs(s,a,r,c,o,l,_.x,_.y)&&St(_.prev,_,_.next)>=0)return!1;_=_.next}return!0}function Tw(n,e,t,i){const s=n.prev,r=n,o=n.next;if(St(s,r,o)>=0)return!1;const a=s.x,c=r.x,l=o.x,h=s.y,u=r.y,d=o.y,f=a<c?a<l?a:l:c<l?c:l,_=h<u?h<d?h:d:u<d?u:d,M=a>c?a>l?a:l:c>l?c:l,p=h>u?h>d?h:d:u>d?u:d,m=ul(f,_,e,t,i),E=ul(M,p,e,t,i);let y=n.prevZ,S=n.nextZ;for(;y&&y.z>=m&&S&&S.z<=E;){if(y.x>=f&&y.x<=M&&y.y>=_&&y.y<=p&&y!==s&&y!==o&&Cs(a,h,c,u,l,d,y.x,y.y)&&St(y.prev,y,y.next)>=0||(y=y.prevZ,S.x>=f&&S.x<=M&&S.y>=_&&S.y<=p&&S!==s&&S!==o&&Cs(a,h,c,u,l,d,S.x,S.y)&&St(S.prev,S,S.next)>=0))return!1;S=S.nextZ}for(;y&&y.z>=m;){if(y.x>=f&&y.x<=M&&y.y>=_&&y.y<=p&&y!==s&&y!==o&&Cs(a,h,c,u,l,d,y.x,y.y)&&St(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;S&&S.z<=E;){if(S.x>=f&&S.x<=M&&S.y>=_&&S.y<=p&&S!==s&&S!==o&&Cs(a,h,c,u,l,d,S.x,S.y)&&St(S.prev,S,S.next)>=0)return!1;S=S.nextZ}return!0}function Aw(n,e,t){let i=n;do{const s=i.prev,r=i.next.next;!la(s,r)&&np(s,i,i.next,r)&&Dr(s,r)&&Dr(r,s)&&(e.push(s.i/t|0),e.push(i.i/t|0),e.push(r.i/t|0),Ur(i),Ur(i.next),i=n=r),i=i.next}while(i!==n);return rs(i)}function Rw(n,e,t,i,s,r){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Ow(o,a)){let c=ip(o,a);o=rs(o,o.next),c=rs(c,c.next),Ir(o,e,t,i,s,r,0),Ir(c,e,t,i,s,r,0);return}a=a.next}o=o.next}while(o!==n)}function Pw(n,e,t,i){const s=[];let r,o,a,c,l;for(r=0,o=e.length;r<o;r++)a=e[r]*i,c=r<o-1?e[r+1]*i:n.length,l=tp(n,a,c,i,!1),l===l.next&&(l.steiner=!0),s.push(Fw(l));for(s.sort(Cw),r=0;r<s.length;r++)t=Lw(s[r],t);return t}function Cw(n,e){return n.x-e.x}function Lw(n,e){const t=Iw(n,e);if(!t)return e;const i=ip(t,n);return rs(i,i.next),rs(t,t.next)}function Iw(n,e){let t=e,i=-1/0,s;const r=n.x,o=n.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){const d=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=r&&d>i&&(i=d,s=t.x<t.next.x?t:t.next,d===r))return s}t=t.next}while(t!==e);if(!s)return null;const a=s,c=s.x,l=s.y;let h=1/0,u;t=s;do r>=t.x&&t.x>=c&&r!==t.x&&Cs(o<l?r:i,o,c,l,o<l?i:r,o,t.x,t.y)&&(u=Math.abs(o-t.y)/(r-t.x),Dr(t,n)&&(u<h||u===h&&(t.x>s.x||t.x===s.x&&Dw(s,t)))&&(s=t,h=u)),t=t.next;while(t!==a);return s}function Dw(n,e){return St(n.prev,n,e.prev)<0&&St(e.next,n,n.next)<0}function Uw(n,e,t,i){let s=n;do s.z===0&&(s.z=ul(s.x,s.y,e,t,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,Nw(s)}function Nw(n){let e,t,i,s,r,o,a,c,l=1;do{for(t=n,n=null,r=null,o=0;t;){for(o++,i=t,a=0,e=0;e<l&&(a++,i=i.nextZ,!!i);e++);for(c=l;a>0||c>0&&i;)a!==0&&(c===0||!i||t.z<=i.z)?(s=t,t=t.nextZ,a--):(s=i,i=i.nextZ,c--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;t=i}r.nextZ=null,l*=2}while(o>1);return n}function ul(n,e,t,i,s){return n=(n-t)*s|0,e=(e-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function Fw(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function Cs(n,e,t,i,s,r,o,a){return(s-o)*(e-a)>=(n-o)*(r-a)&&(n-o)*(i-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(i-a)}function Ow(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!Bw(n,e)&&(Dr(n,e)&&Dr(e,n)&&zw(n,e)&&(St(n.prev,n,e.prev)||St(n,e.prev,e))||la(n,e)&&St(n.prev,n,n.next)>0&&St(e.prev,e,e.next)>0)}function St(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function la(n,e){return n.x===e.x&&n.y===e.y}function np(n,e,t,i){const s=Mo(St(n,e,t)),r=Mo(St(n,e,i)),o=Mo(St(t,i,n)),a=Mo(St(t,i,e));return!!(s!==r&&o!==a||s===0&&yo(n,t,e)||r===0&&yo(n,i,e)||o===0&&yo(t,n,i)||a===0&&yo(t,e,i))}function yo(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function Mo(n){return n>0?1:n<0?-1:0}function Bw(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&np(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function Dr(n,e){return St(n.prev,n,n.next)<0?St(n,e,n.next)>=0&&St(n,n.prev,e)>=0:St(n,e,n.prev)<0||St(n,n.next,e)<0}function zw(n,e){let t=n,i=!1;const s=(n.x+e.x)/2,r=(n.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function ip(n,e){const t=new hl(n.i,n.x,n.y),i=new hl(e.i,e.x,e.y),s=n.next,r=e.prev;return n.next=e,e.prev=n,t.next=s,s.prev=t,i.next=t,t.prev=i,r.next=i,i.prev=r,i}function $h(n,e,t,i){const s=new hl(n,e,t);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function Ur(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function hl(n,e,t){this.i=n,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Gw(n,e,t,i){let s=0;for(let r=e,o=t-i;r<t;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}class Os{static area(e){const t=e.length;let i=0;for(let s=t-1,r=0;r<t;s=r++)i+=e[s].x*e[r].y-e[r].x*e[s].y;return i*.5}static isClockWise(e){return Os.area(e)<0}static triangulateShape(e,t){const i=[],s=[],r=[];Kh(e),Zh(i,e);let o=e.length;t.forEach(Kh);for(let c=0;c<t.length;c++)s.push(o),o+=t[c].length,Zh(i,t[c]);const a=Ew.triangulate(i,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}}function Kh(n){const e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function Zh(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}class Gt extends Ln{constructor(e=new Nt([new De(.5,.5),new De(-.5,.5),new De(-.5,-.5),new De(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const i=this,s=[],r=[];for(let a=0,c=e.length;a<c;a++){const l=e[a];o(l)}this.setAttribute("position",new Rt(s,3)),this.setAttribute("uv",new Rt(r,2)),this.computeVertexNormals();function o(a){const c=[],l=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1;let d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,_=t.bevelSize!==void 0?t.bevelSize:f-.1,M=t.bevelOffset!==void 0?t.bevelOffset:0,p=t.bevelSegments!==void 0?t.bevelSegments:3;const m=t.extrudePath,E=t.UVGenerator!==void 0?t.UVGenerator:Hw;let y,S=!1,D,C,A,N;m&&(y=m.getSpacedPoints(h),S=!0,d=!1,D=m.computeFrenetFrames(h,!1),C=new q,A=new q,N=new q),d||(p=0,f=0,_=0,M=0);const te=a.extractPoints(l);let x=te.shape;const b=te.holes;if(!Os.isClockWise(x)){x=x.reverse();for(let Q=0,g=b.length;Q<g;Q++){const T=b[Q];Os.isClockWise(T)&&(b[Q]=T.reverse())}}const H=Os.triangulateShape(x,b),J=x;for(let Q=0,g=b.length;Q<g;Q++){const T=b[Q];x=x.concat(T)}function ie(Q,g,T){return g||console.error("THREE.ExtrudeGeometry: vec does not exist"),Q.clone().addScaledVector(g,T)}const G=x.length,K=H.length;function z(Q,g,T){let I,U,O;const j=Q.x-g.x,ee=Q.y-g.y,w=T.x-Q.x,v=T.y-Q.y,L=j*j+ee*ee,V=j*v-ee*w;if(Math.abs(V)>Number.EPSILON){const k=Math.sqrt(L),W=Math.sqrt(w*w+v*v),de=g.x-ee/k,he=g.y+j/k,ve=T.x-v/W,Ae=T.y+w/W,ge=((ve-de)*v-(Ae-he)*w)/(j*v-ee*w);I=de+j*ge-Q.x,U=he+ee*ge-Q.y;const Se=I*I+U*U;if(Se<=2)return new De(I,U);O=Math.sqrt(Se/2)}else{let k=!1;j>Number.EPSILON?w>Number.EPSILON&&(k=!0):j<-Number.EPSILON?w<-Number.EPSILON&&(k=!0):Math.sign(ee)===Math.sign(v)&&(k=!0),k?(I=-ee,U=j,O=Math.sqrt(L)):(I=j,U=ee,O=Math.sqrt(L/2))}return new De(I/O,U/O)}const pe=[];for(let Q=0,g=J.length,T=g-1,I=Q+1;Q<g;Q++,T++,I++)T===g&&(T=0),I===g&&(I=0),pe[Q]=z(J[Q],J[T],J[I]);const me=[];let _e,Me=pe.concat();for(let Q=0,g=b.length;Q<g;Q++){const T=b[Q];_e=[];for(let I=0,U=T.length,O=U-1,j=I+1;I<U;I++,O++,j++)O===U&&(O=0),j===U&&(j=0),_e[I]=z(T[I],T[O],T[j]);me.push(_e),Me=Me.concat(_e)}for(let Q=0;Q<p;Q++){const g=Q/p,T=f*Math.cos(g*Math.PI/2),I=_*Math.sin(g*Math.PI/2)+M;for(let U=0,O=J.length;U<O;U++){const j=ie(J[U],pe[U],I);F(j.x,j.y,-T)}for(let U=0,O=b.length;U<O;U++){const j=b[U];_e=me[U];for(let ee=0,w=j.length;ee<w;ee++){const v=ie(j[ee],_e[ee],I);F(v.x,v.y,-T)}}}const Pe=_+M;for(let Q=0;Q<G;Q++){const g=d?ie(x[Q],Me[Q],Pe):x[Q];S?(A.copy(D.normals[0]).multiplyScalar(g.x),C.copy(D.binormals[0]).multiplyScalar(g.y),N.copy(y[0]).add(A).add(C),F(N.x,N.y,N.z)):F(g.x,g.y,0)}for(let Q=1;Q<=h;Q++)for(let g=0;g<G;g++){const T=d?ie(x[g],Me[g],Pe):x[g];S?(A.copy(D.normals[Q]).multiplyScalar(T.x),C.copy(D.binormals[Q]).multiplyScalar(T.y),N.copy(y[Q]).add(A).add(C),F(N.x,N.y,N.z)):F(T.x,T.y,u/h*Q)}for(let Q=p-1;Q>=0;Q--){const g=Q/p,T=f*Math.cos(g*Math.PI/2),I=_*Math.sin(g*Math.PI/2)+M;for(let U=0,O=J.length;U<O;U++){const j=ie(J[U],pe[U],I);F(j.x,j.y,u+T)}for(let U=0,O=b.length;U<O;U++){const j=b[U];_e=me[U];for(let ee=0,w=j.length;ee<w;ee++){const v=ie(j[ee],_e[ee],I);S?F(v.x,v.y+y[h-1].y,y[h-1].x+T):F(v.x,v.y,u+T)}}}ne(),ue();function ne(){const Q=s.length/3;if(d){let g=0,T=G*g;for(let I=0;I<K;I++){const U=H[I];re(U[2]+T,U[1]+T,U[0]+T)}g=h+p*2,T=G*g;for(let I=0;I<K;I++){const U=H[I];re(U[0]+T,U[1]+T,U[2]+T)}}else{for(let g=0;g<K;g++){const T=H[g];re(T[2],T[1],T[0])}for(let g=0;g<K;g++){const T=H[g];re(T[0]+G*h,T[1]+G*h,T[2]+G*h)}}i.addGroup(Q,s.length/3-Q,0)}function ue(){const Q=s.length/3;let g=0;fe(J,g),g+=J.length;for(let T=0,I=b.length;T<I;T++){const U=b[T];fe(U,g),g+=U.length}i.addGroup(Q,s.length/3-Q,1)}function fe(Q,g){let T=Q.length;for(;--T>=0;){const I=T;let U=T-1;U<0&&(U=Q.length-1);for(let O=0,j=h+p*2;O<j;O++){const ee=G*O,w=G*(O+1),v=g+I+ee,L=g+U+ee,V=g+U+w,k=g+I+w;Y(v,L,V,k)}}}function F(Q,g,T){c.push(Q),c.push(g),c.push(T)}function re(Q,g,T){le(Q),le(g),le(T);const I=s.length/3,U=E.generateTopUV(i,s,I-3,I-2,I-1);ye(U[0]),ye(U[1]),ye(U[2])}function Y(Q,g,T,I){le(Q),le(g),le(I),le(g),le(T),le(I);const U=s.length/3,O=E.generateSideWallUV(i,s,U-6,U-3,U-2,U-1);ye(O[0]),ye(O[1]),ye(O[3]),ye(O[1]),ye(O[2]),ye(O[3])}function le(Q){s.push(c[Q*3+0]),s.push(c[Q*3+1]),s.push(c[Q*3+2])}function ye(Q){r.push(Q.x),r.push(Q.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return kw(t,i,e)}static fromJSON(e,t){const i=[];for(let r=0,o=e.shapes.length;r<o;r++){const a=t[e.shapes[r]];i.push(a)}const s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new cl[s.type]().fromJSON(s)),new Gt(i,e.options)}}const Hw={generateTopUV:function(n,e,t,i,s){const r=e[t*3],o=e[t*3+1],a=e[i*3],c=e[i*3+1],l=e[s*3],h=e[s*3+1];return[new De(r,o),new De(a,c),new De(l,h)]},generateSideWallUV:function(n,e,t,i,s,r){const o=e[t*3],a=e[t*3+1],c=e[t*3+2],l=e[i*3],h=e[i*3+1],u=e[i*3+2],d=e[s*3],f=e[s*3+1],_=e[s*3+2],M=e[r*3],p=e[r*3+1],m=e[r*3+2];return Math.abs(a-h)<Math.abs(o-l)?[new De(o,1-c),new De(l,1-u),new De(d,1-_),new De(M,1-m)]:[new De(a,1-c),new De(h,1-u),new De(f,1-_),new De(p,1-m)]}};function kw(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){const r=n[i];t.shapes.push(r.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class xe extends Ln{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const c=Math.min(o+a,Math.PI);let l=0;const h=[],u=new q,d=new q,f=[],_=[],M=[],p=[];for(let m=0;m<=i;m++){const E=[],y=m/i;let S=0;m===0&&o===0?S=.5/t:m===i&&c===Math.PI&&(S=-.5/t);for(let D=0;D<=t;D++){const C=D/t;u.x=-e*Math.cos(s+C*r)*Math.sin(o+y*a),u.y=e*Math.cos(o+y*a),u.z=e*Math.sin(s+C*r)*Math.sin(o+y*a),_.push(u.x,u.y,u.z),d.copy(u).normalize(),M.push(d.x,d.y,d.z),p.push(C+S,1-y),E.push(l++)}h.push(E)}for(let m=0;m<i;m++)for(let E=0;E<t;E++){const y=h[m][E+1],S=h[m][E],D=h[m+1][E],C=h[m+1][E+1];(m!==0||o>0)&&f.push(y,S,C),(m!==i-1||c<Math.PI)&&f.push(S,D,C)}this.setIndex(f),this.setAttribute("position",new Rt(_,3)),this.setAttribute("normal",new Rt(M,3)),this.setAttribute("uv",new Rt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xe(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Kl extends Ln{constructor(e=1,t=.4,i=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:r},i=Math.floor(i),s=Math.floor(s);const o=[],a=[],c=[],l=[],h=new q,u=new q,d=new q;for(let f=0;f<=i;f++)for(let _=0;_<=s;_++){const M=_/s*r,p=f/i*Math.PI*2;u.x=(e+t*Math.cos(p))*Math.cos(M),u.y=(e+t*Math.cos(p))*Math.sin(M),u.z=t*Math.sin(p),a.push(u.x,u.y,u.z),h.x=e*Math.cos(M),h.y=e*Math.sin(M),d.subVectors(u,h).normalize(),c.push(d.x,d.y,d.z),l.push(_/s),l.push(f/i)}for(let f=1;f<=i;f++)for(let _=1;_<=s;_++){const M=(s+1)*f+_-1,p=(s+1)*(f-1)+_-1,m=(s+1)*(f-1)+_,E=(s+1)*f+_;o.push(M,p,E),o.push(p,m,E)}this.setIndex(o),this.setAttribute("position",new Rt(a,3)),this.setAttribute("normal",new Rt(c,3)),this.setAttribute("uv",new Rt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Kl(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Nr extends Hr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Xe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Xe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Lf,this.normalScale=new De(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Le extends Nr{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new De(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return zt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Xe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Xe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Xe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}const Wo={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class Vw{constructor(e,t,i){const s=this;let r=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){const u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){const f=l[u],_=l[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return _}return null}}}const Ww=new Vw;class Zs{constructor(e){this.manager=e!==void 0?e:Ww,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Zs.DEFAULT_MATERIAL_NAME="__DEFAULT";const ci={};class Xw extends Error{constructor(e,t){super(e),this.response=t}}class qw extends Zs{constructor(e){super(e)}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=Wo.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(ci[e]!==void 0){ci[e].push({onLoad:t,onProgress:i,onError:s});return}ci[e]=[],ci[e].push({onLoad:t,onProgress:i,onError:s});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const h=ci[e],u=l.body.getReader(),d=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),f=d?parseInt(d):0,_=f!==0;let M=0;const p=new ReadableStream({start(m){E();function E(){u.read().then(({done:y,value:S})=>{if(y)m.close();else{M+=S.byteLength;const D=new ProgressEvent("progress",{lengthComputable:_,loaded:M,total:f});for(let C=0,A=h.length;C<A;C++){const N=h[C];N.onProgress&&N.onProgress(D)}m.enqueue(S),E()}},y=>{m.error(y)})}}});return new Response(p)}else throw new Xw(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return l.json();default:if(a===void 0)return l.text();{const u=/charset="?([^;"\s]*)"?/i.exec(a),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return l.arrayBuffer().then(_=>f.decode(_))}}}).then(l=>{Wo.add(e,l);const h=ci[e];delete ci[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onLoad&&f.onLoad(l)}}).catch(l=>{const h=ci[e];if(h===void 0)throw this.manager.itemError(e),l;delete ci[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onError&&f.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class sp extends Zs{constructor(e){super(e)}load(e,t,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=Wo.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a=Lr("img");function c(){h(),Wo.add(e,this),t&&t(this),r.manager.itemEnd(e)}function l(u){h(),s&&s(u),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}}class Yw extends Zs{constructor(e){super(e)}load(e,t,i,s){const r=new Xl;r.colorSpace=Fn;const o=new sp(this.manager);o.setCrossOrigin(this.crossOrigin),o.setPath(this.path);let a=0;function c(l){o.load(e[l],function(h){r.images[l]=h,a++,a===6&&(r.needsUpdate=!0,t&&t(r))},void 0,s)}for(let l=0;l<e.length;++l)c(l);return r}}class kr extends Zs{constructor(e){super(e)}load(e,t,i,s){const r=new cn,o=new sp(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},i,s),r}}class Zl extends Jt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Xe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const rc=new Mt,Jh=new q,Qh=new q;class rp{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new De(512,512),this.map=null,this.mapPass=null,this.matrix=new Mt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ql,this._frameExtents=new De(1,1),this._viewportCount=1,this._viewports=[new ut(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Jh.setFromMatrixPosition(e.matrixWorld),t.position.copy(Jh),Qh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Qh),t.updateMatrixWorld(),rc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(rc),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(rc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const ed=new Mt,ar=new q,oc=new q;class jw extends rp{constructor(){super(new vt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new De(4,2),this._viewportCount=6,this._viewports=[new ut(2,1,1,1),new ut(0,1,1,1),new ut(3,1,1,1),new ut(1,1,1,1),new ut(3,0,1,1),new ut(1,0,1,1)],this._cubeDirections=[new q(1,0,0),new q(-1,0,0),new q(0,0,1),new q(0,0,-1),new q(0,1,0),new q(0,-1,0)],this._cubeUps=[new q(0,1,0),new q(0,1,0),new q(0,1,0),new q(0,1,0),new q(0,0,1),new q(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,s=this.matrix,r=e.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),ar.setFromMatrixPosition(e.matrixWorld),i.position.copy(ar),oc.copy(i.position),oc.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(oc),i.updateMatrixWorld(),s.makeTranslation(-ar.x,-ar.y,-ar.z),ed.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ed)}}class Wn extends Zl{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new jw}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class $w extends rp{constructor(){super(new Xf(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class wn extends Zl{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Jt.DEFAULT_UP),this.updateMatrix(),this.target=new Jt,this.shadow=new $w}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class En extends Zl{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Kw{constructor(){this.type="ShapePath",this.color=new Xe,this.subPaths=[],this.currentPath=null}moveTo(e,t){return this.currentPath=new ll,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,i,s){return this.currentPath.quadraticCurveTo(e,t,i,s),this}bezierCurveTo(e,t,i,s,r,o){return this.currentPath.bezierCurveTo(e,t,i,s,r,o),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e){function t(m){const E=[];for(let y=0,S=m.length;y<S;y++){const D=m[y],C=new Nt;C.curves=D.curves,E.push(C)}return E}function i(m,E){const y=E.length;let S=!1;for(let D=y-1,C=0;C<y;D=C++){let A=E[D],N=E[C],te=N.x-A.x,x=N.y-A.y;if(Math.abs(x)>Number.EPSILON){if(x<0&&(A=E[C],te=-te,N=E[D],x=-x),m.y<A.y||m.y>N.y)continue;if(m.y===A.y){if(m.x===A.x)return!0}else{const b=x*(m.x-A.x)-te*(m.y-A.y);if(b===0)return!0;if(b<0)continue;S=!S}}else{if(m.y!==A.y)continue;if(N.x<=m.x&&m.x<=A.x||A.x<=m.x&&m.x<=N.x)return!0}}return S}const s=Os.isClockWise,r=this.subPaths;if(r.length===0)return[];let o,a,c;const l=[];if(r.length===1)return a=r[0],c=new Nt,c.curves=a.curves,l.push(c),l;let h=!s(r[0].getPoints());h=e?!h:h;const u=[],d=[];let f=[],_=0,M;d[_]=void 0,f[_]=[];for(let m=0,E=r.length;m<E;m++)a=r[m],M=a.getPoints(),o=s(M),o=e?!o:o,o?(!h&&d[_]&&_++,d[_]={s:new Nt,p:M},d[_].s.curves=a.curves,h&&_++,f[_]=[]):f[_].push({h:a,p:M[0]});if(!d[0])return t(r);if(d.length>1){let m=!1,E=0;for(let y=0,S=d.length;y<S;y++)u[y]=[];for(let y=0,S=d.length;y<S;y++){const D=f[y];for(let C=0;C<D.length;C++){const A=D[C];let N=!0;for(let te=0;te<d.length;te++)i(A.p,d[te].p)&&(y!==te&&E++,N?(N=!1,u[te].push(A)):m=!0);N&&u[y].push(A)}}E>0&&m===!1&&(f=u)}let p;for(let m=0,E=d.length;m<E;m++){c=d[m].s,l.push(c),p=f[m];for(let y=0,S=p.length;y<S;y++)c.holes.push(p[y].h)}return l}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Nl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Nl);class Xn extends Zs{constructor(e){super(e)}load(e,t,i,s){const r=this,o=new qw(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(a){const c=r.parse(JSON.parse(a));t&&t(c)},i,s)}parse(e){return new Zw(e)}}class Zw{constructor(e){this.isFont=!0,this.type="Font",this.data=e}generateShapes(e,t=100){const i=[],s=Jw(e,t,this.data);for(let r=0,o=s.length;r<o;r++)i.push(...s[r].toShapes());return i}}function Jw(n,e,t){const i=Array.from(n),s=e/t.resolution,r=(t.boundingBox.yMax-t.boundingBox.yMin+t.underlineThickness)*s,o=[];let a=0,c=0;for(let l=0;l<i.length;l++){const h=i[l];if(h===`
`)a=0,c-=r;else{const u=Qw(h,s,a,c,t);a+=u.offsetX,o.push(u.path)}}return o}function Qw(n,e,t,i,s){const r=s.glyphs[n]||s.glyphs["?"];if(!r){console.error('THREE.Font: character "'+n+'" does not exists in font family '+s.familyName+".");return}const o=new Kw;let a,c,l,h,u,d,f,_;if(r.o){const M=r._cachedOutline||(r._cachedOutline=r.o.split(" "));for(let p=0,m=M.length;p<m;)switch(M[p++]){case"m":a=M[p++]*e+t,c=M[p++]*e+i,o.moveTo(a,c);break;case"l":a=M[p++]*e+t,c=M[p++]*e+i,o.lineTo(a,c);break;case"q":l=M[p++]*e+t,h=M[p++]*e+i,u=M[p++]*e+t,d=M[p++]*e+i,o.quadraticCurveTo(u,d,l,h);break;case"b":l=M[p++]*e+t,h=M[p++]*e+i,u=M[p++]*e+t,d=M[p++]*e+i,f=M[p++]*e+t,_=M[p++]*e+i,o.bezierCurveTo(u,d,f,_,l,h);break}}return{offsetX:r.ha*e,path:o}}class xt extends Gt{constructor(e,t={}){const i=t.font;if(i===void 0)super();else{const s=i.generateShapes(e,t.size);t.depth===void 0&&t.height!==void 0&&console.warn("THREE.TextGeometry: .height is now depreciated. Please use .depth instead"),t.depth=t.depth!==void 0?t.depth:t.height!==void 0?t.height:50,t.bevelThickness===void 0&&(t.bevelThickness=10),t.bevelSize===void 0&&(t.bevelSize=8),t.bevelEnabled===void 0&&(t.bevelEnabled=!1),super(s,t)}this.type="TextGeometry"}}const e1=kt({__name:"PinkBear",props:{background:{type:Boolean,default:!1},cameraPosition:{type:Number,default:4},bodyPosition:{type:Object,default:()=>({x:0,y:0,z:0})}},setup(n){const e=n,t=et(null);return qt(()=>{if(t.value){let i=function(){requestAnimationFrame(i),f.rotation.y+=.03,h.uniforms.time.value+=.03,o.render(s,r)};const s=new Sn,r=new vt(75,window.innerWidth/window.innerHeight,.1,1e3),o=new Mn({antialias:!0,alpha:!0});o.setSize(window.innerWidth,window.innerHeight),o.toneMapping=as,o.toneMappingExposure=1.25,t.value.appendChild(o.domElement);const a=new En(16777215,.6);s.add(a);const c=new wn(16777215,1.5);c.position.set(5,5,5),s.add(c);const l=new Wn(16777215,2,50);l.position.set(0,2,4),s.add(l);const h=new Pt({uniforms:{time:{value:0},color1:{value:new Xe(16766720)},color2:{value:new Xe(16007990)}},vertexShader:`
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
        `}),u=new Le({color:16738740,metalness:.2,roughness:.5,clearcoat:.1,clearcoatRoughness:.8,transparent:!0,opacity:.99}),d=new Le({color:13369344,metalness:.4,roughness:.3,clearcoat:.3,clearcoatRoughness:.2,transparent:!0,opacity:.99}),f=new $e,_=new xe(1,32,32),M=new P(_,u);M.scale.set(.85,.85,.8),M.position.y=-.2,f.add(M);const p=new xe(.6,32,32),m=new P(p,u);m.scale.set(1,.95,.95),m.position.set(0,1,0),f.add(m);const E=new xe(.25,32,32),y=new P(E,u);y.position.set(-.45,1.35,-.1),f.add(y);const S=new P(E,u);S.position.set(.45,1.35,-.1),f.add(S);const D=new xe(.25,32,32),C=new P(D,u);C.scale.set(1,.6,.8),C.position.set(0,.85,.5),f.add(C);const A=new Nt;A.moveTo(0,0),A.bezierCurveTo(0,-.3,-.6,-.3,-.6,0),A.bezierCurveTo(-.6,.3,0,.6,0,1),A.bezierCurveTo(0,.6,.6,.3,.6,0),A.bezierCurveTo(.6,-.3,0,-.3,0,0);const N={depth:.4,bevelEnabled:!0,bevelSegments:2,steps:2,bevelSize:.1,bevelThickness:.1},te=new Gt(A,N),x=new P(te,d);x.scale.set(.5,.5,.5),x.position.set(0,.34,.8),x.rotation.y=Math.PI,x.rotation.x=Math.PI,f.add(x);const b=new xe(.35,32,32),X=new P(b,u);X.scale.set(.75,1.25,.65),X.position.set(-.7,-.15,.2),f.add(X);const H=new P(b,u);H.scale.set(.75,1.25,.65),H.position.set(.7,-.15,.2),f.add(H);const J=new ln(.2,.22,.6,32),ie=new P(J,u);ie.position.set(-.4,-1.05,0),f.add(ie);const G=new P(J,u);G.position.set(.4,-1.05,0),f.add(G);const K=new xe(.3,32,32),z=new P(K,u);z.scale.set(1,.72,1.5),z.position.set(-.4,-1.45,.17),f.add(z);const pe=new P(K,u);pe.scale.set(1,.72,1.5),pe.position.set(.4,-1.45,.17),f.add(pe);const me=new xe(.44,32,32),_e=new P(me,u);_e.position.set(-.15,-.45,-.4),f.add(_e);const Me=new P(me,u);Me.position.set(.15,-.45,-.4),f.add(Me);const Pe=new xe(.18,32,32),ne=new P(Pe,d);ne.position.set(0,-.35,-.8),f.add(ne),new Xn().load("https://threejs.org/examples/fonts/helvetiker_bold.typeface.json",function(Y){const le=new xt("X",{font:Y,size:.2,depth:.05}),ye=new dt({color:0}),Q=new P(le,ye);Q.position.set(-.34,1,.5),f.add(Q)});const fe=new xe(.1,32,32),F=new dt({color:0}),re=new P(fe,F);re.position.set(.2,1.1,.54),f.add(re),s.add(f),i(),f.position.set(e.bodyPosition.x,e.bodyPosition.y,e.bodyPosition.z),r.position.set(e.bodyPosition.x,1,e.cameraPosition),r.lookAt(e.bodyPosition.x,0,0),yt(()=>e.bodyPosition,Y=>{f.position.set(Y.x,Y.y,Y.z)}),yt(()=>e.cameraPosition,Y=>{r.position.set(e.bodyPosition.x,1,Y),r.lookAt(e.bodyPosition.x,0,0)}),window.addEventListener("resize",()=>{r.aspect=window.innerWidth/window.innerHeight,r.updateProjectionMatrix(),o.setSize(window.innerWidth,window.innerHeight)})}}),(i,s)=>(Yt(),en("div",{ref_key:"threeCanvas",ref:t,class:yn(n.background?"no-bg":"three-canvas")},null,2))}}),op=tn(e1,[["__scopeId","data-v-d0efbfd4"]]),t1=kt({__name:"PurpleBear",props:{background:{type:Boolean,default:!1},cameraPosition:{type:Number,default:4},bodyPosition:{type:Object,default:()=>({x:0,y:0,z:0})}},setup(n){const e=n,t=et(null);return qt(()=>{if(t.value){let i=function(){requestAnimationFrame(i),f.rotation.y+=.03,h.uniforms.time.value+=.03,o.render(s,r)};const s=new Sn,r=new vt(75,window.innerWidth/window.innerHeight,.1,1e3),o=new Mn({antialias:!0,alpha:!0});o.setSize(window.innerWidth,window.innerHeight),o.toneMapping=as,o.toneMappingExposure=1.25,t.value.appendChild(o.domElement);const a=new En(16777215,.6);s.add(a);const c=new wn(16777215,1.5);c.position.set(5,5,5),s.add(c);const l=new Wn(16777215,2,50);l.position.set(0,2,4),s.add(l);const h=new Pt({uniforms:{time:{value:0},color1:{value:new Xe(16766720)},color2:{value:new Xe(16007990)}},vertexShader:`
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
            `}),u=new Le({color:10573288,metalness:.2,roughness:.5,clearcoat:.1,clearcoatRoughness:.8,transparent:!0,opacity:.99});new Le({color:16766720,metalness:.4,roughness:.3,clearcoat:.3,clearcoatRoughness:.2,transparent:!0,opacity:.99});const d=new Le({color:16766720,metalness:.05,roughness:10,clearcoat:.6,clearcoatRoughness:.1,opacity:1,transparent:!1}),f=new $e,_=new xe(1,32,32),M=new P(_,u);M.scale.set(.85,.85,.8),M.position.y=-.2,f.add(M);const p=new xe(.6,32,32),m=new P(p,u);m.scale.set(1,.95,.95),m.position.set(0,1,0),f.add(m);const E=new xe(.25,32,32),y=new P(E,u);y.position.set(-.45,1.35,-.1),f.add(y);const S=new P(E,u);S.position.set(.45,1.35,-.1),f.add(S);const D=new xe(.25,32,32),C=new P(D,u);C.scale.set(1,.6,.8),C.position.set(0,.85,.5),f.add(C);const A=new Nt;A.moveTo(0,0),A.bezierCurveTo(0,-.3,-.6,-.3,-.6,0),A.bezierCurveTo(-.6,.3,0,.6,0,1),A.bezierCurveTo(0,.6,.6,.3,.6,0),A.bezierCurveTo(.6,-.3,0,-.3,0,0);const N={depth:.4,bevelEnabled:!0,bevelSegments:2,steps:2,bevelSize:.1,bevelThickness:.1},te=new Gt(A,N),x=new P(te,h);x.scale.set(.5,.5,.5),x.position.set(0,.34,.8),x.rotation.y=Math.PI,x.rotation.x=Math.PI,f.add(x);const b=new xe(.35,32,32),X=new P(b,u);X.scale.set(.75,1.25,.65),X.position.set(-.7,-.15,.2),f.add(X);const H=new P(b,u);H.scale.set(.75,1.25,.65),H.position.set(.7,-.15,.2),f.add(H);const J=new ln(.2,.22,.6,32),ie=new P(J,u);ie.position.set(-.4,-1.05,0),f.add(ie);const G=new P(J,u);G.position.set(.4,-1.05,0),f.add(G);const K=new xe(.3,32,32),z=new P(K,u);z.scale.set(1,.72,1.5),z.position.set(-.4,-1.45,.17),f.add(z);const pe=new P(K,u);pe.scale.set(1,.72,1.5),pe.position.set(.4,-1.45,.17),f.add(pe);const me=new xe(.44,32,32),_e=new P(me,u);_e.position.set(-.15,-.45,-.4),f.add(_e);const Me=new P(me,u);Me.position.set(.15,-.45,-.4),f.add(Me);const Pe=new xe(.18,32,32),ne=new P(Pe,d);ne.position.set(0,-.35,-.8),f.add(ne),new Xn().load("https://threejs.org/examples/fonts/helvetiker_bold.typeface.json",function(fe){const F=new xt("X",{font:fe,size:.2,depth:.05}),re=new dt({color:0}),Y=new P(F,re);Y.position.set(-.34,1,.5),f.add(Y);const le=new xt("O",{font:fe,size:.2,depth:.05}),ye=new dt({color:0}),Q=new P(le,ye);Q.position.set(.16,1,.53),Q.rotation.y=Ye.degToRad(32),f.add(Q)}),s.add(f),i(),f.position.set(e.bodyPosition.x,e.bodyPosition.y,e.bodyPosition.z),r.position.set(e.bodyPosition.x,1,e.cameraPosition),r.lookAt(e.bodyPosition.x,0,0),yt(()=>e.bodyPosition,fe=>{f.position.set(fe.x,fe.y,fe.z)}),yt(()=>e.cameraPosition,fe=>{r.position.set(e.bodyPosition.x,1,fe),r.lookAt(e.bodyPosition.x,0,0)}),window.addEventListener("resize",()=>{r.aspect=window.innerWidth/window.innerHeight,r.updateProjectionMatrix(),o.setSize(window.innerWidth,window.innerHeight)})}}),(i,s)=>(Yt(),en("div",{ref_key:"threeCanvas",ref:t,class:yn(n.background?"no-bg":"three-canvas")},null,2))}}),ap=tn(t1,[["__scopeId","data-v-46de1bfd"]]),n1=kt({__name:"BlueBear",props:{background:{type:Boolean,default:!1},cameraPosition:{type:Number,default:4},bodyPosition:{type:Object,default:()=>({x:0,y:0,z:0})}},setup(n){const e=n,t=et(null);return qt(()=>{if(t.value){let i=function(){requestAnimationFrame(i),f.rotation.y+=.03,h.uniforms.time.value+=.04,o.render(s,r)};const s=new Sn,r=new vt(75,window.innerWidth/window.innerHeight,.1,1e3),o=new Mn({antialias:!0,alpha:!0});o.setSize(window.innerWidth,window.innerHeight),o.toneMapping=as,o.toneMappingExposure=1.25,t.value.appendChild(o.domElement);const a=new En(16777215,.6);s.add(a);const c=new wn(16777215,1.2);c.position.set(5,5,5),s.add(c);const l=new Wn(16777215,2,50);l.position.set(0,2,4),s.add(l);const h=new Pt({uniforms:{time:{value:0},color1:{value:new Xe(16766720)},color2:{value:new Xe(16007990)}},vertexShader:`
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
        `}),u=new Le({color:52945,metalness:.2,roughness:.5,clearcoat:.1,clearcoatRoughness:.8,transparent:!0,opacity:.99}),d=new Le({color:16745921,metalness:.5,roughness:30,clearcoat:.6,clearcoatRoughness:.1,opacity:1,transparent:!1}),f=new $e,_=new xe(1,32,32),M=new P(_,u);M.scale.set(.85,.85,.8),M.position.y=-.2,f.add(M);const p=new xe(.6,32,32),m=new P(p,u);m.scale.set(1,.95,.95),m.position.set(0,1,0),f.add(m);const E=new xe(.25,32,32),y=new P(E,u);y.position.set(-.45,1.35,-.1),f.add(y);const S=new P(E,u);S.position.set(.45,1.35,-.1),f.add(S);const D=new xe(.25,32,32),C=new P(D,u);C.scale.set(1,.6,.8),C.position.set(0,.85,.5),f.add(C);const A=new Nt;A.moveTo(0,0),A.bezierCurveTo(0,-.3,-.6,-.3,-.6,0),A.bezierCurveTo(-.6,.3,0,.6,0,1),A.bezierCurveTo(0,.6,.6,.3,.6,0),A.bezierCurveTo(.6,-.3,0,-.3,0,0);const N={depth:.4,bevelEnabled:!0,bevelSegments:2,steps:2,bevelSize:.1,bevelThickness:.1},te=new Gt(A,N),x=new P(te,d);x.scale.set(.5,.5,.5),x.position.set(0,.34,.8),x.rotation.y=Math.PI,x.rotation.x=Math.PI,f.add(x);const b=new xe(.35,32,32),X=new P(b,u);X.scale.set(.75,1.25,.65),X.position.set(-.7,-.15,.2),f.add(X);const H=new P(b,u);H.scale.set(.75,1.25,.65),H.position.set(.7,-.15,.2),f.add(H);const J=new ln(.2,.22,.6,32),ie=new P(J,u);ie.position.set(-.4,-1.05,0),f.add(ie);const G=new P(J,u);G.position.set(.4,-1.05,0),f.add(G);const K=new xe(.3,32,32),z=new P(K,u);z.scale.set(1,.72,1.5),z.position.set(-.4,-1.45,.17),f.add(z);const pe=new P(K,u);pe.scale.set(1,.72,1.5),pe.position.set(.4,-1.45,.17),f.add(pe);const me=new xe(.44,32,32),_e=new P(me,u);_e.position.set(-.15,-.45,-.4),f.add(_e);const Me=new P(me,u);Me.position.set(.15,-.45,-.4),f.add(Me);const Pe=new xe(.18,32,32),ne=new P(Pe,d);ne.position.set(0,-.35,-.8),f.add(ne),new Xn().load("https://threejs.org/examples/fonts/helvetiker_bold.typeface.json",function(fe){const F=new xt("X",{font:fe,size:.2,depth:.05}),re=new dt({color:0}),Y=new P(F,re);Y.position.set(-.34,1,.5),f.add(Y);const le=new xt("X",{font:fe,size:.2,depth:.05}),ye=new dt({color:0}),Q=new P(le,ye);Q.position.set(.16,1,.53),Q.rotation.y=Ye.degToRad(32),f.add(Q)}),s.add(f),i(),f.position.set(e.bodyPosition.x,e.bodyPosition.y,e.bodyPosition.z),r.position.set(e.bodyPosition.x,1,e.cameraPosition),r.lookAt(e.bodyPosition.x,0,0),yt(()=>e.bodyPosition,fe=>{f.position.set(fe.x,fe.y,fe.z)}),yt(()=>e.cameraPosition,fe=>{r.position.set(e.bodyPosition.x,1,fe),r.lookAt(e.bodyPosition.x,0,0)}),window.addEventListener("resize",()=>{r.aspect=window.innerWidth/window.innerHeight,r.updateProjectionMatrix(),o.setSize(window.innerWidth,window.innerHeight)})}}),(i,s)=>(Yt(),en("div",{ref_key:"threeCanvas",ref:t,class:yn(n.background?"no-bg":"three-canvas")},null,2))}}),i1=tn(n1,[["__scopeId","data-v-369ed91d"]]),s1={key:0,class:"bear-face-container"},r1=kt({__name:"BearFace",setup(n){const e=et(null),t=et(!1),i=()=>{t.value=!0};return qt(()=>{const s=e.value;if(s){s.width=window.innerWidth,s.height=window.innerHeight*.6;const r=s.getContext("2d");r&&(()=>{const a=s.width/2,c=s.height/1.9,l=s.height/2.5,h=s.height/2.58,u=l*.45,d=l*.18,f=l*.3,_=l*.275,M=f*.35,p=f*.32;r.save(),r.beginPath(),r.rect(0,0,s.width/2,s.height),r.clip(),r.lineWidth=15,r.strokeStyle="#000000",r.beginPath(),r.arc(a-l*.85,c-h*.8,u,0,Math.PI*2,!0),r.stroke(),r.beginPath(),r.arc(a+l*.85,c-l*.8,u,0,Math.PI*2,!0),r.stroke(),r.lineWidth=15,r.beginPath(),r.arc(a,c,h,0,Math.PI*2,!0),r.stroke(),r.lineWidth=15,r.beginPath(),r.arc(a-l*.4,c-l*.2,d,0,Math.PI*2,!0),r.stroke(),r.beginPath(),r.moveTo(a+l*.2,c-l*.3),r.lineTo(a+l*.5,c-l*.05),r.moveTo(a+l*.5,c-l*.3),r.lineTo(a+l*.2,c-l*.05),r.stroke(),r.beginPath(),r.ellipse(a,c+l*.4,_*1.5,_,0,0,Math.PI*2),r.stroke(),r.beginPath(),r.arc(a,c+l*.3,p,0,Math.PI*2,!0),r.stroke(),r.restore(),r.save(),r.beginPath(),r.rect(s.width/2,0,s.width/2,s.height),r.clip(),r.fillStyle="#FF69B4",r.beginPath(),r.arc(a-l*.85,c-l*.8,u,0,Math.PI*2,!0),r.fill(),r.beginPath(),r.arc(a+l*.85,c-l*.8,u,0,Math.PI*2,!0),r.fill(),r.beginPath(),r.arc(a,c,l,0,Math.PI*2,!0),r.fill(),r.fillStyle="#000000",r.beginPath(),r.arc(a-l*.4,c-l*.2,d,0,Math.PI*2,!0),r.fill(),r.lineWidth=15,r.beginPath(),r.moveTo(a+l*.2,c-l*.3),r.lineTo(a+l*.5,c-l*.05),r.moveTo(a+l*.5,c-l*.3),r.lineTo(a+l*.2,c-l*.05),r.strokeStyle="#000000",r.stroke(),r.fillStyle="#F0E68C",r.beginPath(),r.ellipse(a,c+l*.4,f*1.5,f,0,0,Math.PI*2),r.fill(),r.fillStyle="#000000",r.beginPath(),r.arc(a,c+l*.3,M*1.2,0,Math.PI*2,!0),r.fill(),r.restore()})()}}),(s,r)=>t.value?l0("",!0):(Yt(),en("div",s1,[Ut("canvas",{ref_key:"bearCanvas",ref:e},null,512),Ut("button",{onClick:i,class:"pixel-button"},"Enter")]))}}),o1=tn(r1,[["__scopeId","data-v-9cd3b2cf"]]),cp=et(window.matchMedia("only screen and (max-width: 475px)").matches),lp=et(window.matchMedia("only screen and (max-width: 580px)").matches),up=et(window.matchMedia("only screen and (max-width: 670px)").matches),hp=et(window.matchMedia("only screen and (max-width: 768px)").matches),dp=et(window.matchMedia("only screen and (max-width: 850px)").matches),fp=et(window.matchMedia("only screen and (max-width: 1024px)").matches),a1=new ResizeObserver(()=>{cp.value=window.matchMedia("only screen and (max-width: 475px)").matches,lp.value=window.matchMedia("only screen and (max-width: 580px)").matches,up.value=window.matchMedia("only screen and (max-width: 670px)").matches,hp.value=window.matchMedia("only screen and (max-width: 768px)").matches,dp.value=window.matchMedia("only screen and (max-width: 850px)").matches,fp.value=window.matchMedia("only screen and (max-width: 1024px)").matches});a1.observe(document.documentElement);Wt(()=>cp.value);const ac=Wt(()=>lp.value);Wt(()=>hp.value);Wt(()=>fp.value);Wt(()=>up.value);const cc=Wt(()=>dp.value),c1={class:"flex"},l1=kt({__name:"ThreeScene",setup(n){const e=et(!0);let t;const i=()=>{e.value=!e.value};return qt(()=>{t=setInterval(()=>{i()},3e3)}),Qo(()=>{clearInterval(t)}),(s,r)=>(Yt(),en("div",c1,[At(o1,{class:"bear-background"}),At(op,{background:!0,cameraPosition:An(ac)?13:An(cc)?8:6,bodyPosition:{x:-15,y:0,z:0},class:"bear-page"},null,8,["cameraPosition"]),At(ap,{background:!0,cameraPosition:An(ac)?10:An(cc)?6:4,bodyPosition:{x:-15,y:0,z:0},class:"bear-page"},null,8,["cameraPosition"]),At(i1,{background:!0,cameraPosition:An(ac)?13:An(cc)?8:6,bodyPosition:{x:-18,y:0,z:0},class:"bear-page"},null,8,["cameraPosition"])]))}}),u1=tn(l1,[["__scopeId","data-v-d3ef8993"]]),h1=`
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,d1=`
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
`,f1=kt({__name:"DiamondBear",setup(n){const e=et(null);return qt(()=>{const t=new Sn,i=new vt(75,window.innerWidth/window.innerHeight,.1,1e3),s=new Mn({antialias:!0,alpha:!0});s.setSize(window.innerWidth,window.innerHeight),e.value&&e.value.appendChild(s.domElement);const r=new En(16777215,5);t.add(r);const o=new wn(16777215,20);o.position.set(5,5,5),t.add(o);const a=new Pt({uniforms:{time:{value:0}},vertexShader:h1,fragmentShader:d1,transparent:!0,opacity:.1}),c=new $e,l=new xe(1,32,32),h=new P(l,a);h.scale.set(.85,.85,.8),h.position.y=-.2,c.add(h);const u=new xe(.6,32,32),d=new P(u,a);d.scale.set(1,.95,.95),d.position.set(0,1,0),c.add(d);const f=new xe(.25,32,32),_=new P(f,a);_.position.set(-.45,1.35,-.1),c.add(_);const M=new P(f,a);M.position.set(.45,1.35,-.1),c.add(M);const p=new xe(.25,32,32),m=new P(p,a);m.scale.set(1,.6,.8),m.position.set(0,.85,.5),c.add(m);const E=new xe(.35,32,32),y=new P(E,a);y.scale.set(.75,1.25,.65),y.position.set(-.7,-.15,.2),c.add(y);const S=new P(E,a);S.scale.set(.75,1.25,.65),S.position.set(.7,-.15,.2),c.add(S);const D=new xe(.3,32,32),C=new P(D,a);C.scale.set(1,.72,1.5),C.position.set(-.4,-1.45,.17),c.add(C);const A=new P(D,a);A.scale.set(1,.72,1.5),A.position.set(.4,-1.45,.17),c.add(A);const N=new ln(.2,.22,.6,32),te=new P(N,a);te.position.set(-.4,-1.05,0),c.add(te);const x=new P(N,a);x.position.set(.4,-1.05,0),c.add(x);const b=new xe(.44,32,32),X=new P(b,a);X.position.set(-.15,-.45,-.4),c.add(X);const H=new P(b,a);H.position.set(.15,-.45,-.4),c.add(H);const J=new xe(.18,32,32),ie=new P(J,a);ie.position.set(0,-.35,-.75),c.add(ie);const G=new Nr({color:16738740,metalness:1,roughness:.44}),K=new Nr({color:16776960,metalness:1,roughness:.44}),z=new Nt;z.moveTo(0,.15),z.lineTo(.1,0),z.lineTo(0,-.15),z.lineTo(-.1,0),z.lineTo(0,.15);const pe={depth:.07,bevelEnabled:!1},me=new Gt(z,pe),_e=new P(me,G);_e.position.set(-.25,1,.5),_e.rotation.y=Math.PI/30,c.add(_e);const Me=new P(me,K);Me.position.set(.25,1,.5),Me.rotation.y=Math.PI/30,c.add(Me),t.add(c),i.position.set(0,1,4),i.lookAt(0,0,0);function Pe(){requestAnimationFrame(Pe),a.uniforms.time.value+=.1,c.rotation.y+=.02,s.render(t,i)}Pe(),window.addEventListener("resize",()=>{i.aspect=window.innerWidth/window.innerHeight,i.updateProjectionMatrix(),s.setSize(window.innerWidth,window.innerHeight)})}),(t,i)=>(Yt(),en("div",{ref_key:"threeCanvas",ref:e,class:"three-container"},null,512))}}),p1=tn(f1,[["__scopeId","data-v-a7796925"]]),td=`
  varying vec2 vUv;
        void main() {
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
  `,nd=`
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
  `,m1=kt({__name:"GlassBear",setup(n){const e=et(null);return qt(()=>{const t=new Sn,i=new vt(75,window.innerWidth/window.innerHeight,.1,1e3),s=new Mn({antialias:!0,alpha:!0});s.setSize(window.innerWidth,window.innerHeight),e.value&&e.value.appendChild(s.domElement);const r=new En(16777215,.5);t.add(r);const o=new wn(16777215,10);o.position.set(5,5,5),t.add(o);const a=new Pt({uniforms:{time:{value:0},opacity:{value:.8}},vertexShader:td,fragmentShader:nd,transparent:!0}),c=new Pt({uniforms:{time:{value:0},opacity:{value:.6}},vertexShader:td,fragmentShader:nd,transparent:!0,depthWrite:!1}),l=new $e,h=new xe(1,32,32),u=new P(h,c);u.scale.set(.85,.85,.8),u.position.y=-.2,l.add(u);const d=new xe(.6,32,32),f=new P(d,c);f.scale.set(1,.95,.95),f.position.set(0,1,0),l.add(f);const _=new xe(.25,32,32),M=new P(_,a);M.position.set(-.45,1.35,-.1),l.add(M);const p=new P(_,c);p.position.set(.45,1.35,-.1),l.add(p);const m=new xe(.25,32,32),E=new P(m,a);E.scale.set(1,.6,.8),E.position.set(0,.85,.5),l.add(E);const y=new xe(.35,32,32),S=new P(y,a);S.scale.set(.75,1.25,.65),S.position.set(-.7,-.15,.2),l.add(S);const D=new P(y,a);D.scale.set(.75,1.25,.65),D.position.set(.7,-.15,.2),l.add(D);const C=new xe(.3,32,32),A=new P(C,a);A.scale.set(1,.72,1.5),A.position.set(-.4,-1.45,.17),l.add(A);const N=new P(C,a);N.scale.set(1,.72,1.5),N.position.set(.4,-1.45,.17),l.add(N);const te=new ln(.2,.22,.6,32),x=new P(te,a);x.position.set(-.4,-1.05,0),l.add(x);const b=new P(te,a);b.position.set(.4,-1.05,0),l.add(b);const X=new xe(.44,32,32);new P(X,a).position.set(-.15,-.45,-.4),new P(X,a).position.set(.15,-.45,-.4);const ie=new xe(.18,32,32),G=new P(ie,a);G.position.set(0,-.35,-.75),l.add(G);const K=new Nt;K.moveTo(0,0),K.bezierCurveTo(0,-.3,-.6,-.3,-.6,0),K.bezierCurveTo(-.6,.3,0,.6,0,1),K.bezierCurveTo(0,.6,.6,.3,.6,0),K.bezierCurveTo(.6,-.3,0,-.3,0,0);const z=new Nr({color:8900331,metalness:1,roughness:.44}),pe=new Nr({color:16776960,metalness:1,roughness:.44}),me=new Nt;me.moveTo(0,.15),me.lineTo(.1,0),me.lineTo(0,-.15),me.lineTo(-.1,0),me.lineTo(0,.15);const _e={depth:.07,bevelEnabled:!1},Me=new Gt(me,_e),Pe=new P(Me,z);Pe.position.set(-.25,1,.5),Pe.rotation.y=Math.PI/30,l.add(Pe);const ne=new P(Me,pe);ne.position.set(.25,1,.5),ne.rotation.y=Math.PI/30,l.add(ne),new Le({color:13369344,metalness:.2,roughness:.6,clearcoat:.1,clearcoatRoughness:.8,transparent:!0,opacity:.99});const ue={depth:.4,bevelEnabled:!0,bevelSegments:2,steps:2,bevelSize:.1,bevelThickness:.1},fe=new Le({color:16777215,metalness:0,roughness:.1,clearcoat:1,clearcoatRoughness:.1,transparent:!0,opacity:.85,reflectivity:1,envMapIntensity:1}),F=new Gt(K,ue),re=new P(F,fe);re.scale.set(.5,.5,.5),re.position.set(0,0,0),re.rotation.y=Math.PI,re.rotation.x=Math.PI,l.add(re);const Y=new Nt;Y.moveTo(0,.6),Y.lineTo(.3,.3),Y.lineTo(.6,0),Y.lineTo(.3,-.3),Y.lineTo(0,-.6),Y.lineTo(-.3,-.3),Y.lineTo(-.6,0),Y.lineTo(-.3,.3),Y.lineTo(0,.6);const le={depth:.4,bevelEnabled:!0,bevelSegments:2,steps:2,bevelSize:.1,bevelThickness:.1},ye=new Gt(Y,le),Q=new Le({color:16777215,metalness:0,roughness:.1,clearcoat:1,clearcoatRoughness:.1,transparent:!0,opacity:.85,reflectivity:1,envMapIntensity:1}),g=new P(ye,Q);g.scale.set(.5,.5,.5),g.position.set(0,0,0),t.add(l),i.position.set(0,1,4),i.lookAt(0,0,0);const T=()=>{requestAnimationFrame(T),a.uniforms.time.value+=.03,l.rotation.y+=.03,s.render(t,i)};T(),window.addEventListener("resize",()=>{i.aspect=window.innerWidth/window.innerHeight,i.updateProjectionMatrix(),s.setSize(window.innerWidth,window.innerHeight)})}),(t,i)=>(Yt(),en("div",{ref_key:"threeCanvas",ref:e,class:"three-container"},null,512))}}),g1=tn(m1,[["__scopeId","data-v-fa1425bf"]]),_1=kt({__name:"BluePinkBear",props:{background:{type:Boolean,default:!1},cameraPosition:{type:Number,default:4},bodyPosition:{type:Object,default:()=>({x:0,y:0,z:0})}},setup(n){const e=n,t=et(null);return qt(()=>{if(t.value){let i=function(){requestAnimationFrame(i),f.rotation.y+=.02,o.render(s,r)};const s=new Sn,r=new vt(75,window.innerWidth/window.innerHeight,.1,1e3),o=new Mn({antialias:!0,alpha:!0});o.setSize(window.innerWidth,window.innerHeight),o.toneMapping=as,o.toneMappingExposure=1.25,t.value.appendChild(o.domElement);const a=new En(16777215,.6);s.add(a);const c=new wn(16777215,1.5);c.position.set(5,5,5),s.add(c);const l=new Wn(16777215,2,50);l.position.set(0,2,4),s.add(l);const h=new Le({color:52945,metalness:.2,roughness:.5,clearcoat:.1,clearcoatRoughness:.8,transparent:!0,opacity:.99}),u=new Le({color:16738740,metalness:.2,roughness:.5,clearcoat:.1,clearcoatRoughness:.8,transparent:!0,opacity:.99}),d=p=>{const m=new $e,E=new xe(1,32,32),y=new P(E,p);y.scale.set(.85,.85,.8),y.position.y=-.2,m.add(y);const S=new xe(.6,32,32),D=new P(S,p);D.scale.set(1,.95,.95),D.position.set(0,1,0),m.add(D);const C=new xe(.25,32,32),A=new P(C,p);A.scale.set(1,.6,.8),A.position.set(0,.85,.5),m.add(A),new Xn().load("https://threejs.org/examples/fonts/helvetiker_bold.typeface.json",function(ye){const Q=new xt("X",{font:ye,size:.18,depth:.05}),g=new dt({color:0}),T=new P(Q,g);T.position.set(-.3,.99,.53),T.rotation.x=Ye.degToRad(-5),T.rotation.y=Ye.degToRad(-15),m.add(T);const I=new xt("+",{font:ye,size:.25,depth:.1}),U=new dt({color:0}),O=new P(I,U);O.position.set(.14,.99,.53),O.rotation.y=Ye.degToRad(12),O.rotation.x=Ye.degToRad(-5),m.add(O)});const te=new Nt;te.moveTo(0,0),te.bezierCurveTo(0,-.3,-.6,-.3,-.6,0),te.bezierCurveTo(-.6,.3,0,.6,0,1),te.bezierCurveTo(0,.6,.6,.3,.6,0),te.bezierCurveTo(.6,-.3,0,-.3,0,0);const x={depth:.05,bevelEnabled:!0,bevelSegments:2,steps:2,bevelSize:.05,bevelThickness:.05},b=new Gt(te,x),X=new dt({color:0}),H=new P(b,X);H.scale.set(.1,.1,.1),H.rotation.z=Ye.degToRad(210),H.rotation.x=Ye.degToRad(5),H.rotation.y=Ye.degToRad(-45),H.position.set(-.4,.9,.45),m.add(H);const J=new xe(.25,32,32),ie=new P(J,h);ie.position.set(-.45,1.35,-.1),m.add(ie);const G=new P(J,u);G.position.set(.45,1.35,-.1),m.add(G);const K=new xe(.35,32,32),z=new P(K,h);z.scale.set(.75,1.25,.65),z.position.set(-.7,-.15,.2),m.add(z);const pe=new P(K,u);pe.scale.set(.75,1.25,.65),pe.position.set(.7,-.15,.2),m.add(pe);const me=new ln(.2,.22,.6,32),_e=new P(me,h);_e.position.set(-.4,-1.05,0),m.add(_e);const Me=new P(me,u);Me.position.set(.4,-1.05,0),m.add(Me);const Pe=new xe(.3,32,32),ne=new P(Pe,h);ne.scale.set(1,.72,1.5),ne.position.set(-.4,-1.45,.17),m.add(ne);const ue=new P(Pe,u);ue.scale.set(1,.72,1.5),ue.position.set(.4,-1.45,.17),m.add(ue);const fe=new xe(.44,32,32),F=new P(fe,h);F.position.set(-.15,-.45,-.4),m.add(F);const re=new P(fe,u);re.position.set(.15,-.45,-.4),m.add(re);const Y=new xe(.18,32,32),le=new P(Y,p);return le.position.set(0,-.35,-.8),m.add(le),m},f=new $e,_=d(h),M=d(u);_.position.x=-.01,M.position.x=.01,f.add(_),f.add(M),s.add(f),r.position.z=4,i(),f.position.set(e.bodyPosition.x,e.bodyPosition.y,e.bodyPosition.z),r.position.set(e.bodyPosition.x,1,e.cameraPosition),r.lookAt(e.bodyPosition.x,0,0)}}),(i,s)=>(Yt(),en("div",{ref_key:"threeCanvas",ref:t,class:"three-canvas"},null,512))}}),v1=tn(_1,[["__scopeId","data-v-9e6b205d"]]),x1=kt({__name:"HalfTransparentBear",props:{background:{type:Boolean,default:!1},cameraPosition:{type:Number,default:4},bodyPosition:{type:Object,default:()=>({x:0,y:0,z:0})}},setup(n){const e=n,t=et(null);return qt(()=>{if(t.value){let i=function(){requestAnimationFrame(i),m.rotation.y+=.03,h.uniforms.time.value+=.04,o.render(s,r)};const s=new Sn,r=new vt(75,window.innerWidth/window.innerHeight,.1,1e3),o=new Mn({antialias:!0,alpha:!0});o.setSize(window.innerWidth,window.innerHeight),o.toneMapping=as,o.toneMappingExposure=1.25,t.value.appendChild(o.domElement);const a=new En(16777215,.6);s.add(a);const c=new wn(16777215,1.2);c.position.set(5,5,5),s.add(c);const l=new Wn(16777215,2,50);l.position.set(0,2,4),s.add(l);const h=new Pt({uniforms:{time:{value:0},color1:{value:new Xe(16766720)},color2:{value:new Xe(16007990)}},vertexShader:`
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
        `});new Le({color:52945,metalness:.2,roughness:.5,clearcoat:.1,clearcoatRoughness:.8,transparent:!0,opacity:.99});const u=new Le({color:52945,metalness:.2,roughness:.5,clearcoat:.1,clearcoatRoughness:.8,transparent:!0,opacity:.39});new Le({color:16738740,metalness:.2,roughness:.5,clearcoat:.1,clearcoatRoughness:.8,transparent:!0,opacity:.99}),new Le({color:52945,metalness:.2,roughness:.5,clearcoat:.1,clearcoatRoughness:.8,transparent:!0,opacity:.99});const d=new Le({color:13369344,metalness:.2,roughness:.6,clearcoat:.1,clearcoatRoughness:.8,transparent:!0,opacity:.99}),f=`
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
    `,M=new Pt({uniforms:{time:{value:0},opacity:{value:1}},vertexShader:f,fragmentShader:_,transparent:!0,depthWrite:!1}),p=new Pt({uniforms:{time:{value:0},opacity:{value:.4}},vertexShader:f,fragmentShader:_,transparent:!0,depthWrite:!1}),m=new $e,E=new xe(1,32,32,0,Math.PI),y=new P(E,p),S=new P(E,M);y.scale.set(.85,.85,.8),S.scale.set(.85,.85,.8),y.position.y=-.2,S.position.y=-.2,y.rotation.y=Math.PI/2,S.rotation.y=Math.PI*1.5;const D=new wt(1,32),C=new P(D,M);C.scale.set(.85,.85,.8),C.position.set(0,-.2,0),C.rotation.y=Math.PI/2;const A=new $e;A.add(y),A.add(S),A.add(C),m.add(A);const N=new xe(.6,32,32,0,Math.PI),te=new P(N,M);te.scale.set(1,.95,.95),te.position.set(0,1,0),te.rotation.y=Math.PI*1.5;const x=new P(N,p);x.scale.set(1,.95,.95),x.position.set(0,1,0),x.rotation.y=Math.PI/2;const b=new wt(.6,32),X=new P(b,M);X.position.set(0,.97,0),X.rotation.y=Math.PI/2;const H=new $e;H.add(te),H.add(x),H.add(X),m.add(H);const J=new xe(.25,32,32),ie=new P(J,M);ie.position.set(-.45,1.35,-.1),m.add(ie);const G=new P(J,p);G.position.set(.45,1.35,-.1),m.add(G);const K=new xe(.25,32,32,Math.PI/2,Math.PI),z=new P(K,M);z.scale.set(1,.6,.8),z.position.set(0,.82,.5),z.rotation.y=Math.PI;const pe=new xe(.25,32,32,Math.PI/2,Math.PI),me=new P(pe,p);me.scale.set(1,.6,.8),me.position.set(0,.82,.5),me.rotation.y=0;const _e=new wt(.25,32),Me=new P(_e,M);Me.scale.set(1.25,.6,.8),Me.position.set(0,.85,.5),Me.rotation.x=Math.PI/2;const Pe=new $e;Pe.add(z),Pe.add(me),Pe.add(Me),m.add(Pe);const ne=new Nt;ne.moveTo(0,0),ne.bezierCurveTo(0,-.3,-.6,-.3,-.6,0),ne.bezierCurveTo(-.6,.3,0,.6,0,1),ne.bezierCurveTo(0,.6,.6,.3,.6,0),ne.bezierCurveTo(.6,-.3,0,-.3,0,0);const ue={depth:.4,bevelEnabled:!0,bevelSegments:2,steps:2,bevelSize:.1,bevelThickness:.1};new Le({color:16777215,metalness:0,roughness:.1,clearcoat:1,clearcoatRoughness:.1,transparent:!0,opacity:.85,reflectivity:1,envMapIntensity:1});const fe=new Gt(ne,ue),F=new P(fe,d);F.scale.set(.5,.5,.5),F.position.set(0,0,0),F.rotation.y=Math.PI,F.rotation.x=Math.PI,m.add(F);const re=new xe(.35,32,32),Y=new P(re,M);Y.scale.set(.75,1.25,.65),Y.position.set(-.7,-.15,.2),m.add(Y);const le=new P(re,p);le.scale.set(.75,1.25,.65),le.position.set(.7,-.15,.2),m.add(le);const ye=new ln(.2,.22,.6,32),Q=new P(ye,M);Q.position.set(-.4,-1.05,0),m.add(Q);const g=new P(ye,p);g.position.set(.4,-1.05,0),m.add(g);const T=new xe(.3,32,32),I=new P(T,M);I.scale.set(1,.72,1.5),I.position.set(-.4,-1.45,.17),m.add(I);const U=new P(T,p);U.scale.set(1,.72,1.5),U.position.set(.4,-1.45,.17),m.add(U);const O=new xe(.44,32,32),j=new P(O,M);j.position.set(-.15,-.45,-.4),m.add(j);const ee=new P(O,u);ee.position.set(.15,-.45,-.4),m.add(ee);const w=new xe(.18,32,32),v=new P(w,d);v.position.set(0,-.35,-.8),m.add(v),new Xn().load("https://threejs.org/examples/fonts/helvetiker_bold.typeface.json",function(V){const k=new xt("X",{font:V,size:.18,depth:.05}),W=new dt({color:0}),de=new P(k,W);de.position.set(-.3,.99,.53),de.rotation.x=Ye.degToRad(-5),de.rotation.y=Ye.degToRad(-15),m.add(de);const he=new xt("+",{font:V,size:.25,depth:.1}),ve=new dt({color:0}),Ae=new P(he,ve);Ae.position.set(.14,.99,.53),Ae.rotation.y=Ye.degToRad(12),Ae.rotation.x=Ye.degToRad(-5),m.add(Ae)}),s.add(m),i(),m.position.set(e.bodyPosition.x,e.bodyPosition.y,e.bodyPosition.z),r.position.set(e.bodyPosition.x,1,e.cameraPosition),r.lookAt(e.bodyPosition.x,0,0),yt(()=>e.bodyPosition,V=>{m.position.set(V.x,V.y,V.z)}),yt(()=>e.cameraPosition,V=>{r.position.set(e.bodyPosition.x,1,V),r.lookAt(e.bodyPosition.x,0,0)}),window.addEventListener("resize",()=>{r.aspect=window.innerWidth/window.innerHeight,r.updateProjectionMatrix(),o.setSize(window.innerWidth,window.innerHeight)})}}),(i,s)=>(Yt(),en("div",{ref_key:"threeCanvas",ref:t,class:yn(n.background?"no-bg":"three-canvas")},null,2))}}),y1=tn(x1,[["__scopeId","data-v-7fbce4ad"]]),M1=kt({__name:"HalfBlueBear",props:{background:{type:Boolean,default:!1},cameraPosition:{type:Number,default:5},bodyPosition:{type:Object,default:()=>({x:0,y:0,z:0})}},setup(n){const e=n,t=et(null);return qt(()=>{if(t.value){let i=function(){requestAnimationFrame(i),Se&&(y.rotation.y+=.03),o.render(s,r)};const s=new Sn,r=new vt(75,window.innerWidth/window.innerHeight,.1,1e3),o=new Mn({antialias:!0,alpha:!0});o.setSize(window.innerWidth,window.innerHeight),o.toneMapping=as,o.toneMappingExposure=1.25,t.value.appendChild(o.domElement);const a=new En(16777215,.6);s.add(a);const c=new wn(16777215,1.2);c.position.set(5,5,5),s.add(c);const l=new Wn(16777215,2,50);l.position.set(0,2,4),s.add(l);const h=new Pt({uniforms:{time:{value:0},color1:{value:new Xe(16766720)},color2:{value:new Xe(16007990)}},vertexShader:`
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
        `}),u=new Le({color:52945,metalness:.2,roughness:.5,clearcoat:.1,clearcoatRoughness:.8,transparent:!0,opacity:.99}),d=new Le({color:52945,metalness:.2,roughness:.5,clearcoat:.1,clearcoatRoughness:.8,transparent:!0,opacity:.35});new Le({color:13882323,metalness:.7,roughness:.25,clearcoat:.4,clearcoatRoughness:.1,transparent:!1,opacity:1}),new Le({color:12632256,metalness:1,roughness:.3,clearcoat:.5,clearcoatRoughness:.1,transparent:!0,opacity:.35});const f=new Le({color:16738740,metalness:.2,roughness:.5,clearcoat:.1,clearcoatRoughness:.8,transparent:!0,opacity:.79}),_=new Le({color:13369344,metalness:.2,roughness:.6,clearcoat:.1,clearcoatRoughness:.8,transparent:!1,opacity:.99,depthWrite:!0,depthTest:!0}),M=new Le({color:16738740,metalness:.2,roughness:.6,clearcoat:.1,clearcoatRoughness:.8,transparent:!1,opacity:.99,depthWrite:!0,depthTest:!0}),p=`
    varying vec2 vUv;
          void main() {
              vUv = uv;
              gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
    `,m=`
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
    `,E=new Pt({uniforms:{time:{value:0},opacity:{value:1}},vertexShader:p,fragmentShader:m,transparent:!1,depthWrite:!0}),y=new $e,S=new xe(1,32,32,0,Math.PI),D=new P(S,d),C=new P(S,u);D.scale.set(.85,.85,.8),C.scale.set(.85,.85,.8),D.position.y=-.2,C.position.y=-.2,D.rotation.y=Math.PI/2,C.rotation.y=Math.PI*1.5;const A=new wt(1,32),N=new P(A,u);N.scale.set(.85,.85,.8),N.position.set(0,-.2,0),N.rotation.y=Math.PI/2;const te=new $e;te.add(D),te.add(C),te.add(N),y.add(te);const x=new xe(.6,32,32,0,Math.PI),b=new P(x,u);b.scale.set(1,.95,.95),b.position.set(0,1,0),b.rotation.y=Math.PI*1.5;const X=new P(x,d);X.scale.set(1,.95,.95),X.position.set(0,1,0),X.rotation.y=Math.PI/2;const H=new wt(.6,32),J=new P(H,u);J.position.set(0,1,0),J.rotation.y=Math.PI/2,J.scale.set(1,.95,.95);const ie=new $e;ie.add(b),ie.add(X),ie.add(J),y.add(ie);const G=new xe(.25,32,32),K=new P(G,u);K.position.set(-.45,1.35,-.1),y.add(K);const z=new P(G,d);z.position.set(.45,1.35,-.1),y.add(z);const pe=new xe(.25,32,32,Math.PI/2,Math.PI),me=new P(pe,u);me.scale.set(1.1,.6,.8),me.position.set(0,.84,.5),me.rotation.y=Math.PI;const _e=new xe(.25,32,32,Math.PI/2,Math.PI),Me=new P(_e,d);Me.scale.set(1.1,.6,.8),Me.position.set(0,.84,.5),Me.rotation.y=0;const Pe=new wt(.25,32),ne=new P(Pe,u);ne.scale.set(.8,.6,.8),ne.position.set(0,.84,.5),ne.rotation.y=Math.PI/2;const ue=new $e;ue.add(me),ue.add(Me),ue.add(ne),y.add(ue);const fe=new Nt;fe.moveTo(0,0),fe.bezierCurveTo(0,-.3,-.6,-.3,-.6,0),fe.bezierCurveTo(-.6,.3,0,.6,0,1),fe.bezierCurveTo(0,.6,.6,.3,.6,0),fe.bezierCurveTo(.6,-.3,0,-.3,0,0);const F={depth:.4,bevelEnabled:!0,bevelSegments:2,steps:2,bevelSize:.1,bevelThickness:.1};new Le({color:16777215,metalness:0,roughness:.1,clearcoat:1,clearcoatRoughness:.1,transparent:!0,opacity:.85,reflectivity:1,envMapIntensity:1});const re=new Gt(fe,F);new dt({color:0});const Y=new P(re,f);Y.scale.set(.1,.1,.1),Y.rotation.z=Ye.degToRad(210),Y.rotation.x=Ye.degToRad(5),Y.rotation.y=Ye.degToRad(-45),Y.position.set(-.4,.9,.45);const le=new P(re,E);le.scale.set(.5,.5,.5),le.position.set(.35,0,0),le.rotation.y=Math.PI,le.rotation.x=Math.PI,y.add(le);const ye=new P(re,h);ye.scale.set(.35,.35,.35),ye.position.set(.3,0,0),ye.rotation.y=Math.PI,ye.rotation.x=Math.PI;const Q=new P(re,M);Q.scale.set(.25,.25,.25),Q.position.set(.27,.2,0),Q.rotation.y=Math.PI,Q.rotation.x=Math.PI;const g=new P(re,_);g.scale.set(.3,.3,.3),g.position.set(.23,-.5,.3),g.rotation.y=Math.PI,g.rotation.x=Math.PI;const T=new P(re,E);T.scale.set(.4,.4,.4),T.position.set(.27,0,.35),T.rotation.y=Math.PI,T.rotation.x=Math.PI;const I=new xe(.35,32,32),U=new P(I,u);U.scale.set(.75,1.25,.65),U.position.set(-.7,-.15,.2),y.add(U);const O=new P(I,d);O.scale.set(.75,1.25,.65),O.position.set(.7,-.15,.2),y.add(O);const j=new ln(.2,.22,.6,32),ee=new P(j,u);ee.position.set(-.4,-1.05,0),y.add(ee);const w=new P(j,d);w.position.set(.4,-1.05,0),y.add(w);const v=new xe(.3,32,32),L=new P(v,u);L.scale.set(1,.72,1.5),L.position.set(-.4,-1.45,.17),y.add(L);const V=new P(v,d);V.scale.set(1,.72,1.5),V.position.set(.4,-1.45,.17),y.add(V);const k=new xe(.44,32,32),W=new P(k,u);W.position.set(-.15,-.45,-.4),y.add(W);const de=new P(k,d);de.position.set(.15,-.45,-.4),y.add(de);const he=new xe(.18,32,32),ve=new P(he,f);ve.position.set(0,-.35,-.8),y.add(ve),new Xn().load("https://threejs.org/examples/fonts/helvetiker_bold.typeface.json",function(Te){const He=new xt("X",{font:Te,size:.18,depth:.05}),Ne=new dt({color:0}),Oe=new P(He,Ne);Oe.position.set(-.3,.99,.53),Oe.rotation.x=Ye.degToRad(-5),Oe.rotation.y=Ye.degToRad(-15),y.add(Oe);const B=new xt("+",{font:Te,size:.25,depth:.1}),we=new dt({color:0}),se=new P(B,we);se.position.set(.14,.99,.53),se.rotation.y=Ye.degToRad(12),se.rotation.x=Ye.degToRad(-5),y.add(se)}),ve.renderOrder=1,y.scale.set(1.2,1.2,1.2),s.add(y),y.position.set(e.bodyPosition.x,e.bodyPosition.y,e.bodyPosition.z),r.position.set(e.bodyPosition.x,1,e.cameraPosition),r.lookAt(e.bodyPosition.x,0,0),r.position.z=4;const ge={x:0,y:0};let Se=!0,Ce=null;const Ue=Te=>{Se=!1,ge.x=Te.clientX/window.innerWidth*2-1,ge.y=-(Te.clientY/window.innerHeight)*2+1;const He=ge.x*Math.PI*.2,Ne=ge.y*Math.PI*.2;y.rotation.y=He,y.rotation.x=Ne,clearTimeout(Ce),Ce=setTimeout(()=>{Se=!0},500)};window.addEventListener("mousemove",Ue),h.uniforms.time.value+=.04,i(),yt(()=>e.bodyPosition,Te=>{y.position.set(Te.x,Te.y,Te.z)}),yt(()=>e.cameraPosition,Te=>{r.position.set(e.bodyPosition.x,1,Te),r.lookAt(e.bodyPosition.x,0,0)}),window.addEventListener("resize",()=>{r.aspect=window.innerWidth/window.innerHeight,r.updateProjectionMatrix(),o.setSize(window.innerWidth,window.innerHeight)})}}),(i,s)=>(Yt(),en("div",{ref_key:"threeCanvas",ref:t,class:yn(n.background?"no-bg":"three-canvas")},null,2))}}),S1=tn(M1,[["__scopeId","data-v-5bf83852"]]),w1=kt({__name:"SliverBear",props:{background:{type:Boolean,default:!1},cameraPosition:{type:Number,default:5},bodyPosition:{type:Object,default:()=>({x:0,y:0,z:0})}},setup(n){const e=n,t=et(null);return qt(()=>{if(t.value){let i=function(){c.visible=!1,M.update(a,r),c.visible=!0,requestAnimationFrame(i)},s=function(){requestAnimationFrame(s),B&&(c.rotation.y+=.03),a.render(r,o)};const r=new Sn,o=new vt(75,window.innerWidth/window.innerHeight,.1,1e3),a=new Mn({antialias:!0,alpha:!0});a.setSize(window.innerWidth,window.innerHeight),t.value.appendChild(a.domElement);const c=new $e,l=new En(16777215,2);r.add(l);const h=new wn(16777215,4);h.position.set(5,5,5),r.add(h);const u=new Wn(16777215,5,50);u.position.set(0,2,4),r.add(u);const f=new kr().load("3d-bear-arts/src/assets/gradient_texture.jpg"),_=new Vf(256,{format:Pn,generateMipmaps:!0,minFilter:Li}),M=new kf(1,1e3,_);new Le({color:16738740,metalness:1,roughness:.1,clearcoat:1,clearcoatRoughness:.1,envMap:f,envMapIntensity:1.5}),new Le({color:12632256,metalness:1,roughness:.05,clearcoat:1,clearcoatRoughness:.1,transparent:!0,opacity:.35,envMap:_.texture,envMapIntensity:1.5}),r.add(M),r.environment=_.texture,i();const m=new Yw().load(["https://threejs.org/examples/textures/cube/Park2/posx.jpg","https://threejs.org/examples/textures/cube/Park2/negx.jpg","https://threejs.org/examples/textures/cube/Park2/posy.jpg","https://threejs.org/examples/textures/cube/Park2/negy.jpg","https://threejs.org/examples/textures/cube/Park2/posz.jpg","https://threejs.org/examples/textures/cube/Park2/negz.jpg"]);r.environment=m;const E=new Le({color:16738740,metalness:1,roughness:.05,clearcoat:1,clearcoatRoughness:.05,envMap:m,reflectivity:1}),y=new Le({color:16738740,metalness:1,roughness:.05,clearcoat:1,clearcoatRoughness:.05,transparent:!0,opacity:.5,envMap:m,reflectivity:1}),S=new Pt({uniforms:{time:{value:0},color1:{value:new Xe(16766720)},color2:{value:new Xe(16007990)}},vertexShader:`
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
          `}),D=new Le({color:16738740,metalness:.2,roughness:.5,clearcoat:.1,clearcoatRoughness:.8,transparent:!0,opacity:.89}),C=new Le({color:13369344,metalness:.2,roughness:.6,clearcoat:.1,clearcoatRoughness:.8,transparent:!1,opacity:.99,depthWrite:!0,depthTest:!0}),A=new Le({color:16738740,metalness:.2,roughness:.6,clearcoat:.1,clearcoatRoughness:.8,transparent:!1,opacity:.99,depthWrite:!0,depthTest:!0}),N=`
      varying vec2 vUv;
            void main() {
                vUv = uv;
                gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            }
      `,te=`
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
      `,x=new Pt({uniforms:{time:{value:0},opacity:{value:1}},vertexShader:N,fragmentShader:te,transparent:!1,depthWrite:!0}),b=new xe(1,32,32,0,Math.PI),X=new P(b,y),H=new P(b,E);X.scale.set(.85,.85,.8),H.scale.set(.85,.85,.8),X.position.y=-.2,H.position.y=-.2,X.rotation.y=Math.PI/2,H.rotation.y=Math.PI*1.5;const J=new wt(1,32),ie=new P(J,E);ie.scale.set(.85,.85,.8),ie.position.set(0,-.2,0),ie.rotation.y=Math.PI/2;const G=new $e;G.add(X),G.add(H),G.add(ie),c.add(G);const K=new xe(.6,32,32,0,Math.PI),z=new P(K,E);z.scale.set(1,.95,.95),z.position.set(0,1,0),z.rotation.y=Math.PI*1.5;const pe=new P(K,y);pe.scale.set(1,.95,.95),pe.position.set(0,1,0),pe.rotation.y=Math.PI/2;const me=new wt(.6,32),_e=new P(me,E);_e.position.set(0,1,0),_e.rotation.y=Math.PI/2,_e.scale.set(1,.95,.95);const Me=new $e;Me.add(z),Me.add(pe),Me.add(_e),c.add(Me);const Pe=new xe(.25,32,32),ne=new P(Pe,E);ne.position.set(-.45,1.35,-.1),c.add(ne);const ue=new P(Pe,y);ue.position.set(.45,1.35,-.1),c.add(ue);const fe=new xe(.25,32,32,Math.PI/2,Math.PI),F=new P(fe,E);F.scale.set(1.1,.6,.8),F.position.set(0,.84,.5),F.rotation.y=Math.PI;const re=new xe(.25,32,32,Math.PI/2,Math.PI),Y=new P(re,y);Y.scale.set(1.1,.6,.8),Y.position.set(0,.84,.5),Y.rotation.y=0;const le=new wt(.25,32),ye=new P(le,E);ye.scale.set(.8,.6,.8),ye.position.set(0,.84,.5),ye.rotation.y=Math.PI/2;const Q=new $e;Q.add(F),Q.add(Y),Q.add(ye),c.add(Q);const g=new Nt;g.moveTo(0,0),g.bezierCurveTo(0,-.3,-.6,-.3,-.6,0),g.bezierCurveTo(-.6,.3,0,.6,0,1),g.bezierCurveTo(0,.6,.6,.3,.6,0),g.bezierCurveTo(.6,-.3,0,-.3,0,0);const T={depth:.4,bevelEnabled:!0,bevelSegments:2,steps:2,bevelSize:.1,bevelThickness:.1};new Le({color:16777215,metalness:0,roughness:.1,clearcoat:1,clearcoatRoughness:.1,transparent:!0,opacity:.85,reflectivity:1,envMapIntensity:1});const I=new Gt(g,T);new dt({color:0});const U=new P(I,D);U.scale.set(.1,.1,.1),U.rotation.z=Ye.degToRad(210),U.rotation.x=Ye.degToRad(5),U.rotation.y=Ye.degToRad(-45),U.position.set(-.4,.9,.45);const O=new P(I,x);O.scale.set(.5,.5,.5),O.position.set(.35,0,0),O.rotation.y=Math.PI,O.rotation.x=Math.PI,c.add(O);const j=new P(I,S);j.scale.set(.35,.35,.35),j.position.set(.3,0,0),j.rotation.y=Math.PI,j.rotation.x=Math.PI,c.add(j);const ee=new P(I,A);ee.scale.set(.25,.25,.25),ee.position.set(.27,.2,0),ee.rotation.y=Math.PI,ee.rotation.x=Math.PI,c.add(ee);const w=new P(I,C);w.scale.set(.3,.3,.3),w.position.set(.23,-.5,.3),w.rotation.y=Math.PI,w.rotation.x=Math.PI,c.add(w);const v=new P(I,x);v.scale.set(.4,.4,.4),v.position.set(.27,0,.35),v.rotation.y=Math.PI,v.rotation.x=Math.PI;const L=new xe(.35,32,32),V=new P(L,E);V.scale.set(.75,1.25,.65),V.position.set(-.7,-.15,.2),c.add(V);const k=new P(L,y);k.scale.set(.75,1.25,.65),k.position.set(.7,-.15,.2),c.add(k);const W=new ln(.2,.22,.6,32),de=new P(W,E);de.position.set(-.4,-1.05,0),c.add(de);const he=new P(W,y);he.position.set(.4,-1.05,0),c.add(he);const ve=new xe(.3,32,32),Ae=new P(ve,E);Ae.scale.set(1,.72,1.5),Ae.position.set(-.4,-1.45,.17),c.add(Ae);const ge=new P(ve,y);ge.scale.set(1,.72,1.5),ge.position.set(.4,-1.45,.17),c.add(ge);const Se=new xe(.44,32,32),Ce=new P(Se,E);Ce.position.set(-.15,-.45,-.4),c.add(Ce);const Ue=new P(Se,y);Ue.position.set(.15,-.45,-.4),c.add(Ue);const Te=new xe(.18,32,32),He=new P(Te,x);He.position.set(0,-.35,-.8),c.add(He),new Xn().load("https://threejs.org/examples/fonts/helvetiker_bold.typeface.json",function(oe){const Ee=new xt("X",{font:oe,size:.18,depth:.05});new dt({color:0});const be=new P(Ee,x);be.position.set(-.3,.99,.53),be.rotation.x=Ye.degToRad(-5),be.rotation.y=Ye.degToRad(-15),c.add(be);const Ve=new xt("+",{font:oe,size:.25,depth:.1});new dt({color:0});const tt=new P(Ve,x);tt.position.set(.14,.99,.53),tt.rotation.y=Ye.degToRad(12),tt.rotation.x=Ye.degToRad(-5),c.add(tt)}),He.renderOrder=1,c.scale.set(1.2,1.2,1.2),r.add(c),c.position.set(e.bodyPosition.x,e.bodyPosition.y,e.bodyPosition.z),o.position.set(e.bodyPosition.x,1,e.cameraPosition),o.lookAt(e.bodyPosition.x,0,0),o.position.z=4;const Oe={x:0,y:0};let B=!0,we=null;const se=oe=>{B=!1,Oe.x=oe.clientX/window.innerWidth*2-1,Oe.y=-(oe.clientY/window.innerHeight)*2+1;const Ee=Oe.x*Math.PI*.2,be=Oe.y*Math.PI*.2;c.rotation.y=Ee,c.rotation.x=be,clearTimeout(we),we=setTimeout(()=>{B=!0},500)};window.addEventListener("mousemove",se),S.uniforms.time.value+=.04,s(),yt(()=>e.bodyPosition,oe=>{c.position.set(oe.x,oe.y,oe.z)}),yt(()=>e.cameraPosition,oe=>{o.position.set(e.bodyPosition.x,1,oe),o.lookAt(e.bodyPosition.x,0,0)}),window.addEventListener("resize",()=>{o.aspect=window.innerWidth/window.innerHeight,o.updateProjectionMatrix(),a.setSize(window.innerWidth,window.innerHeight)})}}),(i,s)=>(Yt(),en("div",{ref_key:"threeCanvas",ref:t,class:yn(n.background?"no-bg":"three-canvas")},null,2))}}),E1=tn(w1,[["__scopeId","data-v-c37895d8"]]),b1=kt({__name:"MetalBear",props:{background:{type:Boolean,default:!1},cameraPosition:{type:Number,default:5},bodyPosition:{type:Object,default:()=>({x:0,y:0,z:0})}},setup(n){const e=n,t=et(null);let i=null,s=et(!1),r=et(!1),o=et(!1);return qt(()=>{if(t.value){let a=function(){requestAnimationFrame(a),s.value?u.rotation.y+=.03:r.value&&(u.rotation.y-=.03),h.render(c,l)};const c=new Sn,l=new vt(75,window.innerWidth/window.innerHeight,.1,1e3),h=new Mn({antialias:!0,alpha:!0});h.setSize(window.innerWidth,window.innerHeight),t.value.appendChild(h.domElement);const u=new $e,d=new En(16777215,2);c.add(d);const f=new wn(16777215,4);f.position.set(5,5,5),c.add(f);const _=new Wn(16777215,5,50);_.position.set(0,2,4),c.add(_);const M=new kr,p=M.load("/3d-bear-arts/assets/lv2.jpg"),m=M.load("/3d-bear-arts/assets/lv2.jpg");p.wrapS=p.wrapT=Vn,m.wrapS=m.wrapT=Vn;const E=new Le({color:8343336,metalness:0,roughness:.8,bumpMap:p,bumpScale:.1,clearcoat:.2,clearcoatRoughness:.9,map:m,envMapIntensity:.7}),y=new Le({color:5978654,metalness:0,roughness:.8,bumpMap:p,bumpScale:.1,clearcoat:.2,clearcoatRoughness:.9,map:m,envMapIntensity:.7}),S=new Le({color:13152668,metalness:.2,roughness:.05,bumpMap:p,bumpScale:.05,clearcoat:1,clearcoatRoughness:.05,map:m,transparent:!0,opacity:.4,transmission:.9,envMapIntensity:1,reflectivity:.9,ior:1.45,side:bt});new Le({color:13421772,metalness:1,roughness:.5,clearcoat:.3,clearcoatRoughness:.3});const D=new xe(1,32,32,0,Math.PI),C=new P(D,S),A=new P(D,E);C.scale.set(.85,.85,.8),A.scale.set(.85,.85,.8),C.position.y=-.2,A.position.y=-.2,C.rotation.y=Math.PI/2,A.rotation.y=Math.PI*1.5;const N=new wt(1,32),te=new P(N,E);te.scale.set(.85,.85,.8),te.position.set(0,-.2,0),te.rotation.y=Math.PI/2;const x=new $e;x.add(C),x.add(A),x.add(te),u.add(x);const b=new xe(.6,32,32,0,Math.PI),X=new P(b,E);X.scale.set(1,.95,.95),X.position.set(0,1,0),X.rotation.y=Math.PI*1.5;const H=new P(b,S);H.scale.set(1,.95,.95),H.position.set(0,1,0),H.rotation.y=Math.PI/2;const J=new wt(.6,32),ie=new P(J,E);ie.position.set(0,1,0),ie.rotation.y=Math.PI/2,ie.scale.set(1,.95,.95);const G=new $e;G.add(X),G.add(H),G.add(ie),u.add(G);const K=new xe(.25,32,32),z=new P(K,E);z.position.set(-.45,1.35,-.1),u.add(z);const pe=new P(K,S);pe.position.set(.45,1.35,-.1),u.add(pe);const me=new xe(.25,32,32,Math.PI/2,Math.PI),_e=new P(me,y);_e.scale.set(1.1,.6,.8),_e.position.set(0,.84,.5),_e.rotation.y=Math.PI;const Me=new xe(.25,32,32,Math.PI/2,Math.PI),Pe=new P(Me,S);Pe.scale.set(1.1,.6,.8),Pe.position.set(0,.84,.5),Pe.rotation.y=0;const ne=new wt(.25,32),ue=new P(ne,E);ue.scale.set(.8,.6,.8),ue.position.set(0,.84,.5),ue.rotation.y=Math.PI/2;const fe=new $e;fe.add(_e),fe.add(Pe),fe.add(ue),u.add(fe);const F=new Nt;F.moveTo(0,0),F.bezierCurveTo(0,-.3,-.6,-.3,-.6,0),F.bezierCurveTo(-.6,.3,0,.6,0,1),F.bezierCurveTo(0,.6,.6,.3,.6,0),F.bezierCurveTo(.6,-.3,0,-.3,0,0);const re={depth:.4,bevelEnabled:!0,bevelSegments:2,steps:2,bevelSize:.1,bevelThickness:.1};new Le({color:16777215,metalness:0,roughness:.1,clearcoat:1,clearcoatRoughness:.1,transparent:!0,opacity:.85,reflectivity:1,envMapIntensity:1});const Y=new Gt(F,re),le=new P(Y,E);le.scale.set(.1,.1,.1),le.rotation.z=Ye.degToRad(210),le.rotation.x=Ye.degToRad(5),le.rotation.y=Ye.degToRad(-45),le.position.set(-.4,.9,.45);const ye=new P(Y,y);ye.scale.set(.6,.5,.5),ye.position.set(.35,0,0),ye.rotation.y=Math.PI,ye.rotation.x=Math.PI;const Q=new P(Y,y);Q.scale.set(.2,.2,.2),Q.position.set(.5,-.1,.2),Q.rotation.y=Math.PI,Q.rotation.x=Math.PI,u.add(Q);const g=new $s(1.3,1.2,.6),T=new P(g,E);T.scale.set(.45,.45,.45),T.position.set(.35,-.2,.1),T.rotation.y=Math.PI;const I=new Kl(.15,.025,10,100);new Le({color:8343336,metalness:.3,roughness:.4,clearcoat:.5});const U=new P(I,E);U.position.set(.35,.1,.1),U.rotation.z=Math.PI/2,U.rotation.x=Math.PI/8,U.rotation.y=Math.PI/14;const O=new P(I,E);O.position.set(.35,.1,.13),O.rotation.z=Math.PI/2,O.rotation.x=Math.PI/-8,O.rotation.y=Math.PI/12;const j=new $e;j.add(T),j.add(U),j.add(O),u.add(j);const ee=new xe(.35,32,32),w=new P(ee,E);w.scale.set(.75,1.25,.65),w.position.set(-.7,-.15,.2),u.add(w);const v=new P(ee,S);v.scale.set(.75,1.25,.65),v.position.set(.7,-.15,.2),u.add(v);const L=new ln(.2,.22,.6,32),V=new P(L,E);V.position.set(-.4,-1.05,0),u.add(V);const k=new P(L,S);k.position.set(.4,-1.05,0),u.add(k);const W=new xe(.3,32,32),de=new P(W,E);de.scale.set(1,.72,1.5),de.position.set(-.4,-1.45,.17),u.add(de);const he=new P(W,S);he.scale.set(1,.72,1.5),he.position.set(.4,-1.45,.17),u.add(he);const ve=new xe(.44,32,32),Ae=new P(ve,E);Ae.position.set(-.15,-.45,-.4),u.add(Ae);const ge=new P(ve,S);ge.position.set(.15,-.45,-.4),u.add(ge);const Se=new xe(.18,32,32),Ce=new P(Se,E);Ce.position.set(0,-.35,-.8),u.add(Ce),new Xn().load("https://threejs.org/examples/fonts/helvetiker_bold.typeface.json",function(oe){const Ee=new xt("X",{font:oe,size:.2,depth:.05});new dt({color:0});const be=new P(Ee,y);be.position.set(-.3,.99,.53),be.rotation.x=Ye.degToRad(-5),be.rotation.y=Ye.degToRad(-15),u.add(be);const Ve=new xt("O",{font:oe,size:.2,depth:.05});new dt({color:0});const tt=new P(Ve,y);tt.position.set(.14,.99,.53),tt.rotation.y=Ye.degToRad(12),tt.rotation.x=Ye.degToRad(-5),u.add(tt)}),Ce.renderOrder=1,u.scale.set(1.35,1.35,1.35),c.add(u),u.position.set(e.bodyPosition.x,e.bodyPosition.y,e.bodyPosition.z),l.position.set(e.bodyPosition.x,1,e.cameraPosition),l.lookAt(e.bodyPosition.x,0,0),l.position.z=4;const Te=()=>{u.rotation.y,u.rotation.x},He=()=>{s.value=!0,r.value=!1,o.value=!1},Ne=()=>{s.value=!1,r.value=!0,o.value=!1},Oe=()=>{s.value=!1,r.value=!1,Te()},B=oe=>{const Ee=window.innerWidth/2;oe>Ee?He():Ne(),Te()},we=oe=>{clearTimeout(i),Oe(),o.value=!0;const Ee={x:oe.clientX/window.innerWidth*2-1,y:-(oe.clientY/window.innerHeight)*2+1};if(o.value){const be=Ee.x*Math.PI*.2,Ve=Ee.y*Math.PI*.2;u.rotation.y=be,u.rotation.x=Ve}i=setTimeout(()=>{o.value=!1,B(oe.clientX)},500)};window.addEventListener("mousemove",we);const se=oe=>{if(o.value){const Ee={x:oe.clientX/window.innerWidth*2-1,y:-(oe.clientY/window.innerHeight)*2+1},be=Ee.x*Math.PI*.2,Ve=Ee.y*Math.PI*.2;u.rotation.y=be,u.rotation.x=Ve}};window.addEventListener("mousemove",se),a(),yt(()=>e.bodyPosition,oe=>{u.position.set(oe.x,oe.y,oe.z)}),yt(()=>e.cameraPosition,oe=>{l.position.set(e.bodyPosition.x,1,oe),l.lookAt(e.bodyPosition.x,0,0)}),window.addEventListener("resize",()=>{l.aspect=window.innerWidth/window.innerHeight,l.updateProjectionMatrix(),h.setSize(window.innerWidth,window.innerHeight)})}}),(a,c)=>(Yt(),en("div",{ref_key:"threeCanvas",ref:t,class:yn(n.background?"no-bg":"three-canvas")},null,2))}}),T1=tn(b1,[["__scopeId","data-v-f3beb116"]]),A1=kt({__name:"PopartBear",props:{background:{type:Boolean,default:!1},cameraPosition:{type:Number,default:5},bodyPosition:{type:Object,default:()=>({x:0,y:0,z:0})}},setup(n){const e=n,t=et(null);let i=null,s=et(!1),r=et(!1),o=et(!1);return qt(()=>{if(t.value){let a=function(){requestAnimationFrame(a),s.value?u.rotation.y+=.03:r.value&&(u.rotation.y-=.03),h.render(c,l)};const c=new Sn,l=new vt(75,window.innerWidth/window.innerHeight,.1,1e3),h=new Mn({antialias:!0,alpha:!0});h.setSize(window.innerWidth,window.innerHeight),t.value.appendChild(h.domElement);const u=new $e,d=new En(16777215,2);c.add(d);const f=new wn(16777215,4);f.position.set(5,5,5),c.add(f);const _=new Wn(16777215,5,50);_.position.set(0,2,4),c.add(_);const M=new kr,p=M.load("/3d-bear-arts/assets/pop6.jpg"),m=M.load("/3d-bear-arts/assets/pop7.jpg");p.wrapS=p.wrapT=Vn,m.wrapS=m.wrapT=Vn;const E=new Le({color:16738740,map:m,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9}),y=new Le({color:16766720,metalness:.3,roughness:.1,clearcoat:1,clearcoatRoughness:.05,transparent:!0,opacity:.4,transmission:.8,ior:1.45,reflectivity:.9,envMapIntensity:1,side:bt}),S=new Le({color:16766720,map:p,metalness:.3,roughness:.5}),D=new Le({color:16738740,metalness:.3,roughness:.1,clearcoat:1,clearcoatRoughness:.05,transparent:!0,opacity:.5,transmission:.8,ior:1.45,reflectivity:.9,envMapIntensity:1,side:bt}),C=new Le({color:9055202,map:p,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9});new Le({color:9055202,metalness:.3,roughness:.1,clearcoat:1,clearcoatRoughness:.05,transparent:!0,opacity:.4,transmission:.8,ior:1.45,reflectivity:.9,envMapIntensity:1,side:bt});const A=new Le({color:65535,map:p,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9}),N=new Le({color:65535,metalness:.3,roughness:.1,clearcoat:1,clearcoatRoughness:.05,transparent:!0,opacity:.4,transmission:.8,ior:1.45,reflectivity:.9,envMapIntensity:1,side:bt}),te=new xe(1,32,32,0,Math.PI),x=new P(te,y),b=new P(te,E);x.scale.set(.85,.85,.8),b.scale.set(.85,.85,.8),x.position.y=-.2,b.position.y=-.2,x.rotation.y=Math.PI/2,b.rotation.y=Math.PI*1.5;const X=new wt(1,32),H=new P(X,E);H.scale.set(.85,.85,.8),H.position.set(0,-.2,0),H.rotation.y=Math.PI/2;const J=new $e;J.add(x),J.add(b),J.add(H),u.add(J);const ie=new xe(.6,32,32,0,Math.PI),G=new P(ie,S);G.scale.set(1,.95,.95),G.position.set(0,1,0),G.rotation.y=Math.PI*1.5;const K=new P(ie,D);K.scale.set(1,.95,.95),K.position.set(0,1,0),K.rotation.y=Math.PI/2;const z=new wt(.6,32),pe=new P(z,S);pe.position.set(0,1,0),pe.rotation.y=Math.PI/2,pe.scale.set(1,.95,.95);const me=new $e;me.add(G),me.add(K),me.add(pe),u.add(me);const _e=new xe(.25,32,32),Me=new P(_e,E);Me.position.set(-.45,1.35,-.1),u.add(Me);const Pe=new P(_e,y);Pe.position.set(.45,1.35,-.1),u.add(Pe);const ne=new xe(.25,32,32,Math.PI/2,Math.PI),ue=new P(ne,S);ue.scale.set(1.1,.6,.8),ue.position.set(0,.84,.5),ue.rotation.y=Math.PI;const fe=new xe(.25,32,32,Math.PI/2,Math.PI),F=new P(fe,D);F.scale.set(1.1,.6,.8),F.position.set(0,.84,.5),F.rotation.y=0;const re=new wt(.25,32),Y=new P(re,S);Y.scale.set(.8,.6,.8),Y.position.set(0,.84,.5),Y.rotation.y=Math.PI/2;const le=new $e;le.add(ue),le.add(F),le.add(Y),u.add(le);const ye=new Nt;ye.moveTo(0,0),ye.bezierCurveTo(0,-.3,-.6,-.3,-.6,0),ye.bezierCurveTo(-.6,.3,0,.6,0,1),ye.bezierCurveTo(0,.6,.6,.3,.6,0),ye.bezierCurveTo(.6,-.3,0,-.3,0,0);const Q={depth:.4,bevelEnabled:!0,bevelSegments:2,steps:2,bevelSize:.1,bevelThickness:.1},g=new Gt(ye,Q),T=new P(g,S);T.scale.set(.5,.5,.5),T.position.set(.35,0,0),T.rotation.y=Math.PI,T.rotation.x=Math.PI,u.add(T);const I=new P(g,A);I.scale.set(.2,.2,.25),I.position.set(.5,-.3,.4),I.rotation.y=Math.PI,I.rotation.x=Math.PI,u.add(I);const U=new P(g,E);U.scale.set(.25,.25,.27),U.position.set(.4,.3,-.2),U.rotation.y=Math.PI,U.rotation.x=Math.PI,u.add(U);const O=new xe(.35,32,32),j=new P(O,A);j.scale.set(.75,1.25,.65),j.position.set(-.7,-.15,.2),u.add(j);const ee=new P(O,N);ee.scale.set(.75,1.25,.65),ee.position.set(.7,-.15,.2),u.add(ee);const w=new ln(.2,.22,.6,32),v=new P(w,S);v.position.set(-.4,-1.05,0),u.add(v);const L=new P(w,D);L.position.set(.4,-1.05,0),u.add(L);const V=new xe(.3,32,32),k=new P(V,S);k.scale.set(1,.72,1.5),k.position.set(-.4,-1.45,.17),u.add(k);const W=new P(V,D);W.scale.set(1,.72,1.5),W.position.set(.4,-1.45,.17),u.add(W);const de=new xe(.44,32,32),he=new P(de,E);he.position.set(-.15,-.45,-.4),u.add(he);const ve=new P(de,y);ve.position.set(.15,-.45,-.4),u.add(ve);const Ae=new xe(.18,32,32),ge=new P(Ae,E);ge.position.set(0,-.35,-.8),u.add(ge),new Xn().load("https://threejs.org/examples/fonts/helvetiker_bold.typeface.json",function(we){const se=new xt("X",{font:we,size:.2,depth:.05});new dt({color:0});const oe=new P(se,E);oe.position.set(-.3,.99,.53),oe.rotation.x=Ye.degToRad(-5),oe.rotation.y=Ye.degToRad(-15),u.add(oe);const Ee=new xt("O",{font:we,size:.2,depth:.05});new dt({color:0});const be=new P(Ee,A);be.position.set(.14,.99,.53),be.rotation.y=Ye.degToRad(12),be.rotation.x=Ye.degToRad(-5),u.add(be);const Ve=new xt("POP",{font:we,size:1,height:.5,curveSegments:12,bevelEnabled:!0,bevelThickness:.1,bevelSize:.1,bevelSegments:5}),tt=new Le({color:16716947,metalness:.3,roughness:.6,clearcoat:.2});new Le({color:16766720,metalness:.3,roughness:.6,clearcoat:.2});const pt=new Le({color:16766720,metalness:.3,roughness:.6,clearcoat:.2}),Ze=new Le({color:16753920,metalness:.3,roughness:.6,clearcoat:.2}),nt=new P(Ve,tt);nt.scale.set(.15,.15,.15),nt.position.set(.03,1.16,.1),nt.rotateZ(-25),u.add(nt);const mt=new P(Ve,C);mt.scale.set(.14,.14,.14),mt.rotateZ(45),mt.position.set(.2,-.7,.3),u.add(mt);const Lt=new P(Ve,pt);Lt.scale.set(.14,.14,.14),Lt.rotateZ(45),Lt.rotateY(45),Lt.position.set(.3,.7,.3),u.add(Lt);const un=new P(Ve,pt);un.scale.set(.15,.15,.15),un.rotateZ(45),un.rotateY(45),un.position.set(.35,-1.5,.3),u.add(un);const Dt=new P(Ve,Ze);Dt.scale.set(.17,.17,.17),Dt.rotateZ(45),Dt.rotateY(15),Dt.position.set(.35,1,.3),u.add(Dt)}),ge.renderOrder=1,u.scale.set(1.35,1.35,1.35),c.add(u),u.position.set(e.bodyPosition.x,e.bodyPosition.y,e.bodyPosition.z),l.position.set(e.bodyPosition.x,1,e.cameraPosition),l.lookAt(e.bodyPosition.x,0,0),l.position.z=4;const Ce=()=>{u.rotation.y,u.rotation.x},Ue=()=>{s.value=!0,r.value=!1,o.value=!1},Te=()=>{s.value=!1,r.value=!0,o.value=!1},He=()=>{s.value=!1,r.value=!1,Ce()},Ne=we=>{const se=window.innerWidth/2;we>se?Ue():Te(),Ce()},Oe=we=>{clearTimeout(i),He(),o.value=!0;const se={x:we.clientX/window.innerWidth*2-1,y:-(we.clientY/window.innerHeight)*2+1};if(o.value){const oe=se.x*Math.PI*.2,Ee=se.y*Math.PI*.2;u.rotation.y=oe,u.rotation.x=Ee}i=setTimeout(()=>{o.value=!1,Ne(we.clientX)},1e5)};window.addEventListener("mousemove",Oe);const B=we=>{if(o.value){const se={x:we.clientX/window.innerWidth*2-1,y:-(we.clientY/window.innerHeight)*2+1},oe=se.x*Math.PI*.2,Ee=se.y*Math.PI*.2;u.rotation.y=oe,u.rotation.x=Ee}};window.addEventListener("mousemove",B),a(),yt(()=>e.bodyPosition,we=>{u.position.set(we.x,we.y,we.z)}),yt(()=>e.cameraPosition,we=>{l.position.set(e.bodyPosition.x,1,we),l.lookAt(e.bodyPosition.x,0,0)}),window.addEventListener("resize",()=>{l.aspect=window.innerWidth/window.innerHeight,l.updateProjectionMatrix(),h.setSize(window.innerWidth,window.innerHeight)})}}),(a,c)=>(Yt(),en("div",{ref_key:"threeCanvas",ref:t,class:yn(n.background?"no-bg":"three-canvas")},null,2))}}),R1=tn(A1,[["__scopeId","data-v-f9728be4"]]),P1={class:"pixel-controls"},C1={class:"side-buttons"},L1=kt({__name:"PopBear2",props:{background:{type:Boolean,default:!1},cameraPosition:{type:Number,default:5},bodyPosition:{type:Object,default:()=>({x:0,y:0,z:0})}},setup(n){const e=n,t=et(null);let i=et(!1),s=et(!1),r=et(!1),o=et(!1);qt(()=>{if(t.value){let d=function(){requestAnimationFrame(d),i.value&&(p.rotation.y+=.03),s.value&&(p.rotation.y-=.03),r.value&&(p.rotation.x-=.03),o.value&&(p.rotation.x+=.03),M.render(f,_)};const f=new Sn,_=new vt(75,window.innerWidth/window.innerHeight,.1,1e3),M=new Mn({antialias:!0,alpha:!0});M.setSize(window.innerWidth,window.innerHeight),t.value.appendChild(M.domElement);const p=new $e,m=new En(16777215,2);f.add(m);const E=new wn(16777215,4);E.position.set(5,5,5),f.add(E);const y=new Wn(16777215,5,50);y.position.set(0,2,4),f.add(y);const S=new kr,D=S.load("/3d-bear-arts/assets/popbear.jpg"),C=S.load("/3d-bear-arts/assets/popbear.jpg");D.wrapS=D.wrapT=Vn,C.wrapS=C.wrapT=Vn,C.repeat.set(2,2);const A=new Le({color:16738740,map:C,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9}),N=new Le({color:16766720,metalness:.3,roughness:.1,clearcoat:1,clearcoatRoughness:.05,transparent:!0,opacity:.4,transmission:.8,ior:1.45,reflectivity:.9,envMapIntensity:1,side:bt}),te=new Le({color:16766720,map:D,metalness:.3,roughness:.5}),x=new Le({color:16738740,metalness:.3,roughness:.1,clearcoat:1,clearcoatRoughness:.05,transparent:!0,opacity:.5,transmission:.8,ior:1.45,reflectivity:.9,envMapIntensity:1,side:bt}),b=new Le({color:9055202,map:D,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9});new Le({color:9055202,metalness:.3,roughness:.1,clearcoat:1,clearcoatRoughness:.05,transparent:!0,opacity:.4,transmission:.8,ior:1.45,reflectivity:.9,envMapIntensity:1,side:bt});const X=new Le({color:65535,map:D,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9}),H=new Le({color:65535,metalness:.3,roughness:.1,clearcoat:1,clearcoatRoughness:.05,transparent:!0,opacity:.4,transmission:.8,ior:1.45,reflectivity:.9,envMapIntensity:1,side:bt}),J=new xe(1,32,32,0,Math.PI),ie=new P(J,N),G=new P(J,A);ie.scale.set(.85,.85,.8),G.scale.set(.85,.85,.8),ie.position.y=-.2,G.position.y=-.2,ie.rotation.y=Math.PI/2,G.rotation.y=Math.PI*1.5;const K=new wt(1,32),z=new P(K,A);z.scale.set(.85,.85,.8),z.position.set(0,-.2,0),z.rotation.y=Math.PI/2;const pe=new $e;pe.add(ie),pe.add(G),pe.add(z),p.add(pe);const me=new xe(.6,32,32,0,Math.PI),_e=new P(me,te);_e.scale.set(1,.95,.95),_e.position.set(0,1,0),_e.rotation.y=Math.PI*1.5;const Me=new P(me,x);Me.scale.set(1,.95,.95),Me.position.set(0,1,0),Me.rotation.y=Math.PI/2;const Pe=new wt(.6,32),ne=new P(Pe,te);ne.position.set(0,1,0),ne.rotation.y=Math.PI/2,ne.scale.set(1,.95,.95);const ue=new $e;ue.add(_e),ue.add(Me),ue.add(ne),p.add(ue);const fe=new xe(.25,32,32),F=new P(fe,A);F.position.set(-.45,1.35,-.1),p.add(F);const re=new P(fe,N);re.position.set(.45,1.35,-.1),p.add(re);const Y=new xe(.25,32,32,Math.PI/2,Math.PI),le=new P(Y,te);le.scale.set(1.1,.6,.8),le.position.set(0,.84,.5),le.rotation.y=Math.PI;const ye=new xe(.25,32,32,Math.PI/2,Math.PI),Q=new P(ye,x);Q.scale.set(1.1,.6,.8),Q.position.set(0,.84,.5),Q.rotation.y=0;const g=new wt(.25,32),T=new P(g,te);T.scale.set(.8,.6,.8),T.position.set(0,.84,.5),T.rotation.y=Math.PI/2;const I=new $e;I.add(le),I.add(Q),I.add(T),p.add(I);const U=new Nt;U.moveTo(0,0),U.bezierCurveTo(0,-.3,-.6,-.3,-.6,0),U.bezierCurveTo(-.6,.3,0,.6,0,1),U.bezierCurveTo(0,.6,.6,.3,.6,0),U.bezierCurveTo(.6,-.3,0,-.3,0,0);const O={depth:.4,bevelEnabled:!0,bevelSegments:2,steps:2,bevelSize:.1,bevelThickness:.1},j=new Gt(U,O),ee=new P(j,te);ee.scale.set(.5,.5,.5),ee.position.set(.35,0,0),ee.rotation.y=Math.PI,ee.rotation.x=Math.PI,p.add(ee);const w=new P(j,X);w.scale.set(.2,.2,.25),w.position.set(.5,-.3,.4),w.rotation.y=Math.PI,w.rotation.x=Math.PI,p.add(w);const v=new P(j,A);v.scale.set(.25,.25,.27),v.position.set(.4,.3,-.2),v.rotation.y=Math.PI,v.rotation.x=Math.PI,p.add(v);const L=new xe(.35,32,32),V=new P(L,X);V.scale.set(.75,1.25,.65),V.position.set(-.7,-.15,.2),p.add(V);const k=new P(L,H);k.scale.set(.75,1.25,.65),k.position.set(.7,-.15,.2),p.add(k);const W=new ln(.2,.22,.6,32),de=new P(W,te);de.position.set(-.4,-1.05,0),p.add(de);const he=new P(W,x);he.position.set(.4,-1.05,0),p.add(he);const ve=new xe(.3,32,32),Ae=new P(ve,te);Ae.scale.set(1,.72,1.5),Ae.position.set(-.4,-1.45,.17),p.add(Ae);const ge=new P(ve,x);ge.scale.set(1,.72,1.5),ge.position.set(.4,-1.45,.17),p.add(ge);const Se=new xe(.44,32,32),Ce=new P(Se,A);Ce.position.set(-.15,-.45,-.4),p.add(Ce);const Ue=new P(Se,N);Ue.position.set(.15,-.45,-.4),p.add(Ue);const Te=new xe(.18,32,32),He=new P(Te,A);He.position.set(0,-.35,-.8),p.add(He),new Xn().load("https://threejs.org/examples/fonts/helvetiker_bold.typeface.json",function(Oe){const B=new xt("X",{font:Oe,size:.2,depth:.05});new dt({color:0});const we=new P(B,A);we.position.set(-.3,.99,.53),we.rotation.x=Ye.degToRad(-5),we.rotation.y=Ye.degToRad(-15),p.add(we);const se=new xt("O",{font:Oe,size:.2,depth:.05});new dt({color:0});const oe=new P(se,X);oe.position.set(.14,.99,.53),oe.rotation.y=Ye.degToRad(12),oe.rotation.x=Ye.degToRad(-5),p.add(oe);const Ee=new xt("POP",{font:Oe,size:1,height:.5,curveSegments:12,bevelEnabled:!0,bevelThickness:.1,bevelSize:.1,bevelSegments:5}),be=new Le({color:16716947,metalness:.3,roughness:.6,clearcoat:.2});new Le({color:16766720,metalness:.3,roughness:.6,clearcoat:.2});const Ve=new Le({color:16766720,metalness:.3,roughness:.6,clearcoat:.2}),tt=new Le({color:16753920,metalness:.3,roughness:.6,clearcoat:.2}),pt=new P(Ee,be);pt.scale.set(.15,.15,.15),pt.position.set(.03,1.16,.1),pt.rotateZ(-25),p.add(pt);const Ze=new P(Ee,b);Ze.scale.set(.14,.14,.14),Ze.rotateZ(45),Ze.position.set(.2,-.7,.3),p.add(Ze);const nt=new P(Ee,Ve);nt.scale.set(.14,.14,.14),nt.rotateZ(45),nt.rotateY(45),nt.position.set(.3,.7,.3),p.add(nt);const mt=new P(Ee,Ve);mt.scale.set(.15,.15,.15),mt.rotateZ(45),mt.rotateY(45),mt.position.set(.35,-1.5,.3),p.add(mt);const Lt=new P(Ee,tt);Lt.scale.set(.17,.17,.17),Lt.rotateZ(45),Lt.rotateY(15),Lt.position.set(.35,1,.3),p.add(Lt)}),He.renderOrder=1,p.scale.set(1.4,1.4,1.4),f.add(p),p.position.set(e.bodyPosition.x,e.bodyPosition.y,e.bodyPosition.z),_.position.set(e.bodyPosition.x,1,e.cameraPosition),_.lookAt(e.bodyPosition.x,0,0),_.position.z=4,d(),yt(()=>e.bodyPosition,Oe=>{p.position.set(Oe.x,Oe.y,Oe.z)}),yt(()=>e.cameraPosition,Oe=>{_.position.set(e.bodyPosition.x,1,Oe),_.lookAt(e.bodyPosition.x,0,0)}),window.addEventListener("resize",()=>{_.aspect=window.innerWidth/window.innerHeight,_.updateProjectionMatrix(),M.setSize(window.innerWidth,window.innerHeight)})}});function a(){s.value=!0}function c(){i.value=!0}function l(){r.value=!0}function h(){o.value=!0}function u(){s.value=!1,i.value=!1,r.value=!1,o.value=!1}return(d,f)=>(Yt(),en(On,null,[Ut("div",{ref_key:"threeCanvas",ref:t,class:yn(n.background?"no-bg":"three-canvas")},null,2),Ut("div",P1,[Ut("button",{class:"pixel-btn up",onMousedown:l,onMouseup:u},"UP",32),Ut("div",C1,[Ut("button",{class:"pixel-btn left",onMousedown:a,onMouseup:u},"LEFT",32),Ut("button",{class:"pixel-btn right",onMousedown:c,onMouseup:u},"RIGHT",32)]),Ut("button",{class:"pixel-btn down",onMousedown:h,onMouseup:u},"DOWN",32)])],64))}}),I1=tn(L1,[["__scopeId","data-v-fa3b549b"]]),D1={class:"pixel-controls"},U1={class:"side-buttons"},N1=kt({__name:"PopArtBear3",props:{background:{type:Boolean,default:!1},cameraPosition:{type:Number,default:5},bodyPosition:{type:Object,default:()=>({x:0,y:0,z:0})}},setup(n){const e=n,t=et(null);let i=et(!1),s=et(!1),r=et(!1),o=et(!1);qt(()=>{if(t.value){let d=function(){requestAnimationFrame(d),i.value&&(p.rotation.y+=.03),s.value&&(p.rotation.y-=.03),r.value&&(p.rotation.x-=.03),o.value&&(p.rotation.x+=.03),M.render(f,_)};const f=new Sn,_=new vt(75,window.innerWidth/window.innerHeight,.1,1e3),M=new Mn({antialias:!0,alpha:!0});M.setSize(window.innerWidth,window.innerHeight),t.value.appendChild(M.domElement);const p=new $e,m=new $e;f.add(m);const E=new En(16777215,2);f.add(E);const y=new wn(16777215,4);y.position.set(5,5,5),f.add(y);const S=new Wn(16777215,5,50);S.position.set(0,2,4),f.add(S);const D=new kr,C=D.load("/3d-bear-arts/assets/pop6.jpg"),A=D.load("/3d-bear-arts/assets/pop7.jpg");C.wrapS=C.wrapT=Vn,A.wrapS=A.wrapT=Vn,A.repeat.set(2,2);const N=new Le({color:16738740,map:A,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9}),te=new Le({color:16766720,metalness:.3,roughness:.1,clearcoat:1,clearcoatRoughness:.05,transparent:!0,opacity:.4,transmission:.8,ior:1.45,reflectivity:.9,envMapIntensity:1,side:bt}),x=new Le({color:16766720,map:C,metalness:.3,roughness:.5}),b=new Le({color:16738740,metalness:.3,roughness:.1,clearcoat:1,clearcoatRoughness:.05,transparent:!0,opacity:.5,transmission:.8,ior:1.45,reflectivity:.9,envMapIntensity:1,side:bt}),X=new Le({color:9055202,map:C,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9});new Le({color:9055202,metalness:.3,roughness:.1,clearcoat:1,clearcoatRoughness:.05,transparent:!0,opacity:.4,transmission:.8,ior:1.45,reflectivity:.9,envMapIntensity:1,side:bt});const H=new Le({color:65535,map:C,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9}),J=new Le({color:65535,metalness:.3,roughness:.1,clearcoat:1,clearcoatRoughness:.05,transparent:!0,opacity:.4,transmission:.8,ior:1.45,reflectivity:.9,envMapIntensity:1,side:bt}),ie=new xe(1,32,32,0,Math.PI),G=new P(ie,te),K=new P(ie,N);G.scale.set(.85,.85,.8),K.scale.set(.85,.85,.8),G.position.y=-.2,K.position.y=-.2,G.rotation.y=Math.PI/2,K.rotation.y=Math.PI*1.5;const z=new wt(1,32),pe=new P(z,N);pe.scale.set(.85,.85,.8),pe.position.set(0,-.2,0),pe.rotation.y=Math.PI/2;const me=new $e;me.add(G),me.add(K),me.add(pe),p.add(me);const _e=new xe(.6,32,32,0,Math.PI),Me=new P(_e,x);Me.scale.set(1,.95,.95),Me.position.set(0,1,0),Me.rotation.y=Math.PI*1.5;const Pe=new P(_e,b);Pe.scale.set(1,.95,.95),Pe.position.set(0,1,0),Pe.rotation.y=Math.PI/2;const ne=new wt(.6,32),ue=new P(ne,x);ue.position.set(0,1,0),ue.rotation.y=Math.PI/2,ue.scale.set(1,.95,.95);const fe=new $e;fe.add(Me),fe.add(Pe),fe.add(ue),p.add(fe);const F=new xe(.25,32,32),re=new P(F,N);re.position.set(-.45,1.35,-.1),p.add(re);const Y=new P(F,te);Y.position.set(.45,1.35,-.1),p.add(Y);const le=new xe(.25,32,32,Math.PI/2,Math.PI),ye=new P(le,x);ye.scale.set(1.1,.6,.8),ye.position.set(0,.84,.5),ye.rotation.y=Math.PI;const Q=new xe(.25,32,32,Math.PI/2,Math.PI),g=new P(Q,b);g.scale.set(1.1,.6,.8),g.position.set(0,.84,.5),g.rotation.y=0;const T=new wt(.25,32),I=new P(T,x);I.scale.set(.8,.6,.8),I.position.set(0,.84,.5),I.rotation.y=Math.PI/2;const U=new $e;U.add(ye),U.add(g),U.add(I),p.add(U);const O=new Nt;O.moveTo(0,0),O.bezierCurveTo(0,-.3,-.6,-.3,-.6,0),O.bezierCurveTo(-.6,.3,0,.6,0,1),O.bezierCurveTo(0,.6,.6,.3,.6,0),O.bezierCurveTo(.6,-.3,0,-.3,0,0);const j={depth:.4,bevelEnabled:!0,bevelSegments:2,steps:2,bevelSize:.1,bevelThickness:.1},ee=new Gt(O,j),w=new P(ee,x);w.scale.set(.5,.5,.5),w.position.set(.35,0,0),w.rotation.y=Math.PI,w.rotation.x=Math.PI,p.add(w);const v=new P(ee,H);v.scale.set(.2,.2,.25),v.position.set(.5,-.3,.4),v.rotation.y=Math.PI,v.rotation.x=Math.PI,p.add(v);const L=new P(ee,N);L.scale.set(.25,.25,.27),L.position.set(.4,.3,-.2),L.rotation.y=Math.PI,L.rotation.x=Math.PI,p.add(L);const V=new xe(.35,32,32),k=new P(V,H);k.scale.set(.75,1.25,.65),k.position.set(-.7,-.15,.2),p.add(k);const W=new P(V,J);W.scale.set(.75,1.25,.65),W.position.set(.7,-.15,.2),p.add(W);const de=new ln(.2,.22,.6,32),he=new P(de,x);he.position.set(-.4,-1.05,0),p.add(he);const ve=new P(de,b);ve.position.set(.4,-1.05,0),p.add(ve);const Ae=new xe(.3,32,32),ge=new P(Ae,x);ge.scale.set(1,.72,1.5),ge.position.set(-.4,-1.45,.17),p.add(ge);const Se=new P(Ae,b);Se.scale.set(1,.72,1.5),Se.position.set(.4,-1.45,.17),p.add(Se);const Ce=new xe(.44,32,32),Ue=new P(Ce,N);Ue.position.set(-.15,-.45,-.4),p.add(Ue);const Te=new P(Ce,te);Te.position.set(.15,-.45,-.4),p.add(Te);const He=new xe(.18,32,32),Ne=new P(He,N);Ne.position.set(0,-.35,-.8),p.add(Ne),new Xn().load("https://threejs.org/examples/fonts/helvetiker_bold.typeface.json",function(B){const we=new xt("X",{font:B,size:.2,depth:.05});new dt({color:0});const se=new P(we,N);se.position.set(-.3,.99,.53),se.rotation.x=Ye.degToRad(-5),se.rotation.y=Ye.degToRad(-15),p.add(se);const oe=new xt("O",{font:B,size:.2,depth:.05});new dt({color:0});const Ee=new P(oe,H);Ee.position.set(.14,.99,.53),Ee.rotation.y=Ye.degToRad(12),Ee.rotation.x=Ye.degToRad(-5),p.add(Ee);const be=new xt("POP",{font:B,size:1,height:.5,curveSegments:12,bevelEnabled:!0,bevelThickness:.1,bevelSize:.1,bevelSegments:5}),Ve=new xt("BAO",{font:B,size:2,height:.5,curveSegments:12,bevelEnabled:!0,bevelThickness:.1,bevelSize:.1,bevelSegments:3}),tt=new Le({color:16716947,metalness:.3,roughness:.6,clearcoat:.2});new Le({color:16766720,metalness:.3,roughness:.6,clearcoat:.2});const pt=new Le({color:16766720,metalness:.3,roughness:.6,clearcoat:.2}),Ze=new Le({color:16753920,metalness:.3,roughness:.6,clearcoat:.2}),nt=new P(be,tt);nt.scale.set(.15,.15,.15),nt.position.set(.02,1.16,.1),nt.rotateZ(-25),p.add(nt);const mt=new P(be,X);mt.scale.set(.14,.14,.14),mt.rotateZ(45),mt.position.set(.2,-.7,.3),p.add(mt);const Lt=new P(be,pt);Lt.scale.set(.14,.14,.14),Lt.rotateZ(45),Lt.rotateY(45),Lt.position.set(.3,.7,.3),p.add(Lt);const un=new P(be,pt);un.scale.set(.15,.15,.15),un.rotateZ(45),un.rotateY(45),un.position.set(.35,-1.5,.3),p.add(un);const Dt=new P(be,Ze);Dt.scale.set(.17,.17,.17),Dt.rotateZ(45),Dt.rotateY(15),Dt.position.set(.35,1,.3),p.add(Dt);const zi=new P(Ve,x);zi.scale.set(1.2,1.2,1.2),zi.position.set(-4,0,-3),m.add(zi)}),Ne.renderOrder=1,p.scale.set(1.4,1.4,1.4),f.add(p),p.position.set(e.bodyPosition.x,e.bodyPosition.y,e.bodyPosition.z),_.position.set(e.bodyPosition.x,1,e.cameraPosition),_.lookAt(e.bodyPosition.x,0,0),_.position.z=4,d(),yt(()=>e.bodyPosition,B=>{p.position.set(B.x,B.y,B.z)}),yt(()=>e.cameraPosition,B=>{_.position.set(e.bodyPosition.x,1,B),_.lookAt(e.bodyPosition.x,0,0)}),window.addEventListener("resize",()=>{_.aspect=window.innerWidth/window.innerHeight,_.updateProjectionMatrix(),M.setSize(window.innerWidth,window.innerHeight)})}});function a(){s.value=!0}function c(){i.value=!0}function l(){r.value=!0}function h(){o.value=!0}function u(){s.value=!1,i.value=!1,r.value=!1,o.value=!1}return(d,f)=>(Yt(),en(On,null,[Ut("div",{ref_key:"threeCanvas",ref:t,class:yn(n.background?"no-bg":"three-canvas")},null,2),Ut("div",D1,[Ut("button",{class:"pixel-btn up",onMousedown:l,onMouseup:u},"UP",32),Ut("div",U1,[Ut("button",{class:"pixel-btn left",onMousedown:a,onMouseup:u},"LEFT",32),Ut("button",{class:"pixel-btn right",onMousedown:c,onMouseup:u},"RIGHT",32)]),Ut("button",{class:"pixel-btn down",onMousedown:h,onMouseup:u},"DOWN",32)])],64))}}),F1=tn(N1,[["__scopeId","data-v-85cc62dc"]]),O1=[{path:"/3d-bear-arts",name:"ThreeScene",component:u1},{path:"/3d-bear-arts/half",name:"Haltransparent",component:S1},{path:"/3d-bear-arts/sliver",name:"Mirror",component:E1},{path:"/3d-bear-arts/metal",name:"Leather",component:T1},{path:"/3d-bear-arts/pop-art",name:"Pop",component:R1},{path:"/3d-bear-arts/pop-art-bear",name:"PopArtBear 2",component:I1},{path:"/3d-bear-arts/pop-art-bear-3",name:"PopArtBear 3",component:F1},{path:"/3d-bear-arts/halfTransparent",name:"Transparent",component:y1},{path:"/3d-bear-arts/bluePink",name:"BluePinkBear",component:v1},{path:"/3d-bear-arts/diamond",name:"DiamondBear",component:p1},{path:"/3d-bear-arts/pink",name:"PinkBear",component:op},{path:"/3d-bear-arts/purple",name:"PurpleBear",component:ap},{path:"/3d-bear-arts/glass",name:"GlassBear",component:g1}],B1=$g({history:bg(),routes:O1}),pp=V0(j0);pp.use(B1);pp.mount("#app");
