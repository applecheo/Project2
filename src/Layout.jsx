import React, { useEffect, useRef, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Navbar from "./components/Navbar";

const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: palevioletred;
  background: papayawhip;
  border: none;
  border-radius: 3px;
`;

const Layout = () => {
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
      <Navbar />
      <Outlet />
    </>
  );
};
export default Layout;
