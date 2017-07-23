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
	            	<div style={{width: '300px'}} key={e._id}>
			          <ListItem
			            leftCheckbox={<Checkbox onCheck={this.props.handleCheckButton.bind(this, e._id)}/>}
			            rightIconButton={<IconButton onTouchTap={this.props.handleXButton.bind(this, e._id)}>
                                 <Clear />
                             </IconButton>}
			            primaryText= {e.todoText}
			          />
		          </div>
	    		))}
	        </List>);
	}
}
export default TodoList;
