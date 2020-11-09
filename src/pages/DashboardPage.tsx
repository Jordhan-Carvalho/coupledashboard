import React from "react";
import styled from "styled-components";
import ExpGraphsBox from "../components/dashboard/ExpGraphsBox/ExpGraphsBox";
import GeneralBox from "../components/dashboard/GeneralBox";
import InputsBox from "../components/dashboard/InputsBox";
import InvestmentsBox from "../components/dashboard/InvestmentsBox";
import MonthlyGeneralBox from "../components/dashboard/MonthlyBox/MonthlyGeneralBox";

export default function DashboardPage() {
  return (
    <DashboardContainer>
      <Row>
        <GeneralBox />
        <InputsBox />
      </Row>
      <Row>
        <InvestmentsBox />
        <ExpGraphsBox />
      </Row>
      <MonthlyGeneralBox />
    </DashboardContainer>
  );
}

const DashboardContainer = styled.div`
  padding: 40px 0;
  margin-left: 3%;
  width: 100%;
  padding-right: 10px;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 4px;
    background: transparent;
  }

  &::-webkit-scrollbar-track {
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background: transparent;
    border-radius: 5px;
  }

  &:hover::-webkit-scrollbar-thumb {
    background: #cfd8dc;
  }
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 50px;
`;
