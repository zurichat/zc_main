import React, { useState, useMemo, useEffect } from "react";
import ContactFormStyle from "./ContactFormContainer.module.css";
import detailsData from "../faq/detailsArray";
import { useTranslation } from "react-i18next";
import axios from "axios";
import { useDropzone } from "react-dropzone";
import { getUserInfo, BASE_API_URL } from "@zuri/utilities";
import { Alert, downIcon, arrowRight } from "../assets";
const activeStyle = {
  borderColor: "#2196f3"
};

const acceptStyle = {
  borderColor: "#00e676"
};

const rejectStyle = {
  borderColor: "#ff1744"
};

function ContactFormContainer() {
  const { t } = useTranslation();
  const [currentDetails, setCurrentDetails] = useState({});
  const [userAuth, setUserAuth] = useState({});
  const [values, setValues] = useState({
    email: "",
    subject: "",
    content: "",
    loading: false,
    error: "",
    success: ""
  });

  const  [touched, setTouched] = useState(false)

  const emailPattern =  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  useEffect(() => {

    // setUserAuth(userInfo.user.email ? userInfo.user : {});
    setValues(values => ({
      ...values,
      email: userAuth.email ? userAuth.email : values.email
    }));
  }, []);

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
    accept: "image/*,.xlsx,.xls,.doc, .docx,.ppt, .pptx,.txt,.pdf"
  });
  // .xlsx,.xls,image/*,.doc, .docx,.ppt, .pptx,.txt,.pdf

  const handleFileDelete = index => () => {
    delete acceptedFiles[index];
  };

  const acceptedFileItems = acceptedFiles.map((file, i) => (
    <div
      className="d-flex justify-content-between align-items-center"
      key={file.size}
    >
      <p className="mb-2 text-dark w-100">
        {file.name} - {file.size} bytes
      </p>
      <p
        style={{ fontSize: 12 }}
        className={`text-danger ${ContactFormStyle.cancel}`}
        fw-bold
        onClick={handleFileDelete(i)}
      >
        X
      </p>
    </div>
  ));

  const style = useMemo(
    () => ({
      ...(isDragActive ? activeStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {})
    }),
    [isDragActive, isDragReject, isDragAccept]
  );

  const handleChange = e => {
    // setValues(values => ({ ...values, [e.target.name]: e.target.value }))
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleTopicChange = detail => e => {
    setCurrentDetails(detail);
    setValues(values => ({ ...values, subject: detail.topic }));
  };

  const handleSubmit = event => {
    event.preventDefault();
    setValues(values => ({ ...values, loading: true }));
    let contactData = new FormData();
    values.email && contactData.append("email", values.email);
    values.subject && contactData.append("subject", values.subject);
    values.content && contactData.append("content", values.content);
    acceptedFiles[0] && contactData.append("file", acceptedFiles[0]);
    acceptedFiles[1] && contactData.append("file", acceptedFiles[1]);

    axios
      .post(`${BASE_API_URL}/contact`, contactData)
      .then(({ data }) => {
        setValues(values => ({
          ...values,
          error: "",
          subject: "",
          content: "",
          email: "",
          success: data.message,
          loading: false
        }));
        setCurrentDetails({});
      })
      .catch(e => {
        setValues(values => ({
          ...values,
          error: "error sending details pls try again",
          success: "",
          loading: false
        }));
      });
  };

  return (
    <div className={`${ContactFormStyle.contact_form_container}`}>
      <form className="" onSubmit={handleSubmit}>
        <div
          className={`mb-3 ${
            userAuth.email ? ContactFormStyle.is_hidden_animate : ""
          }`}
        >
          <label htmlFor="email" className="form-label fw-bold">
            {t("formEmail")}
          </label>
          <input
            className={`form-control ${ContactFormStyle.form_control}`}
            id="email"
            name="email"
            onChange={handleChange}
            value={values.email}
            placeholder="You@example.com"
            aria-describedby="email"
            type="email"
            required
            onBlur={() => setTouched(true)}
          />
          {!emailPattern.test(values.email) && touched && (
          <div className={ContactFormStyle.error_span}>
          <span>Input valid Email</span>
          </div>
          )}
        </div>

        <div
          className={`${ContactFormStyle.faqs_topic} ${
            !currentDetails.topic ? ContactFormStyle.is_hidden_animate : ""
          }`}
        >
          <div className={`w-100`}>
            <div className={`d-flex align-items-center my-4`}>
              <p className={`fw-bold mb-0 ${ContactFormStyle.subHead}`}>
                {t("Topic")}
              </p>

              <p
                className={`fw-bold ms-2 mb-0 ${ContactFormStyle.text_primary} ${ContactFormStyle.change}`}
                style={{
                  fontSize: "12px",
                  lineHeight: "14.4px"
                }}
                onClick={() => {
                  setValues(values => ({ ...values, subject: "" }));
                  setCurrentDetails({});
                }}
              >
                {t("Change")}
              </p>
            </div>
            <div className="d-grid">
              <button
                type="button"
                className={`btn ${ContactFormStyle.btn_primary} ${ContactFormStyle.btn_topic_select} shadow-none text-nowrap fw-bold mb-3`}
              >
                {currentDetails.topic}
              </button>
            </div>
            <p className={`fw-bold mb-3`} style={{ fontSize: "14px" }}>
              {t("relatedQuestions")}
            </p>
            <div
              className={`accordion ${ContactFormStyle.accordion}`}
              id="faqs"
            >
              {currentDetails.faqs &&
                currentDetails.faqs.map(({ title, details }, index) => (
                  <div className="accordion-item" key={title}>
                    <h2
                      className="accordion-header px-2"
                      style={{ height: "55px" }}
                      id="headingOne"
                    >
                      <button
                        className={`fw-bold ${ContactFormStyle.accordion_button} text-start bg-white shadow-none p-0 px-2`}
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={"#collapse" + index}
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        <span>{title}</span>{" "}
                        <img src={downIcon} className={`ms-1`} alt="down" />
                      </button>
                    </h2>
                    <div
                      id={"collapse" + index}
                      className={`${ContactFormStyle.accordion_collapse} accordion-collapse collapse`}
                      aria-labelledby="headingOne"
                      data-bs-parent="#faqs"
                    >
                      <div
                        className={`accordion-body ${ContactFormStyle.accordion_body}`}
                        dangerouslySetInnerHTML={{ __html: details }}
                      />
                    </div>
                  </div>
                ))}
            </div>
            <p className={`fw-bold my-3`} style={{ fontSize: "14px" }}>
              {t("relatedArticles")}
            </p>
            <ul
              style={{
                paddingLeft: 0
              }}
            >
              {currentDetails.articles &&
                currentDetails.articles.map((article, index) => {
                  return (
                    <li
                      key={index}
                      style={{
                        color: "rgb(0, 184, 124)",
                        fontWeight: "bold",
                        lineHeight: "18px",
                        display: "flex",
                        alignItems: "center",
                        padding: "4px 0",
                        cursor: "pointer"
                      }}
                    >
                      <a style={{ fontSize: "15px" }}>{article.title}</a>
                      <img
                        src={arrowRight}
                        alt=""
                        style={{ paddingLeft: "8px" }}
                      />
                    </li>
                  );
                })}
            </ul>
          </div>
        </div>

        <div
          className={`${ContactFormStyle.topic_tiles} ${
            currentDetails.topic ? ContactFormStyle.is_hidden_animate : ""
          } bg-white`}
        >
          <p className="fw-bold mb-3" style={{ fontSize: "16px" }}>
            {t("selectTopic")}
          </p>
          <div className={`d-flex flex-column flex-md-row flex-md-wrap`}>
            {detailsData.map(detail => (
              <button
                type="button"
                key={detail.topic}
                disabled={!(values.subject === "")}
                className={`btn ${ContactFormStyle.btn_topic} text-nowrap fw-bold rounded-pill mb-3 me-md-3`}
                onClick={handleTopicChange(detail)}
              >
                {detail.topic}
              </button>
            ))}
          </div>
        </div>

        <div
          className={`mb-3 ${
            currentDetails.topic ? ContactFormStyle.is_hidden_animate : ""
          }`}
        >
          <label htmlFor="topic" className="form-label fw-bold mt-2">
            {t("tellUs")}
          </label>
          <input
            type="text"
            className={`form-control ${ContactFormStyle.form_control}`}
            id="subject"
            name="subject"
            onChange={handleChange}
            value={values.subject}
            placeholder={t("enterTopic")}
            aria-describedby="topic"
            required
          />
        </div>

        {!(values.subject === "") && (
          <>
            <div className="mb-3">
              <label
                htmlFor="content"
                className="form-label fw-bold"
                style={{ fontSize: "14px !important" }}
              >
                {t("details")}
              </label>
              <textarea
                className={`form-control ${ContactFormStyle.form_control}`}
                name="content"
                id="exampleFormControlTextarea1"
                onChange={handleChange}
                placeholder={t("additionalInfo")}
                rows="3"
                required
              ></textarea>
            </div>

            <div className="my-3">
              <label htmlFor="attachments" className="form-label fw-bold">
                {t("attachFile")}
              </label>
              <div
                {...getRootProps({
                  style,
                  className: `dropzone ${ContactFormStyle.drag_drop} text-center flex-column align-items-center`
                })}
              >
                {acceptedFileItems}
                <input {...getInputProps()} />
                <p>{t("drag")}</p>
                <a
                  style={{
                    color: "rgb(0, 184, 124)",
                    fontSize: "15px",
                    cursor: "pointer"
                  }}
                >
                  {t("browse")}
                </a>
              </div>
            </div>
          </>
        )}
        <div className="d-flex flex-column flex-lg-row mt-4">
          <button
            type="submit"
            className={`btn ${ContactFormStyle.btn_primary} fw-bold`}
            style={{ height: "55px" }}
            disabled={values.subject === "" || values.loading}
          >
            {values.subject ? t("sendMessage") : t("getHelp")}
          </button>
          {values.subject && (
            <div className="d-flex align-items-center justify-content-center px-4 py-3">
              <p
                className="text-nowrap mb-0"
                style={{ fontWeight: "800px", fontSize: "13px" }}
              >
                {t("chat")}
              </p>
              <img className="ps-2" src={Alert} alt="alert circle" />
            </div>
          )}
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
        <a href="/privacy" className={ContactFormStyle.privacy}>
          {t("privacy")}
        </a>
      </form>
    </div>
  );
}

export default ContactFormContainer;
