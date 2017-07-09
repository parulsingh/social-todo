import React, { Component } from 'react';
import {List, ListItem} from 'material-ui/List';

class CompletedList extends Component {

	render() {
		return(
			<List>
	            {this.props.items.map((e, index) => (
	            	<div style={{width: '300px'}} key={index}>
			          <ListItem
			            primaryText = {e.item}
			            secondaryText = {e.date}
			          />
		          </div>
	    		))}
	        </List>);
	}
}
export default CompletedList;
