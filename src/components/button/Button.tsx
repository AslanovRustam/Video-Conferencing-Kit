import { ReactNode } from "react";
import s from "./button.module.scss";

interface ButtonProps {
  text: string;
  onClick?: () => void;
  transparent?: boolean;
  children?: ReactNode;
  type?: "button" | "submit" | "reset";
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
