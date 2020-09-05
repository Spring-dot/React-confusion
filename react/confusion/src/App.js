import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Navbar, NavbarBrand, NavbarText, NavbarToggler } from 'reactstrap';
import Menu from './components/MenuComponent';

function App() {
  return (
    <div className="App">
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
      <Menu />
    </div>
    
  );
}

export default App;
