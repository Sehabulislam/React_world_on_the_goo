import React from 'react';
import './Country.css'

const Country = ({country}) => {
    console.log(country);
    
    const handleVisited =()=>{
        console.log("Visited Country");
    }
    
    return (
        <div className='country'>
            <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
            <h2> Name : {country.name.common}</h2>
            <h4>Capital : {country.capital.capital}</h4>
            <h4> Population : {country.population.population} {country.population.population > 500000 ? "Big Country" : "Small Country"}</h4>
            <p>Region : {country.region.region}</p>
            <button onClick={handleVisited}>Not Visited</button>
        </div>
    );
};

export default Country;