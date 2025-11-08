import React from 'react'
import '../styles/Menu.css'
import { NavLink } from 'react-router-dom'

function Menu() {
  const getLinkClass = ({ isActive }: { isActive: boolean }) => {
    return isActive 
      ? 'link-ativo' // Classe para o link ativo
      : 'link-normal'; // Classe para os outros links
  };

  return (
    <nav className="menu">
        <ul>
            <li><NavLink to="/about" className={getLinkClass}>Sobre Nós</NavLink></li>
            <li><NavLink to="/products" className={getLinkClass}>Nossos Produtos</NavLink></li>
            <li><NavLink to="/contact" className={getLinkClass}>Entre em Contato</NavLink></li>
            <li><NavLink to="/jobs" className={getLinkClass}>Trabalhe Conosco</NavLink></li>
        </ul>
    </nav>
  )
}

export default Menu