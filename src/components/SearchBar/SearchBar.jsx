import './SearchBar.css';
function SearchBar(props) {

    let { onChangeHandler } = props;
    return (
        <div className='search-bar-index'>
            <input
                className="search-box"
                type="search"
                placeholder="Enter name to search"
                aria-label="Search"
                name='searchString'
                onChange={onChangeHandler}
            />
        </div>
    );
}


export default SearchBar;
