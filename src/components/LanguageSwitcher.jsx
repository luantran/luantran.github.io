import { useLanguage } from '../contexts/useLanguage';

function LanguageSwitcher() {
    const { language, setLanguage } = useLanguage();

    return (
        <div className="scale-80 origin-center">
            {/* Mobile */}
            <div className="md:hidden flex items-center bg-white/10 rounded-lg p-1 gap-1">
                <button
                    onClick={() => setLanguage('fr')}
                    className={`px-3 py-1 rounded-md text-xs font-semibold transition-all ${
                        language === 'fr'
                            ? 'bg-blue-500 text-white'
                            : 'text-gray-300 hover:text-white'
                    }`}
                >
                    FR
                </button>
                <button
                    onClick={() => setLanguage('en')}
                    className={`px-3 py-1 rounded-md text-xs font-semibold transition-all ${
                        language === 'en'
                            ? 'bg-blue-500 text-white'
                            : 'text-gray-300 hover:text-white'
                    }`}
                >
                    EN
                </button>
            </div>

            {/* Desktop */}
            <div className="hidden md:flex flex-col items-center bg-white/10 rounded-lg p-1 gap-1">
                <button
                    onClick={() => setLanguage('fr')}
                    className={`px-4 py-2 rounded-md text-sm font-semibold transition-all ${
                        language === 'fr'
                            ? 'bg-blue-500 text-white'
                            : 'text-gray-300 hover:text-white'
                    }`}
                >
                    FR
                </button>
                <button
                    onClick={() => setLanguage('en')}
                    className={`px-4 py-2 rounded-md text-sm font-semibold transition-all ${
                        language === 'en'
                            ? 'bg-blue-500 text-white'
                            : 'text-gray-300 hover:text-white'
                    }`}
                >
                    EN
                </button>
            </div>
        </div>
    );
}

export default LanguageSwitcher;
