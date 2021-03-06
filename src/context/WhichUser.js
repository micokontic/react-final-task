import { createContext, useContext, useEffect, useState } from "react";

export const WhichUserContext = createContext();


export const WhichUserContextProvider = (props) => {
    // possible values guide,user,default
  const existingUser = localStorage.getItem("host");
  const [currentUser, setCurrentUser] = useState(existingUser);
  
  const setUser=(userString)=>{
    localStorage.setItem("host", userString);
    setCurrentUser(userString)
  }
  return (
    <WhichUserContext.Provider value={{ currentUser, setUser }}>
      {props.children}
    </WhichUserContext.Provider>
  );
};