webpackJsonp([1],{"9M+g":function(t,a){},BoNr:function(t,a){},Jmt5:function(t,a){},NHnr:function(t,a,n){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var e=n("7+uW"),i={name:"App",data:function(){return{navTitle:"15 Pazzle"}},mounted:function(){window.onload=setTimeout(this.refreshscreen,1e3),this.refreshNavTitle()},methods:{refreshscreen:function(){this.$el.getElementsByClassName("loading").item(0).classList.add("loaded")},refreshNavTitle:function(){var t=this.$route.path;"/"===t?this.navTitle="15 Pazzle":"/animation"===t?this.navTitle="Animation":"/animation2"===t&&(this.navTitle="Animation2")}}},s={render:function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{attrs:{id:"app"}},[n("b-navbar",{staticClass:"navigation"},[n("b-navbar-brand",{attrs:{href:"#"}},[n("b-button",{directives:[{name:"b-toggle",rawName:"v-b-toggle.sidebar-left",modifiers:{"sidebar-left":!0}}],staticClass:"navigation-button"},[n("svg",{staticClass:"bi bi-justify",attrs:{width:"1.5em",height:"1.5em",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{"fill-rule":"evenodd",d:"M2 12.5a.5.5 0 01.5-.5h11a.5.5 0 010 1h-11a.5.5 0 01-.5-.5zm0-3a.5.5 0 01.5-.5h11a.5.5 0 010 1h-11a.5.5 0 01-.5-.5zm0-3a.5.5 0 01.5-.5h11a.5.5 0 010 1h-11a.5.5 0 01-.5-.5zm0-3a.5.5 0 01.5-.5h11a.5.5 0 010 1h-11a.5.5 0 01-.5-.5z","clip-rule":"evenodd"}})])])],1),t._v(" "),n("h3",[t._v(t._s(t.navTitle))])],1),t._v(" "),n("b-sidebar",{attrs:{id:"sidebar-left",title:"Menu",left:""}},[n("p",{on:{click:t.refreshNavTitle}},[n("router-link",{staticClass:"menu-content",attrs:{to:"/"},on:{click:function(a){return t.hide()}}},[n("svg",{staticClass:"bi bi-grid-3x3",attrs:{width:"1em",height:"1em",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{"fill-rule":"evenodd",d:"M0 1.5A1.5 1.5 0 011.5 0h13A1.5 1.5 0 0116 1.5v13a1.5 1.5 0 01-1.5 1.5h-13A1.5 1.5 0 010 14.5v-13zM1.5 1a.5.5 0 00-.5.5V5h4V1H1.5zM5 6H1v4h4V6zm1 4V6h4v4H6zm-1 1H1v3.5a.5.5 0 00.5.5H5v-4zm1 0h4v4H6v-4zm5 0v4h3.5a.5.5 0 00.5-.5V11h-4zm0-1h4V6h-4v4zm0-5h4V1.5a.5.5 0 00-.5-.5H11v4zm-1 0H6V1h4v4z","clip-rule":"evenodd"}})]),t._v("\n        15 Pazzle\n      ")])],1),t._v(" "),n("p",{on:{click:t.refreshNavTitle}},[n("router-link",{staticClass:"menu-content",attrs:{to:"/animation"},on:{click:function(a){return t.hide()}}},[n("svg",{staticClass:"bi bi-card-image",attrs:{width:"1em",height:"1em",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{"fill-rule":"evenodd",d:"M14.5 3h-13a.5.5 0 00-.5.5v9a.5.5 0 00.5.5h13a.5.5 0 00.5-.5v-9a.5.5 0 00-.5-.5zm-13-1A1.5 1.5 0 000 3.5v9A1.5 1.5 0 001.5 14h13a1.5 1.5 0 001.5-1.5v-9A1.5 1.5 0 0014.5 2h-13z","clip-rule":"evenodd"}}),t._v(" "),n("path",{attrs:{d:"M10.648 7.646a.5.5 0 01.577-.093L15.002 9.5V13h-14v-1l2.646-2.354a.5.5 0 01.63-.062l2.66 1.773 3.71-3.71z"}}),t._v(" "),n("path",{attrs:{"fill-rule":"evenodd",d:"M4.502 7a1.5 1.5 0 100-3 1.5 1.5 0 000 3z","clip-rule":"evenodd"}})]),t._v("\n        Animation\n      ")])],1),t._v(" "),n("p",{on:{click:t.refreshNavTitle}},[n("router-link",{staticClass:"menu-content",attrs:{to:"/animation2"},on:{click:function(a){return t.hide()}}},[n("svg",{staticClass:"bi bi-circle-square",attrs:{width:"1em",height:"1em",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{d:"M0 6a6 6 0 1112 0A6 6 0 010 6z"}}),t._v(" "),n("path",{attrs:{d:"M12.93 5h1.57a.5.5 0 01.5.5v9a.5.5 0 01-.5.5h-9a.5.5 0 01-.5-.5v-1.57a6.953 6.953 0 01-1-.22v1.79A1.5 1.5 0 005.5 16h9a1.5 1.5 0 001.5-1.5v-9A1.5 1.5 0 0014.5 4h-1.79c.097.324.17.658.22 1z"}})]),t._v("\n        Animation2\n      ")])],1)]),t._v(" "),t._m(0),t._v(" "),n("div",{staticClass:"content"},[n("router-view")],1)],1)},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"loading"},[a("div",{staticClass:"loader"})])}]};var l=n("VU/8")(i,s,!1,function(t){n("wxch")},null,null).exports,o=n("/ocq"),r=n("fZjL"),c=n.n(r),v={name:"MainPage",data:function(){return{panel:[],finished:!1,headerBgcolor:"dark",headerTextColor:"light"}},mounted:function(){for(var t=1;t<16;t++)this.panel.push(t);this.panel.push("★")},methods:{start:function(){this.finished=!1;var t=this.$el.getElementsByClassName("board")[0];for(t.classList.contains("complete")?t.classList.remove("complete"):t.classList.contains("not-started")&&t.classList.remove("not-started");this.panel.sort(function(){return Math.random()-Math.random()}),!this.checkSolvable(this.panel););},checkSolvable:function(t){var a=[],n=null;t.forEach(function(t,e){"★"===t?n=e:a.push(t)});var e=1;0<=n&&n<=3||(4<=n&&n<=7?e=2:8<=n&&n<=11?e=3:12<=n&&n<=15&&(e=4));for(var i=function(){var t=a[0];a.shift(),a.forEach(function(a){a<t&&e++})};0!==a.length;)i();return e%2==0},movePanel:function(t){var a=this,n={top:{index:null,val:null},buttom:{index:null,val:null},left:{index:null,val:null},right:{index:null,val:null}},e=t.target.parentNode.id;n.top={index:e-4,val:this.panel[e-4]},n.buttom={index:Number(e)+4,val:this.panel[Number(e)+4]},n.left={index:e-1,val:this.panel[e-1]},n.right={index:Number(e)+1,val:this.panel[Number(e)+1]};var i=this.panel[e];(c()(n).forEach(function(t){"★"===n[t].val&&(a.panel.splice(e,1,"★"),a.panel.splice([n[t].index],1,i))}),this.checkFinish())&&(this.$el.getElementsByClassName("board")[0].classList.add("complete"),this.finished=!0)},checkFinish:function(){return this.panel.toString()===["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","★"].toString()}}},d={render:function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"pazzle"},[n("table",{staticClass:"board not-started"},[n("tr",[n("td",{attrs:{id:"0"}},[n("button",{staticClass:"panel-button",on:{click:t.movePanel}},[t._v("\n          "+t._s(this.panel[0])+"\n        ")])]),t._v(" "),n("td",{attrs:{id:"1"}},[n("button",{staticClass:"panel-button",on:{click:t.movePanel}},[t._v("\n          "+t._s(this.panel[1])+"\n        ")])]),t._v(" "),n("td",{attrs:{id:"2"}},[n("button",{staticClass:"panel-button",on:{click:t.movePanel}},[t._v("\n          "+t._s(this.panel[2])+"\n        ")])]),t._v(" "),n("td",{attrs:{id:"3"}},[n("button",{staticClass:"panel-button",on:{click:t.movePanel}},[t._v("\n          "+t._s(this.panel[3])+"\n        ")])])]),t._v(" "),n("tr",[n("td",{attrs:{id:"4"}},[n("button",{staticClass:"panel-button",on:{click:t.movePanel}},[t._v("\n          "+t._s(this.panel[4])+"\n        ")])]),t._v(" "),n("td",{attrs:{id:"5"}},[n("button",{staticClass:"panel-button",on:{click:t.movePanel}},[t._v("\n          "+t._s(this.panel[5])+"\n        ")])]),t._v(" "),n("td",{attrs:{id:"6"}},[n("button",{staticClass:"panel-button",on:{click:t.movePanel}},[t._v("\n          "+t._s(this.panel[6])+"\n        ")])]),t._v(" "),n("td",{attrs:{id:"7"}},[n("button",{staticClass:"panel-button",on:{click:t.movePanel}},[t._v("\n          "+t._s(this.panel[7])+"\n        ")])])]),t._v(" "),n("tr",[n("td",{attrs:{id:"8"}},[n("button",{staticClass:"panel-button",on:{click:t.movePanel}},[t._v("\n          "+t._s(this.panel[8])+"\n        ")])]),t._v(" "),n("td",{attrs:{id:"9"}},[n("button",{staticClass:"panel-button",on:{click:t.movePanel}},[t._v("\n          "+t._s(this.panel[9])+"\n        ")])]),t._v(" "),n("td",{attrs:{id:"10"}},[n("button",{staticClass:"panel-button",on:{click:t.movePanel}},[t._v("\n          "+t._s(this.panel[10])+"\n        ")])]),t._v(" "),n("td",{attrs:{id:"11"}},[n("button",{staticClass:"panel-button",on:{click:t.movePanel}},[t._v("\n          "+t._s(this.panel[11])+"\n        ")])])]),t._v(" "),n("tr",[n("td",{attrs:{id:"12"}},[n("button",{staticClass:"panel-button",on:{click:t.movePanel}},[t._v("\n          "+t._s(this.panel[12])+"\n        ")])]),t._v(" "),n("td",{attrs:{id:"13"}},[n("button",{staticClass:"panel-button",on:{click:t.movePanel}},[t._v("\n          "+t._s(this.panel[13])+"\n        ")])]),t._v(" "),n("td",{attrs:{id:"14"}},[n("button",{staticClass:"panel-button",on:{click:t.movePanel}},[t._v("\n          "+t._s(this.panel[14])+"\n        ")])]),t._v(" "),n("td",{attrs:{id:"15"}},[n("button",{staticClass:"panel-button",on:{click:t.movePanel}},[t._v("\n          "+t._s(this.panel[15])+"\n        ")])])])]),t._v(" "),n("div",[n("b-modal",{attrs:{title:"Cleared!!!!","header-bg-variant":t.headerBgcolor,"header-text-variant":t.headerTextColor,centered:"","ok-only":""},scopedSlots:t._u([{key:"modal-footer",fn:function(a){var e=a.ok;return[n("b-button",{staticClass:"modal-ok-button",attrs:{size:"xs",variant:"success"},on:{click:function(t){return e()}}},[t._v("\n          CLOSE\n        ")])]}}]),model:{value:t.finished,callback:function(a){t.finished=a},expression:"finished"}},[n("p",{staticClass:"my-4"},[t._v("Thank you for playing!!")])])],1),t._v(" "),n("button",{staticClass:"panel-button start-button",on:{click:t.start}},[t._v("START")])])},staticRenderFns:[]};var h=n("VU/8")(v,d,!1,function(t){n("BoNr")},"data-v-693ae9cc",null).exports,u=n("//Fk"),m=n.n(u),p={name:"Animation",data:function(){return{processing:!1,isShowScaleUp:!1,isShowContent:!1}},mounted:function(){},methods:{clickIcon:function(){var t=this;this.processing||(this.processing=!0,this.isShowScaleUp=!this.isShowScaleUp,this.showContent().then(function(a){return t.processing=!1}))},showContent:function(){var t=this;return new m.a(function(a){setTimeout(t.isShowContent=!t.isShowContent,3e3),a()})}}},f={render:function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"animation"},[n("div",{staticClass:"icon-avatar",class:{"scale-up":t.isShowScaleUp}}),t._v(" "),n("div",{staticClass:"icon-div",on:{click:function(a){return a.stopPropagation(),t.clickIcon(a)}}},[n("svg",{staticClass:"bi bi-person-lines-fill",attrs:{width:"2em",height:"2em",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{"fill-rule":"evenodd",d:"M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 100-6 3 3 0 000 6zm7 1.5a.5.5 0 01.5-.5h2a.5.5 0 010 1h-2a.5.5 0 01-.5-.5zm-2-3a.5.5 0 01.5-.5h4a.5.5 0 010 1h-4a.5.5 0 01-.5-.5zm0-3a.5.5 0 01.5-.5h4a.5.5 0 010 1h-4a.5.5 0 01-.5-.5zm2 9a.5.5 0 01.5-.5h2a.5.5 0 010 1h-2a.5.5 0 01-.5-.5z","clip-rule":"evenodd"}})])]),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.isShowContent,expression:"isShowContent"}],staticClass:"anime-scaleup-content"},[n("p",[t._v("このリポジトリはVue.js, BootstrapVueを使用してます。")]),t._v(" "),n("p",[t._v("とりあえずつくってみたいアニメーションを実装してみました。")])]),t._v(" "),t._m(0),t._v(" "),t._m(1)])},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("div",[a("div",{staticClass:"sliding-bg"}),this._v(" "),a("div",{staticClass:"sliding-bg sliding-bg2"}),this._v(" "),a("div",{staticClass:"sliding-bg sliding-bg3"})])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"anime-content"},[a("p",[this._v("Sliding background")])])}]};var _=n("VU/8")(p,f,!1,function(t){n("SBfN")},"data-v-8106d810",null).exports,b={render:function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"animation2"},[n("table",[n("tr",[n("td",{staticClass:"td-1 active"},[n("a",{attrs:{href:"#/animation2"}},[n("svg",{staticClass:"bi bi-bootstrap",attrs:{width:"1em",height:"1em",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{"fill-rule":"evenodd",d:"M12 1H4a3 3 0 00-3 3v8a3 3 0 003 3h8a3 3 0 003-3V4a3 3 0 00-3-3zM4 0a4 4 0 00-4 4v8a4 4 0 004 4h8a4 4 0 004-4V4a4 4 0 00-4-4H4z","clip-rule":"evenodd"}}),t._v(" "),n("path",{attrs:{"fill-rule":"evenodd",d:"M8.537 12H5.062V3.545h3.399c1.587 0 2.543.809 2.543 2.11 0 .884-.65 1.675-1.483 1.816v.1c1.143.117 1.904.931 1.904 2.033 0 1.488-1.084 2.396-2.888 2.396zM6.375 4.658v2.467h1.558c1.16 0 1.764-.428 1.764-1.23 0-.78-.569-1.237-1.541-1.237H6.375zm1.898 6.229H6.375V8.162h1.822c1.236 0 1.887.463 1.887 1.348 0 .896-.627 1.377-1.811 1.377z","clip-rule":"evenodd"}})])])]),t._v(" "),n("td",{staticClass:"td-2"},[n("a",{attrs:{href:"#/animation2"}},[n("svg",{staticClass:"bi bi-card-image",attrs:{width:"1em",height:"1em",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{"fill-rule":"evenodd",d:"M14.5 3h-13a.5.5 0 00-.5.5v9a.5.5 0 00.5.5h13a.5.5 0 00.5-.5v-9a.5.5 0 00-.5-.5zm-13-1A1.5 1.5 0 000 3.5v9A1.5 1.5 0 001.5 14h13a1.5 1.5 0 001.5-1.5v-9A1.5 1.5 0 0014.5 2h-13z","clip-rule":"evenodd"}}),t._v(" "),n("path",{attrs:{d:"M10.648 7.646a.5.5 0 01.577-.093L15.002 9.5V13h-14v-1l2.646-2.354a.5.5 0 01.63-.062l2.66 1.773 3.71-3.71z"}}),t._v(" "),n("path",{attrs:{"fill-rule":"evenodd",d:"M4.502 7a1.5 1.5 0 100-3 1.5 1.5 0 000 3z","clip-rule":"evenodd"}})])])])]),t._v(" "),n("tr",[n("td",{staticClass:"td-3"},[n("a",{attrs:{href:"#/animation2"}},[n("svg",{staticClass:"bi bi-flag",attrs:{width:"1em",height:"1em",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{"fill-rule":"evenodd",d:"M3.5 1a.5.5 0 01.5.5v13a.5.5 0 01-1 0v-13a.5.5 0 01.5-.5z","clip-rule":"evenodd"}}),t._v(" "),n("path",{attrs:{"fill-rule":"evenodd",d:"M3.762 2.558C4.735 1.909 5.348 1.5 6.5 1.5c.653 0 1.139.325 1.495.562l.032.022c.391.26.646.416.973.416.168 0 .356-.042.587-.126a8.89 8.89 0 00.593-.25c.058-.027.117-.053.18-.08.57-.255 1.278-.544 2.14-.544a.5.5 0 01.5.5v6a.5.5 0 01-.5.5c-.638 0-1.18.21-1.734.457l-.159.07c-.22.1-.453.205-.678.287A2.719 2.719 0 019 9.5c-.653 0-1.139-.325-1.495-.562l-.032-.022c-.391-.26-.646-.416-.973-.416-.833 0-1.218.246-2.223.916a.5.5 0 11-.515-.858C4.735 7.909 5.348 7.5 6.5 7.5c.653 0 1.139.325 1.495.562l.032.022c.391.26.646.416.973.416.168 0 .356-.042.587-.126.187-.068.376-.153.593-.25.058-.027.117-.053.18-.08.456-.204 1-.43 1.64-.512V2.543c-.433.074-.83.234-1.234.414l-.159.07c-.22.1-.453.205-.678.287A2.719 2.719 0 019 3.5c-.653 0-1.139-.325-1.495-.562l-.032-.022c-.391-.26-.646-.416-.973-.416-.833 0-1.218.246-2.223.916a.5.5 0 01-.554-.832l.04-.026z","clip-rule":"evenodd"}})])])]),t._v(" "),n("td",{staticClass:"td-4"},[n("a",{attrs:{href:"#/animation2"}},[n("svg",{staticClass:"bi bi-gem",attrs:{width:"1em",height:"1em",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{"fill-rule":"evenodd",d:"M3.1.7a.5.5 0 01.4-.2h9a.5.5 0 01.4.2l2.976 3.974c.149.185.156.45.01.644L8.4 15.3a.5.5 0 01-.8 0L.1 5.3a.5.5 0 010-.6l3-4zm11.386 3.785l-1.806-2.41-.776 2.413 2.582-.003zm-3.633.004l.961-2.989H4.186l.963 2.995 5.704-.006zM5.47 5.495l5.062-.005L8 13.366 5.47 5.495zm-1.371-.999l-.78-2.422-1.818 2.425 2.598-.003zM1.499 5.5l2.92-.003 2.193 6.82L1.5 5.5zm7.889 6.817l2.194-6.828 2.929-.003-5.123 6.831z","clip-rule":"evenodd"}})])])])])]),t._v(" "),t._m(0)])},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"toggle-btn-container"},[a("input",{staticClass:"toggle-btn",attrs:{type:"checkbox"}}),this._v(" "),a("div",{staticClass:"toggle-btn-knobs"}),this._v(" "),a("div",{staticClass:"toggle-btn-layer"})])}]};var g=n("VU/8")({name:"Animation2",data:function(){return{}},mounted:function(){var t=this.$el.querySelectorAll("td");t.forEach(function(a){a.addEventListener("click",function(){t.forEach(function(t){t.classList.remove("active")}),a.classList.add("active")})})},methods:{}},b,!1,function(t){n("lyXm")},"data-v-47ce1d37",null).exports;e.default.use(o.a);var C=new o.a({routes:[{path:"/",name:"MainPage",component:h},{path:"/animation",name:"Animation",component:_},{path:"/animation2",name:"Animation2",component:g}]}),w=n("Tqaz");n("Jmt5"),n("9M+g");e.default.use(w.a,w.b),e.default.config.productionTip=!1,new e.default({el:"#app",router:C,components:{App:l},template:"<App/>"})},SBfN:function(t,a){},lyXm:function(t,a){},wxch:function(t,a){}},["NHnr"]);
//# sourceMappingURL=app.c86b1182d518c215dece.js.map