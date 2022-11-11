import { useEffect, useRef, useState } from "react";

export default function useDetectOutsideClick(initState) {
  const triggerRef = useRef(null); // optional
  const nodeRef = useRef(null); // required

  const [showModal, setShowModal] = useState(initState);
  const handleClickOutside = event => {
    //if click is on trigger element, toggle modal
    if (triggerRef.current && triggerRef.current.contains(event.target)) {
      return setShowModal(!showModal);
    }

    //if modal is open and click is outside modal, close it
    if (nodeRef.current && !nodeRef.current.contains(event.target)) {
      return setShowModal(false);
    }
  };
  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  });
  return {
    triggerRef,
    nodeRef,
    show: showModal,
    setShow: setShowModal
  };
}
