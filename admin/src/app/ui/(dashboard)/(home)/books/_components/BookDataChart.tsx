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

import styles from "./book-data-chart.module.css";

import Spinner from "@/app/ui/_components/Spinner";

const categoryDataSamples: CategoryData[] = [
  {
    _id: "경제/경영",
    totalViews: 180,
    count: 140,
  },
  {
    _id: "소설",
    totalViews: 220,
    count: 200,
  },
  {
    _id: "시/에세이",
    totalViews: 80,
    count: 60,
  },
  {
    _id: "인문",
    totalViews: 120,
    count: 100,
  },
  {
    _id: "역사",
    totalViews: 95,
    count: 85,
  },
  {
    _id: "예술",
    totalViews: 70,
    count: 50,
  },
  {
    _id: "종교",
    totalViews: 40,
    count: 30,
  },
  {
    _id: "사회 정치",
    totalViews: 110,
    count: 90,
  },
  {
    _id: "자연과학",
    totalViews: 105,
    count: 80,
  },
  {
    _id: "자기 계발",
    totalViews: 150,
    count: 120,
  },
  {
    _id: "인물",
    totalViews: 65,
    count: 55,
  },
  {
    _id: "유아",
    totalViews: 90,
    count: 70,
  },
  {
    _id: "현대지성",
    totalViews: 130,
    count: 95,
  },
];

export default function BookDataChart() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>월간 베스트 카테고리</h2>
      <ResponsiveContainer width="100%" height="90%">
        <LineChart
          width={500}
          height={300}
          data={categoryDataSamples}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <XAxis dataKey="_id" />
          <YAxis />
          <Tooltip
            contentStyle={{ backgroundColor: "#191D27", border: "none" }}
          />
          <Legend />
          <Line type="monotone" dataKey="totalViews" stroke="#8884d8" />
          <Line type="monotone" dataKey="count" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export const BookDataChartSkeleton = () => (
  <div className={styles.container}>
    <h2 className={styles.title}>주간 동향</h2>
    <div className={styles.skeletonContainer}>
      <Spinner text="데이터를 불러오는 중입니다." />
    </div>
  </div>
);
