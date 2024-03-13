import React from "react";

import PointActions from "./PointActions";

import { ReviewRowSkeleton } from "./ReviewRow";

type PointRowProps = {
  point: PointLog;
  isLoading: boolean;
};

export const PointRowAsync = React.lazy(() => import("./PointRow"));

export default function PointRow({ point, isLoading }: PointRowProps) {
  if (isLoading) return <ReviewRowSkeleton />;

  return (
    <tr>
      <td>{point._id}</td>
      <td>{point.pointId}</td>
      <td>{point.desc}</td>
      <PointActions id={point._id} desc={point.desc} amount={point.amount} />
    </tr>
  );
}
