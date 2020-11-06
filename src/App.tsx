import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";

import DashboardPage from "./pages/DashboardPage";
import NavMenu from "./components/common/NavMenu";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <MainContainer>
          <NavMenu />
          <Switch>
            <Route path="/" exact component={DashboardPage} />
          </Switch>
        </MainContainer>
      </Router>
    </>
  );
}

const GlobalStyle = createGlobalStyle`
:root {
  --mainPurple: #66438F;
  --fontMontserrat: 'Montserrat', sans-serif;
}

body {
  font-family: var(----fontMontserrat);
}

#root {
  height: 100vh;
  width: 100%;
  background: url("data:image/svg+xml,%3Csvg width='6' height='6' viewBox='0 0 6 6' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%239C92AC' fill-opacity='0.4' fill-rule='evenodd'%3E%3Cpath d='M5 0h1L0 6V5zM6 5v1H5z'/%3E%3C/g%3E%3C/svg%3E"), linear-gradient(116.82deg, #E9F8FF 0%, rgba(202, 240, 248, 0.354167) 48.96%, rgba(202, 240, 248, 0) 100%);
  background-blend-mode: overlay, normal;
}

`;

const MainContainer = styled.div`
  display: flex;
  margin: auto;
  width: 80%;
  height: 100%;
  max-width: 1500px;
`;
