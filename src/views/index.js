import React from 'react';
import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.css'
import axios from 'axios';
export default  class Admin extends React.Component{
	constructor(props){
		super(props);
		this.state={
			name:'Hello Google!...'
		};
		this.onFormSubmit = this.onFormSubmit.bind(this);
	}
	onFormSubmit(e){
		e.preventDefault();
		axios.get('http://localhost:4000/')
		  .then( (response) => {
		    console.log(response.data);
		    this.setState({
		    	name:response.data
		    });
		  })
		  .catch((error) => {
		    console.log(error);
		});
	}
	componentDidMount(){
		console.log("componentDidMount!...")
	}
	render() {
		const {name} = this.props;
		console.log(name)
		return(
			<div className="container">
				<form>
				  <div className="form-group">
				    <label >Name:</label>
				    <input type="text" className="form-control col-xs-3" id="text" value={this.state.name} readOnly/>
				  </div>
				  <div className="form-group">
				    <label >Password:</label>
				    <input type="password" className="form-control col-xs-3" id="pwd"/>
				  </div>
				  <div className="checkbox">
				    <label><input type="checkbox"/> Remember me</label>
				  </div>
				  <button  className="btn btn-default" onClick={this.onFormSubmit}>Submit</button>
				</form>
		 </div>
		)
	}
}

Admin.propTypes = {
  name: React.PropTypes.string
};