import React from 'react';
import GoogleLogin from 'react-google-login';
import styled from "styled-components";
import axios from 'axios';
const clientId = "230889010194-2225qvihcj6nqtn66mkoud8p2fnlqmmn.apps.googleusercontent.com";

export default function GoogleLoginBtn({}){
    // const data = { 
    //     id: "", 
    //     name: "", 
    //     email: "",
    //     imageUrl: "", 
    //     token: ""
    // };
    const onSuccess = async(response) => {
        const { googleId, profileObj : { email, name } } = response;
        console.log(response)
        // alert(response.yu.nf)
        // await onGoogleLogin (
        //   구글 로그인 성공시 서버에 전달할 데이터
        //   const response = await axios.get(youurl);
        // );
        async function serlogin() {
            const response = axios.post('http://localhost:8080/api/v1/user', {params: {  
                id: response.googleId, 
                name: response.yu.nf, 
                email: response.yu.nv,
                imageUrl: response.profileObj.imageUrl, 
                token: response.tokenId}});
            return response;
          } 
            //   serlogin().then((value) => 
            //   {
            //   const fcity = () => setcity(value.data.name)
            //   const ficon = () => setIcon("http://openweathermap.org/img/w/" + value.data.weather[0].icon + ".png")
            //   const ftemp = () => setTemp(parseFloat(parseFloat(value.data.main.temp) - parseFloat("273.15")).toFixed(1)+"℃");
            //   fcity()
            //   ficon()
            //   ftemp()
            // }
    }

    const onFailure = (error) => {
        console.log(error);
    }

    return(
        <div>
            <Container>
            <GoogleLogin
                clientId={clientId}
                responseType={"id_token"}
                onSuccess={onSuccess}
                onFailure={onFailure}
                />
            </Container>
        </div>
    )
}

const Container = styled.div`
   position: absolute;
  top: 0;
  right: 0;
  /* width: 500px;
  height: 200px; */
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