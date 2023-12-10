import { createContext, useState } from "react";





export const context = createContext(null);
const Context = ({ children }) => {

  const data = 'life is beautiful'

  const contextData = {
data,
  };

  return (
    <context.Provider value={contextData}>{children}</context.Provider>
  );
};

export default Context;