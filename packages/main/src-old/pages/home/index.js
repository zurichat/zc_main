import { useEffect } from "react";
import { goToDefaultChannel } from "../../api/channels";

const Homepage = () => {
  useEffect(() => {
    goToDefaultChannel();
  }, []);

  return <></>;
};

export default Homepage;
