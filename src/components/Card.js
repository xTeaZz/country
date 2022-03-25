import React from "react"

const Card = ({ country }) => {
  return (
    <div>
      <li className='card'>
        <img src={country.flags.svg} alt={country.name.common + "'s flag"} />
        <div className='infos'>
          <h2>{country.name.common}</h2>
          <h4>{country.capital}</h4>
          <p>Population: {country.population.toLocaleString()}</p>
        </div>
      </li>
    </div>
  )
}

export default Card
