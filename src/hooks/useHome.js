import {useState, useEffect, useRef, useCallback} from 'react';

export function useTypingEffect(text, speed) {
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
export const useScrollFadeIn = () => {
    const domRef = useRef();

    const handleScroll = useCallback(([entry]) => {
        const { current } = domRef;

        if (entry.isIntersecting) {
            current.style.transitionProperty = 'opacity transform';
            current.style.transitionDuration = '1s';
            current.style.transitionTimingFunction = 'ease-out';
            current.style.opacity = 1;
            current.style.transform = 'translateY(0px)';
        }
    }, []);

    useEffect(() => {
        const { current } = domRef;
        const observer = new IntersectionObserver(handleScroll, { threshold: 0.7 });

        if (current) {
            observer.observe(current);
        }

        return () => {
            if (current) {
                observer.unobserve(current);
            }
        };
    }, [handleScroll]);

    return {
        ref: domRef,
        style: { opacity: 0, transform: 'translateY(20px)' }
    };
};


