import React, { Component } from 'react'
import   DISHES  from './dishes.js'
import  { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap'
import  { id } from './MenuComponent.js'

export default class DishDetail extends Component {
	constructor(props){
		super(props)
		this.state = {
			dishes : DISHES
		}
	}
	render(){
		const dishdetail = this.state.dishes.map(
		(dish) => {
			if(dish.id === this.props.id){
				return(
					<Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                      <CardTitle>{dish.name}</CardTitle>
                      <CardText>{dish.description}</CardText>
                    </CardBody>
                	</Card>)
			}else{
				return(<div></div>)
			}
		})
		return(
			<div className="row">
                  <div  className=" col-md-5 m-1">
						{ dishdetail }
                    </div>
                </div>
		)
	}
}