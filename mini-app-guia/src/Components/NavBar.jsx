import { NavLink, Link } from 'react-router-dom';

/*
| Componente | ¿Para qué sirve?                                         |
| ---------- | -------------------------------------------------------- |
| `Link`     | Para navegar a otra ruta **sin recargar la página**      |
| `NavLink`  | Igual que `Link`, pero con estilo activo para navegación |
*/

export default function NavBar() {
  return (
    <nav className="p-4 px-8 bg-periwinkle text-white flex gap-4 font-tipography m-4 rounded-2xl shadow-md items-center justify-between">
      <Link to="/" className='text-4xl '>SD</Link>
      <div className='flex gap-4'>
        <NavLink to="/" className={({ isActive }) => isActive ? "font-bold underline" : ""}>Home</NavLink>
        <NavLink to="/products" className={({ isActive }) => isActive ? "font-bold underline" : ""}>Products</NavLink>
        <NavLink to="/about" className={({ isActive }) => isActive ? "font-bold underline" : ""}>About</NavLink>
      </div>
    </nav>
  )
}
