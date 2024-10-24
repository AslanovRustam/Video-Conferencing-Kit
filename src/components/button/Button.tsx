import { ReactNode } from "react";
import { IButtonType } from "../../types/interfaces";
import s from "./button.module.scss";

interface ButtonProps {
  text: string;
  onClick?: () => void;
  transparent?: boolean;
  children?: ReactNode;
  type?: IButtonType;
}

function Button({
  text,
  type = "button",
  children,
  transparent,
  onClick,
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${s.button} ${transparent && s.transparent}`}
    >
      {children}
      <span className={s.text}>{text}</span>
    </button>
  );
}

export default Button;
