import React from "react";
import {
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Legend,
  Bar,
  Tooltip,
} from "recharts";

const data = [
  {
    name: "Entradas",
    Atual: 6500,
    "Média Mensal": 4500,
  },
  {
    name: "Saídas",
    Atual: 4500,
    "Média Mensal": 4000,
  },
  {
    name: "Lucro",
    Atual: 2000,
    "Média Mensal": 3200,
  },
];

export default function MultiBarChart() {
  return (
    <ResponsiveContainer width="35%" height={250}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="2 2" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="Atual" fill="#8884d8" barSize={20} />
        <Bar dataKey="Média Mensal" fill="#CFD8DC" barSize={15} />
      </BarChart>
    </ResponsiveContainer>
  );
}
