import AboutUs from './components/AboutUs'
import Menu from './components/Menu'
import './styles/App.css'

function App() {

  return (
    <>
      <header>
        <img id='logo' src="src\assets\logo.png" alt="Logo" /> 
        <Menu />
      </header>
      <main>
        <AboutUs />
      </main>
    </>
  )
}

export default App
