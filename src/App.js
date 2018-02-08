import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
// import pages
import Home from './pages/Home/Home';
import Footer from './components/Footer/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div>
          <Route exact path="/" component={Home} />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
