import React, { useState, useRef, useEffect } from 'react'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Container,
  Lorem,
  useDisclosure,
  Switch,
  Grid,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  InputLeftAddon,
  Stack,
  Input,
  Tag,
  TagLabel,
  TagLeftIcon,
  TagRightIcon,
  TagCloseButton,
  VStack,
  HStack,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Text,
  Center,
  ChakraProvider,
  Spinner
} from '@chakra-ui/react'
import {
  PhoneIcon,
  AddIcon,
  InfoOutlineIcon,
  LinkIcon,
  CloseIcon,
  CheckCircleIcon,
  Icon
} from '@chakra-ui/icons'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { FiUserPlus, FiSend } from 'react-icons/fi'
import { AiFillCloseCircle } from 'react-icons/ai'

export const EmailInviteModal = props => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [listEmail, setListEmail] = useState([])
  const initialRef = useRef()
  const [openInvite, setOpenInvite] = useState(false)
  const [showDialog, setShowDialog] = useState(false)

  const [forerr, setForerr] = useState('')

  const open = () => setShowDialog(true)
  const close = () => setShowDialog(false)
  const openInviteModal = () => setOpenInvite(true)
  const closeInviteModal = () => setOpenInvite(false)

  const [inviteStep, setInviteStep] = useState(1)

  const nextIviteStep = () => {
    const steps = inviteStep
    setInviteStep(steps + 1)
  }

  const resetStep = () => {
    setInviteStep(1)
  }

  const prevStep = () => {
    const steps = inviteStep
    setInviteStep(steps - 1)
  }
  const onClo = () => {
    props.onDismiss()
    resetStep()
    setForerr('');
    setListEmail([]);
  }
  const handleDelete = index => {
    const lists = listEmail
    setListEmail(lists.filter((_mail, idx) => idx !== index))
    console.log(index)
    setForerr('')
  }

  const loader = () => {
    setTimeout(() => {
      nextIviteStep()
    }, 2000)
  }

  const sendButton = () => {
    if (listEmail.some(em => em.error === true)) {
      setForerr('Please clear all errors before proceeding.')
    } else if (listEmail.length === 0) {
      setForerr('No email(s) to send invites to. ')
    } else {
        nextIviteStep();
      const finEmails = []
      listEmail.map(mail => finEmails.push(mail.mail))
      props.setInviteEmails(finEmails)
      props.inviteUserViaMail(finEmails)
      // console.log(finEmails, 'whatsapplost');
    //   if (!props.sendLoading) {
    //     nextIviteStep()
    //   }
    }
  }

  function validateEmail(value) {
    let error
    // console.log(props.orgvalEmails.some((em)=>em === value) , value,props.orgvalEmails )
    // if (listEmail.some((em)=>em.mail === value) ) {
    //   error = 'Email already exists - Remove Duplicates.'
    //   setForerr(error)
    // }
    // if (props.orgvalEmails.some((em)=>em === value) ) {
    //   error = 'Email already exists in the workspace - Remove Duplicates.'
    //   setForerr(error)
    // }
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
      error = 'Invalid email address'
      setForerr(error)
    }
    if (!value) {
      error = 'Email is required'
      setForerr(error)
    }

    // else if (value.toLowerCase() !== "naruto") {
    //   error = "Jeez! You're not a fan 😱"
    // }
    return error
  }
  //    if (props.isOpen) {
  //     // setSize(newSize)
  //     onOpen()
  //     }else{
  //         onClose()
  //     }
  //   useEffect(() => {}, [props.sendLoadin])

  return (
    <ChakraProvider>
      {/* <Button onClick={handleInviteClick}/> */}

      {/* <Modal onClose={onClose} size={'xl'} isOpen={isOpen}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Modal Title</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                hgfjgcfjgfgc
                </ModalBody>
                <ModalFooter>
                <Button onClick={onClose}>Close</Button>
                </ModalFooter>
            </ModalContent>
        </Modal> */}
      <Modal isCentered isOpen={props.isOpen} onClose={onClo} size="xl">
        <ModalOverlay />
        {inviteStep === 1 ? (
          <ModalContent px="0.5rem" borderRadius="2px">
            <ModalHeader fontSize="20px">Invite People to HNGi8</ModalHeader>
            <ModalCloseButton onClick={onClo} />
            <ModalBody>
              {/* <Text color="#8B8B8B" mb="1rem">
            Channels are where your team communicates. They’re best when
            organized around a topic — #marketing, for example.
          </Text> */}

              {/* <FormControl mb="1rem"> */}
              <FormLabel fontWeight="bold">To:</FormLabel>

              {/* <Stack direction={["column", "row"]} spacing={4}> */}

              <Container
                border="1px"
                spacing={4}
                p="3"
                borderRadius="2px"
                borderColor={!forerr ? 'green.200' : 'red.200'}
                maxW="container.xl"
                minH={120}
              >
                {/* <Grid direction={["column", "row"]} spacing={4}> */}
                {listEmail.map((e_mail, index) => (
                  <Tag
                    boxShadow="md"
                    p="1"
                    m="1"
                    key={index}
                    colorScheme={!e_mail.error ? 'green' : 'red'}
                  >
                    {e_mail.error ? <InfoOutlineIcon mr="1" /> : null}
                    <TagLabel>{e_mail.mail}</TagLabel>
                    <TagCloseButton onClick={() => handleDelete(index)} />
                  </Tag>
                ))}
                {/* </Grid> */}
                {/* <Input
                ref={initialRef}
                //   onChange={(e) => setName(e.target.value)}
                type="email"
                variant="filled"
                borderRadius="2px"
                focusBorderColor="green.200"
                // height="100px"
            /> */}

                <Formik
                  initialValues={{ email: ' ' }}
                  onSubmit={(values, actions) => {
                    //   alert(JSON.stringify(values, null, 2))

                    if (listEmail.some(em => em.mail === values.email)) {
                      setListEmail([
                        ...listEmail,
                        { mail: values.email, error: true }
                      ])
                      let eror = 'Email already included.'
                      setForerr(eror)
                    } else if (
                      props.orgvalEmails.some(em => em === values.email)
                    ) {
                      setListEmail([
                        ...listEmail,
                        { mail: values.email, error: true }
                      ])
                      let eror = 'Email already exists in the workspace.'
                      setForerr(eror)
                    } else {
                      setListEmail([
                        ...listEmail,
                        { mail: values.email, error: false }
                      ])
                      setForerr('');
                    }
                    //   console.log(values)
                    actions.setSubmitting(false)
                  }}
                >
                  <Form>
                    <Field name="email" validate={validateEmail}>
                      {({ field, form }) => (
                        <FormControl
                          isInvalid={form.errors.email && form.touched.email}
                        >
                          {/* <FormLabel htmlFor="name">First name</FormLabel> */}
                          {/* <Input {...field} id="email" placeholder="email" type='email'/> */}
                          <Input
                            ref={initialRef}
                            //   onChange={(e) => setName(e.target.value)}
                            variant="unstyled"
                            {...field}
                            id="email"
                            type="email"
                            borderRadius="2px"
                            focusBorderColor="green.200"

                            // height="100px"
                          />
                          {/* <FormErrorMessage>
                            <InfoOutlineIcon mr="1"/> {form.errors.email}
                            {setForerr(form.errors.email)}
                          </FormErrorMessage> */}
                        </FormControl>
                      )}
                    </Field>
                    {/* <Button
            mt={4}
            colorScheme="teal"
            isLoading={props.isSubmitting}
            type="submit"
          >
            Submit
          </Button> */}
                  </Form>
                </Formik>
              </Container>
              {forerr ? (
                <Text color="red.500" fontSize="sm">
                  <InfoOutlineIcon mr="1" /> {forerr}
                  {console.log(forerr)}
                </Text>
              ) : null}

              {/* <InputGroup>
                <InputLeftElement
                pointerEvents="none"
                color="gray.300"
                fontSize="1.2em"
                children="$"
                />
                <Input placeholder="Enter amount" />
                <InputRightElement children={<CheckIcon color="green.500" />} />
            </InputGroup> */}
              {/* </Stack> */}
              {/* </FormControl> */}
              {/* 
          <FormControl mb="1.5rem">
            <FormLabel fontWeight="bold">
              <HStack>
                <Text>Description</Text>
                <FormHelperText>(optional)</FormHelperText>
              </HStack>
            </FormLabel>
            <Input borderRadius="2px" focusBorderColor="green.200" 
            // onChange={(e) => setDescription(e.target.value)} 
            />
            <FormHelperText> What is this channel about?</FormHelperText>
          </FormControl> */}
              {/* <div className ='row'>
          <Text as="h5" size="sm" color="green.300" fontSize="16px" fontWeight="bold" mb="0.5rem">
            Copy invite link 
          </Text>
          <Text>- Edit link settings </Text>
          </div> */}
              {/* <HStack justifyContent="space-between">
            <Text color="#8b8b8b" fontSize="0.9rem">
              When a channel is set to private, <br />
              it can only be viewed or joined by invitation.
            </Text>
            <Switch colorScheme="whatsapp" focusBorderColor="green.400" checked="false"
            //  onChange={(e) => setPriva(e.target.checked)}
             />
          </HStack> */}

              {/* <Button 
               px="2rem"
              py="1.2rem"
              colorScheme="whatsapp"
              borderRadius="md"
            //   onClick={handleSubmit}
              variant='outlined'
              Create
            /> */}
              <div
                className={`mt-3 pt-3 d-flex my-auto justify-content-between`}
              >
                <p
                  onClick={() => {
                    window.navigator.clipboard.writeText(
                      `https://zuri.chat/invite?organization=${props.currentWorkspace}`
                    )
                    alert(
                      'link has been copied: ' +
                        `https://zuri.chat/invite?organization=${props.currentWorkspace}`
                    )
                  }}
                  className={`mb-0 align-items-center`}
                  style={{ color: '#00B87C', fontSize: '15px' }}
                >
                  {/* <img className={`pe-3`} src={linkIcon} /> */}
                  <LinkIcon mr="1" />
                  Copy invite link{' '}
                  <span style={{ color: 'black', fontSize: '15px' }}>
                    {' '}
                    - Edit link settings{' '}
                  </span>
                </p>
                <button
                  // onClick={
                  //     // () => inviteUser()

                  //     }
                  onClick={sendButton}
                  style={{ color: 'white', backgroundColor: '#00B87C' }}
                  type="button"
                  // disabled={inviteEmail === '' ? true : false}
                  className={`btn my-auto `}
                >
                  Send
                </button>
              </div>
            </ModalBody>
          </ModalContent>
        ) : null}

        {/* {inviteStep === 2  ? (
 
        ) : null} */}

        {inviteStep === 2 ? (<>
            { props.sendLoadin ?
            <ModalContent>
            <ModalCloseButton onClick={onClo} />
            <ModalBody>
              <Container p={10} m={6} maxW="container.xl" centerContent>
                <Spinner
                  thickness="5px"
                  speed="0.65s"
                  emptyColor="green.100"
                  color="green.500"
                  size="xl"
                />
                <Text
                  color="black.300"
                  fontSize="lg"
                  // onClick={loader}
                >
                  Sending Invites...
                </Text>
              </Container>
            </ModalBody>
          </ModalContent>

            :
          <ModalContent>
            <ModalCloseButton onClick={onClo} />
            <ModalBody>
              {props.invSucc ? (
                <>
                  <Container m={5} centerContent>
                    <CheckCircleIcon w={10} h={10} color="green.500" />
                    <Text color="black.300" fontSize="2xl">
                      Sent!
                    </Text>
                  </Container>
                  <Container>
                    <Icon as={FiUserPlus} />
                    <div>
                      <Container spacing={4}>
                        {listEmail.map((e_mail, index) => (
                          // {console.log(e_mail.mail)}
                          <b key={index} color="green">
                            {e_mail.mail},{' '}
                          </b>
                        ))}
                      </Container>
                      <Text color="black.300" fontSize="md">
                        has been invited as a <b>member</b> of HNGi8. They will
                        receive but not be <br />
                        able to reply messages till they join
                      </Text>
                    </div>
                  </Container>
                </>
              ) : (
                <>
                  <Container m={5} centerContent>
                    <Icon
                      as={AiFillCloseCircle}
                      w={10}
                      h={10}
                      color="red.500"
                    />
                    <Text color="black.300" fontSize="2xl">
                      Not Sent!
                    </Text>
                  </Container>
                  <Container>
                    <Icon as={FiUserPlus} />
                    <div>
                      <Container spacing={4}>
                        {listEmail.map((e_mail, index) => (
                          // {console.log(e_mail.mail)}
                          <b key={index} color="green">
                            {e_mail.mail},{' '}
                          </b>
                        ))}
                      </Container>
                      <Text color="black.300" fontSize="md">
                        has not been invited as a <b>member</b> of HNGi8.
                      </Text>
                    </div>
                  </Container>
                </>
              )}
              <div
                className={`mt-5 mb-3 pt-3 d-flex my-auto justify-content-between`}
              >
                <p
                  // onClick={() => {
                  //   window.navigator.clipboard.writeText(
                  //     `https://zuri.chat/invite?organization=${currentWorkspace}`
                  //   )
                  //   alert('link has been copied')
                  // }}
                  className={`mt-1 align-items-center`}
                  style={{ fontSize: '15px' }}
                >
                  {/* <img className={`pe-3`} src={linkIcon} /> */}
                  <Icon mr="1" as={FiSend} />

                  <span style={{ color: 'black', fontSize: '15px' }}>
                    {' '}
                    See previous invitations{' '}
                  </span>
                </p>
                <button
                  // onClick={
                  //     // () => inviteUser()

                  //     }
                  onClick={resetStep}
                  // style={{ color: 'white', backgroundColor: '#00B87C' }}
                  type="button"
                  // disabled={inviteEmail === '' ? true : false}
                  className={`btn btn-outline-success  `}
                >
                  Send more invites
                </button>
                <button
                  // onClick={
                  //     // () => inviteUser()

                  //     }
                  onClick={() => {
                    props.onDismiss()
                    resetStep()
                  }}
                  style={{ color: 'white', backgroundColor: '#00B87C' }}
                  type="button"
                  // disabled={inviteEmail === '' ? true : false}
                  className={`btn my-auto `}
                >
                  Done
                </button>
              </div>
            </ModalBody>
          </ModalContent>
         }  </>
             ) : null}
      </Modal>
    </ChakraProvider>
  )
}

export default EmailInviteModal

// <ChakraProvider >
//           <Overlay
//           isOpen={false} onDismiss={closeInviteModal}
//           >
//           {inviteStep==1 ?
//           (
//             <Content
//               style={{ width: '55%', height: '55%' }}
//               aria-label="room-list"
//             >
//               <CloseButton className="close-button" onClick={closeInviteModal}>
//                 <Span aria-hidden>×</Span>
//               </CloseButton>
//               <div>
//                 <h3>Invite People to HNGi8</h3>
//               </div>
//               <br/>
//               {InviteSuccess && (
//                 <div className={`alert alert-success`}>
//                   Invite was sent to {inviteEmail}
//                 </div>
//               )}
//               <div>
//                 <label for="email_invite"><b>To:</b></label>
//               </div>
//               <Wrapper>
//                 <div >
//                   <input

//                     type="email"
//                     placeholder="name@gmail.com"
//                     multiple
//                     value={inviteEmail}
//                     onChange={e => setInviteEmail(e.target.value)}
//                     name="email_invite"
//                     className={`pb-4 form-control`}
//                   />
//                 </div>
//                 <div
//                   className={`mt-5 pt-3 d-flex my-auto justify-content-between`}
//                 >
//                   <p
//                     onClick={() => {
//                       window.navigator.clipboard.writeText(
//                         `https://zuri.chat/invite?organization=${currentWorkspace}`
//                       )
//                       alert('link has been copied')
//                     }}
//                     className={`mb-0 align-items-center`}
//                     style={{ color: '#00B87C', fontSize: '15px' }}
//                   >
//                     <img className={`pe-3`} src={linkIcon} />
//                     Copy invite link{' '}
//                     <span
//                     style={{ color: 'black', fontSize: '15px' }}
//                     >  - Edit link settings </span>
//                   </p>
//                   <button
//                     onClick={() => inviteUser()}
//                     style={{ color: 'white', backgroundColor: '#00B87C' }}
//                     type="button"
//                     disabled={inviteEmail === '' ? true : false}
//                     className={`btn my-auto `}
//                   >
//                     Send
//                   </button>
//                 </div>
//               </Wrapper>
//             </Content>

//           )
//           : null}
//           {inviteStep == 2?
//           (
//             <Content
//               style={{ width: '55%', height: '55%',alignItems:'center' }}

//             >

//               <Spinner
//                 thickness="4px"
//                 speed="0.65s"
//                 emptyColor="green.200"
//                 color="green.500"
//                 size="xl"

//               />
//               <h2><b>Sending Invite(s)</b></h2>

//             </Content>
//           )
//           : null}

//           {inviteStep === 3 ?
//           (
//              <Content
//               style={{ width: '55%', height: '55%' }}
//               aria-label="room-list"
//             >

//               <div>

//                 <h3>Sent!</h3>
//               </div>
//               <br/>
//               {InviteSuccess && (
//                 <div className={`alert alert-success`}>
//                   Invite was sent to {inviteEmail}
//                 </div>
//               )}
//               <div>
//                 <label for="email_invite"><b>To:</b></label>
//               </div>
//               <Wrapper>
//                 <div >
//                   <input

//                     type="email"
//                     placeholder="name@gmail.com"
//                     multiple
//                     value={inviteEmail}
//                     onChange={e => setInviteEmail(e.target.value)}
//                     name="email_invite"
//                     className={`pb-4 form-control`}
//                   />
//                 </div>
//                 <div
//                   className={`mt-5 pt-3 d-flex my-auto justify-content-between`}
//                 >
//                   <p
//                     onClick={() => {
//                       window.navigator.clipboard.writeText(
//                         `https://zuri.chat/invite?organization=${currentWorkspace}`
//                       )
//                       alert('link has been copied')
//                     }}
//                     className={`mb-0 align-items-center`}
//                     style={{ color: '#00B87C', fontSize: '15px' }}
//                   >
//                     <img className={`pe-3`} src={linkIcon} />
//                     Copy invite link{' '}
//                     <span
//                     style={{ color: 'black', fontSize: '15px' }}
//                     >  - Edit link settings </span>
//                   </p>
//                   <button
//                     onClick={() => inviteUser()}
//                     style={{ color: 'white', backgroundColor: '#00B87C' }}
//                     type="button"
//                     disabled={inviteEmail === '' ? true : false}
//                     className={`btn my-auto `}
//                   >
//                     Send
//                   </button>
//                 </div>
//               </Wrapper>
//             </Content>
//           )
//           : null}

//           </Overlay>
//           </ChakraProvider>

// const LinkStyled = styled(Link)`
//   font-size: 20px;
//   text-decoration: none;
//   font-weight: 500;
//   color: white;
// `
// export const Overlay = styled(DialogOverlay)`
//   position: fixed;
//   top: 0;
//   left: 0;
//   right: 0;
//   bottom: 0;
//   background: hsl(220deg 5% 40% / 0.8);
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   width: 100%;

//   padding: 2rem;
//   z-index: 5;
//   box-shadow: 0 15px 16px 0.17px rgba(0, 0, 0, 0.05);
// `
// export const Content = styled(DialogContent)`
//   position: relative;
//   background: white;
//   width: 100%;
//   height: 100%;
//   padding: 2rem;
//   display: flex;
//   margin: auto;
//   flex-direction: column;
// `
// const Wrapper = styled.div`
//   overflow-y: auto;
//   padding: 1rem 0;
// `
// const CloseButton = styled.button`
//   position: absolute;
//   top: 25px;
//   right: 15px;
//   // padding: 1.2rem 1.2rem;
//   width: 50px;
//   height: 50px;
//   color: black;
//   background-color: transparent;
//   border: none;
// `
// const Span = styled.span`
//   font-size: 2.5rem;
// `
// const Item = styled.p`
// font-family: Lato;
// font-size: 15px;
// font-style: normal;
// font-weight: 400;
// line-height: 28px;
// letter-spacing: 0em;
// text-align: left;
// display: flex;
// padding:0.25rem;
// & > img {
//   padding: 0 1rem;
// `

// const ClickButton = styled.img`
//   margin-left: auto;
// `

// const theme = {
//   bgcolor: '#00b87c'
// }
