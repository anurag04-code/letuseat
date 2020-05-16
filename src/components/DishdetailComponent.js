import React from 'react'
import  { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap'

	
function RenderDish({dish}){
            return(
				  <div className="col-12 col-md-5 m-1">
                	<Card>
                	    <CardImg top src={dish.image} alt={dish.name} />
               		     <CardBody>
               		       <CardTitle>{dish.name}</CardTitle>
               	       <CardText>{dish.description}</CardText>
               	     </CardBody>
               	 </Card>
				</div>	
			            );
	}
	
function RenderComments({dish}){
			return(
				<div className="col-12 col-md-5 m-1">
					<h4><b>Comments</b></h4>
					{dish.comments.map((comm) => {
						return(
							<div>
								<h5>{comm.comment}</h5>
								<h5>-- {comm.author} , {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comm.date)))}</h5>
								<br></br>
							</div>
						)
					})}
				</div>
		)
	}
	
const Dishdetail = (props) => {
		if(props.dish != null)
		{return(
			<div className="container">
				<div className="row">
					<RenderDish dish={props.dish} />		
					<RenderComments dish={props.dish} />
				</div>
			</div>			
		)}else{
			return (
				<div></div>
			)
		}
}

export default Dishdetail