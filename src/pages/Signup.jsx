import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import Animation from "../Animation/Animation.json"
import {
  FormContainer,
  InputField,
  SubmitButton,
  Title,
} from '../Styles/Signupformstyle';
import Lottie from "lottie-react";
function Signup() {
  const navigate=useNavigate();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [confirmpassword, setConfirmpassword] = useState();
  const [password, setPassword] = useState();
  const submitHandler = async () => {
    console.log("hi");
    if (password.length<10) {
      return;
    }
    if (!name || !email || !password || !confirmpassword) {
      return;
    }
    if (password !== confirmpassword) {
      return;
    }
    console.log(name, email, password);
    localStorage.setItem('UserInfo', JSON.stringify({name,email,password}));
    navigate("/")
  };
  return (
    <div className='outer-div'>
      <div className='inner-div animation'>
      <Lottie
                  animationData={Animation}
                  styles={{height:"600px"}}
                />
      </div>
      <div className='inner-div'>
      <FormContainer onSubmit={submitHandler}>
      <Title>Sign Up</Title>
      <InputField
        type="text"
        name="name"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <InputField
        type="email"
        name="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <InputField
        type="password"
        name="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <InputField
        type="password"
        name="password"
        placeholder="Confirm Password"
        value={confirmpassword}
        onChange={(e) => setConfirmpassword(e.target.value)}
      />
      <label className='mylabel'>
        <input
          type="checkbox"
          name="rememberMe"
          
        />
        Remember Me
      </label>
       <label className='mylabel'>
        <input
          type="checkbox"
          name="rememberMe"
          
        />
           Agree to our <a href="/terms" target="_blank" rel="noopener noreferrer">
            Terms and Conditions
          </a>
      </label>
      <SubmitButton type="submit">Sign Up</SubmitButton>
    </FormContainer>
  </div>
  </div>
  )
}

export default Signup;