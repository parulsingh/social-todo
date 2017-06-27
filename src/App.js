import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import injectTapEventPlugin from 'react-tap-event-plugin';
import {AppBar} from 'material-ui';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Checkbox from 'material-ui/Checkbox';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';

injectTapEventPlugin();


class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <AppBar title={ 'social-todo' } showMenuIconButton={false}/>
          <TextField
            hintText="What needs to get done?"
          /><br />
          <List>
          <ListItem
            leftCheckbox={<Checkbox />}
            primaryText="Unpack boxes"
            secondaryText="flatten them after"
          />
          <ListItem
            leftCheckbox={<Checkbox />}
            primaryText="Finish Zachary's"
            secondaryText="Heat in oven"
          />
          <ListItem
            leftCheckbox={<Checkbox />}
            primaryText="Call babe"
            secondaryText="<3"
          />
        </List>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
