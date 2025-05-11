import './App.css'
import { Route, Routes } from 'react-router-dom';
import BlinkScreen from './components/BlinkScreen/BlinkScreen.tsx';
import LanguageGenderSelector from './components/LanguageGenderSelector/LanguageGenderSelector.tsx';

function App() {
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
