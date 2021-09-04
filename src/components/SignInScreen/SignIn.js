import React , {useState} from 'react';
import './SignIn.css';

const SignIn = ()=>{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onEmailChange=(event)=>{
        setEmail(event.target.value);
    }
    
    const onPasswordChange=(event)=>{
        setPassword(event.target.value);
    }
    const highlightAllFieldsRed=()=>{
        document.querySelectorAll("input")[0].style.border="1px solid red"; 
        document.querySelectorAll("input")[1].style.border="1px solid red";
    }
    const onButtonClick = (event)=>{
        if(email.length === 0 || password.length === 0)
        {
            alert("Please fill in all the fields");
            highlightAllFieldsRed();
        }
        else{
            alert("Email is "+email+" and password is "+password);
        }
    }

    return (
        <div className="signIn">
            <p>Please log in <i class="fa fa-sign-in"/></p>
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