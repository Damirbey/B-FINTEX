import React , {useState, useEffect} from 'react';
import {Redirect} from 'react-router'
import { useHistory } from "react-router-dom";
import {users} from '../../data';
import './SignIn.css';

const SignIn = ({changeIsLoggedInState,changeUserState})=>{
        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');
        const history = useHistory();
                
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
                let foundUser = users.filter((user)=>{
                    return user.email === email && user.password === password;
                });
                if(foundUser.length>0)
                {
                    changeIsLoggedInState();
                    changeUserState(foundUser[0]);
                    history.push('/b-fintex');
                }
                else{
                    alert("Wrong credentials, please try again or register");
                }
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