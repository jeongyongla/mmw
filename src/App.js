import React from "react";
import styled from "styled-components";
import Wallpaper from "./wallpaper"
import Clock from "./clock";
import Search from "./search";
import Youtube from "./youtube";
class App extends React.Component {
  render() {
    return (
      <Container>
        <Wallpaper></Wallpaper>
        <Clock></Clock>
        <Search></Search>
        <Youtube></Youtube>
      </Container>
    );
  }
}

const Container = styled.div``;

export default App;