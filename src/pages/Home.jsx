import React from 'react'
import Lottie from 'lottie-react'
import HomeAnimation from "../Animation/HomeAnimation.json"
import {
  SubmitButton,HomeContainer
} from '../Styles/Signupformstyle';
import { useNavigate } from 'react-router-dom';
import { UserState } from '../Context/Provider';
function Home() {
  const navigate=useNavigate();
  const {setUser}=UserState();
  const handleClick=()=>{
    setUser(null);
    navigate('/Signin');
  }
  return (
    <HomeContainer>
              <div><Lottie
                  animationData={HomeAnimation}
                  style={{height:"90vh",width:"90vw"}}
                />
              </div>
              <div>
                  <SubmitButton onClick={handleClick}>Log out</SubmitButton>
              </div>
    </HomeContainer>
  )
}

export default Home