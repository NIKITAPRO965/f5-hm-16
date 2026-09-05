import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  const handleMinus = () => {
    setCount(count - 1);
  };

  const handlePlus = () => {
    setCount(count + 1);
  };

  const changeInput = (evt) => {
    setText(evt.target.value);
  };

  return (
    <>
      <span>{count}</span>
      <button onClick={handleMinus} type="button">minus</button>
      <button onClick={handlePlus} type="button">plus</button>

      <input onChange={changeInput} type="text" value={text} />
      <h1>{text}</h1>
    </>
  );
}




export default App
