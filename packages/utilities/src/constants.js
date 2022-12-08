/**
 * @description base API URL for request making
 */
export const BASE_API_URL = process.env.BASE_API_URL || "https://api.zuri.chat";

/**
 * @description base URL for the client
 */
export const BASE_CLIENT_URL =
  process.env.BASE_CLIENT_URL || "https://zuri.chat";

/**
 * @description centrifugo websocket connection URL
 */
export const WS_CONNECTION_URL =
  process.env.WS_CONNECTION_URL ||
  "wss://realtime.zuri.chat/connection/websocket";

export const AGORA_APP_ID = process.env.REACT_APP_AGORA_APP_ID;

export const AGORA_TOKEN = process.env.REACT_APP_AGORA_TOKEN;
