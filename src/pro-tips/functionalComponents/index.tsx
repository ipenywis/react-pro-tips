import React from "react";
import styled from "styled-components";
import { MyClassComponent } from "./classComponent";
import { MyFunctionComponent } from "./functionalComponent";

const ComponentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export function FunctionalComponentsDemo() {
  return (
    <>
      <ComponentContainer>
        <h3>Functional Component</h3>
        <MyFunctionComponent />
      </ComponentContainer>
      <ComponentContainer>
        <h3>Class Component</h3>
        <MyClassComponent />
      </ComponentContainer>
    </>
  );
}
