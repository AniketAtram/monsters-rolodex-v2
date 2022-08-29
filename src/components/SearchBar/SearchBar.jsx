import React, { Component } from 'react';
import './SearchBar.css';
class SearchBar extends Component {

    render() {
        let { onChangeHandler } = this.props;
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
}

export default SearchBar;
