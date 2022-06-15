import React, { useLayoutEffect } from 'react';
React.useLayoutEffect = React.useEffect;

function useHideScroll() {
  useLayoutEffect(() => {
    const { overflowX, overflowY } = getComputedStyle(window.document.body);
    const prevStyles = {
      overflowX,
      overflowY,
    };
    window.document.body.style.overflowX = 'hidden';
    window.document.body.style.overflowY = 'hidden';
    return () => {
      window.document.body.style.overflowX = prevStyles.overflowX;
      window.document.body.style.overflowY = prevStyles.overflowY;
    };
  }, []);
}

export default useHideScroll;
