import React from 'react'

export default function SearchBar() {
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