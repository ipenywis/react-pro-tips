import React from "react";
import styled from "styled-components";
import { CSSComponent } from "./cssComponent";
import { StyledComponent } from "./styledComponent";

const ComponentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export function StyledComponentsDemo() {
  return (
    <>
      <ComponentContainer>
        <h3>CSS Component</h3>
        <CSSComponent />
      </ComponentContainer>
      <ComponentContainer>
        <h3>Styled Component</h3>
        <StyledComponent />
      </ComponentContainer>
    </>
  );
}
