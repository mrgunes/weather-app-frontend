import React, {useState,useContext, useEffect} from 'react';
import WeatherContext from  '../context/WeatherContext'
import axios from 'axios';

export default function SearchBar() {
    let {temp}=useContext(WeatherContext);
    let [name,setName]=useState();
    let [unit, setUnit]=useState('metric')
    
    let handleInput=(e)=>{
        setName(e.target.value)
    }
    console.log(name)

    let handleUnit=(e)=>{
        setUnit(e.target.value)   
    }
    
    //it is default api call. it works only once
    useEffect(()=>{
        let cityName='Istanbul'
        let config = {
            method: 'get',
            url: `http://localhost:8000/`,
        };
        axios(config)
        .then((response)=>{
        let data=response.data
        temp([cityName, data.current.temp, data.current.weather[0].main, data.daily[0].temp.max, data.daily[0].temp.min, data.current.weather[0].icon, data.current.sunrise, data.current.sunset, data.current.dt, data.timezone, data.hourly[1].dt, data.hourly[1].pop, data.current.feels_like, data.daily[0].humidity, data.daily[0].pressure, data.hourly[0].visibility, data.daily[0].weather[0].icon, data.daily[0].pop, data.daily[1].dt, data.daily[1].temp.max, data.daily[1].temp.min, data.daily[1].weather[0].icon, data.daily[1].pop, data.daily[2].dt, data.daily[2].temp.max, data.daily[2].temp.min, data.daily[2].weather[0].icon, data.daily[2].pop, data.daily[3].dt, data.daily[3].temp.max, data.daily[3].temp.min, data.daily[3].weather[0].icon, data.daily[3].pop, data.daily[4].dt, data.daily[4].temp.max, data.daily[4].temp.min, data.daily[4].weather[0].icon, data.daily[4].pop])
        })
        .catch((error)=>{
        console.log(error);
        });
    },[])

    //let cityName=name;
    //let unitName=unit;
    
    let handleSubmit=()=>{
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
        axios.get(`http://localhost:8000/${name}/${unit}`) 
        .then((response) => {
        console.log(response.data);
        let data=response.data
        temp([data[0].name, data[1].current.temp, data[1].current.weather[0].main, data[1].daily[0].temp.max, data[1].daily[0].temp.min, data[1].current.weather[0].icon, data[1].current.sunrise, data[1].current.sunset, data[1].current.dt, data[1].timezone, data[1].hourly[1].dt, data[1].hourly[1].pop, data[1].current.feels_like, data[1].daily[0].humidity, data[1].daily[0].wind_speed, data[1].hourly[0].visibility, data[1].daily[0].weather[0].icon, data[1].daily[0].pop, data[1].daily[1].dt, data[1].daily[1].temp.max, data[1].daily[1].temp.min, data[1].daily[1].weather[0].icon, data[1].daily[1].pop, data[1].daily[2].dt, data[1].daily[2].temp.max, data[1].daily[2].temp.min, data[1].daily[2].weather[0].icon, data[1].daily[2].pop, data[1].daily[3].dt, data[1].daily[3].temp.max, data[1].daily[3].temp.min, data[1].daily[3].weather[0].icon, data[1].daily[3].pop, data[1].daily[4].dt, data[1].daily[4].temp.max, data[1].daily[4].temp.min, data[1].daily[4].weather[0].icon, data[1].daily[4].pop]) 
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
                    placeholder={"Search City or Zip Code"} id="id" name="q" onChange={handleInput}
                />
                <button className="resizedButton" onClick={handleSubmit}>Search</button>
            </span>
            <span>
                <select defaultValue={unit} className="resizedButton2" name="setMetric" onChange={handleUnit}>
                    <option value="Metric">Metric</option>
                    <option value="Imperial">Imperial</option>
                </select>
                <button className="resizedButton" onClick={handleSubmit}>Update</button>
            </span>  
        </div>
    )
}