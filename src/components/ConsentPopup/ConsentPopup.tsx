import './ConsentPopup.css';
import { useState } from 'react';
import Checkbox from '../Checkbox/Checkbox.tsx';
import { useNavigate } from 'react-router-dom';

export default function ConsentPopup({ isOpen, onClose }: {
    isOpen: boolean;
    onClose: () => void;
}) {
    const navigate = useNavigate();

    const [allowMessages, setAllowMessages] = useState(false);

    if (!isOpen) return null;

    return (
        <div className="consent-popup-overlay">
            <div className="consent-popup">
                <div className="consent-content">
                    <p className="consent-text">
                        Запуская игру вы соглашаетесь с условиями предоставления <span className="green">услуг для мини-приложений</span>
                    </p>

                    <Checkbox
                        label="Разрешить Tap Game присылать мне сообщения"
                        labelColor="#8F939A"
                        checked={allowMessages}
                        onChange={setAllowMessages}
                    />
                </div>

                <div className="consent-buttons">
                    <button className="consent-btn cancel" onClick={onClose}>
                        ОТМЕНА
                    </button>
                    <button className="consent-btn confirm" onClick={() => navigate('/profile-setup')}>
                        ДАЛЕЕ
                    </button>
                </div>
            </div>
        </div>
    );
}