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
      ArrayWeather.push(ObjectWeather);
      localStorage.setItem("weather", JSON.stringify(ArrayWeather));
      JSON.parse(localStorage.getItem("weather"));
      display.innerHTML = ""
      display.innerHTML += `
      <p>${city}</p>
      <p>${temperature}°C</p>
      <p>${weatherDescrip}</p>
      
      `

    })
    .catch((error) => {
      showErr.innerHTML = `<p>${error.message}</p>`
    });
}