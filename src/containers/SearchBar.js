import React, {useState,useContext, useEffect} from 'react';
import WeatherContext from  '../context/WeatherContext'
import axios from 'axios';

export default function SearchBar() {
    let {temp}=useContext(WeatherContext);

    let [name,setName]=useState(null);
    //let [cityTemp,setCityTemp]=useState('')

    let handleInput=(e)=>{
        setName(e.target.value)
    }

    // it is default api. it works only once
    useEffect(()=>{
        let apiKey='27e977f5956015ec7bb12876112d5dd6';
        let cityName='Istanbul'
        let config = {
            method: 'get',
            url: `https://api.openweathermap.org/data/2.5/onecall?lat=41.0351&lon=28.9833&exclude=&appid=${apiKey}&units=metric`,
        };
        axios(config)
        .then((response)=>{
        let data=response.data
        temp([cityName, data.current.temp, data.current.weather[0].main, data.daily[0].temp.max, data.daily[0].temp.min, data.current.weather[0].icon, data.current.sunrise, data.current.sunset, data.current.dt, data.timezone, data.hourly[1].dt, data.hourly[1].pop])
        //setName('')
        })
        .catch((error)=>{
        console.log(error);
        });
    },[])

    let handleSubmit=()=>{
        let apiKey='27e977f5956015ec7bb12876112d5dd6';
        // let config = {
        //     method: 'get',
        //     url: `http://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${apiKey}&units=metric`,
        //     // urlAll:`https://api.openweathermap.org/data/2.5/onecall?lat=47.7599&lon=-122.2068&exclude=&appid=27e977f5956015ec7bb12876112d5dd6&units=metric`
        // };
        // axios(config)
        // .then((response)=>{
        // //console.log(JSON.stringify(response.data));
        // let data=response.data
        // temp([name, data.main.temp, data.weather[0].main, data.main.temp_min, data.main.temp_max, data.weather[0].icon, data.sys.sunrise, data.sys.sunset, data.timezone])
        // //setName('')
        // })
        // .catch((error)=>{
        // console.log(error);
        // });

        //with below line first get coordinates from first url and use second url.
        axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${apiKey}&units=metric`) 
        .then((firstRes) =>
        Promise.all([
        firstRes,
        axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${firstRes.data.coord.lat}&lon=${firstRes.data.coord.lon}&exclude=&appid=${apiKey}&units=metric`)
        ]))
        .then(([firstResponse, secondResponse]) => {
        console.log(firstResponse.data);
        //console.log(secondResponse.data)
        let data=secondResponse.data
        temp([firstResponse.data.name, data.current.temp, data.current.weather[0].main, data.daily[0].temp.max, data.daily[0].temp.min, data.current.weather[0].icon, data.current.sunrise, data.current.sunset, data.current.dt, data.timezone, data.hourly[1].dt, data.hourly[1].pop])
        })
        .catch((err) => {
        console.log(err.message);
        });
    }
    //console.log(temp)

    return (
        <div className='searchBarInput'>
            <span className="weatherApp">The Weather App</span>
            <span>
                <input type="text" className="resizedTextBox"
                    placeholder={"Search City or Zip Code"} onChange={handleInput}
                />
                <button className="resizedButton" onClick={handleSubmit}>Search</button>
            </span>
            <span>
                <button className="resizedButton">°C/°F</button>
            </span>  
        </div>
    )
}