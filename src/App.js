import React from "react";
import styled from "styled-components";
import Wallpaper from "./wallpaper"
import Clock from "./clock";
import Search from "./search";
import Youtube from "./youtube";
import GoogleLoginBtn from "./login"
import Weather from "./weather";
// import Check from "./modulecontrol";
import Modal from "./modal";
class App extends React.Component {
  render() { 
    let a =1;
    // MC.arguments.styled={visialiity }
    if(a==1){
       return (
      <Container>
        <Wallpaper></Wallpaper>
        <Clock></Clock>
        <Search></Search>
        <Youtube></Youtube>
        <GoogleLoginBtn></GoogleLoginBtn>
        {/* <Check/> */}
        <Modal/>

      </Container>
    );
    }
    else{
      return(<Container>
      </Container>);
    }

   
  }
}
const Container = styled.div``;

export default App;