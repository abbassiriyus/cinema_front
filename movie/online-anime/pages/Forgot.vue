<template>
	<div>
		<div class="sign section--bg" data-bg="img/bg/section__bg.jpg">
			<div class="container">
				<div class="row">
					<div class="col-12">
						<div class="sign__content">
							<!-- authorization form -->
							<form action="#" class="sign__form">
								<NuxtLink to="" class="sign__logo">
									<img src="img/logo.svg" alt="" />
								</NuxtLink>

								<div class="sign__group">
									<input type="text" class="sign__input" id="email_input" placeholder="Email" />
								</div>

								<div class="sign__group sign__group--checkbox">
									<input id="remember" name="remember" type="checkbox" checked="checked" />
									<label for="remember">Men
										<NuxtLink to="">Maxfiylik siyosatiga</NuxtLink>
										roziman
									</label>
								</div>

								<button @click="EmailPost()" class="sign__btn" type="button">
									<span>Qayta tiklash</span>
								</button>

								<span class="sign__text">Biz sizning elektron pochtangizga parol yuboramiz</span>
							</form>
							<!-- end authorization form -->
						</div>
					</div>
				</div>
			</div>
		</div>
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
import axios from "axios"
export default {
	name: 'Forgot',

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
	methods: {
		EmailPost() {
			var formdata = new FormData()
			formdata.append('email', document.querySelector("#email_input").value)
			axios.post('https://api.uzdub.uz/send-email', formdata).then(res => {
				document.querySelector("#alert_modal").style = "display:block"
				setTimeout(() => {
					document.querySelector('#alert_modal').style = 'display:none'
				}, 3000)
				document.querySelector("#alert_text").innerHTML = "Emailga parolingiz yuborildi"
			}).catch(err => {
				document.querySelector("#alert_modal").style = "display:block"
				setTimeout(() => {
					document.querySelector('#alert_modal').style = 'display:none'
				}, 3000)
				document.querySelector("#alert_text").innerHTML = "Emailga parolingiz yuborilmadi"
			})
		},
		AlertNone() {
			document.querySelector("#alert_modal").style = "display:none"
		}
	}
}
</script>
