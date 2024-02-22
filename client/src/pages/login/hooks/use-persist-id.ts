import { useState } from "react";

export const usePersistId = () => {
  const [isPersist, setIsPersist] = useState(false);

  const onClick = () => {
    setIsPersist((prev) => !prev);
  };

  return {
    isPersist,
    onClick,
  };
};
