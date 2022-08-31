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
          <h4>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nulla
            justo, eleifend ut sem vitae, vehicula luctus mauris. Ut ac lacus ut
            ex convallis ornare. Aliquam interdum risus condimentum mauris
            tempor ullamcorper. Pellentesque habitant morbi tristique senectus
            et netus et malesuada fames ac turpis egestas. Etiam et purus nec mi
            vehicula convallis vitae sit amet orci. Maecenas fermentum, elit
            eget faucibus posuere, lorem eros malesuada erat, interdum semper
            odio quam quis ligula. Sed faucibus dapibus risus ut pellentesque.
            Fusce eu lectus non mauris sagittis semper non ac nisi. Cras
            interdum suscipit dui, eget lobortis libero vestibulum quis. In
            elementum non nibh sed imperdiet. Quisque in ullamcorper risus.
          </h4>
          <Input ref={userInput} placeholder="Enter Your Name!" />
          <button onClick={navigateToHome}>Let's go</button>
        </InputDivStyled>
      )}
    </>
  );
};
export default UserInput;
