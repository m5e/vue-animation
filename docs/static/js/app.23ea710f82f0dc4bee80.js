webpackJsonp([1],{"9M+g":function(t,n){},ElpO:function(t,n){},IVpO:function(t,n){},Jmt5:function(t,n){},NHnr:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=e("7+uW"),s={name:"App",data:function(){return{navTitle:"15 Pazzle"}},mounted:function(){window.onload=setTimeout(this.refreshscreen,1e3),this.refreshNavTitle()},methods:{refreshscreen:function(){this.$el.getElementsByClassName("loading").item(0).classList.add("loaded")},refreshNavTitle:function(){var t=this.$route.path;"/"===t?this.navTitle="15 Pazzle":"/anime"===t&&(this.navTitle="Animation")}}},i={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"app"}},[e("b-navbar",{staticClass:"navigation"},[e("b-navbar-brand",{attrs:{href:"#"}},[e("b-button",{directives:[{name:"b-toggle",rawName:"v-b-toggle.sidebar-left",modifiers:{"sidebar-left":!0}}],staticClass:"navigation-button"},[e("svg",{staticClass:"bi bi-justify",attrs:{width:"1.5em",height:"1.5em",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{"fill-rule":"evenodd",d:"M2 12.5a.5.5 0 01.5-.5h11a.5.5 0 010 1h-11a.5.5 0 01-.5-.5zm0-3a.5.5 0 01.5-.5h11a.5.5 0 010 1h-11a.5.5 0 01-.5-.5zm0-3a.5.5 0 01.5-.5h11a.5.5 0 010 1h-11a.5.5 0 01-.5-.5zm0-3a.5.5 0 01.5-.5h11a.5.5 0 010 1h-11a.5.5 0 01-.5-.5z","clip-rule":"evenodd"}})])])],1),t._v(" "),e("h3",[t._v(t._s(t.navTitle))])],1),t._v(" "),e("b-sidebar",{attrs:{id:"sidebar-left",title:"Menu",left:""}},[e("p",{on:{click:t.refreshNavTitle}},[e("router-link",{staticClass:"menu-content",attrs:{to:"/"},on:{click:function(n){return t.hide()}}},[e("svg",{staticClass:"bi bi-grid-3x3",attrs:{width:"1em",height:"1em",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{"fill-rule":"evenodd",d:"M0 1.5A1.5 1.5 0 011.5 0h13A1.5 1.5 0 0116 1.5v13a1.5 1.5 0 01-1.5 1.5h-13A1.5 1.5 0 010 14.5v-13zM1.5 1a.5.5 0 00-.5.5V5h4V1H1.5zM5 6H1v4h4V6zm1 4V6h4v4H6zm-1 1H1v3.5a.5.5 0 00.5.5H5v-4zm1 0h4v4H6v-4zm5 0v4h3.5a.5.5 0 00.5-.5V11h-4zm0-1h4V6h-4v4zm0-5h4V1.5a.5.5 0 00-.5-.5H11v4zm-1 0H6V1h4v4z","clip-rule":"evenodd"}})]),t._v("\n        15 Pazzle\n      ")])],1),t._v(" "),e("p",{on:{click:t.refreshNavTitle}},[e("router-link",{staticClass:"menu-content",attrs:{to:"/anime"},on:{click:function(n){return t.hide()}}},[e("svg",{staticClass:"bi bi-card-image",attrs:{width:"1em",height:"1em",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{"fill-rule":"evenodd",d:"M14.5 3h-13a.5.5 0 00-.5.5v9a.5.5 0 00.5.5h13a.5.5 0 00.5-.5v-9a.5.5 0 00-.5-.5zm-13-1A1.5 1.5 0 000 3.5v9A1.5 1.5 0 001.5 14h13a1.5 1.5 0 001.5-1.5v-9A1.5 1.5 0 0014.5 2h-13z","clip-rule":"evenodd"}}),t._v(" "),e("path",{attrs:{d:"M10.648 7.646a.5.5 0 01.577-.093L15.002 9.5V13h-14v-1l2.646-2.354a.5.5 0 01.63-.062l2.66 1.773 3.71-3.71z"}}),t._v(" "),e("path",{attrs:{"fill-rule":"evenodd",d:"M4.502 7a1.5 1.5 0 100-3 1.5 1.5 0 000 3z","clip-rule":"evenodd"}})]),t._v("\n        Animation\n      ")])],1)]),t._v(" "),t._m(0),t._v(" "),e("div",{staticClass:"content"},[e("router-view")],1)],1)},staticRenderFns:[function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"loading"},[n("div",{staticClass:"loader"})])}]};var l=e("VU/8")(s,i,!1,function(t){e("IVpO")},null,null).exports,o=e("/ocq"),r=e("fZjL"),c=e.n(r),v={name:"MainPage",data:function(){return{panel:[],finished:!1,headerBgcolor:"dark",headerTextColor:"light"}},mounted:function(){for(var t=1;t<16;t++)this.panel.push(t);this.panel.push("★")},methods:{start:function(){this.finished=!1;var t=this.$el.getElementsByClassName("board")[0];for(t.classList.contains("complete")?t.classList.remove("complete"):t.classList.contains("not-started")&&t.classList.remove("not-started");this.panel.sort(function(){return Math.random()-Math.random()}),!this.checkSolvable(this.panel););},checkSolvable:function(t){var n=[],e=null;t.forEach(function(t,a){"★"===t?e=a:n.push(t)});var a=1;0<=e&&e<=3||(4<=e&&e<=7?a=2:8<=e&&e<=11?a=3:12<=e&&e<=15&&(a=4));for(var s=function(){var t=n[0];n.shift(),n.forEach(function(n){n<t&&a++})};0!==n.length;)s();return a%2==0},movePanel:function(t){var n=this,e={top:{index:null,val:null},buttom:{index:null,val:null},left:{index:null,val:null},right:{index:null,val:null}},a=t.target.parentNode.id;e.top={index:a-4,val:this.panel[a-4]},e.buttom={index:Number(a)+4,val:this.panel[Number(a)+4]},e.left={index:a-1,val:this.panel[a-1]},e.right={index:Number(a)+1,val:this.panel[Number(a)+1]};var s=this.panel[a];(c()(e).forEach(function(t){"★"===e[t].val&&(n.panel.splice(a,1,"★"),n.panel.splice([e[t].index],1,s))}),this.checkFinish())&&(this.$el.getElementsByClassName("board")[0].classList.add("complete"),this.finished=!0)},checkFinish:function(){return this.panel.toString()===["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","★"].toString()}}},d={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"pazzle"},[e("table",{staticClass:"board not-started"},[e("tr",[e("td",{attrs:{id:"0"}},[e("button",{staticClass:"panel-button",on:{click:t.movePanel}},[t._v("\n          "+t._s(this.panel[0])+"\n        ")])]),t._v(" "),e("td",{attrs:{id:"1"}},[e("button",{staticClass:"panel-button",on:{click:t.movePanel}},[t._v("\n          "+t._s(this.panel[1])+"\n        ")])]),t._v(" "),e("td",{attrs:{id:"2"}},[e("button",{staticClass:"panel-button",on:{click:t.movePanel}},[t._v("\n          "+t._s(this.panel[2])+"\n        ")])]),t._v(" "),e("td",{attrs:{id:"3"}},[e("button",{staticClass:"panel-button",on:{click:t.movePanel}},[t._v("\n          "+t._s(this.panel[3])+"\n        ")])])]),t._v(" "),e("tr",[e("td",{attrs:{id:"4"}},[e("button",{staticClass:"panel-button",on:{click:t.movePanel}},[t._v("\n          "+t._s(this.panel[4])+"\n        ")])]),t._v(" "),e("td",{attrs:{id:"5"}},[e("button",{staticClass:"panel-button",on:{click:t.movePanel}},[t._v("\n          "+t._s(this.panel[5])+"\n        ")])]),t._v(" "),e("td",{attrs:{id:"6"}},[e("button",{staticClass:"panel-button",on:{click:t.movePanel}},[t._v("\n          "+t._s(this.panel[6])+"\n        ")])]),t._v(" "),e("td",{attrs:{id:"7"}},[e("button",{staticClass:"panel-button",on:{click:t.movePanel}},[t._v("\n          "+t._s(this.panel[7])+"\n        ")])])]),t._v(" "),e("tr",[e("td",{attrs:{id:"8"}},[e("button",{staticClass:"panel-button",on:{click:t.movePanel}},[t._v("\n          "+t._s(this.panel[8])+"\n        ")])]),t._v(" "),e("td",{attrs:{id:"9"}},[e("button",{staticClass:"panel-button",on:{click:t.movePanel}},[t._v("\n          "+t._s(this.panel[9])+"\n        ")])]),t._v(" "),e("td",{attrs:{id:"10"}},[e("button",{staticClass:"panel-button",on:{click:t.movePanel}},[t._v("\n          "+t._s(this.panel[10])+"\n        ")])]),t._v(" "),e("td",{attrs:{id:"11"}},[e("button",{staticClass:"panel-button",on:{click:t.movePanel}},[t._v("\n          "+t._s(this.panel[11])+"\n        ")])])]),t._v(" "),e("tr",[e("td",{attrs:{id:"12"}},[e("button",{staticClass:"panel-button",on:{click:t.movePanel}},[t._v("\n          "+t._s(this.panel[12])+"\n        ")])]),t._v(" "),e("td",{attrs:{id:"13"}},[e("button",{staticClass:"panel-button",on:{click:t.movePanel}},[t._v("\n          "+t._s(this.panel[13])+"\n        ")])]),t._v(" "),e("td",{attrs:{id:"14"}},[e("button",{staticClass:"panel-button",on:{click:t.movePanel}},[t._v("\n          "+t._s(this.panel[14])+"\n        ")])]),t._v(" "),e("td",{attrs:{id:"15"}},[e("button",{staticClass:"panel-button",on:{click:t.movePanel}},[t._v("\n          "+t._s(this.panel[15])+"\n        ")])])])]),t._v(" "),e("div",[e("b-modal",{attrs:{title:"Cleared!!!!","header-bg-variant":t.headerBgcolor,"header-text-variant":t.headerTextColor,centered:"","ok-only":""},scopedSlots:t._u([{key:"modal-footer",fn:function(n){var a=n.ok;return[e("b-button",{staticClass:"modal-ok-button",attrs:{size:"xs",variant:"success"},on:{click:function(t){return a()}}},[t._v("\n          CLOSE\n        ")])]}}]),model:{value:t.finished,callback:function(n){t.finished=n},expression:"finished"}},[e("p",{staticClass:"my-4"},[t._v("Thank you for playing!!")])])],1),t._v(" "),e("button",{staticClass:"panel-button start-button",on:{click:t.start}},[t._v("START")])])},staticRenderFns:[]};var u=e("VU/8")(v,d,!1,function(t){e("ElpO")},"data-v-4835797e",null).exports,h=e("//Fk"),p=e.n(h),m={name:"Anime",data:function(){return{processing:!1,isShowScaleUp:!1,isShowContent:!1}},mounted:function(){},methods:{clickIcon:function(){var t=this;this.processing||(this.processing=!0,this.isShowScaleUp=!this.isShowScaleUp,this.showContent().then(function(n){return t.processing=!1}))},showContent:function(){var t=this;return new p.a(function(n){setTimeout(t.isShowContent=!t.isShowContent,3e3),n()})}}},f={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"anime"},[e("div",{staticClass:"icon-avatar",class:{"scale-up":t.isShowScaleUp}}),t._v(" "),e("div",{staticClass:"icon-div",on:{click:t.clickIcon}},[e("svg",{staticClass:"bi bi-person",attrs:{width:"2em",height:"2em",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{"fill-rule":"evenodd",d:"M13 14s1 0 1-1-1-4-6-4-6 3-6 4 1 1 1 1h10zm-9.995-.944v-.002.002zM3.022 13h9.956a.274.274 0 00.014-.002l.008-.002c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664a1.05 1.05 0 00.022.004zm9.974.056v-.002.002zM8 7a2 2 0 100-4 2 2 0 000 4zm3-2a3 3 0 11-6 0 3 3 0 016 0z","clip-rule":"evenodd"}})])]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.isShowContent,expression:"isShowContent"}],staticClass:"anime-content"},[e("p",[t._v("m5e")]),t._v(" "),e("p",[t._v("Vue.js")]),t._v(" "),e("p",[t._v("BootstrapVue")])])])},staticRenderFns:[]};var _=e("VU/8")(m,f,!1,function(t){e("dnC6")},"data-v-d07d2352",null).exports;a.default.use(o.a);var b=new o.a({routes:[{path:"/",name:"MainPage",component:u},{path:"/anime",name:"Anime",component:_}]}),C=e("Tqaz");e("Jmt5"),e("9M+g");a.default.use(C.a,C.b),a.default.config.productionTip=!1,new a.default({el:"#app",router:b,components:{App:l},template:"<App/>"})},dnC6:function(t,n){}},["NHnr"]);
//# sourceMappingURL=app.23ea710f82f0dc4bee80.js.map