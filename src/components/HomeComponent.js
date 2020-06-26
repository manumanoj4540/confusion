import React, { Component } from 'react';
import {Card, CardTitle, CardBody, CardImg, CardText, CardSubtitle} from 'reactstrap'
import { FadeTransform } from 'react-animation-components';


class Home extends Component {

  RenderCard = (obj) => {
    if(obj)
    return(
      <FadeTransform in transformProps={{ exitTransform: 'scale(0.5) translateY(-50%)' }}>
      <Card className= "mt-2 mb-2">
        <CardImg src ={obj.image} alt={obj.name}/>
        <CardBody>
          <CardTitle><h3><b>{obj.name}</b></h3></CardTitle>
          {obj.abbr ? <CardSubtitle><h4>{obj.designation}</h4></CardSubtitle> : null }
          <CardText>{obj.description}</CardText>
        </CardBody>
      </Card>
      </FadeTransform>
      );
  }

  render()
    {
      return(
      <div className="container">
        <div className="row">
          <div className= "col-12 col-md-4 ">{this.RenderCard(this.props.dish)}</div>
          <div className= "col-12 col-md-4 ">{this.RenderCard(this.props.promo)}</div>
          <div className= "col-12 col-md-4 ">{this.RenderCard(this.props.leader)}</div>
        </div>
       
        
      </div>
    );}
}

export default Home;   

