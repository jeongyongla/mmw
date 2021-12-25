import React, {useState } from "react";
import GoogleLogin from 'react-google-login';
import styled from "styled-components";
import axios from 'axios';
import Wallpaper from './wallpaper';
import MC from "./modulecontrol"
const clientId = "230889010194-2225qvihcj6nqtn66mkoud8p2fnlqmmn.apps.googleusercontent.com";

export default function GoogleLoginBtn({}){
    const mi = {
        value1 : 1,   //0 none 1 choose
        value2 : 1,
        value3 : 1,
        value4 : 1,
        value5 : 1
    }
    const [name, setname] = useState("");
    const fname = (re) => setname(re);
 
    const onSuccess = async(response) => {
        // const { googleId, profileObj : { email, name } } = response;
        // console.log(response)
        // console.log(response.googleID)
        // alert(response.yu.nv)
        ///////////////////////////////////////////////////////////////////////////
        
        serlogin(response).then((axiresponse) => 
           {
               fname(axiresponse.wall) //value.wall
               mi.value1=axiresponse.value1//valu.모듈체크값
           }
        );
        ///////////////////////////////////////////////////////////////////////////
        // alert(name)
        
    }
    
    // onSuccess().then((value) => 
    async function serlogin(res) {
        const data = {  
            id: res.googleId, 
            name: res.yu.nf, 
            email: res.yu.nv,
            imageUrl: res.profileObj.imageUrl, 
            token: res.tokenId}
        let sendata = JSON.stringify(data)
        // alert(res.googleId);
        // const response = axios.post('http://localhost:8080/api/v1/user', {
        //     });
        const response = axios.post('http://localhost:8080/api/v1/user',sendata, {
            headers: {
                'Content-Type': 'application/json'
            }
              })    
            // alert(res.yu.nv)
        return response;
      }

    // );
    const onFailure = (error) => {
        console.log(error);
    }

    return(
        <div>
            <Container>
                <Wallpaper name={name}/>
                <Logg>
                <GoogleLogin
                    clientId={clientId}
                    responseType={"id_token"}
                    onSuccess={onSuccess}
                    onFailure={onFailure}
                    /></Logg>
                <Logg2><MC mi ={mi}/></Logg2>
                </Container>
        </div>
    )
}

const Logg = styled.div`
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

const Logg2 = styled.div`
   position: absolute;
  top: 20%;
  left: 30%;
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
const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%; 
`;