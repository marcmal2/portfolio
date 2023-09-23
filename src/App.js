import React from "react";
import "./App.css";
import Main from "./containers/Main";
import { ThemeProvider } from "styled-components";
import {
  chosenTheme,
  purpleTheme,
  materialDarkTheme,
  blackTheme,
} from "./theme";
import { GlobalStyles } from "./global";

function App() {
  return (
    <ThemeProvider theme={materialDarkTheme}>
      <>
        <GlobalStyles />
        <div>
          <Main theme={materialDarkTheme} />
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;
