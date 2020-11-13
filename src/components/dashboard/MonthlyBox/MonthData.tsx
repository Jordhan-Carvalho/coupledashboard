import React from "react";
import styled from "styled-components";
import Button from "../../common/Button";

export default function MonthData() {
  return (
    <MonthDataContainer>
      <InfoContainer>
        <Paragraph>Entradas</Paragraph>
        <p>R$ 6,500.00</p>
      </InfoContainer>
      <InfoContainer>
        <Paragraph>Saídas</Paragraph>
        <p>R$ 4,500.22</p>
      </InfoContainer>
      <InfoContainer>
        <Paragraph>Lucro</Paragraph>
        <p>R$ 2,000.22</p>
      </InfoContainer>
      <Button text="Ver mais" secondary />
    </MonthDataContainer>
  );
}

const MonthDataContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 23%;
  height: 250px;
`;

const InfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0;
  width: 70%;
  & p:last-child {
    font-size: 14px;
  }
`;

const Paragraph = styled.p`
  font-size: 16px;
  color: #66438f;
`;
