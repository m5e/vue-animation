webpackJsonp([1],{"9M+g":function(t,e){},"H/nB":function(t,e){},Jmt5:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("7+uW"),i={name:"App",mounted:function(){window.onload=setTimeout(this.refreshscreen,1e3)},methods:{refreshscreen:function(){this.$el.getElementsByClassName("loading").item(0).classList.add("loaded")}}},s={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("b-navbar",{staticClass:"navigation"},[e("b-navbar-brand",{attrs:{href:"#"}},[e("b-button",{directives:[{name:"b-toggle",rawName:"v-b-toggle.sidebar-left",modifiers:{"sidebar-left":!0}}],staticClass:"navigation-button"},[e("svg",{staticClass:"bi bi-justify",attrs:{width:"1.5em",height:"1.5em",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{"fill-rule":"evenodd",d:"M2 12.5a.5.5 0 01.5-.5h11a.5.5 0 010 1h-11a.5.5 0 01-.5-.5zm0-3a.5.5 0 01.5-.5h11a.5.5 0 010 1h-11a.5.5 0 01-.5-.5zm0-3a.5.5 0 01.5-.5h11a.5.5 0 010 1h-11a.5.5 0 01-.5-.5zm0-3a.5.5 0 01.5-.5h11a.5.5 0 010 1h-11a.5.5 0 01-.5-.5z","clip-rule":"evenodd"}})])])],1)],1),this._v(" "),e("b-sidebar",{attrs:{id:"sidebar-left",title:"Menu",left:""}}),this._v(" "),this._m(0),this._v(" "),e("div",{staticClass:"content"},[e("router-view")],1)],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"loading"},[e("div",{staticClass:"loader"})])}]};var l=n("VU/8")(i,s,!1,function(t){n("H/nB")},null,null).exports,o=n("/ocq"),r=n("fZjL"),c=n.n(r),d={name:"MainPage",data:function(){return{panel:[],finished:!1}},mounted:function(){for(var t=1;t<16;t++)this.panel.push(t);this.panel.push("★")},methods:{start:function(){this.finished=!1;var t=this.$el.getElementsByClassName("board")[0];for(t.classList.contains("complete")?t.classList.remove("complete"):t.classList.contains("not-started")&&t.classList.remove("not-started");this.panel.sort(function(){return Math.random()-Math.random()}),!this.checkSolvable(this.panel););},checkSolvable:function(t){var e=[],n=null;t.forEach(function(t,a){"★"===t?n=a:e.push(t)});var a=1;0<=n&&n<=3||(4<=n&&n<=7?a=2:8<=n&&n<=11?a=3:12<=n&&n<=15&&(a=4));for(var i=function(){var t=e[0];e.shift(),e.forEach(function(e){e<t&&a++})};0!==e.length;)i();return a%2==0},movePanel:function(t){var e=this,n={top:{index:null,val:null},buttom:{index:null,val:null},left:{index:null,val:null},right:{index:null,val:null}},a=t.target.parentNode.id;n.top={index:a-4,val:this.panel[a-4]},n.buttom={index:Number(a)+4,val:this.panel[Number(a)+4]},n.left={index:a-1,val:this.panel[a-1]},n.right={index:Number(a)+1,val:this.panel[Number(a)+1]};var i=this.panel[a];(c()(n).forEach(function(t){"★"===n[t].val&&(e.panel.splice(a,1,"★"),e.panel.splice([n[t].index],1,i))}),this.checkFinish())&&(this.$el.getElementsByClassName("board")[0].classList.add("complete"),this.finished=!0)},checkFinish:function(){return this.panel.toString()===["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","★"].toString()}}},v={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"main"},[n("div",[n("b-modal",{attrs:{centered:"",title:"Cleared!!!!"},model:{value:t.finished,callback:function(e){t.finished=e},expression:"finished"}},[n("p",{staticClass:"my-4"},[t._v("Thank you for playing!!")])])],1),t._v(" "),n("h1",[t._v("15 Pazzle")]),t._v(" "),n("table",{staticClass:"board not-started"},[n("tr",[n("td",{attrs:{id:"0"}},[n("button",{on:{click:t.movePanel}},[t._v(t._s(this.panel[0]))])]),t._v(" "),n("td",{attrs:{id:"1"}},[n("button",{on:{click:t.movePanel}},[t._v(t._s(this.panel[1]))])]),t._v(" "),n("td",{attrs:{id:"2"}},[n("button",{on:{click:t.movePanel}},[t._v(t._s(this.panel[2]))])]),t._v(" "),n("td",{attrs:{id:"3"}},[n("button",{on:{click:t.movePanel}},[t._v(t._s(this.panel[3]))])])]),t._v(" "),n("tr",[n("td",{attrs:{id:"4"}},[n("button",{on:{click:t.movePanel}},[t._v(t._s(this.panel[4]))])]),t._v(" "),n("td",{attrs:{id:"5"}},[n("button",{on:{click:t.movePanel}},[t._v(t._s(this.panel[5]))])]),t._v(" "),n("td",{attrs:{id:"6"}},[n("button",{on:{click:t.movePanel}},[t._v(t._s(this.panel[6]))])]),t._v(" "),n("td",{attrs:{id:"7"}},[n("button",{on:{click:t.movePanel}},[t._v(t._s(this.panel[7]))])])]),t._v(" "),n("tr",[n("td",{attrs:{id:"8"}},[n("button",{on:{click:t.movePanel}},[t._v(t._s(this.panel[8]))])]),t._v(" "),n("td",{attrs:{id:"9"}},[n("button",{on:{click:t.movePanel}},[t._v(t._s(this.panel[9]))])]),t._v(" "),n("td",{attrs:{id:"10"}},[n("button",{on:{click:t.movePanel}},[t._v(t._s(this.panel[10]))])]),t._v(" "),n("td",{attrs:{id:"11"}},[n("button",{on:{click:t.movePanel}},[t._v(t._s(this.panel[11]))])])]),t._v(" "),n("tr",[n("td",{attrs:{id:"12"}},[n("button",{on:{click:t.movePanel}},[t._v(t._s(this.panel[12]))])]),t._v(" "),n("td",{attrs:{id:"13"}},[n("button",{on:{click:t.movePanel}},[t._v(t._s(this.panel[13]))])]),t._v(" "),n("td",{attrs:{id:"14"}},[n("button",{on:{click:t.movePanel}},[t._v(t._s(this.panel[14]))])]),t._v(" "),n("td",{attrs:{id:"15"}},[n("button",{on:{click:t.movePanel}},[t._v(t._s(this.panel[15]))])])])]),t._v(" "),n("button",{staticClass:"start-button",on:{click:t.start}},[t._v("START")])])},staticRenderFns:[]};var u=n("VU/8")(d,v,!1,function(t){n("WkI5")},"data-v-07826165",null).exports;a.default.use(o.a);var h=new o.a({routes:[{path:"/",name:"MainPage",component:u}]}),m=n("Tqaz");n("Jmt5"),n("9M+g");a.default.use(m.a,m.b),a.default.config.productionTip=!1,new a.default({el:"#app",router:h,components:{App:l},template:"<App/>"})},WkI5:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.e8a157c1bf87b070958a.js.map