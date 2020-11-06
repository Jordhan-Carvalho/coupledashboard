import React from "react";
import styled from "styled-components";

export default function GeneralView() {
  return (
    <GeneralViewContainer>
      <Title>Visão geral</Title>
      <InfoContainer>
        <Paragraph>Total aprisionado</Paragraph>
        <p>R$ 107,000.22</p>
      </InfoContainer>
      <InfoContainer>
        <Paragraph>Total disponível</Paragraph>
        <p>R$ 10,000.22</p>
      </InfoContainer>
      <InfoContainer>
        <Paragraph>Total</Paragraph>
        <p>R$ 117,000.22</p>
      </InfoContainer>
    </GeneralViewContainer>
  );
}

const GeneralViewContainer = styled.article`
  width: 40%;
  height: 230px;
  background: rgba(255, 255, 255, 0.5);
  box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h2`
  font-weight: bold;
  font-size: 20px;
  color: #66438f;
  margin: 20px 0 10px 0;
`;

const InfoContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin: 10px 0;
  width: 70%;
  &:nth-child(4) {
    margin-top: 15px;
    margin-bottom: 20px;
  }
  &:nth-child(4) p:last-child {
    font-weight: bold;
  }
`;

const Paragraph = styled.p`
  font-size: 16px;
  color: #66438f;
`;
