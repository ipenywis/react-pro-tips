import React from "react";
import styled from "styled-components";
import { UnqiueIndex } from "./uniqueIndex";
import { MapIndex } from "./mapIndex";

const ComponentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export function MapIndexDemo() {
  return (
    <>
      <ComponentContainer>
        <h3>Array Index</h3>
        <MapIndex />
      </ComponentContainer>
      <ComponentContainer>
        <h3>Unique Index</h3>
        <UnqiueIndex />
      </ComponentContainer>
    </>
  );
}
