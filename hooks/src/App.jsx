import { useState, useEffect } from "react";

function App() {

  const [count, setCount] = useState(0);
  let contador = 0;

  useEffect(()=>{
    alert('Hola, bienvenido a tu contador con React');
  }, []);

   // useEffect que reacciona a los cambios en el contador
   useEffect(() => {

    console.log('Estado count:', count);

    // Podemos ejecutar lógica más compleja segun necesitemos
    if (count === 5) {
      alert("¡Has llegado a 5!");
    }
  }, [count]); // Solo se ejecuta cuando cambia el valor de `count`

  function handleCount() {
    setCount(count + 1)
    contador++;

    console.log('Variable contador:', contador);
  }


  return (
    <>
      <h1 className="text-2xl text-center mt-[50px] border">Ejemplo: Contador Reactivo con useState y useEffect</h1>
      <p className="m-[50px]">
        Este componente demuestra cómo usar <strong>useState</strong> para
        controlar el valor de un contador, y cómo <strong>useEffect</strong> permite
        ejecutar una acción (en este caso, una alerta) cuando ese valor cambia.
      </p>

      <div className="m-[50px] text-center ">

      <h2>Contador: {count}</h2>
      <h2>Contador local: {contador}</h2>

      <button onClick={handleCount}>
        Incrementar
      </button>
      </div>

    </>
  )
}

export default App
