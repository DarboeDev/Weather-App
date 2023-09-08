import React,{ useState, useEffect } from 'react'
import './App.css'
import {FaMapPin, FaSearch, FaWind} from 'react-icons/fa';
import {FiSun} from 'react-icons/fi';
import {BsDropletFill, BsSpeedometer} from 'react-icons/bs';
import InputSection from './input';
import WeatherDisplay from './assets/weatherDisplay';

function App() {
const [weatherData, setWeatheData] = useState(null)
const [location, setLocation] = useState('banjul')
const [isLoading, setIsLoading] = useState(true)
const [error, setError] = useState(false)




const weatherImages ={
  Clear: 'clear.png',
  Clouds: 'cloud.png',
  Mist: 'mist.png',
  Haze: 'mist.png',
  Rain: 'rain.png',
  Snow: 'snow.jpg',
  Thunderstorm: 'thunderstorm.png'
}
if(error){
  return <div className="error">
    <img src="./src\assets\404.png" alt="" />
    <h1>Location not found</h1>
  </div>
}
  return (
    <>
      <div className="container">
        <InputSection weatherData={weatherData} 
        setWeatheData={setWeatheData}
        location={location}
        setLocation={setLocation}
        setIsLoading={setIsLoading}
        />
        { isLoading ? 
        <main>
          <span class="loader"></span>
        </main>
        : <WeatherDisplay weatherData={weatherData} 
        setWeatheData={setWeatheData}
        location={location}
        setLocation={setLocation}
        error={error}
        setError={setError}
        />}
        
      </div>
    </>
  )
}

export default App
