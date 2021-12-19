import React from "react";
import styled from "styled-components";
import Wallpaper from "./wallpaper"
import Clock from "./clock";
import Search from "./search";
import Youtube from "./youtube";
import GoogleLoginBtn from "./login"
// import Weather from "./weather";
class App extends React.Component {
  render() {
    return (
      <Container>
        <Wallpaper></Wallpaper>
        <Clock></Clock>
        {/* <Weather/> */}
        <Search></Search>
        <Youtube></Youtube>
        <GoogleLoginBtn></GoogleLoginBtn>
      </Container>
    );
  }
}

const Container = styled.div``;

export default App;