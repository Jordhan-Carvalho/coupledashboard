import React from "react";
import styled from "styled-components";
import Button from "../../common/Button";

export default function MonthData() {
  return (
    <MonthDataContainer>
      <InfoContainer>
        <Paragraph>Total</Paragraph>
        <p>R$ 117,000.22</p>
      </InfoContainer>
      <InfoContainer>
        <Paragraph>Total</Paragraph>
        <p>R$ 117,000.22</p>
      </InfoContainer>
      <InfoContainer>
        <Paragraph>Total</Paragraph>
        <p>R$ 117,000.22</p>
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
  width: 20%;
  height: 250px;
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
