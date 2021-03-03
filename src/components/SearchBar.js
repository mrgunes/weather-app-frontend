import React from 'react'

export default function SearchBar() {
    return (
        <div className='searchBarInput'>
            <span className="weatherApp">The Weather App</span>
            <span>
                <input type="text" className="resizedTextBox"
                    placeholder={"Search City or Zip Code"}
                />
                <button className="resizedSearchButton">Search</button>
            </span>
            <span>
                <button className="resizedDegreeButton">°C/°F</button>
            </span>  
        </div>
    )
}