import { cn } from "@/app/ui/lib/utils";

import styles from "./api-services.module.css";

import { ApiMethod } from "../types/api-specs";

type MethodBadgeProps = {
  method: ApiMethod;
};

export default function MethodBadge({ method }: MethodBadgeProps) {
  return (
    <div
      className={cn(
        styles.methodBadge,
        method === "GET" && styles.get,
        method === "POST" && styles.post,
        method === "PATCH" && styles.patch,
        method === "DELETE" && styles.delete
      )}
    >
      <span>{method}</span>
    </div>
  );
}
