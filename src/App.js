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
    }

  updateItems (newItem) {
    var allItems = this.state.items.concat([newItem]);
    this.setState({items: allItems});
  }

  render() {
    return (
      <MuiThemeProvider>
        <div style={{position: 'relative'}}>
          <AppBar title={ 'social-todo' } showMenuIconButton={false}/>
          <TodoTextField onEnterClick={this.updateItems}/>
          <br />
          <TodoList items={this.state.items}/>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
