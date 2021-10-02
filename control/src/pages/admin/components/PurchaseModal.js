import React, { useEffect } from 'react'
import styles from '../styles/purchaseModal.module.css'
import { authAxios } from '../Utils/Api'
import { useState } from 'react'
import { getCurrentWorkspace } from '../Utils/Common'

function PurchaseModal({ setHelpModal }) {
  const currentWorkspace = getCurrentWorkspace()
  const [workspaceData, setWorkspaceData] = useState({})
  const [loading, setLoading] = useState(false)
  

  const addToken = (number) => {
    const token = {token: number}
    if (currentWorkspace) {
      authAxios
        .post(`/organizations/${currentWorkspace}/add-token, ${token}`)
        .then(res => {
          setWorkspaceData(res.data.data)
        })
        .catch(err => {
          console.log(err)
        })
    }
  }

  const makePayment = () => {
    setLoading(true)
    authAxios
      .post(`/organizations/${currentWorkspace}/checkout-session`)
      .then(res => {
        setLoading(false)
        // console.log(res.data)
        toast.success(res.data.message, {
          position: 'top-center'
        })
      })
      .catch(err => {
        setLoading(false)
        console.log(err)
        toast.error('Oops, something went wrong check and try again', {
          position: 'top-center'
        })
      })
  }
  return (
    <div className={styles.backDrop}>
      <div className={styles.helpContainer}>
        <div className="d-flex">
          <h6>Token Purchased </h6>
          <p className={styles.token}>0 Token left</p>
        </div>

        <p>1 Token /$5</p>
        <form>
          <div class="form-group ">
            <label for="token">Token</label>
            <div>
              <input type="text" class="form-control" onChange={(evt) => { addToken(evt.target.value); }} />
            </div>
          </div>

          <div class="form-group ">
            <label for="price">Price</label>
            <div>
              <input type="text" className="form-control" />
            </div>
          </div>
          <div className="d-flex justify-content-end">
            <button
              type="submit"
              className="btn"
              onClick={() => setHelpModal(false)}
            >
              Cancel
            </button>
            <button type="submit" className="btn" onClick={makePayment}>
              Buy 12 token
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default PurchaseModal
