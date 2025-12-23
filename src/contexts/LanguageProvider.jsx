import React, { useState, useEffect } from 'react';
import { LanguageContext } from './LanguageContext';

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState(() => {
        const savedLang = localStorage.getItem('preferred-language');
        return savedLang || 'en';
    });

    useEffect(() => {
        localStorage.setItem('preferred-language', language);
    }, [language]);

    const toggleLanguage = () => {
        setLanguage(prev => (prev === 'en' ? 'fr' : 'en'));
    };

    const value = {
        language,
        setLanguage,
        toggleLanguage,
        isEnglish: language === 'en',
        isFrench: language === 'fr',
    };

    return (
        <LanguageContext.Provider value={value}>
            {children}
        </LanguageContext.Provider>
    );
};
