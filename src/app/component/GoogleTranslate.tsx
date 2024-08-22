import { useEffect } from 'react';
import { useLanguage } from '../Lanuguage/LanguageContext'; // Adjust the path as needed

const GoogleTranslate = () => {
    const { language } = useLanguage();

    useEffect(() => {
        // Create the script element
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
        script.async = true;
        // Append the script to the document
        document.body.appendChild(script);
        // Initialize the Google Translate element
        (window as any).googleTranslateElementInit = () => {
            new (window as any).google.translate.TranslateElement(
                {
                    pageLanguage: language,
                    // includedLanguages: 'en,es,fr' // Uncomment and customize languages if needed
                },
                'google_translate_element'
            );
        };
        // Cleanup the script when the component unmounts
        return () => {
            document.body.removeChild(script);
        };
    }, [language]);

    return (
        <div id="google_translate_element" style={{ position: 'relative' }}>
        </div>
    );
};
export default GoogleTranslate;
