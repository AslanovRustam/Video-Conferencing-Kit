import { ITitleProps } from "../../types/interfaces";
import s from "./title.module.scss";

function Title({ text }: ITitleProps) {
  return <h2 className={s.title}>{text}</h2>;
}

export default Title;
