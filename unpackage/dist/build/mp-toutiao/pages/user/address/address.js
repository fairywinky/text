(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/user/address/address"],{"081a":function(t,e,n){"use strict";(function(t){n("e146"),n("921b");a(n("66fd"));var e=a(n("8dce"));function a(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("f266")["createPage"])},"283d":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{isSelect:!1,addressList:[]}},onShow:function(){this.loadData(),this.getDefaultAddress()},onLoad:function(t){"select"==t.type&&(this.isSelect=!0)},methods:{getDefaultAddress:function(){this.$xm.post("/Order/getDefAdr","",function(e){t.setStorage({key:"address",data:e,success:function(t){}})})},edit:function(e){t.navigateTo({url:"edit/edit?type=edit&id="+e.id})},add:function(){t.navigateTo({url:"edit/edit?type=add"})},loadData:function(){var t=this;this.$xm.post("/User/shipAdr","",function(e){e&&(e.forEach(function(t){t.head=t.name.substring(0,1)}),t.addressList=e||[])})},select:function(e){this.isSelect&&t.setStorage({key:"selectAddress",data:e,success:function(){t.navigateBack()}})}}};e.default=n}).call(this,n("f266")["default"])},"8dce":function(t,e,n){"use strict";n.r(e);var a=n("ce33"),d=n("dbec");for(var i in d)"default"!==i&&function(t){n.d(e,t,function(){return d[t]})}(i);n("de09");var s,u=n("f0c5"),c=Object(u["a"])(d["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],s);e["default"]=c.exports},ce33:function(t,e,n){"use strict";var a,d=function(){var t=this,e=t.$createElement;t._self._c},i=[];n.d(e,"b",function(){return d}),n.d(e,"c",function(){return i}),n.d(e,"a",function(){return a})},d422:function(t,e,n){},dbec:function(t,e,n){"use strict";n.r(e);var a=n("283d"),d=n.n(a);for(var i in a)"default"!==i&&function(t){n.d(e,t,function(){return a[t]})}(i);e["default"]=d.a},de09:function(t,e,n){"use strict";var a=n("d422"),d=n.n(a);d.a}},[["081a","common/runtime","common/vendor"]]]);