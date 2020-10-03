import React from "react";
import styled from "styled-components";

const CardWrapper = styled.div`
  width: 100%;
  max-width: 300px;
  background: #333;
  border: 1px solid #eee;
  padding: 16px;
  box-sizing: border-box;
  border-radius: 4px;
  margin-bottom: 16px;

  @media (min-width: 768px) {
    min-height: 250px;
    margin-right: 10px;
  }

  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
`;

export function Card({ game }) {
  return (
    <CardWrapper>
      <div>
        <h1>{game.Name}</h1>
        <h2>{game.Location}</h2>
      </div>
    </CardWrapper>
  );
}
