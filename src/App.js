import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Navbar from './NavbarComponent/NavbarComponent';
import Login from './LoginComponent/LoginComponent'; 
import Register from './RegisterComponent/RegisterComponent';
import UserInput from './UserInputComponent/UserInputComponent';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          {/* <h1>hello</h1> */}
          <Navbar />
          {/* <Login /> */}
          <Route path="/register" component={Register}/>
          <Route path="/login" component={Login}/>
          <UserInput/>
        </div>
      </BrowserRouter>  
    );
  }
}

export default App;
