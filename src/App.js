import { useState, useEffect } from 'react';
import Heading from './components/Heading/Heading';
import SearchBar from './components/SearchBar/SearchBar';
import CardList from './components/CardList/CardList';
import './App.css';

function App() {

    
    // Initialize the monsters array as empty 
    const [monster, setMonsters] = useState([]);
    
    
    // Initialize search string as empty string
    const [searchString, setSearchString] = useState('');
    
    
    // Filtered monsters state to hold filtered data
    const [filteredData, setFilteredData] = useState(monster);

    
    // create a useEffect hook to fetch the data from the API and populate the monsters array
    useEffect(() => {
        fetchDataFromAPI();
    }, []);

    
    // Use effect hook to render only when either monster array or search string is changed
    useEffect(() => {
        let filteredData = monster.filter((monster) => {
            return monster.name.toLocaleLowerCase().includes(searchString.toLocaleLowerCase());
        });
        setFilteredData(filteredData);
    }, [monster, searchString]);

    
    // Helper function to fetch the data from API
    const fetchDataFromAPI = async () => {
        try {
            let response = await fetch("https://jsonplaceholder.typicode.com/users");
            let data = await response.json();
            setMonsters(data);
        }
        catch (error) {
            console.error(error.message);
        }
    };


    // Event handler for change in search bar input value
    const onSearchHandler = (event) => {
        let { value } = event.target;
        setSearchString(value);
    };


    return (
        <div className='App'>

            <Heading title="Monsters Rolodex" />

            <SearchBar onChangeHandler={onSearchHandler} />

            <CardList monstersData={filteredData} />

        </div>
    );
}
export default App;
