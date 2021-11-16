import { createContext, useState } from "react";

export const CountContext = createContext();

function CountContextProvider({children}){
  const [count, setCount] = useState(0);
  const [diminuir, setDiminuir] = useState(0);
  return(
  <CountContext.Provider value={{count, setCount, diminuir, setDiminuir}}>
    {children}
  </CountContext.Provider>
  );
};

export default CountContextProvider;