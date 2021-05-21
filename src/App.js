import React, { Component } from "react";
import './App.css';
import "antd/dist/antd.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Navbar  from "./Components/Navbar"
import Home from "./Components/Home"

import Bisection_Method from "./Components/Bisection_Method"
import False_Position from "./Components/False_Position"
import One_point from "./Components/One_point"
import Newton_Raphson from "./Components/Newton_Raphson"
import Secant from "./Components/Secant"

import Cramer_Rule from "./Components/Cramer_Rule"
import Gauss_Elimination from "./Components/Gauss_Elimination"
import Gauss_Jodan from "./Components/Gauss_Jodan"
import Lu_Decomposition from "./Components/Lu_Decomposition"
import Jacobi_iteration from "./Components/Jacobi_iteration"
import Gauss_seidel from "./Components/Gauss_seidel"
import Conjugate_gradient from "./Components/Conjugate_gradient"

import Newton_Interpolation from "./Components/Newton_Interpolation"
import Lagrange from "./Components/Lagrange" 
import Cubic_spline from "./Components/Cubic_spline"
import Linear_regression from "./Components/Linear_regression"
import Polynomial_regression from "./Components/Polynomial_regression"
import swagger from "./Components/swagger"
class App extends Component {

  render() {
    return (
      <Router>
          <Navbar/>            
          <Route  exact path="/" component={Home} />
          <Route  exact path="/Home" component={Home} />
          <Route  exact path="/Bisection_Method" component={Bisection_Method } />
          <Route  exact path="/False_Position" component={False_Position } />
          <Route  exact path="/One_point" component={One_point } />         
          <Route  exact path="/Newton_Raphson" component={Newton_Raphson } />   
          <Route  exact path="/Secant" component={Secant} />    
          <Route  exact path="/Cramer_Rule" component={Cramer_Rule} /> 
          <Route  exact path="/Gauss_Elimination" component={Gauss_Elimination} />
          <Route  exact path="/Gauss_Jodan" component={Gauss_Jodan} />
          <Route  exact path="/Lu_Decomposition" component={Lu_Decomposition} />
          <Route  exact path="/Jacobi_iteration" component={Jacobi_iteration} />
          <Route  exact path="/Gauss_seidel" component={Gauss_seidel} />
          <Route  exact path="/Conjugate_gradient" component={Conjugate_gradient} />
          <Route  exact path="/Newton_Interpolation" component={Newton_Interpolation} />
          <Route  exact path="/Lagrange" component={Lagrange} /> 
          <Route  exact path="/Cubic_spline" component={Cubic_spline} /> 
          <Route  exact path="/Linear_regression" component={Linear_regression} /> 
          <Route  exact path="/Polynomial_regression" component={Polynomial_regression} /> 
          <Route  exact path="/swagger" component={swagger} /> 
      </Router>
    );
  }
}

export default App;
