import React from "react";
import styled from "styled-components";

import Button from "../common/Button";

export default function InputsBox() {
  return (
    <InputsBoxContainer>
      <Title>Lançamentos e teto de gastos</Title>
      <ButtonsRow>
        <Button text="+ Entrada" />
        <Button text="Teto Total" secondary />
      </ButtonsRow>
      <ButtonsRow>
        <Button text="- Saida" secondary />
        <Button text="Teto Gasto Extra" />
      </ButtonsRow>
    </InputsBoxContainer>
  );
}

const InputsBoxContainer = styled.article`
  width: 50%;
  height: 230px;
  background: rgba(255, 255, 255, 0.5);
  box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h2`
  font-weight: bold;
  font-size: 20px;
  color: #66438f;
  margin: 20px 0 10px 0;
`;

const ButtonsRow = styled.div`
  margin: 20px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 70%;
`;
