import { ITitleProps } from "../../types/text";
import s from "./subTitle.module.scss";

function SubTitle({ text }: ITitleProps) {
  return <p className={s.text}>{text}</p>;
}

export default SubTitle;
