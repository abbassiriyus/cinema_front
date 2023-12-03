<template>
  <div>
    <!-- details -->
    <section class="section section--details">
      <!-- details background -->
      <div class="section__details-bg" data-bg="img/bg/details__bg.jpg"></div>
      <!-- end details background -->

      <!-- details content -->
      <div class="container">
        <div class="row">
          <!-- title -->
          <div class="col-12">
            <h1 class="section__title section__title--head">
              I Dream in Another Language
            </h1>
          </div>
          <!-- end title -->

          <!-- content -->
          <div class="col-12 col-xl-6">
            <div class="item item--details">
              <!-- card cover -->
              <div class="item__cover">
                <img src="img/covers/14.png" alt="" />
              </div>
              <!-- end card cover -->

              <!-- card content -->
              <div class="item__content">
                <div class="item__wrap">
                  <span class="item__rate">8.4</span>

                  <ul class="item__list">
                    <li>Full HD</li>
                    <li>16+</li>
                  </ul>
                </div>

                <ul class="item__meta">
                  <li>
                    <span>Genre:</span> <NuxtLink to="#">Action</NuxtLink>
                    <NuxtLink to="#">Triler</NuxtLink>
                  </li>
                  <li><span>Running time:</span> 120 min</li>
                  <li><span>Country:</span> <NuxtLink to="#">USA</NuxtLink></li>
                  <li><span>Premiere:</span> 05.02.2023</li>
                </ul>

                <ul class="item__meta item__meta--second">
                  <li>
                    <span>Director:</span>
                    <NuxtLink to="actor">Louis Leterrier</NuxtLink>
                  </li>
                  <li>
                    <span>Actors:</span> <NuxtLink to="actor">Son Gun</NuxtLink>
                    <NuxtLink to="actor">Michelle Rodriguez</NuxtLink>
                    <NuxtLink to="actor">Jordana Brewster</NuxtLink>
                    <NuxtLink to="actor">Tyreese Gibson</NuxtLink>
                    <NuxtLink to="actor">Charlize Theron</NuxtLink>
                  </li>
                </ul>
              </div>

              <div
                class="item__description item__description--details item__description--tvseries"
              >
                <p>
                  When a renowned archaeologist goes missing, his daughter sets
                  out on a perilous journey to the heart of the Amazon
                  rainforest to find him. Along the way, she discovers a hidden
                  city and a dangerous conspiracy that threatens the very
                  balance of power in the world. With the help of a charming
                  rogue, she must navigate treacherous terrain and outwit
                  powerful enemies to save her father and uncover the secrets of
                  the lost city. A down-on-his-luck boxer struggles to make ends
                  meet while raising his young son. When an old friend offers
                  him a chance to make some quick cash by fighting in an illegal
                  underground boxing tournament, he sees it as his last shot at
                  redemption. But as the stakes get higher and the fights get
                  more brutal, he must confront his own demons and find the
                  strength to win not just for himself, but for his son.
                </p>
                <p>
                  A brilliant scientist discovers a way to harness the power of
                  the ocean's currents to create a new, renewable energy source.
                  But when her groundbreaking technology falls into the wrong
                  hands, she must race against time to stop it from being used
                  for evil. Along the way, she must navigate complex political
                  alliances and confront her own past to save the world from
                  disaster.
                </p>
              </div>
              <!-- end card content -->
            </div>
          </div>
          <!-- end content -->

          <!-- player -->
          <div class="col-12 col-xl-6">
            <div class="video" style="position: relative">
              <iframe
                width="100%"
                height="100%"
                src="https://kinescope.io/embed/sppLFtmKoUar14Q2y737wg"
                allow="autoplay; fullscreen; picture-in-picture; encrypted-media;"
                frameborder="0"
                allowfullscreen
                style="position: absolute; top: 0; left: 0; right: 0; bottom: 0"
              >
              </iframe>
            </div>

            <div class="section__item-filter">
              <select
                class="section__item-select"
                name="season"
                id="filter__season"
              >
                <option value="0">1 - Mavsum</option>
                <option value="1">2 - Mavsum</option>
                <option value="2">3 - Mavsum</option>
                <option value="3">4 - Mavsum</option>
                <option value="4">5 - Mavsum</option>
              </select>

              <select
                class="section__item-select"
                name="series"
                id="filter__series"
              >
                <option value="0">1 - qism</option>
                <option value="1">2 - qism</option>
                <option value="2">3 - qism</option>
                <option value="3">4 - qism</option>
                <option value="4">5 - qism</option>
                <option value="5">6 - qism</option>
                <option value="6">7 - qism</option>
                <option value="7">8 - qism</option>
                <option value="8">9 - qism</option>
                <option value="9">1 - qism0</option>
                <option value="10">1 - qism1</option>
                <option value="11">1 - qism2</option>
              </select>
            </div>
          </div>
          <!-- end player -->
        </div>
      </div>
      <!-- end details content -->
    </section>
    <!-- end details -->
    <!-- Root element of PhotoSwipe. Must have class pswp. -->
    <div class="pswp" tabindex="-1" role="dialog" aria-hidden="true">
      <!-- Background of PhotoSwipe. 
		It's a separate element, as animating opacity is faster than rgba(). -->
      <div class="pswp__bg"></div>

      <!-- Slides wrapper with overflow:hidden. -->
      <div class="pswp__scroll-wrap">
        <!-- Container that holds slides. PhotoSwipe keeps only 3 slides in DOM to save memory. -->
        <!-- don't modify these 3 pswp__item elements, data is added later on. -->
        <div class="pswp__container">
          <div class="pswp__item"></div>
          <div class="pswp__item"></div>
          <div class="pswp__item"></div>
        </div>

        <!-- Default (PhotoSwipeUI_Default) interface on top of sliding area. Can be changed. -->
        <div class="pswp__ui pswp__ui--hidden">
          <div class="pswp__top-bar">
            <!--  Controls are self-explanatory. Order can be changed. -->

            <div class="pswp__counter"></div>

            <button
              class="pswp__button pswp__button--close"
              title="Close (Esc)"
            ></button>

            <button
              class="pswp__button pswp__button--fs"
              title="Toggle fullscreen"
            ></button>

            <!-- Preloader -->
            <div class="pswp__preloader">
              <div class="pswp__preloader__icn">
                <div class="pswp__preloader__cut">
                  <div class="pswp__preloader__donut"></div>
                </div>
              </div>
            </div>
          </div>

          <button
            class="pswp__button pswp__button--arrow--left"
            title="Previous (arrow left)"
          ></button>

          <button
            class="pswp__button pswp__button--arrow--right"
            title="Next (arrow right)"
          ></button>

          <div class="pswp__caption">
            <div class="pswp__caption__center"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailsPage',

  mounted() {
    if (document.querySelector('.section__details-bg')) {
      var mainBg = document.querySelector('.section__details-bg')

      if (mainBg.getAttribute('data-bg')) {
        mainBg.style.background = `url(${mainBg.getAttribute('data-bg')})`
        mainBg.style.backgroundPosition = 'center center'
        mainBg.style.backgroundRepeat = 'no-repeat'
        mainBg.style.backgroundSize = 'cover'
      }
    }
    /* tv series */
    if (document.querySelector('#filter__season')) {
      new SlimSelect({
        select: '#filter__season',
        settings: {
          showSearch: false,
        },
      })
    }

    if (document.querySelector('#filter__series')) {
      new SlimSelect({
        select: '#filter__series',
        settings: {
          showSearch: false,
        },
      })
    }

    // Scrol
    var Scrollbar = window.Scrollbar
    if (document.querySelector('.item__description--details')) {
      Scrollbar.init(document.querySelector('.item__description--details'), {
        damping: 0.1,
        renderByPixels: true,
        alwaysShowTracks: true,
        continuousScrolling: true,
      })
    }
  },
}
</script>
