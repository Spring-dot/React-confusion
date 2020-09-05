import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
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
     <div>
       <Navbar dark color="secondary">
         <div className="container">
           <NavbarBrand href="/">
             My Tribe
           </NavbarBrand>
           <NavbarToggler className="justify-content-end">
            <NavbarText>
              Signed in as: <a href="/">Akanksha</a>
             </NavbarText>
           </NavbarToggler>
          
          
          </div>

        </Navbar>
        <Menu dishes ={this.state.dishes} />
      </div>
    
    
   );
  }
}

export default App;
