import React, {useContext} from 'react';
import moment from 'moment';
import 'moment-timezone'
import WeatherContext from '../context/WeatherContext'
import {WiDaySunny,WiSunrise,WiSunset,WiThermometer,WiHumidity,WiStrongWind,WiDust,WiDayCloudy,WiRaindrops} from "weather-icons-react"

export default function WeatherStatus() {
    let {city}=useContext(WeatherContext);

    return (
        <div className='weatherMainContainer'>
            <div className='weatherSingleDiv'>
                <span className='firstLineSingle'>
                    <h3>{city[0].cityName} Weather</h3>
                    <h4>As of {moment.unix(city[0].cityTime).tz(`${city[0].cityTimeZone}`).format('hh:mm A Z')}</h4>
                </span>
                <span className="secondLineSingle">
                    <h1>{Math.round(city[0].cityTemp)}°</h1>
                </span>
                <span className='thirdLineSingle'>
                    <h3>{city[0].cityWeaMain}</h3>
                    <h4>{Math.round(city[0].cityOneHourPre)}% chance of rain through {moment.unix(city[0].cityOneHourTime).tz(`${city[0].cityTimeZone}`).format('hh A')}</h4>
                </span>
                <span className='fourthLineSingle'>
                    {/* <WiDaySunny className='sunny' size={80} color='yellow'  /> */}
                    <img className='fourtLineIcon' src={`http://openweathermap.org/img/w/${city[0].cityWeaIcon}.png`} 
         alt="wthr img" />
                    <h3>{Math.round(city[0].cityTempMax)}°/{Math.round(city[0].cityTempMin)}°</h3>
                </span>
            </div>
            <div className='weatherInfoDiv'>
                <span className='firstSpanLine'>
                    <span className='firstLineInfo'>
                        <h3>Weather Today in {city[0].cityName}</h3>
                        <h1>{Math.round(city[0].cityFeelsLike)}°</h1>
                        <p>Feels like</p>
                    </span>
                    <span className='secondLineInfo'>
                        <span className='secondLineInfoSpan'>
                            <WiSunrise className='rise' size={80} color='#000'  />
                            <p>{moment.unix(city[0].citySunrise).tz(`${city[0].cityTimeZone}`).format('hh:mm A')}</p>
                        </span>
                        <span className='secondLineInfoSpan'>
                            <WiSunset className='set' size={80} color='#000'  />
                            <p>{moment.unix(city[0].citySunset).tz(`${city[0].cityTimeZone}`).format('hh:mm A')}</p>
                            
                        </span>   
                    </span>
                </span>
                <span className='secondSpanLine'>
                    <div className='infoSet'>
                        <p><WiThermometer className='infoSetIcon' size={30} color='#000'  />High/Low</p>
                        <p className='infoSetP'>{Math.round(city[0].cityTempMax)}°/{Math.round(city[0].cityTempMin)}°</p>
                    </div>
                    <div className='infoSet'>
                        <p><WiHumidity className='infoSetIcon' size={30} color='#000'  />Humidity</p>
                        <p className='infoSetPH'>{city[0].cityHumidity}%</p>
                    </div>
                    <div className='infoSet'>
                        <p><WiStrongWind className='infoSetIcon' size={30} color='#000'  />Wind</p>
                        <p className='infoSetPW'>{city[0].cityWindSpeed} m/sec</p>
                    </div>
                    <div className='infoSet'>
                        <p><WiDust className='infoSetIcon' size={30} color='#000'  />Visibility</p>
                        <p className='infoSetP'>{city[0].cityVisibility} m</p>
                    </div>
                </span>
            </div>
            <div className='weatherFiveDayDiv'>
                <h3 className='dailyFiveDay'>Daily Forecast</h3>
                <span className='fiveDayMainSpan'>
                    <div>
                        <span>
                            <h3>Today</h3>
                            <h2 className='fiveDayH2'>{Math.round(city[0].cityTempMax)}°</h2>
                            <p className='fiveDayP'>{Math.round(city[0].cityTempMin)}°</p>
                            {/* <WiDayCloudy className='dayCloudy' size={50} color='#000'  /> */}
                            <img src={`http://openweathermap.org/img/w/${city[0].cityDailyIcon}.png`} alt="wthr img" /> 
                            <p className='fiveDayP2'><WiRaindrops className='setRainDrop' size={30} color='#000'  />{Math.round(city[0].cityDailyPop)}%</p>
                        </span>
                    </div>
                    <div className='border'></div>
                    <div>
                        <span>
                            <h3>{moment.unix(city[0].citySeDaTime).tz(`${city[0].cityTimeZone}`).format('ddd Do')}</h3>
                            <h2 className='fiveDayH2'>{Math.round(city[0].citySeDaMax)}°</h2>
                            <p className='fiveDayP'>{Math.round(city[0].citySeDaMin)}°</p>
                            {/* <WiDayCloudy className='dayCloudy' size={50} color='#000'  /> */}
                            <img src={`http://openweathermap.org/img/w/${city[0].citySeDaIcon}.png`} alt="wthr img" />
                            <p className='fiveDayP2'><WiRaindrops className='setRainDrop' size={30} color='#000'  />{Math.round(city[0].citySeDaPop)}%</p>
                        </span>
                    </div>
                    <div className='border'></div>
                    <div>
                        <span>
                            <h3>{moment.unix(city[0].cityThDaTime).tz(`${city[0].cityTimeZone}`).format('ddd Do')}</h3>
                            <h2 className='fiveDayH2'>{Math.round(city[0].cityThDaMax)}°</h2>
                            <p className='fiveDayP'>{Math.round(city[0].cityThDaMin)}°</p>
                            {/* <WiDayCloudy className='dayCloudy' size={50} color='#000'  /> */}
                            <img src={`http://openweathermap.org/img/w/${city[0].cityThDaIcon}.png`} alt="wthr img" />
                            <p className='fiveDayP2'><WiRaindrops className='setRainDrop' size={30} color='#000'  />{Math.round(city[0].cityThDaPop)}%</p>
                        </span>
                    </div>
                    <div className='border'></div>
                    <div>
                        <span>
                            <h3>{moment.unix(city[0].cityFoDaTime).tz(`${city[0].cityTimeZone}`).format('ddd Do')}</h3>
                            <h2 className='fiveDayH2'>{Math.round(city[0].cityFoDaMax)}°</h2>
                            <p className='fiveDayP'>{Math.round(city[0].cityFoDaMin)}°</p>
                            {/* <WiDayCloudy className='dayCloudy' size={50} color='#000'  /> */}
                            <img src={`http://openweathermap.org/img/w/${city[0].cityFoDaIcon}.png`} alt="wthr img" />
                            <p className='fiveDayP2'><WiRaindrops className='setRainDrop' size={30} color='#000'  />{Math.round(city[0].cityFoDaPop)}%</p>
                        </span>
                    </div>
                    <div className='border'></div>
                    <div>
                        <span>
                            <h3>{moment.unix(city[0].cityFiDaTime).tz(`${city[0].cityTimeZone}`).format('ddd Do')}</h3>
                            <h2 className='fiveDayH2'>{Math.round(city[0].cityFiDaMax)}°</h2>
                            <p className='fiveDayP'>{Math.round(city[0].cityFiDaMin)}°</p>
                            {/* <WiDayCloudy className='dayCloudy' size={50} color='#000'  /> */}
                            <img src={`http://openweathermap.org/img/w/${city[0].cityFiDaIcon}.png`} alt="wthr img" />
                            <p className='fiveDayP2'><WiRaindrops className='setRainDrop' size={30} color='#000'  />{Math.round(city[0].cityFiDaPop)}%</p>
                        </span>
                    </div>
                </span>
            </div>
        </div>
    )
}