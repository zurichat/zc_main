import React, { useState } from "react"
import { Button, Modal } from "react-bootstrap"
import Select from "react-select"
import makeAnimated from "react-select/animated"
import styles from "./styles/addmodal.module.css"

const AddModal = ({ config }) => {
  const [show, setShow] = useState(false)
  const [selectedMembers, setselectedMembers] = useState([])

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  const animatedComponents = makeAnimated()

  const addMemberHandler = () => {
    config.addMembersEvent(selectedMembers)

    handleShow()
  }

  return (
    <div className={`${styles.wrapper}`}>
      {/* <Button variant="primary" onClick={handleShow}>
        Add User
      </Button> */}
      <Modal
        show={show || config.showModal}
        onHide={handleClose}
        aria-labelledby="contained-modal-title-vcenter"
        centered
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>{config.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="p-0">
          <Select
            className="m-1"
            closeMenuOnSelect={false}
            components={animatedComponents}
            isMulti
            options={config.userList}
            placeholder="Enter a name or email"
            value={selectedMembers}
            onChange={e => {
              setselectedMembers(e)
            }}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="success"
            className={`${styles.button}`}
            onClick={addMemberHandler}
            disabled={selectedMembers.length < 1}
          >
            Add Selected Members
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default AddModal
