import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom'
import '../App.css'

class DishDetail extends Component 
{
    
    renderDish(flag) 
        { 
            let dish=flag[0];
        if (dish != null)
            {   console.log(dish);
                return(
                    <Card key={dish.id}>
                        <CardImg top src={dish.image} alt={dish.name} className="pic"/>
                        <CardBody>
                        <CardTitle><b>{dish.name}</b></CardTitle>
                        <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
                      );
            }
        else return(<div></div>);
        }
                        

           
    renderComments(comms) 
        {
        if (comms != null)
            {
            let comslist = comms.map((cur) => {
                return(
                    <div key={cur.id}>
                        <p> {cur.comment} <br/>
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
                    <Breadcrumb>
                        <BreadcrumbItem> <Link to ="/home">Home</Link> </BreadcrumbItem>
                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{this.props.dish[0].id}</BreadcrumbItem>
                    </Breadcrumb>
                </div>
                  <div className= "row">
                      <div className="col-12 col-md-5">
                          { this.renderDish(this.props.dish) }
                      </div>
                      <div className="col-12 col-md-5"> 
                          { this.renderComments(this.props.comments) } 
                      </div>  
                  </div>
              </div>
           );       
    }

}

export default DishDetail ;