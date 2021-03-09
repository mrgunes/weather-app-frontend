import {createContext} from 'react';

export let WeatherContext = createContext({
    city:[],
    temp: (/*[cityName, cityTemp, cityFeels, cityTempMin, cityTempMax, cityHumidity, cityVisib, cityWeaMain, cityWeaDes, cityWeaIcon]*/)=>{
    }
})

export default WeatherContext;