import s from "./backgroundBadge.module.scss";
import IconBg from "../../assets/bg.svg";

function BackgroundBadge({ isBgSelect, onClick }) {
  return (
    <div className={s.container}>
      <IconBg
        className={`${s.micro} ${isBgSelect && s.selected}`}
        onClick={onClick}
      />
    </div>
  );
}

export default BackgroundBadge;
