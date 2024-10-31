import s from "./liveBadge.module.scss";

type LiveBadgeProps = {};

export default function LiveBadge({}: LiveBadgeProps) {
  return (
    <div className={s.container}>
      <p className={s.circle}></p>
      <p className={s.text}>LIVE</p>
    </div>
  );
}
