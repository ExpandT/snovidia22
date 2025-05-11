import './App.css'
import { Route, Routes } from 'react-router-dom';
import BlinkScreen from './components/BlinkScreen/BlinkScreen.tsx';
import LanguageGenderSelector from './components/LanguageGenderSelector/LanguageGenderSelector.tsx';
import { useEffect } from 'react';
import WebApp from '@twa-dev/sdk';

function App() {
    useEffect(() => {
        if (WebApp.initDataUnsafe?.user) {
            const user = WebApp.initDataUnsafe.user;
            console.log('User:', user);
        }
        WebApp.expand();
    }, []);

    return (
        <div>
            <Routes>
                <Route path="/" element={<BlinkScreen />} />
                <Route path="profile-setup" element={<LanguageGenderSelector />}/>
            </Routes>
        </div>
    );
}

export default App
