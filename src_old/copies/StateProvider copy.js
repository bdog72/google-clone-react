//
//

import React, { createContext, useContext, useReducer } from 'react';

// Preparing the Data Layer
export const StateContext = createContext();

export const StateProvider = ({ reducer, initialSate, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialSate)}>
    {children}
  </StateContext.Provider>
);

// Hook whichl allows us to pull information from Data Layer
export const useStateValue = () => useContext(StateContext);
