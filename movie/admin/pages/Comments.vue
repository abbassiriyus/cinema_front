<template>
    <div>
        <!-- main content -->
	<main class="main">
		<div class="container-fluid">
			<div class="row">
				<!-- main title -->
				<div class="col-12">
					<div class="main__title">
						<h2>Izohlar</h2>

						<span class="main__title-stat">Jami {{ this.izoh.length }}</span>

						<div class="main__title-wrap">
							<select @click="FilterReyting()" class="filter__select" name="sort" id="filter__sort">
								<option value="0">Yaratilgan sana</option>
								<option value="1">Reyting</option>
							</select>

							<!-- search -->
							<div action="" class="main__title-form">
								<input @input="CommentSearch()" id="commentSearch" type="text" placeholder="Kalit so'z..">
								<button @click="CommentSearch()" type="button">
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
										<path
											d="M21.71,20.29,18,16.61A9,9,0,1,0,16.61,18l3.68,3.68a1,1,0,0,0,1.42,0A1,1,0,0,0,21.71,20.29ZM11,18a7,7,0,1,1,7-7A7,7,0,0,1,11,18Z">
										</path>
									</svg>
								</button>
							</div>
							<!-- end search -->
						</div>
					</div>
				</div>
				<!-- end main title -->

				<!-- comments -->
				<div class="col-12">
					<div class="catalog catalog--1">
						<table class="catalog__table">
							<thead>
								<tr>
									<th>ID</th>
									<th>ANIME</th>
									<th>MUALLIF</th>
									<th>MATN</th>
									<th>LIKE / DISLIKE</th>
									<th>YARATILGAN KUNI</th>
									<th>HARAKATLAR</th>
								</tr>
							</thead>

							<tbody>
								<tr v-for="(item,index) in izoh" ::key="item.id" v-if="index<select_page*page_card && index>=(select_page-1)*page_card">
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
				<!-- end comments -->

				<!-- paginator -->
				<div class="col-12">
					<div class="main__paginator">
						<!-- amount -->
						<span class="main__paginator-pages">{{ this.izoh.length }} tadan 10 tasi</span>
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

	<!-- view modal -->
	<div v-for="item in izohModal" class="modal fade" id="modal-view" tabindex="-1" aria-labelledby="modal-view" aria-hidden="true">
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
							<button @click="CommentDelete()" class="modal__btn modal__btn--apply" type="button"><span>OʻCHIRISH</span></button>
							<button class="modal__btn modal__btn--dismiss" type="button" data-bs-dismiss="modal"
								aria-label="Close"><span>QOLDIRISH</span></button>
						</div>
					</form>
				</div>
			</div>
		</div>
	</div>
	<!-- end delete modal -->

	<div  id="alert_modal" class="toast align-items-center" role="alert" aria-live="assertive" aria-atomic="false">
  					<div class="d-flex">
    					<div id="alert_text" class="toast-body">
      						Hello, world! This is a toast message.
    					</div>
    					<button type="button" class="btn-close me-2 m-auto" data-bs-dismiss="toast" @click="AlertNone()" aria-label="Close"></button>
                 </div>
        
	</div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'CommentsPage',
	data(){
		return{
			izoh:[],
			izohModal:[],
			deleteId:0,
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
		document.querySelector(".filter__select").addEventListener("change",this.FilterReyting)
        }
		try{
         axios.get('https://api.uzdub.uz/api/v1/comment').then(res=>{
            axios.get('https://api.uzdub.uz/api/v1/cinema').then(res1=>{
				axios.get('https://api.uzdub.uz/users').then(res2=>{
                    axios.get('https://api.uzdub.uz/api/v1/comment_mark').then(res3=>{
					for (let i = 0; i < res.data.length; i++) {
						for (let j = 0; j < res1.data.length; j++) {
							if(res.data[i].cinema_id==res1.data[j].id){
								res.data[i].cinemaName=res1.data[j].title
							}
						}
				  	}
				  	for (let i = 0; i < res.data.length; i++) {
						for (let j = 0; j < res2.data.length; j++) {
					  		if(res.data[i].creator==res2.data[j].id){
								res.data[i].creatorName=res2.data[j].name
					  		}
						}
						res.data[i].commentLike=0
						res.data[i].commentFalse=0
						for (let j = 0; j < res3.data.length; j++) {
								if(res.data[i].id==res3.data[j].comment_id){
                                   if(res3.data[j].dislike){
									res.data[i].commentLike=res.data[i].commentLike+1
								   }else{
									res.data[i].commentFalse=res.data[i].commentFalse+1
								   }
								}
						}
				  	}
				  	this.izoh=res.data
					var for_w=this.izoh.length/this.page_card
            		var daad=[]
            		for (let i = 0; i < for_w; i++) {
					daad.push(i+1)
					}
					this.length_page=daad
					})
				})
			})
		 })
		}catch(err){
			console.log(err);
		}
    },
	methods:{
		CommentSearch(){
			axios.get('https://api.uzdub.uz/api/v1/comment').then(res=>{
            axios.get('https://api.uzdub.uz/api/v1/cinema').then(res1=>{
				axios.get('https://api.uzdub.uz/users').then(res2=>{
                    axios.get('https://api.uzdub.uz/api/v1/comment_mark').then(res3=>{
					for (let i = 0; i < res.data.length; i++) {
						for (let j = 0; j < res1.data.length; j++) {
							if(res.data[i].cinema_id==res1.data[j].id){
								res.data[i].cinemaName=res1.data[j].title
							}
						}
				  	}
				  	for (let i = 0; i < res.data.length; i++) {
						for (let j = 0; j < res2.data.length; j++) {
					  		if(res.data[i].creator==res2.data[j].id){
								res.data[i].creatorName=res2.data[j].name
					  		}
						}
						res.data[i].commentLike=0
						res.data[i].commentFalse=0
						for (let j = 0; j < res3.data.length; j++) {
								if(res.data[i].id==res3.data[j].comment_id){
                                   if(res3.data[j].dislike){
									res.data[i].commentLike=res.data[i].commentLike+1
								   }else{
									res.data[i].commentFalse=res.data[i].commentFalse+1
								   }
								}
						}
				  	}
					const a=res.data.filter(item=>((item.creatorName).toLowerCase()).includes((document.querySelector("#commentSearch").value).toLowerCase()))
			        this.izoh=a
					})
				})
			})
		 })
		},
		WiewModal(id){
        const Filter=this.izoh.filter(item=>item.id==id)
        this.izohModal=Filter
		},
		Idfunc(id){
            this.deleteId=id
		},
		CommentDelete(){
           axios.delete(`https://api.uzdub.uz/api/v1/comment/${this.deleteId}`).then(res=>{
			document.querySelector("#alert_modal").style="display:block"
			document.querySelector("#alert_text").innerHTML="Ma'lumot o'chirildi"
			setTimeout(()=>{
				window.location.reload()
			},1000)
		   }).catch(err=>{
			document.querySelector("#alert_modal").style="display:block"
			document.querySelector("#alert_text").innerHTML="Ma'lumot o'chirilmadi"
			setTimeout(()=>{
				window.location.reload()
			},1000)
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
        this.izoh.sort((a, b) =>(b.time_create).slice(0,4)-(a.time_create).slice(0,4) || (b.time_create).slice(5,7)-(a.time_create).slice(5,7) || (b.time_create).slice(8,10)-(a.time_create).slice(8,10));
		this.izoh.map(item => (b.time_create).slice(0,4)-(a.time_create).slice(0,4) || (b.time_create).slice(5,7)-(a.time_create).slice(5,7) || (b.time_create).slice(8,10)-(a.time_create).slice(8,10)).join(', ');
		}
		if(document.querySelector(".filter__select").value==1){
        this.izoh.sort((a, b) => b.commentLike-a.commentLike || b.commentFalse-a.commentFalse);
		this.izoh.map(item => item.commentLike || item.commentFalse).join(', ');
		}
		},
		AlertNone(){
			document.querySelector("#alert_modal").style="display:none"
		}
	}
}
</script>