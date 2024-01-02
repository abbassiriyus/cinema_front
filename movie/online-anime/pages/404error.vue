<template>
	<!-- page 404 -->
	<div class="page-404 section--bg" data-bg="img/bg/section__bg.jpg">
		<div class="container">
			<div class="row">
				<div class="col-12">
					<div class="page-404__wrap">
						<div class="page-404__content">
							<h1 class="page-404__title">404</h1>
							<p class="page-404__text">Siz qidirayotgan sahifa mavjud emas!</p>
							<NuxtLink to="/" class="page-404__btn"><span>Go back</span></NuxtLink>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<!-- end page 404 -->
</template>

<script>
export default {
	name: 'ErrorPage',

	mounted() {
		if (document.querySelector('.section--bg')) {
			var mainBg = document.querySelector('.section--bg')

			if (mainBg.getAttribute('data-bg')) {
				mainBg.style.background = `url(${mainBg.getAttribute('data-bg')})`
				mainBg.style.backgroundPosition = 'center center'
				mainBg.style.backgroundRepeat = 'no-repeat'
				mainBg.style.backgroundSize = 'cover'
			}
		}
	},
}
</script>
