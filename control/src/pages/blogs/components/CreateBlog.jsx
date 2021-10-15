import React from 'react'
import Footer from '../../../components/Footer'
import Header from '../../../components/Header'
import style from '../Style/createBlog.module.css'
import { Formik } from 'formik'
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
  FormHelperText
} from '@chakra-ui/react'

const CreateBlog = () => {
  const [fileName, setFileName] = React.useState('')
  const hiddenFileInput = React.useRef(null)

  const handleClickUploadImage = event => {
    hiddenFileInput.current.click()
  }

  const initialValues = {
    title: '',
    featured_image: '',
    content: ''
  }
  //   const handleChangeUploadImage = event => {
  //     const fileUploaded = event.target.files[0]
  //     console.log('this is file uploaded', fileUploaded)
  //   }

  return (
    <>
      <Header />
      <Box sx={{ padding: '150px 40px 20px 40px', minHeight: '100vh' }}>
        <Text sx={{ fontSize: '35px', fontWeight: '900', display: 'flex', justifyContent: 'center' }}>
          CREATE A BLOG
        </Text>
        <Formik
          initialValues={initialValues}
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
            <form>
              <FormControl id='title' isRequired>
                <FormLabel>Title</FormLabel>
                <Input sx={{ width: '100%', height: '50px', paddingLeft: '20px', border: '1px solid #3a3a3a', borderRadius: '4px' }} type='text' />
              </FormControl>
              <InputGroup size='lg' sx={{ paddingTop: '20px' }}>
                <Input
                  sx={{ width: '100%', height: '50px', paddingLeft: '20px' }}
                  pr='4.5rem'
                  type='text'
                  isDisabled
                  value={fileName}
                />
                <InputRightAddon
                /* eslint-disable */
                children={<Button
                  h='1.75rem' sx={{
                    borderRadius: '4px',
                    height: '50px',
                    padding: '5px',
                    backgroundColor: '#00b88c',
                    color: 'white'
                  }}
                  onClick={handleClickUploadImage}
                                           >
                  Upload Image
                                           </Button>}
                />
              </InputGroup>
              <input
                style={{ display: 'none' }}
                accept='image/*'
                id='featured_image'
                ref={hiddenFileInput}
                type='file'
                onChange={e => {
                  e.persist()

                  if (!e.target.files.length) {
                    return setFieldValue('featured_image', '')
                  }

                  setFieldTouched('featured_image', true, false)

                  const file = e.target.files[0]

                  const fileSize = file.size / 1024 / 1024

                  if (fileSize > 2) {
                    e.target.value = ''

                    return setFieldError('featured_image', 'File size cannot be more than 2MB.')
                  }
                  const reader = new window.FileReader()

                  reader.readAsDataURL(file)

                  reader.onload = () => {
                    setFileName(file.name)

                    setFieldValue('featured_image', reader.result)
                  }

                  reader.onerror = () => setFieldValue('featured_image', '')
                }}
              />
            </form>
          )}
        </Formik>
      </Box>
      {/* <div className={style.page}>
        <h2> CREATE A BLOG</h2>
        <form>
          <FormControl id='email'>
            <FormLabel>Email address</FormLabel>
            <Input type='email' />
            <FormHelperText>We'll never share your email.</FormHelperText>
          </FormControl>
        </form>
      </div> */}
      <Footer />

    </>
  )
}

export default CreateBlog
