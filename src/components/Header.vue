<template>
  <header class="header">
    <nav class="header__nav">
      <a href="" class="logo">
        <img src="@/assets/images/logo.svg" alt="" />
        <span>vue weather</span>
      </a>

      <div class="header__search">
        <img src="@/assets/images/water.svg" alt="" />
        <input
         @keydown.enter ="getWeather(query)"
          type="text"
          placeholder="Выбрать город..."
          class="header__search-input"
          v-model="query"
         
        />
      </div>
    </nav>
  </header>
</template>

<script>

import{mapActions}from 'vuex'

export default {
  data() {
    return {
      query: ""
    }
  },
  methods:{
   ...mapActions(['getWeather']),
  }
  // methods:{
  //   setWeather(){
  //     this.$store.dispatch('getWeather',this.query)
  //   }
  // }
};
</script>

<style>
</style>