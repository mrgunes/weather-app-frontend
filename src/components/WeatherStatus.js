import React from 'react'
import {WiDaySunny,WiSunrise,WiSunset,WiThermometer,WiHumidity,WiStrongWind,WiDust} from "weather-icons-react"

export default function WeatherStatus() {
    return (
        <div className='weatherMainContainer'>
            <div className='weatherSingleDiv'>
                <span className='firstLineSingle'>
                    <h3>Bothell, WA Weather</h3>
                    <h4>As of 10:40 PM PST</h4>
                </span>
                <span className="secondLineSingle">
                    <h1>4°</h1>
                </span>
                <span className='thirdLineSingle'>
                    <h3>Cloudy</h3>
                    <h4>2% chance of rain through 11 PM</h4>
                </span>
                <span className='fourthLineSingle'>
                    <WiDaySunny className='sunny' size={80} color='yellow'  />
                    <h3>--/2°</h3>
                </span>
            </div>
            <div className='weatherInfoDiv'>
                <span className='firstSpanLine'>
                    <span className='firstLineInfo'>
                        <h3>Weather Today in Bothell, WA</h3>
                        <h1>4°</h1>
                        <p>Feels like</p>
                    </span>
                    <span className='secondLineInfo'>
                        <span className='secondLineInfoSpan'>
                            <WiSunrise className='rise' size={80} color='#000'  />
                            <p>6:56 am</p>
                        </span>
                        <span className='secondLineInfoSpan'>
                            <WiSunset className='set' size={80} color='#000'  />
                            <p>7:56 pm</p>
                        </span>   
                    </span>
                </span>
                <span className='secondSpanLine'>
                    <div className='infoSet'>
                        <p><WiThermometer className='infoSetIcon' size={30} color='#000'  />High/Low</p>
                        <p className='infoSetP'>--/2°</p>
                    </div>
                    <div className='infoSet'>
                        <p><WiHumidity className='infoSetIcon' size={30} color='#000'  />Humidity</p>
                        <p className='infoSetPH'>85%</p>
                    </div>
                    <div className='infoSet'>
                        <p><WiStrongWind className='infoSetIcon' size={30} color='#000'  />Wind</p>
                        <p className='infoSetPW'>2 km/h</p>
                    </div>
                    <div className='infoSet'>
                        <p><WiDust className='infoSetIcon' size={30} color='#000'  />Visibility</p>
                        <p className='infoSetP'>14.4 km</p>
                    </div>
                </span>
            </div>
            <div className='weatherFiveDayDiv'>

            </div>
        </div>
    )
}