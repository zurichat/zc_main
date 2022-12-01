import { useRef, useState, useEffect } from "react";

const Controls = ({ tracks }) => {
  const ref = useRef();
  const muteAudio = () => {
    tracks[0].stop(ref.current);
  };

  const muteVideo = () => {
    tracks[1].stop(ref.current);
  };
  return (
    <div>
      <div>
        <div className="audio"></div>
        <div className="video"></div>
      </div>
    </div>
  );
};

export default Controls;
