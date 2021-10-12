import React, { useState } from "react"
import styles from "./styles/addmodal.module.css"
import { Button, Modal } from "react-bootstrap"
import Select from "react-select"
import makeAnimated from "react-select/animated"

const AddModal = ({ config }) => {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  const animatedComponents = makeAnimated()

  return (
    <div className={`${styles.wrapper}`}>
      {/* {config && <h1>testing </h1>} */}
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>
      <Modal
        show={show}
        onHide={handleClose}
        aria-labelledby="contained-modal-title-vcenter"
        centered
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Remove Me</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Select
            closeMenuOnSelect={false}
            components={animatedComponents}
            isMulti
            options={config.userList}
            placeholder="Enter a name or email"
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Done
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default AddModal
