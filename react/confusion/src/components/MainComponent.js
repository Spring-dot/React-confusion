import React, { Component } from 'react';
import { Navbar, NavbarBrand, NavbarText, NavbarToggler } from 'reactstrap';
import Menu from './MenuComponent';



class Main extends Component {

    

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
                

            </div>
        );
    }
}

export default Main;