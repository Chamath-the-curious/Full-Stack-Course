const Search = (props) => {
    return (
        <div>
            find countries <input value={props.newFilter} onChange={props.handleFilterChange} />
        </div>
    )
}

export default Search
