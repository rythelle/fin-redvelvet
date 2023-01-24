import React from "react";

import Title from "../Title";
import Account from "../Account";
import Statement from "../Statement";
import styled from "styled-components";

const Container = styled.div`
  background-color: ${({ theme }) => theme.background};
  min-height: 90vh;
  padding: 0px 15vw;
`;

const Contents = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: ${({ theme }) => theme.text};

  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

export const ContainerWrapper = () => {
  return (
    <Container>
      <Title>Olá Fulano!</Title>
      <Contents>
        <Account />
        <Statement />
      </Contents>
    </Container>
  );
};
