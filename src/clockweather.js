import React from "react";
import styled from "styled-components";

class Clock extends React.Component {
    state = {
        date: new Date()
      }
    render() {
        const { date } = this.state;
        return (
        <Container>
            <CurDate>
            {date.getFullYear()}&nbsp;/&nbsp;
            {date.getMonth() + 1}&nbsp;/&nbsp;
            {date.getDate()}
            </CurDate>
            <CurDay>
            {date.getDay() === 0
                ? "Sunday"
                : date.getDay() === 1
                ? "Monday"
                : date.getDay() === 2
                ? "Tuesday"
                : date.getDay() === 3
                ? "wednesday"
                : date.getDay() === 4
                ? "Thursday"
                : date.getDay() === 5
                ? "Friday"
                : "Saturday"}
            </CurDay>
            <CurTime>
            {date.getHours() < 10 ? "0" + date.getHours() : date.getHours()}
            &nbsp;시&nbsp;
            {date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()}
            &nbsp;분&nbsp;
            {date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds()}
            &nbsp;초&nbsp;
            </CurTime>
        </Container>
        );
    }
    getDate = () => {
        this.setState({
          date: new Date()
        });
      };
      componentDidMount() {
        // this.oneMinuteCall = setInterval(() => this.getDate(), 6000);
        this.oneSecondCall = setInterval(() => this.getDate(), 1000);
     
        }
      componentWillUnmount() {
        // clearInterval(this.oneMinuteCall);
        clearInterval(this.oneSecondCall);
      }
}

const Container = styled.div`
  position: absolute;
  transform: translate(-50%, -50%);
  left: 50%;
  top: 20%;
  width: 500px;
  height: 200px;
  color: white;
  background: 
    linear-gradient(
      rgba(20, 20, 20, 0.5)100%,
      rgba(20, 20, 20, 1)
    ),
    white;
  margin-top: 40px;
  font-size: 40px;
  text-align: center;
`;

const CurDate = styled.div`
  font-size: 24px;
`;

const CurDay = styled.div`
  font-style: italic;
`;

const CurTime = styled.div`
  font-size: 55px;
  font-weight: 600;
`;

export default Clock;