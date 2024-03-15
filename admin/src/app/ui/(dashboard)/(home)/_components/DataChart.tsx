"use client";

import {
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import styles from "./data-chart.module.css";

import { ChartData } from "../types/chart-data";

import Spinner from "@/app/ui/_components/Spinner";

const temporaryChartData: ChartData = [
  {
    day: "월",
    visit: 1234,
    sale: 1356,
  },
  {
    day: "화",
    visit: 2352,
    sale: 3749,
  },
  {
    day: "수",
    visit: 6078,
    sale: 6844,
  },
  {
    day: "목",
    visit: 1562,
    sale: 1623,
  },
  {
    day: "금",
    visit: 7534,
    sale: 1723,
  },
  {
    day: "토",
    visit: 4522,
    sale: 3453,
  },
  {
    day: "일",
    visit: 7789,
    sale: 8669,
  },
];

export default function DataChart() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>주간 동향</h2>
      <ResponsiveContainer width="100%" height="90%">
        <LineChart
          width={500}
          height={300}
          data={temporaryChartData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip
            contentStyle={{ backgroundColor: "#151c2c", border: "none" }}
          />
          <Legend />
          <Line type="monotone" dataKey="visit" stroke="#8884d8" />
          <Line type="monotone" dataKey="sale" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export const DataChartSkeleton = () => (
  <div className={styles.container}>
    <h2 className={styles.title}>주간 동향</h2>
    <div className={styles.skeletonContainer}>
      <Spinner text="데이터를 불러오는 중입니다." />
    </div>
  </div>
);
