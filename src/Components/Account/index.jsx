import React, { useState } from "react";
import { Icon, Box, Button, Balance, Detail } from "../UI";
import privado from "../../assets/images/privado.svg";
import olho_icone from "../../assets/images/olho.svg";
import dinheiro from "../../assets/images/dinheiro.svg";
import styled from "styled-components";

const IconEye = styled(Icon)`
  margin-top: "2px";
`;

const Account = () => {
  const [toggleState, unToggle] = useState(true);

  const toggleHandler = () => {
    unToggle((toggleState) => !toggleState);
  };

  return (
    <Box>
      <h2>Conta</h2>
      <div style={{ fontSize: "26px", padding: "20px 0" }}>
        Saldo disponível{" "}
        <span>
          <Icon src={dinheiro} alt="Ícone Saldo" />
        </span>
        {toggleState ? (
          <Balance>
            <Detail>R$</Detail> 0,00{" "}
          </Balance>
        ) : null}
      </div>

      <Button onClick={toggleHandler}>
        <IconEye
          src={toggleState ? privado : olho_icone}
          alt="Privacidade do Saldo"
        />
      </Button>
    </Box>
  );
};

export default Account;
