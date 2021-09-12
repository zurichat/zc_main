import React from 'react'
import './App.css'
import { useState } from 'react'
import Modal from './component/Modal'

function Error() {
  const [openModal, setOpenModal] = useState(false)
  return (
    <div className="App">
      <button
        className="openModalBtn"
        onClick={() => {
          setOpenModal(true)
        }}
      >
        Click
      </button>
      {openModal && <Modal closeModal={setOpenModal} />}
    </div>
  )
}

export default Error
