import React from 'react'
import '../styles/Home.css'

function Home() {
  return (
    <main>
        <div id="home-header">
            <h1>MASSAS TIA LURDES</h1>
            <p>O PASTEL COM SABOR DE AMOR</p>
        </div>
        <div id='infos'>
          <section className='home-section' id='como-chegar'>
              <p className='home-section-title'>COMO CHEGAR</p>
              <div className='image-container'>
                <iframe id='home-maps' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3692.1699341099875!2d-46.16923758950475!3d-22.271551779622616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cbd77404bf61fb%3A0x4072c38b3e356488!2sAv.%20Wilson%20Megale%2C%20806%20-%20Borda%20da%20Mata%2C%20MG%2C%2037564-000!5e0!3m2!1spt-BR!2sbr!4v1762579100650!5m2!1spt-BR!2sbr" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
              </div>
              <div className='home-section-description'>
                <p>Endereço: Av. Wilson Megale, 806</p>
                <p>Centro - Borda da Mata, MG - 37564-000</p>
              </div>
          </section>
          <section className='home-section' id='horario-de-funcionamento'>
              <p className='home-section-title'>HORÁRIO DE FUNCIONAMENTO</p>
              <div className='image-container'>
                <img src="src\assets\horario.png" alt="Horario" />
              </div>
              <div className='home-section-description'>
                <p>Segunda-Feira - Sexta-Feira</p>
                <p>08:00 - 17:00</p>
              </div>
          </section>
        </div>
    </main>
  )
}

export default Home