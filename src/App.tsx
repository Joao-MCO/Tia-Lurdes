import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import AboutUs from './components/AboutUs'
import Menu from './components/Menu'
import './styles/App.css'

function App() {

  return (
    <BrowserRouter>
      <header>
        <Link to="/"><img id='logo' src="src\assets\logo.png" alt="Logo" /></Link>
        <Menu />
      </header>
      <Routes>
        <Route path="/" element={<AboutUs />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/products" element={<p>Produtos</p>} />
        <Route path="/contact" element={<p>Entre em Contato</p>} />
        <Route path="/jobs" element={<p>Trabalhe Conosco</p>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
