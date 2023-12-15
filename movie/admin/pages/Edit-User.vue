<template>
    <div>
        <!-- main content -->
	<main class="main">
		<div class="container-fluid">
			<div class="row">
				<!-- main title -->
				<div class="col-12">
					<div class="main__title">
						<h2>Foydalanuvchini tahrirlash</h2>
					</div>
				</div>
				<!-- end main title -->

				<!-- profile -->
				<div class="col-12">
					<div class="profile__content">
						<!-- profile user -->
						<div class="profile__user">
							<div class="profile__avatar">
								<img src="img/user.svg" alt="">
							</div>
							<!-- or red -->
							<div v-if="this.user.pan" class="profile__meta profile__meta--green">
								<h3>{{ this.user.name }} <span>(Tasdiqlangan)</span></h3>
								<span>DUBGO ID: {{ this.user.id }}</span>
							</div>
							<div v-if="!this.user.pan" class="profile__meta profile__meta--red">
								<h3>{{ this.user.name }} <span>(Taqiqlangan)</span></h3>
								<span>DUBGO ID: {{ this.user.id }}</span>
							</div>
						</div>
						<!-- end profile user -->

						<!-- profile tabs nav -->
						<ul class="nav nav-tabs profile__tabs" id="profile__tabs" role="tablist">
							<li class="nav-item" role="presentation">
								<button id="1-tab" class="active" data-bs-toggle="tab" data-bs-target="#tab-1" type="button" role="tab"
									aria-controls="tab-1" aria-selected="true">PROFIL</button>
							</li>

							<li class="nav-item" role="presentation">
								<button id="2-tab" data-bs-toggle="tab" data-bs-target="#tab-2" type="button" role="tab"
									aria-controls="tab-2" aria-selected="false">IZOHLAR</button>
							</li>

							<li class="nav-item" role="presentation">
								<button id="3-tab" data-bs-toggle="tab" data-bs-target="#tab-3" type="button" role="tab"
									aria-controls="tab-3" aria-selected="false">Sharhlar</button>
							</li>
						</ul>
						<!-- end profile tabs nav -->

						<!-- profile btns -->
						<div class="profile__actions">
							<button type="button" data-bs-toggle="modal" class="profile__action profile__action--banned"
								data-bs-target="#modal-status3"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
									<path
										d="M12,13a1,1,0,0,0-1,1v3a1,1,0,0,0,2,0V14A1,1,0,0,0,12,13Zm5-4V7A5,5,0,0,0,7,7V9a3,3,0,0,0-3,3v7a3,3,0,0,0,3,3H17a3,3,0,0,0,3-3V12A3,3,0,0,0,17,9ZM9,7a3,3,0,0,1,6,0V9H9Zm9,12a1,1,0,0,1-1,1H7a1,1,0,0,1-1-1V12a1,1,0,0,1,1-1H17a1,1,0,0,1,1,1Z" />
								</svg></button>
							<button type="button" data-bs-toggle="modal" class="profile__action profile__action--delete"
								data-bs-target="#modal-delete3"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
									<path
										d="M20,6H16V5a3,3,0,0,0-3-3H11A3,3,0,0,0,8,5V6H4A1,1,0,0,0,4,8H5V19a3,3,0,0,0,3,3h8a3,3,0,0,0,3-3V8h1a1,1,0,0,0,0-2ZM10,5a1,1,0,0,1,1-1h2a1,1,0,0,1,1,1V6H10Zm7,14a1,1,0,0,1-1,1H8a1,1,0,0,1-1-1V8H17Z" />
								</svg></button>
						</div>
						<!-- end profile btns -->
					</div>
				</div>
				<!-- end profile -->

				<!-- content tabs -->
				<div class="tab-content">
					<div class="tab-pane fade show active" id="tab-1" role="tabpanel" aria-labelledby="1-tab" tabindex="0">
						<div class="col-12">
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
													<label class="sign__label" for="username">Login</label>
													<input id="username"   type="text" name="username" class="sign__input" placeholder="User 123" disabled>
												</div>
											</div>

											<div class="col-12 col-md-6 col-lg-12 col-xl-6">
												<div class="sign__group">
													<label class="sign__label" for="email2">Email</label>
													<input id="email2" type="text" name="email" class="sign__input" placeholder="email@email.com">
												</div>
											</div>

											<div class="col-12 col-md-6 col-lg-12 col-xl-6">
												<div class="sign__group">
													<label class="sign__label" for="firstname">Ism</label>
													<input id="firstname" type="text" name="firstname" class="sign__input" placeholder="John">
												</div>
											</div>

											<div class="col-12 col-md-6 col-lg-12 col-xl-6">
												<div class="sign__group">
													<label class="sign__label" for="lastname">Familiya</label>
													<input id="lastname" type="text" name="lastname" class="sign__input" placeholder="Doe">
												</div>
											</div>

											<div class="col-12 col-md-6 col-lg-12 col-xl-6">
												<div class="sign__group">
													<label class="sign__label" for="subscription">Obuna</label>
													<select class="sign__select" id="subscription">
														<option value="0">Free</option>
														<option value="1">Premium</option>
													</select>
												</div>
											</div>

											<div class="col-12 col-md-6 col-lg-12 col-xl-6">
												<div class="sign__group">
													<label class="sign__label" for="rights">Huquqlar</label>
													<select class="sign__select" id="rights">
														<option value="false">Foydalanuvchi</option>
														<option value="true">Admin</option>
													</select>
												</div>
											</div>

											<div class="col-12">
												<button @click="UserEdit()" class="sign__btn sign__btn--small" type="button"><span>SAQLASH</span></button>
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
													<input id="oldpass" type="password" name="oldpass" class="sign__input">
												</div>
											</div>

											<div class="col-12 col-md-6 col-lg-12 col-xl-6">
												<div class="sign__group">
													<label class="sign__label" for="newpass">Yangi parol</label>
													<input id="newpass" type="password" name="newpass" class="sign__input">
												</div>
											</div>

											<div class="col-12 col-md-6 col-lg-12">
												<div class="sign__group">
													<label class="sign__label" for="confirmpass">Yangi parolni tasdiqlang</label>
													<input id="confirmpass" type="password" name="confirmpass" class="sign__input">
												</div>
											</div>

											<div class="col-12">
												<button @click="userResetPassword()" class="sign__btn sign__btn--small" type="button"><span>O'ZGARTIRISH</span></button>
											</div>
										</div>
									</form>
								</div>
								<!-- end password form -->
							</div>
						</div>
					</div>

					<div class="tab-pane fade" id="tab-2" role="tabpanel" aria-labelledby="2-tab" tabindex="0">
						<!-- table -->
						<div class="col-12">
							<div class="catalog catalog--1">
								<table class="catalog__table">
									<thead>
										<tr>
											<th>ID</th>
											<th>ANIME NOMI</th>
											<th>MUALLIF</th>
											<th>MATN</th>
											<th>LIKE / DISLIKE</th>
											<th>YARATILGAN KUNI</th>
											<th>TAHRIRLASH</th>
										</tr>
									</thead>

									<tbody>
										<tr v-for="(item,index) in user.commentLength" v-if="index<select_page*page_card && index>=(select_page-1)*page_card">
											<td>
												<div class="catalog__text">{{ item.id }}</div>
											</td>
											<td>
												<div class="catalog__text"><NuxtLink to="">{{ item.cinemaName }}</NuxtLink></div>
											</td>
											<td>
												<div class="catalog__text">{{ item.creatorName }}</div>
											</td>
											<td>
												<div class="catalog__text">{{ (item.description).length>28?(item.description).slice(0,28)+"...":item.description }}</div>
											</td>
											<td>
												<div class="catalog__text">{{ item.commentLike }} / {{ item.commentFalse }}</div>
											</td>
											<td>
												<div class="catalog__text">{{ (item.time_create).slice(0,10) }}</div>
											</td>
											<td>
												<div class="catalog__btns">
													<button @click="WiewModal(item.id)" type="button" data-bs-toggle="modal" class="catalog__btn catalog__btn--view"
														data-bs-target="#modal-view">
														<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
															<path
																d="M21.92,11.6C19.9,6.91,16.1,4,12,4S4.1,6.91,2.08,11.6a1,1,0,0,0,0,.8C4.1,17.09,7.9,20,12,20s7.9-2.91,9.92-7.6A1,1,0,0,0,21.92,11.6ZM12,18c-3.17,0-6.17-2.29-7.9-6C5.83,8.29,8.83,6,12,6s6.17,2.29,7.9,6C18.17,15.71,15.17,18,12,18ZM12,8a4,4,0,1,0,4,4A4,4,0,0,0,12,8Zm0,6a2,2,0,1,1,2-2A2,2,0,0,1,12,14Z" />
														</svg>
													</button>

													<button @click="Idfunc(item.id)" type="button" data-bs-toggle="modal" class="catalog__btn catalog__btn--delete"
														data-bs-target="#modal-delete">
														<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
															<path
																d="M20,6H16V5a3,3,0,0,0-3-3H11A3,3,0,0,0,8,5V6H4A1,1,0,0,0,4,8H5V19a3,3,0,0,0,3,3h8a3,3,0,0,0,3-3V8h1a1,1,0,0,0,0-2ZM10,5a1,1,0,0,1,1-1h2a1,1,0,0,1,1,1V6H10Zm7,14a1,1,0,0,1-1,1H8a1,1,0,0,1-1-1V8H17Z" />
														</svg>
													</button>
												</div>
											</td>
										</tr>
										<!-- <tr>
											<td>
												<div class="catalog__text">12</div>
											</td>
											<td>
												<div class="catalog__text"><NuxtLink to="#">The Forgotten Road</NuxtLink></div>
											</td>
											<td>
												<div class="catalog__text">Tyreese Gibson</div>
											</td>
											<td>
												<div class="catalog__text">A down-on-his-luck boxer struggles...</div>
											</td>
											<td>
												<div class="catalog__text">67 / 22</div>
											</td>
											<td>
												<div class="catalog__text">05.02.2023</div>
											</td>
											<td>
												<div class="catalog__btns">
													<button type="button" data-bs-toggle="modal" class="catalog__btn catalog__btn--view"
														data-bs-target="#modal-view">
														<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
															<path
																d="M21.92,11.6C19.9,6.91,16.1,4,12,4S4.1,6.91,2.08,11.6a1,1,0,0,0,0,.8C4.1,17.09,7.9,20,12,20s7.9-2.91,9.92-7.6A1,1,0,0,0,21.92,11.6ZM12,18c-3.17,0-6.17-2.29-7.9-6C5.83,8.29,8.83,6,12,6s6.17,2.29,7.9,6C18.17,15.71,15.17,18,12,18ZM12,8a4,4,0,1,0,4,4A4,4,0,0,0,12,8Zm0,6a2,2,0,1,1,2-2A2,2,0,0,1,12,14Z" />
														</svg>
													</button>

													<button type="button" data-bs-toggle="modal" class="catalog__btn catalog__btn--delete"
														data-bs-target="#modal-delete">
														<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
															<path
																d="M20,6H16V5a3,3,0,0,0-3-3H11A3,3,0,0,0,8,5V6H4A1,1,0,0,0,4,8H5V19a3,3,0,0,0,3,3h8a3,3,0,0,0,3-3V8h1a1,1,0,0,0,0-2ZM10,5a1,1,0,0,1,1-1h2a1,1,0,0,1,1,1V6H10Zm7,14a1,1,0,0,1-1,1H8a1,1,0,0,1-1-1V8H17Z" />
														</svg>
													</button>
												</div>
											</td>
										</tr>
										<tr>
											<td>
												<div class="catalog__text">13</div>
											</td>
											<td>
												<div class="catalog__text"><NuxtLink to="#">Whitney</NuxtLink></div>
											</td>
											<td>
												<div class="catalog__text">Jordana Brewster</div>
											</td>
											<td>
												<div class="catalog__text">When an old friend offers him...</div>
											</td>
											<td>
												<div class="catalog__text">44 / 5</div>
											</td>
											<td>
												<div class="catalog__text">04.02.2023</div>
											</td>
											<td>
												<div class="catalog__btns">
													<button type="button" data-bs-toggle="modal" class="catalog__btn catalog__btn--view"
														data-bs-target="#modal-view">
														<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
															<path
																d="M21.92,11.6C19.9,6.91,16.1,4,12,4S4.1,6.91,2.08,11.6a1,1,0,0,0,0,.8C4.1,17.09,7.9,20,12,20s7.9-2.91,9.92-7.6A1,1,0,0,0,21.92,11.6ZM12,18c-3.17,0-6.17-2.29-7.9-6C5.83,8.29,8.83,6,12,6s6.17,2.29,7.9,6C18.17,15.71,15.17,18,12,18ZM12,8a4,4,0,1,0,4,4A4,4,0,0,0,12,8Zm0,6a2,2,0,1,1,2-2A2,2,0,0,1,12,14Z" />
														</svg>
													</button>

													<button type="button" data-bs-toggle="modal" class="catalog__btn catalog__btn--delete"
														data-bs-target="#modal-delete">
														<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
															<path
																d="M20,6H16V5a3,3,0,0,0-3-3H11A3,3,0,0,0,8,5V6H4A1,1,0,0,0,4,8H5V19a3,3,0,0,0,3,3h8a3,3,0,0,0,3-3V8h1a1,1,0,0,0,0-2ZM10,5a1,1,0,0,1,1-1h2a1,1,0,0,1,1,1V6H10Zm7,14a1,1,0,0,1-1,1H8a1,1,0,0,1-1-1V8H17Z" />
														</svg>
													</button>
												</div>
											</td>
										</tr>
										<tr>
											<td>
												<div class="catalog__text">14</div>
											</td>
											<td>
												<div class="catalog__text"><NuxtLink to="#">Red Sky at Night</NuxtLink></div>
											</td>
											<td>
												<div class="catalog__text">Son Gun</div>
											</td>
											<td>
												<div class="catalog__text">But as the stakes get higher...</div>
											</td>
											<td>
												<div class="catalog__text">20 / 6</div>
											</td>
											<td>
												<div class="catalog__text">04.02.2023</div>
											</td>
											<td>
												<div class="catalog__btns">
													<button type="button" data-bs-toggle="modal" class="catalog__btn catalog__btn--view"
														data-bs-target="#modal-view">
														<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
															<path
																d="M21.92,11.6C19.9,6.91,16.1,4,12,4S4.1,6.91,2.08,11.6a1,1,0,0,0,0,.8C4.1,17.09,7.9,20,12,20s7.9-2.91,9.92-7.6A1,1,0,0,0,21.92,11.6ZM12,18c-3.17,0-6.17-2.29-7.9-6C5.83,8.29,8.83,6,12,6s6.17,2.29,7.9,6C18.17,15.71,15.17,18,12,18ZM12,8a4,4,0,1,0,4,4A4,4,0,0,0,12,8Zm0,6a2,2,0,1,1,2-2A2,2,0,0,1,12,14Z" />
														</svg>
													</button>

													<button type="button" data-bs-toggle="modal" class="catalog__btn catalog__btn--delete"
														data-bs-target="#modal-delete">
														<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
															<path
																d="M20,6H16V5a3,3,0,0,0-3-3H11A3,3,0,0,0,8,5V6H4A1,1,0,0,0,4,8H5V19a3,3,0,0,0,3,3h8a3,3,0,0,0,3-3V8h1a1,1,0,0,0,0-2ZM10,5a1,1,0,0,1,1-1h2a1,1,0,0,1,1,1V6H10Zm7,14a1,1,0,0,1-1,1H8a1,1,0,0,1-1-1V8H17Z" />
														</svg>
													</button>
												</div>
											</td>
										</tr>
										<tr>
											<td>
												<div class="catalog__text">15</div>
											</td>
											<td>
												<div class="catalog__text"><NuxtLink to="#">Into the Unknown</NuxtLink></div>
											</td>
											<td>
												<div class="catalog__text">Louis Leterrier</div>
											</td>
											<td>
												<div class="catalog__text">A brilliant scientist discovers...</div>
											</td>
											<td>
												<div class="catalog__text">8 / 132</div>
											</td>
											<td>
												<div class="catalog__text">04.02.2023</div>
											</td>
											<td>
												<div class="catalog__btns">
													<button type="button" data-bs-toggle="modal" class="catalog__btn catalog__btn--view"
														data-bs-target="#modal-view">
														<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
															<path
																d="M21.92,11.6C19.9,6.91,16.1,4,12,4S4.1,6.91,2.08,11.6a1,1,0,0,0,0,.8C4.1,17.09,7.9,20,12,20s7.9-2.91,9.92-7.6A1,1,0,0,0,21.92,11.6ZM12,18c-3.17,0-6.17-2.29-7.9-6C5.83,8.29,8.83,6,12,6s6.17,2.29,7.9,6C18.17,15.71,15.17,18,12,18ZM12,8a4,4,0,1,0,4,4A4,4,0,0,0,12,8Zm0,6a2,2,0,1,1,2-2A2,2,0,0,1,12,14Z" />
														</svg>
													</button>

													<button type="button" data-bs-toggle="modal" class="catalog__btn catalog__btn--delete"
														data-bs-target="#modal-delete">
														<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
															<path
																d="M20,6H16V5a3,3,0,0,0-3-3H11A3,3,0,0,0,8,5V6H4A1,1,0,0,0,4,8H5V19a3,3,0,0,0,3,3h8a3,3,0,0,0,3-3V8h1a1,1,0,0,0,0-2ZM10,5a1,1,0,0,1,1-1h2a1,1,0,0,1,1,1V6H10Zm7,14a1,1,0,0,1-1,1H8a1,1,0,0,1-1-1V8H17Z" />
														</svg>
													</button>
												</div>
											</td>
										</tr>
										<tr>
											<td>
												<div class="catalog__text">16</div>
											</td>
											<td>
												<div class="catalog__text"><NuxtLink to="#">The Unseen Journey</NuxtLink></div>
											</td>
											<td>
												<div class="catalog__text">Brian Cranston</div>
											</td>
											<td>
												<div class="catalog__text">But when her groundbreaking...</div>
											</td>
											<td>
												<div class="catalog__text">6 / 1</div>
											</td>
											<td>
												<div class="catalog__text">03.02.2023</div>
											</td>
											<td>
												<div class="catalog__btns">
													<button type="button" data-bs-toggle="modal" class="catalog__btn catalog__btn--view"
														data-bs-target="#modal-view">
														<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
															<path
																d="M21.92,11.6C19.9,6.91,16.1,4,12,4S4.1,6.91,2.08,11.6a1,1,0,0,0,0,.8C4.1,17.09,7.9,20,12,20s7.9-2.91,9.92-7.6A1,1,0,0,0,21.92,11.6ZM12,18c-3.17,0-6.17-2.29-7.9-6C5.83,8.29,8.83,6,12,6s6.17,2.29,7.9,6C18.17,15.71,15.17,18,12,18ZM12,8a4,4,0,1,0,4,4A4,4,0,0,0,12,8Zm0,6a2,2,0,1,1,2-2A2,2,0,0,1,12,14Z" />
														</svg>
													</button>

													<button type="button" data-bs-toggle="modal" class="catalog__btn catalog__btn--delete"
														data-bs-target="#modal-delete">
														<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
															<path
																d="M20,6H16V5a3,3,0,0,0-3-3H11A3,3,0,0,0,8,5V6H4A1,1,0,0,0,4,8H5V19a3,3,0,0,0,3,3h8a3,3,0,0,0,3-3V8h1a1,1,0,0,0,0-2ZM10,5a1,1,0,0,1,1-1h2a1,1,0,0,1,1,1V6H10Zm7,14a1,1,0,0,1-1,1H8a1,1,0,0,1-1-1V8H17Z" />
														</svg>
													</button>
												</div>
											</td>
										</tr>
										<tr>
											<td>
												<div class="catalog__text">17</div>
											</td>
											<td>
												<div class="catalog__text"><NuxtLink to="#">Savage Beauty</NuxtLink></div>
											</td>
											<td>
												<div class="catalog__text">Matt Jones</div>
											</td>
											<td>
												<div class="catalog__text">Along the way, she must...</div>
											</td>
											<td>
												<div class="catalog__text">10 / 0</div>
											</td>
											<td>
												<div class="catalog__text">03.02.2023</div>
											</td>
											<td>
												<div class="catalog__btns">
													<button type="button" data-bs-toggle="modal" class="catalog__btn catalog__btn--view"
														data-bs-target="#modal-view">
														<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
															<path
																d="M21.92,11.6C19.9,6.91,16.1,4,12,4S4.1,6.91,2.08,11.6a1,1,0,0,0,0,.8C4.1,17.09,7.9,20,12,20s7.9-2.91,9.92-7.6A1,1,0,0,0,21.92,11.6ZM12,18c-3.17,0-6.17-2.29-7.9-6C5.83,8.29,8.83,6,12,6s6.17,2.29,7.9,6C18.17,15.71,15.17,18,12,18ZM12,8a4,4,0,1,0,4,4A4,4,0,0,0,12,8Zm0,6a2,2,0,1,1,2-2A2,2,0,0,1,12,14Z" />
														</svg>
													</button>

													<button type="button" data-bs-toggle="modal" class="catalog__btn catalog__btn--delete"
														data-bs-target="#modal-delete">
														<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
															<path
																d="M20,6H16V5a3,3,0,0,0-3-3H11A3,3,0,0,0,8,5V6H4A1,1,0,0,0,4,8H5V19a3,3,0,0,0,3,3h8a3,3,0,0,0,3-3V8h1a1,1,0,0,0,0-2ZM10,5a1,1,0,0,1,1-1h2a1,1,0,0,1,1,1V6H10Zm7,14a1,1,0,0,1-1,1H8a1,1,0,0,1-1-1V8H17Z" />
														</svg>
													</button>
												</div>
											</td>
										</tr>
										<tr>
											<td>
												<div class="catalog__text">18</div>
											</td>
											<td>
												<div class="catalog__text"><NuxtLink to="#">Endless Horizon</NuxtLink></div>
											</td>
											<td>
												<div class="catalog__text">Rosa Lee</div>
											</td>
											<td>
												<div class="catalog__text">Renewable energy source...</div>
											</td>
											<td>
												<div class="catalog__text">13 / 14</div>
											</td>
											<td>
												<div class="catalog__text">02.02.2023</div>
											</td>
											<td>
												<div class="catalog__btns">
													<button type="button" data-bs-toggle="modal" class="catalog__btn catalog__btn--view"
														data-bs-target="#modal-view">
														<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
															<path
																d="M21.92,11.6C19.9,6.91,16.1,4,12,4S4.1,6.91,2.08,11.6a1,1,0,0,0,0,.8C4.1,17.09,7.9,20,12,20s7.9-2.91,9.92-7.6A1,1,0,0,0,21.92,11.6ZM12,18c-3.17,0-6.17-2.29-7.9-6C5.83,8.29,8.83,6,12,6s6.17,2.29,7.9,6C18.17,15.71,15.17,18,12,18ZM12,8a4,4,0,1,0,4,4A4,4,0,0,0,12,8Zm0,6a2,2,0,1,1,2-2A2,2,0,0,1,12,14Z" />
														</svg>
													</button>

													<button type="button" data-bs-toggle="modal" class="catalog__btn catalog__btn--delete"
														data-bs-target="#modal-delete">
														<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
															<path
																d="M20,6H16V5a3,3,0,0,0-3-3H11A3,3,0,0,0,8,5V6H4A1,1,0,0,0,4,8H5V19a3,3,0,0,0,3,3h8a3,3,0,0,0,3-3V8h1a1,1,0,0,0,0-2ZM10,5a1,1,0,0,1,1-1h2a1,1,0,0,1,1,1V6H10Zm7,14a1,1,0,0,1-1,1H8a1,1,0,0,1-1-1V8H17Z" />
														</svg>
													</button>
												</div>
											</td>
										</tr>
										<tr>
											<td>
												<div class="catalog__text">19</div>
											</td>
											<td>
												<div class="catalog__text"><NuxtLink to="#">The Lost Key</NuxtLink></div>
											</td>
											<td>
												<div class="catalog__text">Tess Harper</div>
											</td>
											<td>
												<div class="catalog__text">Confront her own past to save...</div>
											</td>
											<td>
												<div class="catalog__text">12 / 7</div>
											</td>
											<td>
												<div class="catalog__text">02.02.2023</div>
											</td>
											<td>
												<div class="catalog__btns">
													<button type="button" data-bs-toggle="modal" class="catalog__btn catalog__btn--view"
														data-bs-target="#modal-view">
														<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
															<path
																d="M21.92,11.6C19.9,6.91,16.1,4,12,4S4.1,6.91,2.08,11.6a1,1,0,0,0,0,.8C4.1,17.09,7.9,20,12,20s7.9-2.91,9.92-7.6A1,1,0,0,0,21.92,11.6ZM12,18c-3.17,0-6.17-2.29-7.9-6C5.83,8.29,8.83,6,12,6s6.17,2.29,7.9,6C18.17,15.71,15.17,18,12,18ZM12,8a4,4,0,1,0,4,4A4,4,0,0,0,12,8Zm0,6a2,2,0,1,1,2-2A2,2,0,0,1,12,14Z" />
														</svg>
													</button>

													<button type="button" data-bs-toggle="modal" class="catalog__btn catalog__btn--delete"
														data-bs-target="#modal-delete">
														<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
															<path
																d="M20,6H16V5a3,3,0,0,0-3-3H11A3,3,0,0,0,8,5V6H4A1,1,0,0,0,4,8H5V19a3,3,0,0,0,3,3h8a3,3,0,0,0,3-3V8h1a1,1,0,0,0,0-2ZM10,5a1,1,0,0,1,1-1h2a1,1,0,0,1,1,1V6H10Zm7,14a1,1,0,0,1-1,1H8a1,1,0,0,1-1-1V8H17Z" />
														</svg>
													</button>
												</div>
											</td>
										</tr>
										<tr>
											<td>
												<div class="catalog__text">20</div>
											</td>
											<td>
												<div class="catalog__text"><NuxtLink to="#">Echoes of Yesterday</NuxtLink></div>
											</td>
											<td>
												<div class="catalog__text">Gene Graham</div>
											</td>
											<td>
												<div class="catalog__text">Her father and uncover the secrets...</div>
											</td>
											<td>
												<div class="catalog__text">67 / 22</div>
											</td>
											<td>
												<div class="catalog__text">01.02.2023</div>
											</td>
											<td>
												<div class="catalog__btns">
													<button type="button" data-bs-toggle="modal" class="catalog__btn catalog__btn--view"
														data-bs-target="#modal-view">
														<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
															<path
																d="M21.92,11.6C19.9,6.91,16.1,4,12,4S4.1,6.91,2.08,11.6a1,1,0,0,0,0,.8C4.1,17.09,7.9,20,12,20s7.9-2.91,9.92-7.6A1,1,0,0,0,21.92,11.6ZM12,18c-3.17,0-6.17-2.29-7.9-6C5.83,8.29,8.83,6,12,6s6.17,2.29,7.9,6C18.17,15.71,15.17,18,12,18ZM12,8a4,4,0,1,0,4,4A4,4,0,0,0,12,8Zm0,6a2,2,0,1,1,2-2A2,2,0,0,1,12,14Z" />
														</svg>
													</button>

													<button type="button" data-bs-toggle="modal" class="catalog__btn catalog__btn--delete"
														data-bs-target="#modal-delete">
														<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
															<path
																d="M20,6H16V5a3,3,0,0,0-3-3H11A3,3,0,0,0,8,5V6H4A1,1,0,0,0,4,8H5V19a3,3,0,0,0,3,3h8a3,3,0,0,0,3-3V8h1a1,1,0,0,0,0-2ZM10,5a1,1,0,0,1,1-1h2a1,1,0,0,1,1,1V6H10Zm7,14a1,1,0,0,1-1,1H8a1,1,0,0,1-1-1V8H17Z" />
														</svg>
													</button>
												</div>
											</td>
										</tr> -->
									</tbody>
								</table>
							</div>
						</div>
						<!-- end table -->

						<!-- paginator -->
						<div class="col-12">
							<div class="main__paginator">
								<!-- amount -->
								<span class="main__paginator-pages">{{ this.user.commentLength?(this.user.commentLength).length:"0" }} tadan 10 tasi</span>
								<!-- end amount -->

								<ul class="main__paginator-list">
									<li>
										<button @click="count_minus()">
											<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
												<path
													d="M17,11H9.41l3.3-3.29a1,1,0,1,0-1.42-1.42l-5,5a1,1,0,0,0-.21.33,1,1,0,0,0,0,.76,1,1,0,0,0,.21.33l5,5a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42L9.41,13H17a1,1,0,0,0,0-2Z" />
											</svg>
											<span>Prev</span>
										</button>
									</li>
									<li>
										<button @click="count_plus()">
											<span>Next</span>
											<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
												<path
													d="M17.92,11.62a1,1,0,0,0-.21-.33l-5-5a1,1,0,0,0-1.42,1.42L14.59,11H7a1,1,0,0,0,0,2h7.59l-3.3,3.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l5-5a1,1,0,0,0,.21-.33A1,1,0,0,0,17.92,11.62Z" />
											</svg>
										</button>
									</li>
								</ul>

								<ul class="paginator">
                <li class="paginator__item paginator__item--prev">
                  <button @click="count_minus()"
                    ><svg
                      xmlns="http://www.w3.org/2000/svg"
                      enable-background="new 0 0 24 24"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M8.5,12.8l5.7,5.6c0.4,0.4,1,0.4,1.4,0c0,0,0,0,0,0c0.4-0.4,0.4-1,0-1.4l-4.9-5l4.9-5c0.4-0.4,0.4-1,0-1.4c-0.2-0.2-0.4-0.3-0.7-0.3c-0.3,0-0.5,0.1-0.7,0.3l-5.7,5.6C8.1,11.7,8.1,12.3,8.5,12.8C8.5,12.7,8.5,12.7,8.5,12.8z"
                      /></svg
                  ></button>
                </li>
                <div v-for="item in length_page" :key="item">
                <li  v-if="item!=select_page" class="paginator__item">
                  <button @click="get_page(item)" v-if="item==1 || item+1==select_page || item-1==select_page" >{{ item }}</button>
                  <button @click="get_page(item)"  v-else-if="item==length_page.length" >{{ item }}</button>
                  <span  @click="get_page(item)" v-else-if="item-select_page==2">...</span>
                  <span  @click="get_page(item)" v-else-if="select_page-item==2">...</span>

                </li> 
                <li v-else class="paginator__item paginator__item--active">
                  <button @click="get_page(item)"  >{{ item }}</button>
                </li>
              </div>
               
           
                <li class="paginator__item"></li>
              
                <li class="paginator__item paginator__item--next">
                  <button @click="count_plus()"
                    ><svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M15.54,11.29,9.88,5.64a1,1,0,0,0-1.42,0,1,1,0,0,0,0,1.41l4.95,5L8.46,17a1,1,0,0,0,0,1.41,1,1,0,0,0,.71.3,1,1,0,0,0,.71-.3l5.66-5.65A1,1,0,0,0,15.54,11.29Z"
                      /></svg
                  ></button>
                </li>
                        </ul>
							</div>
						</div>
						<!-- end paginator -->
					</div>

					<div class="tab-pane fade" id="tab-3" role="tabpanel" aria-labelledby="3-tab" tabindex="0">
						<!-- table -->
						<div class="col-12">
							<div class="catalog catalog--2">
								<table class="catalog__table">
									<thead>
										<tr>
											<th>ID</th>
											<th>ANIME NOMI</th>
											<th>MUALLIF</th>
											<th>MATN</th>
											<th>REYTING</th>
											<!-- <th>LIKE / DISLIKE</th> -->
											<th>YARATILGAN KUNI</th>
											<th>TAHRIRLASH</th>
										</tr>
									</thead>

									<tbody>
										<tr v-for="(item,index) in user.sharhLength" v-if="index<select_page1*page_card1 && index>=(select_page1-1)*page_card1">
											<td>
												<div class="catalog__text">{{ item.id }}</div>
											</td>
											<td>
												<div class="catalog__text"><NuxtLink to="">{{ item.cinemaName1 }}</NuxtLink></div>
											</td>
											<td>
												<div class="catalog__text">{{ item.creatorName1 }}</div>
											</td>
											<td>
												<div class="catalog__text">{{ (item.description).length>28?(item.description).slice(0,28)+"...":item.description }}</div>
											</td>
											<td>
												<div class="catalog__text catalog__text--rate">{{ item.rating }}</div>
											</td>
											<!-- <td>
												<div class="catalog__text">12 / 7</div>
											</td> -->
											<td>
												<div class="catalog__text">{{ (item.time_create).slice(0,10) }}</div>
											</td>
											<td>
												<div class="catalog__btns">
													<button @click="WiewModal1(item.id)" type="button" data-bs-toggle="modal" class="catalog__btn catalog__btn--view"
														data-bs-target="#modal-view2">
														<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
															<path
																d="M21.92,11.6C19.9,6.91,16.1,4,12,4S4.1,6.91,2.08,11.6a1,1,0,0,0,0,.8C4.1,17.09,7.9,20,12,20s7.9-2.91,9.92-7.6A1,1,0,0,0,21.92,11.6ZM12,18c-3.17,0-6.17-2.29-7.9-6C5.83,8.29,8.83,6,12,6s6.17,2.29,7.9,6C18.17,15.71,15.17,18,12,18ZM12,8a4,4,0,1,0,4,4A4,4,0,0,0,12,8Zm0,6a2,2,0,1,1,2-2A2,2,0,0,1,12,14Z" />
														</svg>
													</button>

													<button @click="Idfunc(item.id)" type="button" data-bs-toggle="modal" class="catalog__btn catalog__btn--delete"
														data-bs-target="#modal-delete2">
														<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
															<path
																d="M20,6H16V5a3,3,0,0,0-3-3H11A3,3,0,0,0,8,5V6H4A1,1,0,0,0,4,8H5V19a3,3,0,0,0,3,3h8a3,3,0,0,0,3-3V8h1a1,1,0,0,0,0-2ZM10,5a1,1,0,0,1,1-1h2a1,1,0,0,1,1,1V6H10Zm7,14a1,1,0,0,1-1,1H8a1,1,0,0,1-1-1V8H17Z" />
														</svg>
													</button>
												</div>
											</td>
										</tr>
										<!-- <tr>
											<td>
												<div class="catalog__text">12</div>
											</td>
											<td>
												<div class="catalog__text"><NuxtLink to="#">The Forgotten Road</NuxtLink></div>
											</td>
											<td>
												<div class="catalog__text">Tess Harper</div>
											</td>
											<td>
												<div class="catalog__text">Confront her own past to save...</div>
											</td>
											<td>
												<div class="catalog__text catalog__text--rate">8.6</div>
											</td>
											<td>
												<div class="catalog__text">67 / 22</div>
											</td>
											<td>
												<div class="catalog__text">06.02.2023</div>
											</td>
											<td>
												<div class="catalog__btns">
													<button type="button" data-bs-toggle="modal" class="catalog__btn catalog__btn--view"
														data-bs-target="#modal-view2">
														<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
															<path
																d="M21.92,11.6C19.9,6.91,16.1,4,12,4S4.1,6.91,2.08,11.6a1,1,0,0,0,0,.8C4.1,17.09,7.9,20,12,20s7.9-2.91,9.92-7.6A1,1,0,0,0,21.92,11.6ZM12,18c-3.17,0-6.17-2.29-7.9-6C5.83,8.29,8.83,6,12,6s6.17,2.29,7.9,6C18.17,15.71,15.17,18,12,18ZM12,8a4,4,0,1,0,4,4A4,4,0,0,0,12,8Zm0,6a2,2,0,1,1,2-2A2,2,0,0,1,12,14Z" />
														</svg>
													</button>

													<button type="button" data-bs-toggle="modal" class="catalog__btn catalog__btn--delete"
														data-bs-target="#modal-delete2">
														<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
															<path
																d="M20,6H16V5a3,3,0,0,0-3-3H11A3,3,0,0,0,8,5V6H4A1,1,0,0,0,4,8H5V19a3,3,0,0,0,3,3h8a3,3,0,0,0,3-3V8h1a1,1,0,0,0,0-2ZM10,5a1,1,0,0,1,1-1h2a1,1,0,0,1,1,1V6H10Zm7,14a1,1,0,0,1-1,1H8a1,1,0,0,1-1-1V8H17Z" />
														</svg>
													</button>
												</div>
											</td>
										</tr>
										<tr>
											<td>
												<div class="catalog__text">13</div>
											</td>
											<td>
												<div class="catalog__text"><NuxtLink to="#">Whitney</NuxtLink></div>
											</td>
											<td>
												<div class="catalog__text">Rosa Lee</div>
											</td>
											<td>
												<div class="catalog__text">Renewable energy source...</div>
											</td>
											<td>
												<div class="catalog__text catalog__text--rate">6.0</div>
											</td>
											<td>
												<div class="catalog__text">44 / 5</div>
											</td>
											<td>
												<div class="catalog__text">05.02.2023</div>
											</td>
											<td>
												<div class="catalog__btns">
													<button type="button" data-bs-toggle="modal" class="catalog__btn catalog__btn--view"
														data-bs-target="#modal-view2">
														<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
															<path
																d="M21.92,11.6C19.9,6.91,16.1,4,12,4S4.1,6.91,2.08,11.6a1,1,0,0,0,0,.8C4.1,17.09,7.9,20,12,20s7.9-2.91,9.92-7.6A1,1,0,0,0,21.92,11.6ZM12,18c-3.17,0-6.17-2.29-7.9-6C5.83,8.29,8.83,6,12,6s6.17,2.29,7.9,6C18.17,15.71,15.17,18,12,18ZM12,8a4,4,0,1,0,4,4A4,4,0,0,0,12,8Zm0,6a2,2,0,1,1,2-2A2,2,0,0,1,12,14Z" />
														</svg>
													</button>

													<button type="button" data-bs-toggle="modal" class="catalog__btn catalog__btn--delete"
														data-bs-target="#modal-delete2">
														<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
															<path
																d="M20,6H16V5a3,3,0,0,0-3-3H11A3,3,0,0,0,8,5V6H4A1,1,0,0,0,4,8H5V19a3,3,0,0,0,3,3h8a3,3,0,0,0,3-3V8h1a1,1,0,0,0,0-2ZM10,5a1,1,0,0,1,1-1h2a1,1,0,0,1,1,1V6H10Zm7,14a1,1,0,0,1-1,1H8a1,1,0,0,1-1-1V8H17Z" />
														</svg>
													</button>
												</div>
											</td>
										</tr>
										<tr>
											<td>
												<div class="catalog__text">14</div>
											</td>
											<td>
												<div class="catalog__text"><NuxtLink to="#">Red Sky at Night</NuxtLink></div>
											</td>
											<td>
												<div class="catalog__text">Matt Jones</div>
											</td>
											<td>
												<div class="catalog__text">Along the way, she must...</div>
											</td>
											<td>
												<div class="catalog__text catalog__text--rate">9.1</div>
											</td>
											<td>
												<div class="catalog__text">20 / 6</div>
											</td>
											<td>
												<div class="catalog__text">05.02.2023</div>
											</td>
											<td>
												<div class="catalog__btns">
													<button type="button" data-bs-toggle="modal" class="catalog__btn catalog__btn--view"
														data-bs-target="#modal-view2">
														<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
															<path
																d="M21.92,11.6C19.9,6.91,16.1,4,12,4S4.1,6.91,2.08,11.6a1,1,0,0,0,0,.8C4.1,17.09,7.9,20,12,20s7.9-2.91,9.92-7.6A1,1,0,0,0,21.92,11.6ZM12,18c-3.17,0-6.17-2.29-7.9-6C5.83,8.29,8.83,6,12,6s6.17,2.29,7.9,6C18.17,15.71,15.17,18,12,18ZM12,8a4,4,0,1,0,4,4A4,4,0,0,0,12,8Zm0,6a2,2,0,1,1,2-2A2,2,0,0,1,12,14Z" />
														</svg>
													</button>

													<button type="button" data-bs-toggle="modal" class="catalog__btn catalog__btn--delete"
														data-bs-target="#modal-delete2">
														<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
															<path
																d="M20,6H16V5a3,3,0,0,0-3-3H11A3,3,0,0,0,8,5V6H4A1,1,0,0,0,4,8H5V19a3,3,0,0,0,3,3h8a3,3,0,0,0,3-3V8h1a1,1,0,0,0,0-2ZM10,5a1,1,0,0,1,1-1h2a1,1,0,0,1,1,1V6H10Zm7,14a1,1,0,0,1-1,1H8a1,1,0,0,1-1-1V8H17Z" />
														</svg>
													</button>
												</div>
											</td>
										</tr>
										<tr>
											<td>
												<div class="catalog__text">15</div>
											</td>
											<td>
												<div class="catalog__text"><NuxtLink to="#">Into the Unknown</NuxtLink></div>
											</td>
											<td>
												<div class="catalog__text">Brian Cranston</div>
											</td>
											<td>
												<div class="catalog__text">But when her groundbreaking...</div>
											</td>
											<td>
												<div class="catalog__text catalog__text--rate">5.5</div>
											</td>
											<td>
												<div class="catalog__text">8 / 132</div>
											</td>
											<td>
												<div class="catalog__text">05.02.2023</div>
											</td>
											<td>
												<div class="catalog__btns">
													<button type="button" data-bs-toggle="modal" class="catalog__btn catalog__btn--view"
														data-bs-target="#modal-view2">
														<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
															<path
																d="M21.92,11.6C19.9,6.91,16.1,4,12,4S4.1,6.91,2.08,11.6a1,1,0,0,0,0,.8C4.1,17.09,7.9,20,12,20s7.9-2.91,9.92-7.6A1,1,0,0,0,21.92,11.6ZM12,18c-3.17,0-6.17-2.29-7.9-6C5.83,8.29,8.83,6,12,6s6.17,2.29,7.9,6C18.17,15.71,15.17,18,12,18ZM12,8a4,4,0,1,0,4,4A4,4,0,0,0,12,8Zm0,6a2,2,0,1,1,2-2A2,2,0,0,1,12,14Z" />
														</svg>
													</button>

													<button type="button" data-bs-toggle="modal" class="catalog__btn catalog__btn--delete"
														data-bs-target="#modal-delete2">
														<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
															<path
																d="M20,6H16V5a3,3,0,0,0-3-3H11A3,3,0,0,0,8,5V6H4A1,1,0,0,0,4,8H5V19a3,3,0,0,0,3,3h8a3,3,0,0,0,3-3V8h1a1,1,0,0,0,0-2ZM10,5a1,1,0,0,1,1-1h2a1,1,0,0,1,1,1V6H10Zm7,14a1,1,0,0,1-1,1H8a1,1,0,0,1-1-1V8H17Z" />
														</svg>
													</button>
												</div>
											</td>
										</tr>
										<tr>
											<td>
												<div class="catalog__text">16</div>
											</td>
											<td>
												<div class="catalog__text"><NuxtLink to="#">The Unseen Journey</NuxtLink></div>
											</td>
											<td>
												<div class="catalog__text">Louis Leterrier</div>
											</td>
											<td>
												<div class="catalog__text">A brilliant scientist discovers...</div>
											</td>
											<td>
												<div class="catalog__text catalog__text--rate">7.0</div>
											</td>
											<td>
												<div class="catalog__text">6 / 1</div>
											</td>
											<td>
												<div class="catalog__text">04.02.2023</div>
											</td>
											<td>
												<div class="catalog__btns">
													<button type="button" data-bs-toggle="modal" class="catalog__btn catalog__btn--view"
														data-bs-target="#modal-view2">
														<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
															<path
																d="M21.92,11.6C19.9,6.91,16.1,4,12,4S4.1,6.91,2.08,11.6a1,1,0,0,0,0,.8C4.1,17.09,7.9,20,12,20s7.9-2.91,9.92-7.6A1,1,0,0,0,21.92,11.6ZM12,18c-3.17,0-6.17-2.29-7.9-6C5.83,8.29,8.83,6,12,6s6.17,2.29,7.9,6C18.17,15.71,15.17,18,12,18ZM12,8a4,4,0,1,0,4,4A4,4,0,0,0,12,8Zm0,6a2,2,0,1,1,2-2A2,2,0,0,1,12,14Z" />
														</svg>
													</button>

													<button type="button" data-bs-toggle="modal" class="catalog__btn catalog__btn--delete"
														data-bs-target="#modal-delete2">
														<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
															<path
																d="M20,6H16V5a3,3,0,0,0-3-3H11A3,3,0,0,0,8,5V6H4A1,1,0,0,0,4,8H5V19a3,3,0,0,0,3,3h8a3,3,0,0,0,3-3V8h1a1,1,0,0,0,0-2ZM10,5a1,1,0,0,1,1-1h2a1,1,0,0,1,1,1V6H10Zm7,14a1,1,0,0,1-1,1H8a1,1,0,0,1-1-1V8H17Z" />
														</svg>
													</button>
												</div>
											</td>
										</tr>
										<tr>
											<td>
												<div class="catalog__text">17</div>
											</td>
											<td>
												<div class="catalog__text"><NuxtLink to="#">Savage Beauty</NuxtLink></div>
											</td>
											<td>
												<div class="catalog__text">Son Gun</div>
											</td>
											<td>
												<div class="catalog__text">But as the stakes get higher...</div>
											</td>
											<td>
												<div class="catalog__text catalog__text--rate">9.0</div>
											</td>
											<td>
												<div class="catalog__text">10 / 0</div>
											</td>
											<td>
												<div class="catalog__text">04.02.2023</div>
											</td>
											<td>
												<div class="catalog__btns">
													<button type="button" data-bs-toggle="modal" class="catalog__btn catalog__btn--view"
														data-bs-target="#modal-view2">
														<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
															<path
																d="M21.92,11.6C19.9,6.91,16.1,4,12,4S4.1,6.91,2.08,11.6a1,1,0,0,0,0,.8C4.1,17.09,7.9,20,12,20s7.9-2.91,9.92-7.6A1,1,0,0,0,21.92,11.6ZM12,18c-3.17,0-6.17-2.29-7.9-6C5.83,8.29,8.83,6,12,6s6.17,2.29,7.9,6C18.17,15.71,15.17,18,12,18ZM12,8a4,4,0,1,0,4,4A4,4,0,0,0,12,8Zm0,6a2,2,0,1,1,2-2A2,2,0,0,1,12,14Z" />
														</svg>
													</button>

													<button type="button" data-bs-toggle="modal" class="catalog__btn catalog__btn--delete"
														data-bs-target="#modal-delete2">
														<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
															<path
																d="M20,6H16V5a3,3,0,0,0-3-3H11A3,3,0,0,0,8,5V6H4A1,1,0,0,0,4,8H5V19a3,3,0,0,0,3,3h8a3,3,0,0,0,3-3V8h1a1,1,0,0,0,0-2ZM10,5a1,1,0,0,1,1-1h2a1,1,0,0,1,1,1V6H10Zm7,14a1,1,0,0,1-1,1H8a1,1,0,0,1-1-1V8H17Z" />
														</svg>
													</button>
												</div>
											</td>
										</tr>
										<tr>
											<td>
												<div class="catalog__text">18</div>
											</td>
											<td>
												<div class="catalog__text"><NuxtLink to="#">Endless Horizon</NuxtLink></div>
											</td>
											<td>
												<div class="catalog__text">Jordana Brewster</div>
											</td>
											<td>
												<div class="catalog__text">When an old friend offers him...</div>
											</td>
											<td>
												<div class="catalog__text catalog__text--rate">6.2</div>
											</td>
											<td>
												<div class="catalog__text">13 / 14</div>
											</td>
											<td>
												<div class="catalog__text">03.02.2023</div>
											</td>
											<td>
												<div class="catalog__btns">
													<button type="button" data-bs-toggle="modal" class="catalog__btn catalog__btn--view"
														data-bs-target="#modal-view2">
														<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
															<path
																d="M21.92,11.6C19.9,6.91,16.1,4,12,4S4.1,6.91,2.08,11.6a1,1,0,0,0,0,.8C4.1,17.09,7.9,20,12,20s7.9-2.91,9.92-7.6A1,1,0,0,0,21.92,11.6ZM12,18c-3.17,0-6.17-2.29-7.9-6C5.83,8.29,8.83,6,12,6s6.17,2.29,7.9,6C18.17,15.71,15.17,18,12,18ZM12,8a4,4,0,1,0,4,4A4,4,0,0,0,12,8Zm0,6a2,2,0,1,1,2-2A2,2,0,0,1,12,14Z" />
														</svg>
													</button>

													<button type="button" data-bs-toggle="modal" class="catalog__btn catalog__btn--delete"
														data-bs-target="#modal-delete2">
														<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
															<path
																d="M20,6H16V5a3,3,0,0,0-3-3H11A3,3,0,0,0,8,5V6H4A1,1,0,0,0,4,8H5V19a3,3,0,0,0,3,3h8a3,3,0,0,0,3-3V8h1a1,1,0,0,0,0-2ZM10,5a1,1,0,0,1,1-1h2a1,1,0,0,1,1,1V6H10Zm7,14a1,1,0,0,1-1,1H8a1,1,0,0,1-1-1V8H17Z" />
														</svg>
													</button>
												</div>
											</td>
										</tr>
										<tr>
											<td>
												<div class="catalog__text">19</div>
											</td>
											<td>
												<div class="catalog__text"><NuxtLink to="#">The Lost Key</NuxtLink></div>
											</td>
											<td>
												<div class="catalog__text">Tyreese Gibson</div>
											</td>
											<td>
												<div class="catalog__text">A down-on-his-luck boxer struggles...</div>
											</td>
											<td>
												<div class="catalog__text catalog__text--rate">7.9</div>
											</td>
											<td>
												<div class="catalog__text">12 / 7</div>
											</td>
											<td>
												<div class="catalog__text">02.02.2023</div>
											</td>
											<td>
												<div class="catalog__btns">
													<button type="button" data-bs-toggle="modal" class="catalog__btn catalog__btn--view"
														data-bs-target="#modal-view2">
														<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
															<path
																d="M21.92,11.6C19.9,6.91,16.1,4,12,4S4.1,6.91,2.08,11.6a1,1,0,0,0,0,.8C4.1,17.09,7.9,20,12,20s7.9-2.91,9.92-7.6A1,1,0,0,0,21.92,11.6ZM12,18c-3.17,0-6.17-2.29-7.9-6C5.83,8.29,8.83,6,12,6s6.17,2.29,7.9,6C18.17,15.71,15.17,18,12,18ZM12,8a4,4,0,1,0,4,4A4,4,0,0,0,12,8Zm0,6a2,2,0,1,1,2-2A2,2,0,0,1,12,14Z" />
														</svg>
													</button>

													<button type="button" data-bs-toggle="modal" class="catalog__btn catalog__btn--delete"
														data-bs-target="#modal-delete2">
														<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
															<path
																d="M20,6H16V5a3,3,0,0,0-3-3H11A3,3,0,0,0,8,5V6H4A1,1,0,0,0,4,8H5V19a3,3,0,0,0,3,3h8a3,3,0,0,0,3-3V8h1a1,1,0,0,0,0-2ZM10,5a1,1,0,0,1,1-1h2a1,1,0,0,1,1,1V6H10Zm7,14a1,1,0,0,1-1,1H8a1,1,0,0,1-1-1V8H17Z" />
														</svg>
													</button>
												</div>
											</td>
										</tr>
										<tr>
											<td>
												<div class="catalog__text">20</div>
											</td>
											<td>
												<div class="catalog__text"><NuxtLink to="#">Echoes of Yesterday</NuxtLink></div>
											</td>
											<td>
												<div class="catalog__text">Charlize Theron</div>
											</td>
											<td>
												<div class="catalog__text">When a renowned archaeologist goes...</div>
											</td>
											<td>
												<div class="catalog__text catalog__text--rate">8.6</div>
											</td>
											<td>
												<div class="catalog__text">67 / 22</div>
											</td>
											<td>
												<div class="catalog__text">02.02.2023</div>
											</td>
											<td>
												<div class="catalog__btns">
													<button type="button" data-bs-toggle="modal" class="catalog__btn catalog__btn--view"
														data-bs-target="#modal-view2">
														<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
															<path
																d="M21.92,11.6C19.9,6.91,16.1,4,12,4S4.1,6.91,2.08,11.6a1,1,0,0,0,0,.8C4.1,17.09,7.9,20,12,20s7.9-2.91,9.92-7.6A1,1,0,0,0,21.92,11.6ZM12,18c-3.17,0-6.17-2.29-7.9-6C5.83,8.29,8.83,6,12,6s6.17,2.29,7.9,6C18.17,15.71,15.17,18,12,18ZM12,8a4,4,0,1,0,4,4A4,4,0,0,0,12,8Zm0,6a2,2,0,1,1,2-2A2,2,0,0,1,12,14Z" />
														</svg>
													</button>

													<button type="button" data-bs-toggle="modal" class="catalog__btn catalog__btn--delete"
														data-bs-target="#modal-delete2">
														<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
															<path
																d="M20,6H16V5a3,3,0,0,0-3-3H11A3,3,0,0,0,8,5V6H4A1,1,0,0,0,4,8H5V19a3,3,0,0,0,3,3h8a3,3,0,0,0,3-3V8h1a1,1,0,0,0,0-2ZM10,5a1,1,0,0,1,1-1h2a1,1,0,0,1,1,1V6H10Zm7,14a1,1,0,0,1-1,1H8a1,1,0,0,1-1-1V8H17Z" />
														</svg>
													</button>
												</div>
											</td>
										</tr> -->
									</tbody>
								</table>
							</div>
						</div>
						<!-- end table -->

						<!-- paginator -->
						<div class="col-12">
							<div class="main__paginator">
								<!-- amount -->
								<span class="main__paginator-pages">{{ this.user.sharhLength?(this.user.sharhLength).length:"0" }} tadan 10 tasi</span>
								<!-- end amount -->

								<ul class="main__paginator-list">
									<li>
										<button @click="count_minus1()">
											<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
												<path
													d="M17,11H9.41l3.3-3.29a1,1,0,1,0-1.42-1.42l-5,5a1,1,0,0,0-.21.33,1,1,0,0,0,0,.76,1,1,0,0,0,.21.33l5,5a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42L9.41,13H17a1,1,0,0,0,0-2Z" />
											</svg>
											<span>Prev</span>
										</button>
									</li>
									<li>
										<button @click="count_plus1()">
											<span>Next</span>
											<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
												<path
													d="M17.92,11.62a1,1,0,0,0-.21-.33l-5-5a1,1,0,0,0-1.42,1.42L14.59,11H7a1,1,0,0,0,0,2h7.59l-3.3,3.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l5-5a1,1,0,0,0,.21-.33A1,1,0,0,0,17.92,11.62Z" />
											</svg>
										</button>
									</li>
								</ul>

								<ul class="paginator">
                <li class="paginator__item paginator__item--prev">
                  <button @click="count_minus1()"
                    ><svg
                      xmlns="http://www.w3.org/2000/svg"
                      enable-background="new 0 0 24 24"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M8.5,12.8l5.7,5.6c0.4,0.4,1,0.4,1.4,0c0,0,0,0,0,0c0.4-0.4,0.4-1,0-1.4l-4.9-5l4.9-5c0.4-0.4,0.4-1,0-1.4c-0.2-0.2-0.4-0.3-0.7-0.3c-0.3,0-0.5,0.1-0.7,0.3l-5.7,5.6C8.1,11.7,8.1,12.3,8.5,12.8C8.5,12.7,8.5,12.7,8.5,12.8z"
                      /></svg
                  ></button>
                </li>
                <div v-for="item in length_page1" :key="item">
                <li  v-if="item!=select_page1" class="paginator__item">
                  <button @click="get_page1(item)" v-if="item==1 || item+1==select_page1 || item-1==select_page1" >{{ item }}</button>
                  <button @click="get_page1(item)"  v-else-if="item==length_page1.length" >{{ item }}</button>
                  <span  @click="get_page1(item)" v-else-if="item-select_page1==2">...</span>
                  <span  @click="get_page1(item)" v-else-if="select_page1-item==2">...</span>

                </li> 
                <li v-else class="paginator__item paginator__item--active">
                  <button @click="get_page1(item)"  >{{ item }}</button>
                </li>
              </div>
               
           
                <li class="paginator__item"></li>
              
                <li class="paginator__item paginator__item--next">
                  <button @click="count_plus1()"
                    ><svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M15.54,11.29,9.88,5.64a1,1,0,0,0-1.42,0,1,1,0,0,0,0,1.41l4.95,5L8.46,17a1,1,0,0,0,0,1.41,1,1,0,0,0,.71.3,1,1,0,0,0,.71-.3l5.66-5.65A1,1,0,0,0,15.54,11.29Z"
                      /></svg
                  ></button>
                </li>
                        </ul>
							</div>
						</div>
						<!-- end paginator -->
					</div>
				</div>
				<!-- end content tabs -->
			</div>
		</div>
	</main>
	<!-- end main content -->

	<!-- view modal -->
	<div v-for="item in userIzoh"    class="modal fade" id="modal-view" tabindex="-1" aria-labelledby="modal-view" aria-hidden="true">
		<div class="modal-dialog modal-dialog-centered">
			<div class="modal-content">
				<div class="modal__content modal__content--view">
					<div class="comments__autor">
						<img class="comments__avatar" src="img/user.svg" alt="">
						<span class="comments__name">{{ item.creatorName }}</span>
						<span class="comments__time">{{ (item.time_create).slice(0,10) }}, {{ (item.time_create).slice(11,16) }}</span>
					</div>
					<p class="comments__text">{{ item.description }}</p>
					<div class="comments__actions">
						<div class="comments__rate">
							<span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
									<path
										d="M21.3,10.08A3,3,0,0,0,19,9H14.44L15,7.57A4.13,4.13,0,0,0,11.11,2a1,1,0,0,0-.91.59L7.35,9H5a3,3,0,0,0-3,3v7a3,3,0,0,0,3,3H17.73a3,3,0,0,0,2.95-2.46l1.27-7A3,3,0,0,0,21.3,10.08ZM7,20H5a1,1,0,0,1-1-1V12a1,1,0,0,1,1-1H7Zm13-7.82-1.27,7a1,1,0,0,1-1,.82H9V10.21l2.72-6.12A2.11,2.11,0,0,1,13.1,6.87L12.57,8.3A2,2,0,0,0,14.44,11H19a1,1,0,0,1,.77.36A1,1,0,0,1,20,12.18Z" />
								</svg>{{ item.commentLike }}</span>

							<span>{{ item.commentFalse }}<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
									<path
										d="M19,2H6.27A3,3,0,0,0,3.32,4.46l-1.27,7A3,3,0,0,0,5,15H9.56L9,16.43A4.13,4.13,0,0,0,12.89,22a1,1,0,0,0,.91-.59L16.65,15H19a3,3,0,0,0,3-3V5A3,3,0,0,0,19,2ZM15,13.79l-2.72,6.12a2.13,2.13,0,0,1-1.38-2.78l.53-1.43A2,2,0,0,0,9.56,13H5a1,1,0,0,1-.77-.36A1,1,0,0,1,4,11.82l1.27-7a1,1,0,0,1,1-.82H15ZM20,12a1,1,0,0,1-1,1H17V4h2a1,1,0,0,1,1,1Z" />
								</svg></span>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<!-- end view modal -->

	<!-- delete modal -->
	<div class="modal fade" id="modal-delete" tabindex="-1" aria-labelledby="modal-delete" aria-hidden="true">
		<div class="modal-dialog modal-dialog-centered">
			<div class="modal-content">
				<div class="modal__content">
					<form action="#" class="modal__form">
						<h4 class="modal__title">Fikrni o'chirish</h4>

						<p class="modal__text">Bu fikrni butunlay o‘chirib tashlamoqchimisiz?</p>

						<div class="modal__btns">
							<button @click="userCommentDelete()" class="modal__btn modal__btn--apply" type="button"><span>O'chirish</span></button>
							<button class="modal__btn modal__btn--dismiss" type="button" data-bs-dismiss="modal"
								aria-label="Close"><span>Qoldirish</span></button>
						</div>
					</form>
				</div>
			</div>
		</div>
	</div>
	<!-- end delete modal -->

	<!-- view modal -->
	<div v-for="item in userSharh"   class="modal fade" id="modal-view2" tabindex="-1" aria-labelledby="modal-view2" aria-hidden="true">
		<div class="modal-dialog modal-dialog-centered">
			<div class="modal-content">
				<div class="modal__content modal__content--view">
					<div class="reviews__autor">
						<img class="reviews__avatar" src="img/user.svg" alt="">
						<span class="reviews__name">{{ item.creatorName1 }}</span>
						<span class="reviews__time">{{ (item.time_create).slice(0,10) }}, {{ (item.time_create).slice(11,16) }} by {{ item.creatorName1 }}</span>

						<span class="reviews__rating"><svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24"
								viewBox="0 0 24 24">
								<path
									d="M22,10.1c0.1-0.5-0.3-1.1-0.8-1.1l-5.7-0.8L12.9,3c-0.1-0.2-0.2-0.3-0.4-0.4C12,2.3,11.4,2.5,11.1,3L8.6,8.2L2.9,9C2.6,9,2.4,9.1,2.3,9.3c-0.4,0.4-0.4,1,0,1.4l4.1,4l-1,5.7c0,0.2,0,0.4,0.1,0.6c0.3,0.5,0.9,0.7,1.4,0.4l5.1-2.7l5.1,2.7c0.1,0.1,0.3,0.1,0.5,0.1v0c0.1,0,0.1,0,0.2,0c0.5-0.1,0.9-0.6,0.8-1.2l-1-5.7l4.1-4C21.9,10.5,22,10.3,22,10.1z">
								</path>
							</svg>{{ item.rating }}</span>
					</div>
					<p class="reviews__text">{{ item.description }}</p>
				</div>
			</div>
		</div>
	</div>
	<!-- end view modal -->

	<!-- delete modal -->
	<div class="modal fade" id="modal-delete2" tabindex="-1" aria-labelledby="modal-delete2" aria-hidden="true">
		<div class="modal-dialog modal-dialog-centered">
			<div class="modal-content">
				<div class="modal__content">
					<form action="#" class="modal__form">
						<h4 class="modal__title">Sharhlarni o'chirish</h4>

						<p class="modal__text">Bu sharhni butunlay oʻchirib tashlamoqchimisiz?</p>

						<div class="modal__btns">
							<button @click="userReviewDelete()" class="modal__btn modal__btn--apply" type="button"><span>Oʻchirish</span></button>
							<button class="modal__btn modal__btn--dismiss" type="button" data-bs-dismiss="modal"
								aria-label="Close"><span>Qoldirish</span></button>
						</div>
					</form>
				</div>
			</div>
		</div>
	</div>
	<!-- end delete modal -->

	<!-- status modal -->
	<div class="modal fade" id="modal-status3" tabindex="-1" aria-labelledby="modal-status3" aria-hidden="true">
		<div class="modal-dialog modal-dialog-centered">
			<div class="modal-content">
				<div class="modal__content">
					<form action="#" class="modal__form">
						<h4 class="modal__title">Status change</h4>

						<p class="modal__text">Are you sure about immediately change status?</p>

						<div class="modal__btns">
							<button @click="UserBanned()" class="modal__btn modal__btn--apply" type="button"><span>Apply</span></button>
							<button class="modal__btn modal__btn--dismiss" type="button" data-bs-dismiss="modal"
								aria-label="Close"><span>Dismiss</span></button>
						</div>
					</form>
				</div>
			</div>
		</div>
	</div>
	<!-- end status modal -->

	<!-- delete modal -->
	<div class="modal fade" id="modal-delete3" tabindex="-1" aria-labelledby="modal-delete3" aria-hidden="true">
		<div class="modal-dialog modal-dialog-centered">
			<div class="modal-content">
				<div class="modal__content">
					<form action="#" class="modal__form">
						<h4 class="modal__title">User delete</h4>

						<p class="modal__text">Are you sure to permanently delete this user?</p>

						<div class="modal__btns">
							<button @click="UserDelete()" class="modal__btn modal__btn--apply" type="button"><span>Delete</span></button>
							<button class="modal__btn modal__btn--dismiss" type="button" data-bs-dismiss="modal"
								aria-label="Close"><span>Dismiss</span></button>
						</div>
					</form>
				</div>
			</div>
		</div>
	</div>
	<!-- end delete modal -->
    </div>
</template>

<script>
import axios from 'axios';


export default {
    name: "Edit-UserPage",
	data(){
    	return{
			user:[],
			userIzoh:[],
			deleteId:[],
			userSharh:[],
			select_page:1,
     		page_card:10,
      		length_page:[],
			select_page1:1,
     		page_card1:10,
      		length_page1:[]
		}
	},
    mounted() {
		try{
		axios.get('http://localhost:4003/users').then(res=>{
			const Filter=res.data.filter(item=>item.id==sessionStorage.getItem("userEdit"))
			sessionStorage.setItem("userEditBan",Filter[0].pan?1:0)
			axios.get('http://localhost:4003/api/v1/comment').then(res1=>{
				axios.get('http://localhost:4003/api/v1/sharx').then(res2=>{
				   for (let i = 0; i < Filter.length; i++) {
						Filter[i].commentLength=[]
						for (let j = 0; j < res1.data.length; j++) {
					 		if(Filter[i].id==res1.data[j].creator){
                        	var a=res1.data[j].creator
							Filter[i].commentLength.push(res1.data[j])
					 		}
						}
						Filter[i].sharhLength=[]
						for (let j = 0; j < res2.data.length; j++) {
					 		if(Filter[i].id==res2.data[j].creator){
							Filter[i].sharhLength.push(res2.data[j])
					 		}
						}
				   }
				   Filter.map(item=>{
					axios.get('http://localhost:4003/api/v1/cinema').then(res3=>{
                  		axios.get("http://localhost:4003/api/v1/comment_mark").then(res4=>{
							for (let i = 0; i < item.commentLength.length; i++) {
								for (let j = 0; j < res3.data.length; j++) {
									if(item.commentLength[i].cinema_id==res3.data[j].id){
										item.commentLength[i].cinemaName=res3.data[j].title
									}
								}
								for (let j = 0; j < res.data.length; j++) {
					  				if(item.commentLength[i].creator==res.data[j].id){
										item.commentLength[i].creatorName=res.data[j].name
					  				}
								}
								item.commentLength[i].commentLike=0
								item.commentLength[i].commentFalse=0
								for (let j = 0; j < res4.data.length; j++) {
									if(item.commentLength[i].id==res4.data[j].comment_id){
                                   		if(res4.data[j].dislike){
											item.commentLength[i].commentLike=item.commentLength[i].commentLike+1
								   		}else{
											item.commentLength[i].commentFalse=item.commentLength[i].commentFalse+1
								   		}
									}
								}
				  			}	
							
							for (let i = 0; i < item.sharhLength.length; i++) {
								for (let j = 0; j < res3.data.length; j++) {
									if(item.sharhLength[i].cinema_id==res3.data[j].id){
										item.sharhLength[i].cinemaName1=res3.data[j].title
									}
								}
				  			
								for (let j = 0; j < res.data.length; j++) {
					  				if(item.sharhLength[i].creator==res.data[j].id){
										item.sharhLength[i].creatorName1=res.data[j].name
					  				}
								}
				  			}
				  			this.user=item
							var for_w=this.user.commentLength.length/this.page_card
            		        var daad=[]
            		        for (let i = 0; i < for_w; i++) {
					        daad.push(i+1)
					        }
					        this.length_page=daad
							var for_w=this.user.sharhLength.length/this.page_card1
            		        var daad=[]
            		        for (let i = 0; i < for_w; i++) {
					        daad.push(i+1)
					        }
					        this.length_page1=daad
							document.querySelector("#username").value=`${item.name},${item.id}`
							document.querySelector("#firstname").value=item.name
							document.querySelector("#email2").value=item.email
							document.querySelector("#lastname").value=item.familiya
							document.querySelector("#oldpass").value=item.password
							document.querySelector("#rights").value=item.superadmin
							document.querySelector("#subscription").value=item.pay?1:0
						})
					})
				   })
				})
			})
		})

		
		}catch(err){
			console.log(err);
		}
    },
	methods:{
		WiewModal(id){
			const Filter=this.user.commentLength.filter(item=>item.id==id)
			this.userIzoh=Filter
		},
		Idfunc(id){
            this.deleteId=id
		},
		userCommentDelete(){
			axios.delete(`http://localhost:4003/api/v1/comment/${this.deleteId}`).then(res=>{
			alert("Ma'lumot o'chirildi")
			window.location.reload()
		   }).catch(err=>{
			alert("Ma'lumot o'chirilmadi")
		   })
		},
		WiewModal1(id){
			const Filter=this.user.sharhLength.filter(item=>item.id==id)
			this.userSharh=Filter
		},
		userReviewDelete(){
           axios.delete(`http://localhost:4003/api/v1/sharx/${this.deleteId}`).then(res=>{
			alert("Ma'lumot o'chirildi")
			window.location.reload()
		   }).catch(err=>{
			alert("Ma'lumot o'chirilmadi")
		   })
		},
		UserDelete(){
           axios.delete(`http://localhost:4003/users/${sessionStorage.getItem("userEdit")}`).then(res=>{
			alert("Ma'lumot o'chirildi")
            window.location="users"
		   }).catch(err=>{
			alert("Ma'lumot o'chirilmadi")
		   })
		},
		UserBanned(){
		var a=sessionStorage.getItem("userEditBan")
		var formdata=new FormData()
		formdata.append("pan",a==1?false:true)
        axios.put(`http://localhost:4003/panu/${sessionStorage.getItem("userEdit")}`,formdata).then(res=>{
			alert("User holati o'zgartirildi")
			window.location.reload()
		}).catch(err=>{
			alert("User holati o'zgartirilmadi")
		})
		},
		userResetPassword(){
			var formdata=new FormData()
			formdata.append("old_password",document.querySelector("#oldpass").value)
			formdata.append("password",document.querySelector("#newpass").value)
			formdata.append("repit_password",document.querySelector("#confirmpass").value)

			axios.put(`http://localhost:4003/reset/${sessionStorage.getItem("userEdit")}`,formdata).then(res=>{
             alert("User paroli o'zgardi")
			 window.location.reload()
			}).catch(err=>{
			 alert("User paroli o'zgarmadi")
			})
		},
		get_page(id){
		this.select_page=id
		},
		count_plus(){
		if(this.length_page.length>this.select_page){
  		this.select_page++
		}
		},
		count_minus(){
  		if(this.select_page>1){
  		this.select_page--  
  		}
		},
		get_page1(id){
		this.select_page1=id
		},
		count_plus1(){
		if(this.length_page1.length>this.select_page1){
  		this.select_page1++
		}
		},
		count_minus1(){
  		if(this.select_page1>1){
  		this.select_page1--  
  		}
		},
		UserEdit(){
			var formdata=new FormData()
			formdata.append("name",document.querySelector("#firstname").value)
			formdata.append("email",document.querySelector("#email2").value)
			formdata.append("familiya",document.querySelector("#lastname").value)
			formdata.append("superadmin",document.querySelector("#rights").value)
			axios.put(`http://localhost:4003/users/${sessionStorage.getItem("userEdit")}`,formdata).then(res=>{
				if(document.querySelector("#subscription").value==0){
					axios.get('http://localhost:4003/api/pay').then(res=>{
                        const Filter=res.data.filter(item=>item.user_id==sessionStorage.getItem("userEdit"))
						axios.delete(`http://localhost:4003/api/pay/${Filter[0].id}`).then(res=>{
							// alert("User ma'lumoti o'zgartirildi")
					        // window.location.reload()
						})
					})
				}else{
					var formdata1=new FormData()
			    	formdata1.append("month",document.querySelector("#subscription").value)
					formdata1.append("user_id",sessionStorage.getItem("userEdit"))
					axios.post(`http://localhost:4003/api/pay`,formdata1).then(res=>{
					}).catch(err=>{console.log(err)})
				}
				// window.location.reload()
				alert("User ma'lumoti o'zgartirildi")
				
			}).catch(err=>{
				alert("User ma'lumoti o'zgartirilmadi")
			})
		}
	}

}
</script>