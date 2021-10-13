import React, { useRef, useEffect, useCallback, useState } from 'react';
import { func } from 'prop-types';
import styled from 'styled-components';



const ModalBackground = styled.div`
        width: 10%;
        height: 20vh;
        background: white;
        display: flex;
        justify-content: center;
        position: absolute;
        z-index: 16;
        top: 45%;
        left: 8%;
        border-radius: 13px;
`

const ModalWrapper = styled.div`
`;

const FindText = styled.div`
  font-size:15px;
  margin-top: 3%;
  margin-left: 7%;

`

export const TabletChip = styled.p`
    display: inline-block;
    font-weight: 500;
    font-size: 12px;
    line-height: 18px;
    padding: 6px 12px;
    border-radius: 14px;
    margin-right: 26px;
    margin-left: 6%;
    background: #ADD8E6;
    color: '#718596';
    border:  '1px solid #E2E9F0'
`;



const SearchModal = ({ showSearchModal, setShowSearchModal }) => {
    const [search, setSearch] = useState("")
    const modalRef = useRef();

    function changeBackground(e) {
        e.target.style.background = '#6F8FAF';
    }

    function change(e) {
        e.target.style.background = 'white';
    }

    const closeModal = e => {
        if (modalRef.current === e.target) {
            setShowSearchModal(false);
        }
    };

    const keyPress = useCallback(
        e => {
            if (e.key === 'Escape' && showSearchModal) {
                setShowSearchModal(false);
                // eslint-disable-next-line no-console
                console.log('I pressed');
            }
        },
        [setShowSearchModal, showSearchModal]
    );

    useEffect(
        () => {
            document.addEventListener('keydown', keyPress);
            return () => document.removeEventListener('keydown', keyPress);
        },
        [keyPress]
    );

    function useOnClickOutside(modalRef, handler) {
        useEffect(
            () => {
                const listener = (event) => {
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
            },
            [modalRef, handler]
        );
    }

    useOnClickOutside(modalRef, () => setShowSearchModal(false));
    return (
        <>
            {showSearchModal ? (
                <ModalBackground onClick={closeModal} >
                    <ModalWrapper showModal={showSearchModal} ref={modalRef}>
                        <FindText onMouseOut={change} onMouseOver={changeBackground}>Most Relevant</FindText>
                        <FindText onMouseOut={change} onMouseOver={changeBackground} v>Newest Messages</FindText>
                        <FindText onMouseOut={change} onMouseOver={changeBackground}>Oldest Messages</FindText>
                    </ModalWrapper>
                </ModalBackground>
            ) : null}
        </>
    );
};

SearchModal.propTypes = {
    showModal: func,
    setShowModal: func,
};

export default SearchModal






