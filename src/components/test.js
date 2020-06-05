import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class Test extends Component {
    constructor(props)
    {
        super(props)
        this.state = {

        };
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

    render ()
    {
       return (
        <div>
        { this.renderDish(this.props.dish) }
        </div>
       );
        
       
    }

}

export default Test ;