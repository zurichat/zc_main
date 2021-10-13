import React, { useState } from "react";
import Loader from "react-loader-spinner";
import Text from "react-text";
import "./styles.css";

const modal = () => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(true);
    setTimeout(() => {
      setModal(false);
    }, 5000);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <button onClick={toggleModal}>Loader</button>
      {
        modal && (
          <div className="loader-container">
            <div className="loader-container-content" style={{ textAlign: "center"}}>
              <Loader
                type="Oval"
                color="#000000"
                thickness="5px"
                speed="0.65s"
                height={90}
                width={50}
              />  
              <Text 
                color="black" 
                fontSize="lg" 
                textAlign="center"
              >
                Sending Invites...
              </Text>
            </div>
          </div>
        )
      }
    </div>
  );
};

export default modal;
