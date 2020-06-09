import React, { Component } from 'react';
import Menu from './MenuComponent';
import { DISHES } from '../shared/dishes'
import DishDetail from './DishDetail'
import Header from './HeaderComponent'
import Footer from './FooterComponent'

class Main extends Component {
  constructor(props)
  {
    super(props);
    this.state = {
      dishes : DISHES ,
      selectedDish : null
    };
  }
  onSelectDish(dish)
        {
            this.setState({selectedDish : dish});
            //console.log(dish.name);
        }
  render()
  {
    return (
      <div>
        <Header />
  
        <Menu dishes = {this.state.dishes} onClick={(dish) => this.onSelectDish(dish)} />

        <DishDetail dish = { this.state.selectedDish } />

        <Footer />
      </div>
    );
  }
}

export default Main;
