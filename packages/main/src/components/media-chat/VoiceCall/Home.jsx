import Modal_ from "../utils/Modal";
import { useState } from "react";
import Rooms from "./Rooms";

const Home = () => {
  const [state, setState] = useState(false);
  const [title, setTitle] = useState("");

  return (
    <>
      <Modal_ state={state} setState={setState} title={title} />

      <button
        onClick={() => {
          setTitle("create room");
          setState(true);
        }}
      >
        Create room
      </button>
      <Rooms />
    </>
  );
};

export default Home;
