import React from "react";
import styled from "styled-components";

import UniquePieChart from "./UniquePieChart";

const data01 = [
  {
    name: "Total",
    value: 100 - 55,
  },
  {
    name: "Current",
    value: 55,
  },
];

const data02 = [
  {
    name: "Total",
    value: 100 - 20,
  },
  {
    name: "Current",
    value: 20,
  },
];

export default function ExpGraphsBox() {
  return (
    <ExpGraphsBoxContainer>
      <UniquePieChart
        data={data01}
        percentageText="55,0%"
        labelText="Gasto Total"
      />
      <UniquePieChart
        data={data02}
        percentageText="20,0%"
        labelText="Gasto Extra"
      />
    </ExpGraphsBoxContainer>
  );
}

const ExpGraphsBoxContainer = styled.article`
  width: 50%;
  height: 230px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;
