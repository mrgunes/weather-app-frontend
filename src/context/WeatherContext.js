import {createContext} from 'react';

export let WeatherContext = createContext({
    city:[],
    temp: ([cityName, cityTemp, cityFeels, cityTempMin, CityTempMax, cityHumidity, cityVisib, cityWeaMain, cityWeaDes])=>{
    }
})

export default WeatherContext;