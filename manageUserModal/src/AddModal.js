import React, { useState } from "react"
import { Button, Modal } from "react-bootstrap"
import Select from "react-select"
import makeAnimated from "react-select/animated"
import styles from "./styles/addmodal.module.css"

const defaultConfig = {
  title: "Add users",
  type: "addmodal",
  userList: [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" }
  ],
  addMembersEvent: users => {
    // console.warn(users)
  },
  show: true,
  handleClose: function () {
    this.show = false
  }
}

const AddModal = ({ config = defaultConfig }) => {
  // const [show, setShow] = useState(false)
  // const handleClose = () => setShow(false)
  // const handleShow = () => setShow(true)

  const [selectedMembers, setselectedMembers] = useState([])
  const addMemberHandler = () => {
    config.addMembersEvent(selectedMembers)
    // handleShow()
  }
  const animatedComponents = makeAnimated()

  return (
    <div className={`${styles.wrapper}`}>
      <Modal
        show={config.show}
        onHide={config.handleClose}
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
