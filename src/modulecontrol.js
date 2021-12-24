import Toggle from 'react-styled-toggle'
import React from "react";
import styled from "styled-components";
import $ from "jquery";
import axios from 'axios';
class MC extends React.Component {
  
  state = {
    value1 : 1,   //0 none 1 choose
    value2 : 1,
    value3 : 0,
    value4 : 0,
    value5 : 0,
    cnt :0
  }; 
  render() {
    // alert(this.state.value1)
   if(this.state.cnt===0){
    if(this.state.value1===1){
      $(document).ready(function(){
      $('#1').trigger('click');
      });
    }
    if(this.state.value2===1){
      $(document).ready(function(){
      $('#2').trigger('click');
      });
    }
    if(this.state.value3===1){
      $(document).ready(function(){
      $('#3').trigger('click');
      });
    }
    if(this.state.value4===1){
      $(document).ready(function(){
      $('#4').trigger('click');
      });
    }
    if(this.state.value5===1){
      $(document).ready(function(){
      $('#5').trigger('click');
      });
    }
      this.setState({cnt:1})
   }
   
  
  // console.log(document.getElementsByClassName("wea")[0])
  let formData = [
    { id: 1, name: "시계/날씨" },
    { id: 2, name: "검색창" },
    { id: 3, name: "유튜브" },
    { id: 4, name: "메모" },
    { id: 5, name: "사이트" },
  ];
  // if(this.state.value1===1){
    
    return (
      <Container>
         {formData.map((item) => (
        <label id={item.id} key={item.id} className="innerBox"value={item.name}>
             <Toggle
                labelLeft={item.name}
                value={item.id}
                name={item.name}
                type="checkbox"
                onChange={(e) => this.handler1(e)}
              />
           {/* <div>{item.name}</div> */}
        </label>
      ))}
        {/* <Toggle checked name='wea'onChange={this.handler1}labelLeft='날씨'/><Toggle/><Toggle/> */}
        {/* <input type="checkbox" class="qwe" value=""/> */}
      </Container>
    );
  
  }
 
  
  handler1 = event => { 
    function posting(pid,pvalue){
    axios.post('http://@@@@@@@@@@@@@@@@@@@@', {params: {  
      id: pid, 
      value: pvalue}});
   }
    let tmp = (event.target.value)
    if(tmp ===1){if(this.state.value1===1){this.setState({value1: 0});posting(tmp,0)}else{this.setState({value1: 1});posting(tmp,1)}}
    if(tmp ===2){if(this.state.value2===1){this.setState({value2: 0});posting(tmp,0)}else{this.setState({value1: 2});posting(tmp,1)}}
    if(tmp ===3){if(this.state.value3===1){this.setState({value3: 0});posting(tmp,0)}else{this.setState({value1: 3});posting(tmp,1)}}
    if(tmp ===4){if(this.state.value4===1){this.setState({value4: 0});posting(tmp,0)}else{this.setState({value1: 4});posting(tmp,1)}}
    if(tmp ===5){if(this.state.value5===1){this.setState({value5: 0});posting(tmp,0)}else{this.setState({value1: 5});posting(tmp,1)}};
  };
}


const Container = styled.div`
 
 position: absolute;
  transform: translate(-80%, -50%);
  left: 0%;
  top: 20%;
  width: 400px;
  height: 200px;
  color: black;
  background-color: 
  rgba(255, 255, 255, 0.5); 
  margin-top: 40px;
  font-size: 4px;
  text-align: center;
  /* visibility:hidden; */
`;

export default MC;
