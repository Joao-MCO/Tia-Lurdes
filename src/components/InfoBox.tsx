import React, { useEffect } from 'react'
import '../styles/InfoBox.css'

interface InfoBoxProps {
    message: string;
    status: string;
    isVisible: boolean;
    setVisible: (visible: boolean) => void;
    title?: string;
}

const InfoBox: React.FC<InfoBoxProps> = ({ message, status, isVisible, setVisible, title }) => {
    useEffect(() => {
        if (!isVisible) return;
        const timer = setTimeout(() => setVisible(false), 5000);
        return () => clearTimeout(timer);
    }, [isVisible, setVisible]);

    if (!isVisible) return null;

    const onClose = () => setVisible(false);

    return (
        <div className="info-box" id={status} aria-live="polite">
            <div>
                {title && <h3>{title}</h3>}
                <p>{message}</p>
            </div>
            <button 
                className='close-btn' 
                onClick={onClose}
                aria-label="Close message"
            >
                &times;
            </button>
        </div>
    );
};

export default InfoBox;