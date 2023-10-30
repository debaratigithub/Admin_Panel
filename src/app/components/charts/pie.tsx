// 'use client'
// import React from "react";
// import { Chart } from "react-google-charts";

// export const data = [
//   ["Language", "Speakers (in millions)"],
//   ["German", 5.85],
//   ["French", 1.66],
//   ["Italian", 0.316],
//   ["Romansh", 0.0791],
// ];

// export const options = {
//   legend: "none",
//   pieSliceText: "label",
//   title: "Swiss Language Use (100 degree rotation)",
//   pieStartAngle: 100,
// };

// export default function Piechart() {
//   return (
//     <Chart
//       chartType="PieChart"
//       data={data}
//       options={options}
//       width={"100%"}
//       height={"400px"}
//     />
//   );
// }

"use client";
import React from "react";
import { Chart } from "react-google-charts";

type DataRow = [string, string] | [string, number];
interface DataOptions {
  legend: "none" | "left" | "top" | "right" | "bottom" | "center";
  pieSliceText: "none" | "label" | "percentage" | "value";
  title: string;
  pieStartAngle: number;
}

interface PiechartProps {
  data: DataRow[];
  options: DataOptions;
}

export default function Piechart(props: PiechartProps) {
  return (
    <Chart
      chartType="PieChart"
      data={props.data}
      options={props.options}
      width={"100%"}
      height={"400px"}
    />
  );
}
