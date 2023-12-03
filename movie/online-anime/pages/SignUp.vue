<template>
  <div class="sign section--bg" data-bg="img/bg/section__bg.jpg">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="sign__content">
            <!-- registration form -->
            <form action="#" class="sign__form">
              <NuxtLink href="/" class="sign__logo">
                <img src="img/logo.svg" alt="" />
              </NuxtLink>

              <div class="sign__group">
                <input type="text" class="sign__input" placeholder="Ism" />
              </div>

              <div class="sign__group">
                <input type="text" class="sign__input" placeholder="Email" />
              </div>

              <div class="sign__group">
                <input
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
                <label for="remember"
                  >Men
                  <NuxtLink href="privacy">Maxfiylik siyosatiga</NuxtLink>
                  roziman</label
                >
              </div>

              <button class="sign__btn" type="button">
                <span>Ro'yxatdan o'tish</span>
              </button>

              <span class="sign__text"
                >Hisobingiz bormi?
                <NuxtLink href="signin">Kirish!</NuxtLink></span
              >
            </form>
            <!-- registration form -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SignUpPage',

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
