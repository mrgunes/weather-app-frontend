import React from 'react'
import {WiDaySunny} from "weather-icons-react"

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
                    <WiDaySunny className='widaysunny' size={80} color='yellow'  />
                    <h3>--/2°</h3>
                </span>
            </div>
            <div className='weatherInfoDiv'>

            </div>
            <div className='weatherFiveDayDiv'>

            </div>
        </div>
    )
}