import { useEffect, useState } from "react";

/*
 *a custom react hook to match media size according to query
 */
const useMatchMedia = query => {
  const [matches, setMatches] = useState(window.matchMedia(query).matches);

  useEffect(() => {
    const handler = () => {
      setMatches(testMatches.matches);
      // console.log('matches the query', testMatches.matches)
    };

    const testMatches = window.matchMedia(query);

    testMatches.addEventListener("change", handler);

    return () => {
      testMatches.removeEventListener("change", handler);
    };
  }, [query]);

  return matches;
};

export default useMatchMedia;
