<template>
	<div>
		<div v-if="!cinema_data" class="lodaing_page">
			<div class="loading">
				<span>UZDUB</span>
			</div>
		</div>
		<div v-else>
			<!-- page title -->
			<section class="section section--first section--bg" data-bg="img/bg/section__bg.jpg">
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
											<img src="https://i.pinimg.com/564x/ff/9c/86/ff9c8636ef87e9410d14231ae7861e23.jpg" alt="" />
										</div>
										<div class="profile__meta">
											<h3 v-if="one_user" class="d-flex aligin-items-center justify-content-center">
												{{ one_user.name }}
												<span class="moder-user">
													<img src="img/verify.svg" alt="" />
												</span>
											</h3>
											<span v-if="one_user && one_user.id">UZDUB ID:{{ one_user.id }}</span>
										</div>
									</div>

									<!-- content tabs nav -->
									<ul class="nav nav-tabs content__tabs content__tabs--profile" id="content__tabs" role="tablist">
										<li class="nav-item" role="presentation">
											<button id="1-tab" class="active" data-bs-toggle="tab" data-bs-target="#tab-1" type="button"
												role="tab" aria-controls="tab-1" aria-selected="true">
												Profil
											</button>
										</li>

										<!-- <li class="nav-item" role="presentation">
											<button id="2-tab" data-bs-toggle="tab" data-bs-target="#tab-2" type="button" role="tab"
												aria-controls="tab-2" aria-selected="false">
												OBUNA
											</button>
										</li> -->

										<li class="nav-item" role="presentation">
											<button id="3-tab" data-bs-toggle="tab" data-bs-target="#tab-3" type="button" role="tab"
												aria-controls="tab-3" aria-selected="false">
												SOZLAMALAR
											</button>
										</li>
									</ul>
									<!-- end content tabs nav -->

									<button @click="chiqish()" class="profile__logout" type="button">
										<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
											<path
												d="M4,12a1,1,0,0,0,1,1h7.59l-2.3,2.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l4-4a1,1,0,0,0,.21-.33,1,1,0,0,0,0-.76,1,1,0,0,0-.21-.33l-4-4a1,1,0,1,0-1.42,1.42L12.59,11H5A1,1,0,0,0,4,12ZM17,2H7A3,3,0,0,0,4,5V8A1,1,0,0,0,6,8V5A1,1,0,0,1,7,4H17a1,1,0,0,1,1,1V19a1,1,0,0,1-1,1H7a1,1,0,0,1-1-1V16a1,1,0,0,0-2,0v3a3,3,0,0,0,3,3H17a3,3,0,0,0,3-3V5A3,3,0,0,0,17,2Z" />
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
						<div class="tab-pane fade show active" id="tab-1" role="tabpanel" aria-labelledby="1-tab" tabindex="0">
							<div class="row">
								<!-- stats -->
								<div class="col-12 col-sm-6 col-xl-3">
									<div class="stats">
										<span>Obuna</span>
										<p v-if="pay">Premium</p>
										<p v-else>Tekin</p>
										<img src="img/credit-card.svg" alt="" />
									</div>
								</div>
								<!-- end stats -->

								<!-- stats -->
								<div class="col-12 col-sm-6 col-xl-3">
									<div class="stats">
										<span>Ko'rilgan animelar</span>
										<p v-if="cinema_data">{{ cinema_data.length }}</p>
										<img src="img/film.svg" alt="" />
									</div>
								</div>
								<!-- end stats -->

								<!-- stats -->
								<div class="col-12 col-sm-6 col-xl-3">
									<div class="stats">
										<span>Sizning sharhlaringiz</span>
										<p v-if="sharx">{{ sharx.length }}</p>
										<img src="img/comments.svg" alt="" />
									</div>
								</div>
								<!-- end stats -->

								<!-- stats -->
								<div class="col-12 col-sm-6 col-xl-3">
									<div class="stats">
										<span>Sizning fikringiz</span>
										<p>{{ fikr_length }}</p>
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
												<NuxtLink class="dashbox__more" to="catalog">Hammasi</NuxtLink>
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
													<tr v-for="item in cinema_data" :key="item.id">
														<td>
															<div class="dashbox__table-text">{{ item.id }}</div>
														</td>
														<td>
															<div @click="ProfilBosil(item.cinema_id)" class="dashbox__table-text">
																<NuxtLink to="Watching">{{ item.title }}</NuxtLink>
															</div>
														</td>
														<td>
															<div v-if="item.appearance == 1" class="dashbox__table-text">Movie</div>
															<div v-if="item.appearance == 2" class="dashbox__table-text">Serial</div>
															<div v-if="item.appearance == 3" class="dashbox__table-text">TV Serial</div>
															<div v-if="item.appearance == 4" class="dashbox__table-text">Cartoon</div>
														</td>
														<td>
															<div class="dashbox__table-text dashbox__table-text--rate">
																{{ item.mark.toFixed(1) }}
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
													<tr v-for="item in sharx" :key="item.id">
														<td>
															<div class="dashbox__table-text">{{ item.id }}</div>
														</td>
														<td>
															<div class="dashbox__table-text">
																<NuxtLink to="Watching">{{ item.titlea }}</NuxtLink>
															</div>
														</td>
														<td>
															<div class="dashbox__table-text">{{ item.title }}</div>
														</td>
														<td>
															<div class="dashbox__table-text dashbox__table-text--rate">
																{{ item.rating }}
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

						<div class="tab-pane fade" id="tab-2" role="tabpanel" aria-labelledby="2-tab" tabindex="0">
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
										<button type="button" data-bs-toggle="modal" class="plan__btn" data-bs-target="#plan-modal">
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
										<button type="button" data-bs-toggle="modal" class="plan__btn" data-bs-target="#plan-modal">
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
										<button type="button" data-bs-toggle="modal" class="plan__btn" data-bs-target="#plan-modal">
											<span>obuna bo'lish</span>
										</button>
									</div>
								</div>
								<!-- end price -->
							</div>
						</div>
						<!-- plan modal -->
						<div class="modal fade" id="plan-modal" tabindex="-1" aria-labelledby="plan-modal" aria-hidden="true">
							<div class="modal-dialog modal-dialog-centered">
								<div class="modal-content">
									<div class="modal__content">
										<button class="modal__close" type="button" data-bs-dismiss="modal" aria-label="Close">
											<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
												<path
													d="M13.41,12l6.3-6.29a1,1,0,1,0-1.42-1.42L12,10.59,5.71,4.29A1,1,0,0,0,4.29,5.71L10.59,12l-6.3,6.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L12,13.41l6.29,6.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Z" />
											</svg>
										</button>

										<form action="#" class="modal__form">
											<h4 class="modal__title">Tarifni tanlang</h4>

											<div class="sign__group">
												<label for="fullname" class="sign__label">Ism</label>
												<input id="fullname" type="text" name="name" class="sign__input" placeholder="To'liq ism" />
											</div>

											<div class="sign__group">
												<label for="email" class="sign__label">Email</label>
												<input id="email" type="text" name="email" class="sign__input" placeholder="misol@domain.com" />
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
													<!-- plan modal -->
													<div class="modal fade" id="plan-modal" tabindex="-1" aria-labelledby="plan-modal"
														aria-hidden="true">
														<div class="modal-dialog modal-dialog-centered">
															<div class="modal-content">
																<div class="modal__content">
																	<button class="modal__close" type="button" data-bs-dismiss="modal" aria-label="Close">
																		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
																			<path
																				d="M13.41,12l6.3-6.29a1,1,0,1,0-1.42-1.42L12,10.59,5.71,4.29A1,1,0,0,0,4.29,5.71L10.59,12l-6.3,6.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L12,13.41l6.29,6.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Z" />
																		</svg>
																	</button>

																	<form action="#" class="modal__form">
																		<h4 class="modal__title">Tarifni tanlang</h4>

																		<div class="sign__group">
																			<label for="fullname" class="sign__label">Ism</label>
																			<input id="fullname" type="text" name="name" class="sign__input"
																				placeholder="To'liq ism" />
																		</div>

																		<div class="sign__group">
																			<label for="email" class="sign__label">Email</label>
																			<input id="email" type="text" name="email" class="sign__input"
																				placeholder="misol@domain.com" />
																		</div>

																		<div class="sign__group">
																			<label class="sign__label" for="value">Tarifni tanlang:</label>
																			<select class="sign__select" name="value" id="value">
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

						<div class="tab-pane fade" id="tab-3" role="tabpanel" aria-labelledby="3-tab" tabindex="0">
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
													<label class="sign__label" for="username">Tizimga kirish</label>
													<input id="username" type="text" name="username" class="sign__input" disabled
														:placeholder="`Foydalanuvchi ${one_user.id}`" />
												</div>
											</div>
											<div class="col-12 col-md-6 col-lg-12 col-xl-6">
												<div class="sign__group">
													<label class="sign__label" for="email">Email</label>
													<input id="email2" type="text" name="email" class="sign__input" :placeholder="one_user.email" />
												</div>
											</div>
											<div class="col-12 col-md-6 col-lg-12 col-xl-6">
												<div class="sign__group">
													<label class="sign__label" for="firstname">Ism</label>
													<input id="firstname" type="text" name="firstname" class="sign__input"
														:placeholder="one_user.name" />
												</div>
											</div>

											<div class="col-12 col-md-6 col-lg-12 col-xl-6">
												<div class="sign__group">
													<label class="sign__label" for="lastname">Familiya</label>
													<input id="lastname" type="text" name="lastname" class="sign__input"
														:placeholder="one_user.familiya" />
												</div>
											</div>

											<div class="col-12">
												<button @click="postDataWithToken" class="sign__btn sign__btn--small" type="button">
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
													<label class="sign__label" for="oldpass">Eski parol</label>
													<input id="oldpass" type="password" name="oldpass" class="sign__input" />
												</div>
											</div>

											<div class="col-12 col-md-6 col-lg-12 col-xl-6">
												<div class="sign__group">
													<label class="sign__label" for="newpass">Yangi parol</label>
													<input id="newpass" type="password" name="newpass" class="sign__input" />
												</div>
											</div>

											<div class="col-12 col-md-6 col-lg-12 col-xl-6">
												<div class="sign__group">
													<label class="sign__label" for="confirmpass">Yangi parolni tasdiqlang</label>
													<input id="confirmpass" type="password" name="confirmpass" class="sign__input" />
												</div>
											</div>

											<div class="col-12">
												<button @click="reset_passwort" class="sign__btn sign__btn--small" type="button">
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
			<div class="modal fade" id="plan-modal" tabindex="-1" aria-labelledby="plan-modal" aria-hidden="true">
				<div class="modal-dialog modal-dialog-centered">
					<div class="modal-content">
						<div class="modal__content">
							<button class="modal__close" type="button" data-bs-dismiss="modal" aria-label="Close">
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
									<path
										d="M13.41,12l6.3-6.29a1,1,0,1,0-1.42-1.42L12,10.59,5.71,4.29A1,1,0,0,0,4.29,5.71L10.59,12l-6.3,6.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L12,13.41l6.29,6.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Z" />
								</svg>
							</button>

							<form action="#" class="modal__form">
								<h4 class="modal__title">Tarifni tanlang</h4>

								<div class="sign__group">
									<label for="fullname" class="sign__label">Ism</label>
									<input id="fullname" type="text" name="name" class="sign__input" placeholder="To'liq ism" />
								</div>

								<div class="sign__group">
									<label for="email" class="sign__label">Email</label>
									<input id="email" type="text" name="email" class="sign__input" placeholder="misol@domain.com" />
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
import axios from 'axios';
export default {
	name: 'Faq',
	data() {
		return {
			one_user: null,
			fikr_length: 0,
			sharx: null,
			pay: false,
			one_user: {},
			cinema_data: null,
		}
	},
	methods: {
		async fetchData() {
			try {
				const response = await axios.get(`https://api.uzdub.uz/api/lookme/${(JSON.parse(localStorage.getItem("user_data")).id)}`);
				this.fikr_length = response.data.fikr
				this.sharx = response.data.sharx.filter(item => item.titlea).slice(0, 10)
				this.cinema_data = response.data.all.filter(item => item.title).slice(0, 10)
				this.pay = response.data.pay
			} catch (error) {
				console.error(error);
			}
		},
		async fetchDataWithToken(token) {
			try {
				const response = await axios.get('https://api.uzdub.uz/user', {
					headers: {
						Authorization: `Bearer ${token}`,
					},
				});
				this.one_user = response.data
			} catch (error) {
				// Xatolikni qaytarish
				console.error(error);
			}
		},
		chiqish() {
			localStorage.clear()
			window.location = "/"
		},
		ProfilBosil(index) {
			// console.log(index, "hello")
			const selectedItem = index;
			localStorage.setItem('selectedItemData', JSON.stringify(selectedItem));
			window.location = "/watching"
		},
		async postDataWithToken() {
			try {
				var data = new FormData()
				if (document.querySelector('#firstname').value) {
					data.append("name", document.querySelector('#firstname').value)
				} else {
					data.append("name", this.one_user.name)

				}
				if (document.querySelector('#email2').value) {
					data.append("email", document.querySelector('#email2').value)
				} else {
					data.append("email", this.one_user.email)
				}
				if (document.querySelector('#lastname').value) {
					data.append("familiya", document.querySelector('#lastname').value)
				} else {
					data.append("familiya", this.one_user.familiya)
				}
				// console.log(data)
				const response = await axios.put(`https://api.uzdub.uz/user_one/${this.one_user.id}`, data, {
					headers: {
						Authorization: `Bearer ${localStorage.getItem('token')}`,
					},
				});
				this.fetchDataWithToken(localStorage.getItem('token'))
				document.querySelector("#alert_modal").style = "display:block"
				setTimeout(() => {
					document.querySelector('#alert_modal').style = 'display:none'
				}, 3000)
				document.querySelector("#alert_text").innerHTML = "Malumot yangilandi"
			} catch (error) {
				console.error(error);
				document.querySelector("#alert_modal").style = "display:block"
				setTimeout(() => {
					document.querySelector('#alert_modal').style = 'display:none'
				}, 3000)
				document.querySelector("#alert_text").innerHTML = "Xatolik yuz berdi"
			}

		},
		async reset_passwort() {
			var data = new FormData()
			data.append("old_password", document.querySelector('#oldpass').value)
			data.append("password", document.querySelector('#newpass').value)
			data.append("repit_password", document.querySelector('#confirmpass').value)
			axios.put(`https://api.uzdub.uz/reset/${this.one_user.id}`, data, {
				headers: {
					Authorization: `Bearer ${localStorage.getItem('token')}`,
				},
			}).then(res => {
				document.querySelector("#alert_modal").style = "display:block"
				setTimeout(() => {
					document.querySelector('#alert_modal').style = 'display:none'
				}, 3000)
				document.querySelector("#alert_text").innerHTML = "Malumot yangilandi"
			}).catch(err => {
				document.querySelector("#alert_modal").style = "display:block"
				setTimeout(() => {
					document.querySelector('#alert_modal').style = 'display:none'
				}, 3000)
				document.querySelector("#alert_text").innerHTML = "Xatolik yuz berdi"
			})
		},
		AlertNone() {
			document.querySelector("#alert_modal").style = "display:none"
		},
	},
	mounted() {
		this.one_user = JSON.parse(localStorage.getItem("user_data"))
		if (document.querySelector('.section--bg')) {
			var mainBg = document.querySelector('.section--bg')
			if (mainBg.getAttribute('data-bg')) {
				mainBg.style.background = `url(${mainBg.getAttribute('data-bg')})`
				mainBg.style.backgroundPosition = 'center center'
				mainBg.style.backgroundRepeat = 'no-repeat'
				mainBg.style.backgroundSize = 'cover'
			}
		};
		this.fetchData()
		this.fetchDataWithToken(localStorage.getItem('token'))

	},

}
</script>
