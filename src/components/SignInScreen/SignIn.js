import React from 'react';
import './SignIn.css';
import logo from '../../images/logo/logo.png';

const SignIn = ()=>{
    var {email,password} = '';
    const onEmailChange=(event)=>{
        email=event.target.value;
    }

    const onPasswordChange=(event)=>{
        password=event.target.value;
    }

    const onButtonClick = (event)=>{
        alert("Email is "+email+" and password is "+password);
    }
    return (
        <div className="signIn">
            <p>Please log in</p>
            <input 
                type="email" 
                placeholder="Email address"
                onChange={onEmailChange}
            />

            <input 
                type="password" 
                placeholder="Password"
                onChange={onPasswordChange}
            />
            <input 
                type="button" 
                value="Sign In"
                onClick={onButtonClick}
            />
        </div>
    )
}

export default SignIn;