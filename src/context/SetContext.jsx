import { onAuthStateChanged } from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import { auth } from "./FirebaseConfig";

export const AuthContext = createContext();

export const formatPrice = (price) => {
  return price
    .toString()
    .split(/(?=(?:\d{3})+(?:\.|$))/g)
    .join(",");
};

export const handleActualPrice = (price, discount) => {
  return Math.floor((price * 100) / (100 - discount));
};

export const SetContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });

    return () => {
      unsub();
    };
  }, []);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);
  return (
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  );
};
