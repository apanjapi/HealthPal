import React from 'react'
import styled from 'styled-components';

const Cont = styled.div`
max-width:137px;
height:45px;
display:flex;
flex-direction:row;
`;

const Logo = styled.img`
height:40px;
position:absolute;
left:42vw;
top:38px;
visibility:${props=>props.visibility};
`;

const AppName = styled.h1`
width:40px;
height:30px;
left:45vw;
position:absolute;
top:18px;
font-family: 'ABeeZee', sans-serif;
`;

const TopBar= ({ 
})=>{
  return<Cont>
<Logo src="../logo.png" />
<AppName> Healthpal</AppName>
  </Cont>
}
   
  export default TopBar;