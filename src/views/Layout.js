import React from 'react';
import Admin from './admin';
import {connect} from 'react-redux';
import {fetcUser} from '../actions/userActions'

@connect((store) => {
	return {
		user:store.user
	}
})
export default class Layout extends React.Component {
  constructor(props){
	 super(props);
  }
  componentWillMount(){
    //this.props.dispatch(fetcUser());
  }
  render() {
    return (
    	<Admin {...this.props}/> 
    )
  }
}