(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{322:function(t,e,n){"use strict";n.r(e);var r=n(12),o=(n(69),n(51),n(45)),l=n.n(o),c={name:"SignInPage",mounted:function(){if(document.querySelector(".section--bg")){var t=document.querySelector(".section--bg");t.getAttribute("data-bg")&&(t.style.background="url(".concat(t.getAttribute("data-bg"),")"),t.style.backgroundPosition="center center",t.style.backgroundRepeat="no-repeat",t.style.backgroundSize="cover")}},methods:{postData:function(){return Object(r.a)(regeneratorRuntime.mark((function t(){var data,e,n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return(data=new FormData).append("email",document.querySelector("#email_data").value),data.append("password",document.querySelector("#password_data").value),t.prev=3,t.next=6,l.a.post("https://api.uzdub.uz/login",data);case 6:return e=t.sent,console.log(e.data),localStorage.setItem("token",e.data.token),t.next=11,l.a.get("https://api.uzdub.uz/user",{headers:{Authorization:"Bearer ".concat(e.data.token)}});case 11:n=t.sent,localStorage.setItem("user_data",JSON.stringify(n.data)),window.location="/profile",t.next=22;break;case 16:t.prev=16,t.t0=t.catch(3),document.querySelector("#alert_modal").style="display:block",setTimeout((function(){document.querySelector("#alert_modal").style="display:none"}),3e3),document.querySelector("#alert_text").innerHTML="Xato kiritildi",console.error(t.t0);case 22:case"end":return t.stop()}}),t,null,[[3,16]])})))()},AlertNone:function(){document.querySelector("#alert_modal").style="display:none"}}},d=n(25),component=Object(d.a)(c,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"sign section--bg",attrs:{"data-bg":"img/bg/section__bg.jpg"}},[e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-12"},[e("div",{staticClass:"sign__content"},[e("form",{staticClass:"sign__form",attrs:{action:"#"}},[e("NuxtLink",{staticClass:"sign__logo",attrs:{to:"/"}},[e("img",{attrs:{src:"img/logo.svg",alt:""}})]),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),e("button",{staticClass:"sign__btn",attrs:{type:"button"},on:{click:t.postData}},[e("span",[t._v("Kirish")])]),t._v(" "),e("span",{staticClass:"sign__text"},[t._v("Hisobingiz yo'qmi?\n                "),e("NuxtLink",{attrs:{to:"signup"}},[t._v("Ro'yxatdan o'tish!")])],1),t._v(" "),e("span",{staticClass:"sign__text"},[e("NuxtLink",{attrs:{to:"forgot"}},[t._v("Parolni unutdingizmi?")])],1)],1)])])])]),t._v(" "),e("div",{staticClass:"toast align-items-center",attrs:{id:"alert_modal",role:"alert","aria-live":"assertive","aria-atomic":"false"}},[e("div",{staticClass:"d-flex"},[e("div",{staticClass:"toast-body",attrs:{id:"alert_text"}},[t._v("\n      \t\t\t\t\t\tHello, world! This is a toast message.\n    \t\t\t\t\t")]),t._v(" "),e("button",{staticClass:"btn-close me-2 m-auto",attrs:{type:"button","data-bs-dismiss":"toast","aria-label":"Close"},on:{click:function(e){return t.AlertNone()}}})])])])}),[function(){var t=this._self._c;return t("div",{staticClass:"sign__group"},[t("input",{staticClass:"sign__input",attrs:{type:"text",id:"email_data",placeholder:"Email"}})])},function(){var t=this._self._c;return t("div",{staticClass:"sign__group"},[t("input",{staticClass:"sign__input",attrs:{id:"password_data",type:"password",placeholder:"Parol"}})])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"sign__group sign__group--checkbox"},[e("input",{attrs:{id:"remember",name:"remember",type:"checkbox",checked:"checked"}}),t._v(" "),e("label",{attrs:{for:"remember"}},[t._v("Meni eslaysizmi")])])}],!1,null,null,null);e.default=component.exports}}]);