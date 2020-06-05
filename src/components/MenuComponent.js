import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';
import Test from './test'


class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedDish : null
        };
    
    }

     onSelectDish(dish)
        {
            this.setState({selectedDish : dish});
            console.log(dish.name);
        }
        
     renderDish(dish) 
        {
            if (dish != null)
                return(
                    <Card>
                        <CardImg top src={dish.image} alt={dish.name} />
                        <CardBody>
                          <CardTitle>{dish.name}</CardTitle>
                          <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
                );
            else
                return(
                    <div></div>
                );
        }

    render() {
        const menu = this.props.dishes.map((dish) => {
            return (
              <div key={dish.id} className="col-12 col-md-5 m-1">
                <Card key= "dish.id" onClick = {() => this.onSelectDish(dish)} >
                  <CardImg width="50%" src={dish.image} alt={dish.name} />
                  <CardImgOverlay>
                    <CardTitle>{dish.name}</CardTitle>
                    
                  </CardImgOverlay>
                </Card>
              </div>
            );
        });
              

        return (
          <div className="container">
            <div className="row">
              
                  {menu}
              
            </div>

            
            
            <Test dish = { this.state.selectedDish } />
          </div>
        );
    }
}

export default Menu;