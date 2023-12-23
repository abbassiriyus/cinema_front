<template>
  <div>
  <div id="one">
    <Sidebar />
    <nav>
      <Header />
      <nuxt />
    </nav>
  </div>
  <div id="two">
    <Signin/>
  </div>
  </div>
</template>
<style>
#two{
  display: none;
}
</style>

<script>
import Signin from '~/pages/Signin.vue'

export default {
    name: 'DefaultPage',
    mounted() {
        this.login();
    },
    methods: {
        login() {
            var a = sessionStorage.getItem("token");
            if (a) {
                document.querySelector("#two").style = "display:none;";
                document.querySelector("#one").style = "display:block";
            }
            else {
                document.querySelector("#two").style = "display:block";
                document.querySelector("#one").style = "display:none";
            }
        }
    },
    components: { Signin }
}
</script>
