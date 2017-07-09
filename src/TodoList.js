import React, { Component } from 'react';
import {List, ListItem} from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';
import Clear from 'material-ui/svg-icons/content/clear';
import IconButton from 'material-ui/IconButton'

class TodoList extends Component {

	render() {
		return(
			<List style={{marginLeft: '40%'}}>
	            {this.props.items.map((e, index) => (
	            	<div style={{width: '300px'}} key={index}>
			          <ListItem
			            leftCheckbox={<Checkbox onCheck={this.props.handleCheckButton.bind(this, index)}/>}
			            rightIconButton={<IconButton onTouchTap={this.props.handleXButton.bind(this, index)}>
                                 <Clear />
                             </IconButton>}
			            primaryText= {e}
			          />
		          </div>
	    		))}
	        </List>);
	}
}
export default TodoList;
