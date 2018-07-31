import React, { Component } from 'react';
import './App.css';
// We can just import from the folder, because the default file is index.js
import Login from './Login'
import MainContainer from './MainContainer'

class App extends Component {
  constructor(){
    super();

    this.state = {
      logged: false,
      username: '',
    }
  }
  login = (username) => {
    // we will setState of this component,
    // but we will call it in the login component

    // setState is the last thing that you want to do
    // in your function
    this.setState({
      username: username,
      logged: true,
    });

    console.log('login function in app is working', username);
  }
  render() {
    console.log(this.state, ' inside of app component');
    // let logged = this.state.logged;
    // if (logged) {
    //   return (
    //     <div className="MainContainer">
    //     <MainContainer />
    //   </div>
    //   )
    // } else {
    //   return (
    //     <div className="Login">
    //     <Login login={this.login}/>
    //   </div>
    //   )
    // }
    return (
      <div className="App">
        {this.state.logged ? <MainContainer username={this.state.username} /> : <Login login={this.login}/>}
      </div>
    );
  }
}

export default App;
