<template>
	<div>
		<!-- header -->
		<header class="header">
			<div class="container">
				<div class="row">
					<div class="col-12">
						<div class="header__content">
							<!-- header logo -->
							<NuxtLink to="/" class="header__logo">
								<img src="/img/logo.svg" alt="logo" />
							</NuxtLink>
							<!-- end header logo -->
							<!-- header categories -->
							<!-- <div class="header__categories">
								<button class="header__categories-btn" type="button" data-bs-toggle="dropdown" aria-expanded="false">
									<span></span>
									<span></span>
								</button>

								<div class="dropdown-menu header__dropdown-menu header__dropdown-menu--categories">
									<ul class="header__categories-list">
										<li>
											<NuxtLink to="catalog">Film</NuxtLink>
										</li>
										<li>
											<NuxtLink to="catalog2">Serial</NuxtLink>
										</li>
										<li>
											<NuxtLink to="catalog">Ongoing</NuxtLink>
										</li>
										<li>
											<NuxtLink to="catalog2">OVA</NuxtLink>
										</li>
									</ul>
								</div>
							</div> -->
							<!-- end header categories -->

							<!-- header nav -->
							<ul class="header__nav">
								<!-- dropdown -->
								<li class="header__nav-item">
									<NuxtLink class="header__nav-link" to="/">Bosh sahifa</NuxtLink>
								</li>
								<!-- end dropdown -->

								<li class="header__nav-item">
									<NuxtLink class="header__nav-link" to="/catalog">Katalog</NuxtLink>
								</li>
								<!-- <li class="header__nav-item">
									<NuxtLink class="header__nav-link" to="pricing">Narxlar</NuxtLink>
								</li> -->
							</ul>
							<!-- end header nav -->

							<!-- header actions -->
							<div class="header__actions">
								<form action="#" class="header__search">
									<input type="text" placeholder="Qidirish" class="search_data" />
									<button type="button" @click="getData()">
										<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
											<path
												d="M21.71,20.29,18,16.61A9,9,0,1,0,16.61,18l3.68,3.68a1,1,0,0,0,1.42,0A1,1,0,0,0,21.71,20.29ZM11,18a7,7,0,1,1,7-7A7,7,0,0,1,11,18Z">
											</path>
										</svg>
									</button>
								</form>
								<div class=""></div>
								<NuxtLink v-if="token" to="profile" class="profile__avatar m-0">
									<img src="img/user.svg" alt="">
								</NuxtLink>
								<NuxtLink v-else to="signin" class="header__sign-in">
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
										<path
											d="M20,12a1,1,0,0,0-1-1H11.41l2.3-2.29a1,1,0,1,0-1.42-1.42l-4,4a1,1,0,0,0-.21.33,1,1,0,0,0,0,.76,1,1,0,0,0,.21.33l4,4a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42L11.41,13H19A1,1,0,0,0,20,12ZM17,2H7A3,3,0,0,0,4,5V19a3,3,0,0,0,3,3H17a3,3,0,0,0,3-3V16a1,1,0,0,0-2,0v3a1,1,0,0,1-1,1H7a1,1,0,0,1-1-1V5A1,1,0,0,1,7,4H17a1,1,0,0,1,1,1V8a1,1,0,0,0,2,0V5A3,3,0,0,0,17,2Z" />
									</svg>
									<span>Kirish</span>
								</NuxtLink>
							</div>
							<!-- end header actions -->

							<!-- header menu btn -->
							<button class="header__btn" type="button">
								<span></span>
								<span></span>
								<span></span>
							</button>
							<!-- end header menu btn -->
						</div>
					</div>
				</div>
			</div>
		</header>
		<!-- end header -->
		<!-- mobile menu -->
		<div class="menu">
			<!-- menu search -->
			<form action="#" class="menu__search">
				<input type="text" placeholder="Qidirish" class="search_data1" />
				<button type="button">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
						<path @click="getData1()"
							d="M21.71,20.29,18,16.61A9,9,0,1,0,16.61,18l3.68,3.68a1,1,0,0,0,1.42,0A1,1,0,0,0,21.71,20.29ZM11,18a7,7,0,1,1,7-7A7,7,0,0,1,11,18Z">
						</path>
					</svg>
				</button>
			</form>
			<!-- end menu search -->

			<!-- menu nav -->
			<ul class="menu__nav">
				<ul class="menu__nav--links">
					<!-- dropdown -->
					<li class="menu__nav-item">
						<NuxtLink class="menu__nav-link" to="/">Bosh sahifa</NuxtLink>
					</li>
					<!-- end dropdown -->
					<li class="menu__nav-item">
						<NuxtLink class="menu__nav-link" to="catalog" aria-expanded="false">Katalog</NuxtLink>
					</li>
					<li class="menu__nav-item">
						<NuxtLink class="menu__nav-link" to="about">Biz haqimizda</NuxtLink>
					</li>
					<!-- <li>
							<NuxtLink to="pricing">Tariflar</NuxtLink>
						</li> -->
					<li class="menu__nav-item">
						<NuxtLink class="menu__nav-link" to="faq">Yordam markazi</NuxtLink>
					</li>
					<li class="menu__nav-item">
						<NuxtLink class="menu__nav-link" to="Contacts">Kontaktlar</NuxtLink>
					</li>
				</ul>
				<li>
					<div class="footer__logo" style="margin-bottom: 10px;">
						<img src="/img/logo.svg" alt="" />
					</div>
					<p class="footer__tagline">
						UZDUB saytida o'zbek <br />
						tilida onlayn anime <br />
						tomosha qiling.
					</p>
					<ul class="footer__social">
						<li>
							<NuxtLink to="/"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
									<path
										d="M15.12,5.32H17V2.14A26.11,26.11,0,0,0,14.26,2C11.54,2,9.68,3.66,9.68,6.7V9.32H6.61v3.56H9.68V22h3.68V12.88h3.06l.46-3.56H13.36V7.05C13.36,6,13.64,5.32,15.12,5.32Z">
									</path>
								</svg></NuxtLink>
						</li>
						<li>
							<NuxtLink to="/"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
									<path
										d="M17.34,5.46h0a1.2,1.2,0,1,0,1.2,1.2A1.2,1.2,0,0,0,17.34,5.46Zm4.6,2.42a7.59,7.59,0,0,0-.46-2.43,4.94,4.94,0,0,0-1.16-1.77,4.7,4.7,0,0,0-1.77-1.15,7.3,7.3,0,0,0-2.43-.47C15.06,2,14.72,2,12,2s-3.06,0-4.12.06a7.3,7.3,0,0,0-2.43.47A4.78,4.78,0,0,0,3.68,3.68,4.7,4.7,0,0,0,2.53,5.45a7.3,7.3,0,0,0-.47,2.43C2,8.94,2,9.28,2,12s0,3.06.06,4.12a7.3,7.3,0,0,0,.47,2.43,4.7,4.7,0,0,0,1.15,1.77,4.78,4.78,0,0,0,1.77,1.15,7.3,7.3,0,0,0,2.43.47C8.94,22,9.28,22,12,22s3.06,0,4.12-.06a7.3,7.3,0,0,0,2.43-.47,4.7,4.7,0,0,0,1.77-1.15,4.85,4.85,0,0,0,1.16-1.77,7.59,7.59,0,0,0,.46-2.43c0-1.06.06-1.4.06-4.12S22,8.94,21.94,7.88ZM20.14,16a5.61,5.61,0,0,1-.34,1.86,3.06,3.06,0,0,1-.75,1.15,3.19,3.19,0,0,1-1.15.75,5.61,5.61,0,0,1-1.86.34c-1,.05-1.37.06-4,.06s-3,0-4-.06A5.73,5.73,0,0,1,6.1,19.8,3.27,3.27,0,0,1,5,19.05a3,3,0,0,1-.74-1.15A5.54,5.54,0,0,1,3.86,16c0-1-.06-1.37-.06-4s0-3,.06-4A5.54,5.54,0,0,1,4.21,6.1,3,3,0,0,1,5,5,3.14,3.14,0,0,1,6.1,4.2,5.73,5.73,0,0,1,8,3.86c1,0,1.37-.06,4-.06s3,0,4,.06a5.61,5.61,0,0,1,1.86.34A3.06,3.06,0,0,1,19.05,5,3.06,3.06,0,0,1,19.8,6.1,5.61,5.61,0,0,1,20.14,8c.05,1,.06,1.37.06,4S20.19,15,20.14,16ZM12,6.87A5.13,5.13,0,1,0,17.14,12,5.12,5.12,0,0,0,12,6.87Zm0,8.46A3.33,3.33,0,1,1,15.33,12,3.33,3.33,0,0,1,12,15.33Z">
									</path>
								</svg></NuxtLink>
						</li>
						<li>
							<NuxtLink to="/"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
									<path
										d="M22.26465,2.42773a2.04837,2.04837,0,0,0-2.07813-.32421L2.26562,9.33887a2.043,2.043,0,0,0,.1045,3.81836l3.625,1.26074,2.0205,6.68164A.998.998,0,0,0,8.134,21.352c.00775.012.01868.02093.02692.03259a.98844.98844,0,0,0,.21143.21576c.02307.01758.04516.03406.06982.04968a.98592.98592,0,0,0,.31073.13611l.01184.001.00671.00287a1.02183,1.02183,0,0,0,.20215.02051c.00653,0,.01233-.00312.0188-.00324a.99255.99255,0,0,0,.30109-.05231c.02258-.00769.04193-.02056.06384-.02984a.9931.9931,0,0,0,.20429-.11456,250.75993,250.75993,0,0,1,.15222-.12818L12.416,18.499l4.03027,3.12207a2.02322,2.02322,0,0,0,1.24121.42676A2.05413,2.05413,0,0,0,19.69531,20.415L22.958,4.39844A2.02966,2.02966,0,0,0,22.26465,2.42773ZM9.37012,14.73633a.99357.99357,0,0,0-.27246.50586l-.30951,1.504-.78406-2.59307,4.06525-2.11695ZM17.67188,20.04l-4.7627-3.68945a1.00134,1.00134,0,0,0-1.35352.11914l-.86541.9552.30584-1.48645,7.083-7.083a.99975.99975,0,0,0-1.16894-1.59375L6.74487,12.55432,3.02051,11.19141,20.999,3.999Z">
									</path>
								</svg></NuxtLink>
						</li>
						<li>
							<NuxtLink to="/"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
									<path
										d="M22,5.8a8.49,8.49,0,0,1-2.36.64,4.13,4.13,0,0,0,1.81-2.27,8.21,8.21,0,0,1-2.61,1,4.1,4.1,0,0,0-7,3.74A11.64,11.64,0,0,1,3.39,4.62a4.16,4.16,0,0,0-.55,2.07A4.09,4.09,0,0,0,4.66,10.1,4.05,4.05,0,0,1,2.8,9.59v.05a4.1,4.1,0,0,0,3.3,4A3.93,3.93,0,0,1,5,13.81a4.9,4.9,0,0,1-.77-.07,4.11,4.11,0,0,0,3.83,2.84A8.22,8.22,0,0,1,3,18.34a7.93,7.93,0,0,1-1-.06,11.57,11.57,0,0,0,6.29,1.85A11.59,11.59,0,0,0,20,8.45c0-.17,0-.35,0-.53A8.43,8.43,0,0,0,22,5.8Z">
									</path>
								</svg></NuxtLink>
						</li>
					</ul>
				</li>
				<!-- 
				<li class="menu__nav-item">
					<NuxtLink to="pricing" class="menu__nav-link">Narxlar</NuxtLink>
				</li> -->
			</ul>
			<!-- end menu nav -->
		</div>
		<!-- end mobile menu -->
	</div>
</template>

<script>
export default {
	name: 'HeaderPage',
	mounted() {
		this.token = localStorage.getItem("token")
	},
	methods: {
		getData() {
			sessionStorage.setItem("search", document.querySelectorAll('.search_data')[0].value)
			setTimeout(() => {
				window.location = '/catalog'
			}, 1000);
		},
		getData1() {
			sessionStorage.setItem("search", document.querySelectorAll('.search_data1')[0].value)
			setTimeout(() => {
				window.location = '/catalog'
			}, 1000);
		}

	},
	data() {
		return {
			token: null,
		}
	}


}
</script>
