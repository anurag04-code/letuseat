import React, { Component } from 'react'
import  { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem, Button, Modal, ModalBody, ModalHeader, Label,  Row, Input } from 'reactstrap'
import { Control, LocalForm, Errors } from 'react-redux-form';
import { Link } from 'react-router-dom'
import { Loading } from './LoadingComponent.js' 
import { baseUrl } from '../shared/baseUrl.js';
import { FadeTransform, Fade, Stagger } from 'react-animation-components';

const required = (val) => val && (val.length)
const maxLength = (len) => (val) => !val || (val.length <= len)
const minLength = (len) => (val) => val && (val.length >= len)

function RenderDish({dish}){
            return(
					  <div className="col-12 col-md-5 m-1">
						 <FadeTransform
                in
                transformProps={{
                    exitTransform: 'scale(0.5) translateY(-50%)'
                }}>	
						<Card>
							<CardImg top src={baseUrl + dish.image} alt={dish.name} />
							 <CardBody>
							   <CardTitle>{dish.name}</CardTitle>
						   <CardText>{dish.description}</CardText>
						 </CardBody>
					 </Card>
					</FadeTransform>	  
					</div>	
			            );
	}
	
function RenderComments({comment, postComment, dishId}){
			return(
				<div className="col-12 col-md-5 m-1">
					<h4><b>Comments</b></h4>
					<Stagger in>
					{comment.map((comm) => {
						return(
							<Fade in>
								<div>
								<h5>{comm.comment}</h5>
								<h5>-- {comm.author} , {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comm.date)))}</h5>
								<br></br>
								</div>
							</Fade>	
						)
					})}
					<CommentForm dishId={dishId} postComment={postComment}/>
					</Stagger>	
				</div>
		)
	}


const Dishdetail = (props) => {  
			if (props.isLoading) {
				return(
					<div className="container">
						<div className="row">							
							<Loading />
						</div>
					</div>
				);
			}
			else if(props.errMess){
				return(
                <div className="container">
                    <div className="row">            
                        <h4>{props.errMess}</h4>
                    </div>
                </div>
            	);
			}
			else if(props.dish != null)
			{return(
				<div className="container">
					<div className="row">
        	            <Breadcrumb>
                        	<BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        	<BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                   	 		</Breadcrumb>
                    	<div className="col-12">
                    		 <h3>{props.dish.name}</h3>
                        	<hr />
                    	</div>                
                	</div>
					<div className="row">
						<RenderDish dish={props.dish} />		
						<RenderComments comment={props.comments} postComment={props.postComment} dishId={props.dish.id} />			
					</div>
				</div>
	
			)}else{
				return (
					<div></div>
				)
			}	
}

class CommentForm extends Component {
	constructor(props){
		super(props)
		this.state = {
			isNavOpen : false,
			isModalOpen : false
		}
		this.toggleModal = this.toggleModal.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
	}
	
	toggleModal(){
		this.setState({
			isModalOpen : !this.state.isModalOpen
		})
	}				  
					  
	handleSubmit(values){
			this.toggleModal()
			this.props.postComment(this.props.dishId, values.rating, values.author, values.comment);
		}
					  
	render(){
		return(
			<React.Fragment><Button onClick={this.toggleModal} className='button'><span className='fa fa-pencil' size='lg'></span>     Submit Comment</Button>
				<Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal} >
			<ModalHeader><b>Submit Comment</b></ModalHeader>
			<ModalBody>
				<LocalForm className='form-group' onSubmit={(values) => this.handleSubmit(values)}>
					<Row className='col-12'> 
						<Label htmlfor='rating'><b>Rating</b></Label>
						<Control.select model='.rating' name='rating'  id='field' className='form-control'>
							<option></option>
							<option>1</option>
							<option>2</option>
							<option>3</option>
							<option>4</option>
							<option>5</option>
						</Control.select>	
					</Row>
					<br />
					<Row className='col-12'> 
						<Label htmlfor='author'><b>Author</b></Label>
						<Control.text model='.author' name='author'  placeholder='Your Name' id='field'    									className='form-control'
							validators= {{
								required,maxLength : maxLength(15),minLength : minLength(3)
							}}/>
						    <Errors
										className='text-danger'
										model='.text'
										show='touched'
										 messages={{
                                            required: 'Required',
                                            minLength: ' Must be greater than 2 characters',
                                            maxLength: ' Must be 15 characters or less'
                                        }}	/>

					</Row>
					<br />
					<Row className='col-12'> 
						<Label htmlfor='comment'><b>Comment</b></Label>
						<Control.textarea model='.comment' name='comment' rows='6'id='field'    className='form-control'/>
					</Row>
					<br />
					<button className='btn btn-primary'>Submit</button>
				</LocalForm>	
			</ModalBody>
		</Modal>
	</React.Fragment>
			
		)
	}
}

export default Dishdetail