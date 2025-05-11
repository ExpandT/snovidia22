import './BlinkScreen.css';
import { useState } from 'react';
import ConsentPopup from '../ConsentPopup/ConsentPopup.tsx';

export default function BlinkScreen() {
    const [showConsent, setShowConsent] = useState(false);
    const [isBlinking, setIsBlinking] = useState(false);
    const [blinkCount, setBlinkCount] = useState(0);
    const [buttonText, setButtonText] = useState('Моргнуть');

    const handleBlink = () => {
        if (blinkCount < 1) {
            setIsBlinking(true);
            setBlinkCount(blinkCount + 1);

            setTimeout(() => {
                setIsBlinking(false);
            }, 150);
        } else {
            setIsBlinking(true);
            setBlinkCount(0);
            setButtonText('Проснуться');

            setTimeout(() => {
                setIsBlinking(false);
            }, 150);
        }
    };

    const handleWakeUp = () => {
        setBlinkCount(0);
        setShowConsent(true);
    };

    return (
        <div className={`blink-screen-container ${isBlinking ? 'blinking' : ''}`}>
            <button
                className="action-btn"
                onClick={buttonText === 'Моргнуть' ? handleBlink : handleWakeUp}
            >
                {buttonText}
            </button>

            <ConsentPopup
                isOpen={showConsent}
                onClose={() => setShowConsent(false)}
            />
        </div>
    );
}