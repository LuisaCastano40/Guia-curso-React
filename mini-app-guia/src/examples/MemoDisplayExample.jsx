import { useState, memo } from "react";

const Display = memo(({ text }) => {
  console.log("✅ Render Display optimizado");
  return <div>{text}</div>;
});

export default function MemoDisplayExample() {
  const [count, setCount] = useState(0);
  return (
    <>
      <button onClick={() => setCount(count + 1)}>Incrementar</button>
      <Display text="Hola" />
    </>
  );
}