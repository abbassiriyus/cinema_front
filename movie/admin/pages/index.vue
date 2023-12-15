<template>
  <div>
    

    <!-- main content -->
    <main class="main">
      <div class="container-fluid">
        <div class="row">
          <!-- main title -->
          <div class="col-12">
            <div class="main__title">
              <h2>Boshqaruv paneli</h2>

              <NuxtLink to="add-item" class="main__title-link"
                ><span>add item</span></NuxtLink
              >
            </div>
          </div>
          <!-- end main title -->
        </div>

        <div class="row">
          <!-- stats -->
          <div class="col-12 col-sm-6 col-xl-3">
            <div class="stats">
              <span>Bu oyda noyob tomoshalar</span>
              <p id="tomoshalar_diogramma">0</p>
              <img src="img/graph-bar.svg" alt="" />
            </div>
          </div>
          <!-- end stats -->

          <!-- stats -->
          <div class="col-12 col-sm-6 col-xl-3">
            <div class="stats">
              <span>Bu oy qo'shilgan medialar</span>
              <p id="kinolar_diogramma">0</p>
              <img src="img/film.svg" alt="" />
            </div>
          </div>
          <!-- end stats -->

          <!-- stats -->
          <div class="col-12 col-sm-6 col-xl-3">
            <div class="stats">
              <span>Yangi izohlar</span>
              <p id="izohlar_diogramma">0</p>
              <img src="img/comments.svg" alt="" />
            </div>
          </div>
          <!-- end stats -->

          <!-- stats -->
          <div class="col-12 col-sm-6 col-xl-3">
            <div class="stats">
              <span>Yangi sharhlar</span>
              <p id="sharhlar_diogramma">0</p>
              <img src="img/star-half-alt.svg" alt="" />
            </div>
          </div>
          <!-- end stats -->

          <!-- dashbox -->
          <div class="col-12 col-xl-6">
            <div class="dashbox">
              <div class="dashbox__title">
                <h3><img src="img/award.svg" alt="" />Eng yaxshi medialar</h3>

                <div class="dashbox__wrap">
                  <NuxtLink tos="dashbox__refresh" to="#"
                    ><svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M21,11a1,1,0,0,0-1,1,8.05,8.05,0,1,1-2.22-5.5h-2.4a1,1,0,0,0,0,2h4.53a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4.77A10,10,0,1,0,22,12,1,1,0,0,0,21,11Z"
                      /></svg
                  ></NuxtLink>
                  <NuxtLink tos="dashbox__more" to="catalog">Hammasi</NuxtLink>
                </div>
              </div>

              <div class="dashbox__table-wrap dashbox__table-wrap--1">
                <table class="dashbox__table">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>NOMI</th>
                      <th>KATEGORIYA</th>
                      <th>REYTING</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="item in yaxshiMedia" :key="item.id">
                      <td>
                        <div class="dashbox__table-text">{{ item.id }}</div>
                      </td>
                      <td>
                        <div class="dashbox__table-text">
                          <NuxtLink to="#">{{ item.title }}</NuxtLink>
                        </div>
                      </td>
                      <td>
                        <div class="dashbox__table-text">{{ item.category }}</div>
                      </td>
                      <td>
                        <div
                          class="dashbox__table-text dashbox__table-text--rate"
                        >
                          {{ item.mark }}
                        </div>
                      </td>
                    </tr>
                    <!-- <tr>
                      <td>
                        <div class="dashbox__table-text">54</div>
                      </td>
                      <td>
                        <div class="dashbox__table-text">
                          <NuxtLink to="#">Undercurrents</NuxtLink>
                        </div>
                      </td>
                      <td>
                        <div class="dashbox__table-text">Anime</div>
                      </td>
                      <td>
                        <div
                          class="dashbox__table-text dashbox__table-text--rate"
                        >
                          9.1
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div class="dashbox__table-text">670</div>
                      </td>
                      <td>
                        <div class="dashbox__table-text">
                          <NuxtLink to="#">Tales from the Underworld</NuxtLink>
                        </div>
                      </td>
                      <td>
                        <div class="dashbox__table-text">TV Show</div>
                      </td>
                      <td>
                        <div
                          class="dashbox__table-text dashbox__table-text--rate"
                        >
                          9.0
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div class="dashbox__table-text">241</div>
                      </td>
                      <td>
                        <div class="dashbox__table-text">
                          <NuxtLink to="#">The Unseen World</NuxtLink>
                        </div>
                      </td>
                      <td>
                        <div class="dashbox__table-text">TV Show</div>
                      </td>
                      <td>
                        <div
                          class="dashbox__table-text dashbox__table-text--rate"
                        >
                          8.9
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div class="dashbox__table-text">22</div>
                      </td>
                      <td>
                        <div class="dashbox__table-text">
                          <NuxtLink to="#">Redemption Road</NuxtLink>
                        </div>
                      </td>
                      <td>
                        <div class="dashbox__table-text">Movie</div>
                      </td>
                      <td>
                        <div
                          class="dashbox__table-text dashbox__table-text--rate"
                        >
                          8.9
                        </div>
                      </td>
                    </tr> -->
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <!-- end dashbox -->

          <!-- dashbox -->
          <div class="col-12 col-xl-6">
            <div class="dashbox">
              <div class="dashbox__title">
                <h3><img src="img/film.svg" alt="" />Eng so'nggi medialar</h3>

                <div class="dashbox__wrap">
                  <NuxtLink tos="dashbox__refresh" to="#"
                    ><svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M21,11a1,1,0,0,0-1,1,8.05,8.05,0,1,1-2.22-5.5h-2.4a1,1,0,0,0,0,2h4.53a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4.77A10,10,0,1,0,22,12,1,1,0,0,0,21,11Z"
                      /></svg
                  ></NuxtLink>
                  <NuxtLink tos="dashbox__more" to="reviews">Hammasi</NuxtLink>
                </div>
              </div>

              <div class="dashbox__table-wrap dashbox__table-wrap--2">
                <table class="dashbox__table">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>NOMI</th>
                      <th>KATEGORIYA</th>
                      <th>REY</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="item in songgiMedia" :key="item.id">
                      <td>
                        <div class="dashbox__table-text">{{item.id}}</div>
                      </td>
                      <td>
                        <div class="dashbox__table-text">
                          <NuxtLink to="#">{{ item.title }}</NuxtLink>
                        </div>
                      </td>
                      <td>
                        <div class="dashbox__table-text">{{ item.category }}</div>
                      </td>
                      <td>
                        <div
                          class="dashbox__table-text dashbox__table-text--rate"
                        >
                          {{ item.mark }}
                        </div>
                      </td>
                    </tr>
                    <!-- <tr>
                      <td>
                        <div class="dashbox__table-text">750</div>
                      </td>
                      <td>
                        <div class="dashbox__table-text">
                          <NuxtLink to="#">Benched</NuxtLink>
                        </div>
                      </td>
                      <td>
                        <div class="dashbox__table-text">Movie</div>
                      </td>
                      <td>
                        <div
                          class="dashbox__table-text dashbox__table-text--rate"
                        >
                          6.4
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div class="dashbox__table-text">751</div>
                      </td>
                      <td>
                        <div class="dashbox__table-text">
                          <NuxtLink to="#">Whitney</NuxtLink>
                        </div>
                      </td>
                      <td>
                        <div class="dashbox__table-text">TV Show</div>
                      </td>
                      <td>
                        <div
                          class="dashbox__table-text dashbox__table-text--rate"
                        >
                          8.1
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div class="dashbox__table-text">752</div>
                      </td>
                      <td>
                        <div class="dashbox__table-text">
                          <NuxtLink to="#">Blindspotting</NuxtLink>
                        </div>
                      </td>
                      <td>
                        <div class="dashbox__table-text">Anime</div>
                      </td>
                      <td>
                        <div
                          class="dashbox__table-text dashbox__table-text--rate"
                        >
                          9.1
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div class="dashbox__table-text">753</div>
                      </td>
                      <td>
                        <div class="dashbox__table-text">
                          <NuxtLink to="#">I Dream in Another Language</NuxtLink>
                        </div>
                      </td>
                      <td>
                        <div class="dashbox__table-text">Movie</div>
                      </td>
                      <td>
                        <div
                          class="dashbox__table-text dashbox__table-text--rate"
                        >
                          6.5
                        </div>
                      </td>
                    </tr> -->
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <!-- end dashbox -->

          <!-- dashbox -->
          <div class="col-12 col-xl-6">
            <div class="dashbox">
              <div class="dashbox__title">
                <h3>
                  <img src="img/user-circle.svg" alt="" />Eng so'nggi
                  foydalanuvchilar
                </h3>

                <div class="dashbox__wrap">
                  <NuxtLink tos="dashbox__refresh" to="#"
                    ><svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M21,11a1,1,0,0,0-1,1,8.05,8.05,0,1,1-2.22-5.5h-2.4a1,1,0,0,0,0,2h4.53a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4.77A10,10,0,1,0,22,12,1,1,0,0,0,21,11Z"
                      /></svg
                  ></NuxtLink>
                  <NuxtLink tos="dashbox__more" to="reviews">Hammasi</NuxtLink>
                </div>
              </div>

              <div class="dashbox__table-wrap dashbox__table-wrap--3">
                <table class="dashbox__table">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>FULL NAME</th>
                      <th>EMAIL</th>
                      <th>USERNAME</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="item in User" :key="item.id">
                      <td>
                        <div class="dashbox__table-text">{{ item.id }}</div>
                      </td>
                      <td>
                        <div class="dashbox__table-text">{{ item.name }}</div>
                      </td>
                      <td>
                        <div class="dashbox__table-text">{{ item.email }}</div>
                      </td>
                      <td>
                        <div class="dashbox__table-text">{{ item.name }}</div>
                      </td>
                    </tr>
                    <!-- <tr>
                      <td>
                        <div class="dashbox__table-text">1024</div>
                      </td>
                      <td>
                        <div class="dashbox__table-text">Tess Harper</div>
                      </td>
                      <td>
                        <div class="dashbox__table-text">email@email.com</div>
                      </td>
                      <td>
                        <div class="dashbox__table-text">Username</div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div class="dashbox__table-text">1025</div>
                      </td>
                      <td>
                        <div class="dashbox__table-text">Brian Cranston</div>
                      </td>
                      <td>
                        <div class="dashbox__table-text">email@email.com</div>
                      </td>
                      <td>
                        <div class="dashbox__table-text">Username</div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div class="dashbox__table-text">1026</div>
                      </td>
                      <td>
                        <div class="dashbox__table-text">Rosa Lee</div>
                      </td>
                      <td>
                        <div class="dashbox__table-text">email@email.com</div>
                      </td>
                      <td>
                        <div class="dashbox__table-text">Username</div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div class="dashbox__table-text">1027</div>
                      </td>
                      <td>
                        <div class="dashbox__table-text">Gene Graham</div>
                      </td>
                      <td>
                        <div class="dashbox__table-text">email@email.com</div>
                      </td>
                      <td>
                        <div class="dashbox__table-text">Username</div>
                      </td>
                    </tr> -->
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <!-- end dashbox -->

          <!-- dashbox -->
          <div class="col-12 col-xl-6">
            <div class="dashbox">
              <div class="dashbox__title">
                <h3>
                  <img src="img/star-half-alt.svg" alt="" />Eng so'nggi sharhlar
                </h3>

                <div class="dashbox__wrap">
                  <NuxtLink tos="dashbox__refresh" to="#"
                    ><svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M21,11a1,1,0,0,0-1,1,8.05,8.05,0,1,1-2.22-5.5h-2.4a1,1,0,0,0,0,2h4.53a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4.77A10,10,0,1,0,22,12,1,1,0,0,0,21,11Z"
                      /></svg
                  ></NuxtLink>
                  <NuxtLink tos="dashbox__more" to="reviews">Hammasi</NuxtLink>
                </div>
              </div>

              <div class="dashbox__table-wrap dashbox__table-wrap--4">
                <table class="dashbox__table">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>ITEM</th>
                      <th>AUTHOR</th>
                      <th>RATING</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="item in songgiSharx" :key="item.id">
                      <td>
                        <div class="dashbox__table-text">{{ item.id }}</div>
                      </td>
                      <td>
                        <div class="dashbox__table-text">
                          <NuxtLink to="#">{{ item.title }}</NuxtLink>
                        </div>
                      </td>
                      <td>
                        <div class="dashbox__table-text">{{ item.name }}</div>
                      </td>
                      <td>
                        <div
                          class="dashbox__table-text dashbox__table-text--rate"
                        >
                          {{ item.rating }}
                        </div>
                      </td>
                    </tr>
                    <!-- <tr>
                      <td>
                        <div class="dashbox__table-text">125</div>
                      </td>
                      <td>
                        <div class="dashbox__table-text">
                          <NuxtLink to="#">Benched</NuxtLink>
                        </div>
                      </td>
                      <td>
                        <div class="dashbox__table-text">Quang</div>
                      </td>
                      <td>
                        <div
                          class="dashbox__table-text dashbox__table-text--rate"
                        >
                          6.3
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div class="dashbox__table-text">124</div>
                      </td>
                      <td>
                        <div class="dashbox__table-text">
                          <NuxtLink to="#">Whitney</NuxtLink>
                        </div>
                      </td>
                      <td>
                        <div class="dashbox__table-text">Brian Cranston</div>
                      </td>
                      <td>
                        <div
                          class="dashbox__table-text dashbox__table-text--rate"
                        >
                          8.4
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div class="dashbox__table-text">123</div>
                      </td>
                      <td>
                        <div class="dashbox__table-text">
                          <NuxtLink to="#">Blindspotting</NuxtLink>
                        </div>
                      </td>
                      <td>
                        <div class="dashbox__table-text">Ketut</div>
                      </td>
                      <td>
                        <div
                          class="dashbox__table-text dashbox__table-text--rate"
                        >
                          9.0
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div class="dashbox__table-text">122</div>
                      </td>
                      <td>
                        <div class="dashbox__table-text">
                          <NuxtLink to="#">I Dream in Another Language</NuxtLink>
                        </div>
                      </td>
                      <td>
                        <div class="dashbox__table-text">Eliza Josceline</div>
                      </td>
                      <td>
                        <div
                          class="dashbox__table-text dashbox__table-text--rate"
                        >
                          7.7
                        </div>
                      </td>
                    </tr> -->
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <!-- end dashbox -->
        </div>
      </div>
    </main>
    <!-- end main content -->
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'IndexPage',
  data() {
    return {
      yaxshiMedia: [],
      songgiMedia: [],
      User:[],
      songgiSharx:[],
    };
  },
  async mounted() {
    try {
      var a=new Date()
      var b=(a.getMonth()*1)+1
      var date=a.getFullYear()+"-"+b
      var day=date+"-"+`${a.getDate()}`.padStart(2,"0")
      const response = await axios.get('http://localhost:4003/api/v1/cinema');
      var korish=0
      var kinolar=0
      var sharhlar=0
      for (let i = 0; i < response.data.length; i++) {
        if((response.data[i].time_create).slice(0,7)==date){
          korish=korish+response.data[i].more_loking
          sharhlar=sharhlar+response.data[i].mark
          var s=0
          s=response.data[i]?1:0
          kinolar=kinolar+s
        }
      }
      var izohlar=0
      const izoh=await axios.get('http://localhost:4003/api/v1/comment');
      for (let i = 0; i < izoh.data.length; i++) {
        if((izoh.data[i].time_create).slice(0,7)==date){
          var s=0
          s=izoh.data[i]?1:0
          izohlar=izohlar+s
        }
      }
      document.querySelector("#izohlar_diogramma").innerHTML=izohlar
      document.querySelector("#kinolar_diogramma").innerHTML=kinolar
      document.querySelector("#tomoshalar_diogramma").innerHTML=korish
      document.querySelector("#sharhlar_diogramma").innerHTML=sharhlar
      var madiaYaxshi=[]
      for (let i = 0; i < response.data.length; i++) {
        if((response.data[i].time_create).slice(0,7)==date && response.data[i].mark>=8){
          madiaYaxshi.push(response.data[i])
        }
      }
      for (let i = 0; i < madiaYaxshi.length; i++) {
        if(madiaYaxshi[i].appearance==1){
          madiaYaxshi[i].category="Movie"
        }else{
          if(madiaYaxshi[i].appearance==2){
          madiaYaxshi[i].category="Series"
          }else{
            if(madiaYaxshi[i].appearance==3){
            madiaYaxshi[i].category="TV Series"
            }else{
               if(madiaYaxshi[i].appearance==4){
               madiaYaxshi[i].category="Cartoon"
               }
            }
          }
        }
      }
      this.yaxshiMedia=madiaYaxshi
      var mediaSonggi=[]
      for (let i = 0; i < response.data.length; i++) {
        if((response.data[i].time_create).slice(0,10)==day){
          mediaSonggi.push(response.data[i])
        }
      }
      for (let i = 0; i < mediaSonggi.length; i++) {
        if(mediaSonggi[i].appearance==1){
          mediaSonggi[i].category="Movie"
        }else{
          if(mediaSonggi[i].appearance==2){
          mediaSonggi[i].category="Series"
          }else{
            if(mediaSonggi[i].appearance==3){
            mediaSonggi[i].category="TV Series"
            }else{
               if(mediaSonggi[i].appearance==4){
               mediaSonggi[i].category="Cartoon"
               }
            }
          }
        }
      }
      this.songgiMedia=mediaSonggi
       
      var usersData=[]
      const users=await axios.get('http://localhost:4003/users');
      for (let i = 0; i < users.data.length; i++) {
        if((users.data[i].time_create).slice(0,10)==day){
          usersData.push(users.data[i])
        }
      }
      this.User=usersData
      
      var SharhGetM=[]
      const SharhGet=await axios.get('http://localhost:4003/api/v1/sharx');
      for (let i = 0; i < SharhGet.data.length; i++) {
        for (let j = 0; j < users.data.data.length; j++) {
         if(SharhGet.data[i].creator==users.data.data[j].id){
            SharhGet.data[i].name=users.data.data[j].name
         }
        }
      }
      for (let i = 0; i < SharhGet.data.length; i++) {
        if((SharhGet.data[i].time_create).slice(0,10)==day){
          SharhGetM.push(SharhGet.data[i])
        }
      }
      this.songgiSharx=SharhGetM

    } catch (error) {
      console.error(error);
    }
  },
}
</script>
