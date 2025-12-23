/**
 * Helper function to get translated text from bilingual data
 * @param {string|object} value - Either a string or an object with 'en' and 'fr' keys
 * @param {string} language - Current language ('en' or 'fr')
 * @returns {string} - The translated text
 */
export const getText = (value, language = 'en') => {
    // If it's already a string (not translated), return as is
    if (typeof value === 'string') {
        return value;
    }

    // If it's an object with language keys, return the appropriate one
    if (value && typeof value === 'object') {
        return value[language] || value.en || '';
    }

    return '';
};

/**
 * Helper function to get translated array from bilingual data
 * @param {array|object} value - Either an array or an object with 'en' and 'fr' keys containing arrays
 * @param {string} language - Current language ('en' or 'fr')
 * @returns {array} - The translated array
 */
export const getArray = (value, language = 'en') => {
    // If it's already an array (not translated), return as is
    if (Array.isArray(value)) {
        return value;
    }

    // If it's an object with language keys, return the appropriate array
    if (value && typeof value === 'object') {
        return value[language] || value.en || [];
    }

    return [];
};