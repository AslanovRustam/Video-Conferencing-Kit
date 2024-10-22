import s from "./subTitle.module.scss";

function SubTitle({ text }) {
  return <p className={s.text}>{text}</p>;
}

export default SubTitle;
