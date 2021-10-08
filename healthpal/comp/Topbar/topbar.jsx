import React from 'react'
import styled from 'styled-components';

const Cont = styled.div`
max-width:137px;
height:45px;
margin-top:25px;
display:flex;
flex-direction:row;
justify-content: center;
align-items: center;
`;

const Logo = styled.img`
height:40px;
margin-right: 10px;
visibility:${props => props.visibility};
`;

const AppName = styled.h1`
height:30px;
font-family: 'ABeeZee', sans-serif;
`;

const TopBar = ({
}) => {
  return <Cont>
    <Logo src="../logo.png" />
    <AppName> Healthpal</AppName>
  </Cont>
}

export default TopBar;