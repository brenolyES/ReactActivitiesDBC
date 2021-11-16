import { InputContext } from "../context/InputContext"
import { useContext } from "react";

const Input = () => {
  const {setValue} = useContext(InputContext);
  return (
    <div>
      <input onChange={(a) => setValue(a.target.value)} type="text" placeholder="Digite aqui"/>
    </div>
  )
}

export default Input
