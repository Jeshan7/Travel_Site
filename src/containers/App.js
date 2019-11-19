import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import fire from '../config/Firebase.js';
import Navbar from '../components/Navbar/Navbar';
import Login from './Login/Login'; 
import Register from './Register/Register';
import Home from '../components/UserInput/UserInput';
import Package from '../components/Packages/Packages';
import Member from '../components/MembersCount/MembersCount';
import Budget from '../BudgetComponent/BudgetComponent.js';
import Errors from '../components/SiteErrors/Errors';

class App extends Component {
  state = {
    user: {},
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
          { this.state.user ? <Navbar isUser={ this.state.user } userEmail={ this.state.user.email }/> 
              : <Navbar isUser={ this.state.user }/> }
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/register" component={Register}/>
            <Route path="/login" component={Login}/>
          </Switch>
          {/* <Package/> */}
          {/* <Member/> */}
          {/* <Budget/> */}
        </div>
      </BrowserRouter>  
    );
  }
}

export default App;
