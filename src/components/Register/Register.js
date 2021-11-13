import React,{useState} from 'react';
import { useHistory } from "react-router-dom";
import './Register.css';

const Register=({changeUserState,changeIsLoggedInState})=>{
    const [firstName, setFirstName] = useState('');
    const [lastName,setLastName] = useState('');
    const [registerEmail,setEmail] = useState('');
    const [registerPassword, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const history = useHistory();

    const onFirstNameChange = (event)=>{
        setFirstName(event.target.value);
        document.querySelectorAll("input")[0].style.border=""; 
    }
    const onLastNameChange = (event)=>{
        setLastName(event.target.value);
        document.querySelectorAll("input")[1].style.border=""; 
    }
    const onEmailChange = (event)=>{
        setEmail(event.target.value);
        document.querySelectorAll("input")[2].style.border=""; 
    }
    const onPasswordChange = (event)=>{
        setPassword(event.target.value);
        document.querySelectorAll("input")[3].style.border=""; 
    }
    const onConfirmPasswordChange = (event)=>{
        setConfirmPassword(event.target.value);
        document.querySelectorAll("input")[4].style.border=""; 
    }
    const highlightAllFieldsRed=()=>{
        document.querySelectorAll("input")[0].style.border="1px solid red"; 
        document.querySelectorAll("input")[1].style.border="1px solid red";
        document.querySelectorAll("input")[2].style.border="1px solid red"; 
        document.querySelectorAll("input")[3].style.border="1px solid red";
        document.querySelectorAll("input")[4].style.border="1px solid red"; 
    }
    /**Registering user in the system */
    const onButtonClick = (event)=>{
        if(firstName.length > 0 && lastName.length > 0 && registerEmail.length > 0 && registerPassword.length > 0 && confirmPassword.length > 0){
            if(registerEmail.includes("@"))
            {
                if(registerPassword === confirmPassword)
                {
                    fetch('http://localhost:3000/register',{
                        method:'post',
                        headers:{'Content-Type':'application/json'},
                        body:JSON.stringify({
                            email:registerEmail,
                            name:firstName,
                            surname:lastName,
                            password:registerPassword
                        })
                    }).then(response=>response.json())
                    .then((receivedData)=>{
                        if(receivedData!=="Ooops something went wrong")
                        {
                            changeIsLoggedInState();
                            changeUserState(receivedData[0]);
                            history.push('/b-fintex');
                        }
                        else{
                            alert("Unfortunately, we can not register you at the moment");
                        }
                    });
                }
                else{
                    alert("Passwords do not match");
                    document.querySelectorAll("input")[3].style.border="1px solid red";
                    document.querySelectorAll("input")[4].style.border="1px solid red"; 
                }
            }
            else{
                alert("Invalid Email");
                document.querySelectorAll("input")[2].style.border="1px solid red"; 
            }
        }
        else{
            alert("Please fill in all the fields");
            highlightAllFieldsRed();
        }
    }
    return (
        <div className="register">
            <p>Please register <i class="fa fa-user-plus"/></p>
            <input 
                type="text" 
                placeholder="First Name"
                onChange={onFirstNameChange}
            />
            <input 
                type="text" 
                placeholder="Last Name"
                onChange={onLastNameChange}
            />
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
                type="password" 
                placeholder="Confirm password"
                onChange={onConfirmPasswordChange}
            />
            <input 
                type="button" 
                value="Register"
                onClick={onButtonClick}
            />
        </div>
    )
}

export default Register;