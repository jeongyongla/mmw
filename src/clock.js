import React, {useState} from 'react';
import styled from "styled-components";
import axios from 'axios';

import Weather from "./weather";
class Clock extends React.Component {
  
    state = {
        date: new Date(),
        url : 'https://api.openweathermap.org/data/2.5/weather?lat=',
        cnt : 0,
        latitude : 0,
        longitude : 0,
        city:''
      }
    render() {
      const { date } = this.state;

      // let result;
      // if(this.state.cnt===0){
      //   this.setState({cnt:1});
      //   navigator.geolocation.getCurrentPosition(aaa);
      //   function aaa (pos) {
      //     // const [number, setCity] = useState(0);
      //     console.log(pos.coords.longitude);
      //     let url = 'https://api.openweathermap.org/data/2.5/weather?lat=';
      //     url = url + pos.coords.latitude+'&lon='+pos.coords.longitude+'&appid=15525bfaad597c7c04d48a441d0f3145'
          
      //     async function apiload() {
      //       const response = await axios.get(url);
      //       return response;
      //     } 
      //     // if(this.state.cnt===0){
      //         apiload().then((value) => 
      //         {
      //         result = value.data.name
      //         // console.log(result)
      //         // const counter = () => setCity(result);
      //         // counter();
      //         // return result;
      //         // const counter = () => setCity(result);
      //       }
              

      // //        main : response.weather.main,
      // //      icon: response.weather.icon,
      // //      city:response.name
      //         )
              
      //     // }
      //   }
      // }


        return (
        <Container>
           <CurTime>
            {date.getHours() < 10 ? "0" + date.getHours() : date.getHours()}
            {/* &nbsp;시&nbsp; */}
            &nbsp;:&nbsp;
            {date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()}
            {/* &nbsp;분&nbsp; */}
            &nbsp;:&nbsp;
            {date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds()}
            {/* &nbsp;초&nbsp; */}
            {/* {result} */}
            </CurTime>
            <CurDate>
            {date.getFullYear()}&nbsp;/&nbsp;
            {date.getMonth() + 1}&nbsp;/&nbsp;
            {date.getDate()}&nbsp;&nbsp;
            {
              date.getDay() === 0
                ? "Sun"
                : date.getDay() === 1
                ? "Mon"
                : date.getDay() === 2
                ? "Tue"
                : date.getDay() === 3
                ? "Wed"
                : date.getDay() === 4
                ? "Thu"
                : date.getDay() === 5
                ? "Fri"
                : "Sat"}
            </CurDate>
            <Weather/>
        </Container>
        );
    }
    getDate = () => {
        this.setState({
          date: new Date()
        });
      };

      
      // weaapi = async() => {
      //   const response = await axios.get(this.state.url);
      //   console.log(response); 
      //   this.setState({
      //      main : response.weather.main,
      //      icon: response.weather.icon,
      //      city:response.name
      //     });
      // };  
      // getweather = () => {
      //   this.setState({
      //     url :  'https://api.openweathermap.org/data/2.5/weather?lat='
      //   });
        

      //   console.log("@@");
      //   const latitude ;
      //   const longitude;
      //   navigator.geolocation.getCurrentPosition(function(pos) {
         
      //      latitude = pos.coords.latitude;
      //      longitude = pos.coords.longitude;
      //     // alert("현재 위치는 : " + latitude + ", "+ longitude);
       
      //   });
      //   this.setState({
      //       url : this.state.url+latitude+'&lon='+longitude+'&appid=15525bfaad597c7c04d48a441d0f3145' 
      //     });
      //     console.log(this.state.url);
      //     this.weaapi();
      // };
      
      componentDidMount() {
        // this.oneMinuteCall = setInterval(() => this.getDate(), 60000);
        this.oneSecondCall = setInterval(() => this.getDate(), 1000);
        // this.weaCall = setInterval(() => this.getweather(),  5000);
        }
      componentWillUnmount() {
        // clearInterval(this.oneMinuteCall);
        clearInterval(this.oneSecondCall);
        // clearInterval(this.weaCall);
      }
}

const Container = styled.div`
  position: absolute;
  transform: translate(-50%, -50%);
  left: 50%;
  top: 30%;
  width: 500px;
  height: 200px;
  color: black;
  /* background-color: 
  rgba(20, 20, 20, 0.1); */
    /* linear-gradient(
      rgba(20, 20, 20, 0.1),
      rgba(20, 20, 20, 0)
    ),white; */
  margin-top: 40px;
  font-size: 40px;
  text-align: center;
`;

const CurDate = styled.div`
  position: relative;
  transform: translate(-50%, 0%);
  left: 50%;
  width: 60%;
  background-color: 
  rgba(255, 255, 255, 0.5); 
  font-size: 24px;
  font-weight: 600;
`;

// const CurDay = styled.div`
//   position: relative;
//   transform: translate(-50%, 0%);
//   left: 50%;
//   width: 40%;
//   background-color: 
//   rgba(255, 255, 255, 0.5);   
//   font-weight: 600;
// `;

const CurTime = styled.div`
  position: relative;
  transform: translate(-50%, 0%);
  left: 50%;
  width: 60%;
  background-color: 
  rgba(255, 255, 255, 0.5); 
  font-size: 55px;
  font-weight: 600;
`;

export default Clock;