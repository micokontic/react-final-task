import { createContext, useContext, useEffect, useState } from "react";

export const WhichUserContext = createContext();


export const WhichUserContextProvider = (props) => {
    // possible values guide,user,default
  const [currentUser, setCurrentUser] = useState('default');
  
  const setUser=(userString)=>{
    setCurrentUser(userString)
  }
  return (
    <WhichUserContext.Provider value={{ currentUser, setUser }}>
      {props.children}
    </WhichUserContext.Provider>
  );
};