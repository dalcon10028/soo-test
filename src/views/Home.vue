<template>
  <div class="home text-center">
    <v-img src="@/assets/home.png" aspect-ratio="1.7" ></v-img>
    <h1 id="about">
      당신은 <span style="font-size:2.5rem; color: #e800dc">수현이</span>에 대해 얼마나 알고있나요?🤔<br>
      WSHT로 당신의 <span style="font-size:2.5rem; color: red">수현도</span>(수현이에 대해 알고있는 정도)<br>를 알아봅시다.🤪
    </h1>
    <v-btn
       x-large
      color="pink darken-1"
      dark
      class="mt-4"
      @click="startTest"
    >
      시작하기 😃
    </v-btn>
  </div>
</template>

<script>

export default {
  name: 'Home',
  methods: {
    startTest: function () {
      this.$router.push('about');
    }
  }
}
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Nanum+Pen+Script&display=swap');
#about{
  font-family: "Nanum Pen Script";
}
.hyeon{
  width: 1rem;
  display: block;
  margin: 0 auto;
}
</style>