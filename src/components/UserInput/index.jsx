import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input, InputDivStyled } from "./styles";

const UserInput = ({ setName }) => {
  const [showInput, setShowInput] = useState(true);

  const userInput = useRef();
  let navigate = useNavigate();
  const navigateToHome = () => {
    const userInputName = userInput.current.value;
    navigate("/home");
    setShowInput(false);
    setName(userInputName);
  };
  return (
    <>
      {showInput === true && (
        <InputDivStyled>
          <h4>Welcome to Musique</h4>
          <p>Track And Listen To Your Favorite Artist!</p>
          <Input ref={userInput} placeholder="Enter Your Name!" />
          <button onClick={navigateToHome}>Let's go</button>
        </InputDivStyled>
      )}
    </>
  );
};
export default UserInput;
