import React, { useState, type FormEvent } from 'react'
import '../styles/Contact.css'
import axios from 'axios'
import type { IContact, DocType, ContactType } from '../models/contact';
import InfoBox from './InfoBox';


function Contact() {
    const [formData, setFormData] = useState<IContact>({
        name: '',
        email: '',
        docType: '' as DocType,
        document: '',
        phone: '',
        type: '' as ContactType,
        message: ''
    });
    const [responseMessage, setResponseMessage] = useState('');
    const [visibleResponse, setVisibleResponse] = useState(false);
    const [status, setStatus] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };
    
    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        
        if (isSubmitting) return;
        
        try {
            setIsSubmitting(true);
            
            const url = "https://tia-lurdes.vercel.app/api";
            if (!url) {
                throw new Error('API URL não configurada');
            }

            const response = await axios.post(`${url}/contact`, formData);
            setResponseMessage(response.data.message);
            setVisibleResponse(true);
            setStatus(response.data.status);
            console.log(response.data);
            if (response.data.status === 'success') {
                // Reset form on success
                setFormData({
                    name: '',
                    email: '',
                    docType: '' as DocType,
                    document: '',
                    phone: '',
                    type: '' as ContactType,
                    message: ''
                });
            }
        } catch (e) {
            setResponseMessage('Ocorreu um erro ao enviar o formulário. Tente novamente.');
            setStatus('error');
            setVisibleResponse(true);
            console.error(e);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
    <main>
        {visibleResponse && (
            <InfoBox 
                message={responseMessage}
                status={status}
                isVisible={visibleResponse}
                setVisible={setVisibleResponse}
            />
        )}
        <div className="contact-container">
            <div className='contact-us-title'>
                <h3>Entre em Contato Conosco</h3>
                <p>Traga sua empresa para ser nossa parceira!</p>
            </div>
            <div className='contact-us-form'>
                <form name="contact-us" onSubmit={handleSubmit}>
                    <div className="field-group">
                        <label htmlFor="name">Nome:</label>
                        <input 
                            type="text" 
                            id="name" 
                            name="name" 
                            value={formData.name}
                            onChange={handleChange}
                            required 
                        />
                    </div>
                    <div className="field-group">
                        <label htmlFor="email">Email:</label>
                        <input 
                            type="email" 
                            id="email" 
                            name="email" 
                            value={formData.email}
                            onChange={handleChange}
                            required 
                        />
                    </div>
                    <div className="field-group">
                        <label htmlFor="docType">Tipo de Documento:</label>
                        <select 
                            id="docType" 
                            name="docType" 
                            value={formData.docType}
                            onChange={handleChange}
                            required
                        >
                            <option value="" disabled>Selecione o documento</option>
                            <option value="person">CPF</option>
                            <option value="enterprise">CNPJ</option>
                        </select>
                    </div>
                    <div className="field-group">
                        <label htmlFor="document">Documento:</label>
                        <input 
                            type="text" 
                            id='document' 
                            name='document' 
                            value={formData.document}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="field-group">
                        <label htmlFor="phone">Telefone:</label>
                        <input 
                            type="tel" 
                            id='phone' 
                            name='phone' 
                            value={formData.phone}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="field-group">
                        <label htmlFor="type">Motivo do Contato:</label>
                        <select 
                            name="type" 
                            id="type" 
                            value={formData.type}
                            onChange={handleChange}
                            required
                        >
                            <option value="" disabled>Motivo do Contato</option>
                            <option value="partnership">Parceria</option>
                            <option value="buy">Compra</option>
                            <option value="other">Outro</option>
                        </select>
                    </div>
                    <div className="field-group">
                        <label htmlFor="message">Deixe sua mensagem:</label>
                        <textarea 
                            name="message" 
                            id="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        ></textarea>
                    </div>
                    <button 
                        type="submit"
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? 'Enviando...' : 'Enviar'}
                    </button>
                </form>
            </div>
        </div>
    </main>
  )
}

export default Contact