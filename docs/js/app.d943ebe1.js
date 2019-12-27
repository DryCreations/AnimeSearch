(function(t){function e(e){for(var n,s,o=e[0],c=e[1],l=e[2],h=0,u=[];h<o.length;h++)s=o[h],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&u.push(r[s][0]),r[s]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);d&&d(e);while(u.length)u.shift()();return i.push.apply(i,l||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],n=!0,o=1;o<a.length;o++){var c=a[o];0!==r[c]&&(n=!1)}n&&(i.splice(e--,1),t=s(s.s=a[0]))}return t}var n={},r={app:0},i=[];function s(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=t,s.c=n,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(a,n,function(e){return t[e]}.bind(null,n));return a},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var d=c;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-content",[a("v-container",[a("v-layout",{attrs:{"align-center":"","justify-center":""}},[a("v-flex",{attrs:{xs12:"",sm10:"",md8:""}},[a("v-card",[a("div",{ref:"inputForm"},[a("v-expand-transition",[a("v-img",{directives:[{name:"show",rawName:"v-show",value:t.showImg,expression:"showImg"}],ref:"image",attrs:{src:t.searchImgURL}})],1),a("v-card-text",[a("v-form",[a("v-file-input",{on:{change:t.fileChange},model:{value:t.searchImg,callback:function(e){t.searchImg=e},expression:"searchImg"}}),a("v-btn",{attrs:{disabled:!t.searchImgURL},on:{click:t.searchImage}},[t._v("Search")])],1)],1)],1)]),t._l(t.searchResults,(function(e,n){return[a("v-slide-y-transition",{key:n},[a("v-card",{staticClass:"mt-5"},[a("v-toolbar",{attrs:{dark:""}},[a("v-toolbar-title",[t._v(t._s(e.title_native+": "+e.title_english))])],1),a("v-card-title",[t._v(" "+t._s(isNaN(e.episode)?e.episode:"EP#"+(e.episode||"0"))+" "),a("v-spacer"),t._v(" "+t._s("~"+Math.floor(e.at/60)+"min")+" ")],1),a("v-card-text",[a("p",[t._v(" "+t._s(Math.floor(100*e.similarity)+"% Similarity")+" ")]),a("v-img",{attrs:{src:"https://trace.moe/thumbnail.php?anilist_id="+e.anilist_id+"&file="+encodeURIComponent(e.filename)+"&t="+e.at+"&token="+e.tokenthumb}})],1),a("v-divider"),a("v-expand-transition",[e.show?a("v-card-text",[a("a",{attrs:{href:"https://anilist.co/anime/"+e.anilist_id}},[t._v(" "+t._s(e.anilist_data.title.native+": "+e.anilist_data.title.english)+" ")]),a("p",[t._v(" "+t._s(e.anilist_data.startDate.year+"-"+e.anilist_data.startDate.year+" "+e.anilist_data.status)+" ")]),a("p",[t._v(" "+t._s(e.anilist_data.season+" "+e.anilist_data.seasonYear)+" ")]),a("p",[t._v(t._s(e.anilist_data.episodes+" episodes"))]),a("blockquote",[t._v(" "+t._s(e.anilist_data.description)+" ")])]):t._e()],1),a("v-divider"),a("v-card-actions",{staticClass:"justify-center"},[a("v-btn",{attrs:{icon:""},on:{click:function(t){e.show=!e.show}}},[a("v-icon",[t._v(t._s(e.show?"mdi-chevron-up":"mdi-chevron-down"))])],1)],1)],1)],1)]})),a("div",{directives:[{name:"show",rawName:"v-show",value:t.searching,expression:"searching"}],staticClass:"text-center mt-5"},[a("v-progress-circular",{attrs:{indeterminate:"",color:"primary"}})],1)],2)],1)],1)],1)],1)},i=[],s=(a("b0c0"),a("d3b7"),a("159b"),{name:"App",components:{},data:function(){return{searchImg:null,searchImgURL:"",showImg:!1,searchResults:[],searching:!1}},methods:{fileChange:function(){if(console.log("test"),this.searchImg){this.searchResults=[];var t=new FileReader,e=this;e.showImg=!1,e.searchImgURL="",t.addEventListener("load",(function(){e.searchImgURL=t.result,setTimeout((function(){e.showImg=!0}),500)}),!1),this.searchImg.name&&t.readAsDataURL(this.searchImg)}},onDrop:function(t){var e=t.target.files||t.dataTransfer.files;if(e.length)this.searchImg=e[0],this.fileChange();else{var a=t.dataTransfer.getData("text");if(""!=a){var n=this;this.searchImg=null,this.showImg=!1,this.searchImgURL=a,this.searchResults=[],setTimeout((function(){n.showImg=!0}),100)}}},searchImage:function(){this.searching=!0;var t=document.createElement("img");t.crossOrigin="Anonymous",t.src=this.searchImgURL;var e=this,a=document.createElement("canvas");a.width=t.naturalWidth,a.height=t.naturalHeight;var n=a.getContext("2d");n.drawImage(t,0,0,a.width,a.height);var r=function(t){t.docs.forEach((function(t){var a="\n            query ($id: Int) {\n              Media (id: $id, type: ANIME) {\n                id\n                siteUrl\n                title {\n                  english\n                  native\n                }\n                description\n                season\n                seasonYear\n                startDate {\n                  year\n                  month\n                  day\n                }\n                endDate {\n                  year\n                  month\n                  day\n                }\n                status\n                episodes\n                duration\n              }\n            }\n            ",n={id:t.anilist_id},r="https://graphql.anilist.co",i={method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({query:a,variables:n})};fetch(r,i).then((function(t){return t.json()})).then((function(a){t.anilist_data=a.data.Media,t.show=!1,e.searchResults.push(t),e.searching=!1}))}))};this.searchImg?fetch("https://trace.moe/api/search",{method:"POST",body:JSON.stringify({image:a.toDataURL("image/jpeg",.8)}),headers:{"Content-Type":"application/json"}}).then((function(t){return t.json()})).then(r):fetch("https://trace.moe/api/search?url="+this.searchImgURL).then((function(t){return t.json()})).then(r)}},mounted:function(){var t=this,e=this.$refs.inputForm,a=["drag","dragstart","dragend","dragover","dragenter","dragleave","drop"];a.forEach((function(t){document.body.addEventListener(t,(function(t){t.preventDefault(),t.stopPropagation()}))})),e.addEventListener("drop",(function(e){t.onDrop(e)}))}}),o=s,c=a("2877"),l=a("6544"),d=a.n(l),h=a("7496"),u=a("8336"),p=a("b0af"),f=a("99d9"),v=a("a523"),m=a("a75b"),g=a("ce7e"),_=a("0789"),y=a("23a7"),b=a("0e8f"),w=a("4bd4"),I=a("132d"),x=a("adda"),V=a("a722"),j=a("490a"),T=a("2fa4"),C=a("71d9"),O=a("2a7f"),R=Object(c["a"])(o,r,i,!1,null,null,null),L=R.exports;d()(R,{VApp:h["a"],VBtn:u["a"],VCard:p["a"],VCardActions:f["a"],VCardText:f["b"],VCardTitle:f["c"],VContainer:v["a"],VContent:m["a"],VDivider:g["a"],VExpandTransition:_["a"],VFileInput:y["a"],VFlex:b["a"],VForm:w["a"],VIcon:I["a"],VImg:x["a"],VLayout:V["a"],VProgressCircular:j["a"],VSlideYTransition:_["e"],VSpacer:T["a"],VToolbar:C["a"],VToolbarTitle:O["a"]});var S=a("8c4f");n["a"].use(S["a"]);var P=[],U=new S["a"]({routes:P}),k=U,D=a("2f62");n["a"].use(D["a"]);var E=new D["a"].Store({state:{},mutations:{},actions:{},modules:{}}),M=a("f309");n["a"].use(M["a"]);var A=new M["a"]({});n["a"].config.productionTip=!1,new n["a"]({router:k,store:E,vuetify:A,render:function(t){return t(L)}}).$mount("#app")}});