import React from "react";
import logo from "./logo.svg";
import "./App.css";
import styled from "styled-components";
import { ErrorBoundaryDemo } from "./pro-tips/errorBoundries";
import { StyledComponentsDemo } from "./pro-tips/styled-components";
import { MapIndexDemo } from "./pro-tips/noMapIndex";
import { FunctionalComponentsDemo } from "./pro-tips/functionalComponents";

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const InnerContainer = styled.div`
  margin-top: 3em;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function App() {
  return (
    <AppContainer>
      <h2>Pro React</h2>
      <InnerContainer>
        {/* <ErrorBoundaryDemo /> */}
        <StyledComponentsDemo />
        {/* <MapIndexDemo /> */}
        {/* {<FunctionalComponentsDemo />} */}
      </InnerContainer>
    </AppContainer>
  );
}

export default App;
