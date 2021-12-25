import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
// export default connect()();
class Todo extends React.Component {
    
    state = {
        todoList: []
      };
  render() { 
    // console.log("rend");
    // console.log(this.state.todoList);
    return (
      <Container>
        <Input placeholder="오늘 할 일" onKeyPress={this.handleInputKeyPress}></Input>
        {this.state.todoList.map(todo => (
      <text name={todo} values={todo} onClick={(e) => this.handleClickRemove(e)}>{todo}</text>
        ))}
       <Text></Text>
      </Container>
    );
  }
  
  handleInputKeyPress = event => {
    const {
      target: { value }
    } = event;
    if (event.key === "Enter") {
    //   console.log(value)
      this.setState(state => ({ todoList: [...state.todoList, value] }));
      event.target.value = "";
    }
  };
  handleClickRemove = index => {
    if (window.confirm("목록에서 지우시겠습니까?")) {
        alert(index.target.values)
        console.log(index.target.values)
        
        // console.log(this.state.todoList[index])
        // this.setState(state => ({todoList: [ ...state.todoList.slice(0, index),...state.todoList.slice(index + 1)] }));
        // console.log("remo");
        console.log(this.state.todoList);
    }
  };
}

// const Container = styled.div`
//   margin-top: 44px;
//   text-align: center;
// `;

const Container = styled.div`
  position: absolute;
  /* transform: translate(-50%, -50%); */
  right: 5%;
  top: 50%;
  /* width: 160.0px;
  height: 90.0px; */
  /* width: 800.0px; */
  height: 200.0px;
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
  display: 'flex';
  flex-direction: 'row';
  /* visibility: hidden; */
`;

const Input = styled.input`
  width: 80%;
  height: 33px;
  padding: 7px;
  outline: none;
  border: 1px solid silver;
  border-radius: 11px;
  background: transparent;
  font-size: 22px;
  color: white;
`;
const Text = styled.text`
  font-size: 22px;
`;

export default Todo;