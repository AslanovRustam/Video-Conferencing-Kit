import { ITitleProps } from "../../types/interfaces";
import s from "./subTitle.module.scss";

function SubTitle({ text }: ITitleProps) {
  return <p className={s.text}>{text}</p>;
}

export default SubTitle;
