import React, {createContext} from 'react';

export let WeatherContext = createContext({
    city:'',
    temp: ''
})

export default WeatherContext;