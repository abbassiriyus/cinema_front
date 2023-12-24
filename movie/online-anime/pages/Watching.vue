  <template>
  <div>
    <div v-if="!data_get" class="lodaing_page">
	<div  class="loading">
    <span>Loading</span>
  </div></div>
    <div v-else>
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
              <h1 v-if="data_get" class="section__title section__title--head">
                {{ data_get.title }}
              </h1>
            </div>
            <!-- end title -->

            <!-- content -->
            <div class="col-12 col-xl-6">
              <div class="item item--details">
                <!-- card cover -->
                <div
                  v-if="data_get && data_get.allimage.length > 0"
                  class="item__cover"
                >
                  <img :src="data_get.allimage[0].image" alt="" />
                </div>
                <div v-else class="item__cover">
                  <img src="img/covers/14.png" alt="" />
                </div>
                <!-- end card cover -->

                <!-- card content -->
                <div class="item__content">
                  <div class="item__wrap">
                    <span v-if="data_get" class="item__rate">{{
                      data_get.mark
                    }}</span>
                    <ul class="item__list">
                      <li v-if="data_get">{{ data_get.type }}</li>
                      <li v-if="data_get">{{ data_get.age_limit }}+</li>
                      <li v-if="data_get">{{ data_get.payment }}</li>
                    </ul>
                  </div>

                  <ul class="item__meta">
                    <li v-if="data_get">
                      <span>Janr:</span>
                      <a
                        v-for="item in data_get.janr"
                        :key="item.id"
                        role="button"
                        >{{ item.title }}</a
                      >
                    </li>
                    <li v-if="data_get">
                      <span>Davomiyligi:</span> {{ data_get.time }} min
                    </li>
                    <li v-if="data_get">
                      <span>Mamlakat:</span>
                      <a role="button">{{ data_get.country }}</a>
                    </li>
                    <li v-if="data_get">
                      <span>Tarjima:</span>{{ data_get.language }}
                    </li>
                  </ul>

                  <ul class="item__meta">
                    <li v-if="data_get">
                      <span>Ovoz berdi:</span>
                      <a role="button">{{ data_get.ovoz_berdi }}</a>
                    </li>
                    <li v-if="data_get">
                      <span>Tarjimon:</span>
                      <a
                        v-for="item in data_get.tarjima"
                        :key="item.id"
                        role="button"
                        >{{ item.title }}</a
                      >
                    </li>
                    <li v-if="data_get">
                      <span>Tayming:</span>
                      <a role="button">{{ data_get.tayming }}</a>
                    </li>
                  </ul>
                </div>

                <div
                  v-if="data_get"
                  class="item__description item__description--details"
                >
                  <p style="max-height: 150px; overflow: auto">
                    {{ data_get.description }}
                  </p>
                </div>
                <!-- end card content -->
              </div>
            </div>
            <!-- end content -->

            <!-- player -->
            <div class="col-12 col-xl-6">
              <div class="cinema-iframe" v-if="data_get && data_get.video">
                <iframe
                  width="100%"
                  height="100%"
                  :src="data_get.video"
                  allow="autoplay; fullscreen; picture-in-picture; encrypted-media;"
                  frameborder="0"
                  allowfullscreen
                  style="position: absolute; top: 0; left: 0"
                ></iframe>
              </div>
              <div v-else-if="data_get" class="cinema-iframe">
                <iframe
                  width="100%"
                  height="100%"
                  :src="data_get.treler"
                  allow="autoplay; fullscreen; picture-in-picture; encrypted-media;"
                  frameborder="0"
                  allowfullscreen
                  style="position: absolute; top: 0; left: 0"
                ></iframe>
              </div>
            </div>
            <!-- end player -->
          </div>
        </div>
        <!-- end details content -->
      </section>
      <!-- end details -->

      <!-- content -->
      <section class="content">
        <div class="content__head">
          <div class="container">
            <div class="row">
              <div class="col-12">
                <!-- content title -->
                <h2 class="content__title">Kashf qiling</h2>
                <!-- end content title -->

                <!-- content tabs nav -->
                <ul
                  class="nav nav-tabs content__tabs"
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
                      Izohlar
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
                      Sharhlar
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
                      Rasmlar
                    </button>
                  </li>
                </ul>
                <!-- end content tabs nav -->
              </div>
            </div>
          </div>
        </div>

        <div class="container">
          <div class="row">
            <div class="col-12 col-lg-8">
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
                    <!-- comments -->
                    <div class="col-12">
                      <div class="comments" v-if="data_get">
                        <ul
                          v-for="commnet in data_get.comment"
                          :key="commnet.id"
                          class="comments__list"
                        >
                          <li class="comments__item">
                            <div class="comments__autor">
                              <img
                                class="comments__avatar"
                                src="img/user.svg"
                                alt=""
                              />
                              <span
                                class="comments__name"
                                v-if="commnet.creators && commnet.creators.name"
                                >{{ commnet.creators.name }}
                                <span
                                  v-if="commnet.ptichka"
                                  class="d-flex aligin-items-center justify-content-center moder-user"
                                >
                                  <img src="img/verify.svg" alt="" /> </span
                              ></span>
                              <span class="comments__name" v-else>No Name</span>
                              <span class="comments__time">
                                {{ commnet.time_create.slice(5, 7) }}.{{
                                  commnet.time_create.slice(8, 10)
                                }}.{{ commnet.time_create.slice(0, 4) }},
                                {{ commnet.time_create.slice(11, 16) }}</span
                              >
                            </div>
                            <p class="comments__text">
                              {{ commnet.description }}
                            </p>
                            <div class="comments__actions">
                              <div class="comments__rate">
                                <button type="button">
                                  <svg
                                    @click="click_like(true, commnet.id)"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewbox="0 0 24 24">
                                    <path
                                      d="M21.3,10.08A3,3,0,0,0,19,9H14.44L15,7.57A4.13,4.13,0,0,0,11.11,2a1,1,0,0,0-.91.59L7.35,9H5a3,3,0,0,0-3,3v7a3,3,0,0,0,3,3H17.73a3,3,0,0,0,2.95-2.46l1.27-7A3,3,0,0,0,21.3,10.08ZM7,20H5a1,1,0,0,1-1-1V12a1,1,0,0,1,1-1H7Zm13-7.82-1.27,7a1,1,0,0,1-1,.82H9V10.21l2.72-6.12A2.11,2.11,0,0,1,13.1,6.87L12.57,8.3A2,2,0,0,0,14.44,11H19a1,1,0,0,1,.77.36A1,1,0,0,1,20,12.18Z"
                                    ></path></svg>{{ commnet.top }}
                                </button>

                                <button type="button">
                                  {{ commnet.min
                                  }}<svg
                                    @click="click_like(false, commnet.id)"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewbox="0 0 24 24"
                                  >
                                    <path
                                      d="M19,2H6.27A3,3,0,0,0,3.32,4.46l-1.27,7A3,3,0,0,0,5,15H9.56L9,16.43A4.13,4.13,0,0,0,12.89,22a1,1,0,0,0,.91-.59L16.65,15H19a3,3,0,0,0,3-3V5A3,3,0,0,0,19,2ZM15,13.79l-2.72,6.12a2.13,2.13,0,0,1-1.38-2.78l.53-1.43A2,2,0,0,0,9.56,13H5a1,1,0,0,1-.77-.36A1,1,0,0,1,4,11.82l1.27-7a1,1,0,0,1,1-.82H15ZM20,12a1,1,0,0,1-1,1H17V4h2a1,1,0,0,1,1,1Z"
                                    ></path>
                                  </svg>
                                </button>
                              </div>

                              <button
                                type="button"
                                @click="updateData(commnet)"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewbox="0 0 24 24"
                                >
                                  <path
                                    d="M21.707,11.293l-8-8A.99991.99991,0,0,0,12,4V7.54492A11.01525,11.01525,0,0,0,2,18.5V20a1,1,0,0,0,1.78418.62061,11.45625,11.45625,0,0,1,7.88672-4.04932c.0498-.00635.1748-.01611.3291-.02588V20a.99991.99991,0,0,0,1.707.707l8-8A.99962.99962,0,0,0,21.707,11.293ZM14,17.58594V15.5a.99974.99974,0,0,0-1-1c-.25488,0-1.2959.04932-1.56152.085A14.00507,14.00507,0,0,0,4.05176,17.5332,9.01266,9.01266,0,0,1,13,9.5a.99974.99974,0,0,0,1-1V6.41406L19.58594,12Z"
                                  ></path></svg
                                >JAVOB BERISH
                              </button>
                              <button type="button">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewbox="0 0 24 24"
                                >
                                  <path
                                    d="M19,14a1,1,0,0,0-1.22.72A7,7,0,0,1,11,20H5.41l.64-.63a1,1,0,0,0,0-1.41A7,7,0,0,1,9.25,6.22a1,1,0,0,0-.5-1.94A9,9,0,0,0,4,18.62L2.29,20.29a1,1,0,0,0-.21,1.09A1,1,0,0,0,3,22h8a9,9,0,0,0,8.72-6.75A1,1,0,0,0,19,14ZM21,2a1,1,0,0,0-1,1h0a5,5,0,1,0,.3,7.75A1,1,0,1,0,19,9.25,3,3,0,1,1,17,4a3,3,0,0,1,2.23,1H18a1,1,0,0,0,0,2h3a1,1,0,0,0,1-1V3A1,1,0,0,0,21,2Z"
                                  ></path></svg
                                >Quote
                              </button>
                            </div>
                          </li>
                          <div
                            v-for="cinema in commnet.subcomment"
                            :key="cinema.id"
                          >
                            <li
                              v-if="!cinema.quanty"
                              class="comments__item comments__item--answer"
                            >
                              <div class="comments__autor">
                                <img
                                  class="comments__avatar"
                                  src="img/user.svg"
                                  alt=""
                                />
                                <span
                                  class="comments__name"
                                  v-if="cinema.creators && cinema.creators.name"
                                  >{{ cinema.creators.name }}
                                  <span
                                    v-if="cinema.ptichka"
                                    class="d-flex aligin-items-center justify-content-center moder-user"
                                  >
                                    <img src="img/verify.svg" alt="" /> </span
                                ></span>
                                <span class="comments__name" v-else
                                  >No Name</span
                                >
                                <span class="comments__time">
                                  {{ cinema.time_create.slice(5, 7) }}.{{
                                    cinema.time_create.slice(8, 10)
                                  }}.{{ cinema.time_create.slice(0, 4) }},
                                  {{ cinema.time_create.slice(11, 16) }}</span
                                >
                              </div>
                              <p class="comments__text">
                                {{ cinema.description }}
                              </p>
                              <div class="comments__actions">
                                <div class="comments__rate">
                                  <button type="button">
                                    <svg
                                      @click="click_like(true, cinema.id)"
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewbox="0 0 24 24"
                                    >
                                      <path
                                        d="M21.3,10.08A3,3,0,0,0,19,9H14.44L15,7.57A4.13,4.13,0,0,0,11.11,2a1,1,0,0,0-.91.59L7.35,9H5a3,3,0,0,0-3,3v7a3,3,0,0,0,3,3H17.73a3,3,0,0,0,2.95-2.46l1.27-7A3,3,0,0,0,21.3,10.08ZM7,20H5a1,1,0,0,1-1-1V12a1,1,0,0,1,1-1H7Zm13-7.82-1.27,7a1,1,0,0,1-1,.82H9V10.21l2.72-6.12A2.11,2.11,0,0,1,13.1,6.87L12.57,8.3A2,2,0,0,0,14.44,11H19a1,1,0,0,1,.77.36A1,1,0,0,1,20,12.18Z"
                                      ></path></svg
                                    >{{ cinema.top }}
                                  </button>

                                  <button type="button">
                                    {{ cinema.min
                                    }}<svg
                                      @click="click_like(false, cinema.id)"
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewbox="0 0 24 24"
                                    >
                                      <path
                                        d="M19,2H6.27A3,3,0,0,0,3.32,4.46l-1.27,7A3,3,0,0,0,5,15H9.56L9,16.43A4.13,4.13,0,0,0,12.89,22a1,1,0,0,0,.91-.59L16.65,15H19a3,3,0,0,0,3-3V5A3,3,0,0,0,19,2ZM15,13.79l-2.72,6.12a2.13,2.13,0,0,1-1.38-2.78l.53-1.43A2,2,0,0,0,9.56,13H5a1,1,0,0,1-.77-.36A1,1,0,0,1,4,11.82l1.27-7a1,1,0,0,1,1-.82H15ZM20,12a1,1,0,0,1-1,1H17V4h2a1,1,0,0,1,1,1Z"
                                      ></path>
                                    </svg>
                                  </button>
                                </div>

                                <button type="button">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewbox="0 0 24 24"
                                  >
                                    <path
                                      d="M21.707,11.293l-8-8A.99991.99991,0,0,0,12,4V7.54492A11.01525,11.01525,0,0,0,2,18.5V20a1,1,0,0,0,1.78418.62061,11.45625,11.45625,0,0,1,7.88672-4.04932c.0498-.00635.1748-.01611.3291-.02588V20a.99991.99991,0,0,0,1.707.707l8-8A.99962.99962,0,0,0,21.707,11.293ZM14,17.58594V15.5a.99974.99974,0,0,0-1-1c-.25488,0-1.2959.04932-1.56152.085A14.00507,14.00507,0,0,0,4.05176,17.5332,9.01266,9.01266,0,0,1,13,9.5a.99974.99974,0,0,0,1-1V6.41406L19.58594,12Z"
                                    ></path></svg
                                  >JAVOB BERISH
                                </button>
                                <button type="button">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewbox="0 0 24 24"
                                  >
                                    <path
                                      d="M19,14a1,1,0,0,0-1.22.72A7,7,0,0,1,11,20H5.41l.64-.63a1,1,0,0,0,0-1.41A7,7,0,0,1,9.25,6.22a1,1,0,0,0-.5-1.94A9,9,0,0,0,4,18.62L2.29,20.29a1,1,0,0,0-.21,1.09A1,1,0,0,0,3,22h8a9,9,0,0,0,8.72-6.75A1,1,0,0,0,19,14ZM21,2a1,1,0,0,0-1,1h0a5,5,0,1,0,.3,7.75A1,1,0,1,0,19,9.25,3,3,0,1,1,17,4a3,3,0,0,1,2.23,1H18a1,1,0,0,0,0,2h3a1,1,0,0,0,1-1V3A1,1,0,0,0,21,2Z"
                                    ></path></svg
                                  >Quote
                                </button>
                              </div>
                            </li>
                            <li
                              v-else
                              class="comments__item comments__item--quote"
                            >
                              <div class="comments__autor">
                                <img
                                  class="comments__avatar"
                                  src="img/user.svg"
                                  alt=""
                                />
                                <span
                                  class="comments__name"
                                  v-if="cinema.creators && cinema.creators.name"
                                  >{{ cinema.creators.name }}
                                  <span
                                    v-if="cinema.ptichka"
                                    class="d-flex aligin-items-center justify-content-center moder-user"
                                  >
                                    <img src="img/verify.svg" alt="" /> </span
                                ></span>
                                <span class="comments__name" v-else
                                  >No Name</span
                                >
                                <span class="comments__time">
                                  {{ cinema.time_create.slice(5, 7) }}.{{
                                    cinema.time_create.slice(8, 10)
                                  }}.{{ cinema.time_create.slice(0, 4) }},
                                  {{ cinema.time_create.slice(11, 16) }}</span
                                >
                              </div>
                              <p class="comments__text">
                                <span>{{ commnet.description }}</span>
                                {{ cinema.description }}
                              </p>
                              <div class="comments__actions">
                                <div class="comments__rate">
                                  <button type="button">
                                    <svg
                                      @click="click_like(true, cinema.id)"
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewbox="0 0 24 24"
                                    >
                                      <path
                                        d="M21.3,10.08A3,3,0,0,0,19,9H14.44L15,7.57A4.13,4.13,0,0,0,11.11,2a1,1,0,0,0-.91.59L7.35,9H5a3,3,0,0,0-3,3v7a3,3,0,0,0,3,3H17.73a3,3,0,0,0,2.95-2.46l1.27-7A3,3,0,0,0,21.3,10.08ZM7,20H5a1,1,0,0,1-1-1V12a1,1,0,0,1,1-1H7Zm13-7.82-1.27,7a1,1,0,0,1-1,.82H9V10.21l2.72-6.12A2.11,2.11,0,0,1,13.1,6.87L12.57,8.3A2,2,0,0,0,14.44,11H19a1,1,0,0,1,.77.36A1,1,0,0,1,20,12.18Z"
                                      ></path></svg
                                    >{{ cinema.top }}
                                  </button>

                                  <button type="button">
                                    {{ cinema.min
                                    }}<svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewbox="0 0 24 24"
                                      @click="click_like(false, cinema.id)"
                                    >
                                      <path
                                        d="M19,2H6.27A3,3,0,0,0,3.32,4.46l-1.27,7A3,3,0,0,0,5,15H9.56L9,16.43A4.13,4.13,0,0,0,12.89,22a1,1,0,0,0,.91-.59L16.65,15H19a3,3,0,0,0,3-3V5A3,3,0,0,0,19,2ZM15,13.79l-2.72,6.12a2.13,2.13,0,0,1-1.38-2.78l.53-1.43A2,2,0,0,0,9.56,13H5a1,1,0,0,1-.77-.36A1,1,0,0,1,4,11.82l1.27-7a1,1,0,0,1,1-.82H15ZM20,12a1,1,0,0,1-1,1H17V4h2a1,1,0,0,1,1,1Z"
                                      ></path>
                                    </svg>
                                  </button>
                                </div>

                                <button type="button">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewbox="0 0 24 24"
                                  >
                                    <path
                                      d="M21.707,11.293l-8-8A.99991.99991,0,0,0,12,4V7.54492A11.01525,11.01525,0,0,0,2,18.5V20a1,1,0,0,0,1.78418.62061,11.45625,11.45625,0,0,1,7.88672-4.04932c.0498-.00635.1748-.01611.3291-.02588V20a.99991.99991,0,0,0,1.707.707l8-8A.99962.99962,0,0,0,21.707,11.293ZM14,17.58594V15.5a.99974.99974,0,0,0-1-1c-.25488,0-1.2959.04932-1.56152.085A14.00507,14.00507,0,0,0,4.05176,17.5332,9.01266,9.01266,0,0,1,13,9.5a.99974.99974,0,0,0,1-1V6.41406L19.58594,12Z"
                                    ></path></svg
                                  >JAVOB BERISH
                                </button>
                                <button type="button">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewbox="0 0 24 24"
                                  >
                                    <path
                                      d="M19,14a1,1,0,0,0-1.22.72A7,7,0,0,1,11,20H5.41l.64-.63a1,1,0,0,0,0-1.41A7,7,0,0,1,9.25,6.22a1,1,0,0,0-.5-1.94A9,9,0,0,0,4,18.62L2.29,20.29a1,1,0,0,0-.21,1.09A1,1,0,0,0,3,22h8a9,9,0,0,0,8.72-6.75A1,1,0,0,0,19,14ZM21,2a1,1,0,0,0-1,1h0a5,5,0,1,0,.3,7.75A1,1,0,1,0,19,9.25,3,3,0,1,1,17,4a3,3,0,0,1,2.23,1H18a1,1,0,0,0,0,2h3a1,1,0,0,0,1-1V3A1,1,0,0,0,21,2Z"
                                    ></path></svg
                                  >Quote
                                </button>
                              </div>
                            </li>
                          </div>
                        </ul>

                        <form
                          action="#"
                          class="sign__form sign__form--comments"
                        >
                          <div class="sign__group">
                            <h6 style="color: white">{{ this.string_data }}</h6>
                            <textarea
                              id="text"
                              name="text"
                              class="sign__textarea"
                              placeholder="Fikr yozing"
                            ></textarea>
                          </div>
                          <button
                            @click="send_message"
                            type="button"
                            class="sign__btn sign__btn--small"
                          >
                            <span>Yuborish</span>
                          </button>
                        </form>
                      </div>
                    </div>
                    <!-- end comments -->
                  </div>
                </div>

                <div
                  class="tab-pane fade"
                  id="tab-2"
                  role="tabpanel"
                  aria-labelledby="2-tab"
                  tabindex="0"
                >
                  <div class="row" v-if="data_get">
                    <!-- reviews -->
                    <div class="col-12">
                      <div class="reviews">
                        <ul class="reviews__list">
                          <li
                            v-for="sharx in data_get.sharx"
                            :key="sharx.id"
                            class="reviews__item"
                          >
                            <div class="reviews__autor">
                              <img
                                class="reviews__avatar"
                                src="img/user.svg"
                                alt=""
                              />
                              <span class="reviews__name">{{
                                sharx.title
                              }}</span>
                              <span class="reviews__time">
                                {{ sharx.time_create.slice(5, 7) }}.{{
                                  sharx.time_create.slice(8, 10)
                                }}.{{ sharx.time_create.slice(0, 4) }},
                                <span
                                  v-if="sharx.creators && sharx.creators.name"
                                  >{{ sharx.creators.name }}</span
                                >
                                tomonidan</span
                              >

                              <span class="reviews__rating"
                                ><svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  enable-background="new 0 0 24 24"
                                  viewbox="0 0 24 24"
                                >
                                  <path
                                    d="M22,10.1c0.1-0.5-0.3-1.1-0.8-1.1l-5.7-0.8L12.9,3c-0.1-0.2-0.2-0.3-0.4-0.4C12,2.3,11.4,2.5,11.1,3L8.6,8.2L2.9,9C2.6,9,2.4,9.1,2.3,9.3c-0.4,0.4-0.4,1,0,1.4l4.1,4l-1,5.7c0,0.2,0,0.4,0.1,0.6c0.3,0.5,0.9,0.7,1.4,0.4l5.1-2.7l5.1,2.7c0.1,0.1,0.3,0.1,0.5,0.1v0c0.1,0,0.1,0,0.2,0c0.5-0.1,0.9-0.6,0.8-1.2l-1-5.7l4.1-4C21.9,10.5,22,10.3,22,10.1z"
                                  ></path></svg
                                >{{ sharx.rating }}</span
                              >
                            </div>
                            <p class="reviews__text">
                              {{ sharx.description }}
                            </p>
                          </li>
                        </ul>

                        <form
                          action="#"
                          class="sign__form sign__form--comments"
                        >
                          <div class="row">
                            <div class="col-12 col-md-6">
                              <div class="sign__group">
                                <input
                                  type="text"
                                  class="sign__input"
                                  placeholder="Sarlavha"
                                  id="sharx_d"
                                />
                              </div>
                            </div>

                            <div class="col-12 col-md-6">
                              <div class="sign__group">
                                <select
                                  class="sign__select"
                                  name="rating"
                                  id="rating"
                                >
                                  <option value="0">Reyting</option>
                                  <option value="1">1 yulduz</option>
                                  <option value="2">2 yulduz</option>
                                  <option value="3">3 yulduz</option>
                                  <option value="4">4 yulduz</option>
                                  <option value="5">5 yulduz</option>
                                  <option value="6">6 yulduz</option>
                                  <option value="7">7 yulduz</option>
                                  <option value="8">8 yulduz</option>
                                  <option value="9">9 yulduz</option>
                                  <option value="10">10 yulduz</option>
                                </select>
                              </div>
                            </div>

                            <div class="col-12">
                              <div class="sign__group">
                                <textarea
                                  id="sharx_m"
                                  class="sign__textarea"
                                  placeholder="Sharh yozing"
                                ></textarea>
                              </div>
                            </div>

                            <div class="col-12">
                              <button
                                @click="clicksharx"
                                type="button"
                                class="sign__btn sign__btn--small"
                              >
                                <span>Yuborish</span>
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                    <!-- end reviews -->
                  </div>
                </div>

                <div
                  class="tab-pane fade"
                  id="tab-3"
                  role="tabpanel"
                  aria-labelledby="3-tab"
                  tabindex="0"
                >
                  <!-- project gallery -->
                  <div class="gallery" itemscope="">
                    <div
                      v-if="data_get"
                      class="row row--grid gallery_in"
                      id="lightgallery"
                    >
                      <!-- gallery item -->
                      <a
                        v-for="img in data_get.allimage"
                        :key="img.id"
                        :href="img.image"
                        itemprop="contentUrl"
                        data-size="1920x1280"
                      >
                        <img
                          :src="`${img.image}`"
                          itemprop="thumbnail"
                          alt="project-4"
                        />
                      </a>
                      <!-- end gallery item -->
                    </div>
                  </div>
                  <!-- end project gallery -->
                </div>
              </div>
              <!-- end content tabs -->
            </div>

            <!-- sidebar -->
            <div class="col-12 col-lg-4">
              <div class="row">
                <!-- section title -->
                <div class="col-12">
                  <h2 class="section__title section__title--sidebar">
                    Reytingi yuqori
                  </h2>
                </div>
                <!-- end section title -->

                <!-- item -->
                <div
                  v-for="cinema in top_look"
                  :key="cinema.id"
                  class="col-6 col-sm-4 col-lg-6"
                >
                  <div class="item">
                    <div @click="handleClick(cinema.id)" class="item__cover">
                      <img
                        v-if="cinema.images.length > 0"
                        :src="cinema.images[0].image"
                        alt=""
                      />
                      <img v-else src="img/covers/14.png" alt="" />
                      <span style="position: absolute;" class="cinema.image">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewbox="0 0 24 24"
                        >
                          <path
                            d="M18.54,9,8.88,3.46a3.42,3.42,0,0,0-5.13,3V17.58A3.42,3.42,0,0,0,7.17,21a3.43,3.43,0,0,0,1.71-.46L18.54,15a3.42,3.42,0,0,0,0-5.92Zm-1,4.19L7.88,18.81a1.44,1.44,0,0,1-1.42,0,1.42,1.42,0,0,1-.71-1.23V6.42a1.42,1.42,0,0,1,.71-1.23A1.51,1.51,0,0,1,7.17,5a1.54,1.54,0,0,1,.71.19l9.66,5.58a1.42,1.42,0,0,1,0,2.46Z"
                          ></path>
                        </svg>
                      </span>
                    </div>
                    <div class="item__content">
                      <h3 class="item__title">
                        <div @click="handleClick(cinema.id)">{{ cinema.title }}</div>
                      </h3>
                      <span class="item__category">
                        <NuxtLink 
                          v-for="item1 in cinema.janrlar"
                          :key="item1.id"
                          to="#"
                        >
                          {{ item1.title }}</NuxtLink
                        >
                      </span>
                      <span class="item__rate">{{ cinema.mark }}</span>
                    </div>
                  </div>
                </div>
                <!-- end item -->
              </div>
            </div>
            <!-- end sidebar -->
          </div>
        </div>
      </section>
      <!-- end content -->
    </div>
  </div>
</template>

<script>
import lightGallery from 'lightgallery'
import axios from 'axios'
import lgThumbnail from 'lightgallery/plugins/thumbnail'
import lgZoom from 'lightgallery/plugins/zoom'
import lgRotate from 'lightgallery/plugins/rotate'
import lgVideo from 'lightgallery/plugins/video'
import lgFullscreen from 'lightgallery/plugins/fullscreen'
export default {
  name: 'WatchingPage',
  data() {
    return {
      data_get: null,
      top_look: null,
      one_user: null,
      comment_id: 0,
      quote: false,
      string_data: '',
    }
  },
  mounted() {
    this.getCinemaData()
    this.getData()
    lightGallery(document.getElementById('lightgallery'), {
      plugins: [lgZoom, lgThumbnail, lgRotate, lgVideo, lgFullscreen],
      licenseKey: 'your_license_key',
      speed: 500,
    })
    var Scrollbar = window.Scrollbar

    if (document.querySelector('.item__description--details')) {
      Scrollbar.init(document.querySelector('.item__description--details'), {
        damping: 0.1,
        renderByPixels: true,
        alwaysShowTracks: true,
        continuousScrolling: true,
      })
    }
    if (document.querySelector('.section__details-bg')) {
      var mainBg = document.querySelector('.section__details-bg')

      if (mainBg.getAttribute('data-bg')) {
        mainBg.style.background = `url(${mainBg.getAttribute('data-bg')})`
        mainBg.style.backgroundPosition = 'center center'
        mainBg.style.backgroundRepeat = 'no-repeat'
        mainBg.style.backgroundSize = 'cover'
      }
    }
  },
  methods: {
    getData() {
      axios.get(`https://api.uzdub.uz/api/v1/cinema/${localStorage.getItem("selectedItemData")}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}` 
      }
    })
    .then(response => {
      this.data_get=response.data
      console.log(response.data)
    })
    .catch(error => {
      console.error(error)
    })
    },
    async getCinemaData() {
      try {
      var data12=await axios.post("https://api.uzdub.uz/api/lookme",{cinema_id:JSON.parse(localStorage.getItem("selectedItemData")), user_id:JSON.parse((localStorage.getItem("user_data"))).id})
        const response = await axios.get('https://api.uzdub.uz/api/v1/cinema');
		    this.top_look=response.data.sort((a,b)=>a.more_loking-b.more_loking)
console.log(this.top_look);
      } catch (error) {
        console.error(error, 'xato')
      }
    },
    send_message() {
      if (localStorage.getItem('user_data')) {
        var data = new FormData()

data.append('cinema_id', JSON.parse(localStorage.getItem("selectedItemData")))
data.append('supcomment',this.comment_id)
data.append('description',document.querySelector(".sign__textarea").value)
data.append('creator',JSON.parse((localStorage.getItem("user_data"))).id)
data.append('quanty',this.quote)
axios.post('https://api.uzdub.uz/api/v1/comment/', data, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem("token")}` 
        }
      })
        .then(response => {
          alert("saqlandi")
          this.getData()
          this.comment_id=0
    this.string_data=""
    document.querySelector(".sign__textarea").value=""
          // Muvaffaqiyatli amalga oshirildi
        })
        .catch(error => {
          console.log(error);
          // Xatolik yuz berdi
        });
  }else{
alert("user not")
window.location="/Signin"
  }},
   click_like(bol,id){
    var data=new FormData()
    const url = 'https://api.uzdub.uz/api/v1/comment_mark';
    if(localStorage.getItem("user_data")){
    data.append("dislike",bol)
    data.append('comment_id',id)
   data.append('creator',JSON.parse((localStorage.getItem("user_data"))).id)
axios.post(url, data)
  .then(response => {
  alert("saqlandi")
    this.getData()
  
  })
  .catch(error => {
    alert("xato")
    console.log(error);  
  })
 }else{
alert("user not")
window.location="/Signin"
    }
var data =new FormData()


   },
   clicksharx(){
  
   if(localStorage.getItem("user_data")){ 
    var data=new FormData()
data.append("rating",document.querySelector('#rating').value)
data.append("cinema_id",JSON.parse(localStorage.getItem("selectedItemData")))
data.append("description",document.querySelector('#sharx_m').value)
data.append("title",document.querySelector('#sharx_d').value)
data.append("creator",JSON.parse((localStorage.getItem("user_data"))).id)
axios.post('https://api.uzdub.uz/api/v1/sharx/', data, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem("token")}` 
        }
      })
        .then(response => {
          document.querySelector('#sharx_m').value=""
          alert("saqlandi")
          document.querySelector('#sharx_d').value=""
          this.getData()
          this.comment_id=0
    this.string_data=""
    document.querySelector(".sign__textarea").value=""
          // Muvaffaqiyatli amalga oshirildi
        })
        .catch(error => {
          console.log(error);
          alert('xarolik')
          // Xatolik yuz berdi
        });
  
   }else{
    window.location="/Signin"
alert("user not")
   }

    
   },
    updateData(data) {
      this.comment_id = data.id
      this.string_data = data.description
    },
  },
}
</script>
