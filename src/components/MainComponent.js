import React, { Component } from 'react';
import Menu from './MenuComponent';
import { DISHES } from '../shared/dishes'
import DishDetail from './DishDetail'
import Header from './HeaderComponent'
import Footer from './FooterComponent'
import Home from './HomeComponent';
import Contact from './ContactComponent'
import { COMMENTS } from '../shared/comments'
import { LEADERS } from '../shared/leaders'
import { PROMOTIONS } from '../shared/promotions'
import { Switch, Route, Redirect } from 'react-router-dom';
import About from './AboutComponent' ;
import '../App.css'

class Main extends Component {
  constructor(props)
  {
    super(props);
    this.state = {
      dishes : DISHES ,
      comments : COMMENTS ,
      leaders : LEADERS ,
      promotions : PROMOTIONS

    };
  }

  render()
  {

    const HomePage = () => {
      return(
          <Home dish= {this.state.dishes.filter((dish) => dish.featured)[0]} 
                promo= {this.state.promotions.filter((promo) => promo.featured)[0]}
                leader= {this.state.leaders.filter((leader) => leader.featured)[0]} 
          />
      );
    }

    const SelectedDish = ( {match} ) => {
      return(
        <DishDetail dish = {this.state.dishes.filter((dish)=> dish.id === parseInt(match.params.dishId,10))} 
        comments = {this.state.comments.filter((comm)=> comm.dishId === parseInt(match.params.dishId,10))}
        />
      );
    }

    const AboutPage = () => {
      return(
        <About leaders={this.state.leaders} />
      );
    }

    return (
      <div>
        <Header />
        <Switch>
              <Route path='/home' component={HomePage} />
              <Route path= '/aboutus' component = {AboutPage} />
              <Route exact path='/menu' component={() => <Menu dishes={this.state.dishes} />} />
              <Route path = '/menu/:dishId' component = {SelectedDish} /> 
              <Route path ='/contactus' component={Contact}/>
              <Redirect to="/home" />
        </Switch>
  
        <Footer /> 
      </div>
    );
  }
}

export default Main;
