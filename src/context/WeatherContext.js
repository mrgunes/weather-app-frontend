import {createContext} from 'react';

export let WeatherContext = createContext({
    city:{},
    temp: (cityName, cityTemp)=>{
    }
})

export default WeatherContext;