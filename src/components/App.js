import React, { useState } from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import Search from "components/pages/Search";
import { CardList } from "components/common";

import DarkTheme from "themes/dark";

const GlobalStyle = createGlobalStyle`

  *{
    box-sizing: border-box;
  }

  body{
    background: ${(p) => p.theme.bodyBackgroundColor};
    min-height: 100vh;
    color: ${(p) => p.theme.bodyFontColor};
  }

`;

export default function App() {
  const [theme] = useState(DarkTheme);
  const [results, setResults] = useState([]);
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Search setResults={setResults} />
      <CardList results={results} />
    </ThemeProvider>
  );
}
