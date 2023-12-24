<template>
	<!-- main content -->
	<main class="main">
		<div class="container-fluid">
			<div class="row">
				<!-- main title -->
				<div class="col-12">
					<div class="main__title">
						<h2>Yandi Anime qo'shish</h2>
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
											<input id="cinema_title" type="text" class="sign__input" placeholder="Nomi">
										</div>
									</div>

									<div class="col-12">
										<div class="sign__group">
											<textarea id="cinema_text" name="text" class="sign__textarea" placeholder="Tavsif"></textarea>
										</div>
									</div>
									<div class="col-12">
										<div class="sign__group">
											<div class="sign__gallery">
												<label id="gallery1" for="sign__gallery-upload">Muqova yuklash (240x340)</label>
												<input id="sign__gallery-upload" data-name="#gallery1" name="gallery" class="sign__gallery-upload"
													type="file" accert="">
											</div>
										</div>
									</div>
									<div class="col-12 col-xl-6">
										<div class="sign__group">
											<input id="cinema_year" type="text" class="sign__input" placeholder="Yilni kiriting">
										</div>
									</div>

									<div class="col-12 col-xl-6">
										<div class="sign__group">
											<select name="" id="cinema_appearance" class="sign__selectjs">
												<option value="1">Movie</option>
												<option value="2">Series</option>
												<option value="3">TV Series</option>
												<option value="4">Cartoon</option>
											</select>
										</div>
									</div>
									<!-- <div class="col-12 col-xl-6">
										<div class="sign__group">
											<div class="sign__gallery">
												<label id="gallery1" for="sign__gallery-upload3">Kadrlar yuklash</label>
												<input id="sign__gallery-upload3" data-name="#gallery1" name="gallery" class="sign__gallery-upload"
													type="file">
											</div>
										</div>
									</div>

									<div class="col-12" style="margin-bottom: 20px;">
										<div class="sign__gallery">
											<label id="gallery1" for="sign__gallery-upload2">Fon uchun rasm (1920x1280)</label>
											<input id="sign__gallery-upload2" data-name="#gallery1" name="gallery" class="sign__gallery-upload"
												type="file">
										</div>
									</div> -->

									<div  class="col-12">
										<div  class="sign__group">
											<input id="cinema_treyler"  type="text" class="sign__input" placeholder="Treyler">
										</div>
									</div>

								</div>
							</div>

							<div class="col-12 col-xl-5">
								<div class="row">
									<div class="col-12 col-xl-6">
										<div class="sign__group">
											<select id="sign__quality" class="sign__selectjs">
												<option value="Full HD">Full HD</option>
												<option value="HD 720">HD 720</option>
												<option value="420 P">420 P</option>
											</select>
										</div>
									</div>

									<div class="col-12 col-xl-6">
										<div class="sign__group">
											<input id="age_limit" type="text" class="sign__input" placeholder="Yosh chegarasi">
										</div>
									</div>

									<div class="col-12">
										<div class="sign__group">
											<select  id="sign__genre" class="sign__selectjs">
												<option v-for="item in janr" :value="item.id">{{ item.title }}</option>
											</select>
										</div>
									</div>
									<div class="col-12 col-xl-6">
										<div class="sign__group">
											<input id="cinema_time" type="text" class="sign__input" placeholder="Davomiyligi">
										</div>
									</div>

									<div class="col-12 col-xl-6">
										<div class="sign__group">
											<input id="cinema_tarjima" type="text" class="sign__input" placeholder="Tarjima">
										</div>
									</div>

									<div class="col-12">
										<div class="sign__group">
											<input id="sign__country" type="text" class="sign__input" placeholder="Mamlakatni kiriting">
											<!-- <select id="sign__country" class="sign__selectjs" multiple>
												<option value="Afghanistan">Afghanistan</option>
												<option value="Åland Islands">Åland Islands</option>
												<option value="Albania">Albania</option>
												<option value="Algeria">Algeria</option>
												<option value="American Samoa">American Samoa</option>
												<option value="Andorra">Andorra</option>
												<option value="Angola">Angola</option>
												<option value="Anguilla">Anguilla</option>
												<option value="Antarctica">Antarctica</option>
												<option value="Antigua and Barbuda">Antigua and Barbuda</option>
												<option value="Argentina">Argentina</option>
												<option value="Armenia">Armenia</option>
												<option value="Aruba">Aruba</option>
												<option value="Australia">Australia</option>
												<option value="Austria">Austria</option>
												<option value="Azerbaijan">Azerbaijan</option>
												<option value="Bahamas">Bahamas</option>
												<option value="Bahrain">Bahrain</option>
												<option value="Bangladesh">Bangladesh</option>
												<option value="Barbados">Barbados</option>
												<option value="Belarus">Belarus</option>
												<option value="Belgium">Belgium</option>
												<option value="Belize">Belize</option>
												<option value="Benin">Benin</option>
												<option value="Bermuda">Bermuda</option>
												<option value="Bhutan">Bhutan</option>
												<option value="Bolivia">Bolivia</option>
												<option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option>
												<option value="Botswana">Botswana</option>
												<option value="Bouvet Island">Bouvet Island</option>
												<option value="Brazil">Brazil</option>
												<option value="Brunei Darussalam">Brunei Darussalam</option>
												<option value="Bulgaria">Bulgaria</option>
												<option value="Burkina Faso">Burkina Faso</option>
												<option value="Burundi">Burundi</option>
												<option value="Cambodia">Cambodia</option>
												<option value="Cameroon">Cameroon</option>
												<option value="Canada">Canada</option>
												<option value="Cape Verde">Cape Verde</option>
												<option value="Cayman Islands">Cayman Islands</option>
												<option value="Central African Republic">Central African Republic</option>
												<option value="Chad">Chad</option>
												<option value="Chile">Chile</option>
												<option value="China">China</option>
												<option value="Colombia">Colombia</option>
												<option value="Comoros">Comoros</option>
												<option value="Congo">Congo</option>
												<option value="Congo">Congo</option>
												<option value="Cook Islands">Cook Islands</option>
												<option value="Costa Rica">Costa Rica</option>
												<option value="Cote D'ivoire">Cote D'ivoire</option>
												<option value="Croatia">Croatia</option>
												<option value="Cuba">Cuba</option>
												<option value="Cyprus">Cyprus</option>
												<option value="Czech Republic">Czech Republic</option>
												<option value="Denmark">Denmark</option>
												<option value="Djibouti">Djibouti</option>
												<option value="Dominica">Dominica</option>
												<option value="Dominican Republic">Dominican Republic</option>
												<option value="Ecuador">Ecuador</option>
												<option value="Egypt">Egypt</option>
												<option value="El Salvador">El Salvador</option>
												<option value="Equatorial Guinea">Equatorial Guinea</option>
												<option value="Eritrea">Eritrea</option>
												<option value="Estonia">Estonia</option>
												<option value="Ethiopia">Ethiopia</option>
												<option value="Faroe Islands">Faroe Islands</option>
												<option value="Fiji">Fiji</option>
												<option value="Finland">Finland</option>
												<option value="France">France</option>
												<option value="Gabon">Gabon</option>
												<option value="Gambia">Gambia</option>
												<option value="Georgia">Georgia</option>
												<option value="Germany">Germany</option>
												<option value="Ghana">Ghana</option>
												<option value="Gibraltar">Gibraltar</option>
												<option value="Greece">Greece</option>
												<option value="Greenland">Greenland</option>
												<option value="Grenada">Grenada</option>
												<option value="Guadeloupe">Guadeloupe</option>
												<option value="Guam">Guam</option>
												<option value="Guatemala">Guatemala</option>
												<option value="Guernsey">Guernsey</option>
												<option value="Guinea">Guinea</option>
												<option value="Guinea-bissau">Guinea-bissau</option>
												<option value="Guyana">Guyana</option>
												<option value="Haiti">Haiti</option>
												<option value="Honduras">Honduras</option>
												<option value="Hong Kong">Hong Kong</option>
												<option value="Hungary">Hungary</option>
												<option value="Iceland">Iceland</option>
												<option value="India">India</option>
												<option value="Indonesia">Indonesia</option>
												<option value="Iran">Iran</option>
												<option value="Iraq">Iraq</option>
												<option value="Ireland">Ireland</option>
												<option value="Isle of Man">Isle of Man</option>
												<option value="Israel">Israel</option>
												<option value="Italy">Italy</option>
												<option value="Jamaica">Jamaica</option>
												<option value="Japan">Japan</option>
												<option value="Jersey">Jersey</option>
												<option value="Jordan">Jordan</option>
												<option value="Kazakhstan">Kazakhstan</option>
												<option value="Kenya">Kenya</option>
												<option value="Kiribati">Kiribati</option>
												<option value="Korea">Korea</option>
												<option value="Kuwait">Kuwait</option>
												<option value="Kyrgyzstan">Kyrgyzstan</option>
												<option value="Lao People's Democratic Republic">Lao People's Democratic Republic</option>
												<option value="Latvia">Latvia</option>
												<option value="Lebanon">Lebanon</option>
												<option value="Lesotho">Lesotho</option>
												<option value="Liberia">Liberia</option>
												<option value="Libyan Arab Jamahiriya">Libyan Arab Jamahiriya</option>
												<option value="Liechtenstein">Liechtenstein</option>
												<option value="Lithuania">Lithuania</option>
												<option value="Luxembourg">Luxembourg</option>
												<option value="Macao">Macao</option>
												<option value="Macedonia">Macedonia</option>
												<option value="Madagascar">Madagascar</option>
												<option value="Malawi">Malawi</option>
												<option value="Malaysia">Malaysia</option>
												<option value="Maldives">Maldives</option>
												<option value="Mali">Mali</option>
												<option value="Malta">Malta</option>
												<option value="Marshall Islands">Marshall Islands</option>
												<option value="Martinique">Martinique</option>
												<option value="Mauritania">Mauritania</option>
												<option value="Mauritius">Mauritius</option>
												<option value="Mayotte">Mayotte</option>
												<option value="Mexico">Mexico</option>
												<option value="Moldova">Moldova</option>
												<option value="Monaco">Monaco</option>
												<option value="Mongolia">Mongolia</option>
												<option value="Montenegro">Montenegro</option>
												<option value="Montserrat">Montserrat</option>
												<option value="Morocco">Morocco</option>
												<option value="Mozambique">Mozambique</option>
												<option value="Myanmar">Myanmar</option>
												<option value="Namibia">Namibia</option>
												<option value="Nauru">Nauru</option>
												<option value="Nepal">Nepal</option>
												<option value="Netherlands">Netherlands</option>
												<option value="Netherlands Antilles">Netherlands Antilles</option>
												<option value="New Caledonia">New Caledonia</option>
												<option value="New Zealand">New Zealand</option>
												<option value="Nicaragua">Nicaragua</option>
												<option value="Niger">Niger</option>
												<option value="Nigeria">Nigeria</option>
												<option value="Niue">Niue</option>
												<option value="Norfolk Island">Norfolk Island</option>
												<option value="Northern Mariana Islands">Northern Mariana Islands</option>
												<option value="Norway">Norway</option>
												<option value="Oman">Oman</option>
												<option value="Pakistan">Pakistan</option>
												<option value="Palau">Palau</option>
												<option value="Panama">Panama</option>
												<option value="Papua New Guinea">Papua New Guinea</option>
												<option value="Paraguay">Paraguay</option>
												<option value="Peru">Peru</option>
												<option value="Philippines">Philippines</option>
												<option value="Pitcairn">Pitcairn</option>
												<option value="Poland">Poland</option>
												<option value="Portugal">Portugal</option>
												<option value="Puerto Rico">Puerto Rico</option>
												<option value="Qatar">Qatar</option>
												<option value="Reunion">Reunion</option>
												<option value="Romania">Romania</option>
												<option value="Russian Federation">Russian Federation</option>
												<option value="Rwanda">Rwanda</option>
												<option value="Samoa">Samoa</option>
												<option value="San Marino">San Marino</option>
												<option value="Sao Tome and Principe">Sao Tome and Principe</option>
												<option value="Saudi Arabia">Saudi Arabia</option>
												<option value="Senegal">Senegal</option>
												<option value="Serbia">Serbia</option>
												<option value="Seychelles">Seychelles</option>
												<option value="Sierra Leone">Sierra Leone</option>
												<option value="Singapore">Singapore</option>
												<option value="Slovakia">Slovakia</option>
												<option value="Slovenia">Slovenia</option>
												<option value="Solomon Islands">Solomon Islands</option>
												<option value="Somalia">Somalia</option>
												<option value="South Africa">South Africa</option>
												<option value="Spain">Spain</option>
												<option value="Sri Lanka">Sri Lanka</option>
												<option value="Sudan">Sudan</option>
												<option value="Suriname">Suriname</option>
												<option value="Swaziland">Swaziland</option>
												<option value="Sweden">Sweden</option>
												<option value="Switzerland">Switzerland</option>
												<option value="Syrian Arab Republic">Syrian Arab Republic</option>
												<option value="Taiwan">Taiwan</option>
												<option value="Tajikistan">Tajikistan</option>
												<option value="Tanzania">Tanzania</option>
												<option value="Thailand">Thailand</option>
												<option value="Timor-leste">Timor-leste</option>
												<option value="Togo">Togo</option>
												<option value="Tokelau">Tokelau</option>
												<option value="Tonga">Tonga</option>
												<option value="Trinidad and Tobago">Trinidad and Tobago</option>
												<option value="Tunisia">Tunisia</option>
												<option value="Turkey">Turkey</option>
												<option value="Turkmenistan">Turkmenistan</option>
												<option value="Turks and Caicos Islands">Turks and Caicos Islands</option>
												<option value="Tuvalu">Tuvalu</option>
												<option value="Uganda">Uganda</option>
												<option value="Ukraine">Ukraine</option>
												<option value="United Arab Emirates">United Arab Emirates</option>
												<option value="United Kingdom">United Kingdom</option>
												<option value="United States">United States</option>
												<option value="Uruguay">Uruguay</option>
												<option value="Uzbekistan">Uzbekistan</option>
												<option value="Vanuatu">Vanuatu</option>
												<option value="Venezuela">Venezuela</option>
												<option value="Viet Nam">Viet Nam</option>
												<option value="Western Sahara">Western Sahara</option>
												<option value="Yemen">Yemen</option>
												<option value="Zambia">Zambia</option>
												<option value="Zimbabwe">Zimbabwe</option>
											</select> -->
										</div>
									</div>
									<div class="col-12">
										<div class="sign__group">
											<select name="" id="cinema_payment" class="sign__selectjs">
												<option value="Premium">Premium</option>
												<option value="Free">Free</option>
											</select>
										</div>
									</div>
								</div>
							</div>

							<div class="col-12 col-xl-6">
								<div class="sign__group">
									<select id="sign__director" class="sign__selectjs" multiple>
										<option :id="item.id" v-for="item in tarjima" :value="item.id">{{ item.full_name }}</option>
									</select>
								</div>
							</div>
							<div class="col-12 col-xl-6">
								<div class="sign__group">
									<input style="width:100%;" id="sign__tayming"  type="text" class="sign__input" placeholder="Tayming">
									<!-- <select id="sign__tayming" class="sign__selectjs" multiple>
										<option value="Matt Jones">Matt Jones</option>
										<option value="Gene Graham">Gene Graham</option>
										<option value="Rosa Lee">Rosa Lee</option>
										<option value="Brian Cranston">Brian Cranston</option>
										<option value="Tess Harper">Tess Harper</option>
									</select> -->
								</div>
							</div>
							<div class="col-12">
								<div class="sign__group">
									<input style="width:100%;" id="sign__actors"  type="text" class="sign__input" placeholder="Ovoz beruchilar">
									<!-- <select id="sign__actors" class="sign__selectjs" multiple>
										<option value="Matt Jones">Matt Jones</option>
										<option value="Gene Graham">Gene Graham</option>
										<option value="Rosa Lee">Rosa Lee</option>
										<option value="Brian Cranston">Brian Cranston</option>
										<option value="Tess Harper">Tess Harper</option>
										<option value="Eliza Josceline">Eliza Josceline</option>
										<option value="Otto Bree">Otto Bree</option>
										<option value="Kathie Corl">Kathie Corl</option>
										<option value="Georgiana Patti">Georgiana Patti</option>
										<option value="Cong Duong">Cong Duong</option>
										<option value="Felix Autumn">Felix Autumn</option>
										<option value="Sophie Moore">Sophie Moore</option>
									</select> -->
								</div>
							</div>

							<div class="col-12">
								<div class="sign__group">
									<label class="sign__label">Element turi:</label>
									<ul class="sign__radio">
										<li>
											<input id="type1" type="radio" name="type" checked="">
											<label for="type1">Anime</label>
										</li>
										<li>
											<input id="type2" type="radio" name="type" data-bs-toggle="collapse"
												data-bs-target=".multi-collapse">
											<label for="type2">Anime Serial</label>
										</li>
									</ul>
								</div>
							</div>

							<!-- movie -->
							<div class="col-12">
								<div class="collapse show multi-collapse">
									<div class="sign__group">
										<input name="ova" id="cinema_video" class="sign__input" placeholder="Iframe link" type="text">
									</div>
								</div>
							</div>
							<!-- end movie -->

							<!-- tv series -->
							<div class="col-12">
								<div class="collapse multi-collapse">
									<!-- season -->
									<div class="sign__season">
										<!-- <div class="sign__season-head">
											<div v-for="item in mavsum" class="row">
												<div class="col-12">
													<span class="sign__episode-title">{{ item }} - Mavsum</span>
												</div>

												<div class="col-12 col-sm-6 col-md-5 col-xl-6">
													<div class="sign__group">
														<input type="text" class="sign__input" placeholder="Mavsum nomi">
													</div>
												</div>

												<div class="col-12 col-sm-6 col-md-4 col-xl-4">
													<div class="sign__group">
														<input type="text" class="sign__input" placeholder="Mavsum haqida ma'lumot">
													</div>
												</div>

												<div class="col-12 col-sm-4 col-md-3 col-xl-2">
													<button @click="Mavsum()" class="sign__btn sign__btn--add"><span>mavsum qo'shing</span></button>
												</div>
											</div>
										</div> -->

										<!-- episode -->
										<div v-for="(item,key) in mavsum" class="sign__episode">
											<div class="row">
												<div class="col-12">
													<span class="sign__episode-title">{{ key+1 }} - qism</span>
													<button @click="MavsumSlice(key)" class="sign__delete" type="button">
														<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
															<path
																d="M13.41,12l4.3-4.29a1,1,0,1,0-1.42-1.42L12,10.59,7.71,6.29A1,1,0,0,0,6.29,7.71L10.59,12l-4.3,4.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L12,13.41l4.29,4.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Z" />
														</svg>
													</button>
												</div>

												<div class="col-12 col-md-6">
													<div class="sign__group">
														<input type="text" id="serial_title" class="sign__input" :placeholder="key+1+' - qism nomi'">
													</div>
												</div>

												<div class="col-12 col-md-6">
													<div class="sign__group">
														<input type="text" id="serial_time" class="sign__input" placeholder="Joylangan sana">
													</div>
												</div>

												<div class="col-12">
													<div class="sign__group">
														<input name="s1s1" id="serial_video" class="sign__input" placeholder="iframe link" type="text">
													</div>
												</div>
											</div>
										</div>
										<div class="col-12 col-sm-4 col-md-3 col-xl-2">
													<button type="button" @click="Mavsum()" class="sign__btn sign__btn--add"><span>qism qo'shing</span></button>
										</div>
										<!-- end episode -->

										<!-- episode -->
										<!-- <div class="sign__episode">
											<div class="row">
												<div class="col-12">
													<span class="sign__episode-title">2 - qism</span>
													<button class="sign__delete" type="button">
														<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
															<path
																d="M13.41,12l4.3-4.29a1,1,0,1,0-1.42-1.42L12,10.59,7.71,6.29A1,1,0,0,0,6.29,7.71L10.59,12l-4.3,4.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L12,13.41l4.29,4.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Z" />
														</svg>
													</button>
												</div>

												<div class="col-12 col-md-6">
													<div class="sign__group">
														<input type="text" class="sign__input" placeholder="2 - qism nomi">
													</div>
												</div>

												<div class="col-12 col-md-6">
													<div class="sign__group">
														<input type="text" class="sign__input" placeholder="Joylangan sana">
													</div>
												</div>

												<div class="col-12 col-sm-8 col-md-9 col-xl-10">
													<div class="sign__group">
														<input name="ova" class="sign__input" placeholder="Iframe link" type="text">
													</div>
												</div>
											</div>

											
										</div> -->
										<!-- end episode -->
									</div>
									<!-- end season -->
								</div>
							</div>
							<!-- end tv series -->

							<div class="col-12">
								<button @click="CinemaPost()" type="button" class="sign__btn sign__btn--small"><span>JOYLASH</span></button>
							</div>
						</div>
					</form>
				</div>
				<!-- end form -->
			</div>
		</div>
	</main>
	<!-- end main content -->
</template>
<style>

</style>

<script>
import axios from 'axios';

export default {
	name: "AddItemPage",
	
	data(){
		return{
			janr:[],
			tarjima:[],
			mavsum:[1],
			number:1,
			tarjima_cinema:[],
			janr_cinema:[],
			image_cinema:[],
		}
	},

	mounted() {
		/* add page */
		if (document.querySelector('#sign__quality')) {
			new SlimSelect({
				select: '#sign__quality',
				settings: {
					showSearch: false,
				}
			});
		}

		if (document.querySelector('#cinema_payment')) {
			new SlimSelect({
				select: '#cinema_payment',
				settings: {
					showSearch: false,
				}
			});
		}

		if (document.querySelector('#cinema_appearance')) {
			new SlimSelect({
				select: '#cinema_appearance',
				settings: {
					showSearch: false,
				}
			});
		}

		if (document.querySelector('#sign__country')) {
			new SlimSelect({
				select: '#sign__country',
				settings: {
					placeholderText: 'Mamlakatni tanlang',
				}
			});
		}

		if (document.querySelector('#sign__tayming')) {
			new SlimSelect({
				select: '#sign__tayming',
				settings: {
					placeholderText: 'Tayming',
				}
			});
		}

		if (document.querySelector('#sign__actors')) {
			new SlimSelect({
				select: '#sign__actors',
				settings: {
					placeholderText: 'Ovoz beruchilar',
				}
			});
		}
		

		axios.get('https://api.uzdub.uz/api/v1/janr').then(res=>{
		this.janr=res.data
		setTimeout(() => {
			if (document.querySelector('#sign__genre')) {
			new SlimSelect({
				select: '#sign__genre',
				settings: {
					placeholderText: 'Janrni tanlang',
				}
			});
		    }
		}, 100);
	    })
		axios.get('https://api.uzdub.uz/api/v1/tarjima').then(res=>{
		this.tarjima=res.data
		setTimeout(() => {
			if (document.querySelector('#sign__director')) {
			new SlimSelect({
				select: '#sign__director',
				settings: {
					placeholderText: 'Tarjimonlar',
				}
			});
		    }
		}, 100);
		var a=sessionStorage.getItem("cinemaId")
		if(a){
        axios.get("https://api.uzdub.uz/api/v1/cinema").then(res=>{
			const Filter=res.data.filter(item=>item.id==a)
			Filter.map(item=>{
				document.querySelector("#cinema_title").value=item.title
				document.querySelector("#cinema_text").value=item.description
				document.querySelector("#cinema_time").value=item.time
				document.querySelector("#sign__actors").value=item.ovoz_berdi
				document.querySelector("#cinema_tarjima").value=item.language
				document.querySelector("#age_limit").value=item.age_limit
				document.querySelector("#sign__country").value=item.country
				document.querySelector("#sign__tayming").value=item.tayming
				document.querySelector("#cinema_payment").value=item.payment
				document.querySelector("#cinema_year").value=item.year
				document.querySelector("#cinema_appearance").value=item.appearance
				document.querySelector("#cinema_treyler").value=item.treler
				document.querySelector("#sign__quality").value=item.type
				document.querySelector("#cinema_video").value=item.video
				axios.get('https://api.uzdub.uz/seriallar').then(res1=>{
                     const Filter1=res1.data.rows.filter(item=>item.cinema_id==Filter[0].id)
					 if(Filter1.length>0){
						 this.mavsum=Filter1
						 setTimeout(() => {
							for (let i = 0; i < Filter1.length; i++) {
							 document.querySelectorAll("#serial_video")[i].value=Filter1[i].video
							 document.querySelectorAll("#serial_time")[i].value=Filter1[i].time
							 document.querySelectorAll("#serial_title")[i].value=Filter1[i].title
						    }
						 }, 1000);
					 }
				})
			})
		})
		axios.get("https://api.uzdub.uz/api/v1/tarjima_cinema").then(res=>{
			axios.get("https://api.uzdub.uz/api/v1/janr_cinema").then(res1=>{
				axios.get("https://api.uzdub.uz/api/v1/image_cinema").then(res2=>{
                   this.tarjima_cinema=res.data
				   this.janr_cinema=res1.data
				   this.image_cinema=res2.data
                })
			})
		})
		}
	    })

		
	},
	methods:{
    CinemaPost(){
    if(!sessionStorage.getItem("cinemaId")){
		var formdata=new FormData()
		formdata.append("type",document.querySelector("#sign__quality").value)
		formdata.append("title",document.querySelector("#cinema_title").value)
		formdata.append("description",document.querySelector("#cinema_text").value)
		formdata.append("time",document.querySelector("#cinema_time").value)
		formdata.append("ovoz_berdi",document.querySelector("#sign__actors").value)
		formdata.append("language",document.querySelector("#cinema_tarjima").value)
		formdata.append("tayming",document.querySelector("#sign__tayming").value)
		formdata.append("age_limit",document.querySelector("#age_limit").value)
		formdata.append("country",document.querySelector("#sign__country").value)
		formdata.append("video",!document.querySelector("#type2").getAttribute("aria-expanded")?document.querySelector("#cinema_video").value:"null")
		formdata.append("payment",document.querySelector("#cinema_payment").value)
		formdata.append("year",document.querySelector("#cinema_year").value)
		formdata.append("appearance",document.querySelector("#cinema_appearance").value)
		formdata.append("treler",document.querySelector("#cinema_treyler").value)
		formdata.append("more_loking",0)

		axios.post(`https://api.uzdub.uz/api/v1/cinema`,formdata).then(res=>{
			for (let i = 0; i < document.querySelectorAll(".ss-value").length; i++) {
			var formdata2=new FormData()
			formdata2.append("cinema_id",res.data.id)
			formdata2.append("tarjimon_id",document.querySelectorAll(".ss-value")[i].getAttribute("data-id"))

			axios.post("https://api.uzdub.uz/api/v1/tarjima_cinema",formdata2).then(res2=>{

			})
			}
			var formdata1=new FormData()
			formdata1.append("cinema_id",res.data.id)
			formdata1.append("janr_id",document.querySelector("#sign__genre").value)

			axios.post("https://api.uzdub.uz/api/v1/janr_cinema",formdata1).then(res1=>{
			var formdata3=new FormData()
			formdata3.append("cinema_id",res.data.id)
			formdata3.append("image",document.querySelector("#sign__gallery-upload").files[0])

			axios.post('https://api.uzdub.uz/api/v1/image_cinema',formdata3).then(res3=>{
			if(document.querySelector("#type2").getAttribute("aria-expanded")){
            	for (let i = 0; i < this.mavsum.length; i++) {
				var formdata4=new FormData()
				formdata4.append("video",document.querySelectorAll("#serial_video")[i].value)
				formdata4.append("cinema_id",res.data.id)
				formdata4.append("title",document.querySelectorAll("#serial_title")[i].value)
				formdata4.append("time",document.querySelectorAll("#serial_time")[i].value)

				axios.post(`https://api.uzdub.uz/seriallar`,formdata4).then(res4=>{
				})
				}
				alert("Media qo'shildi")
				window.location.reload()
			}else{
				alert("Media qo'shildi")
				window.location.reload()
			}
			})
			
			})
		}).catch(err=>{
			alert("Media qo'shilmadi")
		})
	}else{
		var formdata=new FormData()
		formdata.append("type",document.querySelector("#sign__quality").value)
		formdata.append("title",document.querySelector("#cinema_title").value)
		formdata.append("description",document.querySelector("#cinema_text").value)
		formdata.append("time",document.querySelector("#cinema_time").value)
		formdata.append("ovoz_berdi",document.querySelector("#sign__actors").value)
		formdata.append("language",document.querySelector("#cinema_tarjima").value)
		formdata.append("tayming",document.querySelector("#sign__tayming").value)
		formdata.append("age_limit",document.querySelector("#age_limit").value)
		formdata.append("country",document.querySelector("#sign__country").value)
		formdata.append("video",!document.querySelector("#type2").getAttribute("aria-expanded")?document.querySelector("#cinema_video").value:"null")
		formdata.append("payment",document.querySelector("#cinema_payment").value)
		formdata.append("year",document.querySelector("#cinema_year").value)
		formdata.append("appearance",document.querySelector("#cinema_appearance").value)
		formdata.append("treler",document.querySelector("#cinema_treyler").value)
		formdata.append("more_loking",0)

		axios.put(`https://api.uzdub.uz/api/v1/cinema/${sessionStorage.getItem("cinemaId")}`,formdata).then(res=>{
			const Filter=this.tarjima_cinema.filter(item=>item.cinema_id==sessionStorage.getItem("cinemaId"))
			for (let i = 0; i < document.querySelectorAll(".ss-value").length; i++) {
			if(i>Filter.length){
			var formdata2=new FormData()
			formdata2.append("cinema_id",sessionStorage.getItem("cinemaId"))
			formdata2.append("tarjimon_id",document.querySelectorAll(".ss-value")[i].getAttribute("data-id"))

			axios.post("https://api.uzdub.uz/api/v1/tarjima_cinema",formdata2).then(res2=>{

			})
		    }else{
			var formdata2=new FormData()
			formdata2.append("cinema_id",sessionStorage.getItem("cinemaId"))
			formdata2.append("tarjimon_id",document.querySelectorAll(".ss-value")[i].getAttribute("data-id"))

			axios.put(`https://api.uzdub.uz/api/v1/tarjima_cinema/${Filter[i].id}`,formdata2).then(res2=>{

			})
		    }
	     	}
			
			const Filter1=this.janr_cinema.filter(item=>item.cinema_id==sessionStorage.getItem("cinemaId"))

			var formdata1=new FormData()
			formdata1.append("cinema_id",sessionStorage.getItem("cinemaId"))
			formdata1.append("janr_id",document.querySelector("#sign__genre").value)

			axios.put(`https://api.uzdub.uz/api/v1/janr_cinema/${Filter1[0].id}`,formdata1).then(res1=>{
			const Filter2=this.image_cinema.filter(item=>item.cinema_id==sessionStorage.getItem("cinemaId"))

			var formdata3=new FormData()
			formdata3.append("cinema_id",sessionStorage.getItem("cinemaId"))
			formdata3.append("image",document.querySelector("#sign__gallery-upload").files[0])

			axios.put(`https://api.uzdub.uz/api/v1/image_cinema/${Filter2[0].id}`,formdata3).then(res3=>{
			if(document.querySelector("#type2").getAttribute("aria-expanded")){
            	for (let i = 0; i < this.mavsum.length; i++) {
		
				if(this.mavsum[i]!=1){
				var formdata4=new FormData()
				formdata4.append("video",document.querySelectorAll("#serial_video")[i].value)
				formdata4.append("cinema_id",sessionStorage.getItem("cinemaId"))
				formdata4.append("title",document.querySelectorAll("#serial_title")[i].value)
				formdata4.append("time",document.querySelectorAll("#serial_time")[i].value)

				axios.put(`https://api.uzdub.uz/seriallar/${this.mavsum[i].id}`,formdata4).then(res4=>{
				})
				}else{
				var formdata4=new FormData()
				formdata4.append("video",document.querySelectorAll("#serial_video")[i].value)
				formdata4.append("cinema_id",sessionStorage.getItem("cinemaId"))
				formdata4.append("title",document.querySelectorAll("#serial_title")[i].value)
				formdata4.append("time",document.querySelectorAll("#serial_time")[i].value)

				axios.post(`https://api.uzdub.uz/seriallar`,formdata4).then(res4=>{
				})
				}
				}
				alert("Media o'zgartirildi")
				window.location.reload()
			}else{
				alert("Media o'zgartirildi")
				window.location.reload()
			}
			})
			
			})
		}).catch(err=>{
			alert("Media o'zgartirilmadi")
		})
	}
	},
	Mavsum(){
		this.mavsum.push(1)
	},
	MavsumSlice(key){
	var a=this.mavsum
	for (let i = 0; i < a.length; i++) {
		console.log(a,"hello");
		if(key==i){
			if(a[i]==1){
				this.mavsum.splice(key,1)
			}else{
				axios.delete(`https://api.uzdub.uz/seriallar/${a[i].id}`).then(res=>{
					alert("Serial o'chirildi")
				}).catch(err=>{
					alert("Serial o'chirilmadi")
				})
			}
		}
	}
	},

	}
}
</script>