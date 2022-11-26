import React from "react";
import { DownloadsMobile, DownloadsDesktop, Downloads } from "./components";

const Download = () => {
  const [width, setWidth] = React.useState(window.innerWidth);
  const breakpoint = 640;

  React.useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);

    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  // return width > breakpoint ? <DownloadsDesktop /> : <DownloadsMobile />;
  return width > breakpoint ? <Downloads /> : <Downloads />;
};

export default Download;
