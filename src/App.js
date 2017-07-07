import React, { Component } from 'react';
import './App.css';
import injectTapEventPlugin from 'react-tap-event-plugin';
import {AppBar} from 'material-ui';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TodoList from './TodoList.js';
import TodoTextField from './TodoTextField.js';


injectTapEventPlugin();


class App extends Component {

  constructor(props) {
      super(props);
      this.state = {items: []};
      this.updateItems = this.updateItems.bind(this);
      this.handleXButton = this.handleXButton.bind(this);
    }

  updateItems (newItem) {
    var allItems = this.state.items.concat([newItem]);
    this.setState({items: allItems});
  }

  handleXButton (removedItemIndex) {
    console.log(removedItemIndex);
    console.log(this.state.items);
    var allItems = this.state.items;
    allItems.splice(removedItemIndex, 1);
    this.setState({items: allItems});
    console.log(allItems);
  }

  render() {
    return (
      <MuiThemeProvider>
        <div style={{position: 'relative'}}>
          <AppBar title={ 'social-todo' } showMenuIconButton={false}/>
          <TodoTextField onEnterClick={this.updateItems}/>
          <br />
          <TodoList items={this.state.items} handleXButton={this.handleXButton}/>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
