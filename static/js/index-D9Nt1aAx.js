import{d as T,h as a,k as C,n as p,f as S,a as g,F as D,i as R,z as w,o as L,r as V,l as $,D as z,G as I,e as j,w as F,t as G}from"./index-CGIzB1Ky.js";import{_ as P}from"./plugin-vueexport-helper-DlAUqK2U.js";const U=T({__name:"VirtualScroller",props:{list:{default:()=>[]},height:{default:300},itemHeight:{default:32},preloadNum:{default:5}},emits:["arriveBottom"],setup(m,{emit:f}){const t=m,c=f,d=a(()=>t.list.length*t.itemHeight),h=a(()=>!d.value||!t.height||!v.value?!1:v.value+t.height>=d.value);C(h,()=>{h.value&&c("arriveBottom")});const e=a(()=>({width:"100%",height:`${t.height}px`,"overflow-y":"auto"})),N=a(()=>{let n=l.value*t.itemHeight,r=d.value-n;return r<0&&(r=d.value,n=0),{width:"100%",height:`${r}px`,marginTop:`${n}px`}}),v=p(0),b=n=>{v.value=n.target.scrollTop},y=a(()=>t.preloadNum&&!isNaN(t.preloadNum)&&t.preloadNum>0?t.preloadNum:5),H=a(()=>t.height?Math.ceil(t.height/t.itemHeight):0),o=a(()=>Math.floor(v.value/t.itemHeight)),l=a(()=>{const n=o.value-y.value;return n<0?0:n}),s=a(()=>{const n=o.value+H.value+y.value;return n>t.list.length?t.list.length:n}),i=a(()=>t.list.slice(l.value,s.value));return(n,r)=>(L(),S("div",{ref:"outerScrollerRef",style:w(e.value),onScroll:b},[g("div",{ref:"innerScrollerRef",style:w(N.value)},[(L(!0),S(D,null,R(i.value,(_,u)=>(L(),S("div",{key:_.name,style:w({height:`${t.itemHeight}px`})},[V(n.$slots,"default",{index:u+l.value,item:_})],4))),128))],4)],36))}});function q(m){const t=p((()=>{const e=document.createElement("div");return e.style.position="absolute",e.style.top="0",e.style.left="0",e.style.width="100%",e.style.height="100%",e.style.display="flex",e.style.alignItems="center",e.style.justifyContent="center",e.style.zIndex="9999",e.style.backgroundColor="rgba(0, 0, 0, 0.5)",e.innerHTML="Loading...",e.style.visibility="hidden",e})());C(m,()=>{if(m){const e=m.value;e==null||e.appendChild(t.value)}else{const e=document.body;e==null||e.appendChild(t.value)}});const c=p(!1);return{loading:c,startLoading:()=>{t.value.style.visibility="visible",c.value=!0},endLoading:()=>{t.value.style.visibility="hidden",c.value=!1}}}const E={class:"virtual-list-container"},J={class:"content-header"},K=T({__name:"index",setup(m){const f=p(),t=a(()=>{var o;return((o=f.value)==null?void 0:o.clientHeight)-48}),{startLoading:c,endLoading:d}=q(f),h=p(""),e=p([]),N=a(()=>e.value.filter(o=>o.name.includes(h.value)));$(()=>{e.value=y()});const v=()=>{e.value=[...e.value,...y(50)]},b=()=>{c(),setTimeout(()=>{v(),d()},1e3*2)},y=(o=200)=>{const l=[],s=o;for(let i=0;i<s;i++)l.push({name:H(10)});return l};function H(o){const l="abacdefghjklmnopqrstuvwxyzABCDEFGHJKLMNOPQRSTUVWXYZ0123456789",i=l.length-1;let n="";o=o||15;for(let r=0,_;r<o;r++)_=function(u,x){return u(0,i,x,u)}(function(u,x,B,M){let k=Math.floor(Math.random()*(x-u+1)+u);const A=l.length-10;return B==0&&k>=A&&(k=M(u,x,B,M)),k},r),n+=l[_];return n}return(o,l)=>(L(),S("div",E,[g("div",{ref_key:"contentRef",ref:f,class:"content"},[g("div",J,[z(g("input",{"onUpdate:modelValue":l[0]||(l[0]=s=>h.value=s)},null,512),[[I,h.value]]),g("button",{onClick:v},"+Add")]),j(U,{list:N.value,itemHeight:28,height:t.value,onArriveBottom:b},{default:F(({item:s,index:i})=>[g("div",null,G(i+"-"+s.name),1)]),_:1},8,["list","height"])],512)]))}}),W=P(K,[["__scopeId","data-v-78b7a1bd"]]);export{W as default};
