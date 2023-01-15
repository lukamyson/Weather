import {createStore} from 'vuex'
import axios from 'axios'

const store = createStore({
  state: {
    apiKey: '3c9333a1a3a40ca893996cbeb44b7022', 
    getFullWeather: null
  },
  mutations:{
    getWeather(state,payload){
      state.getFullWeather = payload 
    }
   },
  actions:{
    async getWeather({commit, state}, city) {
    try {
      let res = await axios.get(`https://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${state.apiKey}`)
      let weather = res.data[0]
      let { lat,lon, name } = weather
      let res2 = await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly,alerts,minutely&appid=${state.apiKey}&units=metric&lang=ru`)
      
      let weatherInfo = res2.data;
      let weatherObj = {...weatherInfo, name: name }
      console.log(weatherObj);
      commit('getWeather',weatherObj)   

    } catch (error) {
      console.log(error);
    }
    }
  },
  
  getters:{
    getFullWeather: state =>state.getFullWeather,
    getDailyWeather: state =>state.getFullWeather.daily
    
    }
})

    export default store
