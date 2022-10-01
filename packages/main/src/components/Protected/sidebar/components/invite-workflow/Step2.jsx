import React, { useEffect } from "react";
import { Container, Text } from "@chakra-ui/react";
import { CheckCircleIcon, Icon } from "@chakra-ui/icons";
import { FiUserPlus, FiSend } from "react-icons/fi";
import { AiFillCloseCircle } from "react-icons/ai";

export const Step2 = ({
  name,
  listEmail,
  error,
  onDismiss,
  resetStep,
  setListEmail
}) => {
  // console.log(listEmail)

  useEffect(() => {
    return () => {
      setListEmail([]);
    };
  });

  return (
    <>
      <Container m={2} centerContent data-cy="invite_to_workspace_modal_step2">
        {!error ? (
          <CheckCircleIcon
            w={10}
            h={10}
            color="green.500"
            data-cy="invite_to_workspace_modal_success_icon"
          />
        ) : (
          <Icon as={AiFillCloseCircle} w={10} h={10} color="red.500" />
        )}

        <Text color="black.300" fontSize="2xl">
          {!error ? "Sent!" : "Not Sent!"}
        </Text>
      </Container>
      <Container className="d-flex">
        <Icon as={FiUserPlus} w={10} />
        <div className="d-flex">
          <Text color="black.300" fontSize="md">
            {listEmail?.map((e_mail, index) => (
              <b key={index} color={!error ? "green" : "red"}>
                {e_mail.mail},{" "}
              </b>
            ))}
            {!error ? (
              <>
                has been invited as a <b>member</b> of <b>{name}</b>. They will
                receive but not be able to reply messages till they join
              </>
            ) : (
              <>
                has not been invited as a <b>member</b> of <b>{name}</b>.
              </>
            )}
          </Text>
        </div>
      </Container>
      <div className={`mt-4 d-flex justify-content-between `}>
        <p className={`mt-1 flex-grow-1`} style={{ fontSize: "0.5rem" }}>
          <Icon mr="1" as={FiSend} />
          <span style={{ color: "black", fontSize: "15px" }}>
            See previous invitations
          </span>
        </p>
        <button
          onClick={resetStep}
          type="button"
          className={`btn btn-outline-success mx-2 `}
          style={{ fontSize: "0.7rem" }}
        >
          Send more invites
        </button>
        <button
          onClick={() => {
            onDismiss();
            resetStep();
          }}
          // style={{ color: "white", backgroundColor: "#00B87C" }}
          type="button"
          className={`btn btn-success`}
          data-cy="invite_to_workspace_modal_done_button"
        >
          Done
        </button>
      </div>
    </>
  );
};
