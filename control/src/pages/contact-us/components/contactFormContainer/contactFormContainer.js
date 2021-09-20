import React, { useState, useMemo, useEffect } from 'react'
import ContactFormStyle from '../../styles/contactFormContainer.module.css'
import detailsData from './detailsArray'
import axios from 'axios'
import { useDropzone } from 'react-dropzone'
import Alert from '../../assets/alert-circle.svg'

const activeStyle = {
  borderColor: '#2196f3'
}

const acceptStyle = {
  borderColor: '#00e676'
}

const rejectStyle = {
  borderColor: '#ff1744'
}

function ContactFormContainer() {
  const [currentDetails, setCurrentDetails] = useState({})
  const [values, setValues] = useState({
    email: '',
    subject: '',
    content: '',
    loading: false,
    error: '',
    success: ''
  })

  useEffect(() => {
    let storage = sessionStorage.getItem('user')
    setValues(values => ({
      ...values,
      email: storage ? JSON.parse(storage).email : values.email
    }))
  }, [])

  const {
    acceptedFiles,
    isDragActive,
    isDragAccept,
    isDragReject,
    getRootProps,
    getInputProps
  } = useDropzone({
    maxSize: 1048576,
    maxFiles: 2,
    accept: 'image/*,.xlsx,.xls,.doc, .docx,.ppt, .pptx,.txt,.pdf'
  })
  // .xlsx,.xls,image/*,.doc, .docx,.ppt, .pptx,.txt,.pdf

  const handleFileDelete = index => () => {
    delete acceptedFiles[index]
  }

  const acceptedFileItems = acceptedFiles.map((file, i) => (
    <div className="d-flex justify-content-between align-items-center">
      <p className="mb-2 text-dark w-100" key={file.path}>
        {file.name} - {file.size} bytes
      </p>
      <p
        className={`text-danger ${ContactFormStyle.cancel}`}
        fw-bold
        onClick={handleFileDelete(i)}
      >
        X
      </p>
    </div>
  ))

  const style = useMemo(
    () => ({
      ...(isDragActive ? activeStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {})
    }),
    [isDragActive, isDragReject, isDragAccept]
  )

  const handleChange = e => {
    // setValues(values => ({ ...values, [e.target.name]: e.target.value }))
    setValues({ ...values, [e.target.name]: e.target.value })
    console.log(values)
  }
  const handleTopicChange = detail => e => {
    setCurrentDetails(detail)
    setValues(values => ({ ...values, subject: detail.topic }))
  }

  const handleSubmit = event => {
    event.preventDefault()
    setValues(values => ({ ...values, loading: true }))
    let contactData = new FormData()
    values.email && contactData.append('email', values.email)
    values.subject && contactData.append('subject', values.subject)
    values.content && contactData.append('content', values.content)
    acceptedFiles[0] && contactData.append('attachments', acceptedFiles[0])
    acceptedFiles[1] && contactData.append('attachments', acceptedFiles[1])

    console.log(contactData.get('email'))
    console.log(values)
    axios
      .post('https://api.zuri.chat/contact', contactData)
      .then(({ data }) => {
        console.log(data)
        setValues(values => ({
          ...values,
          error: '',
          subject: '',
          content: '',
          email: '',
          success: data.message,
          loading: false
        }))
        setCurrentDetails({})
      })
      .catch(e => {
        console.log('Error:' + e)
        setValues(values => ({
          ...values,
          error: 'error sending details pls try again',
          success: '',
          loading: false
        }))
      })
  }
  return (
    <div className={`container-xl ${ContactFormStyle.contact_form_container}`}>
      <form className="" onSubmit={handleSubmit}>
        <div
          className={`mb-3 ${
            sessionStorage.getItem('user') && ContactFormStyle.is_hidden_animate
          }`}
        >
          <label htmlFor="email" className="form-label fw-bold">
            Your Email Address
          </label>
          <input
            type="email"
            className={`form-control ${ContactFormStyle.form_control}`}
            id="email"
            name="email"
            onChange={handleChange}
            value={values.email}
            placeholder="You@example.com"
            aria-describedby="email"
            required
          />
          {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
        </div>

        <div
          className={`${ContactFormStyle.faqs_topic} ${
            !currentDetails.topic && ContactFormStyle.is_hidden_animate
          }`}
        >
          <div className={`w-100`}>
            <div className={`d-flex align-items-center mb-3`}>
              <p className="fw-bold"> Topic</p>

              <p
                className={`fw-bold ms-2 pt-1 ${ContactFormStyle.text_primary} ${ContactFormStyle.change}`}
                style={{ fontSize: 12 }}
                onClick={() => {
                  setValues(values => ({ ...values, subject: '' }))
                  setCurrentDetails({})
                }}
              >
                Change
              </p>
            </div>
            <div className="d-grid">
              <button
                type="button"
                className={`btn ${ContactFormStyle.btn_primary} ${ContactFormStyle.btn_topic_select} shadow-none text-nowrap fw-bold rounded-pill mb-3 me-3`}
              >
                {currentDetails.topic}
              </button>
            </div>
            <p className="fw-bold mb-3">Related questions</p>
            <div
              className={`accordion ${ContactFormStyle.accordion}`}
              id="faqs"
            >
              {currentDetails.faqs &&
                currentDetails.faqs.map(({ title, details }, index) => (
                  <div className="accordion-item" key={title}>
                    <h2 className="accordion-header px-2 py-3" id="headingOne">
                      <button
                        className={`accordion-button fw-bold ${ContactFormStyle.accordion_button} bg-white shadow-none p-0 px-2`}
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={'#collapse' + index}
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        {title}
                      </button>
                    </h2>
                    <div
                      id={'collapse' + index}
                      className={`${ContactFormStyle.accordion_collapse} accordion-collapse collapse`}
                      aria-labelledby="headingOne"
                      data-bs-parent="#faqs"
                    >
                      <div
                        className="accordion-body"
                        dangerouslySetInnerHTML={{ __html: details }}
                      />
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>

        <div
          className={`${ContactFormStyle.topic_tiles} ${
            currentDetails.topic && ContactFormStyle.is_hidden_animate
          } bg-white`}
        >
          <p className="fw-bold mb-3">Select a Topic</p>
          <div className={`d-flex flex-wrap`}>
            {detailsData.map(detail => (
              <button
                type="button"
                key={detail.topic}
                disabled={!(values.subject === '')}
                className={`btn ${ContactFormStyle.btn_topic} text-nowrap fw-bold rounded-pill mb-3 me-3`}
                onClick={handleTopicChange(detail)}
              >
                {detail.topic}
              </button>
            ))}
            {console.log(currentDetails)}
          </div>
        </div>

        <div
          className={`mb-3 ${
            currentDetails.topic && ContactFormStyle.is_hidden_animate
          }`}
        >
          <label htmlFor="topic" className="form-label fw-bold">
            Or tell us what you need help with:
          </label>
          <input
            type="text"
            className={`form-control ${ContactFormStyle.form_control}`}
            id="subject"
            name="subject"
            onChange={handleChange}
            value={values.subject}
            placeholder="Enter any topic"
            aria-describedby="topic"
            required
          />
        </div>

        {!(values.subject === '') && (
          <>
            <div className="mb-3">
              <label htmlFor="content" className="form-label fw-bold">
                Can you give us more details?
              </label>
              <textarea
                className={`form-control ${ContactFormStyle.form_control}`}
                name="content"
                id="exampleFormControlTextarea1"
                onChange={handleChange}
                placeholder="Add any additional information we can use to help you."
                rows="3"
              ></textarea>
            </div>

            <div className="my-3">
              <label htmlFor="attachments" className="form-label fw-bold">
                Attach files (optional)
              </label>
              <div
                {...getRootProps({
                  style,
                  className: `dropzone ${ContactFormStyle.drag_drop} flex-column align-items-center`
                })}
              >
                <p
                  style={{ textDecoration: 'underline' }}
                  className="text-black"
                >
                  Accepted files
                </p>
                {acceptedFileItems}
                <input {...getInputProps()} />
                <p>Drag 'n' drop some files here, or click to select files</p>
                <em>
                  {`(Only 2 files(1mb max each) of the following type : images/jpg,jpeg,png doc,
                  pdf, docx will be accepted)`}
                </em>
              </div>
            </div>
          </>
        )}
        <div className="d-flex flex-column flex-lg-row">
          <button
            type="submit"
            className={`btn ${ContactFormStyle.btn_primary} fw-bold`}
            disabled={values.subject === '' || values.loading}
          >
            GET HELP
          </button>
          <div className="d-flex align-items-center justify-content-center px-2 py-3">
            <p className="text-nowrap">CHAT UNAVAILABLE</p>
            <img className="ps-2" src={Alert} alt="alert circle" />
          </div>
        </div>
        {values.error && (
          <p className="text-danger border p-2 mt-3 border-danger">
            {values.error}
          </p>
        )}
        {values.success && (
          <p className="text-success border p-2 mt-3 border-success">
            {values.success}
          </p>
        )}
      </form>
    </div>
  )
}

export default ContactFormContainer
