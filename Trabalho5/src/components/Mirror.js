import { CountContext } from "../context/CountContext";
import { InputContext } from "../context/InputContext";
import { useContext } from "react";

const Mirror = () => {
  const {count, diminuir} = useContext(CountContext);
  const {value} = useContext(InputContext);
  return (
    <div>
      <hr />
      <h4>Espelho</h4>
        <p>Contador: {count}</p>
        <p>Diminuir: {diminuir}</p>
        <p>{value}</p>
        <hr />
    </div>
  )
};

export default Mirror;
