import { useEffect, useState } from 'react';

const useMediaQuery = (maxWidth: number) => {
  // SSR-safe initial value: no window access
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    // If window is not available (SSR), exit early
    if (typeof window === 'undefined') return;

    // Listener function
    const handleResize = () => {
      setMatches(window.innerWidth <= maxWidth);
    };

    // Run immediately on client mount
    handleResize();

    // Add listener
    window.addEventListener('resize', handleResize);

    // Cleanup on unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [maxWidth]); // safe and required

  return matches;
};

export default useMediaQuery;
