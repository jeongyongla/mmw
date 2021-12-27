import React from "react";
import styled from "styled-components";
import axios from 'axios';
class Todo extends React.Component {
    
    state = {
        todoList: [],
        cnt:0
      };
  render() { 
    // console.log("rend");
    // console.log(this.state.todoList);
    if(this.state.cnt==0){
      if(this.props.id!==""){
      this.setState({todoList:this.props.list,cnt:1})
      }
    }
    // if(this.state.cnt==0){
    // this.setState({todoList:["111","222"],cnt:1})
    // }
    // console.log(this.todoList)
    return (
      <Container>
        <Input placeholder="오늘 할 일" onKeyPress={this.handleInputKeyPress}></Input>
        {this.state.todoList.map(todo => (
      <Text key={todo} name={todo} onClick={(e) => this.handleClickRemove(e)}>{todo}</Text>
        ))}
      </Container>
    );
  }
  
  handleInputKeyPress = event => {
    const {
      target: { value }
    } = event;
    if (event.key === "Enter") {
    //   console.log(value)
     if(value!==""){
      this.setState(state => ({ todoList: [...state.todoList, value] }));
      event.target.value = "";
     }
     const data = {  
      id: this.props.id, 
      content: value, 
      on : 0}
      let sendata = JSON.stringify(data)
      axios.post('@@@@@@@@@@@@@@@@@@',sendata, {
            headers: {
                'Content-Type': 'application/json'
            }
              })   
    }
  };
  handleClickRemove = index => {
    if (window.confirm("목록에서 지우시겠습니까?")) {
        // alert(index.target.values)
        // console.log(index.target.innerText)
        // console.log(this.state.todoList.length)
        for(let i = 0; i < this.state.todoList.length; i++) {
          if(this.state.todoList[i] === index.target.innerText)  {
            this.state.todoList.splice(i, 1);
            i--;
            break;
          }
        }
        this.setState(state => ({todoList:this.state.todoList}));
        // this.setState(state => ({todoList:this.state.todoList.filter((element) => element !== index.target.innerText)}));
        const data = {  
          id: this.props.id, 
          content: index.target.innerText, 
          on : 1}
          let sendata = JSON.stringify(data)
          axios.post('@@@@@@@@@@@@@@@@@@',sendata, {
                headers: {
                    'Content-Type': 'application/json'
                }
                  })   
    }
  };
}


const Container = styled.div`
  position: absolute;
  /* transform: translate(-50%, -50%); */
  /* right: 0%; */
  /* top: 50%; */
  /* width: 160.0px;
  height: 90.0px; */
  width: 340.0px;
  height: 200.0px;
  color: white;
  background: 
      rgba(255, 255, 255, 0.5)
    ;  
  margin-top: 40px;
  font-size: 40px;
  text-align: center;
  display: 'flex';
  overflow-y: auto;
  /* flex-direction: 'row'; */
  /* visibility: hidden; */
  word-break: break-all;
`;

const Input = styled.input`
  width: 300px;
  height: 33px;
  padding: 7px;
  outline: none;
  border: 1px solid silver;
  border-radius: 11px;
  background: transparent;
  font-size: 22px;
  color: black;
  font-weight: 600;
`;
const Text = styled.text`
  width: 300px;
  height: 33px;
  padding: 7px;
  outline: none;
  /* border: 1px solid silver; */
  border-radius: 11px;
  background: transparent;
  font-size: 22px;
  color: black;  
  font-weight: 600;
`;

export default Todo;