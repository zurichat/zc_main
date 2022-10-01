import App from "./App";
import { ProvideAuth } from "./auth/use-auth";
import "./styles/global.css";
import "./translations/i18n";

export default function Root(props) {
  return (
    <ProvideAuth>
      <App />
    </ProvideAuth>
  );
}
