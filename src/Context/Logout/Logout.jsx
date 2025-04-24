import React, { createContext, useContext } from "react";




const LogoutContext = createContext();

export const LogoutProvider = ({ children }) => {
 
  const logout = async () => {
    await fetch("http://localhost:3009/logout", {
      method: "POST",
      credentials: "include",
    });

   
    window.location.href = "/login"; 
  };

  return (
    <LogoutContext.Provider value={{ logout }}>
      {children}
    </LogoutContext.Provider>
  );
};

export const useLogout = () => useContext(LogoutContext);
