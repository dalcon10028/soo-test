<template>
  <div class="result">
    <div>
      <span class="said" v-if="score<50">{{score_values[0].said}}</span>
      <span class="said" v-else-if="score<=70">{{score_values[1].said}}</span>
      <span class="said" v-else-if="score<=80">{{score_values[2].said}}</span>
      <span class="said" v-else-if="score<=100">{{score_values[3].said}}</span>
    </div>
    <v-avatar
      size="250"
      color="grey lighten-4"
    >
      <img v-if="score<50" src="@/assets/score50.jpg" alt="avatar">
      <img v-else-if="score<=70" src="@/assets/score70.jpg" alt="avatar">
      <img v-else-if="score<=80" src="@/assets/score80.jpg" alt="avatar">
      <img v-else-if="score<=100" src="@/assets/score90.jpg" alt="avatar">
    </v-avatar>
    <div class="mt-5">당신의 점수는 <span id="score">{{score}}점</span> 입니다.</div>
    <div v-if="score<50" class="mt-5" v-html="score_values[0].explanation"></div>
    <div v-else-if="score<=70" class="mt-5" v-html="score_values[1].explanation"></div>
    <div v-else-if="score<=80" class="mt-5" v-html="score_values[2].explanation"></div>
    <div v-else-if="score<=100" class="mt-5" v-html="score_values[3].explanation"></div>
    <v-btn class="mt-8" color="#852098" outlined tile width="200" height="50" @click="restart">다시하기</v-btn>

  </div>
</template>
<script>
export default {
  data () {
    return {
      score: this.$store.state.score,
      score_values: [
        {said: '"날 이렇게 모르다니..!"', explanation: '결국 수현이를 울리고 말았군요?<br> 그런식으로 해선 수현이의 <br>마음을 얻을 수 없습니다. <br>분발하세요.'},
        {said: '"하하.. 안녕!"', explanation: '수현이와 애매하게 친한 사이인가 보군요?<br>수현이가 어색하게 인사를 건네고 있습니다.<br>어서 대화를 나눠 더 친해지도록 하세요.'},
        {said: '"꺄르륵 꺄르륵"', explanation: '수현이와 친한 사이인가 보군요?<br>수현이가 진심어린 미소를 짓게 만들었습니다.<br>앞으로도 좋은 사이로 지내세요.'},
        {said: '"나랑.. 버블티 먹으러 갈랭..?"', explanation: '수현이의 마음을 너무 잘 아시는군요?<br>그런식으로 너무 잘 아시면<br>연권이가 질투할 수 있으니 조심하세요?'}
      ]
    }
  },
  computed:{
  },
  methods: {
    restart(){
      this.$store.commit('reset_score');
      this.$router.replace('about');
    }
  }
}
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Nanum+Pen+Script&display=swap');

*{
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 1.4rem;
}
#score{
  font-size: 1.5rem;
  color: #41002c;
  font-weight: bold;
}
.said{
  font-size: 3rem;
  font-family: 'Nanum Pen Script', cursive;
}
</style>