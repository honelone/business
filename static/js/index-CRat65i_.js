import{d as B,n as o,h as g,s as w,l as A,q as M,f as l,a as n,F as b,i as k,v as F,x as L,o as i,y as x,z as $,A as T,t as Z}from"./index-CGIzB1Ky.js";import{g as u}from"./color-CWPKctqu.js";import{_ as q}from"./plugin-vueexport-helper-DlAUqK2U.js";const D={class:"clock-container"},H={class:"clock"},I={class:"calibration"},V={class:"calibration-line"},X={class:"calibration-number"},E={class:"hour"},N={class:"minute"},P={class:"second"},U=B({__name:"index",setup(j){L(s=>({"36d03cf0":C.value,"2e33faec":R.value,"88282de6":c.hour,"78c672fd":c.minute,fa73dd46:c.second}));const r=o(350),C=g(()=>`${r.value}px`),R=g(()=>`${r.value-60}px`),d=o(6),f=o(),m=o(),v=o(),c=w({hour:"#fff",minute:"#fff",second:"#fff"}),S=({hh:s,mm:a,ss:e})=>{c.hour=u((s-90)/1200*360),c.minute=u((a-90)/360*360),c.second=u((e-90)/360*360)},_=o(),h=()=>{const s=new Date,a=s.getHours()*30,e=s.getMinutes()*d.value,t=s.getSeconds()*d.value;F(()=>{S({hh:a,mm:e,ss:t})}),f.value.style.transform=`rotateZ(${a+e/12}deg)`,m.value.style.transform=`rotateZ(${e}deg)`,v.value.style.transform=`rotateZ(${t}deg)`,_.value=window.requestAnimationFrame(h)},p=o([]),y=o([]),z=()=>{for(let s=0;s<60;s++)if(p.value.push({rotate:s*6,class:s%5===0?"item-hour":"item-min",translateX:s%5===0?(r.value-30)/2:(r.value-20)/2}),s%5===0){const a=s/5+1,e=(a-3)/6*Math.PI,t=(r.value-60)/2;y.value.push({number:a,left:t+t*Math.cos(e),top:t+t*Math.sin(e)})}};return A(()=>{z(),h()}),M(()=>{window.cancelAnimationFrame(_.value)}),(s,a)=>(i(),l("div",D,[n("div",H,[n("div",I,[n("div",V,[(i(!0),l(b,null,k(p.value,(e,t)=>(i(),l("div",{class:x(["line-item",e.class]),key:t,style:$({transform:`rotate(${e.rotate}deg) translate(${e.translateX}px,-50%)`,background:T(u)(t/60*360)})},null,6))),128))]),n("div",X,[(i(!0),l(b,null,k(y.value,(e,t)=>(i(),l("div",{class:x(["number-item",e.class]),key:t,style:$({left:`${e.left}px`,top:`${e.top}px`})},Z(e.number),7))),128))])]),n("div",E,[n("div",{class:"hr",ref_key:"hrRef",ref:f},null,512)]),n("div",N,[n("div",{class:"min",ref_key:"minRef",ref:m},null,512)]),n("div",P,[n("div",{class:"sec",ref_key:"secRef",ref:v},null,512)])])]))}}),O=q(U,[["__scopeId","data-v-b326228d"]]);export{O as default};
