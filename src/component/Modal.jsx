import { useEffect } from "react";
import style from "./Modal.module.css";

function Modal({ onClose }) {
  const handleBackDrop = (evt) => {
    if (evt.target === evt.currentTarget) {
      onClose();
    }
  };

  useEffect(() => {
    const hanldeEscClose = (evt) => {
      if (evt.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", hanldeEscClose);
    return () => {
      window.removeEventListener("keydown", hanldeEscClose);
    };
  });

  return (
    <>
      <div className={style.backdrop} onClick={handleBackDrop}>
        <div className={style.modal}>
          <form>
            <button
              className={style.close}
              onClick={() => onClose()}
              type="button"
            >
              X
            </button>
            <input type="text" />
            <button type="submit">click</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Modal;
