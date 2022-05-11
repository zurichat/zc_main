import React from "react";
import usePushNotifications from "./browserNotification3";
import styles from "../styles/browserNotifications.module.css";

export default function PushNotificationDemo() {
  const {
    userConsent,
    pushNotificationSupported,
    // userSubscription,
    onClickAskUserPermission
    // onClickSusbribeToPushNotification,
    // onClickSendSubscriptionToPushServer,
    // pushServerSubscriptionId,
    // onClickSendNotification
  } = usePushNotifications();

  const isConsentGranted = userConsent === "granted";

  return (
    <main>
      <button
        className={styles.push}
        enabled={!pushNotificationSupported || isConsentGranted}
        onClick={onClickAskUserPermission}
      >
        {isConsentGranted ? "Show Notifications" : "Show Notifications"}
      </button>
    </main>
  );
}
