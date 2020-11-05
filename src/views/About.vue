<template>
  <div class="about">
    <v-stepper v-model="e1" style="height: 100vh">
      <v-stepper-header>
        <v-stepper-step :complete="e1 > n" step="n" color="pink darken-1"></v-stepper-step>
        <v-divider></v-divider>
        <v-stepper-step :complete="e1 > 2" step="2" color="pink darken-1"></v-stepper-step>
        <v-divider></v-divider>
        <v-stepper-step :complete="e1 > 3" step="3" color="pink darken-1"></v-stepper-step>
        <v-divider></v-divider>
        <v-stepper-step :complete="e1 > 4" step="4" color="pink darken-1"></v-stepper-step>
        <v-divider></v-divider>
        <v-stepper-step :complete="e1 > 5" step="5" color="pink darken-1"></v-stepper-step>
        <v-divider></v-divider>
        <v-stepper-step :complete="e1 > 6" step="6" color="pink darken-1"></v-stepper-step>
        <v-divider></v-divider>
        <v-stepper-step :complete="e1 > 7" step="7" color="pink darken-1"></v-stepper-step>
        <v-divider></v-divider>
        <v-stepper-step :complete="e1 > 8" step="8" color="pink darken-1"></v-stepper-step>
        <v-divider></v-divider>
        <v-stepper-step :complete="e1 > 9" step="9" color="pink darken-1"></v-stepper-step>
        <v-divider></v-divider>
        <v-stepper-step step="10" color="pink darken-1"></v-stepper-step>
      </v-stepper-header>
      <v-stepper-items class="text-center">
        <v-stepper-content step="1">
          <Question/>
          <v-btn dark color="pink darken-1" @click="e1 = e1+1">다음문제</v-btn>
        </v-stepper-content>

        <v-stepper-content step="2">
          <v-card class="mb-5" color="grey lighten-1" height="400px"></v-card>
          <v-btn dark color="pink darken-1" @click="e1 = e1+1">다음문제</v-btn>
        </v-stepper-content>

        <v-stepper-content step="3">
          <v-card class="mb-5" color="grey lighten-1" height="400px"></v-card>
          <v-btn dark color="pink darken-1" @click="e1 = e1+1">다음문제</v-btn>
        </v-stepper-content>
        
        <v-stepper-content step="4">
          <v-card class="mb-5" color="grey lighten-1" height="400px"></v-card>
          <v-btn dark color="pink darken-1" @click="e1 = e1+1">다음문제</v-btn>
        </v-stepper-content>

        <v-stepper-content step="5">
          <v-card class="mb-5" color="grey lighten-1" height="400px"></v-card>
          <v-btn dark color="pink darken-1" @click="e1 = e1+1">다음문제</v-btn>
        </v-stepper-content>

        <v-stepper-content step="6">
          <v-card class="mb-5" color="grey lighten-1" height="400px"></v-card>
          <v-btn dark color="pink darken-1" @click="e1 = e1+1">다음문제</v-btn>
        </v-stepper-content>

        <v-stepper-content step="7">
          <v-card class="mb-5" color="grey lighten-1" height="400px"></v-card>
          <v-btn dark color="pink darken-1" @click="e1 = e1+1">다음문제</v-btn>
        </v-stepper-content>

        <v-stepper-content step="8">
          <v-card class="mb-5" color="grey lighten-1" height="400px"></v-card>
          <v-btn dark color="pink darken-1" @click="e1 = e1+1">다음문제</v-btn>
        </v-stepper-content>

        <v-stepper-content step="9">
          <v-card class="mb-5" color="grey lighten-1" height="400px"></v-card>
          <v-btn dark color="pink darken-1" @click="e1 = e1+1">다음문제</v-btn>
        </v-stepper-content>

        <v-stepper-content step="10">
          <v-card class="mb-5" color="grey lighten-1" height="400px"></v-card>
          <v-btn dark color="pink darken-1" @click="$router.replace('result')">결과보기</v-btn>
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
    }
  },
  methods: {
  },
  components: {
    Question
  }
}
</script>
<style scoped>

</style>