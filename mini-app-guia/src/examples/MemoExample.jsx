import { useMemo } from "react";

export default function MemoExample({ value }) {
  const result = useMemo(() => {
    console.log("🔍 Calculando con memo...");
    let sum = 0;
    for (let i = 0; i < 1e7; i++) sum += i;
    return sum + value;
  }, [value]);

  return <div>Resultado: {result}</div>;
}