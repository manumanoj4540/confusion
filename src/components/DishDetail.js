import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem, Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label,Input } from 'reactstrap';
import { Link } from 'react-router-dom'
import { FadeTransform, Fade, Stagger } from 'react-animation-components';
import '../App.css'

function RenderComments({comms, addComment, dishId}) 
        {
        if (comms != null)
            {
            let comslist = comms.map((cur) => {
                return(
                    <Fade in>
                        <div key={cur.id}>                        
                            <p> {cur.comment} <br/>
                            Rating : {cur.rating} <br/>
                            Author : {cur.author} <br/>
                            Date : {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(cur.date)))}
                            </p>                                                
                        </div>
                    </Fade>                        
                );
            });
            return (
                    <div className="text-center">                  
                        <h2>Comments</h2>
                        <Stagger in>
                            {comslist}
                        </Stagger>
                    </div>
                    );
            }
        }

class DishDetail extends Component 
{
    constructor(props){
        super(props);
        this.toggleModal = this.toggleModal.bind(this);
        this.state = {
            isModalOpen : false
        }
    }

    toggleModal(){
        this.setState({isModalOpen : !this.state.isModalOpen})
    }

    handleSubmit(event) 
        {
        this.toggleModal();
        
        event.preventDefault();
        this.props.addComment(this.props.dishId, this.rating.value, this.username.value, this.comment.value);
        
        }

    renderDish(flag) 
        { 
            let dish=flag[0];
        if (dish != null)
            {   console.log(dish);
                return(
                    <FadeTransform in transformProps={{ exitTransform: 'scale(0.5) translateY(-50%)' }}>
                        <Card key={dish.id}>
                            <CardImg top src={dish.image} alt={dish.name} className="pic"/>
                            <CardBody>
                            <CardTitle><b>{dish.name}</b></CardTitle>
                            <CardText>{dish.description}</CardText>
                            </CardBody>
                        </Card>
                    </FadeTransform>
                      );
            }
        else return(<div></div>);
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
                  <div className= "row justify-content-center">
                      <div className="col-12 col-md-5">
                          { this.renderDish(this.props.dish) }
                      </div>
                      <div className="col-12 col-md-5"> 
                       <RenderComments comms={this.props.comments} addComment={this.props.addComment} dishId={this.props.dish.id} /> 
                        <Button outline onClick={this.toggleModal} className="offset-4 mb-2">Submit Comment</Button>

                        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                            <ModalHeader toggle={this.toggleModal}><b>Login</b></ModalHeader>
                            <ModalBody>
                                <Form onSubmit={()=>this.handleSubmit()}>
                                        <FormGroup>
                                            <Label htmlFor="username">Name</Label>
                                            <Input type="text" id="username" name="username"
                                                innerRef={(input) => this.username = input} />
                                        </FormGroup>
                                        <FormGroup>
                                            <Label htmlfor="rating">Rating</Label>
                                            <Input type="select" name="rating" id="rating" innerRef={(input) => this.rating = input}>
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                                <option>5</option>
                                            </Input>
                                        </FormGroup>
                                        <FormGroup>
                                            <Label htmlfor="comment">Comment</Label>
                                            <Input type="textarea" name="comment" id="comment" innerRef={(input) => this.comment = input}/>
                                        </FormGroup>
                                        
                                        <Button type="submit" value="submit" color="dark">Submit</Button>
                                </Form>
                            </ModalBody>
                        </Modal>
                      </div>  
                  </div>
              </div>
           );       
    }

}

export default DishDetail ;