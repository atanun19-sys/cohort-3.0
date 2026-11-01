import { createContext } from "react";
import { useState } from "react";
// setup our blank store
const MyStore = createContext();

const ContextProvider = ({ children }) => {
  return <MyStore.Provider>{children}</MyStore.Provider>;
};
