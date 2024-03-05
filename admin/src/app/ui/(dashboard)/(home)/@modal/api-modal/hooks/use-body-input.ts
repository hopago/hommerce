import { useState } from "react";

export default function useBodyInput({ body }: { body: unknown }) {
  const [error, setError] = useState(false);
  const [errMsg, setErrMsg] = useState<string | null>(null);

  const [field, setField] = useState({
    body: body ? JSON.stringify(body, null, 2) : "",
  });

  const resetErrState = () => {
    setError(false);
    setErrMsg("");
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    resetErrState();

    try {
      const parsedValue = JSON.parse(e.target.value);
      setField({ body: parsedValue });
    } catch (error) {
      setError(true);
      setErrMsg("적합하지 않은 JSON 형식입니다.");
    }
  };

  return { field, handleInputChange, errMsg, error };
}
