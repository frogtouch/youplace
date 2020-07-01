import styled from 'styled-components'

export const Container = styled.div`
  height: 5vh;
  width: 100px;
  margin-left: 30px;
  margin-top: 20px;
  position: absolute;
  background: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.text};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;
`