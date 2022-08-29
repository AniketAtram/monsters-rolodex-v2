import './App.css';
import React, { Component } from 'react';
import Heading from './components/Heading/Heading';
import SearchBar from './components/SearchBar/SearchBar';
import CardList from './components/CardList/CardList';
class App extends Component {
    constructor() {
        super();

        this.state = {
            monsters: [],
            searchString: ''
        }
    }
    // FETCH DATA FROM API WHENEVR APP IS LOADED
    componentDidMount() {
        this.fetchDataFromAPI();
    }
    // Helper function to fetch data from API 
    fetchDataFromAPI = async () => {
        try {
            let response = await fetch("https://jsonplaceholder.typicode.com/users");
            let data = await response.json();
            this.setState({ monsters: data });
        }
        catch (error) {
            console.error(error.message);
        }
    }
    // Helper function for searching the data
    onSearchHandler = (event) => {
        let { value } = event.target;
        this.setState({ searchString: value });
    }

    render() {

        let { monsters, searchString } = this.state;
        let { onSearchHandler } = this;
        let filteredData = monsters.filter((monster) => {
            return monster.name.toLocaleLowerCase().includes(searchString.toLocaleLowerCase())
        });

        return (
            <div className='App'>

                <Heading title="Monsters Rolodex" />

                <SearchBar onChangeHandler={onSearchHandler} />

                <CardList monstersData={filteredData} />

            </div>
        );
    }
}

export default App;
