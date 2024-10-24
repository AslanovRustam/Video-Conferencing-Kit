import s from "./backgroundBadge.module.scss";
import IconBg from "../../assets/bg.svg";

interface BackgroundBadgeProps {
  onClick: () => void;
  isBgSelect: boolean;
}

function BackgroundBadge({ isBgSelect, onClick }: BackgroundBadgeProps) {
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
