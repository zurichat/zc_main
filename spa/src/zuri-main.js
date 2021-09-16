import React from "react";
import ReactDOM from "react-dom";
import singleSpaReact from "single-spa-react";
import Root from "./root2.component";

const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: Root,
  errorBoundary(err, info, props) {
    // Customize the root error boundary for your microfrontend here.
    console.table(err, info, props);
    return null;
  },
});

let defaultUserID = `61377a21e2358b02686503c5---`;

export const GetUserInfo = ({ userID }) => {
  return (
    <div>
      <p>This is user...</p>
      <div>{defaultUserID}, {userID}</div>
    </div>);
}

export const { bootstrap, mount, unmount } = lifecycles;
