<template>
  <div>
    <!-- page title -->
    <section
      class="section section--first section--bg"
      data-bg="img/bg/section__bg.jpg"
    >
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="section__wrap">
              <!-- section title -->
              <h1 class="section__title section__title--head">
                Yordam markazi
              </h1>
              <!-- end section title -->

              <!-- breadcrumbs -->
              <ul class="breadcrumbs">
                <li class="breadcrumbs__item">
                  <NuxtLink to="index.html">Bosh sahifa</NuxtLink>
                </li>
                <li class="breadcrumbs__item breadcrumbs__item--active">
                  Yordam markazi
                </li>
              </ul>
              <!-- end breadcrumbs -->
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- end page title -->

    <!-- faq -->
    <div class="section">
      <div class="container">
        <div class="row">
          <!-- accordion -->
          <div class="col-12">
            <div class="accordion" id="accordion">
              <div class="row">
                <div class="col-12 col-lg-6">
                  <div class="accordion__card">
                    <button
                      class="collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse1"
                      aria-expanded="false"
                      aria-controls="collapse1"
                    >
                      Nega video yuklanmayapti?
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                        >
                          <path d="M19,11H5a1,1,0,0,0,0,2H19a1,1,0,0,0,0-2Z" />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                        >
                          <path d="M19,11H5a1,1,0,0,0,0,2H19a1,1,0,0,0,0-2Z" />
                        </svg>
                      </span>
                    </button>

                    <div
                      id="collapse1"
                      class="collapse"
                      data-bs-parent="#accordion"
                    >
                      <p>
                        Saytgadi videolarni hech qanday kelishuvlarsiz noqonuniy
                        ravishta boshqa ijtimoiy tarmoqlarga tarqalmasligini
                        ta'minlash ushun videolarni yuklab olish cheklangan.
                      </p>
                    </div>
                  </div>

                  <div class="accordion__card">
                    <button
                      class="collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse2"
                      aria-expanded="false"
                      aria-controls="collapse2"
                    >
                      Nega video boshidan boshlanmayapti?
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                        >
                          <path d="M19,11H5a1,1,0,0,0,0,2H19a1,1,0,0,0,0-2Z" />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                        >
                          <path d="M19,11H5a1,1,0,0,0,0,2H19a1,1,0,0,0,0-2Z" />
                        </svg>
                      </span>
                    </button>

                    <div
                      id="collapse2"
                      class="collapse"
                      data-bs-parent="#accordion"
                    >
                      <p>
                        Videolar to'xtagan joydan davom etadi. Bu real hayotda
                        vaqtingizni tejash uchun o'rnatilgan. Ko'pgina
                        foydalanuvchilar ushbu tanlovni ma'qullashadi.
                      </p>
                    </div>
                  </div>

                  <div class="accordion__card">
                    <button
                      class="collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse3"
                      aria-expanded="false"
                      aria-controls="collapse3"
                    >
                      Nima uchun ovoz buziladi?
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                        >
                          <path d="M19,11H5a1,1,0,0,0,0,2H19a1,1,0,0,0,0-2Z" />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                        >
                          <path d="M19,11H5a1,1,0,0,0,0,2H19a1,1,0,0,0,0-2Z" />
                        </svg>
                      </span>
                    </button>

                    <div
                      id="collapse3"
                      class="collapse"
                      data-bs-parent="#accordion"
                    >
                      <p>
                        Videolar yuqori sifatda tayming qilingan. Videoning
                        ovozida muammo bo'lsa, video saytga joylashtirilmaydi.
                        Shuning uchun, foydalanayotgan qurilmangizni tekshiring.
                      </p>
                    </div>
                  </div>

                  <div class="accordion__card">
                    <button
                      class="collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse4"
                      aria-expanded="false"
                      aria-controls="collapse4"
                    >
                      Video nima uchun qotib qoladi yoki tasodifiy toʻxtab
                      qoladi?
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                        >
                          <path d="M19,11H5a1,1,0,0,0,0,2H19a1,1,0,0,0,0-2Z" />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                        >
                          <path d="M19,11H5a1,1,0,0,0,0,2H19a1,1,0,0,0,0-2Z" />
                        </svg>
                      </span>
                    </button>

                    <div
                      id="collapse4"
                      class="collapse"
                      data-bs-parent="#accordion"
                    >
                      <p>
                        Videolarning tasodifiy muzlashi yoki to'xtab qolishi
                        quyidagi sabablarga ko'ra sodir bo'lishi mumkin:
                        <br />
                        1 - Sizning hududingizda Internet tarmog'i yaxshi
                        ishlamayapti.
                        <br />
                        2 - Internet tezligi siz tanlagan video sifati (ULTRA
                        HD, HD 1080) uchun yetarli emas.
                      </p>
                    </div>
                  </div>
                </div>

                <div class="col-12 col-lg-6">
                  <div class="accordion__card">
                    <button
                      class="collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse5"
                      aria-expanded="false"
                      aria-controls="collapse5"
                    >
                      Video sifatini o'zgartirsam, hech narsa sodir bo'lmaydi.
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                        >
                          <path d="M19,11H5a1,1,0,0,0,0,2H19a1,1,0,0,0,0-2Z" />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                        >
                          <path d="M19,11H5a1,1,0,0,0,0,2H19a1,1,0,0,0,0-2Z" />
                        </svg>
                      </span>
                    </button>

                    <div
                      id="collapse5"
                      class="collapse"
                      data-bs-parent="#accordion"
                    >
                      <p>
                        Sayt mukammal ishlab chiqilgan. Agar siz video sifatini
                        o'zgartirsangiz, hech narsa bo'lmasa. Sizda internet
                        tezligi past. Shuning uchun saytdagi videolar sizning
                        internet tezligingizga moslashib video sifatini
                        belgilaydi.
                      </p>
                    </div>
                  </div>

                  <div class="accordion__card">
                    <button
                      class="collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse6"
                      aria-expanded="false"
                      aria-controls="collapse6"
                    >
                      Qanday brauzerlar qo'llab-quvvatlanadi?
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                        >
                          <path d="M19,11H5a1,1,0,0,0,0,2H19a1,1,0,0,0,0-2Z" />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                        >
                          <path d="M19,11H5a1,1,0,0,0,0,2H19a1,1,0,0,0,0-2Z" />
                        </svg>
                      </span>
                    </button>

                    <div
                      id="collapse6"
                      class="collapse"
                      data-bs-parent="#accordion"
                    >
                      <p>
                        Sayt mukammal ishlab chiqilgan. Sayt har qanday
                        brauzerni, har qanday qurilmani qo'llab-quvvatlaydi, siz
                        istalgan mamlakatdan tomosha qilishingiz mumkin.
                      </p>
                    </div>
                  </div>

                  <div class="accordion__card">
                    <button
                      class="collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse7"
                      aria-expanded="false"
                      aria-controls="collapse7"
                    >
                      Maxfiyligimga qanday munosabatdasiz?
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                        >
                          <path d="M19,11H5a1,1,0,0,0,0,2H19a1,1,0,0,0,0-2Z" />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                        >
                          <path d="M19,11H5a1,1,0,0,0,0,2H19a1,1,0,0,0,0-2Z" />
                        </svg>
                      </span>
                    </button>

                    <div
                      id="collapse7"
                      class="collapse"
                      data-bs-parent="#accordion"
                    >
                      <p>
                        Foydalanuvchilarning maxfiyligiga alohida e'tibor
                        beriladi. Saytdagi ma'lumotlaringizni hech kim ko'ra
                        olmaydi va shuning bilan birga siz ham boshqalarning
                        ma'lumotlarini ko'ra olmaysiz. Sayt maxfiylikni himoya
                        qilishning yuqori darajasiga ega.
                      </p>
                    </div>
                  </div>

                  <div class="accordion__card">
                    <button
                      class="collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse8"
                      aria-expanded="false"
                      aria-controls="collapse8"
                    >
                      Siz bilan qanday bog'lanishim mumkin?
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                        >
                          <path d="M19,11H5a1,1,0,0,0,0,2H19a1,1,0,0,0,0-2Z" />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                        >
                          <path d="M19,11H5a1,1,0,0,0,0,2H19a1,1,0,0,0,0-2Z" />
                        </svg>
                      </span>
                    </button>

                    <div
                      id="collapse8"
                      class="collapse"
                      data-bs-parent="#accordion"
                    >
                      <p>
                        Men bilan bog'lanishingiz uchun mening ijtimoiy
                        tarmoqlarim saytning pastki qismida joylashgan.
                        <NuxtLink to="#footer">Bog'lanish</NuxtLink>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- end accordion -->
        </div>
      </div>
    </div>
    <!-- end faq -->
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
