import styled from 'styled-components';

export const Container = styled.div`
  height: 80px;
  margin-left: 0px;
  padding: 0 30px;
  background: #FFF;
  color: #FFF;
  display: flex;
  -webkit-box-shadow: 0px 15px 24px -8px rgba(0,0,0,0.9);
  -moz-box-shadow: 0px 15px 24px -8px rgba(0,0,0,0.9);
  box-shadow: 0px 15px 24px -8px rgba(0,0,0,0.9);
  
  h1 {
    margin-top: 25px;
    margin-left: 35px;
    color: #333;
  }

  h3 {
    margin-top: 30px;
    margin-left: 500px;
    color: #333;
  }

  h3:nth-child(1n) {
    margin-top: 30px;
    margin-left: 880px;
    font-size: 15px;
    color: #333;
  }

  h3:nth-child(2n) {
    margin-top: 30px;
    margin-left: 1020px;
    font-size: 15px;
    color: #333;
  }

  h3:nth-child(3n) {
    margin-top: 30px;
    margin-left: 1150px;
    font-size: 15px;
    color: #333;
  }

  section {
    justify-content: flex-start;
    margin-top: 10px;
    margin-left: 5px;
  }

  div {
    justify-content: flex-start;
    margin-top: 30px;
    margin-left: 20px;
    color: #000;
  }
`;