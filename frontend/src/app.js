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
import axios from 'axios';

injectTapEventPlugin();


class App extends Component {

  constructor(props) {
      super(props);
      this.state = {
        items: [], 
        open: false, 
        completedItems: [], 
        users: []
      };
      this.updateItems = this.updateItems.bind(this);
      this.handleXButton = this.handleXButton.bind(this);
      this.handleCheckButton = this.handleCheckButton.bind(this);
      this.componentDidMount = this.componentDidMount.bind(this);
    }

  componentDidMount() {
    this.getAllItemsAndSetState();
     axios.get('/completed_todos/Parul')
      .then( (response) => {
        this.setState({completedItems: response.data})
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  updateItems (newItem) {
    axios.post('/newtodo', {
      "createdBy": "Parul",
      "todoText": newItem,
      "isCompleted": false,
      "timeCreated": new Date().toLocaleString()
    })
    .then((response) => {
      this.getAllItemsAndSetState();
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  handleXButton (removedItemId) {
    axios.delete('/remove_todo/'+ removedItemId)
      .then( (response) => {
        this.getAllItemsAndSetState();
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  getAllItemsAndSetState = () => {
    axios.get('/unfinished_todos/Parul')
      .then( (response) => {
        this.setState({items: response.data})
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  

  handleCheckButton (completedItemId) {
    axios.post('/mark_completed/' + completedItemId)
    .then((response) => {
      this.getAllItemsAndSetState();
    })
    .catch(function (error) {
      console.log(error);
    });
    axios.get('/completed_todos/Parul')
      .then( (response) => {
        this.setState({completedItems: response.data})
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  handleToggle = () => {this.setState({open: !this.state.open})};

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
