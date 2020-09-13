import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Main from './components/MainComponent';
import { Navbar, NavbarBrand, NavbarText, NavbarToggler } from 'reactstrap';
import Menu from './components/MenuComponent';
import { DISHES } from './shared/dishes';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      dishes: DISHES
    };
  }

  render() {
   return (
      <div className="App">
       <Main />
      
       <Menu dishes ={this.state.dishes} />
      </div>
    
    
   );
  }
}

export default App;
