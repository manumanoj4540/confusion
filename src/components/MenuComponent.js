import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

let Menu = (props) => {
  const menu = props.dishes.map((dish) => {
      return (
        <div key={dish.id} className="col-12 col-md-5 m-1">
          <RenderMenuItem dish={dish} />
        </div>
      );
  });
              
     return (
       <div className="container">
        <div className= "row">
          <Breadcrumb>
            <BreadcrumbItem> <Link to ="/home">Home</Link> </BreadcrumbItem>
            <BreadcrumbItem active>Menu</BreadcrumbItem>
          </Breadcrumb>
        </div>
        <h3 className="mt-2 mb-4">Menu</h3>
         <div className="row">
            {menu}
         </div>
       </div>
              );
}

let RenderMenuItem = ({dish}) => {
  return(
  <Card key= "dish.id" >
    <Link to = {`menu/${dish.id}`} >
      <CardImg width="50%" src={dish.image} alt={dish.name} />
      <CardImgOverlay>
        <CardTitle><h4>{dish.name}</h4></CardTitle>
      </CardImgOverlay>
    </Link>
  </Card> 
  
  );
}
              
export default Menu;           