import React, { useState } from 'react';
import './Country.css'

const Country = ({country , handleVisitedCountries, handleVisitedFlag}) => {
    // console.log(handleVisitedCountries) ;
    const [visited,setVisited] = useState(false)
    const handleVisited =()=>{
        //1.
        // if(visited){
        //     setVisited(false)
        // }
        // else{
        //     setVisited(true)
        // }
    
        //2.
        // setVisited ? false : true;

        //3.
        setVisited(!visited)

        handleVisitedCountries(country)
        }
    return (
        <div className={`country ${visited && 'country-visited'}`}>
            <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
            <h2> Name : {country.name.common}</h2>
            <h4>Capital : {country.capital.capital}</h4>
            <h4> Population : {country.population.population} {country.population.population > 500000 ? "Big Country" : "Small Country"}</h4>
            <p>Region : {country.region.region}</p>
            <button onClick={handleVisited}>
                {visited ? "Visited" : "Not Visited"}
            </button>
            <button onClick={() => {handleVisitedFlag(country.flags.flags.png)}}>Add Visited Flag</button>
        </div>
    );
};

export default Country;