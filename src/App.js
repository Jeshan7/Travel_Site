import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route } from 'react-router-dom';
import fire from './config/Firebase.js';
import Navbar from './NavbarComponent/NavbarComponent';
import Login from './LoginComponent/LoginComponent'; 
import Register from './RegisterComponent/RegisterComponent';
import UserInput from './UserInputComponent/UserInputComponent';
import Package from './PackagesComponent/PackagesComponent';
import Member from './MembersCountComponent/MembersCountComponent';
import Budget from './BudgetComponent/BudgetComponent.js';

class App extends Component {
  state = {
    user: {}
  }
  
  componentDidMount() {
    this.authListener(); 
  }

  authListener() {
    fire.auth().onAuthStateChanged( user => {
      if(user){
        this.setState({ user })
        console.log(user.email);
      } else {
        this.setState({ user: null })
        console.log("No user");
      }
    })
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          {/* <h1>hello</h1> */}
          <Navbar isUser={ this.state.user }/>
          {/* <Login /> */}
          <Route path="/register" component={Register}/>
          <Route path="/login" component={Login}/>
          {/* <UserInput/> */}
          {/* <Package/> */}
          {/* <Member/> */}
          {/* <Budget/> */}
        </div>
      </BrowserRouter>  
    );
  }
}

export default App;
