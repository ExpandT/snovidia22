import { useState } from 'react';
import './LanguageGenderSelector.css'
import Checkbox from '../Checkbox/Checkbox.tsx';
import walletIcon from '../../assets/wallet-solid.svg';
import maleImage from '../../assets/girl-image.svg';
import femaleImage from '../../assets/boy-image.svg';

export default function LanguageGenderSelector() {
    const [step, setStep] = useState<1 | 2>(1);
    const [selectedLanguage, setSelectedLanguage] = useState<string | null>(null);
    const [selectedGender, setSelectedGender] = useState<string | null>(null);
    const [showGenderImage, setShowGenderImage] = useState(false);

    const languages = ['Русский', 'English', 'Espanol', 'Francaic', 'Deutch'];
    const genders = ['Женский', 'Мужской'];

    const handleLanguageSelect = (language: string) => {
        setSelectedLanguage(language);
    };

    const handleGenderSelect = (gender: string) => {
        setSelectedGender(gender);
        setShowGenderImage(true);
    };

    const test = () => {}

    const handleNext = () => {
        if (step === 1 && selectedLanguage) {
            setStep(2);
        } else if (step === 2 && selectedGender) {
            console.log('Selected language:', selectedLanguage);
            console.log('Selected gender:', selectedGender);
            // Здесь можно добавить логику перехода дальше
        }
    };

    return (
        <div className="container">
            {step === 1 ? (
                <div className="language-selector-container">
                    <h2 className="title">Выберите язык</h2>
                    <div className="options">
                        {languages.map((language, index) => (
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
                                {index !== languages.length - 1 && <div className="divider"></div>}
                            </>
                        ))}
                    </div>

                    <button className="connect-wallet-button">
                        <img src={walletIcon} alt="wallet-solid"/>
                        Подключить кошелёк TON
                    </button>

                    <button
                        className="next-btn"
                        onClick={handleNext}
                    >
                        ДАЛЕЕ
                    </button>
                </div>
            ) : (
                <>
                    {
                        !showGenderImage && (
                        <div className="gender-image-container">
                                <img src={femaleImage} alt="maleImage" className="female-image" />
                                <img src={maleImage} alt="maleImage" className="male-image" />

                        </div>
                    )
                    }

                    {
                        showGenderImage && (
                            <div className="gender-image-container">
                                <img src={selectedGender === 'Мужской' ? femaleImage : maleImage} alt="maleImage" style={{
                                    marginLeft: 0
                                }} className="female-image" />
                            </div>
                        )
                    }
                    <div className="gender-selector-container">
                        <h2 className="title">Выберите ваш пол</h2>
                        <div className="options">
                            {genders.map((gender, index) => (
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
                                    {index !== genders.length - 1 && <div className="divider"></div>}
                                </>
                            ))}
                        </div>

                        <button
                            className="next-btn"
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