import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
import '../App.css'

class Test extends Component {
    constructor(props)
    {
        super(props)
        this.state = {
            
        };
    }
    renderDish(dish) 
        { 
            console.log(dish);
            if (dish != null)
                {   console.log(dish.comments);
                    let comslist = dish.comments.map((cur)=>{
                        return(
                            <div className="adj" key={cur.id}>
                                <p>{cur.comment} <br/>
                                   Rating : {cur.rating} <br/>
                                   Author : {cur.author}
                                </p>
                            </div>                           
                        );                       
                    });
                    //console.log(comslist);
                    return(
                    <div className="row">
                        <Card className= "col-12 col-md-5" key={dish.id}>
                            <CardImg top src={dish.image} alt={dish.name} />
                            <CardBody>
                              <CardTitle>{dish.name}</CardTitle>
                              <CardText>{dish.description}</CardText>
                            </CardBody>
                        </Card>

                        <div className="col-12 col-md text-center">
                            <h2>Comments</h2>
                            <div>{comslist}</div>
                        </div>
                    </div>
                 );
                }
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