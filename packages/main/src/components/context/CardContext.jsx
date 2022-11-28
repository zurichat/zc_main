import { createContext, useState, useEffect } from "react";

export const CardContext = createContext(null);
export const CardProvider = ({ children }) => {
  const [cardList, setCardList] = useState([]);
  const [token, setToken] = useState(0);

  useEffect(() => {
    if (localStorage.getItem("cardList")) {
      setCardList(JSON.parse(localStorage.getItem("cardList")));
    }
  }, []);

  return (
    <CardContext.Provider
      value={{
        cardList,
        setCardList,
        token,
        setToken
      }}
    >
      {children}
    </CardContext.Provider>
  );
};
