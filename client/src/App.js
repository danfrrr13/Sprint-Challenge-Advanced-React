import React, { Component } from 'react';
import axios from 'axios';
import PlayerList from './components/PlayerList.js';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      mainData: [],
      url: 'http://localhost:5000/api/players',
    }
  }
  
  componentDidMount() {
    axios.get(this.state.url)
        .then(res => {
            console.log('res.data: ', res.data);
            this.setState({ mainData: res.data });
        })
        .catch(err => console.log('Error: ', err));
  }
    
  render() {
    return (
      <div className="App">
        <h1>
          Women's World Cup players
        </h1>
        <h5>
          ranked by search interest from Google Trends
        </h5>
        <PlayerList data={this.state.mainData} />
      </div>
    );
  }
  
}

export default App;
