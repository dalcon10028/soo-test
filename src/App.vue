<template>
  <v-app id="app">
    <router-view class="text-center" v-if="mobile" />
    <v-container fluid v-else>
      <v-row>
        <v-col md="3" class="text-center">
          <img src="../src/assets/daram.png" alt="다람쥐 수현" id="daram">
        </v-col>
        <v-col md="6" class="text-center mt-8">
          <router-view/>
        </v-col>
        <v-col md="3">
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>
<script>
  export default {
  name: 'App',
  data(){
    return{
      mobile: screen.width>767 ? false : true
    }
  }
}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400&display=swap');
  #app{
    background-image: url('../src/assets/background.png');
  }
  #daram {animation: motion 0.3s linear 0s infinite alternate; margin-top:10rem;}     
  @keyframes motion {
    0% {margin-top: 10rem;}
    100% {margin-top: 11rem;}
  }
  @media ( max-width: 767px ) {
    #daram{display: none;}
  }
</style>
