import { ReactNode, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import s from "./modalWrapper.module.scss";

interface ModalWrapperProps {
  children: ReactNode;
}

function ModalWrapper({ children }: ModalWrapperProps) {
  const modalRootRef = useRef(document.getElementById("modal"));

  useEffect(() => {
    document.body.classList.add(s.overvlow);
    return () => {
      document.body.classList.remove(s.overvlow);
    };
  }, []);

  if (!modalRootRef.current) {
    return null;
  }

  return createPortal(
    <div className={s.modalBackDrop}>{children}</div>,
    modalRootRef.current
  );
}

export default ModalWrapper;
// <div
//   className={s.modalBackDrop}
//     className={`${s.modalBackDrop} ${showModal ? s.show : ""}`}
//     onClick={() => console.log("close")}
// >
//   {children}
// </div>,
