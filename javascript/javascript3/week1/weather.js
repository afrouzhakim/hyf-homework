//const apiKey = '8242b938a229ad17e2c4b6633c5f1e80';
//const weatherUrl = 'https://api.openweathermap.org/data/2.5/weather?q=copenhagen&appid=';
function fetchData() {
    let city= document.getElementById("city").value;
    return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=8242b938a229ad17e2c4b6633c5f1e80`)
    .then(response => response.json())
    .then(renderOutput)
  }
  
  
  function renderOutput(data) {
    const root = document.getElementById('root')
    const output = `
      <ul>
        <li>The choosen city is: ${data.name}</li>
        <li>The minimum temperature is: ${data.main.temp_min}</li>
        <li>The maximum temperature is: ${data.main.temp_max}</li>
        <li>The Wind speed is: ${data.wind.speed}</li>
        <li>How clowdy it is: ${data.clouds.all}</li>
        <li>The sunrise is: ${data.sys.sunrise}</li>
        <li>The sunset is: ${data.sys.sunset}</li>
      </ul>
    `
    root.innerHTML = output;
    } 
    
  document.getElementById('render_output')
    .addEventListener('click', fetchData)
  