import React from "react";
import styled from "styled-components";

const HeaderWrapper = styled.header`
  height: 60px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  position: fixed;
  top: 0;
  background: linear-gradient(
    to right,
    ${p => p.theme.primaryColor},
    ${p => p.theme.secondaryColor}
  );
  border-bottom: ${p => p.theme.secondaryColor} solid 3px;
  font-family: "Kaushan Script";
`;

export function Header() {
  return (
    <HeaderWrapper>
      <h1>Machine Search</h1>
    </HeaderWrapper>
  );
}
