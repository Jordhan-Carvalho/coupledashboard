import React from "react";
import styled from "styled-components";
import ExpGraphsView from "../components/dashboard/ExpGraphsView";
import GeneralView from "../components/dashboard/GeneralView";
import InputsView from "../components/dashboard/InputsView";
import InvestmentsView from "../components/dashboard/InvestmentsView";
import MonthlyGeneralView from "../components/dashboard/MonthlyGeneralView";

export default function DashboardPage() {
  return (
    <DashboardContainer>
      <Row>
        <GeneralView />
        <InputsView />
      </Row>
      <Row>
        <InvestmentsView />
        <ExpGraphsView />
      </Row>
      <MonthlyGeneralView />
    </DashboardContainer>
  );
}

const DashboardContainer = styled.div`
  margin: 40px 0;
  margin-left: 3%;
  width: 100%;
  /* background: blue; */
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  /* background: red; */
  margin-bottom: 50px;
`;
