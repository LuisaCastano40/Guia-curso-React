import React, { useState } from 'react'

export default function Formulario1() {
    const [nombre, setNombre] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(nombre, password);
    }

    function handleName(e) {
        setNombre(e.target.value)
    }
    
    function handlePassword(e) {
        setPassword(e.target.value)
    }

  return (
    <div>

        <h2>Formulario 1</h2>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='Nombre' value={nombre} onChange={handleName} />
            <input type="password" placeholder='Contraseña' value={password} onChange={handlePassword}/>
            <button type='submit'>Iniciar sesión</button>
        </form>
    </div>
  )
}
