import React from "react";
import { PieChart, Pie, Label } from "recharts";

const data02 = [
  {
    name: "Group A",
    color: "red",
    value: 2400,
  },
  {
    name: "Group B",
    value: 5000,
  },
];

export default function UniquePieChart() {
  return (
    <PieChart width={730} height={250}>
      <Pie
        data={data02}
        dataKey="value"
        nameKey="name"
        cx="50%"
        cy="50%"
        innerRadius={60}
        outerRadius={80}
        fill="#8884d8"
        label
      />
      <Label width={30} position="center">
        WHY
      </Label>
    </PieChart>
  );
}
