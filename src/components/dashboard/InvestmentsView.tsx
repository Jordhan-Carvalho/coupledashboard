import React from "react";
import styled from "styled-components";

import Button from "../common/Button";

export default function InvestmentsView() {
  return (
    <InvestmentsViewContainer>
      <Title>Investimentos</Title>
      <InfoContainer>
        <Paragraph>Dinheiro Investido</Paragraph>
        <p>R$ 107,000.22</p>
      </InfoContainer>
      <InfoContainer>
        <Paragraph>Rendimento Mensal</Paragraph>
        <p>R$ 4,000.22</p>
      </InfoContainer>
      <InfoContainer>
        <Paragraph>Porcentagem média</Paragraph>
        <p>4,06%</p>
      </InfoContainer>
      <Button text="Detalhes" secondary />
    </InvestmentsViewContainer>
  );
}

const InvestmentsViewContainer = styled.article`
  width: 40%;
  height: 230px;
  background: rgba(255, 255, 255, 0.5);
  box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
`;

const Title = styled.h2`
  font-weight: bold;
  font-size: 20px;
  color: #66438f;
  margin-bottom: 10px;
`;

const InfoContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin: 10px 0;
  width: 70%;
`;

const Paragraph = styled.p`
  font-size: 16px;
  color: #66438f;
`;
