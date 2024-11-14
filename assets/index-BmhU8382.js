(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function e(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(s){if(s.ep)return;s.ep=!0;const o=e(s);fetch(s.href,o)}})();/**
* @vue/shared v3.5.10
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Hl(n){const t=Object.create(null);for(const e of n.split(","))t[e]=1;return e=>e in t}const Ie={},oo=[],Mi=()=>{},Lp=()=>!1,Sa=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),kl=n=>n.startsWith("onUpdate:"),cn=Object.assign,Vl=(n,t)=>{const e=n.indexOf(t);e>-1&&n.splice(e,1)},Dp=Object.prototype.hasOwnProperty,we=(n,t)=>Dp.call(n,t),re=Array.isArray,ko=n=>ba(n)==="[object Map]",Up=n=>ba(n)==="[object Set]",se=n=>typeof n=="function",sn=n=>typeof n=="string",bo=n=>typeof n=="symbol",je=n=>n!==null&&typeof n=="object",Ad=n=>(je(n)||se(n))&&se(n.then)&&se(n.catch),Np=Object.prototype.toString,ba=n=>Np.call(n),Fp=n=>ba(n).slice(8,-1),Op=n=>ba(n)==="[object Object]",Wl=n=>sn(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,Vo=Hl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ea=n=>{const t=Object.create(null);return e=>t[e]||(t[e]=n(e))},Bp=/-(\w)/g,Xn=Ea(n=>n.replace(Bp,(t,e)=>e?e.toUpperCase():"")),zp=/\B([A-Z])/g,Us=Ea(n=>n.replace(zp,"-$1").toLowerCase()),Ta=Ea(n=>n.charAt(0).toUpperCase()+n.slice(1)),Wa=Ea(n=>n?`on${Ta(n)}`:""),ls=(n,t)=>!Object.is(n,t),Xa=(n,...t)=>{for(let e=0;e<n.length;e++)n[e](...t)},Rd=(n,t,e,i=!1)=>{Object.defineProperty(n,t,{configurable:!0,enumerable:!1,writable:i,value:e})},Gp=n=>{const t=parseFloat(n);return isNaN(t)?n:t};let Au;const Pd=()=>Au||(Au=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Xl(n){if(re(n)){const t={};for(let e=0;e<n.length;e++){const i=n[e],s=sn(i)?Wp(i):Xl(i);if(s)for(const o in s)t[o]=s[o]}return t}else if(sn(n)||je(n))return n}const Hp=/;(?![^(]*\))/g,kp=/:([^]+)/,Vp=/\/\*[^]*?\*\//g;function Wp(n){const t={};return n.replace(Vp,"").split(Hp).forEach(e=>{if(e){const i=e.split(kp);i.length>1&&(t[i[0].trim()]=i[1].trim())}}),t}function zn(n){let t="";if(sn(n))t=n;else if(re(n))for(let e=0;e<n.length;e++){const i=zn(n[e]);i&&(t+=i+" ")}else if(je(n))for(const e in n)n[e]&&(t+=e+" ");return t.trim()}const Xp="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",qp=Hl(Xp);function Cd(n){return!!n||n===""}/**
* @vue/reactivity v3.5.10
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Nn;class Yp{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Nn,!t&&Nn&&(this.index=(Nn.scopes||(Nn.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,e;if(this.scopes)for(t=0,e=this.scopes.length;t<e;t++)this.scopes[t].pause();for(t=0,e=this.effects.length;t<e;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,e;if(this.scopes)for(t=0,e=this.scopes.length;t<e;t++)this.scopes[t].resume();for(t=0,e=this.effects.length;t<e;t++)this.effects[t].resume()}}run(t){if(this._active){const e=Nn;try{return Nn=this,t()}finally{Nn=e}}}on(){Nn=this}off(){Nn=this.parent}stop(t){if(this._active){let e,i;for(e=0,i=this.effects.length;e<i;e++)this.effects[e].stop();for(e=0,i=this.cleanups.length;e<i;e++)this.cleanups[e]();if(this.scopes)for(e=0,i=this.scopes.length;e<i;e++)this.scopes[e].stop(!0);if(!this.detached&&this.parent&&!t){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function $p(){return Nn}let Ue;const qa=new WeakSet;class Id{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Nn&&Nn.active&&Nn.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,qa.has(this)&&(qa.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Dd(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Ru(this),Ud(this);const t=Ue,e=ai;Ue=this,ai=!0;try{return this.fn()}finally{Nd(this),Ue=t,ai=e,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)$l(t);this.deps=this.depsTail=void 0,Ru(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?qa.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Bc(this)&&this.run()}get dirty(){return Bc(this)}}let Ld=0,eo;function Dd(n){n.flags|=8,n.next=eo,eo=n}function ql(){Ld++}function Yl(){if(--Ld>0)return;let n;for(;eo;){let t=eo,e;for(;t;)t.flags&1||(t.flags&=-9),t=t.next;for(t=eo,eo=void 0;t;){if(e=t.next,t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(i){n||(n=i)}t=e}}if(n)throw n}function Ud(n){for(let t=n.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function Nd(n){let t,e=n.depsTail,i=e;for(;i;){const s=i.prevDep;i.version===-1?(i===e&&(e=s),$l(i),jp(i)):t=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=s}n.deps=t,n.depsTail=e}function Bc(n){for(let t=n.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(Fd(t.dep.computed)||t.dep.version!==t.version))return!0;return!!n._dirty}function Fd(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===er))return;n.globalVersion=er;const t=n.dep;if(n.flags|=2,t.version>0&&!n.isSSR&&n.deps&&!Bc(n)){n.flags&=-3;return}const e=Ue,i=ai;Ue=n,ai=!0;try{Ud(n);const s=n.fn(n._value);(t.version===0||ls(s,n._value))&&(n._value=s,t.version++)}catch(s){throw t.version++,s}finally{Ue=e,ai=i,Nd(n),n.flags&=-3}}function $l(n,t=!1){const{dep:e,prevSub:i,nextSub:s}=n;if(i&&(i.nextSub=s,n.prevSub=void 0),s&&(s.prevSub=i,n.nextSub=void 0),e.subs===n&&(e.subs=i),!e.subs&&e.computed){e.computed.flags&=-5;for(let o=e.computed.deps;o;o=o.nextDep)$l(o,!0)}!t&&!--e.sc&&e.map&&e.map.delete(e.key)}function jp(n){const{prevDep:t,nextDep:e}=n;t&&(t.nextDep=e,n.prevDep=void 0),e&&(e.prevDep=t,n.nextDep=void 0)}let ai=!0;const Od=[];function hs(){Od.push(ai),ai=!1}function ds(){const n=Od.pop();ai=n===void 0?!0:n}function Ru(n){const{cleanup:t}=n;if(n.cleanup=void 0,t){const e=Ue;Ue=void 0;try{t()}finally{Ue=e}}}let er=0;class Kp{constructor(t,e){this.sub=t,this.dep=e,this.version=e.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class jl{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.target=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(t){if(!Ue||!ai||Ue===this.computed)return;let e=this.activeLink;if(e===void 0||e.sub!==Ue)e=this.activeLink=new Kp(Ue,this),Ue.deps?(e.prevDep=Ue.depsTail,Ue.depsTail.nextDep=e,Ue.depsTail=e):Ue.deps=Ue.depsTail=e,Bd(e);else if(e.version===-1&&(e.version=this.version,e.nextDep)){const i=e.nextDep;i.prevDep=e.prevDep,e.prevDep&&(e.prevDep.nextDep=i),e.prevDep=Ue.depsTail,e.nextDep=void 0,Ue.depsTail.nextDep=e,Ue.depsTail=e,Ue.deps===e&&(Ue.deps=i)}return e}trigger(t){this.version++,er++,this.notify(t)}notify(t){ql();try{for(let e=this.subs;e;e=e.prevSub)e.sub.notify()&&e.sub.dep.notify()}finally{Yl()}}}function Bd(n){if(n.dep.sc++,n.sub.flags&4){const t=n.dep.computed;if(t&&!n.dep.subs){t.flags|=20;for(let i=t.deps;i;i=i.nextDep)Bd(i)}const e=n.dep.subs;e!==n&&(n.prevSub=e,e&&(e.nextSub=n)),n.dep.subs=n}}const zc=new WeakMap,Ps=Symbol(""),Gc=Symbol(""),nr=Symbol("");function mn(n,t,e){if(ai&&Ue){let i=zc.get(n);i||zc.set(n,i=new Map);let s=i.get(e);s||(i.set(e,s=new jl),s.target=n,s.map=i,s.key=e),s.track()}}function Wi(n,t,e,i,s,o){const r=zc.get(n);if(!r){er++;return}const a=c=>{c&&c.trigger()};if(ql(),t==="clear")r.forEach(a);else{const c=re(n),l=c&&Wl(e);if(c&&e==="length"){const h=Number(i);r.forEach((u,d)=>{(d==="length"||d===nr||!bo(d)&&d>=h)&&a(u)})}else switch(e!==void 0&&a(r.get(e)),l&&a(r.get(nr)),t){case"add":c?l&&a(r.get("length")):(a(r.get(Ps)),ko(n)&&a(r.get(Gc)));break;case"delete":c||(a(r.get(Ps)),ko(n)&&a(r.get(Gc)));break;case"set":ko(n)&&a(r.get(Ps));break}}Yl()}function Os(n){const t=be(n);return t===n?t:(mn(t,"iterate",nr),ci(n)?t:t.map(yn))}function Kl(n){return mn(n=be(n),"iterate",nr),n}const Zp={__proto__:null,[Symbol.iterator](){return Ya(this,Symbol.iterator,yn)},concat(...n){return Os(this).concat(...n.map(t=>re(t)?Os(t):t))},entries(){return Ya(this,"entries",n=>(n[1]=yn(n[1]),n))},every(n,t){return Ii(this,"every",n,t,void 0,arguments)},filter(n,t){return Ii(this,"filter",n,t,e=>e.map(yn),arguments)},find(n,t){return Ii(this,"find",n,t,yn,arguments)},findIndex(n,t){return Ii(this,"findIndex",n,t,void 0,arguments)},findLast(n,t){return Ii(this,"findLast",n,t,yn,arguments)},findLastIndex(n,t){return Ii(this,"findLastIndex",n,t,void 0,arguments)},forEach(n,t){return Ii(this,"forEach",n,t,void 0,arguments)},includes(...n){return $a(this,"includes",n)},indexOf(...n){return $a(this,"indexOf",n)},join(n){return Os(this).join(n)},lastIndexOf(...n){return $a(this,"lastIndexOf",n)},map(n,t){return Ii(this,"map",n,t,void 0,arguments)},pop(){return Co(this,"pop")},push(...n){return Co(this,"push",n)},reduce(n,...t){return Pu(this,"reduce",n,t)},reduceRight(n,...t){return Pu(this,"reduceRight",n,t)},shift(){return Co(this,"shift")},some(n,t){return Ii(this,"some",n,t,void 0,arguments)},splice(...n){return Co(this,"splice",n)},toReversed(){return Os(this).toReversed()},toSorted(n){return Os(this).toSorted(n)},toSpliced(...n){return Os(this).toSpliced(...n)},unshift(...n){return Co(this,"unshift",n)},values(){return Ya(this,"values",yn)}};function Ya(n,t,e){const i=Kl(n),s=i[t]();return i!==n&&!ci(n)&&(s._next=s.next,s.next=()=>{const o=s._next();return o.value&&(o.value=e(o.value)),o}),s}const Jp=Array.prototype;function Ii(n,t,e,i,s,o){const r=Kl(n),a=r!==n&&!ci(n),c=r[t];if(c!==Jp[t]){const u=c.apply(n,o);return a?yn(u):u}let l=e;r!==n&&(a?l=function(u,d){return e.call(this,yn(u),d,n)}:e.length>2&&(l=function(u,d){return e.call(this,u,d,n)}));const h=c.call(r,l,i);return a&&s?s(h):h}function Pu(n,t,e,i){const s=Kl(n);let o=e;return s!==n&&(ci(n)?e.length>3&&(o=function(r,a,c){return e.call(this,r,a,c,n)}):o=function(r,a,c){return e.call(this,r,yn(a),c,n)}),s[t](o,...i)}function $a(n,t,e){const i=be(n);mn(i,"iterate",nr);const s=i[t](...e);return(s===-1||s===!1)&&tu(e[0])?(e[0]=be(e[0]),i[t](...e)):s}function Co(n,t,e=[]){hs(),ql();const i=be(n)[t].apply(n,e);return Yl(),ds(),i}const Qp=Hl("__proto__,__v_isRef,__isVue"),zd=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(bo));function tm(n){bo(n)||(n=String(n));const t=be(this);return mn(t,"has",n),t.hasOwnProperty(n)}class Gd{constructor(t=!1,e=!1){this._isReadonly=t,this._isShallow=e}get(t,e,i){const s=this._isReadonly,o=this._isShallow;if(e==="__v_isReactive")return!s;if(e==="__v_isReadonly")return s;if(e==="__v_isShallow")return o;if(e==="__v_raw")return i===(s?o?fm:Wd:o?Vd:kd).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(i)?t:void 0;const r=re(t);if(!s){let c;if(r&&(c=Zp[e]))return c;if(e==="hasOwnProperty")return tm}const a=Reflect.get(t,e,pn(t)?t:i);return(bo(e)?zd.has(e):Qp(e))||(s||mn(t,"get",e),o)?a:pn(a)?r&&Wl(e)?a:a.value:je(a)?s?qd(a):Ra(a):a}}class Hd extends Gd{constructor(t=!1){super(!1,t)}set(t,e,i,s){let o=t[e];if(!this._isShallow){const c=Cs(o);if(!ci(i)&&!Cs(i)&&(o=be(o),i=be(i)),!re(t)&&pn(o)&&!pn(i))return c?!1:(o.value=i,!0)}const r=re(t)&&Wl(e)?Number(e)<t.length:we(t,e),a=Reflect.set(t,e,i,pn(t)?t:s);return t===be(s)&&(r?ls(i,o)&&Wi(t,"set",e,i):Wi(t,"add",e,i)),a}deleteProperty(t,e){const i=we(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&i&&Wi(t,"delete",e,void 0),s}has(t,e){const i=Reflect.has(t,e);return(!bo(e)||!zd.has(e))&&mn(t,"has",e),i}ownKeys(t){return mn(t,"iterate",re(t)?"length":Ps),Reflect.ownKeys(t)}}class em extends Gd{constructor(t=!1){super(!0,t)}set(t,e){return!0}deleteProperty(t,e){return!0}}const nm=new Hd,im=new em,sm=new Hd(!0);const Zl=n=>n,Aa=n=>Reflect.getPrototypeOf(n);function Mr(n,t,e=!1,i=!1){n=n.__v_raw;const s=be(n),o=be(t);e||(ls(t,o)&&mn(s,"get",t),mn(s,"get",o));const{has:r}=Aa(s),a=i?Zl:e?eu:yn;if(r.call(s,t))return a(n.get(t));if(r.call(s,o))return a(n.get(o));n!==s&&n.get(t)}function wr(n,t=!1){const e=this.__v_raw,i=be(e),s=be(n);return t||(ls(n,s)&&mn(i,"has",n),mn(i,"has",s)),n===s?e.has(n):e.has(n)||e.has(s)}function Sr(n,t=!1){return n=n.__v_raw,!t&&mn(be(n),"iterate",Ps),Reflect.get(n,"size",n)}function Cu(n,t=!1){!t&&!ci(n)&&!Cs(n)&&(n=be(n));const e=be(this);return Aa(e).has.call(e,n)||(e.add(n),Wi(e,"add",n,n)),this}function Iu(n,t,e=!1){!e&&!ci(t)&&!Cs(t)&&(t=be(t));const i=be(this),{has:s,get:o}=Aa(i);let r=s.call(i,n);r||(n=be(n),r=s.call(i,n));const a=o.call(i,n);return i.set(n,t),r?ls(t,a)&&Wi(i,"set",n,t):Wi(i,"add",n,t),this}function Lu(n){const t=be(this),{has:e,get:i}=Aa(t);let s=e.call(t,n);s||(n=be(n),s=e.call(t,n)),i&&i.call(t,n);const o=t.delete(n);return s&&Wi(t,"delete",n,void 0),o}function Du(){const n=be(this),t=n.size!==0,e=n.clear();return t&&Wi(n,"clear",void 0,void 0),e}function br(n,t){return function(i,s){const o=this,r=o.__v_raw,a=be(r),c=t?Zl:n?eu:yn;return!n&&mn(a,"iterate",Ps),r.forEach((l,h)=>i.call(s,c(l),c(h),o))}}function Er(n,t,e){return function(...i){const s=this.__v_raw,o=be(s),r=ko(o),a=n==="entries"||n===Symbol.iterator&&r,c=n==="keys"&&r,l=s[n](...i),h=e?Zl:t?eu:yn;return!t&&mn(o,"iterate",c?Gc:Ps),{next(){const{value:u,done:d}=l.next();return d?{value:u,done:d}:{value:a?[h(u[0]),h(u[1])]:h(u),done:d}},[Symbol.iterator](){return this}}}}function ji(n){return function(...t){return n==="delete"?!1:n==="clear"?void 0:this}}function om(){const n={get(o){return Mr(this,o)},get size(){return Sr(this)},has:wr,add:Cu,set:Iu,delete:Lu,clear:Du,forEach:br(!1,!1)},t={get(o){return Mr(this,o,!1,!0)},get size(){return Sr(this)},has:wr,add(o){return Cu.call(this,o,!0)},set(o,r){return Iu.call(this,o,r,!0)},delete:Lu,clear:Du,forEach:br(!1,!0)},e={get(o){return Mr(this,o,!0)},get size(){return Sr(this,!0)},has(o){return wr.call(this,o,!0)},add:ji("add"),set:ji("set"),delete:ji("delete"),clear:ji("clear"),forEach:br(!0,!1)},i={get(o){return Mr(this,o,!0,!0)},get size(){return Sr(this,!0)},has(o){return wr.call(this,o,!0)},add:ji("add"),set:ji("set"),delete:ji("delete"),clear:ji("clear"),forEach:br(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(o=>{n[o]=Er(o,!1,!1),e[o]=Er(o,!0,!1),t[o]=Er(o,!1,!0),i[o]=Er(o,!0,!0)}),[n,e,t,i]}const[rm,am,cm,lm]=om();function Jl(n,t){const e=t?n?lm:cm:n?am:rm;return(i,s,o)=>s==="__v_isReactive"?!n:s==="__v_isReadonly"?n:s==="__v_raw"?i:Reflect.get(we(e,s)&&s in i?e:i,s,o)}const um={get:Jl(!1,!1)},hm={get:Jl(!1,!0)},dm={get:Jl(!0,!1)};const kd=new WeakMap,Vd=new WeakMap,Wd=new WeakMap,fm=new WeakMap;function pm(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function mm(n){return n.__v_skip||!Object.isExtensible(n)?0:pm(Fp(n))}function Ra(n){return Cs(n)?n:Ql(n,!1,nm,um,kd)}function Xd(n){return Ql(n,!1,sm,hm,Vd)}function qd(n){return Ql(n,!0,im,dm,Wd)}function Ql(n,t,e,i,s){if(!je(n)||n.__v_raw&&!(t&&n.__v_isReactive))return n;const o=s.get(n);if(o)return o;const r=mm(n);if(r===0)return n;const a=new Proxy(n,r===2?i:e);return s.set(n,a),a}function Wo(n){return Cs(n)?Wo(n.__v_raw):!!(n&&n.__v_isReactive)}function Cs(n){return!!(n&&n.__v_isReadonly)}function ci(n){return!!(n&&n.__v_isShallow)}function tu(n){return n?!!n.__v_raw:!1}function be(n){const t=n&&n.__v_raw;return t?be(t):n}function gm(n){return!we(n,"__v_skip")&&Object.isExtensible(n)&&Rd(n,"__v_skip",!0),n}const yn=n=>je(n)?Ra(n):n,eu=n=>je(n)?qd(n):n;function pn(n){return n?n.__v_isRef===!0:!1}function Kt(n){return Yd(n,!1)}function Xo(n){return Yd(n,!0)}function Yd(n,t){return pn(n)?n:new _m(n,t)}class _m{constructor(t,e){this.dep=new jl,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=e?t:be(t),this._value=e?t:yn(t),this.__v_isShallow=e}get value(){return this.dep.track(),this._value}set value(t){const e=this._rawValue,i=this.__v_isShallow||ci(t)||Cs(t);t=i?t:be(t),ls(t,e)&&(this._rawValue=t,this._value=i?t:yn(t),this.dep.trigger())}}function ro(n){return pn(n)?n.value:n}const vm={get:(n,t,e)=>t==="__v_raw"?n:ro(Reflect.get(n,t,e)),set:(n,t,e,i)=>{const s=n[t];return pn(s)&&!pn(e)?(s.value=e,!0):Reflect.set(n,t,e,i)}};function $d(n){return Wo(n)?n:new Proxy(n,vm)}class xm{constructor(t,e,i){this.fn=t,this.setter=e,this._value=void 0,this.dep=new jl(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=er-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!e,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&Ue!==this)return Dd(this),!0}get value(){const t=this.dep.track();return Fd(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function ym(n,t,e=!1){let i,s;return se(n)?i=n:(i=n.get,s=n.set),new xm(i,s,e)}const Tr={},da=new WeakMap;let ws;function Mm(n,t=!1,e=ws){if(e){let i=da.get(e);i||da.set(e,i=[]),i.push(n)}}function wm(n,t,e=Ie){const{immediate:i,deep:s,once:o,scheduler:r,augmentJob:a,call:c}=e,l=S=>s?S:ci(S)||s===!1||s===0?Hi(S,1):Hi(S);let h,u,d,p,_=!1,y=!1;if(pn(n)?(u=()=>n.value,_=ci(n)):Wo(n)?(u=()=>l(n),_=!0):re(n)?(y=!0,_=n.some(S=>Wo(S)||ci(S)),u=()=>n.map(S=>{if(pn(S))return S.value;if(Wo(S))return l(S);if(se(S))return c?c(S,2):S()})):se(n)?t?u=c?()=>c(n,2):n:u=()=>{if(d){hs();try{d()}finally{ds()}}const S=ws;ws=h;try{return c?c(n,3,[p]):n(p)}finally{ws=S}}:u=Mi,t&&s){const S=u,O=s===!0?1/0:s;u=()=>Hi(S(),O)}const f=$p(),m=()=>{h.stop(),f&&Vl(f.effects,h)};if(o&&t){const S=t;t=(...O)=>{S(...O),m()}}let E=y?new Array(n.length).fill(Tr):Tr;const M=S=>{if(!(!(h.flags&1)||!h.dirty&&!S))if(t){const O=h.run();if(s||_||(y?O.some((I,P)=>ls(I,E[P])):ls(O,E))){d&&d();const I=ws;ws=h;try{const P=[O,E===Tr?void 0:y&&E[0]===Tr?[]:E,p];c?c(t,3,P):t(...P),E=O}finally{ws=I}}}else h.run()};return a&&a(M),h=new Id(u),h.scheduler=r?()=>r(M,!1):M,p=S=>Mm(S,!1,h),d=h.onStop=()=>{const S=da.get(h);if(S){if(c)c(S,4);else for(const O of S)O();da.delete(h)}},t?i?M(!0):E=h.run():r?r(M.bind(null,!0),!0):h.run(),m.pause=h.pause.bind(h),m.resume=h.resume.bind(h),m.stop=m,m}function Hi(n,t=1/0,e){if(t<=0||!je(n)||n.__v_skip||(e=e||new Set,e.has(n)))return n;if(e.add(n),t--,pn(n))Hi(n.value,t,e);else if(re(n))for(let i=0;i<n.length;i++)Hi(n[i],t,e);else if(Up(n)||ko(n))n.forEach(i=>{Hi(i,t,e)});else if(Op(n)){for(const i in n)Hi(n[i],t,e);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&Hi(n[i],t,e)}return n}/**
* @vue/runtime-core v3.5.10
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function gr(n,t,e,i){try{return i?n(...i):n()}catch(s){Pa(s,t,e)}}function Si(n,t,e,i){if(se(n)){const s=gr(n,t,e,i);return s&&Ad(s)&&s.catch(o=>{Pa(o,t,e)}),s}if(re(n)){const s=[];for(let o=0;o<n.length;o++)s.push(Si(n[o],t,e,i));return s}}function Pa(n,t,e,i=!0){const s=t?t.vnode:null,{errorHandler:o,throwUnhandledErrorInProduction:r}=t&&t.appContext.config||Ie;if(t){let a=t.parent;const c=t.proxy,l=`https://vuejs.org/error-reference/#runtime-${e}`;for(;a;){const h=a.ec;if(h){for(let u=0;u<h.length;u++)if(h[u](n,c,l)===!1)return}a=a.parent}if(o){hs(),gr(o,null,10,[n,c,l]),ds();return}}Sm(n,e,s,i,r)}function Sm(n,t,e,i=!0,s=!1){if(s)throw n;console.error(n)}let ir=!1,Hc=!1;const Mn=[];let vi=0;const ao=[];let is=null,Js=0;const jd=Promise.resolve();let nu=null;function Kd(n){const t=nu||jd;return n?t.then(this?n.bind(this):n):t}function bm(n){let t=ir?vi+1:0,e=Mn.length;for(;t<e;){const i=t+e>>>1,s=Mn[i],o=sr(s);o<n||o===n&&s.flags&2?t=i+1:e=i}return t}function iu(n){if(!(n.flags&1)){const t=sr(n),e=Mn[Mn.length-1];!e||!(n.flags&2)&&t>=sr(e)?Mn.push(n):Mn.splice(bm(t),0,n),n.flags|=1,Zd()}}function Zd(){!ir&&!Hc&&(Hc=!0,nu=jd.then(Qd))}function Em(n){re(n)?ao.push(...n):is&&n.id===-1?is.splice(Js+1,0,n):n.flags&1||(ao.push(n),n.flags|=1),Zd()}function Uu(n,t,e=ir?vi+1:0){for(;e<Mn.length;e++){const i=Mn[e];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;Mn.splice(e,1),e--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function Jd(n){if(ao.length){const t=[...new Set(ao)].sort((e,i)=>sr(e)-sr(i));if(ao.length=0,is){is.push(...t);return}for(is=t,Js=0;Js<is.length;Js++){const e=is[Js];e.flags&4&&(e.flags&=-2),e.flags&8||e(),e.flags&=-2}is=null,Js=0}}const sr=n=>n.id==null?n.flags&2?-1:1/0:n.id;function Qd(n){Hc=!1,ir=!0;try{for(vi=0;vi<Mn.length;vi++){const t=Mn[vi];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),gr(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;vi<Mn.length;vi++){const t=Mn[vi];t&&(t.flags&=-2)}vi=0,Mn.length=0,Jd(),ir=!1,nu=null,(Mn.length||ao.length)&&Qd()}}let Fn=null,tf=null;function fa(n){const t=Fn;return Fn=n,tf=n&&n.type.__scopeId||null,t}function gi(n,t=Fn,e){if(!t||n._n)return n;const i=(...s)=>{i._d&&Wu(-1);const o=fa(t);let r;try{r=n(...s)}finally{fa(o),i._d&&Wu(1)}return r};return i._n=!0,i._c=!0,i._d=!0,i}function Tm(n,t){if(Fn===null)return n;const e=Ua(Fn),i=n.dirs||(n.dirs=[]);for(let s=0;s<t.length;s++){let[o,r,a,c=Ie]=t[s];o&&(se(o)&&(o={mounted:o,updated:o}),o.deep&&Hi(r),i.push({dir:o,instance:e,value:r,oldValue:void 0,arg:a,modifiers:c}))}return n}function ps(n,t,e,i){const s=n.dirs,o=t&&t.dirs;for(let r=0;r<s.length;r++){const a=s[r];o&&(a.oldValue=o[r].value);let c=a.dir[i];c&&(hs(),Si(c,e,8,[n.el,a,n,t]),ds())}}const Am=Symbol("_vte"),Rm=n=>n.__isTeleport;function su(n,t){n.shapeFlag&6&&n.component?(n.transition=t,su(n.component.subTree,t)):n.shapeFlag&128?(n.ssContent.transition=t.clone(n.ssContent),n.ssFallback.transition=t.clone(n.ssFallback)):n.transition=t}/*! #__NO_SIDE_EFFECTS__ */function Gn(n,t){return se(n)?cn({name:n.name},t,{setup:n}):n}function ef(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function kc(n,t,e,i,s=!1){if(re(n)){n.forEach((_,y)=>kc(_,t&&(re(t)?t[y]:t),e,i,s));return}if(qo(i)&&!s)return;const o=i.shapeFlag&4?Ua(i.component):i.el,r=s?null:o,{i:a,r:c}=n,l=t&&t.r,h=a.refs===Ie?a.refs={}:a.refs,u=a.setupState,d=be(u),p=u===Ie?()=>!1:_=>we(d,_);if(l!=null&&l!==c&&(sn(l)?(h[l]=null,p(l)&&(u[l]=null)):pn(l)&&(l.value=null)),se(c))gr(c,a,12,[r,h]);else{const _=sn(c),y=pn(c);if(_||y){const f=()=>{if(n.f){const m=_?p(c)?u[c]:h[c]:c.value;s?re(m)&&Vl(m,o):re(m)?m.includes(o)||m.push(o):_?(h[c]=[o],p(c)&&(u[c]=h[c])):(c.value=[o],n.k&&(h[n.k]=c.value))}else _?(h[c]=r,p(c)&&(u[c]=r)):y&&(c.value=r,n.k&&(h[n.k]=r))};r?(f.id=-1,Un(f,e)):f()}}}const qo=n=>!!n.type.__asyncLoader,nf=n=>n.type.__isKeepAlive;function Pm(n,t){sf(n,"a",t)}function Cm(n,t){sf(n,"da",t)}function sf(n,t,e=fn){const i=n.__wdc||(n.__wdc=()=>{let s=e;for(;s;){if(s.isDeactivated)return;s=s.parent}return n()});if(Ca(t,i,e),e){let s=e.parent;for(;s&&s.parent;)nf(s.parent.vnode)&&Im(i,t,e,s),s=s.parent}}function Im(n,t,e,i){const s=Ca(t,n,i,!0);ou(()=>{Vl(i[t],s)},e)}function Ca(n,t,e=fn,i=!1){if(e){const s=e[n]||(e[n]=[]),o=t.__weh||(t.__weh=(...r)=>{hs();const a=_r(e),c=Si(t,e,n,r);return a(),ds(),c});return i?s.unshift(o):s.push(o),o}}const Yi=n=>(t,e=fn)=>{(!Da||n==="sp")&&Ca(n,(...i)=>t(...i),e)},Lm=Yi("bm"),$n=Yi("m"),Dm=Yi("bu"),Um=Yi("u"),Nm=Yi("bum"),ou=Yi("um"),Fm=Yi("sp"),Om=Yi("rtg"),Bm=Yi("rtc");function zm(n,t=fn){Ca("ec",n,t)}const Gm="components";function Nu(n,t){return km(Gm,n,!0,t)||n}const Hm=Symbol.for("v-ndc");function km(n,t,e=!0,i=!1){const s=Fn||fn;if(s){const o=s.type;{const a=P0(o,!1);if(a&&(a===t||a===Xn(t)||a===Ta(Xn(t))))return o}const r=Fu(s[n]||o[n],t)||Fu(s.appContext[n],t);return!r&&i?o:r}}function Fu(n,t){return n&&(n[t]||n[Xn(t)]||n[Ta(Xn(t))])}const Vc=n=>n?Sf(n)?Ua(n):Vc(n.parent):null,Yo=cn(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>Vc(n.parent),$root:n=>Vc(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>ru(n),$forceUpdate:n=>n.f||(n.f=()=>{iu(n.update)}),$nextTick:n=>n.n||(n.n=Kd.bind(n.proxy)),$watch:n=>l0.bind(n)}),ja=(n,t)=>n!==Ie&&!n.__isScriptSetup&&we(n,t),Vm={get({_:n},t){if(t==="__v_skip")return!0;const{ctx:e,setupState:i,data:s,props:o,accessCache:r,type:a,appContext:c}=n;let l;if(t[0]!=="$"){const p=r[t];if(p!==void 0)switch(p){case 1:return i[t];case 2:return s[t];case 4:return e[t];case 3:return o[t]}else{if(ja(i,t))return r[t]=1,i[t];if(s!==Ie&&we(s,t))return r[t]=2,s[t];if((l=n.propsOptions[0])&&we(l,t))return r[t]=3,o[t];if(e!==Ie&&we(e,t))return r[t]=4,e[t];Wc&&(r[t]=0)}}const h=Yo[t];let u,d;if(h)return t==="$attrs"&&mn(n.attrs,"get",""),h(n);if((u=a.__cssModules)&&(u=u[t]))return u;if(e!==Ie&&we(e,t))return r[t]=4,e[t];if(d=c.config.globalProperties,we(d,t))return d[t]},set({_:n},t,e){const{data:i,setupState:s,ctx:o}=n;return ja(s,t)?(s[t]=e,!0):i!==Ie&&we(i,t)?(i[t]=e,!0):we(n.props,t)||t[0]==="$"&&t.slice(1)in n?!1:(o[t]=e,!0)},has({_:{data:n,setupState:t,accessCache:e,ctx:i,appContext:s,propsOptions:o}},r){let a;return!!e[r]||n!==Ie&&we(n,r)||ja(t,r)||(a=o[0])&&we(a,r)||we(i,r)||we(Yo,r)||we(s.config.globalProperties,r)},defineProperty(n,t,e){return e.get!=null?n._.accessCache[t]=0:we(e,"value")&&this.set(n,t,e.value,null),Reflect.defineProperty(n,t,e)}};function Ou(n){return re(n)?n.reduce((t,e)=>(t[e]=null,t),{}):n}let Wc=!0;function Wm(n){const t=ru(n),e=n.proxy,i=n.ctx;Wc=!1,t.beforeCreate&&Bu(t.beforeCreate,n,"bc");const{data:s,computed:o,methods:r,watch:a,provide:c,inject:l,created:h,beforeMount:u,mounted:d,beforeUpdate:p,updated:_,activated:y,deactivated:f,beforeDestroy:m,beforeUnmount:E,destroyed:M,unmounted:S,render:O,renderTracked:I,renderTriggered:P,errorCaptured:U,serverPrefetch:Q,expose:x,inheritAttrs:b,components:j,directives:V,filters:Z}=t;if(l&&Xm(l,i,null),r)for(const J in r){const G=r[J];se(G)&&(i[J]=G.bind(e))}if(s){const J=s.call(e,e);je(J)&&(n.data=Ra(J))}if(Wc=!0,o)for(const J in o){const G=o[J],mt=se(G)?G.bind(e,e):se(G.get)?G.get.bind(e,e):Mi,yt=!se(G)&&se(G.set)?G.set.bind(e):Mi,gt=ni({get:mt,set:yt});Object.defineProperty(i,J,{enumerable:!0,configurable:!0,get:()=>gt.value,set:It=>gt.value=It})}if(a)for(const J in a)of(a[J],i,e,J);if(c){const J=se(c)?c.call(e):c;Reflect.ownKeys(J).forEach(G=>{na(G,J[G])})}h&&Bu(h,n,"c");function W(J,G){re(G)?G.forEach(mt=>J(mt.bind(e))):G&&J(G.bind(e))}if(W(Lm,u),W($n,d),W(Dm,p),W(Um,_),W(Pm,y),W(Cm,f),W(zm,U),W(Bm,I),W(Om,P),W(Nm,E),W(ou,S),W(Fm,Q),re(x))if(x.length){const J=n.exposed||(n.exposed={});x.forEach(G=>{Object.defineProperty(J,G,{get:()=>e[G],set:mt=>e[G]=mt})})}else n.exposed||(n.exposed={});O&&n.render===Mi&&(n.render=O),b!=null&&(n.inheritAttrs=b),j&&(n.components=j),V&&(n.directives=V),Q&&ef(n)}function Xm(n,t,e=Mi){re(n)&&(n=Xc(n));for(const i in n){const s=n[i];let o;je(s)?"default"in s?o=Xi(s.from||i,s.default,!0):o=Xi(s.from||i):o=Xi(s),pn(o)?Object.defineProperty(t,i,{enumerable:!0,configurable:!0,get:()=>o.value,set:r=>o.value=r}):t[i]=o}}function Bu(n,t,e){Si(re(n)?n.map(i=>i.bind(t.proxy)):n.bind(t.proxy),t,e)}function of(n,t,e,i){let s=i.includes(".")?xf(e,i):()=>e[i];if(sn(n)){const o=t[n];se(o)&&Ge(s,o)}else if(se(n))Ge(s,n.bind(e));else if(je(n))if(re(n))n.forEach(o=>of(o,t,e,i));else{const o=se(n.handler)?n.handler.bind(e):t[n.handler];se(o)&&Ge(s,o,n)}}function ru(n){const t=n.type,{mixins:e,extends:i}=t,{mixins:s,optionsCache:o,config:{optionMergeStrategies:r}}=n.appContext,a=o.get(t);let c;return a?c=a:!s.length&&!e&&!i?c=t:(c={},s.length&&s.forEach(l=>pa(c,l,r,!0)),pa(c,t,r)),je(t)&&o.set(t,c),c}function pa(n,t,e,i=!1){const{mixins:s,extends:o}=t;o&&pa(n,o,e,!0),s&&s.forEach(r=>pa(n,r,e,!0));for(const r in t)if(!(i&&r==="expose")){const a=qm[r]||e&&e[r];n[r]=a?a(n[r],t[r]):t[r]}return n}const qm={data:zu,props:Gu,emits:Gu,methods:Go,computed:Go,beforeCreate:_n,created:_n,beforeMount:_n,mounted:_n,beforeUpdate:_n,updated:_n,beforeDestroy:_n,beforeUnmount:_n,destroyed:_n,unmounted:_n,activated:_n,deactivated:_n,errorCaptured:_n,serverPrefetch:_n,components:Go,directives:Go,watch:$m,provide:zu,inject:Ym};function zu(n,t){return t?n?function(){return cn(se(n)?n.call(this,this):n,se(t)?t.call(this,this):t)}:t:n}function Ym(n,t){return Go(Xc(n),Xc(t))}function Xc(n){if(re(n)){const t={};for(let e=0;e<n.length;e++)t[n[e]]=n[e];return t}return n}function _n(n,t){return n?[...new Set([].concat(n,t))]:t}function Go(n,t){return n?cn(Object.create(null),n,t):t}function Gu(n,t){return n?re(n)&&re(t)?[...new Set([...n,...t])]:cn(Object.create(null),Ou(n),Ou(t??{})):t}function $m(n,t){if(!n)return t;if(!t)return n;const e=cn(Object.create(null),n);for(const i in t)e[i]=_n(n[i],t[i]);return e}function rf(){return{app:null,config:{isNativeTag:Lp,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let jm=0;function Km(n,t){return function(i,s=null){se(i)||(i=cn({},i)),s!=null&&!je(s)&&(s=null);const o=rf(),r=new WeakSet,a=[];let c=!1;const l=o.app={_uid:jm++,_component:i,_props:s,_container:null,_context:o,_instance:null,version:I0,get config(){return o.config},set config(h){},use(h,...u){return r.has(h)||(h&&se(h.install)?(r.add(h),h.install(l,...u)):se(h)&&(r.add(h),h(l,...u))),l},mixin(h){return o.mixins.includes(h)||o.mixins.push(h),l},component(h,u){return u?(o.components[h]=u,l):o.components[h]},directive(h,u){return u?(o.directives[h]=u,l):o.directives[h]},mount(h,u,d){if(!c){const p=l._ceVNode||$e(i,s);return p.appContext=o,d===!0?d="svg":d===!1&&(d=void 0),u&&t?t(p,h):n(p,h,d),c=!0,l._container=h,h.__vue_app__=l,Ua(p.component)}},onUnmount(h){a.push(h)},unmount(){c&&(Si(a,l._instance,16),n(null,l._container),delete l._container.__vue_app__)},provide(h,u){return o.provides[h]=u,l},runWithContext(h){const u=co;co=l;try{return h()}finally{co=u}}};return l}}let co=null;function na(n,t){if(fn){let e=fn.provides;const i=fn.parent&&fn.parent.provides;i===e&&(e=fn.provides=Object.create(i)),e[n]=t}}function Xi(n,t,e=!1){const i=fn||Fn;if(i||co){const s=co?co._context.provides:i?i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(s&&n in s)return s[n];if(arguments.length>1)return e&&se(t)?t.call(i&&i.proxy):t}}const af={},cf=()=>Object.create(af),lf=n=>Object.getPrototypeOf(n)===af;function Zm(n,t,e,i=!1){const s={},o=cf();n.propsDefaults=Object.create(null),uf(n,t,s,o);for(const r in n.propsOptions[0])r in s||(s[r]=void 0);e?n.props=i?s:Xd(s):n.type.props?n.props=s:n.props=o,n.attrs=o}function Jm(n,t,e,i){const{props:s,attrs:o,vnode:{patchFlag:r}}=n,a=be(s),[c]=n.propsOptions;let l=!1;if((i||r>0)&&!(r&16)){if(r&8){const h=n.vnode.dynamicProps;for(let u=0;u<h.length;u++){let d=h[u];if(Ia(n.emitsOptions,d))continue;const p=t[d];if(c)if(we(o,d))p!==o[d]&&(o[d]=p,l=!0);else{const _=Xn(d);s[_]=qc(c,a,_,p,n,!1)}else p!==o[d]&&(o[d]=p,l=!0)}}}else{uf(n,t,s,o)&&(l=!0);let h;for(const u in a)(!t||!we(t,u)&&((h=Us(u))===u||!we(t,h)))&&(c?e&&(e[u]!==void 0||e[h]!==void 0)&&(s[u]=qc(c,a,u,void 0,n,!0)):delete s[u]);if(o!==a)for(const u in o)(!t||!we(t,u))&&(delete o[u],l=!0)}l&&Wi(n.attrs,"set","")}function uf(n,t,e,i){const[s,o]=n.propsOptions;let r=!1,a;if(t)for(let c in t){if(Vo(c))continue;const l=t[c];let h;s&&we(s,h=Xn(c))?!o||!o.includes(h)?e[h]=l:(a||(a={}))[h]=l:Ia(n.emitsOptions,c)||(!(c in i)||l!==i[c])&&(i[c]=l,r=!0)}if(o){const c=be(e),l=a||Ie;for(let h=0;h<o.length;h++){const u=o[h];e[u]=qc(s,c,u,l[u],n,!we(l,u))}}return r}function qc(n,t,e,i,s,o){const r=n[e];if(r!=null){const a=we(r,"default");if(a&&i===void 0){const c=r.default;if(r.type!==Function&&!r.skipFactory&&se(c)){const{propsDefaults:l}=s;if(e in l)i=l[e];else{const h=_r(s);i=l[e]=c.call(null,t),h()}}else i=c;s.ce&&s.ce._setProp(e,i)}r[0]&&(o&&!a?i=!1:r[1]&&(i===""||i===Us(e))&&(i=!0))}return i}const Qm=new WeakMap;function hf(n,t,e=!1){const i=e?Qm:t.propsCache,s=i.get(n);if(s)return s;const o=n.props,r={},a=[];let c=!1;if(!se(n)){const h=u=>{c=!0;const[d,p]=hf(u,t,!0);cn(r,d),p&&a.push(...p)};!e&&t.mixins.length&&t.mixins.forEach(h),n.extends&&h(n.extends),n.mixins&&n.mixins.forEach(h)}if(!o&&!c)return je(n)&&i.set(n,oo),oo;if(re(o))for(let h=0;h<o.length;h++){const u=Xn(o[h]);Hu(u)&&(r[u]=Ie)}else if(o)for(const h in o){const u=Xn(h);if(Hu(u)){const d=o[h],p=r[u]=re(d)||se(d)?{type:d}:cn({},d),_=p.type;let y=!1,f=!0;if(re(_))for(let m=0;m<_.length;++m){const E=_[m],M=se(E)&&E.name;if(M==="Boolean"){y=!0;break}else M==="String"&&(f=!1)}else y=se(_)&&_.name==="Boolean";p[0]=y,p[1]=f,(y||we(p,"default"))&&a.push(u)}}const l=[r,a];return je(n)&&i.set(n,l),l}function Hu(n){return n[0]!=="$"&&!Vo(n)}const df=n=>n[0]==="_"||n==="$stable",au=n=>re(n)?n.map(xi):[xi(n)],t0=(n,t,e)=>{if(t._n)return t;const i=gi((...s)=>au(t(...s)),e);return i._c=!1,i},ff=(n,t,e)=>{const i=n._ctx;for(const s in n){if(df(s))continue;const o=n[s];if(se(o))t[s]=t0(s,o,i);else if(o!=null){const r=au(o);t[s]=()=>r}}},pf=(n,t)=>{const e=au(t);n.slots.default=()=>e},mf=(n,t,e)=>{for(const i in t)(e||i!=="_")&&(n[i]=t[i])},e0=(n,t,e)=>{const i=n.slots=cf();if(n.vnode.shapeFlag&32){const s=t._;s?(mf(i,t,e),e&&Rd(i,"_",s,!0)):ff(t,i)}else t&&pf(n,t)},n0=(n,t,e)=>{const{vnode:i,slots:s}=n;let o=!0,r=Ie;if(i.shapeFlag&32){const a=t._;a?e&&a===1?o=!1:mf(s,t,e):(o=!t.$stable,ff(t,s)),r=t}else t&&(pf(n,t),r={default:1});if(o)for(const a in s)!df(a)&&r[a]==null&&delete s[a]},Un=g0;function i0(n){return s0(n)}function s0(n,t){const e=Pd();e.__VUE__=!0;const{insert:i,remove:s,patchProp:o,createElement:r,createText:a,createComment:c,setText:l,setElementText:h,parentNode:u,nextSibling:d,setScopeId:p=Mi,insertStaticContent:_}=n,y=(g,T,L,N=null,D=null,X=null,K=void 0,w=null,v=!!T.dynamicChildren)=>{if(g===T)return;g&&!Io(g,T)&&(N=F(g),It(g,D,X,!0),g=null),T.patchFlag===-2&&(v=!1,T.dynamicChildren=null);const{type:C,ref:k,shapeFlag:z}=T;switch(C){case La:f(g,T,L,N);break;case or:m(g,T,L,N);break;case Ja:g==null&&E(T,L,N,K);break;case dn:j(g,T,L,N,D,X,K,w,v);break;default:z&1?O(g,T,L,N,D,X,K,w,v):z&6?V(g,T,L,N,D,X,K,w,v):(z&64||z&128)&&C.process(g,T,L,N,D,X,K,w,v,lt)}k!=null&&D&&kc(k,g&&g.ref,X,T||g,!T)},f=(g,T,L,N)=>{if(g==null)i(T.el=a(T.children),L,N);else{const D=T.el=g.el;T.children!==g.children&&l(D,T.children)}},m=(g,T,L,N)=>{g==null?i(T.el=c(T.children||""),L,N):T.el=g.el},E=(g,T,L,N)=>{[g.el,g.anchor]=_(g.children,T,L,N,g.el,g.anchor)},M=({el:g,anchor:T},L,N)=>{let D;for(;g&&g!==T;)D=d(g),i(g,L,N),g=D;i(T,L,N)},S=({el:g,anchor:T})=>{let L;for(;g&&g!==T;)L=d(g),s(g),g=L;s(T)},O=(g,T,L,N,D,X,K,w,v)=>{T.type==="svg"?K="svg":T.type==="math"&&(K="mathml"),g==null?I(T,L,N,D,X,K,w,v):Q(g,T,D,X,K,w,v)},I=(g,T,L,N,D,X,K,w)=>{let v,C;const{props:k,shapeFlag:z,transition:H,dirs:ht}=g;if(v=g.el=r(g.type,X,k&&k.is,k),z&8?h(v,g.children):z&16&&U(g.children,v,null,N,D,Ka(g,X),K,w),ht&&ps(g,null,N,"created"),P(v,g,g.scopeId,K,N),k){for(const pt in k)pt!=="value"&&!Vo(pt)&&o(v,pt,null,k[pt],X,N);"value"in k&&o(v,"value",null,k.value,X),(C=k.onVnodeBeforeMount)&&mi(C,N,g)}ht&&ps(g,null,N,"beforeMount");const ut=o0(D,H);ut&&H.beforeEnter(v),i(v,T,L),((C=k&&k.onVnodeMounted)||ut||ht)&&Un(()=>{C&&mi(C,N,g),ut&&H.enter(v),ht&&ps(g,null,N,"mounted")},D)},P=(g,T,L,N,D)=>{if(L&&p(g,L),N)for(let X=0;X<N.length;X++)p(g,N[X]);if(D){let X=D.subTree;if(T===X||Mf(X.type)&&(X.ssContent===T||X.ssFallback===T)){const K=D.vnode;P(g,K,K.scopeId,K.slotScopeIds,D.parent)}}},U=(g,T,L,N,D,X,K,w,v=0)=>{for(let C=v;C<g.length;C++){const k=g[C]=w?ss(g[C]):xi(g[C]);y(null,k,T,L,N,D,X,K,w)}},Q=(g,T,L,N,D,X,K)=>{const w=T.el=g.el;let{patchFlag:v,dynamicChildren:C,dirs:k}=T;v|=g.patchFlag&16;const z=g.props||Ie,H=T.props||Ie;let ht;if(L&&ms(L,!1),(ht=H.onVnodeBeforeUpdate)&&mi(ht,L,T,g),k&&ps(T,g,L,"beforeUpdate"),L&&ms(L,!0),(z.innerHTML&&H.innerHTML==null||z.textContent&&H.textContent==null)&&h(w,""),C?x(g.dynamicChildren,C,w,L,N,Ka(T,D),X):K||G(g,T,w,null,L,N,Ka(T,D),X,!1),v>0){if(v&16)b(w,z,H,L,D);else if(v&2&&z.class!==H.class&&o(w,"class",null,H.class,D),v&4&&o(w,"style",z.style,H.style,D),v&8){const ut=T.dynamicProps;for(let pt=0;pt<ut.length;pt++){const Tt=ut[pt],dt=z[Tt],xt=H[Tt];(xt!==dt||Tt==="value")&&o(w,Tt,dt,xt,D,L)}}v&1&&g.children!==T.children&&h(w,T.children)}else!K&&C==null&&b(w,z,H,L,D);((ht=H.onVnodeUpdated)||k)&&Un(()=>{ht&&mi(ht,L,T,g),k&&ps(T,g,L,"updated")},N)},x=(g,T,L,N,D,X,K)=>{for(let w=0;w<T.length;w++){const v=g[w],C=T[w],k=v.el&&(v.type===dn||!Io(v,C)||v.shapeFlag&70)?u(v.el):L;y(v,C,k,null,N,D,X,K,!0)}},b=(g,T,L,N,D)=>{if(T!==L){if(T!==Ie)for(const X in T)!Vo(X)&&!(X in L)&&o(g,X,T[X],null,D,N);for(const X in L){if(Vo(X))continue;const K=L[X],w=T[X];K!==w&&X!=="value"&&o(g,X,w,K,D,N)}"value"in L&&o(g,"value",T.value,L.value,D)}},j=(g,T,L,N,D,X,K,w,v)=>{const C=T.el=g?g.el:a(""),k=T.anchor=g?g.anchor:a("");let{patchFlag:z,dynamicChildren:H,slotScopeIds:ht}=T;ht&&(w=w?w.concat(ht):ht),g==null?(i(C,L,N),i(k,L,N),U(T.children||[],L,k,D,X,K,w,v)):z>0&&z&64&&H&&g.dynamicChildren?(x(g.dynamicChildren,H,L,D,X,K,w),(T.key!=null||D&&T===D.subTree)&&gf(g,T,!0)):G(g,T,L,k,D,X,K,w,v)},V=(g,T,L,N,D,X,K,w,v)=>{T.slotScopeIds=w,g==null?T.shapeFlag&512?D.ctx.activate(T,L,N,K,v):Z(T,L,N,D,X,K,v):at(g,T,v)},Z=(g,T,L,N,D,X,K)=>{const w=g.component=b0(g,N,D);if(nf(g)&&(w.ctx.renderer=lt),E0(w,!1,K),w.asyncDep){if(D&&D.registerDep(w,W,K),!g.el){const v=w.subTree=$e(or);m(null,v,T,L)}}else W(w,g,T,L,D,X,K)},at=(g,T,L)=>{const N=T.component=g.component;if(p0(g,T,L))if(N.asyncDep&&!N.asyncResolved){J(N,T,L);return}else N.next=T,N.update();else T.el=g.el,N.vnode=T},W=(g,T,L,N,D,X,K)=>{const w=()=>{if(g.isMounted){let{next:z,bu:H,u:ht,parent:ut,vnode:pt}=g;{const Dt=_f(g);if(Dt){z&&(z.el=pt.el,J(g,z,K)),Dt.asyncDep.then(()=>{g.isUnmounted||w()});return}}let Tt=z,dt;ms(g,!1),z?(z.el=pt.el,J(g,z,K)):z=pt,H&&Xa(H),(dt=z.props&&z.props.onVnodeBeforeUpdate)&&mi(dt,ut,z,pt),ms(g,!0);const xt=Za(g),Pt=g.subTree;g.subTree=xt,y(Pt,xt,u(Pt.el),F(Pt),g,D,X),z.el=xt.el,Tt===null&&m0(g,xt.el),ht&&Un(ht,D),(dt=z.props&&z.props.onVnodeUpdated)&&Un(()=>mi(dt,ut,z,pt),D)}else{let z;const{el:H,props:ht}=T,{bm:ut,m:pt,parent:Tt,root:dt,type:xt}=g,Pt=qo(T);if(ms(g,!1),ut&&Xa(ut),!Pt&&(z=ht&&ht.onVnodeBeforeMount)&&mi(z,Tt,T),ms(g,!0),H&&tt){const Dt=()=>{g.subTree=Za(g),tt(H,g.subTree,g,D,null)};Pt&&xt.__asyncHydrate?xt.__asyncHydrate(H,g,Dt):Dt()}else{dt.ce&&dt.ce._injectChildStyle(xt);const Dt=g.subTree=Za(g);y(null,Dt,L,N,g,D,X),T.el=Dt.el}if(pt&&Un(pt,D),!Pt&&(z=ht&&ht.onVnodeMounted)){const Dt=T;Un(()=>mi(z,Tt,Dt),D)}(T.shapeFlag&256||Tt&&qo(Tt.vnode)&&Tt.vnode.shapeFlag&256)&&g.a&&Un(g.a,D),g.isMounted=!0,T=L=N=null}};g.scope.on();const v=g.effect=new Id(w);g.scope.off();const C=g.update=v.run.bind(v),k=g.job=v.runIfDirty.bind(v);k.i=g,k.id=g.uid,v.scheduler=()=>iu(k),ms(g,!0),C()},J=(g,T,L)=>{T.component=g;const N=g.vnode.props;g.vnode=T,g.next=null,Jm(g,T.props,N,L),n0(g,T.children,L),hs(),Uu(g),ds()},G=(g,T,L,N,D,X,K,w,v=!1)=>{const C=g&&g.children,k=g?g.shapeFlag:0,z=T.children,{patchFlag:H,shapeFlag:ht}=T;if(H>0){if(H&128){yt(C,z,L,N,D,X,K,w,v);return}else if(H&256){mt(C,z,L,N,D,X,K,w,v);return}}ht&8?(k&16&&vt(C,D,X),z!==C&&h(L,z)):k&16?ht&16?yt(C,z,L,N,D,X,K,w,v):vt(C,D,X,!0):(k&8&&h(L,""),ht&16&&U(z,L,N,D,X,K,w,v))},mt=(g,T,L,N,D,X,K,w,v)=>{g=g||oo,T=T||oo;const C=g.length,k=T.length,z=Math.min(C,k);let H;for(H=0;H<z;H++){const ht=T[H]=v?ss(T[H]):xi(T[H]);y(g[H],ht,L,null,D,X,K,w,v)}C>k?vt(g,D,X,!0,!1,z):U(T,L,N,D,X,K,w,v,z)},yt=(g,T,L,N,D,X,K,w,v)=>{let C=0;const k=T.length;let z=g.length-1,H=k-1;for(;C<=z&&C<=H;){const ht=g[C],ut=T[C]=v?ss(T[C]):xi(T[C]);if(Io(ht,ut))y(ht,ut,L,null,D,X,K,w,v);else break;C++}for(;C<=z&&C<=H;){const ht=g[z],ut=T[H]=v?ss(T[H]):xi(T[H]);if(Io(ht,ut))y(ht,ut,L,null,D,X,K,w,v);else break;z--,H--}if(C>z){if(C<=H){const ht=H+1,ut=ht<k?T[ht].el:N;for(;C<=H;)y(null,T[C]=v?ss(T[C]):xi(T[C]),L,ut,D,X,K,w,v),C++}}else if(C>H)for(;C<=z;)It(g[C],D,X,!0),C++;else{const ht=C,ut=C,pt=new Map;for(C=ut;C<=H;C++){const Ut=T[C]=v?ss(T[C]):xi(T[C]);Ut.key!=null&&pt.set(Ut.key,C)}let Tt,dt=0;const xt=H-ut+1;let Pt=!1,Dt=0;const Et=new Array(xt);for(C=0;C<xt;C++)Et[C]=0;for(C=ht;C<=z;C++){const Ut=g[C];if(dt>=xt){It(Ut,D,X,!0);continue}let kt;if(Ut.key!=null)kt=pt.get(Ut.key);else for(Tt=ut;Tt<=H;Tt++)if(Et[Tt-ut]===0&&Io(Ut,T[Tt])){kt=Tt;break}kt===void 0?It(Ut,D,X,!0):(Et[kt-ut]=C+1,kt>=Dt?Dt=kt:Pt=!0,y(Ut,T[kt],L,null,D,X,K,w,v),dt++)}const Ht=Pt?r0(Et):oo;for(Tt=Ht.length-1,C=xt-1;C>=0;C--){const Ut=ut+C,kt=T[Ut],B=Ut+1<k?T[Ut+1].el:N;Et[C]===0?y(null,kt,L,B,D,X,K,w,v):Pt&&(Tt<0||C!==Ht[Tt]?gt(kt,L,B,2):Tt--)}}},gt=(g,T,L,N,D=null)=>{const{el:X,type:K,transition:w,children:v,shapeFlag:C}=g;if(C&6){gt(g.component.subTree,T,L,N);return}if(C&128){g.suspense.move(T,L,N);return}if(C&64){K.move(g,T,L,lt);return}if(K===dn){i(X,T,L);for(let z=0;z<v.length;z++)gt(v[z],T,L,N);i(g.anchor,T,L);return}if(K===Ja){M(g,T,L);return}if(N!==2&&C&1&&w)if(N===0)w.beforeEnter(X),i(X,T,L),Un(()=>w.enter(X),D);else{const{leave:z,delayLeave:H,afterLeave:ht}=w,ut=()=>i(X,T,L),pt=()=>{z(X,()=>{ut(),ht&&ht()})};H?H(X,ut,pt):pt()}else i(X,T,L)},It=(g,T,L,N=!1,D=!1)=>{const{type:X,props:K,ref:w,children:v,dynamicChildren:C,shapeFlag:k,patchFlag:z,dirs:H,cacheIndex:ht}=g;if(z===-2&&(D=!1),w!=null&&kc(w,null,L,g,!0),ht!=null&&(T.renderCache[ht]=void 0),k&256){T.ctx.deactivate(g);return}const ut=k&1&&H,pt=!qo(g);let Tt;if(pt&&(Tt=K&&K.onVnodeBeforeUnmount)&&mi(Tt,T,g),k&6)ft(g.component,L,N);else{if(k&128){g.suspense.unmount(L,N);return}ut&&ps(g,null,T,"beforeUnmount"),k&64?g.type.remove(g,T,L,lt,N):C&&!C.hasOnce&&(X!==dn||z>0&&z&64)?vt(C,T,L,!1,!0):(X===dn&&z&384||!D&&k&16)&&vt(v,T,L),N&&zt(g)}(pt&&(Tt=K&&K.onVnodeUnmounted)||ut)&&Un(()=>{Tt&&mi(Tt,T,g),ut&&ps(g,null,T,"unmounted")},L)},zt=g=>{const{type:T,el:L,anchor:N,transition:D}=g;if(T===dn){rt(L,N);return}if(T===Ja){S(g);return}const X=()=>{s(L),D&&!D.persisted&&D.afterLeave&&D.afterLeave()};if(g.shapeFlag&1&&D&&!D.persisted){const{leave:K,delayLeave:w}=D,v=()=>K(L,X);w?w(g.el,X,v):v()}else X()},rt=(g,T)=>{let L;for(;g!==T;)L=d(g),s(g),g=L;s(T)},ft=(g,T,L)=>{const{bum:N,scope:D,job:X,subTree:K,um:w,m:v,a:C}=g;ku(v),ku(C),N&&Xa(N),D.stop(),X&&(X.flags|=8,It(K,g,T,L)),w&&Un(w,T),Un(()=>{g.isUnmounted=!0},T),T&&T.pendingBranch&&!T.isUnmounted&&g.asyncDep&&!g.asyncResolved&&g.suspenseId===T.pendingId&&(T.deps--,T.deps===0&&T.resolve())},vt=(g,T,L,N=!1,D=!1,X=0)=>{for(let K=X;K<g.length;K++)It(g[K],T,L,N,D)},F=g=>{if(g.shapeFlag&6)return F(g.component.subTree);if(g.shapeFlag&128)return g.suspense.next();const T=d(g.anchor||g.el),L=T&&T[Am];return L?d(L):T};let ct=!1;const it=(g,T,L)=>{g==null?T._vnode&&It(T._vnode,null,null,!0):y(T._vnode||null,g,T,null,null,null,L),T._vnode=g,ct||(ct=!0,Uu(),Jd(),ct=!1)},lt={p:y,um:It,m:gt,r:zt,mt:Z,mc:U,pc:G,pbc:x,n:F,o:n};let bt,tt;return{render:it,hydrate:bt,createApp:Km(it,bt)}}function Ka({type:n,props:t},e){return e==="svg"&&n==="foreignObject"||e==="mathml"&&n==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:e}function ms({effect:n,job:t},e){e?(n.flags|=32,t.flags|=4):(n.flags&=-33,t.flags&=-5)}function o0(n,t){return(!n||n&&!n.pendingBranch)&&t&&!t.persisted}function gf(n,t,e=!1){const i=n.children,s=t.children;if(re(i)&&re(s))for(let o=0;o<i.length;o++){const r=i[o];let a=s[o];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[o]=ss(s[o]),a.el=r.el),!e&&a.patchFlag!==-2&&gf(r,a)),a.type===La&&(a.el=r.el)}}function r0(n){const t=n.slice(),e=[0];let i,s,o,r,a;const c=n.length;for(i=0;i<c;i++){const l=n[i];if(l!==0){if(s=e[e.length-1],n[s]<l){t[i]=s,e.push(i);continue}for(o=0,r=e.length-1;o<r;)a=o+r>>1,n[e[a]]<l?o=a+1:r=a;l<n[e[o]]&&(o>0&&(t[i]=e[o-1]),e[o]=i)}}for(o=e.length,r=e[o-1];o-- >0;)e[o]=r,r=t[r];return e}function _f(n){const t=n.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:_f(t)}function ku(n){if(n)for(let t=0;t<n.length;t++)n[t].flags|=8}const a0=Symbol.for("v-scx"),c0=()=>Xi(a0);function Ge(n,t,e){return vf(n,t,e)}function vf(n,t,e=Ie){const{immediate:i,deep:s,flush:o,once:r}=e,a=cn({},e);let c;if(Da)if(o==="sync"){const d=c0();c=d.__watcherHandles||(d.__watcherHandles=[])}else if(!t||i)a.once=!0;else{const d=()=>{};return d.stop=Mi,d.resume=Mi,d.pause=Mi,d}const l=fn;a.call=(d,p,_)=>Si(d,l,p,_);let h=!1;o==="post"?a.scheduler=d=>{Un(d,l&&l.suspense)}:o!=="sync"&&(h=!0,a.scheduler=(d,p)=>{p?d():iu(d)}),a.augmentJob=d=>{t&&(d.flags|=4),h&&(d.flags|=2,l&&(d.id=l.uid,d.i=l))};const u=wm(n,t,a);return c&&c.push(u),u}function l0(n,t,e){const i=this.proxy,s=sn(n)?n.includes(".")?xf(i,n):()=>i[n]:n.bind(i,i);let o;se(t)?o=t:(o=t.handler,e=t);const r=_r(this),a=vf(s,o.bind(i),e);return r(),a}function xf(n,t){const e=t.split(".");return()=>{let i=n;for(let s=0;s<e.length&&i;s++)i=i[e[s]];return i}}const u0=(n,t)=>t==="modelValue"||t==="model-value"?n.modelModifiers:n[`${t}Modifiers`]||n[`${Xn(t)}Modifiers`]||n[`${Us(t)}Modifiers`];function h0(n,t,...e){if(n.isUnmounted)return;const i=n.vnode.props||Ie;let s=e;const o=t.startsWith("update:"),r=o&&u0(i,t.slice(7));r&&(r.trim&&(s=e.map(h=>sn(h)?h.trim():h)),r.number&&(s=e.map(Gp)));let a,c=i[a=Wa(t)]||i[a=Wa(Xn(t))];!c&&o&&(c=i[a=Wa(Us(t))]),c&&Si(c,n,6,s);const l=i[a+"Once"];if(l){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,Si(l,n,6,s)}}function yf(n,t,e=!1){const i=t.emitsCache,s=i.get(n);if(s!==void 0)return s;const o=n.emits;let r={},a=!1;if(!se(n)){const c=l=>{const h=yf(l,t,!0);h&&(a=!0,cn(r,h))};!e&&t.mixins.length&&t.mixins.forEach(c),n.extends&&c(n.extends),n.mixins&&n.mixins.forEach(c)}return!o&&!a?(je(n)&&i.set(n,null),null):(re(o)?o.forEach(c=>r[c]=null):cn(r,o),je(n)&&i.set(n,r),r)}function Ia(n,t){return!n||!Sa(t)?!1:(t=t.slice(2).replace(/Once$/,""),we(n,t[0].toLowerCase()+t.slice(1))||we(n,Us(t))||we(n,t))}function Za(n){const{type:t,vnode:e,proxy:i,withProxy:s,propsOptions:[o],slots:r,attrs:a,emit:c,render:l,renderCache:h,props:u,data:d,setupState:p,ctx:_,inheritAttrs:y}=n,f=fa(n);let m,E;try{if(e.shapeFlag&4){const S=s||i,O=S;m=xi(l.call(O,S,h,u,p,d,_)),E=a}else{const S=t;m=xi(S.length>1?S(u,{attrs:a,slots:r,emit:c}):S(u,null)),E=t.props?a:d0(a)}}catch(S){$o.length=0,Pa(S,n,1),m=$e(or)}let M=m;if(E&&y!==!1){const S=Object.keys(E),{shapeFlag:O}=M;S.length&&O&7&&(o&&S.some(kl)&&(E=f0(E,o)),M=mo(M,E,!1,!0))}return e.dirs&&(M=mo(M,null,!1,!0),M.dirs=M.dirs?M.dirs.concat(e.dirs):e.dirs),e.transition&&su(M,e.transition),m=M,fa(f),m}const d0=n=>{let t;for(const e in n)(e==="class"||e==="style"||Sa(e))&&((t||(t={}))[e]=n[e]);return t},f0=(n,t)=>{const e={};for(const i in n)(!kl(i)||!(i.slice(9)in t))&&(e[i]=n[i]);return e};function p0(n,t,e){const{props:i,children:s,component:o}=n,{props:r,children:a,patchFlag:c}=t,l=o.emitsOptions;if(t.dirs||t.transition)return!0;if(e&&c>=0){if(c&1024)return!0;if(c&16)return i?Vu(i,r,l):!!r;if(c&8){const h=t.dynamicProps;for(let u=0;u<h.length;u++){const d=h[u];if(r[d]!==i[d]&&!Ia(l,d))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:i===r?!1:i?r?Vu(i,r,l):!0:!!r;return!1}function Vu(n,t,e){const i=Object.keys(t);if(i.length!==Object.keys(n).length)return!0;for(let s=0;s<i.length;s++){const o=i[s];if(t[o]!==n[o]&&!Ia(e,o))return!0}return!1}function m0({vnode:n,parent:t},e){for(;t;){const i=t.subTree;if(i.suspense&&i.suspense.activeBranch===n&&(i.el=n.el),i===n)(n=t.vnode).el=e,t=t.parent;else break}}const Mf=n=>n.__isSuspense;function g0(n,t){t&&t.pendingBranch?re(n)?t.effects.push(...n):t.effects.push(n):Em(n)}const dn=Symbol.for("v-fgt"),La=Symbol.for("v-txt"),or=Symbol.for("v-cmt"),Ja=Symbol.for("v-stc"),$o=[];let On=null;function ui(n=!1){$o.push(On=n?null:[])}function _0(){$o.pop(),On=$o[$o.length-1]||null}let rr=1;function Wu(n){rr+=n,n<0&&On&&(On.hasOnce=!0)}function v0(n){return n.dynamicChildren=rr>0?On||oo:null,_0(),rr>0&&On&&On.push(n),n}function hi(n,t,e,i,s,o){return v0(Vt(n,t,e,i,s,o,!0))}function ma(n){return n?n.__v_isVNode===!0:!1}function Io(n,t){return n.type===t.type&&n.key===t.key}const wf=({key:n})=>n??null,ia=({ref:n,ref_key:t,ref_for:e})=>(typeof n=="number"&&(n=""+n),n!=null?sn(n)||pn(n)||se(n)?{i:Fn,r:n,k:t,f:!!e}:n:null);function Vt(n,t=null,e=null,i=0,s=null,o=n===dn?0:1,r=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:n,props:t,key:t&&wf(t),ref:t&&ia(t),scopeId:tf,slotScopeIds:null,children:e,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Fn};return a?(cu(c,e),o&128&&n.normalize(c)):e&&(c.shapeFlag|=sn(e)?8:16),rr>0&&!r&&On&&(c.patchFlag>0||o&6)&&c.patchFlag!==32&&On.push(c),c}const $e=x0;function x0(n,t=null,e=null,i=0,s=null,o=!1){if((!n||n===Hm)&&(n=or),ma(n)){const a=mo(n,t,!0);return e&&cu(a,e),rr>0&&!o&&On&&(a.shapeFlag&6?On[On.indexOf(n)]=a:On.push(a)),a.patchFlag=-2,a}if(C0(n)&&(n=n.__vccOpts),t){t=y0(t);let{class:a,style:c}=t;a&&!sn(a)&&(t.class=zn(a)),je(c)&&(tu(c)&&!re(c)&&(c=cn({},c)),t.style=Xl(c))}const r=sn(n)?1:Mf(n)?128:Rm(n)?64:je(n)?4:se(n)?2:0;return Vt(n,t,e,i,s,r,o,!0)}function y0(n){return n?tu(n)||lf(n)?cn({},n):n:null}function mo(n,t,e=!1,i=!1){const{props:s,ref:o,patchFlag:r,children:a,transition:c}=n,l=t?M0(s||{},t):s,h={__v_isVNode:!0,__v_skip:!0,type:n.type,props:l,key:l&&wf(l),ref:t&&t.ref?e&&o?re(o)?o.concat(ia(t)):[o,ia(t)]:ia(t):o,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:t&&n.type!==dn?r===-1?16:r|16:r,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:c,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&mo(n.ssContent),ssFallback:n.ssFallback&&mo(n.ssFallback),el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return c&&i&&su(h,c.clone(h)),h}function _i(n=" ",t=0){return $e(La,null,n,t)}function xi(n){return n==null||typeof n=="boolean"?$e(or):re(n)?$e(dn,null,n.slice()):ma(n)?ss(n):$e(La,null,String(n))}function ss(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:mo(n)}function cu(n,t){let e=0;const{shapeFlag:i}=n;if(t==null)t=null;else if(re(t))e=16;else if(typeof t=="object")if(i&65){const s=t.default;s&&(s._c&&(s._d=!1),cu(n,s()),s._c&&(s._d=!0));return}else{e=32;const s=t._;!s&&!lf(t)?t._ctx=Fn:s===3&&Fn&&(Fn.slots._===1?t._=1:(t._=2,n.patchFlag|=1024))}else se(t)?(t={default:t,_ctx:Fn},e=32):(t=String(t),i&64?(e=16,t=[_i(t)]):e=8);n.children=t,n.shapeFlag|=e}function M0(...n){const t={};for(let e=0;e<n.length;e++){const i=n[e];for(const s in i)if(s==="class")t.class!==i.class&&(t.class=zn([t.class,i.class]));else if(s==="style")t.style=Xl([t.style,i.style]);else if(Sa(s)){const o=t[s],r=i[s];r&&o!==r&&!(re(o)&&o.includes(r))&&(t[s]=o?[].concat(o,r):r)}else s!==""&&(t[s]=i[s])}return t}function mi(n,t,e,i=null){Si(n,t,7,[e,i])}const w0=rf();let S0=0;function b0(n,t,e){const i=n.type,s=(t?t.appContext:n.appContext)||w0,o={uid:S0++,vnode:n,type:i,parent:t,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Yp(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(s.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:hf(i,s),emitsOptions:yf(i,s),emit:null,emitted:null,propsDefaults:Ie,inheritAttrs:i.inheritAttrs,ctx:Ie,data:Ie,props:Ie,attrs:Ie,slots:Ie,refs:Ie,setupState:Ie,setupContext:null,suspense:e,suspenseId:e?e.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return o.ctx={_:o},o.root=t?t.root:o,o.emit=h0.bind(null,o),n.ce&&n.ce(o),o}let fn=null,ga,Yc;{const n=Pd(),t=(e,i)=>{let s;return(s=n[e])||(s=n[e]=[]),s.push(i),o=>{s.length>1?s.forEach(r=>r(o)):s[0](o)}};ga=t("__VUE_INSTANCE_SETTERS__",e=>fn=e),Yc=t("__VUE_SSR_SETTERS__",e=>Da=e)}const _r=n=>{const t=fn;return ga(n),n.scope.on(),()=>{n.scope.off(),ga(t)}},Xu=()=>{fn&&fn.scope.off(),ga(null)};function Sf(n){return n.vnode.shapeFlag&4}let Da=!1;function E0(n,t=!1,e=!1){t&&Yc(t);const{props:i,children:s}=n.vnode,o=Sf(n);Zm(n,i,o,t),e0(n,s,e);const r=o?T0(n,t):void 0;return t&&Yc(!1),r}function T0(n,t){const e=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,Vm);const{setup:i}=e;if(i){const s=n.setupContext=i.length>1?R0(n):null,o=_r(n);hs();const r=gr(i,n,0,[n.props,s]);if(ds(),o(),Ad(r)){if(qo(n)||ef(n),r.then(Xu,Xu),t)return r.then(a=>{qu(n,a,t)}).catch(a=>{Pa(a,n,0)});n.asyncDep=r}else qu(n,r,t)}else bf(n,t)}function qu(n,t,e){se(t)?n.type.__ssrInlineRender?n.ssrRender=t:n.render=t:je(t)&&(n.setupState=$d(t)),bf(n,e)}let Yu;function bf(n,t,e){const i=n.type;if(!n.render){if(!t&&Yu&&!i.render){const s=i.template||ru(n).template;if(s){const{isCustomElement:o,compilerOptions:r}=n.appContext.config,{delimiters:a,compilerOptions:c}=i,l=cn(cn({isCustomElement:o,delimiters:a},r),c);i.render=Yu(s,l)}}n.render=i.render||Mi}{const s=_r(n);hs();try{Wm(n)}finally{ds(),s()}}}const A0={get(n,t){return mn(n,"get",""),n[t]}};function R0(n){const t=e=>{n.exposed=e||{}};return{attrs:new Proxy(n.attrs,A0),slots:n.slots,emit:n.emit,expose:t}}function Ua(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy($d(gm(n.exposed)),{get(t,e){if(e in t)return t[e];if(e in Yo)return Yo[e](n)},has(t,e){return e in t||e in Yo}})):n.proxy}function P0(n,t=!0){return se(n)?n.displayName||n.name:n.name||t&&n.__name}function C0(n){return se(n)&&"__vccOpts"in n}const ni=(n,t)=>ym(n,t,Da);function Ef(n,t,e){const i=arguments.length;return i===2?je(t)&&!re(t)?ma(t)?$e(n,null,[t]):$e(n,t):$e(n,null,t):(i>3?e=Array.prototype.slice.call(arguments,2):i===3&&ma(e)&&(e=[e]),$e(n,t,e))}const I0="3.5.10";/**
* @vue/runtime-dom v3.5.10
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let $c;const $u=typeof window<"u"&&window.trustedTypes;if($u)try{$c=$u.createPolicy("vue",{createHTML:n=>n})}catch{}const Tf=$c?n=>$c.createHTML(n):n=>n,L0="http://www.w3.org/2000/svg",D0="http://www.w3.org/1998/Math/MathML",Gi=typeof document<"u"?document:null,ju=Gi&&Gi.createElement("template"),U0={insert:(n,t,e)=>{t.insertBefore(n,e||null)},remove:n=>{const t=n.parentNode;t&&t.removeChild(n)},createElement:(n,t,e,i)=>{const s=t==="svg"?Gi.createElementNS(L0,n):t==="mathml"?Gi.createElementNS(D0,n):e?Gi.createElement(n,{is:e}):Gi.createElement(n);return n==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:n=>Gi.createTextNode(n),createComment:n=>Gi.createComment(n),setText:(n,t)=>{n.nodeValue=t},setElementText:(n,t)=>{n.textContent=t},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>Gi.querySelector(n),setScopeId(n,t){n.setAttribute(t,"")},insertStaticContent(n,t,e,i,s,o){const r=e?e.previousSibling:t.lastChild;if(s&&(s===o||s.nextSibling))for(;t.insertBefore(s.cloneNode(!0),e),!(s===o||!(s=s.nextSibling)););else{ju.innerHTML=Tf(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const a=ju.content;if(i==="svg"||i==="mathml"){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}t.insertBefore(a,e)}return[r?r.nextSibling:t.firstChild,e?e.previousSibling:t.lastChild]}},N0=Symbol("_vtc");function F0(n,t,e){const i=n[N0];i&&(t=(t?[t,...i]:[...i]).join(" ")),t==null?n.removeAttribute("class"):e?n.setAttribute("class",t):n.className=t}const _a=Symbol("_vod"),Af=Symbol("_vsh"),O0={beforeMount(n,{value:t},{transition:e}){n[_a]=n.style.display==="none"?"":n.style.display,e&&t?e.beforeEnter(n):Lo(n,t)},mounted(n,{value:t},{transition:e}){e&&t&&e.enter(n)},updated(n,{value:t,oldValue:e},{transition:i}){!t!=!e&&(i?t?(i.beforeEnter(n),Lo(n,!0),i.enter(n)):i.leave(n,()=>{Lo(n,!1)}):Lo(n,t))},beforeUnmount(n,{value:t}){Lo(n,t)}};function Lo(n,t){n.style.display=t?n[_a]:"none",n[Af]=!t}const B0=Symbol(""),z0=/(^|;)\s*display\s*:/;function G0(n,t,e){const i=n.style,s=sn(e);let o=!1;if(e&&!s){if(t)if(sn(t))for(const r of t.split(";")){const a=r.slice(0,r.indexOf(":")).trim();e[a]==null&&sa(i,a,"")}else for(const r in t)e[r]==null&&sa(i,r,"");for(const r in e)r==="display"&&(o=!0),sa(i,r,e[r])}else if(s){if(t!==e){const r=i[B0];r&&(e+=";"+r),i.cssText=e,o=z0.test(e)}}else t&&n.removeAttribute("style");_a in n&&(n[_a]=o?i.display:"",n[Af]&&(i.display="none"))}const Ku=/\s*!important$/;function sa(n,t,e){if(re(e))e.forEach(i=>sa(n,t,i));else if(e==null&&(e=""),t.startsWith("--"))n.setProperty(t,e);else{const i=H0(n,t);Ku.test(e)?n.setProperty(Us(i),e.replace(Ku,""),"important"):n[i]=e}}const Zu=["Webkit","Moz","ms"],Qa={};function H0(n,t){const e=Qa[t];if(e)return e;let i=Xn(t);if(i!=="filter"&&i in n)return Qa[t]=i;i=Ta(i);for(let s=0;s<Zu.length;s++){const o=Zu[s]+i;if(o in n)return Qa[t]=o}return t}const Ju="http://www.w3.org/1999/xlink";function Qu(n,t,e,i,s,o=qp(t)){i&&t.startsWith("xlink:")?e==null?n.removeAttributeNS(Ju,t.slice(6,t.length)):n.setAttributeNS(Ju,t,e):e==null||o&&!Cd(e)?n.removeAttribute(t):n.setAttribute(t,o?"":bo(e)?String(e):e)}function th(n,t,e,i){if(t==="innerHTML"||t==="textContent"){e!=null&&(n[t]=t==="innerHTML"?Tf(e):e);return}const s=n.tagName;if(t==="value"&&s!=="PROGRESS"&&!s.includes("-")){const r=s==="OPTION"?n.getAttribute("value")||"":n.value,a=e==null?n.type==="checkbox"?"on":"":String(e);(r!==a||!("_value"in n))&&(n.value=a),e==null&&n.removeAttribute(t),n._value=e;return}let o=!1;if(e===""||e==null){const r=typeof n[t];r==="boolean"?e=Cd(e):e==null&&r==="string"?(e="",o=!0):r==="number"&&(e=0,o=!0)}try{n[t]=e}catch{}o&&n.removeAttribute(t)}function k0(n,t,e,i){n.addEventListener(t,e,i)}function V0(n,t,e,i){n.removeEventListener(t,e,i)}const eh=Symbol("_vei");function W0(n,t,e,i,s=null){const o=n[eh]||(n[eh]={}),r=o[t];if(i&&r)r.value=i;else{const[a,c]=X0(t);if(i){const l=o[t]=$0(i,s);k0(n,a,l,c)}else r&&(V0(n,a,r,c),o[t]=void 0)}}const nh=/(?:Once|Passive|Capture)$/;function X0(n){let t;if(nh.test(n)){t={};let i;for(;i=n.match(nh);)n=n.slice(0,n.length-i[0].length),t[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):Us(n.slice(2)),t]}let tc=0;const q0=Promise.resolve(),Y0=()=>tc||(q0.then(()=>tc=0),tc=Date.now());function $0(n,t){const e=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=e.attached)return;Si(j0(i,e.value),t,5,[i])};return e.value=n,e.attached=Y0(),e}function j0(n,t){if(re(t)){const e=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{e.call(n),n._stopped=!0},t.map(i=>s=>!s._stopped&&i&&i(s))}else return t}const ih=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,K0=(n,t,e,i,s,o)=>{const r=s==="svg";t==="class"?F0(n,i,r):t==="style"?G0(n,e,i):Sa(t)?kl(t)||W0(n,t,e,i,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Z0(n,t,i,r))?(th(n,t,i),!n.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&Qu(n,t,i,r,o,t!=="value")):n._isVueCE&&(/[A-Z]/.test(t)||!sn(i))?th(n,Xn(t),i):(t==="true-value"?n._trueValue=i:t==="false-value"&&(n._falseValue=i),Qu(n,t,i,r))};function Z0(n,t,e,i){if(i)return!!(t==="innerHTML"||t==="textContent"||t in n&&ih(t)&&se(e));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&n.tagName==="INPUT"||t==="type"&&n.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const s=n.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return ih(t)&&sn(e)?!1:t in n}const J0=cn({patchProp:K0},U0);let sh;function Q0(){return sh||(sh=i0(J0))}const tg=(...n)=>{const t=Q0().createApp(...n),{mount:e}=t;return t.mount=i=>{const s=ng(i);if(!s)return;const o=t._component;!se(o)&&!o.render&&!o.template&&(o.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const r=e(s,!1,eg(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),r},t};function eg(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function ng(n){return sn(n)?document.querySelector(n):n}const ig={id:"app"},sg=Gn({__name:"App",setup(n){const t=Kt(!1);function e(i){i.clientY<100?t.value=!0:t.value=!1}return $n(()=>{window.addEventListener("mousemove",e)}),ou(()=>{window.removeEventListener("mousemove",e)}),(i,s)=>{const o=Nu("router-link"),r=Nu("router-view");return ui(),hi("div",ig,[Tm(Vt("nav",null,[$e(o,{to:"/3d-bear-arts/leather"},{default:gi(()=>s[0]||(s[0]=[_i("Leather")])),_:1}),$e(o,{to:"/3d-bear-arts/pop-art"},{default:gi(()=>s[1]||(s[1]=[_i("Pop MouseMove")])),_:1}),$e(o,{to:"/3d-bear-arts/pop-art-bear-3"},{default:gi(()=>s[2]||(s[2]=[_i("Pop3")])),_:1}),$e(o,{to:"/3d-bear-arts/machine"},{default:gi(()=>s[3]||(s[3]=[_i("machine")])),_:1}),$e(o,{to:"/3d-bear-arts/water"},{default:gi(()=>s[4]||(s[4]=[_i("Water")])),_:1}),$e(o,{to:"/3d-bear-arts/ghost-bear"},{default:gi(()=>s[5]||(s[5]=[_i("ghost")])),_:1}),$e(o,{to:"/3d-bear-arts/white-ghost-bear"},{default:gi(()=>s[6]||(s[6]=[_i("white ghost")])),_:1}),$e(o,{to:"/3d-bear-arts/"},{default:gi(()=>s[7]||(s[7]=[_i("santa")])),_:1}),$e(o,{to:"/3d-bear-arts/half"},{default:gi(()=>s[8]||(s[8]=[_i("HalfTranparent")])),_:1})],512),[[O0,t.value]]),$e(r)])}}}),di=(n,t)=>{const e=n.__vccOpts||n;for(const[i,s]of t)e[i]=s;return e},og=di(sg,[["__scopeId","data-v-703cc388"]]);/*!
  * vue-router v4.4.5
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const Qs=typeof document<"u";function Rf(n){return typeof n=="object"||"displayName"in n||"props"in n||"__vccOpts"in n}function rg(n){return n.__esModule||n[Symbol.toStringTag]==="Module"||n.default&&Rf(n.default)}const Ee=Object.assign;function ec(n,t){const e={};for(const i in t){const s=t[i];e[i]=li(s)?s.map(n):n(s)}return e}const jo=()=>{},li=Array.isArray,Pf=/#/g,ag=/&/g,cg=/\//g,lg=/=/g,ug=/\?/g,Cf=/\+/g,hg=/%5B/g,dg=/%5D/g,If=/%5E/g,fg=/%60/g,Lf=/%7B/g,pg=/%7C/g,Df=/%7D/g,mg=/%20/g;function lu(n){return encodeURI(""+n).replace(pg,"|").replace(hg,"[").replace(dg,"]")}function gg(n){return lu(n).replace(Lf,"{").replace(Df,"}").replace(If,"^")}function jc(n){return lu(n).replace(Cf,"%2B").replace(mg,"+").replace(Pf,"%23").replace(ag,"%26").replace(fg,"`").replace(Lf,"{").replace(Df,"}").replace(If,"^")}function _g(n){return jc(n).replace(lg,"%3D")}function vg(n){return lu(n).replace(Pf,"%23").replace(ug,"%3F")}function xg(n){return n==null?"":vg(n).replace(cg,"%2F")}function ar(n){try{return decodeURIComponent(""+n)}catch{}return""+n}const yg=/\/$/,Mg=n=>n.replace(yg,"");function nc(n,t,e="/"){let i,s={},o="",r="";const a=t.indexOf("#");let c=t.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(i=t.slice(0,c),o=t.slice(c+1,a>-1?a:t.length),s=n(o)),a>-1&&(i=i||t.slice(0,a),r=t.slice(a,t.length)),i=Eg(i??t,e),{fullPath:i+(o&&"?")+o+r,path:i,query:s,hash:ar(r)}}function wg(n,t){const e=t.query?n(t.query):"";return t.path+(e&&"?")+e+(t.hash||"")}function oh(n,t){return!t||!n.toLowerCase().startsWith(t.toLowerCase())?n:n.slice(t.length)||"/"}function Sg(n,t,e){const i=t.matched.length-1,s=e.matched.length-1;return i>-1&&i===s&&go(t.matched[i],e.matched[s])&&Uf(t.params,e.params)&&n(t.query)===n(e.query)&&t.hash===e.hash}function go(n,t){return(n.aliasOf||n)===(t.aliasOf||t)}function Uf(n,t){if(Object.keys(n).length!==Object.keys(t).length)return!1;for(const e in n)if(!bg(n[e],t[e]))return!1;return!0}function bg(n,t){return li(n)?rh(n,t):li(t)?rh(t,n):n===t}function rh(n,t){return li(t)?n.length===t.length&&n.every((e,i)=>e===t[i]):n.length===1&&n[0]===t}function Eg(n,t){if(n.startsWith("/"))return n;if(!n)return t;const e=t.split("/"),i=n.split("/"),s=i[i.length-1];(s===".."||s===".")&&i.push("");let o=e.length-1,r,a;for(r=0;r<i.length;r++)if(a=i[r],a!==".")if(a==="..")o>1&&o--;else break;return e.slice(0,o).join("/")+"/"+i.slice(r).join("/")}const Ki={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var cr;(function(n){n.pop="pop",n.push="push"})(cr||(cr={}));var Ko;(function(n){n.back="back",n.forward="forward",n.unknown=""})(Ko||(Ko={}));function Tg(n){if(!n)if(Qs){const t=document.querySelector("base");n=t&&t.getAttribute("href")||"/",n=n.replace(/^\w+:\/\/[^\/]+/,"")}else n="/";return n[0]!=="/"&&n[0]!=="#"&&(n="/"+n),Mg(n)}const Ag=/^[^#]+#/;function Rg(n,t){return n.replace(Ag,"#")+t}function Pg(n,t){const e=document.documentElement.getBoundingClientRect(),i=n.getBoundingClientRect();return{behavior:t.behavior,left:i.left-e.left-(t.left||0),top:i.top-e.top-(t.top||0)}}const Na=()=>({left:window.scrollX,top:window.scrollY});function Cg(n){let t;if("el"in n){const e=n.el,i=typeof e=="string"&&e.startsWith("#"),s=typeof e=="string"?i?document.getElementById(e.slice(1)):document.querySelector(e):e;if(!s)return;t=Pg(s,n)}else t=n;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.scrollX,t.top!=null?t.top:window.scrollY)}function ah(n,t){return(history.state?history.state.position-t:-1)+n}const Kc=new Map;function Ig(n,t){Kc.set(n,t)}function Lg(n){const t=Kc.get(n);return Kc.delete(n),t}let Dg=()=>location.protocol+"//"+location.host;function Nf(n,t){const{pathname:e,search:i,hash:s}=t,o=n.indexOf("#");if(o>-1){let a=s.includes(n.slice(o))?n.slice(o).length:1,c=s.slice(a);return c[0]!=="/"&&(c="/"+c),oh(c,"")}return oh(e,n)+i+s}function Ug(n,t,e,i){let s=[],o=[],r=null;const a=({state:d})=>{const p=Nf(n,location),_=e.value,y=t.value;let f=0;if(d){if(e.value=p,t.value=d,r&&r===_){r=null;return}f=y?d.position-y.position:0}else i(p);s.forEach(m=>{m(e.value,_,{delta:f,type:cr.pop,direction:f?f>0?Ko.forward:Ko.back:Ko.unknown})})};function c(){r=e.value}function l(d){s.push(d);const p=()=>{const _=s.indexOf(d);_>-1&&s.splice(_,1)};return o.push(p),p}function h(){const{history:d}=window;d.state&&d.replaceState(Ee({},d.state,{scroll:Na()}),"")}function u(){for(const d of o)d();o=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",h)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",h,{passive:!0}),{pauseListeners:c,listen:l,destroy:u}}function ch(n,t,e,i=!1,s=!1){return{back:n,current:t,forward:e,replaced:i,position:window.history.length,scroll:s?Na():null}}function Ng(n){const{history:t,location:e}=window,i={value:Nf(n,e)},s={value:t.state};s.value||o(i.value,{back:null,current:i.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function o(c,l,h){const u=n.indexOf("#"),d=u>-1?(e.host&&document.querySelector("base")?n:n.slice(u))+c:Dg()+n+c;try{t[h?"replaceState":"pushState"](l,"",d),s.value=l}catch(p){console.error(p),e[h?"replace":"assign"](d)}}function r(c,l){const h=Ee({},t.state,ch(s.value.back,c,s.value.forward,!0),l,{position:s.value.position});o(c,h,!0),i.value=c}function a(c,l){const h=Ee({},s.value,t.state,{forward:c,scroll:Na()});o(h.current,h,!0);const u=Ee({},ch(i.value,c,null),{position:h.position+1},l);o(c,u,!1),i.value=c}return{location:i,state:s,push:a,replace:r}}function Fg(n){n=Tg(n);const t=Ng(n),e=Ug(n,t.state,t.location,t.replace);function i(o,r=!0){r||e.pauseListeners(),history.go(o)}const s=Ee({location:"",base:n,go:i,createHref:Rg.bind(null,n)},t,e);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>t.state.value}),s}function Og(n){return typeof n=="string"||n&&typeof n=="object"}function Ff(n){return typeof n=="string"||typeof n=="symbol"}const Of=Symbol("");var lh;(function(n){n[n.aborted=4]="aborted",n[n.cancelled=8]="cancelled",n[n.duplicated=16]="duplicated"})(lh||(lh={}));function _o(n,t){return Ee(new Error,{type:n,[Of]:!0},t)}function Li(n,t){return n instanceof Error&&Of in n&&(t==null||!!(n.type&t))}const uh="[^/]+?",Bg={sensitive:!1,strict:!1,start:!0,end:!0},zg=/[.+*?^${}()[\]/\\]/g;function Gg(n,t){const e=Ee({},Bg,t),i=[];let s=e.start?"^":"";const o=[];for(const l of n){const h=l.length?[]:[90];e.strict&&!l.length&&(s+="/");for(let u=0;u<l.length;u++){const d=l[u];let p=40+(e.sensitive?.25:0);if(d.type===0)u||(s+="/"),s+=d.value.replace(zg,"\\$&"),p+=40;else if(d.type===1){const{value:_,repeatable:y,optional:f,regexp:m}=d;o.push({name:_,repeatable:y,optional:f});const E=m||uh;if(E!==uh){p+=10;try{new RegExp(`(${E})`)}catch(S){throw new Error(`Invalid custom RegExp for param "${_}" (${E}): `+S.message)}}let M=y?`((?:${E})(?:/(?:${E}))*)`:`(${E})`;u||(M=f&&l.length<2?`(?:/${M})`:"/"+M),f&&(M+="?"),s+=M,p+=20,f&&(p+=-8),y&&(p+=-20),E===".*"&&(p+=-50)}h.push(p)}i.push(h)}if(e.strict&&e.end){const l=i.length-1;i[l][i[l].length-1]+=.7000000000000001}e.strict||(s+="/?"),e.end?s+="$":e.strict&&(s+="(?:/|$)");const r=new RegExp(s,e.sensitive?"":"i");function a(l){const h=l.match(r),u={};if(!h)return null;for(let d=1;d<h.length;d++){const p=h[d]||"",_=o[d-1];u[_.name]=p&&_.repeatable?p.split("/"):p}return u}function c(l){let h="",u=!1;for(const d of n){(!u||!h.endsWith("/"))&&(h+="/"),u=!1;for(const p of d)if(p.type===0)h+=p.value;else if(p.type===1){const{value:_,repeatable:y,optional:f}=p,m=_ in l?l[_]:"";if(li(m)&&!y)throw new Error(`Provided param "${_}" is an array but it is not repeatable (* or + modifiers)`);const E=li(m)?m.join("/"):m;if(!E)if(f)d.length<2&&(h.endsWith("/")?h=h.slice(0,-1):u=!0);else throw new Error(`Missing required param "${_}"`);h+=E}}return h||"/"}return{re:r,score:i,keys:o,parse:a,stringify:c}}function Hg(n,t){let e=0;for(;e<n.length&&e<t.length;){const i=t[e]-n[e];if(i)return i;e++}return n.length<t.length?n.length===1&&n[0]===80?-1:1:n.length>t.length?t.length===1&&t[0]===80?1:-1:0}function Bf(n,t){let e=0;const i=n.score,s=t.score;for(;e<i.length&&e<s.length;){const o=Hg(i[e],s[e]);if(o)return o;e++}if(Math.abs(s.length-i.length)===1){if(hh(i))return 1;if(hh(s))return-1}return s.length-i.length}function hh(n){const t=n[n.length-1];return n.length>0&&t[t.length-1]<0}const kg={type:0,value:""},Vg=/[a-zA-Z0-9_]/;function Wg(n){if(!n)return[[]];if(n==="/")return[[kg]];if(!n.startsWith("/"))throw new Error(`Invalid path "${n}"`);function t(p){throw new Error(`ERR (${e})/"${l}": ${p}`)}let e=0,i=e;const s=[];let o;function r(){o&&s.push(o),o=[]}let a=0,c,l="",h="";function u(){l&&(e===0?o.push({type:0,value:l}):e===1||e===2||e===3?(o.length>1&&(c==="*"||c==="+")&&t(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),o.push({type:1,value:l,regexp:h,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):t("Invalid state to consume buffer"),l="")}function d(){l+=c}for(;a<n.length;){if(c=n[a++],c==="\\"&&e!==2){i=e,e=4;continue}switch(e){case 0:c==="/"?(l&&u(),r()):c===":"?(u(),e=1):d();break;case 4:d(),e=i;break;case 1:c==="("?e=2:Vg.test(c)?d():(u(),e=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?h[h.length-1]=="\\"?h=h.slice(0,-1)+c:e=3:h+=c;break;case 3:u(),e=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,h="";break;default:t("Unknown state");break}}return e===2&&t(`Unfinished custom RegExp for param "${l}"`),u(),r(),s}function Xg(n,t,e){const i=Gg(Wg(n.path),e),s=Ee(i,{record:n,parent:t,children:[],alias:[]});return t&&!s.record.aliasOf==!t.record.aliasOf&&t.children.push(s),s}function qg(n,t){const e=[],i=new Map;t=mh({strict:!1,end:!0,sensitive:!1},t);function s(u){return i.get(u)}function o(u,d,p){const _=!p,y=fh(u);y.aliasOf=p&&p.record;const f=mh(t,u),m=[y];if("alias"in u){const S=typeof u.alias=="string"?[u.alias]:u.alias;for(const O of S)m.push(fh(Ee({},y,{components:p?p.record.components:y.components,path:O,aliasOf:p?p.record:y})))}let E,M;for(const S of m){const{path:O}=S;if(d&&O[0]!=="/"){const I=d.record.path,P=I[I.length-1]==="/"?"":"/";S.path=d.record.path+(O&&P+O)}if(E=Xg(S,d,f),p?p.alias.push(E):(M=M||E,M!==E&&M.alias.push(E),_&&u.name&&!ph(E)&&r(u.name)),zf(E)&&c(E),y.children){const I=y.children;for(let P=0;P<I.length;P++)o(I[P],E,p&&p.children[P])}p=p||E}return M?()=>{r(M)}:jo}function r(u){if(Ff(u)){const d=i.get(u);d&&(i.delete(u),e.splice(e.indexOf(d),1),d.children.forEach(r),d.alias.forEach(r))}else{const d=e.indexOf(u);d>-1&&(e.splice(d,1),u.record.name&&i.delete(u.record.name),u.children.forEach(r),u.alias.forEach(r))}}function a(){return e}function c(u){const d=jg(u,e);e.splice(d,0,u),u.record.name&&!ph(u)&&i.set(u.record.name,u)}function l(u,d){let p,_={},y,f;if("name"in u&&u.name){if(p=i.get(u.name),!p)throw _o(1,{location:u});f=p.record.name,_=Ee(dh(d.params,p.keys.filter(M=>!M.optional).concat(p.parent?p.parent.keys.filter(M=>M.optional):[]).map(M=>M.name)),u.params&&dh(u.params,p.keys.map(M=>M.name))),y=p.stringify(_)}else if(u.path!=null)y=u.path,p=e.find(M=>M.re.test(y)),p&&(_=p.parse(y),f=p.record.name);else{if(p=d.name?i.get(d.name):e.find(M=>M.re.test(d.path)),!p)throw _o(1,{location:u,currentLocation:d});f=p.record.name,_=Ee({},d.params,u.params),y=p.stringify(_)}const m=[];let E=p;for(;E;)m.unshift(E.record),E=E.parent;return{name:f,path:y,params:_,matched:m,meta:$g(m)}}n.forEach(u=>o(u));function h(){e.length=0,i.clear()}return{addRoute:o,resolve:l,removeRoute:r,clearRoutes:h,getRoutes:a,getRecordMatcher:s}}function dh(n,t){const e={};for(const i of t)i in n&&(e[i]=n[i]);return e}function fh(n){const t={path:n.path,redirect:n.redirect,name:n.name,meta:n.meta||{},aliasOf:n.aliasOf,beforeEnter:n.beforeEnter,props:Yg(n),children:n.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in n?n.components||null:n.component&&{default:n.component}};return Object.defineProperty(t,"mods",{value:{}}),t}function Yg(n){const t={},e=n.props||!1;if("component"in n)t.default=e;else for(const i in n.components)t[i]=typeof e=="object"?e[i]:e;return t}function ph(n){for(;n;){if(n.record.aliasOf)return!0;n=n.parent}return!1}function $g(n){return n.reduce((t,e)=>Ee(t,e.meta),{})}function mh(n,t){const e={};for(const i in n)e[i]=i in t?t[i]:n[i];return e}function jg(n,t){let e=0,i=t.length;for(;e!==i;){const o=e+i>>1;Bf(n,t[o])<0?i=o:e=o+1}const s=Kg(n);return s&&(i=t.lastIndexOf(s,i-1)),i}function Kg(n){let t=n;for(;t=t.parent;)if(zf(t)&&Bf(n,t)===0)return t}function zf({record:n}){return!!(n.name||n.components&&Object.keys(n.components).length||n.redirect)}function Zg(n){const t={};if(n===""||n==="?")return t;const i=(n[0]==="?"?n.slice(1):n).split("&");for(let s=0;s<i.length;++s){const o=i[s].replace(Cf," "),r=o.indexOf("="),a=ar(r<0?o:o.slice(0,r)),c=r<0?null:ar(o.slice(r+1));if(a in t){let l=t[a];li(l)||(l=t[a]=[l]),l.push(c)}else t[a]=c}return t}function gh(n){let t="";for(let e in n){const i=n[e];if(e=_g(e),i==null){i!==void 0&&(t+=(t.length?"&":"")+e);continue}(li(i)?i.map(o=>o&&jc(o)):[i&&jc(i)]).forEach(o=>{o!==void 0&&(t+=(t.length?"&":"")+e,o!=null&&(t+="="+o))})}return t}function Jg(n){const t={};for(const e in n){const i=n[e];i!==void 0&&(t[e]=li(i)?i.map(s=>s==null?null:""+s):i==null?i:""+i)}return t}const Qg=Symbol(""),_h=Symbol(""),uu=Symbol(""),Gf=Symbol(""),Zc=Symbol("");function Do(){let n=[];function t(i){return n.push(i),()=>{const s=n.indexOf(i);s>-1&&n.splice(s,1)}}function e(){n=[]}return{add:t,list:()=>n.slice(),reset:e}}function os(n,t,e,i,s,o=r=>r()){const r=i&&(i.enterCallbacks[s]=i.enterCallbacks[s]||[]);return()=>new Promise((a,c)=>{const l=d=>{d===!1?c(_o(4,{from:e,to:t})):d instanceof Error?c(d):Og(d)?c(_o(2,{from:t,to:d})):(r&&i.enterCallbacks[s]===r&&typeof d=="function"&&r.push(d),a())},h=o(()=>n.call(i&&i.instances[s],t,e,l));let u=Promise.resolve(h);n.length<3&&(u=u.then(l)),u.catch(d=>c(d))})}function ic(n,t,e,i,s=o=>o()){const o=[];for(const r of n)for(const a in r.components){let c=r.components[a];if(!(t!=="beforeRouteEnter"&&!r.instances[a]))if(Rf(c)){const h=(c.__vccOpts||c)[t];h&&o.push(os(h,e,i,r,a,s))}else{let l=c();o.push(()=>l.then(h=>{if(!h)throw new Error(`Couldn't resolve component "${a}" at "${r.path}"`);const u=rg(h)?h.default:h;r.mods[a]=h,r.components[a]=u;const p=(u.__vccOpts||u)[t];return p&&os(p,e,i,r,a,s)()}))}}return o}function vh(n){const t=Xi(uu),e=Xi(Gf),i=ni(()=>{const c=ro(n.to);return t.resolve(c)}),s=ni(()=>{const{matched:c}=i.value,{length:l}=c,h=c[l-1],u=e.matched;if(!h||!u.length)return-1;const d=u.findIndex(go.bind(null,h));if(d>-1)return d;const p=xh(c[l-2]);return l>1&&xh(h)===p&&u[u.length-1].path!==p?u.findIndex(go.bind(null,c[l-2])):d}),o=ni(()=>s.value>-1&&i_(e.params,i.value.params)),r=ni(()=>s.value>-1&&s.value===e.matched.length-1&&Uf(e.params,i.value.params));function a(c={}){return n_(c)?t[ro(n.replace)?"replace":"push"](ro(n.to)).catch(jo):Promise.resolve()}return{route:i,href:ni(()=>i.value.href),isActive:o,isExactActive:r,navigate:a}}const t_=Gn({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:vh,setup(n,{slots:t}){const e=Ra(vh(n)),{options:i}=Xi(uu),s=ni(()=>({[yh(n.activeClass,i.linkActiveClass,"router-link-active")]:e.isActive,[yh(n.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:e.isExactActive}));return()=>{const o=t.default&&t.default(e);return n.custom?o:Ef("a",{"aria-current":e.isExactActive?n.ariaCurrentValue:null,href:e.href,onClick:e.navigate,class:s.value},o)}}}),e_=t_;function n_(n){if(!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)&&!n.defaultPrevented&&!(n.button!==void 0&&n.button!==0)){if(n.currentTarget&&n.currentTarget.getAttribute){const t=n.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return n.preventDefault&&n.preventDefault(),!0}}function i_(n,t){for(const e in t){const i=t[e],s=n[e];if(typeof i=="string"){if(i!==s)return!1}else if(!li(s)||s.length!==i.length||i.some((o,r)=>o!==s[r]))return!1}return!0}function xh(n){return n?n.aliasOf?n.aliasOf.path:n.path:""}const yh=(n,t,e)=>n??t??e,s_=Gn({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(n,{attrs:t,slots:e}){const i=Xi(Zc),s=ni(()=>n.route||i.value),o=Xi(_h,0),r=ni(()=>{let l=ro(o);const{matched:h}=s.value;let u;for(;(u=h[l])&&!u.components;)l++;return l}),a=ni(()=>s.value.matched[r.value]);na(_h,ni(()=>r.value+1)),na(Qg,a),na(Zc,s);const c=Kt();return Ge(()=>[c.value,a.value,n.name],([l,h,u],[d,p,_])=>{h&&(h.instances[u]=l,p&&p!==h&&l&&l===d&&(h.leaveGuards.size||(h.leaveGuards=p.leaveGuards),h.updateGuards.size||(h.updateGuards=p.updateGuards))),l&&h&&(!p||!go(h,p)||!d)&&(h.enterCallbacks[u]||[]).forEach(y=>y(l))},{flush:"post"}),()=>{const l=s.value,h=n.name,u=a.value,d=u&&u.components[h];if(!d)return Mh(e.default,{Component:d,route:l});const p=u.props[h],_=p?p===!0?l.params:typeof p=="function"?p(l):p:null,f=Ef(d,Ee({},_,t,{onVnodeUnmounted:m=>{m.component.isUnmounted&&(u.instances[h]=null)},ref:c}));return Mh(e.default,{Component:f,route:l})||f}}});function Mh(n,t){if(!n)return null;const e=n(t);return e.length===1?e[0]:e}const o_=s_;function r_(n){const t=qg(n.routes,n),e=n.parseQuery||Zg,i=n.stringifyQuery||gh,s=n.history,o=Do(),r=Do(),a=Do(),c=Xo(Ki);let l=Ki;Qs&&n.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const h=ec.bind(null,F=>""+F),u=ec.bind(null,xg),d=ec.bind(null,ar);function p(F,ct){let it,lt;return Ff(F)?(it=t.getRecordMatcher(F),lt=ct):lt=F,t.addRoute(lt,it)}function _(F){const ct=t.getRecordMatcher(F);ct&&t.removeRoute(ct)}function y(){return t.getRoutes().map(F=>F.record)}function f(F){return!!t.getRecordMatcher(F)}function m(F,ct){if(ct=Ee({},ct||c.value),typeof F=="string"){const T=nc(e,F,ct.path),L=t.resolve({path:T.path},ct),N=s.createHref(T.fullPath);return Ee(T,L,{params:d(L.params),hash:ar(T.hash),redirectedFrom:void 0,href:N})}let it;if(F.path!=null)it=Ee({},F,{path:nc(e,F.path,ct.path).path});else{const T=Ee({},F.params);for(const L in T)T[L]==null&&delete T[L];it=Ee({},F,{params:u(T)}),ct.params=u(ct.params)}const lt=t.resolve(it,ct),bt=F.hash||"";lt.params=h(d(lt.params));const tt=wg(i,Ee({},F,{hash:gg(bt),path:lt.path})),g=s.createHref(tt);return Ee({fullPath:tt,hash:bt,query:i===gh?Jg(F.query):F.query||{}},lt,{redirectedFrom:void 0,href:g})}function E(F){return typeof F=="string"?nc(e,F,c.value.path):Ee({},F)}function M(F,ct){if(l!==F)return _o(8,{from:ct,to:F})}function S(F){return P(F)}function O(F){return S(Ee(E(F),{replace:!0}))}function I(F){const ct=F.matched[F.matched.length-1];if(ct&&ct.redirect){const{redirect:it}=ct;let lt=typeof it=="function"?it(F):it;return typeof lt=="string"&&(lt=lt.includes("?")||lt.includes("#")?lt=E(lt):{path:lt},lt.params={}),Ee({query:F.query,hash:F.hash,params:lt.path!=null?{}:F.params},lt)}}function P(F,ct){const it=l=m(F),lt=c.value,bt=F.state,tt=F.force,g=F.replace===!0,T=I(it);if(T)return P(Ee(E(T),{state:typeof T=="object"?Ee({},bt,T.state):bt,force:tt,replace:g}),ct||it);const L=it;L.redirectedFrom=ct;let N;return!tt&&Sg(i,lt,it)&&(N=_o(16,{to:L,from:lt}),gt(lt,lt,!0,!1)),(N?Promise.resolve(N):x(L,lt)).catch(D=>Li(D)?Li(D,2)?D:yt(D):G(D,L,lt)).then(D=>{if(D){if(Li(D,2))return P(Ee({replace:g},E(D.to),{state:typeof D.to=="object"?Ee({},bt,D.to.state):bt,force:tt}),ct||L)}else D=j(L,lt,!0,g,bt);return b(L,lt,D),D})}function U(F,ct){const it=M(F,ct);return it?Promise.reject(it):Promise.resolve()}function Q(F){const ct=rt.values().next().value;return ct&&typeof ct.runWithContext=="function"?ct.runWithContext(F):F()}function x(F,ct){let it;const[lt,bt,tt]=a_(F,ct);it=ic(lt.reverse(),"beforeRouteLeave",F,ct);for(const T of lt)T.leaveGuards.forEach(L=>{it.push(os(L,F,ct))});const g=U.bind(null,F,ct);return it.push(g),vt(it).then(()=>{it=[];for(const T of o.list())it.push(os(T,F,ct));return it.push(g),vt(it)}).then(()=>{it=ic(bt,"beforeRouteUpdate",F,ct);for(const T of bt)T.updateGuards.forEach(L=>{it.push(os(L,F,ct))});return it.push(g),vt(it)}).then(()=>{it=[];for(const T of tt)if(T.beforeEnter)if(li(T.beforeEnter))for(const L of T.beforeEnter)it.push(os(L,F,ct));else it.push(os(T.beforeEnter,F,ct));return it.push(g),vt(it)}).then(()=>(F.matched.forEach(T=>T.enterCallbacks={}),it=ic(tt,"beforeRouteEnter",F,ct,Q),it.push(g),vt(it))).then(()=>{it=[];for(const T of r.list())it.push(os(T,F,ct));return it.push(g),vt(it)}).catch(T=>Li(T,8)?T:Promise.reject(T))}function b(F,ct,it){a.list().forEach(lt=>Q(()=>lt(F,ct,it)))}function j(F,ct,it,lt,bt){const tt=M(F,ct);if(tt)return tt;const g=ct===Ki,T=Qs?history.state:{};it&&(lt||g?s.replace(F.fullPath,Ee({scroll:g&&T&&T.scroll},bt)):s.push(F.fullPath,bt)),c.value=F,gt(F,ct,it,g),yt()}let V;function Z(){V||(V=s.listen((F,ct,it)=>{if(!ft.listening)return;const lt=m(F),bt=I(lt);if(bt){P(Ee(bt,{replace:!0}),lt).catch(jo);return}l=lt;const tt=c.value;Qs&&Ig(ah(tt.fullPath,it.delta),Na()),x(lt,tt).catch(g=>Li(g,12)?g:Li(g,2)?(P(g.to,lt).then(T=>{Li(T,20)&&!it.delta&&it.type===cr.pop&&s.go(-1,!1)}).catch(jo),Promise.reject()):(it.delta&&s.go(-it.delta,!1),G(g,lt,tt))).then(g=>{g=g||j(lt,tt,!1),g&&(it.delta&&!Li(g,8)?s.go(-it.delta,!1):it.type===cr.pop&&Li(g,20)&&s.go(-1,!1)),b(lt,tt,g)}).catch(jo)}))}let at=Do(),W=Do(),J;function G(F,ct,it){yt(F);const lt=W.list();return lt.length?lt.forEach(bt=>bt(F,ct,it)):console.error(F),Promise.reject(F)}function mt(){return J&&c.value!==Ki?Promise.resolve():new Promise((F,ct)=>{at.add([F,ct])})}function yt(F){return J||(J=!F,Z(),at.list().forEach(([ct,it])=>F?it(F):ct()),at.reset()),F}function gt(F,ct,it,lt){const{scrollBehavior:bt}=n;if(!Qs||!bt)return Promise.resolve();const tt=!it&&Lg(ah(F.fullPath,0))||(lt||!it)&&history.state&&history.state.scroll||null;return Kd().then(()=>bt(F,ct,tt)).then(g=>g&&Cg(g)).catch(g=>G(g,F,ct))}const It=F=>s.go(F);let zt;const rt=new Set,ft={currentRoute:c,listening:!0,addRoute:p,removeRoute:_,clearRoutes:t.clearRoutes,hasRoute:f,getRoutes:y,resolve:m,options:n,push:S,replace:O,go:It,back:()=>It(-1),forward:()=>It(1),beforeEach:o.add,beforeResolve:r.add,afterEach:a.add,onError:W.add,isReady:mt,install(F){const ct=this;F.component("RouterLink",e_),F.component("RouterView",o_),F.config.globalProperties.$router=ct,Object.defineProperty(F.config.globalProperties,"$route",{enumerable:!0,get:()=>ro(c)}),Qs&&!zt&&c.value===Ki&&(zt=!0,S(s.location).catch(bt=>{}));const it={};for(const bt in Ki)Object.defineProperty(it,bt,{get:()=>c.value[bt],enumerable:!0});F.provide(uu,ct),F.provide(Gf,Xd(it)),F.provide(Zc,c);const lt=F.unmount;rt.add(F),F.unmount=function(){rt.delete(F),rt.size<1&&(l=Ki,V&&V(),V=null,c.value=Ki,zt=!1,J=!1),lt()}}};function vt(F){return F.reduce((ct,it)=>ct.then(()=>Q(it)),Promise.resolve())}return ft}function a_(n,t){const e=[],i=[],s=[],o=Math.max(t.matched.length,n.matched.length);for(let r=0;r<o;r++){const a=t.matched[r];a&&(n.matched.find(l=>go(l,a))?i.push(a):e.push(a));const c=n.matched[r];c&&(t.matched.find(l=>go(l,c))||s.push(c))}return[e,i,s]}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const hu="169",c_=0,wh=1,l_=2,Hf=1,u_=2,zi=3,us=0,Tn=1,de=2,as=0,lo=1,Sh=2,bh=3,Eh=4,h_=5,Es=100,d_=101,f_=102,p_=103,m_=104,g_=200,__=201,v_=202,x_=203,Jc=204,Qc=205,y_=206,M_=207,w_=208,S_=209,b_=210,E_=211,T_=212,A_=213,R_=214,tl=0,el=1,nl=2,vo=3,il=4,sl=5,ol=6,rl=7,kf=0,P_=1,C_=2,cs=0,I_=1,L_=2,D_=3,Vf=4,U_=5,N_=6,F_=7,Wf=300,xo=301,yo=302,lr=303,al=304,Fa=306,Xe=1e3,As=1001,cl=1002,Wn=1003,O_=1004,Ar=1005,ii=1006,sc=1007,Rs=1008,qi=1009,Xf=1010,qf=1011,ur=1012,du=1013,Is=1014,ki=1015,vr=1016,fu=1017,pu=1018,Mo=1020,Yf=35902,$f=1021,jf=1022,oi=1023,Kf=1024,Zf=1025,uo=1026,wo=1027,Jf=1028,mu=1029,Qf=1030,gu=1031,_u=1033,oa=33776,ra=33777,aa=33778,ca=33779,ll=35840,ul=35841,hl=35842,dl=35843,fl=36196,pl=37492,ml=37496,gl=37808,_l=37809,vl=37810,xl=37811,yl=37812,Ml=37813,wl=37814,Sl=37815,bl=37816,El=37817,Tl=37818,Al=37819,Rl=37820,Pl=37821,la=36492,Cl=36494,Il=36495,tp=36283,Ll=36284,Dl=36285,Ul=36286,B_=3200,z_=3201,ep=0,G_=1,rs="",ei="srgb",fs="srgb-linear",vu="display-p3",Oa="display-p3-linear",va="linear",Ne="srgb",xa="rec709",ya="p3",Bs=7680,Th=519,H_=512,k_=513,V_=514,np=515,W_=516,X_=517,q_=518,Y_=519,Ah=35044,Rh="300 es",Vi=2e3,Ma=2001;class Eo{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const o=s.indexOf(e);o!==-1&&s.splice(o,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const s=i.slice(0);for(let o=0,r=s.length;o<r;o++)s[o].call(this,t);t.target=null}}}const un=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Ph=1234567;const Zo=Math.PI/180,hr=180/Math.PI;function Ns(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(un[n&255]+un[n>>8&255]+un[n>>16&255]+un[n>>24&255]+"-"+un[t&255]+un[t>>8&255]+"-"+un[t>>16&15|64]+un[t>>24&255]+"-"+un[e&63|128]+un[e>>8&255]+"-"+un[e>>16&255]+un[e>>24&255]+un[i&255]+un[i>>8&255]+un[i>>16&255]+un[i>>24&255]).toLowerCase()}function nn(n,t,e){return Math.max(t,Math.min(e,n))}function xu(n,t){return(n%t+t)%t}function $_(n,t,e,i,s){return i+(n-t)*(s-i)/(e-t)}function j_(n,t,e){return n!==t?(e-n)/(t-n):0}function Jo(n,t,e){return(1-e)*n+e*t}function K_(n,t,e,i){return Jo(n,t,1-Math.exp(-e*i))}function Z_(n,t=1){return t-Math.abs(xu(n,t*2)-t)}function J_(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function Q_(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function tv(n,t){return n+Math.floor(Math.random()*(t-n+1))}function ev(n,t){return n+Math.random()*(t-n)}function nv(n){return n*(.5-Math.random())}function iv(n){n!==void 0&&(Ph=n);let t=Ph+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function sv(n){return n*Zo}function ov(n){return n*hr}function rv(n){return(n&n-1)===0&&n!==0}function av(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function cv(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function lv(n,t,e,i,s){const o=Math.cos,r=Math.sin,a=o(e/2),c=r(e/2),l=o((t+i)/2),h=r((t+i)/2),u=o((t-i)/2),d=r((t-i)/2),p=o((i-t)/2),_=r((i-t)/2);switch(s){case"XYX":n.set(a*h,c*u,c*d,a*l);break;case"YZY":n.set(c*d,a*h,c*u,a*l);break;case"ZXZ":n.set(c*u,c*d,a*h,a*l);break;case"XZX":n.set(a*h,c*_,c*p,a*l);break;case"YXY":n.set(c*p,a*h,c*_,a*l);break;case"ZYZ":n.set(c*_,c*p,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function to(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function vn(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const ee={DEG2RAD:Zo,RAD2DEG:hr,generateUUID:Ns,clamp:nn,euclideanModulo:xu,mapLinear:$_,inverseLerp:j_,lerp:Jo,damp:K_,pingpong:Z_,smoothstep:J_,smootherstep:Q_,randInt:tv,randFloat:ev,randFloatSpread:nv,seededRandom:iv,degToRad:sv,radToDeg:ov,isPowerOfTwo:rv,ceilPowerOfTwo:av,floorPowerOfTwo:cv,setQuaternionFromProperEuler:lv,normalize:vn,denormalize:to};class Ot{constructor(t=0,e=0){Ot.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(nn(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),s=Math.sin(e),o=this.x-t.x,r=this.y-t.y;return this.x=o*i-r*s+t.x,this.y=o*s+r*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ce{constructor(t,e,i,s,o,r,a,c,l){ce.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,o,r,a,c,l)}set(t,e,i,s,o,r,a,c,l){const h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=o,h[5]=c,h[6]=i,h[7]=r,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,o=this.elements,r=i[0],a=i[3],c=i[6],l=i[1],h=i[4],u=i[7],d=i[2],p=i[5],_=i[8],y=s[0],f=s[3],m=s[6],E=s[1],M=s[4],S=s[7],O=s[2],I=s[5],P=s[8];return o[0]=r*y+a*E+c*O,o[3]=r*f+a*M+c*I,o[6]=r*m+a*S+c*P,o[1]=l*y+h*E+u*O,o[4]=l*f+h*M+u*I,o[7]=l*m+h*S+u*P,o[2]=d*y+p*E+_*O,o[5]=d*f+p*M+_*I,o[8]=d*m+p*S+_*P,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],s=t[2],o=t[3],r=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*r*h-e*a*l-i*o*h+i*a*c+s*o*l-s*r*c}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],o=t[3],r=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=h*r-a*l,d=a*c-h*o,p=l*o-r*c,_=e*u+i*d+s*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/_;return t[0]=u*y,t[1]=(s*l-h*i)*y,t[2]=(a*i-s*r)*y,t[3]=d*y,t[4]=(h*e-s*c)*y,t[5]=(s*o-a*e)*y,t[6]=p*y,t[7]=(i*c-l*e)*y,t[8]=(r*e-i*o)*y,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,o,r,a){const c=Math.cos(o),l=Math.sin(o);return this.set(i*c,i*l,-i*(c*r+l*a)+r+t,-s*l,s*c,-s*(-l*r+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(oc.makeScale(t,e)),this}rotate(t){return this.premultiply(oc.makeRotation(-t)),this}translate(t,e){return this.premultiply(oc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const oc=new ce;function ip(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function dr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function uv(){const n=dr("canvas");return n.style.display="block",n}const Ch={};function ua(n){n in Ch||(Ch[n]=!0,console.warn(n))}function hv(n,t,e){return new Promise(function(i,s){function o(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(o,e);break;default:i()}}setTimeout(o,e)})}function dv(n){const t=n.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function fv(n){const t=n.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Ih=new ce().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Lh=new ce().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Uo={[fs]:{transfer:va,primaries:xa,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n,fromReference:n=>n},[ei]:{transfer:Ne,primaries:xa,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[Oa]:{transfer:va,primaries:ya,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.applyMatrix3(Lh),fromReference:n=>n.applyMatrix3(Ih)},[vu]:{transfer:Ne,primaries:ya,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.convertSRGBToLinear().applyMatrix3(Lh),fromReference:n=>n.applyMatrix3(Ih).convertLinearToSRGB()}},pv=new Set([fs,Oa]),Se={enabled:!0,_workingColorSpace:fs,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!pv.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,t,e){if(this.enabled===!1||t===e||!t||!e)return n;const i=Uo[t].toReference,s=Uo[e].fromReference;return s(i(n))},fromWorkingColorSpace:function(n,t){return this.convert(n,this._workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this._workingColorSpace)},getPrimaries:function(n){return Uo[n].primaries},getTransfer:function(n){return n===rs?va:Uo[n].transfer},getLuminanceCoefficients:function(n,t=this._workingColorSpace){return n.fromArray(Uo[t].luminanceCoefficients)}};function ho(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function rc(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let zs;class mv{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{zs===void 0&&(zs=dr("canvas")),zs.width=t.width,zs.height=t.height;const i=zs.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=zs}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=dr("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const s=i.getImageData(0,0,t.width,t.height),o=s.data;for(let r=0;r<o.length;r++)o[r]=ho(o[r]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(ho(e[i]/255)*255):e[i]=ho(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let gv=0;class sp{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:gv++}),this.uuid=Ns(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let o;if(Array.isArray(s)){o=[];for(let r=0,a=s.length;r<a;r++)s[r].isDataTexture?o.push(ac(s[r].image)):o.push(ac(s[r]))}else o=ac(s);i.url=o}return e||(t.images[this.uuid]=i),i}}function ac(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?mv.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let _v=0;class wn extends Eo{constructor(t=wn.DEFAULT_IMAGE,e=wn.DEFAULT_MAPPING,i=As,s=As,o=ii,r=Rs,a=oi,c=qi,l=wn.DEFAULT_ANISOTROPY,h=rs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:_v++}),this.uuid=Ns(),this.name="",this.source=new sp(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=o,this.minFilter=r,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Ot(0,0),this.repeat=new Ot(1,1),this.center=new Ot(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ce,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Wf)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Xe:t.x=t.x-Math.floor(t.x);break;case As:t.x=t.x<0?0:1;break;case cl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Xe:t.y=t.y-Math.floor(t.y);break;case As:t.y=t.y<0?0:1;break;case cl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}wn.DEFAULT_IMAGE=null;wn.DEFAULT_MAPPING=Wf;wn.DEFAULT_ANISOTROPY=1;class Ae{constructor(t=0,e=0,i=0,s=1){Ae.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,o=this.w,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s+r[12]*o,this.y=r[1]*e+r[5]*i+r[9]*s+r[13]*o,this.z=r[2]*e+r[6]*i+r[10]*s+r[14]*o,this.w=r[3]*e+r[7]*i+r[11]*s+r[15]*o,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,o;const c=t.elements,l=c[0],h=c[4],u=c[8],d=c[1],p=c[5],_=c[9],y=c[2],f=c[6],m=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-y)<.01&&Math.abs(_-f)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+y)<.1&&Math.abs(_+f)<.1&&Math.abs(l+p+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const M=(l+1)/2,S=(p+1)/2,O=(m+1)/2,I=(h+d)/4,P=(u+y)/4,U=(_+f)/4;return M>S&&M>O?M<.01?(i=0,s=.707106781,o=.707106781):(i=Math.sqrt(M),s=I/i,o=P/i):S>O?S<.01?(i=.707106781,s=0,o=.707106781):(s=Math.sqrt(S),i=I/s,o=U/s):O<.01?(i=.707106781,s=.707106781,o=0):(o=Math.sqrt(O),i=P/o,s=U/o),this.set(i,s,o,e),this}let E=Math.sqrt((f-_)*(f-_)+(u-y)*(u-y)+(d-h)*(d-h));return Math.abs(E)<.001&&(E=1),this.x=(f-_)/E,this.y=(u-y)/E,this.z=(d-h)/E,this.w=Math.acos((l+p+m-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class vv extends Eo{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Ae(0,0,t,e),this.scissorTest=!1,this.viewport=new Ae(0,0,t,e);const s={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ii,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const o=new wn(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);o.flipY=!1,o.generateMipmaps=i.generateMipmaps,o.internalFormat=i.internalFormat,this.textures=[];const r=i.count;for(let a=0;a<r;a++)this.textures[a]=o.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,o=this.textures.length;s<o;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new sp(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ls extends vv{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class op extends wn{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Wn,this.minFilter=Wn,this.wrapR=As,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class xv extends wn{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Wn,this.minFilter=Wn,this.wrapR=As,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class xr{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,o,r,a){let c=i[s+0],l=i[s+1],h=i[s+2],u=i[s+3];const d=o[r+0],p=o[r+1],_=o[r+2],y=o[r+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=p,t[e+2]=_,t[e+3]=y;return}if(u!==y||c!==d||l!==p||h!==_){let f=1-a;const m=c*d+l*p+h*_+u*y,E=m>=0?1:-1,M=1-m*m;if(M>Number.EPSILON){const O=Math.sqrt(M),I=Math.atan2(O,m*E);f=Math.sin(f*I)/O,a=Math.sin(a*I)/O}const S=a*E;if(c=c*f+d*S,l=l*f+p*S,h=h*f+_*S,u=u*f+y*S,f===1-a){const O=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=O,l*=O,h*=O,u*=O}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,i,s,o,r){const a=i[s],c=i[s+1],l=i[s+2],h=i[s+3],u=o[r],d=o[r+1],p=o[r+2],_=o[r+3];return t[e]=a*_+h*u+c*p-l*d,t[e+1]=c*_+h*d+l*u-a*p,t[e+2]=l*_+h*p+a*d-c*u,t[e+3]=h*_-a*u-c*d-l*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,s=t._y,o=t._z,r=t._order,a=Math.cos,c=Math.sin,l=a(i/2),h=a(s/2),u=a(o/2),d=c(i/2),p=c(s/2),_=c(o/2);switch(r){case"XYZ":this._x=d*h*u+l*p*_,this._y=l*p*u-d*h*_,this._z=l*h*_+d*p*u,this._w=l*h*u-d*p*_;break;case"YXZ":this._x=d*h*u+l*p*_,this._y=l*p*u-d*h*_,this._z=l*h*_-d*p*u,this._w=l*h*u+d*p*_;break;case"ZXY":this._x=d*h*u-l*p*_,this._y=l*p*u+d*h*_,this._z=l*h*_+d*p*u,this._w=l*h*u-d*p*_;break;case"ZYX":this._x=d*h*u-l*p*_,this._y=l*p*u+d*h*_,this._z=l*h*_-d*p*u,this._w=l*h*u+d*p*_;break;case"YZX":this._x=d*h*u+l*p*_,this._y=l*p*u+d*h*_,this._z=l*h*_-d*p*u,this._w=l*h*u-d*p*_;break;case"XZY":this._x=d*h*u-l*p*_,this._y=l*p*u-d*h*_,this._z=l*h*_+d*p*u,this._w=l*h*u+d*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],s=e[4],o=e[8],r=e[1],a=e[5],c=e[9],l=e[2],h=e[6],u=e[10],d=i+a+u;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-c)*p,this._y=(o-l)*p,this._z=(r-s)*p}else if(i>a&&i>u){const p=2*Math.sqrt(1+i-a-u);this._w=(h-c)/p,this._x=.25*p,this._y=(s+r)/p,this._z=(o+l)/p}else if(a>u){const p=2*Math.sqrt(1+a-i-u);this._w=(o-l)/p,this._x=(s+r)/p,this._y=.25*p,this._z=(c+h)/p}else{const p=2*Math.sqrt(1+u-i-a);this._w=(r-s)/p,this._x=(o+l)/p,this._y=(c+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(nn(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,s=t._y,o=t._z,r=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=i*h+r*a+s*l-o*c,this._y=s*h+r*c+o*a-i*l,this._z=o*h+r*l+i*c-s*a,this._w=r*h-i*a-s*c-o*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,s=this._y,o=this._z,r=this._w;let a=r*t._w+i*t._x+s*t._y+o*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=r,this._x=i,this._y=s,this._z=o,this;const c=1-a*a;if(c<=Number.EPSILON){const p=1-e;return this._w=p*r+e*this._w,this._x=p*i+e*this._x,this._y=p*s+e*this._y,this._z=p*o+e*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-e)*h)/l,d=Math.sin(e*h)/l;return this._w=r*u+this._w*d,this._x=i*u+this._x*d,this._y=s*u+this._y*d,this._z=o*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),o=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),o*Math.sin(e),o*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class q{constructor(t=0,e=0,i=0){q.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Dh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Dh.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,s=this.z,o=t.elements;return this.x=o[0]*e+o[3]*i+o[6]*s,this.y=o[1]*e+o[4]*i+o[7]*s,this.z=o[2]*e+o[5]*i+o[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,o=t.elements,r=1/(o[3]*e+o[7]*i+o[11]*s+o[15]);return this.x=(o[0]*e+o[4]*i+o[8]*s+o[12])*r,this.y=(o[1]*e+o[5]*i+o[9]*s+o[13])*r,this.z=(o[2]*e+o[6]*i+o[10]*s+o[14])*r,this}applyQuaternion(t){const e=this.x,i=this.y,s=this.z,o=t.x,r=t.y,a=t.z,c=t.w,l=2*(r*s-a*i),h=2*(a*e-o*s),u=2*(o*i-r*e);return this.x=e+c*l+r*u-a*h,this.y=i+c*h+a*l-o*u,this.z=s+c*u+o*h-r*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,s=this.z,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s,this.y=o[1]*e+o[5]*i+o[9]*s,this.z=o[2]*e+o[6]*i+o[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,s=t.y,o=t.z,r=e.x,a=e.y,c=e.z;return this.x=s*c-o*a,this.y=o*r-i*c,this.z=i*a-s*r,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return cc.copy(this).projectOnVector(t),this.sub(cc)}reflect(t){return this.sub(cc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(nn(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const cc=new q,Dh=new xr;class yr{constructor(t=new q(1/0,1/0,1/0),e=new q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Jn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Jn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=Jn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const o=i.getAttribute("position");if(e===!0&&o!==void 0&&t.isInstancedMesh!==!0)for(let r=0,a=o.count;r<a;r++)t.isMesh===!0?t.getVertexPosition(r,Jn):Jn.fromBufferAttribute(o,r),Jn.applyMatrix4(t.matrixWorld),this.expandByPoint(Jn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Rr.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Rr.copy(i.boundingBox)),Rr.applyMatrix4(t.matrixWorld),this.union(Rr)}const s=t.children;for(let o=0,r=s.length;o<r;o++)this.expandByObject(s[o],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Jn),Jn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(No),Pr.subVectors(this.max,No),Gs.subVectors(t.a,No),Hs.subVectors(t.b,No),ks.subVectors(t.c,No),Zi.subVectors(Hs,Gs),Ji.subVectors(ks,Hs),gs.subVectors(Gs,ks);let e=[0,-Zi.z,Zi.y,0,-Ji.z,Ji.y,0,-gs.z,gs.y,Zi.z,0,-Zi.x,Ji.z,0,-Ji.x,gs.z,0,-gs.x,-Zi.y,Zi.x,0,-Ji.y,Ji.x,0,-gs.y,gs.x,0];return!lc(e,Gs,Hs,ks,Pr)||(e=[1,0,0,0,1,0,0,0,1],!lc(e,Gs,Hs,ks,Pr))?!1:(Cr.crossVectors(Zi,Ji),e=[Cr.x,Cr.y,Cr.z],lc(e,Gs,Hs,ks,Pr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Jn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Jn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Di[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Di[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Di[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Di[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Di[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Di[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Di[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Di[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Di),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Di=[new q,new q,new q,new q,new q,new q,new q,new q],Jn=new q,Rr=new yr,Gs=new q,Hs=new q,ks=new q,Zi=new q,Ji=new q,gs=new q,No=new q,Pr=new q,Cr=new q,_s=new q;function lc(n,t,e,i,s){for(let o=0,r=n.length-3;o<=r;o+=3){_s.fromArray(n,o);const a=s.x*Math.abs(_s.x)+s.y*Math.abs(_s.y)+s.z*Math.abs(_s.z),c=t.dot(_s),l=e.dot(_s),h=i.dot(_s);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const yv=new yr,Fo=new q,uc=new q;class Ba{constructor(t=new q,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):yv.setFromPoints(t).getCenter(i);let s=0;for(let o=0,r=t.length;o<r;o++)s=Math.max(s,i.distanceToSquared(t[o]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Fo.subVectors(t,this.center);const e=Fo.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(Fo,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(uc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Fo.copy(t.center).add(uc)),this.expandByPoint(Fo.copy(t.center).sub(uc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ui=new q,hc=new q,Ir=new q,Qi=new q,dc=new q,Lr=new q,fc=new q;class rp{constructor(t=new q,e=new q(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ui)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Ui.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ui.copy(this.origin).addScaledVector(this.direction,e),Ui.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){hc.copy(t).add(e).multiplyScalar(.5),Ir.copy(e).sub(t).normalize(),Qi.copy(this.origin).sub(hc);const o=t.distanceTo(e)*.5,r=-this.direction.dot(Ir),a=Qi.dot(this.direction),c=-Qi.dot(Ir),l=Qi.lengthSq(),h=Math.abs(1-r*r);let u,d,p,_;if(h>0)if(u=r*c-a,d=r*a-c,_=o*h,u>=0)if(d>=-_)if(d<=_){const y=1/h;u*=y,d*=y,p=u*(u+r*d+2*a)+d*(r*u+d+2*c)+l}else d=o,u=Math.max(0,-(r*d+a)),p=-u*u+d*(d+2*c)+l;else d=-o,u=Math.max(0,-(r*d+a)),p=-u*u+d*(d+2*c)+l;else d<=-_?(u=Math.max(0,-(-r*o+a)),d=u>0?-o:Math.min(Math.max(-o,-c),o),p=-u*u+d*(d+2*c)+l):d<=_?(u=0,d=Math.min(Math.max(-o,-c),o),p=d*(d+2*c)+l):(u=Math.max(0,-(r*o+a)),d=u>0?o:Math.min(Math.max(-o,-c),o),p=-u*u+d*(d+2*c)+l);else d=r>0?-o:o,u=Math.max(0,-(r*d+a)),p=-u*u+d*(d+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(hc).addScaledVector(Ir,d),p}intersectSphere(t,e){Ui.subVectors(t.center,this.origin);const i=Ui.dot(this.direction),s=Ui.dot(Ui)-i*i,o=t.radius*t.radius;if(s>o)return null;const r=Math.sqrt(o-s),a=i-r,c=i+r;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,o,r,a,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(i=(t.min.x-d.x)*l,s=(t.max.x-d.x)*l):(i=(t.max.x-d.x)*l,s=(t.min.x-d.x)*l),h>=0?(o=(t.min.y-d.y)*h,r=(t.max.y-d.y)*h):(o=(t.max.y-d.y)*h,r=(t.min.y-d.y)*h),i>r||o>s||((o>i||isNaN(i))&&(i=o),(r<s||isNaN(s))&&(s=r),u>=0?(a=(t.min.z-d.z)*u,c=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,c=(t.min.z-d.z)*u),i>c||a>s)||((a>i||i!==i)&&(i=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,Ui)!==null}intersectTriangle(t,e,i,s,o){dc.subVectors(e,t),Lr.subVectors(i,t),fc.crossVectors(dc,Lr);let r=this.direction.dot(fc),a;if(r>0){if(s)return null;a=1}else if(r<0)a=-1,r=-r;else return null;Qi.subVectors(this.origin,t);const c=a*this.direction.dot(Lr.crossVectors(Qi,Lr));if(c<0)return null;const l=a*this.direction.dot(dc.cross(Qi));if(l<0||c+l>r)return null;const h=-a*Qi.dot(fc);return h<0?null:this.at(h/r,o)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Fe{constructor(t,e,i,s,o,r,a,c,l,h,u,d,p,_,y,f){Fe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,o,r,a,c,l,h,u,d,p,_,y,f)}set(t,e,i,s,o,r,a,c,l,h,u,d,p,_,y,f){const m=this.elements;return m[0]=t,m[4]=e,m[8]=i,m[12]=s,m[1]=o,m[5]=r,m[9]=a,m[13]=c,m[2]=l,m[6]=h,m[10]=u,m[14]=d,m[3]=p,m[7]=_,m[11]=y,m[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Fe().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,s=1/Vs.setFromMatrixColumn(t,0).length(),o=1/Vs.setFromMatrixColumn(t,1).length(),r=1/Vs.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*o,e[5]=i[5]*o,e[6]=i[6]*o,e[7]=0,e[8]=i[8]*r,e[9]=i[9]*r,e[10]=i[10]*r,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,s=t.y,o=t.z,r=Math.cos(i),a=Math.sin(i),c=Math.cos(s),l=Math.sin(s),h=Math.cos(o),u=Math.sin(o);if(t.order==="XYZ"){const d=r*h,p=r*u,_=a*h,y=a*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=p+_*l,e[5]=d-y*l,e[9]=-a*c,e[2]=y-d*l,e[6]=_+p*l,e[10]=r*c}else if(t.order==="YXZ"){const d=c*h,p=c*u,_=l*h,y=l*u;e[0]=d+y*a,e[4]=_*a-p,e[8]=r*l,e[1]=r*u,e[5]=r*h,e[9]=-a,e[2]=p*a-_,e[6]=y+d*a,e[10]=r*c}else if(t.order==="ZXY"){const d=c*h,p=c*u,_=l*h,y=l*u;e[0]=d-y*a,e[4]=-r*u,e[8]=_+p*a,e[1]=p+_*a,e[5]=r*h,e[9]=y-d*a,e[2]=-r*l,e[6]=a,e[10]=r*c}else if(t.order==="ZYX"){const d=r*h,p=r*u,_=a*h,y=a*u;e[0]=c*h,e[4]=_*l-p,e[8]=d*l+y,e[1]=c*u,e[5]=y*l+d,e[9]=p*l-_,e[2]=-l,e[6]=a*c,e[10]=r*c}else if(t.order==="YZX"){const d=r*c,p=r*l,_=a*c,y=a*l;e[0]=c*h,e[4]=y-d*u,e[8]=_*u+p,e[1]=u,e[5]=r*h,e[9]=-a*h,e[2]=-l*h,e[6]=p*u+_,e[10]=d-y*u}else if(t.order==="XZY"){const d=r*c,p=r*l,_=a*c,y=a*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=d*u+y,e[5]=r*h,e[9]=p*u-_,e[2]=_*u-p,e[6]=a*h,e[10]=y*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Mv,t,wv)}lookAt(t,e,i){const s=this.elements;return Ln.subVectors(t,e),Ln.lengthSq()===0&&(Ln.z=1),Ln.normalize(),ts.crossVectors(i,Ln),ts.lengthSq()===0&&(Math.abs(i.z)===1?Ln.x+=1e-4:Ln.z+=1e-4,Ln.normalize(),ts.crossVectors(i,Ln)),ts.normalize(),Dr.crossVectors(Ln,ts),s[0]=ts.x,s[4]=Dr.x,s[8]=Ln.x,s[1]=ts.y,s[5]=Dr.y,s[9]=Ln.y,s[2]=ts.z,s[6]=Dr.z,s[10]=Ln.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,o=this.elements,r=i[0],a=i[4],c=i[8],l=i[12],h=i[1],u=i[5],d=i[9],p=i[13],_=i[2],y=i[6],f=i[10],m=i[14],E=i[3],M=i[7],S=i[11],O=i[15],I=s[0],P=s[4],U=s[8],Q=s[12],x=s[1],b=s[5],j=s[9],V=s[13],Z=s[2],at=s[6],W=s[10],J=s[14],G=s[3],mt=s[7],yt=s[11],gt=s[15];return o[0]=r*I+a*x+c*Z+l*G,o[4]=r*P+a*b+c*at+l*mt,o[8]=r*U+a*j+c*W+l*yt,o[12]=r*Q+a*V+c*J+l*gt,o[1]=h*I+u*x+d*Z+p*G,o[5]=h*P+u*b+d*at+p*mt,o[9]=h*U+u*j+d*W+p*yt,o[13]=h*Q+u*V+d*J+p*gt,o[2]=_*I+y*x+f*Z+m*G,o[6]=_*P+y*b+f*at+m*mt,o[10]=_*U+y*j+f*W+m*yt,o[14]=_*Q+y*V+f*J+m*gt,o[3]=E*I+M*x+S*Z+O*G,o[7]=E*P+M*b+S*at+O*mt,o[11]=E*U+M*j+S*W+O*yt,o[15]=E*Q+M*V+S*J+O*gt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],s=t[8],o=t[12],r=t[1],a=t[5],c=t[9],l=t[13],h=t[2],u=t[6],d=t[10],p=t[14],_=t[3],y=t[7],f=t[11],m=t[15];return _*(+o*c*u-s*l*u-o*a*d+i*l*d+s*a*p-i*c*p)+y*(+e*c*p-e*l*d+o*r*d-s*r*p+s*l*h-o*c*h)+f*(+e*l*u-e*a*p-o*r*u+i*r*p+o*a*h-i*l*h)+m*(-s*a*h-e*c*u+e*a*d+s*r*u-i*r*d+i*c*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],o=t[3],r=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=t[9],d=t[10],p=t[11],_=t[12],y=t[13],f=t[14],m=t[15],E=u*f*l-y*d*l+y*c*p-a*f*p-u*c*m+a*d*m,M=_*d*l-h*f*l-_*c*p+r*f*p+h*c*m-r*d*m,S=h*y*l-_*u*l+_*a*p-r*y*p-h*a*m+r*u*m,O=_*u*c-h*y*c-_*a*d+r*y*d+h*a*f-r*u*f,I=e*E+i*M+s*S+o*O;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/I;return t[0]=E*P,t[1]=(y*d*o-u*f*o-y*s*p+i*f*p+u*s*m-i*d*m)*P,t[2]=(a*f*o-y*c*o+y*s*l-i*f*l-a*s*m+i*c*m)*P,t[3]=(u*c*o-a*d*o-u*s*l+i*d*l+a*s*p-i*c*p)*P,t[4]=M*P,t[5]=(h*f*o-_*d*o+_*s*p-e*f*p-h*s*m+e*d*m)*P,t[6]=(_*c*o-r*f*o-_*s*l+e*f*l+r*s*m-e*c*m)*P,t[7]=(r*d*o-h*c*o+h*s*l-e*d*l-r*s*p+e*c*p)*P,t[8]=S*P,t[9]=(_*u*o-h*y*o-_*i*p+e*y*p+h*i*m-e*u*m)*P,t[10]=(r*y*o-_*a*o+_*i*l-e*y*l-r*i*m+e*a*m)*P,t[11]=(h*a*o-r*u*o-h*i*l+e*u*l+r*i*p-e*a*p)*P,t[12]=O*P,t[13]=(h*y*s-_*u*s+_*i*d-e*y*d-h*i*f+e*u*f)*P,t[14]=(_*a*s-r*y*s-_*i*c+e*y*c+r*i*f-e*a*f)*P,t[15]=(r*u*s-h*a*s+h*i*c-e*u*c-r*i*d+e*a*d)*P,this}scale(t){const e=this.elements,i=t.x,s=t.y,o=t.z;return e[0]*=i,e[4]*=s,e[8]*=o,e[1]*=i,e[5]*=s,e[9]*=o,e[2]*=i,e[6]*=s,e[10]*=o,e[3]*=i,e[7]*=s,e[11]*=o,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),s=Math.sin(e),o=1-i,r=t.x,a=t.y,c=t.z,l=o*r,h=o*a;return this.set(l*r+i,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+i,h*c-s*r,0,l*c-s*a,h*c+s*r,o*c*c+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,o,r){return this.set(1,i,o,0,t,1,r,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){const s=this.elements,o=e._x,r=e._y,a=e._z,c=e._w,l=o+o,h=r+r,u=a+a,d=o*l,p=o*h,_=o*u,y=r*h,f=r*u,m=a*u,E=c*l,M=c*h,S=c*u,O=i.x,I=i.y,P=i.z;return s[0]=(1-(y+m))*O,s[1]=(p+S)*O,s[2]=(_-M)*O,s[3]=0,s[4]=(p-S)*I,s[5]=(1-(d+m))*I,s[6]=(f+E)*I,s[7]=0,s[8]=(_+M)*P,s[9]=(f-E)*P,s[10]=(1-(d+y))*P,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){const s=this.elements;let o=Vs.set(s[0],s[1],s[2]).length();const r=Vs.set(s[4],s[5],s[6]).length(),a=Vs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(o=-o),t.x=s[12],t.y=s[13],t.z=s[14],Qn.copy(this);const l=1/o,h=1/r,u=1/a;return Qn.elements[0]*=l,Qn.elements[1]*=l,Qn.elements[2]*=l,Qn.elements[4]*=h,Qn.elements[5]*=h,Qn.elements[6]*=h,Qn.elements[8]*=u,Qn.elements[9]*=u,Qn.elements[10]*=u,e.setFromRotationMatrix(Qn),i.x=o,i.y=r,i.z=a,this}makePerspective(t,e,i,s,o,r,a=Vi){const c=this.elements,l=2*o/(e-t),h=2*o/(i-s),u=(e+t)/(e-t),d=(i+s)/(i-s);let p,_;if(a===Vi)p=-(r+o)/(r-o),_=-2*r*o/(r-o);else if(a===Ma)p=-r/(r-o),_=-r*o/(r-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,s,o,r,a=Vi){const c=this.elements,l=1/(e-t),h=1/(i-s),u=1/(r-o),d=(e+t)*l,p=(i+s)*h;let _,y;if(a===Vi)_=(r+o)*u,y=-2*u;else if(a===Ma)_=o*u,y=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-p,c[2]=0,c[6]=0,c[10]=y,c[14]=-_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const Vs=new q,Qn=new Fe,Mv=new q(0,0,0),wv=new q(1,1,1),ts=new q,Dr=new q,Ln=new q,Uh=new Fe,Nh=new xr;class bi{constructor(t=0,e=0,i=0,s=bi.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const s=t.elements,o=s[0],r=s[4],a=s[8],c=s[1],l=s[5],h=s[9],u=s[2],d=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(nn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-r,o)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-nn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,o),this._z=0);break;case"ZXY":this._x=Math.asin(nn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-r,l)):(this._y=0,this._z=Math.atan2(c,o));break;case"ZYX":this._y=Math.asin(-nn(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(c,o)):(this._x=0,this._z=Math.atan2(-r,l));break;case"YZX":this._z=Math.asin(nn(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,o)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-nn(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,o)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Uh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Uh,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Nh.setFromEuler(this),this.setFromQuaternion(Nh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}bi.DEFAULT_ORDER="XYZ";class ap{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Sv=0;const Fh=new q,Ws=new xr,Ni=new Fe,Ur=new q,Oo=new q,bv=new q,Ev=new xr,Oh=new q(1,0,0),Bh=new q(0,1,0),zh=new q(0,0,1),Gh={type:"added"},Tv={type:"removed"},Xs={type:"childadded",child:null},pc={type:"childremoved",child:null};class an extends Eo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Sv++}),this.uuid=Ns(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=an.DEFAULT_UP.clone();const t=new q,e=new bi,i=new xr,s=new q(1,1,1);function o(){i.setFromEuler(e,!1)}function r(){e.setFromQuaternion(i,void 0,!1)}e._onChange(o),i._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Fe},normalMatrix:{value:new ce}}),this.matrix=new Fe,this.matrixWorld=new Fe,this.matrixAutoUpdate=an.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=an.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ap,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ws.setFromAxisAngle(t,e),this.quaternion.multiply(Ws),this}rotateOnWorldAxis(t,e){return Ws.setFromAxisAngle(t,e),this.quaternion.premultiply(Ws),this}rotateX(t){return this.rotateOnAxis(Oh,t)}rotateY(t){return this.rotateOnAxis(Bh,t)}rotateZ(t){return this.rotateOnAxis(zh,t)}translateOnAxis(t,e){return Fh.copy(t).applyQuaternion(this.quaternion),this.position.add(Fh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Oh,t)}translateY(t){return this.translateOnAxis(Bh,t)}translateZ(t){return this.translateOnAxis(zh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ni.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Ur.copy(t):Ur.set(t,e,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Oo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ni.lookAt(Oo,Ur,this.up):Ni.lookAt(Ur,Oo,this.up),this.quaternion.setFromRotationMatrix(Ni),s&&(Ni.extractRotation(s.matrixWorld),Ws.setFromRotationMatrix(Ni),this.quaternion.premultiply(Ws.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Gh),Xs.child=t,this.dispatchEvent(Xs),Xs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Tv),pc.child=t,this.dispatchEvent(pc),pc.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ni.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ni.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ni),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Gh),Xs.child=t,this.dispatchEvent(Xs),Xs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){const r=this.children[i].getObjectByProperty(t,e);if(r!==void 0)return r}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const s=this.children;for(let o=0,r=s.length;o<r;o++)s[o].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Oo,t,bv),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Oo,Ev,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let o=0,r=s.length;o<r;o++)s[o].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function o(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=o(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];o(t.shapes,u)}else o(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(o(t.materials,this.material[c]));s.material=a}else s.material=o(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(o(t.animations,c))}}if(e){const a=r(t.geometries),c=r(t.materials),l=r(t.textures),h=r(t.images),u=r(t.shapes),d=r(t.skeletons),p=r(t.animations),_=r(t.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),_.length>0&&(i.nodes=_)}return i.object=s,i;function r(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const s=t.children[i];this.add(s.clone())}return this}}an.DEFAULT_UP=new q(0,1,0);an.DEFAULT_MATRIX_AUTO_UPDATE=!0;an.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ti=new q,Fi=new q,mc=new q,Oi=new q,qs=new q,Ys=new q,Hh=new q,gc=new q,_c=new q,vc=new q,xc=new Ae,yc=new Ae,Mc=new Ae;class si{constructor(t=new q,e=new q,i=new q){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),ti.subVectors(t,e),s.cross(ti);const o=s.lengthSq();return o>0?s.multiplyScalar(1/Math.sqrt(o)):s.set(0,0,0)}static getBarycoord(t,e,i,s,o){ti.subVectors(s,e),Fi.subVectors(i,e),mc.subVectors(t,e);const r=ti.dot(ti),a=ti.dot(Fi),c=ti.dot(mc),l=Fi.dot(Fi),h=Fi.dot(mc),u=r*l-a*a;if(u===0)return o.set(0,0,0),null;const d=1/u,p=(l*c-a*h)*d,_=(r*h-a*c)*d;return o.set(1-p-_,_,p)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,Oi)===null?!1:Oi.x>=0&&Oi.y>=0&&Oi.x+Oi.y<=1}static getInterpolation(t,e,i,s,o,r,a,c){return this.getBarycoord(t,e,i,s,Oi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(o,Oi.x),c.addScaledVector(r,Oi.y),c.addScaledVector(a,Oi.z),c)}static getInterpolatedAttribute(t,e,i,s,o,r){return xc.setScalar(0),yc.setScalar(0),Mc.setScalar(0),xc.fromBufferAttribute(t,e),yc.fromBufferAttribute(t,i),Mc.fromBufferAttribute(t,s),r.setScalar(0),r.addScaledVector(xc,o.x),r.addScaledVector(yc,o.y),r.addScaledVector(Mc,o.z),r}static isFrontFacing(t,e,i,s){return ti.subVectors(i,e),Fi.subVectors(t,e),ti.cross(Fi).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ti.subVectors(this.c,this.b),Fi.subVectors(this.a,this.b),ti.cross(Fi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return si.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return si.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,o){return si.getInterpolation(t,this.a,this.b,this.c,e,i,s,o)}containsPoint(t){return si.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return si.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,s=this.b,o=this.c;let r,a;qs.subVectors(s,i),Ys.subVectors(o,i),gc.subVectors(t,i);const c=qs.dot(gc),l=Ys.dot(gc);if(c<=0&&l<=0)return e.copy(i);_c.subVectors(t,s);const h=qs.dot(_c),u=Ys.dot(_c);if(h>=0&&u<=h)return e.copy(s);const d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return r=c/(c-h),e.copy(i).addScaledVector(qs,r);vc.subVectors(t,o);const p=qs.dot(vc),_=Ys.dot(vc);if(_>=0&&p<=_)return e.copy(o);const y=p*l-c*_;if(y<=0&&l>=0&&_<=0)return a=l/(l-_),e.copy(i).addScaledVector(Ys,a);const f=h*_-p*u;if(f<=0&&u-h>=0&&p-_>=0)return Hh.subVectors(o,s),a=(u-h)/(u-h+(p-_)),e.copy(s).addScaledVector(Hh,a);const m=1/(f+y+d);return r=y*m,a=d*m,e.copy(i).addScaledVector(qs,r).addScaledVector(Ys,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const cp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},es={h:0,s:0,l:0},Nr={h:0,s:0,l:0};function wc(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class he{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ei){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Se.toWorkingColorSpace(this,e),this}setRGB(t,e,i,s=Se.workingColorSpace){return this.r=t,this.g=e,this.b=i,Se.toWorkingColorSpace(this,s),this}setHSL(t,e,i,s=Se.workingColorSpace){if(t=xu(t,1),e=nn(e,0,1),i=nn(i,0,1),e===0)this.r=this.g=this.b=i;else{const o=i<=.5?i*(1+e):i+e-i*e,r=2*i-o;this.r=wc(r,o,t+1/3),this.g=wc(r,o,t),this.b=wc(r,o,t-1/3)}return Se.toWorkingColorSpace(this,s),this}setStyle(t,e=ei){function i(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let o;const r=s[1],a=s[2];switch(r){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,e);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,e);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const o=s[1],r=o.length;if(r===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,e);if(r===6)return this.setHex(parseInt(o,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ei){const i=cp[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ho(t.r),this.g=ho(t.g),this.b=ho(t.b),this}copyLinearToSRGB(t){return this.r=rc(t.r),this.g=rc(t.g),this.b=rc(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ei){return Se.fromWorkingColorSpace(hn.copy(this),t),Math.round(nn(hn.r*255,0,255))*65536+Math.round(nn(hn.g*255,0,255))*256+Math.round(nn(hn.b*255,0,255))}getHexString(t=ei){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Se.workingColorSpace){Se.fromWorkingColorSpace(hn.copy(this),e);const i=hn.r,s=hn.g,o=hn.b,r=Math.max(i,s,o),a=Math.min(i,s,o);let c,l;const h=(a+r)/2;if(a===r)c=0,l=0;else{const u=r-a;switch(l=h<=.5?u/(r+a):u/(2-r-a),r){case i:c=(s-o)/u+(s<o?6:0);break;case s:c=(o-i)/u+2;break;case o:c=(i-s)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=Se.workingColorSpace){return Se.fromWorkingColorSpace(hn.copy(this),e),t.r=hn.r,t.g=hn.g,t.b=hn.b,t}getStyle(t=ei){Se.fromWorkingColorSpace(hn.copy(this),t);const e=hn.r,i=hn.g,s=hn.b;return t!==ei?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(es),this.setHSL(es.h+t,es.s+e,es.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(es),t.getHSL(Nr);const i=Jo(es.h,Nr.h,e),s=Jo(es.s,Nr.s,e),o=Jo(es.l,Nr.l,e);return this.setHSL(i,s,o),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,s=this.b,o=t.elements;return this.r=o[0]*e+o[3]*i+o[6]*s,this.g=o[1]*e+o[4]*i+o[7]*s,this.b=o[2]*e+o[5]*i+o[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const hn=new he;he.NAMES=cp;let Av=0;class To extends Eo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Av++}),this.uuid=Ns(),this.name="",this.type="Material",this.blending=lo,this.side=us,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Jc,this.blendDst=Qc,this.blendEquation=Es,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new he(0,0,0),this.blendAlpha=0,this.depthFunc=vo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Th,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Bs,this.stencilZFail=Bs,this.stencilZPass=Bs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==lo&&(i.blending=this.blending),this.side!==us&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Jc&&(i.blendSrc=this.blendSrc),this.blendDst!==Qc&&(i.blendDst=this.blendDst),this.blendEquation!==Es&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==vo&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Th&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Bs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Bs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Bs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(o){const r=[];for(const a in o){const c=o[a];delete c.metadata,r.push(c)}return r}if(e){const o=s(t.textures),r=s(t.images);o.length>0&&(i.textures=o),r.length>0&&(i.images=r)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const s=e.length;i=new Array(s);for(let o=0;o!==s;++o)i[o]=e[o].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class An extends To{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new he(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bi,this.combine=kf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Ze=new q,Fr=new Ot;class wi{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Ah,this.updateRanges=[],this.gpuType=ki,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,o=this.itemSize;s<o;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Fr.fromBufferAttribute(this,e),Fr.applyMatrix3(t),this.setXY(e,Fr.x,Fr.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Ze.fromBufferAttribute(this,e),Ze.applyMatrix3(t),this.setXYZ(e,Ze.x,Ze.y,Ze.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Ze.fromBufferAttribute(this,e),Ze.applyMatrix4(t),this.setXYZ(e,Ze.x,Ze.y,Ze.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Ze.fromBufferAttribute(this,e),Ze.applyNormalMatrix(t),this.setXYZ(e,Ze.x,Ze.y,Ze.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Ze.fromBufferAttribute(this,e),Ze.transformDirection(t),this.setXYZ(e,Ze.x,Ze.y,Ze.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=to(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=vn(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=to(e,this.array)),e}setX(t,e){return this.normalized&&(e=vn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=to(e,this.array)),e}setY(t,e){return this.normalized&&(e=vn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=to(e,this.array)),e}setZ(t,e){return this.normalized&&(e=vn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=to(e,this.array)),e}setW(t,e){return this.normalized&&(e=vn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=vn(e,this.array),i=vn(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=vn(e,this.array),i=vn(i,this.array),s=vn(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,o){return t*=this.itemSize,this.normalized&&(e=vn(e,this.array),i=vn(i,this.array),s=vn(s,this.array),o=vn(o,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=o,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Ah&&(t.usage=this.usage),t}}class lp extends wi{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class up extends wi{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class qe extends wi{constructor(t,e,i){super(new Float32Array(t),e,i)}}let Rv=0;const Vn=new Fe,Sc=new an,$s=new q,Dn=new yr,Bo=new yr,en=new q;class Cn extends Eo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Rv++}),this.uuid=Ns(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(ip(t)?up:lp)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const o=new ce().getNormalMatrix(t);i.applyNormalMatrix(o),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Vn.makeRotationFromQuaternion(t),this.applyMatrix4(Vn),this}rotateX(t){return Vn.makeRotationX(t),this.applyMatrix4(Vn),this}rotateY(t){return Vn.makeRotationY(t),this.applyMatrix4(Vn),this}rotateZ(t){return Vn.makeRotationZ(t),this.applyMatrix4(Vn),this}translate(t,e,i){return Vn.makeTranslation(t,e,i),this.applyMatrix4(Vn),this}scale(t,e,i){return Vn.makeScale(t,e,i),this.applyMatrix4(Vn),this}lookAt(t){return Sc.lookAt(t),Sc.updateMatrix(),this.applyMatrix4(Sc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter($s).negate(),this.translate($s.x,$s.y,$s.z),this}setFromPoints(t){const e=[];for(let i=0,s=t.length;i<s;i++){const o=t[i];e.push(o.x,o.y,o.z||0)}return this.setAttribute("position",new qe(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new yr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new q(-1/0,-1/0,-1/0),new q(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){const o=e[i];Dn.setFromBufferAttribute(o),this.morphTargetsRelative?(en.addVectors(this.boundingBox.min,Dn.min),this.boundingBox.expandByPoint(en),en.addVectors(this.boundingBox.max,Dn.max),this.boundingBox.expandByPoint(en)):(this.boundingBox.expandByPoint(Dn.min),this.boundingBox.expandByPoint(Dn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ba);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new q,1/0);return}if(t){const i=this.boundingSphere.center;if(Dn.setFromBufferAttribute(t),e)for(let o=0,r=e.length;o<r;o++){const a=e[o];Bo.setFromBufferAttribute(a),this.morphTargetsRelative?(en.addVectors(Dn.min,Bo.min),Dn.expandByPoint(en),en.addVectors(Dn.max,Bo.max),Dn.expandByPoint(en)):(Dn.expandByPoint(Bo.min),Dn.expandByPoint(Bo.max))}Dn.getCenter(i);let s=0;for(let o=0,r=t.count;o<r;o++)en.fromBufferAttribute(t,o),s=Math.max(s,i.distanceToSquared(en));if(e)for(let o=0,r=e.length;o<r;o++){const a=e[o],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)en.fromBufferAttribute(a,l),c&&($s.fromBufferAttribute(t,l),en.add($s)),s=Math.max(s,i.distanceToSquared(en))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,s=e.normal,o=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new wi(new Float32Array(4*i.count),4));const r=this.getAttribute("tangent"),a=[],c=[];for(let U=0;U<i.count;U++)a[U]=new q,c[U]=new q;const l=new q,h=new q,u=new q,d=new Ot,p=new Ot,_=new Ot,y=new q,f=new q;function m(U,Q,x){l.fromBufferAttribute(i,U),h.fromBufferAttribute(i,Q),u.fromBufferAttribute(i,x),d.fromBufferAttribute(o,U),p.fromBufferAttribute(o,Q),_.fromBufferAttribute(o,x),h.sub(l),u.sub(l),p.sub(d),_.sub(d);const b=1/(p.x*_.y-_.x*p.y);isFinite(b)&&(y.copy(h).multiplyScalar(_.y).addScaledVector(u,-p.y).multiplyScalar(b),f.copy(u).multiplyScalar(p.x).addScaledVector(h,-_.x).multiplyScalar(b),a[U].add(y),a[Q].add(y),a[x].add(y),c[U].add(f),c[Q].add(f),c[x].add(f))}let E=this.groups;E.length===0&&(E=[{start:0,count:t.count}]);for(let U=0,Q=E.length;U<Q;++U){const x=E[U],b=x.start,j=x.count;for(let V=b,Z=b+j;V<Z;V+=3)m(t.getX(V+0),t.getX(V+1),t.getX(V+2))}const M=new q,S=new q,O=new q,I=new q;function P(U){O.fromBufferAttribute(s,U),I.copy(O);const Q=a[U];M.copy(Q),M.sub(O.multiplyScalar(O.dot(Q))).normalize(),S.crossVectors(I,Q);const b=S.dot(c[U])<0?-1:1;r.setXYZW(U,M.x,M.y,M.z,b)}for(let U=0,Q=E.length;U<Q;++U){const x=E[U],b=x.start,j=x.count;for(let V=b,Z=b+j;V<Z;V+=3)P(t.getX(V+0)),P(t.getX(V+1)),P(t.getX(V+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new wi(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);const s=new q,o=new q,r=new q,a=new q,c=new q,l=new q,h=new q,u=new q;if(t)for(let d=0,p=t.count;d<p;d+=3){const _=t.getX(d+0),y=t.getX(d+1),f=t.getX(d+2);s.fromBufferAttribute(e,_),o.fromBufferAttribute(e,y),r.fromBufferAttribute(e,f),h.subVectors(r,o),u.subVectors(s,o),h.cross(u),a.fromBufferAttribute(i,_),c.fromBufferAttribute(i,y),l.fromBufferAttribute(i,f),a.add(h),c.add(h),l.add(h),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(y,c.x,c.y,c.z),i.setXYZ(f,l.x,l.y,l.z)}else for(let d=0,p=e.count;d<p;d+=3)s.fromBufferAttribute(e,d+0),o.fromBufferAttribute(e,d+1),r.fromBufferAttribute(e,d+2),h.subVectors(r,o),u.subVectors(s,o),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)en.fromBufferAttribute(t,e),en.normalize(),t.setXYZ(e,en.x,en.y,en.z)}toNonIndexed(){function t(a,c){const l=a.array,h=a.itemSize,u=a.normalized,d=new l.constructor(c.length*h);let p=0,_=0;for(let y=0,f=c.length;y<f;y++){a.isInterleavedBufferAttribute?p=c[y]*a.data.stride+a.offset:p=c[y]*h;for(let m=0;m<h;m++)d[_++]=l[p++]}return new wi(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Cn,i=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=t(c,i);e.setAttribute(a,l)}const o=this.morphAttributes;for(const a in o){const c=[],l=o[a];for(let h=0,u=l.length;h<u;h++){const d=l[h],p=t(d,i);c.push(p)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let a=0,c=r.length;a<c;a++){const l=r[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const c in i){const l=i[c];t.data.attributes[c]=l.toJSON(t.data)}const s={};let o=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){const p=l[u];h.push(p.toJSON(t.data))}h.length>0&&(s[c]=h,o=!0)}o&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const s=t.attributes;for(const l in s){const h=s[l];this.setAttribute(l,h.clone(e))}const o=t.morphAttributes;for(const l in o){const h=[],u=o[l];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const r=t.groups;for(let l=0,h=r.length;l<h;l++){const u=r[l];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const kh=new Fe,vs=new rp,Or=new Ba,Vh=new q,Br=new q,zr=new q,Gr=new q,bc=new q,Hr=new q,Wh=new q,kr=new q;class A extends an{constructor(t=new Cn,e=new An){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=s.length;o<r;o++){const a=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}getVertexPosition(t,e){const i=this.geometry,s=i.attributes.position,o=i.morphAttributes.position,r=i.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(o&&a){Hr.set(0,0,0);for(let c=0,l=o.length;c<l;c++){const h=a[c],u=o[c];h!==0&&(bc.fromBufferAttribute(u,t),r?Hr.addScaledVector(bc,h):Hr.addScaledVector(bc.sub(e),h))}e.add(Hr)}return e}raycast(t,e){const i=this.geometry,s=this.material,o=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Or.copy(i.boundingSphere),Or.applyMatrix4(o),vs.copy(t.ray).recast(t.near),!(Or.containsPoint(vs.origin)===!1&&(vs.intersectSphere(Or,Vh)===null||vs.origin.distanceToSquared(Vh)>(t.far-t.near)**2))&&(kh.copy(o).invert(),vs.copy(t.ray).applyMatrix4(kh),!(i.boundingBox!==null&&vs.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,vs)))}_computeIntersections(t,e,i){let s;const o=this.geometry,r=this.material,a=o.index,c=o.attributes.position,l=o.attributes.uv,h=o.attributes.uv1,u=o.attributes.normal,d=o.groups,p=o.drawRange;if(a!==null)if(Array.isArray(r))for(let _=0,y=d.length;_<y;_++){const f=d[_],m=r[f.materialIndex],E=Math.max(f.start,p.start),M=Math.min(a.count,Math.min(f.start+f.count,p.start+p.count));for(let S=E,O=M;S<O;S+=3){const I=a.getX(S),P=a.getX(S+1),U=a.getX(S+2);s=Vr(this,m,t,i,l,h,u,I,P,U),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=f.materialIndex,e.push(s))}}else{const _=Math.max(0,p.start),y=Math.min(a.count,p.start+p.count);for(let f=_,m=y;f<m;f+=3){const E=a.getX(f),M=a.getX(f+1),S=a.getX(f+2);s=Vr(this,r,t,i,l,h,u,E,M,S),s&&(s.faceIndex=Math.floor(f/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(r))for(let _=0,y=d.length;_<y;_++){const f=d[_],m=r[f.materialIndex],E=Math.max(f.start,p.start),M=Math.min(c.count,Math.min(f.start+f.count,p.start+p.count));for(let S=E,O=M;S<O;S+=3){const I=S,P=S+1,U=S+2;s=Vr(this,m,t,i,l,h,u,I,P,U),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=f.materialIndex,e.push(s))}}else{const _=Math.max(0,p.start),y=Math.min(c.count,p.start+p.count);for(let f=_,m=y;f<m;f+=3){const E=f,M=f+1,S=f+2;s=Vr(this,r,t,i,l,h,u,E,M,S),s&&(s.faceIndex=Math.floor(f/3),e.push(s))}}}}function Pv(n,t,e,i,s,o,r,a){let c;if(t.side===Tn?c=i.intersectTriangle(r,o,s,!0,a):c=i.intersectTriangle(s,o,r,t.side===us,a),c===null)return null;kr.copy(a),kr.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo(kr);return l<e.near||l>e.far?null:{distance:l,point:kr.clone(),object:n}}function Vr(n,t,e,i,s,o,r,a,c,l){n.getVertexPosition(a,Br),n.getVertexPosition(c,zr),n.getVertexPosition(l,Gr);const h=Pv(n,t,e,i,Br,zr,Gr,Wh);if(h){const u=new q;si.getBarycoord(Wh,Br,zr,Gr,u),s&&(h.uv=si.getInterpolatedAttribute(s,a,c,l,u,new Ot)),o&&(h.uv1=si.getInterpolatedAttribute(o,a,c,l,u,new Ot)),r&&(h.normal=si.getInterpolatedAttribute(r,a,c,l,u,new q),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:c,c:l,normal:new q,materialIndex:0};si.getNormal(Br,zr,Gr,d.normal),h.face=d,h.barycoord=u}return h}class ri extends Cn{constructor(t=1,e=1,i=1,s=1,o=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:o,depthSegments:r};const a=this;s=Math.floor(s),o=Math.floor(o),r=Math.floor(r);const c=[],l=[],h=[],u=[];let d=0,p=0;_("z","y","x",-1,-1,i,e,t,r,o,0),_("z","y","x",1,-1,i,e,-t,r,o,1),_("x","z","y",1,1,t,i,e,s,r,2),_("x","z","y",1,-1,t,i,-e,s,r,3),_("x","y","z",1,-1,t,e,i,s,o,4),_("x","y","z",-1,-1,t,e,-i,s,o,5),this.setIndex(c),this.setAttribute("position",new qe(l,3)),this.setAttribute("normal",new qe(h,3)),this.setAttribute("uv",new qe(u,2));function _(y,f,m,E,M,S,O,I,P,U,Q){const x=S/P,b=O/U,j=S/2,V=O/2,Z=I/2,at=P+1,W=U+1;let J=0,G=0;const mt=new q;for(let yt=0;yt<W;yt++){const gt=yt*b-V;for(let It=0;It<at;It++){const zt=It*x-j;mt[y]=zt*E,mt[f]=gt*M,mt[m]=Z,l.push(mt.x,mt.y,mt.z),mt[y]=0,mt[f]=0,mt[m]=I>0?1:-1,h.push(mt.x,mt.y,mt.z),u.push(It/P),u.push(1-yt/U),J+=1}}for(let yt=0;yt<U;yt++)for(let gt=0;gt<P;gt++){const It=d+gt+at*yt,zt=d+gt+at*(yt+1),rt=d+(gt+1)+at*(yt+1),ft=d+(gt+1)+at*yt;c.push(It,zt,ft),c.push(zt,rt,ft),G+=6}a.addGroup(p,G,Q),p+=G,d+=J}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ri(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function So(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const s=n[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function xn(n){const t={};for(let e=0;e<n.length;e++){const i=So(n[e]);for(const s in i)t[s]=i[s]}return t}function Cv(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function hp(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Se.workingColorSpace}const Iv={clone:So,merge:xn};var Lv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Dv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Pn extends To{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Lv,this.fragmentShader=Dv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=So(t.uniforms),this.uniformsGroups=Cv(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const r=this.uniforms[s].value;r&&r.isTexture?e.uniforms[s]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?e.uniforms[s]={type:"c",value:r.getHex()}:r&&r.isVector2?e.uniforms[s]={type:"v2",value:r.toArray()}:r&&r.isVector3?e.uniforms[s]={type:"v3",value:r.toArray()}:r&&r.isVector4?e.uniforms[s]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?e.uniforms[s]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?e.uniforms[s]={type:"m4",value:r.toArray()}:e.uniforms[s]={value:r}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class dp extends an{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Fe,this.projectionMatrix=new Fe,this.projectionMatrixInverse=new Fe,this.coordinateSystem=Vi}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ns=new q,Xh=new Ot,qh=new Ot;class Be extends dp{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=hr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Zo*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return hr*2*Math.atan(Math.tan(Zo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){ns.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ns.x,ns.y).multiplyScalar(-t/ns.z),ns.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ns.x,ns.y).multiplyScalar(-t/ns.z)}getViewSize(t,e){return this.getViewBounds(t,Xh,qh),e.subVectors(qh,Xh)}setViewOffset(t,e,i,s,o,r){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=o,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Zo*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,o=-.5*s;const r=this.view;if(this.view!==null&&this.view.enabled){const c=r.fullWidth,l=r.fullHeight;o+=r.offsetX*s/c,e-=r.offsetY*i/l,s*=r.width/c,i*=r.height/l}const a=this.filmOffset;a!==0&&(o+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+s,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const js=-90,Ks=1;class Uv extends an{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Be(js,Ks,t,e);s.layers=this.layers,this.add(s);const o=new Be(js,Ks,t,e);o.layers=this.layers,this.add(o);const r=new Be(js,Ks,t,e);r.layers=this.layers,this.add(r);const a=new Be(js,Ks,t,e);a.layers=this.layers,this.add(a);const c=new Be(js,Ks,t,e);c.layers=this.layers,this.add(c);const l=new Be(js,Ks,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,s,o,r,a,c]=e;for(const l of e)this.remove(l);if(t===Vi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Ma)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[o,r,a,c,l,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;const y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(e,o),t.setRenderTarget(i,1,s),t.render(e,r),t.setRenderTarget(i,2,s),t.render(e,a),t.setRenderTarget(i,3,s),t.render(e,c),t.setRenderTarget(i,4,s),t.render(e,l),i.texture.generateMipmaps=y,t.setRenderTarget(i,5,s),t.render(e,h),t.setRenderTarget(u,d,p),t.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class yu extends wn{constructor(t,e,i,s,o,r,a,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:xo,super(t,e,i,s,o,r,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Nv extends Ls{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new yu(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:ii}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ri(5,5,5),o=new Pn({name:"CubemapFromEquirect",uniforms:So(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Tn,blending:as});o.uniforms.tEquirect.value=e;const r=new A(s,o),a=e.minFilter;return e.minFilter===Rs&&(e.minFilter=ii),new Uv(1,10,this).update(t,r),e.minFilter=a,r.geometry.dispose(),r.material.dispose(),this}clear(t,e,i,s){const o=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(e,i,s);t.setRenderTarget(o)}}const Ec=new q,Fv=new q,Ov=new ce;class Ss{constructor(t=new q(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const s=Ec.subVectors(i,e).cross(Fv.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(Ec),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const o=-(t.start.dot(this.normal)+this.constant)/s;return o<0||o>1?null:e.copy(t.start).addScaledVector(i,o)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||Ov.getNormalMatrix(t),s=this.coplanarPoint(Ec).applyMatrix4(t),o=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(o),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const xs=new Ba,Wr=new q;class Mu{constructor(t=new Ss,e=new Ss,i=new Ss,s=new Ss,o=new Ss,r=new Ss){this.planes=[t,e,i,s,o,r]}set(t,e,i,s,o,r){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(s),a[4].copy(o),a[5].copy(r),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Vi){const i=this.planes,s=t.elements,o=s[0],r=s[1],a=s[2],c=s[3],l=s[4],h=s[5],u=s[6],d=s[7],p=s[8],_=s[9],y=s[10],f=s[11],m=s[12],E=s[13],M=s[14],S=s[15];if(i[0].setComponents(c-o,d-l,f-p,S-m).normalize(),i[1].setComponents(c+o,d+l,f+p,S+m).normalize(),i[2].setComponents(c+r,d+h,f+_,S+E).normalize(),i[3].setComponents(c-r,d-h,f-_,S-E).normalize(),i[4].setComponents(c-a,d-u,f-y,S-M).normalize(),e===Vi)i[5].setComponents(c+a,d+u,f+y,S+M).normalize();else if(e===Ma)i[5].setComponents(a,u,y,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),xs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),xs.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(xs)}intersectsSprite(t){return xs.center.set(0,0,0),xs.radius=.7071067811865476,xs.applyMatrix4(t.matrixWorld),this.intersectsSphere(xs)}intersectsSphere(t){const e=this.planes,i=t.center,s=-t.radius;for(let o=0;o<6;o++)if(e[o].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const s=e[i];if(Wr.x=s.normal.x>0?t.max.x:t.min.x,Wr.y=s.normal.y>0?t.max.y:t.min.y,Wr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Wr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function fp(){let n=null,t=!1,e=null,i=null;function s(o,r){e(o,r),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(o){e=o},setContext:function(o){n=o}}}function Bv(n){const t=new WeakMap;function e(a,c){const l=a.array,h=a.usage,u=l.byteLength,d=n.createBuffer();n.bindBuffer(c,d),n.bufferData(c,l,h),a.onUploadCallback();let p;if(l instanceof Float32Array)p=n.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=n.SHORT;else if(l instanceof Uint32Array)p=n.UNSIGNED_INT;else if(l instanceof Int32Array)p=n.INT;else if(l instanceof Int8Array)p=n.BYTE;else if(l instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function i(a,c,l){const h=c.array,u=c.updateRanges;if(n.bindBuffer(l,a),u.length===0)n.bufferSubData(l,0,h);else{u.sort((p,_)=>p.start-_.start);let d=0;for(let p=1;p<u.length;p++){const _=u[d],y=u[p];y.start<=_.start+_.count+1?_.count=Math.max(_.count,y.start+y.count-_.start):(++d,u[d]=y)}u.length=d+1;for(let p=0,_=u.length;p<_;p++){const y=u[p];n.bufferSubData(l,y.start*h.BYTES_PER_ELEMENT,h,y.start,y.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function o(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);c&&(n.deleteBuffer(c.buffer),t.delete(a))}function r(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,a,c),l.version=a.version}}return{get:s,remove:o,update:r}}class za extends Cn{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};const o=t/2,r=e/2,a=Math.floor(i),c=Math.floor(s),l=a+1,h=c+1,u=t/a,d=e/c,p=[],_=[],y=[],f=[];for(let m=0;m<h;m++){const E=m*d-r;for(let M=0;M<l;M++){const S=M*u-o;_.push(S,-E,0),y.push(0,0,1),f.push(M/a),f.push(1-m/c)}}for(let m=0;m<c;m++)for(let E=0;E<a;E++){const M=E+l*m,S=E+l*(m+1),O=E+1+l*(m+1),I=E+1+l*m;p.push(M,S,I),p.push(S,O,I)}this.setIndex(p),this.setAttribute("position",new qe(_,3)),this.setAttribute("normal",new qe(y,3)),this.setAttribute("uv",new qe(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new za(t.width,t.height,t.widthSegments,t.heightSegments)}}var zv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Gv=`#ifdef USE_ALPHAHASH
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
#endif`,Hv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,kv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Vv=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Wv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Xv=`#ifdef USE_AOMAP
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
#endif`,qv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Yv=`#ifdef USE_BATCHING
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
#endif`,$v=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,jv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Kv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Zv=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Jv=`#ifdef USE_IRIDESCENCE
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
#endif`,Qv=`#ifdef USE_BUMPMAP
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
#endif`,tx=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,ex=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,nx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ix=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,sx=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ox=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,rx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,ax=`#if defined( USE_COLOR_ALPHA )
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
#endif`,cx=`#define PI 3.141592653589793
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
} // validated`,lx=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,ux=`vec3 transformedNormal = objectNormal;
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
#endif`,hx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,dx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,fx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,px=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,mx="gl_FragColor = linearToOutputTexel( gl_FragColor );",gx=`
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
}`,_x=`#ifdef USE_ENVMAP
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
#endif`,vx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,xx=`#ifdef USE_ENVMAP
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
#endif`,yx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Mx=`#ifdef USE_ENVMAP
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
#endif`,wx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Sx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,bx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ex=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Tx=`#ifdef USE_GRADIENTMAP
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
}`,Ax=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Rx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Px=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Cx=`uniform bool receiveShadow;
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
#endif`,Ix=`#ifdef USE_ENVMAP
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
#endif`,Lx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Dx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ux=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Nx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Fx=`PhysicalMaterial material;
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
#endif`,Ox=`struct PhysicalMaterial {
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
}`,Bx=`
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
#endif`,zx=`#if defined( RE_IndirectDiffuse )
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
#endif`,Gx=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Hx=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,kx=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Vx=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Wx=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Xx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,qx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Yx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,$x=`#if defined( USE_POINTS_UV )
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
#endif`,jx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Kx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Zx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Jx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Qx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ty=`#ifdef USE_MORPHTARGETS
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
#endif`,ey=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ny=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,iy=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,sy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,oy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ry=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ay=`#ifdef USE_NORMALMAP
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
#endif`,cy=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ly=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,uy=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,hy=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,dy=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,fy=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,py=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,my=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,gy=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,_y=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,vy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,xy=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,yy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,My=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,wy=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Sy=`float getShadowMask() {
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
}`,by=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ey=`#ifdef USE_SKINNING
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
#endif`,Ty=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ay=`#ifdef USE_SKINNING
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
#endif`,Ry=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Py=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Cy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Iy=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ly=`#ifdef USE_TRANSMISSION
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
#endif`,Dy=`#ifdef USE_TRANSMISSION
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
#endif`,Uy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ny=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Fy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Oy=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const By=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,zy=`uniform sampler2D t2D;
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
}`,Gy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Hy=`#ifdef ENVMAP_TYPE_CUBE
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
}`,ky=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Vy=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Wy=`#include <common>
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
}`,Xy=`#if DEPTH_PACKING == 3200
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
}`,qy=`#define DISTANCE
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
}`,Yy=`#define DISTANCE
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
}`,$y=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,jy=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ky=`uniform float scale;
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
}`,Zy=`uniform vec3 diffuse;
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
}`,Jy=`#include <common>
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
}`,Qy=`uniform vec3 diffuse;
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
}`,tM=`#define LAMBERT
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
}`,eM=`#define LAMBERT
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
}`,nM=`#define MATCAP
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
}`,iM=`#define MATCAP
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
}`,sM=`#define NORMAL
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
}`,oM=`#define NORMAL
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
}`,rM=`#define PHONG
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
}`,aM=`#define PHONG
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
}`,cM=`#define STANDARD
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
}`,lM=`#define STANDARD
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
}`,uM=`#define TOON
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
}`,hM=`#define TOON
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
}`,dM=`uniform float size;
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
}`,fM=`uniform vec3 diffuse;
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
}`,pM=`#include <common>
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
}`,mM=`uniform vec3 color;
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
}`,gM=`uniform float rotation;
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
}`,_M=`uniform vec3 diffuse;
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
}`,ae={alphahash_fragment:zv,alphahash_pars_fragment:Gv,alphamap_fragment:Hv,alphamap_pars_fragment:kv,alphatest_fragment:Vv,alphatest_pars_fragment:Wv,aomap_fragment:Xv,aomap_pars_fragment:qv,batching_pars_vertex:Yv,batching_vertex:$v,begin_vertex:jv,beginnormal_vertex:Kv,bsdfs:Zv,iridescence_fragment:Jv,bumpmap_pars_fragment:Qv,clipping_planes_fragment:tx,clipping_planes_pars_fragment:ex,clipping_planes_pars_vertex:nx,clipping_planes_vertex:ix,color_fragment:sx,color_pars_fragment:ox,color_pars_vertex:rx,color_vertex:ax,common:cx,cube_uv_reflection_fragment:lx,defaultnormal_vertex:ux,displacementmap_pars_vertex:hx,displacementmap_vertex:dx,emissivemap_fragment:fx,emissivemap_pars_fragment:px,colorspace_fragment:mx,colorspace_pars_fragment:gx,envmap_fragment:_x,envmap_common_pars_fragment:vx,envmap_pars_fragment:xx,envmap_pars_vertex:yx,envmap_physical_pars_fragment:Ix,envmap_vertex:Mx,fog_vertex:wx,fog_pars_vertex:Sx,fog_fragment:bx,fog_pars_fragment:Ex,gradientmap_pars_fragment:Tx,lightmap_pars_fragment:Ax,lights_lambert_fragment:Rx,lights_lambert_pars_fragment:Px,lights_pars_begin:Cx,lights_toon_fragment:Lx,lights_toon_pars_fragment:Dx,lights_phong_fragment:Ux,lights_phong_pars_fragment:Nx,lights_physical_fragment:Fx,lights_physical_pars_fragment:Ox,lights_fragment_begin:Bx,lights_fragment_maps:zx,lights_fragment_end:Gx,logdepthbuf_fragment:Hx,logdepthbuf_pars_fragment:kx,logdepthbuf_pars_vertex:Vx,logdepthbuf_vertex:Wx,map_fragment:Xx,map_pars_fragment:qx,map_particle_fragment:Yx,map_particle_pars_fragment:$x,metalnessmap_fragment:jx,metalnessmap_pars_fragment:Kx,morphinstance_vertex:Zx,morphcolor_vertex:Jx,morphnormal_vertex:Qx,morphtarget_pars_vertex:ty,morphtarget_vertex:ey,normal_fragment_begin:ny,normal_fragment_maps:iy,normal_pars_fragment:sy,normal_pars_vertex:oy,normal_vertex:ry,normalmap_pars_fragment:ay,clearcoat_normal_fragment_begin:cy,clearcoat_normal_fragment_maps:ly,clearcoat_pars_fragment:uy,iridescence_pars_fragment:hy,opaque_fragment:dy,packing:fy,premultiplied_alpha_fragment:py,project_vertex:my,dithering_fragment:gy,dithering_pars_fragment:_y,roughnessmap_fragment:vy,roughnessmap_pars_fragment:xy,shadowmap_pars_fragment:yy,shadowmap_pars_vertex:My,shadowmap_vertex:wy,shadowmask_pars_fragment:Sy,skinbase_vertex:by,skinning_pars_vertex:Ey,skinning_vertex:Ty,skinnormal_vertex:Ay,specularmap_fragment:Ry,specularmap_pars_fragment:Py,tonemapping_fragment:Cy,tonemapping_pars_fragment:Iy,transmission_fragment:Ly,transmission_pars_fragment:Dy,uv_pars_fragment:Uy,uv_pars_vertex:Ny,uv_vertex:Fy,worldpos_vertex:Oy,background_vert:By,background_frag:zy,backgroundCube_vert:Gy,backgroundCube_frag:Hy,cube_vert:ky,cube_frag:Vy,depth_vert:Wy,depth_frag:Xy,distanceRGBA_vert:qy,distanceRGBA_frag:Yy,equirect_vert:$y,equirect_frag:jy,linedashed_vert:Ky,linedashed_frag:Zy,meshbasic_vert:Jy,meshbasic_frag:Qy,meshlambert_vert:tM,meshlambert_frag:eM,meshmatcap_vert:nM,meshmatcap_frag:iM,meshnormal_vert:sM,meshnormal_frag:oM,meshphong_vert:rM,meshphong_frag:aM,meshphysical_vert:cM,meshphysical_frag:lM,meshtoon_vert:uM,meshtoon_frag:hM,points_vert:dM,points_frag:fM,shadow_vert:pM,shadow_frag:mM,sprite_vert:gM,sprite_frag:_M},Ft={common:{diffuse:{value:new he(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ce},alphaMap:{value:null},alphaMapTransform:{value:new ce},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ce}},envmap:{envMap:{value:null},envMapRotation:{value:new ce},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ce}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ce}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ce},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ce},normalScale:{value:new Ot(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ce},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ce}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ce}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ce}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new he(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new he(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ce},alphaTest:{value:0},uvTransform:{value:new ce}},sprite:{diffuse:{value:new he(16777215)},opacity:{value:1},center:{value:new Ot(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ce},alphaMap:{value:null},alphaMapTransform:{value:new ce},alphaTest:{value:0}}},yi={basic:{uniforms:xn([Ft.common,Ft.specularmap,Ft.envmap,Ft.aomap,Ft.lightmap,Ft.fog]),vertexShader:ae.meshbasic_vert,fragmentShader:ae.meshbasic_frag},lambert:{uniforms:xn([Ft.common,Ft.specularmap,Ft.envmap,Ft.aomap,Ft.lightmap,Ft.emissivemap,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.fog,Ft.lights,{emissive:{value:new he(0)}}]),vertexShader:ae.meshlambert_vert,fragmentShader:ae.meshlambert_frag},phong:{uniforms:xn([Ft.common,Ft.specularmap,Ft.envmap,Ft.aomap,Ft.lightmap,Ft.emissivemap,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.fog,Ft.lights,{emissive:{value:new he(0)},specular:{value:new he(1118481)},shininess:{value:30}}]),vertexShader:ae.meshphong_vert,fragmentShader:ae.meshphong_frag},standard:{uniforms:xn([Ft.common,Ft.envmap,Ft.aomap,Ft.lightmap,Ft.emissivemap,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.roughnessmap,Ft.metalnessmap,Ft.fog,Ft.lights,{emissive:{value:new he(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ae.meshphysical_vert,fragmentShader:ae.meshphysical_frag},toon:{uniforms:xn([Ft.common,Ft.aomap,Ft.lightmap,Ft.emissivemap,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.gradientmap,Ft.fog,Ft.lights,{emissive:{value:new he(0)}}]),vertexShader:ae.meshtoon_vert,fragmentShader:ae.meshtoon_frag},matcap:{uniforms:xn([Ft.common,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.fog,{matcap:{value:null}}]),vertexShader:ae.meshmatcap_vert,fragmentShader:ae.meshmatcap_frag},points:{uniforms:xn([Ft.points,Ft.fog]),vertexShader:ae.points_vert,fragmentShader:ae.points_frag},dashed:{uniforms:xn([Ft.common,Ft.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ae.linedashed_vert,fragmentShader:ae.linedashed_frag},depth:{uniforms:xn([Ft.common,Ft.displacementmap]),vertexShader:ae.depth_vert,fragmentShader:ae.depth_frag},normal:{uniforms:xn([Ft.common,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,{opacity:{value:1}}]),vertexShader:ae.meshnormal_vert,fragmentShader:ae.meshnormal_frag},sprite:{uniforms:xn([Ft.sprite,Ft.fog]),vertexShader:ae.sprite_vert,fragmentShader:ae.sprite_frag},background:{uniforms:{uvTransform:{value:new ce},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ae.background_vert,fragmentShader:ae.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ce}},vertexShader:ae.backgroundCube_vert,fragmentShader:ae.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ae.cube_vert,fragmentShader:ae.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ae.equirect_vert,fragmentShader:ae.equirect_frag},distanceRGBA:{uniforms:xn([Ft.common,Ft.displacementmap,{referencePosition:{value:new q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ae.distanceRGBA_vert,fragmentShader:ae.distanceRGBA_frag},shadow:{uniforms:xn([Ft.lights,Ft.fog,{color:{value:new he(0)},opacity:{value:1}}]),vertexShader:ae.shadow_vert,fragmentShader:ae.shadow_frag}};yi.physical={uniforms:xn([yi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ce},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ce},clearcoatNormalScale:{value:new Ot(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ce},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ce},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ce},sheen:{value:0},sheenColor:{value:new he(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ce},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ce},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ce},transmissionSamplerSize:{value:new Ot},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ce},attenuationDistance:{value:0},attenuationColor:{value:new he(0)},specularColor:{value:new he(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ce},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ce},anisotropyVector:{value:new Ot},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ce}}]),vertexShader:ae.meshphysical_vert,fragmentShader:ae.meshphysical_frag};const Xr={r:0,b:0,g:0},ys=new bi,vM=new Fe;function xM(n,t,e,i,s,o,r){const a=new he(0);let c=o===!0?0:1,l,h,u=null,d=0,p=null;function _(E){let M=E.isScene===!0?E.background:null;return M&&M.isTexture&&(M=(E.backgroundBlurriness>0?e:t).get(M)),M}function y(E){let M=!1;const S=_(E);S===null?m(a,c):S&&S.isColor&&(m(S,1),M=!0);const O=n.xr.getEnvironmentBlendMode();O==="additive"?i.buffers.color.setClear(0,0,0,1,r):O==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,r),(n.autoClear||M)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function f(E,M){const S=_(M);S&&(S.isCubeTexture||S.mapping===Fa)?(h===void 0&&(h=new A(new ri(1,1,1),new Pn({name:"BackgroundCubeMaterial",uniforms:So(yi.backgroundCube.uniforms),vertexShader:yi.backgroundCube.vertexShader,fragmentShader:yi.backgroundCube.fragmentShader,side:Tn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(O,I,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),ys.copy(M.backgroundRotation),ys.x*=-1,ys.y*=-1,ys.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(ys.y*=-1,ys.z*=-1),h.material.uniforms.envMap.value=S,h.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(vM.makeRotationFromEuler(ys)),h.material.toneMapped=Se.getTransfer(S.colorSpace)!==Ne,(u!==S||d!==S.version||p!==n.toneMapping)&&(h.material.needsUpdate=!0,u=S,d=S.version,p=n.toneMapping),h.layers.enableAll(),E.unshift(h,h.geometry,h.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new A(new za(2,2),new Pn({name:"BackgroundMaterial",uniforms:So(yi.background.uniforms),vertexShader:yi.background.vertexShader,fragmentShader:yi.background.fragmentShader,side:us,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=Se.getTransfer(S.colorSpace)!==Ne,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(u!==S||d!==S.version||p!==n.toneMapping)&&(l.material.needsUpdate=!0,u=S,d=S.version,p=n.toneMapping),l.layers.enableAll(),E.unshift(l,l.geometry,l.material,0,0,null))}function m(E,M){E.getRGB(Xr,hp(n)),i.buffers.color.setClear(Xr.r,Xr.g,Xr.b,M,r)}return{getClearColor:function(){return a},setClearColor:function(E,M=1){a.set(E),c=M,m(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(E){c=E,m(a,c)},render:y,addToRenderList:f}}function yM(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=d(null);let o=s,r=!1;function a(x,b,j,V,Z){let at=!1;const W=u(V,j,b);o!==W&&(o=W,l(o.object)),at=p(x,V,j,Z),at&&_(x,V,j,Z),Z!==null&&t.update(Z,n.ELEMENT_ARRAY_BUFFER),(at||r)&&(r=!1,S(x,b,j,V),Z!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(Z).buffer))}function c(){return n.createVertexArray()}function l(x){return n.bindVertexArray(x)}function h(x){return n.deleteVertexArray(x)}function u(x,b,j){const V=j.wireframe===!0;let Z=i[x.id];Z===void 0&&(Z={},i[x.id]=Z);let at=Z[b.id];at===void 0&&(at={},Z[b.id]=at);let W=at[V];return W===void 0&&(W=d(c()),at[V]=W),W}function d(x){const b=[],j=[],V=[];for(let Z=0;Z<e;Z++)b[Z]=0,j[Z]=0,V[Z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:b,enabledAttributes:j,attributeDivisors:V,object:x,attributes:{},index:null}}function p(x,b,j,V){const Z=o.attributes,at=b.attributes;let W=0;const J=j.getAttributes();for(const G in J)if(J[G].location>=0){const yt=Z[G];let gt=at[G];if(gt===void 0&&(G==="instanceMatrix"&&x.instanceMatrix&&(gt=x.instanceMatrix),G==="instanceColor"&&x.instanceColor&&(gt=x.instanceColor)),yt===void 0||yt.attribute!==gt||gt&&yt.data!==gt.data)return!0;W++}return o.attributesNum!==W||o.index!==V}function _(x,b,j,V){const Z={},at=b.attributes;let W=0;const J=j.getAttributes();for(const G in J)if(J[G].location>=0){let yt=at[G];yt===void 0&&(G==="instanceMatrix"&&x.instanceMatrix&&(yt=x.instanceMatrix),G==="instanceColor"&&x.instanceColor&&(yt=x.instanceColor));const gt={};gt.attribute=yt,yt&&yt.data&&(gt.data=yt.data),Z[G]=gt,W++}o.attributes=Z,o.attributesNum=W,o.index=V}function y(){const x=o.newAttributes;for(let b=0,j=x.length;b<j;b++)x[b]=0}function f(x){m(x,0)}function m(x,b){const j=o.newAttributes,V=o.enabledAttributes,Z=o.attributeDivisors;j[x]=1,V[x]===0&&(n.enableVertexAttribArray(x),V[x]=1),Z[x]!==b&&(n.vertexAttribDivisor(x,b),Z[x]=b)}function E(){const x=o.newAttributes,b=o.enabledAttributes;for(let j=0,V=b.length;j<V;j++)b[j]!==x[j]&&(n.disableVertexAttribArray(j),b[j]=0)}function M(x,b,j,V,Z,at,W){W===!0?n.vertexAttribIPointer(x,b,j,Z,at):n.vertexAttribPointer(x,b,j,V,Z,at)}function S(x,b,j,V){y();const Z=V.attributes,at=j.getAttributes(),W=b.defaultAttributeValues;for(const J in at){const G=at[J];if(G.location>=0){let mt=Z[J];if(mt===void 0&&(J==="instanceMatrix"&&x.instanceMatrix&&(mt=x.instanceMatrix),J==="instanceColor"&&x.instanceColor&&(mt=x.instanceColor)),mt!==void 0){const yt=mt.normalized,gt=mt.itemSize,It=t.get(mt);if(It===void 0)continue;const zt=It.buffer,rt=It.type,ft=It.bytesPerElement,vt=rt===n.INT||rt===n.UNSIGNED_INT||mt.gpuType===du;if(mt.isInterleavedBufferAttribute){const F=mt.data,ct=F.stride,it=mt.offset;if(F.isInstancedInterleavedBuffer){for(let lt=0;lt<G.locationSize;lt++)m(G.location+lt,F.meshPerAttribute);x.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=F.meshPerAttribute*F.count)}else for(let lt=0;lt<G.locationSize;lt++)f(G.location+lt);n.bindBuffer(n.ARRAY_BUFFER,zt);for(let lt=0;lt<G.locationSize;lt++)M(G.location+lt,gt/G.locationSize,rt,yt,ct*ft,(it+gt/G.locationSize*lt)*ft,vt)}else{if(mt.isInstancedBufferAttribute){for(let F=0;F<G.locationSize;F++)m(G.location+F,mt.meshPerAttribute);x.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=mt.meshPerAttribute*mt.count)}else for(let F=0;F<G.locationSize;F++)f(G.location+F);n.bindBuffer(n.ARRAY_BUFFER,zt);for(let F=0;F<G.locationSize;F++)M(G.location+F,gt/G.locationSize,rt,yt,gt*ft,gt/G.locationSize*F*ft,vt)}}else if(W!==void 0){const yt=W[J];if(yt!==void 0)switch(yt.length){case 2:n.vertexAttrib2fv(G.location,yt);break;case 3:n.vertexAttrib3fv(G.location,yt);break;case 4:n.vertexAttrib4fv(G.location,yt);break;default:n.vertexAttrib1fv(G.location,yt)}}}}E()}function O(){U();for(const x in i){const b=i[x];for(const j in b){const V=b[j];for(const Z in V)h(V[Z].object),delete V[Z];delete b[j]}delete i[x]}}function I(x){if(i[x.id]===void 0)return;const b=i[x.id];for(const j in b){const V=b[j];for(const Z in V)h(V[Z].object),delete V[Z];delete b[j]}delete i[x.id]}function P(x){for(const b in i){const j=i[b];if(j[x.id]===void 0)continue;const V=j[x.id];for(const Z in V)h(V[Z].object),delete V[Z];delete j[x.id]}}function U(){Q(),r=!0,o!==s&&(o=s,l(o.object))}function Q(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:U,resetDefaultState:Q,dispose:O,releaseStatesOfGeometry:I,releaseStatesOfProgram:P,initAttributes:y,enableAttribute:f,disableUnusedAttributes:E}}function MM(n,t,e){let i;function s(l){i=l}function o(l,h){n.drawArrays(i,l,h),e.update(h,i,1)}function r(l,h,u){u!==0&&(n.drawArraysInstanced(i,l,h,u),e.update(h,i,u))}function a(l,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,h,0,u);let p=0;for(let _=0;_<u;_++)p+=h[_];e.update(p,i,1)}function c(l,h,u,d){if(u===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<l.length;_++)r(l[_],h[_],d[_]);else{p.multiDrawArraysInstancedWEBGL(i,l,0,h,0,d,0,u);let _=0;for(let y=0;y<u;y++)_+=h[y];for(let y=0;y<d.length;y++)e.update(_,i,d[y])}}this.setMode=s,this.render=o,this.renderInstances=r,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function wM(n,t,e,i){let s;function o(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const P=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function r(P){return!(P!==oi&&i.convert(P)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(P){const U=P===vr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(P!==qi&&i.convert(P)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==ki&&!U)}function c(P){if(P==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control");if(d===!0){const P=t.get("EXT_clip_control");P.clipControlEXT(P.LOWER_LEFT_EXT,P.ZERO_TO_ONE_EXT)}const p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=n.getParameter(n.MAX_TEXTURE_SIZE),f=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),E=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),M=n.getParameter(n.MAX_VARYING_VECTORS),S=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),O=_>0,I=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:c,textureFormatReadable:r,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:p,maxVertexTextures:_,maxTextureSize:y,maxCubemapSize:f,maxAttributes:m,maxVertexUniforms:E,maxVaryings:M,maxFragmentUniforms:S,vertexTextures:O,maxSamples:I}}function SM(n){const t=this;let e=null,i=0,s=!1,o=!1;const r=new Ss,a=new ce,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const p=u.length!==0||d||i!==0||s;return s=d,i=u.length,p},this.beginShadows=function(){o=!0,h(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,p){const _=u.clippingPlanes,y=u.clipIntersection,f=u.clipShadows,m=n.get(u);if(!s||_===null||_.length===0||o&&!f)o?h(null):l();else{const E=o?0:i,M=E*4;let S=m.clippingState||null;c.value=S,S=h(_,d,M,p);for(let O=0;O!==M;++O)S[O]=e[O];m.clippingState=S,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=E}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(u,d,p,_){const y=u!==null?u.length:0;let f=null;if(y!==0){if(f=c.value,_!==!0||f===null){const m=p+y*4,E=d.matrixWorldInverse;a.getNormalMatrix(E),(f===null||f.length<m)&&(f=new Float32Array(m));for(let M=0,S=p;M!==y;++M,S+=4)r.copy(u[M]).applyMatrix4(E,a),r.normal.toArray(f,S),f[S+3]=r.constant}c.value=f,c.needsUpdate=!0}return t.numPlanes=y,t.numIntersection=0,f}}function bM(n){let t=new WeakMap;function e(r,a){return a===lr?r.mapping=xo:a===al&&(r.mapping=yo),r}function i(r){if(r&&r.isTexture){const a=r.mapping;if(a===lr||a===al)if(t.has(r)){const c=t.get(r).texture;return e(c,r.mapping)}else{const c=r.image;if(c&&c.height>0){const l=new Nv(c.height);return l.fromEquirectangularTexture(n,r),t.set(r,l),r.addEventListener("dispose",s),e(l.texture,r.mapping)}else return null}}return r}function s(r){const a=r.target;a.removeEventListener("dispose",s);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function o(){t=new WeakMap}return{get:i,dispose:o}}class pp extends dp{constructor(t=-1,e=1,i=1,s=-1,o=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=o,this.far=r,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,o,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=o,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let o=i-t,r=i+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=l*this.view.offsetX,r=o+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(o,r,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const no=4,Yh=[.125,.215,.35,.446,.526,.582],Ts=20,Tc=new pp,$h=new he;let Ac=null,Rc=0,Pc=0,Cc=!1;const bs=(1+Math.sqrt(5))/2,Zs=1/bs,jh=[new q(-bs,Zs,0),new q(bs,Zs,0),new q(-Zs,0,bs),new q(Zs,0,bs),new q(0,bs,-Zs),new q(0,bs,Zs),new q(-1,1,-1),new q(1,1,-1),new q(-1,1,1),new q(1,1,1)];class Kh{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,s=100){Ac=this._renderer.getRenderTarget(),Rc=this._renderer.getActiveCubeFace(),Pc=this._renderer.getActiveMipmapLevel(),Cc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(t,i,s,o),e>0&&this._blur(o,0,0,e),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Qh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Jh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ac,Rc,Pc),this._renderer.xr.enabled=Cc,t.scissorTest=!1,qr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===xo||t.mapping===yo?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ac=this._renderer.getRenderTarget(),Rc=this._renderer.getActiveCubeFace(),Pc=this._renderer.getActiveMipmapLevel(),Cc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:ii,minFilter:ii,generateMipmaps:!1,type:vr,format:oi,colorSpace:fs,depthBuffer:!1},s=Zh(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Zh(t,e,i);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=EM(o)),this._blurMaterial=TM(o,t,e)}return s}_compileMaterial(t){const e=new A(this._lodPlanes[0],t);this._renderer.compile(e,Tc)}_sceneToCubeUV(t,e,i,s){const a=new Be(90,1,e,i),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor($h),h.toneMapping=cs,h.autoClear=!1;const p=new An({name:"PMREM.Background",side:Tn,depthWrite:!1,depthTest:!1}),_=new A(new ri,p);let y=!1;const f=t.background;f?f.isColor&&(p.color.copy(f),t.background=null,y=!0):(p.color.copy($h),y=!0);for(let m=0;m<6;m++){const E=m%3;E===0?(a.up.set(0,c[m],0),a.lookAt(l[m],0,0)):E===1?(a.up.set(0,0,c[m]),a.lookAt(0,l[m],0)):(a.up.set(0,c[m],0),a.lookAt(0,0,l[m]));const M=this._cubeSize;qr(s,E*M,m>2?M:0,M,M),h.setRenderTarget(s),y&&h.render(_,a),h.render(t,a)}_.geometry.dispose(),_.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=f}_textureToCubeUV(t,e){const i=this._renderer,s=t.mapping===xo||t.mapping===yo;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Qh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Jh());const o=s?this._cubemapMaterial:this._equirectMaterial,r=new A(this._lodPlanes[0],o),a=o.uniforms;a.envMap.value=t;const c=this._cubeSize;qr(e,0,0,3*c,2*c),i.setRenderTarget(e),i.render(r,Tc)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let o=1;o<s;o++){const r=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),a=jh[(s-o-1)%jh.length];this._blur(t,o-1,o,r,a)}e.autoClear=i}_blur(t,e,i,s,o){const r=this._pingPongRenderTarget;this._halfBlur(t,r,e,i,s,"latitudinal",o),this._halfBlur(r,t,i,i,s,"longitudinal",o)}_halfBlur(t,e,i,s,o,r,a){const c=this._renderer,l=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new A(this._lodPlanes[s],l),d=l.uniforms,p=this._sizeLods[i]-1,_=isFinite(o)?Math.PI/(2*p):2*Math.PI/(2*Ts-1),y=o/_,f=isFinite(o)?1+Math.floor(h*y):Ts;f>Ts&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${Ts}`);const m=[];let E=0;for(let P=0;P<Ts;++P){const U=P/y,Q=Math.exp(-U*U/2);m.push(Q),P===0?E+=Q:P<f&&(E+=2*Q)}for(let P=0;P<m.length;P++)m[P]=m[P]/E;d.envMap.value=t.texture,d.samples.value=f,d.weights.value=m,d.latitudinal.value=r==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:M}=this;d.dTheta.value=_,d.mipInt.value=M-i;const S=this._sizeLods[s],O=3*S*(s>M-no?s-M+no:0),I=4*(this._cubeSize-S);qr(e,O,I,3*S,2*S),c.setRenderTarget(e),c.render(u,Tc)}}function EM(n){const t=[],e=[],i=[];let s=n;const o=n-no+1+Yh.length;for(let r=0;r<o;r++){const a=Math.pow(2,s);e.push(a);let c=1/a;r>n-no?c=Yh[r-n+no-1]:r===0&&(c=0),i.push(c);const l=1/(a-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,_=6,y=3,f=2,m=1,E=new Float32Array(y*_*p),M=new Float32Array(f*_*p),S=new Float32Array(m*_*p);for(let I=0;I<p;I++){const P=I%3*2/3-1,U=I>2?0:-1,Q=[P,U,0,P+2/3,U,0,P+2/3,U+1,0,P,U,0,P+2/3,U+1,0,P,U+1,0];E.set(Q,y*_*I),M.set(d,f*_*I);const x=[I,I,I,I,I,I];S.set(x,m*_*I)}const O=new Cn;O.setAttribute("position",new wi(E,y)),O.setAttribute("uv",new wi(M,f)),O.setAttribute("faceIndex",new wi(S,m)),t.push(O),s>no&&s--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function Zh(n,t,e){const i=new Ls(n,t,e);return i.texture.mapping=Fa,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function qr(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function TM(n,t,e){const i=new Float32Array(Ts),s=new q(0,1,0);return new Pn({name:"SphericalGaussianBlur",defines:{n:Ts,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:wu(),fragmentShader:`

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
		`,blending:as,depthTest:!1,depthWrite:!1})}function Jh(){return new Pn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:wu(),fragmentShader:`

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
		`,blending:as,depthTest:!1,depthWrite:!1})}function Qh(){return new Pn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:wu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:as,depthTest:!1,depthWrite:!1})}function wu(){return`

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
	`}function AM(n){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){const c=a.mapping,l=c===lr||c===al,h=c===xo||c===yo;if(l||h){let u=t.get(a);const d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new Kh(n)),u=l?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{const p=a.image;return l&&p&&p.height>0||h&&p&&s(p)?(e===null&&(e=new Kh(n)),u=l?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",o),u.texture):null}}}return a}function s(a){let c=0;const l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function o(a){const c=a.target;c.removeEventListener("dispose",o);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function r(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:r}}function RM(n){const t={};function e(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const s=e(i);return s===null&&ua("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function PM(n,t,e,i){const s={},o=new WeakMap;function r(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const _ in d.attributes)t.remove(d.attributes[_]);for(const _ in d.morphAttributes){const y=d.morphAttributes[_];for(let f=0,m=y.length;f<m;f++)t.remove(y[f])}d.removeEventListener("dispose",r),delete s[d.id];const p=o.get(d);p&&(t.remove(p),o.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",r),s[d.id]=!0,e.memory.geometries++),d}function c(u){const d=u.attributes;for(const _ in d)t.update(d[_],n.ARRAY_BUFFER);const p=u.morphAttributes;for(const _ in p){const y=p[_];for(let f=0,m=y.length;f<m;f++)t.update(y[f],n.ARRAY_BUFFER)}}function l(u){const d=[],p=u.index,_=u.attributes.position;let y=0;if(p!==null){const E=p.array;y=p.version;for(let M=0,S=E.length;M<S;M+=3){const O=E[M+0],I=E[M+1],P=E[M+2];d.push(O,I,I,P,P,O)}}else if(_!==void 0){const E=_.array;y=_.version;for(let M=0,S=E.length/3-1;M<S;M+=3){const O=M+0,I=M+1,P=M+2;d.push(O,I,I,P,P,O)}}else return;const f=new(ip(d)?up:lp)(d,1);f.version=y;const m=o.get(u);m&&t.remove(m),o.set(u,f)}function h(u){const d=o.get(u);if(d){const p=u.index;p!==null&&d.version<p.version&&l(u)}else l(u);return o.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function CM(n,t,e){let i;function s(d){i=d}let o,r;function a(d){o=d.type,r=d.bytesPerElement}function c(d,p){n.drawElements(i,p,o,d*r),e.update(p,i,1)}function l(d,p,_){_!==0&&(n.drawElementsInstanced(i,p,o,d*r,_),e.update(p,i,_))}function h(d,p,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,o,d,0,_);let f=0;for(let m=0;m<_;m++)f+=p[m];e.update(f,i,1)}function u(d,p,_,y){if(_===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let m=0;m<d.length;m++)l(d[m]/r,p[m],y[m]);else{f.multiDrawElementsInstancedWEBGL(i,p,0,o,d,0,y,0,_);let m=0;for(let E=0;E<_;E++)m+=p[E];for(let E=0;E<y.length;E++)e.update(m,i,y[E])}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function IM(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(o,r,a){switch(e.calls++,r){case n.TRIANGLES:e.triangles+=a*(o/3);break;case n.LINES:e.lines+=a*(o/2);break;case n.LINE_STRIP:e.lines+=a*(o-1);break;case n.LINE_LOOP:e.lines+=a*o;break;case n.POINTS:e.points+=a*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function LM(n,t,e){const i=new WeakMap,s=new Ae;function o(r,a,c){const l=r.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let d=i.get(a);if(d===void 0||d.count!==u){let x=function(){U.dispose(),i.delete(a),a.removeEventListener("dispose",x)};var p=x;d!==void 0&&d.texture.dispose();const _=a.morphAttributes.position!==void 0,y=a.morphAttributes.normal!==void 0,f=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],E=a.morphAttributes.normal||[],M=a.morphAttributes.color||[];let S=0;_===!0&&(S=1),y===!0&&(S=2),f===!0&&(S=3);let O=a.attributes.position.count*S,I=1;O>t.maxTextureSize&&(I=Math.ceil(O/t.maxTextureSize),O=t.maxTextureSize);const P=new Float32Array(O*I*4*u),U=new op(P,O,I,u);U.type=ki,U.needsUpdate=!0;const Q=S*4;for(let b=0;b<u;b++){const j=m[b],V=E[b],Z=M[b],at=O*I*4*b;for(let W=0;W<j.count;W++){const J=W*Q;_===!0&&(s.fromBufferAttribute(j,W),P[at+J+0]=s.x,P[at+J+1]=s.y,P[at+J+2]=s.z,P[at+J+3]=0),y===!0&&(s.fromBufferAttribute(V,W),P[at+J+4]=s.x,P[at+J+5]=s.y,P[at+J+6]=s.z,P[at+J+7]=0),f===!0&&(s.fromBufferAttribute(Z,W),P[at+J+8]=s.x,P[at+J+9]=s.y,P[at+J+10]=s.z,P[at+J+11]=Z.itemSize===4?s.w:1)}}d={count:u,texture:U,size:new Ot(O,I)},i.set(a,d),a.addEventListener("dispose",x)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",r.morphTexture,e);else{let _=0;for(let f=0;f<l.length;f++)_+=l[f];const y=a.morphTargetsRelative?1:1-_;c.getUniforms().setValue(n,"morphTargetBaseInfluence",y),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",d.texture,e),c.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:o}}function DM(n,t,e,i){let s=new WeakMap;function o(c){const l=i.render.frame,h=c.geometry,u=t.get(c,h);if(s.get(u)!==l&&(t.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(e.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,n.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return u}function r(){s=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:o,dispose:r}}class mp extends wn{constructor(t,e,i,s,o,r,a,c,l,h=uo){if(h!==uo&&h!==wo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===uo&&(i=Is),i===void 0&&h===wo&&(i=Mo),super(null,s,o,r,a,c,h,i,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Wn,this.minFilter=c!==void 0?c:Wn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const gp=new wn,td=new mp(1,1),_p=new op,vp=new xv,xp=new yu,ed=[],nd=[],id=new Float32Array(16),sd=new Float32Array(9),od=new Float32Array(4);function Ao(n,t,e){const i=n[0];if(i<=0||i>0)return n;const s=t*e;let o=ed[s];if(o===void 0&&(o=new Float32Array(s),ed[s]=o),t!==0){i.toArray(o,0);for(let r=1,a=0;r!==t;++r)a+=e,n[r].toArray(o,a)}return o}function Qe(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function tn(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Ga(n,t){let e=nd[t];e===void 0&&(e=new Int32Array(t),nd[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function UM(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function NM(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Qe(e,t))return;n.uniform2fv(this.addr,t),tn(e,t)}}function FM(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Qe(e,t))return;n.uniform3fv(this.addr,t),tn(e,t)}}function OM(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Qe(e,t))return;n.uniform4fv(this.addr,t),tn(e,t)}}function BM(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Qe(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),tn(e,t)}else{if(Qe(e,i))return;od.set(i),n.uniformMatrix2fv(this.addr,!1,od),tn(e,i)}}function zM(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Qe(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),tn(e,t)}else{if(Qe(e,i))return;sd.set(i),n.uniformMatrix3fv(this.addr,!1,sd),tn(e,i)}}function GM(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Qe(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),tn(e,t)}else{if(Qe(e,i))return;id.set(i),n.uniformMatrix4fv(this.addr,!1,id),tn(e,i)}}function HM(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function kM(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Qe(e,t))return;n.uniform2iv(this.addr,t),tn(e,t)}}function VM(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Qe(e,t))return;n.uniform3iv(this.addr,t),tn(e,t)}}function WM(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Qe(e,t))return;n.uniform4iv(this.addr,t),tn(e,t)}}function XM(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function qM(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Qe(e,t))return;n.uniform2uiv(this.addr,t),tn(e,t)}}function YM(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Qe(e,t))return;n.uniform3uiv(this.addr,t),tn(e,t)}}function $M(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Qe(e,t))return;n.uniform4uiv(this.addr,t),tn(e,t)}}function jM(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let o;this.type===n.SAMPLER_2D_SHADOW?(td.compareFunction=np,o=td):o=gp,e.setTexture2D(t||o,s)}function KM(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||vp,s)}function ZM(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||xp,s)}function JM(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||_p,s)}function QM(n){switch(n){case 5126:return UM;case 35664:return NM;case 35665:return FM;case 35666:return OM;case 35674:return BM;case 35675:return zM;case 35676:return GM;case 5124:case 35670:return HM;case 35667:case 35671:return kM;case 35668:case 35672:return VM;case 35669:case 35673:return WM;case 5125:return XM;case 36294:return qM;case 36295:return YM;case 36296:return $M;case 35678:case 36198:case 36298:case 36306:case 35682:return jM;case 35679:case 36299:case 36307:return KM;case 35680:case 36300:case 36308:case 36293:return ZM;case 36289:case 36303:case 36311:case 36292:return JM}}function tw(n,t){n.uniform1fv(this.addr,t)}function ew(n,t){const e=Ao(t,this.size,2);n.uniform2fv(this.addr,e)}function nw(n,t){const e=Ao(t,this.size,3);n.uniform3fv(this.addr,e)}function iw(n,t){const e=Ao(t,this.size,4);n.uniform4fv(this.addr,e)}function sw(n,t){const e=Ao(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function ow(n,t){const e=Ao(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function rw(n,t){const e=Ao(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function aw(n,t){n.uniform1iv(this.addr,t)}function cw(n,t){n.uniform2iv(this.addr,t)}function lw(n,t){n.uniform3iv(this.addr,t)}function uw(n,t){n.uniform4iv(this.addr,t)}function hw(n,t){n.uniform1uiv(this.addr,t)}function dw(n,t){n.uniform2uiv(this.addr,t)}function fw(n,t){n.uniform3uiv(this.addr,t)}function pw(n,t){n.uniform4uiv(this.addr,t)}function mw(n,t,e){const i=this.cache,s=t.length,o=Ga(e,s);Qe(i,o)||(n.uniform1iv(this.addr,o),tn(i,o));for(let r=0;r!==s;++r)e.setTexture2D(t[r]||gp,o[r])}function gw(n,t,e){const i=this.cache,s=t.length,o=Ga(e,s);Qe(i,o)||(n.uniform1iv(this.addr,o),tn(i,o));for(let r=0;r!==s;++r)e.setTexture3D(t[r]||vp,o[r])}function _w(n,t,e){const i=this.cache,s=t.length,o=Ga(e,s);Qe(i,o)||(n.uniform1iv(this.addr,o),tn(i,o));for(let r=0;r!==s;++r)e.setTextureCube(t[r]||xp,o[r])}function vw(n,t,e){const i=this.cache,s=t.length,o=Ga(e,s);Qe(i,o)||(n.uniform1iv(this.addr,o),tn(i,o));for(let r=0;r!==s;++r)e.setTexture2DArray(t[r]||_p,o[r])}function xw(n){switch(n){case 5126:return tw;case 35664:return ew;case 35665:return nw;case 35666:return iw;case 35674:return sw;case 35675:return ow;case 35676:return rw;case 5124:case 35670:return aw;case 35667:case 35671:return cw;case 35668:case 35672:return lw;case 35669:case 35673:return uw;case 5125:return hw;case 36294:return dw;case 36295:return fw;case 36296:return pw;case 35678:case 36198:case 36298:case 36306:case 35682:return mw;case 35679:case 36299:case 36307:return gw;case 35680:case 36300:case 36308:case 36293:return _w;case 36289:case 36303:case 36311:case 36292:return vw}}class yw{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=QM(e.type)}}class Mw{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=xw(e.type)}}class ww{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const s=this.seq;for(let o=0,r=s.length;o!==r;++o){const a=s[o];a.setValue(t,e[a.id],i)}}}const Ic=/(\w+)(\])?(\[|\.)?/g;function rd(n,t){n.seq.push(t),n.map[t.id]=t}function Sw(n,t,e){const i=n.name,s=i.length;for(Ic.lastIndex=0;;){const o=Ic.exec(i),r=Ic.lastIndex;let a=o[1];const c=o[2]==="]",l=o[3];if(c&&(a=a|0),l===void 0||l==="["&&r+2===s){rd(e,l===void 0?new yw(a,n,t):new Mw(a,n,t));break}else{let u=e.map[a];u===void 0&&(u=new ww(a),rd(e,u)),e=u}}}class ha{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const o=t.getActiveUniform(e,s),r=t.getUniformLocation(e,o.name);Sw(o,r,this)}}setValue(t,e,i,s){const o=this.map[e];o!==void 0&&o.setValue(t,i,s)}setOptional(t,e,i){const s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let o=0,r=e.length;o!==r;++o){const a=e[o],c=i[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){const i=[];for(let s=0,o=t.length;s!==o;++s){const r=t[s];r.id in e&&i.push(r)}return i}}function ad(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const bw=37297;let Ew=0;function Tw(n,t){const e=n.split(`
`),i=[],s=Math.max(t-6,0),o=Math.min(t+6,e.length);for(let r=s;r<o;r++){const a=r+1;i.push(`${a===t?">":" "} ${a}: ${e[r]}`)}return i.join(`
`)}function Aw(n){const t=Se.getPrimaries(Se.workingColorSpace),e=Se.getPrimaries(n);let i;switch(t===e?i="":t===ya&&e===xa?i="LinearDisplayP3ToLinearSRGB":t===xa&&e===ya&&(i="LinearSRGBToLinearDisplayP3"),n){case fs:case Oa:return[i,"LinearTransferOETF"];case ei:case vu:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function cd(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),s=n.getShaderInfoLog(t).trim();if(i&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const r=parseInt(o[1]);return e.toUpperCase()+`

`+s+`

`+Tw(n.getShaderSource(t),r)}else return s}function Rw(n,t){const e=Aw(t);return`vec4 ${n}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function Pw(n,t){let e;switch(t){case I_:e="Linear";break;case L_:e="Reinhard";break;case D_:e="Cineon";break;case Vf:e="ACESFilmic";break;case N_:e="AgX";break;case F_:e="Neutral";break;case U_:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Yr=new q;function Cw(){Se.getLuminanceCoefficients(Yr);const n=Yr.x.toFixed(4),t=Yr.y.toFixed(4),e=Yr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Iw(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ho).join(`
`)}function Lw(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function Dw(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const o=n.getActiveAttrib(t,s),r=o.name;let a=1;o.type===n.FLOAT_MAT2&&(a=2),o.type===n.FLOAT_MAT3&&(a=3),o.type===n.FLOAT_MAT4&&(a=4),e[r]={type:o.type,location:n.getAttribLocation(t,r),locationSize:a}}return e}function Ho(n){return n!==""}function ld(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function ud(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Uw=/^[ \t]*#include +<([\w\d./]+)>/gm;function Nl(n){return n.replace(Uw,Fw)}const Nw=new Map;function Fw(n,t){let e=ae[t];if(e===void 0){const i=Nw.get(t);if(i!==void 0)e=ae[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Nl(e)}const Ow=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function hd(n){return n.replace(Ow,Bw)}function Bw(n,t,e,i){let s="";for(let o=parseInt(t);o<parseInt(e);o++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return s}function dd(n){let t=`precision ${n.precision} float;
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
#define LOW_PRECISION`),t}function zw(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Hf?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===u_?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===zi&&(t="SHADOWMAP_TYPE_VSM"),t}function Gw(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case xo:case yo:t="ENVMAP_TYPE_CUBE";break;case Fa:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Hw(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case yo:t="ENVMAP_MODE_REFRACTION";break}return t}function kw(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case kf:t="ENVMAP_BLENDING_MULTIPLY";break;case P_:t="ENVMAP_BLENDING_MIX";break;case C_:t="ENVMAP_BLENDING_ADD";break}return t}function Vw(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function Ww(n,t,e,i){const s=n.getContext(),o=e.defines;let r=e.vertexShader,a=e.fragmentShader;const c=zw(e),l=Gw(e),h=Hw(e),u=kw(e),d=Vw(e),p=Iw(e),_=Lw(o),y=s.createProgram();let f,m,E=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Ho).join(`
`),f.length>0&&(f+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Ho).join(`
`),m.length>0&&(m+=`
`)):(f=[dd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ho).join(`
`),m=[dd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==cs?"#define TONE_MAPPING":"",e.toneMapping!==cs?ae.tonemapping_pars_fragment:"",e.toneMapping!==cs?Pw("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ae.colorspace_pars_fragment,Rw("linearToOutputTexel",e.outputColorSpace),Cw(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ho).join(`
`)),r=Nl(r),r=ld(r,e),r=ud(r,e),a=Nl(a),a=ld(a,e),a=ud(a,e),r=hd(r),a=hd(a),e.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,f=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,m=["#define varying in",e.glslVersion===Rh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Rh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const M=E+f+r,S=E+m+a,O=ad(s,s.VERTEX_SHADER,M),I=ad(s,s.FRAGMENT_SHADER,S);s.attachShader(y,O),s.attachShader(y,I),e.index0AttributeName!==void 0?s.bindAttribLocation(y,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(y,0,"position"),s.linkProgram(y);function P(b){if(n.debug.checkShaderErrors){const j=s.getProgramInfoLog(y).trim(),V=s.getShaderInfoLog(O).trim(),Z=s.getShaderInfoLog(I).trim();let at=!0,W=!0;if(s.getProgramParameter(y,s.LINK_STATUS)===!1)if(at=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,y,O,I);else{const J=cd(s,O,"vertex"),G=cd(s,I,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(y,s.VALIDATE_STATUS)+`

Material Name: `+b.name+`
Material Type: `+b.type+`

Program Info Log: `+j+`
`+J+`
`+G)}else j!==""?console.warn("THREE.WebGLProgram: Program Info Log:",j):(V===""||Z==="")&&(W=!1);W&&(b.diagnostics={runnable:at,programLog:j,vertexShader:{log:V,prefix:f},fragmentShader:{log:Z,prefix:m}})}s.deleteShader(O),s.deleteShader(I),U=new ha(s,y),Q=Dw(s,y)}let U;this.getUniforms=function(){return U===void 0&&P(this),U};let Q;this.getAttributes=function(){return Q===void 0&&P(this),Q};let x=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=s.getProgramParameter(y,bw)),x},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(y),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Ew++,this.cacheKey=t,this.usedTimes=1,this.program=y,this.vertexShader=O,this.fragmentShader=I,this}let Xw=0;class qw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),o=this._getShaderStage(i),r=this._getShaderCacheForMaterial(t);return r.has(s)===!1&&(r.add(s),s.usedTimes++),r.has(o)===!1&&(r.add(o),o.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new Yw(t),e.set(t,i)),i}}class Yw{constructor(t){this.id=Xw++,this.code=t,this.usedTimes=0}}function $w(n,t,e,i,s,o,r){const a=new ap,c=new qw,l=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.reverseDepthBuffer,p=s.vertexTextures;let _=s.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(x){return l.add(x),x===0?"uv":`uv${x}`}function m(x,b,j,V,Z){const at=V.fog,W=Z.geometry,J=x.isMeshStandardMaterial?V.environment:null,G=(x.isMeshStandardMaterial?e:t).get(x.envMap||J),mt=G&&G.mapping===Fa?G.image.height:null,yt=y[x.type];x.precision!==null&&(_=s.getMaxPrecision(x.precision),_!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",_,"instead."));const gt=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,It=gt!==void 0?gt.length:0;let zt=0;W.morphAttributes.position!==void 0&&(zt=1),W.morphAttributes.normal!==void 0&&(zt=2),W.morphAttributes.color!==void 0&&(zt=3);let rt,ft,vt,F;if(yt){const ne=yi[yt];rt=ne.vertexShader,ft=ne.fragmentShader}else rt=x.vertexShader,ft=x.fragmentShader,c.update(x),vt=c.getVertexShaderID(x),F=c.getFragmentShaderID(x);const ct=n.getRenderTarget(),it=Z.isInstancedMesh===!0,lt=Z.isBatchedMesh===!0,bt=!!x.map,tt=!!x.matcap,g=!!G,T=!!x.aoMap,L=!!x.lightMap,N=!!x.bumpMap,D=!!x.normalMap,X=!!x.displacementMap,K=!!x.emissiveMap,w=!!x.metalnessMap,v=!!x.roughnessMap,C=x.anisotropy>0,k=x.clearcoat>0,z=x.dispersion>0,H=x.iridescence>0,ht=x.sheen>0,ut=x.transmission>0,pt=C&&!!x.anisotropyMap,Tt=k&&!!x.clearcoatMap,dt=k&&!!x.clearcoatNormalMap,xt=k&&!!x.clearcoatRoughnessMap,Pt=H&&!!x.iridescenceMap,Dt=H&&!!x.iridescenceThicknessMap,Et=ht&&!!x.sheenColorMap,Ht=ht&&!!x.sheenRoughnessMap,Ut=!!x.specularMap,kt=!!x.specularColorMap,B=!!x.specularIntensityMap,_t=ut&&!!x.transmissionMap,nt=ut&&!!x.thicknessMap,et=!!x.gradientMap,wt=!!x.alphaMap,Mt=x.alphaTest>0,Bt=!!x.alphaHash,Yt=!!x.extensions;let Qt=cs;x.toneMapped&&(ct===null||ct.isXRRenderTarget===!0)&&(Qt=n.toneMapping);const Jt={shaderID:yt,shaderType:x.type,shaderName:x.name,vertexShader:rt,fragmentShader:ft,defines:x.defines,customVertexShaderID:vt,customFragmentShaderID:F,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:_,batching:lt,batchingColor:lt&&Z._colorsTexture!==null,instancing:it,instancingColor:it&&Z.instanceColor!==null,instancingMorph:it&&Z.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:ct===null?n.outputColorSpace:ct.isXRRenderTarget===!0?ct.texture.colorSpace:fs,alphaToCoverage:!!x.alphaToCoverage,map:bt,matcap:tt,envMap:g,envMapMode:g&&G.mapping,envMapCubeUVHeight:mt,aoMap:T,lightMap:L,bumpMap:N,normalMap:D,displacementMap:p&&X,emissiveMap:K,normalMapObjectSpace:D&&x.normalMapType===G_,normalMapTangentSpace:D&&x.normalMapType===ep,metalnessMap:w,roughnessMap:v,anisotropy:C,anisotropyMap:pt,clearcoat:k,clearcoatMap:Tt,clearcoatNormalMap:dt,clearcoatRoughnessMap:xt,dispersion:z,iridescence:H,iridescenceMap:Pt,iridescenceThicknessMap:Dt,sheen:ht,sheenColorMap:Et,sheenRoughnessMap:Ht,specularMap:Ut,specularColorMap:kt,specularIntensityMap:B,transmission:ut,transmissionMap:_t,thicknessMap:nt,gradientMap:et,opaque:x.transparent===!1&&x.blending===lo&&x.alphaToCoverage===!1,alphaMap:wt,alphaTest:Mt,alphaHash:Bt,combine:x.combine,mapUv:bt&&f(x.map.channel),aoMapUv:T&&f(x.aoMap.channel),lightMapUv:L&&f(x.lightMap.channel),bumpMapUv:N&&f(x.bumpMap.channel),normalMapUv:D&&f(x.normalMap.channel),displacementMapUv:X&&f(x.displacementMap.channel),emissiveMapUv:K&&f(x.emissiveMap.channel),metalnessMapUv:w&&f(x.metalnessMap.channel),roughnessMapUv:v&&f(x.roughnessMap.channel),anisotropyMapUv:pt&&f(x.anisotropyMap.channel),clearcoatMapUv:Tt&&f(x.clearcoatMap.channel),clearcoatNormalMapUv:dt&&f(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:xt&&f(x.clearcoatRoughnessMap.channel),iridescenceMapUv:Pt&&f(x.iridescenceMap.channel),iridescenceThicknessMapUv:Dt&&f(x.iridescenceThicknessMap.channel),sheenColorMapUv:Et&&f(x.sheenColorMap.channel),sheenRoughnessMapUv:Ht&&f(x.sheenRoughnessMap.channel),specularMapUv:Ut&&f(x.specularMap.channel),specularColorMapUv:kt&&f(x.specularColorMap.channel),specularIntensityMapUv:B&&f(x.specularIntensityMap.channel),transmissionMapUv:_t&&f(x.transmissionMap.channel),thicknessMapUv:nt&&f(x.thicknessMap.channel),alphaMapUv:wt&&f(x.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(D||C),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:Z.isPoints===!0&&!!W.attributes.uv&&(bt||wt),fog:!!at,useFog:x.fog===!0,fogExp2:!!at&&at.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:d,skinning:Z.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:It,morphTextureStride:zt,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:n.shadowMap.enabled&&j.length>0,shadowMapType:n.shadowMap.type,toneMapping:Qt,decodeVideoTexture:bt&&x.map.isVideoTexture===!0&&Se.getTransfer(x.map.colorSpace)===Ne,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===de,flipSided:x.side===Tn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:Yt&&x.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Yt&&x.extensions.multiDraw===!0||lt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Jt.vertexUv1s=l.has(1),Jt.vertexUv2s=l.has(2),Jt.vertexUv3s=l.has(3),l.clear(),Jt}function E(x){const b=[];if(x.shaderID?b.push(x.shaderID):(b.push(x.customVertexShaderID),b.push(x.customFragmentShaderID)),x.defines!==void 0)for(const j in x.defines)b.push(j),b.push(x.defines[j]);return x.isRawShaderMaterial===!1&&(M(b,x),S(b,x),b.push(n.outputColorSpace)),b.push(x.customProgramCacheKey),b.join()}function M(x,b){x.push(b.precision),x.push(b.outputColorSpace),x.push(b.envMapMode),x.push(b.envMapCubeUVHeight),x.push(b.mapUv),x.push(b.alphaMapUv),x.push(b.lightMapUv),x.push(b.aoMapUv),x.push(b.bumpMapUv),x.push(b.normalMapUv),x.push(b.displacementMapUv),x.push(b.emissiveMapUv),x.push(b.metalnessMapUv),x.push(b.roughnessMapUv),x.push(b.anisotropyMapUv),x.push(b.clearcoatMapUv),x.push(b.clearcoatNormalMapUv),x.push(b.clearcoatRoughnessMapUv),x.push(b.iridescenceMapUv),x.push(b.iridescenceThicknessMapUv),x.push(b.sheenColorMapUv),x.push(b.sheenRoughnessMapUv),x.push(b.specularMapUv),x.push(b.specularColorMapUv),x.push(b.specularIntensityMapUv),x.push(b.transmissionMapUv),x.push(b.thicknessMapUv),x.push(b.combine),x.push(b.fogExp2),x.push(b.sizeAttenuation),x.push(b.morphTargetsCount),x.push(b.morphAttributeCount),x.push(b.numDirLights),x.push(b.numPointLights),x.push(b.numSpotLights),x.push(b.numSpotLightMaps),x.push(b.numHemiLights),x.push(b.numRectAreaLights),x.push(b.numDirLightShadows),x.push(b.numPointLightShadows),x.push(b.numSpotLightShadows),x.push(b.numSpotLightShadowsWithMaps),x.push(b.numLightProbes),x.push(b.shadowMapType),x.push(b.toneMapping),x.push(b.numClippingPlanes),x.push(b.numClipIntersection),x.push(b.depthPacking)}function S(x,b){a.disableAll(),b.supportsVertexTextures&&a.enable(0),b.instancing&&a.enable(1),b.instancingColor&&a.enable(2),b.instancingMorph&&a.enable(3),b.matcap&&a.enable(4),b.envMap&&a.enable(5),b.normalMapObjectSpace&&a.enable(6),b.normalMapTangentSpace&&a.enable(7),b.clearcoat&&a.enable(8),b.iridescence&&a.enable(9),b.alphaTest&&a.enable(10),b.vertexColors&&a.enable(11),b.vertexAlphas&&a.enable(12),b.vertexUv1s&&a.enable(13),b.vertexUv2s&&a.enable(14),b.vertexUv3s&&a.enable(15),b.vertexTangents&&a.enable(16),b.anisotropy&&a.enable(17),b.alphaHash&&a.enable(18),b.batching&&a.enable(19),b.dispersion&&a.enable(20),b.batchingColor&&a.enable(21),x.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reverseDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.alphaToCoverage&&a.enable(20),x.push(a.mask)}function O(x){const b=y[x.type];let j;if(b){const V=yi[b];j=Iv.clone(V.uniforms)}else j=x.uniforms;return j}function I(x,b){let j;for(let V=0,Z=h.length;V<Z;V++){const at=h[V];if(at.cacheKey===b){j=at,++j.usedTimes;break}}return j===void 0&&(j=new Ww(n,b,x,o),h.push(j)),j}function P(x){if(--x.usedTimes===0){const b=h.indexOf(x);h[b]=h[h.length-1],h.pop(),x.destroy()}}function U(x){c.remove(x)}function Q(){c.dispose()}return{getParameters:m,getProgramCacheKey:E,getUniforms:O,acquireProgram:I,releaseProgram:P,releaseShaderCache:U,programs:h,dispose:Q}}function jw(){let n=new WeakMap;function t(r){return n.has(r)}function e(r){let a=n.get(r);return a===void 0&&(a={},n.set(r,a)),a}function i(r){n.delete(r)}function s(r,a,c){n.get(r)[a]=c}function o(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:o}}function Kw(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function fd(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function pd(){const n=[];let t=0;const e=[],i=[],s=[];function o(){t=0,e.length=0,i.length=0,s.length=0}function r(u,d,p,_,y,f){let m=n[t];return m===void 0?(m={id:u.id,object:u,geometry:d,material:p,groupOrder:_,renderOrder:u.renderOrder,z:y,group:f},n[t]=m):(m.id=u.id,m.object=u,m.geometry=d,m.material=p,m.groupOrder=_,m.renderOrder=u.renderOrder,m.z=y,m.group=f),t++,m}function a(u,d,p,_,y,f){const m=r(u,d,p,_,y,f);p.transmission>0?i.push(m):p.transparent===!0?s.push(m):e.push(m)}function c(u,d,p,_,y,f){const m=r(u,d,p,_,y,f);p.transmission>0?i.unshift(m):p.transparent===!0?s.unshift(m):e.unshift(m)}function l(u,d){e.length>1&&e.sort(u||Kw),i.length>1&&i.sort(d||fd),s.length>1&&s.sort(d||fd)}function h(){for(let u=t,d=n.length;u<d;u++){const p=n[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:i,transparent:s,init:o,push:a,unshift:c,finish:h,sort:l}}function Zw(){let n=new WeakMap;function t(i,s){const o=n.get(i);let r;return o===void 0?(r=new pd,n.set(i,[r])):s>=o.length?(r=new pd,o.push(r)):r=o[s],r}function e(){n=new WeakMap}return{get:t,dispose:e}}function Jw(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new q,color:new he};break;case"SpotLight":e={position:new q,direction:new q,color:new he,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new q,color:new he,distance:0,decay:0};break;case"HemisphereLight":e={direction:new q,skyColor:new he,groundColor:new he};break;case"RectAreaLight":e={color:new he,position:new q,halfWidth:new q,halfHeight:new q};break}return n[t.id]=e,e}}}function Qw(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ot};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ot};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ot,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let tS=0;function eS(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function nS(n){const t=new Jw,e=Qw(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new q);const s=new q,o=new Fe,r=new Fe;function a(l){let h=0,u=0,d=0;for(let Q=0;Q<9;Q++)i.probe[Q].set(0,0,0);let p=0,_=0,y=0,f=0,m=0,E=0,M=0,S=0,O=0,I=0,P=0;l.sort(eS);for(let Q=0,x=l.length;Q<x;Q++){const b=l[Q],j=b.color,V=b.intensity,Z=b.distance,at=b.shadow&&b.shadow.map?b.shadow.map.texture:null;if(b.isAmbientLight)h+=j.r*V,u+=j.g*V,d+=j.b*V;else if(b.isLightProbe){for(let W=0;W<9;W++)i.probe[W].addScaledVector(b.sh.coefficients[W],V);P++}else if(b.isDirectionalLight){const W=t.get(b);if(W.color.copy(b.color).multiplyScalar(b.intensity),b.castShadow){const J=b.shadow,G=e.get(b);G.shadowIntensity=J.intensity,G.shadowBias=J.bias,G.shadowNormalBias=J.normalBias,G.shadowRadius=J.radius,G.shadowMapSize=J.mapSize,i.directionalShadow[p]=G,i.directionalShadowMap[p]=at,i.directionalShadowMatrix[p]=b.shadow.matrix,E++}i.directional[p]=W,p++}else if(b.isSpotLight){const W=t.get(b);W.position.setFromMatrixPosition(b.matrixWorld),W.color.copy(j).multiplyScalar(V),W.distance=Z,W.coneCos=Math.cos(b.angle),W.penumbraCos=Math.cos(b.angle*(1-b.penumbra)),W.decay=b.decay,i.spot[y]=W;const J=b.shadow;if(b.map&&(i.spotLightMap[O]=b.map,O++,J.updateMatrices(b),b.castShadow&&I++),i.spotLightMatrix[y]=J.matrix,b.castShadow){const G=e.get(b);G.shadowIntensity=J.intensity,G.shadowBias=J.bias,G.shadowNormalBias=J.normalBias,G.shadowRadius=J.radius,G.shadowMapSize=J.mapSize,i.spotShadow[y]=G,i.spotShadowMap[y]=at,S++}y++}else if(b.isRectAreaLight){const W=t.get(b);W.color.copy(j).multiplyScalar(V),W.halfWidth.set(b.width*.5,0,0),W.halfHeight.set(0,b.height*.5,0),i.rectArea[f]=W,f++}else if(b.isPointLight){const W=t.get(b);if(W.color.copy(b.color).multiplyScalar(b.intensity),W.distance=b.distance,W.decay=b.decay,b.castShadow){const J=b.shadow,G=e.get(b);G.shadowIntensity=J.intensity,G.shadowBias=J.bias,G.shadowNormalBias=J.normalBias,G.shadowRadius=J.radius,G.shadowMapSize=J.mapSize,G.shadowCameraNear=J.camera.near,G.shadowCameraFar=J.camera.far,i.pointShadow[_]=G,i.pointShadowMap[_]=at,i.pointShadowMatrix[_]=b.shadow.matrix,M++}i.point[_]=W,_++}else if(b.isHemisphereLight){const W=t.get(b);W.skyColor.copy(b.color).multiplyScalar(V),W.groundColor.copy(b.groundColor).multiplyScalar(V),i.hemi[m]=W,m++}}f>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ft.LTC_FLOAT_1,i.rectAreaLTC2=Ft.LTC_FLOAT_2):(i.rectAreaLTC1=Ft.LTC_HALF_1,i.rectAreaLTC2=Ft.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=d;const U=i.hash;(U.directionalLength!==p||U.pointLength!==_||U.spotLength!==y||U.rectAreaLength!==f||U.hemiLength!==m||U.numDirectionalShadows!==E||U.numPointShadows!==M||U.numSpotShadows!==S||U.numSpotMaps!==O||U.numLightProbes!==P)&&(i.directional.length=p,i.spot.length=y,i.rectArea.length=f,i.point.length=_,i.hemi.length=m,i.directionalShadow.length=E,i.directionalShadowMap.length=E,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=E,i.pointShadowMatrix.length=M,i.spotLightMatrix.length=S+O-I,i.spotLightMap.length=O,i.numSpotLightShadowsWithMaps=I,i.numLightProbes=P,U.directionalLength=p,U.pointLength=_,U.spotLength=y,U.rectAreaLength=f,U.hemiLength=m,U.numDirectionalShadows=E,U.numPointShadows=M,U.numSpotShadows=S,U.numSpotMaps=O,U.numLightProbes=P,i.version=tS++)}function c(l,h){let u=0,d=0,p=0,_=0,y=0;const f=h.matrixWorldInverse;for(let m=0,E=l.length;m<E;m++){const M=l[m];if(M.isDirectionalLight){const S=i.directional[u];S.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(f),u++}else if(M.isSpotLight){const S=i.spot[p];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(f),S.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(f),p++}else if(M.isRectAreaLight){const S=i.rectArea[_];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(f),r.identity(),o.copy(M.matrixWorld),o.premultiply(f),r.extractRotation(o),S.halfWidth.set(M.width*.5,0,0),S.halfHeight.set(0,M.height*.5,0),S.halfWidth.applyMatrix4(r),S.halfHeight.applyMatrix4(r),_++}else if(M.isPointLight){const S=i.point[d];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(f),d++}else if(M.isHemisphereLight){const S=i.hemi[y];S.direction.setFromMatrixPosition(M.matrixWorld),S.direction.transformDirection(f),y++}}}return{setup:a,setupView:c,state:i}}function md(n){const t=new nS(n),e=[],i=[];function s(h){l.camera=h,e.length=0,i.length=0}function o(h){e.push(h)}function r(h){i.push(h)}function a(){t.setup(e)}function c(h){t.setupView(e,h)}const l={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:o,pushShadow:r}}function iS(n){let t=new WeakMap;function e(s,o=0){const r=t.get(s);let a;return r===void 0?(a=new md(n),t.set(s,[a])):o>=r.length?(a=new md(n),r.push(a)):a=r[o],a}function i(){t=new WeakMap}return{get:e,dispose:i}}class sS extends To{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=B_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class oS extends To{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const rS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,aS=`uniform sampler2D shadow_pass;
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
}`;function cS(n,t,e){let i=new Mu;const s=new Ot,o=new Ot,r=new Ae,a=new sS({depthPacking:z_}),c=new oS,l={},h=e.maxTextureSize,u={[us]:Tn,[Tn]:us,[de]:de},d=new Pn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ot},radius:{value:4}},vertexShader:rS,fragmentShader:aS}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const _=new Cn;_.setAttribute("position",new wi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new A(_,d),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Hf;let m=this.type;this.render=function(I,P,U){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||I.length===0)return;const Q=n.getRenderTarget(),x=n.getActiveCubeFace(),b=n.getActiveMipmapLevel(),j=n.state;j.setBlending(as),j.buffers.color.setClear(1,1,1,1),j.buffers.depth.setTest(!0),j.setScissorTest(!1);const V=m!==zi&&this.type===zi,Z=m===zi&&this.type!==zi;for(let at=0,W=I.length;at<W;at++){const J=I[at],G=J.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;s.copy(G.mapSize);const mt=G.getFrameExtents();if(s.multiply(mt),o.copy(G.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(o.x=Math.floor(h/mt.x),s.x=o.x*mt.x,G.mapSize.x=o.x),s.y>h&&(o.y=Math.floor(h/mt.y),s.y=o.y*mt.y,G.mapSize.y=o.y)),G.map===null||V===!0||Z===!0){const gt=this.type!==zi?{minFilter:Wn,magFilter:Wn}:{};G.map!==null&&G.map.dispose(),G.map=new Ls(s.x,s.y,gt),G.map.texture.name=J.name+".shadowMap",G.camera.updateProjectionMatrix()}n.setRenderTarget(G.map),n.clear();const yt=G.getViewportCount();for(let gt=0;gt<yt;gt++){const It=G.getViewport(gt);r.set(o.x*It.x,o.y*It.y,o.x*It.z,o.y*It.w),j.viewport(r),G.updateMatrices(J,gt),i=G.getFrustum(),S(P,U,G.camera,J,this.type)}G.isPointLightShadow!==!0&&this.type===zi&&E(G,U),G.needsUpdate=!1}m=this.type,f.needsUpdate=!1,n.setRenderTarget(Q,x,b)};function E(I,P){const U=t.update(y);d.defines.VSM_SAMPLES!==I.blurSamples&&(d.defines.VSM_SAMPLES=I.blurSamples,p.defines.VSM_SAMPLES=I.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new Ls(s.x,s.y)),d.uniforms.shadow_pass.value=I.map.texture,d.uniforms.resolution.value=I.mapSize,d.uniforms.radius.value=I.radius,n.setRenderTarget(I.mapPass),n.clear(),n.renderBufferDirect(P,null,U,d,y,null),p.uniforms.shadow_pass.value=I.mapPass.texture,p.uniforms.resolution.value=I.mapSize,p.uniforms.radius.value=I.radius,n.setRenderTarget(I.map),n.clear(),n.renderBufferDirect(P,null,U,p,y,null)}function M(I,P,U,Q){let x=null;const b=U.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(b!==void 0)x=b;else if(x=U.isPointLight===!0?c:a,n.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0){const j=x.uuid,V=P.uuid;let Z=l[j];Z===void 0&&(Z={},l[j]=Z);let at=Z[V];at===void 0&&(at=x.clone(),Z[V]=at,P.addEventListener("dispose",O)),x=at}if(x.visible=P.visible,x.wireframe=P.wireframe,Q===zi?x.side=P.shadowSide!==null?P.shadowSide:P.side:x.side=P.shadowSide!==null?P.shadowSide:u[P.side],x.alphaMap=P.alphaMap,x.alphaTest=P.alphaTest,x.map=P.map,x.clipShadows=P.clipShadows,x.clippingPlanes=P.clippingPlanes,x.clipIntersection=P.clipIntersection,x.displacementMap=P.displacementMap,x.displacementScale=P.displacementScale,x.displacementBias=P.displacementBias,x.wireframeLinewidth=P.wireframeLinewidth,x.linewidth=P.linewidth,U.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const j=n.properties.get(x);j.light=U}return x}function S(I,P,U,Q,x){if(I.visible===!1)return;if(I.layers.test(P.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&x===zi)&&(!I.frustumCulled||i.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,I.matrixWorld);const V=t.update(I),Z=I.material;if(Array.isArray(Z)){const at=V.groups;for(let W=0,J=at.length;W<J;W++){const G=at[W],mt=Z[G.materialIndex];if(mt&&mt.visible){const yt=M(I,mt,Q,x);I.onBeforeShadow(n,I,P,U,V,yt,G),n.renderBufferDirect(U,null,V,yt,I,G),I.onAfterShadow(n,I,P,U,V,yt,G)}}}else if(Z.visible){const at=M(I,Z,Q,x);I.onBeforeShadow(n,I,P,U,V,at,null),n.renderBufferDirect(U,null,V,at,I,null),I.onAfterShadow(n,I,P,U,V,at,null)}}const j=I.children;for(let V=0,Z=j.length;V<Z;V++)S(j[V],P,U,Q,x)}function O(I){I.target.removeEventListener("dispose",O);for(const U in l){const Q=l[U],x=I.target.uuid;x in Q&&(Q[x].dispose(),delete Q[x])}}}const lS={[tl]:el,[nl]:ol,[il]:rl,[vo]:sl,[el]:tl,[ol]:nl,[rl]:il,[sl]:vo};function uS(n){function t(){let B=!1;const _t=new Ae;let nt=null;const et=new Ae(0,0,0,0);return{setMask:function(wt){nt!==wt&&!B&&(n.colorMask(wt,wt,wt,wt),nt=wt)},setLocked:function(wt){B=wt},setClear:function(wt,Mt,Bt,Yt,Qt){Qt===!0&&(wt*=Yt,Mt*=Yt,Bt*=Yt),_t.set(wt,Mt,Bt,Yt),et.equals(_t)===!1&&(n.clearColor(wt,Mt,Bt,Yt),et.copy(_t))},reset:function(){B=!1,nt=null,et.set(-1,0,0,0)}}}function e(){let B=!1,_t=!1,nt=null,et=null,wt=null;return{setReversed:function(Mt){_t=Mt},setTest:function(Mt){Mt?vt(n.DEPTH_TEST):F(n.DEPTH_TEST)},setMask:function(Mt){nt!==Mt&&!B&&(n.depthMask(Mt),nt=Mt)},setFunc:function(Mt){if(_t&&(Mt=lS[Mt]),et!==Mt){switch(Mt){case tl:n.depthFunc(n.NEVER);break;case el:n.depthFunc(n.ALWAYS);break;case nl:n.depthFunc(n.LESS);break;case vo:n.depthFunc(n.LEQUAL);break;case il:n.depthFunc(n.EQUAL);break;case sl:n.depthFunc(n.GEQUAL);break;case ol:n.depthFunc(n.GREATER);break;case rl:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}et=Mt}},setLocked:function(Mt){B=Mt},setClear:function(Mt){wt!==Mt&&(n.clearDepth(Mt),wt=Mt)},reset:function(){B=!1,nt=null,et=null,wt=null}}}function i(){let B=!1,_t=null,nt=null,et=null,wt=null,Mt=null,Bt=null,Yt=null,Qt=null;return{setTest:function(Jt){B||(Jt?vt(n.STENCIL_TEST):F(n.STENCIL_TEST))},setMask:function(Jt){_t!==Jt&&!B&&(n.stencilMask(Jt),_t=Jt)},setFunc:function(Jt,ne,ue){(nt!==Jt||et!==ne||wt!==ue)&&(n.stencilFunc(Jt,ne,ue),nt=Jt,et=ne,wt=ue)},setOp:function(Jt,ne,ue){(Mt!==Jt||Bt!==ne||Yt!==ue)&&(n.stencilOp(Jt,ne,ue),Mt=Jt,Bt=ne,Yt=ue)},setLocked:function(Jt){B=Jt},setClear:function(Jt){Qt!==Jt&&(n.clearStencil(Jt),Qt=Jt)},reset:function(){B=!1,_t=null,nt=null,et=null,wt=null,Mt=null,Bt=null,Yt=null,Qt=null}}}const s=new t,o=new e,r=new i,a=new WeakMap,c=new WeakMap;let l={},h={},u=new WeakMap,d=[],p=null,_=!1,y=null,f=null,m=null,E=null,M=null,S=null,O=null,I=new he(0,0,0),P=0,U=!1,Q=null,x=null,b=null,j=null,V=null;const Z=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let at=!1,W=0;const J=n.getParameter(n.VERSION);J.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(J)[1]),at=W>=1):J.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),at=W>=2);let G=null,mt={};const yt=n.getParameter(n.SCISSOR_BOX),gt=n.getParameter(n.VIEWPORT),It=new Ae().fromArray(yt),zt=new Ae().fromArray(gt);function rt(B,_t,nt,et){const wt=new Uint8Array(4),Mt=n.createTexture();n.bindTexture(B,Mt),n.texParameteri(B,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(B,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Bt=0;Bt<nt;Bt++)B===n.TEXTURE_3D||B===n.TEXTURE_2D_ARRAY?n.texImage3D(_t,0,n.RGBA,1,1,et,0,n.RGBA,n.UNSIGNED_BYTE,wt):n.texImage2D(_t+Bt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,wt);return Mt}const ft={};ft[n.TEXTURE_2D]=rt(n.TEXTURE_2D,n.TEXTURE_2D,1),ft[n.TEXTURE_CUBE_MAP]=rt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),ft[n.TEXTURE_2D_ARRAY]=rt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ft[n.TEXTURE_3D]=rt(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),r.setClear(0),vt(n.DEPTH_TEST),o.setFunc(vo),L(!1),N(wh),vt(n.CULL_FACE),g(as);function vt(B){l[B]!==!0&&(n.enable(B),l[B]=!0)}function F(B){l[B]!==!1&&(n.disable(B),l[B]=!1)}function ct(B,_t){return h[B]!==_t?(n.bindFramebuffer(B,_t),h[B]=_t,B===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=_t),B===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=_t),!0):!1}function it(B,_t){let nt=d,et=!1;if(B){nt=u.get(_t),nt===void 0&&(nt=[],u.set(_t,nt));const wt=B.textures;if(nt.length!==wt.length||nt[0]!==n.COLOR_ATTACHMENT0){for(let Mt=0,Bt=wt.length;Mt<Bt;Mt++)nt[Mt]=n.COLOR_ATTACHMENT0+Mt;nt.length=wt.length,et=!0}}else nt[0]!==n.BACK&&(nt[0]=n.BACK,et=!0);et&&n.drawBuffers(nt)}function lt(B){return p!==B?(n.useProgram(B),p=B,!0):!1}const bt={[Es]:n.FUNC_ADD,[d_]:n.FUNC_SUBTRACT,[f_]:n.FUNC_REVERSE_SUBTRACT};bt[p_]=n.MIN,bt[m_]=n.MAX;const tt={[g_]:n.ZERO,[__]:n.ONE,[v_]:n.SRC_COLOR,[Jc]:n.SRC_ALPHA,[b_]:n.SRC_ALPHA_SATURATE,[w_]:n.DST_COLOR,[y_]:n.DST_ALPHA,[x_]:n.ONE_MINUS_SRC_COLOR,[Qc]:n.ONE_MINUS_SRC_ALPHA,[S_]:n.ONE_MINUS_DST_COLOR,[M_]:n.ONE_MINUS_DST_ALPHA,[E_]:n.CONSTANT_COLOR,[T_]:n.ONE_MINUS_CONSTANT_COLOR,[A_]:n.CONSTANT_ALPHA,[R_]:n.ONE_MINUS_CONSTANT_ALPHA};function g(B,_t,nt,et,wt,Mt,Bt,Yt,Qt,Jt){if(B===as){_===!0&&(F(n.BLEND),_=!1);return}if(_===!1&&(vt(n.BLEND),_=!0),B!==h_){if(B!==y||Jt!==U){if((f!==Es||M!==Es)&&(n.blendEquation(n.FUNC_ADD),f=Es,M=Es),Jt)switch(B){case lo:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Sh:n.blendFunc(n.ONE,n.ONE);break;case bh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Eh:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}else switch(B){case lo:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Sh:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case bh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Eh:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}m=null,E=null,S=null,O=null,I.set(0,0,0),P=0,y=B,U=Jt}return}wt=wt||_t,Mt=Mt||nt,Bt=Bt||et,(_t!==f||wt!==M)&&(n.blendEquationSeparate(bt[_t],bt[wt]),f=_t,M=wt),(nt!==m||et!==E||Mt!==S||Bt!==O)&&(n.blendFuncSeparate(tt[nt],tt[et],tt[Mt],tt[Bt]),m=nt,E=et,S=Mt,O=Bt),(Yt.equals(I)===!1||Qt!==P)&&(n.blendColor(Yt.r,Yt.g,Yt.b,Qt),I.copy(Yt),P=Qt),y=B,U=!1}function T(B,_t){B.side===de?F(n.CULL_FACE):vt(n.CULL_FACE);let nt=B.side===Tn;_t&&(nt=!nt),L(nt),B.blending===lo&&B.transparent===!1?g(as):g(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),o.setFunc(B.depthFunc),o.setTest(B.depthTest),o.setMask(B.depthWrite),s.setMask(B.colorWrite);const et=B.stencilWrite;r.setTest(et),et&&(r.setMask(B.stencilWriteMask),r.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),r.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),X(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?vt(n.SAMPLE_ALPHA_TO_COVERAGE):F(n.SAMPLE_ALPHA_TO_COVERAGE)}function L(B){Q!==B&&(B?n.frontFace(n.CW):n.frontFace(n.CCW),Q=B)}function N(B){B!==c_?(vt(n.CULL_FACE),B!==x&&(B===wh?n.cullFace(n.BACK):B===l_?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):F(n.CULL_FACE),x=B}function D(B){B!==b&&(at&&n.lineWidth(B),b=B)}function X(B,_t,nt){B?(vt(n.POLYGON_OFFSET_FILL),(j!==_t||V!==nt)&&(n.polygonOffset(_t,nt),j=_t,V=nt)):F(n.POLYGON_OFFSET_FILL)}function K(B){B?vt(n.SCISSOR_TEST):F(n.SCISSOR_TEST)}function w(B){B===void 0&&(B=n.TEXTURE0+Z-1),G!==B&&(n.activeTexture(B),G=B)}function v(B,_t,nt){nt===void 0&&(G===null?nt=n.TEXTURE0+Z-1:nt=G);let et=mt[nt];et===void 0&&(et={type:void 0,texture:void 0},mt[nt]=et),(et.type!==B||et.texture!==_t)&&(G!==nt&&(n.activeTexture(nt),G=nt),n.bindTexture(B,_t||ft[B]),et.type=B,et.texture=_t)}function C(){const B=mt[G];B!==void 0&&B.type!==void 0&&(n.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function k(){try{n.compressedTexImage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function z(){try{n.compressedTexImage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function H(){try{n.texSubImage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ht(){try{n.texSubImage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ut(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function pt(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Tt(){try{n.texStorage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function dt(){try{n.texStorage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function xt(){try{n.texImage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Pt(){try{n.texImage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Dt(B){It.equals(B)===!1&&(n.scissor(B.x,B.y,B.z,B.w),It.copy(B))}function Et(B){zt.equals(B)===!1&&(n.viewport(B.x,B.y,B.z,B.w),zt.copy(B))}function Ht(B,_t){let nt=c.get(_t);nt===void 0&&(nt=new WeakMap,c.set(_t,nt));let et=nt.get(B);et===void 0&&(et=n.getUniformBlockIndex(_t,B.name),nt.set(B,et))}function Ut(B,_t){const et=c.get(_t).get(B);a.get(_t)!==et&&(n.uniformBlockBinding(_t,et,B.__bindingPointIndex),a.set(_t,et))}function kt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),l={},G=null,mt={},h={},u=new WeakMap,d=[],p=null,_=!1,y=null,f=null,m=null,E=null,M=null,S=null,O=null,I=new he(0,0,0),P=0,U=!1,Q=null,x=null,b=null,j=null,V=null,It.set(0,0,n.canvas.width,n.canvas.height),zt.set(0,0,n.canvas.width,n.canvas.height),s.reset(),o.reset(),r.reset()}return{buffers:{color:s,depth:o,stencil:r},enable:vt,disable:F,bindFramebuffer:ct,drawBuffers:it,useProgram:lt,setBlending:g,setMaterial:T,setFlipSided:L,setCullFace:N,setLineWidth:D,setPolygonOffset:X,setScissorTest:K,activeTexture:w,bindTexture:v,unbindTexture:C,compressedTexImage2D:k,compressedTexImage3D:z,texImage2D:xt,texImage3D:Pt,updateUBOMapping:Ht,uniformBlockBinding:Ut,texStorage2D:Tt,texStorage3D:dt,texSubImage2D:H,texSubImage3D:ht,compressedTexSubImage2D:ut,compressedTexSubImage3D:pt,scissor:Dt,viewport:Et,reset:kt}}function gd(n,t,e,i){const s=hS(i);switch(e){case $f:return n*t;case Kf:return n*t;case Zf:return n*t*2;case Jf:return n*t/s.components*s.byteLength;case mu:return n*t/s.components*s.byteLength;case Qf:return n*t*2/s.components*s.byteLength;case gu:return n*t*2/s.components*s.byteLength;case jf:return n*t*3/s.components*s.byteLength;case oi:return n*t*4/s.components*s.byteLength;case _u:return n*t*4/s.components*s.byteLength;case oa:case ra:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case aa:case ca:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case ul:case dl:return Math.max(n,16)*Math.max(t,8)/4;case ll:case hl:return Math.max(n,8)*Math.max(t,8)/2;case fl:case pl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case ml:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case gl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case _l:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case vl:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case xl:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case yl:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case Ml:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case wl:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case Sl:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case bl:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case El:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case Tl:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case Al:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case Rl:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case Pl:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case la:case Cl:case Il:return Math.ceil(n/4)*Math.ceil(t/4)*16;case tp:case Ll:return Math.ceil(n/4)*Math.ceil(t/4)*8;case Dl:case Ul:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function hS(n){switch(n){case qi:case Xf:return{byteLength:1,components:1};case ur:case qf:case vr:return{byteLength:2,components:1};case fu:case pu:return{byteLength:2,components:4};case Is:case du:case ki:return{byteLength:4,components:1};case Yf:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function dS(n,t,e,i,s,o,r){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Ot,h=new WeakMap;let u;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(w,v){return p?new OffscreenCanvas(w,v):dr("canvas")}function y(w,v,C){let k=1;const z=K(w);if((z.width>C||z.height>C)&&(k=C/Math.max(z.width,z.height)),k<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const H=Math.floor(k*z.width),ht=Math.floor(k*z.height);u===void 0&&(u=_(H,ht));const ut=v?_(H,ht):u;return ut.width=H,ut.height=ht,ut.getContext("2d").drawImage(w,0,0,H,ht),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+z.width+"x"+z.height+") to ("+H+"x"+ht+")."),ut}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+z.width+"x"+z.height+")."),w;return w}function f(w){return w.generateMipmaps&&w.minFilter!==Wn&&w.minFilter!==ii}function m(w){n.generateMipmap(w)}function E(w,v,C,k,z=!1){if(w!==null){if(n[w]!==void 0)return n[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let H=v;if(v===n.RED&&(C===n.FLOAT&&(H=n.R32F),C===n.HALF_FLOAT&&(H=n.R16F),C===n.UNSIGNED_BYTE&&(H=n.R8)),v===n.RED_INTEGER&&(C===n.UNSIGNED_BYTE&&(H=n.R8UI),C===n.UNSIGNED_SHORT&&(H=n.R16UI),C===n.UNSIGNED_INT&&(H=n.R32UI),C===n.BYTE&&(H=n.R8I),C===n.SHORT&&(H=n.R16I),C===n.INT&&(H=n.R32I)),v===n.RG&&(C===n.FLOAT&&(H=n.RG32F),C===n.HALF_FLOAT&&(H=n.RG16F),C===n.UNSIGNED_BYTE&&(H=n.RG8)),v===n.RG_INTEGER&&(C===n.UNSIGNED_BYTE&&(H=n.RG8UI),C===n.UNSIGNED_SHORT&&(H=n.RG16UI),C===n.UNSIGNED_INT&&(H=n.RG32UI),C===n.BYTE&&(H=n.RG8I),C===n.SHORT&&(H=n.RG16I),C===n.INT&&(H=n.RG32I)),v===n.RGB_INTEGER&&(C===n.UNSIGNED_BYTE&&(H=n.RGB8UI),C===n.UNSIGNED_SHORT&&(H=n.RGB16UI),C===n.UNSIGNED_INT&&(H=n.RGB32UI),C===n.BYTE&&(H=n.RGB8I),C===n.SHORT&&(H=n.RGB16I),C===n.INT&&(H=n.RGB32I)),v===n.RGBA_INTEGER&&(C===n.UNSIGNED_BYTE&&(H=n.RGBA8UI),C===n.UNSIGNED_SHORT&&(H=n.RGBA16UI),C===n.UNSIGNED_INT&&(H=n.RGBA32UI),C===n.BYTE&&(H=n.RGBA8I),C===n.SHORT&&(H=n.RGBA16I),C===n.INT&&(H=n.RGBA32I)),v===n.RGB&&C===n.UNSIGNED_INT_5_9_9_9_REV&&(H=n.RGB9_E5),v===n.RGBA){const ht=z?va:Se.getTransfer(k);C===n.FLOAT&&(H=n.RGBA32F),C===n.HALF_FLOAT&&(H=n.RGBA16F),C===n.UNSIGNED_BYTE&&(H=ht===Ne?n.SRGB8_ALPHA8:n.RGBA8),C===n.UNSIGNED_SHORT_4_4_4_4&&(H=n.RGBA4),C===n.UNSIGNED_SHORT_5_5_5_1&&(H=n.RGB5_A1)}return(H===n.R16F||H===n.R32F||H===n.RG16F||H===n.RG32F||H===n.RGBA16F||H===n.RGBA32F)&&t.get("EXT_color_buffer_float"),H}function M(w,v){let C;return w?v===null||v===Is||v===Mo?C=n.DEPTH24_STENCIL8:v===ki?C=n.DEPTH32F_STENCIL8:v===ur&&(C=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Is||v===Mo?C=n.DEPTH_COMPONENT24:v===ki?C=n.DEPTH_COMPONENT32F:v===ur&&(C=n.DEPTH_COMPONENT16),C}function S(w,v){return f(w)===!0||w.isFramebufferTexture&&w.minFilter!==Wn&&w.minFilter!==ii?Math.log2(Math.max(v.width,v.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?v.mipmaps.length:1}function O(w){const v=w.target;v.removeEventListener("dispose",O),P(v),v.isVideoTexture&&h.delete(v)}function I(w){const v=w.target;v.removeEventListener("dispose",I),Q(v)}function P(w){const v=i.get(w);if(v.__webglInit===void 0)return;const C=w.source,k=d.get(C);if(k){const z=k[v.__cacheKey];z.usedTimes--,z.usedTimes===0&&U(w),Object.keys(k).length===0&&d.delete(C)}i.remove(w)}function U(w){const v=i.get(w);n.deleteTexture(v.__webglTexture);const C=w.source,k=d.get(C);delete k[v.__cacheKey],r.memory.textures--}function Q(w){const v=i.get(w);if(w.depthTexture&&w.depthTexture.dispose(),w.isWebGLCubeRenderTarget)for(let k=0;k<6;k++){if(Array.isArray(v.__webglFramebuffer[k]))for(let z=0;z<v.__webglFramebuffer[k].length;z++)n.deleteFramebuffer(v.__webglFramebuffer[k][z]);else n.deleteFramebuffer(v.__webglFramebuffer[k]);v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer[k])}else{if(Array.isArray(v.__webglFramebuffer))for(let k=0;k<v.__webglFramebuffer.length;k++)n.deleteFramebuffer(v.__webglFramebuffer[k]);else n.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&n.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let k=0;k<v.__webglColorRenderbuffer.length;k++)v.__webglColorRenderbuffer[k]&&n.deleteRenderbuffer(v.__webglColorRenderbuffer[k]);v.__webglDepthRenderbuffer&&n.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const C=w.textures;for(let k=0,z=C.length;k<z;k++){const H=i.get(C[k]);H.__webglTexture&&(n.deleteTexture(H.__webglTexture),r.memory.textures--),i.remove(C[k])}i.remove(w)}let x=0;function b(){x=0}function j(){const w=x;return w>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+s.maxTextures),x+=1,w}function V(w){const v=[];return v.push(w.wrapS),v.push(w.wrapT),v.push(w.wrapR||0),v.push(w.magFilter),v.push(w.minFilter),v.push(w.anisotropy),v.push(w.internalFormat),v.push(w.format),v.push(w.type),v.push(w.generateMipmaps),v.push(w.premultiplyAlpha),v.push(w.flipY),v.push(w.unpackAlignment),v.push(w.colorSpace),v.join()}function Z(w,v){const C=i.get(w);if(w.isVideoTexture&&D(w),w.isRenderTargetTexture===!1&&w.version>0&&C.__version!==w.version){const k=w.image;if(k===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(k.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{zt(C,w,v);return}}e.bindTexture(n.TEXTURE_2D,C.__webglTexture,n.TEXTURE0+v)}function at(w,v){const C=i.get(w);if(w.version>0&&C.__version!==w.version){zt(C,w,v);return}e.bindTexture(n.TEXTURE_2D_ARRAY,C.__webglTexture,n.TEXTURE0+v)}function W(w,v){const C=i.get(w);if(w.version>0&&C.__version!==w.version){zt(C,w,v);return}e.bindTexture(n.TEXTURE_3D,C.__webglTexture,n.TEXTURE0+v)}function J(w,v){const C=i.get(w);if(w.version>0&&C.__version!==w.version){rt(C,w,v);return}e.bindTexture(n.TEXTURE_CUBE_MAP,C.__webglTexture,n.TEXTURE0+v)}const G={[Xe]:n.REPEAT,[As]:n.CLAMP_TO_EDGE,[cl]:n.MIRRORED_REPEAT},mt={[Wn]:n.NEAREST,[O_]:n.NEAREST_MIPMAP_NEAREST,[Ar]:n.NEAREST_MIPMAP_LINEAR,[ii]:n.LINEAR,[sc]:n.LINEAR_MIPMAP_NEAREST,[Rs]:n.LINEAR_MIPMAP_LINEAR},yt={[H_]:n.NEVER,[Y_]:n.ALWAYS,[k_]:n.LESS,[np]:n.LEQUAL,[V_]:n.EQUAL,[q_]:n.GEQUAL,[W_]:n.GREATER,[X_]:n.NOTEQUAL};function gt(w,v){if(v.type===ki&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===ii||v.magFilter===sc||v.magFilter===Ar||v.magFilter===Rs||v.minFilter===ii||v.minFilter===sc||v.minFilter===Ar||v.minFilter===Rs)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(w,n.TEXTURE_WRAP_S,G[v.wrapS]),n.texParameteri(w,n.TEXTURE_WRAP_T,G[v.wrapT]),(w===n.TEXTURE_3D||w===n.TEXTURE_2D_ARRAY)&&n.texParameteri(w,n.TEXTURE_WRAP_R,G[v.wrapR]),n.texParameteri(w,n.TEXTURE_MAG_FILTER,mt[v.magFilter]),n.texParameteri(w,n.TEXTURE_MIN_FILTER,mt[v.minFilter]),v.compareFunction&&(n.texParameteri(w,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(w,n.TEXTURE_COMPARE_FUNC,yt[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Wn||v.minFilter!==Ar&&v.minFilter!==Rs||v.type===ki&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||i.get(v).__currentAnisotropy){const C=t.get("EXT_texture_filter_anisotropic");n.texParameterf(w,C.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy}}}function It(w,v){let C=!1;w.__webglInit===void 0&&(w.__webglInit=!0,v.addEventListener("dispose",O));const k=v.source;let z=d.get(k);z===void 0&&(z={},d.set(k,z));const H=V(v);if(H!==w.__cacheKey){z[H]===void 0&&(z[H]={texture:n.createTexture(),usedTimes:0},r.memory.textures++,C=!0),z[H].usedTimes++;const ht=z[w.__cacheKey];ht!==void 0&&(z[w.__cacheKey].usedTimes--,ht.usedTimes===0&&U(v)),w.__cacheKey=H,w.__webglTexture=z[H].texture}return C}function zt(w,v,C){let k=n.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(k=n.TEXTURE_2D_ARRAY),v.isData3DTexture&&(k=n.TEXTURE_3D);const z=It(w,v),H=v.source;e.bindTexture(k,w.__webglTexture,n.TEXTURE0+C);const ht=i.get(H);if(H.version!==ht.__version||z===!0){e.activeTexture(n.TEXTURE0+C);const ut=Se.getPrimaries(Se.workingColorSpace),pt=v.colorSpace===rs?null:Se.getPrimaries(v.colorSpace),Tt=v.colorSpace===rs||ut===pt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Tt);let dt=y(v.image,!1,s.maxTextureSize);dt=X(v,dt);const xt=o.convert(v.format,v.colorSpace),Pt=o.convert(v.type);let Dt=E(v.internalFormat,xt,Pt,v.colorSpace,v.isVideoTexture);gt(k,v);let Et;const Ht=v.mipmaps,Ut=v.isVideoTexture!==!0,kt=ht.__version===void 0||z===!0,B=H.dataReady,_t=S(v,dt);if(v.isDepthTexture)Dt=M(v.format===wo,v.type),kt&&(Ut?e.texStorage2D(n.TEXTURE_2D,1,Dt,dt.width,dt.height):e.texImage2D(n.TEXTURE_2D,0,Dt,dt.width,dt.height,0,xt,Pt,null));else if(v.isDataTexture)if(Ht.length>0){Ut&&kt&&e.texStorage2D(n.TEXTURE_2D,_t,Dt,Ht[0].width,Ht[0].height);for(let nt=0,et=Ht.length;nt<et;nt++)Et=Ht[nt],Ut?B&&e.texSubImage2D(n.TEXTURE_2D,nt,0,0,Et.width,Et.height,xt,Pt,Et.data):e.texImage2D(n.TEXTURE_2D,nt,Dt,Et.width,Et.height,0,xt,Pt,Et.data);v.generateMipmaps=!1}else Ut?(kt&&e.texStorage2D(n.TEXTURE_2D,_t,Dt,dt.width,dt.height),B&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,dt.width,dt.height,xt,Pt,dt.data)):e.texImage2D(n.TEXTURE_2D,0,Dt,dt.width,dt.height,0,xt,Pt,dt.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Ut&&kt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,_t,Dt,Ht[0].width,Ht[0].height,dt.depth);for(let nt=0,et=Ht.length;nt<et;nt++)if(Et=Ht[nt],v.format!==oi)if(xt!==null)if(Ut){if(B)if(v.layerUpdates.size>0){const wt=gd(Et.width,Et.height,v.format,v.type);for(const Mt of v.layerUpdates){const Bt=Et.data.subarray(Mt*wt/Et.data.BYTES_PER_ELEMENT,(Mt+1)*wt/Et.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,nt,0,0,Mt,Et.width,Et.height,1,xt,Bt,0,0)}v.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,nt,0,0,0,Et.width,Et.height,dt.depth,xt,Et.data,0,0)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,nt,Dt,Et.width,Et.height,dt.depth,0,Et.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ut?B&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,nt,0,0,0,Et.width,Et.height,dt.depth,xt,Pt,Et.data):e.texImage3D(n.TEXTURE_2D_ARRAY,nt,Dt,Et.width,Et.height,dt.depth,0,xt,Pt,Et.data)}else{Ut&&kt&&e.texStorage2D(n.TEXTURE_2D,_t,Dt,Ht[0].width,Ht[0].height);for(let nt=0,et=Ht.length;nt<et;nt++)Et=Ht[nt],v.format!==oi?xt!==null?Ut?B&&e.compressedTexSubImage2D(n.TEXTURE_2D,nt,0,0,Et.width,Et.height,xt,Et.data):e.compressedTexImage2D(n.TEXTURE_2D,nt,Dt,Et.width,Et.height,0,Et.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ut?B&&e.texSubImage2D(n.TEXTURE_2D,nt,0,0,Et.width,Et.height,xt,Pt,Et.data):e.texImage2D(n.TEXTURE_2D,nt,Dt,Et.width,Et.height,0,xt,Pt,Et.data)}else if(v.isDataArrayTexture)if(Ut){if(kt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,_t,Dt,dt.width,dt.height,dt.depth),B)if(v.layerUpdates.size>0){const nt=gd(dt.width,dt.height,v.format,v.type);for(const et of v.layerUpdates){const wt=dt.data.subarray(et*nt/dt.data.BYTES_PER_ELEMENT,(et+1)*nt/dt.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,et,dt.width,dt.height,1,xt,Pt,wt)}v.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,dt.width,dt.height,dt.depth,xt,Pt,dt.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,Dt,dt.width,dt.height,dt.depth,0,xt,Pt,dt.data);else if(v.isData3DTexture)Ut?(kt&&e.texStorage3D(n.TEXTURE_3D,_t,Dt,dt.width,dt.height,dt.depth),B&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,dt.width,dt.height,dt.depth,xt,Pt,dt.data)):e.texImage3D(n.TEXTURE_3D,0,Dt,dt.width,dt.height,dt.depth,0,xt,Pt,dt.data);else if(v.isFramebufferTexture){if(kt)if(Ut)e.texStorage2D(n.TEXTURE_2D,_t,Dt,dt.width,dt.height);else{let nt=dt.width,et=dt.height;for(let wt=0;wt<_t;wt++)e.texImage2D(n.TEXTURE_2D,wt,Dt,nt,et,0,xt,Pt,null),nt>>=1,et>>=1}}else if(Ht.length>0){if(Ut&&kt){const nt=K(Ht[0]);e.texStorage2D(n.TEXTURE_2D,_t,Dt,nt.width,nt.height)}for(let nt=0,et=Ht.length;nt<et;nt++)Et=Ht[nt],Ut?B&&e.texSubImage2D(n.TEXTURE_2D,nt,0,0,xt,Pt,Et):e.texImage2D(n.TEXTURE_2D,nt,Dt,xt,Pt,Et);v.generateMipmaps=!1}else if(Ut){if(kt){const nt=K(dt);e.texStorage2D(n.TEXTURE_2D,_t,Dt,nt.width,nt.height)}B&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,xt,Pt,dt)}else e.texImage2D(n.TEXTURE_2D,0,Dt,xt,Pt,dt);f(v)&&m(k),ht.__version=H.version,v.onUpdate&&v.onUpdate(v)}w.__version=v.version}function rt(w,v,C){if(v.image.length!==6)return;const k=It(w,v),z=v.source;e.bindTexture(n.TEXTURE_CUBE_MAP,w.__webglTexture,n.TEXTURE0+C);const H=i.get(z);if(z.version!==H.__version||k===!0){e.activeTexture(n.TEXTURE0+C);const ht=Se.getPrimaries(Se.workingColorSpace),ut=v.colorSpace===rs?null:Se.getPrimaries(v.colorSpace),pt=v.colorSpace===rs||ht===ut?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,pt);const Tt=v.isCompressedTexture||v.image[0].isCompressedTexture,dt=v.image[0]&&v.image[0].isDataTexture,xt=[];for(let et=0;et<6;et++)!Tt&&!dt?xt[et]=y(v.image[et],!0,s.maxCubemapSize):xt[et]=dt?v.image[et].image:v.image[et],xt[et]=X(v,xt[et]);const Pt=xt[0],Dt=o.convert(v.format,v.colorSpace),Et=o.convert(v.type),Ht=E(v.internalFormat,Dt,Et,v.colorSpace),Ut=v.isVideoTexture!==!0,kt=H.__version===void 0||k===!0,B=z.dataReady;let _t=S(v,Pt);gt(n.TEXTURE_CUBE_MAP,v);let nt;if(Tt){Ut&&kt&&e.texStorage2D(n.TEXTURE_CUBE_MAP,_t,Ht,Pt.width,Pt.height);for(let et=0;et<6;et++){nt=xt[et].mipmaps;for(let wt=0;wt<nt.length;wt++){const Mt=nt[wt];v.format!==oi?Dt!==null?Ut?B&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,wt,0,0,Mt.width,Mt.height,Dt,Mt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,wt,Ht,Mt.width,Mt.height,0,Mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ut?B&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,wt,0,0,Mt.width,Mt.height,Dt,Et,Mt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,wt,Ht,Mt.width,Mt.height,0,Dt,Et,Mt.data)}}}else{if(nt=v.mipmaps,Ut&&kt){nt.length>0&&_t++;const et=K(xt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,_t,Ht,et.width,et.height)}for(let et=0;et<6;et++)if(dt){Ut?B&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,0,0,xt[et].width,xt[et].height,Dt,Et,xt[et].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,Ht,xt[et].width,xt[et].height,0,Dt,Et,xt[et].data);for(let wt=0;wt<nt.length;wt++){const Bt=nt[wt].image[et].image;Ut?B&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,wt+1,0,0,Bt.width,Bt.height,Dt,Et,Bt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,wt+1,Ht,Bt.width,Bt.height,0,Dt,Et,Bt.data)}}else{Ut?B&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,0,0,Dt,Et,xt[et]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,Ht,Dt,Et,xt[et]);for(let wt=0;wt<nt.length;wt++){const Mt=nt[wt];Ut?B&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,wt+1,0,0,Dt,Et,Mt.image[et]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,wt+1,Ht,Dt,Et,Mt.image[et])}}}f(v)&&m(n.TEXTURE_CUBE_MAP),H.__version=z.version,v.onUpdate&&v.onUpdate(v)}w.__version=v.version}function ft(w,v,C,k,z,H){const ht=o.convert(C.format,C.colorSpace),ut=o.convert(C.type),pt=E(C.internalFormat,ht,ut,C.colorSpace);if(!i.get(v).__hasExternalTextures){const dt=Math.max(1,v.width>>H),xt=Math.max(1,v.height>>H);z===n.TEXTURE_3D||z===n.TEXTURE_2D_ARRAY?e.texImage3D(z,H,pt,dt,xt,v.depth,0,ht,ut,null):e.texImage2D(z,H,pt,dt,xt,0,ht,ut,null)}e.bindFramebuffer(n.FRAMEBUFFER,w),N(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,k,z,i.get(C).__webglTexture,0,L(v)):(z===n.TEXTURE_2D||z>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&z<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,k,z,i.get(C).__webglTexture,H),e.bindFramebuffer(n.FRAMEBUFFER,null)}function vt(w,v,C){if(n.bindRenderbuffer(n.RENDERBUFFER,w),v.depthBuffer){const k=v.depthTexture,z=k&&k.isDepthTexture?k.type:null,H=M(v.stencilBuffer,z),ht=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ut=L(v);N(v)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ut,H,v.width,v.height):C?n.renderbufferStorageMultisample(n.RENDERBUFFER,ut,H,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,H,v.width,v.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,ht,n.RENDERBUFFER,w)}else{const k=v.textures;for(let z=0;z<k.length;z++){const H=k[z],ht=o.convert(H.format,H.colorSpace),ut=o.convert(H.type),pt=E(H.internalFormat,ht,ut,H.colorSpace),Tt=L(v);C&&N(v)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Tt,pt,v.width,v.height):N(v)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Tt,pt,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,pt,v.width,v.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function F(w,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,w),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(v.depthTexture).__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),Z(v.depthTexture,0);const k=i.get(v.depthTexture).__webglTexture,z=L(v);if(v.depthTexture.format===uo)N(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,k,0,z):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,k,0);else if(v.depthTexture.format===wo)N(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,k,0,z):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,k,0);else throw new Error("Unknown depthTexture format")}function ct(w){const v=i.get(w),C=w.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==w.depthTexture){const k=w.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),k){const z=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,k.removeEventListener("dispose",z)};k.addEventListener("dispose",z),v.__depthDisposeCallback=z}v.__boundDepthTexture=k}if(w.depthTexture&&!v.__autoAllocateDepthBuffer){if(C)throw new Error("target.depthTexture not supported in Cube render targets");F(v.__webglFramebuffer,w)}else if(C){v.__webglDepthbuffer=[];for(let k=0;k<6;k++)if(e.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[k]),v.__webglDepthbuffer[k]===void 0)v.__webglDepthbuffer[k]=n.createRenderbuffer(),vt(v.__webglDepthbuffer[k],w,!1);else{const z=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,H=v.__webglDepthbuffer[k];n.bindRenderbuffer(n.RENDERBUFFER,H),n.framebufferRenderbuffer(n.FRAMEBUFFER,z,n.RENDERBUFFER,H)}}else if(e.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=n.createRenderbuffer(),vt(v.__webglDepthbuffer,w,!1);else{const k=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,z=v.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,z),n.framebufferRenderbuffer(n.FRAMEBUFFER,k,n.RENDERBUFFER,z)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function it(w,v,C){const k=i.get(w);v!==void 0&&ft(k.__webglFramebuffer,w,w.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),C!==void 0&&ct(w)}function lt(w){const v=w.texture,C=i.get(w),k=i.get(v);w.addEventListener("dispose",I);const z=w.textures,H=w.isWebGLCubeRenderTarget===!0,ht=z.length>1;if(ht||(k.__webglTexture===void 0&&(k.__webglTexture=n.createTexture()),k.__version=v.version,r.memory.textures++),H){C.__webglFramebuffer=[];for(let ut=0;ut<6;ut++)if(v.mipmaps&&v.mipmaps.length>0){C.__webglFramebuffer[ut]=[];for(let pt=0;pt<v.mipmaps.length;pt++)C.__webglFramebuffer[ut][pt]=n.createFramebuffer()}else C.__webglFramebuffer[ut]=n.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){C.__webglFramebuffer=[];for(let ut=0;ut<v.mipmaps.length;ut++)C.__webglFramebuffer[ut]=n.createFramebuffer()}else C.__webglFramebuffer=n.createFramebuffer();if(ht)for(let ut=0,pt=z.length;ut<pt;ut++){const Tt=i.get(z[ut]);Tt.__webglTexture===void 0&&(Tt.__webglTexture=n.createTexture(),r.memory.textures++)}if(w.samples>0&&N(w)===!1){C.__webglMultisampledFramebuffer=n.createFramebuffer(),C.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,C.__webglMultisampledFramebuffer);for(let ut=0;ut<z.length;ut++){const pt=z[ut];C.__webglColorRenderbuffer[ut]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,C.__webglColorRenderbuffer[ut]);const Tt=o.convert(pt.format,pt.colorSpace),dt=o.convert(pt.type),xt=E(pt.internalFormat,Tt,dt,pt.colorSpace,w.isXRRenderTarget===!0),Pt=L(w);n.renderbufferStorageMultisample(n.RENDERBUFFER,Pt,xt,w.width,w.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ut,n.RENDERBUFFER,C.__webglColorRenderbuffer[ut])}n.bindRenderbuffer(n.RENDERBUFFER,null),w.depthBuffer&&(C.__webglDepthRenderbuffer=n.createRenderbuffer(),vt(C.__webglDepthRenderbuffer,w,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(H){e.bindTexture(n.TEXTURE_CUBE_MAP,k.__webglTexture),gt(n.TEXTURE_CUBE_MAP,v);for(let ut=0;ut<6;ut++)if(v.mipmaps&&v.mipmaps.length>0)for(let pt=0;pt<v.mipmaps.length;pt++)ft(C.__webglFramebuffer[ut][pt],w,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ut,pt);else ft(C.__webglFramebuffer[ut],w,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0);f(v)&&m(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(ht){for(let ut=0,pt=z.length;ut<pt;ut++){const Tt=z[ut],dt=i.get(Tt);e.bindTexture(n.TEXTURE_2D,dt.__webglTexture),gt(n.TEXTURE_2D,Tt),ft(C.__webglFramebuffer,w,Tt,n.COLOR_ATTACHMENT0+ut,n.TEXTURE_2D,0),f(Tt)&&m(n.TEXTURE_2D)}e.unbindTexture()}else{let ut=n.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(ut=w.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(ut,k.__webglTexture),gt(ut,v),v.mipmaps&&v.mipmaps.length>0)for(let pt=0;pt<v.mipmaps.length;pt++)ft(C.__webglFramebuffer[pt],w,v,n.COLOR_ATTACHMENT0,ut,pt);else ft(C.__webglFramebuffer,w,v,n.COLOR_ATTACHMENT0,ut,0);f(v)&&m(ut),e.unbindTexture()}w.depthBuffer&&ct(w)}function bt(w){const v=w.textures;for(let C=0,k=v.length;C<k;C++){const z=v[C];if(f(z)){const H=w.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,ht=i.get(z).__webglTexture;e.bindTexture(H,ht),m(H),e.unbindTexture()}}}const tt=[],g=[];function T(w){if(w.samples>0){if(N(w)===!1){const v=w.textures,C=w.width,k=w.height;let z=n.COLOR_BUFFER_BIT;const H=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ht=i.get(w),ut=v.length>1;if(ut)for(let pt=0;pt<v.length;pt++)e.bindFramebuffer(n.FRAMEBUFFER,ht.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+pt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,ht.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+pt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,ht.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,ht.__webglFramebuffer);for(let pt=0;pt<v.length;pt++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(z|=n.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(z|=n.STENCIL_BUFFER_BIT)),ut){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ht.__webglColorRenderbuffer[pt]);const Tt=i.get(v[pt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Tt,0)}n.blitFramebuffer(0,0,C,k,0,0,C,k,z,n.NEAREST),c===!0&&(tt.length=0,g.length=0,tt.push(n.COLOR_ATTACHMENT0+pt),w.depthBuffer&&w.resolveDepthBuffer===!1&&(tt.push(H),g.push(H),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,g)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,tt))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ut)for(let pt=0;pt<v.length;pt++){e.bindFramebuffer(n.FRAMEBUFFER,ht.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+pt,n.RENDERBUFFER,ht.__webglColorRenderbuffer[pt]);const Tt=i.get(v[pt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,ht.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+pt,n.TEXTURE_2D,Tt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,ht.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&c){const v=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[v])}}}function L(w){return Math.min(s.maxSamples,w.samples)}function N(w){const v=i.get(w);return w.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function D(w){const v=r.render.frame;h.get(w)!==v&&(h.set(w,v),w.update())}function X(w,v){const C=w.colorSpace,k=w.format,z=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||C!==fs&&C!==rs&&(Se.getTransfer(C)===Ne?(k!==oi||z!==qi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",C)),v}function K(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(l.width=w.naturalWidth||w.width,l.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(l.width=w.displayWidth,l.height=w.displayHeight):(l.width=w.width,l.height=w.height),l}this.allocateTextureUnit=j,this.resetTextureUnits=b,this.setTexture2D=Z,this.setTexture2DArray=at,this.setTexture3D=W,this.setTextureCube=J,this.rebindTextures=it,this.setupRenderTarget=lt,this.updateRenderTargetMipmap=bt,this.updateMultisampleRenderTarget=T,this.setupDepthRenderbuffer=ct,this.setupFrameBufferTexture=ft,this.useMultisampledRTT=N}function fS(n,t){function e(i,s=rs){let o;const r=Se.getTransfer(s);if(i===qi)return n.UNSIGNED_BYTE;if(i===fu)return n.UNSIGNED_SHORT_4_4_4_4;if(i===pu)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Yf)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Xf)return n.BYTE;if(i===qf)return n.SHORT;if(i===ur)return n.UNSIGNED_SHORT;if(i===du)return n.INT;if(i===Is)return n.UNSIGNED_INT;if(i===ki)return n.FLOAT;if(i===vr)return n.HALF_FLOAT;if(i===$f)return n.ALPHA;if(i===jf)return n.RGB;if(i===oi)return n.RGBA;if(i===Kf)return n.LUMINANCE;if(i===Zf)return n.LUMINANCE_ALPHA;if(i===uo)return n.DEPTH_COMPONENT;if(i===wo)return n.DEPTH_STENCIL;if(i===Jf)return n.RED;if(i===mu)return n.RED_INTEGER;if(i===Qf)return n.RG;if(i===gu)return n.RG_INTEGER;if(i===_u)return n.RGBA_INTEGER;if(i===oa||i===ra||i===aa||i===ca)if(r===Ne)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(i===oa)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ra)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===aa)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ca)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(i===oa)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ra)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===aa)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ca)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===ll||i===ul||i===hl||i===dl)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(i===ll)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===ul)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===hl)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===dl)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===fl||i===pl||i===ml)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(i===fl||i===pl)return r===Ne?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(i===ml)return r===Ne?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===gl||i===_l||i===vl||i===xl||i===yl||i===Ml||i===wl||i===Sl||i===bl||i===El||i===Tl||i===Al||i===Rl||i===Pl)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(i===gl)return r===Ne?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===_l)return r===Ne?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===vl)return r===Ne?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===xl)return r===Ne?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===yl)return r===Ne?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Ml)return r===Ne?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===wl)return r===Ne?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Sl)return r===Ne?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===bl)return r===Ne?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===El)return r===Ne?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Tl)return r===Ne?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Al)return r===Ne?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Rl)return r===Ne?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Pl)return r===Ne?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===la||i===Cl||i===Il)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(i===la)return r===Ne?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Cl)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Il)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===tp||i===Ll||i===Dl||i===Ul)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(i===la)return o.COMPRESSED_RED_RGTC1_EXT;if(i===Ll)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Dl)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Ul)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Mo?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}class pS extends Be{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class qt extends an{constructor(){super(),this.isGroup=!0,this.type="Group"}}const mS={type:"move"};class Lc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new qt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new qt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new qt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new q),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,o=null,r=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){r=!0;for(const y of t.hand.values()){const f=e.getJointPose(y,i),m=this._getHandJoint(l,y);f!==null&&(m.matrix.fromArray(f.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=f.radius),m.visible=f!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,_=.005;l.inputState.pinching&&d>p+_?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=p-_&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(o=e.getPose(t.gripSpace,i),o!==null&&(c.matrix.fromArray(o.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,o.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(o.linearVelocity)):c.hasLinearVelocity=!1,o.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(o.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&o!==null&&(s=o),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(mS)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=o!==null),l!==null&&(l.visible=r!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new qt;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const gS=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,_S=`
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

}`;class vS{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){const s=new wn,o=t.properties.get(s);o.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new Pn({vertexShader:gS,fragmentShader:_S,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new A(new za(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class xS extends Eo{constructor(t,e){super();const i=this;let s=null,o=1,r=null,a="local-floor",c=1,l=null,h=null,u=null,d=null,p=null,_=null;const y=new vS,f=e.getContextAttributes();let m=null,E=null;const M=[],S=[],O=new Ot;let I=null;const P=new Be;P.layers.enable(1),P.viewport=new Ae;const U=new Be;U.layers.enable(2),U.viewport=new Ae;const Q=[P,U],x=new pS;x.layers.enable(1),x.layers.enable(2);let b=null,j=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(rt){let ft=M[rt];return ft===void 0&&(ft=new Lc,M[rt]=ft),ft.getTargetRaySpace()},this.getControllerGrip=function(rt){let ft=M[rt];return ft===void 0&&(ft=new Lc,M[rt]=ft),ft.getGripSpace()},this.getHand=function(rt){let ft=M[rt];return ft===void 0&&(ft=new Lc,M[rt]=ft),ft.getHandSpace()};function V(rt){const ft=S.indexOf(rt.inputSource);if(ft===-1)return;const vt=M[ft];vt!==void 0&&(vt.update(rt.inputSource,rt.frame,l||r),vt.dispatchEvent({type:rt.type,data:rt.inputSource}))}function Z(){s.removeEventListener("select",V),s.removeEventListener("selectstart",V),s.removeEventListener("selectend",V),s.removeEventListener("squeeze",V),s.removeEventListener("squeezestart",V),s.removeEventListener("squeezeend",V),s.removeEventListener("end",Z),s.removeEventListener("inputsourceschange",at);for(let rt=0;rt<M.length;rt++){const ft=S[rt];ft!==null&&(S[rt]=null,M[rt].disconnect(ft))}b=null,j=null,y.reset(),t.setRenderTarget(m),p=null,d=null,u=null,s=null,E=null,zt.stop(),i.isPresenting=!1,t.setPixelRatio(I),t.setSize(O.width,O.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(rt){o=rt,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(rt){a=rt,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||r},this.setReferenceSpace=function(rt){l=rt},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(rt){if(s=rt,s!==null){if(m=t.getRenderTarget(),s.addEventListener("select",V),s.addEventListener("selectstart",V),s.addEventListener("selectend",V),s.addEventListener("squeeze",V),s.addEventListener("squeezestart",V),s.addEventListener("squeezeend",V),s.addEventListener("end",Z),s.addEventListener("inputsourceschange",at),f.xrCompatible!==!0&&await e.makeXRCompatible(),I=t.getPixelRatio(),t.getSize(O),s.renderState.layers===void 0){const ft={antialias:f.antialias,alpha:!0,depth:f.depth,stencil:f.stencil,framebufferScaleFactor:o};p=new XRWebGLLayer(s,e,ft),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),E=new Ls(p.framebufferWidth,p.framebufferHeight,{format:oi,type:qi,colorSpace:t.outputColorSpace,stencilBuffer:f.stencil})}else{let ft=null,vt=null,F=null;f.depth&&(F=f.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ft=f.stencil?wo:uo,vt=f.stencil?Mo:Is);const ct={colorFormat:e.RGBA8,depthFormat:F,scaleFactor:o};u=new XRWebGLBinding(s,e),d=u.createProjectionLayer(ct),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),E=new Ls(d.textureWidth,d.textureHeight,{format:oi,type:qi,depthTexture:new mp(d.textureWidth,d.textureHeight,vt,void 0,void 0,void 0,void 0,void 0,void 0,ft),stencilBuffer:f.stencil,colorSpace:t.outputColorSpace,samples:f.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(c),l=null,r=await s.requestReferenceSpace(a),zt.setContext(s),zt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function at(rt){for(let ft=0;ft<rt.removed.length;ft++){const vt=rt.removed[ft],F=S.indexOf(vt);F>=0&&(S[F]=null,M[F].disconnect(vt))}for(let ft=0;ft<rt.added.length;ft++){const vt=rt.added[ft];let F=S.indexOf(vt);if(F===-1){for(let it=0;it<M.length;it++)if(it>=S.length){S.push(vt),F=it;break}else if(S[it]===null){S[it]=vt,F=it;break}if(F===-1)break}const ct=M[F];ct&&ct.connect(vt)}}const W=new q,J=new q;function G(rt,ft,vt){W.setFromMatrixPosition(ft.matrixWorld),J.setFromMatrixPosition(vt.matrixWorld);const F=W.distanceTo(J),ct=ft.projectionMatrix.elements,it=vt.projectionMatrix.elements,lt=ct[14]/(ct[10]-1),bt=ct[14]/(ct[10]+1),tt=(ct[9]+1)/ct[5],g=(ct[9]-1)/ct[5],T=(ct[8]-1)/ct[0],L=(it[8]+1)/it[0],N=lt*T,D=lt*L,X=F/(-T+L),K=X*-T;if(ft.matrixWorld.decompose(rt.position,rt.quaternion,rt.scale),rt.translateX(K),rt.translateZ(X),rt.matrixWorld.compose(rt.position,rt.quaternion,rt.scale),rt.matrixWorldInverse.copy(rt.matrixWorld).invert(),ct[10]===-1)rt.projectionMatrix.copy(ft.projectionMatrix),rt.projectionMatrixInverse.copy(ft.projectionMatrixInverse);else{const w=lt+X,v=bt+X,C=N-K,k=D+(F-K),z=tt*bt/v*w,H=g*bt/v*w;rt.projectionMatrix.makePerspective(C,k,z,H,w,v),rt.projectionMatrixInverse.copy(rt.projectionMatrix).invert()}}function mt(rt,ft){ft===null?rt.matrixWorld.copy(rt.matrix):rt.matrixWorld.multiplyMatrices(ft.matrixWorld,rt.matrix),rt.matrixWorldInverse.copy(rt.matrixWorld).invert()}this.updateCamera=function(rt){if(s===null)return;let ft=rt.near,vt=rt.far;y.texture!==null&&(y.depthNear>0&&(ft=y.depthNear),y.depthFar>0&&(vt=y.depthFar)),x.near=U.near=P.near=ft,x.far=U.far=P.far=vt,(b!==x.near||j!==x.far)&&(s.updateRenderState({depthNear:x.near,depthFar:x.far}),b=x.near,j=x.far);const F=rt.parent,ct=x.cameras;mt(x,F);for(let it=0;it<ct.length;it++)mt(ct[it],F);ct.length===2?G(x,P,U):x.projectionMatrix.copy(P.projectionMatrix),yt(rt,x,F)};function yt(rt,ft,vt){vt===null?rt.matrix.copy(ft.matrixWorld):(rt.matrix.copy(vt.matrixWorld),rt.matrix.invert(),rt.matrix.multiply(ft.matrixWorld)),rt.matrix.decompose(rt.position,rt.quaternion,rt.scale),rt.updateMatrixWorld(!0),rt.projectionMatrix.copy(ft.projectionMatrix),rt.projectionMatrixInverse.copy(ft.projectionMatrixInverse),rt.isPerspectiveCamera&&(rt.fov=hr*2*Math.atan(1/rt.projectionMatrix.elements[5]),rt.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(d===null&&p===null))return c},this.setFoveation=function(rt){c=rt,d!==null&&(d.fixedFoveation=rt),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=rt)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(x)};let gt=null;function It(rt,ft){if(h=ft.getViewerPose(l||r),_=ft,h!==null){const vt=h.views;p!==null&&(t.setRenderTargetFramebuffer(E,p.framebuffer),t.setRenderTarget(E));let F=!1;vt.length!==x.cameras.length&&(x.cameras.length=0,F=!0);for(let it=0;it<vt.length;it++){const lt=vt[it];let bt=null;if(p!==null)bt=p.getViewport(lt);else{const g=u.getViewSubImage(d,lt);bt=g.viewport,it===0&&(t.setRenderTargetTextures(E,g.colorTexture,d.ignoreDepthValues?void 0:g.depthStencilTexture),t.setRenderTarget(E))}let tt=Q[it];tt===void 0&&(tt=new Be,tt.layers.enable(it),tt.viewport=new Ae,Q[it]=tt),tt.matrix.fromArray(lt.transform.matrix),tt.matrix.decompose(tt.position,tt.quaternion,tt.scale),tt.projectionMatrix.fromArray(lt.projectionMatrix),tt.projectionMatrixInverse.copy(tt.projectionMatrix).invert(),tt.viewport.set(bt.x,bt.y,bt.width,bt.height),it===0&&(x.matrix.copy(tt.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),F===!0&&x.cameras.push(tt)}const ct=s.enabledFeatures;if(ct&&ct.includes("depth-sensing")){const it=u.getDepthInformation(vt[0]);it&&it.isValid&&it.texture&&y.init(t,it,s.renderState)}}for(let vt=0;vt<M.length;vt++){const F=S[vt],ct=M[vt];F!==null&&ct!==void 0&&ct.update(F,ft,l||r)}gt&&gt(rt,ft),ft.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ft}),_=null}const zt=new fp;zt.setAnimationLoop(It),this.setAnimationLoop=function(rt){gt=rt},this.dispose=function(){}}}const Ms=new bi,yS=new Fe;function MS(n,t){function e(f,m){f.matrixAutoUpdate===!0&&f.updateMatrix(),m.value.copy(f.matrix)}function i(f,m){m.color.getRGB(f.fogColor.value,hp(n)),m.isFog?(f.fogNear.value=m.near,f.fogFar.value=m.far):m.isFogExp2&&(f.fogDensity.value=m.density)}function s(f,m,E,M,S){m.isMeshBasicMaterial||m.isMeshLambertMaterial?o(f,m):m.isMeshToonMaterial?(o(f,m),u(f,m)):m.isMeshPhongMaterial?(o(f,m),h(f,m)):m.isMeshStandardMaterial?(o(f,m),d(f,m),m.isMeshPhysicalMaterial&&p(f,m,S)):m.isMeshMatcapMaterial?(o(f,m),_(f,m)):m.isMeshDepthMaterial?o(f,m):m.isMeshDistanceMaterial?(o(f,m),y(f,m)):m.isMeshNormalMaterial?o(f,m):m.isLineBasicMaterial?(r(f,m),m.isLineDashedMaterial&&a(f,m)):m.isPointsMaterial?c(f,m,E,M):m.isSpriteMaterial?l(f,m):m.isShadowMaterial?(f.color.value.copy(m.color),f.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function o(f,m){f.opacity.value=m.opacity,m.color&&f.diffuse.value.copy(m.color),m.emissive&&f.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(f.map.value=m.map,e(m.map,f.mapTransform)),m.alphaMap&&(f.alphaMap.value=m.alphaMap,e(m.alphaMap,f.alphaMapTransform)),m.bumpMap&&(f.bumpMap.value=m.bumpMap,e(m.bumpMap,f.bumpMapTransform),f.bumpScale.value=m.bumpScale,m.side===Tn&&(f.bumpScale.value*=-1)),m.normalMap&&(f.normalMap.value=m.normalMap,e(m.normalMap,f.normalMapTransform),f.normalScale.value.copy(m.normalScale),m.side===Tn&&f.normalScale.value.negate()),m.displacementMap&&(f.displacementMap.value=m.displacementMap,e(m.displacementMap,f.displacementMapTransform),f.displacementScale.value=m.displacementScale,f.displacementBias.value=m.displacementBias),m.emissiveMap&&(f.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,f.emissiveMapTransform)),m.specularMap&&(f.specularMap.value=m.specularMap,e(m.specularMap,f.specularMapTransform)),m.alphaTest>0&&(f.alphaTest.value=m.alphaTest);const E=t.get(m),M=E.envMap,S=E.envMapRotation;M&&(f.envMap.value=M,Ms.copy(S),Ms.x*=-1,Ms.y*=-1,Ms.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Ms.y*=-1,Ms.z*=-1),f.envMapRotation.value.setFromMatrix4(yS.makeRotationFromEuler(Ms)),f.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,f.reflectivity.value=m.reflectivity,f.ior.value=m.ior,f.refractionRatio.value=m.refractionRatio),m.lightMap&&(f.lightMap.value=m.lightMap,f.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,f.lightMapTransform)),m.aoMap&&(f.aoMap.value=m.aoMap,f.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,f.aoMapTransform))}function r(f,m){f.diffuse.value.copy(m.color),f.opacity.value=m.opacity,m.map&&(f.map.value=m.map,e(m.map,f.mapTransform))}function a(f,m){f.dashSize.value=m.dashSize,f.totalSize.value=m.dashSize+m.gapSize,f.scale.value=m.scale}function c(f,m,E,M){f.diffuse.value.copy(m.color),f.opacity.value=m.opacity,f.size.value=m.size*E,f.scale.value=M*.5,m.map&&(f.map.value=m.map,e(m.map,f.uvTransform)),m.alphaMap&&(f.alphaMap.value=m.alphaMap,e(m.alphaMap,f.alphaMapTransform)),m.alphaTest>0&&(f.alphaTest.value=m.alphaTest)}function l(f,m){f.diffuse.value.copy(m.color),f.opacity.value=m.opacity,f.rotation.value=m.rotation,m.map&&(f.map.value=m.map,e(m.map,f.mapTransform)),m.alphaMap&&(f.alphaMap.value=m.alphaMap,e(m.alphaMap,f.alphaMapTransform)),m.alphaTest>0&&(f.alphaTest.value=m.alphaTest)}function h(f,m){f.specular.value.copy(m.specular),f.shininess.value=Math.max(m.shininess,1e-4)}function u(f,m){m.gradientMap&&(f.gradientMap.value=m.gradientMap)}function d(f,m){f.metalness.value=m.metalness,m.metalnessMap&&(f.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,f.metalnessMapTransform)),f.roughness.value=m.roughness,m.roughnessMap&&(f.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,f.roughnessMapTransform)),m.envMap&&(f.envMapIntensity.value=m.envMapIntensity)}function p(f,m,E){f.ior.value=m.ior,m.sheen>0&&(f.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),f.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(f.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,f.sheenColorMapTransform)),m.sheenRoughnessMap&&(f.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,f.sheenRoughnessMapTransform))),m.clearcoat>0&&(f.clearcoat.value=m.clearcoat,f.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(f.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,f.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(f.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Tn&&f.clearcoatNormalScale.value.negate())),m.dispersion>0&&(f.dispersion.value=m.dispersion),m.iridescence>0&&(f.iridescence.value=m.iridescence,f.iridescenceIOR.value=m.iridescenceIOR,f.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(f.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,f.iridescenceMapTransform)),m.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),m.transmission>0&&(f.transmission.value=m.transmission,f.transmissionSamplerMap.value=E.texture,f.transmissionSamplerSize.value.set(E.width,E.height),m.transmissionMap&&(f.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,f.transmissionMapTransform)),f.thickness.value=m.thickness,m.thicknessMap&&(f.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=m.attenuationDistance,f.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(f.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(f.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=m.specularIntensity,f.specularColor.value.copy(m.specularColor),m.specularColorMap&&(f.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,f.specularColorMapTransform)),m.specularIntensityMap&&(f.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,f.specularIntensityMapTransform))}function _(f,m){m.matcap&&(f.matcap.value=m.matcap)}function y(f,m){const E=t.get(m).light;f.referencePosition.value.setFromMatrixPosition(E.matrixWorld),f.nearDistance.value=E.shadow.camera.near,f.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function wS(n,t,e,i){let s={},o={},r=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(E,M){const S=M.program;i.uniformBlockBinding(E,S)}function l(E,M){let S=s[E.id];S===void 0&&(_(E),S=h(E),s[E.id]=S,E.addEventListener("dispose",f));const O=M.program;i.updateUBOMapping(E,O);const I=t.render.frame;o[E.id]!==I&&(d(E),o[E.id]=I)}function h(E){const M=u();E.__bindingPointIndex=M;const S=n.createBuffer(),O=E.__size,I=E.usage;return n.bindBuffer(n.UNIFORM_BUFFER,S),n.bufferData(n.UNIFORM_BUFFER,O,I),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,M,S),S}function u(){for(let E=0;E<a;E++)if(r.indexOf(E)===-1)return r.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(E){const M=s[E.id],S=E.uniforms,O=E.__cache;n.bindBuffer(n.UNIFORM_BUFFER,M);for(let I=0,P=S.length;I<P;I++){const U=Array.isArray(S[I])?S[I]:[S[I]];for(let Q=0,x=U.length;Q<x;Q++){const b=U[Q];if(p(b,I,Q,O)===!0){const j=b.__offset,V=Array.isArray(b.value)?b.value:[b.value];let Z=0;for(let at=0;at<V.length;at++){const W=V[at],J=y(W);typeof W=="number"||typeof W=="boolean"?(b.__data[0]=W,n.bufferSubData(n.UNIFORM_BUFFER,j+Z,b.__data)):W.isMatrix3?(b.__data[0]=W.elements[0],b.__data[1]=W.elements[1],b.__data[2]=W.elements[2],b.__data[3]=0,b.__data[4]=W.elements[3],b.__data[5]=W.elements[4],b.__data[6]=W.elements[5],b.__data[7]=0,b.__data[8]=W.elements[6],b.__data[9]=W.elements[7],b.__data[10]=W.elements[8],b.__data[11]=0):(W.toArray(b.__data,Z),Z+=J.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,j,b.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(E,M,S,O){const I=E.value,P=M+"_"+S;if(O[P]===void 0)return typeof I=="number"||typeof I=="boolean"?O[P]=I:O[P]=I.clone(),!0;{const U=O[P];if(typeof I=="number"||typeof I=="boolean"){if(U!==I)return O[P]=I,!0}else if(U.equals(I)===!1)return U.copy(I),!0}return!1}function _(E){const M=E.uniforms;let S=0;const O=16;for(let P=0,U=M.length;P<U;P++){const Q=Array.isArray(M[P])?M[P]:[M[P]];for(let x=0,b=Q.length;x<b;x++){const j=Q[x],V=Array.isArray(j.value)?j.value:[j.value];for(let Z=0,at=V.length;Z<at;Z++){const W=V[Z],J=y(W),G=S%O,mt=G%J.boundary,yt=G+mt;S+=mt,yt!==0&&O-yt<J.storage&&(S+=O-yt),j.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),j.__offset=S,S+=J.storage}}}const I=S%O;return I>0&&(S+=O-I),E.__size=S,E.__cache={},this}function y(E){const M={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(M.boundary=4,M.storage=4):E.isVector2?(M.boundary=8,M.storage=8):E.isVector3||E.isColor?(M.boundary=16,M.storage=12):E.isVector4?(M.boundary=16,M.storage=16):E.isMatrix3?(M.boundary=48,M.storage=48):E.isMatrix4?(M.boundary=64,M.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),M}function f(E){const M=E.target;M.removeEventListener("dispose",f);const S=r.indexOf(M.__bindingPointIndex);r.splice(S,1),n.deleteBuffer(s[M.id]),delete s[M.id],delete o[M.id]}function m(){for(const E in s)n.deleteBuffer(s[E]);r=[],s={},o={}}return{bind:c,update:l,dispose:m}}class qn{constructor(t={}){const{canvas:e=uv(),context:i=null,depth:s=!0,stencil:o=!1,alpha:r=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=r;const p=new Uint32Array(4),_=new Int32Array(4);let y=null,f=null;const m=[],E=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ei,this.toneMapping=cs,this.toneMappingExposure=1;const M=this;let S=!1,O=0,I=0,P=null,U=-1,Q=null;const x=new Ae,b=new Ae;let j=null;const V=new he(0);let Z=0,at=e.width,W=e.height,J=1,G=null,mt=null;const yt=new Ae(0,0,at,W),gt=new Ae(0,0,at,W);let It=!1;const zt=new Mu;let rt=!1,ft=!1;const vt=new Fe,F=new Fe,ct=new q,it=new Ae,lt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let bt=!1;function tt(){return P===null?J:1}let g=i;function T(R,Y){return e.getContext(R,Y)}try{const R={alpha:!0,depth:s,stencil:o,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${hu}`),e.addEventListener("webglcontextlost",et,!1),e.addEventListener("webglcontextrestored",wt,!1),e.addEventListener("webglcontextcreationerror",Mt,!1),g===null){const Y="webgl2";if(g=T(Y,R),g===null)throw T(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let L,N,D,X,K,w,v,C,k,z,H,ht,ut,pt,Tt,dt,xt,Pt,Dt,Et,Ht,Ut,kt,B;function _t(){L=new RM(g),L.init(),Ut=new fS(g,L),N=new wM(g,L,t,Ut),D=new uS(g),N.reverseDepthBuffer&&D.buffers.depth.setReversed(!0),X=new IM(g),K=new jw,w=new dS(g,L,D,K,N,Ut,X),v=new bM(M),C=new AM(M),k=new Bv(g),kt=new yM(g,k),z=new PM(g,k,X,kt),H=new DM(g,z,k,X),Dt=new LM(g,N,w),dt=new SM(K),ht=new $w(M,v,C,L,N,kt,dt),ut=new MS(M,K),pt=new Zw,Tt=new iS(L),Pt=new xM(M,v,C,D,H,d,c),xt=new cS(M,H,N),B=new wS(g,X,N,D),Et=new MM(g,L,X),Ht=new CM(g,L,X),X.programs=ht.programs,M.capabilities=N,M.extensions=L,M.properties=K,M.renderLists=pt,M.shadowMap=xt,M.state=D,M.info=X}_t();const nt=new xS(M,g);this.xr=nt,this.getContext=function(){return g},this.getContextAttributes=function(){return g.getContextAttributes()},this.forceContextLoss=function(){const R=L.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=L.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return J},this.setPixelRatio=function(R){R!==void 0&&(J=R,this.setSize(at,W,!1))},this.getSize=function(R){return R.set(at,W)},this.setSize=function(R,Y,st=!0){if(nt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}at=R,W=Y,e.width=Math.floor(R*J),e.height=Math.floor(Y*J),st===!0&&(e.style.width=R+"px",e.style.height=Y+"px"),this.setViewport(0,0,R,Y)},this.getDrawingBufferSize=function(R){return R.set(at*J,W*J).floor()},this.setDrawingBufferSize=function(R,Y,st){at=R,W=Y,J=st,e.width=Math.floor(R*st),e.height=Math.floor(Y*st),this.setViewport(0,0,R,Y)},this.getCurrentViewport=function(R){return R.copy(x)},this.getViewport=function(R){return R.copy(yt)},this.setViewport=function(R,Y,st,ot){R.isVector4?yt.set(R.x,R.y,R.z,R.w):yt.set(R,Y,st,ot),D.viewport(x.copy(yt).multiplyScalar(J).round())},this.getScissor=function(R){return R.copy(gt)},this.setScissor=function(R,Y,st,ot){R.isVector4?gt.set(R.x,R.y,R.z,R.w):gt.set(R,Y,st,ot),D.scissor(b.copy(gt).multiplyScalar(J).round())},this.getScissorTest=function(){return It},this.setScissorTest=function(R){D.setScissorTest(It=R)},this.setOpaqueSort=function(R){G=R},this.setTransparentSort=function(R){mt=R},this.getClearColor=function(R){return R.copy(Pt.getClearColor())},this.setClearColor=function(){Pt.setClearColor.apply(Pt,arguments)},this.getClearAlpha=function(){return Pt.getClearAlpha()},this.setClearAlpha=function(){Pt.setClearAlpha.apply(Pt,arguments)},this.clear=function(R=!0,Y=!0,st=!0){let ot=0;if(R){let $=!1;if(P!==null){const Rt=P.texture.format;$=Rt===_u||Rt===gu||Rt===mu}if($){const Rt=P.texture.type,Nt=Rt===qi||Rt===Is||Rt===ur||Rt===Mo||Rt===fu||Rt===pu,Gt=Pt.getClearColor(),Wt=Pt.getClearAlpha(),$t=Gt.r,Zt=Gt.g,Xt=Gt.b;Nt?(p[0]=$t,p[1]=Zt,p[2]=Xt,p[3]=Wt,g.clearBufferuiv(g.COLOR,0,p)):(_[0]=$t,_[1]=Zt,_[2]=Xt,_[3]=Wt,g.clearBufferiv(g.COLOR,0,_))}else ot|=g.COLOR_BUFFER_BIT}Y&&(ot|=g.DEPTH_BUFFER_BIT,g.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),st&&(ot|=g.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),g.clear(ot)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",et,!1),e.removeEventListener("webglcontextrestored",wt,!1),e.removeEventListener("webglcontextcreationerror",Mt,!1),pt.dispose(),Tt.dispose(),K.dispose(),v.dispose(),C.dispose(),H.dispose(),kt.dispose(),B.dispose(),ht.dispose(),nt.dispose(),nt.removeEventListener("sessionstart",_e),nt.removeEventListener("sessionend",ye),me.stop()};function et(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function wt(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const R=X.autoReset,Y=xt.enabled,st=xt.autoUpdate,ot=xt.needsUpdate,$=xt.type;_t(),X.autoReset=R,xt.enabled=Y,xt.autoUpdate=st,xt.needsUpdate=ot,xt.type=$}function Mt(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function Bt(R){const Y=R.target;Y.removeEventListener("dispose",Bt),Yt(Y)}function Yt(R){Qt(R),K.remove(R)}function Qt(R){const Y=K.get(R).programs;Y!==void 0&&(Y.forEach(function(st){ht.releaseProgram(st)}),R.isShaderMaterial&&ht.releaseShaderCache(R))}this.renderBufferDirect=function(R,Y,st,ot,$,Rt){Y===null&&(Y=lt);const Nt=$.isMesh&&$.matrixWorld.determinant()<0,Gt=He(R,Y,st,ot,$);D.setMaterial(ot,Nt);let Wt=st.index,$t=1;if(ot.wireframe===!0){if(Wt=z.getWireframeAttribute(st),Wt===void 0)return;$t=2}const Zt=st.drawRange,Xt=st.attributes.position;let oe=Zt.start*$t,fe=(Zt.start+Zt.count)*$t;Rt!==null&&(oe=Math.max(oe,Rt.start*$t),fe=Math.min(fe,(Rt.start+Rt.count)*$t)),Wt!==null?(oe=Math.max(oe,0),fe=Math.min(fe,Wt.count)):Xt!=null&&(oe=Math.max(oe,0),fe=Math.min(fe,Xt.count));const Ce=fe-oe;if(Ce<0||Ce===1/0)return;kt.setup($,ot,Gt,st,Wt);let Je,pe=Et;if(Wt!==null&&(Je=k.get(Wt),pe=Ht,pe.setIndex(Je)),$.isMesh)ot.wireframe===!0?(D.setLineWidth(ot.wireframeLinewidth*tt()),pe.setMode(g.LINES)):pe.setMode(g.TRIANGLES);else if($.isLine){let jt=ot.linewidth;jt===void 0&&(jt=1),D.setLineWidth(jt*tt()),$.isLineSegments?pe.setMode(g.LINES):$.isLineLoop?pe.setMode(g.LINE_LOOP):pe.setMode(g.LINE_STRIP)}else $.isPoints?pe.setMode(g.POINTS):$.isSprite&&pe.setMode(g.TRIANGLES);if($.isBatchedMesh)if($._multiDrawInstances!==null)pe.renderMultiDrawInstances($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount,$._multiDrawInstances);else if(L.get("WEBGL_multi_draw"))pe.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else{const jt=$._multiDrawStarts,Ye=$._multiDrawCounts,Ct=$._multiDrawCount,De=Wt?k.get(Wt).bytesPerElement:1,Oe=K.get(ot).currentProgram.getUniforms();for(let xe=0;xe<Ct;xe++)Oe.setValue(g,"_gl_DrawID",xe),pe.render(jt[xe]/De,Ye[xe])}else if($.isInstancedMesh)pe.renderInstances(oe,Ce,$.count);else if(st.isInstancedBufferGeometry){const jt=st._maxInstanceCount!==void 0?st._maxInstanceCount:1/0,Ye=Math.min(st.instanceCount,jt);pe.renderInstances(oe,Ce,Ye)}else pe.render(oe,Ce)};function Jt(R,Y,st){R.transparent===!0&&R.side===de&&R.forceSinglePass===!1?(R.side=Tn,R.needsUpdate=!0,ie(R,Y,st),R.side=us,R.needsUpdate=!0,ie(R,Y,st),R.side=de):ie(R,Y,st)}this.compile=function(R,Y,st=null){st===null&&(st=R),f=Tt.get(st),f.init(Y),E.push(f),st.traverseVisible(function($){$.isLight&&$.layers.test(Y.layers)&&(f.pushLight($),$.castShadow&&f.pushShadow($))}),R!==st&&R.traverseVisible(function($){$.isLight&&$.layers.test(Y.layers)&&(f.pushLight($),$.castShadow&&f.pushShadow($))}),f.setupLights();const ot=new Set;return R.traverse(function($){if(!($.isMesh||$.isPoints||$.isLine||$.isSprite))return;const Rt=$.material;if(Rt)if(Array.isArray(Rt))for(let Nt=0;Nt<Rt.length;Nt++){const Gt=Rt[Nt];Jt(Gt,st,$),ot.add(Gt)}else Jt(Rt,st,$),ot.add(Rt)}),E.pop(),f=null,ot},this.compileAsync=function(R,Y,st=null){const ot=this.compile(R,Y,st);return new Promise($=>{function Rt(){if(ot.forEach(function(Nt){K.get(Nt).currentProgram.isReady()&&ot.delete(Nt)}),ot.size===0){$(R);return}setTimeout(Rt,10)}L.get("KHR_parallel_shader_compile")!==null?Rt():setTimeout(Rt,10)})};let ne=null;function ue(R){ne&&ne(R)}function _e(){me.stop()}function ye(){me.start()}const me=new fp;me.setAnimationLoop(ue),typeof self<"u"&&me.setContext(self),this.setAnimationLoop=function(R){ne=R,nt.setAnimationLoop(R),R===null?me.stop():me.start()},nt.addEventListener("sessionstart",_e),nt.addEventListener("sessionend",ye),this.render=function(R,Y){if(Y!==void 0&&Y.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),nt.enabled===!0&&nt.isPresenting===!0&&(nt.cameraAutoUpdate===!0&&nt.updateCamera(Y),Y=nt.getCamera()),R.isScene===!0&&R.onBeforeRender(M,R,Y,P),f=Tt.get(R,E.length),f.init(Y),E.push(f),F.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),zt.setFromProjectionMatrix(F),ft=this.localClippingEnabled,rt=dt.init(this.clippingPlanes,ft),y=pt.get(R,m.length),y.init(),m.push(y),nt.enabled===!0&&nt.isPresenting===!0){const Rt=M.xr.getDepthSensingMesh();Rt!==null&&Te(Rt,Y,-1/0,M.sortObjects)}Te(R,Y,0,M.sortObjects),y.finish(),M.sortObjects===!0&&y.sort(G,mt),bt=nt.enabled===!1||nt.isPresenting===!1||nt.hasDepthSensing()===!1,bt&&Pt.addToRenderList(y,R),this.info.render.frame++,rt===!0&&dt.beginShadows();const st=f.state.shadowsArray;xt.render(st,R,Y),rt===!0&&dt.endShadows(),this.info.autoReset===!0&&this.info.reset();const ot=y.opaque,$=y.transmissive;if(f.setupLights(),Y.isArrayCamera){const Rt=Y.cameras;if($.length>0)for(let Nt=0,Gt=Rt.length;Nt<Gt;Nt++){const Wt=Rt[Nt];Ve(ot,$,R,Wt)}bt&&Pt.render(R);for(let Nt=0,Gt=Rt.length;Nt<Gt;Nt++){const Wt=Rt[Nt];ve(y,R,Wt,Wt.viewport)}}else $.length>0&&Ve(ot,$,R,Y),bt&&Pt.render(R),ve(y,R,Y);P!==null&&(w.updateMultisampleRenderTarget(P),w.updateRenderTargetMipmap(P)),R.isScene===!0&&R.onAfterRender(M,R,Y),kt.resetDefaultState(),U=-1,Q=null,E.pop(),E.length>0?(f=E[E.length-1],rt===!0&&dt.setGlobalState(M.clippingPlanes,f.state.camera)):f=null,m.pop(),m.length>0?y=m[m.length-1]:y=null};function Te(R,Y,st,ot){if(R.visible===!1)return;if(R.layers.test(Y.layers)){if(R.isGroup)st=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(Y);else if(R.isLight)f.pushLight(R),R.castShadow&&f.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||zt.intersectsSprite(R)){ot&&it.setFromMatrixPosition(R.matrixWorld).applyMatrix4(F);const Nt=H.update(R),Gt=R.material;Gt.visible&&y.push(R,Nt,Gt,st,it.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||zt.intersectsObject(R))){const Nt=H.update(R),Gt=R.material;if(ot&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),it.copy(R.boundingSphere.center)):(Nt.boundingSphere===null&&Nt.computeBoundingSphere(),it.copy(Nt.boundingSphere.center)),it.applyMatrix4(R.matrixWorld).applyMatrix4(F)),Array.isArray(Gt)){const Wt=Nt.groups;for(let $t=0,Zt=Wt.length;$t<Zt;$t++){const Xt=Wt[$t],oe=Gt[Xt.materialIndex];oe&&oe.visible&&y.push(R,Nt,oe,st,it.z,Xt)}}else Gt.visible&&y.push(R,Nt,Gt,st,it.z,null)}}const Rt=R.children;for(let Nt=0,Gt=Rt.length;Nt<Gt;Nt++)Te(Rt[Nt],Y,st,ot)}function ve(R,Y,st,ot){const $=R.opaque,Rt=R.transmissive,Nt=R.transparent;f.setupLightsView(st),rt===!0&&dt.setGlobalState(M.clippingPlanes,st),ot&&D.viewport(x.copy(ot)),$.length>0&&Re($,Y,st),Rt.length>0&&Re(Rt,Y,st),Nt.length>0&&Re(Nt,Y,st),D.buffers.depth.setTest(!0),D.buffers.depth.setMask(!0),D.buffers.color.setMask(!0),D.setPolygonOffset(!1)}function Ve(R,Y,st,ot){if((st.isScene===!0?st.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[ot.id]===void 0&&(f.state.transmissionRenderTarget[ot.id]=new Ls(1,1,{generateMipmaps:!0,type:L.has("EXT_color_buffer_half_float")||L.has("EXT_color_buffer_float")?vr:qi,minFilter:Rs,samples:4,stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Se.workingColorSpace}));const Rt=f.state.transmissionRenderTarget[ot.id],Nt=ot.viewport||x;Rt.setSize(Nt.z,Nt.w);const Gt=M.getRenderTarget();M.setRenderTarget(Rt),M.getClearColor(V),Z=M.getClearAlpha(),Z<1&&M.setClearColor(16777215,.5),M.clear(),bt&&Pt.render(st);const Wt=M.toneMapping;M.toneMapping=cs;const $t=ot.viewport;if(ot.viewport!==void 0&&(ot.viewport=void 0),f.setupLightsView(ot),rt===!0&&dt.setGlobalState(M.clippingPlanes,ot),Re(R,st,ot),w.updateMultisampleRenderTarget(Rt),w.updateRenderTargetMipmap(Rt),L.has("WEBGL_multisampled_render_to_texture")===!1){let Zt=!1;for(let Xt=0,oe=Y.length;Xt<oe;Xt++){const fe=Y[Xt],Ce=fe.object,Je=fe.geometry,pe=fe.material,jt=fe.group;if(pe.side===de&&Ce.layers.test(ot.layers)){const Ye=pe.side;pe.side=Tn,pe.needsUpdate=!0,At(Ce,st,ot,Je,pe,jt),pe.side=Ye,pe.needsUpdate=!0,Zt=!0}}Zt===!0&&(w.updateMultisampleRenderTarget(Rt),w.updateRenderTargetMipmap(Rt))}M.setRenderTarget(Gt),M.setClearColor(V,Z),$t!==void 0&&(ot.viewport=$t),M.toneMapping=Wt}function Re(R,Y,st){const ot=Y.isScene===!0?Y.overrideMaterial:null;for(let $=0,Rt=R.length;$<Rt;$++){const Nt=R[$],Gt=Nt.object,Wt=Nt.geometry,$t=ot===null?Nt.material:ot,Zt=Nt.group;Gt.layers.test(st.layers)&&At(Gt,Y,st,Wt,$t,Zt)}}function At(R,Y,st,ot,$,Rt){R.onBeforeRender(M,Y,st,ot,$,Rt),R.modelViewMatrix.multiplyMatrices(st.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),$.onBeforeRender(M,Y,st,ot,R,Rt),$.transparent===!0&&$.side===de&&$.forceSinglePass===!1?($.side=Tn,$.needsUpdate=!0,M.renderBufferDirect(st,Y,ot,$,R,Rt),$.side=us,$.needsUpdate=!0,M.renderBufferDirect(st,Y,ot,$,R,Rt),$.side=de):M.renderBufferDirect(st,Y,ot,$,R,Rt),R.onAfterRender(M,Y,st,ot,$,Rt)}function ie(R,Y,st){Y.isScene!==!0&&(Y=lt);const ot=K.get(R),$=f.state.lights,Rt=f.state.shadowsArray,Nt=$.state.version,Gt=ht.getParameters(R,$.state,Rt,Y,st),Wt=ht.getProgramCacheKey(Gt);let $t=ot.programs;ot.environment=R.isMeshStandardMaterial?Y.environment:null,ot.fog=Y.fog,ot.envMap=(R.isMeshStandardMaterial?C:v).get(R.envMap||ot.environment),ot.envMapRotation=ot.environment!==null&&R.envMap===null?Y.environmentRotation:R.envMapRotation,$t===void 0&&(R.addEventListener("dispose",Bt),$t=new Map,ot.programs=$t);let Zt=$t.get(Wt);if(Zt!==void 0){if(ot.currentProgram===Zt&&ot.lightsStateVersion===Nt)return Le(R,Gt),Zt}else Gt.uniforms=ht.getUniforms(R),R.onBeforeCompile(Gt,M),Zt=ht.acquireProgram(Gt,Wt),$t.set(Wt,Zt),ot.uniforms=Gt.uniforms;const Xt=ot.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Xt.clippingPlanes=dt.uniform),Le(R,Gt),ot.needsLights=on(R),ot.lightsStateVersion=Nt,ot.needsLights&&(Xt.ambientLightColor.value=$.state.ambient,Xt.lightProbe.value=$.state.probe,Xt.directionalLights.value=$.state.directional,Xt.directionalLightShadows.value=$.state.directionalShadow,Xt.spotLights.value=$.state.spot,Xt.spotLightShadows.value=$.state.spotShadow,Xt.rectAreaLights.value=$.state.rectArea,Xt.ltc_1.value=$.state.rectAreaLTC1,Xt.ltc_2.value=$.state.rectAreaLTC2,Xt.pointLights.value=$.state.point,Xt.pointLightShadows.value=$.state.pointShadow,Xt.hemisphereLights.value=$.state.hemi,Xt.directionalShadowMap.value=$.state.directionalShadowMap,Xt.directionalShadowMatrix.value=$.state.directionalShadowMatrix,Xt.spotShadowMap.value=$.state.spotShadowMap,Xt.spotLightMatrix.value=$.state.spotLightMatrix,Xt.spotLightMap.value=$.state.spotLightMap,Xt.pointShadowMap.value=$.state.pointShadowMap,Xt.pointShadowMatrix.value=$.state.pointShadowMatrix),ot.currentProgram=Zt,ot.uniformsList=null,Zt}function Pe(R){if(R.uniformsList===null){const Y=R.currentProgram.getUniforms();R.uniformsList=ha.seqWithValue(Y.seq,R.uniforms)}return R.uniformsList}function Le(R,Y){const st=K.get(R);st.outputColorSpace=Y.outputColorSpace,st.batching=Y.batching,st.batchingColor=Y.batchingColor,st.instancing=Y.instancing,st.instancingColor=Y.instancingColor,st.instancingMorph=Y.instancingMorph,st.skinning=Y.skinning,st.morphTargets=Y.morphTargets,st.morphNormals=Y.morphNormals,st.morphColors=Y.morphColors,st.morphTargetsCount=Y.morphTargetsCount,st.numClippingPlanes=Y.numClippingPlanes,st.numIntersection=Y.numClipIntersection,st.vertexAlphas=Y.vertexAlphas,st.vertexTangents=Y.vertexTangents,st.toneMapping=Y.toneMapping}function He(R,Y,st,ot,$){Y.isScene!==!0&&(Y=lt),w.resetTextureUnits();const Rt=Y.fog,Nt=ot.isMeshStandardMaterial?Y.environment:null,Gt=P===null?M.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:fs,Wt=(ot.isMeshStandardMaterial?C:v).get(ot.envMap||Nt),$t=ot.vertexColors===!0&&!!st.attributes.color&&st.attributes.color.itemSize===4,Zt=!!st.attributes.tangent&&(!!ot.normalMap||ot.anisotropy>0),Xt=!!st.morphAttributes.position,oe=!!st.morphAttributes.normal,fe=!!st.morphAttributes.color;let Ce=cs;ot.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(Ce=M.toneMapping);const Je=st.morphAttributes.position||st.morphAttributes.normal||st.morphAttributes.color,pe=Je!==void 0?Je.length:0,jt=K.get(ot),Ye=f.state.lights;if(rt===!0&&(ft===!0||R!==Q)){const We=R===Q&&ot.id===U;dt.setState(ot,R,We)}let Ct=!1;ot.version===jt.__version?(jt.needsLights&&jt.lightsStateVersion!==Ye.state.version||jt.outputColorSpace!==Gt||$.isBatchedMesh&&jt.batching===!1||!$.isBatchedMesh&&jt.batching===!0||$.isBatchedMesh&&jt.batchingColor===!0&&$.colorTexture===null||$.isBatchedMesh&&jt.batchingColor===!1&&$.colorTexture!==null||$.isInstancedMesh&&jt.instancing===!1||!$.isInstancedMesh&&jt.instancing===!0||$.isSkinnedMesh&&jt.skinning===!1||!$.isSkinnedMesh&&jt.skinning===!0||$.isInstancedMesh&&jt.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&jt.instancingColor===!1&&$.instanceColor!==null||$.isInstancedMesh&&jt.instancingMorph===!0&&$.morphTexture===null||$.isInstancedMesh&&jt.instancingMorph===!1&&$.morphTexture!==null||jt.envMap!==Wt||ot.fog===!0&&jt.fog!==Rt||jt.numClippingPlanes!==void 0&&(jt.numClippingPlanes!==dt.numPlanes||jt.numIntersection!==dt.numIntersection)||jt.vertexAlphas!==$t||jt.vertexTangents!==Zt||jt.morphTargets!==Xt||jt.morphNormals!==oe||jt.morphColors!==fe||jt.toneMapping!==Ce||jt.morphTargetsCount!==pe)&&(Ct=!0):(Ct=!0,jt.__version=ot.version);let De=jt.currentProgram;Ct===!0&&(De=ie(ot,Y,$));let Oe=!1,xe=!1,rn=!1;const Me=De.getUniforms(),Ke=jt.uniforms;if(D.useProgram(De.program)&&(Oe=!0,xe=!0,rn=!0),ot.id!==U&&(U=ot.id,xe=!0),Oe||Q!==R){N.reverseDepthBuffer?(vt.copy(R.projectionMatrix),dv(vt),fv(vt),Me.setValue(g,"projectionMatrix",vt)):Me.setValue(g,"projectionMatrix",R.projectionMatrix),Me.setValue(g,"viewMatrix",R.matrixWorldInverse);const We=Me.map.cameraPosition;We!==void 0&&We.setValue(g,ct.setFromMatrixPosition(R.matrixWorld)),N.logarithmicDepthBuffer&&Me.setValue(g,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(ot.isMeshPhongMaterial||ot.isMeshToonMaterial||ot.isMeshLambertMaterial||ot.isMeshBasicMaterial||ot.isMeshStandardMaterial||ot.isShaderMaterial)&&Me.setValue(g,"isOrthographic",R.isOrthographicCamera===!0),Q!==R&&(Q=R,xe=!0,rn=!0)}if($.isSkinnedMesh){Me.setOptional(g,$,"bindMatrix"),Me.setOptional(g,$,"bindMatrixInverse");const We=$.skeleton;We&&(We.boneTexture===null&&We.computeBoneTexture(),Me.setValue(g,"boneTexture",We.boneTexture,w))}$.isBatchedMesh&&(Me.setOptional(g,$,"batchingTexture"),Me.setValue(g,"batchingTexture",$._matricesTexture,w),Me.setOptional(g,$,"batchingIdTexture"),Me.setValue(g,"batchingIdTexture",$._indirectTexture,w),Me.setOptional(g,$,"batchingColorTexture"),$._colorsTexture!==null&&Me.setValue(g,"batchingColorTexture",$._colorsTexture,w));const In=st.morphAttributes;if((In.position!==void 0||In.normal!==void 0||In.color!==void 0)&&Dt.update($,st,De),(xe||jt.receiveShadow!==$.receiveShadow)&&(jt.receiveShadow=$.receiveShadow,Me.setValue(g,"receiveShadow",$.receiveShadow)),ot.isMeshGouraudMaterial&&ot.envMap!==null&&(Ke.envMap.value=Wt,Ke.flipEnvMap.value=Wt.isCubeTexture&&Wt.isRenderTargetTexture===!1?-1:1),ot.isMeshStandardMaterial&&ot.envMap===null&&Y.environment!==null&&(Ke.envMapIntensity.value=Y.environmentIntensity),xe&&(Me.setValue(g,"toneMappingExposure",M.toneMappingExposure),jt.needsLights&&ln(Ke,rn),Rt&&ot.fog===!0&&ut.refreshFogUniforms(Ke,Rt),ut.refreshMaterialUniforms(Ke,ot,J,W,f.state.transmissionRenderTarget[R.id]),ha.upload(g,Pe(jt),Ke,w)),ot.isShaderMaterial&&ot.uniformsNeedUpdate===!0&&(ha.upload(g,Pe(jt),Ke,w),ot.uniformsNeedUpdate=!1),ot.isSpriteMaterial&&Me.setValue(g,"center",$.center),Me.setValue(g,"modelViewMatrix",$.modelViewMatrix),Me.setValue(g,"normalMatrix",$.normalMatrix),Me.setValue(g,"modelMatrix",$.matrixWorld),ot.isShaderMaterial||ot.isRawShaderMaterial){const We=ot.uniformsGroups;for(let Sn=0,fi=We.length;Sn<fi;Sn++){const Hn=We[Sn];B.update(Hn,De),B.bind(Hn,De)}}return De}function ln(R,Y){R.ambientLightColor.needsUpdate=Y,R.lightProbe.needsUpdate=Y,R.directionalLights.needsUpdate=Y,R.directionalLightShadows.needsUpdate=Y,R.pointLights.needsUpdate=Y,R.pointLightShadows.needsUpdate=Y,R.spotLights.needsUpdate=Y,R.spotLightShadows.needsUpdate=Y,R.rectAreaLights.needsUpdate=Y,R.hemisphereLights.needsUpdate=Y}function on(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return O},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(R,Y,st){K.get(R.texture).__webglTexture=Y,K.get(R.depthTexture).__webglTexture=st;const ot=K.get(R);ot.__hasExternalTextures=!0,ot.__autoAllocateDepthBuffer=st===void 0,ot.__autoAllocateDepthBuffer||L.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ot.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(R,Y){const st=K.get(R);st.__webglFramebuffer=Y,st.__useDefaultFramebuffer=Y===void 0},this.setRenderTarget=function(R,Y=0,st=0){P=R,O=Y,I=st;let ot=!0,$=null,Rt=!1,Nt=!1;if(R){const Wt=K.get(R);if(Wt.__useDefaultFramebuffer!==void 0)D.bindFramebuffer(g.FRAMEBUFFER,null),ot=!1;else if(Wt.__webglFramebuffer===void 0)w.setupRenderTarget(R);else if(Wt.__hasExternalTextures)w.rebindTextures(R,K.get(R.texture).__webglTexture,K.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const Xt=R.depthTexture;if(Wt.__boundDepthTexture!==Xt){if(Xt!==null&&K.has(Xt)&&(R.width!==Xt.image.width||R.height!==Xt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");w.setupDepthRenderbuffer(R)}}const $t=R.texture;($t.isData3DTexture||$t.isDataArrayTexture||$t.isCompressedArrayTexture)&&(Nt=!0);const Zt=K.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Zt[Y])?$=Zt[Y][st]:$=Zt[Y],Rt=!0):R.samples>0&&w.useMultisampledRTT(R)===!1?$=K.get(R).__webglMultisampledFramebuffer:Array.isArray(Zt)?$=Zt[st]:$=Zt,x.copy(R.viewport),b.copy(R.scissor),j=R.scissorTest}else x.copy(yt).multiplyScalar(J).floor(),b.copy(gt).multiplyScalar(J).floor(),j=It;if(D.bindFramebuffer(g.FRAMEBUFFER,$)&&ot&&D.drawBuffers(R,$),D.viewport(x),D.scissor(b),D.setScissorTest(j),Rt){const Wt=K.get(R.texture);g.framebufferTexture2D(g.FRAMEBUFFER,g.COLOR_ATTACHMENT0,g.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Wt.__webglTexture,st)}else if(Nt){const Wt=K.get(R.texture),$t=Y||0;g.framebufferTextureLayer(g.FRAMEBUFFER,g.COLOR_ATTACHMENT0,Wt.__webglTexture,st||0,$t)}U=-1},this.readRenderTargetPixels=function(R,Y,st,ot,$,Rt,Nt){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Gt=K.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Nt!==void 0&&(Gt=Gt[Nt]),Gt){D.bindFramebuffer(g.FRAMEBUFFER,Gt);try{const Wt=R.texture,$t=Wt.format,Zt=Wt.type;if(!N.textureFormatReadable($t)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!N.textureTypeReadable(Zt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=R.width-ot&&st>=0&&st<=R.height-$&&g.readPixels(Y,st,ot,$,Ut.convert($t),Ut.convert(Zt),Rt)}finally{const Wt=P!==null?K.get(P).__webglFramebuffer:null;D.bindFramebuffer(g.FRAMEBUFFER,Wt)}}},this.readRenderTargetPixelsAsync=async function(R,Y,st,ot,$,Rt,Nt){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Gt=K.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Nt!==void 0&&(Gt=Gt[Nt]),Gt){const Wt=R.texture,$t=Wt.format,Zt=Wt.type;if(!N.textureFormatReadable($t))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!N.textureTypeReadable(Zt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(Y>=0&&Y<=R.width-ot&&st>=0&&st<=R.height-$){D.bindFramebuffer(g.FRAMEBUFFER,Gt);const Xt=g.createBuffer();g.bindBuffer(g.PIXEL_PACK_BUFFER,Xt),g.bufferData(g.PIXEL_PACK_BUFFER,Rt.byteLength,g.STREAM_READ),g.readPixels(Y,st,ot,$,Ut.convert($t),Ut.convert(Zt),0);const oe=P!==null?K.get(P).__webglFramebuffer:null;D.bindFramebuffer(g.FRAMEBUFFER,oe);const fe=g.fenceSync(g.SYNC_GPU_COMMANDS_COMPLETE,0);return g.flush(),await hv(g,fe,4),g.bindBuffer(g.PIXEL_PACK_BUFFER,Xt),g.getBufferSubData(g.PIXEL_PACK_BUFFER,0,Rt),g.deleteBuffer(Xt),g.deleteSync(fe),Rt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(R,Y=null,st=0){R.isTexture!==!0&&(ua("WebGLRenderer: copyFramebufferToTexture function signature has changed."),Y=arguments[0]||null,R=arguments[1]);const ot=Math.pow(2,-st),$=Math.floor(R.image.width*ot),Rt=Math.floor(R.image.height*ot),Nt=Y!==null?Y.x:0,Gt=Y!==null?Y.y:0;w.setTexture2D(R,0),g.copyTexSubImage2D(g.TEXTURE_2D,st,0,0,Nt,Gt,$,Rt),D.unbindTexture()},this.copyTextureToTexture=function(R,Y,st=null,ot=null,$=0){R.isTexture!==!0&&(ua("WebGLRenderer: copyTextureToTexture function signature has changed."),ot=arguments[0]||null,R=arguments[1],Y=arguments[2],$=arguments[3]||0,st=null);let Rt,Nt,Gt,Wt,$t,Zt;st!==null?(Rt=st.max.x-st.min.x,Nt=st.max.y-st.min.y,Gt=st.min.x,Wt=st.min.y):(Rt=R.image.width,Nt=R.image.height,Gt=0,Wt=0),ot!==null?($t=ot.x,Zt=ot.y):($t=0,Zt=0);const Xt=Ut.convert(Y.format),oe=Ut.convert(Y.type);w.setTexture2D(Y,0),g.pixelStorei(g.UNPACK_FLIP_Y_WEBGL,Y.flipY),g.pixelStorei(g.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),g.pixelStorei(g.UNPACK_ALIGNMENT,Y.unpackAlignment);const fe=g.getParameter(g.UNPACK_ROW_LENGTH),Ce=g.getParameter(g.UNPACK_IMAGE_HEIGHT),Je=g.getParameter(g.UNPACK_SKIP_PIXELS),pe=g.getParameter(g.UNPACK_SKIP_ROWS),jt=g.getParameter(g.UNPACK_SKIP_IMAGES),Ye=R.isCompressedTexture?R.mipmaps[$]:R.image;g.pixelStorei(g.UNPACK_ROW_LENGTH,Ye.width),g.pixelStorei(g.UNPACK_IMAGE_HEIGHT,Ye.height),g.pixelStorei(g.UNPACK_SKIP_PIXELS,Gt),g.pixelStorei(g.UNPACK_SKIP_ROWS,Wt),R.isDataTexture?g.texSubImage2D(g.TEXTURE_2D,$,$t,Zt,Rt,Nt,Xt,oe,Ye.data):R.isCompressedTexture?g.compressedTexSubImage2D(g.TEXTURE_2D,$,$t,Zt,Ye.width,Ye.height,Xt,Ye.data):g.texSubImage2D(g.TEXTURE_2D,$,$t,Zt,Rt,Nt,Xt,oe,Ye),g.pixelStorei(g.UNPACK_ROW_LENGTH,fe),g.pixelStorei(g.UNPACK_IMAGE_HEIGHT,Ce),g.pixelStorei(g.UNPACK_SKIP_PIXELS,Je),g.pixelStorei(g.UNPACK_SKIP_ROWS,pe),g.pixelStorei(g.UNPACK_SKIP_IMAGES,jt),$===0&&Y.generateMipmaps&&g.generateMipmap(g.TEXTURE_2D),D.unbindTexture()},this.copyTextureToTexture3D=function(R,Y,st=null,ot=null,$=0){R.isTexture!==!0&&(ua("WebGLRenderer: copyTextureToTexture3D function signature has changed."),st=arguments[0]||null,ot=arguments[1]||null,R=arguments[2],Y=arguments[3],$=arguments[4]||0);let Rt,Nt,Gt,Wt,$t,Zt,Xt,oe,fe;const Ce=R.isCompressedTexture?R.mipmaps[$]:R.image;st!==null?(Rt=st.max.x-st.min.x,Nt=st.max.y-st.min.y,Gt=st.max.z-st.min.z,Wt=st.min.x,$t=st.min.y,Zt=st.min.z):(Rt=Ce.width,Nt=Ce.height,Gt=Ce.depth,Wt=0,$t=0,Zt=0),ot!==null?(Xt=ot.x,oe=ot.y,fe=ot.z):(Xt=0,oe=0,fe=0);const Je=Ut.convert(Y.format),pe=Ut.convert(Y.type);let jt;if(Y.isData3DTexture)w.setTexture3D(Y,0),jt=g.TEXTURE_3D;else if(Y.isDataArrayTexture||Y.isCompressedArrayTexture)w.setTexture2DArray(Y,0),jt=g.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}g.pixelStorei(g.UNPACK_FLIP_Y_WEBGL,Y.flipY),g.pixelStorei(g.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),g.pixelStorei(g.UNPACK_ALIGNMENT,Y.unpackAlignment);const Ye=g.getParameter(g.UNPACK_ROW_LENGTH),Ct=g.getParameter(g.UNPACK_IMAGE_HEIGHT),De=g.getParameter(g.UNPACK_SKIP_PIXELS),Oe=g.getParameter(g.UNPACK_SKIP_ROWS),xe=g.getParameter(g.UNPACK_SKIP_IMAGES);g.pixelStorei(g.UNPACK_ROW_LENGTH,Ce.width),g.pixelStorei(g.UNPACK_IMAGE_HEIGHT,Ce.height),g.pixelStorei(g.UNPACK_SKIP_PIXELS,Wt),g.pixelStorei(g.UNPACK_SKIP_ROWS,$t),g.pixelStorei(g.UNPACK_SKIP_IMAGES,Zt),R.isDataTexture||R.isData3DTexture?g.texSubImage3D(jt,$,Xt,oe,fe,Rt,Nt,Gt,Je,pe,Ce.data):Y.isCompressedArrayTexture?g.compressedTexSubImage3D(jt,$,Xt,oe,fe,Rt,Nt,Gt,Je,Ce.data):g.texSubImage3D(jt,$,Xt,oe,fe,Rt,Nt,Gt,Je,pe,Ce),g.pixelStorei(g.UNPACK_ROW_LENGTH,Ye),g.pixelStorei(g.UNPACK_IMAGE_HEIGHT,Ct),g.pixelStorei(g.UNPACK_SKIP_PIXELS,De),g.pixelStorei(g.UNPACK_SKIP_ROWS,Oe),g.pixelStorei(g.UNPACK_SKIP_IMAGES,xe),$===0&&Y.generateMipmaps&&g.generateMipmap(jt),D.unbindTexture()},this.initRenderTarget=function(R){K.get(R).__webglFramebuffer===void 0&&w.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?w.setTextureCube(R,0):R.isData3DTexture?w.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?w.setTexture2DArray(R,0):w.setTexture2D(R,0),D.unbindTexture()},this.resetState=function(){O=0,I=0,P=null,D.reset(),kt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Vi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===vu?"display-p3":"srgb",e.unpackColorSpace=Se.workingColorSpace===Oa?"display-p3":"srgb"}}class Yn extends an{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new bi,this.environmentIntensity=1,this.environmentRotation=new bi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class yp extends To{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new he(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const _d=new Fe,Fl=new rp,$r=new Ba,jr=new q;class SS extends an{constructor(t=new Cn,e=new yp){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const i=this.geometry,s=this.matrixWorld,o=t.params.Points.threshold,r=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),$r.copy(i.boundingSphere),$r.applyMatrix4(s),$r.radius+=o,t.ray.intersectsSphere($r)===!1)return;_d.copy(s).invert(),Fl.copy(t.ray).applyMatrix4(_d);const a=o/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=i.index,u=i.attributes.position;if(l!==null){const d=Math.max(0,r.start),p=Math.min(l.count,r.start+r.count);for(let _=d,y=p;_<y;_++){const f=l.getX(_);jr.fromBufferAttribute(u,f),vd(jr,f,c,s,t,e,this)}}else{const d=Math.max(0,r.start),p=Math.min(u.count,r.start+r.count);for(let _=d,y=p;_<y;_++)jr.fromBufferAttribute(u,_),vd(jr,_,c,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=s.length;o<r;o++){const a=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}}function vd(n,t,e,i,s,o,r){const a=Fl.distanceSqToPoint(n);if(a<e){const c=new q;Fl.closestPointToPoint(n,c),c.applyMatrix4(i);const l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;o.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:r})}}class Ei{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let i,s=this.getPoint(0),o=0;e.push(0);for(let r=1;r<=t;r++)i=this.getPoint(r/t),o+=i.distanceTo(s),e.push(o),s=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const i=this.getLengths();let s=0;const o=i.length;let r;e?r=e:r=t*i[o-1];let a=0,c=o-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=i[s]-r,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,i[s]===r)return s/(o-1);const h=i[s],d=i[s+1]-h,p=(r-h)/d;return(s+p)/(o-1)}getTangent(t,e){let s=t-1e-4,o=t+1e-4;s<0&&(s=0),o>1&&(o=1);const r=this.getPoint(s),a=this.getPoint(o),c=e||(r.isVector2?new Ot:new q);return c.copy(a).sub(r).normalize(),c}getTangentAt(t,e){const i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e){const i=new q,s=[],o=[],r=[],a=new q,c=new Fe;for(let p=0;p<=t;p++){const _=p/t;s[p]=this.getTangentAt(_,new q)}o[0]=new q,r[0]=new q;let l=Number.MAX_VALUE;const h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=l&&(l=h,i.set(1,0,0)),u<=l&&(l=u,i.set(0,1,0)),d<=l&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),o[0].crossVectors(s[0],a),r[0].crossVectors(s[0],o[0]);for(let p=1;p<=t;p++){if(o[p]=o[p-1].clone(),r[p]=r[p-1].clone(),a.crossVectors(s[p-1],s[p]),a.length()>Number.EPSILON){a.normalize();const _=Math.acos(nn(s[p-1].dot(s[p]),-1,1));o[p].applyMatrix4(c.makeRotationAxis(a,_))}r[p].crossVectors(s[p],o[p])}if(e===!0){let p=Math.acos(nn(o[0].dot(o[t]),-1,1));p/=t,s[0].dot(a.crossVectors(o[0],o[t]))>0&&(p=-p);for(let _=1;_<=t;_++)o[_].applyMatrix4(c.makeRotationAxis(s[_],p*_)),r[_].crossVectors(s[_],o[_])}return{tangents:s,normals:o,binormals:r}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Su extends Ei{constructor(t=0,e=0,i=1,s=1,o=0,r=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=s,this.aStartAngle=o,this.aEndAngle=r,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new Ot){const i=e,s=Math.PI*2;let o=this.aEndAngle-this.aStartAngle;const r=Math.abs(o)<Number.EPSILON;for(;o<0;)o+=s;for(;o>s;)o-=s;o<Number.EPSILON&&(r?o=0:o=s),this.aClockwise===!0&&!r&&(o===s?o=-s:o=o-s);const a=this.aStartAngle+t*o;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=c-this.aX,p=l-this.aY;c=d*h-p*u+this.aX,l=d*u+p*h+this.aY}return i.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class bS extends Su{constructor(t,e,i,s,o,r){super(t,e,i,i,s,o,r),this.isArcCurve=!0,this.type="ArcCurve"}}function bu(){let n=0,t=0,e=0,i=0;function s(o,r,a,c){n=o,t=a,e=-3*o+3*r-2*a-c,i=2*o-2*r+a+c}return{initCatmullRom:function(o,r,a,c,l){s(r,a,l*(a-o),l*(c-r))},initNonuniformCatmullRom:function(o,r,a,c,l,h,u){let d=(r-o)/l-(a-o)/(l+h)+(a-r)/h,p=(a-r)/h-(c-r)/(h+u)+(c-a)/u;d*=h,p*=h,s(r,a,d,p)},calc:function(o){const r=o*o,a=r*o;return n+t*o+e*r+i*a}}}const Kr=new q,Dc=new bu,Uc=new bu,Nc=new bu;class ES extends Ei{constructor(t=[],e=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=s}getPoint(t,e=new q){const i=e,s=this.points,o=s.length,r=(o-(this.closed?0:1))*t;let a=Math.floor(r),c=r-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/o)+1)*o:c===0&&a===o-1&&(a=o-2,c=1);let l,h;this.closed||a>0?l=s[(a-1)%o]:(Kr.subVectors(s[0],s[1]).add(s[0]),l=Kr);const u=s[a%o],d=s[(a+1)%o];if(this.closed||a+2<o?h=s[(a+2)%o]:(Kr.subVectors(s[o-1],s[o-2]).add(s[o-1]),h=Kr),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let _=Math.pow(l.distanceToSquared(u),p),y=Math.pow(u.distanceToSquared(d),p),f=Math.pow(d.distanceToSquared(h),p);y<1e-4&&(y=1),_<1e-4&&(_=y),f<1e-4&&(f=y),Dc.initNonuniformCatmullRom(l.x,u.x,d.x,h.x,_,y,f),Uc.initNonuniformCatmullRom(l.y,u.y,d.y,h.y,_,y,f),Nc.initNonuniformCatmullRom(l.z,u.z,d.z,h.z,_,y,f)}else this.curveType==="catmullrom"&&(Dc.initCatmullRom(l.x,u.x,d.x,h.x,this.tension),Uc.initCatmullRom(l.y,u.y,d.y,h.y,this.tension),Nc.initCatmullRom(l.z,u.z,d.z,h.z,this.tension));return i.set(Dc.calc(c),Uc.calc(c),Nc.calc(c)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(new q().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function xd(n,t,e,i,s){const o=(i-t)*.5,r=(s-e)*.5,a=n*n,c=n*a;return(2*e-2*i+o+r)*c+(-3*e+3*i-2*o-r)*a+o*n+e}function TS(n,t){const e=1-n;return e*e*t}function AS(n,t){return 2*(1-n)*n*t}function RS(n,t){return n*n*t}function Qo(n,t,e,i){return TS(n,t)+AS(n,e)+RS(n,i)}function PS(n,t){const e=1-n;return e*e*e*t}function CS(n,t){const e=1-n;return 3*e*e*n*t}function IS(n,t){return 3*(1-n)*n*n*t}function LS(n,t){return n*n*n*t}function tr(n,t,e,i,s){return PS(n,t)+CS(n,e)+IS(n,i)+LS(n,s)}class Mp extends Ei{constructor(t=new Ot,e=new Ot,i=new Ot,s=new Ot){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new Ot){const i=e,s=this.v0,o=this.v1,r=this.v2,a=this.v3;return i.set(tr(t,s.x,o.x,r.x,a.x),tr(t,s.y,o.y,r.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class DS extends Ei{constructor(t=new q,e=new q,i=new q,s=new q){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new q){const i=e,s=this.v0,o=this.v1,r=this.v2,a=this.v3;return i.set(tr(t,s.x,o.x,r.x,a.x),tr(t,s.y,o.y,r.y,a.y),tr(t,s.z,o.z,r.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class wp extends Ei{constructor(t=new Ot,e=new Ot){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Ot){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Ot){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class US extends Ei{constructor(t=new q,e=new q){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new q){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new q){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Sp extends Ei{constructor(t=new Ot,e=new Ot,i=new Ot){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new Ot){const i=e,s=this.v0,o=this.v1,r=this.v2;return i.set(Qo(t,s.x,o.x,r.x),Qo(t,s.y,o.y,r.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class NS extends Ei{constructor(t=new q,e=new q,i=new q){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new q){const i=e,s=this.v0,o=this.v1,r=this.v2;return i.set(Qo(t,s.x,o.x,r.x),Qo(t,s.y,o.y,r.y),Qo(t,s.z,o.z,r.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class bp extends Ei{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Ot){const i=e,s=this.points,o=(s.length-1)*t,r=Math.floor(o),a=o-r,c=s[r===0?r:r-1],l=s[r],h=s[r>s.length-2?s.length-1:r+1],u=s[r>s.length-3?s.length-1:r+2];return i.set(xd(a,c.x,l.x,h.x,u.x),xd(a,c.y,l.y,h.y,u.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(new Ot().fromArray(s))}return this}}var Ol=Object.freeze({__proto__:null,ArcCurve:bS,CatmullRomCurve3:ES,CubicBezierCurve:Mp,CubicBezierCurve3:DS,EllipseCurve:Su,LineCurve:wp,LineCurve3:US,QuadraticBezierCurve:Sp,QuadraticBezierCurve3:NS,SplineCurve:bp});class FS extends Ei{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ol[i](e,t))}return this}getPoint(t,e){const i=t*this.getLength(),s=this.getCurveLengths();let o=0;for(;o<s.length;){if(s[o]>=i){const r=s[o]-i,a=this.curves[o],c=a.getLength(),l=c===0?0:1-r/c;return a.getPointAt(l,e)}o++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let i=0,s=this.curves.length;i<s;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let i;for(let s=0,o=this.curves;s<o.length;s++){const r=o[s],a=r.isEllipseCurve?t*2:r.isLineCurve||r.isLineCurve3?1:r.isSplineCurve?t*r.points.length:t,c=r.getPoints(a);for(let l=0;l<c.length;l++){const h=c[l];i&&i.equals(h)||(e.push(h),i=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const s=t.curves[e];this.curves.push(new Ol[s.type]().fromJSON(s))}return this}}class Bl extends FS{constructor(t){super(),this.type="Path",this.currentPoint=new Ot,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const i=new wp(this.currentPoint.clone(),new Ot(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,s){const o=new Sp(this.currentPoint.clone(),new Ot(t,e),new Ot(i,s));return this.curves.push(o),this.currentPoint.set(i,s),this}bezierCurveTo(t,e,i,s,o,r){const a=new Mp(this.currentPoint.clone(),new Ot(t,e),new Ot(i,s),new Ot(o,r));return this.curves.push(a),this.currentPoint.set(o,r),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),i=new bp(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,s,o,r){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,i,s,o,r),this}absarc(t,e,i,s,o,r){return this.absellipse(t,e,i,i,s,o,r),this}ellipse(t,e,i,s,o,r,a,c){const l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,i,s,o,r,a,c),this}absellipse(t,e,i,s,o,r,a,c){const l=new Su(t,e,i,s,o,r,a,c);if(this.curves.length>0){const u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);const h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class ge extends Cn{constructor(t=1,e=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:s},e=Math.max(3,e);const o=[],r=[],a=[],c=[],l=new q,h=new Ot;r.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){const p=i+u/e*s;l.x=t*Math.cos(p),l.y=t*Math.sin(p),r.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(r[d]/t+1)/2,h.y=(r[d+1]/t+1)/2,c.push(h.x,h.y)}for(let u=1;u<=e;u++)o.push(u,u+1,0);this.setIndex(o),this.setAttribute("position",new qe(r,3)),this.setAttribute("normal",new qe(a,3)),this.setAttribute("uv",new qe(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ge(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class le extends Cn{constructor(t=1,e=1,i=1,s=32,o=1,r=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:o,openEnded:r,thetaStart:a,thetaLength:c};const l=this;s=Math.floor(s),o=Math.floor(o);const h=[],u=[],d=[],p=[];let _=0;const y=[],f=i/2;let m=0;E(),r===!1&&(t>0&&M(!0),e>0&&M(!1)),this.setIndex(h),this.setAttribute("position",new qe(u,3)),this.setAttribute("normal",new qe(d,3)),this.setAttribute("uv",new qe(p,2));function E(){const S=new q,O=new q;let I=0;const P=(e-t)/i;for(let U=0;U<=o;U++){const Q=[],x=U/o,b=x*(e-t)+t;for(let j=0;j<=s;j++){const V=j/s,Z=V*c+a,at=Math.sin(Z),W=Math.cos(Z);O.x=b*at,O.y=-x*i+f,O.z=b*W,u.push(O.x,O.y,O.z),S.set(at,P,W).normalize(),d.push(S.x,S.y,S.z),p.push(V,1-x),Q.push(_++)}y.push(Q)}for(let U=0;U<s;U++)for(let Q=0;Q<o;Q++){const x=y[Q][U],b=y[Q+1][U],j=y[Q+1][U+1],V=y[Q][U+1];t>0&&(h.push(x,b,V),I+=3),e>0&&(h.push(b,j,V),I+=3)}l.addGroup(m,I,0),m+=I}function M(S){const O=_,I=new Ot,P=new q;let U=0;const Q=S===!0?t:e,x=S===!0?1:-1;for(let j=1;j<=s;j++)u.push(0,f*x,0),d.push(0,x,0),p.push(.5,.5),_++;const b=_;for(let j=0;j<=s;j++){const Z=j/s*c+a,at=Math.cos(Z),W=Math.sin(Z);P.x=Q*W,P.y=f*x,P.z=Q*at,u.push(P.x,P.y,P.z),d.push(0,x,0),I.x=at*.5+.5,I.y=W*.5*x+.5,p.push(I.x,I.y),_++}for(let j=0;j<s;j++){const V=O+j,Z=b+j;S===!0?h.push(Z,Z+1,V):h.push(Z+1,Z,V),U+=3}l.addGroup(m,U,S===!0?1:2),m+=U}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new le(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class io extends le{constructor(t=1,e=1,i=32,s=1,o=!1,r=0,a=Math.PI*2){super(0,t,e,i,s,o,r,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:s,openEnded:o,thetaStart:r,thetaLength:a}}static fromJSON(t){return new io(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Rn extends Bl{constructor(t){super(t),this.uuid=Ns(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let i=0,s=this.holes.length;i<s;i++)e[i]=this.holes[i].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,i=this.holes.length;e<i;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const s=t.holes[e];this.holes.push(new Bl().fromJSON(s))}return this}}const OS={triangulate:function(n,t,e=2){const i=t&&t.length,s=i?t[0]*e:n.length;let o=Ep(n,0,s,e,!0);const r=[];if(!o||o.next===o.prev)return r;let a,c,l,h,u,d,p;if(i&&(o=kS(n,t,o,e)),n.length>80*e){a=l=n[0],c=h=n[1];for(let _=e;_<s;_+=e)u=n[_],d=n[_+1],u<a&&(a=u),d<c&&(c=d),u>l&&(l=u),d>h&&(h=d);p=Math.max(l-a,h-c),p=p!==0?32767/p:0}return fr(o,r,e,a,c,p,0),r}};function Ep(n,t,e,i,s){let o,r;if(s===QS(n,t,e,i)>0)for(o=t;o<e;o+=i)r=yd(o,n[o],n[o+1],r);else for(o=e-i;o>=t;o-=i)r=yd(o,n[o],n[o+1],r);return r&&Ha(r,r.next)&&(mr(r),r=r.next),r}function Ds(n,t){if(!n)return n;t||(t=n);let e=n,i;do if(i=!1,!e.steiner&&(Ha(e,e.next)||ke(e.prev,e,e.next)===0)){if(mr(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function fr(n,t,e,i,s,o,r){if(!n)return;!r&&o&&YS(n,i,s,o);let a=n,c,l;for(;n.prev!==n.next;){if(c=n.prev,l=n.next,o?zS(n,i,s,o):BS(n)){t.push(c.i/e|0),t.push(n.i/e|0),t.push(l.i/e|0),mr(n),n=l.next,a=l.next;continue}if(n=l,n===a){r?r===1?(n=GS(Ds(n),t,e),fr(n,t,e,i,s,o,2)):r===2&&HS(n,t,e,i,s,o):fr(Ds(n),t,e,i,s,o,1);break}}}function BS(n){const t=n.prev,e=n,i=n.next;if(ke(t,e,i)>=0)return!1;const s=t.x,o=e.x,r=i.x,a=t.y,c=e.y,l=i.y,h=s<o?s<r?s:r:o<r?o:r,u=a<c?a<l?a:l:c<l?c:l,d=s>o?s>r?s:r:o>r?o:r,p=a>c?a>l?a:l:c>l?c:l;let _=i.next;for(;_!==t;){if(_.x>=h&&_.x<=d&&_.y>=u&&_.y<=p&&so(s,a,o,c,r,l,_.x,_.y)&&ke(_.prev,_,_.next)>=0)return!1;_=_.next}return!0}function zS(n,t,e,i){const s=n.prev,o=n,r=n.next;if(ke(s,o,r)>=0)return!1;const a=s.x,c=o.x,l=r.x,h=s.y,u=o.y,d=r.y,p=a<c?a<l?a:l:c<l?c:l,_=h<u?h<d?h:d:u<d?u:d,y=a>c?a>l?a:l:c>l?c:l,f=h>u?h>d?h:d:u>d?u:d,m=zl(p,_,t,e,i),E=zl(y,f,t,e,i);let M=n.prevZ,S=n.nextZ;for(;M&&M.z>=m&&S&&S.z<=E;){if(M.x>=p&&M.x<=y&&M.y>=_&&M.y<=f&&M!==s&&M!==r&&so(a,h,c,u,l,d,M.x,M.y)&&ke(M.prev,M,M.next)>=0||(M=M.prevZ,S.x>=p&&S.x<=y&&S.y>=_&&S.y<=f&&S!==s&&S!==r&&so(a,h,c,u,l,d,S.x,S.y)&&ke(S.prev,S,S.next)>=0))return!1;S=S.nextZ}for(;M&&M.z>=m;){if(M.x>=p&&M.x<=y&&M.y>=_&&M.y<=f&&M!==s&&M!==r&&so(a,h,c,u,l,d,M.x,M.y)&&ke(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;S&&S.z<=E;){if(S.x>=p&&S.x<=y&&S.y>=_&&S.y<=f&&S!==s&&S!==r&&so(a,h,c,u,l,d,S.x,S.y)&&ke(S.prev,S,S.next)>=0)return!1;S=S.nextZ}return!0}function GS(n,t,e){let i=n;do{const s=i.prev,o=i.next.next;!Ha(s,o)&&Tp(s,i,i.next,o)&&pr(s,o)&&pr(o,s)&&(t.push(s.i/e|0),t.push(i.i/e|0),t.push(o.i/e|0),mr(i),mr(i.next),i=n=o),i=i.next}while(i!==n);return Ds(i)}function HS(n,t,e,i,s,o){let r=n;do{let a=r.next.next;for(;a!==r.prev;){if(r.i!==a.i&&KS(r,a)){let c=Ap(r,a);r=Ds(r,r.next),c=Ds(c,c.next),fr(r,t,e,i,s,o,0),fr(c,t,e,i,s,o,0);return}a=a.next}r=r.next}while(r!==n)}function kS(n,t,e,i){const s=[];let o,r,a,c,l;for(o=0,r=t.length;o<r;o++)a=t[o]*i,c=o<r-1?t[o+1]*i:n.length,l=Ep(n,a,c,i,!1),l===l.next&&(l.steiner=!0),s.push(jS(l));for(s.sort(VS),o=0;o<s.length;o++)e=WS(s[o],e);return e}function VS(n,t){return n.x-t.x}function WS(n,t){const e=XS(n,t);if(!e)return t;const i=Ap(e,n);return Ds(i,i.next),Ds(e,e.next)}function XS(n,t){let e=t,i=-1/0,s;const o=n.x,r=n.y;do{if(r<=e.y&&r>=e.next.y&&e.next.y!==e.y){const d=e.x+(r-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=o&&d>i&&(i=d,s=e.x<e.next.x?e:e.next,d===o))return s}e=e.next}while(e!==t);if(!s)return null;const a=s,c=s.x,l=s.y;let h=1/0,u;e=s;do o>=e.x&&e.x>=c&&o!==e.x&&so(r<l?o:i,r,c,l,r<l?i:o,r,e.x,e.y)&&(u=Math.abs(r-e.y)/(o-e.x),pr(e,n)&&(u<h||u===h&&(e.x>s.x||e.x===s.x&&qS(s,e)))&&(s=e,h=u)),e=e.next;while(e!==a);return s}function qS(n,t){return ke(n.prev,n,t.prev)<0&&ke(t.next,n,n.next)<0}function YS(n,t,e,i){let s=n;do s.z===0&&(s.z=zl(s.x,s.y,t,e,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,$S(s)}function $S(n){let t,e,i,s,o,r,a,c,l=1;do{for(e=n,n=null,o=null,r=0;e;){for(r++,i=e,a=0,t=0;t<l&&(a++,i=i.nextZ,!!i);t++);for(c=l;a>0||c>0&&i;)a!==0&&(c===0||!i||e.z<=i.z)?(s=e,e=e.nextZ,a--):(s=i,i=i.nextZ,c--),o?o.nextZ=s:n=s,s.prevZ=o,o=s;e=i}o.nextZ=null,l*=2}while(r>1);return n}function zl(n,t,e,i,s){return n=(n-e)*s|0,t=(t-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,n|t<<1}function jS(n){let t=n,e=n;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==n);return e}function so(n,t,e,i,s,o,r,a){return(s-r)*(t-a)>=(n-r)*(o-a)&&(n-r)*(i-a)>=(e-r)*(t-a)&&(e-r)*(o-a)>=(s-r)*(i-a)}function KS(n,t){return n.next.i!==t.i&&n.prev.i!==t.i&&!ZS(n,t)&&(pr(n,t)&&pr(t,n)&&JS(n,t)&&(ke(n.prev,n,t.prev)||ke(n,t.prev,t))||Ha(n,t)&&ke(n.prev,n,n.next)>0&&ke(t.prev,t,t.next)>0)}function ke(n,t,e){return(t.y-n.y)*(e.x-t.x)-(t.x-n.x)*(e.y-t.y)}function Ha(n,t){return n.x===t.x&&n.y===t.y}function Tp(n,t,e,i){const s=Jr(ke(n,t,e)),o=Jr(ke(n,t,i)),r=Jr(ke(e,i,n)),a=Jr(ke(e,i,t));return!!(s!==o&&r!==a||s===0&&Zr(n,e,t)||o===0&&Zr(n,i,t)||r===0&&Zr(e,n,i)||a===0&&Zr(e,t,i))}function Zr(n,t,e){return t.x<=Math.max(n.x,e.x)&&t.x>=Math.min(n.x,e.x)&&t.y<=Math.max(n.y,e.y)&&t.y>=Math.min(n.y,e.y)}function Jr(n){return n>0?1:n<0?-1:0}function ZS(n,t){let e=n;do{if(e.i!==n.i&&e.next.i!==n.i&&e.i!==t.i&&e.next.i!==t.i&&Tp(e,e.next,n,t))return!0;e=e.next}while(e!==n);return!1}function pr(n,t){return ke(n.prev,n,n.next)<0?ke(n,t,n.next)>=0&&ke(n,n.prev,t)>=0:ke(n,t,n.prev)<0||ke(n,n.next,t)<0}function JS(n,t){let e=n,i=!1;const s=(n.x+t.x)/2,o=(n.y+t.y)/2;do e.y>o!=e.next.y>o&&e.next.y!==e.y&&s<(e.next.x-e.x)*(o-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==n);return i}function Ap(n,t){const e=new Gl(n.i,n.x,n.y),i=new Gl(t.i,t.x,t.y),s=n.next,o=t.prev;return n.next=t,t.prev=n,e.next=s,s.prev=e,i.next=e,e.prev=i,o.next=i,i.prev=o,i}function yd(n,t,e,i){const s=new Gl(n,t,e);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function mr(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Gl(n,t,e){this.i=n,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function QS(n,t,e,i){let s=0;for(let o=t,r=e-i;o<e;o+=i)s+=(n[r]-n[o])*(n[o+1]+n[r+1]),r=o;return s}class fo{static area(t){const e=t.length;let i=0;for(let s=e-1,o=0;o<e;s=o++)i+=t[s].x*t[o].y-t[o].x*t[s].y;return i*.5}static isClockWise(t){return fo.area(t)<0}static triangulateShape(t,e){const i=[],s=[],o=[];Md(t),wd(i,t);let r=t.length;e.forEach(Md);for(let c=0;c<e.length;c++)s.push(r),r+=e[c].length,wd(i,e[c]);const a=OS.triangulate(i,s);for(let c=0;c<a.length;c+=3)o.push(a.slice(c,c+3));return o}}function Md(n){const t=n.length;t>2&&n[t-1].equals(n[0])&&n.pop()}function wd(n,t){for(let e=0;e<t.length;e++)n.push(t[e].x),n.push(t[e].y)}class Bn extends Cn{constructor(t=new Rn([new Ot(.5,.5),new Ot(-.5,.5),new Ot(-.5,-.5),new Ot(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const i=this,s=[],o=[];for(let a=0,c=t.length;a<c;a++){const l=t[a];r(l)}this.setAttribute("position",new qe(s,3)),this.setAttribute("uv",new qe(o,2)),this.computeVertexNormals();function r(a){const c=[],l=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1;let d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,p=e.bevelThickness!==void 0?e.bevelThickness:.2,_=e.bevelSize!==void 0?e.bevelSize:p-.1,y=e.bevelOffset!==void 0?e.bevelOffset:0,f=e.bevelSegments!==void 0?e.bevelSegments:3;const m=e.extrudePath,E=e.UVGenerator!==void 0?e.UVGenerator:t1;let M,S=!1,O,I,P,U;m&&(M=m.getSpacedPoints(h),S=!0,d=!1,O=m.computeFrenetFrames(h,!1),I=new q,P=new q,U=new q),d||(f=0,p=0,_=0,y=0);const Q=a.extractPoints(l);let x=Q.shape;const b=Q.holes;if(!fo.isClockWise(x)){x=x.reverse();for(let tt=0,g=b.length;tt<g;tt++){const T=b[tt];fo.isClockWise(T)&&(b[tt]=T.reverse())}}const V=fo.triangulateShape(x,b),Z=x;for(let tt=0,g=b.length;tt<g;tt++){const T=b[tt];x=x.concat(T)}function at(tt,g,T){return g||console.error("THREE.ExtrudeGeometry: vec does not exist"),tt.clone().addScaledVector(g,T)}const W=x.length,J=V.length;function G(tt,g,T){let L,N,D;const X=tt.x-g.x,K=tt.y-g.y,w=T.x-tt.x,v=T.y-tt.y,C=X*X+K*K,k=X*v-K*w;if(Math.abs(k)>Number.EPSILON){const z=Math.sqrt(C),H=Math.sqrt(w*w+v*v),ht=g.x-K/z,ut=g.y+X/z,pt=T.x-v/H,Tt=T.y+w/H,dt=((pt-ht)*v-(Tt-ut)*w)/(X*v-K*w);L=ht+X*dt-tt.x,N=ut+K*dt-tt.y;const xt=L*L+N*N;if(xt<=2)return new Ot(L,N);D=Math.sqrt(xt/2)}else{let z=!1;X>Number.EPSILON?w>Number.EPSILON&&(z=!0):X<-Number.EPSILON?w<-Number.EPSILON&&(z=!0):Math.sign(K)===Math.sign(v)&&(z=!0),z?(L=-K,N=X,D=Math.sqrt(C)):(L=X,N=K,D=Math.sqrt(C/2))}return new Ot(L/D,N/D)}const mt=[];for(let tt=0,g=Z.length,T=g-1,L=tt+1;tt<g;tt++,T++,L++)T===g&&(T=0),L===g&&(L=0),mt[tt]=G(Z[tt],Z[T],Z[L]);const yt=[];let gt,It=mt.concat();for(let tt=0,g=b.length;tt<g;tt++){const T=b[tt];gt=[];for(let L=0,N=T.length,D=N-1,X=L+1;L<N;L++,D++,X++)D===N&&(D=0),X===N&&(X=0),gt[L]=G(T[L],T[D],T[X]);yt.push(gt),It=It.concat(gt)}for(let tt=0;tt<f;tt++){const g=tt/f,T=p*Math.cos(g*Math.PI/2),L=_*Math.sin(g*Math.PI/2)+y;for(let N=0,D=Z.length;N<D;N++){const X=at(Z[N],mt[N],L);F(X.x,X.y,-T)}for(let N=0,D=b.length;N<D;N++){const X=b[N];gt=yt[N];for(let K=0,w=X.length;K<w;K++){const v=at(X[K],gt[K],L);F(v.x,v.y,-T)}}}const zt=_+y;for(let tt=0;tt<W;tt++){const g=d?at(x[tt],It[tt],zt):x[tt];S?(P.copy(O.normals[0]).multiplyScalar(g.x),I.copy(O.binormals[0]).multiplyScalar(g.y),U.copy(M[0]).add(P).add(I),F(U.x,U.y,U.z)):F(g.x,g.y,0)}for(let tt=1;tt<=h;tt++)for(let g=0;g<W;g++){const T=d?at(x[g],It[g],zt):x[g];S?(P.copy(O.normals[tt]).multiplyScalar(T.x),I.copy(O.binormals[tt]).multiplyScalar(T.y),U.copy(M[tt]).add(P).add(I),F(U.x,U.y,U.z)):F(T.x,T.y,u/h*tt)}for(let tt=f-1;tt>=0;tt--){const g=tt/f,T=p*Math.cos(g*Math.PI/2),L=_*Math.sin(g*Math.PI/2)+y;for(let N=0,D=Z.length;N<D;N++){const X=at(Z[N],mt[N],L);F(X.x,X.y,u+T)}for(let N=0,D=b.length;N<D;N++){const X=b[N];gt=yt[N];for(let K=0,w=X.length;K<w;K++){const v=at(X[K],gt[K],L);S?F(v.x,v.y+M[h-1].y,M[h-1].x+T):F(v.x,v.y,u+T)}}}rt(),ft();function rt(){const tt=s.length/3;if(d){let g=0,T=W*g;for(let L=0;L<J;L++){const N=V[L];ct(N[2]+T,N[1]+T,N[0]+T)}g=h+f*2,T=W*g;for(let L=0;L<J;L++){const N=V[L];ct(N[0]+T,N[1]+T,N[2]+T)}}else{for(let g=0;g<J;g++){const T=V[g];ct(T[2],T[1],T[0])}for(let g=0;g<J;g++){const T=V[g];ct(T[0]+W*h,T[1]+W*h,T[2]+W*h)}}i.addGroup(tt,s.length/3-tt,0)}function ft(){const tt=s.length/3;let g=0;vt(Z,g),g+=Z.length;for(let T=0,L=b.length;T<L;T++){const N=b[T];vt(N,g),g+=N.length}i.addGroup(tt,s.length/3-tt,1)}function vt(tt,g){let T=tt.length;for(;--T>=0;){const L=T;let N=T-1;N<0&&(N=tt.length-1);for(let D=0,X=h+f*2;D<X;D++){const K=W*D,w=W*(D+1),v=g+L+K,C=g+N+K,k=g+N+w,z=g+L+w;it(v,C,k,z)}}}function F(tt,g,T){c.push(tt),c.push(g),c.push(T)}function ct(tt,g,T){lt(tt),lt(g),lt(T);const L=s.length/3,N=E.generateTopUV(i,s,L-3,L-2,L-1);bt(N[0]),bt(N[1]),bt(N[2])}function it(tt,g,T,L){lt(tt),lt(g),lt(L),lt(g),lt(T),lt(L);const N=s.length/3,D=E.generateSideWallUV(i,s,N-6,N-3,N-2,N-1);bt(D[0]),bt(D[1]),bt(D[3]),bt(D[1]),bt(D[2]),bt(D[3])}function lt(tt){s.push(c[tt*3+0]),s.push(c[tt*3+1]),s.push(c[tt*3+2])}function bt(tt){o.push(tt.x),o.push(tt.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,i=this.parameters.options;return e1(e,i,t)}static fromJSON(t,e){const i=[];for(let o=0,r=t.shapes.length;o<r;o++){const a=e[t.shapes[o]];i.push(a)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Ol[s.type]().fromJSON(s)),new Bn(i,t.options)}}const t1={generateTopUV:function(n,t,e,i,s){const o=t[e*3],r=t[e*3+1],a=t[i*3],c=t[i*3+1],l=t[s*3],h=t[s*3+1];return[new Ot(o,r),new Ot(a,c),new Ot(l,h)]},generateSideWallUV:function(n,t,e,i,s,o){const r=t[e*3],a=t[e*3+1],c=t[e*3+2],l=t[i*3],h=t[i*3+1],u=t[i*3+2],d=t[s*3],p=t[s*3+1],_=t[s*3+2],y=t[o*3],f=t[o*3+1],m=t[o*3+2];return Math.abs(a-h)<Math.abs(r-l)?[new Ot(r,1-c),new Ot(l,1-u),new Ot(d,1-_),new Ot(y,1-m)]:[new Ot(a,1-c),new Ot(h,1-u),new Ot(p,1-_),new Ot(f,1-m)]}};function e1(n,t,e){if(e.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){const o=n[i];e.shapes.push(o.uuid)}else e.shapes.push(n.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class St extends Cn{constructor(t=1,e=32,i=16,s=0,o=Math.PI*2,r=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:o,thetaStart:r,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const c=Math.min(r+a,Math.PI);let l=0;const h=[],u=new q,d=new q,p=[],_=[],y=[],f=[];for(let m=0;m<=i;m++){const E=[],M=m/i;let S=0;m===0&&r===0?S=.5/e:m===i&&c===Math.PI&&(S=-.5/e);for(let O=0;O<=e;O++){const I=O/e;u.x=-t*Math.cos(s+I*o)*Math.sin(r+M*a),u.y=t*Math.cos(r+M*a),u.z=t*Math.sin(s+I*o)*Math.sin(r+M*a),_.push(u.x,u.y,u.z),d.copy(u).normalize(),y.push(d.x,d.y,d.z),f.push(I+S,1-M),E.push(l++)}h.push(E)}for(let m=0;m<i;m++)for(let E=0;E<e;E++){const M=h[m][E+1],S=h[m][E],O=h[m+1][E],I=h[m+1][E+1];(m!==0||r>0)&&p.push(M,S,I),(m!==i-1||c<Math.PI)&&p.push(S,O,I)}this.setIndex(p),this.setAttribute("position",new qe(_,3)),this.setAttribute("normal",new qe(y,3)),this.setAttribute("uv",new qe(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new St(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class po extends Cn{constructor(t=1,e=.4,i=12,s=48,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:s,arc:o},i=Math.floor(i),s=Math.floor(s);const r=[],a=[],c=[],l=[],h=new q,u=new q,d=new q;for(let p=0;p<=i;p++)for(let _=0;_<=s;_++){const y=_/s*o,f=p/i*Math.PI*2;u.x=(t+e*Math.cos(f))*Math.cos(y),u.y=(t+e*Math.cos(f))*Math.sin(y),u.z=e*Math.sin(f),a.push(u.x,u.y,u.z),h.x=t*Math.cos(y),h.y=t*Math.sin(y),d.subVectors(u,h).normalize(),c.push(d.x,d.y,d.z),l.push(_/s),l.push(p/i)}for(let p=1;p<=i;p++)for(let _=1;_<=s;_++){const y=(s+1)*p+_-1,f=(s+1)*(p-1)+_-1,m=(s+1)*(p-1)+_,E=(s+1)*p+_;r.push(y,f,E),r.push(f,m,E)}this.setIndex(r),this.setAttribute("position",new qe(a,3)),this.setAttribute("normal",new qe(c,3)),this.setAttribute("uv",new qe(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new po(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class te extends To{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new he(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new he(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ep,this.normalScale=new Ot(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Lt extends te{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ot(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return nn(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new he(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new he(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new he(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}const wa={enabled:!1,files:{},add:function(n,t){this.enabled!==!1&&(this.files[n]=t)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class n1{constructor(t,e,i){const s=this;let o=!1,r=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this.itemStart=function(h){a++,o===!1&&s.onStart!==void 0&&s.onStart(h,r,a),o=!0},this.itemEnd=function(h){r++,s.onProgress!==void 0&&s.onProgress(h,r,a),r===a&&(o=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){const u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){const p=l[u],_=l[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return _}return null}}}const i1=new n1;class Ro{constructor(t){this.manager=t!==void 0?t:i1,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const i=this;return new Promise(function(s,o){i.load(t,s,e,o)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}Ro.DEFAULT_MATERIAL_NAME="__DEFAULT";const Bi={};class s1 extends Error{constructor(t,e){super(t),this.response=e}}class o1 extends Ro{constructor(t){super(t)}load(t,e,i,s){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const o=wa.get(t);if(o!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(o),this.manager.itemEnd(t)},0),o;if(Bi[t]!==void 0){Bi[t].push({onLoad:e,onProgress:i,onError:s});return}Bi[t]=[],Bi[t].push({onLoad:e,onProgress:i,onError:s});const r=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,c=this.responseType;fetch(r).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const h=Bi[t],u=l.body.getReader(),d=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),p=d?parseInt(d):0,_=p!==0;let y=0;const f=new ReadableStream({start(m){E();function E(){u.read().then(({done:M,value:S})=>{if(M)m.close();else{y+=S.byteLength;const O=new ProgressEvent("progress",{lengthComputable:_,loaded:y,total:p});for(let I=0,P=h.length;I<P;I++){const U=h[I];U.onProgress&&U.onProgress(O)}m.enqueue(S),E()}},M=>{m.error(M)})}}});return new Response(f)}else throw new s1(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return l.json();default:if(a===void 0)return l.text();{const u=/charset="?([^;"\s]*)"?/i.exec(a),d=u&&u[1]?u[1].toLowerCase():void 0,p=new TextDecoder(d);return l.arrayBuffer().then(_=>p.decode(_))}}}).then(l=>{wa.add(t,l);const h=Bi[t];delete Bi[t];for(let u=0,d=h.length;u<d;u++){const p=h[u];p.onLoad&&p.onLoad(l)}}).catch(l=>{const h=Bi[t];if(h===void 0)throw this.manager.itemError(t),l;delete Bi[t];for(let u=0,d=h.length;u<d;u++){const p=h[u];p.onError&&p.onError(l)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}}class Rp extends Ro{constructor(t){super(t)}load(t,e,i,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const o=this,r=wa.get(t);if(r!==void 0)return o.manager.itemStart(t),setTimeout(function(){e&&e(r),o.manager.itemEnd(t)},0),r;const a=dr("img");function c(){h(),wa.add(t,this),e&&e(this),o.manager.itemEnd(t)}function l(u){h(),s&&s(u),o.manager.itemError(t),o.manager.itemEnd(t)}function h(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),o.manager.itemStart(t),a.src=t,a}}class r1 extends Ro{constructor(t){super(t)}load(t,e,i,s){const o=new yu;o.colorSpace=ei;const r=new Rp(this.manager);r.setCrossOrigin(this.crossOrigin),r.setPath(this.path);let a=0;function c(l){r.load(t[l],function(h){o.images[l]=h,a++,a===6&&(o.needsUpdate=!0,e&&e(o))},void 0,s)}for(let l=0;l<t.length;++l)c(l);return o}}class $i extends Ro{constructor(t){super(t)}load(t,e,i,s){const o=new wn,r=new Rp(this.manager);return r.setCrossOrigin(this.crossOrigin),r.setPath(this.path),r.load(t,function(a){o.image=a,o.needsUpdate=!0,e!==void 0&&e(o)},i,s),o}}class Eu extends an{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new he(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}const Fc=new Fe,Sd=new q,bd=new q;class Pp{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ot(512,512),this.map=null,this.mapPass=null,this.matrix=new Fe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Mu,this._frameExtents=new Ot(1,1),this._viewportCount=1,this._viewports=[new Ae(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;Sd.setFromMatrixPosition(t.matrixWorld),e.position.copy(Sd),bd.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(bd),e.updateMatrixWorld(),Fc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Fc),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Fc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Ed=new Fe,zo=new q,Oc=new q;class a1 extends Pp{constructor(){super(new Be(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ot(4,2),this._viewportCount=6,this._viewports=[new Ae(2,1,1,1),new Ae(0,1,1,1),new Ae(3,1,1,1),new Ae(1,1,1,1),new Ae(3,0,1,1),new Ae(1,0,1,1)],this._cubeDirections=[new q(1,0,0),new q(-1,0,0),new q(0,0,1),new q(0,0,-1),new q(0,1,0),new q(0,-1,0)],this._cubeUps=[new q(0,1,0),new q(0,1,0),new q(0,1,0),new q(0,1,0),new q(0,0,1),new q(0,0,-1)]}updateMatrices(t,e=0){const i=this.camera,s=this.matrix,o=t.distance||i.far;o!==i.far&&(i.far=o,i.updateProjectionMatrix()),zo.setFromMatrixPosition(t.matrixWorld),i.position.copy(zo),Oc.copy(i.position),Oc.add(this._cubeDirections[e]),i.up.copy(this._cubeUps[e]),i.lookAt(Oc),i.updateMatrixWorld(),s.makeTranslation(-zo.x,-zo.y,-zo.z),Ed.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ed)}}class Ti extends Eu{constructor(t,e,i=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new a1}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class c1 extends Pp{constructor(){super(new pp(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Ai extends Eu{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(an.DEFAULT_UP),this.updateMatrix(),this.target=new an,this.shadow=new c1}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Ri extends Eu{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class Cp{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Td(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Td();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Td(){return performance.now()}class l1{constructor(){this.type="ShapePath",this.color=new he,this.subPaths=[],this.currentPath=null}moveTo(t,e){return this.currentPath=new Bl,this.subPaths.push(this.currentPath),this.currentPath.moveTo(t,e),this}lineTo(t,e){return this.currentPath.lineTo(t,e),this}quadraticCurveTo(t,e,i,s){return this.currentPath.quadraticCurveTo(t,e,i,s),this}bezierCurveTo(t,e,i,s,o,r){return this.currentPath.bezierCurveTo(t,e,i,s,o,r),this}splineThru(t){return this.currentPath.splineThru(t),this}toShapes(t){function e(m){const E=[];for(let M=0,S=m.length;M<S;M++){const O=m[M],I=new Rn;I.curves=O.curves,E.push(I)}return E}function i(m,E){const M=E.length;let S=!1;for(let O=M-1,I=0;I<M;O=I++){let P=E[O],U=E[I],Q=U.x-P.x,x=U.y-P.y;if(Math.abs(x)>Number.EPSILON){if(x<0&&(P=E[I],Q=-Q,U=E[O],x=-x),m.y<P.y||m.y>U.y)continue;if(m.y===P.y){if(m.x===P.x)return!0}else{const b=x*(m.x-P.x)-Q*(m.y-P.y);if(b===0)return!0;if(b<0)continue;S=!S}}else{if(m.y!==P.y)continue;if(U.x<=m.x&&m.x<=P.x||P.x<=m.x&&m.x<=U.x)return!0}}return S}const s=fo.isClockWise,o=this.subPaths;if(o.length===0)return[];let r,a,c;const l=[];if(o.length===1)return a=o[0],c=new Rn,c.curves=a.curves,l.push(c),l;let h=!s(o[0].getPoints());h=t?!h:h;const u=[],d=[];let p=[],_=0,y;d[_]=void 0,p[_]=[];for(let m=0,E=o.length;m<E;m++)a=o[m],y=a.getPoints(),r=s(y),r=t?!r:r,r?(!h&&d[_]&&_++,d[_]={s:new Rn,p:y},d[_].s.curves=a.curves,h&&_++,p[_]=[]):p[_].push({h:a,p:y[0]});if(!d[0])return e(o);if(d.length>1){let m=!1,E=0;for(let M=0,S=d.length;M<S;M++)u[M]=[];for(let M=0,S=d.length;M<S;M++){const O=p[M];for(let I=0;I<O.length;I++){const P=O[I];let U=!0;for(let Q=0;Q<d.length;Q++)i(P.p,d[Q].p)&&(M!==Q&&E++,U?(U=!1,u[Q].push(P)):m=!0);U&&u[M].push(P)}}E>0&&m===!1&&(p=u)}let f;for(let m=0,E=d.length;m<E;m++){c=d[m].s,l.push(c),f=p[m];for(let M=0,S=f.length;M<S;M++)c.holes.push(f[M].h)}return l}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:hu}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=hu);class Pi extends Ro{constructor(t){super(t)}load(t,e,i,s){const o=this,r=new o1(this.manager);r.setPath(this.path),r.setRequestHeader(this.requestHeader),r.setWithCredentials(this.withCredentials),r.load(t,function(a){const c=o.parse(JSON.parse(a));e&&e(c)},i,s)}parse(t){return new u1(t)}}class u1{constructor(t){this.isFont=!0,this.type="Font",this.data=t}generateShapes(t,e=100){const i=[],s=h1(t,e,this.data);for(let o=0,r=s.length;o<r;o++)i.push(...s[o].toShapes());return i}}function h1(n,t,e){const i=Array.from(n),s=t/e.resolution,o=(e.boundingBox.yMax-e.boundingBox.yMin+e.underlineThickness)*s,r=[];let a=0,c=0;for(let l=0;l<i.length;l++){const h=i[l];if(h===`
`)a=0,c-=o;else{const u=d1(h,s,a,c,e);a+=u.offsetX,r.push(u.path)}}return r}function d1(n,t,e,i,s){const o=s.glyphs[n]||s.glyphs["?"];if(!o){console.error('THREE.Font: character "'+n+'" does not exists in font family '+s.familyName+".");return}const r=new l1;let a,c,l,h,u,d,p,_;if(o.o){const y=o._cachedOutline||(o._cachedOutline=o.o.split(" "));for(let f=0,m=y.length;f<m;)switch(y[f++]){case"m":a=y[f++]*t+e,c=y[f++]*t+i,r.moveTo(a,c);break;case"l":a=y[f++]*t+e,c=y[f++]*t+i,r.lineTo(a,c);break;case"q":l=y[f++]*t+e,h=y[f++]*t+i,u=y[f++]*t+e,d=y[f++]*t+i,r.quadraticCurveTo(u,d,l,h);break;case"b":l=y[f++]*t+e,h=y[f++]*t+i,u=y[f++]*t+e,d=y[f++]*t+i,p=y[f++]*t+e,_=y[f++]*t+i,r.bezierCurveTo(u,d,p,_,l,h);break}}return{offsetX:o.ha*t,path:r}}class ze extends Bn{constructor(t,e={}){const i=e.font;if(i===void 0)super();else{const s=i.generateShapes(t,e.size);e.depth===void 0&&e.height!==void 0&&console.warn("THREE.TextGeometry: .height is now depreciated. Please use .depth instead"),e.depth=e.depth!==void 0?e.depth:e.height!==void 0?e.height:50,e.bevelThickness===void 0&&(e.bevelThickness=10),e.bevelSize===void 0&&(e.bevelSize=8),e.bevelEnabled===void 0&&(e.bevelEnabled=!1),super(s,e)}this.type="TextGeometry"}}const f1=Gn({__name:"HalfBlueBear",props:{background:{type:Boolean,default:!1},cameraPosition:{type:Number,default:5},bodyPosition:{type:Object,default:()=>({x:0,y:0,z:0})}},setup(n){const t=n,e=Kt(null);return $n(()=>{if(e.value){let i=function(){requestAnimationFrame(i),xt&&(M.rotation.y+=.03),r.render(s,o)};const s=new Yn,o=new Be(75,window.innerWidth/window.innerHeight,.1,1e3),r=new qn({antialias:!0,alpha:!0});r.setSize(window.innerWidth,window.innerHeight),r.toneMapping=Vf,r.toneMappingExposure=1.25,e.value.appendChild(r.domElement);const a=new Ri(16777215,.6);s.add(a);const c=new Ai(16777215,1.2);c.position.set(5,5,5),s.add(c);const l=new Ti(16777215,2,50);l.position.set(0,2,4),s.add(l);const h=new Pn({uniforms:{time:{value:0},color1:{value:new he(16766720)},color2:{value:new he(16007990)}},vertexShader:`
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
        `}),u=new Lt({color:52945,metalness:.2,roughness:.5,clearcoat:.1,clearcoatRoughness:.8,transparent:!0,opacity:.99}),d=new Lt({color:52945,metalness:.2,roughness:.5,clearcoat:.1,clearcoatRoughness:.8,transparent:!0,opacity:.35});new Lt({color:13882323,metalness:.7,roughness:.25,clearcoat:.4,clearcoatRoughness:.1,transparent:!1,opacity:1}),new Lt({color:12632256,metalness:1,roughness:.3,clearcoat:.5,clearcoatRoughness:.1,transparent:!0,opacity:.35});const p=new Lt({color:16738740,metalness:.2,roughness:.5,clearcoat:.1,clearcoatRoughness:.8,transparent:!0,opacity:.79}),_=new Lt({color:13369344,metalness:.2,roughness:.6,clearcoat:.1,clearcoatRoughness:.8,transparent:!1,opacity:.99,depthWrite:!0,depthTest:!0}),y=new Lt({color:16738740,metalness:.2,roughness:.6,clearcoat:.1,clearcoatRoughness:.8,transparent:!1,opacity:.99,depthWrite:!0,depthTest:!0}),f=`
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
    `,E=new Pn({uniforms:{time:{value:0},opacity:{value:1}},vertexShader:f,fragmentShader:m,transparent:!1,depthWrite:!0}),M=new qt,S=new St(1,32,32,0,Math.PI),O=new A(S,d),I=new A(S,u);O.scale.set(.85,.85,.8),I.scale.set(.85,.85,.8),O.position.y=-.2,I.position.y=-.2,O.rotation.y=Math.PI/2,I.rotation.y=Math.PI*1.5;const P=new ge(1,32),U=new A(P,u);U.scale.set(.85,.85,.8),U.position.set(0,-.2,0),U.rotation.y=Math.PI/2;const Q=new qt;Q.add(O),Q.add(I),Q.add(U),M.add(Q);const x=new St(.6,32,32,0,Math.PI),b=new A(x,u);b.scale.set(1,.95,.95),b.position.set(0,1,0),b.rotation.y=Math.PI*1.5;const j=new A(x,d);j.scale.set(1,.95,.95),j.position.set(0,1,0),j.rotation.y=Math.PI/2;const V=new ge(.6,32),Z=new A(V,u);Z.position.set(0,1,0),Z.rotation.y=Math.PI/2,Z.scale.set(1,.95,.95);const at=new qt;at.add(b),at.add(j),at.add(Z),M.add(at);const W=new St(.25,32,32),J=new A(W,u);J.position.set(-.45,1.35,-.1),M.add(J);const G=new A(W,d);G.position.set(.45,1.35,-.1),M.add(G);const mt=new St(.25,32,32,Math.PI/2,Math.PI),yt=new A(mt,u);yt.scale.set(1.1,.6,.8),yt.position.set(0,.84,.5),yt.rotation.y=Math.PI;const gt=new St(.25,32,32,Math.PI/2,Math.PI),It=new A(gt,d);It.scale.set(1.1,.6,.8),It.position.set(0,.84,.5),It.rotation.y=0;const zt=new ge(.25,32),rt=new A(zt,u);rt.scale.set(.8,.6,.8),rt.position.set(0,.84,.5),rt.rotation.y=Math.PI/2;const ft=new qt;ft.add(yt),ft.add(It),ft.add(rt),M.add(ft);const vt=new Rn;vt.moveTo(0,0),vt.bezierCurveTo(0,-.3,-.6,-.3,-.6,0),vt.bezierCurveTo(-.6,.3,0,.6,0,1),vt.bezierCurveTo(0,.6,.6,.3,.6,0),vt.bezierCurveTo(.6,-.3,0,-.3,0,0);const F={depth:.4,bevelEnabled:!0,bevelSegments:2,steps:2,bevelSize:.1,bevelThickness:.1};new Lt({color:16777215,metalness:0,roughness:.1,clearcoat:1,clearcoatRoughness:.1,transparent:!0,opacity:.85,reflectivity:1,envMapIntensity:1});const ct=new Bn(vt,F);new An({color:0});const it=new A(ct,p);it.scale.set(.1,.1,.1),it.rotation.z=ee.degToRad(210),it.rotation.x=ee.degToRad(5),it.rotation.y=ee.degToRad(-45),it.position.set(-.4,.9,.45);const lt=new A(ct,E);lt.scale.set(.5,.5,.5),lt.position.set(.35,0,0),lt.rotation.y=Math.PI,lt.rotation.x=Math.PI,M.add(lt);const bt=new A(ct,h);bt.scale.set(.35,.35,.35),bt.position.set(.3,0,0),bt.rotation.y=Math.PI,bt.rotation.x=Math.PI;const tt=new A(ct,y);tt.scale.set(.25,.25,.25),tt.position.set(.27,.2,0),tt.rotation.y=Math.PI,tt.rotation.x=Math.PI;const g=new A(ct,_);g.scale.set(.3,.3,.3),g.position.set(.23,-.5,.3),g.rotation.y=Math.PI,g.rotation.x=Math.PI;const T=new A(ct,E);T.scale.set(.4,.4,.4),T.position.set(.27,0,.35),T.rotation.y=Math.PI,T.rotation.x=Math.PI;const L=new St(.35,32,32),N=new A(L,u);N.scale.set(.75,1.25,.65),N.position.set(-.7,-.15,.2),M.add(N);const D=new A(L,d);D.scale.set(.75,1.25,.65),D.position.set(.7,-.15,.2),M.add(D);const X=new le(.2,.22,.6,32),K=new A(X,u);K.position.set(-.4,-1.05,0),M.add(K);const w=new A(X,d);w.position.set(.4,-1.05,0),M.add(w);const v=new St(.3,32,32),C=new A(v,u);C.scale.set(1,.72,1.5),C.position.set(-.4,-1.45,.17),M.add(C);const k=new A(v,d);k.scale.set(1,.72,1.5),k.position.set(.4,-1.45,.17),M.add(k);const z=new St(.44,32,32),H=new A(z,u);H.position.set(-.15,-.45,-.4),M.add(H);const ht=new A(z,d);ht.position.set(.15,-.45,-.4),M.add(ht);const ut=new St(.18,32,32),pt=new A(ut,p);pt.position.set(0,-.35,-.8),M.add(pt),new Pi().load("https://threejs.org/examples/fonts/helvetiker_bold.typeface.json",function(Et){const Ht=new ze("X",{font:Et,size:.18,depth:.05}),Ut=new An({color:0}),kt=new A(Ht,Ut);kt.position.set(-.3,.99,.53),kt.rotation.x=ee.degToRad(-5),kt.rotation.y=ee.degToRad(-15),M.add(kt);const B=new ze("+",{font:Et,size:.25,depth:.1}),_t=new An({color:0}),nt=new A(B,_t);nt.position.set(.14,.99,.53),nt.rotation.y=ee.degToRad(12),nt.rotation.x=ee.degToRad(-5),M.add(nt)}),pt.renderOrder=1,M.scale.set(1.2,1.2,1.2),s.add(M),M.position.set(t.bodyPosition.x,t.bodyPosition.y,t.bodyPosition.z),o.position.set(t.bodyPosition.x,1,t.cameraPosition),o.lookAt(t.bodyPosition.x,0,0),o.position.z=4;const dt={x:0,y:0};let xt=!0,Pt=null;const Dt=Et=>{xt=!1,dt.x=Et.clientX/window.innerWidth*2-1,dt.y=-(Et.clientY/window.innerHeight)*2+1;const Ht=dt.x*Math.PI*.2,Ut=dt.y*Math.PI*.2;M.rotation.y=Ht,M.rotation.x=Ut,clearTimeout(Pt),Pt=setTimeout(()=>{xt=!0},500)};window.addEventListener("mousemove",Dt),h.uniforms.time.value+=.04,i(),Ge(()=>t.bodyPosition,Et=>{M.position.set(Et.x,Et.y,Et.z)}),Ge(()=>t.cameraPosition,Et=>{o.position.set(t.bodyPosition.x,1,Et),o.lookAt(t.bodyPosition.x,0,0)}),window.addEventListener("resize",()=>{o.aspect=window.innerWidth/window.innerHeight,o.updateProjectionMatrix(),r.setSize(window.innerWidth,window.innerHeight)})}}),(i,s)=>(ui(),hi("div",{ref_key:"threeCanvas",ref:e,class:zn(n.background?"no-bg":"three-canvas")},null,2))}}),p1=di(f1,[["__scopeId","data-v-5bf83852"]]),m1=Gn({__name:"MetalBear",props:{background:{type:Boolean,default:!1},cameraPosition:{type:Number,default:5},bodyPosition:{type:Object,default:()=>({x:0,y:0,z:0})}},setup(n){const t=n,e=Kt(null);let i=null,s=Kt(!1),o=Kt(!1),r=Kt(!1);return $n(()=>{if(e.value){let a=function(){requestAnimationFrame(a),s.value?u.rotation.y+=.03:o.value&&(u.rotation.y-=.03),h.render(c,l)};const c=new Yn,l=new Be(75,window.innerWidth/window.innerHeight,.1,1e3),h=new qn({antialias:!0,alpha:!0});h.setSize(window.innerWidth,window.innerHeight),e.value.appendChild(h.domElement);const u=new qt,d=new Ri(16777215,2);c.add(d);const p=new Ai(16777215,4);p.position.set(5,5,5),c.add(p);const _=new Ti(16777215,5,50);_.position.set(0,2,4),c.add(_);const y=new $i,f=y.load("/3d-bear-arts/assets/lv2.jpg"),m=y.load("/3d-bear-arts/assets/lv2.jpg");f.wrapS=f.wrapT=Xe,m.wrapS=m.wrapT=Xe;const E=new Lt({color:8343336,metalness:0,roughness:.8,bumpMap:f,bumpScale:.1,clearcoat:.2,clearcoatRoughness:.9,map:m,envMapIntensity:.7}),M=new Lt({color:5978654,metalness:0,roughness:.8,bumpMap:f,bumpScale:.1,clearcoat:.2,clearcoatRoughness:.9,map:m,envMapIntensity:.7}),S=new Lt({color:13152668,metalness:.2,roughness:.05,bumpMap:f,bumpScale:.05,clearcoat:1,clearcoatRoughness:.05,map:m,transparent:!0,opacity:.4,transmission:.9,envMapIntensity:1,reflectivity:.9,ior:1.45,side:de});new Lt({color:13421772,metalness:1,roughness:.5,clearcoat:.3,clearcoatRoughness:.3});const O=new St(1,32,32,0,Math.PI),I=new A(O,S),P=new A(O,E);I.scale.set(.85,.85,.8),P.scale.set(.85,.85,.8),I.position.y=-.2,P.position.y=-.2,I.rotation.y=Math.PI/2,P.rotation.y=Math.PI*1.5;const U=new ge(1,32),Q=new A(U,E);Q.scale.set(.85,.85,.8),Q.position.set(0,-.2,0),Q.rotation.y=Math.PI/2;const x=new qt;x.add(I),x.add(P),x.add(Q),u.add(x);const b=new St(.6,32,32,0,Math.PI),j=new A(b,E);j.scale.set(1,.95,.95),j.position.set(0,1,0),j.rotation.y=Math.PI*1.5;const V=new A(b,S);V.scale.set(1,.95,.95),V.position.set(0,1,0),V.rotation.y=Math.PI/2;const Z=new ge(.6,32),at=new A(Z,E);at.position.set(0,1,0),at.rotation.y=Math.PI/2,at.scale.set(1,.95,.95);const W=new qt;W.add(j),W.add(V),W.add(at),u.add(W);const J=new St(.25,32,32),G=new A(J,E);G.position.set(-.45,1.35,-.1),u.add(G);const mt=new A(J,S);mt.position.set(.45,1.35,-.1),u.add(mt);const yt=new St(.25,32,32,Math.PI/2,Math.PI),gt=new A(yt,M);gt.scale.set(1.1,.6,.8),gt.position.set(0,.84,.5),gt.rotation.y=Math.PI;const It=new St(.25,32,32,Math.PI/2,Math.PI),zt=new A(It,S);zt.scale.set(1.1,.6,.8),zt.position.set(0,.84,.5),zt.rotation.y=0;const rt=new ge(.25,32),ft=new A(rt,E);ft.scale.set(.8,.6,.8),ft.position.set(0,.84,.5),ft.rotation.y=Math.PI/2;const vt=new qt;vt.add(gt),vt.add(zt),vt.add(ft),u.add(vt);const F=new Rn;F.moveTo(0,0),F.bezierCurveTo(0,-.3,-.6,-.3,-.6,0),F.bezierCurveTo(-.6,.3,0,.6,0,1),F.bezierCurveTo(0,.6,.6,.3,.6,0),F.bezierCurveTo(.6,-.3,0,-.3,0,0);const ct={depth:.4,bevelEnabled:!0,bevelSegments:2,steps:2,bevelSize:.1,bevelThickness:.1};new Lt({color:16777215,metalness:0,roughness:.1,clearcoat:1,clearcoatRoughness:.1,transparent:!0,opacity:.85,reflectivity:1,envMapIntensity:1});const it=new Bn(F,ct),lt=new A(it,E);lt.scale.set(.1,.1,.1),lt.rotation.z=ee.degToRad(210),lt.rotation.x=ee.degToRad(5),lt.rotation.y=ee.degToRad(-45),lt.position.set(-.4,.9,.45);const bt=new A(it,M);bt.scale.set(.6,.5,.5),bt.position.set(.35,0,0),bt.rotation.y=Math.PI,bt.rotation.x=Math.PI;const tt=new A(it,M);tt.scale.set(.2,.2,.2),tt.position.set(.5,-.1,.2),tt.rotation.y=Math.PI,tt.rotation.x=Math.PI,u.add(tt);const g=new ri(1.3,1.2,.6),T=new A(g,E);T.scale.set(.45,.45,.45),T.position.set(.35,-.2,.1),T.rotation.y=Math.PI;const L=new po(.15,.025,10,100);new Lt({color:8343336,metalness:.3,roughness:.4,clearcoat:.5});const N=new A(L,E);N.position.set(.35,.1,.1),N.rotation.z=Math.PI/2,N.rotation.x=Math.PI/8,N.rotation.y=Math.PI/14;const D=new A(L,E);D.position.set(.35,.1,.13),D.rotation.z=Math.PI/2,D.rotation.x=Math.PI/-8,D.rotation.y=Math.PI/12;const X=new qt;X.add(T),X.add(N),X.add(D),u.add(X);const K=new St(.35,32,32),w=new A(K,E);w.scale.set(.75,1.25,.65),w.position.set(-.7,-.15,.2),u.add(w);const v=new A(K,S);v.scale.set(.75,1.25,.65),v.position.set(.7,-.15,.2),u.add(v);const C=new le(.2,.22,.6,32),k=new A(C,E);k.position.set(-.4,-1.05,0),u.add(k);const z=new A(C,S);z.position.set(.4,-1.05,0),u.add(z);const H=new St(.3,32,32),ht=new A(H,E);ht.scale.set(1,.72,1.5),ht.position.set(-.4,-1.45,.17),u.add(ht);const ut=new A(H,S);ut.scale.set(1,.72,1.5),ut.position.set(.4,-1.45,.17),u.add(ut);const pt=new St(.44,32,32),Tt=new A(pt,E);Tt.position.set(-.15,-.45,-.4),u.add(Tt);const dt=new A(pt,S);dt.position.set(.15,-.45,-.4),u.add(dt);const xt=new St(.18,32,32),Pt=new A(xt,E);Pt.position.set(0,-.35,-.8),u.add(Pt),new Pi().load("https://threejs.org/examples/fonts/helvetiker_bold.typeface.json",function(et){const wt=new ze("X",{font:et,size:.2,depth:.05});new An({color:0});const Mt=new A(wt,M);Mt.position.set(-.3,.99,.53),Mt.rotation.x=ee.degToRad(-5),Mt.rotation.y=ee.degToRad(-15),u.add(Mt);const Bt=new ze("O",{font:et,size:.2,depth:.05});new An({color:0});const Yt=new A(Bt,M);Yt.position.set(.14,.99,.53),Yt.rotation.y=ee.degToRad(12),Yt.rotation.x=ee.degToRad(-5),u.add(Yt)}),Pt.renderOrder=1,u.scale.set(1.35,1.35,1.35),c.add(u),u.position.set(t.bodyPosition.x,t.bodyPosition.y,t.bodyPosition.z),l.position.set(t.bodyPosition.x,1,t.cameraPosition),l.lookAt(t.bodyPosition.x,0,0),l.position.z=4;const Et=()=>{u.rotation.y,u.rotation.x},Ht=()=>{s.value=!0,o.value=!1,r.value=!1},Ut=()=>{s.value=!1,o.value=!0,r.value=!1},kt=()=>{s.value=!1,o.value=!1,Et()},B=et=>{const wt=window.innerWidth/2;et>wt?Ht():Ut(),Et()},_t=et=>{clearTimeout(i),kt(),r.value=!0;const wt={x:et.clientX/window.innerWidth*2-1,y:-(et.clientY/window.innerHeight)*2+1};if(r.value){const Mt=wt.x*Math.PI*.2,Bt=wt.y*Math.PI*.2;u.rotation.y=Mt,u.rotation.x=Bt}i=setTimeout(()=>{r.value=!1,B(et.clientX)},500)};window.addEventListener("mousemove",_t);const nt=et=>{if(r.value){const wt={x:et.clientX/window.innerWidth*2-1,y:-(et.clientY/window.innerHeight)*2+1},Mt=wt.x*Math.PI*.2,Bt=wt.y*Math.PI*.2;u.rotation.y=Mt,u.rotation.x=Bt}};window.addEventListener("mousemove",nt),a(),Ge(()=>t.bodyPosition,et=>{u.position.set(et.x,et.y,et.z)}),Ge(()=>t.cameraPosition,et=>{l.position.set(t.bodyPosition.x,1,et),l.lookAt(t.bodyPosition.x,0,0)}),window.addEventListener("resize",()=>{l.aspect=window.innerWidth/window.innerHeight,l.updateProjectionMatrix(),h.setSize(window.innerWidth,window.innerHeight)})}}),(a,c)=>(ui(),hi("div",{ref_key:"threeCanvas",ref:e,class:zn(n.background?"no-bg":"three-canvas")},null,2))}}),g1=di(m1,[["__scopeId","data-v-f3beb116"]]),_1=Gn({__name:"PopartBear",props:{background:{type:Boolean,default:!1},cameraPosition:{type:Number,default:5},bodyPosition:{type:Object,default:()=>({x:0,y:0,z:0})}},setup(n){const t=n,e=Kt(null);let i=null,s=Kt(!1),o=Kt(!1),r=Kt(!1);return $n(()=>{if(e.value){let a=function(){requestAnimationFrame(a),s.value?u.rotation.y+=.03:o.value&&(u.rotation.y-=.03),h.render(c,l)};const c=new Yn,l=new Be(75,window.innerWidth/window.innerHeight,.1,1e3),h=new qn({antialias:!0,alpha:!0});h.setSize(window.innerWidth,window.innerHeight),e.value.appendChild(h.domElement);const u=new qt,d=new Ri(16777215,2);c.add(d);const p=new Ai(16777215,4);p.position.set(5,5,5),c.add(p);const _=new Ti(16777215,5,50);_.position.set(0,2,4),c.add(_);const y=new $i,f=y.load("/3d-bear-arts/assets/pop6.jpg"),m=y.load("/3d-bear-arts/assets/pop7.jpg");f.wrapS=f.wrapT=Xe,m.wrapS=m.wrapT=Xe;const E=new Lt({color:16738740,map:m,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9}),M=new Lt({color:16766720,metalness:.3,roughness:.1,clearcoat:1,clearcoatRoughness:.05,transparent:!0,opacity:.4,transmission:.8,ior:1.45,reflectivity:.9,envMapIntensity:1,side:de}),S=new Lt({color:16766720,map:f,metalness:.3,roughness:.5}),O=new Lt({color:16738740,metalness:.3,roughness:.1,clearcoat:1,clearcoatRoughness:.05,transparent:!0,opacity:.5,transmission:.8,ior:1.45,reflectivity:.9,envMapIntensity:1,side:de}),I=new Lt({color:9055202,map:f,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9});new Lt({color:9055202,metalness:.3,roughness:.1,clearcoat:1,clearcoatRoughness:.05,transparent:!0,opacity:.4,transmission:.8,ior:1.45,reflectivity:.9,envMapIntensity:1,side:de});const P=new Lt({color:65535,map:f,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9}),U=new Lt({color:65535,metalness:.3,roughness:.1,clearcoat:1,clearcoatRoughness:.05,transparent:!0,opacity:.4,transmission:.8,ior:1.45,reflectivity:.9,envMapIntensity:1,side:de}),Q=new St(1,32,32,0,Math.PI),x=new A(Q,M),b=new A(Q,E);x.scale.set(.85,.85,.8),b.scale.set(.85,.85,.8),x.position.y=-.2,b.position.y=-.2,x.rotation.y=Math.PI/2,b.rotation.y=Math.PI*1.5;const j=new ge(1,32),V=new A(j,E);V.scale.set(.85,.85,.8),V.position.set(0,-.2,0),V.rotation.y=Math.PI/2;const Z=new qt;Z.add(x),Z.add(b),Z.add(V),u.add(Z);const at=new St(.6,32,32,0,Math.PI),W=new A(at,S);W.scale.set(1,.95,.95),W.position.set(0,1,0),W.rotation.y=Math.PI*1.5;const J=new A(at,O);J.scale.set(1,.95,.95),J.position.set(0,1,0),J.rotation.y=Math.PI/2;const G=new ge(.6,32),mt=new A(G,S);mt.position.set(0,1,0),mt.rotation.y=Math.PI/2,mt.scale.set(1,.95,.95);const yt=new qt;yt.add(W),yt.add(J),yt.add(mt),u.add(yt);const gt=new St(.25,32,32),It=new A(gt,E);It.position.set(-.45,1.35,-.1),u.add(It);const zt=new A(gt,M);zt.position.set(.45,1.35,-.1),u.add(zt);const rt=new St(.25,32,32,Math.PI/2,Math.PI),ft=new A(rt,S);ft.scale.set(1.1,.6,.8),ft.position.set(0,.84,.5),ft.rotation.y=Math.PI;const vt=new St(.25,32,32,Math.PI/2,Math.PI),F=new A(vt,O);F.scale.set(1.1,.6,.8),F.position.set(0,.84,.5),F.rotation.y=0;const ct=new ge(.25,32),it=new A(ct,S);it.scale.set(.8,.6,.8),it.position.set(0,.84,.5),it.rotation.y=Math.PI/2;const lt=new qt;lt.add(ft),lt.add(F),lt.add(it),u.add(lt);const bt=new Rn;bt.moveTo(0,0),bt.bezierCurveTo(0,-.3,-.6,-.3,-.6,0),bt.bezierCurveTo(-.6,.3,0,.6,0,1),bt.bezierCurveTo(0,.6,.6,.3,.6,0),bt.bezierCurveTo(.6,-.3,0,-.3,0,0);const tt={depth:.4,bevelEnabled:!0,bevelSegments:2,steps:2,bevelSize:.1,bevelThickness:.1},g=new Bn(bt,tt),T=new A(g,S);T.scale.set(.5,.5,.5),T.position.set(.35,0,0),T.rotation.y=Math.PI,T.rotation.x=Math.PI,u.add(T);const L=new A(g,P);L.scale.set(.2,.2,.25),L.position.set(.5,-.3,.4),L.rotation.y=Math.PI,L.rotation.x=Math.PI,u.add(L);const N=new A(g,E);N.scale.set(.25,.25,.27),N.position.set(.4,.3,-.2),N.rotation.y=Math.PI,N.rotation.x=Math.PI,u.add(N);const D=new St(.35,32,32),X=new A(D,P);X.scale.set(.75,1.25,.65),X.position.set(-.7,-.15,.2),u.add(X);const K=new A(D,U);K.scale.set(.75,1.25,.65),K.position.set(.7,-.15,.2),u.add(K);const w=new le(.2,.22,.6,32),v=new A(w,S);v.position.set(-.4,-1.05,0),u.add(v);const C=new A(w,O);C.position.set(.4,-1.05,0),u.add(C);const k=new St(.3,32,32),z=new A(k,S);z.scale.set(1,.72,1.5),z.position.set(-.4,-1.45,.17),u.add(z);const H=new A(k,O);H.scale.set(1,.72,1.5),H.position.set(.4,-1.45,.17),u.add(H);const ht=new St(.44,32,32),ut=new A(ht,E);ut.position.set(-.15,-.45,-.4),u.add(ut);const pt=new A(ht,M);pt.position.set(.15,-.45,-.4),u.add(pt);const Tt=new St(.18,32,32),dt=new A(Tt,E);dt.position.set(0,-.35,-.8),u.add(dt),new Pi().load("https://threejs.org/examples/fonts/helvetiker_bold.typeface.json",function(_t){const nt=new ze("X",{font:_t,size:.2,depth:.05});new An({color:0});const et=new A(nt,E);et.position.set(-.3,.99,.53),et.rotation.x=ee.degToRad(-5),et.rotation.y=ee.degToRad(-15),u.add(et);const wt=new ze("O",{font:_t,size:.2,depth:.05});new An({color:0});const Mt=new A(wt,P);Mt.position.set(.14,.99,.53),Mt.rotation.y=ee.degToRad(12),Mt.rotation.x=ee.degToRad(-5),u.add(Mt);const Bt=new ze("POP",{font:_t,size:1,height:.5,curveSegments:12,bevelEnabled:!0,bevelThickness:.1,bevelSize:.1,bevelSegments:5}),Yt=new Lt({color:16716947,metalness:.3,roughness:.6,clearcoat:.2});new Lt({color:16766720,metalness:.3,roughness:.6,clearcoat:.2});const Qt=new Lt({color:16766720,metalness:.3,roughness:.6,clearcoat:.2}),Jt=new Lt({color:16753920,metalness:.3,roughness:.6,clearcoat:.2}),ne=new A(Bt,Yt);ne.scale.set(.15,.15,.15),ne.position.set(.03,1.16,.1),ne.rotateZ(-25),u.add(ne);const ue=new A(Bt,I);ue.scale.set(.14,.14,.14),ue.rotateZ(45),ue.position.set(.2,-.7,.3),u.add(ue);const _e=new A(Bt,Qt);_e.scale.set(.14,.14,.14),_e.rotateZ(45),_e.rotateY(45),_e.position.set(.3,.7,.3),u.add(_e);const ye=new A(Bt,Qt);ye.scale.set(.15,.15,.15),ye.rotateZ(45),ye.rotateY(45),ye.position.set(.35,-1.5,.3),u.add(ye);const me=new A(Bt,Jt);me.scale.set(.17,.17,.17),me.rotateZ(45),me.rotateY(15),me.position.set(.35,1,.3),u.add(me)}),dt.renderOrder=1,u.scale.set(1.35,1.35,1.35),c.add(u),u.position.set(t.bodyPosition.x,t.bodyPosition.y,t.bodyPosition.z),l.position.set(t.bodyPosition.x,1,t.cameraPosition),l.lookAt(t.bodyPosition.x,0,0),l.position.z=4;const Pt=()=>{u.rotation.y,u.rotation.x},Dt=()=>{s.value=!0,o.value=!1,r.value=!1},Et=()=>{s.value=!1,o.value=!0,r.value=!1},Ht=()=>{s.value=!1,o.value=!1,Pt()},Ut=_t=>{const nt=window.innerWidth/2;_t>nt?Dt():Et(),Pt()},kt=_t=>{clearTimeout(i),Ht(),r.value=!0;const nt={x:_t.clientX/window.innerWidth*2-1,y:-(_t.clientY/window.innerHeight)*2+1};if(r.value){const et=nt.x*Math.PI*.2,wt=nt.y*Math.PI*.2;u.rotation.y=et,u.rotation.x=wt}i=setTimeout(()=>{r.value=!1,Ut(_t.clientX)},500)};window.addEventListener("mousemove",kt);const B=_t=>{if(r.value){const nt={x:_t.clientX/window.innerWidth*2-1,y:-(_t.clientY/window.innerHeight)*2+1},et=nt.x*Math.PI*.2,wt=nt.y*Math.PI*.2;u.rotation.y=et,u.rotation.x=wt}};window.addEventListener("mousemove",B),a(),Ge(()=>t.bodyPosition,_t=>{u.position.set(_t.x,_t.y,_t.z)}),Ge(()=>t.cameraPosition,_t=>{l.position.set(t.bodyPosition.x,1,_t),l.lookAt(t.bodyPosition.x,0,0)}),window.addEventListener("resize",()=>{l.aspect=window.innerWidth/window.innerHeight,l.updateProjectionMatrix(),h.setSize(window.innerWidth,window.innerHeight)})}}),(a,c)=>(ui(),hi("div",{ref_key:"threeCanvas",ref:e,class:zn(n.background?"no-bg":"three-canvas")},null,2))}}),v1=di(_1,[["__scopeId","data-v-8cfea564"]]),x1={class:"pixel-controls"},y1={class:"side-buttons"},M1=Gn({__name:"PopArtBear3",props:{background:{type:Boolean,default:!1},cameraPosition:{type:Number,default:5},bodyPosition:{type:Object,default:()=>({x:0,y:0,z:0})}},setup(n){const t=n,e=Kt(null);let i=Kt(!1),s=Kt(!1),o=Kt(!1),r=Kt(!1);$n(()=>{if(e.value){let d=function(){requestAnimationFrame(d),i.value&&(f.rotation.y+=.03),s.value&&(f.rotation.y-=.03),o.value&&(f.rotation.x-=.03),r.value&&(f.rotation.x+=.03);const et=_t.getElapsedTime();B.forEach((wt,Mt)=>{const Bt=.2+Math.sin(et*3+nt[Mt])*.1;wt.scale.set(Bt,Bt,Bt)}),y.render(p,_)};const p=new Yn,_=new Be(75,window.innerWidth/window.innerHeight,.1,1e3),y=new qn({antialias:!0,alpha:!0});y.setSize(window.innerWidth,window.innerHeight),e.value.appendChild(y.domElement);const f=new qt,m=new qt;p.add(m);const E=new Ri(16777215,2);p.add(E);const M=new Ai(16777215,4);M.position.set(5,5,5),p.add(M);const S=new Ti(16777215,5,50);S.position.set(0,2,4),p.add(S);const O=new $i,I=O.load("/3d-bear-arts/assets/pop6.jpg"),P=O.load("/3d-bear-arts/assets/pop7.jpg");I.wrapS=I.wrapT=Xe,P.wrapS=P.wrapT=Xe,P.repeat.set(2,2);const U=new Lt({color:16738740,map:P,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9}),Q=new Lt({color:16766720,metalness:.3,roughness:.1,clearcoat:1,clearcoatRoughness:.05,transparent:!0,opacity:.4,transmission:.8,ior:1.45,reflectivity:.9,envMapIntensity:1,side:de}),x=new Lt({color:16766720,map:I,metalness:.3,roughness:.5}),b=new Lt({color:16738740,metalness:.3,roughness:.1,clearcoat:1,clearcoatRoughness:.05,transparent:!0,opacity:.5,transmission:.8,ior:1.45,reflectivity:.9,envMapIntensity:1,side:de}),j=new Lt({color:9055202,map:I,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9}),V=new Lt({color:65535,map:I,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9}),Z=new Lt({color:65535,metalness:.3,roughness:.1,clearcoat:1,clearcoatRoughness:.05,transparent:!0,opacity:.4,transmission:.8,ior:1.45,reflectivity:.9,envMapIntensity:1,side:de}),at=new St(1,32,32,0,Math.PI),W=new A(at,Q),J=new A(at,U);W.scale.set(.85,.85,.8),J.scale.set(.85,.85,.8),W.position.y=-.2,J.position.y=-.2,W.rotation.y=Math.PI/2,J.rotation.y=Math.PI*1.5;const G=new ge(1,32),mt=new A(G,U);mt.scale.set(.85,.85,.8),mt.position.set(0,-.2,0),mt.rotation.y=Math.PI/2;const yt=new qt;yt.add(W),yt.add(J),yt.add(mt),f.add(yt);const gt=new St(.6,32,32,0,Math.PI),It=new A(gt,x);It.scale.set(1,.95,.95),It.position.set(0,1,0),It.rotation.y=Math.PI*1.5;const zt=new A(gt,b);zt.scale.set(1,.95,.95),zt.position.set(0,1,0),zt.rotation.y=Math.PI/2;const rt=new ge(.6,32),ft=new A(rt,x);ft.position.set(0,1,0),ft.rotation.y=Math.PI/2,ft.scale.set(1,.95,.95);const vt=new qt;vt.add(It),vt.add(zt),vt.add(ft),f.add(vt);const F=new St(.25,32,32),ct=new A(F,U);ct.position.set(-.45,1.35,-.1),f.add(ct);const it=new A(F,Q);it.position.set(.45,1.35,-.1),f.add(it);const lt=new St(.25,32,32,Math.PI/2,Math.PI),bt=new A(lt,x);bt.scale.set(1.1,.6,.8),bt.position.set(0,.84,.5),bt.rotation.y=Math.PI;const tt=new St(.25,32,32,Math.PI/2,Math.PI),g=new A(tt,b);g.scale.set(1.1,.6,.8),g.position.set(0,.84,.5),g.rotation.y=0;const T=new ge(.25,32),L=new A(T,x);L.scale.set(.8,.6,.8),L.position.set(0,.84,.5),L.rotation.y=Math.PI/2;const N=new qt;N.add(bt),N.add(g),N.add(L),f.add(N);const D=new Rn;D.moveTo(0,0),D.bezierCurveTo(0,-.3,-.6,-.3,-.6,0),D.bezierCurveTo(-.6,.3,0,.6,0,1),D.bezierCurveTo(0,.6,.6,.3,.6,0),D.bezierCurveTo(.6,-.3,0,-.3,0,0);const X={depth:.4,bevelEnabled:!0,bevelSegments:2,steps:2,bevelSize:.1,bevelThickness:.1},K=new Bn(D,X),w=new A(K,x);w.scale.set(.5,.5,.5),w.position.set(.3,0,0),w.rotation.y=Math.PI,w.rotation.x=Math.PI,f.add(w);const v=new A(K,V);v.scale.set(.2,.2,.25),v.position.set(.35,-.3,.4),v.rotation.y=Math.PI,v.rotation.x=Math.PI,f.add(v);const C=new A(K,U);C.scale.set(.25,.25,.27),C.position.set(.38,.3,-.2),C.rotation.y=Math.PI,C.rotation.x=Math.PI,f.add(C);const k=new St(.35,32,32),z=new A(k,V);z.scale.set(.75,1.25,.65),z.position.set(-.7,-.15,.2),f.add(z);const H=new A(k,Z);H.scale.set(.75,1.25,.65),H.position.set(.7,-.15,.2),f.add(H);const ht=new le(.2,.22,.6,32),ut=new A(ht,x);ut.position.set(-.4,-1.05,0),f.add(ut);const pt=new A(ht,b);pt.position.set(.4,-1.05,0),f.add(pt);const Tt=new St(.3,32,32),dt=new A(Tt,x);dt.scale.set(1,.72,1.5),dt.position.set(-.4,-1.45,.17),f.add(dt);const xt=new A(Tt,b);xt.scale.set(1,.72,1.5),xt.position.set(.4,-1.45,.17),f.add(xt);const Pt=new St(.44,32,32),Dt=new A(Pt,U);Dt.position.set(-.15,-.45,-.4),f.add(Dt);const Et=new A(Pt,Q);Et.position.set(.15,-.45,-.4),f.add(Et);const Ht=new St(.18,32,32),Ut=new A(Ht,U);Ut.position.set(0,-.35,-.8),f.add(Ut),new Pi().load("https://threejs.org/examples/fonts/helvetiker_bold.typeface.json",function(et){const wt=new ze("X",{font:et,size:.2,depth:.05}),Mt=new A(wt,U);Mt.position.set(-.3,.99,.53),Mt.rotation.x=ee.degToRad(-5),Mt.rotation.y=ee.degToRad(-15),f.add(Mt);const Bt=new ze("O",{font:et,size:.2,depth:.05}),Yt=new A(Bt,V);Yt.position.set(.14,.99,.53),Yt.rotation.y=ee.degToRad(12),Yt.rotation.x=ee.degToRad(-5),f.add(Yt);const Qt=new ze("POP",{font:et,size:1,height:.5,curveSegments:12,bevelEnabled:!0,bevelThickness:.1,bevelSize:.1,bevelSegments:5});new ze("🐻",{font:et,size:1,height:.5,curveSegments:12,bevelEnabled:!0,bevelThickness:.1,bevelSize:.1,bevelSegments:5});const Jt=new ze("BAO      BEAR",{font:et,size:2,height:.5,curveSegments:12,bevelEnabled:!0,bevelThickness:.1,bevelSize:.1,bevelSegments:3}),ne=new Lt({color:16716947,metalness:.3,roughness:.6,clearcoat:.2});new Lt({color:16766720,metalness:.3,roughness:.6,clearcoat:.2});const ue=new Lt({color:16766720,metalness:.3,roughness:.6,clearcoat:.2}),_e=new Lt({color:16753920,metalness:.3,roughness:.6,clearcoat:.2}),ye=new A(Qt,ne);ye.scale.set(.15,.15,.15),ye.position.set(.02,1.16,.1),ye.rotateZ(-25),f.add(ye);const me=new A(Qt,j);me.scale.set(.14,.14,.14),me.rotateZ(45),me.position.set(.2,-.7,.3),f.add(me);const Te=new A(Qt,ue);Te.scale.set(.14,.14,.14),Te.rotateZ(45),Te.rotateY(45),Te.position.set(.3,.7,.3),f.add(Te);const ve=new A(Qt,ue);ve.scale.set(.15,.15,.15),ve.rotateZ(45),ve.rotateY(45),ve.position.set(.35,-1.5,.3),f.add(ve);const Ve=new A(Qt,_e);Ve.scale.set(.17,.17,.17),Ve.rotateZ(45),Ve.rotateY(15),Ve.position.set(.35,1,.3),f.add(Ve);const Re=new A(Jt,ne);Re.scale.set(.7,.7,.7),Re.position.set(-6,0,-3),m.add(Re)}),Ut.renderOrder=1,f.scale.set(1.4,1.4,1.4),p.add(f),f.position.set(t.bodyPosition.x,t.bodyPosition.y,t.bodyPosition.z),_.position.set(t.bodyPosition.x,1,t.cameraPosition),_.lookAt(t.bodyPosition.x,0,0),_.position.z=4,f.rotation.x=.1;const B=[w,v,C],_t=new Cp,nt=[0,Math.PI/2,Math.PI,0,Math.PI/3];d(),Ge(()=>t.bodyPosition,et=>{f.position.set(et.x,et.y,et.z)}),Ge(()=>t.cameraPosition,et=>{_.position.set(t.bodyPosition.x,1,et),_.lookAt(t.bodyPosition.x,0,0)}),window.addEventListener("resize",()=>{_.aspect=window.innerWidth/window.innerHeight,_.updateProjectionMatrix(),y.setSize(window.innerWidth,window.innerHeight)})}});function a(){s.value=!0}function c(){i.value=!0}function l(){o.value=!0}function h(){r.value=!0}function u(){s.value=!1,i.value=!1,o.value=!1,r.value=!1}return(d,p)=>(ui(),hi(dn,null,[Vt("div",{ref_key:"threeCanvas",ref:e,class:zn(n.background?"no-bg":"three-canvas")},null,2),Vt("div",x1,[Vt("button",{class:"pixel-btn up",onMousedown:l,onMouseup:u},"UP",32),Vt("div",y1,[Vt("button",{class:"pixel-btn left",onMousedown:a,onMouseup:u},"LEFT",32),Vt("button",{class:"pixel-btn right",onMousedown:c,onMouseup:u},"RIGHT",32)]),Vt("button",{class:"pixel-btn down",onMousedown:h,onMouseup:u},"DOWN",32)])],64))}}),w1=di(M1,[["__scopeId","data-v-cb52c927"]]),S1={class:"pixel-controls"},b1={class:"side-buttons"},E1=Gn({__name:"MetalMachineBear",props:{background:{type:Boolean,default:!1},cameraPosition:{type:Number,default:5},bodyPosition:{type:Object,default:()=>({x:0,y:0,z:0})}},setup(n){const t=n,e=Kt(null);let i=Kt(!1),s=Kt(!1),o=Kt(!1),r=Kt(!1);$n(()=>{if(e.value){let d=function(ue,_e){const ye=new le(kt,kt,B,32);ye.rotateX(Math.PI/2);const me=new A(ye,ue),Te=new qt;for(let Ve=0;Ve<_t;Ve++){const Re=Ve/_t*Math.PI*2,At=new ri(nt,et,wt),ie=new A(At,ue);ie.position.set((kt+wt/26)*Math.cos(Re),(kt+wt/26)*Math.sin(Re),0),ie.rotation.z=Re,Te.add(ie)}const ve=new qt;return ve.add(me),ve.add(Te),ve.position.set(_e.x,_e.y,_e.z),ve},p=function(){requestAnimationFrame(p),i.value&&(m.rotation.y+=.03),s.value&&(m.rotation.y-=.03),o.value&&(m.rotation.x-=.03),r.value&&(m.rotation.x+=.03),Mt.rotation.z-=.02,Bt.rotation.z+=.03,Yt.rotation.z+=.02,Qt.rotation.z+=.02,Jt.rotation.z-=.03,ne.rotation.y+=.04,f.render(_,y)};const _=new Yn,y=new Be(75,window.innerWidth/window.innerHeight,.1,1e3),f=new qn({antialias:!0,alpha:!0});f.setSize(window.innerWidth,window.innerHeight),e.value.appendChild(f.domElement);const m=new qt,E=new qt;_.add(E);const M=new Ri(16777215,2);_.add(M);const S=new Ai(16777215,4);S.position.set(5,5,5),_.add(S);const O=new Ti(16777215,5,50);O.position.set(0,2,4),_.add(O);const I=new $i,P=I.load("/3d-bear-arts/assets/metal.jpg"),U=I.load("/3d-bear-arts/assets/pop7.jpg"),Q=I.load("/3d-bear-arts/assets/gear.jpg");P.wrapS=P.wrapT=Xe,U.wrapS=U.wrapT=Xe,U.repeat.set(2,2);const x=new Lt({color:13882323,metalness:.9,roughness:.2,clearcoat:.5,clearcoatRoughness:.1,map:P});Q.mapping=lr;const b=new Lt({color:"#d3d3d3",metalness:1,roughness:.25,map:P,envMap:Q,clearcoat:.7,clearcoatRoughness:.3}),j=new Lt({color:"#C0C0C0",metalness:1,roughness:.25,envMap:Q,clearcoat:.7,clearcoatRoughness:.3}),V=new Lt({color:"#C0C0C0",metalness:1,roughness:.25,map:P,envMap:Q,transparent:!0,opacity:.8,clearcoat:.7,clearcoatRoughness:.3,transmission:.8,ior:1.45}),Z=new Lt({color:"#C0C0C0",metalness:1,roughness:.5,map:P,envMap:Q,transparent:!0,opacity:.23,clearcoat:.7,clearcoatRoughness:.3,transmission:.8,ior:1.45}),at=new Lt({color:13882323,metalness:1,roughness:.25,clearcoat:1,clearcoatRoughness:.05,reflectivity:.9,envMapIntensity:1,side:de});new Lt({color:"#C0C0C0",metalness:1,roughness:.2,transparent:!0,opacity:.4,clearcoat:.7,clearcoatRoughness:.3,transmission:.8,ior:1.45});const W=new Lt({color:"#d3d3d3",metalness:1,roughness:.2,map:Q,envMap:Q,clearcoat:.7,clearcoatRoughness:.3});new Lt({color:12632256,metalness:.9,roughness:.2,clearcoat:.5,clearcoatRoughness:.1,map:Q}),new Lt({color:12632256,metalness:1,roughness:.3,clearcoat:.5,clearcoatRoughness:.1,map:P,transparent:!0,opacity:.3});const J=new St(1,32,32,0,Math.PI),G=new A(J,Z),mt=new A(J,b);G.scale.set(.85,.85,.8),mt.scale.set(.85,.85,.8),G.position.y=-.2,mt.position.y=-.2,G.rotation.y=Math.PI/2,mt.rotation.y=Math.PI*1.5;const yt=new ge(1,32),gt=new A(yt,V);gt.scale.set(.85,.85,.8),gt.position.set(0,-.2,0),gt.rotation.y=Math.PI/2;const It=new qt;It.add(G),It.add(mt),It.add(gt),m.add(It);const zt=new St(.6,32,32,0,Math.PI),rt=new A(zt,b);rt.scale.set(1,.95,.95),rt.position.set(0,1,0),rt.rotation.y=Math.PI*1.5;const ft=new A(zt,Z);ft.scale.set(1,.95,.95),ft.position.set(0,1,0),ft.rotation.y=Math.PI/2;const vt=new ge(.6,32),F=new A(vt,V);F.position.set(0,1,0),F.rotation.y=Math.PI/2,F.scale.set(1,.95,.95);const ct=new qt;ct.add(rt),ct.add(ft),ct.add(F),m.add(ct);const it=new St(.25,32,32),lt=new A(it,b);lt.position.set(-.45,1.35,-.1),m.add(lt);const bt=new A(it,V);bt.position.set(.45,1.35,-.1),m.add(bt);const tt=new St(.25,32,32,Math.PI/2,Math.PI),g=new A(tt,b);g.scale.set(1.1,.6,.8),g.position.set(0,.84,.5),g.rotation.y=Math.PI;const T=new St(.25,32,32,Math.PI/2,Math.PI),L=new A(T,V);L.scale.set(1.1,.6,.8),L.position.set(0,.84,.5),L.rotation.y=0;const N=new ge(.25,32),D=new A(N,at);D.scale.set(.8,.6,.8),D.position.set(0,.84,.5),D.rotation.y=Math.PI/2;const X=new qt;X.add(g),X.add(L),X.add(D),m.add(X);const K=new Rn;K.moveTo(0,0),K.bezierCurveTo(0,-.3,-.6,-.3,-.6,0),K.bezierCurveTo(-.6,.3,0,.6,0,1),K.bezierCurveTo(0,.6,.6,.3,.6,0),K.bezierCurveTo(.6,-.3,0,-.3,0,0);const w={depth:.4,bevelEnabled:!0,bevelSegments:2,steps:2,bevelSize:.1,bevelThickness:.1},v=new Bn(K,w),C=new St(.35,32,32),k=new A(C,b);k.scale.set(.75,1.25,.65),k.position.set(-.7,-.15,.2),m.add(k);const z=new A(C,V);z.scale.set(.75,1.25,.65),z.position.set(.7,-.15,.2),m.add(z);const H=new le(.2,.22,.6,32),ht=new A(H,b);ht.position.set(-.4,-1.05,0),m.add(ht);const ut=new A(H,V);ut.position.set(.4,-1.05,0),m.add(ut);const pt=new St(.3,32,32),Tt=new A(pt,b);Tt.scale.set(1,.72,1.5),Tt.position.set(-.4,-1.45,.17),m.add(Tt);const dt=new A(pt,V);dt.scale.set(1,.72,1.5),dt.position.set(.4,-1.45,.17),m.add(dt);const xt=new St(.44,32,32),Pt=new A(xt,b);Pt.position.set(-.15,-.45,-.4),m.add(Pt);const Dt=new A(xt,Z);Dt.position.set(.15,-.45,-.4),m.add(Dt);const Et=new St(.18,32,32),Ht=new A(Et,b);Ht.position.set(0,-.35,-.8),m.add(Ht),new Pi().load("https://threejs.org/examples/fonts/helvetiker_bold.typeface.json",function(ue){const _e=new ze("X",{font:ue,size:.2,depth:.05});new An({color:0});const ye=new A(_e,x);ye.position.set(-.3,.99,.53),ye.rotation.x=ee.degToRad(-5),ye.rotation.y=ee.degToRad(-15),m.add(ye);const me=new ze("O",{font:ue,size:.2,depth:.05});new An({color:0});const Te=new A(me,x);Te.position.set(.14,.99,.53),Te.rotation.y=ee.degToRad(12),Te.rotation.x=ee.degToRad(-5),m.add(Te)}),Ht.renderOrder=1;const kt=1.2,B=.5,_t=8,nt=.7,et=.3,wt=.5,Mt=d(W,{x:-2,y:0,z:0}),Bt=d(W,{x:0,y:0,z:0}),Yt=d(W,{x:2,y:0,z:0}),Qt=d(W,{x:2,y:0,z:0}),Jt=d(W,{x:2,y:-2,z:0}),ne=new A(v,j);ne.scale.set(.3,.3,.3),ne.position.set(.25,1.1,0),ne.rotation.y=Math.PI,ne.rotation.x=Math.PI,m.add(ne),Mt.position.set(.35,0,0),Bt.position.set(.25,-.3,.4),Yt.position.set(.3,.3,-.2),Qt.position.set(.25,.17,.4),Jt.position.set(.5,-.3,.45),Mt.scale.set(.2,.2,.2),Bt.scale.set(.18,.18,.18),Yt.scale.set(.15,.15,.15),Qt.scale.set(.17,.17,.17),Jt.scale.set(.15,.15,.15),Bt.rotation.z=Math.PI/4,Yt.rotation.z=-Math.PI/4,Qt.rotation.y=-Math.PI/2,Jt.rotation.y=-Math.PI/2,m.add(Mt),m.add(Bt),m.add(Yt),m.add(Qt),m.add(Jt),m.rotation.x=.1,m.scale.set(1.4,1.4,1.4),_.add(m),m.position.set(t.bodyPosition.x,t.bodyPosition.y,t.bodyPosition.z),y.position.set(t.bodyPosition.x,1,t.cameraPosition),y.lookAt(t.bodyPosition.x,0,0),y.position.z=4,p(),Ge(()=>t.bodyPosition,ue=>{m.position.set(ue.x,ue.y,ue.z)}),Ge(()=>t.cameraPosition,ue=>{y.position.set(t.bodyPosition.x,1,ue),y.lookAt(t.bodyPosition.x,0,0)}),window.addEventListener("resize",()=>{y.aspect=window.innerWidth/window.innerHeight,y.updateProjectionMatrix(),f.setSize(window.innerWidth,window.innerHeight)})}});function a(){s.value=!0}function c(){i.value=!0}function l(){o.value=!0}function h(){r.value=!0}function u(){s.value=!1,i.value=!1,o.value=!1,r.value=!1}return(d,p)=>(ui(),hi(dn,null,[Vt("div",{ref_key:"threeCanvas",ref:e,class:zn(n.background?"no-bg":"three-canvas")},null,2),Vt("div",S1,[Vt("button",{class:"pixel-btn up",onMousedown:l,onMouseup:u},"UP",32),Vt("div",b1,[Vt("button",{class:"pixel-btn left",onMousedown:a,onMouseup:u},"LEFT",32),Vt("button",{class:"pixel-btn right",onMousedown:c,onMouseup:u},"RIGHT",32)]),Vt("button",{class:"pixel-btn down",onMousedown:h,onMouseup:u},"DOWN",32)])],64))}}),T1=di(E1,[["__scopeId","data-v-9a57b6d8"]]),A1={class:"pixel-controls"},R1={class:"side-buttons"},P1=Gn({__name:"WaterBear",props:{background:{type:Boolean,default:!1},cameraPosition:{type:Number,default:5},bodyPosition:{type:Object,default:()=>({x:0,y:0,z:0})}},setup(n){const t=n,e=Kt(null);let i=Kt(!1),s=Kt(!1),o=Kt(!1),r=Kt(!1);$n(()=>{if(e.value){let d=function(){requestAnimationFrame(d),i.value&&(f.rotation.y+=.03),s.value&&(f.rotation.y-=.03),o.value&&(f.rotation.x-=.03),r.value&&(f.rotation.x+=.03),y.render(p,_)};const p=new Yn,_=new Be(75,window.innerWidth/window.innerHeight,.1,1e3),y=new qn({antialias:!0,alpha:!0});y.setSize(window.innerWidth,window.innerHeight),e.value.appendChild(y.domElement);const f=new qt,m=new qt;p.add(m);const E=new Ri(16777215,2);p.add(E);const M=new Ai(16777215,4);M.position.set(5,5,5),p.add(M);const S=new Ti(16777215,5,50);S.position.set(0,2,4),p.add(S);const O=new $i,I=O.load("/3d-bear-arts/assets/sun.jpg"),P=O.load("/3d-bear-arts/assets/gear.jpg"),U=O.load("/3d-bear-arts/assets/underwater.jpg"),Q=O.load("/3d-bear-arts/assets/beach.jpg");U.wrapS=U.wrapT=Xe,Q.wrapS=Q.wrapT=Xe,Q.repeat.set(.8,1),P.mapping=lr,I.wrapS=I.wrapT=Xe;const x=new Lt({color:11592447,metalness:.05,roughness:.4,clearcoat:.9,clearcoatRoughness:.2,reflectivity:.6,map:Q,envMapIntensity:.8,side:de,transparent:!0,opacity:.9}),b=new Lt({color:11592447,metalness:.05,roughness:.5,clearcoat:.7,clearcoatRoughness:.25,reflectivity:.4,map:Q,envMapIntensity:.6,side:de,transparent:!0,opacity:.9,transmission:.5,ior:1.33,depthWrite:!1,depthTest:!0});new Lt({color:11592447,metalness:.05,roughness:.4,clearcoat:.9,clearcoatRoughness:.2,reflectivity:.6,envMapIntensity:.8,map:Q,side:de,transparent:!0,opacity:.9});const j=new Lt({color:8374441,metalness:1,roughness:.25,envMap:P,clearcoat:.7,clearcoatRoughness:.3}),V=new Lt({color:11592447,metalness:.1,roughness:.3,transparent:!0,opacity:.5,clearcoat:.6,clearcoatRoughness:.25,transmission:.6,ior:1.4,depthWrite:!1,depthTest:!0,side:de}),Z=new Lt({color:11592447,metalness:.1,roughness:.3,transparent:!0,opacity:.5,map:Q,clearcoat:.1,clearcoatRoughness:.25,transmission:.6,ior:1.4}),at=new Lt({color:"#a4d0f5",metalness:0,roughness:.8,map:I,clearcoat:.1,clearcoatRoughness:.7,transmission:.9,opacity:.8,transparent:!0}),W=new Lt({color:"#a4d0f5",metalness:0,roughness:.85,map:Q,clearcoat:.1,clearcoatRoughness:.7,transmission:.9,opacity:.6,transparent:!0}),J=new St(1,32,32,0,Math.PI),G=new A(J,V),mt=new A(J,b);G.scale.set(.85,.85,.8),mt.scale.set(.85,.85,.8),G.position.y=-.2,mt.position.y=-.2,G.rotation.y=Math.PI/2,mt.rotation.y=Math.PI*1.5;const yt=new ge(1,32),gt=new A(yt,W);gt.scale.set(.85,.85,.8),gt.position.set(0,-.2,0),gt.rotation.y=Math.PI/2;const It=new qt;It.add(G),It.add(mt),It.add(gt);const zt=new St(.6,32,32,0,Math.PI*2,0,Math.PI/2),rt=new Lt({color:6935271,metalness:.1,roughness:.2,clearcoat:1,clearcoatRoughness:.1,transparent:!0,opacity:.9,transmission:.9,ior:1.33,reflectivity:.8,envMapIntensity:1}),ft=new A(zt,rt);ft.position.set(0,-.2,0),ft.rotation.x=Math.PI,ft.scale.set(1.25,1.25,1.25),It.add(ft);const vt=new Lt({color:49151,metalness:.1,roughness:.5,clearcoat:.7,clearcoatRoughness:.25,side:de,transparent:!0,opacity:.7,depthWrite:!1}),F=new A(yt,vt);F.scale.set(.7,.7,.7),F.position.set(0,-.3,0),F.rotation.x=Math.PI/2,F.renderOrder=1,It.add(F),f.add(It);const ct=new St(.6,32,32,0,Math.PI),it=new A(ct,x);it.scale.set(1,.95,.95),it.position.set(0,1,0),it.rotation.y=Math.PI*1.5;const lt=new A(ct,Z);lt.scale.set(1,.95,.95),lt.position.set(0,1,0),lt.rotation.y=Math.PI/2;const bt=new ge(.6,32),tt=new A(bt,at);tt.position.set(0,1,0),tt.rotation.y=Math.PI/2,tt.scale.set(1,.95,.95);const g=new qt;g.add(it),g.add(lt),g.add(tt),f.add(g);const T=new St(.25,32,32),L=new A(T,x);L.position.set(-.45,1.35,-.1),f.add(L);const N=new A(T,Z);N.position.set(.45,1.35,-.1),f.add(N);const D=new St(.25,32,32,Math.PI/2,Math.PI),X=new A(D,x);X.scale.set(1.1,.6,.8),X.position.set(0,.84,.5),X.rotation.y=Math.PI;const K=new St(.25,32,32,Math.PI/2,Math.PI),w=new A(K,Z);w.scale.set(1.1,.6,.8),w.position.set(0,.84,.5),w.rotation.y=0;const v=new ge(.25,32),C=new A(v,at);C.scale.set(.8,.6,.8),C.position.set(0,.84,.5),C.rotation.y=Math.PI/2;const k=new qt;k.add(X),k.add(w),k.add(C),f.add(k);const z=new Rn;z.moveTo(0,0),z.bezierCurveTo(0,-.3,-.6,-.3,-.6,0),z.bezierCurveTo(-.6,.3,0,.6,0,1),z.bezierCurveTo(0,.6,.6,.3,.6,0),z.bezierCurveTo(.6,-.3,0,-.3,0,0);const H={depth:.4,bevelEnabled:!0,bevelSegments:2,steps:2,bevelSize:.1,bevelThickness:.1},ht=new Bn(z,H),ut=new St(.35,32,32),pt=new A(ut,x);pt.scale.set(.75,1.25,.65),pt.position.set(-.7,-.15,.2),f.add(pt);const Tt=new A(ut,Z);Tt.scale.set(.75,1.25,.65),Tt.position.set(.7,-.15,.2),f.add(Tt);const dt=new le(.2,.22,.6,32),xt=new A(dt,x);xt.position.set(-.4,-1.05,0),f.add(xt);const Pt=new A(dt,Z);Pt.position.set(.4,-1.05,0),f.add(Pt);const Dt=new St(.3,32,32),Et=new A(Dt,x);Et.scale.set(1,.72,1.5),Et.position.set(-.4,-1.45,.17),f.add(Et);const Ht=new A(Dt,Z);Ht.scale.set(1,.72,1.5),Ht.position.set(.4,-1.45,.17),f.add(Ht);const Ut=new St(.44,32,32),kt=new A(Ut,x);kt.position.set(-.15,-.45,-.4),f.add(kt);const B=new A(Ut,Z);B.position.set(.15,-.45,-.4),f.add(B);const _t=new St(.18,32,32),nt=new A(_t,b);nt.position.set(0,-.35,-.8),f.add(nt),new Pi().load("https://threejs.org/examples/fonts/helvetiker_bold.typeface.json",function(Mt){const Bt=new ze("X",{font:Mt,size:.2,depth:.05});new An({color:0});const Yt=new A(Bt,x);Yt.position.set(-.3,.99,.53),Yt.rotation.x=ee.degToRad(-5),Yt.rotation.y=ee.degToRad(-15),f.add(Yt);const Qt=new ze("O",{font:Mt,size:.2,depth:.05});new An({color:0});const Jt=new A(Qt,b);Jt.position.set(.14,.99,.53),Jt.rotation.y=ee.degToRad(12),Jt.rotation.x=ee.degToRad(-5),f.add(Jt)}),nt.renderOrder=1,f.rotation.x=.1;const wt=new A(ht,j);wt.scale.set(.3,.3,.3),wt.position.set(.25,1.1,0),wt.rotation.y=Math.PI,wt.rotation.x=Math.PI,f.add(wt),f.scale.set(1.4,1.4,1.4),p.add(f),f.position.set(t.bodyPosition.x,t.bodyPosition.y,t.bodyPosition.z),_.position.set(t.bodyPosition.x,1,t.cameraPosition),_.lookAt(t.bodyPosition.x,0,0),_.position.z=4,d(),Ge(()=>t.bodyPosition,Mt=>{f.position.set(Mt.x,Mt.y,Mt.z)}),Ge(()=>t.cameraPosition,Mt=>{_.position.set(t.bodyPosition.x,1,Mt),_.lookAt(t.bodyPosition.x,0,0)}),window.addEventListener("resize",()=>{_.aspect=window.innerWidth/window.innerHeight,_.updateProjectionMatrix(),y.setSize(window.innerWidth,window.innerHeight)})}});function a(){s.value=!0}function c(){i.value=!0}function l(){o.value=!0}function h(){r.value=!0}function u(){s.value=!1,i.value=!1,o.value=!1,r.value=!1}return(d,p)=>(ui(),hi(dn,null,[Vt("div",{ref_key:"threeCanvas",ref:e,class:zn(n.background?"no-bg":"three-canvas")},null,2),Vt("div",A1,[Vt("button",{class:"pixel-btn up",onMousedown:l,onMouseup:u},"UP",32),Vt("div",R1,[Vt("button",{class:"pixel-btn left",onMousedown:a,onMouseup:u},"LEFT",32),Vt("button",{class:"pixel-btn right",onMousedown:c,onMouseup:u},"RIGHT",32)]),Vt("button",{class:"pixel-btn down",onMousedown:h,onMouseup:u},"DOWN",32)])],64))}}),C1=di(P1,[["__scopeId","data-v-08c607ba"]]),I1={class:"pixel-controls"},L1={class:"side-buttons"},D1={class:"directional-buttons"},U1={class:"horizontal-buttons"},N1={class:"directional-buttons-woman"},F1={class:"horizontal-buttons-woman"},O1={class:"directional-buttons-kid"},B1={class:"horizontal-buttons-kid"},Qr=.1,ta=.05,ea=.08,z1=Gn({__name:"Water",props:{background:{type:Boolean,default:!1},cameraPosition:{type:Number,default:5},bodyPosition:{type:Object,default:()=>({x:0,y:0,z:0})}},setup(n){const t=n,e=Kt(null);let i=Kt(!1),s=Kt(!1),o=Kt(!1),r=Kt(!1);const a=Xo(null),c=Kt(!1),l=Kt(!1),h=Kt(!1),u=Kt(!1),d=Xo(null),p=Xo(null),_=Kt(!1),y=Kt(!1),f=Kt(!1),m=Kt(!1),E=Kt(!1),M=Kt(!1),S=Kt(!1),O=Kt(!1),I=new qn({antialias:!0});I.setSize(window.innerWidth,window.innerHeight),document.body.appendChild(I.domElement);const P=new Yn,U=new Be(75,window.innerWidth/window.innerHeight,.1,1e3);U.position.z=5,$n(()=>{if(e.value){let tt=function(){const Ct=new qt,De=new St(.2,32,32),Oe=new te({color:16767916}),xe=new A(De,Oe);xe.position.set(0,1.5,0),Ct.add(xe);const rn=new St(.21,32,32,0,Math.PI*2,0,Math.PI/2),Me=new te({color:16711680}),Ke=new A(rn,Me);Ke.position.set(0,1.58,0),Ct.add(Ke);const In=new le(.25,.25,.6,32),We=new te({color:16767916}),Sn=new A(In,We);Sn.position.set(0,1,0),Ct.add(Sn);const fi=new le(.26,.26,.3,32),Hn=new te({color:255}),jn=new A(fi,Hn);jn.position.set(0,.65,0),Ct.add(jn);const Kn=new le(.1,.1,.5,32),gn=new te({color:16767916}),kn=new A(Kn,gn);kn.position.set(-.15,.25,0),Ct.add(kn);const Zn=new A(Kn,gn);Zn.position.set(.15,.25,0),Ct.add(Zn);const pi=new le(.08,.08,.5,32),bn=new A(pi,gn);bn.position.set(-.35,1.3,0),bn.rotation.z=Math.PI/4,Ct.add(bn);const En=new A(pi,gn);return En.position.set(.35,1.3,0),En.rotation.z=-Math.PI/4,Ct.add(En),Ct.scale.set(.27,.27,.27),Ct.position.set(-.2,-.1,-.15),Ct},g=function(){const Ct=new qt,De=new St(.18,32,32),Oe=new te({color:16767916}),xe=new A(De,Oe);xe.position.set(0,1.2,.04),Ct.add(xe);const rn=new St(.19,32,32,.4,Math.PI*2,0,Math.PI/2),Me=new le(.18,.18,.4,32),Ke=new te({color:9127187}),In=new A(rn,Ke);In.position.set(0,1.28,0),Ct.add(In);const We=new A(Me,Ke);We.position.set(0,1.1,-.01),Ct.add(We);const Sn=new le(.18,.2,.5,32),fi=new te({color:16767916}),Hn=new A(Sn,fi);Hn.position.set(0,.85,0),Ct.add(Hn);const jn=new St(.08,32,32,0,Math.PI),Kn=new te({color:16738740}),gn=new A(jn,Kn);gn.position.set(-.09,.98,.15),Ct.add(gn);const kn=new A(jn,Kn);kn.position.set(.09,.98,.15),Ct.add(kn);const Zn=new le(.22,.22,.25,32),pi=new te({color:16738740}),bn=new A(Zn,pi);bn.position.set(0,.6,0),Ct.add(bn);const En=new le(.1,.1,.6,32),Ci=new te({color:16767916}),Po=new A(En,Ci);Po.position.set(-.09,.5,.2),Po.rotation.x=Math.PI/2,Ct.add(Po);const Fs=new A(En,Ci);Fs.position.set(.09,.5,.2),Fs.rotation.x=Math.PI/2,Ct.add(Fs);const Tu=new le(.08,.08,.35,32),ka=new A(Tu,Ci);ka.position.set(-.24,.95,.18),ka.rotation.x=Math.PI/2,Ct.add(ka);const Va=new A(Tu,Ci);return Va.position.set(.2,.85,0),Va.rotation.z=Math.PI/20,Ct.add(Va),Ct.scale.set(.27,.27,.27),Ct.position.set(.2,-.15,-.32),Ct},T=function(){const Ct=new qt,De=new St(.2,32,32),Oe=new te({color:16767916}),xe=new A(De,Oe);xe.position.set(0,1.5,0),Ct.add(xe);const rn=new St(.21,32,32,0,Math.PI*2,0,Math.PI/2),Me=new te({color:25600}),Ke=new A(rn,Me);Ke.position.set(0,1.58,0),Ct.add(Ke);const In=new le(.22,.22,.5,32),We=new te({color:16767916}),Sn=new A(In,We);Sn.position.set(0,1,0),Ct.add(Sn);const fi=new le(.23,.23,.3,32),Hn=new te({color:8388736}),jn=new A(fi,Hn);jn.position.set(0,.65,0),Ct.add(jn);const Kn=new le(.1,.1,.5,32),gn=new te({color:16767916}),kn=new A(Kn,gn);kn.position.set(-.15,.3,-.25),kn.rotation.x=Math.PI/6,Ct.add(kn);const Zn=new A(Kn,gn);Zn.position.set(.15,.3,.25),Zn.rotation.x=-Math.PI/6,Ct.add(Zn);const pi=new le(.08,.08,.4,32),bn=new A(pi,gn);bn.position.set(-.28,1,-.2),bn.rotation.x=Math.PI/6,Ct.add(bn);const En=new A(pi,gn);return En.position.set(.28,1.3,.1),En.rotation.z=-Math.PI/8,Ct.add(En),Ct.scale.set(.15,.15,.15),Ct.position.set(.3,-.25,.25),Ct.rotation.x=Math.PI/12,Ct.rotation.y=Math.PI/2,Ct.rotation.z=-Math.PI/3,Ct},L=function(Ct){let De=1,Oe=0;function xe(){requestAnimationFrame(xe),Ct.position.x+=.01*De,Ct.position.x>=.35?(De=-1,Ct.rotation.y=Math.PI):Ct.position.x<=-.35&&(De=1,Ct.rotation.y=0),Oe+=.003,Ct.position.y=-.4+Math.sin(Oe)*.1,K.render(D,X)}xe()},N=function(){requestAnimationFrame(N),i.value&&(w.rotation.y+=.03),s.value&&(w.rotation.y-=.03),o.value&&(w.rotation.x-=.03),r.value&&(w.rotation.x+=.03),ye.uniforms.u_time.value+=.25,ot.rotation.y+=.04,K.render(D,X)};const D=new Yn,X=new Be(75,window.innerWidth/window.innerHeight,.1,1e3),K=new qn({antialias:!0,alpha:!0});K.setSize(window.innerWidth,window.innerHeight),e.value.appendChild(K.domElement);const w=new qt,v=new qt;D.add(v);const C=new Ri(16777215,2);D.add(C);const k=new Ai(16777215,4);k.position.set(5,5,5),D.add(k);const z=new Ti(16777215,5,50);z.position.set(0,2,4),D.add(z);const H=new $i,ht=H.load("/3d-bear-arts/assets/beach.jpg");ht.repeat.set(.8,1);const ut=H.load("/3d-bear-arts/assets/sun.jpg");ht.wrapS=ht.wrapT=Xe,ht.repeat.set(.8,1),ut.wrapS=ut.wrapT=Xe;const pt=new Lt({color:11592447,map:ht,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9}),Tt=new Lt({color:11592447,map:ht,metalness:.3,roughness:.5,transparent:!0,opacity:.6,side:de,ior:1.33,depthWrite:!1,depthTest:!0}),dt=new Lt({color:11592447,map:ht,metalness:.1,roughness:.6,transparent:!0,opacity:.6,clearcoat:.9,clearcoatRoughness:.4,transmission:.7,ior:1.2,depthTest:!0,envMapIntensity:.8}),xt=new Lt({color:11592447,map:ht,metalness:.1,roughness:.6,transparent:!0,opacity:.3,clearcoat:.9,clearcoatRoughness:.4,ior:1.2,depthWrite:!1,depthTest:!0,envMapIntensity:.6,side:de}),Pt=new Lt({color:11592447,map:ht,metalness:.3,roughness:.5,transparent:!0,opacity:.8,side:de,ior:1.33}),Dt=new Lt({color:11592447,map:ht,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9}),Et=new St(1,32,32,0,Math.PI),Ht=new A(Et,xt),Ut=new A(Et,Tt);Ht.scale.set(.85,.85,.8),Ut.scale.set(.85,.85,.8),Ht.position.y=-.2,Ut.position.y=-.2,Ht.rotation.y=Math.PI/2,Ut.rotation.y=Math.PI*1.5;const kt=new ge(1,32),B=new A(kt,pt);B.scale.set(.85,.85,.8),B.position.set(0,-.2,0),B.rotation.y=Math.PI/2;const _t=new qt;_t.add(Ht),_t.add(Ut),_t.add(B),w.add(_t);const nt=new St(.6,32,32,0,Math.PI),et=new A(nt,pt);et.scale.set(1,.95,.95),et.position.set(0,1,0),et.rotation.y=Math.PI*1.5;const wt=new A(nt,dt);wt.scale.set(1,.95,.95),wt.position.set(0,1,0),wt.rotation.y=Math.PI/2;const Mt=new ge(.6,32),Bt=new A(Mt,pt);Bt.position.set(0,1,0),Bt.rotation.y=Math.PI/2,Bt.scale.set(1,.95,.95);const Yt=new qt;Yt.add(et),Yt.add(wt),Yt.add(Bt),w.add(Yt);const Qt=new St(.6,32,32,0,Math.PI*2,0,Math.PI/2),Jt=new Lt({color:11592447,metalness:.1,roughness:.2,clearcoat:1,clearcoatRoughness:.1,transparent:!0,opacity:.9,transmission:.9,ior:1.33,reflectivity:.8,envMapIntensity:1}),ne=new A(Qt,Jt);ne.position.set(0,-.2,0),ne.rotation.x=Math.PI,ne.scale.set(1.25,1.25,1.25),_t.add(ne);const ue=new Lt({color:49151,metalness:.1,roughness:.5,clearcoat:.7,clearcoatRoughness:.25,side:de,transparent:!0,opacity:.7,depthWrite:!1}),_e=new A(kt,ue);_e.scale.set(.7,.7,.7),_e.position.set(0,-.3,0),_e.rotation.x=Math.PI/2,_e.renderOrder=1,_t.add(_e),w.add(_t);const ye=new Pn({transparent:!0,depthWrite:!1,depthTest:!0,uniforms:{u_time:{value:0},u_waveFrequency:{value:8},u_waveAmplitude:{value:.05},u_waveSpeed:{value:.2}},vertexShader:`
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
            `}),me=new A(kt,ye);me.position.set(0,-.3,0),me.scale.set(.7,.7,.7),me.rotation.x=-Math.PI/2,me.renderOrder=1,_t.add(me);const Te=new St(.25,32,32),ve=new A(Te,Pt);ve.position.set(-.45,1.35,-.1),w.add(ve);const Ve=new A(Te,dt);Ve.position.set(.45,1.35,-.1),w.add(Ve);const Re=new St(.25,32,32,Math.PI/2,Math.PI),At=new A(Re,Pt);At.scale.set(1.1,.6,.8),At.position.set(0,.84,.5),At.rotation.y=Math.PI;const ie=new St(.25,32,32,Math.PI/2,Math.PI),Pe=new A(ie,dt);Pe.scale.set(1.1,.6,.8),Pe.position.set(0,.84,.5),Pe.rotation.y=0;const Le=new ge(.25,32),He=new A(Le,Tt);He.scale.set(.8,.6,.8),He.position.set(0,.84,.5),He.rotation.y=Math.PI/2;const ln=new qt;ln.add(At),ln.add(Pe),ln.add(He),w.add(ln);const on=new Lt({color:8374441,metalness:1,roughness:.25,envMap:ut,clearcoat:.7,clearcoatRoughness:.3}),R=new Rn;R.moveTo(0,0),R.bezierCurveTo(0,-.3,-.6,-.3,-.6,0),R.bezierCurveTo(-.6,.3,0,.6,0,1),R.bezierCurveTo(0,.6,.6,.3,.6,0),R.bezierCurveTo(.6,-.3,0,-.3,0,0);const Y={depth:.4,bevelEnabled:!0,bevelSegments:2,steps:2,bevelSize:.1,bevelThickness:.1},st=new Bn(R,Y),ot=new A(st,on);ot.scale.set(.2,.2,.2),ot.position.set(.25,1.2,0),ot.rotation.y=Math.PI,ot.rotation.x=Math.PI,w.add(ot);const $=new St(.35,32,32),Rt=new A($,Tt);Rt.scale.set(.75,1.25,.65),Rt.position.set(-.7,-.15,.2),w.add(Rt);const Nt=new A($,xt);Nt.scale.set(.75,1.25,.65),Nt.position.set(.7,-.15,.2),w.add(Nt);const Gt=new le(.2,.22,.6,32),Wt=new A(Gt,Pt);Wt.position.set(-.4,-1.05,0),w.add(Wt);const $t=new A(Gt,dt);$t.position.set(.4,-1.05,0),w.add($t);const Zt=new St(.3,32,32),Xt=new A(Zt,Pt);Xt.scale.set(1,.72,1.5),Xt.position.set(-.4,-1.45,.17),w.add(Xt);const oe=new A(Zt,dt);oe.scale.set(1,.72,1.5),oe.position.set(.4,-1.45,.17),w.add(oe);const fe=new St(.44,32,32),Ce=new A(fe,Pt);Ce.position.set(-.15,-.45,-.4),w.add(Ce);const Je=new A(fe,Pt);Je.position.set(.15,-.45,-.4),w.add(Je);const pe=new St(.18,32,32),jt=new A(pe,Pt);jt.position.set(0,-.35,-.8),w.add(jt),new Pi().load("https://threejs.org/examples/fonts/helvetiker_bold.typeface.json",function(Ct){const De=new ze("X",{font:Ct,size:.2,depth:.05}),Oe=new A(De,Dt);Oe.position.set(-.3,.99,.53),Oe.rotation.x=ee.degToRad(-5),Oe.rotation.y=ee.degToRad(-15),w.add(Oe);const xe=new ze("O",{font:Ct,size:.2,depth:.05}),rn=new A(xe,Dt);rn.position.set(.14,.99,.53),rn.rotation.y=ee.degToRad(12),rn.rotation.x=ee.degToRad(-5),w.add(rn)}),a.value=tt(),w.add(a.value),D.add(w),d.value=g(),w.add(d.value),p.value=T(),w.add(p.value),L(p.value),w.scale.set(1.4,1.4,1.4),D.add(w),w.position.set(t.bodyPosition.x,t.bodyPosition.y,t.bodyPosition.z),X.position.set(t.bodyPosition.x,1,t.cameraPosition),X.lookAt(t.bodyPosition.x,0,0),X.position.z=4,w.rotation.x=.1,N(),Ge(()=>t.bodyPosition,Ct=>{w.position.set(Ct.x,Ct.y,Ct.z)}),Ge(()=>t.cameraPosition,Ct=>{X.position.set(t.bodyPosition.x,1,Ct),X.lookAt(t.bodyPosition.x,0,0)}),window.addEventListener("resize",()=>{X.aspect=window.innerWidth/window.innerHeight,X.updateProjectionMatrix(),K.setSize(window.innerWidth,window.innerHeight)})}});function Q(){s.value=!0}function x(){i.value=!0}function b(){o.value=!0}function j(){r.value=!0}function V(){s.value=!1,i.value=!1,o.value=!1,r.value=!1}const Z=()=>{c.value=!0,console.log(c.value),a.value&&(a.value.rotation.y=0),console.log(a.value)},at=()=>{l.value=!0,a.value&&(a.value.rotation.y=Math.PI),console.log(a.value)},W=()=>{h.value=!0,a.value&&(a.value.rotation.y=Math.PI/2)},J=()=>{u.value=!0,a.value&&(a.value.rotation.y=-Math.PI/2)},G=()=>{c.value=!1,l.value=!1,h.value=!1,u.value=!1},mt=()=>{_.value=!0,d.value&&(d.value.rotation.y=Math.PI)},yt=()=>{y.value=!0,d.value&&(d.value.rotation.y=0)},gt=()=>{f.value=!0,d.value&&(d.value.rotation.y=-Math.PI/2)},It=()=>{m.value=!0,d.value&&(d.value.rotation.y=Math.PI/2)},zt=()=>{_.value=!1,y.value=!1,f.value=!1,m.value=!1},rt=()=>{requestAnimationFrame(rt),a.value&&(c.value&&(a.value.position.z-=Qr),l.value&&(a.value.position.z+=Qr),h.value&&(a.value.position.x-=Qr),u.value&&(a.value.position.x+=Qr)),I.render(P,U)},ft=()=>{requestAnimationFrame(ft),d.value&&(_.value&&(d.value.position.z-=ta),y.value&&(d.value.position.z+=ta),f.value&&(d.value.position.x-=ta),m.value&&(d.value.position.x+=ta))};ft(),rt();const vt=()=>{E.value=!0,p.value&&(p.value.rotation.y=0)},F=()=>{M.value=!0,p.value&&(p.value.rotation.y=Math.PI)},ct=()=>{S.value=!0,p.value&&(p.value.rotation.y=Math.PI/2)},it=()=>{O.value=!0,p.value&&(p.value.rotation.y=-Math.PI/2)},lt=()=>{E.value=!1,M.value=!1,S.value=!1,O.value=!1},bt=()=>{requestAnimationFrame(bt),p.value&&(E.value&&(p.value.position.z-=ea),M.value&&(p.value.position.z+=ea),S.value&&(p.value.position.x-=ea),O.value&&(p.value.position.x+=ea))};return bt(),(tt,g)=>(ui(),hi(dn,null,[Vt("div",{ref_key:"threeCanvas",ref:e,class:zn(n.background?"no-bg":"three-canvas")},null,2),Vt("div",I1,[Vt("button",{class:"pixel-btn up",onMousedown:b,onMouseup:V},"UP",32),Vt("div",L1,[Vt("button",{class:"pixel-btn left",onMousedown:Q,onMouseup:V},"LEFT",32),Vt("button",{class:"pixel-btn right",onMousedown:x,onMouseup:V},"RIGHT",32)]),Vt("button",{class:"pixel-btn down",onMousedown:j,onMouseup:V},"DOWN",32)]),Vt("div",D1,[Vt("button",{id:"move-north",class:"directional-btn north-btn",onMousedown:Z,onMouseup:G},"UP",32),Vt("div",U1,[Vt("button",{id:"move-west",class:"directional-btn west-btn",onMousedown:W,onMouseup:G},"LEFT",32),Vt("button",{id:"move-east",class:"directional-btn east-btn",onMousedown:J,onMouseup:G},"RIGHT",32)]),Vt("button",{id:"move-south",class:"directional-btn south-btn",onMousedown:at,onMouseup:G},"DOWN",32)]),Vt("div",N1,[Vt("button",{class:"directional-btn-woman north-btn",onMousedown:mt,onMouseup:zt},"UP",32),Vt("div",F1,[Vt("button",{class:"directional-btn-woman west-btn",onMousedown:gt,onMouseup:zt},"LEFT",32),Vt("button",{class:"directional-btn-woman east-btn",onMousedown:It,onMouseup:zt},"RIGHT",32)]),Vt("button",{class:"directional-btn-woman south-btn",onMousedown:yt,onMouseup:zt},"DOWN",32)]),Vt("div",O1,[Vt("button",{class:"directional-btn-kid north-btn",onMousedown:vt,onMouseup:lt},"UP",32),Vt("div",B1,[Vt("button",{class:"directional-btn-kid west-btn",onMousedown:ct,onMouseup:lt},"LEFT",32),Vt("button",{class:"directional-btn-kid east-btn",onMousedown:it,onMouseup:lt},"RIGHT",32)]),Vt("button",{class:"directional-btn-kid south-btn",onMousedown:F,onMouseup:lt},"DOWN",32)])],64))}}),G1=di(z1,[["__scopeId","data-v-354294c6"]]),H1={class:"pixel-controls"},k1={class:"side-buttons"},V1=Gn({__name:"GhostBear",props:{background:{type:Boolean,default:!1},cameraPosition:{type:Number,default:5},bodyPosition:{type:Object,default:()=>({x:0,y:0,z:0})}},setup(n){const t=n,e=Kt(null);let i=Kt(!1),s=Kt(!1),o=Kt(!1),r=Kt(!1);$n(()=>{if(e.value){let d=function(ve,Ve){const Re=new qt,At=new St(1,32,32),ie=new A(At,at);ie.scale.set(1,.8,1),Re.add(ie);const Pe=new le(.1,.1,.5,16),Le=new te({color:9127187}),He=new A(Pe,Le);return He.position.set(0,.9,0),Re.add(He),Re},p=function(){requestAnimationFrame(p),i.value&&(m.rotation.y+=.03),s.value&&(m.rotation.y-=.03),o.value&&(m.rotation.x-=.03),r.value&&(m.rotation.x+=.03),kt.rotation.z-=.04,B.rotation.z+=.04,_t.rotation.z+=.03,nt.rotation.z+=.03,v.rotation.y+=.04,Te+=ye,m.position.y=t.bodyPosition.y+Math.sin(Te)*me;const ve=ue.getElapsedTime();ne.forEach((Ve,Re)=>{const At=.1+Math.sin(ve*3+_e[Re])*.1;Ve.scale.set(At,At,At)}),f.render(_,y)};const _=new Yn,y=new Be(75,window.innerWidth/window.innerHeight,.1,1e3),f=new qn({antialias:!0,alpha:!0});f.setSize(window.innerWidth,window.innerHeight),e.value.appendChild(f.domElement);const m=new qt,E=new qt;_.add(E);const M=new Ri(16777215,2);_.add(M);const S=new Ai(16777215,4);S.position.set(5,5,5),_.add(S);const O=new Ti(16777215,5,50);O.position.set(0,2,4),_.add(O);const I=new $i,P=I.load("/3d-bear-arts/assets/pumpkin.jpg");P.wrapS=P.wrapT=Xe,P.repeat.set(.8,.85);const U=I.load("/3d-bear-arts/assets/pumpkin.jpg");U.wrapS=U.wrapT=Xe,U.repeat.set(1,1);const Q=I.load("/3d-bear-arts/assets/pumpkin.jpg");Q.wrapS=U.wrapT=Xe,Q.repeat.set(2,.8);const x=new Lt({color:16747520,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9}),b=new qt,j=new Lt({color:16747520,map:P,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9}),V=new Lt({color:16747520,map:U,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9}),Z=new Lt({color:16747520,map:Q,metalness:.3,roughness:.1,clearcoat:1,clearcoatRoughness:.05,transparent:!0,opacity:.6,transmission:.8,ior:1.45,reflectivity:.9,envMapIntensity:1,side:de}),at=new Lt({color:16747520,map:Q,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9});new Lt({color:16766720,map:P,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9}),new Lt({color:9109504,map:P,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9}),new Lt({color:4915330,map:P,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9});const W=new St(1,32,32,0,Math.PI),J=new A(W,Z),G=new A(W,j);J.scale.set(.85,.85,.8),G.scale.set(.85,.85,.8),J.position.y=-.2,G.position.y=-.2,J.rotation.y=Math.PI/2,G.rotation.y=Math.PI*1.5;const mt=new ge(1,32),yt=new A(mt,V);yt.scale.set(.85,.85,.8),yt.position.set(0,-.2,0),yt.rotation.y=Math.PI/2;const gt=new qt;gt.add(J),gt.add(G),gt.add(yt),m.add(gt);const It=new St(.6,32,32,0,Math.PI),zt=new A(It,j);zt.scale.set(1,.95,.95),zt.position.set(0,1,0),zt.rotation.y=Math.PI*1.5;const rt=new A(It,Z);rt.scale.set(1,.95,.95),rt.position.set(0,1,0),rt.rotation.y=Math.PI/2;const ft=new ge(.6,32),vt=new A(ft,V);vt.position.set(0,1,0),vt.rotation.y=Math.PI/2,vt.scale.set(1,.95,.95);const F=new qt;F.add(zt),F.add(rt),F.add(vt),m.add(F);const ct=new St(.25,32,32),it=new A(ct,at);it.position.set(-.45,1.35,-.1),m.add(it);const lt=new A(ct,Z);lt.position.set(.45,1.35,-.1),m.add(lt);const bt=new St(.25,32,32,Math.PI/2,Math.PI),tt=new A(bt,j);tt.scale.set(1.1,.6,.8),tt.position.set(0,.84,.5),tt.rotation.y=Math.PI;const g=new St(.25,32,32,Math.PI/2,Math.PI),T=new A(g,Z);T.scale.set(1.1,.6,.8),T.position.set(0,.84,.5),T.rotation.y=0;const L=new ge(.25,32),N=new A(L,j);N.scale.set(.8,.6,.8),N.position.set(0,.84,.5),N.rotation.y=Math.PI/2;const D=new qt;D.add(tt),D.add(T),D.add(N),m.add(D);const X=new Rn;X.moveTo(0,0),X.bezierCurveTo(0,-.3,-.6,-.3,-.6,0),X.bezierCurveTo(-.6,.3,0,.6,0,1),X.bezierCurveTo(0,.6,.6,.3,.6,0),X.bezierCurveTo(.6,-.3,0,-.3,0,0);const K={depth:.4,bevelEnabled:!0,bevelSegments:2,steps:2,bevelSize:.1,bevelThickness:.1},w=new Bn(X,K),v=new A(w,x);v.scale.set(.3,.3,.3),v.position.set(.25,1.1,0),v.rotation.y=Math.PI,v.rotation.x=Math.PI,m.add(v);const C=new St(.35,32,32),k=new A(C,V);k.scale.set(.75,1.25,.65),k.position.set(-.7,-.15,.2),m.add(k);const z=new A(C,Z);z.scale.set(.75,1.25,.65),z.position.set(.7,-.15,.2),m.add(z);const H=new le(.2,.22,.6,32),ht=new A(H,V);ht.position.set(-.4,-1.05,0),m.add(ht);const ut=new A(H,Z);ut.position.set(.4,-1.05,0),m.add(ut);const pt=new St(.3,32,32),Tt=new A(pt,at);Tt.scale.set(1,.72,1.5),Tt.position.set(-.4,-1.45,.17),m.add(Tt);const dt=new A(pt,Z);dt.scale.set(1,.72,1.5),dt.position.set(.4,-1.45,.17),m.add(dt);const xt=new St(.44,32,32),Pt=new A(xt,j);Pt.position.set(-.15,-.45,-.4),m.add(Pt);const Dt=new A(xt,Z);Dt.position.set(.15,-.45,-.4),m.add(Dt);const Et=new St(.18,32,32),Ht=new A(Et,at);Ht.position.set(0,-.35,-.8),m.add(Ht),Ht.renderOrder=1,new Pi().load("https://threejs.org/examples/fonts/helvetiker_bold.typeface.json",function(ve){const Ve=new ze("X",{font:ve,size:.2,depth:.05}),Re=new A(Ve,V);Re.position.set(-.3,.99,.53),Re.rotation.x=ee.degToRad(-5),Re.rotation.y=ee.degToRad(-15),m.add(Re);const At=new ze("O",{font:ve,size:.2,depth:.05}),ie=new A(At,V);ie.position.set(.14,.99,.53),ie.rotation.y=ee.degToRad(12),ie.rotation.x=ee.degToRad(-5),m.add(ie)}),m.add(b);const kt=d(),B=d(),_t=d(),nt=d();kt.position.set(.35,-.35,-.3),B.position.set(.25,-.45,.3),_t.position.set(.3,.1,-.2),nt.position.set(.25,.18,.4),kt.scale.set(.3,.3,.3),B.scale.set(.28,.28,.28),_t.scale.set(.25,.25,.25),nt.scale.set(.23,.23,.23),B.rotation.z=Math.PI/4,_t.rotation.z=-Math.PI/4,nt.rotation.y=-Math.PI/2,m.add(kt),m.add(B),m.add(_t),m.add(nt);const et=new Rn;et.moveTo(-.5,0),et.bezierCurveTo(-.75,.25,-1,.6,-.5,.8),et.bezierCurveTo(-.25,.85,-.25,.5,-.15,.4),et.bezierCurveTo(-.05,.6,.05,.6,.15,.4),et.bezierCurveTo(.25,.5,.25,.85,.5,.8),et.bezierCurveTo(1,.6,.75,.25,.5,0),et.bezierCurveTo(.3,-.25,-.3,-.25,-.5,0);const wt={depth:.3,bevelEnabled:!1},Mt=new Bn(et,wt),Bt=new An({color:0}),Yt=new A(Mt,Bt);Yt.scale.set(.3,.3,.6),Yt.rotation.x=0,Yt.rotation.z=0,Yt.position.set(.26,.35,.25),m.add(Yt);const Qt=new A(Mt,Bt);Qt.scale.set(.5,.5,.5),Qt.position.set(.4,-.1,.54),m.add(Qt);const Jt=new A(Mt,Bt);Jt.scale.set(.5,.5,.5),Jt.position.set(.32,-.35,.65),m.add(Jt),m.rotation.x=.1,m.scale.set(1.4,1.4,1.4),_.add(m),m.position.set(t.bodyPosition.x,t.bodyPosition.y,t.bodyPosition.z),y.position.set(t.bodyPosition.x,1,t.cameraPosition),y.lookAt(t.bodyPosition.x,0,0),y.position.z=4;const ne=[Yt,Qt,Jt],ue=new Cp,_e=[0,Math.PI/2,Math.PI,0,Math.PI/3];let ye=.05,me=.25,Te=0;p(),Ge(()=>t.bodyPosition,ve=>{m.position.set(ve.x,ve.y,ve.z)}),Ge(()=>t.cameraPosition,ve=>{y.position.set(t.bodyPosition.x,1,ve),y.lookAt(t.bodyPosition.x,0,0)}),window.addEventListener("resize",()=>{y.aspect=window.innerWidth/window.innerHeight,y.updateProjectionMatrix(),f.setSize(window.innerWidth,window.innerHeight)})}});function a(){s.value=!0}function c(){i.value=!0}function l(){o.value=!0}function h(){r.value=!0}function u(){s.value=!1,i.value=!1,o.value=!1,r.value=!1}return(d,p)=>(ui(),hi(dn,null,[Vt("div",{ref_key:"threeCanvas",ref:e,class:zn(n.background?"no-bg":"three-canvas")},null,2),Vt("div",H1,[Vt("button",{class:"pixel-btn up",onMousedown:l,onMouseup:u},"UP",32),Vt("div",k1,[Vt("button",{class:"pixel-btn left",onMousedown:a,onMouseup:u},"LEFT",32),Vt("button",{class:"pixel-btn right",onMousedown:c,onMouseup:u},"RIGHT",32)]),Vt("button",{class:"pixel-btn down",onMousedown:h,onMouseup:u},"DOWN",32)])],64))}}),W1=di(V1,[["__scopeId","data-v-5eff72b3"]]),X1={class:"pixel-controls"},q1={class:"side-buttons"},Y1=Gn({__name:"GhostBallonBear",props:{background:{type:Boolean,default:!1},cameraPosition:{type:Number,default:5},bodyPosition:{type:Object,default:()=>({x:0,y:0,z:0})}},setup(n){const t=n,e=Kt(null);let i=Kt(!1),s=Kt(!1),o=Kt(!1),r=Kt(!1);$n(()=>{if(e.value){let d=function(){requestAnimationFrame(d),i.value&&(f.rotation.y+=.03),s.value&&(f.rotation.y-=.03),o.value&&(f.rotation.x-=.03),r.value&&(f.rotation.x+=.03),K.rotation.y+=.03,Bt+=nt,Yt+=et,f.position.y=t.bodyPosition.y+Math.sin(Bt)*Mt,K.position.y=t.bodyPosition.y+Math.sin(Yt)*wt,kt.uniforms.u_time.value+=.25,y.render(p,_)};const p=new Yn,_=new Be(75,window.innerWidth/window.innerHeight,.1,1e3),y=new qn({antialias:!0,alpha:!0});y.setSize(window.innerWidth,window.innerHeight),e.value.appendChild(y.domElement);const f=new qt,m=new qt;p.add(m);const E=new Ri(16777215,2);p.add(E);const M=new Ai(16777215,4);M.position.set(5,5,5),p.add(M);const S=new Ti(16777215,5,50);S.position.set(0,2,4),p.add(S);const O=new $i,I=O.load("/3d-bear-arts/assets/ghost.jpg");I.wrapS=I.wrapT=Xe,I.repeat.set(2,2);const P=O.load("/3d-bear-arts/assets/ghost.jpg");P.wrapS=P.wrapT=Xe,P.repeat.set(1,1);const U=new Lt({color:16777215,metalness:0,roughness:.8,clearcoat:.3,clearcoatRoughness:.9,transparent:!0,opacity:.15,transmission:.95,ior:1.1,reflectivity:.2,envMapIntensity:.3,depthTest:!0,depthWrite:!1,side:de}),Q=new Lt({color:16777215,metalness:0,roughness:.8,clearcoat:.3,clearcoatRoughness:.9,transparent:!0,opacity:.1,envMapIntensity:.3}),x=new Lt({color:9109504,map:I,metalness:.9,roughness:.25,clearcoat:.7,clearcoatRoughness:.3}),b=new Lt({color:16777215,metalness:.1,roughness:.05,clearcoat:1,clearcoatRoughness:.1,transparent:!0,opacity:.1,transmission:.95,ior:1,reflectivity:.2,envMapIntensity:.4,depthTest:!0,depthWrite:!1,side:de}),j=new Lt({color:16777215,metalness:.3,roughness:.1,clearcoat:1,clearcoatRoughness:.05,transparent:!0,opacity:.45,transmission:.8,reflectivity:.9,envMapIntensity:1,depthTest:!0,depthWrite:!1,side:de}),V=new Lt({color:16777215,metalness:.3,roughness:.1,clearcoat:1,clearcoatRoughness:.05,transparent:!0,opacity:.45,transmission:.8,reflectivity:.9,envMapIntensity:1,side:de}),Z=new St(1,32,32,0,Math.PI),at=new A(Z,U),W=new A(Z,j);at.scale.set(.85,.85,.8),W.scale.set(.85,.85,.8),at.position.y=-.2,W.position.y=-.2,at.rotation.y=Math.PI/2,W.rotation.y=Math.PI*1.5;const J=new ge(1,32),G=new A(J,j);G.scale.set(.85,.85,.8),G.position.set(0,-.2,0),G.rotation.y=Math.PI/2;const mt=new qt;mt.add(at),mt.add(W),mt.add(G),f.add(mt);const yt=new St(.6,32,32,0,Math.PI),gt=new A(yt,V);gt.scale.set(1,.95,.95),gt.position.set(0,1,0),gt.rotation.y=Math.PI*1.5;const It=new A(yt,Q);It.scale.set(1,.95,.95),It.position.set(0,1,0),It.rotation.y=Math.PI/2;const zt=new ge(.6,32),rt=new A(zt,j);rt.position.set(0,1,0),rt.rotation.y=Math.PI/2,rt.scale.set(1,.95,.95);const ft=new qt;ft.add(gt),ft.add(It),ft.add(rt),f.add(ft);const vt=new St(.25,32,32),F=new A(vt,V);F.position.set(-.45,1.35,-.1),f.add(F);const ct=new A(vt,Q);ct.position.set(.45,1.35,-.1),f.add(ct);const it=new St(.25,32,32,Math.PI/2,Math.PI),lt=new A(it,V);lt.scale.set(1.1,.6,.8),lt.position.set(0,.84,.5),lt.rotation.y=Math.PI;const bt=new St(.25,32,32,Math.PI/2,Math.PI),tt=new A(bt,Q);tt.scale.set(1.1,.6,.8),tt.position.set(0,.84,.5),tt.rotation.y=0;const g=new ge(.25,32),T=new A(g,b);T.scale.set(.8,.6,.8),T.position.set(0,.84,.5),T.rotation.y=Math.PI/2;const L=new qt;L.add(lt),L.add(tt),L.add(T),f.add(L);const N=new Rn;N.moveTo(0,0),N.bezierCurveTo(0,-.3,-.6,-.3,-.6,0),N.bezierCurveTo(-.6,.3,0,.6,0,1),N.bezierCurveTo(0,.6,.6,.3,.6,0),N.bezierCurveTo(.6,-.3,0,-.3,0,0);const D={depth:.4,bevelEnabled:!0,bevelSegments:2,steps:2,bevelSize:.1,bevelThickness:.1},X=new Bn(N,D),K=new A(X,x);K.scale.set(.35,.35,.35),K.position.set(0,-.05,0),K.rotation.y=Math.PI,K.rotation.x=Math.PI,f.add(K);const w=new St(.35,32,32),v=new A(w,j);v.scale.set(.75,1.25,.65),v.position.set(-.7,-.15,.2),f.add(v);const C=new A(w,b);C.scale.set(.75,1.25,.65),C.position.set(.7,-.15,.2),f.add(C);const k=new le(.2,.22,.6,32),z=new A(k,j);z.position.set(-.4,-1.05,0),f.add(z);const H=new A(k,b);H.position.set(.4,-1.05,0),f.add(H);const ht=new St(.3,32,32),ut=new A(ht,j);ut.scale.set(1,.72,1.5),ut.position.set(-.4,-1.45,.17),f.add(ut);const pt=new A(ht,b);pt.scale.set(1,.72,1.5),pt.position.set(.4,-1.45,.17),f.add(pt);const Tt=new St(.44,32,32),dt=new A(Tt,b);dt.position.set(-.15,-.45,-.4),f.add(dt);const xt=new A(Tt,b);xt.position.set(.15,-.45,-.4),f.add(xt);const Pt=new St(.18,32,32),Dt=new A(Pt,j);Dt.position.set(0,-.35,-.8),f.add(Dt);const Et=new St(.6,32,32,0,Math.PI*2,0,Math.PI/2),Ht=new Lt({color:9109504,metalness:.3,roughness:.1,clearcoat:1,clearcoatRoughness:.05,transparent:!0,opacity:.8,transmission:.85,ior:1.4,reflectivity:.9,envMapIntensity:1.2}),Ut=new A(Et,Ht);Ut.position.set(0,-.2,0),Ut.rotation.x=Math.PI,Ut.scale.set(1.25,1.25,1.25),mt.add(Ut);const kt=new Pn({transparent:!0,depthWrite:!1,depthTest:!0,uniforms:{u_time:{value:0},u_waveFrequency:{value:4},u_waveAmplitude:{value:.5},u_waveSpeed:{value:.3}},vertexShader:`
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
            `}),B=new A(J,kt);B.position.set(0,-.26,0),B.scale.set(.7,.7,.7),B.rotation.x=-Math.PI/2,B.renderOrder=1,mt.add(B),new Pi().load("https://threejs.org/examples/fonts/helvetiker_bold.typeface.json",function(Qt){const Jt=new ze("X",{font:Qt,size:.2,depth:.05}),ne=new A(Jt,j);ne.position.set(-.3,.99,.53),ne.rotation.x=ee.degToRad(-5),ne.rotation.y=ee.degToRad(-15),f.add(ne);const ue=new ze("O",{font:Qt,size:.2,depth:.05}),_e=new A(ue,j);_e.position.set(.14,.99,.53),_e.rotation.y=ee.degToRad(12),_e.rotation.x=ee.degToRad(-5),f.add(_e)}),Dt.renderOrder=1,f.rotation.x=.1,f.scale.set(1.4,1.4,1.4),p.add(f),f.position.set(t.bodyPosition.x,t.bodyPosition.y,t.bodyPosition.z),_.position.set(t.bodyPosition.x,1,t.cameraPosition),_.lookAt(t.bodyPosition.x,0,0),_.position.z=4;let nt=.05,et=.06,wt=.2,Mt=.25,Bt=0,Yt=0;d(),Ge(()=>t.bodyPosition,Qt=>{f.position.set(Qt.x,Qt.y,Qt.z)}),Ge(()=>t.cameraPosition,Qt=>{_.position.set(t.bodyPosition.x,1,Qt),_.lookAt(t.bodyPosition.x,0,0)}),window.addEventListener("resize",()=>{_.aspect=window.innerWidth/window.innerHeight,_.updateProjectionMatrix(),y.setSize(window.innerWidth,window.innerHeight)})}});function a(){s.value=!0}function c(){i.value=!0}function l(){o.value=!0}function h(){r.value=!0}function u(){s.value=!1,i.value=!1,o.value=!1,r.value=!1}return(d,p)=>(ui(),hi(dn,null,[Vt("div",{ref_key:"threeCanvas",ref:e,class:zn(n.background?"no-bg":"three-canvas")},null,2),Vt("div",X1,[Vt("button",{class:"pixel-btn up",onMousedown:l,onMouseup:u},"UP",32),Vt("div",q1,[Vt("button",{class:"pixel-btn left",onMousedown:a,onMouseup:u},"LEFT",32),Vt("button",{class:"pixel-btn right",onMousedown:c,onMouseup:u},"RIGHT",32)]),Vt("button",{class:"pixel-btn down",onMousedown:h,onMouseup:u},"DOWN",32)])],64))}}),$1=di(Y1,[["__scopeId","data-v-eb44448e"]]),j1={class:"pixel-controls"},K1={class:"side-buttons"},Z1=15,J1=5,Q1=Gn({__name:"Aquar",props:{background:{type:Boolean,default:!1},cameraPosition:{type:Number,default:5},bodyPosition:{type:Object,default:()=>({x:0,y:0,z:0})}},setup(n){const t=n,e=Kt(null);let i=Kt(!1),s=Kt(!1),o=Kt(!1),r=Kt(!1);const a=Xo(null),c=new qn({antialias:!0});c.setSize(window.innerWidth,window.innerHeight),document.body.appendChild(c.domElement),new Yn;const l=new Be(75,window.innerWidth/window.innerHeight,.1,1e3);l.position.z=5,$n(()=>{if(e.value){let y=function(){const At=new qt,ie=new po(.12,.05,16,100),Pe=new te({color:16777215}),Le=new A(ie,Pe);Le.position.set(0,1.65,0),Le.rotation.x=Math.PI/2,At.add(Le);const He=new io(.15,.3,32),ln=new te({color:16711680}),on=new A(He,ln);on.position.set(0,1.8,0),At.add(on);const R=new St(.05,32,32),Y=new te({color:16777215}),st=new A(R,Y);return st.position.set(0,1.93,0),At.add(st),At.position.set(0,-.1,0),At},f=function(){const At=new qt,ie=new St(.15,32,32),Pe=new te({color:16764057}),Le=new A(ie,Pe);Le.position.set(0,.4,0),At.add(Le);const He=new io(.08,.15,32);new te({color:16764057});const ln=new A(He,G);ln.position.set(-.1,.55,0),ln.rotation.z=Math.PI/6,At.add(ln);const on=new A(He,G);on.position.set(.1,.55,0),on.rotation.z=-Math.PI/6,At.add(on);const R=new le(.12,.15,.3,32),Y=new te({color:16764057}),st=new A(R,Y);st.position.set(0,.2,0),At.add(st);const ot=new le(.05,.05,.2,32),$=new te({color:16764057}),Rt=new A(ot,$);Rt.position.set(-.07,-.05,.05),At.add(Rt);const Nt=new A(ot,$);Nt.position.set(.07,-.05,.05),At.add(Nt);const Gt=new le(.04,.04,.2,32),Wt=new te({color:16764057}),$t=new A(Gt,G);$t.position.set(-.15,.25,0),$t.rotation.z=Math.PI/4,At.add($t);const Zt=new A(Gt,Wt);Zt.position.set(.15,.25,0),Zt.rotation.z=-Math.PI/4,At.add(Zt);const Xt=new le(.03,.03,.25,32),oe=new te({color:16764057}),fe=new A(Xt,oe);return fe.position.set(0,.1,-.2),fe.rotation.x=Math.PI/4,At.add(fe),At.scale.set(.75,.75,.75),At.position.set(.2,0,.2),At},m=function(){const At=new qt,ie=new St(.2,32,32),Pe=new te({color:16764057}),Le=new A(ie,Pe);Le.position.set(0,1,0),At.add(Le);const He=new te({color:16777215}),ln=[{x:0,y:.85,z:.15,size:.12},{x:-.1,y:.88,z:.1,size:.1},{x:.1,y:.88,z:.1,size:.1},{x:-.15,y:.95,z:.1,size:.08},{x:.15,y:.95,z:.1,size:.08}];for(const Ci of ln){const Po=new St(Ci.size,16,16),Fs=new A(Po,He);Fs.position.set(Ci.x,Ci.y-.06,Ci.z-.01),At.add(Fs)}const on=new te({color:16777215}),R=new le(.05,.06,.1,32),Y=new A(R,on);Y.position.set(-.06,.93,.18),Y.rotation.z=Math.PI/4;const st=new le(.05,.06,.1,32),ot=new A(st,on);ot.position.set(.06,.93,.18),ot.rotation.z=-Math.PI/4;const $=new po(.12,.05,16,100),Rt=new te({color:16777215}),Nt=new A($,Rt);Nt.position.set(0,1.15,0),Nt.rotation.x=Math.PI/2,At.add(Nt);const Gt=new io(.15,.3,32),Wt=new te({color:16711680}),$t=new A(Gt,Wt);$t.position.set(0,1.3,0),At.add($t);const Zt=new St(.05,32,32),Xt=new te({color:16777215}),oe=new A(Zt,Xt);oe.position.set(0,1.43,0),At.add(oe);const fe=new le(.2,.25,.6,32),Ce=new te({color:16711680}),Je=new A(fe,Ce);Je.position.set(0,.5,0),At.add(Je);const pe=new le(.25,.25,.1,32),jt=new te({color:0}),Ye=new A(pe,jt);Ye.position.set(0,.4,.005),At.add(Ye);const Ct=new le(.06,.06,.3,32),De=new te({color:16711680}),Oe=new A(Ct,De);Oe.position.set(-.25,.75,0),Oe.rotation.z=Math.PI/4,At.add(Oe);const xe=new A(Ct,De);xe.position.set(.25,.75,0),xe.rotation.z=-Math.PI/4,At.add(xe);const rn=new St(.07,32,32),Me=new te({color:16777215}),Ke=new A(rn,Me);Ke.position.set(-.35,.85,0),At.add(Ke);const In=new A(rn,Me);In.position.set(.35,.85,0),At.add(In);const We=new le(.1,.1,.15,32),Sn=new te({color:16711680}),fi=new le(.08,.08,.4,32),Hn=new te({color:0}),jn=new A(fi,Hn);jn.position.set(-.1,.1,0),At.add(jn);const Kn=new A(We,Sn);Kn.position.set(-.1,-.05,0),At.add(Kn);const gn=new A(fi,Hn);gn.position.set(.1,.1,0),At.add(gn);const kn=new A(We,Sn);kn.position.set(.1,-.05,0),At.add(kn);const Zn=new St(.12,32,32),pi=new te({color:16711680}),bn=new A(Zn,pi);bn.scale.set(1,.7,1.5),bn.position.set(-.1,-.12,.12),At.add(bn);const En=new A(Zn,pi);return En.scale.set(1,.7,1.5),En.position.set(.1,-.1,.12),At.add(En),At.scale.set(.25,.25,.25),At.position.set(.2,.5,-0),At},E=function(){let At=0;function ie(){requestAnimationFrame(ie),At+=.08,ue.position.y=.45+Math.sin(At)*.45,Q.render(P,U)}ie()},M=function(At){let ie=1,Pe=0;function Le(){requestAnimationFrame(Le),At.position.x+=.01*ie,At.position.x>=.5?(ie=-1,At.rotation.y=Math.PI):At.position.x<=-.5&&(ie=1,At.rotation.y=0),Pe+=.2,At.position.y=-.2+Math.sin(Pe)*.01,At.position.z=.5,Q.render(P,U)}Le()},S=function(){const At=new qt,ie=new ri(.7,.8,.7),Pe=new te({color:9127187}),Le=new A(ie,Pe);Le.position.set(0,.4,0),At.add(Le);const He=new io(.55,.25,4),ln=new te({color:16777215}),on=new A(He,ln);on.position.set(0,.9,0),on.rotation.y=Math.PI/4,At.add(on);const R=new ri(.25,.35,.05),Y=new te({color:6636321}),st=new A(R,Y);st.position.set(0,.2,.36),At.add(st);const ot=new ri(.15,.15,.05),$=new te({color:8900331}),Rt=new A(ot,$);Rt.position.set(-.2,.5,.38),At.add(Rt);const Nt=new A(ot,$);Nt.position.set(.2,.5,.38),At.add(Nt);const Gt=new ri(.2,.4,.2),Wt=new te({color:8421504}),$t=new A(Gt,Wt);$t.position.set(0,.95,0),At.add($t);const Zt=new po(.07,.04,32,100),Xt=new te({color:2263842}),oe=new A(Zt,Xt);return oe.position.set(0,.45,.38),At.add(oe),At.position.set(.22,-.2,0),At.scale.set(.5,.5,.5),At},O=function(){requestAnimationFrame(I);const At=Te.attributes.position.array;for(let ie=1;ie<At.length;ie+=3)At[ie]-=.02,At[ie]<-10&&(At[ie]=10);Te.attributes.position.needsUpdate=!0,Q.render(P,U)},I=function(){requestAnimationFrame(I),i.value&&(x.rotation.y+=.03),s.value&&(x.rotation.y-=.03),o.value&&(x.rotation.x-=.03),r.value&&(x.rotation.x+=.03),a.value&&(a.value.rotation.y+=.1),Q.render(P,U)};const P=new Yn,U=new Be(75,window.innerWidth/window.innerHeight,.1,1e3),Q=new qn({antialias:!0,alpha:!0});Q.setSize(window.innerWidth,window.innerHeight),e.value.appendChild(Q.domElement);const x=new qt,b=new qt;P.add(b);const j=new Ri(16777215,2);P.add(j);const V=new Ai(16777215,4);V.position.set(5,5,5),P.add(V);const Z=new Ti(16777215,5,50);Z.position.set(0,2,4),P.add(Z);const at=new $i,W=at.load("/3d-bear-arts/assets/house.jpg");W.wrapS=W.wrapT=Xe,W.repeat.set(1,1),at.load("/3d-bear-arts/assets/houseenv_texture_5.jpg");const J=new Lt({color:16777215,metalness:.3,roughness:.05,transparent:!0,opacity:.5,transmission:1,ior:1.33,thickness:.01,depthWrite:!0,envMapIntensity:2,clearcoat:1,clearcoatRoughness:.1,side:de});new Lt({color:16777215,metalness:.3,map:W,roughness:.05,transparent:!0,opacity:.5,transmission:.7,ior:1.33,thickness:.2,depthWrite:!0,envMapIntensity:2,clearcoat:1,clearcoatRoughness:.1,side:de});const G=new Lt({color:16777215,metalness:.3,roughness:.05,transparent:!0,opacity:1,transmission:.8,ior:1.33,thickness:.3,depthWrite:!0,envMapIntensity:2,clearcoat:1,clearcoatRoughness:.1,side:de}),mt=new r1().load(["/3d-bear-arts/assets/house_env_texture_1.jpg","/3d-bear-arts/assets/house_env_texture_4.jpg","/3d-bear-arts/assets/house_env_texture_6.jpg","/3d-bear-arts/assets/house_env_texture_2.jpg","/3d-bear-arts/assets/house_env_texture_5.jpg","/3d-bear-arts/assets/house_env_texture_3.jpg"]);P.environment=mt;const yt=new Lt({color:16777215,metalness:.05,roughness:.2,transparent:!0,opacity:1,transmission:.2,ior:1.5,depthWrite:!0,envMapIntensity:1,side:de}),gt=new Lt({color:16777215,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9}),It=`
    varying vec2 vUv;
    void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
`,zt=`
    uniform float time;
    uniform float opacity;
    varying vec2 vUv;

    void main() {
        vec2 p = vUv * 2.0 - vec2(1.0);
        float len = length(p);
        float angle = atan(p.y, p.x);

        // Soft pulsating wave for frosty effect
        float wave = sin(len * 15.0 - time * 2.0) * 0.2 + 0.8;

        // White and silver tones for icy crystal effect
        vec3 color1 = vec3(0.95, 0.95, 0.95); // Light silvery white
        vec3 color2 = vec3(0.8, 0.8, 0.85);   // Soft silver
        vec3 color3 = vec3(1.0, 1.0, 1.0);    // Pure white for highlights

        // Blend colors to achieve a frosty, metallic look
        vec3 color = mix(color1, color2, wave);
        color = mix(color, color3, sin(angle + time * 0.5) * 0.3 + 0.7);

        // Apply opacity for crystal transparency
        gl_FragColor = vec4(color, opacity); 
    }
`;new Pn({uniforms:{time:{value:0},opacity:{value:.5}},vertexShader:It,fragmentShader:zt,transparent:!0,depthWrite:!1});const rt=new St(1,32,32,0,Math.PI),ft=new A(rt,J),vt=new A(rt,G);ft.scale.set(.85,.85,.8),vt.scale.set(.85,.85,.8),ft.position.y=-.2,vt.position.y=-.2,ft.rotation.y=Math.PI/2,vt.rotation.y=Math.PI*1.5;const F=new ge(1,32),ct=new A(F,yt);ct.scale.set(.85,.85,.8),ct.position.set(0,-.2,0),ct.rotation.y=Math.PI/2;const it=new qt;it.add(ft),it.add(vt),it.add(ct),x.add(it);const lt=new St(.6,32,32,0,Math.PI),bt=new A(lt,G);bt.scale.set(1,.95,.95),bt.position.set(0,1,0),bt.rotation.y=Math.PI*1.5;const tt=new A(lt,J);tt.scale.set(1,.95,.95),tt.position.set(0,1,0),tt.rotation.y=Math.PI/2;const g=new ge(.6,32),T=new A(g,yt);T.position.set(0,1,0),T.rotation.y=Math.PI/2,T.scale.set(1,.95,.95);const L=new qt;L.add(bt),L.add(tt),L.add(T),x.add(L);const N=new St(.6,32,32,0,Math.PI*2,0,Math.PI/2),D=new Lt({color:16777215,metalness:.1,roughness:.9,clearcoat:.5,clearcoatRoughness:.7}),X=new A(N,D);X.position.set(0,-.2,0),X.rotation.x=Math.PI,X.scale.set(1.25,1.25,1.25),it.add(X);const K=new Lt({color:16777215,metalness:.1,roughness:.9,clearcoat:.6,clearcoatRoughness:.8,side:de,transparent:!1,opacity:.8}),w=new A(F,K);w.scale.set(.7,.7,.7),w.position.set(0,-.3,0),w.rotation.x=Math.PI/2,w.renderOrder=1,it.add(w),x.add(it);const v=new Pn({transparent:!0,uniforms:{u_time:{value:0}},vertexShader:`
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
    `}),C=new A(F,v);C.position.set(0,-.2,0),C.scale.set(.7,.7,.7),C.rotation.x=-Math.PI/2,C.renderOrder=2,it.add(C);const k=new St(.25,32,32),z=new A(k,G);z.position.set(-.45,1.35,-.1),x.add(z);const H=new A(k,J);H.position.set(.45,1.35,-.1),x.add(H);const ht=new St(.25,32,32,Math.PI/2,Math.PI),ut=new A(ht,G);ut.scale.set(1.1,.6,.8),ut.position.set(0,.84,.5),ut.rotation.y=Math.PI;const pt=new St(.25,32,32,Math.PI/2,Math.PI),Tt=new A(pt,J);Tt.scale.set(1.1,.6,.8),Tt.position.set(0,.84,.5),Tt.rotation.y=0;const dt=new ge(.25,32),xt=new A(dt,yt);xt.scale.set(.8,.6,.8),xt.position.set(0,.84,.5),xt.rotation.y=Math.PI/2;const Pt=new qt;Pt.add(ut),Pt.add(Tt),Pt.add(xt),x.add(Pt),new Lt({color:8374441,metalness:1,roughness:.25,clearcoat:.7,clearcoatRoughness:.3});const Dt=new St(.35,32,32),Et=new A(Dt,G);Et.scale.set(.75,1.25,.65),Et.position.set(-.7,-.15,.2),x.add(Et);const Ht=new A(Dt,J);Ht.scale.set(.75,1.25,.65),Ht.position.set(.7,-.15,.2),x.add(Ht);const Ut=new le(.2,.22,.6,32),kt=new A(Ut,G);kt.position.set(-.4,-1.05,0),x.add(kt);const B=new A(Ut,J);B.position.set(.4,-1.05,0),x.add(B);const _t=new St(.3,32,32),nt=new A(_t,G);nt.scale.set(1,.72,1.5),nt.position.set(-.4,-1.45,.17),x.add(nt);const et=new A(_t,J);et.scale.set(1,.72,1.5),et.position.set(.4,-1.45,.17),x.add(et);const wt=new St(.44,32,32),Mt=new A(wt,gt);Mt.position.set(-.15,-.45,-.4),x.add(Mt);const Bt=new A(wt,gt);Bt.position.set(.15,-.45,-.4),x.add(Bt);const Yt=new St(.18,32,32),Qt=new A(Yt,gt);Qt.position.set(0,-.35,-.8),x.add(Qt),new Pi().load("https://threejs.org/examples/fonts/helvetiker_bold.typeface.json",function(At){const ie=new ze("X",{font:At,size:.2,depth:.05}),Pe=new A(ie,J);Pe.position.set(-.3,.99,.53),Pe.rotation.x=ee.degToRad(-5),Pe.rotation.y=ee.degToRad(-15),x.add(Pe);const Le=new ze("O",{font:At,size:.2,depth:.05}),He=new A(Le,J);He.position.set(.14,.99,.53),He.rotation.y=ee.degToRad(12),He.rotation.x=ee.degToRad(-5),x.add(He)});const ne=y();x.add(ne),f();const ue=m();x.add(ue),E(),a.value=m(),x.add(a.value),M(a.value);const _e=S();x.add(_e);const ye=S();ye.position.set(-.1,-.2,0),ye.scale.set(.3,.3,.3),x.add(ye);const me=1e3,Te=new Cn,ve=[];for(let At=0;At<me;At++){const ie=(Math.random()-.5)*20,Pe=Math.random()*20,Le=(Math.random()-.5)*20;ve.push(ie,Pe,Le)}Te.setAttribute("position",new qe(ve,3));const Ve=new yp({color:16777215,size:.1,transparent:!0,opacity:.8}),Re=new SS(Te,Ve);x.add(Re),O(),x.scale.set(1.4,1.4,1.4),P.add(x),x.position.set(t.bodyPosition.x,t.bodyPosition.y,t.bodyPosition.z),U.position.set(t.bodyPosition.x,1,t.cameraPosition),U.lookAt(t.bodyPosition.x,0,0),U.position.z=4,x.rotation.x=.1,I(),Ge(()=>t.bodyPosition,At=>{x.position.set(At.x,At.y,At.z)}),Ge(()=>t.cameraPosition,At=>{U.position.set(t.bodyPosition.x,1,At),U.lookAt(t.bodyPosition.x,0,0)}),window.addEventListener("resize",()=>{U.aspect=window.innerWidth/window.innerHeight,U.updateProjectionMatrix(),Q.setSize(window.innerWidth,window.innerHeight)})}});function h(){s.value=!0}function u(){i.value=!0}function d(){o.value=!0}function p(){r.value=!0}function _(){s.value=!1,i.value=!1,o.value=!1,r.value=!1}for(let y=0;y<Z1;y++){const f=document.createElement("div");f.classList.add("confetti"),f.style.left=`${Math.random()*100}vw`,f.style.animationDuration=`${Math.random()*3+4}s`,f.style.animationDelay=`${Math.random()*5}s`,document.body.appendChild(f)}for(let y=0;y<J1;y++){const f=document.createElement("div");f.classList.add("light"),document.body.appendChild(f)}return(y,f)=>(ui(),hi(dn,null,[Vt("div",{ref_key:"threeCanvas",ref:e,class:zn(n.background?"no-bg":"three-canvas")},null,2),Vt("div",j1,[Vt("button",{class:"pixel-btn up",onMousedown:d,onMouseup:_},"UP",32),Vt("div",K1,[Vt("button",{class:"pixel-btn left",onMousedown:h,onMouseup:_},"LEFT",32),Vt("button",{class:"pixel-btn right",onMousedown:u,onMouseup:_},"RIGHT",32)]),Vt("button",{class:"pixel-btn down",onMousedown:p,onMouseup:_},"DOWN",32)])],64))}}),tb=di(Q1,[["__scopeId","data-v-c0cb6b69"]]),eb=[{path:"/3d-bear-arts/leather",name:"Leather",component:g1},{path:"/3d-bear-arts/pop-art",name:"Pop",component:v1},{path:"/3d-bear-arts/pop-art-bear-3",name:"PopArtBear 3",component:w1},{path:"/3d-bear-arts/machine",name:"MetalMachineBear",component:T1},{path:"/3d-bear-arts/water",name:"Water Bear",component:C1},{path:"/3d-bear-arts/water",name:"Water",component:G1},{path:"/3d-bear-arts/ghost-bear",name:"GhostBear",component:W1},{path:"/3d-bear-arts/white-ghost-bear",name:"GhostBallonBear",component:$1},{path:"/3d-bear-arts/",name:"Santa",component:tb},{path:"/3d-bear-arts/half",name:"HalfBear",component:p1}],nb=r_({history:Fg(),routes:eb}),Ip=tg(og);Ip.use(nb);Ip.mount("#app");
