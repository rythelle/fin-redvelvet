import styled from "styled-components";
import React from "react";

const RowStyle = styled.div`
  display: flex;
  flex-direction: column;

  .text {
    font-weight: bold;
  }
`;

const Row = ({ id, type, from, value }) => {
  return (
    <RowStyle>
      <span className="text">{type}</span>
      <span>{from}</span>
      <span>{value}</span>
    </RowStyle>
  );
};

export default Row;
