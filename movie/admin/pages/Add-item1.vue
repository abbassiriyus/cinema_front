<template>
	<!-- main content -->
	<main class="main">
		<div class="container-fluid">
			<div class="row">
				<!-- main title -->
				<div class="col-12">
					<div class="main__title">
						<h2>Yangi Janr va Tarjimon qo'shish</h2>
					</div>
				</div>
				<!-- end main title -->

				<!-- form -->
				<div class="col-12">
					<form action="#" class="sign__form sign__form--add">
						<div class="row">
							<div class="col-12 col-xl-7">
								<div class="row">
									<div class="col-12">
										<div class="sign__group">
											<input id="janr_title" type="text" class="sign__input" placeholder="Janr nomi">
										</div>
									</div>
								</div>
							</div>

							<div class="col-12">
								<button @click="CinemaJanrPost()" type="button"
									class="sign__btn sign__btn--small"><span>JOYLASH</span></button>
							</div>
						</div>
					</form>
				</div>
                <div class="col-12">
					<form action="#" class="sign__form sign__form--add">
						<div class="row">
							<div class="col-12 col-xl-7">
								<div class="row">
									<div class="col-12">
										<div class="sign__group">
											<input id="tarjimon_title" type="text" class="sign__input" placeholder="Tarjimon nomi">
										</div>
									</div>
								</div>
							</div>

							<div class="col-12">
								<button @click="CinemaTarjimonPost()" type="button"
									class="sign__btn sign__btn--small"><span>JOYLASH</span></button>
							</div>
						</div>
					</form>
				</div>
				<!-- end form -->
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
	</main>
	<!-- end main content -->
</template>


<style></style>

<script>
import axios from 'axios';

export default {
	name: "AddItemPage",

	data() {
		return {
			janr: [],
			tarjima: [],
			mavsum: [1],
			number: 1,
			tarjima_cinema: [],
			janr_cinema: [],
			image_cinema: [],
		}
	},

	mounted() {
		/* add page */

		axios.get('https://api.uzdub.uz/api/v1/janr').then(res => {
			this.janr = res.data
            const Filter=res.data.filter(item=>item.id==sessionStorage.getItem("janrId"))
            Filter.map(item=>{
                document.querySelector("#janr_title").value=item.title
            })
		})
		axios.get('https://api.uzdub.uz/api/v1/tarjima').then(res => {
			this.tarjima = res.data
            const Filter=res.data.filter(item=>item.id==sessionStorage.getItem("tarjimonId"))
            Filter.map(item=>{
                document.querySelector("#tarjimon_title").value=item.full_name
            })
		})


	},
	methods: {
		CinemaJanrPost() {
        if(!sessionStorage.getItem("janrId")){
        var formdata=new FormData()
        formdata.append("title",document.querySelector("#janr_title").value)
        axios.post('https://api.uzdub.uz/api/v1/janr',formdata).then(res=>{
         document.querySelector("#alert_modal").style="display:block;"
         document.querySelector("#alert_text").innerHTML="Janr qo'shildi"
         setTimeout(() => {
         window.location.reload()
         }, 1000);
        }).catch(err=>{
            console.log(err);
        })
        }else{
        var formdata=new FormData()
        formdata.append("title",document.querySelector("#janr_title").value)
        axios.put(`https://api.uzdub.uz/api/v1/janr/${sessionStorage.getItem("janrId")}`,formdata).then(res=>{
         document.querySelector("#alert_modal").style="display:block;"
         document.querySelector("#alert_text").innerHTML="Janr o'zgartirildi"
         setTimeout(() => {
         window.location.reload()
         }, 1000);
        }).catch(err=>{
            console.log(err);
        })
        }
		},
        CinemaTarjimonPost() {
        if(!sessionStorage.getItem("tarjimonId")){
            var formdata=new FormData()
        formdata.append("full_name",document.querySelector("#tarjimon_title").value)
        axios.post('https://api.uzdub.uz/api/v1/tarjima',formdata).then(res=>{
         document.querySelector("#alert_modal").style="display:block;"
         document.querySelector("#alert_text").innerHTML="Tarjimon qo'shildi"
         setTimeout(() => {
            window.location.reload()
         }, 1000);
        }).catch(err=>{
            console.log(err);
        })
        }else{
            var formdata=new FormData()
        formdata.append("full_name",document.querySelector("#tarjimon_title").value)
        axios.put(`https://api.uzdub.uz/api/v1/tarjima/${sessionStorage.getItem("tarjimonId")}`,formdata).then(res=>{
         document.querySelector("#alert_modal").style="display:block;"
         document.querySelector("#alert_text").innerHTML="Tarjimon o'zgartirildi"
         setTimeout(() => {
         window.location.reload()
         }, 1000);
        }).catch(err=>{
            console.log(err);
        })
        }
		},
		AlertNone() {
			document.querySelector("#alert_modal").style = "display:none"
		}

	}
}
</script>