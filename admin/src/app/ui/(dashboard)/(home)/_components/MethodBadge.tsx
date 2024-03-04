import { cn } from "@/app/ui/lib/utils";

import styles from "./api-services.module.css";

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
