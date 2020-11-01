import React from "react";
import Tetris from "./components/Tetris";
import { GlobalStyle } from "./global-styles";

function App() {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Tetris />
    </React.Fragment>
  );
}

export default App;
