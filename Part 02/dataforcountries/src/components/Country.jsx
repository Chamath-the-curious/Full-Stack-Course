const Country = (props) => {
    const [country] = props.country

    return (
        <div>
            <h1>{country.name.common}</h1>
            <div>{country.capital}</div>
            <div>Area {country.area}</div>
            <h2>Languages</h2>
            <ul>
                {Object.values(country.languages).map((value, index) => (
                    <li key={index}>{value}</li>
                ))}
            </ul>
            <img src={country.flags.png} alt={country.flags.alt} />
        </div>
    )
}

export default Country
