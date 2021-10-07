import styled from 'styled-components';
import React from 'react';
import Image from 'next/image';


const Container = styled.div`
display:flex;
flex-direction:row;
flex-grow:1;
width:350px;
height:80px;
justify-content:center;
background-color:#2C2C2C;
margin:40%;
`
const Info = styled.div`
display:flex;
width:80px;
height:70px;
margin:5px;
align-items:center;
justify-content:center;
`
const Record = styled.div`
display:flex;
width:80px;
height:70px;
align-items:center;
justify-content:center;
margin:10px;
`
const Track = styled.div`
display:flex;
width:80px;
height:70px;
margin:5px;
justify-content:center;
align-items:center;
`
const Profile = styled.div`
display:flex;
width:80px;
height:70px;
margin:10px;
justify-content:center;
align-items:center;
`
const Navbar = ({})=>{
  return<Container>
  <Info>
  <Image src={"/Info.png"} width={55} height={55} />
  </Info>
  <Record>
  <Image src={"/Record.png"} width={50} height={50}/>
  </Record>
  <Track>
  <Image src={"/Tracking.png"} width={60} height={60}/>
  </Track>
  <Profile>
  <Image src={"/Profile.png"} width={50} height={50}/>
  </Profile>
  </Container>
}

export default Navbar;