import React from 'react'

export default function SearchBar() {
    return (
        <div className='searchBarInput'>
            <input type="text" className="resizedTextBox"
                placeholder={"Search City or Zip Code"}
            />
            <button>Search</button>
        </div>
    )
}