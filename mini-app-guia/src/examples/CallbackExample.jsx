import { useState, memo, useCallback } from "react";

const Child = memo(({ onClick }) => {
  console.log("✅ Render Child Optimizado");
  return <button onClick={onClick}>Hijo</button>;
});

export default function CallbackExample() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log("Clicked");
  }, []);

  return (
    <>
      <button onClick={() => setCount((c) => c + 1)}>Incrementar {count}</button>
      <Child onClick={handleClick} />
    </>
  );
}