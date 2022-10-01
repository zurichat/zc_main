import React, { useState, useEffect } from "react";
import AdminPage from "./AdminPage";
import AuthorizePenalty from "./AuthorizePenalty";
import Confirm from "./Confirm";
import Success from "./Success";
import Modal from "react-bootstrap/Modal";
import { VscReport } from "react-icons/vsc";
import { AiOutlineClose } from "react-icons/ai";

export const AdminForm = props => {
  const statedic = {
    step: 1,
    name: "",
    offence: "",
    description: "",
    password: "",
    facebook: "",
    twitter: "",
    github: ""
  };
  const localList = localStorage.getItem("zurimainComplaints");

  const [state, setState] = useState(statedic);

  var usersComplaints = [
    {
      id: 1,
      email: "aascsask@wdw.dsd",
      offence: "hsfsdgsdg",
      description: "vsdvsfdfd",
      date: "vsvvsdgdv",
      anonymous: true,
      authorize: false
    },
    {
      id: 2,
      email: "a221231@wdw.dsd",
      offence: "h1qg23414sdg",
      description: "656vsfdfd",
      date: "eqwrrvvsdgdv",
      anonymous: true,
      authorize: false
    }
  ];

  const [listComplaints, setListComplaints] = useState([]);
  //   const [listComplaints, setListComplaints] = useState(JSON.parse(usersComplaints));

  const [show, setShow] = useState(false);
  const handleClose = () => {
    setState({ ...state, step: 1 });
    setShow(false);
  };
  const handleShow = () => setShow(true);

  const [detailId, setDetailId] = useState(0);

  const [updateSuccess, setUpdateSuccess] = useState(false);
  const updateSuccFunc = () => {
    setUpdateSuccess(true);
  };

  const nextStep = num => {
    const steps = state.step;
    setState({ ...state, step: steps + num });
  };

  const resetStep = () => {
    // const  steps = state.step;
    setState({ ...state, step: 1 });
  };

  const prevStep = () => {
    const steps = state.step;
    setState({ ...state, step: steps - 1 });
  };

  const inputChange = (index, val) => {
    var templist = listComplaints;
    templist[index].authorize = val;
    setListComplaints(templist);
  };

  useEffect(() => {
    if (localList) {
      setListComplaints(JSON.parse(localList));
    }

    // console.log(localList)
  }, [localList]);

  const { step } = state;
  const { name, offence, description, password, facebook, twitter, github } =
    state;
  const values = {
    name,
    offence,
    description,
    password,
    facebook,
    twitter,
    github
  };

  return (
    <>
      <VscReport color="green" onClick={handleShow} />

      <Modal
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header>
          <Modal.Title className="text-success">Zurichat Watches</Modal.Title>
          <AiOutlineClose
            color="green"
            variant="secondary"
            onClick={handleClose}
          />
        </Modal.Header>
        {step === 1 ? (
          <AdminPage
            nextStep={nextStep}
            inputChange={inputChange}
            len={listComplaints.length}
          />
        ) : null}
        {step === 2 ? (
          <AuthorizePenalty
            nextStep={nextStep}
            prevStep={prevStep}
            values={values}
            complaints={listComplaints}
            putComplaints={updateSuccFunc}
            idSettter={setDetailId}
          />
        ) : null}
        {step === 3 ? (
          <Confirm
            nextStep={nextStep}
            prevStep={prevStep}
            inputChange={inputChange}
            complaint={listComplaints[detailId]}
            idx={detailId}
          />
        ) : null}
        {step === 4 ? (
          <Success postSucc={updateSuccess} resetStep={resetStep} />
        ) : null}
      </Modal>
    </>
  );
};

export default AdminForm;
