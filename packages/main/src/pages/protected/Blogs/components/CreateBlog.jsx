import React from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import style from "../Style/createBlog.module.css";
import converter from "html-to-markdown";
import * as Yup from "yup";
import { Formik } from "formik";
// import { CKEditor } from '@ckeditor/ckeditor5-react';
// import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
// import Base64UploadAdapter from "@ckeditor/ckeditor5-upload/src/adapters/base64uploadadapter"
import {
  Box,
  Text,
  InputGroup,
  InputRightElement,
  InputRightAddon,
  Button,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  FormHelperText,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  CloseButton,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  useToast
} from "@chakra-ui/react";

const initialValues = {
  title: ""
  // featured_image: ""
};

const formValidator = Yup.object().shape({
  title: Yup.string()
    .required("Kindly enter the title")
    .min(5, "Minimum of 5 characters")
  // featured_image: Yup.string().required("Kindly upload  the featured image")
});

const CreateBlog = () => {
  const [fileName, setFileName] = React.useState("");
  const [editorContent, setEditorContent] = React.useState("");
  const hiddenFileInput = React.useRef(null);
  const toast = useToast();
  const { push } = useHistory();

  // const handleClickUploadImage = event => {
  //   hiddenFileInput.current.click()
  // }

  return (
    <>
      <Header />
      <Box
        sx={{
          padding: "150px 40px 20px 40px",
          minHeight: "100vh"
        }}
      >
        <Text
          sx={{
            fontSize: "35px",
            fontWeight: "900",
            display: "flex",
            justifyContent: "center"
          }}
        >
          CREATE A BLOG
        </Text>
        <Formik
          initialValues={initialValues}
          validationSchema={formValidator}
          onSubmit={async (values, { setErrors, setSubmitting, setValues }) => {
            setSubmitting(true);

            if (editorContent === "") {
              return setErrors({ content: "cannot be empty" });
            }

            const dataToSubmit = {
              author: "Ayodeji Oludiya",
              content: editorContent,
              image_url: "",
              title: values.title,
              socials: [],
              tags: []
            };

            const config = {
              headers: {
                accept: "application/json",
                "Content-Type": "application/json"
              }
            };

            try {
              const response = await axios.post(
                "https://api.zuri.chat/posts",
                dataToSubmit,
                config
              );

              push("/blog");
            } catch (error) {
              toast({
                position: "bottom",
                render: () => (
                  <Box
                    sx={{
                      color: "white",
                      backgroundColor: "red",
                      padding: "10px",
                      display: "flex",
                      justifyContent: "center",
                      borderRadius: "5px",
                      fontSize: "20px"
                    }}
                  >
                    {error.response.data.message}
                  </Box>
                )
              });
            }

            setFileName("");
            setEditorContent("");
            setValues(initialValues, false);
          }}
        >
          {({
            handleChange,
            handleSubmit,
            values,
            errors,
            setFieldValue,
            setFieldError,
            setFieldTouched,
            touched,
            isSubmitting
          }) => (
            <form onSubmit={handleSubmit}>
              <FormControl id="title" isInvalid={errors.title && touched.title}>
                <FormLabel>Title</FormLabel>
                <Input
                  sx={{
                    width: "100%",
                    height: "50px",
                    paddingLeft: "20px",
                    border: "1px solid #3a3a3a",
                    borderRadius: "4px"
                  }}
                  type="text"
                  value={values.title}
                  onChange={handleChange}
                />
                <FormErrorMessage sx={{ color: "red" }}>
                  {errors.title}
                </FormErrorMessage>
              </FormControl>
              {/* <FormControl
                isInvalid={errors.featured_image && touched.featured_image}
              >
                <InputGroup size='lg' sx={{ paddingTop: "20px" }}>
                  <Input
                    id='featured_image'
                    sx={{ width: "100%", height: "50px", paddingLeft: "20px" }}
                    pr='4.5rem'
                    type='text'
                    isDisabled
                    value={fileName}
                  />
                  <InputRightAddon
                    children={
                      <Button
                        h='1.75rem'
                        sx={{
                          borderRadius: "4px",
                          height: "50px",
                          padding: "5px",
                          backgroundColor: "#00b88c",
                          color: "white"
                        }}
                        onClick={handleClickUploadImage}
                      >
                        Upload Image
                      </Button>
                    }
                  />
                </InputGroup>
                <FormErrorMessage sx={{ color: "red" }}>
                  {errors.featured_image}
                </FormErrorMessage>
              </FormControl>
              <input
                style={{ display: "none" }}
                accept='image/*'
                id='featured_image'
                ref={hiddenFileInput}
                type='file'
                onChange={e => {
                  e.persist()

                  if (!e.target.files.length) {
                    return setFieldValue("featured_image", "")
                  }

                  setFieldTouched("featured_image", true, false)

                  const file = e.target.files[0]

                  const fileSize = file.size / 1024 / 1024

                  if (fileSize > 2) {
                    e.target.value = ""

                    return setFieldError(
                      "featured_image",
                      "File size cannot be more than 2MB."
                    )
                  }
                  const reader = new window.FileReader()

                  reader.readAsDataURL(file)

                  reader.onload = () => {
                    setFileName(file.name)

                    setFieldValue("featured_image", reader.result)
                  }

                  reader.onerror = () => setFieldValue("featured_image", "")
                }}
              /> */}
              <Box sx={{ paddingTop: "30px" }}>
                <FormControl isInvalid={errors.content}>
                  {/* <CKEditor
                    id='content'
                    editor={ClassicEditor}
                    data=''
                    onChange={(event, editor) => {
                      setEditorContent(editor.getData())
                    }}
                  /> */}
                  <FormErrorMessage sx={{ color: "red" }}>
                    {errors.content}
                  </FormErrorMessage>
                </FormControl>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  paddingTop: "30px"
                }}
              >
                <Button
                  sx={{
                    backgroundColor: "#00b88c",
                    color: "white",
                    padding: "5px",
                    fontSize: "20px",
                    width: "30%"
                  }}
                  size="lg"
                  type="submit"
                  isLoading={isSubmitting}
                >
                  Submit
                </Button>
              </Box>
            </form>
          )}
        </Formik>
      </Box>
      <Footer />
    </>
  );
};

export default CreateBlog;
