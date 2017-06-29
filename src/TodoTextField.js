import React, { Component } from 'react';
import TextField from 'material-ui/TextField';


class TodoTextField extends Component {

	constructor(props) {
	    super(props);
	    this.state = {text: ''};
	    this.handleKeyPress = this.handleKeyPress.bind(this);
		this.onChange = this.onChange.bind(this);
  	}

	handleKeyPress(target) {
		if(target.charCode === 13){
			this.props.onEnterClick(this.state.text);
		}
	}

	onChange(e) {
		this.setState({
			text: e.target.value
		});
	}

	render() {
		return(
	      <TextField 
	      	  style={{marginLeft: '45%'}} 
	      	  onChange={this.onChange}
	          onKeyPress={this.handleKeyPress} 
	          hintText="What needs to get done?"/>);
	}
}
export default TodoTextField;
