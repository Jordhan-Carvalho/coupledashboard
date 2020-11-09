import React from "react";
import styled from "styled-components";

import CatPieChart from "./CatPieChart";
import MonthData from "./MonthData";
import MultiBarChart from "./MultiBarChart";

export default function MonthlyGeneralBox() {
  return (
    <MonthlyGeneralBoxContainer>
      <Title>Novembro</Title>
      <MonthInfoContainer>
        <MonthData />
        <MultiBarChart />
        <CatPieChart />
      </MonthInfoContainer>
    </MonthlyGeneralBoxContainer>
  );
}

const MonthlyGeneralBoxContainer = styled.section`
  width: 100%;
  background: rgba(255, 255, 255, 0.5);
  box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  margin-bottom: 20px;
  padding: 20px 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const MonthInfoContainer = styled.div`
  margin: 15px 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const Title = styled.h2`
  font-weight: bold;
  font-size: 20px;
  color: #66438f;
  margin: 15px 0 20px 0;
`;
