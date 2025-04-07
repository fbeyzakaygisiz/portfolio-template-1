import { useEffect, useCallback } from "react";

type OnOutsideClickCallback = () => void;

const useOutsideClick = <T extends HTMLElement | null>(
  ref: React.RefObject<T> | null,
  onOutsideClick: OnOutsideClickCallback
) => {


  const handleClick = useCallback(
    (event: MouseEvent) => {
      if (ref?.current && !ref.current.contains(event.target as Node)) {
        onOutsideClick();
      }
    },
    [ref, onOutsideClick] // `useCallback` ensures `handleClick` remains stable
  );

  useEffect(() => {
    if (ref?.current) {
      document.addEventListener("mousedown", handleClick);
      return () => document.removeEventListener("mousedown", handleClick);
    }
  }, [handleClick, ref]); // Only re-run when `handleClick` or `ref` changes
};

export default useOutsideClick;
