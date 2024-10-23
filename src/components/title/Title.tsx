import { TitleProps } from "../../types/interfaces";
import s from "./title.module.scss";

function Title({ text }: TitleProps) {
  return <h2 className={s.title}>{text}</h2>;
}

export default Title;
