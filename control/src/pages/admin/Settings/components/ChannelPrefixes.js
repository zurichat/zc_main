import React, { useState } from "react"
import styles from "../../styles/ChannelPrefixes.module.css"
import ChannelPrefix from "./ChannelPrefix"
import AddPrefixModal from "./AddPrefixModal"

const prefixData = [
  {
    prefix: "help",
    description: "For questions, assistance, and resources on a topic",
    creator: "Zuri Chat"
  },
  {
    prefix: "proj",
    description: "For collaboration on and discussion about a project",
    creator: "Zuri Chat"
  },
  {
    prefix: "team",
    description: "For updates and work from a department or team",
    creator: "Zuri Chat"
  }
]

const ChannelPrefixes = () => {
  const [modalOpen, setModalOpen] = useState(false)

  const toggleModal = state => setModalOpen(state)

  return (
    <div className={styles.Container}>
      <p>
        Creating guidelines for naming channels is one of the best ways to keep
        your workspace organized. Add a set of standard prefixes to keep channel
        names consistent and descriptive.
      </p>
      <div className={styles.prefixContainer}>
        {prefixData.map(({ prefix, description, creator }, index) => (
          <ChannelPrefix
            key={index}
            creator={creator}
            prefix={prefix}
            description={description}
          />
        ))}
      </div>
      <button className={styles.addPrefixBtn} onClick={() => toggleModal(true)}>
        Add Prefix
      </button>
      {modalOpen && (
        <div
          className={styles.modalContainer}
          onClick={() => toggleModal(false)}
        >
          <AddPrefixModal />
        </div>
      )}
    </div>
  )
}

export default ChannelPrefixes

