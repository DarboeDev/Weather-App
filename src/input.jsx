import React,{ useState, useEffect } from 'react'
import {FaMapPin, FaSearch, FaWind} from 'react-icons/fa';

function InputSection ({weatherData, setWeatheData, location, setLocation, setError, error, setIsLoading}){

    const handleSumbit = (e)=>{
        e.preventDefault()
        
          getWeatherData(location)
          setLocation('')
      }
      const getWeatherData = async (city) =>{
        try{
          setIsLoading(true)
          const response = await fetch(
           `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=1e76f4166e7ac1e5f82edde1a9d5433b`
          );
          const data = await response.json();
          setWeatheData(data)
          setIsLoading(false)
        } catch(error){
          console.error('Error fetching weather data:', error);
          setError(true)
        }
       
       }
      useEffect(()=>{
        getWeatherData(location)
      },[])
    return(
<div className="input-section">
            <form onSubmit={handleSumbit}>
              <FaMapPin className='pin-icon'/>
              <input type="text" placeholder='Enter location' value={location} onChange={e => setLocation(e.target.value)} />
              <button className='search-icon' type='submit'>
                <FaSearch />
              </button>
            </form>
        </div>
    )
}

export default InputSection