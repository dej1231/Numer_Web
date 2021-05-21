import React from 'react'
import {Link,Route} from 'react-router-dom'


function Navbar() {
    return (
        <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand"><Link to="/Home">Numerical</Link></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Root of Equation
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <a class="dropdown-item" ><Link to="/Bisection_Method">Bisection</Link></a>
                <a class="dropdown-item" ><Link to="/False_Position">False Position</Link></a>
                <a class="dropdown-item" ><Link to="/One_point">One-point Iteration</Link></a>
                <a class="dropdown-item" ><Link to="/Newton_Raphson">Newton Raphson</Link></a>
                <a class="dropdown-item" ><Link to="/Secant">Secant</Link></a>
                </div>
            </li>
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >
                Linear algebra
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <a class="dropdown-item" ><Link to="/Cramer_Rule">Cramer's Rule</Link></a>
                <a class="dropdown-item" ><Link to="/Gauss_Elimination">Gauss Elimination</Link></a>
                <a class="dropdown-item" ><Link to="/Gauss_Jodan">Gauss Jodan</Link></a>
                <a class="dropdown-item" ><Link to="/Newton_Raphson">Newton Raphson</Link></a>
                <a class="dropdown-item" ><Link to="/Secant">Secant</Link></a>
                <a class="dropdown-item" ><Link to="/Lu_Decomposition">Lu Decomposition</Link></a>
                <a class="dropdown-item" ><Link to="/Jacobi_iteration">Jacobi_iteration</Link></a>
                <a class="dropdown-item" ><Link to="/Gauss_seidel">Gauss seidel</Link></a>
                <a class="dropdown-item" ><Link to="/Conjugate_gradient">Conjugate Gradient</Link></a>
                </div>
            </li>
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >
                Interpolation
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <a class="dropdown-item" ><Link to="/Newton_Interpolation">Newton Interpolation</Link></a>
                <a class="dropdown-item" ><Link to="/Lagrange">Lagrange</Link></a>
                <a class="dropdown-item" ><Link to="/Cubic_spline">Cubic Spline</Link></a>
                <a class="dropdown-item" ><Link to="/Linear_regression">Linear Regression</Link></a>
                <a class="dropdown-item" ><Link to="/Polynomial_regression">Polynomial Regression</Link></a>
                </div>
            </li>            
            </ul>
        </div>
        </nav>
        </div>
    )
}

export default Navbar
