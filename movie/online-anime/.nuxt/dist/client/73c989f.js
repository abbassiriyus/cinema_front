(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{310:function(t,e,l){"use strict";var n=l(2),r=l(4),o=l(53),_=l(204),c=l(203),d=l(3),v=RangeError,m=String,f=Math.floor,C=r(c),h=r("".slice),y=r(1..toFixed),x=function(t,e,l){return 0===e?l:e%2==1?x(t,e-1,l*t):x(t*t,e/2,l)},w=function(data,t,e){for(var l=-1,n=e;++l<6;)n+=t*data[l],data[l]=n%1e7,n=f(n/1e7)},k=function(data,t){for(var e=6,l=0;--e>=0;)l+=data[e],data[e]=f(l/t),l=l%t*1e7},S=function(data){for(var t=6,s="";--t>=0;)if(""!==s||0===t||0!==data[t]){var e=m(data[t]);s=""===s?e:s+C("0",7-e.length)+e}return s};n({target:"Number",proto:!0,forced:d((function(){return"0.000"!==y(8e-5,3)||"1"!==y(.9,0)||"1.25"!==y(1.255,2)||"1000000000000000128"!==y(0xde0b6b3a7640080,0)}))||!d((function(){y({})}))},{toFixed:function(t){var e,l,n,r,c=_(this),d=o(t),data=[0,0,0,0,0,0],f="",y="0";if(d<0||d>20)throw new v("Incorrect fraction digits");if(c!=c)return"NaN";if(c<=-1e21||c>=1e21)return m(c);if(c<0&&(f="-",c=-c),c>1e-21)if(l=(e=function(t){for(var e=0,l=t;l>=4096;)e+=12,l/=4096;for(;l>=2;)e+=1,l/=2;return e}(c*x(2,69,1))-69)<0?c*x(2,-e,1):c/x(2,e,1),l*=4503599627370496,(e=52-e)>0){for(w(data,0,l),n=d;n>=7;)w(data,1e7,0),n-=7;for(w(data,x(10,n,1),0),n=e-1;n>=23;)k(data,1<<23),n-=23;k(data,1<<n),w(data,1,1),k(data,2),y=S(data)}else w(data,0,l),w(data,1<<-e,0),y=S(data)+C("0",d);return y=d>0?f+((r=y.length)<=d?"0."+C("0",d-r)+y:h(y,0,r-d)+"."+h(y,r-d)):f+y}})},321:function(t,e,l){"use strict";l.r(e);l(44),l(310);var n=l(12),r=l(28),o=(l(69),l(37),l(52),l(33),l(15),l(51),l(45)),_=l.n(o),c={name:"Faq",data:function(){var t;return t={one_user:null,fikr_length:0,sharx:null,pay:!1},Object(r.a)(t,"one_user",{}),Object(r.a)(t,"cinema_data",null),t},methods:{fetchData:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,_.a.get("https://api.uzdub.uz/api/lookme/".concat(JSON.parse(localStorage.getItem("user_data")).id));case 3:l=e.sent,t.fikr_length=l.data.fikr,t.sharx=l.data.sharx.filter((function(t){return t.titlea})).slice(0,10),t.cinema_data=l.data.all.filter((function(t){return t.title})).slice(0,10),t.pay=l.data.pay,e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.error(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))()},fetchDataWithToken:function(t){var e=this;return Object(n.a)(regeneratorRuntime.mark((function l(){var n;return regeneratorRuntime.wrap((function(l){for(;;)switch(l.prev=l.next){case 0:return l.prev=0,l.next=3,_.a.get("https://api.uzdub.uz/user",{headers:{Authorization:"Bearer ".concat(t)}});case 3:n=l.sent,e.one_user=n.data,l.next=10;break;case 7:l.prev=7,l.t0=l.catch(0),console.error(l.t0);case 10:case"end":return l.stop()}}),l,null,[[0,7]])})))()},chiqish:function(){localStorage.clear(),window.location="/"},ProfilBosil:function(t){_.a.get("https://api.uzdub.uz/api/v1/cinema").then((function(e){if(e.data.filter((function(e){return e.id==t}))[0].looking){var l=t;localStorage.setItem("selectedItemData",JSON.stringify(l)),window.location="/watching"}else document.querySelector("#alert_modal").style="display:block",document.querySelector("#alert_text").innerHTML="Vaqtinchalik bloklangan...",setTimeout((function(){document.querySelector("#alert_modal").style="display:none"}),3e3)}))},postDataWithToken:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,data=new FormData,document.querySelector("#firstname").value?data.append("name",document.querySelector("#firstname").value):data.append("name",t.one_user.name),document.querySelector("#email2").value?data.append("email",document.querySelector("#email2").value):data.append("email",t.one_user.email),document.querySelector("#lastname").value?data.append("familiya",document.querySelector("#lastname").value):data.append("familiya",t.one_user.familiya),e.next=7,_.a.put("https://api.uzdub.uz/user_one/".concat(t.one_user.id),data,{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}});case 7:e.sent,t.fetchDataWithToken(localStorage.getItem("token")),document.querySelector("#alert_modal").style="display:block",setTimeout((function(){document.querySelector("#alert_modal").style="display:none"}),3e3),document.querySelector("#alert_text").innerHTML="Malumot yangilandi",e.next=20;break;case 14:e.prev=14,e.t0=e.catch(0),console.error(e.t0),document.querySelector("#alert_modal").style="display:block",setTimeout((function(){document.querySelector("#alert_modal").style="display:none"}),3e3),document.querySelector("#alert_text").innerHTML="Xatolik yuz berdi";case 20:case"end":return e.stop()}}),e,null,[[0,14]])})))()},reset_passwort:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(data=new FormData).append("old_password",document.querySelector("#oldpass").value),data.append("password",document.querySelector("#newpass").value),data.append("repit_password",document.querySelector("#confirmpass").value),_.a.put("https://api.uzdub.uz/reset/".concat(t.one_user.id),data,{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}}).then((function(t){document.querySelector("#alert_modal").style="display:block",setTimeout((function(){document.querySelector("#alert_modal").style="display:none"}),3e3),document.querySelector("#alert_text").innerHTML="Malumot yangilandi"})).catch((function(t){document.querySelector("#alert_modal").style="display:block",setTimeout((function(){document.querySelector("#alert_modal").style="display:none"}),3e3),document.querySelector("#alert_text").innerHTML="Xatolik yuz berdi"}));case 5:case"end":return e.stop()}}),e)})))()},AlertNone:function(){document.querySelector("#alert_modal").style="display:none"}},mounted:function(){if(this.one_user=JSON.parse(localStorage.getItem("user_data")),document.querySelector(".section--bg")){var t=document.querySelector(".section--bg");t.getAttribute("data-bg")&&(t.style.background="url(".concat(t.getAttribute("data-bg"),")"),t.style.backgroundPosition="center center",t.style.backgroundRepeat="no-repeat",t.style.backgroundSize="cover")}this.fetchData(),this.fetchDataWithToken(localStorage.getItem("token"))}},d=l(25),component=Object(d.a)(c,(function(){var t=this,e=t._self._c;return e("div",[t.cinema_data?e("div",[e("section",{staticClass:"section section--first section--bg",attrs:{"data-bg":"img/bg/section__bg.jpg"}},[e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-12"},[e("div",{staticClass:"section__wrap"},[e("h1",{staticClass:"section__title section__title--head"},[t._v("\n\t\t\t\t\t\t\t\tMening profilim\n\t\t\t\t\t\t\t")]),t._v(" "),e("ul",{staticClass:"breadcrumbs"},[e("li",{staticClass:"breadcrumbs__item"},[e("NuxtLink",{attrs:{to:"/"}},[t._v("Bosh sahifa")])],1),t._v(" "),e("li",{staticClass:"breadcrumbs__item breadcrumbs__item--active"},[t._v("\n\t\t\t\t\t\t\t\t\tProfil\n\t\t\t\t\t\t\t\t")])])])])])])]),t._v(" "),e("div",{staticClass:"content"},[e("div",{staticClass:"profile"},[e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-12"},[e("div",{staticClass:"profile__content"},[e("div",{staticClass:"profile__user"},[t._m(1),t._v(" "),e("div",{staticClass:"profile__meta"},[t.one_user?e("h3",{staticClass:"d-flex aligin-items-center justify-content-center"},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t"+t._s(t.one_user.name)+"\n\t\t\t\t\t\t\t\t\t\t\t"),t._m(2)]):t._e(),t._v(" "),t.one_user&&t.one_user.id?e("span",[t._v("UZDUB ID:"+t._s(t.one_user.id))]):t._e()])]),t._v(" "),t._m(3),t._v(" "),e("button",{staticClass:"profile__logout",attrs:{type:"button"},on:{click:function(e){return t.chiqish()}}},[e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}},[e("path",{attrs:{d:"M4,12a1,1,0,0,0,1,1h7.59l-2.3,2.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l4-4a1,1,0,0,0,.21-.33,1,1,0,0,0,0-.76,1,1,0,0,0-.21-.33l-4-4a1,1,0,1,0-1.42,1.42L12.59,11H5A1,1,0,0,0,4,12ZM17,2H7A3,3,0,0,0,4,5V8A1,1,0,0,0,6,8V5A1,1,0,0,1,7,4H17a1,1,0,0,1,1,1V19a1,1,0,0,1-1,1H7a1,1,0,0,1-1-1V16a1,1,0,0,0-2,0v3a3,3,0,0,0,3,3H17a3,3,0,0,0,3-3V5A3,3,0,0,0,17,2Z"}})]),t._v(" "),e("span",[t._v("CHIQISH")])])])])])])]),t._v(" "),e("div",{staticClass:"container"},[e("div",{staticClass:"tab-content"},[e("div",{staticClass:"tab-pane fade show active",attrs:{id:"tab-1",role:"tabpanel","aria-labelledby":"1-tab",tabindex:"0"}},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-12 col-sm-6 col-xl-3"},[e("div",{staticClass:"stats"},[e("span",[t._v("Obuna")]),t._v(" "),t.pay?e("p",[t._v("Premium")]):e("p",[t._v("Tekin")]),t._v(" "),e("img",{attrs:{src:"img/credit-card.svg",alt:""}})])]),t._v(" "),e("div",{staticClass:"col-12 col-sm-6 col-xl-3"},[e("div",{staticClass:"stats"},[e("span",[t._v("Ko'rilgan animelar")]),t._v(" "),t.cinema_data?e("p",[t._v(t._s(t.cinema_data.length))]):t._e(),t._v(" "),e("img",{attrs:{src:"img/film.svg",alt:""}})])]),t._v(" "),e("div",{staticClass:"col-12 col-sm-6 col-xl-3"},[e("div",{staticClass:"stats"},[e("span",[t._v("Sizning sharhlaringiz")]),t._v(" "),t.sharx?e("p",[t._v(t._s(t.sharx.length))]):t._e(),t._v(" "),e("img",{attrs:{src:"img/comments.svg",alt:""}})])]),t._v(" "),e("div",{staticClass:"col-12 col-sm-6 col-xl-3"},[e("div",{staticClass:"stats"},[e("span",[t._v("Sizning fikringiz")]),t._v(" "),e("p",[t._v(t._s(t.fikr_length))]),t._v(" "),e("img",{attrs:{src:"img/star-half-alt.svg",alt:""}})])]),t._v(" "),e("div",{staticClass:"col-12 col-xl-6"},[e("div",{staticClass:"dashbox"},[e("div",{staticClass:"dashbox__title"},[t._m(4),t._v(" "),e("div",{staticClass:"dashbox__wrap"},[e("NuxtLink",{staticClass:"dashbox__more",attrs:{to:"catalog"}},[t._v("Hammasi")])],1)]),t._v(" "),e("div",{staticClass:"dashbox__table-wrap dashbox__table-wrap--1"},[e("table",{staticClass:"dashbox__table"},[t._m(5),t._v(" "),e("tbody",t._l(t.cinema_data,(function(l){return e("tr",{key:l.id},[e("td",[e("div",{staticClass:"dashbox__table-text"},[t._v(t._s(l.id))])]),t._v(" "),e("td",[e("div",{staticClass:"dashbox__table-text",on:{click:function(e){return t.ProfilBosil(l.cinema_id)}}},[e("NuxtLink",{attrs:{to:""}},[t._v(t._s(l.title))])],1)]),t._v(" "),e("td",[1==l.appearance?e("div",{staticClass:"dashbox__table-text"},[t._v("Movie")]):t._e(),t._v(" "),2==l.appearance?e("div",{staticClass:"dashbox__table-text"},[t._v("Serial")]):t._e(),t._v(" "),3==l.appearance?e("div",{staticClass:"dashbox__table-text"},[t._v("TV Serial")]):t._e(),t._v(" "),4==l.appearance?e("div",{staticClass:"dashbox__table-text"},[t._v("Cartoon")]):t._e()]),t._v(" "),e("td",[e("div",{staticClass:"dashbox__table-text dashbox__table-text--rate"},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t"+t._s(l.mark.toFixed(1))+"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t")])])])})),0)])])])]),t._v(" "),e("div",{staticClass:"col-12 col-xl-6"},[e("div",{staticClass:"dashbox"},[t._m(6),t._v(" "),e("div",{staticClass:"dashbox__table-wrap dashbox__table-wrap--2"},[e("table",{staticClass:"dashbox__table"},[t._m(7),t._v(" "),e("tbody",t._l(t.sharx,(function(l){return e("tr",{key:l.id},[e("td",[e("div",{staticClass:"dashbox__table-text"},[t._v(t._s(l.id))])]),t._v(" "),e("td",[e("div",{staticClass:"dashbox__table-text"},[e("NuxtLink",{attrs:{to:"Watching"}},[t._v(t._s(l.titlea))])],1)]),t._v(" "),e("td",[e("div",{staticClass:"dashbox__table-text"},[t._v(t._s(l.title))])]),t._v(" "),e("td",[e("div",{staticClass:"dashbox__table-text dashbox__table-text--rate"},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t"+t._s(l.rating)+"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t")])])])})),0)])])])])])]),t._v(" "),t._m(8),t._v(" "),e("div",{staticClass:"modal fade",attrs:{id:"plan-modal",tabindex:"-1","aria-labelledby":"plan-modal","aria-hidden":"true"}},[e("div",{staticClass:"modal-dialog modal-dialog-centered"},[e("div",{staticClass:"modal-content"},[e("div",{staticClass:"modal__content"},[e("button",{staticClass:"modal__close",attrs:{type:"button","data-bs-dismiss":"modal","aria-label":"Close"}},[e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}},[e("path",{attrs:{d:"M13.41,12l6.3-6.29a1,1,0,1,0-1.42-1.42L12,10.59,5.71,4.29A1,1,0,0,0,4.29,5.71L10.59,12l-6.3,6.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L12,13.41l6.29,6.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Z"}})])]),t._v(" "),e("form",{staticClass:"modal__form",attrs:{action:"#"}},[e("h4",{staticClass:"modal__title"},[t._v("Tarifni tanlang")]),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),e("div",{staticClass:"sign__group"},[e("label",{staticClass:"sign__label"},[t._v("Payment method:")]),t._v(" "),e("ul",{staticClass:"sign__radio"},[t._m(12),t._v(" "),t._m(13),t._v(" "),t._m(14),t._v(" "),e("div",{staticClass:"modal fade",attrs:{id:"plan-modal",tabindex:"-1","aria-labelledby":"plan-modal","aria-hidden":"true"}},[e("div",{staticClass:"modal-dialog modal-dialog-centered"},[e("div",{staticClass:"modal-content"},[e("div",{staticClass:"modal__content"},[e("button",{staticClass:"modal__close",attrs:{type:"button","data-bs-dismiss":"modal","aria-label":"Close"}},[e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}},[e("path",{attrs:{d:"M13.41,12l6.3-6.29a1,1,0,1,0-1.42-1.42L12,10.59,5.71,4.29A1,1,0,0,0,4.29,5.71L10.59,12l-6.3,6.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L12,13.41l6.29,6.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Z"}})])]),t._v(" "),t._m(15)])])])])])]),t._v(" "),t._m(16)])])])])]),t._v(" "),e("div",{staticClass:"tab-pane fade",attrs:{id:"tab-3",role:"tabpanel","aria-labelledby":"3-tab",tabindex:"0"}},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-12 col-lg-6"},[e("form",{staticClass:"sign__form sign__form--profile",attrs:{action:"#"}},[e("div",{staticClass:"row"},[t._m(17),t._v(" "),e("div",{staticClass:"col-12 col-md-6 col-lg-12 col-xl-6"},[e("div",{staticClass:"sign__group"},[e("label",{staticClass:"sign__label",attrs:{for:"username"}},[t._v("Tizimga kirish")]),t._v(" "),e("input",{staticClass:"sign__input",attrs:{id:"username",type:"text",name:"username",disabled:"",placeholder:"Foydalanuvchi ".concat(t.one_user.id)}})])]),t._v(" "),e("div",{staticClass:"col-12 col-md-6 col-lg-12 col-xl-6"},[e("div",{staticClass:"sign__group"},[e("label",{staticClass:"sign__label",attrs:{for:"email"}},[t._v("Email")]),t._v(" "),e("input",{staticClass:"sign__input",attrs:{id:"email2",type:"text",name:"email",placeholder:t.one_user.email}})])]),t._v(" "),e("div",{staticClass:"col-12 col-md-6 col-lg-12 col-xl-6"},[e("div",{staticClass:"sign__group"},[e("label",{staticClass:"sign__label",attrs:{for:"firstname"}},[t._v("Ism")]),t._v(" "),e("input",{staticClass:"sign__input",attrs:{id:"firstname",type:"text",name:"firstname",placeholder:t.one_user.name}})])]),t._v(" "),e("div",{staticClass:"col-12 col-md-6 col-lg-12 col-xl-6"},[e("div",{staticClass:"sign__group"},[e("label",{staticClass:"sign__label",attrs:{for:"lastname"}},[t._v("Familiya")]),t._v(" "),e("input",{staticClass:"sign__input",attrs:{id:"lastname",type:"text",name:"lastname",placeholder:t.one_user.familiya}})])]),t._v(" "),e("div",{staticClass:"col-12"},[e("button",{staticClass:"sign__btn sign__btn--small",attrs:{type:"button"},on:{click:t.postDataWithToken}},[e("span",[t._v("SAQLASH")])])])])])]),t._v(" "),e("div",{staticClass:"col-12 col-lg-6"},[e("form",{staticClass:"sign__form sign__form--profile",attrs:{action:"#"}},[e("div",{staticClass:"row"},[t._m(18),t._v(" "),t._m(19),t._v(" "),t._m(20),t._v(" "),t._m(21),t._v(" "),e("div",{staticClass:"col-12"},[e("button",{staticClass:"sign__btn sign__btn--small",attrs:{type:"button"},on:{click:t.reset_passwort}},[e("span",[t._v("O'ZGARISH")])])])])])])])])])])]),t._v(" "),e("div",{staticClass:"modal fade",attrs:{id:"plan-modal",tabindex:"-1","aria-labelledby":"plan-modal","aria-hidden":"true"}},[e("div",{staticClass:"modal-dialog modal-dialog-centered"},[e("div",{staticClass:"modal-content"},[e("div",{staticClass:"modal__content"},[e("button",{staticClass:"modal__close",attrs:{type:"button","data-bs-dismiss":"modal","aria-label":"Close"}},[e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}},[e("path",{attrs:{d:"M13.41,12l6.3-6.29a1,1,0,1,0-1.42-1.42L12,10.59,5.71,4.29A1,1,0,0,0,4.29,5.71L10.59,12l-6.3,6.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L12,13.41l6.29,6.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Z"}})])]),t._v(" "),t._m(22)])])])]),t._v(" "),e("div",{staticClass:"toast align-items-center",attrs:{id:"alert_modal",role:"alert","aria-live":"assertive","aria-atomic":"false"}},[e("div",{staticClass:"d-flex"},[e("div",{staticClass:"toast-body",attrs:{id:"alert_text"}},[t._v("\n\t\t\t\t\tHello, world! This is a toast message.\n\t\t\t\t")]),t._v(" "),e("button",{staticClass:"btn-close me-2 m-auto",attrs:{type:"button","data-bs-dismiss":"toast","aria-label":"Close"},on:{click:function(e){return t.AlertNone()}}})])])]):e("div",{staticClass:"lodaing_page"},[t._m(0)])])}),[function(){var t=this._self._c;return t("div",{staticClass:"loading"},[t("span",[this._v("UZDUB")])])},function(){var t=this._self._c;return t("div",{staticClass:"profile__avatar"},[t("img",{attrs:{src:"/img/user.svg",alt:""}})])},function(){var t=this._self._c;return t("span",{staticClass:"moder-user"},[t("img",{attrs:{src:"img/verify.svg",alt:""}})])},function(){var t=this,e=t._self._c;return e("ul",{staticClass:"nav nav-tabs content__tabs content__tabs--profile",attrs:{id:"content__tabs",role:"tablist"}},[e("li",{staticClass:"nav-item",attrs:{role:"presentation"}},[e("button",{staticClass:"active",attrs:{id:"1-tab","data-bs-toggle":"tab","data-bs-target":"#tab-1",type:"button",role:"tab","aria-controls":"tab-1","aria-selected":"true"}},[t._v("\n\t\t\t\t\t\t\t\t\t\t\tProfil\n\t\t\t\t\t\t\t\t\t\t")])]),t._v(" "),e("li",{staticClass:"nav-item",attrs:{role:"presentation"}},[e("button",{attrs:{id:"3-tab","data-bs-toggle":"tab","data-bs-target":"#tab-3",type:"button",role:"tab","aria-controls":"tab-3","aria-selected":"false"}},[t._v("\n\t\t\t\t\t\t\t\t\t\t\tSOZLAMALAR\n\t\t\t\t\t\t\t\t\t\t")])])])},function(){var t=this._self._c;return t("h3",[t("img",{attrs:{src:"img/film.svg",alt:""}}),this._v("Oxirgi koʻrishlar")])},function(){var t=this,e=t._self._c;return e("thead",[e("tr",[e("th",[t._v("ID")]),t._v(" "),e("th",[t._v("ANIME NOMI")]),t._v(" "),e("th",[t._v("KATEGORIYA")]),t._v(" "),e("th",[t._v("REYTING")])])])},function(){var t=this._self._c;return t("div",{staticClass:"dashbox__title"},[t("h3",[t("img",{attrs:{src:"img/star-half-alt.svg",alt:""}}),this._v("Eng so'nggi\n\t\t\t\t\t\t\t\t\t\t\tfikringiz\n\t\t\t\t\t\t\t\t\t\t")])])},function(){var t=this,e=t._self._c;return e("thead",[e("tr",[e("th",[t._v("ID")]),t._v(" "),e("th",[t._v("ANIME NOMI")]),t._v(" "),e("th",[t._v("MUALLIF")]),t._v(" "),e("th",[t._v("REYTING")])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"tab-pane fade",attrs:{id:"tab-2",role:"tabpanel","aria-labelledby":"2-tab",tabindex:"0"}},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-12 col-md-6 col-lg-4 order-md-2 order-lg-1"},[e("div",{staticClass:"plan"},[e("h3",{staticClass:"plan__title"},[t._v("Standart")]),t._v(" "),e("span",{staticClass:"plan__price"},[t._v("50 000 so'm")]),t._v(" "),e("ul",{staticClass:"plan__list"},[e("li",[t._v("1 oylik obuna")]),t._v(" "),e("li",[t._v("0% chegirma")]),t._v(" "),e("li",[t._v("0 so'm tejaysiz")])]),t._v(" "),e("button",{staticClass:"plan__btn",attrs:{type:"button","data-bs-toggle":"modal","data-bs-target":"#plan-modal"}},[e("span",[t._v("obuna bo'lish")])])])]),t._v(" "),e("div",{staticClass:"col-12 col-lg-4 order-md-1 order-lg-2"},[e("div",{staticClass:"plan plan--premium"},[e("h3",{staticClass:"plan__title"},[t._v("Premium")]),t._v(" "),e("span",{staticClass:"plan__price"},[t._v("135 000 so'm")]),t._v(" "),e("ul",{staticClass:"plan__list"},[e("li",[t._v("3 oylik obuna")]),t._v(" "),e("li",[t._v("10% chegirma")]),t._v(" "),e("li",[t._v("15 000 so'm tejaysiz")])]),t._v(" "),e("button",{staticClass:"plan__btn",attrs:{type:"button","data-bs-toggle":"modal","data-bs-target":"#plan-modal"}},[e("span",[t._v("obuna bo'lish")])])])]),t._v(" "),e("div",{staticClass:"col-12 col-md-6 col-lg-4 order-md-3 order-lg-3"},[e("div",{staticClass:"plan"},[e("h3",{staticClass:"plan__title"},[t._v("PRO")]),t._v(" "),e("span",{staticClass:"plan__price"},[t._v("510 000 so'm")]),t._v(" "),e("ul",{staticClass:"plan__list"},[e("li",[t._v("6 oylik obuna")]),t._v(" "),e("li",[t._v("15% chegirma")]),t._v(" "),e("li",[t._v("90 000 so'm tejaysiz")])]),t._v(" "),e("button",{staticClass:"plan__btn",attrs:{type:"button","data-bs-toggle":"modal","data-bs-target":"#plan-modal"}},[e("span",[t._v("obuna bo'lish")])])])])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"sign__group"},[e("label",{staticClass:"sign__label",attrs:{for:"fullname"}},[t._v("Ism")]),t._v(" "),e("input",{staticClass:"sign__input",attrs:{id:"fullname",type:"text",name:"name",placeholder:"To'liq ism"}})])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"sign__group"},[e("label",{staticClass:"sign__label",attrs:{for:"email"}},[t._v("Email")]),t._v(" "),e("input",{staticClass:"sign__input",attrs:{id:"email",type:"text",name:"email",placeholder:"misol@domain.com"}})])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"sign__group"},[e("label",{staticClass:"sign__label",attrs:{for:"value"}},[t._v("Tarifni tanlang:")]),t._v(" "),e("select",{staticClass:"sign__select",attrs:{name:"value",id:"value"}},[e("option",{attrs:{value:"20"}},[t._v("Standart - 50 000 so'm")]),t._v(" "),e("option",{attrs:{value:"20"}},[t._v("Premium - 135 000 so'm")]),t._v(" "),e("option",{attrs:{value:"40"}},[t._v("PRO - 510 000 so'm")])])])},function(){var t=this,e=t._self._c;return e("li",[e("input",{attrs:{id:"type1",type:"radio",name:"type",checked:""}}),t._v(" "),e("label",{attrs:{for:"type1"}},[t._v("Visa")])])},function(){var t=this,e=t._self._c;return e("li",[e("input",{attrs:{id:"type2",type:"radio",name:"type"}}),t._v(" "),e("label",{attrs:{for:"type2"}},[t._v("Mastercard")])])},function(){var t=this,e=t._self._c;return e("li",[e("input",{attrs:{id:"type3",type:"radio",name:"type"}}),t._v(" "),e("label",{attrs:{for:"type3"}},[t._v("Paypal")])])},function(){var t=this,e=t._self._c;return e("form",{staticClass:"modal__form",attrs:{action:"#"}},[e("h4",{staticClass:"modal__title"},[t._v("Tarifni tanlang")]),t._v(" "),e("div",{staticClass:"sign__group"},[e("label",{staticClass:"sign__label",attrs:{for:"fullname"}},[t._v("Ism")]),t._v(" "),e("input",{staticClass:"sign__input",attrs:{id:"fullname",type:"text",name:"name",placeholder:"To'liq ism"}})]),t._v(" "),e("div",{staticClass:"sign__group"},[e("label",{staticClass:"sign__label",attrs:{for:"email"}},[t._v("Email")]),t._v(" "),e("input",{staticClass:"sign__input",attrs:{id:"email",type:"text",name:"email",placeholder:"misol@domain.com"}})]),t._v(" "),e("div",{staticClass:"sign__group"},[e("label",{staticClass:"sign__label",attrs:{for:"value"}},[t._v("Tarifni tanlang:")]),t._v(" "),e("select",{staticClass:"sign__select",attrs:{name:"value",id:"value"}},[e("option",{attrs:{value:"20"}},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tStandart - 50 000 so'm\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t")]),t._v(" "),e("option",{attrs:{value:"20"}},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tPremium - 135 000 so'm\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t")]),t._v(" "),e("option",{attrs:{value:"40"}},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tPRO - 510 000 so'm\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t")])])]),t._v(" "),e("div",{staticClass:"sign__group"},[e("label",{staticClass:"sign__label"},[t._v("Payment method:")]),t._v(" "),e("ul",{staticClass:"sign__radio"},[e("li",[e("input",{attrs:{id:"type1",type:"radio",name:"type",checked:""}}),t._v(" "),e("label",{attrs:{for:"type1"}},[t._v("Visa")])]),t._v(" "),e("li",[e("input",{attrs:{id:"type2",type:"radio",name:"type"}}),t._v(" "),e("label",{attrs:{for:"type2"}},[t._v("Mastercard")])]),t._v(" "),e("li",[e("input",{attrs:{id:"type3",type:"radio",name:"type"}}),t._v(" "),e("label",{attrs:{for:"type3"}},[t._v("Paypal")])])])]),t._v(" "),e("button",{staticClass:"sign__btn sign__btn--modal",attrs:{type:"button"}},[e("span",[t._v("Davom eting")])])])},function(){var t=this._self._c;return t("button",{staticClass:"sign__btn sign__btn--modal",attrs:{type:"button"}},[t("span",[this._v("Davom eting")])])},function(){var t=this._self._c;return t("div",{staticClass:"col-12"},[t("h4",{staticClass:"sign__title"},[this._v("Profil tafsilotlari")])])},function(){var t=this._self._c;return t("div",{staticClass:"col-12"},[t("h4",{staticClass:"sign__title"},[this._v("Parolni o'zgartirish")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"col-12 col-md-6 col-lg-12 col-xl-6"},[e("div",{staticClass:"sign__group"},[e("label",{staticClass:"sign__label",attrs:{for:"oldpass"}},[t._v("Eski parol")]),t._v(" "),e("input",{staticClass:"sign__input",attrs:{id:"oldpass",type:"password",name:"oldpass"}})])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"col-12 col-md-6 col-lg-12 col-xl-6"},[e("div",{staticClass:"sign__group"},[e("label",{staticClass:"sign__label",attrs:{for:"newpass"}},[t._v("Yangi parol")]),t._v(" "),e("input",{staticClass:"sign__input",attrs:{id:"newpass",type:"password",name:"newpass"}})])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"col-12 col-md-6 col-lg-12 col-xl-6"},[e("div",{staticClass:"sign__group"},[e("label",{staticClass:"sign__label",attrs:{for:"confirmpass"}},[t._v("Yangi parolni tasdiqlang")]),t._v(" "),e("input",{staticClass:"sign__input",attrs:{id:"confirmpass",type:"password",name:"confirmpass"}})])])},function(){var t=this,e=t._self._c;return e("form",{staticClass:"modal__form",attrs:{action:"#"}},[e("h4",{staticClass:"modal__title"},[t._v("Tarifni tanlang")]),t._v(" "),e("div",{staticClass:"sign__group"},[e("label",{staticClass:"sign__label",attrs:{for:"fullname"}},[t._v("Ism")]),t._v(" "),e("input",{staticClass:"sign__input",attrs:{id:"fullname",type:"text",name:"name",placeholder:"To'liq ism"}})]),t._v(" "),e("div",{staticClass:"sign__group"},[e("label",{staticClass:"sign__label",attrs:{for:"email"}},[t._v("Email")]),t._v(" "),e("input",{staticClass:"sign__input",attrs:{id:"email",type:"text",name:"email",placeholder:"misol@domain.com"}})]),t._v(" "),e("div",{staticClass:"sign__group"},[e("label",{staticClass:"sign__label",attrs:{for:"value"}},[t._v("Tarifni tanlang:")]),t._v(" "),e("select",{staticClass:"sign__select",attrs:{name:"value",id:"value"}},[e("option",{attrs:{value:"20"}},[t._v("Standart - 50 000 so'm")]),t._v(" "),e("option",{attrs:{value:"20"}},[t._v("Premium - 135 000 so'm")]),t._v(" "),e("option",{attrs:{value:"40"}},[t._v("PRO - 510 000 so'm")])])]),t._v(" "),e("div",{staticClass:"sign__group"},[e("label",{staticClass:"sign__label"},[t._v("Payment method:")]),t._v(" "),e("ul",{staticClass:"sign__radio"},[e("li",[e("input",{attrs:{id:"type1",type:"radio",name:"type",checked:""}}),t._v(" "),e("label",{attrs:{for:"type1"}},[t._v("Visa")])]),t._v(" "),e("li",[e("input",{attrs:{id:"type2",type:"radio",name:"type"}}),t._v(" "),e("label",{attrs:{for:"type2"}},[t._v("Mastercard")])]),t._v(" "),e("li",[e("input",{attrs:{id:"type3",type:"radio",name:"type"}}),t._v(" "),e("label",{attrs:{for:"type3"}},[t._v("Paypal")])])])]),t._v(" "),e("button",{staticClass:"sign__btn sign__btn--modal",attrs:{type:"button"}},[e("span",[t._v("Davom eting")])])])}],!1,null,null,null);e.default=component.exports}}]);