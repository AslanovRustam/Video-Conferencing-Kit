import { Dispatch, SetStateAction, useEffect, useRef, type FC } from "react";
import s from "./dropDown.module.scss";
import { IItemAny } from "../../types/interfaces";
import Check from "../../assets/check.svg";

interface DropDownListProps {
  items: any;
  onClick: (deviceId: string) => Promise<void>;
  showMenu: boolean;
  setShowMenu: Dispatch<SetStateAction<boolean>>;
}

const DropDownList: FC<DropDownListProps> = ({
  items,
  onClick,
  showMenu,
  setShowMenu,
}) => {
  const droptDownRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (
        droptDownRef.current &&
        !droptDownRef.current.contains(e.target as Node) &&
        showMenu
      ) {
        setShowMenu((prev) => !prev);
      } else if (showMenu) {
        console.log("showMenu false");

        setShowMenu(false);
      }
    };
    document.addEventListener("click", handler);
    return () => {
      document.removeEventListener("click", handler);
    };
  }, []);

  return (
    <ul className={`${s.list} ${showMenu && s.show}`} ref={droptDownRef}>
      {items?.map((item: IItemAny) => (
        <li
          className={s.item}
          key={item.deviceId}
          onClick={() => onClick(item.deviceId)}
        >
          <p className={s.text}>{item.label}</p>
          {item.checked && <Check className={s.icon} />}
        </li>
      ))}
    </ul>
  );
};

export default DropDownList;
