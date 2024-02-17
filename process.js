const locate=document.getElementById("locationinput");
const longitude=document.getElementById("longitude");
const latitude=document.getElementById("latitude");
const temp=document.getElementById("temp");
const feel=document.getElementById("feel");
const min_temp=document.getElementById("min_temp");
const max_temp=document.getElementById("max_temp");
const pressure=document.getElementById("pressurevalue");
const humidity=document.getElementById("humidityvalue");
const speed=document.getElementById("speed");
const direction=document.getElementById("direction");
const api1="https://api.openweathermap.org/data/2.5/weather?q="
const api2="&appid=0c8ad3128f981928e8934de5e0264b44&units=metric"
async function apiLoader(api)
{
    const response=await fetch(api);
    const data=await response.json();
    longitude.innerHTML=data.coord.lon;
    latitude.innerHTML=data.coord.lat;
    temp.innerHTML=data.main.temp;
    feel.innerHTML=data.main.feels_like;
    min_temp.innerHTML=data.main.temp_min;
    max_temp.innerHTML=data.main.temp_max;
    pressure.innerHTML=data.main.pressure;
    humidity.innerHTML=data.main.humidity;
    speed.innerHTML=data.wind.speed;
    direction.innerHTML=data.wind.deg;
}
function find()
{
    const api=api1+locate.value+api2;
    apiLoader(api);
}