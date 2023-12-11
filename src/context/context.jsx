import { createContext, useEffect, useReducer } from "react";
import { initialState, reducer } from "../reducer/reducer";

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  let storedData = JSON.parse(localStorage.getItem("burgerState"));
  let initState = storedData || initialState;
  const [state, dispatch] = useReducer(reducer, initState);

  useEffect(() => {
    localStorage.setItem("burgerState", JSON.stringify(state));
  }, [state]);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
