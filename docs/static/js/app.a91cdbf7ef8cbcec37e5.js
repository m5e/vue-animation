webpackJsonp([1],{"9M+g":function(t,e){},FJVQ:function(t,e){},Jl8r:function(t,e){},Jmt5:function(t,e){},Ku2B:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("7+uW"),i={name:"App",data:function(){return{navTitle:"15 Pazzle"}},mounted:function(){window.onload=setTimeout(this.refreshscreen,1e3),this.refreshNavTitle()},methods:{refreshscreen:function(){this.$el.getElementsByClassName("loading").item(0).classList.add("loaded")},refreshNavTitle:function(){var t=this.$route.path;"/"===t?this.navTitle="15 Pazzle":"/anime"===t&&(this.navTitle="Animation")}}},s={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("b-navbar",{staticClass:"navigation"},[n("b-navbar-brand",{attrs:{href:"#"}},[n("b-button",{directives:[{name:"b-toggle",rawName:"v-b-toggle.sidebar-left",modifiers:{"sidebar-left":!0}}],staticClass:"navigation-button"},[n("svg",{staticClass:"bi bi-justify",attrs:{width:"1.5em",height:"1.5em",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{"fill-rule":"evenodd",d:"M2 12.5a.5.5 0 01.5-.5h11a.5.5 0 010 1h-11a.5.5 0 01-.5-.5zm0-3a.5.5 0 01.5-.5h11a.5.5 0 010 1h-11a.5.5 0 01-.5-.5zm0-3a.5.5 0 01.5-.5h11a.5.5 0 010 1h-11a.5.5 0 01-.5-.5zm0-3a.5.5 0 01.5-.5h11a.5.5 0 010 1h-11a.5.5 0 01-.5-.5z","clip-rule":"evenodd"}})])])],1),t._v(" "),n("h3",[t._v(t._s(t.navTitle))])],1),t._v(" "),n("b-sidebar",{attrs:{id:"sidebar-left",title:"Menu",left:""}},[n("p",{on:{click:t.refreshNavTitle}},[n("router-link",{staticClass:"menu-content",attrs:{to:"/"},on:{click:function(e){return t.hide()}}},[n("svg",{staticClass:"bi bi-grid-3x3",attrs:{width:"1em",height:"1em",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{"fill-rule":"evenodd",d:"M0 1.5A1.5 1.5 0 011.5 0h13A1.5 1.5 0 0116 1.5v13a1.5 1.5 0 01-1.5 1.5h-13A1.5 1.5 0 010 14.5v-13zM1.5 1a.5.5 0 00-.5.5V5h4V1H1.5zM5 6H1v4h4V6zm1 4V6h4v4H6zm-1 1H1v3.5a.5.5 0 00.5.5H5v-4zm1 0h4v4H6v-4zm5 0v4h3.5a.5.5 0 00.5-.5V11h-4zm0-1h4V6h-4v4zm0-5h4V1.5a.5.5 0 00-.5-.5H11v4zm-1 0H6V1h4v4z","clip-rule":"evenodd"}})]),t._v("\n        15 Pazzle\n      ")])],1),t._v(" "),n("p",{on:{click:t.refreshNavTitle}},[n("router-link",{staticClass:"menu-content",attrs:{to:"/anime"},on:{click:function(e){return t.hide()}}},[n("svg",{staticClass:"bi bi-card-image",attrs:{width:"1em",height:"1em",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{"fill-rule":"evenodd",d:"M14.5 3h-13a.5.5 0 00-.5.5v9a.5.5 0 00.5.5h13a.5.5 0 00.5-.5v-9a.5.5 0 00-.5-.5zm-13-1A1.5 1.5 0 000 3.5v9A1.5 1.5 0 001.5 14h13a1.5 1.5 0 001.5-1.5v-9A1.5 1.5 0 0014.5 2h-13z","clip-rule":"evenodd"}}),t._v(" "),n("path",{attrs:{d:"M10.648 7.646a.5.5 0 01.577-.093L15.002 9.5V13h-14v-1l2.646-2.354a.5.5 0 01.63-.062l2.66 1.773 3.71-3.71z"}}),t._v(" "),n("path",{attrs:{"fill-rule":"evenodd",d:"M4.502 7a1.5 1.5 0 100-3 1.5 1.5 0 000 3z","clip-rule":"evenodd"}})]),t._v("\n        Animation\n      ")])],1)]),t._v(" "),t._m(0),t._v(" "),n("div",{staticClass:"content"},[n("router-view")],1)],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"loading"},[e("div",{staticClass:"loader"})])}]};var l=n("VU/8")(i,s,!1,function(t){n("FJVQ")},null,null).exports,o=n("/ocq"),r=n("fZjL"),c=n.n(r),v={name:"MainPage",data:function(){return{panel:[],finished:!1}},mounted:function(){for(var t=1;t<16;t++)this.panel.push(t);this.panel.push("★")},methods:{start:function(){this.finished=!1;var t=this.$el.getElementsByClassName("board")[0];for(t.classList.contains("complete")?t.classList.remove("complete"):t.classList.contains("not-started")&&t.classList.remove("not-started");this.panel.sort(function(){return Math.random()-Math.random()}),!this.checkSolvable(this.panel););},checkSolvable:function(t){var e=[],n=null;t.forEach(function(t,a){"★"===t?n=a:e.push(t)});var a=1;0<=n&&n<=3||(4<=n&&n<=7?a=2:8<=n&&n<=11?a=3:12<=n&&n<=15&&(a=4));for(var i=function(){var t=e[0];e.shift(),e.forEach(function(e){e<t&&a++})};0!==e.length;)i();return a%2==0},movePanel:function(t){var e=this,n={top:{index:null,val:null},buttom:{index:null,val:null},left:{index:null,val:null},right:{index:null,val:null}},a=t.target.parentNode.id;n.top={index:a-4,val:this.panel[a-4]},n.buttom={index:Number(a)+4,val:this.panel[Number(a)+4]},n.left={index:a-1,val:this.panel[a-1]},n.right={index:Number(a)+1,val:this.panel[Number(a)+1]};var i=this.panel[a];(c()(n).forEach(function(t){"★"===n[t].val&&(e.panel.splice(a,1,"★"),e.panel.splice([n[t].index],1,i))}),this.checkFinish())&&(this.$el.getElementsByClassName("board")[0].classList.add("complete"),this.finished=!0)},checkFinish:function(){return this.panel.toString()===["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","★"].toString()}}},d={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"pazzle"},[n("div",[n("b-modal",{attrs:{centered:"",title:"Cleared!!!!"},model:{value:t.finished,callback:function(e){t.finished=e},expression:"finished"}},[n("p",{staticClass:"my-4"},[t._v("Thank you for playing!!")])])],1),t._v(" "),n("table",{staticClass:"board not-started"},[n("tr",[n("td",{attrs:{id:"0"}},[n("button",{on:{click:t.movePanel}},[t._v(t._s(this.panel[0]))])]),t._v(" "),n("td",{attrs:{id:"1"}},[n("button",{on:{click:t.movePanel}},[t._v(t._s(this.panel[1]))])]),t._v(" "),n("td",{attrs:{id:"2"}},[n("button",{on:{click:t.movePanel}},[t._v(t._s(this.panel[2]))])]),t._v(" "),n("td",{attrs:{id:"3"}},[n("button",{on:{click:t.movePanel}},[t._v(t._s(this.panel[3]))])])]),t._v(" "),n("tr",[n("td",{attrs:{id:"4"}},[n("button",{on:{click:t.movePanel}},[t._v(t._s(this.panel[4]))])]),t._v(" "),n("td",{attrs:{id:"5"}},[n("button",{on:{click:t.movePanel}},[t._v(t._s(this.panel[5]))])]),t._v(" "),n("td",{attrs:{id:"6"}},[n("button",{on:{click:t.movePanel}},[t._v(t._s(this.panel[6]))])]),t._v(" "),n("td",{attrs:{id:"7"}},[n("button",{on:{click:t.movePanel}},[t._v(t._s(this.panel[7]))])])]),t._v(" "),n("tr",[n("td",{attrs:{id:"8"}},[n("button",{on:{click:t.movePanel}},[t._v(t._s(this.panel[8]))])]),t._v(" "),n("td",{attrs:{id:"9"}},[n("button",{on:{click:t.movePanel}},[t._v(t._s(this.panel[9]))])]),t._v(" "),n("td",{attrs:{id:"10"}},[n("button",{on:{click:t.movePanel}},[t._v(t._s(this.panel[10]))])]),t._v(" "),n("td",{attrs:{id:"11"}},[n("button",{on:{click:t.movePanel}},[t._v(t._s(this.panel[11]))])])]),t._v(" "),n("tr",[n("td",{attrs:{id:"12"}},[n("button",{on:{click:t.movePanel}},[t._v(t._s(this.panel[12]))])]),t._v(" "),n("td",{attrs:{id:"13"}},[n("button",{on:{click:t.movePanel}},[t._v(t._s(this.panel[13]))])]),t._v(" "),n("td",{attrs:{id:"14"}},[n("button",{on:{click:t.movePanel}},[t._v(t._s(this.panel[14]))])]),t._v(" "),n("td",{attrs:{id:"15"}},[n("button",{on:{click:t.movePanel}},[t._v(t._s(this.panel[15]))])])])]),t._v(" "),n("button",{staticClass:"start-button",on:{click:t.start}},[t._v("START")])])},staticRenderFns:[]};var h=n("VU/8")(v,d,!1,function(t){n("Jl8r")},"data-v-d5f89356",null).exports,u={name:"Anime",data:function(){return{processing:!1,isShowScaleUp:!1}},mounted:function(){},methods:{click:function(){this.processing||(this.processing=!0,this.isShowScaleUp=!this.isShowScaleUp,setTimeout(this.processing=!1,2e3))}}},m={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"anime"},[e("div",{staticClass:"icon-avatar",class:{"scale-up":this.isShowScaleUp}}),this._v(" "),e("div",{staticClass:"icon-div",on:{click:this.click}},[e("svg",{staticClass:"bi bi-person",attrs:{width:"2em",height:"2em",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{"fill-rule":"evenodd",d:"M13 14s1 0 1-1-1-4-6-4-6 3-6 4 1 1 1 1h10zm-9.995-.944v-.002.002zM3.022 13h9.956a.274.274 0 00.014-.002l.008-.002c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664a1.05 1.05 0 00.022.004zm9.974.056v-.002.002zM8 7a2 2 0 100-4 2 2 0 000 4zm3-2a3 3 0 11-6 0 3 3 0 016 0z","clip-rule":"evenodd"}})])])])},staticRenderFns:[]};var p=n("VU/8")(u,m,!1,function(t){n("Ku2B")},"data-v-886a88ba",null).exports;a.default.use(o.a);var f=new o.a({routes:[{path:"/",name:"MainPage",component:h},{path:"/anime",name:"Anime",component:p}]}),_=n("Tqaz");n("Jmt5"),n("9M+g");a.default.use(_.a,_.b),a.default.config.productionTip=!1,new a.default({el:"#app",router:f,components:{App:l},template:"<App/>"})}},["NHnr"]);
//# sourceMappingURL=app.a91cdbf7ef8cbcec37e5.js.map