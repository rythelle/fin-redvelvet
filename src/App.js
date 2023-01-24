import React, { useState } from "react";
import { GlobalStyle } from "./Components/GlobalStyle";
import { ContainerWrapper } from "./Components/ContainerWrapper";
import Header from "./Components/Header";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "../src/Components/UI/themes";
import { BtnTheme } from "./Components/UI";
import SelectTheme from "./Components/SwitcherTheme";

function App() {
  const [theme, setTheme] = useState(true);

  const togglerTheme = () => {
    setTheme((theme) => !theme);
  };
  return (
    <>
      <ThemeProvider theme={theme ? lightTheme : darkTheme}>
        <GlobalStyle />
        <BtnTheme onClick={togglerTheme}>
          <SelectTheme theme={theme} />
        </BtnTheme>
        <Header />
        <ContainerWrapper />
      </ThemeProvider>
    </>
  );
}

export default App;
