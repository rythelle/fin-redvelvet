import React from "react";

import Title from "../Title";
import Account from "../Account";
import styled from "styled-components";

const Container = styled.div`
  background-color: #f1f1f1;
  min-height: 90vh;
  padding: 0px 15vw;
`;

const Contents = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

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
      </Contents>
    </Container>
  );
};
