import { authAxios } from "./Api";
import styles from "./styles/PaymentMethod.module.css";

// images
import mastercard from "../assets/Mastercard.svg";
import jcb from "../assets/jcb.svg";
import visa from "../assets/visa.svg";
import amex from "../assets/american-express.svg";
import dinner from "../assets/dinners-club.svg";
import discover from "../assets/discover.svg";

// return the token from the session storage
export const getToken = () => {
  return sessionStorage.getItem("token") || null;
};

export const getUser = () => {
  const result = JSON.parse(sessionStorage.getItem("user") || null);
  return result;
};

// get Current Workspace
export const getCurrentWorkspace = () => {
  const currentWorkspace = localStorage.getItem("currentWorkspace") || null;
  return currentWorkspace;
};

// get Current Workspace Data
export const getCurrentWorkspaceData = () => {
  if (getCurrentWorkspace()) {
    authAxios
      .get(`/organizations/${getCurrentWorkspace()}`)
      .then(res => {
        // console.log(res.data.data)
        return res.data.data;
      })
      .catch(err => {
        console.error(err);
      });
  }
};

export const ValidateCard = (name, style) => {
  switch (name) {
    case "amex":
      return (
        <img
          className={style ? style : styles.inputImg}
          src={amex}
          alt="amex card"
        />
      );
    case "visa":
      return (
        <img
          className={style ? style : styles.inputImg}
          src={visa}
          alt="visa card"
        />
      );
    case "mastercard":
      return (
        <img
          className={style ? style : styles.inputImg}
          src={mastercard}
          alt="mastercard card"
        />
      );
    case "discover":
      return (
        <img
          className={style ? style : styles.inputImg}
          src={discover}
          alt="discover card"
        />
      );
    case "jcb":
      return (
        <img
          className={style ? style : styles.inputImg}
          src={jcb}
          alt="jcb card"
        />
      );
    case "diners":
      return (
        <img
          className={style ? style : styles.inputImg}
          src={dinner}
          alt="dinner card"
        />
      );
    default:
      return null;
  }
};

// get Users cards
export const getUsersCard = () => {
  const cardLists = JSON.parse(localStorage.getItem("cardList")) || null;
  return cardLists;
};

// remove the token and user from the session storage
export const removeUserSession = () => {
  sessionStorage.removeItem("token");
  sessionStorage.removeItem("user");
  sessionStorage.removeItem("session_id");
};

// ================================================

// The section of the password length
export const isLength = password => {
  if (password.length < 6) return true;
  return false;
};

// The section of the confirm password
export const isMatch = (password, cfpassword) => {
  if (password === cfpassword) return true;
  return false;
};
