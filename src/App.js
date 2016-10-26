import React, { Component } from 'react';
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <Navbar />
          <div className="background">
            {this.props.children}
          </div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
