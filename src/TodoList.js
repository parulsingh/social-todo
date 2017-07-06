import React, { Component } from 'react';
import {List, ListItem} from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';
import Clear from 'material-ui/svg-icons/content/clear';
import IconButton from 'material-ui/IconButton'

class TodoList extends Component {

	render() {
		return(
			<List style={{marginLeft: '45%'}}>
	            {this.props.items.map((e, index) => (
	            	<div style={{width: '300px'}}>
			          <ListItem
			            leftCheckbox={<Checkbox />}
			            rightIconButton={<IconButton onTouchTap={this.props.handleXButton(index)}>
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
