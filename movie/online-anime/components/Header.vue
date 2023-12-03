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
								<img src="/img/logo.svg" alt="" />
							</NuxtLink>
							<!-- end header logo -->

							<!-- header categories -->
							<div class="header__categories">
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
							</div>
							<!-- end header categories -->

							<!-- header nav -->
							<ul class="header__nav">
								<!-- dropdown -->
								<li class="header__nav-item">
									<NuxtLink class="header__nav-link" to="/watching">Bosh sahifa</NuxtLink>
								</li>
								<!-- end dropdown -->

								<li class="header__nav-item">
									<NuxtLink class="header__nav-link" to="catalog">Katalog</NuxtLink>
								</li>
								<li class="header__nav-item">
									<NuxtLink class="header__nav-link" to="pricing">Narxlar</NuxtLink>
								</li>
							</ul>
							<!-- end header nav -->

							<!-- header actions -->
							<div class="header__actions">
								<form action="#" class="header__search">
									<input type="text" placeholder="Qidirish" />
									<button type="button">
										<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
											<path
												d="M21.71,20.29,18,16.61A9,9,0,1,0,16.61,18l3.68,3.68a1,1,0,0,0,1.42,0A1,1,0,0,0,21.71,20.29ZM11,18a7,7,0,1,1,7-7A7,7,0,0,1,11,18Z">
											</path>
										</svg>
									</button>
								</form>
								<NuxtLink to="signin" class="header__sign-in">
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
				<input type="text" placeholder="Qidirish" />
				<button type="button">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
						<path
							d="M21.71,20.29,18,16.61A9,9,0,1,0,16.61,18l3.68,3.68a1,1,0,0,0,1.42,0A1,1,0,0,0,21.71,20.29ZM11,18a7,7,0,1,1,7-7A7,7,0,0,1,11,18Z">
						</path>
					</svg>
				</button>
			</form>
			<!-- end menu search -->

			<!-- menu nav -->
			<ul class="menu__nav">
				<!-- dropdown -->
				<li class="menu__nav-item">
					<NuxtLink class="menu__nav-link" to="index">Bosh sahifa</NuxtLink>
				</li>
				<!-- end dropdown -->
				<li class="menu__nav-item">
					<NuxtLink class="menu__nav-link" to="catalog" aria-expanded="false">Katalog</NuxtLink>
				</li>

				<li class="menu__nav-item">
					<NuxtLink to="pricing" class="menu__nav-link">Narxlar</NuxtLink>
				</li>
			</ul>
			<!-- end menu nav -->
		</div>
		<!-- end mobile menu -->
	</div>
</template>

<script>
export default {
	name: 'HeaderPage',
}
</script>
