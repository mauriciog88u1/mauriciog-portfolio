import { useState, useEffect } from 'react';

function useTypingEffect(text, speed) {
    const [displayedText, setDisplayedText] = useState('');
    const [index, setIndex] = useState(0);

    useEffect(() => {
        if (index < text.length) {
            const timer = setTimeout(() => {
                setDisplayedText(text.substring(0, index + 1));
                setIndex(index + 1);
            }, speed);

            // Cleanup timeout on component unmount
            return () => clearTimeout(timer);
        }
    }, [text, speed, index]);

    return displayedText;
}

export default useTypingEffect;
