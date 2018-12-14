import React, { Component } from 'react';
import Weatherperson from './components/Weatherperson';

class App extends Component {
  render() {
    return (
      <div className="App">
      <div>
        <div>
          <Weatherperson/>
        </div>
      </div>
      </div>
    );
  }
}

export default App;
