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
                Mening profilim
              </h1>
              <!-- end section title -->

              <!-- breadcrumbs -->
              <ul class="breadcrumbs">
                <li class="breadcrumbs__item">
                  <NuxtLink to="/">Bosh sahifa</NuxtLink>
                </li>
                <li class="breadcrumbs__item breadcrumbs__item--active">
                  Profil
                </li>
              </ul>
              <!-- end breadcrumbs -->
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- end page title -->

    <!-- content -->
    <div class="content">
      <!-- profile -->
      <div class="profile">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <div class="profile__content">
                <div class="profile__user">
                  <div class="profile__avatar">
                    <img src="img/user.svg" alt="" />
                  </div>
                  <div class="profile__meta">
                    <h3
                      class="d-flex aligin-items-center justify-content-center"
                    >
                      Username
                      <span class="moder-user">
                        <img src="img/verify.svg" alt="" />
                      </span>
                    </h3>
                    <span>DUBGO ID: 23562</span>
                  </div>
                </div>

                <!-- content tabs nav -->
                <ul
                  class="nav nav-tabs content__tabs content__tabs--profile"
                  id="content__tabs"
                  role="tablist"
                >
                  <li class="nav-item" role="presentation">
                    <button
                      id="1-tab"
                      class="active"
                      data-bs-toggle="tab"
                      data-bs-target="#tab-1"
                      type="button"
                      role="tab"
                      aria-controls="tab-1"
                      aria-selected="true"
                    >
                      Profil
                    </button>
                  </li>

                  <li class="nav-item" role="presentation">
                    <button
                      id="2-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#tab-2"
                      type="button"
                      role="tab"
                      aria-controls="tab-2"
                      aria-selected="false"
                    >
                      OBUNA
                    </button>
                  </li>

                  <li class="nav-item" role="presentation">
                    <button
                      id="3-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#tab-3"
                      type="button"
                      role="tab"
                      aria-controls="tab-3"
                      aria-selected="false"
                    >
                      SOZLAMALAR
                    </button>
                  </li>
                </ul>
                <!-- end content tabs nav -->

                <button class="profile__logout" type="button">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path
                      d="M4,12a1,1,0,0,0,1,1h7.59l-2.3,2.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l4-4a1,1,0,0,0,.21-.33,1,1,0,0,0,0-.76,1,1,0,0,0-.21-.33l-4-4a1,1,0,1,0-1.42,1.42L12.59,11H5A1,1,0,0,0,4,12ZM17,2H7A3,3,0,0,0,4,5V8A1,1,0,0,0,6,8V5A1,1,0,0,1,7,4H17a1,1,0,0,1,1,1V19a1,1,0,0,1-1,1H7a1,1,0,0,1-1-1V16a1,1,0,0,0-2,0v3a3,3,0,0,0,3,3H17a3,3,0,0,0,3-3V5A3,3,0,0,0,17,2Z"
                    />
                  </svg>
                  <span>CHIQISH</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- end profile -->

      <div class="container">
        <!-- content tabs -->
        <div class="tab-content">
          <div
            class="tab-pane fade show active"
            id="tab-1"
            role="tabpanel"
            aria-labelledby="1-tab"
            tabindex="0"
          >
            <div class="row">
              <!-- stats -->
              <div class="col-12 col-sm-6 col-xl-3">
                <div class="stats">
                  <span>Premium tarif</span>
                  <p>135 000 so'm</p>
                  <img src="img/credit-card.svg" alt="" />
                </div>
              </div>
              <!-- end stats -->

              <!-- stats -->
              <div class="col-12 col-sm-6 col-xl-3">
                <div class="stats">
                  <span>Ko'rilgan animelar</span>
                  <p>1 172</p>
                  <img src="img/film.svg" alt="" />
                </div>
              </div>
              <!-- end stats -->

              <!-- stats -->
              <div class="col-12 col-sm-6 col-xl-3">
                <div class="stats">
                  <span>Sizning sharhlaringiz</span>
                  <p>2 573</p>
                  <img src="img/comments.svg" alt="" />
                </div>
              </div>
              <!-- end stats -->

              <!-- stats -->
              <div class="col-12 col-sm-6 col-xl-3">
                <div class="stats">
                  <span>Sizning fikringiz</span>
                  <p>1 021</p>
                  <img src="img/star-half-alt.svg" alt="" />
                </div>
              </div>
              <!-- end stats -->

              <!-- dashbox -->
              <div class="col-12 col-xl-6">
                <div class="dashbox">
                  <div class="dashbox__title">
                    <h3><img src="img/film.svg" alt="" />Oxirgi koʻrishlar</h3>

                    <div class="dashbox__wrap">
                      <NuxtLink tos="dashbox__refresh" to="#"
                        ><svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                        >
                          <path
                            d="M21,11a1,1,0,0,0-1,1,8.05,8.05,0,1,1-2.22-5.5h-2.4a1,1,0,0,0,0,2h4.53a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4.77A10,10,0,1,0,22,12,1,1,0,0,0,21,11Z"
                          /></svg
                      ></NuxtLink>
                      <NuxtLink tos="dashbox__more" to="catalog"
                        >View All</NuxtLink
                      >
                    </div>
                  </div>

                  <div class="dashbox__table-wrap dashbox__table-wrap--1">
                    <table class="dashbox__table">
                      <thead>
                        <tr>
                          <th>ID</th>
                          <th>ANIME NOMI</th>
                          <th>KATEGORIYA</th>
                          <th>REYTING</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <div class="dashbox__table-text">321</div>
                          </td>
                          <td>
                            <div class="dashbox__table-text">
                              <NuxtLink to="details1">The Lost City</NuxtLink>
                            </div>
                          </td>
                          <td>
                            <div class="dashbox__table-text">Movie</div>
                          </td>
                          <td>
                            <div
                              class="dashbox__table-text dashbox__table-text--rate"
                            >
                              9.2
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div class="dashbox__table-text">54</div>
                          </td>
                          <td>
                            <div class="dashbox__table-text">
                              <NuxtLink to="details1">Undercurrents</NuxtLink>
                            </div>
                          </td>
                          <td>
                            <div class="dashbox__table-text">Anime</div>
                          </td>
                          <td>
                            <div
                              class="dashbox__table-text dashbox__table-text--rate"
                            >
                              9.1
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div class="dashbox__table-text">670</div>
                          </td>
                          <td>
                            <div class="dashbox__table-text">
                              <NuxtLink to="details1"
                                >Tales from the Underworld</NuxtLink
                              >
                            </div>
                          </td>
                          <td>
                            <div class="dashbox__table-text">TV Show</div>
                          </td>
                          <td>
                            <div
                              class="dashbox__table-text dashbox__table-text--rate"
                            >
                              9.0
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div class="dashbox__table-text">241</div>
                          </td>
                          <td>
                            <div class="dashbox__table-text">
                              <NuxtLink to="details1"
                                >The Unseen World</NuxtLink
                              >
                            </div>
                          </td>
                          <td>
                            <div class="dashbox__table-text">TV Show</div>
                          </td>
                          <td>
                            <div
                              class="dashbox__table-text dashbox__table-text--rate"
                            >
                              8.9
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div class="dashbox__table-text">22</div>
                          </td>
                          <td>
                            <div class="dashbox__table-text">
                              <NuxtLink to="details1">Redemption Road</NuxtLink>
                            </div>
                          </td>
                          <td>
                            <div class="dashbox__table-text">Movie</div>
                          </td>
                          <td>
                            <div
                              class="dashbox__table-text dashbox__table-text--rate"
                            >
                              8.9
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <!-- end dashbox -->

              <!-- dashbox -->
              <div class="col-12 col-xl-6">
                <div class="dashbox">
                  <div class="dashbox__title">
                    <h3>
                      <img src="img/star-half-alt.svg" alt="" />Eng so'nggi
                      fikringiz
                    </h3>

                    <div class="dashbox__wrap">
                      <NuxtLink tos="dashbox__refresh" to="#"
                        ><svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                        >
                          <path
                            d="M21,11a1,1,0,0,0-1,1,8.05,8.05,0,1,1-2.22-5.5h-2.4a1,1,0,0,0,0,2h4.53a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4.77A10,10,0,1,0,22,12,1,1,0,0,0,21,11Z"
                          /></svg
                      ></NuxtLink>
                      <NuxtLink tos="dashbox__more" to="reviews"
                        >View All</NuxtLink
                      >
                    </div>
                  </div>

                  <div class="dashbox__table-wrap dashbox__table-wrap--2">
                    <table class="dashbox__table">
                      <thead>
                        <tr>
                          <th>ID</th>
                          <th>ANIME NOMI</th>
                          <th>MUALLIF</th>
                          <th>REYTING</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <div class="dashbox__table-text">126</div>
                          </td>
                          <td>
                            <div class="dashbox__table-text">
                              <NuxtLink to="details1"
                                >I Dream in Another Language</NuxtLink
                              >
                            </div>
                          </td>
                          <td>
                            <div class="dashbox__table-text">Jackson Brown</div>
                          </td>
                          <td>
                            <div
                              class="dashbox__table-text dashbox__table-text--rate"
                            >
                              7.2
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div class="dashbox__table-text">125</div>
                          </td>
                          <td>
                            <div class="dashbox__table-text">
                              <NuxtLink to="details1">Benched</NuxtLink>
                            </div>
                          </td>
                          <td>
                            <div class="dashbox__table-text">Quang</div>
                          </td>
                          <td>
                            <div
                              class="dashbox__table-text dashbox__table-text--rate"
                            >
                              6.3
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div class="dashbox__table-text">124</div>
                          </td>
                          <td>
                            <div class="dashbox__table-text">
                              <NuxtLink to="details1">Whitney</NuxtLink>
                            </div>
                          </td>
                          <td>
                            <div class="dashbox__table-text">
                              Brian Cranston
                            </div>
                          </td>
                          <td>
                            <div
                              class="dashbox__table-text dashbox__table-text--rate"
                            >
                              8.4
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div class="dashbox__table-text">123</div>
                          </td>
                          <td>
                            <div class="dashbox__table-text">
                              <NuxtLink to="details1">Blindspotting</NuxtLink>
                            </div>
                          </td>
                          <td>
                            <div class="dashbox__table-text">Ketut</div>
                          </td>
                          <td>
                            <div
                              class="dashbox__table-text dashbox__table-text--rate"
                            >
                              9.0
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div class="dashbox__table-text">122</div>
                          </td>
                          <td>
                            <div class="dashbox__table-text">
                              <NuxtLink to="details1"
                                >I Dream in Another Language</NuxtLink
                              >
                            </div>
                          </td>
                          <td>
                            <div class="dashbox__table-text">
                              Eliza Josceline
                            </div>
                          </td>
                          <td>
                            <div
                              class="dashbox__table-text dashbox__table-text--rate"
                            >
                              7.7
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <!-- end dashbox -->
            </div>
          </div>

          <div
            class="tab-pane fade"
            id="tab-2"
            role="tabpanel"
            aria-labelledby="2-tab"
            tabindex="0"
          >
            <div class="row">
              <!-- price -->
              <div class="col-12 col-md-6 col-lg-4 order-md-2 order-lg-1">
                <div class="plan">
                  <h3 class="plan__title">Standart</h3>
                  <span class="plan__price">50 000 so'm</span>
                  <ul class="plan__list">
                    <li>1 oylik obuna</li>
                    <li>0% chegirma</li>
                    <li>0 so'm tejaysiz</li>
                  </ul>
                  <button
                    type="button"
                    data-bs-toggle="modal"
                    class="plan__btn"
                    data-bs-target="#plan-modal"
                  >
                    <span>obuna bo'lish</span>
                  </button>
                </div>
              </div>
              <!-- end price -->

              <!-- price -->
              <div class="col-12 col-lg-4 order-md-1 order-lg-2">
                <div class="plan plan--premium">
                  <h3 class="plan__title">Premium</h3>
                  <span class="plan__price">135 000 so'm</span>
                  <ul class="plan__list">
                    <li>3 oylik obuna</li>
                    <li>10% chegirma</li>
                    <li>15 000 so'm tejaysiz</li>
                  </ul>
                  <button
                    type="button"
                    data-bs-toggle="modal"
                    class="plan__btn"
                    data-bs-target="#plan-modal"
                  >
                    <span>obuna bo'lish</span>
                  </button>
                </div>
              </div>
              <!-- end price -->

              <!-- price -->
              <div class="col-12 col-md-6 col-lg-4 order-md-3 order-lg-3">
                <div class="plan">
                  <h3 class="plan__title">PRO</h3>
                  <span class="plan__price">510 000 so'm</span>
                  <ul class="plan__list">
                    <li>6 oylik obuna</li>
                    <li>15% chegirma</li>
                    <li>90 000 so'm tejaysiz</li>
                  </ul>
                  <button
                    type="button"
                    data-bs-toggle="modal"
                    class="plan__btn"
                    data-bs-target="#plan-modal"
                  >
                    <span>obuna bo'lish</span>
                  </button>
                </div>
              </div>
              <!-- end price -->
            </div>
          </div>
          <!-- plan modal -->
          <div
            class="modal fade"
            id="plan-modal"
            tabindex="-1"
            aria-labelledby="plan-modal"
            aria-hidden="true"
          >
            <div class="modal-dialog modal-dialog-centered">
              <div class="modal-content">
                <div class="modal__content">
                  <button
                    class="modal__close"
                    type="button"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <path
                        d="M13.41,12l6.3-6.29a1,1,0,1,0-1.42-1.42L12,10.59,5.71,4.29A1,1,0,0,0,4.29,5.71L10.59,12l-6.3,6.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L12,13.41l6.29,6.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Z"
                      />
                    </svg>
                  </button>

                  <form action="#" class="modal__form">
                    <h4 class="modal__title">Tarifni tanlang</h4>

                    <div class="sign__group">
                      <label for="fullname" class="sign__label">Ism</label>
                      <input
                        id="fullname"
                        type="text"
                        name="name"
                        class="sign__input"
                        placeholder="To'liq ism"
                      />
                    </div>

                    <div class="sign__group">
                      <label for="email" class="sign__label">Email</label>
                      <input
                        id="email"
                        type="text"
                        name="email"
                        class="sign__input"
                        placeholder="misol@domain.com"
                      />
                    </div>

                    <div class="sign__group">
                      <label class="sign__label" for="value"
                        >Tarifni tanlang:</label
                      >
                      <select class="sign__select" name="value" id="value">
                        <option value="20">Standart - 50 000 so'm</option>
                        <option value="20">Premium - 135 000 so'm</option>
                        <option value="40">PRO - 510 000 so'm</option>
                      </select>
                    </div>
                    <div class="sign__group">
                      <label class="sign__label">Payment method:</label>

                      <ul class="sign__radio">
                        <li>
                          <input
                            id="type1"
                            type="radio"
                            name="type"
                            checked=""
                          />
                          <label for="type1">Visa</label>
                        </li>
                        <li>
                          <input id="type2" type="radio" name="type" />
                          <label for="type2">Mastercard</label>
                        </li>
                        <li>
                          <input id="type3" type="radio" name="type" />
                          <label for="type3">Paypal</label>
                        </li>
                        <!-- plan modal -->
                        <div
                          class="modal fade"
                          id="plan-modal"
                          tabindex="-1"
                          aria-labelledby="plan-modal"
                          aria-hidden="true"
                        >
                          <div class="modal-dialog modal-dialog-centered">
                            <div class="modal-content">
                              <div class="modal__content">
                                <button
                                  class="modal__close"
                                  type="button"
                                  data-bs-dismiss="modal"
                                  aria-label="Close"
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      d="M13.41,12l6.3-6.29a1,1,0,1,0-1.42-1.42L12,10.59,5.71,4.29A1,1,0,0,0,4.29,5.71L10.59,12l-6.3,6.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L12,13.41l6.29,6.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Z"
                                    />
                                  </svg>
                                </button>

                                <form action="#" class="modal__form">
                                  <h4 class="modal__title">Tarifni tanlang</h4>

                                  <div class="sign__group">
                                    <label for="fullname" class="sign__label"
                                      >Ism</label
                                    >
                                    <input
                                      id="fullname"
                                      type="text"
                                      name="name"
                                      class="sign__input"
                                      placeholder="To'liq ism"
                                    />
                                  </div>

                                  <div class="sign__group">
                                    <label for="email" class="sign__label"
                                      >Email</label
                                    >
                                    <input
                                      id="email"
                                      type="text"
                                      name="email"
                                      class="sign__input"
                                      placeholder="misol@domain.com"
                                    />
                                  </div>

                                  <div class="sign__group">
                                    <label class="sign__label" for="value"
                                      >Tarifni tanlang:</label
                                    >
                                    <select
                                      class="sign__select"
                                      name="value"
                                      id="value"
                                    >
                                      <option value="20">
                                        Standart - 50 000 so'm
                                      </option>
                                      <option value="20">
                                        Premium - 135 000 so'm
                                      </option>
                                      <option value="40">
                                        PRO - 510 000 so'm
                                      </option>
                                    </select>
                                  </div>
                                  <div class="sign__group">
                                    <label class="sign__label"
                                      >Payment method:</label
                                    >

                                    <ul class="sign__radio">
                                      <li>
                                        <input
                                          id="type1"
                                          type="radio"
                                          name="type"
                                          checked=""
                                        />
                                        <label for="type1">Visa</label>
                                      </li>
                                      <li>
                                        <input
                                          id="type2"
                                          type="radio"
                                          name="type"
                                        />
                                        <label for="type2">Mastercard</label>
                                      </li>
                                      <li>
                                        <input
                                          id="type3"
                                          type="radio"
                                          name="type"
                                        />
                                        <label for="type3">Paypal</label>
                                      </li>
                                    </ul>
                                  </div>

                                  <button
                                    type="button"
                                    class="sign__btn sign__btn--modal"
                                  >
                                    <span>Davom eting</span>
                                  </button>
                                </form>
                              </div>
                            </div>
                          </div>
                        </div>
                        <!-- end plan modal -->
                      </ul>
                    </div>

                    <button type="button" class="sign__btn sign__btn--modal">
                      <span>Davom eting</span>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <!-- end plan modal -->

          <div
            class="tab-pane fade"
            id="tab-3"
            role="tabpanel"
            aria-labelledby="3-tab"
            tabindex="0"
          >
            <div class="row">
              <!-- details form -->
              <div class="col-12 col-lg-6">
                <form action="#" class="sign__form sign__form--profile">
                  <div class="row">
                    <div class="col-12">
                      <h4 class="sign__title">Profil tafsilotlari</h4>
                    </div>

                    <div class="col-12 col-md-6 col-lg-12 col-xl-6">
                      <div class="sign__group">
                        <label class="sign__label" for="username"
                          >Tizimga kirish</label
                        >
                        <input
                          id="username"
                          type="text"
                          name="username"
                          class="sign__input"
                          placeholder="Foydalanuvchi 123"
                        />
                      </div>
                    </div>

                    <div class="col-12 col-md-6 col-lg-12 col-xl-6">
                      <div class="sign__group">
                        <label class="sign__label" for="email">Email</label>
                        <input
                          id="email2"
                          type="text"
                          name="email"
                          class="sign__input"
                          placeholder="email@email.com"
                        />
                      </div>
                    </div>

                    <div class="col-12 col-md-6 col-lg-12 col-xl-6">
                      <div class="sign__group">
                        <label class="sign__label" for="firstname">Ism</label>
                        <input
                          id="firstname"
                          type="text"
                          name="firstname"
                          class="sign__input"
                          placeholder="John"
                        />
                      </div>
                    </div>

                    <div class="col-12 col-md-6 col-lg-12 col-xl-6">
                      <div class="sign__group">
                        <label class="sign__label" for="lastname"
                          >Familiya</label
                        >
                        <input
                          id="lastname"
                          type="text"
                          name="lastname"
                          class="sign__input"
                          placeholder="Doe"
                        />
                      </div>
                    </div>

                    <div class="col-12">
                      <button class="sign__btn sign__btn--small" type="button">
                        <span>SAQLASH</span>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
              <!-- end details form -->

              <!-- password form -->
              <div class="col-12 col-lg-6">
                <form action="#" class="sign__form sign__form--profile">
                  <div class="row">
                    <div class="col-12">
                      <h4 class="sign__title">Parolni o'zgartirish</h4>
                    </div>

                    <div class="col-12 col-md-6 col-lg-12 col-xl-6">
                      <div class="sign__group">
                        <label class="sign__label" for="oldpass"
                          >Eski parol</label
                        >
                        <input
                          id="oldpass"
                          type="password"
                          name="oldpass"
                          class="sign__input"
                        />
                      </div>
                    </div>

                    <div class="col-12 col-md-6 col-lg-12 col-xl-6">
                      <div class="sign__group">
                        <label class="sign__label" for="newpass"
                          >Yangi parol</label
                        >
                        <input
                          id="newpass"
                          type="password"
                          name="newpass"
                          class="sign__input"
                        />
                      </div>
                    </div>

                    <div class="col-12 col-md-6 col-lg-12 col-xl-6">
                      <div class="sign__group">
                        <label class="sign__label" for="confirmpass"
                          >Yangi parolni tasdiqlang</label
                        >
                        <input
                          id="confirmpass"
                          type="password"
                          name="confirmpass"
                          class="sign__input"
                        />
                      </div>
                    </div>

                    <div class="col-12">
                      <button class="sign__btn sign__btn--small" type="button">
                        <span>O'ZGARISH</span>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
              <!-- end password form -->
            </div>
          </div>
        </div>
        <!-- end content tabs -->
      </div>
    </div>
    <!-- end content -->
    <!-- plan modal -->
    <div
      class="modal fade"
      id="plan-modal"
      tabindex="-1"
      aria-labelledby="plan-modal"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal__content">
            <button
              class="modal__close"
              type="button"
              data-bs-dismiss="modal"
              aria-label="Close"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path
                  d="M13.41,12l6.3-6.29a1,1,0,1,0-1.42-1.42L12,10.59,5.71,4.29A1,1,0,0,0,4.29,5.71L10.59,12l-6.3,6.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L12,13.41l6.29,6.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Z"
                />
              </svg>
            </button>

            <form action="#" class="modal__form">
              <h4 class="modal__title">Tarifni tanlang</h4>

              <div class="sign__group">
                <label for="fullname" class="sign__label">Ism</label>
                <input
                  id="fullname"
                  type="text"
                  name="name"
                  class="sign__input"
                  placeholder="To'liq ism"
                />
              </div>

              <div class="sign__group">
                <label for="email" class="sign__label">Email</label>
                <input
                  id="email"
                  type="text"
                  name="email"
                  class="sign__input"
                  placeholder="misol@domain.com"
                />
              </div>

              <div class="sign__group">
                <label class="sign__label" for="value">Tarifni tanlang:</label>
                <select class="sign__select" name="value" id="value">
                  <option value="20">Standart - 50 000 so'm</option>
                  <option value="20">Premium - 135 000 so'm</option>
                  <option value="40">PRO - 510 000 so'm</option>
                </select>
              </div>
              <div class="sign__group">
                <label class="sign__label">Payment method:</label>

                <ul class="sign__radio">
                  <li>
                    <input id="type1" type="radio" name="type" checked="" />
                    <label for="type1">Visa</label>
                  </li>
                  <li>
                    <input id="type2" type="radio" name="type" />
                    <label for="type2">Mastercard</label>
                  </li>
                  <li>
                    <input id="type3" type="radio" name="type" />
                    <label for="type3">Paypal</label>
                  </li>
                </ul>
              </div>

              <button type="button" class="sign__btn sign__btn--modal">
                <span>Davom eting</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
    <!-- end plan modal -->
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
