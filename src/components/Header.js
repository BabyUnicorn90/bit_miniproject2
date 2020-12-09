import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";

const Header = styled.div`
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  padding: 10px 10px;
  background-color: rgba(20, 20, 20, 0.8);
  box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.8);
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
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
