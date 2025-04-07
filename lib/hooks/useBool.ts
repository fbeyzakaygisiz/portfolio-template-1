import { useState } from 'react';

function useBool(defaultVal: boolean = false) {
  const [value, setValue] = useState<boolean>(defaultVal);

  const toggle = () => {
    setValue((prev: boolean) => !prev);
  };

  const setTrue = () => {
    setValue(true);
  };

  const setFalse = () => {
    setValue(false);
  };

  return { value, toggle, setTrue, setFalse };
}

export default useBool;
