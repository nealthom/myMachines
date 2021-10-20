import React from "react";
import styled from "styled-components";

const CardWrapper = styled.div`
  width: 100%;
  max-width: 300px;
  background: #333;
  border: 1px solid #eee;
  padding: 6px;
  box-sizing: border-box;
  border-radius: 4px;
  margin-bottom: 16px;

  @media (min-width: 768px) {
    min-height: 50px;
    margin-right: 10px;
  }

  > ul {
    display: flex;
    flex-direction: row-reverse;
    /* align-items: center; */
    justify-content: space-around;
    /* text-align: center; */
    font-size: 8px;
    height: 50px;
  }
`;

export function Card({ game }) {
  return (
    <CardWrapper>
      <ul>
        <h1>{game.Name}</h1>
        <h1>{game.Location}</h1>
      </ul>
    </CardWrapper>
  );
}
