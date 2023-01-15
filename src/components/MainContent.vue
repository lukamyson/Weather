<template>
  <div class="main__content">
    <div class="main__content-left">
        <p class="main__content-degree">{{Math.round(getFullWeather.current.temp)}}°</p>
        <p class="main__content-today"> Сегодня</p>
        <p class="main__content-time"> Время: {{getHours}} : {{getMinutes}}</p>
        <p class="main__content-city"> Город: {{getFullWeather.name}}</p>
        <div class="main__content-img">
            <img src="@/assets/images/sun1.svg" alt="" v-if="description == 'ясно'">
            <img src="@/assets/images/cloud.svg" alt="" v-else-if="description == 'пасмурна'">
            <img src="@/assets/images/minirain.svg" alt="" v-if="description == 'небольшой дождь'">
            <img src="@/assets/images/sunrain.svg" alt="" v-else-if="description == 'облачно с прояснениями'">
            <img src="@/assets/images/minicloud.svg" alt="" v-else-if="description == 'небольшая облачность'">
            <img src="@/assets/images/minicloud.svg" alt="" v-else-if="description == 'переменная облачность'">
            <img src="@/assets/images/minicloud.svg" alt="" v-else-if="description == 'дымка'">
            <img src="@/assets/images/snow.svg" alt="" v-else-if="description == 'снег'">
            <img src="@/assets/images/snow.svg" alt="" v-else-if="description == 'небольшой снег'">
            <img src="@/assets/images/rain.svg" alt="" v-else-if="description == 'дождь'">

        </div>
    </div>
    <div class="main__content-right">
        <img src="@/assets/images/HeaderBg.svg" alt="" class="main__content-bg">
        <div class="main__content-item">
            <div class="main__content-icon">
                <img src="@/assets/images/temp.svg" alt="">
            </div>
            <span>Температура</span>
            <span class="main__content-temp">
                 {{Math.round(getFullWeather.current.temp)}}°  - ощущается как 
                 {{Math.round(getFullWeather.current.feels_like)}}°
                 </span>
        </div>
        <div class="main__content-item">
            <div class="main__content-icon">
                <img src="@/assets/images/pressure.svg" alt="">
            </div>
            <span>Давление </span>
            <span class="main__content-temp">{{getFullWeather.current.pressure}} мм ртутного столба - нормальное</span>
        </div>
        <div class="main__content-item">
            <div class="main__content-icon">
                <img src="@/assets/images/precipitation.svg" alt="">
            </div>
            <span>Осадки</span>
            <span class="main__content-temp">{{getFullWeather.current.humidity}} %  </span>
        </div>
        <div class="main__content-item">
            <div class="main__content-icon">
                <img src="@/assets/images/wind.svg" alt="">
            </div>
            <span>Ветер</span>
            <span class="main__content-temp">{{ getFullWeather.current.wind__speed }} м/с юго-запад - легкий ветер</span>
        </div>
    </div>
  </div>
</template>

<script> 

import unix from '@/timestamp.js'
import {mapGetters} from 'vuex'


export default {
 computed: {
 ...mapGetters(['getFullWeather']),
 description(){
    return this.getFullWeather.current.weather[0].description;
 },
getHours () {
    return unix (this.getFullWeather.current.dt, "hours");
},
getMinutes () {
       return unix ( this.getFullWeather.current.dt, "min");
},


 },
};
</script>

<style>

</style>