import { useState, useCallback } from 'react';

export type TUseBooleanState = [
  boolean,
  {
    toggle: () => void;
    setTrue: () => void;
    setFalse: () => void;
  }
];

export default function useBooleanState(initialValue: boolean): TUseBooleanState {
  const [value, setValue] = useState<boolean>(initialValue);

  const toggle = useCallback(() => {
    setValue((previous) => !previous);
  }, []);

  const setTrue = useCallback(() => {
    setValue(true);
  }, []);

  const setFalse = useCallback(() => {
    setValue(false);
  }, []);

  return [value, { toggle, setTrue, setFalse }];
}
