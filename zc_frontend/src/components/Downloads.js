import { useState } from 'react'
import styles from '../styles/Downloads.module.css'
import pdf from '../assets/file-earmark-pdf.svg'
import open from '../assets/file-open.svg'
import close from '../assets/file-close.svg'
import pointy from '../assets/pointy.svg'

const Downloads = ({ setModal }) => {
  //State For testing
  const [files] = useState([
    {
      name: 'HNG Design Rules Book.pdf',
      size: '5MB PDF'
    },
    {
      name: 'HNG Entrepreneurship - Assignment 1.pdf',
      size: '205KB PDF'
    }
  ])
  return (
    <>
      <section role="dialog" className={styles.downloadsContainer}>
        <div
          className={styles.overlay}
          onClick={() => {
            setModal('no')
          }}
        ></div>
        <div className={styles.downloadsModal}>
          <header className={styles.downloadsHeader}>
            <h3 className={styles.downloadsHeading}>Downloads</h3>
            <div className={styles.iconContainer}>
              {files && (
                <div className={styles.deleteIconContainer}>
                  <button aria-label="Click to clear all downloads">
                    <svg
                      className={styles.deleteIcon}
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M5.25 7.5H6.75H18.75"
                        stroke="white"
                        stroke-width="1.22693"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M17.8635 7.50003C17.8635 7.16122 17.5888 6.88656 17.25 6.88656C16.9112 6.88656 16.6365 7.16122 16.6365 7.50003H17.8635ZM7.36346 7.50003C7.36346 7.16122 7.08881 6.88656 6.75 6.88656C6.41119 6.88656 6.13654 7.16122 6.13654 7.50003H7.36346ZM8.38664 7.5C8.38664 7.83881 8.66129 8.11346 9.0001 8.11346C9.3389 8.11346 9.61356 7.83881 9.61356 7.5H8.38664ZM14.3866 7.5C14.3866 7.83881 14.6613 8.11346 15.0001 8.11346C15.3389 8.11346 15.6136 7.83881 15.6136 7.5H14.3866ZM16.6365 7.50003V18H17.8635V7.50003H16.6365ZM16.6365 18C16.6365 18.4896 16.2396 18.8866 15.75 18.8866V20.1135C16.9172 20.1135 17.8635 19.1673 17.8635 18H16.6365ZM15.75 18.8866H8.25V20.1135H15.75V18.8866ZM8.25 18.8866C7.76038 18.8866 7.36346 18.4896 7.36346 18H6.13654C6.13654 19.1673 7.08277 20.1135 8.25 20.1135V18.8866ZM7.36346 18V7.50003H6.13654V18H7.36346ZM9.61356 7.5V6H8.38664V7.5H9.61356ZM9.61356 6C9.61356 5.51038 10.0105 5.11346 10.5001 5.11346V3.88654C9.33287 3.88654 8.38664 4.83277 8.38664 6H9.61356ZM10.5001 5.11346H13.5001V3.88654H10.5001V5.11346ZM13.5001 5.11346C13.9897 5.11346 14.3866 5.51038 14.3866 6H15.6136C15.6136 4.83277 14.6673 3.88654 13.5001 3.88654V5.11346ZM14.3866 6V7.5H15.6136V6H14.3866Z"
                        fill="white"
                      />
                    </svg>
                    <div role="tooltip" className={styles.toolTip}>
                      <p>Clear download</p>
                      <img src={pointy} alt="" />
                    </div>
                  </button>
                </div>
              )}
              <button aria-label="Click to close modal">
                <svg
                  onClick={() => {
                    setModal('no')
                  }}
                  className={styles.closeIcon}
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M17 7L7 17"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M7 7L17 17"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </div>
          </header>
          <article className={styles.downloadsBody}>
            {!files && (
              <div className={styles.info}>
                <h4 className={styles.heading}>Keep track of your downloads</h4>
                <p className={styles.content}>
                  Files you download from zurichat to your computer will appear
                  here.
                </p>
              </div>
            )}
            {files && (
              <ul className={styles.files}>
                {files.map((file, index) => (
                  <li key={index} className={styles.filesItem}>
                    <button
                      aria-label="Click to open file"
                      className={styles.filesLink}
                    >
                      <img src={pdf} alt="" />
                      <div className={styles.filesDetails}>
                        <h6 className={styles.heading}>{file.name}</h6>
                        <p
                          data-text={file.size}
                          aria-label={file.size}
                          className={styles.content}
                        ></p>
                      </div>
                    </button>
                    <div className={styles.more}>
                      <button
                        aria-label={`Open ${file.size} file`}
                        className={styles.openBtn}
                      >
                        <img src={open} alt="" />
                        <div role="tooltip" className={styles.toolTip}>
                          <p>Open containing folder</p>
                          <img src={pointy} alt="" />
                        </div>
                      </button>
                      <button
                        aria-label={`Clear ${file.size} file `}
                        className={styles.closeBtn}
                      >
                        <img src={close} alt="" />
                        <div role="tooltip" className={styles.toolTip}>
                          <p>Clear download</p>
                          <img src={pointy} alt="" />
                        </div>
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </article>
        </div>
      </section>
    </>
  )
}

export default Downloads
