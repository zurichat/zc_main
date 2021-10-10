import { useState, useEffect } from 'react';


const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia(query);

    if(mql.matches !== matches) {
      setMatches(mql.matches)
    }

    const listener = () => {
      setMatches(mql.matches);
    };

    mql.addEventListener('change', listener);

    return () => mql.removeEventListener('change', listener);

  }, [matches, query])
  
  return matches;
}

export default useMediaQuery;