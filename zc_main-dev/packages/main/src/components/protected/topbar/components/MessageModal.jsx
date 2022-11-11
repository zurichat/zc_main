import React, { useRef, useEffect, useCallback, useState } from "react";
import styled from "styled-components";

const MessageModal = () => {
  const [showMessageModal, setShowMessageModal] = useState(false);

  const openModal = () => {
    setShowMessageModal(prev => !prev);
  };

  const modalRef = useRef();

  const closeModal = e => {
    if (modalRef.current === e.target) {
      setShowMessageModal(false);
    }
  };

  const keyPress = useCallback(
    e => {
      if (e.key === "Escape" && showMessageModal) {
        setShowMessageModal(false);
      }
    },
    [setShowMessageModal, showMessageModal]
  );

  useEffect(() => {
    document.addEventListener("keydown", keyPress);
    return () => document.removeEventListener("keydown", keyPress);
  }, [keyPress]);

  function useOnClickOutside(modalRef, handler) {
    useEffect(() => {
      const listener = event => {
        // Do nothing if clicking ref's element or descendent elements
        if (!modalRef.current || modalRef.current.contains(event.target)) {
          return;
        }
        handler(event);
      };
      document.addEventListener("mousedown", listener);
      document.addEventListener("touchstart", listener);
      return () => {
        document.removeEventListener("mousedown", listener);
        document.removeEventListener("touchstart", listener);
      };
    }, [modalRef, handler]);
  }

  useOnClickOutside(modalRef, () => setShowMessageModal(false));

  const IconWrapper = styled.div`
    display: flex;
    float: left;
  `;
  const TopText = styled.p`
    font-size: 15px;
    margin-left: 4px;
  `;

  const CardWrapper = styled.div`
    padding: 30px 10px 80px 10px;
    transition: 0.3s;
    width: 90%;
    margin-top: 4%;
    margin-left: 5%;
    border-radius: 9px;
    background-color: white;
  `;
  // import this on the component you want to display it

  // setState
  // const [showMessageModal, setShowMessageModal] = useState(false);

  // Modal function

  // const openModal = () => {
  //     setShowModal(prev => !prev);
  //   };

  //    onClick on the item you want to popup the modal
  //   onClick={openModal}

  // import the component like this
  // <MessageModal showMessageModal={showMessageModal} setShowMessageModal={setShowMessageModal}/>

  return (
    <>
      {showMessageModal && (
        <CardWrapper
          onClick={closeModal}
          showMesssageModal={showMessageModal}
          ref={modalRef}
        >
          <strong>Person Id</strong> - Created at
          <br />
          <IconWrapper>
            Image
            <TopText>
              <strong>Created by</strong>
              <br />
              <strong>Room name </strong>
              <p>Content of the message</p>
              <p>destination Url</p>
            </TopText>
          </IconWrapper>
        </CardWrapper>
      )}
    </>
  );
};

export default MessageModal;
