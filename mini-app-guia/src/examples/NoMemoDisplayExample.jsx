// Cada vez que count cambia, el componente Display se vuelve a renderizar aunque text siga siendo "Hola", ya que no está memorizado con React.memo.

import { useState } from "react";

function Display({ text }) {
  console.log("❌ Render Display sin memo");
  return <div>{text}</div>;
}

export default function MemoDisplayExample() {
  const [count, setCount] = useState(0);
  return (
    <>
      <button onClick={() => setCount(count + 1)}>Incrementar</button>
      <Display text="Hola" />
    </>
  );
}
