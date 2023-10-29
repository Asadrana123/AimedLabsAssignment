import React, { useState } from 'react';
import Animation from "../Animation/Animation.json"
import {
  FormContainer,
  InputField,
  SubmitButton,
  Title,
} from '../Styles/Signupformstyle';
import Lottie from "lottie-react";
import { useNavigate } from 'react-router-dom';
import { UserState } from '../Context/Provider';
function Signin() {
  const navigate=useNavigate();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const {setUser}=UserState();
  const handleClick=()=>{
    navigate("/Signup")
}
  const submitHandler = async () => {
    console.log("hi");
    if (!email || !password ) {
      return;
    }
    console.log(email, password);
    const UserData= JSON.parse(localStorage.getItem("UserInfo"));
    console.log(UserData);
    if(email===UserData.email&&password===UserData.password){
      setUser(UserData);
      navigate("/")
    } 
    else return;
  };

  return (
    <div className='outer-div'>
    <div className='inner-div animation'>
    <Lottie
                animationData={Animation}
                styles={{height:"500px"}}
              />
    </div>
    <div className='inner-div'>
    <div className='from-div'>
    <FormContainer onSubmit={submitHandler}>
    <Title>Sign in</Title>
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
    <SubmitButton type="submit">Sign in</SubmitButton>
  </FormContainer>
  </div>
  <div><p>Don't have an account? <button className='register' onClick={handleClick}>Register here</button></p></div>
</div>
</div>
  )
}

export default Signin