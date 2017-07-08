import React, { Component } from 'react';
import './App.css';
import injectTapEventPlugin from 'react-tap-event-plugin';
import {AppBar} from 'material-ui';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TodoList from './TodoList.js';
import CompletedList from './CompletedList.js';
import TodoTextField from './TodoTextField.js';
import FlatButton from 'material-ui/FlatButton';
import Drawer from 'material-ui/Drawer';

injectTapEventPlugin();


class App extends Component {

  constructor(props) {
      super(props);
      this.state = {items: [], open: false, completedItems: []};
      this.updateItems = this.updateItems.bind(this);
      this.handleXButton = this.handleXButton.bind(this);
      this.handleCheckButton = this.handleCheckButton.bind(this);
    }

  updateItems (newItem) {
    var allItems = this.state.items.concat([newItem]);
    this.setState({items: allItems});
  }

  handleXButton (removedItemIndex) {
    var allItems = this.state.items;
    allItems.splice(removedItemIndex, 1);
    this.setState({items: allItems});
  }

  handleCheckButton (completedItemIndex) {
    var that = this;
    setTimeout(function(){
      var allItems = that.state.items;
      var completedItem = allItems.splice(completedItemIndex, 1);
      that.setState({items: allItems});
      var allCompletedItems = that.state.completedItems.concat({
        item: completedItem,
        date: new Date().toLocaleString(),
       });
      that.setState({completedItems: allCompletedItems});
    }, 2000); 
  }

  handleToggle = () => this.setState({open: !this.state.open});

  render() {
    return (
      <MuiThemeProvider>
        <div>
          <AppBar 
            title={'social-todo'} 
            showMenuIconButton={false} 
            iconElementRight={<FlatButton label="Completed" onTouchTap={this.handleToggle} />}/>
          <Drawer width={300} open={this.state.open} >
            <h1 id="completed"> completed </h1>
            <CompletedList items={this.state.completedItems} handleXButton={this.handleXButton}/>
          </Drawer>
          <div style={{textAlign: 'center'}}>
          <h1 id="title"> t  o  d  o </h1>
          <TodoTextField onEnterClick={this.updateItems}/>
          <br /> <br /> <br /> <br />
          </div>
          <TodoList items={this.state.items} handleXButton={this.handleXButton} handleCheckButton={this.handleCheckButton}/>

        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
