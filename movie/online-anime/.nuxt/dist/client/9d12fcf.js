(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{310:function(t,e,n){"use strict";var r=n(2),o=n(4),l=n(53),c=n(204),_=n(203),d=n(3),m=RangeError,v=String,y=Math.floor,f=o(_),h=o("".slice),C=o(1..toFixed),S=function(t,e,n){return 0===e?n:e%2==1?S(t,e-1,n*t):S(t*t,e/2,n)},w=function(data,t,e){for(var n=-1,r=e;++n<6;)r+=t*data[n],data[n]=r%1e7,r=y(r/1e7)},x=function(data,t){for(var e=6,n=0;--e>=0;)n+=data[e],data[e]=y(n/t),n=n%t*1e7},k=function(data){for(var t=6,s="";--t>=0;)if(""!==s||0===t||0!==data[t]){var e=v(data[t]);s=""===s?e:s+f("0",7-e.length)+e}return s};r({target:"Number",proto:!0,forced:d((function(){return"0.000"!==C(8e-5,3)||"1"!==C(.9,0)||"1.25"!==C(1.255,2)||"1000000000000000128"!==C(0xde0b6b3a7640080,0)}))||!d((function(){C({})}))},{toFixed:function(t){var e,n,r,o,_=c(this),d=l(t),data=[0,0,0,0,0,0],y="",C="0";if(d<0||d>20)throw new m("Incorrect fraction digits");if(_!=_)return"NaN";if(_<=-1e21||_>=1e21)return v(_);if(_<0&&(y="-",_=-_),_>1e-21)if(n=(e=function(t){for(var e=0,n=t;n>=4096;)e+=12,n/=4096;for(;n>=2;)e+=1,n/=2;return e}(_*S(2,69,1))-69)<0?_*S(2,-e,1):_/S(2,e,1),n*=4503599627370496,(e=52-e)>0){for(w(data,0,n),r=d;r>=7;)w(data,1e7,0),r-=7;for(w(data,S(10,r,1),0),r=e-1;r>=23;)x(data,1<<23),r-=23;x(data,1<<r),w(data,1,1),x(data,2),C=k(data)}else w(data,0,n),w(data,1<<-e,0),C=k(data)+f("0",d);return C=d>0?y+((o=C.length)<=d?"0."+f("0",d-o)+C:h(C,0,o-d)+"."+h(C,o-d)):y+C}})},311:function(t,e,n){"use strict";var r=n(2),o=n(4),l=n(34),c=n(26),_=n(35),d=n(206),m=n(13),v=n(3),y=n(205),f=n(135),h=n(312),C=n(313),S=n(85),w=n(314),x=[],k=o(x.sort),A=o(x.push),H=v((function(){x.sort(void 0)})),z=v((function(){x.sort(null)})),I=f("sort"),D=!v((function(){if(S)return S<70;if(!(h&&h>3)){if(C)return!0;if(w)return w<603;var code,t,e,n,r="";for(code=65;code<76;code++){switch(t=String.fromCharCode(code),code){case 66:case 69:case 70:case 72:e=3;break;case 68:case 71:e=4;break;default:e=2}for(n=0;n<47;n++)x.push({k:t+n,v:e})}for(x.sort((function(a,b){return b.v-a.v})),n=0;n<x.length;n++)t=x[n].k.charAt(0),r.charAt(r.length-1)!==t&&(r+=t);return"DGBEFHACIJK"!==r}}));r({target:"Array",proto:!0,forced:H||!z||!I||!D},{sort:function(t){void 0!==t&&l(t);var e=c(this);if(D)return void 0===t?k(e):k(e,t);var n,r,o=[],v=_(e);for(r=0;r<v;r++)r in e&&A(o,e[r]);for(y(o,function(t){return function(e,n){return void 0===n?-1:void 0===e?1:void 0!==t?+t(e,n)||0:m(e)>m(n)?1:-1}}(t)),n=_(o),r=0;r<n;)e[r]=o[r++];for(;r<v;)d(e,r++);return e}})},312:function(t,e,n){"use strict";var r=n(68).match(/firefox\/(\d+)/i);t.exports=!!r&&+r[1]},313:function(t,e,n){"use strict";var r=n(68);t.exports=/MSIE|Trident/.test(r)},314:function(t,e,n){"use strict";var r=n(68).match(/AppleWebKit\/(\d+)\./);t.exports=!!r&&+r[1]},324:function(t,e,n){"use strict";n.r(e);n(310),n(36),n(54),n(44),n(52);var r=n(12),o=(n(69),n(37),n(311),n(51),n(33),n(15),n(88),n(45)),l=n.n(o),c={name:"WatchingPage",data:function(){return{data_get:null,top_look:null,one_user:null,comment_id:0,quote:!1,string_data:""}},mounted:function(){this.getCinemaData(),this.getData();var t=window.Scrollbar;if(document.querySelector(".item__description--details")&&t.init(document.querySelector(".item__description--details"),{damping:.1,renderByPixels:!0,alwaysShowTracks:!0,continuousScrolling:!0}),document.querySelector(".section__details-bg")){var e=document.querySelector(".section__details-bg");e.getAttribute("data-bg")&&(e.style.background="url(".concat(e.getAttribute("data-bg"),")"),e.style.backgroundPosition="center center",e.style.backgroundRepeat="no-repeat",e.style.backgroundSize="cover")}},methods:{getData:function(){var t=this;l.a.get("https://api.uzdub.uz/api/v1/cinema/".concat(localStorage.getItem("selectedItemData")),{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}}).then((function(e){t.data_get=e.data})).catch((function(t){console.error(t)}))},getCinemaData:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l.a.post("https://api.uzdub.uz/api/lookme",{cinema_id:JSON.parse(localStorage.getItem("selectedItemData")),user_id:JSON.parse(localStorage.getItem("user_data")).id});case 3:return e.sent,e.next=6,l.a.get("https://api.uzdub.uz/api/v1/cinema");case 6:n=e.sent,t.top_look=n.data.sort((function(a,b){return a.more_loking-b.more_loking})).slice(0,6),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.error(e.t0,"xato");case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))()},send_message:function(){var t=this;if(localStorage.getItem("user_data"))if(""!=document.querySelector(".sign__textarea").value){document.querySelector(".sign__textarea").style="border-color: none;";var data=new FormData;data.append("cinema_id",JSON.parse(localStorage.getItem("selectedItemData"))),data.append("supcomment",this.comment_id),data.append("description",document.querySelector(".sign__textarea").value),data.append("creator",JSON.parse(localStorage.getItem("user_data")).id),data.append("quanty",this.quote),l.a.post("https://api.uzdub.uz/api/v1/comment/",data,{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}}).then((function(e){document.querySelector("#alert_modal").style="display:block",setTimeout((function(){document.querySelector("#alert_modal").style="display:none"}),3e3),document.querySelector("#alert_text").innerHTML="Saqlandi",t.getData(),t.comment_id=0,t.string_data="",document.querySelector(".sign__textarea").value=""})).catch((function(t){console.log(t)}))}else document.querySelector(".sign__textarea").style="border-color: #ff55a5;";else document.querySelector("#alert_modal").style="display:block",setTimeout((function(){document.querySelector("#alert_modal").style="display:none"}),3e3),document.querySelector("#alert_text").innerHTML="Ro'yxatdan o'ting",window.location="/Signin"},click_like:function(t,e){var n=this,data=new FormData,r="https://api.uzdub.uz/api/v1/comment_mark";localStorage.getItem("user_data")?l.a.get("".concat(r)).then((function(o){var c=o.data.filter((function(t){return t.creator==JSON.parse(localStorage.getItem("user_data")).id&&t.comment_id==e}));c.length>0?l.a.delete("".concat(r,"/").concat(c[0].id)).then((function(o){data.append("dislike",t),data.append("comment_id",e),data.append("creator",JSON.parse(localStorage.getItem("user_data")).id),l.a.post(r,data).then((function(t){n.getData()})).catch((function(t){document.querySelector("#alert_modal").style="display:block",setTimeout((function(){document.querySelector("#alert_modal").style="display:none"}),3e3),document.querySelector("#alert_text").innerHTML="Xato",console.log(t)}))})):(data.append("dislike",t),data.append("comment_id",e),data.append("creator",JSON.parse(localStorage.getItem("user_data")).id),l.a.post(r,data).then((function(t){document.querySelector("#alert_modal").style="display:block",setTimeout((function(){document.querySelector("#alert_modal").style="display:none"}),3e3),document.querySelector("#alert_text").innerHTML="Saqlandi",n.getData()})).catch((function(t){document.querySelector("#alert_modal").style="display:block",setTimeout((function(){document.querySelector("#alert_modal").style="display:none"}),3e3),document.querySelector("#alert_text").innerHTML="Xato",console.log(t)})))})):(document.querySelector("#alert_modal").style="display:block",setTimeout((function(){document.querySelector("#alert_modal").style="display:none"}),3e3),document.querySelector("#alert_text").innerHTML="User not",window.location="/Signin");data=new FormData},clicksharx:function(){var t=this;if(localStorage.getItem("user_data")){if(""==document.querySelector("#sharx_m").value?document.querySelector("#sharx_m").style="border-color: #ff55a5;":document.querySelector("#sharx_m").style="border-color: none;",""==document.querySelector("#sharx_d").value?document.querySelector("#sharx_d").style="border-color: #ff55a5;":document.querySelector("#sharx_d").style="border-color: none;",""!=document.querySelector("#sharx_m").value&&""!=document.querySelector("#sharx_d").value){var data=new FormData;data.append("rating",document.querySelector("#rating").value),data.append("cinema_id",JSON.parse(localStorage.getItem("selectedItemData"))),data.append("description",document.querySelector("#sharx_m").value),data.append("title",document.querySelector("#sharx_d").value),data.append("creator",JSON.parse(localStorage.getItem("user_data")).id),l.a.post("https://api.uzdub.uz/api/v1/sharx/",data,{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}}).then((function(e){var n=new FormData;n.append("title",document.querySelector("#rating").value),n.append("cinema_id",JSON.parse(localStorage.getItem("selectedItemData"))),l.a.post("https://api.uzdub.uz/api/v1/mark",n).then((function(t){})),document.querySelector("#sharx_m").value="",document.querySelector("#sharx_d").value="",t.getData(),t.comment_id=0,t.string_data="",document.querySelector(".sign__textarea").value=""})).catch((function(t){console.log(t),document.querySelector("#alert_modal").style="display:block",setTimeout((function(){document.querySelector("#alert_modal").style="display:none"}),3e3),document.querySelector("#alert_text").innerHTML="Xatolik"}))}}else window.location="/Signin",document.querySelector("#alert_modal").style="display:block",setTimeout((function(){document.querySelector("#alert_modal").style="display:none"}),3e3),document.querySelector("#alert_text").innerHTML="User not"},updateData:function(data){this.comment_id=data.id,this.string_data=data.description},handleClick:function(t,e){if(e){var n=t;localStorage.setItem("selectedItemData",JSON.stringify(n)),window.location="/watching"}else document.querySelector("#alert_modal").style="display:block",document.querySelector("#alert_text").innerHTML="Admin tomondan taqiqlangan kino",setTimeout((function(){document.querySelector("#alert_modal").style="display:none"}),3e3)},AlertNone:function(){document.querySelector("#alert_modal").style="display:none"}}},_=n(25),component=Object(_.a)(c,(function(){var t=this,e=t._self._c;return e("div",[t.data_get?e("div",[e("section",{staticClass:"section section--details"},[t.data_get.allimage[1]?e("div",{staticClass:"section__details-bg",style:"background: url("+t.data_get.allimage[1].image+") center center / cover no-repeat"}):t._e(),t._v(" "),e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-12"},[t.data_get?e("h1",{staticClass:"section__title section__title--head"},[t._v("\n\t\t\t\t\t\t\t"+t._s(t.data_get.title)+"\n\t\t\t\t\t\t")]):t._e()]),t._v(" "),e("div",{staticClass:"col-12 col-xl-6"},[e("div",{staticClass:"item item--details"},[t.data_get&&t.data_get.allimage.length>0?e("div",{staticClass:"item__cover item__cover--anime"},[e("img",{staticClass:"item-cover__anime",attrs:{src:t.data_get.allimage[0].image,alt:""}}),t._v(" "),"Free"!=t.data_get.payment?e("div",{staticClass:"d-flex aligin-items-center justify-content-center premium-icon"},[e("img",{staticStyle:{height:"40px"},attrs:{src:"/img/USD.svg",alt:""}})]):t._e()]):t._e(),t._v(" "),e("div",{staticClass:"item__content"},[e("div",{staticClass:"item__wrap"},[t.data_get?e("span",{staticClass:"item__rate"},[t._v(t._s(t.data_get.mark.toFixed(1)))]):t._e(),t._v(" "),e("ul",{staticClass:"item__list"},[t.data_get?e("li",[t._v(t._s(t.data_get.type))]):t._e(),t._v(" "),t.data_get?e("li",[t._v(t._s(t.data_get.age_limit)+"+")]):t._e(),t._v(" "),t.data_get?e("li",[t._v(t._s(t.data_get.payment))]):t._e()])]),t._v(" "),e("ul",{staticClass:"item__meta"},[t.data_get?e("li",[e("span",[t._v("Janr:")]),t._v(" "),t._l(t.data_get.janr,(function(n){return e("a",{key:n.id,attrs:{role:"button"}},[t._v(t._s(n.title))])}))],2):t._e(),t._v(" "),t.data_get?e("li",[e("span",[t._v("Davomiyligi:")]),t._v(" "+t._s(t.data_get.time)+" min\n\t\t\t\t\t\t\t\t\t")]):t._e(),t._v(" "),t.data_get?e("li",[e("span",[t._v("Mamlakat:")]),t._v(" "),e("a",{attrs:{role:"button"}},[t._v(t._s(t.data_get.country))])]):t._e(),t._v(" "),t.data_get?e("li",[e("span",[t._v("Tarjima:")]),t._v(t._s(t.data_get.language)+"\n\t\t\t\t\t\t\t\t\t")]):t._e()]),t._v(" "),e("ul",{staticClass:"item__meta"},[t.data_get?e("li",[e("span",[t._v("Ovoz berdi: "),e("a",{attrs:{role:"button"}},[t._v(t._s(t.data_get.ovoz_berdi))])])]):t._e(),t._v(" "),t.data_get?e("li",[e("span",[t._v("Tarjimon:")]),t._v(" "),t._l(t.data_get.tarjima,(function(n){return e("a",{key:n.id,attrs:{role:"button"}},[t._v(t._s(n.title))])}))],2):t._e(),t._v(" "),t.data_get?e("li",[e("span",[t._v("Tayming:")]),t._v(" "),e("a",{attrs:{role:"button"}},[t._v(t._s(t.data_get.tayming))])]):t._e()])]),t._v(" "),t.data_get?e("div",{staticClass:"item__description item__description--details",staticStyle:{overflow:"hidden",outline:"none"},attrs:{"data-scrollbar":"true",tabindex:"-1"}},[e("div",{staticClass:"scroll-content"},[e("p",[t._v("\n\t\t\t\t\t\t\t\t\t\t"+t._s(t.data_get.description)+"\n\t\t\t\t\t\t\t\t\t")])])]):t._e()])]),t._v(" "),e("div",{staticClass:"col-12 col-xl-6"},[t.data_get&&t.data_get.video?e("div",{staticClass:"cinema-iframe"},[e("iframe",{staticStyle:{position:"absolute",top:"0",left:"0"},attrs:{src:t.data_get.video,allow:"autoplay; fullscreen; picture-in-picture; encrypted-media;",frameborder:"0",allowfullscreen:""}})]):t._e(),t._v(" "),t.data_get.video?t._e():e("div",{staticClass:"cinema-iframe"},[e("iframe",{staticStyle:{position:"absolute",top:"0",left:"0"},attrs:{src:t.data_get.treler,allow:"autoplay; fullscreen; picture-in-picture; encrypted-media;",frameborder:"0",allowfullscreen:""}})])])])])]),t._v(" "),e("section",{staticClass:"content"},[t._m(1),t._v(" "),e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-12 col-lg-8"},[e("div",{staticClass:"tab-content"},[e("div",{staticClass:"tab-pane fade show active",attrs:{id:"tab-1",role:"tabpanel","aria-labelledby":"1-tab",tabindex:"0"}},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-12"},[t.data_get?e("div",{staticClass:"comments"},[t._l(t.data_get.comment,(function(n){return e("ul",{key:n.id,staticClass:"comments__list"},[e("li",{staticClass:"comments__item"},[e("div",{staticClass:"comments__autor"},[e("img",{staticClass:"comments__avatar",attrs:{src:"/img/user.svg",alt:""}}),t._v(" "),n.creators&&n.creators.name?e("span",{staticClass:"comments__name"},[t._v(t._s(n.creators.name)+"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t"),n.ptichka?e("span",{staticClass:"d-flex aligin-items-center justify-content-center moder-user"},[e("img",{attrs:{src:"img/verify.svg",alt:""}})]):t._e()]):e("span",{staticClass:"comments__name"},[t._v("No Name")]),t._v(" "),e("span",{staticClass:"comments__time"},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t"+t._s(n.time_create.slice(5,7))+"."+t._s(n.time_create.slice(8,10))+"."+t._s(n.time_create.slice(0,4))+",\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t"+t._s(n.time_create.slice(11,16)))])]),t._v(" "),e("p",{staticClass:"comments__text"},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t"+t._s(n.description)+"\n\t\t\t\t\t\t\t\t\t\t\t\t\t")]),t._v(" "),e("div",{staticClass:"comments__actions"},[e("div",{staticClass:"comments__rate"},[e("button",{attrs:{type:"button"}},[e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewbox:"0 0 24 24"},on:{click:function(e){return t.click_like(!0,n.id)}}},[e("path",{attrs:{d:"M21.3,10.08A3,3,0,0,0,19,9H14.44L15,7.57A4.13,4.13,0,0,0,11.11,2a1,1,0,0,0-.91.59L7.35,9H5a3,3,0,0,0-3,3v7a3,3,0,0,0,3,3H17.73a3,3,0,0,0,2.95-2.46l1.27-7A3,3,0,0,0,21.3,10.08ZM7,20H5a1,1,0,0,1-1-1V12a1,1,0,0,1,1-1H7Zm13-7.82-1.27,7a1,1,0,0,1-1,.82H9V10.21l2.72-6.12A2.11,2.11,0,0,1,13.1,6.87L12.57,8.3A2,2,0,0,0,14.44,11H19a1,1,0,0,1,.77.36A1,1,0,0,1,20,12.18Z"}})]),t._v(t._s(n.top)+"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t")]),t._v(" "),e("button",{attrs:{type:"button"}},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t"+t._s(n.min)),e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewbox:"0 0 24 24"},on:{click:function(e){return t.click_like(!1,n.id)}}},[e("path",{attrs:{d:"M19,2H6.27A3,3,0,0,0,3.32,4.46l-1.27,7A3,3,0,0,0,5,15H9.56L9,16.43A4.13,4.13,0,0,0,12.89,22a1,1,0,0,0,.91-.59L16.65,15H19a3,3,0,0,0,3-3V5A3,3,0,0,0,19,2ZM15,13.79l-2.72,6.12a2.13,2.13,0,0,1-1.38-2.78l.53-1.43A2,2,0,0,0,9.56,13H5a1,1,0,0,1-.77-.36A1,1,0,0,1,4,11.82l1.27-7a1,1,0,0,1,1-.82H15ZM20,12a1,1,0,0,1-1,1H17V4h2a1,1,0,0,1,1,1Z"}})])])]),t._v(" "),e("a",{attrs:{href:"#replay_coment"}},[e("button",{attrs:{type:"button"},on:{click:function(e){return t.updateData(n)}}},[e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewbox:"0 0 24 24"}},[e("path",{attrs:{d:"M21.707,11.293l-8-8A.99991.99991,0,0,0,12,4V7.54492A11.01525,11.01525,0,0,0,2,18.5V20a1,1,0,0,0,1.78418.62061,11.45625,11.45625,0,0,1,7.88672-4.04932c.0498-.00635.1748-.01611.3291-.02588V20a.99991.99991,0,0,0,1.707.707l8-8A.99962.99962,0,0,0,21.707,11.293ZM14,17.58594V15.5a.99974.99974,0,0,0-1-1c-.25488,0-1.2959.04932-1.56152.085A14.00507,14.00507,0,0,0,4.05176,17.5332,9.01266,9.01266,0,0,1,13,9.5a.99974.99974,0,0,0,1-1V6.41406L19.58594,12Z"}})]),t._v("JAVOB BERISH\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t")])])])]),t._v(" "),t._l(n.subcomment,(function(n){return e("div",{key:n.id},[n.quanty?t._e():e("li",{staticClass:"comments__item comments__item--answer"},[e("div",{staticClass:"comments__autor"},[e("img",{staticClass:"comments__avatar",attrs:{src:"/img/user.svg",alt:""}}),t._v(" "),n.creators&&n.creators.name?e("span",{staticClass:"comments__name"},[t._v(t._s(n.creators.name)+"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t"),n.ptichka?e("span",{staticClass:"d-flex aligin-items-center justify-content-center moder-user"},[e("img",{attrs:{src:"img/verify.svg",alt:""}})]):t._e()]):e("span",{staticClass:"comments__name"},[t._v("No Name")]),t._v(" "),e("span",{staticClass:"comments__time"},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t"+t._s(n.time_create.slice(5,7))+"."+t._s(n.time_create.slice(8,10))+"."+t._s(n.time_create.slice(0,4))+",\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t"+t._s(n.time_create.slice(11,16)))])]),t._v(" "),e("p",{staticClass:"comments__text"},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t"+t._s(n.description)+"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t")]),t._v(" "),e("div",{staticClass:"comments__actions comments__actions-two"},[e("div",{staticClass:"comments__rate"},[e("button",{attrs:{type:"button"}},[e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewbox:"0 0 24 24"},on:{click:function(e){return t.click_like(!0,n.id)}}},[e("path",{attrs:{d:"M21.3,10.08A3,3,0,0,0,19,9H14.44L15,7.57A4.13,4.13,0,0,0,11.11,2a1,1,0,0,0-.91.59L7.35,9H5a3,3,0,0,0-3,3v7a3,3,0,0,0,3,3H17.73a3,3,0,0,0,2.95-2.46l1.27-7A3,3,0,0,0,21.3,10.08ZM7,20H5a1,1,0,0,1-1-1V12a1,1,0,0,1,1-1H7Zm13-7.82-1.27,7a1,1,0,0,1-1,.82H9V10.21l2.72-6.12A2.11,2.11,0,0,1,13.1,6.87L12.57,8.3A2,2,0,0,0,14.44,11H19a1,1,0,0,1,.77.36A1,1,0,0,1,20,12.18Z"}})]),t._v(t._s(n.top)+"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t")]),t._v(" "),e("button",{attrs:{type:"button"}},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t"+t._s(n.min)),e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewbox:"0 0 24 24"},on:{click:function(e){return t.click_like(!1,n.id)}}},[e("path",{attrs:{d:"M19,2H6.27A3,3,0,0,0,3.32,4.46l-1.27,7A3,3,0,0,0,5,15H9.56L9,16.43A4.13,4.13,0,0,0,12.89,22a1,1,0,0,0,.91-.59L16.65,15H19a3,3,0,0,0,3-3V5A3,3,0,0,0,19,2ZM15,13.79l-2.72,6.12a2.13,2.13,0,0,1-1.38-2.78l.53-1.43A2,2,0,0,0,9.56,13H5a1,1,0,0,1-.77-.36A1,1,0,0,1,4,11.82l1.27-7a1,1,0,0,1,1-.82H15ZM20,12a1,1,0,0,1-1,1H17V4h2a1,1,0,0,1,1,1Z"}})])])])])])])}))],2)})),t._v(" "),e("div",{attrs:{id:"replay_coment"}}),t._v(" "),e("form",{staticClass:"sign__form sign__form--comments",attrs:{action:"#"}},[e("div",{staticClass:"sign__group"},[e("h6",{staticStyle:{color:"white"}},[t._v(t._s(this.string_data))]),t._v(" "),e("textarea",{staticClass:"sign__textarea",attrs:{id:"text",name:"text",placeholder:"Fikr yozing",required:""}})]),t._v(" "),e("button",{staticClass:"sign__btn sign__btn--small",attrs:{type:"button"},on:{click:t.send_message}},[e("span",[t._v("Yuborish")])])])],2):t._e()])])]),t._v(" "),e("div",{staticClass:"tab-pane fade",attrs:{id:"tab-2",role:"tabpanel","aria-labelledby":"2-tab",tabindex:"0"}},[t.data_get?e("div",{staticClass:"row"},[e("div",{staticClass:"col-12"},[e("div",{staticClass:"reviews"},[e("ul",{staticClass:"reviews__list"},t._l(t.data_get.sharx,(function(n){return e("li",{key:n.id,staticClass:"reviews__item"},[e("div",{staticClass:"reviews__autor"},[e("img",{staticClass:"reviews__avatar",attrs:{src:"/img/user.svg",alt:""}}),t._v(" "),e("span",{staticClass:"reviews__name"},[t._v(t._s(n.title))]),t._v(" "),e("span",{staticClass:"reviews__time"},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t"+t._s(n.time_create.slice(5,7))+"."+t._s(n.time_create.slice(8,10))+"."+t._s(n.time_create.slice(0,4))+",\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t"),n.creators&&n.creators.name?e("span",[t._v(t._s(n.creators.name))]):t._e(),t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\ttomonidan")]),t._v(" "),e("span",{staticClass:"reviews__rating"},[e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg","enable-background":"new 0 0 24 24",viewbox:"0 0 24 24"}},[e("path",{attrs:{d:"M22,10.1c0.1-0.5-0.3-1.1-0.8-1.1l-5.7-0.8L12.9,3c-0.1-0.2-0.2-0.3-0.4-0.4C12,2.3,11.4,2.5,11.1,3L8.6,8.2L2.9,9C2.6,9,2.4,9.1,2.3,9.3c-0.4,0.4-0.4,1,0,1.4l4.1,4l-1,5.7c0,0.2,0,0.4,0.1,0.6c0.3,0.5,0.9,0.7,1.4,0.4l5.1-2.7l5.1,2.7c0.1,0.1,0.3,0.1,0.5,0.1v0c0.1,0,0.1,0,0.2,0c0.5-0.1,0.9-0.6,0.8-1.2l-1-5.7l4.1-4C21.9,10.5,22,10.3,22,10.1z"}})]),t._v(t._s(n.rating))])]),t._v(" "),e("p",{staticClass:"reviews__text"},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t"+t._s(n.description)+"\n\t\t\t\t\t\t\t\t\t\t\t\t\t")])])})),0),t._v(" "),e("form",{staticClass:"sign__form sign__form--comments",attrs:{action:"#"}},[e("div",{staticClass:"row"},[t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),e("div",{staticClass:"col-12"},[e("button",{staticClass:"sign__btn sign__btn--small",attrs:{type:"button"},on:{click:t.clicksharx}},[e("span",[t._v("Yuborish")])])])])])])])]):t._e()])])]),t._v(" "),e("div",{staticClass:"col-12 col-lg-4"},[e("div",{staticClass:"row"},[t._m(5),t._v(" "),t._l(t.top_look,(function(n){return e("div",{key:n.id,staticClass:"col-6 col-sm-4 col-lg-6"},[e("div",{staticClass:"item"},[e("div",{staticClass:"item__cover item__cover--rate",on:{click:function(e){return t.handleClick(n.id,n.looking)}}},[n.images.length>0?e("img",{staticClass:"item-cover__img",attrs:{src:n.images[0].image,alt:""}}):t._e(),t._v(" "),"Free"!=n.payment?e("div",{staticClass:"d-flex aligin-items-center justify-content-center premium-icon"},[e("img",{staticStyle:{height:"40px"},attrs:{src:"/img/USD.svg",alt:""}})]):t._e(),t._v(" "),e("span",{staticClass:"item__play",staticStyle:{position:"absolute"}},[e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewbox:"0 0 24 24"}},[e("path",{attrs:{d:"M18.54,9,8.88,3.46a3.42,3.42,0,0,0-5.13,3V17.58A3.42,3.42,0,0,0,7.17,21a3.43,3.43,0,0,0,1.71-.46L18.54,15a3.42,3.42,0,0,0,0-5.92Zm-1,4.19L7.88,18.81a1.44,1.44,0,0,1-1.42,0,1.42,1.42,0,0,1-.71-1.23V6.42a1.42,1.42,0,0,1,.71-1.23A1.51,1.51,0,0,1,7.17,5a1.54,1.54,0,0,1,.71.19l9.66,5.58a1.42,1.42,0,0,1,0,2.46Z"}})])])]),t._v(" "),e("div",{staticClass:"item__content"},[e("h3",{staticClass:"item__title item__title-two",on:{click:function(e){return t.handleClick(n.id,n.looking)}}},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t"+t._s(n.title)+"\n\t\t\t\t\t\t\t\t\t\t")]),t._v(" "),e("span",{staticClass:"item__category",on:{click:function(e){return t.handleClick(n.id,n.looking)}}},t._l(n.janrlar,(function(n){return e("NuxtLink",{key:n.id,attrs:{to:""}},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t"+t._s(n.title))])})),1),t._v(" "),e("span",{staticClass:"item__rate"},[t._v(t._s(n.mark.toFixed(1)))])])])])}))],2)])])])]),t._v(" "),e("div",{staticClass:"toast align-items-center",attrs:{id:"alert_modal",role:"alert","aria-live":"assertive","aria-atomic":"false"}},[e("div",{staticClass:"d-flex"},[e("div",{staticClass:"toast-body",attrs:{id:"alert_text"}},[t._v("\n\t\t\t\t\tHello, world! This is a toast message.\n\t\t\t\t")]),t._v(" "),e("button",{staticClass:"btn-close me-2 m-auto",attrs:{type:"button","data-bs-dismiss":"toast","aria-label":"Close"},on:{click:function(e){return t.AlertNone()}}})])])]):e("div",{staticClass:"lodaing_page"},[t._m(0)])])}),[function(){var t=this._self._c;return t("div",{staticClass:"loading"},[t("span",[this._v("UZDUB")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"content__head"},[e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-12"},[e("h2",{staticClass:"content__title"},[t._v("Kashf qiling")]),t._v(" "),e("ul",{staticClass:"nav nav-tabs content__tabs",attrs:{id:"content__tabs",role:"tablist"}},[e("li",{staticClass:"nav-item",attrs:{role:"presentation"}},[e("button",{staticClass:"active",attrs:{id:"1-tab","data-bs-toggle":"tab","data-bs-target":"#tab-1",type:"button",role:"tab","aria-controls":"tab-1","aria-selected":"true"}},[t._v("\n\t\t\t\t\t\t\t\t\t\tIzohlar\n\t\t\t\t\t\t\t\t\t")])]),t._v(" "),e("li",{staticClass:"nav-item",attrs:{role:"presentation"}},[e("button",{attrs:{id:"2-tab","data-bs-toggle":"tab","data-bs-target":"#tab-2",type:"button",role:"tab","aria-controls":"tab-2","aria-selected":"false"}},[t._v("\n\t\t\t\t\t\t\t\t\t\tSharhlar\n\t\t\t\t\t\t\t\t\t")])])])])])])])},function(){var t=this._self._c;return t("div",{staticClass:"col-12 col-md-6"},[t("div",{staticClass:"sign__group"},[t("input",{staticClass:"sign__input",attrs:{type:"text",placeholder:"Sarlavha",id:"sharx_d",required:""}})])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"col-12 col-md-6"},[e("div",{staticClass:"sign__group"},[e("select",{staticClass:"sign__select",attrs:{name:"rating",id:"rating",required:""}},[e("option",{attrs:{value:"0"}},[t._v("Reyting")]),t._v(" "),e("option",{attrs:{value:"1"}},[t._v("1 yulduz")]),t._v(" "),e("option",{attrs:{value:"2"}},[t._v("2 yulduz")]),t._v(" "),e("option",{attrs:{value:"3"}},[t._v("3 yulduz")]),t._v(" "),e("option",{attrs:{value:"4"}},[t._v("4 yulduz")]),t._v(" "),e("option",{attrs:{value:"5"}},[t._v("5 yulduz")]),t._v(" "),e("option",{attrs:{value:"6"}},[t._v("6 yulduz")]),t._v(" "),e("option",{attrs:{value:"7"}},[t._v("7 yulduz")]),t._v(" "),e("option",{attrs:{value:"8"}},[t._v("8 yulduz")]),t._v(" "),e("option",{attrs:{value:"9"}},[t._v("9 yulduz")]),t._v(" "),e("option",{attrs:{value:"10"}},[t._v("10 yulduz")])])])])},function(){var t=this._self._c;return t("div",{staticClass:"col-12"},[t("div",{staticClass:"sign__group"},[t("textarea",{staticClass:"sign__textarea",attrs:{id:"sharx_m",placeholder:"Sharh yozing",required:""}})])])},function(){var t=this._self._c;return t("div",{staticClass:"col-12"},[t("h2",{staticClass:"section__title section__title--sidebar"},[this._v("\n\t\t\t\t\t\t\t\t\tReytingi yuqori\n\t\t\t\t\t\t\t\t")])])}],!1,null,null,null);e.default=component.exports}}]);