import React from 'react';
import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.css'
import axios from 'axios';
import {connect} from 'react-redux';
import {fetcUser} from '../actions/userActions'

@connect((store) => {
	return {
		userRecord:store.user
	}
})
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
		this.props.dispatch(fetcUser());

		/*axios.get('http://localhost:4000/')
		  .then( (response) => {
		    console.log(response.data);
		    this.setState({
		    	name:response.data
		    });
		  })
		  .catch((error) => {
		    console.log(error);
		});*/
	}
	componentDidMount(){
		console.log(this.props.userRecord);
	}
	render() {
		const {name} = this.props.userRecord;
		return(
			<div className="container">
				<form>
				  <div className="form-group">
				    <label >Name:</label>
				    <input type="text" className="form-control col-xs-3" id="text" value={name} readOnly/>
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