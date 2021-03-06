import React , { Component } from 'react'
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron, Button, Modal, ModalBody, ModalHeader, Label, Form, FormGroup, Input } from 'reactstrap';
import { NavLink } from 'react-router-dom';

export default class Header extends Component {
	constructor(props){
		super(props)
		this.state = {
			isNavOpen : false,
			isModalOpen : false
		}
		this.toggleNav = this.toggleNav.bind(this);
		this.toggleModal = this.toggleModal.bind(this)
		this.handleLogin = this.handleLogin.bind(this)
	}
	
	toggleNav(props){
		this.setState = {
			isNavOpen : !this.state.isNavOpen
		}		
	}
	
	toggleModal(){
		this.setState({
			isModalOpen : !this.state.isModalOpen
		})
	}
	
	handleLogin(event){
		this.toggleModal()
		alert("Username is :" + this.username.checked + "Password is:" + this.password.checked + "remember :" + this.remember.checked )
		event.preventDefault()
	}
	
	render(){
		return(
			<React.Fragment>
                <Navbar dark expand="md">
                    <div className="container">
                        <NavbarToggler onClick={this.toggleNav} />
                        
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                            <NavItem>
                                <NavLink className="nav-link"  to='/home'><span className="fa fa-home fa-lg">									</span> Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to='/aboutus'><span className="fa fa-info fa-lg">									</span> About Us</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link"  to='/menu'><span className="fa fa-list fa-lg">									</span> Menu</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to='/contactus'><span className="fa fa-address-card 									fa-lg"></span> Contact Us</NavLink>
                            </NavItem>
                            </Nav>
							<Nav className='ml-auto' navbar>
								<Button onClick={this.toggleModal}><span className='fa fa-sign-in fa-											lg'></span> Login</Button>
							</Nav>
                        </Collapse>
					</div>
                </Navbar>
      <Jumbotron>
           <div className="container">
               <div className="row row-header">
				   <div>
					   <img src='assets/images/logo.png' height='150' width='150'></img>
				   </div>
                   <div className="col-12 col-sm-6">
                       <h1>LET us EaT</h1>
                       <p>We take inspiration from the World's best cuisines, and create a unique fusion 								experience. Our lipsmacking creations will tickle your culinary senses!</p>
                   </div>
               </div>
           </div>
		</Jumbotron>
		<Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
			<ModalHeader styles='background-color : #4ce600'>Login</ModalHeader>
			<ModalBody>
				<Form onSubmit={this.handleLogin}>
					<FormGroup>
						<Label htmlfor='username'>Username</Label>
						<Input type='text' name='username' id='username' innerRef = {(input) => this.username=input}></Input>
					</FormGroup>
					<FormGroup>
						<Label htmlfor='password'>Password</Label>
						<Input type='password' name='password' id='password' innerRef = {(input) => this.password=input}></Input>
					</FormGroup>
					<FormGroup check>
						<Label check>
							<Input type='checkbox' name='remember' innerRef = {(input) => this.remember=input}></Input>
						 Remember me</Label>	
					</FormGroup>
					 <Button type="submit" value="submit" color="primary">Login</Button>
				</Form>	
			</ModalBody>
		</Modal>		
	</React.Fragment>
		)
	}
}