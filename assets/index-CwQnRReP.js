var C=Object.defineProperty;var O=(l,i,t)=>i in l?C(l,i,{enumerable:!0,configurable:!0,writable:!0,value:t}):l[i]=t;var r=(l,i,t)=>(O(l,typeof i!="symbol"?i+"":i,t),t);import{d as g,n as h,l as N,q as A,k as M,o as w,f as x,v as S,a as k,e as P,g as R}from"./index-D2QdGVAP.js";import{_ as b}from"./_plugin-vue_export-helper-DlAUqK2U.js";const T=.216,c=.05,F="180,184,240",L="226,225,142",_="226,225,224",z=g({__name:"Universe",setup(l){const i=h(),t=h(),n=h(0),d=h(0),f=()=>{var s,e;v=!0,u.value=[],window.cancelAnimationFrame(m.value),n.value=window.innerWidth,d.value=window.innerHeight,(s=i.value)==null||s.setAttribute("width",n.value),(e=i.value)==null||e.setAttribute("height",d.value)};N(()=>{t.value=i.value.getContext("2d"),f(),window.addEventListener("resize",f,!1)}),A(()=>{window.cancelAnimationFrame(m.value),window.removeEventListener("resize",f,!1)});const u=h([]);M(n,()=>{S(()=>{const s=n.value*T;for(let e=0;e<s;e++)u.value[e]=new I,u.value[e].reset();p()})});let v=!0;class I{constructor(){r(this,"x",0);r(this,"y",0);r(this,"r",0);r(this,"dx",0);r(this,"dy",0);r(this,"opacity",0);r(this,"opacityTresh",0);r(this,"do",0);setTimeout(()=>{v=!1},50)}reset(){this.giant=y(3),this.comet=this.giant||v?!1:y(10),this.x=o(0,n.value-10),this.y=o(0,d.value),this.r=o(1.1,2.6),this.dx=o(c,6*c)+(Number(this.comet)+1-1)*c*o(50,120)+c*2,this.dy=-o(c,6*c)-(Number(this.comet)+1-1)*c*o(50,120),this.fadingOut=void 0,this.fadingIn=!0,this.opacity=0,this.opacityTresh=o(.2,1-(Number(this.comet)+1-1)*.4),this.do=o(5e-4,.002)+(Number(this.comet)+1-1)*.001}fadeIn(){this.fadingIn&&(this.fadingIn=!(this.opacity>this.opacityTresh),this.opacity+=this.do)}fadeOut(){this.fadingOut&&(this.fadingOut=!(this.opacity<0),this.opacity-=this.do/2,(this.x>n.value-n.value/4||this.y<0)&&(this.fadingOut=!1,this.reset()))}draw(){var e;if(t.value.beginPath(),this.giant)t.value.fillStyle="rgba("+F+","+this.opacity+")",t.value.arc(this.x,this.y,2,0,2*Math.PI,!1);else if(this.comet){t.value.fillStyle="rgba("+_+","+this.opacity+")",t.value.arc(this.x,this.y,1.5,0,2*Math.PI,!1);for(let a=0;a<30;a++)t.value.fillStyle="rgba("+_+","+(this.opacity-this.opacity/20*a)+")",(e=t.value)==null||e.rect(this.x-this.dx/4*a,this.y-this.dy/4*a-2,2,2),t.value.fill()}else t.value.fillStyle="rgba("+L+","+this.opacity+")",t.value.rect(this.x,this.y,this.r,this.r);t.value.closePath(),t.value.fill()}move(){this.x+=this.dx,this.y+=this.dy,this.fadingOut===!1&&this.reset(),(this.x>n.value||this.y<0)&&(this.fadingOut=!0)}}function y(s){return Math.floor(Math.random()*1e3)+1<s*10}function o(s,e){return Math.random()*(e-s)+s}const m=h(),p=()=>{t.value.clearRect(0,0,n.value,d.value);const s=u.value.length;for(let e=0;e<s;e++){const a=u.value[e];a.move(),a.fadeIn(),a.fadeOut(),a.draw()}m.value=window.requestAnimationFrame(p)};return(s,e)=>(w(),x("canvas",{id:"universe",ref_key:"universeRef",ref:i},null,512))}}),B=b(z,[["__scopeId","data-v-014f8bef"]]),E={class:"space-container"},U={class:"content"},V=g({__name:"index",setup(l){return(i,t)=>(w(),x("div",E,[k("div",U,[P(B),R("",!0)])]))}}),W=b(V,[["__scopeId","data-v-1240db60"]]);export{W as default};
