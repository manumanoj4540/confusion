import React, { Component } from 'react';
import Menu from './MenuComponent';
import DishDetail from './DishDetail'
import Header from './HeaderComponent'
import Footer from './FooterComponent'
import Home from './HomeComponent';
import Contact from './ContactComponent'
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import About from './AboutComponent' ;
import '../App.css'

const mapStateToProps = state => {
  return {
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders
  }
}

class Main extends Component {
  constructor(props)
  {
    super(props);
    this.state = {
      
    };
  }

  render()
  {

    const HomePage = () => {
      return(
          <Home dish= {this.props.dishes.filter((dish) => dish.featured)[0]} 
                promo= {this.props.promotions.filter((promo) => promo.featured)[0]}
                leader= {this.props.leaders.filter((leader) => leader.featured)[0]} 
          />
      );
    }

    const SelectedDish = ( {match} ) => {
      return(
        <DishDetail dish = {this.props.dishes.filter((dish)=> dish.id === parseInt(match.params.dishId,10))} 
        comments = {this.props.comments.filter((comm)=> comm.dishId === parseInt(match.params.dishId,10))}
        />
      );
    }

    const AboutPage = () => {
      return(
        <About leaders={this.props.leaders} />
      );
    }

    return (
      <div>
        <Header />
        <Switch>
              <Route path='/home' component={HomePage} />
              <Route path= '/aboutus' component = {AboutPage} />
              <Route exact path='/menu' component={() => <Menu dishes={this.props.dishes} />} />
              <Route path = '/menu/:dishId' component = {SelectedDish} /> 
              <Route path ='/contactus' component={Contact}/>
              <Redirect to="/home" />
        </Switch>
  
        <Footer /> 
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps)(Main));
