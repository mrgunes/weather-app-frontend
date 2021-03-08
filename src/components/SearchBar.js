import React, {useState} from 'react'

export default function SearchBar() {
    let [name,setName]=useState('');

    let handleInput=(e)=>{
        setName(e.target.value)
    }

    let handleSubmit=()=>{
        let apiKey='27e977f5956015ec7bb12876112d5dd6';
        let url=`api.openweathermap.org/data/2.5/weather?q=${name}&appid=${apiKey}`
        fetch(url)
        .then(response=>response.json())
        .then(json=>console.log(json))
    }

    return (
        <div className='searchBarInput'>
            <span className="weatherApp">The Weather App</span>
            <span>
                <input type="text" className="resizedTextBox"
                    placeholder={"Search City or Zip Code"}
                />
                <button className="resizedButton">Search</button>
            </span>
            <span>
                <button className="resizedButton">°C/°F</button>
            </span>  
        </div>
    )
}