import React from "react";
import ReactDOM from "react-dom";
import singleSpaReact from "single-spa-react";
import Root from "./root.component";

const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: Root,
  domElementGetter: () => document.getElementById("zuri-plugin-load-section"),
  errorBoundary() {
    // errorBoundary(err, info, props) {

    // Customize the root error boundary for your microfrontend here.
    return null;
  }
});

export const { bootstrap, mount, unmount } = lifecycles;
