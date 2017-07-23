import React, { Component } from 'react';
import {List, ListItem} from 'material-ui/List';

class CompletedList extends Component {

	render() {
		return(
			<List>
	            {this.props.items.map((e, index) => (
	            	<div style={{width: '300px'}} key={e._id}>
			          <ListItem
			            primaryText = {e.todoText}
			            secondaryText = {e.timeCompleted}
			          />
		          </div>
	    		))}
	        </List>);
	}
}
export default CompletedList;
