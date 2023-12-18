<template>
  <div>
    <div v-if="!catalog" class="lodaing_page">
	<div  class="loading">
    <span>Loading</span>
  </div></div>
    <div v-else>
    <!-- page title -->
    <section
      class="section section--first section--bg"
      data-bg="/img/bg/section__bg.jpg"
    >
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="section__wrap">
              <!-- section title -->
              <h1 class="section__title section__title--head">Katalog</h1>
              <!-- end section title -->

              <!-- breadcrumbs -->
              <ul class="breadcrumbs">
                <li class="breadcrumbs__item">
                  <NuxtLink to="/">Bosh sahifa</NuxtLink>
                </li>
                <li class="breadcrumbs__item breadcrumbs__item--active">
                  Katalog
                </li>
              </ul>
              <!-- end breadcrumbs -->
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- end page title -->

    <!-- filter -->
    <div class="filter">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="filter__content">
              <!-- menu btn -->
              <button class="filter__menu" type="button">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path
                    d="M19,2H5A3,3,0,0,0,2,5V6.17a3,3,0,0,0,.25,1.2l0,.06a2.81,2.81,0,0,0,.59.86L9,14.41V21a1,1,0,0,0,.47.85A1,1,0,0,0,10,22a1,1,0,0,0,.45-.11l4-2A1,1,0,0,0,15,19V14.41l6.12-6.12a2.81,2.81,0,0,0,.59-.86l0-.06A3,3,0,0,0,22,6.17V5A3,3,0,0,0,19,2ZM13.29,13.29A1,1,0,0,0,13,14v4.38l-2,1V14a1,1,0,0,0-.29-.71L5.41,8H18.59ZM20,6H4V5A1,1,0,0,1,5,4H19a1,1,0,0,1,1,1Z"
                  ></path></svg
                >Filter
              </button>
              <!-- end menu btn -->

              <!-- filter desk -->
              <div class="filter__items">
                <select
                  v-if="janr"
                  id="filter__genre"
                  class="filter__select"
                  name="genre"
                >
                  <option value="0">Barcha janrlar</option>
                  <option v-for="item in janr" :value="item.id" :key="item.id">
                    {{ item.title }}
                  </option>
                </select>

                <select
                  class="filter__select"
                  name="quality"
                  id="filter__quality"
                >
                  <option value="0">Har qanday sifat</option>
                  <option value="1">Full HD</option>
                  <option value="2">HD 720</option>
                  <option value="3">420 P</option>
                </select>

                <select class="filter__select" name="rate" id="filter__rate">
                  <option value="0">Har qanday reyting</option>
                  <option value="1">3.0 yulduz</option>
                  <option value="2">5.0 yulduz</option>
                  <option value="3">7.0 yulduz</option>
                  <option value="4">Oltin yulduz</option>
                </select>
              </div>
              <!-- end filter desk -->

              <!-- apply btn -->
              <button @click="Allfilter()" class="filter__btn" type="button">
                <span>Filtr</span>
              </button>
              <!-- end apply btn -->

              <!-- amount -->
              <span class="filter__amount" v-if="catalog"
                >jami {{ catalog.length }} ta film</span
              >
              <!-- end amount -->
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- end filter -->

    <!-- catalog -->
    <div class="section section--catalog">
      <div class="container">
        <div class="row">
          <!-- item -->
          <div
            v-for="(item, index) in catalog"
            :key="item.id"
            v-if="index < select_page * page_card &&
              index >= (select_page - 1) * page_card
            "
            class="col-6 col-sm-4 col-lg-3 col-xl-2"
          >
            <div class="item">
              <div @click="handleClick(item.id)" class="item__cover">
                <img
                  v-if="item.images && item.images[0].image"
                  :src="item.images[0].image"
                  alt=""
                />
                <span class="item__play">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path
                      d="M18.54,9,8.88,3.46a3.42,3.42,0,0,0-5.13,3V17.58A3.42,3.42,0,0,0,7.17,21a3.43,3.43,0,0,0,1.71-.46L18.54,15a3.42,3.42,0,0,0,0-5.92Zm-1,4.19L7.88,18.81a1.44,1.44,0,0,1-1.42,0,1.42,1.42,0,0,1-.71-1.23V6.42a1.42,1.42,0,0,1,.71-1.23A1.51,1.51,0,0,1,7.17,5a1.54,1.54,0,0,1,.71.19l9.66,5.58a1.42,1.42,0,0,1,0,2.46Z"
                    />
                  </svg>
                </span>
              </div>
              <div class="item__content">
                <h3 class="item__title">
                  <div @click="handleClick(item.id)" >{{ item.title }}</div>
                </h3>
                <span class="item__category">
                  <NuxtLink
                    v-for="item2 in item.janrlar"
                    :key="item2.id"
                    to="#"
                    >{{ item2.title }}</NuxtLink
                  >
                </span>
                <span class="item__rate">{{ item.mark }}</span>
              </div>
            </div>
          </div>
          <!-- end item -->
        </div>

        <div class="row">
          <!-- paginator -->
          <div class="col-12">
            <div class="section__paginator">
              <!-- amount -->
              <span class="section__paginator-pages" v-if="catalog"
                >jami {{ catalog.length }} ta film</span
              >
              <!-- end amount -->

              <ul class="section__paginator-list">
                <li>
                  <NuxtLink to="#">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <path
                        d="M17,11H9.41l3.3-3.29a1,1,0,1,0-1.42-1.42l-5,5a1,1,0,0,0-.21.33,1,1,0,0,0,0,.76,1,1,0,0,0,.21.33l5,5a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42L9.41,13H17a1,1,0,0,0,0-2Z"
                      />
                    </svg>
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink to="#">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <path
                        d="M17.92,11.62a1,1,0,0,0-.21-.33l-5-5a1,1,0,0,0-1.42,1.42L14.59,11H7a1,1,0,0,0,0,2h7.59l-3.3,3.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l5-5a1,1,0,0,0,.21-.33A1,1,0,0,0,17.92,11.62Z"
                      />
                    </svg>
                  </NuxtLink>
                </li>
              </ul>

              <ul class="paginator">
                <li class="paginator__item paginator__item--prev">
                  <button @click="count_minus()">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      enable-background="new 0 0 24 24"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M8.5,12.8l5.7,5.6c0.4,0.4,1,0.4,1.4,0c0,0,0,0,0,0c0.4-0.4,0.4-1,0-1.4l-4.9-5l4.9-5c0.4-0.4,0.4-1,0-1.4c-0.2-0.2-0.4-0.3-0.7-0.3c-0.3,0-0.5,0.1-0.7,0.3l-5.7,5.6C8.1,11.7,8.1,12.3,8.5,12.8C8.5,12.7,8.5,12.7,8.5,12.8z"
                      />
                    </svg>
                  </button>
                </li>
                <div v-for="item in length_page" :key="item">
                  <li v-if="item != select_page" class="paginator__item">
                    <button
                      @click="get_page(item)"
                      v-if="
                        item == 1 ||
                        item + 1 == select_page ||
                        item - 1 == select_page
                      "
                    >
                      {{ item }}
                    </button>
                    <button
                      @click="get_page(item)"
                      v-else-if="item == length_page.length"
                    >
                      {{ item }}
                    </button>
                    <span
                      @click="get_page(item)"
                      v-else-if="item - select_page == 2"
                      >...</span
                    >
                    <span
                      @click="get_page(item)"
                      v-else-if="select_page - item == 2"
                      >...</span
                    >
                  </li>
                  <li v-else class="paginator__item paginator__item--active">
                    <button @click="get_page(item)">{{ item }}</button>
                  </li>
                </div>

                <li class="paginator__item"></li>

                <li class="paginator__item paginator__item--next">
                  <button @click="count_plus()">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <path
                        d="M15.54,11.29,9.88,5.64a1,1,0,0,0-1.42,0,1,1,0,0,0,0,1.41l4.95,5L8.46,17a1,1,0,0,0,0,1.41,1,1,0,0,0,.71.3,1,1,0,0,0,.71-.3l5.66-5.65A1,1,0,0,0,15.54,11.29Z"
                      />
                    </svg>
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <!-- end paginator -->
        </div>
      </div>
    </div>
    <!-- end catalog -->

    <!-- now watching -->
    <section class="section section--dark">
      <div class="container">
        <div class="row">
          <!-- section title -->
          <div class="col-12">
            <h2 class="section__title section__title--carousel">
              Ko'p ko'rilgan
            </h2>
          </div>
          <!-- end section title -->

          <!-- carousel -->
          <div class="col-12">
            <div class="section__carousel splide splide--content">
              <div class="splide__arrows">
                <button class="splide__arrow splide__arrow--prev" type="button">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path
                      d="M17,11H9.41l3.3-3.29a1,1,0,1,0-1.42-1.42l-5,5a1,1,0,0,0-.21.33,1,1,0,0,0,0,.76,1,1,0,0,0,.21.33l5,5a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42L9.41,13H17a1,1,0,0,0,0-2Z"
                    />
                  </svg>
                </button>
                <button class="splide__arrow splide__arrow--next" type="button">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path
                      d="M17.92,11.62a1,1,0,0,0-.21-.33l-5-5a1,1,0,0,0-1.42,1.42L14.59,11H7a1,1,0,0,0,0,2h7.59l-3.3,3.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l5-5a1,1,0,0,0,.21-.33A1,1,0,0,0,17.92,11.62Z"
                    />
                  </svg>
                </button>
              </div>

              <div class="splide__track">
                <ul class="splide__list">
                  <li
                    v-for="item in top_look"
                    :key="item.id"
                    class="splide__slide"
                  >
                    <div class="item item--carousel">
                      <div  @click="handleClick(item.id)" class="item__cover">
                        <img
                          v-if="item.images && item.images[0].image"
                          :src="item.images[0].image"
                          alt=""
                        />
                        <span class="item__play">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                          >
                            <path
                              d="M18.54,9,8.88,3.46a3.42,3.42,0,0,0-5.13,3V17.58A3.42,3.42,0,0,0,7.17,21a3.43,3.43,0,0,0,1.71-.46L18.54,15a3.42,3.42,0,0,0,0-5.92Zm-1,4.19L7.88,18.81a1.44,1.44,0,0,1-1.42,0,1.42,1.42,0,0,1-.71-1.23V6.42a1.42,1.42,0,0,1,.71-1.23A1.51,1.51,0,0,1,7.17,5a1.54,1.54,0,0,1,.71.19l9.66,5.58a1.42,1.42,0,0,1,0,2.46Z"
                            />
                          </svg>
                        </span>
                      </div>
                      <div class="item__content">
                        <h3 class="item__title">
                          <div @click="handleClick(item.id)">{{ item.title }}</div>
                        </h3>
                        <span class="item__category">
                          <NuxtLink
                            v-for="item2 in item.janrlar"
                            :key="item2.id"
                            to="#"
                            >{{ item2.title }}</NuxtLink
                          >
                        </span>
                        <span class="item__rate">{{ item.mark }}</span>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <!-- end carousel -->
        </div>
      </div>
    </section>
    <!-- end now watching -->

    <!-- mobile filter -->
    <div class="mfilter">
      <div class="mfilter__head">
        <h6 class="mfilter__title">Filter</h6>

        <button class="mfilter__close" type="button">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path
              d="M13.41,12l4.3-4.29a1,1,0,1,0-1.42-1.42L12,10.59,7.71,6.29A1,1,0,0,0,6.29,7.71L10.59,12l-4.3,4.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L12,13.41l4.29,4.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Z"
            />
          </svg>
        </button>
      </div>

      <div class="mfilter__select-wrap">
        <div class="sign__group">
          <select class="filter__select" name="mgenre" id="mfilter__genre">
            <option value="0">Barcha janrlar</option>
            <option v-for="item in janr" :key="item.id" :value="item.id">
              {{ item.title }}
            </option>
          </select>
        </div>

        <div class="sign__group">
          <select class="filter__select" name="mquality" id="mfilter__quality">
            <option value="0">Har qanday sifat</option>
            <option value="1">Full HD</option>
            <option value="2">HD 720</option>
            <option value="3">420 P</option>
          </select>
        </div>

        <div class="sign__group">
          <select class="filter__select" name="mrate" id="mfilter__rate">
            <option value="0">Har qanday reyting</option>
            <option value="1">3.0 yulduz</option>
            <option value="2">5.0 yulduz</option>
            <option value="3">7.0 yulduz</option>
            <option value="4">Oltin yulduz</option>
          </select>
        </div>
      </div>

      <button class="mfilter__apply" type="button"><span>Filter</span></button>
    </div>
    <!-- end mobile filter -->
  </div></div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'CatalogPage',
  data() {
    return {
      catalog: null,
      janr: [],
      top_look: null,
      select_page: 1,
      page_card: 12,
      length_page: [],
    }
  },
  methods: {
    async getData() {
      try {
        const catalog = await axios.get('https://api.uzdub.uz/api/v1/cinema')
        const category = await axios.get('https://api.uzdub.uz/api/v1/janr')
        this.top_look = catalog.data.sort(
          (a, b) => a.more_loking - b.more_loking
        )
        this.catalog = catalog.data
        this.janr = category.data
        var for_w = catalog.data.length / this.page_card
        var daad = []
        for (let i = 0; i < for_w; i++) {
          daad.push(i + 1)
        }
        this.length_page = daad
      } catch (error) {
        console.error(error)
        throw error
      }
    },
    get_page(id) {
      this.select_page = id
    },
    count_plus() {
      if (this.length_page.length > this.select_page) {
        this.select_page++
      }
    },
    count_minus() {
      if (this.select_page > 1) {
        this.select_page--
      }
    },
    filter_janr(data) {
      console.log(data)
      var value1 = document.querySelector('#filter__genre').value
      var send_data=[]
      for (let i = 0; i < data.length; i++) {
        var push=false
        for (let j = 0; j < data[i].janrlar.length; j++) {
           if(value1==data[i].janrlar[j].id || value1==0){
             push=true
           }
        }
     if(push){
      send_data.push(data[i])
      }
}
if(value1==0){
send_data=data
}
  return send_data
    },

    filter_mark(data) {
var value1=document.querySelector('#filter__rate').value
   var mark_f
   if(value1==0){
mark_f=0
   }
   if(value1==1){
mark_f=3
}
if(value1==2){
mark_f=5
}
if(value1==3){
mark_f=7
}
if(value1==4){
mark_f=9
}
var send_data=[]
console.log(mark_f)
for(let i=0 ; i< data.length ; i++){
  if(data[i].mark>=mark_f){
  send_data.push(data[i])
  }
}
return send_data

    },
filter_vid(data) {
     var value1=document.querySelector('#filter__quality').value
     var mark_f
   if(value1==0){
mark_f=0
   }
   if(value1==1){
mark_f="Full HD"
}
if(value1==2){
mark_f="HD 720"
}
if(value1==3){
mark_f="420 P"
}
var send_data=[]
for(let i=0 ; i< data.length ; i++){
  if(data[i].type==mark_f){
    send_data.push(data[i])
  }
}
if(value1==0){
  send_data=data
}
return send_data
    },
    Allfilter() {
      axios.get('https://api.uzdub.uz/api/v1/cinema').then(res => {
      var data1=this.filter_vid(res.data)
      var data2=this.filter_janr(data1)
      var data3=this.filter_mark(data2)
      this.catalog=data3
    })
  },

    allfunction() {
      if (document.querySelector('#filter__genre')) {
        new SlimSelect({
          select: '#filter__genre',
        })
      }

      if (document.querySelector('#filter__quality')) {
        new SlimSelect({
          select: '#filter__quality',
          settings: {
            showSearch: false,
          },
        })
      }

      if (document.querySelector('#filter__rate')) {
        new SlimSelect({
          select: '#filter__rate',
          settings: {
            showSearch: false,
          },
        })
      }
      if (document.querySelector('#mfilter__genre')) {
        new SlimSelect({
          select: '#mfilter__genre',
        })
      }

      if (document.querySelector('#mfilter__quality')) {
        new SlimSelect({
          select: '#mfilter__quality',
          settings: {
            showSearch: false,
          },
        })
      }

      if (document.querySelector('#mfilter__rate')) {
        new SlimSelect({
          select: '#mfilter__rate',
          settings: {
            showSearch: false,
          },
        })
      }
      if (document.querySelector('.section__carousel')) {
        const elms = document.getElementsByClassName('section__carousel')
        for (let i = 0; i < elms.length; i++) {
          new Splide(elms[i], {
            type: 'loop',
            perPage: 6,
            drag: true,
            pagination: false,
            autoWidth: false,
            autoHeight: false,
            speed: 800,
            gap: 24,
            arrows: true,
            focus: 0,
            breakpoints: {
              575: {
                gap: 24,
                pagination: true,
                perPage: 2,
              },
              767: {
                gap: 24,
                pagination: true,
                perPage: 3,
              },
              991: {
                pagination: true,
                perPage: 3,
                gap: 24,
              },
              1199: {
                pagination: true,
                perPage: 4,
                gap: 24,
              },
            },
          }).mount()
        }
      }
      if (document.querySelector('.section--bg')) {
        const mainBg = document.querySelector('.section--bg')

        if (mainBg.getAttribute('data-bg')) {
          mainBg.style.background = `url(${mainBg.getAttribute('data-bg')})`
          mainBg.style.backgroundPosition = 'center center'
          mainBg.style.backgroundRepeat = 'no-repeat'
          mainBg.style.backgroundSize = 'cover'
        }
      }
    },
    handleClick(index) {
      const selectedItem =index;
      localStorage.setItem('selectedItemData', JSON.stringify(selectedItem));
	  window.location="/watching"
    },
  },
  mounted() {
    this.getData()
    setTimeout(() => {
      this.allfunction()
    }, 2000)
  },
}
</script>
