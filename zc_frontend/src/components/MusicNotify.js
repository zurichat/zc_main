import React, {useState, useEffect} from 'react'
import {Modal} from 'react-bootstrap'
import {BsMusicNote} from 'react-icons/bs'
import { IconContext } from 'react-icons/lib'
import styles from '../styles/MusicNotify.css'

const MusicNotify = () => {
    //addMusic state will update when music is added in the music plugin through an Api or prop
    const [addedMusic, setAddMusic] = useState([]);
    //show state is defined to control the added music pop up notification
    const [show, setShow] = useState(true);
    //handleShow function will set show to false after 3 seconds or once cancelled
    const handleShow =()=> {
        setShow(false);
    }
    //setinterval for 3secs afterwhich the popup fades out
    useEffect(()=> {
        const notification = setInterval(
            handleShow,
            3000
        )
        return ()=> clearInterval(notification);
    }, [addedMusic])
    return (
        <div>
            <Modal show={show} onHide={handleShow}>
                <div className="modal-hold">
                <Modal.Header closeButton>
                    <Modal.Title>
                        <IconContext.Provider value={{style : {
                            "color": "green",
                            "fontSize" : "36px",
                            'position' : "absolute",
                            "left" : "50%",
                            "top": "5px",
                            'transform' : "translateX(-36px)"
                        }}}>
                            <BsMusicNote />
                        </IconContext.Provider>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>
                        song added successfully
                    </p>
                    <h1>
                        Never Stop Listening on <span>Z Music</span>
                    </h1>
                </Modal.Body>
                </div>
            </Modal>
        </div>
    )
}

export default MusicNotify
