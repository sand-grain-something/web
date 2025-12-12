import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import { ImageDataType } from "../page";

export default function CDF({
  imageData,
}: {
  imageData: ImageDataType | null;
}) {
  const chartData = Object.entries(
    imageData?.data?.grain_prediction.distribution_mm ?? {}
  ).map(([key, value]) => ({
    name: key,
    value: value,
  }));

  return (
    <LineChart
      style={{ width: "100%", aspectRatio: 1.618, maxWidth: 600 }}
      data={chartData}
      margin={{
        top: 20,
        right: 20,
        bottom: 5,
        left: 0,
      }}
    >
      <CartesianGrid stroke="#aaa" strokeDasharray="5 5" />
      <Line
        type="monotone"
        dataKey="value"
        stroke="purple"
        strokeWidth={2}
        name="Grain Size (mm)"
      />
      <XAxis dataKey="name" />
      <YAxis
        width={60}
        label={{ value: "Size (mm)", position: "insideLeft", angle: -90 }}
      />
      <Legend align="right" />
      <Tooltip />
    </LineChart>
  );
}
