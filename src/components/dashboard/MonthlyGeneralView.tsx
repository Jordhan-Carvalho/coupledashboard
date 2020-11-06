import React from "react";
import styled from "styled-components";

export default function MonthlyGeneralView() {
  return <MonthlyGeneralViewContainer></MonthlyGeneralViewContainer>;
}

const MonthlyGeneralViewContainer = styled.section`
  width: 100%;
  height: 800px;
  min-height: 0;
  background: rgba(255, 255, 255, 0.5);
  box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  margin-bottom: 20px;
`;
