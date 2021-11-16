import { createContext, useState } from "react";

export const InputContext = createContext();

function InputProvider ({children}){
  const [value, setValue] = useState('');
  return(
    <InputContext.Provider value={{value, setValue}}>
      {children}
    </InputContext.Provider>
  );
}

export default InputProvider;

