import { useState } from "react";
import "./App.css";

function App() {
  let [counter, setCount] = useState(0);

  function addValue() {
    if (counter == 20) {
      counter = counter;
    } else {
      counter = counter + 1;
    }
    setCount(counter);
  }

  function removeValue() {
    if (counter == 0) {
      counter = counter;
    } else {
      counter = counter - 1;
    }
    setCount(counter);
  }

  return (
    <>
      <h1>Counter Value : {counter}</h1>
      <button onClick={addValue}>Add Value</button>
      <br></br>
      <br></br>
      <button onClick={removeValue}>Remove Value</button>
    </>
  );
}

export default App;
