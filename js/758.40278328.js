(self["webpackChunkmoriz"]=self["webpackChunkmoriz"]||[]).push([[758],{6154:function(e,t,n){var o,a,i;(function(n,l){a=[],o=l,i="function"===typeof o?o.apply(t,a):o,void 0===i||(e.exports=i)})(0,(function(){"use strict";function t(e,t){return"undefined"==typeof t?t={autoBom:!1}:"object"!=typeof t&&(console.warn("Deprecated: Expected third argument to be a object"),t={autoBom:!t}),t.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type)?new Blob(["\ufeff",e],{type:e.type}):e}function o(e,t,n){var o=new XMLHttpRequest;o.open("GET",e),o.responseType="blob",o.onload=function(){s(o.response,t,n)},o.onerror=function(){console.error("could not download file")},o.send()}function a(e){var t=new XMLHttpRequest;t.open("HEAD",e,!1);try{t.send()}catch(e){}return 200<=t.status&&299>=t.status}function i(e){try{e.dispatchEvent(new MouseEvent("click"))}catch(o){var t=document.createEvent("MouseEvents");t.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),e.dispatchEvent(t)}}var l="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof n.g&&n.g.global===n.g?n.g:void 0,r=l.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),s=l.saveAs||("object"!=typeof window||window!==l?function(){}:"download"in HTMLAnchorElement.prototype&&!r?function(e,t,n){var r=l.URL||l.webkitURL,s=document.createElement("a");t=t||e.name||"download",s.download=t,s.rel="noopener","string"==typeof e?(s.href=e,s.origin===location.origin?i(s):a(s.href)?o(e,t,n):i(s,s.target="_blank")):(s.href=r.createObjectURL(e),setTimeout((function(){r.revokeObjectURL(s.href)}),4e4),setTimeout((function(){i(s)}),0))}:"msSaveOrOpenBlob"in navigator?function(e,n,l){if(n=n||e.name||"download","string"!=typeof e)navigator.msSaveOrOpenBlob(t(e,l),n);else if(a(e))o(e,n,l);else{var r=document.createElement("a");r.href=e,r.target="_blank",setTimeout((function(){i(r)}))}}:function(e,t,n,a){if(a=a||open("","_blank"),a&&(a.document.title=a.document.body.innerText="downloading..."),"string"==typeof e)return o(e,t,n);var i="application/octet-stream"===e.type,s=/constructor/i.test(l.HTMLElement)||l.safari,c=/CriOS\/[\d]+/.test(navigator.userAgent);if((c||i&&s||r)&&"undefined"!=typeof FileReader){var u=new FileReader;u.onloadend=function(){var e=u.result;e=c?e:e.replace(/^data:[^;]*;/,"data:attachment/file;"),a?a.location.href=e:location=e,a=null},u.readAsDataURL(e)}else{var d=l.URL||l.webkitURL,p=d.createObjectURL(e);a?a.location=p:location.href=p,a=null,setTimeout((function(){d.revokeObjectURL(p)}),4e4)}});l.saveAs=s.saveAs=s,e.exports=s}))},6758:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return b}});var o=n(3396);const a={style:{height:"20px"}},i={style:{height:"60px"}},l=(0,o._)("div",{style:{height:"20px"}},null,-1),r=(0,o._)("i",{class:"el-icon-upload"},null,-1),s=(0,o._)("div",{class:"el-upload__text"},[(0,o.Uk)("将文件拖到此处，或"),(0,o._)("em",null,"点击上传")],-1),c=(0,o._)("div",{class:"el-upload__tip"}," 只能上传 .json 文件 ",-1),u={style:{height:"60px"}},d=(0,o._)("div",{style:{height:"20px"}},null,-1);function p(e,t,n,p,f,m){const g=(0,o.up)("el-divider"),v=(0,o.up)("el-button"),w=(0,o.up)("el-upload"),h=(0,o.up)("el-input");return(0,o.wg)(),(0,o.iD)("div",null,[(0,o._)("div",a,[(0,o.Wm)(g,null,{default:(0,o.w5)((()=>[(0,o.Uk)("导出配置文件")])),_:1})]),(0,o.Wm)(v,{type:"primary",icon:"el-icon-download",onClick:p.exportConfig},{default:(0,o.w5)((()=>[(0,o.Uk)("导出")])),_:1},8,["onClick"]),(0,o._)("div",i,[l,(0,o.Wm)(g,null,{default:(0,o.w5)((()=>[(0,o.Uk)("导入配置文件")])),_:1})]),(0,o.Wm)(w,{action:"",class:"upload-demo",drag:"",accept:".json","http-request":p.onUpload,limit:1,"file-list":p.myFileList,"on-change":p.loadJsonFromFile,multiple:""},{tip:(0,o.w5)((()=>[c])),default:(0,o.w5)((()=>[r,s])),_:1},8,["http-request","file-list","on-change"]),(0,o._)("div",u,[d,(0,o.Wm)(g,null,{default:(0,o.w5)((()=>[(0,o.Uk)("配置信息")])),_:1})]),(0,o.Wm)(h,{type:"textarea",autosize:{minRows:2},modelValue:p.configJson,"onUpdate:modelValue":t[0]||(t[0]=e=>p.configJson=e),style:{width:"70%"}},null,8,["modelValue"])])}var f=n(6154),m=n(65),g=n(4870),v=n(7178),w={name:"ImportExportSetting",setup(){const e=(0,m.oR)();let t=(0,g.iH)([]);const n=(0,o.Fl)((()=>JSON.stringify({searchEngines:e.state.searchEngines,bannerImg:e.state.bannerImg,links:e.state.links,numOfRow:e.state.numOfRow,enterAnimation:e.state.enterAnimation}))),a=()=>{let e=new Blob([n.value],{type:"text/plain;charset=utf-8"});(0,f.saveAs)(e,"homepage_config.json")},i=()=>{let n=new FileReader;n.readAsText(t.value[0].raw),n.onload=n=>{let o=n.target.result;try{let t=JSON.parse(o);e.dispatch("checkAndChangeConfig",t),window.localStorage.setItem("config",t),v.z8.success("配置应用完成")}catch(a){v.z8.error("上传的配置文件有错误，请使用手动配置")}t.value=[]}},l=(e,n)=>{t.value=n};return{configJson:n,exportConfig:a,onUpload:i,myFileList:t,loadJsonFromFile:l}}},h=n(89);const y=(0,h.Z)(w,[["render",p]]);var b=y}}]);
//# sourceMappingURL=758.40278328.js.map