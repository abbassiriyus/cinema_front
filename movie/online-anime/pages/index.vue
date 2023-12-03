<template>
	<div>
		<!-- home -->
		<section class="home">
			<div class="container">
				<div class="row">
					<div class="col-12">
						<div class="hero splide splide--hero">
							<div class="splide__arrows">
								<button class="splide__arrow splide__arrow--prev" type="button">
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
										<path
											d="M17,11H9.41l3.3-3.29a1,1,0,1,0-1.42-1.42l-5,5a1,1,0,0,0-.21.33,1,1,0,0,0,0,.76,1,1,0,0,0,.21.33l5,5a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42L9.41,13H17a1,1,0,0,0,0-2Z" />
									</svg>
								</button>
								<button class="splide__arrow splide__arrow--next" type="button">
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
										<path
											d="M17.92,11.62a1,1,0,0,0-.21-.33l-5-5a1,1,0,0,0-1.42,1.42L14.59,11H7a1,1,0,0,0,0,2h7.59l-3.3,3.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l5-5a1,1,0,0,0,.21-.33A1,1,0,0,0,17.92,11.62Z" />
									</svg>
								</button>
							</div>

							<div class="splide__track">
								<ul class="splide__list">
									<li class="splide__slide">
										<div class="hero__slide" data-bg="/img/bg/slide__bg-1.jpg">
											<div class="hero__content">
												<h2 class="hero__title">
													Savage Beauty <sub>9.8</sub>
												</h2>
												<p class="hero__text">
													A brilliant scientist discovers a way to harness the
													power of the ocean's currents to create a new,
													renewable energy source. But when her groundbreaking
													technology falls into the wrong hands, she must race
													against time to stop it from being used for evil.
												</p>
												<p class="hero__category">
													<NuxtLink to="#">Action</NuxtLink>
													<NuxtLink to="#">Drama</NuxtLink>
													<NuxtLink to="#">Comedy</NuxtLink>
												</p>
												<div class="hero__actions">
													<NuxtLink to="watching" class="hero__btn">
														<span>Ko'rish</span>
													</NuxtLink>
												</div>
											</div>
										</div>
									</li>
									<li class="splide__slide">
										<div class="hero__slide" data-bg="/img/bg/slide__bg-2.jpg">
											<div class="hero__content">
												<h2 class="hero__title">
													Voices from the Other Side <sub>7.1</sub>
												</h2>
												<p class="hero__text">
													In a world where magic is outlawed and hunted, a young
													witch must use her powers to fight back against the
													corrupt authorities who seek to destroy her kind.
												</p>
												<p class="hero__category">
													<NuxtLink to="#">Adventure</NuxtLink>
													<NuxtLink to="#">Triler</NuxtLink>
												</p>
												<div class="hero__actions">
													<NuxtLink to="watching" class="hero__btn">
														<span>Ko'rish</span>
													</NuxtLink>
												</div>
											</div>
										</div>
									</li>
									<li class="splide__slide">
										<div class="hero__slide" data-bg="/img/bg/slide__bg-3.jpg">
											<div class="hero__content">
												<h2 class="hero__title">
													Endless Horizon <sub>8.6</sub>
												</h2>
												<p class="hero__text">
													When a renowned archaeologist goes missing, his
													daughter sets out on a perilous journey to the heart
													of the Amazon rainforest to find him. Along the way,
													she discovers a hidden city and a dangerous conspiracy
													that threatens the very balance of power in the world.
												</p>
												<p class="hero__category">
													<NuxtLink to="#">Action</NuxtLink>
													<NuxtLink to="#">Drama</NuxtLink>
													<NuxtLink to="#">Triler</NuxtLink>
												</p>
												<div class="hero__actions">
													<NuxtLink to="watching" class="hero__btn">
														<span>Ko'rish</span>
													</NuxtLink>
												</div>
											</div>
										</div>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
		<!-- end home -->

		<!-- content -->
		<section class="content">
			<div class="content__head">
				<div class="container">
					<div class="row">
						<div class="col-12">
							<!-- content title -->
							<h2 class="content__title">Yaqinda yangilangan</h2>
							<!-- end content title -->

							<!-- content tabs nav -->
							<ul id="content__tabs" class="nav nav-tabs content__tabs" role="tablist">
								<li class="nav-item" role="presentation">
									<button id="1-tab" class="active" data-bs-toggle="tab" data-bs-target="#tab-1" type="button" role="tab"
										aria-controls="tab-1" aria-selected="true">
										Film
									</button>
								</li>

								<li class="nav-item" role="presentation">
									<button id="2-tab" data-bs-toggle="tab" data-bs-target="#tab-2" type="button" role="tab"
										aria-controls="tab-2" aria-selected="false">
										Serial
									</button>
								</li>

								<li class="nav-item" role="presentation">
									<button id="3-tab" data-bs-toggle="tab" data-bs-target="#tab-3" type="button" role="tab"
										aria-controls="tab-3" aria-selected="false">
										Ongoing
									</button>
								</li>

								<li class="nav-item" role="presentation">
									<button id="4-tab" data-bs-toggle="tab" data-bs-target="#tab-4" type="button" role="tab"
										aria-controls="tab-4" aria-selected="false">
										OVA
									</button>
								</li>
							</ul>
							<!-- end content tabs nav -->
						</div>
					</div>
				</div>
			</div>

			<div class="container">
				<!-- content tabs -->
				<div class="tab-content">
					<div id="tab-1" class="tab-pane fade show active" role="tabpanel" aria-labelledby="1-tab" tabindex="0">
						<div class="row">
							<!-- item -->
							<div class="col-6 col-sm-12 col-lg-6 col-xxl-4">
								<div class="item item--list">
									<NuxtLink to="watching" class="item__cover">
										<div class="d-flex aligin-items-center justify-content-center premium-icon">
											<img src="/img/USD.svg" alt="" />
										</div>
										<img src="/img/covers/1.png" alt="" />
										<span class="item__play">
											<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
												<path
													d="M18.54,9,8.88,3.46a3.42,3.42,0,0,0-5.13,3V17.58A3.42,3.42,0,0,0,7.17,21a3.43,3.43,0,0,0,1.71-.46L18.54,15a3.42,3.42,0,0,0,0-5.92Zm-1,4.19L7.88,18.81a1.44,1.44,0,0,1-1.42,0,1.42,1.42,0,0,1-.71-1.23V6.42a1.42,1.42,0,0,1,.71-1.23A1.51,1.51,0,0,1,7.17,5a1.54,1.54,0,0,1,.71.19l9.66,5.58a1.42,1.42,0,0,1,0,2.46Z" />
											</svg>
										</span>
									</NuxtLink>
									<div class="item__content">
										<h3 class="item__title">
											<NuxtLink to="watching">The Lost City</NuxtLink>
										</h3>
										<span class="item__category">
											<NuxtLink to="#">Action</NuxtLink>
											<NuxtLink to="#">Triler</NuxtLink>
										</span>
										<div class="item__wrap">
											<span class="item__rate"> 8.4</span>

											<ul class="item__list">
												<li>HD</li>
												<li>16+</li>
											</ul>
										</div>
										<div class="item__description">
											<p>
												When a renowned archaeologist goes missing, his daughter
												sets out on a perilous journey to the heart of the
												Amazon rainforest to find him. Along the way, she
												discovers a hidden city and a dangerous conspiracy that
												threatens the very balance of power in the world. With
												the help of a charming rogue, she must navigate
												treacherous terrain and outwit powerful enemies to save
												her father and uncover the secrets of the lost city.
											</p>
										</div>
									</div>
								</div>
							</div>
							<!-- end item -->
							<!-- item -->
							<div class="col-6 col-sm-12 col-lg-6 col-xxl-4">
								<div class="item item--list">
									<NuxtLink to="watching" class="item__cover">
										<div class="d-flex aligin-items-center justify-content-center premium-icon">
											<img src="/img/USD.svg" alt="" />
										</div>
										<img src="/img/covers/2.png" alt="" />
										<span class="item__play">
											<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
												<path
													d="M18.54,9,8.88,3.46a3.42,3.42,0,0,0-5.13,3V17.58A3.42,3.42,0,0,0,7.17,21a3.43,3.43,0,0,0,1.71-.46L18.54,15a3.42,3.42,0,0,0,0-5.92Zm-1,4.19L7.88,18.81a1.44,1.44,0,0,1-1.42,0,1.42,1.42,0,0,1-.71-1.23V6.42a1.42,1.42,0,0,1,.71-1.23A1.51,1.51,0,0,1,7.17,5a1.54,1.54,0,0,1,.71.19l9.66,5.58a1.42,1.42,0,0,1,0,2.46Z" />
											</svg>
										</span>
									</NuxtLink>

									<div class="item__content">
										<h3 class="item__title">
											<NuxtLink to="watching">Undercurrents</NuxtLink>
										</h3>
										<span class="item__category">
											<NuxtLink to="#">Comedy</NuxtLink>
										</span>

										<div class="item__wrap">
											<span class="item__rate"> 7.1</span>

											<ul class="item__list">
												<li>FHD</li>
												<li>18+</li>
											</ul>
										</div>

										<div class="item__description">
											<p>
												A brilliant scientist discovers a way to harness the
												power of the ocean's currents to create a new, renewable
												energy source. But when her groundbreaking technology
												falls into the wrong hands, she must race against time
												to stop it from being used for evil. Along the way, she
												must navigate complex political alliances and confront
												her own past to save the world from disaster.
											</p>
										</div>
									</div>
								</div>
							</div>
							<!-- end item -->

							<!-- item -->
							<div class="col-6 col-sm-12 col-lg-6 col-xxl-4">
								<div class="item item--list">
									<NuxtLink to="watching" class="item__cover">
										<img src="/img/covers/3.png" alt="" />
										<span class="item__play">
											<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
												<path
													d="M18.54,9,8.88,3.46a3.42,3.42,0,0,0-5.13,3V17.58A3.42,3.42,0,0,0,7.17,21a3.43,3.43,0,0,0,1.71-.46L18.54,15a3.42,3.42,0,0,0,0-5.92Zm-1,4.19L7.88,18.81a1.44,1.44,0,0,1-1.42,0,1.42,1.42,0,0,1-.71-1.23V6.42a1.42,1.42,0,0,1,.71-1.23A1.51,1.51,0,0,1,7.17,5a1.54,1.54,0,0,1,.71.19l9.66,5.58a1.42,1.42,0,0,1,0,2.46Z" />
											</svg>
										</span>
									</NuxtLink>

									<div class="item__content">
										<h3 class="item__title">
											<NuxtLink to="watching">Redemption Road</NuxtLink>
										</h3>
										<span class="item__category">
											<NuxtLink to="#">Romance</NuxtLink>
											<NuxtLink to="#">Drama</NuxtLink>
											<NuxtLink to="#">Music</NuxtLink>
										</span>

										<div class="item__wrap">
											<span class="item__rate"> 6.3</span>

											<ul class="item__list">
												<li>HD</li>
												<li>12+</li>
											</ul>
										</div>

										<div class="item__description">
											<p>
												A down-on-his-luck boxer struggles to make ends meet
												while raising his young son. When an old friend offers
												him a chance to make some quick cash by fighting in an
												illegal underground boxing tournament, he sees it as his
												last shot at redemption. But as the stakes get higher
												and the fights get more brutal, he must confront his own
												demons and find the strength to win not just for
												himself, but for his son.
											</p>
										</div>
									</div>
								</div>
							</div>
							<!-- end item -->

							<!-- item -->
							<div class="col-6 col-sm-12 col-lg-6 col-xxl-4">
								<div class="item item--list">
									<NuxtLink to="watching" class="item__cover">
										<img src="/img/covers/4.png" alt="" />
										<span class="item__play">
											<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
												<path
													d="M18.54,9,8.88,3.46a3.42,3.42,0,0,0-5.13,3V17.58A3.42,3.42,0,0,0,7.17,21a3.43,3.43,0,0,0,1.71-.46L18.54,15a3.42,3.42,0,0,0,0-5.92Zm-1,4.19L7.88,18.81a1.44,1.44,0,0,1-1.42,0,1.42,1.42,0,0,1-.71-1.23V6.42a1.42,1.42,0,0,1,.71-1.23A1.51,1.51,0,0,1,7.17,5a1.54,1.54,0,0,1,.71.19l9.66,5.58a1.42,1.42,0,0,1,0,2.46Z" />
											</svg>
										</span>
									</NuxtLink>

									<div class="item__content">
										<h3 class="item__title">
											<NuxtLink to="watching">Tales from the Underworld</NuxtLink>
										</h3>
										<span class="item__category">
											<NuxtLink to="#">Comedy</NuxtLink>
											<NuxtLink to="#">Drama</NuxtLink>
										</span>

										<div class="item__wrap">
											<span class="item__rate"> 7.9</span>

											<ul class="item__list">
												<li>HD</li>
												<li>16+</li>
											</ul>
										</div>

										<div class="item__description">
											<p>
												When a luxury cruise ship sets sail on its final voyage
												before retirement, the passengers and crew expect
												nothing but relaxation and indulgence. But when a
												mysterious illness spreads through the ship, they find
												themselves fighting for survival in the middle of the
												ocean. As tensions rise and resources dwindle, they must
												confront their own mortality and make impossible choices
												to stay alive.
											</p>
										</div>
									</div>
								</div>
							</div>
							<!-- end item -->

							<!-- item -->
							<div class="col-6 col-sm-12 col-lg-6 col-xxl-4">
								<div class="item item--list">
									<NuxtLink to="watching" class="item__cover">
										<img src="/img/covers/5.png" alt="" />
										<span class="item__play">
											<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
												<path
													d="M18.54,9,8.88,3.46a3.42,3.42,0,0,0-5.13,3V17.58A3.42,3.42,0,0,0,7.17,21a3.43,3.43,0,0,0,1.71-.46L18.54,15a3.42,3.42,0,0,0,0-5.92Zm-1,4.19L7.88,18.81a1.44,1.44,0,0,1-1.42,0,1.42,1.42,0,0,1-.71-1.23V6.42a1.42,1.42,0,0,1,.71-1.23A1.51,1.51,0,0,1,7.17,5a1.54,1.54,0,0,1,.71.19l9.66,5.58a1.42,1.42,0,0,1,0,2.46Z" />
											</svg>
										</span>
									</NuxtLink>

									<div class="item__content">
										<h3 class="item__title">
											<NuxtLink to="watching">Voices from the Other Side</NuxtLink>
										</h3>
										<span class="item__category">
											<NuxtLink to="#">Action</NuxtLink>
											<NuxtLink to="#">Triler</NuxtLink>
										</span>

										<div class="item__wrap">
											<span class="item__rate"> 8.4</span>

											<ul class="item__list">
												<li>HD</li>
												<li>12+</li>
											</ul>
										</div>

										<div class="item__description">
											<p>
												In a world where magic is outlawed and hunted, a young
												witch must use her powers to fight back against the
												corrupt authorities who seek to destroy her kind. With
												the help of a rogue witch hunter, she sets out on a
												dangerous mission to uncover the truth about the
												government's dark secrets and restore balance to the
												world. But as the stakes get higher and the risks get
												greater, she must confront her own fears and decide what
												she's willing to sacrifice for the greater good.
											</p>
										</div>
									</div>
								</div>
							</div>
							<!-- end item -->

							<!-- item -->
							<div class="col-6 col-sm-12 col-lg-6 col-xxl-4">
								<div class="item item--list">
									<NuxtLink to="watching" class="item__cover">
										<img src="/img/covers/6.png" alt="" />
										<span class="item__play">
											<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
												<path
													d="M18.54,9,8.88,3.46a3.42,3.42,0,0,0-5.13,3V17.58A3.42,3.42,0,0,0,7.17,21a3.43,3.43,0,0,0,1.71-.46L18.54,15a3.42,3.42,0,0,0,0-5.92Zm-1,4.19L7.88,18.81a1.44,1.44,0,0,1-1.42,0,1.42,1.42,0,0,1-.71-1.23V6.42a1.42,1.42,0,0,1,.71-1.23A1.51,1.51,0,0,1,7.17,5a1.54,1.54,0,0,1,.71.19l9.66,5.58a1.42,1.42,0,0,1,0,2.46Z" />
											</svg>
										</span>
									</NuxtLink>

									<div class="item__content">
										<h3 class="item__title">
											<NuxtLink to="watching">The Unseen World</NuxtLink>
										</h3>
										<span class="item__category">
											<NuxtLink to="#">Comedy</NuxtLink>
										</span>

										<div class="item__wrap">
											<span class="item__rate"> 7.1</span>

											<ul class="item__list">
												<li>HD</li>
												<li>16+</li>
											</ul>
										</div>

										<div class="item__description">
											<p>
												When a brilliant scientist invents a machine that can
												access parallel universes, she unwittingly unleashes a
												dangerous force that threatens to destroy everything she
												holds dear. With the help of her trusted colleagues, she
												must race against time to stop the machine from falling
												into the wrong hands and prevent a catastrophic chain
												reaction that could unravel the fabric of reality
												itself. But as she delves deeper into the unseen world,
												she realizes that the greatest danger may be closer than
												she ever imagined.
											</p>
										</div>
									</div>
								</div>
							</div>
							<!-- end item -->
						</div>
					</div>

					<div id="tab-2" class="tab-pane fade" role="tabpanel" aria-labelledby="2-tab" tabindex="0">
						<div class="row">
							<!-- item -->
							<div class="col-6 col-sm-4 col-lg-3 col-xl-2">
								<div class="item">
									<NuxtLink to="watching" class="item__cover">
										<img src="/img/covers/7.png" alt="" />
										<span class="item__play">
											<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
												<path
													d="M18.54,9,8.88,3.46a3.42,3.42,0,0,0-5.13,3V17.58A3.42,3.42,0,0,0,7.17,21a3.43,3.43,0,0,0,1.71-.46L18.54,15a3.42,3.42,0,0,0,0-5.92Zm-1,4.19L7.88,18.81a1.44,1.44,0,0,1-1.42,0,1.42,1.42,0,0,1-.71-1.23V6.42a1.42,1.42,0,0,1,.71-1.23A1.51,1.51,0,0,1,7.17,5a1.54,1.54,0,0,1,.71.19l9.66,5.58a1.42,1.42,0,0,1,0,2.46Z" />
											</svg>
										</span>
									</NuxtLink>
									<div class="item__content">
										<h3 class="item__title">
											<NuxtLink to="watching">The Lost Key</NuxtLink>
										</h3>
										<span class="item__category">
											<NuxtLink to="#">Action</NuxtLink>
											<NuxtLink to="#">Triler</NuxtLink>
										</span>
										<span class="item__rate">8.4</span>
									</div>
								</div>
							</div>
							<!-- end item -->

							<!-- item -->
							<div class="col-6 col-sm-4 col-lg-3 col-xl-2">
								<div class="item">
									<NuxtLink to="watching" class="item__cover">
										<img src="/img/covers/8.png" alt="" />
										<span class="item__play">
											<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
												<path
													d="M18.54,9,8.88,3.46a3.42,3.42,0,0,0-5.13,3V17.58A3.42,3.42,0,0,0,7.17,21a3.43,3.43,0,0,0,1.71-.46L18.54,15a3.42,3.42,0,0,0,0-5.92Zm-1,4.19L7.88,18.81a1.44,1.44,0,0,1-1.42,0,1.42,1.42,0,0,1-.71-1.23V6.42a1.42,1.42,0,0,1,.71-1.23A1.51,1.51,0,0,1,7.17,5a1.54,1.54,0,0,1,.71.19l9.66,5.58a1.42,1.42,0,0,1,0,2.46Z" />
											</svg>
										</span>
									</NuxtLink>
									<div class="item__content">
										<h3 class="item__title">
											<NuxtLink to="watching">Red Sky at Night</NuxtLink>
										</h3>
										<span class="item__category">
											<NuxtLink to="#">Comedy</NuxtLink>
										</span>
										<span class="item__rate">7.1</span>
									</div>
								</div>
							</div>
							<!-- end item -->

							<!-- item -->
							<div class="col-6 col-sm-4 col-lg-3 col-xl-2">
								<div class="item">
									<NuxtLink to="watching" class="item__cover">
										<img src="/img/covers/9.png" alt="" />
										<span class="item__play">
											<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
												<path
													d="M18.54,9,8.88,3.46a3.42,3.42,0,0,0-5.13,3V17.58A3.42,3.42,0,0,0,7.17,21a3.43,3.43,0,0,0,1.71-.46L18.54,15a3.42,3.42,0,0,0,0-5.92Zm-1,4.19L7.88,18.81a1.44,1.44,0,0,1-1.42,0,1.42,1.42,0,0,1-.71-1.23V6.42a1.42,1.42,0,0,1,.71-1.23A1.51,1.51,0,0,1,7.17,5a1.54,1.54,0,0,1,.71.19l9.66,5.58a1.42,1.42,0,0,1,0,2.46Z" />
											</svg>
										</span>
									</NuxtLink>
									<div class="item__content">
										<h3 class="item__title">
											<NuxtLink to="watching">The Forgotten Road</NuxtLink>
										</h3>
										<span class="item__category">
											<NuxtLink to="#">Romance</NuxtLink>
											<NuxtLink to="#">Drama</NuxtLink>
											<NuxtLink to="#">Music</NuxtLink>
										</span>
										<span class="item__rate">6.3</span>
									</div>
								</div>
							</div>
							<!-- end item -->

							<!-- item -->
							<div class="col-6 col-sm-4 col-lg-3 col-xl-2">
								<div class="item">
									<NuxtLink to="watching" class="item__cover">
										<img src="/img/covers/10.png" alt="" />
										<span class="item__play">
											<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
												<path
													d="M18.54,9,8.88,3.46a3.42,3.42,0,0,0-5.13,3V17.58A3.42,3.42,0,0,0,7.17,21a3.43,3.43,0,0,0,1.71-.46L18.54,15a3.42,3.42,0,0,0,0-5.92Zm-1,4.19L7.88,18.81a1.44,1.44,0,0,1-1.42,0,1.42,1.42,0,0,1-.71-1.23V6.42a1.42,1.42,0,0,1,.71-1.23A1.51,1.51,0,0,1,7.17,5a1.54,1.54,0,0,1,.71.19l9.66,5.58a1.42,1.42,0,0,1,0,2.46Z" />
											</svg>
										</span>
									</NuxtLink>
									<div class="item__content">
										<h3 class="item__title">
											<NuxtLink to="watching">Dark Horizons</NuxtLink>
										</h3>
										<span class="item__category">
											<NuxtLink to="#">Comedy</NuxtLink>
											<NuxtLink to="#">Drama</NuxtLink>
										</span>
										<span class="item__rate">7.9</span>
									</div>
								</div>
							</div>
							<!-- end item -->

							<!-- item -->
							<div class="col-6 col-sm-4 col-lg-3 col-xl-2">
								<div class="item">
									<NuxtLink to="watching" class="item__cover">
										<img src="/img/covers/11.png" alt="" />
										<span class="item__play">
											<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
												<path
													d="M18.54,9,8.88,3.46a3.42,3.42,0,0,0-5.13,3V17.58A3.42,3.42,0,0,0,7.17,21a3.43,3.43,0,0,0,1.71-.46L18.54,15a3.42,3.42,0,0,0,0-5.92Zm-1,4.19L7.88,18.81a1.44,1.44,0,0,1-1.42,0,1.42,1.42,0,0,1-.71-1.23V6.42a1.42,1.42,0,0,1,.71-1.23A1.51,1.51,0,0,1,7.17,5a1.54,1.54,0,0,1,.71.19l9.66,5.58a1.42,1.42,0,0,1,0,2.46Z" />
											</svg>
										</span>
									</NuxtLink>
									<div class="item__content">
										<h3 class="item__title">
											<NuxtLink to="watching">Echoes of Yesterday</NuxtLink>
										</h3>
										<span class="item__category">
											<NuxtLink to="#">Action</NuxtLink>
											<NuxtLink to="#">Triler</NuxtLink>
										</span>
										<span class="item__rate">8.4</span>
									</div>
								</div>
							</div>
							<!-- end item -->

							<!-- item -->
							<div class="col-6 col-sm-4 col-lg-3 col-xl-2">
								<div class="item">
									<NuxtLink to="watching" class="item__cover">
										<img src="/img/covers/12.png" alt="" />
										<span class="item__play">
											<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
												<path
													d="M18.54,9,8.88,3.46a3.42,3.42,0,0,0-5.13,3V17.58A3.42,3.42,0,0,0,7.17,21a3.43,3.43,0,0,0,1.71-.46L18.54,15a3.42,3.42,0,0,0,0-5.92Zm-1,4.19L7.88,18.81a1.44,1.44,0,0,1-1.42,0,1.42,1.42,0,0,1-.71-1.23V6.42a1.42,1.42,0,0,1,.71-1.23A1.51,1.51,0,0,1,7.17,5a1.54,1.54,0,0,1,.71.19l9.66,5.58a1.42,1.42,0,0,1,0,2.46Z" />
											</svg>
										</span>
									</NuxtLink>
									<div class="item__content">
										<h3 class="item__title">
											<NuxtLink to="watching">Into the Unknown</NuxtLink>
										</h3>
										<span class="item__category">
											<NuxtLink to="#">Comedy</NuxtLink>
										</span>
										<span class="item__rate">7.1</span>
									</div>
								</div>
							</div>
							<!-- end item -->

							<!-- item -->
							<div class="col-6 col-sm-4 col-lg-3 col-xl-2">
								<div class="item">
									<NuxtLink to="watching" class="item__cover">
										<img src="/img/covers/13.png" alt="" />
										<span class="item__play">
											<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
												<path
													d="M18.54,9,8.88,3.46a3.42,3.42,0,0,0-5.13,3V17.58A3.42,3.42,0,0,0,7.17,21a3.43,3.43,0,0,0,1.71-.46L18.54,15a3.42,3.42,0,0,0,0-5.92Zm-1,4.19L7.88,18.81a1.44,1.44,0,0,1-1.42,0,1.42,1.42,0,0,1-.71-1.23V6.42a1.42,1.42,0,0,1,.71-1.23A1.51,1.51,0,0,1,7.17,5a1.54,1.54,0,0,1,.71.19l9.66,5.58a1.42,1.42,0,0,1,0,2.46Z" />
											</svg>
										</span>
									</NuxtLink>
									<div class="item__content">
										<h3 class="item__title">
											<NuxtLink to="watching">The Broken Path</NuxtLink>
										</h3>
										<span class="item__category">
											<NuxtLink to="#">Romance</NuxtLink>
											<NuxtLink to="#">Drama</NuxtLink>
											<NuxtLink to="#">Music</NuxtLink>
										</span>
										<span class="item__rate">6.3</span>
									</div>
								</div>
							</div>
							<!-- end item -->

							<!-- item -->
							<div class="col-6 col-sm-4 col-lg-3 col-xl-2">
								<div class="item">
									<NuxtLink to="watching" class="item__cover">
										<img src="/img/covers/14.png" alt="" />
										<span class="item__play">
											<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
												<path
													d="M18.54,9,8.88,3.46a3.42,3.42,0,0,0-5.13,3V17.58A3.42,3.42,0,0,0,7.17,21a3.43,3.43,0,0,0,1.71-.46L18.54,15a3.42,3.42,0,0,0,0-5.92Zm-1,4.19L7.88,18.81a1.44,1.44,0,0,1-1.42,0,1.42,1.42,0,0,1-.71-1.23V6.42a1.42,1.42,0,0,1,.71-1.23A1.51,1.51,0,0,1,7.17,5a1.54,1.54,0,0,1,.71.19l9.66,5.58a1.42,1.42,0,0,1,0,2.46Z" />
											</svg>
										</span>
									</NuxtLink>
									<div class="item__content">
										<h3 class="item__title">
											<NuxtLink to="watching">A Light in the Darkness</NuxtLink>
										</h3>
										<span class="item__category">
											<NuxtLink to="#">Comedy</NuxtLink>
											<NuxtLink to="#">Drama</NuxtLink>
										</span>
										<span class="item__rate">7.9</span>
									</div>
								</div>
							</div>
							<!-- end item -->

							<!-- item -->
							<div class="col-6 col-sm-4 col-lg-3 col-xl-2">
								<div class="item">
									<NuxtLink to="watching" class="item__cover">
										<img src="/img/covers/15.png" alt="" />
										<span class="item__play">
											<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
												<path
													d="M18.54,9,8.88,3.46a3.42,3.42,0,0,0-5.13,3V17.58A3.42,3.42,0,0,0,7.17,21a3.43,3.43,0,0,0,1.71-.46L18.54,15a3.42,3.42,0,0,0,0-5.92Zm-1,4.19L7.88,18.81a1.44,1.44,0,0,1-1.42,0,1.42,1.42,0,0,1-.71-1.23V6.42a1.42,1.42,0,0,1,.71-1.23A1.51,1.51,0,0,1,7.17,5a1.54,1.54,0,0,1,.71.19l9.66,5.58a1.42,1.42,0,0,1,0,2.46Z" />
											</svg>
										</span>
									</NuxtLink>
									<div class="item__content">
										<h3 class="item__title">
											<NuxtLink to="watching">Endless Horizon</NuxtLink>
										</h3>
										<span class="item__category">
											<NuxtLink to="#">Action</NuxtLink>
											<NuxtLink to="#">Triler</NuxtLink>
										</span>
										<span class="item__rate">8.4</span>
									</div>
								</div>
							</div>
							<!-- end item -->

							<!-- item -->
							<div class="col-6 col-sm-4 col-lg-3 col-xl-2">
								<div class="item">
									<NuxtLink to="watching" class="item__cover">
										<img src="/img/covers/16.png" alt="" />
										<span class="item__play">
											<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
												<path
													d="M18.54,9,8.88,3.46a3.42,3.42,0,0,0-5.13,3V17.58A3.42,3.42,0,0,0,7.17,21a3.43,3.43,0,0,0,1.71-.46L18.54,15a3.42,3.42,0,0,0,0-5.92Zm-1,4.19L7.88,18.81a1.44,1.44,0,0,1-1.42,0,1.42,1.42,0,0,1-.71-1.23V6.42a1.42,1.42,0,0,1,.71-1.23A1.51,1.51,0,0,1,7.17,5a1.54,1.54,0,0,1,.71.19l9.66,5.58a1.42,1.42,0,0,1,0,2.46Z" />
											</svg>
										</span>
									</NuxtLink>
									<div class="item__content">
										<h3 class="item__title">
											<NuxtLink to="watching">The Unseen Journey</NuxtLink>
										</h3>
										<span class="item__category">
											<NuxtLink to="#">Comedy</NuxtLink>
										</span>
										<span class="item__rate">7.1</span>
									</div>
								</div>
							</div>
							<!-- end item -->

							<!-- item -->
							<div class="col-6 col-sm-4 col-lg-3 col-xl-2">
								<div class="item">
									<NuxtLink to="watching" class="item__cover">
										<img src="/img/covers/17.png" alt="" />
										<span class="item__play">
											<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
												<path
													d="M18.54,9,8.88,3.46a3.42,3.42,0,0,0-5.13,3V17.58A3.42,3.42,0,0,0,7.17,21a3.43,3.43,0,0,0,1.71-.46L18.54,15a3.42,3.42,0,0,0,0-5.92Zm-1,4.19L7.88,18.81a1.44,1.44,0,0,1-1.42,0,1.42,1.42,0,0,1-.71-1.23V6.42a1.42,1.42,0,0,1,.71-1.23A1.51,1.51,0,0,1,7.17,5a1.54,1.54,0,0,1,.71.19l9.66,5.58a1.42,1.42,0,0,1,0,2.46Z" />
											</svg>
										</span>
									</NuxtLink>
									<div class="item__content">
										<h3 class="item__title">
											<NuxtLink to="watching">Reckoning</NuxtLink>
										</h3>
										<span class="item__category">
											<NuxtLink to="#">Romance</NuxtLink>
											<NuxtLink to="#">Drama</NuxtLink>
											<NuxtLink to="#">Music</NuxtLink>
										</span>
										<span class="item__rate">6.3</span>
									</div>
								</div>
							</div>
							<!-- end item -->

							<!-- item -->
							<div class="col-6 col-sm-4 col-lg-3 col-xl-2">
								<div class="item">
									<NuxtLink to="watching" class="item__cover">
										<img src="/img/covers/18.png" alt="" />
										<span class="item__play">
											<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
												<path
													d="M18.54,9,8.88,3.46a3.42,3.42,0,0,0-5.13,3V17.58A3.42,3.42,0,0,0,7.17,21a3.43,3.43,0,0,0,1.71-.46L18.54,15a3.42,3.42,0,0,0,0-5.92Zm-1,4.19L7.88,18.81a1.44,1.44,0,0,1-1.42,0,1.42,1.42,0,0,1-.71-1.23V6.42a1.42,1.42,0,0,1,.71-1.23A1.51,1.51,0,0,1,7.17,5a1.54,1.54,0,0,1,.71.19l9.66,5.58a1.42,1.42,0,0,1,0,2.46Z" />
											</svg>
										</span>
									</NuxtLink>
									<div class="item__content">
										<h3 class="item__title">
											<NuxtLink to="watching">Savage Beauty</NuxtLink>
										</h3>
										<span class="item__category">
											<NuxtLink to="#">Comedy</NuxtLink>
											<NuxtLink to="#">Drama</NuxtLink>
										</span>
										<span class="item__rate">7.9</span>
									</div>
								</div>
							</div>
							<!-- end item -->
						</div>
					</div>

					<div id="tab-3" class="tab-pane fade" role="tabpanel" aria-labelledby="3-tab" tabindex="0">
						<div class="row">
							<!-- item -->
							<div class="col-6 col-sm-4 col-lg-3 col-xl-2">
								<div class="item">
									<NuxtLink to="watching" class="item__cover">
										<img src="/img/covers/1.png" alt="" />
										<span class="item__play">
											<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
												<path
													d="M18.54,9,8.88,3.46a3.42,3.42,0,0,0-5.13,3V17.58A3.42,3.42,0,0,0,7.17,21a3.43,3.43,0,0,0,1.71-.46L18.54,15a3.42,3.42,0,0,0,0-5.92Zm-1,4.19L7.88,18.81a1.44,1.44,0,0,1-1.42,0,1.42,1.42,0,0,1-.71-1.23V6.42a1.42,1.42,0,0,1,.71-1.23A1.51,1.51,0,0,1,7.17,5a1.54,1.54,0,0,1,.71.19l9.66,5.58a1.42,1.42,0,0,1,0,2.46Z" />
											</svg>
										</span>
									</NuxtLink>
									<div class="item__content">
										<h3 class="item__title">
											<NuxtLink to="watching">Midnight Sun</NuxtLink>
										</h3>
										<span class="item__category">
											<NuxtLink to="#">Comedy</NuxtLink>
										</span>
										<span class="item__rate">7.1</span>
									</div>
								</div>
							</div>
							<!-- end item -->

							<!-- item -->
							<div class="col-6 col-sm-4 col-lg-3 col-xl-2">
								<div class="item">
									<NuxtLink to="watching" class="item__cover">
										<img src="/img/covers/2.png" alt="" />
										<span class="item__play">
											<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
												<path
													d="M18.54,9,8.88,3.46a3.42,3.42,0,0,0-5.13,3V17.58A3.42,3.42,0,0,0,7.17,21a3.43,3.43,0,0,0,1.71-.46L18.54,15a3.42,3.42,0,0,0,0-5.92Zm-1,4.19L7.88,18.81a1.44,1.44,0,0,1-1.42,0,1.42,1.42,0,0,1-.71-1.23V6.42a1.42,1.42,0,0,1,.71-1.23A1.51,1.51,0,0,1,7.17,5a1.54,1.54,0,0,1,.71.19l9.66,5.58a1.42,1.42,0,0,1,0,2.46Z" />
											</svg>
										</span>
									</NuxtLink>
									<div class="item__content">
										<h3 class="item__title">
											<NuxtLink to="watching">The Shadow Hunter</NuxtLink>
										</h3>
										<span class="item__category">
											<NuxtLink to="#">Romance</NuxtLink>
											<NuxtLink to="#">Drama</NuxtLink>
											<NuxtLink to="#">Music</NuxtLink>
										</span>
										<span class="item__rate">6.3</span>
									</div>
								</div>
							</div>
							<!-- end item -->

							<!-- item -->
							<div class="col-6 col-sm-4 col-lg-3 col-xl-2">
								<div class="item">
									<NuxtLink to="watching" class="item__cover">
										<img src="/img/covers/3.png" alt="" />
										<span class="item__play">
											<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
												<path
													d="M18.54,9,8.88,3.46a3.42,3.42,0,0,0-5.13,3V17.58A3.42,3.42,0,0,0,7.17,21a3.43,3.43,0,0,0,1.71-.46L18.54,15a3.42,3.42,0,0,0,0-5.92Zm-1,4.19L7.88,18.81a1.44,1.44,0,0,1-1.42,0,1.42,1.42,0,0,1-.71-1.23V6.42a1.42,1.42,0,0,1,.71-1.23A1.51,1.51,0,0,1,7.17,5a1.54,1.54,0,0,1,.71.19l9.66,5.58a1.42,1.42,0,0,1,0,2.46Z" />
											</svg>
										</span>
									</NuxtLink>
									<div class="item__content">
										<h3 class="item__title">
											<NuxtLink to="watching">Wild Hearts</NuxtLink>
										</h3>
										<span class="item__category">
											<NuxtLink to="#">Comedy</NuxtLink>
											<NuxtLink to="#">Drama</NuxtLink>
										</span>
										<span class="item__rate">7.9</span>
									</div>
								</div>
							</div>
							<!-- end item -->

							<!-- item -->
							<div class="col-6 col-sm-4 col-lg-3 col-xl-2">
								<div class="item">
									<NuxtLink to="watching" class="item__cover">
										<img src="/img/covers/4.png" alt="" />
										<span class="item__play">
											<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
												<path
													d="M18.54,9,8.88,3.46a3.42,3.42,0,0,0-5.13,3V17.58A3.42,3.42,0,0,0,7.17,21a3.43,3.43,0,0,0,1.71-.46L18.54,15a3.42,3.42,0,0,0,0-5.92Zm-1,4.19L7.88,18.81a1.44,1.44,0,0,1-1.42,0,1.42,1.42,0,0,1-.71-1.23V6.42a1.42,1.42,0,0,1,.71-1.23A1.51,1.51,0,0,1,7.17,5a1.54,1.54,0,0,1,.71.19l9.66,5.58a1.42,1.42,0,0,1,0,2.46Z" />
											</svg>
										</span>
									</NuxtLink>
									<div class="item__content">
										<h3 class="item__title">
											<NuxtLink to="watching">Dark Horizons</NuxtLink>
										</h3>
										<span class="item__category">
											<NuxtLink to="#">Action</NuxtLink>
											<NuxtLink to="#">Triler</NuxtLink>
										</span>
										<span class="item__rate">8.4</span>
									</div>
								</div>
							</div>
							<!-- end item -->

							<!-- item -->
							<div class="col-6 col-sm-4 col-lg-3 col-xl-2">
								<div class="item">
									<NuxtLink to="watching" class="item__cover">
										<img src="/img/covers/5.png" alt="" />
										<span class="item__play">
											<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
												<path
													d="M18.54,9,8.88,3.46a3.42,3.42,0,0,0-5.13,3V17.58A3.42,3.42,0,0,0,7.17,21a3.43,3.43,0,0,0,1.71-.46L18.54,15a3.42,3.42,0,0,0,0-5.92Zm-1,4.19L7.88,18.81a1.44,1.44,0,0,1-1.42,0,1.42,1.42,0,0,1-.71-1.23V6.42a1.42,1.42,0,0,1,.71-1.23A1.51,1.51,0,0,1,7.17,5a1.54,1.54,0,0,1,.71.19l9.66,5.58a1.42,1.42,0,0,1,0,2.46Z" />
											</svg>
										</span>
									</NuxtLink>
									<div class="item__content">
										<h3 class="item__title">
											<NuxtLink to="watching">Electric Dreams</NuxtLink>
										</h3>
										<span class="item__category">
											<NuxtLink to="#">Comedy</NuxtLink>
										</span>
										<span class="item__rate">7.1</span>
									</div>
								</div>
							</div>
							<!-- end item -->

							<!-- item -->
							<div class="col-6 col-sm-4 col-lg-3 col-xl-2">
								<div class="item">
									<NuxtLink to="watching" class="item__cover">
										<img src="/img/covers/6.png" alt="" />
										<span class="item__play">
											<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
												<path
													d="M18.54,9,8.88,3.46a3.42,3.42,0,0,0-5.13,3V17.58A3.42,3.42,0,0,0,7.17,21a3.43,3.43,0,0,0,1.71-.46L18.54,15a3.42,3.42,0,0,0,0-5.92Zm-1,4.19L7.88,18.81a1.44,1.44,0,0,1-1.42,0,1.42,1.42,0,0,1-.71-1.23V6.42a1.42,1.42,0,0,1,.71-1.23A1.51,1.51,0,0,1,7.17,5a1.54,1.54,0,0,1,.71.19l9.66,5.58a1.42,1.42,0,0,1,0,2.46Z" />
											</svg>
										</span>
									</NuxtLink>
									<div class="item__content">
										<h3 class="item__title">
											<NuxtLink to="watching">Broken Promises</NuxtLink>
										</h3>
										<span class="item__category">
											<NuxtLink to="#">Action</NuxtLink>
											<NuxtLink to="#">Triler</NuxtLink>
										</span>
										<span class="item__rate">8.4</span>
									</div>
								</div>
							</div>
							<!-- end item -->

							<!-- item -->
							<div class="col-6 col-sm-4 col-lg-3 col-xl-2">
								<div class="item">
									<NuxtLink to="watching" class="item__cover">
										<img src="/img/covers/7.png" alt="" />
										<span class="item__play">
											<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
												<path
													d="M18.54,9,8.88,3.46a3.42,3.42,0,0,0-5.13,3V17.58A3.42,3.42,0,0,0,7.17,21a3.43,3.43,0,0,0,1.71-.46L18.54,15a3.42,3.42,0,0,0,0-5.92Zm-1,4.19L7.88,18.81a1.44,1.44,0,0,1-1.42,0,1.42,1.42,0,0,1-.71-1.23V6.42a1.42,1.42,0,0,1,.71-1.23A1.51,1.51,0,0,1,7.17,5a1.54,1.54,0,0,1,.71.19l9.66,5.58a1.42,1.42,0,0,1,0,2.46Z" />
											</svg>
										</span>
									</NuxtLink>
									<div class="item__content">
										<h3 class="item__title">
											<NuxtLink to="watching">Fierce Grace</NuxtLink>
										</h3>
										<span class="item__category">
											<NuxtLink to="#">Comedy</NuxtLink>
											<NuxtLink to="#">Drama</NuxtLink>
										</span>
										<span class="item__rate">7.9</span>
									</div>
								</div>
							</div>
							<!-- end item -->

							<!-- item -->
							<div class="col-6 col-sm-4 col-lg-3 col-xl-2">
								<div class="item">
									<NuxtLink to="watching" class="item__cover">
										<img src="/img/covers/8.png" alt="" />
										<span class="item__play">
											<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
												<path
													d="M18.54,9,8.88,3.46a3.42,3.42,0,0,0-5.13,3V17.58A3.42,3.42,0,0,0,7.17,21a3.43,3.43,0,0,0,1.71-.46L18.54,15a3.42,3.42,0,0,0,0-5.92Zm-1,4.19L7.88,18.81a1.44,1.44,0,0,1-1.42,0,1.42,1.42,0,0,1-.71-1.23V6.42a1.42,1.42,0,0,1,.71-1.23A1.51,1.51,0,0,1,7.17,5a1.54,1.54,0,0,1,.71.19l9.66,5.58a1.42,1.42,0,0,1,0,2.46Z" />
											</svg>
										</span>
									</NuxtLink>
									<div class="item__content">
										<h3 class="item__title">
											<NuxtLink to="watching">Burning Bridges</NuxtLink>
										</h3>
										<span class="item__category">
											<NuxtLink to="#">Romance</NuxtLink>
											<NuxtLink to="#">Drama</NuxtLink>
											<NuxtLink to="#">Music</NuxtLink>
										</span>
										<span class="item__rate">6.3</span>
									</div>
								</div>
							</div>
							<!-- end item -->

							<!-- item -->
							<div class="col-6 col-sm-4 col-lg-3 col-xl-2">
								<div class="item">
									<NuxtLink to="watching" class="item__cover">
										<img src="/img/covers/9.png" alt="" />
										<span class="item__play">
											<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
												<path
													d="M18.54,9,8.88,3.46a3.42,3.42,0,0,0-5.13,3V17.58A3.42,3.42,0,0,0,7.17,21a3.43,3.43,0,0,0,1.71-.46L18.54,15a3.42,3.42,0,0,0,0-5.92Zm-1,4.19L7.88,18.81a1.44,1.44,0,0,1-1.42,0,1.42,1.42,0,0,1-.71-1.23V6.42a1.42,1.42,0,0,1,.71-1.23A1.51,1.51,0,0,1,7.17,5a1.54,1.54,0,0,1,.71.19l9.66,5.58a1.42,1.42,0,0,1,0,2.46Z" />
											</svg>
										</span>
									</NuxtLink>
									<div class="item__content">
										<h3 class="item__title">
											<NuxtLink to="watching">Forbidden Love</NuxtLink>
										</h3>
										<span class="item__category">
											<NuxtLink to="#">Comedy</NuxtLink>
											<NuxtLink to="#">Drama</NuxtLink>
										</span>
										<span class="item__rate">7.9</span>
									</div>
								</div>
							</div>
							<!-- end item -->

							<!-- item -->
							<div class="col-6 col-sm-4 col-lg-3 col-xl-2">
								<div class="item">
									<NuxtLink to="watching" class="item__cover">
										<img src="/img/covers/10.png" alt="" />
										<span class="item__play">
											<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
												<path
													d="M18.54,9,8.88,3.46a3.42,3.42,0,0,0-5.13,3V17.58A3.42,3.42,0,0,0,7.17,21a3.43,3.43,0,0,0,1.71-.46L18.54,15a3.42,3.42,0,0,0,0-5.92Zm-1,4.19L7.88,18.81a1.44,1.44,0,0,1-1.42,0,1.42,1.42,0,0,1-.71-1.23V6.42a1.42,1.42,0,0,1,.71-1.23A1.51,1.51,0,0,1,7.17,5a1.54,1.54,0,0,1,.71.19l9.66,5.58a1.42,1.42,0,0,1,0,2.46Z" />
											</svg>
										</span>
									</NuxtLink>
									<div class="item__content">
										<h3 class="item__title">
											<NuxtLink to="watching">The Timekeeper's Daughter</NuxtLink>
										</h3>
										<span class="item__category">
											<NuxtLink to="#">Action</NuxtLink>
											<NuxtLink to="#">Triler</NuxtLink>
										</span>
										<span class="item__rate">8.4</span>
									</div>
								</div>
							</div>
							<!-- end item -->

							<!-- item -->
							<div class="col-6 col-sm-4 col-lg-3 col-xl-2">
								<div class="item">
									<NuxtLink to="watching" class="item__cover">
										<img src="/img/covers/11.png" alt="" />
										<span class="item__play">
											<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
												<path
													d="M18.54,9,8.88,3.46a3.42,3.42,0,0,0-5.13,3V17.58A3.42,3.42,0,0,0,7.17,21a3.43,3.43,0,0,0,1.71-.46L18.54,15a3.42,3.42,0,0,0,0-5.92Zm-1,4.19L7.88,18.81a1.44,1.44,0,0,1-1.42,0,1.42,1.42,0,0,1-.71-1.23V6.42a1.42,1.42,0,0,1,.71-1.23A1.51,1.51,0,0,1,7.17,5a1.54,1.54,0,0,1,.71.19l9.66,5.58a1.42,1.42,0,0,1,0,2.46Z" />
											</svg>
										</span>
									</NuxtLink>
									<div class="item__content">
										<h3 class="item__title">
											<NuxtLink to="watching">The Enchanted Forest</NuxtLink>
										</h3>
										<span class="item__category">
											<NuxtLink to="#">Comedy</NuxtLink>
										</span>
										<span class="item__rate">7.1</span>
									</div>
								</div>
							</div>
							<!-- end item -->

							<!-- item -->
							<div class="col-6 col-sm-4 col-lg-3 col-xl-2">
								<div class="item">
									<NuxtLink to="watching" class="item__cover">
										<img src="/img/covers/12.png" alt="" />
										<span class="item__play">
											<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
												<path
													d="M18.54,9,8.88,3.46a3.42,3.42,0,0,0-5.13,3V17.58A3.42,3.42,0,0,0,7.17,21a3.43,3.43,0,0,0,1.71-.46L18.54,15a3.42,3.42,0,0,0,0-5.92Zm-1,4.19L7.88,18.81a1.44,1.44,0,0,1-1.42,0,1.42,1.42,0,0,1-.71-1.23V6.42a1.42,1.42,0,0,1,.71-1.23A1.51,1.51,0,0,1,7.17,5a1.54,1.54,0,0,1,.71.19l9.66,5.58a1.42,1.42,0,0,1,0,2.46Z" />
											</svg>
										</span>
									</NuxtLink>
									<div class="item__content">
										<h3 class="item__title">
											<NuxtLink to="watching">Relentless</NuxtLink>
										</h3>
										<span class="item__category">
											<NuxtLink to="#">Romance</NuxtLink>
											<NuxtLink to="#">Drama</NuxtLink>
											<NuxtLink to="#">Music</NuxtLink>
										</span>
										<span class="item__rate">6.3</span>
									</div>
								</div>
							</div>
							<!-- end item -->
						</div>
					</div>

					<div id="tab-4" class="tab-pane fade" role="tabpanel" aria-labelledby="4-tab" tabindex="0">
						<div class="row">
							<!-- item -->
							<div class="col-6 col-sm-4 col-lg-3 col-xl-2">
								<div class="item">
									<NuxtLink to="watching" class="item__cover">
										<img src="/img/covers/13.png" alt="" />
										<span class="item__play">
											<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
												<path
													d="M18.54,9,8.88,3.46a3.42,3.42,0,0,0-5.13,3V17.58A3.42,3.42,0,0,0,7.17,21a3.43,3.43,0,0,0,1.71-.46L18.54,15a3.42,3.42,0,0,0,0-5.92Zm-1,4.19L7.88,18.81a1.44,1.44,0,0,1-1.42,0,1.42,1.42,0,0,1-.71-1.23V6.42a1.42,1.42,0,0,1,.71-1.23A1.51,1.51,0,0,1,7.17,5a1.54,1.54,0,0,1,.71.19l9.66,5.58a1.42,1.42,0,0,1,0,2.46Z" />
											</svg>
										</span>
									</NuxtLink>
									<div class="item__content">
										<h3 class="item__title">
											<NuxtLink to="watching">Starlight Chronicles</NuxtLink>
										</h3>
										<span class="item__category">
											<NuxtLink to="#">Romance</NuxtLink>
											<NuxtLink to="#">Drama</NuxtLink>
											<NuxtLink to="#">Music</NuxtLink>
										</span>
										<span class="item__rate">6.3</span>
									</div>
								</div>
							</div>
							<!-- end item -->

							<!-- item -->
							<div class="col-6 col-sm-4 col-lg-3 col-xl-2">
								<div class="item">
									<NuxtLink to="watching" class="item__cover">
										<img src="/img/covers/14.png" alt="" />
										<span class="item__play">
											<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
												<path
													d="M18.54,9,8.88,3.46a3.42,3.42,0,0,0-5.13,3V17.58A3.42,3.42,0,0,0,7.17,21a3.43,3.43,0,0,0,1.71-.46L18.54,15a3.42,3.42,0,0,0,0-5.92Zm-1,4.19L7.88,18.81a1.44,1.44,0,0,1-1.42,0,1.42,1.42,0,0,1-.71-1.23V6.42a1.42,1.42,0,0,1,.71-1.23A1.51,1.51,0,0,1,7.17,5a1.54,1.54,0,0,1,.71.19l9.66,5.58a1.42,1.42,0,0,1,0,2.46Z" />
											</svg>
										</span>
									</NuxtLink>
									<div class="item__content">
										<h3 class="item__title">
											<NuxtLink to="watching">Rising Sun Academy</NuxtLink>
										</h3>
										<span class="item__category">
											<NuxtLink to="#">Comedy</NuxtLink>
											<NuxtLink to="#">Drama</NuxtLink>
										</span>
										<span class="item__rate">7.9</span>
									</div>
								</div>
							</div>
							<!-- end item -->

							<!-- item -->
							<div class="col-6 col-sm-4 col-lg-3 col-xl-2">
								<div class="item">
									<NuxtLink to="watching" class="item__cover">
										<img src="/img/covers/15.png" alt="" />
										<span class="item__play">
											<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
												<path
													d="M18.54,9,8.88,3.46a3.42,3.42,0,0,0-5.13,3V17.58A3.42,3.42,0,0,0,7.17,21a3.43,3.43,0,0,0,1.71-.46L18.54,15a3.42,3.42,0,0,0,0-5.92Zm-1,4.19L7.88,18.81a1.44,1.44,0,0,1-1.42,0,1.42,1.42,0,0,1-.71-1.23V6.42a1.42,1.42,0,0,1,.71-1.23A1.51,1.51,0,0,1,7.17,5a1.54,1.54,0,0,1,.71.19l9.66,5.58a1.42,1.42,0,0,1,0,2.46Z" />
											</svg>
										</span>
									</NuxtLink>
									<div class="item__content">
										<h3 class="item__title">
											<NuxtLink to="watching">Eternal Bonds</NuxtLink>
										</h3>
										<span class="item__category">
											<NuxtLink to="#">Action</NuxtLink>
											<NuxtLink to="#">Triler</NuxtLink>
										</span>
										<span class="item__rate">8.4</span>
									</div>
								</div>
							</div>
							<!-- end item -->

							<!-- item -->
							<div class="col-6 col-sm-4 col-lg-3 col-xl-2">
								<div class="item">
									<NuxtLink to="watching" class="item__cover">
										<img src="/img/covers/16.png" alt="" />
										<span class="item__play">
											<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
												<path
													d="M18.54,9,8.88,3.46a3.42,3.42,0,0,0-5.13,3V17.58A3.42,3.42,0,0,0,7.17,21a3.43,3.43,0,0,0,1.71-.46L18.54,15a3.42,3.42,0,0,0,0-5.92Zm-1,4.19L7.88,18.81a1.44,1.44,0,0,1-1.42,0,1.42,1.42,0,0,1-.71-1.23V6.42a1.42,1.42,0,0,1,.71-1.23A1.51,1.51,0,0,1,7.17,5a1.54,1.54,0,0,1,.71.19l9.66,5.58a1.42,1.42,0,0,1,0,2.46Z" />
											</svg>
										</span>
									</NuxtLink>
									<div class="item__content">
										<h3 class="item__title">
											<NuxtLink to="watching">Chronicles of the Elements</NuxtLink>
										</h3>
										<span class="item__category">
											<NuxtLink to="#">Comedy</NuxtLink>
										</span>
										<span class="item__rate">7.1</span>
									</div>
								</div>
							</div>
							<!-- end item -->

							<!-- item -->
							<div class="col-6 col-sm-4 col-lg-3 col-xl-2">
								<div class="item">
									<NuxtLink to="watching" class="item__cover">
										<img src="/img/covers/17.png" alt="" />
										<span class="item__play">
											<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
												<path
													d="M18.54,9,8.88,3.46a3.42,3.42,0,0,0-5.13,3V17.58A3.42,3.42,0,0,0,7.17,21a3.43,3.43,0,0,0,1.71-.46L18.54,15a3.42,3.42,0,0,0,0-5.92Zm-1,4.19L7.88,18.81a1.44,1.44,0,0,1-1.42,0,1.42,1.42,0,0,1-.71-1.23V6.42a1.42,1.42,0,0,1,.71-1.23A1.51,1.51,0,0,1,7.17,5a1.54,1.54,0,0,1,.71.19l9.66,5.58a1.42,1.42,0,0,1,0,2.46Z" />
											</svg>
										</span>
									</NuxtLink>
									<div class="item__content">
										<h3 class="item__title">
											<NuxtLink to="watching">Fantasia Journey</NuxtLink>
										</h3>
										<span class="item__category">
											<NuxtLink to="#">Action</NuxtLink>
											<NuxtLink to="#">Triler</NuxtLink>
										</span>
										<span class="item__rate">8.4</span>
									</div>
								</div>
							</div>
							<!-- end item -->

							<!-- item -->
							<div class="col-6 col-sm-4 col-lg-3 col-xl-2">
								<div class="item">
									<NuxtLink to="watching" class="item__cover">
										<img src="/img/covers/18.png" alt="" />
										<span class="item__play">
											<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
												<path
													d="M18.54,9,8.88,3.46a3.42,3.42,0,0,0-5.13,3V17.58A3.42,3.42,0,0,0,7.17,21a3.43,3.43,0,0,0,1.71-.46L18.54,15a3.42,3.42,0,0,0,0-5.92Zm-1,4.19L7.88,18.81a1.44,1.44,0,0,1-1.42,0,1.42,1.42,0,0,1-.71-1.23V6.42a1.42,1.42,0,0,1,.71-1.23A1.51,1.51,0,0,1,7.17,5a1.54,1.54,0,0,1,.71.19l9.66,5.58a1.42,1.42,0,0,1,0,2.46Z" />
											</svg>
										</span>
									</NuxtLink>
									<div class="item__content">
										<h3 class="item__title">
											<NuxtLink to="watching">Phoenix's Destiny</NuxtLink>
										</h3>
										<span class="item__category">
											<NuxtLink to="#">Comedy</NuxtLink>
										</span>
										<span class="item__rate">7.1</span>
									</div>
								</div>
							</div>
							<!-- end item -->

							<!-- item -->
							<div class="col-6 col-sm-4 col-lg-3 col-xl-2">
								<div class="item">
									<NuxtLink to="watching" class="item__cover">
										<img src="/img/covers/1.png" alt="" />
										<span class="item__play">
											<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
												<path
													d="M18.54,9,8.88,3.46a3.42,3.42,0,0,0-5.13,3V17.58A3.42,3.42,0,0,0,7.17,21a3.43,3.43,0,0,0,1.71-.46L18.54,15a3.42,3.42,0,0,0,0-5.92Zm-1,4.19L7.88,18.81a1.44,1.44,0,0,1-1.42,0,1.42,1.42,0,0,1-.71-1.23V6.42a1.42,1.42,0,0,1,.71-1.23A1.51,1.51,0,0,1,7.17,5a1.54,1.54,0,0,1,.71.19l9.66,5.58a1.42,1.42,0,0,1,0,2.46Z" />
											</svg>
										</span>
									</NuxtLink>
									<div class="item__content">
										<h3 class="item__title">
											<NuxtLink to="watching">Guardians of the Lost City</NuxtLink>
										</h3>
										<span class="item__category">
											<NuxtLink to="#">Romance</NuxtLink>
											<NuxtLink to="#">Drama</NuxtLink>
											<NuxtLink to="#">Music</NuxtLink>
										</span>
										<span class="item__rate">6.3</span>
									</div>
								</div>
							</div>
							<!-- end item -->

							<!-- item -->
							<div class="col-6 col-sm-4 col-lg-3 col-xl-2">
								<div class="item">
									<NuxtLink to="watching" class="item__cover">
										<img src="/img/covers/2.png" alt="" />
										<span class="item__play">
											<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
												<path
													d="M18.54,9,8.88,3.46a3.42,3.42,0,0,0-5.13,3V17.58A3.42,3.42,0,0,0,7.17,21a3.43,3.43,0,0,0,1.71-.46L18.54,15a3.42,3.42,0,0,0,0-5.92Zm-1,4.19L7.88,18.81a1.44,1.44,0,0,1-1.42,0,1.42,1.42,0,0,1-.71-1.23V6.42a1.42,1.42,0,0,1,.71-1.23A1.51,1.51,0,0,1,7.17,5a1.54,1.54,0,0,1,.71.19l9.66,5.58a1.42,1.42,0,0,1,0,2.46Z" />
											</svg>
										</span>
									</NuxtLink>
									<div class="item__content">
										<h3 class="item__title">
											<NuxtLink to="watching">Divine Intervention</NuxtLink>
										</h3>
										<span class="item__category">
											<NuxtLink to="#">Comedy</NuxtLink>
											<NuxtLink to="#">Drama</NuxtLink>
										</span>
										<span class="item__rate">7.9</span>
									</div>
								</div>
							</div>
							<!-- end item -->

							<!-- item -->
							<div class="col-6 col-sm-4 col-lg-3 col-xl-2">
								<div class="item">
									<NuxtLink to="watching" class="item__cover">
										<img src="/img/covers/3.png" alt="" />
										<span class="item__play">
											<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
												<path
													d="M18.54,9,8.88,3.46a3.42,3.42,0,0,0-5.13,3V17.58A3.42,3.42,0,0,0,7.17,21a3.43,3.43,0,0,0,1.71-.46L18.54,15a3.42,3.42,0,0,0,0-5.92Zm-1,4.19L7.88,18.81a1.44,1.44,0,0,1-1.42,0,1.42,1.42,0,0,1-.71-1.23V6.42a1.42,1.42,0,0,1,.71-1.23A1.51,1.51,0,0,1,7.17,5a1.54,1.54,0,0,1,.71.19l9.66,5.58a1.42,1.42,0,0,1,0,2.46Z" />
											</svg>
										</span>
									</NuxtLink>
									<div class="item__content">
										<h3 class="item__title">
											<NuxtLink to="watching">Infinite Horizon</NuxtLink>
										</h3>
										<span class="item__category">
											<NuxtLink to="#">Romance</NuxtLink>
											<NuxtLink to="#">Drama</NuxtLink>
											<NuxtLink to="#">Music</NuxtLink>
										</span>
										<span class="item__rate">6.3</span>
									</div>
								</div>
							</div>
							<!-- end item -->

							<!-- item -->
							<div class="col-6 col-sm-4 col-lg-3 col-xl-2">
								<div class="item">
									<NuxtLink to="watching" class="item__cover">
										<img src="/img/covers/4.png" alt="" />
										<span class="item__play">
											<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
												<path
													d="M18.54,9,8.88,3.46a3.42,3.42,0,0,0-5.13,3V17.58A3.42,3.42,0,0,0,7.17,21a3.43,3.43,0,0,0,1.71-.46L18.54,15a3.42,3.42,0,0,0,0-5.92Zm-1,4.19L7.88,18.81a1.44,1.44,0,0,1-1.42,0,1.42,1.42,0,0,1-.71-1.23V6.42a1.42,1.42,0,0,1,.71-1.23A1.51,1.51,0,0,1,7.17,5a1.54,1.54,0,0,1,.71.19l9.66,5.58a1.42,1.42,0,0,1,0,2.46Z" />
											</svg>
										</span>
									</NuxtLink>
									<div class="item__content">
										<h3 class="item__title">
											<NuxtLink to="watching">Beyond the Stars</NuxtLink>
										</h3>
										<span class="item__category">
											<NuxtLink to="#">Comedy</NuxtLink>
											<NuxtLink to="#">Drama</NuxtLink>
										</span>
										<span class="item__rate">7.9</span>
									</div>
								</div>
							</div>
							<!-- end item -->

							<!-- item -->
							<div class="col-6 col-sm-4 col-lg-3 col-xl-2">
								<div class="item">
									<NuxtLink to="watching" class="item__cover">
										<img src="/img/covers/5.png" alt="" />
										<span class="item__play">
											<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
												<path
													d="M18.54,9,8.88,3.46a3.42,3.42,0,0,0-5.13,3V17.58A3.42,3.42,0,0,0,7.17,21a3.43,3.43,0,0,0,1.71-.46L18.54,15a3.42,3.42,0,0,0,0-5.92Zm-1,4.19L7.88,18.81a1.44,1.44,0,0,1-1.42,0,1.42,1.42,0,0,1-.71-1.23V6.42a1.42,1.42,0,0,1,.71-1.23A1.51,1.51,0,0,1,7.17,5a1.54,1.54,0,0,1,.71.19l9.66,5.58a1.42,1.42,0,0,1,0,2.46Z" />
											</svg>
										</span>
									</NuxtLink>
									<div class="item__content">
										<h3 class="item__title">
											<NuxtLink to="watching">Shadows of the Past</NuxtLink>
										</h3>
										<span class="item__category">
											<NuxtLink to="#">Action</NuxtLink>
											<NuxtLink to="#">Triler</NuxtLink>
										</span>
										<span class="item__rate">8.4</span>
									</div>
								</div>
							</div>
							<!-- end item -->

							<!-- item -->
							<div class="col-6 col-sm-4 col-lg-3 col-xl-2">
								<div class="item">
									<NuxtLink to="watching" class="item__cover">
										<img src="/img/covers/6.png" alt="" />
										<span class="item__play">
											<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
												<path
													d="M18.54,9,8.88,3.46a3.42,3.42,0,0,0-5.13,3V17.58A3.42,3.42,0,0,0,7.17,21a3.43,3.43,0,0,0,1.71-.46L18.54,15a3.42,3.42,0,0,0,0-5.92Zm-1,4.19L7.88,18.81a1.44,1.44,0,0,1-1.42,0,1.42,1.42,0,0,1-.71-1.23V6.42a1.42,1.42,0,0,1,.71-1.23A1.51,1.51,0,0,1,7.17,5a1.54,1.54,0,0,1,.71.19l9.66,5.58a1.42,1.42,0,0,1,0,2.46Z" />
											</svg>
										</span>
									</NuxtLink>
									<div class="item__content">
										<h3 class="item__title">
											<NuxtLink to="watching">Wings of Freedom</NuxtLink>
										</h3>
										<span class="item__category">
											<NuxtLink to="#">Comedy</NuxtLink>
										</span>
										<span class="item__rate">7.1</span>
									</div>
								</div>
							</div>
							<!-- end item -->
						</div>
					</div>
				</div>
				<!-- end content tabs -->

				<div class="row">
					<div class="col-12">
						<NuxtLink to="catalog" class="section__btn"><span>Katalog</span></NuxtLink>
					</div>
				</div>
			</div>
		</section>
		<!-- end content -->

		<!-- now watching -->
		<section class="section section--dark">
			<div class="container">
				<div class="row">
					<!-- section title -->
					<div class="col-12">
						<h2 class="section__title section__title--carousel">
							Ko'p ko'rilgan
						</h2>
					</div>
					<!-- end section title -->

					<!-- carousel -->
					<div class="col-12">
						<div class="section__carousel splide splide--content">
							<div class="splide__arrows">
								<button class="splide__arrow splide__arrow--prev" type="button">
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
										<path
											d="M17,11H9.41l3.3-3.29a1,1,0,1,0-1.42-1.42l-5,5a1,1,0,0,0-.21.33,1,1,0,0,0,0,.76,1,1,0,0,0,.21.33l5,5a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42L9.41,13H17a1,1,0,0,0,0-2Z" />
									</svg>
								</button>
								<button class="splide__arrow splide__arrow--next" type="button">
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
										<path
											d="M17.92,11.62a1,1,0,0,0-.21-.33l-5-5a1,1,0,0,0-1.42,1.42L14.59,11H7a1,1,0,0,0,0,2h7.59l-3.3,3.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l5-5a1,1,0,0,0,.21-.33A1,1,0,0,0,17.92,11.62Z" />
									</svg>
								</button>
							</div>

							<div class="splide__track">
								<ul class="splide__list">
									<li class="splide__slide">
										<div class="item item--carousel">
											<NuxtLink to="watching" class="item__cover">
												<img src="img/covers/7.png" alt="" />
												<span class="item__play">
													<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
														<path
															d="M18.54,9,8.88,3.46a3.42,3.42,0,0,0-5.13,3V17.58A3.42,3.42,0,0,0,7.17,21a3.43,3.43,0,0,0,1.71-.46L18.54,15a3.42,3.42,0,0,0,0-5.92Zm-1,4.19L7.88,18.81a1.44,1.44,0,0,1-1.42,0,1.42,1.42,0,0,1-.71-1.23V6.42a1.42,1.42,0,0,1,.71-1.23A1.51,1.51,0,0,1,7.17,5a1.54,1.54,0,0,1,.71.19l9.66,5.58a1.42,1.42,0,0,1,0,2.46Z" />
													</svg>
												</span>
											</NuxtLink>
											<div class="item__content">
												<h3 class="item__title">
													<NuxtLink to="watching">I Dream in Another Language</NuxtLink>
												</h3>
												<span class="item__category">
													<NuxtLink to="#">Action</NuxtLink>
													<NuxtLink to="#">Triler</NuxtLink>
												</span>
												<span class="item__rate">8.4</span>
											</div>
										</div>
									</li>

									<li class="splide__slide">
										<div class="item item--carousel">
											<NuxtLink to="watching" class="item__cover">
												<img src="img/covers/8.png" alt="" />
												<span class="item__play">
													<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
														<path
															d="M18.54,9,8.88,3.46a3.42,3.42,0,0,0-5.13,3V17.58A3.42,3.42,0,0,0,7.17,21a3.43,3.43,0,0,0,1.71-.46L18.54,15a3.42,3.42,0,0,0,0-5.92Zm-1,4.19L7.88,18.81a1.44,1.44,0,0,1-1.42,0,1.42,1.42,0,0,1-.71-1.23V6.42a1.42,1.42,0,0,1,.71-1.23A1.51,1.51,0,0,1,7.17,5a1.54,1.54,0,0,1,.71.19l9.66,5.58a1.42,1.42,0,0,1,0,2.46Z" />
													</svg>
												</span>
											</NuxtLink>
											<div class="item__content">
												<h3 class="item__title">
													<NuxtLink to="watching">Undercurrents</NuxtLink>
												</h3>
												<span class="item__category">
													<NuxtLink to="#">Comedy</NuxtLink>
												</span>
												<span class="item__rate">7.1</span>
											</div>
										</div>
									</li>

									<li class="splide__slide">
										<div class="item item--carousel">
											<NuxtLink to="watching" class="item__cover">
												<img src="/img/covers/9.png" alt="" />
												<span class="item__play">
													<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
														<path
															d="M18.54,9,8.88,3.46a3.42,3.42,0,0,0-5.13,3V17.58A3.42,3.42,0,0,0,7.17,21a3.43,3.43,0,0,0,1.71-.46L18.54,15a3.42,3.42,0,0,0,0-5.92Zm-1,4.19L7.88,18.81a1.44,1.44,0,0,1-1.42,0,1.42,1.42,0,0,1-.71-1.23V6.42a1.42,1.42,0,0,1,.71-1.23A1.51,1.51,0,0,1,7.17,5a1.54,1.54,0,0,1,.71.19l9.66,5.58a1.42,1.42,0,0,1,0,2.46Z" />
													</svg>
												</span>
											</NuxtLink>
											<div class="item__content">
												<h3 class="item__title">
													<NuxtLink to="watching">Tales from the Underworld</NuxtLink>
												</h3>
												<span class="item__category">
													<NuxtLink to="#">Romance</NuxtLink>
													<NuxtLink to="#">Drama</NuxtLink>
													<NuxtLink to="#">Music</NuxtLink>
												</span>
												<span class="item__rate">6.3</span>
											</div>
										</div>
									</li>

									<li class="splide__slide">
										<div class="item item--carousel">
											<NuxtLink to="watching" class="item__cover">
												<img src="/img/covers/10.png" alt="" />
												<span class="item__play">
													<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
														<path
															d="M18.54,9,8.88,3.46a3.42,3.42,0,0,0-5.13,3V17.58A3.42,3.42,0,0,0,7.17,21a3.43,3.43,0,0,0,1.71-.46L18.54,15a3.42,3.42,0,0,0,0-5.92Zm-1,4.19L7.88,18.81a1.44,1.44,0,0,1-1.42,0,1.42,1.42,0,0,1-.71-1.23V6.42a1.42,1.42,0,0,1,.71-1.23A1.51,1.51,0,0,1,7.17,5a1.54,1.54,0,0,1,.71.19l9.66,5.58a1.42,1.42,0,0,1,0,2.46Z" />
													</svg>
												</span>
											</NuxtLink>
											<div class="item__content">
												<h3 class="item__title">
													<NuxtLink to="watching">Savage Beauty</NuxtLink>
												</h3>
												<span class="item__category">
													<NuxtLink to="#">Comedy</NuxtLink>
													<NuxtLink to="#">Drama</NuxtLink>
												</span>
												<span class="item__rate">7.9</span>
											</div>
										</div>
									</li>

									<li class="splide__slide">
										<div class="item item--carousel">
											<NuxtLink to="watching" class="item__cover">
												<img src="/img/covers/11.png" alt="" />
												<span class="item__play">
													<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
														<path
															d="M18.54,9,8.88,3.46a3.42,3.42,0,0,0-5.13,3V17.58A3.42,3.42,0,0,0,7.17,21a3.43,3.43,0,0,0,1.71-.46L18.54,15a3.42,3.42,0,0,0,0-5.92Zm-1,4.19L7.88,18.81a1.44,1.44,0,0,1-1.42,0,1.42,1.42,0,0,1-.71-1.23V6.42a1.42,1.42,0,0,1,.71-1.23A1.51,1.51,0,0,1,7.17,5a1.54,1.54,0,0,1,.71.19l9.66,5.58a1.42,1.42,0,0,1,0,2.46Z" />
													</svg>
												</span>
											</NuxtLink>
											<div class="item__content">
												<h3 class="item__title">
													<NuxtLink to="watching">The Unseen Journey</NuxtLink>
												</h3>
												<span class="item__category">
													<NuxtLink to="#">Action</NuxtLink>
													<NuxtLink to="#">Triler</NuxtLink>
												</span>
												<span class="item__rate">8.4</span>
											</div>
										</div>
									</li>

									<li class="splide__slide">
										<div class="item item--carousel">
											<NuxtLink to="watching" class="item__cover">
												<img src="/img/covers/12.png" alt="" />
												<span class="item__play">
													<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
														<path
															d="M18.54,9,8.88,3.46a3.42,3.42,0,0,0-5.13,3V17.58A3.42,3.42,0,0,0,7.17,21a3.43,3.43,0,0,0,1.71-.46L18.54,15a3.42,3.42,0,0,0,0-5.92Zm-1,4.19L7.88,18.81a1.44,1.44,0,0,1-1.42,0,1.42,1.42,0,0,1-.71-1.23V6.42a1.42,1.42,0,0,1,.71-1.23A1.51,1.51,0,0,1,7.17,5a1.54,1.54,0,0,1,.71.19l9.66,5.58a1.42,1.42,0,0,1,0,2.46Z" />
													</svg>
												</span>
											</NuxtLink>
											<div class="item__content">
												<h3 class="item__title">
													<NuxtLink to="watching">Endless Horizon</NuxtLink>
												</h3>
												<span class="item__category">
													<NuxtLink to="#">Comedy</NuxtLink>
												</span>
												<span class="item__rate">7.1</span>
											</div>
										</div>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<!-- end carousel -->
				</div>
			</div>
		</section>
		<!-- end now watching -->

		<!-- pricing plans -->
		<section class="section">
			<div class="container">
				<div class="row">
					<!-- section title -->
					<div class="col-12">
						<h2 class="section__title">Tarifni tanlang</h2>
					</div>
					<!-- end section title -->
				</div>

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
		</section>
		<!-- end pricing plans -->

		<!-- partners -->
		<section class="section section--bt">
			<div class="container">
				<div class="row">
					<!-- section title -->
					<div class="col-12 col-xl-10">
						<h2 class="section__title">Bizning hamkorlarimiz</h2>

						<p class="section__text">
							Biz hamkorlarimiz bilan uzoq muddatli hamkorlikka intilamiz va
							jamoamiz har doim tayyor. Uchrashish va o'zaro manfaatlar uchun
							yangi imkoniyatlarni ko'rib chiqish. Agar siz bizning hamkorimiz
							bo'lishni istasangiz, biz har doim yangi takliflarga ochiq va
							sizdan xabar kutib qolamiz.
							<NuxtLink to="contacts">Hamkor bo'ling</NuxtLink>
						</p>
					</div>
					<!-- end section text -->
				</div>

				<div class="row">
					<div class="col-12">
						<div class="partners">
							<NuxtLink to="#" class="partners__item">
								<img src="/img/partners/themeforest-light-background.png" alt="" />
							</NuxtLink>

							<NuxtLink to="#" class="partners__item">
								<img src="/img/partners/audiojungle-light-background.png" alt="" />
							</NuxtLink>

							<NuxtLink to="#" class="partners__item">
								<img src="/img/partners/codecanyon-light-background.png" alt="" />
							</NuxtLink>

							<NuxtLink to="#" class="partners__item">
								<img src="/img/partners/photodune-light-background.png" alt="" />
							</NuxtLink>

							<NuxtLink to="#" class="partners__item partners__item--prelast">
								<img src="/img/partners/activeden-light-background.png" alt="" />
							</NuxtLink>

							<NuxtLink to="#" class="partners__item partners__item--last">
								<img src="/img/partners/3docean-light-background.png" alt="" />
							</NuxtLink>
						</div>
					</div>
				</div>
			</div>
		</section>
		<!-- end partners -->
		<!-- plan modal -->
		<div id="plan-modal" class="modal fade" tabindex="-1" aria-labelledby="plan-modal" aria-hidden="true">
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
								<select id="value" class="sign__select" name="value">
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
	name: 'IndexPage',
	mounted() {
		if (document.querySelector('.hero__slide')) {
			document.querySelectorAll('.hero__slide').forEach(function (element) {
				if (element.getAttribute('data-bg')) {
					element.style.background =
						'url(' + element.getAttribute('data-bg') + ')'
					element.style.backgroundPosition = 'center center'
					element.style.backgroundRepeat = 'no-repeat'
					element.style.backgroundSize = 'cover'
				}
			})
		}
		if (document.querySelector('.home__carousel')) {
			new Splide('.home__carousel', {
				type: 'loop',
				perPage: 5,
				drag: true,
				pagination: false,
				autoWidth: false,
				autoHeight: false,
				speed: 800,
				gap: 32,
				arrows: false,
				focus: 0,
				breakpoints: {
					575: {
						gap: 24,
						pagination: true,
						arrows: false,
						perPage: 2,
					},
					767: {
						gap: 24,
						pagination: true,
						arrows: false,
						perPage: 3,
					},
					991: {
						pagination: true,
						arrows: false,
						perPage: 3,
						gap: 24,
					},
					1199: {
						pagination: true,
						arrows: false,
						perPage: 4,
						gap: 24,
					},
					1399: {
						pagination: true,
						arrows: false,
						perPage: 5,
						gap: 24,
					},
				},
			}).mount()
		}

		if (document.querySelector('.hero')) {
			new Splide('.hero', {
				type: 'loop',
				perPage: 1,
				drag: true,
				pagination: true,
				speed: 1200,
				gap: 24,
				arrows: true,
				focus: 0,
				breakpoints: {
					767: {
						gap: 20,
					},
					1199: {
						gap: 24,
					},
				},
			}).mount()
		}

		if (document.querySelector('.section__roadmap')) {
			const elms = document.getElementsByClassName('section__roadmap')
			for (let i = 0; i < elms.length; i++) {
				new Splide(elms[i], {
					type: 'loop',
					perPage: 3,
					drag: true,
					pagination: false,
					autoWidth: false,
					autoHeight: true,
					speed: 800,
					gap: 30,
					arrows: false,
					focus: 0,
					breakpoints: {
						767: {
							gap: 20,
							pagination: true,
							arrows: false,
							perPage: 1,
						},
						991: {
							pagination: true,
							arrows: false,
							perPage: 2,
						},
						1199: {
							pagination: true,
							arrows: false,
							perPage: 3,
						},
					},
				}).mount()
			}
		}
		if (document.querySelector('.section__carousel')) {
			const elms = document.getElementsByClassName('section__carousel')

			for (let i = 0; i < elms.length; i++) {
				new Splide(elms[i], {
					type: 'loop',
					perPage: 6,
					drag: true,
					pagination: false,
					autoWidth: false,
					autoHeight: false,
					speed: 800,
					gap: 24,
					arrows: true,
					focus: 0,
					breakpoints: {
						575: {
							gap: 24,
							pagination: true,
							perPage: 2,
						},
						767: {
							gap: 24,
							pagination: true,
							perPage: 3,
						},
						991: {
							pagination: true,
							perPage: 3,
							gap: 24,
						},
						1199: {
							pagination: true,
							perPage: 4,
							gap: 24,
						},
					},
				}).mount()
			}
		}
	},
}
</script>
