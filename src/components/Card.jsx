import React from 'react';
import hazeImg from "../assets/haze.png"
import mistImg from "../assets/mist.png"
import SunnyImg from "../assets/sunny.png"
import RainyImg from "../assets/rainy.png"
function Card({ weather }) {
  let temp = 0;
  const now = new Date();
  const hours = now.getHours();
console.log(hours); 


  if(weather.weather[0].description === 'broken clouds' || weather.weather[0].description === 'mist' || weather.weather[0].description === 'scattered clouds' ||  weather.weather[0].description === 'few clouds' ){
    temp = 1;
   }

   if(weather.weather[0].description === 'haze'){
    temp = 2;
   }

   if(weather.weather[0].description === 'overcast clouds' || weather.weather[0].description === 'clear sky' ) {
    temp = 3;
   }

   if(weather.weather[0].description === 'heavy intensity rain' || weather.weather[0].description === 'light rain' ){
    temp = 4;
   }




  return (
    <div className='flex flex-col mt-4'>
      <div className='flex flex-col items-center justify-center'>
       {temp == 1 ? <img className='w-[100px] m-4 ' src={mistImg} alt="" /> : null}
       {temp == 2 ? <img className='w-[100px] m-4 ' src={hazeImg} alt="" /> : null}
       {temp == 3 ? <img className='w-[100px] m-4 ' src={SunnyImg} alt="" /> : null}
       {temp == 4 ? <img className='w-[100px] m-4 ' src={RainyImg} alt="" /> : null}
      </div>
      

      <h2 className='text-center text-3xl font-bold'>{weather.name}, {weather.sys.country}</h2>
      
      <p className='text-2xl text-center pt-2'>{weather.main.temp} °C</p>
      <div className='flex pt-3 justify-evenly text-center'>
      <p>Humidity <br/> {weather.main.humidity} %</p>
      <p>Wind Speed <br/> {weather.wind.speed} m/s</p>
      </div>
      <div className='flex py-3 justify-evenly text-center'>
      <p>Feels Like <br/> {weather.main.feels_like} °C</p>
      <p>Pressure <br/> {weather.main.pressure} atm</p>
      </div>
      
    </div>
  );
}

export default Card;