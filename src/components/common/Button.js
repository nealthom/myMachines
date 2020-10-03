import styled, { css } from "styled-components";

const largeStyles = ({ large }) => {
  if (large) {
    return css`
      padding: 10px;
      border-radius: 5px;
      font-size: 1.5rem;
    `;
  } else {
    return css`
      padding: 8px;
      border-radius: 4px;
      font-size: 1rem;
    `;
  }
};

const Button = styled.button`
  color: white;
  background: ${p =>
    p.secondary ? p.theme.secondaryColor : p.theme.primaryColor};
  font-weight: bold;
  ${largeStyles}
  box-shadow: none;
  border: none;
  width: 100%;
  display: block;
  white-space: none;

  &:disabled {
    background: #eee;
    color: #666;
  }
`;

export { Button };