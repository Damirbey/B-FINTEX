import React from 'react';
import './Navigation.css';
import logo from '../../images/logo/logo.png';
import {Link} from 'react-router-dom';

function Navigation({isLoggedIn,user,logOut}){
    return(
        <nav class="navbar navbar-expand-lg navbar-light">
            <Link to="/b-fintex">
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
                        <Link to="/about">
                            <a class="nav-link">About Us</a>
                        </Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/newsLetters">
                            <a class="nav-link">Newsletters</a>
                        </Link>
                    </li> 
                    {
                        user.id===2 && isLoggedIn&& 
                        <li class="nav-item">
                        <Link to="/adminpanel">
                            <a class="nav-link">Admin Panel</a>
                        </Link>
                    </li>
                    }
                                
                </ul>
                {
                    isLoggedIn ? 
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item">
                            <a class="nav-link" href="#">{user.name} {user.surname}</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" onClick={()=>logOut()}><i class="fa fa-sign-in"/> Log Out</a>
                        </li>

                    </ul>
                    :
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item">
                            <Link to="/register">
                                <a class="nav-link" href="#"><i class="fa fa-user-plus"/> Register</a>
                            </Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/signIn">
                                <a class="nav-link" href="#"><i class="fa fa-sign-in"/> Log In</a>
                            </Link>
                        </li>
                    </ul>
                }
                
            </div>
        </nav>
    )
}

export default Navigation;