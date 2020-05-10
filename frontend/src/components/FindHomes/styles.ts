import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  height: 115px;
  width: 1100px;
  margin-left: 150px;
  margin-top: 330px;
  padding: 0 30px;
  background: #FFF;
  display: flex;
  -webkit-box-shadow: 0px 15px 24px -8px rgba(0,0,0,0.9);
  -moz-box-shadow: 0px 15px 24px -8px rgba(0,0,0,0.9);
  box-shadow: 0px 15px 24px -8px rgba(0,0,0,0.9);

  div > h3 {
    margin-top: 15px;
    margin-left: 10px;
    font-size: 15px;
    font-size: 15px;
    color: #333;
  }

  div > button:nth-child(1n) {
    background-color: #457b9d;
    margin-top: 50px;
    margin-left: -10px;
    height: 40px;
    border: none;
    padding: 10px;
    border-radius: 20%;
    color: #FFF;
  }

  div > button:nth-child(2n) {
    background-color: #457b9d;
    margin-top: 50px;
    margin-left: 10px;
    height: 40px;
    border: none;
    padding: 10px;
    border-radius: 20%;
    color: #FFF;
  }

  div > button:nth-child(3n) {
    background-color: #457b9d;
    margin-top: 50px;
    margin-left: 10px;
    height: 40px;
    border: none;
    padding: 10px;
    border-radius: 20%;
    color: #FFF;
  }

  div > button:hover {
    background-color: #1d3557;
  }

  div:nth-child(2n) > h3 { 
    margin-top: 20px;
    margin-left: 60px;
    font-size: 15px;
    color: #333;
  }


  div:nth-child(3n) {
    margin-left: 50px;
    margin-right: -120px;
    width: 480px;

    h3 { 
      margin-top: 20px;
      margin-left: 20px;
      font-size: 15px;
      color: #333;
    }

    input {
      border: 2px solid #9b9c9b;
      margin-top: 50px;
      margin-left: 20px;
      height: 35px;
      width: 300px;
      border-radius: 4px;
      padding: 5px 10px;
      color: #fff;
      &::placeholder {
        color: #333;
        opacity: 0.3;
    }

    button:nth-child(4n) { 
      background-color: #457b9d;
      width: 100px;
      margin-top: 50px;
      margin-left: 20px;
      height: 40px;
      border: none;
      padding: 10px;
      border-radius: 20%;
      color: #333;
      &::button:hover {
        background-color: #1d3557;
      }
    }
  }

`;

export const Select = styled.select`
  margin-top: 50px;
  margin-left: 60px;
  height: 35px;
  width: 250px;
  font-size: 15px;
  font-weight: bold;
  color: #9b9c9b;
  border-color: #9b9c9b;
  border-radius: 10%;
`;


export const Input = styled.input`

`;
