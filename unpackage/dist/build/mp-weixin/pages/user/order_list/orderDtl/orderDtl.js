(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/user/order_list/orderDtl/orderDtl"],{"057b":function(t,e,r){},"3d61":function(t,e,r){"use strict";var i,n=function(){var t=this,e=t.$createElement,r=(t._self._c,t._f("toFixed")(t.deduction)),i=t._f("toFixed")(t.goodsPrice),n=t._f("toFixed")(t.freight),o=t._f("toFixed")(t.deduction),s=t._f("toFixed")(t.sumPrice);t.$mp.data=Object.assign({},{$root:{f0:r,f1:i,f2:n,f3:o,f4:s}})},o=[];r.d(e,"b",function(){return n}),r.d(e,"c",function(){return o}),r.d(e,"a",function(){return i})},8534:function(t,e,r){"use strict";var i=r("057b"),n=r.n(i);n.a},a212:function(t,e,r){"use strict";r.r(e);var i=r("dbb2"),n=r.n(i);for(var o in i)"default"!==o&&function(t){r.d(e,t,function(){return i[t]})}(o);e["default"]=n.a},a91f:function(t,e,r){"use strict";(function(t){r("e1d9"),r("921b");i(r("66fd"));var e=i(r("cbd4"));function i(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,r("543d")["createPage"])},cbd4:function(t,e,r){"use strict";r.r(e);var i=r("3d61"),n=r("a212");for(var o in n)"default"!==o&&function(t){r.d(e,t,function(){return n[t]})}(o);r("8534");var s,c=r("f0c5"),u=Object(c["a"])(n["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],s);e["default"]=u.exports},dbb2:function(t,e,r){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r={data:function(){return{id:"",secret:{},type:"",time:"",shipname:"",buylist:[],goodsPrice:0,sumPrice:0,freight:0,note:"",int:0,deduction:0,recinfo:{}}},onLoad:function(t){this.id=t.id},onShow:function(){var e=this;t.getStorage({key:"user",success:function(t){e.secret=t.data,e.getdetails()}})},onHide:function(){},onBackPress:function(){this.clearOrder()},filters:{toFixed:function(t){return parseFloat(t).toFixed(2)}},methods:{getdetails:function(){var t=this,e={xopenid:this.secret.openid,order_sn:this.id,secret:this.secret.secret,timestamp:this.secret.timestamp};this.$xm.post("/Order/getOrderInfo",e,function(e){switch(e.order_state){case"6":e.order_state="已删除";break;case"8":e.order_state="已退款";break;default:}t.type=e.order_state,t.recinfo=e.contact,e.pro.map(function(t){t.pro_sn="http://img.xmvogue.com/thumb/"+t.pro_sn+".jpg?x-oss-process=style/300"}),t.buylist=e.pro,t.time=e.order_time,t.shipname=e.order_ship_name,t.goodsPrice=e.actually_amt,t.freight=e.order_ship_price,t.sumPrice=Number(t.goodsPrice)+Number(t.freight),t.deduction=e.discount_amt})},clearOrder:function(){var e=this;t.removeStorage({key:"buylist",success:function(t){e.buylist=[],console.log("remove buylist success")}})},toPay:function(){for(var e=this,r=[],i=[],n=this.buylist.length,o=0;o<n;o++)r.push(this.buylist[o]),i.push(this.buylist[o].id);0!=r.length?(t.showLoading({title:"正在提交订单..."}),setTimeout(function(){t.setStorage({key:"paymentOrder",data:r,success:function(){t.hideLoading(),t.redirectTo({url:"../pay/payment/payment?amount="+e.sumPrice})}})},1e3)):t.showToast({title:"订单信息有误，请重新购买",icon:"none"})},selectAddress:function(){t.navigateTo({url:"../user/address/address?type=select"})}}};e.default=r}).call(this,r("543d")["default"])}},[["a91f","common/runtime","common/vendor"]]]);