import IconComponent from "../iconComponent/IconComponent";
import s from "./backgroundBadge.module.scss";

interface BackgroundBadgeProps {
  onClick: () => void;
  isBgSelect: boolean;
}

function BackgroundBadge({ isBgSelect, onClick }: BackgroundBadgeProps) {
  return (
    <div className={s.container}>
      <IconComponent
        iconName="IconBg"
        onClick={onClick}
        selectedClass={isBgSelect}
      />
    </div>
  );
}

export default BackgroundBadge;
