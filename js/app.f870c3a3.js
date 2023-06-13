(function(){"use strict";var e={7820:function(e,t,n){var o=n(9242),r=n(3396),i=n(7139);const a={id:"“app”"},c=["disabled"],u=(0,r.uE)('<option value="google">Google</option><option value="bing">Bing</option><option value="fsou">Fsou</option><option value="G">G镜像</option><option value="B">B</option><option value="GitHub">gitHub</option><option value="Wiki">wiki</option><option value="Greasyfork">greasyfork</option>',8),s=[u],l={class:"links"},h=(0,r._)("h2",null,"Links:",-1),p=["href"];function m(e,t,n,u,m,g){const f=(0,r.up)("router-view"),d=(0,r.up)("mirror-sites");return(0,r.wg)(),(0,r.iD)("div",a,[(0,r._)("header",null,[(0,r._)("div",null,[(0,r._)("form",{onSubmit:t[3]||(t[3]=(0,o.iM)(((...e)=>u.search&&u.search(...e)),["prevent"]))},[(0,r.wy)((0,r._)("input",{type:"text","onUpdate:modelValue":t[0]||(t[0]=e=>u.searchTerm=e)},null,512),[[o.nr,u.searchTerm]]),(0,r._)("button",{disabled:!u.searchTerm},"Search",8,c),(0,r.wy)((0,r._)("select",{id:"search-engine","onUpdate:modelValue":t[1]||(t[1]=e=>u.searchEngine=e),onChange:t[2]||(t[2]=(...e)=>u.saveSearchEngine&&u.saveSearchEngine(...e))},s,544),[[o.bM,u.searchEngine]])],32)])]),(0,r._)("main",null,[(0,r.Wm)(f),(0,r._)("div",l,[h,(0,r._)("ul",null,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(u.links,((e,t)=>((0,r.wg)(),(0,r.iD)("li",{key:e.id},[(0,r._)("a",{href:e.url,target:"_blank"},(0,i.zw)(e.name),9,p)])))),128))])])]),(0,r.Wm)(d)])}n(7658);var g=n(4870);const f={id:"mirr"},d=(0,r._)("h3",null,"镜像站列表：",-1);function v(e,t,n,o,a,c){return(0,r.wg)(),(0,r.iD)("div",f,[d,(0,r._)("ul",null,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(a.mirrorSites,((e,t)=>((0,r.wg)(),(0,r.iD)("li",{key:t},[(0,r.Uk)((0,i.zw)(e.url)+" | ",1),(0,r._)("span",{class:(0,i.C_)({success:"connected"===e.status,failed:"failed"===e.status})},(0,i.zw)("connected"===e.status?"连接成功":"failed"===e.status?"连接失败":"正在连接"),3),(0,r.Uk)(" | "+(0,i.zw)(e.connectTime>0?`${e.connectTime}ms`:""),1)])))),128))])])}var w={data(){return{mirrorSites:[{url:"https://search.ecnu.cf",status:"connecting",connectTime:0},{url:"https://search.vwo50.me",status:"connecting",connectTime:0},{url:"https://search.ahau.cf",status:"connecting",connectTime:0},{url:"https://g.damfu.com",status:"connecting",connectTime:0},{url:"https://googlehnzyc.azurewebsites.net",status:"connecting",connectTime:0},{url:"https://zh-two.iwiki.icu",status:"connecting",connectTime:0}]}},mounted(){const e=this.mirrorSites.map((e=>this.ping(e.url)));Promise.all(e).then((e=>{for(let t=0;t<e.length;t++){const n=this.mirrorSites[t];e[t]?(n.status="connected",n.connectTime=e[t]):n.status="failed"}})).catch((e=>{console.error(`Ping failed: ${e}`)}))},methods:{ping(e){return new Promise(((t,n)=>{const o=(new Date).getTime();fetch(e,{mode:"no-cors"}).then((()=>t((new Date).getTime()-o))).catch((()=>t(!1)))}))}}},b=n(89);const k=(0,b.Z)(w,[["render",v]]);var y=k,_={name:"App",components:{MirrorSites:y},setup(){const e=(0,g.iH)(""),t=(0,g.iH)(localStorage.getItem("searchEngine")||"bing"),n=(0,g.iH)(5),o=(0,r.Fl)((()=>{switch(t.value){case"bing":return"https://www.bing.com/search?q=";case"fsou":return"https://fsoufsou.com/search?q=";default:return"https://www.google.com/search?q=";case"G":return"https://search.vwo50.me/search?q=";case"B":return"https://search.bilibili.com/all?keyword=";case"GitHub":return"https://github.com/search?q=";case"Wiki":return"https://zh.wikipedia.org/w/index.php?search=";case"greasyfork":return"https://greasyfork.org/zh-CN/scripts?q="}})),i=()=>{e.value&&window.open(o.value+e.value,"_blank")},a=()=>{localStorage.setItem("searchEngine",t.value)};(0,r.bv)((()=>{localStorage.setItem("searchEngine",t.value)}));const c=(0,g.iH)(JSON.parse(localStorage.getItem("links"))||[{id:1,name:"GitHub",url:"https://github.com/"},{id:2,name:"Google 谷歌镜像网站",url:"https://c.aalib.net/tool/gglink/"},{id:3,name:"chatgpt",url:"https://ai.seayouth.xyz/ai/chatgpt"},{id:4,name:"miui",url:"https://miuiver.com/"},{id:5,name:"yspan",url:"http://hipye.ysepan.com/"},{id:6,name:"axutongxue",url:"https://axutongxue.com/"},{id:7,name:"excel表格公式",url:"https://formulabot.com/"},{id:7,name:"chatgpt2",url:"https://chat.extkj.cn/"}]),u=(0,g.iH)({name:"",url:""}),s=()=>{c.value.push({id:n.value++,...u.value}),localStorage.setItem("links",JSON.stringify(c.value)),u.value={name:"",url:""}},l=e=>{const{name:t,url:n}=c.value[e];u.value={name:t,url:n},c.value.splice(e,1),localStorage.setItem("links",JSON.stringify(c.value))},h=e=>{c.value.splice(e,1),localStorage.setItem("links",JSON.stringify(c.value))};return{searchTerm:e,searchEngine:t,searchEngineLink:o,search:i,saveSearchEngine:a,links:c,newLink:u,addLink:s,editLink:l,deleteLink:h}}};const S=(0,b.Z)(_,[["render",m]]);var T=S,O=n(678);function x(e,t){return(0,r.wg)(),(0,r.iD)("div")}const E={},H=(0,b.Z)(E,[["render",x]]);var D=H;const z=(0,r._)("h1",null,"About Page",-1),G=(0,r._)("p",null,"Welcome to the about page.",-1),P=[z,G];function j(e,t){return(0,r.wg)(),(0,r.iD)("div",null,P)}const C={},I=(0,b.Z)(C,[["render",j]]);var q=I;const L=(0,r._)("h1",null,"Contact Page",-1),W=(0,r._)("p",null,"Welcome to the contact page.",-1),N=[L,W];function Z(e,t){return(0,r.wg)(),(0,r.iD)("div",null,N)}const B={},J=(0,b.Z)(B,[["render",Z]]);var M=J;const U=[{path:"/",name:"Home",component:D},{path:"/about",name:"About",component:q},{path:"/contact",name:"Contact",component:M}],A=(0,O.p7)({history:(0,O.PO)(),routes:U});var F=A;(0,o.ri)(T).use(F).mount("#app")}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={exports:{}};return e[o].call(i.exports,i,i.exports,n),i.exports}n.m=e,function(){var e=[];n.O=function(t,o,r,i){if(!o){var a=1/0;for(l=0;l<e.length;l++){o=e[l][0],r=e[l][1],i=e[l][2];for(var c=!0,u=0;u<o.length;u++)(!1&i||a>=i)&&Object.keys(n.O).every((function(e){return n.O[e](o[u])}))?o.splice(u--,1):(c=!1,i<a&&(a=i));if(c){e.splice(l--,1);var s=r();void 0!==s&&(t=s)}}return t}i=i||0;for(var l=e.length;l>0&&e[l-1][2]>i;l--)e[l]=e[l-1];e[l]=[o,r,i]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,o){var r,i,a=o[0],c=o[1],u=o[2],s=0;if(a.some((function(t){return 0!==e[t]}))){for(r in c)n.o(c,r)&&(n.m[r]=c[r]);if(u)var l=u(n)}for(t&&t(o);s<a.length;s++)i=a[s],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(l)},o=self["webpackChunknetweb"]=self["webpackChunknetweb"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(7820)}));o=n.O(o)})();
//# sourceMappingURL=app.f870c3a3.js.map