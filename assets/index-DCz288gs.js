import{d as u,n as m,o as d,f as r,a as t,F as y,i as f,t as s,p as x,b as g,e as b}from"./index-D2QdGVAP.js";import{_ as h}from"./_plugin-vue_export-helper-DlAUqK2U.js";const w=function(c,l=null){const n=document.createElement("iframe"),o=document.body.appendChild(n);n.id="myIframe",n.setAttribute("style","position:absolute;width:0;height:0;top:-500px;left:-500px;");const e=o.contentWindow||o.contentDocument,i=o.contentDocument||(o==null?void 0:o.contentWindow.document),_=document.getElementById(c);if(i.open(),l){const a="<style>"+l+"</style>";i.write(a)}i.write('<style media="print">@page{size:auto A4 landscape;margin:5mm 8mm;}</style>'),i.write("<div>"+_.innerHTML+"</div>"),i.close(),n.contentWindow.focus(),n.onload=function(){try{setTimeout(function(){e.focus();try{e.document.execCommand("print",!1,void 0)||e.print()}catch{e.print()}e.close()},100)}catch(a){console.log("err",a)}setTimeout(function(){document.body.removeChild(n)},100)}},p=c=>(x("data-v-c2819d42"),c=c(),g(),c),v=p(()=>t("caption",null," 表格标题 ",-1)),I=p(()=>t("thead",null,[t("tr",null,[t("th",{rowspan:"2",style:{height:"30px"}},"学号"),t("th",{rowspan:"2",style:{height:"30px"}},"姓名"),t("th",{rowspan:"2",style:{height:"30px"}},"性别"),t("th",{colspan:"4",style:{height:"30px"}},"成绩"),t("th",{rowspan:"2",style:{height:"30px"}},"备注")]),t("tr",null,[t("th",{style:{height:"30px"}},"平时"),t("th",{style:{height:"30px"}},"实训"),t("th",{style:{height:"30px"}},"期末"),t("th",{style:{height:"30px"}},"总成绩")])],-1)),T=p(()=>t("td",null,s("没有备注"),-1)),C=u({__name:"PrintTable",setup(c){const l=m([1,2,3,4,5,6,7,8,9]);return(n,o)=>(d(),r("table",null,[v,I,t("tbody",null,[(d(!0),r(y,null,f(l.value,e=>(d(),r("tr",{key:e},[t("td",null,s(e),1),t("td",null,s(e),1),t("td",null,s(e),1),t("td",null,s(e),1),t("td",null,s(e),1),t("td",null,s(e),1),t("td",null,s(e),1),T]))),128))])]))}}),D=h(C,[["__scopeId","data-v-c2819d42"]]),P={class:"print-container"},k={id:"printTableId"},B=u({__name:"index",setup(c){const l=()=>{w("printTableId","")};return(n,o)=>(d(),r("div",P,[t("div",{class:"header"},[t("button",{onClick:l},"Go To Print")]),t("div",k,[b(D)])]))}}),E=h(B,[["__scopeId","data-v-917c9ff5"]]);export{E as default};
