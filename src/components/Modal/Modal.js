import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import s from "./Modal.module.scss";

const modalRoot = document.querySelector("#modal-root");

export default function Modal({ onClose, children }) {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.code === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [onClose]);

  const handleBackdropClick = (event) => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  };

  const handleClose = () => {
    onClose();
  };

  return createPortal(
    <div className={s.modal_backdrop} onClick={handleBackdropClick}>
      <div className={s.modal_content}>
        {children}

        <button className={s.modal_close_btn} onClick={handleClose}></button>
      </div>
    </div>,
    modalRoot
  );
}
