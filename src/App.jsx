import React from 'react';
// import {Logo, Image} from './components/Header/Logo';
import Search from './components/Header/search';
import Login from './components/Header/Login';
import Navbar from './components/body/Navbar';
import Card1 from './components/body/Card1';
import Card2 from './components/body/Card2';
import Footer from './components/footer/Footer';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div>

        <div className="div1">
          <Search/>
          <Login/>
        </div>

        <Navbar/>
        <br />
        <div>
          <Card1/>
          <br/>
        </div>
        <div>
        <Card2/>
        </div>
        
        <div>
          <Footer/>
          </div>
      </div>
    )
  }
}

export default App;



