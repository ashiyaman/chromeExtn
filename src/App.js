import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import injectTapEventPlugin from 'react-tap-event-plugin';
import Main from './imports/ui/Main';


class App extends Component {
  render() {
    return (
      <div className="App">
      <MuiThemeProvider>

        <Main/>
      </MuiThemeProvider>
      </div>
    );
  }
}

// injectTapEventPlugin();
export default App;
