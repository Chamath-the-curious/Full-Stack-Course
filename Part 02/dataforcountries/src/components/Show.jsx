import Country from "./Country"

const Show = ({ country, onSelect }) => {
    const selectCountry = () => {   
        onSelect(country)
    }

    return ( 
        <button onClick={selectCountry}>Show</button>
    )
}

export default Show
