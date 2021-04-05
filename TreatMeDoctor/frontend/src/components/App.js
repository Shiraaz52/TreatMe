import React from 'react'
import { render } from 'react-dom'

import {Provider} from "react-redux"
import store from "../store"


import Login from "./login"
import Home from "./home"
import  NavigationBar from './Navbar';
import Register from "./register"
import 'react-bootstrap/dist/react-bootstrap.min.js';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import "../../static/css/index.css"
import PrivateRoute from "./MainPage.js"

import {loadUser} from "../actions/auth"

import Leads from "./leads/Leads"


class App extends React.Component {

   componentDidMount(){
      store.dispatch(loadUser);
   }

   render() {
      return (
         <Provider store = {store}>
         <div className="App">
            <Router>
               <NavigationBar></NavigationBar>
               <PrivateRoute exact path="/" component={Home}></PrivateRoute>
               <Route path="/login" component={Login}></Route>
               <Route exact path="/register" component={Register}></Route>
               
            </Router>
         </div>
         </Provider>
      );
   }
 }




export default App;

