import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './MenuComponent';
import { DISHES } from '../shared/dishes'
import DishDetail from './DishDetail'

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
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href= "/">Ristorante Confusion</NavbarBrand>
          </div>
        </Navbar>
  
        <Menu dishes = {this.state.dishes} onClick={(dish) => this.onSelectDish(dish)} />

        <DishDetail dish = { this.state.selectedDish } />
      </div>
    );
  }
}

export default Main;
