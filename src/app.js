import React from 'react';
import ReactDOM from 'react-dom';
import Admin from './views/index';
import './styles/style.less';

export class HelloMessage extends React.Component {
	constructor(props){
		super(props);
	}
  render() {
    return (
    	<Admin {...this.props}/> 
    )
  }
}

ReactDOM.render(<HelloMessage name="Hello Google!.." />, document.getElementById('app'));