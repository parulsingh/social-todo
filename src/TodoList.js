import React, { Component } from 'react';
import {List, ListItem} from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';


class TodoList extends Component {

	render() {
		return(
		<List style={{marginLeft: '45%'}}>
            {this.props.items.map(e => (
	          <ListItem
	            leftCheckbox={<Checkbox />}
	            primaryText= {e}
	          />
    		))}
        </List>);
	}
}
export default TodoList;
