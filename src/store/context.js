import React, { useState } from "react";

const CardContext = React.createContext({
  user: "",
  userHandler: (input) => {},
});

export function CardProvider({ children }) {
  const [user, setUser] = useState("");

  const userHandler = (input) => {
    setUser(input);
  };

  return (
    <CardContext.Provider value={{ user, userHandler }}>
      {children}
    </CardContext.Provider>
  );
}

export default CardContext;
