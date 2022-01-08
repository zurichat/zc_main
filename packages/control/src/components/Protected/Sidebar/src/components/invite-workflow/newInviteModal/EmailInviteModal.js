import React, { useState, useRef, useEffect } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  ChakraProvider
} from "@chakra-ui/react";
import axios from "axios";
import { BASE_URL } from "@zuri/utilities";
import { Step1 } from "./Step1";
import { Step2 } from "./Step2";
import { Loader } from "./Loader";

export const EmailInviteModal = props => {
  const currentWorkspace = localStorage.getItem("currentWorkspace") || null;
  const userToken = sessionStorage.getItem("token") || null;
  const initialRef = useRef();
  const [listEmail, setListEmail] = useState([]);
  const [inviteStep, setInviteStep] = useState(1);
  const [forerr, setForerr] = useState("");
  const [data, setData] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  var orgvalEmails = ["vsbsbf@gmail.com"];

  const sendInvites = async invites => {
    setLoading(true);
    axios
      .post(
        `${BASE_URL}/organizations/${currentWorkspace}/send-invite`,
        {
          emails: invites
        },
        {
          headers: {
            Authorization: `Bearer ${userToken}`
          }
        }
      )
      .then(response => {
        setData(response.data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message || "Unexpected Error!");
        setLoading(false);
        throw new Error("Invalid information");
      });
  };

  const nextIviteStep = () => {
    const steps = inviteStep;
    setInviteStep(steps + 1);
  };

  const resetStep = () => {
    setInviteStep(1);
  };

  const onClo = () => {
    props.onDismiss();
    resetStep();
  };

  const handleDelete = index => {
    const lists = listEmail;
    setListEmail(lists.filter((_mail, idx) => idx !== index));
    setForerr("");
  };

  const sendButton = () => {
    if (listEmail.length === 0) {
      setForerr("No email(s) to send invites to. ");
    } else if (listEmail.some(em => em.error === true)) {
      setForerr("Please clear all errors before proceeding.");
    } else {
      const finEmails = [];
      listEmail.map(mail => finEmails.push(mail.mail));

      if (currentWorkspace && userToken) {
        sendInvites(finEmails);
      } else {
        throw new Error("Invalid information");
      }

      if (!loading) {
        nextIviteStep();
      }
    }
  };

  const validateEmail = value => {
    let error = "";
    let re1 =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let re2 = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{1,}$/i;
    if (!re1.test(value)) {
      error = "Invalid email address";
      // setForerr(error)
    }

    return error;
  };

  useEffect(() => {}, [data, loading, error]);

  return (
    <ChakraProvider>
      <Modal isCentered isOpen={props.isOpen} onClose={onClo} size="xl">
        <ModalOverlay />

        {inviteStep === 1 ? (
          <Step1
            name={props.name}
            onClo={onClo}
            forerr={forerr}
            listEmail={listEmail}
            handleDelete={handleDelete}
            setForerr={setForerr}
            setListEmail={setListEmail}
            orgvalEmails={orgvalEmails}
            validateEmail={validateEmail}
            currentWorkspace={currentWorkspace}
            sendButton={sendButton}
          />
        ) : null}

        {inviteStep === 2 ? (
          <ModalContent>
            <ModalCloseButton onClick={onClo} />
            <ModalBody>
              {loading ? (
                <Loader />
              ) : (
                <Step2
                  name={props.name}
                  listEmail={listEmail}
                  error={error}
                  onDismiss={props.onDismiss}
                  resetStep={resetStep}
                />
              )}
            </ModalBody>
          </ModalContent>
        ) : null}
      </Modal>
    </ChakraProvider>
  );
};

export default EmailInviteModal;
