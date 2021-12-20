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
        <img src= {mark} alt="Logo" width={90.8*2} height={51.1*2} onClick={this.logoclick}/>
        <Button onClick={this.onlogoclick }></Button>
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
  
  onlogoclick = event => {
    alert("Dd");
     let url = 'http://localhost:3000/';
    // let url = 'http://www.naver.com';
      window.location.href=(url);
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

const Button = styled.button`
  position: absolute;
  /* transform: translate(0%, 0%); */
  top: 4px;
  right: 50%;
  width: 44px;
  height: 33px;
  /* padding: 3px; */
  /* background: transparent; */
  /* outline: none; */
  border: none;
  /* font-size: 30px;
  color: red; */
  /* background-color: gray; */
  /* src: mark; */
  src:mark;
 
`;
export default Wallpaper;