<template>
  <div>
    <div class="sign section--bg" data-bg="img/bg/section__bg.jpg">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="sign__content">
              <!-- authorization form -->
              <form action="#" class="sign__form">
                <NuxtLink to="index" class="sign__logo">
                  <img src="img/logo.svg" alt="" />
                </NuxtLink>

                <div class="sign__group">
                  <input type="text" class="sign__input" placeholder="Email" />
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
                    <NuxtLink to="privacy">Maxfiylik siyosatiga</NuxtLink>
                    roziman</label
                  >
                </div>

                <button class="sign__btn" type="button">
                  <span>Qayta tiklash</span>
                </button>

                <span class="sign__text"
                  >Biz sizning elektron pochtangizga parol yuboramiz</span
                >
              </form>
              <!-- end authorization form -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Faq',

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
