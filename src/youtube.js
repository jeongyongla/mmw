import React  from "react";
import styled from "styled-components";
import ReactPlayer from 'react-player';
import axios from 'axios';
let youurl = 'https://www.googleapis.com/youtube/v3/videos?key=AIzaSyAgcQ3eXZnV8T36YFRUEhyPnA6_wmn2W28&chart=mostPopular&regionCode=KR';



class Youtube extends React.Component {
  state = {
    url : 'https://www.youtube.com/watch?v=',
    url1 : '',
    url2 : '',
    cnt : 0
  }; 

  render() {
    
    async function apiload() {
      const response = await axios.get(youurl);
      return response;
    } 
    if(this.state.cnt===0){
        apiload().then((value) => 
        this.setState({
          url1: this.state.url + value.data.items[0].id,
          url2: this.state.url + value.data.items[1].id,
          cnt : 1
        })
        )
    }
  
    return (
      
      <Container>
            <ReactPlayer
             height = {180.0} width={320} muted={true} 
              url={this.state.url1} playing controls/>
            <ReactPlayer
            height = {180.0} width={320} muted={true}
            url={this.state.url2} playing controls/>
      
        </Container>
        
    );
  }

  
}


const Container = styled.div`
  position: absolute;
  /* transform: translate(-50%, -50%); */
  left: 5%;
  top: 50%;
  /* width: 160.0px;
  height: 90.0px; */
  width: 300.0px;
  height: 100.0px;
  color: white;
  background: 
    linear-gradient(
      rgba(20, 20, 20, 0.1)100%,
      rgba(20, 20, 20, 1)
    ),
    yellow;
  margin-top: 40px;
  font-size: 40px;
  text-align: center;
  flex-direction: 'row';
`;



export default Youtube;