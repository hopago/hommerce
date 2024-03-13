import React from "react";

import PointActions from "./PointActions";

import { TableRowSkeleton } from "./TableRowSkeleton";

import { formatDate } from "../../../../utils/formatDate";

import { cn } from "@/app/ui/lib/utils";
import styles from "./point-log-table.module.css";

type PointRowProps = {
  point: PointLog;
  isLoading: boolean;
};

export const PointRowAsync = React.lazy(() => import("./PointRow"));

export default function PointRow({ point, isLoading }: PointRowProps) {
  if (isLoading) return <TableRowSkeleton />;

  return (
    <tr>
      <td>{formatDate(point.createdAt)}</td>
      <td>{point.desc}</td>
      <td
        className={cn(
          "",
          point.amount > 0 ? styles.amountInc : styles.amountDec
        )}
      >
        {point.amount}
      </td>
      <PointActions id={point._id} desc={point.desc} amount={point.amount} />
    </tr>
  );
}
