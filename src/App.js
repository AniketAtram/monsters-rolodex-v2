import './App.css';
import React, { Component } from 'react';

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
      <>
        <div className='App'>
          <input
            className="search-box"
            type="search"
            placeholder="Search"
            aria-label="Search"
            name='searchString'
            onChange={onSearchHandler}
          />
          {
            filteredData.map(data => {
            
            return   (<div className="card" style={{ width: "18rem" }} key={data.id}>
                <img src={`https://robohash.org/${data.id}?set=set2`} className="card-img-top" alt="..." />
                <div className="card-body">
                  <p className="card-title">{data.name}</p>
                </div>
              </div>)

            }
            )
          }

        </div>

      </>
    );
  }
}

export default App;
// https://jsonplaceholder.typicode.com/users
// https://robohash.org/6?set=set2