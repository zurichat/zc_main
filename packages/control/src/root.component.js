import { Provider } from "react-redux";
import App from "./App";
import { store } from "./redux/store";
import "./styles/global.css";
import "./translations/i18n";

export default function Root(props) {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}
