import { ReactNode, useEffect } from "react";
import s from "./modalWrapper.module.scss";
import { createPortal } from "react-dom";

const modalRoot = document.querySelector("#modal");

interface ModalWrapperProps {
  children: ReactNode;
}

function ModalWrapper({ children }: ModalWrapperProps) {
  useEffect(() => {
    document.body.classList.add(s.overvlow);
    return () => {
      document.body.classList.remove(s.overvlow);
    };
  }, []);

  if (!modalRoot) {
    return null;
  }

  return createPortal(
    <div
      className={s.modalBackDrop}
      //   className={`${s.modalBackDrop} ${showModal ? s.show : ""}`}
      //   onClick={() => console.log("close")}
    >
      {children}
    </div>,
    modalRoot
  );
}

export default ModalWrapper;