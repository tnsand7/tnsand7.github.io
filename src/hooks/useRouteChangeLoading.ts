import { useEffect } from 'react';
// import { useRouter } from 'next/dist/client/router';
import useBooleanState from 'hooks/common/useBooleanState';

export default function useRouteChangeLoading() {
  // const router = useRouter();
  const [isLoading, { setFalse }] = useBooleanState(true);

  useEffect(() => {
    setTimeout(() => {
      setFalse();
    }, 1500);
  }, [setFalse]);

  /*
  useEffect(() => {
    router.events.on('routeChangeComplete', toggleIsLoading);
    return () => {
      router.events.off('routeChangeComplete', toggleIsLoading);
    };
  }, [router.events, toggleIsLoading]);

  useEffect(() => {
    router.events.on('routeChangeStart', toggleIsLoading);
    return () => {
      router.events.off('routeChangeStart', toggleIsLoading);
    };
  }, [router.events, toggleIsLoading]);
  */

  return { isLoading };
}
