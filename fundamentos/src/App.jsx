
import './App.css'
import { MyButton } from './components/Button'
import { useState } from 'react';
// 
function App() {

  // Variables
  let nombre = "Luisa Castaño";
  let isLoggedIn = false;
  let saludo = "";
  let lista = ["item 1", "item 2", "item 3"];

  // Condicionales
  if (isLoggedIn) {
    saludo = "Bienvenido de nuevo";
  } else {
    saludo = "Por favor inicia sesión";
  }

  // Manejo de eventos
  const handleClick = () => {
    console.log("Botón clickeado");
  };

  // Estados
  const [count, setCount] = useState(0);
  let count2 = 0;

  const handleClick2 = () => {
    setCount(count + 1);
    count2++;
  };

  return (
    <>
      {/* HTML que se muestra en el navegador */}
      <h1 className='border'>Hola Desarrolladores</h1>
      <h2>Fundamentos de React</h2>

      <p>Los temas que vamos a ver son:</p>
      <ul>
        <li>sintaxis de marcado JSX</li>
        <li>Creación y anidación de componentes</li>
        <li>Renderizado condicional</li>
        <li>Renderizado de listas</li>
        <li>Agregar estilos</li>
        <li>Pasar propiedades (Props) a un Componente</li>
        <li>manejo de eventos</li>
        <li>estados y ciclo de vida de los componentes</li>
      </ul>

      <hr />
      <section>
        <h3>Sintaxis de marcado JSX</h3>
        <p>JSX es una extensión de JavaScript que permite escribir HTML dentro de JavaScript.</p>
        <p>Hola {nombre}</p>
      </section>

      <hr />
      <section>
        <h3>Creación y anidación de componentes</h3>
        <p>Los componentes son la base de React. Son piezas reutilizables de UI.</p>
        <MyButton />
      </section>

      <hr />
      <section>
        <h3>Renderizado condicional</h3>
        <p>El renderizado condicional es la capacidad de mostrar u ocultar elementos basado en una condición.</p>


        {/* Forma 1 */}
        {isLoggedIn ? (
          <h2>Bienvenido de nuevo</h2>
        ) : (
          <h2>Por favor inicia sesión</h2>
        )}

        {/* Forma 2 */}
        <h2>{saludo}</h2>

        {/* Forma 3 */}
        {isLoggedIn && <h2>Bienvenido de nuevo</h2>}

      </section>

      <hr />

      <section>
        <h3>Renderizado de listas</h3>
        <p>Los componentes de lista son útiles para mostrar colecciones de datos.</p>
        <ul>
          {/* metodo map para recorrer el array */}
          {lista.map((item) => (
            //key es un identificador único para cada elemento
            <li key={item}>{item}</li>
          ))}

        </ul>
      </section>

      <hr />
      <section style={{ backgroundColor: 'lightblue', padding: '20px' }}>
        <h3 className='title'>Agregar estilos</h3>
        <p>Los estilos se pueden agregar de varias formas.</p>
        <MyButton />
      </section>

      <hr />
      <section>
        <h3>Pasar propiedades (Props) a un Componente</h3>
        <p>Las props son propiedades que se pasan a un componente.</p>
        <MyButton name="Click si soy un botón" />
      </section>

      <hr />
      <section>
        <h3>Manejo de eventos</h3>
        <p>Los eventos son acciones que se realizan en un componente.</p>
        <MyButton onClick={handleClick} />
      </section>

      <hr />

      <section>
        <h3>Estados y ciclo de vida de los componentes</h3>
        <p>Los estados son variables que se pueden modificar en un componente.</p>
        <MyButton name="Click para cambiar el estado" onClick={handleClick2} />
        <p>El contador es: {count}</p>
        <p>El contador variable normal es: {count2}</p>
      </section>
    </>
  )
}

export default App
