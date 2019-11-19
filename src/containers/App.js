import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route } from 'react-router-dom';
import fire from '../config/Firebase.js';
import Navbar from '../components/NavbarComponent/NavbarComponent';
import Login from './LoginComponent/LoginComponent'; 
import Register from './RegisterComponent/RegisterComponent';
import Home from '../components/UserInputComponent/UserInputComponent';
import Package from '../components/PackagesComponent/PackagesComponent';
import Member from '../components/MembersCountComponent/MembersCountComponent';
import Budget from '../BudgetComponent/BudgetComponent.js';

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
        {/* userEmail={this.state.user.email} */}
          <Navbar isUser={ this.state.user } />
          <Route path="/register" component={Register}/>
          <Route path="/login" component={Login}/>
          <Route path="/home" component={Home}/>
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
