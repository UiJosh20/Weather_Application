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
    // console.log(element);
      let city = element.name;
      let temperature = Math.round(element.main.temp - 273.15);
      let weatherDescrip = element.weather[0].description
      let ObjectWeather = {city, temperature, weatherDescrip}

      if (!city){
        showErr.innerHTML = `<p>Please enter a city name</p>`
      }
        else{

          ArrayWeather.push(ObjectWeather);
          localStorage.setItem("weather", JSON.stringify(ArrayWeather));
          JSON.parse(localStorage.getItem("weather"));
          display.innerHTML = ""
          display.innerHTML += `
          <h1>${city}</h1>
          <h4>${temperature}°C</h4>
          <h4>${weatherDescrip}</h4>
          
          `
        }

    })
    .catch((error) => {
      console.log(error.message)
    });
}