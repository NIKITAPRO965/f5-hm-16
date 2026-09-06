import { useState } from "react";
import Modal from "./component/Modal";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");
  const [isModal, setModal] = useState(false);

  const handleMinus = () => {
    setCount(count - 1);
  };

  const handlePlus = () => {
    setCount(count + 1);
  };

  const changeInput = (evt) => {
    setText(evt.target.value);
  };

  const toggleModal = () => {
    setModal((prev) => !prev);
  };

  return (
    <>
      <span>{count}</span>
      <button onClick={handleMinus} type="button">
        minus
      </button>
      <button onClick={handlePlus} type="button">
        plus
      </button>

      <input onChange={changeInput} type="text" value={text} />
      <h1>{text}</h1>

      <button onClick={toggleModal} type="button">
        open Modal
      </button>
      {isModal && <Modal onClose={toggleModal} />}
    </>
  );
}

export default App;
