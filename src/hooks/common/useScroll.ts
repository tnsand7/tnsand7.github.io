import { RefObject, useState, useEffect } from 'react';

export type TUseScrollParams = {
  ref?: RefObject<HTMLDivElement> | null;
  height?: number;
};

export default function useScroll({ ref = null, height = 260 }: TUseScrollParams): boolean {
  const [fixed, setFixed] = useState(false);
  const scrollHeight = ref?.current?.offsetTop ?? height;

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.pageYOffset;

      if (scrollY > scrollHeight) {
        setFixed(true);
      } else {
        setFixed(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrollHeight]);

  return fixed;
}
