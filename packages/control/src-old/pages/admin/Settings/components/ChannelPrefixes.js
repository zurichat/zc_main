import React, { useState } from "react";
import styles from "../../styles/ChannelPrefixes.module.css";
import ChannelPrefix from "./ChannelPrefix";
import AddPrefixModal from "./AddPrefixModal";
import PrefixAdded from "./PrefixAdded";

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
];

const ChannelPrefixes = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [prefixes, setPrefixes] = useState(prefixData);
  const [popup, setPopup] = useState({
    open: false,
    text: ""
  });
  const toggleModal = event => state => {
    if (!event) {
      setModalOpen(state);
      return;
    }
    if (!event.target.className.includes("modalContainer") && !state) return;
    setModalOpen(state);
  };

  const handleAddPrefix = data => {
    if (prefixes.some(p => p.prefix === data.prefix))
      return alert("Prefix already exists");
    const newPrefixes = [data, ...prefixes];
    console.warn({ data });
    setPrefixes(newPrefixes);
    handlePopup("New Prefix Added!", true);
  };

  const removePrefix = prefix => {
    const newData = prefixes.filter(x => x.prefix !== prefix);
    setPrefixes(newData);
    handlePopup("Prefix removed!", true);
  };

  const handlePopup = (text, state) => {
    setPopup({ open: state, text: text });
    setTimeout(() => setPopup({ open: false }), 5000);
  };

  return (
    <div className={styles.Container}>
      <p>
        Creating guidelines for naming channels is one of the best ways to keep
        your workspace organized. Add a set of standard prefixes to keep channel
        names consistent and descriptive.
      </p>
      <div className={styles.prefixContainer}>
        {prefixes.map(({ prefix, description, creator }, index) => (
          <ChannelPrefix
            key={index}
            creator={creator}
            prefix={prefix}
            description={description}
            onDelete={removePrefix}
          />
        ))}
      </div>
      <button
        className={styles.addPrefixBtn}
        onClick={e => toggleModal(e)(true)}
      >
        Add Prefix
      </button>
      {modalOpen && (
        <div
          className={styles.modalContainer}
          onClick={e => toggleModal(e)(false)}
        >
          <AddPrefixModal closeModal={toggleModal} onAdd={handleAddPrefix} />
        </div>
      )}
      {popup.open && <PrefixAdded text={popup.text} closePopup={handlePopup} />}
    </div>
  );
};

export default ChannelPrefixes;
