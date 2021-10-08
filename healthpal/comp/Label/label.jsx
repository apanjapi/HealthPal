import styled from "styled-components";
import React from "react";

const CtrlCont = styled.div`
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  width: 200px;
  max-height: 40px;
  justify-content: center;
  margin: 10px 0;
`;
const Key = styled.div`
  background-color: #43bc7f;
  display: flex;
  width: 100px;
  height: 30px;
  color: #000000;
  border-radius: 5px 0px 0px 5px;
  align-items: center;
  justify-content: center;
`;
const Input = styled.input`
  type: text;
  justify-content: center;
  align-items: center;
  display: flex;
  width: 100px;
  height: 30px;
`;
const Label = ({ 
  placeholder = "Your full name",
  value = "Name",
  visibility = "flex"
  }) => {
  return (
    <CtrlCont>
      <Key>{value}</Key>
      <Input placeholder={placeholder}></Input>
    </CtrlCont>
  );
};

export default Label;
