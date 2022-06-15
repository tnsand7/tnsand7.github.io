import { useEffect } from 'react';

export default function useOffsetParentClick(
  ref: React.RefObject<HTMLElement>,
  handler: () => void
): void {
  useEffect(() => {
    const parentEl = ref.current?.offsetParent ?? null;
    const parentMousedownListener = (event: Event) => {
      if (parentEl === event.target) {
        handler();
      }
    };
    if (parentEl) {
      parentEl.addEventListener('mousedown', parentMousedownListener);
    }
    return () => {
      if (parentEl) {
        parentEl.removeEventListener('mousedown', parentMousedownListener);
      }
    };
  }, [ref, handler]);
}
