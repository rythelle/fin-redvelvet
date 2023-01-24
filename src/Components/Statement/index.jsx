import React from "react";
import { Box, Button } from "../UI";
import { extratoLista } from "../../info";
import Items from "../Items";

const Statement = () => {
  return (
    <Box>
      {extratoLista.updates.map(({ id, type, from, value, date }) => {
        return (
          <Items id={id} type={type} from={from} value={value} date={date} />
        );
      })}
      <Button>Ver mais</Button>
    </Box>
  );
};

export default Statement;
