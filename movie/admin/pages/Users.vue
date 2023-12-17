<template>
    <div>
        <!-- main content -->
	<main class="main">
		<div class="container-fluid">
			<div class="row">
				<!-- main title -->
				<div class="col-12">
					<div class="main__title">
						<h2>Foydalanuvchilar</h2>

						<span class="main__title-stat">Jami {{ this.user.length }}</span>

						<div class="main__title-wrap">
							<select class="filter__select" name="sort" id="filter__sort">
								<option value="0">Yaratilgan sana</option>
								<option value="1">Narxlar rejasi</option>
								<option value="2">Holat</option>
							</select>

							<!-- search -->
							<form action="#" class="main__title-form">
								<input @input="UserSearch()" id="userSearch" type="text" placeholder="Foydalanuvchini toping..">
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

				<!-- users -->
				<div class="col-12">
					<div class="catalog catalog--1">
						<table class="catalog__table">
							<thead>
								<tr>
									<th>ID</th>
									<th>ASOSIY MA'LUMOT</th>
									<th>USERNAME</th>
									<th>NARXLAR REJASI</th>
									<th>IZOHLAR</th>
									<th>SHARHLAR</th>
									<th>HOLAT</th>
									<th>YARATILGAN KUNI</th>
									<th>TAHRIRLASH</th>
								</tr>
							</thead>

							<tbody>
								<tr v-for="(item,index) in user" v-if="index<select_page*page_card && index>=(select_page-1)*page_card">
									<td>
										<div class="catalog__text">{{ item.id }}</div>
									</td>
									<td>
										<div class="catalog__user">
											<div class="catalog__avatar">
												<img src="img/user.svg" alt="">
											</div>
											<div class="catalog__meta">
												<h3>{{ item.name }}</h3>
												<span>{{ item.email }}</span>
											</div>
										</div>
									</td>
									<td>
										<div class="catalog__text">{{ item.name }}</div>
									</td>
									<td>
										<div class="catalog__text">{{ item.pay?"Premium":"Free" }}</div>
									</td>
									<td>
										<div class="catalog__text">{{ (item.commentLength).length }}</div>
									</td>
									<td>
										<div class="catalog__text">{{ (item.sharhLength).length }}</div>
									</td>
									<td v-if="item.pan">
										<div class="catalog__text catalog__text--green">Approved</div>
									</td>
									<td v-if="!item.pan">
										<div class="catalog__text catalog__text--red">Banned</div>
									</td>
									<td>
										<div class="catalog__text">{{ (item.time_create).slice(0,10) }}</div>
									</td>
									<td>
										<div class="catalog__btns">
											<button @click="Idfunc(item.id,item.pan)" type="button" data-bs-toggle="modal" class="catalog__btn catalog__btn--banned"
												data-bs-target="#modal-status">
												<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
													<path
														d="M12,13a1,1,0,0,0-1,1v3a1,1,0,0,0,2,0V14A1,1,0,0,0,12,13Zm5-4V7A5,5,0,0,0,7,7V9a3,3,0,0,0-3,3v7a3,3,0,0,0,3,3H17a3,3,0,0,0,3-3V12A3,3,0,0,0,17,9ZM9,7a3,3,0,0,1,6,0V9H9Zm9,12a1,1,0,0,1-1,1H7a1,1,0,0,1-1-1V12a1,1,0,0,1,1-1H17a1,1,0,0,1,1,1Z" />
												</svg>
											</button>
											<NuxtLink  to="" class="catalog__btn catalog__btn--edit">
												<svg @click="IdfuncEdit(item.id)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
													<path
														d="M5,18H9.24a1,1,0,0,0,.71-.29l6.92-6.93h0L19.71,8a1,1,0,0,0,0-1.42L15.47,2.29a1,1,0,0,0-1.42,0L11.23,5.12h0L4.29,12.05a1,1,0,0,0-.29.71V17A1,1,0,0,0,5,18ZM14.76,4.41l2.83,2.83L16.17,8.66,13.34,5.83ZM6,13.17l5.93-5.93,2.83,2.83L8.83,16H6ZM21,20H3a1,1,0,0,0,0,2H21a1,1,0,0,0,0-2Z" />
												</svg>
											</NuxtLink>
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
										<div class="catalog__user">
											<div class="catalog__avatar">
												<img src="img/user.svg" alt="">
											</div>
											<div class="catalog__meta">
												<h3>Gene Graham</h3>
												<span>email@email.com</span>
											</div>
										</div>
									</td>
									<td>
										<div class="catalog__text">Username</div>
									</td>
									<td>
										<div class="catalog__text">Free</div>
									</td>
									<td>
										<div class="catalog__text">1</div>
									</td>
									<td>
										<div class="catalog__text">15</div>
									</td>
									<td>
										<div class="catalog__text catalog__text--green">Approved</div>
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
											<NuxtLink to="edit-user" class="catalog__btn catalog__btn--edit">
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
										<div class="catalog__user">
											<div class="catalog__avatar">
												<img src="img/user.svg" alt="">
											</div>
											<div class="catalog__meta">
												<h3>Rosa Lee</h3>
												<span>email@email.com</span>
											</div>
										</div>
									</td>
									<td>
										<div class="catalog__text">Username</div>
									</td>
									<td>
										<div class="catalog__text">Premium</div>
									</td>
									<td>
										<div class="catalog__text">6</div>
									</td>
									<td>
										<div class="catalog__text">6</div>
									</td>
									<td>
										<div class="catalog__text catalog__text--green">Approved</div>
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
											<NuxtLink to="edit-user" class="catalog__btn catalog__btn--edit">
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
										<div class="catalog__user">
											<div class="catalog__avatar">
												<img src="img/user.svg" alt="">
											</div>
											<div class="catalog__meta">
												<h3>Matt Jones</h3>
												<span>email@email.com</span>
											</div>
										</div>
									</td>
									<td>
										<div class="catalog__text">Username</div>
									</td>
									<td>
										<div class="catalog__text">Free</div>
									</td>
									<td>
										<div class="catalog__text">11</div>
									</td>
									<td>
										<div class="catalog__text">15</div>
									</td>
									<td>
										<div class="catalog__text catalog__text--red">Banned</div>
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
											<NuxtLink to="edit-user" class="catalog__btn catalog__btn--edit">
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
										<div class="catalog__user">
											<div class="catalog__avatar">
												<img src="img/user.svg" alt="">
											</div>
											<div class="catalog__meta">
												<h3>Brian Cranston</h3>
												<span>email@email.com</span>
											</div>
										</div>
									</td>
									<td>
										<div class="catalog__text">Username</div>
									</td>
									<td>
										<div class="catalog__text">Basic</div>
									</td>
									<td>
										<div class="catalog__text">0</div>
									</td>
									<td>
										<div class="catalog__text">0</div>
									</td>
									<td>
										<div class="catalog__text catalog__text--green">Approved</div>
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
											<NuxtLink to="edit-user" class="catalog__btn catalog__btn--edit">
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
										<div class="catalog__user">
											<div class="catalog__avatar">
												<img src="img/user.svg" alt="">
											</div>
											<div class="catalog__meta">
												<h3>Louis Leterrier</h3>
												<span>email@email.com</span>
											</div>
										</div>
									</td>
									<td>
										<div class="catalog__text">Username</div>
									</td>
									<td>
										<div class="catalog__text">Free</div>
									</td>
									<td>
										<div class="catalog__text">2</div>
									</td>
									<td>
										<div class="catalog__text">1</div>
									</td>
									<td>
										<div class="catalog__text catalog__text--green">Approved</div>
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
											<NuxtLink to="edit-user" class="catalog__btn catalog__btn--edit">
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
										<div class="catalog__user">
											<div class="catalog__avatar">
												<img src="img/user.svg" alt="">
											</div>
											<div class="catalog__meta">
												<h3>Son Gun</h3>
												<span>email@email.com</span>
											</div>
										</div>
									</td>
									<td>
										<div class="catalog__text">Username</div>
									</td>
									<td>
										<div class="catalog__text">Cinematic</div>
									</td>
									<td>
										<div class="catalog__text">65</div>
									</td>
									<td>
										<div class="catalog__text">0</div>
									</td>
									<td>
										<div class="catalog__text catalog__text--green">Approved</div>
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
											<NuxtLink to="edit-user" class="catalog__btn catalog__btn--edit">
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
										<div class="catalog__user">
											<div class="catalog__avatar">
												<img src="img/user.svg" alt="">
											</div>
											<div class="catalog__meta">
												<h3>Jordana Brewster</h3>
												<span>email@email.com</span>
											</div>
										</div>
									</td>
									<td>
										<div class="catalog__text">Username</div>
									</td>
									<td>
										<div class="catalog__text">Premium</div>
									</td>
									<td>
										<div class="catalog__text">0</div>
									</td>
									<td>
										<div class="catalog__text">0</div>
									</td>
									<td>
										<div class="catalog__text catalog__text--red">Banned</div>
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
											<NuxtLink to="edit-user" class="catalog__btn catalog__btn--edit">
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
										<div class="catalog__user">
											<div class="catalog__avatar">
												<img src="img/user.svg" alt="">
											</div>
											<div class="catalog__meta">
												<h3>Tyreese Gibson</h3>
												<span>email@email.com</span>
											</div>
										</div>
									</td>
									<td>
										<div class="catalog__text">Username</div>
									</td>
									<td>
										<div class="catalog__text">Premium</div>
									</td>
									<td>
										<div class="catalog__text">13</div>
									</td>
									<td>
										<div class="catalog__text">1</div>
									</td>
									<td>
										<div class="catalog__text catalog__text--green">Approved</div>
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
											<NuxtLink to="edit-user" class="catalog__btn catalog__btn--edit">
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
										<div class="catalog__user">
											<div class="catalog__avatar">
												<img src="img/user.svg" alt="">
											</div>
											<div class="catalog__meta">
												<h3>Charlize Theron</h3>
												<span>email@email.com</span>
											</div>
										</div>
									</td>
									<td>
										<div class="catalog__text">Username</div>
									</td>
									<td>
										<div class="catalog__text">Free</div>
									</td>
									<td>
										<div class="catalog__text">1</div>
									</td>
									<td>
										<div class="catalog__text">15</div>
									</td>
									<td>
										<div class="catalog__text catalog__text--red">Banned</div>
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
											<NuxtLink to="edit-user" class="catalog__btn catalog__btn--edit">
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
				<!-- end users -->

				<!-- paginator -->
				<div class="col-12">
					<div class="main__paginator">
						<!-- amount -->
						<span class="main__paginator-pages">{{ this.user.length }} tadan 10 tasi</span>
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
							<button @click="UserBanned()" class="modal__btn modal__btn--apply" type="button"><span>O'zgartirish</span></button>
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
						<h4 class="modal__title">Foydalanuvchi o'chirish</h4>

						<p class="modal__text">Bu foydalanuvchini butunlay oʻchirib tashlamoqchimisiz?</p>

						<div class="modal__btns">
							<button @click="UserDelete()" class="modal__btn modal__btn--apply" type="button"><span>OʻCHIRISH</span></button>
							<button class="modal__btn modal__btn--dismiss" type="button" data-bs-dismiss="modal"
								aria-label="Close"><span>Qoldirish</span></button>
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
    name: "ReviewsPage",
	data(){
    	return{
			user:[],
			deleteId:0,
			Ban:true,
			select_page:1,
     		page_card:10,
      		length_page:[]
		}
	},
    mounted() {
        if (document.querySelector('#filter__sort')) {
		new SlimSelect({
			select: '#filter__sort',
			settings: {
				showSearch: false,
			}
		});
	    }
		document.querySelector(".filter__select").addEventListener("change",this.FilterReyting)
		try{
        axios.get('https://api.uzdub.uz/users').then(res=>{
			axios.get('https://api.uzdub.uz/api/v1/comment').then(res1=>{
				axios.get('https://api.uzdub.uz/api/v1/sharx').then(res2=>{
				   for (let i = 0; i < res.data.length; i++) {
						res.data[i].commentLength=[]
						for (let j = 0; j < res1.data.length; j++) {
					 		if(res.data[i].id==res1.data[j].creator){
                        	var a=res1.data[j].creator
							res.data[i].commentLength.push(res1.data[j])
					 		}
						}
				   }
				   for (let i = 0; i < res.data.length; i++) {
						res.data[i].sharhLength=[]
						for (let j = 0; j < res2.data.length; j++) {
					 		if(res.data[i].id==res2.data[j].creator){
							res.data[i].sharhLength.push(res2.data[j])
					 		}
						}
				   }
				   this.user=res.data
				   var for_w=this.user.length/this.page_card
            	   var daad=[]
            	   for (let i = 0; i < for_w; i++) {
				   daad.push(i+1)
				   }
				   this.length_page=daad
				})
			})
		})
		}catch(err){
			console.log(err);
		}
    },
	methods:{
		Idfunc(id,ban){
            this.deleteId=id
			this.Ban=ban
		},
		IdfuncEdit(id){
			sessionStorage.setItem("userEdit",id)
			sessionStorage.setItem("userEditBan",this.Ban?1:0)
			window.location="edit-user"
		},
		UserDelete(){
           axios.delete(`https://api.uzdub.uz/users/${this.deleteId}`).then(res=>{
			alert("Ma'lumot o'chirildi")
            window.location.reload()
		   }).catch(err=>{
			alert("Ma'lumot o'chirilmadi")
		   })
		},
		UserBanned(){
		var formdata=new FormData()
		formdata.append("pan",this.Ban?false:true)
        axios.put(`https://api.uzdub.uz/panu/${this.deleteId}`,formdata).then(res=>{
			alert("User holati o'zgartirildi")
			window.location.reload()
		}).catch(err=>{
			alert("User holati o'zgartirilmadi")
		})
		},
		UserSearch(){
			axios.get('https://api.uzdub.uz/users').then(res=>{
			axios.get('https://api.uzdub.uz/api/v1/comment').then(res1=>{
				axios.get('https://api.uzdub.uz/api/v1/sharx').then(res2=>{
				   for (let i = 0; i < res.data.length; i++) {
						res.data[i].commentLength=[]
						for (let j = 0; j < res1.data.length; j++) {
					 		if(res.data[i].id==res1.data[j].creator){
                        	var a=res1.data[j].creator
							res.data[i].commentLength.push(res1.data[j])
					 		}
						}
				   }
				   for (let i = 0; i < res.data.length; i++) {
						res.data[i].sharhLength=[]
						for (let j = 0; j < res2.data.length; j++) {
					 		if(res.data[i].id==res2.data[j].creator){
							res.data[i].sharhLength.push(res2.data[j])
					 		}
						}
				   }
				   
				   const users=res.data.filter(item=>((item.name).toLowerCase()).includes((document.querySelector("#userSearch").value).toLowerCase()))
                   this.user=users
				})
			})
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
		FilterReyting(){
		if(document.querySelector(".filter__select").value==0){
        this.user.sort((a, b) =>(b.time_create).slice(0,4)-(a.time_create).slice(0,4) || (b.time_create).slice(5,7)-(a.time_create).slice(5,7) || (b.time_create).slice(8,10)-(a.time_create).slice(8,10));
		this.user.map(item => (b.time_create).slice(0,4)-(a.time_create).slice(0,4) || (b.time_create).slice(5,7)-(a.time_create).slice(5,7) || (b.time_create).slice(8,10)-(a.time_create).slice(8,10)).join(', ');
		}
		if(document.querySelector(".filter__select").value==1){
        this.user.sort((a, b) => b.pay-a.pay);
		this.user.map(item => item.pay).join(', ');
		}
		if(document.querySelector(".filter__select").value==2){
        this.user.sort((a, b) => b.pan-a.pan);
		this.user.map(item => item.pan).join(', ');
		}
		}

	}
}
</script>