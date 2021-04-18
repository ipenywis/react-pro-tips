import React from "react";
import styled from "styled-components";
import GalaxyImg from "../../assets/galaxy.jpg";

const Container = styled.div`
  height: 100%;
  display: flex;
  background-color: ${({ color }) => color};
`;

const ImageContainer = styled.div`
  width: auto;
  height: 7em;

  img {
    width: auto;
    height: 100%;
  }
`;

export function StyledComponent() {
  return (
    <Container color="white">
      <ImageContainer>
        <img src={GalaxyImg} />
      </ImageContainer>
    </Container>
  );
}
