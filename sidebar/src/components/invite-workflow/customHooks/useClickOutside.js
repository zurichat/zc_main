import { useRef, useEffect } from "react";

//Custom hook to disables modals that have a click event outside them
const useClickOutside = (handler) => {
    const domNode = useRef();

  useEffect(() => {
    const maybeHandler = (event) => {
      if (domNode.current && !domNode.current.contains(event.target)) {
        handler();
      }
    };
    document.addEventListener("mousedown", maybeHandler);

    return () => {
      document.removeEventListener("mousedown", maybeHandler);
    };
  });

  return domNode;
};

export default useClickOutside;
