import React from 'react';
import './Navigation.css';

function Navigation(){
    return(
        <nav class="navbar navbar-expand-lg navbar-light">
            <a class="navbar-brand" href="#">
                <img src="images/news/logo.png" class="logo"/> 
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarText">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link">About Us</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link">Newsletters</a>
                    </li>            
                </ul>
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                        <a class="nav-link" href="#"><i class="fa fa-user-plus"></i> Sign Up</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#"><i class="fa fa-sign-in"></i> Login</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navigation;