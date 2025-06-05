// El cálculo se ejecuta en cada render, incluso si value no cambió.

export default function MemoExample({ value }) {
  const result = (() => {
    console.log("❌ Recalculando sin memo...");
    let sum = 0;
    for (let i = 0; i < 1e7; i++) sum += i;
    return sum + value;
  })();

  return <div>Resultado: {result}</div>;
}
