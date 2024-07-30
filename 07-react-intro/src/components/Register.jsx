import styled from "styled-components";

export const CustomDiv = styled.div`
  text-align: right;
  background-color: rgba(0, 255, 255, 0.1);
  border-radius: 7px;
  padding: 10px;
  margin: 10px;
`
export const CustomButton = styled.button`
  color: lightcyan;
  background-color: black;
  &:hover {
    color: black;
    background-color: lightcyan;
  }
`

const Register = () => {
  return (
    <CustomDiv>
      <h2>Registro...</h2>
      <CustomButton>A Registro</CustomButton>
      <hr />
    </CustomDiv>
  )
};

export default Register;