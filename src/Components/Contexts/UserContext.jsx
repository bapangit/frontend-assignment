import { getUserStorage, setUserStorage } from "Utils/localStorage";
import { createContext, useState } from "react";
export const UserContext = createContext();
export const CountContext = createContext();

export const UserContextProvider = (prop) => {
  const [user, setUser] = useState(() => {
    const userData = getUserStorage();
    return userData;
  });

  const resetUser = (user) => {
    setUserStorage(user);
  };

  return (
    <UserContext.Provider value={{ user, resetUser }}>
      {prop.children}
    </UserContext.Provider>
  );
};
export const CountContextProvider = (prop) => {
  const [count, setCount] = useState(0);

  const addCount = (user) => {
    setCount(count + 1);
  };

  return (
    <CountContext.Provider value={{ count, addCount }}>
      {prop.children}
    </CountContext.Provider>
  );
};
