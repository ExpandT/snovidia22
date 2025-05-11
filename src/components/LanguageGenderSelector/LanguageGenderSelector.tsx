import { useState } from 'react';
import './LanguageGenderSelector.css'
import Checkbox from '../Checkbox/Checkbox.tsx';
import walletIcon from '../../assets/wallet-solid.svg';

export default function LanguageGenderSelector() {
    const [step, setStep] = useState<1 | 2>(1); // 1 - language selection, 2 - gender selection
    const [selectedLanguage, setSelectedLanguage] = useState<string | null>(null);
    const [selectedGender, setSelectedGender] = useState<string | null>(null);

    const languages = ['Русский', 'English', 'Espanol', 'Francaic', 'Deutch'];
    const genders = ['Женский', 'Мужской'];

    const handleLanguageSelect = (language: string) => {
        setSelectedLanguage(language);
    };

    const handleGenderSelect = (gender: string) => {
        setSelectedGender(gender);
    };

    const test = () => {

    }

    const handleNext = () => {
        if (step === 1 && selectedLanguage) {
            setStep(2);
        } else if (step === 2 && selectedGender) {
            console.log('Selected language:', selectedLanguage);
            console.log('Selected gender:', selectedGender);
        }
    };

    return (
        <div className="container">
            {step === 1 ? (
                <div className="language-selector-container">
                    <h2 className="title">Выберите язык</h2>
                    <div className="options">
                        {languages.map((language) => (
                            <>
                                <div
                                    className="option"
                                    key={language}
                                    onClick={() => handleLanguageSelect(language)}
                                >
                                    <Checkbox
                                        label={language}
                                        checked={language === selectedLanguage}
                                        onChange={test}
                                    />

                                </div>

                                <div className="divider"></div>
                            </>
                        ))}
                    </div>

                    <button className="connect-wallet-button">
                        <img src={walletIcon} alt="wallet-solid"/>
                        Подключить кошелёк TON
                    </button>

                    <button
                        onClick={handleNext}
                    >
                        ДАЛЕЕ
                    </button>
                </div>
            ) : (
                <>
                    <div className="gender-selector-container">
                        <h2 className="title">Выберите ваш пол</h2>
                        <div className="options">
                            {genders.map((gender) => (
                                <>
                                    <div
                                        key={gender}
                                        className="option"
                                        onClick={() => handleGenderSelect(gender)}
                                    >

                                        <Checkbox
                                            label={gender}
                                            checked={gender === selectedGender}
                                            onChange={test}
                                        />
                                    </div>
                                    <div className="divider"></div>
                                </>
                            ))}
                        </div>

                        <button
                            onClick={handleNext}
                        >
                            ДАЛЕЕ
                        </button>
                    </div>
                </>
            )}
        </div>
    );
};