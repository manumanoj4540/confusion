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
import { addComment } from '../Redux/ActionCreators';
import { actions } from 'react-redux-form'
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import '../App.css'

const mapStateToProps = state => {
  return {
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders
  }
}

const mapDispatchToProps = dispatch => ({
  
  addComment: (dishId, rating, author, comment) => dispatch(addComment(dishId, rating, author, comment)),
  resetFeedbackForm: () => { dispatch(actions.reset('feedback'))}

});

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
        addComment={this.props.addComment}
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
        <TransitionGroup>
          <CSSTransition key={this.props.location.key} classNames="page" timeout={1000} >
            <Switch>
                  <Route path='/home' component={HomePage} />
                  <Route path= '/aboutus' component = {AboutPage} />
                  <Route exact path='/menu' component={() => <Menu dishes= {this.props.dishes}/> } />
                  <Route path = '/menu/:dishId' component = {SelectedDish} /> 
                  <Route exact path='/contactus' component={() => <Contact resetFeedbackForm={this.props.resetFeedbackForm}/> } />
                  <Redirect to="/home" />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
        <Footer /> 
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
