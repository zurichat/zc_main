import React, { useState } from "react";
import "@reach/dialog/styles.css";
import { Dialog, DialogOverlay, DialogContent } from "@reach/dialog";

const ResetModal = props => {
  const [showDialog, setShowDialog] = useState(false);
  const open = () => setShowDialog(true);
  const close = () => setShowDialog(false);
  return (
    <div>
      <button onClick={open}>Show Dialog</button>
      <Dialog isOpen={showDialog} onDismiss={close}>
        <p>My text is red because the style prop got applied to the div</p>
        <button onClick={close}>Okay</button>
      </Dialog>
    </div>
  );
};

export default ResetModal;
