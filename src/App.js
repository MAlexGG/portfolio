import React, { Component } from 'react';
import './styles/App.scss';
import Home from './components/home';

class App extends Component {

  redirect = () => {
    setTimeout (() => {
      return this.props.history.push('/aboutme');
    }, 7000)
  };

  render(){
    this.redirect();
    return (
      <div>
        <Home /> 
      </div>
    );
  }
}

export default App;

