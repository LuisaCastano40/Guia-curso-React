// Cada vez que el componente padre se renderiza, handleClick se vuelve a crear (nueva referencia), lo que fuerza a que el componente hijo también se vuelva a renderizar, incluso si no cambian las props.


import { useState } from "react";

function Child({ onClick }) {
  console.log("❌ Render Child sin optimizar");
  return <button onClick={onClick}>Hijo</button>;
}

export default function CallbackExample() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    console.log("Clicked");
  };

  return (
    <>
      <button onClick={() => setCount((c) => c + 1)}>Incrementar {count}</button>
      <Child onClick={handleClick} />
    </>
  );
}
