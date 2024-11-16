(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function e(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(s){if(s.ep)return;s.ep=!0;const o=e(s);fetch(s.href,o)}})();/**
* @vue/shared v3.5.10
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Yc(n){const t=Object.create(null);for(const e of n.split(","))t[e]=1;return e=>e in t}const Ie={},lo=[],gi=()=>{},zp=()=>!1,Aa=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),$c=n=>n.startsWith("onUpdate:"),nn=Object.assign,jc=(n,t)=>{const e=n.indexOf(t);e>-1&&n.splice(e,1)},Gp=Object.prototype.hasOwnProperty,Me=(n,t)=>Gp.call(n,t),re=Array.isArray,Xo=n=>Ra(n)==="[object Map]",Hp=n=>Ra(n)==="[object Set]",oe=n=>typeof n=="function",tn=n=>typeof n=="string",Ao=n=>typeof n=="symbol",Xe=n=>n!==null&&typeof n=="object",Ud=n=>(Xe(n)||oe(n))&&oe(n.then)&&oe(n.catch),kp=Object.prototype.toString,Ra=n=>kp.call(n),Vp=n=>Ra(n).slice(8,-1),Wp=n=>Ra(n)==="[object Object]",Kc=n=>tn(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,qo=Yc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Pa=n=>{const t=Object.create(null);return e=>t[e]||(t[e]=n(e))},Xp=/-(\w)/g,Gn=Pa(n=>n.replace(Xp,(t,e)=>e?e.toUpperCase():"")),qp=/\B([A-Z])/g,Us=Pa(n=>n.replace(qp,"-$1").toLowerCase()),Ca=Pa(n=>n.charAt(0).toUpperCase()+n.slice(1)),$a=Pa(n=>n?`on${Ca(n)}`:""),ls=(n,t)=>!Object.is(n,t),ja=(n,...t)=>{for(let e=0;e<n.length;e++)n[e](...t)},Nd=(n,t,e,i=!1)=>{Object.defineProperty(n,t,{configurable:!0,enumerable:!1,writable:i,value:e})},Yp=n=>{const t=parseFloat(n);return isNaN(t)?n:t};let Uu;const Fd=()=>Uu||(Uu=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Zc(n){if(re(n)){const t={};for(let e=0;e<n.length;e++){const i=n[e],s=tn(i)?Zp(i):Zc(i);if(s)for(const o in s)t[o]=s[o]}return t}else if(tn(n)||Xe(n))return n}const $p=/;(?![^(]*\))/g,jp=/:([^]+)/,Kp=/\/\*[^]*?\*\//g;function Zp(n){const t={};return n.replace(Kp,"").split($p).forEach(e=>{if(e){const i=e.split(jp);i.length>1&&(t[i[0].trim()]=i[1].trim())}}),t}function kn(n){let t="";if(tn(n))t=n;else if(re(n))for(let e=0;e<n.length;e++){const i=kn(n[e]);i&&(t+=i+" ")}else if(Xe(n))for(const e in n)n[e]&&(t+=e+" ");return t.trim()}const Jp="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Qp=Yc(Jp);function Od(n){return!!n||n===""}/**
* @vue/reactivity v3.5.10
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Rn;class tm{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Rn,!t&&Rn&&(this.index=(Rn.scopes||(Rn.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,e;if(this.scopes)for(t=0,e=this.scopes.length;t<e;t++)this.scopes[t].pause();for(t=0,e=this.effects.length;t<e;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,e;if(this.scopes)for(t=0,e=this.scopes.length;t<e;t++)this.scopes[t].resume();for(t=0,e=this.effects.length;t<e;t++)this.effects[t].resume()}}run(t){if(this._active){const e=Rn;try{return Rn=this,t()}finally{Rn=e}}}on(){Rn=this}off(){Rn=this.parent}stop(t){if(this._active){let e,i;for(e=0,i=this.effects.length;e<i;e++)this.effects[e].stop();for(e=0,i=this.cleanups.length;e<i;e++)this.cleanups[e]();if(this.scopes)for(e=0,i=this.scopes.length;e<i;e++)this.scopes[e].stop(!0);if(!this.detached&&this.parent&&!t){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function em(){return Rn}let De;const Ka=new WeakSet;class Bd{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Rn&&Rn.active&&Rn.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Ka.has(this)&&(Ka.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Gd(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Nu(this),Hd(this);const t=De,e=ni;De=this,ni=!0;try{return this.fn()}finally{kd(this),De=t,ni=e,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)tu(t);this.deps=this.depsTail=void 0,Nu(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Ka.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Vl(this)&&this.run()}get dirty(){return Vl(this)}}let zd=0,so;function Gd(n){n.flags|=8,n.next=so,so=n}function Jc(){zd++}function Qc(){if(--zd>0)return;let n;for(;so;){let t=so,e;for(;t;)t.flags&1||(t.flags&=-9),t=t.next;for(t=so,so=void 0;t;){if(e=t.next,t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(i){n||(n=i)}t=e}}if(n)throw n}function Hd(n){for(let t=n.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function kd(n){let t,e=n.depsTail,i=e;for(;i;){const s=i.prevDep;i.version===-1?(i===e&&(e=s),tu(i),nm(i)):t=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=s}n.deps=t,n.depsTail=e}function Vl(n){for(let t=n.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(Vd(t.dep.computed)||t.dep.version!==t.version))return!0;return!!n._dirty}function Vd(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===sr))return;n.globalVersion=sr;const t=n.dep;if(n.flags|=2,t.version>0&&!n.isSSR&&n.deps&&!Vl(n)){n.flags&=-3;return}const e=De,i=ni;De=n,ni=!0;try{Hd(n);const s=n.fn(n._value);(t.version===0||ls(s,n._value))&&(n._value=s,t.version++)}catch(s){throw t.version++,s}finally{De=e,ni=i,kd(n),n.flags&=-3}}function tu(n,t=!1){const{dep:e,prevSub:i,nextSub:s}=n;if(i&&(i.nextSub=s,n.prevSub=void 0),s&&(s.prevSub=i,n.nextSub=void 0),e.subs===n&&(e.subs=i),!e.subs&&e.computed){e.computed.flags&=-5;for(let o=e.computed.deps;o;o=o.nextDep)tu(o,!0)}!t&&!--e.sc&&e.map&&e.map.delete(e.key)}function nm(n){const{prevDep:t,nextDep:e}=n;t&&(t.nextDep=e,n.prevDep=void 0),e&&(e.prevDep=t,n.nextDep=void 0)}let ni=!0;const Wd=[];function us(){Wd.push(ni),ni=!1}function hs(){const n=Wd.pop();ni=n===void 0?!0:n}function Nu(n){const{cleanup:t}=n;if(n.cleanup=void 0,t){const e=De;De=void 0;try{t()}finally{De=e}}}let sr=0;class im{constructor(t,e){this.sub=t,this.dep=e,this.version=e.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class eu{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.target=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(t){if(!De||!ni||De===this.computed)return;let e=this.activeLink;if(e===void 0||e.sub!==De)e=this.activeLink=new im(De,this),De.deps?(e.prevDep=De.depsTail,De.depsTail.nextDep=e,De.depsTail=e):De.deps=De.depsTail=e,Xd(e);else if(e.version===-1&&(e.version=this.version,e.nextDep)){const i=e.nextDep;i.prevDep=e.prevDep,e.prevDep&&(e.prevDep.nextDep=i),e.prevDep=De.depsTail,e.nextDep=void 0,De.depsTail.nextDep=e,De.depsTail=e,De.deps===e&&(De.deps=i)}return e}trigger(t){this.version++,sr++,this.notify(t)}notify(t){Jc();try{for(let e=this.subs;e;e=e.prevSub)e.sub.notify()&&e.sub.dep.notify()}finally{Qc()}}}function Xd(n){if(n.dep.sc++,n.sub.flags&4){const t=n.dep.computed;if(t&&!n.dep.subs){t.flags|=20;for(let i=t.deps;i;i=i.nextDep)Xd(i)}const e=n.dep.subs;e!==n&&(n.prevSub=e,e&&(e.nextSub=n)),n.dep.subs=n}}const Wl=new WeakMap,Ps=Symbol(""),Xl=Symbol(""),or=Symbol("");function cn(n,t,e){if(ni&&De){let i=Wl.get(n);i||Wl.set(n,i=new Map);let s=i.get(e);s||(i.set(e,s=new eu),s.target=n,s.map=i,s.key=e),s.track()}}function Bi(n,t,e,i,s,o){const r=Wl.get(n);if(!r){sr++;return}const a=l=>{l&&l.trigger()};if(Jc(),t==="clear")r.forEach(a);else{const l=re(n),c=l&&Kc(e);if(l&&e==="length"){const h=Number(i);r.forEach((u,d)=>{(d==="length"||d===or||!Ao(d)&&d>=h)&&a(u)})}else switch(e!==void 0&&a(r.get(e)),c&&a(r.get(or)),t){case"add":l?c&&a(r.get("length")):(a(r.get(Ps)),Xo(n)&&a(r.get(Xl)));break;case"delete":l||(a(r.get(Ps)),Xo(n)&&a(r.get(Xl)));break;case"set":Xo(n)&&a(r.get(Ps));break}}Qc()}function Gs(n){const t=Se(n);return t===n?t:(cn(t,"iterate",or),ii(n)?t:t.map(pn))}function nu(n){return cn(n=Se(n),"iterate",or),n}const sm={__proto__:null,[Symbol.iterator](){return Za(this,Symbol.iterator,pn)},concat(...n){return Gs(this).concat(...n.map(t=>re(t)?Gs(t):t))},entries(){return Za(this,"entries",n=>(n[1]=pn(n[1]),n))},every(n,t){return bi(this,"every",n,t,void 0,arguments)},filter(n,t){return bi(this,"filter",n,t,e=>e.map(pn),arguments)},find(n,t){return bi(this,"find",n,t,pn,arguments)},findIndex(n,t){return bi(this,"findIndex",n,t,void 0,arguments)},findLast(n,t){return bi(this,"findLast",n,t,pn,arguments)},findLastIndex(n,t){return bi(this,"findLastIndex",n,t,void 0,arguments)},forEach(n,t){return bi(this,"forEach",n,t,void 0,arguments)},includes(...n){return Ja(this,"includes",n)},indexOf(...n){return Ja(this,"indexOf",n)},join(n){return Gs(this).join(n)},lastIndexOf(...n){return Ja(this,"lastIndexOf",n)},map(n,t){return bi(this,"map",n,t,void 0,arguments)},pop(){return Do(this,"pop")},push(...n){return Do(this,"push",n)},reduce(n,...t){return Fu(this,"reduce",n,t)},reduceRight(n,...t){return Fu(this,"reduceRight",n,t)},shift(){return Do(this,"shift")},some(n,t){return bi(this,"some",n,t,void 0,arguments)},splice(...n){return Do(this,"splice",n)},toReversed(){return Gs(this).toReversed()},toSorted(n){return Gs(this).toSorted(n)},toSpliced(...n){return Gs(this).toSpliced(...n)},unshift(...n){return Do(this,"unshift",n)},values(){return Za(this,"values",pn)}};function Za(n,t,e){const i=nu(n),s=i[t]();return i!==n&&!ii(n)&&(s._next=s.next,s.next=()=>{const o=s._next();return o.value&&(o.value=e(o.value)),o}),s}const om=Array.prototype;function bi(n,t,e,i,s,o){const r=nu(n),a=r!==n&&!ii(n),l=r[t];if(l!==om[t]){const u=l.apply(n,o);return a?pn(u):u}let c=e;r!==n&&(a?c=function(u,d){return e.call(this,pn(u),d,n)}:e.length>2&&(c=function(u,d){return e.call(this,u,d,n)}));const h=l.call(r,c,i);return a&&s?s(h):h}function Fu(n,t,e,i){const s=nu(n);let o=e;return s!==n&&(ii(n)?e.length>3&&(o=function(r,a,l){return e.call(this,r,a,l,n)}):o=function(r,a,l){return e.call(this,r,pn(a),l,n)}),s[t](o,...i)}function Ja(n,t,e){const i=Se(n);cn(i,"iterate",or);const s=i[t](...e);return(s===-1||s===!1)&&ru(e[0])?(e[0]=Se(e[0]),i[t](...e)):s}function Do(n,t,e=[]){us(),Jc();const i=Se(n)[t].apply(n,e);return Qc(),hs(),i}const rm=Yc("__proto__,__v_isRef,__isVue"),qd=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(Ao));function am(n){Ao(n)||(n=String(n));const t=Se(this);return cn(t,"has",n),t.hasOwnProperty(n)}class Yd{constructor(t=!1,e=!1){this._isReadonly=t,this._isShallow=e}get(t,e,i){const s=this._isReadonly,o=this._isShallow;if(e==="__v_isReactive")return!s;if(e==="__v_isReadonly")return s;if(e==="__v_isShallow")return o;if(e==="__v_raw")return i===(s?o?ym:Zd:o?Kd:jd).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(i)?t:void 0;const r=re(t);if(!s){let l;if(r&&(l=sm[e]))return l;if(e==="hasOwnProperty")return am}const a=Reflect.get(t,e,ln(t)?t:i);return(Ao(e)?qd.has(e):rm(e))||(s||cn(t,"get",e),o)?a:ln(a)?r&&Kc(e)?a:a.value:Xe(a)?s?Qd(a):La(a):a}}class $d extends Yd{constructor(t=!1){super(!1,t)}set(t,e,i,s){let o=t[e];if(!this._isShallow){const l=Cs(o);if(!ii(i)&&!Cs(i)&&(o=Se(o),i=Se(i)),!re(t)&&ln(o)&&!ln(i))return l?!1:(o.value=i,!0)}const r=re(t)&&Kc(e)?Number(e)<t.length:Me(t,e),a=Reflect.set(t,e,i,ln(t)?t:s);return t===Se(s)&&(r?ls(i,o)&&Bi(t,"set",e,i):Bi(t,"add",e,i)),a}deleteProperty(t,e){const i=Me(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&i&&Bi(t,"delete",e,void 0),s}has(t,e){const i=Reflect.has(t,e);return(!Ao(e)||!qd.has(e))&&cn(t,"has",e),i}ownKeys(t){return cn(t,"iterate",re(t)?"length":Ps),Reflect.ownKeys(t)}}class lm extends Yd{constructor(t=!1){super(!0,t)}set(t,e){return!0}deleteProperty(t,e){return!0}}const cm=new $d,um=new lm,hm=new $d(!0);const iu=n=>n,Ia=n=>Reflect.getPrototypeOf(n);function Er(n,t,e=!1,i=!1){n=n.__v_raw;const s=Se(n),o=Se(t);e||(ls(t,o)&&cn(s,"get",t),cn(s,"get",o));const{has:r}=Ia(s),a=i?iu:e?au:pn;if(r.call(s,t))return a(n.get(t));if(r.call(s,o))return a(n.get(o));n!==s&&n.get(t)}function br(n,t=!1){const e=this.__v_raw,i=Se(e),s=Se(n);return t||(ls(n,s)&&cn(i,"has",n),cn(i,"has",s)),n===s?e.has(n):e.has(n)||e.has(s)}function Tr(n,t=!1){return n=n.__v_raw,!t&&cn(Se(n),"iterate",Ps),Reflect.get(n,"size",n)}function Ou(n,t=!1){!t&&!ii(n)&&!Cs(n)&&(n=Se(n));const e=Se(this);return Ia(e).has.call(e,n)||(e.add(n),Bi(e,"add",n,n)),this}function Bu(n,t,e=!1){!e&&!ii(t)&&!Cs(t)&&(t=Se(t));const i=Se(this),{has:s,get:o}=Ia(i);let r=s.call(i,n);r||(n=Se(n),r=s.call(i,n));const a=o.call(i,n);return i.set(n,t),r?ls(t,a)&&Bi(i,"set",n,t):Bi(i,"add",n,t),this}function zu(n){const t=Se(this),{has:e,get:i}=Ia(t);let s=e.call(t,n);s||(n=Se(n),s=e.call(t,n)),i&&i.call(t,n);const o=t.delete(n);return s&&Bi(t,"delete",n,void 0),o}function Gu(){const n=Se(this),t=n.size!==0,e=n.clear();return t&&Bi(n,"clear",void 0,void 0),e}function Ar(n,t){return function(i,s){const o=this,r=o.__v_raw,a=Se(r),l=t?iu:n?au:pn;return!n&&cn(a,"iterate",Ps),r.forEach((c,h)=>i.call(s,l(c),l(h),o))}}function Rr(n,t,e){return function(...i){const s=this.__v_raw,o=Se(s),r=Xo(o),a=n==="entries"||n===Symbol.iterator&&r,l=n==="keys"&&r,c=s[n](...i),h=e?iu:t?au:pn;return!t&&cn(o,"iterate",l?Xl:Ps),{next(){const{value:u,done:d}=c.next();return d?{value:u,done:d}:{value:a?[h(u[0]),h(u[1])]:h(u),done:d}},[Symbol.iterator](){return this}}}}function $i(n){return function(...t){return n==="delete"?!1:n==="clear"?void 0:this}}function dm(){const n={get(o){return Er(this,o)},get size(){return Tr(this)},has:br,add:Ou,set:Bu,delete:zu,clear:Gu,forEach:Ar(!1,!1)},t={get(o){return Er(this,o,!1,!0)},get size(){return Tr(this)},has:br,add(o){return Ou.call(this,o,!0)},set(o,r){return Bu.call(this,o,r,!0)},delete:zu,clear:Gu,forEach:Ar(!1,!0)},e={get(o){return Er(this,o,!0)},get size(){return Tr(this,!0)},has(o){return br.call(this,o,!0)},add:$i("add"),set:$i("set"),delete:$i("delete"),clear:$i("clear"),forEach:Ar(!0,!1)},i={get(o){return Er(this,o,!0,!0)},get size(){return Tr(this,!0)},has(o){return br.call(this,o,!0)},add:$i("add"),set:$i("set"),delete:$i("delete"),clear:$i("clear"),forEach:Ar(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(o=>{n[o]=Rr(o,!1,!1),e[o]=Rr(o,!0,!1),t[o]=Rr(o,!1,!0),i[o]=Rr(o,!0,!0)}),[n,e,t,i]}const[fm,pm,mm,gm]=dm();function su(n,t){const e=t?n?gm:mm:n?pm:fm;return(i,s,o)=>s==="__v_isReactive"?!n:s==="__v_isReadonly"?n:s==="__v_raw"?i:Reflect.get(Me(e,s)&&s in i?e:i,s,o)}const _m={get:su(!1,!1)},vm={get:su(!1,!0)},xm={get:su(!0,!1)};const jd=new WeakMap,Kd=new WeakMap,Zd=new WeakMap,ym=new WeakMap;function Mm(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function wm(n){return n.__v_skip||!Object.isExtensible(n)?0:Mm(Vp(n))}function La(n){return Cs(n)?n:ou(n,!1,cm,_m,jd)}function Jd(n){return ou(n,!1,hm,vm,Kd)}function Qd(n){return ou(n,!0,um,xm,Zd)}function ou(n,t,e,i,s){if(!Xe(n)||n.__v_raw&&!(t&&n.__v_isReactive))return n;const o=s.get(n);if(o)return o;const r=wm(n);if(r===0)return n;const a=new Proxy(n,r===2?i:e);return s.set(n,a),a}function Yo(n){return Cs(n)?Yo(n.__v_raw):!!(n&&n.__v_isReactive)}function Cs(n){return!!(n&&n.__v_isReadonly)}function ii(n){return!!(n&&n.__v_isShallow)}function ru(n){return n?!!n.__v_raw:!1}function Se(n){const t=n&&n.__v_raw;return t?Se(t):n}function Sm(n){return!Me(n,"__v_skip")&&Object.isExtensible(n)&&Nd(n,"__v_skip",!0),n}const pn=n=>Xe(n)?La(n):n,au=n=>Xe(n)?Qd(n):n;function ln(n){return n?n.__v_isRef===!0:!1}function Kt(n){return tf(n,!1)}function $o(n){return tf(n,!0)}function tf(n,t){return ln(n)?n:new Em(n,t)}class Em{constructor(t,e){this.dep=new eu,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=e?t:Se(t),this._value=e?t:pn(t),this.__v_isShallow=e}get value(){return this.dep.track(),this._value}set value(t){const e=this._rawValue,i=this.__v_isShallow||ii(t)||Cs(t);t=i?t:Se(t),ls(t,e)&&(this._rawValue=t,this._value=i?t:pn(t),this.dep.trigger())}}function co(n){return ln(n)?n.value:n}const bm={get:(n,t,e)=>t==="__v_raw"?n:co(Reflect.get(n,t,e)),set:(n,t,e,i)=>{const s=n[t];return ln(s)&&!ln(e)?(s.value=e,!0):Reflect.set(n,t,e,i)}};function ef(n){return Yo(n)?n:new Proxy(n,bm)}class Tm{constructor(t,e,i){this.fn=t,this.setter=e,this._value=void 0,this.dep=new eu(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=sr-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!e,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&De!==this)return Gd(this),!0}get value(){const t=this.dep.track();return Vd(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function Am(n,t,e=!1){let i,s;return oe(n)?i=n:(i=n.get,s=n.set),new Tm(i,s,e)}const Pr={},ma=new WeakMap;let ws;function Rm(n,t=!1,e=ws){if(e){let i=ma.get(e);i||ma.set(e,i=[]),i.push(n)}}function Pm(n,t,e=Ie){const{immediate:i,deep:s,once:o,scheduler:r,augmentJob:a,call:l}=e,c=S=>s?S:ii(S)||s===!1||s===0?Ni(S,1):Ni(S);let h,u,d,f,_=!1,x=!1;if(ln(n)?(u=()=>n.value,_=ii(n)):Yo(n)?(u=()=>c(n),_=!0):re(n)?(x=!0,_=n.some(S=>Yo(S)||ii(S)),u=()=>n.map(S=>{if(ln(S))return S.value;if(Yo(S))return c(S);if(oe(S))return l?l(S,2):S()})):oe(n)?t?u=l?()=>l(n,2):n:u=()=>{if(d){us();try{d()}finally{hs()}}const S=ws;ws=h;try{return l?l(n,3,[f]):n(f)}finally{ws=S}}:u=gi,t&&s){const S=u,O=s===!0?1/0:s;u=()=>Ni(S(),O)}const m=em(),p=()=>{h.stop(),m&&jc(m.effects,h)};if(o&&t){const S=t;t=(...O)=>{S(...O),p()}}let b=x?new Array(n.length).fill(Pr):Pr;const M=S=>{if(!(!(h.flags&1)||!h.dirty&&!S))if(t){const O=h.run();if(s||_||(x?O.some((I,P)=>ls(I,b[P])):ls(O,b))){d&&d();const I=ws;ws=h;try{const P=[O,b===Pr?void 0:x&&b[0]===Pr?[]:b,f];l?l(t,3,P):t(...P),b=O}finally{ws=I}}}else h.run()};return a&&a(M),h=new Bd(u),h.scheduler=r?()=>r(M,!1):M,f=S=>Rm(S,!1,h),d=h.onStop=()=>{const S=ma.get(h);if(S){if(l)l(S,4);else for(const O of S)O();ma.delete(h)}},t?i?M(!0):b=h.run():r?r(M.bind(null,!0),!0):h.run(),p.pause=h.pause.bind(h),p.resume=h.resume.bind(h),p.stop=p,p}function Ni(n,t=1/0,e){if(t<=0||!Xe(n)||n.__v_skip||(e=e||new Set,e.has(n)))return n;if(e.add(n),t--,ln(n))Ni(n.value,t,e);else if(re(n))for(let i=0;i<n.length;i++)Ni(n[i],t,e);else if(Hp(n)||Xo(n))n.forEach(i=>{Ni(i,t,e)});else if(Wp(n)){for(const i in n)Ni(n[i],t,e);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&Ni(n[i],t,e)}return n}/**
* @vue/runtime-core v3.5.10
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function vr(n,t,e,i){try{return i?n(...i):n()}catch(s){Da(s,t,e)}}function vi(n,t,e,i){if(oe(n)){const s=vr(n,t,e,i);return s&&Ud(s)&&s.catch(o=>{Da(o,t,e)}),s}if(re(n)){const s=[];for(let o=0;o<n.length;o++)s.push(vi(n[o],t,e,i));return s}}function Da(n,t,e,i=!0){const s=t?t.vnode:null,{errorHandler:o,throwUnhandledErrorInProduction:r}=t&&t.appContext.config||Ie;if(t){let a=t.parent;const l=t.proxy,c=`https://vuejs.org/error-reference/#runtime-${e}`;for(;a;){const h=a.ec;if(h){for(let u=0;u<h.length;u++)if(h[u](n,l,c)===!1)return}a=a.parent}if(o){us(),vr(o,null,10,[n,l,c]),hs();return}}Cm(n,e,s,i,r)}function Cm(n,t,e,i=!0,s=!1){if(s)throw n;console.error(n)}let rr=!1,ql=!1;const mn=[];let fi=0;const uo=[];let ns=null,eo=0;const nf=Promise.resolve();let lu=null;function sf(n){const t=lu||nf;return n?t.then(this?n.bind(this):n):t}function Im(n){let t=rr?fi+1:0,e=mn.length;for(;t<e;){const i=t+e>>>1,s=mn[i],o=ar(s);o<n||o===n&&s.flags&2?t=i+1:e=i}return t}function cu(n){if(!(n.flags&1)){const t=ar(n),e=mn[mn.length-1];!e||!(n.flags&2)&&t>=ar(e)?mn.push(n):mn.splice(Im(t),0,n),n.flags|=1,of()}}function of(){!rr&&!ql&&(ql=!0,lu=nf.then(af))}function Lm(n){re(n)?uo.push(...n):ns&&n.id===-1?ns.splice(eo+1,0,n):n.flags&1||(uo.push(n),n.flags|=1),of()}function Hu(n,t,e=rr?fi+1:0){for(;e<mn.length;e++){const i=mn[e];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;mn.splice(e,1),e--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function rf(n){if(uo.length){const t=[...new Set(uo)].sort((e,i)=>ar(e)-ar(i));if(uo.length=0,ns){ns.push(...t);return}for(ns=t,eo=0;eo<ns.length;eo++){const e=ns[eo];e.flags&4&&(e.flags&=-2),e.flags&8||e(),e.flags&=-2}ns=null,eo=0}}const ar=n=>n.id==null?n.flags&2?-1:1/0:n.id;function af(n){ql=!1,rr=!0;try{for(fi=0;fi<mn.length;fi++){const t=mn[fi];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),vr(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;fi<mn.length;fi++){const t=mn[fi];t&&(t.flags&=-2)}fi=0,mn.length=0,rf(),rr=!1,lu=null,(mn.length||uo.length)&&af()}}let Pn=null,lf=null;function ga(n){const t=Pn;return Pn=n,lf=n&&n.type.__scopeId||null,t}function hi(n,t=Pn,e){if(!t||n._n)return n;const i=(...s)=>{i._d&&Zu(-1);const o=ga(t);let r;try{r=n(...s)}finally{ga(o),i._d&&Zu(1)}return r};return i._n=!0,i._c=!0,i._d=!0,i}function Dm(n,t){if(Pn===null)return n;const e=Ba(Pn),i=n.dirs||(n.dirs=[]);for(let s=0;s<t.length;s++){let[o,r,a,l=Ie]=t[s];o&&(oe(o)&&(o={mounted:o,updated:o}),o.deep&&Ni(r),i.push({dir:o,instance:e,value:r,oldValue:void 0,arg:a,modifiers:l}))}return n}function ps(n,t,e,i){const s=n.dirs,o=t&&t.dirs;for(let r=0;r<s.length;r++){const a=s[r];o&&(a.oldValue=o[r].value);let l=a.dir[i];l&&(us(),vi(l,e,8,[n.el,a,n,t]),hs())}}const Um=Symbol("_vte"),Nm=n=>n.__isTeleport;function uu(n,t){n.shapeFlag&6&&n.component?(n.transition=t,uu(n.component.subTree,t)):n.shapeFlag&128?(n.ssContent.transition=t.clone(n.ssContent),n.ssFallback.transition=t.clone(n.ssFallback)):n.transition=t}/*! #__NO_SIDE_EFFECTS__ */function Vn(n,t){return oe(n)?nn({name:n.name},t,{setup:n}):n}function cf(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function Yl(n,t,e,i,s=!1){if(re(n)){n.forEach((_,x)=>Yl(_,t&&(re(t)?t[x]:t),e,i,s));return}if(jo(i)&&!s)return;const o=i.shapeFlag&4?Ba(i.component):i.el,r=s?null:o,{i:a,r:l}=n,c=t&&t.r,h=a.refs===Ie?a.refs={}:a.refs,u=a.setupState,d=Se(u),f=u===Ie?()=>!1:_=>Me(d,_);if(c!=null&&c!==l&&(tn(c)?(h[c]=null,f(c)&&(u[c]=null)):ln(c)&&(c.value=null)),oe(l))vr(l,a,12,[r,h]);else{const _=tn(l),x=ln(l);if(_||x){const m=()=>{if(n.f){const p=_?f(l)?u[l]:h[l]:l.value;s?re(p)&&jc(p,o):re(p)?p.includes(o)||p.push(o):_?(h[l]=[o],f(l)&&(u[l]=h[l])):(l.value=[o],n.k&&(h[n.k]=l.value))}else _?(h[l]=r,f(l)&&(u[l]=r)):x&&(l.value=r,n.k&&(h[n.k]=r))};r?(m.id=-1,An(m,e)):m()}}}const jo=n=>!!n.type.__asyncLoader,uf=n=>n.type.__isKeepAlive;function Fm(n,t){hf(n,"a",t)}function Om(n,t){hf(n,"da",t)}function hf(n,t,e=an){const i=n.__wdc||(n.__wdc=()=>{let s=e;for(;s;){if(s.isDeactivated)return;s=s.parent}return n()});if(Ua(t,i,e),e){let s=e.parent;for(;s&&s.parent;)uf(s.parent.vnode)&&Bm(i,t,e,s),s=s.parent}}function Bm(n,t,e,i){const s=Ua(t,n,i,!0);hu(()=>{jc(i[t],s)},e)}function Ua(n,t,e=an,i=!1){if(e){const s=e[n]||(e[n]=[]),o=t.__weh||(t.__weh=(...r)=>{us();const a=xr(e),l=vi(t,e,n,r);return a(),hs(),l});return i?s.unshift(o):s.push(o),o}}const ki=n=>(t,e=an)=>{(!Oa||n==="sp")&&Ua(n,(...i)=>t(...i),e)},zm=ki("bm"),ai=ki("m"),Gm=ki("bu"),Hm=ki("u"),km=ki("bum"),hu=ki("um"),Vm=ki("sp"),Wm=ki("rtg"),Xm=ki("rtc");function qm(n,t=an){Ua("ec",n,t)}const Ym="components";function ku(n,t){return jm(Ym,n,!0,t)||n}const $m=Symbol.for("v-ndc");function jm(n,t,e=!0,i=!1){const s=Pn||an;if(s){const o=s.type;{const a=F0(o,!1);if(a&&(a===t||a===Gn(t)||a===Ca(Gn(t))))return o}const r=Vu(s[n]||o[n],t)||Vu(s.appContext[n],t);return!r&&i?o:r}}function Vu(n,t){return n&&(n[t]||n[Gn(t)]||n[Ca(Gn(t))])}const $l=n=>n?Cf(n)?Ba(n):$l(n.parent):null,Ko=nn(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>$l(n.parent),$root:n=>$l(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>du(n),$forceUpdate:n=>n.f||(n.f=()=>{cu(n.update)}),$nextTick:n=>n.n||(n.n=sf.bind(n.proxy)),$watch:n=>g0.bind(n)}),Qa=(n,t)=>n!==Ie&&!n.__isScriptSetup&&Me(n,t),Km={get({_:n},t){if(t==="__v_skip")return!0;const{ctx:e,setupState:i,data:s,props:o,accessCache:r,type:a,appContext:l}=n;let c;if(t[0]!=="$"){const f=r[t];if(f!==void 0)switch(f){case 1:return i[t];case 2:return s[t];case 4:return e[t];case 3:return o[t]}else{if(Qa(i,t))return r[t]=1,i[t];if(s!==Ie&&Me(s,t))return r[t]=2,s[t];if((c=n.propsOptions[0])&&Me(c,t))return r[t]=3,o[t];if(e!==Ie&&Me(e,t))return r[t]=4,e[t];jl&&(r[t]=0)}}const h=Ko[t];let u,d;if(h)return t==="$attrs"&&cn(n.attrs,"get",""),h(n);if((u=a.__cssModules)&&(u=u[t]))return u;if(e!==Ie&&Me(e,t))return r[t]=4,e[t];if(d=l.config.globalProperties,Me(d,t))return d[t]},set({_:n},t,e){const{data:i,setupState:s,ctx:o}=n;return Qa(s,t)?(s[t]=e,!0):i!==Ie&&Me(i,t)?(i[t]=e,!0):Me(n.props,t)||t[0]==="$"&&t.slice(1)in n?!1:(o[t]=e,!0)},has({_:{data:n,setupState:t,accessCache:e,ctx:i,appContext:s,propsOptions:o}},r){let a;return!!e[r]||n!==Ie&&Me(n,r)||Qa(t,r)||(a=o[0])&&Me(a,r)||Me(i,r)||Me(Ko,r)||Me(s.config.globalProperties,r)},defineProperty(n,t,e){return e.get!=null?n._.accessCache[t]=0:Me(e,"value")&&this.set(n,t,e.value,null),Reflect.defineProperty(n,t,e)}};function Wu(n){return re(n)?n.reduce((t,e)=>(t[e]=null,t),{}):n}let jl=!0;function Zm(n){const t=du(n),e=n.proxy,i=n.ctx;jl=!1,t.beforeCreate&&Xu(t.beforeCreate,n,"bc");const{data:s,computed:o,methods:r,watch:a,provide:l,inject:c,created:h,beforeMount:u,mounted:d,beforeUpdate:f,updated:_,activated:x,deactivated:m,beforeDestroy:p,beforeUnmount:b,destroyed:M,unmounted:S,render:O,renderTracked:I,renderTriggered:P,errorCaptured:F,serverPrefetch:et,expose:y,inheritAttrs:E,components:G,directives:W,filters:Q}=t;if(c&&Jm(c,i,null),r)for(const nt in r){const $=r[nt];oe($)&&(i[nt]=$.bind(e))}if(s){const nt=s.call(e,e);Xe(nt)&&(n.data=La(nt))}if(jl=!0,o)for(const nt in o){const $=o[nt],gt=oe($)?$.bind(e,e):oe($.get)?$.get.bind(e,e):gi,mt=!oe($)&&oe($.set)?$.set.bind(e):gi,Mt=Zn({get:gt,set:mt});Object.defineProperty(i,nt,{enumerable:!0,configurable:!0,get:()=>Mt.value,set:It=>Mt.value=It})}if(a)for(const nt in a)df(a[nt],i,e,nt);if(l){const nt=oe(l)?l.call(e):l;Reflect.ownKeys(nt).forEach($=>{oa($,nt[$])})}h&&Xu(h,n,"c");function X(nt,$){re($)?$.forEach(gt=>nt(gt.bind(e))):$&&nt($.bind(e))}if(X(zm,u),X(ai,d),X(Gm,f),X(Hm,_),X(Fm,x),X(Om,m),X(qm,F),X(Xm,I),X(Wm,P),X(km,b),X(hu,S),X(Vm,et),re(y))if(y.length){const nt=n.exposed||(n.exposed={});y.forEach($=>{Object.defineProperty(nt,$,{get:()=>e[$],set:gt=>e[$]=gt})})}else n.exposed||(n.exposed={});O&&n.render===gi&&(n.render=O),E!=null&&(n.inheritAttrs=E),G&&(n.components=G),W&&(n.directives=W),et&&cf(n)}function Jm(n,t,e=gi){re(n)&&(n=Kl(n));for(const i in n){const s=n[i];let o;Xe(s)?"default"in s?o=zi(s.from||i,s.default,!0):o=zi(s.from||i):o=zi(s),ln(o)?Object.defineProperty(t,i,{enumerable:!0,configurable:!0,get:()=>o.value,set:r=>o.value=r}):t[i]=o}}function Xu(n,t,e){vi(re(n)?n.map(i=>i.bind(t.proxy)):n.bind(t.proxy),t,e)}function df(n,t,e,i){let s=i.includes(".")?Tf(e,i):()=>e[i];if(tn(n)){const o=t[n];oe(o)&&ke(s,o)}else if(oe(n))ke(s,n.bind(e));else if(Xe(n))if(re(n))n.forEach(o=>df(o,t,e,i));else{const o=oe(n.handler)?n.handler.bind(e):t[n.handler];oe(o)&&ke(s,o,n)}}function du(n){const t=n.type,{mixins:e,extends:i}=t,{mixins:s,optionsCache:o,config:{optionMergeStrategies:r}}=n.appContext,a=o.get(t);let l;return a?l=a:!s.length&&!e&&!i?l=t:(l={},s.length&&s.forEach(c=>_a(l,c,r,!0)),_a(l,t,r)),Xe(t)&&o.set(t,l),l}function _a(n,t,e,i=!1){const{mixins:s,extends:o}=t;o&&_a(n,o,e,!0),s&&s.forEach(r=>_a(n,r,e,!0));for(const r in t)if(!(i&&r==="expose")){const a=Qm[r]||e&&e[r];n[r]=a?a(n[r],t[r]):t[r]}return n}const Qm={data:qu,props:Yu,emits:Yu,methods:Vo,computed:Vo,beforeCreate:hn,created:hn,beforeMount:hn,mounted:hn,beforeUpdate:hn,updated:hn,beforeDestroy:hn,beforeUnmount:hn,destroyed:hn,unmounted:hn,activated:hn,deactivated:hn,errorCaptured:hn,serverPrefetch:hn,components:Vo,directives:Vo,watch:e0,provide:qu,inject:t0};function qu(n,t){return t?n?function(){return nn(oe(n)?n.call(this,this):n,oe(t)?t.call(this,this):t)}:t:n}function t0(n,t){return Vo(Kl(n),Kl(t))}function Kl(n){if(re(n)){const t={};for(let e=0;e<n.length;e++)t[n[e]]=n[e];return t}return n}function hn(n,t){return n?[...new Set([].concat(n,t))]:t}function Vo(n,t){return n?nn(Object.create(null),n,t):t}function Yu(n,t){return n?re(n)&&re(t)?[...new Set([...n,...t])]:nn(Object.create(null),Wu(n),Wu(t??{})):t}function e0(n,t){if(!n)return t;if(!t)return n;const e=nn(Object.create(null),n);for(const i in t)e[i]=hn(n[i],t[i]);return e}function ff(){return{app:null,config:{isNativeTag:zp,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let n0=0;function i0(n,t){return function(i,s=null){oe(i)||(i=nn({},i)),s!=null&&!Xe(s)&&(s=null);const o=ff(),r=new WeakSet,a=[];let l=!1;const c=o.app={_uid:n0++,_component:i,_props:s,_container:null,_context:o,_instance:null,version:B0,get config(){return o.config},set config(h){},use(h,...u){return r.has(h)||(h&&oe(h.install)?(r.add(h),h.install(c,...u)):oe(h)&&(r.add(h),h(c,...u))),c},mixin(h){return o.mixins.includes(h)||o.mixins.push(h),c},component(h,u){return u?(o.components[h]=u,c):o.components[h]},directive(h,u){return u?(o.directives[h]=u,c):o.directives[h]},mount(h,u,d){if(!l){const f=c._ceVNode||Ve(i,s);return f.appContext=o,d===!0?d="svg":d===!1&&(d=void 0),u&&t?t(f,h):n(f,h,d),l=!0,c._container=h,h.__vue_app__=c,Ba(f.component)}},onUnmount(h){a.push(h)},unmount(){l&&(vi(a,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(h,u){return o.provides[h]=u,c},runWithContext(h){const u=ho;ho=c;try{return h()}finally{ho=u}}};return c}}let ho=null;function oa(n,t){if(an){let e=an.provides;const i=an.parent&&an.parent.provides;i===e&&(e=an.provides=Object.create(i)),e[n]=t}}function zi(n,t,e=!1){const i=an||Pn;if(i||ho){const s=ho?ho._context.provides:i?i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(s&&n in s)return s[n];if(arguments.length>1)return e&&oe(t)?t.call(i&&i.proxy):t}}const pf={},mf=()=>Object.create(pf),gf=n=>Object.getPrototypeOf(n)===pf;function s0(n,t,e,i=!1){const s={},o=mf();n.propsDefaults=Object.create(null),_f(n,t,s,o);for(const r in n.propsOptions[0])r in s||(s[r]=void 0);e?n.props=i?s:Jd(s):n.type.props?n.props=s:n.props=o,n.attrs=o}function o0(n,t,e,i){const{props:s,attrs:o,vnode:{patchFlag:r}}=n,a=Se(s),[l]=n.propsOptions;let c=!1;if((i||r>0)&&!(r&16)){if(r&8){const h=n.vnode.dynamicProps;for(let u=0;u<h.length;u++){let d=h[u];if(Na(n.emitsOptions,d))continue;const f=t[d];if(l)if(Me(o,d))f!==o[d]&&(o[d]=f,c=!0);else{const _=Gn(d);s[_]=Zl(l,a,_,f,n,!1)}else f!==o[d]&&(o[d]=f,c=!0)}}}else{_f(n,t,s,o)&&(c=!0);let h;for(const u in a)(!t||!Me(t,u)&&((h=Us(u))===u||!Me(t,h)))&&(l?e&&(e[u]!==void 0||e[h]!==void 0)&&(s[u]=Zl(l,a,u,void 0,n,!0)):delete s[u]);if(o!==a)for(const u in o)(!t||!Me(t,u))&&(delete o[u],c=!0)}c&&Bi(n.attrs,"set","")}function _f(n,t,e,i){const[s,o]=n.propsOptions;let r=!1,a;if(t)for(let l in t){if(qo(l))continue;const c=t[l];let h;s&&Me(s,h=Gn(l))?!o||!o.includes(h)?e[h]=c:(a||(a={}))[h]=c:Na(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,r=!0)}if(o){const l=Se(e),c=a||Ie;for(let h=0;h<o.length;h++){const u=o[h];e[u]=Zl(s,l,u,c[u],n,!Me(c,u))}}return r}function Zl(n,t,e,i,s,o){const r=n[e];if(r!=null){const a=Me(r,"default");if(a&&i===void 0){const l=r.default;if(r.type!==Function&&!r.skipFactory&&oe(l)){const{propsDefaults:c}=s;if(e in c)i=c[e];else{const h=xr(s);i=c[e]=l.call(null,t),h()}}else i=l;s.ce&&s.ce._setProp(e,i)}r[0]&&(o&&!a?i=!1:r[1]&&(i===""||i===Us(e))&&(i=!0))}return i}const r0=new WeakMap;function vf(n,t,e=!1){const i=e?r0:t.propsCache,s=i.get(n);if(s)return s;const o=n.props,r={},a=[];let l=!1;if(!oe(n)){const h=u=>{l=!0;const[d,f]=vf(u,t,!0);nn(r,d),f&&a.push(...f)};!e&&t.mixins.length&&t.mixins.forEach(h),n.extends&&h(n.extends),n.mixins&&n.mixins.forEach(h)}if(!o&&!l)return Xe(n)&&i.set(n,lo),lo;if(re(o))for(let h=0;h<o.length;h++){const u=Gn(o[h]);$u(u)&&(r[u]=Ie)}else if(o)for(const h in o){const u=Gn(h);if($u(u)){const d=o[h],f=r[u]=re(d)||oe(d)?{type:d}:nn({},d),_=f.type;let x=!1,m=!0;if(re(_))for(let p=0;p<_.length;++p){const b=_[p],M=oe(b)&&b.name;if(M==="Boolean"){x=!0;break}else M==="String"&&(m=!1)}else x=oe(_)&&_.name==="Boolean";f[0]=x,f[1]=m,(x||Me(f,"default"))&&a.push(u)}}const c=[r,a];return Xe(n)&&i.set(n,c),c}function $u(n){return n[0]!=="$"&&!qo(n)}const xf=n=>n[0]==="_"||n==="$stable",fu=n=>re(n)?n.map(pi):[pi(n)],a0=(n,t,e)=>{if(t._n)return t;const i=hi((...s)=>fu(t(...s)),e);return i._c=!1,i},yf=(n,t,e)=>{const i=n._ctx;for(const s in n){if(xf(s))continue;const o=n[s];if(oe(o))t[s]=a0(s,o,i);else if(o!=null){const r=fu(o);t[s]=()=>r}}},Mf=(n,t)=>{const e=fu(t);n.slots.default=()=>e},wf=(n,t,e)=>{for(const i in t)(e||i!=="_")&&(n[i]=t[i])},l0=(n,t,e)=>{const i=n.slots=mf();if(n.vnode.shapeFlag&32){const s=t._;s?(wf(i,t,e),e&&Nd(i,"_",s,!0)):yf(t,i)}else t&&Mf(n,t)},c0=(n,t,e)=>{const{vnode:i,slots:s}=n;let o=!0,r=Ie;if(i.shapeFlag&32){const a=t._;a?e&&a===1?o=!1:wf(s,t,e):(o=!t.$stable,yf(t,s)),r=t}else t&&(Mf(n,t),r={default:1});if(o)for(const a in s)!xf(a)&&r[a]==null&&delete s[a]},An=S0;function u0(n){return h0(n)}function h0(n,t){const e=Fd();e.__VUE__=!0;const{insert:i,remove:s,patchProp:o,createElement:r,createText:a,createComment:l,setText:c,setElementText:h,parentNode:u,nextSibling:d,setScopeId:f=gi,insertStaticContent:_}=n,x=(g,T,L,N=null,U=null,Y=null,Z=void 0,w=null,v=!!T.dynamicChildren)=>{if(g===T)return;g&&!Uo(g,T)&&(N=B(g),It(g,U,Y,!0),g=null),T.patchFlag===-2&&(v=!1,T.dynamicChildren=null);const{type:C,ref:q,shapeFlag:H}=T;switch(C){case Fa:m(g,T,L,N);break;case lr:p(g,T,L,N);break;case nl:g==null&&b(T,L,N,Z);break;case gn:G(g,T,L,N,U,Y,Z,w,v);break;default:H&1?O(g,T,L,N,U,Y,Z,w,v):H&6?W(g,T,L,N,U,Y,Z,w,v):(H&64||H&128)&&C.process(g,T,L,N,U,Y,Z,w,v,ht)}q!=null&&U&&Yl(q,g&&g.ref,Y,T||g,!T)},m=(g,T,L,N)=>{if(g==null)i(T.el=a(T.children),L,N);else{const U=T.el=g.el;T.children!==g.children&&c(U,T.children)}},p=(g,T,L,N)=>{g==null?i(T.el=l(T.children||""),L,N):T.el=g.el},b=(g,T,L,N)=>{[g.el,g.anchor]=_(g.children,T,L,N,g.el,g.anchor)},M=({el:g,anchor:T},L,N)=>{let U;for(;g&&g!==T;)U=d(g),i(g,L,N),g=U;i(T,L,N)},S=({el:g,anchor:T})=>{let L;for(;g&&g!==T;)L=d(g),s(g),g=L;s(T)},O=(g,T,L,N,U,Y,Z,w,v)=>{T.type==="svg"?Z="svg":T.type==="math"&&(Z="mathml"),g==null?I(T,L,N,U,Y,Z,w,v):et(g,T,U,Y,Z,w,v)},I=(g,T,L,N,U,Y,Z,w)=>{let v,C;const{props:q,shapeFlag:H,transition:V,dirs:ut}=g;if(v=g.el=r(g.type,Y,q&&q.is,q),H&8?h(v,g.children):H&16&&F(g.children,v,null,N,U,tl(g,Y),Z,w),ut&&ps(g,null,N,"created"),P(v,g,g.scopeId,Z,N),q){for(const pt in q)pt!=="value"&&!qo(pt)&&o(v,pt,null,q[pt],Y,N);"value"in q&&o(v,"value",null,q.value,Y),(C=q.onVnodeBeforeMount)&&ui(C,N,g)}ut&&ps(g,null,N,"beforeMount");const ct=d0(U,V);ct&&V.beforeEnter(v),i(v,T,L),((C=q&&q.onVnodeMounted)||ct||ut)&&An(()=>{C&&ui(C,N,g),ct&&V.enter(v),ut&&ps(g,null,N,"mounted")},U)},P=(g,T,L,N,U)=>{if(L&&f(g,L),N)for(let Y=0;Y<N.length;Y++)f(g,N[Y]);if(U){let Y=U.subTree;if(T===Y||Rf(Y.type)&&(Y.ssContent===T||Y.ssFallback===T)){const Z=U.vnode;P(g,Z,Z.scopeId,Z.slotScopeIds,U.parent)}}},F=(g,T,L,N,U,Y,Z,w,v=0)=>{for(let C=v;C<g.length;C++){const q=g[C]=w?is(g[C]):pi(g[C]);x(null,q,T,L,N,U,Y,Z,w)}},et=(g,T,L,N,U,Y,Z)=>{const w=T.el=g.el;let{patchFlag:v,dynamicChildren:C,dirs:q}=T;v|=g.patchFlag&16;const H=g.props||Ie,V=T.props||Ie;let ut;if(L&&ms(L,!1),(ut=V.onVnodeBeforeUpdate)&&ui(ut,L,T,g),q&&ps(T,g,L,"beforeUpdate"),L&&ms(L,!0),(H.innerHTML&&V.innerHTML==null||H.textContent&&V.textContent==null)&&h(w,""),C?y(g.dynamicChildren,C,w,L,N,tl(T,U),Y):Z||$(g,T,w,null,L,N,tl(T,U),Y,!1),v>0){if(v&16)E(w,H,V,L,U);else if(v&2&&H.class!==V.class&&o(w,"class",null,V.class,U),v&4&&o(w,"style",H.style,V.style,U),v&8){const ct=T.dynamicProps;for(let pt=0;pt<ct.length;pt++){const Rt=ct[pt],dt=H[Rt],yt=V[Rt];(yt!==dt||Rt==="value")&&o(w,Rt,dt,yt,U,L)}}v&1&&g.children!==T.children&&h(w,T.children)}else!Z&&C==null&&E(w,H,V,L,U);((ut=V.onVnodeUpdated)||q)&&An(()=>{ut&&ui(ut,L,T,g),q&&ps(T,g,L,"updated")},N)},y=(g,T,L,N,U,Y,Z)=>{for(let w=0;w<T.length;w++){const v=g[w],C=T[w],q=v.el&&(v.type===gn||!Uo(v,C)||v.shapeFlag&70)?u(v.el):L;x(v,C,q,null,N,U,Y,Z,!0)}},E=(g,T,L,N,U)=>{if(T!==L){if(T!==Ie)for(const Y in T)!qo(Y)&&!(Y in L)&&o(g,Y,T[Y],null,U,N);for(const Y in L){if(qo(Y))continue;const Z=L[Y],w=T[Y];Z!==w&&Y!=="value"&&o(g,Y,w,Z,U,N)}"value"in L&&o(g,"value",T.value,L.value,U)}},G=(g,T,L,N,U,Y,Z,w,v)=>{const C=T.el=g?g.el:a(""),q=T.anchor=g?g.anchor:a("");let{patchFlag:H,dynamicChildren:V,slotScopeIds:ut}=T;ut&&(w=w?w.concat(ut):ut),g==null?(i(C,L,N),i(q,L,N),F(T.children||[],L,q,U,Y,Z,w,v)):H>0&&H&64&&V&&g.dynamicChildren?(y(g.dynamicChildren,V,L,U,Y,Z,w),(T.key!=null||U&&T===U.subTree)&&Sf(g,T,!0)):$(g,T,L,q,U,Y,Z,w,v)},W=(g,T,L,N,U,Y,Z,w,v)=>{T.slotScopeIds=w,g==null?T.shapeFlag&512?U.ctx.activate(T,L,N,Z,v):Q(T,L,N,U,Y,Z,v):at(g,T,v)},Q=(g,T,L,N,U,Y,Z)=>{const w=g.component=I0(g,N,U);if(uf(g)&&(w.ctx.renderer=ht),L0(w,!1,Z),w.asyncDep){if(U&&U.registerDep(w,X,Z),!g.el){const v=w.subTree=Ve(lr);p(null,v,T,L)}}else X(w,g,T,L,U,Y,Z)},at=(g,T,L)=>{const N=T.component=g.component;if(M0(g,T,L))if(N.asyncDep&&!N.asyncResolved){nt(N,T,L);return}else N.next=T,N.update();else T.el=g.el,N.vnode=T},X=(g,T,L,N,U,Y,Z)=>{const w=()=>{if(g.isMounted){let{next:H,bu:V,u:ut,parent:ct,vnode:pt}=g;{const Lt=Ef(g);if(Lt){H&&(H.el=pt.el,nt(g,H,Z)),Lt.asyncDep.then(()=>{g.isUnmounted||w()});return}}let Rt=H,dt;ms(g,!1),H?(H.el=pt.el,nt(g,H,Z)):H=pt,V&&ja(V),(dt=H.props&&H.props.onVnodeBeforeUpdate)&&ui(dt,ct,H,pt),ms(g,!0);const yt=el(g),Pt=g.subTree;g.subTree=yt,x(Pt,yt,u(Pt.el),B(Pt),g,U,Y),H.el=yt.el,Rt===null&&w0(g,yt.el),ut&&An(ut,U),(dt=H.props&&H.props.onVnodeUpdated)&&An(()=>ui(dt,ct,H,pt),U)}else{let H;const{el:V,props:ut}=T,{bm:ct,m:pt,parent:Rt,root:dt,type:yt}=g,Pt=jo(T);if(ms(g,!1),ct&&ja(ct),!Pt&&(H=ut&&ut.onVnodeBeforeMount)&&ui(H,Rt,T),ms(g,!0),V&&it){const Lt=()=>{g.subTree=el(g),it(V,g.subTree,g,U,null)};Pt&&yt.__asyncHydrate?yt.__asyncHydrate(V,g,Lt):Lt()}else{dt.ce&&dt.ce._injectChildStyle(yt);const Lt=g.subTree=el(g);x(null,Lt,L,N,g,U,Y),T.el=Lt.el}if(pt&&An(pt,U),!Pt&&(H=ut&&ut.onVnodeMounted)){const Lt=T;An(()=>ui(H,Rt,Lt),U)}(T.shapeFlag&256||Rt&&jo(Rt.vnode)&&Rt.vnode.shapeFlag&256)&&g.a&&An(g.a,U),g.isMounted=!0,T=L=N=null}};g.scope.on();const v=g.effect=new Bd(w);g.scope.off();const C=g.update=v.run.bind(v),q=g.job=v.runIfDirty.bind(v);q.i=g,q.id=g.uid,v.scheduler=()=>cu(q),ms(g,!0),C()},nt=(g,T,L)=>{T.component=g;const N=g.vnode.props;g.vnode=T,g.next=null,o0(g,T.props,N,L),c0(g,T.children,L),us(),Hu(g),hs()},$=(g,T,L,N,U,Y,Z,w,v=!1)=>{const C=g&&g.children,q=g?g.shapeFlag:0,H=T.children,{patchFlag:V,shapeFlag:ut}=T;if(V>0){if(V&128){mt(C,H,L,N,U,Y,Z,w,v);return}else if(V&256){gt(C,H,L,N,U,Y,Z,w,v);return}}ut&8?(q&16&&xt(C,U,Y),H!==C&&h(L,H)):q&16?ut&16?mt(C,H,L,N,U,Y,Z,w,v):xt(C,U,Y,!0):(q&8&&h(L,""),ut&16&&F(H,L,N,U,Y,Z,w,v))},gt=(g,T,L,N,U,Y,Z,w,v)=>{g=g||lo,T=T||lo;const C=g.length,q=T.length,H=Math.min(C,q);let V;for(V=0;V<H;V++){const ut=T[V]=v?is(T[V]):pi(T[V]);x(g[V],ut,L,null,U,Y,Z,w,v)}C>q?xt(g,U,Y,!0,!1,H):F(T,L,N,U,Y,Z,w,v,H)},mt=(g,T,L,N,U,Y,Z,w,v)=>{let C=0;const q=T.length;let H=g.length-1,V=q-1;for(;C<=H&&C<=V;){const ut=g[C],ct=T[C]=v?is(T[C]):pi(T[C]);if(Uo(ut,ct))x(ut,ct,L,null,U,Y,Z,w,v);else break;C++}for(;C<=H&&C<=V;){const ut=g[H],ct=T[V]=v?is(T[V]):pi(T[V]);if(Uo(ut,ct))x(ut,ct,L,null,U,Y,Z,w,v);else break;H--,V--}if(C>H){if(C<=V){const ut=V+1,ct=ut<q?T[ut].el:N;for(;C<=V;)x(null,T[C]=v?is(T[C]):pi(T[C]),L,ct,U,Y,Z,w,v),C++}}else if(C>V)for(;C<=H;)It(g[C],U,Y,!0),C++;else{const ut=C,ct=C,pt=new Map;for(C=ct;C<=V;C++){const Dt=T[C]=v?is(T[C]):pi(T[C]);Dt.key!=null&&pt.set(Dt.key,C)}let Rt,dt=0;const yt=V-ct+1;let Pt=!1,Lt=0;const bt=new Array(yt);for(C=0;C<yt;C++)bt[C]=0;for(C=ut;C<=H;C++){const Dt=g[C];if(dt>=yt){It(Dt,U,Y,!0);continue}let kt;if(Dt.key!=null)kt=pt.get(Dt.key);else for(Rt=ct;Rt<=V;Rt++)if(bt[Rt-ct]===0&&Uo(Dt,T[Rt])){kt=Rt;break}kt===void 0?It(Dt,U,Y,!0):(bt[kt-ct]=C+1,kt>=Lt?Lt=kt:Pt=!0,x(Dt,T[kt],L,null,U,Y,Z,w,v),dt++)}const Vt=Pt?f0(bt):lo;for(Rt=Vt.length-1,C=yt-1;C>=0;C--){const Dt=ct+C,kt=T[Dt],z=Dt+1<q?T[Dt+1].el:N;bt[C]===0?x(null,kt,L,z,U,Y,Z,w,v):Pt&&(Rt<0||C!==Vt[Rt]?Mt(kt,L,z,2):Rt--)}}},Mt=(g,T,L,N,U=null)=>{const{el:Y,type:Z,transition:w,children:v,shapeFlag:C}=g;if(C&6){Mt(g.component.subTree,T,L,N);return}if(C&128){g.suspense.move(T,L,N);return}if(C&64){Z.move(g,T,L,ht);return}if(Z===gn){i(Y,T,L);for(let H=0;H<v.length;H++)Mt(v[H],T,L,N);i(g.anchor,T,L);return}if(Z===nl){M(g,T,L);return}if(N!==2&&C&1&&w)if(N===0)w.beforeEnter(Y),i(Y,T,L),An(()=>w.enter(Y),U);else{const{leave:H,delayLeave:V,afterLeave:ut}=w,ct=()=>i(Y,T,L),pt=()=>{H(Y,()=>{ct(),ut&&ut()})};V?V(Y,ct,pt):pt()}else i(Y,T,L)},It=(g,T,L,N=!1,U=!1)=>{const{type:Y,props:Z,ref:w,children:v,dynamicChildren:C,shapeFlag:q,patchFlag:H,dirs:V,cacheIndex:ut}=g;if(H===-2&&(U=!1),w!=null&&Yl(w,null,L,g,!0),ut!=null&&(T.renderCache[ut]=void 0),q&256){T.ctx.deactivate(g);return}const ct=q&1&&V,pt=!jo(g);let Rt;if(pt&&(Rt=Z&&Z.onVnodeBeforeUnmount)&&ui(Rt,T,g),q&6)ft(g.component,L,N);else{if(q&128){g.suspense.unmount(L,N);return}ct&&ps(g,null,T,"beforeUnmount"),q&64?g.type.remove(g,T,L,ht,N):C&&!C.hasOnce&&(Y!==gn||H>0&&H&64)?xt(C,T,L,!1,!0):(Y===gn&&H&384||!U&&q&16)&&xt(v,T,L),N&&zt(g)}(pt&&(Rt=Z&&Z.onVnodeUnmounted)||ct)&&An(()=>{Rt&&ui(Rt,T,g),ct&&ps(g,null,T,"unmounted")},L)},zt=g=>{const{type:T,el:L,anchor:N,transition:U}=g;if(T===gn){rt(L,N);return}if(T===nl){S(g);return}const Y=()=>{s(L),U&&!U.persisted&&U.afterLeave&&U.afterLeave()};if(g.shapeFlag&1&&U&&!U.persisted){const{leave:Z,delayLeave:w}=U,v=()=>Z(L,Y);w?w(g.el,Y,v):v()}else Y()},rt=(g,T)=>{let L;for(;g!==T;)L=d(g),s(g),g=L;s(T)},ft=(g,T,L)=>{const{bum:N,scope:U,job:Y,subTree:Z,um:w,m:v,a:C}=g;ju(v),ju(C),N&&ja(N),U.stop(),Y&&(Y.flags|=8,It(Z,g,T,L)),w&&An(w,T),An(()=>{g.isUnmounted=!0},T),T&&T.pendingBranch&&!T.isUnmounted&&g.asyncDep&&!g.asyncResolved&&g.suspenseId===T.pendingId&&(T.deps--,T.deps===0&&T.resolve())},xt=(g,T,L,N=!1,U=!1,Y=0)=>{for(let Z=Y;Z<g.length;Z++)It(g[Z],T,L,N,U)},B=g=>{if(g.shapeFlag&6)return B(g.component.subTree);if(g.shapeFlag&128)return g.suspense.next();const T=d(g.anchor||g.el),L=T&&T[Um];return L?d(L):T};let lt=!1;const ot=(g,T,L)=>{g==null?T._vnode&&It(T._vnode,null,null,!0):x(T._vnode||null,g,T,null,null,null,L),T._vnode=g,lt||(lt=!0,Hu(),rf(),lt=!1)},ht={p:x,um:It,m:Mt,r:zt,mt:Q,mc:F,pc:$,pbc:y,n:B,o:n};let wt,it;return{render:ot,hydrate:wt,createApp:i0(ot,wt)}}function tl({type:n,props:t},e){return e==="svg"&&n==="foreignObject"||e==="mathml"&&n==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:e}function ms({effect:n,job:t},e){e?(n.flags|=32,t.flags|=4):(n.flags&=-33,t.flags&=-5)}function d0(n,t){return(!n||n&&!n.pendingBranch)&&t&&!t.persisted}function Sf(n,t,e=!1){const i=n.children,s=t.children;if(re(i)&&re(s))for(let o=0;o<i.length;o++){const r=i[o];let a=s[o];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[o]=is(s[o]),a.el=r.el),!e&&a.patchFlag!==-2&&Sf(r,a)),a.type===Fa&&(a.el=r.el)}}function f0(n){const t=n.slice(),e=[0];let i,s,o,r,a;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(s=e[e.length-1],n[s]<c){t[i]=s,e.push(i);continue}for(o=0,r=e.length-1;o<r;)a=o+r>>1,n[e[a]]<c?o=a+1:r=a;c<n[e[o]]&&(o>0&&(t[i]=e[o-1]),e[o]=i)}}for(o=e.length,r=e[o-1];o-- >0;)e[o]=r,r=t[r];return e}function Ef(n){const t=n.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:Ef(t)}function ju(n){if(n)for(let t=0;t<n.length;t++)n[t].flags|=8}const p0=Symbol.for("v-scx"),m0=()=>zi(p0);function ke(n,t,e){return bf(n,t,e)}function bf(n,t,e=Ie){const{immediate:i,deep:s,flush:o,once:r}=e,a=nn({},e);let l;if(Oa)if(o==="sync"){const d=m0();l=d.__watcherHandles||(d.__watcherHandles=[])}else if(!t||i)a.once=!0;else{const d=()=>{};return d.stop=gi,d.resume=gi,d.pause=gi,d}const c=an;a.call=(d,f,_)=>vi(d,c,f,_);let h=!1;o==="post"?a.scheduler=d=>{An(d,c&&c.suspense)}:o!=="sync"&&(h=!0,a.scheduler=(d,f)=>{f?d():cu(d)}),a.augmentJob=d=>{t&&(d.flags|=4),h&&(d.flags|=2,c&&(d.id=c.uid,d.i=c))};const u=Pm(n,t,a);return l&&l.push(u),u}function g0(n,t,e){const i=this.proxy,s=tn(n)?n.includes(".")?Tf(i,n):()=>i[n]:n.bind(i,i);let o;oe(t)?o=t:(o=t.handler,e=t);const r=xr(this),a=bf(s,o.bind(i),e);return r(),a}function Tf(n,t){const e=t.split(".");return()=>{let i=n;for(let s=0;s<e.length&&i;s++)i=i[e[s]];return i}}const _0=(n,t)=>t==="modelValue"||t==="model-value"?n.modelModifiers:n[`${t}Modifiers`]||n[`${Gn(t)}Modifiers`]||n[`${Us(t)}Modifiers`];function v0(n,t,...e){if(n.isUnmounted)return;const i=n.vnode.props||Ie;let s=e;const o=t.startsWith("update:"),r=o&&_0(i,t.slice(7));r&&(r.trim&&(s=e.map(h=>tn(h)?h.trim():h)),r.number&&(s=e.map(Yp)));let a,l=i[a=$a(t)]||i[a=$a(Gn(t))];!l&&o&&(l=i[a=$a(Us(t))]),l&&vi(l,n,6,s);const c=i[a+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,vi(c,n,6,s)}}function Af(n,t,e=!1){const i=t.emitsCache,s=i.get(n);if(s!==void 0)return s;const o=n.emits;let r={},a=!1;if(!oe(n)){const l=c=>{const h=Af(c,t,!0);h&&(a=!0,nn(r,h))};!e&&t.mixins.length&&t.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!o&&!a?(Xe(n)&&i.set(n,null),null):(re(o)?o.forEach(l=>r[l]=null):nn(r,o),Xe(n)&&i.set(n,r),r)}function Na(n,t){return!n||!Aa(t)?!1:(t=t.slice(2).replace(/Once$/,""),Me(n,t[0].toLowerCase()+t.slice(1))||Me(n,Us(t))||Me(n,t))}function el(n){const{type:t,vnode:e,proxy:i,withProxy:s,propsOptions:[o],slots:r,attrs:a,emit:l,render:c,renderCache:h,props:u,data:d,setupState:f,ctx:_,inheritAttrs:x}=n,m=ga(n);let p,b;try{if(e.shapeFlag&4){const S=s||i,O=S;p=pi(c.call(O,S,h,u,f,d,_)),b=a}else{const S=t;p=pi(S.length>1?S(u,{attrs:a,slots:r,emit:l}):S(u,null)),b=t.props?a:x0(a)}}catch(S){Zo.length=0,Da(S,n,1),p=Ve(lr)}let M=p;if(b&&x!==!1){const S=Object.keys(b),{shapeFlag:O}=M;S.length&&O&7&&(o&&S.some($c)&&(b=y0(b,o)),M=vo(M,b,!1,!0))}return e.dirs&&(M=vo(M,null,!1,!0),M.dirs=M.dirs?M.dirs.concat(e.dirs):e.dirs),e.transition&&uu(M,e.transition),p=M,ga(m),p}const x0=n=>{let t;for(const e in n)(e==="class"||e==="style"||Aa(e))&&((t||(t={}))[e]=n[e]);return t},y0=(n,t)=>{const e={};for(const i in n)(!$c(i)||!(i.slice(9)in t))&&(e[i]=n[i]);return e};function M0(n,t,e){const{props:i,children:s,component:o}=n,{props:r,children:a,patchFlag:l}=t,c=o.emitsOptions;if(t.dirs||t.transition)return!0;if(e&&l>=0){if(l&1024)return!0;if(l&16)return i?Ku(i,r,c):!!r;if(l&8){const h=t.dynamicProps;for(let u=0;u<h.length;u++){const d=h[u];if(r[d]!==i[d]&&!Na(c,d))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:i===r?!1:i?r?Ku(i,r,c):!0:!!r;return!1}function Ku(n,t,e){const i=Object.keys(t);if(i.length!==Object.keys(n).length)return!0;for(let s=0;s<i.length;s++){const o=i[s];if(t[o]!==n[o]&&!Na(e,o))return!0}return!1}function w0({vnode:n,parent:t},e){for(;t;){const i=t.subTree;if(i.suspense&&i.suspense.activeBranch===n&&(i.el=n.el),i===n)(n=t.vnode).el=e,t=t.parent;else break}}const Rf=n=>n.__isSuspense;function S0(n,t){t&&t.pendingBranch?re(n)?t.effects.push(...n):t.effects.push(n):Lm(n)}const gn=Symbol.for("v-fgt"),Fa=Symbol.for("v-txt"),lr=Symbol.for("v-cmt"),nl=Symbol.for("v-stc"),Zo=[];let Cn=null;function yi(n=!1){Zo.push(Cn=n?null:[])}function E0(){Zo.pop(),Cn=Zo[Zo.length-1]||null}let cr=1;function Zu(n){cr+=n,n<0&&Cn&&(Cn.hasOnce=!0)}function b0(n){return n.dynamicChildren=cr>0?Cn||lo:null,E0(),cr>0&&Cn&&Cn.push(n),n}function Mi(n,t,e,i,s,o){return b0(Xt(n,t,e,i,s,o,!0))}function va(n){return n?n.__v_isVNode===!0:!1}function Uo(n,t){return n.type===t.type&&n.key===t.key}const Pf=({key:n})=>n??null,ra=({ref:n,ref_key:t,ref_for:e})=>(typeof n=="number"&&(n=""+n),n!=null?tn(n)||ln(n)||oe(n)?{i:Pn,r:n,k:t,f:!!e}:n:null);function Xt(n,t=null,e=null,i=0,s=null,o=n===gn?0:1,r=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:t,key:t&&Pf(t),ref:t&&ra(t),scopeId:lf,slotScopeIds:null,children:e,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Pn};return a?(pu(l,e),o&128&&n.normalize(l)):e&&(l.shapeFlag|=tn(e)?8:16),cr>0&&!r&&Cn&&(l.patchFlag>0||o&6)&&l.patchFlag!==32&&Cn.push(l),l}const Ve=T0;function T0(n,t=null,e=null,i=0,s=null,o=!1){if((!n||n===$m)&&(n=lr),va(n)){const a=vo(n,t,!0);return e&&pu(a,e),cr>0&&!o&&Cn&&(a.shapeFlag&6?Cn[Cn.indexOf(n)]=a:Cn.push(a)),a.patchFlag=-2,a}if(O0(n)&&(n=n.__vccOpts),t){t=A0(t);let{class:a,style:l}=t;a&&!tn(a)&&(t.class=kn(a)),Xe(l)&&(ru(l)&&!re(l)&&(l=nn({},l)),t.style=Zc(l))}const r=tn(n)?1:Rf(n)?128:Nm(n)?64:Xe(n)?4:oe(n)?2:0;return Xt(n,t,e,i,s,r,o,!0)}function A0(n){return n?ru(n)||gf(n)?nn({},n):n:null}function vo(n,t,e=!1,i=!1){const{props:s,ref:o,patchFlag:r,children:a,transition:l}=n,c=t?R0(s||{},t):s,h={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&Pf(c),ref:t&&t.ref?e&&o?re(o)?o.concat(ra(t)):[o,ra(t)]:ra(t):o,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:t&&n.type!==gn?r===-1?16:r|16:r,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&vo(n.ssContent),ssFallback:n.ssFallback&&vo(n.ssFallback),el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&i&&uu(h,l.clone(h)),h}function di(n=" ",t=0){return Ve(Fa,null,n,t)}function pi(n){return n==null||typeof n=="boolean"?Ve(lr):re(n)?Ve(gn,null,n.slice()):va(n)?is(n):Ve(Fa,null,String(n))}function is(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:vo(n)}function pu(n,t){let e=0;const{shapeFlag:i}=n;if(t==null)t=null;else if(re(t))e=16;else if(typeof t=="object")if(i&65){const s=t.default;s&&(s._c&&(s._d=!1),pu(n,s()),s._c&&(s._d=!0));return}else{e=32;const s=t._;!s&&!gf(t)?t._ctx=Pn:s===3&&Pn&&(Pn.slots._===1?t._=1:(t._=2,n.patchFlag|=1024))}else oe(t)?(t={default:t,_ctx:Pn},e=32):(t=String(t),i&64?(e=16,t=[di(t)]):e=8);n.children=t,n.shapeFlag|=e}function R0(...n){const t={};for(let e=0;e<n.length;e++){const i=n[e];for(const s in i)if(s==="class")t.class!==i.class&&(t.class=kn([t.class,i.class]));else if(s==="style")t.style=Zc([t.style,i.style]);else if(Aa(s)){const o=t[s],r=i[s];r&&o!==r&&!(re(o)&&o.includes(r))&&(t[s]=o?[].concat(o,r):r)}else s!==""&&(t[s]=i[s])}return t}function ui(n,t,e,i=null){vi(n,t,7,[e,i])}const P0=ff();let C0=0;function I0(n,t,e){const i=n.type,s=(t?t.appContext:n.appContext)||P0,o={uid:C0++,vnode:n,type:i,parent:t,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new tm(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(s.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:vf(i,s),emitsOptions:Af(i,s),emit:null,emitted:null,propsDefaults:Ie,inheritAttrs:i.inheritAttrs,ctx:Ie,data:Ie,props:Ie,attrs:Ie,slots:Ie,refs:Ie,setupState:Ie,setupContext:null,suspense:e,suspenseId:e?e.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return o.ctx={_:o},o.root=t?t.root:o,o.emit=v0.bind(null,o),n.ce&&n.ce(o),o}let an=null,xa,Jl;{const n=Fd(),t=(e,i)=>{let s;return(s=n[e])||(s=n[e]=[]),s.push(i),o=>{s.length>1?s.forEach(r=>r(o)):s[0](o)}};xa=t("__VUE_INSTANCE_SETTERS__",e=>an=e),Jl=t("__VUE_SSR_SETTERS__",e=>Oa=e)}const xr=n=>{const t=an;return xa(n),n.scope.on(),()=>{n.scope.off(),xa(t)}},Ju=()=>{an&&an.scope.off(),xa(null)};function Cf(n){return n.vnode.shapeFlag&4}let Oa=!1;function L0(n,t=!1,e=!1){t&&Jl(t);const{props:i,children:s}=n.vnode,o=Cf(n);s0(n,i,o,t),l0(n,s,e);const r=o?D0(n,t):void 0;return t&&Jl(!1),r}function D0(n,t){const e=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,Km);const{setup:i}=e;if(i){const s=n.setupContext=i.length>1?N0(n):null,o=xr(n);us();const r=vr(i,n,0,[n.props,s]);if(hs(),o(),Ud(r)){if(jo(n)||cf(n),r.then(Ju,Ju),t)return r.then(a=>{Qu(n,a,t)}).catch(a=>{Da(a,n,0)});n.asyncDep=r}else Qu(n,r,t)}else If(n,t)}function Qu(n,t,e){oe(t)?n.type.__ssrInlineRender?n.ssrRender=t:n.render=t:Xe(t)&&(n.setupState=ef(t)),If(n,e)}let th;function If(n,t,e){const i=n.type;if(!n.render){if(!t&&th&&!i.render){const s=i.template||du(n).template;if(s){const{isCustomElement:o,compilerOptions:r}=n.appContext.config,{delimiters:a,compilerOptions:l}=i,c=nn(nn({isCustomElement:o,delimiters:a},r),l);i.render=th(s,c)}}n.render=i.render||gi}{const s=xr(n);us();try{Zm(n)}finally{hs(),s()}}}const U0={get(n,t){return cn(n,"get",""),n[t]}};function N0(n){const t=e=>{n.exposed=e||{}};return{attrs:new Proxy(n.attrs,U0),slots:n.slots,emit:n.emit,expose:t}}function Ba(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(ef(Sm(n.exposed)),{get(t,e){if(e in t)return t[e];if(e in Ko)return Ko[e](n)},has(t,e){return e in t||e in Ko}})):n.proxy}function F0(n,t=!0){return oe(n)?n.displayName||n.name:n.name||t&&n.__name}function O0(n){return oe(n)&&"__vccOpts"in n}const Zn=(n,t)=>Am(n,t,Oa);function Lf(n,t,e){const i=arguments.length;return i===2?Xe(t)&&!re(t)?va(t)?Ve(n,null,[t]):Ve(n,t):Ve(n,null,t):(i>3?e=Array.prototype.slice.call(arguments,2):i===3&&va(e)&&(e=[e]),Ve(n,t,e))}const B0="3.5.10";/**
* @vue/runtime-dom v3.5.10
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ql;const eh=typeof window<"u"&&window.trustedTypes;if(eh)try{Ql=eh.createPolicy("vue",{createHTML:n=>n})}catch{}const Df=Ql?n=>Ql.createHTML(n):n=>n,z0="http://www.w3.org/2000/svg",G0="http://www.w3.org/1998/Math/MathML",Ui=typeof document<"u"?document:null,nh=Ui&&Ui.createElement("template"),H0={insert:(n,t,e)=>{t.insertBefore(n,e||null)},remove:n=>{const t=n.parentNode;t&&t.removeChild(n)},createElement:(n,t,e,i)=>{const s=t==="svg"?Ui.createElementNS(z0,n):t==="mathml"?Ui.createElementNS(G0,n):e?Ui.createElement(n,{is:e}):Ui.createElement(n);return n==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:n=>Ui.createTextNode(n),createComment:n=>Ui.createComment(n),setText:(n,t)=>{n.nodeValue=t},setElementText:(n,t)=>{n.textContent=t},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>Ui.querySelector(n),setScopeId(n,t){n.setAttribute(t,"")},insertStaticContent(n,t,e,i,s,o){const r=e?e.previousSibling:t.lastChild;if(s&&(s===o||s.nextSibling))for(;t.insertBefore(s.cloneNode(!0),e),!(s===o||!(s=s.nextSibling)););else{nh.innerHTML=Df(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const a=nh.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}t.insertBefore(a,e)}return[r?r.nextSibling:t.firstChild,e?e.previousSibling:t.lastChild]}},k0=Symbol("_vtc");function V0(n,t,e){const i=n[k0];i&&(t=(t?[t,...i]:[...i]).join(" ")),t==null?n.removeAttribute("class"):e?n.setAttribute("class",t):n.className=t}const ya=Symbol("_vod"),Uf=Symbol("_vsh"),W0={beforeMount(n,{value:t},{transition:e}){n[ya]=n.style.display==="none"?"":n.style.display,e&&t?e.beforeEnter(n):No(n,t)},mounted(n,{value:t},{transition:e}){e&&t&&e.enter(n)},updated(n,{value:t,oldValue:e},{transition:i}){!t!=!e&&(i?t?(i.beforeEnter(n),No(n,!0),i.enter(n)):i.leave(n,()=>{No(n,!1)}):No(n,t))},beforeUnmount(n,{value:t}){No(n,t)}};function No(n,t){n.style.display=t?n[ya]:"none",n[Uf]=!t}const X0=Symbol(""),q0=/(^|;)\s*display\s*:/;function Y0(n,t,e){const i=n.style,s=tn(e);let o=!1;if(e&&!s){if(t)if(tn(t))for(const r of t.split(";")){const a=r.slice(0,r.indexOf(":")).trim();e[a]==null&&aa(i,a,"")}else for(const r in t)e[r]==null&&aa(i,r,"");for(const r in e)r==="display"&&(o=!0),aa(i,r,e[r])}else if(s){if(t!==e){const r=i[X0];r&&(e+=";"+r),i.cssText=e,o=q0.test(e)}}else t&&n.removeAttribute("style");ya in n&&(n[ya]=o?i.display:"",n[Uf]&&(i.display="none"))}const ih=/\s*!important$/;function aa(n,t,e){if(re(e))e.forEach(i=>aa(n,t,i));else if(e==null&&(e=""),t.startsWith("--"))n.setProperty(t,e);else{const i=$0(n,t);ih.test(e)?n.setProperty(Us(i),e.replace(ih,""),"important"):n[i]=e}}const sh=["Webkit","Moz","ms"],il={};function $0(n,t){const e=il[t];if(e)return e;let i=Gn(t);if(i!=="filter"&&i in n)return il[t]=i;i=Ca(i);for(let s=0;s<sh.length;s++){const o=sh[s]+i;if(o in n)return il[t]=o}return t}const oh="http://www.w3.org/1999/xlink";function rh(n,t,e,i,s,o=Qp(t)){i&&t.startsWith("xlink:")?e==null?n.removeAttributeNS(oh,t.slice(6,t.length)):n.setAttributeNS(oh,t,e):e==null||o&&!Od(e)?n.removeAttribute(t):n.setAttribute(t,o?"":Ao(e)?String(e):e)}function ah(n,t,e,i){if(t==="innerHTML"||t==="textContent"){e!=null&&(n[t]=t==="innerHTML"?Df(e):e);return}const s=n.tagName;if(t==="value"&&s!=="PROGRESS"&&!s.includes("-")){const r=s==="OPTION"?n.getAttribute("value")||"":n.value,a=e==null?n.type==="checkbox"?"on":"":String(e);(r!==a||!("_value"in n))&&(n.value=a),e==null&&n.removeAttribute(t),n._value=e;return}let o=!1;if(e===""||e==null){const r=typeof n[t];r==="boolean"?e=Od(e):e==null&&r==="string"?(e="",o=!0):r==="number"&&(e=0,o=!0)}try{n[t]=e}catch{}o&&n.removeAttribute(t)}function j0(n,t,e,i){n.addEventListener(t,e,i)}function K0(n,t,e,i){n.removeEventListener(t,e,i)}const lh=Symbol("_vei");function Z0(n,t,e,i,s=null){const o=n[lh]||(n[lh]={}),r=o[t];if(i&&r)r.value=i;else{const[a,l]=J0(t);if(i){const c=o[t]=eg(i,s);j0(n,a,c,l)}else r&&(K0(n,a,r,l),o[t]=void 0)}}const ch=/(?:Once|Passive|Capture)$/;function J0(n){let t;if(ch.test(n)){t={};let i;for(;i=n.match(ch);)n=n.slice(0,n.length-i[0].length),t[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):Us(n.slice(2)),t]}let sl=0;const Q0=Promise.resolve(),tg=()=>sl||(Q0.then(()=>sl=0),sl=Date.now());function eg(n,t){const e=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=e.attached)return;vi(ng(i,e.value),t,5,[i])};return e.value=n,e.attached=tg(),e}function ng(n,t){if(re(t)){const e=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{e.call(n),n._stopped=!0},t.map(i=>s=>!s._stopped&&i&&i(s))}else return t}const uh=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,ig=(n,t,e,i,s,o)=>{const r=s==="svg";t==="class"?V0(n,i,r):t==="style"?Y0(n,e,i):Aa(t)?$c(t)||Z0(n,t,e,i,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):sg(n,t,i,r))?(ah(n,t,i),!n.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&rh(n,t,i,r,o,t!=="value")):n._isVueCE&&(/[A-Z]/.test(t)||!tn(i))?ah(n,Gn(t),i):(t==="true-value"?n._trueValue=i:t==="false-value"&&(n._falseValue=i),rh(n,t,i,r))};function sg(n,t,e,i){if(i)return!!(t==="innerHTML"||t==="textContent"||t in n&&uh(t)&&oe(e));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&n.tagName==="INPUT"||t==="type"&&n.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const s=n.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return uh(t)&&tn(e)?!1:t in n}const og=nn({patchProp:ig},H0);let hh;function rg(){return hh||(hh=u0(og))}const ag=(...n)=>{const t=rg().createApp(...n),{mount:e}=t;return t.mount=i=>{const s=cg(i);if(!s)return;const o=t._component;!oe(o)&&!o.render&&!o.template&&(o.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const r=e(s,!1,lg(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),r},t};function lg(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function cg(n){return tn(n)?document.querySelector(n):n}const ug={id:"app"},hg=Vn({__name:"App",setup(n){const t=Kt(!1);function e(i){i.clientY<100?t.value=!0:t.value=!1}return ai(()=>{window.addEventListener("mousemove",e)}),hu(()=>{window.removeEventListener("mousemove",e)}),(i,s)=>{const o=ku("router-link"),r=ku("router-view");return yi(),Mi("div",ug,[Dm(Xt("nav",null,[Ve(o,{to:"/3d-bear-arts/leather"},{default:hi(()=>s[0]||(s[0]=[di("Leather")])),_:1}),Ve(o,{to:"/3d-bear-arts/pop-art"},{default:hi(()=>s[1]||(s[1]=[di("Pop MouseMove")])),_:1}),Ve(o,{to:"/3d-bear-arts/pop-art-bear-3"},{default:hi(()=>s[2]||(s[2]=[di("Pop3")])),_:1}),Ve(o,{to:"/3d-bear-arts/machine"},{default:hi(()=>s[3]||(s[3]=[di("machine")])),_:1}),Ve(o,{to:"/3d-bear-arts/water"},{default:hi(()=>s[4]||(s[4]=[di("Water")])),_:1}),Ve(o,{to:"/3d-bear-arts/ghost-bear"},{default:hi(()=>s[5]||(s[5]=[di("ghost")])),_:1}),Ve(o,{to:"/3d-bear-arts/white-ghost-bear"},{default:hi(()=>s[6]||(s[6]=[di("white ghost")])),_:1}),Ve(o,{to:"/3d-bear-arts/"},{default:hi(()=>s[7]||(s[7]=[di("santa")])),_:1}),Ve(o,{to:"/3d-bear-arts/half"},{default:hi(()=>s[8]||(s[8]=[di("HalfTranparent")])),_:1})],512),[[W0,t.value]]),Ve(r)])}}}),wi=(n,t)=>{const e=n.__vccOpts||n;for(const[i,s]of t)e[i]=s;return e},dg=wi(hg,[["__scopeId","data-v-703cc388"]]);/*!
  * vue-router v4.4.5
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const no=typeof document<"u";function Nf(n){return typeof n=="object"||"displayName"in n||"props"in n||"__vccOpts"in n}function fg(n){return n.__esModule||n[Symbol.toStringTag]==="Module"||n.default&&Nf(n.default)}const be=Object.assign;function ol(n,t){const e={};for(const i in t){const s=t[i];e[i]=si(s)?s.map(n):n(s)}return e}const Jo=()=>{},si=Array.isArray,Ff=/#/g,pg=/&/g,mg=/\//g,gg=/=/g,_g=/\?/g,Of=/\+/g,vg=/%5B/g,xg=/%5D/g,Bf=/%5E/g,yg=/%60/g,zf=/%7B/g,Mg=/%7C/g,Gf=/%7D/g,wg=/%20/g;function mu(n){return encodeURI(""+n).replace(Mg,"|").replace(vg,"[").replace(xg,"]")}function Sg(n){return mu(n).replace(zf,"{").replace(Gf,"}").replace(Bf,"^")}function tc(n){return mu(n).replace(Of,"%2B").replace(wg,"+").replace(Ff,"%23").replace(pg,"%26").replace(yg,"`").replace(zf,"{").replace(Gf,"}").replace(Bf,"^")}function Eg(n){return tc(n).replace(gg,"%3D")}function bg(n){return mu(n).replace(Ff,"%23").replace(_g,"%3F")}function Tg(n){return n==null?"":bg(n).replace(mg,"%2F")}function ur(n){try{return decodeURIComponent(""+n)}catch{}return""+n}const Ag=/\/$/,Rg=n=>n.replace(Ag,"");function rl(n,t,e="/"){let i,s={},o="",r="";const a=t.indexOf("#");let l=t.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(i=t.slice(0,l),o=t.slice(l+1,a>-1?a:t.length),s=n(o)),a>-1&&(i=i||t.slice(0,a),r=t.slice(a,t.length)),i=Lg(i??t,e),{fullPath:i+(o&&"?")+o+r,path:i,query:s,hash:ur(r)}}function Pg(n,t){const e=t.query?n(t.query):"";return t.path+(e&&"?")+e+(t.hash||"")}function dh(n,t){return!t||!n.toLowerCase().startsWith(t.toLowerCase())?n:n.slice(t.length)||"/"}function Cg(n,t,e){const i=t.matched.length-1,s=e.matched.length-1;return i>-1&&i===s&&xo(t.matched[i],e.matched[s])&&Hf(t.params,e.params)&&n(t.query)===n(e.query)&&t.hash===e.hash}function xo(n,t){return(n.aliasOf||n)===(t.aliasOf||t)}function Hf(n,t){if(Object.keys(n).length!==Object.keys(t).length)return!1;for(const e in n)if(!Ig(n[e],t[e]))return!1;return!0}function Ig(n,t){return si(n)?fh(n,t):si(t)?fh(t,n):n===t}function fh(n,t){return si(t)?n.length===t.length&&n.every((e,i)=>e===t[i]):n.length===1&&n[0]===t}function Lg(n,t){if(n.startsWith("/"))return n;if(!n)return t;const e=t.split("/"),i=n.split("/"),s=i[i.length-1];(s===".."||s===".")&&i.push("");let o=e.length-1,r,a;for(r=0;r<i.length;r++)if(a=i[r],a!==".")if(a==="..")o>1&&o--;else break;return e.slice(0,o).join("/")+"/"+i.slice(r).join("/")}const ji={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var hr;(function(n){n.pop="pop",n.push="push"})(hr||(hr={}));var Qo;(function(n){n.back="back",n.forward="forward",n.unknown=""})(Qo||(Qo={}));function Dg(n){if(!n)if(no){const t=document.querySelector("base");n=t&&t.getAttribute("href")||"/",n=n.replace(/^\w+:\/\/[^\/]+/,"")}else n="/";return n[0]!=="/"&&n[0]!=="#"&&(n="/"+n),Rg(n)}const Ug=/^[^#]+#/;function Ng(n,t){return n.replace(Ug,"#")+t}function Fg(n,t){const e=document.documentElement.getBoundingClientRect(),i=n.getBoundingClientRect();return{behavior:t.behavior,left:i.left-e.left-(t.left||0),top:i.top-e.top-(t.top||0)}}const za=()=>({left:window.scrollX,top:window.scrollY});function Og(n){let t;if("el"in n){const e=n.el,i=typeof e=="string"&&e.startsWith("#"),s=typeof e=="string"?i?document.getElementById(e.slice(1)):document.querySelector(e):e;if(!s)return;t=Fg(s,n)}else t=n;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.scrollX,t.top!=null?t.top:window.scrollY)}function ph(n,t){return(history.state?history.state.position-t:-1)+n}const ec=new Map;function Bg(n,t){ec.set(n,t)}function zg(n){const t=ec.get(n);return ec.delete(n),t}let Gg=()=>location.protocol+"//"+location.host;function kf(n,t){const{pathname:e,search:i,hash:s}=t,o=n.indexOf("#");if(o>-1){let a=s.includes(n.slice(o))?n.slice(o).length:1,l=s.slice(a);return l[0]!=="/"&&(l="/"+l),dh(l,"")}return dh(e,n)+i+s}function Hg(n,t,e,i){let s=[],o=[],r=null;const a=({state:d})=>{const f=kf(n,location),_=e.value,x=t.value;let m=0;if(d){if(e.value=f,t.value=d,r&&r===_){r=null;return}m=x?d.position-x.position:0}else i(f);s.forEach(p=>{p(e.value,_,{delta:m,type:hr.pop,direction:m?m>0?Qo.forward:Qo.back:Qo.unknown})})};function l(){r=e.value}function c(d){s.push(d);const f=()=>{const _=s.indexOf(d);_>-1&&s.splice(_,1)};return o.push(f),f}function h(){const{history:d}=window;d.state&&d.replaceState(be({},d.state,{scroll:za()}),"")}function u(){for(const d of o)d();o=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",h)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",h,{passive:!0}),{pauseListeners:l,listen:c,destroy:u}}function mh(n,t,e,i=!1,s=!1){return{back:n,current:t,forward:e,replaced:i,position:window.history.length,scroll:s?za():null}}function kg(n){const{history:t,location:e}=window,i={value:kf(n,e)},s={value:t.state};s.value||o(i.value,{back:null,current:i.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function o(l,c,h){const u=n.indexOf("#"),d=u>-1?(e.host&&document.querySelector("base")?n:n.slice(u))+l:Gg()+n+l;try{t[h?"replaceState":"pushState"](c,"",d),s.value=c}catch(f){console.error(f),e[h?"replace":"assign"](d)}}function r(l,c){const h=be({},t.state,mh(s.value.back,l,s.value.forward,!0),c,{position:s.value.position});o(l,h,!0),i.value=l}function a(l,c){const h=be({},s.value,t.state,{forward:l,scroll:za()});o(h.current,h,!0);const u=be({},mh(i.value,l,null),{position:h.position+1},c);o(l,u,!1),i.value=l}return{location:i,state:s,push:a,replace:r}}function Vg(n){n=Dg(n);const t=kg(n),e=Hg(n,t.state,t.location,t.replace);function i(o,r=!0){r||e.pauseListeners(),history.go(o)}const s=be({location:"",base:n,go:i,createHref:Ng.bind(null,n)},t,e);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>t.state.value}),s}function Wg(n){return typeof n=="string"||n&&typeof n=="object"}function Vf(n){return typeof n=="string"||typeof n=="symbol"}const Wf=Symbol("");var gh;(function(n){n[n.aborted=4]="aborted",n[n.cancelled=8]="cancelled",n[n.duplicated=16]="duplicated"})(gh||(gh={}));function yo(n,t){return be(new Error,{type:n,[Wf]:!0},t)}function Ti(n,t){return n instanceof Error&&Wf in n&&(t==null||!!(n.type&t))}const _h="[^/]+?",Xg={sensitive:!1,strict:!1,start:!0,end:!0},qg=/[.+*?^${}()[\]/\\]/g;function Yg(n,t){const e=be({},Xg,t),i=[];let s=e.start?"^":"";const o=[];for(const c of n){const h=c.length?[]:[90];e.strict&&!c.length&&(s+="/");for(let u=0;u<c.length;u++){const d=c[u];let f=40+(e.sensitive?.25:0);if(d.type===0)u||(s+="/"),s+=d.value.replace(qg,"\\$&"),f+=40;else if(d.type===1){const{value:_,repeatable:x,optional:m,regexp:p}=d;o.push({name:_,repeatable:x,optional:m});const b=p||_h;if(b!==_h){f+=10;try{new RegExp(`(${b})`)}catch(S){throw new Error(`Invalid custom RegExp for param "${_}" (${b}): `+S.message)}}let M=x?`((?:${b})(?:/(?:${b}))*)`:`(${b})`;u||(M=m&&c.length<2?`(?:/${M})`:"/"+M),m&&(M+="?"),s+=M,f+=20,m&&(f+=-8),x&&(f+=-20),b===".*"&&(f+=-50)}h.push(f)}i.push(h)}if(e.strict&&e.end){const c=i.length-1;i[c][i[c].length-1]+=.7000000000000001}e.strict||(s+="/?"),e.end?s+="$":e.strict&&(s+="(?:/|$)");const r=new RegExp(s,e.sensitive?"":"i");function a(c){const h=c.match(r),u={};if(!h)return null;for(let d=1;d<h.length;d++){const f=h[d]||"",_=o[d-1];u[_.name]=f&&_.repeatable?f.split("/"):f}return u}function l(c){let h="",u=!1;for(const d of n){(!u||!h.endsWith("/"))&&(h+="/"),u=!1;for(const f of d)if(f.type===0)h+=f.value;else if(f.type===1){const{value:_,repeatable:x,optional:m}=f,p=_ in c?c[_]:"";if(si(p)&&!x)throw new Error(`Provided param "${_}" is an array but it is not repeatable (* or + modifiers)`);const b=si(p)?p.join("/"):p;if(!b)if(m)d.length<2&&(h.endsWith("/")?h=h.slice(0,-1):u=!0);else throw new Error(`Missing required param "${_}"`);h+=b}}return h||"/"}return{re:r,score:i,keys:o,parse:a,stringify:l}}function $g(n,t){let e=0;for(;e<n.length&&e<t.length;){const i=t[e]-n[e];if(i)return i;e++}return n.length<t.length?n.length===1&&n[0]===80?-1:1:n.length>t.length?t.length===1&&t[0]===80?1:-1:0}function Xf(n,t){let e=0;const i=n.score,s=t.score;for(;e<i.length&&e<s.length;){const o=$g(i[e],s[e]);if(o)return o;e++}if(Math.abs(s.length-i.length)===1){if(vh(i))return 1;if(vh(s))return-1}return s.length-i.length}function vh(n){const t=n[n.length-1];return n.length>0&&t[t.length-1]<0}const jg={type:0,value:""},Kg=/[a-zA-Z0-9_]/;function Zg(n){if(!n)return[[]];if(n==="/")return[[jg]];if(!n.startsWith("/"))throw new Error(`Invalid path "${n}"`);function t(f){throw new Error(`ERR (${e})/"${c}": ${f}`)}let e=0,i=e;const s=[];let o;function r(){o&&s.push(o),o=[]}let a=0,l,c="",h="";function u(){c&&(e===0?o.push({type:0,value:c}):e===1||e===2||e===3?(o.length>1&&(l==="*"||l==="+")&&t(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),o.push({type:1,value:c,regexp:h,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):t("Invalid state to consume buffer"),c="")}function d(){c+=l}for(;a<n.length;){if(l=n[a++],l==="\\"&&e!==2){i=e,e=4;continue}switch(e){case 0:l==="/"?(c&&u(),r()):l===":"?(u(),e=1):d();break;case 4:d(),e=i;break;case 1:l==="("?e=2:Kg.test(l)?d():(u(),e=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?h[h.length-1]=="\\"?h=h.slice(0,-1)+l:e=3:h+=l;break;case 3:u(),e=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,h="";break;default:t("Unknown state");break}}return e===2&&t(`Unfinished custom RegExp for param "${c}"`),u(),r(),s}function Jg(n,t,e){const i=Yg(Zg(n.path),e),s=be(i,{record:n,parent:t,children:[],alias:[]});return t&&!s.record.aliasOf==!t.record.aliasOf&&t.children.push(s),s}function Qg(n,t){const e=[],i=new Map;t=wh({strict:!1,end:!0,sensitive:!1},t);function s(u){return i.get(u)}function o(u,d,f){const _=!f,x=yh(u);x.aliasOf=f&&f.record;const m=wh(t,u),p=[x];if("alias"in u){const S=typeof u.alias=="string"?[u.alias]:u.alias;for(const O of S)p.push(yh(be({},x,{components:f?f.record.components:x.components,path:O,aliasOf:f?f.record:x})))}let b,M;for(const S of p){const{path:O}=S;if(d&&O[0]!=="/"){const I=d.record.path,P=I[I.length-1]==="/"?"":"/";S.path=d.record.path+(O&&P+O)}if(b=Jg(S,d,m),f?f.alias.push(b):(M=M||b,M!==b&&M.alias.push(b),_&&u.name&&!Mh(b)&&r(u.name)),qf(b)&&l(b),x.children){const I=x.children;for(let P=0;P<I.length;P++)o(I[P],b,f&&f.children[P])}f=f||b}return M?()=>{r(M)}:Jo}function r(u){if(Vf(u)){const d=i.get(u);d&&(i.delete(u),e.splice(e.indexOf(d),1),d.children.forEach(r),d.alias.forEach(r))}else{const d=e.indexOf(u);d>-1&&(e.splice(d,1),u.record.name&&i.delete(u.record.name),u.children.forEach(r),u.alias.forEach(r))}}function a(){return e}function l(u){const d=n_(u,e);e.splice(d,0,u),u.record.name&&!Mh(u)&&i.set(u.record.name,u)}function c(u,d){let f,_={},x,m;if("name"in u&&u.name){if(f=i.get(u.name),!f)throw yo(1,{location:u});m=f.record.name,_=be(xh(d.params,f.keys.filter(M=>!M.optional).concat(f.parent?f.parent.keys.filter(M=>M.optional):[]).map(M=>M.name)),u.params&&xh(u.params,f.keys.map(M=>M.name))),x=f.stringify(_)}else if(u.path!=null)x=u.path,f=e.find(M=>M.re.test(x)),f&&(_=f.parse(x),m=f.record.name);else{if(f=d.name?i.get(d.name):e.find(M=>M.re.test(d.path)),!f)throw yo(1,{location:u,currentLocation:d});m=f.record.name,_=be({},d.params,u.params),x=f.stringify(_)}const p=[];let b=f;for(;b;)p.unshift(b.record),b=b.parent;return{name:m,path:x,params:_,matched:p,meta:e_(p)}}n.forEach(u=>o(u));function h(){e.length=0,i.clear()}return{addRoute:o,resolve:c,removeRoute:r,clearRoutes:h,getRoutes:a,getRecordMatcher:s}}function xh(n,t){const e={};for(const i of t)i in n&&(e[i]=n[i]);return e}function yh(n){const t={path:n.path,redirect:n.redirect,name:n.name,meta:n.meta||{},aliasOf:n.aliasOf,beforeEnter:n.beforeEnter,props:t_(n),children:n.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in n?n.components||null:n.component&&{default:n.component}};return Object.defineProperty(t,"mods",{value:{}}),t}function t_(n){const t={},e=n.props||!1;if("component"in n)t.default=e;else for(const i in n.components)t[i]=typeof e=="object"?e[i]:e;return t}function Mh(n){for(;n;){if(n.record.aliasOf)return!0;n=n.parent}return!1}function e_(n){return n.reduce((t,e)=>be(t,e.meta),{})}function wh(n,t){const e={};for(const i in n)e[i]=i in t?t[i]:n[i];return e}function n_(n,t){let e=0,i=t.length;for(;e!==i;){const o=e+i>>1;Xf(n,t[o])<0?i=o:e=o+1}const s=i_(n);return s&&(i=t.lastIndexOf(s,i-1)),i}function i_(n){let t=n;for(;t=t.parent;)if(qf(t)&&Xf(n,t)===0)return t}function qf({record:n}){return!!(n.name||n.components&&Object.keys(n.components).length||n.redirect)}function s_(n){const t={};if(n===""||n==="?")return t;const i=(n[0]==="?"?n.slice(1):n).split("&");for(let s=0;s<i.length;++s){const o=i[s].replace(Of," "),r=o.indexOf("="),a=ur(r<0?o:o.slice(0,r)),l=r<0?null:ur(o.slice(r+1));if(a in t){let c=t[a];si(c)||(c=t[a]=[c]),c.push(l)}else t[a]=l}return t}function Sh(n){let t="";for(let e in n){const i=n[e];if(e=Eg(e),i==null){i!==void 0&&(t+=(t.length?"&":"")+e);continue}(si(i)?i.map(o=>o&&tc(o)):[i&&tc(i)]).forEach(o=>{o!==void 0&&(t+=(t.length?"&":"")+e,o!=null&&(t+="="+o))})}return t}function o_(n){const t={};for(const e in n){const i=n[e];i!==void 0&&(t[e]=si(i)?i.map(s=>s==null?null:""+s):i==null?i:""+i)}return t}const r_=Symbol(""),Eh=Symbol(""),gu=Symbol(""),Yf=Symbol(""),nc=Symbol("");function Fo(){let n=[];function t(i){return n.push(i),()=>{const s=n.indexOf(i);s>-1&&n.splice(s,1)}}function e(){n=[]}return{add:t,list:()=>n.slice(),reset:e}}function ss(n,t,e,i,s,o=r=>r()){const r=i&&(i.enterCallbacks[s]=i.enterCallbacks[s]||[]);return()=>new Promise((a,l)=>{const c=d=>{d===!1?l(yo(4,{from:e,to:t})):d instanceof Error?l(d):Wg(d)?l(yo(2,{from:t,to:d})):(r&&i.enterCallbacks[s]===r&&typeof d=="function"&&r.push(d),a())},h=o(()=>n.call(i&&i.instances[s],t,e,c));let u=Promise.resolve(h);n.length<3&&(u=u.then(c)),u.catch(d=>l(d))})}function al(n,t,e,i,s=o=>o()){const o=[];for(const r of n)for(const a in r.components){let l=r.components[a];if(!(t!=="beforeRouteEnter"&&!r.instances[a]))if(Nf(l)){const h=(l.__vccOpts||l)[t];h&&o.push(ss(h,e,i,r,a,s))}else{let c=l();o.push(()=>c.then(h=>{if(!h)throw new Error(`Couldn't resolve component "${a}" at "${r.path}"`);const u=fg(h)?h.default:h;r.mods[a]=h,r.components[a]=u;const f=(u.__vccOpts||u)[t];return f&&ss(f,e,i,r,a,s)()}))}}return o}function bh(n){const t=zi(gu),e=zi(Yf),i=Zn(()=>{const l=co(n.to);return t.resolve(l)}),s=Zn(()=>{const{matched:l}=i.value,{length:c}=l,h=l[c-1],u=e.matched;if(!h||!u.length)return-1;const d=u.findIndex(xo.bind(null,h));if(d>-1)return d;const f=Th(l[c-2]);return c>1&&Th(h)===f&&u[u.length-1].path!==f?u.findIndex(xo.bind(null,l[c-2])):d}),o=Zn(()=>s.value>-1&&u_(e.params,i.value.params)),r=Zn(()=>s.value>-1&&s.value===e.matched.length-1&&Hf(e.params,i.value.params));function a(l={}){return c_(l)?t[co(n.replace)?"replace":"push"](co(n.to)).catch(Jo):Promise.resolve()}return{route:i,href:Zn(()=>i.value.href),isActive:o,isExactActive:r,navigate:a}}const a_=Vn({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:bh,setup(n,{slots:t}){const e=La(bh(n)),{options:i}=zi(gu),s=Zn(()=>({[Ah(n.activeClass,i.linkActiveClass,"router-link-active")]:e.isActive,[Ah(n.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:e.isExactActive}));return()=>{const o=t.default&&t.default(e);return n.custom?o:Lf("a",{"aria-current":e.isExactActive?n.ariaCurrentValue:null,href:e.href,onClick:e.navigate,class:s.value},o)}}}),l_=a_;function c_(n){if(!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)&&!n.defaultPrevented&&!(n.button!==void 0&&n.button!==0)){if(n.currentTarget&&n.currentTarget.getAttribute){const t=n.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return n.preventDefault&&n.preventDefault(),!0}}function u_(n,t){for(const e in t){const i=t[e],s=n[e];if(typeof i=="string"){if(i!==s)return!1}else if(!si(s)||s.length!==i.length||i.some((o,r)=>o!==s[r]))return!1}return!0}function Th(n){return n?n.aliasOf?n.aliasOf.path:n.path:""}const Ah=(n,t,e)=>n??t??e,h_=Vn({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(n,{attrs:t,slots:e}){const i=zi(nc),s=Zn(()=>n.route||i.value),o=zi(Eh,0),r=Zn(()=>{let c=co(o);const{matched:h}=s.value;let u;for(;(u=h[c])&&!u.components;)c++;return c}),a=Zn(()=>s.value.matched[r.value]);oa(Eh,Zn(()=>r.value+1)),oa(r_,a),oa(nc,s);const l=Kt();return ke(()=>[l.value,a.value,n.name],([c,h,u],[d,f,_])=>{h&&(h.instances[u]=c,f&&f!==h&&c&&c===d&&(h.leaveGuards.size||(h.leaveGuards=f.leaveGuards),h.updateGuards.size||(h.updateGuards=f.updateGuards))),c&&h&&(!f||!xo(h,f)||!d)&&(h.enterCallbacks[u]||[]).forEach(x=>x(c))},{flush:"post"}),()=>{const c=s.value,h=n.name,u=a.value,d=u&&u.components[h];if(!d)return Rh(e.default,{Component:d,route:c});const f=u.props[h],_=f?f===!0?c.params:typeof f=="function"?f(c):f:null,m=Lf(d,be({},_,t,{onVnodeUnmounted:p=>{p.component.isUnmounted&&(u.instances[h]=null)},ref:l}));return Rh(e.default,{Component:m,route:c})||m}}});function Rh(n,t){if(!n)return null;const e=n(t);return e.length===1?e[0]:e}const d_=h_;function f_(n){const t=Qg(n.routes,n),e=n.parseQuery||s_,i=n.stringifyQuery||Sh,s=n.history,o=Fo(),r=Fo(),a=Fo(),l=$o(ji);let c=ji;no&&n.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const h=ol.bind(null,B=>""+B),u=ol.bind(null,Tg),d=ol.bind(null,ur);function f(B,lt){let ot,ht;return Vf(B)?(ot=t.getRecordMatcher(B),ht=lt):ht=B,t.addRoute(ht,ot)}function _(B){const lt=t.getRecordMatcher(B);lt&&t.removeRoute(lt)}function x(){return t.getRoutes().map(B=>B.record)}function m(B){return!!t.getRecordMatcher(B)}function p(B,lt){if(lt=be({},lt||l.value),typeof B=="string"){const T=rl(e,B,lt.path),L=t.resolve({path:T.path},lt),N=s.createHref(T.fullPath);return be(T,L,{params:d(L.params),hash:ur(T.hash),redirectedFrom:void 0,href:N})}let ot;if(B.path!=null)ot=be({},B,{path:rl(e,B.path,lt.path).path});else{const T=be({},B.params);for(const L in T)T[L]==null&&delete T[L];ot=be({},B,{params:u(T)}),lt.params=u(lt.params)}const ht=t.resolve(ot,lt),wt=B.hash||"";ht.params=h(d(ht.params));const it=Pg(i,be({},B,{hash:Sg(wt),path:ht.path})),g=s.createHref(it);return be({fullPath:it,hash:wt,query:i===Sh?o_(B.query):B.query||{}},ht,{redirectedFrom:void 0,href:g})}function b(B){return typeof B=="string"?rl(e,B,l.value.path):be({},B)}function M(B,lt){if(c!==B)return yo(8,{from:lt,to:B})}function S(B){return P(B)}function O(B){return S(be(b(B),{replace:!0}))}function I(B){const lt=B.matched[B.matched.length-1];if(lt&&lt.redirect){const{redirect:ot}=lt;let ht=typeof ot=="function"?ot(B):ot;return typeof ht=="string"&&(ht=ht.includes("?")||ht.includes("#")?ht=b(ht):{path:ht},ht.params={}),be({query:B.query,hash:B.hash,params:ht.path!=null?{}:B.params},ht)}}function P(B,lt){const ot=c=p(B),ht=l.value,wt=B.state,it=B.force,g=B.replace===!0,T=I(ot);if(T)return P(be(b(T),{state:typeof T=="object"?be({},wt,T.state):wt,force:it,replace:g}),lt||ot);const L=ot;L.redirectedFrom=lt;let N;return!it&&Cg(i,ht,ot)&&(N=yo(16,{to:L,from:ht}),Mt(ht,ht,!0,!1)),(N?Promise.resolve(N):y(L,ht)).catch(U=>Ti(U)?Ti(U,2)?U:mt(U):$(U,L,ht)).then(U=>{if(U){if(Ti(U,2))return P(be({replace:g},b(U.to),{state:typeof U.to=="object"?be({},wt,U.to.state):wt,force:it}),lt||L)}else U=G(L,ht,!0,g,wt);return E(L,ht,U),U})}function F(B,lt){const ot=M(B,lt);return ot?Promise.reject(ot):Promise.resolve()}function et(B){const lt=rt.values().next().value;return lt&&typeof lt.runWithContext=="function"?lt.runWithContext(B):B()}function y(B,lt){let ot;const[ht,wt,it]=p_(B,lt);ot=al(ht.reverse(),"beforeRouteLeave",B,lt);for(const T of ht)T.leaveGuards.forEach(L=>{ot.push(ss(L,B,lt))});const g=F.bind(null,B,lt);return ot.push(g),xt(ot).then(()=>{ot=[];for(const T of o.list())ot.push(ss(T,B,lt));return ot.push(g),xt(ot)}).then(()=>{ot=al(wt,"beforeRouteUpdate",B,lt);for(const T of wt)T.updateGuards.forEach(L=>{ot.push(ss(L,B,lt))});return ot.push(g),xt(ot)}).then(()=>{ot=[];for(const T of it)if(T.beforeEnter)if(si(T.beforeEnter))for(const L of T.beforeEnter)ot.push(ss(L,B,lt));else ot.push(ss(T.beforeEnter,B,lt));return ot.push(g),xt(ot)}).then(()=>(B.matched.forEach(T=>T.enterCallbacks={}),ot=al(it,"beforeRouteEnter",B,lt,et),ot.push(g),xt(ot))).then(()=>{ot=[];for(const T of r.list())ot.push(ss(T,B,lt));return ot.push(g),xt(ot)}).catch(T=>Ti(T,8)?T:Promise.reject(T))}function E(B,lt,ot){a.list().forEach(ht=>et(()=>ht(B,lt,ot)))}function G(B,lt,ot,ht,wt){const it=M(B,lt);if(it)return it;const g=lt===ji,T=no?history.state:{};ot&&(ht||g?s.replace(B.fullPath,be({scroll:g&&T&&T.scroll},wt)):s.push(B.fullPath,wt)),l.value=B,Mt(B,lt,ot,g),mt()}let W;function Q(){W||(W=s.listen((B,lt,ot)=>{if(!ft.listening)return;const ht=p(B),wt=I(ht);if(wt){P(be(wt,{replace:!0}),ht).catch(Jo);return}c=ht;const it=l.value;no&&Bg(ph(it.fullPath,ot.delta),za()),y(ht,it).catch(g=>Ti(g,12)?g:Ti(g,2)?(P(g.to,ht).then(T=>{Ti(T,20)&&!ot.delta&&ot.type===hr.pop&&s.go(-1,!1)}).catch(Jo),Promise.reject()):(ot.delta&&s.go(-ot.delta,!1),$(g,ht,it))).then(g=>{g=g||G(ht,it,!1),g&&(ot.delta&&!Ti(g,8)?s.go(-ot.delta,!1):ot.type===hr.pop&&Ti(g,20)&&s.go(-1,!1)),E(ht,it,g)}).catch(Jo)}))}let at=Fo(),X=Fo(),nt;function $(B,lt,ot){mt(B);const ht=X.list();return ht.length?ht.forEach(wt=>wt(B,lt,ot)):console.error(B),Promise.reject(B)}function gt(){return nt&&l.value!==ji?Promise.resolve():new Promise((B,lt)=>{at.add([B,lt])})}function mt(B){return nt||(nt=!B,Q(),at.list().forEach(([lt,ot])=>B?ot(B):lt()),at.reset()),B}function Mt(B,lt,ot,ht){const{scrollBehavior:wt}=n;if(!no||!wt)return Promise.resolve();const it=!ot&&zg(ph(B.fullPath,0))||(ht||!ot)&&history.state&&history.state.scroll||null;return sf().then(()=>wt(B,lt,it)).then(g=>g&&Og(g)).catch(g=>$(g,B,lt))}const It=B=>s.go(B);let zt;const rt=new Set,ft={currentRoute:l,listening:!0,addRoute:f,removeRoute:_,clearRoutes:t.clearRoutes,hasRoute:m,getRoutes:x,resolve:p,options:n,push:S,replace:O,go:It,back:()=>It(-1),forward:()=>It(1),beforeEach:o.add,beforeResolve:r.add,afterEach:a.add,onError:X.add,isReady:gt,install(B){const lt=this;B.component("RouterLink",l_),B.component("RouterView",d_),B.config.globalProperties.$router=lt,Object.defineProperty(B.config.globalProperties,"$route",{enumerable:!0,get:()=>co(l)}),no&&!zt&&l.value===ji&&(zt=!0,S(s.location).catch(wt=>{}));const ot={};for(const wt in ji)Object.defineProperty(ot,wt,{get:()=>l.value[wt],enumerable:!0});B.provide(gu,lt),B.provide(Yf,Jd(ot)),B.provide(nc,l);const ht=B.unmount;rt.add(B),B.unmount=function(){rt.delete(B),rt.size<1&&(c=ji,W&&W(),W=null,l.value=ji,zt=!1,nt=!1),ht()}}};function xt(B){return B.reduce((lt,ot)=>lt.then(()=>et(ot)),Promise.resolve())}return ft}function p_(n,t){const e=[],i=[],s=[],o=Math.max(t.matched.length,n.matched.length);for(let r=0;r<o;r++){const a=t.matched[r];a&&(n.matched.find(c=>xo(c,a))?i.push(a):e.push(a));const l=n.matched[r];l&&(t.matched.find(c=>xo(c,l))||s.push(l))}return[e,i,s]}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const _u="169",m_=0,Ph=1,g_=2,$f=1,__=2,Di=3,cs=0,yn=1,ge=2,rs=0,fo=1,Ch=2,Ih=3,Lh=4,v_=5,bs=100,x_=101,y_=102,M_=103,w_=104,S_=200,E_=201,b_=202,T_=203,ic=204,sc=205,A_=206,R_=207,P_=208,C_=209,I_=210,L_=211,D_=212,U_=213,N_=214,oc=0,rc=1,ac=2,Mo=3,lc=4,cc=5,uc=6,hc=7,jf=0,F_=1,O_=2,as=0,B_=1,z_=2,G_=3,Kf=4,H_=5,k_=6,V_=7,Zf=300,wo=301,So=302,Ma=303,dc=304,Ga=306,We=1e3,As=1001,fc=1002,Bn=1003,W_=1004,Cr=1005,Jn=1006,ll=1007,Rs=1008,Gi=1009,Jf=1010,Qf=1011,dr=1012,vu=1013,Is=1014,Fi=1015,yr=1016,xu=1017,yu=1018,Eo=1020,tp=35902,ep=1021,np=1022,ti=1023,ip=1024,sp=1025,po=1026,bo=1027,op=1028,Mu=1029,rp=1030,wu=1031,Su=1033,la=33776,ca=33777,ua=33778,ha=33779,pc=35840,mc=35841,gc=35842,_c=35843,vc=36196,xc=37492,yc=37496,Mc=37808,wc=37809,Sc=37810,Ec=37811,bc=37812,Tc=37813,Ac=37814,Rc=37815,Pc=37816,Cc=37817,Ic=37818,Lc=37819,Dc=37820,Uc=37821,da=36492,Nc=36494,Fc=36495,ap=36283,Oc=36284,Bc=36285,zc=36286,X_=3200,q_=3201,lp=0,Y_=1,os="",Kn="srgb",ds="srgb-linear",Eu="display-p3",Ha="display-p3-linear",wa="linear",Ue="srgb",Sa="rec709",Ea="p3",Hs=7680,Dh=519,$_=512,j_=513,K_=514,cp=515,Z_=516,J_=517,Q_=518,tv=519,Uh=35044,Nh="300 es",Oi=2e3,ba=2001;class Ro{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const o=s.indexOf(e);o!==-1&&s.splice(o,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const s=i.slice(0);for(let o=0,r=s.length;o<r;o++)s[o].call(this,t);t.target=null}}}const on=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Fh=1234567;const tr=Math.PI/180,fr=180/Math.PI;function Ns(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(on[n&255]+on[n>>8&255]+on[n>>16&255]+on[n>>24&255]+"-"+on[t&255]+on[t>>8&255]+"-"+on[t>>16&15|64]+on[t>>24&255]+"-"+on[e&63|128]+on[e>>8&255]+"-"+on[e>>16&255]+on[e>>24&255]+on[i&255]+on[i>>8&255]+on[i>>16&255]+on[i>>24&255]).toLowerCase()}function Qe(n,t,e){return Math.max(t,Math.min(e,n))}function bu(n,t){return(n%t+t)%t}function ev(n,t,e,i,s){return i+(n-t)*(s-i)/(e-t)}function nv(n,t,e){return n!==t?(e-n)/(t-n):0}function er(n,t,e){return(1-e)*n+e*t}function iv(n,t,e,i){return er(n,t,1-Math.exp(-e*i))}function sv(n,t=1){return t-Math.abs(bu(n,t*2)-t)}function ov(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function rv(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function av(n,t){return n+Math.floor(Math.random()*(t-n+1))}function lv(n,t){return n+Math.random()*(t-n)}function cv(n){return n*(.5-Math.random())}function uv(n){n!==void 0&&(Fh=n);let t=Fh+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function hv(n){return n*tr}function dv(n){return n*fr}function fv(n){return(n&n-1)===0&&n!==0}function pv(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function mv(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function gv(n,t,e,i,s){const o=Math.cos,r=Math.sin,a=o(e/2),l=r(e/2),c=o((t+i)/2),h=r((t+i)/2),u=o((t-i)/2),d=r((t-i)/2),f=o((i-t)/2),_=r((i-t)/2);switch(s){case"XYX":n.set(a*h,l*u,l*d,a*c);break;case"YZY":n.set(l*d,a*h,l*u,a*c);break;case"ZXZ":n.set(l*u,l*d,a*h,a*c);break;case"XZX":n.set(a*h,l*_,l*f,a*c);break;case"YXY":n.set(l*f,a*h,l*_,a*c);break;case"ZYZ":n.set(l*_,l*f,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function io(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function dn(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const se={DEG2RAD:tr,RAD2DEG:fr,generateUUID:Ns,clamp:Qe,euclideanModulo:bu,mapLinear:ev,inverseLerp:nv,lerp:er,damp:iv,pingpong:sv,smoothstep:ov,smootherstep:rv,randInt:av,randFloat:lv,randFloatSpread:cv,seededRandom:uv,degToRad:hv,radToDeg:dv,isPowerOfTwo:fv,ceilPowerOfTwo:pv,floorPowerOfTwo:mv,setQuaternionFromProperEuler:gv,normalize:dn,denormalize:io};class Bt{constructor(t=0,e=0){Bt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Qe(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),s=Math.sin(e),o=this.x-t.x,r=this.y-t.y;return this.x=o*i-r*s+t.x,this.y=o*s+r*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class le{constructor(t,e,i,s,o,r,a,l,c){le.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,o,r,a,l,c)}set(t,e,i,s,o,r,a,l,c){const h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=o,h[5]=l,h[6]=i,h[7]=r,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,o=this.elements,r=i[0],a=i[3],l=i[6],c=i[1],h=i[4],u=i[7],d=i[2],f=i[5],_=i[8],x=s[0],m=s[3],p=s[6],b=s[1],M=s[4],S=s[7],O=s[2],I=s[5],P=s[8];return o[0]=r*x+a*b+l*O,o[3]=r*m+a*M+l*I,o[6]=r*p+a*S+l*P,o[1]=c*x+h*b+u*O,o[4]=c*m+h*M+u*I,o[7]=c*p+h*S+u*P,o[2]=d*x+f*b+_*O,o[5]=d*m+f*M+_*I,o[8]=d*p+f*S+_*P,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],s=t[2],o=t[3],r=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*r*h-e*a*c-i*o*h+i*a*l+s*o*c-s*r*l}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],o=t[3],r=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*r-a*c,d=a*l-h*o,f=c*o-r*l,_=e*u+i*d+s*f;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/_;return t[0]=u*x,t[1]=(s*c-h*i)*x,t[2]=(a*i-s*r)*x,t[3]=d*x,t[4]=(h*e-s*l)*x,t[5]=(s*o-a*e)*x,t[6]=f*x,t[7]=(i*l-c*e)*x,t[8]=(r*e-i*o)*x,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,o,r,a){const l=Math.cos(o),c=Math.sin(o);return this.set(i*l,i*c,-i*(l*r+c*a)+r+t,-s*c,s*l,-s*(-c*r+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(cl.makeScale(t,e)),this}rotate(t){return this.premultiply(cl.makeRotation(-t)),this}translate(t,e){return this.premultiply(cl.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const cl=new le;function up(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function pr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function _v(){const n=pr("canvas");return n.style.display="block",n}const Oh={};function fa(n){n in Oh||(Oh[n]=!0,console.warn(n))}function vv(n,t,e){return new Promise(function(i,s){function o(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(o,e);break;default:i()}}setTimeout(o,e)})}function xv(n){const t=n.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function yv(n){const t=n.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Bh=new le().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),zh=new le().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Oo={[ds]:{transfer:wa,primaries:Sa,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n,fromReference:n=>n},[Kn]:{transfer:Ue,primaries:Sa,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[Ha]:{transfer:wa,primaries:Ea,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.applyMatrix3(zh),fromReference:n=>n.applyMatrix3(Bh)},[Eu]:{transfer:Ue,primaries:Ea,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.convertSRGBToLinear().applyMatrix3(zh),fromReference:n=>n.applyMatrix3(Bh).convertLinearToSRGB()}},Mv=new Set([ds,Ha]),we={enabled:!0,_workingColorSpace:ds,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!Mv.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,t,e){if(this.enabled===!1||t===e||!t||!e)return n;const i=Oo[t].toReference,s=Oo[e].fromReference;return s(i(n))},fromWorkingColorSpace:function(n,t){return this.convert(n,this._workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this._workingColorSpace)},getPrimaries:function(n){return Oo[n].primaries},getTransfer:function(n){return n===os?wa:Oo[n].transfer},getLuminanceCoefficients:function(n,t=this._workingColorSpace){return n.fromArray(Oo[t].luminanceCoefficients)}};function mo(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function ul(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let ks;class wv{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{ks===void 0&&(ks=pr("canvas")),ks.width=t.width,ks.height=t.height;const i=ks.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=ks}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=pr("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const s=i.getImageData(0,0,t.width,t.height),o=s.data;for(let r=0;r<o.length;r++)o[r]=mo(o[r]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(mo(e[i]/255)*255):e[i]=mo(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Sv=0;class hp{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Sv++}),this.uuid=Ns(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let o;if(Array.isArray(s)){o=[];for(let r=0,a=s.length;r<a;r++)s[r].isDataTexture?o.push(hl(s[r].image)):o.push(hl(s[r]))}else o=hl(s);i.url=o}return e||(t.images[this.uuid]=i),i}}function hl(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?wv.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Ev=0;class _n extends Ro{constructor(t=_n.DEFAULT_IMAGE,e=_n.DEFAULT_MAPPING,i=As,s=As,o=Jn,r=Rs,a=ti,l=Gi,c=_n.DEFAULT_ANISOTROPY,h=os){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ev++}),this.uuid=Ns(),this.name="",this.source=new hp(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=o,this.minFilter=r,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Bt(0,0),this.repeat=new Bt(1,1),this.center=new Bt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new le,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Zf)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case We:t.x=t.x-Math.floor(t.x);break;case As:t.x=t.x<0?0:1;break;case fc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case We:t.y=t.y-Math.floor(t.y);break;case As:t.y=t.y<0?0:1;break;case fc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}_n.DEFAULT_IMAGE=null;_n.DEFAULT_MAPPING=Zf;_n.DEFAULT_ANISOTROPY=1;class Pe{constructor(t=0,e=0,i=0,s=1){Pe.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,o=this.w,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s+r[12]*o,this.y=r[1]*e+r[5]*i+r[9]*s+r[13]*o,this.z=r[2]*e+r[6]*i+r[10]*s+r[14]*o,this.w=r[3]*e+r[7]*i+r[11]*s+r[15]*o,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,o;const l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],_=l[9],x=l[2],m=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-x)<.01&&Math.abs(_-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+x)<.1&&Math.abs(_+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const M=(c+1)/2,S=(f+1)/2,O=(p+1)/2,I=(h+d)/4,P=(u+x)/4,F=(_+m)/4;return M>S&&M>O?M<.01?(i=0,s=.707106781,o=.707106781):(i=Math.sqrt(M),s=I/i,o=P/i):S>O?S<.01?(i=.707106781,s=0,o=.707106781):(s=Math.sqrt(S),i=I/s,o=F/s):O<.01?(i=.707106781,s=.707106781,o=0):(o=Math.sqrt(O),i=P/o,s=F/o),this.set(i,s,o,e),this}let b=Math.sqrt((m-_)*(m-_)+(u-x)*(u-x)+(d-h)*(d-h));return Math.abs(b)<.001&&(b=1),this.x=(m-_)/b,this.y=(u-x)/b,this.z=(d-h)/b,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class bv extends Ro{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Pe(0,0,t,e),this.scissorTest=!1,this.viewport=new Pe(0,0,t,e);const s={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Jn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const o=new _n(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);o.flipY=!1,o.generateMipmaps=i.generateMipmaps,o.internalFormat=i.internalFormat,this.textures=[];const r=i.count;for(let a=0;a<r;a++)this.textures[a]=o.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,o=this.textures.length;s<o;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new hp(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ls extends bv{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class dp extends _n{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Bn,this.minFilter=Bn,this.wrapR=As,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Tv extends _n{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Bn,this.minFilter=Bn,this.wrapR=As,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Mr{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,o,r,a){let l=i[s+0],c=i[s+1],h=i[s+2],u=i[s+3];const d=o[r+0],f=o[r+1],_=o[r+2],x=o[r+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=f,t[e+2]=_,t[e+3]=x;return}if(u!==x||l!==d||c!==f||h!==_){let m=1-a;const p=l*d+c*f+h*_+u*x,b=p>=0?1:-1,M=1-p*p;if(M>Number.EPSILON){const O=Math.sqrt(M),I=Math.atan2(O,p*b);m=Math.sin(m*I)/O,a=Math.sin(a*I)/O}const S=a*b;if(l=l*m+d*S,c=c*m+f*S,h=h*m+_*S,u=u*m+x*S,m===1-a){const O=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=O,c*=O,h*=O,u*=O}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,i,s,o,r){const a=i[s],l=i[s+1],c=i[s+2],h=i[s+3],u=o[r],d=o[r+1],f=o[r+2],_=o[r+3];return t[e]=a*_+h*u+l*f-c*d,t[e+1]=l*_+h*d+c*u-a*f,t[e+2]=c*_+h*f+a*d-l*u,t[e+3]=h*_-a*u-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,s=t._y,o=t._z,r=t._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(s/2),u=a(o/2),d=l(i/2),f=l(s/2),_=l(o/2);switch(r){case"XYZ":this._x=d*h*u+c*f*_,this._y=c*f*u-d*h*_,this._z=c*h*_+d*f*u,this._w=c*h*u-d*f*_;break;case"YXZ":this._x=d*h*u+c*f*_,this._y=c*f*u-d*h*_,this._z=c*h*_-d*f*u,this._w=c*h*u+d*f*_;break;case"ZXY":this._x=d*h*u-c*f*_,this._y=c*f*u+d*h*_,this._z=c*h*_+d*f*u,this._w=c*h*u-d*f*_;break;case"ZYX":this._x=d*h*u-c*f*_,this._y=c*f*u+d*h*_,this._z=c*h*_-d*f*u,this._w=c*h*u+d*f*_;break;case"YZX":this._x=d*h*u+c*f*_,this._y=c*f*u+d*h*_,this._z=c*h*_-d*f*u,this._w=c*h*u-d*f*_;break;case"XZY":this._x=d*h*u-c*f*_,this._y=c*f*u-d*h*_,this._z=c*h*_+d*f*u,this._w=c*h*u+d*f*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],s=e[4],o=e[8],r=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=i+a+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(o-c)*f,this._z=(r-s)*f}else if(i>a&&i>u){const f=2*Math.sqrt(1+i-a-u);this._w=(h-l)/f,this._x=.25*f,this._y=(s+r)/f,this._z=(o+c)/f}else if(a>u){const f=2*Math.sqrt(1+a-i-u);this._w=(o-c)/f,this._x=(s+r)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+u-i-a);this._w=(r-s)/f,this._x=(o+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Qe(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,s=t._y,o=t._z,r=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=i*h+r*a+s*c-o*l,this._y=s*h+r*l+o*a-i*c,this._z=o*h+r*c+i*l-s*a,this._w=r*h-i*a-s*l-o*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,s=this._y,o=this._z,r=this._w;let a=r*t._w+i*t._x+s*t._y+o*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=r,this._x=i,this._y=s,this._z=o,this;const l=1-a*a;if(l<=Number.EPSILON){const f=1-e;return this._w=f*r+e*this._w,this._x=f*i+e*this._x,this._y=f*s+e*this._y,this._z=f*o+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=r*u+this._w*d,this._x=i*u+this._x*d,this._y=s*u+this._y*d,this._z=o*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),o=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),o*Math.sin(e),o*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class K{constructor(t=0,e=0,i=0){K.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Gh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Gh.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,s=this.z,o=t.elements;return this.x=o[0]*e+o[3]*i+o[6]*s,this.y=o[1]*e+o[4]*i+o[7]*s,this.z=o[2]*e+o[5]*i+o[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,o=t.elements,r=1/(o[3]*e+o[7]*i+o[11]*s+o[15]);return this.x=(o[0]*e+o[4]*i+o[8]*s+o[12])*r,this.y=(o[1]*e+o[5]*i+o[9]*s+o[13])*r,this.z=(o[2]*e+o[6]*i+o[10]*s+o[14])*r,this}applyQuaternion(t){const e=this.x,i=this.y,s=this.z,o=t.x,r=t.y,a=t.z,l=t.w,c=2*(r*s-a*i),h=2*(a*e-o*s),u=2*(o*i-r*e);return this.x=e+l*c+r*u-a*h,this.y=i+l*h+a*c-o*u,this.z=s+l*u+o*h-r*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,s=this.z,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s,this.y=o[1]*e+o[5]*i+o[9]*s,this.z=o[2]*e+o[6]*i+o[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,s=t.y,o=t.z,r=e.x,a=e.y,l=e.z;return this.x=s*l-o*a,this.y=o*r-i*l,this.z=i*a-s*r,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return dl.copy(this).projectOnVector(t),this.sub(dl)}reflect(t){return this.sub(dl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Qe(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const dl=new K,Gh=new Mr;class wr{constructor(t=new K(1/0,1/0,1/0),e=new K(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Yn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Yn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=Yn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const o=i.getAttribute("position");if(e===!0&&o!==void 0&&t.isInstancedMesh!==!0)for(let r=0,a=o.count;r<a;r++)t.isMesh===!0?t.getVertexPosition(r,Yn):Yn.fromBufferAttribute(o,r),Yn.applyMatrix4(t.matrixWorld),this.expandByPoint(Yn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ir.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ir.copy(i.boundingBox)),Ir.applyMatrix4(t.matrixWorld),this.union(Ir)}const s=t.children;for(let o=0,r=s.length;o<r;o++)this.expandByObject(s[o],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Yn),Yn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Bo),Lr.subVectors(this.max,Bo),Vs.subVectors(t.a,Bo),Ws.subVectors(t.b,Bo),Xs.subVectors(t.c,Bo),Ki.subVectors(Ws,Vs),Zi.subVectors(Xs,Ws),gs.subVectors(Vs,Xs);let e=[0,-Ki.z,Ki.y,0,-Zi.z,Zi.y,0,-gs.z,gs.y,Ki.z,0,-Ki.x,Zi.z,0,-Zi.x,gs.z,0,-gs.x,-Ki.y,Ki.x,0,-Zi.y,Zi.x,0,-gs.y,gs.x,0];return!fl(e,Vs,Ws,Xs,Lr)||(e=[1,0,0,0,1,0,0,0,1],!fl(e,Vs,Ws,Xs,Lr))?!1:(Dr.crossVectors(Ki,Zi),e=[Dr.x,Dr.y,Dr.z],fl(e,Vs,Ws,Xs,Lr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Yn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Yn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ai[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ai[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ai[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ai[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ai[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ai[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ai[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ai[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ai),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Ai=[new K,new K,new K,new K,new K,new K,new K,new K],Yn=new K,Ir=new wr,Vs=new K,Ws=new K,Xs=new K,Ki=new K,Zi=new K,gs=new K,Bo=new K,Lr=new K,Dr=new K,_s=new K;function fl(n,t,e,i,s){for(let o=0,r=n.length-3;o<=r;o+=3){_s.fromArray(n,o);const a=s.x*Math.abs(_s.x)+s.y*Math.abs(_s.y)+s.z*Math.abs(_s.z),l=t.dot(_s),c=e.dot(_s),h=i.dot(_s);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const Av=new wr,zo=new K,pl=new K;class ka{constructor(t=new K,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):Av.setFromPoints(t).getCenter(i);let s=0;for(let o=0,r=t.length;o<r;o++)s=Math.max(s,i.distanceToSquared(t[o]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;zo.subVectors(t,this.center);const e=zo.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(zo,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(pl.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(zo.copy(t.center).add(pl)),this.expandByPoint(zo.copy(t.center).sub(pl))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ri=new K,ml=new K,Ur=new K,Ji=new K,gl=new K,Nr=new K,_l=new K;class fp{constructor(t=new K,e=new K(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ri)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Ri.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ri.copy(this.origin).addScaledVector(this.direction,e),Ri.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){ml.copy(t).add(e).multiplyScalar(.5),Ur.copy(e).sub(t).normalize(),Ji.copy(this.origin).sub(ml);const o=t.distanceTo(e)*.5,r=-this.direction.dot(Ur),a=Ji.dot(this.direction),l=-Ji.dot(Ur),c=Ji.lengthSq(),h=Math.abs(1-r*r);let u,d,f,_;if(h>0)if(u=r*l-a,d=r*a-l,_=o*h,u>=0)if(d>=-_)if(d<=_){const x=1/h;u*=x,d*=x,f=u*(u+r*d+2*a)+d*(r*u+d+2*l)+c}else d=o,u=Math.max(0,-(r*d+a)),f=-u*u+d*(d+2*l)+c;else d=-o,u=Math.max(0,-(r*d+a)),f=-u*u+d*(d+2*l)+c;else d<=-_?(u=Math.max(0,-(-r*o+a)),d=u>0?-o:Math.min(Math.max(-o,-l),o),f=-u*u+d*(d+2*l)+c):d<=_?(u=0,d=Math.min(Math.max(-o,-l),o),f=d*(d+2*l)+c):(u=Math.max(0,-(r*o+a)),d=u>0?o:Math.min(Math.max(-o,-l),o),f=-u*u+d*(d+2*l)+c);else d=r>0?-o:o,u=Math.max(0,-(r*d+a)),f=-u*u+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(ml).addScaledVector(Ur,d),f}intersectSphere(t,e){Ri.subVectors(t.center,this.origin);const i=Ri.dot(this.direction),s=Ri.dot(Ri)-i*i,o=t.radius*t.radius;if(s>o)return null;const r=Math.sqrt(o-s),a=i-r,l=i+r;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,o,r,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(i=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(i=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),h>=0?(o=(t.min.y-d.y)*h,r=(t.max.y-d.y)*h):(o=(t.max.y-d.y)*h,r=(t.min.y-d.y)*h),i>r||o>s||((o>i||isNaN(i))&&(i=o),(r<s||isNaN(s))&&(s=r),u>=0?(a=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,Ri)!==null}intersectTriangle(t,e,i,s,o){gl.subVectors(e,t),Nr.subVectors(i,t),_l.crossVectors(gl,Nr);let r=this.direction.dot(_l),a;if(r>0){if(s)return null;a=1}else if(r<0)a=-1,r=-r;else return null;Ji.subVectors(this.origin,t);const l=a*this.direction.dot(Nr.crossVectors(Ji,Nr));if(l<0)return null;const c=a*this.direction.dot(gl.cross(Ji));if(c<0||l+c>r)return null;const h=-a*Ji.dot(_l);return h<0?null:this.at(h/r,o)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ne{constructor(t,e,i,s,o,r,a,l,c,h,u,d,f,_,x,m){Ne.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,o,r,a,l,c,h,u,d,f,_,x,m)}set(t,e,i,s,o,r,a,l,c,h,u,d,f,_,x,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=i,p[12]=s,p[1]=o,p[5]=r,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=_,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ne().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,s=1/qs.setFromMatrixColumn(t,0).length(),o=1/qs.setFromMatrixColumn(t,1).length(),r=1/qs.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*o,e[5]=i[5]*o,e[6]=i[6]*o,e[7]=0,e[8]=i[8]*r,e[9]=i[9]*r,e[10]=i[10]*r,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,s=t.y,o=t.z,r=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(o),u=Math.sin(o);if(t.order==="XYZ"){const d=r*h,f=r*u,_=a*h,x=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=f+_*c,e[5]=d-x*c,e[9]=-a*l,e[2]=x-d*c,e[6]=_+f*c,e[10]=r*l}else if(t.order==="YXZ"){const d=l*h,f=l*u,_=c*h,x=c*u;e[0]=d+x*a,e[4]=_*a-f,e[8]=r*c,e[1]=r*u,e[5]=r*h,e[9]=-a,e[2]=f*a-_,e[6]=x+d*a,e[10]=r*l}else if(t.order==="ZXY"){const d=l*h,f=l*u,_=c*h,x=c*u;e[0]=d-x*a,e[4]=-r*u,e[8]=_+f*a,e[1]=f+_*a,e[5]=r*h,e[9]=x-d*a,e[2]=-r*c,e[6]=a,e[10]=r*l}else if(t.order==="ZYX"){const d=r*h,f=r*u,_=a*h,x=a*u;e[0]=l*h,e[4]=_*c-f,e[8]=d*c+x,e[1]=l*u,e[5]=x*c+d,e[9]=f*c-_,e[2]=-c,e[6]=a*l,e[10]=r*l}else if(t.order==="YZX"){const d=r*l,f=r*c,_=a*l,x=a*c;e[0]=l*h,e[4]=x-d*u,e[8]=_*u+f,e[1]=u,e[5]=r*h,e[9]=-a*h,e[2]=-c*h,e[6]=f*u+_,e[10]=d-x*u}else if(t.order==="XZY"){const d=r*l,f=r*c,_=a*l,x=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+x,e[5]=r*h,e[9]=f*u-_,e[2]=_*u-f,e[6]=a*h,e[10]=x*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Rv,t,Pv)}lookAt(t,e,i){const s=this.elements;return bn.subVectors(t,e),bn.lengthSq()===0&&(bn.z=1),bn.normalize(),Qi.crossVectors(i,bn),Qi.lengthSq()===0&&(Math.abs(i.z)===1?bn.x+=1e-4:bn.z+=1e-4,bn.normalize(),Qi.crossVectors(i,bn)),Qi.normalize(),Fr.crossVectors(bn,Qi),s[0]=Qi.x,s[4]=Fr.x,s[8]=bn.x,s[1]=Qi.y,s[5]=Fr.y,s[9]=bn.y,s[2]=Qi.z,s[6]=Fr.z,s[10]=bn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,o=this.elements,r=i[0],a=i[4],l=i[8],c=i[12],h=i[1],u=i[5],d=i[9],f=i[13],_=i[2],x=i[6],m=i[10],p=i[14],b=i[3],M=i[7],S=i[11],O=i[15],I=s[0],P=s[4],F=s[8],et=s[12],y=s[1],E=s[5],G=s[9],W=s[13],Q=s[2],at=s[6],X=s[10],nt=s[14],$=s[3],gt=s[7],mt=s[11],Mt=s[15];return o[0]=r*I+a*y+l*Q+c*$,o[4]=r*P+a*E+l*at+c*gt,o[8]=r*F+a*G+l*X+c*mt,o[12]=r*et+a*W+l*nt+c*Mt,o[1]=h*I+u*y+d*Q+f*$,o[5]=h*P+u*E+d*at+f*gt,o[9]=h*F+u*G+d*X+f*mt,o[13]=h*et+u*W+d*nt+f*Mt,o[2]=_*I+x*y+m*Q+p*$,o[6]=_*P+x*E+m*at+p*gt,o[10]=_*F+x*G+m*X+p*mt,o[14]=_*et+x*W+m*nt+p*Mt,o[3]=b*I+M*y+S*Q+O*$,o[7]=b*P+M*E+S*at+O*gt,o[11]=b*F+M*G+S*X+O*mt,o[15]=b*et+M*W+S*nt+O*Mt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],s=t[8],o=t[12],r=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],f=t[14],_=t[3],x=t[7],m=t[11],p=t[15];return _*(+o*l*u-s*c*u-o*a*d+i*c*d+s*a*f-i*l*f)+x*(+e*l*f-e*c*d+o*r*d-s*r*f+s*c*h-o*l*h)+m*(+e*c*u-e*a*f-o*r*u+i*r*f+o*a*h-i*c*h)+p*(-s*a*h-e*l*u+e*a*d+s*r*u-i*r*d+i*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],o=t[3],r=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],f=t[11],_=t[12],x=t[13],m=t[14],p=t[15],b=u*m*c-x*d*c+x*l*f-a*m*f-u*l*p+a*d*p,M=_*d*c-h*m*c-_*l*f+r*m*f+h*l*p-r*d*p,S=h*x*c-_*u*c+_*a*f-r*x*f-h*a*p+r*u*p,O=_*u*l-h*x*l-_*a*d+r*x*d+h*a*m-r*u*m,I=e*b+i*M+s*S+o*O;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/I;return t[0]=b*P,t[1]=(x*d*o-u*m*o-x*s*f+i*m*f+u*s*p-i*d*p)*P,t[2]=(a*m*o-x*l*o+x*s*c-i*m*c-a*s*p+i*l*p)*P,t[3]=(u*l*o-a*d*o-u*s*c+i*d*c+a*s*f-i*l*f)*P,t[4]=M*P,t[5]=(h*m*o-_*d*o+_*s*f-e*m*f-h*s*p+e*d*p)*P,t[6]=(_*l*o-r*m*o-_*s*c+e*m*c+r*s*p-e*l*p)*P,t[7]=(r*d*o-h*l*o+h*s*c-e*d*c-r*s*f+e*l*f)*P,t[8]=S*P,t[9]=(_*u*o-h*x*o-_*i*f+e*x*f+h*i*p-e*u*p)*P,t[10]=(r*x*o-_*a*o+_*i*c-e*x*c-r*i*p+e*a*p)*P,t[11]=(h*a*o-r*u*o-h*i*c+e*u*c+r*i*f-e*a*f)*P,t[12]=O*P,t[13]=(h*x*s-_*u*s+_*i*d-e*x*d-h*i*m+e*u*m)*P,t[14]=(_*a*s-r*x*s-_*i*l+e*x*l+r*i*m-e*a*m)*P,t[15]=(r*u*s-h*a*s+h*i*l-e*u*l-r*i*d+e*a*d)*P,this}scale(t){const e=this.elements,i=t.x,s=t.y,o=t.z;return e[0]*=i,e[4]*=s,e[8]*=o,e[1]*=i,e[5]*=s,e[9]*=o,e[2]*=i,e[6]*=s,e[10]*=o,e[3]*=i,e[7]*=s,e[11]*=o,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),s=Math.sin(e),o=1-i,r=t.x,a=t.y,l=t.z,c=o*r,h=o*a;return this.set(c*r+i,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+i,h*l-s*r,0,c*l-s*a,h*l+s*r,o*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,o,r){return this.set(1,i,o,0,t,1,r,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){const s=this.elements,o=e._x,r=e._y,a=e._z,l=e._w,c=o+o,h=r+r,u=a+a,d=o*c,f=o*h,_=o*u,x=r*h,m=r*u,p=a*u,b=l*c,M=l*h,S=l*u,O=i.x,I=i.y,P=i.z;return s[0]=(1-(x+p))*O,s[1]=(f+S)*O,s[2]=(_-M)*O,s[3]=0,s[4]=(f-S)*I,s[5]=(1-(d+p))*I,s[6]=(m+b)*I,s[7]=0,s[8]=(_+M)*P,s[9]=(m-b)*P,s[10]=(1-(d+x))*P,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){const s=this.elements;let o=qs.set(s[0],s[1],s[2]).length();const r=qs.set(s[4],s[5],s[6]).length(),a=qs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(o=-o),t.x=s[12],t.y=s[13],t.z=s[14],$n.copy(this);const c=1/o,h=1/r,u=1/a;return $n.elements[0]*=c,$n.elements[1]*=c,$n.elements[2]*=c,$n.elements[4]*=h,$n.elements[5]*=h,$n.elements[6]*=h,$n.elements[8]*=u,$n.elements[9]*=u,$n.elements[10]*=u,e.setFromRotationMatrix($n),i.x=o,i.y=r,i.z=a,this}makePerspective(t,e,i,s,o,r,a=Oi){const l=this.elements,c=2*o/(e-t),h=2*o/(i-s),u=(e+t)/(e-t),d=(i+s)/(i-s);let f,_;if(a===Oi)f=-(r+o)/(r-o),_=-2*r*o/(r-o);else if(a===ba)f=-r/(r-o),_=-r*o/(r-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,s,o,r,a=Oi){const l=this.elements,c=1/(e-t),h=1/(i-s),u=1/(r-o),d=(e+t)*c,f=(i+s)*h;let _,x;if(a===Oi)_=(r+o)*u,x=-2*u;else if(a===ba)_=o*u,x=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=x,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const qs=new K,$n=new Ne,Rv=new K(0,0,0),Pv=new K(1,1,1),Qi=new K,Fr=new K,bn=new K,Hh=new Ne,kh=new Mr;class xi{constructor(t=0,e=0,i=0,s=xi.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const s=t.elements,o=s[0],r=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(Qe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-r,o)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Qe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,o),this._z=0);break;case"ZXY":this._x=Math.asin(Qe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-Qe(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin(Qe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,o)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Qe(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,o)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Hh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Hh,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return kh.setFromEuler(this),this.setFromQuaternion(kh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}xi.DEFAULT_ORDER="XYZ";class pp{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Cv=0;const Vh=new K,Ys=new Mr,Pi=new Ne,Or=new K,Go=new K,Iv=new K,Lv=new Mr,Wh=new K(1,0,0),Xh=new K(0,1,0),qh=new K(0,0,1),Yh={type:"added"},Dv={type:"removed"},$s={type:"childadded",child:null},vl={type:"childremoved",child:null};class en extends Ro{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Cv++}),this.uuid=Ns(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=en.DEFAULT_UP.clone();const t=new K,e=new xi,i=new Mr,s=new K(1,1,1);function o(){i.setFromEuler(e,!1)}function r(){e.setFromQuaternion(i,void 0,!1)}e._onChange(o),i._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ne},normalMatrix:{value:new le}}),this.matrix=new Ne,this.matrixWorld=new Ne,this.matrixAutoUpdate=en.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=en.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new pp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ys.setFromAxisAngle(t,e),this.quaternion.multiply(Ys),this}rotateOnWorldAxis(t,e){return Ys.setFromAxisAngle(t,e),this.quaternion.premultiply(Ys),this}rotateX(t){return this.rotateOnAxis(Wh,t)}rotateY(t){return this.rotateOnAxis(Xh,t)}rotateZ(t){return this.rotateOnAxis(qh,t)}translateOnAxis(t,e){return Vh.copy(t).applyQuaternion(this.quaternion),this.position.add(Vh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Wh,t)}translateY(t){return this.translateOnAxis(Xh,t)}translateZ(t){return this.translateOnAxis(qh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Pi.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Or.copy(t):Or.set(t,e,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Go.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Pi.lookAt(Go,Or,this.up):Pi.lookAt(Or,Go,this.up),this.quaternion.setFromRotationMatrix(Pi),s&&(Pi.extractRotation(s.matrixWorld),Ys.setFromRotationMatrix(Pi),this.quaternion.premultiply(Ys.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Yh),$s.child=t,this.dispatchEvent($s),$s.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Dv),vl.child=t,this.dispatchEvent(vl),vl.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Pi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Pi.multiply(t.parent.matrixWorld)),t.applyMatrix4(Pi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Yh),$s.child=t,this.dispatchEvent($s),$s.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){const r=this.children[i].getObjectByProperty(t,e);if(r!==void 0)return r}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const s=this.children;for(let o=0,r=s.length;o<r;o++)s[o].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Go,t,Iv),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Go,Lv,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let o=0,r=s.length;o<r;o++)s[o].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function o(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=o(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];o(t.shapes,u)}else o(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(o(t.materials,this.material[l]));s.material=a}else s.material=o(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(o(t.animations,l))}}if(e){const a=r(t.geometries),l=r(t.materials),c=r(t.textures),h=r(t.images),u=r(t.shapes),d=r(t.skeletons),f=r(t.animations),_=r(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),_.length>0&&(i.nodes=_)}return i.object=s,i;function r(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const s=t.children[i];this.add(s.clone())}return this}}en.DEFAULT_UP=new K(0,1,0);en.DEFAULT_MATRIX_AUTO_UPDATE=!0;en.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const jn=new K,Ci=new K,xl=new K,Ii=new K,js=new K,Ks=new K,$h=new K,yl=new K,Ml=new K,wl=new K,Sl=new Pe,El=new Pe,bl=new Pe;class Qn{constructor(t=new K,e=new K,i=new K){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),jn.subVectors(t,e),s.cross(jn);const o=s.lengthSq();return o>0?s.multiplyScalar(1/Math.sqrt(o)):s.set(0,0,0)}static getBarycoord(t,e,i,s,o){jn.subVectors(s,e),Ci.subVectors(i,e),xl.subVectors(t,e);const r=jn.dot(jn),a=jn.dot(Ci),l=jn.dot(xl),c=Ci.dot(Ci),h=Ci.dot(xl),u=r*c-a*a;if(u===0)return o.set(0,0,0),null;const d=1/u,f=(c*l-a*h)*d,_=(r*h-a*l)*d;return o.set(1-f-_,_,f)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,Ii)===null?!1:Ii.x>=0&&Ii.y>=0&&Ii.x+Ii.y<=1}static getInterpolation(t,e,i,s,o,r,a,l){return this.getBarycoord(t,e,i,s,Ii)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(o,Ii.x),l.addScaledVector(r,Ii.y),l.addScaledVector(a,Ii.z),l)}static getInterpolatedAttribute(t,e,i,s,o,r){return Sl.setScalar(0),El.setScalar(0),bl.setScalar(0),Sl.fromBufferAttribute(t,e),El.fromBufferAttribute(t,i),bl.fromBufferAttribute(t,s),r.setScalar(0),r.addScaledVector(Sl,o.x),r.addScaledVector(El,o.y),r.addScaledVector(bl,o.z),r}static isFrontFacing(t,e,i,s){return jn.subVectors(i,e),Ci.subVectors(t,e),jn.cross(Ci).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return jn.subVectors(this.c,this.b),Ci.subVectors(this.a,this.b),jn.cross(Ci).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Qn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Qn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,o){return Qn.getInterpolation(t,this.a,this.b,this.c,e,i,s,o)}containsPoint(t){return Qn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Qn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,s=this.b,o=this.c;let r,a;js.subVectors(s,i),Ks.subVectors(o,i),yl.subVectors(t,i);const l=js.dot(yl),c=Ks.dot(yl);if(l<=0&&c<=0)return e.copy(i);Ml.subVectors(t,s);const h=js.dot(Ml),u=Ks.dot(Ml);if(h>=0&&u<=h)return e.copy(s);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return r=l/(l-h),e.copy(i).addScaledVector(js,r);wl.subVectors(t,o);const f=js.dot(wl),_=Ks.dot(wl);if(_>=0&&f<=_)return e.copy(o);const x=f*c-l*_;if(x<=0&&c>=0&&_<=0)return a=c/(c-_),e.copy(i).addScaledVector(Ks,a);const m=h*_-f*u;if(m<=0&&u-h>=0&&f-_>=0)return $h.subVectors(o,s),a=(u-h)/(u-h+(f-_)),e.copy(s).addScaledVector($h,a);const p=1/(m+x+d);return r=x*p,a=d*p,e.copy(i).addScaledVector(js,r).addScaledVector(Ks,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const mp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ts={h:0,s:0,l:0},Br={h:0,s:0,l:0};function Tl(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class he{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Kn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,we.toWorkingColorSpace(this,e),this}setRGB(t,e,i,s=we.workingColorSpace){return this.r=t,this.g=e,this.b=i,we.toWorkingColorSpace(this,s),this}setHSL(t,e,i,s=we.workingColorSpace){if(t=bu(t,1),e=Qe(e,0,1),i=Qe(i,0,1),e===0)this.r=this.g=this.b=i;else{const o=i<=.5?i*(1+e):i+e-i*e,r=2*i-o;this.r=Tl(r,o,t+1/3),this.g=Tl(r,o,t),this.b=Tl(r,o,t-1/3)}return we.toWorkingColorSpace(this,s),this}setStyle(t,e=Kn){function i(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let o;const r=s[1],a=s[2];switch(r){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,e);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,e);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const o=s[1],r=o.length;if(r===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,e);if(r===6)return this.setHex(parseInt(o,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Kn){const i=mp[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=mo(t.r),this.g=mo(t.g),this.b=mo(t.b),this}copyLinearToSRGB(t){return this.r=ul(t.r),this.g=ul(t.g),this.b=ul(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Kn){return we.fromWorkingColorSpace(rn.copy(this),t),Math.round(Qe(rn.r*255,0,255))*65536+Math.round(Qe(rn.g*255,0,255))*256+Math.round(Qe(rn.b*255,0,255))}getHexString(t=Kn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=we.workingColorSpace){we.fromWorkingColorSpace(rn.copy(this),e);const i=rn.r,s=rn.g,o=rn.b,r=Math.max(i,s,o),a=Math.min(i,s,o);let l,c;const h=(a+r)/2;if(a===r)l=0,c=0;else{const u=r-a;switch(c=h<=.5?u/(r+a):u/(2-r-a),r){case i:l=(s-o)/u+(s<o?6:0);break;case s:l=(o-i)/u+2;break;case o:l=(i-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=we.workingColorSpace){return we.fromWorkingColorSpace(rn.copy(this),e),t.r=rn.r,t.g=rn.g,t.b=rn.b,t}getStyle(t=Kn){we.fromWorkingColorSpace(rn.copy(this),t);const e=rn.r,i=rn.g,s=rn.b;return t!==Kn?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(ts),this.setHSL(ts.h+t,ts.s+e,ts.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(ts),t.getHSL(Br);const i=er(ts.h,Br.h,e),s=er(ts.s,Br.s,e),o=er(ts.l,Br.l,e);return this.setHSL(i,s,o),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,s=this.b,o=t.elements;return this.r=o[0]*e+o[3]*i+o[6]*s,this.g=o[1]*e+o[4]*i+o[7]*s,this.b=o[2]*e+o[5]*i+o[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const rn=new he;he.NAMES=mp;let Uv=0;class Po extends Ro{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Uv++}),this.uuid=Ns(),this.name="",this.type="Material",this.blending=fo,this.side=cs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ic,this.blendDst=sc,this.blendEquation=bs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new he(0,0,0),this.blendAlpha=0,this.depthFunc=Mo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Dh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Hs,this.stencilZFail=Hs,this.stencilZPass=Hs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==fo&&(i.blending=this.blending),this.side!==cs&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==ic&&(i.blendSrc=this.blendSrc),this.blendDst!==sc&&(i.blendDst=this.blendDst),this.blendEquation!==bs&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Mo&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Dh&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Hs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Hs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Hs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(o){const r=[];for(const a in o){const l=o[a];delete l.metadata,r.push(l)}return r}if(e){const o=s(t.textures),r=s(t.images);o.length>0&&(i.textures=o),r.length>0&&(i.images=r)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const s=e.length;i=new Array(s);for(let o=0;o!==s;++o)i[o]=e[o].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class zn extends Po{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new he(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xi,this.combine=jf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const $e=new K,zr=new Bt;class _i{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Uh,this.updateRanges=[],this.gpuType=Fi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,o=this.itemSize;s<o;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)zr.fromBufferAttribute(this,e),zr.applyMatrix3(t),this.setXY(e,zr.x,zr.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)$e.fromBufferAttribute(this,e),$e.applyMatrix3(t),this.setXYZ(e,$e.x,$e.y,$e.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)$e.fromBufferAttribute(this,e),$e.applyMatrix4(t),this.setXYZ(e,$e.x,$e.y,$e.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)$e.fromBufferAttribute(this,e),$e.applyNormalMatrix(t),this.setXYZ(e,$e.x,$e.y,$e.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)$e.fromBufferAttribute(this,e),$e.transformDirection(t),this.setXYZ(e,$e.x,$e.y,$e.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=io(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=dn(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=io(e,this.array)),e}setX(t,e){return this.normalized&&(e=dn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=io(e,this.array)),e}setY(t,e){return this.normalized&&(e=dn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=io(e,this.array)),e}setZ(t,e){return this.normalized&&(e=dn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=io(e,this.array)),e}setW(t,e){return this.normalized&&(e=dn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=dn(e,this.array),i=dn(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=dn(e,this.array),i=dn(i,this.array),s=dn(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,o){return t*=this.itemSize,this.normalized&&(e=dn(e,this.array),i=dn(i,this.array),s=dn(s,this.array),o=dn(o,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=o,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Uh&&(t.usage=this.usage),t}}class gp extends _i{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class _p extends _i{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class Be extends _i{constructor(t,e,i){super(new Float32Array(t),e,i)}}let Nv=0;const On=new Ne,Al=new en,Zs=new K,Tn=new wr,Ho=new wr,Je=new K;class vn extends Ro{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Nv++}),this.uuid=Ns(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(up(t)?_p:gp)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const o=new le().getNormalMatrix(t);i.applyNormalMatrix(o),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return On.makeRotationFromQuaternion(t),this.applyMatrix4(On),this}rotateX(t){return On.makeRotationX(t),this.applyMatrix4(On),this}rotateY(t){return On.makeRotationY(t),this.applyMatrix4(On),this}rotateZ(t){return On.makeRotationZ(t),this.applyMatrix4(On),this}translate(t,e,i){return On.makeTranslation(t,e,i),this.applyMatrix4(On),this}scale(t,e,i){return On.makeScale(t,e,i),this.applyMatrix4(On),this}lookAt(t){return Al.lookAt(t),Al.updateMatrix(),this.applyMatrix4(Al.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Zs).negate(),this.translate(Zs.x,Zs.y,Zs.z),this}setFromPoints(t){const e=[];for(let i=0,s=t.length;i<s;i++){const o=t[i];e.push(o.x,o.y,o.z||0)}return this.setAttribute("position",new Be(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new wr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new K(-1/0,-1/0,-1/0),new K(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){const o=e[i];Tn.setFromBufferAttribute(o),this.morphTargetsRelative?(Je.addVectors(this.boundingBox.min,Tn.min),this.boundingBox.expandByPoint(Je),Je.addVectors(this.boundingBox.max,Tn.max),this.boundingBox.expandByPoint(Je)):(this.boundingBox.expandByPoint(Tn.min),this.boundingBox.expandByPoint(Tn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ka);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new K,1/0);return}if(t){const i=this.boundingSphere.center;if(Tn.setFromBufferAttribute(t),e)for(let o=0,r=e.length;o<r;o++){const a=e[o];Ho.setFromBufferAttribute(a),this.morphTargetsRelative?(Je.addVectors(Tn.min,Ho.min),Tn.expandByPoint(Je),Je.addVectors(Tn.max,Ho.max),Tn.expandByPoint(Je)):(Tn.expandByPoint(Ho.min),Tn.expandByPoint(Ho.max))}Tn.getCenter(i);let s=0;for(let o=0,r=t.count;o<r;o++)Je.fromBufferAttribute(t,o),s=Math.max(s,i.distanceToSquared(Je));if(e)for(let o=0,r=e.length;o<r;o++){const a=e[o],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Je.fromBufferAttribute(a,c),l&&(Zs.fromBufferAttribute(t,c),Je.add(Zs)),s=Math.max(s,i.distanceToSquared(Je))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,s=e.normal,o=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new _i(new Float32Array(4*i.count),4));const r=this.getAttribute("tangent"),a=[],l=[];for(let F=0;F<i.count;F++)a[F]=new K,l[F]=new K;const c=new K,h=new K,u=new K,d=new Bt,f=new Bt,_=new Bt,x=new K,m=new K;function p(F,et,y){c.fromBufferAttribute(i,F),h.fromBufferAttribute(i,et),u.fromBufferAttribute(i,y),d.fromBufferAttribute(o,F),f.fromBufferAttribute(o,et),_.fromBufferAttribute(o,y),h.sub(c),u.sub(c),f.sub(d),_.sub(d);const E=1/(f.x*_.y-_.x*f.y);isFinite(E)&&(x.copy(h).multiplyScalar(_.y).addScaledVector(u,-f.y).multiplyScalar(E),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-_.x).multiplyScalar(E),a[F].add(x),a[et].add(x),a[y].add(x),l[F].add(m),l[et].add(m),l[y].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:t.count}]);for(let F=0,et=b.length;F<et;++F){const y=b[F],E=y.start,G=y.count;for(let W=E,Q=E+G;W<Q;W+=3)p(t.getX(W+0),t.getX(W+1),t.getX(W+2))}const M=new K,S=new K,O=new K,I=new K;function P(F){O.fromBufferAttribute(s,F),I.copy(O);const et=a[F];M.copy(et),M.sub(O.multiplyScalar(O.dot(et))).normalize(),S.crossVectors(I,et);const E=S.dot(l[F])<0?-1:1;r.setXYZW(F,M.x,M.y,M.z,E)}for(let F=0,et=b.length;F<et;++F){const y=b[F],E=y.start,G=y.count;for(let W=E,Q=E+G;W<Q;W+=3)P(t.getX(W+0)),P(t.getX(W+1)),P(t.getX(W+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new _i(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);const s=new K,o=new K,r=new K,a=new K,l=new K,c=new K,h=new K,u=new K;if(t)for(let d=0,f=t.count;d<f;d+=3){const _=t.getX(d+0),x=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,_),o.fromBufferAttribute(e,x),r.fromBufferAttribute(e,m),h.subVectors(r,o),u.subVectors(s,o),h.cross(u),a.fromBufferAttribute(i,_),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,m),a.add(h),l.add(h),c.add(h),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),o.fromBufferAttribute(e,d+1),r.fromBufferAttribute(e,d+2),h.subVectors(r,o),u.subVectors(s,o),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Je.fromBufferAttribute(t,e),Je.normalize(),t.setXYZ(e,Je.x,Je.y,Je.z)}toNonIndexed(){function t(a,l){const c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h);let f=0,_=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?f=l[x]*a.data.stride+a.offset:f=l[x]*h;for(let p=0;p<h;p++)d[_++]=c[f++]}return new _i(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new vn,i=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=t(l,i);e.setAttribute(a,c)}const o=this.morphAttributes;for(const a in o){const l=[],c=o[a];for(let h=0,u=c.length;h<u;h++){const d=c[h],f=t(d,i);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let a=0,l=r.length;a<l;a++){const c=r[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const l in i){const c=i[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let o=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const f=c[u];h.push(f.toJSON(t.data))}h.length>0&&(s[l]=h,o=!0)}o&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const s=t.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(e))}const o=t.morphAttributes;for(const c in o){const h=[],u=o[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const r=t.groups;for(let c=0,h=r.length;c<h;c++){const u=r[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const jh=new Ne,vs=new fp,Gr=new ka,Kh=new K,Hr=new K,kr=new K,Vr=new K,Rl=new K,Wr=new K,Zh=new K,Xr=new K;class R extends en{constructor(t=new vn,e=new zn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=s.length;o<r;o++){const a=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}getVertexPosition(t,e){const i=this.geometry,s=i.attributes.position,o=i.morphAttributes.position,r=i.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(o&&a){Wr.set(0,0,0);for(let l=0,c=o.length;l<c;l++){const h=a[l],u=o[l];h!==0&&(Rl.fromBufferAttribute(u,t),r?Wr.addScaledVector(Rl,h):Wr.addScaledVector(Rl.sub(e),h))}e.add(Wr)}return e}raycast(t,e){const i=this.geometry,s=this.material,o=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Gr.copy(i.boundingSphere),Gr.applyMatrix4(o),vs.copy(t.ray).recast(t.near),!(Gr.containsPoint(vs.origin)===!1&&(vs.intersectSphere(Gr,Kh)===null||vs.origin.distanceToSquared(Kh)>(t.far-t.near)**2))&&(jh.copy(o).invert(),vs.copy(t.ray).applyMatrix4(jh),!(i.boundingBox!==null&&vs.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,vs)))}_computeIntersections(t,e,i){let s;const o=this.geometry,r=this.material,a=o.index,l=o.attributes.position,c=o.attributes.uv,h=o.attributes.uv1,u=o.attributes.normal,d=o.groups,f=o.drawRange;if(a!==null)if(Array.isArray(r))for(let _=0,x=d.length;_<x;_++){const m=d[_],p=r[m.materialIndex],b=Math.max(m.start,f.start),M=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let S=b,O=M;S<O;S+=3){const I=a.getX(S),P=a.getX(S+1),F=a.getX(S+2);s=qr(this,p,t,i,c,h,u,I,P,F),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const _=Math.max(0,f.start),x=Math.min(a.count,f.start+f.count);for(let m=_,p=x;m<p;m+=3){const b=a.getX(m),M=a.getX(m+1),S=a.getX(m+2);s=qr(this,r,t,i,c,h,u,b,M,S),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(r))for(let _=0,x=d.length;_<x;_++){const m=d[_],p=r[m.materialIndex],b=Math.max(m.start,f.start),M=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let S=b,O=M;S<O;S+=3){const I=S,P=S+1,F=S+2;s=qr(this,p,t,i,c,h,u,I,P,F),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const _=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let m=_,p=x;m<p;m+=3){const b=m,M=m+1,S=m+2;s=qr(this,r,t,i,c,h,u,b,M,S),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function Fv(n,t,e,i,s,o,r,a){let l;if(t.side===yn?l=i.intersectTriangle(r,o,s,!0,a):l=i.intersectTriangle(s,o,r,t.side===cs,a),l===null)return null;Xr.copy(a),Xr.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(Xr);return c<e.near||c>e.far?null:{distance:c,point:Xr.clone(),object:n}}function qr(n,t,e,i,s,o,r,a,l,c){n.getVertexPosition(a,Hr),n.getVertexPosition(l,kr),n.getVertexPosition(c,Vr);const h=Fv(n,t,e,i,Hr,kr,Vr,Zh);if(h){const u=new K;Qn.getBarycoord(Zh,Hr,kr,Vr,u),s&&(h.uv=Qn.getInterpolatedAttribute(s,a,l,c,u,new Bt)),o&&(h.uv1=Qn.getInterpolatedAttribute(o,a,l,c,u,new Bt)),r&&(h.normal=Qn.getInterpolatedAttribute(r,a,l,c,u,new K),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new K,materialIndex:0};Qn.getNormal(Hr,kr,Vr,d.normal),h.face=d,h.barycoord=u}return h}class ei extends vn{constructor(t=1,e=1,i=1,s=1,o=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:o,depthSegments:r};const a=this;s=Math.floor(s),o=Math.floor(o),r=Math.floor(r);const l=[],c=[],h=[],u=[];let d=0,f=0;_("z","y","x",-1,-1,i,e,t,r,o,0),_("z","y","x",1,-1,i,e,-t,r,o,1),_("x","z","y",1,1,t,i,e,s,r,2),_("x","z","y",1,-1,t,i,-e,s,r,3),_("x","y","z",1,-1,t,e,i,s,o,4),_("x","y","z",-1,-1,t,e,-i,s,o,5),this.setIndex(l),this.setAttribute("position",new Be(c,3)),this.setAttribute("normal",new Be(h,3)),this.setAttribute("uv",new Be(u,2));function _(x,m,p,b,M,S,O,I,P,F,et){const y=S/P,E=O/F,G=S/2,W=O/2,Q=I/2,at=P+1,X=F+1;let nt=0,$=0;const gt=new K;for(let mt=0;mt<X;mt++){const Mt=mt*E-W;for(let It=0;It<at;It++){const zt=It*y-G;gt[x]=zt*b,gt[m]=Mt*M,gt[p]=Q,c.push(gt.x,gt.y,gt.z),gt[x]=0,gt[m]=0,gt[p]=I>0?1:-1,h.push(gt.x,gt.y,gt.z),u.push(It/P),u.push(1-mt/F),nt+=1}}for(let mt=0;mt<F;mt++)for(let Mt=0;Mt<P;Mt++){const It=d+Mt+at*mt,zt=d+Mt+at*(mt+1),rt=d+(Mt+1)+at*(mt+1),ft=d+(Mt+1)+at*mt;l.push(It,zt,ft),l.push(zt,rt,ft),$+=6}a.addGroup(f,$,et),f+=$,d+=nt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ei(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function To(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const s=n[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function fn(n){const t={};for(let e=0;e<n.length;e++){const i=To(n[e]);for(const s in i)t[s]=i[s]}return t}function Ov(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function vp(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:we.workingColorSpace}const Bv={clone:To,merge:fn};var zv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Gv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ln extends Po{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=zv,this.fragmentShader=Gv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=To(t.uniforms),this.uniformsGroups=Ov(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const r=this.uniforms[s].value;r&&r.isTexture?e.uniforms[s]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?e.uniforms[s]={type:"c",value:r.getHex()}:r&&r.isVector2?e.uniforms[s]={type:"v2",value:r.toArray()}:r&&r.isVector3?e.uniforms[s]={type:"v3",value:r.toArray()}:r&&r.isVector4?e.uniforms[s]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?e.uniforms[s]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?e.uniforms[s]={type:"m4",value:r.toArray()}:e.uniforms[s]={value:r}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class xp extends en{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ne,this.projectionMatrix=new Ne,this.projectionMatrixInverse=new Ne,this.coordinateSystem=Oi}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const es=new K,Jh=new Bt,Qh=new Bt;class Fe extends xp{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=fr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(tr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return fr*2*Math.atan(Math.tan(tr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){es.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(es.x,es.y).multiplyScalar(-t/es.z),es.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(es.x,es.y).multiplyScalar(-t/es.z)}getViewSize(t,e){return this.getViewBounds(t,Jh,Qh),e.subVectors(Qh,Jh)}setViewOffset(t,e,i,s,o,r){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=o,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(tr*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,o=-.5*s;const r=this.view;if(this.view!==null&&this.view.enabled){const l=r.fullWidth,c=r.fullHeight;o+=r.offsetX*s/l,e-=r.offsetY*i/c,s*=r.width/l,i*=r.height/c}const a=this.filmOffset;a!==0&&(o+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+s,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Js=-90,Qs=1;class Hv extends en{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Fe(Js,Qs,t,e);s.layers=this.layers,this.add(s);const o=new Fe(Js,Qs,t,e);o.layers=this.layers,this.add(o);const r=new Fe(Js,Qs,t,e);r.layers=this.layers,this.add(r);const a=new Fe(Js,Qs,t,e);a.layers=this.layers,this.add(a);const l=new Fe(Js,Qs,t,e);l.layers=this.layers,this.add(l);const c=new Fe(Js,Qs,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,s,o,r,a,l]=e;for(const c of e)this.remove(c);if(t===Oi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===ba)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[o,r,a,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(e,o),t.setRenderTarget(i,1,s),t.render(e,r),t.setRenderTarget(i,2,s),t.render(e,a),t.setRenderTarget(i,3,s),t.render(e,l),t.setRenderTarget(i,4,s),t.render(e,c),i.texture.generateMipmaps=x,t.setRenderTarget(i,5,s),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class Tu extends _n{constructor(t,e,i,s,o,r,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:wo,super(t,e,i,s,o,r,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class kv extends Ls{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new Tu(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Jn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ei(5,5,5),o=new Ln({name:"CubemapFromEquirect",uniforms:To(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:yn,blending:rs});o.uniforms.tEquirect.value=e;const r=new R(s,o),a=e.minFilter;return e.minFilter===Rs&&(e.minFilter=Jn),new Hv(1,10,this).update(t,r),e.minFilter=a,r.geometry.dispose(),r.material.dispose(),this}clear(t,e,i,s){const o=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(e,i,s);t.setRenderTarget(o)}}const Pl=new K,Vv=new K,Wv=new le;class Ss{constructor(t=new K(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const s=Pl.subVectors(i,e).cross(Vv.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(Pl),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const o=-(t.start.dot(this.normal)+this.constant)/s;return o<0||o>1?null:e.copy(t.start).addScaledVector(i,o)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||Wv.getNormalMatrix(t),s=this.coplanarPoint(Pl).applyMatrix4(t),o=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(o),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const xs=new ka,Yr=new K;class Au{constructor(t=new Ss,e=new Ss,i=new Ss,s=new Ss,o=new Ss,r=new Ss){this.planes=[t,e,i,s,o,r]}set(t,e,i,s,o,r){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(s),a[4].copy(o),a[5].copy(r),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Oi){const i=this.planes,s=t.elements,o=s[0],r=s[1],a=s[2],l=s[3],c=s[4],h=s[5],u=s[6],d=s[7],f=s[8],_=s[9],x=s[10],m=s[11],p=s[12],b=s[13],M=s[14],S=s[15];if(i[0].setComponents(l-o,d-c,m-f,S-p).normalize(),i[1].setComponents(l+o,d+c,m+f,S+p).normalize(),i[2].setComponents(l+r,d+h,m+_,S+b).normalize(),i[3].setComponents(l-r,d-h,m-_,S-b).normalize(),i[4].setComponents(l-a,d-u,m-x,S-M).normalize(),e===Oi)i[5].setComponents(l+a,d+u,m+x,S+M).normalize();else if(e===ba)i[5].setComponents(a,u,x,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),xs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),xs.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(xs)}intersectsSprite(t){return xs.center.set(0,0,0),xs.radius=.7071067811865476,xs.applyMatrix4(t.matrixWorld),this.intersectsSphere(xs)}intersectsSphere(t){const e=this.planes,i=t.center,s=-t.radius;for(let o=0;o<6;o++)if(e[o].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const s=e[i];if(Yr.x=s.normal.x>0?t.max.x:t.min.x,Yr.y=s.normal.y>0?t.max.y:t.min.y,Yr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Yr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function yp(){let n=null,t=!1,e=null,i=null;function s(o,r){e(o,r),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(o){e=o},setContext:function(o){n=o}}}function Xv(n){const t=new WeakMap;function e(a,l){const c=a.array,h=a.usage,u=c.byteLength,d=n.createBuffer();n.bindBuffer(l,d),n.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=n.SHORT;else if(c instanceof Uint32Array)f=n.UNSIGNED_INT;else if(c instanceof Int32Array)f=n.INT;else if(c instanceof Int8Array)f=n.BYTE;else if(c instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function i(a,l,c){const h=l.array,u=l.updateRanges;if(n.bindBuffer(c,a),u.length===0)n.bufferSubData(c,0,h);else{u.sort((f,_)=>f.start-_.start);let d=0;for(let f=1;f<u.length;f++){const _=u[d],x=u[f];x.start<=_.start+_.count+1?_.count=Math.max(_.count,x.start+x.count-_.start):(++d,u[d]=x)}u.length=d+1;for(let f=0,_=u.length;f<_;f++){const x=u[f];n.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function o(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(n.deleteBuffer(l.buffer),t.delete(a))}function r(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:o,update:r}}class Va extends vn{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};const o=t/2,r=e/2,a=Math.floor(i),l=Math.floor(s),c=a+1,h=l+1,u=t/a,d=e/l,f=[],_=[],x=[],m=[];for(let p=0;p<h;p++){const b=p*d-r;for(let M=0;M<c;M++){const S=M*u-o;_.push(S,-b,0),x.push(0,0,1),m.push(M/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let b=0;b<a;b++){const M=b+c*p,S=b+c*(p+1),O=b+1+c*(p+1),I=b+1+c*p;f.push(M,S,I),f.push(S,O,I)}this.setIndex(f),this.setAttribute("position",new Be(_,3)),this.setAttribute("normal",new Be(x,3)),this.setAttribute("uv",new Be(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Va(t.width,t.height,t.widthSegments,t.heightSegments)}}var qv=`#ifdef USE_ALPHAHASH
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
#endif`,jv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Kv=`#ifdef USE_ALPHATEST
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
} // validated`,ox=`#ifdef USE_IRIDESCENCE
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
#endif`,rx=`#ifdef USE_BUMPMAP
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
#endif`,wx="gl_FragColor = linearToOutputTexel( gl_FragColor );",Sx=`
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
#endif`,jx=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Kx=`#ifdef USE_LOGDEPTHBUF
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
#endif`,oy=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ry=`#ifdef USE_MORPHNORMALS
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
#endif`,wy=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Sy=`#ifdef DITHERING
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
}`,jy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ky=`uniform samplerCube tCube;
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
}`,oM=`#include <common>
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
}`,rM=`uniform vec3 diffuse;
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
}`,wM=`uniform vec3 color;
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
}`,SM=`uniform float rotation;
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
}`,ae={alphahash_fragment:qv,alphahash_pars_fragment:Yv,alphamap_fragment:$v,alphamap_pars_fragment:jv,alphatest_fragment:Kv,alphatest_pars_fragment:Zv,aomap_fragment:Jv,aomap_pars_fragment:Qv,batching_pars_vertex:tx,batching_vertex:ex,begin_vertex:nx,beginnormal_vertex:ix,bsdfs:sx,iridescence_fragment:ox,bumpmap_pars_fragment:rx,clipping_planes_fragment:ax,clipping_planes_pars_fragment:lx,clipping_planes_pars_vertex:cx,clipping_planes_vertex:ux,color_fragment:hx,color_pars_fragment:dx,color_pars_vertex:fx,color_vertex:px,common:mx,cube_uv_reflection_fragment:gx,defaultnormal_vertex:_x,displacementmap_pars_vertex:vx,displacementmap_vertex:xx,emissivemap_fragment:yx,emissivemap_pars_fragment:Mx,colorspace_fragment:wx,colorspace_pars_fragment:Sx,envmap_fragment:Ex,envmap_common_pars_fragment:bx,envmap_pars_fragment:Tx,envmap_pars_vertex:Ax,envmap_physical_pars_fragment:Bx,envmap_vertex:Rx,fog_vertex:Px,fog_pars_vertex:Cx,fog_fragment:Ix,fog_pars_fragment:Lx,gradientmap_pars_fragment:Dx,lightmap_pars_fragment:Ux,lights_lambert_fragment:Nx,lights_lambert_pars_fragment:Fx,lights_pars_begin:Ox,lights_toon_fragment:zx,lights_toon_pars_fragment:Gx,lights_phong_fragment:Hx,lights_phong_pars_fragment:kx,lights_physical_fragment:Vx,lights_physical_pars_fragment:Wx,lights_fragment_begin:Xx,lights_fragment_maps:qx,lights_fragment_end:Yx,logdepthbuf_fragment:$x,logdepthbuf_pars_fragment:jx,logdepthbuf_pars_vertex:Kx,logdepthbuf_vertex:Zx,map_fragment:Jx,map_pars_fragment:Qx,map_particle_fragment:ty,map_particle_pars_fragment:ey,metalnessmap_fragment:ny,metalnessmap_pars_fragment:iy,morphinstance_vertex:sy,morphcolor_vertex:oy,morphnormal_vertex:ry,morphtarget_pars_vertex:ay,morphtarget_vertex:ly,normal_fragment_begin:cy,normal_fragment_maps:uy,normal_pars_fragment:hy,normal_pars_vertex:dy,normal_vertex:fy,normalmap_pars_fragment:py,clearcoat_normal_fragment_begin:my,clearcoat_normal_fragment_maps:gy,clearcoat_pars_fragment:_y,iridescence_pars_fragment:vy,opaque_fragment:xy,packing:yy,premultiplied_alpha_fragment:My,project_vertex:wy,dithering_fragment:Sy,dithering_pars_fragment:Ey,roughnessmap_fragment:by,roughnessmap_pars_fragment:Ty,shadowmap_pars_fragment:Ay,shadowmap_pars_vertex:Ry,shadowmap_vertex:Py,shadowmask_pars_fragment:Cy,skinbase_vertex:Iy,skinning_pars_vertex:Ly,skinning_vertex:Dy,skinnormal_vertex:Uy,specularmap_fragment:Ny,specularmap_pars_fragment:Fy,tonemapping_fragment:Oy,tonemapping_pars_fragment:By,transmission_fragment:zy,transmission_pars_fragment:Gy,uv_pars_fragment:Hy,uv_pars_vertex:ky,uv_vertex:Vy,worldpos_vertex:Wy,background_vert:Xy,background_frag:qy,backgroundCube_vert:Yy,backgroundCube_frag:$y,cube_vert:jy,cube_frag:Ky,depth_vert:Zy,depth_frag:Jy,distanceRGBA_vert:Qy,distanceRGBA_frag:tM,equirect_vert:eM,equirect_frag:nM,linedashed_vert:iM,linedashed_frag:sM,meshbasic_vert:oM,meshbasic_frag:rM,meshlambert_vert:aM,meshlambert_frag:lM,meshmatcap_vert:cM,meshmatcap_frag:uM,meshnormal_vert:hM,meshnormal_frag:dM,meshphong_vert:fM,meshphong_frag:pM,meshphysical_vert:mM,meshphysical_frag:gM,meshtoon_vert:_M,meshtoon_frag:vM,points_vert:xM,points_frag:yM,shadow_vert:MM,shadow_frag:wM,sprite_vert:SM,sprite_frag:EM},Ot={common:{diffuse:{value:new he(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new le},alphaMap:{value:null},alphaMapTransform:{value:new le},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new le}},envmap:{envMap:{value:null},envMapRotation:{value:new le},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new le}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new le}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new le},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new le},normalScale:{value:new Bt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new le},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new le}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new le}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new le}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new he(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new he(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new le},alphaTest:{value:0},uvTransform:{value:new le}},sprite:{diffuse:{value:new he(16777215)},opacity:{value:1},center:{value:new Bt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new le},alphaMap:{value:null},alphaMapTransform:{value:new le},alphaTest:{value:0}}},mi={basic:{uniforms:fn([Ot.common,Ot.specularmap,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.fog]),vertexShader:ae.meshbasic_vert,fragmentShader:ae.meshbasic_frag},lambert:{uniforms:fn([Ot.common,Ot.specularmap,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.fog,Ot.lights,{emissive:{value:new he(0)}}]),vertexShader:ae.meshlambert_vert,fragmentShader:ae.meshlambert_frag},phong:{uniforms:fn([Ot.common,Ot.specularmap,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.fog,Ot.lights,{emissive:{value:new he(0)},specular:{value:new he(1118481)},shininess:{value:30}}]),vertexShader:ae.meshphong_vert,fragmentShader:ae.meshphong_frag},standard:{uniforms:fn([Ot.common,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.roughnessmap,Ot.metalnessmap,Ot.fog,Ot.lights,{emissive:{value:new he(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ae.meshphysical_vert,fragmentShader:ae.meshphysical_frag},toon:{uniforms:fn([Ot.common,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.gradientmap,Ot.fog,Ot.lights,{emissive:{value:new he(0)}}]),vertexShader:ae.meshtoon_vert,fragmentShader:ae.meshtoon_frag},matcap:{uniforms:fn([Ot.common,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.fog,{matcap:{value:null}}]),vertexShader:ae.meshmatcap_vert,fragmentShader:ae.meshmatcap_frag},points:{uniforms:fn([Ot.points,Ot.fog]),vertexShader:ae.points_vert,fragmentShader:ae.points_frag},dashed:{uniforms:fn([Ot.common,Ot.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ae.linedashed_vert,fragmentShader:ae.linedashed_frag},depth:{uniforms:fn([Ot.common,Ot.displacementmap]),vertexShader:ae.depth_vert,fragmentShader:ae.depth_frag},normal:{uniforms:fn([Ot.common,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,{opacity:{value:1}}]),vertexShader:ae.meshnormal_vert,fragmentShader:ae.meshnormal_frag},sprite:{uniforms:fn([Ot.sprite,Ot.fog]),vertexShader:ae.sprite_vert,fragmentShader:ae.sprite_frag},background:{uniforms:{uvTransform:{value:new le},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ae.background_vert,fragmentShader:ae.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new le}},vertexShader:ae.backgroundCube_vert,fragmentShader:ae.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ae.cube_vert,fragmentShader:ae.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ae.equirect_vert,fragmentShader:ae.equirect_frag},distanceRGBA:{uniforms:fn([Ot.common,Ot.displacementmap,{referencePosition:{value:new K},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ae.distanceRGBA_vert,fragmentShader:ae.distanceRGBA_frag},shadow:{uniforms:fn([Ot.lights,Ot.fog,{color:{value:new he(0)},opacity:{value:1}}]),vertexShader:ae.shadow_vert,fragmentShader:ae.shadow_frag}};mi.physical={uniforms:fn([mi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new le},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new le},clearcoatNormalScale:{value:new Bt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new le},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new le},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new le},sheen:{value:0},sheenColor:{value:new he(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new le},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new le},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new le},transmissionSamplerSize:{value:new Bt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new le},attenuationDistance:{value:0},attenuationColor:{value:new he(0)},specularColor:{value:new he(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new le},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new le},anisotropyVector:{value:new Bt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new le}}]),vertexShader:ae.meshphysical_vert,fragmentShader:ae.meshphysical_frag};const $r={r:0,b:0,g:0},ys=new xi,bM=new Ne;function TM(n,t,e,i,s,o,r){const a=new he(0);let l=o===!0?0:1,c,h,u=null,d=0,f=null;function _(b){let M=b.isScene===!0?b.background:null;return M&&M.isTexture&&(M=(b.backgroundBlurriness>0?e:t).get(M)),M}function x(b){let M=!1;const S=_(b);S===null?p(a,l):S&&S.isColor&&(p(S,1),M=!0);const O=n.xr.getEnvironmentBlendMode();O==="additive"?i.buffers.color.setClear(0,0,0,1,r):O==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,r),(n.autoClear||M)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(b,M){const S=_(M);S&&(S.isCubeTexture||S.mapping===Ga)?(h===void 0&&(h=new R(new ei(1,1,1),new Ln({name:"BackgroundCubeMaterial",uniforms:To(mi.backgroundCube.uniforms),vertexShader:mi.backgroundCube.vertexShader,fragmentShader:mi.backgroundCube.fragmentShader,side:yn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(O,I,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),ys.copy(M.backgroundRotation),ys.x*=-1,ys.y*=-1,ys.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(ys.y*=-1,ys.z*=-1),h.material.uniforms.envMap.value=S,h.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(bM.makeRotationFromEuler(ys)),h.material.toneMapped=we.getTransfer(S.colorSpace)!==Ue,(u!==S||d!==S.version||f!==n.toneMapping)&&(h.material.needsUpdate=!0,u=S,d=S.version,f=n.toneMapping),h.layers.enableAll(),b.unshift(h,h.geometry,h.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new R(new Va(2,2),new Ln({name:"BackgroundMaterial",uniforms:To(mi.background.uniforms),vertexShader:mi.background.vertexShader,fragmentShader:mi.background.fragmentShader,side:cs,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=we.getTransfer(S.colorSpace)!==Ue,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(u!==S||d!==S.version||f!==n.toneMapping)&&(c.material.needsUpdate=!0,u=S,d=S.version,f=n.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function p(b,M){b.getRGB($r,vp(n)),i.buffers.color.setClear($r.r,$r.g,$r.b,M,r)}return{getClearColor:function(){return a},setClearColor:function(b,M=1){a.set(b),l=M,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(b){l=b,p(a,l)},render:x,addToRenderList:m}}function AM(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=d(null);let o=s,r=!1;function a(y,E,G,W,Q){let at=!1;const X=u(W,G,E);o!==X&&(o=X,c(o.object)),at=f(y,W,G,Q),at&&_(y,W,G,Q),Q!==null&&t.update(Q,n.ELEMENT_ARRAY_BUFFER),(at||r)&&(r=!1,S(y,E,G,W),Q!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(Q).buffer))}function l(){return n.createVertexArray()}function c(y){return n.bindVertexArray(y)}function h(y){return n.deleteVertexArray(y)}function u(y,E,G){const W=G.wireframe===!0;let Q=i[y.id];Q===void 0&&(Q={},i[y.id]=Q);let at=Q[E.id];at===void 0&&(at={},Q[E.id]=at);let X=at[W];return X===void 0&&(X=d(l()),at[W]=X),X}function d(y){const E=[],G=[],W=[];for(let Q=0;Q<e;Q++)E[Q]=0,G[Q]=0,W[Q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:E,enabledAttributes:G,attributeDivisors:W,object:y,attributes:{},index:null}}function f(y,E,G,W){const Q=o.attributes,at=E.attributes;let X=0;const nt=G.getAttributes();for(const $ in nt)if(nt[$].location>=0){const mt=Q[$];let Mt=at[$];if(Mt===void 0&&($==="instanceMatrix"&&y.instanceMatrix&&(Mt=y.instanceMatrix),$==="instanceColor"&&y.instanceColor&&(Mt=y.instanceColor)),mt===void 0||mt.attribute!==Mt||Mt&&mt.data!==Mt.data)return!0;X++}return o.attributesNum!==X||o.index!==W}function _(y,E,G,W){const Q={},at=E.attributes;let X=0;const nt=G.getAttributes();for(const $ in nt)if(nt[$].location>=0){let mt=at[$];mt===void 0&&($==="instanceMatrix"&&y.instanceMatrix&&(mt=y.instanceMatrix),$==="instanceColor"&&y.instanceColor&&(mt=y.instanceColor));const Mt={};Mt.attribute=mt,mt&&mt.data&&(Mt.data=mt.data),Q[$]=Mt,X++}o.attributes=Q,o.attributesNum=X,o.index=W}function x(){const y=o.newAttributes;for(let E=0,G=y.length;E<G;E++)y[E]=0}function m(y){p(y,0)}function p(y,E){const G=o.newAttributes,W=o.enabledAttributes,Q=o.attributeDivisors;G[y]=1,W[y]===0&&(n.enableVertexAttribArray(y),W[y]=1),Q[y]!==E&&(n.vertexAttribDivisor(y,E),Q[y]=E)}function b(){const y=o.newAttributes,E=o.enabledAttributes;for(let G=0,W=E.length;G<W;G++)E[G]!==y[G]&&(n.disableVertexAttribArray(G),E[G]=0)}function M(y,E,G,W,Q,at,X){X===!0?n.vertexAttribIPointer(y,E,G,Q,at):n.vertexAttribPointer(y,E,G,W,Q,at)}function S(y,E,G,W){x();const Q=W.attributes,at=G.getAttributes(),X=E.defaultAttributeValues;for(const nt in at){const $=at[nt];if($.location>=0){let gt=Q[nt];if(gt===void 0&&(nt==="instanceMatrix"&&y.instanceMatrix&&(gt=y.instanceMatrix),nt==="instanceColor"&&y.instanceColor&&(gt=y.instanceColor)),gt!==void 0){const mt=gt.normalized,Mt=gt.itemSize,It=t.get(gt);if(It===void 0)continue;const zt=It.buffer,rt=It.type,ft=It.bytesPerElement,xt=rt===n.INT||rt===n.UNSIGNED_INT||gt.gpuType===vu;if(gt.isInterleavedBufferAttribute){const B=gt.data,lt=B.stride,ot=gt.offset;if(B.isInstancedInterleavedBuffer){for(let ht=0;ht<$.locationSize;ht++)p($.location+ht,B.meshPerAttribute);y.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=B.meshPerAttribute*B.count)}else for(let ht=0;ht<$.locationSize;ht++)m($.location+ht);n.bindBuffer(n.ARRAY_BUFFER,zt);for(let ht=0;ht<$.locationSize;ht++)M($.location+ht,Mt/$.locationSize,rt,mt,lt*ft,(ot+Mt/$.locationSize*ht)*ft,xt)}else{if(gt.isInstancedBufferAttribute){for(let B=0;B<$.locationSize;B++)p($.location+B,gt.meshPerAttribute);y.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=gt.meshPerAttribute*gt.count)}else for(let B=0;B<$.locationSize;B++)m($.location+B);n.bindBuffer(n.ARRAY_BUFFER,zt);for(let B=0;B<$.locationSize;B++)M($.location+B,Mt/$.locationSize,rt,mt,Mt*ft,Mt/$.locationSize*B*ft,xt)}}else if(X!==void 0){const mt=X[nt];if(mt!==void 0)switch(mt.length){case 2:n.vertexAttrib2fv($.location,mt);break;case 3:n.vertexAttrib3fv($.location,mt);break;case 4:n.vertexAttrib4fv($.location,mt);break;default:n.vertexAttrib1fv($.location,mt)}}}}b()}function O(){F();for(const y in i){const E=i[y];for(const G in E){const W=E[G];for(const Q in W)h(W[Q].object),delete W[Q];delete E[G]}delete i[y]}}function I(y){if(i[y.id]===void 0)return;const E=i[y.id];for(const G in E){const W=E[G];for(const Q in W)h(W[Q].object),delete W[Q];delete E[G]}delete i[y.id]}function P(y){for(const E in i){const G=i[E];if(G[y.id]===void 0)continue;const W=G[y.id];for(const Q in W)h(W[Q].object),delete W[Q];delete G[y.id]}}function F(){et(),r=!0,o!==s&&(o=s,c(o.object))}function et(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:F,resetDefaultState:et,dispose:O,releaseStatesOfGeometry:I,releaseStatesOfProgram:P,initAttributes:x,enableAttribute:m,disableUnusedAttributes:b}}function RM(n,t,e){let i;function s(c){i=c}function o(c,h){n.drawArrays(i,c,h),e.update(h,i,1)}function r(c,h,u){u!==0&&(n.drawArraysInstanced(i,c,h,u),e.update(h,i,u))}function a(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,u);let f=0;for(let _=0;_<u;_++)f+=h[_];e.update(f,i,1)}function l(c,h,u,d){if(u===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let _=0;_<c.length;_++)r(c[_],h[_],d[_]);else{f.multiDrawArraysInstancedWEBGL(i,c,0,h,0,d,0,u);let _=0;for(let x=0;x<u;x++)_+=h[x];for(let x=0;x<d.length;x++)e.update(_,i,d[x])}}this.setMode=s,this.render=o,this.renderInstances=r,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function PM(n,t,e,i){let s;function o(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const P=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function r(P){return!(P!==ti&&i.convert(P)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(P){const F=P===yr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(P!==Gi&&i.convert(P)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==Fi&&!F)}function l(P){if(P==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control");if(d===!0){const P=t.get("EXT_clip_control");P.clipControlEXT(P.LOWER_LEFT_EXT,P.ZERO_TO_ONE_EXT)}const f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),b=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),M=n.getParameter(n.MAX_VARYING_VECTORS),S=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),O=_>0,I=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:l,textureFormatReadable:r,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:_,maxTextureSize:x,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:b,maxVaryings:M,maxFragmentUniforms:S,vertexTextures:O,maxSamples:I}}function CM(n){const t=this;let e=null,i=0,s=!1,o=!1;const r=new Ss,a=new le,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||i!==0||s;return s=d,i=u.length,f},this.beginShadows=function(){o=!0,h(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){const _=u.clippingPlanes,x=u.clipIntersection,m=u.clipShadows,p=n.get(u);if(!s||_===null||_.length===0||o&&!m)o?h(null):c();else{const b=o?0:i,M=b*4;let S=p.clippingState||null;l.value=S,S=h(_,d,M,f);for(let O=0;O!==M;++O)S[O]=e[O];p.clippingState=S,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(u,d,f,_){const x=u!==null?u.length:0;let m=null;if(x!==0){if(m=l.value,_!==!0||m===null){const p=f+x*4,b=d.matrixWorldInverse;a.getNormalMatrix(b),(m===null||m.length<p)&&(m=new Float32Array(p));for(let M=0,S=f;M!==x;++M,S+=4)r.copy(u[M]).applyMatrix4(b,a),r.normal.toArray(m,S),m[S+3]=r.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}function IM(n){let t=new WeakMap;function e(r,a){return a===Ma?r.mapping=wo:a===dc&&(r.mapping=So),r}function i(r){if(r&&r.isTexture){const a=r.mapping;if(a===Ma||a===dc)if(t.has(r)){const l=t.get(r).texture;return e(l,r.mapping)}else{const l=r.image;if(l&&l.height>0){const c=new kv(l.height);return c.fromEquirectangularTexture(n,r),t.set(r,c),r.addEventListener("dispose",s),e(c.texture,r.mapping)}else return null}}return r}function s(r){const a=r.target;a.removeEventListener("dispose",s);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function o(){t=new WeakMap}return{get:i,dispose:o}}class Mp extends xp{constructor(t=-1,e=1,i=1,s=-1,o=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=o,this.far=r,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,o,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=o,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let o=i-t,r=i+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=c*this.view.offsetX,r=o+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(o,r,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const oo=4,td=[.125,.215,.35,.446,.526,.582],Ts=20,Cl=new Mp,ed=new he;let Il=null,Ll=0,Dl=0,Ul=!1;const Es=(1+Math.sqrt(5))/2,to=1/Es,nd=[new K(-Es,to,0),new K(Es,to,0),new K(-to,0,Es),new K(to,0,Es),new K(0,Es,-to),new K(0,Es,to),new K(-1,1,-1),new K(1,1,-1),new K(-1,1,1),new K(1,1,1)];class id{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,s=100){Il=this._renderer.getRenderTarget(),Ll=this._renderer.getActiveCubeFace(),Dl=this._renderer.getActiveMipmapLevel(),Ul=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(t,i,s,o),e>0&&this._blur(o,0,0,e),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=rd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=od(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Il,Ll,Dl),this._renderer.xr.enabled=Ul,t.scissorTest=!1,jr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===wo||t.mapping===So?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Il=this._renderer.getRenderTarget(),Ll=this._renderer.getActiveCubeFace(),Dl=this._renderer.getActiveMipmapLevel(),Ul=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:Jn,minFilter:Jn,generateMipmaps:!1,type:yr,format:ti,colorSpace:ds,depthBuffer:!1},s=sd(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=sd(t,e,i);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=LM(o)),this._blurMaterial=DM(o,t,e)}return s}_compileMaterial(t){const e=new R(this._lodPlanes[0],t);this._renderer.compile(e,Cl)}_sceneToCubeUV(t,e,i,s){const a=new Fe(90,1,e,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(ed),h.toneMapping=as,h.autoClear=!1;const f=new zn({name:"PMREM.Background",side:yn,depthWrite:!1,depthTest:!1}),_=new R(new ei,f);let x=!1;const m=t.background;m?m.isColor&&(f.color.copy(m),t.background=null,x=!0):(f.color.copy(ed),x=!0);for(let p=0;p<6;p++){const b=p%3;b===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):b===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));const M=this._cubeSize;jr(s,b*M,p>2?M:0,M,M),h.setRenderTarget(s),x&&h.render(_,a),h.render(t,a)}_.geometry.dispose(),_.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){const i=this._renderer,s=t.mapping===wo||t.mapping===So;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=rd()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=od());const o=s?this._cubemapMaterial:this._equirectMaterial,r=new R(this._lodPlanes[0],o),a=o.uniforms;a.envMap.value=t;const l=this._cubeSize;jr(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(r,Cl)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let o=1;o<s;o++){const r=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),a=nd[(s-o-1)%nd.length];this._blur(t,o-1,o,r,a)}e.autoClear=i}_blur(t,e,i,s,o){const r=this._pingPongRenderTarget;this._halfBlur(t,r,e,i,s,"latitudinal",o),this._halfBlur(r,t,i,i,s,"longitudinal",o)}_halfBlur(t,e,i,s,o,r,a){const l=this._renderer,c=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new R(this._lodPlanes[s],c),d=c.uniforms,f=this._sizeLods[i]-1,_=isFinite(o)?Math.PI/(2*f):2*Math.PI/(2*Ts-1),x=o/_,m=isFinite(o)?1+Math.floor(h*x):Ts;m>Ts&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ts}`);const p=[];let b=0;for(let P=0;P<Ts;++P){const F=P/x,et=Math.exp(-F*F/2);p.push(et),P===0?b+=et:P<m&&(b+=2*et)}for(let P=0;P<p.length;P++)p[P]=p[P]/b;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=r==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:M}=this;d.dTheta.value=_,d.mipInt.value=M-i;const S=this._sizeLods[s],O=3*S*(s>M-oo?s-M+oo:0),I=4*(this._cubeSize-S);jr(e,O,I,3*S,2*S),l.setRenderTarget(e),l.render(u,Cl)}}function LM(n){const t=[],e=[],i=[];let s=n;const o=n-oo+1+td.length;for(let r=0;r<o;r++){const a=Math.pow(2,s);e.push(a);let l=1/a;r>n-oo?l=td[r-n+oo-1]:r===0&&(l=0),i.push(l);const c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,_=6,x=3,m=2,p=1,b=new Float32Array(x*_*f),M=new Float32Array(m*_*f),S=new Float32Array(p*_*f);for(let I=0;I<f;I++){const P=I%3*2/3-1,F=I>2?0:-1,et=[P,F,0,P+2/3,F,0,P+2/3,F+1,0,P,F,0,P+2/3,F+1,0,P,F+1,0];b.set(et,x*_*I),M.set(d,m*_*I);const y=[I,I,I,I,I,I];S.set(y,p*_*I)}const O=new vn;O.setAttribute("position",new _i(b,x)),O.setAttribute("uv",new _i(M,m)),O.setAttribute("faceIndex",new _i(S,p)),t.push(O),s>oo&&s--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function sd(n,t,e){const i=new Ls(n,t,e);return i.texture.mapping=Ga,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function jr(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function DM(n,t,e){const i=new Float32Array(Ts),s=new K(0,1,0);return new Ln({name:"SphericalGaussianBlur",defines:{n:Ts,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Ru(),fragmentShader:`

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
		`,blending:rs,depthTest:!1,depthWrite:!1})}function od(){return new Ln({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ru(),fragmentShader:`

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
		`,blending:rs,depthTest:!1,depthWrite:!1})}function rd(){return new Ln({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ru(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:rs,depthTest:!1,depthWrite:!1})}function Ru(){return`

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
	`}function UM(n){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Ma||l===dc,h=l===wo||l===So;if(c||h){let u=t.get(a);const d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new id(n)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{const f=a.image;return c&&f&&f.height>0||h&&f&&s(f)?(e===null&&(e=new id(n)),u=c?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",o),u.texture):null}}}return a}function s(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function o(a){const l=a.target;l.removeEventListener("dispose",o);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function r(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:r}}function NM(n){const t={};function e(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const s=e(i);return s===null&&fa("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function FM(n,t,e,i){const s={},o=new WeakMap;function r(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const _ in d.attributes)t.remove(d.attributes[_]);for(const _ in d.morphAttributes){const x=d.morphAttributes[_];for(let m=0,p=x.length;m<p;m++)t.remove(x[m])}d.removeEventListener("dispose",r),delete s[d.id];const f=o.get(d);f&&(t.remove(f),o.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",r),s[d.id]=!0,e.memory.geometries++),d}function l(u){const d=u.attributes;for(const _ in d)t.update(d[_],n.ARRAY_BUFFER);const f=u.morphAttributes;for(const _ in f){const x=f[_];for(let m=0,p=x.length;m<p;m++)t.update(x[m],n.ARRAY_BUFFER)}}function c(u){const d=[],f=u.index,_=u.attributes.position;let x=0;if(f!==null){const b=f.array;x=f.version;for(let M=0,S=b.length;M<S;M+=3){const O=b[M+0],I=b[M+1],P=b[M+2];d.push(O,I,I,P,P,O)}}else if(_!==void 0){const b=_.array;x=_.version;for(let M=0,S=b.length/3-1;M<S;M+=3){const O=M+0,I=M+1,P=M+2;d.push(O,I,I,P,P,O)}}else return;const m=new(up(d)?_p:gp)(d,1);m.version=x;const p=o.get(u);p&&t.remove(p),o.set(u,m)}function h(u){const d=o.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return o.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function OM(n,t,e){let i;function s(d){i=d}let o,r;function a(d){o=d.type,r=d.bytesPerElement}function l(d,f){n.drawElements(i,f,o,d*r),e.update(f,i,1)}function c(d,f,_){_!==0&&(n.drawElementsInstanced(i,f,o,d*r,_),e.update(f,i,_))}function h(d,f,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,o,d,0,_);let m=0;for(let p=0;p<_;p++)m+=f[p];e.update(m,i,1)}function u(d,f,_,x){if(_===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)c(d[p]/r,f[p],x[p]);else{m.multiDrawElementsInstancedWEBGL(i,f,0,o,d,0,x,0,_);let p=0;for(let b=0;b<_;b++)p+=f[b];for(let b=0;b<x.length;b++)e.update(p,i,x[b])}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function BM(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(o,r,a){switch(e.calls++,r){case n.TRIANGLES:e.triangles+=a*(o/3);break;case n.LINES:e.lines+=a*(o/2);break;case n.LINE_STRIP:e.lines+=a*(o-1);break;case n.LINE_LOOP:e.lines+=a*o;break;case n.POINTS:e.points+=a*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function zM(n,t,e){const i=new WeakMap,s=new Pe;function o(r,a,l){const c=r.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let d=i.get(a);if(d===void 0||d.count!==u){let y=function(){F.dispose(),i.delete(a),a.removeEventListener("dispose",y)};var f=y;d!==void 0&&d.texture.dispose();const _=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],b=a.morphAttributes.normal||[],M=a.morphAttributes.color||[];let S=0;_===!0&&(S=1),x===!0&&(S=2),m===!0&&(S=3);let O=a.attributes.position.count*S,I=1;O>t.maxTextureSize&&(I=Math.ceil(O/t.maxTextureSize),O=t.maxTextureSize);const P=new Float32Array(O*I*4*u),F=new dp(P,O,I,u);F.type=Fi,F.needsUpdate=!0;const et=S*4;for(let E=0;E<u;E++){const G=p[E],W=b[E],Q=M[E],at=O*I*4*E;for(let X=0;X<G.count;X++){const nt=X*et;_===!0&&(s.fromBufferAttribute(G,X),P[at+nt+0]=s.x,P[at+nt+1]=s.y,P[at+nt+2]=s.z,P[at+nt+3]=0),x===!0&&(s.fromBufferAttribute(W,X),P[at+nt+4]=s.x,P[at+nt+5]=s.y,P[at+nt+6]=s.z,P[at+nt+7]=0),m===!0&&(s.fromBufferAttribute(Q,X),P[at+nt+8]=s.x,P[at+nt+9]=s.y,P[at+nt+10]=s.z,P[at+nt+11]=Q.itemSize===4?s.w:1)}}d={count:u,texture:F,size:new Bt(O,I)},i.set(a,d),a.addEventListener("dispose",y)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",r.morphTexture,e);else{let _=0;for(let m=0;m<c.length;m++)_+=c[m];const x=a.morphTargetsRelative?1:1-_;l.getUniforms().setValue(n,"morphTargetBaseInfluence",x),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:o}}function GM(n,t,e,i){let s=new WeakMap;function o(l){const c=i.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return u}function r(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:o,dispose:r}}class wp extends _n{constructor(t,e,i,s,o,r,a,l,c,h=po){if(h!==po&&h!==bo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===po&&(i=Is),i===void 0&&h===bo&&(i=Eo),super(null,s,o,r,a,l,h,i,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Bn,this.minFilter=l!==void 0?l:Bn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Sp=new _n,ad=new wp(1,1),Ep=new dp,bp=new Tv,Tp=new Tu,ld=[],cd=[],ud=new Float32Array(16),hd=new Float32Array(9),dd=new Float32Array(4);function Co(n,t,e){const i=n[0];if(i<=0||i>0)return n;const s=t*e;let o=ld[s];if(o===void 0&&(o=new Float32Array(s),ld[s]=o),t!==0){i.toArray(o,0);for(let r=1,a=0;r!==t;++r)a+=e,n[r].toArray(o,a)}return o}function Ke(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Ze(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Wa(n,t){let e=cd[t];e===void 0&&(e=new Int32Array(t),cd[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function HM(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function kM(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ke(e,t))return;n.uniform2fv(this.addr,t),Ze(e,t)}}function VM(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ke(e,t))return;n.uniform3fv(this.addr,t),Ze(e,t)}}function WM(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ke(e,t))return;n.uniform4fv(this.addr,t),Ze(e,t)}}function XM(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Ke(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Ze(e,t)}else{if(Ke(e,i))return;dd.set(i),n.uniformMatrix2fv(this.addr,!1,dd),Ze(e,i)}}function qM(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Ke(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Ze(e,t)}else{if(Ke(e,i))return;hd.set(i),n.uniformMatrix3fv(this.addr,!1,hd),Ze(e,i)}}function YM(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Ke(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Ze(e,t)}else{if(Ke(e,i))return;ud.set(i),n.uniformMatrix4fv(this.addr,!1,ud),Ze(e,i)}}function $M(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function jM(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ke(e,t))return;n.uniform2iv(this.addr,t),Ze(e,t)}}function KM(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ke(e,t))return;n.uniform3iv(this.addr,t),Ze(e,t)}}function ZM(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ke(e,t))return;n.uniform4iv(this.addr,t),Ze(e,t)}}function JM(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function QM(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ke(e,t))return;n.uniform2uiv(this.addr,t),Ze(e,t)}}function tw(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ke(e,t))return;n.uniform3uiv(this.addr,t),Ze(e,t)}}function ew(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ke(e,t))return;n.uniform4uiv(this.addr,t),Ze(e,t)}}function nw(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let o;this.type===n.SAMPLER_2D_SHADOW?(ad.compareFunction=cp,o=ad):o=Sp,e.setTexture2D(t||o,s)}function iw(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||bp,s)}function sw(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||Tp,s)}function ow(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||Ep,s)}function rw(n){switch(n){case 5126:return HM;case 35664:return kM;case 35665:return VM;case 35666:return WM;case 35674:return XM;case 35675:return qM;case 35676:return YM;case 5124:case 35670:return $M;case 35667:case 35671:return jM;case 35668:case 35672:return KM;case 35669:case 35673:return ZM;case 5125:return JM;case 36294:return QM;case 36295:return tw;case 36296:return ew;case 35678:case 36198:case 36298:case 36306:case 35682:return nw;case 35679:case 36299:case 36307:return iw;case 35680:case 36300:case 36308:case 36293:return sw;case 36289:case 36303:case 36311:case 36292:return ow}}function aw(n,t){n.uniform1fv(this.addr,t)}function lw(n,t){const e=Co(t,this.size,2);n.uniform2fv(this.addr,e)}function cw(n,t){const e=Co(t,this.size,3);n.uniform3fv(this.addr,e)}function uw(n,t){const e=Co(t,this.size,4);n.uniform4fv(this.addr,e)}function hw(n,t){const e=Co(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function dw(n,t){const e=Co(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function fw(n,t){const e=Co(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function pw(n,t){n.uniform1iv(this.addr,t)}function mw(n,t){n.uniform2iv(this.addr,t)}function gw(n,t){n.uniform3iv(this.addr,t)}function _w(n,t){n.uniform4iv(this.addr,t)}function vw(n,t){n.uniform1uiv(this.addr,t)}function xw(n,t){n.uniform2uiv(this.addr,t)}function yw(n,t){n.uniform3uiv(this.addr,t)}function Mw(n,t){n.uniform4uiv(this.addr,t)}function ww(n,t,e){const i=this.cache,s=t.length,o=Wa(e,s);Ke(i,o)||(n.uniform1iv(this.addr,o),Ze(i,o));for(let r=0;r!==s;++r)e.setTexture2D(t[r]||Sp,o[r])}function Sw(n,t,e){const i=this.cache,s=t.length,o=Wa(e,s);Ke(i,o)||(n.uniform1iv(this.addr,o),Ze(i,o));for(let r=0;r!==s;++r)e.setTexture3D(t[r]||bp,o[r])}function Ew(n,t,e){const i=this.cache,s=t.length,o=Wa(e,s);Ke(i,o)||(n.uniform1iv(this.addr,o),Ze(i,o));for(let r=0;r!==s;++r)e.setTextureCube(t[r]||Tp,o[r])}function bw(n,t,e){const i=this.cache,s=t.length,o=Wa(e,s);Ke(i,o)||(n.uniform1iv(this.addr,o),Ze(i,o));for(let r=0;r!==s;++r)e.setTexture2DArray(t[r]||Ep,o[r])}function Tw(n){switch(n){case 5126:return aw;case 35664:return lw;case 35665:return cw;case 35666:return uw;case 35674:return hw;case 35675:return dw;case 35676:return fw;case 5124:case 35670:return pw;case 35667:case 35671:return mw;case 35668:case 35672:return gw;case 35669:case 35673:return _w;case 5125:return vw;case 36294:return xw;case 36295:return yw;case 36296:return Mw;case 35678:case 36198:case 36298:case 36306:case 35682:return ww;case 35679:case 36299:case 36307:return Sw;case 35680:case 36300:case 36308:case 36293:return Ew;case 36289:case 36303:case 36311:case 36292:return bw}}class Aw{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=rw(e.type)}}class Rw{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Tw(e.type)}}class Pw{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const s=this.seq;for(let o=0,r=s.length;o!==r;++o){const a=s[o];a.setValue(t,e[a.id],i)}}}const Nl=/(\w+)(\])?(\[|\.)?/g;function fd(n,t){n.seq.push(t),n.map[t.id]=t}function Cw(n,t,e){const i=n.name,s=i.length;for(Nl.lastIndex=0;;){const o=Nl.exec(i),r=Nl.lastIndex;let a=o[1];const l=o[2]==="]",c=o[3];if(l&&(a=a|0),c===void 0||c==="["&&r+2===s){fd(e,c===void 0?new Aw(a,n,t):new Rw(a,n,t));break}else{let u=e.map[a];u===void 0&&(u=new Pw(a),fd(e,u)),e=u}}}class pa{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const o=t.getActiveUniform(e,s),r=t.getUniformLocation(e,o.name);Cw(o,r,this)}}setValue(t,e,i,s){const o=this.map[e];o!==void 0&&o.setValue(t,i,s)}setOptional(t,e,i){const s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let o=0,r=e.length;o!==r;++o){const a=e[o],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){const i=[];for(let s=0,o=t.length;s!==o;++s){const r=t[s];r.id in e&&i.push(r)}return i}}function pd(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const Iw=37297;let Lw=0;function Dw(n,t){const e=n.split(`
`),i=[],s=Math.max(t-6,0),o=Math.min(t+6,e.length);for(let r=s;r<o;r++){const a=r+1;i.push(`${a===t?">":" "} ${a}: ${e[r]}`)}return i.join(`
`)}function Uw(n){const t=we.getPrimaries(we.workingColorSpace),e=we.getPrimaries(n);let i;switch(t===e?i="":t===Ea&&e===Sa?i="LinearDisplayP3ToLinearSRGB":t===Sa&&e===Ea&&(i="LinearSRGBToLinearDisplayP3"),n){case ds:case Ha:return[i,"LinearTransferOETF"];case Kn:case Eu:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function md(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),s=n.getShaderInfoLog(t).trim();if(i&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const r=parseInt(o[1]);return e.toUpperCase()+`

`+s+`

`+Dw(n.getShaderSource(t),r)}else return s}function Nw(n,t){const e=Uw(t);return`vec4 ${n}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function Fw(n,t){let e;switch(t){case B_:e="Linear";break;case z_:e="Reinhard";break;case G_:e="Cineon";break;case Kf:e="ACESFilmic";break;case k_:e="AgX";break;case V_:e="Neutral";break;case H_:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Kr=new K;function Ow(){we.getLuminanceCoefficients(Kr);const n=Kr.x.toFixed(4),t=Kr.y.toFixed(4),e=Kr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Bw(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Wo).join(`
`)}function zw(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function Gw(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const o=n.getActiveAttrib(t,s),r=o.name;let a=1;o.type===n.FLOAT_MAT2&&(a=2),o.type===n.FLOAT_MAT3&&(a=3),o.type===n.FLOAT_MAT4&&(a=4),e[r]={type:o.type,location:n.getAttribLocation(t,r),locationSize:a}}return e}function Wo(n){return n!==""}function gd(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function _d(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Hw=/^[ \t]*#include +<([\w\d./]+)>/gm;function Gc(n){return n.replace(Hw,Vw)}const kw=new Map;function Vw(n,t){let e=ae[t];if(e===void 0){const i=kw.get(t);if(i!==void 0)e=ae[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Gc(e)}const Ww=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function vd(n){return n.replace(Ww,Xw)}function Xw(n,t,e,i){let s="";for(let o=parseInt(t);o<parseInt(e);o++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return s}function xd(n){let t=`precision ${n.precision} float;
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
#define LOW_PRECISION`),t}function qw(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===$f?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===__?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Di&&(t="SHADOWMAP_TYPE_VSM"),t}function Yw(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case wo:case So:t="ENVMAP_TYPE_CUBE";break;case Ga:t="ENVMAP_TYPE_CUBE_UV";break}return t}function $w(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case So:t="ENVMAP_MODE_REFRACTION";break}return t}function jw(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case jf:t="ENVMAP_BLENDING_MULTIPLY";break;case F_:t="ENVMAP_BLENDING_MIX";break;case O_:t="ENVMAP_BLENDING_ADD";break}return t}function Kw(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function Zw(n,t,e,i){const s=n.getContext(),o=e.defines;let r=e.vertexShader,a=e.fragmentShader;const l=qw(e),c=Yw(e),h=$w(e),u=jw(e),d=Kw(e),f=Bw(e),_=zw(o),x=s.createProgram();let m,p,b=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Wo).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Wo).join(`
`),p.length>0&&(p+=`
`)):(m=[xd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Wo).join(`
`),p=[xd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==as?"#define TONE_MAPPING":"",e.toneMapping!==as?ae.tonemapping_pars_fragment:"",e.toneMapping!==as?Fw("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ae.colorspace_pars_fragment,Nw("linearToOutputTexel",e.outputColorSpace),Ow(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Wo).join(`
`)),r=Gc(r),r=gd(r,e),r=_d(r,e),a=Gc(a),a=gd(a,e),a=_d(a,e),r=vd(r),a=vd(a),e.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Nh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Nh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const M=b+m+r,S=b+p+a,O=pd(s,s.VERTEX_SHADER,M),I=pd(s,s.FRAGMENT_SHADER,S);s.attachShader(x,O),s.attachShader(x,I),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function P(E){if(n.debug.checkShaderErrors){const G=s.getProgramInfoLog(x).trim(),W=s.getShaderInfoLog(O).trim(),Q=s.getShaderInfoLog(I).trim();let at=!0,X=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(at=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,x,O,I);else{const nt=md(s,O,"vertex"),$=md(s,I,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+E.name+`
Material Type: `+E.type+`

Program Info Log: `+G+`
`+nt+`
`+$)}else G!==""?console.warn("THREE.WebGLProgram: Program Info Log:",G):(W===""||Q==="")&&(X=!1);X&&(E.diagnostics={runnable:at,programLog:G,vertexShader:{log:W,prefix:m},fragmentShader:{log:Q,prefix:p}})}s.deleteShader(O),s.deleteShader(I),F=new pa(s,x),et=Gw(s,x)}let F;this.getUniforms=function(){return F===void 0&&P(this),F};let et;this.getAttributes=function(){return et===void 0&&P(this),et};let y=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=s.getProgramParameter(x,Iw)),y},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Lw++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=O,this.fragmentShader=I,this}let Jw=0;class Qw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),o=this._getShaderStage(i),r=this._getShaderCacheForMaterial(t);return r.has(s)===!1&&(r.add(s),s.usedTimes++),r.has(o)===!1&&(r.add(o),o.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new tS(t),e.set(t,i)),i}}class tS{constructor(t){this.id=Jw++,this.code=t,this.usedTimes=0}}function eS(n,t,e,i,s,o,r){const a=new pp,l=new Qw,c=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.reverseDepthBuffer,f=s.vertexTextures;let _=s.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(y){return c.add(y),y===0?"uv":`uv${y}`}function p(y,E,G,W,Q){const at=W.fog,X=Q.geometry,nt=y.isMeshStandardMaterial?W.environment:null,$=(y.isMeshStandardMaterial?e:t).get(y.envMap||nt),gt=$&&$.mapping===Ga?$.image.height:null,mt=x[y.type];y.precision!==null&&(_=s.getMaxPrecision(y.precision),_!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",_,"instead."));const Mt=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,It=Mt!==void 0?Mt.length:0;let zt=0;X.morphAttributes.position!==void 0&&(zt=1),X.morphAttributes.normal!==void 0&&(zt=2),X.morphAttributes.color!==void 0&&(zt=3);let rt,ft,xt,B;if(mt){const ne=mi[mt];rt=ne.vertexShader,ft=ne.fragmentShader}else rt=y.vertexShader,ft=y.fragmentShader,l.update(y),xt=l.getVertexShaderID(y),B=l.getFragmentShaderID(y);const lt=n.getRenderTarget(),ot=Q.isInstancedMesh===!0,ht=Q.isBatchedMesh===!0,wt=!!y.map,it=!!y.matcap,g=!!$,T=!!y.aoMap,L=!!y.lightMap,N=!!y.bumpMap,U=!!y.normalMap,Y=!!y.displacementMap,Z=!!y.emissiveMap,w=!!y.metalnessMap,v=!!y.roughnessMap,C=y.anisotropy>0,q=y.clearcoat>0,H=y.dispersion>0,V=y.iridescence>0,ut=y.sheen>0,ct=y.transmission>0,pt=C&&!!y.anisotropyMap,Rt=q&&!!y.clearcoatMap,dt=q&&!!y.clearcoatNormalMap,yt=q&&!!y.clearcoatRoughnessMap,Pt=V&&!!y.iridescenceMap,Lt=V&&!!y.iridescenceThicknessMap,bt=ut&&!!y.sheenColorMap,Vt=ut&&!!y.sheenRoughnessMap,Dt=!!y.specularMap,kt=!!y.specularColorMap,z=!!y.specularIntensityMap,_t=ct&&!!y.transmissionMap,st=ct&&!!y.thicknessMap,tt=!!y.gradientMap,St=!!y.alphaMap,Et=y.alphaTest>0,Ht=!!y.alphaHash,jt=!!y.extensions;let Qt=as;y.toneMapped&&(lt===null||lt.isXRRenderTarget===!0)&&(Qt=n.toneMapping);const Zt={shaderID:mt,shaderType:y.type,shaderName:y.name,vertexShader:rt,fragmentShader:ft,defines:y.defines,customVertexShaderID:xt,customFragmentShaderID:B,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:_,batching:ht,batchingColor:ht&&Q._colorsTexture!==null,instancing:ot,instancingColor:ot&&Q.instanceColor!==null,instancingMorph:ot&&Q.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:lt===null?n.outputColorSpace:lt.isXRRenderTarget===!0?lt.texture.colorSpace:ds,alphaToCoverage:!!y.alphaToCoverage,map:wt,matcap:it,envMap:g,envMapMode:g&&$.mapping,envMapCubeUVHeight:gt,aoMap:T,lightMap:L,bumpMap:N,normalMap:U,displacementMap:f&&Y,emissiveMap:Z,normalMapObjectSpace:U&&y.normalMapType===Y_,normalMapTangentSpace:U&&y.normalMapType===lp,metalnessMap:w,roughnessMap:v,anisotropy:C,anisotropyMap:pt,clearcoat:q,clearcoatMap:Rt,clearcoatNormalMap:dt,clearcoatRoughnessMap:yt,dispersion:H,iridescence:V,iridescenceMap:Pt,iridescenceThicknessMap:Lt,sheen:ut,sheenColorMap:bt,sheenRoughnessMap:Vt,specularMap:Dt,specularColorMap:kt,specularIntensityMap:z,transmission:ct,transmissionMap:_t,thicknessMap:st,gradientMap:tt,opaque:y.transparent===!1&&y.blending===fo&&y.alphaToCoverage===!1,alphaMap:St,alphaTest:Et,alphaHash:Ht,combine:y.combine,mapUv:wt&&m(y.map.channel),aoMapUv:T&&m(y.aoMap.channel),lightMapUv:L&&m(y.lightMap.channel),bumpMapUv:N&&m(y.bumpMap.channel),normalMapUv:U&&m(y.normalMap.channel),displacementMapUv:Y&&m(y.displacementMap.channel),emissiveMapUv:Z&&m(y.emissiveMap.channel),metalnessMapUv:w&&m(y.metalnessMap.channel),roughnessMapUv:v&&m(y.roughnessMap.channel),anisotropyMapUv:pt&&m(y.anisotropyMap.channel),clearcoatMapUv:Rt&&m(y.clearcoatMap.channel),clearcoatNormalMapUv:dt&&m(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:yt&&m(y.clearcoatRoughnessMap.channel),iridescenceMapUv:Pt&&m(y.iridescenceMap.channel),iridescenceThicknessMapUv:Lt&&m(y.iridescenceThicknessMap.channel),sheenColorMapUv:bt&&m(y.sheenColorMap.channel),sheenRoughnessMapUv:Vt&&m(y.sheenRoughnessMap.channel),specularMapUv:Dt&&m(y.specularMap.channel),specularColorMapUv:kt&&m(y.specularColorMap.channel),specularIntensityMapUv:z&&m(y.specularIntensityMap.channel),transmissionMapUv:_t&&m(y.transmissionMap.channel),thicknessMapUv:st&&m(y.thicknessMap.channel),alphaMapUv:St&&m(y.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(U||C),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:Q.isPoints===!0&&!!X.attributes.uv&&(wt||St),fog:!!at,useFog:y.fog===!0,fogExp2:!!at&&at.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:d,skinning:Q.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:It,morphTextureStride:zt,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:y.dithering,shadowMapEnabled:n.shadowMap.enabled&&G.length>0,shadowMapType:n.shadowMap.type,toneMapping:Qt,decodeVideoTexture:wt&&y.map.isVideoTexture===!0&&we.getTransfer(y.map.colorSpace)===Ue,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===ge,flipSided:y.side===yn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:jt&&y.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(jt&&y.extensions.multiDraw===!0||ht)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Zt.vertexUv1s=c.has(1),Zt.vertexUv2s=c.has(2),Zt.vertexUv3s=c.has(3),c.clear(),Zt}function b(y){const E=[];if(y.shaderID?E.push(y.shaderID):(E.push(y.customVertexShaderID),E.push(y.customFragmentShaderID)),y.defines!==void 0)for(const G in y.defines)E.push(G),E.push(y.defines[G]);return y.isRawShaderMaterial===!1&&(M(E,y),S(E,y),E.push(n.outputColorSpace)),E.push(y.customProgramCacheKey),E.join()}function M(y,E){y.push(E.precision),y.push(E.outputColorSpace),y.push(E.envMapMode),y.push(E.envMapCubeUVHeight),y.push(E.mapUv),y.push(E.alphaMapUv),y.push(E.lightMapUv),y.push(E.aoMapUv),y.push(E.bumpMapUv),y.push(E.normalMapUv),y.push(E.displacementMapUv),y.push(E.emissiveMapUv),y.push(E.metalnessMapUv),y.push(E.roughnessMapUv),y.push(E.anisotropyMapUv),y.push(E.clearcoatMapUv),y.push(E.clearcoatNormalMapUv),y.push(E.clearcoatRoughnessMapUv),y.push(E.iridescenceMapUv),y.push(E.iridescenceThicknessMapUv),y.push(E.sheenColorMapUv),y.push(E.sheenRoughnessMapUv),y.push(E.specularMapUv),y.push(E.specularColorMapUv),y.push(E.specularIntensityMapUv),y.push(E.transmissionMapUv),y.push(E.thicknessMapUv),y.push(E.combine),y.push(E.fogExp2),y.push(E.sizeAttenuation),y.push(E.morphTargetsCount),y.push(E.morphAttributeCount),y.push(E.numDirLights),y.push(E.numPointLights),y.push(E.numSpotLights),y.push(E.numSpotLightMaps),y.push(E.numHemiLights),y.push(E.numRectAreaLights),y.push(E.numDirLightShadows),y.push(E.numPointLightShadows),y.push(E.numSpotLightShadows),y.push(E.numSpotLightShadowsWithMaps),y.push(E.numLightProbes),y.push(E.shadowMapType),y.push(E.toneMapping),y.push(E.numClippingPlanes),y.push(E.numClipIntersection),y.push(E.depthPacking)}function S(y,E){a.disableAll(),E.supportsVertexTextures&&a.enable(0),E.instancing&&a.enable(1),E.instancingColor&&a.enable(2),E.instancingMorph&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),E.anisotropy&&a.enable(17),E.alphaHash&&a.enable(18),E.batching&&a.enable(19),E.dispersion&&a.enable(20),E.batchingColor&&a.enable(21),y.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reverseDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.alphaToCoverage&&a.enable(20),y.push(a.mask)}function O(y){const E=x[y.type];let G;if(E){const W=mi[E];G=Bv.clone(W.uniforms)}else G=y.uniforms;return G}function I(y,E){let G;for(let W=0,Q=h.length;W<Q;W++){const at=h[W];if(at.cacheKey===E){G=at,++G.usedTimes;break}}return G===void 0&&(G=new Zw(n,E,y,o),h.push(G)),G}function P(y){if(--y.usedTimes===0){const E=h.indexOf(y);h[E]=h[h.length-1],h.pop(),y.destroy()}}function F(y){l.remove(y)}function et(){l.dispose()}return{getParameters:p,getProgramCacheKey:b,getUniforms:O,acquireProgram:I,releaseProgram:P,releaseShaderCache:F,programs:h,dispose:et}}function nS(){let n=new WeakMap;function t(r){return n.has(r)}function e(r){let a=n.get(r);return a===void 0&&(a={},n.set(r,a)),a}function i(r){n.delete(r)}function s(r,a,l){n.get(r)[a]=l}function o(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:o}}function iS(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function yd(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function Md(){const n=[];let t=0;const e=[],i=[],s=[];function o(){t=0,e.length=0,i.length=0,s.length=0}function r(u,d,f,_,x,m){let p=n[t];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:_,renderOrder:u.renderOrder,z:x,group:m},n[t]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=_,p.renderOrder=u.renderOrder,p.z=x,p.group=m),t++,p}function a(u,d,f,_,x,m){const p=r(u,d,f,_,x,m);f.transmission>0?i.push(p):f.transparent===!0?s.push(p):e.push(p)}function l(u,d,f,_,x,m){const p=r(u,d,f,_,x,m);f.transmission>0?i.unshift(p):f.transparent===!0?s.unshift(p):e.unshift(p)}function c(u,d){e.length>1&&e.sort(u||iS),i.length>1&&i.sort(d||yd),s.length>1&&s.sort(d||yd)}function h(){for(let u=t,d=n.length;u<d;u++){const f=n[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:i,transparent:s,init:o,push:a,unshift:l,finish:h,sort:c}}function sS(){let n=new WeakMap;function t(i,s){const o=n.get(i);let r;return o===void 0?(r=new Md,n.set(i,[r])):s>=o.length?(r=new Md,o.push(r)):r=o[s],r}function e(){n=new WeakMap}return{get:t,dispose:e}}function oS(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new K,color:new he};break;case"SpotLight":e={position:new K,direction:new K,color:new he,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new K,color:new he,distance:0,decay:0};break;case"HemisphereLight":e={direction:new K,skyColor:new he,groundColor:new he};break;case"RectAreaLight":e={color:new he,position:new K,halfWidth:new K,halfHeight:new K};break}return n[t.id]=e,e}}}function rS(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Bt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Bt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Bt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let aS=0;function lS(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function cS(n){const t=new oS,e=rS(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new K);const s=new K,o=new Ne,r=new Ne;function a(c){let h=0,u=0,d=0;for(let et=0;et<9;et++)i.probe[et].set(0,0,0);let f=0,_=0,x=0,m=0,p=0,b=0,M=0,S=0,O=0,I=0,P=0;c.sort(lS);for(let et=0,y=c.length;et<y;et++){const E=c[et],G=E.color,W=E.intensity,Q=E.distance,at=E.shadow&&E.shadow.map?E.shadow.map.texture:null;if(E.isAmbientLight)h+=G.r*W,u+=G.g*W,d+=G.b*W;else if(E.isLightProbe){for(let X=0;X<9;X++)i.probe[X].addScaledVector(E.sh.coefficients[X],W);P++}else if(E.isDirectionalLight){const X=t.get(E);if(X.color.copy(E.color).multiplyScalar(E.intensity),E.castShadow){const nt=E.shadow,$=e.get(E);$.shadowIntensity=nt.intensity,$.shadowBias=nt.bias,$.shadowNormalBias=nt.normalBias,$.shadowRadius=nt.radius,$.shadowMapSize=nt.mapSize,i.directionalShadow[f]=$,i.directionalShadowMap[f]=at,i.directionalShadowMatrix[f]=E.shadow.matrix,b++}i.directional[f]=X,f++}else if(E.isSpotLight){const X=t.get(E);X.position.setFromMatrixPosition(E.matrixWorld),X.color.copy(G).multiplyScalar(W),X.distance=Q,X.coneCos=Math.cos(E.angle),X.penumbraCos=Math.cos(E.angle*(1-E.penumbra)),X.decay=E.decay,i.spot[x]=X;const nt=E.shadow;if(E.map&&(i.spotLightMap[O]=E.map,O++,nt.updateMatrices(E),E.castShadow&&I++),i.spotLightMatrix[x]=nt.matrix,E.castShadow){const $=e.get(E);$.shadowIntensity=nt.intensity,$.shadowBias=nt.bias,$.shadowNormalBias=nt.normalBias,$.shadowRadius=nt.radius,$.shadowMapSize=nt.mapSize,i.spotShadow[x]=$,i.spotShadowMap[x]=at,S++}x++}else if(E.isRectAreaLight){const X=t.get(E);X.color.copy(G).multiplyScalar(W),X.halfWidth.set(E.width*.5,0,0),X.halfHeight.set(0,E.height*.5,0),i.rectArea[m]=X,m++}else if(E.isPointLight){const X=t.get(E);if(X.color.copy(E.color).multiplyScalar(E.intensity),X.distance=E.distance,X.decay=E.decay,E.castShadow){const nt=E.shadow,$=e.get(E);$.shadowIntensity=nt.intensity,$.shadowBias=nt.bias,$.shadowNormalBias=nt.normalBias,$.shadowRadius=nt.radius,$.shadowMapSize=nt.mapSize,$.shadowCameraNear=nt.camera.near,$.shadowCameraFar=nt.camera.far,i.pointShadow[_]=$,i.pointShadowMap[_]=at,i.pointShadowMatrix[_]=E.shadow.matrix,M++}i.point[_]=X,_++}else if(E.isHemisphereLight){const X=t.get(E);X.skyColor.copy(E.color).multiplyScalar(W),X.groundColor.copy(E.groundColor).multiplyScalar(W),i.hemi[p]=X,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ot.LTC_FLOAT_1,i.rectAreaLTC2=Ot.LTC_FLOAT_2):(i.rectAreaLTC1=Ot.LTC_HALF_1,i.rectAreaLTC2=Ot.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=d;const F=i.hash;(F.directionalLength!==f||F.pointLength!==_||F.spotLength!==x||F.rectAreaLength!==m||F.hemiLength!==p||F.numDirectionalShadows!==b||F.numPointShadows!==M||F.numSpotShadows!==S||F.numSpotMaps!==O||F.numLightProbes!==P)&&(i.directional.length=f,i.spot.length=x,i.rectArea.length=m,i.point.length=_,i.hemi.length=p,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=b,i.pointShadowMatrix.length=M,i.spotLightMatrix.length=S+O-I,i.spotLightMap.length=O,i.numSpotLightShadowsWithMaps=I,i.numLightProbes=P,F.directionalLength=f,F.pointLength=_,F.spotLength=x,F.rectAreaLength=m,F.hemiLength=p,F.numDirectionalShadows=b,F.numPointShadows=M,F.numSpotShadows=S,F.numSpotMaps=O,F.numLightProbes=P,i.version=aS++)}function l(c,h){let u=0,d=0,f=0,_=0,x=0;const m=h.matrixWorldInverse;for(let p=0,b=c.length;p<b;p++){const M=c[p];if(M.isDirectionalLight){const S=i.directional[u];S.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(m),u++}else if(M.isSpotLight){const S=i.spot[f];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(m),f++}else if(M.isRectAreaLight){const S=i.rectArea[_];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(m),r.identity(),o.copy(M.matrixWorld),o.premultiply(m),r.extractRotation(o),S.halfWidth.set(M.width*.5,0,0),S.halfHeight.set(0,M.height*.5,0),S.halfWidth.applyMatrix4(r),S.halfHeight.applyMatrix4(r),_++}else if(M.isPointLight){const S=i.point[d];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(m),d++}else if(M.isHemisphereLight){const S=i.hemi[x];S.direction.setFromMatrixPosition(M.matrixWorld),S.direction.transformDirection(m),x++}}}return{setup:a,setupView:l,state:i}}function wd(n){const t=new cS(n),e=[],i=[];function s(h){c.camera=h,e.length=0,i.length=0}function o(h){e.push(h)}function r(h){i.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:o,pushShadow:r}}function uS(n){let t=new WeakMap;function e(s,o=0){const r=t.get(s);let a;return r===void 0?(a=new wd(n),t.set(s,[a])):o>=r.length?(a=new wd(n),r.push(a)):a=r[o],a}function i(){t=new WeakMap}return{get:e,dispose:i}}class hS extends Po{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=X_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class dS extends Po{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const fS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,pS=`uniform sampler2D shadow_pass;
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
}`;function mS(n,t,e){let i=new Au;const s=new Bt,o=new Bt,r=new Pe,a=new hS({depthPacking:q_}),l=new dS,c={},h=e.maxTextureSize,u={[cs]:yn,[yn]:cs,[ge]:ge},d=new Ln({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Bt},radius:{value:4}},vertexShader:fS,fragmentShader:pS}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const _=new vn;_.setAttribute("position",new _i(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new R(_,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=$f;let p=this.type;this.render=function(I,P,F){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||I.length===0)return;const et=n.getRenderTarget(),y=n.getActiveCubeFace(),E=n.getActiveMipmapLevel(),G=n.state;G.setBlending(rs),G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);const W=p!==Di&&this.type===Di,Q=p===Di&&this.type!==Di;for(let at=0,X=I.length;at<X;at++){const nt=I[at],$=nt.shadow;if($===void 0){console.warn("THREE.WebGLShadowMap:",nt,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;s.copy($.mapSize);const gt=$.getFrameExtents();if(s.multiply(gt),o.copy($.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(o.x=Math.floor(h/gt.x),s.x=o.x*gt.x,$.mapSize.x=o.x),s.y>h&&(o.y=Math.floor(h/gt.y),s.y=o.y*gt.y,$.mapSize.y=o.y)),$.map===null||W===!0||Q===!0){const Mt=this.type!==Di?{minFilter:Bn,magFilter:Bn}:{};$.map!==null&&$.map.dispose(),$.map=new Ls(s.x,s.y,Mt),$.map.texture.name=nt.name+".shadowMap",$.camera.updateProjectionMatrix()}n.setRenderTarget($.map),n.clear();const mt=$.getViewportCount();for(let Mt=0;Mt<mt;Mt++){const It=$.getViewport(Mt);r.set(o.x*It.x,o.y*It.y,o.x*It.z,o.y*It.w),G.viewport(r),$.updateMatrices(nt,Mt),i=$.getFrustum(),S(P,F,$.camera,nt,this.type)}$.isPointLightShadow!==!0&&this.type===Di&&b($,F),$.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(et,y,E)};function b(I,P){const F=t.update(x);d.defines.VSM_SAMPLES!==I.blurSamples&&(d.defines.VSM_SAMPLES=I.blurSamples,f.defines.VSM_SAMPLES=I.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new Ls(s.x,s.y)),d.uniforms.shadow_pass.value=I.map.texture,d.uniforms.resolution.value=I.mapSize,d.uniforms.radius.value=I.radius,n.setRenderTarget(I.mapPass),n.clear(),n.renderBufferDirect(P,null,F,d,x,null),f.uniforms.shadow_pass.value=I.mapPass.texture,f.uniforms.resolution.value=I.mapSize,f.uniforms.radius.value=I.radius,n.setRenderTarget(I.map),n.clear(),n.renderBufferDirect(P,null,F,f,x,null)}function M(I,P,F,et){let y=null;const E=F.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(E!==void 0)y=E;else if(y=F.isPointLight===!0?l:a,n.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0){const G=y.uuid,W=P.uuid;let Q=c[G];Q===void 0&&(Q={},c[G]=Q);let at=Q[W];at===void 0&&(at=y.clone(),Q[W]=at,P.addEventListener("dispose",O)),y=at}if(y.visible=P.visible,y.wireframe=P.wireframe,et===Di?y.side=P.shadowSide!==null?P.shadowSide:P.side:y.side=P.shadowSide!==null?P.shadowSide:u[P.side],y.alphaMap=P.alphaMap,y.alphaTest=P.alphaTest,y.map=P.map,y.clipShadows=P.clipShadows,y.clippingPlanes=P.clippingPlanes,y.clipIntersection=P.clipIntersection,y.displacementMap=P.displacementMap,y.displacementScale=P.displacementScale,y.displacementBias=P.displacementBias,y.wireframeLinewidth=P.wireframeLinewidth,y.linewidth=P.linewidth,F.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const G=n.properties.get(y);G.light=F}return y}function S(I,P,F,et,y){if(I.visible===!1)return;if(I.layers.test(P.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&y===Di)&&(!I.frustumCulled||i.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,I.matrixWorld);const W=t.update(I),Q=I.material;if(Array.isArray(Q)){const at=W.groups;for(let X=0,nt=at.length;X<nt;X++){const $=at[X],gt=Q[$.materialIndex];if(gt&&gt.visible){const mt=M(I,gt,et,y);I.onBeforeShadow(n,I,P,F,W,mt,$),n.renderBufferDirect(F,null,W,mt,I,$),I.onAfterShadow(n,I,P,F,W,mt,$)}}}else if(Q.visible){const at=M(I,Q,et,y);I.onBeforeShadow(n,I,P,F,W,at,null),n.renderBufferDirect(F,null,W,at,I,null),I.onAfterShadow(n,I,P,F,W,at,null)}}const G=I.children;for(let W=0,Q=G.length;W<Q;W++)S(G[W],P,F,et,y)}function O(I){I.target.removeEventListener("dispose",O);for(const F in c){const et=c[F],y=I.target.uuid;y in et&&(et[y].dispose(),delete et[y])}}}const gS={[oc]:rc,[ac]:uc,[lc]:hc,[Mo]:cc,[rc]:oc,[uc]:ac,[hc]:lc,[cc]:Mo};function _S(n){function t(){let z=!1;const _t=new Pe;let st=null;const tt=new Pe(0,0,0,0);return{setMask:function(St){st!==St&&!z&&(n.colorMask(St,St,St,St),st=St)},setLocked:function(St){z=St},setClear:function(St,Et,Ht,jt,Qt){Qt===!0&&(St*=jt,Et*=jt,Ht*=jt),_t.set(St,Et,Ht,jt),tt.equals(_t)===!1&&(n.clearColor(St,Et,Ht,jt),tt.copy(_t))},reset:function(){z=!1,st=null,tt.set(-1,0,0,0)}}}function e(){let z=!1,_t=!1,st=null,tt=null,St=null;return{setReversed:function(Et){_t=Et},setTest:function(Et){Et?xt(n.DEPTH_TEST):B(n.DEPTH_TEST)},setMask:function(Et){st!==Et&&!z&&(n.depthMask(Et),st=Et)},setFunc:function(Et){if(_t&&(Et=gS[Et]),tt!==Et){switch(Et){case oc:n.depthFunc(n.NEVER);break;case rc:n.depthFunc(n.ALWAYS);break;case ac:n.depthFunc(n.LESS);break;case Mo:n.depthFunc(n.LEQUAL);break;case lc:n.depthFunc(n.EQUAL);break;case cc:n.depthFunc(n.GEQUAL);break;case uc:n.depthFunc(n.GREATER);break;case hc:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}tt=Et}},setLocked:function(Et){z=Et},setClear:function(Et){St!==Et&&(n.clearDepth(Et),St=Et)},reset:function(){z=!1,st=null,tt=null,St=null}}}function i(){let z=!1,_t=null,st=null,tt=null,St=null,Et=null,Ht=null,jt=null,Qt=null;return{setTest:function(Zt){z||(Zt?xt(n.STENCIL_TEST):B(n.STENCIL_TEST))},setMask:function(Zt){_t!==Zt&&!z&&(n.stencilMask(Zt),_t=Zt)},setFunc:function(Zt,ne,ce){(st!==Zt||tt!==ne||St!==ce)&&(n.stencilFunc(Zt,ne,ce),st=Zt,tt=ne,St=ce)},setOp:function(Zt,ne,ce){(Et!==Zt||Ht!==ne||jt!==ce)&&(n.stencilOp(Zt,ne,ce),Et=Zt,Ht=ne,jt=ce)},setLocked:function(Zt){z=Zt},setClear:function(Zt){Qt!==Zt&&(n.clearStencil(Zt),Qt=Zt)},reset:function(){z=!1,_t=null,st=null,tt=null,St=null,Et=null,Ht=null,jt=null,Qt=null}}}const s=new t,o=new e,r=new i,a=new WeakMap,l=new WeakMap;let c={},h={},u=new WeakMap,d=[],f=null,_=!1,x=null,m=null,p=null,b=null,M=null,S=null,O=null,I=new he(0,0,0),P=0,F=!1,et=null,y=null,E=null,G=null,W=null;const Q=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let at=!1,X=0;const nt=n.getParameter(n.VERSION);nt.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(nt)[1]),at=X>=1):nt.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(nt)[1]),at=X>=2);let $=null,gt={};const mt=n.getParameter(n.SCISSOR_BOX),Mt=n.getParameter(n.VIEWPORT),It=new Pe().fromArray(mt),zt=new Pe().fromArray(Mt);function rt(z,_t,st,tt){const St=new Uint8Array(4),Et=n.createTexture();n.bindTexture(z,Et),n.texParameteri(z,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(z,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ht=0;Ht<st;Ht++)z===n.TEXTURE_3D||z===n.TEXTURE_2D_ARRAY?n.texImage3D(_t,0,n.RGBA,1,1,tt,0,n.RGBA,n.UNSIGNED_BYTE,St):n.texImage2D(_t+Ht,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,St);return Et}const ft={};ft[n.TEXTURE_2D]=rt(n.TEXTURE_2D,n.TEXTURE_2D,1),ft[n.TEXTURE_CUBE_MAP]=rt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),ft[n.TEXTURE_2D_ARRAY]=rt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ft[n.TEXTURE_3D]=rt(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),r.setClear(0),xt(n.DEPTH_TEST),o.setFunc(Mo),L(!1),N(Ph),xt(n.CULL_FACE),g(rs);function xt(z){c[z]!==!0&&(n.enable(z),c[z]=!0)}function B(z){c[z]!==!1&&(n.disable(z),c[z]=!1)}function lt(z,_t){return h[z]!==_t?(n.bindFramebuffer(z,_t),h[z]=_t,z===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=_t),z===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=_t),!0):!1}function ot(z,_t){let st=d,tt=!1;if(z){st=u.get(_t),st===void 0&&(st=[],u.set(_t,st));const St=z.textures;if(st.length!==St.length||st[0]!==n.COLOR_ATTACHMENT0){for(let Et=0,Ht=St.length;Et<Ht;Et++)st[Et]=n.COLOR_ATTACHMENT0+Et;st.length=St.length,tt=!0}}else st[0]!==n.BACK&&(st[0]=n.BACK,tt=!0);tt&&n.drawBuffers(st)}function ht(z){return f!==z?(n.useProgram(z),f=z,!0):!1}const wt={[bs]:n.FUNC_ADD,[x_]:n.FUNC_SUBTRACT,[y_]:n.FUNC_REVERSE_SUBTRACT};wt[M_]=n.MIN,wt[w_]=n.MAX;const it={[S_]:n.ZERO,[E_]:n.ONE,[b_]:n.SRC_COLOR,[ic]:n.SRC_ALPHA,[I_]:n.SRC_ALPHA_SATURATE,[P_]:n.DST_COLOR,[A_]:n.DST_ALPHA,[T_]:n.ONE_MINUS_SRC_COLOR,[sc]:n.ONE_MINUS_SRC_ALPHA,[C_]:n.ONE_MINUS_DST_COLOR,[R_]:n.ONE_MINUS_DST_ALPHA,[L_]:n.CONSTANT_COLOR,[D_]:n.ONE_MINUS_CONSTANT_COLOR,[U_]:n.CONSTANT_ALPHA,[N_]:n.ONE_MINUS_CONSTANT_ALPHA};function g(z,_t,st,tt,St,Et,Ht,jt,Qt,Zt){if(z===rs){_===!0&&(B(n.BLEND),_=!1);return}if(_===!1&&(xt(n.BLEND),_=!0),z!==v_){if(z!==x||Zt!==F){if((m!==bs||M!==bs)&&(n.blendEquation(n.FUNC_ADD),m=bs,M=bs),Zt)switch(z){case fo:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ch:n.blendFunc(n.ONE,n.ONE);break;case Ih:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Lh:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}else switch(z){case fo:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ch:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Ih:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Lh:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}p=null,b=null,S=null,O=null,I.set(0,0,0),P=0,x=z,F=Zt}return}St=St||_t,Et=Et||st,Ht=Ht||tt,(_t!==m||St!==M)&&(n.blendEquationSeparate(wt[_t],wt[St]),m=_t,M=St),(st!==p||tt!==b||Et!==S||Ht!==O)&&(n.blendFuncSeparate(it[st],it[tt],it[Et],it[Ht]),p=st,b=tt,S=Et,O=Ht),(jt.equals(I)===!1||Qt!==P)&&(n.blendColor(jt.r,jt.g,jt.b,Qt),I.copy(jt),P=Qt),x=z,F=!1}function T(z,_t){z.side===ge?B(n.CULL_FACE):xt(n.CULL_FACE);let st=z.side===yn;_t&&(st=!st),L(st),z.blending===fo&&z.transparent===!1?g(rs):g(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),o.setFunc(z.depthFunc),o.setTest(z.depthTest),o.setMask(z.depthWrite),s.setMask(z.colorWrite);const tt=z.stencilWrite;r.setTest(tt),tt&&(r.setMask(z.stencilWriteMask),r.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),r.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),Y(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?xt(n.SAMPLE_ALPHA_TO_COVERAGE):B(n.SAMPLE_ALPHA_TO_COVERAGE)}function L(z){et!==z&&(z?n.frontFace(n.CW):n.frontFace(n.CCW),et=z)}function N(z){z!==m_?(xt(n.CULL_FACE),z!==y&&(z===Ph?n.cullFace(n.BACK):z===g_?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):B(n.CULL_FACE),y=z}function U(z){z!==E&&(at&&n.lineWidth(z),E=z)}function Y(z,_t,st){z?(xt(n.POLYGON_OFFSET_FILL),(G!==_t||W!==st)&&(n.polygonOffset(_t,st),G=_t,W=st)):B(n.POLYGON_OFFSET_FILL)}function Z(z){z?xt(n.SCISSOR_TEST):B(n.SCISSOR_TEST)}function w(z){z===void 0&&(z=n.TEXTURE0+Q-1),$!==z&&(n.activeTexture(z),$=z)}function v(z,_t,st){st===void 0&&($===null?st=n.TEXTURE0+Q-1:st=$);let tt=gt[st];tt===void 0&&(tt={type:void 0,texture:void 0},gt[st]=tt),(tt.type!==z||tt.texture!==_t)&&($!==st&&(n.activeTexture(st),$=st),n.bindTexture(z,_t||ft[z]),tt.type=z,tt.texture=_t)}function C(){const z=gt[$];z!==void 0&&z.type!==void 0&&(n.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function q(){try{n.compressedTexImage2D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function H(){try{n.compressedTexImage3D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function V(){try{n.texSubImage2D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ut(){try{n.texSubImage3D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ct(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function pt(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Rt(){try{n.texStorage2D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function dt(){try{n.texStorage3D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function yt(){try{n.texImage2D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Pt(){try{n.texImage3D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Lt(z){It.equals(z)===!1&&(n.scissor(z.x,z.y,z.z,z.w),It.copy(z))}function bt(z){zt.equals(z)===!1&&(n.viewport(z.x,z.y,z.z,z.w),zt.copy(z))}function Vt(z,_t){let st=l.get(_t);st===void 0&&(st=new WeakMap,l.set(_t,st));let tt=st.get(z);tt===void 0&&(tt=n.getUniformBlockIndex(_t,z.name),st.set(z,tt))}function Dt(z,_t){const tt=l.get(_t).get(z);a.get(_t)!==tt&&(n.uniformBlockBinding(_t,tt,z.__bindingPointIndex),a.set(_t,tt))}function kt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),c={},$=null,gt={},h={},u=new WeakMap,d=[],f=null,_=!1,x=null,m=null,p=null,b=null,M=null,S=null,O=null,I=new he(0,0,0),P=0,F=!1,et=null,y=null,E=null,G=null,W=null,It.set(0,0,n.canvas.width,n.canvas.height),zt.set(0,0,n.canvas.width,n.canvas.height),s.reset(),o.reset(),r.reset()}return{buffers:{color:s,depth:o,stencil:r},enable:xt,disable:B,bindFramebuffer:lt,drawBuffers:ot,useProgram:ht,setBlending:g,setMaterial:T,setFlipSided:L,setCullFace:N,setLineWidth:U,setPolygonOffset:Y,setScissorTest:Z,activeTexture:w,bindTexture:v,unbindTexture:C,compressedTexImage2D:q,compressedTexImage3D:H,texImage2D:yt,texImage3D:Pt,updateUBOMapping:Vt,uniformBlockBinding:Dt,texStorage2D:Rt,texStorage3D:dt,texSubImage2D:V,texSubImage3D:ut,compressedTexSubImage2D:ct,compressedTexSubImage3D:pt,scissor:Lt,viewport:bt,reset:kt}}function Sd(n,t,e,i){const s=vS(i);switch(e){case ep:return n*t;case ip:return n*t;case sp:return n*t*2;case op:return n*t/s.components*s.byteLength;case Mu:return n*t/s.components*s.byteLength;case rp:return n*t*2/s.components*s.byteLength;case wu:return n*t*2/s.components*s.byteLength;case np:return n*t*3/s.components*s.byteLength;case ti:return n*t*4/s.components*s.byteLength;case Su:return n*t*4/s.components*s.byteLength;case la:case ca:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case ua:case ha:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case mc:case _c:return Math.max(n,16)*Math.max(t,8)/4;case pc:case gc:return Math.max(n,8)*Math.max(t,8)/2;case vc:case xc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case yc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Mc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case wc:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case Sc:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case Ec:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case bc:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case Tc:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case Ac:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case Rc:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case Pc:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case Cc:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case Ic:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case Lc:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case Dc:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case Uc:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case da:case Nc:case Fc:return Math.ceil(n/4)*Math.ceil(t/4)*16;case ap:case Oc:return Math.ceil(n/4)*Math.ceil(t/4)*8;case Bc:case zc:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function vS(n){switch(n){case Gi:case Jf:return{byteLength:1,components:1};case dr:case Qf:case yr:return{byteLength:2,components:1};case xu:case yu:return{byteLength:2,components:4};case Is:case vu:case Fi:return{byteLength:4,components:1};case tp:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function xS(n,t,e,i,s,o,r){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Bt,h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(w,v){return f?new OffscreenCanvas(w,v):pr("canvas")}function x(w,v,C){let q=1;const H=Z(w);if((H.width>C||H.height>C)&&(q=C/Math.max(H.width,H.height)),q<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const V=Math.floor(q*H.width),ut=Math.floor(q*H.height);u===void 0&&(u=_(V,ut));const ct=v?_(V,ut):u;return ct.width=V,ct.height=ut,ct.getContext("2d").drawImage(w,0,0,V,ut),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+H.width+"x"+H.height+") to ("+V+"x"+ut+")."),ct}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+H.width+"x"+H.height+")."),w;return w}function m(w){return w.generateMipmaps&&w.minFilter!==Bn&&w.minFilter!==Jn}function p(w){n.generateMipmap(w)}function b(w,v,C,q,H=!1){if(w!==null){if(n[w]!==void 0)return n[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let V=v;if(v===n.RED&&(C===n.FLOAT&&(V=n.R32F),C===n.HALF_FLOAT&&(V=n.R16F),C===n.UNSIGNED_BYTE&&(V=n.R8)),v===n.RED_INTEGER&&(C===n.UNSIGNED_BYTE&&(V=n.R8UI),C===n.UNSIGNED_SHORT&&(V=n.R16UI),C===n.UNSIGNED_INT&&(V=n.R32UI),C===n.BYTE&&(V=n.R8I),C===n.SHORT&&(V=n.R16I),C===n.INT&&(V=n.R32I)),v===n.RG&&(C===n.FLOAT&&(V=n.RG32F),C===n.HALF_FLOAT&&(V=n.RG16F),C===n.UNSIGNED_BYTE&&(V=n.RG8)),v===n.RG_INTEGER&&(C===n.UNSIGNED_BYTE&&(V=n.RG8UI),C===n.UNSIGNED_SHORT&&(V=n.RG16UI),C===n.UNSIGNED_INT&&(V=n.RG32UI),C===n.BYTE&&(V=n.RG8I),C===n.SHORT&&(V=n.RG16I),C===n.INT&&(V=n.RG32I)),v===n.RGB_INTEGER&&(C===n.UNSIGNED_BYTE&&(V=n.RGB8UI),C===n.UNSIGNED_SHORT&&(V=n.RGB16UI),C===n.UNSIGNED_INT&&(V=n.RGB32UI),C===n.BYTE&&(V=n.RGB8I),C===n.SHORT&&(V=n.RGB16I),C===n.INT&&(V=n.RGB32I)),v===n.RGBA_INTEGER&&(C===n.UNSIGNED_BYTE&&(V=n.RGBA8UI),C===n.UNSIGNED_SHORT&&(V=n.RGBA16UI),C===n.UNSIGNED_INT&&(V=n.RGBA32UI),C===n.BYTE&&(V=n.RGBA8I),C===n.SHORT&&(V=n.RGBA16I),C===n.INT&&(V=n.RGBA32I)),v===n.RGB&&C===n.UNSIGNED_INT_5_9_9_9_REV&&(V=n.RGB9_E5),v===n.RGBA){const ut=H?wa:we.getTransfer(q);C===n.FLOAT&&(V=n.RGBA32F),C===n.HALF_FLOAT&&(V=n.RGBA16F),C===n.UNSIGNED_BYTE&&(V=ut===Ue?n.SRGB8_ALPHA8:n.RGBA8),C===n.UNSIGNED_SHORT_4_4_4_4&&(V=n.RGBA4),C===n.UNSIGNED_SHORT_5_5_5_1&&(V=n.RGB5_A1)}return(V===n.R16F||V===n.R32F||V===n.RG16F||V===n.RG32F||V===n.RGBA16F||V===n.RGBA32F)&&t.get("EXT_color_buffer_float"),V}function M(w,v){let C;return w?v===null||v===Is||v===Eo?C=n.DEPTH24_STENCIL8:v===Fi?C=n.DEPTH32F_STENCIL8:v===dr&&(C=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Is||v===Eo?C=n.DEPTH_COMPONENT24:v===Fi?C=n.DEPTH_COMPONENT32F:v===dr&&(C=n.DEPTH_COMPONENT16),C}function S(w,v){return m(w)===!0||w.isFramebufferTexture&&w.minFilter!==Bn&&w.minFilter!==Jn?Math.log2(Math.max(v.width,v.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?v.mipmaps.length:1}function O(w){const v=w.target;v.removeEventListener("dispose",O),P(v),v.isVideoTexture&&h.delete(v)}function I(w){const v=w.target;v.removeEventListener("dispose",I),et(v)}function P(w){const v=i.get(w);if(v.__webglInit===void 0)return;const C=w.source,q=d.get(C);if(q){const H=q[v.__cacheKey];H.usedTimes--,H.usedTimes===0&&F(w),Object.keys(q).length===0&&d.delete(C)}i.remove(w)}function F(w){const v=i.get(w);n.deleteTexture(v.__webglTexture);const C=w.source,q=d.get(C);delete q[v.__cacheKey],r.memory.textures--}function et(w){const v=i.get(w);if(w.depthTexture&&w.depthTexture.dispose(),w.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(v.__webglFramebuffer[q]))for(let H=0;H<v.__webglFramebuffer[q].length;H++)n.deleteFramebuffer(v.__webglFramebuffer[q][H]);else n.deleteFramebuffer(v.__webglFramebuffer[q]);v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer[q])}else{if(Array.isArray(v.__webglFramebuffer))for(let q=0;q<v.__webglFramebuffer.length;q++)n.deleteFramebuffer(v.__webglFramebuffer[q]);else n.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&n.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let q=0;q<v.__webglColorRenderbuffer.length;q++)v.__webglColorRenderbuffer[q]&&n.deleteRenderbuffer(v.__webglColorRenderbuffer[q]);v.__webglDepthRenderbuffer&&n.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const C=w.textures;for(let q=0,H=C.length;q<H;q++){const V=i.get(C[q]);V.__webglTexture&&(n.deleteTexture(V.__webglTexture),r.memory.textures--),i.remove(C[q])}i.remove(w)}let y=0;function E(){y=0}function G(){const w=y;return w>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+s.maxTextures),y+=1,w}function W(w){const v=[];return v.push(w.wrapS),v.push(w.wrapT),v.push(w.wrapR||0),v.push(w.magFilter),v.push(w.minFilter),v.push(w.anisotropy),v.push(w.internalFormat),v.push(w.format),v.push(w.type),v.push(w.generateMipmaps),v.push(w.premultiplyAlpha),v.push(w.flipY),v.push(w.unpackAlignment),v.push(w.colorSpace),v.join()}function Q(w,v){const C=i.get(w);if(w.isVideoTexture&&U(w),w.isRenderTargetTexture===!1&&w.version>0&&C.__version!==w.version){const q=w.image;if(q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{zt(C,w,v);return}}e.bindTexture(n.TEXTURE_2D,C.__webglTexture,n.TEXTURE0+v)}function at(w,v){const C=i.get(w);if(w.version>0&&C.__version!==w.version){zt(C,w,v);return}e.bindTexture(n.TEXTURE_2D_ARRAY,C.__webglTexture,n.TEXTURE0+v)}function X(w,v){const C=i.get(w);if(w.version>0&&C.__version!==w.version){zt(C,w,v);return}e.bindTexture(n.TEXTURE_3D,C.__webglTexture,n.TEXTURE0+v)}function nt(w,v){const C=i.get(w);if(w.version>0&&C.__version!==w.version){rt(C,w,v);return}e.bindTexture(n.TEXTURE_CUBE_MAP,C.__webglTexture,n.TEXTURE0+v)}const $={[We]:n.REPEAT,[As]:n.CLAMP_TO_EDGE,[fc]:n.MIRRORED_REPEAT},gt={[Bn]:n.NEAREST,[W_]:n.NEAREST_MIPMAP_NEAREST,[Cr]:n.NEAREST_MIPMAP_LINEAR,[Jn]:n.LINEAR,[ll]:n.LINEAR_MIPMAP_NEAREST,[Rs]:n.LINEAR_MIPMAP_LINEAR},mt={[$_]:n.NEVER,[tv]:n.ALWAYS,[j_]:n.LESS,[cp]:n.LEQUAL,[K_]:n.EQUAL,[Q_]:n.GEQUAL,[Z_]:n.GREATER,[J_]:n.NOTEQUAL};function Mt(w,v){if(v.type===Fi&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===Jn||v.magFilter===ll||v.magFilter===Cr||v.magFilter===Rs||v.minFilter===Jn||v.minFilter===ll||v.minFilter===Cr||v.minFilter===Rs)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(w,n.TEXTURE_WRAP_S,$[v.wrapS]),n.texParameteri(w,n.TEXTURE_WRAP_T,$[v.wrapT]),(w===n.TEXTURE_3D||w===n.TEXTURE_2D_ARRAY)&&n.texParameteri(w,n.TEXTURE_WRAP_R,$[v.wrapR]),n.texParameteri(w,n.TEXTURE_MAG_FILTER,gt[v.magFilter]),n.texParameteri(w,n.TEXTURE_MIN_FILTER,gt[v.minFilter]),v.compareFunction&&(n.texParameteri(w,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(w,n.TEXTURE_COMPARE_FUNC,mt[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Bn||v.minFilter!==Cr&&v.minFilter!==Rs||v.type===Fi&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||i.get(v).__currentAnisotropy){const C=t.get("EXT_texture_filter_anisotropic");n.texParameterf(w,C.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy}}}function It(w,v){let C=!1;w.__webglInit===void 0&&(w.__webglInit=!0,v.addEventListener("dispose",O));const q=v.source;let H=d.get(q);H===void 0&&(H={},d.set(q,H));const V=W(v);if(V!==w.__cacheKey){H[V]===void 0&&(H[V]={texture:n.createTexture(),usedTimes:0},r.memory.textures++,C=!0),H[V].usedTimes++;const ut=H[w.__cacheKey];ut!==void 0&&(H[w.__cacheKey].usedTimes--,ut.usedTimes===0&&F(v)),w.__cacheKey=V,w.__webglTexture=H[V].texture}return C}function zt(w,v,C){let q=n.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(q=n.TEXTURE_2D_ARRAY),v.isData3DTexture&&(q=n.TEXTURE_3D);const H=It(w,v),V=v.source;e.bindTexture(q,w.__webglTexture,n.TEXTURE0+C);const ut=i.get(V);if(V.version!==ut.__version||H===!0){e.activeTexture(n.TEXTURE0+C);const ct=we.getPrimaries(we.workingColorSpace),pt=v.colorSpace===os?null:we.getPrimaries(v.colorSpace),Rt=v.colorSpace===os||ct===pt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Rt);let dt=x(v.image,!1,s.maxTextureSize);dt=Y(v,dt);const yt=o.convert(v.format,v.colorSpace),Pt=o.convert(v.type);let Lt=b(v.internalFormat,yt,Pt,v.colorSpace,v.isVideoTexture);Mt(q,v);let bt;const Vt=v.mipmaps,Dt=v.isVideoTexture!==!0,kt=ut.__version===void 0||H===!0,z=V.dataReady,_t=S(v,dt);if(v.isDepthTexture)Lt=M(v.format===bo,v.type),kt&&(Dt?e.texStorage2D(n.TEXTURE_2D,1,Lt,dt.width,dt.height):e.texImage2D(n.TEXTURE_2D,0,Lt,dt.width,dt.height,0,yt,Pt,null));else if(v.isDataTexture)if(Vt.length>0){Dt&&kt&&e.texStorage2D(n.TEXTURE_2D,_t,Lt,Vt[0].width,Vt[0].height);for(let st=0,tt=Vt.length;st<tt;st++)bt=Vt[st],Dt?z&&e.texSubImage2D(n.TEXTURE_2D,st,0,0,bt.width,bt.height,yt,Pt,bt.data):e.texImage2D(n.TEXTURE_2D,st,Lt,bt.width,bt.height,0,yt,Pt,bt.data);v.generateMipmaps=!1}else Dt?(kt&&e.texStorage2D(n.TEXTURE_2D,_t,Lt,dt.width,dt.height),z&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,dt.width,dt.height,yt,Pt,dt.data)):e.texImage2D(n.TEXTURE_2D,0,Lt,dt.width,dt.height,0,yt,Pt,dt.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Dt&&kt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,_t,Lt,Vt[0].width,Vt[0].height,dt.depth);for(let st=0,tt=Vt.length;st<tt;st++)if(bt=Vt[st],v.format!==ti)if(yt!==null)if(Dt){if(z)if(v.layerUpdates.size>0){const St=Sd(bt.width,bt.height,v.format,v.type);for(const Et of v.layerUpdates){const Ht=bt.data.subarray(Et*St/bt.data.BYTES_PER_ELEMENT,(Et+1)*St/bt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,st,0,0,Et,bt.width,bt.height,1,yt,Ht,0,0)}v.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,st,0,0,0,bt.width,bt.height,dt.depth,yt,bt.data,0,0)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,st,Lt,bt.width,bt.height,dt.depth,0,bt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Dt?z&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,st,0,0,0,bt.width,bt.height,dt.depth,yt,Pt,bt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,st,Lt,bt.width,bt.height,dt.depth,0,yt,Pt,bt.data)}else{Dt&&kt&&e.texStorage2D(n.TEXTURE_2D,_t,Lt,Vt[0].width,Vt[0].height);for(let st=0,tt=Vt.length;st<tt;st++)bt=Vt[st],v.format!==ti?yt!==null?Dt?z&&e.compressedTexSubImage2D(n.TEXTURE_2D,st,0,0,bt.width,bt.height,yt,bt.data):e.compressedTexImage2D(n.TEXTURE_2D,st,Lt,bt.width,bt.height,0,bt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Dt?z&&e.texSubImage2D(n.TEXTURE_2D,st,0,0,bt.width,bt.height,yt,Pt,bt.data):e.texImage2D(n.TEXTURE_2D,st,Lt,bt.width,bt.height,0,yt,Pt,bt.data)}else if(v.isDataArrayTexture)if(Dt){if(kt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,_t,Lt,dt.width,dt.height,dt.depth),z)if(v.layerUpdates.size>0){const st=Sd(dt.width,dt.height,v.format,v.type);for(const tt of v.layerUpdates){const St=dt.data.subarray(tt*st/dt.data.BYTES_PER_ELEMENT,(tt+1)*st/dt.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,tt,dt.width,dt.height,1,yt,Pt,St)}v.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,dt.width,dt.height,dt.depth,yt,Pt,dt.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,Lt,dt.width,dt.height,dt.depth,0,yt,Pt,dt.data);else if(v.isData3DTexture)Dt?(kt&&e.texStorage3D(n.TEXTURE_3D,_t,Lt,dt.width,dt.height,dt.depth),z&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,dt.width,dt.height,dt.depth,yt,Pt,dt.data)):e.texImage3D(n.TEXTURE_3D,0,Lt,dt.width,dt.height,dt.depth,0,yt,Pt,dt.data);else if(v.isFramebufferTexture){if(kt)if(Dt)e.texStorage2D(n.TEXTURE_2D,_t,Lt,dt.width,dt.height);else{let st=dt.width,tt=dt.height;for(let St=0;St<_t;St++)e.texImage2D(n.TEXTURE_2D,St,Lt,st,tt,0,yt,Pt,null),st>>=1,tt>>=1}}else if(Vt.length>0){if(Dt&&kt){const st=Z(Vt[0]);e.texStorage2D(n.TEXTURE_2D,_t,Lt,st.width,st.height)}for(let st=0,tt=Vt.length;st<tt;st++)bt=Vt[st],Dt?z&&e.texSubImage2D(n.TEXTURE_2D,st,0,0,yt,Pt,bt):e.texImage2D(n.TEXTURE_2D,st,Lt,yt,Pt,bt);v.generateMipmaps=!1}else if(Dt){if(kt){const st=Z(dt);e.texStorage2D(n.TEXTURE_2D,_t,Lt,st.width,st.height)}z&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,yt,Pt,dt)}else e.texImage2D(n.TEXTURE_2D,0,Lt,yt,Pt,dt);m(v)&&p(q),ut.__version=V.version,v.onUpdate&&v.onUpdate(v)}w.__version=v.version}function rt(w,v,C){if(v.image.length!==6)return;const q=It(w,v),H=v.source;e.bindTexture(n.TEXTURE_CUBE_MAP,w.__webglTexture,n.TEXTURE0+C);const V=i.get(H);if(H.version!==V.__version||q===!0){e.activeTexture(n.TEXTURE0+C);const ut=we.getPrimaries(we.workingColorSpace),ct=v.colorSpace===os?null:we.getPrimaries(v.colorSpace),pt=v.colorSpace===os||ut===ct?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,pt);const Rt=v.isCompressedTexture||v.image[0].isCompressedTexture,dt=v.image[0]&&v.image[0].isDataTexture,yt=[];for(let tt=0;tt<6;tt++)!Rt&&!dt?yt[tt]=x(v.image[tt],!0,s.maxCubemapSize):yt[tt]=dt?v.image[tt].image:v.image[tt],yt[tt]=Y(v,yt[tt]);const Pt=yt[0],Lt=o.convert(v.format,v.colorSpace),bt=o.convert(v.type),Vt=b(v.internalFormat,Lt,bt,v.colorSpace),Dt=v.isVideoTexture!==!0,kt=V.__version===void 0||q===!0,z=H.dataReady;let _t=S(v,Pt);Mt(n.TEXTURE_CUBE_MAP,v);let st;if(Rt){Dt&&kt&&e.texStorage2D(n.TEXTURE_CUBE_MAP,_t,Vt,Pt.width,Pt.height);for(let tt=0;tt<6;tt++){st=yt[tt].mipmaps;for(let St=0;St<st.length;St++){const Et=st[St];v.format!==ti?Lt!==null?Dt?z&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,St,0,0,Et.width,Et.height,Lt,Et.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,St,Vt,Et.width,Et.height,0,Et.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Dt?z&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,St,0,0,Et.width,Et.height,Lt,bt,Et.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,St,Vt,Et.width,Et.height,0,Lt,bt,Et.data)}}}else{if(st=v.mipmaps,Dt&&kt){st.length>0&&_t++;const tt=Z(yt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,_t,Vt,tt.width,tt.height)}for(let tt=0;tt<6;tt++)if(dt){Dt?z&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,yt[tt].width,yt[tt].height,Lt,bt,yt[tt].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,Vt,yt[tt].width,yt[tt].height,0,Lt,bt,yt[tt].data);for(let St=0;St<st.length;St++){const Ht=st[St].image[tt].image;Dt?z&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,St+1,0,0,Ht.width,Ht.height,Lt,bt,Ht.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,St+1,Vt,Ht.width,Ht.height,0,Lt,bt,Ht.data)}}else{Dt?z&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,Lt,bt,yt[tt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,Vt,Lt,bt,yt[tt]);for(let St=0;St<st.length;St++){const Et=st[St];Dt?z&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,St+1,0,0,Lt,bt,Et.image[tt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,St+1,Vt,Lt,bt,Et.image[tt])}}}m(v)&&p(n.TEXTURE_CUBE_MAP),V.__version=H.version,v.onUpdate&&v.onUpdate(v)}w.__version=v.version}function ft(w,v,C,q,H,V){const ut=o.convert(C.format,C.colorSpace),ct=o.convert(C.type),pt=b(C.internalFormat,ut,ct,C.colorSpace);if(!i.get(v).__hasExternalTextures){const dt=Math.max(1,v.width>>V),yt=Math.max(1,v.height>>V);H===n.TEXTURE_3D||H===n.TEXTURE_2D_ARRAY?e.texImage3D(H,V,pt,dt,yt,v.depth,0,ut,ct,null):e.texImage2D(H,V,pt,dt,yt,0,ut,ct,null)}e.bindFramebuffer(n.FRAMEBUFFER,w),N(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,q,H,i.get(C).__webglTexture,0,L(v)):(H===n.TEXTURE_2D||H>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&H<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,q,H,i.get(C).__webglTexture,V),e.bindFramebuffer(n.FRAMEBUFFER,null)}function xt(w,v,C){if(n.bindRenderbuffer(n.RENDERBUFFER,w),v.depthBuffer){const q=v.depthTexture,H=q&&q.isDepthTexture?q.type:null,V=M(v.stencilBuffer,H),ut=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ct=L(v);N(v)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ct,V,v.width,v.height):C?n.renderbufferStorageMultisample(n.RENDERBUFFER,ct,V,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,V,v.width,v.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,ut,n.RENDERBUFFER,w)}else{const q=v.textures;for(let H=0;H<q.length;H++){const V=q[H],ut=o.convert(V.format,V.colorSpace),ct=o.convert(V.type),pt=b(V.internalFormat,ut,ct,V.colorSpace),Rt=L(v);C&&N(v)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Rt,pt,v.width,v.height):N(v)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Rt,pt,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,pt,v.width,v.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function B(w,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,w),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(v.depthTexture).__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),Q(v.depthTexture,0);const q=i.get(v.depthTexture).__webglTexture,H=L(v);if(v.depthTexture.format===po)N(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,q,0,H):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,q,0);else if(v.depthTexture.format===bo)N(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,q,0,H):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,q,0);else throw new Error("Unknown depthTexture format")}function lt(w){const v=i.get(w),C=w.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==w.depthTexture){const q=w.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),q){const H=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,q.removeEventListener("dispose",H)};q.addEventListener("dispose",H),v.__depthDisposeCallback=H}v.__boundDepthTexture=q}if(w.depthTexture&&!v.__autoAllocateDepthBuffer){if(C)throw new Error("target.depthTexture not supported in Cube render targets");B(v.__webglFramebuffer,w)}else if(C){v.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(e.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[q]),v.__webglDepthbuffer[q]===void 0)v.__webglDepthbuffer[q]=n.createRenderbuffer(),xt(v.__webglDepthbuffer[q],w,!1);else{const H=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,V=v.__webglDepthbuffer[q];n.bindRenderbuffer(n.RENDERBUFFER,V),n.framebufferRenderbuffer(n.FRAMEBUFFER,H,n.RENDERBUFFER,V)}}else if(e.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=n.createRenderbuffer(),xt(v.__webglDepthbuffer,w,!1);else{const q=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,H=v.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,H),n.framebufferRenderbuffer(n.FRAMEBUFFER,q,n.RENDERBUFFER,H)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function ot(w,v,C){const q=i.get(w);v!==void 0&&ft(q.__webglFramebuffer,w,w.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),C!==void 0&&lt(w)}function ht(w){const v=w.texture,C=i.get(w),q=i.get(v);w.addEventListener("dispose",I);const H=w.textures,V=w.isWebGLCubeRenderTarget===!0,ut=H.length>1;if(ut||(q.__webglTexture===void 0&&(q.__webglTexture=n.createTexture()),q.__version=v.version,r.memory.textures++),V){C.__webglFramebuffer=[];for(let ct=0;ct<6;ct++)if(v.mipmaps&&v.mipmaps.length>0){C.__webglFramebuffer[ct]=[];for(let pt=0;pt<v.mipmaps.length;pt++)C.__webglFramebuffer[ct][pt]=n.createFramebuffer()}else C.__webglFramebuffer[ct]=n.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){C.__webglFramebuffer=[];for(let ct=0;ct<v.mipmaps.length;ct++)C.__webglFramebuffer[ct]=n.createFramebuffer()}else C.__webglFramebuffer=n.createFramebuffer();if(ut)for(let ct=0,pt=H.length;ct<pt;ct++){const Rt=i.get(H[ct]);Rt.__webglTexture===void 0&&(Rt.__webglTexture=n.createTexture(),r.memory.textures++)}if(w.samples>0&&N(w)===!1){C.__webglMultisampledFramebuffer=n.createFramebuffer(),C.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,C.__webglMultisampledFramebuffer);for(let ct=0;ct<H.length;ct++){const pt=H[ct];C.__webglColorRenderbuffer[ct]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,C.__webglColorRenderbuffer[ct]);const Rt=o.convert(pt.format,pt.colorSpace),dt=o.convert(pt.type),yt=b(pt.internalFormat,Rt,dt,pt.colorSpace,w.isXRRenderTarget===!0),Pt=L(w);n.renderbufferStorageMultisample(n.RENDERBUFFER,Pt,yt,w.width,w.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ct,n.RENDERBUFFER,C.__webglColorRenderbuffer[ct])}n.bindRenderbuffer(n.RENDERBUFFER,null),w.depthBuffer&&(C.__webglDepthRenderbuffer=n.createRenderbuffer(),xt(C.__webglDepthRenderbuffer,w,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(V){e.bindTexture(n.TEXTURE_CUBE_MAP,q.__webglTexture),Mt(n.TEXTURE_CUBE_MAP,v);for(let ct=0;ct<6;ct++)if(v.mipmaps&&v.mipmaps.length>0)for(let pt=0;pt<v.mipmaps.length;pt++)ft(C.__webglFramebuffer[ct][pt],w,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,pt);else ft(C.__webglFramebuffer[ct],w,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0);m(v)&&p(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(ut){for(let ct=0,pt=H.length;ct<pt;ct++){const Rt=H[ct],dt=i.get(Rt);e.bindTexture(n.TEXTURE_2D,dt.__webglTexture),Mt(n.TEXTURE_2D,Rt),ft(C.__webglFramebuffer,w,Rt,n.COLOR_ATTACHMENT0+ct,n.TEXTURE_2D,0),m(Rt)&&p(n.TEXTURE_2D)}e.unbindTexture()}else{let ct=n.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(ct=w.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(ct,q.__webglTexture),Mt(ct,v),v.mipmaps&&v.mipmaps.length>0)for(let pt=0;pt<v.mipmaps.length;pt++)ft(C.__webglFramebuffer[pt],w,v,n.COLOR_ATTACHMENT0,ct,pt);else ft(C.__webglFramebuffer,w,v,n.COLOR_ATTACHMENT0,ct,0);m(v)&&p(ct),e.unbindTexture()}w.depthBuffer&&lt(w)}function wt(w){const v=w.textures;for(let C=0,q=v.length;C<q;C++){const H=v[C];if(m(H)){const V=w.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,ut=i.get(H).__webglTexture;e.bindTexture(V,ut),p(V),e.unbindTexture()}}}const it=[],g=[];function T(w){if(w.samples>0){if(N(w)===!1){const v=w.textures,C=w.width,q=w.height;let H=n.COLOR_BUFFER_BIT;const V=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ut=i.get(w),ct=v.length>1;if(ct)for(let pt=0;pt<v.length;pt++)e.bindFramebuffer(n.FRAMEBUFFER,ut.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+pt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,ut.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+pt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,ut.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,ut.__webglFramebuffer);for(let pt=0;pt<v.length;pt++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(H|=n.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(H|=n.STENCIL_BUFFER_BIT)),ct){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ut.__webglColorRenderbuffer[pt]);const Rt=i.get(v[pt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Rt,0)}n.blitFramebuffer(0,0,C,q,0,0,C,q,H,n.NEAREST),l===!0&&(it.length=0,g.length=0,it.push(n.COLOR_ATTACHMENT0+pt),w.depthBuffer&&w.resolveDepthBuffer===!1&&(it.push(V),g.push(V),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,g)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,it))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ct)for(let pt=0;pt<v.length;pt++){e.bindFramebuffer(n.FRAMEBUFFER,ut.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+pt,n.RENDERBUFFER,ut.__webglColorRenderbuffer[pt]);const Rt=i.get(v[pt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,ut.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+pt,n.TEXTURE_2D,Rt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,ut.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&l){const v=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[v])}}}function L(w){return Math.min(s.maxSamples,w.samples)}function N(w){const v=i.get(w);return w.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function U(w){const v=r.render.frame;h.get(w)!==v&&(h.set(w,v),w.update())}function Y(w,v){const C=w.colorSpace,q=w.format,H=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||C!==ds&&C!==os&&(we.getTransfer(C)===Ue?(q!==ti||H!==Gi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",C)),v}function Z(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(c.width=w.naturalWidth||w.width,c.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(c.width=w.displayWidth,c.height=w.displayHeight):(c.width=w.width,c.height=w.height),c}this.allocateTextureUnit=G,this.resetTextureUnits=E,this.setTexture2D=Q,this.setTexture2DArray=at,this.setTexture3D=X,this.setTextureCube=nt,this.rebindTextures=ot,this.setupRenderTarget=ht,this.updateRenderTargetMipmap=wt,this.updateMultisampleRenderTarget=T,this.setupDepthRenderbuffer=lt,this.setupFrameBufferTexture=ft,this.useMultisampledRTT=N}function yS(n,t){function e(i,s=os){let o;const r=we.getTransfer(s);if(i===Gi)return n.UNSIGNED_BYTE;if(i===xu)return n.UNSIGNED_SHORT_4_4_4_4;if(i===yu)return n.UNSIGNED_SHORT_5_5_5_1;if(i===tp)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Jf)return n.BYTE;if(i===Qf)return n.SHORT;if(i===dr)return n.UNSIGNED_SHORT;if(i===vu)return n.INT;if(i===Is)return n.UNSIGNED_INT;if(i===Fi)return n.FLOAT;if(i===yr)return n.HALF_FLOAT;if(i===ep)return n.ALPHA;if(i===np)return n.RGB;if(i===ti)return n.RGBA;if(i===ip)return n.LUMINANCE;if(i===sp)return n.LUMINANCE_ALPHA;if(i===po)return n.DEPTH_COMPONENT;if(i===bo)return n.DEPTH_STENCIL;if(i===op)return n.RED;if(i===Mu)return n.RED_INTEGER;if(i===rp)return n.RG;if(i===wu)return n.RG_INTEGER;if(i===Su)return n.RGBA_INTEGER;if(i===la||i===ca||i===ua||i===ha)if(r===Ue)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(i===la)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ca)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ua)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ha)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(i===la)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ca)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ua)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ha)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===pc||i===mc||i===gc||i===_c)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(i===pc)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===mc)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===gc)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===_c)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===vc||i===xc||i===yc)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(i===vc||i===xc)return r===Ue?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(i===yc)return r===Ue?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Mc||i===wc||i===Sc||i===Ec||i===bc||i===Tc||i===Ac||i===Rc||i===Pc||i===Cc||i===Ic||i===Lc||i===Dc||i===Uc)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(i===Mc)return r===Ue?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===wc)return r===Ue?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Sc)return r===Ue?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Ec)return r===Ue?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===bc)return r===Ue?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Tc)return r===Ue?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Ac)return r===Ue?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Rc)return r===Ue?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Pc)return r===Ue?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Cc)return r===Ue?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Ic)return r===Ue?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Lc)return r===Ue?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Dc)return r===Ue?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Uc)return r===Ue?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===da||i===Nc||i===Fc)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(i===da)return r===Ue?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Nc)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Fc)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===ap||i===Oc||i===Bc||i===zc)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(i===da)return o.COMPRESSED_RED_RGTC1_EXT;if(i===Oc)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Bc)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===zc)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Eo?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}class MS extends Fe{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class $t extends en{constructor(){super(),this.isGroup=!0,this.type="Group"}}const wS={type:"move"};class Fl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new $t,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new $t,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new K,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new K),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new $t,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new K,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new K),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,o=null,r=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){r=!0;for(const x of t.hand.values()){const m=e.getJointPose(x,i),p=this._getHandJoint(c,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,_=.005;c.inputState.pinching&&d>f+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(o=e.getPose(t.gripSpace,i),o!==null&&(l.matrix.fromArray(o.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,o.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(o.linearVelocity)):l.hasLinearVelocity=!1,o.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(o.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&o!==null&&(s=o),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(wS)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=o!==null),c!==null&&(c.visible=r!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new $t;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const SS=`
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

}`;class bS{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){const s=new _n,o=t.properties.get(s);o.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new Ln({vertexShader:SS,fragmentShader:ES,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new R(new Va(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class TS extends Ro{constructor(t,e){super();const i=this;let s=null,o=1,r=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,_=null;const x=new bS,m=e.getContextAttributes();let p=null,b=null;const M=[],S=[],O=new Bt;let I=null;const P=new Fe;P.layers.enable(1),P.viewport=new Pe;const F=new Fe;F.layers.enable(2),F.viewport=new Pe;const et=[P,F],y=new MS;y.layers.enable(1),y.layers.enable(2);let E=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(rt){let ft=M[rt];return ft===void 0&&(ft=new Fl,M[rt]=ft),ft.getTargetRaySpace()},this.getControllerGrip=function(rt){let ft=M[rt];return ft===void 0&&(ft=new Fl,M[rt]=ft),ft.getGripSpace()},this.getHand=function(rt){let ft=M[rt];return ft===void 0&&(ft=new Fl,M[rt]=ft),ft.getHandSpace()};function W(rt){const ft=S.indexOf(rt.inputSource);if(ft===-1)return;const xt=M[ft];xt!==void 0&&(xt.update(rt.inputSource,rt.frame,c||r),xt.dispatchEvent({type:rt.type,data:rt.inputSource}))}function Q(){s.removeEventListener("select",W),s.removeEventListener("selectstart",W),s.removeEventListener("selectend",W),s.removeEventListener("squeeze",W),s.removeEventListener("squeezestart",W),s.removeEventListener("squeezeend",W),s.removeEventListener("end",Q),s.removeEventListener("inputsourceschange",at);for(let rt=0;rt<M.length;rt++){const ft=S[rt];ft!==null&&(S[rt]=null,M[rt].disconnect(ft))}E=null,G=null,x.reset(),t.setRenderTarget(p),f=null,d=null,u=null,s=null,b=null,zt.stop(),i.isPresenting=!1,t.setPixelRatio(I),t.setSize(O.width,O.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(rt){o=rt,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(rt){a=rt,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||r},this.setReferenceSpace=function(rt){c=rt},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(rt){if(s=rt,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",W),s.addEventListener("selectstart",W),s.addEventListener("selectend",W),s.addEventListener("squeeze",W),s.addEventListener("squeezestart",W),s.addEventListener("squeezeend",W),s.addEventListener("end",Q),s.addEventListener("inputsourceschange",at),m.xrCompatible!==!0&&await e.makeXRCompatible(),I=t.getPixelRatio(),t.getSize(O),s.renderState.layers===void 0){const ft={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:o};f=new XRWebGLLayer(s,e,ft),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),b=new Ls(f.framebufferWidth,f.framebufferHeight,{format:ti,type:Gi,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let ft=null,xt=null,B=null;m.depth&&(B=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ft=m.stencil?bo:po,xt=m.stencil?Eo:Is);const lt={colorFormat:e.RGBA8,depthFormat:B,scaleFactor:o};u=new XRWebGLBinding(s,e),d=u.createProjectionLayer(lt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),b=new Ls(d.textureWidth,d.textureHeight,{format:ti,type:Gi,depthTexture:new wp(d.textureWidth,d.textureHeight,xt,void 0,void 0,void 0,void 0,void 0,void 0,ft),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,r=await s.requestReferenceSpace(a),zt.setContext(s),zt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function at(rt){for(let ft=0;ft<rt.removed.length;ft++){const xt=rt.removed[ft],B=S.indexOf(xt);B>=0&&(S[B]=null,M[B].disconnect(xt))}for(let ft=0;ft<rt.added.length;ft++){const xt=rt.added[ft];let B=S.indexOf(xt);if(B===-1){for(let ot=0;ot<M.length;ot++)if(ot>=S.length){S.push(xt),B=ot;break}else if(S[ot]===null){S[ot]=xt,B=ot;break}if(B===-1)break}const lt=M[B];lt&&lt.connect(xt)}}const X=new K,nt=new K;function $(rt,ft,xt){X.setFromMatrixPosition(ft.matrixWorld),nt.setFromMatrixPosition(xt.matrixWorld);const B=X.distanceTo(nt),lt=ft.projectionMatrix.elements,ot=xt.projectionMatrix.elements,ht=lt[14]/(lt[10]-1),wt=lt[14]/(lt[10]+1),it=(lt[9]+1)/lt[5],g=(lt[9]-1)/lt[5],T=(lt[8]-1)/lt[0],L=(ot[8]+1)/ot[0],N=ht*T,U=ht*L,Y=B/(-T+L),Z=Y*-T;if(ft.matrixWorld.decompose(rt.position,rt.quaternion,rt.scale),rt.translateX(Z),rt.translateZ(Y),rt.matrixWorld.compose(rt.position,rt.quaternion,rt.scale),rt.matrixWorldInverse.copy(rt.matrixWorld).invert(),lt[10]===-1)rt.projectionMatrix.copy(ft.projectionMatrix),rt.projectionMatrixInverse.copy(ft.projectionMatrixInverse);else{const w=ht+Y,v=wt+Y,C=N-Z,q=U+(B-Z),H=it*wt/v*w,V=g*wt/v*w;rt.projectionMatrix.makePerspective(C,q,H,V,w,v),rt.projectionMatrixInverse.copy(rt.projectionMatrix).invert()}}function gt(rt,ft){ft===null?rt.matrixWorld.copy(rt.matrix):rt.matrixWorld.multiplyMatrices(ft.matrixWorld,rt.matrix),rt.matrixWorldInverse.copy(rt.matrixWorld).invert()}this.updateCamera=function(rt){if(s===null)return;let ft=rt.near,xt=rt.far;x.texture!==null&&(x.depthNear>0&&(ft=x.depthNear),x.depthFar>0&&(xt=x.depthFar)),y.near=F.near=P.near=ft,y.far=F.far=P.far=xt,(E!==y.near||G!==y.far)&&(s.updateRenderState({depthNear:y.near,depthFar:y.far}),E=y.near,G=y.far);const B=rt.parent,lt=y.cameras;gt(y,B);for(let ot=0;ot<lt.length;ot++)gt(lt[ot],B);lt.length===2?$(y,P,F):y.projectionMatrix.copy(P.projectionMatrix),mt(rt,y,B)};function mt(rt,ft,xt){xt===null?rt.matrix.copy(ft.matrixWorld):(rt.matrix.copy(xt.matrixWorld),rt.matrix.invert(),rt.matrix.multiply(ft.matrixWorld)),rt.matrix.decompose(rt.position,rt.quaternion,rt.scale),rt.updateMatrixWorld(!0),rt.projectionMatrix.copy(ft.projectionMatrix),rt.projectionMatrixInverse.copy(ft.projectionMatrixInverse),rt.isPerspectiveCamera&&(rt.fov=fr*2*Math.atan(1/rt.projectionMatrix.elements[5]),rt.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(rt){l=rt,d!==null&&(d.fixedFoveation=rt),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=rt)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(y)};let Mt=null;function It(rt,ft){if(h=ft.getViewerPose(c||r),_=ft,h!==null){const xt=h.views;f!==null&&(t.setRenderTargetFramebuffer(b,f.framebuffer),t.setRenderTarget(b));let B=!1;xt.length!==y.cameras.length&&(y.cameras.length=0,B=!0);for(let ot=0;ot<xt.length;ot++){const ht=xt[ot];let wt=null;if(f!==null)wt=f.getViewport(ht);else{const g=u.getViewSubImage(d,ht);wt=g.viewport,ot===0&&(t.setRenderTargetTextures(b,g.colorTexture,d.ignoreDepthValues?void 0:g.depthStencilTexture),t.setRenderTarget(b))}let it=et[ot];it===void 0&&(it=new Fe,it.layers.enable(ot),it.viewport=new Pe,et[ot]=it),it.matrix.fromArray(ht.transform.matrix),it.matrix.decompose(it.position,it.quaternion,it.scale),it.projectionMatrix.fromArray(ht.projectionMatrix),it.projectionMatrixInverse.copy(it.projectionMatrix).invert(),it.viewport.set(wt.x,wt.y,wt.width,wt.height),ot===0&&(y.matrix.copy(it.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),B===!0&&y.cameras.push(it)}const lt=s.enabledFeatures;if(lt&&lt.includes("depth-sensing")){const ot=u.getDepthInformation(xt[0]);ot&&ot.isValid&&ot.texture&&x.init(t,ot,s.renderState)}}for(let xt=0;xt<M.length;xt++){const B=S[xt],lt=M[xt];B!==null&&lt!==void 0&&lt.update(B,ft,c||r)}Mt&&Mt(rt,ft),ft.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ft}),_=null}const zt=new yp;zt.setAnimationLoop(It),this.setAnimationLoop=function(rt){Mt=rt},this.dispose=function(){}}}const Ms=new xi,AS=new Ne;function RS(n,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,vp(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,b,M,S){p.isMeshBasicMaterial||p.isMeshLambertMaterial?o(m,p):p.isMeshToonMaterial?(o(m,p),u(m,p)):p.isMeshPhongMaterial?(o(m,p),h(m,p)):p.isMeshStandardMaterial?(o(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,S)):p.isMeshMatcapMaterial?(o(m,p),_(m,p)):p.isMeshDepthMaterial?o(m,p):p.isMeshDistanceMaterial?(o(m,p),x(m,p)):p.isMeshNormalMaterial?o(m,p):p.isLineBasicMaterial?(r(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,b,M):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function o(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===yn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===yn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const b=t.get(p),M=b.envMap,S=b.envMapRotation;M&&(m.envMap.value=M,Ms.copy(S),Ms.x*=-1,Ms.y*=-1,Ms.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Ms.y*=-1,Ms.z*=-1),m.envMapRotation.value.setFromMatrix4(AS.makeRotationFromEuler(Ms)),m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function r(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,b,M){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*b,m.scale.value=M*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,b){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===yn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){const b=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function PS(n,t,e,i){let s={},o={},r=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,M){const S=M.program;i.uniformBlockBinding(b,S)}function c(b,M){let S=s[b.id];S===void 0&&(_(b),S=h(b),s[b.id]=S,b.addEventListener("dispose",m));const O=M.program;i.updateUBOMapping(b,O);const I=t.render.frame;o[b.id]!==I&&(d(b),o[b.id]=I)}function h(b){const M=u();b.__bindingPointIndex=M;const S=n.createBuffer(),O=b.__size,I=b.usage;return n.bindBuffer(n.UNIFORM_BUFFER,S),n.bufferData(n.UNIFORM_BUFFER,O,I),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,M,S),S}function u(){for(let b=0;b<a;b++)if(r.indexOf(b)===-1)return r.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(b){const M=s[b.id],S=b.uniforms,O=b.__cache;n.bindBuffer(n.UNIFORM_BUFFER,M);for(let I=0,P=S.length;I<P;I++){const F=Array.isArray(S[I])?S[I]:[S[I]];for(let et=0,y=F.length;et<y;et++){const E=F[et];if(f(E,I,et,O)===!0){const G=E.__offset,W=Array.isArray(E.value)?E.value:[E.value];let Q=0;for(let at=0;at<W.length;at++){const X=W[at],nt=x(X);typeof X=="number"||typeof X=="boolean"?(E.__data[0]=X,n.bufferSubData(n.UNIFORM_BUFFER,G+Q,E.__data)):X.isMatrix3?(E.__data[0]=X.elements[0],E.__data[1]=X.elements[1],E.__data[2]=X.elements[2],E.__data[3]=0,E.__data[4]=X.elements[3],E.__data[5]=X.elements[4],E.__data[6]=X.elements[5],E.__data[7]=0,E.__data[8]=X.elements[6],E.__data[9]=X.elements[7],E.__data[10]=X.elements[8],E.__data[11]=0):(X.toArray(E.__data,Q),Q+=nt.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,G,E.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(b,M,S,O){const I=b.value,P=M+"_"+S;if(O[P]===void 0)return typeof I=="number"||typeof I=="boolean"?O[P]=I:O[P]=I.clone(),!0;{const F=O[P];if(typeof I=="number"||typeof I=="boolean"){if(F!==I)return O[P]=I,!0}else if(F.equals(I)===!1)return F.copy(I),!0}return!1}function _(b){const M=b.uniforms;let S=0;const O=16;for(let P=0,F=M.length;P<F;P++){const et=Array.isArray(M[P])?M[P]:[M[P]];for(let y=0,E=et.length;y<E;y++){const G=et[y],W=Array.isArray(G.value)?G.value:[G.value];for(let Q=0,at=W.length;Q<at;Q++){const X=W[Q],nt=x(X),$=S%O,gt=$%nt.boundary,mt=$+gt;S+=gt,mt!==0&&O-mt<nt.storage&&(S+=O-mt),G.__data=new Float32Array(nt.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=S,S+=nt.storage}}}const I=S%O;return I>0&&(S+=O-I),b.__size=S,b.__cache={},this}function x(b){const M={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(M.boundary=4,M.storage=4):b.isVector2?(M.boundary=8,M.storage=8):b.isVector3||b.isColor?(M.boundary=16,M.storage=12):b.isVector4?(M.boundary=16,M.storage=16):b.isMatrix3?(M.boundary=48,M.storage=48):b.isMatrix4?(M.boundary=64,M.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),M}function m(b){const M=b.target;M.removeEventListener("dispose",m);const S=r.indexOf(M.__bindingPointIndex);r.splice(S,1),n.deleteBuffer(s[M.id]),delete s[M.id],delete o[M.id]}function p(){for(const b in s)n.deleteBuffer(s[b]);r=[],s={},o={}}return{bind:l,update:c,dispose:p}}class oi{constructor(t={}){const{canvas:e=_v(),context:i=null,depth:s=!0,stencil:o=!1,alpha:r=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=r;const f=new Uint32Array(4),_=new Int32Array(4);let x=null,m=null;const p=[],b=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Kn,this.toneMapping=as,this.toneMappingExposure=1;const M=this;let S=!1,O=0,I=0,P=null,F=-1,et=null;const y=new Pe,E=new Pe;let G=null;const W=new he(0);let Q=0,at=e.width,X=e.height,nt=1,$=null,gt=null;const mt=new Pe(0,0,at,X),Mt=new Pe(0,0,at,X);let It=!1;const zt=new Au;let rt=!1,ft=!1;const xt=new Ne,B=new Ne,lt=new K,ot=new Pe,ht={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let wt=!1;function it(){return P===null?nt:1}let g=i;function T(A,J){return e.getContext(A,J)}try{const A={alpha:!0,depth:s,stencil:o,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${_u}`),e.addEventListener("webglcontextlost",tt,!1),e.addEventListener("webglcontextrestored",St,!1),e.addEventListener("webglcontextcreationerror",Et,!1),g===null){const J="webgl2";if(g=T(J,A),g===null)throw T(J)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let L,N,U,Y,Z,w,v,C,q,H,V,ut,ct,pt,Rt,dt,yt,Pt,Lt,bt,Vt,Dt,kt,z;function _t(){L=new NM(g),L.init(),Dt=new yS(g,L),N=new PM(g,L,t,Dt),U=new _S(g),N.reverseDepthBuffer&&U.buffers.depth.setReversed(!0),Y=new BM(g),Z=new nS,w=new xS(g,L,U,Z,N,Dt,Y),v=new IM(M),C=new UM(M),q=new Xv(g),kt=new AM(g,q),H=new FM(g,q,Y,kt),V=new GM(g,H,q,Y),Lt=new zM(g,N,w),dt=new CM(Z),ut=new eS(M,v,C,L,N,kt,dt),ct=new RS(M,Z),pt=new sS,Rt=new uS(L),Pt=new TM(M,v,C,U,V,d,l),yt=new mS(M,V,N),z=new PS(g,Y,N,U),bt=new RM(g,L,Y),Vt=new OM(g,L,Y),Y.programs=ut.programs,M.capabilities=N,M.extensions=L,M.properties=Z,M.renderLists=pt,M.shadowMap=yt,M.state=U,M.info=Y}_t();const st=new TS(M,g);this.xr=st,this.getContext=function(){return g},this.getContextAttributes=function(){return g.getContextAttributes()},this.forceContextLoss=function(){const A=L.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=L.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return nt},this.setPixelRatio=function(A){A!==void 0&&(nt=A,this.setSize(at,X,!1))},this.getSize=function(A){return A.set(at,X)},this.setSize=function(A,J,D=!0){if(st.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}at=A,X=J,e.width=Math.floor(A*nt),e.height=Math.floor(J*nt),D===!0&&(e.style.width=A+"px",e.style.height=J+"px"),this.setViewport(0,0,A,J)},this.getDrawingBufferSize=function(A){return A.set(at*nt,X*nt).floor()},this.setDrawingBufferSize=function(A,J,D){at=A,X=J,nt=D,e.width=Math.floor(A*D),e.height=Math.floor(J*D),this.setViewport(0,0,A,J)},this.getCurrentViewport=function(A){return A.copy(y)},this.getViewport=function(A){return A.copy(mt)},this.setViewport=function(A,J,D,j){A.isVector4?mt.set(A.x,A.y,A.z,A.w):mt.set(A,J,D,j),U.viewport(y.copy(mt).multiplyScalar(nt).round())},this.getScissor=function(A){return A.copy(Mt)},this.setScissor=function(A,J,D,j){A.isVector4?Mt.set(A.x,A.y,A.z,A.w):Mt.set(A,J,D,j),U.scissor(E.copy(Mt).multiplyScalar(nt).round())},this.getScissorTest=function(){return It},this.setScissorTest=function(A){U.setScissorTest(It=A)},this.setOpaqueSort=function(A){$=A},this.setTransparentSort=function(A){gt=A},this.getClearColor=function(A){return A.copy(Pt.getClearColor())},this.setClearColor=function(){Pt.setClearColor.apply(Pt,arguments)},this.getClearAlpha=function(){return Pt.getClearAlpha()},this.setClearAlpha=function(){Pt.setClearAlpha.apply(Pt,arguments)},this.clear=function(A=!0,J=!0,D=!0){let j=0;if(A){let k=!1;if(P!==null){const vt=P.texture.format;k=vt===Su||vt===wu||vt===Mu}if(k){const vt=P.texture.type,Ct=vt===Gi||vt===Is||vt===dr||vt===Eo||vt===xu||vt===yu,Ft=Pt.getClearColor(),Ut=Pt.getClearAlpha(),Yt=Ft.r,qt=Ft.g,Gt=Ft.b;Ct?(f[0]=Yt,f[1]=qt,f[2]=Gt,f[3]=Ut,g.clearBufferuiv(g.COLOR,0,f)):(_[0]=Yt,_[1]=qt,_[2]=Gt,_[3]=Ut,g.clearBufferiv(g.COLOR,0,_))}else j|=g.COLOR_BUFFER_BIT}J&&(j|=g.DEPTH_BUFFER_BIT,g.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),D&&(j|=g.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),g.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",tt,!1),e.removeEventListener("webglcontextrestored",St,!1),e.removeEventListener("webglcontextcreationerror",Et,!1),pt.dispose(),Rt.dispose(),Z.dispose(),v.dispose(),C.dispose(),V.dispose(),kt.dispose(),z.dispose(),ut.dispose(),st.dispose(),st.removeEventListener("sessionstart",pe),st.removeEventListener("sessionend",Ae),fe.stop()};function tt(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function St(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const A=Y.autoReset,J=yt.enabled,D=yt.autoUpdate,j=yt.needsUpdate,k=yt.type;_t(),Y.autoReset=A,yt.enabled=J,yt.autoUpdate=D,yt.needsUpdate=j,yt.type=k}function Et(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Ht(A){const J=A.target;J.removeEventListener("dispose",Ht),jt(J)}function jt(A){Qt(A),Z.remove(A)}function Qt(A){const J=Z.get(A).programs;J!==void 0&&(J.forEach(function(D){ut.releaseProgram(D)}),A.isShaderMaterial&&ut.releaseShaderCache(A))}this.renderBufferDirect=function(A,J,D,j,k,vt){J===null&&(J=ht);const Ct=k.isMesh&&k.matrixWorld.determinant()<0,Ft=Dn(A,J,D,j,k);U.setMaterial(j,Ct);let Ut=D.index,Yt=1;if(j.wireframe===!0){if(Ut=H.getWireframeAttribute(D),Ut===void 0)return;Yt=2}const qt=D.drawRange,Gt=D.attributes.position;let ee=qt.start*Yt,ue=(qt.start+qt.count)*Yt;vt!==null&&(ee=Math.max(ee,vt.start*Yt),ue=Math.min(ue,(vt.start+vt.count)*Yt)),Ut!==null?(ee=Math.max(ee,0),ue=Math.min(ue,Ut.count)):Gt!=null&&(ee=Math.max(ee,0),ue=Math.min(ue,Gt.count));const de=ue-ee;if(de<0||de===1/0)return;kt.setup(k,j,Ft,D,Ut);let Ce,te=bt;if(Ut!==null&&(Ce=q.get(Ut),te=Vt,te.setIndex(Ce)),k.isMesh)j.wireframe===!0?(U.setLineWidth(j.wireframeLinewidth*it()),te.setMode(g.LINES)):te.setMode(g.TRIANGLES);else if(k.isLine){let Wt=j.linewidth;Wt===void 0&&(Wt=1),U.setLineWidth(Wt*it()),k.isLineSegments?te.setMode(g.LINES):k.isLineLoop?te.setMode(g.LINE_LOOP):te.setMode(g.LINE_STRIP)}else k.isPoints?te.setMode(g.POINTS):k.isSprite&&te.setMode(g.TRIANGLES);if(k.isBatchedMesh)if(k._multiDrawInstances!==null)te.renderMultiDrawInstances(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount,k._multiDrawInstances);else if(L.get("WEBGL_multi_draw"))te.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{const Wt=k._multiDrawStarts,xe=k._multiDrawCounts,At=k._multiDrawCount,Ee=Ut?q.get(Ut).bytesPerElement:1,Re=Z.get(j).currentProgram.getUniforms();for(let me=0;me<At;me++)Re.setValue(g,"_gl_DrawID",me),te.render(Wt[me]/Ee,xe[me])}else if(k.isInstancedMesh)te.renderInstances(ee,de,k.count);else if(D.isInstancedBufferGeometry){const Wt=D._maxInstanceCount!==void 0?D._maxInstanceCount:1/0,xe=Math.min(D.instanceCount,Wt);te.renderInstances(ee,de,xe)}else te.render(ee,de)};function Zt(A,J,D){A.transparent===!0&&A.side===ge&&A.forceSinglePass===!1?(A.side=yn,A.needsUpdate=!0,Ye(A,J,D),A.side=cs,A.needsUpdate=!0,Ye(A,J,D),A.side=ge):Ye(A,J,D)}this.compile=function(A,J,D=null){D===null&&(D=A),m=Rt.get(D),m.init(J),b.push(m),D.traverseVisible(function(k){k.isLight&&k.layers.test(J.layers)&&(m.pushLight(k),k.castShadow&&m.pushShadow(k))}),A!==D&&A.traverseVisible(function(k){k.isLight&&k.layers.test(J.layers)&&(m.pushLight(k),k.castShadow&&m.pushShadow(k))}),m.setupLights();const j=new Set;return A.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;const vt=k.material;if(vt)if(Array.isArray(vt))for(let Ct=0;Ct<vt.length;Ct++){const Ft=vt[Ct];Zt(Ft,D,k),j.add(Ft)}else Zt(vt,D,k),j.add(vt)}),b.pop(),m=null,j},this.compileAsync=function(A,J,D=null){const j=this.compile(A,J,D);return new Promise(k=>{function vt(){if(j.forEach(function(Ct){Z.get(Ct).currentProgram.isReady()&&j.delete(Ct)}),j.size===0){k(A);return}setTimeout(vt,10)}L.get("KHR_parallel_shader_compile")!==null?vt():setTimeout(vt,10)})};let ne=null;function ce(A){ne&&ne(A)}function pe(){fe.stop()}function Ae(){fe.start()}const fe=new yp;fe.setAnimationLoop(ce),typeof self<"u"&&fe.setContext(self),this.setAnimationLoop=function(A){ne=A,st.setAnimationLoop(A),A===null?fe.stop():fe.start()},st.addEventListener("sessionstart",pe),st.addEventListener("sessionend",Ae),this.render=function(A,J){if(J!==void 0&&J.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),J.parent===null&&J.matrixWorldAutoUpdate===!0&&J.updateMatrixWorld(),st.enabled===!0&&st.isPresenting===!0&&(st.cameraAutoUpdate===!0&&st.updateCamera(J),J=st.getCamera()),A.isScene===!0&&A.onBeforeRender(M,A,J,P),m=Rt.get(A,b.length),m.init(J),b.push(m),B.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),zt.setFromProjectionMatrix(B),ft=this.localClippingEnabled,rt=dt.init(this.clippingPlanes,ft),x=pt.get(A,p.length),x.init(),p.push(x),st.enabled===!0&&st.isPresenting===!0){const vt=M.xr.getDepthSensingMesh();vt!==null&&Le(vt,J,-1/0,M.sortObjects)}Le(A,J,0,M.sortObjects),x.finish(),M.sortObjects===!0&&x.sort($,gt),wt=st.enabled===!1||st.isPresenting===!1||st.hasDepthSensing()===!1,wt&&Pt.addToRenderList(x,A),this.info.render.frame++,rt===!0&&dt.beginShadows();const D=m.state.shadowsArray;yt.render(D,A,J),rt===!0&&dt.endShadows(),this.info.autoReset===!0&&this.info.reset();const j=x.opaque,k=x.transmissive;if(m.setupLights(),J.isArrayCamera){const vt=J.cameras;if(k.length>0)for(let Ct=0,Ft=vt.length;Ct<Ft;Ct++){const Ut=vt[Ct];ze(j,k,A,Ut)}wt&&Pt.render(A);for(let Ct=0,Ft=vt.length;Ct<Ft;Ct++){const Ut=vt[Ct];_e(x,A,Ut,Ut.viewport)}}else k.length>0&&ze(j,k,A,J),wt&&Pt.render(A),_e(x,A,J);P!==null&&(w.updateMultisampleRenderTarget(P),w.updateRenderTargetMipmap(P)),A.isScene===!0&&A.onAfterRender(M,A,J),kt.resetDefaultState(),F=-1,et=null,b.pop(),b.length>0?(m=b[b.length-1],rt===!0&&dt.setGlobalState(M.clippingPlanes,m.state.camera)):m=null,p.pop(),p.length>0?x=p[p.length-1]:x=null};function Le(A,J,D,j){if(A.visible===!1)return;if(A.layers.test(J.layers)){if(A.isGroup)D=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(J);else if(A.isLight)m.pushLight(A),A.castShadow&&m.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||zt.intersectsSprite(A)){j&&ot.setFromMatrixPosition(A.matrixWorld).applyMatrix4(B);const Ct=V.update(A),Ft=A.material;Ft.visible&&x.push(A,Ct,Ft,D,ot.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||zt.intersectsObject(A))){const Ct=V.update(A),Ft=A.material;if(j&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),ot.copy(A.boundingSphere.center)):(Ct.boundingSphere===null&&Ct.computeBoundingSphere(),ot.copy(Ct.boundingSphere.center)),ot.applyMatrix4(A.matrixWorld).applyMatrix4(B)),Array.isArray(Ft)){const Ut=Ct.groups;for(let Yt=0,qt=Ut.length;Yt<qt;Yt++){const Gt=Ut[Yt],ee=Ft[Gt.materialIndex];ee&&ee.visible&&x.push(A,Ct,ee,D,ot.z,Gt)}}else Ft.visible&&x.push(A,Ct,Ft,D,ot.z,null)}}const vt=A.children;for(let Ct=0,Ft=vt.length;Ct<Ft;Ct++)Le(vt[Ct],J,D,j)}function _e(A,J,D,j){const k=A.opaque,vt=A.transmissive,Ct=A.transparent;m.setupLightsView(D),rt===!0&&dt.setGlobalState(M.clippingPlanes,D),j&&U.viewport(y.copy(j)),k.length>0&&ve(k,J,D),vt.length>0&&ve(vt,J,D),Ct.length>0&&ve(Ct,J,D),U.buffers.depth.setTest(!0),U.buffers.depth.setMask(!0),U.buffers.color.setMask(!0),U.setPolygonOffset(!1)}function ze(A,J,D,j){if((D.isScene===!0?D.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[j.id]===void 0&&(m.state.transmissionRenderTarget[j.id]=new Ls(1,1,{generateMipmaps:!0,type:L.has("EXT_color_buffer_half_float")||L.has("EXT_color_buffer_float")?yr:Gi,minFilter:Rs,samples:4,stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:we.workingColorSpace}));const vt=m.state.transmissionRenderTarget[j.id],Ct=j.viewport||y;vt.setSize(Ct.z,Ct.w);const Ft=M.getRenderTarget();M.setRenderTarget(vt),M.getClearColor(W),Q=M.getClearAlpha(),Q<1&&M.setClearColor(16777215,.5),M.clear(),wt&&Pt.render(D);const Ut=M.toneMapping;M.toneMapping=as;const Yt=j.viewport;if(j.viewport!==void 0&&(j.viewport=void 0),m.setupLightsView(j),rt===!0&&dt.setGlobalState(M.clippingPlanes,j),ve(A,D,j),w.updateMultisampleRenderTarget(vt),w.updateRenderTargetMipmap(vt),L.has("WEBGL_multisampled_render_to_texture")===!1){let qt=!1;for(let Gt=0,ee=J.length;Gt<ee;Gt++){const ue=J[Gt],de=ue.object,Ce=ue.geometry,te=ue.material,Wt=ue.group;if(te.side===ge&&de.layers.test(j.layers)){const xe=te.side;te.side=yn,te.needsUpdate=!0,qe(de,D,j,Ce,te,Wt),te.side=xe,te.needsUpdate=!0,qt=!0}}qt===!0&&(w.updateMultisampleRenderTarget(vt),w.updateRenderTargetMipmap(vt))}M.setRenderTarget(Ft),M.setClearColor(W,Q),Yt!==void 0&&(j.viewport=Yt),M.toneMapping=Ut}function ve(A,J,D){const j=J.isScene===!0?J.overrideMaterial:null;for(let k=0,vt=A.length;k<vt;k++){const Ct=A[k],Ft=Ct.object,Ut=Ct.geometry,Yt=j===null?Ct.material:j,qt=Ct.group;Ft.layers.test(D.layers)&&qe(Ft,J,D,Ut,Yt,qt)}}function qe(A,J,D,j,k,vt){A.onBeforeRender(M,J,D,j,k,vt),A.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),k.onBeforeRender(M,J,D,j,A,vt),k.transparent===!0&&k.side===ge&&k.forceSinglePass===!1?(k.side=yn,k.needsUpdate=!0,M.renderBufferDirect(D,J,j,k,A,vt),k.side=cs,k.needsUpdate=!0,M.renderBufferDirect(D,J,j,k,A,vt),k.side=ge):M.renderBufferDirect(D,J,j,k,A,vt),A.onAfterRender(M,J,D,j,k,vt)}function Ye(A,J,D){J.isScene!==!0&&(J=ht);const j=Z.get(A),k=m.state.lights,vt=m.state.shadowsArray,Ct=k.state.version,Ft=ut.getParameters(A,k.state,vt,J,D),Ut=ut.getProgramCacheKey(Ft);let Yt=j.programs;j.environment=A.isMeshStandardMaterial?J.environment:null,j.fog=J.fog,j.envMap=(A.isMeshStandardMaterial?C:v).get(A.envMap||j.environment),j.envMapRotation=j.environment!==null&&A.envMap===null?J.environmentRotation:A.envMapRotation,Yt===void 0&&(A.addEventListener("dispose",Ht),Yt=new Map,j.programs=Yt);let qt=Yt.get(Ut);if(qt!==void 0){if(j.currentProgram===qt&&j.lightsStateVersion===Ct)return Yi(A,Ft),qt}else Ft.uniforms=ut.getUniforms(A),A.onBeforeCompile(Ft,M),qt=ut.acquireProgram(Ft,Ut),Yt.set(Ut,qt),j.uniforms=Ft.uniforms;const Gt=j.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Gt.clippingPlanes=dt.uniform),Yi(A,Ft),j.needsLights=Ei(A),j.lightsStateVersion=Ct,j.needsLights&&(Gt.ambientLightColor.value=k.state.ambient,Gt.lightProbe.value=k.state.probe,Gt.directionalLights.value=k.state.directional,Gt.directionalLightShadows.value=k.state.directionalShadow,Gt.spotLights.value=k.state.spot,Gt.spotLightShadows.value=k.state.spotShadow,Gt.rectAreaLights.value=k.state.rectArea,Gt.ltc_1.value=k.state.rectAreaLTC1,Gt.ltc_2.value=k.state.rectAreaLTC2,Gt.pointLights.value=k.state.point,Gt.pointLightShadows.value=k.state.pointShadow,Gt.hemisphereLights.value=k.state.hemi,Gt.directionalShadowMap.value=k.state.directionalShadowMap,Gt.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Gt.spotShadowMap.value=k.state.spotShadowMap,Gt.spotLightMatrix.value=k.state.spotLightMatrix,Gt.spotLightMap.value=k.state.spotLightMap,Gt.pointShadowMap.value=k.state.pointShadowMap,Gt.pointShadowMatrix.value=k.state.pointShadowMatrix),j.currentProgram=qt,j.uniformsList=null,qt}function Wn(A){if(A.uniformsList===null){const J=A.currentProgram.getUniforms();A.uniformsList=pa.seqWithValue(J.seq,A.uniforms)}return A.uniformsList}function Yi(A,J){const D=Z.get(A);D.outputColorSpace=J.outputColorSpace,D.batching=J.batching,D.batchingColor=J.batchingColor,D.instancing=J.instancing,D.instancingColor=J.instancingColor,D.instancingMorph=J.instancingMorph,D.skinning=J.skinning,D.morphTargets=J.morphTargets,D.morphNormals=J.morphNormals,D.morphColors=J.morphColors,D.morphTargetsCount=J.morphTargetsCount,D.numClippingPlanes=J.numClippingPlanes,D.numIntersection=J.numClipIntersection,D.vertexAlphas=J.vertexAlphas,D.vertexTangents=J.vertexTangents,D.toneMapping=J.toneMapping}function Dn(A,J,D,j,k){J.isScene!==!0&&(J=ht),w.resetTextureUnits();const vt=J.fog,Ct=j.isMeshStandardMaterial?J.environment:null,Ft=P===null?M.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:ds,Ut=(j.isMeshStandardMaterial?C:v).get(j.envMap||Ct),Yt=j.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,qt=!!D.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),Gt=!!D.morphAttributes.position,ee=!!D.morphAttributes.normal,ue=!!D.morphAttributes.color;let de=as;j.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(de=M.toneMapping);const Ce=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,te=Ce!==void 0?Ce.length:0,Wt=Z.get(j),xe=m.state.lights;if(rt===!0&&(ft===!0||A!==et)){const Ge=A===et&&j.id===F;dt.setState(j,A,Ge)}let At=!1;j.version===Wt.__version?(Wt.needsLights&&Wt.lightsStateVersion!==xe.state.version||Wt.outputColorSpace!==Ft||k.isBatchedMesh&&Wt.batching===!1||!k.isBatchedMesh&&Wt.batching===!0||k.isBatchedMesh&&Wt.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&Wt.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&Wt.instancing===!1||!k.isInstancedMesh&&Wt.instancing===!0||k.isSkinnedMesh&&Wt.skinning===!1||!k.isSkinnedMesh&&Wt.skinning===!0||k.isInstancedMesh&&Wt.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&Wt.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&Wt.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&Wt.instancingMorph===!1&&k.morphTexture!==null||Wt.envMap!==Ut||j.fog===!0&&Wt.fog!==vt||Wt.numClippingPlanes!==void 0&&(Wt.numClippingPlanes!==dt.numPlanes||Wt.numIntersection!==dt.numIntersection)||Wt.vertexAlphas!==Yt||Wt.vertexTangents!==qt||Wt.morphTargets!==Gt||Wt.morphNormals!==ee||Wt.morphColors!==ue||Wt.toneMapping!==de||Wt.morphTargetsCount!==te)&&(At=!0):(At=!0,Wt.__version=j.version);let Ee=Wt.currentProgram;At===!0&&(Ee=Ye(j,J,k));let Re=!1,me=!1,sn=!1;const ye=Ee.getUniforms(),je=Wt.uniforms;if(U.useProgram(Ee.program)&&(Re=!0,me=!0,sn=!0),j.id!==F&&(F=j.id,me=!0),Re||et!==A){N.reverseDepthBuffer?(xt.copy(A.projectionMatrix),xv(xt),yv(xt),ye.setValue(g,"projectionMatrix",xt)):ye.setValue(g,"projectionMatrix",A.projectionMatrix),ye.setValue(g,"viewMatrix",A.matrixWorldInverse);const Ge=ye.map.cameraPosition;Ge!==void 0&&Ge.setValue(g,lt.setFromMatrixPosition(A.matrixWorld)),N.logarithmicDepthBuffer&&ye.setValue(g,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&ye.setValue(g,"isOrthographic",A.isOrthographicCamera===!0),et!==A&&(et=A,me=!0,sn=!0)}if(k.isSkinnedMesh){ye.setOptional(g,k,"bindMatrix"),ye.setOptional(g,k,"bindMatrixInverse");const Ge=k.skeleton;Ge&&(Ge.boneTexture===null&&Ge.computeBoneTexture(),ye.setValue(g,"boneTexture",Ge.boneTexture,w))}k.isBatchedMesh&&(ye.setOptional(g,k,"batchingTexture"),ye.setValue(g,"batchingTexture",k._matricesTexture,w),ye.setOptional(g,k,"batchingIdTexture"),ye.setValue(g,"batchingIdTexture",k._indirectTexture,w),ye.setOptional(g,k,"batchingColorTexture"),k._colorsTexture!==null&&ye.setValue(g,"batchingColorTexture",k._colorsTexture,w));const Un=D.morphAttributes;if((Un.position!==void 0||Un.normal!==void 0||Un.color!==void 0)&&Lt.update(k,D,Ee),(me||Wt.receiveShadow!==k.receiveShadow)&&(Wt.receiveShadow=k.receiveShadow,ye.setValue(g,"receiveShadow",k.receiveShadow)),j.isMeshGouraudMaterial&&j.envMap!==null&&(je.envMap.value=Ut,je.flipEnvMap.value=Ut.isCubeTexture&&Ut.isRenderTargetTexture===!1?-1:1),j.isMeshStandardMaterial&&j.envMap===null&&J.environment!==null&&(je.envMapIntensity.value=J.environmentIntensity),me&&(ye.setValue(g,"toneMappingExposure",M.toneMappingExposure),Wt.needsLights&&Mn(je,sn),vt&&j.fog===!0&&ct.refreshFogUniforms(je,vt),ct.refreshMaterialUniforms(je,j,nt,X,m.state.transmissionRenderTarget[A.id]),pa.upload(g,Wn(Wt),je,w)),j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(pa.upload(g,Wn(Wt),je,w),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&ye.setValue(g,"center",k.center),ye.setValue(g,"modelViewMatrix",k.modelViewMatrix),ye.setValue(g,"normalMatrix",k.normalMatrix),ye.setValue(g,"modelMatrix",k.matrixWorld),j.isShaderMaterial||j.isRawShaderMaterial){const Ge=j.uniformsGroups;for(let xn=0,li=Ge.length;xn<li;xn++){const wn=Ge[xn];z.update(wn,Ee),z.bind(wn,Ee)}}return Ee}function Mn(A,J){A.ambientLightColor.needsUpdate=J,A.lightProbe.needsUpdate=J,A.directionalLights.needsUpdate=J,A.directionalLightShadows.needsUpdate=J,A.pointLights.needsUpdate=J,A.pointLightShadows.needsUpdate=J,A.spotLights.needsUpdate=J,A.spotLightShadows.needsUpdate=J,A.rectAreaLights.needsUpdate=J,A.hemisphereLights.needsUpdate=J}function Ei(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return O},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(A,J,D){Z.get(A.texture).__webglTexture=J,Z.get(A.depthTexture).__webglTexture=D;const j=Z.get(A);j.__hasExternalTextures=!0,j.__autoAllocateDepthBuffer=D===void 0,j.__autoAllocateDepthBuffer||L.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),j.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,J){const D=Z.get(A);D.__webglFramebuffer=J,D.__useDefaultFramebuffer=J===void 0},this.setRenderTarget=function(A,J=0,D=0){P=A,O=J,I=D;let j=!0,k=null,vt=!1,Ct=!1;if(A){const Ut=Z.get(A);if(Ut.__useDefaultFramebuffer!==void 0)U.bindFramebuffer(g.FRAMEBUFFER,null),j=!1;else if(Ut.__webglFramebuffer===void 0)w.setupRenderTarget(A);else if(Ut.__hasExternalTextures)w.rebindTextures(A,Z.get(A.texture).__webglTexture,Z.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Gt=A.depthTexture;if(Ut.__boundDepthTexture!==Gt){if(Gt!==null&&Z.has(Gt)&&(A.width!==Gt.image.width||A.height!==Gt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");w.setupDepthRenderbuffer(A)}}const Yt=A.texture;(Yt.isData3DTexture||Yt.isDataArrayTexture||Yt.isCompressedArrayTexture)&&(Ct=!0);const qt=Z.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(qt[J])?k=qt[J][D]:k=qt[J],vt=!0):A.samples>0&&w.useMultisampledRTT(A)===!1?k=Z.get(A).__webglMultisampledFramebuffer:Array.isArray(qt)?k=qt[D]:k=qt,y.copy(A.viewport),E.copy(A.scissor),G=A.scissorTest}else y.copy(mt).multiplyScalar(nt).floor(),E.copy(Mt).multiplyScalar(nt).floor(),G=It;if(U.bindFramebuffer(g.FRAMEBUFFER,k)&&j&&U.drawBuffers(A,k),U.viewport(y),U.scissor(E),U.setScissorTest(G),vt){const Ut=Z.get(A.texture);g.framebufferTexture2D(g.FRAMEBUFFER,g.COLOR_ATTACHMENT0,g.TEXTURE_CUBE_MAP_POSITIVE_X+J,Ut.__webglTexture,D)}else if(Ct){const Ut=Z.get(A.texture),Yt=J||0;g.framebufferTextureLayer(g.FRAMEBUFFER,g.COLOR_ATTACHMENT0,Ut.__webglTexture,D||0,Yt)}F=-1},this.readRenderTargetPixels=function(A,J,D,j,k,vt,Ct){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ft=Z.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ct!==void 0&&(Ft=Ft[Ct]),Ft){U.bindFramebuffer(g.FRAMEBUFFER,Ft);try{const Ut=A.texture,Yt=Ut.format,qt=Ut.type;if(!N.textureFormatReadable(Yt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!N.textureTypeReadable(qt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}J>=0&&J<=A.width-j&&D>=0&&D<=A.height-k&&g.readPixels(J,D,j,k,Dt.convert(Yt),Dt.convert(qt),vt)}finally{const Ut=P!==null?Z.get(P).__webglFramebuffer:null;U.bindFramebuffer(g.FRAMEBUFFER,Ut)}}},this.readRenderTargetPixelsAsync=async function(A,J,D,j,k,vt,Ct){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ft=Z.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ct!==void 0&&(Ft=Ft[Ct]),Ft){const Ut=A.texture,Yt=Ut.format,qt=Ut.type;if(!N.textureFormatReadable(Yt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!N.textureTypeReadable(qt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(J>=0&&J<=A.width-j&&D>=0&&D<=A.height-k){U.bindFramebuffer(g.FRAMEBUFFER,Ft);const Gt=g.createBuffer();g.bindBuffer(g.PIXEL_PACK_BUFFER,Gt),g.bufferData(g.PIXEL_PACK_BUFFER,vt.byteLength,g.STREAM_READ),g.readPixels(J,D,j,k,Dt.convert(Yt),Dt.convert(qt),0);const ee=P!==null?Z.get(P).__webglFramebuffer:null;U.bindFramebuffer(g.FRAMEBUFFER,ee);const ue=g.fenceSync(g.SYNC_GPU_COMMANDS_COMPLETE,0);return g.flush(),await vv(g,ue,4),g.bindBuffer(g.PIXEL_PACK_BUFFER,Gt),g.getBufferSubData(g.PIXEL_PACK_BUFFER,0,vt),g.deleteBuffer(Gt),g.deleteSync(ue),vt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(A,J=null,D=0){A.isTexture!==!0&&(fa("WebGLRenderer: copyFramebufferToTexture function signature has changed."),J=arguments[0]||null,A=arguments[1]);const j=Math.pow(2,-D),k=Math.floor(A.image.width*j),vt=Math.floor(A.image.height*j),Ct=J!==null?J.x:0,Ft=J!==null?J.y:0;w.setTexture2D(A,0),g.copyTexSubImage2D(g.TEXTURE_2D,D,0,0,Ct,Ft,k,vt),U.unbindTexture()},this.copyTextureToTexture=function(A,J,D=null,j=null,k=0){A.isTexture!==!0&&(fa("WebGLRenderer: copyTextureToTexture function signature has changed."),j=arguments[0]||null,A=arguments[1],J=arguments[2],k=arguments[3]||0,D=null);let vt,Ct,Ft,Ut,Yt,qt;D!==null?(vt=D.max.x-D.min.x,Ct=D.max.y-D.min.y,Ft=D.min.x,Ut=D.min.y):(vt=A.image.width,Ct=A.image.height,Ft=0,Ut=0),j!==null?(Yt=j.x,qt=j.y):(Yt=0,qt=0);const Gt=Dt.convert(J.format),ee=Dt.convert(J.type);w.setTexture2D(J,0),g.pixelStorei(g.UNPACK_FLIP_Y_WEBGL,J.flipY),g.pixelStorei(g.UNPACK_PREMULTIPLY_ALPHA_WEBGL,J.premultiplyAlpha),g.pixelStorei(g.UNPACK_ALIGNMENT,J.unpackAlignment);const ue=g.getParameter(g.UNPACK_ROW_LENGTH),de=g.getParameter(g.UNPACK_IMAGE_HEIGHT),Ce=g.getParameter(g.UNPACK_SKIP_PIXELS),te=g.getParameter(g.UNPACK_SKIP_ROWS),Wt=g.getParameter(g.UNPACK_SKIP_IMAGES),xe=A.isCompressedTexture?A.mipmaps[k]:A.image;g.pixelStorei(g.UNPACK_ROW_LENGTH,xe.width),g.pixelStorei(g.UNPACK_IMAGE_HEIGHT,xe.height),g.pixelStorei(g.UNPACK_SKIP_PIXELS,Ft),g.pixelStorei(g.UNPACK_SKIP_ROWS,Ut),A.isDataTexture?g.texSubImage2D(g.TEXTURE_2D,k,Yt,qt,vt,Ct,Gt,ee,xe.data):A.isCompressedTexture?g.compressedTexSubImage2D(g.TEXTURE_2D,k,Yt,qt,xe.width,xe.height,Gt,xe.data):g.texSubImage2D(g.TEXTURE_2D,k,Yt,qt,vt,Ct,Gt,ee,xe),g.pixelStorei(g.UNPACK_ROW_LENGTH,ue),g.pixelStorei(g.UNPACK_IMAGE_HEIGHT,de),g.pixelStorei(g.UNPACK_SKIP_PIXELS,Ce),g.pixelStorei(g.UNPACK_SKIP_ROWS,te),g.pixelStorei(g.UNPACK_SKIP_IMAGES,Wt),k===0&&J.generateMipmaps&&g.generateMipmap(g.TEXTURE_2D),U.unbindTexture()},this.copyTextureToTexture3D=function(A,J,D=null,j=null,k=0){A.isTexture!==!0&&(fa("WebGLRenderer: copyTextureToTexture3D function signature has changed."),D=arguments[0]||null,j=arguments[1]||null,A=arguments[2],J=arguments[3],k=arguments[4]||0);let vt,Ct,Ft,Ut,Yt,qt,Gt,ee,ue;const de=A.isCompressedTexture?A.mipmaps[k]:A.image;D!==null?(vt=D.max.x-D.min.x,Ct=D.max.y-D.min.y,Ft=D.max.z-D.min.z,Ut=D.min.x,Yt=D.min.y,qt=D.min.z):(vt=de.width,Ct=de.height,Ft=de.depth,Ut=0,Yt=0,qt=0),j!==null?(Gt=j.x,ee=j.y,ue=j.z):(Gt=0,ee=0,ue=0);const Ce=Dt.convert(J.format),te=Dt.convert(J.type);let Wt;if(J.isData3DTexture)w.setTexture3D(J,0),Wt=g.TEXTURE_3D;else if(J.isDataArrayTexture||J.isCompressedArrayTexture)w.setTexture2DArray(J,0),Wt=g.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}g.pixelStorei(g.UNPACK_FLIP_Y_WEBGL,J.flipY),g.pixelStorei(g.UNPACK_PREMULTIPLY_ALPHA_WEBGL,J.premultiplyAlpha),g.pixelStorei(g.UNPACK_ALIGNMENT,J.unpackAlignment);const xe=g.getParameter(g.UNPACK_ROW_LENGTH),At=g.getParameter(g.UNPACK_IMAGE_HEIGHT),Ee=g.getParameter(g.UNPACK_SKIP_PIXELS),Re=g.getParameter(g.UNPACK_SKIP_ROWS),me=g.getParameter(g.UNPACK_SKIP_IMAGES);g.pixelStorei(g.UNPACK_ROW_LENGTH,de.width),g.pixelStorei(g.UNPACK_IMAGE_HEIGHT,de.height),g.pixelStorei(g.UNPACK_SKIP_PIXELS,Ut),g.pixelStorei(g.UNPACK_SKIP_ROWS,Yt),g.pixelStorei(g.UNPACK_SKIP_IMAGES,qt),A.isDataTexture||A.isData3DTexture?g.texSubImage3D(Wt,k,Gt,ee,ue,vt,Ct,Ft,Ce,te,de.data):J.isCompressedArrayTexture?g.compressedTexSubImage3D(Wt,k,Gt,ee,ue,vt,Ct,Ft,Ce,de.data):g.texSubImage3D(Wt,k,Gt,ee,ue,vt,Ct,Ft,Ce,te,de),g.pixelStorei(g.UNPACK_ROW_LENGTH,xe),g.pixelStorei(g.UNPACK_IMAGE_HEIGHT,At),g.pixelStorei(g.UNPACK_SKIP_PIXELS,Ee),g.pixelStorei(g.UNPACK_SKIP_ROWS,Re),g.pixelStorei(g.UNPACK_SKIP_IMAGES,me),k===0&&J.generateMipmaps&&g.generateMipmap(Wt),U.unbindTexture()},this.initRenderTarget=function(A){Z.get(A).__webglFramebuffer===void 0&&w.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?w.setTextureCube(A,0):A.isData3DTexture?w.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?w.setTexture2DArray(A,0):w.setTexture2D(A,0),U.unbindTexture()},this.resetState=function(){O=0,I=0,P=null,U.reset(),kt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Oi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===Eu?"display-p3":"srgb",e.unpackColorSpace=we.workingColorSpace===Ha?"display-p3":"srgb"}}class ri extends en{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new xi,this.environmentIntensity=1,this.environmentRotation=new xi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Hc extends Po{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new he(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Ed=new Ne,kc=new fp,Zr=new ka,Jr=new K;class Ol extends en{constructor(t=new vn,e=new Hc){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const i=this.geometry,s=this.matrixWorld,o=t.params.Points.threshold,r=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Zr.copy(i.boundingSphere),Zr.applyMatrix4(s),Zr.radius+=o,t.ray.intersectsSphere(Zr)===!1)return;Ed.copy(s).invert(),kc.copy(t.ray).applyMatrix4(Ed);const a=o/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,u=i.attributes.position;if(c!==null){const d=Math.max(0,r.start),f=Math.min(c.count,r.start+r.count);for(let _=d,x=f;_<x;_++){const m=c.getX(_);Jr.fromBufferAttribute(u,m),bd(Jr,m,l,s,t,e,this)}}else{const d=Math.max(0,r.start),f=Math.min(u.count,r.start+r.count);for(let _=d,x=f;_<x;_++)Jr.fromBufferAttribute(u,_),bd(Jr,_,l,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=s.length;o<r;o++){const a=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}}function bd(n,t,e,i,s,o,r){const a=kc.distanceSqToPoint(n);if(a<e){const l=new K;kc.closestPointToPoint(n,l),l.applyMatrix4(i);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;o.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:r})}}class Si{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let i,s=this.getPoint(0),o=0;e.push(0);for(let r=1;r<=t;r++)i=this.getPoint(r/t),o+=i.distanceTo(s),e.push(o),s=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const i=this.getLengths();let s=0;const o=i.length;let r;e?r=e:r=t*i[o-1];let a=0,l=o-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=i[s]-r,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===r)return s/(o-1);const h=i[s],d=i[s+1]-h,f=(r-h)/d;return(s+f)/(o-1)}getTangent(t,e){let s=t-1e-4,o=t+1e-4;s<0&&(s=0),o>1&&(o=1);const r=this.getPoint(s),a=this.getPoint(o),l=e||(r.isVector2?new Bt:new K);return l.copy(a).sub(r).normalize(),l}getTangentAt(t,e){const i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e){const i=new K,s=[],o=[],r=[],a=new K,l=new Ne;for(let f=0;f<=t;f++){const _=f/t;s[f]=this.getTangentAt(_,new K)}o[0]=new K,r[0]=new K;let c=Number.MAX_VALUE;const h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,i.set(1,0,0)),u<=c&&(c=u,i.set(0,1,0)),d<=c&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),o[0].crossVectors(s[0],a),r[0].crossVectors(s[0],o[0]);for(let f=1;f<=t;f++){if(o[f]=o[f-1].clone(),r[f]=r[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();const _=Math.acos(Qe(s[f-1].dot(s[f]),-1,1));o[f].applyMatrix4(l.makeRotationAxis(a,_))}r[f].crossVectors(s[f],o[f])}if(e===!0){let f=Math.acos(Qe(o[0].dot(o[t]),-1,1));f/=t,s[0].dot(a.crossVectors(o[0],o[t]))>0&&(f=-f);for(let _=1;_<=t;_++)o[_].applyMatrix4(l.makeRotationAxis(s[_],f*_)),r[_].crossVectors(s[_],o[_])}return{tangents:s,normals:o,binormals:r}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Pu extends Si{constructor(t=0,e=0,i=1,s=1,o=0,r=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=s,this.aStartAngle=o,this.aEndAngle=r,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new Bt){const i=e,s=Math.PI*2;let o=this.aEndAngle-this.aStartAngle;const r=Math.abs(o)<Number.EPSILON;for(;o<0;)o+=s;for(;o>s;)o-=s;o<Number.EPSILON&&(r?o=0:o=s),this.aClockwise===!0&&!r&&(o===s?o=-s:o=o-s);const a=this.aStartAngle+t*o;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return i.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class CS extends Pu{constructor(t,e,i,s,o,r){super(t,e,i,i,s,o,r),this.isArcCurve=!0,this.type="ArcCurve"}}function Cu(){let n=0,t=0,e=0,i=0;function s(o,r,a,l){n=o,t=a,e=-3*o+3*r-2*a-l,i=2*o-2*r+a+l}return{initCatmullRom:function(o,r,a,l,c){s(r,a,c*(a-o),c*(l-r))},initNonuniformCatmullRom:function(o,r,a,l,c,h,u){let d=(r-o)/c-(a-o)/(c+h)+(a-r)/h,f=(a-r)/h-(l-r)/(h+u)+(l-a)/u;d*=h,f*=h,s(r,a,d,f)},calc:function(o){const r=o*o,a=r*o;return n+t*o+e*r+i*a}}}const Qr=new K,Bl=new Cu,zl=new Cu,Gl=new Cu;class IS extends Si{constructor(t=[],e=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=s}getPoint(t,e=new K){const i=e,s=this.points,o=s.length,r=(o-(this.closed?0:1))*t;let a=Math.floor(r),l=r-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/o)+1)*o:l===0&&a===o-1&&(a=o-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%o]:(Qr.subVectors(s[0],s[1]).add(s[0]),c=Qr);const u=s[a%o],d=s[(a+1)%o];if(this.closed||a+2<o?h=s[(a+2)%o]:(Qr.subVectors(s[o-1],s[o-2]).add(s[o-1]),h=Qr),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let _=Math.pow(c.distanceToSquared(u),f),x=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);x<1e-4&&(x=1),_<1e-4&&(_=x),m<1e-4&&(m=x),Bl.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,_,x,m),zl.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,_,x,m),Gl.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,_,x,m)}else this.curveType==="catmullrom"&&(Bl.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),zl.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),Gl.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return i.set(Bl.calc(l),zl.calc(l),Gl.calc(l)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(new K().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Td(n,t,e,i,s){const o=(i-t)*.5,r=(s-e)*.5,a=n*n,l=n*a;return(2*e-2*i+o+r)*l+(-3*e+3*i-2*o-r)*a+o*n+e}function LS(n,t){const e=1-n;return e*e*t}function DS(n,t){return 2*(1-n)*n*t}function US(n,t){return n*n*t}function nr(n,t,e,i){return LS(n,t)+DS(n,e)+US(n,i)}function NS(n,t){const e=1-n;return e*e*e*t}function FS(n,t){const e=1-n;return 3*e*e*n*t}function OS(n,t){return 3*(1-n)*n*n*t}function BS(n,t){return n*n*n*t}function ir(n,t,e,i,s){return NS(n,t)+FS(n,e)+OS(n,i)+BS(n,s)}class Ap extends Si{constructor(t=new Bt,e=new Bt,i=new Bt,s=new Bt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new Bt){const i=e,s=this.v0,o=this.v1,r=this.v2,a=this.v3;return i.set(ir(t,s.x,o.x,r.x,a.x),ir(t,s.y,o.y,r.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class zS extends Si{constructor(t=new K,e=new K,i=new K,s=new K){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new K){const i=e,s=this.v0,o=this.v1,r=this.v2,a=this.v3;return i.set(ir(t,s.x,o.x,r.x,a.x),ir(t,s.y,o.y,r.y,a.y),ir(t,s.z,o.z,r.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Rp extends Si{constructor(t=new Bt,e=new Bt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Bt){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Bt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class GS extends Si{constructor(t=new K,e=new K){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new K){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new K){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Pp extends Si{constructor(t=new Bt,e=new Bt,i=new Bt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new Bt){const i=e,s=this.v0,o=this.v1,r=this.v2;return i.set(nr(t,s.x,o.x,r.x),nr(t,s.y,o.y,r.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class HS extends Si{constructor(t=new K,e=new K,i=new K){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new K){const i=e,s=this.v0,o=this.v1,r=this.v2;return i.set(nr(t,s.x,o.x,r.x),nr(t,s.y,o.y,r.y),nr(t,s.z,o.z,r.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Cp extends Si{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Bt){const i=e,s=this.points,o=(s.length-1)*t,r=Math.floor(o),a=o-r,l=s[r===0?r:r-1],c=s[r],h=s[r>s.length-2?s.length-1:r+1],u=s[r>s.length-3?s.length-1:r+2];return i.set(Td(a,l.x,c.x,h.x,u.x),Td(a,l.y,c.y,h.y,u.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(new Bt().fromArray(s))}return this}}var Vc=Object.freeze({__proto__:null,ArcCurve:CS,CatmullRomCurve3:IS,CubicBezierCurve:Ap,CubicBezierCurve3:zS,EllipseCurve:Pu,LineCurve:Rp,LineCurve3:GS,QuadraticBezierCurve:Pp,QuadraticBezierCurve3:HS,SplineCurve:Cp});class kS extends Si{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Vc[i](e,t))}return this}getPoint(t,e){const i=t*this.getLength(),s=this.getCurveLengths();let o=0;for(;o<s.length;){if(s[o]>=i){const r=s[o]-i,a=this.curves[o],l=a.getLength(),c=l===0?0:1-r/l;return a.getPointAt(c,e)}o++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let i=0,s=this.curves.length;i<s;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let i;for(let s=0,o=this.curves;s<o.length;s++){const r=o[s],a=r.isEllipseCurve?t*2:r.isLineCurve||r.isLineCurve3?1:r.isSplineCurve?t*r.points.length:t,l=r.getPoints(a);for(let c=0;c<l.length;c++){const h=l[c];i&&i.equals(h)||(e.push(h),i=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const s=t.curves[e];this.curves.push(new Vc[s.type]().fromJSON(s))}return this}}class Wc extends kS{constructor(t){super(),this.type="Path",this.currentPoint=new Bt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const i=new Rp(this.currentPoint.clone(),new Bt(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,s){const o=new Pp(this.currentPoint.clone(),new Bt(t,e),new Bt(i,s));return this.curves.push(o),this.currentPoint.set(i,s),this}bezierCurveTo(t,e,i,s,o,r){const a=new Ap(this.currentPoint.clone(),new Bt(t,e),new Bt(i,s),new Bt(o,r));return this.curves.push(a),this.currentPoint.set(o,r),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),i=new Cp(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,s,o,r){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,i,s,o,r),this}absarc(t,e,i,s,o,r){return this.absellipse(t,e,i,i,s,o,r),this}ellipse(t,e,i,s,o,r,a,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,i,s,o,r,a,l),this}absellipse(t,e,i,s,o,r,a,l){const c=new Pu(t,e,i,s,o,r,a,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Te extends vn{constructor(t=1,e=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:s},e=Math.max(3,e);const o=[],r=[],a=[],l=[],c=new K,h=new Bt;r.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){const f=i+u/e*s;c.x=t*Math.cos(f),c.y=t*Math.sin(f),r.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(r[d]/t+1)/2,h.y=(r[d+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)o.push(u,u+1,0);this.setIndex(o),this.setAttribute("position",new Be(r,3)),this.setAttribute("normal",new Be(a,3)),this.setAttribute("uv",new Be(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Te(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class ie extends vn{constructor(t=1,e=1,i=1,s=32,o=1,r=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:o,openEnded:r,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),o=Math.floor(o);const h=[],u=[],d=[],f=[];let _=0;const x=[],m=i/2;let p=0;b(),r===!1&&(t>0&&M(!0),e>0&&M(!1)),this.setIndex(h),this.setAttribute("position",new Be(u,3)),this.setAttribute("normal",new Be(d,3)),this.setAttribute("uv",new Be(f,2));function b(){const S=new K,O=new K;let I=0;const P=(e-t)/i;for(let F=0;F<=o;F++){const et=[],y=F/o,E=y*(e-t)+t;for(let G=0;G<=s;G++){const W=G/s,Q=W*l+a,at=Math.sin(Q),X=Math.cos(Q);O.x=E*at,O.y=-y*i+m,O.z=E*X,u.push(O.x,O.y,O.z),S.set(at,P,X).normalize(),d.push(S.x,S.y,S.z),f.push(W,1-y),et.push(_++)}x.push(et)}for(let F=0;F<s;F++)for(let et=0;et<o;et++){const y=x[et][F],E=x[et+1][F],G=x[et+1][F+1],W=x[et][F+1];t>0&&(h.push(y,E,W),I+=3),e>0&&(h.push(E,G,W),I+=3)}c.addGroup(p,I,0),p+=I}function M(S){const O=_,I=new Bt,P=new K;let F=0;const et=S===!0?t:e,y=S===!0?1:-1;for(let G=1;G<=s;G++)u.push(0,m*y,0),d.push(0,y,0),f.push(.5,.5),_++;const E=_;for(let G=0;G<=s;G++){const Q=G/s*l+a,at=Math.cos(Q),X=Math.sin(Q);P.x=et*X,P.y=m*y,P.z=et*at,u.push(P.x,P.y,P.z),d.push(0,y,0),I.x=at*.5+.5,I.y=X*.5*y+.5,f.push(I.x,I.y),_++}for(let G=0;G<s;G++){const W=O+G,Q=E+G;S===!0?h.push(Q,Q+1,W):h.push(Q+1,Q,W),F+=3}c.addGroup(p,F,S===!0?1:2),p+=F}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ie(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class ro extends ie{constructor(t=1,e=1,i=32,s=1,o=!1,r=0,a=Math.PI*2){super(0,t,e,i,s,o,r,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:s,openEnded:o,thetaStart:r,thetaLength:a}}static fromJSON(t){return new ro(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class In extends Wc{constructor(t){super(t),this.uuid=Ns(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let i=0,s=this.holes.length;i<s;i++)e[i]=this.holes[i].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,i=this.holes.length;e<i;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const s=t.holes[e];this.holes.push(new Wc().fromJSON(s))}return this}}const VS={triangulate:function(n,t,e=2){const i=t&&t.length,s=i?t[0]*e:n.length;let o=Ip(n,0,s,e,!0);const r=[];if(!o||o.next===o.prev)return r;let a,l,c,h,u,d,f;if(i&&(o=$S(n,t,o,e)),n.length>80*e){a=c=n[0],l=h=n[1];for(let _=e;_<s;_+=e)u=n[_],d=n[_+1],u<a&&(a=u),d<l&&(l=d),u>c&&(c=u),d>h&&(h=d);f=Math.max(c-a,h-l),f=f!==0?32767/f:0}return mr(o,r,e,a,l,f,0),r}};function Ip(n,t,e,i,s){let o,r;if(s===o1(n,t,e,i)>0)for(o=t;o<e;o+=i)r=Ad(o,n[o],n[o+1],r);else for(o=e-i;o>=t;o-=i)r=Ad(o,n[o],n[o+1],r);return r&&Xa(r,r.next)&&(_r(r),r=r.next),r}function Ds(n,t){if(!n)return n;t||(t=n);let e=n,i;do if(i=!1,!e.steiner&&(Xa(e,e.next)||Oe(e.prev,e,e.next)===0)){if(_r(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function mr(n,t,e,i,s,o,r){if(!n)return;!r&&o&&QS(n,i,s,o);let a=n,l,c;for(;n.prev!==n.next;){if(l=n.prev,c=n.next,o?XS(n,i,s,o):WS(n)){t.push(l.i/e|0),t.push(n.i/e|0),t.push(c.i/e|0),_r(n),n=c.next,a=c.next;continue}if(n=c,n===a){r?r===1?(n=qS(Ds(n),t,e),mr(n,t,e,i,s,o,2)):r===2&&YS(n,t,e,i,s,o):mr(Ds(n),t,e,i,s,o,1);break}}}function WS(n){const t=n.prev,e=n,i=n.next;if(Oe(t,e,i)>=0)return!1;const s=t.x,o=e.x,r=i.x,a=t.y,l=e.y,c=i.y,h=s<o?s<r?s:r:o<r?o:r,u=a<l?a<c?a:c:l<c?l:c,d=s>o?s>r?s:r:o>r?o:r,f=a>l?a>c?a:c:l>c?l:c;let _=i.next;for(;_!==t;){if(_.x>=h&&_.x<=d&&_.y>=u&&_.y<=f&&ao(s,a,o,l,r,c,_.x,_.y)&&Oe(_.prev,_,_.next)>=0)return!1;_=_.next}return!0}function XS(n,t,e,i){const s=n.prev,o=n,r=n.next;if(Oe(s,o,r)>=0)return!1;const a=s.x,l=o.x,c=r.x,h=s.y,u=o.y,d=r.y,f=a<l?a<c?a:c:l<c?l:c,_=h<u?h<d?h:d:u<d?u:d,x=a>l?a>c?a:c:l>c?l:c,m=h>u?h>d?h:d:u>d?u:d,p=Xc(f,_,t,e,i),b=Xc(x,m,t,e,i);let M=n.prevZ,S=n.nextZ;for(;M&&M.z>=p&&S&&S.z<=b;){if(M.x>=f&&M.x<=x&&M.y>=_&&M.y<=m&&M!==s&&M!==r&&ao(a,h,l,u,c,d,M.x,M.y)&&Oe(M.prev,M,M.next)>=0||(M=M.prevZ,S.x>=f&&S.x<=x&&S.y>=_&&S.y<=m&&S!==s&&S!==r&&ao(a,h,l,u,c,d,S.x,S.y)&&Oe(S.prev,S,S.next)>=0))return!1;S=S.nextZ}for(;M&&M.z>=p;){if(M.x>=f&&M.x<=x&&M.y>=_&&M.y<=m&&M!==s&&M!==r&&ao(a,h,l,u,c,d,M.x,M.y)&&Oe(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;S&&S.z<=b;){if(S.x>=f&&S.x<=x&&S.y>=_&&S.y<=m&&S!==s&&S!==r&&ao(a,h,l,u,c,d,S.x,S.y)&&Oe(S.prev,S,S.next)>=0)return!1;S=S.nextZ}return!0}function qS(n,t,e){let i=n;do{const s=i.prev,o=i.next.next;!Xa(s,o)&&Lp(s,i,i.next,o)&&gr(s,o)&&gr(o,s)&&(t.push(s.i/e|0),t.push(i.i/e|0),t.push(o.i/e|0),_r(i),_r(i.next),i=n=o),i=i.next}while(i!==n);return Ds(i)}function YS(n,t,e,i,s,o){let r=n;do{let a=r.next.next;for(;a!==r.prev;){if(r.i!==a.i&&n1(r,a)){let l=Dp(r,a);r=Ds(r,r.next),l=Ds(l,l.next),mr(r,t,e,i,s,o,0),mr(l,t,e,i,s,o,0);return}a=a.next}r=r.next}while(r!==n)}function $S(n,t,e,i){const s=[];let o,r,a,l,c;for(o=0,r=t.length;o<r;o++)a=t[o]*i,l=o<r-1?t[o+1]*i:n.length,c=Ip(n,a,l,i,!1),c===c.next&&(c.steiner=!0),s.push(e1(c));for(s.sort(jS),o=0;o<s.length;o++)e=KS(s[o],e);return e}function jS(n,t){return n.x-t.x}function KS(n,t){const e=ZS(n,t);if(!e)return t;const i=Dp(e,n);return Ds(i,i.next),Ds(e,e.next)}function ZS(n,t){let e=t,i=-1/0,s;const o=n.x,r=n.y;do{if(r<=e.y&&r>=e.next.y&&e.next.y!==e.y){const d=e.x+(r-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=o&&d>i&&(i=d,s=e.x<e.next.x?e:e.next,d===o))return s}e=e.next}while(e!==t);if(!s)return null;const a=s,l=s.x,c=s.y;let h=1/0,u;e=s;do o>=e.x&&e.x>=l&&o!==e.x&&ao(r<c?o:i,r,l,c,r<c?i:o,r,e.x,e.y)&&(u=Math.abs(r-e.y)/(o-e.x),gr(e,n)&&(u<h||u===h&&(e.x>s.x||e.x===s.x&&JS(s,e)))&&(s=e,h=u)),e=e.next;while(e!==a);return s}function JS(n,t){return Oe(n.prev,n,t.prev)<0&&Oe(t.next,n,n.next)<0}function QS(n,t,e,i){let s=n;do s.z===0&&(s.z=Xc(s.x,s.y,t,e,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,t1(s)}function t1(n){let t,e,i,s,o,r,a,l,c=1;do{for(e=n,n=null,o=null,r=0;e;){for(r++,i=e,a=0,t=0;t<c&&(a++,i=i.nextZ,!!i);t++);for(l=c;a>0||l>0&&i;)a!==0&&(l===0||!i||e.z<=i.z)?(s=e,e=e.nextZ,a--):(s=i,i=i.nextZ,l--),o?o.nextZ=s:n=s,s.prevZ=o,o=s;e=i}o.nextZ=null,c*=2}while(r>1);return n}function Xc(n,t,e,i,s){return n=(n-e)*s|0,t=(t-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,n|t<<1}function e1(n){let t=n,e=n;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==n);return e}function ao(n,t,e,i,s,o,r,a){return(s-r)*(t-a)>=(n-r)*(o-a)&&(n-r)*(i-a)>=(e-r)*(t-a)&&(e-r)*(o-a)>=(s-r)*(i-a)}function n1(n,t){return n.next.i!==t.i&&n.prev.i!==t.i&&!i1(n,t)&&(gr(n,t)&&gr(t,n)&&s1(n,t)&&(Oe(n.prev,n,t.prev)||Oe(n,t.prev,t))||Xa(n,t)&&Oe(n.prev,n,n.next)>0&&Oe(t.prev,t,t.next)>0)}function Oe(n,t,e){return(t.y-n.y)*(e.x-t.x)-(t.x-n.x)*(e.y-t.y)}function Xa(n,t){return n.x===t.x&&n.y===t.y}function Lp(n,t,e,i){const s=ea(Oe(n,t,e)),o=ea(Oe(n,t,i)),r=ea(Oe(e,i,n)),a=ea(Oe(e,i,t));return!!(s!==o&&r!==a||s===0&&ta(n,e,t)||o===0&&ta(n,i,t)||r===0&&ta(e,n,i)||a===0&&ta(e,t,i))}function ta(n,t,e){return t.x<=Math.max(n.x,e.x)&&t.x>=Math.min(n.x,e.x)&&t.y<=Math.max(n.y,e.y)&&t.y>=Math.min(n.y,e.y)}function ea(n){return n>0?1:n<0?-1:0}function i1(n,t){let e=n;do{if(e.i!==n.i&&e.next.i!==n.i&&e.i!==t.i&&e.next.i!==t.i&&Lp(e,e.next,n,t))return!0;e=e.next}while(e!==n);return!1}function gr(n,t){return Oe(n.prev,n,n.next)<0?Oe(n,t,n.next)>=0&&Oe(n,n.prev,t)>=0:Oe(n,t,n.prev)<0||Oe(n,n.next,t)<0}function s1(n,t){let e=n,i=!1;const s=(n.x+t.x)/2,o=(n.y+t.y)/2;do e.y>o!=e.next.y>o&&e.next.y!==e.y&&s<(e.next.x-e.x)*(o-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==n);return i}function Dp(n,t){const e=new qc(n.i,n.x,n.y),i=new qc(t.i,t.x,t.y),s=n.next,o=t.prev;return n.next=t,t.prev=n,e.next=s,s.prev=e,i.next=e,e.prev=i,o.next=i,i.prev=o,i}function Ad(n,t,e,i){const s=new qc(n,t,e);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function _r(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function qc(n,t,e){this.i=n,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function o1(n,t,e,i){let s=0;for(let o=t,r=e-i;o<e;o+=i)s+=(n[r]-n[o])*(n[o+1]+n[r+1]),r=o;return s}class go{static area(t){const e=t.length;let i=0;for(let s=e-1,o=0;o<e;s=o++)i+=t[s].x*t[o].y-t[o].x*t[s].y;return i*.5}static isClockWise(t){return go.area(t)<0}static triangulateShape(t,e){const i=[],s=[],o=[];Rd(t),Pd(i,t);let r=t.length;e.forEach(Rd);for(let l=0;l<e.length;l++)s.push(r),r+=e[l].length,Pd(i,e[l]);const a=VS.triangulate(i,s);for(let l=0;l<a.length;l+=3)o.push(a.slice(l,l+3));return o}}function Rd(n){const t=n.length;t>2&&n[t-1].equals(n[0])&&n.pop()}function Pd(n,t){for(let e=0;e<t.length;e++)n.push(t[e].x),n.push(t[e].y)}class Hn extends vn{constructor(t=new In([new Bt(.5,.5),new Bt(-.5,.5),new Bt(-.5,-.5),new Bt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const i=this,s=[],o=[];for(let a=0,l=t.length;a<l;a++){const c=t[a];r(c)}this.setAttribute("position",new Be(s,3)),this.setAttribute("uv",new Be(o,2)),this.computeVertexNormals();function r(a){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1;let d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,_=e.bevelSize!==void 0?e.bevelSize:f-.1,x=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3;const p=e.extrudePath,b=e.UVGenerator!==void 0?e.UVGenerator:r1;let M,S=!1,O,I,P,F;p&&(M=p.getSpacedPoints(h),S=!0,d=!1,O=p.computeFrenetFrames(h,!1),I=new K,P=new K,F=new K),d||(m=0,f=0,_=0,x=0);const et=a.extractPoints(c);let y=et.shape;const E=et.holes;if(!go.isClockWise(y)){y=y.reverse();for(let it=0,g=E.length;it<g;it++){const T=E[it];go.isClockWise(T)&&(E[it]=T.reverse())}}const W=go.triangulateShape(y,E),Q=y;for(let it=0,g=E.length;it<g;it++){const T=E[it];y=y.concat(T)}function at(it,g,T){return g||console.error("THREE.ExtrudeGeometry: vec does not exist"),it.clone().addScaledVector(g,T)}const X=y.length,nt=W.length;function $(it,g,T){let L,N,U;const Y=it.x-g.x,Z=it.y-g.y,w=T.x-it.x,v=T.y-it.y,C=Y*Y+Z*Z,q=Y*v-Z*w;if(Math.abs(q)>Number.EPSILON){const H=Math.sqrt(C),V=Math.sqrt(w*w+v*v),ut=g.x-Z/H,ct=g.y+Y/H,pt=T.x-v/V,Rt=T.y+w/V,dt=((pt-ut)*v-(Rt-ct)*w)/(Y*v-Z*w);L=ut+Y*dt-it.x,N=ct+Z*dt-it.y;const yt=L*L+N*N;if(yt<=2)return new Bt(L,N);U=Math.sqrt(yt/2)}else{let H=!1;Y>Number.EPSILON?w>Number.EPSILON&&(H=!0):Y<-Number.EPSILON?w<-Number.EPSILON&&(H=!0):Math.sign(Z)===Math.sign(v)&&(H=!0),H?(L=-Z,N=Y,U=Math.sqrt(C)):(L=Y,N=Z,U=Math.sqrt(C/2))}return new Bt(L/U,N/U)}const gt=[];for(let it=0,g=Q.length,T=g-1,L=it+1;it<g;it++,T++,L++)T===g&&(T=0),L===g&&(L=0),gt[it]=$(Q[it],Q[T],Q[L]);const mt=[];let Mt,It=gt.concat();for(let it=0,g=E.length;it<g;it++){const T=E[it];Mt=[];for(let L=0,N=T.length,U=N-1,Y=L+1;L<N;L++,U++,Y++)U===N&&(U=0),Y===N&&(Y=0),Mt[L]=$(T[L],T[U],T[Y]);mt.push(Mt),It=It.concat(Mt)}for(let it=0;it<m;it++){const g=it/m,T=f*Math.cos(g*Math.PI/2),L=_*Math.sin(g*Math.PI/2)+x;for(let N=0,U=Q.length;N<U;N++){const Y=at(Q[N],gt[N],L);B(Y.x,Y.y,-T)}for(let N=0,U=E.length;N<U;N++){const Y=E[N];Mt=mt[N];for(let Z=0,w=Y.length;Z<w;Z++){const v=at(Y[Z],Mt[Z],L);B(v.x,v.y,-T)}}}const zt=_+x;for(let it=0;it<X;it++){const g=d?at(y[it],It[it],zt):y[it];S?(P.copy(O.normals[0]).multiplyScalar(g.x),I.copy(O.binormals[0]).multiplyScalar(g.y),F.copy(M[0]).add(P).add(I),B(F.x,F.y,F.z)):B(g.x,g.y,0)}for(let it=1;it<=h;it++)for(let g=0;g<X;g++){const T=d?at(y[g],It[g],zt):y[g];S?(P.copy(O.normals[it]).multiplyScalar(T.x),I.copy(O.binormals[it]).multiplyScalar(T.y),F.copy(M[it]).add(P).add(I),B(F.x,F.y,F.z)):B(T.x,T.y,u/h*it)}for(let it=m-1;it>=0;it--){const g=it/m,T=f*Math.cos(g*Math.PI/2),L=_*Math.sin(g*Math.PI/2)+x;for(let N=0,U=Q.length;N<U;N++){const Y=at(Q[N],gt[N],L);B(Y.x,Y.y,u+T)}for(let N=0,U=E.length;N<U;N++){const Y=E[N];Mt=mt[N];for(let Z=0,w=Y.length;Z<w;Z++){const v=at(Y[Z],Mt[Z],L);S?B(v.x,v.y+M[h-1].y,M[h-1].x+T):B(v.x,v.y,u+T)}}}rt(),ft();function rt(){const it=s.length/3;if(d){let g=0,T=X*g;for(let L=0;L<nt;L++){const N=W[L];lt(N[2]+T,N[1]+T,N[0]+T)}g=h+m*2,T=X*g;for(let L=0;L<nt;L++){const N=W[L];lt(N[0]+T,N[1]+T,N[2]+T)}}else{for(let g=0;g<nt;g++){const T=W[g];lt(T[2],T[1],T[0])}for(let g=0;g<nt;g++){const T=W[g];lt(T[0]+X*h,T[1]+X*h,T[2]+X*h)}}i.addGroup(it,s.length/3-it,0)}function ft(){const it=s.length/3;let g=0;xt(Q,g),g+=Q.length;for(let T=0,L=E.length;T<L;T++){const N=E[T];xt(N,g),g+=N.length}i.addGroup(it,s.length/3-it,1)}function xt(it,g){let T=it.length;for(;--T>=0;){const L=T;let N=T-1;N<0&&(N=it.length-1);for(let U=0,Y=h+m*2;U<Y;U++){const Z=X*U,w=X*(U+1),v=g+L+Z,C=g+N+Z,q=g+N+w,H=g+L+w;ot(v,C,q,H)}}}function B(it,g,T){l.push(it),l.push(g),l.push(T)}function lt(it,g,T){ht(it),ht(g),ht(T);const L=s.length/3,N=b.generateTopUV(i,s,L-3,L-2,L-1);wt(N[0]),wt(N[1]),wt(N[2])}function ot(it,g,T,L){ht(it),ht(g),ht(L),ht(g),ht(T),ht(L);const N=s.length/3,U=b.generateSideWallUV(i,s,N-6,N-3,N-2,N-1);wt(U[0]),wt(U[1]),wt(U[3]),wt(U[1]),wt(U[2]),wt(U[3])}function ht(it){s.push(l[it*3+0]),s.push(l[it*3+1]),s.push(l[it*3+2])}function wt(it){o.push(it.x),o.push(it.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,i=this.parameters.options;return a1(e,i,t)}static fromJSON(t,e){const i=[];for(let o=0,r=t.shapes.length;o<r;o++){const a=e[t.shapes[o]];i.push(a)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Vc[s.type]().fromJSON(s)),new Hn(i,t.options)}}const r1={generateTopUV:function(n,t,e,i,s){const o=t[e*3],r=t[e*3+1],a=t[i*3],l=t[i*3+1],c=t[s*3],h=t[s*3+1];return[new Bt(o,r),new Bt(a,l),new Bt(c,h)]},generateSideWallUV:function(n,t,e,i,s,o){const r=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[i*3],h=t[i*3+1],u=t[i*3+2],d=t[s*3],f=t[s*3+1],_=t[s*3+2],x=t[o*3],m=t[o*3+1],p=t[o*3+2];return Math.abs(a-h)<Math.abs(r-c)?[new Bt(r,1-l),new Bt(c,1-u),new Bt(d,1-_),new Bt(x,1-p)]:[new Bt(a,1-l),new Bt(h,1-u),new Bt(f,1-_),new Bt(m,1-p)]}};function a1(n,t,e){if(e.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){const o=n[i];e.shapes.push(o.uuid)}else e.shapes.push(n.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class Tt extends vn{constructor(t=1,e=32,i=16,s=0,o=Math.PI*2,r=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:o,thetaStart:r,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const l=Math.min(r+a,Math.PI);let c=0;const h=[],u=new K,d=new K,f=[],_=[],x=[],m=[];for(let p=0;p<=i;p++){const b=[],M=p/i;let S=0;p===0&&r===0?S=.5/e:p===i&&l===Math.PI&&(S=-.5/e);for(let O=0;O<=e;O++){const I=O/e;u.x=-t*Math.cos(s+I*o)*Math.sin(r+M*a),u.y=t*Math.cos(r+M*a),u.z=t*Math.sin(s+I*o)*Math.sin(r+M*a),_.push(u.x,u.y,u.z),d.copy(u).normalize(),x.push(d.x,d.y,d.z),m.push(I+S,1-M),b.push(c++)}h.push(b)}for(let p=0;p<i;p++)for(let b=0;b<e;b++){const M=h[p][b+1],S=h[p][b],O=h[p+1][b],I=h[p+1][b+1];(p!==0||r>0)&&f.push(M,S,I),(p!==i-1||l<Math.PI)&&f.push(S,O,I)}this.setIndex(f),this.setAttribute("position",new Be(_,3)),this.setAttribute("normal",new Be(x,3)),this.setAttribute("uv",new Be(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Tt(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class _o extends vn{constructor(t=1,e=.4,i=12,s=48,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:s,arc:o},i=Math.floor(i),s=Math.floor(s);const r=[],a=[],l=[],c=[],h=new K,u=new K,d=new K;for(let f=0;f<=i;f++)for(let _=0;_<=s;_++){const x=_/s*o,m=f/i*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(x),u.y=(t+e*Math.cos(m))*Math.sin(x),u.z=e*Math.sin(m),a.push(u.x,u.y,u.z),h.x=t*Math.cos(x),h.y=t*Math.sin(x),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(_/s),c.push(f/i)}for(let f=1;f<=i;f++)for(let _=1;_<=s;_++){const x=(s+1)*f+_-1,m=(s+1)*(f-1)+_-1,p=(s+1)*(f-1)+_,b=(s+1)*f+_;r.push(x,m,b),r.push(m,p,b)}this.setIndex(r),this.setAttribute("position",new Be(a,3)),this.setAttribute("normal",new Be(l,3)),this.setAttribute("uv",new Be(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new _o(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Jt extends Po{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new he(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new he(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=lp,this.normalScale=new Bt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Nt extends Jt{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Bt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Qe(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new he(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new he(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new he(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}const Ta={enabled:!1,files:{},add:function(n,t){this.enabled!==!1&&(this.files[n]=t)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class l1{constructor(t,e,i){const s=this;let o=!1,r=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this.itemStart=function(h){a++,o===!1&&s.onStart!==void 0&&s.onStart(h,r,a),o=!0},this.itemEnd=function(h){r++,s.onProgress!==void 0&&s.onProgress(h,r,a),r===a&&(o=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){const f=c[u],_=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return _}return null}}}const c1=new l1;class Io{constructor(t){this.manager=t!==void 0?t:c1,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const i=this;return new Promise(function(s,o){i.load(t,s,e,o)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}Io.DEFAULT_MATERIAL_NAME="__DEFAULT";const Li={};class u1 extends Error{constructor(t,e){super(t),this.response=e}}class h1 extends Io{constructor(t){super(t)}load(t,e,i,s){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const o=Ta.get(t);if(o!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(o),this.manager.itemEnd(t)},0),o;if(Li[t]!==void 0){Li[t].push({onLoad:e,onProgress:i,onError:s});return}Li[t]=[],Li[t].push({onLoad:e,onProgress:i,onError:s});const r=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(r).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=Li[t],u=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=d?parseInt(d):0,_=f!==0;let x=0;const m=new ReadableStream({start(p){b();function b(){u.read().then(({done:M,value:S})=>{if(M)p.close();else{x+=S.byteLength;const O=new ProgressEvent("progress",{lengthComputable:_,loaded:x,total:f});for(let I=0,P=h.length;I<P;I++){const F=h[I];F.onProgress&&F.onProgress(O)}p.enqueue(S),b()}},M=>{p.error(M)})}}});return new Response(m)}else throw new u1(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return c.json();default:if(a===void 0)return c.text();{const u=/charset="?([^;"\s]*)"?/i.exec(a),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(_=>f.decode(_))}}}).then(c=>{Ta.add(t,c);const h=Li[t];delete Li[t];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onLoad&&f.onLoad(c)}}).catch(c=>{const h=Li[t];if(h===void 0)throw this.manager.itemError(t),c;delete Li[t];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onError&&f.onError(c)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}}class Up extends Io{constructor(t){super(t)}load(t,e,i,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const o=this,r=Ta.get(t);if(r!==void 0)return o.manager.itemStart(t),setTimeout(function(){e&&e(r),o.manager.itemEnd(t)},0),r;const a=pr("img");function l(){h(),Ta.add(t,this),e&&e(this),o.manager.itemEnd(t)}function c(u){h(),s&&s(u),o.manager.itemError(t),o.manager.itemEnd(t)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),o.manager.itemStart(t),a.src=t,a}}class d1 extends Io{constructor(t){super(t)}load(t,e,i,s){const o=new Tu;o.colorSpace=Kn;const r=new Up(this.manager);r.setCrossOrigin(this.crossOrigin),r.setPath(this.path);let a=0;function l(c){r.load(t[c],function(h){o.images[c]=h,a++,a===6&&(o.needsUpdate=!0,e&&e(o))},void 0,s)}for(let c=0;c<t.length;++c)l(c);return o}}class Hi extends Io{constructor(t){super(t)}load(t,e,i,s){const o=new _n,r=new Up(this.manager);return r.setCrossOrigin(this.crossOrigin),r.setPath(this.path),r.load(t,function(a){o.image=a,o.needsUpdate=!0,e!==void 0&&e(o)},i,s),o}}class Iu extends en{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new he(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}const Hl=new Ne,Cd=new K,Id=new K;class Np{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Bt(512,512),this.map=null,this.mapPass=null,this.matrix=new Ne,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Au,this._frameExtents=new Bt(1,1),this._viewportCount=1,this._viewports=[new Pe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;Cd.setFromMatrixPosition(t.matrixWorld),e.position.copy(Cd),Id.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Id),e.updateMatrixWorld(),Hl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Hl),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Hl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Ld=new Ne,ko=new K,kl=new K;class f1 extends Np{constructor(){super(new Fe(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Bt(4,2),this._viewportCount=6,this._viewports=[new Pe(2,1,1,1),new Pe(0,1,1,1),new Pe(3,1,1,1),new Pe(1,1,1,1),new Pe(3,0,1,1),new Pe(1,0,1,1)],this._cubeDirections=[new K(1,0,0),new K(-1,0,0),new K(0,0,1),new K(0,0,-1),new K(0,1,0),new K(0,-1,0)],this._cubeUps=[new K(0,1,0),new K(0,1,0),new K(0,1,0),new K(0,1,0),new K(0,0,1),new K(0,0,-1)]}updateMatrices(t,e=0){const i=this.camera,s=this.matrix,o=t.distance||i.far;o!==i.far&&(i.far=o,i.updateProjectionMatrix()),ko.setFromMatrixPosition(t.matrixWorld),i.position.copy(ko),kl.copy(i.position),kl.add(this._cubeDirections[e]),i.up.copy(this._cubeUps[e]),i.lookAt(kl),i.updateMatrixWorld(),s.makeTranslation(-ko.x,-ko.y,-ko.z),Ld.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ld)}}class Vi extends Iu{constructor(t,e,i=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new f1}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class p1 extends Np{constructor(){super(new Mp(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Wi extends Iu{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(en.DEFAULT_UP),this.updateMatrix(),this.target=new en,this.shadow=new p1}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Xi extends Iu{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class Fp{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Dd(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Dd();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Dd(){return performance.now()}class m1{constructor(){this.type="ShapePath",this.color=new he,this.subPaths=[],this.currentPath=null}moveTo(t,e){return this.currentPath=new Wc,this.subPaths.push(this.currentPath),this.currentPath.moveTo(t,e),this}lineTo(t,e){return this.currentPath.lineTo(t,e),this}quadraticCurveTo(t,e,i,s){return this.currentPath.quadraticCurveTo(t,e,i,s),this}bezierCurveTo(t,e,i,s,o,r){return this.currentPath.bezierCurveTo(t,e,i,s,o,r),this}splineThru(t){return this.currentPath.splineThru(t),this}toShapes(t){function e(p){const b=[];for(let M=0,S=p.length;M<S;M++){const O=p[M],I=new In;I.curves=O.curves,b.push(I)}return b}function i(p,b){const M=b.length;let S=!1;for(let O=M-1,I=0;I<M;O=I++){let P=b[O],F=b[I],et=F.x-P.x,y=F.y-P.y;if(Math.abs(y)>Number.EPSILON){if(y<0&&(P=b[I],et=-et,F=b[O],y=-y),p.y<P.y||p.y>F.y)continue;if(p.y===P.y){if(p.x===P.x)return!0}else{const E=y*(p.x-P.x)-et*(p.y-P.y);if(E===0)return!0;if(E<0)continue;S=!S}}else{if(p.y!==P.y)continue;if(F.x<=p.x&&p.x<=P.x||P.x<=p.x&&p.x<=F.x)return!0}}return S}const s=go.isClockWise,o=this.subPaths;if(o.length===0)return[];let r,a,l;const c=[];if(o.length===1)return a=o[0],l=new In,l.curves=a.curves,c.push(l),c;let h=!s(o[0].getPoints());h=t?!h:h;const u=[],d=[];let f=[],_=0,x;d[_]=void 0,f[_]=[];for(let p=0,b=o.length;p<b;p++)a=o[p],x=a.getPoints(),r=s(x),r=t?!r:r,r?(!h&&d[_]&&_++,d[_]={s:new In,p:x},d[_].s.curves=a.curves,h&&_++,f[_]=[]):f[_].push({h:a,p:x[0]});if(!d[0])return e(o);if(d.length>1){let p=!1,b=0;for(let M=0,S=d.length;M<S;M++)u[M]=[];for(let M=0,S=d.length;M<S;M++){const O=f[M];for(let I=0;I<O.length;I++){const P=O[I];let F=!0;for(let et=0;et<d.length;et++)i(P.p,d[et].p)&&(M!==et&&b++,F?(F=!1,u[et].push(P)):p=!0);F&&u[M].push(P)}}b>0&&p===!1&&(f=u)}let m;for(let p=0,b=d.length;p<b;p++){l=d[p].s,c.push(l),m=f[p];for(let M=0,S=m.length;M<S;M++)l.holes.push(m[M].h)}return c}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:_u}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=_u);class qi extends Io{constructor(t){super(t)}load(t,e,i,s){const o=this,r=new h1(this.manager);r.setPath(this.path),r.setRequestHeader(this.requestHeader),r.setWithCredentials(this.withCredentials),r.load(t,function(a){const l=o.parse(JSON.parse(a));e&&e(l)},i,s)}parse(t){return new g1(t)}}class g1{constructor(t){this.isFont=!0,this.type="Font",this.data=t}generateShapes(t,e=100){const i=[],s=_1(t,e,this.data);for(let o=0,r=s.length;o<r;o++)i.push(...s[o].toShapes());return i}}function _1(n,t,e){const i=Array.from(n),s=t/e.resolution,o=(e.boundingBox.yMax-e.boundingBox.yMin+e.underlineThickness)*s,r=[];let a=0,l=0;for(let c=0;c<i.length;c++){const h=i[c];if(h===`
`)a=0,l-=o;else{const u=v1(h,s,a,l,e);a+=u.offsetX,r.push(u.path)}}return r}function v1(n,t,e,i,s){const o=s.glyphs[n]||s.glyphs["?"];if(!o){console.error('THREE.Font: character "'+n+'" does not exists in font family '+s.familyName+".");return}const r=new m1;let a,l,c,h,u,d,f,_;if(o.o){const x=o._cachedOutline||(o._cachedOutline=o.o.split(" "));for(let m=0,p=x.length;m<p;)switch(x[m++]){case"m":a=x[m++]*t+e,l=x[m++]*t+i,r.moveTo(a,l);break;case"l":a=x[m++]*t+e,l=x[m++]*t+i,r.lineTo(a,l);break;case"q":c=x[m++]*t+e,h=x[m++]*t+i,u=x[m++]*t+e,d=x[m++]*t+i,r.quadraticCurveTo(u,d,c,h);break;case"b":c=x[m++]*t+e,h=x[m++]*t+i,u=x[m++]*t+e,d=x[m++]*t+i,f=x[m++]*t+e,_=x[m++]*t+i,r.bezierCurveTo(u,d,f,_,c,h);break}}return{offsetX:o.ha*t,path:r}}class He extends Hn{constructor(t,e={}){const i=e.font;if(i===void 0)super();else{const s=i.generateShapes(t,e.size);e.depth===void 0&&e.height!==void 0&&console.warn("THREE.TextGeometry: .height is now depreciated. Please use .depth instead"),e.depth=e.depth!==void 0?e.depth:e.height!==void 0?e.height:50,e.bevelThickness===void 0&&(e.bevelThickness=10),e.bevelSize===void 0&&(e.bevelSize=8),e.bevelEnabled===void 0&&(e.bevelEnabled=!1),super(s,e)}this.type="TextGeometry"}}const x1=Vn({__name:"HalfBlueBear",props:{background:{type:Boolean,default:!1},cameraPosition:{type:Number,default:5},bodyPosition:{type:Object,default:()=>({x:0,y:0,z:0})}},setup(n){const t=n,e=Kt(null);return ai(()=>{if(e.value){let i=function(){requestAnimationFrame(i),yt&&(M.rotation.y+=.03),r.render(s,o)};const s=new ri,o=new Fe(75,window.innerWidth/window.innerHeight,.1,1e3),r=new oi({antialias:!0,alpha:!0});r.setSize(window.innerWidth,window.innerHeight),r.toneMapping=Kf,r.toneMappingExposure=1.25,e.value.appendChild(r.domElement);const a=new Xi(16777215,.6);s.add(a);const l=new Wi(16777215,1.2);l.position.set(5,5,5),s.add(l);const c=new Vi(16777215,2,50);c.position.set(0,2,4),s.add(c);const h=new Ln({uniforms:{time:{value:0},color1:{value:new he(16766720)},color2:{value:new he(16007990)}},vertexShader:`
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
    `,b=new Ln({uniforms:{time:{value:0},opacity:{value:1}},vertexShader:m,fragmentShader:p,transparent:!1,depthWrite:!0}),M=new $t,S=new Tt(1,32,32,0,Math.PI),O=new R(S,d),I=new R(S,u);O.scale.set(.85,.85,.8),I.scale.set(.85,.85,.8),O.position.y=-.2,I.position.y=-.2,O.rotation.y=Math.PI/2,I.rotation.y=Math.PI*1.5;const P=new Te(1,32),F=new R(P,u);F.scale.set(.85,.85,.8),F.position.set(0,-.2,0),F.rotation.y=Math.PI/2;const et=new $t;et.add(O),et.add(I),et.add(F),M.add(et);const y=new Tt(.6,32,32,0,Math.PI),E=new R(y,u);E.scale.set(1,.95,.95),E.position.set(0,1,0),E.rotation.y=Math.PI*1.5;const G=new R(y,d);G.scale.set(1,.95,.95),G.position.set(0,1,0),G.rotation.y=Math.PI/2;const W=new Te(.6,32),Q=new R(W,u);Q.position.set(0,1,0),Q.rotation.y=Math.PI/2,Q.scale.set(1,.95,.95);const at=new $t;at.add(E),at.add(G),at.add(Q),M.add(at);const X=new Tt(.25,32,32),nt=new R(X,u);nt.position.set(-.45,1.35,-.1),M.add(nt);const $=new R(X,d);$.position.set(.45,1.35,-.1),M.add($);const gt=new Tt(.25,32,32,Math.PI/2,Math.PI),mt=new R(gt,u);mt.scale.set(1.1,.6,.8),mt.position.set(0,.84,.5),mt.rotation.y=Math.PI;const Mt=new Tt(.25,32,32,Math.PI/2,Math.PI),It=new R(Mt,d);It.scale.set(1.1,.6,.8),It.position.set(0,.84,.5),It.rotation.y=0;const zt=new Te(.25,32),rt=new R(zt,u);rt.scale.set(.8,.6,.8),rt.position.set(0,.84,.5),rt.rotation.y=Math.PI/2;const ft=new $t;ft.add(mt),ft.add(It),ft.add(rt),M.add(ft);const xt=new In;xt.moveTo(0,0),xt.bezierCurveTo(0,-.3,-.6,-.3,-.6,0),xt.bezierCurveTo(-.6,.3,0,.6,0,1),xt.bezierCurveTo(0,.6,.6,.3,.6,0),xt.bezierCurveTo(.6,-.3,0,-.3,0,0);const B={depth:.4,bevelEnabled:!0,bevelSegments:2,steps:2,bevelSize:.1,bevelThickness:.1};new Nt({color:16777215,metalness:0,roughness:.1,clearcoat:1,clearcoatRoughness:.1,transparent:!0,opacity:.85,reflectivity:1,envMapIntensity:1});const lt=new Hn(xt,B);new zn({color:0});const ot=new R(lt,f);ot.scale.set(.1,.1,.1),ot.rotation.z=se.degToRad(210),ot.rotation.x=se.degToRad(5),ot.rotation.y=se.degToRad(-45),ot.position.set(-.4,.9,.45);const ht=new R(lt,b);ht.scale.set(.5,.5,.5),ht.position.set(.35,0,0),ht.rotation.y=Math.PI,ht.rotation.x=Math.PI,M.add(ht);const wt=new R(lt,h);wt.scale.set(.35,.35,.35),wt.position.set(.3,0,0),wt.rotation.y=Math.PI,wt.rotation.x=Math.PI;const it=new R(lt,x);it.scale.set(.25,.25,.25),it.position.set(.27,.2,0),it.rotation.y=Math.PI,it.rotation.x=Math.PI;const g=new R(lt,_);g.scale.set(.3,.3,.3),g.position.set(.23,-.5,.3),g.rotation.y=Math.PI,g.rotation.x=Math.PI;const T=new R(lt,b);T.scale.set(.4,.4,.4),T.position.set(.27,0,.35),T.rotation.y=Math.PI,T.rotation.x=Math.PI;const L=new Tt(.35,32,32),N=new R(L,u);N.scale.set(.75,1.25,.65),N.position.set(-.7,-.15,.2),M.add(N);const U=new R(L,d);U.scale.set(.75,1.25,.65),U.position.set(.7,-.15,.2),M.add(U);const Y=new ie(.2,.22,.6,32),Z=new R(Y,u);Z.position.set(-.4,-1.05,0),M.add(Z);const w=new R(Y,d);w.position.set(.4,-1.05,0),M.add(w);const v=new Tt(.3,32,32),C=new R(v,u);C.scale.set(1,.72,1.5),C.position.set(-.4,-1.45,.17),M.add(C);const q=new R(v,d);q.scale.set(1,.72,1.5),q.position.set(.4,-1.45,.17),M.add(q);const H=new Tt(.44,32,32),V=new R(H,u);V.position.set(-.15,-.45,-.4),M.add(V);const ut=new R(H,d);ut.position.set(.15,-.45,-.4),M.add(ut);const ct=new Tt(.18,32,32),pt=new R(ct,f);pt.position.set(0,-.35,-.8),M.add(pt),new qi().load("https://threejs.org/examples/fonts/helvetiker_bold.typeface.json",function(bt){const Vt=new He("X",{font:bt,size:.18,depth:.05}),Dt=new zn({color:0}),kt=new R(Vt,Dt);kt.position.set(-.3,.99,.53),kt.rotation.x=se.degToRad(-5),kt.rotation.y=se.degToRad(-15),M.add(kt);const z=new He("+",{font:bt,size:.25,depth:.1}),_t=new zn({color:0}),st=new R(z,_t);st.position.set(.14,.99,.53),st.rotation.y=se.degToRad(12),st.rotation.x=se.degToRad(-5),M.add(st)}),pt.renderOrder=1,M.scale.set(1.2,1.2,1.2),s.add(M),M.position.set(t.bodyPosition.x,t.bodyPosition.y,t.bodyPosition.z),o.position.set(t.bodyPosition.x,1,t.cameraPosition),o.lookAt(t.bodyPosition.x,0,0),o.position.z=4;const dt={x:0,y:0};let yt=!0,Pt=null;const Lt=bt=>{yt=!1,dt.x=bt.clientX/window.innerWidth*2-1,dt.y=-(bt.clientY/window.innerHeight)*2+1;const Vt=dt.x*Math.PI*.2,Dt=dt.y*Math.PI*.2;M.rotation.y=Vt,M.rotation.x=Dt,clearTimeout(Pt),Pt=setTimeout(()=>{yt=!0},500)};window.addEventListener("mousemove",Lt),h.uniforms.time.value+=.04,i(),ke(()=>t.bodyPosition,bt=>{M.position.set(bt.x,bt.y,bt.z)}),ke(()=>t.cameraPosition,bt=>{o.position.set(t.bodyPosition.x,1,bt),o.lookAt(t.bodyPosition.x,0,0)}),window.addEventListener("resize",()=>{o.aspect=window.innerWidth/window.innerHeight,o.updateProjectionMatrix(),r.setSize(window.innerWidth,window.innerHeight)})}}),(i,s)=>(yi(),Mi("div",{ref_key:"threeCanvas",ref:e,class:kn(n.background?"no-bg":"three-canvas")},null,2))}}),y1=wi(x1,[["__scopeId","data-v-5bf83852"]]),M1=Vn({__name:"MetalBear",props:{background:{type:Boolean,default:!1},cameraPosition:{type:Number,default:5},bodyPosition:{type:Object,default:()=>({x:0,y:0,z:0})}},setup(n){const t=n,e=Kt(null);let i=null,s=Kt(!1),o=Kt(!1),r=Kt(!1);return ai(()=>{if(e.value){let a=function(){requestAnimationFrame(a),s.value?u.rotation.y+=.03:o.value&&(u.rotation.y-=.03),h.render(l,c)};const l=new ri,c=new Fe(75,window.innerWidth/window.innerHeight,.1,1e3),h=new oi({antialias:!0,alpha:!0});h.setSize(window.innerWidth,window.innerHeight),e.value.appendChild(h.domElement);const u=new $t,d=new Xi(16777215,2);l.add(d);const f=new Wi(16777215,4);f.position.set(5,5,5),l.add(f);const _=new Vi(16777215,5,50);_.position.set(0,2,4),l.add(_);const x=new Hi,m=x.load("/3d-bear-arts/assets/lv2.jpg"),p=x.load("/3d-bear-arts/assets/lv2.jpg");m.wrapS=m.wrapT=We,p.wrapS=p.wrapT=We;const b=new Nt({color:8343336,metalness:0,roughness:.8,bumpMap:m,bumpScale:.1,clearcoat:.2,clearcoatRoughness:.9,map:p,envMapIntensity:.7}),M=new Nt({color:5978654,metalness:0,roughness:.8,bumpMap:m,bumpScale:.1,clearcoat:.2,clearcoatRoughness:.9,map:p,envMapIntensity:.7}),S=new Nt({color:13152668,metalness:.2,roughness:.05,bumpMap:m,bumpScale:.05,clearcoat:1,clearcoatRoughness:.05,map:p,transparent:!0,opacity:.4,transmission:.9,envMapIntensity:1,reflectivity:.9,ior:1.45,side:ge});new Nt({color:13421772,metalness:1,roughness:.5,clearcoat:.3,clearcoatRoughness:.3});const O=new Tt(1,32,32,0,Math.PI),I=new R(O,S),P=new R(O,b);I.scale.set(.85,.85,.8),P.scale.set(.85,.85,.8),I.position.y=-.2,P.position.y=-.2,I.rotation.y=Math.PI/2,P.rotation.y=Math.PI*1.5;const F=new Te(1,32),et=new R(F,b);et.scale.set(.85,.85,.8),et.position.set(0,-.2,0),et.rotation.y=Math.PI/2;const y=new $t;y.add(I),y.add(P),y.add(et),u.add(y);const E=new Tt(.6,32,32,0,Math.PI),G=new R(E,b);G.scale.set(1,.95,.95),G.position.set(0,1,0),G.rotation.y=Math.PI*1.5;const W=new R(E,S);W.scale.set(1,.95,.95),W.position.set(0,1,0),W.rotation.y=Math.PI/2;const Q=new Te(.6,32),at=new R(Q,b);at.position.set(0,1,0),at.rotation.y=Math.PI/2,at.scale.set(1,.95,.95);const X=new $t;X.add(G),X.add(W),X.add(at),u.add(X);const nt=new Tt(.25,32,32),$=new R(nt,b);$.position.set(-.45,1.35,-.1),u.add($);const gt=new R(nt,S);gt.position.set(.45,1.35,-.1),u.add(gt);const mt=new Tt(.25,32,32,Math.PI/2,Math.PI),Mt=new R(mt,M);Mt.scale.set(1.1,.6,.8),Mt.position.set(0,.84,.5),Mt.rotation.y=Math.PI;const It=new Tt(.25,32,32,Math.PI/2,Math.PI),zt=new R(It,S);zt.scale.set(1.1,.6,.8),zt.position.set(0,.84,.5),zt.rotation.y=0;const rt=new Te(.25,32),ft=new R(rt,b);ft.scale.set(.8,.6,.8),ft.position.set(0,.84,.5),ft.rotation.y=Math.PI/2;const xt=new $t;xt.add(Mt),xt.add(zt),xt.add(ft),u.add(xt);const B=new In;B.moveTo(0,0),B.bezierCurveTo(0,-.3,-.6,-.3,-.6,0),B.bezierCurveTo(-.6,.3,0,.6,0,1),B.bezierCurveTo(0,.6,.6,.3,.6,0),B.bezierCurveTo(.6,-.3,0,-.3,0,0);const lt={depth:.4,bevelEnabled:!0,bevelSegments:2,steps:2,bevelSize:.1,bevelThickness:.1};new Nt({color:16777215,metalness:0,roughness:.1,clearcoat:1,clearcoatRoughness:.1,transparent:!0,opacity:.85,reflectivity:1,envMapIntensity:1});const ot=new Hn(B,lt),ht=new R(ot,b);ht.scale.set(.1,.1,.1),ht.rotation.z=se.degToRad(210),ht.rotation.x=se.degToRad(5),ht.rotation.y=se.degToRad(-45),ht.position.set(-.4,.9,.45);const wt=new R(ot,M);wt.scale.set(.6,.5,.5),wt.position.set(.35,0,0),wt.rotation.y=Math.PI,wt.rotation.x=Math.PI;const it=new R(ot,M);it.scale.set(.2,.2,.2),it.position.set(.5,-.1,.2),it.rotation.y=Math.PI,it.rotation.x=Math.PI,u.add(it);const g=new ei(1.3,1.2,.6),T=new R(g,b);T.scale.set(.45,.45,.45),T.position.set(.35,-.2,.1),T.rotation.y=Math.PI;const L=new _o(.15,.025,10,100);new Nt({color:8343336,metalness:.3,roughness:.4,clearcoat:.5});const N=new R(L,b);N.position.set(.35,.1,.1),N.rotation.z=Math.PI/2,N.rotation.x=Math.PI/8,N.rotation.y=Math.PI/14;const U=new R(L,b);U.position.set(.35,.1,.13),U.rotation.z=Math.PI/2,U.rotation.x=Math.PI/-8,U.rotation.y=Math.PI/12;const Y=new $t;Y.add(T),Y.add(N),Y.add(U),u.add(Y);const Z=new Tt(.35,32,32),w=new R(Z,b);w.scale.set(.75,1.25,.65),w.position.set(-.7,-.15,.2),u.add(w);const v=new R(Z,S);v.scale.set(.75,1.25,.65),v.position.set(.7,-.15,.2),u.add(v);const C=new ie(.2,.22,.6,32),q=new R(C,b);q.position.set(-.4,-1.05,0),u.add(q);const H=new R(C,S);H.position.set(.4,-1.05,0),u.add(H);const V=new Tt(.3,32,32),ut=new R(V,b);ut.scale.set(1,.72,1.5),ut.position.set(-.4,-1.45,.17),u.add(ut);const ct=new R(V,S);ct.scale.set(1,.72,1.5),ct.position.set(.4,-1.45,.17),u.add(ct);const pt=new Tt(.44,32,32),Rt=new R(pt,b);Rt.position.set(-.15,-.45,-.4),u.add(Rt);const dt=new R(pt,S);dt.position.set(.15,-.45,-.4),u.add(dt);const yt=new Tt(.18,32,32),Pt=new R(yt,b);Pt.position.set(0,-.35,-.8),u.add(Pt),new qi().load("https://threejs.org/examples/fonts/helvetiker_bold.typeface.json",function(tt){const St=new He("X",{font:tt,size:.2,depth:.05});new zn({color:0});const Et=new R(St,M);Et.position.set(-.3,.99,.53),Et.rotation.x=se.degToRad(-5),Et.rotation.y=se.degToRad(-15),u.add(Et);const Ht=new He("O",{font:tt,size:.2,depth:.05});new zn({color:0});const jt=new R(Ht,M);jt.position.set(.14,.99,.53),jt.rotation.y=se.degToRad(12),jt.rotation.x=se.degToRad(-5),u.add(jt)}),Pt.renderOrder=1,u.scale.set(1.35,1.35,1.35),l.add(u),u.position.set(t.bodyPosition.x,t.bodyPosition.y,t.bodyPosition.z),c.position.set(t.bodyPosition.x,1,t.cameraPosition),c.lookAt(t.bodyPosition.x,0,0),c.position.z=4;const bt=()=>{u.rotation.y,u.rotation.x},Vt=()=>{s.value=!0,o.value=!1,r.value=!1},Dt=()=>{s.value=!1,o.value=!0,r.value=!1},kt=()=>{s.value=!1,o.value=!1,bt()},z=tt=>{const St=window.innerWidth/2;tt>St?Vt():Dt(),bt()},_t=tt=>{clearTimeout(i),kt(),r.value=!0;const St={x:tt.clientX/window.innerWidth*2-1,y:-(tt.clientY/window.innerHeight)*2+1};if(r.value){const Et=St.x*Math.PI*.2,Ht=St.y*Math.PI*.2;u.rotation.y=Et,u.rotation.x=Ht}i=setTimeout(()=>{r.value=!1,z(tt.clientX)},500)};window.addEventListener("mousemove",_t);const st=tt=>{if(r.value){const St={x:tt.clientX/window.innerWidth*2-1,y:-(tt.clientY/window.innerHeight)*2+1},Et=St.x*Math.PI*.2,Ht=St.y*Math.PI*.2;u.rotation.y=Et,u.rotation.x=Ht}};window.addEventListener("mousemove",st),a(),ke(()=>t.bodyPosition,tt=>{u.position.set(tt.x,tt.y,tt.z)}),ke(()=>t.cameraPosition,tt=>{c.position.set(t.bodyPosition.x,1,tt),c.lookAt(t.bodyPosition.x,0,0)}),window.addEventListener("resize",()=>{c.aspect=window.innerWidth/window.innerHeight,c.updateProjectionMatrix(),h.setSize(window.innerWidth,window.innerHeight)})}}),(a,l)=>(yi(),Mi("div",{ref_key:"threeCanvas",ref:e,class:kn(n.background?"no-bg":"three-canvas")},null,2))}}),w1=wi(M1,[["__scopeId","data-v-f3beb116"]]),S1=Vn({__name:"PopartBear",props:{background:{type:Boolean,default:!1},cameraPosition:{type:Number,default:5},bodyPosition:{type:Object,default:()=>({x:0,y:0,z:0})}},setup(n){const t=n,e=Kt(null);let i=null,s=Kt(!1),o=Kt(!1),r=Kt(!1);return ai(()=>{if(e.value){let a=function(){requestAnimationFrame(a),s.value?u.rotation.y+=.03:o.value&&(u.rotation.y-=.03),h.render(l,c)};const l=new ri,c=new Fe(75,window.innerWidth/window.innerHeight,.1,1e3),h=new oi({antialias:!0,alpha:!0});h.setSize(window.innerWidth,window.innerHeight),e.value.appendChild(h.domElement);const u=new $t,d=new Xi(16777215,2);l.add(d);const f=new Wi(16777215,4);f.position.set(5,5,5),l.add(f);const _=new Vi(16777215,5,50);_.position.set(0,2,4),l.add(_);const x=new Hi,m=x.load("/3d-bear-arts/assets/pop6.jpg"),p=x.load("/3d-bear-arts/assets/pop7.jpg");m.wrapS=m.wrapT=We,p.wrapS=p.wrapT=We;const b=new Nt({color:16738740,map:p,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9}),M=new Nt({color:16766720,metalness:.3,roughness:.1,clearcoat:1,clearcoatRoughness:.05,transparent:!0,opacity:.4,transmission:.8,ior:1.45,reflectivity:.9,envMapIntensity:1,side:ge}),S=new Nt({color:16766720,map:m,metalness:.3,roughness:.5}),O=new Nt({color:16738740,metalness:.3,roughness:.1,clearcoat:1,clearcoatRoughness:.05,transparent:!0,opacity:.5,transmission:.8,ior:1.45,reflectivity:.9,envMapIntensity:1,side:ge}),I=new Nt({color:9055202,map:m,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9});new Nt({color:9055202,metalness:.3,roughness:.1,clearcoat:1,clearcoatRoughness:.05,transparent:!0,opacity:.4,transmission:.8,ior:1.45,reflectivity:.9,envMapIntensity:1,side:ge});const P=new Nt({color:65535,map:m,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9}),F=new Nt({color:65535,metalness:.3,roughness:.1,clearcoat:1,clearcoatRoughness:.05,transparent:!0,opacity:.4,transmission:.8,ior:1.45,reflectivity:.9,envMapIntensity:1,side:ge}),et=new Tt(1,32,32,0,Math.PI),y=new R(et,M),E=new R(et,b);y.scale.set(.85,.85,.8),E.scale.set(.85,.85,.8),y.position.y=-.2,E.position.y=-.2,y.rotation.y=Math.PI/2,E.rotation.y=Math.PI*1.5;const G=new Te(1,32),W=new R(G,b);W.scale.set(.85,.85,.8),W.position.set(0,-.2,0),W.rotation.y=Math.PI/2;const Q=new $t;Q.add(y),Q.add(E),Q.add(W),u.add(Q);const at=new Tt(.6,32,32,0,Math.PI),X=new R(at,S);X.scale.set(1,.95,.95),X.position.set(0,1,0),X.rotation.y=Math.PI*1.5;const nt=new R(at,O);nt.scale.set(1,.95,.95),nt.position.set(0,1,0),nt.rotation.y=Math.PI/2;const $=new Te(.6,32),gt=new R($,S);gt.position.set(0,1,0),gt.rotation.y=Math.PI/2,gt.scale.set(1,.95,.95);const mt=new $t;mt.add(X),mt.add(nt),mt.add(gt),u.add(mt);const Mt=new Tt(.25,32,32),It=new R(Mt,b);It.position.set(-.45,1.35,-.1),u.add(It);const zt=new R(Mt,M);zt.position.set(.45,1.35,-.1),u.add(zt);const rt=new Tt(.25,32,32,Math.PI/2,Math.PI),ft=new R(rt,S);ft.scale.set(1.1,.6,.8),ft.position.set(0,.84,.5),ft.rotation.y=Math.PI;const xt=new Tt(.25,32,32,Math.PI/2,Math.PI),B=new R(xt,O);B.scale.set(1.1,.6,.8),B.position.set(0,.84,.5),B.rotation.y=0;const lt=new Te(.25,32),ot=new R(lt,S);ot.scale.set(.8,.6,.8),ot.position.set(0,.84,.5),ot.rotation.y=Math.PI/2;const ht=new $t;ht.add(ft),ht.add(B),ht.add(ot),u.add(ht);const wt=new In;wt.moveTo(0,0),wt.bezierCurveTo(0,-.3,-.6,-.3,-.6,0),wt.bezierCurveTo(-.6,.3,0,.6,0,1),wt.bezierCurveTo(0,.6,.6,.3,.6,0),wt.bezierCurveTo(.6,-.3,0,-.3,0,0);const it={depth:.4,bevelEnabled:!0,bevelSegments:2,steps:2,bevelSize:.1,bevelThickness:.1},g=new Hn(wt,it),T=new R(g,S);T.scale.set(.5,.5,.5),T.position.set(.35,0,0),T.rotation.y=Math.PI,T.rotation.x=Math.PI,u.add(T);const L=new R(g,P);L.scale.set(.2,.2,.25),L.position.set(.5,-.3,.4),L.rotation.y=Math.PI,L.rotation.x=Math.PI,u.add(L);const N=new R(g,b);N.scale.set(.25,.25,.27),N.position.set(.4,.3,-.2),N.rotation.y=Math.PI,N.rotation.x=Math.PI,u.add(N);const U=new Tt(.35,32,32),Y=new R(U,P);Y.scale.set(.75,1.25,.65),Y.position.set(-.7,-.15,.2),u.add(Y);const Z=new R(U,F);Z.scale.set(.75,1.25,.65),Z.position.set(.7,-.15,.2),u.add(Z);const w=new ie(.2,.22,.6,32),v=new R(w,S);v.position.set(-.4,-1.05,0),u.add(v);const C=new R(w,O);C.position.set(.4,-1.05,0),u.add(C);const q=new Tt(.3,32,32),H=new R(q,S);H.scale.set(1,.72,1.5),H.position.set(-.4,-1.45,.17),u.add(H);const V=new R(q,O);V.scale.set(1,.72,1.5),V.position.set(.4,-1.45,.17),u.add(V);const ut=new Tt(.44,32,32),ct=new R(ut,b);ct.position.set(-.15,-.45,-.4),u.add(ct);const pt=new R(ut,M);pt.position.set(.15,-.45,-.4),u.add(pt);const Rt=new Tt(.18,32,32),dt=new R(Rt,b);dt.position.set(0,-.35,-.8),u.add(dt),new qi().load("https://threejs.org/examples/fonts/helvetiker_bold.typeface.json",function(_t){const st=new He("X",{font:_t,size:.2,depth:.05});new zn({color:0});const tt=new R(st,b);tt.position.set(-.3,.99,.53),tt.rotation.x=se.degToRad(-5),tt.rotation.y=se.degToRad(-15),u.add(tt);const St=new He("O",{font:_t,size:.2,depth:.05});new zn({color:0});const Et=new R(St,P);Et.position.set(.14,.99,.53),Et.rotation.y=se.degToRad(12),Et.rotation.x=se.degToRad(-5),u.add(Et);const Ht=new He("POP",{font:_t,size:1,height:.5,curveSegments:12,bevelEnabled:!0,bevelThickness:.1,bevelSize:.1,bevelSegments:5}),jt=new Nt({color:16716947,metalness:.3,roughness:.6,clearcoat:.2});new Nt({color:16766720,metalness:.3,roughness:.6,clearcoat:.2});const Qt=new Nt({color:16766720,metalness:.3,roughness:.6,clearcoat:.2}),Zt=new Nt({color:16753920,metalness:.3,roughness:.6,clearcoat:.2}),ne=new R(Ht,jt);ne.scale.set(.15,.15,.15),ne.position.set(.03,1.16,.1),ne.rotateZ(-25),u.add(ne);const ce=new R(Ht,I);ce.scale.set(.14,.14,.14),ce.rotateZ(45),ce.position.set(.2,-.7,.3),u.add(ce);const pe=new R(Ht,Qt);pe.scale.set(.14,.14,.14),pe.rotateZ(45),pe.rotateY(45),pe.position.set(.3,.7,.3),u.add(pe);const Ae=new R(Ht,Qt);Ae.scale.set(.15,.15,.15),Ae.rotateZ(45),Ae.rotateY(45),Ae.position.set(.35,-1.5,.3),u.add(Ae);const fe=new R(Ht,Zt);fe.scale.set(.17,.17,.17),fe.rotateZ(45),fe.rotateY(15),fe.position.set(.35,1,.3),u.add(fe)}),dt.renderOrder=1,u.scale.set(1.35,1.35,1.35),l.add(u),u.position.set(t.bodyPosition.x,t.bodyPosition.y,t.bodyPosition.z),c.position.set(t.bodyPosition.x,1,t.cameraPosition),c.lookAt(t.bodyPosition.x,0,0),c.position.z=4;const Pt=()=>{u.rotation.y,u.rotation.x},Lt=()=>{s.value=!0,o.value=!1,r.value=!1},bt=()=>{s.value=!1,o.value=!0,r.value=!1},Vt=()=>{s.value=!1,o.value=!1,Pt()},Dt=_t=>{const st=window.innerWidth/2;_t>st?Lt():bt(),Pt()},kt=_t=>{clearTimeout(i),Vt(),r.value=!0;const st={x:_t.clientX/window.innerWidth*2-1,y:-(_t.clientY/window.innerHeight)*2+1};if(r.value){const tt=st.x*Math.PI*.2,St=st.y*Math.PI*.2;u.rotation.y=tt,u.rotation.x=St}i=setTimeout(()=>{r.value=!1,Dt(_t.clientX)},500)};window.addEventListener("mousemove",kt);const z=_t=>{if(r.value){const st={x:_t.clientX/window.innerWidth*2-1,y:-(_t.clientY/window.innerHeight)*2+1},tt=st.x*Math.PI*.2,St=st.y*Math.PI*.2;u.rotation.y=tt,u.rotation.x=St}};window.addEventListener("mousemove",z),a(),ke(()=>t.bodyPosition,_t=>{u.position.set(_t.x,_t.y,_t.z)}),ke(()=>t.cameraPosition,_t=>{c.position.set(t.bodyPosition.x,1,_t),c.lookAt(t.bodyPosition.x,0,0)}),window.addEventListener("resize",()=>{c.aspect=window.innerWidth/window.innerHeight,c.updateProjectionMatrix(),h.setSize(window.innerWidth,window.innerHeight)})}}),(a,l)=>(yi(),Mi("div",{ref_key:"threeCanvas",ref:e,class:kn(n.background?"no-bg":"three-canvas")},null,2))}}),E1=wi(S1,[["__scopeId","data-v-8cfea564"]]),b1={class:"pixel-controls"},T1={class:"side-buttons"},A1=Vn({__name:"PopArtBear3",props:{background:{type:Boolean,default:!1},cameraPosition:{type:Number,default:5},bodyPosition:{type:Object,default:()=>({x:0,y:0,z:0})}},setup(n){const t=n,e=Kt(null);let i=Kt(!1),s=Kt(!1),o=Kt(!1),r=Kt(!1);ai(()=>{if(e.value){let d=function(){requestAnimationFrame(d),i.value&&(m.rotation.y+=.03),s.value&&(m.rotation.y-=.03),o.value&&(m.rotation.x-=.03),r.value&&(m.rotation.x+=.03);const tt=_t.getElapsedTime();z.forEach((St,Et)=>{const Ht=.2+Math.sin(tt*3+st[Et])*.1;St.scale.set(Ht,Ht,Ht)}),x.render(f,_)};const f=new ri,_=new Fe(75,window.innerWidth/window.innerHeight,.1,1e3),x=new oi({antialias:!0,alpha:!0});x.setSize(window.innerWidth,window.innerHeight),e.value.appendChild(x.domElement);const m=new $t,p=new $t;f.add(p);const b=new Xi(16777215,2);f.add(b);const M=new Wi(16777215,4);M.position.set(5,5,5),f.add(M);const S=new Vi(16777215,5,50);S.position.set(0,2,4),f.add(S);const O=new Hi,I=O.load("/3d-bear-arts/assets/pop6.jpg"),P=O.load("/3d-bear-arts/assets/pop7.jpg");I.wrapS=I.wrapT=We,P.wrapS=P.wrapT=We,P.repeat.set(2,2);const F=new Nt({color:16738740,map:P,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9}),et=new Nt({color:16766720,metalness:.3,roughness:.1,clearcoat:1,clearcoatRoughness:.05,transparent:!0,opacity:.4,transmission:.8,ior:1.45,reflectivity:.9,envMapIntensity:1,side:ge}),y=new Nt({color:16766720,map:I,metalness:.3,roughness:.5}),E=new Nt({color:16738740,metalness:.3,roughness:.1,clearcoat:1,clearcoatRoughness:.05,transparent:!0,opacity:.5,transmission:.8,ior:1.45,reflectivity:.9,envMapIntensity:1,side:ge}),G=new Nt({color:9055202,map:I,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9}),W=new Nt({color:65535,map:I,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9}),Q=new Nt({color:65535,metalness:.3,roughness:.1,clearcoat:1,clearcoatRoughness:.05,transparent:!0,opacity:.4,transmission:.8,ior:1.45,reflectivity:.9,envMapIntensity:1,side:ge}),at=new Tt(1,32,32,0,Math.PI),X=new R(at,et),nt=new R(at,F);X.scale.set(.85,.85,.8),nt.scale.set(.85,.85,.8),X.position.y=-.2,nt.position.y=-.2,X.rotation.y=Math.PI/2,nt.rotation.y=Math.PI*1.5;const $=new Te(1,32),gt=new R($,F);gt.scale.set(.85,.85,.8),gt.position.set(0,-.2,0),gt.rotation.y=Math.PI/2;const mt=new $t;mt.add(X),mt.add(nt),mt.add(gt),m.add(mt);const Mt=new Tt(.6,32,32,0,Math.PI),It=new R(Mt,y);It.scale.set(1,.95,.95),It.position.set(0,1,0),It.rotation.y=Math.PI*1.5;const zt=new R(Mt,E);zt.scale.set(1,.95,.95),zt.position.set(0,1,0),zt.rotation.y=Math.PI/2;const rt=new Te(.6,32),ft=new R(rt,y);ft.position.set(0,1,0),ft.rotation.y=Math.PI/2,ft.scale.set(1,.95,.95);const xt=new $t;xt.add(It),xt.add(zt),xt.add(ft),m.add(xt);const B=new Tt(.25,32,32),lt=new R(B,F);lt.position.set(-.45,1.35,-.1),m.add(lt);const ot=new R(B,et);ot.position.set(.45,1.35,-.1),m.add(ot);const ht=new Tt(.25,32,32,Math.PI/2,Math.PI),wt=new R(ht,y);wt.scale.set(1.1,.6,.8),wt.position.set(0,.84,.5),wt.rotation.y=Math.PI;const it=new Tt(.25,32,32,Math.PI/2,Math.PI),g=new R(it,E);g.scale.set(1.1,.6,.8),g.position.set(0,.84,.5),g.rotation.y=0;const T=new Te(.25,32),L=new R(T,y);L.scale.set(.8,.6,.8),L.position.set(0,.84,.5),L.rotation.y=Math.PI/2;const N=new $t;N.add(wt),N.add(g),N.add(L),m.add(N);const U=new In;U.moveTo(0,0),U.bezierCurveTo(0,-.3,-.6,-.3,-.6,0),U.bezierCurveTo(-.6,.3,0,.6,0,1),U.bezierCurveTo(0,.6,.6,.3,.6,0),U.bezierCurveTo(.6,-.3,0,-.3,0,0);const Y={depth:.4,bevelEnabled:!0,bevelSegments:2,steps:2,bevelSize:.1,bevelThickness:.1},Z=new Hn(U,Y),w=new R(Z,y);w.scale.set(.5,.5,.5),w.position.set(.3,0,0),w.rotation.y=Math.PI,w.rotation.x=Math.PI,m.add(w);const v=new R(Z,W);v.scale.set(.2,.2,.25),v.position.set(.35,-.3,.4),v.rotation.y=Math.PI,v.rotation.x=Math.PI,m.add(v);const C=new R(Z,F);C.scale.set(.25,.25,.27),C.position.set(.38,.3,-.2),C.rotation.y=Math.PI,C.rotation.x=Math.PI,m.add(C);const q=new Tt(.35,32,32),H=new R(q,W);H.scale.set(.75,1.25,.65),H.position.set(-.7,-.15,.2),m.add(H);const V=new R(q,Q);V.scale.set(.75,1.25,.65),V.position.set(.7,-.15,.2),m.add(V);const ut=new ie(.2,.22,.6,32),ct=new R(ut,y);ct.position.set(-.4,-1.05,0),m.add(ct);const pt=new R(ut,E);pt.position.set(.4,-1.05,0),m.add(pt);const Rt=new Tt(.3,32,32),dt=new R(Rt,y);dt.scale.set(1,.72,1.5),dt.position.set(-.4,-1.45,.17),m.add(dt);const yt=new R(Rt,E);yt.scale.set(1,.72,1.5),yt.position.set(.4,-1.45,.17),m.add(yt);const Pt=new Tt(.44,32,32),Lt=new R(Pt,F);Lt.position.set(-.15,-.45,-.4),m.add(Lt);const bt=new R(Pt,et);bt.position.set(.15,-.45,-.4),m.add(bt);const Vt=new Tt(.18,32,32),Dt=new R(Vt,F);Dt.position.set(0,-.35,-.8),m.add(Dt),new qi().load("https://threejs.org/examples/fonts/helvetiker_bold.typeface.json",function(tt){const St=new He("X",{font:tt,size:.2,depth:.05}),Et=new R(St,F);Et.position.set(-.3,.99,.53),Et.rotation.x=se.degToRad(-5),Et.rotation.y=se.degToRad(-15),m.add(Et);const Ht=new He("O",{font:tt,size:.2,depth:.05}),jt=new R(Ht,W);jt.position.set(.14,.99,.53),jt.rotation.y=se.degToRad(12),jt.rotation.x=se.degToRad(-5),m.add(jt);const Qt=new He("POP",{font:tt,size:1,height:.5,curveSegments:12,bevelEnabled:!0,bevelThickness:.1,bevelSize:.1,bevelSegments:5});new He("🐻",{font:tt,size:1,height:.5,curveSegments:12,bevelEnabled:!0,bevelThickness:.1,bevelSize:.1,bevelSegments:5});const Zt=new He("BAO      BEAR",{font:tt,size:2,height:.5,curveSegments:12,bevelEnabled:!0,bevelThickness:.1,bevelSize:.1,bevelSegments:3}),ne=new Nt({color:16716947,metalness:.3,roughness:.6,clearcoat:.2});new Nt({color:16766720,metalness:.3,roughness:.6,clearcoat:.2});const ce=new Nt({color:16766720,metalness:.3,roughness:.6,clearcoat:.2}),pe=new Nt({color:16753920,metalness:.3,roughness:.6,clearcoat:.2}),Ae=new R(Qt,ne);Ae.scale.set(.15,.15,.15),Ae.position.set(.02,1.16,.1),Ae.rotateZ(-25),m.add(Ae);const fe=new R(Qt,G);fe.scale.set(.14,.14,.14),fe.rotateZ(45),fe.position.set(.2,-.7,.3),m.add(fe);const Le=new R(Qt,ce);Le.scale.set(.14,.14,.14),Le.rotateZ(45),Le.rotateY(45),Le.position.set(.3,.7,.3),m.add(Le);const _e=new R(Qt,ce);_e.scale.set(.15,.15,.15),_e.rotateZ(45),_e.rotateY(45),_e.position.set(.35,-1.5,.3),m.add(_e);const ze=new R(Qt,pe);ze.scale.set(.17,.17,.17),ze.rotateZ(45),ze.rotateY(15),ze.position.set(.35,1,.3),m.add(ze);const ve=new R(Zt,ne);ve.scale.set(.7,.7,.7),ve.position.set(-6,0,-3),p.add(ve)}),Dt.renderOrder=1,m.scale.set(1.4,1.4,1.4),f.add(m),m.position.set(t.bodyPosition.x,t.bodyPosition.y,t.bodyPosition.z),_.position.set(t.bodyPosition.x,1,t.cameraPosition),_.lookAt(t.bodyPosition.x,0,0),_.position.z=4,m.rotation.x=.1;const z=[w,v,C],_t=new Fp,st=[0,Math.PI/2,Math.PI,0,Math.PI/3];d(),ke(()=>t.bodyPosition,tt=>{m.position.set(tt.x,tt.y,tt.z)}),ke(()=>t.cameraPosition,tt=>{_.position.set(t.bodyPosition.x,1,tt),_.lookAt(t.bodyPosition.x,0,0)}),window.addEventListener("resize",()=>{_.aspect=window.innerWidth/window.innerHeight,_.updateProjectionMatrix(),x.setSize(window.innerWidth,window.innerHeight)})}});function a(){s.value=!0}function l(){i.value=!0}function c(){o.value=!0}function h(){r.value=!0}function u(){s.value=!1,i.value=!1,o.value=!1,r.value=!1}return(d,f)=>(yi(),Mi(gn,null,[Xt("div",{ref_key:"threeCanvas",ref:e,class:kn(n.background?"no-bg":"three-canvas")},null,2),Xt("div",b1,[Xt("button",{class:"pixel-btn up",onMousedown:c,onMouseup:u},"UP",32),Xt("div",T1,[Xt("button",{class:"pixel-btn left",onMousedown:a,onMouseup:u},"LEFT",32),Xt("button",{class:"pixel-btn right",onMousedown:l,onMouseup:u},"RIGHT",32)]),Xt("button",{class:"pixel-btn down",onMousedown:h,onMouseup:u},"DOWN",32)])],64))}}),R1=wi(A1,[["__scopeId","data-v-cb52c927"]]),P1={class:"pixel-controls"},C1={class:"side-buttons"},I1=Vn({__name:"MetalMachineBear",props:{background:{type:Boolean,default:!1},cameraPosition:{type:Number,default:5},bodyPosition:{type:Object,default:()=>({x:0,y:0,z:0})}},setup(n){const t=n,e=Kt(null);let i=Kt(!1),s=Kt(!1),o=Kt(!1),r=Kt(!1);ai(()=>{if(e.value){let d=function(ce,pe){const Ae=new ie(kt,kt,z,32);Ae.rotateX(Math.PI/2);const fe=new R(Ae,ce),Le=new $t;for(let ze=0;ze<_t;ze++){const ve=ze/_t*Math.PI*2,qe=new ei(st,tt,St),Ye=new R(qe,ce);Ye.position.set((kt+St/26)*Math.cos(ve),(kt+St/26)*Math.sin(ve),0),Ye.rotation.z=ve,Le.add(Ye)}const _e=new $t;return _e.add(fe),_e.add(Le),_e.position.set(pe.x,pe.y,pe.z),_e},f=function(){requestAnimationFrame(f),i.value&&(p.rotation.y+=.03),s.value&&(p.rotation.y-=.03),o.value&&(p.rotation.x-=.03),r.value&&(p.rotation.x+=.03),Et.rotation.z-=.02,Ht.rotation.z+=.03,jt.rotation.z+=.02,Qt.rotation.z+=.02,Zt.rotation.z-=.03,ne.rotation.y+=.04,m.render(_,x)};const _=new ri,x=new Fe(75,window.innerWidth/window.innerHeight,.1,1e3),m=new oi({antialias:!0,alpha:!0});m.setSize(window.innerWidth,window.innerHeight),e.value.appendChild(m.domElement);const p=new $t,b=new $t;_.add(b);const M=new Xi(16777215,2);_.add(M);const S=new Wi(16777215,4);S.position.set(5,5,5),_.add(S);const O=new Vi(16777215,5,50);O.position.set(0,2,4),_.add(O);const I=new Hi,P=I.load("/3d-bear-arts/assets/metal.jpg"),F=I.load("/3d-bear-arts/assets/pop7.jpg"),et=I.load("/3d-bear-arts/assets/gear.jpg");P.wrapS=P.wrapT=We,F.wrapS=F.wrapT=We,F.repeat.set(2,2);const y=new Nt({color:13882323,metalness:.9,roughness:.2,clearcoat:.5,clearcoatRoughness:.1,map:P});et.mapping=Ma;const E=new Nt({color:"#d3d3d3",metalness:1,roughness:.25,map:P,envMap:et,clearcoat:.7,clearcoatRoughness:.3}),G=new Nt({color:"#C0C0C0",metalness:1,roughness:.25,envMap:et,clearcoat:.7,clearcoatRoughness:.3}),W=new Nt({color:"#C0C0C0",metalness:1,roughness:.25,map:P,envMap:et,transparent:!0,opacity:.8,clearcoat:.7,clearcoatRoughness:.3,transmission:.8,ior:1.45}),Q=new Nt({color:"#C0C0C0",metalness:1,roughness:.5,map:P,envMap:et,transparent:!0,opacity:.23,clearcoat:.7,clearcoatRoughness:.3,transmission:.8,ior:1.45}),at=new Nt({color:13882323,metalness:1,roughness:.25,clearcoat:1,clearcoatRoughness:.05,reflectivity:.9,envMapIntensity:1,side:ge});new Nt({color:"#C0C0C0",metalness:1,roughness:.2,transparent:!0,opacity:.4,clearcoat:.7,clearcoatRoughness:.3,transmission:.8,ior:1.45});const X=new Nt({color:"#d3d3d3",metalness:1,roughness:.2,map:et,envMap:et,clearcoat:.7,clearcoatRoughness:.3});new Nt({color:12632256,metalness:.9,roughness:.2,clearcoat:.5,clearcoatRoughness:.1,map:et}),new Nt({color:12632256,metalness:1,roughness:.3,clearcoat:.5,clearcoatRoughness:.1,map:P,transparent:!0,opacity:.3});const nt=new Tt(1,32,32,0,Math.PI),$=new R(nt,Q),gt=new R(nt,E);$.scale.set(.85,.85,.8),gt.scale.set(.85,.85,.8),$.position.y=-.2,gt.position.y=-.2,$.rotation.y=Math.PI/2,gt.rotation.y=Math.PI*1.5;const mt=new Te(1,32),Mt=new R(mt,W);Mt.scale.set(.85,.85,.8),Mt.position.set(0,-.2,0),Mt.rotation.y=Math.PI/2;const It=new $t;It.add($),It.add(gt),It.add(Mt),p.add(It);const zt=new Tt(.6,32,32,0,Math.PI),rt=new R(zt,E);rt.scale.set(1,.95,.95),rt.position.set(0,1,0),rt.rotation.y=Math.PI*1.5;const ft=new R(zt,Q);ft.scale.set(1,.95,.95),ft.position.set(0,1,0),ft.rotation.y=Math.PI/2;const xt=new Te(.6,32),B=new R(xt,W);B.position.set(0,1,0),B.rotation.y=Math.PI/2,B.scale.set(1,.95,.95);const lt=new $t;lt.add(rt),lt.add(ft),lt.add(B),p.add(lt);const ot=new Tt(.25,32,32),ht=new R(ot,E);ht.position.set(-.45,1.35,-.1),p.add(ht);const wt=new R(ot,W);wt.position.set(.45,1.35,-.1),p.add(wt);const it=new Tt(.25,32,32,Math.PI/2,Math.PI),g=new R(it,E);g.scale.set(1.1,.6,.8),g.position.set(0,.84,.5),g.rotation.y=Math.PI;const T=new Tt(.25,32,32,Math.PI/2,Math.PI),L=new R(T,W);L.scale.set(1.1,.6,.8),L.position.set(0,.84,.5),L.rotation.y=0;const N=new Te(.25,32),U=new R(N,at);U.scale.set(.8,.6,.8),U.position.set(0,.84,.5),U.rotation.y=Math.PI/2;const Y=new $t;Y.add(g),Y.add(L),Y.add(U),p.add(Y);const Z=new In;Z.moveTo(0,0),Z.bezierCurveTo(0,-.3,-.6,-.3,-.6,0),Z.bezierCurveTo(-.6,.3,0,.6,0,1),Z.bezierCurveTo(0,.6,.6,.3,.6,0),Z.bezierCurveTo(.6,-.3,0,-.3,0,0);const w={depth:.4,bevelEnabled:!0,bevelSegments:2,steps:2,bevelSize:.1,bevelThickness:.1},v=new Hn(Z,w),C=new Tt(.35,32,32),q=new R(C,E);q.scale.set(.75,1.25,.65),q.position.set(-.7,-.15,.2),p.add(q);const H=new R(C,W);H.scale.set(.75,1.25,.65),H.position.set(.7,-.15,.2),p.add(H);const V=new ie(.2,.22,.6,32),ut=new R(V,E);ut.position.set(-.4,-1.05,0),p.add(ut);const ct=new R(V,W);ct.position.set(.4,-1.05,0),p.add(ct);const pt=new Tt(.3,32,32),Rt=new R(pt,E);Rt.scale.set(1,.72,1.5),Rt.position.set(-.4,-1.45,.17),p.add(Rt);const dt=new R(pt,W);dt.scale.set(1,.72,1.5),dt.position.set(.4,-1.45,.17),p.add(dt);const yt=new Tt(.44,32,32),Pt=new R(yt,E);Pt.position.set(-.15,-.45,-.4),p.add(Pt);const Lt=new R(yt,Q);Lt.position.set(.15,-.45,-.4),p.add(Lt);const bt=new Tt(.18,32,32),Vt=new R(bt,E);Vt.position.set(0,-.35,-.8),p.add(Vt),new qi().load("https://threejs.org/examples/fonts/helvetiker_bold.typeface.json",function(ce){const pe=new He("X",{font:ce,size:.2,depth:.05});new zn({color:0});const Ae=new R(pe,y);Ae.position.set(-.3,.99,.53),Ae.rotation.x=se.degToRad(-5),Ae.rotation.y=se.degToRad(-15),p.add(Ae);const fe=new He("O",{font:ce,size:.2,depth:.05});new zn({color:0});const Le=new R(fe,y);Le.position.set(.14,.99,.53),Le.rotation.y=se.degToRad(12),Le.rotation.x=se.degToRad(-5),p.add(Le)}),Vt.renderOrder=1;const kt=1.2,z=.5,_t=8,st=.7,tt=.3,St=.5,Et=d(X,{x:-2,y:0,z:0}),Ht=d(X,{x:0,y:0,z:0}),jt=d(X,{x:2,y:0,z:0}),Qt=d(X,{x:2,y:0,z:0}),Zt=d(X,{x:2,y:-2,z:0}),ne=new R(v,G);ne.scale.set(.3,.3,.3),ne.position.set(.25,1.1,0),ne.rotation.y=Math.PI,ne.rotation.x=Math.PI,p.add(ne),Et.position.set(.35,0,0),Ht.position.set(.25,-.3,.4),jt.position.set(.3,.3,-.2),Qt.position.set(.25,.17,.4),Zt.position.set(.5,-.3,.45),Et.scale.set(.2,.2,.2),Ht.scale.set(.18,.18,.18),jt.scale.set(.15,.15,.15),Qt.scale.set(.17,.17,.17),Zt.scale.set(.15,.15,.15),Ht.rotation.z=Math.PI/4,jt.rotation.z=-Math.PI/4,Qt.rotation.y=-Math.PI/2,Zt.rotation.y=-Math.PI/2,p.add(Et),p.add(Ht),p.add(jt),p.add(Qt),p.add(Zt),p.rotation.x=.1,p.scale.set(1.4,1.4,1.4),_.add(p),p.position.set(t.bodyPosition.x,t.bodyPosition.y,t.bodyPosition.z),x.position.set(t.bodyPosition.x,1,t.cameraPosition),x.lookAt(t.bodyPosition.x,0,0),x.position.z=4,f(),ke(()=>t.bodyPosition,ce=>{p.position.set(ce.x,ce.y,ce.z)}),ke(()=>t.cameraPosition,ce=>{x.position.set(t.bodyPosition.x,1,ce),x.lookAt(t.bodyPosition.x,0,0)}),window.addEventListener("resize",()=>{x.aspect=window.innerWidth/window.innerHeight,x.updateProjectionMatrix(),m.setSize(window.innerWidth,window.innerHeight)})}});function a(){s.value=!0}function l(){i.value=!0}function c(){o.value=!0}function h(){r.value=!0}function u(){s.value=!1,i.value=!1,o.value=!1,r.value=!1}return(d,f)=>(yi(),Mi(gn,null,[Xt("div",{ref_key:"threeCanvas",ref:e,class:kn(n.background?"no-bg":"three-canvas")},null,2),Xt("div",P1,[Xt("button",{class:"pixel-btn up",onMousedown:c,onMouseup:u},"UP",32),Xt("div",C1,[Xt("button",{class:"pixel-btn left",onMousedown:a,onMouseup:u},"LEFT",32),Xt("button",{class:"pixel-btn right",onMousedown:l,onMouseup:u},"RIGHT",32)]),Xt("button",{class:"pixel-btn down",onMousedown:h,onMouseup:u},"DOWN",32)])],64))}}),L1=wi(I1,[["__scopeId","data-v-9a57b6d8"]]),D1={class:"pixel-controls"},U1={class:"side-buttons"},N1={class:"directional-buttons"},F1={class:"horizontal-buttons"},O1={class:"directional-buttons-woman"},B1={class:"horizontal-buttons-woman"},z1={class:"directional-buttons-kid"},G1={class:"horizontal-buttons-kid"},na=.1,ia=.05,sa=.08,H1=Vn({__name:"Water",props:{background:{type:Boolean,default:!1},cameraPosition:{type:Number,default:5},bodyPosition:{type:Object,default:()=>({x:0,y:0,z:0})}},setup(n){const t=n,e=Kt(null);let i=Kt(!1),s=Kt(!1),o=Kt(!1),r=Kt(!1);const a=$o(null),l=Kt(!1),c=Kt(!1),h=Kt(!1),u=Kt(!1),d=$o(null),f=$o(null),_=Kt(!1),x=Kt(!1),m=Kt(!1),p=Kt(!1),b=Kt(!1),M=Kt(!1),S=Kt(!1),O=Kt(!1),I=new oi({antialias:!0});I.setSize(window.innerWidth,window.innerHeight),document.body.appendChild(I.domElement);const P=new ri,F=new Fe(75,window.innerWidth/window.innerHeight,.1,1e3);F.position.z=5,ai(()=>{if(e.value){let it=function(){const At=new $t,Ee=new Tt(.2,32,32),Re=new Jt({color:16767916}),me=new R(Ee,Re);me.position.set(0,1.5,0),At.add(me);const sn=new Tt(.21,32,32,0,Math.PI*2,0,Math.PI/2),ye=new Jt({color:16711680}),je=new R(sn,ye);je.position.set(0,1.58,0),At.add(je);const Un=new ie(.25,.25,.6,32),Ge=new Jt({color:16767916}),xn=new R(Un,Ge);xn.position.set(0,1,0),At.add(xn);const li=new ie(.26,.26,.3,32),wn=new Jt({color:255}),Nn=new R(li,wn);Nn.position.set(0,.65,0),At.add(Nn);const Xn=new ie(.1,.1,.5,32),un=new Jt({color:16767916}),Fn=new R(Xn,un);Fn.position.set(-.15,.25,0),At.add(Fn);const qn=new R(Xn,un);qn.position.set(.15,.25,0),At.add(qn);const ci=new ie(.08,.08,.5,32),Sn=new R(ci,un);Sn.position.set(-.35,1.3,0),Sn.rotation.z=Math.PI/4,At.add(Sn);const En=new R(ci,un);return En.position.set(.35,1.3,0),En.rotation.z=-Math.PI/4,At.add(En),At.scale.set(.27,.27,.27),At.position.set(-.2,-.1,-.15),At},g=function(){const At=new $t,Ee=new Tt(.18,32,32),Re=new Jt({color:16767916}),me=new R(Ee,Re);me.position.set(0,1.2,.04),At.add(me);const sn=new Tt(.19,32,32,.4,Math.PI*2,0,Math.PI/2),ye=new ie(.18,.18,.4,32),je=new Jt({color:9127187}),Un=new R(sn,je);Un.position.set(0,1.28,0),At.add(Un);const Ge=new R(ye,je);Ge.position.set(0,1.1,-.01),At.add(Ge);const xn=new ie(.18,.2,.5,32),li=new Jt({color:16767916}),wn=new R(xn,li);wn.position.set(0,.85,0),At.add(wn);const Nn=new Tt(.08,32,32,0,Math.PI),Xn=new Jt({color:16738740}),un=new R(Nn,Xn);un.position.set(-.09,.98,.15),At.add(un);const Fn=new R(Nn,Xn);Fn.position.set(.09,.98,.15),At.add(Fn);const qn=new ie(.22,.22,.25,32),ci=new Jt({color:16738740}),Sn=new R(qn,ci);Sn.position.set(0,.6,0),At.add(Sn);const En=new ie(.1,.1,.6,32),fs=new Jt({color:16767916}),Fs=new R(En,fs);Fs.position.set(-.09,.5,.2),Fs.rotation.x=Math.PI/2,At.add(Fs);const Os=new R(En,fs);Os.position.set(.09,.5,.2),Os.rotation.x=Math.PI/2,At.add(Os);const Lo=new ie(.08,.08,.35,32),Bs=new R(Lo,fs);Bs.position.set(-.24,.95,.18),Bs.rotation.x=Math.PI/2,At.add(Bs);const zs=new R(Lo,fs);return zs.position.set(.2,.85,0),zs.rotation.z=Math.PI/20,At.add(zs),At.scale.set(.27,.27,.27),At.position.set(.2,-.15,-.32),At},T=function(){const At=new $t,Ee=new Tt(.2,32,32),Re=new Jt({color:16767916}),me=new R(Ee,Re);me.position.set(0,1.5,0),At.add(me);const sn=new Tt(.21,32,32,0,Math.PI*2,0,Math.PI/2),ye=new Jt({color:25600}),je=new R(sn,ye);je.position.set(0,1.58,0),At.add(je);const Un=new ie(.22,.22,.5,32),Ge=new Jt({color:16767916}),xn=new R(Un,Ge);xn.position.set(0,1,0),At.add(xn);const li=new ie(.23,.23,.3,32),wn=new Jt({color:8388736}),Nn=new R(li,wn);Nn.position.set(0,.65,0),At.add(Nn);const Xn=new ie(.1,.1,.5,32),un=new Jt({color:16767916}),Fn=new R(Xn,un);Fn.position.set(-.15,.3,-.25),Fn.rotation.x=Math.PI/6,At.add(Fn);const qn=new R(Xn,un);qn.position.set(.15,.3,.25),qn.rotation.x=-Math.PI/6,At.add(qn);const ci=new ie(.08,.08,.4,32),Sn=new R(ci,un);Sn.position.set(-.28,1,-.2),Sn.rotation.x=Math.PI/6,At.add(Sn);const En=new R(ci,un);return En.position.set(.28,1.3,.1),En.rotation.z=-Math.PI/8,At.add(En),At.scale.set(.15,.15,.15),At.position.set(.3,-.25,.25),At.rotation.x=Math.PI/12,At.rotation.y=Math.PI/2,At.rotation.z=-Math.PI/3,At},L=function(At){let Ee=1,Re=0;function me(){requestAnimationFrame(me),At.position.x+=.01*Ee,At.position.x>=.35?(Ee=-1,At.rotation.y=Math.PI):At.position.x<=-.35&&(Ee=1,At.rotation.y=0),Re+=.003,At.position.y=-.4+Math.sin(Re)*.1,Z.render(U,Y)}me()},N=function(){requestAnimationFrame(N),i.value&&(w.rotation.y+=.03),s.value&&(w.rotation.y-=.03),o.value&&(w.rotation.x-=.03),r.value&&(w.rotation.x+=.03),Ae.uniforms.u_time.value+=.25,j.rotation.y+=.04,Z.render(U,Y)};const U=new ri,Y=new Fe(75,window.innerWidth/window.innerHeight,.1,1e3),Z=new oi({antialias:!0,alpha:!0});Z.setSize(window.innerWidth,window.innerHeight),e.value.appendChild(Z.domElement);const w=new $t,v=new $t;U.add(v);const C=new Xi(16777215,2);U.add(C);const q=new Wi(16777215,4);q.position.set(5,5,5),U.add(q);const H=new Vi(16777215,5,50);H.position.set(0,2,4),U.add(H);const V=new Hi,ut=V.load("/3d-bear-arts/assets/beach.jpg");ut.repeat.set(.8,1);const ct=V.load("/3d-bear-arts/assets/sun.jpg");ut.wrapS=ut.wrapT=We,ut.repeat.set(.8,1),ct.wrapS=ct.wrapT=We;const pt=new Nt({color:11592447,map:ut,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9}),Rt=new Nt({color:11592447,map:ut,metalness:.3,roughness:.5,transparent:!0,opacity:.6,side:ge,ior:1.33,depthWrite:!1,depthTest:!0}),dt=new Nt({color:11592447,map:ut,metalness:.1,roughness:.6,transparent:!0,opacity:.6,clearcoat:.9,clearcoatRoughness:.4,transmission:.7,ior:1.2,depthTest:!0,envMapIntensity:.8}),yt=new Nt({color:11592447,map:ut,metalness:.1,roughness:.6,transparent:!0,opacity:.3,clearcoat:.9,clearcoatRoughness:.4,ior:1.2,depthWrite:!1,depthTest:!0,envMapIntensity:.6,side:ge}),Pt=new Nt({color:11592447,map:ut,metalness:.3,roughness:.5,transparent:!0,opacity:.8,side:ge,ior:1.33}),Lt=new Nt({color:11592447,map:ut,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9}),bt=new Tt(1,32,32,0,Math.PI),Vt=new R(bt,yt),Dt=new R(bt,Rt);Vt.scale.set(.85,.85,.8),Dt.scale.set(.85,.85,.8),Vt.position.y=-.2,Dt.position.y=-.2,Vt.rotation.y=Math.PI/2,Dt.rotation.y=Math.PI*1.5;const kt=new Te(1,32),z=new R(kt,pt);z.scale.set(.85,.85,.8),z.position.set(0,-.2,0),z.rotation.y=Math.PI/2;const _t=new $t;_t.add(Vt),_t.add(Dt),_t.add(z),w.add(_t);const st=new Tt(.6,32,32,0,Math.PI),tt=new R(st,pt);tt.scale.set(1,.95,.95),tt.position.set(0,1,0),tt.rotation.y=Math.PI*1.5;const St=new R(st,dt);St.scale.set(1,.95,.95),St.position.set(0,1,0),St.rotation.y=Math.PI/2;const Et=new Te(.6,32),Ht=new R(Et,pt);Ht.position.set(0,1,0),Ht.rotation.y=Math.PI/2,Ht.scale.set(1,.95,.95);const jt=new $t;jt.add(tt),jt.add(St),jt.add(Ht),w.add(jt);const Qt=new Tt(.6,32,32,0,Math.PI*2,0,Math.PI/2),Zt=new Nt({color:11592447,metalness:.1,roughness:.2,clearcoat:1,clearcoatRoughness:.1,transparent:!0,opacity:.9,transmission:.9,ior:1.33,reflectivity:.8,envMapIntensity:1}),ne=new R(Qt,Zt);ne.position.set(0,-.2,0),ne.rotation.x=Math.PI,ne.scale.set(1.25,1.25,1.25),_t.add(ne);const ce=new Nt({color:49151,metalness:.1,roughness:.5,clearcoat:.7,clearcoatRoughness:.25,side:ge,transparent:!0,opacity:.7,depthWrite:!1}),pe=new R(kt,ce);pe.scale.set(.7,.7,.7),pe.position.set(0,-.3,0),pe.rotation.x=Math.PI/2,pe.renderOrder=1,_t.add(pe),w.add(_t);const Ae=new Ln({transparent:!0,depthWrite:!1,depthTest:!0,uniforms:{u_time:{value:0},u_waveFrequency:{value:8},u_waveAmplitude:{value:.05},u_waveSpeed:{value:.2}},vertexShader:`
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
            `}),fe=new R(kt,Ae);fe.position.set(0,-.3,0),fe.scale.set(.7,.7,.7),fe.rotation.x=-Math.PI/2,fe.renderOrder=1,_t.add(fe);const Le=new Tt(.25,32,32),_e=new R(Le,Pt);_e.position.set(-.45,1.35,-.1),w.add(_e);const ze=new R(Le,dt);ze.position.set(.45,1.35,-.1),w.add(ze);const ve=new Tt(.25,32,32,Math.PI/2,Math.PI),qe=new R(ve,Pt);qe.scale.set(1.1,.6,.8),qe.position.set(0,.84,.5),qe.rotation.y=Math.PI;const Ye=new Tt(.25,32,32,Math.PI/2,Math.PI),Wn=new R(Ye,dt);Wn.scale.set(1.1,.6,.8),Wn.position.set(0,.84,.5),Wn.rotation.y=0;const Yi=new Te(.25,32),Dn=new R(Yi,Rt);Dn.scale.set(.8,.6,.8),Dn.position.set(0,.84,.5),Dn.rotation.y=Math.PI/2;const Mn=new $t;Mn.add(qe),Mn.add(Wn),Mn.add(Dn),w.add(Mn);const Ei=new Nt({color:8374441,metalness:1,roughness:.25,envMap:ct,clearcoat:.7,clearcoatRoughness:.3}),A=new In;A.moveTo(0,0),A.bezierCurveTo(0,-.3,-.6,-.3,-.6,0),A.bezierCurveTo(-.6,.3,0,.6,0,1),A.bezierCurveTo(0,.6,.6,.3,.6,0),A.bezierCurveTo(.6,-.3,0,-.3,0,0);const J={depth:.4,bevelEnabled:!0,bevelSegments:2,steps:2,bevelSize:.1,bevelThickness:.1},D=new Hn(A,J),j=new R(D,Ei);j.scale.set(.2,.2,.2),j.position.set(.25,1.2,0),j.rotation.y=Math.PI,j.rotation.x=Math.PI,w.add(j);const k=new Tt(.35,32,32),vt=new R(k,Rt);vt.scale.set(.75,1.25,.65),vt.position.set(-.7,-.15,.2),w.add(vt);const Ct=new R(k,yt);Ct.scale.set(.75,1.25,.65),Ct.position.set(.7,-.15,.2),w.add(Ct);const Ft=new ie(.2,.22,.6,32),Ut=new R(Ft,Pt);Ut.position.set(-.4,-1.05,0),w.add(Ut);const Yt=new R(Ft,dt);Yt.position.set(.4,-1.05,0),w.add(Yt);const qt=new Tt(.3,32,32),Gt=new R(qt,Pt);Gt.scale.set(1,.72,1.5),Gt.position.set(-.4,-1.45,.17),w.add(Gt);const ee=new R(qt,dt);ee.scale.set(1,.72,1.5),ee.position.set(.4,-1.45,.17),w.add(ee);const ue=new Tt(.44,32,32),de=new R(ue,Pt);de.position.set(-.15,-.45,-.4),w.add(de);const Ce=new R(ue,Pt);Ce.position.set(.15,-.45,-.4),w.add(Ce);const te=new Tt(.18,32,32),Wt=new R(te,Pt);Wt.position.set(0,-.35,-.8),w.add(Wt),new qi().load("https://threejs.org/examples/fonts/helvetiker_bold.typeface.json",function(At){const Ee=new He("X",{font:At,size:.2,depth:.05}),Re=new R(Ee,Lt);Re.position.set(-.3,.99,.53),Re.rotation.x=se.degToRad(-5),Re.rotation.y=se.degToRad(-15),w.add(Re);const me=new He("O",{font:At,size:.2,depth:.05}),sn=new R(me,Lt);sn.position.set(.14,.99,.53),sn.rotation.y=se.degToRad(12),sn.rotation.x=se.degToRad(-5),w.add(sn)}),a.value=it(),w.add(a.value),U.add(w),d.value=g(),w.add(d.value),f.value=T(),w.add(f.value),L(f.value),w.scale.set(1.4,1.4,1.4),U.add(w),w.position.set(t.bodyPosition.x,t.bodyPosition.y,t.bodyPosition.z),Y.position.set(t.bodyPosition.x,1,t.cameraPosition),Y.lookAt(t.bodyPosition.x,0,0),Y.position.z=4,w.rotation.x=.1,N(),ke(()=>t.bodyPosition,At=>{w.position.set(At.x,At.y,At.z)}),ke(()=>t.cameraPosition,At=>{Y.position.set(t.bodyPosition.x,1,At),Y.lookAt(t.bodyPosition.x,0,0)}),window.addEventListener("resize",()=>{Y.aspect=window.innerWidth/window.innerHeight,Y.updateProjectionMatrix(),Z.setSize(window.innerWidth,window.innerHeight)})}});function et(){s.value=!0}function y(){i.value=!0}function E(){o.value=!0}function G(){r.value=!0}function W(){s.value=!1,i.value=!1,o.value=!1,r.value=!1}const Q=()=>{l.value=!0,console.log(l.value),a.value&&(a.value.rotation.y=0),console.log(a.value)},at=()=>{c.value=!0,a.value&&(a.value.rotation.y=Math.PI),console.log(a.value)},X=()=>{h.value=!0,a.value&&(a.value.rotation.y=Math.PI/2)},nt=()=>{u.value=!0,a.value&&(a.value.rotation.y=-Math.PI/2)},$=()=>{l.value=!1,c.value=!1,h.value=!1,u.value=!1},gt=()=>{_.value=!0,d.value&&(d.value.rotation.y=Math.PI)},mt=()=>{x.value=!0,d.value&&(d.value.rotation.y=0)},Mt=()=>{m.value=!0,d.value&&(d.value.rotation.y=-Math.PI/2)},It=()=>{p.value=!0,d.value&&(d.value.rotation.y=Math.PI/2)},zt=()=>{_.value=!1,x.value=!1,m.value=!1,p.value=!1},rt=()=>{requestAnimationFrame(rt),a.value&&(l.value&&(a.value.position.z-=na),c.value&&(a.value.position.z+=na),h.value&&(a.value.position.x-=na),u.value&&(a.value.position.x+=na)),I.render(P,F)},ft=()=>{requestAnimationFrame(ft),d.value&&(_.value&&(d.value.position.z-=ia),x.value&&(d.value.position.z+=ia),m.value&&(d.value.position.x-=ia),p.value&&(d.value.position.x+=ia))};ft(),rt();const xt=()=>{b.value=!0,f.value&&(f.value.rotation.y=0)},B=()=>{M.value=!0,f.value&&(f.value.rotation.y=Math.PI)},lt=()=>{S.value=!0,f.value&&(f.value.rotation.y=Math.PI/2)},ot=()=>{O.value=!0,f.value&&(f.value.rotation.y=-Math.PI/2)},ht=()=>{b.value=!1,M.value=!1,S.value=!1,O.value=!1},wt=()=>{requestAnimationFrame(wt),f.value&&(b.value&&(f.value.position.z-=sa),M.value&&(f.value.position.z+=sa),S.value&&(f.value.position.x-=sa),O.value&&(f.value.position.x+=sa))};return wt(),(it,g)=>(yi(),Mi(gn,null,[Xt("div",{ref_key:"threeCanvas",ref:e,class:kn(n.background?"no-bg":"three-canvas")},null,2),Xt("div",D1,[Xt("button",{class:"pixel-btn up",onMousedown:E,onMouseup:W},"UP",32),Xt("div",U1,[Xt("button",{class:"pixel-btn left",onMousedown:et,onMouseup:W},"LEFT",32),Xt("button",{class:"pixel-btn right",onMousedown:y,onMouseup:W},"RIGHT",32)]),Xt("button",{class:"pixel-btn down",onMousedown:G,onMouseup:W},"DOWN",32)]),Xt("div",N1,[Xt("button",{id:"move-north",class:"directional-btn north-btn",onMousedown:Q,onMouseup:$},"UP",32),Xt("div",F1,[Xt("button",{id:"move-west",class:"directional-btn west-btn",onMousedown:X,onMouseup:$},"LEFT",32),Xt("button",{id:"move-east",class:"directional-btn east-btn",onMousedown:nt,onMouseup:$},"RIGHT",32)]),Xt("button",{id:"move-south",class:"directional-btn south-btn",onMousedown:at,onMouseup:$},"DOWN",32)]),Xt("div",O1,[Xt("button",{class:"directional-btn-woman north-btn",onMousedown:gt,onMouseup:zt},"UP",32),Xt("div",B1,[Xt("button",{class:"directional-btn-woman west-btn",onMousedown:Mt,onMouseup:zt},"LEFT",32),Xt("button",{class:"directional-btn-woman east-btn",onMousedown:It,onMouseup:zt},"RIGHT",32)]),Xt("button",{class:"directional-btn-woman south-btn",onMousedown:mt,onMouseup:zt},"DOWN",32)]),Xt("div",z1,[Xt("button",{class:"directional-btn-kid north-btn",onMousedown:xt,onMouseup:ht},"UP",32),Xt("div",G1,[Xt("button",{class:"directional-btn-kid west-btn",onMousedown:lt,onMouseup:ht},"LEFT",32),Xt("button",{class:"directional-btn-kid east-btn",onMousedown:ot,onMouseup:ht},"RIGHT",32)]),Xt("button",{class:"directional-btn-kid south-btn",onMousedown:B,onMouseup:ht},"DOWN",32)])],64))}}),k1=wi(H1,[["__scopeId","data-v-f25dfda5"]]),V1={class:"pixel-controls"},W1={class:"side-buttons"},X1=Vn({__name:"GhostBear",props:{background:{type:Boolean,default:!1},cameraPosition:{type:Number,default:5},bodyPosition:{type:Object,default:()=>({x:0,y:0,z:0})}},setup(n){const t=n,e=Kt(null);let i=Kt(!1),s=Kt(!1),o=Kt(!1),r=Kt(!1);ai(()=>{if(e.value){let d=function(_e,ze){const ve=new $t,qe=new Tt(1,32,32),Ye=new R(qe,at);Ye.scale.set(1,.8,1),ve.add(Ye);const Wn=new ie(.1,.1,.5,16),Yi=new Jt({color:9127187}),Dn=new R(Wn,Yi);return Dn.position.set(0,.9,0),ve.add(Dn),ve},f=function(){requestAnimationFrame(f),i.value&&(p.rotation.y+=.03),s.value&&(p.rotation.y-=.03),o.value&&(p.rotation.x-=.03),r.value&&(p.rotation.x+=.03),kt.rotation.z-=.04,z.rotation.z+=.04,_t.rotation.z+=.03,st.rotation.z+=.03,v.rotation.y+=.04,Le+=Ae,p.position.y=t.bodyPosition.y+Math.sin(Le)*fe;const _e=ce.getElapsedTime();ne.forEach((ze,ve)=>{const qe=.1+Math.sin(_e*3+pe[ve])*.1;ze.scale.set(qe,qe,qe)}),m.render(_,x)};const _=new ri,x=new Fe(75,window.innerWidth/window.innerHeight,.1,1e3),m=new oi({antialias:!0,alpha:!0});m.setSize(window.innerWidth,window.innerHeight),e.value.appendChild(m.domElement);const p=new $t,b=new $t;_.add(b);const M=new Xi(16777215,2);_.add(M);const S=new Wi(16777215,4);S.position.set(5,5,5),_.add(S);const O=new Vi(16777215,5,50);O.position.set(0,2,4),_.add(O);const I=new Hi,P=I.load("/3d-bear-arts/assets/pumpkin.jpg");P.wrapS=P.wrapT=We,P.repeat.set(.8,.85);const F=I.load("/3d-bear-arts/assets/pumpkin.jpg");F.wrapS=F.wrapT=We,F.repeat.set(1,1);const et=I.load("/3d-bear-arts/assets/pumpkin.jpg");et.wrapS=F.wrapT=We,et.repeat.set(2,.8);const y=new Nt({color:16747520,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9}),E=new $t,G=new Nt({color:16747520,map:P,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9}),W=new Nt({color:16747520,map:F,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9}),Q=new Nt({color:16747520,map:et,metalness:.3,roughness:.1,clearcoat:1,clearcoatRoughness:.05,transparent:!0,opacity:.6,transmission:.8,ior:1.45,reflectivity:.9,envMapIntensity:1,side:ge}),at=new Nt({color:16747520,map:et,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9});new Nt({color:16766720,map:P,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9}),new Nt({color:9109504,map:P,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9}),new Nt({color:4915330,map:P,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9});const X=new Tt(1,32,32,0,Math.PI),nt=new R(X,Q),$=new R(X,G);nt.scale.set(.85,.85,.8),$.scale.set(.85,.85,.8),nt.position.y=-.2,$.position.y=-.2,nt.rotation.y=Math.PI/2,$.rotation.y=Math.PI*1.5;const gt=new Te(1,32),mt=new R(gt,W);mt.scale.set(.85,.85,.8),mt.position.set(0,-.2,0),mt.rotation.y=Math.PI/2;const Mt=new $t;Mt.add(nt),Mt.add($),Mt.add(mt),p.add(Mt);const It=new Tt(.6,32,32,0,Math.PI),zt=new R(It,G);zt.scale.set(1,.95,.95),zt.position.set(0,1,0),zt.rotation.y=Math.PI*1.5;const rt=new R(It,Q);rt.scale.set(1,.95,.95),rt.position.set(0,1,0),rt.rotation.y=Math.PI/2;const ft=new Te(.6,32),xt=new R(ft,W);xt.position.set(0,1,0),xt.rotation.y=Math.PI/2,xt.scale.set(1,.95,.95);const B=new $t;B.add(zt),B.add(rt),B.add(xt),p.add(B);const lt=new Tt(.25,32,32),ot=new R(lt,at);ot.position.set(-.45,1.35,-.1),p.add(ot);const ht=new R(lt,Q);ht.position.set(.45,1.35,-.1),p.add(ht);const wt=new Tt(.25,32,32,Math.PI/2,Math.PI),it=new R(wt,G);it.scale.set(1.1,.6,.8),it.position.set(0,.84,.5),it.rotation.y=Math.PI;const g=new Tt(.25,32,32,Math.PI/2,Math.PI),T=new R(g,Q);T.scale.set(1.1,.6,.8),T.position.set(0,.84,.5),T.rotation.y=0;const L=new Te(.25,32),N=new R(L,G);N.scale.set(.8,.6,.8),N.position.set(0,.84,.5),N.rotation.y=Math.PI/2;const U=new $t;U.add(it),U.add(T),U.add(N),p.add(U);const Y=new In;Y.moveTo(0,0),Y.bezierCurveTo(0,-.3,-.6,-.3,-.6,0),Y.bezierCurveTo(-.6,.3,0,.6,0,1),Y.bezierCurveTo(0,.6,.6,.3,.6,0),Y.bezierCurveTo(.6,-.3,0,-.3,0,0);const Z={depth:.4,bevelEnabled:!0,bevelSegments:2,steps:2,bevelSize:.1,bevelThickness:.1},w=new Hn(Y,Z),v=new R(w,y);v.scale.set(.3,.3,.3),v.position.set(.25,1.1,0),v.rotation.y=Math.PI,v.rotation.x=Math.PI,p.add(v);const C=new Tt(.35,32,32),q=new R(C,W);q.scale.set(.75,1.25,.65),q.position.set(-.7,-.15,.2),p.add(q);const H=new R(C,Q);H.scale.set(.75,1.25,.65),H.position.set(.7,-.15,.2),p.add(H);const V=new ie(.2,.22,.6,32),ut=new R(V,W);ut.position.set(-.4,-1.05,0),p.add(ut);const ct=new R(V,Q);ct.position.set(.4,-1.05,0),p.add(ct);const pt=new Tt(.3,32,32),Rt=new R(pt,at);Rt.scale.set(1,.72,1.5),Rt.position.set(-.4,-1.45,.17),p.add(Rt);const dt=new R(pt,Q);dt.scale.set(1,.72,1.5),dt.position.set(.4,-1.45,.17),p.add(dt);const yt=new Tt(.44,32,32),Pt=new R(yt,G);Pt.position.set(-.15,-.45,-.4),p.add(Pt);const Lt=new R(yt,Q);Lt.position.set(.15,-.45,-.4),p.add(Lt);const bt=new Tt(.18,32,32),Vt=new R(bt,at);Vt.position.set(0,-.35,-.8),p.add(Vt),Vt.renderOrder=1,new qi().load("https://threejs.org/examples/fonts/helvetiker_bold.typeface.json",function(_e){const ze=new He("X",{font:_e,size:.2,depth:.05}),ve=new R(ze,W);ve.position.set(-.3,.99,.53),ve.rotation.x=se.degToRad(-5),ve.rotation.y=se.degToRad(-15),p.add(ve);const qe=new He("O",{font:_e,size:.2,depth:.05}),Ye=new R(qe,W);Ye.position.set(.14,.99,.53),Ye.rotation.y=se.degToRad(12),Ye.rotation.x=se.degToRad(-5),p.add(Ye)}),p.add(E);const kt=d(),z=d(),_t=d(),st=d();kt.position.set(.35,-.35,-.3),z.position.set(.25,-.45,.3),_t.position.set(.3,.1,-.2),st.position.set(.25,.18,.4),kt.scale.set(.3,.3,.3),z.scale.set(.28,.28,.28),_t.scale.set(.25,.25,.25),st.scale.set(.23,.23,.23),z.rotation.z=Math.PI/4,_t.rotation.z=-Math.PI/4,st.rotation.y=-Math.PI/2,p.add(kt),p.add(z),p.add(_t),p.add(st);const tt=new In;tt.moveTo(-.5,0),tt.bezierCurveTo(-.75,.25,-1,.6,-.5,.8),tt.bezierCurveTo(-.25,.85,-.25,.5,-.15,.4),tt.bezierCurveTo(-.05,.6,.05,.6,.15,.4),tt.bezierCurveTo(.25,.5,.25,.85,.5,.8),tt.bezierCurveTo(1,.6,.75,.25,.5,0),tt.bezierCurveTo(.3,-.25,-.3,-.25,-.5,0);const St={depth:.3,bevelEnabled:!1},Et=new Hn(tt,St),Ht=new zn({color:0}),jt=new R(Et,Ht);jt.scale.set(.3,.3,.6),jt.rotation.x=0,jt.rotation.z=0,jt.position.set(.26,.35,.25),p.add(jt);const Qt=new R(Et,Ht);Qt.scale.set(.5,.5,.5),Qt.position.set(.4,-.1,.54),p.add(Qt);const Zt=new R(Et,Ht);Zt.scale.set(.5,.5,.5),Zt.position.set(.32,-.35,.65),p.add(Zt),p.rotation.x=.1,p.scale.set(1.4,1.4,1.4),_.add(p),p.position.set(t.bodyPosition.x,t.bodyPosition.y,t.bodyPosition.z),x.position.set(t.bodyPosition.x,1,t.cameraPosition),x.lookAt(t.bodyPosition.x,0,0),x.position.z=4;const ne=[jt,Qt,Zt],ce=new Fp,pe=[0,Math.PI/2,Math.PI,0,Math.PI/3];let Ae=.05,fe=.25,Le=0;f(),ke(()=>t.bodyPosition,_e=>{p.position.set(_e.x,_e.y,_e.z)}),ke(()=>t.cameraPosition,_e=>{x.position.set(t.bodyPosition.x,1,_e),x.lookAt(t.bodyPosition.x,0,0)}),window.addEventListener("resize",()=>{x.aspect=window.innerWidth/window.innerHeight,x.updateProjectionMatrix(),m.setSize(window.innerWidth,window.innerHeight)})}});function a(){s.value=!0}function l(){i.value=!0}function c(){o.value=!0}function h(){r.value=!0}function u(){s.value=!1,i.value=!1,o.value=!1,r.value=!1}return(d,f)=>(yi(),Mi(gn,null,[Xt("div",{ref_key:"threeCanvas",ref:e,class:kn(n.background?"no-bg":"three-canvas")},null,2),Xt("div",V1,[Xt("button",{class:"pixel-btn up",onMousedown:c,onMouseup:u},"UP",32),Xt("div",W1,[Xt("button",{class:"pixel-btn left",onMousedown:a,onMouseup:u},"LEFT",32),Xt("button",{class:"pixel-btn right",onMousedown:l,onMouseup:u},"RIGHT",32)]),Xt("button",{class:"pixel-btn down",onMousedown:h,onMouseup:u},"DOWN",32)])],64))}}),q1=wi(X1,[["__scopeId","data-v-5eff72b3"]]),Y1={class:"pixel-controls"},$1={class:"side-buttons"},j1=Vn({__name:"GhostBallonBear",props:{background:{type:Boolean,default:!1},cameraPosition:{type:Number,default:5},bodyPosition:{type:Object,default:()=>({x:0,y:0,z:0})}},setup(n){const t=n,e=Kt(null);let i=Kt(!1),s=Kt(!1),o=Kt(!1),r=Kt(!1);ai(()=>{if(e.value){let d=function(){requestAnimationFrame(d),i.value&&(m.rotation.y+=.03),s.value&&(m.rotation.y-=.03),o.value&&(m.rotation.x-=.03),r.value&&(m.rotation.x+=.03),Z.rotation.y+=.03,Ht+=st,jt+=tt,m.position.y=t.bodyPosition.y+Math.sin(Ht)*Et,Z.position.y=t.bodyPosition.y+Math.sin(jt)*St,kt.uniforms.u_time.value+=.25,x.render(f,_)};const f=new ri,_=new Fe(75,window.innerWidth/window.innerHeight,.1,1e3),x=new oi({antialias:!0,alpha:!0});x.setSize(window.innerWidth,window.innerHeight),e.value.appendChild(x.domElement);const m=new $t,p=new $t;f.add(p);const b=new Xi(16777215,2);f.add(b);const M=new Wi(16777215,4);M.position.set(5,5,5),f.add(M);const S=new Vi(16777215,5,50);S.position.set(0,2,4),f.add(S);const O=new Hi,I=O.load("/3d-bear-arts/assets/ghost.jpg");I.wrapS=I.wrapT=We,I.repeat.set(2,2);const P=O.load("/3d-bear-arts/assets/ghost.jpg");P.wrapS=P.wrapT=We,P.repeat.set(1,1);const F=new Nt({color:16777215,metalness:0,roughness:.8,clearcoat:.3,clearcoatRoughness:.9,transparent:!0,opacity:.15,transmission:.95,ior:1.1,reflectivity:.2,envMapIntensity:.3,depthTest:!0,depthWrite:!1,side:ge}),et=new Nt({color:16777215,metalness:0,roughness:.8,clearcoat:.3,clearcoatRoughness:.9,transparent:!0,opacity:.1,envMapIntensity:.3}),y=new Nt({color:9109504,map:I,metalness:.9,roughness:.25,clearcoat:.7,clearcoatRoughness:.3}),E=new Nt({color:16777215,metalness:.1,roughness:.05,clearcoat:1,clearcoatRoughness:.1,transparent:!0,opacity:.1,transmission:.95,ior:1,reflectivity:.2,envMapIntensity:.4,depthTest:!0,depthWrite:!1,side:ge}),G=new Nt({color:16777215,metalness:.3,roughness:.1,clearcoat:1,clearcoatRoughness:.05,transparent:!0,opacity:.45,transmission:.8,reflectivity:.9,envMapIntensity:1,depthTest:!0,depthWrite:!1,side:ge}),W=new Nt({color:16777215,metalness:.3,roughness:.1,clearcoat:1,clearcoatRoughness:.05,transparent:!0,opacity:.45,transmission:.8,reflectivity:.9,envMapIntensity:1,side:ge}),Q=new Tt(1,32,32,0,Math.PI),at=new R(Q,F),X=new R(Q,G);at.scale.set(.85,.85,.8),X.scale.set(.85,.85,.8),at.position.y=-.2,X.position.y=-.2,at.rotation.y=Math.PI/2,X.rotation.y=Math.PI*1.5;const nt=new Te(1,32),$=new R(nt,G);$.scale.set(.85,.85,.8),$.position.set(0,-.2,0),$.rotation.y=Math.PI/2;const gt=new $t;gt.add(at),gt.add(X),gt.add($),m.add(gt);const mt=new Tt(.6,32,32,0,Math.PI),Mt=new R(mt,W);Mt.scale.set(1,.95,.95),Mt.position.set(0,1,0),Mt.rotation.y=Math.PI*1.5;const It=new R(mt,et);It.scale.set(1,.95,.95),It.position.set(0,1,0),It.rotation.y=Math.PI/2;const zt=new Te(.6,32),rt=new R(zt,G);rt.position.set(0,1,0),rt.rotation.y=Math.PI/2,rt.scale.set(1,.95,.95);const ft=new $t;ft.add(Mt),ft.add(It),ft.add(rt),m.add(ft);const xt=new Tt(.25,32,32),B=new R(xt,W);B.position.set(-.45,1.35,-.1),m.add(B);const lt=new R(xt,et);lt.position.set(.45,1.35,-.1),m.add(lt);const ot=new Tt(.25,32,32,Math.PI/2,Math.PI),ht=new R(ot,W);ht.scale.set(1.1,.6,.8),ht.position.set(0,.84,.5),ht.rotation.y=Math.PI;const wt=new Tt(.25,32,32,Math.PI/2,Math.PI),it=new R(wt,et);it.scale.set(1.1,.6,.8),it.position.set(0,.84,.5),it.rotation.y=0;const g=new Te(.25,32),T=new R(g,E);T.scale.set(.8,.6,.8),T.position.set(0,.84,.5),T.rotation.y=Math.PI/2;const L=new $t;L.add(ht),L.add(it),L.add(T),m.add(L);const N=new In;N.moveTo(0,0),N.bezierCurveTo(0,-.3,-.6,-.3,-.6,0),N.bezierCurveTo(-.6,.3,0,.6,0,1),N.bezierCurveTo(0,.6,.6,.3,.6,0),N.bezierCurveTo(.6,-.3,0,-.3,0,0);const U={depth:.4,bevelEnabled:!0,bevelSegments:2,steps:2,bevelSize:.1,bevelThickness:.1},Y=new Hn(N,U),Z=new R(Y,y);Z.scale.set(.35,.35,.35),Z.position.set(0,-.05,0),Z.rotation.y=Math.PI,Z.rotation.x=Math.PI,m.add(Z);const w=new Tt(.35,32,32),v=new R(w,G);v.scale.set(.75,1.25,.65),v.position.set(-.7,-.15,.2),m.add(v);const C=new R(w,E);C.scale.set(.75,1.25,.65),C.position.set(.7,-.15,.2),m.add(C);const q=new ie(.2,.22,.6,32),H=new R(q,G);H.position.set(-.4,-1.05,0),m.add(H);const V=new R(q,E);V.position.set(.4,-1.05,0),m.add(V);const ut=new Tt(.3,32,32),ct=new R(ut,G);ct.scale.set(1,.72,1.5),ct.position.set(-.4,-1.45,.17),m.add(ct);const pt=new R(ut,E);pt.scale.set(1,.72,1.5),pt.position.set(.4,-1.45,.17),m.add(pt);const Rt=new Tt(.44,32,32),dt=new R(Rt,E);dt.position.set(-.15,-.45,-.4),m.add(dt);const yt=new R(Rt,E);yt.position.set(.15,-.45,-.4),m.add(yt);const Pt=new Tt(.18,32,32),Lt=new R(Pt,G);Lt.position.set(0,-.35,-.8),m.add(Lt);const bt=new Tt(.6,32,32,0,Math.PI*2,0,Math.PI/2),Vt=new Nt({color:9109504,metalness:.3,roughness:.1,clearcoat:1,clearcoatRoughness:.05,transparent:!0,opacity:.8,transmission:.85,ior:1.4,reflectivity:.9,envMapIntensity:1.2}),Dt=new R(bt,Vt);Dt.position.set(0,-.2,0),Dt.rotation.x=Math.PI,Dt.scale.set(1.25,1.25,1.25),gt.add(Dt);const kt=new Ln({transparent:!0,depthWrite:!1,depthTest:!0,uniforms:{u_time:{value:0},u_waveFrequency:{value:4},u_waveAmplitude:{value:.5},u_waveSpeed:{value:.3}},vertexShader:`
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
            `}),z=new R(nt,kt);z.position.set(0,-.26,0),z.scale.set(.7,.7,.7),z.rotation.x=-Math.PI/2,z.renderOrder=1,gt.add(z),new qi().load("https://threejs.org/examples/fonts/helvetiker_bold.typeface.json",function(Qt){const Zt=new He("X",{font:Qt,size:.2,depth:.05}),ne=new R(Zt,G);ne.position.set(-.3,.99,.53),ne.rotation.x=se.degToRad(-5),ne.rotation.y=se.degToRad(-15),m.add(ne);const ce=new He("O",{font:Qt,size:.2,depth:.05}),pe=new R(ce,G);pe.position.set(.14,.99,.53),pe.rotation.y=se.degToRad(12),pe.rotation.x=se.degToRad(-5),m.add(pe)}),Lt.renderOrder=1,m.rotation.x=.1,m.scale.set(1.4,1.4,1.4),f.add(m),m.position.set(t.bodyPosition.x,t.bodyPosition.y,t.bodyPosition.z),_.position.set(t.bodyPosition.x,1,t.cameraPosition),_.lookAt(t.bodyPosition.x,0,0),_.position.z=4;let st=.05,tt=.06,St=.2,Et=.25,Ht=0,jt=0;d(),ke(()=>t.bodyPosition,Qt=>{m.position.set(Qt.x,Qt.y,Qt.z)}),ke(()=>t.cameraPosition,Qt=>{_.position.set(t.bodyPosition.x,1,Qt),_.lookAt(t.bodyPosition.x,0,0)}),window.addEventListener("resize",()=>{_.aspect=window.innerWidth/window.innerHeight,_.updateProjectionMatrix(),x.setSize(window.innerWidth,window.innerHeight)})}});function a(){s.value=!0}function l(){i.value=!0}function c(){o.value=!0}function h(){r.value=!0}function u(){s.value=!1,i.value=!1,o.value=!1,r.value=!1}return(d,f)=>(yi(),Mi(gn,null,[Xt("div",{ref_key:"threeCanvas",ref:e,class:kn(n.background?"no-bg":"three-canvas")},null,2),Xt("div",Y1,[Xt("button",{class:"pixel-btn up",onMousedown:c,onMouseup:u},"UP",32),Xt("div",$1,[Xt("button",{class:"pixel-btn left",onMousedown:a,onMouseup:u},"LEFT",32),Xt("button",{class:"pixel-btn right",onMousedown:l,onMouseup:u},"RIGHT",32)]),Xt("button",{class:"pixel-btn down",onMousedown:h,onMouseup:u},"DOWN",32)])],64))}}),K1=wi(j1,[["__scopeId","data-v-eb44448e"]]),Z1={class:"pixel-controls"},J1={class:"side-buttons"},Q1=15,tE=5,eE=Vn({__name:"Aquar",props:{background:{type:Boolean,default:!1},cameraPosition:{type:Number,default:5},bodyPosition:{type:Object,default:()=>({x:0,y:0,z:0})}},setup(n){const t=n,e=Kt(null);let i=Kt(!1),s=Kt(!1),o=Kt(!1),r=Kt(!1);const a=$o(null),l=new oi({antialias:!0});l.setSize(window.innerWidth,window.innerHeight),document.body.appendChild(l.domElement),new ri;const c=new Fe(75,window.innerWidth/window.innerHeight,.1,1e3);c.position.z=5,ai(()=>{if(e.value){let x=function(){const D=new $t,j=new _o(.12,.05,16,100),k=new Jt({color:16777215}),vt=new R(j,k);vt.position.set(0,1.65,0),vt.rotation.x=Math.PI/2,D.add(vt);const Ct=new ro(.15,.3,32),Ft=new Jt({color:16711680}),Ut=new R(Ct,Ft);Ut.position.set(0,1.8,0),D.add(Ut);const Yt=new Tt(.05,32,32),qt=new Jt({color:16777215}),Gt=new R(Yt,qt);return Gt.position.set(0,1.93,0),D.add(Gt),D.position.set(0,-.1,0),D},m=function(){const D=new $t,j=new Tt(.15,32,32),k=new Jt({color:16764057}),vt=new R(j,k);vt.position.set(0,.4,0),D.add(vt);const Ct=new ro(.08,.15,32);new Jt({color:16764057});const Ft=new R(Ct,mt);Ft.position.set(-.1,.55,0),Ft.rotation.z=Math.PI/6,D.add(Ft);const Ut=new R(Ct,mt);Ut.position.set(.1,.55,0),Ut.rotation.z=-Math.PI/6,D.add(Ut);const Yt=new ie(.12,.15,.3,32),qt=new Jt({color:16764057}),Gt=new R(Yt,qt);Gt.position.set(0,.2,0),D.add(Gt);const ee=new ie(.05,.05,.2,32),ue=new Jt({color:16764057}),de=new R(ee,ue);de.position.set(-.07,-.05,.05),D.add(de);const Ce=new R(ee,ue);Ce.position.set(.07,-.05,.05),D.add(Ce);const te=new ie(.04,.04,.2,32),Wt=new Jt({color:16764057}),xe=new R(te,mt);xe.position.set(-.15,.25,0),xe.rotation.z=Math.PI/4,D.add(xe);const At=new R(te,Wt);At.position.set(.15,.25,0),At.rotation.z=-Math.PI/4,D.add(At);const Ee=new ie(.03,.03,.25,32),Re=new Jt({color:16764057}),me=new R(Ee,Re);return me.position.set(0,.1,-.2),me.rotation.x=Math.PI/4,D.add(me),D.scale.set(.75,.75,.75),D.position.set(.2,0,.2),D},p=function(){const D=new $t,j=new Tt(.2,32,32),k=new Jt({color:16764057}),vt=new R(j,k);vt.position.set(0,1,0),D.add(vt);const Ct=new Jt({color:16777215}),Ft=[{x:0,y:.85,z:.15,size:.12},{x:-.1,y:.88,z:.1,size:.1},{x:.1,y:.88,z:.1,size:.1},{x:-.15,y:.95,z:.1,size:.08},{x:.15,y:.95,z:.1,size:.08}];for(const Sr of Ft){const Bp=new Tt(Sr.size,16,16),Du=new R(Bp,Ct);Du.position.set(Sr.x,Sr.y-.06,Sr.z-.01),D.add(Du)}const Ut=new Jt({color:16777215}),Yt=new ie(.05,.06,.1,32),qt=new R(Yt,Ut);qt.position.set(-.06,.93,.18),qt.rotation.z=Math.PI/4;const Gt=new ie(.05,.06,.1,32),ee=new R(Gt,Ut);ee.position.set(.06,.93,.18),ee.rotation.z=-Math.PI/4;const ue=new _o(.12,.05,16,100),de=new Jt({color:16777215}),Ce=new R(ue,de);Ce.position.set(0,1.15,0),Ce.rotation.x=Math.PI/2,D.add(Ce);const te=new ro(.15,.3,32),Wt=new Jt({color:16711680}),xe=new R(te,Wt);xe.position.set(0,1.3,0),D.add(xe);const At=new Tt(.05,32,32),Ee=new Jt({color:16777215}),Re=new R(At,Ee);Re.position.set(0,1.43,0),D.add(Re);const me=new ie(.2,.25,.6,32),sn=new Jt({color:16711680}),ye=new R(me,sn);ye.position.set(0,.5,0),D.add(ye);const je=new ie(.25,.25,.1,32),Un=new Jt({color:0}),Ge=new R(je,Un);Ge.position.set(0,.4,.005),D.add(Ge);const xn=new ie(.06,.06,.3,32),li=new Jt({color:16711680}),wn=new R(xn,li);wn.position.set(-.25,.75,0),wn.rotation.z=Math.PI/4,D.add(wn);const Nn=new R(xn,li);Nn.position.set(.25,.75,0),Nn.rotation.z=-Math.PI/4,D.add(Nn);const Xn=new Tt(.07,32,32),un=new Jt({color:16777215}),Fn=new R(Xn,un);Fn.position.set(-.35,.85,0),D.add(Fn);const qn=new R(Xn,un);qn.position.set(.35,.85,0),D.add(qn);const ci=new ie(.1,.1,.15,32),Sn=new Jt({color:16711680}),En=new ie(.08,.08,.4,32),fs=new Jt({color:0}),Fs=new R(En,fs);Fs.position.set(-.1,.1,0),D.add(Fs);const Os=new R(ci,Sn);Os.position.set(-.1,-.05,0),D.add(Os);const Lo=new R(En,fs);Lo.position.set(.1,.1,0),D.add(Lo);const Bs=new R(ci,Sn);Bs.position.set(.1,-.05,0),D.add(Bs);const zs=new Tt(.12,32,32),Lu=new Jt({color:16711680}),qa=new R(zs,Lu);qa.scale.set(1,.7,1.5),qa.position.set(-.1,-.12,.12),D.add(qa);const Ya=new R(zs,Lu);return Ya.scale.set(1,.7,1.5),Ya.position.set(.1,-.1,.12),D.add(Ya),D.scale.set(.25,.25,.25),D.position.set(.2,.5,-0),D},b=function(){let D=0;function j(){requestAnimationFrame(j),D+=.4,ce.position.y=.45+Math.sin(D)*.5,E.render(et,y)}j()},M=function(D){let j=1,k=0;function vt(){requestAnimationFrame(vt),D.position.x+=.01*j,D.position.x>=.5?(j=-1,D.rotation.y=Math.PI):D.position.x<=0&&(j=1,D.rotation.y=0),k+=1,D.position.y=-.2+Math.sin(k)*.01,D.position.z=.5,E.render(et,y)}vt()},S=function(){const D=new $t,j=new ei(.7,.8,.7),k=new Jt({color:9127187}),vt=new R(j,k);vt.position.set(0,.4,0),D.add(vt);const Ct=new ro(.55,.25,4),Ft=new Jt({color:16777215}),Ut=new R(Ct,Ft);Ut.position.set(0,.9,0),Ut.rotation.y=Math.PI/4,D.add(Ut);const Yt=new ei(.25,.35,.05),qt=new Jt({color:6636321}),Gt=new R(Yt,qt);Gt.position.set(0,.2,.36),D.add(Gt);const ee=new ei(.15,.15,.05),ue=new Jt({color:8900331}),de=new R(ee,ue);de.position.set(-.2,.5,.38),D.add(de);const Ce=new R(ee,ue);Ce.position.set(.2,.5,.38),D.add(Ce);const te=new ei(.2,.4,.2),Wt=new Jt({color:8421504}),xe=new R(te,Wt);xe.position.set(0,.95,0),D.add(xe);const At=new _o(.07,.04,32,100),Ee=new Jt({color:2263842}),Re=new R(At,Ee);return Re.position.set(0,.45,.38),D.add(Re),D.position.set(.22,-.2,0),D.scale.set(.5,.5,.5),D},O=function(D=1,j={x:0,y:0,z:0}){const k=new $t,vt=new ie(1.2,.9,3,32),Ct=new Jt({color:25153}),Ft=new R(vt,Ct);k.add(Ft);const Ut=new ie(1.3,1.3,.2,32),Yt=new Jt({color:3355443}),qt=new R(Ut,Yt);qt.position.y=1.6,k.add(qt);const Gt=2,ee=new ie(1.1,1.1,Gt,32),ue=new Jt({color:9127187}),de=new R(ee,ue);return de.position.y=0,new Hi().load("/3d-bear-arts/assets/starbucks-logo.png",function(te){te.repeat.set(4,1),te.offset.set(.25,0),te.wrapS=We,te.wrapT=We;const Wt=new Jt({color:9127187,map:te,transparent:!0}),xe=new ie(1.1,1.05,1.5,32),At=new R(xe,Wt);At.position.y=-.5,k.add(At)}),k.scale.set(D,D,D),k.position.set(j.x,j.y,j.z),k},I=function(){requestAnimationFrame(I);const D=ve.attributes.position.array;for(let j=1;j<D.length;j+=3)D[j]-=.02,D[j]<-10&&(D[j]=10);ve.attributes.position.needsUpdate=!0,E.render(et,y)},P=function(){requestAnimationFrame(P);const D=Ei.attributes.position.array;for(let j=1;j<D.length;j+=3)D[j]-=.02,D[j]<-Mn&&(D[j]=Mn);Ei.attributes.position.needsUpdate=!0,E.render(et,y)},F=function(){requestAnimationFrame(F),i.value&&(G.rotation.y+=.03),s.value&&(G.rotation.y-=.03),o.value&&(G.rotation.x-=.03),r.value&&(G.rotation.x+=.03),a.value&&(a.value.rotation.y+=.7),v.uniforms.u_time.value+=.5,pe.rotation.y+=.45,Le.rotation.y+=.05,E.render(et,y)};const et=new ri,y=new Fe(75,window.innerWidth/window.innerHeight,.1,1e3),E=new oi({antialias:!0,alpha:!0});E.setSize(window.innerWidth,window.innerHeight),e.value.appendChild(E.domElement);const G=new $t,W=new $t;et.add(W);const Q=new Xi(16777215,2);et.add(Q);const at=new Wi(16777215,4);at.position.set(5,5,5),et.add(at);const X=new Vi(16777215,5,50);X.position.set(0,2,4),et.add(X);const nt=new Hi,$=nt.load("/3d-bear-arts/assets/house.jpg");$.wrapS=$.wrapT=We,$.repeat.set(1,1),nt.load("/3d-bear-arts/assets/houseenv_texture_5.jpg");const gt=new Nt({color:16777215,metalness:.3,roughness:.05,transparent:!0,opacity:.5,transmission:1,ior:1.33,thickness:.01,depthWrite:!0,envMapIntensity:2,clearcoat:1,clearcoatRoughness:.1,side:ge});new Nt({color:16777215,metalness:.3,map:$,roughness:.05,transparent:!0,opacity:.5,transmission:.7,ior:1.33,thickness:.4,depthWrite:!0,envMapIntensity:2,clearcoat:1,clearcoatRoughness:.1,side:ge});const mt=new Nt({color:16777215,metalness:.3,roughness:.05,transparent:!0,opacity:.6,transmission:.8,ior:1.33,thickness:.7,depthWrite:!0,envMapIntensity:2,clearcoat:1,clearcoatRoughness:.1,side:ge}),Mt=new d1().load(["/3d-bear-arts/assets/house_env_texture_1.jpg","/3d-bear-arts/assets/house_env_texture_4.jpg","/3d-bear-arts/assets/house_env_texture_6.jpg","/3d-bear-arts/assets/house_env_texture_2.jpg","/3d-bear-arts/assets/house_env_texture_5.jpg","/3d-bear-arts/assets/house_env_texture_3.jpg"]);et.environment=Mt;const It=new Nt({color:16777215,metalness:.05,roughness:.2,transparent:!0,opacity:.5,transmission:.2,ior:1.5,depthWrite:!0,envMapIntensity:1,side:ge}),zt=new Nt({color:16777215,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9}),rt=new Tt(1,32,32,0,Math.PI),ft=new R(rt,gt),xt=new R(rt,mt);ft.scale.set(.85,.85,.8),xt.scale.set(.85,.85,.8),ft.position.y=-.2,xt.position.y=-.2,ft.rotation.y=Math.PI/2,xt.rotation.y=Math.PI*1.5;const B=new Te(1,32),lt=new R(B,It);lt.scale.set(.85,.85,.8),lt.position.set(0,-.2,0),lt.rotation.y=Math.PI/2;const ot=new $t;ot.add(ft),ot.add(xt),ot.add(lt),G.add(ot);const ht=new Tt(.6,32,32,0,Math.PI),wt=new R(ht,mt);wt.scale.set(1,.95,.95),wt.position.set(0,1,0),wt.rotation.y=Math.PI*1.5;const it=new R(ht,gt);it.scale.set(1,.95,.95),it.position.set(0,1,0),it.rotation.y=Math.PI/2;const g=new Te(.6,32),T=new R(g,It);T.position.set(0,1,0),T.rotation.y=Math.PI/2,T.scale.set(1,.95,.95);const L=new $t;L.add(wt),L.add(it),L.add(T),G.add(L);const N=new Tt(.6,32,32,0,Math.PI*2,0,Math.PI/2),U=new Nt({color:16777215,metalness:.1,roughness:.9,clearcoat:.5,clearcoatRoughness:.7,transparent:!1,opacity:.85}),Y=new R(N,U);Y.position.set(0,-.2,0),Y.rotation.x=Math.PI,Y.scale.set(1.25,1.25,1.25),ot.add(Y);const Z=new Nt({color:16777215,metalness:.1,roughness:.9,clearcoat:.6,clearcoatRoughness:.8,side:ge,transparent:!1,opacity:.8}),w=new R(B,Z);w.scale.set(.7,.7,.7),w.position.set(0,-.3,0),w.rotation.x=Math.PI/2,w.renderOrder=1,ot.add(w),G.add(ot);const v=new Ln({transparent:!0,uniforms:{u_time:{value:0}},vertexShader:`
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
            `}),C=new R(B,v);C.position.set(0,-.2,0),C.scale.set(.7,.7,.7),C.rotation.x=-Math.PI/2,C.renderOrder=2,ot.add(C);const q=new Tt(.25,32,32),H=new R(q,mt);H.position.set(-.45,1.35,-.1),G.add(H);const V=new R(q,gt);V.position.set(.45,1.35,-.1),G.add(V);const ut=new Tt(.25,32,32,Math.PI/2,Math.PI),ct=new R(ut,mt);ct.scale.set(1.1,.6,.8),ct.position.set(0,.84,.5),ct.rotation.y=Math.PI;const pt=new Tt(.25,32,32,Math.PI/2,Math.PI),Rt=new R(pt,gt);Rt.scale.set(1.1,.6,.8),Rt.position.set(0,.84,.5),Rt.rotation.y=0;const dt=new Te(.25,32),yt=new R(dt,It);yt.scale.set(.8,.6,.8),yt.position.set(0,.84,.5),yt.rotation.y=Math.PI/2;const Pt=new $t;Pt.add(ct),Pt.add(Rt),Pt.add(yt),G.add(Pt);const Lt=new Tt(.35,32,32),bt=new R(Lt,mt);bt.scale.set(.75,1.25,.65),bt.position.set(-.7,-.15,.2),G.add(bt);const Vt=new R(Lt,gt);Vt.scale.set(.75,1.25,.65),Vt.position.set(.7,-.15,.2),G.add(Vt);const Dt=new ie(.2,.22,.6,32),kt=new R(Dt,mt);kt.position.set(-.4,-1.05,0),G.add(kt);const z=new R(Dt,gt);z.position.set(.4,-1.05,0),G.add(z);const _t=new Tt(.3,32,32),st=new R(_t,mt);st.scale.set(1,.72,1.5),st.position.set(-.4,-1.45,.17),G.add(st);const tt=new R(_t,gt);tt.scale.set(1,.72,1.5),tt.position.set(.4,-1.45,.17),G.add(tt);const St=new Tt(.44,32,32),Et=new R(St,mt);Et.position.set(-.15,-.45,-.4),G.add(Et);const Ht=new R(St,zt);Ht.position.set(.15,-.45,-.4),G.add(Ht);const jt=new Tt(.18,32,32),Qt=new R(jt,mt);Qt.position.set(0,-.35,-.8),G.add(Qt),new qi().load("https://threejs.org/examples/fonts/helvetiker_bold.typeface.json",function(D){const j=new He("X",{font:D,size:.2,depth:.05}),k=new R(j,zt);k.position.set(-.3,.99,.53),k.rotation.x=se.degToRad(-5),k.rotation.y=se.degToRad(-15),G.add(k);const vt=new He("O",{font:D,size:.2,depth:.05}),Ct=new R(vt,zt);Ct.position.set(.14,.99,.53),Ct.rotation.y=se.degToRad(12),Ct.rotation.x=se.degToRad(-5),G.add(Ct)});const ne=x();G.add(ne),m();const ce=p();G.add(ce);const pe=p();pe.position.set(-.2,-.1,.5),G.add(pe),b(),a.value=p(),G.add(a.value),M(a.value);const Ae=S();G.add(Ae);const fe=S();fe.position.set(-.2,-.2,0),fe.scale.set(.35,.35,.35),G.add(fe);const Le=O(.1,{x:0,y:0,z:1});G.add(Le);const _e=O(.7,{x:0,y:0,z:1});et.add(_e);const ze=1e3,ve=new vn,qe=[];for(let D=0;D<ze;D++){const j=(Math.random()-.5)*20,k=Math.random()*20,vt=(Math.random()-.5)*20;qe.push(j,k,vt)}ve.setAttribute("position",new Be(qe,3));const Ye=new Hc({color:16777215,size:.1,transparent:!0,opacity:.8}),Wn=new Ol(ve,Ye);G.add(Wn),I();const Yi=2e3,Dn=[],Mn=.6;for(let D=0;D<Yi;D++){const j=(Math.random()-.5)*Mn*2,k=(Math.random()-.5)*Mn*2,vt=(Math.random()-.5)*Mn*2;Math.sqrt(j*j+k*k+vt*vt)<Mn&&Dn.push(j,k,vt)}const Ei=new vn;Ei.setAttribute("position",new Be(Dn,3)),new Hc({color:16777215,size:.05,transparent:!0,opacity:.9}),new Ol(Ei,U).position.set(0,-.2,0),new Ol(Ei,Z).position.set(0,.8,0),P(),G.scale.set(1.4,1.4,1.4),et.add(G),G.position.set(t.bodyPosition.x,t.bodyPosition.y,t.bodyPosition.z),y.position.set(t.bodyPosition.x,1,t.cameraPosition),y.lookAt(t.bodyPosition.x,0,0),y.position.z=4,G.rotation.x=.1,F(),ke(()=>t.bodyPosition,D=>{G.position.set(D.x,D.y,D.z)}),ke(()=>t.cameraPosition,D=>{y.position.set(t.bodyPosition.x,1,D),y.lookAt(t.bodyPosition.x,0,0)}),window.addEventListener("resize",()=>{y.aspect=window.innerWidth/window.innerHeight,y.updateProjectionMatrix(),E.setSize(window.innerWidth,window.innerHeight)})}});function h(){s.value=!0}function u(){i.value=!0}function d(){o.value=!0}function f(){r.value=!0}function _(){s.value=!1,i.value=!1,o.value=!1,r.value=!1}for(let x=0;x<Q1;x++){const m=document.createElement("div");m.classList.add("confetti"),m.style.left=`${Math.random()*100}vw`,m.style.animationDuration=`${Math.random()*3+4}s`,m.style.animationDelay=`${Math.random()*5}s`,document.body.appendChild(m)}for(let x=0;x<tE;x++){const m=document.createElement("div");m.classList.add("light"),document.body.appendChild(m)}return(x,m)=>(yi(),Mi(gn,null,[Xt("div",{ref_key:"threeCanvas",ref:e,class:kn(n.background?"no-bg":"three-canvas")},null,2),Xt("div",Z1,[Xt("button",{class:"pixel-btn up",onMousedown:d,onMouseup:_},"UP",32),Xt("div",J1,[Xt("button",{class:"pixel-btn left",onMousedown:h,onMouseup:_},"LEFT",32),Xt("button",{class:"pixel-btn right",onMousedown:u,onMouseup:_},"RIGHT",32)]),Xt("button",{class:"pixel-btn down",onMousedown:f,onMouseup:_},"DOWN",32)])],64))}}),nE=wi(eE,[["__scopeId","data-v-c5a90a59"]]),iE=[{path:"/3d-bear-arts/leather",name:"Leather",component:w1},{path:"/3d-bear-arts/pop-art",name:"Pop",component:E1},{path:"/3d-bear-arts/pop-art-bear-3",name:"PopArtBear 3",component:R1},{path:"/3d-bear-arts/machine",name:"MetalMachineBear",component:L1},{path:"/3d-bear-arts/water",name:"Water",component:k1},{path:"/3d-bear-arts/ghost-bear",name:"GhostBear",component:q1},{path:"/3d-bear-arts/white-ghost-bear",name:"GhostBallonBear",component:K1},{path:"/3d-bear-arts/",name:"Santa",component:nE},{path:"/3d-bear-arts/half",name:"HalfBear",component:y1}],sE=f_({history:Vg(),routes:iE}),Op=ag(dg);Op.use(sE);Op.mount("#app");
