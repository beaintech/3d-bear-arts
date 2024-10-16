(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();/**
* @vue/shared v3.5.10
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function rl(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const ft={},Cs=[],Vn=()=>{},_p=()=>!1,zo=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),ol=n=>n.startsWith("onUpdate:"),Nt=Object.assign,al=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},vp=Object.prototype.hasOwnProperty,it=(n,e)=>vp.call(n,e),$e=Array.isArray,ar=n=>Go(n)==="[object Map]",xp=n=>Go(n)==="[object Set]",Ye=n=>typeof n=="function",Pt=n=>typeof n=="string",Xs=n=>typeof n=="symbol",wt=n=>n!==null&&typeof n=="object",nf=n=>(wt(n)||Ye(n))&&Ye(n.then)&&Ye(n.catch),yp=Object.prototype.toString,Go=n=>yp.call(n),Mp=n=>Go(n).slice(8,-1),Sp=n=>Go(n)==="[object Object]",cl=n=>Pt(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,cr=rl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ho=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},wp=/-(\w)/g,yn=Ho(n=>n.replace(wp,(e,t)=>t?t.toUpperCase():"")),Ep=/\B([A-Z])/g,ss=Ho(n=>n.replace(Ep,"-$1").toLowerCase()),ko=Ho(n=>n.charAt(0).toUpperCase()+n.slice(1)),oa=Ho(n=>n?`on${ko(n)}`:""),Li=(n,e)=>!Object.is(n,e),aa=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},sf=(n,e,t,i=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:i,value:t})},bp=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let nu;const rf=()=>nu||(nu=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function ll(n){if($e(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],s=Pt(i)?Cp(i):ll(i);if(s)for(const r in s)e[r]=s[r]}return e}else if(Pt(n)||wt(n))return n}const Tp=/;(?![^(]*\))/g,Ap=/:([^]+)/,Rp=/\/\*[^]*?\*\//g;function Cp(n){const e={};return n.replace(Rp,"").split(Tp).forEach(t=>{if(t){const i=t.split(Ap);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function Un(n){let e="";if(Pt(n))e=n;else if($e(n))for(let t=0;t<n.length;t++){const i=Un(n[t]);i&&(e+=i+" ")}else if(wt(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const Pp="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Lp=rl(Pp);function of(n){return!!n||n===""}/**
* @vue/reactivity v3.5.10
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let un;class Ip{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=un,!e&&un&&(this.index=(un.scopes||(un.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=un;try{return un=this,e()}finally{un=t}}}on(){un=this}off(){un=this.parent}stop(e){if(this._active){let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.scopes)for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function Dp(){return un}let ht;const ca=new WeakSet;class af{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,un&&un.active&&un.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,ca.has(this)&&(ca.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||lf(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,iu(this),uf(this);const e=ht,t=Ln;ht=this,Ln=!0;try{return this.fn()}finally{hf(this),ht=e,Ln=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)fl(e);this.deps=this.depsTail=void 0,iu(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?ca.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){nc(this)&&this.run()}get dirty(){return nc(this)}}let cf=0,Ts;function lf(n){n.flags|=8,n.next=Ts,Ts=n}function ul(){cf++}function hl(){if(--cf>0)return;let n;for(;Ts;){let e=Ts,t;for(;e;)e.flags&1||(e.flags&=-9),e=e.next;for(e=Ts,Ts=void 0;e;){if(t=e.next,e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){n||(n=i)}e=t}}if(n)throw n}function uf(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function hf(n){let e,t=n.depsTail,i=t;for(;i;){const s=i.prevDep;i.version===-1?(i===t&&(t=s),fl(i),Up(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=s}n.deps=e,n.depsTail=t}function nc(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(ff(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function ff(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===xr))return;n.globalVersion=xr;const e=n.dep;if(n.flags|=2,e.version>0&&!n.isSSR&&n.deps&&!nc(n)){n.flags&=-3;return}const t=ht,i=Ln;ht=n,Ln=!0;try{uf(n);const s=n.fn(n._value);(e.version===0||Li(s,n._value))&&(n._value=s,e.version++)}catch(s){throw e.version++,s}finally{ht=t,Ln=i,hf(n),n.flags&=-3}}function fl(n,e=!1){const{dep:t,prevSub:i,nextSub:s}=n;if(i&&(i.nextSub=s,n.prevSub=void 0),s&&(s.prevSub=i,n.nextSub=void 0),t.subs===n&&(t.subs=i),!t.subs&&t.computed){t.computed.flags&=-5;for(let r=t.computed.deps;r;r=r.nextDep)fl(r,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function Up(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let Ln=!0;const df=[];function Di(){df.push(Ln),Ln=!1}function Ui(){const n=df.pop();Ln=n===void 0?!0:n}function iu(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=ht;ht=void 0;try{e()}finally{ht=t}}}let xr=0;class Np{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class dl{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.target=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!ht||!Ln||ht===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==ht)t=this.activeLink=new Np(ht,this),ht.deps?(t.prevDep=ht.depsTail,ht.depsTail.nextDep=t,ht.depsTail=t):ht.deps=ht.depsTail=t,pf(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const i=t.nextDep;i.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=i),t.prevDep=ht.depsTail,t.nextDep=void 0,ht.depsTail.nextDep=t,ht.depsTail=t,ht.deps===t&&(ht.deps=i)}return t}trigger(e){this.version++,xr++,this.notify(e)}notify(e){ul();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{hl()}}}function pf(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)pf(i)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const ic=new WeakMap,Zi=Symbol(""),sc=Symbol(""),yr=Symbol("");function Vt(n,e,t){if(Ln&&ht){let i=ic.get(n);i||ic.set(n,i=new Map);let s=i.get(t);s||(i.set(t,s=new dl),s.target=n,s.map=i,s.key=t),s.track()}}function ci(n,e,t,i,s,r){const o=ic.get(n);if(!o){xr++;return}const a=c=>{c&&c.trigger()};if(ul(),e==="clear")o.forEach(a);else{const c=$e(n),l=c&&cl(t);if(c&&t==="length"){const h=Number(i);o.forEach((u,f)=>{(f==="length"||f===yr||!Xs(f)&&f>=h)&&a(u)})}else switch(t!==void 0&&a(o.get(t)),l&&a(o.get(yr)),e){case"add":c?l&&a(o.get("length")):(a(o.get(Zi)),ar(n)&&a(o.get(sc)));break;case"delete":c||(a(o.get(Zi)),ar(n)&&a(o.get(sc)));break;case"set":ar(n)&&a(o.get(Zi));break}}hl()}function cs(n){const e=rt(n);return e===n?e:(Vt(e,"iterate",yr),In(n)?e:e.map($t))}function pl(n){return Vt(n=rt(n),"iterate",yr),n}const Fp={__proto__:null,[Symbol.iterator](){return la(this,Symbol.iterator,$t)},concat(...n){return cs(this).concat(...n.map(e=>$e(e)?cs(e):e))},entries(){return la(this,"entries",n=>(n[1]=$t(n[1]),n))},every(n,e){return jn(this,"every",n,e,void 0,arguments)},filter(n,e){return jn(this,"filter",n,e,t=>t.map($t),arguments)},find(n,e){return jn(this,"find",n,e,$t,arguments)},findIndex(n,e){return jn(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return jn(this,"findLast",n,e,$t,arguments)},findLastIndex(n,e){return jn(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return jn(this,"forEach",n,e,void 0,arguments)},includes(...n){return ua(this,"includes",n)},indexOf(...n){return ua(this,"indexOf",n)},join(n){return cs(this).join(n)},lastIndexOf(...n){return ua(this,"lastIndexOf",n)},map(n,e){return jn(this,"map",n,e,void 0,arguments)},pop(){return Ks(this,"pop")},push(...n){return Ks(this,"push",n)},reduce(n,...e){return su(this,"reduce",n,e)},reduceRight(n,...e){return su(this,"reduceRight",n,e)},shift(){return Ks(this,"shift")},some(n,e){return jn(this,"some",n,e,void 0,arguments)},splice(...n){return Ks(this,"splice",n)},toReversed(){return cs(this).toReversed()},toSorted(n){return cs(this).toSorted(n)},toSpliced(...n){return cs(this).toSpliced(...n)},unshift(...n){return Ks(this,"unshift",n)},values(){return la(this,"values",$t)}};function la(n,e,t){const i=pl(n),s=i[e]();return i!==n&&!In(n)&&(s._next=s.next,s.next=()=>{const r=s._next();return r.value&&(r.value=t(r.value)),r}),s}const Op=Array.prototype;function jn(n,e,t,i,s,r){const o=pl(n),a=o!==n&&!In(n),c=o[e];if(c!==Op[e]){const u=c.apply(n,r);return a?$t(u):u}let l=t;o!==n&&(a?l=function(u,f){return t.call(this,$t(u),f,n)}:t.length>2&&(l=function(u,f){return t.call(this,u,f,n)}));const h=c.call(o,l,i);return a&&s?s(h):h}function su(n,e,t,i){const s=pl(n);let r=t;return s!==n&&(In(n)?t.length>3&&(r=function(o,a,c){return t.call(this,o,a,c,n)}):r=function(o,a,c){return t.call(this,o,$t(a),c,n)}),s[e](r,...i)}function ua(n,e,t){const i=rt(n);Vt(i,"iterate",yr);const s=i[e](...t);return(s===-1||s===!1)&&vl(t[0])?(t[0]=rt(t[0]),i[e](...t)):s}function Ks(n,e,t=[]){Di(),ul();const i=rt(n)[e].apply(n,t);return hl(),Ui(),i}const Bp=rl("__proto__,__v_isRef,__isVue"),mf=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(Xs));function zp(n){Xs(n)||(n=String(n));const e=rt(this);return Vt(e,"has",n),e.hasOwnProperty(n)}class gf{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,i){const s=this._isReadonly,r=this._isShallow;if(t==="__v_isReactive")return!s;if(t==="__v_isReadonly")return s;if(t==="__v_isShallow")return r;if(t==="__v_raw")return i===(s?r?Jp:yf:r?xf:vf).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=$e(e);if(!s){let c;if(o&&(c=Fp[t]))return c;if(t==="hasOwnProperty")return zp}const a=Reflect.get(e,t,Gt(e)?e:i);return(Xs(t)?mf.has(t):Bp(t))||(s||Vt(e,"get",t),r)?a:Gt(a)?o&&cl(t)?a:a.value:wt(a)?s?Sf(a):Wo(a):a}}class _f extends gf{constructor(e=!1){super(!1,e)}set(e,t,i,s){let r=e[t];if(!this._isShallow){const c=Ji(r);if(!In(i)&&!Ji(i)&&(r=rt(r),i=rt(i)),!$e(e)&&Gt(r)&&!Gt(i))return c?!1:(r.value=i,!0)}const o=$e(e)&&cl(t)?Number(t)<e.length:it(e,t),a=Reflect.set(e,t,i,Gt(e)?e:s);return e===rt(s)&&(o?Li(i,r)&&ci(e,"set",t,i):ci(e,"add",t,i)),a}deleteProperty(e,t){const i=it(e,t);e[t];const s=Reflect.deleteProperty(e,t);return s&&i&&ci(e,"delete",t,void 0),s}has(e,t){const i=Reflect.has(e,t);return(!Xs(t)||!mf.has(t))&&Vt(e,"has",t),i}ownKeys(e){return Vt(e,"iterate",$e(e)?"length":Zi),Reflect.ownKeys(e)}}class Gp extends gf{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const Hp=new _f,kp=new Gp,Vp=new _f(!0);const ml=n=>n,Vo=n=>Reflect.getPrototypeOf(n);function kr(n,e,t=!1,i=!1){n=n.__v_raw;const s=rt(n),r=rt(e);t||(Li(e,r)&&Vt(s,"get",e),Vt(s,"get",r));const{has:o}=Vo(s),a=i?ml:t?xl:$t;if(o.call(s,e))return a(n.get(e));if(o.call(s,r))return a(n.get(r));n!==s&&n.get(e)}function Vr(n,e=!1){const t=this.__v_raw,i=rt(t),s=rt(n);return e||(Li(n,s)&&Vt(i,"has",n),Vt(i,"has",s)),n===s?t.has(n):t.has(n)||t.has(s)}function Wr(n,e=!1){return n=n.__v_raw,!e&&Vt(rt(n),"iterate",Zi),Reflect.get(n,"size",n)}function ru(n,e=!1){!e&&!In(n)&&!Ji(n)&&(n=rt(n));const t=rt(this);return Vo(t).has.call(t,n)||(t.add(n),ci(t,"add",n,n)),this}function ou(n,e,t=!1){!t&&!In(e)&&!Ji(e)&&(e=rt(e));const i=rt(this),{has:s,get:r}=Vo(i);let o=s.call(i,n);o||(n=rt(n),o=s.call(i,n));const a=r.call(i,n);return i.set(n,e),o?Li(e,a)&&ci(i,"set",n,e):ci(i,"add",n,e),this}function au(n){const e=rt(this),{has:t,get:i}=Vo(e);let s=t.call(e,n);s||(n=rt(n),s=t.call(e,n)),i&&i.call(e,n);const r=e.delete(n);return s&&ci(e,"delete",n,void 0),r}function cu(){const n=rt(this),e=n.size!==0,t=n.clear();return e&&ci(n,"clear",void 0,void 0),t}function Xr(n,e){return function(i,s){const r=this,o=r.__v_raw,a=rt(o),c=e?ml:n?xl:$t;return!n&&Vt(a,"iterate",Zi),o.forEach((l,h)=>i.call(s,c(l),c(h),r))}}function qr(n,e,t){return function(...i){const s=this.__v_raw,r=rt(s),o=ar(r),a=n==="entries"||n===Symbol.iterator&&o,c=n==="keys"&&o,l=s[n](...i),h=t?ml:e?xl:$t;return!e&&Vt(r,"iterate",c?sc:Zi),{next(){const{value:u,done:f}=l.next();return f?{value:u,done:f}:{value:a?[h(u[0]),h(u[1])]:h(u),done:f}},[Symbol.iterator](){return this}}}}function mi(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function Wp(){const n={get(r){return kr(this,r)},get size(){return Wr(this)},has:Vr,add:ru,set:ou,delete:au,clear:cu,forEach:Xr(!1,!1)},e={get(r){return kr(this,r,!1,!0)},get size(){return Wr(this)},has:Vr,add(r){return ru.call(this,r,!0)},set(r,o){return ou.call(this,r,o,!0)},delete:au,clear:cu,forEach:Xr(!1,!0)},t={get(r){return kr(this,r,!0)},get size(){return Wr(this,!0)},has(r){return Vr.call(this,r,!0)},add:mi("add"),set:mi("set"),delete:mi("delete"),clear:mi("clear"),forEach:Xr(!0,!1)},i={get(r){return kr(this,r,!0,!0)},get size(){return Wr(this,!0)},has(r){return Vr.call(this,r,!0)},add:mi("add"),set:mi("set"),delete:mi("delete"),clear:mi("clear"),forEach:Xr(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{n[r]=qr(r,!1,!1),t[r]=qr(r,!0,!1),e[r]=qr(r,!1,!0),i[r]=qr(r,!0,!0)}),[n,t,e,i]}const[Xp,qp,Yp,$p]=Wp();function gl(n,e){const t=e?n?$p:Yp:n?qp:Xp;return(i,s,r)=>s==="__v_isReactive"?!n:s==="__v_isReadonly"?n:s==="__v_raw"?i:Reflect.get(it(t,s)&&s in i?t:i,s,r)}const jp={get:gl(!1,!1)},Kp={get:gl(!1,!0)},Zp={get:gl(!0,!1)};const vf=new WeakMap,xf=new WeakMap,yf=new WeakMap,Jp=new WeakMap;function Qp(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function em(n){return n.__v_skip||!Object.isExtensible(n)?0:Qp(Mp(n))}function Wo(n){return Ji(n)?n:_l(n,!1,Hp,jp,vf)}function Mf(n){return _l(n,!1,Vp,Kp,xf)}function Sf(n){return _l(n,!0,kp,Zp,yf)}function _l(n,e,t,i,s){if(!wt(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const r=s.get(n);if(r)return r;const o=em(n);if(o===0)return n;const a=new Proxy(n,o===2?i:t);return s.set(n,a),a}function lr(n){return Ji(n)?lr(n.__v_raw):!!(n&&n.__v_isReactive)}function Ji(n){return!!(n&&n.__v_isReadonly)}function In(n){return!!(n&&n.__v_isShallow)}function vl(n){return n?!!n.__v_raw:!1}function rt(n){const e=n&&n.__v_raw;return e?rt(e):n}function tm(n){return!it(n,"__v_skip")&&Object.isExtensible(n)&&sf(n,"__v_skip",!0),n}const $t=n=>wt(n)?Wo(n):n,xl=n=>wt(n)?Sf(n):n;function Gt(n){return n?n.__v_isRef===!0:!1}function ut(n){return wf(n,!1)}function nm(n){return wf(n,!0)}function wf(n,e){return Gt(n)?n:new im(n,e)}class im{constructor(e,t){this.dep=new dl,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:rt(e),this._value=t?e:$t(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,i=this.__v_isShallow||In(e)||Ji(e);e=i?e:rt(e),Li(e,t)&&(this._rawValue=e,this._value=i?e:$t(e),this.dep.trigger())}}function _n(n){return Gt(n)?n.value:n}const sm={get:(n,e,t)=>e==="__v_raw"?n:_n(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const s=n[e];return Gt(s)&&!Gt(t)?(s.value=t,!0):Reflect.set(n,e,t,i)}};function Ef(n){return lr(n)?n:new Proxy(n,sm)}class rm{constructor(e,t,i){this.fn=e,this.setter=t,this._value=void 0,this.dep=new dl(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=xr-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&ht!==this)return lf(this),!0}get value(){const e=this.dep.track();return ff(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function om(n,e,t=!1){let i,s;return Ye(n)?i=n:(i=n.get,s=n.set),new rm(i,s,t)}const Yr={},Co=new WeakMap;let Xi;function am(n,e=!1,t=Xi){if(t){let i=Co.get(t);i||Co.set(t,i=[]),i.push(n)}}function cm(n,e,t=ft){const{immediate:i,deep:s,once:r,scheduler:o,augmentJob:a,call:c}=t,l=S=>s?S:In(S)||s===!1||s===0?Ti(S,1):Ti(S);let h,u,f,d,_=!1,M=!1;if(Gt(n)?(u=()=>n.value,_=In(n)):lr(n)?(u=()=>l(n),_=!0):$e(n)?(M=!0,_=n.some(S=>lr(S)||In(S)),u=()=>n.map(S=>{if(Gt(S))return S.value;if(lr(S))return l(S);if(Ye(S))return c?c(S,2):S()})):Ye(n)?e?u=c?()=>c(n,2):n:u=()=>{if(f){Di();try{f()}finally{Ui()}}const S=Xi;Xi=h;try{return c?c(n,3,[d]):n(d)}finally{Xi=S}}:u=Vn,e&&s){const S=u,U=s===!0?1/0:s;u=()=>Ti(S(),U)}const m=Dp(),p=()=>{h.stop(),m&&al(m.effects,h)};if(r&&e){const S=e;e=(...U)=>{S(...U),p()}}let w=M?new Array(n.length).fill(Yr):Yr;const x=S=>{if(!(!(h.flags&1)||!h.dirty&&!S))if(e){const U=h.run();if(s||_||(M?U.some((C,A)=>Li(C,w[A])):Li(U,w))){f&&f();const C=Xi;Xi=h;try{const A=[U,w===Yr?void 0:M&&w[0]===Yr?[]:w,d];c?c(e,3,A):e(...A),w=U}finally{Xi=C}}}else h.run()};return a&&a(x),h=new af(u),h.scheduler=o?()=>o(x,!1):x,d=S=>am(S,!1,h),f=h.onStop=()=>{const S=Co.get(h);if(S){if(c)c(S,4);else for(const U of S)U();Co.delete(h)}},e?i?x(!0):w=h.run():o?o(x.bind(null,!0),!0):h.run(),p.pause=h.pause.bind(h),p.resume=h.resume.bind(h),p.stop=p,p}function Ti(n,e=1/0,t){if(e<=0||!wt(n)||n.__v_skip||(t=t||new Set,t.has(n)))return n;if(t.add(n),e--,Gt(n))Ti(n.value,e,t);else if($e(n))for(let i=0;i<n.length;i++)Ti(n[i],e,t);else if(xp(n)||ar(n))n.forEach(i=>{Ti(i,e,t)});else if(Sp(n)){for(const i in n)Ti(n[i],e,t);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&Ti(n[i],e,t)}return n}/**
* @vue/runtime-core v3.5.10
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Ur(n,e,t,i){try{return i?n(...i):n()}catch(s){Xo(s,e,t)}}function Xn(n,e,t,i){if(Ye(n)){const s=Ur(n,e,t,i);return s&&nf(s)&&s.catch(r=>{Xo(r,e,t)}),s}if($e(n)){const s=[];for(let r=0;r<n.length;r++)s.push(Xn(n[r],e,t,i));return s}}function Xo(n,e,t,i=!0){const s=e?e.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||ft;if(e){let a=e.parent;const c=e.proxy,l=`https://vuejs.org/error-reference/#runtime-${t}`;for(;a;){const h=a.ec;if(h){for(let u=0;u<h.length;u++)if(h[u](n,c,l)===!1)return}a=a.parent}if(r){Di(),Ur(r,null,10,[n,c,l]),Ui();return}}lm(n,t,s,i,o)}function lm(n,e,t,i=!0,s=!1){if(s)throw n;console.error(n)}let Mr=!1,rc=!1;const jt=[];let Gn=0;const Ps=[];let wi=null,ws=0;const bf=Promise.resolve();let yl=null;function Tf(n){const e=yl||bf;return n?e.then(this?n.bind(this):n):e}function um(n){let e=Mr?Gn+1:0,t=jt.length;for(;e<t;){const i=e+t>>>1,s=jt[i],r=Sr(s);r<n||r===n&&s.flags&2?e=i+1:t=i}return e}function Ml(n){if(!(n.flags&1)){const e=Sr(n),t=jt[jt.length-1];!t||!(n.flags&2)&&e>=Sr(t)?jt.push(n):jt.splice(um(e),0,n),n.flags|=1,Af()}}function Af(){!Mr&&!rc&&(rc=!0,yl=bf.then(Cf))}function hm(n){$e(n)?Ps.push(...n):wi&&n.id===-1?wi.splice(ws+1,0,n):n.flags&1||(Ps.push(n),n.flags|=1),Af()}function lu(n,e,t=Mr?Gn+1:0){for(;t<jt.length;t++){const i=jt[t];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;jt.splice(t,1),t--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function Rf(n){if(Ps.length){const e=[...new Set(Ps)].sort((t,i)=>Sr(t)-Sr(i));if(Ps.length=0,wi){wi.push(...e);return}for(wi=e,ws=0;ws<wi.length;ws++){const t=wi[ws];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}wi=null,ws=0}}const Sr=n=>n.id==null?n.flags&2?-1:1/0:n.id;function Cf(n){rc=!1,Mr=!0;try{for(Gn=0;Gn<jt.length;Gn++){const e=jt[Gn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Ur(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Gn<jt.length;Gn++){const e=jt[Gn];e&&(e.flags&=-2)}Gn=0,jt.length=0,Rf(),Mr=!1,yl=null,(jt.length||Ps.length)&&Cf()}}let Pn=null,Pf=null;function Po(n){const e=Pn;return Pn=n,Pf=n&&n.type.__scopeId||null,e}function mn(n,e=Pn,t){if(!e||n._n)return n;const i=(...s)=>{i._d&&xu(-1);const r=Po(e);let o;try{o=n(...s)}finally{Po(r),i._d&&xu(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function Oi(n,e,t,i){const s=n.dirs,r=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];r&&(a.oldValue=r[o].value);let c=a.dir[i];c&&(Di(),Xn(c,t,8,[n.el,a,n,e]),Ui())}}const fm=Symbol("_vte"),dm=n=>n.__isTeleport;function Sl(n,e){n.shapeFlag&6&&n.component?(n.transition=e,Sl(n.component.subTree,e)):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}/*! #__NO_SIDE_EFFECTS__ */function Wt(n,e){return Ye(n)?Nt({name:n.name},e,{setup:n}):n}function Lf(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function oc(n,e,t,i,s=!1){if($e(n)){n.forEach((_,M)=>oc(_,e&&($e(e)?e[M]:e),t,i,s));return}if(ur(i)&&!s)return;const r=i.shapeFlag&4?Al(i.component):i.el,o=s?null:r,{i:a,r:c}=n,l=e&&e.r,h=a.refs===ft?a.refs={}:a.refs,u=a.setupState,f=rt(u),d=u===ft?()=>!1:_=>it(f,_);if(l!=null&&l!==c&&(Pt(l)?(h[l]=null,d(l)&&(u[l]=null)):Gt(l)&&(l.value=null)),Ye(c))Ur(c,a,12,[o,h]);else{const _=Pt(c),M=Gt(c);if(_||M){const m=()=>{if(n.f){const p=_?d(c)?u[c]:h[c]:c.value;s?$e(p)&&al(p,r):$e(p)?p.includes(r)||p.push(r):_?(h[c]=[r],d(c)&&(u[c]=h[c])):(c.value=[r],n.k&&(h[n.k]=c.value))}else _?(h[c]=o,d(c)&&(u[c]=o)):M&&(c.value=o,n.k&&(h[n.k]=o))};o?(m.id=-1,ln(m,t)):m()}}}const ur=n=>!!n.type.__asyncLoader,If=n=>n.type.__isKeepAlive;function pm(n,e){Df(n,"a",e)}function mm(n,e){Df(n,"da",e)}function Df(n,e,t=zt){const i=n.__wdc||(n.__wdc=()=>{let s=t;for(;s;){if(s.isDeactivated)return;s=s.parent}return n()});if(qo(e,i,t),t){let s=t.parent;for(;s&&s.parent;)If(s.parent.vnode)&&gm(i,e,t,s),s=s.parent}}function gm(n,e,t,i){const s=qo(e,n,i,!0);wl(()=>{al(i[e],s)},t)}function qo(n,e,t=zt,i=!1){if(t){const s=t[n]||(t[n]=[]),r=e.__weh||(e.__weh=(...o)=>{Di();const a=Nr(t),c=Xn(e,t,n,o);return a(),Ui(),c});return i?s.unshift(r):s.push(r),r}}const hi=n=>(e,t=zt)=>{(!jo||n==="sp")&&qo(n,(...i)=>e(...i),t)},_m=hi("bm"),tn=hi("m"),vm=hi("bu"),xm=hi("u"),ym=hi("bum"),wl=hi("um"),Mm=hi("sp"),Sm=hi("rtg"),wm=hi("rtc");function Em(n,e=zt){qo("ec",n,e)}const bm="components";function uu(n,e){return Am(bm,n,!0,e)||n}const Tm=Symbol.for("v-ndc");function Am(n,e,t=!0,i=!1){const s=Pn||zt;if(s){const r=s.type;{const a=m0(r,!1);if(a&&(a===e||a===yn(e)||a===ko(yn(e))))return r}const o=hu(s[n]||r[n],e)||hu(s.appContext[n],e);return!o&&i?r:o}}function hu(n,e){return n&&(n[e]||n[yn(e)]||n[ko(yn(e))])}const ac=n=>n?Qf(n)?Al(n):ac(n.parent):null,hr=Nt(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>ac(n.parent),$root:n=>ac(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>El(n),$forceUpdate:n=>n.f||(n.f=()=>{Ml(n.update)}),$nextTick:n=>n.n||(n.n=Tf.bind(n.proxy)),$watch:n=>$m.bind(n)}),ha=(n,e)=>n!==ft&&!n.__isScriptSetup&&it(n,e),Rm={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:i,data:s,props:r,accessCache:o,type:a,appContext:c}=n;let l;if(e[0]!=="$"){const d=o[e];if(d!==void 0)switch(d){case 1:return i[e];case 2:return s[e];case 4:return t[e];case 3:return r[e]}else{if(ha(i,e))return o[e]=1,i[e];if(s!==ft&&it(s,e))return o[e]=2,s[e];if((l=n.propsOptions[0])&&it(l,e))return o[e]=3,r[e];if(t!==ft&&it(t,e))return o[e]=4,t[e];cc&&(o[e]=0)}}const h=hr[e];let u,f;if(h)return e==="$attrs"&&Vt(n.attrs,"get",""),h(n);if((u=a.__cssModules)&&(u=u[e]))return u;if(t!==ft&&it(t,e))return o[e]=4,t[e];if(f=c.config.globalProperties,it(f,e))return f[e]},set({_:n},e,t){const{data:i,setupState:s,ctx:r}=n;return ha(s,e)?(s[e]=t,!0):i!==ft&&it(i,e)?(i[e]=t,!0):it(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(r[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:s,propsOptions:r}},o){let a;return!!t[o]||n!==ft&&it(n,o)||ha(e,o)||(a=r[0])&&it(a,o)||it(i,o)||it(hr,o)||it(s.config.globalProperties,o)},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:it(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function fu(n){return $e(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let cc=!0;function Cm(n){const e=El(n),t=n.proxy,i=n.ctx;cc=!1,e.beforeCreate&&du(e.beforeCreate,n,"bc");const{data:s,computed:r,methods:o,watch:a,provide:c,inject:l,created:h,beforeMount:u,mounted:f,beforeUpdate:d,updated:_,activated:M,deactivated:m,beforeDestroy:p,beforeUnmount:w,destroyed:x,unmounted:S,render:U,renderTracked:C,renderTriggered:A,errorCaptured:F,serverPrefetch:ne,expose:y,inheritAttrs:b,components:k,directives:z,filters:Q}=e;if(l&&Pm(l,i,null),o)for(const Z in o){const B=o[Z];Ye(B)&&(i[Z]=B.bind(t))}if(s){const Z=s.call(t,t);wt(Z)&&(n.data=Wo(Z))}if(cc=!0,r)for(const Z in r){const B=r[Z],_e=Ye(B)?B.bind(t,t):Ye(B.get)?B.get.bind(t,t):Vn,me=!Ye(B)&&Ye(B.set)?B.set.bind(t):Vn,ge=It({get:_e,set:me});Object.defineProperty(i,Z,{enumerable:!0,configurable:!0,get:()=>ge.value,set:we=>ge.value=we})}if(a)for(const Z in a)Uf(a[Z],i,t,Z);if(c){const Z=Ye(c)?c.call(t):c;Reflect.ownKeys(Z).forEach(B=>{xo(B,Z[B])})}h&&du(h,n,"c");function H(Z,B){$e(B)?B.forEach(_e=>Z(_e.bind(t))):B&&Z(B.bind(t))}if(H(_m,u),H(tn,f),H(vm,d),H(xm,_),H(pm,M),H(mm,m),H(Em,F),H(wm,C),H(Sm,A),H(ym,w),H(wl,S),H(Mm,ne),$e(y))if(y.length){const Z=n.exposed||(n.exposed={});y.forEach(B=>{Object.defineProperty(Z,B,{get:()=>t[B],set:_e=>t[B]=_e})})}else n.exposed||(n.exposed={});U&&n.render===Vn&&(n.render=U),b!=null&&(n.inheritAttrs=b),k&&(n.components=k),z&&(n.directives=z),ne&&Lf(n)}function Pm(n,e,t=Vn){$e(n)&&(n=lc(n));for(const i in n){const s=n[i];let r;wt(s)?"default"in s?r=li(s.from||i,s.default,!0):r=li(s.from||i):r=li(s),Gt(r)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[i]=r}}function du(n,e,t){Xn($e(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function Uf(n,e,t,i){let s=i.includes(".")?$f(t,i):()=>t[i];if(Pt(n)){const r=e[n];Ye(r)&&bt(s,r)}else if(Ye(n))bt(s,n.bind(t));else if(wt(n))if($e(n))n.forEach(r=>Uf(r,e,t,i));else{const r=Ye(n.handler)?n.handler.bind(t):e[n.handler];Ye(r)&&bt(s,r,n)}}function El(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=n.appContext,a=r.get(e);let c;return a?c=a:!s.length&&!t&&!i?c=e:(c={},s.length&&s.forEach(l=>Lo(c,l,o,!0)),Lo(c,e,o)),wt(e)&&r.set(e,c),c}function Lo(n,e,t,i=!1){const{mixins:s,extends:r}=e;r&&Lo(n,r,t,!0),s&&s.forEach(o=>Lo(n,o,t,!0));for(const o in e)if(!(i&&o==="expose")){const a=Lm[o]||t&&t[o];n[o]=a?a(n[o],e[o]):e[o]}return n}const Lm={data:pu,props:mu,emits:mu,methods:rr,computed:rr,beforeCreate:Xt,created:Xt,beforeMount:Xt,mounted:Xt,beforeUpdate:Xt,updated:Xt,beforeDestroy:Xt,beforeUnmount:Xt,destroyed:Xt,unmounted:Xt,activated:Xt,deactivated:Xt,errorCaptured:Xt,serverPrefetch:Xt,components:rr,directives:rr,watch:Dm,provide:pu,inject:Im};function pu(n,e){return e?n?function(){return Nt(Ye(n)?n.call(this,this):n,Ye(e)?e.call(this,this):e)}:e:n}function Im(n,e){return rr(lc(n),lc(e))}function lc(n){if($e(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function Xt(n,e){return n?[...new Set([].concat(n,e))]:e}function rr(n,e){return n?Nt(Object.create(null),n,e):e}function mu(n,e){return n?$e(n)&&$e(e)?[...new Set([...n,...e])]:Nt(Object.create(null),fu(n),fu(e??{})):e}function Dm(n,e){if(!n)return e;if(!e)return n;const t=Nt(Object.create(null),n);for(const i in e)t[i]=Xt(n[i],e[i]);return t}function Nf(){return{app:null,config:{isNativeTag:_p,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Um=0;function Nm(n,e){return function(i,s=null){Ye(i)||(i=Nt({},i)),s!=null&&!wt(s)&&(s=null);const r=Nf(),o=new WeakSet,a=[];let c=!1;const l=r.app={_uid:Um++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:_0,get config(){return r.config},set config(h){},use(h,...u){return o.has(h)||(h&&Ye(h.install)?(o.add(h),h.install(l,...u)):Ye(h)&&(o.add(h),h(l,...u))),l},mixin(h){return r.mixins.includes(h)||r.mixins.push(h),l},component(h,u){return u?(r.components[h]=u,l):r.components[h]},directive(h,u){return u?(r.directives[h]=u,l):r.directives[h]},mount(h,u,f){if(!c){const d=l._ceVNode||ct(i,s);return d.appContext=r,f===!0?f="svg":f===!1&&(f=void 0),u&&e?e(d,h):n(d,h,f),c=!0,l._container=h,h.__vue_app__=l,Al(d.component)}},onUnmount(h){a.push(h)},unmount(){c&&(Xn(a,l._instance,16),n(null,l._container),delete l._container.__vue_app__)},provide(h,u){return r.provides[h]=u,l},runWithContext(h){const u=Ls;Ls=l;try{return h()}finally{Ls=u}}};return l}}let Ls=null;function xo(n,e){if(zt){let t=zt.provides;const i=zt.parent&&zt.parent.provides;i===t&&(t=zt.provides=Object.create(i)),t[n]=e}}function li(n,e,t=!1){const i=zt||Pn;if(i||Ls){const s=Ls?Ls._context.provides:i?i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(s&&n in s)return s[n];if(arguments.length>1)return t&&Ye(e)?e.call(i&&i.proxy):e}}const Ff={},Of=()=>Object.create(Ff),Bf=n=>Object.getPrototypeOf(n)===Ff;function Fm(n,e,t,i=!1){const s={},r=Of();n.propsDefaults=Object.create(null),zf(n,e,s,r);for(const o in n.propsOptions[0])o in s||(s[o]=void 0);t?n.props=i?s:Mf(s):n.type.props?n.props=s:n.props=r,n.attrs=r}function Om(n,e,t,i){const{props:s,attrs:r,vnode:{patchFlag:o}}=n,a=rt(s),[c]=n.propsOptions;let l=!1;if((i||o>0)&&!(o&16)){if(o&8){const h=n.vnode.dynamicProps;for(let u=0;u<h.length;u++){let f=h[u];if(Yo(n.emitsOptions,f))continue;const d=e[f];if(c)if(it(r,f))d!==r[f]&&(r[f]=d,l=!0);else{const _=yn(f);s[_]=uc(c,a,_,d,n,!1)}else d!==r[f]&&(r[f]=d,l=!0)}}}else{zf(n,e,s,r)&&(l=!0);let h;for(const u in a)(!e||!it(e,u)&&((h=ss(u))===u||!it(e,h)))&&(c?t&&(t[u]!==void 0||t[h]!==void 0)&&(s[u]=uc(c,a,u,void 0,n,!0)):delete s[u]);if(r!==a)for(const u in r)(!e||!it(e,u))&&(delete r[u],l=!0)}l&&ci(n.attrs,"set","")}function zf(n,e,t,i){const[s,r]=n.propsOptions;let o=!1,a;if(e)for(let c in e){if(cr(c))continue;const l=e[c];let h;s&&it(s,h=yn(c))?!r||!r.includes(h)?t[h]=l:(a||(a={}))[h]=l:Yo(n.emitsOptions,c)||(!(c in i)||l!==i[c])&&(i[c]=l,o=!0)}if(r){const c=rt(t),l=a||ft;for(let h=0;h<r.length;h++){const u=r[h];t[u]=uc(s,c,u,l[u],n,!it(l,u))}}return o}function uc(n,e,t,i,s,r){const o=n[t];if(o!=null){const a=it(o,"default");if(a&&i===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&Ye(c)){const{propsDefaults:l}=s;if(t in l)i=l[t];else{const h=Nr(s);i=l[t]=c.call(null,e),h()}}else i=c;s.ce&&s.ce._setProp(t,i)}o[0]&&(r&&!a?i=!1:o[1]&&(i===""||i===ss(t))&&(i=!0))}return i}const Bm=new WeakMap;function Gf(n,e,t=!1){const i=t?Bm:e.propsCache,s=i.get(n);if(s)return s;const r=n.props,o={},a=[];let c=!1;if(!Ye(n)){const h=u=>{c=!0;const[f,d]=Gf(u,e,!0);Nt(o,f),d&&a.push(...d)};!t&&e.mixins.length&&e.mixins.forEach(h),n.extends&&h(n.extends),n.mixins&&n.mixins.forEach(h)}if(!r&&!c)return wt(n)&&i.set(n,Cs),Cs;if($e(r))for(let h=0;h<r.length;h++){const u=yn(r[h]);gu(u)&&(o[u]=ft)}else if(r)for(const h in r){const u=yn(h);if(gu(u)){const f=r[h],d=o[u]=$e(f)||Ye(f)?{type:f}:Nt({},f),_=d.type;let M=!1,m=!0;if($e(_))for(let p=0;p<_.length;++p){const w=_[p],x=Ye(w)&&w.name;if(x==="Boolean"){M=!0;break}else x==="String"&&(m=!1)}else M=Ye(_)&&_.name==="Boolean";d[0]=M,d[1]=m,(M||it(d,"default"))&&a.push(u)}}const l=[o,a];return wt(n)&&i.set(n,l),l}function gu(n){return n[0]!=="$"&&!cr(n)}const Hf=n=>n[0]==="_"||n==="$stable",bl=n=>$e(n)?n.map(Hn):[Hn(n)],zm=(n,e,t)=>{if(e._n)return e;const i=mn((...s)=>bl(e(...s)),t);return i._c=!1,i},kf=(n,e,t)=>{const i=n._ctx;for(const s in n){if(Hf(s))continue;const r=n[s];if(Ye(r))e[s]=zm(s,r,i);else if(r!=null){const o=bl(r);e[s]=()=>o}}},Vf=(n,e)=>{const t=bl(e);n.slots.default=()=>t},Wf=(n,e,t)=>{for(const i in e)(t||i!=="_")&&(n[i]=e[i])},Gm=(n,e,t)=>{const i=n.slots=Of();if(n.vnode.shapeFlag&32){const s=e._;s?(Wf(i,e,t),t&&sf(i,"_",s,!0)):kf(e,i)}else e&&Vf(n,e)},Hm=(n,e,t)=>{const{vnode:i,slots:s}=n;let r=!0,o=ft;if(i.shapeFlag&32){const a=e._;a?t&&a===1?r=!1:Wf(s,e,t):(r=!e.$stable,kf(e,s)),o=e}else e&&(Vf(n,e),o={default:1});if(r)for(const a in s)!Hf(a)&&o[a]==null&&delete s[a]},ln=t0;function km(n){return Vm(n)}function Vm(n,e){const t=rf();t.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:o,createText:a,createComment:c,setText:l,setElementText:h,parentNode:u,nextSibling:f,setScopeId:d=Vn,insertStaticContent:_}=n,M=(g,T,L,O=null,N=null,K=null,ee=void 0,E=null,v=!!T.dynamicChildren)=>{if(g===T)return;g&&!Zs(g,T)&&(O=D(g),we(g,N,K,!0),g=null),T.patchFlag===-2&&(v=!1,T.dynamicChildren=null);const{type:P,ref:W,shapeFlag:V}=T;switch(P){case $o:m(g,T,L,O);break;case Qi:p(g,T,L,O);break;case pa:g==null&&w(T,L,O,ee);break;case ri:k(g,T,L,O,N,K,ee,E,v);break;default:V&1?U(g,T,L,O,N,K,ee,E,v):V&6?z(g,T,L,O,N,K,ee,E,v):(V&64||V&128)&&P.process(g,T,L,O,N,K,ee,E,v,ce)}W!=null&&N&&oc(W,g&&g.ref,K,T||g,!T)},m=(g,T,L,O)=>{if(g==null)i(T.el=a(T.children),L,O);else{const N=T.el=g.el;T.children!==g.children&&l(N,T.children)}},p=(g,T,L,O)=>{g==null?i(T.el=c(T.children||""),L,O):T.el=g.el},w=(g,T,L,O)=>{[g.el,g.anchor]=_(g.children,T,L,O,g.el,g.anchor)},x=({el:g,anchor:T},L,O)=>{let N;for(;g&&g!==T;)N=f(g),i(g,L,O),g=N;i(T,L,O)},S=({el:g,anchor:T})=>{let L;for(;g&&g!==T;)L=f(g),s(g),g=L;s(T)},U=(g,T,L,O,N,K,ee,E,v)=>{T.type==="svg"?ee="svg":T.type==="math"&&(ee="mathml"),g==null?C(T,L,O,N,K,ee,E,v):ne(g,T,N,K,ee,E,v)},C=(g,T,L,O,N,K,ee,E)=>{let v,P;const{props:W,shapeFlag:V,transition:q,dirs:de}=g;if(v=g.el=o(g.type,K,W&&W.is,W),V&8?h(v,g.children):V&16&&F(g.children,v,null,O,N,fa(g,K),ee,E),de&&Oi(g,null,O,"created"),A(v,g,g.scopeId,ee,O),W){for(const ve in W)ve!=="value"&&!cr(ve)&&r(v,ve,null,W[ve],K,O);"value"in W&&r(v,"value",null,W.value,K),(P=W.onVnodeBeforeMount)&&zn(P,O,g)}de&&Oi(g,null,O,"beforeMount");const ue=Wm(N,q);ue&&q.beforeEnter(v),i(v,T,L),((P=W&&W.onVnodeMounted)||ue||de)&&ln(()=>{P&&zn(P,O,g),ue&&q.enter(v),de&&Oi(g,null,O,"mounted")},N)},A=(g,T,L,O,N)=>{if(L&&d(g,L),O)for(let K=0;K<O.length;K++)d(g,O[K]);if(N){let K=N.subTree;if(T===K||Kf(K.type)&&(K.ssContent===T||K.ssFallback===T)){const ee=N.vnode;A(g,ee,ee.scopeId,ee.slotScopeIds,N.parent)}}},F=(g,T,L,O,N,K,ee,E,v=0)=>{for(let P=v;P<g.length;P++){const W=g[P]=E?Ei(g[P]):Hn(g[P]);M(null,W,T,L,O,N,K,ee,E)}},ne=(g,T,L,O,N,K,ee)=>{const E=T.el=g.el;let{patchFlag:v,dynamicChildren:P,dirs:W}=T;v|=g.patchFlag&16;const V=g.props||ft,q=T.props||ft;let de;if(L&&Bi(L,!1),(de=q.onVnodeBeforeUpdate)&&zn(de,L,T,g),W&&Oi(T,g,L,"beforeUpdate"),L&&Bi(L,!0),(V.innerHTML&&q.innerHTML==null||V.textContent&&q.textContent==null)&&h(E,""),P?y(g.dynamicChildren,P,E,L,O,fa(T,N),K):ee||B(g,T,E,null,L,O,fa(T,N),K,!1),v>0){if(v&16)b(E,V,q,L,N);else if(v&2&&V.class!==q.class&&r(E,"class",null,q.class,N),v&4&&r(E,"style",V.style,q.style,N),v&8){const ue=T.dynamicProps;for(let ve=0;ve<ue.length;ve++){const Ae=ue[ve],pe=V[Ae],Se=q[Ae];(Se!==pe||Ae==="value")&&r(E,Ae,pe,Se,N,L)}}v&1&&g.children!==T.children&&h(E,T.children)}else!ee&&P==null&&b(E,V,q,L,N);((de=q.onVnodeUpdated)||W)&&ln(()=>{de&&zn(de,L,T,g),W&&Oi(T,g,L,"updated")},O)},y=(g,T,L,O,N,K,ee)=>{for(let E=0;E<T.length;E++){const v=g[E],P=T[E],W=v.el&&(v.type===ri||!Zs(v,P)||v.shapeFlag&70)?u(v.el):L;M(v,P,W,null,O,N,K,ee,!0)}},b=(g,T,L,O,N)=>{if(T!==L){if(T!==ft)for(const K in T)!cr(K)&&!(K in L)&&r(g,K,T[K],null,N,O);for(const K in L){if(cr(K))continue;const ee=L[K],E=T[K];ee!==E&&K!=="value"&&r(g,K,E,ee,N,O)}"value"in L&&r(g,"value",T.value,L.value,N)}},k=(g,T,L,O,N,K,ee,E,v)=>{const P=T.el=g?g.el:a(""),W=T.anchor=g?g.anchor:a("");let{patchFlag:V,dynamicChildren:q,slotScopeIds:de}=T;de&&(E=E?E.concat(de):de),g==null?(i(P,L,O),i(W,L,O),F(T.children||[],L,W,N,K,ee,E,v)):V>0&&V&64&&q&&g.dynamicChildren?(y(g.dynamicChildren,q,L,N,K,ee,E),(T.key!=null||N&&T===N.subTree)&&Xf(g,T,!0)):B(g,T,L,W,N,K,ee,E,v)},z=(g,T,L,O,N,K,ee,E,v)=>{T.slotScopeIds=E,g==null?T.shapeFlag&512?N.ctx.activate(T,L,O,ee,v):Q(T,L,O,N,K,ee,v):ie(g,T,v)},Q=(g,T,L,O,N,K,ee)=>{const E=g.component=u0(g,O,N);if(If(g)&&(E.ctx.renderer=ce),h0(E,!1,ee),E.asyncDep){if(N&&N.registerDep(E,H,ee),!g.el){const v=E.subTree=ct(Qi);p(null,v,T,L)}}else H(E,g,T,L,N,K,ee)},ie=(g,T,L)=>{const O=T.component=g.component;if(Qm(g,T,L))if(O.asyncDep&&!O.asyncResolved){Z(O,T,L);return}else O.next=T,O.update();else T.el=g.el,O.vnode=T},H=(g,T,L,O,N,K,ee)=>{const E=()=>{if(g.isMounted){let{next:V,bu:q,u:de,parent:ue,vnode:ve}=g;{const Ne=qf(g);if(Ne){V&&(V.el=ve.el,Z(g,V,ee)),Ne.asyncDep.then(()=>{g.isUnmounted||E()});return}}let Ae=V,pe;Bi(g,!1),V?(V.el=ve.el,Z(g,V,ee)):V=ve,q&&aa(q),(pe=V.props&&V.props.onVnodeBeforeUpdate)&&zn(pe,ue,V,ve),Bi(g,!0);const Se=da(g),De=g.subTree;g.subTree=Se,M(De,Se,u(De.el),D(De),g,N,K),V.el=Se.el,Ae===null&&e0(g,Se.el),de&&ln(de,N),(pe=V.props&&V.props.onVnodeUpdated)&&ln(()=>zn(pe,ue,V,ve),N)}else{let V;const{el:q,props:de}=T,{bm:ue,m:ve,parent:Ae,root:pe,type:Se}=g,De=ur(T);if(Bi(g,!1),ue&&aa(ue),!De&&(V=de&&de.onVnodeBeforeMount)&&zn(V,Ae,T),Bi(g,!0),q&&J){const Ne=()=>{g.subTree=da(g),J(q,g.subTree,g,N,null)};De&&Se.__asyncHydrate?Se.__asyncHydrate(q,g,Ne):Ne()}else{pe.ce&&pe.ce._injectChildStyle(Se);const Ne=g.subTree=da(g);M(null,Ne,L,O,g,N,K),T.el=Ne.el}if(ve&&ln(ve,N),!De&&(V=de&&de.onVnodeMounted)){const Ne=T;ln(()=>zn(V,Ae,Ne),N)}(T.shapeFlag&256||Ae&&ur(Ae.vnode)&&Ae.vnode.shapeFlag&256)&&g.a&&ln(g.a,N),g.isMounted=!0,T=L=O=null}};g.scope.on();const v=g.effect=new af(E);g.scope.off();const P=g.update=v.run.bind(v),W=g.job=v.runIfDirty.bind(v);W.i=g,W.id=g.uid,v.scheduler=()=>Ml(W),Bi(g,!0),P()},Z=(g,T,L)=>{T.component=g;const O=g.vnode.props;g.vnode=T,g.next=null,Om(g,T.props,O,L),Hm(g,T.children,L),Di(),lu(g),Ui()},B=(g,T,L,O,N,K,ee,E,v=!1)=>{const P=g&&g.children,W=g?g.shapeFlag:0,V=T.children,{patchFlag:q,shapeFlag:de}=T;if(q>0){if(q&128){me(P,V,L,O,N,K,ee,E,v);return}else if(q&256){_e(P,V,L,O,N,K,ee,E,v);return}}de&8?(W&16&&fe(P,N,K),V!==P&&h(L,V)):W&16?de&16?me(P,V,L,O,N,K,ee,E,v):fe(P,N,K,!0):(W&8&&h(L,""),de&16&&F(V,L,O,N,K,ee,E,v))},_e=(g,T,L,O,N,K,ee,E,v)=>{g=g||Cs,T=T||Cs;const P=g.length,W=T.length,V=Math.min(P,W);let q;for(q=0;q<V;q++){const de=T[q]=v?Ei(T[q]):Hn(T[q]);M(g[q],de,L,null,N,K,ee,E,v)}P>W?fe(g,N,K,!0,!1,V):F(T,L,O,N,K,ee,E,v,V)},me=(g,T,L,O,N,K,ee,E,v)=>{let P=0;const W=T.length;let V=g.length-1,q=W-1;for(;P<=V&&P<=q;){const de=g[P],ue=T[P]=v?Ei(T[P]):Hn(T[P]);if(Zs(de,ue))M(de,ue,L,null,N,K,ee,E,v);else break;P++}for(;P<=V&&P<=q;){const de=g[V],ue=T[q]=v?Ei(T[q]):Hn(T[q]);if(Zs(de,ue))M(de,ue,L,null,N,K,ee,E,v);else break;V--,q--}if(P>V){if(P<=q){const de=q+1,ue=de<W?T[de].el:O;for(;P<=q;)M(null,T[P]=v?Ei(T[P]):Hn(T[P]),L,ue,N,K,ee,E,v),P++}}else if(P>q)for(;P<=V;)we(g[P],N,K,!0),P++;else{const de=P,ue=P,ve=new Map;for(P=ue;P<=q;P++){const Ie=T[P]=v?Ei(T[P]):Hn(T[P]);Ie.key!=null&&ve.set(Ie.key,P)}let Ae,pe=0;const Se=q-ue+1;let De=!1,Ne=0;const xe=new Array(Se);for(P=0;P<Se;P++)xe[P]=0;for(P=de;P<=V;P++){const Ie=g[P];if(pe>=Se){we(Ie,N,K,!0);continue}let Ge;if(Ie.key!=null)Ge=ve.get(Ie.key);else for(Ae=ue;Ae<=q;Ae++)if(xe[Ae-ue]===0&&Zs(Ie,T[Ae])){Ge=Ae;break}Ge===void 0?we(Ie,N,K,!0):(xe[Ge-ue]=P+1,Ge>=Ne?Ne=Ge:De=!0,M(Ie,T[Ge],L,null,N,K,ee,E,v),pe++)}const Be=De?Xm(xe):Cs;for(Ae=Be.length-1,P=Se-1;P>=0;P--){const Ie=ue+P,Ge=T[Ie],G=Ie+1<W?T[Ie+1].el:O;xe[P]===0?M(null,Ge,L,G,N,K,ee,E,v):De&&(Ae<0||P!==Be[Ae]?ge(Ge,L,G,2):Ae--)}}},ge=(g,T,L,O,N=null)=>{const{el:K,type:ee,transition:E,children:v,shapeFlag:P}=g;if(P&6){ge(g.component.subTree,T,L,O);return}if(P&128){g.suspense.move(T,L,O);return}if(P&64){ee.move(g,T,L,ce);return}if(ee===ri){i(K,T,L);for(let V=0;V<v.length;V++)ge(v[V],T,L,O);i(g.anchor,T,L);return}if(ee===pa){x(g,T,L);return}if(O!==2&&P&1&&E)if(O===0)E.beforeEnter(K),i(K,T,L),ln(()=>E.enter(K),N);else{const{leave:V,delayLeave:q,afterLeave:de}=E,ue=()=>i(K,T,L),ve=()=>{V(K,()=>{ue(),de&&de()})};q?q(K,ue,ve):ve()}else i(K,T,L)},we=(g,T,L,O=!1,N=!1)=>{const{type:K,props:ee,ref:E,children:v,dynamicChildren:P,shapeFlag:W,patchFlag:V,dirs:q,cacheIndex:de}=g;if(V===-2&&(N=!1),E!=null&&oc(E,null,L,g,!0),de!=null&&(T.renderCache[de]=void 0),W&256){T.ctx.deactivate(g);return}const ue=W&1&&q,ve=!ur(g);let Ae;if(ve&&(Ae=ee&&ee.onVnodeBeforeUnmount)&&zn(Ae,T,g),W&6)he(g.component,L,O);else{if(W&128){g.suspense.unmount(L,O);return}ue&&Oi(g,null,T,"beforeUnmount"),W&64?g.type.remove(g,T,L,ce,O):P&&!P.hasOnce&&(K!==ri||V>0&&V&64)?fe(P,T,L,!1,!0):(K===ri&&V&384||!N&&W&16)&&fe(v,T,L),O&&Re(g)}(ve&&(Ae=ee&&ee.onVnodeUnmounted)||ue)&&ln(()=>{Ae&&zn(Ae,T,g),ue&&Oi(g,null,T,"unmounted")},L)},Re=g=>{const{type:T,el:L,anchor:O,transition:N}=g;if(T===ri){te(L,O);return}if(T===pa){S(g);return}const K=()=>{s(L),N&&!N.persisted&&N.afterLeave&&N.afterLeave()};if(g.shapeFlag&1&&N&&!N.persisted){const{leave:ee,delayLeave:E}=N,v=()=>ee(L,K);E?E(g.el,K,v):v()}else K()},te=(g,T)=>{let L;for(;g!==T;)L=f(g),s(g),g=L;s(T)},he=(g,T,L)=>{const{bum:O,scope:N,job:K,subTree:ee,um:E,m:v,a:P}=g;_u(v),_u(P),O&&aa(O),N.stop(),K&&(K.flags|=8,we(ee,g,T,L)),E&&ln(E,T),ln(()=>{g.isUnmounted=!0},T),T&&T.pendingBranch&&!T.isUnmounted&&g.asyncDep&&!g.asyncResolved&&g.suspenseId===T.pendingId&&(T.deps--,T.deps===0&&T.resolve())},fe=(g,T,L,O=!1,N=!1,K=0)=>{for(let ee=K;ee<g.length;ee++)we(g[ee],T,L,O,N)},D=g=>{if(g.shapeFlag&6)return D(g.component.subTree);if(g.shapeFlag&128)return g.suspense.next();const T=f(g.anchor||g.el),L=T&&T[fm];return L?f(L):T};let se=!1;const j=(g,T,L)=>{g==null?T._vnode&&we(T._vnode,null,null,!0):M(T._vnode||null,g,T,null,null,null,L),T._vnode=g,se||(se=!0,lu(),Rf(),se=!1)},ce={p:M,um:we,m:ge,r:Re,mt:Q,mc:F,pc:B,pbc:y,n:D,o:n};let ye,J;return{render:j,hydrate:ye,createApp:Nm(j,ye)}}function fa({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function Bi({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function Wm(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function Xf(n,e,t=!1){const i=n.children,s=e.children;if($e(i)&&$e(s))for(let r=0;r<i.length;r++){const o=i[r];let a=s[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[r]=Ei(s[r]),a.el=o.el),!t&&a.patchFlag!==-2&&Xf(o,a)),a.type===$o&&(a.el=o.el)}}function Xm(n){const e=n.slice(),t=[0];let i,s,r,o,a;const c=n.length;for(i=0;i<c;i++){const l=n[i];if(l!==0){if(s=t[t.length-1],n[s]<l){e[i]=s,t.push(i);continue}for(r=0,o=t.length-1;r<o;)a=r+o>>1,n[t[a]]<l?r=a+1:o=a;l<n[t[r]]&&(r>0&&(e[i]=t[r-1]),t[r]=i)}}for(r=t.length,o=t[r-1];r-- >0;)t[r]=o,o=e[o];return t}function qf(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:qf(e)}function _u(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}const qm=Symbol.for("v-scx"),Ym=()=>li(qm);function bt(n,e,t){return Yf(n,e,t)}function Yf(n,e,t=ft){const{immediate:i,deep:s,flush:r,once:o}=t,a=Nt({},t);let c;if(jo)if(r==="sync"){const f=Ym();c=f.__watcherHandles||(f.__watcherHandles=[])}else if(!e||i)a.once=!0;else{const f=()=>{};return f.stop=Vn,f.resume=Vn,f.pause=Vn,f}const l=zt;a.call=(f,d,_)=>Xn(f,l,d,_);let h=!1;r==="post"?a.scheduler=f=>{ln(f,l&&l.suspense)}:r!=="sync"&&(h=!0,a.scheduler=(f,d)=>{d?f():Ml(f)}),a.augmentJob=f=>{e&&(f.flags|=4),h&&(f.flags|=2,l&&(f.id=l.uid,f.i=l))};const u=cm(n,e,a);return c&&c.push(u),u}function $m(n,e,t){const i=this.proxy,s=Pt(n)?n.includes(".")?$f(i,n):()=>i[n]:n.bind(i,i);let r;Ye(e)?r=e:(r=e.handler,t=e);const o=Nr(this),a=Yf(s,r.bind(i),t);return o(),a}function $f(n,e){const t=e.split(".");return()=>{let i=n;for(let s=0;s<t.length&&i;s++)i=i[t[s]];return i}}const jm=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${yn(e)}Modifiers`]||n[`${ss(e)}Modifiers`];function Km(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||ft;let s=t;const r=e.startsWith("update:"),o=r&&jm(i,e.slice(7));o&&(o.trim&&(s=t.map(h=>Pt(h)?h.trim():h)),o.number&&(s=t.map(bp)));let a,c=i[a=oa(e)]||i[a=oa(yn(e))];!c&&r&&(c=i[a=oa(ss(e))]),c&&Xn(c,n,6,s);const l=i[a+"Once"];if(l){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,Xn(l,n,6,s)}}function jf(n,e,t=!1){const i=e.emitsCache,s=i.get(n);if(s!==void 0)return s;const r=n.emits;let o={},a=!1;if(!Ye(n)){const c=l=>{const h=jf(l,e,!0);h&&(a=!0,Nt(o,h))};!t&&e.mixins.length&&e.mixins.forEach(c),n.extends&&c(n.extends),n.mixins&&n.mixins.forEach(c)}return!r&&!a?(wt(n)&&i.set(n,null),null):($e(r)?r.forEach(c=>o[c]=null):Nt(o,r),wt(n)&&i.set(n,o),o)}function Yo(n,e){return!n||!zo(e)?!1:(e=e.slice(2).replace(/Once$/,""),it(n,e[0].toLowerCase()+e.slice(1))||it(n,ss(e))||it(n,e))}function da(n){const{type:e,vnode:t,proxy:i,withProxy:s,propsOptions:[r],slots:o,attrs:a,emit:c,render:l,renderCache:h,props:u,data:f,setupState:d,ctx:_,inheritAttrs:M}=n,m=Po(n);let p,w;try{if(t.shapeFlag&4){const S=s||i,U=S;p=Hn(l.call(U,S,h,u,d,f,_)),w=a}else{const S=e;p=Hn(S.length>1?S(u,{attrs:a,slots:o,emit:c}):S(u,null)),w=e.props?a:Zm(a)}}catch(S){fr.length=0,Xo(S,n,1),p=ct(Qi)}let x=p;if(w&&M!==!1){const S=Object.keys(w),{shapeFlag:U}=x;S.length&&U&7&&(r&&S.some(ol)&&(w=Jm(w,r)),x=Fs(x,w,!1,!0))}return t.dirs&&(x=Fs(x,null,!1,!0),x.dirs=x.dirs?x.dirs.concat(t.dirs):t.dirs),t.transition&&Sl(x,t.transition),p=x,Po(m),p}const Zm=n=>{let e;for(const t in n)(t==="class"||t==="style"||zo(t))&&((e||(e={}))[t]=n[t]);return e},Jm=(n,e)=>{const t={};for(const i in n)(!ol(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function Qm(n,e,t){const{props:i,children:s,component:r}=n,{props:o,children:a,patchFlag:c}=e,l=r.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&c>=0){if(c&1024)return!0;if(c&16)return i?vu(i,o,l):!!o;if(c&8){const h=e.dynamicProps;for(let u=0;u<h.length;u++){const f=h[u];if(o[f]!==i[f]&&!Yo(l,f))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?vu(i,o,l):!0:!!o;return!1}function vu(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(e[r]!==n[r]&&!Yo(t,r))return!0}return!1}function e0({vnode:n,parent:e},t){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===n&&(i.el=n.el),i===n)(n=e.vnode).el=t,e=e.parent;else break}}const Kf=n=>n.__isSuspense;function t0(n,e){e&&e.pendingBranch?$e(n)?e.effects.push(...n):e.effects.push(n):hm(n)}const ri=Symbol.for("v-fgt"),$o=Symbol.for("v-txt"),Qi=Symbol.for("v-cmt"),pa=Symbol.for("v-stc"),fr=[];let hn=null;function Zt(n=!1){fr.push(hn=n?null:[])}function n0(){fr.pop(),hn=fr[fr.length-1]||null}let wr=1;function xu(n){wr+=n,n<0&&hn&&(hn.hasOnce=!0)}function Zf(n){return n.dynamicChildren=wr>0?hn||Cs:null,n0(),wr>0&&hn&&hn.push(n),n}function nn(n,e,t,i,s,r){return Zf(Er(n,e,t,i,s,r,!0))}function i0(n,e,t,i,s){return Zf(ct(n,e,t,i,s,!0))}function Io(n){return n?n.__v_isVNode===!0:!1}function Zs(n,e){return n.type===e.type&&n.key===e.key}const Jf=({key:n})=>n??null,yo=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?Pt(n)||Gt(n)||Ye(n)?{i:Pn,r:n,k:e,f:!!t}:n:null);function Er(n,e=null,t=null,i=0,s=null,r=n===ri?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&Jf(e),ref:e&&yo(e),scopeId:Pf,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Pn};return a?(Tl(c,t),r&128&&n.normalize(c)):t&&(c.shapeFlag|=Pt(t)?8:16),wr>0&&!o&&hn&&(c.patchFlag>0||r&6)&&c.patchFlag!==32&&hn.push(c),c}const ct=s0;function s0(n,e=null,t=null,i=0,s=null,r=!1){if((!n||n===Tm)&&(n=Qi),Io(n)){const a=Fs(n,e,!0);return t&&Tl(a,t),wr>0&&!r&&hn&&(a.shapeFlag&6?hn[hn.indexOf(n)]=a:hn.push(a)),a.patchFlag=-2,a}if(g0(n)&&(n=n.__vccOpts),e){e=r0(e);let{class:a,style:c}=e;a&&!Pt(a)&&(e.class=Un(a)),wt(c)&&(vl(c)&&!$e(c)&&(c=Nt({},c)),e.style=ll(c))}const o=Pt(n)?1:Kf(n)?128:dm(n)?64:wt(n)?4:Ye(n)?2:0;return Er(n,e,t,i,s,o,r,!0)}function r0(n){return n?vl(n)||Bf(n)?Nt({},n):n:null}function Fs(n,e,t=!1,i=!1){const{props:s,ref:r,patchFlag:o,children:a,transition:c}=n,l=e?a0(s||{},e):s,h={__v_isVNode:!0,__v_skip:!0,type:n.type,props:l,key:l&&Jf(l),ref:e&&e.ref?t&&r?$e(r)?r.concat(yo(e)):[r,yo(e)]:yo(e):r,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==ri?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:c,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&Fs(n.ssContent),ssFallback:n.ssFallback&&Fs(n.ssFallback),el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return c&&i&&Sl(h,c.clone(h)),h}function gn(n=" ",e=0){return ct($o,null,n,e)}function o0(n="",e=!1){return e?(Zt(),i0(Qi,null,n)):ct(Qi,null,n)}function Hn(n){return n==null||typeof n=="boolean"?ct(Qi):$e(n)?ct(ri,null,n.slice()):Io(n)?Ei(n):ct($o,null,String(n))}function Ei(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:Fs(n)}function Tl(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if($e(e))t=16;else if(typeof e=="object")if(i&65){const s=e.default;s&&(s._c&&(s._d=!1),Tl(n,s()),s._c&&(s._d=!0));return}else{t=32;const s=e._;!s&&!Bf(e)?e._ctx=Pn:s===3&&Pn&&(Pn.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else Ye(e)?(e={default:e,_ctx:Pn},t=32):(e=String(e),i&64?(t=16,e=[gn(e)]):t=8);n.children=e,n.shapeFlag|=t}function a0(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const s in i)if(s==="class")e.class!==i.class&&(e.class=Un([e.class,i.class]));else if(s==="style")e.style=ll([e.style,i.style]);else if(zo(s)){const r=e[s],o=i[s];o&&r!==o&&!($e(r)&&r.includes(o))&&(e[s]=r?[].concat(r,o):o)}else s!==""&&(e[s]=i[s])}return e}function zn(n,e,t,i=null){Xn(n,e,7,[t,i])}const c0=Nf();let l0=0;function u0(n,e,t){const i=n.type,s=(e?e.appContext:n.appContext)||c0,r={uid:l0++,vnode:n,type:i,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Ip(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Gf(i,s),emitsOptions:jf(i,s),emit:null,emitted:null,propsDefaults:ft,inheritAttrs:i.inheritAttrs,ctx:ft,data:ft,props:ft,attrs:ft,slots:ft,refs:ft,setupState:ft,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=Km.bind(null,r),n.ce&&n.ce(r),r}let zt=null,Do,hc;{const n=rf(),e=(t,i)=>{let s;return(s=n[t])||(s=n[t]=[]),s.push(i),r=>{s.length>1?s.forEach(o=>o(r)):s[0](r)}};Do=e("__VUE_INSTANCE_SETTERS__",t=>zt=t),hc=e("__VUE_SSR_SETTERS__",t=>jo=t)}const Nr=n=>{const e=zt;return Do(n),n.scope.on(),()=>{n.scope.off(),Do(e)}},yu=()=>{zt&&zt.scope.off(),Do(null)};function Qf(n){return n.vnode.shapeFlag&4}let jo=!1;function h0(n,e=!1,t=!1){e&&hc(e);const{props:i,children:s}=n.vnode,r=Qf(n);Fm(n,i,r,e),Gm(n,s,t);const o=r?f0(n,e):void 0;return e&&hc(!1),o}function f0(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,Rm);const{setup:i}=t;if(i){const s=n.setupContext=i.length>1?p0(n):null,r=Nr(n);Di();const o=Ur(i,n,0,[n.props,s]);if(Ui(),r(),nf(o)){if(ur(n)||Lf(n),o.then(yu,yu),e)return o.then(a=>{Mu(n,a,e)}).catch(a=>{Xo(a,n,0)});n.asyncDep=o}else Mu(n,o,e)}else ed(n,e)}function Mu(n,e,t){Ye(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:wt(e)&&(n.setupState=Ef(e)),ed(n,t)}let Su;function ed(n,e,t){const i=n.type;if(!n.render){if(!e&&Su&&!i.render){const s=i.template||El(n).template;if(s){const{isCustomElement:r,compilerOptions:o}=n.appContext.config,{delimiters:a,compilerOptions:c}=i,l=Nt(Nt({isCustomElement:r,delimiters:a},o),c);i.render=Su(s,l)}}n.render=i.render||Vn}{const s=Nr(n);Di();try{Cm(n)}finally{Ui(),s()}}}const d0={get(n,e){return Vt(n,"get",""),n[e]}};function p0(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,d0),slots:n.slots,emit:n.emit,expose:e}}function Al(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(Ef(tm(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in hr)return hr[t](n)},has(e,t){return t in e||t in hr}})):n.proxy}function m0(n,e=!0){return Ye(n)?n.displayName||n.name:n.name||e&&n.__name}function g0(n){return Ye(n)&&"__vccOpts"in n}const It=(n,e)=>om(n,e,jo);function td(n,e,t){const i=arguments.length;return i===2?wt(e)&&!$e(e)?Io(e)?ct(n,null,[e]):ct(n,e):ct(n,null,e):(i>3?t=Array.prototype.slice.call(arguments,2):i===3&&Io(t)&&(t=[t]),ct(n,e,t))}const _0="3.5.10";/**
* @vue/runtime-dom v3.5.10
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let fc;const wu=typeof window<"u"&&window.trustedTypes;if(wu)try{fc=wu.createPolicy("vue",{createHTML:n=>n})}catch{}const nd=fc?n=>fc.createHTML(n):n=>n,v0="http://www.w3.org/2000/svg",x0="http://www.w3.org/1998/Math/MathML",si=typeof document<"u"?document:null,Eu=si&&si.createElement("template"),y0={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const s=e==="svg"?si.createElementNS(v0,n):e==="mathml"?si.createElementNS(x0,n):t?si.createElement(n,{is:t}):si.createElement(n);return n==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:n=>si.createTextNode(n),createComment:n=>si.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>si.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,s,r){const o=t?t.previousSibling:e.lastChild;if(s&&(s===r||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),t),!(s===r||!(s=s.nextSibling)););else{Eu.innerHTML=nd(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const a=Eu.content;if(i==="svg"||i==="mathml"){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},M0=Symbol("_vtc");function S0(n,e,t){const i=n[M0];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const bu=Symbol("_vod"),w0=Symbol("_vsh"),E0=Symbol(""),b0=/(^|;)\s*display\s*:/;function T0(n,e,t){const i=n.style,s=Pt(t);let r=!1;if(t&&!s){if(e)if(Pt(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();t[a]==null&&Mo(i,a,"")}else for(const o in e)t[o]==null&&Mo(i,o,"");for(const o in t)o==="display"&&(r=!0),Mo(i,o,t[o])}else if(s){if(e!==t){const o=i[E0];o&&(t+=";"+o),i.cssText=t,r=b0.test(t)}}else e&&n.removeAttribute("style");bu in n&&(n[bu]=r?i.display:"",n[w0]&&(i.display="none"))}const Tu=/\s*!important$/;function Mo(n,e,t){if($e(t))t.forEach(i=>Mo(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=A0(n,e);Tu.test(t)?n.setProperty(ss(i),t.replace(Tu,""),"important"):n[i]=t}}const Au=["Webkit","Moz","ms"],ma={};function A0(n,e){const t=ma[e];if(t)return t;let i=yn(e);if(i!=="filter"&&i in n)return ma[e]=i;i=ko(i);for(let s=0;s<Au.length;s++){const r=Au[s]+i;if(r in n)return ma[e]=r}return e}const Ru="http://www.w3.org/1999/xlink";function Cu(n,e,t,i,s,r=Lp(e)){i&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(Ru,e.slice(6,e.length)):n.setAttributeNS(Ru,e,t):t==null||r&&!of(t)?n.removeAttribute(e):n.setAttribute(e,r?"":Xs(t)?String(t):t)}function Pu(n,e,t,i){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?nd(t):t);return}const s=n.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){const o=s==="OPTION"?n.getAttribute("value")||"":n.value,a=t==null?n.type==="checkbox"?"on":"":String(t);(o!==a||!("_value"in n))&&(n.value=a),t==null&&n.removeAttribute(e),n._value=t;return}let r=!1;if(t===""||t==null){const o=typeof n[e];o==="boolean"?t=of(t):t==null&&o==="string"?(t="",r=!0):o==="number"&&(t=0,r=!0)}try{n[e]=t}catch{}r&&n.removeAttribute(e)}function R0(n,e,t,i){n.addEventListener(e,t,i)}function C0(n,e,t,i){n.removeEventListener(e,t,i)}const Lu=Symbol("_vei");function P0(n,e,t,i,s=null){const r=n[Lu]||(n[Lu]={}),o=r[e];if(i&&o)o.value=i;else{const[a,c]=L0(e);if(i){const l=r[e]=U0(i,s);R0(n,a,l,c)}else o&&(C0(n,a,o,c),r[e]=void 0)}}const Iu=/(?:Once|Passive|Capture)$/;function L0(n){let e;if(Iu.test(n)){e={};let i;for(;i=n.match(Iu);)n=n.slice(0,n.length-i[0].length),e[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):ss(n.slice(2)),e]}let ga=0;const I0=Promise.resolve(),D0=()=>ga||(I0.then(()=>ga=0),ga=Date.now());function U0(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;Xn(N0(i,t.value),e,5,[i])};return t.value=n,t.attached=D0(),t}function N0(n,e){if($e(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>s=>!s._stopped&&i&&i(s))}else return e}const Du=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,F0=(n,e,t,i,s,r)=>{const o=s==="svg";e==="class"?S0(n,i,o):e==="style"?T0(n,t,i):zo(e)?ol(e)||P0(n,e,t,i,r):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):O0(n,e,i,o))?(Pu(n,e,i),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Cu(n,e,i,o,r,e!=="value")):n._isVueCE&&(/[A-Z]/.test(e)||!Pt(i))?Pu(n,yn(e),i):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),Cu(n,e,i,o))};function O0(n,e,t,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in n&&Du(e)&&Ye(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=n.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Du(e)&&Pt(t)?!1:e in n}const B0=Nt({patchProp:F0},y0);let Uu;function z0(){return Uu||(Uu=km(B0))}const G0=(...n)=>{const e=z0().createApp(...n),{mount:t}=e;return e.mount=i=>{const s=k0(i);if(!s)return;const r=e._component;!Ye(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=t(s,!1,H0(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function H0(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function k0(n){return Pt(n)?document.querySelector(n):n}const V0={id:"app"},W0=Wt({__name:"App",setup(n){return(e,t)=>{const i=uu("router-link"),s=uu("router-view");return Zt(),nn("div",V0,[Er("nav",null,[ct(i,{to:"/3d-bear-arts"},{default:mn(()=>t[0]||(t[0]=[gn("Home")])),_:1}),ct(i,{to:"/3d-bear-arts/half"},{default:mn(()=>t[1]||(t[1]=[gn("New")])),_:1}),ct(i,{to:"/3d-bear-arts/sliver"},{default:mn(()=>t[2]||(t[2]=[gn("Sliver")])),_:1}),ct(i,{to:"/3d-bear-arts/metal"},{default:mn(()=>t[3]||(t[3]=[gn("Leather")])),_:1}),ct(i,{to:"/3d-bear-arts/pop-art"},{default:mn(()=>t[4]||(t[4]=[gn("PopArt")])),_:1}),ct(i,{to:"/3d-bear-arts/halfTransparent"},{default:mn(()=>t[5]||(t[5]=[gn("HalfTranparent")])),_:1}),ct(i,{to:"/3d-bear-arts/bluePink"},{default:mn(()=>t[6]||(t[6]=[gn("BluePink")])),_:1}),ct(i,{to:"/3d-bear-arts/diamond"},{default:mn(()=>t[7]||(t[7]=[gn("Diamond")])),_:1}),ct(i,{to:"/3d-bear-arts/pink"},{default:mn(()=>t[8]||(t[8]=[gn("Pink")])),_:1}),ct(i,{to:"/3d-bear-arts/purple"},{default:mn(()=>t[9]||(t[9]=[gn("Purple")])),_:1}),ct(i,{to:"/3d-bear-arts/glass"},{default:mn(()=>t[10]||(t[10]=[gn("Glass")])),_:1})]),ct(s)])}}}),sn=(n,e)=>{const t=n.__vccOpts||n;for(const[i,s]of e)t[i]=s;return t},X0=sn(W0,[["__scopeId","data-v-d7c81e2c"]]);/*!
  * vue-router v4.4.5
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const Es=typeof document<"u";function id(n){return typeof n=="object"||"displayName"in n||"props"in n||"__vccOpts"in n}function q0(n){return n.__esModule||n[Symbol.toStringTag]==="Module"||n.default&&id(n.default)}const at=Object.assign;function _a(n,e){const t={};for(const i in e){const s=e[i];t[i]=Dn(s)?s.map(n):n(s)}return t}const dr=()=>{},Dn=Array.isArray,sd=/#/g,Y0=/&/g,$0=/\//g,j0=/=/g,K0=/\?/g,rd=/\+/g,Z0=/%5B/g,J0=/%5D/g,od=/%5E/g,Q0=/%60/g,ad=/%7B/g,eg=/%7C/g,cd=/%7D/g,tg=/%20/g;function Rl(n){return encodeURI(""+n).replace(eg,"|").replace(Z0,"[").replace(J0,"]")}function ng(n){return Rl(n).replace(ad,"{").replace(cd,"}").replace(od,"^")}function dc(n){return Rl(n).replace(rd,"%2B").replace(tg,"+").replace(sd,"%23").replace(Y0,"%26").replace(Q0,"`").replace(ad,"{").replace(cd,"}").replace(od,"^")}function ig(n){return dc(n).replace(j0,"%3D")}function sg(n){return Rl(n).replace(sd,"%23").replace(K0,"%3F")}function rg(n){return n==null?"":sg(n).replace($0,"%2F")}function br(n){try{return decodeURIComponent(""+n)}catch{}return""+n}const og=/\/$/,ag=n=>n.replace(og,"");function va(n,e,t="/"){let i,s={},r="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(i=e.slice(0,c),r=e.slice(c+1,a>-1?a:e.length),s=n(r)),a>-1&&(i=i||e.slice(0,a),o=e.slice(a,e.length)),i=hg(i??e,t),{fullPath:i+(r&&"?")+r+o,path:i,query:s,hash:br(o)}}function cg(n,e){const t=e.query?n(e.query):"";return e.path+(t&&"?")+t+(e.hash||"")}function Nu(n,e){return!e||!n.toLowerCase().startsWith(e.toLowerCase())?n:n.slice(e.length)||"/"}function lg(n,e,t){const i=e.matched.length-1,s=t.matched.length-1;return i>-1&&i===s&&Os(e.matched[i],t.matched[s])&&ld(e.params,t.params)&&n(e.query)===n(t.query)&&e.hash===t.hash}function Os(n,e){return(n.aliasOf||n)===(e.aliasOf||e)}function ld(n,e){if(Object.keys(n).length!==Object.keys(e).length)return!1;for(const t in n)if(!ug(n[t],e[t]))return!1;return!0}function ug(n,e){return Dn(n)?Fu(n,e):Dn(e)?Fu(e,n):n===e}function Fu(n,e){return Dn(e)?n.length===e.length&&n.every((t,i)=>t===e[i]):n.length===1&&n[0]===e}function hg(n,e){if(n.startsWith("/"))return n;if(!n)return e;const t=e.split("/"),i=n.split("/"),s=i[i.length-1];(s===".."||s===".")&&i.push("");let r=t.length-1,o,a;for(o=0;o<i.length;o++)if(a=i[o],a!==".")if(a==="..")r>1&&r--;else break;return t.slice(0,r).join("/")+"/"+i.slice(o).join("/")}const gi={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var Tr;(function(n){n.pop="pop",n.push="push"})(Tr||(Tr={}));var pr;(function(n){n.back="back",n.forward="forward",n.unknown=""})(pr||(pr={}));function fg(n){if(!n)if(Es){const e=document.querySelector("base");n=e&&e.getAttribute("href")||"/",n=n.replace(/^\w+:\/\/[^\/]+/,"")}else n="/";return n[0]!=="/"&&n[0]!=="#"&&(n="/"+n),ag(n)}const dg=/^[^#]+#/;function pg(n,e){return n.replace(dg,"#")+e}function mg(n,e){const t=document.documentElement.getBoundingClientRect(),i=n.getBoundingClientRect();return{behavior:e.behavior,left:i.left-t.left-(e.left||0),top:i.top-t.top-(e.top||0)}}const Ko=()=>({left:window.scrollX,top:window.scrollY});function gg(n){let e;if("el"in n){const t=n.el,i=typeof t=="string"&&t.startsWith("#"),s=typeof t=="string"?i?document.getElementById(t.slice(1)):document.querySelector(t):t;if(!s)return;e=mg(s,n)}else e=n;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function Ou(n,e){return(history.state?history.state.position-e:-1)+n}const pc=new Map;function _g(n,e){pc.set(n,e)}function vg(n){const e=pc.get(n);return pc.delete(n),e}let xg=()=>location.protocol+"//"+location.host;function ud(n,e){const{pathname:t,search:i,hash:s}=e,r=n.indexOf("#");if(r>-1){let a=s.includes(n.slice(r))?n.slice(r).length:1,c=s.slice(a);return c[0]!=="/"&&(c="/"+c),Nu(c,"")}return Nu(t,n)+i+s}function yg(n,e,t,i){let s=[],r=[],o=null;const a=({state:f})=>{const d=ud(n,location),_=t.value,M=e.value;let m=0;if(f){if(t.value=d,e.value=f,o&&o===_){o=null;return}m=M?f.position-M.position:0}else i(d);s.forEach(p=>{p(t.value,_,{delta:m,type:Tr.pop,direction:m?m>0?pr.forward:pr.back:pr.unknown})})};function c(){o=t.value}function l(f){s.push(f);const d=()=>{const _=s.indexOf(f);_>-1&&s.splice(_,1)};return r.push(d),d}function h(){const{history:f}=window;f.state&&f.replaceState(at({},f.state,{scroll:Ko()}),"")}function u(){for(const f of r)f();r=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",h)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",h,{passive:!0}),{pauseListeners:c,listen:l,destroy:u}}function Bu(n,e,t,i=!1,s=!1){return{back:n,current:e,forward:t,replaced:i,position:window.history.length,scroll:s?Ko():null}}function Mg(n){const{history:e,location:t}=window,i={value:ud(n,t)},s={value:e.state};s.value||r(i.value,{back:null,current:i.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function r(c,l,h){const u=n.indexOf("#"),f=u>-1?(t.host&&document.querySelector("base")?n:n.slice(u))+c:xg()+n+c;try{e[h?"replaceState":"pushState"](l,"",f),s.value=l}catch(d){console.error(d),t[h?"replace":"assign"](f)}}function o(c,l){const h=at({},e.state,Bu(s.value.back,c,s.value.forward,!0),l,{position:s.value.position});r(c,h,!0),i.value=c}function a(c,l){const h=at({},s.value,e.state,{forward:c,scroll:Ko()});r(h.current,h,!0);const u=at({},Bu(i.value,c,null),{position:h.position+1},l);r(c,u,!1),i.value=c}return{location:i,state:s,push:a,replace:o}}function Sg(n){n=fg(n);const e=Mg(n),t=yg(n,e.state,e.location,e.replace);function i(r,o=!0){o||t.pauseListeners(),history.go(r)}const s=at({location:"",base:n,go:i,createHref:pg.bind(null,n)},e,t);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function wg(n){return typeof n=="string"||n&&typeof n=="object"}function hd(n){return typeof n=="string"||typeof n=="symbol"}const fd=Symbol("");var zu;(function(n){n[n.aborted=4]="aborted",n[n.cancelled=8]="cancelled",n[n.duplicated=16]="duplicated"})(zu||(zu={}));function Bs(n,e){return at(new Error,{type:n,[fd]:!0},e)}function Kn(n,e){return n instanceof Error&&fd in n&&(e==null||!!(n.type&e))}const Gu="[^/]+?",Eg={sensitive:!1,strict:!1,start:!0,end:!0},bg=/[.+*?^${}()[\]/\\]/g;function Tg(n,e){const t=at({},Eg,e),i=[];let s=t.start?"^":"";const r=[];for(const l of n){const h=l.length?[]:[90];t.strict&&!l.length&&(s+="/");for(let u=0;u<l.length;u++){const f=l[u];let d=40+(t.sensitive?.25:0);if(f.type===0)u||(s+="/"),s+=f.value.replace(bg,"\\$&"),d+=40;else if(f.type===1){const{value:_,repeatable:M,optional:m,regexp:p}=f;r.push({name:_,repeatable:M,optional:m});const w=p||Gu;if(w!==Gu){d+=10;try{new RegExp(`(${w})`)}catch(S){throw new Error(`Invalid custom RegExp for param "${_}" (${w}): `+S.message)}}let x=M?`((?:${w})(?:/(?:${w}))*)`:`(${w})`;u||(x=m&&l.length<2?`(?:/${x})`:"/"+x),m&&(x+="?"),s+=x,d+=20,m&&(d+=-8),M&&(d+=-20),w===".*"&&(d+=-50)}h.push(d)}i.push(h)}if(t.strict&&t.end){const l=i.length-1;i[l][i[l].length-1]+=.7000000000000001}t.strict||(s+="/?"),t.end?s+="$":t.strict&&(s+="(?:/|$)");const o=new RegExp(s,t.sensitive?"":"i");function a(l){const h=l.match(o),u={};if(!h)return null;for(let f=1;f<h.length;f++){const d=h[f]||"",_=r[f-1];u[_.name]=d&&_.repeatable?d.split("/"):d}return u}function c(l){let h="",u=!1;for(const f of n){(!u||!h.endsWith("/"))&&(h+="/"),u=!1;for(const d of f)if(d.type===0)h+=d.value;else if(d.type===1){const{value:_,repeatable:M,optional:m}=d,p=_ in l?l[_]:"";if(Dn(p)&&!M)throw new Error(`Provided param "${_}" is an array but it is not repeatable (* or + modifiers)`);const w=Dn(p)?p.join("/"):p;if(!w)if(m)f.length<2&&(h.endsWith("/")?h=h.slice(0,-1):u=!0);else throw new Error(`Missing required param "${_}"`);h+=w}}return h||"/"}return{re:o,score:i,keys:r,parse:a,stringify:c}}function Ag(n,e){let t=0;for(;t<n.length&&t<e.length;){const i=e[t]-n[t];if(i)return i;t++}return n.length<e.length?n.length===1&&n[0]===80?-1:1:n.length>e.length?e.length===1&&e[0]===80?1:-1:0}function dd(n,e){let t=0;const i=n.score,s=e.score;for(;t<i.length&&t<s.length;){const r=Ag(i[t],s[t]);if(r)return r;t++}if(Math.abs(s.length-i.length)===1){if(Hu(i))return 1;if(Hu(s))return-1}return s.length-i.length}function Hu(n){const e=n[n.length-1];return n.length>0&&e[e.length-1]<0}const Rg={type:0,value:""},Cg=/[a-zA-Z0-9_]/;function Pg(n){if(!n)return[[]];if(n==="/")return[[Rg]];if(!n.startsWith("/"))throw new Error(`Invalid path "${n}"`);function e(d){throw new Error(`ERR (${t})/"${l}": ${d}`)}let t=0,i=t;const s=[];let r;function o(){r&&s.push(r),r=[]}let a=0,c,l="",h="";function u(){l&&(t===0?r.push({type:0,value:l}):t===1||t===2||t===3?(r.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:l,regexp:h,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),l="")}function f(){l+=c}for(;a<n.length;){if(c=n[a++],c==="\\"&&t!==2){i=t,t=4;continue}switch(t){case 0:c==="/"?(l&&u(),o()):c===":"?(u(),t=1):f();break;case 4:f(),t=i;break;case 1:c==="("?t=2:Cg.test(c)?f():(u(),t=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?h[h.length-1]=="\\"?h=h.slice(0,-1)+c:t=3:h+=c;break;case 3:u(),t=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,h="";break;default:e("Unknown state");break}}return t===2&&e(`Unfinished custom RegExp for param "${l}"`),u(),o(),s}function Lg(n,e,t){const i=Tg(Pg(n.path),t),s=at(i,{record:n,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function Ig(n,e){const t=[],i=new Map;e=Xu({strict:!1,end:!0,sensitive:!1},e);function s(u){return i.get(u)}function r(u,f,d){const _=!d,M=Vu(u);M.aliasOf=d&&d.record;const m=Xu(e,u),p=[M];if("alias"in u){const S=typeof u.alias=="string"?[u.alias]:u.alias;for(const U of S)p.push(Vu(at({},M,{components:d?d.record.components:M.components,path:U,aliasOf:d?d.record:M})))}let w,x;for(const S of p){const{path:U}=S;if(f&&U[0]!=="/"){const C=f.record.path,A=C[C.length-1]==="/"?"":"/";S.path=f.record.path+(U&&A+U)}if(w=Lg(S,f,m),d?d.alias.push(w):(x=x||w,x!==w&&x.alias.push(w),_&&u.name&&!Wu(w)&&o(u.name)),pd(w)&&c(w),M.children){const C=M.children;for(let A=0;A<C.length;A++)r(C[A],w,d&&d.children[A])}d=d||w}return x?()=>{o(x)}:dr}function o(u){if(hd(u)){const f=i.get(u);f&&(i.delete(u),t.splice(t.indexOf(f),1),f.children.forEach(o),f.alias.forEach(o))}else{const f=t.indexOf(u);f>-1&&(t.splice(f,1),u.record.name&&i.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return t}function c(u){const f=Ng(u,t);t.splice(f,0,u),u.record.name&&!Wu(u)&&i.set(u.record.name,u)}function l(u,f){let d,_={},M,m;if("name"in u&&u.name){if(d=i.get(u.name),!d)throw Bs(1,{location:u});m=d.record.name,_=at(ku(f.params,d.keys.filter(x=>!x.optional).concat(d.parent?d.parent.keys.filter(x=>x.optional):[]).map(x=>x.name)),u.params&&ku(u.params,d.keys.map(x=>x.name))),M=d.stringify(_)}else if(u.path!=null)M=u.path,d=t.find(x=>x.re.test(M)),d&&(_=d.parse(M),m=d.record.name);else{if(d=f.name?i.get(f.name):t.find(x=>x.re.test(f.path)),!d)throw Bs(1,{location:u,currentLocation:f});m=d.record.name,_=at({},f.params,u.params),M=d.stringify(_)}const p=[];let w=d;for(;w;)p.unshift(w.record),w=w.parent;return{name:m,path:M,params:_,matched:p,meta:Ug(p)}}n.forEach(u=>r(u));function h(){t.length=0,i.clear()}return{addRoute:r,resolve:l,removeRoute:o,clearRoutes:h,getRoutes:a,getRecordMatcher:s}}function ku(n,e){const t={};for(const i of e)i in n&&(t[i]=n[i]);return t}function Vu(n){const e={path:n.path,redirect:n.redirect,name:n.name,meta:n.meta||{},aliasOf:n.aliasOf,beforeEnter:n.beforeEnter,props:Dg(n),children:n.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in n?n.components||null:n.component&&{default:n.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function Dg(n){const e={},t=n.props||!1;if("component"in n)e.default=t;else for(const i in n.components)e[i]=typeof t=="object"?t[i]:t;return e}function Wu(n){for(;n;){if(n.record.aliasOf)return!0;n=n.parent}return!1}function Ug(n){return n.reduce((e,t)=>at(e,t.meta),{})}function Xu(n,e){const t={};for(const i in n)t[i]=i in e?e[i]:n[i];return t}function Ng(n,e){let t=0,i=e.length;for(;t!==i;){const r=t+i>>1;dd(n,e[r])<0?i=r:t=r+1}const s=Fg(n);return s&&(i=e.lastIndexOf(s,i-1)),i}function Fg(n){let e=n;for(;e=e.parent;)if(pd(e)&&dd(n,e)===0)return e}function pd({record:n}){return!!(n.name||n.components&&Object.keys(n.components).length||n.redirect)}function Og(n){const e={};if(n===""||n==="?")return e;const i=(n[0]==="?"?n.slice(1):n).split("&");for(let s=0;s<i.length;++s){const r=i[s].replace(rd," "),o=r.indexOf("="),a=br(o<0?r:r.slice(0,o)),c=o<0?null:br(r.slice(o+1));if(a in e){let l=e[a];Dn(l)||(l=e[a]=[l]),l.push(c)}else e[a]=c}return e}function qu(n){let e="";for(let t in n){const i=n[t];if(t=ig(t),i==null){i!==void 0&&(e+=(e.length?"&":"")+t);continue}(Dn(i)?i.map(r=>r&&dc(r)):[i&&dc(i)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+t,r!=null&&(e+="="+r))})}return e}function Bg(n){const e={};for(const t in n){const i=n[t];i!==void 0&&(e[t]=Dn(i)?i.map(s=>s==null?null:""+s):i==null?i:""+i)}return e}const zg=Symbol(""),Yu=Symbol(""),Cl=Symbol(""),md=Symbol(""),mc=Symbol("");function Js(){let n=[];function e(i){return n.push(i),()=>{const s=n.indexOf(i);s>-1&&n.splice(s,1)}}function t(){n=[]}return{add:e,list:()=>n.slice(),reset:t}}function bi(n,e,t,i,s,r=o=>o()){const o=i&&(i.enterCallbacks[s]=i.enterCallbacks[s]||[]);return()=>new Promise((a,c)=>{const l=f=>{f===!1?c(Bs(4,{from:t,to:e})):f instanceof Error?c(f):wg(f)?c(Bs(2,{from:e,to:f})):(o&&i.enterCallbacks[s]===o&&typeof f=="function"&&o.push(f),a())},h=r(()=>n.call(i&&i.instances[s],e,t,l));let u=Promise.resolve(h);n.length<3&&(u=u.then(l)),u.catch(f=>c(f))})}function xa(n,e,t,i,s=r=>r()){const r=[];for(const o of n)for(const a in o.components){let c=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if(id(c)){const h=(c.__vccOpts||c)[e];h&&r.push(bi(h,t,i,o,a,s))}else{let l=c();r.push(()=>l.then(h=>{if(!h)throw new Error(`Couldn't resolve component "${a}" at "${o.path}"`);const u=q0(h)?h.default:h;o.mods[a]=h,o.components[a]=u;const d=(u.__vccOpts||u)[e];return d&&bi(d,t,i,o,a,s)()}))}}return r}function $u(n){const e=li(Cl),t=li(md),i=It(()=>{const c=_n(n.to);return e.resolve(c)}),s=It(()=>{const{matched:c}=i.value,{length:l}=c,h=c[l-1],u=t.matched;if(!h||!u.length)return-1;const f=u.findIndex(Os.bind(null,h));if(f>-1)return f;const d=ju(c[l-2]);return l>1&&ju(h)===d&&u[u.length-1].path!==d?u.findIndex(Os.bind(null,c[l-2])):f}),r=It(()=>s.value>-1&&Vg(t.params,i.value.params)),o=It(()=>s.value>-1&&s.value===t.matched.length-1&&ld(t.params,i.value.params));function a(c={}){return kg(c)?e[_n(n.replace)?"replace":"push"](_n(n.to)).catch(dr):Promise.resolve()}return{route:i,href:It(()=>i.value.href),isActive:r,isExactActive:o,navigate:a}}const Gg=Wt({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:$u,setup(n,{slots:e}){const t=Wo($u(n)),{options:i}=li(Cl),s=It(()=>({[Ku(n.activeClass,i.linkActiveClass,"router-link-active")]:t.isActive,[Ku(n.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:t.isExactActive}));return()=>{const r=e.default&&e.default(t);return n.custom?r:td("a",{"aria-current":t.isExactActive?n.ariaCurrentValue:null,href:t.href,onClick:t.navigate,class:s.value},r)}}}),Hg=Gg;function kg(n){if(!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)&&!n.defaultPrevented&&!(n.button!==void 0&&n.button!==0)){if(n.currentTarget&&n.currentTarget.getAttribute){const e=n.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return n.preventDefault&&n.preventDefault(),!0}}function Vg(n,e){for(const t in e){const i=e[t],s=n[t];if(typeof i=="string"){if(i!==s)return!1}else if(!Dn(s)||s.length!==i.length||i.some((r,o)=>r!==s[o]))return!1}return!0}function ju(n){return n?n.aliasOf?n.aliasOf.path:n.path:""}const Ku=(n,e,t)=>n??e??t,Wg=Wt({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(n,{attrs:e,slots:t}){const i=li(mc),s=It(()=>n.route||i.value),r=li(Yu,0),o=It(()=>{let l=_n(r);const{matched:h}=s.value;let u;for(;(u=h[l])&&!u.components;)l++;return l}),a=It(()=>s.value.matched[o.value]);xo(Yu,It(()=>o.value+1)),xo(zg,a),xo(mc,s);const c=ut();return bt(()=>[c.value,a.value,n.name],([l,h,u],[f,d,_])=>{h&&(h.instances[u]=l,d&&d!==h&&l&&l===f&&(h.leaveGuards.size||(h.leaveGuards=d.leaveGuards),h.updateGuards.size||(h.updateGuards=d.updateGuards))),l&&h&&(!d||!Os(h,d)||!f)&&(h.enterCallbacks[u]||[]).forEach(M=>M(l))},{flush:"post"}),()=>{const l=s.value,h=n.name,u=a.value,f=u&&u.components[h];if(!f)return Zu(t.default,{Component:f,route:l});const d=u.props[h],_=d?d===!0?l.params:typeof d=="function"?d(l):d:null,m=td(f,at({},_,e,{onVnodeUnmounted:p=>{p.component.isUnmounted&&(u.instances[h]=null)},ref:c}));return Zu(t.default,{Component:m,route:l})||m}}});function Zu(n,e){if(!n)return null;const t=n(e);return t.length===1?t[0]:t}const Xg=Wg;function qg(n){const e=Ig(n.routes,n),t=n.parseQuery||Og,i=n.stringifyQuery||qu,s=n.history,r=Js(),o=Js(),a=Js(),c=nm(gi);let l=gi;Es&&n.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const h=_a.bind(null,D=>""+D),u=_a.bind(null,rg),f=_a.bind(null,br);function d(D,se){let j,ce;return hd(D)?(j=e.getRecordMatcher(D),ce=se):ce=D,e.addRoute(ce,j)}function _(D){const se=e.getRecordMatcher(D);se&&e.removeRoute(se)}function M(){return e.getRoutes().map(D=>D.record)}function m(D){return!!e.getRecordMatcher(D)}function p(D,se){if(se=at({},se||c.value),typeof D=="string"){const T=va(t,D,se.path),L=e.resolve({path:T.path},se),O=s.createHref(T.fullPath);return at(T,L,{params:f(L.params),hash:br(T.hash),redirectedFrom:void 0,href:O})}let j;if(D.path!=null)j=at({},D,{path:va(t,D.path,se.path).path});else{const T=at({},D.params);for(const L in T)T[L]==null&&delete T[L];j=at({},D,{params:u(T)}),se.params=u(se.params)}const ce=e.resolve(j,se),ye=D.hash||"";ce.params=h(f(ce.params));const J=cg(i,at({},D,{hash:ng(ye),path:ce.path})),g=s.createHref(J);return at({fullPath:J,hash:ye,query:i===qu?Bg(D.query):D.query||{}},ce,{redirectedFrom:void 0,href:g})}function w(D){return typeof D=="string"?va(t,D,c.value.path):at({},D)}function x(D,se){if(l!==D)return Bs(8,{from:se,to:D})}function S(D){return A(D)}function U(D){return S(at(w(D),{replace:!0}))}function C(D){const se=D.matched[D.matched.length-1];if(se&&se.redirect){const{redirect:j}=se;let ce=typeof j=="function"?j(D):j;return typeof ce=="string"&&(ce=ce.includes("?")||ce.includes("#")?ce=w(ce):{path:ce},ce.params={}),at({query:D.query,hash:D.hash,params:ce.path!=null?{}:D.params},ce)}}function A(D,se){const j=l=p(D),ce=c.value,ye=D.state,J=D.force,g=D.replace===!0,T=C(j);if(T)return A(at(w(T),{state:typeof T=="object"?at({},ye,T.state):ye,force:J,replace:g}),se||j);const L=j;L.redirectedFrom=se;let O;return!J&&lg(i,ce,j)&&(O=Bs(16,{to:L,from:ce}),ge(ce,ce,!0,!1)),(O?Promise.resolve(O):y(L,ce)).catch(N=>Kn(N)?Kn(N,2)?N:me(N):B(N,L,ce)).then(N=>{if(N){if(Kn(N,2))return A(at({replace:g},w(N.to),{state:typeof N.to=="object"?at({},ye,N.to.state):ye,force:J}),se||L)}else N=k(L,ce,!0,g,ye);return b(L,ce,N),N})}function F(D,se){const j=x(D,se);return j?Promise.reject(j):Promise.resolve()}function ne(D){const se=te.values().next().value;return se&&typeof se.runWithContext=="function"?se.runWithContext(D):D()}function y(D,se){let j;const[ce,ye,J]=Yg(D,se);j=xa(ce.reverse(),"beforeRouteLeave",D,se);for(const T of ce)T.leaveGuards.forEach(L=>{j.push(bi(L,D,se))});const g=F.bind(null,D,se);return j.push(g),fe(j).then(()=>{j=[];for(const T of r.list())j.push(bi(T,D,se));return j.push(g),fe(j)}).then(()=>{j=xa(ye,"beforeRouteUpdate",D,se);for(const T of ye)T.updateGuards.forEach(L=>{j.push(bi(L,D,se))});return j.push(g),fe(j)}).then(()=>{j=[];for(const T of J)if(T.beforeEnter)if(Dn(T.beforeEnter))for(const L of T.beforeEnter)j.push(bi(L,D,se));else j.push(bi(T.beforeEnter,D,se));return j.push(g),fe(j)}).then(()=>(D.matched.forEach(T=>T.enterCallbacks={}),j=xa(J,"beforeRouteEnter",D,se,ne),j.push(g),fe(j))).then(()=>{j=[];for(const T of o.list())j.push(bi(T,D,se));return j.push(g),fe(j)}).catch(T=>Kn(T,8)?T:Promise.reject(T))}function b(D,se,j){a.list().forEach(ce=>ne(()=>ce(D,se,j)))}function k(D,se,j,ce,ye){const J=x(D,se);if(J)return J;const g=se===gi,T=Es?history.state:{};j&&(ce||g?s.replace(D.fullPath,at({scroll:g&&T&&T.scroll},ye)):s.push(D.fullPath,ye)),c.value=D,ge(D,se,j,g),me()}let z;function Q(){z||(z=s.listen((D,se,j)=>{if(!he.listening)return;const ce=p(D),ye=C(ce);if(ye){A(at(ye,{replace:!0}),ce).catch(dr);return}l=ce;const J=c.value;Es&&_g(Ou(J.fullPath,j.delta),Ko()),y(ce,J).catch(g=>Kn(g,12)?g:Kn(g,2)?(A(g.to,ce).then(T=>{Kn(T,20)&&!j.delta&&j.type===Tr.pop&&s.go(-1,!1)}).catch(dr),Promise.reject()):(j.delta&&s.go(-j.delta,!1),B(g,ce,J))).then(g=>{g=g||k(ce,J,!1),g&&(j.delta&&!Kn(g,8)?s.go(-j.delta,!1):j.type===Tr.pop&&Kn(g,20)&&s.go(-1,!1)),b(ce,J,g)}).catch(dr)}))}let ie=Js(),H=Js(),Z;function B(D,se,j){me(D);const ce=H.list();return ce.length?ce.forEach(ye=>ye(D,se,j)):console.error(D),Promise.reject(D)}function _e(){return Z&&c.value!==gi?Promise.resolve():new Promise((D,se)=>{ie.add([D,se])})}function me(D){return Z||(Z=!D,Q(),ie.list().forEach(([se,j])=>D?j(D):se()),ie.reset()),D}function ge(D,se,j,ce){const{scrollBehavior:ye}=n;if(!Es||!ye)return Promise.resolve();const J=!j&&vg(Ou(D.fullPath,0))||(ce||!j)&&history.state&&history.state.scroll||null;return Tf().then(()=>ye(D,se,J)).then(g=>g&&gg(g)).catch(g=>B(g,D,se))}const we=D=>s.go(D);let Re;const te=new Set,he={currentRoute:c,listening:!0,addRoute:d,removeRoute:_,clearRoutes:e.clearRoutes,hasRoute:m,getRoutes:M,resolve:p,options:n,push:S,replace:U,go:we,back:()=>we(-1),forward:()=>we(1),beforeEach:r.add,beforeResolve:o.add,afterEach:a.add,onError:H.add,isReady:_e,install(D){const se=this;D.component("RouterLink",Hg),D.component("RouterView",Xg),D.config.globalProperties.$router=se,Object.defineProperty(D.config.globalProperties,"$route",{enumerable:!0,get:()=>_n(c)}),Es&&!Re&&c.value===gi&&(Re=!0,S(s.location).catch(ye=>{}));const j={};for(const ye in gi)Object.defineProperty(j,ye,{get:()=>c.value[ye],enumerable:!0});D.provide(Cl,se),D.provide(md,Mf(j)),D.provide(mc,c);const ce=D.unmount;te.add(D),D.unmount=function(){te.delete(D),te.size<1&&(l=gi,z&&z(),z=null,c.value=gi,Re=!1,Z=!1),ce()}}};function fe(D){return D.reduce((se,j)=>se.then(()=>ne(j)),Promise.resolve())}return he}function Yg(n,e){const t=[],i=[],s=[],r=Math.max(e.matched.length,n.matched.length);for(let o=0;o<r;o++){const a=e.matched[o];a&&(n.matched.find(l=>Os(l,a))?i.push(a):t.push(a));const c=n.matched[o];c&&(e.matched.find(l=>Os(l,c))||s.push(c))}return[t,i,s]}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Pl="169",$g=0,Ju=1,jg=2,gd=1,Kg=2,ii=3,Ii=0,en=1,An=2,Ci=0,Is=1,Qu=2,eh=3,th=4,Zg=5,$i=100,Jg=101,Qg=102,e_=103,t_=104,n_=200,i_=201,s_=202,r_=203,gc=204,_c=205,o_=206,a_=207,c_=208,l_=209,u_=210,h_=211,f_=212,d_=213,p_=214,vc=0,xc=1,yc=2,zs=3,Mc=4,Sc=5,wc=6,Ec=7,_d=0,m_=1,g_=2,Pi=0,__=1,v_=2,x_=3,rs=4,y_=5,M_=6,S_=7,vd=300,Gs=301,Hs=302,bc=303,Tc=304,Zo=306,es=1e3,Ki=1001,Ac=1002,vn=1003,w_=1004,$r=1005,Rn=1006,ya=1007,Ri=1008,ui=1009,xd=1010,yd=1011,Ar=1012,Ll=1013,ts=1014,oi=1015,Fr=1016,Il=1017,Dl=1018,ks=1020,Md=35902,Sd=1021,wd=1022,xn=1023,Ed=1024,bd=1025,Ds=1026,Vs=1027,Td=1028,Ul=1029,Ad=1030,Nl=1031,Fl=1033,So=33776,wo=33777,Eo=33778,bo=33779,Rc=35840,Cc=35841,Pc=35842,Lc=35843,Ic=36196,Dc=37492,Uc=37496,Nc=37808,Fc=37809,Oc=37810,Bc=37811,zc=37812,Gc=37813,Hc=37814,kc=37815,Vc=37816,Wc=37817,Xc=37818,qc=37819,Yc=37820,$c=37821,To=36492,jc=36494,Kc=36495,Rd=36283,Zc=36284,Jc=36285,Qc=36286,E_=3200,b_=3201,Cd=0,T_=1,Ai="",Tn="srgb",Ni="srgb-linear",Ol="display-p3",Jo="display-p3-linear",Uo="linear",pt="srgb",No="rec709",Fo="p3",ls=7680,nh=519,A_=512,R_=513,C_=514,Pd=515,P_=516,L_=517,I_=518,D_=519,ih=35044,sh="300 es",ai=2e3,Oo=2001;class qs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const Ot=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let rh=1234567;const mr=Math.PI/180,Rr=180/Math.PI;function os(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ot[n&255]+Ot[n>>8&255]+Ot[n>>16&255]+Ot[n>>24&255]+"-"+Ot[e&255]+Ot[e>>8&255]+"-"+Ot[e>>16&15|64]+Ot[e>>24&255]+"-"+Ot[t&63|128]+Ot[t>>8&255]+"-"+Ot[t>>16&255]+Ot[t>>24&255]+Ot[i&255]+Ot[i>>8&255]+Ot[i>>16&255]+Ot[i>>24&255]).toLowerCase()}function Ct(n,e,t){return Math.max(e,Math.min(t,n))}function Bl(n,e){return(n%e+e)%e}function U_(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function N_(n,e,t){return n!==e?(t-n)/(e-n):0}function gr(n,e,t){return(1-t)*n+t*e}function F_(n,e,t,i){return gr(n,e,1-Math.exp(-t*i))}function O_(n,e=1){return e-Math.abs(Bl(n,e*2)-e)}function B_(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function z_(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function G_(n,e){return n+Math.floor(Math.random()*(e-n+1))}function H_(n,e){return n+Math.random()*(e-n)}function k_(n){return n*(.5-Math.random())}function V_(n){n!==void 0&&(rh=n);let e=rh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function W_(n){return n*mr}function X_(n){return n*Rr}function q_(n){return(n&n-1)===0&&n!==0}function Y_(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function $_(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function j_(n,e,t,i,s){const r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),l=r((e+i)/2),h=o((e+i)/2),u=r((e-i)/2),f=o((e-i)/2),d=r((i-e)/2),_=o((i-e)/2);switch(s){case"XYX":n.set(a*h,c*u,c*f,a*l);break;case"YZY":n.set(c*f,a*h,c*u,a*l);break;case"ZXZ":n.set(c*u,c*f,a*h,a*l);break;case"XZX":n.set(a*h,c*_,c*d,a*l);break;case"YXY":n.set(c*d,a*h,c*_,a*l);break;case"ZYZ":n.set(c*_,c*d,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function bs(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function qt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Ze={DEG2RAD:mr,RAD2DEG:Rr,generateUUID:os,clamp:Ct,euclideanModulo:Bl,mapLinear:U_,inverseLerp:N_,lerp:gr,damp:F_,pingpong:O_,smoothstep:B_,smootherstep:z_,randInt:G_,randFloat:H_,randFloatSpread:k_,seededRandom:V_,degToRad:W_,radToDeg:X_,isPowerOfTwo:q_,ceilPowerOfTwo:Y_,floorPowerOfTwo:$_,setQuaternionFromProperEuler:j_,normalize:qt,denormalize:bs};class Pe{constructor(e=0,t=0){Pe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ct(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ke{constructor(e,t,i,s,r,o,a,c,l){Ke.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,c,l)}set(e,t,i,s,r,o,a,c,l){const h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=c,h[6]=i,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],h=i[4],u=i[7],f=i[2],d=i[5],_=i[8],M=s[0],m=s[3],p=s[6],w=s[1],x=s[4],S=s[7],U=s[2],C=s[5],A=s[8];return r[0]=o*M+a*w+c*U,r[3]=o*m+a*x+c*C,r[6]=o*p+a*S+c*A,r[1]=l*M+h*w+u*U,r[4]=l*m+h*x+u*C,r[7]=l*p+h*S+u*A,r[2]=f*M+d*w+_*U,r[5]=f*m+d*x+_*C,r[8]=f*p+d*S+_*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8];return t*o*h-t*a*l-i*r*h+i*a*c+s*r*l-s*o*c}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=h*o-a*l,f=a*c-h*r,d=l*r-o*c,_=t*u+i*f+s*d;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/_;return e[0]=u*M,e[1]=(s*l-h*i)*M,e[2]=(a*i-s*o)*M,e[3]=f*M,e[4]=(h*t-s*c)*M,e[5]=(s*r-a*t)*M,e[6]=d*M,e[7]=(i*c-l*t)*M,e[8]=(o*t-i*r)*M,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(i*c,i*l,-i*(c*o+l*a)+o+e,-s*l,s*c,-s*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Ma.makeScale(e,t)),this}rotate(e){return this.premultiply(Ma.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ma.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ma=new Ke;function Ld(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Cr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function K_(){const n=Cr("canvas");return n.style.display="block",n}const oh={};function Ao(n){n in oh||(oh[n]=!0,console.warn(n))}function Z_(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}function J_(n){const e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Q_(n){const e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const ah=new Ke().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),ch=new Ke().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Qs={[Ni]:{transfer:Uo,primaries:No,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n,fromReference:n=>n},[Tn]:{transfer:pt,primaries:No,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[Jo]:{transfer:Uo,primaries:Fo,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.applyMatrix3(ch),fromReference:n=>n.applyMatrix3(ah)},[Ol]:{transfer:pt,primaries:Fo,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.convertSRGBToLinear().applyMatrix3(ch),fromReference:n=>n.applyMatrix3(ah).convertLinearToSRGB()}},ev=new Set([Ni,Jo]),st={enabled:!0,_workingColorSpace:Ni,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!ev.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=Qs[e].toReference,s=Qs[t].fromReference;return s(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return Qs[n].primaries},getTransfer:function(n){return n===Ai?Uo:Qs[n].transfer},getLuminanceCoefficients:function(n,e=this._workingColorSpace){return n.fromArray(Qs[e].luminanceCoefficients)}};function Us(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Sa(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let us;class tv{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{us===void 0&&(us=Cr("canvas")),us.width=e.width,us.height=e.height;const i=us.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=us}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Cr("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Us(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Us(t[i]/255)*255):t[i]=Us(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let nv=0;class Id{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:nv++}),this.uuid=os(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(wa(s[o].image)):r.push(wa(s[o]))}else r=wa(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function wa(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?tv.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let iv=0;class Kt extends qs{constructor(e=Kt.DEFAULT_IMAGE,t=Kt.DEFAULT_MAPPING,i=Ki,s=Ki,r=Rn,o=Ri,a=xn,c=ui,l=Kt.DEFAULT_ANISOTROPY,h=Ai){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:iv++}),this.uuid=os(),this.name="",this.source=new Id(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Pe(0,0),this.repeat=new Pe(1,1),this.center=new Pe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==vd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case es:e.x=e.x-Math.floor(e.x);break;case Ki:e.x=e.x<0?0:1;break;case Ac:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case es:e.y=e.y-Math.floor(e.y);break;case Ki:e.y=e.y<0?0:1;break;case Ac:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Kt.DEFAULT_IMAGE=null;Kt.DEFAULT_MAPPING=vd;Kt.DEFAULT_ANISOTROPY=1;class lt{constructor(e=0,t=0,i=0,s=1){lt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const c=e.elements,l=c[0],h=c[4],u=c[8],f=c[1],d=c[5],_=c[9],M=c[2],m=c[6],p=c[10];if(Math.abs(h-f)<.01&&Math.abs(u-M)<.01&&Math.abs(_-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+M)<.1&&Math.abs(_+m)<.1&&Math.abs(l+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(l+1)/2,S=(d+1)/2,U=(p+1)/2,C=(h+f)/4,A=(u+M)/4,F=(_+m)/4;return x>S&&x>U?x<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(x),s=C/i,r=A/i):S>U?S<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(S),i=C/s,r=F/s):U<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(U),i=A/r,s=F/r),this.set(i,s,r,t),this}let w=Math.sqrt((m-_)*(m-_)+(u-M)*(u-M)+(f-h)*(f-h));return Math.abs(w)<.001&&(w=1),this.x=(m-_)/w,this.y=(u-M)/w,this.z=(f-h)/w,this.w=Math.acos((l+d+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class sv extends qs{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new lt(0,0,e,t),this.scissorTest=!1,this.viewport=new lt(0,0,e,t);const s={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Rn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const r=new Kt(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Id(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ns extends sv{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Dd extends Kt{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=vn,this.minFilter=vn,this.wrapR=Ki,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class rv extends Kt{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=vn,this.minFilter=vn,this.wrapR=Ki,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Or{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let c=i[s+0],l=i[s+1],h=i[s+2],u=i[s+3];const f=r[o+0],d=r[o+1],_=r[o+2],M=r[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=f,e[t+1]=d,e[t+2]=_,e[t+3]=M;return}if(u!==M||c!==f||l!==d||h!==_){let m=1-a;const p=c*f+l*d+h*_+u*M,w=p>=0?1:-1,x=1-p*p;if(x>Number.EPSILON){const U=Math.sqrt(x),C=Math.atan2(U,p*w);m=Math.sin(m*C)/U,a=Math.sin(a*C)/U}const S=a*w;if(c=c*m+f*S,l=l*m+d*S,h=h*m+_*S,u=u*m+M*S,m===1-a){const U=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=U,l*=U,h*=U,u*=U}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,s,r,o){const a=i[s],c=i[s+1],l=i[s+2],h=i[s+3],u=r[o],f=r[o+1],d=r[o+2],_=r[o+3];return e[t]=a*_+h*u+c*d-l*f,e[t+1]=c*_+h*f+l*u-a*d,e[t+2]=l*_+h*d+a*f-c*u,e[t+3]=h*_-a*u-c*f-l*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(i/2),h=a(s/2),u=a(r/2),f=c(i/2),d=c(s/2),_=c(r/2);switch(o){case"XYZ":this._x=f*h*u+l*d*_,this._y=l*d*u-f*h*_,this._z=l*h*_+f*d*u,this._w=l*h*u-f*d*_;break;case"YXZ":this._x=f*h*u+l*d*_,this._y=l*d*u-f*h*_,this._z=l*h*_-f*d*u,this._w=l*h*u+f*d*_;break;case"ZXY":this._x=f*h*u-l*d*_,this._y=l*d*u+f*h*_,this._z=l*h*_+f*d*u,this._w=l*h*u-f*d*_;break;case"ZYX":this._x=f*h*u-l*d*_,this._y=l*d*u+f*h*_,this._z=l*h*_-f*d*u,this._w=l*h*u+f*d*_;break;case"YZX":this._x=f*h*u+l*d*_,this._y=l*d*u+f*h*_,this._z=l*h*_-f*d*u,this._w=l*h*u-f*d*_;break;case"XZY":this._x=f*h*u-l*d*_,this._y=l*d*u-f*h*_,this._z=l*h*_+f*d*u,this._w=l*h*u+f*d*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],h=t[6],u=t[10],f=i+a+u;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-c)*d,this._y=(r-l)*d,this._z=(o-s)*d}else if(i>a&&i>u){const d=2*Math.sqrt(1+i-a-u);this._w=(h-c)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+l)/d}else if(a>u){const d=2*Math.sqrt(1+a-i-u);this._w=(r-l)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(c+h)/d}else{const d=2*Math.sqrt(1+u-i-a);this._w=(o-s)/d,this._x=(r+l)/d,this._y=(c+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ct(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,h=t._w;return this._x=i*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-i*l,this._z=r*h+o*l+i*c-s*a,this._w=o*h-i*a-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+i*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const d=1-t;return this._w=d*o+t*this._w,this._x=d*i+t*this._x,this._y=d*s+t*this._y,this._z=d*r+t*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-t)*h)/l,f=Math.sin(t*h)/l;return this._w=o*u+this._w*f,this._x=i*u+this._x*f,this._y=s*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class X{constructor(e=0,t=0,i=0){X.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(lh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(lh.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*s-a*i),h=2*(a*t-r*s),u=2*(r*i-o*t);return this.x=t+c*l+o*u-a*h,this.y=i+c*h+a*l-r*u,this.z=s+c*u+r*h-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=s*c-r*a,this.y=r*o-i*c,this.z=i*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Ea.copy(this).projectOnVector(e),this.sub(Ea)}reflect(e){return this.sub(Ea.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ct(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ea=new X,lh=new Or;class Br{constructor(e=new X(1/0,1/0,1/0),t=new X(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(wn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(wn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=wn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,wn):wn.fromBufferAttribute(r,o),wn.applyMatrix4(e.matrixWorld),this.expandByPoint(wn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),jr.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),jr.copy(i.boundingBox)),jr.applyMatrix4(e.matrixWorld),this.union(jr)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,wn),wn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(er),Kr.subVectors(this.max,er),hs.subVectors(e.a,er),fs.subVectors(e.b,er),ds.subVectors(e.c,er),_i.subVectors(fs,hs),vi.subVectors(ds,fs),zi.subVectors(hs,ds);let t=[0,-_i.z,_i.y,0,-vi.z,vi.y,0,-zi.z,zi.y,_i.z,0,-_i.x,vi.z,0,-vi.x,zi.z,0,-zi.x,-_i.y,_i.x,0,-vi.y,vi.x,0,-zi.y,zi.x,0];return!ba(t,hs,fs,ds,Kr)||(t=[1,0,0,0,1,0,0,0,1],!ba(t,hs,fs,ds,Kr))?!1:(Zr.crossVectors(_i,vi),t=[Zr.x,Zr.y,Zr.z],ba(t,hs,fs,ds,Kr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,wn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(wn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Zn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Zn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Zn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Zn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Zn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Zn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Zn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Zn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Zn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Zn=[new X,new X,new X,new X,new X,new X,new X,new X],wn=new X,jr=new Br,hs=new X,fs=new X,ds=new X,_i=new X,vi=new X,zi=new X,er=new X,Kr=new X,Zr=new X,Gi=new X;function ba(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Gi.fromArray(n,r);const a=s.x*Math.abs(Gi.x)+s.y*Math.abs(Gi.y)+s.z*Math.abs(Gi.z),c=e.dot(Gi),l=t.dot(Gi),h=i.dot(Gi);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const ov=new Br,tr=new X,Ta=new X;class zl{constructor(e=new X,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):ov.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;tr.subVectors(e,this.center);const t=tr.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(tr,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ta.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(tr.copy(e.center).add(Ta)),this.expandByPoint(tr.copy(e.center).sub(Ta))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Jn=new X,Aa=new X,Jr=new X,xi=new X,Ra=new X,Qr=new X,Ca=new X;class av{constructor(e=new X,t=new X(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Jn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Jn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Jn.copy(this.origin).addScaledVector(this.direction,t),Jn.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Aa.copy(e).add(t).multiplyScalar(.5),Jr.copy(t).sub(e).normalize(),xi.copy(this.origin).sub(Aa);const r=e.distanceTo(t)*.5,o=-this.direction.dot(Jr),a=xi.dot(this.direction),c=-xi.dot(Jr),l=xi.lengthSq(),h=Math.abs(1-o*o);let u,f,d,_;if(h>0)if(u=o*c-a,f=o*a-c,_=r*h,u>=0)if(f>=-_)if(f<=_){const M=1/h;u*=M,f*=M,d=u*(u+o*f+2*a)+f*(o*u+f+2*c)+l}else f=r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;else f=-r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;else f<=-_?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-c),r),d=-u*u+f*(f+2*c)+l):f<=_?(u=0,f=Math.min(Math.max(-r,-c),r),d=f*(f+2*c)+l):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-c),r),d=-u*u+f*(f+2*c)+l);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Aa).addScaledVector(Jr,f),d}intersectSphere(e,t){Jn.subVectors(e.center,this.origin);const i=Jn.dot(this.direction),s=Jn.dot(Jn)-i*i,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return l>=0?(i=(e.min.x-f.x)*l,s=(e.max.x-f.x)*l):(i=(e.max.x-f.x)*l,s=(e.min.x-f.x)*l),h>=0?(r=(e.min.y-f.y)*h,o=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,o=(e.min.y-f.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(e.min.z-f.z)*u,c=(e.max.z-f.z)*u):(a=(e.max.z-f.z)*u,c=(e.min.z-f.z)*u),i>c||a>s)||((a>i||i!==i)&&(i=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Jn)!==null}intersectTriangle(e,t,i,s,r){Ra.subVectors(t,e),Qr.subVectors(i,e),Ca.crossVectors(Ra,Qr);let o=this.direction.dot(Ca),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;xi.subVectors(this.origin,e);const c=a*this.direction.dot(Qr.crossVectors(xi,Qr));if(c<0)return null;const l=a*this.direction.dot(Ra.cross(xi));if(l<0||c+l>o)return null;const h=-a*xi.dot(Ca);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class mt{constructor(e,t,i,s,r,o,a,c,l,h,u,f,d,_,M,m){mt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,c,l,h,u,f,d,_,M,m)}set(e,t,i,s,r,o,a,c,l,h,u,f,d,_,M,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=f,p[3]=d,p[7]=_,p[11]=M,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new mt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,s=1/ps.setFromMatrixColumn(e,0).length(),r=1/ps.setFromMatrixColumn(e,1).length(),o=1/ps.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const f=o*h,d=o*u,_=a*h,M=a*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=d+_*l,t[5]=f-M*l,t[9]=-a*c,t[2]=M-f*l,t[6]=_+d*l,t[10]=o*c}else if(e.order==="YXZ"){const f=c*h,d=c*u,_=l*h,M=l*u;t[0]=f+M*a,t[4]=_*a-d,t[8]=o*l,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=d*a-_,t[6]=M+f*a,t[10]=o*c}else if(e.order==="ZXY"){const f=c*h,d=c*u,_=l*h,M=l*u;t[0]=f-M*a,t[4]=-o*u,t[8]=_+d*a,t[1]=d+_*a,t[5]=o*h,t[9]=M-f*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const f=o*h,d=o*u,_=a*h,M=a*u;t[0]=c*h,t[4]=_*l-d,t[8]=f*l+M,t[1]=c*u,t[5]=M*l+f,t[9]=d*l-_,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const f=o*c,d=o*l,_=a*c,M=a*l;t[0]=c*h,t[4]=M-f*u,t[8]=_*u+d,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-l*h,t[6]=d*u+_,t[10]=f-M*u}else if(e.order==="XZY"){const f=o*c,d=o*l,_=a*c,M=a*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=f*u+M,t[5]=o*h,t[9]=d*u-_,t[2]=_*u-d,t[6]=a*h,t[10]=M*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(cv,e,lv)}lookAt(e,t,i){const s=this.elements;return an.subVectors(e,t),an.lengthSq()===0&&(an.z=1),an.normalize(),yi.crossVectors(i,an),yi.lengthSq()===0&&(Math.abs(i.z)===1?an.x+=1e-4:an.z+=1e-4,an.normalize(),yi.crossVectors(i,an)),yi.normalize(),eo.crossVectors(an,yi),s[0]=yi.x,s[4]=eo.x,s[8]=an.x,s[1]=yi.y,s[5]=eo.y,s[9]=an.y,s[2]=yi.z,s[6]=eo.z,s[10]=an.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],h=i[1],u=i[5],f=i[9],d=i[13],_=i[2],M=i[6],m=i[10],p=i[14],w=i[3],x=i[7],S=i[11],U=i[15],C=s[0],A=s[4],F=s[8],ne=s[12],y=s[1],b=s[5],k=s[9],z=s[13],Q=s[2],ie=s[6],H=s[10],Z=s[14],B=s[3],_e=s[7],me=s[11],ge=s[15];return r[0]=o*C+a*y+c*Q+l*B,r[4]=o*A+a*b+c*ie+l*_e,r[8]=o*F+a*k+c*H+l*me,r[12]=o*ne+a*z+c*Z+l*ge,r[1]=h*C+u*y+f*Q+d*B,r[5]=h*A+u*b+f*ie+d*_e,r[9]=h*F+u*k+f*H+d*me,r[13]=h*ne+u*z+f*Z+d*ge,r[2]=_*C+M*y+m*Q+p*B,r[6]=_*A+M*b+m*ie+p*_e,r[10]=_*F+M*k+m*H+p*me,r[14]=_*ne+M*z+m*Z+p*ge,r[3]=w*C+x*y+S*Q+U*B,r[7]=w*A+x*b+S*ie+U*_e,r[11]=w*F+x*k+S*H+U*me,r[15]=w*ne+x*z+S*Z+U*ge,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],h=e[2],u=e[6],f=e[10],d=e[14],_=e[3],M=e[7],m=e[11],p=e[15];return _*(+r*c*u-s*l*u-r*a*f+i*l*f+s*a*d-i*c*d)+M*(+t*c*d-t*l*f+r*o*f-s*o*d+s*l*h-r*c*h)+m*(+t*l*u-t*a*d-r*o*u+i*o*d+r*a*h-i*l*h)+p*(-s*a*h-t*c*u+t*a*f+s*o*u-i*o*f+i*c*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=e[9],f=e[10],d=e[11],_=e[12],M=e[13],m=e[14],p=e[15],w=u*m*l-M*f*l+M*c*d-a*m*d-u*c*p+a*f*p,x=_*f*l-h*m*l-_*c*d+o*m*d+h*c*p-o*f*p,S=h*M*l-_*u*l+_*a*d-o*M*d-h*a*p+o*u*p,U=_*u*c-h*M*c-_*a*f+o*M*f+h*a*m-o*u*m,C=t*w+i*x+s*S+r*U;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/C;return e[0]=w*A,e[1]=(M*f*r-u*m*r-M*s*d+i*m*d+u*s*p-i*f*p)*A,e[2]=(a*m*r-M*c*r+M*s*l-i*m*l-a*s*p+i*c*p)*A,e[3]=(u*c*r-a*f*r-u*s*l+i*f*l+a*s*d-i*c*d)*A,e[4]=x*A,e[5]=(h*m*r-_*f*r+_*s*d-t*m*d-h*s*p+t*f*p)*A,e[6]=(_*c*r-o*m*r-_*s*l+t*m*l+o*s*p-t*c*p)*A,e[7]=(o*f*r-h*c*r+h*s*l-t*f*l-o*s*d+t*c*d)*A,e[8]=S*A,e[9]=(_*u*r-h*M*r-_*i*d+t*M*d+h*i*p-t*u*p)*A,e[10]=(o*M*r-_*a*r+_*i*l-t*M*l-o*i*p+t*a*p)*A,e[11]=(h*a*r-o*u*r-h*i*l+t*u*l+o*i*d-t*a*d)*A,e[12]=U*A,e[13]=(h*M*s-_*u*s+_*i*f-t*M*f-h*i*m+t*u*m)*A,e[14]=(_*a*s-o*M*s-_*i*c+t*M*c+o*i*m-t*a*m)*A,e[15]=(o*u*s-h*a*s+h*i*c-t*u*c-o*i*f+t*a*f)*A,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,c=e.z,l=r*o,h=r*a;return this.set(l*o+i,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+i,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,h=o+o,u=a+a,f=r*l,d=r*h,_=r*u,M=o*h,m=o*u,p=a*u,w=c*l,x=c*h,S=c*u,U=i.x,C=i.y,A=i.z;return s[0]=(1-(M+p))*U,s[1]=(d+S)*U,s[2]=(_-x)*U,s[3]=0,s[4]=(d-S)*C,s[5]=(1-(f+p))*C,s[6]=(m+w)*C,s[7]=0,s[8]=(_+x)*A,s[9]=(m-w)*A,s[10]=(1-(f+M))*A,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;let r=ps.set(s[0],s[1],s[2]).length();const o=ps.set(s[4],s[5],s[6]).length(),a=ps.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],En.copy(this);const l=1/r,h=1/o,u=1/a;return En.elements[0]*=l,En.elements[1]*=l,En.elements[2]*=l,En.elements[4]*=h,En.elements[5]*=h,En.elements[6]*=h,En.elements[8]*=u,En.elements[9]*=u,En.elements[10]*=u,t.setFromRotationMatrix(En),i.x=r,i.y=o,i.z=a,this}makePerspective(e,t,i,s,r,o,a=ai){const c=this.elements,l=2*r/(t-e),h=2*r/(i-s),u=(t+e)/(t-e),f=(i+s)/(i-s);let d,_;if(a===ai)d=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===Oo)d=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=d,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=ai){const c=this.elements,l=1/(t-e),h=1/(i-s),u=1/(o-r),f=(t+e)*l,d=(i+s)*h;let _,M;if(a===ai)_=(o+r)*u,M=-2*u;else if(a===Oo)_=r*u,M=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-d,c[2]=0,c[6]=0,c[10]=M,c[14]=-_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const ps=new X,En=new mt,cv=new X(0,0,0),lv=new X(1,1,1),yi=new X,eo=new X,an=new X,uh=new mt,hh=new Or;class qn{constructor(e=0,t=0,i=0,s=qn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],u=s[2],f=s[6],d=s[10];switch(t){case"XYZ":this._y=Math.asin(Ct(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ct(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ct(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Ct(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Ct(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Ct(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return uh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(uh,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return hh.setFromEuler(this),this.setFromQuaternion(hh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}qn.DEFAULT_ORDER="XYZ";class Ud{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let uv=0;const fh=new X,ms=new Or,Qn=new mt,to=new X,nr=new X,hv=new X,fv=new Or,dh=new X(1,0,0),ph=new X(0,1,0),mh=new X(0,0,1),gh={type:"added"},dv={type:"removed"},gs={type:"childadded",child:null},Pa={type:"childremoved",child:null};class Ht extends qs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:uv++}),this.uuid=os(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ht.DEFAULT_UP.clone();const e=new X,t=new qn,i=new Or,s=new X(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new mt},normalMatrix:{value:new Ke}}),this.matrix=new mt,this.matrixWorld=new mt,this.matrixAutoUpdate=Ht.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ht.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ud,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ms.setFromAxisAngle(e,t),this.quaternion.multiply(ms),this}rotateOnWorldAxis(e,t){return ms.setFromAxisAngle(e,t),this.quaternion.premultiply(ms),this}rotateX(e){return this.rotateOnAxis(dh,e)}rotateY(e){return this.rotateOnAxis(ph,e)}rotateZ(e){return this.rotateOnAxis(mh,e)}translateOnAxis(e,t){return fh.copy(e).applyQuaternion(this.quaternion),this.position.add(fh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(dh,e)}translateY(e){return this.translateOnAxis(ph,e)}translateZ(e){return this.translateOnAxis(mh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Qn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?to.copy(e):to.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),nr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Qn.lookAt(nr,to,this.up):Qn.lookAt(to,nr,this.up),this.quaternion.setFromRotationMatrix(Qn),s&&(Qn.extractRotation(s.matrixWorld),ms.setFromRotationMatrix(Qn),this.quaternion.premultiply(ms.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(gh),gs.child=e,this.dispatchEvent(gs),gs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(dv),Pa.child=e,this.dispatchEvent(Pa),Pa.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Qn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Qn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Qn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(gh),gs.child=e,this.dispatchEvent(gs),gs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(nr,e,hv),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(nr,fv,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];r(e.shapes,u)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(r(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),h=o(e.images),u=o(e.shapes),f=o(e.skeletons),d=o(e.animations),_=o(e.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),f.length>0&&(i.skeletons=f),d.length>0&&(i.animations=d),_.length>0&&(i.nodes=_)}return i.object=s,i;function o(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}Ht.DEFAULT_UP=new X(0,1,0);Ht.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ht.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const bn=new X,ei=new X,La=new X,ti=new X,_s=new X,vs=new X,_h=new X,Ia=new X,Da=new X,Ua=new X,Na=new lt,Fa=new lt,Oa=new lt;class Cn{constructor(e=new X,t=new X,i=new X){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),bn.subVectors(e,t),s.cross(bn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){bn.subVectors(s,t),ei.subVectors(i,t),La.subVectors(e,t);const o=bn.dot(bn),a=bn.dot(ei),c=bn.dot(La),l=ei.dot(ei),h=ei.dot(La),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;const f=1/u,d=(l*c-a*h)*f,_=(o*h-a*c)*f;return r.set(1-d-_,_,d)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,ti)===null?!1:ti.x>=0&&ti.y>=0&&ti.x+ti.y<=1}static getInterpolation(e,t,i,s,r,o,a,c){return this.getBarycoord(e,t,i,s,ti)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,ti.x),c.addScaledVector(o,ti.y),c.addScaledVector(a,ti.z),c)}static getInterpolatedAttribute(e,t,i,s,r,o){return Na.setScalar(0),Fa.setScalar(0),Oa.setScalar(0),Na.fromBufferAttribute(e,t),Fa.fromBufferAttribute(e,i),Oa.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Na,r.x),o.addScaledVector(Fa,r.y),o.addScaledVector(Oa,r.z),o}static isFrontFacing(e,t,i,s){return bn.subVectors(i,t),ei.subVectors(e,t),bn.cross(ei).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return bn.subVectors(this.c,this.b),ei.subVectors(this.a,this.b),bn.cross(ei).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Cn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Cn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return Cn.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return Cn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Cn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let o,a;_s.subVectors(s,i),vs.subVectors(r,i),Ia.subVectors(e,i);const c=_s.dot(Ia),l=vs.dot(Ia);if(c<=0&&l<=0)return t.copy(i);Da.subVectors(e,s);const h=_s.dot(Da),u=vs.dot(Da);if(h>=0&&u<=h)return t.copy(s);const f=c*u-h*l;if(f<=0&&c>=0&&h<=0)return o=c/(c-h),t.copy(i).addScaledVector(_s,o);Ua.subVectors(e,r);const d=_s.dot(Ua),_=vs.dot(Ua);if(_>=0&&d<=_)return t.copy(r);const M=d*l-c*_;if(M<=0&&l>=0&&_<=0)return a=l/(l-_),t.copy(i).addScaledVector(vs,a);const m=h*_-d*u;if(m<=0&&u-h>=0&&d-_>=0)return _h.subVectors(r,s),a=(u-h)/(u-h+(d-_)),t.copy(s).addScaledVector(_h,a);const p=1/(m+M+f);return o=M*p,a=f*p,t.copy(i).addScaledVector(_s,o).addScaledVector(vs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Nd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Mi={h:0,s:0,l:0},no={h:0,s:0,l:0};function Ba(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Ve{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Tn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,st.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=st.workingColorSpace){return this.r=e,this.g=t,this.b=i,st.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=st.workingColorSpace){if(e=Bl(e,1),t=Ct(t,0,1),i=Ct(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=Ba(o,r,e+1/3),this.g=Ba(o,r,e),this.b=Ba(o,r,e-1/3)}return st.toWorkingColorSpace(this,s),this}setStyle(e,t=Tn){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Tn){const i=Nd[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Us(e.r),this.g=Us(e.g),this.b=Us(e.b),this}copyLinearToSRGB(e){return this.r=Sa(e.r),this.g=Sa(e.g),this.b=Sa(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Tn){return st.fromWorkingColorSpace(Bt.copy(this),e),Math.round(Ct(Bt.r*255,0,255))*65536+Math.round(Ct(Bt.g*255,0,255))*256+Math.round(Ct(Bt.b*255,0,255))}getHexString(e=Tn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=st.workingColorSpace){st.fromWorkingColorSpace(Bt.copy(this),t);const i=Bt.r,s=Bt.g,r=Bt.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let c,l;const h=(a+o)/2;if(a===o)c=0,l=0;else{const u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case i:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-i)/u+2;break;case r:c=(i-s)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=st.workingColorSpace){return st.fromWorkingColorSpace(Bt.copy(this),t),e.r=Bt.r,e.g=Bt.g,e.b=Bt.b,e}getStyle(e=Tn){st.fromWorkingColorSpace(Bt.copy(this),e);const t=Bt.r,i=Bt.g,s=Bt.b;return e!==Tn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Mi),this.setHSL(Mi.h+e,Mi.s+t,Mi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Mi),e.getHSL(no);const i=gr(Mi.h,no.h,t),s=gr(Mi.s,no.s,t),r=gr(Mi.l,no.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Bt=new Ve;Ve.NAMES=Nd;let pv=0;class zr extends qs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:pv++}),this.uuid=os(),this.name="",this.type="Material",this.blending=Is,this.side=Ii,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=gc,this.blendDst=_c,this.blendEquation=$i,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ve(0,0,0),this.blendAlpha=0,this.depthFunc=zs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=nh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ls,this.stencilZFail=ls,this.stencilZPass=ls,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Is&&(i.blending=this.blending),this.side!==Ii&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==gc&&(i.blendSrc=this.blendSrc),this.blendDst!==_c&&(i.blendDst=this.blendDst),this.blendEquation!==$i&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==zs&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==nh&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ls&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ls&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ls&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class vt extends zr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ve(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qn,this.combine=_d,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Et=new X,io=new Pe;class Wn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=ih,this.updateRanges=[],this.gpuType=oi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)io.fromBufferAttribute(this,t),io.applyMatrix3(e),this.setXY(t,io.x,io.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Et.fromBufferAttribute(this,t),Et.applyMatrix3(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Et.fromBufferAttribute(this,t),Et.applyMatrix4(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Et.fromBufferAttribute(this,t),Et.applyNormalMatrix(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Et.fromBufferAttribute(this,t),Et.transformDirection(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=bs(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=qt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=bs(t,this.array)),t}setX(e,t){return this.normalized&&(t=qt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=bs(t,this.array)),t}setY(e,t){return this.normalized&&(t=qt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=bs(t,this.array)),t}setZ(e,t){return this.normalized&&(t=qt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=bs(t,this.array)),t}setW(e,t){return this.normalized&&(t=qt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=qt(t,this.array),i=qt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=qt(t,this.array),i=qt(i,this.array),s=qt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=qt(t,this.array),i=qt(i,this.array),s=qt(s,this.array),r=qt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ih&&(e.usage=this.usage),e}}class Fd extends Wn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Od extends Wn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Mt extends Wn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let mv=0;const pn=new mt,za=new Ht,xs=new X,cn=new Br,ir=new Br,Rt=new X;class Mn extends qs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:mv++}),this.uuid=os(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ld(e)?Od:Fd)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Ke().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return pn.makeRotationFromQuaternion(e),this.applyMatrix4(pn),this}rotateX(e){return pn.makeRotationX(e),this.applyMatrix4(pn),this}rotateY(e){return pn.makeRotationY(e),this.applyMatrix4(pn),this}rotateZ(e){return pn.makeRotationZ(e),this.applyMatrix4(pn),this}translate(e,t,i){return pn.makeTranslation(e,t,i),this.applyMatrix4(pn),this}scale(e,t,i){return pn.makeScale(e,t,i),this.applyMatrix4(pn),this}lookAt(e){return za.lookAt(e),za.updateMatrix(),this.applyMatrix4(za.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(xs).negate(),this.translate(xs.x,xs.y,xs.z),this}setFromPoints(e){const t=[];for(let i=0,s=e.length;i<s;i++){const r=e[i];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Mt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Br);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new X(-1/0,-1/0,-1/0),new X(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];cn.setFromBufferAttribute(r),this.morphTargetsRelative?(Rt.addVectors(this.boundingBox.min,cn.min),this.boundingBox.expandByPoint(Rt),Rt.addVectors(this.boundingBox.max,cn.max),this.boundingBox.expandByPoint(Rt)):(this.boundingBox.expandByPoint(cn.min),this.boundingBox.expandByPoint(cn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new zl);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new X,1/0);return}if(e){const i=this.boundingSphere.center;if(cn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];ir.setFromBufferAttribute(a),this.morphTargetsRelative?(Rt.addVectors(cn.min,ir.min),cn.expandByPoint(Rt),Rt.addVectors(cn.max,ir.max),cn.expandByPoint(Rt)):(cn.expandByPoint(ir.min),cn.expandByPoint(ir.max))}cn.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)Rt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Rt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Rt.fromBufferAttribute(a,l),c&&(xs.fromBufferAttribute(e,l),Rt.add(xs)),s=Math.max(s,i.distanceToSquared(Rt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Wn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let F=0;F<i.count;F++)a[F]=new X,c[F]=new X;const l=new X,h=new X,u=new X,f=new Pe,d=new Pe,_=new Pe,M=new X,m=new X;function p(F,ne,y){l.fromBufferAttribute(i,F),h.fromBufferAttribute(i,ne),u.fromBufferAttribute(i,y),f.fromBufferAttribute(r,F),d.fromBufferAttribute(r,ne),_.fromBufferAttribute(r,y),h.sub(l),u.sub(l),d.sub(f),_.sub(f);const b=1/(d.x*_.y-_.x*d.y);isFinite(b)&&(M.copy(h).multiplyScalar(_.y).addScaledVector(u,-d.y).multiplyScalar(b),m.copy(u).multiplyScalar(d.x).addScaledVector(h,-_.x).multiplyScalar(b),a[F].add(M),a[ne].add(M),a[y].add(M),c[F].add(m),c[ne].add(m),c[y].add(m))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let F=0,ne=w.length;F<ne;++F){const y=w[F],b=y.start,k=y.count;for(let z=b,Q=b+k;z<Q;z+=3)p(e.getX(z+0),e.getX(z+1),e.getX(z+2))}const x=new X,S=new X,U=new X,C=new X;function A(F){U.fromBufferAttribute(s,F),C.copy(U);const ne=a[F];x.copy(ne),x.sub(U.multiplyScalar(U.dot(ne))).normalize(),S.crossVectors(C,ne);const b=S.dot(c[F])<0?-1:1;o.setXYZW(F,x.x,x.y,x.z,b)}for(let F=0,ne=w.length;F<ne;++F){const y=w[F],b=y.start,k=y.count;for(let z=b,Q=b+k;z<Q;z+=3)A(e.getX(z+0)),A(e.getX(z+1)),A(e.getX(z+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Wn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,d=i.count;f<d;f++)i.setXYZ(f,0,0,0);const s=new X,r=new X,o=new X,a=new X,c=new X,l=new X,h=new X,u=new X;if(e)for(let f=0,d=e.count;f<d;f+=3){const _=e.getX(f+0),M=e.getX(f+1),m=e.getX(f+2);s.fromBufferAttribute(t,_),r.fromBufferAttribute(t,M),o.fromBufferAttribute(t,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(i,_),c.fromBufferAttribute(i,M),l.fromBufferAttribute(i,m),a.add(h),c.add(h),l.add(h),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(M,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,d=t.count;f<d;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),i.setXYZ(f+0,h.x,h.y,h.z),i.setXYZ(f+1,h.x,h.y,h.z),i.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Rt.fromBufferAttribute(e,t),Rt.normalize(),e.setXYZ(t,Rt.x,Rt.y,Rt.z)}toNonIndexed(){function e(a,c){const l=a.array,h=a.itemSize,u=a.normalized,f=new l.constructor(c.length*h);let d=0,_=0;for(let M=0,m=c.length;M<m;M++){a.isInterleavedBufferAttribute?d=c[M]*a.data.stride+a.offset:d=c[M]*h;for(let p=0;p<h;p++)f[_++]=l[d++]}return new Wn(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Mn,i=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=e(c,i);t.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){const f=l[h],d=e(f,i);c.push(d)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const c in i){const l=i[c];e.data.attributes[c]=l.toJSON(e.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,f=l.length;u<f;u++){const d=l[u];h.push(d.toJSON(e.data))}h.length>0&&(s[c]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const s=e.attributes;for(const l in s){const h=s[l];this.setAttribute(l,h.clone(t))}const r=e.morphAttributes;for(const l in r){const h=[],u=r[l];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,h=o.length;l<h;l++){const u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const vh=new mt,Hi=new av,so=new zl,xh=new X,ro=new X,oo=new X,ao=new X,Ga=new X,co=new X,yh=new X,lo=new X;class I extends Ht{constructor(e=new Mn,t=new vt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){co.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=a[c],u=r[c];h!==0&&(Ga.fromBufferAttribute(u,e),o?co.addScaledVector(Ga,h):co.addScaledVector(Ga.sub(t),h))}t.add(co)}return t}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),so.copy(i.boundingSphere),so.applyMatrix4(r),Hi.copy(e.ray).recast(e.near),!(so.containsPoint(Hi.origin)===!1&&(Hi.intersectSphere(so,xh)===null||Hi.origin.distanceToSquared(xh)>(e.far-e.near)**2))&&(vh.copy(r).invert(),Hi.copy(e.ray).applyMatrix4(vh),!(i.boundingBox!==null&&Hi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Hi)))}_computeIntersections(e,t,i){let s;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,M=f.length;_<M;_++){const m=f[_],p=o[m.materialIndex],w=Math.max(m.start,d.start),x=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let S=w,U=x;S<U;S+=3){const C=a.getX(S),A=a.getX(S+1),F=a.getX(S+2);s=uo(this,p,e,i,l,h,u,C,A,F),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const _=Math.max(0,d.start),M=Math.min(a.count,d.start+d.count);for(let m=_,p=M;m<p;m+=3){const w=a.getX(m),x=a.getX(m+1),S=a.getX(m+2);s=uo(this,o,e,i,l,h,u,w,x,S),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let _=0,M=f.length;_<M;_++){const m=f[_],p=o[m.materialIndex],w=Math.max(m.start,d.start),x=Math.min(c.count,Math.min(m.start+m.count,d.start+d.count));for(let S=w,U=x;S<U;S+=3){const C=S,A=S+1,F=S+2;s=uo(this,p,e,i,l,h,u,C,A,F),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const _=Math.max(0,d.start),M=Math.min(c.count,d.start+d.count);for(let m=_,p=M;m<p;m+=3){const w=m,x=m+1,S=m+2;s=uo(this,o,e,i,l,h,u,w,x,S),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function gv(n,e,t,i,s,r,o,a){let c;if(e.side===en?c=i.intersectTriangle(o,r,s,!0,a):c=i.intersectTriangle(s,r,o,e.side===Ii,a),c===null)return null;lo.copy(a),lo.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(lo);return l<t.near||l>t.far?null:{distance:l,point:lo.clone(),object:n}}function uo(n,e,t,i,s,r,o,a,c,l){n.getVertexPosition(a,ro),n.getVertexPosition(c,oo),n.getVertexPosition(l,ao);const h=gv(n,e,t,i,ro,oo,ao,yh);if(h){const u=new X;Cn.getBarycoord(yh,ro,oo,ao,u),s&&(h.uv=Cn.getInterpolatedAttribute(s,a,c,l,u,new Pe)),r&&(h.uv1=Cn.getInterpolatedAttribute(r,a,c,l,u,new Pe)),o&&(h.normal=Cn.getInterpolatedAttribute(o,a,c,l,u,new X),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const f={a,b:c,c:l,normal:new X,materialIndex:0};Cn.getNormal(ro,oo,ao,f.normal),h.face=f,h.barycoord=u}return h}class Ys extends Mn{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],h=[],u=[];let f=0,d=0;_("z","y","x",-1,-1,i,t,e,o,r,0),_("z","y","x",1,-1,i,t,-e,o,r,1),_("x","z","y",1,1,e,i,t,s,o,2),_("x","z","y",1,-1,e,i,-t,s,o,3),_("x","y","z",1,-1,e,t,i,s,r,4),_("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(c),this.setAttribute("position",new Mt(l,3)),this.setAttribute("normal",new Mt(h,3)),this.setAttribute("uv",new Mt(u,2));function _(M,m,p,w,x,S,U,C,A,F,ne){const y=S/A,b=U/F,k=S/2,z=U/2,Q=C/2,ie=A+1,H=F+1;let Z=0,B=0;const _e=new X;for(let me=0;me<H;me++){const ge=me*b-z;for(let we=0;we<ie;we++){const Re=we*y-k;_e[M]=Re*w,_e[m]=ge*x,_e[p]=Q,l.push(_e.x,_e.y,_e.z),_e[M]=0,_e[m]=0,_e[p]=C>0?1:-1,h.push(_e.x,_e.y,_e.z),u.push(we/A),u.push(1-me/F),Z+=1}}for(let me=0;me<F;me++)for(let ge=0;ge<A;ge++){const we=f+ge+ie*me,Re=f+ge+ie*(me+1),te=f+(ge+1)+ie*(me+1),he=f+(ge+1)+ie*me;c.push(we,Re,he),c.push(Re,te,he),B+=6}a.addGroup(d,B,ne),d+=B,f+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ys(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ws(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function Yt(n){const e={};for(let t=0;t<n.length;t++){const i=Ws(n[t]);for(const s in i)e[s]=i[s]}return e}function _v(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Bd(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:st.workingColorSpace}const vv={clone:Ws,merge:Yt};var xv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,yv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class St extends zr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=xv,this.fragmentShader=yv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ws(e.uniforms),this.uniformsGroups=_v(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class zd extends Ht{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new mt,this.projectionMatrix=new mt,this.projectionMatrixInverse=new mt,this.coordinateSystem=ai}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Si=new X,Mh=new Pe,Sh=new Pe;class gt extends zd{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Rr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(mr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Rr*2*Math.atan(Math.tan(mr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Si.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Si.x,Si.y).multiplyScalar(-e/Si.z),Si.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Si.x,Si.y).multiplyScalar(-e/Si.z)}getViewSize(e,t){return this.getViewBounds(e,Mh,Sh),t.subVectors(Sh,Mh)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(mr*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,t-=o.offsetY*i/l,s*=o.width/c,i*=o.height/l}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ys=-90,Ms=1;class Gd extends Ht{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new gt(ys,Ms,e,t);s.layers=this.layers,this.add(s);const r=new gt(ys,Ms,e,t);r.layers=this.layers,this.add(r);const o=new gt(ys,Ms,e,t);o.layers=this.layers,this.add(o);const a=new gt(ys,Ms,e,t);a.layers=this.layers,this.add(a);const c=new gt(ys,Ms,e,t);c.layers=this.layers,this.add(c);const l=new gt(ys,Ms,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,c]=t;for(const l of t)this.remove(l);if(e===ai)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Oo)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,h]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const M=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,o),e.setRenderTarget(i,2,s),e.render(t,a),e.setRenderTarget(i,3,s),e.render(t,c),e.setRenderTarget(i,4,s),e.render(t,l),i.texture.generateMipmaps=M,e.setRenderTarget(i,5,s),e.render(t,h),e.setRenderTarget(u,f,d),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class Gl extends Kt{constructor(e,t,i,s,r,o,a,c,l,h){e=e!==void 0?e:[],t=t!==void 0?t:Gs,super(e,t,i,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Hd extends ns{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new Gl(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Rn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ys(5,5,5),r=new St({name:"CubemapFromEquirect",uniforms:Ws(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:en,blending:Ci});r.uniforms.tEquirect.value=t;const o=new I(s,r),a=t.minFilter;return t.minFilter===Ri&&(t.minFilter=Rn),new Gd(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,s){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}}const Ha=new X,Mv=new X,Sv=new Ke;class qi{constructor(e=new X(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=Ha.subVectors(i,t).cross(Mv.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Ha),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Sv.getNormalMatrix(e),s=this.coplanarPoint(Ha).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ki=new zl,ho=new X;class Hl{constructor(e=new qi,t=new qi,i=new qi,s=new qi,r=new qi,o=new qi){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=ai){const i=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],h=s[5],u=s[6],f=s[7],d=s[8],_=s[9],M=s[10],m=s[11],p=s[12],w=s[13],x=s[14],S=s[15];if(i[0].setComponents(c-r,f-l,m-d,S-p).normalize(),i[1].setComponents(c+r,f+l,m+d,S+p).normalize(),i[2].setComponents(c+o,f+h,m+_,S+w).normalize(),i[3].setComponents(c-o,f-h,m-_,S-w).normalize(),i[4].setComponents(c-a,f-u,m-M,S-x).normalize(),t===ai)i[5].setComponents(c+a,f+u,m+M,S+x).normalize();else if(t===Oo)i[5].setComponents(a,u,M,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ki.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ki.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ki)}intersectsSprite(e){return ki.center.set(0,0,0),ki.radius=.7071067811865476,ki.applyMatrix4(e.matrixWorld),this.intersectsSphere(ki)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(ho.x=s.normal.x>0?e.max.x:e.min.x,ho.y=s.normal.y>0?e.max.y:e.min.y,ho.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(ho)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function kd(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function wv(n){const e=new WeakMap;function t(a,c){const l=a.array,h=a.usage,u=l.byteLength,f=n.createBuffer();n.bindBuffer(c,f),n.bufferData(c,l,h),a.onUploadCallback();let d;if(l instanceof Float32Array)d=n.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=n.SHORT;else if(l instanceof Uint32Array)d=n.UNSIGNED_INT;else if(l instanceof Int32Array)d=n.INT;else if(l instanceof Int8Array)d=n.BYTE;else if(l instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function i(a,c,l){const h=c.array,u=c.updateRanges;if(n.bindBuffer(l,a),u.length===0)n.bufferSubData(l,0,h);else{u.sort((d,_)=>d.start-_.start);let f=0;for(let d=1;d<u.length;d++){const _=u[f],M=u[d];M.start<=_.start+_.count+1?_.count=Math.max(_.count,M.start+M.count-_.start):(++f,u[f]=M)}u.length=f+1;for(let d=0,_=u.length;d<_;d++){const M=u[d];n.bufferSubData(l,M.start*h.BYTES_PER_ELEMENT,h,M.start,M.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);c&&(n.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}class Qo extends Mn{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(i),c=Math.floor(s),l=a+1,h=c+1,u=e/a,f=t/c,d=[],_=[],M=[],m=[];for(let p=0;p<h;p++){const w=p*f-o;for(let x=0;x<l;x++){const S=x*u-r;_.push(S,-w,0),M.push(0,0,1),m.push(x/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let w=0;w<a;w++){const x=w+l*p,S=w+l*(p+1),U=w+1+l*(p+1),C=w+1+l*p;d.push(x,S,C),d.push(S,U,C)}this.setIndex(d),this.setAttribute("position",new Mt(_,3)),this.setAttribute("normal",new Mt(M,3)),this.setAttribute("uv",new Mt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qo(e.width,e.height,e.widthSegments,e.heightSegments)}}var Ev=`#ifdef USE_ALPHAHASH
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
#endif`,Gv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Hv=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Gx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Hx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
}`,Gy=`#define LAMBERT
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
}`,Hy=`#define MATCAP
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
}`,je={alphahash_fragment:Ev,alphahash_pars_fragment:bv,alphamap_fragment:Tv,alphamap_pars_fragment:Av,alphatest_fragment:Rv,alphatest_pars_fragment:Cv,aomap_fragment:Pv,aomap_pars_fragment:Lv,batching_pars_vertex:Iv,batching_vertex:Dv,begin_vertex:Uv,beginnormal_vertex:Nv,bsdfs:Fv,iridescence_fragment:Ov,bumpmap_pars_fragment:Bv,clipping_planes_fragment:zv,clipping_planes_pars_fragment:Gv,clipping_planes_pars_vertex:Hv,clipping_planes_vertex:kv,color_fragment:Vv,color_pars_fragment:Wv,color_pars_vertex:Xv,color_vertex:qv,common:Yv,cube_uv_reflection_fragment:$v,defaultnormal_vertex:jv,displacementmap_pars_vertex:Kv,displacementmap_vertex:Zv,emissivemap_fragment:Jv,emissivemap_pars_fragment:Qv,colorspace_fragment:ex,colorspace_pars_fragment:tx,envmap_fragment:nx,envmap_common_pars_fragment:ix,envmap_pars_fragment:sx,envmap_pars_vertex:rx,envmap_physical_pars_fragment:gx,envmap_vertex:ox,fog_vertex:ax,fog_pars_vertex:cx,fog_fragment:lx,fog_pars_fragment:ux,gradientmap_pars_fragment:hx,lightmap_pars_fragment:fx,lights_lambert_fragment:dx,lights_lambert_pars_fragment:px,lights_pars_begin:mx,lights_toon_fragment:_x,lights_toon_pars_fragment:vx,lights_phong_fragment:xx,lights_phong_pars_fragment:yx,lights_physical_fragment:Mx,lights_physical_pars_fragment:Sx,lights_fragment_begin:wx,lights_fragment_maps:Ex,lights_fragment_end:bx,logdepthbuf_fragment:Tx,logdepthbuf_pars_fragment:Ax,logdepthbuf_pars_vertex:Rx,logdepthbuf_vertex:Cx,map_fragment:Px,map_pars_fragment:Lx,map_particle_fragment:Ix,map_particle_pars_fragment:Dx,metalnessmap_fragment:Ux,metalnessmap_pars_fragment:Nx,morphinstance_vertex:Fx,morphcolor_vertex:Ox,morphnormal_vertex:Bx,morphtarget_pars_vertex:zx,morphtarget_vertex:Gx,normal_fragment_begin:Hx,normal_fragment_maps:kx,normal_pars_fragment:Vx,normal_pars_vertex:Wx,normal_vertex:Xx,normalmap_pars_fragment:qx,clearcoat_normal_fragment_begin:Yx,clearcoat_normal_fragment_maps:$x,clearcoat_pars_fragment:jx,iridescence_pars_fragment:Kx,opaque_fragment:Zx,packing:Jx,premultiplied_alpha_fragment:Qx,project_vertex:ey,dithering_fragment:ty,dithering_pars_fragment:ny,roughnessmap_fragment:iy,roughnessmap_pars_fragment:sy,shadowmap_pars_fragment:ry,shadowmap_pars_vertex:oy,shadowmap_vertex:ay,shadowmask_pars_fragment:cy,skinbase_vertex:ly,skinning_pars_vertex:uy,skinning_vertex:hy,skinnormal_vertex:fy,specularmap_fragment:dy,specularmap_pars_fragment:py,tonemapping_fragment:my,tonemapping_pars_fragment:gy,transmission_fragment:_y,transmission_pars_fragment:vy,uv_pars_fragment:xy,uv_pars_vertex:yy,uv_vertex:My,worldpos_vertex:Sy,background_vert:wy,background_frag:Ey,backgroundCube_vert:by,backgroundCube_frag:Ty,cube_vert:Ay,cube_frag:Ry,depth_vert:Cy,depth_frag:Py,distanceRGBA_vert:Ly,distanceRGBA_frag:Iy,equirect_vert:Dy,equirect_frag:Uy,linedashed_vert:Ny,linedashed_frag:Fy,meshbasic_vert:Oy,meshbasic_frag:By,meshlambert_vert:zy,meshlambert_frag:Gy,meshmatcap_vert:Hy,meshmatcap_frag:ky,meshnormal_vert:Vy,meshnormal_frag:Wy,meshphong_vert:Xy,meshphong_frag:qy,meshphysical_vert:Yy,meshphysical_frag:$y,meshtoon_vert:jy,meshtoon_frag:Ky,points_vert:Zy,points_frag:Jy,shadow_vert:Qy,shadow_frag:eM,sprite_vert:tM,sprite_frag:nM},Ce={common:{diffuse:{value:new Ve(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ke}},envmap:{envMap:{value:null},envMapRotation:{value:new Ke},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ke},normalScale:{value:new Pe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ve(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ve(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0},uvTransform:{value:new Ke}},sprite:{diffuse:{value:new Ve(16777215)},opacity:{value:1},center:{value:new Pe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}}},kn={basic:{uniforms:Yt([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.fog]),vertexShader:je.meshbasic_vert,fragmentShader:je.meshbasic_frag},lambert:{uniforms:Yt([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new Ve(0)}}]),vertexShader:je.meshlambert_vert,fragmentShader:je.meshlambert_frag},phong:{uniforms:Yt([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new Ve(0)},specular:{value:new Ve(1118481)},shininess:{value:30}}]),vertexShader:je.meshphong_vert,fragmentShader:je.meshphong_frag},standard:{uniforms:Yt([Ce.common,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.roughnessmap,Ce.metalnessmap,Ce.fog,Ce.lights,{emissive:{value:new Ve(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag},toon:{uniforms:Yt([Ce.common,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.gradientmap,Ce.fog,Ce.lights,{emissive:{value:new Ve(0)}}]),vertexShader:je.meshtoon_vert,fragmentShader:je.meshtoon_frag},matcap:{uniforms:Yt([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,{matcap:{value:null}}]),vertexShader:je.meshmatcap_vert,fragmentShader:je.meshmatcap_frag},points:{uniforms:Yt([Ce.points,Ce.fog]),vertexShader:je.points_vert,fragmentShader:je.points_frag},dashed:{uniforms:Yt([Ce.common,Ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:je.linedashed_vert,fragmentShader:je.linedashed_frag},depth:{uniforms:Yt([Ce.common,Ce.displacementmap]),vertexShader:je.depth_vert,fragmentShader:je.depth_frag},normal:{uniforms:Yt([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,{opacity:{value:1}}]),vertexShader:je.meshnormal_vert,fragmentShader:je.meshnormal_frag},sprite:{uniforms:Yt([Ce.sprite,Ce.fog]),vertexShader:je.sprite_vert,fragmentShader:je.sprite_frag},background:{uniforms:{uvTransform:{value:new Ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:je.background_vert,fragmentShader:je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ke}},vertexShader:je.backgroundCube_vert,fragmentShader:je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:je.cube_vert,fragmentShader:je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:je.equirect_vert,fragmentShader:je.equirect_frag},distanceRGBA:{uniforms:Yt([Ce.common,Ce.displacementmap,{referencePosition:{value:new X},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:je.distanceRGBA_vert,fragmentShader:je.distanceRGBA_frag},shadow:{uniforms:Yt([Ce.lights,Ce.fog,{color:{value:new Ve(0)},opacity:{value:1}}]),vertexShader:je.shadow_vert,fragmentShader:je.shadow_frag}};kn.physical={uniforms:Yt([kn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ke},clearcoatNormalScale:{value:new Pe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ke},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ke},sheen:{value:0},sheenColor:{value:new Ve(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ke},transmissionSamplerSize:{value:new Pe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ke},attenuationDistance:{value:0},attenuationColor:{value:new Ve(0)},specularColor:{value:new Ve(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ke},anisotropyVector:{value:new Pe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ke}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag};const fo={r:0,b:0,g:0},Vi=new qn,iM=new mt;function sM(n,e,t,i,s,r,o){const a=new Ve(0);let c=r===!0?0:1,l,h,u=null,f=0,d=null;function _(w){let x=w.isScene===!0?w.background:null;return x&&x.isTexture&&(x=(w.backgroundBlurriness>0?t:e).get(x)),x}function M(w){let x=!1;const S=_(w);S===null?p(a,c):S&&S.isColor&&(p(S,1),x=!0);const U=n.xr.getEnvironmentBlendMode();U==="additive"?i.buffers.color.setClear(0,0,0,1,o):U==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||x)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(w,x){const S=_(x);S&&(S.isCubeTexture||S.mapping===Zo)?(h===void 0&&(h=new I(new Ys(1,1,1),new St({name:"BackgroundCubeMaterial",uniforms:Ws(kn.backgroundCube.uniforms),vertexShader:kn.backgroundCube.vertexShader,fragmentShader:kn.backgroundCube.fragmentShader,side:en,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(U,C,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Vi.copy(x.backgroundRotation),Vi.x*=-1,Vi.y*=-1,Vi.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Vi.y*=-1,Vi.z*=-1),h.material.uniforms.envMap.value=S,h.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(iM.makeRotationFromEuler(Vi)),h.material.toneMapped=st.getTransfer(S.colorSpace)!==pt,(u!==S||f!==S.version||d!==n.toneMapping)&&(h.material.needsUpdate=!0,u=S,f=S.version,d=n.toneMapping),h.layers.enableAll(),w.unshift(h,h.geometry,h.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new I(new Qo(2,2),new St({name:"BackgroundMaterial",uniforms:Ws(kn.background.uniforms),vertexShader:kn.background.vertexShader,fragmentShader:kn.background.fragmentShader,side:Ii,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,l.material.toneMapped=st.getTransfer(S.colorSpace)!==pt,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(u!==S||f!==S.version||d!==n.toneMapping)&&(l.material.needsUpdate=!0,u=S,f=S.version,d=n.toneMapping),l.layers.enableAll(),w.unshift(l,l.geometry,l.material,0,0,null))}function p(w,x){w.getRGB(fo,Bd(n)),i.buffers.color.setClear(fo.r,fo.g,fo.b,x,o)}return{getClearColor:function(){return a},setClearColor:function(w,x=1){a.set(w),c=x,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(w){c=w,p(a,c)},render:M,addToRenderList:m}}function rM(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=f(null);let r=s,o=!1;function a(y,b,k,z,Q){let ie=!1;const H=u(z,k,b);r!==H&&(r=H,l(r.object)),ie=d(y,z,k,Q),ie&&_(y,z,k,Q),Q!==null&&e.update(Q,n.ELEMENT_ARRAY_BUFFER),(ie||o)&&(o=!1,S(y,b,k,z),Q!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(Q).buffer))}function c(){return n.createVertexArray()}function l(y){return n.bindVertexArray(y)}function h(y){return n.deleteVertexArray(y)}function u(y,b,k){const z=k.wireframe===!0;let Q=i[y.id];Q===void 0&&(Q={},i[y.id]=Q);let ie=Q[b.id];ie===void 0&&(ie={},Q[b.id]=ie);let H=ie[z];return H===void 0&&(H=f(c()),ie[z]=H),H}function f(y){const b=[],k=[],z=[];for(let Q=0;Q<t;Q++)b[Q]=0,k[Q]=0,z[Q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:b,enabledAttributes:k,attributeDivisors:z,object:y,attributes:{},index:null}}function d(y,b,k,z){const Q=r.attributes,ie=b.attributes;let H=0;const Z=k.getAttributes();for(const B in Z)if(Z[B].location>=0){const me=Q[B];let ge=ie[B];if(ge===void 0&&(B==="instanceMatrix"&&y.instanceMatrix&&(ge=y.instanceMatrix),B==="instanceColor"&&y.instanceColor&&(ge=y.instanceColor)),me===void 0||me.attribute!==ge||ge&&me.data!==ge.data)return!0;H++}return r.attributesNum!==H||r.index!==z}function _(y,b,k,z){const Q={},ie=b.attributes;let H=0;const Z=k.getAttributes();for(const B in Z)if(Z[B].location>=0){let me=ie[B];me===void 0&&(B==="instanceMatrix"&&y.instanceMatrix&&(me=y.instanceMatrix),B==="instanceColor"&&y.instanceColor&&(me=y.instanceColor));const ge={};ge.attribute=me,me&&me.data&&(ge.data=me.data),Q[B]=ge,H++}r.attributes=Q,r.attributesNum=H,r.index=z}function M(){const y=r.newAttributes;for(let b=0,k=y.length;b<k;b++)y[b]=0}function m(y){p(y,0)}function p(y,b){const k=r.newAttributes,z=r.enabledAttributes,Q=r.attributeDivisors;k[y]=1,z[y]===0&&(n.enableVertexAttribArray(y),z[y]=1),Q[y]!==b&&(n.vertexAttribDivisor(y,b),Q[y]=b)}function w(){const y=r.newAttributes,b=r.enabledAttributes;for(let k=0,z=b.length;k<z;k++)b[k]!==y[k]&&(n.disableVertexAttribArray(k),b[k]=0)}function x(y,b,k,z,Q,ie,H){H===!0?n.vertexAttribIPointer(y,b,k,Q,ie):n.vertexAttribPointer(y,b,k,z,Q,ie)}function S(y,b,k,z){M();const Q=z.attributes,ie=k.getAttributes(),H=b.defaultAttributeValues;for(const Z in ie){const B=ie[Z];if(B.location>=0){let _e=Q[Z];if(_e===void 0&&(Z==="instanceMatrix"&&y.instanceMatrix&&(_e=y.instanceMatrix),Z==="instanceColor"&&y.instanceColor&&(_e=y.instanceColor)),_e!==void 0){const me=_e.normalized,ge=_e.itemSize,we=e.get(_e);if(we===void 0)continue;const Re=we.buffer,te=we.type,he=we.bytesPerElement,fe=te===n.INT||te===n.UNSIGNED_INT||_e.gpuType===Ll;if(_e.isInterleavedBufferAttribute){const D=_e.data,se=D.stride,j=_e.offset;if(D.isInstancedInterleavedBuffer){for(let ce=0;ce<B.locationSize;ce++)p(B.location+ce,D.meshPerAttribute);y.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=D.meshPerAttribute*D.count)}else for(let ce=0;ce<B.locationSize;ce++)m(B.location+ce);n.bindBuffer(n.ARRAY_BUFFER,Re);for(let ce=0;ce<B.locationSize;ce++)x(B.location+ce,ge/B.locationSize,te,me,se*he,(j+ge/B.locationSize*ce)*he,fe)}else{if(_e.isInstancedBufferAttribute){for(let D=0;D<B.locationSize;D++)p(B.location+D,_e.meshPerAttribute);y.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=_e.meshPerAttribute*_e.count)}else for(let D=0;D<B.locationSize;D++)m(B.location+D);n.bindBuffer(n.ARRAY_BUFFER,Re);for(let D=0;D<B.locationSize;D++)x(B.location+D,ge/B.locationSize,te,me,ge*he,ge/B.locationSize*D*he,fe)}}else if(H!==void 0){const me=H[Z];if(me!==void 0)switch(me.length){case 2:n.vertexAttrib2fv(B.location,me);break;case 3:n.vertexAttrib3fv(B.location,me);break;case 4:n.vertexAttrib4fv(B.location,me);break;default:n.vertexAttrib1fv(B.location,me)}}}}w()}function U(){F();for(const y in i){const b=i[y];for(const k in b){const z=b[k];for(const Q in z)h(z[Q].object),delete z[Q];delete b[k]}delete i[y]}}function C(y){if(i[y.id]===void 0)return;const b=i[y.id];for(const k in b){const z=b[k];for(const Q in z)h(z[Q].object),delete z[Q];delete b[k]}delete i[y.id]}function A(y){for(const b in i){const k=i[b];if(k[y.id]===void 0)continue;const z=k[y.id];for(const Q in z)h(z[Q].object),delete z[Q];delete k[y.id]}}function F(){ne(),o=!0,r!==s&&(r=s,l(r.object))}function ne(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:F,resetDefaultState:ne,dispose:U,releaseStatesOfGeometry:C,releaseStatesOfProgram:A,initAttributes:M,enableAttribute:m,disableUnusedAttributes:w}}function oM(n,e,t){let i;function s(l){i=l}function r(l,h){n.drawArrays(i,l,h),t.update(h,i,1)}function o(l,h,u){u!==0&&(n.drawArraysInstanced(i,l,h,u),t.update(h,i,u))}function a(l,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,h,0,u);let d=0;for(let _=0;_<u;_++)d+=h[_];t.update(d,i,1)}function c(l,h,u,f){if(u===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let _=0;_<l.length;_++)o(l[_],h[_],f[_]);else{d.multiDrawArraysInstancedWEBGL(i,l,0,h,0,f,0,u);let _=0;for(let M=0;M<u;M++)_+=h[M];for(let M=0;M<f.length;M++)t.update(_,i,f[M])}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function aM(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(A){return!(A!==xn&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){const F=A===Fr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==ui&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==oi&&!F)}function c(A){if(A==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const u=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(f===!0){const A=e.get("EXT_clip_control");A.clipControlEXT(A.LOWER_LEFT_EXT,A.ZERO_TO_ONE_EXT)}const d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),w=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),x=n.getParameter(n.MAX_VARYING_VECTORS),S=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),U=_>0,C=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:_,maxTextureSize:M,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:w,maxVaryings:x,maxFragmentUniforms:S,vertexTextures:U,maxSamples:C}}function cM(n){const e=this;let t=null,i=0,s=!1,r=!1;const o=new qi,a=new Ke,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const d=u.length!==0||f||i!==0||s;return s=f,i=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){t=h(u,f,0)},this.setState=function(u,f,d){const _=u.clippingPlanes,M=u.clipIntersection,m=u.clipShadows,p=n.get(u);if(!s||_===null||_.length===0||r&&!m)r?h(null):l();else{const w=r?0:i,x=w*4;let S=p.clippingState||null;c.value=S,S=h(_,f,x,d);for(let U=0;U!==x;++U)S[U]=t[U];p.clippingState=S,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=w}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(u,f,d,_){const M=u!==null?u.length:0;let m=null;if(M!==0){if(m=c.value,_!==!0||m===null){const p=d+M*4,w=f.matrixWorldInverse;a.getNormalMatrix(w),(m===null||m.length<p)&&(m=new Float32Array(p));for(let x=0,S=d;x!==M;++x,S+=4)o.copy(u[x]).applyMatrix4(w,a),o.normal.toArray(m,S),m[S+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,m}}function lM(n){let e=new WeakMap;function t(o,a){return a===bc?o.mapping=Gs:a===Tc&&(o.mapping=Hs),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===bc||a===Tc)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new Hd(c.height);return l.fromEquirectangularTexture(n,o),e.set(o,l),o.addEventListener("dispose",s),t(l.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}class Vd extends zd{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,o=i+e,a=s+t,c=s-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const As=4,wh=[.125,.215,.35,.446,.526,.582],ji=20,ka=new Vd,Eh=new Ve;let Va=null,Wa=0,Xa=0,qa=!1;const Yi=(1+Math.sqrt(5))/2,Ss=1/Yi,bh=[new X(-Yi,Ss,0),new X(Yi,Ss,0),new X(-Ss,0,Yi),new X(Ss,0,Yi),new X(0,Yi,-Ss),new X(0,Yi,Ss),new X(-1,1,-1),new X(1,1,-1),new X(-1,1,1),new X(1,1,1)];class Th{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){Va=this._renderer.getRenderTarget(),Wa=this._renderer.getActiveCubeFace(),Xa=this._renderer.getActiveMipmapLevel(),qa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ch(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Rh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Va,Wa,Xa),this._renderer.xr.enabled=qa,e.scissorTest=!1,po(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Gs||e.mapping===Hs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Va=this._renderer.getRenderTarget(),Wa=this._renderer.getActiveCubeFace(),Xa=this._renderer.getActiveMipmapLevel(),qa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Rn,minFilter:Rn,generateMipmaps:!1,type:Fr,format:xn,colorSpace:Ni,depthBuffer:!1},s=Ah(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ah(e,t,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=uM(r)),this._blurMaterial=hM(r,e,t)}return s}_compileMaterial(e){const t=new I(this._lodPlanes[0],e);this._renderer.compile(t,ka)}_sceneToCubeUV(e,t,i,s){const a=new gt(90,1,t,i),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(Eh),h.toneMapping=Pi,h.autoClear=!1;const d=new vt({name:"PMREM.Background",side:en,depthWrite:!1,depthTest:!1}),_=new I(new Ys,d);let M=!1;const m=e.background;m?m.isColor&&(d.color.copy(m),e.background=null,M=!0):(d.color.copy(Eh),M=!0);for(let p=0;p<6;p++){const w=p%3;w===0?(a.up.set(0,c[p],0),a.lookAt(l[p],0,0)):w===1?(a.up.set(0,0,c[p]),a.lookAt(0,l[p],0)):(a.up.set(0,c[p],0),a.lookAt(0,0,l[p]));const x=this._cubeSize;po(s,w*x,p>2?x:0,x,x),h.setRenderTarget(s),M&&h.render(_,a),h.render(e,a)}_.geometry.dispose(),_.material.dispose(),h.toneMapping=f,h.autoClear=u,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===Gs||e.mapping===Hs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ch()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Rh());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new I(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const c=this._cubeSize;po(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(o,ka)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=bh[(s-r-1)%bh.length];this._blur(e,r-1,r,o,a)}t.autoClear=i}_blur(e,t,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new I(this._lodPlanes[s],l),f=l.uniforms,d=this._sizeLods[i]-1,_=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*ji-1),M=r/_,m=isFinite(r)?1+Math.floor(h*M):ji;m>ji&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ji}`);const p=[];let w=0;for(let A=0;A<ji;++A){const F=A/M,ne=Math.exp(-F*F/2);p.push(ne),A===0?w+=ne:A<m&&(w+=2*ne)}for(let A=0;A<p.length;A++)p[A]=p[A]/w;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:x}=this;f.dTheta.value=_,f.mipInt.value=x-i;const S=this._sizeLods[s],U=3*S*(s>x-As?s-x+As:0),C=4*(this._cubeSize-S);po(t,U,C,3*S,2*S),c.setRenderTarget(t),c.render(u,ka)}}function uM(n){const e=[],t=[],i=[];let s=n;const r=n-As+1+wh.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let c=1/a;o>n-As?c=wh[o-n+As-1]:o===0&&(c=0),i.push(c);const l=1/(a-2),h=-l,u=1+l,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,_=6,M=3,m=2,p=1,w=new Float32Array(M*_*d),x=new Float32Array(m*_*d),S=new Float32Array(p*_*d);for(let C=0;C<d;C++){const A=C%3*2/3-1,F=C>2?0:-1,ne=[A,F,0,A+2/3,F,0,A+2/3,F+1,0,A,F,0,A+2/3,F+1,0,A,F+1,0];w.set(ne,M*_*C),x.set(f,m*_*C);const y=[C,C,C,C,C,C];S.set(y,p*_*C)}const U=new Mn;U.setAttribute("position",new Wn(w,M)),U.setAttribute("uv",new Wn(x,m)),U.setAttribute("faceIndex",new Wn(S,p)),e.push(U),s>As&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Ah(n,e,t){const i=new ns(n,e,t);return i.texture.mapping=Zo,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function po(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function hM(n,e,t){const i=new Float32Array(ji),s=new X(0,1,0);return new St({name:"SphericalGaussianBlur",defines:{n:ji,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:kl(),fragmentShader:`

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
		`,blending:Ci,depthTest:!1,depthWrite:!1})}function Rh(){return new St({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:kl(),fragmentShader:`

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
		`,blending:Ci,depthTest:!1,depthWrite:!1})}function Ch(){return new St({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:kl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ci,depthTest:!1,depthWrite:!1})}function kl(){return`

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
	`}function fM(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const c=a.mapping,l=c===bc||c===Tc,h=c===Gs||c===Hs;if(l||h){let u=e.get(a);const f=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new Th(n)),u=l?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{const d=a.image;return l&&d&&d.height>0||h&&d&&s(d)?(t===null&&(t=new Th(n)),u=l?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let c=0;const l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function dM(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&Ao("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function pM(n,e,t,i){const s={},r=new WeakMap;function o(u){const f=u.target;f.index!==null&&e.remove(f.index);for(const _ in f.attributes)e.remove(f.attributes[_]);for(const _ in f.morphAttributes){const M=f.morphAttributes[_];for(let m=0,p=M.length;m<p;m++)e.remove(M[m])}f.removeEventListener("dispose",o),delete s[f.id];const d=r.get(f);d&&(e.remove(d),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(u,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,t.memory.geometries++),f}function c(u){const f=u.attributes;for(const _ in f)e.update(f[_],n.ARRAY_BUFFER);const d=u.morphAttributes;for(const _ in d){const M=d[_];for(let m=0,p=M.length;m<p;m++)e.update(M[m],n.ARRAY_BUFFER)}}function l(u){const f=[],d=u.index,_=u.attributes.position;let M=0;if(d!==null){const w=d.array;M=d.version;for(let x=0,S=w.length;x<S;x+=3){const U=w[x+0],C=w[x+1],A=w[x+2];f.push(U,C,C,A,A,U)}}else if(_!==void 0){const w=_.array;M=_.version;for(let x=0,S=w.length/3-1;x<S;x+=3){const U=x+0,C=x+1,A=x+2;f.push(U,C,C,A,A,U)}}else return;const m=new(Ld(f)?Od:Fd)(f,1);m.version=M;const p=r.get(u);p&&e.remove(p),r.set(u,m)}function h(u){const f=r.get(u);if(f){const d=u.index;d!==null&&f.version<d.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function mM(n,e,t){let i;function s(f){i=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function c(f,d){n.drawElements(i,d,r,f*o),t.update(d,i,1)}function l(f,d,_){_!==0&&(n.drawElementsInstanced(i,d,r,f*o,_),t.update(d,i,_))}function h(f,d,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,r,f,0,_);let m=0;for(let p=0;p<_;p++)m+=d[p];t.update(m,i,1)}function u(f,d,_,M){if(_===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)l(f[p]/o,d[p],M[p]);else{m.multiDrawElementsInstancedWEBGL(i,d,0,r,f,0,M,0,_);let p=0;for(let w=0;w<_;w++)p+=d[w];for(let w=0;w<M.length;w++)t.update(p,i,M[w])}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function gM(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function _M(n,e,t){const i=new WeakMap,s=new lt;function r(o,a,c){const l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let f=i.get(a);if(f===void 0||f.count!==u){let y=function(){F.dispose(),i.delete(a),a.removeEventListener("dispose",y)};var d=y;f!==void 0&&f.texture.dispose();const _=a.morphAttributes.position!==void 0,M=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],w=a.morphAttributes.normal||[],x=a.morphAttributes.color||[];let S=0;_===!0&&(S=1),M===!0&&(S=2),m===!0&&(S=3);let U=a.attributes.position.count*S,C=1;U>e.maxTextureSize&&(C=Math.ceil(U/e.maxTextureSize),U=e.maxTextureSize);const A=new Float32Array(U*C*4*u),F=new Dd(A,U,C,u);F.type=oi,F.needsUpdate=!0;const ne=S*4;for(let b=0;b<u;b++){const k=p[b],z=w[b],Q=x[b],ie=U*C*4*b;for(let H=0;H<k.count;H++){const Z=H*ne;_===!0&&(s.fromBufferAttribute(k,H),A[ie+Z+0]=s.x,A[ie+Z+1]=s.y,A[ie+Z+2]=s.z,A[ie+Z+3]=0),M===!0&&(s.fromBufferAttribute(z,H),A[ie+Z+4]=s.x,A[ie+Z+5]=s.y,A[ie+Z+6]=s.z,A[ie+Z+7]=0),m===!0&&(s.fromBufferAttribute(Q,H),A[ie+Z+8]=s.x,A[ie+Z+9]=s.y,A[ie+Z+10]=s.z,A[ie+Z+11]=Q.itemSize===4?s.w:1)}}f={count:u,texture:F,size:new Pe(U,C)},i.set(a,f),a.addEventListener("dispose",y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let _=0;for(let m=0;m<l.length;m++)_+=l[m];const M=a.morphTargetsRelative?1:1-_;c.getUniforms().setValue(n,"morphTargetBaseInfluence",M),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:r}}function vM(n,e,t,i){let s=new WeakMap;function r(c){const l=i.render.frame,h=c.geometry,u=e.get(c,h);if(s.get(u)!==l&&(e.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const f=c.skeleton;s.get(f)!==l&&(f.update(),s.set(f,l))}return u}function o(){s=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:o}}class Wd extends Kt{constructor(e,t,i,s,r,o,a,c,l,h=Ds){if(h!==Ds&&h!==Vs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===Ds&&(i=ts),i===void 0&&h===Vs&&(i=ks),super(null,s,r,o,a,c,h,i,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:vn,this.minFilter=c!==void 0?c:vn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Xd=new Kt,Ph=new Wd(1,1),qd=new Dd,Yd=new rv,$d=new Gl,Lh=[],Ih=[],Dh=new Float32Array(16),Uh=new Float32Array(9),Nh=new Float32Array(4);function $s(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=Lh[s];if(r===void 0&&(r=new Float32Array(s),Lh[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function Tt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function At(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function ea(n,e){let t=Ih[e];t===void 0&&(t=new Int32Array(e),Ih[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function xM(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function yM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tt(t,e))return;n.uniform2fv(this.addr,e),At(t,e)}}function MM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Tt(t,e))return;n.uniform3fv(this.addr,e),At(t,e)}}function SM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tt(t,e))return;n.uniform4fv(this.addr,e),At(t,e)}}function wM(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Tt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),At(t,e)}else{if(Tt(t,i))return;Nh.set(i),n.uniformMatrix2fv(this.addr,!1,Nh),At(t,i)}}function EM(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Tt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),At(t,e)}else{if(Tt(t,i))return;Uh.set(i),n.uniformMatrix3fv(this.addr,!1,Uh),At(t,i)}}function bM(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Tt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),At(t,e)}else{if(Tt(t,i))return;Dh.set(i),n.uniformMatrix4fv(this.addr,!1,Dh),At(t,i)}}function TM(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function AM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tt(t,e))return;n.uniform2iv(this.addr,e),At(t,e)}}function RM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Tt(t,e))return;n.uniform3iv(this.addr,e),At(t,e)}}function CM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tt(t,e))return;n.uniform4iv(this.addr,e),At(t,e)}}function PM(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function LM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tt(t,e))return;n.uniform2uiv(this.addr,e),At(t,e)}}function IM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Tt(t,e))return;n.uniform3uiv(this.addr,e),At(t,e)}}function DM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tt(t,e))return;n.uniform4uiv(this.addr,e),At(t,e)}}function UM(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Ph.compareFunction=Pd,r=Ph):r=Xd,t.setTexture2D(e||r,s)}function NM(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||Yd,s)}function FM(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||$d,s)}function OM(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||qd,s)}function BM(n){switch(n){case 5126:return xM;case 35664:return yM;case 35665:return MM;case 35666:return SM;case 35674:return wM;case 35675:return EM;case 35676:return bM;case 5124:case 35670:return TM;case 35667:case 35671:return AM;case 35668:case 35672:return RM;case 35669:case 35673:return CM;case 5125:return PM;case 36294:return LM;case 36295:return IM;case 36296:return DM;case 35678:case 36198:case 36298:case 36306:case 35682:return UM;case 35679:case 36299:case 36307:return NM;case 35680:case 36300:case 36308:case 36293:return FM;case 36289:case 36303:case 36311:case 36292:return OM}}function zM(n,e){n.uniform1fv(this.addr,e)}function GM(n,e){const t=$s(e,this.size,2);n.uniform2fv(this.addr,t)}function HM(n,e){const t=$s(e,this.size,3);n.uniform3fv(this.addr,t)}function kM(n,e){const t=$s(e,this.size,4);n.uniform4fv(this.addr,t)}function VM(n,e){const t=$s(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function WM(n,e){const t=$s(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function XM(n,e){const t=$s(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function qM(n,e){n.uniform1iv(this.addr,e)}function YM(n,e){n.uniform2iv(this.addr,e)}function $M(n,e){n.uniform3iv(this.addr,e)}function jM(n,e){n.uniform4iv(this.addr,e)}function KM(n,e){n.uniform1uiv(this.addr,e)}function ZM(n,e){n.uniform2uiv(this.addr,e)}function JM(n,e){n.uniform3uiv(this.addr,e)}function QM(n,e){n.uniform4uiv(this.addr,e)}function eS(n,e,t){const i=this.cache,s=e.length,r=ea(t,s);Tt(i,r)||(n.uniform1iv(this.addr,r),At(i,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||Xd,r[o])}function tS(n,e,t){const i=this.cache,s=e.length,r=ea(t,s);Tt(i,r)||(n.uniform1iv(this.addr,r),At(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Yd,r[o])}function nS(n,e,t){const i=this.cache,s=e.length,r=ea(t,s);Tt(i,r)||(n.uniform1iv(this.addr,r),At(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||$d,r[o])}function iS(n,e,t){const i=this.cache,s=e.length,r=ea(t,s);Tt(i,r)||(n.uniform1iv(this.addr,r),At(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||qd,r[o])}function sS(n){switch(n){case 5126:return zM;case 35664:return GM;case 35665:return HM;case 35666:return kM;case 35674:return VM;case 35675:return WM;case 35676:return XM;case 5124:case 35670:return qM;case 35667:case 35671:return YM;case 35668:case 35672:return $M;case 35669:case 35673:return jM;case 5125:return KM;case 36294:return ZM;case 36295:return JM;case 36296:return QM;case 35678:case 36198:case 36298:case 36306:case 35682:return eS;case 35679:case 36299:case 36307:return tS;case 35680:case 36300:case 36308:case 36293:return nS;case 36289:case 36303:case 36311:case 36292:return iS}}class rS{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=BM(t.type)}}class oS{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=sS(t.type)}}class aS{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],i)}}}const Ya=/(\w+)(\])?(\[|\.)?/g;function Fh(n,e){n.seq.push(e),n.map[e.id]=e}function cS(n,e,t){const i=n.name,s=i.length;for(Ya.lastIndex=0;;){const r=Ya.exec(i),o=Ya.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){Fh(t,l===void 0?new rS(a,n,e):new oS(a,n,e));break}else{let u=t.map[a];u===void 0&&(u=new aS(a),Fh(t,u)),t=u}}}class Ro{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);cS(r,o,this)}}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],c=i[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&i.push(o)}return i}}function Oh(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const lS=37297;let uS=0;function hS(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function fS(n){const e=st.getPrimaries(st.workingColorSpace),t=st.getPrimaries(n);let i;switch(e===t?i="":e===Fo&&t===No?i="LinearDisplayP3ToLinearSRGB":e===No&&t===Fo&&(i="LinearSRGBToLinearDisplayP3"),n){case Ni:case Jo:return[i,"LinearTransferOETF"];case Tn:case Ol:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function Bh(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=n.getShaderInfoLog(e).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+hS(n.getShaderSource(e),o)}else return s}function dS(n,e){const t=fS(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function pS(n,e){let t;switch(e){case __:t="Linear";break;case v_:t="Reinhard";break;case x_:t="Cineon";break;case rs:t="ACESFilmic";break;case M_:t="AgX";break;case S_:t="Neutral";break;case y_:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const mo=new X;function mS(){st.getLuminanceCoefficients(mo);const n=mo.x.toFixed(4),e=mo.y.toFixed(4),t=mo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function gS(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(or).join(`
`)}function _S(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function vS(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function or(n){return n!==""}function zh(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Gh(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const xS=/^[ \t]*#include +<([\w\d./]+)>/gm;function el(n){return n.replace(xS,MS)}const yS=new Map;function MS(n,e){let t=je[e];if(t===void 0){const i=yS.get(e);if(i!==void 0)t=je[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return el(t)}const SS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Hh(n){return n.replace(SS,wS)}function wS(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function kh(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function ES(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===gd?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Kg?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===ii&&(e="SHADOWMAP_TYPE_VSM"),e}function bS(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Gs:case Hs:e="ENVMAP_TYPE_CUBE";break;case Zo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function TS(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Hs:e="ENVMAP_MODE_REFRACTION";break}return e}function AS(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case _d:e="ENVMAP_BLENDING_MULTIPLY";break;case m_:e="ENVMAP_BLENDING_MIX";break;case g_:e="ENVMAP_BLENDING_ADD";break}return e}function RS(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function CS(n,e,t,i){const s=n.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=ES(t),l=bS(t),h=TS(t),u=AS(t),f=RS(t),d=gS(t),_=_S(r),M=s.createProgram();let m,p,w=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(or).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(or).join(`
`),p.length>0&&(p+=`
`)):(m=[kh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(or).join(`
`),p=[kh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Pi?"#define TONE_MAPPING":"",t.toneMapping!==Pi?je.tonemapping_pars_fragment:"",t.toneMapping!==Pi?pS("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",je.colorspace_pars_fragment,dS("linearToOutputTexel",t.outputColorSpace),mS(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(or).join(`
`)),o=el(o),o=zh(o,t),o=Gh(o,t),a=el(a),a=zh(a,t),a=Gh(a,t),o=Hh(o),a=Hh(a),t.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===sh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===sh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const x=w+m+o,S=w+p+a,U=Oh(s,s.VERTEX_SHADER,x),C=Oh(s,s.FRAGMENT_SHADER,S);s.attachShader(M,U),s.attachShader(M,C),t.index0AttributeName!==void 0?s.bindAttribLocation(M,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(M,0,"position"),s.linkProgram(M);function A(b){if(n.debug.checkShaderErrors){const k=s.getProgramInfoLog(M).trim(),z=s.getShaderInfoLog(U).trim(),Q=s.getShaderInfoLog(C).trim();let ie=!0,H=!0;if(s.getProgramParameter(M,s.LINK_STATUS)===!1)if(ie=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,M,U,C);else{const Z=Bh(s,U,"vertex"),B=Bh(s,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(M,s.VALIDATE_STATUS)+`

Material Name: `+b.name+`
Material Type: `+b.type+`

Program Info Log: `+k+`
`+Z+`
`+B)}else k!==""?console.warn("THREE.WebGLProgram: Program Info Log:",k):(z===""||Q==="")&&(H=!1);H&&(b.diagnostics={runnable:ie,programLog:k,vertexShader:{log:z,prefix:m},fragmentShader:{log:Q,prefix:p}})}s.deleteShader(U),s.deleteShader(C),F=new Ro(s,M),ne=vS(s,M)}let F;this.getUniforms=function(){return F===void 0&&A(this),F};let ne;this.getAttributes=function(){return ne===void 0&&A(this),ne};let y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=s.getProgramParameter(M,lS)),y},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(M),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=uS++,this.cacheKey=e,this.usedTimes=1,this.program=M,this.vertexShader=U,this.fragmentShader=C,this}let PS=0;class LS{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new IS(e),t.set(e,i)),i}}class IS{constructor(e){this.id=PS++,this.code=e,this.usedTimes=0}}function DS(n,e,t,i,s,r,o){const a=new Ud,c=new LS,l=new Set,h=[],u=s.logarithmicDepthBuffer,f=s.reverseDepthBuffer,d=s.vertexTextures;let _=s.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(y){return l.add(y),y===0?"uv":`uv${y}`}function p(y,b,k,z,Q){const ie=z.fog,H=Q.geometry,Z=y.isMeshStandardMaterial?z.environment:null,B=(y.isMeshStandardMaterial?t:e).get(y.envMap||Z),_e=B&&B.mapping===Zo?B.image.height:null,me=M[y.type];y.precision!==null&&(_=s.getMaxPrecision(y.precision),_!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",_,"instead."));const ge=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,we=ge!==void 0?ge.length:0;let Re=0;H.morphAttributes.position!==void 0&&(Re=1),H.morphAttributes.normal!==void 0&&(Re=2),H.morphAttributes.color!==void 0&&(Re=3);let te,he,fe,D;if(me){const Qt=kn[me];te=Qt.vertexShader,he=Qt.fragmentShader}else te=y.vertexShader,he=y.fragmentShader,c.update(y),fe=c.getVertexShaderID(y),D=c.getFragmentShaderID(y);const se=n.getRenderTarget(),j=Q.isInstancedMesh===!0,ce=Q.isBatchedMesh===!0,ye=!!y.map,J=!!y.matcap,g=!!B,T=!!y.aoMap,L=!!y.lightMap,O=!!y.bumpMap,N=!!y.normalMap,K=!!y.displacementMap,ee=!!y.emissiveMap,E=!!y.metalnessMap,v=!!y.roughnessMap,P=y.anisotropy>0,W=y.clearcoat>0,V=y.dispersion>0,q=y.iridescence>0,de=y.sheen>0,ue=y.transmission>0,ve=P&&!!y.anisotropyMap,Ae=W&&!!y.clearcoatMap,pe=W&&!!y.clearcoatNormalMap,Se=W&&!!y.clearcoatRoughnessMap,De=q&&!!y.iridescenceMap,Ne=q&&!!y.iridescenceThicknessMap,xe=de&&!!y.sheenColorMap,Be=de&&!!y.sheenRoughnessMap,Ie=!!y.specularMap,Ge=!!y.specularColorMap,G=!!y.specularIntensityMap,Le=ue&&!!y.transmissionMap,ae=ue&&!!y.thicknessMap,le=!!y.gradientMap,be=!!y.alphaMap,Te=y.alphaTest>0,qe=!!y.alphaHash,et=!!y.extensions;let Jt=Pi;y.toneMapped&&(se===null||se.isXRRenderTarget===!0)&&(Jt=n.toneMapping);const Qe={shaderID:me,shaderType:y.type,shaderName:y.name,vertexShader:te,fragmentShader:he,defines:y.defines,customVertexShaderID:fe,customFragmentShaderID:D,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:_,batching:ce,batchingColor:ce&&Q._colorsTexture!==null,instancing:j,instancingColor:j&&Q.instanceColor!==null,instancingMorph:j&&Q.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:se===null?n.outputColorSpace:se.isXRRenderTarget===!0?se.texture.colorSpace:Ni,alphaToCoverage:!!y.alphaToCoverage,map:ye,matcap:J,envMap:g,envMapMode:g&&B.mapping,envMapCubeUVHeight:_e,aoMap:T,lightMap:L,bumpMap:O,normalMap:N,displacementMap:d&&K,emissiveMap:ee,normalMapObjectSpace:N&&y.normalMapType===T_,normalMapTangentSpace:N&&y.normalMapType===Cd,metalnessMap:E,roughnessMap:v,anisotropy:P,anisotropyMap:ve,clearcoat:W,clearcoatMap:Ae,clearcoatNormalMap:pe,clearcoatRoughnessMap:Se,dispersion:V,iridescence:q,iridescenceMap:De,iridescenceThicknessMap:Ne,sheen:de,sheenColorMap:xe,sheenRoughnessMap:Be,specularMap:Ie,specularColorMap:Ge,specularIntensityMap:G,transmission:ue,transmissionMap:Le,thicknessMap:ae,gradientMap:le,opaque:y.transparent===!1&&y.blending===Is&&y.alphaToCoverage===!1,alphaMap:be,alphaTest:Te,alphaHash:qe,combine:y.combine,mapUv:ye&&m(y.map.channel),aoMapUv:T&&m(y.aoMap.channel),lightMapUv:L&&m(y.lightMap.channel),bumpMapUv:O&&m(y.bumpMap.channel),normalMapUv:N&&m(y.normalMap.channel),displacementMapUv:K&&m(y.displacementMap.channel),emissiveMapUv:ee&&m(y.emissiveMap.channel),metalnessMapUv:E&&m(y.metalnessMap.channel),roughnessMapUv:v&&m(y.roughnessMap.channel),anisotropyMapUv:ve&&m(y.anisotropyMap.channel),clearcoatMapUv:Ae&&m(y.clearcoatMap.channel),clearcoatNormalMapUv:pe&&m(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Se&&m(y.clearcoatRoughnessMap.channel),iridescenceMapUv:De&&m(y.iridescenceMap.channel),iridescenceThicknessMapUv:Ne&&m(y.iridescenceThicknessMap.channel),sheenColorMapUv:xe&&m(y.sheenColorMap.channel),sheenRoughnessMapUv:Be&&m(y.sheenRoughnessMap.channel),specularMapUv:Ie&&m(y.specularMap.channel),specularColorMapUv:Ge&&m(y.specularColorMap.channel),specularIntensityMapUv:G&&m(y.specularIntensityMap.channel),transmissionMapUv:Le&&m(y.transmissionMap.channel),thicknessMapUv:ae&&m(y.thicknessMap.channel),alphaMapUv:be&&m(y.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(N||P),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:Q.isPoints===!0&&!!H.attributes.uv&&(ye||be),fog:!!ie,useFog:y.fog===!0,fogExp2:!!ie&&ie.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:f,skinning:Q.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:we,morphTextureStride:Re,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:n.shadowMap.enabled&&k.length>0,shadowMapType:n.shadowMap.type,toneMapping:Jt,decodeVideoTexture:ye&&y.map.isVideoTexture===!0&&st.getTransfer(y.map.colorSpace)===pt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===An,flipSided:y.side===en,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:et&&y.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(et&&y.extensions.multiDraw===!0||ce)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Qe.vertexUv1s=l.has(1),Qe.vertexUv2s=l.has(2),Qe.vertexUv3s=l.has(3),l.clear(),Qe}function w(y){const b=[];if(y.shaderID?b.push(y.shaderID):(b.push(y.customVertexShaderID),b.push(y.customFragmentShaderID)),y.defines!==void 0)for(const k in y.defines)b.push(k),b.push(y.defines[k]);return y.isRawShaderMaterial===!1&&(x(b,y),S(b,y),b.push(n.outputColorSpace)),b.push(y.customProgramCacheKey),b.join()}function x(y,b){y.push(b.precision),y.push(b.outputColorSpace),y.push(b.envMapMode),y.push(b.envMapCubeUVHeight),y.push(b.mapUv),y.push(b.alphaMapUv),y.push(b.lightMapUv),y.push(b.aoMapUv),y.push(b.bumpMapUv),y.push(b.normalMapUv),y.push(b.displacementMapUv),y.push(b.emissiveMapUv),y.push(b.metalnessMapUv),y.push(b.roughnessMapUv),y.push(b.anisotropyMapUv),y.push(b.clearcoatMapUv),y.push(b.clearcoatNormalMapUv),y.push(b.clearcoatRoughnessMapUv),y.push(b.iridescenceMapUv),y.push(b.iridescenceThicknessMapUv),y.push(b.sheenColorMapUv),y.push(b.sheenRoughnessMapUv),y.push(b.specularMapUv),y.push(b.specularColorMapUv),y.push(b.specularIntensityMapUv),y.push(b.transmissionMapUv),y.push(b.thicknessMapUv),y.push(b.combine),y.push(b.fogExp2),y.push(b.sizeAttenuation),y.push(b.morphTargetsCount),y.push(b.morphAttributeCount),y.push(b.numDirLights),y.push(b.numPointLights),y.push(b.numSpotLights),y.push(b.numSpotLightMaps),y.push(b.numHemiLights),y.push(b.numRectAreaLights),y.push(b.numDirLightShadows),y.push(b.numPointLightShadows),y.push(b.numSpotLightShadows),y.push(b.numSpotLightShadowsWithMaps),y.push(b.numLightProbes),y.push(b.shadowMapType),y.push(b.toneMapping),y.push(b.numClippingPlanes),y.push(b.numClipIntersection),y.push(b.depthPacking)}function S(y,b){a.disableAll(),b.supportsVertexTextures&&a.enable(0),b.instancing&&a.enable(1),b.instancingColor&&a.enable(2),b.instancingMorph&&a.enable(3),b.matcap&&a.enable(4),b.envMap&&a.enable(5),b.normalMapObjectSpace&&a.enable(6),b.normalMapTangentSpace&&a.enable(7),b.clearcoat&&a.enable(8),b.iridescence&&a.enable(9),b.alphaTest&&a.enable(10),b.vertexColors&&a.enable(11),b.vertexAlphas&&a.enable(12),b.vertexUv1s&&a.enable(13),b.vertexUv2s&&a.enable(14),b.vertexUv3s&&a.enable(15),b.vertexTangents&&a.enable(16),b.anisotropy&&a.enable(17),b.alphaHash&&a.enable(18),b.batching&&a.enable(19),b.dispersion&&a.enable(20),b.batchingColor&&a.enable(21),y.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reverseDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.alphaToCoverage&&a.enable(20),y.push(a.mask)}function U(y){const b=M[y.type];let k;if(b){const z=kn[b];k=vv.clone(z.uniforms)}else k=y.uniforms;return k}function C(y,b){let k;for(let z=0,Q=h.length;z<Q;z++){const ie=h[z];if(ie.cacheKey===b){k=ie,++k.usedTimes;break}}return k===void 0&&(k=new CS(n,b,y,r),h.push(k)),k}function A(y){if(--y.usedTimes===0){const b=h.indexOf(y);h[b]=h[h.length-1],h.pop(),y.destroy()}}function F(y){c.remove(y)}function ne(){c.dispose()}return{getParameters:p,getProgramCacheKey:w,getUniforms:U,acquireProgram:C,releaseProgram:A,releaseShaderCache:F,programs:h,dispose:ne}}function US(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,c){n.get(o)[a]=c}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function NS(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Vh(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Wh(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(u,f,d,_,M,m){let p=n[e];return p===void 0?(p={id:u.id,object:u,geometry:f,material:d,groupOrder:_,renderOrder:u.renderOrder,z:M,group:m},n[e]=p):(p.id=u.id,p.object=u,p.geometry=f,p.material=d,p.groupOrder=_,p.renderOrder=u.renderOrder,p.z=M,p.group=m),e++,p}function a(u,f,d,_,M,m){const p=o(u,f,d,_,M,m);d.transmission>0?i.push(p):d.transparent===!0?s.push(p):t.push(p)}function c(u,f,d,_,M,m){const p=o(u,f,d,_,M,m);d.transmission>0?i.unshift(p):d.transparent===!0?s.unshift(p):t.unshift(p)}function l(u,f){t.length>1&&t.sort(u||NS),i.length>1&&i.sort(f||Vh),s.length>1&&s.sort(f||Vh)}function h(){for(let u=e,f=n.length;u<f;u++){const d=n[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:a,unshift:c,finish:h,sort:l}}function FS(){let n=new WeakMap;function e(i,s){const r=n.get(i);let o;return r===void 0?(o=new Wh,n.set(i,[o])):s>=r.length?(o=new Wh,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function OS(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new X,color:new Ve};break;case"SpotLight":t={position:new X,direction:new X,color:new Ve,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new X,color:new Ve,distance:0,decay:0};break;case"HemisphereLight":t={direction:new X,skyColor:new Ve,groundColor:new Ve};break;case"RectAreaLight":t={color:new Ve,position:new X,halfWidth:new X,halfHeight:new X};break}return n[e.id]=t,t}}}function BS(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pe,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let zS=0;function GS(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function HS(n){const e=new OS,t=BS(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new X);const s=new X,r=new mt,o=new mt;function a(l){let h=0,u=0,f=0;for(let ne=0;ne<9;ne++)i.probe[ne].set(0,0,0);let d=0,_=0,M=0,m=0,p=0,w=0,x=0,S=0,U=0,C=0,A=0;l.sort(GS);for(let ne=0,y=l.length;ne<y;ne++){const b=l[ne],k=b.color,z=b.intensity,Q=b.distance,ie=b.shadow&&b.shadow.map?b.shadow.map.texture:null;if(b.isAmbientLight)h+=k.r*z,u+=k.g*z,f+=k.b*z;else if(b.isLightProbe){for(let H=0;H<9;H++)i.probe[H].addScaledVector(b.sh.coefficients[H],z);A++}else if(b.isDirectionalLight){const H=e.get(b);if(H.color.copy(b.color).multiplyScalar(b.intensity),b.castShadow){const Z=b.shadow,B=t.get(b);B.shadowIntensity=Z.intensity,B.shadowBias=Z.bias,B.shadowNormalBias=Z.normalBias,B.shadowRadius=Z.radius,B.shadowMapSize=Z.mapSize,i.directionalShadow[d]=B,i.directionalShadowMap[d]=ie,i.directionalShadowMatrix[d]=b.shadow.matrix,w++}i.directional[d]=H,d++}else if(b.isSpotLight){const H=e.get(b);H.position.setFromMatrixPosition(b.matrixWorld),H.color.copy(k).multiplyScalar(z),H.distance=Q,H.coneCos=Math.cos(b.angle),H.penumbraCos=Math.cos(b.angle*(1-b.penumbra)),H.decay=b.decay,i.spot[M]=H;const Z=b.shadow;if(b.map&&(i.spotLightMap[U]=b.map,U++,Z.updateMatrices(b),b.castShadow&&C++),i.spotLightMatrix[M]=Z.matrix,b.castShadow){const B=t.get(b);B.shadowIntensity=Z.intensity,B.shadowBias=Z.bias,B.shadowNormalBias=Z.normalBias,B.shadowRadius=Z.radius,B.shadowMapSize=Z.mapSize,i.spotShadow[M]=B,i.spotShadowMap[M]=ie,S++}M++}else if(b.isRectAreaLight){const H=e.get(b);H.color.copy(k).multiplyScalar(z),H.halfWidth.set(b.width*.5,0,0),H.halfHeight.set(0,b.height*.5,0),i.rectArea[m]=H,m++}else if(b.isPointLight){const H=e.get(b);if(H.color.copy(b.color).multiplyScalar(b.intensity),H.distance=b.distance,H.decay=b.decay,b.castShadow){const Z=b.shadow,B=t.get(b);B.shadowIntensity=Z.intensity,B.shadowBias=Z.bias,B.shadowNormalBias=Z.normalBias,B.shadowRadius=Z.radius,B.shadowMapSize=Z.mapSize,B.shadowCameraNear=Z.camera.near,B.shadowCameraFar=Z.camera.far,i.pointShadow[_]=B,i.pointShadowMap[_]=ie,i.pointShadowMatrix[_]=b.shadow.matrix,x++}i.point[_]=H,_++}else if(b.isHemisphereLight){const H=e.get(b);H.skyColor.copy(b.color).multiplyScalar(z),H.groundColor.copy(b.groundColor).multiplyScalar(z),i.hemi[p]=H,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ce.LTC_FLOAT_1,i.rectAreaLTC2=Ce.LTC_FLOAT_2):(i.rectAreaLTC1=Ce.LTC_HALF_1,i.rectAreaLTC2=Ce.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=f;const F=i.hash;(F.directionalLength!==d||F.pointLength!==_||F.spotLength!==M||F.rectAreaLength!==m||F.hemiLength!==p||F.numDirectionalShadows!==w||F.numPointShadows!==x||F.numSpotShadows!==S||F.numSpotMaps!==U||F.numLightProbes!==A)&&(i.directional.length=d,i.spot.length=M,i.rectArea.length=m,i.point.length=_,i.hemi.length=p,i.directionalShadow.length=w,i.directionalShadowMap.length=w,i.pointShadow.length=x,i.pointShadowMap.length=x,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=w,i.pointShadowMatrix.length=x,i.spotLightMatrix.length=S+U-C,i.spotLightMap.length=U,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=A,F.directionalLength=d,F.pointLength=_,F.spotLength=M,F.rectAreaLength=m,F.hemiLength=p,F.numDirectionalShadows=w,F.numPointShadows=x,F.numSpotShadows=S,F.numSpotMaps=U,F.numLightProbes=A,i.version=zS++)}function c(l,h){let u=0,f=0,d=0,_=0,M=0;const m=h.matrixWorldInverse;for(let p=0,w=l.length;p<w;p++){const x=l[p];if(x.isDirectionalLight){const S=i.directional[u];S.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(m),u++}else if(x.isSpotLight){const S=i.spot[d];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(m),d++}else if(x.isRectAreaLight){const S=i.rectArea[_];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(m),o.identity(),r.copy(x.matrixWorld),r.premultiply(m),o.extractRotation(r),S.halfWidth.set(x.width*.5,0,0),S.halfHeight.set(0,x.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),_++}else if(x.isPointLight){const S=i.point[f];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(m),f++}else if(x.isHemisphereLight){const S=i.hemi[M];S.direction.setFromMatrixPosition(x.matrixWorld),S.direction.transformDirection(m),M++}}}return{setup:a,setupView:c,state:i}}function Xh(n){const e=new HS(n),t=[],i=[];function s(h){l.camera=h,t.length=0,i.length=0}function r(h){t.push(h)}function o(h){i.push(h)}function a(){e.setup(t)}function c(h){e.setupView(t,h)}const l={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function kS(n){let e=new WeakMap;function t(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new Xh(n),e.set(s,[a])):r>=o.length?(a=new Xh(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}class VS extends zr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=E_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class WS extends zr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const XS=`void main() {
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
}`;function YS(n,e,t){let i=new Hl;const s=new Pe,r=new Pe,o=new lt,a=new VS({depthPacking:b_}),c=new WS,l={},h=t.maxTextureSize,u={[Ii]:en,[en]:Ii,[An]:An},f=new St({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Pe},radius:{value:4}},vertexShader:XS,fragmentShader:qS}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const _=new Mn;_.setAttribute("position",new Wn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new I(_,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=gd;let p=this.type;this.render=function(C,A,F){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;const ne=n.getRenderTarget(),y=n.getActiveCubeFace(),b=n.getActiveMipmapLevel(),k=n.state;k.setBlending(Ci),k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const z=p!==ii&&this.type===ii,Q=p===ii&&this.type!==ii;for(let ie=0,H=C.length;ie<H;ie++){const Z=C[ie],B=Z.shadow;if(B===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;s.copy(B.mapSize);const _e=B.getFrameExtents();if(s.multiply(_e),r.copy(B.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/_e.x),s.x=r.x*_e.x,B.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/_e.y),s.y=r.y*_e.y,B.mapSize.y=r.y)),B.map===null||z===!0||Q===!0){const ge=this.type!==ii?{minFilter:vn,magFilter:vn}:{};B.map!==null&&B.map.dispose(),B.map=new ns(s.x,s.y,ge),B.map.texture.name=Z.name+".shadowMap",B.camera.updateProjectionMatrix()}n.setRenderTarget(B.map),n.clear();const me=B.getViewportCount();for(let ge=0;ge<me;ge++){const we=B.getViewport(ge);o.set(r.x*we.x,r.y*we.y,r.x*we.z,r.y*we.w),k.viewport(o),B.updateMatrices(Z,ge),i=B.getFrustum(),S(A,F,B.camera,Z,this.type)}B.isPointLightShadow!==!0&&this.type===ii&&w(B,F),B.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(ne,y,b)};function w(C,A){const F=e.update(M);f.defines.VSM_SAMPLES!==C.blurSamples&&(f.defines.VSM_SAMPLES=C.blurSamples,d.defines.VSM_SAMPLES=C.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new ns(s.x,s.y)),f.uniforms.shadow_pass.value=C.map.texture,f.uniforms.resolution.value=C.mapSize,f.uniforms.radius.value=C.radius,n.setRenderTarget(C.mapPass),n.clear(),n.renderBufferDirect(A,null,F,f,M,null),d.uniforms.shadow_pass.value=C.mapPass.texture,d.uniforms.resolution.value=C.mapSize,d.uniforms.radius.value=C.radius,n.setRenderTarget(C.map),n.clear(),n.renderBufferDirect(A,null,F,d,M,null)}function x(C,A,F,ne){let y=null;const b=F.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(b!==void 0)y=b;else if(y=F.isPointLight===!0?c:a,n.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const k=y.uuid,z=A.uuid;let Q=l[k];Q===void 0&&(Q={},l[k]=Q);let ie=Q[z];ie===void 0&&(ie=y.clone(),Q[z]=ie,A.addEventListener("dispose",U)),y=ie}if(y.visible=A.visible,y.wireframe=A.wireframe,ne===ii?y.side=A.shadowSide!==null?A.shadowSide:A.side:y.side=A.shadowSide!==null?A.shadowSide:u[A.side],y.alphaMap=A.alphaMap,y.alphaTest=A.alphaTest,y.map=A.map,y.clipShadows=A.clipShadows,y.clippingPlanes=A.clippingPlanes,y.clipIntersection=A.clipIntersection,y.displacementMap=A.displacementMap,y.displacementScale=A.displacementScale,y.displacementBias=A.displacementBias,y.wireframeLinewidth=A.wireframeLinewidth,y.linewidth=A.linewidth,F.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const k=n.properties.get(y);k.light=F}return y}function S(C,A,F,ne,y){if(C.visible===!1)return;if(C.layers.test(A.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&y===ii)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,C.matrixWorld);const z=e.update(C),Q=C.material;if(Array.isArray(Q)){const ie=z.groups;for(let H=0,Z=ie.length;H<Z;H++){const B=ie[H],_e=Q[B.materialIndex];if(_e&&_e.visible){const me=x(C,_e,ne,y);C.onBeforeShadow(n,C,A,F,z,me,B),n.renderBufferDirect(F,null,z,me,C,B),C.onAfterShadow(n,C,A,F,z,me,B)}}}else if(Q.visible){const ie=x(C,Q,ne,y);C.onBeforeShadow(n,C,A,F,z,ie,null),n.renderBufferDirect(F,null,z,ie,C,null),C.onAfterShadow(n,C,A,F,z,ie,null)}}const k=C.children;for(let z=0,Q=k.length;z<Q;z++)S(k[z],A,F,ne,y)}function U(C){C.target.removeEventListener("dispose",U);for(const F in l){const ne=l[F],y=C.target.uuid;y in ne&&(ne[y].dispose(),delete ne[y])}}}const $S={[vc]:xc,[yc]:wc,[Mc]:Ec,[zs]:Sc,[xc]:vc,[wc]:yc,[Ec]:Mc,[Sc]:zs};function jS(n){function e(){let G=!1;const Le=new lt;let ae=null;const le=new lt(0,0,0,0);return{setMask:function(be){ae!==be&&!G&&(n.colorMask(be,be,be,be),ae=be)},setLocked:function(be){G=be},setClear:function(be,Te,qe,et,Jt){Jt===!0&&(be*=et,Te*=et,qe*=et),Le.set(be,Te,qe,et),le.equals(Le)===!1&&(n.clearColor(be,Te,qe,et),le.copy(Le))},reset:function(){G=!1,ae=null,le.set(-1,0,0,0)}}}function t(){let G=!1,Le=!1,ae=null,le=null,be=null;return{setReversed:function(Te){Le=Te},setTest:function(Te){Te?fe(n.DEPTH_TEST):D(n.DEPTH_TEST)},setMask:function(Te){ae!==Te&&!G&&(n.depthMask(Te),ae=Te)},setFunc:function(Te){if(Le&&(Te=$S[Te]),le!==Te){switch(Te){case vc:n.depthFunc(n.NEVER);break;case xc:n.depthFunc(n.ALWAYS);break;case yc:n.depthFunc(n.LESS);break;case zs:n.depthFunc(n.LEQUAL);break;case Mc:n.depthFunc(n.EQUAL);break;case Sc:n.depthFunc(n.GEQUAL);break;case wc:n.depthFunc(n.GREATER);break;case Ec:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}le=Te}},setLocked:function(Te){G=Te},setClear:function(Te){be!==Te&&(n.clearDepth(Te),be=Te)},reset:function(){G=!1,ae=null,le=null,be=null}}}function i(){let G=!1,Le=null,ae=null,le=null,be=null,Te=null,qe=null,et=null,Jt=null;return{setTest:function(Qe){G||(Qe?fe(n.STENCIL_TEST):D(n.STENCIL_TEST))},setMask:function(Qe){Le!==Qe&&!G&&(n.stencilMask(Qe),Le=Qe)},setFunc:function(Qe,Qt,$n){(ae!==Qe||le!==Qt||be!==$n)&&(n.stencilFunc(Qe,Qt,$n),ae=Qe,le=Qt,be=$n)},setOp:function(Qe,Qt,$n){(Te!==Qe||qe!==Qt||et!==$n)&&(n.stencilOp(Qe,Qt,$n),Te=Qe,qe=Qt,et=$n)},setLocked:function(Qe){G=Qe},setClear:function(Qe){Jt!==Qe&&(n.clearStencil(Qe),Jt=Qe)},reset:function(){G=!1,Le=null,ae=null,le=null,be=null,Te=null,qe=null,et=null,Jt=null}}}const s=new e,r=new t,o=new i,a=new WeakMap,c=new WeakMap;let l={},h={},u=new WeakMap,f=[],d=null,_=!1,M=null,m=null,p=null,w=null,x=null,S=null,U=null,C=new Ve(0,0,0),A=0,F=!1,ne=null,y=null,b=null,k=null,z=null;const Q=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ie=!1,H=0;const Z=n.getParameter(n.VERSION);Z.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(Z)[1]),ie=H>=1):Z.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),ie=H>=2);let B=null,_e={};const me=n.getParameter(n.SCISSOR_BOX),ge=n.getParameter(n.VIEWPORT),we=new lt().fromArray(me),Re=new lt().fromArray(ge);function te(G,Le,ae,le){const be=new Uint8Array(4),Te=n.createTexture();n.bindTexture(G,Te),n.texParameteri(G,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(G,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let qe=0;qe<ae;qe++)G===n.TEXTURE_3D||G===n.TEXTURE_2D_ARRAY?n.texImage3D(Le,0,n.RGBA,1,1,le,0,n.RGBA,n.UNSIGNED_BYTE,be):n.texImage2D(Le+qe,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,be);return Te}const he={};he[n.TEXTURE_2D]=te(n.TEXTURE_2D,n.TEXTURE_2D,1),he[n.TEXTURE_CUBE_MAP]=te(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),he[n.TEXTURE_2D_ARRAY]=te(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),he[n.TEXTURE_3D]=te(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),o.setClear(0),fe(n.DEPTH_TEST),r.setFunc(zs),L(!1),O(Ju),fe(n.CULL_FACE),g(Ci);function fe(G){l[G]!==!0&&(n.enable(G),l[G]=!0)}function D(G){l[G]!==!1&&(n.disable(G),l[G]=!1)}function se(G,Le){return h[G]!==Le?(n.bindFramebuffer(G,Le),h[G]=Le,G===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=Le),G===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=Le),!0):!1}function j(G,Le){let ae=f,le=!1;if(G){ae=u.get(Le),ae===void 0&&(ae=[],u.set(Le,ae));const be=G.textures;if(ae.length!==be.length||ae[0]!==n.COLOR_ATTACHMENT0){for(let Te=0,qe=be.length;Te<qe;Te++)ae[Te]=n.COLOR_ATTACHMENT0+Te;ae.length=be.length,le=!0}}else ae[0]!==n.BACK&&(ae[0]=n.BACK,le=!0);le&&n.drawBuffers(ae)}function ce(G){return d!==G?(n.useProgram(G),d=G,!0):!1}const ye={[$i]:n.FUNC_ADD,[Jg]:n.FUNC_SUBTRACT,[Qg]:n.FUNC_REVERSE_SUBTRACT};ye[e_]=n.MIN,ye[t_]=n.MAX;const J={[n_]:n.ZERO,[i_]:n.ONE,[s_]:n.SRC_COLOR,[gc]:n.SRC_ALPHA,[u_]:n.SRC_ALPHA_SATURATE,[c_]:n.DST_COLOR,[o_]:n.DST_ALPHA,[r_]:n.ONE_MINUS_SRC_COLOR,[_c]:n.ONE_MINUS_SRC_ALPHA,[l_]:n.ONE_MINUS_DST_COLOR,[a_]:n.ONE_MINUS_DST_ALPHA,[h_]:n.CONSTANT_COLOR,[f_]:n.ONE_MINUS_CONSTANT_COLOR,[d_]:n.CONSTANT_ALPHA,[p_]:n.ONE_MINUS_CONSTANT_ALPHA};function g(G,Le,ae,le,be,Te,qe,et,Jt,Qe){if(G===Ci){_===!0&&(D(n.BLEND),_=!1);return}if(_===!1&&(fe(n.BLEND),_=!0),G!==Zg){if(G!==M||Qe!==F){if((m!==$i||x!==$i)&&(n.blendEquation(n.FUNC_ADD),m=$i,x=$i),Qe)switch(G){case Is:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Qu:n.blendFunc(n.ONE,n.ONE);break;case eh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case th:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}else switch(G){case Is:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Qu:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case eh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case th:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}p=null,w=null,S=null,U=null,C.set(0,0,0),A=0,M=G,F=Qe}return}be=be||Le,Te=Te||ae,qe=qe||le,(Le!==m||be!==x)&&(n.blendEquationSeparate(ye[Le],ye[be]),m=Le,x=be),(ae!==p||le!==w||Te!==S||qe!==U)&&(n.blendFuncSeparate(J[ae],J[le],J[Te],J[qe]),p=ae,w=le,S=Te,U=qe),(et.equals(C)===!1||Jt!==A)&&(n.blendColor(et.r,et.g,et.b,Jt),C.copy(et),A=Jt),M=G,F=!1}function T(G,Le){G.side===An?D(n.CULL_FACE):fe(n.CULL_FACE);let ae=G.side===en;Le&&(ae=!ae),L(ae),G.blending===Is&&G.transparent===!1?g(Ci):g(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),r.setFunc(G.depthFunc),r.setTest(G.depthTest),r.setMask(G.depthWrite),s.setMask(G.colorWrite);const le=G.stencilWrite;o.setTest(le),le&&(o.setMask(G.stencilWriteMask),o.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),o.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),K(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?fe(n.SAMPLE_ALPHA_TO_COVERAGE):D(n.SAMPLE_ALPHA_TO_COVERAGE)}function L(G){ne!==G&&(G?n.frontFace(n.CW):n.frontFace(n.CCW),ne=G)}function O(G){G!==$g?(fe(n.CULL_FACE),G!==y&&(G===Ju?n.cullFace(n.BACK):G===jg?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):D(n.CULL_FACE),y=G}function N(G){G!==b&&(ie&&n.lineWidth(G),b=G)}function K(G,Le,ae){G?(fe(n.POLYGON_OFFSET_FILL),(k!==Le||z!==ae)&&(n.polygonOffset(Le,ae),k=Le,z=ae)):D(n.POLYGON_OFFSET_FILL)}function ee(G){G?fe(n.SCISSOR_TEST):D(n.SCISSOR_TEST)}function E(G){G===void 0&&(G=n.TEXTURE0+Q-1),B!==G&&(n.activeTexture(G),B=G)}function v(G,Le,ae){ae===void 0&&(B===null?ae=n.TEXTURE0+Q-1:ae=B);let le=_e[ae];le===void 0&&(le={type:void 0,texture:void 0},_e[ae]=le),(le.type!==G||le.texture!==Le)&&(B!==ae&&(n.activeTexture(ae),B=ae),n.bindTexture(G,Le||he[G]),le.type=G,le.texture=Le)}function P(){const G=_e[B];G!==void 0&&G.type!==void 0&&(n.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function W(){try{n.compressedTexImage2D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function V(){try{n.compressedTexImage3D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function q(){try{n.texSubImage2D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function de(){try{n.texSubImage3D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ue(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ve(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ae(){try{n.texStorage2D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function pe(){try{n.texStorage3D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Se(){try{n.texImage2D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function De(){try{n.texImage3D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ne(G){we.equals(G)===!1&&(n.scissor(G.x,G.y,G.z,G.w),we.copy(G))}function xe(G){Re.equals(G)===!1&&(n.viewport(G.x,G.y,G.z,G.w),Re.copy(G))}function Be(G,Le){let ae=c.get(Le);ae===void 0&&(ae=new WeakMap,c.set(Le,ae));let le=ae.get(G);le===void 0&&(le=n.getUniformBlockIndex(Le,G.name),ae.set(G,le))}function Ie(G,Le){const le=c.get(Le).get(G);a.get(Le)!==le&&(n.uniformBlockBinding(Le,le,G.__bindingPointIndex),a.set(Le,le))}function Ge(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),l={},B=null,_e={},h={},u=new WeakMap,f=[],d=null,_=!1,M=null,m=null,p=null,w=null,x=null,S=null,U=null,C=new Ve(0,0,0),A=0,F=!1,ne=null,y=null,b=null,k=null,z=null,we.set(0,0,n.canvas.width,n.canvas.height),Re.set(0,0,n.canvas.width,n.canvas.height),s.reset(),r.reset(),o.reset()}return{buffers:{color:s,depth:r,stencil:o},enable:fe,disable:D,bindFramebuffer:se,drawBuffers:j,useProgram:ce,setBlending:g,setMaterial:T,setFlipSided:L,setCullFace:O,setLineWidth:N,setPolygonOffset:K,setScissorTest:ee,activeTexture:E,bindTexture:v,unbindTexture:P,compressedTexImage2D:W,compressedTexImage3D:V,texImage2D:Se,texImage3D:De,updateUBOMapping:Be,uniformBlockBinding:Ie,texStorage2D:Ae,texStorage3D:pe,texSubImage2D:q,texSubImage3D:de,compressedTexSubImage2D:ue,compressedTexSubImage3D:ve,scissor:Ne,viewport:xe,reset:Ge}}function qh(n,e,t,i){const s=KS(i);switch(t){case Sd:return n*e;case Ed:return n*e;case bd:return n*e*2;case Td:return n*e/s.components*s.byteLength;case Ul:return n*e/s.components*s.byteLength;case Ad:return n*e*2/s.components*s.byteLength;case Nl:return n*e*2/s.components*s.byteLength;case wd:return n*e*3/s.components*s.byteLength;case xn:return n*e*4/s.components*s.byteLength;case Fl:return n*e*4/s.components*s.byteLength;case So:case wo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Eo:case bo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Cc:case Lc:return Math.max(n,16)*Math.max(e,8)/4;case Rc:case Pc:return Math.max(n,8)*Math.max(e,8)/2;case Ic:case Dc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Uc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Nc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Fc:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Oc:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Bc:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case zc:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Gc:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Hc:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case kc:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Vc:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Wc:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Xc:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case qc:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Yc:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case $c:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case To:case jc:case Kc:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Rd:case Zc:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Jc:case Qc:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function KS(n){switch(n){case ui:case xd:return{byteLength:1,components:1};case Ar:case yd:case Fr:return{byteLength:2,components:1};case Il:case Dl:return{byteLength:2,components:4};case ts:case Ll:case oi:return{byteLength:4,components:1};case Md:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function ZS(n,e,t,i,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Pe,h=new WeakMap;let u;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(E,v){return d?new OffscreenCanvas(E,v):Cr("canvas")}function M(E,v,P){let W=1;const V=ee(E);if((V.width>P||V.height>P)&&(W=P/Math.max(V.width,V.height)),W<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){const q=Math.floor(W*V.width),de=Math.floor(W*V.height);u===void 0&&(u=_(q,de));const ue=v?_(q,de):u;return ue.width=q,ue.height=de,ue.getContext("2d").drawImage(E,0,0,q,de),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+V.width+"x"+V.height+") to ("+q+"x"+de+")."),ue}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+V.width+"x"+V.height+")."),E;return E}function m(E){return E.generateMipmaps&&E.minFilter!==vn&&E.minFilter!==Rn}function p(E){n.generateMipmap(E)}function w(E,v,P,W,V=!1){if(E!==null){if(n[E]!==void 0)return n[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let q=v;if(v===n.RED&&(P===n.FLOAT&&(q=n.R32F),P===n.HALF_FLOAT&&(q=n.R16F),P===n.UNSIGNED_BYTE&&(q=n.R8)),v===n.RED_INTEGER&&(P===n.UNSIGNED_BYTE&&(q=n.R8UI),P===n.UNSIGNED_SHORT&&(q=n.R16UI),P===n.UNSIGNED_INT&&(q=n.R32UI),P===n.BYTE&&(q=n.R8I),P===n.SHORT&&(q=n.R16I),P===n.INT&&(q=n.R32I)),v===n.RG&&(P===n.FLOAT&&(q=n.RG32F),P===n.HALF_FLOAT&&(q=n.RG16F),P===n.UNSIGNED_BYTE&&(q=n.RG8)),v===n.RG_INTEGER&&(P===n.UNSIGNED_BYTE&&(q=n.RG8UI),P===n.UNSIGNED_SHORT&&(q=n.RG16UI),P===n.UNSIGNED_INT&&(q=n.RG32UI),P===n.BYTE&&(q=n.RG8I),P===n.SHORT&&(q=n.RG16I),P===n.INT&&(q=n.RG32I)),v===n.RGB_INTEGER&&(P===n.UNSIGNED_BYTE&&(q=n.RGB8UI),P===n.UNSIGNED_SHORT&&(q=n.RGB16UI),P===n.UNSIGNED_INT&&(q=n.RGB32UI),P===n.BYTE&&(q=n.RGB8I),P===n.SHORT&&(q=n.RGB16I),P===n.INT&&(q=n.RGB32I)),v===n.RGBA_INTEGER&&(P===n.UNSIGNED_BYTE&&(q=n.RGBA8UI),P===n.UNSIGNED_SHORT&&(q=n.RGBA16UI),P===n.UNSIGNED_INT&&(q=n.RGBA32UI),P===n.BYTE&&(q=n.RGBA8I),P===n.SHORT&&(q=n.RGBA16I),P===n.INT&&(q=n.RGBA32I)),v===n.RGB&&P===n.UNSIGNED_INT_5_9_9_9_REV&&(q=n.RGB9_E5),v===n.RGBA){const de=V?Uo:st.getTransfer(W);P===n.FLOAT&&(q=n.RGBA32F),P===n.HALF_FLOAT&&(q=n.RGBA16F),P===n.UNSIGNED_BYTE&&(q=de===pt?n.SRGB8_ALPHA8:n.RGBA8),P===n.UNSIGNED_SHORT_4_4_4_4&&(q=n.RGBA4),P===n.UNSIGNED_SHORT_5_5_5_1&&(q=n.RGB5_A1)}return(q===n.R16F||q===n.R32F||q===n.RG16F||q===n.RG32F||q===n.RGBA16F||q===n.RGBA32F)&&e.get("EXT_color_buffer_float"),q}function x(E,v){let P;return E?v===null||v===ts||v===ks?P=n.DEPTH24_STENCIL8:v===oi?P=n.DEPTH32F_STENCIL8:v===Ar&&(P=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===ts||v===ks?P=n.DEPTH_COMPONENT24:v===oi?P=n.DEPTH_COMPONENT32F:v===Ar&&(P=n.DEPTH_COMPONENT16),P}function S(E,v){return m(E)===!0||E.isFramebufferTexture&&E.minFilter!==vn&&E.minFilter!==Rn?Math.log2(Math.max(v.width,v.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?v.mipmaps.length:1}function U(E){const v=E.target;v.removeEventListener("dispose",U),A(v),v.isVideoTexture&&h.delete(v)}function C(E){const v=E.target;v.removeEventListener("dispose",C),ne(v)}function A(E){const v=i.get(E);if(v.__webglInit===void 0)return;const P=E.source,W=f.get(P);if(W){const V=W[v.__cacheKey];V.usedTimes--,V.usedTimes===0&&F(E),Object.keys(W).length===0&&f.delete(P)}i.remove(E)}function F(E){const v=i.get(E);n.deleteTexture(v.__webglTexture);const P=E.source,W=f.get(P);delete W[v.__cacheKey],o.memory.textures--}function ne(E){const v=i.get(E);if(E.depthTexture&&E.depthTexture.dispose(),E.isWebGLCubeRenderTarget)for(let W=0;W<6;W++){if(Array.isArray(v.__webglFramebuffer[W]))for(let V=0;V<v.__webglFramebuffer[W].length;V++)n.deleteFramebuffer(v.__webglFramebuffer[W][V]);else n.deleteFramebuffer(v.__webglFramebuffer[W]);v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer[W])}else{if(Array.isArray(v.__webglFramebuffer))for(let W=0;W<v.__webglFramebuffer.length;W++)n.deleteFramebuffer(v.__webglFramebuffer[W]);else n.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&n.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let W=0;W<v.__webglColorRenderbuffer.length;W++)v.__webglColorRenderbuffer[W]&&n.deleteRenderbuffer(v.__webglColorRenderbuffer[W]);v.__webglDepthRenderbuffer&&n.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const P=E.textures;for(let W=0,V=P.length;W<V;W++){const q=i.get(P[W]);q.__webglTexture&&(n.deleteTexture(q.__webglTexture),o.memory.textures--),i.remove(P[W])}i.remove(E)}let y=0;function b(){y=0}function k(){const E=y;return E>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+s.maxTextures),y+=1,E}function z(E){const v=[];return v.push(E.wrapS),v.push(E.wrapT),v.push(E.wrapR||0),v.push(E.magFilter),v.push(E.minFilter),v.push(E.anisotropy),v.push(E.internalFormat),v.push(E.format),v.push(E.type),v.push(E.generateMipmaps),v.push(E.premultiplyAlpha),v.push(E.flipY),v.push(E.unpackAlignment),v.push(E.colorSpace),v.join()}function Q(E,v){const P=i.get(E);if(E.isVideoTexture&&N(E),E.isRenderTargetTexture===!1&&E.version>0&&P.__version!==E.version){const W=E.image;if(W===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(W.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Re(P,E,v);return}}t.bindTexture(n.TEXTURE_2D,P.__webglTexture,n.TEXTURE0+v)}function ie(E,v){const P=i.get(E);if(E.version>0&&P.__version!==E.version){Re(P,E,v);return}t.bindTexture(n.TEXTURE_2D_ARRAY,P.__webglTexture,n.TEXTURE0+v)}function H(E,v){const P=i.get(E);if(E.version>0&&P.__version!==E.version){Re(P,E,v);return}t.bindTexture(n.TEXTURE_3D,P.__webglTexture,n.TEXTURE0+v)}function Z(E,v){const P=i.get(E);if(E.version>0&&P.__version!==E.version){te(P,E,v);return}t.bindTexture(n.TEXTURE_CUBE_MAP,P.__webglTexture,n.TEXTURE0+v)}const B={[es]:n.REPEAT,[Ki]:n.CLAMP_TO_EDGE,[Ac]:n.MIRRORED_REPEAT},_e={[vn]:n.NEAREST,[w_]:n.NEAREST_MIPMAP_NEAREST,[$r]:n.NEAREST_MIPMAP_LINEAR,[Rn]:n.LINEAR,[ya]:n.LINEAR_MIPMAP_NEAREST,[Ri]:n.LINEAR_MIPMAP_LINEAR},me={[A_]:n.NEVER,[D_]:n.ALWAYS,[R_]:n.LESS,[Pd]:n.LEQUAL,[C_]:n.EQUAL,[I_]:n.GEQUAL,[P_]:n.GREATER,[L_]:n.NOTEQUAL};function ge(E,v){if(v.type===oi&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===Rn||v.magFilter===ya||v.magFilter===$r||v.magFilter===Ri||v.minFilter===Rn||v.minFilter===ya||v.minFilter===$r||v.minFilter===Ri)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(E,n.TEXTURE_WRAP_S,B[v.wrapS]),n.texParameteri(E,n.TEXTURE_WRAP_T,B[v.wrapT]),(E===n.TEXTURE_3D||E===n.TEXTURE_2D_ARRAY)&&n.texParameteri(E,n.TEXTURE_WRAP_R,B[v.wrapR]),n.texParameteri(E,n.TEXTURE_MAG_FILTER,_e[v.magFilter]),n.texParameteri(E,n.TEXTURE_MIN_FILTER,_e[v.minFilter]),v.compareFunction&&(n.texParameteri(E,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(E,n.TEXTURE_COMPARE_FUNC,me[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===vn||v.minFilter!==$r&&v.minFilter!==Ri||v.type===oi&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||i.get(v).__currentAnisotropy){const P=e.get("EXT_texture_filter_anisotropic");n.texParameterf(E,P.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy}}}function we(E,v){let P=!1;E.__webglInit===void 0&&(E.__webglInit=!0,v.addEventListener("dispose",U));const W=v.source;let V=f.get(W);V===void 0&&(V={},f.set(W,V));const q=z(v);if(q!==E.__cacheKey){V[q]===void 0&&(V[q]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,P=!0),V[q].usedTimes++;const de=V[E.__cacheKey];de!==void 0&&(V[E.__cacheKey].usedTimes--,de.usedTimes===0&&F(v)),E.__cacheKey=q,E.__webglTexture=V[q].texture}return P}function Re(E,v,P){let W=n.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(W=n.TEXTURE_2D_ARRAY),v.isData3DTexture&&(W=n.TEXTURE_3D);const V=we(E,v),q=v.source;t.bindTexture(W,E.__webglTexture,n.TEXTURE0+P);const de=i.get(q);if(q.version!==de.__version||V===!0){t.activeTexture(n.TEXTURE0+P);const ue=st.getPrimaries(st.workingColorSpace),ve=v.colorSpace===Ai?null:st.getPrimaries(v.colorSpace),Ae=v.colorSpace===Ai||ue===ve?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ae);let pe=M(v.image,!1,s.maxTextureSize);pe=K(v,pe);const Se=r.convert(v.format,v.colorSpace),De=r.convert(v.type);let Ne=w(v.internalFormat,Se,De,v.colorSpace,v.isVideoTexture);ge(W,v);let xe;const Be=v.mipmaps,Ie=v.isVideoTexture!==!0,Ge=de.__version===void 0||V===!0,G=q.dataReady,Le=S(v,pe);if(v.isDepthTexture)Ne=x(v.format===Vs,v.type),Ge&&(Ie?t.texStorage2D(n.TEXTURE_2D,1,Ne,pe.width,pe.height):t.texImage2D(n.TEXTURE_2D,0,Ne,pe.width,pe.height,0,Se,De,null));else if(v.isDataTexture)if(Be.length>0){Ie&&Ge&&t.texStorage2D(n.TEXTURE_2D,Le,Ne,Be[0].width,Be[0].height);for(let ae=0,le=Be.length;ae<le;ae++)xe=Be[ae],Ie?G&&t.texSubImage2D(n.TEXTURE_2D,ae,0,0,xe.width,xe.height,Se,De,xe.data):t.texImage2D(n.TEXTURE_2D,ae,Ne,xe.width,xe.height,0,Se,De,xe.data);v.generateMipmaps=!1}else Ie?(Ge&&t.texStorage2D(n.TEXTURE_2D,Le,Ne,pe.width,pe.height),G&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,pe.width,pe.height,Se,De,pe.data)):t.texImage2D(n.TEXTURE_2D,0,Ne,pe.width,pe.height,0,Se,De,pe.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Ie&&Ge&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Le,Ne,Be[0].width,Be[0].height,pe.depth);for(let ae=0,le=Be.length;ae<le;ae++)if(xe=Be[ae],v.format!==xn)if(Se!==null)if(Ie){if(G)if(v.layerUpdates.size>0){const be=qh(xe.width,xe.height,v.format,v.type);for(const Te of v.layerUpdates){const qe=xe.data.subarray(Te*be/xe.data.BYTES_PER_ELEMENT,(Te+1)*be/xe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ae,0,0,Te,xe.width,xe.height,1,Se,qe,0,0)}v.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ae,0,0,0,xe.width,xe.height,pe.depth,Se,xe.data,0,0)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ae,Ne,xe.width,xe.height,pe.depth,0,xe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ie?G&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,ae,0,0,0,xe.width,xe.height,pe.depth,Se,De,xe.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ae,Ne,xe.width,xe.height,pe.depth,0,Se,De,xe.data)}else{Ie&&Ge&&t.texStorage2D(n.TEXTURE_2D,Le,Ne,Be[0].width,Be[0].height);for(let ae=0,le=Be.length;ae<le;ae++)xe=Be[ae],v.format!==xn?Se!==null?Ie?G&&t.compressedTexSubImage2D(n.TEXTURE_2D,ae,0,0,xe.width,xe.height,Se,xe.data):t.compressedTexImage2D(n.TEXTURE_2D,ae,Ne,xe.width,xe.height,0,xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ie?G&&t.texSubImage2D(n.TEXTURE_2D,ae,0,0,xe.width,xe.height,Se,De,xe.data):t.texImage2D(n.TEXTURE_2D,ae,Ne,xe.width,xe.height,0,Se,De,xe.data)}else if(v.isDataArrayTexture)if(Ie){if(Ge&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Le,Ne,pe.width,pe.height,pe.depth),G)if(v.layerUpdates.size>0){const ae=qh(pe.width,pe.height,v.format,v.type);for(const le of v.layerUpdates){const be=pe.data.subarray(le*ae/pe.data.BYTES_PER_ELEMENT,(le+1)*ae/pe.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,le,pe.width,pe.height,1,Se,De,be)}v.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,pe.width,pe.height,pe.depth,Se,De,pe.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ne,pe.width,pe.height,pe.depth,0,Se,De,pe.data);else if(v.isData3DTexture)Ie?(Ge&&t.texStorage3D(n.TEXTURE_3D,Le,Ne,pe.width,pe.height,pe.depth),G&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,pe.width,pe.height,pe.depth,Se,De,pe.data)):t.texImage3D(n.TEXTURE_3D,0,Ne,pe.width,pe.height,pe.depth,0,Se,De,pe.data);else if(v.isFramebufferTexture){if(Ge)if(Ie)t.texStorage2D(n.TEXTURE_2D,Le,Ne,pe.width,pe.height);else{let ae=pe.width,le=pe.height;for(let be=0;be<Le;be++)t.texImage2D(n.TEXTURE_2D,be,Ne,ae,le,0,Se,De,null),ae>>=1,le>>=1}}else if(Be.length>0){if(Ie&&Ge){const ae=ee(Be[0]);t.texStorage2D(n.TEXTURE_2D,Le,Ne,ae.width,ae.height)}for(let ae=0,le=Be.length;ae<le;ae++)xe=Be[ae],Ie?G&&t.texSubImage2D(n.TEXTURE_2D,ae,0,0,Se,De,xe):t.texImage2D(n.TEXTURE_2D,ae,Ne,Se,De,xe);v.generateMipmaps=!1}else if(Ie){if(Ge){const ae=ee(pe);t.texStorage2D(n.TEXTURE_2D,Le,Ne,ae.width,ae.height)}G&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Se,De,pe)}else t.texImage2D(n.TEXTURE_2D,0,Ne,Se,De,pe);m(v)&&p(W),de.__version=q.version,v.onUpdate&&v.onUpdate(v)}E.__version=v.version}function te(E,v,P){if(v.image.length!==6)return;const W=we(E,v),V=v.source;t.bindTexture(n.TEXTURE_CUBE_MAP,E.__webglTexture,n.TEXTURE0+P);const q=i.get(V);if(V.version!==q.__version||W===!0){t.activeTexture(n.TEXTURE0+P);const de=st.getPrimaries(st.workingColorSpace),ue=v.colorSpace===Ai?null:st.getPrimaries(v.colorSpace),ve=v.colorSpace===Ai||de===ue?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve);const Ae=v.isCompressedTexture||v.image[0].isCompressedTexture,pe=v.image[0]&&v.image[0].isDataTexture,Se=[];for(let le=0;le<6;le++)!Ae&&!pe?Se[le]=M(v.image[le],!0,s.maxCubemapSize):Se[le]=pe?v.image[le].image:v.image[le],Se[le]=K(v,Se[le]);const De=Se[0],Ne=r.convert(v.format,v.colorSpace),xe=r.convert(v.type),Be=w(v.internalFormat,Ne,xe,v.colorSpace),Ie=v.isVideoTexture!==!0,Ge=q.__version===void 0||W===!0,G=V.dataReady;let Le=S(v,De);ge(n.TEXTURE_CUBE_MAP,v);let ae;if(Ae){Ie&&Ge&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Le,Be,De.width,De.height);for(let le=0;le<6;le++){ae=Se[le].mipmaps;for(let be=0;be<ae.length;be++){const Te=ae[be];v.format!==xn?Ne!==null?Ie?G&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,be,0,0,Te.width,Te.height,Ne,Te.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,be,Be,Te.width,Te.height,0,Te.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ie?G&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,be,0,0,Te.width,Te.height,Ne,xe,Te.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,be,Be,Te.width,Te.height,0,Ne,xe,Te.data)}}}else{if(ae=v.mipmaps,Ie&&Ge){ae.length>0&&Le++;const le=ee(Se[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Le,Be,le.width,le.height)}for(let le=0;le<6;le++)if(pe){Ie?G&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,Se[le].width,Se[le].height,Ne,xe,Se[le].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,Be,Se[le].width,Se[le].height,0,Ne,xe,Se[le].data);for(let be=0;be<ae.length;be++){const qe=ae[be].image[le].image;Ie?G&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,be+1,0,0,qe.width,qe.height,Ne,xe,qe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,be+1,Be,qe.width,qe.height,0,Ne,xe,qe.data)}}else{Ie?G&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,Ne,xe,Se[le]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,Be,Ne,xe,Se[le]);for(let be=0;be<ae.length;be++){const Te=ae[be];Ie?G&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,be+1,0,0,Ne,xe,Te.image[le]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,be+1,Be,Ne,xe,Te.image[le])}}}m(v)&&p(n.TEXTURE_CUBE_MAP),q.__version=V.version,v.onUpdate&&v.onUpdate(v)}E.__version=v.version}function he(E,v,P,W,V,q){const de=r.convert(P.format,P.colorSpace),ue=r.convert(P.type),ve=w(P.internalFormat,de,ue,P.colorSpace);if(!i.get(v).__hasExternalTextures){const pe=Math.max(1,v.width>>q),Se=Math.max(1,v.height>>q);V===n.TEXTURE_3D||V===n.TEXTURE_2D_ARRAY?t.texImage3D(V,q,ve,pe,Se,v.depth,0,de,ue,null):t.texImage2D(V,q,ve,pe,Se,0,de,ue,null)}t.bindFramebuffer(n.FRAMEBUFFER,E),O(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,W,V,i.get(P).__webglTexture,0,L(v)):(V===n.TEXTURE_2D||V>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&V<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,W,V,i.get(P).__webglTexture,q),t.bindFramebuffer(n.FRAMEBUFFER,null)}function fe(E,v,P){if(n.bindRenderbuffer(n.RENDERBUFFER,E),v.depthBuffer){const W=v.depthTexture,V=W&&W.isDepthTexture?W.type:null,q=x(v.stencilBuffer,V),de=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ue=L(v);O(v)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ue,q,v.width,v.height):P?n.renderbufferStorageMultisample(n.RENDERBUFFER,ue,q,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,q,v.width,v.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,de,n.RENDERBUFFER,E)}else{const W=v.textures;for(let V=0;V<W.length;V++){const q=W[V],de=r.convert(q.format,q.colorSpace),ue=r.convert(q.type),ve=w(q.internalFormat,de,ue,q.colorSpace),Ae=L(v);P&&O(v)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ae,ve,v.width,v.height):O(v)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ae,ve,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,ve,v.width,v.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function D(E,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,E),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(v.depthTexture).__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),Q(v.depthTexture,0);const W=i.get(v.depthTexture).__webglTexture,V=L(v);if(v.depthTexture.format===Ds)O(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,W,0,V):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,W,0);else if(v.depthTexture.format===Vs)O(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,W,0,V):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,W,0);else throw new Error("Unknown depthTexture format")}function se(E){const v=i.get(E),P=E.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==E.depthTexture){const W=E.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),W){const V=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,W.removeEventListener("dispose",V)};W.addEventListener("dispose",V),v.__depthDisposeCallback=V}v.__boundDepthTexture=W}if(E.depthTexture&&!v.__autoAllocateDepthBuffer){if(P)throw new Error("target.depthTexture not supported in Cube render targets");D(v.__webglFramebuffer,E)}else if(P){v.__webglDepthbuffer=[];for(let W=0;W<6;W++)if(t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[W]),v.__webglDepthbuffer[W]===void 0)v.__webglDepthbuffer[W]=n.createRenderbuffer(),fe(v.__webglDepthbuffer[W],E,!1);else{const V=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,q=v.__webglDepthbuffer[W];n.bindRenderbuffer(n.RENDERBUFFER,q),n.framebufferRenderbuffer(n.FRAMEBUFFER,V,n.RENDERBUFFER,q)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=n.createRenderbuffer(),fe(v.__webglDepthbuffer,E,!1);else{const W=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,V=v.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,V),n.framebufferRenderbuffer(n.FRAMEBUFFER,W,n.RENDERBUFFER,V)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function j(E,v,P){const W=i.get(E);v!==void 0&&he(W.__webglFramebuffer,E,E.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),P!==void 0&&se(E)}function ce(E){const v=E.texture,P=i.get(E),W=i.get(v);E.addEventListener("dispose",C);const V=E.textures,q=E.isWebGLCubeRenderTarget===!0,de=V.length>1;if(de||(W.__webglTexture===void 0&&(W.__webglTexture=n.createTexture()),W.__version=v.version,o.memory.textures++),q){P.__webglFramebuffer=[];for(let ue=0;ue<6;ue++)if(v.mipmaps&&v.mipmaps.length>0){P.__webglFramebuffer[ue]=[];for(let ve=0;ve<v.mipmaps.length;ve++)P.__webglFramebuffer[ue][ve]=n.createFramebuffer()}else P.__webglFramebuffer[ue]=n.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){P.__webglFramebuffer=[];for(let ue=0;ue<v.mipmaps.length;ue++)P.__webglFramebuffer[ue]=n.createFramebuffer()}else P.__webglFramebuffer=n.createFramebuffer();if(de)for(let ue=0,ve=V.length;ue<ve;ue++){const Ae=i.get(V[ue]);Ae.__webglTexture===void 0&&(Ae.__webglTexture=n.createTexture(),o.memory.textures++)}if(E.samples>0&&O(E)===!1){P.__webglMultisampledFramebuffer=n.createFramebuffer(),P.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,P.__webglMultisampledFramebuffer);for(let ue=0;ue<V.length;ue++){const ve=V[ue];P.__webglColorRenderbuffer[ue]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,P.__webglColorRenderbuffer[ue]);const Ae=r.convert(ve.format,ve.colorSpace),pe=r.convert(ve.type),Se=w(ve.internalFormat,Ae,pe,ve.colorSpace,E.isXRRenderTarget===!0),De=L(E);n.renderbufferStorageMultisample(n.RENDERBUFFER,De,Se,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ue,n.RENDERBUFFER,P.__webglColorRenderbuffer[ue])}n.bindRenderbuffer(n.RENDERBUFFER,null),E.depthBuffer&&(P.__webglDepthRenderbuffer=n.createRenderbuffer(),fe(P.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(q){t.bindTexture(n.TEXTURE_CUBE_MAP,W.__webglTexture),ge(n.TEXTURE_CUBE_MAP,v);for(let ue=0;ue<6;ue++)if(v.mipmaps&&v.mipmaps.length>0)for(let ve=0;ve<v.mipmaps.length;ve++)he(P.__webglFramebuffer[ue][ve],E,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,ve);else he(P.__webglFramebuffer[ue],E,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0);m(v)&&p(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(de){for(let ue=0,ve=V.length;ue<ve;ue++){const Ae=V[ue],pe=i.get(Ae);t.bindTexture(n.TEXTURE_2D,pe.__webglTexture),ge(n.TEXTURE_2D,Ae),he(P.__webglFramebuffer,E,Ae,n.COLOR_ATTACHMENT0+ue,n.TEXTURE_2D,0),m(Ae)&&p(n.TEXTURE_2D)}t.unbindTexture()}else{let ue=n.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(ue=E.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ue,W.__webglTexture),ge(ue,v),v.mipmaps&&v.mipmaps.length>0)for(let ve=0;ve<v.mipmaps.length;ve++)he(P.__webglFramebuffer[ve],E,v,n.COLOR_ATTACHMENT0,ue,ve);else he(P.__webglFramebuffer,E,v,n.COLOR_ATTACHMENT0,ue,0);m(v)&&p(ue),t.unbindTexture()}E.depthBuffer&&se(E)}function ye(E){const v=E.textures;for(let P=0,W=v.length;P<W;P++){const V=v[P];if(m(V)){const q=E.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,de=i.get(V).__webglTexture;t.bindTexture(q,de),p(q),t.unbindTexture()}}}const J=[],g=[];function T(E){if(E.samples>0){if(O(E)===!1){const v=E.textures,P=E.width,W=E.height;let V=n.COLOR_BUFFER_BIT;const q=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,de=i.get(E),ue=v.length>1;if(ue)for(let ve=0;ve<v.length;ve++)t.bindFramebuffer(n.FRAMEBUFFER,de.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ve,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,de.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ve,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,de.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,de.__webglFramebuffer);for(let ve=0;ve<v.length;ve++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(V|=n.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(V|=n.STENCIL_BUFFER_BIT)),ue){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,de.__webglColorRenderbuffer[ve]);const Ae=i.get(v[ve]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Ae,0)}n.blitFramebuffer(0,0,P,W,0,0,P,W,V,n.NEAREST),c===!0&&(J.length=0,g.length=0,J.push(n.COLOR_ATTACHMENT0+ve),E.depthBuffer&&E.resolveDepthBuffer===!1&&(J.push(q),g.push(q),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,g)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,J))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ue)for(let ve=0;ve<v.length;ve++){t.bindFramebuffer(n.FRAMEBUFFER,de.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ve,n.RENDERBUFFER,de.__webglColorRenderbuffer[ve]);const Ae=i.get(v[ve]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,de.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ve,n.TEXTURE_2D,Ae,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,de.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&c){const v=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[v])}}}function L(E){return Math.min(s.maxSamples,E.samples)}function O(E){const v=i.get(E);return E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function N(E){const v=o.render.frame;h.get(E)!==v&&(h.set(E,v),E.update())}function K(E,v){const P=E.colorSpace,W=E.format,V=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||P!==Ni&&P!==Ai&&(st.getTransfer(P)===pt?(W!==xn||V!==ui)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",P)),v}function ee(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(l.width=E.naturalWidth||E.width,l.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(l.width=E.displayWidth,l.height=E.displayHeight):(l.width=E.width,l.height=E.height),l}this.allocateTextureUnit=k,this.resetTextureUnits=b,this.setTexture2D=Q,this.setTexture2DArray=ie,this.setTexture3D=H,this.setTextureCube=Z,this.rebindTextures=j,this.setupRenderTarget=ce,this.updateRenderTargetMipmap=ye,this.updateMultisampleRenderTarget=T,this.setupDepthRenderbuffer=se,this.setupFrameBufferTexture=he,this.useMultisampledRTT=O}function JS(n,e){function t(i,s=Ai){let r;const o=st.getTransfer(s);if(i===ui)return n.UNSIGNED_BYTE;if(i===Il)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Dl)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Md)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===xd)return n.BYTE;if(i===yd)return n.SHORT;if(i===Ar)return n.UNSIGNED_SHORT;if(i===Ll)return n.INT;if(i===ts)return n.UNSIGNED_INT;if(i===oi)return n.FLOAT;if(i===Fr)return n.HALF_FLOAT;if(i===Sd)return n.ALPHA;if(i===wd)return n.RGB;if(i===xn)return n.RGBA;if(i===Ed)return n.LUMINANCE;if(i===bd)return n.LUMINANCE_ALPHA;if(i===Ds)return n.DEPTH_COMPONENT;if(i===Vs)return n.DEPTH_STENCIL;if(i===Td)return n.RED;if(i===Ul)return n.RED_INTEGER;if(i===Ad)return n.RG;if(i===Nl)return n.RG_INTEGER;if(i===Fl)return n.RGBA_INTEGER;if(i===So||i===wo||i===Eo||i===bo)if(o===pt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===So)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===wo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Eo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===bo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===So)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===wo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Eo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===bo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Rc||i===Cc||i===Pc||i===Lc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Rc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Cc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Pc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Lc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Ic||i===Dc||i===Uc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Ic||i===Dc)return o===pt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Uc)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Nc||i===Fc||i===Oc||i===Bc||i===zc||i===Gc||i===Hc||i===kc||i===Vc||i===Wc||i===Xc||i===qc||i===Yc||i===$c)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Nc)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Fc)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Oc)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Bc)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===zc)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Gc)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Hc)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===kc)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Vc)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Wc)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Xc)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===qc)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Yc)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===$c)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===To||i===jc||i===Kc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===To)return o===pt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===jc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Kc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Rd||i===Zc||i===Jc||i===Qc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===To)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Zc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Jc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Qc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ks?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}class QS extends gt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Je extends Ht{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ew={type:"move"};class $a{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Je,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Je,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new X,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new X),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Je,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new X,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new X),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const M of e.hand.values()){const m=t.getJointPose(M,i),p=this._getHandJoint(l,M);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,_=.005;l.inputState.pinching&&f>d+_?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=d-_&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(ew)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Je;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const tw=`
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

}`;class iw{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const s=new Kt,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new St({vertexShader:tw,fragmentShader:nw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new I(new Qo(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class sw extends qs{constructor(e,t){super();const i=this;let s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,f=null,d=null,_=null;const M=new iw,m=t.getContextAttributes();let p=null,w=null;const x=[],S=[],U=new Pe;let C=null;const A=new gt;A.layers.enable(1),A.viewport=new lt;const F=new gt;F.layers.enable(2),F.viewport=new lt;const ne=[A,F],y=new QS;y.layers.enable(1),y.layers.enable(2);let b=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(te){let he=x[te];return he===void 0&&(he=new $a,x[te]=he),he.getTargetRaySpace()},this.getControllerGrip=function(te){let he=x[te];return he===void 0&&(he=new $a,x[te]=he),he.getGripSpace()},this.getHand=function(te){let he=x[te];return he===void 0&&(he=new $a,x[te]=he),he.getHandSpace()};function z(te){const he=S.indexOf(te.inputSource);if(he===-1)return;const fe=x[he];fe!==void 0&&(fe.update(te.inputSource,te.frame,l||o),fe.dispatchEvent({type:te.type,data:te.inputSource}))}function Q(){s.removeEventListener("select",z),s.removeEventListener("selectstart",z),s.removeEventListener("selectend",z),s.removeEventListener("squeeze",z),s.removeEventListener("squeezestart",z),s.removeEventListener("squeezeend",z),s.removeEventListener("end",Q),s.removeEventListener("inputsourceschange",ie);for(let te=0;te<x.length;te++){const he=S[te];he!==null&&(S[te]=null,x[te].disconnect(he))}b=null,k=null,M.reset(),e.setRenderTarget(p),d=null,f=null,u=null,s=null,w=null,Re.stop(),i.isPresenting=!1,e.setPixelRatio(C),e.setSize(U.width,U.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(te){r=te,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(te){a=te,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(te){l=te},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(te){if(s=te,s!==null){if(p=e.getRenderTarget(),s.addEventListener("select",z),s.addEventListener("selectstart",z),s.addEventListener("selectend",z),s.addEventListener("squeeze",z),s.addEventListener("squeezestart",z),s.addEventListener("squeezeend",z),s.addEventListener("end",Q),s.addEventListener("inputsourceschange",ie),m.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(U),s.renderState.layers===void 0){const he={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,t,he),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),w=new ns(d.framebufferWidth,d.framebufferHeight,{format:xn,type:ui,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let he=null,fe=null,D=null;m.depth&&(D=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,he=m.stencil?Vs:Ds,fe=m.stencil?ks:ts);const se={colorFormat:t.RGBA8,depthFormat:D,scaleFactor:r};u=new XRWebGLBinding(s,t),f=u.createProjectionLayer(se),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),w=new ns(f.textureWidth,f.textureHeight,{format:xn,type:ui,depthTexture:new Wd(f.textureWidth,f.textureHeight,fe,void 0,void 0,void 0,void 0,void 0,void 0,he),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),Re.setContext(s),Re.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function ie(te){for(let he=0;he<te.removed.length;he++){const fe=te.removed[he],D=S.indexOf(fe);D>=0&&(S[D]=null,x[D].disconnect(fe))}for(let he=0;he<te.added.length;he++){const fe=te.added[he];let D=S.indexOf(fe);if(D===-1){for(let j=0;j<x.length;j++)if(j>=S.length){S.push(fe),D=j;break}else if(S[j]===null){S[j]=fe,D=j;break}if(D===-1)break}const se=x[D];se&&se.connect(fe)}}const H=new X,Z=new X;function B(te,he,fe){H.setFromMatrixPosition(he.matrixWorld),Z.setFromMatrixPosition(fe.matrixWorld);const D=H.distanceTo(Z),se=he.projectionMatrix.elements,j=fe.projectionMatrix.elements,ce=se[14]/(se[10]-1),ye=se[14]/(se[10]+1),J=(se[9]+1)/se[5],g=(se[9]-1)/se[5],T=(se[8]-1)/se[0],L=(j[8]+1)/j[0],O=ce*T,N=ce*L,K=D/(-T+L),ee=K*-T;if(he.matrixWorld.decompose(te.position,te.quaternion,te.scale),te.translateX(ee),te.translateZ(K),te.matrixWorld.compose(te.position,te.quaternion,te.scale),te.matrixWorldInverse.copy(te.matrixWorld).invert(),se[10]===-1)te.projectionMatrix.copy(he.projectionMatrix),te.projectionMatrixInverse.copy(he.projectionMatrixInverse);else{const E=ce+K,v=ye+K,P=O-ee,W=N+(D-ee),V=J*ye/v*E,q=g*ye/v*E;te.projectionMatrix.makePerspective(P,W,V,q,E,v),te.projectionMatrixInverse.copy(te.projectionMatrix).invert()}}function _e(te,he){he===null?te.matrixWorld.copy(te.matrix):te.matrixWorld.multiplyMatrices(he.matrixWorld,te.matrix),te.matrixWorldInverse.copy(te.matrixWorld).invert()}this.updateCamera=function(te){if(s===null)return;let he=te.near,fe=te.far;M.texture!==null&&(M.depthNear>0&&(he=M.depthNear),M.depthFar>0&&(fe=M.depthFar)),y.near=F.near=A.near=he,y.far=F.far=A.far=fe,(b!==y.near||k!==y.far)&&(s.updateRenderState({depthNear:y.near,depthFar:y.far}),b=y.near,k=y.far);const D=te.parent,se=y.cameras;_e(y,D);for(let j=0;j<se.length;j++)_e(se[j],D);se.length===2?B(y,A,F):y.projectionMatrix.copy(A.projectionMatrix),me(te,y,D)};function me(te,he,fe){fe===null?te.matrix.copy(he.matrixWorld):(te.matrix.copy(fe.matrixWorld),te.matrix.invert(),te.matrix.multiply(he.matrixWorld)),te.matrix.decompose(te.position,te.quaternion,te.scale),te.updateMatrixWorld(!0),te.projectionMatrix.copy(he.projectionMatrix),te.projectionMatrixInverse.copy(he.projectionMatrixInverse),te.isPerspectiveCamera&&(te.fov=Rr*2*Math.atan(1/te.projectionMatrix.elements[5]),te.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(f===null&&d===null))return c},this.setFoveation=function(te){c=te,f!==null&&(f.fixedFoveation=te),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=te)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(y)};let ge=null;function we(te,he){if(h=he.getViewerPose(l||o),_=he,h!==null){const fe=h.views;d!==null&&(e.setRenderTargetFramebuffer(w,d.framebuffer),e.setRenderTarget(w));let D=!1;fe.length!==y.cameras.length&&(y.cameras.length=0,D=!0);for(let j=0;j<fe.length;j++){const ce=fe[j];let ye=null;if(d!==null)ye=d.getViewport(ce);else{const g=u.getViewSubImage(f,ce);ye=g.viewport,j===0&&(e.setRenderTargetTextures(w,g.colorTexture,f.ignoreDepthValues?void 0:g.depthStencilTexture),e.setRenderTarget(w))}let J=ne[j];J===void 0&&(J=new gt,J.layers.enable(j),J.viewport=new lt,ne[j]=J),J.matrix.fromArray(ce.transform.matrix),J.matrix.decompose(J.position,J.quaternion,J.scale),J.projectionMatrix.fromArray(ce.projectionMatrix),J.projectionMatrixInverse.copy(J.projectionMatrix).invert(),J.viewport.set(ye.x,ye.y,ye.width,ye.height),j===0&&(y.matrix.copy(J.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),D===!0&&y.cameras.push(J)}const se=s.enabledFeatures;if(se&&se.includes("depth-sensing")){const j=u.getDepthInformation(fe[0]);j&&j.isValid&&j.texture&&M.init(e,j,s.renderState)}}for(let fe=0;fe<x.length;fe++){const D=S[fe],se=x[fe];D!==null&&se!==void 0&&se.update(D,he,l||o)}ge&&ge(te,he),he.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:he}),_=null}const Re=new kd;Re.setAnimationLoop(we),this.setAnimationLoop=function(te){ge=te},this.dispose=function(){}}}const Wi=new qn,rw=new mt;function ow(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,Bd(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,w,x,S){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,S)):p.isMeshMatcapMaterial?(r(m,p),_(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),M(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,w,x):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===en&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===en&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const w=e.get(p),x=w.envMap,S=w.envMapRotation;x&&(m.envMap.value=x,Wi.copy(S),Wi.x*=-1,Wi.y*=-1,Wi.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Wi.y*=-1,Wi.z*=-1),m.envMapRotation.value.setFromMatrix4(rw.makeRotationFromEuler(Wi)),m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,w,x){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*w,m.scale.value=x*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,w){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===en&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=w.texture,m.transmissionSamplerSize.value.set(w.width,w.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,p){p.matcap&&(m.matcap.value=p.matcap)}function M(m,p){const w=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(w.matrixWorld),m.nearDistance.value=w.shadow.camera.near,m.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function aw(n,e,t,i){let s={},r={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(w,x){const S=x.program;i.uniformBlockBinding(w,S)}function l(w,x){let S=s[w.id];S===void 0&&(_(w),S=h(w),s[w.id]=S,w.addEventListener("dispose",m));const U=x.program;i.updateUBOMapping(w,U);const C=e.render.frame;r[w.id]!==C&&(f(w),r[w.id]=C)}function h(w){const x=u();w.__bindingPointIndex=x;const S=n.createBuffer(),U=w.__size,C=w.usage;return n.bindBuffer(n.UNIFORM_BUFFER,S),n.bufferData(n.UNIFORM_BUFFER,U,C),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,x,S),S}function u(){for(let w=0;w<a;w++)if(o.indexOf(w)===-1)return o.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(w){const x=s[w.id],S=w.uniforms,U=w.__cache;n.bindBuffer(n.UNIFORM_BUFFER,x);for(let C=0,A=S.length;C<A;C++){const F=Array.isArray(S[C])?S[C]:[S[C]];for(let ne=0,y=F.length;ne<y;ne++){const b=F[ne];if(d(b,C,ne,U)===!0){const k=b.__offset,z=Array.isArray(b.value)?b.value:[b.value];let Q=0;for(let ie=0;ie<z.length;ie++){const H=z[ie],Z=M(H);typeof H=="number"||typeof H=="boolean"?(b.__data[0]=H,n.bufferSubData(n.UNIFORM_BUFFER,k+Q,b.__data)):H.isMatrix3?(b.__data[0]=H.elements[0],b.__data[1]=H.elements[1],b.__data[2]=H.elements[2],b.__data[3]=0,b.__data[4]=H.elements[3],b.__data[5]=H.elements[4],b.__data[6]=H.elements[5],b.__data[7]=0,b.__data[8]=H.elements[6],b.__data[9]=H.elements[7],b.__data[10]=H.elements[8],b.__data[11]=0):(H.toArray(b.__data,Q),Q+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,k,b.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(w,x,S,U){const C=w.value,A=x+"_"+S;if(U[A]===void 0)return typeof C=="number"||typeof C=="boolean"?U[A]=C:U[A]=C.clone(),!0;{const F=U[A];if(typeof C=="number"||typeof C=="boolean"){if(F!==C)return U[A]=C,!0}else if(F.equals(C)===!1)return F.copy(C),!0}return!1}function _(w){const x=w.uniforms;let S=0;const U=16;for(let A=0,F=x.length;A<F;A++){const ne=Array.isArray(x[A])?x[A]:[x[A]];for(let y=0,b=ne.length;y<b;y++){const k=ne[y],z=Array.isArray(k.value)?k.value:[k.value];for(let Q=0,ie=z.length;Q<ie;Q++){const H=z[Q],Z=M(H),B=S%U,_e=B%Z.boundary,me=B+_e;S+=_e,me!==0&&U-me<Z.storage&&(S+=U-me),k.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=S,S+=Z.storage}}}const C=S%U;return C>0&&(S+=U-C),w.__size=S,w.__cache={},this}function M(w){const x={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(x.boundary=4,x.storage=4):w.isVector2?(x.boundary=8,x.storage=8):w.isVector3||w.isColor?(x.boundary=16,x.storage=12):w.isVector4?(x.boundary=16,x.storage=16):w.isMatrix3?(x.boundary=48,x.storage=48):w.isMatrix4?(x.boundary=64,x.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),x}function m(w){const x=w.target;x.removeEventListener("dispose",m);const S=o.indexOf(x.__bindingPointIndex);o.splice(S,1),n.deleteBuffer(s[x.id]),delete s[x.id],delete r[x.id]}function p(){for(const w in s)n.deleteBuffer(s[w]);o=[],s={},r={}}return{bind:c,update:l,dispose:p}}class Nn{constructor(e={}){const{canvas:t=K_(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=o;const d=new Uint32Array(4),_=new Int32Array(4);let M=null,m=null;const p=[],w=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Tn,this.toneMapping=Pi,this.toneMappingExposure=1;const x=this;let S=!1,U=0,C=0,A=null,F=-1,ne=null;const y=new lt,b=new lt;let k=null;const z=new Ve(0);let Q=0,ie=t.width,H=t.height,Z=1,B=null,_e=null;const me=new lt(0,0,ie,H),ge=new lt(0,0,ie,H);let we=!1;const Re=new Hl;let te=!1,he=!1;const fe=new mt,D=new mt,se=new X,j=new lt,ce={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ye=!1;function J(){return A===null?Z:1}let g=i;function T(R,Y){return t.getContext(R,Y)}try{const R={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Pl}`),t.addEventListener("webglcontextlost",le,!1),t.addEventListener("webglcontextrestored",be,!1),t.addEventListener("webglcontextcreationerror",Te,!1),g===null){const Y="webgl2";if(g=T(Y,R),g===null)throw T(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let L,O,N,K,ee,E,v,P,W,V,q,de,ue,ve,Ae,pe,Se,De,Ne,xe,Be,Ie,Ge,G;function Le(){L=new dM(g),L.init(),Ie=new JS(g,L),O=new aM(g,L,e,Ie),N=new jS(g),O.reverseDepthBuffer&&N.buffers.depth.setReversed(!0),K=new gM(g),ee=new US,E=new ZS(g,L,N,ee,O,Ie,K),v=new lM(x),P=new fM(x),W=new wv(g),Ge=new rM(g,W),V=new pM(g,W,K,Ge),q=new vM(g,V,W,K),Ne=new _M(g,O,E),pe=new cM(ee),de=new DS(x,v,P,L,O,Ge,pe),ue=new ow(x,ee),ve=new FS,Ae=new kS(L),De=new sM(x,v,P,N,q,f,c),Se=new YS(x,q,O),G=new aw(g,K,O,N),xe=new oM(g,L,K),Be=new mM(g,L,K),K.programs=de.programs,x.capabilities=O,x.extensions=L,x.properties=ee,x.renderLists=ve,x.shadowMap=Se,x.state=N,x.info=K}Le();const ae=new sw(x,g);this.xr=ae,this.getContext=function(){return g},this.getContextAttributes=function(){return g.getContextAttributes()},this.forceContextLoss=function(){const R=L.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=L.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(R){R!==void 0&&(Z=R,this.setSize(ie,H,!1))},this.getSize=function(R){return R.set(ie,H)},this.setSize=function(R,Y,re=!0){if(ae.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ie=R,H=Y,t.width=Math.floor(R*Z),t.height=Math.floor(Y*Z),re===!0&&(t.style.width=R+"px",t.style.height=Y+"px"),this.setViewport(0,0,R,Y)},this.getDrawingBufferSize=function(R){return R.set(ie*Z,H*Z).floor()},this.setDrawingBufferSize=function(R,Y,re){ie=R,H=Y,Z=re,t.width=Math.floor(R*re),t.height=Math.floor(Y*re),this.setViewport(0,0,R,Y)},this.getCurrentViewport=function(R){return R.copy(y)},this.getViewport=function(R){return R.copy(me)},this.setViewport=function(R,Y,re,oe){R.isVector4?me.set(R.x,R.y,R.z,R.w):me.set(R,Y,re,oe),N.viewport(y.copy(me).multiplyScalar(Z).round())},this.getScissor=function(R){return R.copy(ge)},this.setScissor=function(R,Y,re,oe){R.isVector4?ge.set(R.x,R.y,R.z,R.w):ge.set(R,Y,re,oe),N.scissor(b.copy(ge).multiplyScalar(Z).round())},this.getScissorTest=function(){return we},this.setScissorTest=function(R){N.setScissorTest(we=R)},this.setOpaqueSort=function(R){B=R},this.setTransparentSort=function(R){_e=R},this.getClearColor=function(R){return R.copy(De.getClearColor())},this.setClearColor=function(){De.setClearColor.apply(De,arguments)},this.getClearAlpha=function(){return De.getClearAlpha()},this.setClearAlpha=function(){De.setClearAlpha.apply(De,arguments)},this.clear=function(R=!0,Y=!0,re=!0){let oe=0;if(R){let $=!1;if(A!==null){const Ee=A.texture.format;$=Ee===Fl||Ee===Nl||Ee===Ul}if($){const Ee=A.texture.type,Ue=Ee===ui||Ee===ts||Ee===Ar||Ee===ks||Ee===Il||Ee===Dl,Fe=De.getClearColor(),Oe=De.getClearAlpha(),ke=Fe.r,We=Fe.g,ze=Fe.b;Ue?(d[0]=ke,d[1]=We,d[2]=ze,d[3]=Oe,g.clearBufferuiv(g.COLOR,0,d)):(_[0]=ke,_[1]=We,_[2]=ze,_[3]=Oe,g.clearBufferiv(g.COLOR,0,_))}else oe|=g.COLOR_BUFFER_BIT}Y&&(oe|=g.DEPTH_BUFFER_BIT,g.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),re&&(oe|=g.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),g.clear(oe)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",le,!1),t.removeEventListener("webglcontextrestored",be,!1),t.removeEventListener("webglcontextcreationerror",Te,!1),ve.dispose(),Ae.dispose(),ee.dispose(),v.dispose(),P.dispose(),q.dispose(),Ge.dispose(),G.dispose(),de.dispose(),ae.dispose(),ae.removeEventListener("sessionstart",$l),ae.removeEventListener("sessionend",jl),Fi.stop()};function le(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function be(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const R=K.autoReset,Y=Se.enabled,re=Se.autoUpdate,oe=Se.needsUpdate,$=Se.type;Le(),K.autoReset=R,Se.enabled=Y,Se.autoUpdate=re,Se.needsUpdate=oe,Se.type=$}function Te(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function qe(R){const Y=R.target;Y.removeEventListener("dispose",qe),et(Y)}function et(R){Jt(R),ee.remove(R)}function Jt(R){const Y=ee.get(R).programs;Y!==void 0&&(Y.forEach(function(re){de.releaseProgram(re)}),R.isShaderMaterial&&de.releaseShaderCache(R))}this.renderBufferDirect=function(R,Y,re,oe,$,Ee){Y===null&&(Y=ce);const Ue=$.isMesh&&$.matrixWorld.determinant()<0,Fe=dp(R,Y,re,oe,$);N.setMaterial(oe,Ue);let Oe=re.index,ke=1;if(oe.wireframe===!0){if(Oe=V.getWireframeAttribute(re),Oe===void 0)return;ke=2}const We=re.drawRange,ze=re.attributes.position;let ot=We.start*ke,dt=(We.start+We.count)*ke;Ee!==null&&(ot=Math.max(ot,Ee.start*ke),dt=Math.min(dt,(Ee.start+Ee.count)*ke)),Oe!==null?(ot=Math.max(ot,0),dt=Math.min(dt,Oe.count)):ze!=null&&(ot=Math.max(ot,0),dt=Math.min(dt,ze.count));const xt=dt-ot;if(xt<0||xt===1/0)return;Ge.setup($,oe,Fe,re,Oe);let rn,tt=xe;if(Oe!==null&&(rn=W.get(Oe),tt=Be,tt.setIndex(rn)),$.isMesh)oe.wireframe===!0?(N.setLineWidth(oe.wireframeLinewidth*J()),tt.setMode(g.LINES)):tt.setMode(g.TRIANGLES);else if($.isLine){let He=oe.linewidth;He===void 0&&(He=1),N.setLineWidth(He*J()),$.isLineSegments?tt.setMode(g.LINES):$.isLineLoop?tt.setMode(g.LINE_LOOP):tt.setMode(g.LINE_STRIP)}else $.isPoints?tt.setMode(g.POINTS):$.isSprite&&tt.setMode(g.TRIANGLES);if($.isBatchedMesh)if($._multiDrawInstances!==null)tt.renderMultiDrawInstances($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount,$._multiDrawInstances);else if(L.get("WEBGL_multi_draw"))tt.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else{const He=$._multiDrawStarts,Lt=$._multiDrawCounts,nt=$._multiDrawCount,Sn=Oe?W.get(Oe).bytesPerElement:1,as=ee.get(oe).currentProgram.getUniforms();for(let on=0;on<nt;on++)as.setValue(g,"_gl_DrawID",on),tt.render(He[on]/Sn,Lt[on])}else if($.isInstancedMesh)tt.renderInstances(ot,xt,$.count);else if(re.isInstancedBufferGeometry){const He=re._maxInstanceCount!==void 0?re._maxInstanceCount:1/0,Lt=Math.min(re.instanceCount,He);tt.renderInstances(ot,xt,Lt)}else tt.render(ot,xt)};function Qe(R,Y,re){R.transparent===!0&&R.side===An&&R.forceSinglePass===!1?(R.side=en,R.needsUpdate=!0,Hr(R,Y,re),R.side=Ii,R.needsUpdate=!0,Hr(R,Y,re),R.side=An):Hr(R,Y,re)}this.compile=function(R,Y,re=null){re===null&&(re=R),m=Ae.get(re),m.init(Y),w.push(m),re.traverseVisible(function($){$.isLight&&$.layers.test(Y.layers)&&(m.pushLight($),$.castShadow&&m.pushShadow($))}),R!==re&&R.traverseVisible(function($){$.isLight&&$.layers.test(Y.layers)&&(m.pushLight($),$.castShadow&&m.pushShadow($))}),m.setupLights();const oe=new Set;return R.traverse(function($){if(!($.isMesh||$.isPoints||$.isLine||$.isSprite))return;const Ee=$.material;if(Ee)if(Array.isArray(Ee))for(let Ue=0;Ue<Ee.length;Ue++){const Fe=Ee[Ue];Qe(Fe,re,$),oe.add(Fe)}else Qe(Ee,re,$),oe.add(Ee)}),w.pop(),m=null,oe},this.compileAsync=function(R,Y,re=null){const oe=this.compile(R,Y,re);return new Promise($=>{function Ee(){if(oe.forEach(function(Ue){ee.get(Ue).currentProgram.isReady()&&oe.delete(Ue)}),oe.size===0){$(R);return}setTimeout(Ee,10)}L.get("KHR_parallel_shader_compile")!==null?Ee():setTimeout(Ee,10)})};let Qt=null;function $n(R){Qt&&Qt(R)}function $l(){Fi.stop()}function jl(){Fi.start()}const Fi=new kd;Fi.setAnimationLoop($n),typeof self<"u"&&Fi.setContext(self),this.setAnimationLoop=function(R){Qt=R,ae.setAnimationLoop(R),R===null?Fi.stop():Fi.start()},ae.addEventListener("sessionstart",$l),ae.addEventListener("sessionend",jl),this.render=function(R,Y){if(Y!==void 0&&Y.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),ae.enabled===!0&&ae.isPresenting===!0&&(ae.cameraAutoUpdate===!0&&ae.updateCamera(Y),Y=ae.getCamera()),R.isScene===!0&&R.onBeforeRender(x,R,Y,A),m=Ae.get(R,w.length),m.init(Y),w.push(m),D.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),Re.setFromProjectionMatrix(D),he=this.localClippingEnabled,te=pe.init(this.clippingPlanes,he),M=ve.get(R,p.length),M.init(),p.push(M),ae.enabled===!0&&ae.isPresenting===!0){const Ee=x.xr.getDepthSensingMesh();Ee!==null&&na(Ee,Y,-1/0,x.sortObjects)}na(R,Y,0,x.sortObjects),M.finish(),x.sortObjects===!0&&M.sort(B,_e),ye=ae.enabled===!1||ae.isPresenting===!1||ae.hasDepthSensing()===!1,ye&&De.addToRenderList(M,R),this.info.render.frame++,te===!0&&pe.beginShadows();const re=m.state.shadowsArray;Se.render(re,R,Y),te===!0&&pe.endShadows(),this.info.autoReset===!0&&this.info.reset();const oe=M.opaque,$=M.transmissive;if(m.setupLights(),Y.isArrayCamera){const Ee=Y.cameras;if($.length>0)for(let Ue=0,Fe=Ee.length;Ue<Fe;Ue++){const Oe=Ee[Ue];Zl(oe,$,R,Oe)}ye&&De.render(R);for(let Ue=0,Fe=Ee.length;Ue<Fe;Ue++){const Oe=Ee[Ue];Kl(M,R,Oe,Oe.viewport)}}else $.length>0&&Zl(oe,$,R,Y),ye&&De.render(R),Kl(M,R,Y);A!==null&&(E.updateMultisampleRenderTarget(A),E.updateRenderTargetMipmap(A)),R.isScene===!0&&R.onAfterRender(x,R,Y),Ge.resetDefaultState(),F=-1,ne=null,w.pop(),w.length>0?(m=w[w.length-1],te===!0&&pe.setGlobalState(x.clippingPlanes,m.state.camera)):m=null,p.pop(),p.length>0?M=p[p.length-1]:M=null};function na(R,Y,re,oe){if(R.visible===!1)return;if(R.layers.test(Y.layers)){if(R.isGroup)re=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(Y);else if(R.isLight)m.pushLight(R),R.castShadow&&m.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||Re.intersectsSprite(R)){oe&&j.setFromMatrixPosition(R.matrixWorld).applyMatrix4(D);const Ue=q.update(R),Fe=R.material;Fe.visible&&M.push(R,Ue,Fe,re,j.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||Re.intersectsObject(R))){const Ue=q.update(R),Fe=R.material;if(oe&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),j.copy(R.boundingSphere.center)):(Ue.boundingSphere===null&&Ue.computeBoundingSphere(),j.copy(Ue.boundingSphere.center)),j.applyMatrix4(R.matrixWorld).applyMatrix4(D)),Array.isArray(Fe)){const Oe=Ue.groups;for(let ke=0,We=Oe.length;ke<We;ke++){const ze=Oe[ke],ot=Fe[ze.materialIndex];ot&&ot.visible&&M.push(R,Ue,ot,re,j.z,ze)}}else Fe.visible&&M.push(R,Ue,Fe,re,j.z,null)}}const Ee=R.children;for(let Ue=0,Fe=Ee.length;Ue<Fe;Ue++)na(Ee[Ue],Y,re,oe)}function Kl(R,Y,re,oe){const $=R.opaque,Ee=R.transmissive,Ue=R.transparent;m.setupLightsView(re),te===!0&&pe.setGlobalState(x.clippingPlanes,re),oe&&N.viewport(y.copy(oe)),$.length>0&&Gr($,Y,re),Ee.length>0&&Gr(Ee,Y,re),Ue.length>0&&Gr(Ue,Y,re),N.buffers.depth.setTest(!0),N.buffers.depth.setMask(!0),N.buffers.color.setMask(!0),N.setPolygonOffset(!1)}function Zl(R,Y,re,oe){if((re.isScene===!0?re.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[oe.id]===void 0&&(m.state.transmissionRenderTarget[oe.id]=new ns(1,1,{generateMipmaps:!0,type:L.has("EXT_color_buffer_half_float")||L.has("EXT_color_buffer_float")?Fr:ui,minFilter:Ri,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:st.workingColorSpace}));const Ee=m.state.transmissionRenderTarget[oe.id],Ue=oe.viewport||y;Ee.setSize(Ue.z,Ue.w);const Fe=x.getRenderTarget();x.setRenderTarget(Ee),x.getClearColor(z),Q=x.getClearAlpha(),Q<1&&x.setClearColor(16777215,.5),x.clear(),ye&&De.render(re);const Oe=x.toneMapping;x.toneMapping=Pi;const ke=oe.viewport;if(oe.viewport!==void 0&&(oe.viewport=void 0),m.setupLightsView(oe),te===!0&&pe.setGlobalState(x.clippingPlanes,oe),Gr(R,re,oe),E.updateMultisampleRenderTarget(Ee),E.updateRenderTargetMipmap(Ee),L.has("WEBGL_multisampled_render_to_texture")===!1){let We=!1;for(let ze=0,ot=Y.length;ze<ot;ze++){const dt=Y[ze],xt=dt.object,rn=dt.geometry,tt=dt.material,He=dt.group;if(tt.side===An&&xt.layers.test(oe.layers)){const Lt=tt.side;tt.side=en,tt.needsUpdate=!0,Jl(xt,re,oe,rn,tt,He),tt.side=Lt,tt.needsUpdate=!0,We=!0}}We===!0&&(E.updateMultisampleRenderTarget(Ee),E.updateRenderTargetMipmap(Ee))}x.setRenderTarget(Fe),x.setClearColor(z,Q),ke!==void 0&&(oe.viewport=ke),x.toneMapping=Oe}function Gr(R,Y,re){const oe=Y.isScene===!0?Y.overrideMaterial:null;for(let $=0,Ee=R.length;$<Ee;$++){const Ue=R[$],Fe=Ue.object,Oe=Ue.geometry,ke=oe===null?Ue.material:oe,We=Ue.group;Fe.layers.test(re.layers)&&Jl(Fe,Y,re,Oe,ke,We)}}function Jl(R,Y,re,oe,$,Ee){R.onBeforeRender(x,Y,re,oe,$,Ee),R.modelViewMatrix.multiplyMatrices(re.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),$.onBeforeRender(x,Y,re,oe,R,Ee),$.transparent===!0&&$.side===An&&$.forceSinglePass===!1?($.side=en,$.needsUpdate=!0,x.renderBufferDirect(re,Y,oe,$,R,Ee),$.side=Ii,$.needsUpdate=!0,x.renderBufferDirect(re,Y,oe,$,R,Ee),$.side=An):x.renderBufferDirect(re,Y,oe,$,R,Ee),R.onAfterRender(x,Y,re,oe,$,Ee)}function Hr(R,Y,re){Y.isScene!==!0&&(Y=ce);const oe=ee.get(R),$=m.state.lights,Ee=m.state.shadowsArray,Ue=$.state.version,Fe=de.getParameters(R,$.state,Ee,Y,re),Oe=de.getProgramCacheKey(Fe);let ke=oe.programs;oe.environment=R.isMeshStandardMaterial?Y.environment:null,oe.fog=Y.fog,oe.envMap=(R.isMeshStandardMaterial?P:v).get(R.envMap||oe.environment),oe.envMapRotation=oe.environment!==null&&R.envMap===null?Y.environmentRotation:R.envMapRotation,ke===void 0&&(R.addEventListener("dispose",qe),ke=new Map,oe.programs=ke);let We=ke.get(Oe);if(We!==void 0){if(oe.currentProgram===We&&oe.lightsStateVersion===Ue)return eu(R,Fe),We}else Fe.uniforms=de.getUniforms(R),R.onBeforeCompile(Fe,x),We=de.acquireProgram(Fe,Oe),ke.set(Oe,We),oe.uniforms=Fe.uniforms;const ze=oe.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(ze.clippingPlanes=pe.uniform),eu(R,Fe),oe.needsLights=mp(R),oe.lightsStateVersion=Ue,oe.needsLights&&(ze.ambientLightColor.value=$.state.ambient,ze.lightProbe.value=$.state.probe,ze.directionalLights.value=$.state.directional,ze.directionalLightShadows.value=$.state.directionalShadow,ze.spotLights.value=$.state.spot,ze.spotLightShadows.value=$.state.spotShadow,ze.rectAreaLights.value=$.state.rectArea,ze.ltc_1.value=$.state.rectAreaLTC1,ze.ltc_2.value=$.state.rectAreaLTC2,ze.pointLights.value=$.state.point,ze.pointLightShadows.value=$.state.pointShadow,ze.hemisphereLights.value=$.state.hemi,ze.directionalShadowMap.value=$.state.directionalShadowMap,ze.directionalShadowMatrix.value=$.state.directionalShadowMatrix,ze.spotShadowMap.value=$.state.spotShadowMap,ze.spotLightMatrix.value=$.state.spotLightMatrix,ze.spotLightMap.value=$.state.spotLightMap,ze.pointShadowMap.value=$.state.pointShadowMap,ze.pointShadowMatrix.value=$.state.pointShadowMatrix),oe.currentProgram=We,oe.uniformsList=null,We}function Ql(R){if(R.uniformsList===null){const Y=R.currentProgram.getUniforms();R.uniformsList=Ro.seqWithValue(Y.seq,R.uniforms)}return R.uniformsList}function eu(R,Y){const re=ee.get(R);re.outputColorSpace=Y.outputColorSpace,re.batching=Y.batching,re.batchingColor=Y.batchingColor,re.instancing=Y.instancing,re.instancingColor=Y.instancingColor,re.instancingMorph=Y.instancingMorph,re.skinning=Y.skinning,re.morphTargets=Y.morphTargets,re.morphNormals=Y.morphNormals,re.morphColors=Y.morphColors,re.morphTargetsCount=Y.morphTargetsCount,re.numClippingPlanes=Y.numClippingPlanes,re.numIntersection=Y.numClipIntersection,re.vertexAlphas=Y.vertexAlphas,re.vertexTangents=Y.vertexTangents,re.toneMapping=Y.toneMapping}function dp(R,Y,re,oe,$){Y.isScene!==!0&&(Y=ce),E.resetTextureUnits();const Ee=Y.fog,Ue=oe.isMeshStandardMaterial?Y.environment:null,Fe=A===null?x.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Ni,Oe=(oe.isMeshStandardMaterial?P:v).get(oe.envMap||Ue),ke=oe.vertexColors===!0&&!!re.attributes.color&&re.attributes.color.itemSize===4,We=!!re.attributes.tangent&&(!!oe.normalMap||oe.anisotropy>0),ze=!!re.morphAttributes.position,ot=!!re.morphAttributes.normal,dt=!!re.morphAttributes.color;let xt=Pi;oe.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(xt=x.toneMapping);const rn=re.morphAttributes.position||re.morphAttributes.normal||re.morphAttributes.color,tt=rn!==void 0?rn.length:0,He=ee.get(oe),Lt=m.state.lights;if(te===!0&&(he===!0||R!==ne)){const dn=R===ne&&oe.id===F;pe.setState(oe,R,dn)}let nt=!1;oe.version===He.__version?(He.needsLights&&He.lightsStateVersion!==Lt.state.version||He.outputColorSpace!==Fe||$.isBatchedMesh&&He.batching===!1||!$.isBatchedMesh&&He.batching===!0||$.isBatchedMesh&&He.batchingColor===!0&&$.colorTexture===null||$.isBatchedMesh&&He.batchingColor===!1&&$.colorTexture!==null||$.isInstancedMesh&&He.instancing===!1||!$.isInstancedMesh&&He.instancing===!0||$.isSkinnedMesh&&He.skinning===!1||!$.isSkinnedMesh&&He.skinning===!0||$.isInstancedMesh&&He.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&He.instancingColor===!1&&$.instanceColor!==null||$.isInstancedMesh&&He.instancingMorph===!0&&$.morphTexture===null||$.isInstancedMesh&&He.instancingMorph===!1&&$.morphTexture!==null||He.envMap!==Oe||oe.fog===!0&&He.fog!==Ee||He.numClippingPlanes!==void 0&&(He.numClippingPlanes!==pe.numPlanes||He.numIntersection!==pe.numIntersection)||He.vertexAlphas!==ke||He.vertexTangents!==We||He.morphTargets!==ze||He.morphNormals!==ot||He.morphColors!==dt||He.toneMapping!==xt||He.morphTargetsCount!==tt)&&(nt=!0):(nt=!0,He.__version=oe.version);let Sn=He.currentProgram;nt===!0&&(Sn=Hr(oe,Y,$));let as=!1,on=!1,ia=!1;const yt=Sn.getUniforms(),pi=He.uniforms;if(N.useProgram(Sn.program)&&(as=!0,on=!0,ia=!0),oe.id!==F&&(F=oe.id,on=!0),as||ne!==R){O.reverseDepthBuffer?(fe.copy(R.projectionMatrix),J_(fe),Q_(fe),yt.setValue(g,"projectionMatrix",fe)):yt.setValue(g,"projectionMatrix",R.projectionMatrix),yt.setValue(g,"viewMatrix",R.matrixWorldInverse);const dn=yt.map.cameraPosition;dn!==void 0&&dn.setValue(g,se.setFromMatrixPosition(R.matrixWorld)),O.logarithmicDepthBuffer&&yt.setValue(g,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(oe.isMeshPhongMaterial||oe.isMeshToonMaterial||oe.isMeshLambertMaterial||oe.isMeshBasicMaterial||oe.isMeshStandardMaterial||oe.isShaderMaterial)&&yt.setValue(g,"isOrthographic",R.isOrthographicCamera===!0),ne!==R&&(ne=R,on=!0,ia=!0)}if($.isSkinnedMesh){yt.setOptional(g,$,"bindMatrix"),yt.setOptional(g,$,"bindMatrixInverse");const dn=$.skeleton;dn&&(dn.boneTexture===null&&dn.computeBoneTexture(),yt.setValue(g,"boneTexture",dn.boneTexture,E))}$.isBatchedMesh&&(yt.setOptional(g,$,"batchingTexture"),yt.setValue(g,"batchingTexture",$._matricesTexture,E),yt.setOptional(g,$,"batchingIdTexture"),yt.setValue(g,"batchingIdTexture",$._indirectTexture,E),yt.setOptional(g,$,"batchingColorTexture"),$._colorsTexture!==null&&yt.setValue(g,"batchingColorTexture",$._colorsTexture,E));const sa=re.morphAttributes;if((sa.position!==void 0||sa.normal!==void 0||sa.color!==void 0)&&Ne.update($,re,Sn),(on||He.receiveShadow!==$.receiveShadow)&&(He.receiveShadow=$.receiveShadow,yt.setValue(g,"receiveShadow",$.receiveShadow)),oe.isMeshGouraudMaterial&&oe.envMap!==null&&(pi.envMap.value=Oe,pi.flipEnvMap.value=Oe.isCubeTexture&&Oe.isRenderTargetTexture===!1?-1:1),oe.isMeshStandardMaterial&&oe.envMap===null&&Y.environment!==null&&(pi.envMapIntensity.value=Y.environmentIntensity),on&&(yt.setValue(g,"toneMappingExposure",x.toneMappingExposure),He.needsLights&&pp(pi,ia),Ee&&oe.fog===!0&&ue.refreshFogUniforms(pi,Ee),ue.refreshMaterialUniforms(pi,oe,Z,H,m.state.transmissionRenderTarget[R.id]),Ro.upload(g,Ql(He),pi,E)),oe.isShaderMaterial&&oe.uniformsNeedUpdate===!0&&(Ro.upload(g,Ql(He),pi,E),oe.uniformsNeedUpdate=!1),oe.isSpriteMaterial&&yt.setValue(g,"center",$.center),yt.setValue(g,"modelViewMatrix",$.modelViewMatrix),yt.setValue(g,"normalMatrix",$.normalMatrix),yt.setValue(g,"modelMatrix",$.matrixWorld),oe.isShaderMaterial||oe.isRawShaderMaterial){const dn=oe.uniformsGroups;for(let ra=0,gp=dn.length;ra<gp;ra++){const tu=dn[ra];G.update(tu,Sn),G.bind(tu,Sn)}}return Sn}function pp(R,Y){R.ambientLightColor.needsUpdate=Y,R.lightProbe.needsUpdate=Y,R.directionalLights.needsUpdate=Y,R.directionalLightShadows.needsUpdate=Y,R.pointLights.needsUpdate=Y,R.pointLightShadows.needsUpdate=Y,R.spotLights.needsUpdate=Y,R.spotLightShadows.needsUpdate=Y,R.rectAreaLights.needsUpdate=Y,R.hemisphereLights.needsUpdate=Y}function mp(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return U},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(R,Y,re){ee.get(R.texture).__webglTexture=Y,ee.get(R.depthTexture).__webglTexture=re;const oe=ee.get(R);oe.__hasExternalTextures=!0,oe.__autoAllocateDepthBuffer=re===void 0,oe.__autoAllocateDepthBuffer||L.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),oe.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(R,Y){const re=ee.get(R);re.__webglFramebuffer=Y,re.__useDefaultFramebuffer=Y===void 0},this.setRenderTarget=function(R,Y=0,re=0){A=R,U=Y,C=re;let oe=!0,$=null,Ee=!1,Ue=!1;if(R){const Oe=ee.get(R);if(Oe.__useDefaultFramebuffer!==void 0)N.bindFramebuffer(g.FRAMEBUFFER,null),oe=!1;else if(Oe.__webglFramebuffer===void 0)E.setupRenderTarget(R);else if(Oe.__hasExternalTextures)E.rebindTextures(R,ee.get(R.texture).__webglTexture,ee.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const ze=R.depthTexture;if(Oe.__boundDepthTexture!==ze){if(ze!==null&&ee.has(ze)&&(R.width!==ze.image.width||R.height!==ze.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");E.setupDepthRenderbuffer(R)}}const ke=R.texture;(ke.isData3DTexture||ke.isDataArrayTexture||ke.isCompressedArrayTexture)&&(Ue=!0);const We=ee.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(We[Y])?$=We[Y][re]:$=We[Y],Ee=!0):R.samples>0&&E.useMultisampledRTT(R)===!1?$=ee.get(R).__webglMultisampledFramebuffer:Array.isArray(We)?$=We[re]:$=We,y.copy(R.viewport),b.copy(R.scissor),k=R.scissorTest}else y.copy(me).multiplyScalar(Z).floor(),b.copy(ge).multiplyScalar(Z).floor(),k=we;if(N.bindFramebuffer(g.FRAMEBUFFER,$)&&oe&&N.drawBuffers(R,$),N.viewport(y),N.scissor(b),N.setScissorTest(k),Ee){const Oe=ee.get(R.texture);g.framebufferTexture2D(g.FRAMEBUFFER,g.COLOR_ATTACHMENT0,g.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Oe.__webglTexture,re)}else if(Ue){const Oe=ee.get(R.texture),ke=Y||0;g.framebufferTextureLayer(g.FRAMEBUFFER,g.COLOR_ATTACHMENT0,Oe.__webglTexture,re||0,ke)}F=-1},this.readRenderTargetPixels=function(R,Y,re,oe,$,Ee,Ue){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Fe=ee.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ue!==void 0&&(Fe=Fe[Ue]),Fe){N.bindFramebuffer(g.FRAMEBUFFER,Fe);try{const Oe=R.texture,ke=Oe.format,We=Oe.type;if(!O.textureFormatReadable(ke)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!O.textureTypeReadable(We)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=R.width-oe&&re>=0&&re<=R.height-$&&g.readPixels(Y,re,oe,$,Ie.convert(ke),Ie.convert(We),Ee)}finally{const Oe=A!==null?ee.get(A).__webglFramebuffer:null;N.bindFramebuffer(g.FRAMEBUFFER,Oe)}}},this.readRenderTargetPixelsAsync=async function(R,Y,re,oe,$,Ee,Ue){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Fe=ee.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ue!==void 0&&(Fe=Fe[Ue]),Fe){const Oe=R.texture,ke=Oe.format,We=Oe.type;if(!O.textureFormatReadable(ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!O.textureTypeReadable(We))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(Y>=0&&Y<=R.width-oe&&re>=0&&re<=R.height-$){N.bindFramebuffer(g.FRAMEBUFFER,Fe);const ze=g.createBuffer();g.bindBuffer(g.PIXEL_PACK_BUFFER,ze),g.bufferData(g.PIXEL_PACK_BUFFER,Ee.byteLength,g.STREAM_READ),g.readPixels(Y,re,oe,$,Ie.convert(ke),Ie.convert(We),0);const ot=A!==null?ee.get(A).__webglFramebuffer:null;N.bindFramebuffer(g.FRAMEBUFFER,ot);const dt=g.fenceSync(g.SYNC_GPU_COMMANDS_COMPLETE,0);return g.flush(),await Z_(g,dt,4),g.bindBuffer(g.PIXEL_PACK_BUFFER,ze),g.getBufferSubData(g.PIXEL_PACK_BUFFER,0,Ee),g.deleteBuffer(ze),g.deleteSync(dt),Ee}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(R,Y=null,re=0){R.isTexture!==!0&&(Ao("WebGLRenderer: copyFramebufferToTexture function signature has changed."),Y=arguments[0]||null,R=arguments[1]);const oe=Math.pow(2,-re),$=Math.floor(R.image.width*oe),Ee=Math.floor(R.image.height*oe),Ue=Y!==null?Y.x:0,Fe=Y!==null?Y.y:0;E.setTexture2D(R,0),g.copyTexSubImage2D(g.TEXTURE_2D,re,0,0,Ue,Fe,$,Ee),N.unbindTexture()},this.copyTextureToTexture=function(R,Y,re=null,oe=null,$=0){R.isTexture!==!0&&(Ao("WebGLRenderer: copyTextureToTexture function signature has changed."),oe=arguments[0]||null,R=arguments[1],Y=arguments[2],$=arguments[3]||0,re=null);let Ee,Ue,Fe,Oe,ke,We;re!==null?(Ee=re.max.x-re.min.x,Ue=re.max.y-re.min.y,Fe=re.min.x,Oe=re.min.y):(Ee=R.image.width,Ue=R.image.height,Fe=0,Oe=0),oe!==null?(ke=oe.x,We=oe.y):(ke=0,We=0);const ze=Ie.convert(Y.format),ot=Ie.convert(Y.type);E.setTexture2D(Y,0),g.pixelStorei(g.UNPACK_FLIP_Y_WEBGL,Y.flipY),g.pixelStorei(g.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),g.pixelStorei(g.UNPACK_ALIGNMENT,Y.unpackAlignment);const dt=g.getParameter(g.UNPACK_ROW_LENGTH),xt=g.getParameter(g.UNPACK_IMAGE_HEIGHT),rn=g.getParameter(g.UNPACK_SKIP_PIXELS),tt=g.getParameter(g.UNPACK_SKIP_ROWS),He=g.getParameter(g.UNPACK_SKIP_IMAGES),Lt=R.isCompressedTexture?R.mipmaps[$]:R.image;g.pixelStorei(g.UNPACK_ROW_LENGTH,Lt.width),g.pixelStorei(g.UNPACK_IMAGE_HEIGHT,Lt.height),g.pixelStorei(g.UNPACK_SKIP_PIXELS,Fe),g.pixelStorei(g.UNPACK_SKIP_ROWS,Oe),R.isDataTexture?g.texSubImage2D(g.TEXTURE_2D,$,ke,We,Ee,Ue,ze,ot,Lt.data):R.isCompressedTexture?g.compressedTexSubImage2D(g.TEXTURE_2D,$,ke,We,Lt.width,Lt.height,ze,Lt.data):g.texSubImage2D(g.TEXTURE_2D,$,ke,We,Ee,Ue,ze,ot,Lt),g.pixelStorei(g.UNPACK_ROW_LENGTH,dt),g.pixelStorei(g.UNPACK_IMAGE_HEIGHT,xt),g.pixelStorei(g.UNPACK_SKIP_PIXELS,rn),g.pixelStorei(g.UNPACK_SKIP_ROWS,tt),g.pixelStorei(g.UNPACK_SKIP_IMAGES,He),$===0&&Y.generateMipmaps&&g.generateMipmap(g.TEXTURE_2D),N.unbindTexture()},this.copyTextureToTexture3D=function(R,Y,re=null,oe=null,$=0){R.isTexture!==!0&&(Ao("WebGLRenderer: copyTextureToTexture3D function signature has changed."),re=arguments[0]||null,oe=arguments[1]||null,R=arguments[2],Y=arguments[3],$=arguments[4]||0);let Ee,Ue,Fe,Oe,ke,We,ze,ot,dt;const xt=R.isCompressedTexture?R.mipmaps[$]:R.image;re!==null?(Ee=re.max.x-re.min.x,Ue=re.max.y-re.min.y,Fe=re.max.z-re.min.z,Oe=re.min.x,ke=re.min.y,We=re.min.z):(Ee=xt.width,Ue=xt.height,Fe=xt.depth,Oe=0,ke=0,We=0),oe!==null?(ze=oe.x,ot=oe.y,dt=oe.z):(ze=0,ot=0,dt=0);const rn=Ie.convert(Y.format),tt=Ie.convert(Y.type);let He;if(Y.isData3DTexture)E.setTexture3D(Y,0),He=g.TEXTURE_3D;else if(Y.isDataArrayTexture||Y.isCompressedArrayTexture)E.setTexture2DArray(Y,0),He=g.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}g.pixelStorei(g.UNPACK_FLIP_Y_WEBGL,Y.flipY),g.pixelStorei(g.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),g.pixelStorei(g.UNPACK_ALIGNMENT,Y.unpackAlignment);const Lt=g.getParameter(g.UNPACK_ROW_LENGTH),nt=g.getParameter(g.UNPACK_IMAGE_HEIGHT),Sn=g.getParameter(g.UNPACK_SKIP_PIXELS),as=g.getParameter(g.UNPACK_SKIP_ROWS),on=g.getParameter(g.UNPACK_SKIP_IMAGES);g.pixelStorei(g.UNPACK_ROW_LENGTH,xt.width),g.pixelStorei(g.UNPACK_IMAGE_HEIGHT,xt.height),g.pixelStorei(g.UNPACK_SKIP_PIXELS,Oe),g.pixelStorei(g.UNPACK_SKIP_ROWS,ke),g.pixelStorei(g.UNPACK_SKIP_IMAGES,We),R.isDataTexture||R.isData3DTexture?g.texSubImage3D(He,$,ze,ot,dt,Ee,Ue,Fe,rn,tt,xt.data):Y.isCompressedArrayTexture?g.compressedTexSubImage3D(He,$,ze,ot,dt,Ee,Ue,Fe,rn,xt.data):g.texSubImage3D(He,$,ze,ot,dt,Ee,Ue,Fe,rn,tt,xt),g.pixelStorei(g.UNPACK_ROW_LENGTH,Lt),g.pixelStorei(g.UNPACK_IMAGE_HEIGHT,nt),g.pixelStorei(g.UNPACK_SKIP_PIXELS,Sn),g.pixelStorei(g.UNPACK_SKIP_ROWS,as),g.pixelStorei(g.UNPACK_SKIP_IMAGES,on),$===0&&Y.generateMipmaps&&g.generateMipmap(He),N.unbindTexture()},this.initRenderTarget=function(R){ee.get(R).__webglFramebuffer===void 0&&E.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?E.setTextureCube(R,0):R.isData3DTexture?E.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?E.setTexture2DArray(R,0):E.setTexture2D(R,0),N.unbindTexture()},this.resetState=function(){U=0,C=0,A=null,N.reset(),Ge.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ai}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Ol?"display-p3":"srgb",t.unpackColorSpace=st.workingColorSpace===Jo?"display-p3":"srgb"}}class Fn extends Ht{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new qn,this.environmentIntensity=1,this.environmentRotation=new qn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Yn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const i=this.getLengths();let s=0;const r=i.length;let o;t?o=t:o=e*i[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=i[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,i[s]===o)return s/(r-1);const h=i[s],f=i[s+1]-h,d=(o-h)/f;return(s+d)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),c=t||(o.isVector2?new Pe:new X);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){const i=new X,s=[],r=[],o=[],a=new X,c=new mt;for(let d=0;d<=e;d++){const _=d/e;s[d]=this.getTangentAt(_,new X)}r[0]=new X,o[0]=new X;let l=Number.MAX_VALUE;const h=Math.abs(s[0].x),u=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=l&&(l=h,i.set(1,0,0)),u<=l&&(l=u,i.set(0,1,0)),f<=l&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();const _=Math.acos(Ct(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(c.makeRotationAxis(a,_))}o[d].crossVectors(s[d],r[d])}if(t===!0){let d=Math.acos(Ct(r[0].dot(r[e]),-1,1));d/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(d=-d);for(let _=1;_<=e;_++)r[_].applyMatrix4(c.makeRotationAxis(s[_],d*_)),o[_].crossVectors(s[_],r[_])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Vl extends Yn{constructor(e=0,t=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(e,t=new Pe){const i=t,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+e*r;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=c-this.aX,d=l-this.aY;c=f*h-d*u+this.aX,l=f*u+d*h+this.aY}return i.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class cw extends Vl{constructor(e,t,i,s,r,o){super(e,t,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Wl(){let n=0,e=0,t=0,i=0;function s(r,o,a,c){n=r,e=a,t=-3*r+3*o-2*a-c,i=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,u){let f=(o-r)/l-(a-r)/(l+h)+(a-o)/h,d=(a-o)/h-(c-o)/(h+u)+(c-a)/u;f*=h,d*=h,s(o,a,f,d)},calc:function(r){const o=r*r,a=o*r;return n+e*r+t*o+i*a}}}const go=new X,ja=new Wl,Ka=new Wl,Za=new Wl;class lw extends Yn{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new X){const i=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=s[(a-1)%r]:(go.subVectors(s[0],s[1]).add(s[0]),l=go);const u=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(go.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=go),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let _=Math.pow(l.distanceToSquared(u),d),M=Math.pow(u.distanceToSquared(f),d),m=Math.pow(f.distanceToSquared(h),d);M<1e-4&&(M=1),_<1e-4&&(_=M),m<1e-4&&(m=M),ja.initNonuniformCatmullRom(l.x,u.x,f.x,h.x,_,M,m),Ka.initNonuniformCatmullRom(l.y,u.y,f.y,h.y,_,M,m),Za.initNonuniformCatmullRom(l.z,u.z,f.z,h.z,_,M,m)}else this.curveType==="catmullrom"&&(ja.initCatmullRom(l.x,u.x,f.x,h.x,this.tension),Ka.initCatmullRom(l.y,u.y,f.y,h.y,this.tension),Za.initCatmullRom(l.z,u.z,f.z,h.z,this.tension));return i.set(ja.calc(c),Ka.calc(c),Za.calc(c)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(new X().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Yh(n,e,t,i,s){const r=(i-e)*.5,o=(s-t)*.5,a=n*n,c=n*a;return(2*t-2*i+r+o)*c+(-3*t+3*i-2*r-o)*a+r*n+t}function uw(n,e){const t=1-n;return t*t*e}function hw(n,e){return 2*(1-n)*n*e}function fw(n,e){return n*n*e}function _r(n,e,t,i){return uw(n,e)+hw(n,t)+fw(n,i)}function dw(n,e){const t=1-n;return t*t*t*e}function pw(n,e){const t=1-n;return 3*t*t*n*e}function mw(n,e){return 3*(1-n)*n*n*e}function gw(n,e){return n*n*n*e}function vr(n,e,t,i,s){return dw(n,e)+pw(n,t)+mw(n,i)+gw(n,s)}class jd extends Yn{constructor(e=new Pe,t=new Pe,i=new Pe,s=new Pe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new Pe){const i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(vr(e,s.x,r.x,o.x,a.x),vr(e,s.y,r.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class _w extends Yn{constructor(e=new X,t=new X,i=new X,s=new X){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new X){const i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(vr(e,s.x,r.x,o.x,a.x),vr(e,s.y,r.y,o.y,a.y),vr(e,s.z,r.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Kd extends Yn{constructor(e=new Pe,t=new Pe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Pe){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Pe){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class vw extends Yn{constructor(e=new X,t=new X){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new X){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new X){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Zd extends Yn{constructor(e=new Pe,t=new Pe,i=new Pe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new Pe){const i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(_r(e,s.x,r.x,o.x),_r(e,s.y,r.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class xw extends Yn{constructor(e=new X,t=new X,i=new X){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new X){const i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(_r(e,s.x,r.x,o.x),_r(e,s.y,r.y,o.y),_r(e,s.z,r.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Jd extends Yn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Pe){const i=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return i.set(Yh(a,c.x,l.x,h.x,u.x),Yh(a,c.y,l.y,h.y,u.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(new Pe().fromArray(s))}return this}}var tl=Object.freeze({__proto__:null,ArcCurve:cw,CatmullRomCurve3:lw,CubicBezierCurve:jd,CubicBezierCurve3:_w,EllipseCurve:Vl,LineCurve:Kd,LineCurve3:vw,QuadraticBezierCurve:Zd,QuadraticBezierCurve3:xw,SplineCurve:Jd});class yw extends Yn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new tl[i](t,e))}return this}getPoint(e,t){const i=e*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=i){const o=s[r]-i,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let i=0,s=this.curves.length;i<s;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let i;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,c=o.getPoints(a);for(let l=0;l<c.length;l++){const h=c[l];i&&i.equals(h)||(t.push(h),i=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){const s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const s=e.curves[t];this.curves.push(new tl[s.type]().fromJSON(s))}return this}}class nl extends yw{constructor(e){super(),this.type="Path",this.currentPoint=new Pe,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const i=new Kd(this.currentPoint.clone(),new Pe(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,s){const r=new Zd(this.currentPoint.clone(),new Pe(e,t),new Pe(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(e,t,i,s,r,o){const a=new jd(this.currentPoint.clone(),new Pe(e,t),new Pe(i,s),new Pe(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),i=new Jd(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,s,r,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+a,t+c,i,s,r,o),this}absarc(e,t,i,s,r,o){return this.absellipse(e,t,i,i,s,r,o),this}ellipse(e,t,i,s,r,o,a,c){const l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+l,t+h,i,s,r,o,a,c),this}absellipse(e,t,i,s,r,o,a,c){const l=new Vl(e,t,i,s,r,o,a,c);if(this.curves.length>0){const u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);const h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Dt extends Mn{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);const r=[],o=[],a=[],c=[],l=new X,h=new Pe;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let u=0,f=3;u<=t;u++,f+=3){const d=i+u/t*s;l.x=e*Math.cos(d),l.y=e*Math.sin(d),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[f]/e+1)/2,h.y=(o[f+1]/e+1)/2,c.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Mt(o,3)),this.setAttribute("normal",new Mt(a,3)),this.setAttribute("uv",new Mt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Dt(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class fn extends Mn{constructor(e=1,t=1,i=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],f=[],d=[];let _=0;const M=[],m=i/2;let p=0;w(),o===!1&&(e>0&&x(!0),t>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new Mt(u,3)),this.setAttribute("normal",new Mt(f,3)),this.setAttribute("uv",new Mt(d,2));function w(){const S=new X,U=new X;let C=0;const A=(t-e)/i;for(let F=0;F<=r;F++){const ne=[],y=F/r,b=y*(t-e)+e;for(let k=0;k<=s;k++){const z=k/s,Q=z*c+a,ie=Math.sin(Q),H=Math.cos(Q);U.x=b*ie,U.y=-y*i+m,U.z=b*H,u.push(U.x,U.y,U.z),S.set(ie,A,H).normalize(),f.push(S.x,S.y,S.z),d.push(z,1-y),ne.push(_++)}M.push(ne)}for(let F=0;F<s;F++)for(let ne=0;ne<r;ne++){const y=M[ne][F],b=M[ne+1][F],k=M[ne+1][F+1],z=M[ne][F+1];e>0&&(h.push(y,b,z),C+=3),t>0&&(h.push(b,k,z),C+=3)}l.addGroup(p,C,0),p+=C}function x(S){const U=_,C=new Pe,A=new X;let F=0;const ne=S===!0?e:t,y=S===!0?1:-1;for(let k=1;k<=s;k++)u.push(0,m*y,0),f.push(0,y,0),d.push(.5,.5),_++;const b=_;for(let k=0;k<=s;k++){const Q=k/s*c+a,ie=Math.cos(Q),H=Math.sin(Q);A.x=ne*H,A.y=m*y,A.z=ne*ie,u.push(A.x,A.y,A.z),f.push(0,y,0),C.x=ie*.5+.5,C.y=H*.5*y+.5,d.push(C.x,C.y),_++}for(let k=0;k<s;k++){const z=U+k,Q=b+k;S===!0?h.push(Q,Q+1,z):h.push(Q+1,Q,z),F+=3}l.addGroup(p,F,S===!0?1:2),p+=F}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fn(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ut extends nl{constructor(e){super(e),this.uuid=os(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let i=0,s=this.holes.length;i<s;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){const s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const s=e.holes[t];this.holes.push(new nl().fromJSON(s))}return this}}const Mw={triangulate:function(n,e,t=2){const i=e&&e.length,s=i?e[0]*t:n.length;let r=Qd(n,0,s,t,!0);const o=[];if(!r||r.next===r.prev)return o;let a,c,l,h,u,f,d;if(i&&(r=Tw(n,e,r,t)),n.length>80*t){a=l=n[0],c=h=n[1];for(let _=t;_<s;_+=t)u=n[_],f=n[_+1],u<a&&(a=u),f<c&&(c=f),u>l&&(l=u),f>h&&(h=f);d=Math.max(l-a,h-c),d=d!==0?32767/d:0}return Pr(r,o,t,a,c,d,0),o}};function Qd(n,e,t,i,s){let r,o;if(s===Ow(n,e,t,i)>0)for(r=e;r<t;r+=i)o=$h(r,n[r],n[r+1],o);else for(r=t-i;r>=e;r-=i)o=$h(r,n[r],n[r+1],o);return o&&ta(o,o.next)&&(Ir(o),o=o.next),o}function is(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(ta(t,t.next)||_t(t.prev,t,t.next)===0)){if(Ir(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function Pr(n,e,t,i,s,r,o){if(!n)return;!o&&r&&Lw(n,i,s,r);let a=n,c,l;for(;n.prev!==n.next;){if(c=n.prev,l=n.next,r?ww(n,i,s,r):Sw(n)){e.push(c.i/t|0),e.push(n.i/t|0),e.push(l.i/t|0),Ir(n),n=l.next,a=l.next;continue}if(n=l,n===a){o?o===1?(n=Ew(is(n),e,t),Pr(n,e,t,i,s,r,2)):o===2&&bw(n,e,t,i,s,r):Pr(is(n),e,t,i,s,r,1);break}}}function Sw(n){const e=n.prev,t=n,i=n.next;if(_t(e,t,i)>=0)return!1;const s=e.x,r=t.x,o=i.x,a=e.y,c=t.y,l=i.y,h=s<r?s<o?s:o:r<o?r:o,u=a<c?a<l?a:l:c<l?c:l,f=s>r?s>o?s:o:r>o?r:o,d=a>c?a>l?a:l:c>l?c:l;let _=i.next;for(;_!==e;){if(_.x>=h&&_.x<=f&&_.y>=u&&_.y<=d&&Rs(s,a,r,c,o,l,_.x,_.y)&&_t(_.prev,_,_.next)>=0)return!1;_=_.next}return!0}function ww(n,e,t,i){const s=n.prev,r=n,o=n.next;if(_t(s,r,o)>=0)return!1;const a=s.x,c=r.x,l=o.x,h=s.y,u=r.y,f=o.y,d=a<c?a<l?a:l:c<l?c:l,_=h<u?h<f?h:f:u<f?u:f,M=a>c?a>l?a:l:c>l?c:l,m=h>u?h>f?h:f:u>f?u:f,p=il(d,_,e,t,i),w=il(M,m,e,t,i);let x=n.prevZ,S=n.nextZ;for(;x&&x.z>=p&&S&&S.z<=w;){if(x.x>=d&&x.x<=M&&x.y>=_&&x.y<=m&&x!==s&&x!==o&&Rs(a,h,c,u,l,f,x.x,x.y)&&_t(x.prev,x,x.next)>=0||(x=x.prevZ,S.x>=d&&S.x<=M&&S.y>=_&&S.y<=m&&S!==s&&S!==o&&Rs(a,h,c,u,l,f,S.x,S.y)&&_t(S.prev,S,S.next)>=0))return!1;S=S.nextZ}for(;x&&x.z>=p;){if(x.x>=d&&x.x<=M&&x.y>=_&&x.y<=m&&x!==s&&x!==o&&Rs(a,h,c,u,l,f,x.x,x.y)&&_t(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;S&&S.z<=w;){if(S.x>=d&&S.x<=M&&S.y>=_&&S.y<=m&&S!==s&&S!==o&&Rs(a,h,c,u,l,f,S.x,S.y)&&_t(S.prev,S,S.next)>=0)return!1;S=S.nextZ}return!0}function Ew(n,e,t){let i=n;do{const s=i.prev,r=i.next.next;!ta(s,r)&&ep(s,i,i.next,r)&&Lr(s,r)&&Lr(r,s)&&(e.push(s.i/t|0),e.push(i.i/t|0),e.push(r.i/t|0),Ir(i),Ir(i.next),i=n=r),i=i.next}while(i!==n);return is(i)}function bw(n,e,t,i,s,r){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Uw(o,a)){let c=tp(o,a);o=is(o,o.next),c=is(c,c.next),Pr(o,e,t,i,s,r,0),Pr(c,e,t,i,s,r,0);return}a=a.next}o=o.next}while(o!==n)}function Tw(n,e,t,i){const s=[];let r,o,a,c,l;for(r=0,o=e.length;r<o;r++)a=e[r]*i,c=r<o-1?e[r+1]*i:n.length,l=Qd(n,a,c,i,!1),l===l.next&&(l.steiner=!0),s.push(Dw(l));for(s.sort(Aw),r=0;r<s.length;r++)t=Rw(s[r],t);return t}function Aw(n,e){return n.x-e.x}function Rw(n,e){const t=Cw(n,e);if(!t)return e;const i=tp(t,n);return is(i,i.next),is(t,t.next)}function Cw(n,e){let t=e,i=-1/0,s;const r=n.x,o=n.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){const f=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=r&&f>i&&(i=f,s=t.x<t.next.x?t:t.next,f===r))return s}t=t.next}while(t!==e);if(!s)return null;const a=s,c=s.x,l=s.y;let h=1/0,u;t=s;do r>=t.x&&t.x>=c&&r!==t.x&&Rs(o<l?r:i,o,c,l,o<l?i:r,o,t.x,t.y)&&(u=Math.abs(o-t.y)/(r-t.x),Lr(t,n)&&(u<h||u===h&&(t.x>s.x||t.x===s.x&&Pw(s,t)))&&(s=t,h=u)),t=t.next;while(t!==a);return s}function Pw(n,e){return _t(n.prev,n,e.prev)<0&&_t(e.next,n,n.next)<0}function Lw(n,e,t,i){let s=n;do s.z===0&&(s.z=il(s.x,s.y,e,t,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,Iw(s)}function Iw(n){let e,t,i,s,r,o,a,c,l=1;do{for(t=n,n=null,r=null,o=0;t;){for(o++,i=t,a=0,e=0;e<l&&(a++,i=i.nextZ,!!i);e++);for(c=l;a>0||c>0&&i;)a!==0&&(c===0||!i||t.z<=i.z)?(s=t,t=t.nextZ,a--):(s=i,i=i.nextZ,c--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;t=i}r.nextZ=null,l*=2}while(o>1);return n}function il(n,e,t,i,s){return n=(n-t)*s|0,e=(e-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function Dw(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function Rs(n,e,t,i,s,r,o,a){return(s-o)*(e-a)>=(n-o)*(r-a)&&(n-o)*(i-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(i-a)}function Uw(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!Nw(n,e)&&(Lr(n,e)&&Lr(e,n)&&Fw(n,e)&&(_t(n.prev,n,e.prev)||_t(n,e.prev,e))||ta(n,e)&&_t(n.prev,n,n.next)>0&&_t(e.prev,e,e.next)>0)}function _t(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function ta(n,e){return n.x===e.x&&n.y===e.y}function ep(n,e,t,i){const s=vo(_t(n,e,t)),r=vo(_t(n,e,i)),o=vo(_t(t,i,n)),a=vo(_t(t,i,e));return!!(s!==r&&o!==a||s===0&&_o(n,t,e)||r===0&&_o(n,i,e)||o===0&&_o(t,n,i)||a===0&&_o(t,e,i))}function _o(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function vo(n){return n>0?1:n<0?-1:0}function Nw(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&ep(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function Lr(n,e){return _t(n.prev,n,n.next)<0?_t(n,e,n.next)>=0&&_t(n,n.prev,e)>=0:_t(n,e,n.prev)<0||_t(n,n.next,e)<0}function Fw(n,e){let t=n,i=!1;const s=(n.x+e.x)/2,r=(n.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function tp(n,e){const t=new sl(n.i,n.x,n.y),i=new sl(e.i,e.x,e.y),s=n.next,r=e.prev;return n.next=e,e.prev=n,t.next=s,s.prev=t,i.next=t,t.prev=i,r.next=i,i.prev=r,i}function $h(n,e,t,i){const s=new sl(n,e,t);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function Ir(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function sl(n,e,t){this.i=n,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Ow(n,e,t,i){let s=0;for(let r=e,o=t-i;r<t;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}class Ns{static area(e){const t=e.length;let i=0;for(let s=t-1,r=0;r<t;s=r++)i+=e[s].x*e[r].y-e[r].x*e[s].y;return i*.5}static isClockWise(e){return Ns.area(e)<0}static triangulateShape(e,t){const i=[],s=[],r=[];jh(e),Kh(i,e);let o=e.length;t.forEach(jh);for(let c=0;c<t.length;c++)s.push(o),o+=t[c].length,Kh(i,t[c]);const a=Mw.triangulate(i,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}}function jh(n){const e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function Kh(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}class kt extends Mn{constructor(e=new Ut([new Pe(.5,.5),new Pe(-.5,.5),new Pe(-.5,-.5),new Pe(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const i=this,s=[],r=[];for(let a=0,c=e.length;a<c;a++){const l=e[a];o(l)}this.setAttribute("position",new Mt(s,3)),this.setAttribute("uv",new Mt(r,2)),this.computeVertexNormals();function o(a){const c=[],l=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1;let f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:.2,_=t.bevelSize!==void 0?t.bevelSize:d-.1,M=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3;const p=t.extrudePath,w=t.UVGenerator!==void 0?t.UVGenerator:Bw;let x,S=!1,U,C,A,F;p&&(x=p.getSpacedPoints(h),S=!0,f=!1,U=p.computeFrenetFrames(h,!1),C=new X,A=new X,F=new X),f||(m=0,d=0,_=0,M=0);const ne=a.extractPoints(l);let y=ne.shape;const b=ne.holes;if(!Ns.isClockWise(y)){y=y.reverse();for(let J=0,g=b.length;J<g;J++){const T=b[J];Ns.isClockWise(T)&&(b[J]=T.reverse())}}const z=Ns.triangulateShape(y,b),Q=y;for(let J=0,g=b.length;J<g;J++){const T=b[J];y=y.concat(T)}function ie(J,g,T){return g||console.error("THREE.ExtrudeGeometry: vec does not exist"),J.clone().addScaledVector(g,T)}const H=y.length,Z=z.length;function B(J,g,T){let L,O,N;const K=J.x-g.x,ee=J.y-g.y,E=T.x-J.x,v=T.y-J.y,P=K*K+ee*ee,W=K*v-ee*E;if(Math.abs(W)>Number.EPSILON){const V=Math.sqrt(P),q=Math.sqrt(E*E+v*v),de=g.x-ee/V,ue=g.y+K/V,ve=T.x-v/q,Ae=T.y+E/q,pe=((ve-de)*v-(Ae-ue)*E)/(K*v-ee*E);L=de+K*pe-J.x,O=ue+ee*pe-J.y;const Se=L*L+O*O;if(Se<=2)return new Pe(L,O);N=Math.sqrt(Se/2)}else{let V=!1;K>Number.EPSILON?E>Number.EPSILON&&(V=!0):K<-Number.EPSILON?E<-Number.EPSILON&&(V=!0):Math.sign(ee)===Math.sign(v)&&(V=!0),V?(L=-ee,O=K,N=Math.sqrt(P)):(L=K,O=ee,N=Math.sqrt(P/2))}return new Pe(L/N,O/N)}const _e=[];for(let J=0,g=Q.length,T=g-1,L=J+1;J<g;J++,T++,L++)T===g&&(T=0),L===g&&(L=0),_e[J]=B(Q[J],Q[T],Q[L]);const me=[];let ge,we=_e.concat();for(let J=0,g=b.length;J<g;J++){const T=b[J];ge=[];for(let L=0,O=T.length,N=O-1,K=L+1;L<O;L++,N++,K++)N===O&&(N=0),K===O&&(K=0),ge[L]=B(T[L],T[N],T[K]);me.push(ge),we=we.concat(ge)}for(let J=0;J<m;J++){const g=J/m,T=d*Math.cos(g*Math.PI/2),L=_*Math.sin(g*Math.PI/2)+M;for(let O=0,N=Q.length;O<N;O++){const K=ie(Q[O],_e[O],L);D(K.x,K.y,-T)}for(let O=0,N=b.length;O<N;O++){const K=b[O];ge=me[O];for(let ee=0,E=K.length;ee<E;ee++){const v=ie(K[ee],ge[ee],L);D(v.x,v.y,-T)}}}const Re=_+M;for(let J=0;J<H;J++){const g=f?ie(y[J],we[J],Re):y[J];S?(A.copy(U.normals[0]).multiplyScalar(g.x),C.copy(U.binormals[0]).multiplyScalar(g.y),F.copy(x[0]).add(A).add(C),D(F.x,F.y,F.z)):D(g.x,g.y,0)}for(let J=1;J<=h;J++)for(let g=0;g<H;g++){const T=f?ie(y[g],we[g],Re):y[g];S?(A.copy(U.normals[J]).multiplyScalar(T.x),C.copy(U.binormals[J]).multiplyScalar(T.y),F.copy(x[J]).add(A).add(C),D(F.x,F.y,F.z)):D(T.x,T.y,u/h*J)}for(let J=m-1;J>=0;J--){const g=J/m,T=d*Math.cos(g*Math.PI/2),L=_*Math.sin(g*Math.PI/2)+M;for(let O=0,N=Q.length;O<N;O++){const K=ie(Q[O],_e[O],L);D(K.x,K.y,u+T)}for(let O=0,N=b.length;O<N;O++){const K=b[O];ge=me[O];for(let ee=0,E=K.length;ee<E;ee++){const v=ie(K[ee],ge[ee],L);S?D(v.x,v.y+x[h-1].y,x[h-1].x+T):D(v.x,v.y,u+T)}}}te(),he();function te(){const J=s.length/3;if(f){let g=0,T=H*g;for(let L=0;L<Z;L++){const O=z[L];se(O[2]+T,O[1]+T,O[0]+T)}g=h+m*2,T=H*g;for(let L=0;L<Z;L++){const O=z[L];se(O[0]+T,O[1]+T,O[2]+T)}}else{for(let g=0;g<Z;g++){const T=z[g];se(T[2],T[1],T[0])}for(let g=0;g<Z;g++){const T=z[g];se(T[0]+H*h,T[1]+H*h,T[2]+H*h)}}i.addGroup(J,s.length/3-J,0)}function he(){const J=s.length/3;let g=0;fe(Q,g),g+=Q.length;for(let T=0,L=b.length;T<L;T++){const O=b[T];fe(O,g),g+=O.length}i.addGroup(J,s.length/3-J,1)}function fe(J,g){let T=J.length;for(;--T>=0;){const L=T;let O=T-1;O<0&&(O=J.length-1);for(let N=0,K=h+m*2;N<K;N++){const ee=H*N,E=H*(N+1),v=g+L+ee,P=g+O+ee,W=g+O+E,V=g+L+E;j(v,P,W,V)}}}function D(J,g,T){c.push(J),c.push(g),c.push(T)}function se(J,g,T){ce(J),ce(g),ce(T);const L=s.length/3,O=w.generateTopUV(i,s,L-3,L-2,L-1);ye(O[0]),ye(O[1]),ye(O[2])}function j(J,g,T,L){ce(J),ce(g),ce(L),ce(g),ce(T),ce(L);const O=s.length/3,N=w.generateSideWallUV(i,s,O-6,O-3,O-2,O-1);ye(N[0]),ye(N[1]),ye(N[3]),ye(N[1]),ye(N[2]),ye(N[3])}function ce(J){s.push(c[J*3+0]),s.push(c[J*3+1]),s.push(c[J*3+2])}function ye(J){r.push(J.x),r.push(J.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return zw(t,i,e)}static fromJSON(e,t){const i=[];for(let r=0,o=e.shapes.length;r<o;r++){const a=t[e.shapes[r]];i.push(a)}const s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new tl[s.type]().fromJSON(s)),new kt(i,e.options)}}const Bw={generateTopUV:function(n,e,t,i,s){const r=e[t*3],o=e[t*3+1],a=e[i*3],c=e[i*3+1],l=e[s*3],h=e[s*3+1];return[new Pe(r,o),new Pe(a,c),new Pe(l,h)]},generateSideWallUV:function(n,e,t,i,s,r){const o=e[t*3],a=e[t*3+1],c=e[t*3+2],l=e[i*3],h=e[i*3+1],u=e[i*3+2],f=e[s*3],d=e[s*3+1],_=e[s*3+2],M=e[r*3],m=e[r*3+1],p=e[r*3+2];return Math.abs(a-h)<Math.abs(o-l)?[new Pe(o,1-c),new Pe(l,1-u),new Pe(f,1-_),new Pe(M,1-p)]:[new Pe(a,1-c),new Pe(h,1-u),new Pe(d,1-_),new Pe(m,1-p)]}};function zw(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){const r=n[i];t.shapes.push(r.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class Me extends Mn{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const c=Math.min(o+a,Math.PI);let l=0;const h=[],u=new X,f=new X,d=[],_=[],M=[],m=[];for(let p=0;p<=i;p++){const w=[],x=p/i;let S=0;p===0&&o===0?S=.5/t:p===i&&c===Math.PI&&(S=-.5/t);for(let U=0;U<=t;U++){const C=U/t;u.x=-e*Math.cos(s+C*r)*Math.sin(o+x*a),u.y=e*Math.cos(o+x*a),u.z=e*Math.sin(s+C*r)*Math.sin(o+x*a),_.push(u.x,u.y,u.z),f.copy(u).normalize(),M.push(f.x,f.y,f.z),m.push(C+S,1-x),w.push(l++)}h.push(w)}for(let p=0;p<i;p++)for(let w=0;w<t;w++){const x=h[p][w+1],S=h[p][w],U=h[p+1][w],C=h[p+1][w+1];(p!==0||o>0)&&d.push(x,S,C),(p!==i-1||c<Math.PI)&&d.push(S,U,C)}this.setIndex(d),this.setAttribute("position",new Mt(_,3)),this.setAttribute("normal",new Mt(M,3)),this.setAttribute("uv",new Mt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Me(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Xl extends Mn{constructor(e=1,t=.4,i=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:r},i=Math.floor(i),s=Math.floor(s);const o=[],a=[],c=[],l=[],h=new X,u=new X,f=new X;for(let d=0;d<=i;d++)for(let _=0;_<=s;_++){const M=_/s*r,m=d/i*Math.PI*2;u.x=(e+t*Math.cos(m))*Math.cos(M),u.y=(e+t*Math.cos(m))*Math.sin(M),u.z=t*Math.sin(m),a.push(u.x,u.y,u.z),h.x=e*Math.cos(M),h.y=e*Math.sin(M),f.subVectors(u,h).normalize(),c.push(f.x,f.y,f.z),l.push(_/s),l.push(d/i)}for(let d=1;d<=i;d++)for(let _=1;_<=s;_++){const M=(s+1)*d+_-1,m=(s+1)*(d-1)+_-1,p=(s+1)*(d-1)+_,w=(s+1)*d+_;o.push(M,m,w),o.push(m,p,w)}this.setIndex(o),this.setAttribute("position",new Mt(a,3)),this.setAttribute("normal",new Mt(c,3)),this.setAttribute("uv",new Mt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xl(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Dr extends zr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ve(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ve(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Cd,this.normalScale=new Pe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Xe extends Dr{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Pe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ct(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ve(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ve(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ve(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}const Bo={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class Gw{constructor(e,t,i){const s=this;let r=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){const u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=l.length;u<f;u+=2){const d=l[u],_=l[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return _}return null}}}const Hw=new Gw;class js{constructor(e){this.manager=e!==void 0?e:Hw,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}js.DEFAULT_MATERIAL_NAME="__DEFAULT";const ni={};class kw extends Error{constructor(e,t){super(e),this.response=t}}class Vw extends js{constructor(e){super(e)}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=Bo.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(ni[e]!==void 0){ni[e].push({onLoad:t,onProgress:i,onError:s});return}ni[e]=[],ni[e].push({onLoad:t,onProgress:i,onError:s});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const h=ni[e],u=l.body.getReader(),f=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),d=f?parseInt(f):0,_=d!==0;let M=0;const m=new ReadableStream({start(p){w();function w(){u.read().then(({done:x,value:S})=>{if(x)p.close();else{M+=S.byteLength;const U=new ProgressEvent("progress",{lengthComputable:_,loaded:M,total:d});for(let C=0,A=h.length;C<A;C++){const F=h[C];F.onProgress&&F.onProgress(U)}p.enqueue(S),w()}},x=>{p.error(x)})}}});return new Response(m)}else throw new kw(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return l.json();default:if(a===void 0)return l.text();{const u=/charset="?([^;"\s]*)"?/i.exec(a),f=u&&u[1]?u[1].toLowerCase():void 0,d=new TextDecoder(f);return l.arrayBuffer().then(_=>d.decode(_))}}}).then(l=>{Bo.add(e,l);const h=ni[e];delete ni[e];for(let u=0,f=h.length;u<f;u++){const d=h[u];d.onLoad&&d.onLoad(l)}}).catch(l=>{const h=ni[e];if(h===void 0)throw this.manager.itemError(e),l;delete ni[e];for(let u=0,f=h.length;u<f;u++){const d=h[u];d.onError&&d.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class np extends js{constructor(e){super(e)}load(e,t,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=Bo.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a=Cr("img");function c(){h(),Bo.add(e,this),t&&t(this),r.manager.itemEnd(e)}function l(u){h(),s&&s(u),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}}class Ww extends js{constructor(e){super(e)}load(e,t,i,s){const r=new Gl;r.colorSpace=Tn;const o=new np(this.manager);o.setCrossOrigin(this.crossOrigin),o.setPath(this.path);let a=0;function c(l){o.load(e[l],function(h){r.images[l]=h,a++,a===6&&(r.needsUpdate=!0,t&&t(r))},void 0,s)}for(let l=0;l<e.length;++l)c(l);return r}}class ql extends js{constructor(e){super(e)}load(e,t,i,s){const r=new Kt,o=new np(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},i,s),r}}class Yl extends Ht{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ve(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const Ja=new mt,Zh=new X,Jh=new X;class ip{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Pe(512,512),this.map=null,this.mapPass=null,this.matrix=new mt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Hl,this._frameExtents=new Pe(1,1),this._viewportCount=1,this._viewports=[new lt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Zh.setFromMatrixPosition(e.matrixWorld),t.position.copy(Zh),Jh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Jh),t.updateMatrixWorld(),Ja.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ja),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Ja)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Qh=new mt,sr=new X,Qa=new X;class Xw extends ip{constructor(){super(new gt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Pe(4,2),this._viewportCount=6,this._viewports=[new lt(2,1,1,1),new lt(0,1,1,1),new lt(3,1,1,1),new lt(1,1,1,1),new lt(3,0,1,1),new lt(1,0,1,1)],this._cubeDirections=[new X(1,0,0),new X(-1,0,0),new X(0,0,1),new X(0,0,-1),new X(0,1,0),new X(0,-1,0)],this._cubeUps=[new X(0,1,0),new X(0,1,0),new X(0,1,0),new X(0,1,0),new X(0,0,1),new X(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,s=this.matrix,r=e.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),sr.setFromMatrixPosition(e.matrixWorld),i.position.copy(sr),Qa.copy(i.position),Qa.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Qa),i.updateMatrixWorld(),s.makeTranslation(-sr.x,-sr.y,-sr.z),Qh.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Qh)}}class fi extends Yl{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new Xw}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class qw extends ip{constructor(){super(new Vd(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class On extends Yl{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ht.DEFAULT_UP),this.updateMatrix(),this.target=new Ht,this.shadow=new qw}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Bn extends Yl{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Yw{constructor(){this.type="ShapePath",this.color=new Ve,this.subPaths=[],this.currentPath=null}moveTo(e,t){return this.currentPath=new nl,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,i,s){return this.currentPath.quadraticCurveTo(e,t,i,s),this}bezierCurveTo(e,t,i,s,r,o){return this.currentPath.bezierCurveTo(e,t,i,s,r,o),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e){function t(p){const w=[];for(let x=0,S=p.length;x<S;x++){const U=p[x],C=new Ut;C.curves=U.curves,w.push(C)}return w}function i(p,w){const x=w.length;let S=!1;for(let U=x-1,C=0;C<x;U=C++){let A=w[U],F=w[C],ne=F.x-A.x,y=F.y-A.y;if(Math.abs(y)>Number.EPSILON){if(y<0&&(A=w[C],ne=-ne,F=w[U],y=-y),p.y<A.y||p.y>F.y)continue;if(p.y===A.y){if(p.x===A.x)return!0}else{const b=y*(p.x-A.x)-ne*(p.y-A.y);if(b===0)return!0;if(b<0)continue;S=!S}}else{if(p.y!==A.y)continue;if(F.x<=p.x&&p.x<=A.x||A.x<=p.x&&p.x<=F.x)return!0}}return S}const s=Ns.isClockWise,r=this.subPaths;if(r.length===0)return[];let o,a,c;const l=[];if(r.length===1)return a=r[0],c=new Ut,c.curves=a.curves,l.push(c),l;let h=!s(r[0].getPoints());h=e?!h:h;const u=[],f=[];let d=[],_=0,M;f[_]=void 0,d[_]=[];for(let p=0,w=r.length;p<w;p++)a=r[p],M=a.getPoints(),o=s(M),o=e?!o:o,o?(!h&&f[_]&&_++,f[_]={s:new Ut,p:M},f[_].s.curves=a.curves,h&&_++,d[_]=[]):d[_].push({h:a,p:M[0]});if(!f[0])return t(r);if(f.length>1){let p=!1,w=0;for(let x=0,S=f.length;x<S;x++)u[x]=[];for(let x=0,S=f.length;x<S;x++){const U=d[x];for(let C=0;C<U.length;C++){const A=U[C];let F=!0;for(let ne=0;ne<f.length;ne++)i(A.p,f[ne].p)&&(x!==ne&&w++,F?(F=!1,u[ne].push(A)):p=!0);F&&u[x].push(A)}}w>0&&p===!1&&(d=u)}let m;for(let p=0,w=f.length;p<w;p++){c=f[p].s,l.push(c),m=d[p];for(let x=0,S=m.length;x<S;x++)c.holes.push(m[x].h)}return l}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Pl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Pl);class di extends js{constructor(e){super(e)}load(e,t,i,s){const r=this,o=new Vw(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(a){const c=r.parse(JSON.parse(a));t&&t(c)},i,s)}parse(e){return new $w(e)}}class $w{constructor(e){this.isFont=!0,this.type="Font",this.data=e}generateShapes(e,t=100){const i=[],s=jw(e,t,this.data);for(let r=0,o=s.length;r<o;r++)i.push(...s[r].toShapes());return i}}function jw(n,e,t){const i=Array.from(n),s=e/t.resolution,r=(t.boundingBox.yMax-t.boundingBox.yMin+t.underlineThickness)*s,o=[];let a=0,c=0;for(let l=0;l<i.length;l++){const h=i[l];if(h===`
`)a=0,c-=r;else{const u=Kw(h,s,a,c,t);a+=u.offsetX,o.push(u.path)}}return o}function Kw(n,e,t,i,s){const r=s.glyphs[n]||s.glyphs["?"];if(!r){console.error('THREE.Font: character "'+n+'" does not exists in font family '+s.familyName+".");return}const o=new Yw;let a,c,l,h,u,f,d,_;if(r.o){const M=r._cachedOutline||(r._cachedOutline=r.o.split(" "));for(let m=0,p=M.length;m<p;)switch(M[m++]){case"m":a=M[m++]*e+t,c=M[m++]*e+i,o.moveTo(a,c);break;case"l":a=M[m++]*e+t,c=M[m++]*e+i,o.lineTo(a,c);break;case"q":l=M[m++]*e+t,h=M[m++]*e+i,u=M[m++]*e+t,f=M[m++]*e+i,o.quadraticCurveTo(u,f,l,h);break;case"b":l=M[m++]*e+t,h=M[m++]*e+i,u=M[m++]*e+t,f=M[m++]*e+i,d=M[m++]*e+t,_=M[m++]*e+i,o.bezierCurveTo(u,f,d,_,l,h);break}}return{offsetX:r.ha*e,path:o}}class Ft extends kt{constructor(e,t={}){const i=t.font;if(i===void 0)super();else{const s=i.generateShapes(e,t.size);t.depth===void 0&&t.height!==void 0&&console.warn("THREE.TextGeometry: .height is now depreciated. Please use .depth instead"),t.depth=t.depth!==void 0?t.depth:t.height!==void 0?t.height:50,t.bevelThickness===void 0&&(t.bevelThickness=10),t.bevelSize===void 0&&(t.bevelSize=8),t.bevelEnabled===void 0&&(t.bevelEnabled=!1),super(s,t)}this.type="TextGeometry"}}const Zw=Wt({__name:"PinkBear",props:{background:{type:Boolean,default:!1},cameraPosition:{type:Number,default:4},bodyPosition:{type:Object,default:()=>({x:0,y:0,z:0})}},setup(n){const e=n,t=ut(null);return tn(()=>{if(t.value){let i=function(){requestAnimationFrame(i),d.rotation.y+=.03,h.uniforms.time.value+=.03,o.render(s,r)};const s=new Fn,r=new gt(75,window.innerWidth/window.innerHeight,.1,1e3),o=new Nn({antialias:!0,alpha:!0});o.setSize(window.innerWidth,window.innerHeight),o.toneMapping=rs,o.toneMappingExposure=1.25,t.value.appendChild(o.domElement);const a=new Bn(16777215,.6);s.add(a);const c=new On(16777215,1.5);c.position.set(5,5,5),s.add(c);const l=new fi(16777215,2,50);l.position.set(0,2,4),s.add(l);const h=new St({uniforms:{time:{value:0},color1:{value:new Ve(16766720)},color2:{value:new Ve(16007990)}},vertexShader:`
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
        `}),u=new Xe({color:16738740,metalness:.2,roughness:.5,clearcoat:.1,clearcoatRoughness:.8,transparent:!0,opacity:.99}),f=new Xe({color:13369344,metalness:.4,roughness:.3,clearcoat:.3,clearcoatRoughness:.2,transparent:!0,opacity:.99}),d=new Je,_=new Me(1,32,32),M=new I(_,u);M.scale.set(.85,.85,.8),M.position.y=-.2,d.add(M);const m=new Me(.6,32,32),p=new I(m,u);p.scale.set(1,.95,.95),p.position.set(0,1,0),d.add(p);const w=new Me(.25,32,32),x=new I(w,u);x.position.set(-.45,1.35,-.1),d.add(x);const S=new I(w,u);S.position.set(.45,1.35,-.1),d.add(S);const U=new Me(.25,32,32),C=new I(U,u);C.scale.set(1,.6,.8),C.position.set(0,.85,.5),d.add(C);const A=new Ut;A.moveTo(0,0),A.bezierCurveTo(0,-.3,-.6,-.3,-.6,0),A.bezierCurveTo(-.6,.3,0,.6,0,1),A.bezierCurveTo(0,.6,.6,.3,.6,0),A.bezierCurveTo(.6,-.3,0,-.3,0,0);const F={depth:.4,bevelEnabled:!0,bevelSegments:2,steps:2,bevelSize:.1,bevelThickness:.1},ne=new kt(A,F),y=new I(ne,f);y.scale.set(.5,.5,.5),y.position.set(0,.34,.8),y.rotation.y=Math.PI,y.rotation.x=Math.PI,d.add(y);const b=new Me(.35,32,32),k=new I(b,u);k.scale.set(.75,1.25,.65),k.position.set(-.7,-.15,.2),d.add(k);const z=new I(b,u);z.scale.set(.75,1.25,.65),z.position.set(.7,-.15,.2),d.add(z);const Q=new fn(.2,.22,.6,32),ie=new I(Q,u);ie.position.set(-.4,-1.05,0),d.add(ie);const H=new I(Q,u);H.position.set(.4,-1.05,0),d.add(H);const Z=new Me(.3,32,32),B=new I(Z,u);B.scale.set(1,.72,1.5),B.position.set(-.4,-1.45,.17),d.add(B);const _e=new I(Z,u);_e.scale.set(1,.72,1.5),_e.position.set(.4,-1.45,.17),d.add(_e);const me=new Me(.44,32,32),ge=new I(me,u);ge.position.set(-.15,-.45,-.4),d.add(ge);const we=new I(me,u);we.position.set(.15,-.45,-.4),d.add(we);const Re=new Me(.18,32,32),te=new I(Re,f);te.position.set(0,-.35,-.8),d.add(te),new di().load("https://threejs.org/examples/fonts/helvetiker_bold.typeface.json",function(j){const ce=new Ft("X",{font:j,size:.2,depth:.05}),ye=new vt({color:0}),J=new I(ce,ye);J.position.set(-.34,1,.5),d.add(J)});const fe=new Me(.1,32,32),D=new vt({color:0}),se=new I(fe,D);se.position.set(.2,1.1,.54),d.add(se),s.add(d),i(),d.position.set(e.bodyPosition.x,e.bodyPosition.y,e.bodyPosition.z),r.position.set(e.bodyPosition.x,1,e.cameraPosition),r.lookAt(e.bodyPosition.x,0,0),bt(()=>e.bodyPosition,j=>{d.position.set(j.x,j.y,j.z)}),bt(()=>e.cameraPosition,j=>{r.position.set(e.bodyPosition.x,1,j),r.lookAt(e.bodyPosition.x,0,0)}),window.addEventListener("resize",()=>{r.aspect=window.innerWidth/window.innerHeight,r.updateProjectionMatrix(),o.setSize(window.innerWidth,window.innerHeight)})}}),(i,s)=>(Zt(),nn("div",{ref_key:"threeCanvas",ref:t,class:Un(n.background?"no-bg":"three-canvas")},null,2))}}),sp=sn(Zw,[["__scopeId","data-v-d0efbfd4"]]),Jw=Wt({__name:"PurpleBear",props:{background:{type:Boolean,default:!1},cameraPosition:{type:Number,default:4},bodyPosition:{type:Object,default:()=>({x:0,y:0,z:0})}},setup(n){const e=n,t=ut(null);return tn(()=>{if(t.value){let i=function(){requestAnimationFrame(i),d.rotation.y+=.03,h.uniforms.time.value+=.03,o.render(s,r)};const s=new Fn,r=new gt(75,window.innerWidth/window.innerHeight,.1,1e3),o=new Nn({antialias:!0,alpha:!0});o.setSize(window.innerWidth,window.innerHeight),o.toneMapping=rs,o.toneMappingExposure=1.25,t.value.appendChild(o.domElement);const a=new Bn(16777215,.6);s.add(a);const c=new On(16777215,1.5);c.position.set(5,5,5),s.add(c);const l=new fi(16777215,2,50);l.position.set(0,2,4),s.add(l);const h=new St({uniforms:{time:{value:0},color1:{value:new Ve(16766720)},color2:{value:new Ve(16007990)}},vertexShader:`
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
            `}),u=new Xe({color:10573288,metalness:.2,roughness:.5,clearcoat:.1,clearcoatRoughness:.8,transparent:!0,opacity:.99});new Xe({color:16766720,metalness:.4,roughness:.3,clearcoat:.3,clearcoatRoughness:.2,transparent:!0,opacity:.99});const f=new Xe({color:16766720,metalness:.05,roughness:10,clearcoat:.6,clearcoatRoughness:.1,opacity:1,transparent:!1}),d=new Je,_=new Me(1,32,32),M=new I(_,u);M.scale.set(.85,.85,.8),M.position.y=-.2,d.add(M);const m=new Me(.6,32,32),p=new I(m,u);p.scale.set(1,.95,.95),p.position.set(0,1,0),d.add(p);const w=new Me(.25,32,32),x=new I(w,u);x.position.set(-.45,1.35,-.1),d.add(x);const S=new I(w,u);S.position.set(.45,1.35,-.1),d.add(S);const U=new Me(.25,32,32),C=new I(U,u);C.scale.set(1,.6,.8),C.position.set(0,.85,.5),d.add(C);const A=new Ut;A.moveTo(0,0),A.bezierCurveTo(0,-.3,-.6,-.3,-.6,0),A.bezierCurveTo(-.6,.3,0,.6,0,1),A.bezierCurveTo(0,.6,.6,.3,.6,0),A.bezierCurveTo(.6,-.3,0,-.3,0,0);const F={depth:.4,bevelEnabled:!0,bevelSegments:2,steps:2,bevelSize:.1,bevelThickness:.1},ne=new kt(A,F),y=new I(ne,h);y.scale.set(.5,.5,.5),y.position.set(0,.34,.8),y.rotation.y=Math.PI,y.rotation.x=Math.PI,d.add(y);const b=new Me(.35,32,32),k=new I(b,u);k.scale.set(.75,1.25,.65),k.position.set(-.7,-.15,.2),d.add(k);const z=new I(b,u);z.scale.set(.75,1.25,.65),z.position.set(.7,-.15,.2),d.add(z);const Q=new fn(.2,.22,.6,32),ie=new I(Q,u);ie.position.set(-.4,-1.05,0),d.add(ie);const H=new I(Q,u);H.position.set(.4,-1.05,0),d.add(H);const Z=new Me(.3,32,32),B=new I(Z,u);B.scale.set(1,.72,1.5),B.position.set(-.4,-1.45,.17),d.add(B);const _e=new I(Z,u);_e.scale.set(1,.72,1.5),_e.position.set(.4,-1.45,.17),d.add(_e);const me=new Me(.44,32,32),ge=new I(me,u);ge.position.set(-.15,-.45,-.4),d.add(ge);const we=new I(me,u);we.position.set(.15,-.45,-.4),d.add(we);const Re=new Me(.18,32,32),te=new I(Re,f);te.position.set(0,-.35,-.8),d.add(te),new di().load("https://threejs.org/examples/fonts/helvetiker_bold.typeface.json",function(fe){const D=new Ft("X",{font:fe,size:.2,depth:.05}),se=new vt({color:0}),j=new I(D,se);j.position.set(-.34,1,.5),d.add(j);const ce=new Ft("O",{font:fe,size:.2,depth:.05}),ye=new vt({color:0}),J=new I(ce,ye);J.position.set(.16,1,.53),J.rotation.y=Ze.degToRad(32),d.add(J)}),s.add(d),i(),d.position.set(e.bodyPosition.x,e.bodyPosition.y,e.bodyPosition.z),r.position.set(e.bodyPosition.x,1,e.cameraPosition),r.lookAt(e.bodyPosition.x,0,0),bt(()=>e.bodyPosition,fe=>{d.position.set(fe.x,fe.y,fe.z)}),bt(()=>e.cameraPosition,fe=>{r.position.set(e.bodyPosition.x,1,fe),r.lookAt(e.bodyPosition.x,0,0)}),window.addEventListener("resize",()=>{r.aspect=window.innerWidth/window.innerHeight,r.updateProjectionMatrix(),o.setSize(window.innerWidth,window.innerHeight)})}}),(i,s)=>(Zt(),nn("div",{ref_key:"threeCanvas",ref:t,class:Un(n.background?"no-bg":"three-canvas")},null,2))}}),rp=sn(Jw,[["__scopeId","data-v-46de1bfd"]]),Qw=Wt({__name:"BlueBear",props:{background:{type:Boolean,default:!1},cameraPosition:{type:Number,default:4},bodyPosition:{type:Object,default:()=>({x:0,y:0,z:0})}},setup(n){const e=n,t=ut(null);return tn(()=>{if(t.value){let i=function(){requestAnimationFrame(i),d.rotation.y+=.03,h.uniforms.time.value+=.04,o.render(s,r)};const s=new Fn,r=new gt(75,window.innerWidth/window.innerHeight,.1,1e3),o=new Nn({antialias:!0,alpha:!0});o.setSize(window.innerWidth,window.innerHeight),o.toneMapping=rs,o.toneMappingExposure=1.25,t.value.appendChild(o.domElement);const a=new Bn(16777215,.6);s.add(a);const c=new On(16777215,1.2);c.position.set(5,5,5),s.add(c);const l=new fi(16777215,2,50);l.position.set(0,2,4),s.add(l);const h=new St({uniforms:{time:{value:0},color1:{value:new Ve(16766720)},color2:{value:new Ve(16007990)}},vertexShader:`
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
        `}),u=new Xe({color:52945,metalness:.2,roughness:.5,clearcoat:.1,clearcoatRoughness:.8,transparent:!0,opacity:.99}),f=new Xe({color:16745921,metalness:.5,roughness:30,clearcoat:.6,clearcoatRoughness:.1,opacity:1,transparent:!1}),d=new Je,_=new Me(1,32,32),M=new I(_,u);M.scale.set(.85,.85,.8),M.position.y=-.2,d.add(M);const m=new Me(.6,32,32),p=new I(m,u);p.scale.set(1,.95,.95),p.position.set(0,1,0),d.add(p);const w=new Me(.25,32,32),x=new I(w,u);x.position.set(-.45,1.35,-.1),d.add(x);const S=new I(w,u);S.position.set(.45,1.35,-.1),d.add(S);const U=new Me(.25,32,32),C=new I(U,u);C.scale.set(1,.6,.8),C.position.set(0,.85,.5),d.add(C);const A=new Ut;A.moveTo(0,0),A.bezierCurveTo(0,-.3,-.6,-.3,-.6,0),A.bezierCurveTo(-.6,.3,0,.6,0,1),A.bezierCurveTo(0,.6,.6,.3,.6,0),A.bezierCurveTo(.6,-.3,0,-.3,0,0);const F={depth:.4,bevelEnabled:!0,bevelSegments:2,steps:2,bevelSize:.1,bevelThickness:.1},ne=new kt(A,F),y=new I(ne,f);y.scale.set(.5,.5,.5),y.position.set(0,.34,.8),y.rotation.y=Math.PI,y.rotation.x=Math.PI,d.add(y);const b=new Me(.35,32,32),k=new I(b,u);k.scale.set(.75,1.25,.65),k.position.set(-.7,-.15,.2),d.add(k);const z=new I(b,u);z.scale.set(.75,1.25,.65),z.position.set(.7,-.15,.2),d.add(z);const Q=new fn(.2,.22,.6,32),ie=new I(Q,u);ie.position.set(-.4,-1.05,0),d.add(ie);const H=new I(Q,u);H.position.set(.4,-1.05,0),d.add(H);const Z=new Me(.3,32,32),B=new I(Z,u);B.scale.set(1,.72,1.5),B.position.set(-.4,-1.45,.17),d.add(B);const _e=new I(Z,u);_e.scale.set(1,.72,1.5),_e.position.set(.4,-1.45,.17),d.add(_e);const me=new Me(.44,32,32),ge=new I(me,u);ge.position.set(-.15,-.45,-.4),d.add(ge);const we=new I(me,u);we.position.set(.15,-.45,-.4),d.add(we);const Re=new Me(.18,32,32),te=new I(Re,f);te.position.set(0,-.35,-.8),d.add(te),new di().load("https://threejs.org/examples/fonts/helvetiker_bold.typeface.json",function(fe){const D=new Ft("X",{font:fe,size:.2,depth:.05}),se=new vt({color:0}),j=new I(D,se);j.position.set(-.34,1,.5),d.add(j);const ce=new Ft("X",{font:fe,size:.2,depth:.05}),ye=new vt({color:0}),J=new I(ce,ye);J.position.set(.16,1,.53),J.rotation.y=Ze.degToRad(32),d.add(J)}),s.add(d),i(),d.position.set(e.bodyPosition.x,e.bodyPosition.y,e.bodyPosition.z),r.position.set(e.bodyPosition.x,1,e.cameraPosition),r.lookAt(e.bodyPosition.x,0,0),bt(()=>e.bodyPosition,fe=>{d.position.set(fe.x,fe.y,fe.z)}),bt(()=>e.cameraPosition,fe=>{r.position.set(e.bodyPosition.x,1,fe),r.lookAt(e.bodyPosition.x,0,0)}),window.addEventListener("resize",()=>{r.aspect=window.innerWidth/window.innerHeight,r.updateProjectionMatrix(),o.setSize(window.innerWidth,window.innerHeight)})}}),(i,s)=>(Zt(),nn("div",{ref_key:"threeCanvas",ref:t,class:Un(n.background?"no-bg":"three-canvas")},null,2))}}),eE=sn(Qw,[["__scopeId","data-v-369ed91d"]]),tE={key:0,class:"bear-face-container"},nE=Wt({__name:"BearFace",setup(n){const e=ut(null),t=ut(!1),i=()=>{t.value=!0};return tn(()=>{const s=e.value;if(s){s.width=window.innerWidth,s.height=window.innerHeight*.6;const r=s.getContext("2d");r&&(()=>{const a=s.width/2,c=s.height/1.9,l=s.height/2.5,h=s.height/2.58,u=l*.45,f=l*.18,d=l*.3,_=l*.275,M=d*.35,m=d*.32;r.save(),r.beginPath(),r.rect(0,0,s.width/2,s.height),r.clip(),r.lineWidth=15,r.strokeStyle="#000000",r.beginPath(),r.arc(a-l*.85,c-h*.8,u,0,Math.PI*2,!0),r.stroke(),r.beginPath(),r.arc(a+l*.85,c-l*.8,u,0,Math.PI*2,!0),r.stroke(),r.lineWidth=15,r.beginPath(),r.arc(a,c,h,0,Math.PI*2,!0),r.stroke(),r.lineWidth=15,r.beginPath(),r.arc(a-l*.4,c-l*.2,f,0,Math.PI*2,!0),r.stroke(),r.beginPath(),r.moveTo(a+l*.2,c-l*.3),r.lineTo(a+l*.5,c-l*.05),r.moveTo(a+l*.5,c-l*.3),r.lineTo(a+l*.2,c-l*.05),r.stroke(),r.beginPath(),r.ellipse(a,c+l*.4,_*1.5,_,0,0,Math.PI*2),r.stroke(),r.beginPath(),r.arc(a,c+l*.3,m,0,Math.PI*2,!0),r.stroke(),r.restore(),r.save(),r.beginPath(),r.rect(s.width/2,0,s.width/2,s.height),r.clip(),r.fillStyle="#FF69B4",r.beginPath(),r.arc(a-l*.85,c-l*.8,u,0,Math.PI*2,!0),r.fill(),r.beginPath(),r.arc(a+l*.85,c-l*.8,u,0,Math.PI*2,!0),r.fill(),r.beginPath(),r.arc(a,c,l,0,Math.PI*2,!0),r.fill(),r.fillStyle="#000000",r.beginPath(),r.arc(a-l*.4,c-l*.2,f,0,Math.PI*2,!0),r.fill(),r.lineWidth=15,r.beginPath(),r.moveTo(a+l*.2,c-l*.3),r.lineTo(a+l*.5,c-l*.05),r.moveTo(a+l*.5,c-l*.3),r.lineTo(a+l*.2,c-l*.05),r.strokeStyle="#000000",r.stroke(),r.fillStyle="#F0E68C",r.beginPath(),r.ellipse(a,c+l*.4,d*1.5,d,0,0,Math.PI*2),r.fill(),r.fillStyle="#000000",r.beginPath(),r.arc(a,c+l*.3,M*1.2,0,Math.PI*2,!0),r.fill(),r.restore()})()}}),(s,r)=>t.value?o0("",!0):(Zt(),nn("div",tE,[Er("canvas",{ref_key:"bearCanvas",ref:e},null,512),Er("button",{onClick:i,class:"pixel-button"},"Enter")]))}}),iE=sn(nE,[["__scopeId","data-v-9cd3b2cf"]]),op=ut(window.matchMedia("only screen and (max-width: 475px)").matches),ap=ut(window.matchMedia("only screen and (max-width: 580px)").matches),cp=ut(window.matchMedia("only screen and (max-width: 670px)").matches),lp=ut(window.matchMedia("only screen and (max-width: 768px)").matches),up=ut(window.matchMedia("only screen and (max-width: 850px)").matches),hp=ut(window.matchMedia("only screen and (max-width: 1024px)").matches),sE=new ResizeObserver(()=>{op.value=window.matchMedia("only screen and (max-width: 475px)").matches,ap.value=window.matchMedia("only screen and (max-width: 580px)").matches,cp.value=window.matchMedia("only screen and (max-width: 670px)").matches,lp.value=window.matchMedia("only screen and (max-width: 768px)").matches,up.value=window.matchMedia("only screen and (max-width: 850px)").matches,hp.value=window.matchMedia("only screen and (max-width: 1024px)").matches});sE.observe(document.documentElement);It(()=>op.value);const ec=It(()=>ap.value);It(()=>lp.value);It(()=>hp.value);It(()=>cp.value);const tc=It(()=>up.value),rE={class:"flex"},oE=Wt({__name:"ThreeScene",setup(n){const e=ut(!0);let t;const i=()=>{e.value=!e.value};return tn(()=>{t=setInterval(()=>{i()},3e3)}),wl(()=>{clearInterval(t)}),(s,r)=>(Zt(),nn("div",rE,[ct(iE,{class:"bear-background"}),ct(sp,{background:!0,cameraPosition:_n(ec)?13:_n(tc)?8:6,bodyPosition:{x:-15,y:0,z:0},class:"bear-page"},null,8,["cameraPosition"]),ct(rp,{background:!0,cameraPosition:_n(ec)?10:_n(tc)?6:4,bodyPosition:{x:-15,y:0,z:0},class:"bear-page"},null,8,["cameraPosition"]),ct(eE,{background:!0,cameraPosition:_n(ec)?13:_n(tc)?8:6,bodyPosition:{x:-18,y:0,z:0},class:"bear-page"},null,8,["cameraPosition"])]))}}),aE=sn(oE,[["__scopeId","data-v-d3ef8993"]]),cE=`
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,lE=`
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
`,uE=Wt({__name:"DiamondBear",setup(n){const e=ut(null);return tn(()=>{const t=new Fn,i=new gt(75,window.innerWidth/window.innerHeight,.1,1e3),s=new Nn({antialias:!0,alpha:!0});s.setSize(window.innerWidth,window.innerHeight),e.value&&e.value.appendChild(s.domElement);const r=new Bn(16777215,5);t.add(r);const o=new On(16777215,20);o.position.set(5,5,5),t.add(o);const a=new St({uniforms:{time:{value:0}},vertexShader:cE,fragmentShader:lE,transparent:!0,opacity:.1}),c=new Je,l=new Me(1,32,32),h=new I(l,a);h.scale.set(.85,.85,.8),h.position.y=-.2,c.add(h);const u=new Me(.6,32,32),f=new I(u,a);f.scale.set(1,.95,.95),f.position.set(0,1,0),c.add(f);const d=new Me(.25,32,32),_=new I(d,a);_.position.set(-.45,1.35,-.1),c.add(_);const M=new I(d,a);M.position.set(.45,1.35,-.1),c.add(M);const m=new Me(.25,32,32),p=new I(m,a);p.scale.set(1,.6,.8),p.position.set(0,.85,.5),c.add(p);const w=new Me(.35,32,32),x=new I(w,a);x.scale.set(.75,1.25,.65),x.position.set(-.7,-.15,.2),c.add(x);const S=new I(w,a);S.scale.set(.75,1.25,.65),S.position.set(.7,-.15,.2),c.add(S);const U=new Me(.3,32,32),C=new I(U,a);C.scale.set(1,.72,1.5),C.position.set(-.4,-1.45,.17),c.add(C);const A=new I(U,a);A.scale.set(1,.72,1.5),A.position.set(.4,-1.45,.17),c.add(A);const F=new fn(.2,.22,.6,32),ne=new I(F,a);ne.position.set(-.4,-1.05,0),c.add(ne);const y=new I(F,a);y.position.set(.4,-1.05,0),c.add(y);const b=new Me(.44,32,32),k=new I(b,a);k.position.set(-.15,-.45,-.4),c.add(k);const z=new I(b,a);z.position.set(.15,-.45,-.4),c.add(z);const Q=new Me(.18,32,32),ie=new I(Q,a);ie.position.set(0,-.35,-.75),c.add(ie);const H=new Dr({color:16738740,metalness:1,roughness:.44}),Z=new Dr({color:16776960,metalness:1,roughness:.44}),B=new Ut;B.moveTo(0,.15),B.lineTo(.1,0),B.lineTo(0,-.15),B.lineTo(-.1,0),B.lineTo(0,.15);const _e={depth:.07,bevelEnabled:!1},me=new kt(B,_e),ge=new I(me,H);ge.position.set(-.25,1,.5),ge.rotation.y=Math.PI/30,c.add(ge);const we=new I(me,Z);we.position.set(.25,1,.5),we.rotation.y=Math.PI/30,c.add(we),t.add(c),i.position.set(0,1,4),i.lookAt(0,0,0);function Re(){requestAnimationFrame(Re),a.uniforms.time.value+=.1,c.rotation.y+=.02,s.render(t,i)}Re(),window.addEventListener("resize",()=>{i.aspect=window.innerWidth/window.innerHeight,i.updateProjectionMatrix(),s.setSize(window.innerWidth,window.innerHeight)})}),(t,i)=>(Zt(),nn("div",{ref_key:"threeCanvas",ref:e,class:"three-container"},null,512))}}),hE=sn(uE,[["__scopeId","data-v-a7796925"]]),ef=`
  varying vec2 vUv;
        void main() {
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
  `,tf=`
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
  `,fE=Wt({__name:"GlassBear",setup(n){const e=ut(null);return tn(()=>{const t=new Fn,i=new gt(75,window.innerWidth/window.innerHeight,.1,1e3),s=new Nn({antialias:!0,alpha:!0});s.setSize(window.innerWidth,window.innerHeight),e.value&&e.value.appendChild(s.domElement);const r=new Bn(16777215,.5);t.add(r);const o=new On(16777215,10);o.position.set(5,5,5),t.add(o);const a=new St({uniforms:{time:{value:0},opacity:{value:.8}},vertexShader:ef,fragmentShader:tf,transparent:!0}),c=new St({uniforms:{time:{value:0},opacity:{value:.6}},vertexShader:ef,fragmentShader:tf,transparent:!0,depthWrite:!1}),l=new Je,h=new Me(1,32,32),u=new I(h,c);u.scale.set(.85,.85,.8),u.position.y=-.2,l.add(u);const f=new Me(.6,32,32),d=new I(f,c);d.scale.set(1,.95,.95),d.position.set(0,1,0),l.add(d);const _=new Me(.25,32,32),M=new I(_,a);M.position.set(-.45,1.35,-.1),l.add(M);const m=new I(_,c);m.position.set(.45,1.35,-.1),l.add(m);const p=new Me(.25,32,32),w=new I(p,a);w.scale.set(1,.6,.8),w.position.set(0,.85,.5),l.add(w);const x=new Me(.35,32,32),S=new I(x,a);S.scale.set(.75,1.25,.65),S.position.set(-.7,-.15,.2),l.add(S);const U=new I(x,a);U.scale.set(.75,1.25,.65),U.position.set(.7,-.15,.2),l.add(U);const C=new Me(.3,32,32),A=new I(C,a);A.scale.set(1,.72,1.5),A.position.set(-.4,-1.45,.17),l.add(A);const F=new I(C,a);F.scale.set(1,.72,1.5),F.position.set(.4,-1.45,.17),l.add(F);const ne=new fn(.2,.22,.6,32),y=new I(ne,a);y.position.set(-.4,-1.05,0),l.add(y);const b=new I(ne,a);b.position.set(.4,-1.05,0),l.add(b);const k=new Me(.44,32,32);new I(k,a).position.set(-.15,-.45,-.4),new I(k,a).position.set(.15,-.45,-.4);const ie=new Me(.18,32,32),H=new I(ie,a);H.position.set(0,-.35,-.75),l.add(H);const Z=new Ut;Z.moveTo(0,0),Z.bezierCurveTo(0,-.3,-.6,-.3,-.6,0),Z.bezierCurveTo(-.6,.3,0,.6,0,1),Z.bezierCurveTo(0,.6,.6,.3,.6,0),Z.bezierCurveTo(.6,-.3,0,-.3,0,0);const B=new Dr({color:8900331,metalness:1,roughness:.44}),_e=new Dr({color:16776960,metalness:1,roughness:.44}),me=new Ut;me.moveTo(0,.15),me.lineTo(.1,0),me.lineTo(0,-.15),me.lineTo(-.1,0),me.lineTo(0,.15);const ge={depth:.07,bevelEnabled:!1},we=new kt(me,ge),Re=new I(we,B);Re.position.set(-.25,1,.5),Re.rotation.y=Math.PI/30,l.add(Re);const te=new I(we,_e);te.position.set(.25,1,.5),te.rotation.y=Math.PI/30,l.add(te),new Xe({color:13369344,metalness:.2,roughness:.6,clearcoat:.1,clearcoatRoughness:.8,transparent:!0,opacity:.99});const he={depth:.4,bevelEnabled:!0,bevelSegments:2,steps:2,bevelSize:.1,bevelThickness:.1},fe=new Xe({color:16777215,metalness:0,roughness:.1,clearcoat:1,clearcoatRoughness:.1,transparent:!0,opacity:.85,reflectivity:1,envMapIntensity:1}),D=new kt(Z,he),se=new I(D,fe);se.scale.set(.5,.5,.5),se.position.set(0,0,0),se.rotation.y=Math.PI,se.rotation.x=Math.PI,l.add(se);const j=new Ut;j.moveTo(0,.6),j.lineTo(.3,.3),j.lineTo(.6,0),j.lineTo(.3,-.3),j.lineTo(0,-.6),j.lineTo(-.3,-.3),j.lineTo(-.6,0),j.lineTo(-.3,.3),j.lineTo(0,.6);const ce={depth:.4,bevelEnabled:!0,bevelSegments:2,steps:2,bevelSize:.1,bevelThickness:.1},ye=new kt(j,ce),J=new Xe({color:16777215,metalness:0,roughness:.1,clearcoat:1,clearcoatRoughness:.1,transparent:!0,opacity:.85,reflectivity:1,envMapIntensity:1}),g=new I(ye,J);g.scale.set(.5,.5,.5),g.position.set(0,0,0),t.add(l),i.position.set(0,1,4),i.lookAt(0,0,0);const T=()=>{requestAnimationFrame(T),a.uniforms.time.value+=.03,l.rotation.y+=.03,s.render(t,i)};T(),window.addEventListener("resize",()=>{i.aspect=window.innerWidth/window.innerHeight,i.updateProjectionMatrix(),s.setSize(window.innerWidth,window.innerHeight)})}),(t,i)=>(Zt(),nn("div",{ref_key:"threeCanvas",ref:e,class:"three-container"},null,512))}}),dE=sn(fE,[["__scopeId","data-v-fa1425bf"]]),pE=Wt({__name:"BluePinkBear",props:{background:{type:Boolean,default:!1},cameraPosition:{type:Number,default:4},bodyPosition:{type:Object,default:()=>({x:0,y:0,z:0})}},setup(n){const e=n,t=ut(null);return tn(()=>{if(t.value){let i=function(){requestAnimationFrame(i),d.rotation.y+=.02,o.render(s,r)};const s=new Fn,r=new gt(75,window.innerWidth/window.innerHeight,.1,1e3),o=new Nn({antialias:!0,alpha:!0});o.setSize(window.innerWidth,window.innerHeight),o.toneMapping=rs,o.toneMappingExposure=1.25,t.value.appendChild(o.domElement);const a=new Bn(16777215,.6);s.add(a);const c=new On(16777215,1.5);c.position.set(5,5,5),s.add(c);const l=new fi(16777215,2,50);l.position.set(0,2,4),s.add(l);const h=new Xe({color:52945,metalness:.2,roughness:.5,clearcoat:.1,clearcoatRoughness:.8,transparent:!0,opacity:.99}),u=new Xe({color:16738740,metalness:.2,roughness:.5,clearcoat:.1,clearcoatRoughness:.8,transparent:!0,opacity:.99}),f=m=>{const p=new Je,w=new Me(1,32,32),x=new I(w,m);x.scale.set(.85,.85,.8),x.position.y=-.2,p.add(x);const S=new Me(.6,32,32),U=new I(S,m);U.scale.set(1,.95,.95),U.position.set(0,1,0),p.add(U);const C=new Me(.25,32,32),A=new I(C,m);A.scale.set(1,.6,.8),A.position.set(0,.85,.5),p.add(A),new di().load("https://threejs.org/examples/fonts/helvetiker_bold.typeface.json",function(ye){const J=new Ft("X",{font:ye,size:.18,depth:.05}),g=new vt({color:0}),T=new I(J,g);T.position.set(-.3,.99,.53),T.rotation.x=Ze.degToRad(-5),T.rotation.y=Ze.degToRad(-15),p.add(T);const L=new Ft("+",{font:ye,size:.25,depth:.1}),O=new vt({color:0}),N=new I(L,O);N.position.set(.14,.99,.53),N.rotation.y=Ze.degToRad(12),N.rotation.x=Ze.degToRad(-5),p.add(N)});const ne=new Ut;ne.moveTo(0,0),ne.bezierCurveTo(0,-.3,-.6,-.3,-.6,0),ne.bezierCurveTo(-.6,.3,0,.6,0,1),ne.bezierCurveTo(0,.6,.6,.3,.6,0),ne.bezierCurveTo(.6,-.3,0,-.3,0,0);const y={depth:.05,bevelEnabled:!0,bevelSegments:2,steps:2,bevelSize:.05,bevelThickness:.05},b=new kt(ne,y),k=new vt({color:0}),z=new I(b,k);z.scale.set(.1,.1,.1),z.rotation.z=Ze.degToRad(210),z.rotation.x=Ze.degToRad(5),z.rotation.y=Ze.degToRad(-45),z.position.set(-.4,.9,.45),p.add(z);const Q=new Me(.25,32,32),ie=new I(Q,h);ie.position.set(-.45,1.35,-.1),p.add(ie);const H=new I(Q,u);H.position.set(.45,1.35,-.1),p.add(H);const Z=new Me(.35,32,32),B=new I(Z,h);B.scale.set(.75,1.25,.65),B.position.set(-.7,-.15,.2),p.add(B);const _e=new I(Z,u);_e.scale.set(.75,1.25,.65),_e.position.set(.7,-.15,.2),p.add(_e);const me=new fn(.2,.22,.6,32),ge=new I(me,h);ge.position.set(-.4,-1.05,0),p.add(ge);const we=new I(me,u);we.position.set(.4,-1.05,0),p.add(we);const Re=new Me(.3,32,32),te=new I(Re,h);te.scale.set(1,.72,1.5),te.position.set(-.4,-1.45,.17),p.add(te);const he=new I(Re,u);he.scale.set(1,.72,1.5),he.position.set(.4,-1.45,.17),p.add(he);const fe=new Me(.44,32,32),D=new I(fe,h);D.position.set(-.15,-.45,-.4),p.add(D);const se=new I(fe,u);se.position.set(.15,-.45,-.4),p.add(se);const j=new Me(.18,32,32),ce=new I(j,m);return ce.position.set(0,-.35,-.8),p.add(ce),p},d=new Je,_=f(h),M=f(u);_.position.x=-.01,M.position.x=.01,d.add(_),d.add(M),s.add(d),r.position.z=4,i(),d.position.set(e.bodyPosition.x,e.bodyPosition.y,e.bodyPosition.z),r.position.set(e.bodyPosition.x,1,e.cameraPosition),r.lookAt(e.bodyPosition.x,0,0)}}),(i,s)=>(Zt(),nn("div",{ref_key:"threeCanvas",ref:t,class:"three-canvas"},null,512))}}),mE=sn(pE,[["__scopeId","data-v-9e6b205d"]]),gE=Wt({__name:"HalfTransparentBear",props:{background:{type:Boolean,default:!1},cameraPosition:{type:Number,default:4},bodyPosition:{type:Object,default:()=>({x:0,y:0,z:0})}},setup(n){const e=n,t=ut(null);return tn(()=>{if(t.value){let i=function(){requestAnimationFrame(i),p.rotation.y+=.03,h.uniforms.time.value+=.04,o.render(s,r)};const s=new Fn,r=new gt(75,window.innerWidth/window.innerHeight,.1,1e3),o=new Nn({antialias:!0,alpha:!0});o.setSize(window.innerWidth,window.innerHeight),o.toneMapping=rs,o.toneMappingExposure=1.25,t.value.appendChild(o.domElement);const a=new Bn(16777215,.6);s.add(a);const c=new On(16777215,1.2);c.position.set(5,5,5),s.add(c);const l=new fi(16777215,2,50);l.position.set(0,2,4),s.add(l);const h=new St({uniforms:{time:{value:0},color1:{value:new Ve(16766720)},color2:{value:new Ve(16007990)}},vertexShader:`
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
        `});new Xe({color:52945,metalness:.2,roughness:.5,clearcoat:.1,clearcoatRoughness:.8,transparent:!0,opacity:.99});const u=new Xe({color:52945,metalness:.2,roughness:.5,clearcoat:.1,clearcoatRoughness:.8,transparent:!0,opacity:.39});new Xe({color:16738740,metalness:.2,roughness:.5,clearcoat:.1,clearcoatRoughness:.8,transparent:!0,opacity:.99}),new Xe({color:52945,metalness:.2,roughness:.5,clearcoat:.1,clearcoatRoughness:.8,transparent:!0,opacity:.99});const f=new Xe({color:13369344,metalness:.2,roughness:.6,clearcoat:.1,clearcoatRoughness:.8,transparent:!0,opacity:.99}),d=`
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
    `,M=new St({uniforms:{time:{value:0},opacity:{value:1}},vertexShader:d,fragmentShader:_,transparent:!0,depthWrite:!1}),m=new St({uniforms:{time:{value:0},opacity:{value:.4}},vertexShader:d,fragmentShader:_,transparent:!0,depthWrite:!1}),p=new Je,w=new Me(1,32,32,0,Math.PI),x=new I(w,m),S=new I(w,M);x.scale.set(.85,.85,.8),S.scale.set(.85,.85,.8),x.position.y=-.2,S.position.y=-.2,x.rotation.y=Math.PI/2,S.rotation.y=Math.PI*1.5;const U=new Dt(1,32),C=new I(U,M);C.scale.set(.85,.85,.8),C.position.set(0,-.2,0),C.rotation.y=Math.PI/2;const A=new Je;A.add(x),A.add(S),A.add(C),p.add(A);const F=new Me(.6,32,32,0,Math.PI),ne=new I(F,M);ne.scale.set(1,.95,.95),ne.position.set(0,1,0),ne.rotation.y=Math.PI*1.5;const y=new I(F,m);y.scale.set(1,.95,.95),y.position.set(0,1,0),y.rotation.y=Math.PI/2;const b=new Dt(.6,32),k=new I(b,M);k.position.set(0,.97,0),k.rotation.y=Math.PI/2;const z=new Je;z.add(ne),z.add(y),z.add(k),p.add(z);const Q=new Me(.25,32,32),ie=new I(Q,M);ie.position.set(-.45,1.35,-.1),p.add(ie);const H=new I(Q,m);H.position.set(.45,1.35,-.1),p.add(H);const Z=new Me(.25,32,32,Math.PI/2,Math.PI),B=new I(Z,M);B.scale.set(1,.6,.8),B.position.set(0,.82,.5),B.rotation.y=Math.PI;const _e=new Me(.25,32,32,Math.PI/2,Math.PI),me=new I(_e,m);me.scale.set(1,.6,.8),me.position.set(0,.82,.5),me.rotation.y=0;const ge=new Dt(.25,32),we=new I(ge,M);we.scale.set(1.25,.6,.8),we.position.set(0,.85,.5),we.rotation.x=Math.PI/2;const Re=new Je;Re.add(B),Re.add(me),Re.add(we),p.add(Re);const te=new Ut;te.moveTo(0,0),te.bezierCurveTo(0,-.3,-.6,-.3,-.6,0),te.bezierCurveTo(-.6,.3,0,.6,0,1),te.bezierCurveTo(0,.6,.6,.3,.6,0),te.bezierCurveTo(.6,-.3,0,-.3,0,0);const he={depth:.4,bevelEnabled:!0,bevelSegments:2,steps:2,bevelSize:.1,bevelThickness:.1};new Xe({color:16777215,metalness:0,roughness:.1,clearcoat:1,clearcoatRoughness:.1,transparent:!0,opacity:.85,reflectivity:1,envMapIntensity:1});const fe=new kt(te,he),D=new I(fe,f);D.scale.set(.5,.5,.5),D.position.set(0,0,0),D.rotation.y=Math.PI,D.rotation.x=Math.PI,p.add(D);const se=new Me(.35,32,32),j=new I(se,M);j.scale.set(.75,1.25,.65),j.position.set(-.7,-.15,.2),p.add(j);const ce=new I(se,m);ce.scale.set(.75,1.25,.65),ce.position.set(.7,-.15,.2),p.add(ce);const ye=new fn(.2,.22,.6,32),J=new I(ye,M);J.position.set(-.4,-1.05,0),p.add(J);const g=new I(ye,m);g.position.set(.4,-1.05,0),p.add(g);const T=new Me(.3,32,32),L=new I(T,M);L.scale.set(1,.72,1.5),L.position.set(-.4,-1.45,.17),p.add(L);const O=new I(T,m);O.scale.set(1,.72,1.5),O.position.set(.4,-1.45,.17),p.add(O);const N=new Me(.44,32,32),K=new I(N,M);K.position.set(-.15,-.45,-.4),p.add(K);const ee=new I(N,u);ee.position.set(.15,-.45,-.4),p.add(ee);const E=new Me(.18,32,32),v=new I(E,f);v.position.set(0,-.35,-.8),p.add(v),new di().load("https://threejs.org/examples/fonts/helvetiker_bold.typeface.json",function(W){const V=new Ft("X",{font:W,size:.18,depth:.05}),q=new vt({color:0}),de=new I(V,q);de.position.set(-.3,.99,.53),de.rotation.x=Ze.degToRad(-5),de.rotation.y=Ze.degToRad(-15),p.add(de);const ue=new Ft("+",{font:W,size:.25,depth:.1}),ve=new vt({color:0}),Ae=new I(ue,ve);Ae.position.set(.14,.99,.53),Ae.rotation.y=Ze.degToRad(12),Ae.rotation.x=Ze.degToRad(-5),p.add(Ae)}),s.add(p),i(),p.position.set(e.bodyPosition.x,e.bodyPosition.y,e.bodyPosition.z),r.position.set(e.bodyPosition.x,1,e.cameraPosition),r.lookAt(e.bodyPosition.x,0,0),bt(()=>e.bodyPosition,W=>{p.position.set(W.x,W.y,W.z)}),bt(()=>e.cameraPosition,W=>{r.position.set(e.bodyPosition.x,1,W),r.lookAt(e.bodyPosition.x,0,0)}),window.addEventListener("resize",()=>{r.aspect=window.innerWidth/window.innerHeight,r.updateProjectionMatrix(),o.setSize(window.innerWidth,window.innerHeight)})}}),(i,s)=>(Zt(),nn("div",{ref_key:"threeCanvas",ref:t,class:Un(n.background?"no-bg":"three-canvas")},null,2))}}),_E=sn(gE,[["__scopeId","data-v-7fbce4ad"]]),vE=Wt({__name:"HalfBlueBear",props:{background:{type:Boolean,default:!1},cameraPosition:{type:Number,default:5},bodyPosition:{type:Object,default:()=>({x:0,y:0,z:0})}},setup(n){const e=n,t=ut(null);return tn(()=>{if(t.value){let i=function(){requestAnimationFrame(i),Se&&(x.rotation.y+=.03),o.render(s,r)};const s=new Fn,r=new gt(75,window.innerWidth/window.innerHeight,.1,1e3),o=new Nn({antialias:!0,alpha:!0});o.setSize(window.innerWidth,window.innerHeight),o.toneMapping=rs,o.toneMappingExposure=1.25,t.value.appendChild(o.domElement);const a=new Bn(16777215,.6);s.add(a);const c=new On(16777215,1.2);c.position.set(5,5,5),s.add(c);const l=new fi(16777215,2,50);l.position.set(0,2,4),s.add(l);const h=new St({uniforms:{time:{value:0},color1:{value:new Ve(16766720)},color2:{value:new Ve(16007990)}},vertexShader:`
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
        `}),u=new Xe({color:52945,metalness:.2,roughness:.5,clearcoat:.1,clearcoatRoughness:.8,transparent:!0,opacity:.99}),f=new Xe({color:52945,metalness:.2,roughness:.5,clearcoat:.1,clearcoatRoughness:.8,transparent:!0,opacity:.35});new Xe({color:13882323,metalness:.7,roughness:.25,clearcoat:.4,clearcoatRoughness:.1,transparent:!1,opacity:1}),new Xe({color:12632256,metalness:1,roughness:.3,clearcoat:.5,clearcoatRoughness:.1,transparent:!0,opacity:.35});const d=new Xe({color:16738740,metalness:.2,roughness:.5,clearcoat:.1,clearcoatRoughness:.8,transparent:!0,opacity:.79}),_=new Xe({color:13369344,metalness:.2,roughness:.6,clearcoat:.1,clearcoatRoughness:.8,transparent:!1,opacity:.99,depthWrite:!0,depthTest:!0}),M=new Xe({color:16738740,metalness:.2,roughness:.6,clearcoat:.1,clearcoatRoughness:.8,transparent:!1,opacity:.99,depthWrite:!0,depthTest:!0}),m=`
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
    `,w=new St({uniforms:{time:{value:0},opacity:{value:1}},vertexShader:m,fragmentShader:p,transparent:!1,depthWrite:!0}),x=new Je,S=new Me(1,32,32,0,Math.PI),U=new I(S,f),C=new I(S,u);U.scale.set(.85,.85,.8),C.scale.set(.85,.85,.8),U.position.y=-.2,C.position.y=-.2,U.rotation.y=Math.PI/2,C.rotation.y=Math.PI*1.5;const A=new Dt(1,32),F=new I(A,u);F.scale.set(.85,.85,.8),F.position.set(0,-.2,0),F.rotation.y=Math.PI/2;const ne=new Je;ne.add(U),ne.add(C),ne.add(F),x.add(ne);const y=new Me(.6,32,32,0,Math.PI),b=new I(y,u);b.scale.set(1,.95,.95),b.position.set(0,1,0),b.rotation.y=Math.PI*1.5;const k=new I(y,f);k.scale.set(1,.95,.95),k.position.set(0,1,0),k.rotation.y=Math.PI/2;const z=new Dt(.6,32),Q=new I(z,u);Q.position.set(0,1,0),Q.rotation.y=Math.PI/2,Q.scale.set(1,.95,.95);const ie=new Je;ie.add(b),ie.add(k),ie.add(Q),x.add(ie);const H=new Me(.25,32,32),Z=new I(H,u);Z.position.set(-.45,1.35,-.1),x.add(Z);const B=new I(H,f);B.position.set(.45,1.35,-.1),x.add(B);const _e=new Me(.25,32,32,Math.PI/2,Math.PI),me=new I(_e,u);me.scale.set(1.1,.6,.8),me.position.set(0,.84,.5),me.rotation.y=Math.PI;const ge=new Me(.25,32,32,Math.PI/2,Math.PI),we=new I(ge,f);we.scale.set(1.1,.6,.8),we.position.set(0,.84,.5),we.rotation.y=0;const Re=new Dt(.25,32),te=new I(Re,u);te.scale.set(.8,.6,.8),te.position.set(0,.84,.5),te.rotation.y=Math.PI/2;const he=new Je;he.add(me),he.add(we),he.add(te),x.add(he);const fe=new Ut;fe.moveTo(0,0),fe.bezierCurveTo(0,-.3,-.6,-.3,-.6,0),fe.bezierCurveTo(-.6,.3,0,.6,0,1),fe.bezierCurveTo(0,.6,.6,.3,.6,0),fe.bezierCurveTo(.6,-.3,0,-.3,0,0);const D={depth:.4,bevelEnabled:!0,bevelSegments:2,steps:2,bevelSize:.1,bevelThickness:.1};new Xe({color:16777215,metalness:0,roughness:.1,clearcoat:1,clearcoatRoughness:.1,transparent:!0,opacity:.85,reflectivity:1,envMapIntensity:1});const se=new kt(fe,D);new vt({color:0});const j=new I(se,d);j.scale.set(.1,.1,.1),j.rotation.z=Ze.degToRad(210),j.rotation.x=Ze.degToRad(5),j.rotation.y=Ze.degToRad(-45),j.position.set(-.4,.9,.45);const ce=new I(se,w);ce.scale.set(.5,.5,.5),ce.position.set(.35,0,0),ce.rotation.y=Math.PI,ce.rotation.x=Math.PI,x.add(ce);const ye=new I(se,h);ye.scale.set(.35,.35,.35),ye.position.set(.3,0,0),ye.rotation.y=Math.PI,ye.rotation.x=Math.PI;const J=new I(se,M);J.scale.set(.25,.25,.25),J.position.set(.27,.2,0),J.rotation.y=Math.PI,J.rotation.x=Math.PI;const g=new I(se,_);g.scale.set(.3,.3,.3),g.position.set(.23,-.5,.3),g.rotation.y=Math.PI,g.rotation.x=Math.PI;const T=new I(se,w);T.scale.set(.4,.4,.4),T.position.set(.27,0,.35),T.rotation.y=Math.PI,T.rotation.x=Math.PI;const L=new Me(.35,32,32),O=new I(L,u);O.scale.set(.75,1.25,.65),O.position.set(-.7,-.15,.2),x.add(O);const N=new I(L,f);N.scale.set(.75,1.25,.65),N.position.set(.7,-.15,.2),x.add(N);const K=new fn(.2,.22,.6,32),ee=new I(K,u);ee.position.set(-.4,-1.05,0),x.add(ee);const E=new I(K,f);E.position.set(.4,-1.05,0),x.add(E);const v=new Me(.3,32,32),P=new I(v,u);P.scale.set(1,.72,1.5),P.position.set(-.4,-1.45,.17),x.add(P);const W=new I(v,f);W.scale.set(1,.72,1.5),W.position.set(.4,-1.45,.17),x.add(W);const V=new Me(.44,32,32),q=new I(V,u);q.position.set(-.15,-.45,-.4),x.add(q);const de=new I(V,f);de.position.set(.15,-.45,-.4),x.add(de);const ue=new Me(.18,32,32),ve=new I(ue,d);ve.position.set(0,-.35,-.8),x.add(ve),new di().load("https://threejs.org/examples/fonts/helvetiker_bold.typeface.json",function(xe){const Be=new Ft("X",{font:xe,size:.18,depth:.05}),Ie=new vt({color:0}),Ge=new I(Be,Ie);Ge.position.set(-.3,.99,.53),Ge.rotation.x=Ze.degToRad(-5),Ge.rotation.y=Ze.degToRad(-15),x.add(Ge);const G=new Ft("+",{font:xe,size:.25,depth:.1}),Le=new vt({color:0}),ae=new I(G,Le);ae.position.set(.14,.99,.53),ae.rotation.y=Ze.degToRad(12),ae.rotation.x=Ze.degToRad(-5),x.add(ae)}),ve.renderOrder=1,x.scale.set(1.2,1.2,1.2),s.add(x),x.position.set(e.bodyPosition.x,e.bodyPosition.y,e.bodyPosition.z),r.position.set(e.bodyPosition.x,1,e.cameraPosition),r.lookAt(e.bodyPosition.x,0,0),r.position.z=4;const pe={x:0,y:0};let Se=!0,De=null;const Ne=xe=>{Se=!1,pe.x=xe.clientX/window.innerWidth*2-1,pe.y=-(xe.clientY/window.innerHeight)*2+1;const Be=pe.x*Math.PI*.2,Ie=pe.y*Math.PI*.2;x.rotation.y=Be,x.rotation.x=Ie,clearTimeout(De),De=setTimeout(()=>{Se=!0},500)};window.addEventListener("mousemove",Ne),h.uniforms.time.value+=.04,i(),bt(()=>e.bodyPosition,xe=>{x.position.set(xe.x,xe.y,xe.z)}),bt(()=>e.cameraPosition,xe=>{r.position.set(e.bodyPosition.x,1,xe),r.lookAt(e.bodyPosition.x,0,0)}),window.addEventListener("resize",()=>{r.aspect=window.innerWidth/window.innerHeight,r.updateProjectionMatrix(),o.setSize(window.innerWidth,window.innerHeight)})}}),(i,s)=>(Zt(),nn("div",{ref_key:"threeCanvas",ref:t,class:Un(n.background?"no-bg":"three-canvas")},null,2))}}),xE=sn(vE,[["__scopeId","data-v-5bf83852"]]),yE=Wt({__name:"SliverBear",props:{background:{type:Boolean,default:!1},cameraPosition:{type:Number,default:5},bodyPosition:{type:Object,default:()=>({x:0,y:0,z:0})}},setup(n){const e=n,t=ut(null);return tn(()=>{if(t.value){let i=function(){c.visible=!1,M.update(a,r),c.visible=!0,requestAnimationFrame(i)},s=function(){requestAnimationFrame(s),G&&(c.rotation.y+=.03),a.render(r,o)};const r=new Fn,o=new gt(75,window.innerWidth/window.innerHeight,.1,1e3),a=new Nn({antialias:!0,alpha:!0});a.setSize(window.innerWidth,window.innerHeight),t.value.appendChild(a.domElement);const c=new Je,l=new Bn(16777215,2);r.add(l);const h=new On(16777215,4);h.position.set(5,5,5),r.add(h);const u=new fi(16777215,5,50);u.position.set(0,2,4),r.add(u);const d=new ql().load("3d-bear-arts/src/assets/gradient_texture.jpg"),_=new Hd(256,{format:xn,generateMipmaps:!0,minFilter:Ri}),M=new Gd(1,1e3,_);new Xe({color:16738740,metalness:1,roughness:.1,clearcoat:1,clearcoatRoughness:.1,envMap:d,envMapIntensity:1.5}),new Xe({color:12632256,metalness:1,roughness:.05,clearcoat:1,clearcoatRoughness:.1,transparent:!0,opacity:.35,envMap:_.texture,envMapIntensity:1.5}),r.add(M),r.environment=_.texture,i();const p=new Ww().load(["https://threejs.org/examples/textures/cube/Park2/posx.jpg","https://threejs.org/examples/textures/cube/Park2/negx.jpg","https://threejs.org/examples/textures/cube/Park2/posy.jpg","https://threejs.org/examples/textures/cube/Park2/negy.jpg","https://threejs.org/examples/textures/cube/Park2/posz.jpg","https://threejs.org/examples/textures/cube/Park2/negz.jpg"]);r.environment=p;const w=new Xe({color:16738740,metalness:1,roughness:.05,clearcoat:1,clearcoatRoughness:.05,envMap:p,reflectivity:1}),x=new Xe({color:16738740,metalness:1,roughness:.05,clearcoat:1,clearcoatRoughness:.05,transparent:!0,opacity:.5,envMap:p,reflectivity:1}),S=new St({uniforms:{time:{value:0},color1:{value:new Ve(16766720)},color2:{value:new Ve(16007990)}},vertexShader:`
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
          `}),U=new Xe({color:16738740,metalness:.2,roughness:.5,clearcoat:.1,clearcoatRoughness:.8,transparent:!0,opacity:.89}),C=new Xe({color:13369344,metalness:.2,roughness:.6,clearcoat:.1,clearcoatRoughness:.8,transparent:!1,opacity:.99,depthWrite:!0,depthTest:!0}),A=new Xe({color:16738740,metalness:.2,roughness:.6,clearcoat:.1,clearcoatRoughness:.8,transparent:!1,opacity:.99,depthWrite:!0,depthTest:!0}),F=`
      varying vec2 vUv;
            void main() {
                vUv = uv;
                gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            }
      `,ne=`
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
      `,y=new St({uniforms:{time:{value:0},opacity:{value:1}},vertexShader:F,fragmentShader:ne,transparent:!1,depthWrite:!0}),b=new Me(1,32,32,0,Math.PI),k=new I(b,x),z=new I(b,w);k.scale.set(.85,.85,.8),z.scale.set(.85,.85,.8),k.position.y=-.2,z.position.y=-.2,k.rotation.y=Math.PI/2,z.rotation.y=Math.PI*1.5;const Q=new Dt(1,32),ie=new I(Q,w);ie.scale.set(.85,.85,.8),ie.position.set(0,-.2,0),ie.rotation.y=Math.PI/2;const H=new Je;H.add(k),H.add(z),H.add(ie),c.add(H);const Z=new Me(.6,32,32,0,Math.PI),B=new I(Z,w);B.scale.set(1,.95,.95),B.position.set(0,1,0),B.rotation.y=Math.PI*1.5;const _e=new I(Z,x);_e.scale.set(1,.95,.95),_e.position.set(0,1,0),_e.rotation.y=Math.PI/2;const me=new Dt(.6,32),ge=new I(me,w);ge.position.set(0,1,0),ge.rotation.y=Math.PI/2,ge.scale.set(1,.95,.95);const we=new Je;we.add(B),we.add(_e),we.add(ge),c.add(we);const Re=new Me(.25,32,32),te=new I(Re,w);te.position.set(-.45,1.35,-.1),c.add(te);const he=new I(Re,x);he.position.set(.45,1.35,-.1),c.add(he);const fe=new Me(.25,32,32,Math.PI/2,Math.PI),D=new I(fe,w);D.scale.set(1.1,.6,.8),D.position.set(0,.84,.5),D.rotation.y=Math.PI;const se=new Me(.25,32,32,Math.PI/2,Math.PI),j=new I(se,x);j.scale.set(1.1,.6,.8),j.position.set(0,.84,.5),j.rotation.y=0;const ce=new Dt(.25,32),ye=new I(ce,w);ye.scale.set(.8,.6,.8),ye.position.set(0,.84,.5),ye.rotation.y=Math.PI/2;const J=new Je;J.add(D),J.add(j),J.add(ye),c.add(J);const g=new Ut;g.moveTo(0,0),g.bezierCurveTo(0,-.3,-.6,-.3,-.6,0),g.bezierCurveTo(-.6,.3,0,.6,0,1),g.bezierCurveTo(0,.6,.6,.3,.6,0),g.bezierCurveTo(.6,-.3,0,-.3,0,0);const T={depth:.4,bevelEnabled:!0,bevelSegments:2,steps:2,bevelSize:.1,bevelThickness:.1};new Xe({color:16777215,metalness:0,roughness:.1,clearcoat:1,clearcoatRoughness:.1,transparent:!0,opacity:.85,reflectivity:1,envMapIntensity:1});const L=new kt(g,T);new vt({color:0});const O=new I(L,U);O.scale.set(.1,.1,.1),O.rotation.z=Ze.degToRad(210),O.rotation.x=Ze.degToRad(5),O.rotation.y=Ze.degToRad(-45),O.position.set(-.4,.9,.45);const N=new I(L,y);N.scale.set(.5,.5,.5),N.position.set(.35,0,0),N.rotation.y=Math.PI,N.rotation.x=Math.PI,c.add(N);const K=new I(L,S);K.scale.set(.35,.35,.35),K.position.set(.3,0,0),K.rotation.y=Math.PI,K.rotation.x=Math.PI,c.add(K);const ee=new I(L,A);ee.scale.set(.25,.25,.25),ee.position.set(.27,.2,0),ee.rotation.y=Math.PI,ee.rotation.x=Math.PI,c.add(ee);const E=new I(L,C);E.scale.set(.3,.3,.3),E.position.set(.23,-.5,.3),E.rotation.y=Math.PI,E.rotation.x=Math.PI,c.add(E);const v=new I(L,y);v.scale.set(.4,.4,.4),v.position.set(.27,0,.35),v.rotation.y=Math.PI,v.rotation.x=Math.PI;const P=new Me(.35,32,32),W=new I(P,w);W.scale.set(.75,1.25,.65),W.position.set(-.7,-.15,.2),c.add(W);const V=new I(P,x);V.scale.set(.75,1.25,.65),V.position.set(.7,-.15,.2),c.add(V);const q=new fn(.2,.22,.6,32),de=new I(q,w);de.position.set(-.4,-1.05,0),c.add(de);const ue=new I(q,x);ue.position.set(.4,-1.05,0),c.add(ue);const ve=new Me(.3,32,32),Ae=new I(ve,w);Ae.scale.set(1,.72,1.5),Ae.position.set(-.4,-1.45,.17),c.add(Ae);const pe=new I(ve,x);pe.scale.set(1,.72,1.5),pe.position.set(.4,-1.45,.17),c.add(pe);const Se=new Me(.44,32,32),De=new I(Se,w);De.position.set(-.15,-.45,-.4),c.add(De);const Ne=new I(Se,x);Ne.position.set(.15,-.45,-.4),c.add(Ne);const xe=new Me(.18,32,32),Be=new I(xe,y);Be.position.set(0,-.35,-.8),c.add(Be),new di().load("https://threejs.org/examples/fonts/helvetiker_bold.typeface.json",function(le){const be=new Ft("X",{font:le,size:.18,depth:.05});new vt({color:0});const Te=new I(be,y);Te.position.set(-.3,.99,.53),Te.rotation.x=Ze.degToRad(-5),Te.rotation.y=Ze.degToRad(-15),c.add(Te);const qe=new Ft("+",{font:le,size:.25,depth:.1});new vt({color:0});const et=new I(qe,y);et.position.set(.14,.99,.53),et.rotation.y=Ze.degToRad(12),et.rotation.x=Ze.degToRad(-5),c.add(et)}),Be.renderOrder=1,c.scale.set(1.2,1.2,1.2),r.add(c),c.position.set(e.bodyPosition.x,e.bodyPosition.y,e.bodyPosition.z),o.position.set(e.bodyPosition.x,1,e.cameraPosition),o.lookAt(e.bodyPosition.x,0,0),o.position.z=4;const Ge={x:0,y:0};let G=!0,Le=null;const ae=le=>{G=!1,Ge.x=le.clientX/window.innerWidth*2-1,Ge.y=-(le.clientY/window.innerHeight)*2+1;const be=Ge.x*Math.PI*.2,Te=Ge.y*Math.PI*.2;c.rotation.y=be,c.rotation.x=Te,clearTimeout(Le),Le=setTimeout(()=>{G=!0},500)};window.addEventListener("mousemove",ae),S.uniforms.time.value+=.04,s(),bt(()=>e.bodyPosition,le=>{c.position.set(le.x,le.y,le.z)}),bt(()=>e.cameraPosition,le=>{o.position.set(e.bodyPosition.x,1,le),o.lookAt(e.bodyPosition.x,0,0)}),window.addEventListener("resize",()=>{o.aspect=window.innerWidth/window.innerHeight,o.updateProjectionMatrix(),a.setSize(window.innerWidth,window.innerHeight)})}}),(i,s)=>(Zt(),nn("div",{ref_key:"threeCanvas",ref:t,class:Un(n.background?"no-bg":"three-canvas")},null,2))}}),ME=sn(yE,[["__scopeId","data-v-c37895d8"]]),SE=Wt({__name:"MetalBear",props:{background:{type:Boolean,default:!1},cameraPosition:{type:Number,default:5},bodyPosition:{type:Object,default:()=>({x:0,y:0,z:0})}},setup(n){const e=n,t=ut(null);let i=null,s=ut(!1),r=ut(!1),o=ut(!1);return tn(()=>{if(t.value){let a=function(){requestAnimationFrame(a),s.value?u.rotation.y+=.03:r.value&&(u.rotation.y-=.03),h.render(c,l)};const c=new Fn,l=new gt(75,window.innerWidth/window.innerHeight,.1,1e3),h=new Nn({antialias:!0,alpha:!0});h.setSize(window.innerWidth,window.innerHeight),t.value.appendChild(h.domElement);const u=new Je,f=new Bn(16777215,2);c.add(f);const d=new On(16777215,4);d.position.set(5,5,5),c.add(d);const _=new fi(16777215,5,50);_.position.set(0,2,4),c.add(_);const M=new ql,m=M.load("/3d-bear-arts/assets/lv2.jpg"),p=M.load("/3d-bear-arts/assets/lv2.jpg");m.wrapS=m.wrapT=es,p.wrapS=p.wrapT=es;const w=new Xe({color:8343336,metalness:0,roughness:.8,bumpMap:m,bumpScale:.1,clearcoat:.2,clearcoatRoughness:.9,map:p,envMapIntensity:.7}),x=new Xe({color:5978654,metalness:0,roughness:.8,bumpMap:m,bumpScale:.1,clearcoat:.2,clearcoatRoughness:.9,map:p,envMapIntensity:.7}),S=new Xe({color:13152668,metalness:.2,roughness:.05,bumpMap:m,bumpScale:.05,clearcoat:1,clearcoatRoughness:.05,map:p,transparent:!0,opacity:.4,transmission:.9,envMapIntensity:1,reflectivity:.9,ior:1.45,side:An});new Xe({color:13421772,metalness:1,roughness:.5,clearcoat:.3,clearcoatRoughness:.3});const U=new Me(1,32,32,0,Math.PI),C=new I(U,S),A=new I(U,w);C.scale.set(.85,.85,.8),A.scale.set(.85,.85,.8),C.position.y=-.2,A.position.y=-.2,C.rotation.y=Math.PI/2,A.rotation.y=Math.PI*1.5;const F=new Dt(1,32),ne=new I(F,w);ne.scale.set(.85,.85,.8),ne.position.set(0,-.2,0),ne.rotation.y=Math.PI/2;const y=new Je;y.add(C),y.add(A),y.add(ne),u.add(y);const b=new Me(.6,32,32,0,Math.PI),k=new I(b,w);k.scale.set(1,.95,.95),k.position.set(0,1,0),k.rotation.y=Math.PI*1.5;const z=new I(b,S);z.scale.set(1,.95,.95),z.position.set(0,1,0),z.rotation.y=Math.PI/2;const Q=new Dt(.6,32),ie=new I(Q,w);ie.position.set(0,1,0),ie.rotation.y=Math.PI/2,ie.scale.set(1,.95,.95);const H=new Je;H.add(k),H.add(z),H.add(ie),u.add(H);const Z=new Me(.25,32,32),B=new I(Z,w);B.position.set(-.45,1.35,-.1),u.add(B);const _e=new I(Z,S);_e.position.set(.45,1.35,-.1),u.add(_e);const me=new Me(.25,32,32,Math.PI/2,Math.PI),ge=new I(me,x);ge.scale.set(1.1,.6,.8),ge.position.set(0,.84,.5),ge.rotation.y=Math.PI;const we=new Me(.25,32,32,Math.PI/2,Math.PI),Re=new I(we,S);Re.scale.set(1.1,.6,.8),Re.position.set(0,.84,.5),Re.rotation.y=0;const te=new Dt(.25,32),he=new I(te,w);he.scale.set(.8,.6,.8),he.position.set(0,.84,.5),he.rotation.y=Math.PI/2;const fe=new Je;fe.add(ge),fe.add(Re),fe.add(he),u.add(fe);const D=new Ut;D.moveTo(0,0),D.bezierCurveTo(0,-.3,-.6,-.3,-.6,0),D.bezierCurveTo(-.6,.3,0,.6,0,1),D.bezierCurveTo(0,.6,.6,.3,.6,0),D.bezierCurveTo(.6,-.3,0,-.3,0,0);const se={depth:.4,bevelEnabled:!0,bevelSegments:2,steps:2,bevelSize:.1,bevelThickness:.1};new Xe({color:16777215,metalness:0,roughness:.1,clearcoat:1,clearcoatRoughness:.1,transparent:!0,opacity:.85,reflectivity:1,envMapIntensity:1});const j=new kt(D,se),ce=new I(j,w);ce.scale.set(.1,.1,.1),ce.rotation.z=Ze.degToRad(210),ce.rotation.x=Ze.degToRad(5),ce.rotation.y=Ze.degToRad(-45),ce.position.set(-.4,.9,.45);const ye=new I(j,x);ye.scale.set(.6,.5,.5),ye.position.set(.35,0,0),ye.rotation.y=Math.PI,ye.rotation.x=Math.PI;const J=new I(j,x);J.scale.set(.2,.2,.2),J.position.set(.5,-.1,.2),J.rotation.y=Math.PI,J.rotation.x=Math.PI,u.add(J);const g=new Ys(1.3,1.2,.6),T=new I(g,w);T.scale.set(.45,.45,.45),T.position.set(.35,-.2,.1),T.rotation.y=Math.PI;const L=new Xl(.15,.025,10,100);new Xe({color:8343336,metalness:.3,roughness:.4,clearcoat:.5});const O=new I(L,w);O.position.set(.35,.1,.1),O.rotation.z=Math.PI/2,O.rotation.x=Math.PI/8,O.rotation.y=Math.PI/14;const N=new I(L,w);N.position.set(.35,.1,.13),N.rotation.z=Math.PI/2,N.rotation.x=Math.PI/-8,N.rotation.y=Math.PI/12;const K=new Je;K.add(T),K.add(O),K.add(N),u.add(K);const ee=new Me(.35,32,32),E=new I(ee,w);E.scale.set(.75,1.25,.65),E.position.set(-.7,-.15,.2),u.add(E);const v=new I(ee,S);v.scale.set(.75,1.25,.65),v.position.set(.7,-.15,.2),u.add(v);const P=new fn(.2,.22,.6,32),W=new I(P,w);W.position.set(-.4,-1.05,0),u.add(W);const V=new I(P,S);V.position.set(.4,-1.05,0),u.add(V);const q=new Me(.3,32,32),de=new I(q,w);de.scale.set(1,.72,1.5),de.position.set(-.4,-1.45,.17),u.add(de);const ue=new I(q,S);ue.scale.set(1,.72,1.5),ue.position.set(.4,-1.45,.17),u.add(ue);const ve=new Me(.44,32,32),Ae=new I(ve,w);Ae.position.set(-.15,-.45,-.4),u.add(Ae);const pe=new I(ve,S);pe.position.set(.15,-.45,-.4),u.add(pe);const Se=new Me(.18,32,32),De=new I(Se,w);De.position.set(0,-.35,-.8),u.add(De),new di().load("https://threejs.org/examples/fonts/helvetiker_bold.typeface.json",function(le){const be=new Ft("X",{font:le,size:.2,depth:.05});new vt({color:0});const Te=new I(be,x);Te.position.set(-.3,.99,.53),Te.rotation.x=Ze.degToRad(-5),Te.rotation.y=Ze.degToRad(-15),u.add(Te);const qe=new Ft("O",{font:le,size:.2,depth:.05});new vt({color:0});const et=new I(qe,x);et.position.set(.14,.99,.53),et.rotation.y=Ze.degToRad(12),et.rotation.x=Ze.degToRad(-5),u.add(et)}),De.renderOrder=1,u.scale.set(1.35,1.35,1.35),c.add(u),u.position.set(e.bodyPosition.x,e.bodyPosition.y,e.bodyPosition.z),l.position.set(e.bodyPosition.x,1,e.cameraPosition),l.lookAt(e.bodyPosition.x,0,0),l.position.z=4;const xe=()=>{u.rotation.y,u.rotation.x},Be=()=>{s.value=!0,r.value=!1,o.value=!1},Ie=()=>{s.value=!1,r.value=!0,o.value=!1},Ge=()=>{s.value=!1,r.value=!1,xe()},G=le=>{const be=window.innerWidth/2;le>be?Be():Ie(),xe()},Le=le=>{clearTimeout(i),Ge(),o.value=!0;const be={x:le.clientX/window.innerWidth*2-1,y:-(le.clientY/window.innerHeight)*2+1};if(o.value){const Te=be.x*Math.PI*.2,qe=be.y*Math.PI*.2;u.rotation.y=Te,u.rotation.x=qe}i=setTimeout(()=>{o.value=!1,G(le.clientX)},500)};window.addEventListener("mousemove",Le);const ae=le=>{if(o.value){const be={x:le.clientX/window.innerWidth*2-1,y:-(le.clientY/window.innerHeight)*2+1},Te=be.x*Math.PI*.2,qe=be.y*Math.PI*.2;u.rotation.y=Te,u.rotation.x=qe}};window.addEventListener("mousemove",ae),a(),bt(()=>e.bodyPosition,le=>{u.position.set(le.x,le.y,le.z)}),bt(()=>e.cameraPosition,le=>{l.position.set(e.bodyPosition.x,1,le),l.lookAt(e.bodyPosition.x,0,0)}),window.addEventListener("resize",()=>{l.aspect=window.innerWidth/window.innerHeight,l.updateProjectionMatrix(),h.setSize(window.innerWidth,window.innerHeight)})}}),(a,c)=>(Zt(),nn("div",{ref_key:"threeCanvas",ref:t,class:Un(n.background?"no-bg":"three-canvas")},null,2))}}),wE=sn(SE,[["__scopeId","data-v-f3beb116"]]),EE=Wt({__name:"PopartBear",props:{background:{type:Boolean,default:!1},cameraPosition:{type:Number,default:5},bodyPosition:{type:Object,default:()=>({x:0,y:0,z:0})}},setup(n){const e=n,t=ut(null);let i=null,s=ut(!1),r=ut(!1),o=ut(!1);return tn(()=>{if(t.value){let a=function(){requestAnimationFrame(a),s.value?u.rotation.y+=.03:r.value&&(u.rotation.y-=.03),h.render(c,l)};const c=new Fn,l=new gt(75,window.innerWidth/window.innerHeight,.1,1e3),h=new Nn({antialias:!0,alpha:!0});h.setSize(window.innerWidth,window.innerHeight),t.value.appendChild(h.domElement);const u=new Je,f=new Bn(16777215,2);c.add(f);const d=new On(16777215,4);d.position.set(5,5,5),c.add(d);const _=new fi(16777215,5,50);_.position.set(0,2,4),c.add(_);const M=new ql,m=M.load("/3d-bear-arts/assets/pop3.jpg"),p=M.load("/3d-bear-arts/assets/pop4.jpg");m.wrapS=m.wrapT=es,m.repeat.set(4,4),p.wrapS=p.wrapT=es,p.repeat.set(4,4);const w=new Xe({color:16716947,map:p,metalness:.5,roughness:.4,clearcoat:.1,clearcoatRoughness:.7}),x=new Xe({color:16716947,map:p,metalness:.3,roughness:.1,clearcoat:1,clearcoatRoughness:.05,transparent:!0,opacity:.4,transmission:.8,ior:1.45,reflectivity:.9,envMapIntensity:1,side:An}),S=new Xe({color:16766720,map:m,metalness:.3,roughness:.5}),U=new Me(1,32,32,0,Math.PI),C=new I(U,x),A=new I(U,w);C.scale.set(.85,.85,.8),A.scale.set(.85,.85,.8),C.position.y=-.2,A.position.y=-.2,C.rotation.y=Math.PI/2,A.rotation.y=Math.PI*1.5;const F=new Dt(1,32),ne=new I(F,w);ne.scale.set(.85,.85,.8),ne.position.set(0,-.2,0),ne.rotation.y=Math.PI/2;const y=new Je;y.add(C),y.add(A),y.add(ne),u.add(y);const b=new Me(.6,32,32,0,Math.PI),k=new I(b,S);k.scale.set(1,.95,.95),k.position.set(0,1,0),k.rotation.y=Math.PI*1.5;const z=new I(b,x);z.scale.set(1,.95,.95),z.position.set(0,1,0),z.rotation.y=Math.PI/2;const Q=new Dt(.6,32),ie=new I(Q,w);ie.position.set(0,1,0),ie.rotation.y=Math.PI/2,ie.scale.set(1,.95,.95);const H=new Je;H.add(k),H.add(z),H.add(ie),u.add(H);const Z=new Me(.25,32,32),B=new I(Z,w);B.position.set(-.45,1.35,-.1),u.add(B);const _e=new I(Z,x);_e.position.set(.45,1.35,-.1),u.add(_e);const me=new Me(.25,32,32,Math.PI/2,Math.PI),ge=new I(me,w);ge.scale.set(1.1,.6,.8),ge.position.set(0,.84,.5),ge.rotation.y=Math.PI;const we=new Me(.25,32,32,Math.PI/2,Math.PI),Re=new I(we,x);Re.scale.set(1.1,.6,.8),Re.position.set(0,.84,.5),Re.rotation.y=0;const te=new Dt(.25,32),he=new I(te,w);he.scale.set(.8,.6,.8),he.position.set(0,.84,.5),he.rotation.y=Math.PI/2;const fe=new Je;fe.add(ge),fe.add(Re),fe.add(he),u.add(fe);const D=new Ut;D.moveTo(0,0),D.bezierCurveTo(0,-.3,-.6,-.3,-.6,0),D.bezierCurveTo(-.6,.3,0,.6,0,1),D.bezierCurveTo(0,.6,.6,.3,.6,0),D.bezierCurveTo(.6,-.3,0,-.3,0,0);const se={depth:.4,bevelEnabled:!0,bevelSegments:2,steps:2,bevelSize:.1,bevelThickness:.1},j=new kt(D,se),ce=new I(j,S);ce.scale.set(.6,.5,.5),ce.position.set(.35,0,0),ce.rotation.y=Math.PI,ce.rotation.x=Math.PI;const ye=new I(j,S);ye.scale.set(.2,.2,.2),ye.position.set(.5,-.1,.2),ye.rotation.y=Math.PI,ye.rotation.x=Math.PI,u.add(ye);const J=new Me(.35,32,32),g=new I(J,S);g.scale.set(.75,1.25,.65),g.position.set(-.7,-.15,.2),u.add(g);const T=new I(J,x);T.scale.set(.75,1.25,.65),T.position.set(.7,-.15,.2),u.add(T);const L=new fn(.2,.22,.6,32),O=new I(L,w);O.position.set(-.4,-1.05,0),u.add(O);const N=new I(L,x);N.position.set(.4,-1.05,0),u.add(N);const K=new Me(.3,32,32),ee=new I(K,w);ee.scale.set(1,.72,1.5),ee.position.set(-.4,-1.45,.17),u.add(ee);const E=new I(K,x);E.scale.set(1,.72,1.5),E.position.set(.4,-1.45,.17),u.add(E);const v=new Me(.44,32,32),P=new I(v,w);P.position.set(-.15,-.45,-.4),u.add(P);const W=new I(v,x);W.position.set(.15,-.45,-.4),u.add(W);const V=new Me(.18,32,32),q=new I(V,w);q.position.set(0,-.35,-.8),u.add(q),new di().load("https://threejs.org/examples/fonts/helvetiker_bold.typeface.json",function(xe){const Be=new Ft("X",{font:xe,size:.2,depth:.05});new vt({color:0});const Ie=new I(Be,S);Ie.position.set(-.3,.99,.53),Ie.rotation.x=Ze.degToRad(-5),Ie.rotation.y=Ze.degToRad(-15),u.add(Ie);const Ge=new Ft("O",{font:xe,size:.2,depth:.05});new vt({color:0});const G=new I(Ge,w);G.position.set(.14,.99,.53),G.rotation.y=Ze.degToRad(12),G.rotation.x=Ze.degToRad(-5),u.add(G)}),q.renderOrder=1,u.scale.set(1.35,1.35,1.35),c.add(u),u.position.set(e.bodyPosition.x,e.bodyPosition.y,e.bodyPosition.z),l.position.set(e.bodyPosition.x,1,e.cameraPosition),l.lookAt(e.bodyPosition.x,0,0),l.position.z=4;const ue=()=>{u.rotation.y,u.rotation.x},ve=()=>{s.value=!0,r.value=!1,o.value=!1},Ae=()=>{s.value=!1,r.value=!0,o.value=!1},pe=()=>{s.value=!1,r.value=!1,ue()},Se=xe=>{const Be=window.innerWidth/2;xe>Be?ve():Ae(),ue()},De=xe=>{clearTimeout(i),pe(),o.value=!0;const Be={x:xe.clientX/window.innerWidth*2-1,y:-(xe.clientY/window.innerHeight)*2+1};if(o.value){const Ie=Be.x*Math.PI*.2,Ge=Be.y*Math.PI*.2;u.rotation.y=Ie,u.rotation.x=Ge}i=setTimeout(()=>{o.value=!1,Se(xe.clientX)},500)};window.addEventListener("mousemove",De);const Ne=xe=>{if(o.value){const Be={x:xe.clientX/window.innerWidth*2-1,y:-(xe.clientY/window.innerHeight)*2+1},Ie=Be.x*Math.PI*.2,Ge=Be.y*Math.PI*.2;u.rotation.y=Ie,u.rotation.x=Ge}};window.addEventListener("mousemove",Ne),a(),bt(()=>e.bodyPosition,xe=>{u.position.set(xe.x,xe.y,xe.z)}),bt(()=>e.cameraPosition,xe=>{l.position.set(e.bodyPosition.x,1,xe),l.lookAt(e.bodyPosition.x,0,0)}),window.addEventListener("resize",()=>{l.aspect=window.innerWidth/window.innerHeight,l.updateProjectionMatrix(),h.setSize(window.innerWidth,window.innerHeight)})}}),(a,c)=>(Zt(),nn("div",{ref_key:"threeCanvas",ref:t,class:Un(n.background?"no-bg":"three-canvas")},null,2))}}),bE=sn(EE,[["__scopeId","data-v-ee77739d"]]),TE=[{path:"/3d-bear-arts",name:"ThreeScene",component:aE},{path:"/3d-bear-arts/half",name:"NewBear",component:xE},{path:"/3d-bear-arts/sliver",name:"SliverBear",component:ME},{path:"/3d-bear-arts/metal",name:"MetalBear",component:wE},{path:"/3d-bear-arts/pop-art",name:"PopArtBear",component:bE},{path:"/3d-bear-arts/halfTransparent",name:"Transparent",component:_E},{path:"/3d-bear-arts/bluePink",name:"BluePinkBear",component:mE},{path:"/3d-bear-arts/diamond",name:"DiamondBear",component:hE},{path:"/3d-bear-arts/pink",name:"PinkBear",component:sp},{path:"/3d-bear-arts/purple",name:"PurpleBear",component:rp},{path:"/3d-bear-arts/glass",name:"GlassBear",component:dE}],AE=qg({history:Sg(),routes:TE}),fp=G0(X0);fp.use(AE);fp.mount("#app");
