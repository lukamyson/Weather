<template>
  <div class="container" v-if="getFullWeather ">
  <Header/>
  <Main/>
    
  </div>
  <div class="loading" v-else>
   <div class="loading__element">

   </div>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Main from '@/components/Main.vue'


import {mapGetters, mapActions} from 'vuex'

export default { 
 components: {
   Header,
   Main,
   
 },
 methods:{
  ...mapActions(['getWeather'])
 },
 computed:{
  ...mapGetters(['getFullWeather'])
 },
 created(){
  setTimeout(() =>this.getWeather('Tashkent'),2000)
 }
}
</script>

<style>

</style>