import React, { Component } from 'react';
import Menu from './MenuComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { DISHES } from '../shared/dishes';
import Home from './HomeComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
import Contact from './ContactComponent';

class Main extends Component {
    constructor(props){
        super(props);
        this.state = {
          dishes: DISHES
        };
      }
    
    

    render() {

        const HomePage = () => {
            return (
                <Home />
            );
            
        }
        return (
            <div>
             <Header />
             <Switch>
              <Route path='/home' component={HomePage} />
              <Route exact path='/menu' component={() => <Menu dishes={this.state.dishes} />} />
              <Route exact path='/contactus' component={() => <Contact />} />
              <Redirect to="/home" />
             </Switch>
             
             <Footer />
            </div>
        );
       
    }
    
}




export default Main;