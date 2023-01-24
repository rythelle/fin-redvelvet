import styled from "styled-components";
import React from "react";
import Row from "../Item";
import ImageFilter from "../ImageFilter";

const Item = styled.div`
  box-shadow: 4px 4px 20px 0px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  margin: 2px 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 10px;
  font-size: 12px;
`;

const Items = ({ id, type, from, value, date }) => {
  return (
    <Item>
      <ImageFilter type={type} />
      <Row id={id} type={type} from={from} value={value} />
      <span>{date}</span>
    </Item>
  );
};

export default Items;
