<template>
  <div class="sign section--bg" data-bg="img/bg/section__bg.jpg">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="sign__content">
            <!-- authorization form -->
            <form action="#" class="sign__form">
              <NuxtLink to="/" class="sign__logo">
                <img src="img/logo.svg" alt="" />
              </NuxtLink>

              <div class="sign__group">
                <input type="text" id="email_data" class="sign__input" placeholder="Email" />
              </div>

              <div class="sign__group">
                <input
                  id="password_data" 
                  type="password"
                  class="sign__input"
                  placeholder="Parol"
                />
              </div>

              <div class="sign__group sign__group--checkbox">
                <input
                  id="remember"
                  name="remember"
                  type="checkbox"
                  checked="checked"
                />
                <label for="remember">Meni eslaysizmi</label>
              </div>

              <button  @click="postData" class="sign__btn" type="button">
                <span>Kirish</span>
              </button>

              <span class="sign__text"
                >Hisobingiz yo'qmi?
                <NuxtLink to="signup">Ro'yxatdan o'tish!</NuxtLink></span
              >

              <span class="sign__text"
                ><NuxtLink to="forgot">Parolni unutdingizmi?</NuxtLink></span
              >
            </form>
            <!-- end authorization form -->
          </div>
        </div>
      </div>
    </div>
    <div  id="alert_modal" class="toast align-items-center" role="alert" aria-live="assertive" aria-atomic="false">
  					<div class="d-flex">
    					<div id="alert_text" class="toast-body">
      						Hello, world! This is a toast message.
    					</div>
    					<button type="button" class="btn-close me-2 m-auto" data-bs-dismiss="toast" @click="AlertNone()" aria-label="Close"></button>
        </div>
        
	</div>
  </div>
</template>
<script>
import axios from 'axios';
export default {
  name: 'SignInPage',

  mounted() {
    if (document.querySelector('.section--bg')) {
      var mainBg = document.querySelector('.section--bg')

      if (mainBg.getAttribute('data-bg')) {
        mainBg.style.background = `url(${mainBg.getAttribute('data-bg')})`
        mainBg.style.backgroundPosition = 'center center'
        mainBg.style.backgroundRepeat = 'no-repeat'
        mainBg.style.backgroundSize = 'cover'
      }
    }
  },
  methods: {
    async postData() {
      var data=new FormData()
     data.append("email",document.querySelector('#email_data').value)
     data.append("password",document.querySelector('#password_data').value)
      try {
        const response = await axios.post('https://api.uzdub.uz/login', data);
        console.log(response.data);
        localStorage.setItem('token',response.data.token)
        const user= await axios.get('https://api.uzdub.uz/user', {
          headers: {
            Authorization: `Bearer ${response.data.token}`
          }
        });
        localStorage.setItem("user_data",JSON.stringify(user.data))
        window.location="/profile"
      } catch (error) {
        document.querySelector("#alert_modal").style="display:block"
        setTimeout(()=>{
				document.querySelector('#alert_modal').style = 'display:none'
				},3000)
			  document.querySelector("#alert_text").innerHTML="Xato kiritildi"
        console.error(error)  }
    },
    AlertNone(){
			document.querySelector("#alert_modal").style="display:none"
		}
  }
}
</script>
