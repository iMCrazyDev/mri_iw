(function(e){function t(t){for(var n,o,l=t[0],r=t[1],c=t[2],v=0,p=[];v<l.length;v++)o=l[v],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&p.push(a[o][0]),a[o]=0;for(n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n]);u&&u(t);while(p.length)p.shift()();return s.push.apply(s,c||[]),i()}function i(){for(var e,t=0;t<s.length;t++){for(var i=s[t],n=!0,l=1;l<i.length;l++){var r=i[l];0!==a[r]&&(n=!1)}n&&(s.splice(t--,1),e=o(o.s=i[0]))}return e}var n={},a={app:0},s=[];function o(t){if(n[t])return n[t].exports;var i=n[t]={i:t,l:!1,exports:{}};return e[t].call(i.exports,i,i.exports,o),i.l=!0,i.exports}o.m=e,o.c=n,o.d=function(e,t,i){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(o.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(i,n,function(t){return e[t]}.bind(null,n));return i},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],r=l.push.bind(l);l.push=t,l=l.slice();for(var c=0;c<l.length;c++)t(l[c]);var u=r;s.push([0,"chunk-vendors"]),i()})({0:function(e,t,i){e.exports=i("56d7")},"56d7":function(e,t,i){"use strict";i.r(t);i("e260"),i("e6cf"),i("cca6"),i("a79d");var n=i("2b0e"),a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-app",[i("v-app-bar",{attrs:{app:"",color:"",elevation:"0"}},[i("div",{staticClass:"d-flex align-center"},[i("h2",[e._v("NiiVue")])]),i("v-spacer"),i("v-btn",{attrs:{text:"",disabled:""},on:{click:function(t){e.showSettings=!e.showSettings}}},[i("v-icon",[e._v("mdi-cog")])],1),i("v-btn",{attrs:{href:"https://github.com/niivue",target:"_blank",text:""}},[i("v-icon",[e._v("mdi-github")])],1)],1),i("v-main",[i("v-container",{attrs:{fluid:""}},[i("v-row",{attrs:{"no-gutters":"","align-content":"space-between",justify:"space-between"}},[i("image-list",{attrs:{images:e.volumeList},on:{visibilityChange:e.visibilityChange}}),i("v-col",{staticClass:"my-2",attrs:{cols:"12",sm:"12",md:"9",lg:"9"}},[i("v-row",{staticClass:"mb-2"},[i("v-col",{attrs:{cols:"6"}},[i("v-select",{attrs:{items:e.sliceTypes,"item-text":"text","item-value":"value",solo:"",dense:"","hide-details":""},on:{change:e.setSliceType},model:{value:e.sliceType,callback:function(t){e.sliceType=t},expression:"sliceType"}})],1)],1),i("div",{staticStyle:{width:"100%"}},[i("canvas",{attrs:{id:"gl",height:"480",width:"640"}})])],1)],1)],1),i("settings",{attrs:{show:e.showSettings},on:{"close-settings":function(t){e.showSettings=!e.showSettings}}})],1)],1)},s=[],o=(i("b680"),function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-col",{staticClass:"mx-5 my-2"},e._l(e.images,(function(t,n){return i("image-item",{key:n,attrs:{image:t,index:n},on:{visibilityChange:e.visibilityChange}})})),1)}),l=[],r=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-row",{attrs:{align:"center",justify:"center"}},[i("v-btn",{attrs:{icon:""},on:{click:e.toggleVisible}},[i("v-icon",[e._v(e._s(e.visibleIcon))])],1),i("v-btn",{staticClass:"text-none",attrs:{text:"",small:""}},[e._v(" "+e._s(e.displayName)+" ")]),i("v-spacer")],1)},c=[],u=(i("a9e3"),i("ac1f"),i("1276"),i("fb6a"),{name:"imageItem",props:{image:Object,index:Number},data:function(){return{}},computed:{displayName:function(){var e=this.image.url.split("/");console.log(e);var t=e.slice(-1)[0];return console.log(t),t},visibleIcon:function(){return this.image.visible?"mdi-eye":"mdi-eye-off"}},methods:{toggleVisible:function(){this.image.visible=!this.image.visible,this.$emit("visibilityChange",this.index,this.image.visible)}}}),v=u,p=i("2877"),m=i("6544"),g=i.n(m),f=i("8336"),h=i("132d"),d=i("0fd9"),b=i("2fa4"),y=Object(p["a"])(v,r,c,!1,null,"28bfdc70",null),w=y.exports;g()(y,{VBtn:f["a"],VIcon:h["a"],VRow:d["a"],VSpacer:b["a"]});var x={name:"imageList",components:{imageItem:w},props:{images:Array},data:function(){return{}},methods:{visibilityChange:function(e,t){this.$emit("visibilityChange",e,t)}}},_=x,S=i("62ad"),V=Object(p["a"])(_,o,l,!1,null,"bd14a566",null),C=V.exports;g()(V,{VCol:S["a"]});var T=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-row",{attrs:{justify:"center"}},[i("v-dialog",{attrs:{"overlay-opacity":"0","overlay-color":"blue",fullscreen:"","hide-overlay":"",transition:"dialog-top-transition"},on:{keydown:function(t){return e.$emit("close-settings")}},model:{value:e.show,callback:function(t){e.show=t},expression:"show"}},[i("v-card")],1)],1)},j=[],O={name:"settings",props:{show:Boolean}},P=O,M=i("b0af"),k=i("169a"),A=Object(p["a"])(P,T,j,!1,null,null,null),$=A.exports;g()(A,{VCard:M["a"],VDialog:k["a"],VRow:d["a"]});var I=i("c7dc"),L=new I["Niivue"],N={name:"App",components:{imageList:C,settings:$},data:function(){return{showSettings:!1,settings:{mmPrecision:2},nv:L,mm:[0,0,0],vox:[0,0,0],sliceTypes:[{text:"2D Multiplanar (A + C + S)",value:L.sliceTypeMultiplanar},{text:"3D",value:L.sliceTypeRender},{text:"Axial",value:L.sliceTypeAxial},{text:"Coronal",value:L.sliceTypeCoronal},{text:"Sagittal",value:L.sliceTypeSagittal}],sliceType:{text:"2D Multiplanar (A + C + S)",value:L.sliceTypeMultiplanar},volumeList:[{url:"./mni152.nii.gz",volume:{hdr:null,img:null},colorMap:"gray",opacity:100,visible:!0},{url:"./hippo.nii.gz",volume:{hdr:null,img:null},colorMap:"winter",opacity:100,visible:!0}]}},watch:{"nv.scene.crosshairPos":{handler:function(e,t){console.log(e),console.log(t);var i=this.nv.frac2mm(e);this.mm=[+i[0].toFixed(this.settings.mmPrecision),+i[1].toFixed(this.settings.mmPrecision),+i[2].toFixed(this.settings.mmPrecision)],this.vox=this.nv.frac2vox(e)}}},methods:{visibilityChange:function(e,t){console.log(e),console.log(t),console.log("blah"),this.nv.setOpacity(e,t)},setSliceType:function(e){console.log(e),this.nv.setSliceType(e)}},mounted:function(){this.nv.attachTo("gl"),this.nv.loadVolumes(this.volumeList),this.nv.set}},B=N,D=i("7496"),E=i("40dc"),R=i("a523"),F=i("f6c4"),z=i("b974"),J=Object(p["a"])(B,a,s,!1,null,"ee67bf9e",null),q=J.exports;g()(J,{VApp:D["a"],VAppBar:E["a"],VBtn:f["a"],VCol:S["a"],VContainer:R["a"],VIcon:h["a"],VMain:F["a"],VRow:d["a"],VSelect:z["a"],VSpacer:b["a"]});var G=i("f309");n["a"].use(G["a"]);var H=new G["a"]({});n["a"].config.productionTip=!1,new n["a"]({vuetify:H,render:function(e){return e(q)}}).$mount("#app")}});
//# sourceMappingURL=app.13e77379.js.map