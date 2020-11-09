import React from "react";
import { PieChart, Pie, Label, Cell, ResponsiveContainer } from "recharts";

import CustomLabel from "./CustomLabel";

const colors = ["#CFD8DC", "#8884d8"];

type UniquePieChartProps = {
  data: { name: string; value: number }[];
  percentageText: string;
  labelText: string;
};

export default function UniquePieChart({
  data,
  percentageText,
  labelText,
}: UniquePieChartProps) {
  return (
    <ResponsiveContainer width="40%" height={180}>
      <PieChart>
        <Pie
          data={data}
          dataKey="value"
          cx="50%"
          cy="50%"
          innerRadius={65}
          outerRadius={80}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index]} />
          ))}
          <Label
            width={30}
            position="center"
            content={<CustomLabel value1={labelText} value2={percentageText} />}
          />
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
}
