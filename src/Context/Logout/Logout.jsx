import React, { createContext, useContext } from "react";

const LogoutContext = createContext();

export const LogoutProvider = ({ children }) => {
 
  const logout = async () => {
    const urlApi = import.meta.env.VITE_API_URL; // no me funciona con la urlApi
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
