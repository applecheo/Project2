import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "./styles";

const UserInput = () => {
  const [showInput, setShowInput] = useState(true);
  const [name, setName] = useState("");
  const userInput = useRef();
  let navigate = useNavigate();
  const navigateToHome = () => {
    navigate("/home");
    setShowInput(false);
  };
  return (
    <>
      {showInput === true && (
        <div>
          <Input ref={userInput} placeholder="Enter Your Name!" />
          <button onClick={navigateToHome}>Let's go</button>
        </div>
      )}
    </>
  );
};
export default UserInput;
