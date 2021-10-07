import styled from "styled-components";
import React from "react";

const CtrlCont = styled.div`
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  width: 200px;
  max-height: 30px;
  justify-content: center;
  margin: 10px;
`;
const Key = styled.div`
  background-color: #43bc7f;
  display: flex;
  width: 100px;
  color: #000000;
  border-radius: 5px 0px 0px 5px;
  align-items: center;
  justify-content: center;
`;
const Input = styled.input`
  type: text;
  width: 100px;
`;
const Label = ({ placeholder = "Your full name", value = "Name" }) => {
  return (
    <CtrlCont>
      <Key>{value}</Key>
      <Input placeholder={placeholder}></Input>
    </CtrlCont>
  );
};

export default Label;
