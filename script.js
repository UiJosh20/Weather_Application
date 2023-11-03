const checkCity = () => {
  let ArrayWeather = []
  let identity = cityName.value
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${identity}&appid=f16d4a044174bf7cce0f638f850f5428`
  cityName.value = ""
  fetch(apiUrl)
  .then((response) => {
  
    return response.json()
  
  })
  .then((element)=>{
    console.log(element);
      let city = element.name;
      let temperature = Math.round(element.main.temp - 273.15);
      let weatherDescrip = element.weather[0].description;
      let country = element.sys.country;
      let wind =  Math.round(element.wind.speed) ;

      if (!city){
        showErr.innerHTML = `<p>Please enter a city name</p>`
      }
        else{
          display.innerHTML = ""
          display.innerHTML += `
          <h1 style="color:white;">${temperature}°C</h1>
          <h3 style="color:white;">${weatherDescrip}</h3>
          <h3 style="color:white;">${city}</h3>
          <h3 style="color:white;">${country}</h3>
          
          `
          display2.innerHTML += `
          
          <br>
          <h2 style="color:white;">${wind}Km/h Wind speed</h2>
     
          
        
          
          `
        }

    })
    .catch((error) => {
      console.log(error.message)
    });
}