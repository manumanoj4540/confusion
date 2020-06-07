import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
import '../App.css'

class DishDetail extends Component 
{
    
    renderDish(dish) 
        { 
        //console.log(dish);
        if (dish != null)
            {   //console.log(dish.comments);
                return(
                    <Card key={dish.id}>
                        <CardImg top src={dish.image} alt={dish.name} className="pic"/>
                        <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
                      );
            }
        else return(<div></div>);
        }
                        

           
    renderComments(dish) 
        {
        if (dish != null)
            {
            let comslist = dish.comments.map((cur)=>{
                return(
                    <div key={cur.id}>
                        <p>{cur.comment} <br/>
                        Rating : {cur.rating} <br/>
                        Author : {cur.author} <br/>
                        Date : {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(cur.date)))}
                        </p>
                        
                    </div>                           
                    );                       
                 });
            return (
                    <div className="text-center">
                        <h2>Comments</h2>
                        {comslist}
                    </div>
                    );
            }
        }
                          
    render ()
    { 
    
      return(
              <div className="container" >
                  <div className= "row">
                      <div className="col-12 col-md-5">
                          { this.renderDish(this.props.dish) }
                      </div>
                      <div className="col-12 col-md-5"> 
                          { this.renderComments(this.props.dish) } 
                      </div>  
                  </div>
              </div>
           );       
    }

}

export default DishDetail ;