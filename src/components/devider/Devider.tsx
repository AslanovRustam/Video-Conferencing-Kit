import type { FC } from "react";
import s from "./devider.module.scss";

interface DeviderProps {}

const Devider: FC<DeviderProps> = () => {
  return <div className={s.devider}></div>;
};

export default Devider;
