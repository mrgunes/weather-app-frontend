import React, {useState} from 'react'
import '../App.css';
import {WeatherContext} from '../context/WeatherContext'
import SearchBar from './SearchBar';
import WeatherStatus from './WeatherStatus'

function App() {
  let [city, setCity]=useState([''])
  let temp=([cityName,cityTemp, cityWeaMain,cityTempMin, cityTempMax, cityWeaIcon, citySunrise, citySunset, cityTime])=>{
    setCity([
      { cityName: cityName, 
        cityTemp: cityTemp,
        cityWeaMain: cityWeaMain,
        cityTempMin: cityTempMin,
        cityTempMax: cityTempMax,
        cityWeaIcon: cityWeaIcon,
        citySunrise: citySunrise,
        citySunset: citySunset,
        cityTime: cityTime
      }
    ])
  }
  console.log(city)
  return (
    <WeatherContext.Provider value={{city,temp}}>
    <div>
        <h1 className='h1ForApp'>5-Day Weather Forecast</h1>
        <SearchBar/>
        <WeatherStatus/>
    </div>
    </WeatherContext.Provider>
  );
}

export default App;
