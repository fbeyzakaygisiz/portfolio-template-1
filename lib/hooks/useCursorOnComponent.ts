import { useEffect, useState, RefObject } from 'react';

interface UseCursorOnComponentProps {
    ref: RefObject<HTMLElement>;
    onCursorEnter?: () => void;
    onCursorOut?: () => void;
}

const useCursorOnComponent = ({ ref, onCursorEnter, onCursorOut }: UseCursorOnComponentProps) => {
    const [isCursorOn, setIsCursorOn] = useState<boolean>(false);

    useEffect(() => {
        const handleMouseEnter = () => {
            setIsCursorOn(true);
            if (onCursorEnter) onCursorEnter();
        };

        const handleMouseLeave = () => {
            setIsCursorOn(false);
            if (onCursorOut) onCursorOut();
        };

        const element = ref.current;

        if (element) {
            element.addEventListener('mouseenter', handleMouseEnter);
            element.addEventListener('mouseleave', handleMouseLeave);
        }

        return () => {
            if (element) {
                element.removeEventListener('mouseenter', handleMouseEnter);
                element.removeEventListener('mouseleave', handleMouseLeave);
            }
        };
    }, [ref, onCursorEnter, onCursorOut]);

    return isCursorOn;
};

export default useCursorOnComponent;
