import {
  createContext,
  useContext,
  useEffect,
  useCallback,
  useReducer
} from "react";

import {
  INITIAL_STATE,
  marketplaceReducer
} from "./marketplace/marketplace.reducer";
import { setModal } from "./marketplace/marketplace.action";

export const MarketPlaceContext = createContext(null);

export const MarketPlaceProvider = ({ children }) => {
  const [state, dispatch] = useReducer(marketplaceReducer, INITIAL_STATE);
  const { pluginId } = state;

  const toggleModalState = useCallback(() => {
    if (pluginId !== null) {
      dispatch(setModal(true));
    } else {
      dispatch(setModal(false));
    }
  }, [pluginId]);

  useEffect(() => {
    toggleModalState();
  }, [pluginId, toggleModalState]);

  return (
    <MarketPlaceContext.Provider value={{ state, dispatch }}>
      {children}
    </MarketPlaceContext.Provider>
  );
};

export const useMarketPlaceContext = () => {
  return useContext(MarketPlaceContext);
};
