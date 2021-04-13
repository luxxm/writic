import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ThemeContext from './app/theme-context';
import Homepage from './app/Homepage/Homepage';
import Topbar from './app/Topbars/HomepageTopbar/Topbar'; // Homepage version of the topbar

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
      <Topbar themeFunc={this.changeTheme} />
      <Homepage />
      </ThemeContext.Provider>
    );
  }
}

ReactDOM.render(
  <Index />,
  document.getElementById('root')
);
