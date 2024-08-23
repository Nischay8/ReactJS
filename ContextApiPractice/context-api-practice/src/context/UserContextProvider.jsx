/* eslint-disable react/prop-types */
import { useState } from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({ children }) => {
  const [user, SetUser] = useState("");

  return (
    <UserContext.Provider value={{ user, SetUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
