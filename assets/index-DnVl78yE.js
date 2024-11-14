(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function e(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(s){if(s.ep)return;s.ep=!0;const o=e(s);fetch(s.href,o)}})();/**
* @vue/shared v3.5.10
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Hc(n){const t=Object.create(null);for(const e of n.split(","))t[e]=1;return e=>e in t}const Ie={},oo=[],vi=()=>{},Lp=()=>!1,Sa=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),kc=n=>n.startsWith("onUpdate:"),ln=Object.assign,Vc=(n,t)=>{const e=n.indexOf(t);e>-1&&n.splice(e,1)},Dp=Object.prototype.hasOwnProperty,Me=(n,t)=>Dp.call(n,t),re=Array.isArray,ko=n=>Ea(n)==="[object Map]",Up=n=>Ea(n)==="[object Set]",se=n=>typeof n=="function",sn=n=>typeof n=="string",Eo=n=>typeof n=="symbol",$e=n=>n!==null&&typeof n=="object",Ad=n=>($e(n)||se(n))&&se(n.then)&&se(n.catch),Np=Object.prototype.toString,Ea=n=>Np.call(n),Fp=n=>Ea(n).slice(8,-1),Op=n=>Ea(n)==="[object Object]",Wc=n=>sn(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,Vo=Hc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ba=n=>{const t=Object.create(null);return e=>t[e]||(t[e]=n(e))},Bp=/-(\w)/g,kn=ba(n=>n.replace(Bp,(t,e)=>e?e.toUpperCase():"")),zp=/\B([A-Z])/g,Us=ba(n=>n.replace(zp,"-$1").toLowerCase()),Ta=ba(n=>n.charAt(0).toUpperCase()+n.slice(1)),Wa=ba(n=>n?`on${Ta(n)}`:""),ls=(n,t)=>!Object.is(n,t),Xa=(n,...t)=>{for(let e=0;e<n.length;e++)n[e](...t)},Rd=(n,t,e,i=!1)=>{Object.defineProperty(n,t,{configurable:!0,enumerable:!1,writable:i,value:e})},Gp=n=>{const t=parseFloat(n);return isNaN(t)?n:t};let Au;const Pd=()=>Au||(Au=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Xc(n){if(re(n)){const t={};for(let e=0;e<n.length;e++){const i=n[e],s=sn(i)?Wp(i):Xc(i);if(s)for(const o in s)t[o]=s[o]}return t}else if(sn(n)||$e(n))return n}const Hp=/;(?![^(]*\))/g,kp=/:([^]+)/,Vp=/\/\*[^]*?\*\//g;function Wp(n){const t={};return n.replace(Vp,"").split(Hp).forEach(e=>{if(e){const i=e.split(kp);i.length>1&&(t[i[0].trim()]=i[1].trim())}}),t}function Wn(n){let t="";if(sn(n))t=n;else if(re(n))for(let e=0;e<n.length;e++){const i=Wn(n[e]);i&&(t+=i+" ")}else if($e(n))for(const e in n)n[e]&&(t+=e+" ");return t.trim()}const Xp="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",qp=Hc(Xp);function Cd(n){return!!n||n===""}/**
* @vue/reactivity v3.5.10
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Dn;class Yp{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Dn,!t&&Dn&&(this.index=(Dn.scopes||(Dn.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,e;if(this.scopes)for(t=0,e=this.scopes.length;t<e;t++)this.scopes[t].pause();for(t=0,e=this.effects.length;t<e;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,e;if(this.scopes)for(t=0,e=this.scopes.length;t<e;t++)this.scopes[t].resume();for(t=0,e=this.effects.length;t<e;t++)this.effects[t].resume()}}run(t){if(this._active){const e=Dn;try{return Dn=this,t()}finally{Dn=e}}}on(){Dn=this}off(){Dn=this.parent}stop(t){if(this._active){let e,i;for(e=0,i=this.effects.length;e<i;e++)this.effects[e].stop();for(e=0,i=this.cleanups.length;e<i;e++)this.cleanups[e]();if(this.scopes)for(e=0,i=this.scopes.length;e<i;e++)this.scopes[e].stop(!0);if(!this.detached&&this.parent&&!t){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function $p(){return Dn}let Ue;const qa=new WeakSet;class Id{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Dn&&Dn.active&&Dn.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,qa.has(this)&&(qa.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Dd(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Ru(this),Ud(this);const t=Ue,e=si;Ue=this,si=!0;try{return this.fn()}finally{Nd(this),Ue=t,si=e,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)$c(t);this.deps=this.depsTail=void 0,Ru(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?qa.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Bl(this)&&this.run()}get dirty(){return Bl(this)}}let Ld=0,eo;function Dd(n){n.flags|=8,n.next=eo,eo=n}function qc(){Ld++}function Yc(){if(--Ld>0)return;let n;for(;eo;){let t=eo,e;for(;t;)t.flags&1||(t.flags&=-9),t=t.next;for(t=eo,eo=void 0;t;){if(e=t.next,t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(i){n||(n=i)}t=e}}if(n)throw n}function Ud(n){for(let t=n.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function Nd(n){let t,e=n.depsTail,i=e;for(;i;){const s=i.prevDep;i.version===-1?(i===e&&(e=s),$c(i),jp(i)):t=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=s}n.deps=t,n.depsTail=e}function Bl(n){for(let t=n.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(Fd(t.dep.computed)||t.dep.version!==t.version))return!0;return!!n._dirty}function Fd(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===er))return;n.globalVersion=er;const t=n.dep;if(n.flags|=2,t.version>0&&!n.isSSR&&n.deps&&!Bl(n)){n.flags&=-3;return}const e=Ue,i=si;Ue=n,si=!0;try{Ud(n);const s=n.fn(n._value);(t.version===0||ls(s,n._value))&&(n._value=s,t.version++)}catch(s){throw t.version++,s}finally{Ue=e,si=i,Nd(n),n.flags&=-3}}function $c(n,t=!1){const{dep:e,prevSub:i,nextSub:s}=n;if(i&&(i.nextSub=s,n.prevSub=void 0),s&&(s.prevSub=i,n.nextSub=void 0),e.subs===n&&(e.subs=i),!e.subs&&e.computed){e.computed.flags&=-5;for(let o=e.computed.deps;o;o=o.nextDep)$c(o,!0)}!t&&!--e.sc&&e.map&&e.map.delete(e.key)}function jp(n){const{prevDep:t,nextDep:e}=n;t&&(t.nextDep=e,n.prevDep=void 0),e&&(e.prevDep=t,n.nextDep=void 0)}let si=!0;const Od=[];function us(){Od.push(si),si=!1}function hs(){const n=Od.pop();si=n===void 0?!0:n}function Ru(n){const{cleanup:t}=n;if(n.cleanup=void 0,t){const e=Ue;Ue=void 0;try{t()}finally{Ue=e}}}let er=0;class Kp{constructor(t,e){this.sub=t,this.dep=e,this.version=e.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class jc{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.target=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(t){if(!Ue||!si||Ue===this.computed)return;let e=this.activeLink;if(e===void 0||e.sub!==Ue)e=this.activeLink=new Kp(Ue,this),Ue.deps?(e.prevDep=Ue.depsTail,Ue.depsTail.nextDep=e,Ue.depsTail=e):Ue.deps=Ue.depsTail=e,Bd(e);else if(e.version===-1&&(e.version=this.version,e.nextDep)){const i=e.nextDep;i.prevDep=e.prevDep,e.prevDep&&(e.prevDep.nextDep=i),e.prevDep=Ue.depsTail,e.nextDep=void 0,Ue.depsTail.nextDep=e,Ue.depsTail=e,Ue.deps===e&&(Ue.deps=i)}return e}trigger(t){this.version++,er++,this.notify(t)}notify(t){qc();try{for(let e=this.subs;e;e=e.prevSub)e.sub.notify()&&e.sub.dep.notify()}finally{Yc()}}}function Bd(n){if(n.dep.sc++,n.sub.flags&4){const t=n.dep.computed;if(t&&!n.dep.subs){t.flags|=20;for(let i=t.deps;i;i=i.nextDep)Bd(i)}const e=n.dep.subs;e!==n&&(n.prevSub=e,e&&(e.nextSub=n)),n.dep.subs=n}}const zl=new WeakMap,Ps=Symbol(""),Gl=Symbol(""),nr=Symbol("");function pn(n,t,e){if(si&&Ue){let i=zl.get(n);i||zl.set(n,i=new Map);let s=i.get(e);s||(i.set(e,s=new jc),s.target=n,s.map=i,s.key=e),s.track()}}function Gi(n,t,e,i,s,o){const r=zl.get(n);if(!r){er++;return}const a=l=>{l&&l.trigger()};if(qc(),t==="clear")r.forEach(a);else{const l=re(n),c=l&&Wc(e);if(l&&e==="length"){const h=Number(i);r.forEach((u,d)=>{(d==="length"||d===nr||!Eo(d)&&d>=h)&&a(u)})}else switch(e!==void 0&&a(r.get(e)),c&&a(r.get(nr)),t){case"add":l?c&&a(r.get("length")):(a(r.get(Ps)),ko(n)&&a(r.get(Gl)));break;case"delete":l||(a(r.get(Ps)),ko(n)&&a(r.get(Gl)));break;case"set":ko(n)&&a(r.get(Ps));break}}Yc()}function Os(n){const t=Se(n);return t===n?t:(pn(t,"iterate",nr),oi(n)?t:t.map(xn))}function Kc(n){return pn(n=Se(n),"iterate",nr),n}const Zp={__proto__:null,[Symbol.iterator](){return Ya(this,Symbol.iterator,xn)},concat(...n){return Os(this).concat(...n.map(t=>re(t)?Os(t):t))},entries(){return Ya(this,"entries",n=>(n[1]=xn(n[1]),n))},every(n,t){return Ai(this,"every",n,t,void 0,arguments)},filter(n,t){return Ai(this,"filter",n,t,e=>e.map(xn),arguments)},find(n,t){return Ai(this,"find",n,t,xn,arguments)},findIndex(n,t){return Ai(this,"findIndex",n,t,void 0,arguments)},findLast(n,t){return Ai(this,"findLast",n,t,xn,arguments)},findLastIndex(n,t){return Ai(this,"findLastIndex",n,t,void 0,arguments)},forEach(n,t){return Ai(this,"forEach",n,t,void 0,arguments)},includes(...n){return $a(this,"includes",n)},indexOf(...n){return $a(this,"indexOf",n)},join(n){return Os(this).join(n)},lastIndexOf(...n){return $a(this,"lastIndexOf",n)},map(n,t){return Ai(this,"map",n,t,void 0,arguments)},pop(){return Co(this,"pop")},push(...n){return Co(this,"push",n)},reduce(n,...t){return Pu(this,"reduce",n,t)},reduceRight(n,...t){return Pu(this,"reduceRight",n,t)},shift(){return Co(this,"shift")},some(n,t){return Ai(this,"some",n,t,void 0,arguments)},splice(...n){return Co(this,"splice",n)},toReversed(){return Os(this).toReversed()},toSorted(n){return Os(this).toSorted(n)},toSpliced(...n){return Os(this).toSpliced(...n)},unshift(...n){return Co(this,"unshift",n)},values(){return Ya(this,"values",xn)}};function Ya(n,t,e){const i=Kc(n),s=i[t]();return i!==n&&!oi(n)&&(s._next=s.next,s.next=()=>{const o=s._next();return o.value&&(o.value=e(o.value)),o}),s}const Jp=Array.prototype;function Ai(n,t,e,i,s,o){const r=Kc(n),a=r!==n&&!oi(n),l=r[t];if(l!==Jp[t]){const u=l.apply(n,o);return a?xn(u):u}let c=e;r!==n&&(a?c=function(u,d){return e.call(this,xn(u),d,n)}:e.length>2&&(c=function(u,d){return e.call(this,u,d,n)}));const h=l.call(r,c,i);return a&&s?s(h):h}function Pu(n,t,e,i){const s=Kc(n);let o=e;return s!==n&&(oi(n)?e.length>3&&(o=function(r,a,l){return e.call(this,r,a,l,n)}):o=function(r,a,l){return e.call(this,r,xn(a),l,n)}),s[t](o,...i)}function $a(n,t,e){const i=Se(n);pn(i,"iterate",nr);const s=i[t](...e);return(s===-1||s===!1)&&tu(e[0])?(e[0]=Se(e[0]),i[t](...e)):s}function Co(n,t,e=[]){us(),qc();const i=Se(n)[t].apply(n,e);return Yc(),hs(),i}const Qp=Hc("__proto__,__v_isRef,__isVue"),zd=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(Eo));function tm(n){Eo(n)||(n=String(n));const t=Se(this);return pn(t,"has",n),t.hasOwnProperty(n)}class Gd{constructor(t=!1,e=!1){this._isReadonly=t,this._isShallow=e}get(t,e,i){const s=this._isReadonly,o=this._isShallow;if(e==="__v_isReactive")return!s;if(e==="__v_isReadonly")return s;if(e==="__v_isShallow")return o;if(e==="__v_raw")return i===(s?o?fm:Wd:o?Vd:kd).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(i)?t:void 0;const r=re(t);if(!s){let l;if(r&&(l=Zp[e]))return l;if(e==="hasOwnProperty")return tm}const a=Reflect.get(t,e,fn(t)?t:i);return(Eo(e)?zd.has(e):Qp(e))||(s||pn(t,"get",e),o)?a:fn(a)?r&&Wc(e)?a:a.value:$e(a)?s?qd(a):Ra(a):a}}class Hd extends Gd{constructor(t=!1){super(!1,t)}set(t,e,i,s){let o=t[e];if(!this._isShallow){const l=Cs(o);if(!oi(i)&&!Cs(i)&&(o=Se(o),i=Se(i)),!re(t)&&fn(o)&&!fn(i))return l?!1:(o.value=i,!0)}const r=re(t)&&Wc(e)?Number(e)<t.length:Me(t,e),a=Reflect.set(t,e,i,fn(t)?t:s);return t===Se(s)&&(r?ls(i,o)&&Gi(t,"set",e,i):Gi(t,"add",e,i)),a}deleteProperty(t,e){const i=Me(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&i&&Gi(t,"delete",e,void 0),s}has(t,e){const i=Reflect.has(t,e);return(!Eo(e)||!zd.has(e))&&pn(t,"has",e),i}ownKeys(t){return pn(t,"iterate",re(t)?"length":Ps),Reflect.ownKeys(t)}}class em extends Gd{constructor(t=!1){super(!0,t)}set(t,e){return!0}deleteProperty(t,e){return!0}}const nm=new Hd,im=new em,sm=new Hd(!0);const Zc=n=>n,Aa=n=>Reflect.getPrototypeOf(n);function yr(n,t,e=!1,i=!1){n=n.__v_raw;const s=Se(n),o=Se(t);e||(ls(t,o)&&pn(s,"get",t),pn(s,"get",o));const{has:r}=Aa(s),a=i?Zc:e?eu:xn;if(r.call(s,t))return a(n.get(t));if(r.call(s,o))return a(n.get(o));n!==s&&n.get(t)}function Mr(n,t=!1){const e=this.__v_raw,i=Se(e),s=Se(n);return t||(ls(n,s)&&pn(i,"has",n),pn(i,"has",s)),n===s?e.has(n):e.has(n)||e.has(s)}function wr(n,t=!1){return n=n.__v_raw,!t&&pn(Se(n),"iterate",Ps),Reflect.get(n,"size",n)}function Cu(n,t=!1){!t&&!oi(n)&&!Cs(n)&&(n=Se(n));const e=Se(this);return Aa(e).has.call(e,n)||(e.add(n),Gi(e,"add",n,n)),this}function Iu(n,t,e=!1){!e&&!oi(t)&&!Cs(t)&&(t=Se(t));const i=Se(this),{has:s,get:o}=Aa(i);let r=s.call(i,n);r||(n=Se(n),r=s.call(i,n));const a=o.call(i,n);return i.set(n,t),r?ls(t,a)&&Gi(i,"set",n,t):Gi(i,"add",n,t),this}function Lu(n){const t=Se(this),{has:e,get:i}=Aa(t);let s=e.call(t,n);s||(n=Se(n),s=e.call(t,n)),i&&i.call(t,n);const o=t.delete(n);return s&&Gi(t,"delete",n,void 0),o}function Du(){const n=Se(this),t=n.size!==0,e=n.clear();return t&&Gi(n,"clear",void 0,void 0),e}function Sr(n,t){return function(i,s){const o=this,r=o.__v_raw,a=Se(r),l=t?Zc:n?eu:xn;return!n&&pn(a,"iterate",Ps),r.forEach((c,h)=>i.call(s,l(c),l(h),o))}}function Er(n,t,e){return function(...i){const s=this.__v_raw,o=Se(s),r=ko(o),a=n==="entries"||n===Symbol.iterator&&r,l=n==="keys"&&r,c=s[n](...i),h=e?Zc:t?eu:xn;return!t&&pn(o,"iterate",l?Gl:Ps),{next(){const{value:u,done:d}=c.next();return d?{value:u,done:d}:{value:a?[h(u[0]),h(u[1])]:h(u),done:d}},[Symbol.iterator](){return this}}}}function $i(n){return function(...t){return n==="delete"?!1:n==="clear"?void 0:this}}function om(){const n={get(o){return yr(this,o)},get size(){return wr(this)},has:Mr,add:Cu,set:Iu,delete:Lu,clear:Du,forEach:Sr(!1,!1)},t={get(o){return yr(this,o,!1,!0)},get size(){return wr(this)},has:Mr,add(o){return Cu.call(this,o,!0)},set(o,r){return Iu.call(this,o,r,!0)},delete:Lu,clear:Du,forEach:Sr(!1,!0)},e={get(o){return yr(this,o,!0)},get size(){return wr(this,!0)},has(o){return Mr.call(this,o,!0)},add:$i("add"),set:$i("set"),delete:$i("delete"),clear:$i("clear"),forEach:Sr(!0,!1)},i={get(o){return yr(this,o,!0,!0)},get size(){return wr(this,!0)},has(o){return Mr.call(this,o,!0)},add:$i("add"),set:$i("set"),delete:$i("delete"),clear:$i("clear"),forEach:Sr(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(o=>{n[o]=Er(o,!1,!1),e[o]=Er(o,!0,!1),t[o]=Er(o,!1,!0),i[o]=Er(o,!0,!0)}),[n,e,t,i]}const[rm,am,lm,cm]=om();function Jc(n,t){const e=t?n?cm:lm:n?am:rm;return(i,s,o)=>s==="__v_isReactive"?!n:s==="__v_isReadonly"?n:s==="__v_raw"?i:Reflect.get(Me(e,s)&&s in i?e:i,s,o)}const um={get:Jc(!1,!1)},hm={get:Jc(!1,!0)},dm={get:Jc(!0,!1)};const kd=new WeakMap,Vd=new WeakMap,Wd=new WeakMap,fm=new WeakMap;function pm(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function mm(n){return n.__v_skip||!Object.isExtensible(n)?0:pm(Fp(n))}function Ra(n){return Cs(n)?n:Qc(n,!1,nm,um,kd)}function Xd(n){return Qc(n,!1,sm,hm,Vd)}function qd(n){return Qc(n,!0,im,dm,Wd)}function Qc(n,t,e,i,s){if(!$e(n)||n.__v_raw&&!(t&&n.__v_isReactive))return n;const o=s.get(n);if(o)return o;const r=mm(n);if(r===0)return n;const a=new Proxy(n,r===2?i:e);return s.set(n,a),a}function Wo(n){return Cs(n)?Wo(n.__v_raw):!!(n&&n.__v_isReactive)}function Cs(n){return!!(n&&n.__v_isReadonly)}function oi(n){return!!(n&&n.__v_isShallow)}function tu(n){return n?!!n.__v_raw:!1}function Se(n){const t=n&&n.__v_raw;return t?Se(t):n}function gm(n){return!Me(n,"__v_skip")&&Object.isExtensible(n)&&Rd(n,"__v_skip",!0),n}const xn=n=>$e(n)?Ra(n):n,eu=n=>$e(n)?qd(n):n;function fn(n){return n?n.__v_isRef===!0:!1}function Zt(n){return Yd(n,!1)}function Xo(n){return Yd(n,!0)}function Yd(n,t){return fn(n)?n:new _m(n,t)}class _m{constructor(t,e){this.dep=new jc,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=e?t:Se(t),this._value=e?t:xn(t),this.__v_isShallow=e}get value(){return this.dep.track(),this._value}set value(t){const e=this._rawValue,i=this.__v_isShallow||oi(t)||Cs(t);t=i?t:Se(t),ls(t,e)&&(this._rawValue=t,this._value=i?t:xn(t),this.dep.trigger())}}function ro(n){return fn(n)?n.value:n}const vm={get:(n,t,e)=>t==="__v_raw"?n:ro(Reflect.get(n,t,e)),set:(n,t,e,i)=>{const s=n[t];return fn(s)&&!fn(e)?(s.value=e,!0):Reflect.set(n,t,e,i)}};function $d(n){return Wo(n)?n:new Proxy(n,vm)}class xm{constructor(t,e,i){this.fn=t,this.setter=e,this._value=void 0,this.dep=new jc(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=er-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!e,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&Ue!==this)return Dd(this),!0}get value(){const t=this.dep.track();return Fd(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function ym(n,t,e=!1){let i,s;return se(n)?i=n:(i=n.get,s=n.set),new xm(i,s,e)}const br={},ha=new WeakMap;let ws;function Mm(n,t=!1,e=ws){if(e){let i=ha.get(e);i||ha.set(e,i=[]),i.push(n)}}function wm(n,t,e=Ie){const{immediate:i,deep:s,once:o,scheduler:r,augmentJob:a,call:l}=e,c=S=>s?S:oi(S)||s===!1||s===0?Oi(S,1):Oi(S);let h,u,d,f,_=!1,y=!1;if(fn(n)?(u=()=>n.value,_=oi(n)):Wo(n)?(u=()=>c(n),_=!0):re(n)?(y=!0,_=n.some(S=>Wo(S)||oi(S)),u=()=>n.map(S=>{if(fn(S))return S.value;if(Wo(S))return c(S);if(se(S))return l?l(S,2):S()})):se(n)?t?u=l?()=>l(n,2):n:u=()=>{if(d){us();try{d()}finally{hs()}}const S=ws;ws=h;try{return l?l(n,3,[f]):n(f)}finally{ws=S}}:u=vi,t&&s){const S=u,O=s===!0?1/0:s;u=()=>Oi(S(),O)}const m=$p(),p=()=>{h.stop(),m&&Vc(m.effects,h)};if(o&&t){const S=t;t=(...O)=>{S(...O),p()}}let b=y?new Array(n.length).fill(br):br;const M=S=>{if(!(!(h.flags&1)||!h.dirty&&!S))if(t){const O=h.run();if(s||_||(y?O.some((I,P)=>ls(I,b[P])):ls(O,b))){d&&d();const I=ws;ws=h;try{const P=[O,b===br?void 0:y&&b[0]===br?[]:b,f];l?l(t,3,P):t(...P),b=O}finally{ws=I}}}else h.run()};return a&&a(M),h=new Id(u),h.scheduler=r?()=>r(M,!1):M,f=S=>Mm(S,!1,h),d=h.onStop=()=>{const S=ha.get(h);if(S){if(l)l(S,4);else for(const O of S)O();ha.delete(h)}},t?i?M(!0):b=h.run():r?r(M.bind(null,!0),!0):h.run(),p.pause=h.pause.bind(h),p.resume=h.resume.bind(h),p.stop=p,p}function Oi(n,t=1/0,e){if(t<=0||!$e(n)||n.__v_skip||(e=e||new Set,e.has(n)))return n;if(e.add(n),t--,fn(n))Oi(n.value,t,e);else if(re(n))for(let i=0;i<n.length;i++)Oi(n[i],t,e);else if(Up(n)||ko(n))n.forEach(i=>{Oi(i,t,e)});else if(Op(n)){for(const i in n)Oi(n[i],t,e);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&Oi(n[i],t,e)}return n}/**
* @vue/runtime-core v3.5.10
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function mr(n,t,e,i){try{return i?n(...i):n()}catch(s){Pa(s,t,e)}}function yi(n,t,e,i){if(se(n)){const s=mr(n,t,e,i);return s&&Ad(s)&&s.catch(o=>{Pa(o,t,e)}),s}if(re(n)){const s=[];for(let o=0;o<n.length;o++)s.push(yi(n[o],t,e,i));return s}}function Pa(n,t,e,i=!0){const s=t?t.vnode:null,{errorHandler:o,throwUnhandledErrorInProduction:r}=t&&t.appContext.config||Ie;if(t){let a=t.parent;const l=t.proxy,c=`https://vuejs.org/error-reference/#runtime-${e}`;for(;a;){const h=a.ec;if(h){for(let u=0;u<h.length;u++)if(h[u](n,l,c)===!1)return}a=a.parent}if(o){us(),mr(o,null,10,[n,l,c]),hs();return}}Sm(n,e,s,i,r)}function Sm(n,t,e,i=!0,s=!1){if(s)throw n;console.error(n)}let ir=!1,Hl=!1;const yn=[];let mi=0;const ao=[];let ns=null,Js=0;const jd=Promise.resolve();let nu=null;function Kd(n){const t=nu||jd;return n?t.then(this?n.bind(this):n):t}function Em(n){let t=ir?mi+1:0,e=yn.length;for(;t<e;){const i=t+e>>>1,s=yn[i],o=sr(s);o<n||o===n&&s.flags&2?t=i+1:e=i}return t}function iu(n){if(!(n.flags&1)){const t=sr(n),e=yn[yn.length-1];!e||!(n.flags&2)&&t>=sr(e)?yn.push(n):yn.splice(Em(t),0,n),n.flags|=1,Zd()}}function Zd(){!ir&&!Hl&&(Hl=!0,nu=jd.then(Qd))}function bm(n){re(n)?ao.push(...n):ns&&n.id===-1?ns.splice(Js+1,0,n):n.flags&1||(ao.push(n),n.flags|=1),Zd()}function Uu(n,t,e=ir?mi+1:0){for(;e<yn.length;e++){const i=yn[e];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;yn.splice(e,1),e--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function Jd(n){if(ao.length){const t=[...new Set(ao)].sort((e,i)=>sr(e)-sr(i));if(ao.length=0,ns){ns.push(...t);return}for(ns=t,Js=0;Js<ns.length;Js++){const e=ns[Js];e.flags&4&&(e.flags&=-2),e.flags&8||e(),e.flags&=-2}ns=null,Js=0}}const sr=n=>n.id==null?n.flags&2?-1:1/0:n.id;function Qd(n){Hl=!1,ir=!0;try{for(mi=0;mi<yn.length;mi++){const t=yn[mi];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),mr(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;mi<yn.length;mi++){const t=yn[mi];t&&(t.flags&=-2)}mi=0,yn.length=0,Jd(),ir=!1,nu=null,(yn.length||ao.length)&&Qd()}}let Un=null,tf=null;function da(n){const t=Un;return Un=n,tf=n&&n.type.__scopeId||null,t}function fi(n,t=Un,e){if(!t||n._n)return n;const i=(...s)=>{i._d&&Wu(-1);const o=da(t);let r;try{r=n(...s)}finally{da(o),i._d&&Wu(1)}return r};return i._n=!0,i._c=!0,i._d=!0,i}function Tm(n,t){if(Un===null)return n;const e=Ua(Un),i=n.dirs||(n.dirs=[]);for(let s=0;s<t.length;s++){let[o,r,a,l=Ie]=t[s];o&&(se(o)&&(o={mounted:o,updated:o}),o.deep&&Oi(r),i.push({dir:o,instance:e,value:r,oldValue:void 0,arg:a,modifiers:l}))}return n}function ps(n,t,e,i){const s=n.dirs,o=t&&t.dirs;for(let r=0;r<s.length;r++){const a=s[r];o&&(a.oldValue=o[r].value);let l=a.dir[i];l&&(us(),yi(l,e,8,[n.el,a,n,t]),hs())}}const Am=Symbol("_vte"),Rm=n=>n.__isTeleport;function su(n,t){n.shapeFlag&6&&n.component?(n.transition=t,su(n.component.subTree,t)):n.shapeFlag&128?(n.ssContent.transition=t.clone(n.ssContent),n.ssFallback.transition=t.clone(n.ssFallback)):n.transition=t}/*! #__NO_SIDE_EFFECTS__ */function Xn(n,t){return se(n)?ln({name:n.name},t,{setup:n}):n}function ef(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function kl(n,t,e,i,s=!1){if(re(n)){n.forEach((_,y)=>kl(_,t&&(re(t)?t[y]:t),e,i,s));return}if(qo(i)&&!s)return;const o=i.shapeFlag&4?Ua(i.component):i.el,r=s?null:o,{i:a,r:l}=n,c=t&&t.r,h=a.refs===Ie?a.refs={}:a.refs,u=a.setupState,d=Se(u),f=u===Ie?()=>!1:_=>Me(d,_);if(c!=null&&c!==l&&(sn(c)?(h[c]=null,f(c)&&(u[c]=null)):fn(c)&&(c.value=null)),se(l))mr(l,a,12,[r,h]);else{const _=sn(l),y=fn(l);if(_||y){const m=()=>{if(n.f){const p=_?f(l)?u[l]:h[l]:l.value;s?re(p)&&Vc(p,o):re(p)?p.includes(o)||p.push(o):_?(h[l]=[o],f(l)&&(u[l]=h[l])):(l.value=[o],n.k&&(h[n.k]=l.value))}else _?(h[l]=r,f(l)&&(u[l]=r)):y&&(l.value=r,n.k&&(h[n.k]=r))};r?(m.id=-1,Ln(m,e)):m()}}}const qo=n=>!!n.type.__asyncLoader,nf=n=>n.type.__isKeepAlive;function Pm(n,t){sf(n,"a",t)}function Cm(n,t){sf(n,"da",t)}function sf(n,t,e=dn){const i=n.__wdc||(n.__wdc=()=>{let s=e;for(;s;){if(s.isDeactivated)return;s=s.parent}return n()});if(Ca(t,i,e),e){let s=e.parent;for(;s&&s.parent;)nf(s.parent.vnode)&&Im(i,t,e,s),s=s.parent}}function Im(n,t,e,i){const s=Ca(t,n,i,!0);ou(()=>{Vc(i[t],s)},e)}function Ca(n,t,e=dn,i=!1){if(e){const s=e[n]||(e[n]=[]),o=t.__weh||(t.__weh=(...r)=>{us();const a=gr(e),l=yi(t,e,n,r);return a(),hs(),l});return i?s.unshift(o):s.push(o),o}}const Vi=n=>(t,e=dn)=>{(!Da||n==="sp")&&Ca(n,(...i)=>t(...i),e)},Lm=Vi("bm"),ci=Vi("m"),Dm=Vi("bu"),Um=Vi("u"),Nm=Vi("bum"),ou=Vi("um"),Fm=Vi("sp"),Om=Vi("rtg"),Bm=Vi("rtc");function zm(n,t=dn){Ca("ec",n,t)}const Gm="components";function Nu(n,t){return km(Gm,n,!0,t)||n}const Hm=Symbol.for("v-ndc");function km(n,t,e=!0,i=!1){const s=Un||dn;if(s){const o=s.type;{const a=P0(o,!1);if(a&&(a===t||a===kn(t)||a===Ta(kn(t))))return o}const r=Fu(s[n]||o[n],t)||Fu(s.appContext[n],t);return!r&&i?o:r}}function Fu(n,t){return n&&(n[t]||n[kn(t)]||n[Ta(kn(t))])}const Vl=n=>n?Sf(n)?Ua(n):Vl(n.parent):null,Yo=ln(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>Vl(n.parent),$root:n=>Vl(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>ru(n),$forceUpdate:n=>n.f||(n.f=()=>{iu(n.update)}),$nextTick:n=>n.n||(n.n=Kd.bind(n.proxy)),$watch:n=>c0.bind(n)}),ja=(n,t)=>n!==Ie&&!n.__isScriptSetup&&Me(n,t),Vm={get({_:n},t){if(t==="__v_skip")return!0;const{ctx:e,setupState:i,data:s,props:o,accessCache:r,type:a,appContext:l}=n;let c;if(t[0]!=="$"){const f=r[t];if(f!==void 0)switch(f){case 1:return i[t];case 2:return s[t];case 4:return e[t];case 3:return o[t]}else{if(ja(i,t))return r[t]=1,i[t];if(s!==Ie&&Me(s,t))return r[t]=2,s[t];if((c=n.propsOptions[0])&&Me(c,t))return r[t]=3,o[t];if(e!==Ie&&Me(e,t))return r[t]=4,e[t];Wl&&(r[t]=0)}}const h=Yo[t];let u,d;if(h)return t==="$attrs"&&pn(n.attrs,"get",""),h(n);if((u=a.__cssModules)&&(u=u[t]))return u;if(e!==Ie&&Me(e,t))return r[t]=4,e[t];if(d=l.config.globalProperties,Me(d,t))return d[t]},set({_:n},t,e){const{data:i,setupState:s,ctx:o}=n;return ja(s,t)?(s[t]=e,!0):i!==Ie&&Me(i,t)?(i[t]=e,!0):Me(n.props,t)||t[0]==="$"&&t.slice(1)in n?!1:(o[t]=e,!0)},has({_:{data:n,setupState:t,accessCache:e,ctx:i,appContext:s,propsOptions:o}},r){let a;return!!e[r]||n!==Ie&&Me(n,r)||ja(t,r)||(a=o[0])&&Me(a,r)||Me(i,r)||Me(Yo,r)||Me(s.config.globalProperties,r)},defineProperty(n,t,e){return e.get!=null?n._.accessCache[t]=0:Me(e,"value")&&this.set(n,t,e.value,null),Reflect.defineProperty(n,t,e)}};function Ou(n){return re(n)?n.reduce((t,e)=>(t[e]=null,t),{}):n}let Wl=!0;function Wm(n){const t=ru(n),e=n.proxy,i=n.ctx;Wl=!1,t.beforeCreate&&Bu(t.beforeCreate,n,"bc");const{data:s,computed:o,methods:r,watch:a,provide:l,inject:c,created:h,beforeMount:u,mounted:d,beforeUpdate:f,updated:_,activated:y,deactivated:m,beforeDestroy:p,beforeUnmount:b,destroyed:M,unmounted:S,render:O,renderTracked:I,renderTriggered:P,errorCaptured:U,serverPrefetch:nt,expose:x,inheritAttrs:E,components:j,directives:k,filters:J}=t;if(c&&Xm(c,i,null),r)for(const Z in r){const H=r[Z];se(H)&&(i[Z]=H.bind(e))}if(s){const Z=s.call(e,e);$e(Z)&&(n.data=Ra(Z))}if(Wl=!0,o)for(const Z in o){const H=o[Z],gt=se(H)?H.bind(e,e):se(H.get)?H.get.bind(e,e):vi,yt=!se(H)&&se(H.set)?H.set.bind(e):vi,_t=Qn({get:gt,set:yt});Object.defineProperty(i,Z,{enumerable:!0,configurable:!0,get:()=>_t.value,set:It=>_t.value=It})}if(a)for(const Z in a)of(a[Z],i,e,Z);if(l){const Z=se(l)?l.call(e):l;Reflect.ownKeys(Z).forEach(H=>{ea(H,Z[H])})}h&&Bu(h,n,"c");function V(Z,H){re(H)?H.forEach(gt=>Z(gt.bind(e))):H&&Z(H.bind(e))}if(V(Lm,u),V(ci,d),V(Dm,f),V(Um,_),V(Pm,y),V(Cm,m),V(zm,U),V(Bm,I),V(Om,P),V(Nm,b),V(ou,S),V(Fm,nt),re(x))if(x.length){const Z=n.exposed||(n.exposed={});x.forEach(H=>{Object.defineProperty(Z,H,{get:()=>e[H],set:gt=>e[H]=gt})})}else n.exposed||(n.exposed={});O&&n.render===vi&&(n.render=O),E!=null&&(n.inheritAttrs=E),j&&(n.components=j),k&&(n.directives=k),nt&&ef(n)}function Xm(n,t,e=vi){re(n)&&(n=Xl(n));for(const i in n){const s=n[i];let o;$e(s)?"default"in s?o=Hi(s.from||i,s.default,!0):o=Hi(s.from||i):o=Hi(s),fn(o)?Object.defineProperty(t,i,{enumerable:!0,configurable:!0,get:()=>o.value,set:r=>o.value=r}):t[i]=o}}function Bu(n,t,e){yi(re(n)?n.map(i=>i.bind(t.proxy)):n.bind(t.proxy),t,e)}function of(n,t,e,i){let s=i.includes(".")?xf(e,i):()=>e[i];if(sn(n)){const o=t[n];se(o)&&We(s,o)}else if(se(n))We(s,n.bind(e));else if($e(n))if(re(n))n.forEach(o=>of(o,t,e,i));else{const o=se(n.handler)?n.handler.bind(e):t[n.handler];se(o)&&We(s,o,n)}}function ru(n){const t=n.type,{mixins:e,extends:i}=t,{mixins:s,optionsCache:o,config:{optionMergeStrategies:r}}=n.appContext,a=o.get(t);let l;return a?l=a:!s.length&&!e&&!i?l=t:(l={},s.length&&s.forEach(c=>fa(l,c,r,!0)),fa(l,t,r)),$e(t)&&o.set(t,l),l}function fa(n,t,e,i=!1){const{mixins:s,extends:o}=t;o&&fa(n,o,e,!0),s&&s.forEach(r=>fa(n,r,e,!0));for(const r in t)if(!(i&&r==="expose")){const a=qm[r]||e&&e[r];n[r]=a?a(n[r],t[r]):t[r]}return n}const qm={data:zu,props:Gu,emits:Gu,methods:Go,computed:Go,beforeCreate:gn,created:gn,beforeMount:gn,mounted:gn,beforeUpdate:gn,updated:gn,beforeDestroy:gn,beforeUnmount:gn,destroyed:gn,unmounted:gn,activated:gn,deactivated:gn,errorCaptured:gn,serverPrefetch:gn,components:Go,directives:Go,watch:$m,provide:zu,inject:Ym};function zu(n,t){return t?n?function(){return ln(se(n)?n.call(this,this):n,se(t)?t.call(this,this):t)}:t:n}function Ym(n,t){return Go(Xl(n),Xl(t))}function Xl(n){if(re(n)){const t={};for(let e=0;e<n.length;e++)t[n[e]]=n[e];return t}return n}function gn(n,t){return n?[...new Set([].concat(n,t))]:t}function Go(n,t){return n?ln(Object.create(null),n,t):t}function Gu(n,t){return n?re(n)&&re(t)?[...new Set([...n,...t])]:ln(Object.create(null),Ou(n),Ou(t??{})):t}function $m(n,t){if(!n)return t;if(!t)return n;const e=ln(Object.create(null),n);for(const i in t)e[i]=gn(n[i],t[i]);return e}function rf(){return{app:null,config:{isNativeTag:Lp,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let jm=0;function Km(n,t){return function(i,s=null){se(i)||(i=ln({},i)),s!=null&&!$e(s)&&(s=null);const o=rf(),r=new WeakSet,a=[];let l=!1;const c=o.app={_uid:jm++,_component:i,_props:s,_container:null,_context:o,_instance:null,version:I0,get config(){return o.config},set config(h){},use(h,...u){return r.has(h)||(h&&se(h.install)?(r.add(h),h.install(c,...u)):se(h)&&(r.add(h),h(c,...u))),c},mixin(h){return o.mixins.includes(h)||o.mixins.push(h),c},component(h,u){return u?(o.components[h]=u,c):o.components[h]},directive(h,u){return u?(o.directives[h]=u,c):o.directives[h]},mount(h,u,d){if(!l){const f=c._ceVNode||Ye(i,s);return f.appContext=o,d===!0?d="svg":d===!1&&(d=void 0),u&&t?t(f,h):n(f,h,d),l=!0,c._container=h,h.__vue_app__=c,Ua(f.component)}},onUnmount(h){a.push(h)},unmount(){l&&(yi(a,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(h,u){return o.provides[h]=u,c},runWithContext(h){const u=lo;lo=c;try{return h()}finally{lo=u}}};return c}}let lo=null;function ea(n,t){if(dn){let e=dn.provides;const i=dn.parent&&dn.parent.provides;i===e&&(e=dn.provides=Object.create(i)),e[n]=t}}function Hi(n,t,e=!1){const i=dn||Un;if(i||lo){const s=lo?lo._context.provides:i?i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(s&&n in s)return s[n];if(arguments.length>1)return e&&se(t)?t.call(i&&i.proxy):t}}const af={},lf=()=>Object.create(af),cf=n=>Object.getPrototypeOf(n)===af;function Zm(n,t,e,i=!1){const s={},o=lf();n.propsDefaults=Object.create(null),uf(n,t,s,o);for(const r in n.propsOptions[0])r in s||(s[r]=void 0);e?n.props=i?s:Xd(s):n.type.props?n.props=s:n.props=o,n.attrs=o}function Jm(n,t,e,i){const{props:s,attrs:o,vnode:{patchFlag:r}}=n,a=Se(s),[l]=n.propsOptions;let c=!1;if((i||r>0)&&!(r&16)){if(r&8){const h=n.vnode.dynamicProps;for(let u=0;u<h.length;u++){let d=h[u];if(Ia(n.emitsOptions,d))continue;const f=t[d];if(l)if(Me(o,d))f!==o[d]&&(o[d]=f,c=!0);else{const _=kn(d);s[_]=ql(l,a,_,f,n,!1)}else f!==o[d]&&(o[d]=f,c=!0)}}}else{uf(n,t,s,o)&&(c=!0);let h;for(const u in a)(!t||!Me(t,u)&&((h=Us(u))===u||!Me(t,h)))&&(l?e&&(e[u]!==void 0||e[h]!==void 0)&&(s[u]=ql(l,a,u,void 0,n,!0)):delete s[u]);if(o!==a)for(const u in o)(!t||!Me(t,u))&&(delete o[u],c=!0)}c&&Gi(n.attrs,"set","")}function uf(n,t,e,i){const[s,o]=n.propsOptions;let r=!1,a;if(t)for(let l in t){if(Vo(l))continue;const c=t[l];let h;s&&Me(s,h=kn(l))?!o||!o.includes(h)?e[h]=c:(a||(a={}))[h]=c:Ia(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,r=!0)}if(o){const l=Se(e),c=a||Ie;for(let h=0;h<o.length;h++){const u=o[h];e[u]=ql(s,l,u,c[u],n,!Me(c,u))}}return r}function ql(n,t,e,i,s,o){const r=n[e];if(r!=null){const a=Me(r,"default");if(a&&i===void 0){const l=r.default;if(r.type!==Function&&!r.skipFactory&&se(l)){const{propsDefaults:c}=s;if(e in c)i=c[e];else{const h=gr(s);i=c[e]=l.call(null,t),h()}}else i=l;s.ce&&s.ce._setProp(e,i)}r[0]&&(o&&!a?i=!1:r[1]&&(i===""||i===Us(e))&&(i=!0))}return i}const Qm=new WeakMap;function hf(n,t,e=!1){const i=e?Qm:t.propsCache,s=i.get(n);if(s)return s;const o=n.props,r={},a=[];let l=!1;if(!se(n)){const h=u=>{l=!0;const[d,f]=hf(u,t,!0);ln(r,d),f&&a.push(...f)};!e&&t.mixins.length&&t.mixins.forEach(h),n.extends&&h(n.extends),n.mixins&&n.mixins.forEach(h)}if(!o&&!l)return $e(n)&&i.set(n,oo),oo;if(re(o))for(let h=0;h<o.length;h++){const u=kn(o[h]);Hu(u)&&(r[u]=Ie)}else if(o)for(const h in o){const u=kn(h);if(Hu(u)){const d=o[h],f=r[u]=re(d)||se(d)?{type:d}:ln({},d),_=f.type;let y=!1,m=!0;if(re(_))for(let p=0;p<_.length;++p){const b=_[p],M=se(b)&&b.name;if(M==="Boolean"){y=!0;break}else M==="String"&&(m=!1)}else y=se(_)&&_.name==="Boolean";f[0]=y,f[1]=m,(y||Me(f,"default"))&&a.push(u)}}const c=[r,a];return $e(n)&&i.set(n,c),c}function Hu(n){return n[0]!=="$"&&!Vo(n)}const df=n=>n[0]==="_"||n==="$stable",au=n=>re(n)?n.map(gi):[gi(n)],t0=(n,t,e)=>{if(t._n)return t;const i=fi((...s)=>au(t(...s)),e);return i._c=!1,i},ff=(n,t,e)=>{const i=n._ctx;for(const s in n){if(df(s))continue;const o=n[s];if(se(o))t[s]=t0(s,o,i);else if(o!=null){const r=au(o);t[s]=()=>r}}},pf=(n,t)=>{const e=au(t);n.slots.default=()=>e},mf=(n,t,e)=>{for(const i in t)(e||i!=="_")&&(n[i]=t[i])},e0=(n,t,e)=>{const i=n.slots=lf();if(n.vnode.shapeFlag&32){const s=t._;s?(mf(i,t,e),e&&Rd(i,"_",s,!0)):ff(t,i)}else t&&pf(n,t)},n0=(n,t,e)=>{const{vnode:i,slots:s}=n;let o=!0,r=Ie;if(i.shapeFlag&32){const a=t._;a?e&&a===1?o=!1:mf(s,t,e):(o=!t.$stable,ff(t,s)),r=t}else t&&(pf(n,t),r={default:1});if(o)for(const a in s)!df(a)&&r[a]==null&&delete s[a]},Ln=g0;function i0(n){return s0(n)}function s0(n,t){const e=Pd();e.__VUE__=!0;const{insert:i,remove:s,patchProp:o,createElement:r,createText:a,createComment:l,setText:c,setElementText:h,parentNode:u,nextSibling:d,setScopeId:f=vi,insertStaticContent:_}=n,y=(g,T,L,N=null,D=null,X=null,K=void 0,w=null,v=!!T.dynamicChildren)=>{if(g===T)return;g&&!Io(g,T)&&(N=F(g),It(g,D,X,!0),g=null),T.patchFlag===-2&&(v=!1,T.dynamicChildren=null);const{type:C,ref:W,shapeFlag:z}=T;switch(C){case La:m(g,T,L,N);break;case or:p(g,T,L,N);break;case Ja:g==null&&b(T,L,N,K);break;case Mn:j(g,T,L,N,D,X,K,w,v);break;default:z&1?O(g,T,L,N,D,X,K,w,v):z&6?k(g,T,L,N,D,X,K,w,v):(z&64||z&128)&&C.process(g,T,L,N,D,X,K,w,v,ht)}W!=null&&D&&kl(W,g&&g.ref,X,T||g,!T)},m=(g,T,L,N)=>{if(g==null)i(T.el=a(T.children),L,N);else{const D=T.el=g.el;T.children!==g.children&&c(D,T.children)}},p=(g,T,L,N)=>{g==null?i(T.el=l(T.children||""),L,N):T.el=g.el},b=(g,T,L,N)=>{[g.el,g.anchor]=_(g.children,T,L,N,g.el,g.anchor)},M=({el:g,anchor:T},L,N)=>{let D;for(;g&&g!==T;)D=d(g),i(g,L,N),g=D;i(T,L,N)},S=({el:g,anchor:T})=>{let L;for(;g&&g!==T;)L=d(g),s(g),g=L;s(T)},O=(g,T,L,N,D,X,K,w,v)=>{T.type==="svg"?K="svg":T.type==="math"&&(K="mathml"),g==null?I(T,L,N,D,X,K,w,v):nt(g,T,D,X,K,w,v)},I=(g,T,L,N,D,X,K,w)=>{let v,C;const{props:W,shapeFlag:z,transition:G,dirs:ut}=g;if(v=g.el=r(g.type,X,W&&W.is,W),z&8?h(v,g.children):z&16&&U(g.children,v,null,N,D,Ka(g,X),K,w),ut&&ps(g,null,N,"created"),P(v,g,g.scopeId,K,N),W){for(const pt in W)pt!=="value"&&!Vo(pt)&&o(v,pt,null,W[pt],X,N);"value"in W&&o(v,"value",null,W.value,X),(C=W.onVnodeBeforeMount)&&di(C,N,g)}ut&&ps(g,null,N,"beforeMount");const ct=o0(D,G);ct&&G.beforeEnter(v),i(v,T,L),((C=W&&W.onVnodeMounted)||ct||ut)&&Ln(()=>{C&&di(C,N,g),ct&&G.enter(v),ut&&ps(g,null,N,"mounted")},D)},P=(g,T,L,N,D)=>{if(L&&f(g,L),N)for(let X=0;X<N.length;X++)f(g,N[X]);if(D){let X=D.subTree;if(T===X||Mf(X.type)&&(X.ssContent===T||X.ssFallback===T)){const K=D.vnode;P(g,K,K.scopeId,K.slotScopeIds,D.parent)}}},U=(g,T,L,N,D,X,K,w,v=0)=>{for(let C=v;C<g.length;C++){const W=g[C]=w?is(g[C]):gi(g[C]);y(null,W,T,L,N,D,X,K,w)}},nt=(g,T,L,N,D,X,K)=>{const w=T.el=g.el;let{patchFlag:v,dynamicChildren:C,dirs:W}=T;v|=g.patchFlag&16;const z=g.props||Ie,G=T.props||Ie;let ut;if(L&&ms(L,!1),(ut=G.onVnodeBeforeUpdate)&&di(ut,L,T,g),W&&ps(T,g,L,"beforeUpdate"),L&&ms(L,!0),(z.innerHTML&&G.innerHTML==null||z.textContent&&G.textContent==null)&&h(w,""),C?x(g.dynamicChildren,C,w,L,N,Ka(T,D),X):K||H(g,T,w,null,L,N,Ka(T,D),X,!1),v>0){if(v&16)E(w,z,G,L,D);else if(v&2&&z.class!==G.class&&o(w,"class",null,G.class,D),v&4&&o(w,"style",z.style,G.style,D),v&8){const ct=T.dynamicProps;for(let pt=0;pt<ct.length;pt++){const Rt=ct[pt],dt=z[Rt],xt=G[Rt];(xt!==dt||Rt==="value")&&o(w,Rt,dt,xt,D,L)}}v&1&&g.children!==T.children&&h(w,T.children)}else!K&&C==null&&E(w,z,G,L,D);((ut=G.onVnodeUpdated)||W)&&Ln(()=>{ut&&di(ut,L,T,g),W&&ps(T,g,L,"updated")},N)},x=(g,T,L,N,D,X,K)=>{for(let w=0;w<T.length;w++){const v=g[w],C=T[w],W=v.el&&(v.type===Mn||!Io(v,C)||v.shapeFlag&70)?u(v.el):L;y(v,C,W,null,N,D,X,K,!0)}},E=(g,T,L,N,D)=>{if(T!==L){if(T!==Ie)for(const X in T)!Vo(X)&&!(X in L)&&o(g,X,T[X],null,D,N);for(const X in L){if(Vo(X))continue;const K=L[X],w=T[X];K!==w&&X!=="value"&&o(g,X,w,K,D,N)}"value"in L&&o(g,"value",T.value,L.value,D)}},j=(g,T,L,N,D,X,K,w,v)=>{const C=T.el=g?g.el:a(""),W=T.anchor=g?g.anchor:a("");let{patchFlag:z,dynamicChildren:G,slotScopeIds:ut}=T;ut&&(w=w?w.concat(ut):ut),g==null?(i(C,L,N),i(W,L,N),U(T.children||[],L,W,D,X,K,w,v)):z>0&&z&64&&G&&g.dynamicChildren?(x(g.dynamicChildren,G,L,D,X,K,w),(T.key!=null||D&&T===D.subTree)&&gf(g,T,!0)):H(g,T,L,W,D,X,K,w,v)},k=(g,T,L,N,D,X,K,w,v)=>{T.slotScopeIds=w,g==null?T.shapeFlag&512?D.ctx.activate(T,L,N,K,v):J(T,L,N,D,X,K,v):at(g,T,v)},J=(g,T,L,N,D,X,K)=>{const w=g.component=E0(g,N,D);if(nf(g)&&(w.ctx.renderer=ht),b0(w,!1,K),w.asyncDep){if(D&&D.registerDep(w,V,K),!g.el){const v=w.subTree=Ye(or);p(null,v,T,L)}}else V(w,g,T,L,D,X,K)},at=(g,T,L)=>{const N=T.component=g.component;if(p0(g,T,L))if(N.asyncDep&&!N.asyncResolved){Z(N,T,L);return}else N.next=T,N.update();else T.el=g.el,N.vnode=T},V=(g,T,L,N,D,X,K)=>{const w=()=>{if(g.isMounted){let{next:z,bu:G,u:ut,parent:ct,vnode:pt}=g;{const Lt=_f(g);if(Lt){z&&(z.el=pt.el,Z(g,z,K)),Lt.asyncDep.then(()=>{g.isUnmounted||w()});return}}let Rt=z,dt;ms(g,!1),z?(z.el=pt.el,Z(g,z,K)):z=pt,G&&Xa(G),(dt=z.props&&z.props.onVnodeBeforeUpdate)&&di(dt,ct,z,pt),ms(g,!0);const xt=Za(g),Pt=g.subTree;g.subTree=xt,y(Pt,xt,u(Pt.el),F(Pt),g,D,X),z.el=xt.el,Rt===null&&m0(g,xt.el),ut&&Ln(ut,D),(dt=z.props&&z.props.onVnodeUpdated)&&Ln(()=>di(dt,ct,z,pt),D)}else{let z;const{el:G,props:ut}=T,{bm:ct,m:pt,parent:Rt,root:dt,type:xt}=g,Pt=qo(T);if(ms(g,!1),ct&&Xa(ct),!Pt&&(z=ut&&ut.onVnodeBeforeMount)&&di(z,Rt,T),ms(g,!0),G&&tt){const Lt=()=>{g.subTree=Za(g),tt(G,g.subTree,g,D,null)};Pt&&xt.__asyncHydrate?xt.__asyncHydrate(G,g,Lt):Lt()}else{dt.ce&&dt.ce._injectChildStyle(xt);const Lt=g.subTree=Za(g);y(null,Lt,L,N,g,D,X),T.el=Lt.el}if(pt&&Ln(pt,D),!Pt&&(z=ut&&ut.onVnodeMounted)){const Lt=T;Ln(()=>di(z,Rt,Lt),D)}(T.shapeFlag&256||Rt&&qo(Rt.vnode)&&Rt.vnode.shapeFlag&256)&&g.a&&Ln(g.a,D),g.isMounted=!0,T=L=N=null}};g.scope.on();const v=g.effect=new Id(w);g.scope.off();const C=g.update=v.run.bind(v),W=g.job=v.runIfDirty.bind(v);W.i=g,W.id=g.uid,v.scheduler=()=>iu(W),ms(g,!0),C()},Z=(g,T,L)=>{T.component=g;const N=g.vnode.props;g.vnode=T,g.next=null,Jm(g,T.props,N,L),n0(g,T.children,L),us(),Uu(g),hs()},H=(g,T,L,N,D,X,K,w,v=!1)=>{const C=g&&g.children,W=g?g.shapeFlag:0,z=T.children,{patchFlag:G,shapeFlag:ut}=T;if(G>0){if(G&128){yt(C,z,L,N,D,X,K,w,v);return}else if(G&256){gt(C,z,L,N,D,X,K,w,v);return}}ut&8?(W&16&&vt(C,D,X),z!==C&&h(L,z)):W&16?ut&16?yt(C,z,L,N,D,X,K,w,v):vt(C,D,X,!0):(W&8&&h(L,""),ut&16&&U(z,L,N,D,X,K,w,v))},gt=(g,T,L,N,D,X,K,w,v)=>{g=g||oo,T=T||oo;const C=g.length,W=T.length,z=Math.min(C,W);let G;for(G=0;G<z;G++){const ut=T[G]=v?is(T[G]):gi(T[G]);y(g[G],ut,L,null,D,X,K,w,v)}C>W?vt(g,D,X,!0,!1,z):U(T,L,N,D,X,K,w,v,z)},yt=(g,T,L,N,D,X,K,w,v)=>{let C=0;const W=T.length;let z=g.length-1,G=W-1;for(;C<=z&&C<=G;){const ut=g[C],ct=T[C]=v?is(T[C]):gi(T[C]);if(Io(ut,ct))y(ut,ct,L,null,D,X,K,w,v);else break;C++}for(;C<=z&&C<=G;){const ut=g[z],ct=T[G]=v?is(T[G]):gi(T[G]);if(Io(ut,ct))y(ut,ct,L,null,D,X,K,w,v);else break;z--,G--}if(C>z){if(C<=G){const ut=G+1,ct=ut<W?T[ut].el:N;for(;C<=G;)y(null,T[C]=v?is(T[C]):gi(T[C]),L,ct,D,X,K,w,v),C++}}else if(C>G)for(;C<=z;)It(g[C],D,X,!0),C++;else{const ut=C,ct=C,pt=new Map;for(C=ct;C<=G;C++){const Dt=T[C]=v?is(T[C]):gi(T[C]);Dt.key!=null&&pt.set(Dt.key,C)}let Rt,dt=0;const xt=G-ct+1;let Pt=!1,Lt=0;const Et=new Array(xt);for(C=0;C<xt;C++)Et[C]=0;for(C=ut;C<=z;C++){const Dt=g[C];if(dt>=xt){It(Dt,D,X,!0);continue}let kt;if(Dt.key!=null)kt=pt.get(Dt.key);else for(Rt=ct;Rt<=G;Rt++)if(Et[Rt-ct]===0&&Io(Dt,T[Rt])){kt=Rt;break}kt===void 0?It(Dt,D,X,!0):(Et[kt-ct]=C+1,kt>=Lt?Lt=kt:Pt=!0,y(Dt,T[kt],L,null,D,X,K,w,v),dt++)}const Vt=Pt?r0(Et):oo;for(Rt=Vt.length-1,C=xt-1;C>=0;C--){const Dt=ct+C,kt=T[Dt],B=Dt+1<W?T[Dt+1].el:N;Et[C]===0?y(null,kt,L,B,D,X,K,w,v):Pt&&(Rt<0||C!==Vt[Rt]?_t(kt,L,B,2):Rt--)}}},_t=(g,T,L,N,D=null)=>{const{el:X,type:K,transition:w,children:v,shapeFlag:C}=g;if(C&6){_t(g.component.subTree,T,L,N);return}if(C&128){g.suspense.move(T,L,N);return}if(C&64){K.move(g,T,L,ht);return}if(K===Mn){i(X,T,L);for(let z=0;z<v.length;z++)_t(v[z],T,L,N);i(g.anchor,T,L);return}if(K===Ja){M(g,T,L);return}if(N!==2&&C&1&&w)if(N===0)w.beforeEnter(X),i(X,T,L),Ln(()=>w.enter(X),D);else{const{leave:z,delayLeave:G,afterLeave:ut}=w,ct=()=>i(X,T,L),pt=()=>{z(X,()=>{ct(),ut&&ut()})};G?G(X,ct,pt):pt()}else i(X,T,L)},It=(g,T,L,N=!1,D=!1)=>{const{type:X,props:K,ref:w,children:v,dynamicChildren:C,shapeFlag:W,patchFlag:z,dirs:G,cacheIndex:ut}=g;if(z===-2&&(D=!1),w!=null&&kl(w,null,L,g,!0),ut!=null&&(T.renderCache[ut]=void 0),W&256){T.ctx.deactivate(g);return}const ct=W&1&&G,pt=!qo(g);let Rt;if(pt&&(Rt=K&&K.onVnodeBeforeUnmount)&&di(Rt,T,g),W&6)ft(g.component,L,N);else{if(W&128){g.suspense.unmount(L,N);return}ct&&ps(g,null,T,"beforeUnmount"),W&64?g.type.remove(g,T,L,ht,N):C&&!C.hasOnce&&(X!==Mn||z>0&&z&64)?vt(C,T,L,!1,!0):(X===Mn&&z&384||!D&&W&16)&&vt(v,T,L),N&&zt(g)}(pt&&(Rt=K&&K.onVnodeUnmounted)||ct)&&Ln(()=>{Rt&&di(Rt,T,g),ct&&ps(g,null,T,"unmounted")},L)},zt=g=>{const{type:T,el:L,anchor:N,transition:D}=g;if(T===Mn){rt(L,N);return}if(T===Ja){S(g);return}const X=()=>{s(L),D&&!D.persisted&&D.afterLeave&&D.afterLeave()};if(g.shapeFlag&1&&D&&!D.persisted){const{leave:K,delayLeave:w}=D,v=()=>K(L,X);w?w(g.el,X,v):v()}else X()},rt=(g,T)=>{let L;for(;g!==T;)L=d(g),s(g),g=L;s(T)},ft=(g,T,L)=>{const{bum:N,scope:D,job:X,subTree:K,um:w,m:v,a:C}=g;ku(v),ku(C),N&&Xa(N),D.stop(),X&&(X.flags|=8,It(K,g,T,L)),w&&Ln(w,T),Ln(()=>{g.isUnmounted=!0},T),T&&T.pendingBranch&&!T.isUnmounted&&g.asyncDep&&!g.asyncResolved&&g.suspenseId===T.pendingId&&(T.deps--,T.deps===0&&T.resolve())},vt=(g,T,L,N=!1,D=!1,X=0)=>{for(let K=X;K<g.length;K++)It(g[K],T,L,N,D)},F=g=>{if(g.shapeFlag&6)return F(g.component.subTree);if(g.shapeFlag&128)return g.suspense.next();const T=d(g.anchor||g.el),L=T&&T[Am];return L?d(L):T};let lt=!1;const ot=(g,T,L)=>{g==null?T._vnode&&It(T._vnode,null,null,!0):y(T._vnode||null,g,T,null,null,null,L),T._vnode=g,lt||(lt=!0,Uu(),Jd(),lt=!1)},ht={p:y,um:It,m:_t,r:zt,mt:J,mc:U,pc:H,pbc:x,n:F,o:n};let Mt,tt;return{render:ot,hydrate:Mt,createApp:Km(ot,Mt)}}function Ka({type:n,props:t},e){return e==="svg"&&n==="foreignObject"||e==="mathml"&&n==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:e}function ms({effect:n,job:t},e){e?(n.flags|=32,t.flags|=4):(n.flags&=-33,t.flags&=-5)}function o0(n,t){return(!n||n&&!n.pendingBranch)&&t&&!t.persisted}function gf(n,t,e=!1){const i=n.children,s=t.children;if(re(i)&&re(s))for(let o=0;o<i.length;o++){const r=i[o];let a=s[o];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[o]=is(s[o]),a.el=r.el),!e&&a.patchFlag!==-2&&gf(r,a)),a.type===La&&(a.el=r.el)}}function r0(n){const t=n.slice(),e=[0];let i,s,o,r,a;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(s=e[e.length-1],n[s]<c){t[i]=s,e.push(i);continue}for(o=0,r=e.length-1;o<r;)a=o+r>>1,n[e[a]]<c?o=a+1:r=a;c<n[e[o]]&&(o>0&&(t[i]=e[o-1]),e[o]=i)}}for(o=e.length,r=e[o-1];o-- >0;)e[o]=r,r=t[r];return e}function _f(n){const t=n.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:_f(t)}function ku(n){if(n)for(let t=0;t<n.length;t++)n[t].flags|=8}const a0=Symbol.for("v-scx"),l0=()=>Hi(a0);function We(n,t,e){return vf(n,t,e)}function vf(n,t,e=Ie){const{immediate:i,deep:s,flush:o,once:r}=e,a=ln({},e);let l;if(Da)if(o==="sync"){const d=l0();l=d.__watcherHandles||(d.__watcherHandles=[])}else if(!t||i)a.once=!0;else{const d=()=>{};return d.stop=vi,d.resume=vi,d.pause=vi,d}const c=dn;a.call=(d,f,_)=>yi(d,c,f,_);let h=!1;o==="post"?a.scheduler=d=>{Ln(d,c&&c.suspense)}:o!=="sync"&&(h=!0,a.scheduler=(d,f)=>{f?d():iu(d)}),a.augmentJob=d=>{t&&(d.flags|=4),h&&(d.flags|=2,c&&(d.id=c.uid,d.i=c))};const u=wm(n,t,a);return l&&l.push(u),u}function c0(n,t,e){const i=this.proxy,s=sn(n)?n.includes(".")?xf(i,n):()=>i[n]:n.bind(i,i);let o;se(t)?o=t:(o=t.handler,e=t);const r=gr(this),a=vf(s,o.bind(i),e);return r(),a}function xf(n,t){const e=t.split(".");return()=>{let i=n;for(let s=0;s<e.length&&i;s++)i=i[e[s]];return i}}const u0=(n,t)=>t==="modelValue"||t==="model-value"?n.modelModifiers:n[`${t}Modifiers`]||n[`${kn(t)}Modifiers`]||n[`${Us(t)}Modifiers`];function h0(n,t,...e){if(n.isUnmounted)return;const i=n.vnode.props||Ie;let s=e;const o=t.startsWith("update:"),r=o&&u0(i,t.slice(7));r&&(r.trim&&(s=e.map(h=>sn(h)?h.trim():h)),r.number&&(s=e.map(Gp)));let a,l=i[a=Wa(t)]||i[a=Wa(kn(t))];!l&&o&&(l=i[a=Wa(Us(t))]),l&&yi(l,n,6,s);const c=i[a+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,yi(c,n,6,s)}}function yf(n,t,e=!1){const i=t.emitsCache,s=i.get(n);if(s!==void 0)return s;const o=n.emits;let r={},a=!1;if(!se(n)){const l=c=>{const h=yf(c,t,!0);h&&(a=!0,ln(r,h))};!e&&t.mixins.length&&t.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!o&&!a?($e(n)&&i.set(n,null),null):(re(o)?o.forEach(l=>r[l]=null):ln(r,o),$e(n)&&i.set(n,r),r)}function Ia(n,t){return!n||!Sa(t)?!1:(t=t.slice(2).replace(/Once$/,""),Me(n,t[0].toLowerCase()+t.slice(1))||Me(n,Us(t))||Me(n,t))}function Za(n){const{type:t,vnode:e,proxy:i,withProxy:s,propsOptions:[o],slots:r,attrs:a,emit:l,render:c,renderCache:h,props:u,data:d,setupState:f,ctx:_,inheritAttrs:y}=n,m=da(n);let p,b;try{if(e.shapeFlag&4){const S=s||i,O=S;p=gi(c.call(O,S,h,u,f,d,_)),b=a}else{const S=t;p=gi(S.length>1?S(u,{attrs:a,slots:r,emit:l}):S(u,null)),b=t.props?a:d0(a)}}catch(S){$o.length=0,Pa(S,n,1),p=Ye(or)}let M=p;if(b&&y!==!1){const S=Object.keys(b),{shapeFlag:O}=M;S.length&&O&7&&(o&&S.some(kc)&&(b=f0(b,o)),M=mo(M,b,!1,!0))}return e.dirs&&(M=mo(M,null,!1,!0),M.dirs=M.dirs?M.dirs.concat(e.dirs):e.dirs),e.transition&&su(M,e.transition),p=M,da(m),p}const d0=n=>{let t;for(const e in n)(e==="class"||e==="style"||Sa(e))&&((t||(t={}))[e]=n[e]);return t},f0=(n,t)=>{const e={};for(const i in n)(!kc(i)||!(i.slice(9)in t))&&(e[i]=n[i]);return e};function p0(n,t,e){const{props:i,children:s,component:o}=n,{props:r,children:a,patchFlag:l}=t,c=o.emitsOptions;if(t.dirs||t.transition)return!0;if(e&&l>=0){if(l&1024)return!0;if(l&16)return i?Vu(i,r,c):!!r;if(l&8){const h=t.dynamicProps;for(let u=0;u<h.length;u++){const d=h[u];if(r[d]!==i[d]&&!Ia(c,d))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:i===r?!1:i?r?Vu(i,r,c):!0:!!r;return!1}function Vu(n,t,e){const i=Object.keys(t);if(i.length!==Object.keys(n).length)return!0;for(let s=0;s<i.length;s++){const o=i[s];if(t[o]!==n[o]&&!Ia(e,o))return!0}return!1}function m0({vnode:n,parent:t},e){for(;t;){const i=t.subTree;if(i.suspense&&i.suspense.activeBranch===n&&(i.el=n.el),i===n)(n=t.vnode).el=e,t=t.parent;else break}}const Mf=n=>n.__isSuspense;function g0(n,t){t&&t.pendingBranch?re(n)?t.effects.push(...n):t.effects.push(n):bm(n)}const Mn=Symbol.for("v-fgt"),La=Symbol.for("v-txt"),or=Symbol.for("v-cmt"),Ja=Symbol.for("v-stc"),$o=[];let Nn=null;function wi(n=!1){$o.push(Nn=n?null:[])}function _0(){$o.pop(),Nn=$o[$o.length-1]||null}let rr=1;function Wu(n){rr+=n,n<0&&Nn&&(Nn.hasOnce=!0)}function v0(n){return n.dynamicChildren=rr>0?Nn||oo:null,_0(),rr>0&&Nn&&Nn.push(n),n}function Si(n,t,e,i,s,o){return v0(Xt(n,t,e,i,s,o,!0))}function pa(n){return n?n.__v_isVNode===!0:!1}function Io(n,t){return n.type===t.type&&n.key===t.key}const wf=({key:n})=>n??null,na=({ref:n,ref_key:t,ref_for:e})=>(typeof n=="number"&&(n=""+n),n!=null?sn(n)||fn(n)||se(n)?{i:Un,r:n,k:t,f:!!e}:n:null);function Xt(n,t=null,e=null,i=0,s=null,o=n===Mn?0:1,r=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:t,key:t&&wf(t),ref:t&&na(t),scopeId:tf,slotScopeIds:null,children:e,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Un};return a?(lu(l,e),o&128&&n.normalize(l)):e&&(l.shapeFlag|=sn(e)?8:16),rr>0&&!r&&Nn&&(l.patchFlag>0||o&6)&&l.patchFlag!==32&&Nn.push(l),l}const Ye=x0;function x0(n,t=null,e=null,i=0,s=null,o=!1){if((!n||n===Hm)&&(n=or),pa(n)){const a=mo(n,t,!0);return e&&lu(a,e),rr>0&&!o&&Nn&&(a.shapeFlag&6?Nn[Nn.indexOf(n)]=a:Nn.push(a)),a.patchFlag=-2,a}if(C0(n)&&(n=n.__vccOpts),t){t=y0(t);let{class:a,style:l}=t;a&&!sn(a)&&(t.class=Wn(a)),$e(l)&&(tu(l)&&!re(l)&&(l=ln({},l)),t.style=Xc(l))}const r=sn(n)?1:Mf(n)?128:Rm(n)?64:$e(n)?4:se(n)?2:0;return Xt(n,t,e,i,s,r,o,!0)}function y0(n){return n?tu(n)||cf(n)?ln({},n):n:null}function mo(n,t,e=!1,i=!1){const{props:s,ref:o,patchFlag:r,children:a,transition:l}=n,c=t?M0(s||{},t):s,h={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&wf(c),ref:t&&t.ref?e&&o?re(o)?o.concat(na(t)):[o,na(t)]:na(t):o,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:t&&n.type!==Mn?r===-1?16:r|16:r,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&mo(n.ssContent),ssFallback:n.ssFallback&&mo(n.ssFallback),el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&i&&su(h,l.clone(h)),h}function pi(n=" ",t=0){return Ye(La,null,n,t)}function gi(n){return n==null||typeof n=="boolean"?Ye(or):re(n)?Ye(Mn,null,n.slice()):pa(n)?is(n):Ye(La,null,String(n))}function is(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:mo(n)}function lu(n,t){let e=0;const{shapeFlag:i}=n;if(t==null)t=null;else if(re(t))e=16;else if(typeof t=="object")if(i&65){const s=t.default;s&&(s._c&&(s._d=!1),lu(n,s()),s._c&&(s._d=!0));return}else{e=32;const s=t._;!s&&!cf(t)?t._ctx=Un:s===3&&Un&&(Un.slots._===1?t._=1:(t._=2,n.patchFlag|=1024))}else se(t)?(t={default:t,_ctx:Un},e=32):(t=String(t),i&64?(e=16,t=[pi(t)]):e=8);n.children=t,n.shapeFlag|=e}function M0(...n){const t={};for(let e=0;e<n.length;e++){const i=n[e];for(const s in i)if(s==="class")t.class!==i.class&&(t.class=Wn([t.class,i.class]));else if(s==="style")t.style=Xc([t.style,i.style]);else if(Sa(s)){const o=t[s],r=i[s];r&&o!==r&&!(re(o)&&o.includes(r))&&(t[s]=o?[].concat(o,r):r)}else s!==""&&(t[s]=i[s])}return t}function di(n,t,e,i=null){yi(n,t,7,[e,i])}const w0=rf();let S0=0;function E0(n,t,e){const i=n.type,s=(t?t.appContext:n.appContext)||w0,o={uid:S0++,vnode:n,type:i,parent:t,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Yp(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(s.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:hf(i,s),emitsOptions:yf(i,s),emit:null,emitted:null,propsDefaults:Ie,inheritAttrs:i.inheritAttrs,ctx:Ie,data:Ie,props:Ie,attrs:Ie,slots:Ie,refs:Ie,setupState:Ie,setupContext:null,suspense:e,suspenseId:e?e.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return o.ctx={_:o},o.root=t?t.root:o,o.emit=h0.bind(null,o),n.ce&&n.ce(o),o}let dn=null,ma,Yl;{const n=Pd(),t=(e,i)=>{let s;return(s=n[e])||(s=n[e]=[]),s.push(i),o=>{s.length>1?s.forEach(r=>r(o)):s[0](o)}};ma=t("__VUE_INSTANCE_SETTERS__",e=>dn=e),Yl=t("__VUE_SSR_SETTERS__",e=>Da=e)}const gr=n=>{const t=dn;return ma(n),n.scope.on(),()=>{n.scope.off(),ma(t)}},Xu=()=>{dn&&dn.scope.off(),ma(null)};function Sf(n){return n.vnode.shapeFlag&4}let Da=!1;function b0(n,t=!1,e=!1){t&&Yl(t);const{props:i,children:s}=n.vnode,o=Sf(n);Zm(n,i,o,t),e0(n,s,e);const r=o?T0(n,t):void 0;return t&&Yl(!1),r}function T0(n,t){const e=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,Vm);const{setup:i}=e;if(i){const s=n.setupContext=i.length>1?R0(n):null,o=gr(n);us();const r=mr(i,n,0,[n.props,s]);if(hs(),o(),Ad(r)){if(qo(n)||ef(n),r.then(Xu,Xu),t)return r.then(a=>{qu(n,a,t)}).catch(a=>{Pa(a,n,0)});n.asyncDep=r}else qu(n,r,t)}else Ef(n,t)}function qu(n,t,e){se(t)?n.type.__ssrInlineRender?n.ssrRender=t:n.render=t:$e(t)&&(n.setupState=$d(t)),Ef(n,e)}let Yu;function Ef(n,t,e){const i=n.type;if(!n.render){if(!t&&Yu&&!i.render){const s=i.template||ru(n).template;if(s){const{isCustomElement:o,compilerOptions:r}=n.appContext.config,{delimiters:a,compilerOptions:l}=i,c=ln(ln({isCustomElement:o,delimiters:a},r),l);i.render=Yu(s,c)}}n.render=i.render||vi}{const s=gr(n);us();try{Wm(n)}finally{hs(),s()}}}const A0={get(n,t){return pn(n,"get",""),n[t]}};function R0(n){const t=e=>{n.exposed=e||{}};return{attrs:new Proxy(n.attrs,A0),slots:n.slots,emit:n.emit,expose:t}}function Ua(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy($d(gm(n.exposed)),{get(t,e){if(e in t)return t[e];if(e in Yo)return Yo[e](n)},has(t,e){return e in t||e in Yo}})):n.proxy}function P0(n,t=!0){return se(n)?n.displayName||n.name:n.name||t&&n.__name}function C0(n){return se(n)&&"__vccOpts"in n}const Qn=(n,t)=>ym(n,t,Da);function bf(n,t,e){const i=arguments.length;return i===2?$e(t)&&!re(t)?pa(t)?Ye(n,null,[t]):Ye(n,t):Ye(n,null,t):(i>3?e=Array.prototype.slice.call(arguments,2):i===3&&pa(e)&&(e=[e]),Ye(n,t,e))}const I0="3.5.10";/**
* @vue/runtime-dom v3.5.10
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let $l;const $u=typeof window<"u"&&window.trustedTypes;if($u)try{$l=$u.createPolicy("vue",{createHTML:n=>n})}catch{}const Tf=$l?n=>$l.createHTML(n):n=>n,L0="http://www.w3.org/2000/svg",D0="http://www.w3.org/1998/Math/MathML",Fi=typeof document<"u"?document:null,ju=Fi&&Fi.createElement("template"),U0={insert:(n,t,e)=>{t.insertBefore(n,e||null)},remove:n=>{const t=n.parentNode;t&&t.removeChild(n)},createElement:(n,t,e,i)=>{const s=t==="svg"?Fi.createElementNS(L0,n):t==="mathml"?Fi.createElementNS(D0,n):e?Fi.createElement(n,{is:e}):Fi.createElement(n);return n==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:n=>Fi.createTextNode(n),createComment:n=>Fi.createComment(n),setText:(n,t)=>{n.nodeValue=t},setElementText:(n,t)=>{n.textContent=t},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>Fi.querySelector(n),setScopeId(n,t){n.setAttribute(t,"")},insertStaticContent(n,t,e,i,s,o){const r=e?e.previousSibling:t.lastChild;if(s&&(s===o||s.nextSibling))for(;t.insertBefore(s.cloneNode(!0),e),!(s===o||!(s=s.nextSibling)););else{ju.innerHTML=Tf(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const a=ju.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}t.insertBefore(a,e)}return[r?r.nextSibling:t.firstChild,e?e.previousSibling:t.lastChild]}},N0=Symbol("_vtc");function F0(n,t,e){const i=n[N0];i&&(t=(t?[t,...i]:[...i]).join(" ")),t==null?n.removeAttribute("class"):e?n.setAttribute("class",t):n.className=t}const ga=Symbol("_vod"),Af=Symbol("_vsh"),O0={beforeMount(n,{value:t},{transition:e}){n[ga]=n.style.display==="none"?"":n.style.display,e&&t?e.beforeEnter(n):Lo(n,t)},mounted(n,{value:t},{transition:e}){e&&t&&e.enter(n)},updated(n,{value:t,oldValue:e},{transition:i}){!t!=!e&&(i?t?(i.beforeEnter(n),Lo(n,!0),i.enter(n)):i.leave(n,()=>{Lo(n,!1)}):Lo(n,t))},beforeUnmount(n,{value:t}){Lo(n,t)}};function Lo(n,t){n.style.display=t?n[ga]:"none",n[Af]=!t}const B0=Symbol(""),z0=/(^|;)\s*display\s*:/;function G0(n,t,e){const i=n.style,s=sn(e);let o=!1;if(e&&!s){if(t)if(sn(t))for(const r of t.split(";")){const a=r.slice(0,r.indexOf(":")).trim();e[a]==null&&ia(i,a,"")}else for(const r in t)e[r]==null&&ia(i,r,"");for(const r in e)r==="display"&&(o=!0),ia(i,r,e[r])}else if(s){if(t!==e){const r=i[B0];r&&(e+=";"+r),i.cssText=e,o=z0.test(e)}}else t&&n.removeAttribute("style");ga in n&&(n[ga]=o?i.display:"",n[Af]&&(i.display="none"))}const Ku=/\s*!important$/;function ia(n,t,e){if(re(e))e.forEach(i=>ia(n,t,i));else if(e==null&&(e=""),t.startsWith("--"))n.setProperty(t,e);else{const i=H0(n,t);Ku.test(e)?n.setProperty(Us(i),e.replace(Ku,""),"important"):n[i]=e}}const Zu=["Webkit","Moz","ms"],Qa={};function H0(n,t){const e=Qa[t];if(e)return e;let i=kn(t);if(i!=="filter"&&i in n)return Qa[t]=i;i=Ta(i);for(let s=0;s<Zu.length;s++){const o=Zu[s]+i;if(o in n)return Qa[t]=o}return t}const Ju="http://www.w3.org/1999/xlink";function Qu(n,t,e,i,s,o=qp(t)){i&&t.startsWith("xlink:")?e==null?n.removeAttributeNS(Ju,t.slice(6,t.length)):n.setAttributeNS(Ju,t,e):e==null||o&&!Cd(e)?n.removeAttribute(t):n.setAttribute(t,o?"":Eo(e)?String(e):e)}function th(n,t,e,i){if(t==="innerHTML"||t==="textContent"){e!=null&&(n[t]=t==="innerHTML"?Tf(e):e);return}const s=n.tagName;if(t==="value"&&s!=="PROGRESS"&&!s.includes("-")){const r=s==="OPTION"?n.getAttribute("value")||"":n.value,a=e==null?n.type==="checkbox"?"on":"":String(e);(r!==a||!("_value"in n))&&(n.value=a),e==null&&n.removeAttribute(t),n._value=e;return}let o=!1;if(e===""||e==null){const r=typeof n[t];r==="boolean"?e=Cd(e):e==null&&r==="string"?(e="",o=!0):r==="number"&&(e=0,o=!0)}try{n[t]=e}catch{}o&&n.removeAttribute(t)}function k0(n,t,e,i){n.addEventListener(t,e,i)}function V0(n,t,e,i){n.removeEventListener(t,e,i)}const eh=Symbol("_vei");function W0(n,t,e,i,s=null){const o=n[eh]||(n[eh]={}),r=o[t];if(i&&r)r.value=i;else{const[a,l]=X0(t);if(i){const c=o[t]=$0(i,s);k0(n,a,c,l)}else r&&(V0(n,a,r,l),o[t]=void 0)}}const nh=/(?:Once|Passive|Capture)$/;function X0(n){let t;if(nh.test(n)){t={};let i;for(;i=n.match(nh);)n=n.slice(0,n.length-i[0].length),t[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):Us(n.slice(2)),t]}let tl=0;const q0=Promise.resolve(),Y0=()=>tl||(q0.then(()=>tl=0),tl=Date.now());function $0(n,t){const e=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=e.attached)return;yi(j0(i,e.value),t,5,[i])};return e.value=n,e.attached=Y0(),e}function j0(n,t){if(re(t)){const e=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{e.call(n),n._stopped=!0},t.map(i=>s=>!s._stopped&&i&&i(s))}else return t}const ih=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,K0=(n,t,e,i,s,o)=>{const r=s==="svg";t==="class"?F0(n,i,r):t==="style"?G0(n,e,i):Sa(t)?kc(t)||W0(n,t,e,i,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Z0(n,t,i,r))?(th(n,t,i),!n.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&Qu(n,t,i,r,o,t!=="value")):n._isVueCE&&(/[A-Z]/.test(t)||!sn(i))?th(n,kn(t),i):(t==="true-value"?n._trueValue=i:t==="false-value"&&(n._falseValue=i),Qu(n,t,i,r))};function Z0(n,t,e,i){if(i)return!!(t==="innerHTML"||t==="textContent"||t in n&&ih(t)&&se(e));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&n.tagName==="INPUT"||t==="type"&&n.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const s=n.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return ih(t)&&sn(e)?!1:t in n}const J0=ln({patchProp:K0},U0);let sh;function Q0(){return sh||(sh=i0(J0))}const tg=(...n)=>{const t=Q0().createApp(...n),{mount:e}=t;return t.mount=i=>{const s=ng(i);if(!s)return;const o=t._component;!se(o)&&!o.render&&!o.template&&(o.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const r=e(s,!1,eg(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),r},t};function eg(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function ng(n){return sn(n)?document.querySelector(n):n}const ig={id:"app"},sg=Xn({__name:"App",setup(n){const t=Zt(!1);function e(i){i.clientY<100?t.value=!0:t.value=!1}return ci(()=>{window.addEventListener("mousemove",e)}),ou(()=>{window.removeEventListener("mousemove",e)}),(i,s)=>{const o=Nu("router-link"),r=Nu("router-view");return wi(),Si("div",ig,[Tm(Xt("nav",null,[Ye(o,{to:"/3d-bear-arts/leather"},{default:fi(()=>s[0]||(s[0]=[pi("Leather")])),_:1}),Ye(o,{to:"/3d-bear-arts/pop-art"},{default:fi(()=>s[1]||(s[1]=[pi("Pop MouseMove")])),_:1}),Ye(o,{to:"/3d-bear-arts/pop-art-bear-3"},{default:fi(()=>s[2]||(s[2]=[pi("Pop3")])),_:1}),Ye(o,{to:"/3d-bear-arts/machine"},{default:fi(()=>s[3]||(s[3]=[pi("machine")])),_:1}),Ye(o,{to:"/3d-bear-arts/water"},{default:fi(()=>s[4]||(s[4]=[pi("Water")])),_:1}),Ye(o,{to:"/3d-bear-arts/ghost-bear"},{default:fi(()=>s[5]||(s[5]=[pi("ghost")])),_:1}),Ye(o,{to:"/3d-bear-arts/white-ghost-bear"},{default:fi(()=>s[6]||(s[6]=[pi("white ghost")])),_:1}),Ye(o,{to:"/3d-bear-arts/"},{default:fi(()=>s[7]||(s[7]=[pi("santa")])),_:1}),Ye(o,{to:"/3d-bear-arts/half"},{default:fi(()=>s[8]||(s[8]=[pi("HalfTranparent")])),_:1})],512),[[O0,t.value]]),Ye(r)])}}}),Ei=(n,t)=>{const e=n.__vccOpts||n;for(const[i,s]of t)e[i]=s;return e},og=Ei(sg,[["__scopeId","data-v-703cc388"]]);/*!
  * vue-router v4.4.5
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const Qs=typeof document<"u";function Rf(n){return typeof n=="object"||"displayName"in n||"props"in n||"__vccOpts"in n}function rg(n){return n.__esModule||n[Symbol.toStringTag]==="Module"||n.default&&Rf(n.default)}const Ee=Object.assign;function el(n,t){const e={};for(const i in t){const s=t[i];e[i]=ri(s)?s.map(n):n(s)}return e}const jo=()=>{},ri=Array.isArray,Pf=/#/g,ag=/&/g,lg=/\//g,cg=/=/g,ug=/\?/g,Cf=/\+/g,hg=/%5B/g,dg=/%5D/g,If=/%5E/g,fg=/%60/g,Lf=/%7B/g,pg=/%7C/g,Df=/%7D/g,mg=/%20/g;function cu(n){return encodeURI(""+n).replace(pg,"|").replace(hg,"[").replace(dg,"]")}function gg(n){return cu(n).replace(Lf,"{").replace(Df,"}").replace(If,"^")}function jl(n){return cu(n).replace(Cf,"%2B").replace(mg,"+").replace(Pf,"%23").replace(ag,"%26").replace(fg,"`").replace(Lf,"{").replace(Df,"}").replace(If,"^")}function _g(n){return jl(n).replace(cg,"%3D")}function vg(n){return cu(n).replace(Pf,"%23").replace(ug,"%3F")}function xg(n){return n==null?"":vg(n).replace(lg,"%2F")}function ar(n){try{return decodeURIComponent(""+n)}catch{}return""+n}const yg=/\/$/,Mg=n=>n.replace(yg,"");function nl(n,t,e="/"){let i,s={},o="",r="";const a=t.indexOf("#");let l=t.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(i=t.slice(0,l),o=t.slice(l+1,a>-1?a:t.length),s=n(o)),a>-1&&(i=i||t.slice(0,a),r=t.slice(a,t.length)),i=bg(i??t,e),{fullPath:i+(o&&"?")+o+r,path:i,query:s,hash:ar(r)}}function wg(n,t){const e=t.query?n(t.query):"";return t.path+(e&&"?")+e+(t.hash||"")}function oh(n,t){return!t||!n.toLowerCase().startsWith(t.toLowerCase())?n:n.slice(t.length)||"/"}function Sg(n,t,e){const i=t.matched.length-1,s=e.matched.length-1;return i>-1&&i===s&&go(t.matched[i],e.matched[s])&&Uf(t.params,e.params)&&n(t.query)===n(e.query)&&t.hash===e.hash}function go(n,t){return(n.aliasOf||n)===(t.aliasOf||t)}function Uf(n,t){if(Object.keys(n).length!==Object.keys(t).length)return!1;for(const e in n)if(!Eg(n[e],t[e]))return!1;return!0}function Eg(n,t){return ri(n)?rh(n,t):ri(t)?rh(t,n):n===t}function rh(n,t){return ri(t)?n.length===t.length&&n.every((e,i)=>e===t[i]):n.length===1&&n[0]===t}function bg(n,t){if(n.startsWith("/"))return n;if(!n)return t;const e=t.split("/"),i=n.split("/"),s=i[i.length-1];(s===".."||s===".")&&i.push("");let o=e.length-1,r,a;for(r=0;r<i.length;r++)if(a=i[r],a!==".")if(a==="..")o>1&&o--;else break;return e.slice(0,o).join("/")+"/"+i.slice(r).join("/")}const ji={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var lr;(function(n){n.pop="pop",n.push="push"})(lr||(lr={}));var Ko;(function(n){n.back="back",n.forward="forward",n.unknown=""})(Ko||(Ko={}));function Tg(n){if(!n)if(Qs){const t=document.querySelector("base");n=t&&t.getAttribute("href")||"/",n=n.replace(/^\w+:\/\/[^\/]+/,"")}else n="/";return n[0]!=="/"&&n[0]!=="#"&&(n="/"+n),Mg(n)}const Ag=/^[^#]+#/;function Rg(n,t){return n.replace(Ag,"#")+t}function Pg(n,t){const e=document.documentElement.getBoundingClientRect(),i=n.getBoundingClientRect();return{behavior:t.behavior,left:i.left-e.left-(t.left||0),top:i.top-e.top-(t.top||0)}}const Na=()=>({left:window.scrollX,top:window.scrollY});function Cg(n){let t;if("el"in n){const e=n.el,i=typeof e=="string"&&e.startsWith("#"),s=typeof e=="string"?i?document.getElementById(e.slice(1)):document.querySelector(e):e;if(!s)return;t=Pg(s,n)}else t=n;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.scrollX,t.top!=null?t.top:window.scrollY)}function ah(n,t){return(history.state?history.state.position-t:-1)+n}const Kl=new Map;function Ig(n,t){Kl.set(n,t)}function Lg(n){const t=Kl.get(n);return Kl.delete(n),t}let Dg=()=>location.protocol+"//"+location.host;function Nf(n,t){const{pathname:e,search:i,hash:s}=t,o=n.indexOf("#");if(o>-1){let a=s.includes(n.slice(o))?n.slice(o).length:1,l=s.slice(a);return l[0]!=="/"&&(l="/"+l),oh(l,"")}return oh(e,n)+i+s}function Ug(n,t,e,i){let s=[],o=[],r=null;const a=({state:d})=>{const f=Nf(n,location),_=e.value,y=t.value;let m=0;if(d){if(e.value=f,t.value=d,r&&r===_){r=null;return}m=y?d.position-y.position:0}else i(f);s.forEach(p=>{p(e.value,_,{delta:m,type:lr.pop,direction:m?m>0?Ko.forward:Ko.back:Ko.unknown})})};function l(){r=e.value}function c(d){s.push(d);const f=()=>{const _=s.indexOf(d);_>-1&&s.splice(_,1)};return o.push(f),f}function h(){const{history:d}=window;d.state&&d.replaceState(Ee({},d.state,{scroll:Na()}),"")}function u(){for(const d of o)d();o=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",h)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",h,{passive:!0}),{pauseListeners:l,listen:c,destroy:u}}function lh(n,t,e,i=!1,s=!1){return{back:n,current:t,forward:e,replaced:i,position:window.history.length,scroll:s?Na():null}}function Ng(n){const{history:t,location:e}=window,i={value:Nf(n,e)},s={value:t.state};s.value||o(i.value,{back:null,current:i.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function o(l,c,h){const u=n.indexOf("#"),d=u>-1?(e.host&&document.querySelector("base")?n:n.slice(u))+l:Dg()+n+l;try{t[h?"replaceState":"pushState"](c,"",d),s.value=c}catch(f){console.error(f),e[h?"replace":"assign"](d)}}function r(l,c){const h=Ee({},t.state,lh(s.value.back,l,s.value.forward,!0),c,{position:s.value.position});o(l,h,!0),i.value=l}function a(l,c){const h=Ee({},s.value,t.state,{forward:l,scroll:Na()});o(h.current,h,!0);const u=Ee({},lh(i.value,l,null),{position:h.position+1},c);o(l,u,!1),i.value=l}return{location:i,state:s,push:a,replace:r}}function Fg(n){n=Tg(n);const t=Ng(n),e=Ug(n,t.state,t.location,t.replace);function i(o,r=!0){r||e.pauseListeners(),history.go(o)}const s=Ee({location:"",base:n,go:i,createHref:Rg.bind(null,n)},t,e);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>t.state.value}),s}function Og(n){return typeof n=="string"||n&&typeof n=="object"}function Ff(n){return typeof n=="string"||typeof n=="symbol"}const Of=Symbol("");var ch;(function(n){n[n.aborted=4]="aborted",n[n.cancelled=8]="cancelled",n[n.duplicated=16]="duplicated"})(ch||(ch={}));function _o(n,t){return Ee(new Error,{type:n,[Of]:!0},t)}function Ri(n,t){return n instanceof Error&&Of in n&&(t==null||!!(n.type&t))}const uh="[^/]+?",Bg={sensitive:!1,strict:!1,start:!0,end:!0},zg=/[.+*?^${}()[\]/\\]/g;function Gg(n,t){const e=Ee({},Bg,t),i=[];let s=e.start?"^":"";const o=[];for(const c of n){const h=c.length?[]:[90];e.strict&&!c.length&&(s+="/");for(let u=0;u<c.length;u++){const d=c[u];let f=40+(e.sensitive?.25:0);if(d.type===0)u||(s+="/"),s+=d.value.replace(zg,"\\$&"),f+=40;else if(d.type===1){const{value:_,repeatable:y,optional:m,regexp:p}=d;o.push({name:_,repeatable:y,optional:m});const b=p||uh;if(b!==uh){f+=10;try{new RegExp(`(${b})`)}catch(S){throw new Error(`Invalid custom RegExp for param "${_}" (${b}): `+S.message)}}let M=y?`((?:${b})(?:/(?:${b}))*)`:`(${b})`;u||(M=m&&c.length<2?`(?:/${M})`:"/"+M),m&&(M+="?"),s+=M,f+=20,m&&(f+=-8),y&&(f+=-20),b===".*"&&(f+=-50)}h.push(f)}i.push(h)}if(e.strict&&e.end){const c=i.length-1;i[c][i[c].length-1]+=.7000000000000001}e.strict||(s+="/?"),e.end?s+="$":e.strict&&(s+="(?:/|$)");const r=new RegExp(s,e.sensitive?"":"i");function a(c){const h=c.match(r),u={};if(!h)return null;for(let d=1;d<h.length;d++){const f=h[d]||"",_=o[d-1];u[_.name]=f&&_.repeatable?f.split("/"):f}return u}function l(c){let h="",u=!1;for(const d of n){(!u||!h.endsWith("/"))&&(h+="/"),u=!1;for(const f of d)if(f.type===0)h+=f.value;else if(f.type===1){const{value:_,repeatable:y,optional:m}=f,p=_ in c?c[_]:"";if(ri(p)&&!y)throw new Error(`Provided param "${_}" is an array but it is not repeatable (* or + modifiers)`);const b=ri(p)?p.join("/"):p;if(!b)if(m)d.length<2&&(h.endsWith("/")?h=h.slice(0,-1):u=!0);else throw new Error(`Missing required param "${_}"`);h+=b}}return h||"/"}return{re:r,score:i,keys:o,parse:a,stringify:l}}function Hg(n,t){let e=0;for(;e<n.length&&e<t.length;){const i=t[e]-n[e];if(i)return i;e++}return n.length<t.length?n.length===1&&n[0]===80?-1:1:n.length>t.length?t.length===1&&t[0]===80?1:-1:0}function Bf(n,t){let e=0;const i=n.score,s=t.score;for(;e<i.length&&e<s.length;){const o=Hg(i[e],s[e]);if(o)return o;e++}if(Math.abs(s.length-i.length)===1){if(hh(i))return 1;if(hh(s))return-1}return s.length-i.length}function hh(n){const t=n[n.length-1];return n.length>0&&t[t.length-1]<0}const kg={type:0,value:""},Vg=/[a-zA-Z0-9_]/;function Wg(n){if(!n)return[[]];if(n==="/")return[[kg]];if(!n.startsWith("/"))throw new Error(`Invalid path "${n}"`);function t(f){throw new Error(`ERR (${e})/"${c}": ${f}`)}let e=0,i=e;const s=[];let o;function r(){o&&s.push(o),o=[]}let a=0,l,c="",h="";function u(){c&&(e===0?o.push({type:0,value:c}):e===1||e===2||e===3?(o.length>1&&(l==="*"||l==="+")&&t(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),o.push({type:1,value:c,regexp:h,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):t("Invalid state to consume buffer"),c="")}function d(){c+=l}for(;a<n.length;){if(l=n[a++],l==="\\"&&e!==2){i=e,e=4;continue}switch(e){case 0:l==="/"?(c&&u(),r()):l===":"?(u(),e=1):d();break;case 4:d(),e=i;break;case 1:l==="("?e=2:Vg.test(l)?d():(u(),e=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?h[h.length-1]=="\\"?h=h.slice(0,-1)+l:e=3:h+=l;break;case 3:u(),e=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,h="";break;default:t("Unknown state");break}}return e===2&&t(`Unfinished custom RegExp for param "${c}"`),u(),r(),s}function Xg(n,t,e){const i=Gg(Wg(n.path),e),s=Ee(i,{record:n,parent:t,children:[],alias:[]});return t&&!s.record.aliasOf==!t.record.aliasOf&&t.children.push(s),s}function qg(n,t){const e=[],i=new Map;t=mh({strict:!1,end:!0,sensitive:!1},t);function s(u){return i.get(u)}function o(u,d,f){const _=!f,y=fh(u);y.aliasOf=f&&f.record;const m=mh(t,u),p=[y];if("alias"in u){const S=typeof u.alias=="string"?[u.alias]:u.alias;for(const O of S)p.push(fh(Ee({},y,{components:f?f.record.components:y.components,path:O,aliasOf:f?f.record:y})))}let b,M;for(const S of p){const{path:O}=S;if(d&&O[0]!=="/"){const I=d.record.path,P=I[I.length-1]==="/"?"":"/";S.path=d.record.path+(O&&P+O)}if(b=Xg(S,d,m),f?f.alias.push(b):(M=M||b,M!==b&&M.alias.push(b),_&&u.name&&!ph(b)&&r(u.name)),zf(b)&&l(b),y.children){const I=y.children;for(let P=0;P<I.length;P++)o(I[P],b,f&&f.children[P])}f=f||b}return M?()=>{r(M)}:jo}function r(u){if(Ff(u)){const d=i.get(u);d&&(i.delete(u),e.splice(e.indexOf(d),1),d.children.forEach(r),d.alias.forEach(r))}else{const d=e.indexOf(u);d>-1&&(e.splice(d,1),u.record.name&&i.delete(u.record.name),u.children.forEach(r),u.alias.forEach(r))}}function a(){return e}function l(u){const d=jg(u,e);e.splice(d,0,u),u.record.name&&!ph(u)&&i.set(u.record.name,u)}function c(u,d){let f,_={},y,m;if("name"in u&&u.name){if(f=i.get(u.name),!f)throw _o(1,{location:u});m=f.record.name,_=Ee(dh(d.params,f.keys.filter(M=>!M.optional).concat(f.parent?f.parent.keys.filter(M=>M.optional):[]).map(M=>M.name)),u.params&&dh(u.params,f.keys.map(M=>M.name))),y=f.stringify(_)}else if(u.path!=null)y=u.path,f=e.find(M=>M.re.test(y)),f&&(_=f.parse(y),m=f.record.name);else{if(f=d.name?i.get(d.name):e.find(M=>M.re.test(d.path)),!f)throw _o(1,{location:u,currentLocation:d});m=f.record.name,_=Ee({},d.params,u.params),y=f.stringify(_)}const p=[];let b=f;for(;b;)p.unshift(b.record),b=b.parent;return{name:m,path:y,params:_,matched:p,meta:$g(p)}}n.forEach(u=>o(u));function h(){e.length=0,i.clear()}return{addRoute:o,resolve:c,removeRoute:r,clearRoutes:h,getRoutes:a,getRecordMatcher:s}}function dh(n,t){const e={};for(const i of t)i in n&&(e[i]=n[i]);return e}function fh(n){const t={path:n.path,redirect:n.redirect,name:n.name,meta:n.meta||{},aliasOf:n.aliasOf,beforeEnter:n.beforeEnter,props:Yg(n),children:n.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in n?n.components||null:n.component&&{default:n.component}};return Object.defineProperty(t,"mods",{value:{}}),t}function Yg(n){const t={},e=n.props||!1;if("component"in n)t.default=e;else for(const i in n.components)t[i]=typeof e=="object"?e[i]:e;return t}function ph(n){for(;n;){if(n.record.aliasOf)return!0;n=n.parent}return!1}function $g(n){return n.reduce((t,e)=>Ee(t,e.meta),{})}function mh(n,t){const e={};for(const i in n)e[i]=i in t?t[i]:n[i];return e}function jg(n,t){let e=0,i=t.length;for(;e!==i;){const o=e+i>>1;Bf(n,t[o])<0?i=o:e=o+1}const s=Kg(n);return s&&(i=t.lastIndexOf(s,i-1)),i}function Kg(n){let t=n;for(;t=t.parent;)if(zf(t)&&Bf(n,t)===0)return t}function zf({record:n}){return!!(n.name||n.components&&Object.keys(n.components).length||n.redirect)}function Zg(n){const t={};if(n===""||n==="?")return t;const i=(n[0]==="?"?n.slice(1):n).split("&");for(let s=0;s<i.length;++s){const o=i[s].replace(Cf," "),r=o.indexOf("="),a=ar(r<0?o:o.slice(0,r)),l=r<0?null:ar(o.slice(r+1));if(a in t){let c=t[a];ri(c)||(c=t[a]=[c]),c.push(l)}else t[a]=l}return t}function gh(n){let t="";for(let e in n){const i=n[e];if(e=_g(e),i==null){i!==void 0&&(t+=(t.length?"&":"")+e);continue}(ri(i)?i.map(o=>o&&jl(o)):[i&&jl(i)]).forEach(o=>{o!==void 0&&(t+=(t.length?"&":"")+e,o!=null&&(t+="="+o))})}return t}function Jg(n){const t={};for(const e in n){const i=n[e];i!==void 0&&(t[e]=ri(i)?i.map(s=>s==null?null:""+s):i==null?i:""+i)}return t}const Qg=Symbol(""),_h=Symbol(""),uu=Symbol(""),Gf=Symbol(""),Zl=Symbol("");function Do(){let n=[];function t(i){return n.push(i),()=>{const s=n.indexOf(i);s>-1&&n.splice(s,1)}}function e(){n=[]}return{add:t,list:()=>n.slice(),reset:e}}function ss(n,t,e,i,s,o=r=>r()){const r=i&&(i.enterCallbacks[s]=i.enterCallbacks[s]||[]);return()=>new Promise((a,l)=>{const c=d=>{d===!1?l(_o(4,{from:e,to:t})):d instanceof Error?l(d):Og(d)?l(_o(2,{from:t,to:d})):(r&&i.enterCallbacks[s]===r&&typeof d=="function"&&r.push(d),a())},h=o(()=>n.call(i&&i.instances[s],t,e,c));let u=Promise.resolve(h);n.length<3&&(u=u.then(c)),u.catch(d=>l(d))})}function il(n,t,e,i,s=o=>o()){const o=[];for(const r of n)for(const a in r.components){let l=r.components[a];if(!(t!=="beforeRouteEnter"&&!r.instances[a]))if(Rf(l)){const h=(l.__vccOpts||l)[t];h&&o.push(ss(h,e,i,r,a,s))}else{let c=l();o.push(()=>c.then(h=>{if(!h)throw new Error(`Couldn't resolve component "${a}" at "${r.path}"`);const u=rg(h)?h.default:h;r.mods[a]=h,r.components[a]=u;const f=(u.__vccOpts||u)[t];return f&&ss(f,e,i,r,a,s)()}))}}return o}function vh(n){const t=Hi(uu),e=Hi(Gf),i=Qn(()=>{const l=ro(n.to);return t.resolve(l)}),s=Qn(()=>{const{matched:l}=i.value,{length:c}=l,h=l[c-1],u=e.matched;if(!h||!u.length)return-1;const d=u.findIndex(go.bind(null,h));if(d>-1)return d;const f=xh(l[c-2]);return c>1&&xh(h)===f&&u[u.length-1].path!==f?u.findIndex(go.bind(null,l[c-2])):d}),o=Qn(()=>s.value>-1&&i_(e.params,i.value.params)),r=Qn(()=>s.value>-1&&s.value===e.matched.length-1&&Uf(e.params,i.value.params));function a(l={}){return n_(l)?t[ro(n.replace)?"replace":"push"](ro(n.to)).catch(jo):Promise.resolve()}return{route:i,href:Qn(()=>i.value.href),isActive:o,isExactActive:r,navigate:a}}const t_=Xn({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:vh,setup(n,{slots:t}){const e=Ra(vh(n)),{options:i}=Hi(uu),s=Qn(()=>({[yh(n.activeClass,i.linkActiveClass,"router-link-active")]:e.isActive,[yh(n.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:e.isExactActive}));return()=>{const o=t.default&&t.default(e);return n.custom?o:bf("a",{"aria-current":e.isExactActive?n.ariaCurrentValue:null,href:e.href,onClick:e.navigate,class:s.value},o)}}}),e_=t_;function n_(n){if(!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)&&!n.defaultPrevented&&!(n.button!==void 0&&n.button!==0)){if(n.currentTarget&&n.currentTarget.getAttribute){const t=n.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return n.preventDefault&&n.preventDefault(),!0}}function i_(n,t){for(const e in t){const i=t[e],s=n[e];if(typeof i=="string"){if(i!==s)return!1}else if(!ri(s)||s.length!==i.length||i.some((o,r)=>o!==s[r]))return!1}return!0}function xh(n){return n?n.aliasOf?n.aliasOf.path:n.path:""}const yh=(n,t,e)=>n??t??e,s_=Xn({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(n,{attrs:t,slots:e}){const i=Hi(Zl),s=Qn(()=>n.route||i.value),o=Hi(_h,0),r=Qn(()=>{let c=ro(o);const{matched:h}=s.value;let u;for(;(u=h[c])&&!u.components;)c++;return c}),a=Qn(()=>s.value.matched[r.value]);ea(_h,Qn(()=>r.value+1)),ea(Qg,a),ea(Zl,s);const l=Zt();return We(()=>[l.value,a.value,n.name],([c,h,u],[d,f,_])=>{h&&(h.instances[u]=c,f&&f!==h&&c&&c===d&&(h.leaveGuards.size||(h.leaveGuards=f.leaveGuards),h.updateGuards.size||(h.updateGuards=f.updateGuards))),c&&h&&(!f||!go(h,f)||!d)&&(h.enterCallbacks[u]||[]).forEach(y=>y(c))},{flush:"post"}),()=>{const c=s.value,h=n.name,u=a.value,d=u&&u.components[h];if(!d)return Mh(e.default,{Component:d,route:c});const f=u.props[h],_=f?f===!0?c.params:typeof f=="function"?f(c):f:null,m=bf(d,Ee({},_,t,{onVnodeUnmounted:p=>{p.component.isUnmounted&&(u.instances[h]=null)},ref:l}));return Mh(e.default,{Component:m,route:c})||m}}});function Mh(n,t){if(!n)return null;const e=n(t);return e.length===1?e[0]:e}const o_=s_;function r_(n){const t=qg(n.routes,n),e=n.parseQuery||Zg,i=n.stringifyQuery||gh,s=n.history,o=Do(),r=Do(),a=Do(),l=Xo(ji);let c=ji;Qs&&n.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const h=el.bind(null,F=>""+F),u=el.bind(null,xg),d=el.bind(null,ar);function f(F,lt){let ot,ht;return Ff(F)?(ot=t.getRecordMatcher(F),ht=lt):ht=F,t.addRoute(ht,ot)}function _(F){const lt=t.getRecordMatcher(F);lt&&t.removeRoute(lt)}function y(){return t.getRoutes().map(F=>F.record)}function m(F){return!!t.getRecordMatcher(F)}function p(F,lt){if(lt=Ee({},lt||l.value),typeof F=="string"){const T=nl(e,F,lt.path),L=t.resolve({path:T.path},lt),N=s.createHref(T.fullPath);return Ee(T,L,{params:d(L.params),hash:ar(T.hash),redirectedFrom:void 0,href:N})}let ot;if(F.path!=null)ot=Ee({},F,{path:nl(e,F.path,lt.path).path});else{const T=Ee({},F.params);for(const L in T)T[L]==null&&delete T[L];ot=Ee({},F,{params:u(T)}),lt.params=u(lt.params)}const ht=t.resolve(ot,lt),Mt=F.hash||"";ht.params=h(d(ht.params));const tt=wg(i,Ee({},F,{hash:gg(Mt),path:ht.path})),g=s.createHref(tt);return Ee({fullPath:tt,hash:Mt,query:i===gh?Jg(F.query):F.query||{}},ht,{redirectedFrom:void 0,href:g})}function b(F){return typeof F=="string"?nl(e,F,l.value.path):Ee({},F)}function M(F,lt){if(c!==F)return _o(8,{from:lt,to:F})}function S(F){return P(F)}function O(F){return S(Ee(b(F),{replace:!0}))}function I(F){const lt=F.matched[F.matched.length-1];if(lt&&lt.redirect){const{redirect:ot}=lt;let ht=typeof ot=="function"?ot(F):ot;return typeof ht=="string"&&(ht=ht.includes("?")||ht.includes("#")?ht=b(ht):{path:ht},ht.params={}),Ee({query:F.query,hash:F.hash,params:ht.path!=null?{}:F.params},ht)}}function P(F,lt){const ot=c=p(F),ht=l.value,Mt=F.state,tt=F.force,g=F.replace===!0,T=I(ot);if(T)return P(Ee(b(T),{state:typeof T=="object"?Ee({},Mt,T.state):Mt,force:tt,replace:g}),lt||ot);const L=ot;L.redirectedFrom=lt;let N;return!tt&&Sg(i,ht,ot)&&(N=_o(16,{to:L,from:ht}),_t(ht,ht,!0,!1)),(N?Promise.resolve(N):x(L,ht)).catch(D=>Ri(D)?Ri(D,2)?D:yt(D):H(D,L,ht)).then(D=>{if(D){if(Ri(D,2))return P(Ee({replace:g},b(D.to),{state:typeof D.to=="object"?Ee({},Mt,D.to.state):Mt,force:tt}),lt||L)}else D=j(L,ht,!0,g,Mt);return E(L,ht,D),D})}function U(F,lt){const ot=M(F,lt);return ot?Promise.reject(ot):Promise.resolve()}function nt(F){const lt=rt.values().next().value;return lt&&typeof lt.runWithContext=="function"?lt.runWithContext(F):F()}function x(F,lt){let ot;const[ht,Mt,tt]=a_(F,lt);ot=il(ht.reverse(),"beforeRouteLeave",F,lt);for(const T of ht)T.leaveGuards.forEach(L=>{ot.push(ss(L,F,lt))});const g=U.bind(null,F,lt);return ot.push(g),vt(ot).then(()=>{ot=[];for(const T of o.list())ot.push(ss(T,F,lt));return ot.push(g),vt(ot)}).then(()=>{ot=il(Mt,"beforeRouteUpdate",F,lt);for(const T of Mt)T.updateGuards.forEach(L=>{ot.push(ss(L,F,lt))});return ot.push(g),vt(ot)}).then(()=>{ot=[];for(const T of tt)if(T.beforeEnter)if(ri(T.beforeEnter))for(const L of T.beforeEnter)ot.push(ss(L,F,lt));else ot.push(ss(T.beforeEnter,F,lt));return ot.push(g),vt(ot)}).then(()=>(F.matched.forEach(T=>T.enterCallbacks={}),ot=il(tt,"beforeRouteEnter",F,lt,nt),ot.push(g),vt(ot))).then(()=>{ot=[];for(const T of r.list())ot.push(ss(T,F,lt));return ot.push(g),vt(ot)}).catch(T=>Ri(T,8)?T:Promise.reject(T))}function E(F,lt,ot){a.list().forEach(ht=>nt(()=>ht(F,lt,ot)))}function j(F,lt,ot,ht,Mt){const tt=M(F,lt);if(tt)return tt;const g=lt===ji,T=Qs?history.state:{};ot&&(ht||g?s.replace(F.fullPath,Ee({scroll:g&&T&&T.scroll},Mt)):s.push(F.fullPath,Mt)),l.value=F,_t(F,lt,ot,g),yt()}let k;function J(){k||(k=s.listen((F,lt,ot)=>{if(!ft.listening)return;const ht=p(F),Mt=I(ht);if(Mt){P(Ee(Mt,{replace:!0}),ht).catch(jo);return}c=ht;const tt=l.value;Qs&&Ig(ah(tt.fullPath,ot.delta),Na()),x(ht,tt).catch(g=>Ri(g,12)?g:Ri(g,2)?(P(g.to,ht).then(T=>{Ri(T,20)&&!ot.delta&&ot.type===lr.pop&&s.go(-1,!1)}).catch(jo),Promise.reject()):(ot.delta&&s.go(-ot.delta,!1),H(g,ht,tt))).then(g=>{g=g||j(ht,tt,!1),g&&(ot.delta&&!Ri(g,8)?s.go(-ot.delta,!1):ot.type===lr.pop&&Ri(g,20)&&s.go(-1,!1)),E(ht,tt,g)}).catch(jo)}))}let at=Do(),V=Do(),Z;function H(F,lt,ot){yt(F);const ht=V.list();return ht.length?ht.forEach(Mt=>Mt(F,lt,ot)):console.error(F),Promise.reject(F)}function gt(){return Z&&l.value!==ji?Promise.resolve():new Promise((F,lt)=>{at.add([F,lt])})}function yt(F){return Z||(Z=!F,J(),at.list().forEach(([lt,ot])=>F?ot(F):lt()),at.reset()),F}function _t(F,lt,ot,ht){const{scrollBehavior:Mt}=n;if(!Qs||!Mt)return Promise.resolve();const tt=!ot&&Lg(ah(F.fullPath,0))||(ht||!ot)&&history.state&&history.state.scroll||null;return Kd().then(()=>Mt(F,lt,tt)).then(g=>g&&Cg(g)).catch(g=>H(g,F,lt))}const It=F=>s.go(F);let zt;const rt=new Set,ft={currentRoute:l,listening:!0,addRoute:f,removeRoute:_,clearRoutes:t.clearRoutes,hasRoute:m,getRoutes:y,resolve:p,options:n,push:S,replace:O,go:It,back:()=>It(-1),forward:()=>It(1),beforeEach:o.add,beforeResolve:r.add,afterEach:a.add,onError:V.add,isReady:gt,install(F){const lt=this;F.component("RouterLink",e_),F.component("RouterView",o_),F.config.globalProperties.$router=lt,Object.defineProperty(F.config.globalProperties,"$route",{enumerable:!0,get:()=>ro(l)}),Qs&&!zt&&l.value===ji&&(zt=!0,S(s.location).catch(Mt=>{}));const ot={};for(const Mt in ji)Object.defineProperty(ot,Mt,{get:()=>l.value[Mt],enumerable:!0});F.provide(uu,lt),F.provide(Gf,Xd(ot)),F.provide(Zl,l);const ht=F.unmount;rt.add(F),F.unmount=function(){rt.delete(F),rt.size<1&&(c=ji,k&&k(),k=null,l.value=ji,zt=!1,Z=!1),ht()}}};function vt(F){return F.reduce((lt,ot)=>lt.then(()=>nt(ot)),Promise.resolve())}return ft}function a_(n,t){const e=[],i=[],s=[],o=Math.max(t.matched.length,n.matched.length);for(let r=0;r<o;r++){const a=t.matched[r];a&&(n.matched.find(c=>go(c,a))?i.push(a):e.push(a));const l=n.matched[r];l&&(t.matched.find(c=>go(c,l))||s.push(l))}return[e,i,s]}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const hu="169",l_=0,wh=1,c_=2,Hf=1,u_=2,Ni=3,cs=0,Tn=1,me=2,rs=0,co=1,Sh=2,Eh=3,bh=4,h_=5,bs=100,d_=101,f_=102,p_=103,m_=104,g_=200,__=201,v_=202,x_=203,Jl=204,Ql=205,y_=206,M_=207,w_=208,S_=209,E_=210,b_=211,T_=212,A_=213,R_=214,tc=0,ec=1,nc=2,vo=3,ic=4,sc=5,oc=6,rc=7,kf=0,P_=1,C_=2,as=0,I_=1,L_=2,D_=3,Vf=4,U_=5,N_=6,F_=7,Wf=300,xo=301,yo=302,_a=303,ac=304,Fa=306,Je=1e3,As=1001,lc=1002,Gn=1003,O_=1004,Tr=1005,ti=1006,sl=1007,Rs=1008,ki=1009,Xf=1010,qf=1011,cr=1012,du=1013,Is=1014,Bi=1015,_r=1016,fu=1017,pu=1018,Mo=1020,Yf=35902,$f=1021,jf=1022,ni=1023,Kf=1024,Zf=1025,uo=1026,wo=1027,Jf=1028,mu=1029,Qf=1030,gu=1031,_u=1033,sa=33776,oa=33777,ra=33778,aa=33779,cc=35840,uc=35841,hc=35842,dc=35843,fc=36196,pc=37492,mc=37496,gc=37808,_c=37809,vc=37810,xc=37811,yc=37812,Mc=37813,wc=37814,Sc=37815,Ec=37816,bc=37817,Tc=37818,Ac=37819,Rc=37820,Pc=37821,la=36492,Cc=36494,Ic=36495,tp=36283,Lc=36284,Dc=36285,Uc=36286,B_=3200,z_=3201,ep=0,G_=1,os="",Jn="srgb",ds="srgb-linear",vu="display-p3",Oa="display-p3-linear",va="linear",Ne="srgb",xa="rec709",ya="p3",Bs=7680,Th=519,H_=512,k_=513,V_=514,np=515,W_=516,X_=517,q_=518,Y_=519,Ah=35044,Rh="300 es",zi=2e3,Ma=2001;class bo{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const o=s.indexOf(e);o!==-1&&s.splice(o,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const s=i.slice(0);for(let o=0,r=s.length;o<r;o++)s[o].call(this,t);t.target=null}}}const un=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Ph=1234567;const Zo=Math.PI/180,ur=180/Math.PI;function Ns(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(un[n&255]+un[n>>8&255]+un[n>>16&255]+un[n>>24&255]+"-"+un[t&255]+un[t>>8&255]+"-"+un[t>>16&15|64]+un[t>>24&255]+"-"+un[e&63|128]+un[e>>8&255]+"-"+un[e>>16&255]+un[e>>24&255]+un[i&255]+un[i>>8&255]+un[i>>16&255]+un[i>>24&255]).toLowerCase()}function nn(n,t,e){return Math.max(t,Math.min(e,n))}function xu(n,t){return(n%t+t)%t}function $_(n,t,e,i,s){return i+(n-t)*(s-i)/(e-t)}function j_(n,t,e){return n!==t?(e-n)/(t-n):0}function Jo(n,t,e){return(1-e)*n+e*t}function K_(n,t,e,i){return Jo(n,t,1-Math.exp(-e*i))}function Z_(n,t=1){return t-Math.abs(xu(n,t*2)-t)}function J_(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function Q_(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function tv(n,t){return n+Math.floor(Math.random()*(t-n+1))}function ev(n,t){return n+Math.random()*(t-n)}function nv(n){return n*(.5-Math.random())}function iv(n){n!==void 0&&(Ph=n);let t=Ph+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function sv(n){return n*Zo}function ov(n){return n*ur}function rv(n){return(n&n-1)===0&&n!==0}function av(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function lv(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function cv(n,t,e,i,s){const o=Math.cos,r=Math.sin,a=o(e/2),l=r(e/2),c=o((t+i)/2),h=r((t+i)/2),u=o((t-i)/2),d=r((t-i)/2),f=o((i-t)/2),_=r((i-t)/2);switch(s){case"XYX":n.set(a*h,l*u,l*d,a*c);break;case"YZY":n.set(l*d,a*h,l*u,a*c);break;case"ZXZ":n.set(l*u,l*d,a*h,a*c);break;case"XZX":n.set(a*h,l*_,l*f,a*c);break;case"YXY":n.set(l*f,a*h,l*_,a*c);break;case"ZYZ":n.set(l*_,l*f,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function to(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function _n(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const ie={DEG2RAD:Zo,RAD2DEG:ur,generateUUID:Ns,clamp:nn,euclideanModulo:xu,mapLinear:$_,inverseLerp:j_,lerp:Jo,damp:K_,pingpong:Z_,smoothstep:J_,smootherstep:Q_,randInt:tv,randFloat:ev,randFloatSpread:nv,seededRandom:iv,degToRad:sv,radToDeg:ov,isPowerOfTwo:rv,ceilPowerOfTwo:av,floorPowerOfTwo:lv,setQuaternionFromProperEuler:cv,normalize:_n,denormalize:to};class Ot{constructor(t=0,e=0){Ot.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(nn(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),s=Math.sin(e),o=this.x-t.x,r=this.y-t.y;return this.x=o*i-r*s+t.x,this.y=o*s+r*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class le{constructor(t,e,i,s,o,r,a,l,c){le.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,o,r,a,l,c)}set(t,e,i,s,o,r,a,l,c){const h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=o,h[5]=l,h[6]=i,h[7]=r,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,o=this.elements,r=i[0],a=i[3],l=i[6],c=i[1],h=i[4],u=i[7],d=i[2],f=i[5],_=i[8],y=s[0],m=s[3],p=s[6],b=s[1],M=s[4],S=s[7],O=s[2],I=s[5],P=s[8];return o[0]=r*y+a*b+l*O,o[3]=r*m+a*M+l*I,o[6]=r*p+a*S+l*P,o[1]=c*y+h*b+u*O,o[4]=c*m+h*M+u*I,o[7]=c*p+h*S+u*P,o[2]=d*y+f*b+_*O,o[5]=d*m+f*M+_*I,o[8]=d*p+f*S+_*P,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],s=t[2],o=t[3],r=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*r*h-e*a*c-i*o*h+i*a*l+s*o*c-s*r*l}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],o=t[3],r=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*r-a*c,d=a*l-h*o,f=c*o-r*l,_=e*u+i*d+s*f;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/_;return t[0]=u*y,t[1]=(s*c-h*i)*y,t[2]=(a*i-s*r)*y,t[3]=d*y,t[4]=(h*e-s*l)*y,t[5]=(s*o-a*e)*y,t[6]=f*y,t[7]=(i*l-c*e)*y,t[8]=(r*e-i*o)*y,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,o,r,a){const l=Math.cos(o),c=Math.sin(o);return this.set(i*l,i*c,-i*(l*r+c*a)+r+t,-s*c,s*l,-s*(-c*r+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(ol.makeScale(t,e)),this}rotate(t){return this.premultiply(ol.makeRotation(-t)),this}translate(t,e){return this.premultiply(ol.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const ol=new le;function ip(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function hr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function uv(){const n=hr("canvas");return n.style.display="block",n}const Ch={};function ca(n){n in Ch||(Ch[n]=!0,console.warn(n))}function hv(n,t,e){return new Promise(function(i,s){function o(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(o,e);break;default:i()}}setTimeout(o,e)})}function dv(n){const t=n.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function fv(n){const t=n.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Ih=new le().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Lh=new le().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Uo={[ds]:{transfer:va,primaries:xa,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n,fromReference:n=>n},[Jn]:{transfer:Ne,primaries:xa,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[Oa]:{transfer:va,primaries:ya,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.applyMatrix3(Lh),fromReference:n=>n.applyMatrix3(Ih)},[vu]:{transfer:Ne,primaries:ya,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.convertSRGBToLinear().applyMatrix3(Lh),fromReference:n=>n.applyMatrix3(Ih).convertLinearToSRGB()}},pv=new Set([ds,Oa]),we={enabled:!0,_workingColorSpace:ds,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!pv.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,t,e){if(this.enabled===!1||t===e||!t||!e)return n;const i=Uo[t].toReference,s=Uo[e].fromReference;return s(i(n))},fromWorkingColorSpace:function(n,t){return this.convert(n,this._workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this._workingColorSpace)},getPrimaries:function(n){return Uo[n].primaries},getTransfer:function(n){return n===os?va:Uo[n].transfer},getLuminanceCoefficients:function(n,t=this._workingColorSpace){return n.fromArray(Uo[t].luminanceCoefficients)}};function ho(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function rl(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let zs;class mv{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{zs===void 0&&(zs=hr("canvas")),zs.width=t.width,zs.height=t.height;const i=zs.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=zs}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=hr("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const s=i.getImageData(0,0,t.width,t.height),o=s.data;for(let r=0;r<o.length;r++)o[r]=ho(o[r]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(ho(e[i]/255)*255):e[i]=ho(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let gv=0;class sp{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:gv++}),this.uuid=Ns(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let o;if(Array.isArray(s)){o=[];for(let r=0,a=s.length;r<a;r++)s[r].isDataTexture?o.push(al(s[r].image)):o.push(al(s[r]))}else o=al(s);i.url=o}return e||(t.images[this.uuid]=i),i}}function al(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?mv.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let _v=0;class wn extends bo{constructor(t=wn.DEFAULT_IMAGE,e=wn.DEFAULT_MAPPING,i=As,s=As,o=ti,r=Rs,a=ni,l=ki,c=wn.DEFAULT_ANISOTROPY,h=os){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:_v++}),this.uuid=Ns(),this.name="",this.source=new sp(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=o,this.minFilter=r,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ot(0,0),this.repeat=new Ot(1,1),this.center=new Ot(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new le,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Wf)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Je:t.x=t.x-Math.floor(t.x);break;case As:t.x=t.x<0?0:1;break;case lc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Je:t.y=t.y-Math.floor(t.y);break;case As:t.y=t.y<0?0:1;break;case lc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}wn.DEFAULT_IMAGE=null;wn.DEFAULT_MAPPING=Wf;wn.DEFAULT_ANISOTROPY=1;class Ae{constructor(t=0,e=0,i=0,s=1){Ae.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,o=this.w,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s+r[12]*o,this.y=r[1]*e+r[5]*i+r[9]*s+r[13]*o,this.z=r[2]*e+r[6]*i+r[10]*s+r[14]*o,this.w=r[3]*e+r[7]*i+r[11]*s+r[15]*o,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,o;const l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],_=l[9],y=l[2],m=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-y)<.01&&Math.abs(_-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+y)<.1&&Math.abs(_+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const M=(c+1)/2,S=(f+1)/2,O=(p+1)/2,I=(h+d)/4,P=(u+y)/4,U=(_+m)/4;return M>S&&M>O?M<.01?(i=0,s=.707106781,o=.707106781):(i=Math.sqrt(M),s=I/i,o=P/i):S>O?S<.01?(i=.707106781,s=0,o=.707106781):(s=Math.sqrt(S),i=I/s,o=U/s):O<.01?(i=.707106781,s=.707106781,o=0):(o=Math.sqrt(O),i=P/o,s=U/o),this.set(i,s,o,e),this}let b=Math.sqrt((m-_)*(m-_)+(u-y)*(u-y)+(d-h)*(d-h));return Math.abs(b)<.001&&(b=1),this.x=(m-_)/b,this.y=(u-y)/b,this.z=(d-h)/b,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class vv extends bo{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Ae(0,0,t,e),this.scissorTest=!1,this.viewport=new Ae(0,0,t,e);const s={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ti,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const o=new wn(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);o.flipY=!1,o.generateMipmaps=i.generateMipmaps,o.internalFormat=i.internalFormat,this.textures=[];const r=i.count;for(let a=0;a<r;a++)this.textures[a]=o.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,o=this.textures.length;s<o;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new sp(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ls extends vv{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class op extends wn{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Gn,this.minFilter=Gn,this.wrapR=As,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class xv extends wn{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Gn,this.minFilter=Gn,this.wrapR=As,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class vr{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,o,r,a){let l=i[s+0],c=i[s+1],h=i[s+2],u=i[s+3];const d=o[r+0],f=o[r+1],_=o[r+2],y=o[r+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=f,t[e+2]=_,t[e+3]=y;return}if(u!==y||l!==d||c!==f||h!==_){let m=1-a;const p=l*d+c*f+h*_+u*y,b=p>=0?1:-1,M=1-p*p;if(M>Number.EPSILON){const O=Math.sqrt(M),I=Math.atan2(O,p*b);m=Math.sin(m*I)/O,a=Math.sin(a*I)/O}const S=a*b;if(l=l*m+d*S,c=c*m+f*S,h=h*m+_*S,u=u*m+y*S,m===1-a){const O=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=O,c*=O,h*=O,u*=O}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,i,s,o,r){const a=i[s],l=i[s+1],c=i[s+2],h=i[s+3],u=o[r],d=o[r+1],f=o[r+2],_=o[r+3];return t[e]=a*_+h*u+l*f-c*d,t[e+1]=l*_+h*d+c*u-a*f,t[e+2]=c*_+h*f+a*d-l*u,t[e+3]=h*_-a*u-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,s=t._y,o=t._z,r=t._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(s/2),u=a(o/2),d=l(i/2),f=l(s/2),_=l(o/2);switch(r){case"XYZ":this._x=d*h*u+c*f*_,this._y=c*f*u-d*h*_,this._z=c*h*_+d*f*u,this._w=c*h*u-d*f*_;break;case"YXZ":this._x=d*h*u+c*f*_,this._y=c*f*u-d*h*_,this._z=c*h*_-d*f*u,this._w=c*h*u+d*f*_;break;case"ZXY":this._x=d*h*u-c*f*_,this._y=c*f*u+d*h*_,this._z=c*h*_+d*f*u,this._w=c*h*u-d*f*_;break;case"ZYX":this._x=d*h*u-c*f*_,this._y=c*f*u+d*h*_,this._z=c*h*_-d*f*u,this._w=c*h*u+d*f*_;break;case"YZX":this._x=d*h*u+c*f*_,this._y=c*f*u+d*h*_,this._z=c*h*_-d*f*u,this._w=c*h*u-d*f*_;break;case"XZY":this._x=d*h*u-c*f*_,this._y=c*f*u-d*h*_,this._z=c*h*_+d*f*u,this._w=c*h*u+d*f*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],s=e[4],o=e[8],r=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=i+a+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(o-c)*f,this._z=(r-s)*f}else if(i>a&&i>u){const f=2*Math.sqrt(1+i-a-u);this._w=(h-l)/f,this._x=.25*f,this._y=(s+r)/f,this._z=(o+c)/f}else if(a>u){const f=2*Math.sqrt(1+a-i-u);this._w=(o-c)/f,this._x=(s+r)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+u-i-a);this._w=(r-s)/f,this._x=(o+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(nn(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,s=t._y,o=t._z,r=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=i*h+r*a+s*c-o*l,this._y=s*h+r*l+o*a-i*c,this._z=o*h+r*c+i*l-s*a,this._w=r*h-i*a-s*l-o*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,s=this._y,o=this._z,r=this._w;let a=r*t._w+i*t._x+s*t._y+o*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=r,this._x=i,this._y=s,this._z=o,this;const l=1-a*a;if(l<=Number.EPSILON){const f=1-e;return this._w=f*r+e*this._w,this._x=f*i+e*this._x,this._y=f*s+e*this._y,this._z=f*o+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=r*u+this._w*d,this._x=i*u+this._x*d,this._y=s*u+this._y*d,this._z=o*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),o=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),o*Math.sin(e),o*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class q{constructor(t=0,e=0,i=0){q.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Dh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Dh.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,s=this.z,o=t.elements;return this.x=o[0]*e+o[3]*i+o[6]*s,this.y=o[1]*e+o[4]*i+o[7]*s,this.z=o[2]*e+o[5]*i+o[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,o=t.elements,r=1/(o[3]*e+o[7]*i+o[11]*s+o[15]);return this.x=(o[0]*e+o[4]*i+o[8]*s+o[12])*r,this.y=(o[1]*e+o[5]*i+o[9]*s+o[13])*r,this.z=(o[2]*e+o[6]*i+o[10]*s+o[14])*r,this}applyQuaternion(t){const e=this.x,i=this.y,s=this.z,o=t.x,r=t.y,a=t.z,l=t.w,c=2*(r*s-a*i),h=2*(a*e-o*s),u=2*(o*i-r*e);return this.x=e+l*c+r*u-a*h,this.y=i+l*h+a*c-o*u,this.z=s+l*u+o*h-r*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,s=this.z,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s,this.y=o[1]*e+o[5]*i+o[9]*s,this.z=o[2]*e+o[6]*i+o[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,s=t.y,o=t.z,r=e.x,a=e.y,l=e.z;return this.x=s*l-o*a,this.y=o*r-i*l,this.z=i*a-s*r,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return ll.copy(this).projectOnVector(t),this.sub(ll)}reflect(t){return this.sub(ll.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(nn(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ll=new q,Dh=new vr;class xr{constructor(t=new q(1/0,1/0,1/0),e=new q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(jn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(jn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=jn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const o=i.getAttribute("position");if(e===!0&&o!==void 0&&t.isInstancedMesh!==!0)for(let r=0,a=o.count;r<a;r++)t.isMesh===!0?t.getVertexPosition(r,jn):jn.fromBufferAttribute(o,r),jn.applyMatrix4(t.matrixWorld),this.expandByPoint(jn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ar.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ar.copy(i.boundingBox)),Ar.applyMatrix4(t.matrixWorld),this.union(Ar)}const s=t.children;for(let o=0,r=s.length;o<r;o++)this.expandByObject(s[o],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,jn),jn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(No),Rr.subVectors(this.max,No),Gs.subVectors(t.a,No),Hs.subVectors(t.b,No),ks.subVectors(t.c,No),Ki.subVectors(Hs,Gs),Zi.subVectors(ks,Hs),gs.subVectors(Gs,ks);let e=[0,-Ki.z,Ki.y,0,-Zi.z,Zi.y,0,-gs.z,gs.y,Ki.z,0,-Ki.x,Zi.z,0,-Zi.x,gs.z,0,-gs.x,-Ki.y,Ki.x,0,-Zi.y,Zi.x,0,-gs.y,gs.x,0];return!cl(e,Gs,Hs,ks,Rr)||(e=[1,0,0,0,1,0,0,0,1],!cl(e,Gs,Hs,ks,Rr))?!1:(Pr.crossVectors(Ki,Zi),e=[Pr.x,Pr.y,Pr.z],cl(e,Gs,Hs,ks,Rr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,jn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(jn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Pi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Pi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Pi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Pi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Pi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Pi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Pi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Pi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Pi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Pi=[new q,new q,new q,new q,new q,new q,new q,new q],jn=new q,Ar=new xr,Gs=new q,Hs=new q,ks=new q,Ki=new q,Zi=new q,gs=new q,No=new q,Rr=new q,Pr=new q,_s=new q;function cl(n,t,e,i,s){for(let o=0,r=n.length-3;o<=r;o+=3){_s.fromArray(n,o);const a=s.x*Math.abs(_s.x)+s.y*Math.abs(_s.y)+s.z*Math.abs(_s.z),l=t.dot(_s),c=e.dot(_s),h=i.dot(_s);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const yv=new xr,Fo=new q,ul=new q;class Ba{constructor(t=new q,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):yv.setFromPoints(t).getCenter(i);let s=0;for(let o=0,r=t.length;o<r;o++)s=Math.max(s,i.distanceToSquared(t[o]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Fo.subVectors(t,this.center);const e=Fo.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(Fo,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ul.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Fo.copy(t.center).add(ul)),this.expandByPoint(Fo.copy(t.center).sub(ul))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ci=new q,hl=new q,Cr=new q,Ji=new q,dl=new q,Ir=new q,fl=new q;class rp{constructor(t=new q,e=new q(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ci)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Ci.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ci.copy(this.origin).addScaledVector(this.direction,e),Ci.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){hl.copy(t).add(e).multiplyScalar(.5),Cr.copy(e).sub(t).normalize(),Ji.copy(this.origin).sub(hl);const o=t.distanceTo(e)*.5,r=-this.direction.dot(Cr),a=Ji.dot(this.direction),l=-Ji.dot(Cr),c=Ji.lengthSq(),h=Math.abs(1-r*r);let u,d,f,_;if(h>0)if(u=r*l-a,d=r*a-l,_=o*h,u>=0)if(d>=-_)if(d<=_){const y=1/h;u*=y,d*=y,f=u*(u+r*d+2*a)+d*(r*u+d+2*l)+c}else d=o,u=Math.max(0,-(r*d+a)),f=-u*u+d*(d+2*l)+c;else d=-o,u=Math.max(0,-(r*d+a)),f=-u*u+d*(d+2*l)+c;else d<=-_?(u=Math.max(0,-(-r*o+a)),d=u>0?-o:Math.min(Math.max(-o,-l),o),f=-u*u+d*(d+2*l)+c):d<=_?(u=0,d=Math.min(Math.max(-o,-l),o),f=d*(d+2*l)+c):(u=Math.max(0,-(r*o+a)),d=u>0?o:Math.min(Math.max(-o,-l),o),f=-u*u+d*(d+2*l)+c);else d=r>0?-o:o,u=Math.max(0,-(r*d+a)),f=-u*u+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(hl).addScaledVector(Cr,d),f}intersectSphere(t,e){Ci.subVectors(t.center,this.origin);const i=Ci.dot(this.direction),s=Ci.dot(Ci)-i*i,o=t.radius*t.radius;if(s>o)return null;const r=Math.sqrt(o-s),a=i-r,l=i+r;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,o,r,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(i=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(i=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),h>=0?(o=(t.min.y-d.y)*h,r=(t.max.y-d.y)*h):(o=(t.max.y-d.y)*h,r=(t.min.y-d.y)*h),i>r||o>s||((o>i||isNaN(i))&&(i=o),(r<s||isNaN(s))&&(s=r),u>=0?(a=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,Ci)!==null}intersectTriangle(t,e,i,s,o){dl.subVectors(e,t),Ir.subVectors(i,t),fl.crossVectors(dl,Ir);let r=this.direction.dot(fl),a;if(r>0){if(s)return null;a=1}else if(r<0)a=-1,r=-r;else return null;Ji.subVectors(this.origin,t);const l=a*this.direction.dot(Ir.crossVectors(Ji,Ir));if(l<0)return null;const c=a*this.direction.dot(dl.cross(Ji));if(c<0||l+c>r)return null;const h=-a*Ji.dot(fl);return h<0?null:this.at(h/r,o)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Fe{constructor(t,e,i,s,o,r,a,l,c,h,u,d,f,_,y,m){Fe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,o,r,a,l,c,h,u,d,f,_,y,m)}set(t,e,i,s,o,r,a,l,c,h,u,d,f,_,y,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=i,p[12]=s,p[1]=o,p[5]=r,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=_,p[11]=y,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Fe().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,s=1/Vs.setFromMatrixColumn(t,0).length(),o=1/Vs.setFromMatrixColumn(t,1).length(),r=1/Vs.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*o,e[5]=i[5]*o,e[6]=i[6]*o,e[7]=0,e[8]=i[8]*r,e[9]=i[9]*r,e[10]=i[10]*r,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,s=t.y,o=t.z,r=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(o),u=Math.sin(o);if(t.order==="XYZ"){const d=r*h,f=r*u,_=a*h,y=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=f+_*c,e[5]=d-y*c,e[9]=-a*l,e[2]=y-d*c,e[6]=_+f*c,e[10]=r*l}else if(t.order==="YXZ"){const d=l*h,f=l*u,_=c*h,y=c*u;e[0]=d+y*a,e[4]=_*a-f,e[8]=r*c,e[1]=r*u,e[5]=r*h,e[9]=-a,e[2]=f*a-_,e[6]=y+d*a,e[10]=r*l}else if(t.order==="ZXY"){const d=l*h,f=l*u,_=c*h,y=c*u;e[0]=d-y*a,e[4]=-r*u,e[8]=_+f*a,e[1]=f+_*a,e[5]=r*h,e[9]=y-d*a,e[2]=-r*c,e[6]=a,e[10]=r*l}else if(t.order==="ZYX"){const d=r*h,f=r*u,_=a*h,y=a*u;e[0]=l*h,e[4]=_*c-f,e[8]=d*c+y,e[1]=l*u,e[5]=y*c+d,e[9]=f*c-_,e[2]=-c,e[6]=a*l,e[10]=r*l}else if(t.order==="YZX"){const d=r*l,f=r*c,_=a*l,y=a*c;e[0]=l*h,e[4]=y-d*u,e[8]=_*u+f,e[1]=u,e[5]=r*h,e[9]=-a*h,e[2]=-c*h,e[6]=f*u+_,e[10]=d-y*u}else if(t.order==="XZY"){const d=r*l,f=r*c,_=a*l,y=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+y,e[5]=r*h,e[9]=f*u-_,e[2]=_*u-f,e[6]=a*h,e[10]=y*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Mv,t,wv)}lookAt(t,e,i){const s=this.elements;return Cn.subVectors(t,e),Cn.lengthSq()===0&&(Cn.z=1),Cn.normalize(),Qi.crossVectors(i,Cn),Qi.lengthSq()===0&&(Math.abs(i.z)===1?Cn.x+=1e-4:Cn.z+=1e-4,Cn.normalize(),Qi.crossVectors(i,Cn)),Qi.normalize(),Lr.crossVectors(Cn,Qi),s[0]=Qi.x,s[4]=Lr.x,s[8]=Cn.x,s[1]=Qi.y,s[5]=Lr.y,s[9]=Cn.y,s[2]=Qi.z,s[6]=Lr.z,s[10]=Cn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,o=this.elements,r=i[0],a=i[4],l=i[8],c=i[12],h=i[1],u=i[5],d=i[9],f=i[13],_=i[2],y=i[6],m=i[10],p=i[14],b=i[3],M=i[7],S=i[11],O=i[15],I=s[0],P=s[4],U=s[8],nt=s[12],x=s[1],E=s[5],j=s[9],k=s[13],J=s[2],at=s[6],V=s[10],Z=s[14],H=s[3],gt=s[7],yt=s[11],_t=s[15];return o[0]=r*I+a*x+l*J+c*H,o[4]=r*P+a*E+l*at+c*gt,o[8]=r*U+a*j+l*V+c*yt,o[12]=r*nt+a*k+l*Z+c*_t,o[1]=h*I+u*x+d*J+f*H,o[5]=h*P+u*E+d*at+f*gt,o[9]=h*U+u*j+d*V+f*yt,o[13]=h*nt+u*k+d*Z+f*_t,o[2]=_*I+y*x+m*J+p*H,o[6]=_*P+y*E+m*at+p*gt,o[10]=_*U+y*j+m*V+p*yt,o[14]=_*nt+y*k+m*Z+p*_t,o[3]=b*I+M*x+S*J+O*H,o[7]=b*P+M*E+S*at+O*gt,o[11]=b*U+M*j+S*V+O*yt,o[15]=b*nt+M*k+S*Z+O*_t,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],s=t[8],o=t[12],r=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],f=t[14],_=t[3],y=t[7],m=t[11],p=t[15];return _*(+o*l*u-s*c*u-o*a*d+i*c*d+s*a*f-i*l*f)+y*(+e*l*f-e*c*d+o*r*d-s*r*f+s*c*h-o*l*h)+m*(+e*c*u-e*a*f-o*r*u+i*r*f+o*a*h-i*c*h)+p*(-s*a*h-e*l*u+e*a*d+s*r*u-i*r*d+i*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],o=t[3],r=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],f=t[11],_=t[12],y=t[13],m=t[14],p=t[15],b=u*m*c-y*d*c+y*l*f-a*m*f-u*l*p+a*d*p,M=_*d*c-h*m*c-_*l*f+r*m*f+h*l*p-r*d*p,S=h*y*c-_*u*c+_*a*f-r*y*f-h*a*p+r*u*p,O=_*u*l-h*y*l-_*a*d+r*y*d+h*a*m-r*u*m,I=e*b+i*M+s*S+o*O;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/I;return t[0]=b*P,t[1]=(y*d*o-u*m*o-y*s*f+i*m*f+u*s*p-i*d*p)*P,t[2]=(a*m*o-y*l*o+y*s*c-i*m*c-a*s*p+i*l*p)*P,t[3]=(u*l*o-a*d*o-u*s*c+i*d*c+a*s*f-i*l*f)*P,t[4]=M*P,t[5]=(h*m*o-_*d*o+_*s*f-e*m*f-h*s*p+e*d*p)*P,t[6]=(_*l*o-r*m*o-_*s*c+e*m*c+r*s*p-e*l*p)*P,t[7]=(r*d*o-h*l*o+h*s*c-e*d*c-r*s*f+e*l*f)*P,t[8]=S*P,t[9]=(_*u*o-h*y*o-_*i*f+e*y*f+h*i*p-e*u*p)*P,t[10]=(r*y*o-_*a*o+_*i*c-e*y*c-r*i*p+e*a*p)*P,t[11]=(h*a*o-r*u*o-h*i*c+e*u*c+r*i*f-e*a*f)*P,t[12]=O*P,t[13]=(h*y*s-_*u*s+_*i*d-e*y*d-h*i*m+e*u*m)*P,t[14]=(_*a*s-r*y*s-_*i*l+e*y*l+r*i*m-e*a*m)*P,t[15]=(r*u*s-h*a*s+h*i*l-e*u*l-r*i*d+e*a*d)*P,this}scale(t){const e=this.elements,i=t.x,s=t.y,o=t.z;return e[0]*=i,e[4]*=s,e[8]*=o,e[1]*=i,e[5]*=s,e[9]*=o,e[2]*=i,e[6]*=s,e[10]*=o,e[3]*=i,e[7]*=s,e[11]*=o,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),s=Math.sin(e),o=1-i,r=t.x,a=t.y,l=t.z,c=o*r,h=o*a;return this.set(c*r+i,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+i,h*l-s*r,0,c*l-s*a,h*l+s*r,o*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,o,r){return this.set(1,i,o,0,t,1,r,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){const s=this.elements,o=e._x,r=e._y,a=e._z,l=e._w,c=o+o,h=r+r,u=a+a,d=o*c,f=o*h,_=o*u,y=r*h,m=r*u,p=a*u,b=l*c,M=l*h,S=l*u,O=i.x,I=i.y,P=i.z;return s[0]=(1-(y+p))*O,s[1]=(f+S)*O,s[2]=(_-M)*O,s[3]=0,s[4]=(f-S)*I,s[5]=(1-(d+p))*I,s[6]=(m+b)*I,s[7]=0,s[8]=(_+M)*P,s[9]=(m-b)*P,s[10]=(1-(d+y))*P,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){const s=this.elements;let o=Vs.set(s[0],s[1],s[2]).length();const r=Vs.set(s[4],s[5],s[6]).length(),a=Vs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(o=-o),t.x=s[12],t.y=s[13],t.z=s[14],Kn.copy(this);const c=1/o,h=1/r,u=1/a;return Kn.elements[0]*=c,Kn.elements[1]*=c,Kn.elements[2]*=c,Kn.elements[4]*=h,Kn.elements[5]*=h,Kn.elements[6]*=h,Kn.elements[8]*=u,Kn.elements[9]*=u,Kn.elements[10]*=u,e.setFromRotationMatrix(Kn),i.x=o,i.y=r,i.z=a,this}makePerspective(t,e,i,s,o,r,a=zi){const l=this.elements,c=2*o/(e-t),h=2*o/(i-s),u=(e+t)/(e-t),d=(i+s)/(i-s);let f,_;if(a===zi)f=-(r+o)/(r-o),_=-2*r*o/(r-o);else if(a===Ma)f=-r/(r-o),_=-r*o/(r-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,s,o,r,a=zi){const l=this.elements,c=1/(e-t),h=1/(i-s),u=1/(r-o),d=(e+t)*c,f=(i+s)*h;let _,y;if(a===zi)_=(r+o)*u,y=-2*u;else if(a===Ma)_=o*u,y=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=y,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const Vs=new q,Kn=new Fe,Mv=new q(0,0,0),wv=new q(1,1,1),Qi=new q,Lr=new q,Cn=new q,Uh=new Fe,Nh=new vr;class Mi{constructor(t=0,e=0,i=0,s=Mi.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const s=t.elements,o=s[0],r=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(nn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-r,o)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-nn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,o),this._z=0);break;case"ZXY":this._x=Math.asin(nn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-nn(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin(nn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,o)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-nn(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,o)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Uh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Uh,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Nh.setFromEuler(this),this.setFromQuaternion(Nh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Mi.DEFAULT_ORDER="XYZ";class ap{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Sv=0;const Fh=new q,Ws=new vr,Ii=new Fe,Dr=new q,Oo=new q,Ev=new q,bv=new vr,Oh=new q(1,0,0),Bh=new q(0,1,0),zh=new q(0,0,1),Gh={type:"added"},Tv={type:"removed"},Xs={type:"childadded",child:null},pl={type:"childremoved",child:null};class an extends bo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Sv++}),this.uuid=Ns(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=an.DEFAULT_UP.clone();const t=new q,e=new Mi,i=new vr,s=new q(1,1,1);function o(){i.setFromEuler(e,!1)}function r(){e.setFromQuaternion(i,void 0,!1)}e._onChange(o),i._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Fe},normalMatrix:{value:new le}}),this.matrix=new Fe,this.matrixWorld=new Fe,this.matrixAutoUpdate=an.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=an.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ap,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ws.setFromAxisAngle(t,e),this.quaternion.multiply(Ws),this}rotateOnWorldAxis(t,e){return Ws.setFromAxisAngle(t,e),this.quaternion.premultiply(Ws),this}rotateX(t){return this.rotateOnAxis(Oh,t)}rotateY(t){return this.rotateOnAxis(Bh,t)}rotateZ(t){return this.rotateOnAxis(zh,t)}translateOnAxis(t,e){return Fh.copy(t).applyQuaternion(this.quaternion),this.position.add(Fh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Oh,t)}translateY(t){return this.translateOnAxis(Bh,t)}translateZ(t){return this.translateOnAxis(zh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ii.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Dr.copy(t):Dr.set(t,e,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Oo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ii.lookAt(Oo,Dr,this.up):Ii.lookAt(Dr,Oo,this.up),this.quaternion.setFromRotationMatrix(Ii),s&&(Ii.extractRotation(s.matrixWorld),Ws.setFromRotationMatrix(Ii),this.quaternion.premultiply(Ws.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Gh),Xs.child=t,this.dispatchEvent(Xs),Xs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Tv),pl.child=t,this.dispatchEvent(pl),pl.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ii.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ii.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ii),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Gh),Xs.child=t,this.dispatchEvent(Xs),Xs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){const r=this.children[i].getObjectByProperty(t,e);if(r!==void 0)return r}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const s=this.children;for(let o=0,r=s.length;o<r;o++)s[o].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Oo,t,Ev),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Oo,bv,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let o=0,r=s.length;o<r;o++)s[o].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function o(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=o(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];o(t.shapes,u)}else o(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(o(t.materials,this.material[l]));s.material=a}else s.material=o(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(o(t.animations,l))}}if(e){const a=r(t.geometries),l=r(t.materials),c=r(t.textures),h=r(t.images),u=r(t.shapes),d=r(t.skeletons),f=r(t.animations),_=r(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),_.length>0&&(i.nodes=_)}return i.object=s,i;function r(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const s=t.children[i];this.add(s.clone())}return this}}an.DEFAULT_UP=new q(0,1,0);an.DEFAULT_MATRIX_AUTO_UPDATE=!0;an.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Zn=new q,Li=new q,ml=new q,Di=new q,qs=new q,Ys=new q,Hh=new q,gl=new q,_l=new q,vl=new q,xl=new Ae,yl=new Ae,Ml=new Ae;class ei{constructor(t=new q,e=new q,i=new q){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),Zn.subVectors(t,e),s.cross(Zn);const o=s.lengthSq();return o>0?s.multiplyScalar(1/Math.sqrt(o)):s.set(0,0,0)}static getBarycoord(t,e,i,s,o){Zn.subVectors(s,e),Li.subVectors(i,e),ml.subVectors(t,e);const r=Zn.dot(Zn),a=Zn.dot(Li),l=Zn.dot(ml),c=Li.dot(Li),h=Li.dot(ml),u=r*c-a*a;if(u===0)return o.set(0,0,0),null;const d=1/u,f=(c*l-a*h)*d,_=(r*h-a*l)*d;return o.set(1-f-_,_,f)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,Di)===null?!1:Di.x>=0&&Di.y>=0&&Di.x+Di.y<=1}static getInterpolation(t,e,i,s,o,r,a,l){return this.getBarycoord(t,e,i,s,Di)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(o,Di.x),l.addScaledVector(r,Di.y),l.addScaledVector(a,Di.z),l)}static getInterpolatedAttribute(t,e,i,s,o,r){return xl.setScalar(0),yl.setScalar(0),Ml.setScalar(0),xl.fromBufferAttribute(t,e),yl.fromBufferAttribute(t,i),Ml.fromBufferAttribute(t,s),r.setScalar(0),r.addScaledVector(xl,o.x),r.addScaledVector(yl,o.y),r.addScaledVector(Ml,o.z),r}static isFrontFacing(t,e,i,s){return Zn.subVectors(i,e),Li.subVectors(t,e),Zn.cross(Li).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Zn.subVectors(this.c,this.b),Li.subVectors(this.a,this.b),Zn.cross(Li).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return ei.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return ei.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,o){return ei.getInterpolation(t,this.a,this.b,this.c,e,i,s,o)}containsPoint(t){return ei.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return ei.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,s=this.b,o=this.c;let r,a;qs.subVectors(s,i),Ys.subVectors(o,i),gl.subVectors(t,i);const l=qs.dot(gl),c=Ys.dot(gl);if(l<=0&&c<=0)return e.copy(i);_l.subVectors(t,s);const h=qs.dot(_l),u=Ys.dot(_l);if(h>=0&&u<=h)return e.copy(s);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return r=l/(l-h),e.copy(i).addScaledVector(qs,r);vl.subVectors(t,o);const f=qs.dot(vl),_=Ys.dot(vl);if(_>=0&&f<=_)return e.copy(o);const y=f*c-l*_;if(y<=0&&c>=0&&_<=0)return a=c/(c-_),e.copy(i).addScaledVector(Ys,a);const m=h*_-f*u;if(m<=0&&u-h>=0&&f-_>=0)return Hh.subVectors(o,s),a=(u-h)/(u-h+(f-_)),e.copy(s).addScaledVector(Hh,a);const p=1/(m+y+d);return r=y*p,a=d*p,e.copy(i).addScaledVector(qs,r).addScaledVector(Ys,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const lp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ts={h:0,s:0,l:0},Ur={h:0,s:0,l:0};function wl(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class he{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Jn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,we.toWorkingColorSpace(this,e),this}setRGB(t,e,i,s=we.workingColorSpace){return this.r=t,this.g=e,this.b=i,we.toWorkingColorSpace(this,s),this}setHSL(t,e,i,s=we.workingColorSpace){if(t=xu(t,1),e=nn(e,0,1),i=nn(i,0,1),e===0)this.r=this.g=this.b=i;else{const o=i<=.5?i*(1+e):i+e-i*e,r=2*i-o;this.r=wl(r,o,t+1/3),this.g=wl(r,o,t),this.b=wl(r,o,t-1/3)}return we.toWorkingColorSpace(this,s),this}setStyle(t,e=Jn){function i(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let o;const r=s[1],a=s[2];switch(r){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,e);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,e);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const o=s[1],r=o.length;if(r===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,e);if(r===6)return this.setHex(parseInt(o,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Jn){const i=lp[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ho(t.r),this.g=ho(t.g),this.b=ho(t.b),this}copyLinearToSRGB(t){return this.r=rl(t.r),this.g=rl(t.g),this.b=rl(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Jn){return we.fromWorkingColorSpace(hn.copy(this),t),Math.round(nn(hn.r*255,0,255))*65536+Math.round(nn(hn.g*255,0,255))*256+Math.round(nn(hn.b*255,0,255))}getHexString(t=Jn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=we.workingColorSpace){we.fromWorkingColorSpace(hn.copy(this),e);const i=hn.r,s=hn.g,o=hn.b,r=Math.max(i,s,o),a=Math.min(i,s,o);let l,c;const h=(a+r)/2;if(a===r)l=0,c=0;else{const u=r-a;switch(c=h<=.5?u/(r+a):u/(2-r-a),r){case i:l=(s-o)/u+(s<o?6:0);break;case s:l=(o-i)/u+2;break;case o:l=(i-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=we.workingColorSpace){return we.fromWorkingColorSpace(hn.copy(this),e),t.r=hn.r,t.g=hn.g,t.b=hn.b,t}getStyle(t=Jn){we.fromWorkingColorSpace(hn.copy(this),t);const e=hn.r,i=hn.g,s=hn.b;return t!==Jn?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(ts),this.setHSL(ts.h+t,ts.s+e,ts.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(ts),t.getHSL(Ur);const i=Jo(ts.h,Ur.h,e),s=Jo(ts.s,Ur.s,e),o=Jo(ts.l,Ur.l,e);return this.setHSL(i,s,o),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,s=this.b,o=t.elements;return this.r=o[0]*e+o[3]*i+o[6]*s,this.g=o[1]*e+o[4]*i+o[7]*s,this.b=o[2]*e+o[5]*i+o[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const hn=new he;he.NAMES=lp;let Av=0;class To extends bo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Av++}),this.uuid=Ns(),this.name="",this.type="Material",this.blending=co,this.side=cs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Jl,this.blendDst=Ql,this.blendEquation=bs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new he(0,0,0),this.blendAlpha=0,this.depthFunc=vo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Th,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Bs,this.stencilZFail=Bs,this.stencilZPass=Bs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==co&&(i.blending=this.blending),this.side!==cs&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Jl&&(i.blendSrc=this.blendSrc),this.blendDst!==Ql&&(i.blendDst=this.blendDst),this.blendEquation!==bs&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==vo&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Th&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Bs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Bs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Bs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(o){const r=[];for(const a in o){const l=o[a];delete l.metadata,r.push(l)}return r}if(e){const o=s(t.textures),r=s(t.images);o.length>0&&(i.textures=o),r.length>0&&(i.images=r)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const s=e.length;i=new Array(s);for(let o=0;o!==s;++o)i[o]=e[o].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Hn extends To{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new he(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Mi,this.combine=kf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Ke=new q,Nr=new Ot;class xi{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Ah,this.updateRanges=[],this.gpuType=Bi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,o=this.itemSize;s<o;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Nr.fromBufferAttribute(this,e),Nr.applyMatrix3(t),this.setXY(e,Nr.x,Nr.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Ke.fromBufferAttribute(this,e),Ke.applyMatrix3(t),this.setXYZ(e,Ke.x,Ke.y,Ke.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Ke.fromBufferAttribute(this,e),Ke.applyMatrix4(t),this.setXYZ(e,Ke.x,Ke.y,Ke.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Ke.fromBufferAttribute(this,e),Ke.applyNormalMatrix(t),this.setXYZ(e,Ke.x,Ke.y,Ke.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Ke.fromBufferAttribute(this,e),Ke.transformDirection(t),this.setXYZ(e,Ke.x,Ke.y,Ke.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=to(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=_n(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=to(e,this.array)),e}setX(t,e){return this.normalized&&(e=_n(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=to(e,this.array)),e}setY(t,e){return this.normalized&&(e=_n(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=to(e,this.array)),e}setZ(t,e){return this.normalized&&(e=_n(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=to(e,this.array)),e}setW(t,e){return this.normalized&&(e=_n(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=_n(e,this.array),i=_n(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=_n(e,this.array),i=_n(i,this.array),s=_n(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,o){return t*=this.itemSize,this.normalized&&(e=_n(e,this.array),i=_n(i,this.array),s=_n(s,this.array),o=_n(o,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=o,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Ah&&(t.usage=this.usage),t}}class cp extends xi{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class up extends xi{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class Xe extends xi{constructor(t,e,i){super(new Float32Array(t),e,i)}}let Rv=0;const zn=new Fe,Sl=new an,$s=new q,In=new xr,Bo=new xr,en=new q;class Rn extends bo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Rv++}),this.uuid=Ns(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(ip(t)?up:cp)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const o=new le().getNormalMatrix(t);i.applyNormalMatrix(o),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return zn.makeRotationFromQuaternion(t),this.applyMatrix4(zn),this}rotateX(t){return zn.makeRotationX(t),this.applyMatrix4(zn),this}rotateY(t){return zn.makeRotationY(t),this.applyMatrix4(zn),this}rotateZ(t){return zn.makeRotationZ(t),this.applyMatrix4(zn),this}translate(t,e,i){return zn.makeTranslation(t,e,i),this.applyMatrix4(zn),this}scale(t,e,i){return zn.makeScale(t,e,i),this.applyMatrix4(zn),this}lookAt(t){return Sl.lookAt(t),Sl.updateMatrix(),this.applyMatrix4(Sl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter($s).negate(),this.translate($s.x,$s.y,$s.z),this}setFromPoints(t){const e=[];for(let i=0,s=t.length;i<s;i++){const o=t[i];e.push(o.x,o.y,o.z||0)}return this.setAttribute("position",new Xe(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new xr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new q(-1/0,-1/0,-1/0),new q(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){const o=e[i];In.setFromBufferAttribute(o),this.morphTargetsRelative?(en.addVectors(this.boundingBox.min,In.min),this.boundingBox.expandByPoint(en),en.addVectors(this.boundingBox.max,In.max),this.boundingBox.expandByPoint(en)):(this.boundingBox.expandByPoint(In.min),this.boundingBox.expandByPoint(In.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ba);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new q,1/0);return}if(t){const i=this.boundingSphere.center;if(In.setFromBufferAttribute(t),e)for(let o=0,r=e.length;o<r;o++){const a=e[o];Bo.setFromBufferAttribute(a),this.morphTargetsRelative?(en.addVectors(In.min,Bo.min),In.expandByPoint(en),en.addVectors(In.max,Bo.max),In.expandByPoint(en)):(In.expandByPoint(Bo.min),In.expandByPoint(Bo.max))}In.getCenter(i);let s=0;for(let o=0,r=t.count;o<r;o++)en.fromBufferAttribute(t,o),s=Math.max(s,i.distanceToSquared(en));if(e)for(let o=0,r=e.length;o<r;o++){const a=e[o],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)en.fromBufferAttribute(a,c),l&&($s.fromBufferAttribute(t,c),en.add($s)),s=Math.max(s,i.distanceToSquared(en))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,s=e.normal,o=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new xi(new Float32Array(4*i.count),4));const r=this.getAttribute("tangent"),a=[],l=[];for(let U=0;U<i.count;U++)a[U]=new q,l[U]=new q;const c=new q,h=new q,u=new q,d=new Ot,f=new Ot,_=new Ot,y=new q,m=new q;function p(U,nt,x){c.fromBufferAttribute(i,U),h.fromBufferAttribute(i,nt),u.fromBufferAttribute(i,x),d.fromBufferAttribute(o,U),f.fromBufferAttribute(o,nt),_.fromBufferAttribute(o,x),h.sub(c),u.sub(c),f.sub(d),_.sub(d);const E=1/(f.x*_.y-_.x*f.y);isFinite(E)&&(y.copy(h).multiplyScalar(_.y).addScaledVector(u,-f.y).multiplyScalar(E),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-_.x).multiplyScalar(E),a[U].add(y),a[nt].add(y),a[x].add(y),l[U].add(m),l[nt].add(m),l[x].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:t.count}]);for(let U=0,nt=b.length;U<nt;++U){const x=b[U],E=x.start,j=x.count;for(let k=E,J=E+j;k<J;k+=3)p(t.getX(k+0),t.getX(k+1),t.getX(k+2))}const M=new q,S=new q,O=new q,I=new q;function P(U){O.fromBufferAttribute(s,U),I.copy(O);const nt=a[U];M.copy(nt),M.sub(O.multiplyScalar(O.dot(nt))).normalize(),S.crossVectors(I,nt);const E=S.dot(l[U])<0?-1:1;r.setXYZW(U,M.x,M.y,M.z,E)}for(let U=0,nt=b.length;U<nt;++U){const x=b[U],E=x.start,j=x.count;for(let k=E,J=E+j;k<J;k+=3)P(t.getX(k+0)),P(t.getX(k+1)),P(t.getX(k+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new xi(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);const s=new q,o=new q,r=new q,a=new q,l=new q,c=new q,h=new q,u=new q;if(t)for(let d=0,f=t.count;d<f;d+=3){const _=t.getX(d+0),y=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,_),o.fromBufferAttribute(e,y),r.fromBufferAttribute(e,m),h.subVectors(r,o),u.subVectors(s,o),h.cross(u),a.fromBufferAttribute(i,_),l.fromBufferAttribute(i,y),c.fromBufferAttribute(i,m),a.add(h),l.add(h),c.add(h),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),o.fromBufferAttribute(e,d+1),r.fromBufferAttribute(e,d+2),h.subVectors(r,o),u.subVectors(s,o),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)en.fromBufferAttribute(t,e),en.normalize(),t.setXYZ(e,en.x,en.y,en.z)}toNonIndexed(){function t(a,l){const c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h);let f=0,_=0;for(let y=0,m=l.length;y<m;y++){a.isInterleavedBufferAttribute?f=l[y]*a.data.stride+a.offset:f=l[y]*h;for(let p=0;p<h;p++)d[_++]=c[f++]}return new xi(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Rn,i=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=t(l,i);e.setAttribute(a,c)}const o=this.morphAttributes;for(const a in o){const l=[],c=o[a];for(let h=0,u=c.length;h<u;h++){const d=c[h],f=t(d,i);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let a=0,l=r.length;a<l;a++){const c=r[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const l in i){const c=i[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let o=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const f=c[u];h.push(f.toJSON(t.data))}h.length>0&&(s[l]=h,o=!0)}o&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const s=t.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(e))}const o=t.morphAttributes;for(const c in o){const h=[],u=o[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const r=t.groups;for(let c=0,h=r.length;c<h;c++){const u=r[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const kh=new Fe,vs=new rp,Fr=new Ba,Vh=new q,Or=new q,Br=new q,zr=new q,El=new q,Gr=new q,Wh=new q,Hr=new q;class R extends an{constructor(t=new Rn,e=new Hn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=s.length;o<r;o++){const a=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}getVertexPosition(t,e){const i=this.geometry,s=i.attributes.position,o=i.morphAttributes.position,r=i.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(o&&a){Gr.set(0,0,0);for(let l=0,c=o.length;l<c;l++){const h=a[l],u=o[l];h!==0&&(El.fromBufferAttribute(u,t),r?Gr.addScaledVector(El,h):Gr.addScaledVector(El.sub(e),h))}e.add(Gr)}return e}raycast(t,e){const i=this.geometry,s=this.material,o=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Fr.copy(i.boundingSphere),Fr.applyMatrix4(o),vs.copy(t.ray).recast(t.near),!(Fr.containsPoint(vs.origin)===!1&&(vs.intersectSphere(Fr,Vh)===null||vs.origin.distanceToSquared(Vh)>(t.far-t.near)**2))&&(kh.copy(o).invert(),vs.copy(t.ray).applyMatrix4(kh),!(i.boundingBox!==null&&vs.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,vs)))}_computeIntersections(t,e,i){let s;const o=this.geometry,r=this.material,a=o.index,l=o.attributes.position,c=o.attributes.uv,h=o.attributes.uv1,u=o.attributes.normal,d=o.groups,f=o.drawRange;if(a!==null)if(Array.isArray(r))for(let _=0,y=d.length;_<y;_++){const m=d[_],p=r[m.materialIndex],b=Math.max(m.start,f.start),M=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let S=b,O=M;S<O;S+=3){const I=a.getX(S),P=a.getX(S+1),U=a.getX(S+2);s=kr(this,p,t,i,c,h,u,I,P,U),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const _=Math.max(0,f.start),y=Math.min(a.count,f.start+f.count);for(let m=_,p=y;m<p;m+=3){const b=a.getX(m),M=a.getX(m+1),S=a.getX(m+2);s=kr(this,r,t,i,c,h,u,b,M,S),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(r))for(let _=0,y=d.length;_<y;_++){const m=d[_],p=r[m.materialIndex],b=Math.max(m.start,f.start),M=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let S=b,O=M;S<O;S+=3){const I=S,P=S+1,U=S+2;s=kr(this,p,t,i,c,h,u,I,P,U),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const _=Math.max(0,f.start),y=Math.min(l.count,f.start+f.count);for(let m=_,p=y;m<p;m+=3){const b=m,M=m+1,S=m+2;s=kr(this,r,t,i,c,h,u,b,M,S),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function Pv(n,t,e,i,s,o,r,a){let l;if(t.side===Tn?l=i.intersectTriangle(r,o,s,!0,a):l=i.intersectTriangle(s,o,r,t.side===cs,a),l===null)return null;Hr.copy(a),Hr.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(Hr);return c<e.near||c>e.far?null:{distance:c,point:Hr.clone(),object:n}}function kr(n,t,e,i,s,o,r,a,l,c){n.getVertexPosition(a,Or),n.getVertexPosition(l,Br),n.getVertexPosition(c,zr);const h=Pv(n,t,e,i,Or,Br,zr,Wh);if(h){const u=new q;ei.getBarycoord(Wh,Or,Br,zr,u),s&&(h.uv=ei.getInterpolatedAttribute(s,a,l,c,u,new Ot)),o&&(h.uv1=ei.getInterpolatedAttribute(o,a,l,c,u,new Ot)),r&&(h.normal=ei.getInterpolatedAttribute(r,a,l,c,u,new q),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new q,materialIndex:0};ei.getNormal(Or,Br,zr,d.normal),h.face=d,h.barycoord=u}return h}class ii extends Rn{constructor(t=1,e=1,i=1,s=1,o=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:o,depthSegments:r};const a=this;s=Math.floor(s),o=Math.floor(o),r=Math.floor(r);const l=[],c=[],h=[],u=[];let d=0,f=0;_("z","y","x",-1,-1,i,e,t,r,o,0),_("z","y","x",1,-1,i,e,-t,r,o,1),_("x","z","y",1,1,t,i,e,s,r,2),_("x","z","y",1,-1,t,i,-e,s,r,3),_("x","y","z",1,-1,t,e,i,s,o,4),_("x","y","z",-1,-1,t,e,-i,s,o,5),this.setIndex(l),this.setAttribute("position",new Xe(c,3)),this.setAttribute("normal",new Xe(h,3)),this.setAttribute("uv",new Xe(u,2));function _(y,m,p,b,M,S,O,I,P,U,nt){const x=S/P,E=O/U,j=S/2,k=O/2,J=I/2,at=P+1,V=U+1;let Z=0,H=0;const gt=new q;for(let yt=0;yt<V;yt++){const _t=yt*E-k;for(let It=0;It<at;It++){const zt=It*x-j;gt[y]=zt*b,gt[m]=_t*M,gt[p]=J,c.push(gt.x,gt.y,gt.z),gt[y]=0,gt[m]=0,gt[p]=I>0?1:-1,h.push(gt.x,gt.y,gt.z),u.push(It/P),u.push(1-yt/U),Z+=1}}for(let yt=0;yt<U;yt++)for(let _t=0;_t<P;_t++){const It=d+_t+at*yt,zt=d+_t+at*(yt+1),rt=d+(_t+1)+at*(yt+1),ft=d+(_t+1)+at*yt;l.push(It,zt,ft),l.push(zt,rt,ft),H+=6}a.addGroup(f,H,nt),f+=H,d+=Z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ii(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function So(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const s=n[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function vn(n){const t={};for(let e=0;e<n.length;e++){const i=So(n[e]);for(const s in i)t[s]=i[s]}return t}function Cv(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function hp(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:we.workingColorSpace}const Iv={clone:So,merge:vn};var Lv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Dv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class An extends To{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Lv,this.fragmentShader=Dv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=So(t.uniforms),this.uniformsGroups=Cv(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const r=this.uniforms[s].value;r&&r.isTexture?e.uniforms[s]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?e.uniforms[s]={type:"c",value:r.getHex()}:r&&r.isVector2?e.uniforms[s]={type:"v2",value:r.toArray()}:r&&r.isVector3?e.uniforms[s]={type:"v3",value:r.toArray()}:r&&r.isVector4?e.uniforms[s]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?e.uniforms[s]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?e.uniforms[s]={type:"m4",value:r.toArray()}:e.uniforms[s]={value:r}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class dp extends an{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Fe,this.projectionMatrix=new Fe,this.projectionMatrixInverse=new Fe,this.coordinateSystem=zi}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const es=new q,Xh=new Ot,qh=new Ot;class ze extends dp{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=ur*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Zo*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ur*2*Math.atan(Math.tan(Zo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){es.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(es.x,es.y).multiplyScalar(-t/es.z),es.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(es.x,es.y).multiplyScalar(-t/es.z)}getViewSize(t,e){return this.getViewBounds(t,Xh,qh),e.subVectors(qh,Xh)}setViewOffset(t,e,i,s,o,r){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=o,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Zo*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,o=-.5*s;const r=this.view;if(this.view!==null&&this.view.enabled){const l=r.fullWidth,c=r.fullHeight;o+=r.offsetX*s/l,e-=r.offsetY*i/c,s*=r.width/l,i*=r.height/c}const a=this.filmOffset;a!==0&&(o+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+s,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const js=-90,Ks=1;class Uv extends an{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new ze(js,Ks,t,e);s.layers=this.layers,this.add(s);const o=new ze(js,Ks,t,e);o.layers=this.layers,this.add(o);const r=new ze(js,Ks,t,e);r.layers=this.layers,this.add(r);const a=new ze(js,Ks,t,e);a.layers=this.layers,this.add(a);const l=new ze(js,Ks,t,e);l.layers=this.layers,this.add(l);const c=new ze(js,Ks,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,s,o,r,a,l]=e;for(const c of e)this.remove(c);if(t===zi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Ma)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[o,r,a,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;const y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(e,o),t.setRenderTarget(i,1,s),t.render(e,r),t.setRenderTarget(i,2,s),t.render(e,a),t.setRenderTarget(i,3,s),t.render(e,l),t.setRenderTarget(i,4,s),t.render(e,c),i.texture.generateMipmaps=y,t.setRenderTarget(i,5,s),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class yu extends wn{constructor(t,e,i,s,o,r,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:xo,super(t,e,i,s,o,r,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Nv extends Ls{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new yu(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:ti}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ii(5,5,5),o=new An({name:"CubemapFromEquirect",uniforms:So(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Tn,blending:rs});o.uniforms.tEquirect.value=e;const r=new R(s,o),a=e.minFilter;return e.minFilter===Rs&&(e.minFilter=ti),new Uv(1,10,this).update(t,r),e.minFilter=a,r.geometry.dispose(),r.material.dispose(),this}clear(t,e,i,s){const o=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(e,i,s);t.setRenderTarget(o)}}const bl=new q,Fv=new q,Ov=new le;class Ss{constructor(t=new q(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const s=bl.subVectors(i,e).cross(Fv.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(bl),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const o=-(t.start.dot(this.normal)+this.constant)/s;return o<0||o>1?null:e.copy(t.start).addScaledVector(i,o)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||Ov.getNormalMatrix(t),s=this.coplanarPoint(bl).applyMatrix4(t),o=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(o),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const xs=new Ba,Vr=new q;class Mu{constructor(t=new Ss,e=new Ss,i=new Ss,s=new Ss,o=new Ss,r=new Ss){this.planes=[t,e,i,s,o,r]}set(t,e,i,s,o,r){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(s),a[4].copy(o),a[5].copy(r),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=zi){const i=this.planes,s=t.elements,o=s[0],r=s[1],a=s[2],l=s[3],c=s[4],h=s[5],u=s[6],d=s[7],f=s[8],_=s[9],y=s[10],m=s[11],p=s[12],b=s[13],M=s[14],S=s[15];if(i[0].setComponents(l-o,d-c,m-f,S-p).normalize(),i[1].setComponents(l+o,d+c,m+f,S+p).normalize(),i[2].setComponents(l+r,d+h,m+_,S+b).normalize(),i[3].setComponents(l-r,d-h,m-_,S-b).normalize(),i[4].setComponents(l-a,d-u,m-y,S-M).normalize(),e===zi)i[5].setComponents(l+a,d+u,m+y,S+M).normalize();else if(e===Ma)i[5].setComponents(a,u,y,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),xs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),xs.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(xs)}intersectsSprite(t){return xs.center.set(0,0,0),xs.radius=.7071067811865476,xs.applyMatrix4(t.matrixWorld),this.intersectsSphere(xs)}intersectsSphere(t){const e=this.planes,i=t.center,s=-t.radius;for(let o=0;o<6;o++)if(e[o].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const s=e[i];if(Vr.x=s.normal.x>0?t.max.x:t.min.x,Vr.y=s.normal.y>0?t.max.y:t.min.y,Vr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Vr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function fp(){let n=null,t=!1,e=null,i=null;function s(o,r){e(o,r),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(o){e=o},setContext:function(o){n=o}}}function Bv(n){const t=new WeakMap;function e(a,l){const c=a.array,h=a.usage,u=c.byteLength,d=n.createBuffer();n.bindBuffer(l,d),n.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=n.SHORT;else if(c instanceof Uint32Array)f=n.UNSIGNED_INT;else if(c instanceof Int32Array)f=n.INT;else if(c instanceof Int8Array)f=n.BYTE;else if(c instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function i(a,l,c){const h=l.array,u=l.updateRanges;if(n.bindBuffer(c,a),u.length===0)n.bufferSubData(c,0,h);else{u.sort((f,_)=>f.start-_.start);let d=0;for(let f=1;f<u.length;f++){const _=u[d],y=u[f];y.start<=_.start+_.count+1?_.count=Math.max(_.count,y.start+y.count-_.start):(++d,u[d]=y)}u.length=d+1;for(let f=0,_=u.length;f<_;f++){const y=u[f];n.bufferSubData(c,y.start*h.BYTES_PER_ELEMENT,h,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function o(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(n.deleteBuffer(l.buffer),t.delete(a))}function r(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:o,update:r}}class za extends Rn{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};const o=t/2,r=e/2,a=Math.floor(i),l=Math.floor(s),c=a+1,h=l+1,u=t/a,d=e/l,f=[],_=[],y=[],m=[];for(let p=0;p<h;p++){const b=p*d-r;for(let M=0;M<c;M++){const S=M*u-o;_.push(S,-b,0),y.push(0,0,1),m.push(M/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let b=0;b<a;b++){const M=b+c*p,S=b+c*(p+1),O=b+1+c*(p+1),I=b+1+c*p;f.push(M,S,I),f.push(S,O,I)}this.setIndex(f),this.setAttribute("position",new Xe(_,3)),this.setAttribute("normal",new Xe(y,3)),this.setAttribute("uv",new Xe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new za(t.width,t.height,t.widthSegments,t.heightSegments)}}var zv=`#ifdef USE_ALPHAHASH
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
#endif`,lx=`#define PI 3.141592653589793
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
} // validated`,cx=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Ex=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,bx=`#ifdef USE_FOG
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
#endif`,ly=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,cy=`#ifdef USE_CLEARCOAT_NORMALMAP
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
}`,Ey=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,by=`#ifdef USE_SKINNING
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
}`,lM=`#define STANDARD
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
}`,cM=`#define STANDARD
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
}`,ae={alphahash_fragment:zv,alphahash_pars_fragment:Gv,alphamap_fragment:Hv,alphamap_pars_fragment:kv,alphatest_fragment:Vv,alphatest_pars_fragment:Wv,aomap_fragment:Xv,aomap_pars_fragment:qv,batching_pars_vertex:Yv,batching_vertex:$v,begin_vertex:jv,beginnormal_vertex:Kv,bsdfs:Zv,iridescence_fragment:Jv,bumpmap_pars_fragment:Qv,clipping_planes_fragment:tx,clipping_planes_pars_fragment:ex,clipping_planes_pars_vertex:nx,clipping_planes_vertex:ix,color_fragment:sx,color_pars_fragment:ox,color_pars_vertex:rx,color_vertex:ax,common:lx,cube_uv_reflection_fragment:cx,defaultnormal_vertex:ux,displacementmap_pars_vertex:hx,displacementmap_vertex:dx,emissivemap_fragment:fx,emissivemap_pars_fragment:px,colorspace_fragment:mx,colorspace_pars_fragment:gx,envmap_fragment:_x,envmap_common_pars_fragment:vx,envmap_pars_fragment:xx,envmap_pars_vertex:yx,envmap_physical_pars_fragment:Ix,envmap_vertex:Mx,fog_vertex:wx,fog_pars_vertex:Sx,fog_fragment:Ex,fog_pars_fragment:bx,gradientmap_pars_fragment:Tx,lightmap_pars_fragment:Ax,lights_lambert_fragment:Rx,lights_lambert_pars_fragment:Px,lights_pars_begin:Cx,lights_toon_fragment:Lx,lights_toon_pars_fragment:Dx,lights_phong_fragment:Ux,lights_phong_pars_fragment:Nx,lights_physical_fragment:Fx,lights_physical_pars_fragment:Ox,lights_fragment_begin:Bx,lights_fragment_maps:zx,lights_fragment_end:Gx,logdepthbuf_fragment:Hx,logdepthbuf_pars_fragment:kx,logdepthbuf_pars_vertex:Vx,logdepthbuf_vertex:Wx,map_fragment:Xx,map_pars_fragment:qx,map_particle_fragment:Yx,map_particle_pars_fragment:$x,metalnessmap_fragment:jx,metalnessmap_pars_fragment:Kx,morphinstance_vertex:Zx,morphcolor_vertex:Jx,morphnormal_vertex:Qx,morphtarget_pars_vertex:ty,morphtarget_vertex:ey,normal_fragment_begin:ny,normal_fragment_maps:iy,normal_pars_fragment:sy,normal_pars_vertex:oy,normal_vertex:ry,normalmap_pars_fragment:ay,clearcoat_normal_fragment_begin:ly,clearcoat_normal_fragment_maps:cy,clearcoat_pars_fragment:uy,iridescence_pars_fragment:hy,opaque_fragment:dy,packing:fy,premultiplied_alpha_fragment:py,project_vertex:my,dithering_fragment:gy,dithering_pars_fragment:_y,roughnessmap_fragment:vy,roughnessmap_pars_fragment:xy,shadowmap_pars_fragment:yy,shadowmap_pars_vertex:My,shadowmap_vertex:wy,shadowmask_pars_fragment:Sy,skinbase_vertex:Ey,skinning_pars_vertex:by,skinning_vertex:Ty,skinnormal_vertex:Ay,specularmap_fragment:Ry,specularmap_pars_fragment:Py,tonemapping_fragment:Cy,tonemapping_pars_fragment:Iy,transmission_fragment:Ly,transmission_pars_fragment:Dy,uv_pars_fragment:Uy,uv_pars_vertex:Ny,uv_vertex:Fy,worldpos_vertex:Oy,background_vert:By,background_frag:zy,backgroundCube_vert:Gy,backgroundCube_frag:Hy,cube_vert:ky,cube_frag:Vy,depth_vert:Wy,depth_frag:Xy,distanceRGBA_vert:qy,distanceRGBA_frag:Yy,equirect_vert:$y,equirect_frag:jy,linedashed_vert:Ky,linedashed_frag:Zy,meshbasic_vert:Jy,meshbasic_frag:Qy,meshlambert_vert:tM,meshlambert_frag:eM,meshmatcap_vert:nM,meshmatcap_frag:iM,meshnormal_vert:sM,meshnormal_frag:oM,meshphong_vert:rM,meshphong_frag:aM,meshphysical_vert:lM,meshphysical_frag:cM,meshtoon_vert:uM,meshtoon_frag:hM,points_vert:dM,points_frag:fM,shadow_vert:pM,shadow_frag:mM,sprite_vert:gM,sprite_frag:_M},Ft={common:{diffuse:{value:new he(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new le},alphaMap:{value:null},alphaMapTransform:{value:new le},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new le}},envmap:{envMap:{value:null},envMapRotation:{value:new le},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new le}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new le}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new le},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new le},normalScale:{value:new Ot(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new le},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new le}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new le}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new le}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new he(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new he(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new le},alphaTest:{value:0},uvTransform:{value:new le}},sprite:{diffuse:{value:new he(16777215)},opacity:{value:1},center:{value:new Ot(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new le},alphaMap:{value:null},alphaMapTransform:{value:new le},alphaTest:{value:0}}},_i={basic:{uniforms:vn([Ft.common,Ft.specularmap,Ft.envmap,Ft.aomap,Ft.lightmap,Ft.fog]),vertexShader:ae.meshbasic_vert,fragmentShader:ae.meshbasic_frag},lambert:{uniforms:vn([Ft.common,Ft.specularmap,Ft.envmap,Ft.aomap,Ft.lightmap,Ft.emissivemap,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.fog,Ft.lights,{emissive:{value:new he(0)}}]),vertexShader:ae.meshlambert_vert,fragmentShader:ae.meshlambert_frag},phong:{uniforms:vn([Ft.common,Ft.specularmap,Ft.envmap,Ft.aomap,Ft.lightmap,Ft.emissivemap,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.fog,Ft.lights,{emissive:{value:new he(0)},specular:{value:new he(1118481)},shininess:{value:30}}]),vertexShader:ae.meshphong_vert,fragmentShader:ae.meshphong_frag},standard:{uniforms:vn([Ft.common,Ft.envmap,Ft.aomap,Ft.lightmap,Ft.emissivemap,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.roughnessmap,Ft.metalnessmap,Ft.fog,Ft.lights,{emissive:{value:new he(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ae.meshphysical_vert,fragmentShader:ae.meshphysical_frag},toon:{uniforms:vn([Ft.common,Ft.aomap,Ft.lightmap,Ft.emissivemap,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.gradientmap,Ft.fog,Ft.lights,{emissive:{value:new he(0)}}]),vertexShader:ae.meshtoon_vert,fragmentShader:ae.meshtoon_frag},matcap:{uniforms:vn([Ft.common,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.fog,{matcap:{value:null}}]),vertexShader:ae.meshmatcap_vert,fragmentShader:ae.meshmatcap_frag},points:{uniforms:vn([Ft.points,Ft.fog]),vertexShader:ae.points_vert,fragmentShader:ae.points_frag},dashed:{uniforms:vn([Ft.common,Ft.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ae.linedashed_vert,fragmentShader:ae.linedashed_frag},depth:{uniforms:vn([Ft.common,Ft.displacementmap]),vertexShader:ae.depth_vert,fragmentShader:ae.depth_frag},normal:{uniforms:vn([Ft.common,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,{opacity:{value:1}}]),vertexShader:ae.meshnormal_vert,fragmentShader:ae.meshnormal_frag},sprite:{uniforms:vn([Ft.sprite,Ft.fog]),vertexShader:ae.sprite_vert,fragmentShader:ae.sprite_frag},background:{uniforms:{uvTransform:{value:new le},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ae.background_vert,fragmentShader:ae.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new le}},vertexShader:ae.backgroundCube_vert,fragmentShader:ae.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ae.cube_vert,fragmentShader:ae.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ae.equirect_vert,fragmentShader:ae.equirect_frag},distanceRGBA:{uniforms:vn([Ft.common,Ft.displacementmap,{referencePosition:{value:new q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ae.distanceRGBA_vert,fragmentShader:ae.distanceRGBA_frag},shadow:{uniforms:vn([Ft.lights,Ft.fog,{color:{value:new he(0)},opacity:{value:1}}]),vertexShader:ae.shadow_vert,fragmentShader:ae.shadow_frag}};_i.physical={uniforms:vn([_i.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new le},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new le},clearcoatNormalScale:{value:new Ot(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new le},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new le},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new le},sheen:{value:0},sheenColor:{value:new he(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new le},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new le},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new le},transmissionSamplerSize:{value:new Ot},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new le},attenuationDistance:{value:0},attenuationColor:{value:new he(0)},specularColor:{value:new he(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new le},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new le},anisotropyVector:{value:new Ot},anisotropyMap:{value:null},anisotropyMapTransform:{value:new le}}]),vertexShader:ae.meshphysical_vert,fragmentShader:ae.meshphysical_frag};const Wr={r:0,b:0,g:0},ys=new Mi,vM=new Fe;function xM(n,t,e,i,s,o,r){const a=new he(0);let l=o===!0?0:1,c,h,u=null,d=0,f=null;function _(b){let M=b.isScene===!0?b.background:null;return M&&M.isTexture&&(M=(b.backgroundBlurriness>0?e:t).get(M)),M}function y(b){let M=!1;const S=_(b);S===null?p(a,l):S&&S.isColor&&(p(S,1),M=!0);const O=n.xr.getEnvironmentBlendMode();O==="additive"?i.buffers.color.setClear(0,0,0,1,r):O==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,r),(n.autoClear||M)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(b,M){const S=_(M);S&&(S.isCubeTexture||S.mapping===Fa)?(h===void 0&&(h=new R(new ii(1,1,1),new An({name:"BackgroundCubeMaterial",uniforms:So(_i.backgroundCube.uniforms),vertexShader:_i.backgroundCube.vertexShader,fragmentShader:_i.backgroundCube.fragmentShader,side:Tn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(O,I,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),ys.copy(M.backgroundRotation),ys.x*=-1,ys.y*=-1,ys.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(ys.y*=-1,ys.z*=-1),h.material.uniforms.envMap.value=S,h.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(vM.makeRotationFromEuler(ys)),h.material.toneMapped=we.getTransfer(S.colorSpace)!==Ne,(u!==S||d!==S.version||f!==n.toneMapping)&&(h.material.needsUpdate=!0,u=S,d=S.version,f=n.toneMapping),h.layers.enableAll(),b.unshift(h,h.geometry,h.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new R(new za(2,2),new An({name:"BackgroundMaterial",uniforms:So(_i.background.uniforms),vertexShader:_i.background.vertexShader,fragmentShader:_i.background.fragmentShader,side:cs,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=we.getTransfer(S.colorSpace)!==Ne,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(u!==S||d!==S.version||f!==n.toneMapping)&&(c.material.needsUpdate=!0,u=S,d=S.version,f=n.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function p(b,M){b.getRGB(Wr,hp(n)),i.buffers.color.setClear(Wr.r,Wr.g,Wr.b,M,r)}return{getClearColor:function(){return a},setClearColor:function(b,M=1){a.set(b),l=M,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(b){l=b,p(a,l)},render:y,addToRenderList:m}}function yM(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=d(null);let o=s,r=!1;function a(x,E,j,k,J){let at=!1;const V=u(k,j,E);o!==V&&(o=V,c(o.object)),at=f(x,k,j,J),at&&_(x,k,j,J),J!==null&&t.update(J,n.ELEMENT_ARRAY_BUFFER),(at||r)&&(r=!1,S(x,E,j,k),J!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(J).buffer))}function l(){return n.createVertexArray()}function c(x){return n.bindVertexArray(x)}function h(x){return n.deleteVertexArray(x)}function u(x,E,j){const k=j.wireframe===!0;let J=i[x.id];J===void 0&&(J={},i[x.id]=J);let at=J[E.id];at===void 0&&(at={},J[E.id]=at);let V=at[k];return V===void 0&&(V=d(l()),at[k]=V),V}function d(x){const E=[],j=[],k=[];for(let J=0;J<e;J++)E[J]=0,j[J]=0,k[J]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:E,enabledAttributes:j,attributeDivisors:k,object:x,attributes:{},index:null}}function f(x,E,j,k){const J=o.attributes,at=E.attributes;let V=0;const Z=j.getAttributes();for(const H in Z)if(Z[H].location>=0){const yt=J[H];let _t=at[H];if(_t===void 0&&(H==="instanceMatrix"&&x.instanceMatrix&&(_t=x.instanceMatrix),H==="instanceColor"&&x.instanceColor&&(_t=x.instanceColor)),yt===void 0||yt.attribute!==_t||_t&&yt.data!==_t.data)return!0;V++}return o.attributesNum!==V||o.index!==k}function _(x,E,j,k){const J={},at=E.attributes;let V=0;const Z=j.getAttributes();for(const H in Z)if(Z[H].location>=0){let yt=at[H];yt===void 0&&(H==="instanceMatrix"&&x.instanceMatrix&&(yt=x.instanceMatrix),H==="instanceColor"&&x.instanceColor&&(yt=x.instanceColor));const _t={};_t.attribute=yt,yt&&yt.data&&(_t.data=yt.data),J[H]=_t,V++}o.attributes=J,o.attributesNum=V,o.index=k}function y(){const x=o.newAttributes;for(let E=0,j=x.length;E<j;E++)x[E]=0}function m(x){p(x,0)}function p(x,E){const j=o.newAttributes,k=o.enabledAttributes,J=o.attributeDivisors;j[x]=1,k[x]===0&&(n.enableVertexAttribArray(x),k[x]=1),J[x]!==E&&(n.vertexAttribDivisor(x,E),J[x]=E)}function b(){const x=o.newAttributes,E=o.enabledAttributes;for(let j=0,k=E.length;j<k;j++)E[j]!==x[j]&&(n.disableVertexAttribArray(j),E[j]=0)}function M(x,E,j,k,J,at,V){V===!0?n.vertexAttribIPointer(x,E,j,J,at):n.vertexAttribPointer(x,E,j,k,J,at)}function S(x,E,j,k){y();const J=k.attributes,at=j.getAttributes(),V=E.defaultAttributeValues;for(const Z in at){const H=at[Z];if(H.location>=0){let gt=J[Z];if(gt===void 0&&(Z==="instanceMatrix"&&x.instanceMatrix&&(gt=x.instanceMatrix),Z==="instanceColor"&&x.instanceColor&&(gt=x.instanceColor)),gt!==void 0){const yt=gt.normalized,_t=gt.itemSize,It=t.get(gt);if(It===void 0)continue;const zt=It.buffer,rt=It.type,ft=It.bytesPerElement,vt=rt===n.INT||rt===n.UNSIGNED_INT||gt.gpuType===du;if(gt.isInterleavedBufferAttribute){const F=gt.data,lt=F.stride,ot=gt.offset;if(F.isInstancedInterleavedBuffer){for(let ht=0;ht<H.locationSize;ht++)p(H.location+ht,F.meshPerAttribute);x.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=F.meshPerAttribute*F.count)}else for(let ht=0;ht<H.locationSize;ht++)m(H.location+ht);n.bindBuffer(n.ARRAY_BUFFER,zt);for(let ht=0;ht<H.locationSize;ht++)M(H.location+ht,_t/H.locationSize,rt,yt,lt*ft,(ot+_t/H.locationSize*ht)*ft,vt)}else{if(gt.isInstancedBufferAttribute){for(let F=0;F<H.locationSize;F++)p(H.location+F,gt.meshPerAttribute);x.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=gt.meshPerAttribute*gt.count)}else for(let F=0;F<H.locationSize;F++)m(H.location+F);n.bindBuffer(n.ARRAY_BUFFER,zt);for(let F=0;F<H.locationSize;F++)M(H.location+F,_t/H.locationSize,rt,yt,_t*ft,_t/H.locationSize*F*ft,vt)}}else if(V!==void 0){const yt=V[Z];if(yt!==void 0)switch(yt.length){case 2:n.vertexAttrib2fv(H.location,yt);break;case 3:n.vertexAttrib3fv(H.location,yt);break;case 4:n.vertexAttrib4fv(H.location,yt);break;default:n.vertexAttrib1fv(H.location,yt)}}}}b()}function O(){U();for(const x in i){const E=i[x];for(const j in E){const k=E[j];for(const J in k)h(k[J].object),delete k[J];delete E[j]}delete i[x]}}function I(x){if(i[x.id]===void 0)return;const E=i[x.id];for(const j in E){const k=E[j];for(const J in k)h(k[J].object),delete k[J];delete E[j]}delete i[x.id]}function P(x){for(const E in i){const j=i[E];if(j[x.id]===void 0)continue;const k=j[x.id];for(const J in k)h(k[J].object),delete k[J];delete j[x.id]}}function U(){nt(),r=!0,o!==s&&(o=s,c(o.object))}function nt(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:U,resetDefaultState:nt,dispose:O,releaseStatesOfGeometry:I,releaseStatesOfProgram:P,initAttributes:y,enableAttribute:m,disableUnusedAttributes:b}}function MM(n,t,e){let i;function s(c){i=c}function o(c,h){n.drawArrays(i,c,h),e.update(h,i,1)}function r(c,h,u){u!==0&&(n.drawArraysInstanced(i,c,h,u),e.update(h,i,u))}function a(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,u);let f=0;for(let _=0;_<u;_++)f+=h[_];e.update(f,i,1)}function l(c,h,u,d){if(u===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let _=0;_<c.length;_++)r(c[_],h[_],d[_]);else{f.multiDrawArraysInstancedWEBGL(i,c,0,h,0,d,0,u);let _=0;for(let y=0;y<u;y++)_+=h[y];for(let y=0;y<d.length;y++)e.update(_,i,d[y])}}this.setMode=s,this.render=o,this.renderInstances=r,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function wM(n,t,e,i){let s;function o(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const P=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function r(P){return!(P!==ni&&i.convert(P)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(P){const U=P===_r&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(P!==ki&&i.convert(P)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==Bi&&!U)}function l(P){if(P==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control");if(d===!0){const P=t.get("EXT_clip_control");P.clipControlEXT(P.LOWER_LEFT_EXT,P.ZERO_TO_ONE_EXT)}const f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),b=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),M=n.getParameter(n.MAX_VARYING_VECTORS),S=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),O=_>0,I=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:l,textureFormatReadable:r,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:_,maxTextureSize:y,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:b,maxVaryings:M,maxFragmentUniforms:S,vertexTextures:O,maxSamples:I}}function SM(n){const t=this;let e=null,i=0,s=!1,o=!1;const r=new Ss,a=new le,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||i!==0||s;return s=d,i=u.length,f},this.beginShadows=function(){o=!0,h(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){const _=u.clippingPlanes,y=u.clipIntersection,m=u.clipShadows,p=n.get(u);if(!s||_===null||_.length===0||o&&!m)o?h(null):c();else{const b=o?0:i,M=b*4;let S=p.clippingState||null;l.value=S,S=h(_,d,M,f);for(let O=0;O!==M;++O)S[O]=e[O];p.clippingState=S,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(u,d,f,_){const y=u!==null?u.length:0;let m=null;if(y!==0){if(m=l.value,_!==!0||m===null){const p=f+y*4,b=d.matrixWorldInverse;a.getNormalMatrix(b),(m===null||m.length<p)&&(m=new Float32Array(p));for(let M=0,S=f;M!==y;++M,S+=4)r.copy(u[M]).applyMatrix4(b,a),r.normal.toArray(m,S),m[S+3]=r.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=y,t.numIntersection=0,m}}function EM(n){let t=new WeakMap;function e(r,a){return a===_a?r.mapping=xo:a===ac&&(r.mapping=yo),r}function i(r){if(r&&r.isTexture){const a=r.mapping;if(a===_a||a===ac)if(t.has(r)){const l=t.get(r).texture;return e(l,r.mapping)}else{const l=r.image;if(l&&l.height>0){const c=new Nv(l.height);return c.fromEquirectangularTexture(n,r),t.set(r,c),r.addEventListener("dispose",s),e(c.texture,r.mapping)}else return null}}return r}function s(r){const a=r.target;a.removeEventListener("dispose",s);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function o(){t=new WeakMap}return{get:i,dispose:o}}class pp extends dp{constructor(t=-1,e=1,i=1,s=-1,o=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=o,this.far=r,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,o,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=o,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let o=i-t,r=i+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=c*this.view.offsetX,r=o+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(o,r,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const no=4,Yh=[.125,.215,.35,.446,.526,.582],Ts=20,Tl=new pp,$h=new he;let Al=null,Rl=0,Pl=0,Cl=!1;const Es=(1+Math.sqrt(5))/2,Zs=1/Es,jh=[new q(-Es,Zs,0),new q(Es,Zs,0),new q(-Zs,0,Es),new q(Zs,0,Es),new q(0,Es,-Zs),new q(0,Es,Zs),new q(-1,1,-1),new q(1,1,-1),new q(-1,1,1),new q(1,1,1)];class Kh{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,s=100){Al=this._renderer.getRenderTarget(),Rl=this._renderer.getActiveCubeFace(),Pl=this._renderer.getActiveMipmapLevel(),Cl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(t,i,s,o),e>0&&this._blur(o,0,0,e),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Qh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Jh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Al,Rl,Pl),this._renderer.xr.enabled=Cl,t.scissorTest=!1,Xr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===xo||t.mapping===yo?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Al=this._renderer.getRenderTarget(),Rl=this._renderer.getActiveCubeFace(),Pl=this._renderer.getActiveMipmapLevel(),Cl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:ti,minFilter:ti,generateMipmaps:!1,type:_r,format:ni,colorSpace:ds,depthBuffer:!1},s=Zh(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Zh(t,e,i);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=bM(o)),this._blurMaterial=TM(o,t,e)}return s}_compileMaterial(t){const e=new R(this._lodPlanes[0],t);this._renderer.compile(e,Tl)}_sceneToCubeUV(t,e,i,s){const a=new ze(90,1,e,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor($h),h.toneMapping=as,h.autoClear=!1;const f=new Hn({name:"PMREM.Background",side:Tn,depthWrite:!1,depthTest:!1}),_=new R(new ii,f);let y=!1;const m=t.background;m?m.isColor&&(f.color.copy(m),t.background=null,y=!0):(f.color.copy($h),y=!0);for(let p=0;p<6;p++){const b=p%3;b===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):b===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));const M=this._cubeSize;Xr(s,b*M,p>2?M:0,M,M),h.setRenderTarget(s),y&&h.render(_,a),h.render(t,a)}_.geometry.dispose(),_.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){const i=this._renderer,s=t.mapping===xo||t.mapping===yo;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Qh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Jh());const o=s?this._cubemapMaterial:this._equirectMaterial,r=new R(this._lodPlanes[0],o),a=o.uniforms;a.envMap.value=t;const l=this._cubeSize;Xr(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(r,Tl)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let o=1;o<s;o++){const r=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),a=jh[(s-o-1)%jh.length];this._blur(t,o-1,o,r,a)}e.autoClear=i}_blur(t,e,i,s,o){const r=this._pingPongRenderTarget;this._halfBlur(t,r,e,i,s,"latitudinal",o),this._halfBlur(r,t,i,i,s,"longitudinal",o)}_halfBlur(t,e,i,s,o,r,a){const l=this._renderer,c=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new R(this._lodPlanes[s],c),d=c.uniforms,f=this._sizeLods[i]-1,_=isFinite(o)?Math.PI/(2*f):2*Math.PI/(2*Ts-1),y=o/_,m=isFinite(o)?1+Math.floor(h*y):Ts;m>Ts&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ts}`);const p=[];let b=0;for(let P=0;P<Ts;++P){const U=P/y,nt=Math.exp(-U*U/2);p.push(nt),P===0?b+=nt:P<m&&(b+=2*nt)}for(let P=0;P<p.length;P++)p[P]=p[P]/b;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=r==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:M}=this;d.dTheta.value=_,d.mipInt.value=M-i;const S=this._sizeLods[s],O=3*S*(s>M-no?s-M+no:0),I=4*(this._cubeSize-S);Xr(e,O,I,3*S,2*S),l.setRenderTarget(e),l.render(u,Tl)}}function bM(n){const t=[],e=[],i=[];let s=n;const o=n-no+1+Yh.length;for(let r=0;r<o;r++){const a=Math.pow(2,s);e.push(a);let l=1/a;r>n-no?l=Yh[r-n+no-1]:r===0&&(l=0),i.push(l);const c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,_=6,y=3,m=2,p=1,b=new Float32Array(y*_*f),M=new Float32Array(m*_*f),S=new Float32Array(p*_*f);for(let I=0;I<f;I++){const P=I%3*2/3-1,U=I>2?0:-1,nt=[P,U,0,P+2/3,U,0,P+2/3,U+1,0,P,U,0,P+2/3,U+1,0,P,U+1,0];b.set(nt,y*_*I),M.set(d,m*_*I);const x=[I,I,I,I,I,I];S.set(x,p*_*I)}const O=new Rn;O.setAttribute("position",new xi(b,y)),O.setAttribute("uv",new xi(M,m)),O.setAttribute("faceIndex",new xi(S,p)),t.push(O),s>no&&s--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function Zh(n,t,e){const i=new Ls(n,t,e);return i.texture.mapping=Fa,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Xr(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function TM(n,t,e){const i=new Float32Array(Ts),s=new q(0,1,0);return new An({name:"SphericalGaussianBlur",defines:{n:Ts,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:wu(),fragmentShader:`

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
		`,blending:rs,depthTest:!1,depthWrite:!1})}function Jh(){return new An({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:wu(),fragmentShader:`

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
		`,blending:rs,depthTest:!1,depthWrite:!1})}function Qh(){return new An({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:wu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:rs,depthTest:!1,depthWrite:!1})}function wu(){return`

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
	`}function AM(n){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===_a||l===ac,h=l===xo||l===yo;if(c||h){let u=t.get(a);const d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new Kh(n)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{const f=a.image;return c&&f&&f.height>0||h&&f&&s(f)?(e===null&&(e=new Kh(n)),u=c?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",o),u.texture):null}}}return a}function s(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function o(a){const l=a.target;l.removeEventListener("dispose",o);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function r(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:r}}function RM(n){const t={};function e(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const s=e(i);return s===null&&ca("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function PM(n,t,e,i){const s={},o=new WeakMap;function r(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const _ in d.attributes)t.remove(d.attributes[_]);for(const _ in d.morphAttributes){const y=d.morphAttributes[_];for(let m=0,p=y.length;m<p;m++)t.remove(y[m])}d.removeEventListener("dispose",r),delete s[d.id];const f=o.get(d);f&&(t.remove(f),o.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",r),s[d.id]=!0,e.memory.geometries++),d}function l(u){const d=u.attributes;for(const _ in d)t.update(d[_],n.ARRAY_BUFFER);const f=u.morphAttributes;for(const _ in f){const y=f[_];for(let m=0,p=y.length;m<p;m++)t.update(y[m],n.ARRAY_BUFFER)}}function c(u){const d=[],f=u.index,_=u.attributes.position;let y=0;if(f!==null){const b=f.array;y=f.version;for(let M=0,S=b.length;M<S;M+=3){const O=b[M+0],I=b[M+1],P=b[M+2];d.push(O,I,I,P,P,O)}}else if(_!==void 0){const b=_.array;y=_.version;for(let M=0,S=b.length/3-1;M<S;M+=3){const O=M+0,I=M+1,P=M+2;d.push(O,I,I,P,P,O)}}else return;const m=new(ip(d)?up:cp)(d,1);m.version=y;const p=o.get(u);p&&t.remove(p),o.set(u,m)}function h(u){const d=o.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return o.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function CM(n,t,e){let i;function s(d){i=d}let o,r;function a(d){o=d.type,r=d.bytesPerElement}function l(d,f){n.drawElements(i,f,o,d*r),e.update(f,i,1)}function c(d,f,_){_!==0&&(n.drawElementsInstanced(i,f,o,d*r,_),e.update(f,i,_))}function h(d,f,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,o,d,0,_);let m=0;for(let p=0;p<_;p++)m+=f[p];e.update(m,i,1)}function u(d,f,_,y){if(_===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)c(d[p]/r,f[p],y[p]);else{m.multiDrawElementsInstancedWEBGL(i,f,0,o,d,0,y,0,_);let p=0;for(let b=0;b<_;b++)p+=f[b];for(let b=0;b<y.length;b++)e.update(p,i,y[b])}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function IM(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(o,r,a){switch(e.calls++,r){case n.TRIANGLES:e.triangles+=a*(o/3);break;case n.LINES:e.lines+=a*(o/2);break;case n.LINE_STRIP:e.lines+=a*(o-1);break;case n.LINE_LOOP:e.lines+=a*o;break;case n.POINTS:e.points+=a*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function LM(n,t,e){const i=new WeakMap,s=new Ae;function o(r,a,l){const c=r.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let d=i.get(a);if(d===void 0||d.count!==u){let x=function(){U.dispose(),i.delete(a),a.removeEventListener("dispose",x)};var f=x;d!==void 0&&d.texture.dispose();const _=a.morphAttributes.position!==void 0,y=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],b=a.morphAttributes.normal||[],M=a.morphAttributes.color||[];let S=0;_===!0&&(S=1),y===!0&&(S=2),m===!0&&(S=3);let O=a.attributes.position.count*S,I=1;O>t.maxTextureSize&&(I=Math.ceil(O/t.maxTextureSize),O=t.maxTextureSize);const P=new Float32Array(O*I*4*u),U=new op(P,O,I,u);U.type=Bi,U.needsUpdate=!0;const nt=S*4;for(let E=0;E<u;E++){const j=p[E],k=b[E],J=M[E],at=O*I*4*E;for(let V=0;V<j.count;V++){const Z=V*nt;_===!0&&(s.fromBufferAttribute(j,V),P[at+Z+0]=s.x,P[at+Z+1]=s.y,P[at+Z+2]=s.z,P[at+Z+3]=0),y===!0&&(s.fromBufferAttribute(k,V),P[at+Z+4]=s.x,P[at+Z+5]=s.y,P[at+Z+6]=s.z,P[at+Z+7]=0),m===!0&&(s.fromBufferAttribute(J,V),P[at+Z+8]=s.x,P[at+Z+9]=s.y,P[at+Z+10]=s.z,P[at+Z+11]=J.itemSize===4?s.w:1)}}d={count:u,texture:U,size:new Ot(O,I)},i.set(a,d),a.addEventListener("dispose",x)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",r.morphTexture,e);else{let _=0;for(let m=0;m<c.length;m++)_+=c[m];const y=a.morphTargetsRelative?1:1-_;l.getUniforms().setValue(n,"morphTargetBaseInfluence",y),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:o}}function DM(n,t,e,i){let s=new WeakMap;function o(l){const c=i.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return u}function r(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:o,dispose:r}}class mp extends wn{constructor(t,e,i,s,o,r,a,l,c,h=uo){if(h!==uo&&h!==wo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===uo&&(i=Is),i===void 0&&h===wo&&(i=Mo),super(null,s,o,r,a,l,h,i,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Gn,this.minFilter=l!==void 0?l:Gn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const gp=new wn,td=new mp(1,1),_p=new op,vp=new xv,xp=new yu,ed=[],nd=[],id=new Float32Array(16),sd=new Float32Array(9),od=new Float32Array(4);function Ao(n,t,e){const i=n[0];if(i<=0||i>0)return n;const s=t*e;let o=ed[s];if(o===void 0&&(o=new Float32Array(s),ed[s]=o),t!==0){i.toArray(o,0);for(let r=1,a=0;r!==t;++r)a+=e,n[r].toArray(o,a)}return o}function Qe(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function tn(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Ga(n,t){let e=nd[t];e===void 0&&(e=new Int32Array(t),nd[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function UM(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function NM(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Qe(e,t))return;n.uniform2fv(this.addr,t),tn(e,t)}}function FM(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Qe(e,t))return;n.uniform3fv(this.addr,t),tn(e,t)}}function OM(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Qe(e,t))return;n.uniform4fv(this.addr,t),tn(e,t)}}function BM(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Qe(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),tn(e,t)}else{if(Qe(e,i))return;od.set(i),n.uniformMatrix2fv(this.addr,!1,od),tn(e,i)}}function zM(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Qe(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),tn(e,t)}else{if(Qe(e,i))return;sd.set(i),n.uniformMatrix3fv(this.addr,!1,sd),tn(e,i)}}function GM(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Qe(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),tn(e,t)}else{if(Qe(e,i))return;id.set(i),n.uniformMatrix4fv(this.addr,!1,id),tn(e,i)}}function HM(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function kM(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Qe(e,t))return;n.uniform2iv(this.addr,t),tn(e,t)}}function VM(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Qe(e,t))return;n.uniform3iv(this.addr,t),tn(e,t)}}function WM(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Qe(e,t))return;n.uniform4iv(this.addr,t),tn(e,t)}}function XM(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function qM(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Qe(e,t))return;n.uniform2uiv(this.addr,t),tn(e,t)}}function YM(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Qe(e,t))return;n.uniform3uiv(this.addr,t),tn(e,t)}}function $M(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Qe(e,t))return;n.uniform4uiv(this.addr,t),tn(e,t)}}function jM(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let o;this.type===n.SAMPLER_2D_SHADOW?(td.compareFunction=np,o=td):o=gp,e.setTexture2D(t||o,s)}function KM(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||vp,s)}function ZM(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||xp,s)}function JM(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||_p,s)}function QM(n){switch(n){case 5126:return UM;case 35664:return NM;case 35665:return FM;case 35666:return OM;case 35674:return BM;case 35675:return zM;case 35676:return GM;case 5124:case 35670:return HM;case 35667:case 35671:return kM;case 35668:case 35672:return VM;case 35669:case 35673:return WM;case 5125:return XM;case 36294:return qM;case 36295:return YM;case 36296:return $M;case 35678:case 36198:case 36298:case 36306:case 35682:return jM;case 35679:case 36299:case 36307:return KM;case 35680:case 36300:case 36308:case 36293:return ZM;case 36289:case 36303:case 36311:case 36292:return JM}}function tw(n,t){n.uniform1fv(this.addr,t)}function ew(n,t){const e=Ao(t,this.size,2);n.uniform2fv(this.addr,e)}function nw(n,t){const e=Ao(t,this.size,3);n.uniform3fv(this.addr,e)}function iw(n,t){const e=Ao(t,this.size,4);n.uniform4fv(this.addr,e)}function sw(n,t){const e=Ao(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function ow(n,t){const e=Ao(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function rw(n,t){const e=Ao(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function aw(n,t){n.uniform1iv(this.addr,t)}function lw(n,t){n.uniform2iv(this.addr,t)}function cw(n,t){n.uniform3iv(this.addr,t)}function uw(n,t){n.uniform4iv(this.addr,t)}function hw(n,t){n.uniform1uiv(this.addr,t)}function dw(n,t){n.uniform2uiv(this.addr,t)}function fw(n,t){n.uniform3uiv(this.addr,t)}function pw(n,t){n.uniform4uiv(this.addr,t)}function mw(n,t,e){const i=this.cache,s=t.length,o=Ga(e,s);Qe(i,o)||(n.uniform1iv(this.addr,o),tn(i,o));for(let r=0;r!==s;++r)e.setTexture2D(t[r]||gp,o[r])}function gw(n,t,e){const i=this.cache,s=t.length,o=Ga(e,s);Qe(i,o)||(n.uniform1iv(this.addr,o),tn(i,o));for(let r=0;r!==s;++r)e.setTexture3D(t[r]||vp,o[r])}function _w(n,t,e){const i=this.cache,s=t.length,o=Ga(e,s);Qe(i,o)||(n.uniform1iv(this.addr,o),tn(i,o));for(let r=0;r!==s;++r)e.setTextureCube(t[r]||xp,o[r])}function vw(n,t,e){const i=this.cache,s=t.length,o=Ga(e,s);Qe(i,o)||(n.uniform1iv(this.addr,o),tn(i,o));for(let r=0;r!==s;++r)e.setTexture2DArray(t[r]||_p,o[r])}function xw(n){switch(n){case 5126:return tw;case 35664:return ew;case 35665:return nw;case 35666:return iw;case 35674:return sw;case 35675:return ow;case 35676:return rw;case 5124:case 35670:return aw;case 35667:case 35671:return lw;case 35668:case 35672:return cw;case 35669:case 35673:return uw;case 5125:return hw;case 36294:return dw;case 36295:return fw;case 36296:return pw;case 35678:case 36198:case 36298:case 36306:case 35682:return mw;case 35679:case 36299:case 36307:return gw;case 35680:case 36300:case 36308:case 36293:return _w;case 36289:case 36303:case 36311:case 36292:return vw}}class yw{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=QM(e.type)}}class Mw{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=xw(e.type)}}class ww{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const s=this.seq;for(let o=0,r=s.length;o!==r;++o){const a=s[o];a.setValue(t,e[a.id],i)}}}const Il=/(\w+)(\])?(\[|\.)?/g;function rd(n,t){n.seq.push(t),n.map[t.id]=t}function Sw(n,t,e){const i=n.name,s=i.length;for(Il.lastIndex=0;;){const o=Il.exec(i),r=Il.lastIndex;let a=o[1];const l=o[2]==="]",c=o[3];if(l&&(a=a|0),c===void 0||c==="["&&r+2===s){rd(e,c===void 0?new yw(a,n,t):new Mw(a,n,t));break}else{let u=e.map[a];u===void 0&&(u=new ww(a),rd(e,u)),e=u}}}class ua{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const o=t.getActiveUniform(e,s),r=t.getUniformLocation(e,o.name);Sw(o,r,this)}}setValue(t,e,i,s){const o=this.map[e];o!==void 0&&o.setValue(t,i,s)}setOptional(t,e,i){const s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let o=0,r=e.length;o!==r;++o){const a=e[o],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){const i=[];for(let s=0,o=t.length;s!==o;++s){const r=t[s];r.id in e&&i.push(r)}return i}}function ad(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const Ew=37297;let bw=0;function Tw(n,t){const e=n.split(`
`),i=[],s=Math.max(t-6,0),o=Math.min(t+6,e.length);for(let r=s;r<o;r++){const a=r+1;i.push(`${a===t?">":" "} ${a}: ${e[r]}`)}return i.join(`
`)}function Aw(n){const t=we.getPrimaries(we.workingColorSpace),e=we.getPrimaries(n);let i;switch(t===e?i="":t===ya&&e===xa?i="LinearDisplayP3ToLinearSRGB":t===xa&&e===ya&&(i="LinearSRGBToLinearDisplayP3"),n){case ds:case Oa:return[i,"LinearTransferOETF"];case Jn:case vu:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function ld(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),s=n.getShaderInfoLog(t).trim();if(i&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const r=parseInt(o[1]);return e.toUpperCase()+`

`+s+`

`+Tw(n.getShaderSource(t),r)}else return s}function Rw(n,t){const e=Aw(t);return`vec4 ${n}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function Pw(n,t){let e;switch(t){case I_:e="Linear";break;case L_:e="Reinhard";break;case D_:e="Cineon";break;case Vf:e="ACESFilmic";break;case N_:e="AgX";break;case F_:e="Neutral";break;case U_:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const qr=new q;function Cw(){we.getLuminanceCoefficients(qr);const n=qr.x.toFixed(4),t=qr.y.toFixed(4),e=qr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Iw(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ho).join(`
`)}function Lw(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function Dw(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const o=n.getActiveAttrib(t,s),r=o.name;let a=1;o.type===n.FLOAT_MAT2&&(a=2),o.type===n.FLOAT_MAT3&&(a=3),o.type===n.FLOAT_MAT4&&(a=4),e[r]={type:o.type,location:n.getAttribLocation(t,r),locationSize:a}}return e}function Ho(n){return n!==""}function cd(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function ud(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Uw=/^[ \t]*#include +<([\w\d./]+)>/gm;function Nc(n){return n.replace(Uw,Fw)}const Nw=new Map;function Fw(n,t){let e=ae[t];if(e===void 0){const i=Nw.get(t);if(i!==void 0)e=ae[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Nc(e)}const Ow=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function hd(n){return n.replace(Ow,Bw)}function Bw(n,t,e,i){let s="";for(let o=parseInt(t);o<parseInt(e);o++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return s}function dd(n){let t=`precision ${n.precision} float;
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
#define LOW_PRECISION`),t}function zw(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Hf?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===u_?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Ni&&(t="SHADOWMAP_TYPE_VSM"),t}function Gw(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case xo:case yo:t="ENVMAP_TYPE_CUBE";break;case Fa:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Hw(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case yo:t="ENVMAP_MODE_REFRACTION";break}return t}function kw(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case kf:t="ENVMAP_BLENDING_MULTIPLY";break;case P_:t="ENVMAP_BLENDING_MIX";break;case C_:t="ENVMAP_BLENDING_ADD";break}return t}function Vw(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function Ww(n,t,e,i){const s=n.getContext(),o=e.defines;let r=e.vertexShader,a=e.fragmentShader;const l=zw(e),c=Gw(e),h=Hw(e),u=kw(e),d=Vw(e),f=Iw(e),_=Lw(o),y=s.createProgram();let m,p,b=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Ho).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Ho).join(`
`),p.length>0&&(p+=`
`)):(m=[dd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ho).join(`
`),p=[dd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==as?"#define TONE_MAPPING":"",e.toneMapping!==as?ae.tonemapping_pars_fragment:"",e.toneMapping!==as?Pw("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ae.colorspace_pars_fragment,Rw("linearToOutputTexel",e.outputColorSpace),Cw(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ho).join(`
`)),r=Nc(r),r=cd(r,e),r=ud(r,e),a=Nc(a),a=cd(a,e),a=ud(a,e),r=hd(r),a=hd(a),e.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Rh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Rh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const M=b+m+r,S=b+p+a,O=ad(s,s.VERTEX_SHADER,M),I=ad(s,s.FRAGMENT_SHADER,S);s.attachShader(y,O),s.attachShader(y,I),e.index0AttributeName!==void 0?s.bindAttribLocation(y,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(y,0,"position"),s.linkProgram(y);function P(E){if(n.debug.checkShaderErrors){const j=s.getProgramInfoLog(y).trim(),k=s.getShaderInfoLog(O).trim(),J=s.getShaderInfoLog(I).trim();let at=!0,V=!0;if(s.getProgramParameter(y,s.LINK_STATUS)===!1)if(at=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,y,O,I);else{const Z=ld(s,O,"vertex"),H=ld(s,I,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(y,s.VALIDATE_STATUS)+`

Material Name: `+E.name+`
Material Type: `+E.type+`

Program Info Log: `+j+`
`+Z+`
`+H)}else j!==""?console.warn("THREE.WebGLProgram: Program Info Log:",j):(k===""||J==="")&&(V=!1);V&&(E.diagnostics={runnable:at,programLog:j,vertexShader:{log:k,prefix:m},fragmentShader:{log:J,prefix:p}})}s.deleteShader(O),s.deleteShader(I),U=new ua(s,y),nt=Dw(s,y)}let U;this.getUniforms=function(){return U===void 0&&P(this),U};let nt;this.getAttributes=function(){return nt===void 0&&P(this),nt};let x=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=s.getProgramParameter(y,Ew)),x},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(y),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=bw++,this.cacheKey=t,this.usedTimes=1,this.program=y,this.vertexShader=O,this.fragmentShader=I,this}let Xw=0;class qw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),o=this._getShaderStage(i),r=this._getShaderCacheForMaterial(t);return r.has(s)===!1&&(r.add(s),s.usedTimes++),r.has(o)===!1&&(r.add(o),o.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new Yw(t),e.set(t,i)),i}}class Yw{constructor(t){this.id=Xw++,this.code=t,this.usedTimes=0}}function $w(n,t,e,i,s,o,r){const a=new ap,l=new qw,c=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.reverseDepthBuffer,f=s.vertexTextures;let _=s.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(x){return c.add(x),x===0?"uv":`uv${x}`}function p(x,E,j,k,J){const at=k.fog,V=J.geometry,Z=x.isMeshStandardMaterial?k.environment:null,H=(x.isMeshStandardMaterial?e:t).get(x.envMap||Z),gt=H&&H.mapping===Fa?H.image.height:null,yt=y[x.type];x.precision!==null&&(_=s.getMaxPrecision(x.precision),_!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",_,"instead."));const _t=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,It=_t!==void 0?_t.length:0;let zt=0;V.morphAttributes.position!==void 0&&(zt=1),V.morphAttributes.normal!==void 0&&(zt=2),V.morphAttributes.color!==void 0&&(zt=3);let rt,ft,vt,F;if(yt){const ee=_i[yt];rt=ee.vertexShader,ft=ee.fragmentShader}else rt=x.vertexShader,ft=x.fragmentShader,l.update(x),vt=l.getVertexShaderID(x),F=l.getFragmentShaderID(x);const lt=n.getRenderTarget(),ot=J.isInstancedMesh===!0,ht=J.isBatchedMesh===!0,Mt=!!x.map,tt=!!x.matcap,g=!!H,T=!!x.aoMap,L=!!x.lightMap,N=!!x.bumpMap,D=!!x.normalMap,X=!!x.displacementMap,K=!!x.emissiveMap,w=!!x.metalnessMap,v=!!x.roughnessMap,C=x.anisotropy>0,W=x.clearcoat>0,z=x.dispersion>0,G=x.iridescence>0,ut=x.sheen>0,ct=x.transmission>0,pt=C&&!!x.anisotropyMap,Rt=W&&!!x.clearcoatMap,dt=W&&!!x.clearcoatNormalMap,xt=W&&!!x.clearcoatRoughnessMap,Pt=G&&!!x.iridescenceMap,Lt=G&&!!x.iridescenceThicknessMap,Et=ut&&!!x.sheenColorMap,Vt=ut&&!!x.sheenRoughnessMap,Dt=!!x.specularMap,kt=!!x.specularColorMap,B=!!x.specularIntensityMap,mt=ct&&!!x.transmissionMap,et=ct&&!!x.thicknessMap,Q=!!x.gradientMap,wt=!!x.alphaMap,St=x.alphaTest>0,Bt=!!x.alphaHash,Kt=!!x.extensions;let Qt=as;x.toneMapped&&(lt===null||lt.isXRRenderTarget===!0)&&(Qt=n.toneMapping);const Jt={shaderID:yt,shaderType:x.type,shaderName:x.name,vertexShader:rt,fragmentShader:ft,defines:x.defines,customVertexShaderID:vt,customFragmentShaderID:F,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:_,batching:ht,batchingColor:ht&&J._colorsTexture!==null,instancing:ot,instancingColor:ot&&J.instanceColor!==null,instancingMorph:ot&&J.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:lt===null?n.outputColorSpace:lt.isXRRenderTarget===!0?lt.texture.colorSpace:ds,alphaToCoverage:!!x.alphaToCoverage,map:Mt,matcap:tt,envMap:g,envMapMode:g&&H.mapping,envMapCubeUVHeight:gt,aoMap:T,lightMap:L,bumpMap:N,normalMap:D,displacementMap:f&&X,emissiveMap:K,normalMapObjectSpace:D&&x.normalMapType===G_,normalMapTangentSpace:D&&x.normalMapType===ep,metalnessMap:w,roughnessMap:v,anisotropy:C,anisotropyMap:pt,clearcoat:W,clearcoatMap:Rt,clearcoatNormalMap:dt,clearcoatRoughnessMap:xt,dispersion:z,iridescence:G,iridescenceMap:Pt,iridescenceThicknessMap:Lt,sheen:ut,sheenColorMap:Et,sheenRoughnessMap:Vt,specularMap:Dt,specularColorMap:kt,specularIntensityMap:B,transmission:ct,transmissionMap:mt,thicknessMap:et,gradientMap:Q,opaque:x.transparent===!1&&x.blending===co&&x.alphaToCoverage===!1,alphaMap:wt,alphaTest:St,alphaHash:Bt,combine:x.combine,mapUv:Mt&&m(x.map.channel),aoMapUv:T&&m(x.aoMap.channel),lightMapUv:L&&m(x.lightMap.channel),bumpMapUv:N&&m(x.bumpMap.channel),normalMapUv:D&&m(x.normalMap.channel),displacementMapUv:X&&m(x.displacementMap.channel),emissiveMapUv:K&&m(x.emissiveMap.channel),metalnessMapUv:w&&m(x.metalnessMap.channel),roughnessMapUv:v&&m(x.roughnessMap.channel),anisotropyMapUv:pt&&m(x.anisotropyMap.channel),clearcoatMapUv:Rt&&m(x.clearcoatMap.channel),clearcoatNormalMapUv:dt&&m(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:xt&&m(x.clearcoatRoughnessMap.channel),iridescenceMapUv:Pt&&m(x.iridescenceMap.channel),iridescenceThicknessMapUv:Lt&&m(x.iridescenceThicknessMap.channel),sheenColorMapUv:Et&&m(x.sheenColorMap.channel),sheenRoughnessMapUv:Vt&&m(x.sheenRoughnessMap.channel),specularMapUv:Dt&&m(x.specularMap.channel),specularColorMapUv:kt&&m(x.specularColorMap.channel),specularIntensityMapUv:B&&m(x.specularIntensityMap.channel),transmissionMapUv:mt&&m(x.transmissionMap.channel),thicknessMapUv:et&&m(x.thicknessMap.channel),alphaMapUv:wt&&m(x.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(D||C),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:J.isPoints===!0&&!!V.attributes.uv&&(Mt||wt),fog:!!at,useFog:x.fog===!0,fogExp2:!!at&&at.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:d,skinning:J.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:It,morphTextureStride:zt,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:n.shadowMap.enabled&&j.length>0,shadowMapType:n.shadowMap.type,toneMapping:Qt,decodeVideoTexture:Mt&&x.map.isVideoTexture===!0&&we.getTransfer(x.map.colorSpace)===Ne,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===me,flipSided:x.side===Tn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:Kt&&x.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Kt&&x.extensions.multiDraw===!0||ht)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Jt.vertexUv1s=c.has(1),Jt.vertexUv2s=c.has(2),Jt.vertexUv3s=c.has(3),c.clear(),Jt}function b(x){const E=[];if(x.shaderID?E.push(x.shaderID):(E.push(x.customVertexShaderID),E.push(x.customFragmentShaderID)),x.defines!==void 0)for(const j in x.defines)E.push(j),E.push(x.defines[j]);return x.isRawShaderMaterial===!1&&(M(E,x),S(E,x),E.push(n.outputColorSpace)),E.push(x.customProgramCacheKey),E.join()}function M(x,E){x.push(E.precision),x.push(E.outputColorSpace),x.push(E.envMapMode),x.push(E.envMapCubeUVHeight),x.push(E.mapUv),x.push(E.alphaMapUv),x.push(E.lightMapUv),x.push(E.aoMapUv),x.push(E.bumpMapUv),x.push(E.normalMapUv),x.push(E.displacementMapUv),x.push(E.emissiveMapUv),x.push(E.metalnessMapUv),x.push(E.roughnessMapUv),x.push(E.anisotropyMapUv),x.push(E.clearcoatMapUv),x.push(E.clearcoatNormalMapUv),x.push(E.clearcoatRoughnessMapUv),x.push(E.iridescenceMapUv),x.push(E.iridescenceThicknessMapUv),x.push(E.sheenColorMapUv),x.push(E.sheenRoughnessMapUv),x.push(E.specularMapUv),x.push(E.specularColorMapUv),x.push(E.specularIntensityMapUv),x.push(E.transmissionMapUv),x.push(E.thicknessMapUv),x.push(E.combine),x.push(E.fogExp2),x.push(E.sizeAttenuation),x.push(E.morphTargetsCount),x.push(E.morphAttributeCount),x.push(E.numDirLights),x.push(E.numPointLights),x.push(E.numSpotLights),x.push(E.numSpotLightMaps),x.push(E.numHemiLights),x.push(E.numRectAreaLights),x.push(E.numDirLightShadows),x.push(E.numPointLightShadows),x.push(E.numSpotLightShadows),x.push(E.numSpotLightShadowsWithMaps),x.push(E.numLightProbes),x.push(E.shadowMapType),x.push(E.toneMapping),x.push(E.numClippingPlanes),x.push(E.numClipIntersection),x.push(E.depthPacking)}function S(x,E){a.disableAll(),E.supportsVertexTextures&&a.enable(0),E.instancing&&a.enable(1),E.instancingColor&&a.enable(2),E.instancingMorph&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),E.anisotropy&&a.enable(17),E.alphaHash&&a.enable(18),E.batching&&a.enable(19),E.dispersion&&a.enable(20),E.batchingColor&&a.enable(21),x.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reverseDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.alphaToCoverage&&a.enable(20),x.push(a.mask)}function O(x){const E=y[x.type];let j;if(E){const k=_i[E];j=Iv.clone(k.uniforms)}else j=x.uniforms;return j}function I(x,E){let j;for(let k=0,J=h.length;k<J;k++){const at=h[k];if(at.cacheKey===E){j=at,++j.usedTimes;break}}return j===void 0&&(j=new Ww(n,E,x,o),h.push(j)),j}function P(x){if(--x.usedTimes===0){const E=h.indexOf(x);h[E]=h[h.length-1],h.pop(),x.destroy()}}function U(x){l.remove(x)}function nt(){l.dispose()}return{getParameters:p,getProgramCacheKey:b,getUniforms:O,acquireProgram:I,releaseProgram:P,releaseShaderCache:U,programs:h,dispose:nt}}function jw(){let n=new WeakMap;function t(r){return n.has(r)}function e(r){let a=n.get(r);return a===void 0&&(a={},n.set(r,a)),a}function i(r){n.delete(r)}function s(r,a,l){n.get(r)[a]=l}function o(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:o}}function Kw(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function fd(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function pd(){const n=[];let t=0;const e=[],i=[],s=[];function o(){t=0,e.length=0,i.length=0,s.length=0}function r(u,d,f,_,y,m){let p=n[t];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:_,renderOrder:u.renderOrder,z:y,group:m},n[t]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=_,p.renderOrder=u.renderOrder,p.z=y,p.group=m),t++,p}function a(u,d,f,_,y,m){const p=r(u,d,f,_,y,m);f.transmission>0?i.push(p):f.transparent===!0?s.push(p):e.push(p)}function l(u,d,f,_,y,m){const p=r(u,d,f,_,y,m);f.transmission>0?i.unshift(p):f.transparent===!0?s.unshift(p):e.unshift(p)}function c(u,d){e.length>1&&e.sort(u||Kw),i.length>1&&i.sort(d||fd),s.length>1&&s.sort(d||fd)}function h(){for(let u=t,d=n.length;u<d;u++){const f=n[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:i,transparent:s,init:o,push:a,unshift:l,finish:h,sort:c}}function Zw(){let n=new WeakMap;function t(i,s){const o=n.get(i);let r;return o===void 0?(r=new pd,n.set(i,[r])):s>=o.length?(r=new pd,o.push(r)):r=o[s],r}function e(){n=new WeakMap}return{get:t,dispose:e}}function Jw(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new q,color:new he};break;case"SpotLight":e={position:new q,direction:new q,color:new he,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new q,color:new he,distance:0,decay:0};break;case"HemisphereLight":e={direction:new q,skyColor:new he,groundColor:new he};break;case"RectAreaLight":e={color:new he,position:new q,halfWidth:new q,halfHeight:new q};break}return n[t.id]=e,e}}}function Qw(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ot};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ot};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ot,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let tS=0;function eS(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function nS(n){const t=new Jw,e=Qw(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new q);const s=new q,o=new Fe,r=new Fe;function a(c){let h=0,u=0,d=0;for(let nt=0;nt<9;nt++)i.probe[nt].set(0,0,0);let f=0,_=0,y=0,m=0,p=0,b=0,M=0,S=0,O=0,I=0,P=0;c.sort(eS);for(let nt=0,x=c.length;nt<x;nt++){const E=c[nt],j=E.color,k=E.intensity,J=E.distance,at=E.shadow&&E.shadow.map?E.shadow.map.texture:null;if(E.isAmbientLight)h+=j.r*k,u+=j.g*k,d+=j.b*k;else if(E.isLightProbe){for(let V=0;V<9;V++)i.probe[V].addScaledVector(E.sh.coefficients[V],k);P++}else if(E.isDirectionalLight){const V=t.get(E);if(V.color.copy(E.color).multiplyScalar(E.intensity),E.castShadow){const Z=E.shadow,H=e.get(E);H.shadowIntensity=Z.intensity,H.shadowBias=Z.bias,H.shadowNormalBias=Z.normalBias,H.shadowRadius=Z.radius,H.shadowMapSize=Z.mapSize,i.directionalShadow[f]=H,i.directionalShadowMap[f]=at,i.directionalShadowMatrix[f]=E.shadow.matrix,b++}i.directional[f]=V,f++}else if(E.isSpotLight){const V=t.get(E);V.position.setFromMatrixPosition(E.matrixWorld),V.color.copy(j).multiplyScalar(k),V.distance=J,V.coneCos=Math.cos(E.angle),V.penumbraCos=Math.cos(E.angle*(1-E.penumbra)),V.decay=E.decay,i.spot[y]=V;const Z=E.shadow;if(E.map&&(i.spotLightMap[O]=E.map,O++,Z.updateMatrices(E),E.castShadow&&I++),i.spotLightMatrix[y]=Z.matrix,E.castShadow){const H=e.get(E);H.shadowIntensity=Z.intensity,H.shadowBias=Z.bias,H.shadowNormalBias=Z.normalBias,H.shadowRadius=Z.radius,H.shadowMapSize=Z.mapSize,i.spotShadow[y]=H,i.spotShadowMap[y]=at,S++}y++}else if(E.isRectAreaLight){const V=t.get(E);V.color.copy(j).multiplyScalar(k),V.halfWidth.set(E.width*.5,0,0),V.halfHeight.set(0,E.height*.5,0),i.rectArea[m]=V,m++}else if(E.isPointLight){const V=t.get(E);if(V.color.copy(E.color).multiplyScalar(E.intensity),V.distance=E.distance,V.decay=E.decay,E.castShadow){const Z=E.shadow,H=e.get(E);H.shadowIntensity=Z.intensity,H.shadowBias=Z.bias,H.shadowNormalBias=Z.normalBias,H.shadowRadius=Z.radius,H.shadowMapSize=Z.mapSize,H.shadowCameraNear=Z.camera.near,H.shadowCameraFar=Z.camera.far,i.pointShadow[_]=H,i.pointShadowMap[_]=at,i.pointShadowMatrix[_]=E.shadow.matrix,M++}i.point[_]=V,_++}else if(E.isHemisphereLight){const V=t.get(E);V.skyColor.copy(E.color).multiplyScalar(k),V.groundColor.copy(E.groundColor).multiplyScalar(k),i.hemi[p]=V,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ft.LTC_FLOAT_1,i.rectAreaLTC2=Ft.LTC_FLOAT_2):(i.rectAreaLTC1=Ft.LTC_HALF_1,i.rectAreaLTC2=Ft.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=d;const U=i.hash;(U.directionalLength!==f||U.pointLength!==_||U.spotLength!==y||U.rectAreaLength!==m||U.hemiLength!==p||U.numDirectionalShadows!==b||U.numPointShadows!==M||U.numSpotShadows!==S||U.numSpotMaps!==O||U.numLightProbes!==P)&&(i.directional.length=f,i.spot.length=y,i.rectArea.length=m,i.point.length=_,i.hemi.length=p,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=b,i.pointShadowMatrix.length=M,i.spotLightMatrix.length=S+O-I,i.spotLightMap.length=O,i.numSpotLightShadowsWithMaps=I,i.numLightProbes=P,U.directionalLength=f,U.pointLength=_,U.spotLength=y,U.rectAreaLength=m,U.hemiLength=p,U.numDirectionalShadows=b,U.numPointShadows=M,U.numSpotShadows=S,U.numSpotMaps=O,U.numLightProbes=P,i.version=tS++)}function l(c,h){let u=0,d=0,f=0,_=0,y=0;const m=h.matrixWorldInverse;for(let p=0,b=c.length;p<b;p++){const M=c[p];if(M.isDirectionalLight){const S=i.directional[u];S.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(m),u++}else if(M.isSpotLight){const S=i.spot[f];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(m),f++}else if(M.isRectAreaLight){const S=i.rectArea[_];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(m),r.identity(),o.copy(M.matrixWorld),o.premultiply(m),r.extractRotation(o),S.halfWidth.set(M.width*.5,0,0),S.halfHeight.set(0,M.height*.5,0),S.halfWidth.applyMatrix4(r),S.halfHeight.applyMatrix4(r),_++}else if(M.isPointLight){const S=i.point[d];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(m),d++}else if(M.isHemisphereLight){const S=i.hemi[y];S.direction.setFromMatrixPosition(M.matrixWorld),S.direction.transformDirection(m),y++}}}return{setup:a,setupView:l,state:i}}function md(n){const t=new nS(n),e=[],i=[];function s(h){c.camera=h,e.length=0,i.length=0}function o(h){e.push(h)}function r(h){i.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:o,pushShadow:r}}function iS(n){let t=new WeakMap;function e(s,o=0){const r=t.get(s);let a;return r===void 0?(a=new md(n),t.set(s,[a])):o>=r.length?(a=new md(n),r.push(a)):a=r[o],a}function i(){t=new WeakMap}return{get:e,dispose:i}}class sS extends To{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=B_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class oS extends To{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const rS=`void main() {
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
}`;function lS(n,t,e){let i=new Mu;const s=new Ot,o=new Ot,r=new Ae,a=new sS({depthPacking:z_}),l=new oS,c={},h=e.maxTextureSize,u={[cs]:Tn,[Tn]:cs,[me]:me},d=new An({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ot},radius:{value:4}},vertexShader:rS,fragmentShader:aS}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const _=new Rn;_.setAttribute("position",new xi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new R(_,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Hf;let p=this.type;this.render=function(I,P,U){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||I.length===0)return;const nt=n.getRenderTarget(),x=n.getActiveCubeFace(),E=n.getActiveMipmapLevel(),j=n.state;j.setBlending(rs),j.buffers.color.setClear(1,1,1,1),j.buffers.depth.setTest(!0),j.setScissorTest(!1);const k=p!==Ni&&this.type===Ni,J=p===Ni&&this.type!==Ni;for(let at=0,V=I.length;at<V;at++){const Z=I[at],H=Z.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);const gt=H.getFrameExtents();if(s.multiply(gt),o.copy(H.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(o.x=Math.floor(h/gt.x),s.x=o.x*gt.x,H.mapSize.x=o.x),s.y>h&&(o.y=Math.floor(h/gt.y),s.y=o.y*gt.y,H.mapSize.y=o.y)),H.map===null||k===!0||J===!0){const _t=this.type!==Ni?{minFilter:Gn,magFilter:Gn}:{};H.map!==null&&H.map.dispose(),H.map=new Ls(s.x,s.y,_t),H.map.texture.name=Z.name+".shadowMap",H.camera.updateProjectionMatrix()}n.setRenderTarget(H.map),n.clear();const yt=H.getViewportCount();for(let _t=0;_t<yt;_t++){const It=H.getViewport(_t);r.set(o.x*It.x,o.y*It.y,o.x*It.z,o.y*It.w),j.viewport(r),H.updateMatrices(Z,_t),i=H.getFrustum(),S(P,U,H.camera,Z,this.type)}H.isPointLightShadow!==!0&&this.type===Ni&&b(H,U),H.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(nt,x,E)};function b(I,P){const U=t.update(y);d.defines.VSM_SAMPLES!==I.blurSamples&&(d.defines.VSM_SAMPLES=I.blurSamples,f.defines.VSM_SAMPLES=I.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new Ls(s.x,s.y)),d.uniforms.shadow_pass.value=I.map.texture,d.uniforms.resolution.value=I.mapSize,d.uniforms.radius.value=I.radius,n.setRenderTarget(I.mapPass),n.clear(),n.renderBufferDirect(P,null,U,d,y,null),f.uniforms.shadow_pass.value=I.mapPass.texture,f.uniforms.resolution.value=I.mapSize,f.uniforms.radius.value=I.radius,n.setRenderTarget(I.map),n.clear(),n.renderBufferDirect(P,null,U,f,y,null)}function M(I,P,U,nt){let x=null;const E=U.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(E!==void 0)x=E;else if(x=U.isPointLight===!0?l:a,n.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0){const j=x.uuid,k=P.uuid;let J=c[j];J===void 0&&(J={},c[j]=J);let at=J[k];at===void 0&&(at=x.clone(),J[k]=at,P.addEventListener("dispose",O)),x=at}if(x.visible=P.visible,x.wireframe=P.wireframe,nt===Ni?x.side=P.shadowSide!==null?P.shadowSide:P.side:x.side=P.shadowSide!==null?P.shadowSide:u[P.side],x.alphaMap=P.alphaMap,x.alphaTest=P.alphaTest,x.map=P.map,x.clipShadows=P.clipShadows,x.clippingPlanes=P.clippingPlanes,x.clipIntersection=P.clipIntersection,x.displacementMap=P.displacementMap,x.displacementScale=P.displacementScale,x.displacementBias=P.displacementBias,x.wireframeLinewidth=P.wireframeLinewidth,x.linewidth=P.linewidth,U.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const j=n.properties.get(x);j.light=U}return x}function S(I,P,U,nt,x){if(I.visible===!1)return;if(I.layers.test(P.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&x===Ni)&&(!I.frustumCulled||i.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,I.matrixWorld);const k=t.update(I),J=I.material;if(Array.isArray(J)){const at=k.groups;for(let V=0,Z=at.length;V<Z;V++){const H=at[V],gt=J[H.materialIndex];if(gt&&gt.visible){const yt=M(I,gt,nt,x);I.onBeforeShadow(n,I,P,U,k,yt,H),n.renderBufferDirect(U,null,k,yt,I,H),I.onAfterShadow(n,I,P,U,k,yt,H)}}}else if(J.visible){const at=M(I,J,nt,x);I.onBeforeShadow(n,I,P,U,k,at,null),n.renderBufferDirect(U,null,k,at,I,null),I.onAfterShadow(n,I,P,U,k,at,null)}}const j=I.children;for(let k=0,J=j.length;k<J;k++)S(j[k],P,U,nt,x)}function O(I){I.target.removeEventListener("dispose",O);for(const U in c){const nt=c[U],x=I.target.uuid;x in nt&&(nt[x].dispose(),delete nt[x])}}}const cS={[tc]:ec,[nc]:oc,[ic]:rc,[vo]:sc,[ec]:tc,[oc]:nc,[rc]:ic,[sc]:vo};function uS(n){function t(){let B=!1;const mt=new Ae;let et=null;const Q=new Ae(0,0,0,0);return{setMask:function(wt){et!==wt&&!B&&(n.colorMask(wt,wt,wt,wt),et=wt)},setLocked:function(wt){B=wt},setClear:function(wt,St,Bt,Kt,Qt){Qt===!0&&(wt*=Kt,St*=Kt,Bt*=Kt),mt.set(wt,St,Bt,Kt),Q.equals(mt)===!1&&(n.clearColor(wt,St,Bt,Kt),Q.copy(mt))},reset:function(){B=!1,et=null,Q.set(-1,0,0,0)}}}function e(){let B=!1,mt=!1,et=null,Q=null,wt=null;return{setReversed:function(St){mt=St},setTest:function(St){St?vt(n.DEPTH_TEST):F(n.DEPTH_TEST)},setMask:function(St){et!==St&&!B&&(n.depthMask(St),et=St)},setFunc:function(St){if(mt&&(St=cS[St]),Q!==St){switch(St){case tc:n.depthFunc(n.NEVER);break;case ec:n.depthFunc(n.ALWAYS);break;case nc:n.depthFunc(n.LESS);break;case vo:n.depthFunc(n.LEQUAL);break;case ic:n.depthFunc(n.EQUAL);break;case sc:n.depthFunc(n.GEQUAL);break;case oc:n.depthFunc(n.GREATER);break;case rc:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Q=St}},setLocked:function(St){B=St},setClear:function(St){wt!==St&&(n.clearDepth(St),wt=St)},reset:function(){B=!1,et=null,Q=null,wt=null}}}function i(){let B=!1,mt=null,et=null,Q=null,wt=null,St=null,Bt=null,Kt=null,Qt=null;return{setTest:function(Jt){B||(Jt?vt(n.STENCIL_TEST):F(n.STENCIL_TEST))},setMask:function(Jt){mt!==Jt&&!B&&(n.stencilMask(Jt),mt=Jt)},setFunc:function(Jt,ee,ce){(et!==Jt||Q!==ee||wt!==ce)&&(n.stencilFunc(Jt,ee,ce),et=Jt,Q=ee,wt=ce)},setOp:function(Jt,ee,ce){(St!==Jt||Bt!==ee||Kt!==ce)&&(n.stencilOp(Jt,ee,ce),St=Jt,Bt=ee,Kt=ce)},setLocked:function(Jt){B=Jt},setClear:function(Jt){Qt!==Jt&&(n.clearStencil(Jt),Qt=Jt)},reset:function(){B=!1,mt=null,et=null,Q=null,wt=null,St=null,Bt=null,Kt=null,Qt=null}}}const s=new t,o=new e,r=new i,a=new WeakMap,l=new WeakMap;let c={},h={},u=new WeakMap,d=[],f=null,_=!1,y=null,m=null,p=null,b=null,M=null,S=null,O=null,I=new he(0,0,0),P=0,U=!1,nt=null,x=null,E=null,j=null,k=null;const J=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let at=!1,V=0;const Z=n.getParameter(n.VERSION);Z.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(Z)[1]),at=V>=1):Z.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),at=V>=2);let H=null,gt={};const yt=n.getParameter(n.SCISSOR_BOX),_t=n.getParameter(n.VIEWPORT),It=new Ae().fromArray(yt),zt=new Ae().fromArray(_t);function rt(B,mt,et,Q){const wt=new Uint8Array(4),St=n.createTexture();n.bindTexture(B,St),n.texParameteri(B,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(B,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Bt=0;Bt<et;Bt++)B===n.TEXTURE_3D||B===n.TEXTURE_2D_ARRAY?n.texImage3D(mt,0,n.RGBA,1,1,Q,0,n.RGBA,n.UNSIGNED_BYTE,wt):n.texImage2D(mt+Bt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,wt);return St}const ft={};ft[n.TEXTURE_2D]=rt(n.TEXTURE_2D,n.TEXTURE_2D,1),ft[n.TEXTURE_CUBE_MAP]=rt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),ft[n.TEXTURE_2D_ARRAY]=rt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ft[n.TEXTURE_3D]=rt(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),r.setClear(0),vt(n.DEPTH_TEST),o.setFunc(vo),L(!1),N(wh),vt(n.CULL_FACE),g(rs);function vt(B){c[B]!==!0&&(n.enable(B),c[B]=!0)}function F(B){c[B]!==!1&&(n.disable(B),c[B]=!1)}function lt(B,mt){return h[B]!==mt?(n.bindFramebuffer(B,mt),h[B]=mt,B===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=mt),B===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=mt),!0):!1}function ot(B,mt){let et=d,Q=!1;if(B){et=u.get(mt),et===void 0&&(et=[],u.set(mt,et));const wt=B.textures;if(et.length!==wt.length||et[0]!==n.COLOR_ATTACHMENT0){for(let St=0,Bt=wt.length;St<Bt;St++)et[St]=n.COLOR_ATTACHMENT0+St;et.length=wt.length,Q=!0}}else et[0]!==n.BACK&&(et[0]=n.BACK,Q=!0);Q&&n.drawBuffers(et)}function ht(B){return f!==B?(n.useProgram(B),f=B,!0):!1}const Mt={[bs]:n.FUNC_ADD,[d_]:n.FUNC_SUBTRACT,[f_]:n.FUNC_REVERSE_SUBTRACT};Mt[p_]=n.MIN,Mt[m_]=n.MAX;const tt={[g_]:n.ZERO,[__]:n.ONE,[v_]:n.SRC_COLOR,[Jl]:n.SRC_ALPHA,[E_]:n.SRC_ALPHA_SATURATE,[w_]:n.DST_COLOR,[y_]:n.DST_ALPHA,[x_]:n.ONE_MINUS_SRC_COLOR,[Ql]:n.ONE_MINUS_SRC_ALPHA,[S_]:n.ONE_MINUS_DST_COLOR,[M_]:n.ONE_MINUS_DST_ALPHA,[b_]:n.CONSTANT_COLOR,[T_]:n.ONE_MINUS_CONSTANT_COLOR,[A_]:n.CONSTANT_ALPHA,[R_]:n.ONE_MINUS_CONSTANT_ALPHA};function g(B,mt,et,Q,wt,St,Bt,Kt,Qt,Jt){if(B===rs){_===!0&&(F(n.BLEND),_=!1);return}if(_===!1&&(vt(n.BLEND),_=!0),B!==h_){if(B!==y||Jt!==U){if((m!==bs||M!==bs)&&(n.blendEquation(n.FUNC_ADD),m=bs,M=bs),Jt)switch(B){case co:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Sh:n.blendFunc(n.ONE,n.ONE);break;case Eh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case bh:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}else switch(B){case co:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Sh:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Eh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case bh:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}p=null,b=null,S=null,O=null,I.set(0,0,0),P=0,y=B,U=Jt}return}wt=wt||mt,St=St||et,Bt=Bt||Q,(mt!==m||wt!==M)&&(n.blendEquationSeparate(Mt[mt],Mt[wt]),m=mt,M=wt),(et!==p||Q!==b||St!==S||Bt!==O)&&(n.blendFuncSeparate(tt[et],tt[Q],tt[St],tt[Bt]),p=et,b=Q,S=St,O=Bt),(Kt.equals(I)===!1||Qt!==P)&&(n.blendColor(Kt.r,Kt.g,Kt.b,Qt),I.copy(Kt),P=Qt),y=B,U=!1}function T(B,mt){B.side===me?F(n.CULL_FACE):vt(n.CULL_FACE);let et=B.side===Tn;mt&&(et=!et),L(et),B.blending===co&&B.transparent===!1?g(rs):g(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),o.setFunc(B.depthFunc),o.setTest(B.depthTest),o.setMask(B.depthWrite),s.setMask(B.colorWrite);const Q=B.stencilWrite;r.setTest(Q),Q&&(r.setMask(B.stencilWriteMask),r.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),r.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),X(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?vt(n.SAMPLE_ALPHA_TO_COVERAGE):F(n.SAMPLE_ALPHA_TO_COVERAGE)}function L(B){nt!==B&&(B?n.frontFace(n.CW):n.frontFace(n.CCW),nt=B)}function N(B){B!==l_?(vt(n.CULL_FACE),B!==x&&(B===wh?n.cullFace(n.BACK):B===c_?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):F(n.CULL_FACE),x=B}function D(B){B!==E&&(at&&n.lineWidth(B),E=B)}function X(B,mt,et){B?(vt(n.POLYGON_OFFSET_FILL),(j!==mt||k!==et)&&(n.polygonOffset(mt,et),j=mt,k=et)):F(n.POLYGON_OFFSET_FILL)}function K(B){B?vt(n.SCISSOR_TEST):F(n.SCISSOR_TEST)}function w(B){B===void 0&&(B=n.TEXTURE0+J-1),H!==B&&(n.activeTexture(B),H=B)}function v(B,mt,et){et===void 0&&(H===null?et=n.TEXTURE0+J-1:et=H);let Q=gt[et];Q===void 0&&(Q={type:void 0,texture:void 0},gt[et]=Q),(Q.type!==B||Q.texture!==mt)&&(H!==et&&(n.activeTexture(et),H=et),n.bindTexture(B,mt||ft[B]),Q.type=B,Q.texture=mt)}function C(){const B=gt[H];B!==void 0&&B.type!==void 0&&(n.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function W(){try{n.compressedTexImage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function z(){try{n.compressedTexImage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function G(){try{n.texSubImage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ut(){try{n.texSubImage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ct(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function pt(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Rt(){try{n.texStorage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function dt(){try{n.texStorage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function xt(){try{n.texImage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Pt(){try{n.texImage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Lt(B){It.equals(B)===!1&&(n.scissor(B.x,B.y,B.z,B.w),It.copy(B))}function Et(B){zt.equals(B)===!1&&(n.viewport(B.x,B.y,B.z,B.w),zt.copy(B))}function Vt(B,mt){let et=l.get(mt);et===void 0&&(et=new WeakMap,l.set(mt,et));let Q=et.get(B);Q===void 0&&(Q=n.getUniformBlockIndex(mt,B.name),et.set(B,Q))}function Dt(B,mt){const Q=l.get(mt).get(B);a.get(mt)!==Q&&(n.uniformBlockBinding(mt,Q,B.__bindingPointIndex),a.set(mt,Q))}function kt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),c={},H=null,gt={},h={},u=new WeakMap,d=[],f=null,_=!1,y=null,m=null,p=null,b=null,M=null,S=null,O=null,I=new he(0,0,0),P=0,U=!1,nt=null,x=null,E=null,j=null,k=null,It.set(0,0,n.canvas.width,n.canvas.height),zt.set(0,0,n.canvas.width,n.canvas.height),s.reset(),o.reset(),r.reset()}return{buffers:{color:s,depth:o,stencil:r},enable:vt,disable:F,bindFramebuffer:lt,drawBuffers:ot,useProgram:ht,setBlending:g,setMaterial:T,setFlipSided:L,setCullFace:N,setLineWidth:D,setPolygonOffset:X,setScissorTest:K,activeTexture:w,bindTexture:v,unbindTexture:C,compressedTexImage2D:W,compressedTexImage3D:z,texImage2D:xt,texImage3D:Pt,updateUBOMapping:Vt,uniformBlockBinding:Dt,texStorage2D:Rt,texStorage3D:dt,texSubImage2D:G,texSubImage3D:ut,compressedTexSubImage2D:ct,compressedTexSubImage3D:pt,scissor:Lt,viewport:Et,reset:kt}}function gd(n,t,e,i){const s=hS(i);switch(e){case $f:return n*t;case Kf:return n*t;case Zf:return n*t*2;case Jf:return n*t/s.components*s.byteLength;case mu:return n*t/s.components*s.byteLength;case Qf:return n*t*2/s.components*s.byteLength;case gu:return n*t*2/s.components*s.byteLength;case jf:return n*t*3/s.components*s.byteLength;case ni:return n*t*4/s.components*s.byteLength;case _u:return n*t*4/s.components*s.byteLength;case sa:case oa:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case ra:case aa:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case uc:case dc:return Math.max(n,16)*Math.max(t,8)/4;case cc:case hc:return Math.max(n,8)*Math.max(t,8)/2;case fc:case pc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case mc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case gc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case _c:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case vc:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case xc:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case yc:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case Mc:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case wc:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case Sc:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case Ec:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case bc:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case Tc:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case Ac:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case Rc:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case Pc:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case la:case Cc:case Ic:return Math.ceil(n/4)*Math.ceil(t/4)*16;case tp:case Lc:return Math.ceil(n/4)*Math.ceil(t/4)*8;case Dc:case Uc:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function hS(n){switch(n){case ki:case Xf:return{byteLength:1,components:1};case cr:case qf:case _r:return{byteLength:2,components:1};case fu:case pu:return{byteLength:2,components:4};case Is:case du:case Bi:return{byteLength:4,components:1};case Yf:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function dS(n,t,e,i,s,o,r){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ot,h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(w,v){return f?new OffscreenCanvas(w,v):hr("canvas")}function y(w,v,C){let W=1;const z=K(w);if((z.width>C||z.height>C)&&(W=C/Math.max(z.width,z.height)),W<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const G=Math.floor(W*z.width),ut=Math.floor(W*z.height);u===void 0&&(u=_(G,ut));const ct=v?_(G,ut):u;return ct.width=G,ct.height=ut,ct.getContext("2d").drawImage(w,0,0,G,ut),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+z.width+"x"+z.height+") to ("+G+"x"+ut+")."),ct}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+z.width+"x"+z.height+")."),w;return w}function m(w){return w.generateMipmaps&&w.minFilter!==Gn&&w.minFilter!==ti}function p(w){n.generateMipmap(w)}function b(w,v,C,W,z=!1){if(w!==null){if(n[w]!==void 0)return n[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let G=v;if(v===n.RED&&(C===n.FLOAT&&(G=n.R32F),C===n.HALF_FLOAT&&(G=n.R16F),C===n.UNSIGNED_BYTE&&(G=n.R8)),v===n.RED_INTEGER&&(C===n.UNSIGNED_BYTE&&(G=n.R8UI),C===n.UNSIGNED_SHORT&&(G=n.R16UI),C===n.UNSIGNED_INT&&(G=n.R32UI),C===n.BYTE&&(G=n.R8I),C===n.SHORT&&(G=n.R16I),C===n.INT&&(G=n.R32I)),v===n.RG&&(C===n.FLOAT&&(G=n.RG32F),C===n.HALF_FLOAT&&(G=n.RG16F),C===n.UNSIGNED_BYTE&&(G=n.RG8)),v===n.RG_INTEGER&&(C===n.UNSIGNED_BYTE&&(G=n.RG8UI),C===n.UNSIGNED_SHORT&&(G=n.RG16UI),C===n.UNSIGNED_INT&&(G=n.RG32UI),C===n.BYTE&&(G=n.RG8I),C===n.SHORT&&(G=n.RG16I),C===n.INT&&(G=n.RG32I)),v===n.RGB_INTEGER&&(C===n.UNSIGNED_BYTE&&(G=n.RGB8UI),C===n.UNSIGNED_SHORT&&(G=n.RGB16UI),C===n.UNSIGNED_INT&&(G=n.RGB32UI),C===n.BYTE&&(G=n.RGB8I),C===n.SHORT&&(G=n.RGB16I),C===n.INT&&(G=n.RGB32I)),v===n.RGBA_INTEGER&&(C===n.UNSIGNED_BYTE&&(G=n.RGBA8UI),C===n.UNSIGNED_SHORT&&(G=n.RGBA16UI),C===n.UNSIGNED_INT&&(G=n.RGBA32UI),C===n.BYTE&&(G=n.RGBA8I),C===n.SHORT&&(G=n.RGBA16I),C===n.INT&&(G=n.RGBA32I)),v===n.RGB&&C===n.UNSIGNED_INT_5_9_9_9_REV&&(G=n.RGB9_E5),v===n.RGBA){const ut=z?va:we.getTransfer(W);C===n.FLOAT&&(G=n.RGBA32F),C===n.HALF_FLOAT&&(G=n.RGBA16F),C===n.UNSIGNED_BYTE&&(G=ut===Ne?n.SRGB8_ALPHA8:n.RGBA8),C===n.UNSIGNED_SHORT_4_4_4_4&&(G=n.RGBA4),C===n.UNSIGNED_SHORT_5_5_5_1&&(G=n.RGB5_A1)}return(G===n.R16F||G===n.R32F||G===n.RG16F||G===n.RG32F||G===n.RGBA16F||G===n.RGBA32F)&&t.get("EXT_color_buffer_float"),G}function M(w,v){let C;return w?v===null||v===Is||v===Mo?C=n.DEPTH24_STENCIL8:v===Bi?C=n.DEPTH32F_STENCIL8:v===cr&&(C=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Is||v===Mo?C=n.DEPTH_COMPONENT24:v===Bi?C=n.DEPTH_COMPONENT32F:v===cr&&(C=n.DEPTH_COMPONENT16),C}function S(w,v){return m(w)===!0||w.isFramebufferTexture&&w.minFilter!==Gn&&w.minFilter!==ti?Math.log2(Math.max(v.width,v.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?v.mipmaps.length:1}function O(w){const v=w.target;v.removeEventListener("dispose",O),P(v),v.isVideoTexture&&h.delete(v)}function I(w){const v=w.target;v.removeEventListener("dispose",I),nt(v)}function P(w){const v=i.get(w);if(v.__webglInit===void 0)return;const C=w.source,W=d.get(C);if(W){const z=W[v.__cacheKey];z.usedTimes--,z.usedTimes===0&&U(w),Object.keys(W).length===0&&d.delete(C)}i.remove(w)}function U(w){const v=i.get(w);n.deleteTexture(v.__webglTexture);const C=w.source,W=d.get(C);delete W[v.__cacheKey],r.memory.textures--}function nt(w){const v=i.get(w);if(w.depthTexture&&w.depthTexture.dispose(),w.isWebGLCubeRenderTarget)for(let W=0;W<6;W++){if(Array.isArray(v.__webglFramebuffer[W]))for(let z=0;z<v.__webglFramebuffer[W].length;z++)n.deleteFramebuffer(v.__webglFramebuffer[W][z]);else n.deleteFramebuffer(v.__webglFramebuffer[W]);v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer[W])}else{if(Array.isArray(v.__webglFramebuffer))for(let W=0;W<v.__webglFramebuffer.length;W++)n.deleteFramebuffer(v.__webglFramebuffer[W]);else n.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&n.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let W=0;W<v.__webglColorRenderbuffer.length;W++)v.__webglColorRenderbuffer[W]&&n.deleteRenderbuffer(v.__webglColorRenderbuffer[W]);v.__webglDepthRenderbuffer&&n.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const C=w.textures;for(let W=0,z=C.length;W<z;W++){const G=i.get(C[W]);G.__webglTexture&&(n.deleteTexture(G.__webglTexture),r.memory.textures--),i.remove(C[W])}i.remove(w)}let x=0;function E(){x=0}function j(){const w=x;return w>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+s.maxTextures),x+=1,w}function k(w){const v=[];return v.push(w.wrapS),v.push(w.wrapT),v.push(w.wrapR||0),v.push(w.magFilter),v.push(w.minFilter),v.push(w.anisotropy),v.push(w.internalFormat),v.push(w.format),v.push(w.type),v.push(w.generateMipmaps),v.push(w.premultiplyAlpha),v.push(w.flipY),v.push(w.unpackAlignment),v.push(w.colorSpace),v.join()}function J(w,v){const C=i.get(w);if(w.isVideoTexture&&D(w),w.isRenderTargetTexture===!1&&w.version>0&&C.__version!==w.version){const W=w.image;if(W===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(W.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{zt(C,w,v);return}}e.bindTexture(n.TEXTURE_2D,C.__webglTexture,n.TEXTURE0+v)}function at(w,v){const C=i.get(w);if(w.version>0&&C.__version!==w.version){zt(C,w,v);return}e.bindTexture(n.TEXTURE_2D_ARRAY,C.__webglTexture,n.TEXTURE0+v)}function V(w,v){const C=i.get(w);if(w.version>0&&C.__version!==w.version){zt(C,w,v);return}e.bindTexture(n.TEXTURE_3D,C.__webglTexture,n.TEXTURE0+v)}function Z(w,v){const C=i.get(w);if(w.version>0&&C.__version!==w.version){rt(C,w,v);return}e.bindTexture(n.TEXTURE_CUBE_MAP,C.__webglTexture,n.TEXTURE0+v)}const H={[Je]:n.REPEAT,[As]:n.CLAMP_TO_EDGE,[lc]:n.MIRRORED_REPEAT},gt={[Gn]:n.NEAREST,[O_]:n.NEAREST_MIPMAP_NEAREST,[Tr]:n.NEAREST_MIPMAP_LINEAR,[ti]:n.LINEAR,[sl]:n.LINEAR_MIPMAP_NEAREST,[Rs]:n.LINEAR_MIPMAP_LINEAR},yt={[H_]:n.NEVER,[Y_]:n.ALWAYS,[k_]:n.LESS,[np]:n.LEQUAL,[V_]:n.EQUAL,[q_]:n.GEQUAL,[W_]:n.GREATER,[X_]:n.NOTEQUAL};function _t(w,v){if(v.type===Bi&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===ti||v.magFilter===sl||v.magFilter===Tr||v.magFilter===Rs||v.minFilter===ti||v.minFilter===sl||v.minFilter===Tr||v.minFilter===Rs)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(w,n.TEXTURE_WRAP_S,H[v.wrapS]),n.texParameteri(w,n.TEXTURE_WRAP_T,H[v.wrapT]),(w===n.TEXTURE_3D||w===n.TEXTURE_2D_ARRAY)&&n.texParameteri(w,n.TEXTURE_WRAP_R,H[v.wrapR]),n.texParameteri(w,n.TEXTURE_MAG_FILTER,gt[v.magFilter]),n.texParameteri(w,n.TEXTURE_MIN_FILTER,gt[v.minFilter]),v.compareFunction&&(n.texParameteri(w,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(w,n.TEXTURE_COMPARE_FUNC,yt[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Gn||v.minFilter!==Tr&&v.minFilter!==Rs||v.type===Bi&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||i.get(v).__currentAnisotropy){const C=t.get("EXT_texture_filter_anisotropic");n.texParameterf(w,C.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy}}}function It(w,v){let C=!1;w.__webglInit===void 0&&(w.__webglInit=!0,v.addEventListener("dispose",O));const W=v.source;let z=d.get(W);z===void 0&&(z={},d.set(W,z));const G=k(v);if(G!==w.__cacheKey){z[G]===void 0&&(z[G]={texture:n.createTexture(),usedTimes:0},r.memory.textures++,C=!0),z[G].usedTimes++;const ut=z[w.__cacheKey];ut!==void 0&&(z[w.__cacheKey].usedTimes--,ut.usedTimes===0&&U(v)),w.__cacheKey=G,w.__webglTexture=z[G].texture}return C}function zt(w,v,C){let W=n.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(W=n.TEXTURE_2D_ARRAY),v.isData3DTexture&&(W=n.TEXTURE_3D);const z=It(w,v),G=v.source;e.bindTexture(W,w.__webglTexture,n.TEXTURE0+C);const ut=i.get(G);if(G.version!==ut.__version||z===!0){e.activeTexture(n.TEXTURE0+C);const ct=we.getPrimaries(we.workingColorSpace),pt=v.colorSpace===os?null:we.getPrimaries(v.colorSpace),Rt=v.colorSpace===os||ct===pt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Rt);let dt=y(v.image,!1,s.maxTextureSize);dt=X(v,dt);const xt=o.convert(v.format,v.colorSpace),Pt=o.convert(v.type);let Lt=b(v.internalFormat,xt,Pt,v.colorSpace,v.isVideoTexture);_t(W,v);let Et;const Vt=v.mipmaps,Dt=v.isVideoTexture!==!0,kt=ut.__version===void 0||z===!0,B=G.dataReady,mt=S(v,dt);if(v.isDepthTexture)Lt=M(v.format===wo,v.type),kt&&(Dt?e.texStorage2D(n.TEXTURE_2D,1,Lt,dt.width,dt.height):e.texImage2D(n.TEXTURE_2D,0,Lt,dt.width,dt.height,0,xt,Pt,null));else if(v.isDataTexture)if(Vt.length>0){Dt&&kt&&e.texStorage2D(n.TEXTURE_2D,mt,Lt,Vt[0].width,Vt[0].height);for(let et=0,Q=Vt.length;et<Q;et++)Et=Vt[et],Dt?B&&e.texSubImage2D(n.TEXTURE_2D,et,0,0,Et.width,Et.height,xt,Pt,Et.data):e.texImage2D(n.TEXTURE_2D,et,Lt,Et.width,Et.height,0,xt,Pt,Et.data);v.generateMipmaps=!1}else Dt?(kt&&e.texStorage2D(n.TEXTURE_2D,mt,Lt,dt.width,dt.height),B&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,dt.width,dt.height,xt,Pt,dt.data)):e.texImage2D(n.TEXTURE_2D,0,Lt,dt.width,dt.height,0,xt,Pt,dt.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Dt&&kt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,mt,Lt,Vt[0].width,Vt[0].height,dt.depth);for(let et=0,Q=Vt.length;et<Q;et++)if(Et=Vt[et],v.format!==ni)if(xt!==null)if(Dt){if(B)if(v.layerUpdates.size>0){const wt=gd(Et.width,Et.height,v.format,v.type);for(const St of v.layerUpdates){const Bt=Et.data.subarray(St*wt/Et.data.BYTES_PER_ELEMENT,(St+1)*wt/Et.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,et,0,0,St,Et.width,Et.height,1,xt,Bt,0,0)}v.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,et,0,0,0,Et.width,Et.height,dt.depth,xt,Et.data,0,0)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,et,Lt,Et.width,Et.height,dt.depth,0,Et.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Dt?B&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,et,0,0,0,Et.width,Et.height,dt.depth,xt,Pt,Et.data):e.texImage3D(n.TEXTURE_2D_ARRAY,et,Lt,Et.width,Et.height,dt.depth,0,xt,Pt,Et.data)}else{Dt&&kt&&e.texStorage2D(n.TEXTURE_2D,mt,Lt,Vt[0].width,Vt[0].height);for(let et=0,Q=Vt.length;et<Q;et++)Et=Vt[et],v.format!==ni?xt!==null?Dt?B&&e.compressedTexSubImage2D(n.TEXTURE_2D,et,0,0,Et.width,Et.height,xt,Et.data):e.compressedTexImage2D(n.TEXTURE_2D,et,Lt,Et.width,Et.height,0,Et.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Dt?B&&e.texSubImage2D(n.TEXTURE_2D,et,0,0,Et.width,Et.height,xt,Pt,Et.data):e.texImage2D(n.TEXTURE_2D,et,Lt,Et.width,Et.height,0,xt,Pt,Et.data)}else if(v.isDataArrayTexture)if(Dt){if(kt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,mt,Lt,dt.width,dt.height,dt.depth),B)if(v.layerUpdates.size>0){const et=gd(dt.width,dt.height,v.format,v.type);for(const Q of v.layerUpdates){const wt=dt.data.subarray(Q*et/dt.data.BYTES_PER_ELEMENT,(Q+1)*et/dt.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Q,dt.width,dt.height,1,xt,Pt,wt)}v.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,dt.width,dt.height,dt.depth,xt,Pt,dt.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,Lt,dt.width,dt.height,dt.depth,0,xt,Pt,dt.data);else if(v.isData3DTexture)Dt?(kt&&e.texStorage3D(n.TEXTURE_3D,mt,Lt,dt.width,dt.height,dt.depth),B&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,dt.width,dt.height,dt.depth,xt,Pt,dt.data)):e.texImage3D(n.TEXTURE_3D,0,Lt,dt.width,dt.height,dt.depth,0,xt,Pt,dt.data);else if(v.isFramebufferTexture){if(kt)if(Dt)e.texStorage2D(n.TEXTURE_2D,mt,Lt,dt.width,dt.height);else{let et=dt.width,Q=dt.height;for(let wt=0;wt<mt;wt++)e.texImage2D(n.TEXTURE_2D,wt,Lt,et,Q,0,xt,Pt,null),et>>=1,Q>>=1}}else if(Vt.length>0){if(Dt&&kt){const et=K(Vt[0]);e.texStorage2D(n.TEXTURE_2D,mt,Lt,et.width,et.height)}for(let et=0,Q=Vt.length;et<Q;et++)Et=Vt[et],Dt?B&&e.texSubImage2D(n.TEXTURE_2D,et,0,0,xt,Pt,Et):e.texImage2D(n.TEXTURE_2D,et,Lt,xt,Pt,Et);v.generateMipmaps=!1}else if(Dt){if(kt){const et=K(dt);e.texStorage2D(n.TEXTURE_2D,mt,Lt,et.width,et.height)}B&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,xt,Pt,dt)}else e.texImage2D(n.TEXTURE_2D,0,Lt,xt,Pt,dt);m(v)&&p(W),ut.__version=G.version,v.onUpdate&&v.onUpdate(v)}w.__version=v.version}function rt(w,v,C){if(v.image.length!==6)return;const W=It(w,v),z=v.source;e.bindTexture(n.TEXTURE_CUBE_MAP,w.__webglTexture,n.TEXTURE0+C);const G=i.get(z);if(z.version!==G.__version||W===!0){e.activeTexture(n.TEXTURE0+C);const ut=we.getPrimaries(we.workingColorSpace),ct=v.colorSpace===os?null:we.getPrimaries(v.colorSpace),pt=v.colorSpace===os||ut===ct?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,pt);const Rt=v.isCompressedTexture||v.image[0].isCompressedTexture,dt=v.image[0]&&v.image[0].isDataTexture,xt=[];for(let Q=0;Q<6;Q++)!Rt&&!dt?xt[Q]=y(v.image[Q],!0,s.maxCubemapSize):xt[Q]=dt?v.image[Q].image:v.image[Q],xt[Q]=X(v,xt[Q]);const Pt=xt[0],Lt=o.convert(v.format,v.colorSpace),Et=o.convert(v.type),Vt=b(v.internalFormat,Lt,Et,v.colorSpace),Dt=v.isVideoTexture!==!0,kt=G.__version===void 0||W===!0,B=z.dataReady;let mt=S(v,Pt);_t(n.TEXTURE_CUBE_MAP,v);let et;if(Rt){Dt&&kt&&e.texStorage2D(n.TEXTURE_CUBE_MAP,mt,Vt,Pt.width,Pt.height);for(let Q=0;Q<6;Q++){et=xt[Q].mipmaps;for(let wt=0;wt<et.length;wt++){const St=et[wt];v.format!==ni?Lt!==null?Dt?B&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,wt,0,0,St.width,St.height,Lt,St.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,wt,Vt,St.width,St.height,0,St.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Dt?B&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,wt,0,0,St.width,St.height,Lt,Et,St.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,wt,Vt,St.width,St.height,0,Lt,Et,St.data)}}}else{if(et=v.mipmaps,Dt&&kt){et.length>0&&mt++;const Q=K(xt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,mt,Vt,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(dt){Dt?B&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,xt[Q].width,xt[Q].height,Lt,Et,xt[Q].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Vt,xt[Q].width,xt[Q].height,0,Lt,Et,xt[Q].data);for(let wt=0;wt<et.length;wt++){const Bt=et[wt].image[Q].image;Dt?B&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,wt+1,0,0,Bt.width,Bt.height,Lt,Et,Bt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,wt+1,Vt,Bt.width,Bt.height,0,Lt,Et,Bt.data)}}else{Dt?B&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,Lt,Et,xt[Q]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Vt,Lt,Et,xt[Q]);for(let wt=0;wt<et.length;wt++){const St=et[wt];Dt?B&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,wt+1,0,0,Lt,Et,St.image[Q]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,wt+1,Vt,Lt,Et,St.image[Q])}}}m(v)&&p(n.TEXTURE_CUBE_MAP),G.__version=z.version,v.onUpdate&&v.onUpdate(v)}w.__version=v.version}function ft(w,v,C,W,z,G){const ut=o.convert(C.format,C.colorSpace),ct=o.convert(C.type),pt=b(C.internalFormat,ut,ct,C.colorSpace);if(!i.get(v).__hasExternalTextures){const dt=Math.max(1,v.width>>G),xt=Math.max(1,v.height>>G);z===n.TEXTURE_3D||z===n.TEXTURE_2D_ARRAY?e.texImage3D(z,G,pt,dt,xt,v.depth,0,ut,ct,null):e.texImage2D(z,G,pt,dt,xt,0,ut,ct,null)}e.bindFramebuffer(n.FRAMEBUFFER,w),N(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,W,z,i.get(C).__webglTexture,0,L(v)):(z===n.TEXTURE_2D||z>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&z<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,W,z,i.get(C).__webglTexture,G),e.bindFramebuffer(n.FRAMEBUFFER,null)}function vt(w,v,C){if(n.bindRenderbuffer(n.RENDERBUFFER,w),v.depthBuffer){const W=v.depthTexture,z=W&&W.isDepthTexture?W.type:null,G=M(v.stencilBuffer,z),ut=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ct=L(v);N(v)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ct,G,v.width,v.height):C?n.renderbufferStorageMultisample(n.RENDERBUFFER,ct,G,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,G,v.width,v.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,ut,n.RENDERBUFFER,w)}else{const W=v.textures;for(let z=0;z<W.length;z++){const G=W[z],ut=o.convert(G.format,G.colorSpace),ct=o.convert(G.type),pt=b(G.internalFormat,ut,ct,G.colorSpace),Rt=L(v);C&&N(v)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Rt,pt,v.width,v.height):N(v)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Rt,pt,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,pt,v.width,v.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function F(w,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,w),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(v.depthTexture).__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),J(v.depthTexture,0);const W=i.get(v.depthTexture).__webglTexture,z=L(v);if(v.depthTexture.format===uo)N(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,W,0,z):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,W,0);else if(v.depthTexture.format===wo)N(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,W,0,z):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,W,0);else throw new Error("Unknown depthTexture format")}function lt(w){const v=i.get(w),C=w.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==w.depthTexture){const W=w.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),W){const z=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,W.removeEventListener("dispose",z)};W.addEventListener("dispose",z),v.__depthDisposeCallback=z}v.__boundDepthTexture=W}if(w.depthTexture&&!v.__autoAllocateDepthBuffer){if(C)throw new Error("target.depthTexture not supported in Cube render targets");F(v.__webglFramebuffer,w)}else if(C){v.__webglDepthbuffer=[];for(let W=0;W<6;W++)if(e.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[W]),v.__webglDepthbuffer[W]===void 0)v.__webglDepthbuffer[W]=n.createRenderbuffer(),vt(v.__webglDepthbuffer[W],w,!1);else{const z=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,G=v.__webglDepthbuffer[W];n.bindRenderbuffer(n.RENDERBUFFER,G),n.framebufferRenderbuffer(n.FRAMEBUFFER,z,n.RENDERBUFFER,G)}}else if(e.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=n.createRenderbuffer(),vt(v.__webglDepthbuffer,w,!1);else{const W=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,z=v.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,z),n.framebufferRenderbuffer(n.FRAMEBUFFER,W,n.RENDERBUFFER,z)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function ot(w,v,C){const W=i.get(w);v!==void 0&&ft(W.__webglFramebuffer,w,w.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),C!==void 0&&lt(w)}function ht(w){const v=w.texture,C=i.get(w),W=i.get(v);w.addEventListener("dispose",I);const z=w.textures,G=w.isWebGLCubeRenderTarget===!0,ut=z.length>1;if(ut||(W.__webglTexture===void 0&&(W.__webglTexture=n.createTexture()),W.__version=v.version,r.memory.textures++),G){C.__webglFramebuffer=[];for(let ct=0;ct<6;ct++)if(v.mipmaps&&v.mipmaps.length>0){C.__webglFramebuffer[ct]=[];for(let pt=0;pt<v.mipmaps.length;pt++)C.__webglFramebuffer[ct][pt]=n.createFramebuffer()}else C.__webglFramebuffer[ct]=n.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){C.__webglFramebuffer=[];for(let ct=0;ct<v.mipmaps.length;ct++)C.__webglFramebuffer[ct]=n.createFramebuffer()}else C.__webglFramebuffer=n.createFramebuffer();if(ut)for(let ct=0,pt=z.length;ct<pt;ct++){const Rt=i.get(z[ct]);Rt.__webglTexture===void 0&&(Rt.__webglTexture=n.createTexture(),r.memory.textures++)}if(w.samples>0&&N(w)===!1){C.__webglMultisampledFramebuffer=n.createFramebuffer(),C.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,C.__webglMultisampledFramebuffer);for(let ct=0;ct<z.length;ct++){const pt=z[ct];C.__webglColorRenderbuffer[ct]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,C.__webglColorRenderbuffer[ct]);const Rt=o.convert(pt.format,pt.colorSpace),dt=o.convert(pt.type),xt=b(pt.internalFormat,Rt,dt,pt.colorSpace,w.isXRRenderTarget===!0),Pt=L(w);n.renderbufferStorageMultisample(n.RENDERBUFFER,Pt,xt,w.width,w.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ct,n.RENDERBUFFER,C.__webglColorRenderbuffer[ct])}n.bindRenderbuffer(n.RENDERBUFFER,null),w.depthBuffer&&(C.__webglDepthRenderbuffer=n.createRenderbuffer(),vt(C.__webglDepthRenderbuffer,w,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(G){e.bindTexture(n.TEXTURE_CUBE_MAP,W.__webglTexture),_t(n.TEXTURE_CUBE_MAP,v);for(let ct=0;ct<6;ct++)if(v.mipmaps&&v.mipmaps.length>0)for(let pt=0;pt<v.mipmaps.length;pt++)ft(C.__webglFramebuffer[ct][pt],w,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,pt);else ft(C.__webglFramebuffer[ct],w,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0);m(v)&&p(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(ut){for(let ct=0,pt=z.length;ct<pt;ct++){const Rt=z[ct],dt=i.get(Rt);e.bindTexture(n.TEXTURE_2D,dt.__webglTexture),_t(n.TEXTURE_2D,Rt),ft(C.__webglFramebuffer,w,Rt,n.COLOR_ATTACHMENT0+ct,n.TEXTURE_2D,0),m(Rt)&&p(n.TEXTURE_2D)}e.unbindTexture()}else{let ct=n.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(ct=w.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(ct,W.__webglTexture),_t(ct,v),v.mipmaps&&v.mipmaps.length>0)for(let pt=0;pt<v.mipmaps.length;pt++)ft(C.__webglFramebuffer[pt],w,v,n.COLOR_ATTACHMENT0,ct,pt);else ft(C.__webglFramebuffer,w,v,n.COLOR_ATTACHMENT0,ct,0);m(v)&&p(ct),e.unbindTexture()}w.depthBuffer&&lt(w)}function Mt(w){const v=w.textures;for(let C=0,W=v.length;C<W;C++){const z=v[C];if(m(z)){const G=w.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,ut=i.get(z).__webglTexture;e.bindTexture(G,ut),p(G),e.unbindTexture()}}}const tt=[],g=[];function T(w){if(w.samples>0){if(N(w)===!1){const v=w.textures,C=w.width,W=w.height;let z=n.COLOR_BUFFER_BIT;const G=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ut=i.get(w),ct=v.length>1;if(ct)for(let pt=0;pt<v.length;pt++)e.bindFramebuffer(n.FRAMEBUFFER,ut.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+pt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,ut.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+pt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,ut.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,ut.__webglFramebuffer);for(let pt=0;pt<v.length;pt++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(z|=n.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(z|=n.STENCIL_BUFFER_BIT)),ct){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ut.__webglColorRenderbuffer[pt]);const Rt=i.get(v[pt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Rt,0)}n.blitFramebuffer(0,0,C,W,0,0,C,W,z,n.NEAREST),l===!0&&(tt.length=0,g.length=0,tt.push(n.COLOR_ATTACHMENT0+pt),w.depthBuffer&&w.resolveDepthBuffer===!1&&(tt.push(G),g.push(G),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,g)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,tt))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ct)for(let pt=0;pt<v.length;pt++){e.bindFramebuffer(n.FRAMEBUFFER,ut.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+pt,n.RENDERBUFFER,ut.__webglColorRenderbuffer[pt]);const Rt=i.get(v[pt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,ut.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+pt,n.TEXTURE_2D,Rt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,ut.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&l){const v=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[v])}}}function L(w){return Math.min(s.maxSamples,w.samples)}function N(w){const v=i.get(w);return w.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function D(w){const v=r.render.frame;h.get(w)!==v&&(h.set(w,v),w.update())}function X(w,v){const C=w.colorSpace,W=w.format,z=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||C!==ds&&C!==os&&(we.getTransfer(C)===Ne?(W!==ni||z!==ki)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",C)),v}function K(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(c.width=w.naturalWidth||w.width,c.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(c.width=w.displayWidth,c.height=w.displayHeight):(c.width=w.width,c.height=w.height),c}this.allocateTextureUnit=j,this.resetTextureUnits=E,this.setTexture2D=J,this.setTexture2DArray=at,this.setTexture3D=V,this.setTextureCube=Z,this.rebindTextures=ot,this.setupRenderTarget=ht,this.updateRenderTargetMipmap=Mt,this.updateMultisampleRenderTarget=T,this.setupDepthRenderbuffer=lt,this.setupFrameBufferTexture=ft,this.useMultisampledRTT=N}function fS(n,t){function e(i,s=os){let o;const r=we.getTransfer(s);if(i===ki)return n.UNSIGNED_BYTE;if(i===fu)return n.UNSIGNED_SHORT_4_4_4_4;if(i===pu)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Yf)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Xf)return n.BYTE;if(i===qf)return n.SHORT;if(i===cr)return n.UNSIGNED_SHORT;if(i===du)return n.INT;if(i===Is)return n.UNSIGNED_INT;if(i===Bi)return n.FLOAT;if(i===_r)return n.HALF_FLOAT;if(i===$f)return n.ALPHA;if(i===jf)return n.RGB;if(i===ni)return n.RGBA;if(i===Kf)return n.LUMINANCE;if(i===Zf)return n.LUMINANCE_ALPHA;if(i===uo)return n.DEPTH_COMPONENT;if(i===wo)return n.DEPTH_STENCIL;if(i===Jf)return n.RED;if(i===mu)return n.RED_INTEGER;if(i===Qf)return n.RG;if(i===gu)return n.RG_INTEGER;if(i===_u)return n.RGBA_INTEGER;if(i===sa||i===oa||i===ra||i===aa)if(r===Ne)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(i===sa)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===oa)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ra)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===aa)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(i===sa)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===oa)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ra)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===aa)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===cc||i===uc||i===hc||i===dc)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(i===cc)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===uc)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===hc)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===dc)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===fc||i===pc||i===mc)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(i===fc||i===pc)return r===Ne?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(i===mc)return r===Ne?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===gc||i===_c||i===vc||i===xc||i===yc||i===Mc||i===wc||i===Sc||i===Ec||i===bc||i===Tc||i===Ac||i===Rc||i===Pc)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(i===gc)return r===Ne?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===_c)return r===Ne?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===vc)return r===Ne?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===xc)return r===Ne?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===yc)return r===Ne?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Mc)return r===Ne?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===wc)return r===Ne?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Sc)return r===Ne?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Ec)return r===Ne?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===bc)return r===Ne?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Tc)return r===Ne?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Ac)return r===Ne?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Rc)return r===Ne?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Pc)return r===Ne?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===la||i===Cc||i===Ic)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(i===la)return r===Ne?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Cc)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Ic)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===tp||i===Lc||i===Dc||i===Uc)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(i===la)return o.COMPRESSED_RED_RGTC1_EXT;if(i===Lc)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Dc)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Uc)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Mo?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}class pS extends ze{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class $t extends an{constructor(){super(),this.isGroup=!0,this.type="Group"}}const mS={type:"move"};class Ll{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new $t,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new $t,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new $t,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new q),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,o=null,r=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){r=!0;for(const y of t.hand.values()){const m=e.getJointPose(y,i),p=this._getHandJoint(c,y);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,_=.005;c.inputState.pinching&&d>f+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(o=e.getPose(t.gripSpace,i),o!==null&&(l.matrix.fromArray(o.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,o.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(o.linearVelocity)):l.hasLinearVelocity=!1,o.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(o.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&o!==null&&(s=o),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(mS)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=o!==null),c!==null&&(c.visible=r!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new $t;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const gS=`
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

}`;class vS{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){const s=new wn,o=t.properties.get(s);o.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new An({vertexShader:gS,fragmentShader:_S,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new R(new za(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class xS extends bo{constructor(t,e){super();const i=this;let s=null,o=1,r=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,_=null;const y=new vS,m=e.getContextAttributes();let p=null,b=null;const M=[],S=[],O=new Ot;let I=null;const P=new ze;P.layers.enable(1),P.viewport=new Ae;const U=new ze;U.layers.enable(2),U.viewport=new Ae;const nt=[P,U],x=new pS;x.layers.enable(1),x.layers.enable(2);let E=null,j=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(rt){let ft=M[rt];return ft===void 0&&(ft=new Ll,M[rt]=ft),ft.getTargetRaySpace()},this.getControllerGrip=function(rt){let ft=M[rt];return ft===void 0&&(ft=new Ll,M[rt]=ft),ft.getGripSpace()},this.getHand=function(rt){let ft=M[rt];return ft===void 0&&(ft=new Ll,M[rt]=ft),ft.getHandSpace()};function k(rt){const ft=S.indexOf(rt.inputSource);if(ft===-1)return;const vt=M[ft];vt!==void 0&&(vt.update(rt.inputSource,rt.frame,c||r),vt.dispatchEvent({type:rt.type,data:rt.inputSource}))}function J(){s.removeEventListener("select",k),s.removeEventListener("selectstart",k),s.removeEventListener("selectend",k),s.removeEventListener("squeeze",k),s.removeEventListener("squeezestart",k),s.removeEventListener("squeezeend",k),s.removeEventListener("end",J),s.removeEventListener("inputsourceschange",at);for(let rt=0;rt<M.length;rt++){const ft=S[rt];ft!==null&&(S[rt]=null,M[rt].disconnect(ft))}E=null,j=null,y.reset(),t.setRenderTarget(p),f=null,d=null,u=null,s=null,b=null,zt.stop(),i.isPresenting=!1,t.setPixelRatio(I),t.setSize(O.width,O.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(rt){o=rt,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(rt){a=rt,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||r},this.setReferenceSpace=function(rt){c=rt},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(rt){if(s=rt,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",k),s.addEventListener("selectstart",k),s.addEventListener("selectend",k),s.addEventListener("squeeze",k),s.addEventListener("squeezestart",k),s.addEventListener("squeezeend",k),s.addEventListener("end",J),s.addEventListener("inputsourceschange",at),m.xrCompatible!==!0&&await e.makeXRCompatible(),I=t.getPixelRatio(),t.getSize(O),s.renderState.layers===void 0){const ft={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:o};f=new XRWebGLLayer(s,e,ft),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),b=new Ls(f.framebufferWidth,f.framebufferHeight,{format:ni,type:ki,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let ft=null,vt=null,F=null;m.depth&&(F=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ft=m.stencil?wo:uo,vt=m.stencil?Mo:Is);const lt={colorFormat:e.RGBA8,depthFormat:F,scaleFactor:o};u=new XRWebGLBinding(s,e),d=u.createProjectionLayer(lt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),b=new Ls(d.textureWidth,d.textureHeight,{format:ni,type:ki,depthTexture:new mp(d.textureWidth,d.textureHeight,vt,void 0,void 0,void 0,void 0,void 0,void 0,ft),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,r=await s.requestReferenceSpace(a),zt.setContext(s),zt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function at(rt){for(let ft=0;ft<rt.removed.length;ft++){const vt=rt.removed[ft],F=S.indexOf(vt);F>=0&&(S[F]=null,M[F].disconnect(vt))}for(let ft=0;ft<rt.added.length;ft++){const vt=rt.added[ft];let F=S.indexOf(vt);if(F===-1){for(let ot=0;ot<M.length;ot++)if(ot>=S.length){S.push(vt),F=ot;break}else if(S[ot]===null){S[ot]=vt,F=ot;break}if(F===-1)break}const lt=M[F];lt&&lt.connect(vt)}}const V=new q,Z=new q;function H(rt,ft,vt){V.setFromMatrixPosition(ft.matrixWorld),Z.setFromMatrixPosition(vt.matrixWorld);const F=V.distanceTo(Z),lt=ft.projectionMatrix.elements,ot=vt.projectionMatrix.elements,ht=lt[14]/(lt[10]-1),Mt=lt[14]/(lt[10]+1),tt=(lt[9]+1)/lt[5],g=(lt[9]-1)/lt[5],T=(lt[8]-1)/lt[0],L=(ot[8]+1)/ot[0],N=ht*T,D=ht*L,X=F/(-T+L),K=X*-T;if(ft.matrixWorld.decompose(rt.position,rt.quaternion,rt.scale),rt.translateX(K),rt.translateZ(X),rt.matrixWorld.compose(rt.position,rt.quaternion,rt.scale),rt.matrixWorldInverse.copy(rt.matrixWorld).invert(),lt[10]===-1)rt.projectionMatrix.copy(ft.projectionMatrix),rt.projectionMatrixInverse.copy(ft.projectionMatrixInverse);else{const w=ht+X,v=Mt+X,C=N-K,W=D+(F-K),z=tt*Mt/v*w,G=g*Mt/v*w;rt.projectionMatrix.makePerspective(C,W,z,G,w,v),rt.projectionMatrixInverse.copy(rt.projectionMatrix).invert()}}function gt(rt,ft){ft===null?rt.matrixWorld.copy(rt.matrix):rt.matrixWorld.multiplyMatrices(ft.matrixWorld,rt.matrix),rt.matrixWorldInverse.copy(rt.matrixWorld).invert()}this.updateCamera=function(rt){if(s===null)return;let ft=rt.near,vt=rt.far;y.texture!==null&&(y.depthNear>0&&(ft=y.depthNear),y.depthFar>0&&(vt=y.depthFar)),x.near=U.near=P.near=ft,x.far=U.far=P.far=vt,(E!==x.near||j!==x.far)&&(s.updateRenderState({depthNear:x.near,depthFar:x.far}),E=x.near,j=x.far);const F=rt.parent,lt=x.cameras;gt(x,F);for(let ot=0;ot<lt.length;ot++)gt(lt[ot],F);lt.length===2?H(x,P,U):x.projectionMatrix.copy(P.projectionMatrix),yt(rt,x,F)};function yt(rt,ft,vt){vt===null?rt.matrix.copy(ft.matrixWorld):(rt.matrix.copy(vt.matrixWorld),rt.matrix.invert(),rt.matrix.multiply(ft.matrixWorld)),rt.matrix.decompose(rt.position,rt.quaternion,rt.scale),rt.updateMatrixWorld(!0),rt.projectionMatrix.copy(ft.projectionMatrix),rt.projectionMatrixInverse.copy(ft.projectionMatrixInverse),rt.isPerspectiveCamera&&(rt.fov=ur*2*Math.atan(1/rt.projectionMatrix.elements[5]),rt.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(rt){l=rt,d!==null&&(d.fixedFoveation=rt),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=rt)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(x)};let _t=null;function It(rt,ft){if(h=ft.getViewerPose(c||r),_=ft,h!==null){const vt=h.views;f!==null&&(t.setRenderTargetFramebuffer(b,f.framebuffer),t.setRenderTarget(b));let F=!1;vt.length!==x.cameras.length&&(x.cameras.length=0,F=!0);for(let ot=0;ot<vt.length;ot++){const ht=vt[ot];let Mt=null;if(f!==null)Mt=f.getViewport(ht);else{const g=u.getViewSubImage(d,ht);Mt=g.viewport,ot===0&&(t.setRenderTargetTextures(b,g.colorTexture,d.ignoreDepthValues?void 0:g.depthStencilTexture),t.setRenderTarget(b))}let tt=nt[ot];tt===void 0&&(tt=new ze,tt.layers.enable(ot),tt.viewport=new Ae,nt[ot]=tt),tt.matrix.fromArray(ht.transform.matrix),tt.matrix.decompose(tt.position,tt.quaternion,tt.scale),tt.projectionMatrix.fromArray(ht.projectionMatrix),tt.projectionMatrixInverse.copy(tt.projectionMatrix).invert(),tt.viewport.set(Mt.x,Mt.y,Mt.width,Mt.height),ot===0&&(x.matrix.copy(tt.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),F===!0&&x.cameras.push(tt)}const lt=s.enabledFeatures;if(lt&&lt.includes("depth-sensing")){const ot=u.getDepthInformation(vt[0]);ot&&ot.isValid&&ot.texture&&y.init(t,ot,s.renderState)}}for(let vt=0;vt<M.length;vt++){const F=S[vt],lt=M[vt];F!==null&&lt!==void 0&&lt.update(F,ft,c||r)}_t&&_t(rt,ft),ft.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ft}),_=null}const zt=new fp;zt.setAnimationLoop(It),this.setAnimationLoop=function(rt){_t=rt},this.dispose=function(){}}}const Ms=new Mi,yS=new Fe;function MS(n,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,hp(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,b,M,S){p.isMeshBasicMaterial||p.isMeshLambertMaterial?o(m,p):p.isMeshToonMaterial?(o(m,p),u(m,p)):p.isMeshPhongMaterial?(o(m,p),h(m,p)):p.isMeshStandardMaterial?(o(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,S)):p.isMeshMatcapMaterial?(o(m,p),_(m,p)):p.isMeshDepthMaterial?o(m,p):p.isMeshDistanceMaterial?(o(m,p),y(m,p)):p.isMeshNormalMaterial?o(m,p):p.isLineBasicMaterial?(r(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,b,M):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function o(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Tn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Tn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const b=t.get(p),M=b.envMap,S=b.envMapRotation;M&&(m.envMap.value=M,Ms.copy(S),Ms.x*=-1,Ms.y*=-1,Ms.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Ms.y*=-1,Ms.z*=-1),m.envMapRotation.value.setFromMatrix4(yS.makeRotationFromEuler(Ms)),m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function r(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,b,M){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*b,m.scale.value=M*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,b){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Tn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,p){p.matcap&&(m.matcap.value=p.matcap)}function y(m,p){const b=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function wS(n,t,e,i){let s={},o={},r=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,M){const S=M.program;i.uniformBlockBinding(b,S)}function c(b,M){let S=s[b.id];S===void 0&&(_(b),S=h(b),s[b.id]=S,b.addEventListener("dispose",m));const O=M.program;i.updateUBOMapping(b,O);const I=t.render.frame;o[b.id]!==I&&(d(b),o[b.id]=I)}function h(b){const M=u();b.__bindingPointIndex=M;const S=n.createBuffer(),O=b.__size,I=b.usage;return n.bindBuffer(n.UNIFORM_BUFFER,S),n.bufferData(n.UNIFORM_BUFFER,O,I),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,M,S),S}function u(){for(let b=0;b<a;b++)if(r.indexOf(b)===-1)return r.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(b){const M=s[b.id],S=b.uniforms,O=b.__cache;n.bindBuffer(n.UNIFORM_BUFFER,M);for(let I=0,P=S.length;I<P;I++){const U=Array.isArray(S[I])?S[I]:[S[I]];for(let nt=0,x=U.length;nt<x;nt++){const E=U[nt];if(f(E,I,nt,O)===!0){const j=E.__offset,k=Array.isArray(E.value)?E.value:[E.value];let J=0;for(let at=0;at<k.length;at++){const V=k[at],Z=y(V);typeof V=="number"||typeof V=="boolean"?(E.__data[0]=V,n.bufferSubData(n.UNIFORM_BUFFER,j+J,E.__data)):V.isMatrix3?(E.__data[0]=V.elements[0],E.__data[1]=V.elements[1],E.__data[2]=V.elements[2],E.__data[3]=0,E.__data[4]=V.elements[3],E.__data[5]=V.elements[4],E.__data[6]=V.elements[5],E.__data[7]=0,E.__data[8]=V.elements[6],E.__data[9]=V.elements[7],E.__data[10]=V.elements[8],E.__data[11]=0):(V.toArray(E.__data,J),J+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,j,E.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(b,M,S,O){const I=b.value,P=M+"_"+S;if(O[P]===void 0)return typeof I=="number"||typeof I=="boolean"?O[P]=I:O[P]=I.clone(),!0;{const U=O[P];if(typeof I=="number"||typeof I=="boolean"){if(U!==I)return O[P]=I,!0}else if(U.equals(I)===!1)return U.copy(I),!0}return!1}function _(b){const M=b.uniforms;let S=0;const O=16;for(let P=0,U=M.length;P<U;P++){const nt=Array.isArray(M[P])?M[P]:[M[P]];for(let x=0,E=nt.length;x<E;x++){const j=nt[x],k=Array.isArray(j.value)?j.value:[j.value];for(let J=0,at=k.length;J<at;J++){const V=k[J],Z=y(V),H=S%O,gt=H%Z.boundary,yt=H+gt;S+=gt,yt!==0&&O-yt<Z.storage&&(S+=O-yt),j.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),j.__offset=S,S+=Z.storage}}}const I=S%O;return I>0&&(S+=O-I),b.__size=S,b.__cache={},this}function y(b){const M={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(M.boundary=4,M.storage=4):b.isVector2?(M.boundary=8,M.storage=8):b.isVector3||b.isColor?(M.boundary=16,M.storage=12):b.isVector4?(M.boundary=16,M.storage=16):b.isMatrix3?(M.boundary=48,M.storage=48):b.isMatrix4?(M.boundary=64,M.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),M}function m(b){const M=b.target;M.removeEventListener("dispose",m);const S=r.indexOf(M.__bindingPointIndex);r.splice(S,1),n.deleteBuffer(s[M.id]),delete s[M.id],delete o[M.id]}function p(){for(const b in s)n.deleteBuffer(s[b]);r=[],s={},o={}}return{bind:l,update:c,dispose:p}}class ai{constructor(t={}){const{canvas:e=uv(),context:i=null,depth:s=!0,stencil:o=!1,alpha:r=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=r;const f=new Uint32Array(4),_=new Int32Array(4);let y=null,m=null;const p=[],b=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Jn,this.toneMapping=as,this.toneMappingExposure=1;const M=this;let S=!1,O=0,I=0,P=null,U=-1,nt=null;const x=new Ae,E=new Ae;let j=null;const k=new he(0);let J=0,at=e.width,V=e.height,Z=1,H=null,gt=null;const yt=new Ae(0,0,at,V),_t=new Ae(0,0,at,V);let It=!1;const zt=new Mu;let rt=!1,ft=!1;const vt=new Fe,F=new Fe,lt=new q,ot=new Ae,ht={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Mt=!1;function tt(){return P===null?Z:1}let g=i;function T(A,Y){return e.getContext(A,Y)}try{const A={alpha:!0,depth:s,stencil:o,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${hu}`),e.addEventListener("webglcontextlost",Q,!1),e.addEventListener("webglcontextrestored",wt,!1),e.addEventListener("webglcontextcreationerror",St,!1),g===null){const Y="webgl2";if(g=T(Y,A),g===null)throw T(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let L,N,D,X,K,w,v,C,W,z,G,ut,ct,pt,Rt,dt,xt,Pt,Lt,Et,Vt,Dt,kt,B;function mt(){L=new RM(g),L.init(),Dt=new fS(g,L),N=new wM(g,L,t,Dt),D=new uS(g),N.reverseDepthBuffer&&D.buffers.depth.setReversed(!0),X=new IM(g),K=new jw,w=new dS(g,L,D,K,N,Dt,X),v=new EM(M),C=new AM(M),W=new Bv(g),kt=new yM(g,W),z=new PM(g,W,X,kt),G=new DM(g,z,W,X),Lt=new LM(g,N,w),dt=new SM(K),ut=new $w(M,v,C,L,N,kt,dt),ct=new MS(M,K),pt=new Zw,Rt=new iS(L),Pt=new xM(M,v,C,D,G,d,l),xt=new lS(M,G,N),B=new wS(g,X,N,D),Et=new MM(g,L,X),Vt=new CM(g,L,X),X.programs=ut.programs,M.capabilities=N,M.extensions=L,M.properties=K,M.renderLists=pt,M.shadowMap=xt,M.state=D,M.info=X}mt();const et=new xS(M,g);this.xr=et,this.getContext=function(){return g},this.getContextAttributes=function(){return g.getContextAttributes()},this.forceContextLoss=function(){const A=L.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=L.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(A){A!==void 0&&(Z=A,this.setSize(at,V,!1))},this.getSize=function(A){return A.set(at,V)},this.setSize=function(A,Y,it=!0){if(et.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}at=A,V=Y,e.width=Math.floor(A*Z),e.height=Math.floor(Y*Z),it===!0&&(e.style.width=A+"px",e.style.height=Y+"px"),this.setViewport(0,0,A,Y)},this.getDrawingBufferSize=function(A){return A.set(at*Z,V*Z).floor()},this.setDrawingBufferSize=function(A,Y,it){at=A,V=Y,Z=it,e.width=Math.floor(A*it),e.height=Math.floor(Y*it),this.setViewport(0,0,A,Y)},this.getCurrentViewport=function(A){return A.copy(x)},this.getViewport=function(A){return A.copy(yt)},this.setViewport=function(A,Y,it,st){A.isVector4?yt.set(A.x,A.y,A.z,A.w):yt.set(A,Y,it,st),D.viewport(x.copy(yt).multiplyScalar(Z).round())},this.getScissor=function(A){return A.copy(_t)},this.setScissor=function(A,Y,it,st){A.isVector4?_t.set(A.x,A.y,A.z,A.w):_t.set(A,Y,it,st),D.scissor(E.copy(_t).multiplyScalar(Z).round())},this.getScissorTest=function(){return It},this.setScissorTest=function(A){D.setScissorTest(It=A)},this.setOpaqueSort=function(A){H=A},this.setTransparentSort=function(A){gt=A},this.getClearColor=function(A){return A.copy(Pt.getClearColor())},this.setClearColor=function(){Pt.setClearColor.apply(Pt,arguments)},this.getClearAlpha=function(){return Pt.getClearAlpha()},this.setClearAlpha=function(){Pt.setClearAlpha.apply(Pt,arguments)},this.clear=function(A=!0,Y=!0,it=!0){let st=0;if(A){let $=!1;if(P!==null){const At=P.texture.format;$=At===_u||At===gu||At===mu}if($){const At=P.texture.type,Ut=At===ki||At===Is||At===cr||At===Mo||At===fu||At===pu,Gt=Pt.getClearColor(),Ht=Pt.getClearAlpha(),qt=Gt.r,jt=Gt.g,Wt=Gt.b;Ut?(f[0]=qt,f[1]=jt,f[2]=Wt,f[3]=Ht,g.clearBufferuiv(g.COLOR,0,f)):(_[0]=qt,_[1]=jt,_[2]=Wt,_[3]=Ht,g.clearBufferiv(g.COLOR,0,_))}else st|=g.COLOR_BUFFER_BIT}Y&&(st|=g.DEPTH_BUFFER_BIT,g.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),it&&(st|=g.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),g.clear(st)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Q,!1),e.removeEventListener("webglcontextrestored",wt,!1),e.removeEventListener("webglcontextcreationerror",St,!1),pt.dispose(),Rt.dispose(),K.dispose(),v.dispose(),C.dispose(),G.dispose(),kt.dispose(),B.dispose(),ut.dispose(),et.dispose(),et.removeEventListener("sessionstart",ge),et.removeEventListener("sessionend",xe),pe.stop()};function Q(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function wt(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const A=X.autoReset,Y=xt.enabled,it=xt.autoUpdate,st=xt.needsUpdate,$=xt.type;mt(),X.autoReset=A,xt.enabled=Y,xt.autoUpdate=it,xt.needsUpdate=st,xt.type=$}function St(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Bt(A){const Y=A.target;Y.removeEventListener("dispose",Bt),Kt(Y)}function Kt(A){Qt(A),K.remove(A)}function Qt(A){const Y=K.get(A).programs;Y!==void 0&&(Y.forEach(function(it){ut.releaseProgram(it)}),A.isShaderMaterial&&ut.releaseShaderCache(A))}this.renderBufferDirect=function(A,Y,it,st,$,At){Y===null&&(Y=ht);const Ut=$.isMesh&&$.matrixWorld.determinant()<0,Gt=Be(A,Y,it,st,$);D.setMaterial(st,Ut);let Ht=it.index,qt=1;if(st.wireframe===!0){if(Ht=z.getWireframeAttribute(it),Ht===void 0)return;qt=2}const jt=it.drawRange,Wt=it.attributes.position;let oe=jt.start*qt,de=(jt.start+jt.count)*qt;At!==null&&(oe=Math.max(oe,At.start*qt),de=Math.min(de,(At.start+At.count)*qt)),Ht!==null?(oe=Math.max(oe,0),de=Math.min(de,Ht.count)):Wt!=null&&(oe=Math.max(oe,0),de=Math.min(de,Wt.count));const Ce=de-oe;if(Ce<0||Ce===1/0)return;kt.setup($,st,Gt,it,Ht);let Ze,fe=Et;if(Ht!==null&&(Ze=W.get(Ht),fe=Vt,fe.setIndex(Ze)),$.isMesh)st.wireframe===!0?(D.setLineWidth(st.wireframeLinewidth*tt()),fe.setMode(g.LINES)):fe.setMode(g.TRIANGLES);else if($.isLine){let Yt=st.linewidth;Yt===void 0&&(Yt=1),D.setLineWidth(Yt*tt()),$.isLineSegments?fe.setMode(g.LINES):$.isLineLoop?fe.setMode(g.LINE_LOOP):fe.setMode(g.LINE_STRIP)}else $.isPoints?fe.setMode(g.POINTS):$.isSprite&&fe.setMode(g.TRIANGLES);if($.isBatchedMesh)if($._multiDrawInstances!==null)fe.renderMultiDrawInstances($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount,$._multiDrawInstances);else if(L.get("WEBGL_multi_draw"))fe.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else{const Yt=$._multiDrawStarts,qe=$._multiDrawCounts,Ct=$._multiDrawCount,De=Ht?W.get(Ht).bytesPerElement:1,Oe=K.get(st).currentProgram.getUniforms();for(let ve=0;ve<Ct;ve++)Oe.setValue(g,"_gl_DrawID",ve),fe.render(Yt[ve]/De,qe[ve])}else if($.isInstancedMesh)fe.renderInstances(oe,Ce,$.count);else if(it.isInstancedBufferGeometry){const Yt=it._maxInstanceCount!==void 0?it._maxInstanceCount:1/0,qe=Math.min(it.instanceCount,Yt);fe.renderInstances(oe,Ce,qe)}else fe.render(oe,Ce)};function Jt(A,Y,it){A.transparent===!0&&A.side===me&&A.forceSinglePass===!1?(A.side=Tn,A.needsUpdate=!0,ne(A,Y,it),A.side=cs,A.needsUpdate=!0,ne(A,Y,it),A.side=me):ne(A,Y,it)}this.compile=function(A,Y,it=null){it===null&&(it=A),m=Rt.get(it),m.init(Y),b.push(m),it.traverseVisible(function($){$.isLight&&$.layers.test(Y.layers)&&(m.pushLight($),$.castShadow&&m.pushShadow($))}),A!==it&&A.traverseVisible(function($){$.isLight&&$.layers.test(Y.layers)&&(m.pushLight($),$.castShadow&&m.pushShadow($))}),m.setupLights();const st=new Set;return A.traverse(function($){if(!($.isMesh||$.isPoints||$.isLine||$.isSprite))return;const At=$.material;if(At)if(Array.isArray(At))for(let Ut=0;Ut<At.length;Ut++){const Gt=At[Ut];Jt(Gt,it,$),st.add(Gt)}else Jt(At,it,$),st.add(At)}),b.pop(),m=null,st},this.compileAsync=function(A,Y,it=null){const st=this.compile(A,Y,it);return new Promise($=>{function At(){if(st.forEach(function(Ut){K.get(Ut).currentProgram.isReady()&&st.delete(Ut)}),st.size===0){$(A);return}setTimeout(At,10)}L.get("KHR_parallel_shader_compile")!==null?At():setTimeout(At,10)})};let ee=null;function ce(A){ee&&ee(A)}function ge(){pe.stop()}function xe(){pe.start()}const pe=new fp;pe.setAnimationLoop(ce),typeof self<"u"&&pe.setContext(self),this.setAnimationLoop=function(A){ee=A,et.setAnimationLoop(A),A===null?pe.stop():pe.start()},et.addEventListener("sessionstart",ge),et.addEventListener("sessionend",xe),this.render=function(A,Y){if(Y!==void 0&&Y.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),et.enabled===!0&&et.isPresenting===!0&&(et.cameraAutoUpdate===!0&&et.updateCamera(Y),Y=et.getCamera()),A.isScene===!0&&A.onBeforeRender(M,A,Y,P),m=Rt.get(A,b.length),m.init(Y),b.push(m),F.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),zt.setFromProjectionMatrix(F),ft=this.localClippingEnabled,rt=dt.init(this.clippingPlanes,ft),y=pt.get(A,p.length),y.init(),p.push(y),et.enabled===!0&&et.isPresenting===!0){const At=M.xr.getDepthSensingMesh();At!==null&&Te(At,Y,-1/0,M.sortObjects)}Te(A,Y,0,M.sortObjects),y.finish(),M.sortObjects===!0&&y.sort(H,gt),Mt=et.enabled===!1||et.isPresenting===!1||et.hasDepthSensing()===!1,Mt&&Pt.addToRenderList(y,A),this.info.render.frame++,rt===!0&&dt.beginShadows();const it=m.state.shadowsArray;xt.render(it,A,Y),rt===!0&&dt.endShadows(),this.info.autoReset===!0&&this.info.reset();const st=y.opaque,$=y.transmissive;if(m.setupLights(),Y.isArrayCamera){const At=Y.cameras;if($.length>0)for(let Ut=0,Gt=At.length;Ut<Gt;Ut++){const Ht=At[Ut];He(st,$,A,Ht)}Mt&&Pt.render(A);for(let Ut=0,Gt=At.length;Ut<Gt;Ut++){const Ht=At[Ut];_e(y,A,Ht,Ht.viewport)}}else $.length>0&&He(st,$,A,Y),Mt&&Pt.render(A),_e(y,A,Y);P!==null&&(w.updateMultisampleRenderTarget(P),w.updateRenderTargetMipmap(P)),A.isScene===!0&&A.onAfterRender(M,A,Y),kt.resetDefaultState(),U=-1,nt=null,b.pop(),b.length>0?(m=b[b.length-1],rt===!0&&dt.setGlobalState(M.clippingPlanes,m.state.camera)):m=null,p.pop(),p.length>0?y=p[p.length-1]:y=null};function Te(A,Y,it,st){if(A.visible===!1)return;if(A.layers.test(Y.layers)){if(A.isGroup)it=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(Y);else if(A.isLight)m.pushLight(A),A.castShadow&&m.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||zt.intersectsSprite(A)){st&&ot.setFromMatrixPosition(A.matrixWorld).applyMatrix4(F);const Ut=G.update(A),Gt=A.material;Gt.visible&&y.push(A,Ut,Gt,it,ot.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||zt.intersectsObject(A))){const Ut=G.update(A),Gt=A.material;if(st&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),ot.copy(A.boundingSphere.center)):(Ut.boundingSphere===null&&Ut.computeBoundingSphere(),ot.copy(Ut.boundingSphere.center)),ot.applyMatrix4(A.matrixWorld).applyMatrix4(F)),Array.isArray(Gt)){const Ht=Ut.groups;for(let qt=0,jt=Ht.length;qt<jt;qt++){const Wt=Ht[qt],oe=Gt[Wt.materialIndex];oe&&oe.visible&&y.push(A,Ut,oe,it,ot.z,Wt)}}else Gt.visible&&y.push(A,Ut,Gt,it,ot.z,null)}}const At=A.children;for(let Ut=0,Gt=At.length;Ut<Gt;Ut++)Te(At[Ut],Y,it,st)}function _e(A,Y,it,st){const $=A.opaque,At=A.transmissive,Ut=A.transparent;m.setupLightsView(it),rt===!0&&dt.setGlobalState(M.clippingPlanes,it),st&&D.viewport(x.copy(st)),$.length>0&&Re($,Y,it),At.length>0&&Re(At,Y,it),Ut.length>0&&Re(Ut,Y,it),D.buffers.depth.setTest(!0),D.buffers.depth.setMask(!0),D.buffers.color.setMask(!0),D.setPolygonOffset(!1)}function He(A,Y,it,st){if((it.isScene===!0?it.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[st.id]===void 0&&(m.state.transmissionRenderTarget[st.id]=new Ls(1,1,{generateMipmaps:!0,type:L.has("EXT_color_buffer_half_float")||L.has("EXT_color_buffer_float")?_r:ki,minFilter:Rs,samples:4,stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:we.workingColorSpace}));const At=m.state.transmissionRenderTarget[st.id],Ut=st.viewport||x;At.setSize(Ut.z,Ut.w);const Gt=M.getRenderTarget();M.setRenderTarget(At),M.getClearColor(k),J=M.getClearAlpha(),J<1&&M.setClearColor(16777215,.5),M.clear(),Mt&&Pt.render(it);const Ht=M.toneMapping;M.toneMapping=as;const qt=st.viewport;if(st.viewport!==void 0&&(st.viewport=void 0),m.setupLightsView(st),rt===!0&&dt.setGlobalState(M.clippingPlanes,st),Re(A,it,st),w.updateMultisampleRenderTarget(At),w.updateRenderTargetMipmap(At),L.has("WEBGL_multisampled_render_to_texture")===!1){let jt=!1;for(let Wt=0,oe=Y.length;Wt<oe;Wt++){const de=Y[Wt],Ce=de.object,Ze=de.geometry,fe=de.material,Yt=de.group;if(fe.side===me&&Ce.layers.test(st.layers)){const qe=fe.side;fe.side=Tn,fe.needsUpdate=!0,Tt(Ce,it,st,Ze,fe,Yt),fe.side=qe,fe.needsUpdate=!0,jt=!0}}jt===!0&&(w.updateMultisampleRenderTarget(At),w.updateRenderTargetMipmap(At))}M.setRenderTarget(Gt),M.setClearColor(k,J),qt!==void 0&&(st.viewport=qt),M.toneMapping=Ht}function Re(A,Y,it){const st=Y.isScene===!0?Y.overrideMaterial:null;for(let $=0,At=A.length;$<At;$++){const Ut=A[$],Gt=Ut.object,Ht=Ut.geometry,qt=st===null?Ut.material:st,jt=Ut.group;Gt.layers.test(it.layers)&&Tt(Gt,Y,it,Ht,qt,jt)}}function Tt(A,Y,it,st,$,At){A.onBeforeRender(M,Y,it,st,$,At),A.modelViewMatrix.multiplyMatrices(it.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),$.onBeforeRender(M,Y,it,st,A,At),$.transparent===!0&&$.side===me&&$.forceSinglePass===!1?($.side=Tn,$.needsUpdate=!0,M.renderBufferDirect(it,Y,st,$,A,At),$.side=cs,$.needsUpdate=!0,M.renderBufferDirect(it,Y,st,$,A,At),$.side=me):M.renderBufferDirect(it,Y,st,$,A,At),A.onAfterRender(M,Y,it,st,$,At)}function ne(A,Y,it){Y.isScene!==!0&&(Y=ht);const st=K.get(A),$=m.state.lights,At=m.state.shadowsArray,Ut=$.state.version,Gt=ut.getParameters(A,$.state,At,Y,it),Ht=ut.getProgramCacheKey(Gt);let qt=st.programs;st.environment=A.isMeshStandardMaterial?Y.environment:null,st.fog=Y.fog,st.envMap=(A.isMeshStandardMaterial?C:v).get(A.envMap||st.environment),st.envMapRotation=st.environment!==null&&A.envMap===null?Y.environmentRotation:A.envMapRotation,qt===void 0&&(A.addEventListener("dispose",Bt),qt=new Map,st.programs=qt);let jt=qt.get(Ht);if(jt!==void 0){if(st.currentProgram===jt&&st.lightsStateVersion===Ut)return Le(A,Gt),jt}else Gt.uniforms=ut.getUniforms(A),A.onBeforeCompile(Gt,M),jt=ut.acquireProgram(Gt,Ht),qt.set(Ht,jt),st.uniforms=Gt.uniforms;const Wt=st.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Wt.clippingPlanes=dt.uniform),Le(A,Gt),st.needsLights=on(A),st.lightsStateVersion=Ut,st.needsLights&&(Wt.ambientLightColor.value=$.state.ambient,Wt.lightProbe.value=$.state.probe,Wt.directionalLights.value=$.state.directional,Wt.directionalLightShadows.value=$.state.directionalShadow,Wt.spotLights.value=$.state.spot,Wt.spotLightShadows.value=$.state.spotShadow,Wt.rectAreaLights.value=$.state.rectArea,Wt.ltc_1.value=$.state.rectAreaLTC1,Wt.ltc_2.value=$.state.rectAreaLTC2,Wt.pointLights.value=$.state.point,Wt.pointLightShadows.value=$.state.pointShadow,Wt.hemisphereLights.value=$.state.hemi,Wt.directionalShadowMap.value=$.state.directionalShadowMap,Wt.directionalShadowMatrix.value=$.state.directionalShadowMatrix,Wt.spotShadowMap.value=$.state.spotShadowMap,Wt.spotLightMatrix.value=$.state.spotLightMatrix,Wt.spotLightMap.value=$.state.spotLightMap,Wt.pointShadowMap.value=$.state.pointShadowMap,Wt.pointShadowMatrix.value=$.state.pointShadowMatrix),st.currentProgram=jt,st.uniformsList=null,jt}function Pe(A){if(A.uniformsList===null){const Y=A.currentProgram.getUniforms();A.uniformsList=ua.seqWithValue(Y.seq,A.uniforms)}return A.uniformsList}function Le(A,Y){const it=K.get(A);it.outputColorSpace=Y.outputColorSpace,it.batching=Y.batching,it.batchingColor=Y.batchingColor,it.instancing=Y.instancing,it.instancingColor=Y.instancingColor,it.instancingMorph=Y.instancingMorph,it.skinning=Y.skinning,it.morphTargets=Y.morphTargets,it.morphNormals=Y.morphNormals,it.morphColors=Y.morphColors,it.morphTargetsCount=Y.morphTargetsCount,it.numClippingPlanes=Y.numClippingPlanes,it.numIntersection=Y.numClipIntersection,it.vertexAlphas=Y.vertexAlphas,it.vertexTangents=Y.vertexTangents,it.toneMapping=Y.toneMapping}function Be(A,Y,it,st,$){Y.isScene!==!0&&(Y=ht),w.resetTextureUnits();const At=Y.fog,Ut=st.isMeshStandardMaterial?Y.environment:null,Gt=P===null?M.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:ds,Ht=(st.isMeshStandardMaterial?C:v).get(st.envMap||Ut),qt=st.vertexColors===!0&&!!it.attributes.color&&it.attributes.color.itemSize===4,jt=!!it.attributes.tangent&&(!!st.normalMap||st.anisotropy>0),Wt=!!it.morphAttributes.position,oe=!!it.morphAttributes.normal,de=!!it.morphAttributes.color;let Ce=as;st.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(Ce=M.toneMapping);const Ze=it.morphAttributes.position||it.morphAttributes.normal||it.morphAttributes.color,fe=Ze!==void 0?Ze.length:0,Yt=K.get(st),qe=m.state.lights;if(rt===!0&&(ft===!0||A!==nt)){const ke=A===nt&&st.id===U;dt.setState(st,A,ke)}let Ct=!1;st.version===Yt.__version?(Yt.needsLights&&Yt.lightsStateVersion!==qe.state.version||Yt.outputColorSpace!==Gt||$.isBatchedMesh&&Yt.batching===!1||!$.isBatchedMesh&&Yt.batching===!0||$.isBatchedMesh&&Yt.batchingColor===!0&&$.colorTexture===null||$.isBatchedMesh&&Yt.batchingColor===!1&&$.colorTexture!==null||$.isInstancedMesh&&Yt.instancing===!1||!$.isInstancedMesh&&Yt.instancing===!0||$.isSkinnedMesh&&Yt.skinning===!1||!$.isSkinnedMesh&&Yt.skinning===!0||$.isInstancedMesh&&Yt.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&Yt.instancingColor===!1&&$.instanceColor!==null||$.isInstancedMesh&&Yt.instancingMorph===!0&&$.morphTexture===null||$.isInstancedMesh&&Yt.instancingMorph===!1&&$.morphTexture!==null||Yt.envMap!==Ht||st.fog===!0&&Yt.fog!==At||Yt.numClippingPlanes!==void 0&&(Yt.numClippingPlanes!==dt.numPlanes||Yt.numIntersection!==dt.numIntersection)||Yt.vertexAlphas!==qt||Yt.vertexTangents!==jt||Yt.morphTargets!==Wt||Yt.morphNormals!==oe||Yt.morphColors!==de||Yt.toneMapping!==Ce||Yt.morphTargetsCount!==fe)&&(Ct=!0):(Ct=!0,Yt.__version=st.version);let De=Yt.currentProgram;Ct===!0&&(De=ne(st,Y,$));let Oe=!1,ve=!1,rn=!1;const ye=De.getUniforms(),je=Yt.uniforms;if(D.useProgram(De.program)&&(Oe=!0,ve=!0,rn=!0),st.id!==U&&(U=st.id,ve=!0),Oe||nt!==A){N.reverseDepthBuffer?(vt.copy(A.projectionMatrix),dv(vt),fv(vt),ye.setValue(g,"projectionMatrix",vt)):ye.setValue(g,"projectionMatrix",A.projectionMatrix),ye.setValue(g,"viewMatrix",A.matrixWorldInverse);const ke=ye.map.cameraPosition;ke!==void 0&&ke.setValue(g,lt.setFromMatrixPosition(A.matrixWorld)),N.logarithmicDepthBuffer&&ye.setValue(g,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(st.isMeshPhongMaterial||st.isMeshToonMaterial||st.isMeshLambertMaterial||st.isMeshBasicMaterial||st.isMeshStandardMaterial||st.isShaderMaterial)&&ye.setValue(g,"isOrthographic",A.isOrthographicCamera===!0),nt!==A&&(nt=A,ve=!0,rn=!0)}if($.isSkinnedMesh){ye.setOptional(g,$,"bindMatrix"),ye.setOptional(g,$,"bindMatrixInverse");const ke=$.skeleton;ke&&(ke.boneTexture===null&&ke.computeBoneTexture(),ye.setValue(g,"boneTexture",ke.boneTexture,w))}$.isBatchedMesh&&(ye.setOptional(g,$,"batchingTexture"),ye.setValue(g,"batchingTexture",$._matricesTexture,w),ye.setOptional(g,$,"batchingIdTexture"),ye.setValue(g,"batchingIdTexture",$._indirectTexture,w),ye.setOptional(g,$,"batchingColorTexture"),$._colorsTexture!==null&&ye.setValue(g,"batchingColorTexture",$._colorsTexture,w));const Pn=it.morphAttributes;if((Pn.position!==void 0||Pn.normal!==void 0||Pn.color!==void 0)&&Lt.update($,it,De),(ve||Yt.receiveShadow!==$.receiveShadow)&&(Yt.receiveShadow=$.receiveShadow,ye.setValue(g,"receiveShadow",$.receiveShadow)),st.isMeshGouraudMaterial&&st.envMap!==null&&(je.envMap.value=Ht,je.flipEnvMap.value=Ht.isCubeTexture&&Ht.isRenderTargetTexture===!1?-1:1),st.isMeshStandardMaterial&&st.envMap===null&&Y.environment!==null&&(je.envMapIntensity.value=Y.environmentIntensity),ve&&(ye.setValue(g,"toneMappingExposure",M.toneMappingExposure),Yt.needsLights&&cn(je,rn),At&&st.fog===!0&&ct.refreshFogUniforms(je,At),ct.refreshMaterialUniforms(je,st,Z,V,m.state.transmissionRenderTarget[A.id]),ua.upload(g,Pe(Yt),je,w)),st.isShaderMaterial&&st.uniformsNeedUpdate===!0&&(ua.upload(g,Pe(Yt),je,w),st.uniformsNeedUpdate=!1),st.isSpriteMaterial&&ye.setValue(g,"center",$.center),ye.setValue(g,"modelViewMatrix",$.modelViewMatrix),ye.setValue(g,"normalMatrix",$.normalMatrix),ye.setValue(g,"modelMatrix",$.matrixWorld),st.isShaderMaterial||st.isRawShaderMaterial){const ke=st.uniformsGroups;for(let Sn=0,ui=ke.length;Sn<ui;Sn++){const On=ke[Sn];B.update(On,De),B.bind(On,De)}}return De}function cn(A,Y){A.ambientLightColor.needsUpdate=Y,A.lightProbe.needsUpdate=Y,A.directionalLights.needsUpdate=Y,A.directionalLightShadows.needsUpdate=Y,A.pointLights.needsUpdate=Y,A.pointLightShadows.needsUpdate=Y,A.spotLights.needsUpdate=Y,A.spotLightShadows.needsUpdate=Y,A.rectAreaLights.needsUpdate=Y,A.hemisphereLights.needsUpdate=Y}function on(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return O},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(A,Y,it){K.get(A.texture).__webglTexture=Y,K.get(A.depthTexture).__webglTexture=it;const st=K.get(A);st.__hasExternalTextures=!0,st.__autoAllocateDepthBuffer=it===void 0,st.__autoAllocateDepthBuffer||L.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),st.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,Y){const it=K.get(A);it.__webglFramebuffer=Y,it.__useDefaultFramebuffer=Y===void 0},this.setRenderTarget=function(A,Y=0,it=0){P=A,O=Y,I=it;let st=!0,$=null,At=!1,Ut=!1;if(A){const Ht=K.get(A);if(Ht.__useDefaultFramebuffer!==void 0)D.bindFramebuffer(g.FRAMEBUFFER,null),st=!1;else if(Ht.__webglFramebuffer===void 0)w.setupRenderTarget(A);else if(Ht.__hasExternalTextures)w.rebindTextures(A,K.get(A.texture).__webglTexture,K.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Wt=A.depthTexture;if(Ht.__boundDepthTexture!==Wt){if(Wt!==null&&K.has(Wt)&&(A.width!==Wt.image.width||A.height!==Wt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");w.setupDepthRenderbuffer(A)}}const qt=A.texture;(qt.isData3DTexture||qt.isDataArrayTexture||qt.isCompressedArrayTexture)&&(Ut=!0);const jt=K.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(jt[Y])?$=jt[Y][it]:$=jt[Y],At=!0):A.samples>0&&w.useMultisampledRTT(A)===!1?$=K.get(A).__webglMultisampledFramebuffer:Array.isArray(jt)?$=jt[it]:$=jt,x.copy(A.viewport),E.copy(A.scissor),j=A.scissorTest}else x.copy(yt).multiplyScalar(Z).floor(),E.copy(_t).multiplyScalar(Z).floor(),j=It;if(D.bindFramebuffer(g.FRAMEBUFFER,$)&&st&&D.drawBuffers(A,$),D.viewport(x),D.scissor(E),D.setScissorTest(j),At){const Ht=K.get(A.texture);g.framebufferTexture2D(g.FRAMEBUFFER,g.COLOR_ATTACHMENT0,g.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Ht.__webglTexture,it)}else if(Ut){const Ht=K.get(A.texture),qt=Y||0;g.framebufferTextureLayer(g.FRAMEBUFFER,g.COLOR_ATTACHMENT0,Ht.__webglTexture,it||0,qt)}U=-1},this.readRenderTargetPixels=function(A,Y,it,st,$,At,Ut){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Gt=K.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ut!==void 0&&(Gt=Gt[Ut]),Gt){D.bindFramebuffer(g.FRAMEBUFFER,Gt);try{const Ht=A.texture,qt=Ht.format,jt=Ht.type;if(!N.textureFormatReadable(qt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!N.textureTypeReadable(jt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=A.width-st&&it>=0&&it<=A.height-$&&g.readPixels(Y,it,st,$,Dt.convert(qt),Dt.convert(jt),At)}finally{const Ht=P!==null?K.get(P).__webglFramebuffer:null;D.bindFramebuffer(g.FRAMEBUFFER,Ht)}}},this.readRenderTargetPixelsAsync=async function(A,Y,it,st,$,At,Ut){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Gt=K.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ut!==void 0&&(Gt=Gt[Ut]),Gt){const Ht=A.texture,qt=Ht.format,jt=Ht.type;if(!N.textureFormatReadable(qt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!N.textureTypeReadable(jt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(Y>=0&&Y<=A.width-st&&it>=0&&it<=A.height-$){D.bindFramebuffer(g.FRAMEBUFFER,Gt);const Wt=g.createBuffer();g.bindBuffer(g.PIXEL_PACK_BUFFER,Wt),g.bufferData(g.PIXEL_PACK_BUFFER,At.byteLength,g.STREAM_READ),g.readPixels(Y,it,st,$,Dt.convert(qt),Dt.convert(jt),0);const oe=P!==null?K.get(P).__webglFramebuffer:null;D.bindFramebuffer(g.FRAMEBUFFER,oe);const de=g.fenceSync(g.SYNC_GPU_COMMANDS_COMPLETE,0);return g.flush(),await hv(g,de,4),g.bindBuffer(g.PIXEL_PACK_BUFFER,Wt),g.getBufferSubData(g.PIXEL_PACK_BUFFER,0,At),g.deleteBuffer(Wt),g.deleteSync(de),At}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(A,Y=null,it=0){A.isTexture!==!0&&(ca("WebGLRenderer: copyFramebufferToTexture function signature has changed."),Y=arguments[0]||null,A=arguments[1]);const st=Math.pow(2,-it),$=Math.floor(A.image.width*st),At=Math.floor(A.image.height*st),Ut=Y!==null?Y.x:0,Gt=Y!==null?Y.y:0;w.setTexture2D(A,0),g.copyTexSubImage2D(g.TEXTURE_2D,it,0,0,Ut,Gt,$,At),D.unbindTexture()},this.copyTextureToTexture=function(A,Y,it=null,st=null,$=0){A.isTexture!==!0&&(ca("WebGLRenderer: copyTextureToTexture function signature has changed."),st=arguments[0]||null,A=arguments[1],Y=arguments[2],$=arguments[3]||0,it=null);let At,Ut,Gt,Ht,qt,jt;it!==null?(At=it.max.x-it.min.x,Ut=it.max.y-it.min.y,Gt=it.min.x,Ht=it.min.y):(At=A.image.width,Ut=A.image.height,Gt=0,Ht=0),st!==null?(qt=st.x,jt=st.y):(qt=0,jt=0);const Wt=Dt.convert(Y.format),oe=Dt.convert(Y.type);w.setTexture2D(Y,0),g.pixelStorei(g.UNPACK_FLIP_Y_WEBGL,Y.flipY),g.pixelStorei(g.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),g.pixelStorei(g.UNPACK_ALIGNMENT,Y.unpackAlignment);const de=g.getParameter(g.UNPACK_ROW_LENGTH),Ce=g.getParameter(g.UNPACK_IMAGE_HEIGHT),Ze=g.getParameter(g.UNPACK_SKIP_PIXELS),fe=g.getParameter(g.UNPACK_SKIP_ROWS),Yt=g.getParameter(g.UNPACK_SKIP_IMAGES),qe=A.isCompressedTexture?A.mipmaps[$]:A.image;g.pixelStorei(g.UNPACK_ROW_LENGTH,qe.width),g.pixelStorei(g.UNPACK_IMAGE_HEIGHT,qe.height),g.pixelStorei(g.UNPACK_SKIP_PIXELS,Gt),g.pixelStorei(g.UNPACK_SKIP_ROWS,Ht),A.isDataTexture?g.texSubImage2D(g.TEXTURE_2D,$,qt,jt,At,Ut,Wt,oe,qe.data):A.isCompressedTexture?g.compressedTexSubImage2D(g.TEXTURE_2D,$,qt,jt,qe.width,qe.height,Wt,qe.data):g.texSubImage2D(g.TEXTURE_2D,$,qt,jt,At,Ut,Wt,oe,qe),g.pixelStorei(g.UNPACK_ROW_LENGTH,de),g.pixelStorei(g.UNPACK_IMAGE_HEIGHT,Ce),g.pixelStorei(g.UNPACK_SKIP_PIXELS,Ze),g.pixelStorei(g.UNPACK_SKIP_ROWS,fe),g.pixelStorei(g.UNPACK_SKIP_IMAGES,Yt),$===0&&Y.generateMipmaps&&g.generateMipmap(g.TEXTURE_2D),D.unbindTexture()},this.copyTextureToTexture3D=function(A,Y,it=null,st=null,$=0){A.isTexture!==!0&&(ca("WebGLRenderer: copyTextureToTexture3D function signature has changed."),it=arguments[0]||null,st=arguments[1]||null,A=arguments[2],Y=arguments[3],$=arguments[4]||0);let At,Ut,Gt,Ht,qt,jt,Wt,oe,de;const Ce=A.isCompressedTexture?A.mipmaps[$]:A.image;it!==null?(At=it.max.x-it.min.x,Ut=it.max.y-it.min.y,Gt=it.max.z-it.min.z,Ht=it.min.x,qt=it.min.y,jt=it.min.z):(At=Ce.width,Ut=Ce.height,Gt=Ce.depth,Ht=0,qt=0,jt=0),st!==null?(Wt=st.x,oe=st.y,de=st.z):(Wt=0,oe=0,de=0);const Ze=Dt.convert(Y.format),fe=Dt.convert(Y.type);let Yt;if(Y.isData3DTexture)w.setTexture3D(Y,0),Yt=g.TEXTURE_3D;else if(Y.isDataArrayTexture||Y.isCompressedArrayTexture)w.setTexture2DArray(Y,0),Yt=g.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}g.pixelStorei(g.UNPACK_FLIP_Y_WEBGL,Y.flipY),g.pixelStorei(g.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),g.pixelStorei(g.UNPACK_ALIGNMENT,Y.unpackAlignment);const qe=g.getParameter(g.UNPACK_ROW_LENGTH),Ct=g.getParameter(g.UNPACK_IMAGE_HEIGHT),De=g.getParameter(g.UNPACK_SKIP_PIXELS),Oe=g.getParameter(g.UNPACK_SKIP_ROWS),ve=g.getParameter(g.UNPACK_SKIP_IMAGES);g.pixelStorei(g.UNPACK_ROW_LENGTH,Ce.width),g.pixelStorei(g.UNPACK_IMAGE_HEIGHT,Ce.height),g.pixelStorei(g.UNPACK_SKIP_PIXELS,Ht),g.pixelStorei(g.UNPACK_SKIP_ROWS,qt),g.pixelStorei(g.UNPACK_SKIP_IMAGES,jt),A.isDataTexture||A.isData3DTexture?g.texSubImage3D(Yt,$,Wt,oe,de,At,Ut,Gt,Ze,fe,Ce.data):Y.isCompressedArrayTexture?g.compressedTexSubImage3D(Yt,$,Wt,oe,de,At,Ut,Gt,Ze,Ce.data):g.texSubImage3D(Yt,$,Wt,oe,de,At,Ut,Gt,Ze,fe,Ce),g.pixelStorei(g.UNPACK_ROW_LENGTH,qe),g.pixelStorei(g.UNPACK_IMAGE_HEIGHT,Ct),g.pixelStorei(g.UNPACK_SKIP_PIXELS,De),g.pixelStorei(g.UNPACK_SKIP_ROWS,Oe),g.pixelStorei(g.UNPACK_SKIP_IMAGES,ve),$===0&&Y.generateMipmaps&&g.generateMipmap(Yt),D.unbindTexture()},this.initRenderTarget=function(A){K.get(A).__webglFramebuffer===void 0&&w.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?w.setTextureCube(A,0):A.isData3DTexture?w.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?w.setTexture2DArray(A,0):w.setTexture2D(A,0),D.unbindTexture()},this.resetState=function(){O=0,I=0,P=null,D.reset(),kt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return zi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===vu?"display-p3":"srgb",e.unpackColorSpace=we.workingColorSpace===Oa?"display-p3":"srgb"}}class li extends an{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Mi,this.environmentIntensity=1,this.environmentRotation=new Mi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class yp extends To{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new he(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const _d=new Fe,Fc=new rp,Yr=new Ba,$r=new q;class SS extends an{constructor(t=new Rn,e=new yp){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const i=this.geometry,s=this.matrixWorld,o=t.params.Points.threshold,r=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Yr.copy(i.boundingSphere),Yr.applyMatrix4(s),Yr.radius+=o,t.ray.intersectsSphere(Yr)===!1)return;_d.copy(s).invert(),Fc.copy(t.ray).applyMatrix4(_d);const a=o/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,u=i.attributes.position;if(c!==null){const d=Math.max(0,r.start),f=Math.min(c.count,r.start+r.count);for(let _=d,y=f;_<y;_++){const m=c.getX(_);$r.fromBufferAttribute(u,m),vd($r,m,l,s,t,e,this)}}else{const d=Math.max(0,r.start),f=Math.min(u.count,r.start+r.count);for(let _=d,y=f;_<y;_++)$r.fromBufferAttribute(u,_),vd($r,_,l,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=s.length;o<r;o++){const a=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}}function vd(n,t,e,i,s,o,r){const a=Fc.distanceSqToPoint(n);if(a<e){const l=new q;Fc.closestPointToPoint(n,l),l.applyMatrix4(i);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;o.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:r})}}class bi{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let i,s=this.getPoint(0),o=0;e.push(0);for(let r=1;r<=t;r++)i=this.getPoint(r/t),o+=i.distanceTo(s),e.push(o),s=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const i=this.getLengths();let s=0;const o=i.length;let r;e?r=e:r=t*i[o-1];let a=0,l=o-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=i[s]-r,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===r)return s/(o-1);const h=i[s],d=i[s+1]-h,f=(r-h)/d;return(s+f)/(o-1)}getTangent(t,e){let s=t-1e-4,o=t+1e-4;s<0&&(s=0),o>1&&(o=1);const r=this.getPoint(s),a=this.getPoint(o),l=e||(r.isVector2?new Ot:new q);return l.copy(a).sub(r).normalize(),l}getTangentAt(t,e){const i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e){const i=new q,s=[],o=[],r=[],a=new q,l=new Fe;for(let f=0;f<=t;f++){const _=f/t;s[f]=this.getTangentAt(_,new q)}o[0]=new q,r[0]=new q;let c=Number.MAX_VALUE;const h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,i.set(1,0,0)),u<=c&&(c=u,i.set(0,1,0)),d<=c&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),o[0].crossVectors(s[0],a),r[0].crossVectors(s[0],o[0]);for(let f=1;f<=t;f++){if(o[f]=o[f-1].clone(),r[f]=r[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();const _=Math.acos(nn(s[f-1].dot(s[f]),-1,1));o[f].applyMatrix4(l.makeRotationAxis(a,_))}r[f].crossVectors(s[f],o[f])}if(e===!0){let f=Math.acos(nn(o[0].dot(o[t]),-1,1));f/=t,s[0].dot(a.crossVectors(o[0],o[t]))>0&&(f=-f);for(let _=1;_<=t;_++)o[_].applyMatrix4(l.makeRotationAxis(s[_],f*_)),r[_].crossVectors(s[_],o[_])}return{tangents:s,normals:o,binormals:r}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Su extends bi{constructor(t=0,e=0,i=1,s=1,o=0,r=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=s,this.aStartAngle=o,this.aEndAngle=r,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new Ot){const i=e,s=Math.PI*2;let o=this.aEndAngle-this.aStartAngle;const r=Math.abs(o)<Number.EPSILON;for(;o<0;)o+=s;for(;o>s;)o-=s;o<Number.EPSILON&&(r?o=0:o=s),this.aClockwise===!0&&!r&&(o===s?o=-s:o=o-s);const a=this.aStartAngle+t*o;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return i.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class ES extends Su{constructor(t,e,i,s,o,r){super(t,e,i,i,s,o,r),this.isArcCurve=!0,this.type="ArcCurve"}}function Eu(){let n=0,t=0,e=0,i=0;function s(o,r,a,l){n=o,t=a,e=-3*o+3*r-2*a-l,i=2*o-2*r+a+l}return{initCatmullRom:function(o,r,a,l,c){s(r,a,c*(a-o),c*(l-r))},initNonuniformCatmullRom:function(o,r,a,l,c,h,u){let d=(r-o)/c-(a-o)/(c+h)+(a-r)/h,f=(a-r)/h-(l-r)/(h+u)+(l-a)/u;d*=h,f*=h,s(r,a,d,f)},calc:function(o){const r=o*o,a=r*o;return n+t*o+e*r+i*a}}}const jr=new q,Dl=new Eu,Ul=new Eu,Nl=new Eu;class bS extends bi{constructor(t=[],e=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=s}getPoint(t,e=new q){const i=e,s=this.points,o=s.length,r=(o-(this.closed?0:1))*t;let a=Math.floor(r),l=r-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/o)+1)*o:l===0&&a===o-1&&(a=o-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%o]:(jr.subVectors(s[0],s[1]).add(s[0]),c=jr);const u=s[a%o],d=s[(a+1)%o];if(this.closed||a+2<o?h=s[(a+2)%o]:(jr.subVectors(s[o-1],s[o-2]).add(s[o-1]),h=jr),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let _=Math.pow(c.distanceToSquared(u),f),y=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);y<1e-4&&(y=1),_<1e-4&&(_=y),m<1e-4&&(m=y),Dl.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,_,y,m),Ul.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,_,y,m),Nl.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,_,y,m)}else this.curveType==="catmullrom"&&(Dl.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),Ul.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),Nl.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return i.set(Dl.calc(l),Ul.calc(l),Nl.calc(l)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(new q().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function xd(n,t,e,i,s){const o=(i-t)*.5,r=(s-e)*.5,a=n*n,l=n*a;return(2*e-2*i+o+r)*l+(-3*e+3*i-2*o-r)*a+o*n+e}function TS(n,t){const e=1-n;return e*e*t}function AS(n,t){return 2*(1-n)*n*t}function RS(n,t){return n*n*t}function Qo(n,t,e,i){return TS(n,t)+AS(n,e)+RS(n,i)}function PS(n,t){const e=1-n;return e*e*e*t}function CS(n,t){const e=1-n;return 3*e*e*n*t}function IS(n,t){return 3*(1-n)*n*n*t}function LS(n,t){return n*n*n*t}function tr(n,t,e,i,s){return PS(n,t)+CS(n,e)+IS(n,i)+LS(n,s)}class Mp extends bi{constructor(t=new Ot,e=new Ot,i=new Ot,s=new Ot){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new Ot){const i=e,s=this.v0,o=this.v1,r=this.v2,a=this.v3;return i.set(tr(t,s.x,o.x,r.x,a.x),tr(t,s.y,o.y,r.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class DS extends bi{constructor(t=new q,e=new q,i=new q,s=new q){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new q){const i=e,s=this.v0,o=this.v1,r=this.v2,a=this.v3;return i.set(tr(t,s.x,o.x,r.x,a.x),tr(t,s.y,o.y,r.y,a.y),tr(t,s.z,o.z,r.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class wp extends bi{constructor(t=new Ot,e=new Ot){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Ot){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Ot){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class US extends bi{constructor(t=new q,e=new q){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new q){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new q){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Sp extends bi{constructor(t=new Ot,e=new Ot,i=new Ot){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new Ot){const i=e,s=this.v0,o=this.v1,r=this.v2;return i.set(Qo(t,s.x,o.x,r.x),Qo(t,s.y,o.y,r.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class NS extends bi{constructor(t=new q,e=new q,i=new q){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new q){const i=e,s=this.v0,o=this.v1,r=this.v2;return i.set(Qo(t,s.x,o.x,r.x),Qo(t,s.y,o.y,r.y),Qo(t,s.z,o.z,r.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Ep extends bi{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Ot){const i=e,s=this.points,o=(s.length-1)*t,r=Math.floor(o),a=o-r,l=s[r===0?r:r-1],c=s[r],h=s[r>s.length-2?s.length-1:r+1],u=s[r>s.length-3?s.length-1:r+2];return i.set(xd(a,l.x,c.x,h.x,u.x),xd(a,l.y,c.y,h.y,u.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(new Ot().fromArray(s))}return this}}var Oc=Object.freeze({__proto__:null,ArcCurve:ES,CatmullRomCurve3:bS,CubicBezierCurve:Mp,CubicBezierCurve3:DS,EllipseCurve:Su,LineCurve:wp,LineCurve3:US,QuadraticBezierCurve:Sp,QuadraticBezierCurve3:NS,SplineCurve:Ep});class FS extends bi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Oc[i](e,t))}return this}getPoint(t,e){const i=t*this.getLength(),s=this.getCurveLengths();let o=0;for(;o<s.length;){if(s[o]>=i){const r=s[o]-i,a=this.curves[o],l=a.getLength(),c=l===0?0:1-r/l;return a.getPointAt(c,e)}o++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let i=0,s=this.curves.length;i<s;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let i;for(let s=0,o=this.curves;s<o.length;s++){const r=o[s],a=r.isEllipseCurve?t*2:r.isLineCurve||r.isLineCurve3?1:r.isSplineCurve?t*r.points.length:t,l=r.getPoints(a);for(let c=0;c<l.length;c++){const h=l[c];i&&i.equals(h)||(e.push(h),i=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const s=t.curves[e];this.curves.push(new Oc[s.type]().fromJSON(s))}return this}}class Bc extends FS{constructor(t){super(),this.type="Path",this.currentPoint=new Ot,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const i=new wp(this.currentPoint.clone(),new Ot(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,s){const o=new Sp(this.currentPoint.clone(),new Ot(t,e),new Ot(i,s));return this.curves.push(o),this.currentPoint.set(i,s),this}bezierCurveTo(t,e,i,s,o,r){const a=new Mp(this.currentPoint.clone(),new Ot(t,e),new Ot(i,s),new Ot(o,r));return this.curves.push(a),this.currentPoint.set(o,r),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),i=new Ep(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,s,o,r){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,i,s,o,r),this}absarc(t,e,i,s,o,r){return this.absellipse(t,e,i,i,s,o,r),this}ellipse(t,e,i,s,o,r,a,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,i,s,o,r,a,l),this}absellipse(t,e,i,s,o,r,a,l){const c=new Su(t,e,i,s,o,r,a,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class be extends Rn{constructor(t=1,e=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:s},e=Math.max(3,e);const o=[],r=[],a=[],l=[],c=new q,h=new Ot;r.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){const f=i+u/e*s;c.x=t*Math.cos(f),c.y=t*Math.sin(f),r.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(r[d]/t+1)/2,h.y=(r[d+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)o.push(u,u+1,0);this.setIndex(o),this.setAttribute("position",new Xe(r,3)),this.setAttribute("normal",new Xe(a,3)),this.setAttribute("uv",new Xe(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new be(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class ue extends Rn{constructor(t=1,e=1,i=1,s=32,o=1,r=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:o,openEnded:r,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),o=Math.floor(o);const h=[],u=[],d=[],f=[];let _=0;const y=[],m=i/2;let p=0;b(),r===!1&&(t>0&&M(!0),e>0&&M(!1)),this.setIndex(h),this.setAttribute("position",new Xe(u,3)),this.setAttribute("normal",new Xe(d,3)),this.setAttribute("uv",new Xe(f,2));function b(){const S=new q,O=new q;let I=0;const P=(e-t)/i;for(let U=0;U<=o;U++){const nt=[],x=U/o,E=x*(e-t)+t;for(let j=0;j<=s;j++){const k=j/s,J=k*l+a,at=Math.sin(J),V=Math.cos(J);O.x=E*at,O.y=-x*i+m,O.z=E*V,u.push(O.x,O.y,O.z),S.set(at,P,V).normalize(),d.push(S.x,S.y,S.z),f.push(k,1-x),nt.push(_++)}y.push(nt)}for(let U=0;U<s;U++)for(let nt=0;nt<o;nt++){const x=y[nt][U],E=y[nt+1][U],j=y[nt+1][U+1],k=y[nt][U+1];t>0&&(h.push(x,E,k),I+=3),e>0&&(h.push(E,j,k),I+=3)}c.addGroup(p,I,0),p+=I}function M(S){const O=_,I=new Ot,P=new q;let U=0;const nt=S===!0?t:e,x=S===!0?1:-1;for(let j=1;j<=s;j++)u.push(0,m*x,0),d.push(0,x,0),f.push(.5,.5),_++;const E=_;for(let j=0;j<=s;j++){const J=j/s*l+a,at=Math.cos(J),V=Math.sin(J);P.x=nt*V,P.y=m*x,P.z=nt*at,u.push(P.x,P.y,P.z),d.push(0,x,0),I.x=at*.5+.5,I.y=V*.5*x+.5,f.push(I.x,I.y),_++}for(let j=0;j<s;j++){const k=O+j,J=E+j;S===!0?h.push(J,J+1,k):h.push(J+1,J,k),U+=3}c.addGroup(p,U,S===!0?1:2),p+=U}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ue(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class io extends ue{constructor(t=1,e=1,i=32,s=1,o=!1,r=0,a=Math.PI*2){super(0,t,e,i,s,o,r,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:s,openEnded:o,thetaStart:r,thetaLength:a}}static fromJSON(t){return new io(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Fn extends Bc{constructor(t){super(t),this.uuid=Ns(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let i=0,s=this.holes.length;i<s;i++)e[i]=this.holes[i].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,i=this.holes.length;e<i;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const s=t.holes[e];this.holes.push(new Bc().fromJSON(s))}return this}}const OS={triangulate:function(n,t,e=2){const i=t&&t.length,s=i?t[0]*e:n.length;let o=bp(n,0,s,e,!0);const r=[];if(!o||o.next===o.prev)return r;let a,l,c,h,u,d,f;if(i&&(o=kS(n,t,o,e)),n.length>80*e){a=c=n[0],l=h=n[1];for(let _=e;_<s;_+=e)u=n[_],d=n[_+1],u<a&&(a=u),d<l&&(l=d),u>c&&(c=u),d>h&&(h=d);f=Math.max(c-a,h-l),f=f!==0?32767/f:0}return dr(o,r,e,a,l,f,0),r}};function bp(n,t,e,i,s){let o,r;if(s===QS(n,t,e,i)>0)for(o=t;o<e;o+=i)r=yd(o,n[o],n[o+1],r);else for(o=e-i;o>=t;o-=i)r=yd(o,n[o],n[o+1],r);return r&&Ha(r,r.next)&&(pr(r),r=r.next),r}function Ds(n,t){if(!n)return n;t||(t=n);let e=n,i;do if(i=!1,!e.steiner&&(Ha(e,e.next)||Ge(e.prev,e,e.next)===0)){if(pr(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function dr(n,t,e,i,s,o,r){if(!n)return;!r&&o&&YS(n,i,s,o);let a=n,l,c;for(;n.prev!==n.next;){if(l=n.prev,c=n.next,o?zS(n,i,s,o):BS(n)){t.push(l.i/e|0),t.push(n.i/e|0),t.push(c.i/e|0),pr(n),n=c.next,a=c.next;continue}if(n=c,n===a){r?r===1?(n=GS(Ds(n),t,e),dr(n,t,e,i,s,o,2)):r===2&&HS(n,t,e,i,s,o):dr(Ds(n),t,e,i,s,o,1);break}}}function BS(n){const t=n.prev,e=n,i=n.next;if(Ge(t,e,i)>=0)return!1;const s=t.x,o=e.x,r=i.x,a=t.y,l=e.y,c=i.y,h=s<o?s<r?s:r:o<r?o:r,u=a<l?a<c?a:c:l<c?l:c,d=s>o?s>r?s:r:o>r?o:r,f=a>l?a>c?a:c:l>c?l:c;let _=i.next;for(;_!==t;){if(_.x>=h&&_.x<=d&&_.y>=u&&_.y<=f&&so(s,a,o,l,r,c,_.x,_.y)&&Ge(_.prev,_,_.next)>=0)return!1;_=_.next}return!0}function zS(n,t,e,i){const s=n.prev,o=n,r=n.next;if(Ge(s,o,r)>=0)return!1;const a=s.x,l=o.x,c=r.x,h=s.y,u=o.y,d=r.y,f=a<l?a<c?a:c:l<c?l:c,_=h<u?h<d?h:d:u<d?u:d,y=a>l?a>c?a:c:l>c?l:c,m=h>u?h>d?h:d:u>d?u:d,p=zc(f,_,t,e,i),b=zc(y,m,t,e,i);let M=n.prevZ,S=n.nextZ;for(;M&&M.z>=p&&S&&S.z<=b;){if(M.x>=f&&M.x<=y&&M.y>=_&&M.y<=m&&M!==s&&M!==r&&so(a,h,l,u,c,d,M.x,M.y)&&Ge(M.prev,M,M.next)>=0||(M=M.prevZ,S.x>=f&&S.x<=y&&S.y>=_&&S.y<=m&&S!==s&&S!==r&&so(a,h,l,u,c,d,S.x,S.y)&&Ge(S.prev,S,S.next)>=0))return!1;S=S.nextZ}for(;M&&M.z>=p;){if(M.x>=f&&M.x<=y&&M.y>=_&&M.y<=m&&M!==s&&M!==r&&so(a,h,l,u,c,d,M.x,M.y)&&Ge(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;S&&S.z<=b;){if(S.x>=f&&S.x<=y&&S.y>=_&&S.y<=m&&S!==s&&S!==r&&so(a,h,l,u,c,d,S.x,S.y)&&Ge(S.prev,S,S.next)>=0)return!1;S=S.nextZ}return!0}function GS(n,t,e){let i=n;do{const s=i.prev,o=i.next.next;!Ha(s,o)&&Tp(s,i,i.next,o)&&fr(s,o)&&fr(o,s)&&(t.push(s.i/e|0),t.push(i.i/e|0),t.push(o.i/e|0),pr(i),pr(i.next),i=n=o),i=i.next}while(i!==n);return Ds(i)}function HS(n,t,e,i,s,o){let r=n;do{let a=r.next.next;for(;a!==r.prev;){if(r.i!==a.i&&KS(r,a)){let l=Ap(r,a);r=Ds(r,r.next),l=Ds(l,l.next),dr(r,t,e,i,s,o,0),dr(l,t,e,i,s,o,0);return}a=a.next}r=r.next}while(r!==n)}function kS(n,t,e,i){const s=[];let o,r,a,l,c;for(o=0,r=t.length;o<r;o++)a=t[o]*i,l=o<r-1?t[o+1]*i:n.length,c=bp(n,a,l,i,!1),c===c.next&&(c.steiner=!0),s.push(jS(c));for(s.sort(VS),o=0;o<s.length;o++)e=WS(s[o],e);return e}function VS(n,t){return n.x-t.x}function WS(n,t){const e=XS(n,t);if(!e)return t;const i=Ap(e,n);return Ds(i,i.next),Ds(e,e.next)}function XS(n,t){let e=t,i=-1/0,s;const o=n.x,r=n.y;do{if(r<=e.y&&r>=e.next.y&&e.next.y!==e.y){const d=e.x+(r-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=o&&d>i&&(i=d,s=e.x<e.next.x?e:e.next,d===o))return s}e=e.next}while(e!==t);if(!s)return null;const a=s,l=s.x,c=s.y;let h=1/0,u;e=s;do o>=e.x&&e.x>=l&&o!==e.x&&so(r<c?o:i,r,l,c,r<c?i:o,r,e.x,e.y)&&(u=Math.abs(r-e.y)/(o-e.x),fr(e,n)&&(u<h||u===h&&(e.x>s.x||e.x===s.x&&qS(s,e)))&&(s=e,h=u)),e=e.next;while(e!==a);return s}function qS(n,t){return Ge(n.prev,n,t.prev)<0&&Ge(t.next,n,n.next)<0}function YS(n,t,e,i){let s=n;do s.z===0&&(s.z=zc(s.x,s.y,t,e,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,$S(s)}function $S(n){let t,e,i,s,o,r,a,l,c=1;do{for(e=n,n=null,o=null,r=0;e;){for(r++,i=e,a=0,t=0;t<c&&(a++,i=i.nextZ,!!i);t++);for(l=c;a>0||l>0&&i;)a!==0&&(l===0||!i||e.z<=i.z)?(s=e,e=e.nextZ,a--):(s=i,i=i.nextZ,l--),o?o.nextZ=s:n=s,s.prevZ=o,o=s;e=i}o.nextZ=null,c*=2}while(r>1);return n}function zc(n,t,e,i,s){return n=(n-e)*s|0,t=(t-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,n|t<<1}function jS(n){let t=n,e=n;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==n);return e}function so(n,t,e,i,s,o,r,a){return(s-r)*(t-a)>=(n-r)*(o-a)&&(n-r)*(i-a)>=(e-r)*(t-a)&&(e-r)*(o-a)>=(s-r)*(i-a)}function KS(n,t){return n.next.i!==t.i&&n.prev.i!==t.i&&!ZS(n,t)&&(fr(n,t)&&fr(t,n)&&JS(n,t)&&(Ge(n.prev,n,t.prev)||Ge(n,t.prev,t))||Ha(n,t)&&Ge(n.prev,n,n.next)>0&&Ge(t.prev,t,t.next)>0)}function Ge(n,t,e){return(t.y-n.y)*(e.x-t.x)-(t.x-n.x)*(e.y-t.y)}function Ha(n,t){return n.x===t.x&&n.y===t.y}function Tp(n,t,e,i){const s=Zr(Ge(n,t,e)),o=Zr(Ge(n,t,i)),r=Zr(Ge(e,i,n)),a=Zr(Ge(e,i,t));return!!(s!==o&&r!==a||s===0&&Kr(n,e,t)||o===0&&Kr(n,i,t)||r===0&&Kr(e,n,i)||a===0&&Kr(e,t,i))}function Kr(n,t,e){return t.x<=Math.max(n.x,e.x)&&t.x>=Math.min(n.x,e.x)&&t.y<=Math.max(n.y,e.y)&&t.y>=Math.min(n.y,e.y)}function Zr(n){return n>0?1:n<0?-1:0}function ZS(n,t){let e=n;do{if(e.i!==n.i&&e.next.i!==n.i&&e.i!==t.i&&e.next.i!==t.i&&Tp(e,e.next,n,t))return!0;e=e.next}while(e!==n);return!1}function fr(n,t){return Ge(n.prev,n,n.next)<0?Ge(n,t,n.next)>=0&&Ge(n,n.prev,t)>=0:Ge(n,t,n.prev)<0||Ge(n,n.next,t)<0}function JS(n,t){let e=n,i=!1;const s=(n.x+t.x)/2,o=(n.y+t.y)/2;do e.y>o!=e.next.y>o&&e.next.y!==e.y&&s<(e.next.x-e.x)*(o-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==n);return i}function Ap(n,t){const e=new Gc(n.i,n.x,n.y),i=new Gc(t.i,t.x,t.y),s=n.next,o=t.prev;return n.next=t,t.prev=n,e.next=s,s.prev=e,i.next=e,e.prev=i,o.next=i,i.prev=o,i}function yd(n,t,e,i){const s=new Gc(n,t,e);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function pr(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Gc(n,t,e){this.i=n,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function QS(n,t,e,i){let s=0;for(let o=t,r=e-i;o<e;o+=i)s+=(n[r]-n[o])*(n[o+1]+n[r+1]),r=o;return s}class fo{static area(t){const e=t.length;let i=0;for(let s=e-1,o=0;o<e;s=o++)i+=t[s].x*t[o].y-t[o].x*t[s].y;return i*.5}static isClockWise(t){return fo.area(t)<0}static triangulateShape(t,e){const i=[],s=[],o=[];Md(t),wd(i,t);let r=t.length;e.forEach(Md);for(let l=0;l<e.length;l++)s.push(r),r+=e[l].length,wd(i,e[l]);const a=OS.triangulate(i,s);for(let l=0;l<a.length;l+=3)o.push(a.slice(l,l+3));return o}}function Md(n){const t=n.length;t>2&&n[t-1].equals(n[0])&&n.pop()}function wd(n,t){for(let e=0;e<t.length;e++)n.push(t[e].x),n.push(t[e].y)}class Vn extends Rn{constructor(t=new Fn([new Ot(.5,.5),new Ot(-.5,.5),new Ot(-.5,-.5),new Ot(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const i=this,s=[],o=[];for(let a=0,l=t.length;a<l;a++){const c=t[a];r(c)}this.setAttribute("position",new Xe(s,3)),this.setAttribute("uv",new Xe(o,2)),this.computeVertexNormals();function r(a){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1;let d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,_=e.bevelSize!==void 0?e.bevelSize:f-.1,y=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3;const p=e.extrudePath,b=e.UVGenerator!==void 0?e.UVGenerator:t1;let M,S=!1,O,I,P,U;p&&(M=p.getSpacedPoints(h),S=!0,d=!1,O=p.computeFrenetFrames(h,!1),I=new q,P=new q,U=new q),d||(m=0,f=0,_=0,y=0);const nt=a.extractPoints(c);let x=nt.shape;const E=nt.holes;if(!fo.isClockWise(x)){x=x.reverse();for(let tt=0,g=E.length;tt<g;tt++){const T=E[tt];fo.isClockWise(T)&&(E[tt]=T.reverse())}}const k=fo.triangulateShape(x,E),J=x;for(let tt=0,g=E.length;tt<g;tt++){const T=E[tt];x=x.concat(T)}function at(tt,g,T){return g||console.error("THREE.ExtrudeGeometry: vec does not exist"),tt.clone().addScaledVector(g,T)}const V=x.length,Z=k.length;function H(tt,g,T){let L,N,D;const X=tt.x-g.x,K=tt.y-g.y,w=T.x-tt.x,v=T.y-tt.y,C=X*X+K*K,W=X*v-K*w;if(Math.abs(W)>Number.EPSILON){const z=Math.sqrt(C),G=Math.sqrt(w*w+v*v),ut=g.x-K/z,ct=g.y+X/z,pt=T.x-v/G,Rt=T.y+w/G,dt=((pt-ut)*v-(Rt-ct)*w)/(X*v-K*w);L=ut+X*dt-tt.x,N=ct+K*dt-tt.y;const xt=L*L+N*N;if(xt<=2)return new Ot(L,N);D=Math.sqrt(xt/2)}else{let z=!1;X>Number.EPSILON?w>Number.EPSILON&&(z=!0):X<-Number.EPSILON?w<-Number.EPSILON&&(z=!0):Math.sign(K)===Math.sign(v)&&(z=!0),z?(L=-K,N=X,D=Math.sqrt(C)):(L=X,N=K,D=Math.sqrt(C/2))}return new Ot(L/D,N/D)}const gt=[];for(let tt=0,g=J.length,T=g-1,L=tt+1;tt<g;tt++,T++,L++)T===g&&(T=0),L===g&&(L=0),gt[tt]=H(J[tt],J[T],J[L]);const yt=[];let _t,It=gt.concat();for(let tt=0,g=E.length;tt<g;tt++){const T=E[tt];_t=[];for(let L=0,N=T.length,D=N-1,X=L+1;L<N;L++,D++,X++)D===N&&(D=0),X===N&&(X=0),_t[L]=H(T[L],T[D],T[X]);yt.push(_t),It=It.concat(_t)}for(let tt=0;tt<m;tt++){const g=tt/m,T=f*Math.cos(g*Math.PI/2),L=_*Math.sin(g*Math.PI/2)+y;for(let N=0,D=J.length;N<D;N++){const X=at(J[N],gt[N],L);F(X.x,X.y,-T)}for(let N=0,D=E.length;N<D;N++){const X=E[N];_t=yt[N];for(let K=0,w=X.length;K<w;K++){const v=at(X[K],_t[K],L);F(v.x,v.y,-T)}}}const zt=_+y;for(let tt=0;tt<V;tt++){const g=d?at(x[tt],It[tt],zt):x[tt];S?(P.copy(O.normals[0]).multiplyScalar(g.x),I.copy(O.binormals[0]).multiplyScalar(g.y),U.copy(M[0]).add(P).add(I),F(U.x,U.y,U.z)):F(g.x,g.y,0)}for(let tt=1;tt<=h;tt++)for(let g=0;g<V;g++){const T=d?at(x[g],It[g],zt):x[g];S?(P.copy(O.normals[tt]).multiplyScalar(T.x),I.copy(O.binormals[tt]).multiplyScalar(T.y),U.copy(M[tt]).add(P).add(I),F(U.x,U.y,U.z)):F(T.x,T.y,u/h*tt)}for(let tt=m-1;tt>=0;tt--){const g=tt/m,T=f*Math.cos(g*Math.PI/2),L=_*Math.sin(g*Math.PI/2)+y;for(let N=0,D=J.length;N<D;N++){const X=at(J[N],gt[N],L);F(X.x,X.y,u+T)}for(let N=0,D=E.length;N<D;N++){const X=E[N];_t=yt[N];for(let K=0,w=X.length;K<w;K++){const v=at(X[K],_t[K],L);S?F(v.x,v.y+M[h-1].y,M[h-1].x+T):F(v.x,v.y,u+T)}}}rt(),ft();function rt(){const tt=s.length/3;if(d){let g=0,T=V*g;for(let L=0;L<Z;L++){const N=k[L];lt(N[2]+T,N[1]+T,N[0]+T)}g=h+m*2,T=V*g;for(let L=0;L<Z;L++){const N=k[L];lt(N[0]+T,N[1]+T,N[2]+T)}}else{for(let g=0;g<Z;g++){const T=k[g];lt(T[2],T[1],T[0])}for(let g=0;g<Z;g++){const T=k[g];lt(T[0]+V*h,T[1]+V*h,T[2]+V*h)}}i.addGroup(tt,s.length/3-tt,0)}function ft(){const tt=s.length/3;let g=0;vt(J,g),g+=J.length;for(let T=0,L=E.length;T<L;T++){const N=E[T];vt(N,g),g+=N.length}i.addGroup(tt,s.length/3-tt,1)}function vt(tt,g){let T=tt.length;for(;--T>=0;){const L=T;let N=T-1;N<0&&(N=tt.length-1);for(let D=0,X=h+m*2;D<X;D++){const K=V*D,w=V*(D+1),v=g+L+K,C=g+N+K,W=g+N+w,z=g+L+w;ot(v,C,W,z)}}}function F(tt,g,T){l.push(tt),l.push(g),l.push(T)}function lt(tt,g,T){ht(tt),ht(g),ht(T);const L=s.length/3,N=b.generateTopUV(i,s,L-3,L-2,L-1);Mt(N[0]),Mt(N[1]),Mt(N[2])}function ot(tt,g,T,L){ht(tt),ht(g),ht(L),ht(g),ht(T),ht(L);const N=s.length/3,D=b.generateSideWallUV(i,s,N-6,N-3,N-2,N-1);Mt(D[0]),Mt(D[1]),Mt(D[3]),Mt(D[1]),Mt(D[2]),Mt(D[3])}function ht(tt){s.push(l[tt*3+0]),s.push(l[tt*3+1]),s.push(l[tt*3+2])}function Mt(tt){o.push(tt.x),o.push(tt.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,i=this.parameters.options;return e1(e,i,t)}static fromJSON(t,e){const i=[];for(let o=0,r=t.shapes.length;o<r;o++){const a=e[t.shapes[o]];i.push(a)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Oc[s.type]().fromJSON(s)),new Vn(i,t.options)}}const t1={generateTopUV:function(n,t,e,i,s){const o=t[e*3],r=t[e*3+1],a=t[i*3],l=t[i*3+1],c=t[s*3],h=t[s*3+1];return[new Ot(o,r),new Ot(a,l),new Ot(c,h)]},generateSideWallUV:function(n,t,e,i,s,o){const r=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[i*3],h=t[i*3+1],u=t[i*3+2],d=t[s*3],f=t[s*3+1],_=t[s*3+2],y=t[o*3],m=t[o*3+1],p=t[o*3+2];return Math.abs(a-h)<Math.abs(r-c)?[new Ot(r,1-l),new Ot(c,1-u),new Ot(d,1-_),new Ot(y,1-p)]:[new Ot(a,1-l),new Ot(h,1-u),new Ot(f,1-_),new Ot(m,1-p)]}};function e1(n,t,e){if(e.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){const o=n[i];e.shapes.push(o.uuid)}else e.shapes.push(n.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class bt extends Rn{constructor(t=1,e=32,i=16,s=0,o=Math.PI*2,r=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:o,thetaStart:r,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const l=Math.min(r+a,Math.PI);let c=0;const h=[],u=new q,d=new q,f=[],_=[],y=[],m=[];for(let p=0;p<=i;p++){const b=[],M=p/i;let S=0;p===0&&r===0?S=.5/e:p===i&&l===Math.PI&&(S=-.5/e);for(let O=0;O<=e;O++){const I=O/e;u.x=-t*Math.cos(s+I*o)*Math.sin(r+M*a),u.y=t*Math.cos(r+M*a),u.z=t*Math.sin(s+I*o)*Math.sin(r+M*a),_.push(u.x,u.y,u.z),d.copy(u).normalize(),y.push(d.x,d.y,d.z),m.push(I+S,1-M),b.push(c++)}h.push(b)}for(let p=0;p<i;p++)for(let b=0;b<e;b++){const M=h[p][b+1],S=h[p][b],O=h[p+1][b],I=h[p+1][b+1];(p!==0||r>0)&&f.push(M,S,I),(p!==i-1||l<Math.PI)&&f.push(S,O,I)}this.setIndex(f),this.setAttribute("position",new Xe(_,3)),this.setAttribute("normal",new Xe(y,3)),this.setAttribute("uv",new Xe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new bt(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class po extends Rn{constructor(t=1,e=.4,i=12,s=48,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:s,arc:o},i=Math.floor(i),s=Math.floor(s);const r=[],a=[],l=[],c=[],h=new q,u=new q,d=new q;for(let f=0;f<=i;f++)for(let _=0;_<=s;_++){const y=_/s*o,m=f/i*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(y),u.y=(t+e*Math.cos(m))*Math.sin(y),u.z=e*Math.sin(m),a.push(u.x,u.y,u.z),h.x=t*Math.cos(y),h.y=t*Math.sin(y),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(_/s),c.push(f/i)}for(let f=1;f<=i;f++)for(let _=1;_<=s;_++){const y=(s+1)*f+_-1,m=(s+1)*(f-1)+_-1,p=(s+1)*(f-1)+_,b=(s+1)*f+_;r.push(y,m,b),r.push(m,p,b)}this.setIndex(r),this.setAttribute("position",new Xe(a,3)),this.setAttribute("normal",new Xe(l,3)),this.setAttribute("uv",new Xe(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new po(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class te extends To{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new he(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new he(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ep,this.normalScale=new Ot(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Mi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Nt extends te{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ot(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return nn(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new he(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new he(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new he(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}const wa={enabled:!1,files:{},add:function(n,t){this.enabled!==!1&&(this.files[n]=t)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class n1{constructor(t,e,i){const s=this;let o=!1,r=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this.itemStart=function(h){a++,o===!1&&s.onStart!==void 0&&s.onStart(h,r,a),o=!0},this.itemEnd=function(h){r++,s.onProgress!==void 0&&s.onProgress(h,r,a),r===a&&(o=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){const f=c[u],_=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return _}return null}}}const i1=new n1;class Ro{constructor(t){this.manager=t!==void 0?t:i1,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const i=this;return new Promise(function(s,o){i.load(t,s,e,o)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}Ro.DEFAULT_MATERIAL_NAME="__DEFAULT";const Ui={};class s1 extends Error{constructor(t,e){super(t),this.response=e}}class o1 extends Ro{constructor(t){super(t)}load(t,e,i,s){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const o=wa.get(t);if(o!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(o),this.manager.itemEnd(t)},0),o;if(Ui[t]!==void 0){Ui[t].push({onLoad:e,onProgress:i,onError:s});return}Ui[t]=[],Ui[t].push({onLoad:e,onProgress:i,onError:s});const r=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(r).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=Ui[t],u=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=d?parseInt(d):0,_=f!==0;let y=0;const m=new ReadableStream({start(p){b();function b(){u.read().then(({done:M,value:S})=>{if(M)p.close();else{y+=S.byteLength;const O=new ProgressEvent("progress",{lengthComputable:_,loaded:y,total:f});for(let I=0,P=h.length;I<P;I++){const U=h[I];U.onProgress&&U.onProgress(O)}p.enqueue(S),b()}},M=>{p.error(M)})}}});return new Response(m)}else throw new s1(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return c.json();default:if(a===void 0)return c.text();{const u=/charset="?([^;"\s]*)"?/i.exec(a),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(_=>f.decode(_))}}}).then(c=>{wa.add(t,c);const h=Ui[t];delete Ui[t];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onLoad&&f.onLoad(c)}}).catch(c=>{const h=Ui[t];if(h===void 0)throw this.manager.itemError(t),c;delete Ui[t];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onError&&f.onError(c)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}}class Rp extends Ro{constructor(t){super(t)}load(t,e,i,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const o=this,r=wa.get(t);if(r!==void 0)return o.manager.itemStart(t),setTimeout(function(){e&&e(r),o.manager.itemEnd(t)},0),r;const a=hr("img");function l(){h(),wa.add(t,this),e&&e(this),o.manager.itemEnd(t)}function c(u){h(),s&&s(u),o.manager.itemError(t),o.manager.itemEnd(t)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),o.manager.itemStart(t),a.src=t,a}}class r1 extends Ro{constructor(t){super(t)}load(t,e,i,s){const o=new yu;o.colorSpace=Jn;const r=new Rp(this.manager);r.setCrossOrigin(this.crossOrigin),r.setPath(this.path);let a=0;function l(c){r.load(t[c],function(h){o.images[c]=h,a++,a===6&&(o.needsUpdate=!0,e&&e(o))},void 0,s)}for(let c=0;c<t.length;++c)l(c);return o}}class fs extends Ro{constructor(t){super(t)}load(t,e,i,s){const o=new wn,r=new Rp(this.manager);return r.setCrossOrigin(this.crossOrigin),r.setPath(this.path),r.load(t,function(a){o.image=a,o.needsUpdate=!0,e!==void 0&&e(o)},i,s),o}}class bu extends an{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new he(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}const Fl=new Fe,Sd=new q,Ed=new q;class Pp{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ot(512,512),this.map=null,this.mapPass=null,this.matrix=new Fe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Mu,this._frameExtents=new Ot(1,1),this._viewportCount=1,this._viewports=[new Ae(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;Sd.setFromMatrixPosition(t.matrixWorld),e.position.copy(Sd),Ed.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Ed),e.updateMatrixWorld(),Fl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Fl),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Fl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const bd=new Fe,zo=new q,Ol=new q;class a1 extends Pp{constructor(){super(new ze(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ot(4,2),this._viewportCount=6,this._viewports=[new Ae(2,1,1,1),new Ae(0,1,1,1),new Ae(3,1,1,1),new Ae(1,1,1,1),new Ae(3,0,1,1),new Ae(1,0,1,1)],this._cubeDirections=[new q(1,0,0),new q(-1,0,0),new q(0,0,1),new q(0,0,-1),new q(0,1,0),new q(0,-1,0)],this._cubeUps=[new q(0,1,0),new q(0,1,0),new q(0,1,0),new q(0,1,0),new q(0,0,1),new q(0,0,-1)]}updateMatrices(t,e=0){const i=this.camera,s=this.matrix,o=t.distance||i.far;o!==i.far&&(i.far=o,i.updateProjectionMatrix()),zo.setFromMatrixPosition(t.matrixWorld),i.position.copy(zo),Ol.copy(i.position),Ol.add(this._cubeDirections[e]),i.up.copy(this._cubeUps[e]),i.lookAt(Ol),i.updateMatrixWorld(),s.makeTranslation(-zo.x,-zo.y,-zo.z),bd.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(bd)}}class Wi extends bu{constructor(t,e,i=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new a1}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class l1 extends Pp{constructor(){super(new pp(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Xi extends bu{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(an.DEFAULT_UP),this.updateMatrix(),this.target=new an,this.shadow=new l1}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class qi extends bu{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class Cp{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Td(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Td();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Td(){return performance.now()}class c1{constructor(){this.type="ShapePath",this.color=new he,this.subPaths=[],this.currentPath=null}moveTo(t,e){return this.currentPath=new Bc,this.subPaths.push(this.currentPath),this.currentPath.moveTo(t,e),this}lineTo(t,e){return this.currentPath.lineTo(t,e),this}quadraticCurveTo(t,e,i,s){return this.currentPath.quadraticCurveTo(t,e,i,s),this}bezierCurveTo(t,e,i,s,o,r){return this.currentPath.bezierCurveTo(t,e,i,s,o,r),this}splineThru(t){return this.currentPath.splineThru(t),this}toShapes(t){function e(p){const b=[];for(let M=0,S=p.length;M<S;M++){const O=p[M],I=new Fn;I.curves=O.curves,b.push(I)}return b}function i(p,b){const M=b.length;let S=!1;for(let O=M-1,I=0;I<M;O=I++){let P=b[O],U=b[I],nt=U.x-P.x,x=U.y-P.y;if(Math.abs(x)>Number.EPSILON){if(x<0&&(P=b[I],nt=-nt,U=b[O],x=-x),p.y<P.y||p.y>U.y)continue;if(p.y===P.y){if(p.x===P.x)return!0}else{const E=x*(p.x-P.x)-nt*(p.y-P.y);if(E===0)return!0;if(E<0)continue;S=!S}}else{if(p.y!==P.y)continue;if(U.x<=p.x&&p.x<=P.x||P.x<=p.x&&p.x<=U.x)return!0}}return S}const s=fo.isClockWise,o=this.subPaths;if(o.length===0)return[];let r,a,l;const c=[];if(o.length===1)return a=o[0],l=new Fn,l.curves=a.curves,c.push(l),c;let h=!s(o[0].getPoints());h=t?!h:h;const u=[],d=[];let f=[],_=0,y;d[_]=void 0,f[_]=[];for(let p=0,b=o.length;p<b;p++)a=o[p],y=a.getPoints(),r=s(y),r=t?!r:r,r?(!h&&d[_]&&_++,d[_]={s:new Fn,p:y},d[_].s.curves=a.curves,h&&_++,f[_]=[]):f[_].push({h:a,p:y[0]});if(!d[0])return e(o);if(d.length>1){let p=!1,b=0;for(let M=0,S=d.length;M<S;M++)u[M]=[];for(let M=0,S=d.length;M<S;M++){const O=f[M];for(let I=0;I<O.length;I++){const P=O[I];let U=!0;for(let nt=0;nt<d.length;nt++)i(P.p,d[nt].p)&&(M!==nt&&b++,U?(U=!1,u[nt].push(P)):p=!0);U&&u[M].push(P)}}b>0&&p===!1&&(f=u)}let m;for(let p=0,b=d.length;p<b;p++){l=d[p].s,c.push(l),m=f[p];for(let M=0,S=m.length;M<S;M++)l.holes.push(m[M].h)}return c}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:hu}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=hu);class Yi extends Ro{constructor(t){super(t)}load(t,e,i,s){const o=this,r=new o1(this.manager);r.setPath(this.path),r.setRequestHeader(this.requestHeader),r.setWithCredentials(this.withCredentials),r.load(t,function(a){const l=o.parse(JSON.parse(a));e&&e(l)},i,s)}parse(t){return new u1(t)}}class u1{constructor(t){this.isFont=!0,this.type="Font",this.data=t}generateShapes(t,e=100){const i=[],s=h1(t,e,this.data);for(let o=0,r=s.length;o<r;o++)i.push(...s[o].toShapes());return i}}function h1(n,t,e){const i=Array.from(n),s=t/e.resolution,o=(e.boundingBox.yMax-e.boundingBox.yMin+e.underlineThickness)*s,r=[];let a=0,l=0;for(let c=0;c<i.length;c++){const h=i[c];if(h===`
`)a=0,l-=o;else{const u=d1(h,s,a,l,e);a+=u.offsetX,r.push(u.path)}}return r}function d1(n,t,e,i,s){const o=s.glyphs[n]||s.glyphs["?"];if(!o){console.error('THREE.Font: character "'+n+'" does not exists in font family '+s.familyName+".");return}const r=new c1;let a,l,c,h,u,d,f,_;if(o.o){const y=o._cachedOutline||(o._cachedOutline=o.o.split(" "));for(let m=0,p=y.length;m<p;)switch(y[m++]){case"m":a=y[m++]*t+e,l=y[m++]*t+i,r.moveTo(a,l);break;case"l":a=y[m++]*t+e,l=y[m++]*t+i,r.lineTo(a,l);break;case"q":c=y[m++]*t+e,h=y[m++]*t+i,u=y[m++]*t+e,d=y[m++]*t+i,r.quadraticCurveTo(u,d,c,h);break;case"b":c=y[m++]*t+e,h=y[m++]*t+i,u=y[m++]*t+e,d=y[m++]*t+i,f=y[m++]*t+e,_=y[m++]*t+i,r.bezierCurveTo(u,d,f,_,c,h);break}}return{offsetX:o.ha*t,path:r}}class Ve extends Vn{constructor(t,e={}){const i=e.font;if(i===void 0)super();else{const s=i.generateShapes(t,e.size);e.depth===void 0&&e.height!==void 0&&console.warn("THREE.TextGeometry: .height is now depreciated. Please use .depth instead"),e.depth=e.depth!==void 0?e.depth:e.height!==void 0?e.height:50,e.bevelThickness===void 0&&(e.bevelThickness=10),e.bevelSize===void 0&&(e.bevelSize=8),e.bevelEnabled===void 0&&(e.bevelEnabled=!1),super(s,e)}this.type="TextGeometry"}}const f1=Xn({__name:"HalfBlueBear",props:{background:{type:Boolean,default:!1},cameraPosition:{type:Number,default:5},bodyPosition:{type:Object,default:()=>({x:0,y:0,z:0})}},setup(n){const t=n,e=Zt(null);return ci(()=>{if(e.value){let i=function(){requestAnimationFrame(i),xt&&(M.rotation.y+=.03),r.render(s,o)};const s=new li,o=new ze(75,window.innerWidth/window.innerHeight,.1,1e3),r=new ai({antialias:!0,alpha:!0});r.setSize(window.innerWidth,window.innerHeight),r.toneMapping=Vf,r.toneMappingExposure=1.25,e.value.appendChild(r.domElement);const a=new qi(16777215,.6);s.add(a);const l=new Xi(16777215,1.2);l.position.set(5,5,5),s.add(l);const c=new Wi(16777215,2,50);c.position.set(0,2,4),s.add(c);const h=new An({uniforms:{time:{value:0},color1:{value:new he(16766720)},color2:{value:new he(16007990)}},vertexShader:`
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
        `}),u=new Nt({color:52945,metalness:.2,roughness:.5,clearcoat:.1,clearcoatRoughness:.8,transparent:!0,opacity:.99}),d=new Nt({color:52945,metalness:.2,roughness:.5,clearcoat:.1,clearcoatRoughness:.8,transparent:!0,opacity:.35});new Nt({color:13882323,metalness:.7,roughness:.25,clearcoat:.4,clearcoatRoughness:.1,transparent:!1,opacity:1}),new Nt({color:12632256,metalness:1,roughness:.3,clearcoat:.5,clearcoatRoughness:.1,transparent:!0,opacity:.35});const f=new Nt({color:16738740,metalness:.2,roughness:.5,clearcoat:.1,clearcoatRoughness:.8,transparent:!0,opacity:.79}),_=new Nt({color:13369344,metalness:.2,roughness:.6,clearcoat:.1,clearcoatRoughness:.8,transparent:!1,opacity:.99,depthWrite:!0,depthTest:!0}),y=new Nt({color:16738740,metalness:.2,roughness:.6,clearcoat:.1,clearcoatRoughness:.8,transparent:!1,opacity:.99,depthWrite:!0,depthTest:!0}),m=`
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
    `,b=new An({uniforms:{time:{value:0},opacity:{value:1}},vertexShader:m,fragmentShader:p,transparent:!1,depthWrite:!0}),M=new $t,S=new bt(1,32,32,0,Math.PI),O=new R(S,d),I=new R(S,u);O.scale.set(.85,.85,.8),I.scale.set(.85,.85,.8),O.position.y=-.2,I.position.y=-.2,O.rotation.y=Math.PI/2,I.rotation.y=Math.PI*1.5;const P=new be(1,32),U=new R(P,u);U.scale.set(.85,.85,.8),U.position.set(0,-.2,0),U.rotation.y=Math.PI/2;const nt=new $t;nt.add(O),nt.add(I),nt.add(U),M.add(nt);const x=new bt(.6,32,32,0,Math.PI),E=new R(x,u);E.scale.set(1,.95,.95),E.position.set(0,1,0),E.rotation.y=Math.PI*1.5;const j=new R(x,d);j.scale.set(1,.95,.95),j.position.set(0,1,0),j.rotation.y=Math.PI/2;const k=new be(.6,32),J=new R(k,u);J.position.set(0,1,0),J.rotation.y=Math.PI/2,J.scale.set(1,.95,.95);const at=new $t;at.add(E),at.add(j),at.add(J),M.add(at);const V=new bt(.25,32,32),Z=new R(V,u);Z.position.set(-.45,1.35,-.1),M.add(Z);const H=new R(V,d);H.position.set(.45,1.35,-.1),M.add(H);const gt=new bt(.25,32,32,Math.PI/2,Math.PI),yt=new R(gt,u);yt.scale.set(1.1,.6,.8),yt.position.set(0,.84,.5),yt.rotation.y=Math.PI;const _t=new bt(.25,32,32,Math.PI/2,Math.PI),It=new R(_t,d);It.scale.set(1.1,.6,.8),It.position.set(0,.84,.5),It.rotation.y=0;const zt=new be(.25,32),rt=new R(zt,u);rt.scale.set(.8,.6,.8),rt.position.set(0,.84,.5),rt.rotation.y=Math.PI/2;const ft=new $t;ft.add(yt),ft.add(It),ft.add(rt),M.add(ft);const vt=new Fn;vt.moveTo(0,0),vt.bezierCurveTo(0,-.3,-.6,-.3,-.6,0),vt.bezierCurveTo(-.6,.3,0,.6,0,1),vt.bezierCurveTo(0,.6,.6,.3,.6,0),vt.bezierCurveTo(.6,-.3,0,-.3,0,0);const F={depth:.4,bevelEnabled:!0,bevelSegments:2,steps:2,bevelSize:.1,bevelThickness:.1};new Nt({color:16777215,metalness:0,roughness:.1,clearcoat:1,clearcoatRoughness:.1,transparent:!0,opacity:.85,reflectivity:1,envMapIntensity:1});const lt=new Vn(vt,F);new Hn({color:0});const ot=new R(lt,f);ot.scale.set(.1,.1,.1),ot.rotation.z=ie.degToRad(210),ot.rotation.x=ie.degToRad(5),ot.rotation.y=ie.degToRad(-45),ot.position.set(-.4,.9,.45);const ht=new R(lt,b);ht.scale.set(.5,.5,.5),ht.position.set(.35,0,0),ht.rotation.y=Math.PI,ht.rotation.x=Math.PI,M.add(ht);const Mt=new R(lt,h);Mt.scale.set(.35,.35,.35),Mt.position.set(.3,0,0),Mt.rotation.y=Math.PI,Mt.rotation.x=Math.PI;const tt=new R(lt,y);tt.scale.set(.25,.25,.25),tt.position.set(.27,.2,0),tt.rotation.y=Math.PI,tt.rotation.x=Math.PI;const g=new R(lt,_);g.scale.set(.3,.3,.3),g.position.set(.23,-.5,.3),g.rotation.y=Math.PI,g.rotation.x=Math.PI;const T=new R(lt,b);T.scale.set(.4,.4,.4),T.position.set(.27,0,.35),T.rotation.y=Math.PI,T.rotation.x=Math.PI;const L=new bt(.35,32,32),N=new R(L,u);N.scale.set(.75,1.25,.65),N.position.set(-.7,-.15,.2),M.add(N);const D=new R(L,d);D.scale.set(.75,1.25,.65),D.position.set(.7,-.15,.2),M.add(D);const X=new ue(.2,.22,.6,32),K=new R(X,u);K.position.set(-.4,-1.05,0),M.add(K);const w=new R(X,d);w.position.set(.4,-1.05,0),M.add(w);const v=new bt(.3,32,32),C=new R(v,u);C.scale.set(1,.72,1.5),C.position.set(-.4,-1.45,.17),M.add(C);const W=new R(v,d);W.scale.set(1,.72,1.5),W.position.set(.4,-1.45,.17),M.add(W);const z=new bt(.44,32,32),G=new R(z,u);G.position.set(-.15,-.45,-.4),M.add(G);const ut=new R(z,d);ut.position.set(.15,-.45,-.4),M.add(ut);const ct=new bt(.18,32,32),pt=new R(ct,f);pt.position.set(0,-.35,-.8),M.add(pt),new Yi().load("https://threejs.org/examples/fonts/helvetiker_bold.typeface.json",function(Et){const Vt=new Ve("X",{font:Et,size:.18,depth:.05}),Dt=new Hn({color:0}),kt=new R(Vt,Dt);kt.position.set(-.3,.99,.53),kt.rotation.x=ie.degToRad(-5),kt.rotation.y=ie.degToRad(-15),M.add(kt);const B=new Ve("+",{font:Et,size:.25,depth:.1}),mt=new Hn({color:0}),et=new R(B,mt);et.position.set(.14,.99,.53),et.rotation.y=ie.degToRad(12),et.rotation.x=ie.degToRad(-5),M.add(et)}),pt.renderOrder=1,M.scale.set(1.2,1.2,1.2),s.add(M),M.position.set(t.bodyPosition.x,t.bodyPosition.y,t.bodyPosition.z),o.position.set(t.bodyPosition.x,1,t.cameraPosition),o.lookAt(t.bodyPosition.x,0,0),o.position.z=4;const dt={x:0,y:0};let xt=!0,Pt=null;const Lt=Et=>{xt=!1,dt.x=Et.clientX/window.innerWidth*2-1,dt.y=-(Et.clientY/window.innerHeight)*2+1;const Vt=dt.x*Math.PI*.2,Dt=dt.y*Math.PI*.2;M.rotation.y=Vt,M.rotation.x=Dt,clearTimeout(Pt),Pt=setTimeout(()=>{xt=!0},500)};window.addEventListener("mousemove",Lt),h.uniforms.time.value+=.04,i(),We(()=>t.bodyPosition,Et=>{M.position.set(Et.x,Et.y,Et.z)}),We(()=>t.cameraPosition,Et=>{o.position.set(t.bodyPosition.x,1,Et),o.lookAt(t.bodyPosition.x,0,0)}),window.addEventListener("resize",()=>{o.aspect=window.innerWidth/window.innerHeight,o.updateProjectionMatrix(),r.setSize(window.innerWidth,window.innerHeight)})}}),(i,s)=>(wi(),Si("div",{ref_key:"threeCanvas",ref:e,class:Wn(n.background?"no-bg":"three-canvas")},null,2))}}),p1=Ei(f1,[["__scopeId","data-v-5bf83852"]]),m1=Xn({__name:"MetalBear",props:{background:{type:Boolean,default:!1},cameraPosition:{type:Number,default:5},bodyPosition:{type:Object,default:()=>({x:0,y:0,z:0})}},setup(n){const t=n,e=Zt(null);let i=null,s=Zt(!1),o=Zt(!1),r=Zt(!1);return ci(()=>{if(e.value){let a=function(){requestAnimationFrame(a),s.value?u.rotation.y+=.03:o.value&&(u.rotation.y-=.03),h.render(l,c)};const l=new li,c=new ze(75,window.innerWidth/window.innerHeight,.1,1e3),h=new ai({antialias:!0,alpha:!0});h.setSize(window.innerWidth,window.innerHeight),e.value.appendChild(h.domElement);const u=new $t,d=new qi(16777215,2);l.add(d);const f=new Xi(16777215,4);f.position.set(5,5,5),l.add(f);const _=new Wi(16777215,5,50);_.position.set(0,2,4),l.add(_);const y=new fs,m=y.load("/3d-bear-arts/assets/lv2.jpg"),p=y.load("/3d-bear-arts/assets/lv2.jpg");m.wrapS=m.wrapT=Je,p.wrapS=p.wrapT=Je;const b=new Nt({color:8343336,metalness:0,roughness:.8,bumpMap:m,bumpScale:.1,clearcoat:.2,clearcoatRoughness:.9,map:p,envMapIntensity:.7}),M=new Nt({color:5978654,metalness:0,roughness:.8,bumpMap:m,bumpScale:.1,clearcoat:.2,clearcoatRoughness:.9,map:p,envMapIntensity:.7}),S=new Nt({color:13152668,metalness:.2,roughness:.05,bumpMap:m,bumpScale:.05,clearcoat:1,clearcoatRoughness:.05,map:p,transparent:!0,opacity:.4,transmission:.9,envMapIntensity:1,reflectivity:.9,ior:1.45,side:me});new Nt({color:13421772,metalness:1,roughness:.5,clearcoat:.3,clearcoatRoughness:.3});const O=new bt(1,32,32,0,Math.PI),I=new R(O,S),P=new R(O,b);I.scale.set(.85,.85,.8),P.scale.set(.85,.85,.8),I.position.y=-.2,P.position.y=-.2,I.rotation.y=Math.PI/2,P.rotation.y=Math.PI*1.5;const U=new be(1,32),nt=new R(U,b);nt.scale.set(.85,.85,.8),nt.position.set(0,-.2,0),nt.rotation.y=Math.PI/2;const x=new $t;x.add(I),x.add(P),x.add(nt),u.add(x);const E=new bt(.6,32,32,0,Math.PI),j=new R(E,b);j.scale.set(1,.95,.95),j.position.set(0,1,0),j.rotation.y=Math.PI*1.5;const k=new R(E,S);k.scale.set(1,.95,.95),k.position.set(0,1,0),k.rotation.y=Math.PI/2;const J=new be(.6,32),at=new R(J,b);at.position.set(0,1,0),at.rotation.y=Math.PI/2,at.scale.set(1,.95,.95);const V=new $t;V.add(j),V.add(k),V.add(at),u.add(V);const Z=new bt(.25,32,32),H=new R(Z,b);H.position.set(-.45,1.35,-.1),u.add(H);const gt=new R(Z,S);gt.position.set(.45,1.35,-.1),u.add(gt);const yt=new bt(.25,32,32,Math.PI/2,Math.PI),_t=new R(yt,M);_t.scale.set(1.1,.6,.8),_t.position.set(0,.84,.5),_t.rotation.y=Math.PI;const It=new bt(.25,32,32,Math.PI/2,Math.PI),zt=new R(It,S);zt.scale.set(1.1,.6,.8),zt.position.set(0,.84,.5),zt.rotation.y=0;const rt=new be(.25,32),ft=new R(rt,b);ft.scale.set(.8,.6,.8),ft.position.set(0,.84,.5),ft.rotation.y=Math.PI/2;const vt=new $t;vt.add(_t),vt.add(zt),vt.add(ft),u.add(vt);const F=new Fn;F.moveTo(0,0),F.bezierCurveTo(0,-.3,-.6,-.3,-.6,0),F.bezierCurveTo(-.6,.3,0,.6,0,1),F.bezierCurveTo(0,.6,.6,.3,.6,0),F.bezierCurveTo(.6,-.3,0,-.3,0,0);const lt={depth:.4,bevelEnabled:!0,bevelSegments:2,steps:2,bevelSize:.1,bevelThickness:.1};new Nt({color:16777215,metalness:0,roughness:.1,clearcoat:1,clearcoatRoughness:.1,transparent:!0,opacity:.85,reflectivity:1,envMapIntensity:1});const ot=new Vn(F,lt),ht=new R(ot,b);ht.scale.set(.1,.1,.1),ht.rotation.z=ie.degToRad(210),ht.rotation.x=ie.degToRad(5),ht.rotation.y=ie.degToRad(-45),ht.position.set(-.4,.9,.45);const Mt=new R(ot,M);Mt.scale.set(.6,.5,.5),Mt.position.set(.35,0,0),Mt.rotation.y=Math.PI,Mt.rotation.x=Math.PI;const tt=new R(ot,M);tt.scale.set(.2,.2,.2),tt.position.set(.5,-.1,.2),tt.rotation.y=Math.PI,tt.rotation.x=Math.PI,u.add(tt);const g=new ii(1.3,1.2,.6),T=new R(g,b);T.scale.set(.45,.45,.45),T.position.set(.35,-.2,.1),T.rotation.y=Math.PI;const L=new po(.15,.025,10,100);new Nt({color:8343336,metalness:.3,roughness:.4,clearcoat:.5});const N=new R(L,b);N.position.set(.35,.1,.1),N.rotation.z=Math.PI/2,N.rotation.x=Math.PI/8,N.rotation.y=Math.PI/14;const D=new R(L,b);D.position.set(.35,.1,.13),D.rotation.z=Math.PI/2,D.rotation.x=Math.PI/-8,D.rotation.y=Math.PI/12;const X=new $t;X.add(T),X.add(N),X.add(D),u.add(X);const K=new bt(.35,32,32),w=new R(K,b);w.scale.set(.75,1.25,.65),w.position.set(-.7,-.15,.2),u.add(w);const v=new R(K,S);v.scale.set(.75,1.25,.65),v.position.set(.7,-.15,.2),u.add(v);const C=new ue(.2,.22,.6,32),W=new R(C,b);W.position.set(-.4,-1.05,0),u.add(W);const z=new R(C,S);z.position.set(.4,-1.05,0),u.add(z);const G=new bt(.3,32,32),ut=new R(G,b);ut.scale.set(1,.72,1.5),ut.position.set(-.4,-1.45,.17),u.add(ut);const ct=new R(G,S);ct.scale.set(1,.72,1.5),ct.position.set(.4,-1.45,.17),u.add(ct);const pt=new bt(.44,32,32),Rt=new R(pt,b);Rt.position.set(-.15,-.45,-.4),u.add(Rt);const dt=new R(pt,S);dt.position.set(.15,-.45,-.4),u.add(dt);const xt=new bt(.18,32,32),Pt=new R(xt,b);Pt.position.set(0,-.35,-.8),u.add(Pt),new Yi().load("https://threejs.org/examples/fonts/helvetiker_bold.typeface.json",function(Q){const wt=new Ve("X",{font:Q,size:.2,depth:.05});new Hn({color:0});const St=new R(wt,M);St.position.set(-.3,.99,.53),St.rotation.x=ie.degToRad(-5),St.rotation.y=ie.degToRad(-15),u.add(St);const Bt=new Ve("O",{font:Q,size:.2,depth:.05});new Hn({color:0});const Kt=new R(Bt,M);Kt.position.set(.14,.99,.53),Kt.rotation.y=ie.degToRad(12),Kt.rotation.x=ie.degToRad(-5),u.add(Kt)}),Pt.renderOrder=1,u.scale.set(1.35,1.35,1.35),l.add(u),u.position.set(t.bodyPosition.x,t.bodyPosition.y,t.bodyPosition.z),c.position.set(t.bodyPosition.x,1,t.cameraPosition),c.lookAt(t.bodyPosition.x,0,0),c.position.z=4;const Et=()=>{u.rotation.y,u.rotation.x},Vt=()=>{s.value=!0,o.value=!1,r.value=!1},Dt=()=>{s.value=!1,o.value=!0,r.value=!1},kt=()=>{s.value=!1,o.value=!1,Et()},B=Q=>{const wt=window.innerWidth/2;Q>wt?Vt():Dt(),Et()},mt=Q=>{clearTimeout(i),kt(),r.value=!0;const wt={x:Q.clientX/window.innerWidth*2-1,y:-(Q.clientY/window.innerHeight)*2+1};if(r.value){const St=wt.x*Math.PI*.2,Bt=wt.y*Math.PI*.2;u.rotation.y=St,u.rotation.x=Bt}i=setTimeout(()=>{r.value=!1,B(Q.clientX)},500)};window.addEventListener("mousemove",mt);const et=Q=>{if(r.value){const wt={x:Q.clientX/window.innerWidth*2-1,y:-(Q.clientY/window.innerHeight)*2+1},St=wt.x*Math.PI*.2,Bt=wt.y*Math.PI*.2;u.rotation.y=St,u.rotation.x=Bt}};window.addEventListener("mousemove",et),a(),We(()=>t.bodyPosition,Q=>{u.position.set(Q.x,Q.y,Q.z)}),We(()=>t.cameraPosition,Q=>{c.position.set(t.bodyPosition.x,1,Q),c.lookAt(t.bodyPosition.x,0,0)}),window.addEventListener("resize",()=>{c.aspect=window.innerWidth/window.innerHeight,c.updateProjectionMatrix(),h.setSize(window.innerWidth,window.innerHeight)})}}),(a,l)=>(wi(),Si("div",{ref_key:"threeCanvas",ref:e,class:Wn(n.background?"no-bg":"three-canvas")},null,2))}}),g1=Ei(m1,[["__scopeId","data-v-f3beb116"]]),_1=Xn({__name:"PopartBear",props:{background:{type:Boolean,default:!1},cameraPosition:{type:Number,default:5},bodyPosition:{type:Object,default:()=>({x:0,y:0,z:0})}},setup(n){const t=n,e=Zt(null);let i=null,s=Zt(!1),o=Zt(!1),r=Zt(!1);return ci(()=>{if(e.value){let a=function(){requestAnimationFrame(a),s.value?u.rotation.y+=.03:o.value&&(u.rotation.y-=.03),h.render(l,c)};const l=new li,c=new ze(75,window.innerWidth/window.innerHeight,.1,1e3),h=new ai({antialias:!0,alpha:!0});h.setSize(window.innerWidth,window.innerHeight),e.value.appendChild(h.domElement);const u=new $t,d=new qi(16777215,2);l.add(d);const f=new Xi(16777215,4);f.position.set(5,5,5),l.add(f);const _=new Wi(16777215,5,50);_.position.set(0,2,4),l.add(_);const y=new fs,m=y.load("/3d-bear-arts/assets/pop6.jpg"),p=y.load("/3d-bear-arts/assets/pop7.jpg");m.wrapS=m.wrapT=Je,p.wrapS=p.wrapT=Je;const b=new Nt({color:16738740,map:p,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9}),M=new Nt({color:16766720,metalness:.3,roughness:.1,clearcoat:1,clearcoatRoughness:.05,transparent:!0,opacity:.4,transmission:.8,ior:1.45,reflectivity:.9,envMapIntensity:1,side:me}),S=new Nt({color:16766720,map:m,metalness:.3,roughness:.5}),O=new Nt({color:16738740,metalness:.3,roughness:.1,clearcoat:1,clearcoatRoughness:.05,transparent:!0,opacity:.5,transmission:.8,ior:1.45,reflectivity:.9,envMapIntensity:1,side:me}),I=new Nt({color:9055202,map:m,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9});new Nt({color:9055202,metalness:.3,roughness:.1,clearcoat:1,clearcoatRoughness:.05,transparent:!0,opacity:.4,transmission:.8,ior:1.45,reflectivity:.9,envMapIntensity:1,side:me});const P=new Nt({color:65535,map:m,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9}),U=new Nt({color:65535,metalness:.3,roughness:.1,clearcoat:1,clearcoatRoughness:.05,transparent:!0,opacity:.4,transmission:.8,ior:1.45,reflectivity:.9,envMapIntensity:1,side:me}),nt=new bt(1,32,32,0,Math.PI),x=new R(nt,M),E=new R(nt,b);x.scale.set(.85,.85,.8),E.scale.set(.85,.85,.8),x.position.y=-.2,E.position.y=-.2,x.rotation.y=Math.PI/2,E.rotation.y=Math.PI*1.5;const j=new be(1,32),k=new R(j,b);k.scale.set(.85,.85,.8),k.position.set(0,-.2,0),k.rotation.y=Math.PI/2;const J=new $t;J.add(x),J.add(E),J.add(k),u.add(J);const at=new bt(.6,32,32,0,Math.PI),V=new R(at,S);V.scale.set(1,.95,.95),V.position.set(0,1,0),V.rotation.y=Math.PI*1.5;const Z=new R(at,O);Z.scale.set(1,.95,.95),Z.position.set(0,1,0),Z.rotation.y=Math.PI/2;const H=new be(.6,32),gt=new R(H,S);gt.position.set(0,1,0),gt.rotation.y=Math.PI/2,gt.scale.set(1,.95,.95);const yt=new $t;yt.add(V),yt.add(Z),yt.add(gt),u.add(yt);const _t=new bt(.25,32,32),It=new R(_t,b);It.position.set(-.45,1.35,-.1),u.add(It);const zt=new R(_t,M);zt.position.set(.45,1.35,-.1),u.add(zt);const rt=new bt(.25,32,32,Math.PI/2,Math.PI),ft=new R(rt,S);ft.scale.set(1.1,.6,.8),ft.position.set(0,.84,.5),ft.rotation.y=Math.PI;const vt=new bt(.25,32,32,Math.PI/2,Math.PI),F=new R(vt,O);F.scale.set(1.1,.6,.8),F.position.set(0,.84,.5),F.rotation.y=0;const lt=new be(.25,32),ot=new R(lt,S);ot.scale.set(.8,.6,.8),ot.position.set(0,.84,.5),ot.rotation.y=Math.PI/2;const ht=new $t;ht.add(ft),ht.add(F),ht.add(ot),u.add(ht);const Mt=new Fn;Mt.moveTo(0,0),Mt.bezierCurveTo(0,-.3,-.6,-.3,-.6,0),Mt.bezierCurveTo(-.6,.3,0,.6,0,1),Mt.bezierCurveTo(0,.6,.6,.3,.6,0),Mt.bezierCurveTo(.6,-.3,0,-.3,0,0);const tt={depth:.4,bevelEnabled:!0,bevelSegments:2,steps:2,bevelSize:.1,bevelThickness:.1},g=new Vn(Mt,tt),T=new R(g,S);T.scale.set(.5,.5,.5),T.position.set(.35,0,0),T.rotation.y=Math.PI,T.rotation.x=Math.PI,u.add(T);const L=new R(g,P);L.scale.set(.2,.2,.25),L.position.set(.5,-.3,.4),L.rotation.y=Math.PI,L.rotation.x=Math.PI,u.add(L);const N=new R(g,b);N.scale.set(.25,.25,.27),N.position.set(.4,.3,-.2),N.rotation.y=Math.PI,N.rotation.x=Math.PI,u.add(N);const D=new bt(.35,32,32),X=new R(D,P);X.scale.set(.75,1.25,.65),X.position.set(-.7,-.15,.2),u.add(X);const K=new R(D,U);K.scale.set(.75,1.25,.65),K.position.set(.7,-.15,.2),u.add(K);const w=new ue(.2,.22,.6,32),v=new R(w,S);v.position.set(-.4,-1.05,0),u.add(v);const C=new R(w,O);C.position.set(.4,-1.05,0),u.add(C);const W=new bt(.3,32,32),z=new R(W,S);z.scale.set(1,.72,1.5),z.position.set(-.4,-1.45,.17),u.add(z);const G=new R(W,O);G.scale.set(1,.72,1.5),G.position.set(.4,-1.45,.17),u.add(G);const ut=new bt(.44,32,32),ct=new R(ut,b);ct.position.set(-.15,-.45,-.4),u.add(ct);const pt=new R(ut,M);pt.position.set(.15,-.45,-.4),u.add(pt);const Rt=new bt(.18,32,32),dt=new R(Rt,b);dt.position.set(0,-.35,-.8),u.add(dt),new Yi().load("https://threejs.org/examples/fonts/helvetiker_bold.typeface.json",function(mt){const et=new Ve("X",{font:mt,size:.2,depth:.05});new Hn({color:0});const Q=new R(et,b);Q.position.set(-.3,.99,.53),Q.rotation.x=ie.degToRad(-5),Q.rotation.y=ie.degToRad(-15),u.add(Q);const wt=new Ve("O",{font:mt,size:.2,depth:.05});new Hn({color:0});const St=new R(wt,P);St.position.set(.14,.99,.53),St.rotation.y=ie.degToRad(12),St.rotation.x=ie.degToRad(-5),u.add(St);const Bt=new Ve("POP",{font:mt,size:1,height:.5,curveSegments:12,bevelEnabled:!0,bevelThickness:.1,bevelSize:.1,bevelSegments:5}),Kt=new Nt({color:16716947,metalness:.3,roughness:.6,clearcoat:.2});new Nt({color:16766720,metalness:.3,roughness:.6,clearcoat:.2});const Qt=new Nt({color:16766720,metalness:.3,roughness:.6,clearcoat:.2}),Jt=new Nt({color:16753920,metalness:.3,roughness:.6,clearcoat:.2}),ee=new R(Bt,Kt);ee.scale.set(.15,.15,.15),ee.position.set(.03,1.16,.1),ee.rotateZ(-25),u.add(ee);const ce=new R(Bt,I);ce.scale.set(.14,.14,.14),ce.rotateZ(45),ce.position.set(.2,-.7,.3),u.add(ce);const ge=new R(Bt,Qt);ge.scale.set(.14,.14,.14),ge.rotateZ(45),ge.rotateY(45),ge.position.set(.3,.7,.3),u.add(ge);const xe=new R(Bt,Qt);xe.scale.set(.15,.15,.15),xe.rotateZ(45),xe.rotateY(45),xe.position.set(.35,-1.5,.3),u.add(xe);const pe=new R(Bt,Jt);pe.scale.set(.17,.17,.17),pe.rotateZ(45),pe.rotateY(15),pe.position.set(.35,1,.3),u.add(pe)}),dt.renderOrder=1,u.scale.set(1.35,1.35,1.35),l.add(u),u.position.set(t.bodyPosition.x,t.bodyPosition.y,t.bodyPosition.z),c.position.set(t.bodyPosition.x,1,t.cameraPosition),c.lookAt(t.bodyPosition.x,0,0),c.position.z=4;const Pt=()=>{u.rotation.y,u.rotation.x},Lt=()=>{s.value=!0,o.value=!1,r.value=!1},Et=()=>{s.value=!1,o.value=!0,r.value=!1},Vt=()=>{s.value=!1,o.value=!1,Pt()},Dt=mt=>{const et=window.innerWidth/2;mt>et?Lt():Et(),Pt()},kt=mt=>{clearTimeout(i),Vt(),r.value=!0;const et={x:mt.clientX/window.innerWidth*2-1,y:-(mt.clientY/window.innerHeight)*2+1};if(r.value){const Q=et.x*Math.PI*.2,wt=et.y*Math.PI*.2;u.rotation.y=Q,u.rotation.x=wt}i=setTimeout(()=>{r.value=!1,Dt(mt.clientX)},500)};window.addEventListener("mousemove",kt);const B=mt=>{if(r.value){const et={x:mt.clientX/window.innerWidth*2-1,y:-(mt.clientY/window.innerHeight)*2+1},Q=et.x*Math.PI*.2,wt=et.y*Math.PI*.2;u.rotation.y=Q,u.rotation.x=wt}};window.addEventListener("mousemove",B),a(),We(()=>t.bodyPosition,mt=>{u.position.set(mt.x,mt.y,mt.z)}),We(()=>t.cameraPosition,mt=>{c.position.set(t.bodyPosition.x,1,mt),c.lookAt(t.bodyPosition.x,0,0)}),window.addEventListener("resize",()=>{c.aspect=window.innerWidth/window.innerHeight,c.updateProjectionMatrix(),h.setSize(window.innerWidth,window.innerHeight)})}}),(a,l)=>(wi(),Si("div",{ref_key:"threeCanvas",ref:e,class:Wn(n.background?"no-bg":"three-canvas")},null,2))}}),v1=Ei(_1,[["__scopeId","data-v-8cfea564"]]),x1={class:"pixel-controls"},y1={class:"side-buttons"},M1=Xn({__name:"PopArtBear3",props:{background:{type:Boolean,default:!1},cameraPosition:{type:Number,default:5},bodyPosition:{type:Object,default:()=>({x:0,y:0,z:0})}},setup(n){const t=n,e=Zt(null);let i=Zt(!1),s=Zt(!1),o=Zt(!1),r=Zt(!1);ci(()=>{if(e.value){let d=function(){requestAnimationFrame(d),i.value&&(m.rotation.y+=.03),s.value&&(m.rotation.y-=.03),o.value&&(m.rotation.x-=.03),r.value&&(m.rotation.x+=.03);const Q=mt.getElapsedTime();B.forEach((wt,St)=>{const Bt=.2+Math.sin(Q*3+et[St])*.1;wt.scale.set(Bt,Bt,Bt)}),y.render(f,_)};const f=new li,_=new ze(75,window.innerWidth/window.innerHeight,.1,1e3),y=new ai({antialias:!0,alpha:!0});y.setSize(window.innerWidth,window.innerHeight),e.value.appendChild(y.domElement);const m=new $t,p=new $t;f.add(p);const b=new qi(16777215,2);f.add(b);const M=new Xi(16777215,4);M.position.set(5,5,5),f.add(M);const S=new Wi(16777215,5,50);S.position.set(0,2,4),f.add(S);const O=new fs,I=O.load("/3d-bear-arts/assets/pop6.jpg"),P=O.load("/3d-bear-arts/assets/pop7.jpg");I.wrapS=I.wrapT=Je,P.wrapS=P.wrapT=Je,P.repeat.set(2,2);const U=new Nt({color:16738740,map:P,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9}),nt=new Nt({color:16766720,metalness:.3,roughness:.1,clearcoat:1,clearcoatRoughness:.05,transparent:!0,opacity:.4,transmission:.8,ior:1.45,reflectivity:.9,envMapIntensity:1,side:me}),x=new Nt({color:16766720,map:I,metalness:.3,roughness:.5}),E=new Nt({color:16738740,metalness:.3,roughness:.1,clearcoat:1,clearcoatRoughness:.05,transparent:!0,opacity:.5,transmission:.8,ior:1.45,reflectivity:.9,envMapIntensity:1,side:me}),j=new Nt({color:9055202,map:I,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9}),k=new Nt({color:65535,map:I,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9}),J=new Nt({color:65535,metalness:.3,roughness:.1,clearcoat:1,clearcoatRoughness:.05,transparent:!0,opacity:.4,transmission:.8,ior:1.45,reflectivity:.9,envMapIntensity:1,side:me}),at=new bt(1,32,32,0,Math.PI),V=new R(at,nt),Z=new R(at,U);V.scale.set(.85,.85,.8),Z.scale.set(.85,.85,.8),V.position.y=-.2,Z.position.y=-.2,V.rotation.y=Math.PI/2,Z.rotation.y=Math.PI*1.5;const H=new be(1,32),gt=new R(H,U);gt.scale.set(.85,.85,.8),gt.position.set(0,-.2,0),gt.rotation.y=Math.PI/2;const yt=new $t;yt.add(V),yt.add(Z),yt.add(gt),m.add(yt);const _t=new bt(.6,32,32,0,Math.PI),It=new R(_t,x);It.scale.set(1,.95,.95),It.position.set(0,1,0),It.rotation.y=Math.PI*1.5;const zt=new R(_t,E);zt.scale.set(1,.95,.95),zt.position.set(0,1,0),zt.rotation.y=Math.PI/2;const rt=new be(.6,32),ft=new R(rt,x);ft.position.set(0,1,0),ft.rotation.y=Math.PI/2,ft.scale.set(1,.95,.95);const vt=new $t;vt.add(It),vt.add(zt),vt.add(ft),m.add(vt);const F=new bt(.25,32,32),lt=new R(F,U);lt.position.set(-.45,1.35,-.1),m.add(lt);const ot=new R(F,nt);ot.position.set(.45,1.35,-.1),m.add(ot);const ht=new bt(.25,32,32,Math.PI/2,Math.PI),Mt=new R(ht,x);Mt.scale.set(1.1,.6,.8),Mt.position.set(0,.84,.5),Mt.rotation.y=Math.PI;const tt=new bt(.25,32,32,Math.PI/2,Math.PI),g=new R(tt,E);g.scale.set(1.1,.6,.8),g.position.set(0,.84,.5),g.rotation.y=0;const T=new be(.25,32),L=new R(T,x);L.scale.set(.8,.6,.8),L.position.set(0,.84,.5),L.rotation.y=Math.PI/2;const N=new $t;N.add(Mt),N.add(g),N.add(L),m.add(N);const D=new Fn;D.moveTo(0,0),D.bezierCurveTo(0,-.3,-.6,-.3,-.6,0),D.bezierCurveTo(-.6,.3,0,.6,0,1),D.bezierCurveTo(0,.6,.6,.3,.6,0),D.bezierCurveTo(.6,-.3,0,-.3,0,0);const X={depth:.4,bevelEnabled:!0,bevelSegments:2,steps:2,bevelSize:.1,bevelThickness:.1},K=new Vn(D,X),w=new R(K,x);w.scale.set(.5,.5,.5),w.position.set(.3,0,0),w.rotation.y=Math.PI,w.rotation.x=Math.PI,m.add(w);const v=new R(K,k);v.scale.set(.2,.2,.25),v.position.set(.35,-.3,.4),v.rotation.y=Math.PI,v.rotation.x=Math.PI,m.add(v);const C=new R(K,U);C.scale.set(.25,.25,.27),C.position.set(.38,.3,-.2),C.rotation.y=Math.PI,C.rotation.x=Math.PI,m.add(C);const W=new bt(.35,32,32),z=new R(W,k);z.scale.set(.75,1.25,.65),z.position.set(-.7,-.15,.2),m.add(z);const G=new R(W,J);G.scale.set(.75,1.25,.65),G.position.set(.7,-.15,.2),m.add(G);const ut=new ue(.2,.22,.6,32),ct=new R(ut,x);ct.position.set(-.4,-1.05,0),m.add(ct);const pt=new R(ut,E);pt.position.set(.4,-1.05,0),m.add(pt);const Rt=new bt(.3,32,32),dt=new R(Rt,x);dt.scale.set(1,.72,1.5),dt.position.set(-.4,-1.45,.17),m.add(dt);const xt=new R(Rt,E);xt.scale.set(1,.72,1.5),xt.position.set(.4,-1.45,.17),m.add(xt);const Pt=new bt(.44,32,32),Lt=new R(Pt,U);Lt.position.set(-.15,-.45,-.4),m.add(Lt);const Et=new R(Pt,nt);Et.position.set(.15,-.45,-.4),m.add(Et);const Vt=new bt(.18,32,32),Dt=new R(Vt,U);Dt.position.set(0,-.35,-.8),m.add(Dt),new Yi().load("https://threejs.org/examples/fonts/helvetiker_bold.typeface.json",function(Q){const wt=new Ve("X",{font:Q,size:.2,depth:.05}),St=new R(wt,U);St.position.set(-.3,.99,.53),St.rotation.x=ie.degToRad(-5),St.rotation.y=ie.degToRad(-15),m.add(St);const Bt=new Ve("O",{font:Q,size:.2,depth:.05}),Kt=new R(Bt,k);Kt.position.set(.14,.99,.53),Kt.rotation.y=ie.degToRad(12),Kt.rotation.x=ie.degToRad(-5),m.add(Kt);const Qt=new Ve("POP",{font:Q,size:1,height:.5,curveSegments:12,bevelEnabled:!0,bevelThickness:.1,bevelSize:.1,bevelSegments:5});new Ve("🐻",{font:Q,size:1,height:.5,curveSegments:12,bevelEnabled:!0,bevelThickness:.1,bevelSize:.1,bevelSegments:5});const Jt=new Ve("BAO      BEAR",{font:Q,size:2,height:.5,curveSegments:12,bevelEnabled:!0,bevelThickness:.1,bevelSize:.1,bevelSegments:3}),ee=new Nt({color:16716947,metalness:.3,roughness:.6,clearcoat:.2});new Nt({color:16766720,metalness:.3,roughness:.6,clearcoat:.2});const ce=new Nt({color:16766720,metalness:.3,roughness:.6,clearcoat:.2}),ge=new Nt({color:16753920,metalness:.3,roughness:.6,clearcoat:.2}),xe=new R(Qt,ee);xe.scale.set(.15,.15,.15),xe.position.set(.02,1.16,.1),xe.rotateZ(-25),m.add(xe);const pe=new R(Qt,j);pe.scale.set(.14,.14,.14),pe.rotateZ(45),pe.position.set(.2,-.7,.3),m.add(pe);const Te=new R(Qt,ce);Te.scale.set(.14,.14,.14),Te.rotateZ(45),Te.rotateY(45),Te.position.set(.3,.7,.3),m.add(Te);const _e=new R(Qt,ce);_e.scale.set(.15,.15,.15),_e.rotateZ(45),_e.rotateY(45),_e.position.set(.35,-1.5,.3),m.add(_e);const He=new R(Qt,ge);He.scale.set(.17,.17,.17),He.rotateZ(45),He.rotateY(15),He.position.set(.35,1,.3),m.add(He);const Re=new R(Jt,ee);Re.scale.set(.7,.7,.7),Re.position.set(-6,0,-3),p.add(Re)}),Dt.renderOrder=1,m.scale.set(1.4,1.4,1.4),f.add(m),m.position.set(t.bodyPosition.x,t.bodyPosition.y,t.bodyPosition.z),_.position.set(t.bodyPosition.x,1,t.cameraPosition),_.lookAt(t.bodyPosition.x,0,0),_.position.z=4,m.rotation.x=.1;const B=[w,v,C],mt=new Cp,et=[0,Math.PI/2,Math.PI,0,Math.PI/3];d(),We(()=>t.bodyPosition,Q=>{m.position.set(Q.x,Q.y,Q.z)}),We(()=>t.cameraPosition,Q=>{_.position.set(t.bodyPosition.x,1,Q),_.lookAt(t.bodyPosition.x,0,0)}),window.addEventListener("resize",()=>{_.aspect=window.innerWidth/window.innerHeight,_.updateProjectionMatrix(),y.setSize(window.innerWidth,window.innerHeight)})}});function a(){s.value=!0}function l(){i.value=!0}function c(){o.value=!0}function h(){r.value=!0}function u(){s.value=!1,i.value=!1,o.value=!1,r.value=!1}return(d,f)=>(wi(),Si(Mn,null,[Xt("div",{ref_key:"threeCanvas",ref:e,class:Wn(n.background?"no-bg":"three-canvas")},null,2),Xt("div",x1,[Xt("button",{class:"pixel-btn up",onMousedown:c,onMouseup:u},"UP",32),Xt("div",y1,[Xt("button",{class:"pixel-btn left",onMousedown:a,onMouseup:u},"LEFT",32),Xt("button",{class:"pixel-btn right",onMousedown:l,onMouseup:u},"RIGHT",32)]),Xt("button",{class:"pixel-btn down",onMousedown:h,onMouseup:u},"DOWN",32)])],64))}}),w1=Ei(M1,[["__scopeId","data-v-cb52c927"]]),S1={class:"pixel-controls"},E1={class:"side-buttons"},b1=Xn({__name:"MetalMachineBear",props:{background:{type:Boolean,default:!1},cameraPosition:{type:Number,default:5},bodyPosition:{type:Object,default:()=>({x:0,y:0,z:0})}},setup(n){const t=n,e=Zt(null);let i=Zt(!1),s=Zt(!1),o=Zt(!1),r=Zt(!1);ci(()=>{if(e.value){let d=function(ce,ge){const xe=new ue(kt,kt,B,32);xe.rotateX(Math.PI/2);const pe=new R(xe,ce),Te=new $t;for(let He=0;He<mt;He++){const Re=He/mt*Math.PI*2,Tt=new ii(et,Q,wt),ne=new R(Tt,ce);ne.position.set((kt+wt/26)*Math.cos(Re),(kt+wt/26)*Math.sin(Re),0),ne.rotation.z=Re,Te.add(ne)}const _e=new $t;return _e.add(pe),_e.add(Te),_e.position.set(ge.x,ge.y,ge.z),_e},f=function(){requestAnimationFrame(f),i.value&&(p.rotation.y+=.03),s.value&&(p.rotation.y-=.03),o.value&&(p.rotation.x-=.03),r.value&&(p.rotation.x+=.03),St.rotation.z-=.02,Bt.rotation.z+=.03,Kt.rotation.z+=.02,Qt.rotation.z+=.02,Jt.rotation.z-=.03,ee.rotation.y+=.04,m.render(_,y)};const _=new li,y=new ze(75,window.innerWidth/window.innerHeight,.1,1e3),m=new ai({antialias:!0,alpha:!0});m.setSize(window.innerWidth,window.innerHeight),e.value.appendChild(m.domElement);const p=new $t,b=new $t;_.add(b);const M=new qi(16777215,2);_.add(M);const S=new Xi(16777215,4);S.position.set(5,5,5),_.add(S);const O=new Wi(16777215,5,50);O.position.set(0,2,4),_.add(O);const I=new fs,P=I.load("/3d-bear-arts/assets/metal.jpg"),U=I.load("/3d-bear-arts/assets/pop7.jpg"),nt=I.load("/3d-bear-arts/assets/gear.jpg");P.wrapS=P.wrapT=Je,U.wrapS=U.wrapT=Je,U.repeat.set(2,2);const x=new Nt({color:13882323,metalness:.9,roughness:.2,clearcoat:.5,clearcoatRoughness:.1,map:P});nt.mapping=_a;const E=new Nt({color:"#d3d3d3",metalness:1,roughness:.25,map:P,envMap:nt,clearcoat:.7,clearcoatRoughness:.3}),j=new Nt({color:"#C0C0C0",metalness:1,roughness:.25,envMap:nt,clearcoat:.7,clearcoatRoughness:.3}),k=new Nt({color:"#C0C0C0",metalness:1,roughness:.25,map:P,envMap:nt,transparent:!0,opacity:.8,clearcoat:.7,clearcoatRoughness:.3,transmission:.8,ior:1.45}),J=new Nt({color:"#C0C0C0",metalness:1,roughness:.5,map:P,envMap:nt,transparent:!0,opacity:.23,clearcoat:.7,clearcoatRoughness:.3,transmission:.8,ior:1.45}),at=new Nt({color:13882323,metalness:1,roughness:.25,clearcoat:1,clearcoatRoughness:.05,reflectivity:.9,envMapIntensity:1,side:me});new Nt({color:"#C0C0C0",metalness:1,roughness:.2,transparent:!0,opacity:.4,clearcoat:.7,clearcoatRoughness:.3,transmission:.8,ior:1.45});const V=new Nt({color:"#d3d3d3",metalness:1,roughness:.2,map:nt,envMap:nt,clearcoat:.7,clearcoatRoughness:.3});new Nt({color:12632256,metalness:.9,roughness:.2,clearcoat:.5,clearcoatRoughness:.1,map:nt}),new Nt({color:12632256,metalness:1,roughness:.3,clearcoat:.5,clearcoatRoughness:.1,map:P,transparent:!0,opacity:.3});const Z=new bt(1,32,32,0,Math.PI),H=new R(Z,J),gt=new R(Z,E);H.scale.set(.85,.85,.8),gt.scale.set(.85,.85,.8),H.position.y=-.2,gt.position.y=-.2,H.rotation.y=Math.PI/2,gt.rotation.y=Math.PI*1.5;const yt=new be(1,32),_t=new R(yt,k);_t.scale.set(.85,.85,.8),_t.position.set(0,-.2,0),_t.rotation.y=Math.PI/2;const It=new $t;It.add(H),It.add(gt),It.add(_t),p.add(It);const zt=new bt(.6,32,32,0,Math.PI),rt=new R(zt,E);rt.scale.set(1,.95,.95),rt.position.set(0,1,0),rt.rotation.y=Math.PI*1.5;const ft=new R(zt,J);ft.scale.set(1,.95,.95),ft.position.set(0,1,0),ft.rotation.y=Math.PI/2;const vt=new be(.6,32),F=new R(vt,k);F.position.set(0,1,0),F.rotation.y=Math.PI/2,F.scale.set(1,.95,.95);const lt=new $t;lt.add(rt),lt.add(ft),lt.add(F),p.add(lt);const ot=new bt(.25,32,32),ht=new R(ot,E);ht.position.set(-.45,1.35,-.1),p.add(ht);const Mt=new R(ot,k);Mt.position.set(.45,1.35,-.1),p.add(Mt);const tt=new bt(.25,32,32,Math.PI/2,Math.PI),g=new R(tt,E);g.scale.set(1.1,.6,.8),g.position.set(0,.84,.5),g.rotation.y=Math.PI;const T=new bt(.25,32,32,Math.PI/2,Math.PI),L=new R(T,k);L.scale.set(1.1,.6,.8),L.position.set(0,.84,.5),L.rotation.y=0;const N=new be(.25,32),D=new R(N,at);D.scale.set(.8,.6,.8),D.position.set(0,.84,.5),D.rotation.y=Math.PI/2;const X=new $t;X.add(g),X.add(L),X.add(D),p.add(X);const K=new Fn;K.moveTo(0,0),K.bezierCurveTo(0,-.3,-.6,-.3,-.6,0),K.bezierCurveTo(-.6,.3,0,.6,0,1),K.bezierCurveTo(0,.6,.6,.3,.6,0),K.bezierCurveTo(.6,-.3,0,-.3,0,0);const w={depth:.4,bevelEnabled:!0,bevelSegments:2,steps:2,bevelSize:.1,bevelThickness:.1},v=new Vn(K,w),C=new bt(.35,32,32),W=new R(C,E);W.scale.set(.75,1.25,.65),W.position.set(-.7,-.15,.2),p.add(W);const z=new R(C,k);z.scale.set(.75,1.25,.65),z.position.set(.7,-.15,.2),p.add(z);const G=new ue(.2,.22,.6,32),ut=new R(G,E);ut.position.set(-.4,-1.05,0),p.add(ut);const ct=new R(G,k);ct.position.set(.4,-1.05,0),p.add(ct);const pt=new bt(.3,32,32),Rt=new R(pt,E);Rt.scale.set(1,.72,1.5),Rt.position.set(-.4,-1.45,.17),p.add(Rt);const dt=new R(pt,k);dt.scale.set(1,.72,1.5),dt.position.set(.4,-1.45,.17),p.add(dt);const xt=new bt(.44,32,32),Pt=new R(xt,E);Pt.position.set(-.15,-.45,-.4),p.add(Pt);const Lt=new R(xt,J);Lt.position.set(.15,-.45,-.4),p.add(Lt);const Et=new bt(.18,32,32),Vt=new R(Et,E);Vt.position.set(0,-.35,-.8),p.add(Vt),new Yi().load("https://threejs.org/examples/fonts/helvetiker_bold.typeface.json",function(ce){const ge=new Ve("X",{font:ce,size:.2,depth:.05});new Hn({color:0});const xe=new R(ge,x);xe.position.set(-.3,.99,.53),xe.rotation.x=ie.degToRad(-5),xe.rotation.y=ie.degToRad(-15),p.add(xe);const pe=new Ve("O",{font:ce,size:.2,depth:.05});new Hn({color:0});const Te=new R(pe,x);Te.position.set(.14,.99,.53),Te.rotation.y=ie.degToRad(12),Te.rotation.x=ie.degToRad(-5),p.add(Te)}),Vt.renderOrder=1;const kt=1.2,B=.5,mt=8,et=.7,Q=.3,wt=.5,St=d(V,{x:-2,y:0,z:0}),Bt=d(V,{x:0,y:0,z:0}),Kt=d(V,{x:2,y:0,z:0}),Qt=d(V,{x:2,y:0,z:0}),Jt=d(V,{x:2,y:-2,z:0}),ee=new R(v,j);ee.scale.set(.3,.3,.3),ee.position.set(.25,1.1,0),ee.rotation.y=Math.PI,ee.rotation.x=Math.PI,p.add(ee),St.position.set(.35,0,0),Bt.position.set(.25,-.3,.4),Kt.position.set(.3,.3,-.2),Qt.position.set(.25,.17,.4),Jt.position.set(.5,-.3,.45),St.scale.set(.2,.2,.2),Bt.scale.set(.18,.18,.18),Kt.scale.set(.15,.15,.15),Qt.scale.set(.17,.17,.17),Jt.scale.set(.15,.15,.15),Bt.rotation.z=Math.PI/4,Kt.rotation.z=-Math.PI/4,Qt.rotation.y=-Math.PI/2,Jt.rotation.y=-Math.PI/2,p.add(St),p.add(Bt),p.add(Kt),p.add(Qt),p.add(Jt),p.rotation.x=.1,p.scale.set(1.4,1.4,1.4),_.add(p),p.position.set(t.bodyPosition.x,t.bodyPosition.y,t.bodyPosition.z),y.position.set(t.bodyPosition.x,1,t.cameraPosition),y.lookAt(t.bodyPosition.x,0,0),y.position.z=4,f(),We(()=>t.bodyPosition,ce=>{p.position.set(ce.x,ce.y,ce.z)}),We(()=>t.cameraPosition,ce=>{y.position.set(t.bodyPosition.x,1,ce),y.lookAt(t.bodyPosition.x,0,0)}),window.addEventListener("resize",()=>{y.aspect=window.innerWidth/window.innerHeight,y.updateProjectionMatrix(),m.setSize(window.innerWidth,window.innerHeight)})}});function a(){s.value=!0}function l(){i.value=!0}function c(){o.value=!0}function h(){r.value=!0}function u(){s.value=!1,i.value=!1,o.value=!1,r.value=!1}return(d,f)=>(wi(),Si(Mn,null,[Xt("div",{ref_key:"threeCanvas",ref:e,class:Wn(n.background?"no-bg":"three-canvas")},null,2),Xt("div",S1,[Xt("button",{class:"pixel-btn up",onMousedown:c,onMouseup:u},"UP",32),Xt("div",E1,[Xt("button",{class:"pixel-btn left",onMousedown:a,onMouseup:u},"LEFT",32),Xt("button",{class:"pixel-btn right",onMousedown:l,onMouseup:u},"RIGHT",32)]),Xt("button",{class:"pixel-btn down",onMousedown:h,onMouseup:u},"DOWN",32)])],64))}}),T1=Ei(b1,[["__scopeId","data-v-9a57b6d8"]]),A1={class:"pixel-controls"},R1={class:"side-buttons"},P1={class:"directional-buttons"},C1={class:"horizontal-buttons"},I1={class:"directional-buttons-woman"},L1={class:"horizontal-buttons-woman"},D1={class:"directional-buttons-kid"},U1={class:"horizontal-buttons-kid"},Jr=.1,Qr=.05,ta=.08,N1=Xn({__name:"Water",props:{background:{type:Boolean,default:!1},cameraPosition:{type:Number,default:5},bodyPosition:{type:Object,default:()=>({x:0,y:0,z:0})}},setup(n){const t=n,e=Zt(null);let i=Zt(!1),s=Zt(!1),o=Zt(!1),r=Zt(!1);const a=Xo(null),l=Zt(!1),c=Zt(!1),h=Zt(!1),u=Zt(!1),d=Xo(null),f=Xo(null),_=Zt(!1),y=Zt(!1),m=Zt(!1),p=Zt(!1),b=Zt(!1),M=Zt(!1),S=Zt(!1),O=Zt(!1),I=new ai({antialias:!0});I.setSize(window.innerWidth,window.innerHeight),document.body.appendChild(I.domElement);const P=new li,U=new ze(75,window.innerWidth/window.innerHeight,.1,1e3);U.position.z=5,ci(()=>{if(e.value){let tt=function(){const Ct=new $t,De=new bt(.2,32,32),Oe=new te({color:16767916}),ve=new R(De,Oe);ve.position.set(0,1.5,0),Ct.add(ve);const rn=new bt(.21,32,32,0,Math.PI*2,0,Math.PI/2),ye=new te({color:16711680}),je=new R(rn,ye);je.position.set(0,1.58,0),Ct.add(je);const Pn=new ue(.25,.25,.6,32),ke=new te({color:16767916}),Sn=new R(Pn,ke);Sn.position.set(0,1,0),Ct.add(Sn);const ui=new ue(.26,.26,.3,32),On=new te({color:255}),qn=new R(ui,On);qn.position.set(0,.65,0),Ct.add(qn);const Yn=new ue(.1,.1,.5,32),mn=new te({color:16767916}),Bn=new R(Yn,mn);Bn.position.set(-.15,.25,0),Ct.add(Bn);const $n=new R(Yn,mn);$n.position.set(.15,.25,0),Ct.add($n);const hi=new ue(.08,.08,.5,32),En=new R(hi,mn);En.position.set(-.35,1.3,0),En.rotation.z=Math.PI/4,Ct.add(En);const bn=new R(hi,mn);return bn.position.set(.35,1.3,0),bn.rotation.z=-Math.PI/4,Ct.add(bn),Ct.scale.set(.27,.27,.27),Ct.position.set(-.2,-.1,-.15),Ct},g=function(){const Ct=new $t,De=new bt(.18,32,32),Oe=new te({color:16767916}),ve=new R(De,Oe);ve.position.set(0,1.2,.04),Ct.add(ve);const rn=new bt(.19,32,32,.4,Math.PI*2,0,Math.PI/2),ye=new ue(.18,.18,.4,32),je=new te({color:9127187}),Pn=new R(rn,je);Pn.position.set(0,1.28,0),Ct.add(Pn);const ke=new R(ye,je);ke.position.set(0,1.1,-.01),Ct.add(ke);const Sn=new ue(.18,.2,.5,32),ui=new te({color:16767916}),On=new R(Sn,ui);On.position.set(0,.85,0),Ct.add(On);const qn=new bt(.08,32,32,0,Math.PI),Yn=new te({color:16738740}),mn=new R(qn,Yn);mn.position.set(-.09,.98,.15),Ct.add(mn);const Bn=new R(qn,Yn);Bn.position.set(.09,.98,.15),Ct.add(Bn);const $n=new ue(.22,.22,.25,32),hi=new te({color:16738740}),En=new R($n,hi);En.position.set(0,.6,0),Ct.add(En);const bn=new ue(.1,.1,.6,32),Ti=new te({color:16767916}),Po=new R(bn,Ti);Po.position.set(-.09,.5,.2),Po.rotation.x=Math.PI/2,Ct.add(Po);const Fs=new R(bn,Ti);Fs.position.set(.09,.5,.2),Fs.rotation.x=Math.PI/2,Ct.add(Fs);const Tu=new ue(.08,.08,.35,32),ka=new R(Tu,Ti);ka.position.set(-.24,.95,.18),ka.rotation.x=Math.PI/2,Ct.add(ka);const Va=new R(Tu,Ti);return Va.position.set(.2,.85,0),Va.rotation.z=Math.PI/20,Ct.add(Va),Ct.scale.set(.27,.27,.27),Ct.position.set(.2,-.15,-.32),Ct},T=function(){const Ct=new $t,De=new bt(.2,32,32),Oe=new te({color:16767916}),ve=new R(De,Oe);ve.position.set(0,1.5,0),Ct.add(ve);const rn=new bt(.21,32,32,0,Math.PI*2,0,Math.PI/2),ye=new te({color:25600}),je=new R(rn,ye);je.position.set(0,1.58,0),Ct.add(je);const Pn=new ue(.22,.22,.5,32),ke=new te({color:16767916}),Sn=new R(Pn,ke);Sn.position.set(0,1,0),Ct.add(Sn);const ui=new ue(.23,.23,.3,32),On=new te({color:8388736}),qn=new R(ui,On);qn.position.set(0,.65,0),Ct.add(qn);const Yn=new ue(.1,.1,.5,32),mn=new te({color:16767916}),Bn=new R(Yn,mn);Bn.position.set(-.15,.3,-.25),Bn.rotation.x=Math.PI/6,Ct.add(Bn);const $n=new R(Yn,mn);$n.position.set(.15,.3,.25),$n.rotation.x=-Math.PI/6,Ct.add($n);const hi=new ue(.08,.08,.4,32),En=new R(hi,mn);En.position.set(-.28,1,-.2),En.rotation.x=Math.PI/6,Ct.add(En);const bn=new R(hi,mn);return bn.position.set(.28,1.3,.1),bn.rotation.z=-Math.PI/8,Ct.add(bn),Ct.scale.set(.15,.15,.15),Ct.position.set(.3,-.25,.25),Ct.rotation.x=Math.PI/12,Ct.rotation.y=Math.PI/2,Ct.rotation.z=-Math.PI/3,Ct},L=function(Ct){let De=1,Oe=0;function ve(){requestAnimationFrame(ve),Ct.position.x+=.01*De,Ct.position.x>=.35?(De=-1,Ct.rotation.y=Math.PI):Ct.position.x<=-.35&&(De=1,Ct.rotation.y=0),Oe+=.003,Ct.position.y=-.4+Math.sin(Oe)*.1,K.render(D,X)}ve()},N=function(){requestAnimationFrame(N),i.value&&(w.rotation.y+=.03),s.value&&(w.rotation.y-=.03),o.value&&(w.rotation.x-=.03),r.value&&(w.rotation.x+=.03),xe.uniforms.u_time.value+=.25,st.rotation.y+=.04,K.render(D,X)};const D=new li,X=new ze(75,window.innerWidth/window.innerHeight,.1,1e3),K=new ai({antialias:!0,alpha:!0});K.setSize(window.innerWidth,window.innerHeight),e.value.appendChild(K.domElement);const w=new $t,v=new $t;D.add(v);const C=new qi(16777215,2);D.add(C);const W=new Xi(16777215,4);W.position.set(5,5,5),D.add(W);const z=new Wi(16777215,5,50);z.position.set(0,2,4),D.add(z);const G=new fs,ut=G.load("/3d-bear-arts/assets/beach.jpg");ut.repeat.set(.8,1);const ct=G.load("/3d-bear-arts/assets/sun.jpg");ut.wrapS=ut.wrapT=Je,ut.repeat.set(.8,1),ct.wrapS=ct.wrapT=Je;const pt=new Nt({color:11592447,map:ut,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9}),Rt=new Nt({color:11592447,map:ut,metalness:.3,roughness:.5,transparent:!0,opacity:.6,side:me,ior:1.33,depthWrite:!1,depthTest:!0}),dt=new Nt({color:11592447,map:ut,metalness:.1,roughness:.6,transparent:!0,opacity:.6,clearcoat:.9,clearcoatRoughness:.4,transmission:.7,ior:1.2,depthTest:!0,envMapIntensity:.8}),xt=new Nt({color:11592447,map:ut,metalness:.1,roughness:.6,transparent:!0,opacity:.3,clearcoat:.9,clearcoatRoughness:.4,ior:1.2,depthWrite:!1,depthTest:!0,envMapIntensity:.6,side:me}),Pt=new Nt({color:11592447,map:ut,metalness:.3,roughness:.5,transparent:!0,opacity:.8,side:me,ior:1.33}),Lt=new Nt({color:11592447,map:ut,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9}),Et=new bt(1,32,32,0,Math.PI),Vt=new R(Et,xt),Dt=new R(Et,Rt);Vt.scale.set(.85,.85,.8),Dt.scale.set(.85,.85,.8),Vt.position.y=-.2,Dt.position.y=-.2,Vt.rotation.y=Math.PI/2,Dt.rotation.y=Math.PI*1.5;const kt=new be(1,32),B=new R(kt,pt);B.scale.set(.85,.85,.8),B.position.set(0,-.2,0),B.rotation.y=Math.PI/2;const mt=new $t;mt.add(Vt),mt.add(Dt),mt.add(B),w.add(mt);const et=new bt(.6,32,32,0,Math.PI),Q=new R(et,pt);Q.scale.set(1,.95,.95),Q.position.set(0,1,0),Q.rotation.y=Math.PI*1.5;const wt=new R(et,dt);wt.scale.set(1,.95,.95),wt.position.set(0,1,0),wt.rotation.y=Math.PI/2;const St=new be(.6,32),Bt=new R(St,pt);Bt.position.set(0,1,0),Bt.rotation.y=Math.PI/2,Bt.scale.set(1,.95,.95);const Kt=new $t;Kt.add(Q),Kt.add(wt),Kt.add(Bt),w.add(Kt);const Qt=new bt(.6,32,32,0,Math.PI*2,0,Math.PI/2),Jt=new Nt({color:11592447,metalness:.1,roughness:.2,clearcoat:1,clearcoatRoughness:.1,transparent:!0,opacity:.9,transmission:.9,ior:1.33,reflectivity:.8,envMapIntensity:1}),ee=new R(Qt,Jt);ee.position.set(0,-.2,0),ee.rotation.x=Math.PI,ee.scale.set(1.25,1.25,1.25),mt.add(ee);const ce=new Nt({color:49151,metalness:.1,roughness:.5,clearcoat:.7,clearcoatRoughness:.25,side:me,transparent:!0,opacity:.7,depthWrite:!1}),ge=new R(kt,ce);ge.scale.set(.7,.7,.7),ge.position.set(0,-.3,0),ge.rotation.x=Math.PI/2,ge.renderOrder=1,mt.add(ge),w.add(mt);const xe=new An({transparent:!0,depthWrite:!1,depthTest:!0,uniforms:{u_time:{value:0},u_waveFrequency:{value:8},u_waveAmplitude:{value:.05},u_waveSpeed:{value:.2}},vertexShader:`
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
            `}),pe=new R(kt,xe);pe.position.set(0,-.3,0),pe.scale.set(.7,.7,.7),pe.rotation.x=-Math.PI/2,pe.renderOrder=1,mt.add(pe);const Te=new bt(.25,32,32),_e=new R(Te,Pt);_e.position.set(-.45,1.35,-.1),w.add(_e);const He=new R(Te,dt);He.position.set(.45,1.35,-.1),w.add(He);const Re=new bt(.25,32,32,Math.PI/2,Math.PI),Tt=new R(Re,Pt);Tt.scale.set(1.1,.6,.8),Tt.position.set(0,.84,.5),Tt.rotation.y=Math.PI;const ne=new bt(.25,32,32,Math.PI/2,Math.PI),Pe=new R(ne,dt);Pe.scale.set(1.1,.6,.8),Pe.position.set(0,.84,.5),Pe.rotation.y=0;const Le=new be(.25,32),Be=new R(Le,Rt);Be.scale.set(.8,.6,.8),Be.position.set(0,.84,.5),Be.rotation.y=Math.PI/2;const cn=new $t;cn.add(Tt),cn.add(Pe),cn.add(Be),w.add(cn);const on=new Nt({color:8374441,metalness:1,roughness:.25,envMap:ct,clearcoat:.7,clearcoatRoughness:.3}),A=new Fn;A.moveTo(0,0),A.bezierCurveTo(0,-.3,-.6,-.3,-.6,0),A.bezierCurveTo(-.6,.3,0,.6,0,1),A.bezierCurveTo(0,.6,.6,.3,.6,0),A.bezierCurveTo(.6,-.3,0,-.3,0,0);const Y={depth:.4,bevelEnabled:!0,bevelSegments:2,steps:2,bevelSize:.1,bevelThickness:.1},it=new Vn(A,Y),st=new R(it,on);st.scale.set(.2,.2,.2),st.position.set(.25,1.2,0),st.rotation.y=Math.PI,st.rotation.x=Math.PI,w.add(st);const $=new bt(.35,32,32),At=new R($,Rt);At.scale.set(.75,1.25,.65),At.position.set(-.7,-.15,.2),w.add(At);const Ut=new R($,xt);Ut.scale.set(.75,1.25,.65),Ut.position.set(.7,-.15,.2),w.add(Ut);const Gt=new ue(.2,.22,.6,32),Ht=new R(Gt,Pt);Ht.position.set(-.4,-1.05,0),w.add(Ht);const qt=new R(Gt,dt);qt.position.set(.4,-1.05,0),w.add(qt);const jt=new bt(.3,32,32),Wt=new R(jt,Pt);Wt.scale.set(1,.72,1.5),Wt.position.set(-.4,-1.45,.17),w.add(Wt);const oe=new R(jt,dt);oe.scale.set(1,.72,1.5),oe.position.set(.4,-1.45,.17),w.add(oe);const de=new bt(.44,32,32),Ce=new R(de,Pt);Ce.position.set(-.15,-.45,-.4),w.add(Ce);const Ze=new R(de,Pt);Ze.position.set(.15,-.45,-.4),w.add(Ze);const fe=new bt(.18,32,32),Yt=new R(fe,Pt);Yt.position.set(0,-.35,-.8),w.add(Yt),new Yi().load("https://threejs.org/examples/fonts/helvetiker_bold.typeface.json",function(Ct){const De=new Ve("X",{font:Ct,size:.2,depth:.05}),Oe=new R(De,Lt);Oe.position.set(-.3,.99,.53),Oe.rotation.x=ie.degToRad(-5),Oe.rotation.y=ie.degToRad(-15),w.add(Oe);const ve=new Ve("O",{font:Ct,size:.2,depth:.05}),rn=new R(ve,Lt);rn.position.set(.14,.99,.53),rn.rotation.y=ie.degToRad(12),rn.rotation.x=ie.degToRad(-5),w.add(rn)}),a.value=tt(),w.add(a.value),D.add(w),d.value=g(),w.add(d.value),f.value=T(),w.add(f.value),L(f.value),w.scale.set(1.4,1.4,1.4),D.add(w),w.position.set(t.bodyPosition.x,t.bodyPosition.y,t.bodyPosition.z),X.position.set(t.bodyPosition.x,1,t.cameraPosition),X.lookAt(t.bodyPosition.x,0,0),X.position.z=4,w.rotation.x=.1,N(),We(()=>t.bodyPosition,Ct=>{w.position.set(Ct.x,Ct.y,Ct.z)}),We(()=>t.cameraPosition,Ct=>{X.position.set(t.bodyPosition.x,1,Ct),X.lookAt(t.bodyPosition.x,0,0)}),window.addEventListener("resize",()=>{X.aspect=window.innerWidth/window.innerHeight,X.updateProjectionMatrix(),K.setSize(window.innerWidth,window.innerHeight)})}});function nt(){s.value=!0}function x(){i.value=!0}function E(){o.value=!0}function j(){r.value=!0}function k(){s.value=!1,i.value=!1,o.value=!1,r.value=!1}const J=()=>{l.value=!0,console.log(l.value),a.value&&(a.value.rotation.y=0),console.log(a.value)},at=()=>{c.value=!0,a.value&&(a.value.rotation.y=Math.PI),console.log(a.value)},V=()=>{h.value=!0,a.value&&(a.value.rotation.y=Math.PI/2)},Z=()=>{u.value=!0,a.value&&(a.value.rotation.y=-Math.PI/2)},H=()=>{l.value=!1,c.value=!1,h.value=!1,u.value=!1},gt=()=>{_.value=!0,d.value&&(d.value.rotation.y=Math.PI)},yt=()=>{y.value=!0,d.value&&(d.value.rotation.y=0)},_t=()=>{m.value=!0,d.value&&(d.value.rotation.y=-Math.PI/2)},It=()=>{p.value=!0,d.value&&(d.value.rotation.y=Math.PI/2)},zt=()=>{_.value=!1,y.value=!1,m.value=!1,p.value=!1},rt=()=>{requestAnimationFrame(rt),a.value&&(l.value&&(a.value.position.z-=Jr),c.value&&(a.value.position.z+=Jr),h.value&&(a.value.position.x-=Jr),u.value&&(a.value.position.x+=Jr)),I.render(P,U)},ft=()=>{requestAnimationFrame(ft),d.value&&(_.value&&(d.value.position.z-=Qr),y.value&&(d.value.position.z+=Qr),m.value&&(d.value.position.x-=Qr),p.value&&(d.value.position.x+=Qr))};ft(),rt();const vt=()=>{b.value=!0,f.value&&(f.value.rotation.y=0)},F=()=>{M.value=!0,f.value&&(f.value.rotation.y=Math.PI)},lt=()=>{S.value=!0,f.value&&(f.value.rotation.y=Math.PI/2)},ot=()=>{O.value=!0,f.value&&(f.value.rotation.y=-Math.PI/2)},ht=()=>{b.value=!1,M.value=!1,S.value=!1,O.value=!1},Mt=()=>{requestAnimationFrame(Mt),f.value&&(b.value&&(f.value.position.z-=ta),M.value&&(f.value.position.z+=ta),S.value&&(f.value.position.x-=ta),O.value&&(f.value.position.x+=ta))};return Mt(),(tt,g)=>(wi(),Si(Mn,null,[Xt("div",{ref_key:"threeCanvas",ref:e,class:Wn(n.background?"no-bg":"three-canvas")},null,2),Xt("div",A1,[Xt("button",{class:"pixel-btn up",onMousedown:E,onMouseup:k},"UP",32),Xt("div",R1,[Xt("button",{class:"pixel-btn left",onMousedown:nt,onMouseup:k},"LEFT",32),Xt("button",{class:"pixel-btn right",onMousedown:x,onMouseup:k},"RIGHT",32)]),Xt("button",{class:"pixel-btn down",onMousedown:j,onMouseup:k},"DOWN",32)]),Xt("div",P1,[Xt("button",{id:"move-north",class:"directional-btn north-btn",onMousedown:J,onMouseup:H},"UP",32),Xt("div",C1,[Xt("button",{id:"move-west",class:"directional-btn west-btn",onMousedown:V,onMouseup:H},"LEFT",32),Xt("button",{id:"move-east",class:"directional-btn east-btn",onMousedown:Z,onMouseup:H},"RIGHT",32)]),Xt("button",{id:"move-south",class:"directional-btn south-btn",onMousedown:at,onMouseup:H},"DOWN",32)]),Xt("div",I1,[Xt("button",{class:"directional-btn-woman north-btn",onMousedown:gt,onMouseup:zt},"UP",32),Xt("div",L1,[Xt("button",{class:"directional-btn-woman west-btn",onMousedown:_t,onMouseup:zt},"LEFT",32),Xt("button",{class:"directional-btn-woman east-btn",onMousedown:It,onMouseup:zt},"RIGHT",32)]),Xt("button",{class:"directional-btn-woman south-btn",onMousedown:yt,onMouseup:zt},"DOWN",32)]),Xt("div",D1,[Xt("button",{class:"directional-btn-kid north-btn",onMousedown:vt,onMouseup:ht},"UP",32),Xt("div",U1,[Xt("button",{class:"directional-btn-kid west-btn",onMousedown:lt,onMouseup:ht},"LEFT",32),Xt("button",{class:"directional-btn-kid east-btn",onMousedown:ot,onMouseup:ht},"RIGHT",32)]),Xt("button",{class:"directional-btn-kid south-btn",onMousedown:F,onMouseup:ht},"DOWN",32)])],64))}}),F1=Ei(N1,[["__scopeId","data-v-354294c6"]]),O1={class:"pixel-controls"},B1={class:"side-buttons"},z1=Xn({__name:"GhostBear",props:{background:{type:Boolean,default:!1},cameraPosition:{type:Number,default:5},bodyPosition:{type:Object,default:()=>({x:0,y:0,z:0})}},setup(n){const t=n,e=Zt(null);let i=Zt(!1),s=Zt(!1),o=Zt(!1),r=Zt(!1);ci(()=>{if(e.value){let d=function(_e,He){const Re=new $t,Tt=new bt(1,32,32),ne=new R(Tt,at);ne.scale.set(1,.8,1),Re.add(ne);const Pe=new ue(.1,.1,.5,16),Le=new te({color:9127187}),Be=new R(Pe,Le);return Be.position.set(0,.9,0),Re.add(Be),Re},f=function(){requestAnimationFrame(f),i.value&&(p.rotation.y+=.03),s.value&&(p.rotation.y-=.03),o.value&&(p.rotation.x-=.03),r.value&&(p.rotation.x+=.03),kt.rotation.z-=.04,B.rotation.z+=.04,mt.rotation.z+=.03,et.rotation.z+=.03,v.rotation.y+=.04,Te+=xe,p.position.y=t.bodyPosition.y+Math.sin(Te)*pe;const _e=ce.getElapsedTime();ee.forEach((He,Re)=>{const Tt=.1+Math.sin(_e*3+ge[Re])*.1;He.scale.set(Tt,Tt,Tt)}),m.render(_,y)};const _=new li,y=new ze(75,window.innerWidth/window.innerHeight,.1,1e3),m=new ai({antialias:!0,alpha:!0});m.setSize(window.innerWidth,window.innerHeight),e.value.appendChild(m.domElement);const p=new $t,b=new $t;_.add(b);const M=new qi(16777215,2);_.add(M);const S=new Xi(16777215,4);S.position.set(5,5,5),_.add(S);const O=new Wi(16777215,5,50);O.position.set(0,2,4),_.add(O);const I=new fs,P=I.load("/3d-bear-arts/assets/pumpkin.jpg");P.wrapS=P.wrapT=Je,P.repeat.set(.8,.85);const U=I.load("/3d-bear-arts/assets/pumpkin.jpg");U.wrapS=U.wrapT=Je,U.repeat.set(1,1);const nt=I.load("/3d-bear-arts/assets/pumpkin.jpg");nt.wrapS=U.wrapT=Je,nt.repeat.set(2,.8);const x=new Nt({color:16747520,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9}),E=new $t,j=new Nt({color:16747520,map:P,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9}),k=new Nt({color:16747520,map:U,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9}),J=new Nt({color:16747520,map:nt,metalness:.3,roughness:.1,clearcoat:1,clearcoatRoughness:.05,transparent:!0,opacity:.6,transmission:.8,ior:1.45,reflectivity:.9,envMapIntensity:1,side:me}),at=new Nt({color:16747520,map:nt,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9});new Nt({color:16766720,map:P,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9}),new Nt({color:9109504,map:P,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9}),new Nt({color:4915330,map:P,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9});const V=new bt(1,32,32,0,Math.PI),Z=new R(V,J),H=new R(V,j);Z.scale.set(.85,.85,.8),H.scale.set(.85,.85,.8),Z.position.y=-.2,H.position.y=-.2,Z.rotation.y=Math.PI/2,H.rotation.y=Math.PI*1.5;const gt=new be(1,32),yt=new R(gt,k);yt.scale.set(.85,.85,.8),yt.position.set(0,-.2,0),yt.rotation.y=Math.PI/2;const _t=new $t;_t.add(Z),_t.add(H),_t.add(yt),p.add(_t);const It=new bt(.6,32,32,0,Math.PI),zt=new R(It,j);zt.scale.set(1,.95,.95),zt.position.set(0,1,0),zt.rotation.y=Math.PI*1.5;const rt=new R(It,J);rt.scale.set(1,.95,.95),rt.position.set(0,1,0),rt.rotation.y=Math.PI/2;const ft=new be(.6,32),vt=new R(ft,k);vt.position.set(0,1,0),vt.rotation.y=Math.PI/2,vt.scale.set(1,.95,.95);const F=new $t;F.add(zt),F.add(rt),F.add(vt),p.add(F);const lt=new bt(.25,32,32),ot=new R(lt,at);ot.position.set(-.45,1.35,-.1),p.add(ot);const ht=new R(lt,J);ht.position.set(.45,1.35,-.1),p.add(ht);const Mt=new bt(.25,32,32,Math.PI/2,Math.PI),tt=new R(Mt,j);tt.scale.set(1.1,.6,.8),tt.position.set(0,.84,.5),tt.rotation.y=Math.PI;const g=new bt(.25,32,32,Math.PI/2,Math.PI),T=new R(g,J);T.scale.set(1.1,.6,.8),T.position.set(0,.84,.5),T.rotation.y=0;const L=new be(.25,32),N=new R(L,j);N.scale.set(.8,.6,.8),N.position.set(0,.84,.5),N.rotation.y=Math.PI/2;const D=new $t;D.add(tt),D.add(T),D.add(N),p.add(D);const X=new Fn;X.moveTo(0,0),X.bezierCurveTo(0,-.3,-.6,-.3,-.6,0),X.bezierCurveTo(-.6,.3,0,.6,0,1),X.bezierCurveTo(0,.6,.6,.3,.6,0),X.bezierCurveTo(.6,-.3,0,-.3,0,0);const K={depth:.4,bevelEnabled:!0,bevelSegments:2,steps:2,bevelSize:.1,bevelThickness:.1},w=new Vn(X,K),v=new R(w,x);v.scale.set(.3,.3,.3),v.position.set(.25,1.1,0),v.rotation.y=Math.PI,v.rotation.x=Math.PI,p.add(v);const C=new bt(.35,32,32),W=new R(C,k);W.scale.set(.75,1.25,.65),W.position.set(-.7,-.15,.2),p.add(W);const z=new R(C,J);z.scale.set(.75,1.25,.65),z.position.set(.7,-.15,.2),p.add(z);const G=new ue(.2,.22,.6,32),ut=new R(G,k);ut.position.set(-.4,-1.05,0),p.add(ut);const ct=new R(G,J);ct.position.set(.4,-1.05,0),p.add(ct);const pt=new bt(.3,32,32),Rt=new R(pt,at);Rt.scale.set(1,.72,1.5),Rt.position.set(-.4,-1.45,.17),p.add(Rt);const dt=new R(pt,J);dt.scale.set(1,.72,1.5),dt.position.set(.4,-1.45,.17),p.add(dt);const xt=new bt(.44,32,32),Pt=new R(xt,j);Pt.position.set(-.15,-.45,-.4),p.add(Pt);const Lt=new R(xt,J);Lt.position.set(.15,-.45,-.4),p.add(Lt);const Et=new bt(.18,32,32),Vt=new R(Et,at);Vt.position.set(0,-.35,-.8),p.add(Vt),Vt.renderOrder=1,new Yi().load("https://threejs.org/examples/fonts/helvetiker_bold.typeface.json",function(_e){const He=new Ve("X",{font:_e,size:.2,depth:.05}),Re=new R(He,k);Re.position.set(-.3,.99,.53),Re.rotation.x=ie.degToRad(-5),Re.rotation.y=ie.degToRad(-15),p.add(Re);const Tt=new Ve("O",{font:_e,size:.2,depth:.05}),ne=new R(Tt,k);ne.position.set(.14,.99,.53),ne.rotation.y=ie.degToRad(12),ne.rotation.x=ie.degToRad(-5),p.add(ne)}),p.add(E);const kt=d(),B=d(),mt=d(),et=d();kt.position.set(.35,-.35,-.3),B.position.set(.25,-.45,.3),mt.position.set(.3,.1,-.2),et.position.set(.25,.18,.4),kt.scale.set(.3,.3,.3),B.scale.set(.28,.28,.28),mt.scale.set(.25,.25,.25),et.scale.set(.23,.23,.23),B.rotation.z=Math.PI/4,mt.rotation.z=-Math.PI/4,et.rotation.y=-Math.PI/2,p.add(kt),p.add(B),p.add(mt),p.add(et);const Q=new Fn;Q.moveTo(-.5,0),Q.bezierCurveTo(-.75,.25,-1,.6,-.5,.8),Q.bezierCurveTo(-.25,.85,-.25,.5,-.15,.4),Q.bezierCurveTo(-.05,.6,.05,.6,.15,.4),Q.bezierCurveTo(.25,.5,.25,.85,.5,.8),Q.bezierCurveTo(1,.6,.75,.25,.5,0),Q.bezierCurveTo(.3,-.25,-.3,-.25,-.5,0);const wt={depth:.3,bevelEnabled:!1},St=new Vn(Q,wt),Bt=new Hn({color:0}),Kt=new R(St,Bt);Kt.scale.set(.3,.3,.6),Kt.rotation.x=0,Kt.rotation.z=0,Kt.position.set(.26,.35,.25),p.add(Kt);const Qt=new R(St,Bt);Qt.scale.set(.5,.5,.5),Qt.position.set(.4,-.1,.54),p.add(Qt);const Jt=new R(St,Bt);Jt.scale.set(.5,.5,.5),Jt.position.set(.32,-.35,.65),p.add(Jt),p.rotation.x=.1,p.scale.set(1.4,1.4,1.4),_.add(p),p.position.set(t.bodyPosition.x,t.bodyPosition.y,t.bodyPosition.z),y.position.set(t.bodyPosition.x,1,t.cameraPosition),y.lookAt(t.bodyPosition.x,0,0),y.position.z=4;const ee=[Kt,Qt,Jt],ce=new Cp,ge=[0,Math.PI/2,Math.PI,0,Math.PI/3];let xe=.05,pe=.25,Te=0;f(),We(()=>t.bodyPosition,_e=>{p.position.set(_e.x,_e.y,_e.z)}),We(()=>t.cameraPosition,_e=>{y.position.set(t.bodyPosition.x,1,_e),y.lookAt(t.bodyPosition.x,0,0)}),window.addEventListener("resize",()=>{y.aspect=window.innerWidth/window.innerHeight,y.updateProjectionMatrix(),m.setSize(window.innerWidth,window.innerHeight)})}});function a(){s.value=!0}function l(){i.value=!0}function c(){o.value=!0}function h(){r.value=!0}function u(){s.value=!1,i.value=!1,o.value=!1,r.value=!1}return(d,f)=>(wi(),Si(Mn,null,[Xt("div",{ref_key:"threeCanvas",ref:e,class:Wn(n.background?"no-bg":"three-canvas")},null,2),Xt("div",O1,[Xt("button",{class:"pixel-btn up",onMousedown:c,onMouseup:u},"UP",32),Xt("div",B1,[Xt("button",{class:"pixel-btn left",onMousedown:a,onMouseup:u},"LEFT",32),Xt("button",{class:"pixel-btn right",onMousedown:l,onMouseup:u},"RIGHT",32)]),Xt("button",{class:"pixel-btn down",onMousedown:h,onMouseup:u},"DOWN",32)])],64))}}),G1=Ei(z1,[["__scopeId","data-v-5eff72b3"]]),H1={class:"pixel-controls"},k1={class:"side-buttons"},V1=Xn({__name:"GhostBallonBear",props:{background:{type:Boolean,default:!1},cameraPosition:{type:Number,default:5},bodyPosition:{type:Object,default:()=>({x:0,y:0,z:0})}},setup(n){const t=n,e=Zt(null);let i=Zt(!1),s=Zt(!1),o=Zt(!1),r=Zt(!1);ci(()=>{if(e.value){let d=function(){requestAnimationFrame(d),i.value&&(m.rotation.y+=.03),s.value&&(m.rotation.y-=.03),o.value&&(m.rotation.x-=.03),r.value&&(m.rotation.x+=.03),K.rotation.y+=.03,Bt+=et,Kt+=Q,m.position.y=t.bodyPosition.y+Math.sin(Bt)*St,K.position.y=t.bodyPosition.y+Math.sin(Kt)*wt,kt.uniforms.u_time.value+=.25,y.render(f,_)};const f=new li,_=new ze(75,window.innerWidth/window.innerHeight,.1,1e3),y=new ai({antialias:!0,alpha:!0});y.setSize(window.innerWidth,window.innerHeight),e.value.appendChild(y.domElement);const m=new $t,p=new $t;f.add(p);const b=new qi(16777215,2);f.add(b);const M=new Xi(16777215,4);M.position.set(5,5,5),f.add(M);const S=new Wi(16777215,5,50);S.position.set(0,2,4),f.add(S);const O=new fs,I=O.load("/3d-bear-arts/assets/ghost.jpg");I.wrapS=I.wrapT=Je,I.repeat.set(2,2);const P=O.load("/3d-bear-arts/assets/ghost.jpg");P.wrapS=P.wrapT=Je,P.repeat.set(1,1);const U=new Nt({color:16777215,metalness:0,roughness:.8,clearcoat:.3,clearcoatRoughness:.9,transparent:!0,opacity:.15,transmission:.95,ior:1.1,reflectivity:.2,envMapIntensity:.3,depthTest:!0,depthWrite:!1,side:me}),nt=new Nt({color:16777215,metalness:0,roughness:.8,clearcoat:.3,clearcoatRoughness:.9,transparent:!0,opacity:.1,envMapIntensity:.3}),x=new Nt({color:9109504,map:I,metalness:.9,roughness:.25,clearcoat:.7,clearcoatRoughness:.3}),E=new Nt({color:16777215,metalness:.1,roughness:.05,clearcoat:1,clearcoatRoughness:.1,transparent:!0,opacity:.1,transmission:.95,ior:1,reflectivity:.2,envMapIntensity:.4,depthTest:!0,depthWrite:!1,side:me}),j=new Nt({color:16777215,metalness:.3,roughness:.1,clearcoat:1,clearcoatRoughness:.05,transparent:!0,opacity:.45,transmission:.8,reflectivity:.9,envMapIntensity:1,depthTest:!0,depthWrite:!1,side:me}),k=new Nt({color:16777215,metalness:.3,roughness:.1,clearcoat:1,clearcoatRoughness:.05,transparent:!0,opacity:.45,transmission:.8,reflectivity:.9,envMapIntensity:1,side:me}),J=new bt(1,32,32,0,Math.PI),at=new R(J,U),V=new R(J,j);at.scale.set(.85,.85,.8),V.scale.set(.85,.85,.8),at.position.y=-.2,V.position.y=-.2,at.rotation.y=Math.PI/2,V.rotation.y=Math.PI*1.5;const Z=new be(1,32),H=new R(Z,j);H.scale.set(.85,.85,.8),H.position.set(0,-.2,0),H.rotation.y=Math.PI/2;const gt=new $t;gt.add(at),gt.add(V),gt.add(H),m.add(gt);const yt=new bt(.6,32,32,0,Math.PI),_t=new R(yt,k);_t.scale.set(1,.95,.95),_t.position.set(0,1,0),_t.rotation.y=Math.PI*1.5;const It=new R(yt,nt);It.scale.set(1,.95,.95),It.position.set(0,1,0),It.rotation.y=Math.PI/2;const zt=new be(.6,32),rt=new R(zt,j);rt.position.set(0,1,0),rt.rotation.y=Math.PI/2,rt.scale.set(1,.95,.95);const ft=new $t;ft.add(_t),ft.add(It),ft.add(rt),m.add(ft);const vt=new bt(.25,32,32),F=new R(vt,k);F.position.set(-.45,1.35,-.1),m.add(F);const lt=new R(vt,nt);lt.position.set(.45,1.35,-.1),m.add(lt);const ot=new bt(.25,32,32,Math.PI/2,Math.PI),ht=new R(ot,k);ht.scale.set(1.1,.6,.8),ht.position.set(0,.84,.5),ht.rotation.y=Math.PI;const Mt=new bt(.25,32,32,Math.PI/2,Math.PI),tt=new R(Mt,nt);tt.scale.set(1.1,.6,.8),tt.position.set(0,.84,.5),tt.rotation.y=0;const g=new be(.25,32),T=new R(g,E);T.scale.set(.8,.6,.8),T.position.set(0,.84,.5),T.rotation.y=Math.PI/2;const L=new $t;L.add(ht),L.add(tt),L.add(T),m.add(L);const N=new Fn;N.moveTo(0,0),N.bezierCurveTo(0,-.3,-.6,-.3,-.6,0),N.bezierCurveTo(-.6,.3,0,.6,0,1),N.bezierCurveTo(0,.6,.6,.3,.6,0),N.bezierCurveTo(.6,-.3,0,-.3,0,0);const D={depth:.4,bevelEnabled:!0,bevelSegments:2,steps:2,bevelSize:.1,bevelThickness:.1},X=new Vn(N,D),K=new R(X,x);K.scale.set(.35,.35,.35),K.position.set(0,-.05,0),K.rotation.y=Math.PI,K.rotation.x=Math.PI,m.add(K);const w=new bt(.35,32,32),v=new R(w,j);v.scale.set(.75,1.25,.65),v.position.set(-.7,-.15,.2),m.add(v);const C=new R(w,E);C.scale.set(.75,1.25,.65),C.position.set(.7,-.15,.2),m.add(C);const W=new ue(.2,.22,.6,32),z=new R(W,j);z.position.set(-.4,-1.05,0),m.add(z);const G=new R(W,E);G.position.set(.4,-1.05,0),m.add(G);const ut=new bt(.3,32,32),ct=new R(ut,j);ct.scale.set(1,.72,1.5),ct.position.set(-.4,-1.45,.17),m.add(ct);const pt=new R(ut,E);pt.scale.set(1,.72,1.5),pt.position.set(.4,-1.45,.17),m.add(pt);const Rt=new bt(.44,32,32),dt=new R(Rt,E);dt.position.set(-.15,-.45,-.4),m.add(dt);const xt=new R(Rt,E);xt.position.set(.15,-.45,-.4),m.add(xt);const Pt=new bt(.18,32,32),Lt=new R(Pt,j);Lt.position.set(0,-.35,-.8),m.add(Lt);const Et=new bt(.6,32,32,0,Math.PI*2,0,Math.PI/2),Vt=new Nt({color:9109504,metalness:.3,roughness:.1,clearcoat:1,clearcoatRoughness:.05,transparent:!0,opacity:.8,transmission:.85,ior:1.4,reflectivity:.9,envMapIntensity:1.2}),Dt=new R(Et,Vt);Dt.position.set(0,-.2,0),Dt.rotation.x=Math.PI,Dt.scale.set(1.25,1.25,1.25),gt.add(Dt);const kt=new An({transparent:!0,depthWrite:!1,depthTest:!0,uniforms:{u_time:{value:0},u_waveFrequency:{value:4},u_waveAmplitude:{value:.5},u_waveSpeed:{value:.3}},vertexShader:`
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
            `}),B=new R(Z,kt);B.position.set(0,-.26,0),B.scale.set(.7,.7,.7),B.rotation.x=-Math.PI/2,B.renderOrder=1,gt.add(B),new Yi().load("https://threejs.org/examples/fonts/helvetiker_bold.typeface.json",function(Qt){const Jt=new Ve("X",{font:Qt,size:.2,depth:.05}),ee=new R(Jt,j);ee.position.set(-.3,.99,.53),ee.rotation.x=ie.degToRad(-5),ee.rotation.y=ie.degToRad(-15),m.add(ee);const ce=new Ve("O",{font:Qt,size:.2,depth:.05}),ge=new R(ce,j);ge.position.set(.14,.99,.53),ge.rotation.y=ie.degToRad(12),ge.rotation.x=ie.degToRad(-5),m.add(ge)}),Lt.renderOrder=1,m.rotation.x=.1,m.scale.set(1.4,1.4,1.4),f.add(m),m.position.set(t.bodyPosition.x,t.bodyPosition.y,t.bodyPosition.z),_.position.set(t.bodyPosition.x,1,t.cameraPosition),_.lookAt(t.bodyPosition.x,0,0),_.position.z=4;let et=.05,Q=.06,wt=.2,St=.25,Bt=0,Kt=0;d(),We(()=>t.bodyPosition,Qt=>{m.position.set(Qt.x,Qt.y,Qt.z)}),We(()=>t.cameraPosition,Qt=>{_.position.set(t.bodyPosition.x,1,Qt),_.lookAt(t.bodyPosition.x,0,0)}),window.addEventListener("resize",()=>{_.aspect=window.innerWidth/window.innerHeight,_.updateProjectionMatrix(),y.setSize(window.innerWidth,window.innerHeight)})}});function a(){s.value=!0}function l(){i.value=!0}function c(){o.value=!0}function h(){r.value=!0}function u(){s.value=!1,i.value=!1,o.value=!1,r.value=!1}return(d,f)=>(wi(),Si(Mn,null,[Xt("div",{ref_key:"threeCanvas",ref:e,class:Wn(n.background?"no-bg":"three-canvas")},null,2),Xt("div",H1,[Xt("button",{class:"pixel-btn up",onMousedown:c,onMouseup:u},"UP",32),Xt("div",k1,[Xt("button",{class:"pixel-btn left",onMousedown:a,onMouseup:u},"LEFT",32),Xt("button",{class:"pixel-btn right",onMousedown:l,onMouseup:u},"RIGHT",32)]),Xt("button",{class:"pixel-btn down",onMousedown:h,onMouseup:u},"DOWN",32)])],64))}}),W1=Ei(V1,[["__scopeId","data-v-eb44448e"]]),X1={class:"pixel-controls"},q1={class:"side-buttons"},Y1=15,$1=5,j1=Xn({__name:"Aquar",props:{background:{type:Boolean,default:!1},cameraPosition:{type:Number,default:5},bodyPosition:{type:Object,default:()=>({x:0,y:0,z:0})}},setup(n){const t=n,e=Zt(null);let i=Zt(!1),s=Zt(!1),o=Zt(!1),r=Zt(!1);const a=Xo(null),l=new ai({antialias:!0});l.setSize(window.innerWidth,window.innerHeight),document.body.appendChild(l.domElement),new li;const c=new ze(75,window.innerWidth/window.innerHeight,.1,1e3);c.position.z=5,ci(()=>{if(e.value){let y=function(){const Tt=new $t,ne=new po(.12,.05,16,100),Pe=new te({color:16777215}),Le=new R(ne,Pe);Le.position.set(0,1.65,0),Le.rotation.x=Math.PI/2,Tt.add(Le);const Be=new io(.15,.3,32),cn=new te({color:16711680}),on=new R(Be,cn);on.position.set(0,1.8,0),Tt.add(on);const A=new bt(.05,32,32),Y=new te({color:16777215}),it=new R(A,Y);return it.position.set(0,1.93,0),Tt.add(it),Tt.position.set(0,-.1,0),Tt},m=function(){const Tt=new $t,ne=new bt(.15,32,32),Pe=new te({color:16764057}),Le=new R(ne,Pe);Le.position.set(0,.4,0),Tt.add(Le);const Be=new io(.08,.15,32);new te({color:16764057});const cn=new R(Be,H);cn.position.set(-.1,.55,0),cn.rotation.z=Math.PI/6,Tt.add(cn);const on=new R(Be,H);on.position.set(.1,.55,0),on.rotation.z=-Math.PI/6,Tt.add(on);const A=new ue(.12,.15,.3,32),Y=new te({color:16764057}),it=new R(A,Y);it.position.set(0,.2,0),Tt.add(it);const st=new ue(.05,.05,.2,32),$=new te({color:16764057}),At=new R(st,$);At.position.set(-.07,-.05,.05),Tt.add(At);const Ut=new R(st,$);Ut.position.set(.07,-.05,.05),Tt.add(Ut);const Gt=new ue(.04,.04,.2,32),Ht=new te({color:16764057}),qt=new R(Gt,H);qt.position.set(-.15,.25,0),qt.rotation.z=Math.PI/4,Tt.add(qt);const jt=new R(Gt,Ht);jt.position.set(.15,.25,0),jt.rotation.z=-Math.PI/4,Tt.add(jt);const Wt=new ue(.03,.03,.25,32),oe=new te({color:16764057}),de=new R(Wt,oe);return de.position.set(0,.1,-.2),de.rotation.x=Math.PI/4,Tt.add(de),Tt.scale.set(.75,.75,.75),Tt.position.set(.2,0,.2),Tt},p=function(){const Tt=new $t,ne=new bt(.2,32,32),Pe=new te({color:16764057}),Le=new R(ne,Pe);Le.position.set(0,1,0),Tt.add(Le);const Be=new te({color:16777215}),cn=[{x:0,y:.85,z:.15,size:.12},{x:-.1,y:.88,z:.1,size:.1},{x:.1,y:.88,z:.1,size:.1},{x:-.15,y:.95,z:.1,size:.08},{x:.15,y:.95,z:.1,size:.08}];for(const Ti of cn){const Po=new bt(Ti.size,16,16),Fs=new R(Po,Be);Fs.position.set(Ti.x,Ti.y-.06,Ti.z-.01),Tt.add(Fs)}const on=new te({color:16777215}),A=new ue(.05,.06,.1,32),Y=new R(A,on);Y.position.set(-.06,.93,.18),Y.rotation.z=Math.PI/4;const it=new ue(.05,.06,.1,32),st=new R(it,on);st.position.set(.06,.93,.18),st.rotation.z=-Math.PI/4;const $=new po(.12,.05,16,100),At=new te({color:16777215}),Ut=new R($,At);Ut.position.set(0,1.15,0),Ut.rotation.x=Math.PI/2,Tt.add(Ut);const Gt=new io(.15,.3,32),Ht=new te({color:16711680}),qt=new R(Gt,Ht);qt.position.set(0,1.3,0),Tt.add(qt);const jt=new bt(.05,32,32),Wt=new te({color:16777215}),oe=new R(jt,Wt);oe.position.set(0,1.43,0),Tt.add(oe);const de=new ue(.2,.25,.6,32),Ce=new te({color:16711680}),Ze=new R(de,Ce);Ze.position.set(0,.5,0),Tt.add(Ze);const fe=new ue(.25,.25,.1,32),Yt=new te({color:0}),qe=new R(fe,Yt);qe.position.set(0,.4,.005),Tt.add(qe);const Ct=new ue(.06,.06,.3,32),De=new te({color:16711680}),Oe=new R(Ct,De);Oe.position.set(-.25,.75,0),Oe.rotation.z=Math.PI/4,Tt.add(Oe);const ve=new R(Ct,De);ve.position.set(.25,.75,0),ve.rotation.z=-Math.PI/4,Tt.add(ve);const rn=new bt(.07,32,32),ye=new te({color:16777215}),je=new R(rn,ye);je.position.set(-.35,.85,0),Tt.add(je);const Pn=new R(rn,ye);Pn.position.set(.35,.85,0),Tt.add(Pn);const ke=new ue(.1,.1,.15,32),Sn=new te({color:16711680}),ui=new ue(.08,.08,.4,32),On=new te({color:0}),qn=new R(ui,On);qn.position.set(-.1,.1,0),Tt.add(qn);const Yn=new R(ke,Sn);Yn.position.set(-.1,-.05,0),Tt.add(Yn);const mn=new R(ui,On);mn.position.set(.1,.1,0),Tt.add(mn);const Bn=new R(ke,Sn);Bn.position.set(.1,-.05,0),Tt.add(Bn);const $n=new bt(.12,32,32),hi=new te({color:16711680}),En=new R($n,hi);En.scale.set(1,.7,1.5),En.position.set(-.1,-.12,.12),Tt.add(En);const bn=new R($n,hi);return bn.scale.set(1,.7,1.5),bn.position.set(.1,-.1,.12),Tt.add(bn),Tt.scale.set(.25,.25,.25),Tt.position.set(.2,.5,-0),Tt},b=function(){let Tt=0;function ne(){requestAnimationFrame(ne),Tt+=.08,ce.position.y=.45+Math.sin(Tt)*.45,nt.render(P,U)}ne()},M=function(Tt){let ne=1,Pe=0;function Le(){requestAnimationFrame(Le),Tt.position.x+=.01*ne,Tt.position.x>=.5?(ne=-1,Tt.rotation.y=Math.PI):Tt.position.x<=-.5&&(ne=1,Tt.rotation.y=0),Pe+=.2,Tt.position.y=-.2+Math.sin(Pe)*.01,Tt.position.z=.5,nt.render(P,U)}Le()},S=function(){const Tt=new $t,ne=new ii(.7,.8,.7),Pe=new te({color:9127187}),Le=new R(ne,Pe);Le.position.set(0,.4,0),Tt.add(Le);const Be=new io(.55,.25,4),cn=new te({color:16777215}),on=new R(Be,cn);on.position.set(0,.9,0),on.rotation.y=Math.PI/4,Tt.add(on);const A=new ii(.25,.35,.05),Y=new te({color:6636321}),it=new R(A,Y);it.position.set(0,.2,.36),Tt.add(it);const st=new ii(.15,.15,.05),$=new te({color:8900331}),At=new R(st,$);At.position.set(-.2,.5,.38),Tt.add(At);const Ut=new R(st,$);Ut.position.set(.2,.5,.38),Tt.add(Ut);const Gt=new ii(.2,.4,.2),Ht=new te({color:8421504}),qt=new R(Gt,Ht);qt.position.set(0,.95,0),Tt.add(qt);const jt=new po(.07,.04,32,100),Wt=new te({color:2263842}),oe=new R(jt,Wt);return oe.position.set(0,.45,.38),Tt.add(oe),Tt.position.set(.22,-.2,0),Tt.scale.set(.5,.5,.5),Tt},O=function(){requestAnimationFrame(I);const Tt=Te.attributes.position.array;for(let ne=1;ne<Tt.length;ne+=3)Tt[ne]-=.02,Tt[ne]<-10&&(Tt[ne]=10);Te.attributes.position.needsUpdate=!0,nt.render(P,U)},I=function(){requestAnimationFrame(I),i.value&&(x.rotation.y+=.03),s.value&&(x.rotation.y-=.03),o.value&&(x.rotation.x-=.03),r.value&&(x.rotation.x+=.03),a.value&&(a.value.rotation.y+=.1),nt.render(P,U)};const P=new li,U=new ze(75,window.innerWidth/window.innerHeight,.1,1e3),nt=new ai({antialias:!0,alpha:!0});nt.setSize(window.innerWidth,window.innerHeight),e.value.appendChild(nt.domElement);const x=new $t,E=new $t;P.add(E);const j=new qi(16777215,2);P.add(j);const k=new Xi(16777215,4);k.position.set(5,5,5),P.add(k);const J=new Wi(16777215,5,50);J.position.set(0,2,4),P.add(J);const at=new fs,V=at.load("/3d-bear-arts/assets/house.jpg");V.wrapS=V.wrapT=Je,V.repeat.set(1,1),at.load("/3d-bear-arts/assets/houseenv_texture_5.jpg");const Z=new Nt({color:16777215,metalness:.3,roughness:.05,transparent:!0,opacity:.5,transmission:1,ior:1.33,thickness:.01,depthWrite:!0,envMapIntensity:2,clearcoat:1,clearcoatRoughness:.1,side:me});new Nt({color:16777215,metalness:.3,map:V,roughness:.05,transparent:!0,opacity:.5,transmission:.7,ior:1.33,thickness:.2,depthWrite:!0,envMapIntensity:2,clearcoat:1,clearcoatRoughness:.1,side:me});const H=new Nt({color:16777215,metalness:.3,roughness:.05,transparent:!0,opacity:1,transmission:.8,ior:1.33,thickness:.3,depthWrite:!0,envMapIntensity:2,clearcoat:1,clearcoatRoughness:.1,side:me}),gt=new r1().load(["/3d-bear-arts/assets/house_env_texture_1.jpg","/3d-bear-arts/assets/house_env_texture_4.jpg","/3d-bear-arts/assets/house_env_texture_6.jpg","/3d-bear-arts/assets/house_env_texture_2.jpg","/3d-bear-arts/assets/house_env_texture_5.jpg","/3d-bear-arts/assets/house_env_texture_3.jpg"]);P.environment=gt;const yt=new Nt({color:16777215,metalness:.05,roughness:.2,transparent:!0,opacity:1,transmission:.2,ior:1.5,depthWrite:!0,envMapIntensity:1,side:me}),_t=new Nt({color:16777215,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9}),It=`
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
`;new An({uniforms:{time:{value:0},opacity:{value:.5}},vertexShader:It,fragmentShader:zt,transparent:!0,depthWrite:!1});const rt=new bt(1,32,32,0,Math.PI),ft=new R(rt,Z),vt=new R(rt,H);ft.scale.set(.85,.85,.8),vt.scale.set(.85,.85,.8),ft.position.y=-.2,vt.position.y=-.2,ft.rotation.y=Math.PI/2,vt.rotation.y=Math.PI*1.5;const F=new be(1,32),lt=new R(F,yt);lt.scale.set(.85,.85,.8),lt.position.set(0,-.2,0),lt.rotation.y=Math.PI/2;const ot=new $t;ot.add(ft),ot.add(vt),ot.add(lt),x.add(ot);const ht=new bt(.6,32,32,0,Math.PI),Mt=new R(ht,H);Mt.scale.set(1,.95,.95),Mt.position.set(0,1,0),Mt.rotation.y=Math.PI*1.5;const tt=new R(ht,Z);tt.scale.set(1,.95,.95),tt.position.set(0,1,0),tt.rotation.y=Math.PI/2;const g=new be(.6,32),T=new R(g,yt);T.position.set(0,1,0),T.rotation.y=Math.PI/2,T.scale.set(1,.95,.95);const L=new $t;L.add(Mt),L.add(tt),L.add(T),x.add(L);const N=new bt(.6,32,32,0,Math.PI*2,0,Math.PI/2),D=new Nt({color:16777215,metalness:.1,roughness:.9,clearcoat:.5,clearcoatRoughness:.7}),X=new R(N,D);X.position.set(0,-.2,0),X.rotation.x=Math.PI,X.scale.set(1.25,1.25,1.25),ot.add(X);const K=new Nt({color:16777215,metalness:.1,roughness:.9,clearcoat:.6,clearcoatRoughness:.8,side:me,transparent:!1,opacity:.8}),w=new R(F,K);w.scale.set(.7,.7,.7),w.position.set(0,-.3,0),w.rotation.x=Math.PI/2,w.renderOrder=1,ot.add(w),x.add(ot);const v=new An({transparent:!0,uniforms:{u_time:{value:0}},vertexShader:`
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
    `}),C=new R(F,v);C.position.set(0,-.2,0),C.scale.set(.7,.7,.7),C.rotation.x=-Math.PI/2,C.renderOrder=2,ot.add(C);const W=new bt(.25,32,32),z=new R(W,H);z.position.set(-.45,1.35,-.1),x.add(z);const G=new R(W,Z);G.position.set(.45,1.35,-.1),x.add(G);const ut=new bt(.25,32,32,Math.PI/2,Math.PI),ct=new R(ut,H);ct.scale.set(1.1,.6,.8),ct.position.set(0,.84,.5),ct.rotation.y=Math.PI;const pt=new bt(.25,32,32,Math.PI/2,Math.PI),Rt=new R(pt,Z);Rt.scale.set(1.1,.6,.8),Rt.position.set(0,.84,.5),Rt.rotation.y=0;const dt=new be(.25,32),xt=new R(dt,yt);xt.scale.set(.8,.6,.8),xt.position.set(0,.84,.5),xt.rotation.y=Math.PI/2;const Pt=new $t;Pt.add(ct),Pt.add(Rt),Pt.add(xt),x.add(Pt),new Nt({color:8374441,metalness:1,roughness:.25,clearcoat:.7,clearcoatRoughness:.3});const Lt=new bt(.35,32,32),Et=new R(Lt,H);Et.scale.set(.75,1.25,.65),Et.position.set(-.7,-.15,.2),x.add(Et);const Vt=new R(Lt,Z);Vt.scale.set(.75,1.25,.65),Vt.position.set(.7,-.15,.2),x.add(Vt);const Dt=new ue(.2,.22,.6,32),kt=new R(Dt,H);kt.position.set(-.4,-1.05,0),x.add(kt);const B=new R(Dt,Z);B.position.set(.4,-1.05,0),x.add(B);const mt=new bt(.3,32,32),et=new R(mt,H);et.scale.set(1,.72,1.5),et.position.set(-.4,-1.45,.17),x.add(et);const Q=new R(mt,Z);Q.scale.set(1,.72,1.5),Q.position.set(.4,-1.45,.17),x.add(Q);const wt=new bt(.44,32,32),St=new R(wt,_t);St.position.set(-.15,-.45,-.4),x.add(St);const Bt=new R(wt,_t);Bt.position.set(.15,-.45,-.4),x.add(Bt);const Kt=new bt(.18,32,32),Qt=new R(Kt,_t);Qt.position.set(0,-.35,-.8),x.add(Qt),new Yi().load("https://threejs.org/examples/fonts/helvetiker_bold.typeface.json",function(Tt){const ne=new Ve("X",{font:Tt,size:.2,depth:.05}),Pe=new R(ne,Z);Pe.position.set(-.3,.99,.53),Pe.rotation.x=ie.degToRad(-5),Pe.rotation.y=ie.degToRad(-15),x.add(Pe);const Le=new Ve("O",{font:Tt,size:.2,depth:.05}),Be=new R(Le,Z);Be.position.set(.14,.99,.53),Be.rotation.y=ie.degToRad(12),Be.rotation.x=ie.degToRad(-5),x.add(Be)});const ee=y();x.add(ee),m();const ce=p();x.add(ce),b(),a.value=p(),x.add(a.value),M(a.value);const ge=S();x.add(ge);const xe=S();xe.position.set(-.1,-.2,0),xe.scale.set(.3,.3,.3),x.add(xe);const pe=1e3,Te=new Rn,_e=[];for(let Tt=0;Tt<pe;Tt++){const ne=(Math.random()-.5)*20,Pe=Math.random()*20,Le=(Math.random()-.5)*20;_e.push(ne,Pe,Le)}Te.setAttribute("position",new Xe(_e,3));const He=new yp({color:16777215,size:.1,transparent:!0,opacity:.8}),Re=new SS(Te,He);x.add(Re),O(),x.scale.set(1.4,1.4,1.4),P.add(x),x.position.set(t.bodyPosition.x,t.bodyPosition.y,t.bodyPosition.z),U.position.set(t.bodyPosition.x,1,t.cameraPosition),U.lookAt(t.bodyPosition.x,0,0),U.position.z=4,x.rotation.x=.1,I(),We(()=>t.bodyPosition,Tt=>{x.position.set(Tt.x,Tt.y,Tt.z)}),We(()=>t.cameraPosition,Tt=>{U.position.set(t.bodyPosition.x,1,Tt),U.lookAt(t.bodyPosition.x,0,0)}),window.addEventListener("resize",()=>{U.aspect=window.innerWidth/window.innerHeight,U.updateProjectionMatrix(),nt.setSize(window.innerWidth,window.innerHeight)})}});function h(){s.value=!0}function u(){i.value=!0}function d(){o.value=!0}function f(){r.value=!0}function _(){s.value=!1,i.value=!1,o.value=!1,r.value=!1}for(let y=0;y<Y1;y++){const m=document.createElement("div");m.classList.add("confetti"),m.style.left=`${Math.random()*100}vw`,m.style.animationDuration=`${Math.random()*3+4}s`,m.style.animationDelay=`${Math.random()*5}s`,document.body.appendChild(m)}for(let y=0;y<$1;y++){const m=document.createElement("div");m.classList.add("light"),document.body.appendChild(m)}return(y,m)=>(wi(),Si(Mn,null,[Xt("div",{ref_key:"threeCanvas",ref:e,class:Wn(n.background?"no-bg":"three-canvas")},null,2),Xt("div",X1,[Xt("button",{class:"pixel-btn up",onMousedown:d,onMouseup:_},"UP",32),Xt("div",q1,[Xt("button",{class:"pixel-btn left",onMousedown:h,onMouseup:_},"LEFT",32),Xt("button",{class:"pixel-btn right",onMousedown:u,onMouseup:_},"RIGHT",32)]),Xt("button",{class:"pixel-btn down",onMousedown:f,onMouseup:_},"DOWN",32)])],64))}}),K1=Ei(j1,[["__scopeId","data-v-c0cb6b69"]]),Z1=[{path:"/3d-bear-arts/leather",name:"Leather",component:g1},{path:"/3d-bear-arts/pop-art",name:"Pop",component:v1},{path:"/3d-bear-arts/pop-art-bear-3",name:"PopArtBear 3",component:w1},{path:"/3d-bear-arts/machine",name:"MetalMachineBear",component:T1},{path:"/3d-bear-arts/water",name:"Water",component:F1},{path:"/3d-bear-arts/ghost-bear",name:"GhostBear",component:G1},{path:"/3d-bear-arts/white-ghost-bear",name:"GhostBallonBear",component:W1},{path:"/3d-bear-arts/",name:"Santa",component:K1},{path:"/3d-bear-arts/half",name:"HalfBear",component:p1}],J1=r_({history:Fg(),routes:Z1}),Ip=tg(og);Ip.use(J1);Ip.mount("#app");
