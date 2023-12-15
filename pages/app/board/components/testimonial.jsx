import * as React from "react";

import styled from "styled-components";

function MyNewComponent(props) {
  return (
    <Container>
      <Title>The easiest way to go from design to code</Title>
      <Subtitle>An all-in-one platform to start, manage and grow a decentralized autonomous organization</Subtitle>
      <Button>Get started</Button>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  max-width: 996px;
  flex-direction: column;
  padding: 0 20px;
  background: #182632; 
`;

const Title = styled.div`
  color: var(--Fg-foregroundPrimary, #fff);
  text-align: center;
  letter-spacing: 1px;
  width: 100%;
  font: 700 72px/82px Montserrat, sans-serif;

  @media (max-width: 991px) {
    max-width: 100%;
    font-size: 40;
    line-height: 50px;
  }
`;

const Subtitle = styled.div`
  color: #fff;
  text-align: center;
  max-width: 649px;
  align-self: center;
  margin-top: 37px;
  font: 500 26px/31px Montserrat, sans-serif;

  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const Button = styled.div`
  color: #10151a;
  text-align: center;
  white-space: nowrap;
  justify-content: center;
  border-radius: 16px;
  box-shadow: 0px 9px 44px 0px rgba(255, 207, 1, 0.2);
  background-color: #ffcf01;
  align-self: center;
  margin-top: 87px;
  padding: 27px 50px;
  font: 700 20px/180% Montserrat, sans-serif;

  @media (max-width: 991px) {
    white-space: initial;
    margin-top: 40px;
    padding: 0 20px;
  }
}`;

export default MyNewComponent;


