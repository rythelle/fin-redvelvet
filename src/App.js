import React from "react";
import { GlobalStyle } from "./Components/GlobalStyle";
import { ContainerWrapper } from "./Components/ContainerWrapper";
import Header from "./Components/Header";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <ContainerWrapper />
    </>
  );
}

export default App;
