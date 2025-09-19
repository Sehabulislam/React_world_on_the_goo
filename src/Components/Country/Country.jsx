import React from 'react';

const Country = ({country}) => {
    console.log(country);
    return (
        <div>
            <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
            <h2> Name : {country.name.common}</h2>
            <h4>Capital : {country.capital.capital}</h4>
            <h4> Population : {country.population.population}</h4>
            <p>Region : {country.region.region}</p>
        </div>
    );
};

export default Country;