import React from 'react'
import {WiDaySunny,WiSunrise,WiSunset} from "weather-icons-react"

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
                <span className='firstSpanLine'>
                    <span className='firstLineInfo'>
                        <h3>Weather Today in Bothell, WA</h3>
                        <h1>4°</h1>
                        <h4>Feels like</h4>
                    </span>
                    <span className='secondLineInfo'>
                        <span className='secondLineInfoSpan'>
                            <WiSunrise className='widaysunny rise' size={80} color='#000'  />
                            <h4>6:56 am</h4>
                        </span>
                        <span className='secondLineInfoSpan'>
                            <WiSunset className='widaysunny set' size={80} color='#000'  />
                            <h4>7:56 pm</h4>
                        </span>
                        
                    </span>
                </span>
                <span className='secondSpanLine'>

                </span>
            </div>
            <div className='weatherFiveDayDiv'>

            </div>
        </div>
    )
}