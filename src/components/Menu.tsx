import React from 'react'
import '../styles/Menu.css'
import { Link } from 'react-router-dom'

function Menu() {
  return (
    <div className="menu">
        <ul>
            <li><Link to="/about">Sobre Nós</Link></li>
            <li><Link to="/products">Nossos Produtos</Link></li>
            <li><Link to="/contact">Entre em Contato</Link></li>
            <li><Link to="/jobs">Trabalhe Conosco</Link></li>
        </ul>
    </div>
  )
}

export default Menu