import React from "react";
import styled from "styled-components";

import UniquePieChart from "./UniquePieChart";

export default function ExpGraphsView() {
  return (
    <ExpGraphsViewContainer>
      <UniquePieChart />
    </ExpGraphsViewContainer>
  );
}

const ExpGraphsViewContainer = styled.article`
  width: 50%;
  height: 230px;
  background: rgba(255, 255, 255, 0.5);
  box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
