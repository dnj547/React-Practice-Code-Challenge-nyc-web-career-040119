import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    sushi: []
  }

  fetchSushi = () => {
    console.log('fetching');
    fetch(API)
    .then(r=>r.json())
    .then(sushi => {
      this.setState({sushi},
      console.log('state set'))
    })
  }

  componentDidMount() {
    console.log('mounted');
    this.fetchSushi()
  }

  getMoreSushi = () => {
    console.log('getting more sushi');
    const sushiMinusFour = this.state.sushi.slice(4)
    this.setState({
      sushi: sushiMinusFour
    })
  }

  removeSushi = (e) => {
    console.log(e.currentTarget);
  }

  render() {
    console.log('rendering');
    console.log('current sushi', this.state.sushi);
    return (
      <div className="app">
        <SushiContainer
          sushi={this.state.sushi}
          getMoreSushi={this.getMoreSushi}
          removeSushi={this.removeSushi}
        />
        <Table />
      </div>
    );
  }
}

export default App;
