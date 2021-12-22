// import React, { useState } from "react";
// // import reactTriggerChange from "react-trigger-change" 
// const Check = () => {
//   const formData = [
//     { id: 1, name: "딸기" },
//     { id: 2, name: "바나나" },
//     { id: 3, name: "피자" },
//     { id: 4, name: "불고기" },
//     { id: 5, name: "김치" },
//     { id: 6, name: "볶음밥" },
//     { id: 7, name: "쌀국수" },
//     { id: 8, name: "육개장" },
//     { id: 9, name: "커피" },
//   ];

//   const [isChecked, setIsChecked] = useState(false); //체크 여부
//   const [checkedItems, setCheckedItems] = useState(new Set());//체크된 요소들

//   const checkHandler = ({ target }) => {
//     console.log(target);
//     setIsChecked(!isChecked);
//     checkedItemHandler(target.parentNode, target.value, target.checked);
//   };

//   const checkedItemHandler = (box, id, isChecked) => {
//     if (isChecked) { //체크 되었을때
//       checkedItems.add(id); //체크시 삽입
//       setCheckedItems(checkedItems); //체크 요소 넣어주기
//       box.style.backgroundColor = "#F6CB44"; //스타일 변경
//     } else if (!isChecked && checkedItems.has(id)) { //체크가 안되었고, id가 있을때(클릭 2번시)
//       checkedItems.delete(id); //체크 두번시 삭제
//       setCheckedItems(checkedItems);
//       box.style.backgroundColor = "#fff";
//     }
//     // console.log(checkedItems);
//     return checkedItems;
//   };
//   let node = document.getElementsByName("딸기")[0];
//   // reactTriggerChange(node);
//   return (
//     <div className="contStyle">
//       {formData.map((item) => (
//         <label key={item.id} className="innerBox">
//           <input
//             name={item.name}
//             type="checkbox"
//             value={item.name}
//             onChange={(e) => checkHandler(e)}
//           />
//           <div>{item.name}</div>
//         </label>
//       ))}
//     </div>
//   );
// };
// export default Check;
import Toggle from 'react-styled-toggle'
import React from "react";
import styled from "styled-components";
import $ from "jquery";
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
    { id: 1, name: "model1" },
    { id: 2, name: "model2" },
    { id: 3, name: "model3" },
    { id: 4, name: "model4" },
    { id: 5, name: "model5" },
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
    let tmp = (event.target.value)
    if(tmp ==1){if(this.state.value1===1){this.setState({value1: 0})}else{this.setState({value1: 1})} }
    if(tmp ==2){if(this.state.value2===1){this.setState({value2: 0})}else{this.setState({value1: 2})} }
    if(tmp ==3){if(this.state.value3===1){this.setState({value3: 0})}else{this.setState({value1: 3})} }
    if(tmp ==4){if(this.state.value4===1){this.setState({value4: 0})}else{this.setState({value1: 4})} }
    if(tmp ==5){if(this.state.value5===1){this.setState({value5: 0})}else{this.setState({value1: 5})} }
      
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
