import React from "react";

type CustomLabelProps = {
  value1: string;
  value2: string;
  viewBox?: any;
};

export default function CustomLabel({
  viewBox,
  value1,
  value2,
}: CustomLabelProps) {
  const { cx, cy } = viewBox;
  return (
    <>
      <text
        x={cx}
        y={cy - 5}
        fill="rgba(0, 0, 0, 0.87)"
        textAnchor="middle"
        dominantBaseline="central"
      >
        <tspan alignmentBaseline="middle" fontSize="30px" fontWeight="Bold">
          {value2}
        </tspan>
      </text>
      <text
        x={cx}
        y={cy + 25}
        fill="#8884d8"
        textAnchor="middle"
        dominantBaseline="central"
      >
        <tspan fontSize="15px" fontWeight="Bold">
          {value1}
        </tspan>
      </text>
    </>
  );
}
