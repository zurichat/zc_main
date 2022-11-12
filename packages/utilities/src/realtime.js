import Centrifuge from "centrifuge";
import { WS_CONNECTION_URL } from "./constants";

// Setup Centrifugo Route
const centrifuge = new Centrifuge(WS_CONNECTION_URL);

centrifuge.setConnectData({ bearer: sessionStorage.getItem("token") });

centrifuge.connect();
centrifuge.on("connect", function (connectCtx) {
  console.warn("connected", connectCtx);
});

/**
 *
 * @param {string} channelName name of the channel to subscribe to
 * @param {Function} callback function to be called when a message is received
 * @description subscribe to channel from which you want to receive real-time messages.
 */

export const subscribeToChannel = (channelName, callback) => {
  centrifuge.subscribe(channelName, ctx => {
    callback(ctx);
  });
};
