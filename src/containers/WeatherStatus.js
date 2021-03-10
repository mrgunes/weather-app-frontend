import React, {useContext} from 'react';
import Moment from 'react-moment';
import WeatherContext from '../context/WeatherContext'
import {WiDaySunny,WiSunrise,WiSunset,WiThermometer,WiHumidity,WiStrongWind,WiDust,WiDayCloudy,WiRaindrops} from "weather-icons-react"
import moment from 'moment';

export default function WeatherStatus() {
    let {city}=useContext(WeatherContext);

    return (
        <div className='weatherMainContainer'>
            <div className='weatherSingleDiv'>
                <span className='firstLineSingle'>
                    <h3>{city[0].cityName} Weather</h3>
                    <h4>As of {new Date().toLocaleTimeString(navigator.language, {hour: '2-digit', minute:'2-digit'})}</h4>
                </span>
                <span className="secondLineSingle">
                    <h1>{Math.round(city[0].cityTemp) ? Math.round(city[0].cityTemp): '0'}°C</h1>
                </span>
                <span className='thirdLineSingle'>
                    <h3>{city[0].cityWeaMain}</h3>
                    <h4>2% chance of rain through 11 PM</h4>
                </span>
                <span className='fourthLineSingle'>
                    {/* <WiDaySunny className='sunny' size={80} color='yellow'  /> */}
                    <img className='fourtLineIcon' src={`http://openweathermap.org/img/w/${city[0].cityWeaIcon ? city[0].cityWeaIcon : '02n'}.png`} 
         alt="wthr img" />
                    <h3>{Math.round(city[0].cityTempMax) ? Math.round(city[0].cityTempMax): '0'}°C/{Math.round(city[0].cityTempMin) ? Math.round(city[0].cityTempMin) :'0'}°C</h3>
                </span>
            </div>
            <div className='weatherInfoDiv'>
                <span className='firstSpanLine'>
                    <span className='firstLineInfo'>
                        <h3>Weather Today in Bothell, WA</h3>
                        <h1>4°C</h1>
                        <p>Feels like</p>
                    </span>
                    <span className='secondLineInfo'>
                        <span className='secondLineInfoSpan'>
                            <WiSunrise className='rise' size={80} color='#000'  />
                            <p>{moment.unix(city[0].citySunrise).format("hh:mm A")}</p>
                        </span>
                        <span className='secondLineInfoSpan'>
                            <WiSunset className='set' size={80} color='#000'  />
                            <p>{moment.unix(city[0].citySunset).format("hh:mm A")}</p>
                            
                        </span>   
                    </span>
                </span>
                <span className='secondSpanLine'>
                    <div className='infoSet'>
                        <p><WiThermometer className='infoSetIcon' size={30} color='#000'  />High/Low</p>
                        <p className='infoSetP'>--/2°C</p>
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
                <h3 className='dailyFiveDay'>Daily Forecast</h3>
                <span className='fiveDayMainSpan'>
                    <div>
                        <span>
                            <h3>Today</h3>
                            <h2 className='fiveDayH2'>20°C</h2>
                            <p className='fiveDayP'>2°C</p>
                            <WiDayCloudy className='dayCloudy' size={50} color='#000'  />
                            <p className='fiveDayP2'><WiRaindrops className='setRainDrop' size={30} color='#000'  />8%</p>
                        </span>
                    </div>
                    <div className='border'></div>
                    <div>
                        <span>
                            <h3>Wed 03</h3>
                            <h2 className='fiveDayH2'>14°C</h2>
                            <p className='fiveDayP'>2°C</p>
                            <WiDayCloudy className='dayCloudy' size={50} color='#000'  />
                            <p className='fiveDayP2'><WiRaindrops className='setRainDrop' size={30} color='#000'  />70%</p>
                        </span>
                    </div>
                    <div className='border'></div>
                    <div>
                        <span>
                            <h3>Thu 04</h3>
                            <h2 className='fiveDayH2'>15°C</h2>
                            <p className='fiveDayP'>6°C</p>
                            <WiDayCloudy className='dayCloudy' size={50} color='#000'  />
                            <p className='fiveDayP2'><WiRaindrops className='setRainDrop' size={30} color='#000'  />19%</p>
                        </span>
                    </div>
                    <div className='border'></div>
                    <div>
                        <span>
                            <h3>Fri 05</h3>
                            <h2 className='fiveDayH2'>25°C</h2>
                            <p className='fiveDayP'>10°C</p>
                            <WiDayCloudy className='dayCloudy' size={50} color='#000'  />
                            <p className='fiveDayP2'><WiRaindrops className='setRainDrop' size={30} color='#000'  />90%</p>
                        </span>
                    </div>
                    <div className='border'></div>
                    <div>
                        <span>
                            <h3>Sat 06</h3>
                            <h2 className='fiveDayH2'>18°C</h2>
                            <p className='fiveDayP'>7°C</p>
                            <WiDayCloudy className='dayCloudy' size={50} color='#000'  />
                            <p className='fiveDayP2'><WiRaindrops className='setRainDrop' size={30} color='#000'  />0%</p>
                        </span>
                    </div>
                </span>
            </div>
        </div>
    )
}