import React from "react";
import styled from "styled-components";
import Wallpaper from "./wallpaper"
import Clock from "./clockweather";
class App extends React.Component {
  render() {
    return (
      <Container>
        <Wallpaper></Wallpaper>
        <Clock></Clock>
      </Container>
    );
  }
}

const Container = styled.div``;

export default App;