import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import AboutUs from './components/AboutUs'
import Menu from './components/Menu'
import Home from './components/Home'
import './styles/App.css'
import Products from './components/Products'

function App() {

  return (
    <BrowserRouter>
      <header>
        <Link to="/"><img id='logo' src="src\assets\logo.png" alt="Logo" /></Link>
        <Menu />
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<p>Entre em Contato</p>} />
        <Route path="/jobs" element={<p>Trabalhe Conosco</p>} />
      </Routes>
      <footer>
        <fieldset>
          <legend id='footer-title'>CONTATO</legend>
          <div id='footer-description'>
            <p>Telefone: (35) 3445-1720</p>
            <p>WhatsApp: (35) 99104-5557</p>
            <p>Facebook: </p>
            <p>Instagram: </p>
          </div>
        </fieldset>
    </footer>
    </BrowserRouter>
  )
}

export default App
