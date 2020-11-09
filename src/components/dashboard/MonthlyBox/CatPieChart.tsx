import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from "recharts";

const data = [
  { name: "Roupas", value: 400 },
  { name: "Carro", value: 300 },
  { name: "Casa", value: 300 },
  { name: "Entreterimento", value: 200 },
];

const COLORS = ["#231942", "#5e548e", "#9f86c0", "#be95c4", "#e0b1cb"];
const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}: any) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

export default function CatPieChart() {
  const formatLegendText = (value: string, entry: any) => {
    // const { color } = entry;
    return <span>{value}</span>;
  };

  return (
    <ResponsiveContainer width="35%" height={250}>
      <PieChart>
        <Pie
          data={data}
          // cx={0}
          // cy={100}
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Legend iconType="circle" formatter={formatLegendText} />
      </PieChart>
    </ResponsiveContainer>
  );
}
