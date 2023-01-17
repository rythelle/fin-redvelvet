import React from "react";
import styled from "styled-components";
import bank_logo from "../../assets/images/bank_logo.svg";
import { primaryColor } from "../UI/variables";

const StyleHeader = styled.nav`
  background-color: ${primaryColor};
  display: flex;
  justify-content: space-between;
  padding: 0 15vw;
  height: 10vh;
  align-items: center;
`;

const Logo = styled.img`
  height: 50px;
  width: 50px;
`;

const BtnHeader = styled.a`
  text-align: center;
  border-radius: 3px;
  padding: 5px 20px;
  margin: 0 10px;
  font-weight: 600;
  border: 2px solid white;

  color: ${(props) => (props.primary ? primaryColor : "white")};
  background: ${(props) => (props.primary ? "white" : primaryColor)};
`;

const Header = () => {
  return (
    <StyleHeader>
      <Logo src={bank_logo} alt="Logo Smart Bank" />
      <div>
        <BtnHeader primary href="https://google.com">
          Ajuda
        </BtnHeader>
        <BtnHeader href="https://google.com">Sair</BtnHeader>
      </div>
    </StyleHeader>
  );
};

export default Header;
