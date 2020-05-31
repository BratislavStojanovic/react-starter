import React, { Component } from 'react';
import Navbar from './components/navbar/Navbar';

export class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className='container'>
          <h1>App component</h1>
        </div>
      </div>
    );
  }
}

export default App;
