import React from 'react'
import '../styles/Contact.css'

function Contact() {
  return (
    <main>
        <div className="contact-container">
            <div className='contact-us-title'>
                <h3>Entre em Contato Conosco</h3>
                <p>Traga sua empresa para ser nossa parceira!</p>
            </div>
            <div className='contact-us-form'>
                <form name="contact-us" method="POST" data-netlify="true">
                    <div className="field-group">
                        <label htmlFor="name">Nome:</label>
                        <input type="text" id="name" name="name" required />
                    </div>
                    <div className="field-group">
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" required />
                    </div>
                    <div className="field-group">
                        <label htmlFor="inquiry-type">Tipo de Documento:</label>
                        <select id="doc-type" name="doc-type" required>
                            <option value="" disabled selected>Selecione o documento</option>
                            <option value="person">CPF</option>
                            <option value="enterprise">CNPJ</option>
                        </select>
                    </div>
                    <div className="field-group">
                        <label htmlFor="document">Documento:</label>
                        <input type="text" id='document' name='document' required/>
                    </div>
                    <div className="field-group">
                        <label htmlFor="phone">Telefone:</label>
                        <input type="text" id='phone' name='phone' required/>
                    </div>
                    <div className="field-group">
                        <label htmlFor="type">Motivo do Contato:</label>
                        <select name="type" id="type" required>
                            <option value="" disabled selected>Motivo do Contato</option>
                            <option value="partnership">Parceria</option>
                            <option value="buy">Compra</option>
                            <option value="other">Outro</option>
                        </select>
                    </div>
                    <input type="hidden" name="form-name" value="contact-us" />
                    <div className="field-group">
                        <label htmlFor="message">Deixe sua mensagem:</label>
                        <textarea name="message" id="message"></textarea>
                    </div>
                    <button type="submit">Enviar</button>
                </form>
            </div>
        </div>
    </main>
  )
}

export default Contact