<template>
	<div>
	<div id="home_anime">
		<div style="min-height: 70px; width: 100%;"></div>
		<Header />
		<nav>
			<Nuxt />
		</nav>
		<Footer />
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
<script src="//code.jivo.ru/widget/LInicwK8BK" async></script>
<script>
import axios from "axios"
export default {
	name: 'DefaultLayout',

	mounted() {
		this.get()
	},
	methods: {
		get(){
			var a=localStorage.getItem("user_data")?JSON.parse(localStorage.getItem("user_data")).id:""
			var b=localStorage.getItem("user_data")?JSON.parse(localStorage.getItem("user_data")).token:"" 

			axios.get("https://api.uzdub.uz/users").then(res=>{
				const Filter=res.data.filter(item=>item.id==a)
				if(Filter[0].pan){
					document.querySelector("#home_anime").style="display:block"
				}else{
					document.querySelector("#home_anime").style="display:none"
					document.querySelector("#alert_modal").style="display:block"
					document.querySelector("#alert_text").innerHTML="Siz admin tomondan ban oldingiz!"
				}
				if(Filter[0].token!=b){
					localStorage.clear()
					window.location="Signin"
					// setTimeout(() => {
					// document.querySelector("#alert_modal").style="display:block"
					// document.querySelector("#alert_text").innerHTML="Siz akkauntingizdan boshqa odam kirdi!"
					// }, 1000);
				}
			})
		},
		AlertNone() {
			document.querySelector("#alert_modal").style = "display:none"
		}
	},
}
</script>
