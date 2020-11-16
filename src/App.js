import React, {Component} from 'react'

import {CardList} from './components/card-list/card-list';
import {SearchBox} from './components/search-box/search-box';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      monsters: [],
      searchField: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters: users}));
  }

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()))


    return (
      <div className="App">
        <SearchBox placeholder="Search monsters..." handleChange={e => this.setState({
            searchField: e.target.value
        }, () => {console.log(this.state)})} />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
