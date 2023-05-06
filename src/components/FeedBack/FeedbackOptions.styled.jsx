import styled from '@emotion/styled'


export const ButtonsList = styled.ul`
  display: flex;
  gap: 20px;
  align-items:center;
  justify-content:center;
`

export const Button = styled.button`
  padding: 5px;
  background-color: #f5f254;
  font-size: 10px;
  border-radius: 4px;
  color: black;
  font-weight: bold;
  &:hover {
    color: white;
  }
`