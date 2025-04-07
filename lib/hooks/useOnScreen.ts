import { useEffect } from 'react';

type Callback = () => void;

const useOnScreen = (
  ref: React.RefObject<HTMLElement>,
  offset: number = 0,
  onEnter: Callback,
  onLeave: Callback
) => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          onEnter();
        } else {
          onLeave();
        }
      },
      {
        root: null, // Use the viewport as the root
        rootMargin: `${offset}px`, // Use the offset value
        threshold: 0 // Trigger when the element is in view
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [ref, offset, onEnter, onLeave]);
};

export default useOnScreen;
