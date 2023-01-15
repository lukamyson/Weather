function unix (dt,type) {
    const milliseconds = dt * 1000
    const data = new Date(milliseconds)
    let result = type == 'weekday' ? data.toLocaleString("ru-Ru",{weekday: "long"}) : type =='month' ? data.
    toLocaleString("ru-Ru", {month: "long"}) :  
    type == 'day' ? data.toLocaleString("ru-Ru", {day: "numeric"}) :
    type == 'hours' ? data.getHours() :
    type == 'min' ? data.getMinutes() : ''
    return result;
}
   export default unix  
    
    
    
    