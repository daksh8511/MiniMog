import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const OTPBox = () => {
  const [otp, setOTP] = useState(0);
  const [user, setUser] = useState([])
  const navigation = useNavigate()

  const getEmail = JSON.parse(localStorage.getItem('email'))

  
  const sendOtp = async () => {
    const response = await fetch(`http://127.0.0.1:4000/api/users/getPerson?getEmail=${getEmail}`)
    const final = await response.json()
    setUser(final.data)    

    if(user[0].otp == otp){
      alert("OTP Verified")
      navigation('/')
    }else{
      alert("OTP are Not match")
    }
  };

  const handleOTP = (e) => {
    e.preventDefault();
    sendOtp();
  };


  return (
    <Wrapper className="p-4">
      <div className="border p-5">
        <h2 className="text-center mb-4 text-2xl">OTP Verification</h2>
        <form
          action=""
          className="flex flex-col w-100 m-auto"
          onSubmit={handleOTP}
        >
          <input
            type="text"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOTP(e.target.value)}
            className="border border-gray-300 p-1"
          />
          <button type="submit" className="bg-black text-white p-1 mt-2">
            Enter
          </button>
        </form>
      </div>
    </Wrapper>
  );
};

export default OTPBox;

const Wrapper = styled.div`
  input[type="number"] {
    -moz-appearance: textfield; /* Firefox */
    text-align: center;

    /* Chrome, Safari, Edge, Opera */
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }
`;
