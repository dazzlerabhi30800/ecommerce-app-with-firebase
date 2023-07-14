import React, { createContext, useReducer } from "react";

export const SetContext = createContext();

export const Actions = {
  showCart: "Show_Cart_Quantity",
  showDropdown: "Show_Dropdown_Menu",
  showSearchInput: "Show_Input_Search",
};

export const SetContextProvider = ({ children }) => {
  const initialState = {
    show: false,
    showMenu: false,
    showInput: false,
  };

  const stateReducer = (state, action) => {
    switch (action.type) {
      case "Show_Cart_Quantity":
        return {
          show: !state.show,
        };

      case "Show_Dropdown_Menu":
        return {
          showMenu: !state.showMenu,
        };

      case "Show_Input_Search":
        return {
          showInput: !state.showInput,
        };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(stateReducer, initialState);

  return (
    <SetContext.Provider value={{ data: state, dispatch }}>
      {children}
    </SetContext.Provider>
  );
};
