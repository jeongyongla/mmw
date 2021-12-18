import React from "react";
import styled from "styled-components";
import mark from './image/mark.png';
class Wallpaper extends React.Component {
  state = {
    query: ""
  };
  render() {
    return (
      <Container query={this.state.query}>
        <img src= {mark} alt="Logo" width={90.8*2} height={51.1*2} />
        <Input
          placeholder="테마를 입력하세요"
          onKeyPress={this.handleInputKeyPress}
        ></Input>
      </Container>
    );
  }

  handleInputKeyPress = event => {
    if (event.key === "Enter") {
      this.setState({
        query: event.target.value
      });
      event.target.value = "";
    }
  };
}

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: 
    linear-gradient(
      rgba(20, 20, 20, 0.5)100%,
      rgba(20, 20, 20, 1)
    ),
    url(https://source.unsplash.com/random/1920x1080?${props => props.query});
  background-size: cover;
`;

const Input = styled.input`
  position: absolute;
  top: 0;
  right: 0;
  width: 190px;
  height: 33px;
  padding: 3px;
  background: transparent;
  outline: none;
  border: none;
  font-size: 22px;
  color: white;
`;
/* const Image = styled.image`
  top: 0;
  left: 0;
  width: 190px;
  height: 33px;
  padding: 3px;
`; */
export default Wallpaper;