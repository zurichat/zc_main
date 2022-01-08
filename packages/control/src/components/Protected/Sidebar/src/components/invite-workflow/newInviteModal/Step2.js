import React from "react";
import { Container, Text } from "@chakra-ui/react";
import { CheckCircleIcon, Icon } from "@chakra-ui/icons";
import { FiUserPlus, FiSend } from "react-icons/fi";
import { AiFillCloseCircle } from "react-icons/ai";

export const Step2 = ({ name, listEmail, error, onDismiss, resetStep }) => {
  return (
    <>
      <Container m={5} centerContent>
        {!error ? (
          <CheckCircleIcon w={10} h={10} color="green.500" />
        ) : (
          <Icon as={AiFillCloseCircle} w={10} h={10} color="red.500" />
        )}

        <Text color="black.300" fontSize="2xl">
          {!error ? "Sent!" : "Not Sent!"}
        </Text>
      </Container>
      <Container>
        <Icon as={FiUserPlus} />
        <div>
          <Container spacing={4}>
            {listEmail.map((e_mail, index) => (
              <b key={index} color={!error ? "green" : "red"}>
                {e_mail.mail},{" "}
              </b>
            ))}
          </Container>
          <Text color="black.300" fontSize="md">
            {!error ? (
              <>
                has been invited as a <b>member</b> of <b>{name}</b>. They will
                receive but not be <br />
                able to reply messages till they join
              </>
            ) : (
              <>
                has not been invited as a <b>member</b> of <b>{name}</b>.
              </>
            )}
          </Text>
        </div>
      </Container>
      <div className={`mt-5 mb-3 pt-3 d-flex my-auto justify-content-between`}>
        <p className={`mt-1 align-items-center`} style={{ fontSize: "15px" }}>
          <Icon mr="1" as={FiSend} />
          <span style={{ color: "black", fontSize: "15px" }}>
            {" "}
            See previous invitations{" "}
          </span>
        </p>
        <button
          onClick={resetStep}
          type="button"
          // disabled={inviteEmail === '' ? true : false}
          className={`btn btn-outline-success  `}
        >
          Send more invites
        </button>
        <button
          onClick={() => {
            onDismiss();
            resetStep();
          }}
          style={{ color: "white", backgroundColor: "#00B87C" }}
          type="button"
          // disabled={inviteEmail === '' ? true : false}
          className={`btn my-auto `}
        >
          Done
        </button>
      </div>
    </>
  );
};
