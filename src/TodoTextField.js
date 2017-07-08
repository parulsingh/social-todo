import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import {black500, blue500} from 'material-ui/styles/colors';


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
			this.setState({
				text: ''
			});
		}
	}

	onChange(e) {
		this.setState({
			text: e.target.value
		});
	}

	render() {
		const styles = {
		  errorStyle: {
		    color: black500,
		  },
		};
		return(
	      <TextField
	      	  value={this.state.text}
	      	  onChange={this.onChange}
	          onKeyPress={this.handleKeyPress} 
	          hintStyle={styles.errorStyle}
	          hintText="What needs to get done?"/>);
	}
}
export default TodoTextField;
