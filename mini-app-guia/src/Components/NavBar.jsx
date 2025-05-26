import {  NavLink } from 'react-router-dom';

export default function NavBar() {
  return (
    <nav className="p-4 bg-gray-800 text-white flex gap-4">
      <NavLink to="/" className={({ isActive }) => isActive ? "font-bold underline" : ""}>Home</NavLink>
      <NavLink to="/products" className={({ isActive }) => isActive ? "font-bold underline" : ""}>Products</NavLink>
      <NavLink to="/about" className={({ isActive }) => isActive ? "font-bold underline" : ""}>About</NavLink>
    </nav>
  )
}
