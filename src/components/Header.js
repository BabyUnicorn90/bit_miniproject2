import React from "react";
import { withRouter } from "react-router-dom";
import styled from "styled-components";

const Header = styled.div`
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 65px;
  background-color:#232E22;
  box-shadow: 0px 1px 1px 1px #E2C458;
  z-index: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

const Title1 = styled.h1`
  display: flex;
  font-size: 20px;
  text-align: center;
  padding: 10px;
`;

const Title2 = styled.h3`
  display: flex;
  font-size: 15px;
  text-align: center;
`;

export default withRouter(({ location: { pathname } }) => (
  <Header>
    <Title1> BIT_Miniproject2 </Title1>
    <Title2> 김아진 </Title2>
  </Header>
));
