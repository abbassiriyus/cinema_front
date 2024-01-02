<template>
	<div>
		<!-- main content -->
		<main class="main">
			<div class="container-fluid">
				<div class="row">
					<!-- main title -->
					<div class="col-12">
						<div class="main__title">
							<h2>KATALOG</h2>

							<span class="main__title-stat">Jami {{ this.media.length }}</span>
							<div class="main__title-wrap">
								<select @click="ReytingFilter()" class="filter__select" name="sort" id="filter__sort">
									<option value="0">Yaratilgan sana</option>
									<option value="1">Reyring</option>
									<option value="2">Ko'rishlar</option>
								</select>
								<!-- search -->
								<form action="#" class="main__title-form">
									<input @input="CinemaSearch()" id="cinemaSearch" type="text" placeholder="Anime toping / serial..">
									<button type="button">
										<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
											<path
												d="M21.71,20.29,18,16.61A9,9,0,1,0,16.61,18l3.68,3.68a1,1,0,0,0,1.42,0A1,1,0,0,0,21.71,20.29ZM11,18a7,7,0,1,1,7-7A7,7,0,0,1,11,18Z">
											</path>
										</svg>
									</button>
								</form>
								<!-- end search -->
							</div>
						</div>
					</div>
					<!-- end main title -->

					<!-- items -->
					<div class="col-12">
						<div class="catalog catalog--1">
							<table class="catalog__table">
								<thead>
									<tr>
										<th>ID</th>
										<th>ANIME NOMI</th>
										<th>Reyting</th>
										<th>KATEGORIYA</th>
										<th>KO'RISHLAR</th>
										<th>HOLAT</th>
										<th>YARATILGAN KUNI</th>
										<th>TAHRIRLASH</th>
									</tr>
								</thead>

								<tbody>
									<tr v-for="(item, index) in media" :key="item.id"
										v-if="index < select_page * page_card && index >= (select_page - 1) * page_card">
										<td>
											<div class="catalog__text">{{ item.id }}</div>
										</td>
										<td>
											<div class="catalog__text">
												<NuxtLink to="#">{{ item.title }}</NuxtLink>
											</div>
										</td>
										<td>
											<div class="catalog__text catalog__text--rate">{{ item.mark }}</div>
										</td>
										<td>
											<div class="catalog__text">{{ item.category }}</div>
										</td>
										<td>
											<div class="catalog__text">{{ item.more_loking }}</div>
										</td>
										<td v-if="item.looking">
											<div class="catalog__text catalog__text--green">Visible</div>
										</td>
										<td v-if="!item.looking">
											<div class="catalog__text catalog__text--red">Hidden</div>
										</td>

										<td>
											<div class="catalog__text">{{ (item.time_create).slice(0, 10) }}</div>
										</td>
										<td>
											<div class="catalog__btns">
												<button @click="bannedCinema1(item.id, item.looking)" type="button" data-bs-toggle="modal"
													class="catalog__btn catalog__btn--banned" data-bs-target="#modal-status">
													<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
														<path
															d="M12,13a1,1,0,0,0-1,1v3a1,1,0,0,0,2,0V14A1,1,0,0,0,12,13Zm5-4V7A5,5,0,0,0,7,7V9a3,3,0,0,0-3,3v7a3,3,0,0,0,3,3H17a3,3,0,0,0,3-3V12A3,3,0,0,0,17,9ZM9,7a3,3,0,0,1,6,0V9H9Zm9,12a1,1,0,0,1-1,1H7a1,1,0,0,1-1-1V12a1,1,0,0,1,1-1H17a1,1,0,0,1,1,1Z" />
													</svg>
												</button>
												<NuxtLink to="#" class="catalog__btn catalog__btn--view">
													<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
														<path
															d="M21.92,11.6C19.9,6.91,16.1,4,12,4S4.1,6.91,2.08,11.6a1,1,0,0,0,0,.8C4.1,17.09,7.9,20,12,20s7.9-2.91,9.92-7.6A1,1,0,0,0,21.92,11.6ZM12,18c-3.17,0-6.17-2.29-7.9-6C5.83,8.29,8.83,6,12,6s6.17,2.29,7.9,6C18.17,15.71,15.17,18,12,18ZM12,8a4,4,0,1,0,4,4A4,4,0,0,0,12,8Zm0,6a2,2,0,1,1,2-2A2,2,0,0,1,12,14Z" />
													</svg>
												</NuxtLink>
												<button @click="cinemaId(item.id)" class="catalog__btn catalog__btn--edit">
													<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
														<path
															d="M5,18H9.24a1,1,0,0,0,.71-.29l6.92-6.93h0L19.71,8a1,1,0,0,0,0-1.42L15.47,2.29a1,1,0,0,0-1.42,0L11.23,5.12h0L4.29,12.05a1,1,0,0,0-.29.71V17A1,1,0,0,0,5,18ZM14.76,4.41l2.83,2.83L16.17,8.66,13.34,5.83ZM6,13.17l5.93-5.93,2.83,2.83L8.83,16H6ZM21,20H3a1,1,0,0,0,0,2H21a1,1,0,0,0,0-2Z" />
													</svg>
												</button>
												<button @click="bannedCinema1(item.id)" type="button" data-bs-toggle="modal"
													class="catalog__btn catalog__btn--delete" data-bs-target="#modal-delete">
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
											<div class="catalog__text">
												<NuxtLink to="#">The Forgotten Road</NuxtLink>
											</div>
										</td>
										<td>
											<div class="catalog__text catalog__text--rate">7.1</div>
										</td>
										<td>
											<div class="catalog__text">Movie</div>
										</td>
										<td>
											<div class="catalog__text">1093</div>
										</td>
										<td>
											<div class="catalog__text catalog__text--red">Hidden</div>
										</td>
										<td>
											<div class="catalog__text">05.02.2023</div>
										</td>
										<td>
											<div class="catalog__btns">
												<button type="button" data-bs-toggle="modal" class="catalog__btn catalog__btn--banned"
													data-bs-target="#modal-status">
													<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
														<path
															d="M12,13a1,1,0,0,0-1,1v3a1,1,0,0,0,2,0V14A1,1,0,0,0,12,13Zm5-4V7A5,5,0,0,0,7,7V9a3,3,0,0,0-3,3v7a3,3,0,0,0,3,3H17a3,3,0,0,0,3-3V12A3,3,0,0,0,17,9ZM9,7a3,3,0,0,1,6,0V9H9Zm9,12a1,1,0,0,1-1,1H7a1,1,0,0,1-1-1V12a1,1,0,0,1,1-1H17a1,1,0,0,1,1,1Z" />
													</svg>
												</button>
												<NuxtLink to="#" class="catalog__btn catalog__btn--view">
													<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
														<path
															d="M21.92,11.6C19.9,6.91,16.1,4,12,4S4.1,6.91,2.08,11.6a1,1,0,0,0,0,.8C4.1,17.09,7.9,20,12,20s7.9-2.91,9.92-7.6A1,1,0,0,0,21.92,11.6ZM12,18c-3.17,0-6.17-2.29-7.9-6C5.83,8.29,8.83,6,12,6s6.17,2.29,7.9,6C18.17,15.71,15.17,18,12,18ZM12,8a4,4,0,1,0,4,4A4,4,0,0,0,12,8Zm0,6a2,2,0,1,1,2-2A2,2,0,0,1,12,14Z" />
													</svg>
												</NuxtLink>
												<NuxtLink to="add-item" class="catalog__btn catalog__btn--edit">
													<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
														<path
															d="M5,18H9.24a1,1,0,0,0,.71-.29l6.92-6.93h0L19.71,8a1,1,0,0,0,0-1.42L15.47,2.29a1,1,0,0,0-1.42,0L11.23,5.12h0L4.29,12.05a1,1,0,0,0-.29.71V17A1,1,0,0,0,5,18ZM14.76,4.41l2.83,2.83L16.17,8.66,13.34,5.83ZM6,13.17l5.93-5.93,2.83,2.83L8.83,16H6ZM21,20H3a1,1,0,0,0,0,2H21a1,1,0,0,0,0-2Z" />
													</svg>
												</NuxtLink>
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
											<div class="catalog__text">
												<NuxtLink to="#">Whitney</NuxtLink>
											</div>
										</td>
										<td>
											<div class="catalog__text catalog__text--rate">6.3</div>
										</td>
										<td>
											<div class="catalog__text">TV Series</div>
										</td>
										<td>
											<div class="catalog__text">723</div>
										</td>
										<td>
											<div class="catalog__text catalog__text--green">Visible</div>
										</td>
										<td>
											<div class="catalog__text">04.02.2023</div>
										</td>
										<td>
											<div class="catalog__btns">
												<button type="button" data-bs-toggle="modal" class="catalog__btn catalog__btn--banned"
													data-bs-target="#modal-status">
													<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
														<path
															d="M12,13a1,1,0,0,0-1,1v3a1,1,0,0,0,2,0V14A1,1,0,0,0,12,13Zm5-4V7A5,5,0,0,0,7,7V9a3,3,0,0,0-3,3v7a3,3,0,0,0,3,3H17a3,3,0,0,0,3-3V12A3,3,0,0,0,17,9ZM9,7a3,3,0,0,1,6,0V9H9Zm9,12a1,1,0,0,1-1,1H7a1,1,0,0,1-1-1V12a1,1,0,0,1,1-1H17a1,1,0,0,1,1,1Z" />
													</svg>
												</button>
												<NuxtLink to="#" class="catalog__btn catalog__btn--view">
													<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
														<path
															d="M21.92,11.6C19.9,6.91,16.1,4,12,4S4.1,6.91,2.08,11.6a1,1,0,0,0,0,.8C4.1,17.09,7.9,20,12,20s7.9-2.91,9.92-7.6A1,1,0,0,0,21.92,11.6ZM12,18c-3.17,0-6.17-2.29-7.9-6C5.83,8.29,8.83,6,12,6s6.17,2.29,7.9,6C18.17,15.71,15.17,18,12,18ZM12,8a4,4,0,1,0,4,4A4,4,0,0,0,12,8Zm0,6a2,2,0,1,1,2-2A2,2,0,0,1,12,14Z" />
													</svg>
												</NuxtLink>
												<NuxtLink to="add-item" class="catalog__btn catalog__btn--edit">
													<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
														<path
															d="M5,18H9.24a1,1,0,0,0,.71-.29l6.92-6.93h0L19.71,8a1,1,0,0,0,0-1.42L15.47,2.29a1,1,0,0,0-1.42,0L11.23,5.12h0L4.29,12.05a1,1,0,0,0-.29.71V17A1,1,0,0,0,5,18ZM14.76,4.41l2.83,2.83L16.17,8.66,13.34,5.83ZM6,13.17l5.93-5.93,2.83,2.83L8.83,16H6ZM21,20H3a1,1,0,0,0,0,2H21a1,1,0,0,0,0-2Z" />
													</svg>
												</NuxtLink>
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
											<div class="catalog__text">
												<NuxtLink to="#">Red Sky at Night</NuxtLink>
											</div>
										</td>
										<td>
											<div class="catalog__text catalog__text--rate">8.4</div>
										</td>
										<td>
											<div class="catalog__text">TV Series</div>
										</td>
										<td>
											<div class="catalog__text">2457</div>
										</td>
										<td>
											<div class="catalog__text catalog__text--green">Visible</div>
										</td>
										<td>
											<div class="catalog__text">04.02.2023</div>
										</td>
										<td>
											<div class="catalog__btns">
												<button type="button" data-bs-toggle="modal" class="catalog__btn catalog__btn--banned"
													data-bs-target="#modal-status">
													<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
														<path
															d="M12,13a1,1,0,0,0-1,1v3a1,1,0,0,0,2,0V14A1,1,0,0,0,12,13Zm5-4V7A5,5,0,0,0,7,7V9a3,3,0,0,0-3,3v7a3,3,0,0,0,3,3H17a3,3,0,0,0,3-3V12A3,3,0,0,0,17,9ZM9,7a3,3,0,0,1,6,0V9H9Zm9,12a1,1,0,0,1-1,1H7a1,1,0,0,1-1-1V12a1,1,0,0,1,1-1H17a1,1,0,0,1,1,1Z" />
													</svg>
												</button>
												<NuxtLink to="#" class="catalog__btn catalog__btn--view">
													<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
														<path
															d="M21.92,11.6C19.9,6.91,16.1,4,12,4S4.1,6.91,2.08,11.6a1,1,0,0,0,0,.8C4.1,17.09,7.9,20,12,20s7.9-2.91,9.92-7.6A1,1,0,0,0,21.92,11.6ZM12,18c-3.17,0-6.17-2.29-7.9-6C5.83,8.29,8.83,6,12,6s6.17,2.29,7.9,6C18.17,15.71,15.17,18,12,18ZM12,8a4,4,0,1,0,4,4A4,4,0,0,0,12,8Zm0,6a2,2,0,1,1,2-2A2,2,0,0,1,12,14Z" />
													</svg>
												</NuxtLink>
												<NuxtLink to="add-item" class="catalog__btn catalog__btn--edit">
													<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
														<path
															d="M5,18H9.24a1,1,0,0,0,.71-.29l6.92-6.93h0L19.71,8a1,1,0,0,0,0-1.42L15.47,2.29a1,1,0,0,0-1.42,0L11.23,5.12h0L4.29,12.05a1,1,0,0,0-.29.71V17A1,1,0,0,0,5,18ZM14.76,4.41l2.83,2.83L16.17,8.66,13.34,5.83ZM6,13.17l5.93-5.93,2.83,2.83L8.83,16H6ZM21,20H3a1,1,0,0,0,0,2H21a1,1,0,0,0,0-2Z" />
													</svg>
												</NuxtLink>
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
											<div class="catalog__text">
												<NuxtLink to="#">Into the Unknown</NuxtLink>
											</div>
										</td>
										<td>
											<div class="catalog__text catalog__text--rate">7.9</div>
										</td>
										<td>
											<div class="catalog__text">Movie</div>
										</td>
										<td>
											<div class="catalog__text">5092</div>
										</td>
										<td>
											<div class="catalog__text catalog__text--green">Visible</div>
										</td>
										<td>
											<div class="catalog__text">03.02.2023</div>
										</td>
										<td>
											<div class="catalog__btns">
												<button type="button" data-bs-toggle="modal" class="catalog__btn catalog__btn--banned"
													data-bs-target="#modal-status">
													<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
														<path
															d="M12,13a1,1,0,0,0-1,1v3a1,1,0,0,0,2,0V14A1,1,0,0,0,12,13Zm5-4V7A5,5,0,0,0,7,7V9a3,3,0,0,0-3,3v7a3,3,0,0,0,3,3H17a3,3,0,0,0,3-3V12A3,3,0,0,0,17,9ZM9,7a3,3,0,0,1,6,0V9H9Zm9,12a1,1,0,0,1-1,1H7a1,1,0,0,1-1-1V12a1,1,0,0,1,1-1H17a1,1,0,0,1,1,1Z" />
													</svg>
												</button>
												<NuxtLink to="#" class="catalog__btn catalog__btn--view">
													<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
														<path
															d="M21.92,11.6C19.9,6.91,16.1,4,12,4S4.1,6.91,2.08,11.6a1,1,0,0,0,0,.8C4.1,17.09,7.9,20,12,20s7.9-2.91,9.92-7.6A1,1,0,0,0,21.92,11.6ZM12,18c-3.17,0-6.17-2.29-7.9-6C5.83,8.29,8.83,6,12,6s6.17,2.29,7.9,6C18.17,15.71,15.17,18,12,18ZM12,8a4,4,0,1,0,4,4A4,4,0,0,0,12,8Zm0,6a2,2,0,1,1,2-2A2,2,0,0,1,12,14Z" />
													</svg>
												</NuxtLink>
												<NuxtLink to="add-item" class="catalog__btn catalog__btn--edit">
													<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
														<path
															d="M5,18H9.24a1,1,0,0,0,.71-.29l6.92-6.93h0L19.71,8a1,1,0,0,0,0-1.42L15.47,2.29a1,1,0,0,0-1.42,0L11.23,5.12h0L4.29,12.05a1,1,0,0,0-.29.71V17A1,1,0,0,0,5,18ZM14.76,4.41l2.83,2.83L16.17,8.66,13.34,5.83ZM6,13.17l5.93-5.93,2.83,2.83L8.83,16H6ZM21,20H3a1,1,0,0,0,0,2H21a1,1,0,0,0,0-2Z" />
													</svg>
												</NuxtLink>
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
											<div class="catalog__text">
												<NuxtLink to="#">The Unseen Journey</NuxtLink>
											</div>
										</td>
										<td>
											<div class="catalog__text catalog__text--rate">7.1</div>
										</td>
										<td>
											<div class="catalog__text">TV Series</div>
										</td>
										<td>
											<div class="catalog__text">2713</div>
										</td>
										<td>
											<div class="catalog__text catalog__text--red">Hidden</div>
										</td>
										<td>
											<div class="catalog__text">03.02.2023</div>
										</td>
										<td>
											<div class="catalog__btns">
												<button type="button" data-bs-toggle="modal" class="catalog__btn catalog__btn--banned"
													data-bs-target="#modal-status">
													<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
														<path
															d="M12,13a1,1,0,0,0-1,1v3a1,1,0,0,0,2,0V14A1,1,0,0,0,12,13Zm5-4V7A5,5,0,0,0,7,7V9a3,3,0,0,0-3,3v7a3,3,0,0,0,3,3H17a3,3,0,0,0,3-3V12A3,3,0,0,0,17,9ZM9,7a3,3,0,0,1,6,0V9H9Zm9,12a1,1,0,0,1-1,1H7a1,1,0,0,1-1-1V12a1,1,0,0,1,1-1H17a1,1,0,0,1,1,1Z" />
													</svg>
												</button>
												<NuxtLink to="#" class="catalog__btn catalog__btn--view">
													<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
														<path
															d="M21.92,11.6C19.9,6.91,16.1,4,12,4S4.1,6.91,2.08,11.6a1,1,0,0,0,0,.8C4.1,17.09,7.9,20,12,20s7.9-2.91,9.92-7.6A1,1,0,0,0,21.92,11.6ZM12,18c-3.17,0-6.17-2.29-7.9-6C5.83,8.29,8.83,6,12,6s6.17,2.29,7.9,6C18.17,15.71,15.17,18,12,18ZM12,8a4,4,0,1,0,4,4A4,4,0,0,0,12,8Zm0,6a2,2,0,1,1,2-2A2,2,0,0,1,12,14Z" />
													</svg>
												</NuxtLink>
												<NuxtLink to="add-item" class="catalog__btn catalog__btn--edit">
													<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
														<path
															d="M5,18H9.24a1,1,0,0,0,.71-.29l6.92-6.93h0L19.71,8a1,1,0,0,0,0-1.42L15.47,2.29a1,1,0,0,0-1.42,0L11.23,5.12h0L4.29,12.05a1,1,0,0,0-.29.71V17A1,1,0,0,0,5,18ZM14.76,4.41l2.83,2.83L16.17,8.66,13.34,5.83ZM6,13.17l5.93-5.93,2.83,2.83L8.83,16H6ZM21,20H3a1,1,0,0,0,0,2H21a1,1,0,0,0,0-2Z" />
													</svg>
												</NuxtLink>
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
											<div class="catalog__text">
												<NuxtLink to="#">Savage Beauty</NuxtLink>
											</div>
										</td>
										<td>
											<div class="catalog__text catalog__text--rate">6.3</div>
										</td>
										<td>
											<div class="catalog__text">Cartoon</div>
										</td>
										<td>
											<div class="catalog__text">901</div>
										</td>
										<td>
											<div class="catalog__text catalog__text--green">Visible</div>
										</td>
										<td>
											<div class="catalog__text">03.02.2023</div>
										</td>
										<td>
											<div class="catalog__btns">
												<button type="button" data-bs-toggle="modal" class="catalog__btn catalog__btn--banned"
													data-bs-target="#modal-status">
													<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
														<path
															d="M12,13a1,1,0,0,0-1,1v3a1,1,0,0,0,2,0V14A1,1,0,0,0,12,13Zm5-4V7A5,5,0,0,0,7,7V9a3,3,0,0,0-3,3v7a3,3,0,0,0,3,3H17a3,3,0,0,0,3-3V12A3,3,0,0,0,17,9ZM9,7a3,3,0,0,1,6,0V9H9Zm9,12a1,1,0,0,1-1,1H7a1,1,0,0,1-1-1V12a1,1,0,0,1,1-1H17a1,1,0,0,1,1,1Z" />
													</svg>
												</button>
												<NuxtLink to="#" class="catalog__btn catalog__btn--view">
													<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
														<path
															d="M21.92,11.6C19.9,6.91,16.1,4,12,4S4.1,6.91,2.08,11.6a1,1,0,0,0,0,.8C4.1,17.09,7.9,20,12,20s7.9-2.91,9.92-7.6A1,1,0,0,0,21.92,11.6ZM12,18c-3.17,0-6.17-2.29-7.9-6C5.83,8.29,8.83,6,12,6s6.17,2.29,7.9,6C18.17,15.71,15.17,18,12,18ZM12,8a4,4,0,1,0,4,4A4,4,0,0,0,12,8Zm0,6a2,2,0,1,1,2-2A2,2,0,0,1,12,14Z" />
													</svg>
												</NuxtLink>
												<NuxtLink to="add-item" class="catalog__btn catalog__btn--edit">
													<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
														<path
															d="M5,18H9.24a1,1,0,0,0,.71-.29l6.92-6.93h0L19.71,8a1,1,0,0,0,0-1.42L15.47,2.29a1,1,0,0,0-1.42,0L11.23,5.12h0L4.29,12.05a1,1,0,0,0-.29.71V17A1,1,0,0,0,5,18ZM14.76,4.41l2.83,2.83L16.17,8.66,13.34,5.83ZM6,13.17l5.93-5.93,2.83,2.83L8.83,16H6ZM21,20H3a1,1,0,0,0,0,2H21a1,1,0,0,0,0-2Z" />
													</svg>
												</NuxtLink>
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
											<div class="catalog__text">
												<NuxtLink to="#">Endless Horizon</NuxtLink>
											</div>
										</td>
										<td>
											<div class="catalog__text catalog__text--rate">8.4</div>
										</td>
										<td>
											<div class="catalog__text">Movie</div>
										</td>
										<td>
											<div class="catalog__text">8430</div>
										</td>
										<td>
											<div class="catalog__text catalog__text--green">Visible</div>
										</td>
										<td>
											<div class="catalog__text">02.02.2023</div>
										</td>
										<td>
											<div class="catalog__btns">
												<button type="button" data-bs-toggle="modal" class="catalog__btn catalog__btn--banned"
													data-bs-target="#modal-status">
													<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
														<path
															d="M12,13a1,1,0,0,0-1,1v3a1,1,0,0,0,2,0V14A1,1,0,0,0,12,13Zm5-4V7A5,5,0,0,0,7,7V9a3,3,0,0,0-3,3v7a3,3,0,0,0,3,3H17a3,3,0,0,0,3-3V12A3,3,0,0,0,17,9ZM9,7a3,3,0,0,1,6,0V9H9Zm9,12a1,1,0,0,1-1,1H7a1,1,0,0,1-1-1V12a1,1,0,0,1,1-1H17a1,1,0,0,1,1,1Z" />
													</svg>
												</button>
												<NuxtLink to="#" class="catalog__btn catalog__btn--view">
													<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
														<path
															d="M21.92,11.6C19.9,6.91,16.1,4,12,4S4.1,6.91,2.08,11.6a1,1,0,0,0,0,.8C4.1,17.09,7.9,20,12,20s7.9-2.91,9.92-7.6A1,1,0,0,0,21.92,11.6ZM12,18c-3.17,0-6.17-2.29-7.9-6C5.83,8.29,8.83,6,12,6s6.17,2.29,7.9,6C18.17,15.71,15.17,18,12,18ZM12,8a4,4,0,1,0,4,4A4,4,0,0,0,12,8Zm0,6a2,2,0,1,1,2-2A2,2,0,0,1,12,14Z" />
													</svg>
												</NuxtLink>
												<NuxtLink to="add-item" class="catalog__btn catalog__btn--edit">
													<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
														<path
															d="M5,18H9.24a1,1,0,0,0,.71-.29l6.92-6.93h0L19.71,8a1,1,0,0,0,0-1.42L15.47,2.29a1,1,0,0,0-1.42,0L11.23,5.12h0L4.29,12.05a1,1,0,0,0-.29.71V17A1,1,0,0,0,5,18ZM14.76,4.41l2.83,2.83L16.17,8.66,13.34,5.83ZM6,13.17l5.93-5.93,2.83,2.83L8.83,16H6ZM21,20H3a1,1,0,0,0,0,2H21a1,1,0,0,0,0-2Z" />
													</svg>
												</NuxtLink>
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
											<div class="catalog__text">
												<NuxtLink to="#">The Lost Key</NuxtLink>
											</div>
										</td>
										<td>
											<div class="catalog__text catalog__text--rate">7.9</div>
										</td>
										<td>
											<div class="catalog__text">Movie</div>
										</td>
										<td>
											<div class="catalog__text">818</div>
										</td>
										<td>
											<div class="catalog__text catalog__text--green">Visible</div>
										</td>
										<td>
											<div class="catalog__text">02.02.2023</div>
										</td>
										<td>
											<div class="catalog__btns">
												<button type="button" data-bs-toggle="modal" class="catalog__btn catalog__btn--banned"
													data-bs-target="#modal-status">
													<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
														<path
															d="M12,13a1,1,0,0,0-1,1v3a1,1,0,0,0,2,0V14A1,1,0,0,0,12,13Zm5-4V7A5,5,0,0,0,7,7V9a3,3,0,0,0-3,3v7a3,3,0,0,0,3,3H17a3,3,0,0,0,3-3V12A3,3,0,0,0,17,9ZM9,7a3,3,0,0,1,6,0V9H9Zm9,12a1,1,0,0,1-1,1H7a1,1,0,0,1-1-1V12a1,1,0,0,1,1-1H17a1,1,0,0,1,1,1Z" />
													</svg>
												</button>
												<NuxtLink to="#" class="catalog__btn catalog__btn--view">
													<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
														<path
															d="M21.92,11.6C19.9,6.91,16.1,4,12,4S4.1,6.91,2.08,11.6a1,1,0,0,0,0,.8C4.1,17.09,7.9,20,12,20s7.9-2.91,9.92-7.6A1,1,0,0,0,21.92,11.6ZM12,18c-3.17,0-6.17-2.29-7.9-6C5.83,8.29,8.83,6,12,6s6.17,2.29,7.9,6C18.17,15.71,15.17,18,12,18ZM12,8a4,4,0,1,0,4,4A4,4,0,0,0,12,8Zm0,6a2,2,0,1,1,2-2A2,2,0,0,1,12,14Z" />
													</svg>
												</NuxtLink>
												<NuxtLink to="add-item" class="catalog__btn catalog__btn--edit">
													<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
														<path
															d="M5,18H9.24a1,1,0,0,0,.71-.29l6.92-6.93h0L19.71,8a1,1,0,0,0,0-1.42L15.47,2.29a1,1,0,0,0-1.42,0L11.23,5.12h0L4.29,12.05a1,1,0,0,0-.29.71V17A1,1,0,0,0,5,18ZM14.76,4.41l2.83,2.83L16.17,8.66,13.34,5.83ZM6,13.17l5.93-5.93,2.83,2.83L8.83,16H6ZM21,20H3a1,1,0,0,0,0,2H21a1,1,0,0,0,0-2Z" />
													</svg>
												</NuxtLink>
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
											<div class="catalog__text">
												<NuxtLink to="#">Echoes of Yesterday</NuxtLink>
											</div>
										</td>
										<td>
											<div class="catalog__text catalog__text--rate">7.1</div>
										</td>
										<td>
											<div class="catalog__text">Anime</div>
										</td>
										<td>
											<div class="catalog__text">1046</div>
										</td>
										<td>
											<div class="catalog__text catalog__text--red">Hidden</div>
										</td>
										<td>
											<div class="catalog__text">01.02.2023</div>
										</td>
										<td>
											<div class="catalog__btns">
												<button type="button" data-bs-toggle="modal" class="catalog__btn catalog__btn--banned"
													data-bs-target="#modal-status">
													<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
														<path
															d="M12,13a1,1,0,0,0-1,1v3a1,1,0,0,0,2,0V14A1,1,0,0,0,12,13Zm5-4V7A5,5,0,0,0,7,7V9a3,3,0,0,0-3,3v7a3,3,0,0,0,3,3H17a3,3,0,0,0,3-3V12A3,3,0,0,0,17,9ZM9,7a3,3,0,0,1,6,0V9H9Zm9,12a1,1,0,0,1-1,1H7a1,1,0,0,1-1-1V12a1,1,0,0,1,1-1H17a1,1,0,0,1,1,1Z" />
													</svg>
												</button>
												<NuxtLink to="#" class="catalog__btn catalog__btn--view">
													<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
														<path
															d="M21.92,11.6C19.9,6.91,16.1,4,12,4S4.1,6.91,2.08,11.6a1,1,0,0,0,0,.8C4.1,17.09,7.9,20,12,20s7.9-2.91,9.92-7.6A1,1,0,0,0,21.92,11.6ZM12,18c-3.17,0-6.17-2.29-7.9-6C5.83,8.29,8.83,6,12,6s6.17,2.29,7.9,6C18.17,15.71,15.17,18,12,18ZM12,8a4,4,0,1,0,4,4A4,4,0,0,0,12,8Zm0,6a2,2,0,1,1,2-2A2,2,0,0,1,12,14Z" />
													</svg>
												</NuxtLink>
												<NuxtLink to="add-item" class="catalog__btn catalog__btn--edit">
													<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
														<path
															d="M5,18H9.24a1,1,0,0,0,.71-.29l6.92-6.93h0L19.71,8a1,1,0,0,0,0-1.42L15.47,2.29a1,1,0,0,0-1.42,0L11.23,5.12h0L4.29,12.05a1,1,0,0,0-.29.71V17A1,1,0,0,0,5,18ZM14.76,4.41l2.83,2.83L16.17,8.66,13.34,5.83ZM6,13.17l5.93-5.93,2.83,2.83L8.83,16H6ZM21,20H3a1,1,0,0,0,0,2H21a1,1,0,0,0,0-2Z" />
													</svg>
												</NuxtLink>
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
					<!-- end items -->

					<!-- paginator -->
					<div class="col-12">
						<div class="main__paginator">
							<!-- amount -->
							<span class="main__paginator-pages">{{ this.media.length }} tadan 10 tasi</span>
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
									<button @click="count_minus()"><svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24"
											viewBox="0 0 24 24">
											<path
												d="M8.5,12.8l5.7,5.6c0.4,0.4,1,0.4,1.4,0c0,0,0,0,0,0c0.4-0.4,0.4-1,0-1.4l-4.9-5l4.9-5c0.4-0.4,0.4-1,0-1.4c-0.2-0.2-0.4-0.3-0.7-0.3c-0.3,0-0.5,0.1-0.7,0.3l-5.7,5.6C8.1,11.7,8.1,12.3,8.5,12.8C8.5,12.7,8.5,12.7,8.5,12.8z" />
										</svg></button>
								</li>
								<div v-for="item in length_page" :key="item">
									<li v-if="item != select_page" class="paginator__item">
										<button @click="get_page(item)"
											v-if="item == 1 || item + 1 == select_page || item - 1 == select_page">{{ item
											}}</button>
										<button @click="get_page(item)" v-else-if="item == length_page.length">{{ item }}</button>
										<span @click="get_page(item)" v-else-if="item - select_page == 2">...</span>
										<span @click="get_page(item)" v-else-if="select_page - item == 2">...</span>

									</li>
									<li v-else class="paginator__item paginator__item--active">
										<button @click="get_page(item)">{{ item }}</button>
									</li>
								</div>


								<li class="paginator__item"></li>

								<li class="paginator__item paginator__item--next">
									<button @click="count_plus()"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
											<path
												d="M15.54,11.29,9.88,5.64a1,1,0,0,0-1.42,0,1,1,0,0,0,0,1.41l4.95,5L8.46,17a1,1,0,0,0,0,1.41,1,1,0,0,0,.71.3,1,1,0,0,0,.71-.3l5.66-5.65A1,1,0,0,0,15.54,11.29Z" />
										</svg></button>
								</li>
							</ul>
						</div>
					</div>
					<!-- end paginator -->
				</div>
			</div>
		</main>
		<!-- end main content -->

		<!-- status modal -->
		<div class="modal fade" id="modal-status" tabindex="-1" aria-labelledby="modal-status" aria-hidden="true">
			<div class="modal-dialog modal-dialog-centered">
				<div class="modal-content">
					<div class="modal__content">
						<form action="#" class="modal__form">
							<h4 class="modal__title">Holat o'zgarishi</h4>

							<p class="modal__text">Holatni darhol o'zgartirishga ishonchingiz komilmi?</p>

							<div class="modal__btns">
								<button @click="bannedCinema()" class="modal__btn modal__btn--apply"
									type="button"><span>O'zgartirish</span></button>
								<button class="modal__btn modal__btn--dismiss" type="button" data-bs-dismiss="modal"
									aria-label="Close"><span>Qoldirish</span></button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
		<!-- end status modal -->

		<!-- delete modal -->
		<div class="modal fade" id="modal-delete" tabindex="-1" aria-labelledby="modal-delete" aria-hidden="true">
			<div class="modal-dialog modal-dialog-centered">
				<div class="modal-content">
					<div class="modal__content">
						<form action="#" class="modal__form">
							<h4 class="modal__title">Item delete</h4>

							<p class="modal__text">Are you sure to permanently delete this item?</p>

							<div class="modal__btns">
								<button @click="cinemaDelete()" class="modal__btn modal__btn--apply"
									type="button"><span>Delete</span></button>
								<button class="modal__btn modal__btn--dismiss" type="button" data-bs-dismiss="modal"
									aria-label="Close"><span>Dismiss</span></button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
		<!-- end delete modal -->
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
</template>

<script>
import axios from 'axios';

export default {
	name: 'IndexPage',
	data() {
		return {
			media: [],
			Id: "",
			Looking: "",
			select_page: 1,
			page_card: 10,
			length_page: []
		};
	},
	async mounted() {
		try {
			const kino = await axios.get('https://api.uzdub.uz/api/v1/cinema')
			for (let i = 0; i < kino.data.length; i++) {
				if (kino.data[i].appearance == 1) {
					kino.data[i].category = "Movie"
				} else {
					if (kino.data[i].appearance == 2) {
						kino.data[i].category = "Series"
					} else {
						if (kino.data[i].appearance == 3) {
							kino.data[i].category = "TV Series"
						} else {
							if (kino.data[i].appearance == 4) {
								kino.data[i].category = "Cartoon"
							}
						}
					}
				}
			}
			this.media = kino.data
			var for_w = this.media.length / this.page_card
			var daad = []
			for (let i = 0; i < for_w; i++) {
				daad.push(i + 1)
			}
			this.length_page = daad
		} catch (error) {
			console.error(error);
		}
	},
	methods: {
		ReytingFilter() {
			if (document.querySelector("#filter__sort").value == 0) {
				this.media.sort((a, b) => (b.time_create).slice(0, 4) - (a.time_create).slice(0, 4) || (b.time_create).slice(5, 7) - (a.time_create).slice(5, 7) || (b.time_create).slice(8, 10) - (a.time_create).slice(8, 10));
				this.media.map(item => item.time_create).join(', ');
			}
			if (document.querySelector("#filter__sort").value == 1) {
				this.media.sort((a, b) => b.mark - a.mark);
				this.media.map(item => item.mark).join(', ');
			}
			if (document.querySelector("#filter__sort").value == 2) {
				this.media.sort((a, b) => b.more_loking - a.more_loking);
				this.media.map(item => item.more_loking).join(', ');
			}
			// if(document.querySelector("#filter__sort").value==0){
			// this.media.sort((a, b) => (b.time_create).slice(0,10)-(a.time_create).slice(0,10));
			// this.media.map(item => (item.time_create).slice(0,10)).join(', ');
			// }
		},
		bannedCinema1(id, cinema) {
			this.Id = id
			this.Looking = cinema
		},
		bannedCinema() {
			var formData = new FormData()
			formData.append("looking", this.Looking ? false : true)
			axios.put(`https://api.uzdub.uz/api/v1/cinema/look/${this.Id}`, formData).then(res => {
				document.querySelector("#alert_modal").style = "display:block"
				document.querySelector("#alert_text").innerHTML = "Kino holati o'zgartirildi"
				setTimeout(() => {
					window.location.reload()
				}, 1000)
			}).catch(err => {
				document.querySelector("#alert_modal").style = "display:block"
				document.querySelector("#alert_text").innerHTML = "Kino holati o'zgartirilmadi"
			})
		},
		cinemaDelete() {
			axios.delete(`https://api.uzdub.uz/api/v1/cinema/${this.Id}`).then(res => {
				axios.get(`https://api.uzdub.uz/api/v1/carousel`).then(res=>{
                   const Filter=res.data.filter(item=>item.id==this.Id)
				   axios.delete(`https://api.uzdub.uz/api/v1/carousel/${Filter[0].id}`).then(res1=>{

				   })
				})
				document.querySelector("#alert_modal").style = "display:block"
				document.querySelector("#alert_text").innerHTML = "Kino o'chirildi"
				setTimeout(() => {
					window.location.reload()
				}, 1000)
			}).catch(err => {
				document.querySelector("#alert_modal").style = "display:block"
				document.querySelector("#alert_text").innerHTML = "Kino o'chirilmadi"
			})
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
		CinemaSearch() {
			axios.get('https://api.uzdub.uz/api/v1/cinema').then(kino => {
				for (let i = 0; i < kino.data.length; i++) {
					if (kino.data[i].appearance == 1) {
						kino.data[i].category = "Movie"
					} else {
						if (kino.data[i].appearance == 2) {
							kino.data[i].category = "Series"
						} else {
							if (kino.data[i].appearance == 3) {
								kino.data[i].category = "TV Series"
							} else {
								if (kino.data[i].appearance == 4) {
									kino.data[i].category = "Cartoon"
								}
							}
						}
					}
				}
				const a = kino.data.filter(item => ((item.title).toLowerCase()).includes((document.querySelector("#cinemaSearch").value).toLowerCase()))
				this.media = a
			})
		},
		cinemaId(id) {
			sessionStorage.setItem("cinemaId", id)
			window.location = "add-item"
		},
		AlertNone() {
			document.querySelector("#alert_modal").style = "display:none"
		}

	}
}
</script>