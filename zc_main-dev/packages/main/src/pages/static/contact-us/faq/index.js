import en from "./en";
import es from "./es";
import fr from "./fr";

let lang;
const locale = localStorage.getItem("myLanguage")
  ? localStorage.getItem("myLanguage")
  : "en";

switch (locale) {
  case "en":
    lang = en;
    break;
  case "es":
    lang = es;
    break;
  case "fr":
    lang = fr;
    break;
  default:
    lang = "en";
}

export default lang;
