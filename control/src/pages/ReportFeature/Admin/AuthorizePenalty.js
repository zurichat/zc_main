import React, { useState } from 'react'
import styles from './reports.module.css'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import { BsFillXCircleFill } from 'react-icons/bs'
import { TiTick } from 'react-icons/ti'

export const AuthorizePenalty = props => {
  const [check, setCheck] = useState(false)

  const handleClose = () => setCheck(false)
  const handleShow = () => setCheck(true)

  const authorize = e => {
    e.preventDefault()
    localStorage.removeItem('zurimainComplaints')
    localStorage.setItem('zurimainComplaints', JSON.stringify(props.complaints))
    handleClose()
    props.putComplaints(true)
    props.nextStep(2)
  }

  const view = (id, e) => {
    e.preventDefault()
    props.nextStep(1)
    props.idSettter(id)
  }
  // const back = e => {
  //     e.preventDefault();
  //     props.prevStep();
  // };

  const { complaints } = props

  return (
    <div className={styles.formcontainer}>
      <div>
        <h1 className={`mb-5 ${styles.head1}`}>Complaints</h1>

        <br />

        <span
          style={{
            backgroundColor: '#00B87C',
            display: 'flex',

            flexDirection: 'space-around'
            // borderBlock: "1px solid green",
          }}
        >
          <b>Offender</b>
        </span>
        <div>
          <br />
        </div>
        {complaints.length ? (
          <>
            {complaints.map((complain, idx) => (
              <div key={idx}>
                <div
                  style={{ display: 'flex', flexDirection: 'space-inbetween' }}
                >
                  <div>
                    <label
                      className="form-check-label"
                      htmlFor="flexSwitchCheckChecked"
                    >
                      <b>{complain.email}</b>
                      <p className="date">{complain.date}</p>
                    </label>
                    {complain.authorize ? (
                      <TiTick color="green" onClick={handleShow} />
                    ) : null}

                    {/* <input className="form-check-input "  type="checkbox" id="flexSwitchCheckChecked" 
                        onChange={inputChange(idx)} 
                        checked={complain.authorize}
                        style = {{marginLeft:"0.5rem"}}
                        /> */}
                  </div>

                  <button
                    className="btn btn-success"
                    onClick={e => view(idx, e)}
                    style={{
                      // color: "#00B87C",
                      backgroundColor: ' fff',
                      padding: '10px 15px',
                      borderRadius: '5%',
                      marginLeft: '22rem'
                    }}
                  >
                    View Details
                  </button>
                </div>

                <br />
              </div>
            ))}
          </>
        ) : (
          <h1>No Complaints yet</h1>
        )}

        <br />
        <div
          className="row"
          style={{ display: 'flex', flexDirection: 'flex-end' }}
        >
          <div className="col-9">
            <button
              className="btn btn-success"
              onClick={handleShow}
              style={{
                color: 'white',
                borderRadius: '10%',
                padding: '12px',
                marginLeft: '15rem'
              }}
            >
              Authorize Penalty
            </button>
          </div>
        </div>
      </div>

      <Modal show={check} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title className="text-success">ZuriChat Watches</Modal.Title>
          <BsFillXCircleFill variant="secondary" onClick={handleClose} />
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to authorize these penalties?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="success" onClick={authorize}>
            Authorize
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default AuthorizePenalty
