import { CountContext } from "../context/CountContext";
import { useContext } from "react";

const Count = () => {
  const {count, setCount, diminuir, setDiminuir} = useContext(CountContext);
  return (
    <div>
      <p>Contador: {count}</p>
      <p>Diminuir: {diminuir}</p>
      <br />
      <button onClick={()=>setCount(count + 1)}>Adicionar</button>
      <button onClick={()=>setDiminuir(diminuir - 1)}>Diminuir</button>
    </div>
  )
};

export default Count;
