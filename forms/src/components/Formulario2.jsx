import { useForm } from 'react-hook-form'
// Importa el hook principal que ofrece la librería, llamado useForm.

export default function Formulario2() {
    const { register, handleSubmit } = useForm();
    /*
    Esto te da acceso a varias funciones útiles:
        register: se usa para conectar los inputs al sistema de formulario.
        handleSubmit: valida y recoge los datos del formulario antes de llamarla.
    */

    const enviar = (data) => {
        // data es un objeto con todos los valores de los inputs registrados usando register(...).
        console.log('nombre:', data.nombre);
        console.log('email:', data.email);
        console.log('telefono:', data.telefono);
    }

    return (

        <div className="container"> 
            <h1 className="main-title">Contacto</h1>
            <form className="formulario" onSubmit={handleSubmit(enviar)}>
                {/* 
                Esto hace dos cosas:
                    handleSubmit(enviar) intercepta el submit.
                    Ejecuta validaciones internas.
                    Si todo está bien, llama a enviar(data) con los datos del formulario.
                */}

                {/* ...register("nombre") se llama operador de propagación */}
                <input type="text" placeholder="Ingresá tu nombre" {...register("nombre")} />
                {/* Esto registra el input bajo la clave "nombre" en el formulario. Lo mismo para "email" y "telefono". */}
                <input type="email" placeholder="Ingresá tu e-mail" {...register("email")} />
                <input type="phone" placeholder="Ingresá tu teléfono" {...register("telefono")} />

                <button className="enviar" type="submit">Enviar</button>

            </form>
        </div>

    )
}
