import React from "react";
import { Provider } from 'react-redux';
import { ThemeProvider } from "styled-components";
import { Normalize } from "styled-normalize";
import Layout from "./Layout";
import { store } from "./store";
import theme from "./theme/defaultTheme";
import GlobalStyle from "./theme/global";

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Normalize />
        <GlobalStyle />
        <Layout />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
