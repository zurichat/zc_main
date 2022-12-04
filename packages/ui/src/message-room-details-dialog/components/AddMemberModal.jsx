import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { RiCloseFill } from "react-icons/ri";

const AddMemberModal = props => {
  const {
    show,
    handleShow,
    handleClose,
    searchList,
    addMembersEvent,
    isLoading
  } = props;

  const [selectedMembers, setselectedMembers] = useState([]);
  const addMemberHandler = () => {
    addMembersEvent(selectedMembers);
    console.log(selectedMembers);
    setselectedMembers([]);
    handleClose();
  };
  const animatedComponents = makeAnimated();

  return (
    <div>
      <Modal
        show={show}
        onHide={handleClose}
        aria-labelledby="contained-modal-title-vcenter"
        centered
        // backdrop="static"
        keyboard={false}
      >
        <Modal.Body className="p-0">
          <div className="d-flex w-100 my-3">
            <div className="ms-3">
              <Modal.Title>{"Add members"}</Modal.Title>
            </div>
            <div className="ms-auto me-3" onClick={handleClose}>
              <RiCloseFill size="2em" />
            </div>
          </div>
          <Select
            className="mx-3 text-xs"
            closeMenuOnSelect={false}
            components={animatedComponents}
            isMulti
            options={searchList}
            isLoading={isLoading}
            placeholder="Enter a name or email"
            value={selectedMembers}
            onChange={e => {
              setselectedMembers(e);
            }}
          />
          <div className="d-flex w-100">
            <div className="ms-auto me-3 my-3">
              <Button
                variant="success"
                onClick={addMemberHandler}
                disabled={selectedMembers.length < 1}
              >
                Add Selected Members
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default AddMemberModal;
