function isPushNotificationSupported() {
  return "serviceWorker" in navigator && "PushManager" in window;
}

async function askUserPermission() {
  return await Notification.requestPermission();
}

function sendNotification() {
  const img = " ";
  const text = "Welcome to Zuri Chat";
  const title = "Notification For Zuri Chat";
  const options = {
    body: text,
    icon: " ",
    vibrate: [200, 100, 200],
    tag: "Zuri Chat",
    image: img,
    actions: [{ action: "Detail", title: "View", icon: " " }]
  };
  navigator.serviceWorker.ready.then(function (serviceWorker) {
    serviceWorker.showNotification(title, options);
  });
}

function registerServiceWorker() {
  return navigator.serviceWorker.register("/sw.js");
}

async function createNotificationSubscription() {
  const serviceWorker = await navigator.serviceWorker.ready;
  return await serviceWorker.pushManager.subscribe({
    userVisibleOnly: true
  });
}

function getUserSubscription() {
  return navigator.serviceWorker.ready
    .then(function (serviceWorker) {
      return serviceWorker.pushManager.getSubscription();
    })
    .then(function (pushSubscription) {
      return pushSubscription;
    });
}

export {
  isPushNotificationSupported,
  askUserPermission,
  registerServiceWorker,
  sendNotification,
  createNotificationSubscription,
  getUserSubscription
};
