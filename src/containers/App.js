import React, {useState} from 'react'
import '../App.css';
import {WeatherContext} from '../context/WeatherContext'
import SearchBar from './SearchBar';
import WeatherStatus from './WeatherStatus'

function App() {
  let [city, setCity]=useState(['']);
  
  let temp=([cityName,cityTemp, cityWeaMain,cityTempMin, cityTempMax, cityWeaIcon, citySunrise, citySunset, cityTime, cityTimeZone,cityOneHourTime, cityOneHourPre, cityFeelsLike, cityHumidity, cityWindPre, cityVisibility, cityDailyIcon, cityDailyPop, citySeDaTime, citySeDaMax, citySeDaMin, citySeDaIcon, citySeDaPop, cityThDaTime, cityThDaMax, cityThDaMin, cityThDaIcon, cityThDaPop, cityFoDaTime, cityFoDaMax, cityFoDaMin, cityFoDaIcon, cityFoDaPop, cityFiDaTime, cityFiDaMax, cityFiDaMin, cityFiDaIcon, cityFiDaPop])=>{
    setCity([
      { cityName: cityName, 
        cityTemp: cityTemp,
        cityWeaMain: cityWeaMain,
        cityTempMin: cityTempMax,
        cityTempMax: cityTempMin,
        cityWeaIcon: cityWeaIcon,
        citySunrise: citySunrise,
        citySunset: citySunset,
        cityTime: cityTime,
        cityTimeZone: cityTimeZone,
        cityOneHourTime: cityOneHourTime,
        cityOneHourPre: cityOneHourPre,
        cityFeelsLike: cityFeelsLike,
        cityHumidity: cityHumidity,
        cityWindPre: cityWindPre,
        cityVisibility: cityVisibility,
        cityDailyIcon: cityDailyIcon,
        cityDailyPop: cityDailyPop,
        citySeDaTime: citySeDaTime,
        citySeDaMax: citySeDaMax,
        citySeDaMin: citySeDaMin, 
        citySeDaIcon: citySeDaIcon,
        citySeDaPop: citySeDaPop,
        cityThDaTime: cityThDaTime,
        cityThDaMax: cityThDaMax,
        cityThDaMin: cityThDaMin, 
        cityThDaIcon: cityThDaIcon,
        cityThDaPop: cityThDaPop,
        cityFoDaTime: cityFoDaTime,
        cityFoDaMax: cityFoDaMax,
        cityFoDaMin: cityFoDaMin, 
        cityFoDaIcon: cityFoDaIcon,
        cityFoDaPop: cityFoDaPop,
        cityFiDaTime: cityFiDaTime,
        cityFiDaMax: cityFiDaMax,
        cityFiDaMin: cityFiDaMin, 
        cityFiDaIcon: cityFiDaIcon,
        cityFiDaPop: cityFiDaPop,
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
