import React from "react";
import styled from "styled-components";
import Wallpaper from "./wallpaper"
import Clock from "./clock";
import Search from "./search";
import Youtube from "./youtube";
import GoogleLoginBtn from "./login"
// import History from "../public/background";
import Test from "./test"
import Weather from "./weather";
// import Check from "./modulecontrol";
import Modal from "./modal";
import Todo from "./todo";
class App extends React.Component {
  render() { 
    let a =1;
    // MC.arguments.styled={visialiity }
    if(a==1){
       return (
      <Container>        
        {/* <Wallpaper></Wallpaper> */}
        <GoogleLoginBtn></GoogleLoginBtn>
        <Clock></Clock>
        <Search></Search>
        <Youtube></Youtube>
        {/* <History/> */}
        {/* <Check/> */}
        {/* <Modal/> */}
        <Todo/>
        {/* <Test/> */}
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