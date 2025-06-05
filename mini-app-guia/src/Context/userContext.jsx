import { createContext, useContext, useState } from "react";
import users from "../data/users";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const stored = localStorage.getItem("user");
    return stored ? JSON.parse(stored) : null;
  });

  const login = ({ username, password }) => {
    const found = users.find(
      (u) => u.username === username && u.password === password
    );

    if (found) {
      localStorage.setItem("user", JSON.stringify(found));
      setUser(found);
      return true;
    }

    return false;
  };

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
