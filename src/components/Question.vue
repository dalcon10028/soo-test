<template>
  <div>
  <v-card class="mb-5" color="grey lighten-3" height="400px" v-for="(q, i) in qestion" :key="i">
    <h1 class="pt-11">{{q.content}}</h1>
    <v-card
      class="mx-auto mt-8"
      max-width="500"
      outlined
      color="grey lighten-3"
    >
    <v-btn block class="mb-3" color="pink lighten-3" large dark>{{q.a1}}</v-btn>
    <v-btn block class="mb-3" color="pink lighten-3" large dark>{{q.a2}}</v-btn>
    <v-btn block class="mb-3" color="pink lighten-3" large dark>{{q.a3}}</v-btn>
    <v-btn block class="mb-3" color="pink lighten-3" large dark>{{q.a4}}</v-btn>
    </v-card>
  </v-card>
  </div>
</template>

<script>
export default {
  data(){
    return{
      qestion: [
        {content: 'Q. 다음 중 수현이의 생년월일로 올바른 것은?', a1: '1999년 2월 1일', a2: '1999년 1월 11일', a3: '1998년 6월 7일', a4: '1998년 10월 28일'},
      ]
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Do+Hyeon&display=swap');

h1{
  font-family: 'Do Hyeon';
}
</style>