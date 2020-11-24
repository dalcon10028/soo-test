<template>
  <div>
  <v-card class="mb-5" color="rgba( 255, 255, 255, 0.0 )" height="400px" style="box-shadow: none;">
    <slot name="header"></slot>
    <v-card
      class="mx-auto mt-8"
      max-width="500"
      outlined
      color="rgba( 255, 255, 255, 0.0 )"
    >
      <slot name="q1"></slot>
      <slot name="q2"></slot>
      <slot name="q3"></slot>
      <slot name="q4"></slot>
    </v-card>
  </v-card>
  </div>
</template>

<script>
export default {
  data(){
    return{
      
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