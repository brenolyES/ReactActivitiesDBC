import Count from "./components/Count";
import Input from "./components/Input";
import Mirror from "./components/Mirror";

import CountContext from "./context/CountContext";
import InputContext from "./context/InputContext";

function App() {
  return (
    <div>
      <InputContext>
      <CountContext>
      <Count />
      <br />
      <Mirror />
      <br />
      <Input />
      </CountContext>
      </InputContext>
    </div>
  );
}

export default App;
