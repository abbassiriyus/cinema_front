<template>
  <div>
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
                <select id="filter__genre" class="filter__select" name="genre">
                  <option value="0">Barcha janrlar</option>
                  <option value="1">Action/Adventure</option>
                  <option value="2">Animals</option>
                  <option value="3">Animation</option>
                  <option value="4">Biography</option>
                  <option value="5">Comedy</option>
                  <option value="6">Cooking</option>
                  <option value="7">yulduzce</option>
                  <option value="8">Documentary</option>
                  <option value="9">Drama</option>
                  <option value="10">Education</option>
                  <option value="11">Entertainment</option>
                  <option value="12">Family</option>
                  <option value="13">Fantasy</option>
                  <option value="14">History</option>
                  <option value="15">Horror</option>
                  <option value="16">Independent</option>
                  <option value="17">International</option>
                  <option value="18">Kids</option>
                  <option value="19">Medical</option>
                  <option value="20">Military/War</option>
                  <option value="21">Music</option>
                  <option value="22">Mystery/Crime</option>
                  <option value="23">Nature</option>
                  <option value="24">Paranormal</option>
                  <option value="25">Politics</option>
                  <option value="26">Racing</option>
                  <option value="27">Romance</option>
                  <option value="28">Sci-Fi/Horror</option>
                  <option value="29">Science</option>
                  <option value="30">Science Fiction</option>
                  <option value="31">Science/Nature</option>
                  <option value="32">Spanish</option>
                  <option value="33">Travel</option>
                  <option value="34">Western</option>
                </select>

                <select
                  class="filter__select"
                  name="quality"
                  id="filter__quality"
                >
                  <option value="0">Har qanday sifat</option>
                  <option value="1">HD 1080</option>
                  <option value="2">HD 720</option>
                  <option value="2">420 P</option>
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
              <button class="filter__btn" type="button">
                <span>Filtr</span>
              </button>
              <!-- end apply btn -->

              <!-- amount -->
              <span class="filter__amount">169 tadan 12 tasi</span>
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
          <div class="col-6 col-sm-4 col-lg-3 col-xl-2">
            <div class="item">
              <NuxtLink to="watching" class="item__cover">
                <img src="img/covers/7.png" alt="" />
                <span class="item__play">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path
                      d="M18.54,9,8.88,3.46a3.42,3.42,0,0,0-5.13,3V17.58A3.42,3.42,0,0,0,7.17,21a3.43,3.43,0,0,0,1.71-.46L18.54,15a3.42,3.42,0,0,0,0-5.92Zm-1,4.19L7.88,18.81a1.44,1.44,0,0,1-1.42,0,1.42,1.42,0,0,1-.71-1.23V6.42a1.42,1.42,0,0,1,.71-1.23A1.51,1.51,0,0,1,7.17,5a1.54,1.54,0,0,1,.71.19l9.66,5.58a1.42,1.42,0,0,1,0,2.46Z"
                    />
                  </svg>
                </span>
              </NuxtLink>
              <div class="item__content">
                <h3 class="item__title">
                  <NuxtLink to="watching">The Lost Key</NuxtLink>
                </h3>
                <span class="item__category">
                  <NuxtLink to="#">Action</NuxtLink>
                  <NuxtLink to="#">Triler</NuxtLink>
                </span>
                <span class="item__rate">8.4</span>
              </div>
            </div>
          </div>
          <!-- end item -->

          <!-- item -->
          <div class="col-6 col-sm-4 col-lg-3 col-xl-2">
            <div class="item">
              <NuxtLink to="watching" class="item__cover">
                <img src="img/covers/8.png" alt="" />
                <span class="item__play">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path
                      d="M18.54,9,8.88,3.46a3.42,3.42,0,0,0-5.13,3V17.58A3.42,3.42,0,0,0,7.17,21a3.43,3.43,0,0,0,1.71-.46L18.54,15a3.42,3.42,0,0,0,0-5.92Zm-1,4.19L7.88,18.81a1.44,1.44,0,0,1-1.42,0,1.42,1.42,0,0,1-.71-1.23V6.42a1.42,1.42,0,0,1,.71-1.23A1.51,1.51,0,0,1,7.17,5a1.54,1.54,0,0,1,.71.19l9.66,5.58a1.42,1.42,0,0,1,0,2.46Z"
                    />
                  </svg>
                </span>
              </NuxtLink>
              <div class="item__content">
                <h3 class="item__title">
                  <NuxtLink to="watching">Red Sky at Night</NuxtLink>
                </h3>
                <span class="item__category">
                  <NuxtLink to="#">Comedy</NuxtLink>
                </span>
                <span class="item__rate">7.1</span>
              </div>
            </div>
          </div>
          <!-- end item -->

          <!-- item -->
          <div class="col-6 col-sm-4 col-lg-3 col-xl-2">
            <div class="item">
              <NuxtLink to="watching" class="item__cover">
                <img src="img/covers/9.png" alt="" />
                <span class="item__play">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path
                      d="M18.54,9,8.88,3.46a3.42,3.42,0,0,0-5.13,3V17.58A3.42,3.42,0,0,0,7.17,21a3.43,3.43,0,0,0,1.71-.46L18.54,15a3.42,3.42,0,0,0,0-5.92Zm-1,4.19L7.88,18.81a1.44,1.44,0,0,1-1.42,0,1.42,1.42,0,0,1-.71-1.23V6.42a1.42,1.42,0,0,1,.71-1.23A1.51,1.51,0,0,1,7.17,5a1.54,1.54,0,0,1,.71.19l9.66,5.58a1.42,1.42,0,0,1,0,2.46Z"
                    />
                  </svg>
                </span>
              </NuxtLink>
              <div class="item__content">
                <h3 class="item__title">
                  <NuxtLink to="watching">The Forgotten Road</NuxtLink>
                </h3>
                <span class="item__category">
                  <NuxtLink to="#">Romance</NuxtLink>
                  <NuxtLink to="#">Drama</NuxtLink>
                  <NuxtLink to="#">Music</NuxtLink>
                </span>
                <span class="item__rate">6.3</span>
              </div>
            </div>
          </div>
          <!-- end item -->

          <!-- item -->
          <div class="col-6 col-sm-4 col-lg-3 col-xl-2">
            <div class="item">
              <NuxtLink to="watching" class="item__cover">
                <div
                  class="d-flex aligin-items-center justify-content-center premium-icon"
                >
                  <img src="img/USD.svg" alt="" />
                </div>
                <img src="img/covers/10.png" alt="" />
                <span class="item__play">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path
                      d="M18.54,9,8.88,3.46a3.42,3.42,0,0,0-5.13,3V17.58A3.42,3.42,0,0,0,7.17,21a3.43,3.43,0,0,0,1.71-.46L18.54,15a3.42,3.42,0,0,0,0-5.92Zm-1,4.19L7.88,18.81a1.44,1.44,0,0,1-1.42,0,1.42,1.42,0,0,1-.71-1.23V6.42a1.42,1.42,0,0,1,.71-1.23A1.51,1.51,0,0,1,7.17,5a1.54,1.54,0,0,1,.71.19l9.66,5.58a1.42,1.42,0,0,1,0,2.46Z"
                    />
                  </svg>
                </span>
              </NuxtLink>
              <div class="item__content">
                <h3 class="item__title">
                  <NuxtLink to="watching">Dark Horizons</NuxtLink>
                </h3>
                <span class="item__category">
                  <NuxtLink to="#">Comedy</NuxtLink>
                  <NuxtLink to="#">Drama</NuxtLink>
                </span>
                <span class="item__rate">7.9</span>
              </div>
            </div>
          </div>
          <!-- end item -->

          <!-- item -->
          <div class="col-6 col-sm-4 col-lg-3 col-xl-2">
            <div class="item">
              <NuxtLink to="watching" class="item__cover">
                <img src="img/covers/11.png" alt="" />
                <span class="item__play">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path
                      d="M18.54,9,8.88,3.46a3.42,3.42,0,0,0-5.13,3V17.58A3.42,3.42,0,0,0,7.17,21a3.43,3.43,0,0,0,1.71-.46L18.54,15a3.42,3.42,0,0,0,0-5.92Zm-1,4.19L7.88,18.81a1.44,1.44,0,0,1-1.42,0,1.42,1.42,0,0,1-.71-1.23V6.42a1.42,1.42,0,0,1,.71-1.23A1.51,1.51,0,0,1,7.17,5a1.54,1.54,0,0,1,.71.19l9.66,5.58a1.42,1.42,0,0,1,0,2.46Z"
                    />
                  </svg>
                </span>
              </NuxtLink>
              <div class="item__content">
                <h3 class="item__title">
                  <NuxtLink to="watching">Echoes of Yesterday</NuxtLink>
                </h3>
                <span class="item__category">
                  <NuxtLink to="#">Action</NuxtLink>
                  <NuxtLink to="#">Triler</NuxtLink>
                </span>
                <span class="item__rate">8.4</span>
              </div>
            </div>
          </div>
          <!-- end item -->

          <!-- item -->
          <div class="col-6 col-sm-4 col-lg-3 col-xl-2">
            <div class="item">
              <NuxtLink to="watching" class="item__cover">
                <div
                  class="d-flex aligin-items-center justify-content-center premium-icon"
                >
                  <img src="img/USD.svg" alt="" />
                </div>
                <img src="img/covers/12.png" alt="" />
                <span class="item__play">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path
                      d="M18.54,9,8.88,3.46a3.42,3.42,0,0,0-5.13,3V17.58A3.42,3.42,0,0,0,7.17,21a3.43,3.43,0,0,0,1.71-.46L18.54,15a3.42,3.42,0,0,0,0-5.92Zm-1,4.19L7.88,18.81a1.44,1.44,0,0,1-1.42,0,1.42,1.42,0,0,1-.71-1.23V6.42a1.42,1.42,0,0,1,.71-1.23A1.51,1.51,0,0,1,7.17,5a1.54,1.54,0,0,1,.71.19l9.66,5.58a1.42,1.42,0,0,1,0,2.46Z"
                    />
                  </svg>
                </span>
              </NuxtLink>
              <div class="item__content">
                <h3 class="item__title">
                  <NuxtLink to="watching">Into the Unknown</NuxtLink>
                </h3>
                <span class="item__category">
                  <NuxtLink to="#">Comedy</NuxtLink>
                </span>
                <span class="item__rate">7.1</span>
              </div>
            </div>
          </div>
          <!-- end item -->

          <!-- item -->
          <div class="col-6 col-sm-4 col-lg-3 col-xl-2">
            <div class="item">
              <NuxtLink to="watching" class="item__cover">
                <img src="img/covers/13.png" alt="" />
                <span class="item__play">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path
                      d="M18.54,9,8.88,3.46a3.42,3.42,0,0,0-5.13,3V17.58A3.42,3.42,0,0,0,7.17,21a3.43,3.43,0,0,0,1.71-.46L18.54,15a3.42,3.42,0,0,0,0-5.92Zm-1,4.19L7.88,18.81a1.44,1.44,0,0,1-1.42,0,1.42,1.42,0,0,1-.71-1.23V6.42a1.42,1.42,0,0,1,.71-1.23A1.51,1.51,0,0,1,7.17,5a1.54,1.54,0,0,1,.71.19l9.66,5.58a1.42,1.42,0,0,1,0,2.46Z"
                    />
                  </svg>
                </span>
              </NuxtLink>
              <div class="item__content">
                <h3 class="item__title">
                  <NuxtLink to="watching">The Broken Path</NuxtLink>
                </h3>
                <span class="item__category">
                  <NuxtLink to="#">Romance</NuxtLink>
                  <NuxtLink to="#">Drama</NuxtLink>
                  <NuxtLink to="#">Music</NuxtLink>
                </span>
                <span class="item__rate">6.3</span>
              </div>
            </div>
          </div>
          <!-- end item -->

          <!-- item -->
          <div class="col-6 col-sm-4 col-lg-3 col-xl-2">
            <div class="item">
              <NuxtLink to="watching" class="item__cover">
                <img src="img/covers/14.png" alt="" />
                <span class="item__play">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path
                      d="M18.54,9,8.88,3.46a3.42,3.42,0,0,0-5.13,3V17.58A3.42,3.42,0,0,0,7.17,21a3.43,3.43,0,0,0,1.71-.46L18.54,15a3.42,3.42,0,0,0,0-5.92Zm-1,4.19L7.88,18.81a1.44,1.44,0,0,1-1.42,0,1.42,1.42,0,0,1-.71-1.23V6.42a1.42,1.42,0,0,1,.71-1.23A1.51,1.51,0,0,1,7.17,5a1.54,1.54,0,0,1,.71.19l9.66,5.58a1.42,1.42,0,0,1,0,2.46Z"
                    />
                  </svg>
                </span>
              </NuxtLink>
              <div class="item__content">
                <h3 class="item__title">
                  <NuxtLink to="watching">A Light in the Darkness</NuxtLink>
                </h3>
                <span class="item__category">
                  <NuxtLink to="#">Comedy</NuxtLink>
                  <NuxtLink to="#">Drama</NuxtLink>
                </span>
                <span class="item__rate">7.9</span>
              </div>
            </div>
          </div>
          <!-- end item -->

          <!-- item -->
          <div class="col-6 col-sm-4 col-lg-3 col-xl-2">
            <div class="item">
              <NuxtLink to="watching" class="item__cover">
                <img src="img/covers/15.png" alt="" />
                <span class="item__play">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path
                      d="M18.54,9,8.88,3.46a3.42,3.42,0,0,0-5.13,3V17.58A3.42,3.42,0,0,0,7.17,21a3.43,3.43,0,0,0,1.71-.46L18.54,15a3.42,3.42,0,0,0,0-5.92Zm-1,4.19L7.88,18.81a1.44,1.44,0,0,1-1.42,0,1.42,1.42,0,0,1-.71-1.23V6.42a1.42,1.42,0,0,1,.71-1.23A1.51,1.51,0,0,1,7.17,5a1.54,1.54,0,0,1,.71.19l9.66,5.58a1.42,1.42,0,0,1,0,2.46Z"
                    />
                  </svg>
                </span>
              </NuxtLink>
              <div class="item__content">
                <h3 class="item__title">
                  <NuxtLink to="watching">Endless Horizon</NuxtLink>
                </h3>
                <span class="item__category">
                  <NuxtLink to="#">Action</NuxtLink>
                  <NuxtLink to="#">Triler</NuxtLink>
                </span>
                <span class="item__rate">8.4</span>
              </div>
            </div>
          </div>
          <!-- end item -->

          <!-- item -->
          <div class="col-6 col-sm-4 col-lg-3 col-xl-2">
            <div class="item">
              <NuxtLink to="watching" class="item__cover">
                <img src="img/covers/16.png" alt="" />
                <span class="item__play">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path
                      d="M18.54,9,8.88,3.46a3.42,3.42,0,0,0-5.13,3V17.58A3.42,3.42,0,0,0,7.17,21a3.43,3.43,0,0,0,1.71-.46L18.54,15a3.42,3.42,0,0,0,0-5.92Zm-1,4.19L7.88,18.81a1.44,1.44,0,0,1-1.42,0,1.42,1.42,0,0,1-.71-1.23V6.42a1.42,1.42,0,0,1,.71-1.23A1.51,1.51,0,0,1,7.17,5a1.54,1.54,0,0,1,.71.19l9.66,5.58a1.42,1.42,0,0,1,0,2.46Z"
                    />
                  </svg>
                </span>
              </NuxtLink>
              <div class="item__content">
                <h3 class="item__title">
                  <NuxtLink to="watching">The Unseen Journey</NuxtLink>
                </h3>
                <span class="item__category">
                  <NuxtLink to="#">Comedy</NuxtLink>
                </span>
                <span class="item__rate">7.1</span>
              </div>
            </div>
          </div>
          <!-- end item -->

          <!-- item -->
          <div class="col-6 col-sm-4 col-lg-3 col-xl-2">
            <div class="item">
              <NuxtLink to="watching" class="item__cover">
                <img src="img/covers/17.png" alt="" />
                <span class="item__play">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path
                      d="M18.54,9,8.88,3.46a3.42,3.42,0,0,0-5.13,3V17.58A3.42,3.42,0,0,0,7.17,21a3.43,3.43,0,0,0,1.71-.46L18.54,15a3.42,3.42,0,0,0,0-5.92Zm-1,4.19L7.88,18.81a1.44,1.44,0,0,1-1.42,0,1.42,1.42,0,0,1-.71-1.23V6.42a1.42,1.42,0,0,1,.71-1.23A1.51,1.51,0,0,1,7.17,5a1.54,1.54,0,0,1,.71.19l9.66,5.58a1.42,1.42,0,0,1,0,2.46Z"
                    />
                  </svg>
                </span>
              </NuxtLink>
              <div class="item__content">
                <h3 class="item__title">
                  <NuxtLink to="watching">Reckoning</NuxtLink>
                </h3>
                <span class="item__category">
                  <NuxtLink to="#">Romance</NuxtLink>
                  <NuxtLink to="#">Drama</NuxtLink>
                  <NuxtLink to="#">Music</NuxtLink>
                </span>
                <span class="item__rate">6.3</span>
              </div>
            </div>
          </div>
          <!-- end item -->

          <!-- item -->
          <div class="col-6 col-sm-4 col-lg-3 col-xl-2">
            <div class="item">
              <NuxtLink to="watching" class="item__cover">
                <img src="img/covers/18.png" alt="" />
                <span class="item__play">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path
                      d="M18.54,9,8.88,3.46a3.42,3.42,0,0,0-5.13,3V17.58A3.42,3.42,0,0,0,7.17,21a3.43,3.43,0,0,0,1.71-.46L18.54,15a3.42,3.42,0,0,0,0-5.92Zm-1,4.19L7.88,18.81a1.44,1.44,0,0,1-1.42,0,1.42,1.42,0,0,1-.71-1.23V6.42a1.42,1.42,0,0,1,.71-1.23A1.51,1.51,0,0,1,7.17,5a1.54,1.54,0,0,1,.71.19l9.66,5.58a1.42,1.42,0,0,1,0,2.46Z"
                    />
                  </svg>
                </span>
              </NuxtLink>
              <div class="item__content">
                <h3 class="item__title">
                  <NuxtLink to="watching">Savage Beauty</NuxtLink>
                </h3>
                <span class="item__category">
                  <NuxtLink to="#">Comedy</NuxtLink>
                  <NuxtLink to="#">Drama</NuxtLink>
                </span>
                <span class="item__rate">7.9</span>
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
              <span class="section__paginator-pages">169 tadan 12 tasi</span>
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
                  <NuxtLink to="#"
                    ><svg
                      xmlns="http://www.w3.org/2000/svg"
                      enable-background="new 0 0 24 24"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M8.5,12.8l5.7,5.6c0.4,0.4,1,0.4,1.4,0c0,0,0,0,0,0c0.4-0.4,0.4-1,0-1.4l-4.9-5l4.9-5c0.4-0.4,0.4-1,0-1.4c-0.2-0.2-0.4-0.3-0.7-0.3c-0.3,0-0.5,0.1-0.7,0.3l-5.7,5.6C8.1,11.7,8.1,12.3,8.5,12.8C8.5,12.7,8.5,12.7,8.5,12.8z"
                      /></svg
                  ></NuxtLink>
                </li>
                <li class="paginator__item">
                  <NuxtLink to="#">1</NuxtLink>
                </li>
                <li class="paginator__item paginator__item--active">
                  <NuxtLink to="#">2</NuxtLink>
                </li>
                <li class="paginator__item">
                  <NuxtLink to="#">3</NuxtLink>
                </li>
                <li class="paginator__item">
                  <NuxtLink to="#">4</NuxtLink>
                </li>
                <li class="paginator__item"><span>...</span></li>
                <li class="paginator__item">
                  <NuxtLink to="#">29</NuxtLink>
                </li>
                <li class="paginator__item">
                  <NuxtLink to="#">30</NuxtLink>
                </li>
                <li class="paginator__item paginator__item--next">
                  <NuxtLink to="#"
                    ><svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M15.54,11.29,9.88,5.64a1,1,0,0,0-1.42,0,1,1,0,0,0,0,1.41l4.95,5L8.46,17a1,1,0,0,0,0,1.41,1,1,0,0,0,.71.3,1,1,0,0,0,.71-.3l5.66-5.65A1,1,0,0,0,15.54,11.29Z"
                      /></svg
                  ></NuxtLink>
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
                  <li class="splide__slide">
                    <div class="item item--carousel">
                      <NuxtLink to="watching" class="item__cover">
                        <img src="img/covers/7.png" alt="" />
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
                      </NuxtLink>
                      <div class="item__content">
                        <h3 class="item__title">
                          <NuxtLink to="watching"
                            >I Dream in Another Language</NuxtLink
                          >
                        </h3>
                        <span class="item__category">
                          <NuxtLink to="#">Action</NuxtLink>
                          <NuxtLink to="#">Triler</NuxtLink>
                        </span>
                        <span class="item__rate">8.4</span>
                      </div>
                    </div>
                  </li>

                  <li class="splide__slide">
                    <div class="item item--carousel">
                      <NuxtLink to="watching" class="item__cover">
                        <img src="img/covers/8.png" alt="" />
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
                      </NuxtLink>
                      <div class="item__content">
                        <h3 class="item__title">
                          <NuxtLink to="watching">Undercurrents</NuxtLink>
                        </h3>
                        <span class="item__category">
                          <NuxtLink to="#">Comedy</NuxtLink>
                        </span>
                        <span class="item__rate">7.1</span>
                      </div>
                    </div>
                  </li>

                  <li class="splide__slide">
                    <div class="item item--carousel">
                      <NuxtLink to="watching" class="item__cover">
                        <img src="img/covers/9.png" alt="" />
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
                      </NuxtLink>
                      <div class="item__content">
                        <h3 class="item__title">
                          <NuxtLink to="watching"
                            >Tales from the Underworld</NuxtLink
                          >
                        </h3>
                        <span class="item__category">
                          <NuxtLink to="#">Romance</NuxtLink>
                          <NuxtLink to="#">Drama</NuxtLink>
                          <NuxtLink to="#">Music</NuxtLink>
                        </span>
                        <span class="item__rate">6.3</span>
                      </div>
                    </div>
                  </li>

                  <li class="splide__slide">
                    <div class="item item--carousel">
                      <NuxtLink to="watching" class="item__cover">
                        <img src="img/covers/10.png" alt="" />
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
                      </NuxtLink>
                      <div class="item__content">
                        <h3 class="item__title">
                          <NuxtLink to="watching">Savage Beauty</NuxtLink>
                        </h3>
                        <span class="item__category">
                          <NuxtLink to="#">Comedy</NuxtLink>
                          <NuxtLink to="#">Drama</NuxtLink>
                        </span>
                        <span class="item__rate">7.9</span>
                      </div>
                    </div>
                  </li>

                  <li class="splide__slide">
                    <div class="item item--carousel">
                      <NuxtLink to="watching" class="item__cover">
                        <img src="img/covers/11.png" alt="" />
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
                      </NuxtLink>
                      <div class="item__content">
                        <h3 class="item__title">
                          <NuxtLink to="watching">The Unseen Journey</NuxtLink>
                        </h3>
                        <span class="item__category">
                          <NuxtLink to="#">Action</NuxtLink>
                          <NuxtLink to="#">Triler</NuxtLink>
                        </span>
                        <span class="item__rate">8.4</span>
                      </div>
                    </div>
                  </li>

                  <li class="splide__slide">
                    <div class="item item--carousel">
                      <NuxtLink to="watching" class="item__cover">
                        <img src="img/covers/12.png" alt="" />
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
                      </NuxtLink>
                      <div class="item__content">
                        <h3 class="item__title">
                          <NuxtLink to="watching">Endless Horizon</NuxtLink>
                        </h3>
                        <span class="item__category">
                          <NuxtLink to="#">Comedy</NuxtLink>
                        </span>
                        <span class="item__rate">7.1</span>
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
            <option value="1">Action/Adventure</option>
            <option value="2">Animals</option>
            <option value="3">Animation</option>
            <option value="4">Biography</option>
            <option value="5">Comedy</option>
            <option value="6">Cooking</option>
            <option value="7">yulduzce</option>
            <option value="8">Documentary</option>
            <option value="9">Drama</option>
            <option value="10">Education</option>
            <option value="11">Entertainment</option>
            <option value="12">Family</option>
            <option value="13">Fantasy</option>
            <option value="14">History</option>
            <option value="15">Horror</option>
            <option value="16">Independent</option>
            <option value="17">International</option>
            <option value="18">Kids</option>
            <option value="19">Medical</option>
            <option value="20">Military/War</option>
            <option value="21">Music</option>
            <option value="22">Mystery/Crime</option>
            <option value="23">Nature</option>
            <option value="24">Paranormal</option>
            <option value="25">Politics</option>
            <option value="26">Racing</option>
            <option value="27">Romance</option>
            <option value="28">Sci-Fi/Horror</option>
            <option value="29">Science</option>
            <option value="30">Science Fiction</option>
            <option value="31">Science/Nature</option>
            <option value="32">Spanish</option>
            <option value="33">Travel</option>
            <option value="34">Western</option>
          </select>
        </div>

        <div class="sign__group">
          <select class="filter__select" name="mquality" id="mfilter__quality">
            <option value="0">Har qanday sifat</option>
            <option value="1">HD 1080</option>
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
  </div>
</template>

<script>
export default {
  name: 'CatalogPage',
  mounted() {
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
}
</script>
