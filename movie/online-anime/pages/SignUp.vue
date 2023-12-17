<template>
  <div class="sign section--bg" data-bg="img/bg/section__bg.jpg">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="sign__content">
            <!-- registration form -->
            <form action="#" class="sign__form">
              <NuxtLink to="/" class="sign__logo">
                <img src="img/logo.svg" alt="" />
              </NuxtLink>

              <div class="sign__group">
                <input type="text" class="sign__input" placeholder="Ism" />
              </div>

              <div class="sign__group">
                <input type="text" class="sign__input" placeholder="Email" />
              </div>

              <div class="sign__group">
                <input type="password" class="sign__input" placeholder="Parol" />
              </div>

              <div class="sign__group sign__group--checkbox">
                <input id="remember" name="remember" type="checkbox" checked="checked" />
                <label for="remember">Men
                  <NuxtLink to="privacy">Maxfiylik siyosatiga</NuxtLink>
                  roziman
                </label>
              </div>

              <button @click="postData" class="sign__btn" type="button">
                <span>Ro'yxatdan o'tish</span>
              </button>

              <span class="sign__text">Hisobingiz bormi?
                <NuxtLink to="signin">Kirish!</NuxtLink>
              </span>
            </form>
            <!-- registration form -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'SignUpPage',
methods:{
  async postData(){
  var data=new  FormData()
  data.append('name',document.querySelectorAll('.sign__input')[0].value)
  data.append('email',document.querySelectorAll('.sign__input')[1].value)
  data.append('password',document.querySelectorAll('.sign__input')[2].value)
  try {
        const response = await axios.post('https://api.uzdub.uz/register', data);
        console.log(response.data);
        localStorage.setItem('token',response.data.token)
    
        localStorage.setItem("user_data",JSON.stringify(response.data.data[0]))
        window.location="/profile"
  
      } catch (error) {
        alert("xato kiritildi")
        console.error(error)  }
}
},
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
}
</script>
