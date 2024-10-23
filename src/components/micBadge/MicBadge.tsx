import s from "./micBadge.module.scss";
import MicOff from "../../assets/MicOff.svg";
import MicOn from "../../assets/MicOn.svg";
import Dots from "../../assets/Dots-Vertical.svg";

interface MicBadgeProps {
  onClick: () => Promise<void>;
  isMicOn: boolean;
}

function MicBadge({ isMicOn, onClick }: MicBadgeProps) {
  return (
    <div className={s.container}>
      {isMicOn ? (
        <MicOn className={s.micro} onClick={onClick} />
      ) : (
        <MicOff className={s.micro} onClick={onClick} />
      )}
      <div className={s.divider}></div>
      <Dots className={s.dots} />
    </div>
  );
}

export default MicBadge;
