import styled from 'styled-components';

export const Container = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,500&display=swap');
  position: relative;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;

  
  img {
    position: absolute;
    width: 100%;
    height: 300px;
    border-radius: 2px;
    margin-top: 80px;
    margin-left: 0px;
  }

  h3 {
    position: absolute;
    color: #FFF;
    margin-top: 120px;
    margin-left: 100px;
    font-size: 20px;
    font-weight: bold;
  }
`;


export const Content = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);


  form {
    display: flex;
    flex-direction: column;
  }
`;

export const Button = styled.button`
  margin-top: 20px;
  border: none;
  min-width: 220px;
  padding: 10px;
  border-radius: 6px;
  background-color: rgba(17, 17, 17, 1);
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 0.2s ease-in-out;
  span {
    margin-left: 10px;
    color: #fff;
    font-size: 14px;
  }
  &:hover {
    background-color: rgba(17, 17, 17, 0.8);
  }
`;

export const Input = styled.input`
  background: transparent;
  border: 1px solid #eee;
  border-radius: 4px;
  padding: 5px 10px;
  color: #fff;
  &::placeholder {
    color: #fff;
    opacity: 0.3;
  }
`;