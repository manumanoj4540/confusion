import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';

let Menu = (props) => {
  const menu = props.dishes.map((dish) => {
      return (
        <div key={dish.id} className="col-12 col-md-5 m-1">
          <RenderMenuItem dish={dish} onClick={props.onClick} />
        </div>
      );
  });
              
     return (
       <div className="container">
         <div className="row">
            {menu}
         </div>
       </div>
              );
}

let RenderMenuItem = ({dish , onClick}) => {
  return(
  <Card key= "dish.id" onClick = {() => onClick(dish)} >
    <CardImg width="50%" src={dish.image} alt={dish.name} />
    <CardImgOverlay>
      <CardTitle>{dish.name}</CardTitle>
    </CardImgOverlay>
  </Card> 
  );
}
              
export default Menu;

            
            
            


           
    
              