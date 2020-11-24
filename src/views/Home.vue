<template>
  <div class="home text-center">
    <v-avatar
      size="160"
      color="grey lighten-4"
    >
      <img src="@/assets/home.jpg" alt="avatar">
    </v-avatar>
    <h1 id="about" v-if="mobile">
      당신은 <span style="color: #e800dc" class="highlight">수현이</span>에 대해<br>얼마나 알고있나요?<br>
      WSHT로 당신의<br><span style="color: #f96969" class="highlight">수현도</span><br>(수현이에 대해 알고있는 정도)<br>를 알아봅시다.
    </h1>
    <h1 id="about" v-else>
      당신은 <span style="color: #e800dc" class="highlight">수현이</span>에 대해 얼마나 알고있나요?<br>
      WSHT로 당신의<br><span style="color: #f96969" class="highlight">수현도</span>(수현이에 대해 알고있는 정도)<br>를 알아봅시다.
    </h1>
    <v-btn class="mt-8" color="#852098" outlined tile width="200" height="50" @click="$router.push('about')">시작하기</v-btn>
  </div>
</template>

<script>

export default {
  name: 'Home',
  data(){
    return{
      mobile: screen.width>767 ? false : true
    }
  },
  methods: {
  },
  mounted(){
    this.$store.commit('reset_store');
  }
}
</script>
<style scoped>
*{
  color: #41002c;
}
#about{
  font-family: 'Noto Sans KR', sans-serif;
}
.highlight{
font-size:2.5rem;
}
.hyeon{
  width: 1rem;
  display: block;
  margin: 0 auto;
}
@media ( max-width: 767px ) {
  #about{
    font-size: 1.4rem;
  }
  .highlight{
    font-size: 1.7rem;
  }
}


</style>