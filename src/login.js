import React, {useState } from "react";
import GoogleLogin from 'react-google-login';
import styled from "styled-components";
import axios from 'axios';
import Wallpaper from './wallpaper';
import MC from "./modulecontrol";
import $ from "jquery";
import Todo from "./todo";
const clientId = "230889010194-2225qvihcj6nqtn66mkoud8p2fnlqmmn.apps.googleusercontent.com";

export default function GoogleLoginBtn({}){
    const mi = {
        check:0,
        value1 : 0,   //0 none 1 choose
        value2 : 0,
        value3 : 1,
        value4 : 0,
        value5 : 0
    }
    const goo = {
        name : "",
        url : ""
    }
    const [name, setname] = useState("");
    const fname = (re) => setname(re);
    const [id, setid] = useState("");
    const fid = (re) => setid(re);
    const [miob, setch] = useState("");
    const fch = (re) => setch(re);
    const [goore, setgoo] = useState("");
    const fgoo = (re) => setgoo(re);
    const onSuccess = async(response) => {
        // const { googleId, profileObj : { email, name } } = response;
        // console.log(response)
        // console.log(response.googleID)
        // alert(response.yu.nv)
        ///////////////////////////////////////////////////////////////////////////
        fname("flower")
        mi.check=1
        fch(mi)
        fid(response.googleId);
        $('#goolog').hide();
        $('#aftercon').show();
        
        goo.name=response.yu.nf;
        goo.url=response.profileObj.imageUrl;
        fgoo(goo)
        // serlogin(response).then((axiresponse) => 
        //    {
        //        fname(axiresponse.wall) //value.wall
        //        mi.value1=axiresponse.value1//valu.모듈체크값
        //    }
        // );
        ///////////////////////////////////////////////////////////////////////////
       
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
                <Wallpaper id ={id} name={name}/> 
                <Logg id = {"goolog"}>
                <GoogleLogin
                    clientId={clientId}
                    responseType={"id_token"}
                    onSuccess={onSuccess}
                    onFailure={onFailure}
                    />
                    </Logg>
                    <Logg3 id={"aftercon"}hidden={true}><img id="im"width={30} height={30} padding={0} src={goore.url}/><Text>{goore.name}</Text></Logg3>
                <Logg2 id={"mccon"}hidden={true}><MC id ={id} mi ={miob}/></Logg2>
                <Logg4 id={"todocon"}hidden={true}><Todo  id ={id}/></Logg4>
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
const Logg3 = styled.div`
   position: absolute;
  top: 0;
  right: 5px;
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
  right: 7%;
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

const Logg4 = styled.div`
   position: absolute;
  top: 40%;
  right: 27%;
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

const Text = styled.text`
   font-size: 24px;
  font-weight: 600;
`;