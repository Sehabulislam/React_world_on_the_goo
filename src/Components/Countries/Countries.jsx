import React, { use, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'

const Countries = ({countriesPromise}) => {
    const [visitedCountries,setVisitedCountries] = useState([]);
    const [visitedFlags,setVisitedFlags] = useState([]);

    const handleVisitedCountries = (country) =>{
        // setVisitedCountries('handle visited countries',country);
        const newVisitedCountries = [...visitedCountries,country];
        setVisitedCountries(newVisitedCountries)
    }

    const handleVisitedFlag = (flag) =>{
        const newVisitedFlags = [...visitedFlags,flag];
        setVisitedFlags(newVisitedFlags)
    }

    const countriesData = use(countriesPromise);
    const countries = countriesData.countries ;

    return (
        <div className='countries-container'>
            <h1>In the Countries : {countries.length}</h1>
            <h3>Total Country Visited : {visitedCountries.length} </h3>
            <h3>Total Flags Visited : {visitedFlags.length}</h3>
            <ol>
                {
                    visitedCountries.map(country => <li>{country.name.common} {country.ccn3.ccn3}</li>)
                }
            </ol>  
            <div className='visited-flag-container'>
                {visitedFlags.map((flag,index) => <img key={index} src={flag}></img>)}
            </div> 
             <div className='countries'>
                {
                countries.map(country => <Country key={country.ccn3.ccn3} country={country} handleVisitedCountries={handleVisitedCountries} handleVisitedFlag={handleVisitedFlag}></Country>)
            }
            </div>
        </div>
    );
};

export default Countries;