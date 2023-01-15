<template>
  <div class="main__week-day">
    <h3 class="main__week-title">{{getWeekDay}}</h3>
    <p class="main__week-date">{{getDay}} {{getMoth}}</p>
    <div class="main__week-img">
        
        <img src="@/assets/images/sun1.svg" alt="" v-if="description == 'ясно'">
            <img src="@/assets/images/cloud.svg" alt="" v-else-if="description == 'пасмурна'">
            <img src="@/assets/images/minirain.svg" alt="" v-if="description == 'небольшой дождь'">
            <img src="@/assets/images/minicloud.svg" alt="" v-else-if="description == 'облачно с прояснениями'">
            <img src="@/assets/images/minicloud.svg" alt="" v-else-if="description == 'небольшая облачность'">
            <img src="@/assets/images/minicloud.svg" alt="" v-else-if="description == 'переменная облачность'">
            <img src="@/assets/images/minicloud.svg" alt="" v-else-if="description == 'дымка'">
            <img src="@/assets/images/snow.svg" alt="" v-else-if="description == 'снег'">
            <img src="@/assets/images/snow.svg" alt="" v-else-if="description == 'небольшой снег'">
            <img src="@/assets/images/rain.svg" alt="" v-else-if="description == 'дождь'">
    </div>
    <p class="main__week-temp">+{{Math.round(day.temp.day)}}°</p>
    <p class="main__week-descr">{{day.weather[0].description}}</p>
  </div>
</template>

<script>

import unix from '@/timestamp.js'

export default {
  props:{
    day: Object
  },
  computed:{
    
   description(){
    return this.day.weather[0].description
   },

    getWeekDay(){
      return unix(this.day.dt,'weekday')
    },
    getDay(){
    return unix(this.day.dt,'day')
    },
    getMoth(){
    return unix(this.day.dt,'month')
    },
     
  }
}
</script>

<style>

</style>