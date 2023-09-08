import React,{ useState, useEffect } from 'react'
import {FaMapPin, FaSearch, FaWind} from 'react-icons/fa';
import {FiSun} from 'react-icons/fi';
import {BsDropletFill, BsSpeedometer} from 'react-icons/bs'

function WeatherDisplay ({weatherData}){
    
const weatherImages ={
    Clear: 'clear.png',
    Clouds: 'cloud.png',
    Mist: 'mist.png',
    Haze: 'mist.png',
    Rain: 'rain.png',
    Snow: 'snow.jpg',
    Thunderstorm: 'thunderstorm.png'
  }
    return(
<main>
          <div className="section-center">
            <h1 className="city">{weatherData.name}</h1>
            <img className='weather-img' src={`./src/assets/${weatherImages[weatherData.weather[0].main]}`} alt="" />
            <h1 className="temp">{Math.round(weatherData.main.temp)}°C</h1>
            <h4 className="weather">{weatherData.weather[0].main}</h4>
          </div>
          <div className="info">
             <div className="box wind">
              <div>
              <FaWind className='wind-icons'/>
                <p className="text">
                  Wind
                </p>
              </div>
              <p>{weatherData.wind.speed} km/h</p>
             </div>
             <div className="box humidity">
              <div>
              <BsDropletFill className='water-icons'/>
                <p className="text">
                  Humidity
                </p>
              </div>
             <p>{weatherData.main.humidity}%</p>
             </div>
             <div className="box pressure">
              <div>
              <BsSpeedometer className='pressure-icons'/>
                <p className="text">
                  Pressure
                </p>
              </div>
             <p>{weatherData.main.pressure} hPa</p>
             </div>
             <div className="box visibility">
              <div>
              <FiSun className='sun-icons'/>
                <p className="text">
                  Visibility
                </p>
              </div>
               <p>{weatherData.visibility}m</p>
             </div>
          </div>
        </main>
    )
}

export default WeatherDisplay