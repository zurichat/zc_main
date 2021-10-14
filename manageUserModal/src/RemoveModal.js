// import React, { useState } from "react"
import React from "react"
import styles from "./styles/removemodal.module.css"
import { Button, Modal } from "react-bootstrap"
import { X } from "react-feather"
// import Select from "react-select"
// import makeAnimated from "react-select/animated"

const defaultConfig = {
  currentMembers: [
    {
      id: "xxx",
      name: "xxx",
      image:
        "https://www.kemhospitalpune.org/wp-content/uploads/2020/12/Profile_avatar_placeholder_large.png"
    }
  ],
  removeFunction: id => console.warn("REMOVE >>", id),
  show: true,
  handleClose: function () {
    this.show = false
  },
  title: "Remove users"
}

const RemoveModal = ({ config = defaultConfig }) => {
  const { currentMembers, removeFunction, title, show, handleClose } = config

  // const [show, setShow] = useState(false)
  // const handleClose = () => setShow(false)
  // const handleShow = () => setShow(true)
  // const animatedComponents = makeAnimated()

  // const options = currentMembers.map(m => {
  //     return {
  //         value: m.id,
  //         label: m.name
  //     }
  // })

  return (
    <div className={`${styles.wrapper}`}>
      {/* <Button variant="primary" onClick={handleShow}>
                Launch demo modal
            </Button> */}
      <Modal
        show={show}
        onHide={handleClose}
        aria-labelledby="contained-modal-title-vcenter"
        centered
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* <Select
                        closeMenuOnSelect={false}
                        components={animatedComponents}
                        isMulti
                        options={options}
                        placeholder="Add members to remove"
                    />
                    <div className="mb-2"></div> */}
          {currentMembers.map((m, index) => (
            <div
              className="container mb-2 d-flex justify-content-between"
              key={m.id || index}
            >
              <div className="">
                <img
                  src={m.image}
                  alt=""
                  className="rounded"
                  width="45px"
                  height="45px"
                />
                <span className="mx-2">{m.name}</span>
              </div>
              <Button
                size="sm"
                className=""
                variant="outline-danger"
                onClick={() => removeFunction(m.id)}
              >
                <X strokeWidth={1} />
              </Button>
            </div>
          ))}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Done
          </Button>
          {/* <Button variant="primary" onClick={handleClose}>
                        Delete Selected
                    </Button> */}
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default RemoveModal
