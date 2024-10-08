(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
* @vue/shared v3.5.10
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function nc(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const at={},wr=[],An=()=>{},fp=()=>!1,Do=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),ic=n=>n.startsWith("onUpdate:"),wt=Object.assign,rc=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},dp=Object.prototype.hasOwnProperty,Qe=(n,e)=>dp.call(n,e),We=Array.isArray,ts=n=>Uo(n)==="[object Map]",pp=n=>Uo(n)==="[object Set]",ke=n=>typeof n=="function",St=n=>typeof n=="string",Gr=n=>typeof n=="symbol",pt=n=>n!==null&&typeof n=="object",Jh=n=>(pt(n)||ke(n))&&ke(n.then)&&ke(n.catch),mp=Object.prototype.toString,Uo=n=>mp.call(n),gp=n=>Uo(n).slice(8,-1),_p=n=>Uo(n)==="[object Object]",sc=n=>St(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,ns=nc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),No=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},vp=/-(\w)/g,on=No(n=>n.replace(vp,(e,t)=>t?t.toUpperCase():"")),xp=/\B([A-Z])/g,ji=No(n=>n.replace(xp,"-$1").toLowerCase()),Fo=No(n=>n.charAt(0).toUpperCase()+n.slice(1)),na=No(n=>n?`on${Fo(n)}`:""),yi=(n,e)=>!Object.is(n,e),ia=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},Qh=(n,e,t,i=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:i,value:t})},yp=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let Zc;const ef=()=>Zc||(Zc=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function oc(n){if(We(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],r=St(i)?bp(i):oc(i);if(r)for(const s in r)e[s]=r[s]}return e}else if(St(n)||pt(n))return n}const Mp=/;(?![^(]*\))/g,Sp=/:([^]+)/,Ep=/\/\*[^]*?\*\//g;function bp(n){const e={};return n.replace(Ep,"").split(Mp).forEach(t=>{if(t){const i=t.split(Sp);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function Zi(n){let e="";if(St(n))e=n;else if(We(n))for(let t=0;t<n.length;t++){const i=Zi(n[t]);i&&(e+=i+" ")}else if(pt(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const wp="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Tp=nc(wp);function tf(n){return!!n||n===""}/**
* @vue/reactivity v3.5.10
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Kt;class Ap{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Kt,!e&&Kt&&(this.index=(Kt.scopes||(Kt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=Kt;try{return Kt=this,e()}finally{Kt=t}}}on(){Kt=this}off(){Kt=this.parent}stop(e){if(this._active){let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.scopes)for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function Rp(){return Kt}let st;const ra=new WeakSet;class nf{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Kt&&Kt.active&&Kt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,ra.has(this)&&(ra.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||sf(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Jc(this),of(this);const e=st,t=gn;st=this,gn=!0;try{return this.fn()}finally{af(this),st=e,gn=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)cc(e);this.deps=this.depsTail=void 0,Jc(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?ra.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Ja(this)&&this.run()}get dirty(){return Ja(this)}}let rf=0,Sr;function sf(n){n.flags|=8,n.next=Sr,Sr=n}function ac(){rf++}function lc(){if(--rf>0)return;let n;for(;Sr;){let e=Sr,t;for(;e;)e.flags&1||(e.flags&=-9),e=e.next;for(e=Sr,Sr=void 0;e;){if(t=e.next,e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){n||(n=i)}e=t}}if(n)throw n}function of(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function af(n){let e,t=n.depsTail,i=t;for(;i;){const r=i.prevDep;i.version===-1?(i===t&&(t=r),cc(i),Cp(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=r}n.deps=e,n.depsTail=t}function Ja(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(lf(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function lf(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===ds))return;n.globalVersion=ds;const e=n.dep;if(n.flags|=2,e.version>0&&!n.isSSR&&n.deps&&!Ja(n)){n.flags&=-3;return}const t=st,i=gn;st=n,gn=!0;try{of(n);const r=n.fn(n._value);(e.version===0||yi(r,n._value))&&(n._value=r,e.version++)}catch(r){throw e.version++,r}finally{st=t,gn=i,af(n),n.flags&=-3}}function cc(n,e=!1){const{dep:t,prevSub:i,nextSub:r}=n;if(i&&(i.nextSub=r,n.prevSub=void 0),r&&(r.prevSub=i,n.nextSub=void 0),t.subs===n&&(t.subs=i),!t.subs&&t.computed){t.computed.flags&=-5;for(let s=t.computed.deps;s;s=s.nextDep)cc(s,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function Cp(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let gn=!0;const cf=[];function Si(){cf.push(gn),gn=!1}function Ei(){const n=cf.pop();gn=n===void 0?!0:n}function Jc(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=st;st=void 0;try{e()}finally{st=t}}}let ds=0;class Pp{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class uc{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.target=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!st||!gn||st===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==st)t=this.activeLink=new Pp(st,this),st.deps?(t.prevDep=st.depsTail,st.depsTail.nextDep=t,st.depsTail=t):st.deps=st.depsTail=t,uf(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const i=t.nextDep;i.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=i),t.prevDep=st.depsTail,t.nextDep=void 0,st.depsTail.nextDep=t,st.depsTail=t,st.deps===t&&(st.deps=i)}return t}trigger(e){this.version++,ds++,this.notify(e)}notify(e){ac();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{lc()}}}function uf(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)uf(i)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const Qa=new WeakMap,ki=Symbol(""),el=Symbol(""),ps=Symbol("");function It(n,e,t){if(gn&&st){let i=Qa.get(n);i||Qa.set(n,i=new Map);let r=i.get(t);r||(i.set(t,r=new uc),r.target=n,r.map=i,r.key=t),r.track()}}function ei(n,e,t,i,r,s){const o=Qa.get(n);if(!o){ds++;return}const a=l=>{l&&l.trigger()};if(ac(),e==="clear")o.forEach(a);else{const l=We(n),c=l&&sc(t);if(l&&t==="length"){const u=Number(i);o.forEach((h,f)=>{(f==="length"||f===ps||!Gr(f)&&f>=u)&&a(h)})}else switch(t!==void 0&&a(o.get(t)),c&&a(o.get(ps)),e){case"add":l?c&&a(o.get("length")):(a(o.get(ki)),ts(n)&&a(o.get(el)));break;case"delete":l||(a(o.get(ki)),ts(n)&&a(o.get(el)));break;case"set":ts(n)&&a(o.get(ki));break}}lc()}function rr(n){const e=tt(n);return e===n?e:(It(e,"iterate",ps),_n(n)?e:e.map(Ft))}function hc(n){return It(n=tt(n),"iterate",ps),n}const Lp={__proto__:null,[Symbol.iterator](){return sa(this,Symbol.iterator,Ft)},concat(...n){return rr(this).concat(...n.map(e=>We(e)?rr(e):e))},entries(){return sa(this,"entries",n=>(n[1]=Ft(n[1]),n))},every(n,e){return On(this,"every",n,e,void 0,arguments)},filter(n,e){return On(this,"filter",n,e,t=>t.map(Ft),arguments)},find(n,e){return On(this,"find",n,e,Ft,arguments)},findIndex(n,e){return On(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return On(this,"findLast",n,e,Ft,arguments)},findLastIndex(n,e){return On(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return On(this,"forEach",n,e,void 0,arguments)},includes(...n){return oa(this,"includes",n)},indexOf(...n){return oa(this,"indexOf",n)},join(n){return rr(this).join(n)},lastIndexOf(...n){return oa(this,"lastIndexOf",n)},map(n,e){return On(this,"map",n,e,void 0,arguments)},pop(){return Wr(this,"pop")},push(...n){return Wr(this,"push",n)},reduce(n,...e){return Qc(this,"reduce",n,e)},reduceRight(n,...e){return Qc(this,"reduceRight",n,e)},shift(){return Wr(this,"shift")},some(n,e){return On(this,"some",n,e,void 0,arguments)},splice(...n){return Wr(this,"splice",n)},toReversed(){return rr(this).toReversed()},toSorted(n){return rr(this).toSorted(n)},toSpliced(...n){return rr(this).toSpliced(...n)},unshift(...n){return Wr(this,"unshift",n)},values(){return sa(this,"values",Ft)}};function sa(n,e,t){const i=hc(n),r=i[e]();return i!==n&&!_n(n)&&(r._next=r.next,r.next=()=>{const s=r._next();return s.value&&(s.value=t(s.value)),s}),r}const Ip=Array.prototype;function On(n,e,t,i,r,s){const o=hc(n),a=o!==n&&!_n(n),l=o[e];if(l!==Ip[e]){const h=l.apply(n,s);return a?Ft(h):h}let c=t;o!==n&&(a?c=function(h,f){return t.call(this,Ft(h),f,n)}:t.length>2&&(c=function(h,f){return t.call(this,h,f,n)}));const u=l.call(o,c,i);return a&&r?r(u):u}function Qc(n,e,t,i){const r=hc(n);let s=t;return r!==n&&(_n(n)?t.length>3&&(s=function(o,a,l){return t.call(this,o,a,l,n)}):s=function(o,a,l){return t.call(this,o,Ft(a),l,n)}),r[e](s,...i)}function oa(n,e,t){const i=tt(n);It(i,"iterate",ps);const r=i[e](...t);return(r===-1||r===!1)&&mc(t[0])?(t[0]=tt(t[0]),i[e](...t)):r}function Wr(n,e,t=[]){Si(),ac();const i=tt(n)[e].apply(n,t);return lc(),Ei(),i}const Dp=nc("__proto__,__v_isRef,__isVue"),hf=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(Gr));function Up(n){Gr(n)||(n=String(n));const e=tt(this);return It(e,"has",n),e.hasOwnProperty(n)}class ff{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,i){const r=this._isReadonly,s=this._isShallow;if(t==="__v_isReactive")return!r;if(t==="__v_isReadonly")return r;if(t==="__v_isShallow")return s;if(t==="__v_raw")return i===(r?s?Yp:gf:s?mf:pf).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=We(e);if(!r){let l;if(o&&(l=Lp[t]))return l;if(t==="hasOwnProperty")return Up}const a=Reflect.get(e,t,Pt(e)?e:i);return(Gr(t)?hf.has(t):Dp(t))||(r||It(e,"get",t),s)?a:Pt(a)?o&&sc(t)?a:a.value:pt(a)?r?vf(a):Bo(a):a}}class df extends ff{constructor(e=!1){super(!1,e)}set(e,t,i,r){let s=e[t];if(!this._isShallow){const l=Vi(s);if(!_n(i)&&!Vi(i)&&(s=tt(s),i=tt(i)),!We(e)&&Pt(s)&&!Pt(i))return l?!1:(s.value=i,!0)}const o=We(e)&&sc(t)?Number(t)<e.length:Qe(e,t),a=Reflect.set(e,t,i,Pt(e)?e:r);return e===tt(r)&&(o?yi(i,s)&&ei(e,"set",t,i):ei(e,"add",t,i)),a}deleteProperty(e,t){const i=Qe(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&i&&ei(e,"delete",t,void 0),r}has(e,t){const i=Reflect.has(e,t);return(!Gr(t)||!hf.has(t))&&It(e,"has",t),i}ownKeys(e){return It(e,"iterate",We(e)?"length":ki),Reflect.ownKeys(e)}}class Np extends ff{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const Fp=new df,Op=new Np,Bp=new df(!0);const fc=n=>n,Oo=n=>Reflect.getPrototypeOf(n);function Fs(n,e,t=!1,i=!1){n=n.__v_raw;const r=tt(n),s=tt(e);t||(yi(e,s)&&It(r,"get",e),It(r,"get",s));const{has:o}=Oo(r),a=i?fc:t?gc:Ft;if(o.call(r,e))return a(n.get(e));if(o.call(r,s))return a(n.get(s));n!==r&&n.get(e)}function Os(n,e=!1){const t=this.__v_raw,i=tt(t),r=tt(n);return e||(yi(n,r)&&It(i,"has",n),It(i,"has",r)),n===r?t.has(n):t.has(n)||t.has(r)}function Bs(n,e=!1){return n=n.__v_raw,!e&&It(tt(n),"iterate",ki),Reflect.get(n,"size",n)}function eu(n,e=!1){!e&&!_n(n)&&!Vi(n)&&(n=tt(n));const t=tt(this);return Oo(t).has.call(t,n)||(t.add(n),ei(t,"add",n,n)),this}function tu(n,e,t=!1){!t&&!_n(e)&&!Vi(e)&&(e=tt(e));const i=tt(this),{has:r,get:s}=Oo(i);let o=r.call(i,n);o||(n=tt(n),o=r.call(i,n));const a=s.call(i,n);return i.set(n,e),o?yi(e,a)&&ei(i,"set",n,e):ei(i,"add",n,e),this}function nu(n){const e=tt(this),{has:t,get:i}=Oo(e);let r=t.call(e,n);r||(n=tt(n),r=t.call(e,n)),i&&i.call(e,n);const s=e.delete(n);return r&&ei(e,"delete",n,void 0),s}function iu(){const n=tt(this),e=n.size!==0,t=n.clear();return e&&ei(n,"clear",void 0,void 0),t}function zs(n,e){return function(i,r){const s=this,o=s.__v_raw,a=tt(o),l=e?fc:n?gc:Ft;return!n&&It(a,"iterate",ki),o.forEach((c,u)=>i.call(r,l(c),l(u),s))}}function Hs(n,e,t){return function(...i){const r=this.__v_raw,s=tt(r),o=ts(s),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,c=r[n](...i),u=t?fc:e?gc:Ft;return!e&&It(s,"iterate",l?el:ki),{next(){const{value:h,done:f}=c.next();return f?{value:h,done:f}:{value:a?[u(h[0]),u(h[1])]:u(h),done:f}},[Symbol.iterator](){return this}}}}function si(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function zp(){const n={get(s){return Fs(this,s)},get size(){return Bs(this)},has:Os,add:eu,set:tu,delete:nu,clear:iu,forEach:zs(!1,!1)},e={get(s){return Fs(this,s,!1,!0)},get size(){return Bs(this)},has:Os,add(s){return eu.call(this,s,!0)},set(s,o){return tu.call(this,s,o,!0)},delete:nu,clear:iu,forEach:zs(!1,!0)},t={get(s){return Fs(this,s,!0)},get size(){return Bs(this,!0)},has(s){return Os.call(this,s,!0)},add:si("add"),set:si("set"),delete:si("delete"),clear:si("clear"),forEach:zs(!0,!1)},i={get(s){return Fs(this,s,!0,!0)},get size(){return Bs(this,!0)},has(s){return Os.call(this,s,!0)},add:si("add"),set:si("set"),delete:si("delete"),clear:si("clear"),forEach:zs(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=Hs(s,!1,!1),t[s]=Hs(s,!0,!1),e[s]=Hs(s,!1,!0),i[s]=Hs(s,!0,!0)}),[n,t,e,i]}const[Hp,Gp,kp,Vp]=zp();function dc(n,e){const t=e?n?Vp:kp:n?Gp:Hp;return(i,r,s)=>r==="__v_isReactive"?!n:r==="__v_isReadonly"?n:r==="__v_raw"?i:Reflect.get(Qe(t,r)&&r in i?t:i,r,s)}const Wp={get:dc(!1,!1)},Xp={get:dc(!1,!0)},qp={get:dc(!0,!1)};const pf=new WeakMap,mf=new WeakMap,gf=new WeakMap,Yp=new WeakMap;function $p(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Kp(n){return n.__v_skip||!Object.isExtensible(n)?0:$p(gp(n))}function Bo(n){return Vi(n)?n:pc(n,!1,Fp,Wp,pf)}function _f(n){return pc(n,!1,Bp,Xp,mf)}function vf(n){return pc(n,!0,Op,qp,gf)}function pc(n,e,t,i,r){if(!pt(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const s=r.get(n);if(s)return s;const o=Kp(n);if(o===0)return n;const a=new Proxy(n,o===2?i:t);return r.set(n,a),a}function is(n){return Vi(n)?is(n.__v_raw):!!(n&&n.__v_isReactive)}function Vi(n){return!!(n&&n.__v_isReadonly)}function _n(n){return!!(n&&n.__v_isShallow)}function mc(n){return n?!!n.__v_raw:!1}function tt(n){const e=n&&n.__v_raw;return e?tt(e):n}function jp(n){return!Qe(n,"__v_skip")&&Object.isExtensible(n)&&Qh(n,"__v_skip",!0),n}const Ft=n=>pt(n)?Bo(n):n,gc=n=>pt(n)?vf(n):n;function Pt(n){return n?n.__v_isRef===!0:!1}function Tt(n){return xf(n,!1)}function Zp(n){return xf(n,!0)}function xf(n,e){return Pt(n)?n:new Jp(n,e)}class Jp{constructor(e,t){this.dep=new uc,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:tt(e),this._value=t?e:Ft(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,i=this.__v_isShallow||_n(e)||Vi(e);e=i?e:tt(e),yi(e,t)&&(this._rawValue=e,this._value=i?e:Ft(e),this.dep.trigger())}}function Qt(n){return Pt(n)?n.value:n}const Qp={get:(n,e,t)=>e==="__v_raw"?n:Qt(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const r=n[e];return Pt(r)&&!Pt(t)?(r.value=t,!0):Reflect.set(n,e,t,i)}};function yf(n){return is(n)?n:new Proxy(n,Qp)}class em{constructor(e,t,i){this.fn=e,this.setter=t,this._value=void 0,this.dep=new uc(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=ds-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&st!==this)return sf(this),!0}get value(){const e=this.dep.track();return lf(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function tm(n,e,t=!1){let i,r;return ke(n)?i=n:(i=n.get,r=n.set),new em(i,r,t)}const Gs={},Eo=new WeakMap;let Ni;function nm(n,e=!1,t=Ni){if(t){let i=Eo.get(t);i||Eo.set(t,i=[]),i.push(n)}}function im(n,e,t=at){const{immediate:i,deep:r,once:s,scheduler:o,augmentJob:a,call:l}=t,c=S=>r?S:_n(S)||r===!1||r===0?gi(S,1):gi(S);let u,h,f,d,_=!1,x=!1;if(Pt(n)?(h=()=>n.value,_=_n(n)):is(n)?(h=()=>c(n),_=!0):We(n)?(x=!0,_=n.some(S=>is(S)||_n(S)),h=()=>n.map(S=>{if(Pt(S))return S.value;if(is(S))return c(S);if(ke(S))return l?l(S,2):S()})):ke(n)?e?h=l?()=>l(n,2):n:h=()=>{if(f){Si();try{f()}finally{Ei()}}const S=Ni;Ni=u;try{return l?l(n,3,[d]):n(d)}finally{Ni=S}}:h=An,e&&r){const S=h,I=r===!0?1/0:r;h=()=>gi(S(),I)}const m=Rp(),p=()=>{u.stop(),m&&rc(m.effects,u)};if(s&&e){const S=e;e=(...I)=>{S(...I),p()}}let w=x?new Array(n.length).fill(Gs):Gs;const M=S=>{if(!(!(u.flags&1)||!u.dirty&&!S))if(e){const I=u.run();if(r||_||(x?I.some((C,R)=>yi(C,w[R])):yi(I,w))){f&&f();const C=Ni;Ni=u;try{const R=[I,w===Gs?void 0:x&&w[0]===Gs?[]:w,d];l?l(e,3,R):e(...R),w=I}finally{Ni=C}}}else u.run()};return a&&a(M),u=new nf(h),u.scheduler=o?()=>o(M,!1):M,d=S=>nm(S,!1,u),f=u.onStop=()=>{const S=Eo.get(u);if(S){if(l)l(S,4);else for(const I of S)I();Eo.delete(u)}},e?i?M(!0):w=u.run():o?o(M.bind(null,!0),!0):u.run(),p.pause=u.pause.bind(u),p.resume=u.resume.bind(u),p.stop=p,p}function gi(n,e=1/0,t){if(e<=0||!pt(n)||n.__v_skip||(t=t||new Set,t.has(n)))return n;if(t.add(n),e--,Pt(n))gi(n.value,e,t);else if(We(n))for(let i=0;i<n.length;i++)gi(n[i],e,t);else if(pp(n)||ts(n))n.forEach(i=>{gi(i,e,t)});else if(_p(n)){for(const i in n)gi(n[i],e,t);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&gi(n[i],e,t)}return n}/**
* @vue/runtime-core v3.5.10
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Ts(n,e,t,i){try{return i?n(...i):n()}catch(r){zo(r,e,t)}}function Cn(n,e,t,i){if(ke(n)){const r=Ts(n,e,t,i);return r&&Jh(r)&&r.catch(s=>{zo(s,e,t)}),r}if(We(n)){const r=[];for(let s=0;s<n.length;s++)r.push(Cn(n[s],e,t,i));return r}}function zo(n,e,t,i=!0){const r=e?e.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||at;if(e){let a=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${t}`;for(;a;){const u=a.ec;if(u){for(let h=0;h<u.length;h++)if(u[h](n,l,c)===!1)return}a=a.parent}if(s){Si(),Ts(s,null,10,[n,l,c]),Ei();return}}rm(n,t,r,i,o)}function rm(n,e,t,i=!0,r=!1){if(r)throw n;console.error(n)}let ms=!1,tl=!1;const Ot=[];let En=0;const Tr=[];let di=null,xr=0;const Mf=Promise.resolve();let _c=null;function Sf(n){const e=_c||Mf;return n?e.then(this?n.bind(this):n):e}function sm(n){let e=ms?En+1:0,t=Ot.length;for(;e<t;){const i=e+t>>>1,r=Ot[i],s=gs(r);s<n||s===n&&r.flags&2?e=i+1:t=i}return e}function vc(n){if(!(n.flags&1)){const e=gs(n),t=Ot[Ot.length-1];!t||!(n.flags&2)&&e>=gs(t)?Ot.push(n):Ot.splice(sm(e),0,n),n.flags|=1,Ef()}}function Ef(){!ms&&!tl&&(tl=!0,_c=Mf.then(wf))}function om(n){We(n)?Tr.push(...n):di&&n.id===-1?di.splice(xr+1,0,n):n.flags&1||(Tr.push(n),n.flags|=1),Ef()}function ru(n,e,t=ms?En+1:0){for(;t<Ot.length;t++){const i=Ot[t];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;Ot.splice(t,1),t--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function bf(n){if(Tr.length){const e=[...new Set(Tr)].sort((t,i)=>gs(t)-gs(i));if(Tr.length=0,di){di.push(...e);return}for(di=e,xr=0;xr<di.length;xr++){const t=di[xr];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}di=null,xr=0}}const gs=n=>n.id==null?n.flags&2?-1:1/0:n.id;function wf(n){tl=!1,ms=!0;try{for(En=0;En<Ot.length;En++){const e=Ot[En];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Ts(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;En<Ot.length;En++){const e=Ot[En];e&&(e.flags&=-2)}En=0,Ot.length=0,bf(),ms=!1,_c=null,(Ot.length||Tr.length)&&wf()}}let pn=null,Tf=null;function bo(n){const e=pn;return pn=n,Tf=n&&n.type.__scopeId||null,e}function Xn(n,e=pn,t){if(!e||n._n)return n;const i=(...r)=>{i._d&&pu(-1);const s=bo(e);let o;try{o=n(...r)}finally{bo(s),i._d&&pu(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function Ai(n,e,t,i){const r=n.dirs,s=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];s&&(a.oldValue=s[o].value);let l=a.dir[i];l&&(Si(),Cn(l,t,8,[n.el,a,n,e]),Ei())}}const am=Symbol("_vte"),lm=n=>n.__isTeleport;function xc(n,e){n.shapeFlag&6&&n.component?(n.transition=e,xc(n.component.subTree,e)):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}/*! #__NO_SIDE_EFFECTS__ */function an(n,e){return ke(n)?wt({name:n.name},e,{setup:n}):n}function Af(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function nl(n,e,t,i,r=!1){if(We(n)){n.forEach((_,x)=>nl(_,e&&(We(e)?e[x]:e),t,i,r));return}if(rs(i)&&!r)return;const s=i.shapeFlag&4?bc(i.component):i.el,o=r?null:s,{i:a,r:l}=n,c=e&&e.r,u=a.refs===at?a.refs={}:a.refs,h=a.setupState,f=tt(h),d=h===at?()=>!1:_=>Qe(f,_);if(c!=null&&c!==l&&(St(c)?(u[c]=null,d(c)&&(h[c]=null)):Pt(c)&&(c.value=null)),ke(l))Ts(l,a,12,[o,u]);else{const _=St(l),x=Pt(l);if(_||x){const m=()=>{if(n.f){const p=_?d(l)?h[l]:u[l]:l.value;r?We(p)&&rc(p,s):We(p)?p.includes(s)||p.push(s):_?(u[l]=[s],d(l)&&(h[l]=u[l])):(l.value=[s],n.k&&(u[n.k]=l.value))}else _?(u[l]=o,d(l)&&(h[l]=o)):x&&(l.value=o,n.k&&(u[n.k]=o))};o?(m.id=-1,$t(m,t)):m()}}}const rs=n=>!!n.type.__asyncLoader,Rf=n=>n.type.__isKeepAlive;function cm(n,e){Cf(n,"a",e)}function um(n,e){Cf(n,"da",e)}function Cf(n,e,t=Ct){const i=n.__wdc||(n.__wdc=()=>{let r=t;for(;r;){if(r.isDeactivated)return;r=r.parent}return n()});if(Ho(e,i,t),t){let r=t.parent;for(;r&&r.parent;)Rf(r.parent.vnode)&&hm(i,e,t,r),r=r.parent}}function hm(n,e,t,i){const r=Ho(e,n,i,!0);yc(()=>{rc(i[e],r)},t)}function Ho(n,e,t=Ct,i=!1){if(t){const r=t[n]||(t[n]=[]),s=e.__weh||(e.__weh=(...o)=>{Si();const a=As(t),l=Cn(e,t,n,o);return a(),Ei(),l});return i?r.unshift(s):r.push(s),s}}const ii=n=>(e,t=Ct)=>{(!Vo||n==="sp")&&Ho(n,(...i)=>e(...i),t)},fm=ii("bm"),Ln=ii("m"),dm=ii("bu"),pm=ii("u"),mm=ii("bum"),yc=ii("um"),gm=ii("sp"),_m=ii("rtg"),vm=ii("rtc");function xm(n,e=Ct){Ho("ec",n,e)}const ym="components";function su(n,e){return Sm(ym,n,!0,e)||n}const Mm=Symbol.for("v-ndc");function Sm(n,e,t=!0,i=!1){const r=pn||Ct;if(r){const s=r.type;{const a=ug(s,!1);if(a&&(a===e||a===on(e)||a===Fo(on(e))))return s}const o=ou(r[n]||s[n],e)||ou(r.appContext[n],e);return!o&&i?s:o}}function ou(n,e){return n&&(n[e]||n[on(e)]||n[Fo(on(e))])}const il=n=>n?Kf(n)?bc(n):il(n.parent):null,ss=wt(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>il(n.parent),$root:n=>il(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>Mc(n),$forceUpdate:n=>n.f||(n.f=()=>{vc(n.update)}),$nextTick:n=>n.n||(n.n=Sf.bind(n.proxy)),$watch:n=>Vm.bind(n)}),aa=(n,e)=>n!==at&&!n.__isScriptSetup&&Qe(n,e),Em={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:i,data:r,props:s,accessCache:o,type:a,appContext:l}=n;let c;if(e[0]!=="$"){const d=o[e];if(d!==void 0)switch(d){case 1:return i[e];case 2:return r[e];case 4:return t[e];case 3:return s[e]}else{if(aa(i,e))return o[e]=1,i[e];if(r!==at&&Qe(r,e))return o[e]=2,r[e];if((c=n.propsOptions[0])&&Qe(c,e))return o[e]=3,s[e];if(t!==at&&Qe(t,e))return o[e]=4,t[e];rl&&(o[e]=0)}}const u=ss[e];let h,f;if(u)return e==="$attrs"&&It(n.attrs,"get",""),u(n);if((h=a.__cssModules)&&(h=h[e]))return h;if(t!==at&&Qe(t,e))return o[e]=4,t[e];if(f=l.config.globalProperties,Qe(f,e))return f[e]},set({_:n},e,t){const{data:i,setupState:r,ctx:s}=n;return aa(r,e)?(r[e]=t,!0):i!==at&&Qe(i,e)?(i[e]=t,!0):Qe(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(s[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:r,propsOptions:s}},o){let a;return!!t[o]||n!==at&&Qe(n,o)||aa(e,o)||(a=s[0])&&Qe(a,o)||Qe(i,o)||Qe(ss,o)||Qe(r.config.globalProperties,o)},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:Qe(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function au(n){return We(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let rl=!0;function bm(n){const e=Mc(n),t=n.proxy,i=n.ctx;rl=!1,e.beforeCreate&&lu(e.beforeCreate,n,"bc");const{data:r,computed:s,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:f,beforeUpdate:d,updated:_,activated:x,deactivated:m,beforeDestroy:p,beforeUnmount:w,destroyed:M,unmounted:S,render:I,renderTracked:C,renderTriggered:R,errorCaptured:D,serverPrefetch:se,expose:y,inheritAttrs:b,components:q,directives:V,filters:Z}=e;if(c&&wm(c,i,null),o)for(const K in o){const z=o[K];ke(z)&&(i[K]=z.bind(t))}if(r){const K=r.call(t,t);pt(K)&&(n.data=Bo(K))}if(rl=!0,s)for(const K in s){const z=s[K],ge=ke(z)?z.bind(t,t):ke(z.get)?z.get.bind(t,t):An,me=!ke(z)&&ke(z.set)?z.set.bind(t):An,_e=bt({get:ge,set:me});Object.defineProperty(i,K,{enumerable:!0,configurable:!0,get:()=>_e.value,set:be=>_e.value=be})}if(a)for(const K in a)Pf(a[K],i,t,K);if(l){const K=ke(l)?l.call(t):l;Reflect.ownKeys(K).forEach(z=>{fo(z,K[z])})}u&&lu(u,n,"c");function G(K,z){We(z)?z.forEach(ge=>K(ge.bind(t))):z&&K(z.bind(t))}if(G(fm,h),G(Ln,f),G(dm,d),G(pm,_),G(cm,x),G(um,m),G(xm,D),G(vm,C),G(_m,R),G(mm,w),G(yc,S),G(gm,se),We(y))if(y.length){const K=n.exposed||(n.exposed={});y.forEach(z=>{Object.defineProperty(K,z,{get:()=>t[z],set:ge=>t[z]=ge})})}else n.exposed||(n.exposed={});I&&n.render===An&&(n.render=I),b!=null&&(n.inheritAttrs=b),q&&(n.components=q),V&&(n.directives=V),se&&Af(n)}function wm(n,e,t=An){We(n)&&(n=sl(n));for(const i in n){const r=n[i];let s;pt(r)?"default"in r?s=ti(r.from||i,r.default,!0):s=ti(r.from||i):s=ti(r),Pt(s)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):e[i]=s}}function lu(n,e,t){Cn(We(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function Pf(n,e,t,i){let r=i.includes(".")?Wf(t,i):()=>t[i];if(St(n)){const s=e[n];ke(s)&&nn(r,s)}else if(ke(n))nn(r,n.bind(t));else if(pt(n))if(We(n))n.forEach(s=>Pf(s,e,t,i));else{const s=ke(n.handler)?n.handler.bind(t):e[n.handler];ke(s)&&nn(r,s,n)}}function Mc(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=n.appContext,a=s.get(e);let l;return a?l=a:!r.length&&!t&&!i?l=e:(l={},r.length&&r.forEach(c=>wo(l,c,o,!0)),wo(l,e,o)),pt(e)&&s.set(e,l),l}function wo(n,e,t,i=!1){const{mixins:r,extends:s}=e;s&&wo(n,s,t,!0),r&&r.forEach(o=>wo(n,o,t,!0));for(const o in e)if(!(i&&o==="expose")){const a=Tm[o]||t&&t[o];n[o]=a?a(n[o],e[o]):e[o]}return n}const Tm={data:cu,props:uu,emits:uu,methods:Qr,computed:Qr,beforeCreate:Dt,created:Dt,beforeMount:Dt,mounted:Dt,beforeUpdate:Dt,updated:Dt,beforeDestroy:Dt,beforeUnmount:Dt,destroyed:Dt,unmounted:Dt,activated:Dt,deactivated:Dt,errorCaptured:Dt,serverPrefetch:Dt,components:Qr,directives:Qr,watch:Rm,provide:cu,inject:Am};function cu(n,e){return e?n?function(){return wt(ke(n)?n.call(this,this):n,ke(e)?e.call(this,this):e)}:e:n}function Am(n,e){return Qr(sl(n),sl(e))}function sl(n){if(We(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function Dt(n,e){return n?[...new Set([].concat(n,e))]:e}function Qr(n,e){return n?wt(Object.create(null),n,e):e}function uu(n,e){return n?We(n)&&We(e)?[...new Set([...n,...e])]:wt(Object.create(null),au(n),au(e??{})):e}function Rm(n,e){if(!n)return e;if(!e)return n;const t=wt(Object.create(null),n);for(const i in e)t[i]=Dt(n[i],e[i]);return t}function Lf(){return{app:null,config:{isNativeTag:fp,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Cm=0;function Pm(n,e){return function(i,r=null){ke(i)||(i=wt({},i)),r!=null&&!pt(r)&&(r=null);const s=Lf(),o=new WeakSet,a=[];let l=!1;const c=s.app={_uid:Cm++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:fg,get config(){return s.config},set config(u){},use(u,...h){return o.has(u)||(u&&ke(u.install)?(o.add(u),u.install(c,...h)):ke(u)&&(o.add(u),u(c,...h))),c},mixin(u){return s.mixins.includes(u)||s.mixins.push(u),c},component(u,h){return h?(s.components[u]=h,c):s.components[u]},directive(u,h){return h?(s.directives[u]=h,c):s.directives[u]},mount(u,h,f){if(!l){const d=c._ceVNode||ot(i,r);return d.appContext=s,f===!0?f="svg":f===!1&&(f=void 0),h&&e?e(d,u):n(d,u,f),l=!0,c._container=u,u.__vue_app__=c,bc(d.component)}},onUnmount(u){a.push(u)},unmount(){l&&(Cn(a,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(u,h){return s.provides[u]=h,c},runWithContext(u){const h=Ar;Ar=c;try{return u()}finally{Ar=h}}};return c}}let Ar=null;function fo(n,e){if(Ct){let t=Ct.provides;const i=Ct.parent&&Ct.parent.provides;i===t&&(t=Ct.provides=Object.create(i)),t[n]=e}}function ti(n,e,t=!1){const i=Ct||pn;if(i||Ar){const r=Ar?Ar._context.provides:i?i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(r&&n in r)return r[n];if(arguments.length>1)return t&&ke(e)?e.call(i&&i.proxy):e}}const If={},Df=()=>Object.create(If),Uf=n=>Object.getPrototypeOf(n)===If;function Lm(n,e,t,i=!1){const r={},s=Df();n.propsDefaults=Object.create(null),Nf(n,e,r,s);for(const o in n.propsOptions[0])o in r||(r[o]=void 0);t?n.props=i?r:_f(r):n.type.props?n.props=r:n.props=s,n.attrs=s}function Im(n,e,t,i){const{props:r,attrs:s,vnode:{patchFlag:o}}=n,a=tt(r),[l]=n.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=n.vnode.dynamicProps;for(let h=0;h<u.length;h++){let f=u[h];if(Go(n.emitsOptions,f))continue;const d=e[f];if(l)if(Qe(s,f))d!==s[f]&&(s[f]=d,c=!0);else{const _=on(f);r[_]=ol(l,a,_,d,n,!1)}else d!==s[f]&&(s[f]=d,c=!0)}}}else{Nf(n,e,r,s)&&(c=!0);let u;for(const h in a)(!e||!Qe(e,h)&&((u=ji(h))===h||!Qe(e,u)))&&(l?t&&(t[h]!==void 0||t[u]!==void 0)&&(r[h]=ol(l,a,h,void 0,n,!0)):delete r[h]);if(s!==a)for(const h in s)(!e||!Qe(e,h))&&(delete s[h],c=!0)}c&&ei(n.attrs,"set","")}function Nf(n,e,t,i){const[r,s]=n.propsOptions;let o=!1,a;if(e)for(let l in e){if(ns(l))continue;const c=e[l];let u;r&&Qe(r,u=on(l))?!s||!s.includes(u)?t[u]=c:(a||(a={}))[u]=c:Go(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(s){const l=tt(t),c=a||at;for(let u=0;u<s.length;u++){const h=s[u];t[h]=ol(r,l,h,c[h],n,!Qe(c,h))}}return o}function ol(n,e,t,i,r,s){const o=n[t];if(o!=null){const a=Qe(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&ke(l)){const{propsDefaults:c}=r;if(t in c)i=c[t];else{const u=As(r);i=c[t]=l.call(null,e),u()}}else i=l;r.ce&&r.ce._setProp(t,i)}o[0]&&(s&&!a?i=!1:o[1]&&(i===""||i===ji(t))&&(i=!0))}return i}const Dm=new WeakMap;function Ff(n,e,t=!1){const i=t?Dm:e.propsCache,r=i.get(n);if(r)return r;const s=n.props,o={},a=[];let l=!1;if(!ke(n)){const u=h=>{l=!0;const[f,d]=Ff(h,e,!0);wt(o,f),d&&a.push(...d)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!s&&!l)return pt(n)&&i.set(n,wr),wr;if(We(s))for(let u=0;u<s.length;u++){const h=on(s[u]);hu(h)&&(o[h]=at)}else if(s)for(const u in s){const h=on(u);if(hu(h)){const f=s[u],d=o[h]=We(f)||ke(f)?{type:f}:wt({},f),_=d.type;let x=!1,m=!0;if(We(_))for(let p=0;p<_.length;++p){const w=_[p],M=ke(w)&&w.name;if(M==="Boolean"){x=!0;break}else M==="String"&&(m=!1)}else x=ke(_)&&_.name==="Boolean";d[0]=x,d[1]=m,(x||Qe(d,"default"))&&a.push(h)}}const c=[o,a];return pt(n)&&i.set(n,c),c}function hu(n){return n[0]!=="$"&&!ns(n)}const Of=n=>n[0]==="_"||n==="$stable",Sc=n=>We(n)?n.map(wn):[wn(n)],Um=(n,e,t)=>{if(e._n)return e;const i=Xn((...r)=>Sc(e(...r)),t);return i._c=!1,i},Bf=(n,e,t)=>{const i=n._ctx;for(const r in n){if(Of(r))continue;const s=n[r];if(ke(s))e[r]=Um(r,s,i);else if(s!=null){const o=Sc(s);e[r]=()=>o}}},zf=(n,e)=>{const t=Sc(e);n.slots.default=()=>t},Hf=(n,e,t)=>{for(const i in e)(t||i!=="_")&&(n[i]=e[i])},Nm=(n,e,t)=>{const i=n.slots=Df();if(n.vnode.shapeFlag&32){const r=e._;r?(Hf(i,e,t),t&&Qh(i,"_",r,!0)):Bf(e,i)}else e&&zf(n,e)},Fm=(n,e,t)=>{const{vnode:i,slots:r}=n;let s=!0,o=at;if(i.shapeFlag&32){const a=e._;a?t&&a===1?s=!1:Hf(r,e,t):(s=!e.$stable,Bf(e,r)),o=e}else e&&(zf(n,e),o={default:1});if(s)for(const a in r)!Of(a)&&o[a]==null&&delete r[a]},$t=jm;function Om(n){return Bm(n)}function Bm(n,e){const t=ef();t.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:f,setScopeId:d=An,insertStaticContent:_}=n,x=(g,A,L,F=null,N=null,j=null,ne=void 0,E=null,v=!!A.dynamicChildren)=>{if(g===A)return;g&&!Xr(g,A)&&(F=U(g),be(g,N,j,!0),g=null),A.patchFlag===-2&&(v=!1,A.dynamicChildren=null);const{type:P,ref:Y,shapeFlag:k}=A;switch(P){case ko:m(g,A,L,F);break;case Wi:p(g,A,L,F);break;case ua:g==null&&w(A,L,F,ne);break;case jn:q(g,A,L,F,N,j,ne,E,v);break;default:k&1?I(g,A,L,F,N,j,ne,E,v):k&6?V(g,A,L,F,N,j,ne,E,v):(k&64||k&128)&&P.process(g,A,L,F,N,j,ne,E,v,le)}Y!=null&&N&&nl(Y,g&&g.ref,j,A||g,!A)},m=(g,A,L,F)=>{if(g==null)i(A.el=a(A.children),L,F);else{const N=A.el=g.el;A.children!==g.children&&c(N,A.children)}},p=(g,A,L,F)=>{g==null?i(A.el=l(A.children||""),L,F):A.el=g.el},w=(g,A,L,F)=>{[g.el,g.anchor]=_(g.children,A,L,F,g.el,g.anchor)},M=({el:g,anchor:A},L,F)=>{let N;for(;g&&g!==A;)N=f(g),i(g,L,F),g=N;i(A,L,F)},S=({el:g,anchor:A})=>{let L;for(;g&&g!==A;)L=f(g),r(g),g=L;r(A)},I=(g,A,L,F,N,j,ne,E,v)=>{A.type==="svg"?ne="svg":A.type==="math"&&(ne="mathml"),g==null?C(A,L,F,N,j,ne,E,v):se(g,A,N,j,ne,E,v)},C=(g,A,L,F,N,j,ne,E)=>{let v,P;const{props:Y,shapeFlag:k,transition:X,dirs:ue}=g;if(v=g.el=o(g.type,j,Y&&Y.is,Y),k&8?u(v,g.children):k&16&&D(g.children,v,null,F,N,la(g,j),ne,E),ue&&Ai(g,null,F,"created"),R(v,g,g.scopeId,ne,F),Y){for(const ve in Y)ve!=="value"&&!ns(ve)&&s(v,ve,null,Y[ve],j,F);"value"in Y&&s(v,"value",null,Y.value,j),(P=Y.onVnodeBeforeMount)&&Sn(P,F,g)}ue&&Ai(g,null,F,"beforeMount");const ce=zm(N,X);ce&&X.beforeEnter(v),i(v,A,L),((P=Y&&Y.onVnodeMounted)||ce||ue)&&$t(()=>{P&&Sn(P,F,g),ce&&X.enter(v),ue&&Ai(g,null,F,"mounted")},N)},R=(g,A,L,F,N)=>{if(L&&d(g,L),F)for(let j=0;j<F.length;j++)d(g,F[j]);if(N){let j=N.subTree;if(A===j||qf(j.type)&&(j.ssContent===A||j.ssFallback===A)){const ne=N.vnode;R(g,ne,ne.scopeId,ne.slotScopeIds,N.parent)}}},D=(g,A,L,F,N,j,ne,E,v=0)=>{for(let P=v;P<g.length;P++){const Y=g[P]=E?pi(g[P]):wn(g[P]);x(null,Y,A,L,F,N,j,ne,E)}},se=(g,A,L,F,N,j,ne)=>{const E=A.el=g.el;let{patchFlag:v,dynamicChildren:P,dirs:Y}=A;v|=g.patchFlag&16;const k=g.props||at,X=A.props||at;let ue;if(L&&Ri(L,!1),(ue=X.onVnodeBeforeUpdate)&&Sn(ue,L,A,g),Y&&Ai(A,g,L,"beforeUpdate"),L&&Ri(L,!0),(k.innerHTML&&X.innerHTML==null||k.textContent&&X.textContent==null)&&u(E,""),P?y(g.dynamicChildren,P,E,L,F,la(A,N),j):ne||z(g,A,E,null,L,F,la(A,N),j,!1),v>0){if(v&16)b(E,k,X,L,N);else if(v&2&&k.class!==X.class&&s(E,"class",null,X.class,N),v&4&&s(E,"style",k.style,X.style,N),v&8){const ce=A.dynamicProps;for(let ve=0;ve<ce.length;ve++){const Pe=ce[ve],fe=k[Pe],ye=X[Pe];(ye!==fe||Pe==="value")&&s(E,Pe,fe,ye,N,L)}}v&1&&g.children!==A.children&&u(E,A.children)}else!ne&&P==null&&b(E,k,X,L,N);((ue=X.onVnodeUpdated)||Y)&&$t(()=>{ue&&Sn(ue,L,A,g),Y&&Ai(A,g,L,"updated")},F)},y=(g,A,L,F,N,j,ne)=>{for(let E=0;E<A.length;E++){const v=g[E],P=A[E],Y=v.el&&(v.type===jn||!Xr(v,P)||v.shapeFlag&70)?h(v.el):L;x(v,P,Y,null,F,N,j,ne,!0)}},b=(g,A,L,F,N)=>{if(A!==L){if(A!==at)for(const j in A)!ns(j)&&!(j in L)&&s(g,j,A[j],null,N,F);for(const j in L){if(ns(j))continue;const ne=L[j],E=A[j];ne!==E&&j!=="value"&&s(g,j,E,ne,N,F)}"value"in L&&s(g,"value",A.value,L.value,N)}},q=(g,A,L,F,N,j,ne,E,v)=>{const P=A.el=g?g.el:a(""),Y=A.anchor=g?g.anchor:a("");let{patchFlag:k,dynamicChildren:X,slotScopeIds:ue}=A;ue&&(E=E?E.concat(ue):ue),g==null?(i(P,L,F),i(Y,L,F),D(A.children||[],L,Y,N,j,ne,E,v)):k>0&&k&64&&X&&g.dynamicChildren?(y(g.dynamicChildren,X,L,N,j,ne,E),(A.key!=null||N&&A===N.subTree)&&Gf(g,A,!0)):z(g,A,L,Y,N,j,ne,E,v)},V=(g,A,L,F,N,j,ne,E,v)=>{A.slotScopeIds=E,g==null?A.shapeFlag&512?N.ctx.activate(A,L,F,ne,v):Z(A,L,F,N,j,ne,v):re(g,A,v)},Z=(g,A,L,F,N,j,ne)=>{const E=g.component=sg(g,F,N);if(Rf(g)&&(E.ctx.renderer=le),og(E,!1,ne),E.asyncDep){if(N&&N.registerDep(E,G,ne),!g.el){const v=E.subTree=ot(Wi);p(null,v,A,L)}}else G(E,g,A,L,N,j,ne)},re=(g,A,L)=>{const F=A.component=g.component;if($m(g,A,L))if(F.asyncDep&&!F.asyncResolved){K(F,A,L);return}else F.next=A,F.update();else A.el=g.el,F.vnode=A},G=(g,A,L,F,N,j,ne)=>{const E=()=>{if(g.isMounted){let{next:k,bu:X,u:ue,parent:ce,vnode:ve}=g;{const Ie=kf(g);if(Ie){k&&(k.el=ve.el,K(g,k,ne)),Ie.asyncDep.then(()=>{g.isUnmounted||E()});return}}let Pe=k,fe;Ri(g,!1),k?(k.el=ve.el,K(g,k,ne)):k=ve,X&&ia(X),(fe=k.props&&k.props.onVnodeBeforeUpdate)&&Sn(fe,ce,k,ve),Ri(g,!0);const ye=ca(g),Ue=g.subTree;g.subTree=ye,x(Ue,ye,h(Ue.el),U(Ue),g,N,j),k.el=ye.el,Pe===null&&Km(g,ye.el),ue&&$t(ue,N),(fe=k.props&&k.props.onVnodeUpdated)&&$t(()=>Sn(fe,ce,k,ve),N)}else{let k;const{el:X,props:ue}=A,{bm:ce,m:ve,parent:Pe,root:fe,type:ye}=g,Ue=rs(A);if(Ri(g,!1),ce&&ia(ce),!Ue&&(k=ue&&ue.onVnodeBeforeMount)&&Sn(k,Pe,A),Ri(g,!0),X&&J){const Ie=()=>{g.subTree=ca(g),J(X,g.subTree,g,N,null)};Ue&&ye.__asyncHydrate?ye.__asyncHydrate(X,g,Ie):Ie()}else{fe.ce&&fe.ce._injectChildStyle(ye);const Ie=g.subTree=ca(g);x(null,Ie,L,F,g,N,j),A.el=Ie.el}if(ve&&$t(ve,N),!Ue&&(k=ue&&ue.onVnodeMounted)){const Ie=A;$t(()=>Sn(k,Pe,Ie),N)}(A.shapeFlag&256||Pe&&rs(Pe.vnode)&&Pe.vnode.shapeFlag&256)&&g.a&&$t(g.a,N),g.isMounted=!0,A=L=F=null}};g.scope.on();const v=g.effect=new nf(E);g.scope.off();const P=g.update=v.run.bind(v),Y=g.job=v.runIfDirty.bind(v);Y.i=g,Y.id=g.uid,v.scheduler=()=>vc(Y),Ri(g,!0),P()},K=(g,A,L)=>{A.component=g;const F=g.vnode.props;g.vnode=A,g.next=null,Im(g,A.props,F,L),Fm(g,A.children,L),Si(),ru(g),Ei()},z=(g,A,L,F,N,j,ne,E,v=!1)=>{const P=g&&g.children,Y=g?g.shapeFlag:0,k=A.children,{patchFlag:X,shapeFlag:ue}=A;if(X>0){if(X&128){me(P,k,L,F,N,j,ne,E,v);return}else if(X&256){ge(P,k,L,F,N,j,ne,E,v);return}}ue&8?(Y&16&&pe(P,N,j),k!==P&&u(L,k)):Y&16?ue&16?me(P,k,L,F,N,j,ne,E,v):pe(P,N,j,!0):(Y&8&&u(L,""),ue&16&&D(k,L,F,N,j,ne,E,v))},ge=(g,A,L,F,N,j,ne,E,v)=>{g=g||wr,A=A||wr;const P=g.length,Y=A.length,k=Math.min(P,Y);let X;for(X=0;X<k;X++){const ue=A[X]=v?pi(A[X]):wn(A[X]);x(g[X],ue,L,null,N,j,ne,E,v)}P>Y?pe(g,N,j,!0,!1,k):D(A,L,F,N,j,ne,E,v,k)},me=(g,A,L,F,N,j,ne,E,v)=>{let P=0;const Y=A.length;let k=g.length-1,X=Y-1;for(;P<=k&&P<=X;){const ue=g[P],ce=A[P]=v?pi(A[P]):wn(A[P]);if(Xr(ue,ce))x(ue,ce,L,null,N,j,ne,E,v);else break;P++}for(;P<=k&&P<=X;){const ue=g[k],ce=A[X]=v?pi(A[X]):wn(A[X]);if(Xr(ue,ce))x(ue,ce,L,null,N,j,ne,E,v);else break;k--,X--}if(P>k){if(P<=X){const ue=X+1,ce=ue<Y?A[ue].el:F;for(;P<=X;)x(null,A[P]=v?pi(A[P]):wn(A[P]),L,ce,N,j,ne,E,v),P++}}else if(P>X)for(;P<=k;)be(g[P],N,j,!0),P++;else{const ue=P,ce=P,ve=new Map;for(P=ce;P<=X;P++){const Ne=A[P]=v?pi(A[P]):wn(A[P]);Ne.key!=null&&ve.set(Ne.key,P)}let Pe,fe=0;const ye=X-ce+1;let Ue=!1,Ie=0;const we=new Array(ye);for(P=0;P<ye;P++)we[P]=0;for(P=ue;P<=k;P++){const Ne=g[P];if(fe>=ye){be(Ne,N,j,!0);continue}let $e;if(Ne.key!=null)$e=ve.get(Ne.key);else for(Pe=ce;Pe<=X;Pe++)if(we[Pe-ce]===0&&Xr(Ne,A[Pe])){$e=Pe;break}$e===void 0?be(Ne,N,j,!0):(we[$e-ce]=P+1,$e>=Ie?Ie=$e:Ue=!0,x(Ne,A[$e],L,null,N,j,ne,E,v),fe++)}const Ye=Ue?Hm(we):wr;for(Pe=Ye.length-1,P=ye-1;P>=0;P--){const Ne=ce+P,$e=A[Ne],O=Ne+1<Y?A[Ne+1].el:F;we[P]===0?x(null,$e,L,O,N,j,ne,E,v):Ue&&(Pe<0||P!==Ye[Pe]?_e($e,L,O,2):Pe--)}}},_e=(g,A,L,F,N=null)=>{const{el:j,type:ne,transition:E,children:v,shapeFlag:P}=g;if(P&6){_e(g.component.subTree,A,L,F);return}if(P&128){g.suspense.move(A,L,F);return}if(P&64){ne.move(g,A,L,le);return}if(ne===jn){i(j,A,L);for(let k=0;k<v.length;k++)_e(v[k],A,L,F);i(g.anchor,A,L);return}if(ne===ua){M(g,A,L);return}if(F!==2&&P&1&&E)if(F===0)E.beforeEnter(j),i(j,A,L),$t(()=>E.enter(j),N);else{const{leave:k,delayLeave:X,afterLeave:ue}=E,ce=()=>i(j,A,L),ve=()=>{k(j,()=>{ce(),ue&&ue()})};X?X(j,ce,ve):ve()}else i(j,A,L)},be=(g,A,L,F=!1,N=!1)=>{const{type:j,props:ne,ref:E,children:v,dynamicChildren:P,shapeFlag:Y,patchFlag:k,dirs:X,cacheIndex:ue}=g;if(k===-2&&(N=!1),E!=null&&nl(E,null,L,g,!0),ue!=null&&(A.renderCache[ue]=void 0),Y&256){A.ctx.deactivate(g);return}const ce=Y&1&&X,ve=!rs(g);let Pe;if(ve&&(Pe=ne&&ne.onVnodeBeforeUnmount)&&Sn(Pe,A,g),Y&6)de(g.component,L,F);else{if(Y&128){g.suspense.unmount(L,F);return}ce&&Ai(g,null,A,"beforeUnmount"),Y&64?g.type.remove(g,A,L,le,F):P&&!P.hasOnce&&(j!==jn||k>0&&k&64)?pe(P,A,L,!1,!0):(j===jn&&k&384||!N&&Y&16)&&pe(v,A,L),F&&ze(g)}(ve&&(Pe=ne&&ne.onVnodeUnmounted)||ce)&&$t(()=>{Pe&&Sn(Pe,A,g),ce&&Ai(g,null,A,"unmounted")},L)},ze=g=>{const{type:A,el:L,anchor:F,transition:N}=g;if(A===jn){te(L,F);return}if(A===ua){S(g);return}const j=()=>{r(L),N&&!N.persisted&&N.afterLeave&&N.afterLeave()};if(g.shapeFlag&1&&N&&!N.persisted){const{leave:ne,delayLeave:E}=N,v=()=>ne(L,j);E?E(g.el,j,v):v()}else j()},te=(g,A)=>{let L;for(;g!==A;)L=f(g),r(g),g=L;r(A)},de=(g,A,L)=>{const{bum:F,scope:N,job:j,subTree:ne,um:E,m:v,a:P}=g;fu(v),fu(P),F&&ia(F),N.stop(),j&&(j.flags|=8,be(ne,g,A,L)),E&&$t(E,A),$t(()=>{g.isUnmounted=!0},A),A&&A.pendingBranch&&!A.isUnmounted&&g.asyncDep&&!g.asyncResolved&&g.suspenseId===A.pendingId&&(A.deps--,A.deps===0&&A.resolve())},pe=(g,A,L,F=!1,N=!1,j=0)=>{for(let ne=j;ne<g.length;ne++)be(g[ne],A,L,F,N)},U=g=>{if(g.shapeFlag&6)return U(g.component.subTree);if(g.shapeFlag&128)return g.suspense.next();const A=f(g.anchor||g.el),L=A&&A[am];return L?f(L):A};let ie=!1;const $=(g,A,L)=>{g==null?A._vnode&&be(A._vnode,null,null,!0):x(A._vnode||null,g,A,null,null,null,L),A._vnode=g,ie||(ie=!0,ru(),bf(),ie=!1)},le={p:x,um:be,m:_e,r:ze,mt:Z,mc:D,pc:z,pbc:y,n:U,o:n};let Me,J;return{render:$,hydrate:Me,createApp:Pm($,Me)}}function la({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function Ri({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function zm(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function Gf(n,e,t=!1){const i=n.children,r=e.children;if(We(i)&&We(r))for(let s=0;s<i.length;s++){const o=i[s];let a=r[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[s]=pi(r[s]),a.el=o.el),!t&&a.patchFlag!==-2&&Gf(o,a)),a.type===ko&&(a.el=o.el)}}function Hm(n){const e=n.slice(),t=[0];let i,r,s,o,a;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(r=t[t.length-1],n[r]<c){e[i]=r,t.push(i);continue}for(s=0,o=t.length-1;s<o;)a=s+o>>1,n[t[a]]<c?s=a+1:o=a;c<n[t[s]]&&(s>0&&(e[i]=t[s-1]),t[s]=i)}}for(s=t.length,o=t[s-1];s-- >0;)t[s]=o,o=e[o];return t}function kf(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:kf(e)}function fu(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}const Gm=Symbol.for("v-scx"),km=()=>ti(Gm);function nn(n,e,t){return Vf(n,e,t)}function Vf(n,e,t=at){const{immediate:i,deep:r,flush:s,once:o}=t,a=wt({},t);let l;if(Vo)if(s==="sync"){const f=km();l=f.__watcherHandles||(f.__watcherHandles=[])}else if(!e||i)a.once=!0;else{const f=()=>{};return f.stop=An,f.resume=An,f.pause=An,f}const c=Ct;a.call=(f,d,_)=>Cn(f,c,d,_);let u=!1;s==="post"?a.scheduler=f=>{$t(f,c&&c.suspense)}:s!=="sync"&&(u=!0,a.scheduler=(f,d)=>{d?f():vc(f)}),a.augmentJob=f=>{e&&(f.flags|=4),u&&(f.flags|=2,c&&(f.id=c.uid,f.i=c))};const h=im(n,e,a);return l&&l.push(h),h}function Vm(n,e,t){const i=this.proxy,r=St(n)?n.includes(".")?Wf(i,n):()=>i[n]:n.bind(i,i);let s;ke(e)?s=e:(s=e.handler,t=e);const o=As(this),a=Vf(r,s.bind(i),t);return o(),a}function Wf(n,e){const t=e.split(".");return()=>{let i=n;for(let r=0;r<t.length&&i;r++)i=i[t[r]];return i}}const Wm=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${on(e)}Modifiers`]||n[`${ji(e)}Modifiers`];function Xm(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||at;let r=t;const s=e.startsWith("update:"),o=s&&Wm(i,e.slice(7));o&&(o.trim&&(r=t.map(u=>St(u)?u.trim():u)),o.number&&(r=t.map(yp)));let a,l=i[a=na(e)]||i[a=na(on(e))];!l&&s&&(l=i[a=na(ji(e))]),l&&Cn(l,n,6,r);const c=i[a+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,Cn(c,n,6,r)}}function Xf(n,e,t=!1){const i=e.emitsCache,r=i.get(n);if(r!==void 0)return r;const s=n.emits;let o={},a=!1;if(!ke(n)){const l=c=>{const u=Xf(c,e,!0);u&&(a=!0,wt(o,u))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!s&&!a?(pt(n)&&i.set(n,null),null):(We(s)?s.forEach(l=>o[l]=null):wt(o,s),pt(n)&&i.set(n,o),o)}function Go(n,e){return!n||!Do(e)?!1:(e=e.slice(2).replace(/Once$/,""),Qe(n,e[0].toLowerCase()+e.slice(1))||Qe(n,ji(e))||Qe(n,e))}function ca(n){const{type:e,vnode:t,proxy:i,withProxy:r,propsOptions:[s],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:h,data:f,setupState:d,ctx:_,inheritAttrs:x}=n,m=bo(n);let p,w;try{if(t.shapeFlag&4){const S=r||i,I=S;p=wn(c.call(I,S,u,h,d,f,_)),w=a}else{const S=e;p=wn(S.length>1?S(h,{attrs:a,slots:o,emit:l}):S(h,null)),w=e.props?a:qm(a)}}catch(S){os.length=0,zo(S,n,1),p=ot(Wi)}let M=p;if(w&&x!==!1){const S=Object.keys(w),{shapeFlag:I}=M;S.length&&I&7&&(s&&S.some(ic)&&(w=Ym(w,s)),M=Ir(M,w,!1,!0))}return t.dirs&&(M=Ir(M,null,!1,!0),M.dirs=M.dirs?M.dirs.concat(t.dirs):t.dirs),t.transition&&xc(M,t.transition),p=M,bo(m),p}const qm=n=>{let e;for(const t in n)(t==="class"||t==="style"||Do(t))&&((e||(e={}))[t]=n[t]);return e},Ym=(n,e)=>{const t={};for(const i in n)(!ic(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function $m(n,e,t){const{props:i,children:r,component:s}=n,{props:o,children:a,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?du(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const f=u[h];if(o[f]!==i[f]&&!Go(c,f))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?du(i,o,c):!0:!!o;return!1}function du(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(e[s]!==n[s]&&!Go(t,s))return!0}return!1}function Km({vnode:n,parent:e},t){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===n&&(i.el=n.el),i===n)(n=e.vnode).el=t,e=e.parent;else break}}const qf=n=>n.__isSuspense;function jm(n,e){e&&e.pendingBranch?We(n)?e.effects.push(...n):e.effects.push(n):om(n)}const jn=Symbol.for("v-fgt"),ko=Symbol.for("v-txt"),Wi=Symbol.for("v-cmt"),ua=Symbol.for("v-stc"),os=[];let jt=null;function Mn(n=!1){os.push(jt=n?null:[])}function Zm(){os.pop(),jt=os[os.length-1]||null}let _s=1;function pu(n){_s+=n,n<0&&jt&&(jt.hasOnce=!0)}function Yf(n){return n.dynamicChildren=_s>0?jt||wr:null,Zm(),_s>0&&jt&&jt.push(n),n}function In(n,e,t,i,r,s){return Yf(vs(n,e,t,i,r,s,!0))}function Jm(n,e,t,i,r){return Yf(ot(n,e,t,i,r,!0))}function To(n){return n?n.__v_isVNode===!0:!1}function Xr(n,e){return n.type===e.type&&n.key===e.key}const $f=({key:n})=>n??null,po=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?St(n)||Pt(n)||ke(n)?{i:pn,r:n,k:e,f:!!t}:n:null);function vs(n,e=null,t=null,i=0,r=null,s=n===jn?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&$f(e),ref:e&&po(e),scopeId:Tf,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:pn};return a?(Ec(l,t),s&128&&n.normalize(l)):t&&(l.shapeFlag|=St(t)?8:16),_s>0&&!o&&jt&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&jt.push(l),l}const ot=Qm;function Qm(n,e=null,t=null,i=0,r=null,s=!1){if((!n||n===Mm)&&(n=Wi),To(n)){const a=Ir(n,e,!0);return t&&Ec(a,t),_s>0&&!s&&jt&&(a.shapeFlag&6?jt[jt.indexOf(n)]=a:jt.push(a)),a.patchFlag=-2,a}if(hg(n)&&(n=n.__vccOpts),e){e=eg(e);let{class:a,style:l}=e;a&&!St(a)&&(e.class=Zi(a)),pt(l)&&(mc(l)&&!We(l)&&(l=wt({},l)),e.style=oc(l))}const o=St(n)?1:qf(n)?128:lm(n)?64:pt(n)?4:ke(n)?2:0;return vs(n,e,t,i,r,o,s,!0)}function eg(n){return n?mc(n)||Uf(n)?wt({},n):n:null}function Ir(n,e,t=!1,i=!1){const{props:r,ref:s,patchFlag:o,children:a,transition:l}=n,c=e?ng(r||{},e):r,u={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&$f(c),ref:e&&e.ref?t&&s?We(s)?s.concat(po(e)):[s,po(e)]:po(e):s,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==jn?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&Ir(n.ssContent),ssFallback:n.ssFallback&&Ir(n.ssFallback),el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&i&&xc(u,l.clone(u)),u}function qn(n=" ",e=0){return ot(ko,null,n,e)}function tg(n="",e=!1){return e?(Mn(),Jm(Wi,null,n)):ot(Wi,null,n)}function wn(n){return n==null||typeof n=="boolean"?ot(Wi):We(n)?ot(jn,null,n.slice()):To(n)?pi(n):ot(ko,null,String(n))}function pi(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:Ir(n)}function Ec(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(We(e))t=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),Ec(n,r()),r._c&&(r._d=!0));return}else{t=32;const r=e._;!r&&!Uf(e)?e._ctx=pn:r===3&&pn&&(pn.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else ke(e)?(e={default:e,_ctx:pn},t=32):(e=String(e),i&64?(t=16,e=[qn(e)]):t=8);n.children=e,n.shapeFlag|=t}function ng(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=Zi([e.class,i.class]));else if(r==="style")e.style=oc([e.style,i.style]);else if(Do(r)){const s=e[r],o=i[r];o&&s!==o&&!(We(s)&&s.includes(o))&&(e[r]=s?[].concat(s,o):o)}else r!==""&&(e[r]=i[r])}return e}function Sn(n,e,t,i=null){Cn(n,e,7,[t,i])}const ig=Lf();let rg=0;function sg(n,e,t){const i=n.type,r=(e?e.appContext:n.appContext)||ig,s={uid:rg++,vnode:n,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Ap(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Ff(i,r),emitsOptions:Xf(i,r),emit:null,emitted:null,propsDefaults:at,inheritAttrs:i.inheritAttrs,ctx:at,data:at,props:at,attrs:at,slots:at,refs:at,setupState:at,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=Xm.bind(null,s),n.ce&&n.ce(s),s}let Ct=null,Ao,al;{const n=ef(),e=(t,i)=>{let r;return(r=n[t])||(r=n[t]=[]),r.push(i),s=>{r.length>1?r.forEach(o=>o(s)):r[0](s)}};Ao=e("__VUE_INSTANCE_SETTERS__",t=>Ct=t),al=e("__VUE_SSR_SETTERS__",t=>Vo=t)}const As=n=>{const e=Ct;return Ao(n),n.scope.on(),()=>{n.scope.off(),Ao(e)}},mu=()=>{Ct&&Ct.scope.off(),Ao(null)};function Kf(n){return n.vnode.shapeFlag&4}let Vo=!1;function og(n,e=!1,t=!1){e&&al(e);const{props:i,children:r}=n.vnode,s=Kf(n);Lm(n,i,s,e),Nm(n,r,t);const o=s?ag(n,e):void 0;return e&&al(!1),o}function ag(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,Em);const{setup:i}=t;if(i){const r=n.setupContext=i.length>1?cg(n):null,s=As(n);Si();const o=Ts(i,n,0,[n.props,r]);if(Ei(),s(),Jh(o)){if(rs(n)||Af(n),o.then(mu,mu),e)return o.then(a=>{gu(n,a,e)}).catch(a=>{zo(a,n,0)});n.asyncDep=o}else gu(n,o,e)}else jf(n,e)}function gu(n,e,t){ke(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:pt(e)&&(n.setupState=yf(e)),jf(n,t)}let _u;function jf(n,e,t){const i=n.type;if(!n.render){if(!e&&_u&&!i.render){const r=i.template||Mc(n).template;if(r){const{isCustomElement:s,compilerOptions:o}=n.appContext.config,{delimiters:a,compilerOptions:l}=i,c=wt(wt({isCustomElement:s,delimiters:a},o),l);i.render=_u(r,c)}}n.render=i.render||An}{const r=As(n);Si();try{bm(n)}finally{Ei(),r()}}}const lg={get(n,e){return It(n,"get",""),n[e]}};function cg(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,lg),slots:n.slots,emit:n.emit,expose:e}}function bc(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(yf(jp(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in ss)return ss[t](n)},has(e,t){return t in e||t in ss}})):n.proxy}function ug(n,e=!0){return ke(n)?n.displayName||n.name:n.name||e&&n.__name}function hg(n){return ke(n)&&"__vccOpts"in n}const bt=(n,e)=>tm(n,e,Vo);function Zf(n,e,t){const i=arguments.length;return i===2?pt(e)&&!We(e)?To(e)?ot(n,null,[e]):ot(n,e):ot(n,null,e):(i>3?t=Array.prototype.slice.call(arguments,2):i===3&&To(t)&&(t=[t]),ot(n,e,t))}const fg="3.5.10";/**
* @vue/runtime-dom v3.5.10
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let ll;const vu=typeof window<"u"&&window.trustedTypes;if(vu)try{ll=vu.createPolicy("vue",{createHTML:n=>n})}catch{}const Jf=ll?n=>ll.createHTML(n):n=>n,dg="http://www.w3.org/2000/svg",pg="http://www.w3.org/1998/Math/MathML",$n=typeof document<"u"?document:null,xu=$n&&$n.createElement("template"),mg={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const r=e==="svg"?$n.createElementNS(dg,n):e==="mathml"?$n.createElementNS(pg,n):t?$n.createElement(n,{is:t}):$n.createElement(n);return n==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:n=>$n.createTextNode(n),createComment:n=>$n.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>$n.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,r,s){const o=t?t.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),t),!(r===s||!(r=r.nextSibling)););else{xu.innerHTML=Jf(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const a=xu.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},gg=Symbol("_vtc");function _g(n,e,t){const i=n[gg];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const yu=Symbol("_vod"),vg=Symbol("_vsh"),xg=Symbol(""),yg=/(^|;)\s*display\s*:/;function Mg(n,e,t){const i=n.style,r=St(t);let s=!1;if(t&&!r){if(e)if(St(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();t[a]==null&&mo(i,a,"")}else for(const o in e)t[o]==null&&mo(i,o,"");for(const o in t)o==="display"&&(s=!0),mo(i,o,t[o])}else if(r){if(e!==t){const o=i[xg];o&&(t+=";"+o),i.cssText=t,s=yg.test(t)}}else e&&n.removeAttribute("style");yu in n&&(n[yu]=s?i.display:"",n[vg]&&(i.display="none"))}const Mu=/\s*!important$/;function mo(n,e,t){if(We(t))t.forEach(i=>mo(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=Sg(n,e);Mu.test(t)?n.setProperty(ji(i),t.replace(Mu,""),"important"):n[i]=t}}const Su=["Webkit","Moz","ms"],ha={};function Sg(n,e){const t=ha[e];if(t)return t;let i=on(e);if(i!=="filter"&&i in n)return ha[e]=i;i=Fo(i);for(let r=0;r<Su.length;r++){const s=Su[r]+i;if(s in n)return ha[e]=s}return e}const Eu="http://www.w3.org/1999/xlink";function bu(n,e,t,i,r,s=Tp(e)){i&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(Eu,e.slice(6,e.length)):n.setAttributeNS(Eu,e,t):t==null||s&&!tf(t)?n.removeAttribute(e):n.setAttribute(e,s?"":Gr(t)?String(t):t)}function wu(n,e,t,i){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?Jf(t):t);return}const r=n.tagName;if(e==="value"&&r!=="PROGRESS"&&!r.includes("-")){const o=r==="OPTION"?n.getAttribute("value")||"":n.value,a=t==null?n.type==="checkbox"?"on":"":String(t);(o!==a||!("_value"in n))&&(n.value=a),t==null&&n.removeAttribute(e),n._value=t;return}let s=!1;if(t===""||t==null){const o=typeof n[e];o==="boolean"?t=tf(t):t==null&&o==="string"?(t="",s=!0):o==="number"&&(t=0,s=!0)}try{n[e]=t}catch{}s&&n.removeAttribute(e)}function Eg(n,e,t,i){n.addEventListener(e,t,i)}function bg(n,e,t,i){n.removeEventListener(e,t,i)}const Tu=Symbol("_vei");function wg(n,e,t,i,r=null){const s=n[Tu]||(n[Tu]={}),o=s[e];if(i&&o)o.value=i;else{const[a,l]=Tg(e);if(i){const c=s[e]=Cg(i,r);Eg(n,a,c,l)}else o&&(bg(n,a,o,l),s[e]=void 0)}}const Au=/(?:Once|Passive|Capture)$/;function Tg(n){let e;if(Au.test(n)){e={};let i;for(;i=n.match(Au);)n=n.slice(0,n.length-i[0].length),e[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):ji(n.slice(2)),e]}let fa=0;const Ag=Promise.resolve(),Rg=()=>fa||(Ag.then(()=>fa=0),fa=Date.now());function Cg(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;Cn(Pg(i,t.value),e,5,[i])};return t.value=n,t.attached=Rg(),t}function Pg(n,e){if(We(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const Ru=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,Lg=(n,e,t,i,r,s)=>{const o=r==="svg";e==="class"?_g(n,i,o):e==="style"?Mg(n,t,i):Do(e)?ic(e)||wg(n,e,t,i,s):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Ig(n,e,i,o))?(wu(n,e,i),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&bu(n,e,i,o,s,e!=="value")):n._isVueCE&&(/[A-Z]/.test(e)||!St(i))?wu(n,on(e),i):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),bu(n,e,i,o))};function Ig(n,e,t,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in n&&Ru(e)&&ke(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=n.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return Ru(e)&&St(t)?!1:e in n}const Dg=wt({patchProp:Lg},mg);let Cu;function Ug(){return Cu||(Cu=Om(Dg))}const Ng=(...n)=>{const e=Ug().createApp(...n),{mount:t}=e;return e.mount=i=>{const r=Og(i);if(!r)return;const s=e._component;!ke(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const o=t(r,!1,Fg(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function Fg(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function Og(n){return St(n)?document.querySelector(n):n}const Bg={id:"app"},zg=an({__name:"App",setup(n){return(e,t)=>{const i=su("router-link"),r=su("router-view");return Mn(),In("div",Bg,[vs("nav",null,[ot(i,{to:"/3d-bear-arts"},{default:Xn(()=>t[0]||(t[0]=[qn("Home")])),_:1}),ot(i,{to:"/3d-bear-arts/pink"},{default:Xn(()=>t[1]||(t[1]=[qn("Pink")])),_:1}),ot(i,{to:"/3d-bear-arts/purple"},{default:Xn(()=>t[2]||(t[2]=[qn("Purple")])),_:1}),ot(i,{to:"/3d-bear-arts/blue"},{default:Xn(()=>t[3]||(t[3]=[qn("Blue")])),_:1}),ot(i,{to:"/3d-bear-arts/pinkBlue"},{default:Xn(()=>t[4]||(t[4]=[qn("PinkBlue")])),_:1}),ot(i,{to:"/3d-bear-arts/diamond"},{default:Xn(()=>t[5]||(t[5]=[qn("Diamond")])),_:1}),ot(i,{to:"/3d-bear-arts/glass"},{default:Xn(()=>t[6]||(t[6]=[qn("Glass")])),_:1}),ot(i,{to:"/3d-bear-arts/halfBlue"},{default:Xn(()=>t[7]||(t[7]=[qn("halfBlue")])),_:1})]),ot(r)])}}}),Dn=(n,e)=>{const t=n.__vccOpts||n;for(const[i,r]of e)t[i]=r;return t},Hg=Dn(zg,[["__scopeId","data-v-1819dc49"]]);/*!
  * vue-router v4.4.5
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const yr=typeof document<"u";function Qf(n){return typeof n=="object"||"displayName"in n||"props"in n||"__vccOpts"in n}function Gg(n){return n.__esModule||n[Symbol.toStringTag]==="Module"||n.default&&Qf(n.default)}const it=Object.assign;function da(n,e){const t={};for(const i in e){const r=e[i];t[i]=yn(r)?r.map(n):n(r)}return t}const as=()=>{},yn=Array.isArray,ed=/#/g,kg=/&/g,Vg=/\//g,Wg=/=/g,Xg=/\?/g,td=/\+/g,qg=/%5B/g,Yg=/%5D/g,nd=/%5E/g,$g=/%60/g,id=/%7B/g,Kg=/%7C/g,rd=/%7D/g,jg=/%20/g;function wc(n){return encodeURI(""+n).replace(Kg,"|").replace(qg,"[").replace(Yg,"]")}function Zg(n){return wc(n).replace(id,"{").replace(rd,"}").replace(nd,"^")}function cl(n){return wc(n).replace(td,"%2B").replace(jg,"+").replace(ed,"%23").replace(kg,"%26").replace($g,"`").replace(id,"{").replace(rd,"}").replace(nd,"^")}function Jg(n){return cl(n).replace(Wg,"%3D")}function Qg(n){return wc(n).replace(ed,"%23").replace(Xg,"%3F")}function e0(n){return n==null?"":Qg(n).replace(Vg,"%2F")}function xs(n){try{return decodeURIComponent(""+n)}catch{}return""+n}const t0=/\/$/,n0=n=>n.replace(t0,"");function pa(n,e,t="/"){let i,r={},s="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(i=e.slice(0,l),s=e.slice(l+1,a>-1?a:e.length),r=n(s)),a>-1&&(i=i||e.slice(0,a),o=e.slice(a,e.length)),i=o0(i??e,t),{fullPath:i+(s&&"?")+s+o,path:i,query:r,hash:xs(o)}}function i0(n,e){const t=e.query?n(e.query):"";return e.path+(t&&"?")+t+(e.hash||"")}function Pu(n,e){return!e||!n.toLowerCase().startsWith(e.toLowerCase())?n:n.slice(e.length)||"/"}function r0(n,e,t){const i=e.matched.length-1,r=t.matched.length-1;return i>-1&&i===r&&Dr(e.matched[i],t.matched[r])&&sd(e.params,t.params)&&n(e.query)===n(t.query)&&e.hash===t.hash}function Dr(n,e){return(n.aliasOf||n)===(e.aliasOf||e)}function sd(n,e){if(Object.keys(n).length!==Object.keys(e).length)return!1;for(const t in n)if(!s0(n[t],e[t]))return!1;return!0}function s0(n,e){return yn(n)?Lu(n,e):yn(e)?Lu(e,n):n===e}function Lu(n,e){return yn(e)?n.length===e.length&&n.every((t,i)=>t===e[i]):n.length===1&&n[0]===e}function o0(n,e){if(n.startsWith("/"))return n;if(!n)return e;const t=e.split("/"),i=n.split("/"),r=i[i.length-1];(r===".."||r===".")&&i.push("");let s=t.length-1,o,a;for(o=0;o<i.length;o++)if(a=i[o],a!==".")if(a==="..")s>1&&s--;else break;return t.slice(0,s).join("/")+"/"+i.slice(o).join("/")}const oi={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var ys;(function(n){n.pop="pop",n.push="push"})(ys||(ys={}));var ls;(function(n){n.back="back",n.forward="forward",n.unknown=""})(ls||(ls={}));function a0(n){if(!n)if(yr){const e=document.querySelector("base");n=e&&e.getAttribute("href")||"/",n=n.replace(/^\w+:\/\/[^\/]+/,"")}else n="/";return n[0]!=="/"&&n[0]!=="#"&&(n="/"+n),n0(n)}const l0=/^[^#]+#/;function c0(n,e){return n.replace(l0,"#")+e}function u0(n,e){const t=document.documentElement.getBoundingClientRect(),i=n.getBoundingClientRect();return{behavior:e.behavior,left:i.left-t.left-(e.left||0),top:i.top-t.top-(e.top||0)}}const Wo=()=>({left:window.scrollX,top:window.scrollY});function h0(n){let e;if("el"in n){const t=n.el,i=typeof t=="string"&&t.startsWith("#"),r=typeof t=="string"?i?document.getElementById(t.slice(1)):document.querySelector(t):t;if(!r)return;e=u0(r,n)}else e=n;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function Iu(n,e){return(history.state?history.state.position-e:-1)+n}const ul=new Map;function f0(n,e){ul.set(n,e)}function d0(n){const e=ul.get(n);return ul.delete(n),e}let p0=()=>location.protocol+"//"+location.host;function od(n,e){const{pathname:t,search:i,hash:r}=e,s=n.indexOf("#");if(s>-1){let a=r.includes(n.slice(s))?n.slice(s).length:1,l=r.slice(a);return l[0]!=="/"&&(l="/"+l),Pu(l,"")}return Pu(t,n)+i+r}function m0(n,e,t,i){let r=[],s=[],o=null;const a=({state:f})=>{const d=od(n,location),_=t.value,x=e.value;let m=0;if(f){if(t.value=d,e.value=f,o&&o===_){o=null;return}m=x?f.position-x.position:0}else i(d);r.forEach(p=>{p(t.value,_,{delta:m,type:ys.pop,direction:m?m>0?ls.forward:ls.back:ls.unknown})})};function l(){o=t.value}function c(f){r.push(f);const d=()=>{const _=r.indexOf(f);_>-1&&r.splice(_,1)};return s.push(d),d}function u(){const{history:f}=window;f.state&&f.replaceState(it({},f.state,{scroll:Wo()}),"")}function h(){for(const f of s)f();s=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:l,listen:c,destroy:h}}function Du(n,e,t,i=!1,r=!1){return{back:n,current:e,forward:t,replaced:i,position:window.history.length,scroll:r?Wo():null}}function g0(n){const{history:e,location:t}=window,i={value:od(n,t)},r={value:e.state};r.value||s(i.value,{back:null,current:i.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function s(l,c,u){const h=n.indexOf("#"),f=h>-1?(t.host&&document.querySelector("base")?n:n.slice(h))+l:p0()+n+l;try{e[u?"replaceState":"pushState"](c,"",f),r.value=c}catch(d){console.error(d),t[u?"replace":"assign"](f)}}function o(l,c){const u=it({},e.state,Du(r.value.back,l,r.value.forward,!0),c,{position:r.value.position});s(l,u,!0),i.value=l}function a(l,c){const u=it({},r.value,e.state,{forward:l,scroll:Wo()});s(u.current,u,!0);const h=it({},Du(i.value,l,null),{position:u.position+1},c);s(l,h,!1),i.value=l}return{location:i,state:r,push:a,replace:o}}function _0(n){n=a0(n);const e=g0(n),t=m0(n,e.state,e.location,e.replace);function i(s,o=!0){o||t.pauseListeners(),history.go(s)}const r=it({location:"",base:n,go:i,createHref:c0.bind(null,n)},e,t);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function v0(n){return typeof n=="string"||n&&typeof n=="object"}function ad(n){return typeof n=="string"||typeof n=="symbol"}const ld=Symbol("");var Uu;(function(n){n[n.aborted=4]="aborted",n[n.cancelled=8]="cancelled",n[n.duplicated=16]="duplicated"})(Uu||(Uu={}));function Ur(n,e){return it(new Error,{type:n,[ld]:!0},e)}function Bn(n,e){return n instanceof Error&&ld in n&&(e==null||!!(n.type&e))}const Nu="[^/]+?",x0={sensitive:!1,strict:!1,start:!0,end:!0},y0=/[.+*?^${}()[\]/\\]/g;function M0(n,e){const t=it({},x0,e),i=[];let r=t.start?"^":"";const s=[];for(const c of n){const u=c.length?[]:[90];t.strict&&!c.length&&(r+="/");for(let h=0;h<c.length;h++){const f=c[h];let d=40+(t.sensitive?.25:0);if(f.type===0)h||(r+="/"),r+=f.value.replace(y0,"\\$&"),d+=40;else if(f.type===1){const{value:_,repeatable:x,optional:m,regexp:p}=f;s.push({name:_,repeatable:x,optional:m});const w=p||Nu;if(w!==Nu){d+=10;try{new RegExp(`(${w})`)}catch(S){throw new Error(`Invalid custom RegExp for param "${_}" (${w}): `+S.message)}}let M=x?`((?:${w})(?:/(?:${w}))*)`:`(${w})`;h||(M=m&&c.length<2?`(?:/${M})`:"/"+M),m&&(M+="?"),r+=M,d+=20,m&&(d+=-8),x&&(d+=-20),w===".*"&&(d+=-50)}u.push(d)}i.push(u)}if(t.strict&&t.end){const c=i.length-1;i[c][i[c].length-1]+=.7000000000000001}t.strict||(r+="/?"),t.end?r+="$":t.strict&&(r+="(?:/|$)");const o=new RegExp(r,t.sensitive?"":"i");function a(c){const u=c.match(o),h={};if(!u)return null;for(let f=1;f<u.length;f++){const d=u[f]||"",_=s[f-1];h[_.name]=d&&_.repeatable?d.split("/"):d}return h}function l(c){let u="",h=!1;for(const f of n){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const d of f)if(d.type===0)u+=d.value;else if(d.type===1){const{value:_,repeatable:x,optional:m}=d,p=_ in c?c[_]:"";if(yn(p)&&!x)throw new Error(`Provided param "${_}" is an array but it is not repeatable (* or + modifiers)`);const w=yn(p)?p.join("/"):p;if(!w)if(m)f.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${_}"`);u+=w}}return u||"/"}return{re:o,score:i,keys:s,parse:a,stringify:l}}function S0(n,e){let t=0;for(;t<n.length&&t<e.length;){const i=e[t]-n[t];if(i)return i;t++}return n.length<e.length?n.length===1&&n[0]===80?-1:1:n.length>e.length?e.length===1&&e[0]===80?1:-1:0}function cd(n,e){let t=0;const i=n.score,r=e.score;for(;t<i.length&&t<r.length;){const s=S0(i[t],r[t]);if(s)return s;t++}if(Math.abs(r.length-i.length)===1){if(Fu(i))return 1;if(Fu(r))return-1}return r.length-i.length}function Fu(n){const e=n[n.length-1];return n.length>0&&e[e.length-1]<0}const E0={type:0,value:""},b0=/[a-zA-Z0-9_]/;function w0(n){if(!n)return[[]];if(n==="/")return[[E0]];if(!n.startsWith("/"))throw new Error(`Invalid path "${n}"`);function e(d){throw new Error(`ERR (${t})/"${c}": ${d}`)}let t=0,i=t;const r=[];let s;function o(){s&&r.push(s),s=[]}let a=0,l,c="",u="";function h(){c&&(t===0?s.push({type:0,value:c}):t===1||t===2||t===3?(s.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function f(){c+=l}for(;a<n.length;){if(l=n[a++],l==="\\"&&t!==2){i=t,t=4;continue}switch(t){case 0:l==="/"?(c&&h(),o()):l===":"?(h(),t=1):f();break;case 4:f(),t=i;break;case 1:l==="("?t=2:b0.test(l)?f():(h(),t=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:t=3:u+=l;break;case 3:h(),t=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return t===2&&e(`Unfinished custom RegExp for param "${c}"`),h(),o(),r}function T0(n,e,t){const i=M0(w0(n.path),t),r=it(i,{record:n,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function A0(n,e){const t=[],i=new Map;e=Hu({strict:!1,end:!0,sensitive:!1},e);function r(h){return i.get(h)}function s(h,f,d){const _=!d,x=Bu(h);x.aliasOf=d&&d.record;const m=Hu(e,h),p=[x];if("alias"in h){const S=typeof h.alias=="string"?[h.alias]:h.alias;for(const I of S)p.push(Bu(it({},x,{components:d?d.record.components:x.components,path:I,aliasOf:d?d.record:x})))}let w,M;for(const S of p){const{path:I}=S;if(f&&I[0]!=="/"){const C=f.record.path,R=C[C.length-1]==="/"?"":"/";S.path=f.record.path+(I&&R+I)}if(w=T0(S,f,m),d?d.alias.push(w):(M=M||w,M!==w&&M.alias.push(w),_&&h.name&&!zu(w)&&o(h.name)),ud(w)&&l(w),x.children){const C=x.children;for(let R=0;R<C.length;R++)s(C[R],w,d&&d.children[R])}d=d||w}return M?()=>{o(M)}:as}function o(h){if(ad(h)){const f=i.get(h);f&&(i.delete(h),t.splice(t.indexOf(f),1),f.children.forEach(o),f.alias.forEach(o))}else{const f=t.indexOf(h);f>-1&&(t.splice(f,1),h.record.name&&i.delete(h.record.name),h.children.forEach(o),h.alias.forEach(o))}}function a(){return t}function l(h){const f=P0(h,t);t.splice(f,0,h),h.record.name&&!zu(h)&&i.set(h.record.name,h)}function c(h,f){let d,_={},x,m;if("name"in h&&h.name){if(d=i.get(h.name),!d)throw Ur(1,{location:h});m=d.record.name,_=it(Ou(f.params,d.keys.filter(M=>!M.optional).concat(d.parent?d.parent.keys.filter(M=>M.optional):[]).map(M=>M.name)),h.params&&Ou(h.params,d.keys.map(M=>M.name))),x=d.stringify(_)}else if(h.path!=null)x=h.path,d=t.find(M=>M.re.test(x)),d&&(_=d.parse(x),m=d.record.name);else{if(d=f.name?i.get(f.name):t.find(M=>M.re.test(f.path)),!d)throw Ur(1,{location:h,currentLocation:f});m=d.record.name,_=it({},f.params,h.params),x=d.stringify(_)}const p=[];let w=d;for(;w;)p.unshift(w.record),w=w.parent;return{name:m,path:x,params:_,matched:p,meta:C0(p)}}n.forEach(h=>s(h));function u(){t.length=0,i.clear()}return{addRoute:s,resolve:c,removeRoute:o,clearRoutes:u,getRoutes:a,getRecordMatcher:r}}function Ou(n,e){const t={};for(const i of e)i in n&&(t[i]=n[i]);return t}function Bu(n){const e={path:n.path,redirect:n.redirect,name:n.name,meta:n.meta||{},aliasOf:n.aliasOf,beforeEnter:n.beforeEnter,props:R0(n),children:n.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in n?n.components||null:n.component&&{default:n.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function R0(n){const e={},t=n.props||!1;if("component"in n)e.default=t;else for(const i in n.components)e[i]=typeof t=="object"?t[i]:t;return e}function zu(n){for(;n;){if(n.record.aliasOf)return!0;n=n.parent}return!1}function C0(n){return n.reduce((e,t)=>it(e,t.meta),{})}function Hu(n,e){const t={};for(const i in n)t[i]=i in e?e[i]:n[i];return t}function P0(n,e){let t=0,i=e.length;for(;t!==i;){const s=t+i>>1;cd(n,e[s])<0?i=s:t=s+1}const r=L0(n);return r&&(i=e.lastIndexOf(r,i-1)),i}function L0(n){let e=n;for(;e=e.parent;)if(ud(e)&&cd(n,e)===0)return e}function ud({record:n}){return!!(n.name||n.components&&Object.keys(n.components).length||n.redirect)}function I0(n){const e={};if(n===""||n==="?")return e;const i=(n[0]==="?"?n.slice(1):n).split("&");for(let r=0;r<i.length;++r){const s=i[r].replace(td," "),o=s.indexOf("="),a=xs(o<0?s:s.slice(0,o)),l=o<0?null:xs(s.slice(o+1));if(a in e){let c=e[a];yn(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function Gu(n){let e="";for(let t in n){const i=n[t];if(t=Jg(t),i==null){i!==void 0&&(e+=(e.length?"&":"")+t);continue}(yn(i)?i.map(s=>s&&cl(s)):[i&&cl(i)]).forEach(s=>{s!==void 0&&(e+=(e.length?"&":"")+t,s!=null&&(e+="="+s))})}return e}function D0(n){const e={};for(const t in n){const i=n[t];i!==void 0&&(e[t]=yn(i)?i.map(r=>r==null?null:""+r):i==null?i:""+i)}return e}const U0=Symbol(""),ku=Symbol(""),Tc=Symbol(""),hd=Symbol(""),hl=Symbol("");function qr(){let n=[];function e(i){return n.push(i),()=>{const r=n.indexOf(i);r>-1&&n.splice(r,1)}}function t(){n=[]}return{add:e,list:()=>n.slice(),reset:t}}function mi(n,e,t,i,r,s=o=>o()){const o=i&&(i.enterCallbacks[r]=i.enterCallbacks[r]||[]);return()=>new Promise((a,l)=>{const c=f=>{f===!1?l(Ur(4,{from:t,to:e})):f instanceof Error?l(f):v0(f)?l(Ur(2,{from:e,to:f})):(o&&i.enterCallbacks[r]===o&&typeof f=="function"&&o.push(f),a())},u=s(()=>n.call(i&&i.instances[r],e,t,c));let h=Promise.resolve(u);n.length<3&&(h=h.then(c)),h.catch(f=>l(f))})}function ma(n,e,t,i,r=s=>s()){const s=[];for(const o of n)for(const a in o.components){let l=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if(Qf(l)){const u=(l.__vccOpts||l)[e];u&&s.push(mi(u,t,i,o,a,r))}else{let c=l();s.push(()=>c.then(u=>{if(!u)throw new Error(`Couldn't resolve component "${a}" at "${o.path}"`);const h=Gg(u)?u.default:u;o.mods[a]=u,o.components[a]=h;const d=(h.__vccOpts||h)[e];return d&&mi(d,t,i,o,a,r)()}))}}return s}function Vu(n){const e=ti(Tc),t=ti(hd),i=bt(()=>{const l=Qt(n.to);return e.resolve(l)}),r=bt(()=>{const{matched:l}=i.value,{length:c}=l,u=l[c-1],h=t.matched;if(!u||!h.length)return-1;const f=h.findIndex(Dr.bind(null,u));if(f>-1)return f;const d=Wu(l[c-2]);return c>1&&Wu(u)===d&&h[h.length-1].path!==d?h.findIndex(Dr.bind(null,l[c-2])):f}),s=bt(()=>r.value>-1&&B0(t.params,i.value.params)),o=bt(()=>r.value>-1&&r.value===t.matched.length-1&&sd(t.params,i.value.params));function a(l={}){return O0(l)?e[Qt(n.replace)?"replace":"push"](Qt(n.to)).catch(as):Promise.resolve()}return{route:i,href:bt(()=>i.value.href),isActive:s,isExactActive:o,navigate:a}}const N0=an({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Vu,setup(n,{slots:e}){const t=Bo(Vu(n)),{options:i}=ti(Tc),r=bt(()=>({[Xu(n.activeClass,i.linkActiveClass,"router-link-active")]:t.isActive,[Xu(n.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:t.isExactActive}));return()=>{const s=e.default&&e.default(t);return n.custom?s:Zf("a",{"aria-current":t.isExactActive?n.ariaCurrentValue:null,href:t.href,onClick:t.navigate,class:r.value},s)}}}),F0=N0;function O0(n){if(!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)&&!n.defaultPrevented&&!(n.button!==void 0&&n.button!==0)){if(n.currentTarget&&n.currentTarget.getAttribute){const e=n.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return n.preventDefault&&n.preventDefault(),!0}}function B0(n,e){for(const t in e){const i=e[t],r=n[t];if(typeof i=="string"){if(i!==r)return!1}else if(!yn(r)||r.length!==i.length||i.some((s,o)=>s!==r[o]))return!1}return!0}function Wu(n){return n?n.aliasOf?n.aliasOf.path:n.path:""}const Xu=(n,e,t)=>n??e??t,z0=an({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(n,{attrs:e,slots:t}){const i=ti(hl),r=bt(()=>n.route||i.value),s=ti(ku,0),o=bt(()=>{let c=Qt(s);const{matched:u}=r.value;let h;for(;(h=u[c])&&!h.components;)c++;return c}),a=bt(()=>r.value.matched[o.value]);fo(ku,bt(()=>o.value+1)),fo(U0,a),fo(hl,r);const l=Tt();return nn(()=>[l.value,a.value,n.name],([c,u,h],[f,d,_])=>{u&&(u.instances[h]=c,d&&d!==u&&c&&c===f&&(u.leaveGuards.size||(u.leaveGuards=d.leaveGuards),u.updateGuards.size||(u.updateGuards=d.updateGuards))),c&&u&&(!d||!Dr(u,d)||!f)&&(u.enterCallbacks[h]||[]).forEach(x=>x(c))},{flush:"post"}),()=>{const c=r.value,u=n.name,h=a.value,f=h&&h.components[u];if(!f)return qu(t.default,{Component:f,route:c});const d=h.props[u],_=d?d===!0?c.params:typeof d=="function"?d(c):d:null,m=Zf(f,it({},_,e,{onVnodeUnmounted:p=>{p.component.isUnmounted&&(h.instances[u]=null)},ref:l}));return qu(t.default,{Component:m,route:c})||m}}});function qu(n,e){if(!n)return null;const t=n(e);return t.length===1?t[0]:t}const H0=z0;function G0(n){const e=A0(n.routes,n),t=n.parseQuery||I0,i=n.stringifyQuery||Gu,r=n.history,s=qr(),o=qr(),a=qr(),l=Zp(oi);let c=oi;yr&&n.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=da.bind(null,U=>""+U),h=da.bind(null,e0),f=da.bind(null,xs);function d(U,ie){let $,le;return ad(U)?($=e.getRecordMatcher(U),le=ie):le=U,e.addRoute(le,$)}function _(U){const ie=e.getRecordMatcher(U);ie&&e.removeRoute(ie)}function x(){return e.getRoutes().map(U=>U.record)}function m(U){return!!e.getRecordMatcher(U)}function p(U,ie){if(ie=it({},ie||l.value),typeof U=="string"){const A=pa(t,U,ie.path),L=e.resolve({path:A.path},ie),F=r.createHref(A.fullPath);return it(A,L,{params:f(L.params),hash:xs(A.hash),redirectedFrom:void 0,href:F})}let $;if(U.path!=null)$=it({},U,{path:pa(t,U.path,ie.path).path});else{const A=it({},U.params);for(const L in A)A[L]==null&&delete A[L];$=it({},U,{params:h(A)}),ie.params=h(ie.params)}const le=e.resolve($,ie),Me=U.hash||"";le.params=u(f(le.params));const J=i0(i,it({},U,{hash:Zg(Me),path:le.path})),g=r.createHref(J);return it({fullPath:J,hash:Me,query:i===Gu?D0(U.query):U.query||{}},le,{redirectedFrom:void 0,href:g})}function w(U){return typeof U=="string"?pa(t,U,l.value.path):it({},U)}function M(U,ie){if(c!==U)return Ur(8,{from:ie,to:U})}function S(U){return R(U)}function I(U){return S(it(w(U),{replace:!0}))}function C(U){const ie=U.matched[U.matched.length-1];if(ie&&ie.redirect){const{redirect:$}=ie;let le=typeof $=="function"?$(U):$;return typeof le=="string"&&(le=le.includes("?")||le.includes("#")?le=w(le):{path:le},le.params={}),it({query:U.query,hash:U.hash,params:le.path!=null?{}:U.params},le)}}function R(U,ie){const $=c=p(U),le=l.value,Me=U.state,J=U.force,g=U.replace===!0,A=C($);if(A)return R(it(w(A),{state:typeof A=="object"?it({},Me,A.state):Me,force:J,replace:g}),ie||$);const L=$;L.redirectedFrom=ie;let F;return!J&&r0(i,le,$)&&(F=Ur(16,{to:L,from:le}),_e(le,le,!0,!1)),(F?Promise.resolve(F):y(L,le)).catch(N=>Bn(N)?Bn(N,2)?N:me(N):z(N,L,le)).then(N=>{if(N){if(Bn(N,2))return R(it({replace:g},w(N.to),{state:typeof N.to=="object"?it({},Me,N.to.state):Me,force:J}),ie||L)}else N=q(L,le,!0,g,Me);return b(L,le,N),N})}function D(U,ie){const $=M(U,ie);return $?Promise.reject($):Promise.resolve()}function se(U){const ie=te.values().next().value;return ie&&typeof ie.runWithContext=="function"?ie.runWithContext(U):U()}function y(U,ie){let $;const[le,Me,J]=k0(U,ie);$=ma(le.reverse(),"beforeRouteLeave",U,ie);for(const A of le)A.leaveGuards.forEach(L=>{$.push(mi(L,U,ie))});const g=D.bind(null,U,ie);return $.push(g),pe($).then(()=>{$=[];for(const A of s.list())$.push(mi(A,U,ie));return $.push(g),pe($)}).then(()=>{$=ma(Me,"beforeRouteUpdate",U,ie);for(const A of Me)A.updateGuards.forEach(L=>{$.push(mi(L,U,ie))});return $.push(g),pe($)}).then(()=>{$=[];for(const A of J)if(A.beforeEnter)if(yn(A.beforeEnter))for(const L of A.beforeEnter)$.push(mi(L,U,ie));else $.push(mi(A.beforeEnter,U,ie));return $.push(g),pe($)}).then(()=>(U.matched.forEach(A=>A.enterCallbacks={}),$=ma(J,"beforeRouteEnter",U,ie,se),$.push(g),pe($))).then(()=>{$=[];for(const A of o.list())$.push(mi(A,U,ie));return $.push(g),pe($)}).catch(A=>Bn(A,8)?A:Promise.reject(A))}function b(U,ie,$){a.list().forEach(le=>se(()=>le(U,ie,$)))}function q(U,ie,$,le,Me){const J=M(U,ie);if(J)return J;const g=ie===oi,A=yr?history.state:{};$&&(le||g?r.replace(U.fullPath,it({scroll:g&&A&&A.scroll},Me)):r.push(U.fullPath,Me)),l.value=U,_e(U,ie,$,g),me()}let V;function Z(){V||(V=r.listen((U,ie,$)=>{if(!de.listening)return;const le=p(U),Me=C(le);if(Me){R(it(Me,{replace:!0}),le).catch(as);return}c=le;const J=l.value;yr&&f0(Iu(J.fullPath,$.delta),Wo()),y(le,J).catch(g=>Bn(g,12)?g:Bn(g,2)?(R(g.to,le).then(A=>{Bn(A,20)&&!$.delta&&$.type===ys.pop&&r.go(-1,!1)}).catch(as),Promise.reject()):($.delta&&r.go(-$.delta,!1),z(g,le,J))).then(g=>{g=g||q(le,J,!1),g&&($.delta&&!Bn(g,8)?r.go(-$.delta,!1):$.type===ys.pop&&Bn(g,20)&&r.go(-1,!1)),b(le,J,g)}).catch(as)}))}let re=qr(),G=qr(),K;function z(U,ie,$){me(U);const le=G.list();return le.length?le.forEach(Me=>Me(U,ie,$)):console.error(U),Promise.reject(U)}function ge(){return K&&l.value!==oi?Promise.resolve():new Promise((U,ie)=>{re.add([U,ie])})}function me(U){return K||(K=!U,Z(),re.list().forEach(([ie,$])=>U?$(U):ie()),re.reset()),U}function _e(U,ie,$,le){const{scrollBehavior:Me}=n;if(!yr||!Me)return Promise.resolve();const J=!$&&d0(Iu(U.fullPath,0))||(le||!$)&&history.state&&history.state.scroll||null;return Sf().then(()=>Me(U,ie,J)).then(g=>g&&h0(g)).catch(g=>z(g,U,ie))}const be=U=>r.go(U);let ze;const te=new Set,de={currentRoute:l,listening:!0,addRoute:d,removeRoute:_,clearRoutes:e.clearRoutes,hasRoute:m,getRoutes:x,resolve:p,options:n,push:S,replace:I,go:be,back:()=>be(-1),forward:()=>be(1),beforeEach:s.add,beforeResolve:o.add,afterEach:a.add,onError:G.add,isReady:ge,install(U){const ie=this;U.component("RouterLink",F0),U.component("RouterView",H0),U.config.globalProperties.$router=ie,Object.defineProperty(U.config.globalProperties,"$route",{enumerable:!0,get:()=>Qt(l)}),yr&&!ze&&l.value===oi&&(ze=!0,S(r.location).catch(Me=>{}));const $={};for(const Me in oi)Object.defineProperty($,Me,{get:()=>l.value[Me],enumerable:!0});U.provide(Tc,ie),U.provide(hd,_f($)),U.provide(hl,l);const le=U.unmount;te.add(U),U.unmount=function(){te.delete(U),te.size<1&&(c=oi,V&&V(),V=null,l.value=oi,ze=!1,K=!1),le()}}};function pe(U){return U.reduce((ie,$)=>ie.then(()=>se($)),Promise.resolve())}return de}function k0(n,e){const t=[],i=[],r=[],s=Math.max(e.matched.length,n.matched.length);for(let o=0;o<s;o++){const a=e.matched[o];a&&(n.matched.find(c=>Dr(c,a))?i.push(a):t.push(a));const l=n.matched[o];l&&(e.matched.find(c=>Dr(c,l))||r.push(l))}return[t,i,r]}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ac="169",V0=0,Yu=1,W0=2,fd=1,X0=2,Yn=3,Mi=0,kt=1,Zn=2,vi=0,Rr=1,$u=2,Ku=3,ju=4,q0=5,Bi=100,Y0=101,$0=102,K0=103,j0=104,Z0=200,J0=201,Q0=202,e_=203,fl=204,dl=205,t_=206,n_=207,i_=208,r_=209,s_=210,o_=211,a_=212,l_=213,c_=214,pl=0,ml=1,gl=2,Nr=3,_l=4,vl=5,xl=6,yl=7,dd=0,u_=1,h_=2,xi=0,f_=1,d_=2,p_=3,Rs=4,m_=5,g_=6,__=7,pd=300,Fr=301,Or=302,Ml=303,Sl=304,Xo=306,El=1e3,Hi=1001,bl=1002,en=1003,v_=1004,ks=1005,fn=1006,ga=1007,Gi=1008,ni=1009,md=1010,gd=1011,Ms=1012,Rc=1013,Xi=1014,Jn=1015,Cs=1016,Cc=1017,Pc=1018,Br=1020,_d=35902,vd=1021,xd=1022,mn=1023,yd=1024,Md=1025,Cr=1026,zr=1027,Sd=1028,Lc=1029,Ed=1030,Ic=1031,Dc=1033,go=33776,_o=33777,vo=33778,xo=33779,wl=35840,Tl=35841,Al=35842,Rl=35843,Cl=36196,Pl=37492,Ll=37496,Il=37808,Dl=37809,Ul=37810,Nl=37811,Fl=37812,Ol=37813,Bl=37814,zl=37815,Hl=37816,Gl=37817,kl=37818,Vl=37819,Wl=37820,Xl=37821,yo=36492,ql=36494,Yl=36495,bd=36283,$l=36284,Kl=36285,jl=36286,x_=3200,y_=3201,wd=0,M_=1,_i="",bn="srgb",bi="srgb-linear",Uc="display-p3",qo="display-p3-linear",Ro="linear",ct="srgb",Co="rec709",Po="p3",sr=7680,Zu=519,S_=512,E_=513,b_=514,Td=515,w_=516,T_=517,A_=518,R_=519,Ju=35044,Qu="300 es",Qn=2e3,Lo=2001;class kr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const At=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let eh=1234567;const cs=Math.PI/180,Ss=180/Math.PI;function Ji(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(At[n&255]+At[n>>8&255]+At[n>>16&255]+At[n>>24&255]+"-"+At[e&255]+At[e>>8&255]+"-"+At[e>>16&15|64]+At[e>>24&255]+"-"+At[t&63|128]+At[t>>8&255]+"-"+At[t>>16&255]+At[t>>24&255]+At[i&255]+At[i>>8&255]+At[i>>16&255]+At[i>>24&255]).toLowerCase()}function Mt(n,e,t){return Math.max(e,Math.min(t,n))}function Nc(n,e){return(n%e+e)%e}function C_(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function P_(n,e,t){return n!==e?(t-n)/(e-n):0}function us(n,e,t){return(1-t)*n+t*e}function L_(n,e,t,i){return us(n,e,1-Math.exp(-t*i))}function I_(n,e=1){return e-Math.abs(Nc(n,e*2)-e)}function D_(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function U_(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function N_(n,e){return n+Math.floor(Math.random()*(e-n+1))}function F_(n,e){return n+Math.random()*(e-n)}function O_(n){return n*(.5-Math.random())}function B_(n){n!==void 0&&(eh=n);let e=eh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function z_(n){return n*cs}function H_(n){return n*Ss}function G_(n){return(n&n-1)===0&&n!==0}function k_(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function V_(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function W_(n,e,t,i,r){const s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+i)/2),u=o((e+i)/2),h=s((e-i)/2),f=o((e-i)/2),d=s((i-e)/2),_=o((i-e)/2);switch(r){case"XYX":n.set(a*u,l*h,l*f,a*c);break;case"YZY":n.set(l*f,a*u,l*h,a*c);break;case"ZXZ":n.set(l*h,l*f,a*u,a*c);break;case"XZX":n.set(a*u,l*_,l*d,a*c);break;case"YXY":n.set(l*d,a*u,l*_,a*c);break;case"ZYZ":n.set(l*_,l*d,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Mr(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Ut(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Kn={DEG2RAD:cs,RAD2DEG:Ss,generateUUID:Ji,clamp:Mt,euclideanModulo:Nc,mapLinear:C_,inverseLerp:P_,lerp:us,damp:L_,pingpong:I_,smoothstep:D_,smootherstep:U_,randInt:N_,randFloat:F_,randFloatSpread:O_,seededRandom:B_,degToRad:z_,radToDeg:H_,isPowerOfTwo:G_,ceilPowerOfTwo:k_,floorPowerOfTwo:V_,setQuaternionFromProperEuler:W_,normalize:Ut,denormalize:Mr};class Ee{constructor(e=0,t=0){Ee.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Mt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class qe{constructor(e,t,i,r,s,o,a,l,c){qe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c)}set(e,t,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],h=i[7],f=i[2],d=i[5],_=i[8],x=r[0],m=r[3],p=r[6],w=r[1],M=r[4],S=r[7],I=r[2],C=r[5],R=r[8];return s[0]=o*x+a*w+l*I,s[3]=o*m+a*M+l*C,s[6]=o*p+a*S+l*R,s[1]=c*x+u*w+h*I,s[4]=c*m+u*M+h*C,s[7]=c*p+u*S+h*R,s[2]=f*x+d*w+_*I,s[5]=f*m+d*M+_*C,s[8]=f*p+d*S+_*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,f=a*l-u*s,d=c*s-o*l,_=t*h+i*f+r*d;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/_;return e[0]=h*x,e[1]=(r*c-u*i)*x,e[2]=(a*i-r*o)*x,e[3]=f*x,e[4]=(u*t-r*l)*x,e[5]=(r*s-a*t)*x,e[6]=d*x,e[7]=(i*l-c*t)*x,e[8]=(o*t-i*s)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(_a.makeScale(e,t)),this}rotate(e){return this.premultiply(_a.makeRotation(-e)),this}translate(e,t){return this.premultiply(_a.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const _a=new qe;function Ad(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Io(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function X_(){const n=Io("canvas");return n.style.display="block",n}const th={};function Mo(n){n in th||(th[n]=!0,console.warn(n))}function q_(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}function Y_(n){const e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function $_(n){const e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const nh=new qe().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),ih=new qe().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Yr={[bi]:{transfer:Ro,primaries:Co,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n,fromReference:n=>n},[bn]:{transfer:ct,primaries:Co,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[qo]:{transfer:Ro,primaries:Po,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.applyMatrix3(ih),fromReference:n=>n.applyMatrix3(nh)},[Uc]:{transfer:ct,primaries:Po,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.convertSRGBToLinear().applyMatrix3(ih),fromReference:n=>n.applyMatrix3(nh).convertLinearToSRGB()}},K_=new Set([bi,qo]),et={enabled:!0,_workingColorSpace:bi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!K_.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=Yr[e].toReference,r=Yr[t].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return Yr[n].primaries},getTransfer:function(n){return n===_i?Ro:Yr[n].transfer},getLuminanceCoefficients:function(n,e=this._workingColorSpace){return n.fromArray(Yr[e].luminanceCoefficients)}};function Pr(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function va(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let or;class j_{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{or===void 0&&(or=Io("canvas")),or.width=e.width,or.height=e.height;const i=or.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=or}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Io("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Pr(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Pr(t[i]/255)*255):t[i]=Pr(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Z_=0;class Rd{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Z_++}),this.uuid=Ji(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(xa(r[o].image)):s.push(xa(r[o]))}else s=xa(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function xa(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?j_.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let J_=0;class Vt extends kr{constructor(e=Vt.DEFAULT_IMAGE,t=Vt.DEFAULT_MAPPING,i=Hi,r=Hi,s=fn,o=Gi,a=mn,l=ni,c=Vt.DEFAULT_ANISOTROPY,u=_i){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:J_++}),this.uuid=Ji(),this.name="",this.source=new Rd(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ee(0,0),this.repeat=new Ee(1,1),this.center=new Ee(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==pd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case El:e.x=e.x-Math.floor(e.x);break;case Hi:e.x=e.x<0?0:1;break;case bl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case El:e.y=e.y-Math.floor(e.y);break;case Hi:e.y=e.y<0?0:1;break;case bl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Vt.DEFAULT_IMAGE=null;Vt.DEFAULT_MAPPING=pd;Vt.DEFAULT_ANISOTROPY=1;class rt{constructor(e=0,t=0,i=0,r=1){rt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],d=l[5],_=l[9],x=l[2],m=l[6],p=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-x)<.01&&Math.abs(_-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+x)<.1&&Math.abs(_+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const M=(c+1)/2,S=(d+1)/2,I=(p+1)/2,C=(u+f)/4,R=(h+x)/4,D=(_+m)/4;return M>S&&M>I?M<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(M),r=C/i,s=R/i):S>I?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=C/r,s=D/r):I<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(I),i=R/s,r=D/s),this.set(i,r,s,t),this}let w=Math.sqrt((m-_)*(m-_)+(h-x)*(h-x)+(f-u)*(f-u));return Math.abs(w)<.001&&(w=1),this.x=(m-_)/w,this.y=(h-x)/w,this.z=(f-u)/w,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Q_ extends kr{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new rt(0,0,e,t),this.scissorTest=!1,this.viewport=new rt(0,0,e,t);const r={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:fn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new Vt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Rd(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class qi extends Q_{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Cd extends Vt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=en,this.minFilter=en,this.wrapR=Hi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class ev extends Vt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=en,this.minFilter=en,this.wrapR=Hi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ps{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],h=i[r+3];const f=s[o+0],d=s[o+1],_=s[o+2],x=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=f,e[t+1]=d,e[t+2]=_,e[t+3]=x;return}if(h!==x||l!==f||c!==d||u!==_){let m=1-a;const p=l*f+c*d+u*_+h*x,w=p>=0?1:-1,M=1-p*p;if(M>Number.EPSILON){const I=Math.sqrt(M),C=Math.atan2(I,p*w);m=Math.sin(m*C)/I,a=Math.sin(a*C)/I}const S=a*w;if(l=l*m+f*S,c=c*m+d*S,u=u*m+_*S,h=h*m+x*S,m===1-a){const I=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=I,c*=I,u*=I,h*=I}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],h=s[o],f=s[o+1],d=s[o+2],_=s[o+3];return e[t]=a*_+u*h+l*d-c*f,e[t+1]=l*_+u*f+c*h-a*d,e[t+2]=c*_+u*d+a*f-l*h,e[t+3]=u*_-a*h-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),h=a(s/2),f=l(i/2),d=l(r/2),_=l(s/2);switch(o){case"XYZ":this._x=f*u*h+c*d*_,this._y=c*d*h-f*u*_,this._z=c*u*_+f*d*h,this._w=c*u*h-f*d*_;break;case"YXZ":this._x=f*u*h+c*d*_,this._y=c*d*h-f*u*_,this._z=c*u*_-f*d*h,this._w=c*u*h+f*d*_;break;case"ZXY":this._x=f*u*h-c*d*_,this._y=c*d*h+f*u*_,this._z=c*u*_+f*d*h,this._w=c*u*h-f*d*_;break;case"ZYX":this._x=f*u*h-c*d*_,this._y=c*d*h+f*u*_,this._z=c*u*_-f*d*h,this._w=c*u*h+f*d*_;break;case"YZX":this._x=f*u*h+c*d*_,this._y=c*d*h+f*u*_,this._z=c*u*_-f*d*h,this._w=c*u*h-f*d*_;break;case"XZY":this._x=f*u*h-c*d*_,this._y=c*d*h-f*u*_,this._z=c*u*_+f*d*h,this._w=c*u*h+f*d*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=i+a+h;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-l)*d,this._y=(s-c)*d,this._z=(o-r)*d}else if(i>a&&i>h){const d=2*Math.sqrt(1+i-a-h);this._w=(u-l)/d,this._x=.25*d,this._y=(r+o)/d,this._z=(s+c)/d}else if(a>h){const d=2*Math.sqrt(1+a-i-h);this._w=(s-c)/d,this._x=(r+o)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+h-i-a);this._w=(o-r)/d,this._x=(s+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Mt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-t;return this._w=d*o+t*this._w,this._x=d*i+t*this._x,this._y=d*r+t*this._y,this._z=d*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=o*h+this._w*f,this._x=i*h+this._x*f,this._y=r*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class B{constructor(e=0,t=0,i=0){B.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(rh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(rh.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*t-s*r),h=2*(s*i-o*t);return this.x=t+l*c+o*h-a*u,this.y=i+l*u+a*c-s*h,this.z=r+l*h+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return ya.copy(this).projectOnVector(e),this.sub(ya)}reflect(e){return this.sub(ya.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Mt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ya=new B,rh=new Ps;class Ls{constructor(e=new B(1/0,1/0,1/0),t=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(cn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(cn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=cn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,cn):cn.fromBufferAttribute(s,o),cn.applyMatrix4(e.matrixWorld),this.expandByPoint(cn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Vs.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Vs.copy(i.boundingBox)),Vs.applyMatrix4(e.matrixWorld),this.union(Vs)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,cn),cn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter($r),Ws.subVectors(this.max,$r),ar.subVectors(e.a,$r),lr.subVectors(e.b,$r),cr.subVectors(e.c,$r),ai.subVectors(lr,ar),li.subVectors(cr,lr),Ci.subVectors(ar,cr);let t=[0,-ai.z,ai.y,0,-li.z,li.y,0,-Ci.z,Ci.y,ai.z,0,-ai.x,li.z,0,-li.x,Ci.z,0,-Ci.x,-ai.y,ai.x,0,-li.y,li.x,0,-Ci.y,Ci.x,0];return!Ma(t,ar,lr,cr,Ws)||(t=[1,0,0,0,1,0,0,0,1],!Ma(t,ar,lr,cr,Ws))?!1:(Xs.crossVectors(ai,li),t=[Xs.x,Xs.y,Xs.z],Ma(t,ar,lr,cr,Ws))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,cn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(cn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(zn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),zn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),zn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),zn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),zn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),zn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),zn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),zn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(zn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const zn=[new B,new B,new B,new B,new B,new B,new B,new B],cn=new B,Vs=new Ls,ar=new B,lr=new B,cr=new B,ai=new B,li=new B,Ci=new B,$r=new B,Ws=new B,Xs=new B,Pi=new B;function Ma(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){Pi.fromArray(n,s);const a=r.x*Math.abs(Pi.x)+r.y*Math.abs(Pi.y)+r.z*Math.abs(Pi.z),l=e.dot(Pi),c=t.dot(Pi),u=i.dot(Pi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const tv=new Ls,Kr=new B,Sa=new B;class Fc{constructor(e=new B,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):tv.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Kr.subVectors(e,this.center);const t=Kr.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Kr,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Sa.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Kr.copy(e.center).add(Sa)),this.expandByPoint(Kr.copy(e.center).sub(Sa))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Hn=new B,Ea=new B,qs=new B,ci=new B,ba=new B,Ys=new B,wa=new B;class nv{constructor(e=new B,t=new B(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Hn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Hn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Hn.copy(this.origin).addScaledVector(this.direction,t),Hn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Ea.copy(e).add(t).multiplyScalar(.5),qs.copy(t).sub(e).normalize(),ci.copy(this.origin).sub(Ea);const s=e.distanceTo(t)*.5,o=-this.direction.dot(qs),a=ci.dot(this.direction),l=-ci.dot(qs),c=ci.lengthSq(),u=Math.abs(1-o*o);let h,f,d,_;if(u>0)if(h=o*l-a,f=o*a-l,_=s*u,h>=0)if(f>=-_)if(f<=_){const x=1/u;h*=x,f*=x,d=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f=-s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f<=-_?(h=Math.max(0,-(-o*s+a)),f=h>0?-s:Math.min(Math.max(-s,-l),s),d=-h*h+f*(f+2*l)+c):f<=_?(h=0,f=Math.min(Math.max(-s,-l),s),d=f*(f+2*l)+c):(h=Math.max(0,-(o*s+a)),f=h>0?s:Math.min(Math.max(-s,-l),s),d=-h*h+f*(f+2*l)+c);else f=o>0?-s:s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(Ea).addScaledVector(qs,f),d}intersectSphere(e,t){Hn.subVectors(e.center,this.origin);const i=Hn.dot(this.direction),r=Hn.dot(Hn)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),u>=0?(s=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Hn)!==null}intersectTriangle(e,t,i,r,s){ba.subVectors(t,e),Ys.subVectors(i,e),wa.crossVectors(ba,Ys);let o=this.direction.dot(wa),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ci.subVectors(this.origin,e);const l=a*this.direction.dot(Ys.crossVectors(ci,Ys));if(l<0)return null;const c=a*this.direction.dot(ba.cross(ci));if(c<0||l+c>o)return null;const u=-a*ci.dot(wa);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ut{constructor(e,t,i,r,s,o,a,l,c,u,h,f,d,_,x,m){ut.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c,u,h,f,d,_,x,m)}set(e,t,i,r,s,o,a,l,c,u,h,f,d,_,x,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=r,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=f,p[3]=d,p[7]=_,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ut().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/ur.setFromMatrixColumn(e,0).length(),s=1/ur.setFromMatrixColumn(e,1).length(),o=1/ur.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const f=o*u,d=o*h,_=a*u,x=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=d+_*c,t[5]=f-x*c,t[9]=-a*l,t[2]=x-f*c,t[6]=_+d*c,t[10]=o*l}else if(e.order==="YXZ"){const f=l*u,d=l*h,_=c*u,x=c*h;t[0]=f+x*a,t[4]=_*a-d,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=d*a-_,t[6]=x+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*u,d=l*h,_=c*u,x=c*h;t[0]=f-x*a,t[4]=-o*h,t[8]=_+d*a,t[1]=d+_*a,t[5]=o*u,t[9]=x-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*u,d=o*h,_=a*u,x=a*h;t[0]=l*u,t[4]=_*c-d,t[8]=f*c+x,t[1]=l*h,t[5]=x*c+f,t[9]=d*c-_,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,d=o*c,_=a*l,x=a*c;t[0]=l*u,t[4]=x-f*h,t[8]=_*h+d,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=d*h+_,t[10]=f-x*h}else if(e.order==="XZY"){const f=o*l,d=o*c,_=a*l,x=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+x,t[5]=o*u,t[9]=d*h-_,t[2]=_*h-d,t[6]=a*u,t[10]=x*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(iv,e,rv)}lookAt(e,t,i){const r=this.elements;return qt.subVectors(e,t),qt.lengthSq()===0&&(qt.z=1),qt.normalize(),ui.crossVectors(i,qt),ui.lengthSq()===0&&(Math.abs(i.z)===1?qt.x+=1e-4:qt.z+=1e-4,qt.normalize(),ui.crossVectors(i,qt)),ui.normalize(),$s.crossVectors(qt,ui),r[0]=ui.x,r[4]=$s.x,r[8]=qt.x,r[1]=ui.y,r[5]=$s.y,r[9]=qt.y,r[2]=ui.z,r[6]=$s.z,r[10]=qt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],h=i[5],f=i[9],d=i[13],_=i[2],x=i[6],m=i[10],p=i[14],w=i[3],M=i[7],S=i[11],I=i[15],C=r[0],R=r[4],D=r[8],se=r[12],y=r[1],b=r[5],q=r[9],V=r[13],Z=r[2],re=r[6],G=r[10],K=r[14],z=r[3],ge=r[7],me=r[11],_e=r[15];return s[0]=o*C+a*y+l*Z+c*z,s[4]=o*R+a*b+l*re+c*ge,s[8]=o*D+a*q+l*G+c*me,s[12]=o*se+a*V+l*K+c*_e,s[1]=u*C+h*y+f*Z+d*z,s[5]=u*R+h*b+f*re+d*ge,s[9]=u*D+h*q+f*G+d*me,s[13]=u*se+h*V+f*K+d*_e,s[2]=_*C+x*y+m*Z+p*z,s[6]=_*R+x*b+m*re+p*ge,s[10]=_*D+x*q+m*G+p*me,s[14]=_*se+x*V+m*K+p*_e,s[3]=w*C+M*y+S*Z+I*z,s[7]=w*R+M*b+S*re+I*ge,s[11]=w*D+M*q+S*G+I*me,s[15]=w*se+M*V+S*K+I*_e,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],d=e[14],_=e[3],x=e[7],m=e[11],p=e[15];return _*(+s*l*h-r*c*h-s*a*f+i*c*f+r*a*d-i*l*d)+x*(+t*l*d-t*c*f+s*o*f-r*o*d+r*c*u-s*l*u)+m*(+t*c*h-t*a*d-s*o*h+i*o*d+s*a*u-i*c*u)+p*(-r*a*u-t*l*h+t*a*f+r*o*h-i*o*f+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],d=e[11],_=e[12],x=e[13],m=e[14],p=e[15],w=h*m*c-x*f*c+x*l*d-a*m*d-h*l*p+a*f*p,M=_*f*c-u*m*c-_*l*d+o*m*d+u*l*p-o*f*p,S=u*x*c-_*h*c+_*a*d-o*x*d-u*a*p+o*h*p,I=_*h*l-u*x*l-_*a*f+o*x*f+u*a*m-o*h*m,C=t*w+i*M+r*S+s*I;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/C;return e[0]=w*R,e[1]=(x*f*s-h*m*s-x*r*d+i*m*d+h*r*p-i*f*p)*R,e[2]=(a*m*s-x*l*s+x*r*c-i*m*c-a*r*p+i*l*p)*R,e[3]=(h*l*s-a*f*s-h*r*c+i*f*c+a*r*d-i*l*d)*R,e[4]=M*R,e[5]=(u*m*s-_*f*s+_*r*d-t*m*d-u*r*p+t*f*p)*R,e[6]=(_*l*s-o*m*s-_*r*c+t*m*c+o*r*p-t*l*p)*R,e[7]=(o*f*s-u*l*s+u*r*c-t*f*c-o*r*d+t*l*d)*R,e[8]=S*R,e[9]=(_*h*s-u*x*s-_*i*d+t*x*d+u*i*p-t*h*p)*R,e[10]=(o*x*s-_*a*s+_*i*c-t*x*c-o*i*p+t*a*p)*R,e[11]=(u*a*s-o*h*s-u*i*c+t*h*c+o*i*d-t*a*d)*R,e[12]=I*R,e[13]=(u*x*r-_*h*r+_*i*f-t*x*f-u*i*m+t*h*m)*R,e[14]=(_*a*r-o*x*r-_*i*l+t*x*l+o*i*m-t*a*m)*R,e[15]=(o*h*r-u*a*r+u*i*l-t*h*l-o*i*f+t*a*f)*R,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,h=a+a,f=s*c,d=s*u,_=s*h,x=o*u,m=o*h,p=a*h,w=l*c,M=l*u,S=l*h,I=i.x,C=i.y,R=i.z;return r[0]=(1-(x+p))*I,r[1]=(d+S)*I,r[2]=(_-M)*I,r[3]=0,r[4]=(d-S)*C,r[5]=(1-(f+p))*C,r[6]=(m+w)*C,r[7]=0,r[8]=(_+M)*R,r[9]=(m-w)*R,r[10]=(1-(f+x))*R,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=ur.set(r[0],r[1],r[2]).length();const o=ur.set(r[4],r[5],r[6]).length(),a=ur.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],un.copy(this);const c=1/s,u=1/o,h=1/a;return un.elements[0]*=c,un.elements[1]*=c,un.elements[2]*=c,un.elements[4]*=u,un.elements[5]*=u,un.elements[6]*=u,un.elements[8]*=h,un.elements[9]*=h,un.elements[10]*=h,t.setFromRotationMatrix(un),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=Qn){const l=this.elements,c=2*s/(t-e),u=2*s/(i-r),h=(t+e)/(t-e),f=(i+r)/(i-r);let d,_;if(a===Qn)d=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===Lo)d=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=Qn){const l=this.elements,c=1/(t-e),u=1/(i-r),h=1/(o-s),f=(t+e)*c,d=(i+r)*u;let _,x;if(a===Qn)_=(o+s)*h,x=-2*h;else if(a===Lo)_=s*h,x=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=x,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const ur=new B,un=new ut,iv=new B(0,0,0),rv=new B(1,1,1),ui=new B,$s=new B,qt=new B,sh=new ut,oh=new Ps;class Pn{constructor(e=0,t=0,i=0,r=Pn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],h=r[2],f=r[6],d=r[10];switch(t){case"XYZ":this._y=Math.asin(Mt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Mt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Mt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Mt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Mt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Mt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return sh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(sh,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return oh.setFromEuler(this),this.setFromQuaternion(oh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Pn.DEFAULT_ORDER="XYZ";class Pd{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let sv=0;const ah=new B,hr=new Ps,Gn=new ut,Ks=new B,jr=new B,ov=new B,av=new Ps,lh=new B(1,0,0),ch=new B(0,1,0),uh=new B(0,0,1),hh={type:"added"},lv={type:"removed"},fr={type:"childadded",child:null},Ta={type:"childremoved",child:null};class Lt extends kr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:sv++}),this.uuid=Ji(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Lt.DEFAULT_UP.clone();const e=new B,t=new Pn,i=new Ps,r=new B(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ut},normalMatrix:{value:new qe}}),this.matrix=new ut,this.matrixWorld=new ut,this.matrixAutoUpdate=Lt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Lt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Pd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return hr.setFromAxisAngle(e,t),this.quaternion.multiply(hr),this}rotateOnWorldAxis(e,t){return hr.setFromAxisAngle(e,t),this.quaternion.premultiply(hr),this}rotateX(e){return this.rotateOnAxis(lh,e)}rotateY(e){return this.rotateOnAxis(ch,e)}rotateZ(e){return this.rotateOnAxis(uh,e)}translateOnAxis(e,t){return ah.copy(e).applyQuaternion(this.quaternion),this.position.add(ah.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(lh,e)}translateY(e){return this.translateOnAxis(ch,e)}translateZ(e){return this.translateOnAxis(uh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Gn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Ks.copy(e):Ks.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),jr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Gn.lookAt(jr,Ks,this.up):Gn.lookAt(Ks,jr,this.up),this.quaternion.setFromRotationMatrix(Gn),r&&(Gn.extractRotation(r.matrixWorld),hr.setFromRotationMatrix(Gn),this.quaternion.premultiply(hr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(hh),fr.child=e,this.dispatchEvent(fr),fr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(lv),Ta.child=e,this.dispatchEvent(Ta),Ta.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Gn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Gn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Gn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(hh),fr.child=e,this.dispatchEvent(fr),fr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(jr,e,ov),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(jr,av,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),f=o(e.skeletons),d=o(e.animations),_=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),d.length>0&&(i.animations=d),_.length>0&&(i.nodes=_)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Lt.DEFAULT_UP=new B(0,1,0);Lt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Lt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const hn=new B,kn=new B,Aa=new B,Vn=new B,dr=new B,pr=new B,fh=new B,Ra=new B,Ca=new B,Pa=new B,La=new rt,Ia=new rt,Da=new rt;class dn{constructor(e=new B,t=new B,i=new B){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),hn.subVectors(e,t),r.cross(hn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){hn.subVectors(r,t),kn.subVectors(i,t),Aa.subVectors(e,t);const o=hn.dot(hn),a=hn.dot(kn),l=hn.dot(Aa),c=kn.dot(kn),u=kn.dot(Aa),h=o*c-a*a;if(h===0)return s.set(0,0,0),null;const f=1/h,d=(c*l-a*u)*f,_=(o*u-a*l)*f;return s.set(1-d-_,_,d)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Vn)===null?!1:Vn.x>=0&&Vn.y>=0&&Vn.x+Vn.y<=1}static getInterpolation(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,Vn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Vn.x),l.addScaledVector(o,Vn.y),l.addScaledVector(a,Vn.z),l)}static getInterpolatedAttribute(e,t,i,r,s,o){return La.setScalar(0),Ia.setScalar(0),Da.setScalar(0),La.fromBufferAttribute(e,t),Ia.fromBufferAttribute(e,i),Da.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(La,s.x),o.addScaledVector(Ia,s.y),o.addScaledVector(Da,s.z),o}static isFrontFacing(e,t,i,r){return hn.subVectors(i,t),kn.subVectors(e,t),hn.cross(kn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return hn.subVectors(this.c,this.b),kn.subVectors(this.a,this.b),hn.cross(kn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return dn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return dn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return dn.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return dn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return dn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;dr.subVectors(r,i),pr.subVectors(s,i),Ra.subVectors(e,i);const l=dr.dot(Ra),c=pr.dot(Ra);if(l<=0&&c<=0)return t.copy(i);Ca.subVectors(e,r);const u=dr.dot(Ca),h=pr.dot(Ca);if(u>=0&&h<=u)return t.copy(r);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(dr,o);Pa.subVectors(e,s);const d=dr.dot(Pa),_=pr.dot(Pa);if(_>=0&&d<=_)return t.copy(s);const x=d*c-l*_;if(x<=0&&c>=0&&_<=0)return a=c/(c-_),t.copy(i).addScaledVector(pr,a);const m=u*_-d*h;if(m<=0&&h-u>=0&&d-_>=0)return fh.subVectors(s,r),a=(h-u)/(h-u+(d-_)),t.copy(r).addScaledVector(fh,a);const p=1/(m+x+f);return o=x*p,a=f*p,t.copy(i).addScaledVector(dr,o).addScaledVector(pr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Ld={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},hi={h:0,s:0,l:0},js={h:0,s:0,l:0};function Ua(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Ve{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=bn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,et.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=et.workingColorSpace){return this.r=e,this.g=t,this.b=i,et.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=et.workingColorSpace){if(e=Nc(e,1),t=Mt(t,0,1),i=Mt(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=Ua(o,s,e+1/3),this.g=Ua(o,s,e),this.b=Ua(o,s,e-1/3)}return et.toWorkingColorSpace(this,r),this}setStyle(e,t=bn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=bn){const i=Ld[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Pr(e.r),this.g=Pr(e.g),this.b=Pr(e.b),this}copyLinearToSRGB(e){return this.r=va(e.r),this.g=va(e.g),this.b=va(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=bn){return et.fromWorkingColorSpace(Rt.copy(this),e),Math.round(Mt(Rt.r*255,0,255))*65536+Math.round(Mt(Rt.g*255,0,255))*256+Math.round(Mt(Rt.b*255,0,255))}getHexString(e=bn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=et.workingColorSpace){et.fromWorkingColorSpace(Rt.copy(this),t);const i=Rt.r,r=Rt.g,s=Rt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case i:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-i)/h+2;break;case s:l=(i-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=et.workingColorSpace){return et.fromWorkingColorSpace(Rt.copy(this),t),e.r=Rt.r,e.g=Rt.g,e.b=Rt.b,e}getStyle(e=bn){et.fromWorkingColorSpace(Rt.copy(this),e);const t=Rt.r,i=Rt.g,r=Rt.b;return e!==bn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(hi),this.setHSL(hi.h+e,hi.s+t,hi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(hi),e.getHSL(js);const i=us(hi.h,js.h,t),r=us(hi.s,js.s,t),s=us(hi.l,js.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Rt=new Ve;Ve.NAMES=Ld;let cv=0;class Is extends kr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:cv++}),this.uuid=Ji(),this.name="",this.type="Material",this.blending=Rr,this.side=Mi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=fl,this.blendDst=dl,this.blendEquation=Bi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ve(0,0,0),this.blendAlpha=0,this.depthFunc=Nr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Zu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=sr,this.stencilZFail=sr,this.stencilZPass=sr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Rr&&(i.blending=this.blending),this.side!==Mi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==fl&&(i.blendSrc=this.blendSrc),this.blendDst!==dl&&(i.blendDst=this.blendDst),this.blendEquation!==Bi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Nr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Zu&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==sr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==sr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==sr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class vn extends Is{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ve(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pn,this.combine=dd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const gt=new B,Zs=new Ee;class Rn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Ju,this.updateRanges=[],this.gpuType=Jn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Zs.fromBufferAttribute(this,t),Zs.applyMatrix3(e),this.setXY(t,Zs.x,Zs.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)gt.fromBufferAttribute(this,t),gt.applyMatrix3(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)gt.fromBufferAttribute(this,t),gt.applyMatrix4(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)gt.fromBufferAttribute(this,t),gt.applyNormalMatrix(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)gt.fromBufferAttribute(this,t),gt.transformDirection(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Mr(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Ut(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Mr(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ut(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Mr(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ut(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Mr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ut(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Mr(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ut(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Ut(t,this.array),i=Ut(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Ut(t,this.array),i=Ut(i,this.array),r=Ut(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=Ut(t,this.array),i=Ut(i,this.array),r=Ut(r,this.array),s=Ut(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ju&&(e.usage=this.usage),e}}class Id extends Rn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Dd extends Rn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Bt extends Rn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let uv=0;const Jt=new ut,Na=new Lt,mr=new B,Yt=new Ls,Zr=new Ls,yt=new B;class Un extends kr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:uv++}),this.uuid=Ji(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ad(e)?Dd:Id)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new qe().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Jt.makeRotationFromQuaternion(e),this.applyMatrix4(Jt),this}rotateX(e){return Jt.makeRotationX(e),this.applyMatrix4(Jt),this}rotateY(e){return Jt.makeRotationY(e),this.applyMatrix4(Jt),this}rotateZ(e){return Jt.makeRotationZ(e),this.applyMatrix4(Jt),this}translate(e,t,i){return Jt.makeTranslation(e,t,i),this.applyMatrix4(Jt),this}scale(e,t,i){return Jt.makeScale(e,t,i),this.applyMatrix4(Jt),this}lookAt(e){return Na.lookAt(e),Na.updateMatrix(),this.applyMatrix4(Na.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(mr).negate(),this.translate(mr.x,mr.y,mr.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Bt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ls);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];Yt.setFromBufferAttribute(s),this.morphTargetsRelative?(yt.addVectors(this.boundingBox.min,Yt.min),this.boundingBox.expandByPoint(yt),yt.addVectors(this.boundingBox.max,Yt.max),this.boundingBox.expandByPoint(yt)):(this.boundingBox.expandByPoint(Yt.min),this.boundingBox.expandByPoint(Yt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Fc);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new B,1/0);return}if(e){const i=this.boundingSphere.center;if(Yt.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Zr.setFromBufferAttribute(a),this.morphTargetsRelative?(yt.addVectors(Yt.min,Zr.min),Yt.expandByPoint(yt),yt.addVectors(Yt.max,Zr.max),Yt.expandByPoint(yt)):(Yt.expandByPoint(Zr.min),Yt.expandByPoint(Zr.max))}Yt.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)yt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(yt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)yt.fromBufferAttribute(a,c),l&&(mr.fromBufferAttribute(e,c),yt.add(mr)),r=Math.max(r,i.distanceToSquared(yt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Rn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let D=0;D<i.count;D++)a[D]=new B,l[D]=new B;const c=new B,u=new B,h=new B,f=new Ee,d=new Ee,_=new Ee,x=new B,m=new B;function p(D,se,y){c.fromBufferAttribute(i,D),u.fromBufferAttribute(i,se),h.fromBufferAttribute(i,y),f.fromBufferAttribute(s,D),d.fromBufferAttribute(s,se),_.fromBufferAttribute(s,y),u.sub(c),h.sub(c),d.sub(f),_.sub(f);const b=1/(d.x*_.y-_.x*d.y);isFinite(b)&&(x.copy(u).multiplyScalar(_.y).addScaledVector(h,-d.y).multiplyScalar(b),m.copy(h).multiplyScalar(d.x).addScaledVector(u,-_.x).multiplyScalar(b),a[D].add(x),a[se].add(x),a[y].add(x),l[D].add(m),l[se].add(m),l[y].add(m))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let D=0,se=w.length;D<se;++D){const y=w[D],b=y.start,q=y.count;for(let V=b,Z=b+q;V<Z;V+=3)p(e.getX(V+0),e.getX(V+1),e.getX(V+2))}const M=new B,S=new B,I=new B,C=new B;function R(D){I.fromBufferAttribute(r,D),C.copy(I);const se=a[D];M.copy(se),M.sub(I.multiplyScalar(I.dot(se))).normalize(),S.crossVectors(C,se);const b=S.dot(l[D])<0?-1:1;o.setXYZW(D,M.x,M.y,M.z,b)}for(let D=0,se=w.length;D<se;++D){const y=w[D],b=y.start,q=y.count;for(let V=b,Z=b+q;V<Z;V+=3)R(e.getX(V+0)),R(e.getX(V+1)),R(e.getX(V+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Rn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,d=i.count;f<d;f++)i.setXYZ(f,0,0,0);const r=new B,s=new B,o=new B,a=new B,l=new B,c=new B,u=new B,h=new B;if(e)for(let f=0,d=e.count;f<d;f+=3){const _=e.getX(f+0),x=e.getX(f+1),m=e.getX(f+2);r.fromBufferAttribute(t,_),s.fromBufferAttribute(t,x),o.fromBufferAttribute(t,m),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),a.fromBufferAttribute(i,_),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)yt.fromBufferAttribute(e,t),yt.normalize(),e.setXYZ(t,yt.x,yt.y,yt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u);let d=0,_=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?d=l[x]*a.data.stride+a.offset:d=l[x]*u;for(let p=0;p<u;p++)f[_++]=c[d++]}return new Rn(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Un,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,h=c.length;u<h;u++){const f=c[u],d=e(f,i);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const d=c[h];u.push(d.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],h=s[c];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const dh=new ut,Li=new nv,Js=new Fc,ph=new B,Qs=new B,eo=new B,to=new B,Fa=new B,no=new B,mh=new B,io=new B;class ae extends Lt{constructor(e=new Un,t=new vn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){no.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],h=s[l];u!==0&&(Fa.fromBufferAttribute(h,e),o?no.addScaledVector(Fa,u):no.addScaledVector(Fa.sub(t),u))}t.add(no)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Js.copy(i.boundingSphere),Js.applyMatrix4(s),Li.copy(e.ray).recast(e.near),!(Js.containsPoint(Li.origin)===!1&&(Li.intersectSphere(Js,ph)===null||Li.origin.distanceToSquared(ph)>(e.far-e.near)**2))&&(dh.copy(s).invert(),Li.copy(e.ray).applyMatrix4(dh),!(i.boundingBox!==null&&Li.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Li)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,f=s.groups,d=s.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,x=f.length;_<x;_++){const m=f[_],p=o[m.materialIndex],w=Math.max(m.start,d.start),M=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let S=w,I=M;S<I;S+=3){const C=a.getX(S),R=a.getX(S+1),D=a.getX(S+2);r=ro(this,p,e,i,c,u,h,C,R,D),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const _=Math.max(0,d.start),x=Math.min(a.count,d.start+d.count);for(let m=_,p=x;m<p;m+=3){const w=a.getX(m),M=a.getX(m+1),S=a.getX(m+2);r=ro(this,o,e,i,c,u,h,w,M,S),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,x=f.length;_<x;_++){const m=f[_],p=o[m.materialIndex],w=Math.max(m.start,d.start),M=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let S=w,I=M;S<I;S+=3){const C=S,R=S+1,D=S+2;r=ro(this,p,e,i,c,u,h,C,R,D),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const _=Math.max(0,d.start),x=Math.min(l.count,d.start+d.count);for(let m=_,p=x;m<p;m+=3){const w=m,M=m+1,S=m+2;r=ro(this,o,e,i,c,u,h,w,M,S),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function hv(n,e,t,i,r,s,o,a){let l;if(e.side===kt?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Mi,a),l===null)return null;io.copy(a),io.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(io);return c<t.near||c>t.far?null:{distance:c,point:io.clone(),object:n}}function ro(n,e,t,i,r,s,o,a,l,c){n.getVertexPosition(a,Qs),n.getVertexPosition(l,eo),n.getVertexPosition(c,to);const u=hv(n,e,t,i,Qs,eo,to,mh);if(u){const h=new B;dn.getBarycoord(mh,Qs,eo,to,h),r&&(u.uv=dn.getInterpolatedAttribute(r,a,l,c,h,new Ee)),s&&(u.uv1=dn.getInterpolatedAttribute(s,a,l,c,h,new Ee)),o&&(u.normal=dn.getInterpolatedAttribute(o,a,l,c,h,new B),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new B,materialIndex:0};dn.getNormal(Qs,eo,to,f.normal),u.face=f,u.barycoord=h}return u}class Ds extends Un{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],h=[];let f=0,d=0;_("z","y","x",-1,-1,i,t,e,o,s,0),_("z","y","x",1,-1,i,t,-e,o,s,1),_("x","z","y",1,1,e,i,t,r,o,2),_("x","z","y",1,-1,e,i,-t,r,o,3),_("x","y","z",1,-1,e,t,i,r,s,4),_("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Bt(c,3)),this.setAttribute("normal",new Bt(u,3)),this.setAttribute("uv",new Bt(h,2));function _(x,m,p,w,M,S,I,C,R,D,se){const y=S/R,b=I/D,q=S/2,V=I/2,Z=C/2,re=R+1,G=D+1;let K=0,z=0;const ge=new B;for(let me=0;me<G;me++){const _e=me*b-V;for(let be=0;be<re;be++){const ze=be*y-q;ge[x]=ze*w,ge[m]=_e*M,ge[p]=Z,c.push(ge.x,ge.y,ge.z),ge[x]=0,ge[m]=0,ge[p]=C>0?1:-1,u.push(ge.x,ge.y,ge.z),h.push(be/R),h.push(1-me/D),K+=1}}for(let me=0;me<D;me++)for(let _e=0;_e<R;_e++){const be=f+_e+re*me,ze=f+_e+re*(me+1),te=f+(_e+1)+re*(me+1),de=f+(_e+1)+re*me;l.push(be,ze,de),l.push(ze,te,de),z+=6}a.addGroup(d,z,se),d+=z,f+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ds(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Hr(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Nt(n){const e={};for(let t=0;t<n.length;t++){const i=Hr(n[t]);for(const r in i)e[r]=i[r]}return e}function fv(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Ud(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:et.workingColorSpace}const dv={clone:Hr,merge:Nt};var pv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,mv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class zt extends Is{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=pv,this.fragmentShader=mv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Hr(e.uniforms),this.uniformsGroups=fv(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Nd extends Lt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ut,this.projectionMatrix=new ut,this.projectionMatrixInverse=new ut,this.coordinateSystem=Qn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const fi=new B,gh=new Ee,_h=new Ee;class _t extends Nd{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ss*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(cs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ss*2*Math.atan(Math.tan(cs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){fi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(fi.x,fi.y).multiplyScalar(-e/fi.z),fi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(fi.x,fi.y).multiplyScalar(-e/fi.z)}getViewSize(e,t){return this.getViewBounds(e,gh,_h),t.subVectors(_h,gh)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(cs*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const gr=-90,_r=1;class gv extends Lt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new _t(gr,_r,e,t);r.layers=this.layers,this.add(r);const s=new _t(gr,_r,e,t);s.layers=this.layers,this.add(s);const o=new _t(gr,_r,e,t);o.layers=this.layers,this.add(o);const a=new _t(gr,_r,e,t);a.layers=this.layers,this.add(a);const l=new _t(gr,_r,e,t);l.layers=this.layers,this.add(l);const c=new _t(gr,_r,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===Qn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Lo)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,c),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(h,f,d),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class Fd extends Vt{constructor(e,t,i,r,s,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Fr,super(e,t,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class _v extends qi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Fd(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:fn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Ds(5,5,5),s=new zt({name:"CubemapFromEquirect",uniforms:Hr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:kt,blending:vi});s.uniforms.tEquirect.value=t;const o=new ae(r,s),a=t.minFilter;return t.minFilter===Gi&&(t.minFilter=fn),new gv(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}const Oa=new B,vv=new B,xv=new qe;class Fi{constructor(e=new B(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Oa.subVectors(i,t).cross(vv.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Oa),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||xv.getNormalMatrix(e),r=this.coplanarPoint(Oa).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ii=new Fc,so=new B;class Oc{constructor(e=new Fi,t=new Fi,i=new Fi,r=new Fi,s=new Fi,o=new Fi){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Qn){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],h=r[6],f=r[7],d=r[8],_=r[9],x=r[10],m=r[11],p=r[12],w=r[13],M=r[14],S=r[15];if(i[0].setComponents(l-s,f-c,m-d,S-p).normalize(),i[1].setComponents(l+s,f+c,m+d,S+p).normalize(),i[2].setComponents(l+o,f+u,m+_,S+w).normalize(),i[3].setComponents(l-o,f-u,m-_,S-w).normalize(),i[4].setComponents(l-a,f-h,m-x,S-M).normalize(),t===Qn)i[5].setComponents(l+a,f+h,m+x,S+M).normalize();else if(t===Lo)i[5].setComponents(a,h,x,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ii.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ii.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ii)}intersectsSprite(e){return Ii.center.set(0,0,0),Ii.radius=.7071067811865476,Ii.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ii)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(so.x=r.normal.x>0?e.max.x:e.min.x,so.y=r.normal.y>0?e.max.y:e.min.y,so.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(so)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Od(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function yv(n){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,h=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,u),a.onUploadCallback();let d;if(c instanceof Float32Array)d=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=n.SHORT;else if(c instanceof Uint32Array)d=n.UNSIGNED_INT;else if(c instanceof Int32Array)d=n.INT;else if(c instanceof Int8Array)d=n.BYTE;else if(c instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,l,c){const u=l.array,h=l.updateRanges;if(n.bindBuffer(c,a),h.length===0)n.bufferSubData(c,0,u);else{h.sort((d,_)=>d.start-_.start);let f=0;for(let d=1;d<h.length;d++){const _=h[f],x=h[d];x.start<=_.start+_.count+1?_.count=Math.max(_.count,x.start+x.count-_.start):(++f,h[f]=x)}h.length=f+1;for(let d=0,_=h.length;d<_;d++){const x=h[d];n.bufferSubData(c,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}class Yo extends Un{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,h=e/a,f=t/l,d=[],_=[],x=[],m=[];for(let p=0;p<u;p++){const w=p*f-o;for(let M=0;M<c;M++){const S=M*h-s;_.push(S,-w,0),x.push(0,0,1),m.push(M/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let w=0;w<a;w++){const M=w+c*p,S=w+c*(p+1),I=w+1+c*(p+1),C=w+1+c*p;d.push(M,S,C),d.push(S,I,C)}this.setIndex(d),this.setAttribute("position",new Bt(_,3)),this.setAttribute("normal",new Bt(x,3)),this.setAttribute("uv",new Bt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Yo(e.width,e.height,e.widthSegments,e.heightSegments)}}var Mv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Sv=`#ifdef USE_ALPHAHASH
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
#endif`,Ev=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,bv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,wv=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Tv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Av=`#ifdef USE_AOMAP
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
#endif`,Rv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Cv=`#ifdef USE_BATCHING
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
#endif`,Pv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Lv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Iv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Dv=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Uv=`#ifdef USE_IRIDESCENCE
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
#endif`,Nv=`#ifdef USE_BUMPMAP
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
#endif`,Fv=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Ov=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Bv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,zv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Hv=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Gv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,kv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Vv=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Wv=`#define PI 3.141592653589793
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
} // validated`,Xv=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,qv=`vec3 transformedNormal = objectNormal;
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
#endif`,Yv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,$v=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Kv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,jv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Zv="gl_FragColor = linearToOutputTexel( gl_FragColor );",Jv=`
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
}`,Qv=`#ifdef USE_ENVMAP
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
#endif`,ex=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,tx=`#ifdef USE_ENVMAP
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
#endif`,nx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ix=`#ifdef USE_ENVMAP
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
#endif`,rx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,sx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ox=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ax=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,lx=`#ifdef USE_GRADIENTMAP
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
}`,cx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ux=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,hx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,fx=`uniform bool receiveShadow;
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
#endif`,dx=`#ifdef USE_ENVMAP
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
#endif`,px=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,mx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,gx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,_x=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,vx=`PhysicalMaterial material;
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
#endif`,xx=`struct PhysicalMaterial {
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
}`,yx=`
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
#endif`,Mx=`#if defined( RE_IndirectDiffuse )
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
#endif`,Sx=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ex=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,bx=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,wx=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Tx=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ax=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Rx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Cx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Px=`#if defined( USE_POINTS_UV )
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
#endif`,Lx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ix=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Dx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ux=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Nx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Fx=`#ifdef USE_MORPHTARGETS
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
#endif`,Ox=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Bx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,zx=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Hx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Gx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,kx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Vx=`#ifdef USE_NORMALMAP
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
#endif`,Wx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Xx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,qx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Yx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,$x=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Kx=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,jx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Zx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Jx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Qx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ey=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ty=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ny=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,iy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ry=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,sy=`float getShadowMask() {
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
}`,oy=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ay=`#ifdef USE_SKINNING
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
#endif`,ly=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,cy=`#ifdef USE_SKINNING
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
#endif`,uy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,hy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,fy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,dy=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,py=`#ifdef USE_TRANSMISSION
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
#endif`,my=`#ifdef USE_TRANSMISSION
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
#endif`,gy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,_y=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,vy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,xy=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const yy=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,My=`uniform sampler2D t2D;
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
}`,Sy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ey=`#ifdef ENVMAP_TYPE_CUBE
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
}`,by=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,wy=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ty=`#include <common>
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
}`,Ay=`#if DEPTH_PACKING == 3200
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
}`,Ry=`#define DISTANCE
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
}`,Cy=`#define DISTANCE
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
}`,Py=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ly=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Iy=`uniform float scale;
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
}`,Dy=`uniform vec3 diffuse;
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
}`,Uy=`#include <common>
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
}`,Ny=`uniform vec3 diffuse;
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
}`,Fy=`#define LAMBERT
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
}`,Oy=`#define LAMBERT
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
}`,By=`#define MATCAP
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
}`,zy=`#define MATCAP
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
}`,Hy=`#define NORMAL
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
}`,Gy=`#define NORMAL
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
}`,ky=`#define PHONG
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
}`,Vy=`#define PHONG
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
}`,Wy=`#define STANDARD
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
}`,Xy=`#define STANDARD
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
}`,qy=`#define TOON
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
}`,Yy=`#define TOON
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
}`,$y=`uniform float size;
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
}`,Ky=`uniform vec3 diffuse;
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
}`,jy=`#include <common>
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
}`,Zy=`uniform vec3 color;
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
}`,Jy=`uniform float rotation;
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
}`,Qy=`uniform vec3 diffuse;
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
}`,Xe={alphahash_fragment:Mv,alphahash_pars_fragment:Sv,alphamap_fragment:Ev,alphamap_pars_fragment:bv,alphatest_fragment:wv,alphatest_pars_fragment:Tv,aomap_fragment:Av,aomap_pars_fragment:Rv,batching_pars_vertex:Cv,batching_vertex:Pv,begin_vertex:Lv,beginnormal_vertex:Iv,bsdfs:Dv,iridescence_fragment:Uv,bumpmap_pars_fragment:Nv,clipping_planes_fragment:Fv,clipping_planes_pars_fragment:Ov,clipping_planes_pars_vertex:Bv,clipping_planes_vertex:zv,color_fragment:Hv,color_pars_fragment:Gv,color_pars_vertex:kv,color_vertex:Vv,common:Wv,cube_uv_reflection_fragment:Xv,defaultnormal_vertex:qv,displacementmap_pars_vertex:Yv,displacementmap_vertex:$v,emissivemap_fragment:Kv,emissivemap_pars_fragment:jv,colorspace_fragment:Zv,colorspace_pars_fragment:Jv,envmap_fragment:Qv,envmap_common_pars_fragment:ex,envmap_pars_fragment:tx,envmap_pars_vertex:nx,envmap_physical_pars_fragment:dx,envmap_vertex:ix,fog_vertex:rx,fog_pars_vertex:sx,fog_fragment:ox,fog_pars_fragment:ax,gradientmap_pars_fragment:lx,lightmap_pars_fragment:cx,lights_lambert_fragment:ux,lights_lambert_pars_fragment:hx,lights_pars_begin:fx,lights_toon_fragment:px,lights_toon_pars_fragment:mx,lights_phong_fragment:gx,lights_phong_pars_fragment:_x,lights_physical_fragment:vx,lights_physical_pars_fragment:xx,lights_fragment_begin:yx,lights_fragment_maps:Mx,lights_fragment_end:Sx,logdepthbuf_fragment:Ex,logdepthbuf_pars_fragment:bx,logdepthbuf_pars_vertex:wx,logdepthbuf_vertex:Tx,map_fragment:Ax,map_pars_fragment:Rx,map_particle_fragment:Cx,map_particle_pars_fragment:Px,metalnessmap_fragment:Lx,metalnessmap_pars_fragment:Ix,morphinstance_vertex:Dx,morphcolor_vertex:Ux,morphnormal_vertex:Nx,morphtarget_pars_vertex:Fx,morphtarget_vertex:Ox,normal_fragment_begin:Bx,normal_fragment_maps:zx,normal_pars_fragment:Hx,normal_pars_vertex:Gx,normal_vertex:kx,normalmap_pars_fragment:Vx,clearcoat_normal_fragment_begin:Wx,clearcoat_normal_fragment_maps:Xx,clearcoat_pars_fragment:qx,iridescence_pars_fragment:Yx,opaque_fragment:$x,packing:Kx,premultiplied_alpha_fragment:jx,project_vertex:Zx,dithering_fragment:Jx,dithering_pars_fragment:Qx,roughnessmap_fragment:ey,roughnessmap_pars_fragment:ty,shadowmap_pars_fragment:ny,shadowmap_pars_vertex:iy,shadowmap_vertex:ry,shadowmask_pars_fragment:sy,skinbase_vertex:oy,skinning_pars_vertex:ay,skinning_vertex:ly,skinnormal_vertex:cy,specularmap_fragment:uy,specularmap_pars_fragment:hy,tonemapping_fragment:fy,tonemapping_pars_fragment:dy,transmission_fragment:py,transmission_pars_fragment:my,uv_pars_fragment:gy,uv_pars_vertex:_y,uv_vertex:vy,worldpos_vertex:xy,background_vert:yy,background_frag:My,backgroundCube_vert:Sy,backgroundCube_frag:Ey,cube_vert:by,cube_frag:wy,depth_vert:Ty,depth_frag:Ay,distanceRGBA_vert:Ry,distanceRGBA_frag:Cy,equirect_vert:Py,equirect_frag:Ly,linedashed_vert:Iy,linedashed_frag:Dy,meshbasic_vert:Uy,meshbasic_frag:Ny,meshlambert_vert:Fy,meshlambert_frag:Oy,meshmatcap_vert:By,meshmatcap_frag:zy,meshnormal_vert:Hy,meshnormal_frag:Gy,meshphong_vert:ky,meshphong_frag:Vy,meshphysical_vert:Wy,meshphysical_frag:Xy,meshtoon_vert:qy,meshtoon_frag:Yy,points_vert:$y,points_frag:Ky,shadow_vert:jy,shadow_frag:Zy,sprite_vert:Jy,sprite_frag:Qy},Se={common:{diffuse:{value:new Ve(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new qe}},envmap:{envMap:{value:null},envMapRotation:{value:new qe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new qe},normalScale:{value:new Ee(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ve(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ve(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0},uvTransform:{value:new qe}},sprite:{diffuse:{value:new Ve(16777215)},opacity:{value:1},center:{value:new Ee(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}}},Tn={basic:{uniforms:Nt([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.fog]),vertexShader:Xe.meshbasic_vert,fragmentShader:Xe.meshbasic_frag},lambert:{uniforms:Nt([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new Ve(0)}}]),vertexShader:Xe.meshlambert_vert,fragmentShader:Xe.meshlambert_frag},phong:{uniforms:Nt([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new Ve(0)},specular:{value:new Ve(1118481)},shininess:{value:30}}]),vertexShader:Xe.meshphong_vert,fragmentShader:Xe.meshphong_frag},standard:{uniforms:Nt([Se.common,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.roughnessmap,Se.metalnessmap,Se.fog,Se.lights,{emissive:{value:new Ve(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag},toon:{uniforms:Nt([Se.common,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.gradientmap,Se.fog,Se.lights,{emissive:{value:new Ve(0)}}]),vertexShader:Xe.meshtoon_vert,fragmentShader:Xe.meshtoon_frag},matcap:{uniforms:Nt([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,{matcap:{value:null}}]),vertexShader:Xe.meshmatcap_vert,fragmentShader:Xe.meshmatcap_frag},points:{uniforms:Nt([Se.points,Se.fog]),vertexShader:Xe.points_vert,fragmentShader:Xe.points_frag},dashed:{uniforms:Nt([Se.common,Se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xe.linedashed_vert,fragmentShader:Xe.linedashed_frag},depth:{uniforms:Nt([Se.common,Se.displacementmap]),vertexShader:Xe.depth_vert,fragmentShader:Xe.depth_frag},normal:{uniforms:Nt([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,{opacity:{value:1}}]),vertexShader:Xe.meshnormal_vert,fragmentShader:Xe.meshnormal_frag},sprite:{uniforms:Nt([Se.sprite,Se.fog]),vertexShader:Xe.sprite_vert,fragmentShader:Xe.sprite_frag},background:{uniforms:{uvTransform:{value:new qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xe.background_vert,fragmentShader:Xe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new qe}},vertexShader:Xe.backgroundCube_vert,fragmentShader:Xe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xe.cube_vert,fragmentShader:Xe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xe.equirect_vert,fragmentShader:Xe.equirect_frag},distanceRGBA:{uniforms:Nt([Se.common,Se.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xe.distanceRGBA_vert,fragmentShader:Xe.distanceRGBA_frag},shadow:{uniforms:Nt([Se.lights,Se.fog,{color:{value:new Ve(0)},opacity:{value:1}}]),vertexShader:Xe.shadow_vert,fragmentShader:Xe.shadow_frag}};Tn.physical={uniforms:Nt([Tn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new qe},clearcoatNormalScale:{value:new Ee(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new qe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new qe},sheen:{value:0},sheenColor:{value:new Ve(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new qe},transmissionSamplerSize:{value:new Ee},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new qe},attenuationDistance:{value:0},attenuationColor:{value:new Ve(0)},specularColor:{value:new Ve(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new qe},anisotropyVector:{value:new Ee},anisotropyMap:{value:null},anisotropyMapTransform:{value:new qe}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag};const oo={r:0,b:0,g:0},Di=new Pn,eM=new ut;function tM(n,e,t,i,r,s,o){const a=new Ve(0);let l=s===!0?0:1,c,u,h=null,f=0,d=null;function _(w){let M=w.isScene===!0?w.background:null;return M&&M.isTexture&&(M=(w.backgroundBlurriness>0?t:e).get(M)),M}function x(w){let M=!1;const S=_(w);S===null?p(a,l):S&&S.isColor&&(p(S,1),M=!0);const I=n.xr.getEnvironmentBlendMode();I==="additive"?i.buffers.color.setClear(0,0,0,1,o):I==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||M)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(w,M){const S=_(M);S&&(S.isCubeTexture||S.mapping===Xo)?(u===void 0&&(u=new ae(new Ds(1,1,1),new zt({name:"BackgroundCubeMaterial",uniforms:Hr(Tn.backgroundCube.uniforms),vertexShader:Tn.backgroundCube.vertexShader,fragmentShader:Tn.backgroundCube.fragmentShader,side:kt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(I,C,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Di.copy(M.backgroundRotation),Di.x*=-1,Di.y*=-1,Di.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Di.y*=-1,Di.z*=-1),u.material.uniforms.envMap.value=S,u.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(eM.makeRotationFromEuler(Di)),u.material.toneMapped=et.getTransfer(S.colorSpace)!==ct,(h!==S||f!==S.version||d!==n.toneMapping)&&(u.material.needsUpdate=!0,h=S,f=S.version,d=n.toneMapping),u.layers.enableAll(),w.unshift(u,u.geometry,u.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new ae(new Yo(2,2),new zt({name:"BackgroundMaterial",uniforms:Hr(Tn.background.uniforms),vertexShader:Tn.background.vertexShader,fragmentShader:Tn.background.fragmentShader,side:Mi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=et.getTransfer(S.colorSpace)!==ct,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(h!==S||f!==S.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,h=S,f=S.version,d=n.toneMapping),c.layers.enableAll(),w.unshift(c,c.geometry,c.material,0,0,null))}function p(w,M){w.getRGB(oo,Ud(n)),i.buffers.color.setClear(oo.r,oo.g,oo.b,M,o)}return{getClearColor:function(){return a},setClearColor:function(w,M=1){a.set(w),l=M,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(w){l=w,p(a,l)},render:x,addToRenderList:m}}function nM(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=f(null);let s=r,o=!1;function a(y,b,q,V,Z){let re=!1;const G=h(V,q,b);s!==G&&(s=G,c(s.object)),re=d(y,V,q,Z),re&&_(y,V,q,Z),Z!==null&&e.update(Z,n.ELEMENT_ARRAY_BUFFER),(re||o)&&(o=!1,S(y,b,q,V),Z!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(Z).buffer))}function l(){return n.createVertexArray()}function c(y){return n.bindVertexArray(y)}function u(y){return n.deleteVertexArray(y)}function h(y,b,q){const V=q.wireframe===!0;let Z=i[y.id];Z===void 0&&(Z={},i[y.id]=Z);let re=Z[b.id];re===void 0&&(re={},Z[b.id]=re);let G=re[V];return G===void 0&&(G=f(l()),re[V]=G),G}function f(y){const b=[],q=[],V=[];for(let Z=0;Z<t;Z++)b[Z]=0,q[Z]=0,V[Z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:b,enabledAttributes:q,attributeDivisors:V,object:y,attributes:{},index:null}}function d(y,b,q,V){const Z=s.attributes,re=b.attributes;let G=0;const K=q.getAttributes();for(const z in K)if(K[z].location>=0){const me=Z[z];let _e=re[z];if(_e===void 0&&(z==="instanceMatrix"&&y.instanceMatrix&&(_e=y.instanceMatrix),z==="instanceColor"&&y.instanceColor&&(_e=y.instanceColor)),me===void 0||me.attribute!==_e||_e&&me.data!==_e.data)return!0;G++}return s.attributesNum!==G||s.index!==V}function _(y,b,q,V){const Z={},re=b.attributes;let G=0;const K=q.getAttributes();for(const z in K)if(K[z].location>=0){let me=re[z];me===void 0&&(z==="instanceMatrix"&&y.instanceMatrix&&(me=y.instanceMatrix),z==="instanceColor"&&y.instanceColor&&(me=y.instanceColor));const _e={};_e.attribute=me,me&&me.data&&(_e.data=me.data),Z[z]=_e,G++}s.attributes=Z,s.attributesNum=G,s.index=V}function x(){const y=s.newAttributes;for(let b=0,q=y.length;b<q;b++)y[b]=0}function m(y){p(y,0)}function p(y,b){const q=s.newAttributes,V=s.enabledAttributes,Z=s.attributeDivisors;q[y]=1,V[y]===0&&(n.enableVertexAttribArray(y),V[y]=1),Z[y]!==b&&(n.vertexAttribDivisor(y,b),Z[y]=b)}function w(){const y=s.newAttributes,b=s.enabledAttributes;for(let q=0,V=b.length;q<V;q++)b[q]!==y[q]&&(n.disableVertexAttribArray(q),b[q]=0)}function M(y,b,q,V,Z,re,G){G===!0?n.vertexAttribIPointer(y,b,q,Z,re):n.vertexAttribPointer(y,b,q,V,Z,re)}function S(y,b,q,V){x();const Z=V.attributes,re=q.getAttributes(),G=b.defaultAttributeValues;for(const K in re){const z=re[K];if(z.location>=0){let ge=Z[K];if(ge===void 0&&(K==="instanceMatrix"&&y.instanceMatrix&&(ge=y.instanceMatrix),K==="instanceColor"&&y.instanceColor&&(ge=y.instanceColor)),ge!==void 0){const me=ge.normalized,_e=ge.itemSize,be=e.get(ge);if(be===void 0)continue;const ze=be.buffer,te=be.type,de=be.bytesPerElement,pe=te===n.INT||te===n.UNSIGNED_INT||ge.gpuType===Rc;if(ge.isInterleavedBufferAttribute){const U=ge.data,ie=U.stride,$=ge.offset;if(U.isInstancedInterleavedBuffer){for(let le=0;le<z.locationSize;le++)p(z.location+le,U.meshPerAttribute);y.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=U.meshPerAttribute*U.count)}else for(let le=0;le<z.locationSize;le++)m(z.location+le);n.bindBuffer(n.ARRAY_BUFFER,ze);for(let le=0;le<z.locationSize;le++)M(z.location+le,_e/z.locationSize,te,me,ie*de,($+_e/z.locationSize*le)*de,pe)}else{if(ge.isInstancedBufferAttribute){for(let U=0;U<z.locationSize;U++)p(z.location+U,ge.meshPerAttribute);y.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=ge.meshPerAttribute*ge.count)}else for(let U=0;U<z.locationSize;U++)m(z.location+U);n.bindBuffer(n.ARRAY_BUFFER,ze);for(let U=0;U<z.locationSize;U++)M(z.location+U,_e/z.locationSize,te,me,_e*de,_e/z.locationSize*U*de,pe)}}else if(G!==void 0){const me=G[K];if(me!==void 0)switch(me.length){case 2:n.vertexAttrib2fv(z.location,me);break;case 3:n.vertexAttrib3fv(z.location,me);break;case 4:n.vertexAttrib4fv(z.location,me);break;default:n.vertexAttrib1fv(z.location,me)}}}}w()}function I(){D();for(const y in i){const b=i[y];for(const q in b){const V=b[q];for(const Z in V)u(V[Z].object),delete V[Z];delete b[q]}delete i[y]}}function C(y){if(i[y.id]===void 0)return;const b=i[y.id];for(const q in b){const V=b[q];for(const Z in V)u(V[Z].object),delete V[Z];delete b[q]}delete i[y.id]}function R(y){for(const b in i){const q=i[b];if(q[y.id]===void 0)continue;const V=q[y.id];for(const Z in V)u(V[Z].object),delete V[Z];delete q[y.id]}}function D(){se(),o=!0,s!==r&&(s=r,c(s.object))}function se(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:D,resetDefaultState:se,dispose:I,releaseStatesOfGeometry:C,releaseStatesOfProgram:R,initAttributes:x,enableAttribute:m,disableUnusedAttributes:w}}function iM(n,e,t){let i;function r(c){i=c}function s(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function o(c,u,h){h!==0&&(n.drawArraysInstanced(i,c,u,h),t.update(u,i,h))}function a(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,h);let d=0;for(let _=0;_<h;_++)d+=u[_];t.update(d,i,1)}function l(c,u,h,f){if(h===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let _=0;_<c.length;_++)o(c[_],u[_],f[_]);else{d.multiDrawArraysInstancedWEBGL(i,c,0,u,0,f,0,h);let _=0;for(let x=0;x<h;x++)_+=u[x];for(let x=0;x<f.length;x++)t.update(_,i,f[x])}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function rM(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(R){return!(R!==mn&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){const D=R===Cs&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==ni&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==Jn&&!D)}function l(R){if(R==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(f===!0){const R=e.get("EXT_clip_control");R.clipControlEXT(R.LOWER_LEFT_EXT,R.ZERO_TO_ONE_EXT)}const d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),w=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),M=n.getParameter(n.MAX_VARYING_VECTORS),S=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),I=_>0,C=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:_,maxTextureSize:x,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:w,maxVaryings:M,maxFragmentUniforms:S,vertexTextures:I,maxSamples:C}}function sM(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new Fi,a=new qe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const d=h.length!==0||f||i!==0||r;return r=f,i=h.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,d){const _=h.clippingPlanes,x=h.clipIntersection,m=h.clipShadows,p=n.get(h);if(!r||_===null||_.length===0||s&&!m)s?u(null):c();else{const w=s?0:i,M=w*4;let S=p.clippingState||null;l.value=S,S=u(_,f,M,d);for(let I=0;I!==M;++I)S[I]=t[I];p.clippingState=S,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=w}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,f,d,_){const x=h!==null?h.length:0;let m=null;if(x!==0){if(m=l.value,_!==!0||m===null){const p=d+x*4,w=f.matrixWorldInverse;a.getNormalMatrix(w),(m===null||m.length<p)&&(m=new Float32Array(p));for(let M=0,S=d;M!==x;++M,S+=4)o.copy(h[M]).applyMatrix4(w,a),o.normal.toArray(m,S),m[S+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function oM(n){let e=new WeakMap;function t(o,a){return a===Ml?o.mapping=Fr:a===Sl&&(o.mapping=Or),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Ml||a===Sl)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new _v(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class Bd extends Nd{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Er=4,vh=[.125,.215,.35,.446,.526,.582],zi=20,Ba=new Bd,xh=new Ve;let za=null,Ha=0,Ga=0,ka=!1;const Oi=(1+Math.sqrt(5))/2,vr=1/Oi,yh=[new B(-Oi,vr,0),new B(Oi,vr,0),new B(-vr,0,Oi),new B(vr,0,Oi),new B(0,Oi,-vr),new B(0,Oi,vr),new B(-1,1,-1),new B(1,1,-1),new B(-1,1,1),new B(1,1,1)];class Mh{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){za=this._renderer.getRenderTarget(),Ha=this._renderer.getActiveCubeFace(),Ga=this._renderer.getActiveMipmapLevel(),ka=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=bh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Eh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(za,Ha,Ga),this._renderer.xr.enabled=ka,e.scissorTest=!1,ao(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Fr||e.mapping===Or?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),za=this._renderer.getRenderTarget(),Ha=this._renderer.getActiveCubeFace(),Ga=this._renderer.getActiveMipmapLevel(),ka=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:fn,minFilter:fn,generateMipmaps:!1,type:Cs,format:mn,colorSpace:bi,depthBuffer:!1},r=Sh(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Sh(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=aM(s)),this._blurMaterial=lM(s,e,t)}return r}_compileMaterial(e){const t=new ae(this._lodPlanes[0],e);this._renderer.compile(t,Ba)}_sceneToCubeUV(e,t,i,r){const a=new _t(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(xh),u.toneMapping=xi,u.autoClear=!1;const d=new vn({name:"PMREM.Background",side:kt,depthWrite:!1,depthTest:!1}),_=new ae(new Ds,d);let x=!1;const m=e.background;m?m.isColor&&(d.color.copy(m),e.background=null,x=!0):(d.color.copy(xh),x=!0);for(let p=0;p<6;p++){const w=p%3;w===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):w===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));const M=this._cubeSize;ao(r,w*M,p>2?M:0,M,M),u.setRenderTarget(r),x&&u.render(_,a),u.render(e,a)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=f,u.autoClear=h,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Fr||e.mapping===Or;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=bh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Eh());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new ae(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;ao(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Ba)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=yh[(r-s-1)%yh.length];this._blur(e,s-1,s,o,a)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new ae(this._lodPlanes[r],c),f=c.uniforms,d=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*zi-1),x=s/_,m=isFinite(s)?1+Math.floor(u*x):zi;m>zi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${zi}`);const p=[];let w=0;for(let R=0;R<zi;++R){const D=R/x,se=Math.exp(-D*D/2);p.push(se),R===0?w+=se:R<m&&(w+=2*se)}for(let R=0;R<p.length;R++)p[R]=p[R]/w;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:M}=this;f.dTheta.value=_,f.mipInt.value=M-i;const S=this._sizeLods[r],I=3*S*(r>M-Er?r-M+Er:0),C=4*(this._cubeSize-S);ao(t,I,C,3*S,2*S),l.setRenderTarget(t),l.render(h,Ba)}}function aM(n){const e=[],t=[],i=[];let r=n;const s=n-Er+1+vh.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>n-Er?l=vh[o-n+Er-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,_=6,x=3,m=2,p=1,w=new Float32Array(x*_*d),M=new Float32Array(m*_*d),S=new Float32Array(p*_*d);for(let C=0;C<d;C++){const R=C%3*2/3-1,D=C>2?0:-1,se=[R,D,0,R+2/3,D,0,R+2/3,D+1,0,R,D,0,R+2/3,D+1,0,R,D+1,0];w.set(se,x*_*C),M.set(f,m*_*C);const y=[C,C,C,C,C,C];S.set(y,p*_*C)}const I=new Un;I.setAttribute("position",new Rn(w,x)),I.setAttribute("uv",new Rn(M,m)),I.setAttribute("faceIndex",new Rn(S,p)),e.push(I),r>Er&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Sh(n,e,t){const i=new qi(n,e,t);return i.texture.mapping=Xo,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ao(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function lM(n,e,t){const i=new Float32Array(zi),r=new B(0,1,0);return new zt({name:"SphericalGaussianBlur",defines:{n:zi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Bc(),fragmentShader:`

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
		`,blending:vi,depthTest:!1,depthWrite:!1})}function Eh(){return new zt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Bc(),fragmentShader:`

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
		`,blending:vi,depthTest:!1,depthWrite:!1})}function bh(){return new zt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Bc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:vi,depthTest:!1,depthWrite:!1})}function Bc(){return`

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
	`}function cM(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Ml||l===Sl,u=l===Fr||l===Or;if(c||u){let h=e.get(a);const f=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new Mh(n)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const d=a.image;return c&&d&&d.height>0||u&&d&&r(d)?(t===null&&(t=new Mh(n)),h=c?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",s),h.texture):null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function uM(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&Mo("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function hM(n,e,t,i){const r={},s=new WeakMap;function o(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const _ in f.attributes)e.remove(f.attributes[_]);for(const _ in f.morphAttributes){const x=f.morphAttributes[_];for(let m=0,p=x.length;m<p;m++)e.remove(x[m])}f.removeEventListener("dispose",o),delete r[f.id];const d=s.get(f);d&&(e.remove(d),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(h,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,t.memory.geometries++),f}function l(h){const f=h.attributes;for(const _ in f)e.update(f[_],n.ARRAY_BUFFER);const d=h.morphAttributes;for(const _ in d){const x=d[_];for(let m=0,p=x.length;m<p;m++)e.update(x[m],n.ARRAY_BUFFER)}}function c(h){const f=[],d=h.index,_=h.attributes.position;let x=0;if(d!==null){const w=d.array;x=d.version;for(let M=0,S=w.length;M<S;M+=3){const I=w[M+0],C=w[M+1],R=w[M+2];f.push(I,C,C,R,R,I)}}else if(_!==void 0){const w=_.array;x=_.version;for(let M=0,S=w.length/3-1;M<S;M+=3){const I=M+0,C=M+1,R=M+2;f.push(I,C,C,R,R,I)}}else return;const m=new(Ad(f)?Dd:Id)(f,1);m.version=x;const p=s.get(h);p&&e.remove(p),s.set(h,m)}function u(h){const f=s.get(h);if(f){const d=h.index;d!==null&&f.version<d.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function fM(n,e,t){let i;function r(f){i=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function l(f,d){n.drawElements(i,d,s,f*o),t.update(d,i,1)}function c(f,d,_){_!==0&&(n.drawElementsInstanced(i,d,s,f*o,_),t.update(d,i,_))}function u(f,d,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,s,f,0,_);let m=0;for(let p=0;p<_;p++)m+=d[p];t.update(m,i,1)}function h(f,d,_,x){if(_===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)c(f[p]/o,d[p],x[p]);else{m.multiDrawElementsInstancedWEBGL(i,d,0,s,f,0,x,0,_);let p=0;for(let w=0;w<_;w++)p+=d[w];for(let w=0;w<x.length;w++)t.update(p,i,x[w])}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function dM(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function pM(n,e,t){const i=new WeakMap,r=new rt;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let f=i.get(a);if(f===void 0||f.count!==h){let y=function(){D.dispose(),i.delete(a),a.removeEventListener("dispose",y)};var d=y;f!==void 0&&f.texture.dispose();const _=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],w=a.morphAttributes.normal||[],M=a.morphAttributes.color||[];let S=0;_===!0&&(S=1),x===!0&&(S=2),m===!0&&(S=3);let I=a.attributes.position.count*S,C=1;I>e.maxTextureSize&&(C=Math.ceil(I/e.maxTextureSize),I=e.maxTextureSize);const R=new Float32Array(I*C*4*h),D=new Cd(R,I,C,h);D.type=Jn,D.needsUpdate=!0;const se=S*4;for(let b=0;b<h;b++){const q=p[b],V=w[b],Z=M[b],re=I*C*4*b;for(let G=0;G<q.count;G++){const K=G*se;_===!0&&(r.fromBufferAttribute(q,G),R[re+K+0]=r.x,R[re+K+1]=r.y,R[re+K+2]=r.z,R[re+K+3]=0),x===!0&&(r.fromBufferAttribute(V,G),R[re+K+4]=r.x,R[re+K+5]=r.y,R[re+K+6]=r.z,R[re+K+7]=0),m===!0&&(r.fromBufferAttribute(Z,G),R[re+K+8]=r.x,R[re+K+9]=r.y,R[re+K+10]=r.z,R[re+K+11]=Z.itemSize===4?r.w:1)}}f={count:h,texture:D,size:new Ee(I,C)},i.set(a,f),a.addEventListener("dispose",y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let _=0;for(let m=0;m<c.length;m++)_+=c[m];const x=a.morphTargetsRelative?1:1-_;l.getUniforms().setValue(n,"morphTargetBaseInfluence",x),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:s}}function mM(n,e,t,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,h=e.get(l,u);if(r.get(h)!==c&&(e.update(h),r.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==c&&(f.update(),r.set(f,c))}return h}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}class zd extends Vt{constructor(e,t,i,r,s,o,a,l,c,u=Cr){if(u!==Cr&&u!==zr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Cr&&(i=Xi),i===void 0&&u===zr&&(i=Br),super(null,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:en,this.minFilter=l!==void 0?l:en,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Hd=new Vt,wh=new zd(1,1),Gd=new Cd,kd=new ev,Vd=new Fd,Th=[],Ah=[],Rh=new Float32Array(16),Ch=new Float32Array(9),Ph=new Float32Array(4);function Vr(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Th[r];if(s===void 0&&(s=new Float32Array(r),Th[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function vt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function xt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function $o(n,e){let t=Ah[e];t===void 0&&(t=new Int32Array(e),Ah[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function gM(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function _M(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vt(t,e))return;n.uniform2fv(this.addr,e),xt(t,e)}}function vM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(vt(t,e))return;n.uniform3fv(this.addr,e),xt(t,e)}}function xM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vt(t,e))return;n.uniform4fv(this.addr,e),xt(t,e)}}function yM(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(vt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),xt(t,e)}else{if(vt(t,i))return;Ph.set(i),n.uniformMatrix2fv(this.addr,!1,Ph),xt(t,i)}}function MM(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(vt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),xt(t,e)}else{if(vt(t,i))return;Ch.set(i),n.uniformMatrix3fv(this.addr,!1,Ch),xt(t,i)}}function SM(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(vt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),xt(t,e)}else{if(vt(t,i))return;Rh.set(i),n.uniformMatrix4fv(this.addr,!1,Rh),xt(t,i)}}function EM(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function bM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vt(t,e))return;n.uniform2iv(this.addr,e),xt(t,e)}}function wM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(vt(t,e))return;n.uniform3iv(this.addr,e),xt(t,e)}}function TM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vt(t,e))return;n.uniform4iv(this.addr,e),xt(t,e)}}function AM(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function RM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vt(t,e))return;n.uniform2uiv(this.addr,e),xt(t,e)}}function CM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(vt(t,e))return;n.uniform3uiv(this.addr,e),xt(t,e)}}function PM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vt(t,e))return;n.uniform4uiv(this.addr,e),xt(t,e)}}function LM(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(wh.compareFunction=Td,s=wh):s=Hd,t.setTexture2D(e||s,r)}function IM(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||kd,r)}function DM(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Vd,r)}function UM(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Gd,r)}function NM(n){switch(n){case 5126:return gM;case 35664:return _M;case 35665:return vM;case 35666:return xM;case 35674:return yM;case 35675:return MM;case 35676:return SM;case 5124:case 35670:return EM;case 35667:case 35671:return bM;case 35668:case 35672:return wM;case 35669:case 35673:return TM;case 5125:return AM;case 36294:return RM;case 36295:return CM;case 36296:return PM;case 35678:case 36198:case 36298:case 36306:case 35682:return LM;case 35679:case 36299:case 36307:return IM;case 35680:case 36300:case 36308:case 36293:return DM;case 36289:case 36303:case 36311:case 36292:return UM}}function FM(n,e){n.uniform1fv(this.addr,e)}function OM(n,e){const t=Vr(e,this.size,2);n.uniform2fv(this.addr,t)}function BM(n,e){const t=Vr(e,this.size,3);n.uniform3fv(this.addr,t)}function zM(n,e){const t=Vr(e,this.size,4);n.uniform4fv(this.addr,t)}function HM(n,e){const t=Vr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function GM(n,e){const t=Vr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function kM(n,e){const t=Vr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function VM(n,e){n.uniform1iv(this.addr,e)}function WM(n,e){n.uniform2iv(this.addr,e)}function XM(n,e){n.uniform3iv(this.addr,e)}function qM(n,e){n.uniform4iv(this.addr,e)}function YM(n,e){n.uniform1uiv(this.addr,e)}function $M(n,e){n.uniform2uiv(this.addr,e)}function KM(n,e){n.uniform3uiv(this.addr,e)}function jM(n,e){n.uniform4uiv(this.addr,e)}function ZM(n,e,t){const i=this.cache,r=e.length,s=$o(t,r);vt(i,s)||(n.uniform1iv(this.addr,s),xt(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||Hd,s[o])}function JM(n,e,t){const i=this.cache,r=e.length,s=$o(t,r);vt(i,s)||(n.uniform1iv(this.addr,s),xt(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||kd,s[o])}function QM(n,e,t){const i=this.cache,r=e.length,s=$o(t,r);vt(i,s)||(n.uniform1iv(this.addr,s),xt(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||Vd,s[o])}function eS(n,e,t){const i=this.cache,r=e.length,s=$o(t,r);vt(i,s)||(n.uniform1iv(this.addr,s),xt(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||Gd,s[o])}function tS(n){switch(n){case 5126:return FM;case 35664:return OM;case 35665:return BM;case 35666:return zM;case 35674:return HM;case 35675:return GM;case 35676:return kM;case 5124:case 35670:return VM;case 35667:case 35671:return WM;case 35668:case 35672:return XM;case 35669:case 35673:return qM;case 5125:return YM;case 36294:return $M;case 36295:return KM;case 36296:return jM;case 35678:case 36198:case 36298:case 36306:case 35682:return ZM;case 35679:case 36299:case 36307:return JM;case 35680:case 36300:case 36308:case 36293:return QM;case 36289:case 36303:case 36311:case 36292:return eS}}class nS{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=NM(t.type)}}class iS{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=tS(t.type)}}class rS{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const Va=/(\w+)(\])?(\[|\.)?/g;function Lh(n,e){n.seq.push(e),n.map[e.id]=e}function sS(n,e,t){const i=n.name,r=i.length;for(Va.lastIndex=0;;){const s=Va.exec(i),o=Va.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Lh(t,c===void 0?new nS(a,n,e):new iS(a,n,e));break}else{let h=t.map[a];h===void 0&&(h=new rS(a),Lh(t,h)),t=h}}}class So{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);sS(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function Ih(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const oS=37297;let aS=0;function lS(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function cS(n){const e=et.getPrimaries(et.workingColorSpace),t=et.getPrimaries(n);let i;switch(e===t?i="":e===Po&&t===Co?i="LinearDisplayP3ToLinearSRGB":e===Co&&t===Po&&(i="LinearSRGBToLinearDisplayP3"),n){case bi:case qo:return[i,"LinearTransferOETF"];case bn:case Uc:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function Dh(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+lS(n.getShaderSource(e),o)}else return r}function uS(n,e){const t=cS(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function hS(n,e){let t;switch(e){case f_:t="Linear";break;case d_:t="Reinhard";break;case p_:t="Cineon";break;case Rs:t="ACESFilmic";break;case g_:t="AgX";break;case __:t="Neutral";break;case m_:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const lo=new B;function fS(){et.getLuminanceCoefficients(lo);const n=lo.x.toFixed(4),e=lo.y.toFixed(4),t=lo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function dS(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(es).join(`
`)}function pS(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function mS(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function es(n){return n!==""}function Uh(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Nh(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const gS=/^[ \t]*#include +<([\w\d./]+)>/gm;function Zl(n){return n.replace(gS,vS)}const _S=new Map;function vS(n,e){let t=Xe[e];if(t===void 0){const i=_S.get(e);if(i!==void 0)t=Xe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Zl(t)}const xS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Fh(n){return n.replace(xS,yS)}function yS(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Oh(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function MS(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===fd?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===X0?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Yn&&(e="SHADOWMAP_TYPE_VSM"),e}function SS(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Fr:case Or:e="ENVMAP_TYPE_CUBE";break;case Xo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function ES(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Or:e="ENVMAP_MODE_REFRACTION";break}return e}function bS(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case dd:e="ENVMAP_BLENDING_MULTIPLY";break;case u_:e="ENVMAP_BLENDING_MIX";break;case h_:e="ENVMAP_BLENDING_ADD";break}return e}function wS(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function TS(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=MS(t),c=SS(t),u=ES(t),h=bS(t),f=wS(t),d=dS(t),_=pS(s),x=r.createProgram();let m,p,w=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(es).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(es).join(`
`),p.length>0&&(p+=`
`)):(m=[Oh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(es).join(`
`),p=[Oh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==xi?"#define TONE_MAPPING":"",t.toneMapping!==xi?Xe.tonemapping_pars_fragment:"",t.toneMapping!==xi?hS("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Xe.colorspace_pars_fragment,uS("linearToOutputTexel",t.outputColorSpace),fS(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(es).join(`
`)),o=Zl(o),o=Uh(o,t),o=Nh(o,t),a=Zl(a),a=Uh(a,t),a=Nh(a,t),o=Fh(o),a=Fh(a),t.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Qu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Qu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const M=w+m+o,S=w+p+a,I=Ih(r,r.VERTEX_SHADER,M),C=Ih(r,r.FRAGMENT_SHADER,S);r.attachShader(x,I),r.attachShader(x,C),t.index0AttributeName!==void 0?r.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function R(b){if(n.debug.checkShaderErrors){const q=r.getProgramInfoLog(x).trim(),V=r.getShaderInfoLog(I).trim(),Z=r.getShaderInfoLog(C).trim();let re=!0,G=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(re=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,x,I,C);else{const K=Dh(r,I,"vertex"),z=Dh(r,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+b.name+`
Material Type: `+b.type+`

Program Info Log: `+q+`
`+K+`
`+z)}else q!==""?console.warn("THREE.WebGLProgram: Program Info Log:",q):(V===""||Z==="")&&(G=!1);G&&(b.diagnostics={runnable:re,programLog:q,vertexShader:{log:V,prefix:m},fragmentShader:{log:Z,prefix:p}})}r.deleteShader(I),r.deleteShader(C),D=new So(r,x),se=mS(r,x)}let D;this.getUniforms=function(){return D===void 0&&R(this),D};let se;this.getAttributes=function(){return se===void 0&&R(this),se};let y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=r.getProgramParameter(x,oS)),y},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=aS++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=I,this.fragmentShader=C,this}let AS=0;class RS{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new CS(e),t.set(e,i)),i}}class CS{constructor(e){this.id=AS++,this.code=e,this.usedTimes=0}}function PS(n,e,t,i,r,s,o){const a=new Pd,l=new RS,c=new Set,u=[],h=r.logarithmicDepthBuffer,f=r.reverseDepthBuffer,d=r.vertexTextures;let _=r.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(y){return c.add(y),y===0?"uv":`uv${y}`}function p(y,b,q,V,Z){const re=V.fog,G=Z.geometry,K=y.isMeshStandardMaterial?V.environment:null,z=(y.isMeshStandardMaterial?t:e).get(y.envMap||K),ge=z&&z.mapping===Xo?z.image.height:null,me=x[y.type];y.precision!==null&&(_=r.getMaxPrecision(y.precision),_!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",_,"instead."));const _e=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,be=_e!==void 0?_e.length:0;let ze=0;G.morphAttributes.position!==void 0&&(ze=1),G.morphAttributes.normal!==void 0&&(ze=2),G.morphAttributes.color!==void 0&&(ze=3);let te,de,pe,U;if(me){const Gt=Tn[me];te=Gt.vertexShader,de=Gt.fragmentShader}else te=y.vertexShader,de=y.fragmentShader,l.update(y),pe=l.getVertexShaderID(y),U=l.getFragmentShaderID(y);const ie=n.getRenderTarget(),$=Z.isInstancedMesh===!0,le=Z.isBatchedMesh===!0,Me=!!y.map,J=!!y.matcap,g=!!z,A=!!y.aoMap,L=!!y.lightMap,F=!!y.bumpMap,N=!!y.normalMap,j=!!y.displacementMap,ne=!!y.emissiveMap,E=!!y.metalnessMap,v=!!y.roughnessMap,P=y.anisotropy>0,Y=y.clearcoat>0,k=y.dispersion>0,X=y.iridescence>0,ue=y.sheen>0,ce=y.transmission>0,ve=P&&!!y.anisotropyMap,Pe=Y&&!!y.clearcoatMap,fe=Y&&!!y.clearcoatNormalMap,ye=Y&&!!y.clearcoatRoughnessMap,Ue=X&&!!y.iridescenceMap,Ie=X&&!!y.iridescenceThicknessMap,we=ue&&!!y.sheenColorMap,Ye=ue&&!!y.sheenRoughnessMap,Ne=!!y.specularMap,$e=!!y.specularColorMap,O=!!y.specularIntensityMap,Re=ce&&!!y.transmissionMap,oe=ce&&!!y.thicknessMap,he=!!y.gradientMap,Te=!!y.alphaMap,Ce=y.alphaTest>0,Ke=!!y.alphaHash,mt=!!y.extensions;let Ht=xi;y.toneMapped&&(ie===null||ie.isXRRenderTarget===!0)&&(Ht=n.toneMapping);const je={shaderID:me,shaderType:y.type,shaderName:y.name,vertexShader:te,fragmentShader:de,defines:y.defines,customVertexShaderID:pe,customFragmentShaderID:U,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:_,batching:le,batchingColor:le&&Z._colorsTexture!==null,instancing:$,instancingColor:$&&Z.instanceColor!==null,instancingMorph:$&&Z.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:ie===null?n.outputColorSpace:ie.isXRRenderTarget===!0?ie.texture.colorSpace:bi,alphaToCoverage:!!y.alphaToCoverage,map:Me,matcap:J,envMap:g,envMapMode:g&&z.mapping,envMapCubeUVHeight:ge,aoMap:A,lightMap:L,bumpMap:F,normalMap:N,displacementMap:d&&j,emissiveMap:ne,normalMapObjectSpace:N&&y.normalMapType===M_,normalMapTangentSpace:N&&y.normalMapType===wd,metalnessMap:E,roughnessMap:v,anisotropy:P,anisotropyMap:ve,clearcoat:Y,clearcoatMap:Pe,clearcoatNormalMap:fe,clearcoatRoughnessMap:ye,dispersion:k,iridescence:X,iridescenceMap:Ue,iridescenceThicknessMap:Ie,sheen:ue,sheenColorMap:we,sheenRoughnessMap:Ye,specularMap:Ne,specularColorMap:$e,specularIntensityMap:O,transmission:ce,transmissionMap:Re,thicknessMap:oe,gradientMap:he,opaque:y.transparent===!1&&y.blending===Rr&&y.alphaToCoverage===!1,alphaMap:Te,alphaTest:Ce,alphaHash:Ke,combine:y.combine,mapUv:Me&&m(y.map.channel),aoMapUv:A&&m(y.aoMap.channel),lightMapUv:L&&m(y.lightMap.channel),bumpMapUv:F&&m(y.bumpMap.channel),normalMapUv:N&&m(y.normalMap.channel),displacementMapUv:j&&m(y.displacementMap.channel),emissiveMapUv:ne&&m(y.emissiveMap.channel),metalnessMapUv:E&&m(y.metalnessMap.channel),roughnessMapUv:v&&m(y.roughnessMap.channel),anisotropyMapUv:ve&&m(y.anisotropyMap.channel),clearcoatMapUv:Pe&&m(y.clearcoatMap.channel),clearcoatNormalMapUv:fe&&m(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ye&&m(y.clearcoatRoughnessMap.channel),iridescenceMapUv:Ue&&m(y.iridescenceMap.channel),iridescenceThicknessMapUv:Ie&&m(y.iridescenceThicknessMap.channel),sheenColorMapUv:we&&m(y.sheenColorMap.channel),sheenRoughnessMapUv:Ye&&m(y.sheenRoughnessMap.channel),specularMapUv:Ne&&m(y.specularMap.channel),specularColorMapUv:$e&&m(y.specularColorMap.channel),specularIntensityMapUv:O&&m(y.specularIntensityMap.channel),transmissionMapUv:Re&&m(y.transmissionMap.channel),thicknessMapUv:oe&&m(y.thicknessMap.channel),alphaMapUv:Te&&m(y.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(N||P),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:Z.isPoints===!0&&!!G.attributes.uv&&(Me||Te),fog:!!re,useFog:y.fog===!0,fogExp2:!!re&&re.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:f,skinning:Z.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:be,morphTextureStride:ze,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:n.shadowMap.enabled&&q.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ht,decodeVideoTexture:Me&&y.map.isVideoTexture===!0&&et.getTransfer(y.map.colorSpace)===ct,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Zn,flipSided:y.side===kt,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:mt&&y.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(mt&&y.extensions.multiDraw===!0||le)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return je.vertexUv1s=c.has(1),je.vertexUv2s=c.has(2),je.vertexUv3s=c.has(3),c.clear(),je}function w(y){const b=[];if(y.shaderID?b.push(y.shaderID):(b.push(y.customVertexShaderID),b.push(y.customFragmentShaderID)),y.defines!==void 0)for(const q in y.defines)b.push(q),b.push(y.defines[q]);return y.isRawShaderMaterial===!1&&(M(b,y),S(b,y),b.push(n.outputColorSpace)),b.push(y.customProgramCacheKey),b.join()}function M(y,b){y.push(b.precision),y.push(b.outputColorSpace),y.push(b.envMapMode),y.push(b.envMapCubeUVHeight),y.push(b.mapUv),y.push(b.alphaMapUv),y.push(b.lightMapUv),y.push(b.aoMapUv),y.push(b.bumpMapUv),y.push(b.normalMapUv),y.push(b.displacementMapUv),y.push(b.emissiveMapUv),y.push(b.metalnessMapUv),y.push(b.roughnessMapUv),y.push(b.anisotropyMapUv),y.push(b.clearcoatMapUv),y.push(b.clearcoatNormalMapUv),y.push(b.clearcoatRoughnessMapUv),y.push(b.iridescenceMapUv),y.push(b.iridescenceThicknessMapUv),y.push(b.sheenColorMapUv),y.push(b.sheenRoughnessMapUv),y.push(b.specularMapUv),y.push(b.specularColorMapUv),y.push(b.specularIntensityMapUv),y.push(b.transmissionMapUv),y.push(b.thicknessMapUv),y.push(b.combine),y.push(b.fogExp2),y.push(b.sizeAttenuation),y.push(b.morphTargetsCount),y.push(b.morphAttributeCount),y.push(b.numDirLights),y.push(b.numPointLights),y.push(b.numSpotLights),y.push(b.numSpotLightMaps),y.push(b.numHemiLights),y.push(b.numRectAreaLights),y.push(b.numDirLightShadows),y.push(b.numPointLightShadows),y.push(b.numSpotLightShadows),y.push(b.numSpotLightShadowsWithMaps),y.push(b.numLightProbes),y.push(b.shadowMapType),y.push(b.toneMapping),y.push(b.numClippingPlanes),y.push(b.numClipIntersection),y.push(b.depthPacking)}function S(y,b){a.disableAll(),b.supportsVertexTextures&&a.enable(0),b.instancing&&a.enable(1),b.instancingColor&&a.enable(2),b.instancingMorph&&a.enable(3),b.matcap&&a.enable(4),b.envMap&&a.enable(5),b.normalMapObjectSpace&&a.enable(6),b.normalMapTangentSpace&&a.enable(7),b.clearcoat&&a.enable(8),b.iridescence&&a.enable(9),b.alphaTest&&a.enable(10),b.vertexColors&&a.enable(11),b.vertexAlphas&&a.enable(12),b.vertexUv1s&&a.enable(13),b.vertexUv2s&&a.enable(14),b.vertexUv3s&&a.enable(15),b.vertexTangents&&a.enable(16),b.anisotropy&&a.enable(17),b.alphaHash&&a.enable(18),b.batching&&a.enable(19),b.dispersion&&a.enable(20),b.batchingColor&&a.enable(21),y.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reverseDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.alphaToCoverage&&a.enable(20),y.push(a.mask)}function I(y){const b=x[y.type];let q;if(b){const V=Tn[b];q=dv.clone(V.uniforms)}else q=y.uniforms;return q}function C(y,b){let q;for(let V=0,Z=u.length;V<Z;V++){const re=u[V];if(re.cacheKey===b){q=re,++q.usedTimes;break}}return q===void 0&&(q=new TS(n,b,y,s),u.push(q)),q}function R(y){if(--y.usedTimes===0){const b=u.indexOf(y);u[b]=u[u.length-1],u.pop(),y.destroy()}}function D(y){l.remove(y)}function se(){l.dispose()}return{getParameters:p,getProgramCacheKey:w,getUniforms:I,acquireProgram:C,releaseProgram:R,releaseShaderCache:D,programs:u,dispose:se}}function LS(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,l){n.get(o)[a]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function IS(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Bh(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function zh(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(h,f,d,_,x,m){let p=n[e];return p===void 0?(p={id:h.id,object:h,geometry:f,material:d,groupOrder:_,renderOrder:h.renderOrder,z:x,group:m},n[e]=p):(p.id=h.id,p.object=h,p.geometry=f,p.material=d,p.groupOrder=_,p.renderOrder=h.renderOrder,p.z=x,p.group=m),e++,p}function a(h,f,d,_,x,m){const p=o(h,f,d,_,x,m);d.transmission>0?i.push(p):d.transparent===!0?r.push(p):t.push(p)}function l(h,f,d,_,x,m){const p=o(h,f,d,_,x,m);d.transmission>0?i.unshift(p):d.transparent===!0?r.unshift(p):t.unshift(p)}function c(h,f){t.length>1&&t.sort(h||IS),i.length>1&&i.sort(f||Bh),r.length>1&&r.sort(f||Bh)}function u(){for(let h=e,f=n.length;h<f;h++){const d=n[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function DS(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new zh,n.set(i,[o])):r>=s.length?(o=new zh,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function US(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new B,color:new Ve};break;case"SpotLight":t={position:new B,direction:new B,color:new Ve,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new B,color:new Ve,distance:0,decay:0};break;case"HemisphereLight":t={direction:new B,skyColor:new Ve,groundColor:new Ve};break;case"RectAreaLight":t={color:new Ve,position:new B,halfWidth:new B,halfHeight:new B};break}return n[e.id]=t,t}}}function NS(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let FS=0;function OS(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function BS(n){const e=new US,t=NS(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new B);const r=new B,s=new ut,o=new ut;function a(c){let u=0,h=0,f=0;for(let se=0;se<9;se++)i.probe[se].set(0,0,0);let d=0,_=0,x=0,m=0,p=0,w=0,M=0,S=0,I=0,C=0,R=0;c.sort(OS);for(let se=0,y=c.length;se<y;se++){const b=c[se],q=b.color,V=b.intensity,Z=b.distance,re=b.shadow&&b.shadow.map?b.shadow.map.texture:null;if(b.isAmbientLight)u+=q.r*V,h+=q.g*V,f+=q.b*V;else if(b.isLightProbe){for(let G=0;G<9;G++)i.probe[G].addScaledVector(b.sh.coefficients[G],V);R++}else if(b.isDirectionalLight){const G=e.get(b);if(G.color.copy(b.color).multiplyScalar(b.intensity),b.castShadow){const K=b.shadow,z=t.get(b);z.shadowIntensity=K.intensity,z.shadowBias=K.bias,z.shadowNormalBias=K.normalBias,z.shadowRadius=K.radius,z.shadowMapSize=K.mapSize,i.directionalShadow[d]=z,i.directionalShadowMap[d]=re,i.directionalShadowMatrix[d]=b.shadow.matrix,w++}i.directional[d]=G,d++}else if(b.isSpotLight){const G=e.get(b);G.position.setFromMatrixPosition(b.matrixWorld),G.color.copy(q).multiplyScalar(V),G.distance=Z,G.coneCos=Math.cos(b.angle),G.penumbraCos=Math.cos(b.angle*(1-b.penumbra)),G.decay=b.decay,i.spot[x]=G;const K=b.shadow;if(b.map&&(i.spotLightMap[I]=b.map,I++,K.updateMatrices(b),b.castShadow&&C++),i.spotLightMatrix[x]=K.matrix,b.castShadow){const z=t.get(b);z.shadowIntensity=K.intensity,z.shadowBias=K.bias,z.shadowNormalBias=K.normalBias,z.shadowRadius=K.radius,z.shadowMapSize=K.mapSize,i.spotShadow[x]=z,i.spotShadowMap[x]=re,S++}x++}else if(b.isRectAreaLight){const G=e.get(b);G.color.copy(q).multiplyScalar(V),G.halfWidth.set(b.width*.5,0,0),G.halfHeight.set(0,b.height*.5,0),i.rectArea[m]=G,m++}else if(b.isPointLight){const G=e.get(b);if(G.color.copy(b.color).multiplyScalar(b.intensity),G.distance=b.distance,G.decay=b.decay,b.castShadow){const K=b.shadow,z=t.get(b);z.shadowIntensity=K.intensity,z.shadowBias=K.bias,z.shadowNormalBias=K.normalBias,z.shadowRadius=K.radius,z.shadowMapSize=K.mapSize,z.shadowCameraNear=K.camera.near,z.shadowCameraFar=K.camera.far,i.pointShadow[_]=z,i.pointShadowMap[_]=re,i.pointShadowMatrix[_]=b.shadow.matrix,M++}i.point[_]=G,_++}else if(b.isHemisphereLight){const G=e.get(b);G.skyColor.copy(b.color).multiplyScalar(V),G.groundColor.copy(b.groundColor).multiplyScalar(V),i.hemi[p]=G,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Se.LTC_FLOAT_1,i.rectAreaLTC2=Se.LTC_FLOAT_2):(i.rectAreaLTC1=Se.LTC_HALF_1,i.rectAreaLTC2=Se.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=f;const D=i.hash;(D.directionalLength!==d||D.pointLength!==_||D.spotLength!==x||D.rectAreaLength!==m||D.hemiLength!==p||D.numDirectionalShadows!==w||D.numPointShadows!==M||D.numSpotShadows!==S||D.numSpotMaps!==I||D.numLightProbes!==R)&&(i.directional.length=d,i.spot.length=x,i.rectArea.length=m,i.point.length=_,i.hemi.length=p,i.directionalShadow.length=w,i.directionalShadowMap.length=w,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=w,i.pointShadowMatrix.length=M,i.spotLightMatrix.length=S+I-C,i.spotLightMap.length=I,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=R,D.directionalLength=d,D.pointLength=_,D.spotLength=x,D.rectAreaLength=m,D.hemiLength=p,D.numDirectionalShadows=w,D.numPointShadows=M,D.numSpotShadows=S,D.numSpotMaps=I,D.numLightProbes=R,i.version=FS++)}function l(c,u){let h=0,f=0,d=0,_=0,x=0;const m=u.matrixWorldInverse;for(let p=0,w=c.length;p<w;p++){const M=c[p];if(M.isDirectionalLight){const S=i.directional[h];S.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),h++}else if(M.isSpotLight){const S=i.spot[d];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),d++}else if(M.isRectAreaLight){const S=i.rectArea[_];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(m),o.identity(),s.copy(M.matrixWorld),s.premultiply(m),o.extractRotation(s),S.halfWidth.set(M.width*.5,0,0),S.halfHeight.set(0,M.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),_++}else if(M.isPointLight){const S=i.point[f];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(m),f++}else if(M.isHemisphereLight){const S=i.hemi[x];S.direction.setFromMatrixPosition(M.matrixWorld),S.direction.transformDirection(m),x++}}}return{setup:a,setupView:l,state:i}}function Hh(n){const e=new BS(n),t=[],i=[];function r(u){c.camera=u,t.length=0,i.length=0}function s(u){t.push(u)}function o(u){i.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function zS(n){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new Hh(n),e.set(r,[a])):s>=o.length?(a=new Hh(n),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}class HS extends Is{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=x_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class GS extends Is{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const kS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,VS=`uniform sampler2D shadow_pass;
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
}`;function WS(n,e,t){let i=new Oc;const r=new Ee,s=new Ee,o=new rt,a=new HS({depthPacking:y_}),l=new GS,c={},u=t.maxTextureSize,h={[Mi]:kt,[kt]:Mi,[Zn]:Zn},f=new zt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ee},radius:{value:4}},vertexShader:kS,fragmentShader:VS}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const _=new Un;_.setAttribute("position",new Rn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new ae(_,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=fd;let p=this.type;this.render=function(C,R,D){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;const se=n.getRenderTarget(),y=n.getActiveCubeFace(),b=n.getActiveMipmapLevel(),q=n.state;q.setBlending(vi),q.buffers.color.setClear(1,1,1,1),q.buffers.depth.setTest(!0),q.setScissorTest(!1);const V=p!==Yn&&this.type===Yn,Z=p===Yn&&this.type!==Yn;for(let re=0,G=C.length;re<G;re++){const K=C[re],z=K.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;r.copy(z.mapSize);const ge=z.getFrameExtents();if(r.multiply(ge),s.copy(z.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/ge.x),r.x=s.x*ge.x,z.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/ge.y),r.y=s.y*ge.y,z.mapSize.y=s.y)),z.map===null||V===!0||Z===!0){const _e=this.type!==Yn?{minFilter:en,magFilter:en}:{};z.map!==null&&z.map.dispose(),z.map=new qi(r.x,r.y,_e),z.map.texture.name=K.name+".shadowMap",z.camera.updateProjectionMatrix()}n.setRenderTarget(z.map),n.clear();const me=z.getViewportCount();for(let _e=0;_e<me;_e++){const be=z.getViewport(_e);o.set(s.x*be.x,s.y*be.y,s.x*be.z,s.y*be.w),q.viewport(o),z.updateMatrices(K,_e),i=z.getFrustum(),S(R,D,z.camera,K,this.type)}z.isPointLightShadow!==!0&&this.type===Yn&&w(z,D),z.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(se,y,b)};function w(C,R){const D=e.update(x);f.defines.VSM_SAMPLES!==C.blurSamples&&(f.defines.VSM_SAMPLES=C.blurSamples,d.defines.VSM_SAMPLES=C.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new qi(r.x,r.y)),f.uniforms.shadow_pass.value=C.map.texture,f.uniforms.resolution.value=C.mapSize,f.uniforms.radius.value=C.radius,n.setRenderTarget(C.mapPass),n.clear(),n.renderBufferDirect(R,null,D,f,x,null),d.uniforms.shadow_pass.value=C.mapPass.texture,d.uniforms.resolution.value=C.mapSize,d.uniforms.radius.value=C.radius,n.setRenderTarget(C.map),n.clear(),n.renderBufferDirect(R,null,D,d,x,null)}function M(C,R,D,se){let y=null;const b=D.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(b!==void 0)y=b;else if(y=D.isPointLight===!0?l:a,n.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const q=y.uuid,V=R.uuid;let Z=c[q];Z===void 0&&(Z={},c[q]=Z);let re=Z[V];re===void 0&&(re=y.clone(),Z[V]=re,R.addEventListener("dispose",I)),y=re}if(y.visible=R.visible,y.wireframe=R.wireframe,se===Yn?y.side=R.shadowSide!==null?R.shadowSide:R.side:y.side=R.shadowSide!==null?R.shadowSide:h[R.side],y.alphaMap=R.alphaMap,y.alphaTest=R.alphaTest,y.map=R.map,y.clipShadows=R.clipShadows,y.clippingPlanes=R.clippingPlanes,y.clipIntersection=R.clipIntersection,y.displacementMap=R.displacementMap,y.displacementScale=R.displacementScale,y.displacementBias=R.displacementBias,y.wireframeLinewidth=R.wireframeLinewidth,y.linewidth=R.linewidth,D.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const q=n.properties.get(y);q.light=D}return y}function S(C,R,D,se,y){if(C.visible===!1)return;if(C.layers.test(R.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&y===Yn)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,C.matrixWorld);const V=e.update(C),Z=C.material;if(Array.isArray(Z)){const re=V.groups;for(let G=0,K=re.length;G<K;G++){const z=re[G],ge=Z[z.materialIndex];if(ge&&ge.visible){const me=M(C,ge,se,y);C.onBeforeShadow(n,C,R,D,V,me,z),n.renderBufferDirect(D,null,V,me,C,z),C.onAfterShadow(n,C,R,D,V,me,z)}}}else if(Z.visible){const re=M(C,Z,se,y);C.onBeforeShadow(n,C,R,D,V,re,null),n.renderBufferDirect(D,null,V,re,C,null),C.onAfterShadow(n,C,R,D,V,re,null)}}const q=C.children;for(let V=0,Z=q.length;V<Z;V++)S(q[V],R,D,se,y)}function I(C){C.target.removeEventListener("dispose",I);for(const D in c){const se=c[D],y=C.target.uuid;y in se&&(se[y].dispose(),delete se[y])}}}const XS={[pl]:ml,[gl]:xl,[_l]:yl,[Nr]:vl,[ml]:pl,[xl]:gl,[yl]:_l,[vl]:Nr};function qS(n){function e(){let O=!1;const Re=new rt;let oe=null;const he=new rt(0,0,0,0);return{setMask:function(Te){oe!==Te&&!O&&(n.colorMask(Te,Te,Te,Te),oe=Te)},setLocked:function(Te){O=Te},setClear:function(Te,Ce,Ke,mt,Ht){Ht===!0&&(Te*=mt,Ce*=mt,Ke*=mt),Re.set(Te,Ce,Ke,mt),he.equals(Re)===!1&&(n.clearColor(Te,Ce,Ke,mt),he.copy(Re))},reset:function(){O=!1,oe=null,he.set(-1,0,0,0)}}}function t(){let O=!1,Re=!1,oe=null,he=null,Te=null;return{setReversed:function(Ce){Re=Ce},setTest:function(Ce){Ce?pe(n.DEPTH_TEST):U(n.DEPTH_TEST)},setMask:function(Ce){oe!==Ce&&!O&&(n.depthMask(Ce),oe=Ce)},setFunc:function(Ce){if(Re&&(Ce=XS[Ce]),he!==Ce){switch(Ce){case pl:n.depthFunc(n.NEVER);break;case ml:n.depthFunc(n.ALWAYS);break;case gl:n.depthFunc(n.LESS);break;case Nr:n.depthFunc(n.LEQUAL);break;case _l:n.depthFunc(n.EQUAL);break;case vl:n.depthFunc(n.GEQUAL);break;case xl:n.depthFunc(n.GREATER);break;case yl:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}he=Ce}},setLocked:function(Ce){O=Ce},setClear:function(Ce){Te!==Ce&&(n.clearDepth(Ce),Te=Ce)},reset:function(){O=!1,oe=null,he=null,Te=null}}}function i(){let O=!1,Re=null,oe=null,he=null,Te=null,Ce=null,Ke=null,mt=null,Ht=null;return{setTest:function(je){O||(je?pe(n.STENCIL_TEST):U(n.STENCIL_TEST))},setMask:function(je){Re!==je&&!O&&(n.stencilMask(je),Re=je)},setFunc:function(je,Gt,Fn){(oe!==je||he!==Gt||Te!==Fn)&&(n.stencilFunc(je,Gt,Fn),oe=je,he=Gt,Te=Fn)},setOp:function(je,Gt,Fn){(Ce!==je||Ke!==Gt||mt!==Fn)&&(n.stencilOp(je,Gt,Fn),Ce=je,Ke=Gt,mt=Fn)},setLocked:function(je){O=je},setClear:function(je){Ht!==je&&(n.clearStencil(je),Ht=je)},reset:function(){O=!1,Re=null,oe=null,he=null,Te=null,Ce=null,Ke=null,mt=null,Ht=null}}}const r=new e,s=new t,o=new i,a=new WeakMap,l=new WeakMap;let c={},u={},h=new WeakMap,f=[],d=null,_=!1,x=null,m=null,p=null,w=null,M=null,S=null,I=null,C=new Ve(0,0,0),R=0,D=!1,se=null,y=null,b=null,q=null,V=null;const Z=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let re=!1,G=0;const K=n.getParameter(n.VERSION);K.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(K)[1]),re=G>=1):K.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),re=G>=2);let z=null,ge={};const me=n.getParameter(n.SCISSOR_BOX),_e=n.getParameter(n.VIEWPORT),be=new rt().fromArray(me),ze=new rt().fromArray(_e);function te(O,Re,oe,he){const Te=new Uint8Array(4),Ce=n.createTexture();n.bindTexture(O,Ce),n.texParameteri(O,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(O,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ke=0;Ke<oe;Ke++)O===n.TEXTURE_3D||O===n.TEXTURE_2D_ARRAY?n.texImage3D(Re,0,n.RGBA,1,1,he,0,n.RGBA,n.UNSIGNED_BYTE,Te):n.texImage2D(Re+Ke,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Te);return Ce}const de={};de[n.TEXTURE_2D]=te(n.TEXTURE_2D,n.TEXTURE_2D,1),de[n.TEXTURE_CUBE_MAP]=te(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),de[n.TEXTURE_2D_ARRAY]=te(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),de[n.TEXTURE_3D]=te(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),pe(n.DEPTH_TEST),s.setFunc(Nr),L(!1),F(Yu),pe(n.CULL_FACE),g(vi);function pe(O){c[O]!==!0&&(n.enable(O),c[O]=!0)}function U(O){c[O]!==!1&&(n.disable(O),c[O]=!1)}function ie(O,Re){return u[O]!==Re?(n.bindFramebuffer(O,Re),u[O]=Re,O===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=Re),O===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=Re),!0):!1}function $(O,Re){let oe=f,he=!1;if(O){oe=h.get(Re),oe===void 0&&(oe=[],h.set(Re,oe));const Te=O.textures;if(oe.length!==Te.length||oe[0]!==n.COLOR_ATTACHMENT0){for(let Ce=0,Ke=Te.length;Ce<Ke;Ce++)oe[Ce]=n.COLOR_ATTACHMENT0+Ce;oe.length=Te.length,he=!0}}else oe[0]!==n.BACK&&(oe[0]=n.BACK,he=!0);he&&n.drawBuffers(oe)}function le(O){return d!==O?(n.useProgram(O),d=O,!0):!1}const Me={[Bi]:n.FUNC_ADD,[Y0]:n.FUNC_SUBTRACT,[$0]:n.FUNC_REVERSE_SUBTRACT};Me[K0]=n.MIN,Me[j0]=n.MAX;const J={[Z0]:n.ZERO,[J0]:n.ONE,[Q0]:n.SRC_COLOR,[fl]:n.SRC_ALPHA,[s_]:n.SRC_ALPHA_SATURATE,[i_]:n.DST_COLOR,[t_]:n.DST_ALPHA,[e_]:n.ONE_MINUS_SRC_COLOR,[dl]:n.ONE_MINUS_SRC_ALPHA,[r_]:n.ONE_MINUS_DST_COLOR,[n_]:n.ONE_MINUS_DST_ALPHA,[o_]:n.CONSTANT_COLOR,[a_]:n.ONE_MINUS_CONSTANT_COLOR,[l_]:n.CONSTANT_ALPHA,[c_]:n.ONE_MINUS_CONSTANT_ALPHA};function g(O,Re,oe,he,Te,Ce,Ke,mt,Ht,je){if(O===vi){_===!0&&(U(n.BLEND),_=!1);return}if(_===!1&&(pe(n.BLEND),_=!0),O!==q0){if(O!==x||je!==D){if((m!==Bi||M!==Bi)&&(n.blendEquation(n.FUNC_ADD),m=Bi,M=Bi),je)switch(O){case Rr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case $u:n.blendFunc(n.ONE,n.ONE);break;case Ku:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case ju:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case Rr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case $u:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Ku:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case ju:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}p=null,w=null,S=null,I=null,C.set(0,0,0),R=0,x=O,D=je}return}Te=Te||Re,Ce=Ce||oe,Ke=Ke||he,(Re!==m||Te!==M)&&(n.blendEquationSeparate(Me[Re],Me[Te]),m=Re,M=Te),(oe!==p||he!==w||Ce!==S||Ke!==I)&&(n.blendFuncSeparate(J[oe],J[he],J[Ce],J[Ke]),p=oe,w=he,S=Ce,I=Ke),(mt.equals(C)===!1||Ht!==R)&&(n.blendColor(mt.r,mt.g,mt.b,Ht),C.copy(mt),R=Ht),x=O,D=!1}function A(O,Re){O.side===Zn?U(n.CULL_FACE):pe(n.CULL_FACE);let oe=O.side===kt;Re&&(oe=!oe),L(oe),O.blending===Rr&&O.transparent===!1?g(vi):g(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),s.setFunc(O.depthFunc),s.setTest(O.depthTest),s.setMask(O.depthWrite),r.setMask(O.colorWrite);const he=O.stencilWrite;o.setTest(he),he&&(o.setMask(O.stencilWriteMask),o.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),o.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),j(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?pe(n.SAMPLE_ALPHA_TO_COVERAGE):U(n.SAMPLE_ALPHA_TO_COVERAGE)}function L(O){se!==O&&(O?n.frontFace(n.CW):n.frontFace(n.CCW),se=O)}function F(O){O!==V0?(pe(n.CULL_FACE),O!==y&&(O===Yu?n.cullFace(n.BACK):O===W0?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):U(n.CULL_FACE),y=O}function N(O){O!==b&&(re&&n.lineWidth(O),b=O)}function j(O,Re,oe){O?(pe(n.POLYGON_OFFSET_FILL),(q!==Re||V!==oe)&&(n.polygonOffset(Re,oe),q=Re,V=oe)):U(n.POLYGON_OFFSET_FILL)}function ne(O){O?pe(n.SCISSOR_TEST):U(n.SCISSOR_TEST)}function E(O){O===void 0&&(O=n.TEXTURE0+Z-1),z!==O&&(n.activeTexture(O),z=O)}function v(O,Re,oe){oe===void 0&&(z===null?oe=n.TEXTURE0+Z-1:oe=z);let he=ge[oe];he===void 0&&(he={type:void 0,texture:void 0},ge[oe]=he),(he.type!==O||he.texture!==Re)&&(z!==oe&&(n.activeTexture(oe),z=oe),n.bindTexture(O,Re||de[O]),he.type=O,he.texture=Re)}function P(){const O=ge[z];O!==void 0&&O.type!==void 0&&(n.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function Y(){try{n.compressedTexImage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function k(){try{n.compressedTexImage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function X(){try{n.texSubImage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ue(){try{n.texSubImage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ce(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ve(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Pe(){try{n.texStorage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function fe(){try{n.texStorage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ye(){try{n.texImage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ue(){try{n.texImage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ie(O){be.equals(O)===!1&&(n.scissor(O.x,O.y,O.z,O.w),be.copy(O))}function we(O){ze.equals(O)===!1&&(n.viewport(O.x,O.y,O.z,O.w),ze.copy(O))}function Ye(O,Re){let oe=l.get(Re);oe===void 0&&(oe=new WeakMap,l.set(Re,oe));let he=oe.get(O);he===void 0&&(he=n.getUniformBlockIndex(Re,O.name),oe.set(O,he))}function Ne(O,Re){const he=l.get(Re).get(O);a.get(Re)!==he&&(n.uniformBlockBinding(Re,he,O.__bindingPointIndex),a.set(Re,he))}function $e(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),c={},z=null,ge={},u={},h=new WeakMap,f=[],d=null,_=!1,x=null,m=null,p=null,w=null,M=null,S=null,I=null,C=new Ve(0,0,0),R=0,D=!1,se=null,y=null,b=null,q=null,V=null,be.set(0,0,n.canvas.width,n.canvas.height),ze.set(0,0,n.canvas.width,n.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:pe,disable:U,bindFramebuffer:ie,drawBuffers:$,useProgram:le,setBlending:g,setMaterial:A,setFlipSided:L,setCullFace:F,setLineWidth:N,setPolygonOffset:j,setScissorTest:ne,activeTexture:E,bindTexture:v,unbindTexture:P,compressedTexImage2D:Y,compressedTexImage3D:k,texImage2D:ye,texImage3D:Ue,updateUBOMapping:Ye,uniformBlockBinding:Ne,texStorage2D:Pe,texStorage3D:fe,texSubImage2D:X,texSubImage3D:ue,compressedTexSubImage2D:ce,compressedTexSubImage3D:ve,scissor:Ie,viewport:we,reset:$e}}function Gh(n,e,t,i){const r=YS(i);switch(t){case vd:return n*e;case yd:return n*e;case Md:return n*e*2;case Sd:return n*e/r.components*r.byteLength;case Lc:return n*e/r.components*r.byteLength;case Ed:return n*e*2/r.components*r.byteLength;case Ic:return n*e*2/r.components*r.byteLength;case xd:return n*e*3/r.components*r.byteLength;case mn:return n*e*4/r.components*r.byteLength;case Dc:return n*e*4/r.components*r.byteLength;case go:case _o:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case vo:case xo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Tl:case Rl:return Math.max(n,16)*Math.max(e,8)/4;case wl:case Al:return Math.max(n,8)*Math.max(e,8)/2;case Cl:case Pl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Ll:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Il:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Dl:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Ul:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Nl:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Fl:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Ol:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Bl:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case zl:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Hl:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Gl:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case kl:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Vl:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Wl:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Xl:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case yo:case ql:case Yl:return Math.ceil(n/4)*Math.ceil(e/4)*16;case bd:case $l:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Kl:case jl:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function YS(n){switch(n){case ni:case md:return{byteLength:1,components:1};case Ms:case gd:case Cs:return{byteLength:2,components:1};case Cc:case Pc:return{byteLength:2,components:4};case Xi:case Rc:case Jn:return{byteLength:4,components:1};case _d:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function $S(n,e,t,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ee,u=new WeakMap;let h;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(E,v){return d?new OffscreenCanvas(E,v):Io("canvas")}function x(E,v,P){let Y=1;const k=ne(E);if((k.width>P||k.height>P)&&(Y=P/Math.max(k.width,k.height)),Y<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){const X=Math.floor(Y*k.width),ue=Math.floor(Y*k.height);h===void 0&&(h=_(X,ue));const ce=v?_(X,ue):h;return ce.width=X,ce.height=ue,ce.getContext("2d").drawImage(E,0,0,X,ue),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+k.width+"x"+k.height+") to ("+X+"x"+ue+")."),ce}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+k.width+"x"+k.height+")."),E;return E}function m(E){return E.generateMipmaps&&E.minFilter!==en&&E.minFilter!==fn}function p(E){n.generateMipmap(E)}function w(E,v,P,Y,k=!1){if(E!==null){if(n[E]!==void 0)return n[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let X=v;if(v===n.RED&&(P===n.FLOAT&&(X=n.R32F),P===n.HALF_FLOAT&&(X=n.R16F),P===n.UNSIGNED_BYTE&&(X=n.R8)),v===n.RED_INTEGER&&(P===n.UNSIGNED_BYTE&&(X=n.R8UI),P===n.UNSIGNED_SHORT&&(X=n.R16UI),P===n.UNSIGNED_INT&&(X=n.R32UI),P===n.BYTE&&(X=n.R8I),P===n.SHORT&&(X=n.R16I),P===n.INT&&(X=n.R32I)),v===n.RG&&(P===n.FLOAT&&(X=n.RG32F),P===n.HALF_FLOAT&&(X=n.RG16F),P===n.UNSIGNED_BYTE&&(X=n.RG8)),v===n.RG_INTEGER&&(P===n.UNSIGNED_BYTE&&(X=n.RG8UI),P===n.UNSIGNED_SHORT&&(X=n.RG16UI),P===n.UNSIGNED_INT&&(X=n.RG32UI),P===n.BYTE&&(X=n.RG8I),P===n.SHORT&&(X=n.RG16I),P===n.INT&&(X=n.RG32I)),v===n.RGB_INTEGER&&(P===n.UNSIGNED_BYTE&&(X=n.RGB8UI),P===n.UNSIGNED_SHORT&&(X=n.RGB16UI),P===n.UNSIGNED_INT&&(X=n.RGB32UI),P===n.BYTE&&(X=n.RGB8I),P===n.SHORT&&(X=n.RGB16I),P===n.INT&&(X=n.RGB32I)),v===n.RGBA_INTEGER&&(P===n.UNSIGNED_BYTE&&(X=n.RGBA8UI),P===n.UNSIGNED_SHORT&&(X=n.RGBA16UI),P===n.UNSIGNED_INT&&(X=n.RGBA32UI),P===n.BYTE&&(X=n.RGBA8I),P===n.SHORT&&(X=n.RGBA16I),P===n.INT&&(X=n.RGBA32I)),v===n.RGB&&P===n.UNSIGNED_INT_5_9_9_9_REV&&(X=n.RGB9_E5),v===n.RGBA){const ue=k?Ro:et.getTransfer(Y);P===n.FLOAT&&(X=n.RGBA32F),P===n.HALF_FLOAT&&(X=n.RGBA16F),P===n.UNSIGNED_BYTE&&(X=ue===ct?n.SRGB8_ALPHA8:n.RGBA8),P===n.UNSIGNED_SHORT_4_4_4_4&&(X=n.RGBA4),P===n.UNSIGNED_SHORT_5_5_5_1&&(X=n.RGB5_A1)}return(X===n.R16F||X===n.R32F||X===n.RG16F||X===n.RG32F||X===n.RGBA16F||X===n.RGBA32F)&&e.get("EXT_color_buffer_float"),X}function M(E,v){let P;return E?v===null||v===Xi||v===Br?P=n.DEPTH24_STENCIL8:v===Jn?P=n.DEPTH32F_STENCIL8:v===Ms&&(P=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Xi||v===Br?P=n.DEPTH_COMPONENT24:v===Jn?P=n.DEPTH_COMPONENT32F:v===Ms&&(P=n.DEPTH_COMPONENT16),P}function S(E,v){return m(E)===!0||E.isFramebufferTexture&&E.minFilter!==en&&E.minFilter!==fn?Math.log2(Math.max(v.width,v.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?v.mipmaps.length:1}function I(E){const v=E.target;v.removeEventListener("dispose",I),R(v),v.isVideoTexture&&u.delete(v)}function C(E){const v=E.target;v.removeEventListener("dispose",C),se(v)}function R(E){const v=i.get(E);if(v.__webglInit===void 0)return;const P=E.source,Y=f.get(P);if(Y){const k=Y[v.__cacheKey];k.usedTimes--,k.usedTimes===0&&D(E),Object.keys(Y).length===0&&f.delete(P)}i.remove(E)}function D(E){const v=i.get(E);n.deleteTexture(v.__webglTexture);const P=E.source,Y=f.get(P);delete Y[v.__cacheKey],o.memory.textures--}function se(E){const v=i.get(E);if(E.depthTexture&&E.depthTexture.dispose(),E.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(v.__webglFramebuffer[Y]))for(let k=0;k<v.__webglFramebuffer[Y].length;k++)n.deleteFramebuffer(v.__webglFramebuffer[Y][k]);else n.deleteFramebuffer(v.__webglFramebuffer[Y]);v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer[Y])}else{if(Array.isArray(v.__webglFramebuffer))for(let Y=0;Y<v.__webglFramebuffer.length;Y++)n.deleteFramebuffer(v.__webglFramebuffer[Y]);else n.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&n.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let Y=0;Y<v.__webglColorRenderbuffer.length;Y++)v.__webglColorRenderbuffer[Y]&&n.deleteRenderbuffer(v.__webglColorRenderbuffer[Y]);v.__webglDepthRenderbuffer&&n.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const P=E.textures;for(let Y=0,k=P.length;Y<k;Y++){const X=i.get(P[Y]);X.__webglTexture&&(n.deleteTexture(X.__webglTexture),o.memory.textures--),i.remove(P[Y])}i.remove(E)}let y=0;function b(){y=0}function q(){const E=y;return E>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+r.maxTextures),y+=1,E}function V(E){const v=[];return v.push(E.wrapS),v.push(E.wrapT),v.push(E.wrapR||0),v.push(E.magFilter),v.push(E.minFilter),v.push(E.anisotropy),v.push(E.internalFormat),v.push(E.format),v.push(E.type),v.push(E.generateMipmaps),v.push(E.premultiplyAlpha),v.push(E.flipY),v.push(E.unpackAlignment),v.push(E.colorSpace),v.join()}function Z(E,v){const P=i.get(E);if(E.isVideoTexture&&N(E),E.isRenderTargetTexture===!1&&E.version>0&&P.__version!==E.version){const Y=E.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ze(P,E,v);return}}t.bindTexture(n.TEXTURE_2D,P.__webglTexture,n.TEXTURE0+v)}function re(E,v){const P=i.get(E);if(E.version>0&&P.__version!==E.version){ze(P,E,v);return}t.bindTexture(n.TEXTURE_2D_ARRAY,P.__webglTexture,n.TEXTURE0+v)}function G(E,v){const P=i.get(E);if(E.version>0&&P.__version!==E.version){ze(P,E,v);return}t.bindTexture(n.TEXTURE_3D,P.__webglTexture,n.TEXTURE0+v)}function K(E,v){const P=i.get(E);if(E.version>0&&P.__version!==E.version){te(P,E,v);return}t.bindTexture(n.TEXTURE_CUBE_MAP,P.__webglTexture,n.TEXTURE0+v)}const z={[El]:n.REPEAT,[Hi]:n.CLAMP_TO_EDGE,[bl]:n.MIRRORED_REPEAT},ge={[en]:n.NEAREST,[v_]:n.NEAREST_MIPMAP_NEAREST,[ks]:n.NEAREST_MIPMAP_LINEAR,[fn]:n.LINEAR,[ga]:n.LINEAR_MIPMAP_NEAREST,[Gi]:n.LINEAR_MIPMAP_LINEAR},me={[S_]:n.NEVER,[R_]:n.ALWAYS,[E_]:n.LESS,[Td]:n.LEQUAL,[b_]:n.EQUAL,[A_]:n.GEQUAL,[w_]:n.GREATER,[T_]:n.NOTEQUAL};function _e(E,v){if(v.type===Jn&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===fn||v.magFilter===ga||v.magFilter===ks||v.magFilter===Gi||v.minFilter===fn||v.minFilter===ga||v.minFilter===ks||v.minFilter===Gi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(E,n.TEXTURE_WRAP_S,z[v.wrapS]),n.texParameteri(E,n.TEXTURE_WRAP_T,z[v.wrapT]),(E===n.TEXTURE_3D||E===n.TEXTURE_2D_ARRAY)&&n.texParameteri(E,n.TEXTURE_WRAP_R,z[v.wrapR]),n.texParameteri(E,n.TEXTURE_MAG_FILTER,ge[v.magFilter]),n.texParameteri(E,n.TEXTURE_MIN_FILTER,ge[v.minFilter]),v.compareFunction&&(n.texParameteri(E,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(E,n.TEXTURE_COMPARE_FUNC,me[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===en||v.minFilter!==ks&&v.minFilter!==Gi||v.type===Jn&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||i.get(v).__currentAnisotropy){const P=e.get("EXT_texture_filter_anisotropic");n.texParameterf(E,P.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,r.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy}}}function be(E,v){let P=!1;E.__webglInit===void 0&&(E.__webglInit=!0,v.addEventListener("dispose",I));const Y=v.source;let k=f.get(Y);k===void 0&&(k={},f.set(Y,k));const X=V(v);if(X!==E.__cacheKey){k[X]===void 0&&(k[X]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,P=!0),k[X].usedTimes++;const ue=k[E.__cacheKey];ue!==void 0&&(k[E.__cacheKey].usedTimes--,ue.usedTimes===0&&D(v)),E.__cacheKey=X,E.__webglTexture=k[X].texture}return P}function ze(E,v,P){let Y=n.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(Y=n.TEXTURE_2D_ARRAY),v.isData3DTexture&&(Y=n.TEXTURE_3D);const k=be(E,v),X=v.source;t.bindTexture(Y,E.__webglTexture,n.TEXTURE0+P);const ue=i.get(X);if(X.version!==ue.__version||k===!0){t.activeTexture(n.TEXTURE0+P);const ce=et.getPrimaries(et.workingColorSpace),ve=v.colorSpace===_i?null:et.getPrimaries(v.colorSpace),Pe=v.colorSpace===_i||ce===ve?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pe);let fe=x(v.image,!1,r.maxTextureSize);fe=j(v,fe);const ye=s.convert(v.format,v.colorSpace),Ue=s.convert(v.type);let Ie=w(v.internalFormat,ye,Ue,v.colorSpace,v.isVideoTexture);_e(Y,v);let we;const Ye=v.mipmaps,Ne=v.isVideoTexture!==!0,$e=ue.__version===void 0||k===!0,O=X.dataReady,Re=S(v,fe);if(v.isDepthTexture)Ie=M(v.format===zr,v.type),$e&&(Ne?t.texStorage2D(n.TEXTURE_2D,1,Ie,fe.width,fe.height):t.texImage2D(n.TEXTURE_2D,0,Ie,fe.width,fe.height,0,ye,Ue,null));else if(v.isDataTexture)if(Ye.length>0){Ne&&$e&&t.texStorage2D(n.TEXTURE_2D,Re,Ie,Ye[0].width,Ye[0].height);for(let oe=0,he=Ye.length;oe<he;oe++)we=Ye[oe],Ne?O&&t.texSubImage2D(n.TEXTURE_2D,oe,0,0,we.width,we.height,ye,Ue,we.data):t.texImage2D(n.TEXTURE_2D,oe,Ie,we.width,we.height,0,ye,Ue,we.data);v.generateMipmaps=!1}else Ne?($e&&t.texStorage2D(n.TEXTURE_2D,Re,Ie,fe.width,fe.height),O&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,fe.width,fe.height,ye,Ue,fe.data)):t.texImage2D(n.TEXTURE_2D,0,Ie,fe.width,fe.height,0,ye,Ue,fe.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Ne&&$e&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Re,Ie,Ye[0].width,Ye[0].height,fe.depth);for(let oe=0,he=Ye.length;oe<he;oe++)if(we=Ye[oe],v.format!==mn)if(ye!==null)if(Ne){if(O)if(v.layerUpdates.size>0){const Te=Gh(we.width,we.height,v.format,v.type);for(const Ce of v.layerUpdates){const Ke=we.data.subarray(Ce*Te/we.data.BYTES_PER_ELEMENT,(Ce+1)*Te/we.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,oe,0,0,Ce,we.width,we.height,1,ye,Ke,0,0)}v.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,oe,0,0,0,we.width,we.height,fe.depth,ye,we.data,0,0)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,oe,Ie,we.width,we.height,fe.depth,0,we.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ne?O&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,oe,0,0,0,we.width,we.height,fe.depth,ye,Ue,we.data):t.texImage3D(n.TEXTURE_2D_ARRAY,oe,Ie,we.width,we.height,fe.depth,0,ye,Ue,we.data)}else{Ne&&$e&&t.texStorage2D(n.TEXTURE_2D,Re,Ie,Ye[0].width,Ye[0].height);for(let oe=0,he=Ye.length;oe<he;oe++)we=Ye[oe],v.format!==mn?ye!==null?Ne?O&&t.compressedTexSubImage2D(n.TEXTURE_2D,oe,0,0,we.width,we.height,ye,we.data):t.compressedTexImage2D(n.TEXTURE_2D,oe,Ie,we.width,we.height,0,we.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ne?O&&t.texSubImage2D(n.TEXTURE_2D,oe,0,0,we.width,we.height,ye,Ue,we.data):t.texImage2D(n.TEXTURE_2D,oe,Ie,we.width,we.height,0,ye,Ue,we.data)}else if(v.isDataArrayTexture)if(Ne){if($e&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Re,Ie,fe.width,fe.height,fe.depth),O)if(v.layerUpdates.size>0){const oe=Gh(fe.width,fe.height,v.format,v.type);for(const he of v.layerUpdates){const Te=fe.data.subarray(he*oe/fe.data.BYTES_PER_ELEMENT,(he+1)*oe/fe.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,he,fe.width,fe.height,1,ye,Ue,Te)}v.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,fe.width,fe.height,fe.depth,ye,Ue,fe.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ie,fe.width,fe.height,fe.depth,0,ye,Ue,fe.data);else if(v.isData3DTexture)Ne?($e&&t.texStorage3D(n.TEXTURE_3D,Re,Ie,fe.width,fe.height,fe.depth),O&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,fe.width,fe.height,fe.depth,ye,Ue,fe.data)):t.texImage3D(n.TEXTURE_3D,0,Ie,fe.width,fe.height,fe.depth,0,ye,Ue,fe.data);else if(v.isFramebufferTexture){if($e)if(Ne)t.texStorage2D(n.TEXTURE_2D,Re,Ie,fe.width,fe.height);else{let oe=fe.width,he=fe.height;for(let Te=0;Te<Re;Te++)t.texImage2D(n.TEXTURE_2D,Te,Ie,oe,he,0,ye,Ue,null),oe>>=1,he>>=1}}else if(Ye.length>0){if(Ne&&$e){const oe=ne(Ye[0]);t.texStorage2D(n.TEXTURE_2D,Re,Ie,oe.width,oe.height)}for(let oe=0,he=Ye.length;oe<he;oe++)we=Ye[oe],Ne?O&&t.texSubImage2D(n.TEXTURE_2D,oe,0,0,ye,Ue,we):t.texImage2D(n.TEXTURE_2D,oe,Ie,ye,Ue,we);v.generateMipmaps=!1}else if(Ne){if($e){const oe=ne(fe);t.texStorage2D(n.TEXTURE_2D,Re,Ie,oe.width,oe.height)}O&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ye,Ue,fe)}else t.texImage2D(n.TEXTURE_2D,0,Ie,ye,Ue,fe);m(v)&&p(Y),ue.__version=X.version,v.onUpdate&&v.onUpdate(v)}E.__version=v.version}function te(E,v,P){if(v.image.length!==6)return;const Y=be(E,v),k=v.source;t.bindTexture(n.TEXTURE_CUBE_MAP,E.__webglTexture,n.TEXTURE0+P);const X=i.get(k);if(k.version!==X.__version||Y===!0){t.activeTexture(n.TEXTURE0+P);const ue=et.getPrimaries(et.workingColorSpace),ce=v.colorSpace===_i?null:et.getPrimaries(v.colorSpace),ve=v.colorSpace===_i||ue===ce?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve);const Pe=v.isCompressedTexture||v.image[0].isCompressedTexture,fe=v.image[0]&&v.image[0].isDataTexture,ye=[];for(let he=0;he<6;he++)!Pe&&!fe?ye[he]=x(v.image[he],!0,r.maxCubemapSize):ye[he]=fe?v.image[he].image:v.image[he],ye[he]=j(v,ye[he]);const Ue=ye[0],Ie=s.convert(v.format,v.colorSpace),we=s.convert(v.type),Ye=w(v.internalFormat,Ie,we,v.colorSpace),Ne=v.isVideoTexture!==!0,$e=X.__version===void 0||Y===!0,O=k.dataReady;let Re=S(v,Ue);_e(n.TEXTURE_CUBE_MAP,v);let oe;if(Pe){Ne&&$e&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Re,Ye,Ue.width,Ue.height);for(let he=0;he<6;he++){oe=ye[he].mipmaps;for(let Te=0;Te<oe.length;Te++){const Ce=oe[Te];v.format!==mn?Ie!==null?Ne?O&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,Te,0,0,Ce.width,Ce.height,Ie,Ce.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,Te,Ye,Ce.width,Ce.height,0,Ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ne?O&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,Te,0,0,Ce.width,Ce.height,Ie,we,Ce.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,Te,Ye,Ce.width,Ce.height,0,Ie,we,Ce.data)}}}else{if(oe=v.mipmaps,Ne&&$e){oe.length>0&&Re++;const he=ne(ye[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Re,Ye,he.width,he.height)}for(let he=0;he<6;he++)if(fe){Ne?O&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,ye[he].width,ye[he].height,Ie,we,ye[he].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,Ye,ye[he].width,ye[he].height,0,Ie,we,ye[he].data);for(let Te=0;Te<oe.length;Te++){const Ke=oe[Te].image[he].image;Ne?O&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,Te+1,0,0,Ke.width,Ke.height,Ie,we,Ke.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,Te+1,Ye,Ke.width,Ke.height,0,Ie,we,Ke.data)}}else{Ne?O&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,Ie,we,ye[he]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,Ye,Ie,we,ye[he]);for(let Te=0;Te<oe.length;Te++){const Ce=oe[Te];Ne?O&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,Te+1,0,0,Ie,we,Ce.image[he]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,Te+1,Ye,Ie,we,Ce.image[he])}}}m(v)&&p(n.TEXTURE_CUBE_MAP),X.__version=k.version,v.onUpdate&&v.onUpdate(v)}E.__version=v.version}function de(E,v,P,Y,k,X){const ue=s.convert(P.format,P.colorSpace),ce=s.convert(P.type),ve=w(P.internalFormat,ue,ce,P.colorSpace);if(!i.get(v).__hasExternalTextures){const fe=Math.max(1,v.width>>X),ye=Math.max(1,v.height>>X);k===n.TEXTURE_3D||k===n.TEXTURE_2D_ARRAY?t.texImage3D(k,X,ve,fe,ye,v.depth,0,ue,ce,null):t.texImage2D(k,X,ve,fe,ye,0,ue,ce,null)}t.bindFramebuffer(n.FRAMEBUFFER,E),F(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Y,k,i.get(P).__webglTexture,0,L(v)):(k===n.TEXTURE_2D||k>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&k<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Y,k,i.get(P).__webglTexture,X),t.bindFramebuffer(n.FRAMEBUFFER,null)}function pe(E,v,P){if(n.bindRenderbuffer(n.RENDERBUFFER,E),v.depthBuffer){const Y=v.depthTexture,k=Y&&Y.isDepthTexture?Y.type:null,X=M(v.stencilBuffer,k),ue=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ce=L(v);F(v)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ce,X,v.width,v.height):P?n.renderbufferStorageMultisample(n.RENDERBUFFER,ce,X,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,X,v.width,v.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,ue,n.RENDERBUFFER,E)}else{const Y=v.textures;for(let k=0;k<Y.length;k++){const X=Y[k],ue=s.convert(X.format,X.colorSpace),ce=s.convert(X.type),ve=w(X.internalFormat,ue,ce,X.colorSpace),Pe=L(v);P&&F(v)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Pe,ve,v.width,v.height):F(v)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Pe,ve,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,ve,v.width,v.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function U(E,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,E),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(v.depthTexture).__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),Z(v.depthTexture,0);const Y=i.get(v.depthTexture).__webglTexture,k=L(v);if(v.depthTexture.format===Cr)F(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Y,0,k):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Y,0);else if(v.depthTexture.format===zr)F(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Y,0,k):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Y,0);else throw new Error("Unknown depthTexture format")}function ie(E){const v=i.get(E),P=E.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==E.depthTexture){const Y=E.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),Y){const k=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,Y.removeEventListener("dispose",k)};Y.addEventListener("dispose",k),v.__depthDisposeCallback=k}v.__boundDepthTexture=Y}if(E.depthTexture&&!v.__autoAllocateDepthBuffer){if(P)throw new Error("target.depthTexture not supported in Cube render targets");U(v.__webglFramebuffer,E)}else if(P){v.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[Y]),v.__webglDepthbuffer[Y]===void 0)v.__webglDepthbuffer[Y]=n.createRenderbuffer(),pe(v.__webglDepthbuffer[Y],E,!1);else{const k=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,X=v.__webglDepthbuffer[Y];n.bindRenderbuffer(n.RENDERBUFFER,X),n.framebufferRenderbuffer(n.FRAMEBUFFER,k,n.RENDERBUFFER,X)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=n.createRenderbuffer(),pe(v.__webglDepthbuffer,E,!1);else{const Y=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,k=v.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,k),n.framebufferRenderbuffer(n.FRAMEBUFFER,Y,n.RENDERBUFFER,k)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function $(E,v,P){const Y=i.get(E);v!==void 0&&de(Y.__webglFramebuffer,E,E.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),P!==void 0&&ie(E)}function le(E){const v=E.texture,P=i.get(E),Y=i.get(v);E.addEventListener("dispose",C);const k=E.textures,X=E.isWebGLCubeRenderTarget===!0,ue=k.length>1;if(ue||(Y.__webglTexture===void 0&&(Y.__webglTexture=n.createTexture()),Y.__version=v.version,o.memory.textures++),X){P.__webglFramebuffer=[];for(let ce=0;ce<6;ce++)if(v.mipmaps&&v.mipmaps.length>0){P.__webglFramebuffer[ce]=[];for(let ve=0;ve<v.mipmaps.length;ve++)P.__webglFramebuffer[ce][ve]=n.createFramebuffer()}else P.__webglFramebuffer[ce]=n.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){P.__webglFramebuffer=[];for(let ce=0;ce<v.mipmaps.length;ce++)P.__webglFramebuffer[ce]=n.createFramebuffer()}else P.__webglFramebuffer=n.createFramebuffer();if(ue)for(let ce=0,ve=k.length;ce<ve;ce++){const Pe=i.get(k[ce]);Pe.__webglTexture===void 0&&(Pe.__webglTexture=n.createTexture(),o.memory.textures++)}if(E.samples>0&&F(E)===!1){P.__webglMultisampledFramebuffer=n.createFramebuffer(),P.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,P.__webglMultisampledFramebuffer);for(let ce=0;ce<k.length;ce++){const ve=k[ce];P.__webglColorRenderbuffer[ce]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,P.__webglColorRenderbuffer[ce]);const Pe=s.convert(ve.format,ve.colorSpace),fe=s.convert(ve.type),ye=w(ve.internalFormat,Pe,fe,ve.colorSpace,E.isXRRenderTarget===!0),Ue=L(E);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ue,ye,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ce,n.RENDERBUFFER,P.__webglColorRenderbuffer[ce])}n.bindRenderbuffer(n.RENDERBUFFER,null),E.depthBuffer&&(P.__webglDepthRenderbuffer=n.createRenderbuffer(),pe(P.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(X){t.bindTexture(n.TEXTURE_CUBE_MAP,Y.__webglTexture),_e(n.TEXTURE_CUBE_MAP,v);for(let ce=0;ce<6;ce++)if(v.mipmaps&&v.mipmaps.length>0)for(let ve=0;ve<v.mipmaps.length;ve++)de(P.__webglFramebuffer[ce][ve],E,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,ve);else de(P.__webglFramebuffer[ce],E,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0);m(v)&&p(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ue){for(let ce=0,ve=k.length;ce<ve;ce++){const Pe=k[ce],fe=i.get(Pe);t.bindTexture(n.TEXTURE_2D,fe.__webglTexture),_e(n.TEXTURE_2D,Pe),de(P.__webglFramebuffer,E,Pe,n.COLOR_ATTACHMENT0+ce,n.TEXTURE_2D,0),m(Pe)&&p(n.TEXTURE_2D)}t.unbindTexture()}else{let ce=n.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(ce=E.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ce,Y.__webglTexture),_e(ce,v),v.mipmaps&&v.mipmaps.length>0)for(let ve=0;ve<v.mipmaps.length;ve++)de(P.__webglFramebuffer[ve],E,v,n.COLOR_ATTACHMENT0,ce,ve);else de(P.__webglFramebuffer,E,v,n.COLOR_ATTACHMENT0,ce,0);m(v)&&p(ce),t.unbindTexture()}E.depthBuffer&&ie(E)}function Me(E){const v=E.textures;for(let P=0,Y=v.length;P<Y;P++){const k=v[P];if(m(k)){const X=E.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,ue=i.get(k).__webglTexture;t.bindTexture(X,ue),p(X),t.unbindTexture()}}}const J=[],g=[];function A(E){if(E.samples>0){if(F(E)===!1){const v=E.textures,P=E.width,Y=E.height;let k=n.COLOR_BUFFER_BIT;const X=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ue=i.get(E),ce=v.length>1;if(ce)for(let ve=0;ve<v.length;ve++)t.bindFramebuffer(n.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ve,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,ue.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ve,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,ue.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ue.__webglFramebuffer);for(let ve=0;ve<v.length;ve++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(k|=n.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(k|=n.STENCIL_BUFFER_BIT)),ce){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ue.__webglColorRenderbuffer[ve]);const Pe=i.get(v[ve]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Pe,0)}n.blitFramebuffer(0,0,P,Y,0,0,P,Y,k,n.NEAREST),l===!0&&(J.length=0,g.length=0,J.push(n.COLOR_ATTACHMENT0+ve),E.depthBuffer&&E.resolveDepthBuffer===!1&&(J.push(X),g.push(X),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,g)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,J))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ce)for(let ve=0;ve<v.length;ve++){t.bindFramebuffer(n.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ve,n.RENDERBUFFER,ue.__webglColorRenderbuffer[ve]);const Pe=i.get(v[ve]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,ue.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ve,n.TEXTURE_2D,Pe,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ue.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&l){const v=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[v])}}}function L(E){return Math.min(r.maxSamples,E.samples)}function F(E){const v=i.get(E);return E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function N(E){const v=o.render.frame;u.get(E)!==v&&(u.set(E,v),E.update())}function j(E,v){const P=E.colorSpace,Y=E.format,k=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||P!==bi&&P!==_i&&(et.getTransfer(P)===ct?(Y!==mn||k!==ni)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",P)),v}function ne(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(c.width=E.naturalWidth||E.width,c.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(c.width=E.displayWidth,c.height=E.displayHeight):(c.width=E.width,c.height=E.height),c}this.allocateTextureUnit=q,this.resetTextureUnits=b,this.setTexture2D=Z,this.setTexture2DArray=re,this.setTexture3D=G,this.setTextureCube=K,this.rebindTextures=$,this.setupRenderTarget=le,this.updateRenderTargetMipmap=Me,this.updateMultisampleRenderTarget=A,this.setupDepthRenderbuffer=ie,this.setupFrameBufferTexture=de,this.useMultisampledRTT=F}function KS(n,e){function t(i,r=_i){let s;const o=et.getTransfer(r);if(i===ni)return n.UNSIGNED_BYTE;if(i===Cc)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Pc)return n.UNSIGNED_SHORT_5_5_5_1;if(i===_d)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===md)return n.BYTE;if(i===gd)return n.SHORT;if(i===Ms)return n.UNSIGNED_SHORT;if(i===Rc)return n.INT;if(i===Xi)return n.UNSIGNED_INT;if(i===Jn)return n.FLOAT;if(i===Cs)return n.HALF_FLOAT;if(i===vd)return n.ALPHA;if(i===xd)return n.RGB;if(i===mn)return n.RGBA;if(i===yd)return n.LUMINANCE;if(i===Md)return n.LUMINANCE_ALPHA;if(i===Cr)return n.DEPTH_COMPONENT;if(i===zr)return n.DEPTH_STENCIL;if(i===Sd)return n.RED;if(i===Lc)return n.RED_INTEGER;if(i===Ed)return n.RG;if(i===Ic)return n.RG_INTEGER;if(i===Dc)return n.RGBA_INTEGER;if(i===go||i===_o||i===vo||i===xo)if(o===ct)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===go)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===_o)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===vo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===xo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===go)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===_o)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===vo)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===xo)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===wl||i===Tl||i===Al||i===Rl)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===wl)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Tl)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Al)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Rl)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Cl||i===Pl||i===Ll)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Cl||i===Pl)return o===ct?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Ll)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Il||i===Dl||i===Ul||i===Nl||i===Fl||i===Ol||i===Bl||i===zl||i===Hl||i===Gl||i===kl||i===Vl||i===Wl||i===Xl)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Il)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Dl)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Ul)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Nl)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Fl)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Ol)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Bl)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===zl)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Hl)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Gl)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===kl)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Vl)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Wl)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Xl)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===yo||i===ql||i===Yl)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===yo)return o===ct?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===ql)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Yl)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===bd||i===$l||i===Kl||i===jl)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===yo)return s.COMPRESSED_RED_RGTC1_EXT;if(i===$l)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Kl)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===jl)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Br?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}class jS extends _t{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class tn extends Lt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ZS={type:"move"};class Wa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new tn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new tn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new tn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const x of e.hand.values()){const m=t.getJointPose(x,i),p=this._getHandJoint(c,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,_=.005;c.inputState.pinching&&f>d+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(ZS)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new tn;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const JS=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,QS=`
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

}`;class eE{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const r=new Vt,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new zt({vertexShader:JS,fragmentShader:QS,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ae(new Yo(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class tE extends kr{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,f=null,d=null,_=null;const x=new eE,m=t.getContextAttributes();let p=null,w=null;const M=[],S=[],I=new Ee;let C=null;const R=new _t;R.layers.enable(1),R.viewport=new rt;const D=new _t;D.layers.enable(2),D.viewport=new rt;const se=[R,D],y=new jS;y.layers.enable(1),y.layers.enable(2);let b=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(te){let de=M[te];return de===void 0&&(de=new Wa,M[te]=de),de.getTargetRaySpace()},this.getControllerGrip=function(te){let de=M[te];return de===void 0&&(de=new Wa,M[te]=de),de.getGripSpace()},this.getHand=function(te){let de=M[te];return de===void 0&&(de=new Wa,M[te]=de),de.getHandSpace()};function V(te){const de=S.indexOf(te.inputSource);if(de===-1)return;const pe=M[de];pe!==void 0&&(pe.update(te.inputSource,te.frame,c||o),pe.dispatchEvent({type:te.type,data:te.inputSource}))}function Z(){r.removeEventListener("select",V),r.removeEventListener("selectstart",V),r.removeEventListener("selectend",V),r.removeEventListener("squeeze",V),r.removeEventListener("squeezestart",V),r.removeEventListener("squeezeend",V),r.removeEventListener("end",Z),r.removeEventListener("inputsourceschange",re);for(let te=0;te<M.length;te++){const de=S[te];de!==null&&(S[te]=null,M[te].disconnect(de))}b=null,q=null,x.reset(),e.setRenderTarget(p),d=null,f=null,h=null,r=null,w=null,ze.stop(),i.isPresenting=!1,e.setPixelRatio(C),e.setSize(I.width,I.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(te){s=te,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(te){a=te,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(te){c=te},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(te){if(r=te,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",V),r.addEventListener("selectstart",V),r.addEventListener("selectend",V),r.addEventListener("squeeze",V),r.addEventListener("squeezestart",V),r.addEventListener("squeezeend",V),r.addEventListener("end",Z),r.addEventListener("inputsourceschange",re),m.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(I),r.renderState.layers===void 0){const de={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(r,t,de),r.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),w=new qi(d.framebufferWidth,d.framebufferHeight,{format:mn,type:ni,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let de=null,pe=null,U=null;m.depth&&(U=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,de=m.stencil?zr:Cr,pe=m.stencil?Br:Xi);const ie={colorFormat:t.RGBA8,depthFormat:U,scaleFactor:s};h=new XRWebGLBinding(r,t),f=h.createProjectionLayer(ie),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),w=new qi(f.textureWidth,f.textureHeight,{format:mn,type:ni,depthTexture:new zd(f.textureWidth,f.textureHeight,pe,void 0,void 0,void 0,void 0,void 0,void 0,de),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),ze.setContext(r),ze.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function re(te){for(let de=0;de<te.removed.length;de++){const pe=te.removed[de],U=S.indexOf(pe);U>=0&&(S[U]=null,M[U].disconnect(pe))}for(let de=0;de<te.added.length;de++){const pe=te.added[de];let U=S.indexOf(pe);if(U===-1){for(let $=0;$<M.length;$++)if($>=S.length){S.push(pe),U=$;break}else if(S[$]===null){S[$]=pe,U=$;break}if(U===-1)break}const ie=M[U];ie&&ie.connect(pe)}}const G=new B,K=new B;function z(te,de,pe){G.setFromMatrixPosition(de.matrixWorld),K.setFromMatrixPosition(pe.matrixWorld);const U=G.distanceTo(K),ie=de.projectionMatrix.elements,$=pe.projectionMatrix.elements,le=ie[14]/(ie[10]-1),Me=ie[14]/(ie[10]+1),J=(ie[9]+1)/ie[5],g=(ie[9]-1)/ie[5],A=(ie[8]-1)/ie[0],L=($[8]+1)/$[0],F=le*A,N=le*L,j=U/(-A+L),ne=j*-A;if(de.matrixWorld.decompose(te.position,te.quaternion,te.scale),te.translateX(ne),te.translateZ(j),te.matrixWorld.compose(te.position,te.quaternion,te.scale),te.matrixWorldInverse.copy(te.matrixWorld).invert(),ie[10]===-1)te.projectionMatrix.copy(de.projectionMatrix),te.projectionMatrixInverse.copy(de.projectionMatrixInverse);else{const E=le+j,v=Me+j,P=F-ne,Y=N+(U-ne),k=J*Me/v*E,X=g*Me/v*E;te.projectionMatrix.makePerspective(P,Y,k,X,E,v),te.projectionMatrixInverse.copy(te.projectionMatrix).invert()}}function ge(te,de){de===null?te.matrixWorld.copy(te.matrix):te.matrixWorld.multiplyMatrices(de.matrixWorld,te.matrix),te.matrixWorldInverse.copy(te.matrixWorld).invert()}this.updateCamera=function(te){if(r===null)return;let de=te.near,pe=te.far;x.texture!==null&&(x.depthNear>0&&(de=x.depthNear),x.depthFar>0&&(pe=x.depthFar)),y.near=D.near=R.near=de,y.far=D.far=R.far=pe,(b!==y.near||q!==y.far)&&(r.updateRenderState({depthNear:y.near,depthFar:y.far}),b=y.near,q=y.far);const U=te.parent,ie=y.cameras;ge(y,U);for(let $=0;$<ie.length;$++)ge(ie[$],U);ie.length===2?z(y,R,D):y.projectionMatrix.copy(R.projectionMatrix),me(te,y,U)};function me(te,de,pe){pe===null?te.matrix.copy(de.matrixWorld):(te.matrix.copy(pe.matrixWorld),te.matrix.invert(),te.matrix.multiply(de.matrixWorld)),te.matrix.decompose(te.position,te.quaternion,te.scale),te.updateMatrixWorld(!0),te.projectionMatrix.copy(de.projectionMatrix),te.projectionMatrixInverse.copy(de.projectionMatrixInverse),te.isPerspectiveCamera&&(te.fov=Ss*2*Math.atan(1/te.projectionMatrix.elements[5]),te.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(te){l=te,f!==null&&(f.fixedFoveation=te),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=te)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(y)};let _e=null;function be(te,de){if(u=de.getViewerPose(c||o),_=de,u!==null){const pe=u.views;d!==null&&(e.setRenderTargetFramebuffer(w,d.framebuffer),e.setRenderTarget(w));let U=!1;pe.length!==y.cameras.length&&(y.cameras.length=0,U=!0);for(let $=0;$<pe.length;$++){const le=pe[$];let Me=null;if(d!==null)Me=d.getViewport(le);else{const g=h.getViewSubImage(f,le);Me=g.viewport,$===0&&(e.setRenderTargetTextures(w,g.colorTexture,f.ignoreDepthValues?void 0:g.depthStencilTexture),e.setRenderTarget(w))}let J=se[$];J===void 0&&(J=new _t,J.layers.enable($),J.viewport=new rt,se[$]=J),J.matrix.fromArray(le.transform.matrix),J.matrix.decompose(J.position,J.quaternion,J.scale),J.projectionMatrix.fromArray(le.projectionMatrix),J.projectionMatrixInverse.copy(J.projectionMatrix).invert(),J.viewport.set(Me.x,Me.y,Me.width,Me.height),$===0&&(y.matrix.copy(J.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),U===!0&&y.cameras.push(J)}const ie=r.enabledFeatures;if(ie&&ie.includes("depth-sensing")){const $=h.getDepthInformation(pe[0]);$&&$.isValid&&$.texture&&x.init(e,$,r.renderState)}}for(let pe=0;pe<M.length;pe++){const U=S[pe],ie=M[pe];U!==null&&ie!==void 0&&ie.update(U,de,c||o)}_e&&_e(te,de),de.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:de}),_=null}const ze=new Od;ze.setAnimationLoop(be),this.setAnimationLoop=function(te){_e=te},this.dispose=function(){}}}const Ui=new Pn,nE=new ut;function iE(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,Ud(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,w,M,S){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),h(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p)):p.isMeshStandardMaterial?(s(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,S)):p.isMeshMatcapMaterial?(s(m,p),_(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),x(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,w,M):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===kt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===kt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const w=e.get(p),M=w.envMap,S=w.envMapRotation;M&&(m.envMap.value=M,Ui.copy(S),Ui.x*=-1,Ui.y*=-1,Ui.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Ui.y*=-1,Ui.z*=-1),m.envMapRotation.value.setFromMatrix4(nE.makeRotationFromEuler(Ui)),m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,w,M){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*w,m.scale.value=M*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,w){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===kt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=w.texture,m.transmissionSamplerSize.value.set(w.width,w.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){const w=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(w.matrixWorld),m.nearDistance.value=w.shadow.camera.near,m.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function rE(n,e,t,i){let r={},s={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(w,M){const S=M.program;i.uniformBlockBinding(w,S)}function c(w,M){let S=r[w.id];S===void 0&&(_(w),S=u(w),r[w.id]=S,w.addEventListener("dispose",m));const I=M.program;i.updateUBOMapping(w,I);const C=e.render.frame;s[w.id]!==C&&(f(w),s[w.id]=C)}function u(w){const M=h();w.__bindingPointIndex=M;const S=n.createBuffer(),I=w.__size,C=w.usage;return n.bindBuffer(n.UNIFORM_BUFFER,S),n.bufferData(n.UNIFORM_BUFFER,I,C),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,M,S),S}function h(){for(let w=0;w<a;w++)if(o.indexOf(w)===-1)return o.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(w){const M=r[w.id],S=w.uniforms,I=w.__cache;n.bindBuffer(n.UNIFORM_BUFFER,M);for(let C=0,R=S.length;C<R;C++){const D=Array.isArray(S[C])?S[C]:[S[C]];for(let se=0,y=D.length;se<y;se++){const b=D[se];if(d(b,C,se,I)===!0){const q=b.__offset,V=Array.isArray(b.value)?b.value:[b.value];let Z=0;for(let re=0;re<V.length;re++){const G=V[re],K=x(G);typeof G=="number"||typeof G=="boolean"?(b.__data[0]=G,n.bufferSubData(n.UNIFORM_BUFFER,q+Z,b.__data)):G.isMatrix3?(b.__data[0]=G.elements[0],b.__data[1]=G.elements[1],b.__data[2]=G.elements[2],b.__data[3]=0,b.__data[4]=G.elements[3],b.__data[5]=G.elements[4],b.__data[6]=G.elements[5],b.__data[7]=0,b.__data[8]=G.elements[6],b.__data[9]=G.elements[7],b.__data[10]=G.elements[8],b.__data[11]=0):(G.toArray(b.__data,Z),Z+=K.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,q,b.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(w,M,S,I){const C=w.value,R=M+"_"+S;if(I[R]===void 0)return typeof C=="number"||typeof C=="boolean"?I[R]=C:I[R]=C.clone(),!0;{const D=I[R];if(typeof C=="number"||typeof C=="boolean"){if(D!==C)return I[R]=C,!0}else if(D.equals(C)===!1)return D.copy(C),!0}return!1}function _(w){const M=w.uniforms;let S=0;const I=16;for(let R=0,D=M.length;R<D;R++){const se=Array.isArray(M[R])?M[R]:[M[R]];for(let y=0,b=se.length;y<b;y++){const q=se[y],V=Array.isArray(q.value)?q.value:[q.value];for(let Z=0,re=V.length;Z<re;Z++){const G=V[Z],K=x(G),z=S%I,ge=z%K.boundary,me=z+ge;S+=ge,me!==0&&I-me<K.storage&&(S+=I-me),q.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),q.__offset=S,S+=K.storage}}}const C=S%I;return C>0&&(S+=I-C),w.__size=S,w.__cache={},this}function x(w){const M={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(M.boundary=4,M.storage=4):w.isVector2?(M.boundary=8,M.storage=8):w.isVector3||w.isColor?(M.boundary=16,M.storage=12):w.isVector4?(M.boundary=16,M.storage=16):w.isMatrix3?(M.boundary=48,M.storage=48):w.isMatrix4?(M.boundary=64,M.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),M}function m(w){const M=w.target;M.removeEventListener("dispose",m);const S=o.indexOf(M.__bindingPointIndex);o.splice(S,1),n.deleteBuffer(r[M.id]),delete r[M.id],delete s[M.id]}function p(){for(const w in r)n.deleteBuffer(r[w]);o=[],r={},s={}}return{bind:l,update:c,dispose:p}}class Qi{constructor(e={}){const{canvas:t=X_(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=o;const d=new Uint32Array(4),_=new Int32Array(4);let x=null,m=null;const p=[],w=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=bn,this.toneMapping=xi,this.toneMappingExposure=1;const M=this;let S=!1,I=0,C=0,R=null,D=-1,se=null;const y=new rt,b=new rt;let q=null;const V=new Ve(0);let Z=0,re=t.width,G=t.height,K=1,z=null,ge=null;const me=new rt(0,0,re,G),_e=new rt(0,0,re,G);let be=!1;const ze=new Oc;let te=!1,de=!1;const pe=new ut,U=new ut,ie=new B,$=new rt,le={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Me=!1;function J(){return R===null?K:1}let g=i;function A(T,H){return t.getContext(T,H)}try{const T={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ac}`),t.addEventListener("webglcontextlost",he,!1),t.addEventListener("webglcontextrestored",Te,!1),t.addEventListener("webglcontextcreationerror",Ce,!1),g===null){const H="webgl2";if(g=A(H,T),g===null)throw A(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let L,F,N,j,ne,E,v,P,Y,k,X,ue,ce,ve,Pe,fe,ye,Ue,Ie,we,Ye,Ne,$e,O;function Re(){L=new uM(g),L.init(),Ne=new KS(g,L),F=new rM(g,L,e,Ne),N=new qS(g),F.reverseDepthBuffer&&N.buffers.depth.setReversed(!0),j=new dM(g),ne=new LS,E=new $S(g,L,N,ne,F,Ne,j),v=new oM(M),P=new cM(M),Y=new yv(g),$e=new nM(g,Y),k=new hM(g,Y,j,$e),X=new mM(g,k,Y,j),Ie=new pM(g,F,E),fe=new sM(ne),ue=new PS(M,v,P,L,F,$e,fe),ce=new iE(M,ne),ve=new DS,Pe=new zS(L),Ue=new tM(M,v,P,N,X,f,l),ye=new WS(M,X,F),O=new rE(g,j,F,N),we=new iM(g,L,j),Ye=new fM(g,L,j),j.programs=ue.programs,M.capabilities=F,M.extensions=L,M.properties=ne,M.renderLists=ve,M.shadowMap=ye,M.state=N,M.info=j}Re();const oe=new tE(M,g);this.xr=oe,this.getContext=function(){return g},this.getContextAttributes=function(){return g.getContextAttributes()},this.forceContextLoss=function(){const T=L.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=L.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return K},this.setPixelRatio=function(T){T!==void 0&&(K=T,this.setSize(re,G,!1))},this.getSize=function(T){return T.set(re,G)},this.setSize=function(T,H,Q=!0){if(oe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}re=T,G=H,t.width=Math.floor(T*K),t.height=Math.floor(H*K),Q===!0&&(t.style.width=T+"px",t.style.height=H+"px"),this.setViewport(0,0,T,H)},this.getDrawingBufferSize=function(T){return T.set(re*K,G*K).floor()},this.setDrawingBufferSize=function(T,H,Q){re=T,G=H,K=Q,t.width=Math.floor(T*Q),t.height=Math.floor(H*Q),this.setViewport(0,0,T,H)},this.getCurrentViewport=function(T){return T.copy(y)},this.getViewport=function(T){return T.copy(me)},this.setViewport=function(T,H,Q,ee){T.isVector4?me.set(T.x,T.y,T.z,T.w):me.set(T,H,Q,ee),N.viewport(y.copy(me).multiplyScalar(K).round())},this.getScissor=function(T){return T.copy(_e)},this.setScissor=function(T,H,Q,ee){T.isVector4?_e.set(T.x,T.y,T.z,T.w):_e.set(T,H,Q,ee),N.scissor(b.copy(_e).multiplyScalar(K).round())},this.getScissorTest=function(){return be},this.setScissorTest=function(T){N.setScissorTest(be=T)},this.setOpaqueSort=function(T){z=T},this.setTransparentSort=function(T){ge=T},this.getClearColor=function(T){return T.copy(Ue.getClearColor())},this.setClearColor=function(){Ue.setClearColor.apply(Ue,arguments)},this.getClearAlpha=function(){return Ue.getClearAlpha()},this.setClearAlpha=function(){Ue.setClearAlpha.apply(Ue,arguments)},this.clear=function(T=!0,H=!0,Q=!0){let ee=0;if(T){let W=!1;if(R!==null){const xe=R.texture.format;W=xe===Dc||xe===Ic||xe===Lc}if(W){const xe=R.texture.type,Ae=xe===ni||xe===Xi||xe===Ms||xe===Br||xe===Cc||xe===Pc,Le=Ue.getClearColor(),De=Ue.getClearAlpha(),He=Le.r,Ge=Le.g,Fe=Le.b;Ae?(d[0]=He,d[1]=Ge,d[2]=Fe,d[3]=De,g.clearBufferuiv(g.COLOR,0,d)):(_[0]=He,_[1]=Ge,_[2]=Fe,_[3]=De,g.clearBufferiv(g.COLOR,0,_))}else ee|=g.COLOR_BUFFER_BIT}H&&(ee|=g.DEPTH_BUFFER_BIT,g.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),Q&&(ee|=g.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),g.clear(ee)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",he,!1),t.removeEventListener("webglcontextrestored",Te,!1),t.removeEventListener("webglcontextcreationerror",Ce,!1),ve.dispose(),Pe.dispose(),ne.dispose(),v.dispose(),P.dispose(),X.dispose(),$e.dispose(),O.dispose(),ue.dispose(),oe.dispose(),oe.removeEventListener("sessionstart",Vc),oe.removeEventListener("sessionend",Wc),Ti.stop()};function he(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function Te(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const T=j.autoReset,H=ye.enabled,Q=ye.autoUpdate,ee=ye.needsUpdate,W=ye.type;Re(),j.autoReset=T,ye.enabled=H,ye.autoUpdate=Q,ye.needsUpdate=ee,ye.type=W}function Ce(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Ke(T){const H=T.target;H.removeEventListener("dispose",Ke),mt(H)}function mt(T){Ht(T),ne.remove(T)}function Ht(T){const H=ne.get(T).programs;H!==void 0&&(H.forEach(function(Q){ue.releaseProgram(Q)}),T.isShaderMaterial&&ue.releaseShaderCache(T))}this.renderBufferDirect=function(T,H,Q,ee,W,xe){H===null&&(H=le);const Ae=W.isMesh&&W.matrixWorld.determinant()<0,Le=lp(T,H,Q,ee,W);N.setMaterial(ee,Ae);let De=Q.index,He=1;if(ee.wireframe===!0){if(De=k.getWireframeAttribute(Q),De===void 0)return;He=2}const Ge=Q.drawRange,Fe=Q.attributes.position;let nt=Ge.start*He,lt=(Ge.start+Ge.count)*He;xe!==null&&(nt=Math.max(nt,xe.start*He),lt=Math.min(lt,(xe.start+xe.count)*He)),De!==null?(nt=Math.max(nt,0),lt=Math.min(lt,De.count)):Fe!=null&&(nt=Math.max(nt,0),lt=Math.min(lt,Fe.count));const ft=lt-nt;if(ft<0||ft===1/0)return;$e.setup(W,ee,Le,Q,De);let Wt,Ze=we;if(De!==null&&(Wt=Y.get(De),Ze=Ye,Ze.setIndex(Wt)),W.isMesh)ee.wireframe===!0?(N.setLineWidth(ee.wireframeLinewidth*J()),Ze.setMode(g.LINES)):Ze.setMode(g.TRIANGLES);else if(W.isLine){let Oe=ee.linewidth;Oe===void 0&&(Oe=1),N.setLineWidth(Oe*J()),W.isLineSegments?Ze.setMode(g.LINES):W.isLineLoop?Ze.setMode(g.LINE_LOOP):Ze.setMode(g.LINE_STRIP)}else W.isPoints?Ze.setMode(g.POINTS):W.isSprite&&Ze.setMode(g.TRIANGLES);if(W.isBatchedMesh)if(W._multiDrawInstances!==null)Ze.renderMultiDrawInstances(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount,W._multiDrawInstances);else if(L.get("WEBGL_multi_draw"))Ze.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{const Oe=W._multiDrawStarts,Et=W._multiDrawCounts,Je=W._multiDrawCount,ln=De?Y.get(De).bytesPerElement:1,ir=ne.get(ee).currentProgram.getUniforms();for(let Xt=0;Xt<Je;Xt++)ir.setValue(g,"_gl_DrawID",Xt),Ze.render(Oe[Xt]/ln,Et[Xt])}else if(W.isInstancedMesh)Ze.renderInstances(nt,ft,W.count);else if(Q.isInstancedBufferGeometry){const Oe=Q._maxInstanceCount!==void 0?Q._maxInstanceCount:1/0,Et=Math.min(Q.instanceCount,Oe);Ze.renderInstances(nt,ft,Et)}else Ze.render(nt,ft)};function je(T,H,Q){T.transparent===!0&&T.side===Zn&&T.forceSinglePass===!1?(T.side=kt,T.needsUpdate=!0,Ns(T,H,Q),T.side=Mi,T.needsUpdate=!0,Ns(T,H,Q),T.side=Zn):Ns(T,H,Q)}this.compile=function(T,H,Q=null){Q===null&&(Q=T),m=Pe.get(Q),m.init(H),w.push(m),Q.traverseVisible(function(W){W.isLight&&W.layers.test(H.layers)&&(m.pushLight(W),W.castShadow&&m.pushShadow(W))}),T!==Q&&T.traverseVisible(function(W){W.isLight&&W.layers.test(H.layers)&&(m.pushLight(W),W.castShadow&&m.pushShadow(W))}),m.setupLights();const ee=new Set;return T.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;const xe=W.material;if(xe)if(Array.isArray(xe))for(let Ae=0;Ae<xe.length;Ae++){const Le=xe[Ae];je(Le,Q,W),ee.add(Le)}else je(xe,Q,W),ee.add(xe)}),w.pop(),m=null,ee},this.compileAsync=function(T,H,Q=null){const ee=this.compile(T,H,Q);return new Promise(W=>{function xe(){if(ee.forEach(function(Ae){ne.get(Ae).currentProgram.isReady()&&ee.delete(Ae)}),ee.size===0){W(T);return}setTimeout(xe,10)}L.get("KHR_parallel_shader_compile")!==null?xe():setTimeout(xe,10)})};let Gt=null;function Fn(T){Gt&&Gt(T)}function Vc(){Ti.stop()}function Wc(){Ti.start()}const Ti=new Od;Ti.setAnimationLoop(Fn),typeof self<"u"&&Ti.setContext(self),this.setAnimationLoop=function(T){Gt=T,oe.setAnimationLoop(T),T===null?Ti.stop():Ti.start()},oe.addEventListener("sessionstart",Vc),oe.addEventListener("sessionend",Wc),this.render=function(T,H){if(H!==void 0&&H.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),oe.enabled===!0&&oe.isPresenting===!0&&(oe.cameraAutoUpdate===!0&&oe.updateCamera(H),H=oe.getCamera()),T.isScene===!0&&T.onBeforeRender(M,T,H,R),m=Pe.get(T,w.length),m.init(H),w.push(m),U.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),ze.setFromProjectionMatrix(U),de=this.localClippingEnabled,te=fe.init(this.clippingPlanes,de),x=ve.get(T,p.length),x.init(),p.push(x),oe.enabled===!0&&oe.isPresenting===!0){const xe=M.xr.getDepthSensingMesh();xe!==null&&Jo(xe,H,-1/0,M.sortObjects)}Jo(T,H,0,M.sortObjects),x.finish(),M.sortObjects===!0&&x.sort(z,ge),Me=oe.enabled===!1||oe.isPresenting===!1||oe.hasDepthSensing()===!1,Me&&Ue.addToRenderList(x,T),this.info.render.frame++,te===!0&&fe.beginShadows();const Q=m.state.shadowsArray;ye.render(Q,T,H),te===!0&&fe.endShadows(),this.info.autoReset===!0&&this.info.reset();const ee=x.opaque,W=x.transmissive;if(m.setupLights(),H.isArrayCamera){const xe=H.cameras;if(W.length>0)for(let Ae=0,Le=xe.length;Ae<Le;Ae++){const De=xe[Ae];qc(ee,W,T,De)}Me&&Ue.render(T);for(let Ae=0,Le=xe.length;Ae<Le;Ae++){const De=xe[Ae];Xc(x,T,De,De.viewport)}}else W.length>0&&qc(ee,W,T,H),Me&&Ue.render(T),Xc(x,T,H);R!==null&&(E.updateMultisampleRenderTarget(R),E.updateRenderTargetMipmap(R)),T.isScene===!0&&T.onAfterRender(M,T,H),$e.resetDefaultState(),D=-1,se=null,w.pop(),w.length>0?(m=w[w.length-1],te===!0&&fe.setGlobalState(M.clippingPlanes,m.state.camera)):m=null,p.pop(),p.length>0?x=p[p.length-1]:x=null};function Jo(T,H,Q,ee){if(T.visible===!1)return;if(T.layers.test(H.layers)){if(T.isGroup)Q=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(H);else if(T.isLight)m.pushLight(T),T.castShadow&&m.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||ze.intersectsSprite(T)){ee&&$.setFromMatrixPosition(T.matrixWorld).applyMatrix4(U);const Ae=X.update(T),Le=T.material;Le.visible&&x.push(T,Ae,Le,Q,$.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||ze.intersectsObject(T))){const Ae=X.update(T),Le=T.material;if(ee&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),$.copy(T.boundingSphere.center)):(Ae.boundingSphere===null&&Ae.computeBoundingSphere(),$.copy(Ae.boundingSphere.center)),$.applyMatrix4(T.matrixWorld).applyMatrix4(U)),Array.isArray(Le)){const De=Ae.groups;for(let He=0,Ge=De.length;He<Ge;He++){const Fe=De[He],nt=Le[Fe.materialIndex];nt&&nt.visible&&x.push(T,Ae,nt,Q,$.z,Fe)}}else Le.visible&&x.push(T,Ae,Le,Q,$.z,null)}}const xe=T.children;for(let Ae=0,Le=xe.length;Ae<Le;Ae++)Jo(xe[Ae],H,Q,ee)}function Xc(T,H,Q,ee){const W=T.opaque,xe=T.transmissive,Ae=T.transparent;m.setupLightsView(Q),te===!0&&fe.setGlobalState(M.clippingPlanes,Q),ee&&N.viewport(y.copy(ee)),W.length>0&&Us(W,H,Q),xe.length>0&&Us(xe,H,Q),Ae.length>0&&Us(Ae,H,Q),N.buffers.depth.setTest(!0),N.buffers.depth.setMask(!0),N.buffers.color.setMask(!0),N.setPolygonOffset(!1)}function qc(T,H,Q,ee){if((Q.isScene===!0?Q.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[ee.id]===void 0&&(m.state.transmissionRenderTarget[ee.id]=new qi(1,1,{generateMipmaps:!0,type:L.has("EXT_color_buffer_half_float")||L.has("EXT_color_buffer_float")?Cs:ni,minFilter:Gi,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:et.workingColorSpace}));const xe=m.state.transmissionRenderTarget[ee.id],Ae=ee.viewport||y;xe.setSize(Ae.z,Ae.w);const Le=M.getRenderTarget();M.setRenderTarget(xe),M.getClearColor(V),Z=M.getClearAlpha(),Z<1&&M.setClearColor(16777215,.5),M.clear(),Me&&Ue.render(Q);const De=M.toneMapping;M.toneMapping=xi;const He=ee.viewport;if(ee.viewport!==void 0&&(ee.viewport=void 0),m.setupLightsView(ee),te===!0&&fe.setGlobalState(M.clippingPlanes,ee),Us(T,Q,ee),E.updateMultisampleRenderTarget(xe),E.updateRenderTargetMipmap(xe),L.has("WEBGL_multisampled_render_to_texture")===!1){let Ge=!1;for(let Fe=0,nt=H.length;Fe<nt;Fe++){const lt=H[Fe],ft=lt.object,Wt=lt.geometry,Ze=lt.material,Oe=lt.group;if(Ze.side===Zn&&ft.layers.test(ee.layers)){const Et=Ze.side;Ze.side=kt,Ze.needsUpdate=!0,Yc(ft,Q,ee,Wt,Ze,Oe),Ze.side=Et,Ze.needsUpdate=!0,Ge=!0}}Ge===!0&&(E.updateMultisampleRenderTarget(xe),E.updateRenderTargetMipmap(xe))}M.setRenderTarget(Le),M.setClearColor(V,Z),He!==void 0&&(ee.viewport=He),M.toneMapping=De}function Us(T,H,Q){const ee=H.isScene===!0?H.overrideMaterial:null;for(let W=0,xe=T.length;W<xe;W++){const Ae=T[W],Le=Ae.object,De=Ae.geometry,He=ee===null?Ae.material:ee,Ge=Ae.group;Le.layers.test(Q.layers)&&Yc(Le,H,Q,De,He,Ge)}}function Yc(T,H,Q,ee,W,xe){T.onBeforeRender(M,H,Q,ee,W,xe),T.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),W.onBeforeRender(M,H,Q,ee,T,xe),W.transparent===!0&&W.side===Zn&&W.forceSinglePass===!1?(W.side=kt,W.needsUpdate=!0,M.renderBufferDirect(Q,H,ee,W,T,xe),W.side=Mi,W.needsUpdate=!0,M.renderBufferDirect(Q,H,ee,W,T,xe),W.side=Zn):M.renderBufferDirect(Q,H,ee,W,T,xe),T.onAfterRender(M,H,Q,ee,W,xe)}function Ns(T,H,Q){H.isScene!==!0&&(H=le);const ee=ne.get(T),W=m.state.lights,xe=m.state.shadowsArray,Ae=W.state.version,Le=ue.getParameters(T,W.state,xe,H,Q),De=ue.getProgramCacheKey(Le);let He=ee.programs;ee.environment=T.isMeshStandardMaterial?H.environment:null,ee.fog=H.fog,ee.envMap=(T.isMeshStandardMaterial?P:v).get(T.envMap||ee.environment),ee.envMapRotation=ee.environment!==null&&T.envMap===null?H.environmentRotation:T.envMapRotation,He===void 0&&(T.addEventListener("dispose",Ke),He=new Map,ee.programs=He);let Ge=He.get(De);if(Ge!==void 0){if(ee.currentProgram===Ge&&ee.lightsStateVersion===Ae)return Kc(T,Le),Ge}else Le.uniforms=ue.getUniforms(T),T.onBeforeCompile(Le,M),Ge=ue.acquireProgram(Le,De),He.set(De,Ge),ee.uniforms=Le.uniforms;const Fe=ee.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Fe.clippingPlanes=fe.uniform),Kc(T,Le),ee.needsLights=up(T),ee.lightsStateVersion=Ae,ee.needsLights&&(Fe.ambientLightColor.value=W.state.ambient,Fe.lightProbe.value=W.state.probe,Fe.directionalLights.value=W.state.directional,Fe.directionalLightShadows.value=W.state.directionalShadow,Fe.spotLights.value=W.state.spot,Fe.spotLightShadows.value=W.state.spotShadow,Fe.rectAreaLights.value=W.state.rectArea,Fe.ltc_1.value=W.state.rectAreaLTC1,Fe.ltc_2.value=W.state.rectAreaLTC2,Fe.pointLights.value=W.state.point,Fe.pointLightShadows.value=W.state.pointShadow,Fe.hemisphereLights.value=W.state.hemi,Fe.directionalShadowMap.value=W.state.directionalShadowMap,Fe.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Fe.spotShadowMap.value=W.state.spotShadowMap,Fe.spotLightMatrix.value=W.state.spotLightMatrix,Fe.spotLightMap.value=W.state.spotLightMap,Fe.pointShadowMap.value=W.state.pointShadowMap,Fe.pointShadowMatrix.value=W.state.pointShadowMatrix),ee.currentProgram=Ge,ee.uniformsList=null,Ge}function $c(T){if(T.uniformsList===null){const H=T.currentProgram.getUniforms();T.uniformsList=So.seqWithValue(H.seq,T.uniforms)}return T.uniformsList}function Kc(T,H){const Q=ne.get(T);Q.outputColorSpace=H.outputColorSpace,Q.batching=H.batching,Q.batchingColor=H.batchingColor,Q.instancing=H.instancing,Q.instancingColor=H.instancingColor,Q.instancingMorph=H.instancingMorph,Q.skinning=H.skinning,Q.morphTargets=H.morphTargets,Q.morphNormals=H.morphNormals,Q.morphColors=H.morphColors,Q.morphTargetsCount=H.morphTargetsCount,Q.numClippingPlanes=H.numClippingPlanes,Q.numIntersection=H.numClipIntersection,Q.vertexAlphas=H.vertexAlphas,Q.vertexTangents=H.vertexTangents,Q.toneMapping=H.toneMapping}function lp(T,H,Q,ee,W){H.isScene!==!0&&(H=le),E.resetTextureUnits();const xe=H.fog,Ae=ee.isMeshStandardMaterial?H.environment:null,Le=R===null?M.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:bi,De=(ee.isMeshStandardMaterial?P:v).get(ee.envMap||Ae),He=ee.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,Ge=!!Q.attributes.tangent&&(!!ee.normalMap||ee.anisotropy>0),Fe=!!Q.morphAttributes.position,nt=!!Q.morphAttributes.normal,lt=!!Q.morphAttributes.color;let ft=xi;ee.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(ft=M.toneMapping);const Wt=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,Ze=Wt!==void 0?Wt.length:0,Oe=ne.get(ee),Et=m.state.lights;if(te===!0&&(de===!0||T!==se)){const Zt=T===se&&ee.id===D;fe.setState(ee,T,Zt)}let Je=!1;ee.version===Oe.__version?(Oe.needsLights&&Oe.lightsStateVersion!==Et.state.version||Oe.outputColorSpace!==Le||W.isBatchedMesh&&Oe.batching===!1||!W.isBatchedMesh&&Oe.batching===!0||W.isBatchedMesh&&Oe.batchingColor===!0&&W.colorTexture===null||W.isBatchedMesh&&Oe.batchingColor===!1&&W.colorTexture!==null||W.isInstancedMesh&&Oe.instancing===!1||!W.isInstancedMesh&&Oe.instancing===!0||W.isSkinnedMesh&&Oe.skinning===!1||!W.isSkinnedMesh&&Oe.skinning===!0||W.isInstancedMesh&&Oe.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&Oe.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&Oe.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&Oe.instancingMorph===!1&&W.morphTexture!==null||Oe.envMap!==De||ee.fog===!0&&Oe.fog!==xe||Oe.numClippingPlanes!==void 0&&(Oe.numClippingPlanes!==fe.numPlanes||Oe.numIntersection!==fe.numIntersection)||Oe.vertexAlphas!==He||Oe.vertexTangents!==Ge||Oe.morphTargets!==Fe||Oe.morphNormals!==nt||Oe.morphColors!==lt||Oe.toneMapping!==ft||Oe.morphTargetsCount!==Ze)&&(Je=!0):(Je=!0,Oe.__version=ee.version);let ln=Oe.currentProgram;Je===!0&&(ln=Ns(ee,H,W));let ir=!1,Xt=!1,Qo=!1;const dt=ln.getUniforms(),ri=Oe.uniforms;if(N.useProgram(ln.program)&&(ir=!0,Xt=!0,Qo=!0),ee.id!==D&&(D=ee.id,Xt=!0),ir||se!==T){F.reverseDepthBuffer?(pe.copy(T.projectionMatrix),Y_(pe),$_(pe),dt.setValue(g,"projectionMatrix",pe)):dt.setValue(g,"projectionMatrix",T.projectionMatrix),dt.setValue(g,"viewMatrix",T.matrixWorldInverse);const Zt=dt.map.cameraPosition;Zt!==void 0&&Zt.setValue(g,ie.setFromMatrixPosition(T.matrixWorld)),F.logarithmicDepthBuffer&&dt.setValue(g,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(ee.isMeshPhongMaterial||ee.isMeshToonMaterial||ee.isMeshLambertMaterial||ee.isMeshBasicMaterial||ee.isMeshStandardMaterial||ee.isShaderMaterial)&&dt.setValue(g,"isOrthographic",T.isOrthographicCamera===!0),se!==T&&(se=T,Xt=!0,Qo=!0)}if(W.isSkinnedMesh){dt.setOptional(g,W,"bindMatrix"),dt.setOptional(g,W,"bindMatrixInverse");const Zt=W.skeleton;Zt&&(Zt.boneTexture===null&&Zt.computeBoneTexture(),dt.setValue(g,"boneTexture",Zt.boneTexture,E))}W.isBatchedMesh&&(dt.setOptional(g,W,"batchingTexture"),dt.setValue(g,"batchingTexture",W._matricesTexture,E),dt.setOptional(g,W,"batchingIdTexture"),dt.setValue(g,"batchingIdTexture",W._indirectTexture,E),dt.setOptional(g,W,"batchingColorTexture"),W._colorsTexture!==null&&dt.setValue(g,"batchingColorTexture",W._colorsTexture,E));const ea=Q.morphAttributes;if((ea.position!==void 0||ea.normal!==void 0||ea.color!==void 0)&&Ie.update(W,Q,ln),(Xt||Oe.receiveShadow!==W.receiveShadow)&&(Oe.receiveShadow=W.receiveShadow,dt.setValue(g,"receiveShadow",W.receiveShadow)),ee.isMeshGouraudMaterial&&ee.envMap!==null&&(ri.envMap.value=De,ri.flipEnvMap.value=De.isCubeTexture&&De.isRenderTargetTexture===!1?-1:1),ee.isMeshStandardMaterial&&ee.envMap===null&&H.environment!==null&&(ri.envMapIntensity.value=H.environmentIntensity),Xt&&(dt.setValue(g,"toneMappingExposure",M.toneMappingExposure),Oe.needsLights&&cp(ri,Qo),xe&&ee.fog===!0&&ce.refreshFogUniforms(ri,xe),ce.refreshMaterialUniforms(ri,ee,K,G,m.state.transmissionRenderTarget[T.id]),So.upload(g,$c(Oe),ri,E)),ee.isShaderMaterial&&ee.uniformsNeedUpdate===!0&&(So.upload(g,$c(Oe),ri,E),ee.uniformsNeedUpdate=!1),ee.isSpriteMaterial&&dt.setValue(g,"center",W.center),dt.setValue(g,"modelViewMatrix",W.modelViewMatrix),dt.setValue(g,"normalMatrix",W.normalMatrix),dt.setValue(g,"modelMatrix",W.matrixWorld),ee.isShaderMaterial||ee.isRawShaderMaterial){const Zt=ee.uniformsGroups;for(let ta=0,hp=Zt.length;ta<hp;ta++){const jc=Zt[ta];O.update(jc,ln),O.bind(jc,ln)}}return ln}function cp(T,H){T.ambientLightColor.needsUpdate=H,T.lightProbe.needsUpdate=H,T.directionalLights.needsUpdate=H,T.directionalLightShadows.needsUpdate=H,T.pointLights.needsUpdate=H,T.pointLightShadows.needsUpdate=H,T.spotLights.needsUpdate=H,T.spotLightShadows.needsUpdate=H,T.rectAreaLights.needsUpdate=H,T.hemisphereLights.needsUpdate=H}function up(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(T,H,Q){ne.get(T.texture).__webglTexture=H,ne.get(T.depthTexture).__webglTexture=Q;const ee=ne.get(T);ee.__hasExternalTextures=!0,ee.__autoAllocateDepthBuffer=Q===void 0,ee.__autoAllocateDepthBuffer||L.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ee.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,H){const Q=ne.get(T);Q.__webglFramebuffer=H,Q.__useDefaultFramebuffer=H===void 0},this.setRenderTarget=function(T,H=0,Q=0){R=T,I=H,C=Q;let ee=!0,W=null,xe=!1,Ae=!1;if(T){const De=ne.get(T);if(De.__useDefaultFramebuffer!==void 0)N.bindFramebuffer(g.FRAMEBUFFER,null),ee=!1;else if(De.__webglFramebuffer===void 0)E.setupRenderTarget(T);else if(De.__hasExternalTextures)E.rebindTextures(T,ne.get(T.texture).__webglTexture,ne.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const Fe=T.depthTexture;if(De.__boundDepthTexture!==Fe){if(Fe!==null&&ne.has(Fe)&&(T.width!==Fe.image.width||T.height!==Fe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");E.setupDepthRenderbuffer(T)}}const He=T.texture;(He.isData3DTexture||He.isDataArrayTexture||He.isCompressedArrayTexture)&&(Ae=!0);const Ge=ne.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Ge[H])?W=Ge[H][Q]:W=Ge[H],xe=!0):T.samples>0&&E.useMultisampledRTT(T)===!1?W=ne.get(T).__webglMultisampledFramebuffer:Array.isArray(Ge)?W=Ge[Q]:W=Ge,y.copy(T.viewport),b.copy(T.scissor),q=T.scissorTest}else y.copy(me).multiplyScalar(K).floor(),b.copy(_e).multiplyScalar(K).floor(),q=be;if(N.bindFramebuffer(g.FRAMEBUFFER,W)&&ee&&N.drawBuffers(T,W),N.viewport(y),N.scissor(b),N.setScissorTest(q),xe){const De=ne.get(T.texture);g.framebufferTexture2D(g.FRAMEBUFFER,g.COLOR_ATTACHMENT0,g.TEXTURE_CUBE_MAP_POSITIVE_X+H,De.__webglTexture,Q)}else if(Ae){const De=ne.get(T.texture),He=H||0;g.framebufferTextureLayer(g.FRAMEBUFFER,g.COLOR_ATTACHMENT0,De.__webglTexture,Q||0,He)}D=-1},this.readRenderTargetPixels=function(T,H,Q,ee,W,xe,Ae){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Le=ne.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ae!==void 0&&(Le=Le[Ae]),Le){N.bindFramebuffer(g.FRAMEBUFFER,Le);try{const De=T.texture,He=De.format,Ge=De.type;if(!F.textureFormatReadable(He)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!F.textureTypeReadable(Ge)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=T.width-ee&&Q>=0&&Q<=T.height-W&&g.readPixels(H,Q,ee,W,Ne.convert(He),Ne.convert(Ge),xe)}finally{const De=R!==null?ne.get(R).__webglFramebuffer:null;N.bindFramebuffer(g.FRAMEBUFFER,De)}}},this.readRenderTargetPixelsAsync=async function(T,H,Q,ee,W,xe,Ae){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Le=ne.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ae!==void 0&&(Le=Le[Ae]),Le){const De=T.texture,He=De.format,Ge=De.type;if(!F.textureFormatReadable(He))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!F.textureTypeReadable(Ge))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(H>=0&&H<=T.width-ee&&Q>=0&&Q<=T.height-W){N.bindFramebuffer(g.FRAMEBUFFER,Le);const Fe=g.createBuffer();g.bindBuffer(g.PIXEL_PACK_BUFFER,Fe),g.bufferData(g.PIXEL_PACK_BUFFER,xe.byteLength,g.STREAM_READ),g.readPixels(H,Q,ee,W,Ne.convert(He),Ne.convert(Ge),0);const nt=R!==null?ne.get(R).__webglFramebuffer:null;N.bindFramebuffer(g.FRAMEBUFFER,nt);const lt=g.fenceSync(g.SYNC_GPU_COMMANDS_COMPLETE,0);return g.flush(),await q_(g,lt,4),g.bindBuffer(g.PIXEL_PACK_BUFFER,Fe),g.getBufferSubData(g.PIXEL_PACK_BUFFER,0,xe),g.deleteBuffer(Fe),g.deleteSync(lt),xe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(T,H=null,Q=0){T.isTexture!==!0&&(Mo("WebGLRenderer: copyFramebufferToTexture function signature has changed."),H=arguments[0]||null,T=arguments[1]);const ee=Math.pow(2,-Q),W=Math.floor(T.image.width*ee),xe=Math.floor(T.image.height*ee),Ae=H!==null?H.x:0,Le=H!==null?H.y:0;E.setTexture2D(T,0),g.copyTexSubImage2D(g.TEXTURE_2D,Q,0,0,Ae,Le,W,xe),N.unbindTexture()},this.copyTextureToTexture=function(T,H,Q=null,ee=null,W=0){T.isTexture!==!0&&(Mo("WebGLRenderer: copyTextureToTexture function signature has changed."),ee=arguments[0]||null,T=arguments[1],H=arguments[2],W=arguments[3]||0,Q=null);let xe,Ae,Le,De,He,Ge;Q!==null?(xe=Q.max.x-Q.min.x,Ae=Q.max.y-Q.min.y,Le=Q.min.x,De=Q.min.y):(xe=T.image.width,Ae=T.image.height,Le=0,De=0),ee!==null?(He=ee.x,Ge=ee.y):(He=0,Ge=0);const Fe=Ne.convert(H.format),nt=Ne.convert(H.type);E.setTexture2D(H,0),g.pixelStorei(g.UNPACK_FLIP_Y_WEBGL,H.flipY),g.pixelStorei(g.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),g.pixelStorei(g.UNPACK_ALIGNMENT,H.unpackAlignment);const lt=g.getParameter(g.UNPACK_ROW_LENGTH),ft=g.getParameter(g.UNPACK_IMAGE_HEIGHT),Wt=g.getParameter(g.UNPACK_SKIP_PIXELS),Ze=g.getParameter(g.UNPACK_SKIP_ROWS),Oe=g.getParameter(g.UNPACK_SKIP_IMAGES),Et=T.isCompressedTexture?T.mipmaps[W]:T.image;g.pixelStorei(g.UNPACK_ROW_LENGTH,Et.width),g.pixelStorei(g.UNPACK_IMAGE_HEIGHT,Et.height),g.pixelStorei(g.UNPACK_SKIP_PIXELS,Le),g.pixelStorei(g.UNPACK_SKIP_ROWS,De),T.isDataTexture?g.texSubImage2D(g.TEXTURE_2D,W,He,Ge,xe,Ae,Fe,nt,Et.data):T.isCompressedTexture?g.compressedTexSubImage2D(g.TEXTURE_2D,W,He,Ge,Et.width,Et.height,Fe,Et.data):g.texSubImage2D(g.TEXTURE_2D,W,He,Ge,xe,Ae,Fe,nt,Et),g.pixelStorei(g.UNPACK_ROW_LENGTH,lt),g.pixelStorei(g.UNPACK_IMAGE_HEIGHT,ft),g.pixelStorei(g.UNPACK_SKIP_PIXELS,Wt),g.pixelStorei(g.UNPACK_SKIP_ROWS,Ze),g.pixelStorei(g.UNPACK_SKIP_IMAGES,Oe),W===0&&H.generateMipmaps&&g.generateMipmap(g.TEXTURE_2D),N.unbindTexture()},this.copyTextureToTexture3D=function(T,H,Q=null,ee=null,W=0){T.isTexture!==!0&&(Mo("WebGLRenderer: copyTextureToTexture3D function signature has changed."),Q=arguments[0]||null,ee=arguments[1]||null,T=arguments[2],H=arguments[3],W=arguments[4]||0);let xe,Ae,Le,De,He,Ge,Fe,nt,lt;const ft=T.isCompressedTexture?T.mipmaps[W]:T.image;Q!==null?(xe=Q.max.x-Q.min.x,Ae=Q.max.y-Q.min.y,Le=Q.max.z-Q.min.z,De=Q.min.x,He=Q.min.y,Ge=Q.min.z):(xe=ft.width,Ae=ft.height,Le=ft.depth,De=0,He=0,Ge=0),ee!==null?(Fe=ee.x,nt=ee.y,lt=ee.z):(Fe=0,nt=0,lt=0);const Wt=Ne.convert(H.format),Ze=Ne.convert(H.type);let Oe;if(H.isData3DTexture)E.setTexture3D(H,0),Oe=g.TEXTURE_3D;else if(H.isDataArrayTexture||H.isCompressedArrayTexture)E.setTexture2DArray(H,0),Oe=g.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}g.pixelStorei(g.UNPACK_FLIP_Y_WEBGL,H.flipY),g.pixelStorei(g.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),g.pixelStorei(g.UNPACK_ALIGNMENT,H.unpackAlignment);const Et=g.getParameter(g.UNPACK_ROW_LENGTH),Je=g.getParameter(g.UNPACK_IMAGE_HEIGHT),ln=g.getParameter(g.UNPACK_SKIP_PIXELS),ir=g.getParameter(g.UNPACK_SKIP_ROWS),Xt=g.getParameter(g.UNPACK_SKIP_IMAGES);g.pixelStorei(g.UNPACK_ROW_LENGTH,ft.width),g.pixelStorei(g.UNPACK_IMAGE_HEIGHT,ft.height),g.pixelStorei(g.UNPACK_SKIP_PIXELS,De),g.pixelStorei(g.UNPACK_SKIP_ROWS,He),g.pixelStorei(g.UNPACK_SKIP_IMAGES,Ge),T.isDataTexture||T.isData3DTexture?g.texSubImage3D(Oe,W,Fe,nt,lt,xe,Ae,Le,Wt,Ze,ft.data):H.isCompressedArrayTexture?g.compressedTexSubImage3D(Oe,W,Fe,nt,lt,xe,Ae,Le,Wt,ft.data):g.texSubImage3D(Oe,W,Fe,nt,lt,xe,Ae,Le,Wt,Ze,ft),g.pixelStorei(g.UNPACK_ROW_LENGTH,Et),g.pixelStorei(g.UNPACK_IMAGE_HEIGHT,Je),g.pixelStorei(g.UNPACK_SKIP_PIXELS,ln),g.pixelStorei(g.UNPACK_SKIP_ROWS,ir),g.pixelStorei(g.UNPACK_SKIP_IMAGES,Xt),W===0&&H.generateMipmaps&&g.generateMipmap(Oe),N.unbindTexture()},this.initRenderTarget=function(T){ne.get(T).__webglFramebuffer===void 0&&E.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?E.setTextureCube(T,0):T.isData3DTexture?E.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?E.setTexture2DArray(T,0):E.setTexture2D(T,0),N.unbindTexture()},this.resetState=function(){I=0,C=0,R=null,N.reset(),$e.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Qn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Uc?"display-p3":"srgb",t.unpackColorSpace=et.workingColorSpace===qo?"display-p3":"srgb"}}class er extends Lt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Pn,this.environmentIntensity=1,this.environmentRotation=new Pn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Nn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,r=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),s+=i.distanceTo(r),t.push(s),r=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const i=this.getLengths();let r=0;const s=i.length;let o;t?o=t:o=e*i[s-1];let a=0,l=s-1,c;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),c=i[r]-o,c<0)a=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,i[r]===o)return r/(s-1);const u=i[r],f=i[r+1]-u,d=(o-u)/f;return(r+d)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),l=t||(o.isVector2?new Ee:new B);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){const i=new B,r=[],s=[],o=[],a=new B,l=new ut;for(let d=0;d<=e;d++){const _=d/e;r[d]=this.getTangentAt(_,new B)}s[0]=new B,o[0]=new B;let c=Number.MAX_VALUE;const u=Math.abs(r[0].x),h=Math.abs(r[0].y),f=Math.abs(r[0].z);u<=c&&(c=u,i.set(1,0,0)),h<=c&&(c=h,i.set(0,1,0)),f<=c&&i.set(0,0,1),a.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let d=1;d<=e;d++){if(s[d]=s[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(r[d-1],r[d]),a.length()>Number.EPSILON){a.normalize();const _=Math.acos(Mt(r[d-1].dot(r[d]),-1,1));s[d].applyMatrix4(l.makeRotationAxis(a,_))}o[d].crossVectors(r[d],s[d])}if(t===!0){let d=Math.acos(Mt(s[0].dot(s[e]),-1,1));d/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(d=-d);for(let _=1;_<=e;_++)s[_].applyMatrix4(l.makeRotationAxis(r[_],d*_)),o[_].crossVectors(r[_],s[_])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class zc extends Nn{constructor(e=0,t=0,i=1,r=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new Ee){const i=t,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const a=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*u-d*h+this.aX,c=f*h+d*u+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class sE extends zc{constructor(e,t,i,r,s,o){super(e,t,i,i,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Hc(){let n=0,e=0,t=0,i=0;function r(s,o,a,l){n=s,e=a,t=-3*s+3*o-2*a-l,i=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){r(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,u,h){let f=(o-s)/c-(a-s)/(c+u)+(a-o)/u,d=(a-o)/u-(l-o)/(u+h)+(l-a)/h;f*=u,d*=u,r(o,a,f,d)},calc:function(s){const o=s*s,a=o*s;return n+e*s+t*o+i*a}}}const co=new B,Xa=new Hc,qa=new Hc,Ya=new Hc;class oE extends Nn{constructor(e=[],t=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=r}getPoint(e,t=new B){const i=t,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,u;this.closed||a>0?c=r[(a-1)%s]:(co.subVectors(r[0],r[1]).add(r[0]),c=co);const h=r[a%s],f=r[(a+1)%s];if(this.closed||a+2<s?u=r[(a+2)%s]:(co.subVectors(r[s-1],r[s-2]).add(r[s-1]),u=co),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let _=Math.pow(c.distanceToSquared(h),d),x=Math.pow(h.distanceToSquared(f),d),m=Math.pow(f.distanceToSquared(u),d);x<1e-4&&(x=1),_<1e-4&&(_=x),m<1e-4&&(m=x),Xa.initNonuniformCatmullRom(c.x,h.x,f.x,u.x,_,x,m),qa.initNonuniformCatmullRom(c.y,h.y,f.y,u.y,_,x,m),Ya.initNonuniformCatmullRom(c.z,h.z,f.z,u.z,_,x,m)}else this.curveType==="catmullrom"&&(Xa.initCatmullRom(c.x,h.x,f.x,u.x,this.tension),qa.initCatmullRom(c.y,h.y,f.y,u.y,this.tension),Ya.initCatmullRom(c.z,h.z,f.z,u.z,this.tension));return i.set(Xa.calc(l),qa.calc(l),Ya.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(new B().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function kh(n,e,t,i,r){const s=(i-e)*.5,o=(r-t)*.5,a=n*n,l=n*a;return(2*t-2*i+s+o)*l+(-3*t+3*i-2*s-o)*a+s*n+t}function aE(n,e){const t=1-n;return t*t*e}function lE(n,e){return 2*(1-n)*n*e}function cE(n,e){return n*n*e}function hs(n,e,t,i){return aE(n,e)+lE(n,t)+cE(n,i)}function uE(n,e){const t=1-n;return t*t*t*e}function hE(n,e){const t=1-n;return 3*t*t*n*e}function fE(n,e){return 3*(1-n)*n*n*e}function dE(n,e){return n*n*n*e}function fs(n,e,t,i,r){return uE(n,e)+hE(n,t)+fE(n,i)+dE(n,r)}class Wd extends Nn{constructor(e=new Ee,t=new Ee,i=new Ee,r=new Ee){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new Ee){const i=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(fs(e,r.x,s.x,o.x,a.x),fs(e,r.y,s.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class pE extends Nn{constructor(e=new B,t=new B,i=new B,r=new B){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new B){const i=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(fs(e,r.x,s.x,o.x,a.x),fs(e,r.y,s.y,o.y,a.y),fs(e,r.z,s.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Xd extends Nn{constructor(e=new Ee,t=new Ee){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Ee){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Ee){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class mE extends Nn{constructor(e=new B,t=new B){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new B){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new B){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class qd extends Nn{constructor(e=new Ee,t=new Ee,i=new Ee){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new Ee){const i=t,r=this.v0,s=this.v1,o=this.v2;return i.set(hs(e,r.x,s.x,o.x),hs(e,r.y,s.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class gE extends Nn{constructor(e=new B,t=new B,i=new B){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new B){const i=t,r=this.v0,s=this.v1,o=this.v2;return i.set(hs(e,r.x,s.x,o.x),hs(e,r.y,s.y,o.y),hs(e,r.z,s.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Yd extends Nn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Ee){const i=t,r=this.points,s=(r.length-1)*e,o=Math.floor(s),a=s-o,l=r[o===0?o:o-1],c=r[o],u=r[o>r.length-2?r.length-1:o+1],h=r[o>r.length-3?r.length-1:o+2];return i.set(kh(a,l.x,c.x,u.x,h.x),kh(a,l.y,c.y,u.y,h.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(new Ee().fromArray(r))}return this}}var Jl=Object.freeze({__proto__:null,ArcCurve:sE,CatmullRomCurve3:oE,CubicBezierCurve:Wd,CubicBezierCurve3:pE,EllipseCurve:zc,LineCurve:Xd,LineCurve3:mE,QuadraticBezierCurve:qd,QuadraticBezierCurve3:gE,SplineCurve:Yd});class _E extends Nn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Jl[i](t,e))}return this}getPoint(e,t){const i=e*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=i){const o=r[s]-i,a=this.curves[s],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let i=0,r=this.curves.length;i<r;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let i;for(let r=0,s=this.curves;r<s.length;r++){const o=s[r],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){const u=l[c];i&&i.equals(u)||(t.push(u),i=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){const r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const r=e.curves[t];this.curves.push(new Jl[r.type]().fromJSON(r))}return this}}class Ql extends _E{constructor(e){super(),this.type="Path",this.currentPoint=new Ee,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const i=new Xd(this.currentPoint.clone(),new Ee(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,r){const s=new qd(this.currentPoint.clone(),new Ee(e,t),new Ee(i,r));return this.curves.push(s),this.currentPoint.set(i,r),this}bezierCurveTo(e,t,i,r,s,o){const a=new Wd(this.currentPoint.clone(),new Ee(e,t),new Ee(i,r),new Ee(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),i=new Yd(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,r,s,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,i,r,s,o),this}absarc(e,t,i,r,s,o){return this.absellipse(e,t,i,i,r,s,o),this}ellipse(e,t,i,r,s,o,a,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,i,r,s,o,a,l),this}absellipse(e,t,i,r,s,o,a,l){const c=new zc(e,t,i,r,s,o,a,l);if(this.curves.length>0){const h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class wi extends Un{constructor(e=1,t=1,i=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const u=[],h=[],f=[],d=[];let _=0;const x=[],m=i/2;let p=0;w(),o===!1&&(e>0&&M(!0),t>0&&M(!1)),this.setIndex(u),this.setAttribute("position",new Bt(h,3)),this.setAttribute("normal",new Bt(f,3)),this.setAttribute("uv",new Bt(d,2));function w(){const S=new B,I=new B;let C=0;const R=(t-e)/i;for(let D=0;D<=s;D++){const se=[],y=D/s,b=y*(t-e)+e;for(let q=0;q<=r;q++){const V=q/r,Z=V*l+a,re=Math.sin(Z),G=Math.cos(Z);I.x=b*re,I.y=-y*i+m,I.z=b*G,h.push(I.x,I.y,I.z),S.set(re,R,G).normalize(),f.push(S.x,S.y,S.z),d.push(V,1-y),se.push(_++)}x.push(se)}for(let D=0;D<r;D++)for(let se=0;se<s;se++){const y=x[se][D],b=x[se+1][D],q=x[se+1][D+1],V=x[se][D+1];e>0&&(u.push(y,b,V),C+=3),t>0&&(u.push(b,q,V),C+=3)}c.addGroup(p,C,0),p+=C}function M(S){const I=_,C=new Ee,R=new B;let D=0;const se=S===!0?e:t,y=S===!0?1:-1;for(let q=1;q<=r;q++)h.push(0,m*y,0),f.push(0,y,0),d.push(.5,.5),_++;const b=_;for(let q=0;q<=r;q++){const Z=q/r*l+a,re=Math.cos(Z),G=Math.sin(Z);R.x=se*G,R.y=m*y,R.z=se*re,h.push(R.x,R.y,R.z),f.push(0,y,0),C.x=re*.5+.5,C.y=G*.5*y+.5,d.push(C.x,C.y),_++}for(let q=0;q<r;q++){const V=I+q,Z=b+q;S===!0?u.push(Z,Z+1,V):u.push(Z+1,Z,V),D+=3}c.addGroup(p,D,S===!0?1:2),p+=D}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wi(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class rn extends Ql{constructor(e){super(e),this.uuid=Ji(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let i=0,r=this.holes.length;i<r;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){const r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const r=e.holes[t];this.holes.push(new Ql().fromJSON(r))}return this}}const vE={triangulate:function(n,e,t=2){const i=e&&e.length,r=i?e[0]*t:n.length;let s=$d(n,0,r,t,!0);const o=[];if(!s||s.next===s.prev)return o;let a,l,c,u,h,f,d;if(i&&(s=EE(n,e,s,t)),n.length>80*t){a=c=n[0],l=u=n[1];for(let _=t;_<r;_+=t)h=n[_],f=n[_+1],h<a&&(a=h),f<l&&(l=f),h>c&&(c=h),f>u&&(u=f);d=Math.max(c-a,u-l),d=d!==0?32767/d:0}return Es(s,o,t,a,l,d,0),o}};function $d(n,e,t,i,r){let s,o;if(r===UE(n,e,t,i)>0)for(s=e;s<t;s+=i)o=Vh(s,n[s],n[s+1],o);else for(s=t-i;s>=e;s-=i)o=Vh(s,n[s],n[s+1],o);return o&&Ko(o,o.next)&&(ws(o),o=o.next),o}function Yi(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(Ko(t,t.next)||ht(t.prev,t,t.next)===0)){if(ws(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function Es(n,e,t,i,r,s,o){if(!n)return;!o&&s&&RE(n,i,r,s);let a=n,l,c;for(;n.prev!==n.next;){if(l=n.prev,c=n.next,s?yE(n,i,r,s):xE(n)){e.push(l.i/t|0),e.push(n.i/t|0),e.push(c.i/t|0),ws(n),n=c.next,a=c.next;continue}if(n=c,n===a){o?o===1?(n=ME(Yi(n),e,t),Es(n,e,t,i,r,s,2)):o===2&&SE(n,e,t,i,r,s):Es(Yi(n),e,t,i,r,s,1);break}}}function xE(n){const e=n.prev,t=n,i=n.next;if(ht(e,t,i)>=0)return!1;const r=e.x,s=t.x,o=i.x,a=e.y,l=t.y,c=i.y,u=r<s?r<o?r:o:s<o?s:o,h=a<l?a<c?a:c:l<c?l:c,f=r>s?r>o?r:o:s>o?s:o,d=a>l?a>c?a:c:l>c?l:c;let _=i.next;for(;_!==e;){if(_.x>=u&&_.x<=f&&_.y>=h&&_.y<=d&&br(r,a,s,l,o,c,_.x,_.y)&&ht(_.prev,_,_.next)>=0)return!1;_=_.next}return!0}function yE(n,e,t,i){const r=n.prev,s=n,o=n.next;if(ht(r,s,o)>=0)return!1;const a=r.x,l=s.x,c=o.x,u=r.y,h=s.y,f=o.y,d=a<l?a<c?a:c:l<c?l:c,_=u<h?u<f?u:f:h<f?h:f,x=a>l?a>c?a:c:l>c?l:c,m=u>h?u>f?u:f:h>f?h:f,p=ec(d,_,e,t,i),w=ec(x,m,e,t,i);let M=n.prevZ,S=n.nextZ;for(;M&&M.z>=p&&S&&S.z<=w;){if(M.x>=d&&M.x<=x&&M.y>=_&&M.y<=m&&M!==r&&M!==o&&br(a,u,l,h,c,f,M.x,M.y)&&ht(M.prev,M,M.next)>=0||(M=M.prevZ,S.x>=d&&S.x<=x&&S.y>=_&&S.y<=m&&S!==r&&S!==o&&br(a,u,l,h,c,f,S.x,S.y)&&ht(S.prev,S,S.next)>=0))return!1;S=S.nextZ}for(;M&&M.z>=p;){if(M.x>=d&&M.x<=x&&M.y>=_&&M.y<=m&&M!==r&&M!==o&&br(a,u,l,h,c,f,M.x,M.y)&&ht(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;S&&S.z<=w;){if(S.x>=d&&S.x<=x&&S.y>=_&&S.y<=m&&S!==r&&S!==o&&br(a,u,l,h,c,f,S.x,S.y)&&ht(S.prev,S,S.next)>=0)return!1;S=S.nextZ}return!0}function ME(n,e,t){let i=n;do{const r=i.prev,s=i.next.next;!Ko(r,s)&&Kd(r,i,i.next,s)&&bs(r,s)&&bs(s,r)&&(e.push(r.i/t|0),e.push(i.i/t|0),e.push(s.i/t|0),ws(i),ws(i.next),i=n=s),i=i.next}while(i!==n);return Yi(i)}function SE(n,e,t,i,r,s){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&LE(o,a)){let l=jd(o,a);o=Yi(o,o.next),l=Yi(l,l.next),Es(o,e,t,i,r,s,0),Es(l,e,t,i,r,s,0);return}a=a.next}o=o.next}while(o!==n)}function EE(n,e,t,i){const r=[];let s,o,a,l,c;for(s=0,o=e.length;s<o;s++)a=e[s]*i,l=s<o-1?e[s+1]*i:n.length,c=$d(n,a,l,i,!1),c===c.next&&(c.steiner=!0),r.push(PE(c));for(r.sort(bE),s=0;s<r.length;s++)t=wE(r[s],t);return t}function bE(n,e){return n.x-e.x}function wE(n,e){const t=TE(n,e);if(!t)return e;const i=jd(t,n);return Yi(i,i.next),Yi(t,t.next)}function TE(n,e){let t=e,i=-1/0,r;const s=n.x,o=n.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){const f=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=s&&f>i&&(i=f,r=t.x<t.next.x?t:t.next,f===s))return r}t=t.next}while(t!==e);if(!r)return null;const a=r,l=r.x,c=r.y;let u=1/0,h;t=r;do s>=t.x&&t.x>=l&&s!==t.x&&br(o<c?s:i,o,l,c,o<c?i:s,o,t.x,t.y)&&(h=Math.abs(o-t.y)/(s-t.x),bs(t,n)&&(h<u||h===u&&(t.x>r.x||t.x===r.x&&AE(r,t)))&&(r=t,u=h)),t=t.next;while(t!==a);return r}function AE(n,e){return ht(n.prev,n,e.prev)<0&&ht(e.next,n,n.next)<0}function RE(n,e,t,i){let r=n;do r.z===0&&(r.z=ec(r.x,r.y,e,t,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==n);r.prevZ.nextZ=null,r.prevZ=null,CE(r)}function CE(n){let e,t,i,r,s,o,a,l,c=1;do{for(t=n,n=null,s=null,o=0;t;){for(o++,i=t,a=0,e=0;e<c&&(a++,i=i.nextZ,!!i);e++);for(l=c;a>0||l>0&&i;)a!==0&&(l===0||!i||t.z<=i.z)?(r=t,t=t.nextZ,a--):(r=i,i=i.nextZ,l--),s?s.nextZ=r:n=r,r.prevZ=s,s=r;t=i}s.nextZ=null,c*=2}while(o>1);return n}function ec(n,e,t,i,r){return n=(n-t)*r|0,e=(e-i)*r|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function PE(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function br(n,e,t,i,r,s,o,a){return(r-o)*(e-a)>=(n-o)*(s-a)&&(n-o)*(i-a)>=(t-o)*(e-a)&&(t-o)*(s-a)>=(r-o)*(i-a)}function LE(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!IE(n,e)&&(bs(n,e)&&bs(e,n)&&DE(n,e)&&(ht(n.prev,n,e.prev)||ht(n,e.prev,e))||Ko(n,e)&&ht(n.prev,n,n.next)>0&&ht(e.prev,e,e.next)>0)}function ht(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function Ko(n,e){return n.x===e.x&&n.y===e.y}function Kd(n,e,t,i){const r=ho(ht(n,e,t)),s=ho(ht(n,e,i)),o=ho(ht(t,i,n)),a=ho(ht(t,i,e));return!!(r!==s&&o!==a||r===0&&uo(n,t,e)||s===0&&uo(n,i,e)||o===0&&uo(t,n,i)||a===0&&uo(t,e,i))}function uo(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function ho(n){return n>0?1:n<0?-1:0}function IE(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&Kd(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function bs(n,e){return ht(n.prev,n,n.next)<0?ht(n,e,n.next)>=0&&ht(n,n.prev,e)>=0:ht(n,e,n.prev)<0||ht(n,n.next,e)<0}function DE(n,e){let t=n,i=!1;const r=(n.x+e.x)/2,s=(n.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&r<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function jd(n,e){const t=new tc(n.i,n.x,n.y),i=new tc(e.i,e.x,e.y),r=n.next,s=e.prev;return n.next=e,e.prev=n,t.next=r,r.prev=t,i.next=t,t.prev=i,s.next=i,i.prev=s,i}function Vh(n,e,t,i){const r=new tc(n,e,t);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function ws(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function tc(n,e,t){this.i=n,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function UE(n,e,t,i){let r=0;for(let s=e,o=t-i;s<t;s+=i)r+=(n[o]-n[s])*(n[s+1]+n[o+1]),o=s;return r}class Lr{static area(e){const t=e.length;let i=0;for(let r=t-1,s=0;s<t;r=s++)i+=e[r].x*e[s].y-e[s].x*e[r].y;return i*.5}static isClockWise(e){return Lr.area(e)<0}static triangulateShape(e,t){const i=[],r=[],s=[];Wh(e),Xh(i,e);let o=e.length;t.forEach(Wh);for(let l=0;l<t.length;l++)r.push(o),o+=t[l].length,Xh(i,t[l]);const a=vE.triangulate(i,r);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}}function Wh(n){const e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function Xh(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}class xn extends Un{constructor(e=new rn([new Ee(.5,.5),new Ee(-.5,.5),new Ee(-.5,-.5),new Ee(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const i=this,r=[],s=[];for(let a=0,l=e.length;a<l;a++){const c=e[a];o(c)}this.setAttribute("position",new Bt(r,3)),this.setAttribute("uv",new Bt(s,2)),this.computeVertexNormals();function o(a){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,h=t.depth!==void 0?t.depth:1;let f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:.2,_=t.bevelSize!==void 0?t.bevelSize:d-.1,x=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3;const p=t.extrudePath,w=t.UVGenerator!==void 0?t.UVGenerator:NE;let M,S=!1,I,C,R,D;p&&(M=p.getSpacedPoints(u),S=!0,f=!1,I=p.computeFrenetFrames(u,!1),C=new B,R=new B,D=new B),f||(m=0,d=0,_=0,x=0);const se=a.extractPoints(c);let y=se.shape;const b=se.holes;if(!Lr.isClockWise(y)){y=y.reverse();for(let J=0,g=b.length;J<g;J++){const A=b[J];Lr.isClockWise(A)&&(b[J]=A.reverse())}}const V=Lr.triangulateShape(y,b),Z=y;for(let J=0,g=b.length;J<g;J++){const A=b[J];y=y.concat(A)}function re(J,g,A){return g||console.error("THREE.ExtrudeGeometry: vec does not exist"),J.clone().addScaledVector(g,A)}const G=y.length,K=V.length;function z(J,g,A){let L,F,N;const j=J.x-g.x,ne=J.y-g.y,E=A.x-J.x,v=A.y-J.y,P=j*j+ne*ne,Y=j*v-ne*E;if(Math.abs(Y)>Number.EPSILON){const k=Math.sqrt(P),X=Math.sqrt(E*E+v*v),ue=g.x-ne/k,ce=g.y+j/k,ve=A.x-v/X,Pe=A.y+E/X,fe=((ve-ue)*v-(Pe-ce)*E)/(j*v-ne*E);L=ue+j*fe-J.x,F=ce+ne*fe-J.y;const ye=L*L+F*F;if(ye<=2)return new Ee(L,F);N=Math.sqrt(ye/2)}else{let k=!1;j>Number.EPSILON?E>Number.EPSILON&&(k=!0):j<-Number.EPSILON?E<-Number.EPSILON&&(k=!0):Math.sign(ne)===Math.sign(v)&&(k=!0),k?(L=-ne,F=j,N=Math.sqrt(P)):(L=j,F=ne,N=Math.sqrt(P/2))}return new Ee(L/N,F/N)}const ge=[];for(let J=0,g=Z.length,A=g-1,L=J+1;J<g;J++,A++,L++)A===g&&(A=0),L===g&&(L=0),ge[J]=z(Z[J],Z[A],Z[L]);const me=[];let _e,be=ge.concat();for(let J=0,g=b.length;J<g;J++){const A=b[J];_e=[];for(let L=0,F=A.length,N=F-1,j=L+1;L<F;L++,N++,j++)N===F&&(N=0),j===F&&(j=0),_e[L]=z(A[L],A[N],A[j]);me.push(_e),be=be.concat(_e)}for(let J=0;J<m;J++){const g=J/m,A=d*Math.cos(g*Math.PI/2),L=_*Math.sin(g*Math.PI/2)+x;for(let F=0,N=Z.length;F<N;F++){const j=re(Z[F],ge[F],L);U(j.x,j.y,-A)}for(let F=0,N=b.length;F<N;F++){const j=b[F];_e=me[F];for(let ne=0,E=j.length;ne<E;ne++){const v=re(j[ne],_e[ne],L);U(v.x,v.y,-A)}}}const ze=_+x;for(let J=0;J<G;J++){const g=f?re(y[J],be[J],ze):y[J];S?(R.copy(I.normals[0]).multiplyScalar(g.x),C.copy(I.binormals[0]).multiplyScalar(g.y),D.copy(M[0]).add(R).add(C),U(D.x,D.y,D.z)):U(g.x,g.y,0)}for(let J=1;J<=u;J++)for(let g=0;g<G;g++){const A=f?re(y[g],be[g],ze):y[g];S?(R.copy(I.normals[J]).multiplyScalar(A.x),C.copy(I.binormals[J]).multiplyScalar(A.y),D.copy(M[J]).add(R).add(C),U(D.x,D.y,D.z)):U(A.x,A.y,h/u*J)}for(let J=m-1;J>=0;J--){const g=J/m,A=d*Math.cos(g*Math.PI/2),L=_*Math.sin(g*Math.PI/2)+x;for(let F=0,N=Z.length;F<N;F++){const j=re(Z[F],ge[F],L);U(j.x,j.y,h+A)}for(let F=0,N=b.length;F<N;F++){const j=b[F];_e=me[F];for(let ne=0,E=j.length;ne<E;ne++){const v=re(j[ne],_e[ne],L);S?U(v.x,v.y+M[u-1].y,M[u-1].x+A):U(v.x,v.y,h+A)}}}te(),de();function te(){const J=r.length/3;if(f){let g=0,A=G*g;for(let L=0;L<K;L++){const F=V[L];ie(F[2]+A,F[1]+A,F[0]+A)}g=u+m*2,A=G*g;for(let L=0;L<K;L++){const F=V[L];ie(F[0]+A,F[1]+A,F[2]+A)}}else{for(let g=0;g<K;g++){const A=V[g];ie(A[2],A[1],A[0])}for(let g=0;g<K;g++){const A=V[g];ie(A[0]+G*u,A[1]+G*u,A[2]+G*u)}}i.addGroup(J,r.length/3-J,0)}function de(){const J=r.length/3;let g=0;pe(Z,g),g+=Z.length;for(let A=0,L=b.length;A<L;A++){const F=b[A];pe(F,g),g+=F.length}i.addGroup(J,r.length/3-J,1)}function pe(J,g){let A=J.length;for(;--A>=0;){const L=A;let F=A-1;F<0&&(F=J.length-1);for(let N=0,j=u+m*2;N<j;N++){const ne=G*N,E=G*(N+1),v=g+L+ne,P=g+F+ne,Y=g+F+E,k=g+L+E;$(v,P,Y,k)}}}function U(J,g,A){l.push(J),l.push(g),l.push(A)}function ie(J,g,A){le(J),le(g),le(A);const L=r.length/3,F=w.generateTopUV(i,r,L-3,L-2,L-1);Me(F[0]),Me(F[1]),Me(F[2])}function $(J,g,A,L){le(J),le(g),le(L),le(g),le(A),le(L);const F=r.length/3,N=w.generateSideWallUV(i,r,F-6,F-3,F-2,F-1);Me(N[0]),Me(N[1]),Me(N[3]),Me(N[1]),Me(N[2]),Me(N[3])}function le(J){r.push(l[J*3+0]),r.push(l[J*3+1]),r.push(l[J*3+2])}function Me(J){s.push(J.x),s.push(J.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return FE(t,i,e)}static fromJSON(e,t){const i=[];for(let s=0,o=e.shapes.length;s<o;s++){const a=t[e.shapes[s]];i.push(a)}const r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new Jl[r.type]().fromJSON(r)),new xn(i,e.options)}}const NE={generateTopUV:function(n,e,t,i,r){const s=e[t*3],o=e[t*3+1],a=e[i*3],l=e[i*3+1],c=e[r*3],u=e[r*3+1];return[new Ee(s,o),new Ee(a,l),new Ee(c,u)]},generateSideWallUV:function(n,e,t,i,r,s){const o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[i*3],u=e[i*3+1],h=e[i*3+2],f=e[r*3],d=e[r*3+1],_=e[r*3+2],x=e[s*3],m=e[s*3+1],p=e[s*3+2];return Math.abs(a-u)<Math.abs(o-c)?[new Ee(o,1-l),new Ee(c,1-h),new Ee(f,1-_),new Ee(x,1-p)]:[new Ee(a,1-l),new Ee(u,1-h),new Ee(d,1-_),new Ee(m,1-p)]}};function FE(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,r=n.length;i<r;i++){const s=n[i];t.shapes.push(s.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class Be extends Un{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const u=[],h=new B,f=new B,d=[],_=[],x=[],m=[];for(let p=0;p<=i;p++){const w=[],M=p/i;let S=0;p===0&&o===0?S=.5/t:p===i&&l===Math.PI&&(S=-.5/t);for(let I=0;I<=t;I++){const C=I/t;h.x=-e*Math.cos(r+C*s)*Math.sin(o+M*a),h.y=e*Math.cos(o+M*a),h.z=e*Math.sin(r+C*s)*Math.sin(o+M*a),_.push(h.x,h.y,h.z),f.copy(h).normalize(),x.push(f.x,f.y,f.z),m.push(C+S,1-M),w.push(c++)}u.push(w)}for(let p=0;p<i;p++)for(let w=0;w<t;w++){const M=u[p][w+1],S=u[p][w],I=u[p+1][w],C=u[p+1][w+1];(p!==0||o>0)&&d.push(M,S,C),(p!==i-1||l<Math.PI)&&d.push(S,I,C)}this.setIndex(d),this.setAttribute("position",new Bt(_,3)),this.setAttribute("normal",new Bt(x,3)),this.setAttribute("uv",new Bt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Be(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class $i extends Is{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ve(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ve(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=wd,this.normalScale=new Ee(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class sn extends $i{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ee(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Mt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ve(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ve(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ve(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}const qh={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class OE{constructor(e,t,i){const r=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){const d=c[h],_=c[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return _}return null}}}const BE=new OE;class Gc{constructor(e){this.manager=e!==void 0?e:BE,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Gc.DEFAULT_MATERIAL_NAME="__DEFAULT";const Wn={};class zE extends Error{constructor(e,t){super(e),this.response=t}}class HE extends Gc{constructor(e){super(e)}load(e,t,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=qh.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(Wn[e]!==void 0){Wn[e].push({onLoad:t,onProgress:i,onError:r});return}Wn[e]=[],Wn[e].push({onLoad:t,onProgress:i,onError:r});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=Wn[e],h=c.body.getReader(),f=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),d=f?parseInt(f):0,_=d!==0;let x=0;const m=new ReadableStream({start(p){w();function w(){h.read().then(({done:M,value:S})=>{if(M)p.close();else{x+=S.byteLength;const I=new ProgressEvent("progress",{lengthComputable:_,loaded:x,total:d});for(let C=0,R=u.length;C<R;C++){const D=u[C];D.onProgress&&D.onProgress(I)}p.enqueue(S),w()}},M=>{p.error(M)})}}});return new Response(m)}else throw new zE(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),f=h&&h[1]?h[1].toLowerCase():void 0,d=new TextDecoder(f);return c.arrayBuffer().then(_=>d.decode(_))}}}).then(c=>{qh.add(e,c);const u=Wn[e];delete Wn[e];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onLoad&&d.onLoad(c)}}).catch(c=>{const u=Wn[e];if(u===void 0)throw this.manager.itemError(e),c;delete Wn[e];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onError&&d.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class kc extends Lt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ve(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const $a=new ut,Yh=new B,$h=new B;class Zd{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ee(512,512),this.map=null,this.mapPass=null,this.matrix=new ut,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Oc,this._frameExtents=new Ee(1,1),this._viewportCount=1,this._viewports=[new rt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Yh.setFromMatrixPosition(e.matrixWorld),t.position.copy(Yh),$h.setFromMatrixPosition(e.target.matrixWorld),t.lookAt($h),t.updateMatrixWorld(),$a.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix($a),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply($a)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Kh=new ut,Jr=new B,Ka=new B;class GE extends Zd{constructor(){super(new _t(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ee(4,2),this._viewportCount=6,this._viewports=[new rt(2,1,1,1),new rt(0,1,1,1),new rt(3,1,1,1),new rt(1,1,1,1),new rt(3,0,1,1),new rt(1,0,1,1)],this._cubeDirections=[new B(1,0,0),new B(-1,0,0),new B(0,0,1),new B(0,0,-1),new B(0,1,0),new B(0,-1,0)],this._cubeUps=[new B(0,1,0),new B(0,1,0),new B(0,1,0),new B(0,1,0),new B(0,0,1),new B(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),Jr.setFromMatrixPosition(e.matrixWorld),i.position.copy(Jr),Ka.copy(i.position),Ka.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Ka),i.updateMatrixWorld(),r.makeTranslation(-Jr.x,-Jr.y,-Jr.z),Kh.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Kh)}}class jo extends kc{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new GE}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class kE extends Zd{constructor(){super(new Bd(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class tr extends kc{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Lt.DEFAULT_UP),this.updateMatrix(),this.target=new Lt,this.shadow=new kE}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class nr extends kc{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class VE{constructor(){this.type="ShapePath",this.color=new Ve,this.subPaths=[],this.currentPath=null}moveTo(e,t){return this.currentPath=new Ql,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,i,r){return this.currentPath.quadraticCurveTo(e,t,i,r),this}bezierCurveTo(e,t,i,r,s,o){return this.currentPath.bezierCurveTo(e,t,i,r,s,o),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e){function t(p){const w=[];for(let M=0,S=p.length;M<S;M++){const I=p[M],C=new rn;C.curves=I.curves,w.push(C)}return w}function i(p,w){const M=w.length;let S=!1;for(let I=M-1,C=0;C<M;I=C++){let R=w[I],D=w[C],se=D.x-R.x,y=D.y-R.y;if(Math.abs(y)>Number.EPSILON){if(y<0&&(R=w[C],se=-se,D=w[I],y=-y),p.y<R.y||p.y>D.y)continue;if(p.y===R.y){if(p.x===R.x)return!0}else{const b=y*(p.x-R.x)-se*(p.y-R.y);if(b===0)return!0;if(b<0)continue;S=!S}}else{if(p.y!==R.y)continue;if(D.x<=p.x&&p.x<=R.x||R.x<=p.x&&p.x<=D.x)return!0}}return S}const r=Lr.isClockWise,s=this.subPaths;if(s.length===0)return[];let o,a,l;const c=[];if(s.length===1)return a=s[0],l=new rn,l.curves=a.curves,c.push(l),c;let u=!r(s[0].getPoints());u=e?!u:u;const h=[],f=[];let d=[],_=0,x;f[_]=void 0,d[_]=[];for(let p=0,w=s.length;p<w;p++)a=s[p],x=a.getPoints(),o=r(x),o=e?!o:o,o?(!u&&f[_]&&_++,f[_]={s:new rn,p:x},f[_].s.curves=a.curves,u&&_++,d[_]=[]):d[_].push({h:a,p:x[0]});if(!f[0])return t(s);if(f.length>1){let p=!1,w=0;for(let M=0,S=f.length;M<S;M++)h[M]=[];for(let M=0,S=f.length;M<S;M++){const I=d[M];for(let C=0;C<I.length;C++){const R=I[C];let D=!0;for(let se=0;se<f.length;se++)i(R.p,f[se].p)&&(M!==se&&w++,D?(D=!1,h[se].push(R)):p=!0);D&&h[M].push(R)}}w>0&&p===!1&&(d=h)}let m;for(let p=0,w=f.length;p<w;p++){l=f[p].s,c.push(l),m=d[p];for(let M=0,S=m.length;M<S;M++)l.holes.push(m[M].h)}return c}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ac}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ac);class Zo extends Gc{constructor(e){super(e)}load(e,t,i,r){const s=this,o=new HE(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(a){const l=s.parse(JSON.parse(a));t&&t(l)},i,r)}parse(e){return new WE(e)}}class WE{constructor(e){this.isFont=!0,this.type="Font",this.data=e}generateShapes(e,t=100){const i=[],r=XE(e,t,this.data);for(let s=0,o=r.length;s<o;s++)i.push(...r[s].toShapes());return i}}function XE(n,e,t){const i=Array.from(n),r=e/t.resolution,s=(t.boundingBox.yMax-t.boundingBox.yMin+t.underlineThickness)*r,o=[];let a=0,l=0;for(let c=0;c<i.length;c++){const u=i[c];if(u===`
`)a=0,l-=s;else{const h=qE(u,r,a,l,t);a+=h.offsetX,o.push(h.path)}}return o}function qE(n,e,t,i,r){const s=r.glyphs[n]||r.glyphs["?"];if(!s){console.error('THREE.Font: character "'+n+'" does not exists in font family '+r.familyName+".");return}const o=new VE;let a,l,c,u,h,f,d,_;if(s.o){const x=s._cachedOutline||(s._cachedOutline=s.o.split(" "));for(let m=0,p=x.length;m<p;)switch(x[m++]){case"m":a=x[m++]*e+t,l=x[m++]*e+i,o.moveTo(a,l);break;case"l":a=x[m++]*e+t,l=x[m++]*e+i,o.lineTo(a,l);break;case"q":c=x[m++]*e+t,u=x[m++]*e+i,h=x[m++]*e+t,f=x[m++]*e+i,o.quadraticCurveTo(h,f,c,u);break;case"b":c=x[m++]*e+t,u=x[m++]*e+i,h=x[m++]*e+t,f=x[m++]*e+i,d=x[m++]*e+t,_=x[m++]*e+i,o.bezierCurveTo(h,f,d,_,c,u);break}}return{offsetX:s.ha*e,path:o}}class Ki extends xn{constructor(e,t={}){const i=t.font;if(i===void 0)super();else{const r=i.generateShapes(e,t.size);t.depth===void 0&&t.height!==void 0&&console.warn("THREE.TextGeometry: .height is now depreciated. Please use .depth instead"),t.depth=t.depth!==void 0?t.depth:t.height!==void 0?t.height:50,t.bevelThickness===void 0&&(t.bevelThickness=10),t.bevelSize===void 0&&(t.bevelSize=8),t.bevelEnabled===void 0&&(t.bevelEnabled=!1),super(r,t)}this.type="TextGeometry"}}const YE=an({__name:"PinkBear",props:{background:{type:Boolean,default:!1},cameraPosition:{type:Number,default:4},bodyPosition:{type:Object,default:()=>({x:0,y:0,z:0})}},setup(n){const e=n,t=Tt(null);return Ln(()=>{if(t.value){let i=function(){requestAnimationFrame(i),d.rotation.y+=.03,u.uniforms.time.value+=.03,o.render(r,s)};const r=new er,s=new _t(75,window.innerWidth/window.innerHeight,.1,1e3),o=new Qi({antialias:!0,alpha:!0});o.setSize(window.innerWidth,window.innerHeight),o.toneMapping=Rs,o.toneMappingExposure=1.25,t.value.appendChild(o.domElement);const a=new nr(16777215,.6);r.add(a);const l=new tr(16777215,1.5);l.position.set(5,5,5),r.add(l);const c=new jo(16777215,2,50);c.position.set(0,2,4),r.add(c);const u=new zt({uniforms:{time:{value:0},color1:{value:new Ve(16766720)},color2:{value:new Ve(16007990)}},vertexShader:`
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
        `}),h=new sn({color:16738740,metalness:.2,roughness:.5,clearcoat:.1,clearcoatRoughness:.8,transparent:!0,opacity:.99}),f=new sn({color:13369344,metalness:.4,roughness:.3,clearcoat:.3,clearcoatRoughness:.2,transparent:!0,opacity:.99}),d=new tn,_=new Be(1,32,32),x=new ae(_,h);x.scale.set(.85,.85,.8),x.position.y=-.2,d.add(x);const m=new Be(.6,32,32),p=new ae(m,h);p.scale.set(1,.95,.95),p.position.set(0,1,0),d.add(p);const w=new Be(.25,32,32),M=new ae(w,h);M.position.set(-.45,1.35,-.1),d.add(M);const S=new ae(w,h);S.position.set(.45,1.35,-.1),d.add(S);const I=new Be(.25,32,32),C=new ae(I,h);C.scale.set(1,.6,.8),C.position.set(0,.85,.5),d.add(C);const R=new rn;R.moveTo(0,0),R.bezierCurveTo(0,-.3,-.6,-.3,-.6,0),R.bezierCurveTo(-.6,.3,0,.6,0,1),R.bezierCurveTo(0,.6,.6,.3,.6,0),R.bezierCurveTo(.6,-.3,0,-.3,0,0);const D={depth:.4,bevelEnabled:!0,bevelSegments:2,steps:2,bevelSize:.1,bevelThickness:.1},se=new xn(R,D),y=new ae(se,f);y.scale.set(.5,.5,.5),y.position.set(0,.34,.8),y.rotation.y=Math.PI,y.rotation.x=Math.PI,d.add(y);const b=new Be(.35,32,32),q=new ae(b,h);q.scale.set(.75,1.25,.65),q.position.set(-.7,-.15,.2),d.add(q);const V=new ae(b,h);V.scale.set(.75,1.25,.65),V.position.set(.7,-.15,.2),d.add(V);const Z=new wi(.2,.22,.6,32),re=new ae(Z,h);re.position.set(-.4,-1.05,0),d.add(re);const G=new ae(Z,h);G.position.set(.4,-1.05,0),d.add(G);const K=new Be(.3,32,32),z=new ae(K,h);z.scale.set(1,.72,1.5),z.position.set(-.4,-1.45,.17),d.add(z);const ge=new ae(K,h);ge.scale.set(1,.72,1.5),ge.position.set(.4,-1.45,.17),d.add(ge);const me=new Be(.44,32,32),_e=new ae(me,h);_e.position.set(-.15,-.45,-.4),d.add(_e);const be=new ae(me,h);be.position.set(.15,-.45,-.4),d.add(be);const ze=new Be(.18,32,32),te=new ae(ze,f);te.position.set(0,-.35,-.8),d.add(te),new Zo().load("https://threejs.org/examples/fonts/helvetiker_bold.typeface.json",function($){const le=new Ki("X",{font:$,size:.2,depth:.05}),Me=new vn({color:0}),J=new ae(le,Me);J.position.set(-.34,1,.5),d.add(J)});const pe=new Be(.1,32,32),U=new vn({color:0}),ie=new ae(pe,U);ie.position.set(.2,1.1,.54),d.add(ie),r.add(d),i(),d.position.set(e.bodyPosition.x,e.bodyPosition.y,e.bodyPosition.z),s.position.set(e.bodyPosition.x,1,e.cameraPosition),s.lookAt(e.bodyPosition.x,0,0),nn(()=>e.bodyPosition,$=>{d.position.set($.x,$.y,$.z)}),nn(()=>e.cameraPosition,$=>{s.position.set(e.bodyPosition.x,1,$),s.lookAt(e.bodyPosition.x,0,0)}),window.addEventListener("resize",()=>{s.aspect=window.innerWidth/window.innerHeight,s.updateProjectionMatrix(),o.setSize(window.innerWidth,window.innerHeight)})}}),(i,r)=>(Mn(),In("div",{ref_key:"threeCanvas",ref:t,class:Zi(n.background?"no-bg":"three-canvas")},null,2))}}),Jd=Dn(YE,[["__scopeId","data-v-cb7c2059"]]),$E=an({__name:"PurpleBear",props:{background:{type:Boolean,default:!1},cameraPosition:{type:Number,default:4},bodyPosition:{type:Object,default:()=>({x:0,y:0,z:0})}},setup(n){const e=n,t=Tt(null);return Ln(()=>{if(t.value){let i=function(){requestAnimationFrame(i),d.rotation.y+=.03,u.uniforms.time.value+=.03,o.render(r,s)};const r=new er,s=new _t(75,window.innerWidth/window.innerHeight,.1,1e3),o=new Qi({antialias:!0,alpha:!0});o.setSize(window.innerWidth,window.innerHeight),o.toneMapping=Rs,o.toneMappingExposure=1.25,t.value.appendChild(o.domElement);const a=new nr(16777215,.6);r.add(a);const l=new tr(16777215,1.5);l.position.set(5,5,5),r.add(l);const c=new jo(16777215,2,50);c.position.set(0,2,4),r.add(c);const u=new zt({uniforms:{time:{value:0},color1:{value:new Ve(16766720)},color2:{value:new Ve(16007990)}},vertexShader:`
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
            `}),h=new sn({color:10573288,metalness:.2,roughness:.5,clearcoat:.1,clearcoatRoughness:.8,transparent:!0,opacity:.99});new sn({color:16766720,metalness:.4,roughness:.3,clearcoat:.3,clearcoatRoughness:.2,transparent:!0,opacity:.99});const f=new sn({color:16766720,metalness:.05,roughness:10,clearcoat:.6,clearcoatRoughness:.1,opacity:1,transparent:!1}),d=new tn,_=new Be(1,32,32),x=new ae(_,h);x.scale.set(.85,.85,.8),x.position.y=-.2,d.add(x);const m=new Be(.6,32,32),p=new ae(m,h);p.scale.set(1,.95,.95),p.position.set(0,1,0),d.add(p);const w=new Be(.25,32,32),M=new ae(w,h);M.position.set(-.45,1.35,-.1),d.add(M);const S=new ae(w,h);S.position.set(.45,1.35,-.1),d.add(S);const I=new Be(.25,32,32),C=new ae(I,h);C.scale.set(1,.6,.8),C.position.set(0,.85,.5),d.add(C);const R=new rn;R.moveTo(0,0),R.bezierCurveTo(0,-.3,-.6,-.3,-.6,0),R.bezierCurveTo(-.6,.3,0,.6,0,1),R.bezierCurveTo(0,.6,.6,.3,.6,0),R.bezierCurveTo(.6,-.3,0,-.3,0,0);const D={depth:.4,bevelEnabled:!0,bevelSegments:2,steps:2,bevelSize:.1,bevelThickness:.1},se=new xn(R,D),y=new ae(se,u);y.scale.set(.5,.5,.5),y.position.set(0,.34,.8),y.rotation.y=Math.PI,y.rotation.x=Math.PI,d.add(y);const b=new Be(.35,32,32),q=new ae(b,h);q.scale.set(.75,1.25,.65),q.position.set(-.7,-.15,.2),d.add(q);const V=new ae(b,h);V.scale.set(.75,1.25,.65),V.position.set(.7,-.15,.2),d.add(V);const Z=new wi(.2,.22,.6,32),re=new ae(Z,h);re.position.set(-.4,-1.05,0),d.add(re);const G=new ae(Z,h);G.position.set(.4,-1.05,0),d.add(G);const K=new Be(.3,32,32),z=new ae(K,h);z.scale.set(1,.72,1.5),z.position.set(-.4,-1.45,.17),d.add(z);const ge=new ae(K,h);ge.scale.set(1,.72,1.5),ge.position.set(.4,-1.45,.17),d.add(ge);const me=new Be(.44,32,32),_e=new ae(me,h);_e.position.set(-.15,-.45,-.4),d.add(_e);const be=new ae(me,h);be.position.set(.15,-.45,-.4),d.add(be);const ze=new Be(.18,32,32),te=new ae(ze,f);te.position.set(0,-.35,-.8),d.add(te),new Zo().load("https://threejs.org/examples/fonts/helvetiker_bold.typeface.json",function(pe){const U=new Ki("X",{font:pe,size:.2,depth:.05}),ie=new vn({color:0}),$=new ae(U,ie);$.position.set(-.34,1,.5),d.add($);const le=new Ki("O",{font:pe,size:.2,depth:.05}),Me=new vn({color:0}),J=new ae(le,Me);J.position.set(.16,1,.53),J.rotation.y=Kn.degToRad(32),d.add(J)}),r.add(d),i(),d.position.set(e.bodyPosition.x,e.bodyPosition.y,e.bodyPosition.z),s.position.set(e.bodyPosition.x,1,e.cameraPosition),s.lookAt(e.bodyPosition.x,0,0),nn(()=>e.bodyPosition,pe=>{d.position.set(pe.x,pe.y,pe.z)}),nn(()=>e.cameraPosition,pe=>{s.position.set(e.bodyPosition.x,1,pe),s.lookAt(e.bodyPosition.x,0,0)}),window.addEventListener("resize",()=>{s.aspect=window.innerWidth/window.innerHeight,s.updateProjectionMatrix(),o.setSize(window.innerWidth,window.innerHeight)})}}),(i,r)=>(Mn(),In("div",{ref_key:"threeCanvas",ref:t,class:Zi(n.background?"no-bg":"three-canvas")},null,2))}}),Qd=Dn($E,[["__scopeId","data-v-db04b99d"]]),KE=an({__name:"BlueBear",props:{background:{type:Boolean,default:!1},cameraPosition:{type:Number,default:4},bodyPosition:{type:Object,default:()=>({x:0,y:0,z:0})}},setup(n){const e=n,t=Tt(null);return Ln(()=>{if(t.value){let i=function(){requestAnimationFrame(i),d.rotation.y+=.03,u.uniforms.time.value+=.04,o.render(r,s)};const r=new er,s=new _t(75,window.innerWidth/window.innerHeight,.1,1e3),o=new Qi({antialias:!0,alpha:!0});o.setSize(window.innerWidth,window.innerHeight),o.toneMapping=Rs,o.toneMappingExposure=1.25,t.value.appendChild(o.domElement);const a=new nr(16777215,.6);r.add(a);const l=new tr(16777215,1.2);l.position.set(5,5,5),r.add(l);const c=new jo(16777215,2,50);c.position.set(0,2,4),r.add(c);const u=new zt({uniforms:{time:{value:0},color1:{value:new Ve(16766720)},color2:{value:new Ve(16007990)}},vertexShader:`
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
        `}),h=new sn({color:52945,metalness:.2,roughness:.5,clearcoat:.1,clearcoatRoughness:.8,transparent:!0,opacity:.99}),f=new sn({color:16745921,metalness:.5,roughness:30,clearcoat:.6,clearcoatRoughness:.1,opacity:1,transparent:!1}),d=new tn,_=new Be(1,32,32),x=new ae(_,h);x.scale.set(.85,.85,.8),x.position.y=-.2,d.add(x);const m=new Be(.6,32,32),p=new ae(m,h);p.scale.set(1,.95,.95),p.position.set(0,1,0),d.add(p);const w=new Be(.25,32,32),M=new ae(w,h);M.position.set(-.45,1.35,-.1),d.add(M);const S=new ae(w,h);S.position.set(.45,1.35,-.1),d.add(S);const I=new Be(.25,32,32),C=new ae(I,h);C.scale.set(1,.6,.8),C.position.set(0,.85,.5),d.add(C);const R=new rn;R.moveTo(0,0),R.bezierCurveTo(0,-.3,-.6,-.3,-.6,0),R.bezierCurveTo(-.6,.3,0,.6,0,1),R.bezierCurveTo(0,.6,.6,.3,.6,0),R.bezierCurveTo(.6,-.3,0,-.3,0,0);const D={depth:.4,bevelEnabled:!0,bevelSegments:2,steps:2,bevelSize:.1,bevelThickness:.1},se=new xn(R,D),y=new ae(se,f);y.scale.set(.5,.5,.5),y.position.set(0,.34,.8),y.rotation.y=Math.PI,y.rotation.x=Math.PI,d.add(y);const b=new Be(.35,32,32),q=new ae(b,h);q.scale.set(.75,1.25,.65),q.position.set(-.7,-.15,.2),d.add(q);const V=new ae(b,h);V.scale.set(.75,1.25,.65),V.position.set(.7,-.15,.2),d.add(V);const Z=new wi(.2,.22,.6,32),re=new ae(Z,h);re.position.set(-.4,-1.05,0),d.add(re);const G=new ae(Z,h);G.position.set(.4,-1.05,0),d.add(G);const K=new Be(.3,32,32),z=new ae(K,h);z.scale.set(1,.72,1.5),z.position.set(-.4,-1.45,.17),d.add(z);const ge=new ae(K,h);ge.scale.set(1,.72,1.5),ge.position.set(.4,-1.45,.17),d.add(ge);const me=new Be(.44,32,32),_e=new ae(me,h);_e.position.set(-.15,-.45,-.4),d.add(_e);const be=new ae(me,h);be.position.set(.15,-.45,-.4),d.add(be);const ze=new Be(.18,32,32),te=new ae(ze,f);te.position.set(0,-.35,-.8),d.add(te),new Zo().load("https://threejs.org/examples/fonts/helvetiker_bold.typeface.json",function(pe){const U=new Ki("X",{font:pe,size:.2,depth:.05}),ie=new vn({color:0}),$=new ae(U,ie);$.position.set(-.34,1,.5),d.add($);const le=new Ki("X",{font:pe,size:.2,depth:.05}),Me=new vn({color:0}),J=new ae(le,Me);J.position.set(.16,1,.53),J.rotation.y=Kn.degToRad(32),d.add(J)}),r.add(d),i(),d.position.set(e.bodyPosition.x,e.bodyPosition.y,e.bodyPosition.z),s.position.set(e.bodyPosition.x,1,e.cameraPosition),s.lookAt(e.bodyPosition.x,0,0),nn(()=>e.bodyPosition,pe=>{d.position.set(pe.x,pe.y,pe.z)}),nn(()=>e.cameraPosition,pe=>{s.position.set(e.bodyPosition.x,1,pe),s.lookAt(e.bodyPosition.x,0,0)}),window.addEventListener("resize",()=>{s.aspect=window.innerWidth/window.innerHeight,s.updateProjectionMatrix(),o.setSize(window.innerWidth,window.innerHeight)})}}),(i,r)=>(Mn(),In("div",{ref_key:"threeCanvas",ref:t,class:Zi(n.background?"no-bg":"three-canvas")},null,2))}}),ep=Dn(KE,[["__scopeId","data-v-fdfbfcca"]]),jE={key:0,class:"bear-face-container"},ZE=an({__name:"HalfBearFace",setup(n){const e=Tt(null),t=Tt(!1),i=()=>{t.value=!0};return Ln(()=>{const r=e.value;if(r){r.width=window.innerWidth,r.height=window.innerHeight*.6;const s=r.getContext("2d");s&&(()=>{const a=r.width/2,l=r.height/1.9,c=r.height/2.5,u=r.height/2.58,h=c*.45,f=c*.18,d=c*.3,_=c*.275,x=d*.35,m=d*.32;s.save(),s.beginPath(),s.rect(0,0,r.width/2,r.height),s.clip(),s.lineWidth=15,s.strokeStyle="#000000",s.beginPath(),s.arc(a-c*.85,l-u*.8,h,0,Math.PI*2,!0),s.stroke(),s.beginPath(),s.arc(a+c*.85,l-c*.8,h,0,Math.PI*2,!0),s.stroke(),s.lineWidth=15,s.beginPath(),s.arc(a,l,u,0,Math.PI*2,!0),s.stroke(),s.lineWidth=15,s.beginPath(),s.arc(a-c*.4,l-c*.2,f,0,Math.PI*2,!0),s.stroke(),s.beginPath(),s.moveTo(a+c*.2,l-c*.3),s.lineTo(a+c*.5,l-c*.05),s.moveTo(a+c*.5,l-c*.3),s.lineTo(a+c*.2,l-c*.05),s.stroke(),s.beginPath(),s.ellipse(a,l+c*.4,_*1.5,_,0,0,Math.PI*2),s.stroke(),s.beginPath(),s.arc(a,l+c*.3,m,0,Math.PI*2,!0),s.stroke(),s.restore(),s.save(),s.beginPath(),s.rect(r.width/2,0,r.width/2,r.height),s.clip(),s.fillStyle="#FF69B4",s.beginPath(),s.arc(a-c*.85,l-c*.8,h,0,Math.PI*2,!0),s.fill(),s.beginPath(),s.arc(a+c*.85,l-c*.8,h,0,Math.PI*2,!0),s.fill(),s.beginPath(),s.arc(a,l,c,0,Math.PI*2,!0),s.fill(),s.fillStyle="#000000",s.beginPath(),s.arc(a-c*.4,l-c*.2,f,0,Math.PI*2,!0),s.fill(),s.lineWidth=15,s.beginPath(),s.moveTo(a+c*.2,l-c*.3),s.lineTo(a+c*.5,l-c*.05),s.moveTo(a+c*.5,l-c*.3),s.lineTo(a+c*.2,l-c*.05),s.strokeStyle="#000000",s.stroke(),s.fillStyle="#F0E68C",s.beginPath(),s.ellipse(a,l+c*.4,d*1.5,d,0,0,Math.PI*2),s.fill(),s.fillStyle="#000000",s.beginPath(),s.arc(a,l+c*.3,x*1.2,0,Math.PI*2,!0),s.fill(),s.restore()})()}}),(r,s)=>t.value?tg("",!0):(Mn(),In("div",jE,[vs("canvas",{ref_key:"bearCanvas",ref:e},null,512),vs("button",{onClick:i,class:"pixel-button"},"Enter")]))}}),JE=Dn(ZE,[["__scopeId","data-v-f4764aee"]]),tp=Tt(window.matchMedia("only screen and (max-width: 475px)").matches),np=Tt(window.matchMedia("only screen and (max-width: 580px)").matches),ip=Tt(window.matchMedia("only screen and (max-width: 670px)").matches),rp=Tt(window.matchMedia("only screen and (max-width: 768px)").matches),sp=Tt(window.matchMedia("only screen and (max-width: 850px)").matches),op=Tt(window.matchMedia("only screen and (max-width: 1024px)").matches),QE=new ResizeObserver(()=>{tp.value=window.matchMedia("only screen and (max-width: 475px)").matches,np.value=window.matchMedia("only screen and (max-width: 580px)").matches,ip.value=window.matchMedia("only screen and (max-width: 670px)").matches,rp.value=window.matchMedia("only screen and (max-width: 768px)").matches,sp.value=window.matchMedia("only screen and (max-width: 850px)").matches,op.value=window.matchMedia("only screen and (max-width: 1024px)").matches});QE.observe(document.documentElement);bt(()=>tp.value);const ja=bt(()=>np.value);bt(()=>rp.value);bt(()=>op.value);bt(()=>ip.value);const Za=bt(()=>sp.value),eb={class:"flex"},tb=an({__name:"ThreeScene",setup(n){const e=Tt(!0);let t;const i=()=>{e.value=!e.value};return Ln(()=>{t=setInterval(()=>{i()},3e3)}),yc(()=>{clearInterval(t)}),(r,s)=>(Mn(),In("div",eb,[ot(JE,{class:"bear-background"}),ot(Jd,{background:!0,cameraPosition:Qt(ja)?13:Qt(Za)?8:6,bodyPosition:{x:-15,y:0,z:0},class:"bear-page"},null,8,["cameraPosition"]),ot(Qd,{background:!0,cameraPosition:Qt(ja)?10:Qt(Za)?6:4,bodyPosition:{x:-15,y:0,z:0},class:"bear-page"},null,8,["cameraPosition"]),ot(ep,{background:!0,cameraPosition:Qt(ja)?13:Qt(Za)?8:6,bodyPosition:{x:-18,y:0,z:0},class:"bear-page"},null,8,["cameraPosition"])]))}}),nb=Dn(tb,[["__scopeId","data-v-b0e804da"]]),ib=`
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,rb=`
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
`,sb=an({__name:"DiamondBear",setup(n){const e=Tt(null);return Ln(()=>{const t=new er,i=new _t(75,window.innerWidth/window.innerHeight,.1,1e3),r=new Qi({antialias:!0,alpha:!0});r.setSize(window.innerWidth,window.innerHeight),e.value&&e.value.appendChild(r.domElement);const s=new nr(16777215,5);t.add(s);const o=new tr(16777215,20);o.position.set(5,5,5),t.add(o);const a=new zt({uniforms:{time:{value:0}},vertexShader:ib,fragmentShader:rb,transparent:!0,opacity:.1}),l=new tn,c=new Be(1,32,32),u=new ae(c,a);u.scale.set(.85,.85,.8),u.position.y=-.2,l.add(u);const h=new Be(.6,32,32),f=new ae(h,a);f.scale.set(1,.95,.95),f.position.set(0,1,0),l.add(f);const d=new Be(.25,32,32),_=new ae(d,a);_.position.set(-.45,1.35,-.1),l.add(_);const x=new ae(d,a);x.position.set(.45,1.35,-.1),l.add(x);const m=new Be(.25,32,32),p=new ae(m,a);p.scale.set(1,.6,.8),p.position.set(0,.85,.5),l.add(p);const w=new Be(.35,32,32),M=new ae(w,a);M.scale.set(.75,1.25,.65),M.position.set(-.7,-.15,.2),l.add(M);const S=new ae(w,a);S.scale.set(.75,1.25,.65),S.position.set(.7,-.15,.2),l.add(S);const I=new Be(.3,32,32),C=new ae(I,a);C.scale.set(1,.72,1.5),C.position.set(-.4,-1.45,.17),l.add(C);const R=new ae(I,a);R.scale.set(1,.72,1.5),R.position.set(.4,-1.45,.17),l.add(R);const D=new wi(.2,.22,.6,32),se=new ae(D,a);se.position.set(-.4,-1.05,0),l.add(se);const y=new ae(D,a);y.position.set(.4,-1.05,0),l.add(y);const b=new Be(.44,32,32),q=new ae(b,a);q.position.set(-.15,-.45,-.4),l.add(q);const V=new ae(b,a);V.position.set(.15,-.45,-.4),l.add(V);const Z=new Be(.18,32,32),re=new ae(Z,a);re.position.set(0,-.35,-.75),l.add(re);const G=new $i({color:16738740,metalness:1,roughness:.44}),K=new $i({color:16776960,metalness:1,roughness:.44}),z=new rn;z.moveTo(0,.15),z.lineTo(.1,0),z.lineTo(0,-.15),z.lineTo(-.1,0),z.lineTo(0,.15);const ge={depth:.07,bevelEnabled:!1},me=new xn(z,ge),_e=new ae(me,G);_e.position.set(-.25,1,.5),_e.rotation.y=Math.PI/30,l.add(_e);const be=new ae(me,K);be.position.set(.25,1,.5),be.rotation.y=Math.PI/30,l.add(be),t.add(l),i.position.set(0,1,4),i.lookAt(0,0,0);function ze(){requestAnimationFrame(ze),a.uniforms.time.value+=.1,l.rotation.y+=.02,r.render(t,i)}ze(),window.addEventListener("resize",()=>{i.aspect=window.innerWidth/window.innerHeight,i.updateProjectionMatrix(),r.setSize(window.innerWidth,window.innerHeight)})}),(t,i)=>(Mn(),In("div",{ref_key:"threeCanvas",ref:e,class:"three-container"},null,512))}}),ob=Dn(sb,[["__scopeId","data-v-a7796925"]]),ab=an({__name:"PinkBlueBear",props:{background:{type:Boolean,default:!1},cameraPosition:{type:Number,default:4},bodyPosition:{type:Object,default:()=>({x:0,y:0,z:0})}},setup(n){const e=Tt(null),t=n;return Ln(()=>{if(e.value){let i=function(){requestAnimationFrame(i),x.rotation.y+=.03,o.render(r,s)};const r=new er,s=new _t(75,window.innerWidth/window.innerHeight,.1,1e3),o=new Qi({antialias:!0,alpha:!0});o.setSize(window.innerWidth,window.innerHeight),e.value&&e.value.appendChild(o.domElement),o.toneMapping=Rs,o.toneMappingExposure=1.25,e.value.appendChild(o.domElement);const a=new nr(16777215,.4);r.add(a);const l=new tr(16777215,1);l.position.set(5,5,5),r.add(l);const c=new jo(16777215,2,50);c.position.set(0,2,4),r.add(c);const u=`
            varying vec3 vPosition;
            varying vec3 vNormal;
            void main() {
                vPosition = position;
                vNormal = normalize(normalMatrix * normal);
                gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            }
        `,h=`
            varying vec3 vPosition;
            varying vec3 vNormal;
            void main() {
                vec3 leftColor = vec3(1.0, 0.41, 0.71);
                vec3 rightColor = vec3(0.0, 0.75, .85);
                vec3 color = (vPosition.x < 0.0) ? leftColor : rightColor;
                vec3 lightDir = normalize(vec3(1.5, 1, 3));
                float diff = max(dot(vNormal, lightDir), 0.15);
                vec3 ambientLight = vec3(0.12);
                vec3 finalColor = ambientLight + (color * diff);
                gl_FragColor = vec4(finalColor, 1.0);
            }
        `,f=new zt({vertexShader:u,fragmentShader:h}),d=new $i({color:16738740,metalness:-.8,roughness:.7}),_=new $i({color:65535,metalness:.4,roughness:.7}),x=new tn,m=new Be(1,32,32),p=new ae(m,f);p.scale.set(.85,.85,.8),p.position.y=-.2,x.add(p);const w=new Be(.6,32,32),M=new ae(w,f);M.position.set(0,1,0),x.add(M);const S=new Be(.25,32,32),I=new ae(S,d);I.position.set(-.45,1.35,-.1),x.add(I);const C=new ae(S,_);C.position.set(.45,1.35,-.1),x.add(C);const R=new Be(.25,32,32),D=new ae(R,f);D.scale.set(1,.6,.8),D.position.set(0,.85,.5),x.add(D);const se=new Be(.35,32,32),y=new ae(se,d);y.scale.set(.75,1.25,.65),y.position.set(-.7,-.15,.2),x.add(y);const b=new ae(se,_);b.scale.set(.75,1.25,.65),b.position.set(.7,-.15,.2),x.add(b);const q=new wi(.2,.22,.6,32),V=new ae(q,d);V.position.set(-.4,-1.05,0),x.add(V);const Z=new ae(q,_);Z.position.set(.4,-1.05,0),x.add(Z);const re=new Be(.3,32,32),G=new ae(re,d);G.scale.set(1,.72,1.5),G.position.set(-.4,-1.45,.17),x.add(G);const K=new ae(re,_);K.scale.set(1,.72,1.5),K.position.set(.4,-1.45,.17),x.add(K);const z=new Be(.44,32,32),ge=new ae(z,d);ge.position.set(-.15,-.45,-.4),x.add(ge);const me=new ae(z,_);me.position.set(.15,-.45,-.4),x.add(me);const _e=new Be(.18,32,32),be=new ae(_e,f);be.position.set(0,-.35,-.8),x.add(be),new Zo().load("https://threejs.org/examples/fonts/helvetiker_bold.typeface.json",function($){const le=new Ki("X",{font:$,size:.18,depth:.05}),Me=new vn({color:0}),J=new ae(le,Me);J.position.set(-.3,.99,.53),J.rotation.x=Kn.degToRad(-5),J.rotation.y=Kn.degToRad(-15),x.add(J);const g=new Ki("+",{font:$,size:.25,depth:.1}),A=new vn({color:0}),L=new ae(g,A);L.position.set(.14,.99,.53),L.rotation.y=Kn.degToRad(12),L.rotation.x=Kn.degToRad(-5),x.add(L)});const te=new rn;te.moveTo(0,0),te.bezierCurveTo(0,-.3,-.6,-.3,-.6,0),te.bezierCurveTo(-.6,.3,0,.6,0,1),te.bezierCurveTo(0,.6,.6,.3,.6,0),te.bezierCurveTo(.6,-.3,0,-.3,0,0);const de={depth:.05,bevelEnabled:!0,bevelSegments:2,steps:2,bevelSize:.05,bevelThickness:.05},pe=new xn(te,de),U=new vn({color:0}),ie=new ae(pe,U);ie.scale.set(.1,.1,.1),ie.rotation.z=Kn.degToRad(210),ie.rotation.x=Kn.degToRad(5),ie.rotation.y=Kn.degToRad(-45),ie.position.set(-.4,.9,.45),x.add(ie),r.add(x),i(),s.position.set(0,1,4),s.lookAt(0,0,0),x.position.set(t.bodyPosition.x,t.bodyPosition.y,t.bodyPosition.z),s.position.set(t.bodyPosition.x,1,t.cameraPosition),s.lookAt(t.bodyPosition.x,0,0),nn(()=>t.bodyPosition,$=>{x.position.set($.x,$.y,$.z)}),nn(()=>t.cameraPosition,$=>{s.position.set(t.bodyPosition.x,1,$),s.lookAt(t.bodyPosition.x,0,0)}),window.addEventListener("resize",()=>{s.aspect=window.innerWidth/window.innerHeight,s.updateProjectionMatrix(),o.setSize(window.innerWidth,window.innerHeight)})}}),(i,r)=>(Mn(),In("div",{ref_key:"threeContainer",ref:e,class:Zi(n.background?"no-bg":"three-container")},null,2))}}),lb=Dn(ab,[["__scopeId","data-v-d6b22a15"]]),jh=`
  varying vec2 vUv;
        void main() {
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
  `,Zh=`
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
  `,cb=an({__name:"GlassBear",setup(n){const e=Tt(null);return Ln(()=>{const t=new er,i=new _t(75,window.innerWidth/window.innerHeight,.1,1e3),r=new Qi({antialias:!0,alpha:!0});r.setSize(window.innerWidth,window.innerHeight),e.value&&e.value.appendChild(r.domElement);const s=new nr(16777215,.5);t.add(s);const o=new tr(16777215,10);o.position.set(5,5,5),t.add(o);const a=new zt({uniforms:{time:{value:0},opacity:{value:.8}},vertexShader:jh,fragmentShader:Zh,transparent:!0}),l=new zt({uniforms:{time:{value:0},opacity:{value:.6}},vertexShader:jh,fragmentShader:Zh,transparent:!0,depthWrite:!1}),c=new tn,u=new Be(1,32,32),h=new ae(u,l);h.scale.set(.85,.85,.8),h.position.y=-.2,c.add(h);const f=new Be(.6,32,32),d=new ae(f,l);d.scale.set(1,.95,.95),d.position.set(0,1,0),c.add(d);const _=new Be(.25,32,32),x=new ae(_,a);x.position.set(-.45,1.35,-.1),c.add(x);const m=new ae(_,l);m.position.set(.45,1.35,-.1),c.add(m);const p=new Be(.25,32,32),w=new ae(p,a);w.scale.set(1,.6,.8),w.position.set(0,.85,.5),c.add(w);const M=new Be(.35,32,32),S=new ae(M,a);S.scale.set(.75,1.25,.65),S.position.set(-.7,-.15,.2),c.add(S);const I=new ae(M,a);I.scale.set(.75,1.25,.65),I.position.set(.7,-.15,.2),c.add(I);const C=new Be(.3,32,32),R=new ae(C,a);R.scale.set(1,.72,1.5),R.position.set(-.4,-1.45,.17),c.add(R);const D=new ae(C,a);D.scale.set(1,.72,1.5),D.position.set(.4,-1.45,.17),c.add(D);const se=new wi(.2,.22,.6,32),y=new ae(se,a);y.position.set(-.4,-1.05,0),c.add(y);const b=new ae(se,a);b.position.set(.4,-1.05,0),c.add(b);const q=new Be(.44,32,32);new ae(q,a).position.set(-.15,-.45,-.4),new ae(q,a).position.set(.15,-.45,-.4);const re=new Be(.18,32,32),G=new ae(re,a);G.position.set(0,-.35,-.75),c.add(G);const K=new rn;K.moveTo(0,0),K.bezierCurveTo(0,-.3,-.6,-.3,-.6,0),K.bezierCurveTo(-.6,.3,0,.6,0,1),K.bezierCurveTo(0,.6,.6,.3,.6,0),K.bezierCurveTo(.6,-.3,0,-.3,0,0);const z=new $i({color:8900331,metalness:1,roughness:.44}),ge=new $i({color:16776960,metalness:1,roughness:.44}),me=new rn;me.moveTo(0,.15),me.lineTo(.1,0),me.lineTo(0,-.15),me.lineTo(-.1,0),me.lineTo(0,.15);const _e={depth:.07,bevelEnabled:!1},be=new xn(me,_e),ze=new ae(be,z);ze.position.set(-.25,1,.5),ze.rotation.y=Math.PI/30,c.add(ze);const te=new ae(be,ge);te.position.set(.25,1,.5),te.rotation.y=Math.PI/30,c.add(te),new sn({color:13369344,metalness:.2,roughness:.6,clearcoat:.1,clearcoatRoughness:.8,transparent:!0,opacity:.99});const de={depth:.4,bevelEnabled:!0,bevelSegments:2,steps:2,bevelSize:.1,bevelThickness:.1},pe=new sn({color:16777215,metalness:0,roughness:.1,clearcoat:1,clearcoatRoughness:.1,transparent:!0,opacity:.85,reflectivity:1,envMapIntensity:1}),U=new xn(K,de),ie=new ae(U,pe);ie.scale.set(.5,.5,.5),ie.position.set(0,0,0),ie.rotation.y=Math.PI,ie.rotation.x=Math.PI,c.add(ie);const $=new rn;$.moveTo(0,.6),$.lineTo(.3,.3),$.lineTo(.6,0),$.lineTo(.3,-.3),$.lineTo(0,-.6),$.lineTo(-.3,-.3),$.lineTo(-.6,0),$.lineTo(-.3,.3),$.lineTo(0,.6);const le={depth:.4,bevelEnabled:!0,bevelSegments:2,steps:2,bevelSize:.1,bevelThickness:.1},Me=new xn($,le),J=new sn({color:16777215,metalness:0,roughness:.1,clearcoat:1,clearcoatRoughness:.1,transparent:!0,opacity:.85,reflectivity:1,envMapIntensity:1}),g=new ae(Me,J);g.scale.set(.5,.5,.5),g.position.set(0,0,0),t.add(c),i.position.set(0,1,4),i.lookAt(0,0,0);const A=()=>{requestAnimationFrame(A),a.uniforms.time.value+=.03,c.rotation.y+=.03,r.render(t,i)};A(),window.addEventListener("resize",()=>{i.aspect=window.innerWidth/window.innerHeight,i.updateProjectionMatrix(),r.setSize(window.innerWidth,window.innerHeight)})}),(t,i)=>(Mn(),In("div",{ref_key:"threeCanvas",ref:e,class:"three-container"},null,512))}}),ub=Dn(cb,[["__scopeId","data-v-fa1425bf"]]),hb=an({__name:"HalfBlueBear",setup(n){const e=Tt(null);return Ln(()=>{if(e.value){let t=function(){requestAnimationFrame(t),h.rotation.y+=.01,s.render(i,r)};const i=new er,r=new _t(75,window.innerWidth/window.innerHeight,.1,1e3),s=new Qi({antialias:!0,alpha:!0});s.setSize(window.innerWidth,window.innerHeight),e.value.appendChild(s.domElement);const o=new nr(16777215,.6);i.add(o);const a=new tr(16777215,1.5);a.position.set(5,5,5),i.add(a);const l=new sn({color:65535,metalness:.2,roughness:.5,clearcoat:.1,clearcoatRoughness:.8,transparent:!0,opacity:.99}),c=new sn({color:16738740,metalness:.2,roughness:.5,clearcoat:.1,clearcoatRoughness:.8,transparent:!0,opacity:.99}),u=_=>{const x=new tn,m=new Be(1,32,32),p=new ae(m,_);p.scale.set(.85,.85,.8),p.position.y=-.2,x.add(p);const w=new Be(.6,32,32),M=new ae(w,_);M.scale.set(1,.95,.95),M.position.set(0,1,0),x.add(M);const S=new Be(.25,32,32),I=new ae(S,_);I.position.set(-.45,1.35,-.1),x.add(I);const C=new ae(S,_);return C.position.set(.45,1.35,-.1),x.add(C),x},h=new tn,f=u(l),d=u(c);f.position.x=-.01,d.position.x=.01,h.add(f),h.add(d),h.scale.set(1.5,1.5,1.5),i.add(h),r.position.z=5,t()}}),(t,i)=>(Mn(),In("div",{ref_key:"threeCanvas",ref:e,class:"three-canvas"},null,512))}}),fb=Dn(hb,[["__scopeId","data-v-cfba5a32"]]),db=[{path:"/3d-bear-arts",name:"ThreeScene",component:nb},{path:"/3d-bear-arts/pink",name:"PinkBear",component:Jd},{path:"/3d-bear-arts/purple",name:"PurpleBear",component:Qd},{path:"/3d-bear-arts/blue",name:"BlueBear",component:ep},{path:"/3d-bear-arts/pinkBlue",name:"PinkBlueBear",component:lb},{path:"/3d-bear-arts/diamond",name:"DiamondBear",component:ob},{path:"/3d-bear-arts/glass",name:"GlassBear",component:ub},{path:"/3d-bear-arts/halfBlue",name:"HalfBlue",component:fb}],pb=G0({history:_0(),routes:db}),ap=Ng(Hg);ap.use(pb);ap.mount("#app");
