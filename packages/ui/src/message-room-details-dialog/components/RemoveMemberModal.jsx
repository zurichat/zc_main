import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { RiCloseFill } from "react-icons/ri";

const RemoveMemberModal = props => {
  const { show, handleShow, handleClose, member, removeMemberEvent, title } =
    props;

  // const { _id, email } = member;
  const { value, label } = member;

  const removeMemberHandler = id => {
    removeMemberEvent(id);
    handleClose();
  };

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
              <Modal.Title>{title || "Remove member"}</Modal.Title>
            </div>
            <div className="ms-auto me-3" onClick={handleClose}>
              <RiCloseFill size="2em" />
            </div>
          </div>

          <div className="d-flex w-100">
            <div className="mx-3">
              {/* Are you sure you wish to remove {email} from room? */}
              Are you sure you wish to remove {label} from room?
            </div>
          </div>
          <div className="d-flex w-100">
            <div className="ms-auto me-3 my-3">
              <Button
                variant="secondary"
                onClick={handleClose}
                className="me-3"
              >
                Cancel
              </Button>

              <Button
                variant="danger"
                onClick={() => {
                  // removeMemberHandler(_id);
                  removeMemberHandler(value);
                }}
              >
                Remove
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default RemoveMemberModal;
