<template>
	<div>
		<!-- Modal -->
		<div v-if="!data_get" class="lodaing_page">
			<div class="loading">
				<span>UZDUB</span>
			</div>
		</div>
		<div v-else>
			<!-- details -->
			<section class="section section--details">
				<!-- details background -->
				<div v-if="data_get.allimage[1]" class="section__details-bg"
					:style="'background: url(' + data_get.allimage[1].image + ') center center / cover no-repeat'"></div>
				<!-- end details background -->
				<!-- details content -->
				<div class="modal" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
					<div class="modal-dialog modal-dialog-centered">
						<div class="modal-content modal-treyler--content">
							<div class="modal-header">
								<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">
									<svg width="40" height="40" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path
											d="M15 26.25C13.5226 26.25 12.0597 25.959 10.6948 25.3936C9.3299 24.8283 8.08971 23.9996 7.04505 22.955C6.00039 21.9103 5.17172 20.6701 4.60635 19.3052C4.04099 17.9403 3.75 16.4774 3.75 15C3.75 13.5226 4.04099 12.0597 4.60636 10.6948C5.17172 9.3299 6.00039 8.08971 7.04505 7.04505C8.08971 6.00039 9.3299 5.17172 10.6948 4.60635C12.0597 4.04099 13.5226 3.75 15 3.75C16.4774 3.75 17.9403 4.04099 19.3052 4.60636C20.6701 5.17172 21.9103 6.00039 22.955 7.04505C23.9996 8.08971 24.8283 9.3299 25.3936 10.6948C25.959 12.0597 26.25 13.5226 26.25 15C26.25 16.4774 25.959 17.9403 25.3936 19.3052C24.8283 20.6701 23.9996 21.9103 22.9549 22.955C21.9103 23.9996 20.6701 24.8283 19.3052 25.3936C17.9403 25.959 16.4774 26.25 15 26.25L15 26.25Z"
											stroke="white" stroke-linecap="round" />
										<path d="M11.25 11.25L18.75 18.75" stroke="white" stroke-linecap="round" />
										<path d="M18.75 11.25L11.25 18.75" stroke="white" stroke-linecap="round" />
									</svg>
								</button>
							</div>
							<div class="modal-body modal-treyler">
								<iframe :src="data_get.treler" allow="autoplay; fullscreen; picture-in-picture; encrypted-media;"
									frameborder="0" allowfullscreen></iframe>
							</div>
						</div>
					</div>
				</div>
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
								<div v-if="data_get && data_get.allimage.length > 0" class="item__cover item__cover--anime">
									<img :src="data_get.allimage[0].image" alt="" class="item-cover__anime" />
									<div v-if="data_get.payment != 'Free'"
										class="d-flex aligin-items-center justify-content-center premium-icon">
										<img style="height:40px;" src="/img/USD.svg" alt="" />
									</div>
								</div>
								<!-- end card cover -->

								<!-- card content -->
								<div class="item__content">
									<div class="item__wrap">
										<span v-if="data_get" class="item__rate">{{
											data_get.mark.toFixed(1)
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
											<a v-for="item in data_get.janr" :key="item.id" role="button">{{ item.title
											}}</a>
										</li>
										<li v-if="data_get">
											<span>Davomiyligi:</span> {{ data_get.time }} min
										</li>
										<li v-if="data_get">
											<span>Yili:</span> {{ data_get.year }}
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
											<span>Ovoz berdi: <a role="button">{{ data_get.ovoz_berdi }}</a></span>
										</li>
										<li v-if="data_get">
											<span>Tarjimon:</span>
											<a v-for="item in data_get.tarjima" :key="item.id" role="button">{{ item.title
											}}</a>
										</li>
										<li v-if="data_get">
											<span>Tayming:</span>
											<a role="button">{{ data_get.tayming }}</a>
										</li>
									</ul>
								</div>
								<div v-if="data_get" class="item__description item__description--details" data-scrollbar="true"
									tabindex="-1" style="overflow: hidden; outline: none;">
									<div class="scroll-content">
										<p>
											{{ data_get.description }}
										</p>
									</div>
								</div>
								<!-- end card content -->
							</div>
						</div>
						<!-- end content -->
						<!-- player -->
						<div class="col-12 col-xl-6">
							<div class="cinema-iframe" v-if="data_get && data_get.video">
								<iframe :src="data_get.video" allow="autoplay; fullscreen; picture-in-picture; encrypted-media;"
									frameborder="0" allowfullscreen></iframe>
								<button v-if="!data_get.treler.length == ''" type="button" class="sign__btn mt-2" data-bs-toggle="modal"
									data-bs-target="#exampleModal">
									<span>Treylerni tomosha qiling</span>
								</button>
							</div>
							<div v-if="!data_get.video" class="cinema-iframe cinema-vip">
								<iframe v-if="!data_get.treler.length == ''" :src="data_get.treler"
									allow="autoplay; fullscreen; picture-in-picture; encrypted-media;" frameborder="0"
									allowfullscreen></iframe>
								<div class="get-vip">
									<p>
										Ushbu mediani ko'rish uchun obuna bo'ling! <br>
										UZDUB PRIME obunasiga kirishingiz bilan bepul animelar, serial, ongoing va boshqa Premium medialardan
										ham foydalanishingiz mumkin.</p>
									<a href="https://t.me/W_339A" class="sign__btn">
										<span>Obuna bo'lish</span>
									</a>
								</div>
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
								<ul class="nav nav-tabs content__tabs" id="content__tabs" role="tablist">
									<li class="nav-item" role="presentation">
										<button id="1-tab" class="active" data-bs-toggle="tab" data-bs-target="#tab-1" type="button"
											role="tab" aria-controls="tab-1" aria-selected="true">
											Izohlar
										</button>
									</li>

									<li class="nav-item" role="presentation">
										<button id="2-tab" data-bs-toggle="tab" data-bs-target="#tab-2" type="button" role="tab"
											aria-controls="tab-2" aria-selected="false">
											Sharhlar
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
								<div class="tab-pane fade show active" id="tab-1" role="tabpanel" aria-labelledby="1-tab" tabindex="0">
									<div class="row">
										<!-- comments -->
										<div class="col-12">
											<div class="comments" v-if="data_get">
												<ul v-for="commnet in data_get.comment" :key="commnet.id" class="comments__list">
													<li class="comments__item">
														<div class="comments__autor">
															<img class="comments__avatar" src="/img/user.svg" alt="" />
															<span class="comments__name" v-if="commnet.creators && commnet.creators.name">{{
																commnet.creators.name }}
																<span v-if="commnet.ptichka"
																	class="d-flex aligin-items-center justify-content-center moder-user">
																	<img src="img/verify.svg" alt="" /> </span></span>
															<span class="comments__name" v-else>No Name</span>
															<span class="comments__time">
																{{ commnet.time_create.slice(5, 7) }}.{{
																	commnet.time_create.slice(8, 10)
																}}.{{ commnet.time_create.slice(0, 4) }},
																{{ commnet.time_create.slice(11, 16) }}</span>
														</div>
														<p class="comments__text">
															{{ commnet.description }}
														</p>
														<div class="comments__actions">
															<div class="comments__rate">
																<button type="button">
																	<svg @click="click_like(true, commnet.id)" xmlns="http://www.w3.org/2000/svg"
																		viewbox="0 0 24 24">
																		<path
																			d="M21.3,10.08A3,3,0,0,0,19,9H14.44L15,7.57A4.13,4.13,0,0,0,11.11,2a1,1,0,0,0-.91.59L7.35,9H5a3,3,0,0,0-3,3v7a3,3,0,0,0,3,3H17.73a3,3,0,0,0,2.95-2.46l1.27-7A3,3,0,0,0,21.3,10.08ZM7,20H5a1,1,0,0,1-1-1V12a1,1,0,0,1,1-1H7Zm13-7.82-1.27,7a1,1,0,0,1-1,.82H9V10.21l2.72-6.12A2.11,2.11,0,0,1,13.1,6.87L12.57,8.3A2,2,0,0,0,14.44,11H19a1,1,0,0,1,.77.36A1,1,0,0,1,20,12.18Z">
																		</path>
																	</svg>{{ commnet.top }}
																</button>

																<button type="button">
																	{{ commnet.min
																	}}<svg @click="click_like(false, commnet.id)" xmlns="http://www.w3.org/2000/svg"
																		viewbox="0 0 24 24">
																		<path
																			d="M19,2H6.27A3,3,0,0,0,3.32,4.46l-1.27,7A3,3,0,0,0,5,15H9.56L9,16.43A4.13,4.13,0,0,0,12.89,22a1,1,0,0,0,.91-.59L16.65,15H19a3,3,0,0,0,3-3V5A3,3,0,0,0,19,2ZM15,13.79l-2.72,6.12a2.13,2.13,0,0,1-1.38-2.78l.53-1.43A2,2,0,0,0,9.56,13H5a1,1,0,0,1-.77-.36A1,1,0,0,1,4,11.82l1.27-7a1,1,0,0,1,1-.82H15ZM20,12a1,1,0,0,1-1,1H17V4h2a1,1,0,0,1,1,1Z">
																		</path>
																	</svg>
																</button>
															</div>
															<a href="#replay_coment">
																<button type="button" @click="updateData(commnet)">
																	<svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 24 24">
																		<path
																			d="M21.707,11.293l-8-8A.99991.99991,0,0,0,12,4V7.54492A11.01525,11.01525,0,0,0,2,18.5V20a1,1,0,0,0,1.78418.62061,11.45625,11.45625,0,0,1,7.88672-4.04932c.0498-.00635.1748-.01611.3291-.02588V20a.99991.99991,0,0,0,1.707.707l8-8A.99962.99962,0,0,0,21.707,11.293ZM14,17.58594V15.5a.99974.99974,0,0,0-1-1c-.25488,0-1.2959.04932-1.56152.085A14.00507,14.00507,0,0,0,4.05176,17.5332,9.01266,9.01266,0,0,1,13,9.5a.99974.99974,0,0,0,1-1V6.41406L19.58594,12Z">
																		</path>
																	</svg>JAVOB BERISH
																</button>
															</a>
														</div>
													</li>
													<div v-for="cinema in commnet.subcomment" :key="cinema.id">
														<li v-if="!cinema.quanty" class="comments__item comments__item--answer">
															<div class="comments__autor">
																<img class="comments__avatar" src="/img/user.svg" alt="" />
																<span class="comments__name" v-if="cinema.creators && cinema.creators.name">{{
																	cinema.creators.name }}
																	<span v-if="cinema.ptichka"
																		class="d-flex aligin-items-center justify-content-center moder-user">
																		<img src="img/verify.svg" alt="" /> </span></span>
																<span class="comments__name" v-else>No Name</span>
																<span class="comments__time">
																	{{ cinema.time_create.slice(5, 7) }}.{{
																		cinema.time_create.slice(8, 10)
																	}}.{{ cinema.time_create.slice(0, 4) }},
																	{{ cinema.time_create.slice(11, 16) }}</span>
															</div>
															<p class="comments__text">
																{{ cinema.description }}
															</p>
															<div class="comments__actions comments__actions-two">
																<div class="comments__rate">
																	<button type="button">
																		<svg @click="click_like(true, cinema.id)" xmlns="http://www.w3.org/2000/svg"
																			viewbox="0 0 24 24">
																			<path
																				d="M21.3,10.08A3,3,0,0,0,19,9H14.44L15,7.57A4.13,4.13,0,0,0,11.11,2a1,1,0,0,0-.91.59L7.35,9H5a3,3,0,0,0-3,3v7a3,3,0,0,0,3,3H17.73a3,3,0,0,0,2.95-2.46l1.27-7A3,3,0,0,0,21.3,10.08ZM7,20H5a1,1,0,0,1-1-1V12a1,1,0,0,1,1-1H7Zm13-7.82-1.27,7a1,1,0,0,1-1,.82H9V10.21l2.72-6.12A2.11,2.11,0,0,1,13.1,6.87L12.57,8.3A2,2,0,0,0,14.44,11H19a1,1,0,0,1,.77.36A1,1,0,0,1,20,12.18Z">
																			</path>
																		</svg>{{ cinema.top }}
																	</button>

																	<button type="button">
																		{{ cinema.min
																		}}<svg @click="click_like(false, cinema.id)" xmlns="http://www.w3.org/2000/svg"
																			viewbox="0 0 24 24">
																			<path
																				d="M19,2H6.27A3,3,0,0,0,3.32,4.46l-1.27,7A3,3,0,0,0,5,15H9.56L9,16.43A4.13,4.13,0,0,0,12.89,22a1,1,0,0,0,.91-.59L16.65,15H19a3,3,0,0,0,3-3V5A3,3,0,0,0,19,2ZM15,13.79l-2.72,6.12a2.13,2.13,0,0,1-1.38-2.78l.53-1.43A2,2,0,0,0,9.56,13H5a1,1,0,0,1-.77-.36A1,1,0,0,1,4,11.82l1.27-7a1,1,0,0,1,1-.82H15ZM20,12a1,1,0,0,1-1,1H17V4h2a1,1,0,0,1,1,1Z">
																			</path>
																		</svg>
																	</button>
																</div>
															</div>
														</li>
													</div>
												</ul>
												<div id="replay_coment"></div>
												<form action="#" class="sign__form sign__form--comments">
													<div class="sign__group">
														<h6 style="color: white">{{ this.string_data }}</h6>
														<textarea id="text" name="text" class="sign__textarea" placeholder="Fikr yozing"
															required></textarea>
													</div>
													<button @click="send_message" type="button" class="sign__btn sign__btn--small">
														<span>Yuborish</span>
													</button>
												</form>
											</div>
										</div>
										<!-- end comments -->
									</div>
								</div>

								<div class="tab-pane fade" id="tab-2" role="tabpanel" aria-labelledby="2-tab" tabindex="0">
									<div class="row" v-if="data_get">
										<!-- reviews -->
										<div class="col-12">
											<div class="reviews">
												<ul class="reviews__list">
													<li v-for="sharx in data_get.sharx" :key="sharx.id" class="reviews__item">
														<div class="reviews__autor">
															<img class="reviews__avatar" src="/img/user.svg" alt="" />
															<span class="reviews__name">{{
																sharx.title
															}}</span>
															<span class="reviews__time">
																{{ sharx.time_create.slice(5, 7) }}.{{
																	sharx.time_create.slice(8, 10)
																}}.{{ sharx.time_create.slice(0, 4) }},
																<span v-if="sharx.creators && sharx.creators.name">{{
																	sharx.creators.name }}</span>
																tomonidan</span>

															<span class="reviews__rating"><svg xmlns="http://www.w3.org/2000/svg"
																	enable-background="new 0 0 24 24" viewbox="0 0 24 24">
																	<path
																		d="M22,10.1c0.1-0.5-0.3-1.1-0.8-1.1l-5.7-0.8L12.9,3c-0.1-0.2-0.2-0.3-0.4-0.4C12,2.3,11.4,2.5,11.1,3L8.6,8.2L2.9,9C2.6,9,2.4,9.1,2.3,9.3c-0.4,0.4-0.4,1,0,1.4l4.1,4l-1,5.7c0,0.2,0,0.4,0.1,0.6c0.3,0.5,0.9,0.7,1.4,0.4l5.1-2.7l5.1,2.7c0.1,0.1,0.3,0.1,0.5,0.1v0c0.1,0,0.1,0,0.2,0c0.5-0.1,0.9-0.6,0.8-1.2l-1-5.7l4.1-4C21.9,10.5,22,10.3,22,10.1z">
																	</path>
																</svg>{{ sharx.rating }}</span>
														</div>
														<p class="reviews__text">
															{{ sharx.description }}
														</p>
													</li>
												</ul>

												<form action="#" class="sign__form sign__form--comments">
													<div class="row">
														<div class="col-12 col-md-6">
															<div class="sign__group">
																<input type="text" class="sign__input" placeholder="Sarlavha" id="sharx_d" required />
															</div>
														</div>

														<div class="col-12 col-md-6">
															<div class="sign__group">
																<select class="sign__select" name="rating" id="rating" required>
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
																<textarea id="sharx_m" class="sign__textarea" placeholder="Sharh yozing"
																	required></textarea>
															</div>
														</div>

														<div class="col-12">
															<button @click="clicksharx" type="button" class="sign__btn sign__btn--small">
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
								<div v-for="cinema in top_look" :key="cinema.id" class="col-6 col-sm-4 col-lg-6">
									<div class="item">
										<div @click="handleClick(cinema.id, cinema.looking)" class="item__cover item__cover--rate">
											<img v-if="cinema.images.length > 0" :src="cinema.images[0].image" alt="" class="item-cover__img" />
											<div v-if="cinema.payment != 'Free'"
												class="d-flex aligin-items-center justify-content-center premium-icon">
												<img style="height:40px;" src="/img/USD.svg" alt="" />
											</div>
											<span style="position: absolute;" class="item__play">
												<svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 24 24">
													<path
														d="M18.54,9,8.88,3.46a3.42,3.42,0,0,0-5.13,3V17.58A3.42,3.42,0,0,0,7.17,21a3.43,3.43,0,0,0,1.71-.46L18.54,15a3.42,3.42,0,0,0,0-5.92Zm-1,4.19L7.88,18.81a1.44,1.44,0,0,1-1.42,0,1.42,1.42,0,0,1-.71-1.23V6.42a1.42,1.42,0,0,1,.71-1.23A1.51,1.51,0,0,1,7.17,5a1.54,1.54,0,0,1,.71.19l9.66,5.58a1.42,1.42,0,0,1,0,2.46Z">
													</path>
												</svg>
											</span>
										</div>
										<div class="item__content">
											<h3 class="item__title item__title-two" @click="handleClick(cinema.id, cinema.looking)">
												{{ cinema.title }}
											</h3>
											<span @click="handleClick(cinema.id, cinema.looking)" class="item__category">
												<NuxtLink v-for="item1 in cinema.janrlar" :key="item1.id" to="">
													{{ item1.title }}</NuxtLink>
											</span>
											<span class="item__rate">{{ cinema.mark.toFixed(1) }}</span>
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
			<div id="alert_modal" class="toast align-items-center" role="alert" aria-live="assertive" aria-atomic="false">
				<div class="d-flex">
					<div id="alert_text" class="toast-body">
						Hello, world! This is a toast message.
					</div>
					<button type="button" class="btn-close me-2 m-auto" data-bs-dismiss="toast" @click="AlertNone()"
						aria-label="Close"></button>
				</div>

			</div>
		</div>
	</div>
</template>

<script>
import axios from 'axios'
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
	computed: {
		_id() {
			return this.$route.params.id
		},
	},
	mounted() {
		this.getCinemaData()
		this.getData()
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
		axios.get('https://api.uzdub.uz/api/v1/cinema').then(response => {
			this.top_look = response.data.sort((a, b) => b.mark - a.mark).slice(0, 6)
		})
	},
	methods: {
		getData() {
			axios.get(`https://api.uzdub.uz/api/v1/cinema/${this._id}`, {
				headers: {
					Authorization: `Bearer ${localStorage.getItem("token")}`
				}
			})
				.then(response => {
					this.data_get = response.data;
				})
				.catch(error => {
					console.error(error)
				})
		},
		async getCinemaData() {
			try {
				var data12 = await axios.post("https://api.uzdub.uz/api/lookme", { cinema_id: JSON.parse(this._id), user_id: JSON.parse((localStorage.getItem("user_data"))).id })
			} catch (error) {
				console.error(error, 'xato')
			}
		},
		send_message() {
			if (localStorage.getItem('user_data')) {
				if (document.querySelector(".sign__textarea").value != "") {
					document.querySelector(".sign__textarea").style = "border-color: none;"

					var data = new FormData()

					data.append('cinema_id', JSON.parse(this._id))
					data.append('supcomment', this.comment_id)
					data.append('description', document.querySelector(".sign__textarea").value)
					data.append('creator', JSON.parse((localStorage.getItem("user_data"))).id)
					data.append('quanty', this.quote)
					axios.post('https://api.uzdub.uz/api/v1/comment/', data, {
						headers: {
							'Authorization': `Bearer ${localStorage.getItem("token")}`
						}
					})
						.then(response => {
							document.querySelector('#alert_modal').style = 'display:block'
							setTimeout(() => {
								document.querySelector('#alert_modal').style = 'display:none'
							}, 3000)
							document.querySelector('#alert_text').innerHTML = 'Saqlandi'
							this.getData()
							this.comment_id = 0
							this.string_data = ""
							document.querySelector(".sign__textarea").value = ""
							// Muvaffaqiyatli amalga oshirildi
						})
						.catch(error => {
							console.log(error);
							// Xatolik yuz berdi
						});
				} else {
					document.querySelector(".sign__textarea").style = "border-color: #ff55a5;"
				}
			} else {
				document.querySelector('#alert_modal').style = 'display:block'
				setTimeout(() => {
					document.querySelector('#alert_modal').style = 'display:none'
				}, 3000)
				document.querySelector('#alert_text').innerHTML = 'Ro\'yxatdan o\'ting'
				window.location = "/Signin"
			}
		},
		click_like(bol, id) {
			var data = new FormData()
			const url = 'https://api.uzdub.uz/api/v1/comment_mark';
			if (localStorage.getItem("user_data")) {
				axios.get(`${url}`).then(res => {
					const Filter = res.data.filter(item => item.creator == JSON.parse((localStorage.getItem("user_data"))).id && item.comment_id == id)
					if (Filter.length > 0) {
						axios.delete(`${url}/${Filter[0].id}`).then(res => {
							data.append("dislike", bol)
							data.append('comment_id', id)
							data.append('creator', JSON.parse((localStorage.getItem("user_data"))).id)
							axios.post(url, data)
								.then(response => {
									this.getData()
								})
								.catch(error => {
									document.querySelector('#alert_modal').style = 'display:block'
									setTimeout(() => {
										document.querySelector('#alert_modal').style = 'display:none'
									}, 3000)
									document.querySelector('#alert_text').innerHTML = 'Xato'
									console.log(error);
								})
						})
					} else {
						data.append("dislike", bol)
						data.append('comment_id', id)
						data.append('creator', JSON.parse((localStorage.getItem("user_data"))).id)
						axios.post(url, data)
							.then(response => {
								document.querySelector('#alert_modal').style = 'display:block'
								setTimeout(() => {
									document.querySelector('#alert_modal').style = 'display:none'
								}, 3000)
								document.querySelector('#alert_text').innerHTML = 'Saqlandi'
								this.getData()
							})
							.catch(error => {
								document.querySelector('#alert_modal').style = 'display:block'
								setTimeout(() => {
									document.querySelector('#alert_modal').style = 'display:none'
								}, 3000)
								document.querySelector('#alert_text').innerHTML = 'Xato'
								console.log(error);
							})
					}
				})

			} else {
				document.querySelector('#alert_modal').style = 'display:block'
				setTimeout(() => {
					document.querySelector('#alert_modal').style = 'display:none'
				}, 3000)
				document.querySelector('#alert_text').innerHTML = 'User not'
				window.location = "/Signin"
			}
			var data = new FormData()


		},
		clicksharx() {
			if (localStorage.getItem("user_data")) {
				if (document.querySelector("#sharx_m").value == "") {
					document.querySelector("#sharx_m").style = "border-color: #ff55a5;"
				} else {
					document.querySelector("#sharx_m").style = "border-color: none;"
				}
				if (document.querySelector("#sharx_d").value == "") {
					document.querySelector("#sharx_d").style = "border-color: #ff55a5;"
				} else {
					document.querySelector("#sharx_d").style = "border-color: none;"
				}

				if (document.querySelector('#sharx_m').value != "" && document.querySelector('#sharx_d').value != "") {
					var data = new FormData()
					data.append("rating", document.querySelector('#rating').value)
					data.append("cinema_id", JSON.parse(this._id))
					data.append("description", document.querySelector('#sharx_m').value)
					data.append("title", document.querySelector('#sharx_d').value)
					data.append("creator", JSON.parse((localStorage.getItem("user_data"))).id)
					axios.post('https://api.uzdub.uz/api/v1/sharx/', data, {
						headers: {
							'Authorization': `Bearer ${localStorage.getItem("token")}`
						}
					})
						.then(response => {
							var formdata = new FormData()
							formdata.append("title", document.querySelector("#rating").value)
							formdata.append("cinema_id", JSON.parse(this._id))

							axios.post(`https://api.uzdub.uz/api/v1/mark`, formdata).then(res => {

							})
							document.querySelector('#sharx_m').value = ""
							// document.querySelector('#alert_modal').style = 'display:block'
							// setTimeout(() => {
							// 	document.querySelector('#alert_modal').style = 'display:none'
							// }, 3000)
							// document.querySelector('#alert_text').innerHTML = 'Saqlandi'
							document.querySelector('#sharx_d').value = ""
							this.getData()
							this.comment_id = 0
							this.string_data = ""
							document.querySelector(".sign__textarea").value = ""
							// Muvaffaqiyatli amalga oshirildi
						})
						.catch(error => {
							console.log(error);
							document.querySelector('#alert_modal').style = 'display:block'
							setTimeout(() => {
								document.querySelector('#alert_modal').style = 'display:none'
							}, 3000)
							document.querySelector('#alert_text').innerHTML = 'Xatolik'
							// Xatolik yuz berdi
						});
				}
			} else {
				window.location = "/Signin"
				document.querySelector('#alert_modal').style = 'display:block'
				setTimeout(() => {
					document.querySelector('#alert_modal').style = 'display:none'
				}, 3000)
				document.querySelector('#alert_text').innerHTML = 'User not'
			}


		},
		updateData(data) {
			this.comment_id = data.id
			this.string_data = data.description
		},
		handleClick(index, ban) {
			if (ban) {
				const selectedItem = index;
				localStorage.setItem('selectedItemData', JSON.stringify(selectedItem));
				window.location = `/watching/${index}`;
			} else {
				document.querySelector("#alert_modal").style = "display:block"
				document.querySelector("#alert_text").innerHTML = "Vaqtinchalik bloklangan..."
				setTimeout(() => {
					document.querySelector("#alert_modal").style = "display:none"
				}, 3000);
			}
		},
		AlertNone() {
			document.querySelector("#alert_modal").style = "display:none"
		}
	},
}
</script>
