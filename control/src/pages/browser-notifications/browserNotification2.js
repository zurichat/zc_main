import React from "react";
import usePushNotifications from "./browserNotification3";



export default function PushNotificationDemo() {
  const {
    userConsent,
    pushNotificationSupported,
    // userSubscription,
    onClickAskUserPermission,
    // onClickSusbribeToPushNotification,
    // onClickSendSubscriptionToPushServer,
    // pushServerSubscriptionId,
    // onClickSendNotification
  } = usePushNotifications();

  const isConsentGranted = userConsent === "granted";

  return (
    <main>

      <button enabled={!pushNotificationSupported || isConsentGranted} onClick={onClickAskUserPermission}>
        {isConsentGranted ? "Show Notifications" : "Show Notifications"} 
      </button>

     
    </main>
  );
}
