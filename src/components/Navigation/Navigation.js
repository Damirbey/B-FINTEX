import React from 'react';
import './Navigation.css';
import logo from '../../images/logo/logo.png';
import {Link} from 'react-router-dom';

function Navigation(){
    return(
        <nav class="navbar navbar-expand-lg navbar-light">
            <Link to="/B-FINTEX">
                <a class="navbar-brand" href="#">
                    <img src={logo} class="logo"/> 
                </a>
            </Link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarText">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <Link to="/About">
                            <a class="nav-link">About Us</a>
                        </Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/NewsLetters">
                            <a class="nav-link">Newsletters</a>
                        </Link>
                    </li>            
                </ul>
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                        <Link to="/Register">
                            <a class="nav-link" href="#"><i class="fa fa-user-plus"></i> Sign Up</a>
                        </Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/SignIn">
                            <a class="nav-link" href="#"><i class="fa fa-sign-in"></i> Login</a>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navigation;