<template>
  <div class="about">
    <v-stepper v-model="e1" id="stepper" style="background-color: rgba( 255, 255, 255, 0.3 )">
      <v-progress-linear
        color="#41002c"
        height="2"
        :value="value"
        id="progress"
        ></v-progress-linear>
      <v-stepper-items class="text-center">
        <v-stepper-content step="1">
          <Question>
            <h1 slot="header" class="pt-11">{{qestion[0].content}}</h1>
            <v-btn block class="mb-3" color="#41002c" outlined tile large slot="q1" @click="select_answer">{{qestion[0].a1}}</v-btn>
            <v-btn block class="mb-3" color="#41002c" outlined tile large dark slot="q2" @click="select_correct_answer">{{qestion[0].a2}}</v-btn>
            <v-btn block class="mb-3" color="#41002c" outlined tile large dark slot="q3" @click="select_answer">{{qestion[0].a3}}</v-btn>
            <v-btn block class="mb-3" color="#41002c" outlined tile large dark slot="q4" @click="select_answer">{{qestion[0].a4}}</v-btn>
          </Question>
        </v-stepper-content>

        <v-stepper-content step="2">
          <Question>
            <h1 slot="header" class="pt-11">{{qestion[1].content}}</h1>
            <v-btn block class="mb-3" color="#41002c" outlined tile large dark slot="q1" @click="select_answer">{{qestion[1].a1}}</v-btn>
            <v-btn block class="mb-3" color="#41002c" outlined tile large dark slot="q2" @click="select_answer">{{qestion[1].a2}}</v-btn>
            <v-btn block class="mb-3" color="#41002c" outlined tile large dark slot="q3" @click="select_correct_answer">{{qestion[1].a3}}</v-btn>
            <v-btn block class="mb-3" color="#41002c" outlined tile large dark slot="q4" @click="select_answer">{{qestion[1].a4}}</v-btn>
          </Question>
        </v-stepper-content>

        <v-stepper-content step="3">
          <Question>
            <h1 slot="header" class="pt-11">{{qestion[2].content}}</h1>
            <v-btn block class="mb-3" color="#41002c" outlined tile large dark slot="q1" @click="select_answer">{{qestion[2].a1}}</v-btn>
            <v-btn block class="mb-3" color="#41002c" outlined tile large dark slot="q2" @click="select_correct_answer">{{qestion[2].a2}}</v-btn>
            <v-btn block class="mb-3" color="#41002c" outlined tile large dark slot="q3" @click="select_answer">{{qestion[2].a3}}</v-btn>
            <v-btn block class="mb-3" color="#41002c" outlined tile large dark slot="q4" @click="select_answer">{{qestion[2].a4}}</v-btn>
          </Question>
        </v-stepper-content>
        
        <v-stepper-content step="4">
          <Question>
            <h1 slot="header" class="pt-11">{{qestion[3].content}}</h1>
            <v-btn block class="mb-3" color="#41002c" outlined tile large dark slot="q1" @click="select_correct_answer">{{qestion[3].a1}}</v-btn>
            <v-btn block class="mb-3" color="#41002c" outlined tile large dark slot="q2" @click="select_answer">{{qestion[3].a2}}</v-btn>
            <v-btn block class="mb-3" color="#41002c" outlined tile large dark slot="q3" @click="select_answer">{{qestion[3].a3}}</v-btn>
            <v-btn block class="mb-3" color="#41002c" outlined tile large dark slot="q4" @click="select_answer">{{qestion[3].a4}}</v-btn>
          </Question>
        </v-stepper-content>

        <v-stepper-content step="5">
          <Question>
            <h1 slot="header" class="pt-11">{{qestion[4].content}}</h1>
            <v-btn block class="mb-3" color="#41002c" outlined tile large dark slot="q1" @click="select_answer">{{qestion[4].a1}}</v-btn>
            <v-btn block class="mb-3" color="#41002c" outlined tile large dark slot="q2" @click="select_correct_answer">{{qestion[4].a2}}</v-btn>
            <v-btn block class="mb-3" color="#41002c" outlined tile large dark slot="q3" @click="select_answer">{{qestion[4].a3}}</v-btn>
            <v-btn block class="mb-3" color="#41002c" outlined tile large dark slot="q4" @click="select_answer">{{qestion[4].a4}}</v-btn>
          </Question>
        </v-stepper-content>

        <v-stepper-content step="6">
          <Question>
            <h1 slot="header" class="pt-11">{{qestion[5].content}}</h1>
            <v-btn block class="mb-3" color="#41002c" outlined tile large dark slot="q1" @click="select_correct_answer">{{qestion[5].a1}}</v-btn>
            <v-btn block class="mb-3" color="#41002c" outlined tile large dark slot="q2" @click="select_correct_answer">{{qestion[5].a2}}</v-btn>
            <v-btn block class="mb-3" color="#41002c" outlined tile large dark slot="q3" @click="select_correct_answer">{{qestion[5].a3}}</v-btn>
            <v-btn block class="mb-3" color="#41002c" outlined tile large dark slot="q4" @click="select_correct_answer">{{qestion[5].a4}}</v-btn>
          </Question>
        </v-stepper-content>

        <v-stepper-content step="7">
          <Question>
            <h1 slot="header" class="pt-11">{{qestion[6].content}}</h1>
            <v-btn block class="mb-3" color="#41002c" outlined tile large dark slot="q1" @click="select_correct_answer" height="84">{{qestion[6].a1}}</v-btn>
            <v-btn block class="mb-3" color="#41002c" outlined tile large dark slot="q2" @click="select_answer" height="84">{{qestion[6].a2}}</v-btn>
          </Question>
        </v-stepper-content>

        <v-stepper-content step="8">
          <Question>
            <h1 slot="header" class="pt-11">{{qestion[7].content}}</h1>
            <v-btn block class="mb-3" color="#41002c" outlined tile large dark slot="q1" @click="select_answer" height="84">{{qestion[7].a1}}</v-btn>
            <v-btn block class="mb-3" color="#41002c" outlined tile large dark slot="q2" @click="select_correct_answer" height="84">{{qestion[7].a2}}</v-btn>
          </Question>
        </v-stepper-content>

        <v-stepper-content step="9">
          <Question>
            <h1 slot="header" class="pt-11">{{qestion[8].content}}</h1>
            <v-btn block class="mb-3" color="#41002c" outlined tile large dark slot="q1" @click="select_correct_answer" height="84">{{qestion[8].a1}}</v-btn>
            <v-btn block class="mb-3" color="#41002c" outlined tile large dark slot="q2" @click="select_answer" height="84">{{qestion[8].a2}}</v-btn>
          </Question>
        </v-stepper-content>

        <v-stepper-content step="10">
          <Question>
            <h1 slot="header" class="pt-11">{{qestion[9].content}}</h1>
            <v-btn block class="mb-3" color="#41002c" outlined tile large dark slot="q1" @click="select_answer" height="84">{{qestion[9].a1}}</v-btn>
            <v-btn block class="mb-3" color="#41002c" outlined tile large dark slot="q2" @click="select_correct_answer" height="84">{{qestion[9].a2}}</v-btn>
          </Question>
        </v-stepper-content>
        
      </v-stepper-items>
    </v-stepper>
  </div>
</template>
<script>
import Question from '@/components/Question'

export default {
  data () {
    return {
      e1: 1,
      qestion: [
        // 1번
        {content: '수현이의 생년월일로 올바른 것은?', a1: '1999년 2월 1일', a2: '1999년 1월 11일', a3: '1998년 6월 7일', a4: '1998년 10월 28일'},
        // 2번
        {content: '수현이의 전화번호로 올바른 것은?', a1: '010-8566-7296', a2: '010-7296-8566', a3: '010-8326-1579', a4: '010-1579-8326'},
        // 3번
        {content: '수현이가 겨울에 가장 좋아하는 과일은?', a1: '귤', a2: '딸기', a3: '포도', a4: '망고스틴'},
        // 4번
        {content: '수현이가 제일 좋아하는 아티스트는?', a1: '10cm', a2: 'crush', a3: '폴킴', a4: '성시경'},
        // 5번
        {content: '수현이가 졸업한 중학교 이름은?', a1: '장안중학교', a2: '명인중학교', a3: '수원중학교', a4: '정자중학교'},
        // 6번
        {content: '수현이가 가장 싫어하는 상황은?', a1: '핸드폰 변기에 빠뜨리기', a2: '노트북에 커피 쏟기', a3: '햄 볶다가 기름에 데여서 새솔외과 가기', a4: '겨울에 사람 많은 버스정류장에서 미끌어 넘어지기'},
        // 7번
        {content: '수현이에게 온 카톡 "내일 모햄?" 답변은?', a1: '"내일 만날까?"', a2: '"나? 좀 쉴려고"'},
        // 8번
        {content: '"아 배부르당" 저녁을 먹고 가게에서 나온 수현이, 다음에 이어질 말은?', a1: '"소화 좀 시켜야겠다.."', a2: '"디저트 뭐먹을랭?"'},
        // 9번
        {content: '"수현이가 뭔가 먹고있네요? 무슨 소리가 날까요?"', a1: '뇸뇸뇸뇸~', a2: '우걱우걱 챱챱 쩝쩝'},
        // 10 번
        {content: '"어딘가로 떠나고싶어.." 수현이가 가고싶은 곳은 어디일까요?', a1: '산', a2: '바다'},
      ],
      value: 10,
      mobile: screen.width>767 ? false : true
    }
  },
  methods: {
    select_answer: function() {
      this.e1 += 1;
      this.value += 10;
      if(this.e1===10) this.$router.replace('result');
    },
    select_correct_answer: function() {
      this.$store.commit('correct_answer');
      this.e1 += 1;
      this.value += 10;
      if(this.e1===10) this.$router.replace('result');
    },
  },
  computed: {
    score: function() {
      return this.$store.state.score;
    }
  },
  components: {
    Question
  }
}
</script>
<style scoped>
*{
  font-family: 'Noto Sans KR', sans-serif;
}
  #progress{
    margin: 1rem auto;
    width: 80%;
  }
  #stepper{
    box-shadow: none;
  }
</style>