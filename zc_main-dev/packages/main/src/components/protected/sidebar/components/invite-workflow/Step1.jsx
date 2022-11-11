import React, { useState } from "react";

import {
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Container,
  Input,
  Tag,
  TagLabel,
  TagCloseButton,
  FormLabel,
  Text
} from "@chakra-ui/react";
import { InfoOutlineIcon, LinkIcon } from "@chakra-ui/icons";
import { BASE_CLIENT_URL } from "@zuri/utilities";

export const Step1 = ({
  name,
  onClo,
  forerr,
  listEmail,
  handleDelete,
  setForerr,
  validateEmail,
  currentWorkspace,
  sendButton,
  val,
  setVal,
  handleSubmit
}) => {
  const [foc, setFoc] = useState(false);
  const [canSend, setCanSend] = useState(false);

  const handleChange = e => {
    e.preventDefault();
    setVal(e.target.value);
    if (!e.target.value) {
      setForerr("");
      setCanSend(true);
    } else {
      setForerr(validateEmail(e.target.value));
      setCanSend(false);
    }
  };

  const handleSend = e => {
    e.preventDefault();
    if (!canSend) {
      setCanSend(!canSend);
      handleSubmit(e);
    } else {
      sendButton();
    }
  };

  const handleBlur = e => {
    setFoc(false);
    handleSubmit(e);
  };

  const copy = async () => {
    await window.navigator.clipboard.writeText(
      `${BASE_CLIENT_URL}/workspace/${currentWorkspace}`
    );
    alert(
      "link has been copied: " +
        `${BASE_CLIENT_URL}/workspace/${currentWorkspace}`
    );
  };

  return (
    <ModalContent
      m={0}
      p={0}
      borderRadius="2px"
      w="md"
      data-cy="invite_to_workspace_modal_step1"
    >
      <ModalHeader fontSize="20px">Invite People to {name}</ModalHeader>
      <ModalCloseButton onClick={onClo} />
      <ModalBody>
        <FormLabel fontWeight="bold">To:</FormLabel>
        <Container
          border="1px"
          spacing={4}
          p="2"
          borderRadius="2px"
          borderColor={foc ? (!forerr ? "green.300" : "red.200") : "gray.200"}
          maxW="container.3xl"
          minH={100}
        >
          {listEmail?.map((e_mail, index) => (
            <Tag
              boxShadow="md"
              mt={1}
              mr={1}
              key={index}
              colorScheme={!e_mail.error ? "green" : "red"}
            >
              {e_mail.error ? <InfoOutlineIcon mr="1" /> : null}
              <TagLabel data-cy="invite_to_workspace_modal_email_tag">
                {e_mail.mail}
              </TagLabel>
              <TagCloseButton onClick={() => handleDelete(index)} />
            </Tag>
          ))}

          <form onSubmit={handleSubmit} style={{ display: "inline-block" }}>
            <Input
              placeholder="zuriverse@gmail.com"
              variant="unstyled"
              onChange={handleChange}
              name="email"
              id="email"
              type="email"
              borderRadius="2px"
              onFocus={() => setFoc(true)}
              onBlur={handleBlur}
              value={val}
              pt={1}
              mx={1}
              mt={1}
              data-cy="invite_to_workspace_modal_textfield"
            />
          </form>
        </Container>

        {forerr ? (
          <Text color="red.500" fontSize="sm">
            <InfoOutlineIcon mr="1" /> {forerr}
          </Text>
        ) : null}

        <div className={`mt-1 pt-2 d-flex my-auto justify-content-between`}>
          <p
            onClick={copy}
            className={`mb-0 align-items-center`}
            style={{ color: "#00B87C", fontSize: "0.8rem" }}
          >
            <LinkIcon mr="1" />
            Copy invite link{" "}
            <span style={{ color: "black", fontSize: "0.8em" }}>
              {" "}
              - Edit link settings{" "}
            </span>
          </p>
          <button
            onClick={handleSend}
            style={{ color: "white", backgroundColor: "#00B87C" }}
            type="button"
            disabled={forerr ? true : false}
            className={`btn my-auto `}
            data-cy="invite_to_workspace_modal_send_button"
          >
            Send
          </button>
        </div>
      </ModalBody>
    </ModalContent>
  );
};
