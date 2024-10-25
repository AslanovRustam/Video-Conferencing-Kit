import { Dispatch, SetStateAction, useEffect, useRef, type FC } from "react";
import { IAudioDevice } from "../../types/streamDevice";
import Check from "../../assets/icons/check.svg";
import s from "./dropDown.module.scss";

interface DropDownListProps {
  items: IAudioDevice[];
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
  const dropDownRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent): void => {
      if (
        dropDownRef.current &&
        !dropDownRef.current.contains(e.target as Node) &&
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
    <ul className={`${s.list} ${showMenu && s.show}`} ref={dropDownRef}>
      {items?.map((item: IAudioDevice) => (
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
