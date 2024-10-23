import { TitleProps } from "../../types/interfaces";
import s from "./subTitle.module.scss";

function SubTitle({ text }: TitleProps) {
  return <p className={s.text}>{text}</p>;
}

export default SubTitle;
