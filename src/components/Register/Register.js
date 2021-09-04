import React,{useState} from 'react';
import './Register.css';

const Register=()=>{
    const [firstName, setFirstName] = useState('');
    const [lastName,setLastName] = useState('');
    const [email,setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    
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
    const onButtonClick = (event)=>{
        if(firstName.length > 0 && lastName.length > 0 && email.length > 0 && password.length > 0 && confirmPassword.length > 0){
            if(email.includes("@"))
            {
                if(password === confirmPassword)
                {
                    alert("User registered successfully");
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