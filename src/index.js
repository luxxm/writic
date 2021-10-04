import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './index.css';
import ThemeContext from './app/theme-context';

import Homepage from './app/Homepage/Homepage';
import HomepageTopbar from './app/Topbars/HomepageTopbar/HomepageTopbar'; // Homepage version of the topbar

import Login from './app/Login/Login';
import Register from './app/Register/Register';

import Editor from './app/Editor/Editor';

class Index extends React.Component {
  constructor(props) {
    super(props);

    this.state = {theme: "light"};
    this.changeTheme = this.changeTheme.bind(this);
  }

  changeTheme() {
    switch(this.state.theme) {
      case "light":
        this.setState({theme: "dark"});
        break;
      case "dark":
        this.setState({theme: "purple"});
        break;
      case "purple":
        this.setState({theme: "light"});
        break;
    }
  }

  render() {
    return(
      <ThemeContext.Provider value={this.state.theme}>
        <BrowserRouter>
          <Switch>
            <Route path="/login">
              <HomepageTopbar themeFunc={this.changeTheme} />
              <Login />
            </Route>

            <Route path="/register">
              <HomepageTopbar themeFunc={this.changeTheme} />
              <Register />
            </Route>

            <Route path="/">
              <Editor />
            </Route>
          </Switch>
        </BrowserRouter>
      </ThemeContext.Provider>
    );
  }
}

ReactDOM.render(
  <Index />,
  document.getElementById('root')
);
